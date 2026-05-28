import { apiConfig, staticDataUrl } from './config';
import { apiFetch } from './http';

function matchesFilter(course, filter = {}) {
  if (filter.is_active === true && !course.is_active) return false;
  if (filter.certification_level && course.certification_level !== filter.certification_level) {
    return false;
  }
  return true;
}

async function loadStaticCourses() {
  const response = await fetch(staticDataUrl('data/courses.json'));
  if (!response.ok) {
    throw new Error('Failed to load course data');
  }
  return response.json();
}

async function loadApiCourses() {
  const data = await apiFetch('/api/courses');
  return Array.isArray(data) ? data : data.courses || [];
}

export async function fetchCourses(filter = {}) {
  const all =
    apiConfig.coursesSource === 'api'
      ? await loadApiCourses()
      : await loadStaticCourses();
  return all.filter((course) => matchesFilter(course, filter));
}
