import base64
import sys

pdf_path = r"c:\Users\eyald\.claude\projects\C--Users-eyald\katlog_hashmal.pdf"

try:
    # Try to read file info
    import os
    stat = os.stat(pdf_path)
    print(f"File size: {stat.st_size} bytes")
    
    # Try pdfplumber
    try:
        import pdfplumber
        with pdfplumber.open(pdf_path) as pdf:
            print(f"Total pages: {len(pdf.pages)}")
            
            # Get first page info
            page = pdf.pages[0]
            text = page.extract_text()
            print(f"First page text length: {len(text) if text else 0}")
            print(f"First 300 chars:\n{text[:300] if text else 'No text'}")
            
            # Check for tables
            tables = page.extract_tables()
            print(f"Tables in first page: {len(tables) if tables else 0}")
            if tables and tables[0]:
                print(f"First table rows: {len(tables[0])}")
                print(f"First table cols: {len(tables[0][0]) if tables[0] else 0}")
                print(f"First row preview: {tables[0][0][:2] if tables[0] else 'N/A'}")
    except ImportError:
        print("pdfplumber not installed")
        try:
            import PyPDF2
            print("PyPDF2 found")
            with open(pdf_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                print(f"Total pages (PyPDF2): {len(reader.pages)}")
                text = reader.pages[0].extract_text()
                print(f"First page text: {text[:300]}")
        except:
            print("PyPDF2 also not available")
            
except Exception as e:
    print(f"Error: {type(e).__name__}: {e}")
    import traceback
    traceback.print_exc()
