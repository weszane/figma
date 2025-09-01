export function $$n2(...e) {}
export function $$i3(e) {
  let [t, r] = e.split("-");
  if (r) {
    let [e, t] = r.split("_");
    return `${e}:${t}`;
  }
}
let a = /```(tsx|css)\s*([\w.]+)\s*([\s\S]*?)(?:```)?$/;
let $$s1 = /(```(?:tsx|css)[\s\S]*?(?:```|$))/g;
export function $$o0(e) {
  let t = e.match(a);
  if (!t) return null;
  let [r, n = "tsx", i = "index.tsx", s = ""] = t;
  if (!n || !i || "tsx" !== n && "css" !== n) return null;
  let o = r.endsWith("```");
  return {
    fileType: n,
    fileName: i,
    code: s.trim(),
    isComplete: o
  };
}
export const Co = $$o0;
export const XT = $$s1;
export const Yz = $$n2;
export const xg = $$i3;