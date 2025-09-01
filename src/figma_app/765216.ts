import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Pt } from "../figma_app/806412";
import { Bu, d3 } from "../figma_app/156285";
import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { wA } from "../vendor/514228";
import { j0r, rrT, glU, plo } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { AD, sH, Hr } from "../905/871411";
import { s4 } from "../figma_app/276332";
import { md } from "../figma_app/27355";
import _ from "classnames";
import { R as _$$R } from "../905/103090";
import { Point } from "../905/736624";
import { Y as _$$Y } from "../905/506207";
import { u1, XE } from "../figma_app/91703";
import { AV } from "../figma_app/933328";
import { W3 } from "../905/232641";
import { Y5 } from "../figma_app/455680";
import { Tm, Em } from "../figma_app/385874";
import { SK } from "../905/619652";
import { J } from "../905/225412";
import { ku } from "../905/149223";
import { WH } from "../figma_app/836943";
import { w1 } from "../figma_app/405546";
import { t as _$$t } from "../905/303541";
import { sT } from "../figma_app/740163";
import { fE } from "../figma_app/359164";
import { EX } from "../figma_app/709323";
import { eN } from "../905/331848";
import { N as _$$N } from "../figma_app/908785";
import { i as _$$i } from "../905/382332";
import { yl } from "../figma_app/947348";
var h = _;
let C = new Set([j0r.STROKE]);
let w = "brush-paint-picker-secondary-toolbelt";
let O = {
  type: "SOLID",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  opacity: 1
};
function R({
  recordingKey: e,
  atom: t
}) {
  let {
    styleId = null
  } = md(t);
  let [a, _] = w1(t, "paints");
  let R = rrT.STROKE_PRESET;
  let L = wA();
  let P = Tm.getId(0, rrT.STROKE_PRESET, "paint");
  let D = function (e) {
    let t = WH(e ?? null, null, s4.STROKE);
    return useMemo(() => {
      let e = t?.meta?.style_thumbnail;
      return e && "FILL" === e.type && e.fillPaints[0] || null;
    }, [t]);
  }(styleId) ?? a?.[0] ?? O;
  let {
    dropdownShown,
    pickerShown
  } = _$$R(e => ({
    dropdownShown: e.dropdownShown,
    pickerShown: e.pickerShown
  }));
  let F = pickerShown?.id === w;
  let [j, U] = useState(!1);
  let B = useRef(null);
  useEffect(() => () => {
    Y5.deselectProperty();
  }, []);
  let G = useCallback(() => {
    styleId && l7.user("detach-style", () => {
      glU.applyStyleToSelection("inheritFillStyleKeyForStroke", AD, !0);
    });
  }, [styleId]);
  let V = useCallback(() => {
    L(u1({
      id: w
    }));
  }, [L]);
  let H = useCallback(() => {
    L(XE());
    Y5.deselectProperty();
  }, [L]);
  let z = useCallback(() => {
    if (!F) {
      V();
      return;
    }
    H();
  }, [F, H, V]);
  let W = useCallback(e => {
    G();
    _([e]);
  }, [G, _]);
  let K = useCallback(e => {
    if (G(), U(!1), !D) return;
    let t = Y5.fileArrayToString;
    if (t) {
      let r = t(Array.from(e.files));
      glU.dropImageOnPaintThumbnail(D.blendMode || "NORMAL", D.opacity || 1, r, 0, R);
    }
  }, [G, D, R]);
  let Y = useCallback((e, t, r) => {
    G();
    let n = Y5.fileArrayToString;
    if (n) {
      let i = n(Array.from(r.files));
      glU.dropImageOnPaintThumbnail(e, t, i, 0, R);
    }
  }, [G, R]);
  let $ = useCallback((e, t) => l7.user("update-gif-image", () => SK(e, t, R)), [R]);
  return jsxs("div", {
    children: [jsx(_$$Y, {
      isDragTarget: () => !0,
      onTargetDragEnter: () => {
        U(!0);
      },
      onTargetDragLeave: () => {
        U(!1);
      },
      onTargetDrop: K,
      recordingKey: Pt(e, "dropTarget"),
      children: jsx("div", {
        ref: B,
        className: h()("stroke_paint_picker--chitContainer--11NPs", {
          "stroke_paint_picker--active--SaQ8j": !!F || j
        }),
        children: jsx(J, {
          paint: D,
          recordingKey: Pt(e, "chit"),
          className: "stroke_paint_picker--chit--G7Akm ui3_illustration_paint_row--alwaysOutlinedChit--oqcjo",
          onFocus: z
        })
      })
    }), F && jsx(ku, {
      canPickerShowColorContrast: !0,
      closeOnClickOutside: !0,
      defaultColor: Em,
      dropImageOnPaintThumbnail: Y,
      dropdownShown,
      hasVisiblePaintBelow: !1,
      inheritStyleKeyField: "inheritFillStyleKeyForStroke",
      isInStyleModal: !1,
      minimalUI: !0,
      onApplyStyle: (e, {
        fromSearch: t
      } = {}) => {
        L(AV({
          style: e,
          inheritStyleKeyField: "inheritFillStyleKeyForStroke",
          fromSearch: t
        }));
      },
      onChange: W,
      onClose: H,
      paint: D,
      paintId: P,
      pickerShown,
      positioningProps: {
        positionRelativeTo: B,
        align: {
          x: W3.CENTER,
          y: W3.BEFORE
        },
        offset: new Point(0, 8)
      },
      recordingKey: Pt(e, "paintPicker"),
      selectedStyle: null,
      updateStillImageAndSelectionPropertiesForGIF: $,
      variableScopes: C
    })]
  });
}
function j({
  atom: e
}) {
  let [t, r] = w1(e, "strokeWeight");
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let s = eN({
    min: 0,
    max: _$$N
  });
  return jsx(EX, {
    ariaLabel: _$$t("fullscreen.properties_panel.fill.stroke_width"),
    bigStep: bigNudgeAmount,
    dataTooltip: _$$t("fullscreen.properties_panel.fill.stroke_width"),
    inputMax: fE,
    min: 1,
    onValueChange: r,
    sliderMax: _$$N,
    sliderValueTransform: s,
    step: smallNudgeAmount,
    value: t ?? 0
  });
}
function G({
  atom: e,
  recordingKey: t
}) {
  let [r, o] = w1(e, "strokeBrushGuid");
  let [, d] = w1(e, "scatterStrokeSettings");
  let u = Bu();
  let p = useRef(null);
  let _ = useCallback(e => {
    let t = sH(e.guid);
    t && (o(t), e.type === plo.SCATTER && d(e.settings));
  }, [o, d]);
  return jsx("div", {
    ref: p,
    children: jsx(_$$i, {
      brushInputClassName: "brush_guid_picker--brushInputButton--auCyb",
      brushList: u,
      onChange: _,
      value: r ?? Hr,
      positioningProps: {
        positionRelativeTo: p,
        align: {
          x: W3.CENTER,
          y: W3.BEFORE
        },
        offset: new Point(0, 8)
      },
      recordingKey: Pt(t, "brushDropdownTrigger"),
      onboardingKey: yl
    })
  });
}
export function $$V0({
  atom: e,
  includeStrokePicker: t,
  addon: r,
  recordingKey: s
}) {
  d3();
  return jsxs(Fragment, {
    children: [jsx(R, {
      atom: e
    }), jsx(j, {
      atom: e
    }), t && jsx(G, {
      atom: e,
      recordingKey: Pt(s, "brushPicker")
    }), r]
  });
}
export const c = $$V0;