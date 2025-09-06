import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect, useMemo, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { d as _$$d } from "../905/976845";
import { x as _$$x } from "../905/697290";
import l from "classnames";
import { ZC } from "../figma_app/39751";
import { Pt } from "../figma_app/806412";
import { e as _$$e } from "../905/713353";
import { getI18nString } from "../905/303541";
import { j7 } from "../905/929976";
import { Um } from "../905/848862";
import { Ib } from "../905/129884";
import { ZU, Wg } from "../figma_app/986347";
import { Jo, VA, r1, m5 } from "../figma_app/152690";
import { bt, R } from "../figma_app/767318";
var d = l;
export function $$b0({
  showLibrarySets: e,
  recordingKey: t,
  consumptionTarget: r = Jo.SELECTION,
  onModalWillOpen: a,
  onModalDidClose: l,
  displayModeDropdown: h
}) {
  let m = useRef(null);
  let f = I(m);
  let b = VA(r);
  let T = r1(r);
  let v = S();
  let A = ZC(v);
  useEffect(() => {
    A && !v && l?.();
  }, [l, A, v]);
  let x = m5(e, r);
  let N = !x && h;
  let C = getI18nString("properties.dropdown.apply_variable_mode");
  let w = T ? getI18nString("dev_handoff.workflows.focus_view.no_variable_modes") : getI18nString("dev_handoff.workflows.focus_view.no_variables");
  let O = useMemo(() => ({
    recordingKey: Pt(t, "applyMode"),
    "aria-expanded": !!v,
    "aria-label": N ? w : C,
    htmlAttributes: {
      "data-testid": "applyModeButton",
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": N ? w : C,
      onMouseDown: e => e.stopPropagation()
    },
    onClick: () => {
      a?.();
      f();
    }
  }), [t, v, C, w, N, a, f]);
  return x || h ? jsxs("div", {
    ref: m,
    children: [h ? jsx("div", {
      className: "variables_mode_button--modeButton--Ld40c ellipsis--ellipsis--Tjyfa",
      children: jsx(_$$e, {
        disabled: N,
        lead: jsx(_$$x, {
          className: "variables_mode_button--modeIcon--gSLNA"
        }),
        ...O,
        children: jsx("span", {
          className: d()({
            "variables_mode_button--disabled--rZZ2j": N
          }),
          children: b.length > 1 || 0 === b.length ? getI18nString("dev_handoff.focus_view.modes") : b[0]
        })
      })
    }) : jsx(_$$d, {
      ...O,
      children: jsx(_$$x, {})
    }), jsx(bt, {
      consumptionTarget: r,
      showLibrarySets: e,
      recordingKey: Pt(t, "applyModeDropdown")
    })]
  }) : null;
}
export function $$T1() {
  let e = "frameLevel";
  let t = useRef(null);
  let r = I(t);
  let a = S();
  let s = m5(!1, Jo.SELECTION);
  return useMemo(() => s ? {
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.DROPDOWN_TRIGGER_BUTTON,
    dropdownTargetButtonRef: t,
    onClick: r,
    getTitle: () => getI18nString("properties.dropdown.apply_variable_mode"),
    icon: jsx(_$$x, {}),
    dropdown: jsx(bt, {
      consumptionTarget: Jo.SELECTION,
      showLibrarySets: !1,
      recordingKey: Pt(e, "applyModeDropdown")
    }),
    isSelected: !!a,
    recordingKey: Pt(e, "applyMode") || "applyMode",
    dataTestId: "applyModeButton"
  } : null, [a, r, !1, s]);
}
function I(e) {
  let t = useDispatch();
  return useCallback(() => {
    e.current && t(j7({
      type: R,
      data: {
        targetRect: e.current.getBoundingClientRect()
      }
    }));
  }, [t, e]);
}
function S() {
  let e = Um();
  return e && e.type === R;
}
export const M = $$b0;
export const v = $$T1;