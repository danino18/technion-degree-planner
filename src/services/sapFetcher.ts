/**
 * Sample course fetcher from Technion SAP
 * Fetches data every 3 months or on demand
 */

import axios from 'axios';
import { SAPCourse } from '@/types/course';

const SAP_DATA_URL = 'https://michael-maltsev.github.io/technion-sap-info-fetcher/data.json';
const CACHE_KEY = 'technion_sap_data_cache';
const CACHE_EXPIRY_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

export interface CacheMetadata {
  timestamp: number;
  version: string;
}

/**
 * Fetch course data from SAP, with caching
 */
export async function fetchSAPCourseData(): Promise<SAPCourse[] | null> {
  try {
    // Check if cached data is still valid
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
        console.log('Using cached SAP data');
        return data;
      }
    }

    // Fetch fresh data
    console.log('Fetching fresh SAP data...');
    const response = await axios.get(SAP_DATA_URL);
    
    // Transform SAP format to our format
    const sapData = transformSAPData(response.data);

    // Cache it
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({
        data: sapData,
        timestamp: Date.now(),
      })
    );

    return sapData;
  } catch (error) {
    console.error('Failed to fetch SAP data:', error);
    
    // Return cached data even if expired
    const cached = localStorage.getItem(CACHE_KEY);
    if (cached) {
      console.log('Using expired cached SAP data as fallback');
      return JSON.parse(cached).data;
    }
    
    return null;
  }
}

/**
 * Transform SAP API format to our format
 * 
 * SAP format (example):
 * {
 *   "general": {
 *     "מספר מקצוע": "00440105",
 *     "שם מקצוע": "תיאוריית המעגלים",
 *     "נקודות": "4",
 *     "מקצועות קדם": "..."
 *   },
 *   "schedule": [...]
 * }
 */
function transformSAPData(sapData: any): SAPCourse[] {
  const courses: SAPCourse[] = [];

  // Assuming sapData is an array of course objects or an object of courses
  const courseList = Array.isArray(sapData) ? sapData : Object.values(sapData || {});

  courseList.forEach((item: any) => {
    try {
      const general = item.general || item;
      
      const course: SAPCourse = {
        code: general['מספר מקצוע'] || general.code,
        name: general['שם מקצוע'] || general.name || '',
        nameHebrew: general['שם מקצוע'] || '',
        credits: parseFloat(general['נקודות'] || general.credits || '0'),
      };

      if (item.schedule && Array.isArray(item.schedule)) {
        course.schedule = item.schedule.map((schedItem: any) => ({
          day: schedItem.day || '',
          time: schedItem.time || '',
          type: schedItem.type || 'lecture',
          location: schedItem.location || '',
        }));
      }

      if (course.code && course.name) {
        courses.push(course);
      }
    } catch (err) {
      console.warn('Failed to parse SAP course:', item, err);
    }
  });

  return courses;
}

/**
 * Clear cached SAP data (for manual refresh)
 */
export function clearSAPCache() {
  localStorage.removeItem(CACHE_KEY);
}

/**
 * Get cache age in days
 */
export function getSAPCacheAge(): number | null {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;
  
  const { timestamp } = JSON.parse(cached);
  const ageMs = Date.now() - timestamp;
  return Math.floor(ageMs / (24 * 60 * 60 * 1000));
}
