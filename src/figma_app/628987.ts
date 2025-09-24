import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepEqual } from "../905/382883";
import { isNotNullish } from "../figma_app/95419";
import { IconButton } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { U as _$$U } from "../905/708285";
import { AppStateTsApi, SelfDesignType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import h from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { parsePxNumber } from "../figma_app/783094";
import { K4, P6 } from "../905/535224";
import { h as _$$h } from "../905/207101";
import { selectWithShallowEqual } from "../905/103090";
import { buildStaticUrl } from "../figma_app/169182";
import { generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { isInteractionPathCheck } from "../figma_app/897289";
import { E as _$$E2 } from "../905/277716";
import { XHR } from "../905/910117";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { hidePickerThunk, hideStylePicker, showPickerThunk } from "../figma_app/91703";
import { showModalHandler } from "../905/156213";
import { J6 } from "../figma_app/8833";
import { getEditorTypeFromView } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { O as _$$O } from "../905/291654";
import { Kk } from "../905/777093";
import { Cy } from "../905/571439";
import { normalizeValue } from "../905/216495";
import { Um } from "../905/848862";
import { Xo } from "../figma_app/482495";
import { selectUserFlag } from "../905/940356";
import { getObservableValue } from "../figma_app/84367";
import { generateSlug, PanelIdentifiers } from "../figma_app/242339";
import { KindEnum } from "../905/129884";
import { cn } from "../905/959568";
import { a3 } from "../905/188421";
import { Cn } from "../905/882267";
import { q9 } from "../905/698759";
import { fI } from "../figma_app/626177";
import { c$, sK, uQ } from "../905/794875";
import { We } from "../905/805224";
import { JD } from "../905/468313";
import { DE, Ad } from "../figma_app/811257";
import { x as _$$x } from "../905/961957";
import { sO } from "../figma_app/21029";
import { Z9, Ds, DK, nO, wH, uG, q_, ac, OW, UU, A5, YV } from "../905/71683";
import { kaq } from "../figma_app/27776";
import { A as _$$A } from "../3850/217317";
var m = h;
let ea = buildStaticUrl("font/previews");
let es = getFeatureFlags().font_index_250317 ? "font_previews.3e7c0297f334e1a1002e3f2f2dc38dcb.json.br" : "font_previews.be806b368d91ef4a0f93e8d2136d49a9.json.br";
let eo = `${ea}/${es}`;
let el = !1;
class ed extends a3 {}
class ec extends c$ {}
export function $$eu1() {
  let e = selectWithShallowEqual(e => Cy(e.mirror));
  let t = useRef(e);
  e.length > 0 && !deepEqual(t.current, e) && (t.current = e);
  return t;
}
let ep = atom(void 0);
export function $$e_0() {
  let [e, t] = useAtomValueAndSetter(ep);
  _$$h(() => {
    r();
  });
  let r = useCallback(() => {
    !e && q9() && XHR.crossOriginGet(`${eo}`, null, {
      headers: {
        "Content-Type": "text/plain"
      }
    }).then(({
      data: e
    }) => {
      null === e && console.error("Failed to load google font previews.");
      let r = new Map();
      for (let t of Object.entries(e)) {
        let e = t[1].replace("#", "%23");
        r.set(t[0], e);
      }
      t(r);
    }).catch(e => {
      console.error("Failed to load google font previews: ", e);
    });
  }, [e, t]);
  return e;
}
let eh = {
  format: e => e
};
export function $$em2({
  fontFamily: e,
  boundVariable: t,
  recordingKey: r,
  onChange: s,
  onDetachVariableClick: _,
  showPlaceholder: h,
  disabled: y,
  useLegacyFontPickerDropdown: b,
  hideTypographyVariableOptions: T,
  clearable: x,
  id: F,
  fonts: K,
  restrictedFontSet: $,
  versionsForStyles: ea,
  editingStyleGuid: es,
  fontPickerId: eo = J6,
  customPlaceholder: ep,
  variant: em = "row"
}) {
  let eg = useDispatch();
  let ef = Xo();
  let eE = Um();
  let ey = getObservableValue(AppStateTsApi?.interopToolMode(), SelfDesignType.SELF);
  let eb = sO() && ey === SelfDesignType.SELF;
  let eT = useIsSelectedViewFullscreenCooper();
  let eI = useSelector(e => e.selectedView);
  let eS = getEditorTypeFromView(eI);
  let ev = useSelector(e => e.userFlags);
  let eA = selectUserFlag("completed_font_installer_modal");
  let ex = useSelector(e => e.localFontAgentVersion);
  let [eN, eC] = useState(!1);
  let [ew, eO] = useState([]);
  let eR = $$e_0();
  let eL = useSelector(e => e.mirror.appModel.currentPage);
  let eP = $$eu1();
  let eD = useCallback(() => {
    var e = [];
    for (let t in K) 0 !== Object.keys(ea[t] || {}).length && e.push(t);
    e.sort((e, t) => {
      let r = e.startsWith(".");
      let n = t.startsWith(".");
      return r && !n ? 1 : !r && n ? -1 : e.localeCompare(t);
    });
    eO(e);
  }, [K, ea]);
  let ek = {
    format: e => e,
    parse(e) {
      if (Object.keys(K[e] ?? {}).length > 0) return e;
      throw Error("Invalid family");
    },
    increment(e, t, r) {
      let n = ew.indexOf(e);
      return t ? ew[Math.min(n + 1, ew.length - 1)] : ew[Math.max(n - 1, 0)];
    },
    autocomplete(e) {
      for (let t of (e = e.toLowerCase(), ew)) if (t && t.toLowerCase().startsWith(e)) return t;
      return null;
    },
    isEqual: (e, t) => e === t
  };
  let eM = useCallback(() => {
    !K4() || Kk() || eA || el || (el = !0, P6().catch(() => {
      eg(showModalHandler({
        type: _$$x
      }));
    }));
  }, [eg, eA]);
  let eF = useRef(null);
  let ej = useRef(null);
  let eU = useCallback(e => {
    if (ef?.id === eo) eg(hidePickerThunk());else {
      eC(!0);
      eg(hideStylePicker());
      let e = "row" === em ? cn(ej.current, parsePxNumber(kaq)) : ej.current.getBoundingClientRect();
      eg(showPickerThunk({
        id: eo,
        initialX: e.x,
        initialY: e.y,
        modal: !0
      }));
      trackEventAnalytics("font picker opened", {
        pageId: eL,
        nodeIds: eP.current
      });
    }
    e.stopPropagation();
  }, [eg, eL, ef?.id, eo, eP, em]);
  useEffect(() => {
    eD();
  }, [K, ea, e, eD]);
  let eB = [];
  let eG = normalizeValue(e);
  let eV = fullscreenValue?.isFontListLoaded() && isNotNullish(eG) && (_$$O(eG, K, ev, eS) || !K[eG] || 0 === Object.keys(K[eG] ?? {}).length);
  for (let e of (!eG || eG in ea || (eB.push(jsx(ec, {
    value: eG,
    disabled: !0,
    recordingKey: generateRecordingKey(r, eG)
  }, `current-font-${eG}`)), eB.push(jsx(sK, {}, "current-font-divider"))), ew)) eB.push(jsx(ec, {
    value: e,
    recordingKey: generateRecordingKey(r, e),
    children: e
  }, `font-name-${e}`));
  let eH = !isInteractionPathCheck() || ef?.id === eo || eN;
  return jsxs(Fragment, {
    children: [function () {
      let i;
      if (t && !T) {
        let e = jsx(We, {
          children: jsx("div", {
            className: Z9,
            children: jsx(JD, {
              elementRef: ej,
              variable: t,
              isInStyleModal: !!es,
              invalid: eV,
              tooltip: eV ? getI18nString("variables.binding_ui.missing_font_family", {
                fontFamily: eG
              }) : void 0
            })
          })
        });
        let r = _ ? jsx("span", {
          className: Ds,
          children: jsx(IconButton, {
            ref: eF,
            onClick: _,
            "aria-label": getI18nString("variables.binding_ui.detach_variable_tooltip"),
            htmlAttributes: {
              "data-tooltip": getI18nString("variables.binding_ui.detach_variable_tooltip"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: jsx(_$$U, {})
          })
        }) : null;
        return jsx(DE, {
          appendedClassName: DK,
          ref: ej,
          label: null,
          input: e,
          icon: r
        });
      }
      let a = ef?.id === eo;
      let o = eG || (ep ?? getI18nString("fullscreen.mixed"));
      let u = jsx(_$$E2, {
        name: "open_font_picker_button",
        children: jsxs(ButtonPrimitive, {
          actionOnPointerDown: !0,
          "aria-autocomplete": "none",
          "aria-controls": eo,
          "aria-expanded": a,
          "aria-haspopup": "dialog",
          "aria-label": getI18nString("fullscreen.type_panel.font_family"),
          className: m()({
            [nO]: !0,
            [wH]: a,
            [uG]: eV
          }),
          "data-onboarding-key": generateSlug(PanelIdentifiers.TEXT_PANEL, "font-picker-button"),
          disabled: y,
          htmlAttributes: {
            role: "combobox"
          },
          onClick: eU,
          recordingKey: generateRecordingKey(r, "openFontPickerButton"),
          children: [eV && jsx(SvgComponent, {
            svg: _$$A,
            className: q_
          }), jsx(uQ, {
            formatter: eh,
            property: o,
            inputClassName: m()(ac, {
              [OW]: ef?.id === eo
            }),
            isDisabled: y,
            screenreaderVisible: !0
          })]
        })
      });
      if (b) i = jsx(ed, {
        ariaLabel: getI18nString("fullscreen.type_panel.font_family"),
        className: UU,
        disabled: y,
        dispatch: eg,
        dropdownShown: eE,
        forceInputPlaceholder: !!eV && !!h,
        formatter: ek,
        iconClassName: q_,
        id: F,
        onChange: s,
        onMouseDown: eM,
        placeholder: eV && h ? ep ?? getI18nString("fullscreen.type_panel.type_or_choose") : void 0,
        property: e,
        recordingKey: r,
        willShowDropdown: () => (getFeatureFlags().ce_properties_panel_tracking && trackEventAnalytics("editor-type-panel-dropdown-show", {
          key: "fontFamily"
        }), getFeatureFlags().ce_font_picker_metrics && trackEventAnalytics("font picker opened", {
          pageId: eL,
          nodeIds: eP.current
        }), Promise.resolve()),
        children: eB
      });else if (eb || eT) return jsx(Ad, {
        ref: ej,
        label: null,
        input: u
      });else if ("button" === em) return jsx(RecordableDiv, {
        forwardedRef: ej,
        "data-non-interactive": !0,
        children: u
      });else return jsx(DE, {
        appendedClassName: m()({
          [A5]: a
        }),
        ref: ej,
        label: null,
        icon: null,
        input: u
      });
      return jsx(fI, {
        ref: ej,
        className: m()(YV, {
          [wH]: a
        }),
        children: i
      });
    }(), !b && eH && jsx(Cn, {
      clearable: x,
      currentFont: e,
      dispatch: eg,
      dropdown: eE,
      fonts: K,
      googleFontPreviews: eR,
      hideTypographyVariableOptions: T,
      id: F,
      localFontAgentVersion: ex,
      onFontChange: s,
      pickerId: eo,
      pickerShown: ef,
      recordingKey: r,
      restrictedFontSet: $,
      selectedNodeIds: eP.current,
      selectedView: eI,
      versionsForStyles: ea
    })]
  });
}
$$em2.displayName = "fontFamily";
export const UG = $$e_0;
export const Wc = $$eu1;
export const ay = $$em2;