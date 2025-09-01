import { s as _$$s } from "../905/223112";
import { c4, an } from "../905/368836";
let n;
let s = () => {};
export function $$o1(e, t, i = .001) {
  let n = Math.random() < i;
  let r = c4();
  if (!n || r === an) return t();
  {
    let i = performance.now();
    let n = t();
    r({
      name: e,
      time: performance.now() - i
    });
    return n;
  }
}
export function $$l0(e, t) {
  if (!_$$s()) return () => {};
  let i = performance.now();
  return () => {
    !function (e, t, i) {
      let n = c(i);
      n.has(e) || n.set(e, 0);
      n.set(e, n.get(e) + t);
    }(e, performance.now() - i, t);
  };
}
let d = new Map();
let c = e => (d.has(e) || d.set(e, new Map()), d.get(e));
export function $$u2(e) {
  let t = null != n ? n : s;
  void 0 !== t && t !== an ? t({
    input: e
  }) : console.log(e);
}
export const mD = $$l0;
export const TX = $$o1;
export const JM = $$u2;