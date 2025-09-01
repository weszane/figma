import n from "../vendor/197638";
var r = n;
let a = {
  ALLOWED_TAGS: ["p", "ol", "ul", "blockquote", "h1", "h2", "strong", "i", "em", "s", "a", "li", "code", "pre", "br", "div"]
};
let s = r()();
export function $$o1(e) {
  return s.sanitize(e, a);
}
export function $$l0(e, t) {
  return s.sanitize(e, {
    ...a,
    FORBID_ATTR: t
  });
}
s.addHook("afterSanitizeAttributes", function (e) {
  "target" in e && (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noreferrer noopener nofollow ugc"));
});
export const W = $$l0;
export const z = $$o1;