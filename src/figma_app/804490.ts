import { Xs } from "../figma_app/229837";
let i = [];
let a = 0;
export function $$s0(e) {
  let t = e.split(":");
  return {
    channel: t[0],
    timestamp: parseInt(t[1]),
    generation: parseInt(t[2]),
    signature: t[3]
  };
}
let o = Xs();
let $$l1 = o;
let $$d2 = o.v2;
window.realtimeClient = o;
[].push(function () {
  a > 0 || i.forEach(e => {
    a += 1;
    setTimeout(() => {
      try {
        e();
      } finally {
        a -= 1;
      }
    }, 6e4 + 24e4 * Math.random());
  });
});
export const EM = $$s0;
export const J1 = $$l1;
export const V$ = $$d2;
