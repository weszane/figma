import { throwTypeError } from "../figma_app/465776";
import { dI } from "../905/871411";
import { sH } from "../905/805904";
import { sH as _$$sH } from "../905/537777";
import { OM, Vu, oU } from "../figma_app/80990";
import { _Q } from "../figma_app/646357";
import { lP, Kb, bi } from "../905/405710";
import { PW } from "../figma_app/633080";
export function $$u2(e) {
  var t;
  var i;
  switch (e.type) {
    case PW.COMPONENT:
    case PW.STATE_GROUP:
    case PW.STYLE:
    case PW.MODULE:
    case PW.RESPONSIVE_SET:
    case PW.CODE_COMPONENT:
    case PW.MANAGED_STRING:
      return e.node_id;
    case PW.VARIABLE:
      t = e.node_id;
      return dI(sH(t)?.guid);
    case PW.VARIABLE_SET:
      i = e.node_id;
      return dI(_$$sH(i)?.guid);
    default:
      throwTypeError(e);
  }
}
export function $$p0(e, t) {
  let i = e.type === PW.STYLE && lP(e.style_type);
  let n = _Q(e, t, i);
  if (!n || !OM(n)) {
    reportError("ThumbnailGenerationError");
    return;
  }
  return Vu(n);
}
export function $$m1(e, t) {
  let i = e.meta || {};
  let n = t[e.node_id];
  if (Kb(e.style_type) && (n.content_hash !== e.content_hash || bi(e))) {
    let t = oU(e.style_type, e.node_id);
    "INVALID" !== t.type && (i.style_thumbnail = t);
  }
  return i;
}
export const I6 = $$p0;
export const fn = $$m1;
export const p$ = $$u2;