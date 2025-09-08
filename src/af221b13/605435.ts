import { H as _$$H } from "../af221b13/713104";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { S as _$$S } from "../5430/465757";
import { lQ } from "../905/934246";
import { renderI18nText, getI18nString } from "../905/303541";
import { FPublicationStatusType } from "../figma_app/191312";
import { G3 } from "../905/272080";
import { FEditorType } from "../figma_app/53721";
import { C as _$$C } from "../figma_app/198698";
import { om, x1, MA } from "../figma_app/465413";
import { A as _$$A } from "../5724/965092";
import { Vm } from "../figma_app/427318";
import { iZ } from "../905/372672";
import { Pg, lT, AC } from "../figma_app/777551";
import { MK, cN, Wd, RB } from "../figma_app/599979";
import { U as _$$U, xQ, I0, bD, m3, mr, Uz } from "../figma_app/45218";
import { useRef, useEffect } from "react";
import { U as _$$U2 } from "../905/103637";
import { Ay } from "../905/612521";
import { g as _$$g } from "../1556/359896";
import { Jm } from "../figma_app/387599";
import { U0 } from "../figma_app/471982";
import { gK } from "../5430/201744";
import { bL } from "../905/934145";
import { ts, ax } from "../figma_app/49598";
import { af } from "../figma_app/559491";
import { t as _$$t2 } from "../905/833100";
import { r as _$$r } from "../figma_app/896657";
import { j7 } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { fu } from "../figma_app/831799";
import { x2, OX } from "../figma_app/33586";
import { Cu } from "../figma_app/314264";
import { Sz } from "../figma_app/12535";
import { E as _$$E } from "../1556/957507";
import { k2 } from "../figma_app/10554";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { j as _$$j } from "../905/834956";
import { yX } from "../figma_app/918700";
function h(e) {
  let {
    hasPublisherAdminAccess,
    resource
  } = e;
  let a = (() => {
    if (hasPublisherAdminAccess) return resource.publishing_status === FPublicationStatusType.DELISTED_CREATOR_STRIPE_DISABLED ? renderI18nText("community.resource.delisted_stripe_issues") : resource?.monetized_resource_metadata?.is_subscription ? renderI18nText("community.resource.delisted_prev_purchasers_can_still_access__subscription") : renderI18nText("community.resource.delisted_prev_purchasers_can_still_access");
    if (resource?.community_resource_payment?.subscription_expires_at) {
      let e = new Date(resource.community_resource_payment.subscription_expires_at).toLocaleDateString(void 0, {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return renderI18nText("community.resource.delisted_you_ll_continue_to_have_access_until", {
        dateString: e
      });
    }
    return resource?.community_resource_payment?.status === G3.SUCCEEDED ? renderI18nText("community.resource.delisted_you_ll_continue_to_have_access_to_it") : renderI18nText("community.resource.if_you_have_questions_reach_out_to_creator");
  })();
  let s = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.WARN,
    icon: _$$A,
    mainText: getI18nString("community.resource.delisted_title"),
    description: a,
    dismissible: !1,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: s,
    editorType: FEditorType.Design,
    onDismiss: lQ
  });
}
function y(e) {
  if (!iZ()) return jsx(Fragment, {});
  let t = "hub_file" === Vm(e.resource) ? getI18nString("community.seller.only_you_can_see_your_file") : "plugin" === Vm(e.resource) ? getI18nString("community.seller.only_you_can_see_your_plugin") : "widget" === Vm(e.resource) ? getI18nString("community.seller.only_you_can_see_your_widget") : jsx(Fragment, {});
  let i = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.WARN,
    icon: _$$A,
    mainText: getI18nString("community.seller.this_page_is_private"),
    description: t,
    dismissible: !1,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: i,
    editorType: FEditorType.Design,
    onDismiss: lQ
  });
}
function f(e) {
  if (!iZ()) return jsx(Fragment, {});
  let t = "hub_file" === Vm(e.resource) ? getI18nString("community.resource.unpublished_banner.only_you_can_see_this_page.hub_file") : "plugin" === Vm(e.resource) ? getI18nString("community.resource.unpublished_banner.only_you_can_see_this_page.plugin") : "widget" === Vm(e.resource) ? getI18nString("community.resource.unpublished_banner.only_you_can_see_this_page.widget") : jsx(Fragment, {});
  let i = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.WARN,
    icon: _$$A,
    mainText: getI18nString("community.resource.unpublished_banner.your_resource_is_unpublished"),
    description: t,
    dismissible: !1,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: i,
    editorType: FEditorType.Design,
    onDismiss: lQ
  });
}
let w = _$$H;
function E(e) {
  let t = {
    id: om.communityResourceInReviewBanner,
    bannerType: x1.WARN,
    icon: _$$A,
    mainText: getI18nString("community.resource.admin_blocked_resource_banner.this_resource_is_blocked"),
    description: getI18nString("community.resource.admin_blocked_resource_banner.you_can_only_view_this_page_as_an_admin"),
    dismissible: !1,
    positionStatic: !0
  };
  return jsx(_$$C, {
    content: t,
    onDismiss: lQ
  });
}
let Y = "MANAGE_RESOURCE_DROPDOWN_TYPE";
let X = registerModal(yX);
function V(e) {
  let {
    resource,
    fileKey
  } = e;
  let r = useDispatch();
  let c = useRef(null);
  let d = useSelector(_$$E(Y));
  let p = useSelector(e => e.currentUserOrgId);
  let h = Jm();
  let y = U0(resource);
  let f = _$$U(e.resource) ? e0.COMMUNITY_HUB_FILE : xQ(resource) ? e0.COMMUNITY_HUB_WIDGET : e0.COMMUNITY_HUB_PLUGIN;
  let v = iZ();
  let w = _$$U(e.resource);
  let E = I0(e.resource);
  let G = x2(void 0, resource, void 0, k2.RESOURCE_PAGE);
  let q = OX(resource);
  if (useEffect(() => {
    w ? r(ts({
      hubFileId: e.resource.id
    })) : r(af({
      id: e.resource.id,
      resourceType: E ? bD.PLUGIN : bD.WIDGET
    }));
  }, [r, e.resource.id, p, w, E]), !v) return null;
  let V = m3(resource);
  let K = [];
  let Z = getI18nString("community.resource.edit_this_page");
  if (K.push({
    displayText: Z,
    callback: () => {
      _$$U(resource) ? (Cu({
        name: gK.EDIT_THIS_PAGE,
        hubFileId: resource.id,
        isMonetized: V,
        text: Z,
        trackingContext: e0.COMMUNITY_HUB_FILE,
        searchSessionId: h,
        has_carousel_media_nudge: y
      }), fileKey && r(_$$t2({
        fileKey,
        isFullscreenOpen: !1,
        isEditHubFilePageMode: !0,
        entryPoint: k2.RESOURCE_PAGE,
        canvasThumbnailPromise: Sz(fileKey, v)
      }))) : (Cu({
        pluginId: resource.id,
        name: gK.EDIT_THIS_PAGE,
        isMonetized: V,
        text: Z,
        trackingContext: f,
        searchSessionId: h,
        has_carousel_media_nudge: y
      }), r(_$$r({
        publishedPluginId: resource.id,
        entryPoint: k2.RESOURCE_PAGE
      })));
    }
  }), getFeatureFlags().ext_plugin_publish_rearch && mr(resource) && (K.push(G), q && K.push(q)), _$$U(resource)) {
    let e = getI18nString("community.hub_files.open_original_file");
    if (K.push({
      displayText: e,
      callback: () => {
        Cu({
          name: gK.OPEN_ORIGINAL_FILE,
          hubFileId: resource.id,
          isMonetized: V,
          text: e,
          trackingContext: e0.COMMUNITY_HUB_FILE,
          searchSessionId: h,
          has_carousel_media_nudge: y
        });
        Ay.redirect(`/file/${fileKey}`, "_blank");
      }
    }), !Pg(resource)) {
      K.push({
        displayText: "",
        disabled: !0,
        separator: !0
      });
      let e = getI18nString(V ? "community.resource.delist" : "community.resource.unpublish");
      K.push({
        displayText: e,
        callback: () => {
          Cu({
            name: V ? gK.DELIST : gK.UNPUBLISH,
            hubFileId: resource.id,
            isMonetized: V,
            text: e,
            trackingContext: e0.COMMUNITY_HUB_FILE
          });
          r(showModalHandler({
            type: X,
            data: {
              confirmationTitle: V ? getI18nString("community.hub_files.delist_file_from_community_hub") : getI18nString("community.hub_files.remove_file_from_community_hub"),
              content: V ? getI18nString("community.hub_files.delisting_this_resource_will_prevent_people_from_discovering_or_purchasing_this_resource") : getI18nString("community.hub_files.unpublishing_this_file_will_remove_it_from_the_community_hub_and_prevent_people_from_finding_and_using_this_file"),
              confirmText: V ? getI18nString("community.resource.delist") : getI18nString("community.resource.unpublish"),
              cancelText: getI18nString("general.cancel"),
              onConfirm: () => {
                r(ax({
                  hubFileId: resource.id,
                  redirectLink: bL(resource.publisher.profile_handle)
                }));
              },
              destructive: !0
            }
          }));
        }
      });
    }
  }
  let ee = jsx(_$$g, {
    ref: c,
    buttonClassName: "show_resource_creator_banner--manageResourceCTA--lYOcA text--fontPos11--2LvXf text--_fontBase--QdLsd",
    onClick: () => {
      d || (Cu({
        name: gK.MANAGE_RESOURCE,
        resourceId: resource.id,
        has_carousel_media_nudge: y,
        trackingContext: f,
        searchSessionId: h
      }), r(j7({
        type: Y
      })));
    },
    isShowingDropdown: !1,
    children: getI18nString("community.resource.manage_resource")
  });
  let et = {
    id: om.CommunityResourceCreatorBanner,
    bannerType: x1.INFO,
    icon: jsx(_$$U2, {}),
    iconSize: "medium",
    mainText: getI18nString("community.resource.your_resource_is_live"),
    description: y ? _$$U(resource) ? getI18nString("community.resource.next_we_recommend_adding_more_images") : xQ(resource) ? getI18nString("community.resource.next_we_recommend_adding_more_images_and_videos", {
      resourceType: getI18nString("community.plugins.widget")
    }) : getI18nString("community.resource.next_we_recommend_adding_more_images_and_videos", {
      resourceType: getI18nString("community.plugins.plugin")
    }) : void 0,
    dismissible: !1,
    positionStatic: !0,
    button: {
      type: MA.CUSTOM,
      element: ee
    }
  };
  return jsxs(fu, {
    name: "RDP Creator Banner",
    properties: {
      name: "rdp_creator_banner",
      resourceId: resource.id,
      resourceType: Vm(resource),
      hasCarouselMediaNudge: y
    },
    children: [jsx(_$$C, {
      content: et,
      editorType: FEditorType.Design,
      onDismiss: lQ
    }), c.current && d && jsx(_$$j, {
      dispatch: r,
      items: K,
      showPoint: !0,
      parentRect: c.current?.getBoundingClientRect(),
      onSelectItem: e => {
        e.callback && e.callback("", null, r);
      },
      minWidth: 120
    })]
  });
}
export function $$K0(e) {
  let {
    resource
  } = e;
  let i = useSelector(e => MK(e, resource));
  let o = useSelector(e => _$$U(resource) ? cN(i) : Wd(e, resource));
  let l = RB(resource);
  let c = Uz(resource) ? resource.fig_file_metadata?.key : void 0;
  return getFeatureFlags().community_hub_admin && lT(resource) ? jsx(E, {
    resource
  }) : getFeatureFlags().community_hub_admin_reviewer && m3(resource) ? jsx(w, {
    resource
  }) : resource.publishing_status ? o && AC(resource) ? jsx(y, {
    resource
  }) : Pg(resource) ? jsx(h, {
    hasPublisherAdminAccess: o,
    resource
  }) : _$$U(resource) && l ? jsx(V, {
    resource,
    fileKey: c
  }) : (I0(resource) || xQ(resource)) && l ? jsx(V, {
    resource
  }) : jsx(_$$S, {}) : jsx(f, {
    resource
  });
}
export const u = $$K0;