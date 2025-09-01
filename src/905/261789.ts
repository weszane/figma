let n = /\u2726\/(.*)\//;
export function $$r0(e) {
  let t = n.exec(e);
  if (!t) return null;
  let i = t.slice(1);
  return i.length > 0 ? i[0] : null;
}
export const tm = $$r0;