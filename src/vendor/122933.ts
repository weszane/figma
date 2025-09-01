import { f } from "../vendor/615177";
import { SY } from "../vendor/4355";
let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
function a(e) {
  let [r, n] = e.slice(0, -1).split("(");
  if ("drop-shadow" === r) return e;
  let [i] = n.match(SY) || [];
  if (!i) return e;
  let a = n.replace(i, "");
  let h = o.has(r) ? 1 : 0;
  i !== n && (h *= 100);
  return r + "(" + h + a + ")";
}
let h = /([a-z-]*)\(.*?\)/g;
let $$d0 = {
  ...f,
  getAnimatableNone: e => {
    let r = e.match(h);
    return r ? r.map(a).join(" ") : e;
  }
};
export const p = $$d0;