import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { generateRecordingKey } from "../figma_app/878298";
import { Bu, d3 } from "../figma_app/156285";
import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { PropertyScope, NodePropertyCategory, Fullscreen, DistributionType } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString, parseSessionLocalID, defaultSessionLocalID } from "../905/871411";
import { StyleType } from "../figma_app/276332";
import { useAtomWithSubscription } from "../figma_app/27355";
import _ from "classnames";
import { selectWithShallowEqual } from "../905/103090";
import { Point } from "../905/736624";
import { Y as _$$Y } from "../905/506207";
import { u1, XE } from "../figma_app/91703";
import { AV } from "../figma_app/933328";
import { W3 } from "../905/232641";
import { fullscreenValue } from "../figma_app/455680";
import { Tm, Em } from "../figma_app/385874";
import { SK } from "../905/619652";
import { J } from "../905/225412";
import { ku } from "../905/149223";
import { WH } from "../figma_app/836943";
import { w1 } from "../figma_app/405546";
import { getI18nString } from "../905/303541";
import { sT } from "../figma_app/740163";
import { fE } from "../figma_app/359164";
import { EX } from "../figma_app/709323";
import { eN } from "../905/331848";
import { N as _$$N } from "../figma_app/908785";
import { i as _$$i } from "../905/382332";
import { yl } from "../figma_app/947348";
var h = _;
let C = new Set([PropertyScope.STROKE]);
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
  } = useAtomWithSubscription(t);
  let [a, _] = w1(t, "paints");
  let R = NodePropertyCategory.STROKE_PRESET;
  let L = useDispatch();
  let P = Tm.getId(0, NodePropertyCategory.STROKE_PRESET, "paint");
  let D = function (e) {
    let t = WH(e ?? null, null, StyleType.STROKE);
    return useMemo(() => {
      let e = t?.meta?.style_thumbnail;
      return e && "FILL" === e.type && e.fillPaints[0] || null;
    }, [t]);
  }(styleId) ?? a?.[0] ?? O;
  let {
    dropdownShown,
    pickerShown
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    pickerShown: e.pickerShown
  }));
  let F = pickerShown?.id === w;
  let [j, U] = useState(!1);
  let B = useRef(null);
  useEffect(() => () => {
    fullscreenValue.deselectProperty();
  }, []);
  let G = useCallback(() => {
    styleId && permissionScopeHandler.user("detach-style", () => {
      Fullscreen.applyStyleToSelection("inheritFillStyleKeyForStroke", defaultSessionLocalIDString, !0);
    });
  }, [styleId]);
  let V = useCallback(() => {
    L(u1({
      id: w
    }));
  }, [L]);
  let H = useCallback(() => {
    L(XE());
    fullscreenValue.deselectProperty();
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
    let t = fullscreenValue.fileArrayToString;
    if (t) {
      let r = t(Array.from(e.files));
      Fullscreen.dropImageOnPaintThumbnail(D.blendMode || "NORMAL", D.opacity || 1, r, 0, R);
    }
  }, [G, D, R]);
  let Y = useCallback((e, t, r) => {
    G();
    let n = fullscreenValue.fileArrayToString;
    if (n) {
      let i = n(Array.from(r.files));
      Fullscreen.dropImageOnPaintThumbnail(e, t, i, 0, R);
    }
  }, [G, R]);
  let $ = useCallback((e, t) => permissionScopeHandler.user("update-gif-image", () => SK(e, t, R)), [R]);
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
      recordingKey: generateRecordingKey(e, "dropTarget"),
      children: jsx("div", {
        ref: B,
        className: h()("stroke_paint_picker--chitContainer--11NPs", {
          "stroke_paint_picker--active--SaQ8j": !!F || j
        }),
        children: jsx(J, {
          paint: D,
          recordingKey: generateRecordingKey(e, "chit"),
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
      recordingKey: generateRecordingKey(e, "paintPicker"),
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
    ariaLabel: getI18nString("fullscreen.properties_panel.fill.stroke_width"),
    bigStep: bigNudgeAmount,
    dataTooltip: getI18nString("fullscreen.properties_panel.fill.stroke_width"),
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
    let t = parseSessionLocalID(e.guid);
    t && (o(t), e.type === DistributionType.SCATTER && d(e.settings));
  }, [o, d]);
  return jsx("div", {
    ref: p,
    children: jsx(_$$i, {
      brushInputClassName: "brush_guid_picker--brushInputButton--auCyb",
      brushList: u,
      onChange: _,
      value: r ?? defaultSessionLocalID,
      positioningProps: {
        positionRelativeTo: p,
        align: {
          x: W3.CENTER,
          y: W3.BEFORE
        },
        offset: new Point(0, 8)
      },
      recordingKey: generateRecordingKey(t, "brushDropdownTrigger"),
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
      recordingKey: generateRecordingKey(s, "brushPicker")
    }), r]
  });
}
export const c = $$V0;