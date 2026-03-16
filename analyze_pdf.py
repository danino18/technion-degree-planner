#!/usr/bin/env python3
import sys
import json

try:
    import pdfplumber
    
    pdf_path = r"c:\Users\eyald\.claude\projects\C--Users-eyald\katlog_hashmal.pdf"
    
    analysis = {
        "file_exists": True,
        "pages": 0,
        "tables_found": [],
        "text_preview": [],
        "structure": {}
    }
    
    with pdfplumber.open(pdf_path) as pdf:
        analysis["pages"] = len(pdf.pages)
        
        # Analyze first few pages
        for page_idx, page in enumerate(pdf.pages[:5]):
            page_data = {
                "page": page_idx + 1,
                "text_length": len(page.extract_text() or ""),
                "tables_count": len(page.extract_tables() or []),
                "text_preview": (page.extract_text() or "")[:500],
                "tables": []
            }
            
            # Extract tables from first page
            if page_idx == 0:
                tables = page.extract_tables()
                if tables:
                    for table_idx, table in enumerate(tables):
                        if table:
                            page_data["tables"].append({
                                "index": table_idx,
                                "rows": len(table),
                                "cols": len(table[0]) if table[0] else 0,
                                "first_row": str(table[0])[:200] if table else None
                            })
            
            analysis["text_preview"].append(page_data)
    
    # Save analysis
    with open(r"c:\Users\eyald\.claude\projects\C--Users-eyald\pdf_analysis.json", "w", encoding="utf-8") as f:
        json.dump(analysis, f, ensure_ascii=False, indent=2)
    
    print("Analysis complete")

except Exception as e:
    error_analysis = {
        "error": str(e),
        "type": type(e).__name__
    }
    with open(r"c:\Users\eyald\.claude\projects\C--Users-eyald\pdf_analysis.json", "w", encoding="utf-8") as f:
        json.dump(error_analysis, f, indent=2)
    print(f"Error: {e}")
