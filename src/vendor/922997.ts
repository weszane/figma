import { s as _$$s } from "../vendor/878996";
let i;
export function $$o3(e) {
  return $$d2(e, location.href).href;
}
export function $$a0(e) {
  try {
    return !!$$d2(e);
  } catch (e) {
    return !1;
  }
}
export function $$h1(e) {
  let r = $$d2(e).pathname;
  return "/" === r[0] ? r : `/${r}`;
}
export function $$d2(e, r) {
  let n = g();
  if (n) try {
    return void 0 !== r ? new n(e, r) : new n(e);
  } catch (n) {
    throw Error(`Failed to construct URL: ${String(n)} ${_$$s({
      url: e,
      base: r
    })}`);
  }
  if (void 0 === r && !/:/.test(e)) throw Error(`Invalid URL: '${e}'`);
  let i = document;
  let o = i.createElement("a");
  if (void 0 !== r) {
    let e = (i = document.implementation.createHTMLDocument("")).createElement("base");
    e.href = r;
    i.head.appendChild(e);
    i.body.appendChild(o);
  }
  o.href = e;
  return o;
}
let p = URL;
function g() {
  if (void 0 === i) try {
    let e = new p("http://test/path");
    i = "http://test/path" === e.href;
  } catch (e) {
    i = !1;
  }
  return i ? p : void 0;
}
export const AY = $$a0;
export const L2 = $$h1;
export const c$ = $$d2;
export const l2 = $$o3;