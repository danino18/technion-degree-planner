# Technion Degree Planner

A modern web app for planning a Bachelor's degree in Electrical Engineering at the Technion. Students can build personalized semester-by-semester study plans, track course completion, manage grades, and receive recommendations for next courses based on prerequisites.

## ✨ Features

- 📚 **Course Catalog**: Complete list of EE courses with prerequisites and specializations
- 📅 **Semester Planning**: Auto-generate optimal semester-by-semester study plans
- ✅ **Course Tracking**: Mark courses as completed with grades
- 📊 **GPA Calculation**: Automatic GPA and grade point tracking
- 🎯 **Prerequisite Validation**: Ensures prerequisites are met before suggesting courses
- 🏆 **Specialization Support**: Track progress toward specialization requirements
- 💾 **Multiple Plans**: Create and compare multiple study plans
- 🌐 **SAP Integration**: Fetch real course data from Technion SAP (quarterly refresh)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS (no external UI framework)
- **Build**: Vite
- **Storage**: Browser localStorage
- **Data**: Static JSON + remote SAP fetcher

## 📁 Project Structure

```
src/
├── types/                 # TypeScript type definitions
│   └── course.ts         # Core types (Course, Progress, etc.)
├── data/                 # Static data
│   ├── courses.ts        # Course catalog
│   ├── specializations.ts # Specialization tracks
│   ├── prerequisites.ts  # Prerequisite graph
│   └── degreeRequirements.ts # Degree requirements
├── hooks/                # Custom React hooks
│   ├── useStudentProgress.ts # localStorage management
│   ├── useCourseLogic.ts     # Course business logic
│   └── usePlanningAlgorithm.ts # Semester planning
├── services/             # External services
│   └── sapFetcher.ts    # Technion SAP data fetcher
├── components/           # React components
│   ├── App.tsx
│   ├── PlanSelector.tsx
│   ├── DashboardView.tsx
│   ├── PlannerView.tsx
│   ├── CourseTable.tsx
│   ├── ProgressBar.tsx
│   └── ...
├── App.css
├── index.css
└── main.tsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will open at `http://localhost:3000`

## 📖 Usage

### Creating a Study Plan
1. Click "Create New Plan" to start
2. Enter your plan name
3. Go to "Plan Builder"
4. Select courses you're interested in taking
5. Click "Generate Plan" to auto-create a semester schedule

### Tracking Progress
1. In "Dashboard", see your overall progress
2. Click grade cells to update course grades
3. Mark courses as complete
4. View GPA, credits earned, and next course suggestions

### Managing Specializations
- Select 1-3 specialization tracks
- Track progress toward specialization minimums (typically 3 courses, ~10 credits)

## 🔄 SAP Data Refresh

The app automatically fetches course data from the Technion SAP every 90 days. To manually refresh:

```typescript
import { clearSAPCache, fetchSAPCourseData } from '@/services/sapFetcher';

// Clear cache
clearSAPCache();

// Fetch fresh data
const data = await fetchSAPCourseData();
```

## 📝 Data Population

The app comes with sample courses. To populate with full catalog:

1. **Extract from PDF**: Manually parse `katlog_hashmal.pdf` and add to `src/data/courses.ts`
2. **Add Prerequisites**: Update the prerequisite graph in `src/data/prerequisites.ts`
3. **Update Specializations**: Add course listings to `src/data/specializations.ts`

### Expected Course Format
```typescript
{
  code: "00440105",           // 8-digit Technion code
  name: "Electric Circuits",
  nameHebrew: "תיאוריית המעגלים",
  credits: 4.0,
  type: "core",
  lectureHours: 3,
  tutorialHours: 2,
  labHours: 0,
  semester: 2,
  specializations: ["electromagnetics"]
}
```

## 🎨 Customization

### Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --color-primary: #667eea;
  --color-secondary: #764ba2;
  /* ... */
}
```

### Credit Limits
Modify in `src/hooks/usePlanningAlgorithm.ts`:
```typescript
const MAX_CREDITS_PER_SEMESTER = 28;
const MIN_CREDITS_PER_SEMESTER = 18;
```

## 💾 Local Storage

Student progress is saved to browser localStorage with structure:
```json
{
  "technion_planner_<planId>": {
    "planId": "plan_...",
    "name": "Study Plan 2024",
    "completedCourses": {
      "00440105": {
        "completed": true,
        "grade": 85,
        "dateCompleted": "2024-01-15"
      }
    },
    "plannedSemester": [{
      "semester": 1,
      "courses": ["00440041", "00440074"],
      "totalCredits": 9.5
    }]
  }
}
```

## 🔧 API Reference

### useStudentProgress
```typescript
const {
  progress,
  markCourseCompleted,
  updateSpecializations,
  updatePlannedSemesters,
  ...
} = useStudentProgress(planId);
```

### useCourseLogic
```typescript
const {
  canTakeCourse,
  getAvailableCoursesForNextSemester,
  calculateGPA,
  suggestNextCourses,
  ...
} = useCourseLogic();
```

### usePlanningAlgorithm
```typescript
const {
  generateSemesterPlan,
  validatePlan,
} = usePlanningAlgorithm();
```

## 📞 Support

For issues or feature requests, please refer to the Technion course catalog or contact the development team.

## 📄 License

This project is provided as-is for educational purposes.

---

**Last Updated**: March 2026  
**Version**: 0.1.0 (Beta)
