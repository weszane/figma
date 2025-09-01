export function $$n4() {}
export function $$r2() {
  return {
    color: document.body.getAttribute("data-preferred-theme") || "light",
    brand: document.body.getAttribute("data-editor-theme") || "design",
    enhancedContrast: document.body.hasAttribute("data-enhanced-contrast")
  };
}
export function $$a1(e) {
  var t;
  t = "data-enhanced-contrast";
  e ? document.body.setAttribute(t, "") : document.body.removeAttribute(t);
}
export let $$s3 = ["data-editor-theme", "data-preferred-theme", "data-enhanced-contrast"];
export function $$o0({
  brand: e,
  color: t,
  enhancedContrast: i
}) {
  return {
    "data-editor-theme": e,
    "data-preferred-theme": t,
    "data-enhanced-contrast": i || void 0
  };
}
export function $$l5(e, t) {
  return e === t || e.color === t.color && e.brand === t.brand && e.enhancedContrast === t.enhancedContrast;
}
export const Pd = $$o0;
export const Qf = $$a1;
export const TE = $$r2;
export const dK = $$s3;
export const lQ = $$n4;
export const v9 = $$l5;