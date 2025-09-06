import { c2 } from "../905/382883";
import { luZ } from "../figma_app/763686";
import { Hr } from "../905/871411";
import { logError } from "../905/714362";
import { uc, eB, kP } from "../9410/228612";
function l(e, t) {
  if (!e && !t) return !0;
  if (e && t) {
    if (uc(e) && uc(t)) return c2(e.action.transitionNodeID, t.action.transitionNodeID);
    if (eB(e) && eB(t)) return e.interactionIndex === t.interactionIndex;
  }
  return !1;
}
export function $$d1(e, t, i) {
  let r = [];
  for (let s of i) l(s, e) || (l(s, t) ? (r.push({
    ...e,
    startCondition: luZ.TRIGGER,
    interactionId: Hr
  }), r.push(t)) : r.push(s));
  let s = r.map((e, t, i) => {
    let r = t - 1 >= 0 && i[t - 1] && eB(i[t - 1]);
    return uc(e) && r ? {
      ...e,
      startCondition: luZ.TRIGGER
    } : e;
  });
  return kP.toPrototypeInteractions(s);
}
export function $$c0(e, t, i, r) {
  if (l(e, t) || l(e, i)) return kP.toPrototypeInteractions(r);
  if (!function (e, t, i) {
    let r = i.findIndex(t => l(t, e));
    let n = i.findIndex(e => l(e, t));
    return void 0 === e && 0 === n || void 0 === t && r === i.length - 1 || -1 !== r && -1 !== n && r + 1 === n;
  }(t, i, r)) {
    logError("Slides reorder object animations", "prevItem and nextItem are not in the correct order", {
      prevItem: t,
      nextItem: i,
      oldItems: r
    }, {
      reportAsSentryError: !0
    });
    return null;
  }
  for (let e = 0; e < r.length; e++) if (l(r[e], t)) {
    if (!l(r[e + 1], i)) return null;
    break;
  }
  let a = [];
  for (let s of r) l(s, e) || (t && l(s, t) ? (a.push(t), a.push({
    ...e,
    startCondition: uc(t) ? luZ.AFTER_PREVIOUS : luZ.TRIGGER
  })) : i && l(s, i) && uc(i) ? a.push({
    ...i,
    startCondition: luZ.AFTER_PREVIOUS
  }) : a.push(s));
  return kP.toPrototypeInteractions(a);
}
export const Eo = $$c0;
export const zQ = $$d1;