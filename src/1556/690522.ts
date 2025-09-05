import { jsxs, jsx } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { $n } from "../905/521428";
import { tx } from "../905/303541";
import { oB } from "../905/929976";
import { NJ } from "../figma_app/419216";
import { Ro } from "../figma_app/598952";
export let $$d0 = "ACCOUNT_SWITCHING_ADD_ACCOUNT_ONBOARDING_KEY";
export function $$u3(e) {
  let t = e => {
    e.stopPropagation();
  };
  return jsxs("span", {
    className: "account_switching_onboarding--footerContainer--NtI0l",
    children: [jsx("span", {
      className: "account_switching_onboarding--steps--aCBzs",
      children: tx("rcs.account_switching.step_counter", {
        step: e.step,
        totalSteps: e.totalSteps
      })
    }), jsx($n, {
      variant: "secondary",
      onClick: n => {
        t(n);
        e.onClick();
      },
      htmlAttributes: {
        onMouseDown: t
      },
      children: e.step === e.totalSteps ? tx("rcs.account_switching.done") : tx("rcs.account_switching.next")
    })]
  });
}
export function $$h1(e) {
  let t = useDispatch();
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 247,
    targetKey: $$d0,
    alignPointerToLeft: !0,
    className: "account_switching_onboarding--accountSwitchingAddAccountViewPointerModal--mf5oH pointer_modal--pointerModalBlue--9Jjg8 pointer_modal--pointerModal--wrpFz",
    children: [tx("rcs.account_switching.this_is_where_you_access_account_settings_add_or_remove_accounts_and_see_your_figma_profiles"), jsx($$u3, {
      step: e.step,
      onClick: () => {
        t(oB());
        e.onClickPrimaryCta();
      },
      totalSteps: e.totalSteps
    })]
  });
}
export function $$m2(e) {
  return jsxs(NJ, {
    dismissModal: e.dismissModal,
    width: 208,
    targetKey: Ro,
    alignPointerToLeft: !0,
    children: [tx("rcs.account_switching.notifications_for_your_workspace_live_here"), jsx($$u3, {
      step: e.step,
      onClick: e.onClickPrimaryCta,
      totalSteps: e.totalSteps
    })]
  });
}
export const nT = $$d0;
export const Rx = $$h1;
export const q9 = $$m2;
export const IY = $$u3;