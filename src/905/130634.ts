import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Component } from "react";
import { renderI18nText, getI18nString } from "../905/303541";
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
        children: renderI18nText("community.delete_profile_modal.delete_profile_info")
      }), jsx("br", {}), this.props.stripe_account_status && this.props.stripe_account_status !== P5.NONE && jsxs(Fragment, {
        children: [jsx("p", {
          children: renderI18nText("settings.any_resources_you_have_marked_for_sale", {
            creatorAgreement: Hl
          })
        }), jsx("br", {})]
      }), jsx("p", {
        children: renderI18nText("settings.delete_user_account.for_more_information_about_how_we_treat_your_data", {
          privacyPolicyLink: hM
        })
      })]
    });
    return jsx(yX, {
      destructive: !0,
      confirmationTitle: getI18nString("community.delete_profile_modal.delete_profile_title"),
      content: e,
      onConfirm: this.deleteProfile,
      confirmText: getI18nString("general.delete"),
      popStack: !0,
      ...this.props
    });
  }
}
export let $$p0 = Ju(u, "DeleteProfileModal");
export const M = $$p0;