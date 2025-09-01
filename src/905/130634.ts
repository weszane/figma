import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Component } from "react";
import { tx, t } from "../905/303541";
import { oB } from "../figma_app/530167";
import { P5 } from "../figma_app/175992";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { Hl, hM } from "../905/840929";
class u extends Component {
  constructor() {
    super(...arguments);
    this.deleteProfile = () => {
      this.props.dispatch(oB({
        profileId: this.props.profileId,
        handle: this.props.handle
      }));
    };
  }
  render() {
    let e = jsxs(Fragment, {
      children: [jsx("p", {
        children: tx("community.delete_profile_modal.delete_profile_info")
      }), jsx("br", {}), this.props.stripe_account_status && this.props.stripe_account_status !== P5.NONE && jsxs(Fragment, {
        children: [jsx("p", {
          children: tx("settings.any_resources_you_have_marked_for_sale", {
            creatorAgreement: Hl
          })
        }), jsx("br", {})]
      }), jsx("p", {
        children: tx("settings.delete_user_account.for_more_information_about_how_we_treat_your_data", {
          privacyPolicyLink: hM
        })
      })]
    });
    return jsx(yX, {
      destructive: !0,
      confirmationTitle: t("community.delete_profile_modal.delete_profile_title"),
      content: e,
      onConfirm: this.deleteProfile,
      confirmText: t("general.delete"),
      popStack: !0,
      ...this.props
    });
  }
}
export let $$p0 = Ju(u, "DeleteProfileModal");
export const M = $$p0;