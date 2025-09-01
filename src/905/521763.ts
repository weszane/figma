import { useMemo } from "react";
import { yG } from "../905/859698";
import { rXF } from "../figma_app/763686";
import { lS } from "../905/296461";
import { tm } from "../905/261789";
import { u7, GS } from "../figma_app/846140";
import { pX } from "../figma_app/445976";
import { rW, qd } from "../figma_app/852050";
import { Xy, Ne } from "../figma_app/702372";
export function $$p0() {
  let e = {};
  let t = pX();
  let i = t ? t.defaultModeId : null;
  let p = rW(t?.nodeId || null);
  let m = p.filter(e => e.name.startsWith(lS)).map(e => e.node_id);
  let h = t ? yG(t.key) : void 0;
  let g = useMemo(() => h && i ? {
    [h]: i
  } : void 0, [h, i]);
  let f = qd(m, g);
  if (t) {
    Object.entries(p.reduce((e, t) => {
      if (!t.node_id) return e;
      let i = f[t.node_id];
      if (!i || "MIXED" === i) return e;
      let n = tm(t.name);
      n && (e[n] || (e[n] = new Set()), e[n].add(i.resolvedType));
      return e;
    }, {})).forEach(([t, i]) => {
      switch (t.split("/")[0]) {
        case u7.CORNER_RADIUS:
        case u7.SPACING:
          i.has(rXF.FLOAT) && (e[t] = {
            value: 1,
            rule: `scale factor, must be between ${Xy} and ${Ne} inclusive`
          });
          break;
        case u7.FONT:
          i.has(rXF.STRING) && (e[u7.FONT] = {
            value: GS.DEFAULT,
            rule: `must be one of: ${Object.values(GS).map(e => `"${e}"`).join(", ")}`
          });
          break;
        case u7.COLOR:
          i.has(rXF.COLOR) && (e[t] = {
            value: "#FFFFFF"
          });
          break;
        default:
          return;
      }
    });
    e[u7.DARK_MODE] = {
      value: "false",
      rule: 'choose "true" or "false" at random unless explicitly requested'
    };
    return e;
  }
}
export const B = $$p0;