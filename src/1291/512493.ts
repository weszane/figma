import { jsx, jsxs } from "react/jsx-runtime";
import { d4 } from "../vendor/514228";
import { Fk } from "../figma_app/167249";
import { MO, Tq } from "../3682/618608";
import { nM, dK } from "../3682/933480";
export function $$l0() {
  let e = function () {
    let e = d4(e => e.mirror.appModel.onCanvasPillInfo);
    return Fk((e, t) => t && 0 !== t.length ? t.map(t => {
      let s = e.get(t.guid);
      if (!s || "-1:-1" === s.guid) return null;
      let i = {
        guid: s.guid,
        name: s.name,
        type: s.type,
        boundingBox: s.absoluteBoundingBox,
        isFigmaPurple: t.isFigmaPurple,
        hasEnabledStaticImagePaint: s.hasEnabledStaticImagePaint,
        isState: s.isState,
        isStateGroup: s.isStateGroup,
        stackCounterAlignItems: s.stackCounterAlignItems,
        stackMode: s.stackMode,
        isGroup: s.isGroup,
        canHaveStatus: s.canHaveStatus,
        hasStatus: s.hasStatus,
        objectsPanelThumbnailId: s.objectsPanelThumbnailId
      };
      if (i.isState && t.symbolId) {
        let s = e.get(t.symbolId);
        i.symbolName = s?.name;
      }
      return i;
    }) : null, e);
  }()?.[0];
  return e ? jsx(MO, {
    node: e,
    offsetX: -3,
    children: jsxs("div", {
      className: nM,
      children: [jsx(Tq, {
        node: e
      }), jsx("span", {
        className: dK,
        children: e.symbolName ? e.symbolName : e.name
      })]
    })
  }) : null;
}
export const n = $$l0;