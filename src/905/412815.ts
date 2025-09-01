import { ccR } from "../figma_app/763686";
let r = null;
let a = [];
let s = [];
function o(e) {
  switch (e) {
    case ccR.NONE:
      return null;
    case ccR.SCENEGRAPH_VALIDATION_ERROR:
      return Error("Scenegraph validation failure");
    case ccR.NON_ATOMIC_SYNC_ERROR:
      return Error("Could not sync atomically");
  }
}
export function $$l0(e) {
  let t = o(e.error);
  if (t) {
    for (let e of s) e(t);
    s = [];
    a = [];
  } else if (!e.unsaved.hasMultiplayerChanges) {
    for (let e of a) e();
    s = [];
    a = [];
  }
  r = e;
}
export function $$d1() {
  if (r) {
    let e = o(r.error);
    if (e) return Promise.reject(e);
    if (!r.unsaved.hasMultiplayerChanges) return Promise.resolve();
  }
  return new Promise((e, t) => {
    a.push(e);
    s.push(t);
  });
}
export const g = $$l0;
export const l = $$d1;