let n = ["text", "email", "number", "password", "search", "tel", "url"];
export function $$r0(e) {
  return e instanceof HTMLTextAreaElement || e instanceof HTMLInputElement && n.includes(e.type);
}
export function $$a2(e) {
  return e instanceof HTMLInputElement && !n.includes(e.type);
}
export function $$s1(e) {
  for (let t of e.querySelectorAll("input, textarea")) if ($$r0(t)) return t;
  return null;
}
export const AI = $$r0;
export const SI = $$s1;
export const hg = $$a2;