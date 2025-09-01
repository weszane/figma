import { KF } from "../figma_app/465776";
import { hV, Si } from "../figma_app/387100";
import { Ts } from "../905/929976";
import { p5 } from "../figma_app/91703";
import { a as _$$a } from "../905/541060";
export function $$l2(e = Object.create(null), t) {
  if (Ts.matches(t) || _$$a.matches(t)) return Object.create(null);
  if (p5.matches(t) && t.payload.selection) {
    let {
      add,
      remove,
      replace
    } = t.payload.selection;
    if (KF(!((add || remove) && replace), "We expect either an add or remove OR a replace."), replace) return replace;
    let s = Object.assign(Object.create(null), e, add);
    for (let e in remove) delete s[e];
    return s;
  }
  return e;
}
export function $$d5(e, t, r) {
  for (let n in t) {
    let t = e.get(n);
    t && hV(t, r);
  }
}
export function $$c1(e, t, r) {
  for (let n in t) {
    let t = e.get(n);
    t && r(t);
  }
}
export function $$u0(e, t) {
  return !!e[t];
}
export function $$p4(e, t, r) {
  return !!$$_3(e, t, r);
}
export function $$_3(e, t, r) {
  if (t[r]) return e.get(r) || null;
  let n = null;
  Si(e, r, e => {
    if (!n && t[e.guid] && (n = e), n) return "stop";
  });
  return n;
}
export const K3 = $$u0;
export const YI = $$c1;
export const bp = $$l2;
export const cX = $$_3;
export const sp = $$p4;
export const y2 = $$d5;