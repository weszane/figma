import { jsxs, jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { useDispatch, connect } from "react-redux";
import { parsePxInt } from "../figma_app/783094";
import { ButtonSecondary, ButtonBasePrimary, BaseLinkComponent, clickableBaseLinkTracked } from "../figma_app/637027";
import { renderI18nText, getI18nString } from "../905/303541";
import { jt } from "../figma_app/395505";
import { showModalHandler } from "../905/156213";
import { R$ } from "../figma_app/86989";
import { selectCurrentUser } from "../905/372672";
import { hasOrgUsersForUser } from "../figma_app/951233";
import { hasClientMeta, isWidget } from "../figma_app/45218";
import { isSubscription } from "../905/54385";
import { bX } from "../figma_app/792917";
import { cU, ox, ab } from "../figma_app/870683";
import { dOH } from "../figma_app/27776";
import { Xk, LL, iZ as _$$iZ, _1 } from "../5430/868766";
export function $$v4(e) {
  return jsxs("div", {
    className: Xk,
    children: [jsx("p", {
      children: e.label
    }), jsx(ButtonSecondary, {
      onClick: e.onClickDecline,
      className: LL,
      children: renderI18nText("community.detail_view.decline")
    }), jsx(ButtonBasePrimary, {
      onClick: e.onClickAccept,
      className: LL,
      children: renderI18nText("community.detail_view.accept")
    })]
  });
}
parsePxInt(dOH);
class b extends PureComponent {
  constructor() {
    super(...arguments);
    this.getSubjectBodyForResource = () => hasClientMeta(this.props.resource) ? {
      resourceSubject: getI18nString("community.reporting.reporting_an_inappropriate_file"),
      resourceBody: getI18nString("community.reporting.i_want_to_report_this_file_for_violating_the_community_guidelines_resource_url", {
        resourceUrl: cU(this.props.resource.id)
      })
    } : isWidget(this.props.resource) ? {
      resourceSubject: getI18nString("community.reporting.reporting_an_inappropriate_widget"),
      resourceBody: getI18nString("community.reporting.i_want_to_report_this_widget_for_violating_the_community_guidelines_resource_url", {
        resourceUrl: ox(this.props.resource.id)
      })
    } : {
      resourceSubject: getI18nString("community.reporting.reporting_an_inappropriate_plugin"),
      resourceBody: getI18nString("community.reporting.i_want_to_report_this_plugin_for_violating_the_plugin_guidelines_resource_url", {
        resourceUrl: ab(this.props.resource.id)
      })
    };
  }
  render() {
    let {
      resourceSubject,
      resourceBody
    } = this.getSubjectBodyForResource();
    let r = t;
    r = `${r}${this.props.user ? `
${getI18nString("community.reporting.my_figma_user_id_is_user_id", {
      userId: this.props.user.id
    })}` : ""}
${getI18nString("community.reporting.add_your_description_here")}`;
    return jsx(BaseLinkComponent, {
      href: `mailto:content-reviews@figma.com?subject=${encodeURIComponent(resourceSubject)}&body=${encodeURIComponent(r)}`,
      className: _$$iZ,
      trusted: !0,
      children: renderI18nText("community.detail_view.report_resource")
    });
  }
}
export function $$j3() {
  let e = selectCurrentUser();
  return e ? jsx(clickableBaseLinkTracked, {
    className: _1,
    trackingEventName: "Detail View - Report Resource",
    onClick: () => {
      jt(e);
    },
    trusted: !0,
    children: renderI18nText("community.detail_view.report_resource")
  }) : null;
}
export function $$w0(e) {
  let {
    user,
    name,
    monetizedResource
  } = e;
  let o = useDispatch();
  return jsx(clickableBaseLinkTracked, {
    className: _1,
    trackingEventName: "Detail View - Request Refund",
    onClick: () => {
      o(showModalHandler({
        type: bX,
        data: {
          user,
          name,
          monetizedResource
        }
      }));
    },
    trusted: !0,
    children: renderI18nText("community.buyer.request_refund")
  });
}
export function $$C1(e) {
  let t = R$(e.resource);
  let r = "Detail View - View Order Details";
  let i = getI18nString("community.buyer.view_order_details");
  isSubscription(e.resource.monetized_resource_metadata) && (r = "Detail View - Manage Subscription", i = getI18nString("community.buyer.manage_subscription"));
  return jsx(clickableBaseLinkTracked, {
    className: _1,
    onClick: () => t(),
    trackingEventName: r,
    trusted: !0,
    children: i
  });
}
connect(e => ({
  hasOrgs: hasOrgUsersForUser(e),
  teams: Object.keys(e.teams).map(t => e.teams[t]),
  user: e.user
}))(b);
var L = (e => (e[e.PROMO = 0] = "PROMO", e[e.PAID = 1] = "PAID", e))(L || {});
export function $$T2(e) {
  return jsx(BaseLinkComponent, {
    className: e.className,
    onClick: e.onClick,
    trusted: !0,
    children: renderI18nText("community.detail_view.remove_myself_as_creator")
  });
}
export const EV = $$w0;
export const NY = $$C1;
export const d = $$T2;
export const dx = $$j3;
export const vR = $$v4;