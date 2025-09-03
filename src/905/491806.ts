import { throwTypeError } from "../figma_app/465776";
import { sYL } from "../figma_app/763686";
import { Kn } from "../905/535806";
let s = [];
export function $$o4(e) {
  if (0 === e.length) return null;
  let t = URL.createObjectURL(new Blob([e]));
  s.push(t);
  return t;
}
export function $$l2() {
  let e;
  for (; e = s.pop();) URL.revokeObjectURL(e);
}
export function $$d1(e) {
  switch (e) {
    case Kn.TO_SOURCE:
      return sYL.BRANCH;
    case Kn.FROM_SOURCE:
      return sYL.SOURCE;
    default:
      throwTypeError(e);
  }
}
export function $$c3({
  branchKey: e,
  sourceKey: t,
  direction: i
}) {
  switch (i) {
    case Kn.TO_SOURCE:
      return t;
    case Kn.FROM_SOURCE:
      return e;
    default:
      throwTypeError(i);
  }
}
export function $$u0(e) {
  return new IntersectionObserver(t => {
    for (let i of t) i.isIntersecting && i.intersectionRatio < 1 && i.intersectionRatio > 0 && i.intersectionRect.height > 0 && i.intersectionRect.height < i.boundingClientRect.height ? i.target.classList.add(e) : i.target.classList.remove(e);
  }, {
    threshold: [0, 1]
  });
}
export const FS = $$u0;
export const Qx = $$d1;
export const SN = $$l2;
export const WO = $$c3;
export const bW = $$o4;