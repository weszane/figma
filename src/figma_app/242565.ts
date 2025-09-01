import { debugState } from "../905/407919";
import { vV, CX } from "../figma_app/770088";
export let $$n2;
let s = {
  mousedown: new Set(),
  mousemove: new Set(),
  mouseup: new Set()
};
export function $$o3(e, t) {
  s[e].add(t);
}
export function $$l0(e, t) {
  s[e].$$delete(t);
}
function d(e) {
  return (t, r) => {
    for (let n of s[e]) n({
      x: t,
      y: r
    });
  };
}
function c(e, t, r) {
  debugState.dispatch(vV({
    anchorPosition: {
      x: t,
      y: r
    }
  }));
  debugState.dispatch(CX({
    stablePath: e
  }));
}
export function $$u1() {
  $$n2 = {
    handleMouseDown: d("mousedown"),
    handleMouseMove: d("mousemove"),
    handleMouseUp: d("mouseup"),
    createNewCommentAtPosition: c
  };
}
export const AU = $$l0;
export const T6 = $$u1;
export const lS = $$n2;
export const on = $$o3;