import dompurify from 'dompurify'

let a = /[\u202A-\u202E\u2060-\u206F]/g
export function sanitizeInput(e) {
  return e ? e.replace(a, '').normalize() : e
}
export function sanitizeHtml(e) {
  return dompurify.sanitize(e)
}
export const F = sanitizeInput
export const p = sanitizeHtml
