import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent } from "react";
import { connect } from "../vendor/514228";
import { buildUploadUrl } from "../figma_app/169182";
import { d as _$$d } from "../905/884707";
import { $$, nR, tB, CY, N_ } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { v } from "../905/755077";
import { P } from "../905/347284";
import { renderI18nText, getI18nString } from "../905/303541";
import { aP } from "../figma_app/530167";
import { GH, aF, VP } from "../905/18797";
import { Bj } from "../905/708054";
import { qw, Py, H5, BU, Ng as _$$Ng, rh, qr, PJ, GC, u1 } from "../905/599844";
var n;
export function $$A2(e) {
  return jsx($$, {
    className: qw,
    ..._$$d(e)
  });
}
export function $$y1(e) {
  return jsx(nR, {
    className: qw,
    ..._$$d(e)
  });
}
export function $$b5(e) {
  return jsxs(Fragment, {
    children: [jsx(tB, {
      onChange: e.onChange,
      checked: e.isChecked
    }), renderI18nText("community.publishing.i_agree_to_the_terms_of_service", {
      termsOfService: jsx(CY, {
        href: "https://www.figma.com/tos/",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("community.publishing.community_terms_of_service")
      })
    })]
  });
}
export function $$v3(e) {
  return jsxs("div", {
    children: [jsxs(P, {
      className: e.className || Py,
      hideScrollbar: !0,
      children: [jsx("div", {
        className: H5,
        style: {
          backgroundImage: `url(${e.headerImgSrc})`
        }
      }), jsxs("div", {
        className: BU,
        children: [jsx("div", {
          className: _$$Ng,
          children: e.title
        }), jsx("div", {
          className: rh,
          children: e.body
        })]
      })]
    }), jsxs("div", {
      className: qr,
      children: [jsx("div", {
        className: PJ,
        children: e.footerLeftSide
      }), jsxs("div", {
        className: GC,
        children: [e.secondaryButton && (e.secondaryButton.spinner ? jsx($$y1, {
          children: jsx(kt, {})
        }) : jsx($$y1, {
          onClick: e.secondaryButton.onClick,
          disabled: e.secondaryButton.disabled,
          dataTestId: e.secondaryButton.dataTestId,
          children: e.secondaryButton.text
        })), e.primaryButton.spinner ? jsx($$A2, {
          children: jsx(kt, {
            className: u1
          })
        }) : jsx($$A2, {
          onClick: e.primaryButton.onClick,
          disabled: e.primaryButton.disabled,
          dataTestId: e.primaryButton.dataTestId,
          children: e.primaryButton.text
        })]
      })]
    })]
  });
}
(e => {
  class t extends PureComponent {
    constructor(e) {
      super(e);
      this.saveHandle = e => {
        this.setState({
          handle: e
        });
      };
      this.onHandleValidationSuccess = () => {
        this.setState({
          disableSubmit: !1
        });
      };
      this.onHandleValidationFailure = () => {
        this.setState({
          disableSubmit: !0
        });
      };
      this.loadingKey = () => aP.loadingKeyForPayload({
        profileHandle: this.state.handle,
        onSuccess: Bj,
        profileId: this.props.publisher.id
      });
      this.onSaveHandleClick = () => {
        this.setState({
          didTriggerChangeProfileHandle: !0
        });
        this.props.dispatch(aP({
          profileHandle: this.state.handle,
          onSuccess: Bj,
          profileId: this.props.publisher.id
        }));
      };
      this._publishingEntityTitle = () => this.props.publisher.team_id ? getI18nString("community.publishing.set_a_unique_handle_for_your_team_team_name_s_new_community_profile", {
        teamName: this.props.publisher.name
      }) : this.props.publisher.org_id ? getI18nString("community.publishing.set_a_unique_handle_for_your_organization_org_name_s_new_community_profile", {
        orgName: this.props.publisher.name
      }) : getI18nString("community.publishing.set_a_unique_handle_for_your_new_personal_community_profile");
      this.state = {
        handle: "",
        disableSubmit: !0,
        didTriggerChangeProfileHandle: !1
      };
    }
    UNSAFE_componentWillUpdate(e) {
      this.state.didTriggerChangeProfileHandle && (GH(e.loadingState, this.loadingKey()) ? e.onHandleSet() : aF(e.loadingState, this.loadingKey()) && this.setState({
        didTriggerChangeProfileHandle: !1
      }));
    }
    getFooterText() {
      return jsx(Fragment, {
        children: renderI18nText("community.publishing.review_our_community_guidelines", {
          communityGuidelinesLink: jsx(N_, {
            href: "https://help.figma.com/hc/articles/360038510573-Figma-Community-Guidelines",
            target: "_blank",
            trusted: !0,
            children: renderI18nText("community.publishing.community_guidelines")
          })
        })
      });
    }
    render() {
      return jsx($$v3, {
        className: this.props.className || "",
        title: this._publishingEntityTitle(),
        body: jsx(Fragment, {
          children: jsx(v, {
            saveHandle: this.saveHandle,
            onProfileHandleValidationSuccess: this.onHandleValidationSuccess,
            onProfileHandleValidationFailure: this.onHandleValidationFailure
          })
        }),
        secondaryButton: this.props.secondaryButton,
        primaryButton: {
          onClick: this.onSaveHandleClick,
          text: getI18nString("general.save"),
          disabled: this.state.disableSubmit || VP(this.props.loadingState, this.loadingKey()),
          dataTestId: "save-community-profile-handle"
        },
        footerLeftSide: this.getFooterText(),
        headerImgSrc: this.props.publisher.primary_user_id ? buildUploadUrl("f3705186bf63741df6d081496237a0b525f9a6bb") : buildUploadUrl("cf3fa3f5b25723109a5864e9e87f5790c0c1e213")
      });
    }
  }
  e.ConnectedPublishSuccessHandleContent = connect(e => ({
    loadingState: e.loadingState,
    currentUser: e.user
  }))(t);
})(n || (n = {}));
export let $$I0 = n.ConnectedPublishSuccessHandleContent;
export function $$E4(e) {
  let t = jsxs(Fragment, {
    children: [jsxs("div", {
      children: [renderI18nText("community.publishing.if_you_have_a_personal_community_profile_associated_with_a_different_figma_account_connect_it_now_and_publish_to_your_existing_profile_without_having_to_switch_accounts"), " ", jsx(CY, {
        href: "https://help.figma.com/hc/articles/1500005162381-Manage-Community-profiles-and-settings#add-profile",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })]
    }), jsx("br", {}), jsx("div", {
      children: renderI18nText("community.publishing.if_you_don_t_have_an_existing_community_profile_you_can_create_one_now")
    })]
  });
  e.withConnectedAccounts && (t = jsxs(Fragment, {
    children: [jsxs("div", {
      children: [renderI18nText("community.publishing.currently_you_don_t_have_a_personal_community_profile_associated_with_a_different_figma_account_if_you_do_connect_it_now_and_publish_to_your_existing_profile_without_having_to_switch_accounts"), " ", jsx(CY, {
        href: "https://help.figma.com/hc/articles/1500005162381-Manage-Community-profiles-and-settings#add-profile",
        target: "_blank",
        trusted: !0,
        children: renderI18nText("general.learn_more")
      })]
    }), jsx("br", {}), jsx("div", {
      children: renderI18nText("community.publishing.if_you_don_t_have_an_existing_community_profile_you_can_create_one_now")
    })]
  }));
  return jsx($$v3, {
    className: e.className || "",
    title: getI18nString("community.publishing.connect_or_create_a_public_community_profile_to_publish"),
    body: t,
    secondaryButton: e.secondaryButton,
    primaryButton: e.primaryButton,
    footerLeftSide: e.onBack ? jsx($$y1, {
      onClick: e.onBack,
      className: qw,
      disabled: e.isLoading,
      children: renderI18nText("general.back")
    }) : void 0,
    headerImgSrc: buildUploadUrl("55cce76b49d5d5c5e62352d0d21ee8ce025eef38")
  });
}
export const Kp = $$I0;
export const M4 = $$y1;
export const UC = $$A2;
export const XT = $$v3;
export const nn = $$E4;
export const xk = $$b5;