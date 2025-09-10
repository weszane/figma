import { A } from "../905/268204";
let r = ["mouse", "touch", "pen"];
let a = {
  element: A ? document.body : null,
  type: "pointer",
  device: "mouse",
  key: "",
  code: ""
};
let $$s0 = a;
function o(e) {
  let t = e.pointerType;
  a.type = "pointer";
  a.device = r.includes(t) ? t : "mouse";
  a.key = "";
  a.code = "";
  d(e.target);
}
function l(e) {
  a.type = "keyboard";
  a.device = "keyboard";
  a.key = e.key;
  a.code = e.code;
  d(e.target);
}
function d(e) {
  e?.nodeType === 1 ? a.element = e : a.element = document.body;
}
A && (window.addEventListener("pointerdown", o, !0), window.addEventListener("pointerup", o, !0), window.addEventListener("keydown", l, !0), window.addEventListener("keyup", l, !0));
export const F = $$s0;
