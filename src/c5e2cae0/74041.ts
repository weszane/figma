import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Spacing, ButtonBasePrimaryTracked, linkWithTracking } from "../figma_app/637027";
import { LazyInputForwardRef } from "../905/408237";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { Fb, b0, F0, Pr, Zy, eA, x } from "../figma_app/81441";
import { A } from "../c5e2cae0/100203";
if (443 == require.j) {}
export var $$m0 = (e => (e.STARTER = "starter", e.PRO = "pro", e.ORG = "org", e))($$m0 || {});
export function $$_1({
  type: e,
  teamName: t,
  setTeamName: a,
  onNext: m,
  upgradeExistingTeam: _,
  promo: u
}) {
  let p = {
    starter: {
      title: renderI18nText("all_carts.create_team.create_a_new_team"),
      subtitle: renderI18nText("all_carts.create_team.after_creating_a_team"),
      placeholder: getI18nString("pro_cart.create_team.enter_a_name_for_your_working_group"),
      next: renderI18nText("all_carts.create_team.create_team"),
      trackingDescriptor: _$$c.SEND_INVITES
    },
    pro: {
      title: renderI18nText("pro_cart.create_team.create_a_professional_team"),
      subtitle: renderI18nText("pro_cart.create_team.itll_have_unlimited_files_and_collaborative_features"),
      placeholder: getI18nString("pro_cart.create_team.enter_a_name_for_your_working_group"),
      next: u ? renderI18nText("pro_cart.sidebar.next_review") : renderI18nText("pro_cart.create_team.next_set_editors.seat_rename"),
      trackingDescriptor: u ? _$$c.REVIEW : _$$c.SET_EDITORS
    },
    org: {
      title: renderI18nText("org_self_serve.create_team_step.create_an_org_team"),
      subtitle: renderI18nText("org_self_serve.create_team_step.itll_have_unlimited_files_and_advanced_security"),
      placeholder: getI18nString("org_self_serve.create_team_step.enter_a_name_for_your_team"),
      next: renderI18nText("org_self_serve.create_team_step.next_select_team"),
      trackingDescriptor: _$$c.SELECT_TEAM
    }
  }[e];
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: Fb,
      children: p.title
    }), jsx(Spacing, {
      multiple: .5
    }), jsx("div", {
      className: b0,
      children: p.subtitle
    }), jsxs("div", {
      className: F0,
      children: [jsx(SvgComponent, {
        svg: A,
        className: Pr
      }), jsx(LazyInputForwardRef, {
        className: Zy,
        onChange: e => a(e.target.value),
        value: t,
        placeholder: p.placeholder
      })]
    }), jsx(ButtonBasePrimaryTracked, {
      className: eA,
      onClick: m,
      trackingProperties: {
        trackingDescriptor: p.trackingDescriptor
      },
      disabled: !t.trim(),
      children: p.next
    }), !!_ && jsx(linkWithTracking, {
      className: x,
      onClick: _,
      trusted: !0,
      trackingProperties: {
        trackingDescriptor: _$$c.UPGRADE_EXISTING_TEAM
      },
      children: renderI18nText("pro_cart.create_team.upgrade_an_existing_team_instead")
    })]
  });
}
export const I = $$m0;
export const y = $$_1;