import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { $n } from "../905/521428";
import { N } from "../905/438674";
import { x } from "../905/587214";
import { w } from "../905/955293";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { BK } from "../905/848862";
import { hO } from "../905/616572";
import { Z_ } from "../905/831801";
import { oU, mw } from "../905/530789";
import { I9 } from "../905/471795";
import { H } from "../905/404052";
export function $$f0({
  title: e,
  text: t,
  actions: r
}) {
  return jsx("div", {
    className: "x6s0dn4 x9f619 x78zum5 x5yr21d xl56j7k x15fnm84 xh8yej3 x87ps6o",
    children: jsxs("div", {
      className: "x6s0dn4 xl56j7k x78zum5 xdt5ytf x167g77z",
      children: [jsx("div", {
        className: "x1va8c73 x2b8uid x1vzchgk x123g5w4 xt5tia6 xyw1wl8",
        children: e
      }), jsx("div", {
        className: "x1va8c73 x2b8uid x1n0bwc9 x17akokd x1qxcl5b xno9bf3 x1betce5",
        children: t
      }), jsx("div", {
        className: "x1xmf6yo x1hq5gj4",
        children: r ?? null
      })]
    })
  });
}
function E({
  setRenamingVariableID: e,
  variableSetID: t,
  selectedGroup: r,
  groups: s,
  recordingKey: l,
  setSelectedVariableID: p
}) {
  let _ = useRef(null);
  let {
    showing,
    toggle,
    hide
  } = BK(oU);
  return jsxs(Fragment, {
    children: [e && jsx($n, {
      iconPrefix: jsx(x, {}),
      "aria-label": getI18nString("variables.authoring_modal.create_variable_button_label"),
      ref: _,
      variant: "primary",
      onClick: () => toggle(),
      recordingKey: generateRecordingKey(l, "createVariableButton"),
      children: getI18nString("variables.authoring_modal.create")
    }), e && showing && _.current && jsx(mw, {
      targetRect: _.current.getBoundingClientRect(),
      variableSetID: t ?? null,
      selectedGroup: r,
      groups: s,
      recordingKey: l,
      setRenamingVariableID: e,
      onClose: hide,
      setSelectedVariableID: p,
      insertVariableBetweenIDs: null
    })]
  });
}
export function $$y1({
  groups: e,
  mayShowCreateVariableAction: t,
  clearFilterState: r,
  clearQuery: o,
  recordingKey: d,
  selectedGroup: u,
  setRenamingVariableID: h,
  variableSetID: y,
  setSelectedVariableID: b,
  hasVariableSets: T,
  tableRowItemsEmptyReason: I
}) {
  let S = useCallback(() => {
    r({
      reason: Z_.EmptyStateButton
    });
  }, [r]);
  return I === I9.filterApplied ? jsx($$f0, {
    title: getI18nString("variables.authoring_modal.no_variables_match_filters"),
    text: getI18nString("variables.authoring_modal.no_variables_match_filters.text"),
    actions: jsx($n, {
      iconPrefix: jsx(w, {}),
      onClick: S,
      variant: "secondary",
      children: getI18nString("variables.authoring_modal.no_variables_match_filters.clear_filters")
    })
  }) : I === I9.queryApplied ? jsx($$f0, {
    title: getI18nString("variables.authoring_modal.no_variables_match_search"),
    text: getI18nString("variables.authoring_modal.no_variables_match_search.text"),
    actions: jsx($n, {
      iconPrefix: jsx(w, {}),
      onClick: o,
      variant: "secondary",
      children: getI18nString("variables.authoring_modal.no_variables_match_search.clear_search")
    })
  }) : jsx($$f0, {
    title: T ? getI18nString("variables.authoring_modal.no_variables_in_collection") : getI18nString("variables.authoring_modal.no_variables_in_file"),
    text: jsxs(Fragment, {
      children: [getI18nString("variables.authoring_modal.empty_state_text"), " ", jsxs(N, {
        href: "https://help.figma.com/hc/articles/15339657135383-Guide-to-variables-in-Figma",
        trusted: !0,
        newTab: !0,
        children: [getI18nString("variables.authoring_modal.empty_state_learn_more_link"), " \u2192"]
      })]
    }),
    actions: t && H(e) && hO(e) ? jsx(E, {
      setRenamingVariableID: h,
      variableSetID: y,
      selectedGroup: u,
      groups: e,
      recordingKey: d,
      setSelectedVariableID: b
    }) : null
  });
}
export const fQ = $$f0;
export const j$ = $$y1;