import n from "../vendor/197638";
var r = n;
export function $$a0(e) {
  if (!e) return "";
  try {
    let t = e.replace(/<br>|<\/p>|<\/h2>|<\/li>/g, "$&\n");
    let i = s(t);
    return new DOMParser().parseFromString(i, "text/html").documentElement.textContent?.trim() ?? "";
  } catch (e) {
    console.error(e);
    return "";
  }
}
let s = (() => {
  let e;
  return t => (e || (e = r()()), e.sanitize(t));
})();
export function $$o1(e) {
  return e ? e.replace(/[&"'<>]/g, e => {
    switch (e) {
      case "&":
        return "&amp;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      default:
        return e;
    }
  }) : "";
}
export const At = $$a0;
export const Ul = $$o1;