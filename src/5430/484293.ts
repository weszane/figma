import { jsx, jsxs } from "react/jsx-runtime";
import { a as _$$a } from "../figma_app/215667";
import { Z } from "../5430/993414";
import { OQ } from "../5430/903660";
import { y } from "../5430/173892";
import { MF } from "../figma_app/773663";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
if (443 == require.j) {}
export function $$u0({
  context: e,
  filterState: t,
  allowedEditorTypes: r,
  onUpdate: u,
  showEditorFilter: m = !0,
  showResourceTypeFilter: _ = !1,
  showPriceFilter: p = !1,
  allowMixedResourceType: h = !1
}) {
  let {
    resourceType,
    editorType = MF(resourceType),
    price
  } = t;
  return jsx(fu, {
    name: e0.RESOURCE_HUB_FEED_FILTERS,
    children: jsx(_$$a, {
      mode: "match",
      children: jsxs("div", {
        className: "x78zum5",
        children: [m && jsx(Z, {
          context: e,
          resourceType,
          editorType,
          allowedEditorTypes: r,
          onUpdate: u
        }), _ && jsx(y, {
          context: e,
          resourceType,
          editorType,
          onUpdate: u,
          includeMixed: h
        }), p && jsx(OQ, {
          context: e,
          price,
          onUpdate: u ? e => u([{
            key: "price",
            value: e
          }]) : void 0
        })]
      })
    })
  });
}
export const W = $$u0;