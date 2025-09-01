import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Kz, vd, Us } from "../figma_app/637027";
import { L } from "../905/408237";
import { B } from "../905/714743";
import { tx, t as _$$t } from "../905/303541";
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
      title: tx("all_carts.create_team.create_a_new_team"),
      subtitle: tx("all_carts.create_team.after_creating_a_team"),
      placeholder: _$$t("pro_cart.create_team.enter_a_name_for_your_working_group"),
      next: tx("all_carts.create_team.create_team"),
      trackingDescriptor: _$$c.SEND_INVITES
    },
    pro: {
      title: tx("pro_cart.create_team.create_a_professional_team"),
      subtitle: tx("pro_cart.create_team.itll_have_unlimited_files_and_collaborative_features"),
      placeholder: _$$t("pro_cart.create_team.enter_a_name_for_your_working_group"),
      next: u ? tx("pro_cart.sidebar.next_review") : tx("pro_cart.create_team.next_set_editors.seat_rename"),
      trackingDescriptor: u ? _$$c.REVIEW : _$$c.SET_EDITORS
    },
    org: {
      title: tx("org_self_serve.create_team_step.create_an_org_team"),
      subtitle: tx("org_self_serve.create_team_step.itll_have_unlimited_files_and_advanced_security"),
      placeholder: _$$t("org_self_serve.create_team_step.enter_a_name_for_your_team"),
      next: tx("org_self_serve.create_team_step.next_select_team"),
      trackingDescriptor: _$$c.SELECT_TEAM
    }
  }[e];
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: Fb,
      children: p.title
    }), jsx(Kz, {
      multiple: .5
    }), jsx("div", {
      className: b0,
      children: p.subtitle
    }), jsxs("div", {
      className: F0,
      children: [jsx(B, {
        svg: A,
        className: Pr
      }), jsx(L, {
        className: Zy,
        onChange: e => a(e.target.value),
        value: t,
        placeholder: p.placeholder
      })]
    }), jsx(vd, {
      className: eA,
      onClick: m,
      trackingProperties: {
        trackingDescriptor: p.trackingDescriptor
      },
      disabled: !t.trim(),
      children: p.next
    }), !!_ && jsx(Us, {
      className: x,
      onClick: _,
      trusted: !0,
      trackingProperties: {
        trackingDescriptor: _$$c.UPGRADE_EXISTING_TEAM
      },
      children: tx("pro_cart.create_team.upgrade_an_existing_team_instead")
    })]
  });
}
export const I = $$m0;
export const y = $$_1;