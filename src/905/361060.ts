import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { c$ } from "../figma_app/236327";
import { B } from "../905/714743";
import { oB, j7 } from "../905/929976";
import { Um } from "../905/848862";
import { Cf, it } from "../905/504727";
import { A as _$$A } from "../6828/814452";
let $$p0 = "scale-down";
let $$m1 = ["scale-down", "contain", "min-zoom"];
export function $$h2({
  dropdownType: e,
  property: t,
  onChange: i,
  scalingDropdownFormatter: s,
  ariaLabelledBy: c
}) {
  let m = useDispatch();
  let h = Um();
  let f = h?.type === e;
  let _ = useCallback(() => {
    f ? m(oB()) : m(j7({
      type: e
    }));
  }, [m, f, e]);
  let A = useCallback(e => {
    i(e);
    m(oB());
  }, [m, i]);
  let y = useRef(null);
  return jsxs("div", {
    ref: y,
    children: [jsxs("button", {
      className: "publishing_metadata_scaling_mode_select_ui3--selectTrigger--Fm2DE publish_modal--categorySelectTriggerUI3--yeDOp publish_modal--categorySelectTrigger--UCp2x",
      onClick: _,
      onKeyDown: t => {
        "Tab" !== t.key && t.preventDefault();
        t.stopPropagation();
        "Enter" !== t.key || f || m(j7({
          type: e
        }));
      },
      role: "listbox",
      children: [s.format(t || $$p0), jsx("span", {
        className: "publishing_metadata_scaling_mode_select_ui3--selectTriggerIcon--Z1El4 publish_modal--categorySelectTriggerIcon--43Irx",
        children: jsx(B, {
          svg: _$$A
        })
      })]
    }), f && jsx(g, {
      ariaLabelledBy: c,
      onChange: A,
      dropdownTargetRef: y,
      scalingDropdownFormatter: s
    })]
  });
}
function g({
  onChange: e,
  dropdownTargetRef: t,
  scalingDropdownFormatter: i,
  ariaLabelledBy: r
}) {
  let a = t.current?.getBoundingClientRect();
  return a ? jsx(Cf, {
    "aria-labelledby": r,
    targetRect: a,
    showPoint: !1,
    minWidth: 528,
    maxWidth: 528,
    autofocusPrevOnDismount: !0,
    focusContainerOnMount: !0,
    type: it.MATCH_BACKGROUND,
    propagateCloseClick: !0,
    children: $$m1.map(t => jsx(c$, {
      className: "publishing_metadata_scaling_mode_select_ui3--singleOption--ZE6u3",
      onClick: i => {
        i.preventDefault();
        i.stopPropagation();
        e(t);
      },
      children: i.format(t)
    }, t))
  }) : null;
}
export const nV = $$p0;
export const bn = $$m1;
export const Ay = $$h2;
