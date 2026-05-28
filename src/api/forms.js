import { apiFetch } from './http';

export async function submitContactMessage(payload) {
  return apiFetch('/api/contact', {
    method: 'POST',
    body: payload,
  });
}

export async function submitEnrollment(payload) {
  return apiFetch('/api/enrollments', {
    method: 'POST',
    body: payload,
  });
}
