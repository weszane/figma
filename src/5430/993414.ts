import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { A5 } from "../figma_app/209680";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { Vr } from "../5430/297093";
import { useRouteParams } from "../figma_app/321395";
import { ResourceHubHomeRouteClass } from "../figma_app/979714";
import { anchorEditorResource } from "../figma_app/773663";
import { PublishSourceType, HubEventType } from "../figma_app/350203";
import { n as _$$n } from "../5430/859486";
import { km, u9 } from "../5430/184698";
var n = i;
export function $$f0({
  onUpdate: e,
  editorType: t,
  resourceType: r,
  allowedEditorTypes: i,
  size: c
}) {
  let u = Vr(r, i);
  return u.length <= 1 ? null : jsx(A5, {
    name: getI18nString("community.landing_page.dropdown_filter__editor"),
    onUpdate: ([t]) => {
      e(t);
    },
    initialValues: [t],
    adtlClassName: n()(km, "sm" === c && u9),
    dataOnboardingKey: "community_feed_product_filter",
    onClick: () => {
      trackEventAnalytics("editor_type_filter_clicked");
    },
    options: [u]
  });
}
export function $$y1({
  context: e,
  resourceType: t,
  editorType: r,
  allowedEditorTypes: i,
  onUpdate: n
}) {
  let l = useRouteParams(ResourceHubHomeRouteClass)?.tab;
  let x = l && l === PublishSourceType.INTERNAL;
  let f = Vr(t, i, x);
  let y = getSearchSessionIdFromSelector();
  return f.length <= 1 ? null : jsx(_$$n, {
    context: e,
    defaultOption: getI18nString("community.landing_page.sort.all_products"),
    selectedOption: r,
    options: f,
    searchParamUpdate: e => ({
      editor_type: e
    }),
    onOptionSelect: (e, t) => {
      trackEventAnalytics(HubEventType.EDITOR_TYPE_FILTER_CHANGED, {
        editor_type: e,
        from: t,
        search_session_id: y
      });
    },
    onUpdate: n ? e => {
      let r = [{
        key: "editorType",
        value: e
      }];
      let s = anchorEditorResource(e, t, {
        anchorOn: "editorType"
      }).resourceType;
      s !== t && r.push({
        key: "resourceType",
        value: s
      });
      n(r);
    } : void 0
  });
}
export const F = $$f0;
export const Z = $$y1;