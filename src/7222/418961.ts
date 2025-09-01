import { sx } from "../905/449184";
var $$u1 = (e => (e.RESOURCE_HUB_BREADCRUMB_CLICKED = "resource_hub_breadcrumb_clicked", e.RESOURCE_HUB_CATEGORY_BREADCRUMB_CLICKED = "resource_hub_category_breadcrumb_clicked", e.RESOURCE_HUB_HOME_BREADCRUMB_CLICKED = "resource_hub_home_breadcrumb_clicked", e.RESOURCE_HUB_CATEGORY_DROPDOWN_ITEM_CLICKED = "resource_hub_category_dropdown_item_clicked", e.RESOURCE_HUB_CATEGORY_LINK_PILL_CLICKED = "resource_hub_category_link_pill_clicked", e.RESOURCE_HUB_INTERNAL_RESOURCE_TYPE_PILL_CLICKED = "resource_hub_internal_resource_type_pill_clicked", e.RESOURCE_HUB_INTERNAL_RESOURCE_TYPE_BREADCRUMB_CLICKED = "resource_hub_internal_resource_type_breadcrumb_clicked", e.RESOURCE_HUB_FEATURED_CATEGORY_CLICKED = "resource_hub_featured_category_clicked", e.RESOURCE_HUB_RESOURCE_CLICKED = "resource_hub_resource_clicked", e.RESOURCE_HUB_SECTION_LINK_CLICKED = "resource_hub_section_link_clicked", e.RESOURCE_HUB_TAB_CLICKED = "resource_hub_tab_clicked", e.RESOURCE_HUB_SAVES_PILL_CLICKED = "resource_hub_saves_pill_clicked", e.RESOURCE_HUB_LIGHTBOX_RDP_CLOSED = "resource_hub_lightbox_rdp_closed", e.RESOURCE_HUB_BROWSE_COMMUNITY_CLICKED = "resource_hub_browse_community_clicked", e.RESOURCE_HUB_PROMOTIONAL_OVERLAY = "resource_hub_promotional_overlay", e.COMMUNITY_TAB_ONBOARDING_OVERLAY = "community_tab_onboarding_overlay", e.COMMUNITY_MOVED_TO_RESOURCE_HUB_BANNER_CLICKED = "community_moved_to_resource_hub_banner_clicked", e.RESOURCE_HUB_SEARCH_IN_COMMUNITY_LINK_CLICKED = "resource_hub_search_in_community_link_clicked", e))($$u1 || {});
export function $$l6(e) {
  sx("resource_hub_breadcrumb_clicked", e);
}
export function $$n14(e) {
  sx("resource_hub_category_dropdown_item_clicked", {
    route: e
  });
}
export function $$c17(e, t) {
  sx("resource_hub_category_link_pill_clicked", {
    from_route: e,
    to_route: t
  });
}
export function $$i8() {
  sx("resource_hub_saves_pill_clicked");
}
export function $$a13(e) {
  sx("resource_hub_internal_resource_type_pill_clicked", {
    resource_type: e
  });
}
export function $$s16(e, t) {
  sx("resource_hub_featured_category_clicked", {
    user_job_title: e,
    route: t
  });
}
export function $$o4(e, t, r, u, l, n) {
  sx("resource_hub_resource_clicked", {
    resource_id: e,
    resource_type: t,
    type: r,
    search_session_id: l,
    search_query_id: n,
    result_clicked_index: u
  });
}
export function $$d5(e, t) {
  sx("resource_hub_resource_clicked", {
    template_id: e,
    editor_type: t
  });
}
export function $$E0(e) {
  sx("resource_hub_section_link_clicked", {
    route: e
  });
}
export function $$f9(e) {
  sx("resource_hub_tab_clicked", {
    tab: e
  });
}
export function $$m10(e, t) {
  sx("resource_hub_lightbox_rdp_closed", {
    resource_id: e,
    resource_type: t
  });
}
export function $$b12() {
  sx("community_moved_to_resource_hub_banner_clicked");
}
export function $$C11(...e) {
  let {
    trackingEventName,
    trackingProperties
  } = function (e, t) {
    return {
      trackingEventName: "community_home_shelf_resource_clicked",
      trackingProperties: {
        resourceType: e,
        resourceId: t
      }
    };
  }(...e);
  sx(trackingEventName, trackingProperties);
}
export function $$h15() {
  sx("community_home_shelf_see_more_clicked");
}
export function $$y7(e, t, r, _) {
  return {
    resourceType: e,
    community_resource_id: t,
    searchSessionId: r,
    search_query_id: _
  };
}
export function $$R3(e, t) {
  return {
    resource_type: e,
    community_resource_id: t
  };
}
export function $$L2(e, t, r) {
  sx("resource_hub_search_in_community_link_clicked", {
    search_session_id: e,
    search_query_id: t,
    internal_results_count: r
  });
}
export const CA = $$E0;
export const HH = $$u1;
export const JO = $$L2;
export const Kj = $$R3;
export const LP = $$o4;
export const L_ = $$d5;
export const Ox = $$l6;
export const W6 = $$y7;
export const YM = $$i8;
export const _K = $$f9;
export const bb = $$m10;
export const kg = $$C11;
export const lz = $$b12;
export const ng = $$a13;
export const pt = $$n14;
export const q5 = $$h15;
export const rC = $$s16;
export const uo = $$c17;