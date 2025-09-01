import { F } from "../905/171275";
export function $$r1(e) {
  return new Promise((t, i) => {
    let n = new Image();
    n.src = e;
    n.crossOrigin = "anonymous";
    n.onload = () => {
      t(e);
    };
    n.onerror = e => {
      i(e);
    };
  });
}
export function $$a0(e, t, i, r) {
  return 0 === t.length ? [e] : r || i === F.SLIDES ? [e, ...t] : [e, ...t, e];
}
export const E = $$a0;
export const N = $$r1;