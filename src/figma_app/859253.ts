import { jsx, jsxs } from "react/jsx-runtime";
import { mc, YJ } from "../figma_app/860955";
import { a as _$$a } from "../figma_app/215667";
import { J } from "../905/341359";
import { fu } from "../figma_app/831799";
import { e0 } from "../905/696396";
import { e as _$$e } from "../figma_app/919092";
export let $$c1 = "FILE_CREATION_OMNICREATE_DROPDOWN";
export function $$u0({
  menuItems: e,
  "data-onboarding-key": t,
  trackingProperties: r
}) {
  let u = e.newFiles.map(({
    key: e,
    ...t
  }) => jsx(_$$e, {
    ...t
  }, e));
  let p = e.$$import ? jsx(_$$e, {
    ...e.$$import
  }) : null;
  return jsx(J, {
    children: jsx(_$$a, {
      mode: "match",
      children: jsx(mc, {
        htmlAttributes: {
          "data-onboarding-key": t
        },
        children: jsxs(fu, {
          name: e0.RESOURCE_CREATION_DROPDOWN,
          properties: {
            ...r,
            fileCreationDefaultsDropdownType: $$c1
          },
          onlyOnce: !0,
          children: [jsx(YJ, {
            children: u
          }), p]
        })
      })
    })
  });
}
export const f = $$u0;
export const x = $$c1;