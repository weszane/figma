import { G as _$$G } from "../vendor/635351";
import { d as _$$d } from "../vendor/456530";
import { OH, eO } from "../vendor/537916";
import { E } from "../vendor/476615";
import { M } from "../vendor/644572";
let s = e => "object" == typeof e && e.mix;
let o = e => s(e) ? e.mix : void 0;
function a(...e) {
  let r = !Array.isArray(e[0]);
  let n = r ? 0 : -1;
  let s = e[0 + n];
  let h = e[1 + n];
  let d = e[2 + n];
  let p = e[3 + n];
  let g = _$$G(h, d, {
    mixer: o(d[0]),
    ...p
  });
  return r ? g(s) : g;
}
function g(e, r) {
  let n = _$$d(r());
  let i = () => n.set(r());
  i();
  E(() => {
    let r = () => OH.update(i, !1, !0);
    let n = e.map(e => e.on("change", r));
    return () => {
      n.forEach(e => e());
      eO.update(i);
    };
  });
  return n;
}
export function $$v0(e, r, n, i) {
  let s = "function" == typeof r ? r : a(r, n, i);
  return Array.isArray(e) ? y(e, s) : y([e], ([e]) => s(e));
}
function y(e, r) {
  let n = M(() => []);
  return g(e, () => {
    n.length = 0;
    let i = e.length;
    for (let r = 0; r < i; r++) n[r] = e[r].get();
    return r(n);
  });
}
export const G = $$v0;