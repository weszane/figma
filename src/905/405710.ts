import { assert } from "../figma_app/465776";
import { c2 } from "../905/382883";
import { cd, _H } from "../figma_app/243058";
import { glU, Vzr } from "../figma_app/763686";
import { createRemovableAtomFamily, atom, useAtomValueAndSetter } from "../figma_app/27355";
import { hp } from "../vendor/162266";
import { logError } from "../905/714362";
import { Mk } from "../figma_app/31188";
import { Wh } from "../figma_app/615482";
import { PW } from "../figma_app/633080";
export function $$m11(e) {
  let t = glU.getDefaultStateForLocalStateGroup(e) || e;
  let [i, n] = Vzr.generateThumbnailForNode(t, 768, 768, 2, {});
  return n;
}
export function $$h7(e) {
  return !!$$A0(e.style_type) && !(e.meta && e.meta.style_thumbnail);
}
export function $$g2(e) {
  let t = e.meta?.style_thumbnail;
  return t && "INVALID" !== t.type && t || null;
}
export function $$f6(e) {
  return {
    ...e,
    meta: $$_9(e.meta)
  };
}
export function $$_9(e) {
  if ("string" == typeof e) try {
    return JSON.parse(e);
  } catch (e) {
    return {};
  }
  return e;
}
export function $$A0(e) {
  return "TEXT" === e || "FILL" === e || "EFFECT" === e || "GRID" === e;
}
export function $$y10(e) {
  return "EFFECT" === e || "GRID" === e;
}
export function $$b1(e, t) {
  return "FILL" === t && e.fillPaints ? {
    type: t,
    fillPaints: e.fillPaints
  } : "EFFECT" === t && e.effects ? {
    type: t,
    effects: e.effects
  } : "GRID" === t && e.layoutGrids ? {
    type: t,
    layoutGrids: e.layoutGrids
  } : "TEXT" === t && (e.fontSize || e.lineHeight) ? {
    type: t,
    metrics: {
      fontSize: e.fontSize,
      lineHeight: e.lineHeight
    }
  } : {
    type: "INVALID"
  };
}
export function $$v5(e) {
  if (e.meta && e.meta.style_thumbnail && "FILL" === e.meta.style_thumbnail.type) {
    let t = e.meta.style_thumbnail.fillPaints;
    return 1 === t.length && "SOLID" === t[0].type;
  }
  return !0;
}
export function $$I8(e) {
  if ("FILL" !== e.style_type) return !1;
  let t = e.meta && e.meta.style_thumbnail;
  if (!t || "FILL" !== t.type) return !1;
  for (let e of t.fillPaints) if (!e.opacity || e.opacity > 0) return !1;
  return !0;
}
let E = e => {
  let t = null;
  switch (e.type) {
    case PW.RESPONSIVE_SET:
      t = cd.toGuidStrIfLocal(e.assetId);
      break;
    case PW.CODE_COMPONENT:
      t = _H.toGuidStrIfLocal(e.assetId);
  }
  return t || (logError("thumbnails", "Could not parse nodeId for thumbnail generation", {
    assetId: e.assetId,
    type: e.type
  }), null);
};
let x = createRemovableAtomFamily(e => {
  let t = E(e);
  assert(!!t, "A valid nodeId is required for local asset thumbnail atom");
  return Wh(() => atom(null));
}, c2);
let S = createRemovableAtomFamily(e => atom(t => t(x(e)), (t, i, n) => {
  let r = x(e);
  let a = t(Mk[e.type].local)[e.assetId];
  if (!a) {
    logError("thumbnails", "Could not find local asset for thumbnail generation", {
      assetId: e.assetId,
      type: e.type
    });
    return null;
  }
  let s = a.version;
  let o = t(r);
  if (o && s !== o.version || null === o) {
    let t = E(e);
    if (!t) return null;
    i(r, function (e, t) {
      let i = $$m11(e);
      return {
        data: hp.from(i).toString("base64"),
        version: t
      };
    }(t, s));
  }
}), c2);
export function $$w3(e) {
  let [t, i] = useAtomValueAndSetter(S(e));
  i(void 0);
  return t;
}
export function $$C4(e) {
  return `data:image/png;base64,${e}`;
}
export const Kb = $$A0;
export const No = $$b1;
export const QH = $$g2;
export const TJ = $$w3;
export const U8 = $$C4;
export const XV = $$v5;
export const aV = $$f6;
export const bi = $$h7;
export const fP = $$I8;
export const iX = $$_9;
export const lP = $$y10;
export const lQ = $$m11;