import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { E as _$$E } from "../905/701278";
import { K } from "../905/799615";
import { A as _$$A } from "../905/251970";
import { Ez5, nQ7 } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { F } from "../905/302958";
import { zX, Rw } from "../905/576487";
import { Y5 } from "../figma_app/455680";
import { kl, Gt } from "../905/275640";
import { ut } from "../figma_app/84367";
import { ZU, Wg } from "../figma_app/986347";
import { v as _$$v } from "../figma_app/339170";
import { sO } from "../figma_app/21029";
import { useRef, useMemo } from "react";
import { d as _$$d } from "../905/976845";
import { J } from "../905/125993";
import { oB, j7 } from "../905/929976";
import { j } from "../905/834956";
import { _ as _$$_ } from "../figma_app/636641";
import { r as _$$r } from "../figma_app/201095";
import { sd, _x } from "../figma_app/509285";
let x = "SLIDES_TEXT_STYLE_ACTIONS_DROPDOWN";
function N({
  rowRef: e,
  recordingKey: t
}) {
  let r = useDispatch();
  let a = useRef(null);
  let s = useSelector(e => e.dropdownShown?.type === x);
  let o = _$$r();
  let l = _$$_(e);
  let u = useMemo(() => [o, l], [o, l]);
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      "aria-label": getI18nString("slides.properties_panel.text_style.more_actions"),
      ref: a,
      "aria-expanded": s,
      onClick: () => {
        s ? r(oB()) : r(j7({
          type: x
        }));
      },
      recordingKey: t,
      children: jsx(J, {})
    }), s && a.current && jsx(j, {
      dispatch: r,
      items: u,
      lean: "right",
      minWidth: 208,
      onSelectItem: e => {
        e.callback && e.callback();
      },
      openSubmenuToTheLeft: !0,
      parentRect: a.current?.getBoundingClientRect(),
      recordingKey: Pt(t, "menu"),
      shouldUsePortal: !0,
      showPoint: !1
    })]
  });
}
export function $$w2(e, t) {
  let r = sO();
  let i = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let a = r && i === nQ7.SELF;
  let s = sd();
  return a && s ? jsx(N, {
    rowRef: e,
    recordingKey: Pt(t, "moreButton")
  }) : null;
}
export function $$O0({
  isComponentSet: e
}) {
  return e ? jsxs("div", {
    className: "x78zum5 xeq5yr9 x6s0dn4 x19y5rnk x8rdmch xrybvsa xg2d0mh xtc4nxu x1n0bwc9",
    children: [jsx("p", {
      children: getI18nString("slides.properties_panel.component_set")
    }), jsx(_$$E, {})]
  }) : jsxs("div", {
    className: "x78zum5 xeq5yr9 x6s0dn4 x19y5rnk x8rdmch xrybvsa xg2d0mh xtc4nxu x1n0bwc9",
    children: [jsx("p", {
      children: getI18nString("slides.properties_panel.main_component")
    }), jsx(K, {})]
  });
}
export function $$R1() {
  let e = useDispatch();
  let t = sO();
  let r = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let a = t && r === nQ7.SELF;
  let s = kl("propertiesPanelShouldShowRemoveAutoLayout");
  let d = Gt("numSelectedByType");
  let f = !!d?.CANVAS_ROW;
  if (a && s && !f) return {
    type: ZU.CUSTOM_ACTION,
    customActionType: Wg.DIALOG_TRIGGER_BUTTON,
    onClick: () => {
      Y5.triggerActionInUserEditScope("ungroup-selection");
      e(F.enqueue({
        icon: zX.STACK_SELECTION,
        type: "slides_remove_auto_layout_via_ungroup",
        messageComponentKey: Rw.SLIDES_REMOVE_AUTO_LAYOUT,
        onDismiss: () => {}
      }));
    },
    icon: jsx(_$$A, {}),
    isSelected: !1,
    getTitle: () => getI18nString("fullscreen.properties_panel.stack_panel.remove_auto_layout"),
    recordingKey: "autoLayout"
  };
}
export function $$L3() {
  let e = _x();
  let t = _$$v();
  let r = sO();
  let n = ut(Ez5?.interopToolMode(), nQ7.SELF);
  let i = r && n === nQ7.SELF;
  return r && (i || e) ? t : null;
}
export const aG = $$O0;
export const lD = $$R1;
export const f$ = $$w2;
export const LF = $$L3;