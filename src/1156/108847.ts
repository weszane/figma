import { useEffect } from "react";
import { eU, zl, fp, md } from "../figma_app/27355";
import { IT } from "../figma_app/566371";
import { tS } from "../figma_app/516028";
import { Wh } from "../figma_app/615482";
import { Xu } from "../figma_app/588582";
import { gZ } from "../figma_app/952035";
import { GC } from "../figma_app/791586";
let $$u0 = Wh(() => eU(""));
let x = Wh(() => eU([]));
export function $$m2() {
  zl.set(x, []);
}
export function $$h1() {
  let e = tS();
  let t = Xu();
  let [n, l] = fp(x);
  let m = md($$u0);
  let {
    connectedProject
  } = GC();
  let [g] = IT(gZ({
    fileKey: e,
    functionName: "make-server"
  }), {
    enabled: !!connectedProject && t
  });
  useEffect(() => {
    if (!g.data || 0 === g.data.length) return;
    let e = g.data.filter(e => void 0 !== e.version).map(e => parseInt(e.version)).filter(e => !isNaN(e));
    let t = e.length > 0 ? Math.max(...e) : -1;
    let n = parseInt(m);
    isNaN(n) || (t = Math.max(n, t));
    l(e => [...e, ...g.data].filter((e, t, n) => t === n.findIndex(t => t.id === e.id)).filter(e => {
      let n = parseInt(e.timestamp);
      return (isNaN(n) || n > Date.now() - 3e5) && (!e.version || e.version === t.toString() || -1 === t);
    }));
  }, [g, m, l]);
  return [n, l];
}
export const GA = $$u0;
export const PM = $$h1;
export const ZO = $$m2;