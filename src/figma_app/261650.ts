import { Egt } from "../figma_app/763686";
export function $$i0(e) {
  let t = [];
  e.forEach(e => {
    e.content.forEach(e => {
      let r = JSON.parse(e);
      r.nodeId && t.push(r.nodeId);
    });
  });
  return t;
}
export function $$a1(e, t) {
  return [...new Set(e)].reduce((e, r) => {
    let i = t(r);
    let a = (Egt?.nodeIsPage(r) ? i?.absoluteRenderBounds : i?.absoluteBoundingBox) ?? null;
    e[r] = a ? {
      x: a.x,
      y: a.y,
      width: a.w,
      height: a.h
    } : a;
    return e;
  }, {});
}
export const N = $$i0;
export const j = $$a1;