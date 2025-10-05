import { jsx } from "react/jsx-runtime";
import i from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { SelectDropdown } from "../figma_app/209680";
import { getSearchSessionIdFromSelector } from "../figma_app/387599";
import { CO } from "../5430/297093";
import { anchorEditorResource } from "../figma_app/773663";
import { n as _$$n } from "../5430/859486";
import { km, u9 } from "../5430/184698";
var n = i;
export function $$p0({
  onUpdate: e,
  resourceType: t,
  editorType: r,
  size: i
}) {
  let o = CO(r);
  return o.length <= 1 ? null : jsx(SelectDropdown, {
    name: getI18nString("community.landing_page.dropdown_filter__resource_type"),
    onUpdate: ([t]) => {
      e(t);
    },
    initialValues: [t],
    adtlClassName: n()(km, "sm" === i && u9),
    options: [o]
  });
}
export function $$h1({
  context: e,
  resourceType: t,
  editorType: r,
  onUpdate: i,
  includeMixed: n = !1
}) {
  let l = CO(r, n);
  let _ = getSearchSessionIdFromSelector();
  return jsx(_$$n, {
    context: e,
    defaultOption: n ? getI18nString("community.view_bar.all_resources") : getI18nString("community.view_bar.files"),
    selectedOption: t,
    options: l,
    searchParamUpdate: e => ({
      resource_type: e,
      editor_type: anchorEditorResource(r, e, {
        anchorOn: "resourceType"
      }).editorType
    }),
    onOptionSelect: (e, t) => {
      trackEventAnalytics("resource_type_filter_changed", {
        resource_type: e,
        from: t,
        search_session_id: _
      });
    },
    onUpdate: i ? e => {
      let t = [{
        key: "resourceType",
        value: e
      }];
      let s = anchorEditorResource(r, e, {
        anchorOn: "resourceType"
      }).editorType;
      s !== r && t.push({
        key: "editorType",
        value: s
      });
      i(t);
    } : void 0
  });
}
export const Y = $$p0;
export const y = $$h1;