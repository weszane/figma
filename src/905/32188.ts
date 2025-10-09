import { jsx } from "react/jsx-runtime";
import { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { isEmptyObject, sortObjectByKeys } from "../figma_app/493477";
import { documentStateTsApi, FontHelpers } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { _r } from "../figma_app/451499";
import { fullscreenValue } from "../figma_app/455680";
import { normalizeValue, isMixedArray, isInvalidValue, isValidValue, MIXED_MARKER } from "../905/216495";
import { hasFontStyleVariables } from "../figma_app/852050";
import { useDropdownState } from "../905/848862";
import { generateSlug, PanelIdentifiers } from "../figma_app/242339";
import { a2 } from "../figma_app/762558";
import { l6, c$, sK } from "../905/794875";
import { mP } from "../905/566585";
import { El, mI } from "../905/361629";
import { Q7, EO, iF, Le, Gb, q_, hC } from "../905/71683";
import { A as _$$A } from "../3850/217317";
import { $$default } from "../svg/764361";
let w = "Mixed";
let $$C1 = () => getI18nString("fullscreen.type_panel.variable_font_axes");
let $$T2 = () => getI18nString("fullscreen.properties_panel.apply_variable_ellipses");
let k = l6;
let R = c$;
export function $$N4(e) {
  let t;
  let [i, y] = useState([]);
  let [v, N] = useState({});
  let [P, D] = useState({});
  let L = useDispatch<AppDispatch>();
  let F = useDropdownState();
  let M = hasFontStyleVariables();
  let j = !!e.fontVariationAxes;
  let U = !e.hideTypographyVariableOptions && M;
  let B = useMemo(() => {
    let t = normalizeValue(e.fontFamily);
    if (!(t && t in e.versionsForStyles)) return [];
    let i = e.versionsForStyles[t] || {};
    return Object.keys(i).map(n => {
      let r = e.fonts[t][i[n]].styles[n];
      return {
        name: n,
        stretch: r.stretch,
        weight: r.weight,
        italic: r.italic,
        variationAxes: r.variationAxes,
        opticalSize: function (e) {
          if (!e) return 0;
          let t = e.filter(e => "opsz" === e.tag);
          return t?.[0]?.value ?? 0;
        }(r.variationAxes)
      };
    }).sort((e, t) => !e.italic && t.italic ? -1 : e.italic && !t.italic ? 1 : e.stretch < t.stretch ? -1 : e.stretch > t.stretch ? 1 : e.opticalSize < t.opticalSize ? -1 : e.opticalSize > t.opticalSize ? 1 : e.weight < t.weight ? -1 : e.weight > t.weight ? 1 : e.name < t.name ? -1 : e.name > t.name ? 1 : 0);
  }, [e.fontFamily, e.fonts, e.versionsForStyles]);
  let V = useMemo(() => {
    let e = new Map();
    for (let t of B) {
      let i = (t.italic ? 1 : -1) * t.stretch * 1e3 + t.opticalSize;
      e.has(i) || e.set(i, 0);
      e.set(i, e.get(i) + 1);
    }
    return Math.min(...Array.from(e.values())) >= 2;
  }, [B]);
  let G = useMemo(() => e.fontStyle && e.fontFamily && $$O0({
    fontFamily: e.fontFamily,
    fontStyle: e.fontStyle,
    fontVariations: e.fontVariations,
    fontVariationAxes: e.fontVariationAxes,
    versionsForStyles: e.versionsForStyles
  }), [e.fontStyle, e.fontFamily, e.versionsForStyles, e.fontVariations, e.fontVariationAxes]);
  let z = (0 === i.length || 1 === i.length && !G) && void 0 !== e.fontStyle;
  let H = U ? !fullscreenValue?.isFontListLoaded() : z;
  let W = useCallback(() => {
    let t;
    let i = (t, i) => jsx(R, {
      value: t,
      recordingKey: generateRecordingKey(e.recordingKey, t),
      additionalStylesClassName: Q7,
      iconToReplaceCheck: i ? jsx(SvgComponent, {
        svg: i
      }) : void 0
    }, `font-style-${t}`);
    let r = (e, t) => null != e && (e.italic !== t.italic || V && (e.stretch !== t.stretch || e.opticalSize !== t.opticalSize));
    let a = [];
    let o = {};
    if (e.fontVariations?.length) {
      if (isMixedArray(e.fontVariations)) t = w;else {
        let i = B.find(t => t.name === e.fontStyle);
        t = Y(e.fontVariations, i)?.name;
      }
    }
    let l = null;
    for (let [e, t] of B.entries()) {
      r(l, t) && a.push(jsx(sK, {}, e));
      a.push(i(t.name));
      l = t;
    }
    if (e.fontFamily && !isInvalidValue(e.fontFamily) && !G) {
      for (let e of (o = v, (t || !isEmptyObject(o)) && a.push(jsx(sK, {}, B.length)), Object.keys(v))) a.push(i(e));
      t && t !== w && !o[t] && a.push(i(t));
    }
    j && !e.hideVariableFontOptions && (a.push(jsx(sK, {}, B.length + 1)), a.push(i($$C1())));
    U && M && (a.length > 0 && a.push(jsx(sK, {}, B.length + 2)), a.push(i($$T2(), $$default)));
    return {
      options: a,
      styleOptionsMap: o
    };
  }, [G, e.fontFamily, e.fontStyle, M, e.fontVariations, j, e.recordingKey, V, B, v, U, e.hideVariableFontOptions]);
  useEffect(() => {
    if (F) return;
    let {
      options,
      styleOptionsMap
    } = W();
    y(options);
    D(styleOptionsMap);
  }, [e.fontFamily, y, D, W, F]);
  let K = useCallback(e => {
    let t = {};
    if (!j) return t;
    let i = documentStateTsApi.getActiveDocument();
    let n = FontHelpers.getFontFamilyVariations(i, e);
    for (let e in n) {
      let i = B.find(t => t.name === e);
      for (let r of n[e]) {
        let n = Y(r, i);
        n && (t[n.name] = {
          variations: r,
          style: e,
          tags: n.tags
        });
      }
    }
    return sortObjectByKeys(t, ([e, t], [i, n]) => t.tags < n.tags ? -1 : t.tags > n.tags ? 1 : e.localeCompare(i, void 0, {
      numeric: !0
    }));
  }, [j, B]);
  useEffect(() => {
    e.fontFamily && isValidValue(e.fontFamily) && N(K(e.fontFamily));
  }, [e.fontFamily, N, K, e.fontVariations]);
  let Y = (e, t) => {
    let i = [];
    let n = [];
    let r = !0;
    for (let a of e) {
      let e = El(a.axisTag);
      let s = a.axisName && "OpticalSize" !== a.axisName ? a.axisName : mI[e] || e;
      let o = t?.variationAxes?.find(t => t.tag === e);
      if (Math.abs((isInvalidValue(o?.value) ? 0 : o?.value ?? 0) - (a?.value ?? 0)) > .05 && (r = !1), o?.default === a.value || void 0 === a.value) continue;
      let l = Math.round(100 * a.value) / 100;
      i.push(`${new _r().format(e)}: ${l}`);
      n.push(`${new _r().format(s)}: ${l}`);
    }
    return r || !n.length ? null : {
      name: `${t?.italic ? "Italic, " : ""}${n.length < 3 ? n.join(", ") : i.join(", ")}`,
      tags: n.length
    };
  };
  let q = !1;
  let $ = e.fontVariations;
  if ($?.length) {
    if (isMixedArray($)) t = w;else {
      let i = B.find(t => t.name === e.fontStyle);
      t = Y($, i)?.name;
    }
  }
  if (e.fontFamily && !isInvalidValue(e.fontFamily) && !G) {
    for (let e of Object.keys(P).sort().reverse()) !q && e.length > 25 && (q = !0);
    t && t !== w && !P[t] && !q && t.length > 25 && (q = !0);
  }
  return jsx(k, {
    ariaLabel: getI18nString("fullscreen.type_panel.font_style"),
    chevronClassName: EO,
    className: iF,
    dataOnboardingKey: generateSlug(PanelIdentifiers.TEXT_PANEL, "font-style-button"),
    disabled: H,
    dispatch: L,
    dropdownAlignment: e.dropdownAlignment,
    dropdownClassName: q ? Le : Gb,
    dropdownShown: F,
    enablePreview: !e.editingStyleGuid && (!0 === e.enablePreview || void 0 === e.enablePreview),
    formatter: {
      format: e => {
        let t = "string" == typeof e && e.split(", ");
        return t && t.length > 1 ? `${t[0]} (+${t.length - 1})` : e;
      },
      formatExtended: e => ({
        text: e
      })
    },
    icon: G && e.showMissingIcon ? jsx(SvgComponent, {
      svg: _$$A
    }) : void 0,
    iconClassName: q_,
    id: e.id,
    inputClassName: hC,
    inputRef: e.elementRef,
    onChange: (t, i) => {
      P[t] ? e.onChange(P[t].style, i, P[t].variations) : e.onChange(t, i);
    },
    optionsWithDisabledPreviews: [$$C1(), $$T2()],
    property: t && t !== w ? t : e.fontStyle ?? e.customPlaceholder ?? "",
    recordingKey: generateRecordingKey(e, "select"),
    targetDomNode: e.targetDomNode,
    willShowDropdown: () => {
      fullscreenValue.commit();
      getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-type-panel-dropdown-show", {
        key: "fontStyle"
      });
      let {
        options,
        styleOptionsMap
      } = W();
      y(options);
      D(styleOptionsMap);
      return Promise.resolve();
    },
    children: i
  });
}
export function $$P3({
  fontStyle: e,
  lineHeightInContext: t,
  showVariableFontSettings: i,
  showTypeVariablePicker: n,
  shouldCommit: r,
  fontVariations: a
}) {
  if (e === $$C1()) i();else if (e === $$T2()) n();else {
    if (a) fullscreenValue.updateSelectionProperties({
      fontVariations: a,
      fontStyle: e
    }, {
      shouldCommit: r
    });else {
      let i = {
        fontStyle: e
      };
      i.fontVariations = [];
      mP(i, t, r);
    }
    a2("fontStyle");
  }
}
export function $$O0(e) {
  if (!fullscreenValue?.isFontListLoaded() || e.fontStyle === MIXED_MARKER || e.fontFamily === MIXED_MARKER) return !1;
  let t = normalizeValue(e.fontFamily);
  if (null == t) return !0;
  let i = e.versionsForStyles[t];
  if (null == i) return !0;
  let n = e.fontVariations;
  let r = !!e.fontVariationAxes;
  if (n?.length && !r) return !0;
  let a = normalizeValue(e.fontStyle);
  return !a || !(a in i);
}
export const JB = $$O0;
export const nb = $$C1;
export const wM = $$T2;
export const zD = $$P3;
export const zz = $$N4;