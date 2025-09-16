import { jsx } from "react/jsx-runtime";
import { useRef, useEffect, forwardRef } from "react";
import { I as _$$I } from "../905/494625";
import { useFplDebugAttributes } from "../905/302698";
import { useExposedRef } from "../905/581092";
import { defaultComponentAttribute } from "../905/577641";
import { au } from "../905/336566";
let o = Symbol();
function u({
  children: e,
  actionOnPointerDown: t,
  id: i,
  display: u,
  manager: p,
  onboardingKey: m,
  panelId: h,
  recordingKey: g,
  onKeyDown: f,
  triggerId: _,
  htmlAttributes: A,
  className: y,
  ...b
}, v) {
  let I = useFplDebugAttributes({
    descendant: "tab"
  });
  let E = _$$I({
    onClick(e) {
      e.currentTarget.tabIndex = 0;
      p.setActiveTab(i, !0);
    },
    onKeyDown: f,
    recordingKey: u ? g : void 0,
    actionOnPointerDown: t,
    "data-onboarding-key": m,
    ...b
  });
  let x = useExposedRef(v);
  let S = p.activeTab === i;
  return (!function (e, t) {
    let i = useRef(o);
    useEffect(() => {
      i.current !== o && e(i.current);
      i.current = t;
    }, [t]);
  }(() => {
    S && au(p) && x.current?.focus();
  }, S), u) ? jsx("button", {
    ...A,
    type: "button",
    className: y,
    role: "tab",
    "aria-selected": i === p.activeTab,
    "aria-controls": h,
    id: _,
    ref: x,
    tabIndex: !function () {
      let e = null == p.activeTab;
      let t = p.tabs[0] === i;
      return S || e && t;
    }() ? -1 : 0,
    ...I,
    ...defaultComponentAttribute,
    ...E,
    children: e
  }) : null;
}
u.displayName = "TabsPrimitive.Tab";
export let $$p0 = forwardRef(u);
export const r = $$p0;