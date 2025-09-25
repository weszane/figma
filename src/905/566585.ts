import { useCallback } from "react";
import { useSelector } from "react-redux";
import { parseSessionLocalID } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { trackFileEventWithUser } from "../figma_app/901889";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue, isMixedArray, isValidValue, normalizeValue, MIXED_MARKER } from "../905/216495";
import { useSelectionProperty } from "../905/275640";
import { F } from "../905/258517";
import { TK } from "../905/129660";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { bi } from "../figma_app/836943";
import { El } from "../905/361629";
export function $$_4() {
  let e = trackFileEventWithUser();
  let [t, i] = useSelectionProperty("textAutoResize");
  return useCallback((n, r, a) => {
    getFeatureFlags().ce_properties_panel_tracking && t !== n && e("editor_type_panel_change", {
      key: "autoResize",
      value: isInvalidValue(n) ? "mixed" : n,
      source: r
    });
    i(n, a);
  }, [i, t, e]);
}
export function $$A5(e, t, i) {
  t !== yesNoTrackingEnum.NO && F.trackFromFullscreen("ee_track_user_action", {
    category: "TEXT",
    property: e,
    source: i
  });
}
export function $$y3({
  fontFamily: e,
  previewFontFamily: t,
  fontVariations: i,
  lineHeightInContext: n,
  fonts: r,
  versionsForStyles: a,
  shouldCommit: s
}) {
  let o = {
    fontFamily: e,
    previewFontFamily: t?.fontFamily
  };
  let l = e || t?.fontFamily || t?.selectedFontFamily;
  if (i?.length && l) {
    let e = $$v1({
      fontFamily: l,
      fonts: r,
      versionsForStyles: a
    });
    let t = [];
    e?.variationAxes && !isMixedArray(i) && (t = i.map(t => {
      let i = e.variationAxes?.find(e => e.tag === El(t.axisTag));
      return {
        axisTag: t.axisTag,
        axisName: t.axisName,
        value: i && t.value ? Math.max(i.min, Math.min(t.value, i.max)) : void 0
      };
    }));
    o.fontVariations = t;
  }
  $$b7(o, n, s);
}
export function $$b7(e, t, i) {
  if (isValidValue(t.lineHeight)) {
    let i = TK(t, t.lineHeight);
    i !== t.lineHeight && (e.lineHeight = i);
  }
  fullscreenValue.updateSelectionProperties(e, {
    shouldCommit: i
  });
}
export function $$v1(e) {
  let t = normalizeValue(e.fontFamily);
  let i = normalizeValue(e.fontStyle);
  if (!t) return;
  let n = !1;
  if (i || (i = Object.keys(e.versionsForStyles[t] ?? {})?.[0], n = !0), !i) return;
  let r = e.fonts[t]?.[e.versionsForStyles[t]?.[i]];
  let a = r?.styles?.[i];
  if (!a) return;
  let s = a.variationAxes;
  let o = a.postscript;
  n && a.variationAxes && (s = a.variationAxes.map(e => {
    let t = {
      ...e
    };
    t.value = MIXED_MARKER;
    return t;
  }), o = `${t}-MIXED`);
  return {
    variationAxes: s,
    postscript: o
  };
}
export function $$I6(e, t) {
  let i = (e, i) => {
    fullscreenValue.updateSelectionProperties({
      textCase: e,
      fontVariantCaps: i
    }, {
      shouldCommit: yesNoTrackingEnum.YES
    });
    $$A5("TEXT_CASE", yesNoTrackingEnum.YES, t);
  };
  "SMALL_CAPS" === e ? i("ORIGINAL", "SMALL") : "SMALL_CAPS_FORCED" === e ? i("ORIGINAL", "ALL_SMALL") : i(e, "NORMAL");
}
export function $$E0(e) {
  return useSelector(t => {
    let {
      availableOTFeaturesForSelection,
      availableOTFeaturesForFonts,
      toggledOnOTFeaturesForSelection,
      toggledOffOTFeaturesForSelection,
      mixedStateOTFeaturesForSelection
    } = e ? t.mirror.selectedStyleProperties : t.mirror.selectionProperties;
    t.mirror.selectedStyleProperties?.guid;
    return {
      supported: availableOTFeaturesForFonts || {},
      applicable: availableOTFeaturesForSelection || {},
      on: toggledOnOTFeaturesForSelection || [],
      off: toggledOffOTFeaturesForSelection || [],
      mixed: mixedStateOTFeaturesForSelection || []
    };
  });
}
export function $$x2(e, t, i) {
  let n = {};
  if (isInvalidValue(e) || !i || !t) return n;
  for (let e in i) {
    let r = t[i[e]]?.styles[e];
    r?.variationAxes?.forEach(e => {
      void 0 !== e.value && (n[e.tag] = n[e.tag] ?? new Set(), n[e.tag].add(e.value));
    });
  }
  return n;
}
export function $$S8(e, t) {
  let i = getSingletonSceneGraph();
  for (let n in e) {
    let e = i.get(n);
    if (!e || "TEXT" !== e.type) continue;
    let r = e.inheritedTextStyle;
    if (r) {
      let e = i.getStyleNodeByRef(r);
      let n = {
        guid: parseSessionLocalID(e?.styleId.guid)
      };
      if (bi({
        library: t,
        inheritStyleKey: r.key,
        inheritStyleID: n
      })) return !1;
    }
  }
  return !0;
}
export function $$w9() {
  return useSelector(e => {
    let t = e.mirror.selectionProperties.numSelectedByType;
    let i = e.mirror.selectionProperties.numSelected;
    return t?.TEXT_PATH === i;
  });
}
export const B9 = $$E0;
export const LM = $$v1;
export const MK = $$x2;
export const PK = $$y3;
export const ae = $$_4;
export const h$ = $$A5;
export const i4 = $$I6;
export const mP = $$b7;
export const mw = $$S8;
export const vK = $$w9;