import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useCallback } from "react";
import { wA } from "../vendor/514228";
import { e as _$$e } from "../905/149844";
import l from "classnames";
import { Pt } from "../figma_app/806412";
import { e6 } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { Z6 } from "../figma_app/451499";
import { av } from "../figma_app/316316";
import { BK } from "../905/848862";
import { w as _$$w } from "../figma_app/883622";
import { j } from "../905/834956";
import { cJ } from "../905/561485";
import { zt, YT, Oz, hP, He, Bs, vc, Xk } from "../figma_app/84580";
import { x1, xm, U3, BP } from "../897/934363";
var s = l;
export let $$b0 = e => `interaction-panel-create-action-${e}`;
export function $$v1(e) {
  let t = $$b0(e.recordingKey);
  var {
    showing,
    toggle,
    hide
  } = BK(t);
  let I = useRef(null);
  let {
    recordingKey,
    addButtonPressed,
    presetInteractions,
    isLayoutNodeSelected
  } = e;
  let {
    shouldShowAdvancedPrototypingPaywall,
    showAdvancedPrototypinglMultipleActionsModal
  } = zt();
  let A = useCallback(() => {
    !e.skipPaywall && shouldShowAdvancedPrototypingPaywall ? showAdvancedPrototypinglMultipleActionsModal() : toggle();
  }, [e.skipPaywall, shouldShowAdvancedPrototypingPaywall, showAdvancedPrototypinglMultipleActionsModal, toggle]);
  let w = YT() === Oz.TWO_COL;
  let k = hP();
  let P = cJ();
  let O = He({
    showVideoActions: k,
    isNestedInConditional: e.isNestedInConditional,
    isSites: P,
    isUI3: !0,
    showPresetActions: !!e.presetInteractions,
    isLayoutNodeSelected
  });
  let L = wA();
  let D = useCallback(e => {
    addButtonPressed(Bs(e));
    hide();
  }, [addButtonPressed, hide]);
  let R = s()({
    [x1]: e.renderButton,
    [xm]: !e.renderButton && !w,
    [U3]: !e.renderButton && w
  });
  let M = [];
  O.forEach(e => {
    vc(e) ? M.push(_$$w) : e === Xk && presetInteractions?.length ? M.push(...presetInteractions, _$$w) : M.push(function ({
      actionType: e,
      clickCb: t,
      recordingKey: n,
      isUI3: o
    }) {
      let i = av(e);
      let r = new Z6(o);
      let a = e ? r.format(e) : "Undefined";
      return {
        type: e,
        className: BP,
        callback: () => t(e),
        icon: i,
        displayText: a,
        recordingKey: Pt(n, "createActionOption", e),
        "data-onboarding-key": `create-action-${e}`
      };
    }({
      clickCb: D,
      recordingKey,
      actionType: e,
      isUI3: !0
    }));
  });
  let V = e.isNestedInConditional ? _$$t("proto.prototype_panel.add_nested_action") : P ? _$$t("sites.panel.add_interaction") : _$$t("proto.prototype_panel.add");
  return jsxs(Fragment, {
    children: [jsx(e6, {
      ref: I,
      recordingKey: Pt(recordingKey, "createActionDropdown"),
      className: R,
      onClick: A,
      "aria-label": _$$t("proto.prototype_panel.create_action_button"),
      htmlAttributes: {
        "data-tooltip": V,
        "data-tooltip-type": "text"
      },
      children: e.renderButton ? jsx(_$$e, {}) : tx("fullscreen.properties_panel.click_plus_to_add_new_action")
    }), showing && I.current && jsx(j, {
      dataTestId: e.dataTestId,
      dispatch: L,
      hidePointWhenContentOffScreen: !0,
      items: M,
      lean: "center",
      minWidth: 130,
      onSelectItem: e => e.callback?.(),
      parentRect: I.current.getBoundingClientRect(),
      recordingKey: "actionDropdown",
      showPoint: !0
    })]
  });
}
export const h = $$b0;
export const t = $$v1;