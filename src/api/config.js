/**
 * API configuration for self-hosted deployment.
 *
 * VITE_API_URL — Backend base URL (no trailing slash).
 *   Empty string = same origin, requests go to /api/...
 *   Example: https://api.nautk.org
 *
 * VITE_COURSES_SOURCE — "static" (default) or "api"
 *   static: load /data/courses.json (works on any static host)
 *   api:    GET {VITE_API_URL}/api/courses
 *
 * VITE_BASE_PATH — Vite base path if site is in a subdirectory (e.g. /nautk/)
 */
export const apiConfig = {
  apiUrl: (import.meta.env.VITE_API_URL || '').replace(/\/$/, ''),
  coursesSource: import.meta.env.VITE_COURSES_SOURCE || 'static',
  basePath: import.meta.env.VITE_BASE_PATH || '/',
};

export function apiUrl(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (apiConfig.apiUrl) {
    return `${apiConfig.apiUrl}${normalized}`;
  }
  return normalized;
}

export function staticDataUrl(path) {
  const normalized = path.startsWith('/') ? path.slice(1) : path;
  const base = apiConfig.basePath.endsWith('/')
    ? apiConfig.basePath
    : `${apiConfig.basePath}/`;
  return `${base}${normalized}`;
}
