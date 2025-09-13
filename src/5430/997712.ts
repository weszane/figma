import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Component } from "react";
import { connect } from "react-redux";
import { BaseLinkComponent } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { S3 } from "../905/708054";
import { cI, zc, q3, bv, nf } from "../5430/708619";
import { A } from "../svg/711642";
class _ extends Component {
  constructor() {
    super(...arguments);
    this.getBannerText = () => {
      let e = {
        strongText: "",
        ctaPreText: ""
      };
      let t = getI18nString("community.banner.a_space_for_figma_users_to_share_things_they_create");
      let r = getI18nString("community.banner.community_is_a_space_for_figma_users_to_share_things_they_create");
      e = {
        strongText: getI18nString("community.banner.this_is_the_figma_community"),
        ctaPreText: t
      };
      this.props.profile ? (this.props.user?.community_profile_handle ? this.props.profile.id === this.props.user?.community_profile_id ? e.strongText = getI18nString("community.banner.this_is_your_figma_community_profile") : (e.strongText = "", e.ctaPreText = "") : e.strongText = getI18nString("community.banner.this_is_a_figma_community_profile"), e.ctaPreText = r) : this.props.selectedView && "communityHub" === this.props.selectedView.view && ("hubFile" === this.props.selectedView.subView ? (e.strongText = getI18nString("community.banner.this_is_a_figma_community_file"), e.ctaPreText = r) : "plugin" === this.props.selectedView.subView ? (e.strongText = getI18nString("community.banner.this_is_a_figma_community_plugin"), e.ctaPreText = r) : "widget" === this.props.selectedView.subView && (e.strongText = getI18nString("community.banner.this_is_a_figma_community_widget"), e.ctaPreText = r));
      this.props.user ? this.props.user.community_profile_handle ? this.props.selectedView && "communityHub" === this.props.selectedView.view && this.props.selectedView?.subView === "plugin" && (e.showPluginDocsCta = !0) : e.showProfileCta = !0 : e.showAccountCta = !0;
      return e;
    };
    this.onProfileCreateClick = e => {
      e.stopPropagation();
      e.preventDefault();
      this.props.user && this.props.dispatch(showModalHandler({
        type: S3,
        data: {
          userId: this.props.user.id
        }
      }));
    };
  }
  render() {
    let {
      strongText,
      ctaPreText,
      showPluginDocsCta,
      showProfileCta,
      showAccountCta
    } = this.getBannerText();
    return strongText || ctaPreText || showPluginDocsCta || showProfileCta || showAccountCta ? jsx("div", {
      className: this.props.className || "",
      children: jsxs("div", {
        className: cI,
        children: [jsx("div", {
          className: zc,
          children: jsx(SvgComponent, {
            svg: A,
            className: q3
          })
        }), jsxs("span", {
          children: [jsxs("span", {
            className: bv,
            children: [strongText, " "]
          }), jsxs("span", {
            children: [ctaPreText, " "]
          }), showProfileCta && jsx(Fragment, {
            children: renderI18nText("community.banner.to_follow_creators_and_like_resources", {
              link: jsxs(BaseLinkComponent, {
                onClick: this.onProfileCreateClick,
                className: nf,
                trusted: !0,
                children: [getI18nString("community.banner.create_your_own_profile"), "\xa0\u2192", " "]
              })
            })
          }), showAccountCta && jsxs(BaseLinkComponent, {
            href: "https://www.figma.com/signup",
            target: "_blank",
            className: nf,
            trusted: !0,
            children: [getI18nString("community.banner.get_started_with_a_free_account"), "\xa0\u2192", " "]
          }), showPluginDocsCta && jsx(Fragment, {
            children: renderI18nText("community.banner.to_create_your_own_plugin", {
              link: jsxs(BaseLinkComponent, {
                href: "https://www.figma.com/plugin-docs",
                target: "_blank",
                className: nf,
                trusted: !0,
                children: [getI18nString("community.banner.visit_the_docs"), "\xa0\u2192", " "]
              })
            })
          })]
        })]
      })
    }) : null;
  }
}
_.displayName = "CommunityBetaPromoBannerInner";
export let $$p0 = connect((e, t) => ({
  selectedView: e.selectedView,
  user: e.user
}))(_);
export const H = $$p0;