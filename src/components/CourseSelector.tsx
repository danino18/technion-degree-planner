import { useState } from 'react';
import { courses } from '@/data/courses';
import './components.css';

interface CourseSelectorProps {
  selectedCourses: Set<string>;
  onAddCourse: (courseCode: string) => void;
  onRemoveCourse: (courseCode: string) => void;
}

export default function CourseSelector({
  selectedCourses,
  onAddCourse,
  onRemoveCourse,
}: CourseSelectorProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'core' | 'elective' | 'general'>('all');

  const filtered = courses.filter(course => {
    const matchesSearch =
      course.code.includes(searchTerm) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (course.nameHebrew && course.nameHebrew.includes(searchTerm));

    const matchesType = filterType === 'all' || course.type === filterType;

    return matchesSearch && matchesType;
  });

  return (
    <div className="course-selector">
      <h3>Select Courses</h3>

      <div className="course-selector-controls">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterType}
          onChange={e => setFilterType(e.target.value as any)}
          className="filter-select"
        >
          <option value="all">All Types</option>
          <option value="core">Core</option>
          <option value="elective">Elective</option>
          <option value="general">General</option>
        </select>
      </div>

      <div className="course-selector-list">
        {filtered.map(course => {
          const isSelected = selectedCourses.has(course.code);
          return (
            <div
              key={course.code}
              className={`course-selector-item ${isSelected ? 'selected' : ''}`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() =>
                  isSelected ? onRemoveCourse(course.code) : onAddCourse(course.code)
                }
                id={`course-${course.code}`}
              />
              <label htmlFor={`course-${course.code}`}>
                <strong>{course.code}</strong> - {course.name}
                <span className="course-selector-credits">{course.credits} cr</span>
              </label>
            </div>
          );
        })}
      </div>

      <div className="course-selector-info">
        {selectedCourses.size} course(s) selected
      </div>
    </div>
  );
}
