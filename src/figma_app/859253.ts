import { jsx, jsxs } from "react/jsx-runtime";
import { MenuContainerComp, MenuGroupComp } from "../figma_app/860955";
import { DropdownThemeProvider } from "../figma_app/215667";
import { UI3ConditionalWrapper } from "../905/341359";
import { TrackingProvider } from "../figma_app/831799";
import { TrackingKeyEnum } from "../905/696396";
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
  return jsx(UI3ConditionalWrapper, {
    children: jsx(DropdownThemeProvider, {
      mode: "match",
      children: jsx(MenuContainerComp, {
        htmlAttributes: {
          "data-onboarding-key": t
        },
        children: jsxs(TrackingProvider, {
          name: TrackingKeyEnum.RESOURCE_CREATION_DROPDOWN,
          properties: {
            ...r,
            fileCreationDefaultsDropdownType: $$c1
          },
          onlyOnce: !0,
          children: [jsx(MenuGroupComp, {
            children: u
          }), p]
        })
      })
    })
  });
}
export const f = $$u0;
export const x = $$c1;