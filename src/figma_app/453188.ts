import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "../905/438674";
import { c as _$$c } from "../905/486270";
import { getI18nString } from "../905/303541";
import { getCommunityFileUrl } from "../905/612685";
import { KindEnum } from "../905/129884";
import { conditionalWrapper } from "../905/579635";
import { eH } from "../figma_app/318590";
import { getSingletonSceneGraph } from "../905/700578";
import { useSingleSelectedKey } from "../figma_app/311375";
import { u as _$$u } from "../figma_app/398802";
import { Ad } from "../figma_app/811257";
export function $$m0({
  isInDesignSAP: e
}) {
  let t = eH();
  let r = function () {
    let e = useSingleSelectedKey();
    if (!e) return null;
    let t = getSingletonSceneGraph().get(e);
    if (!t) return null;
    let r = t.hubFileAttribution;
    return r?.hubFileId && r?.hubFileName ? r : null;
  }();
  if (!(t && r)) return null;
  let {
    hubFileId,
    hubFileName
  } = r;
  return jsx(conditionalWrapper, {
    condition: !!e,
    wrapper: e => jsx(_$$u, {
      children: e
    }),
    children: jsx(Ad, {
      appendedClassName: "ui3_fragment_community_attribution--ui3DescriptionRow--sAQFO",
      label: null,
      input: jsx(Link, {
        href: getCommunityFileUrl(hubFileId),
        htmlAttributes: {
          "data-tooltip": getI18nString("design_systems.instance_panel.open_community_page"),
          "data-tooltip-type": KindEnum.TEXT
        },
        newTab: !0,
        children: jsxs("div", {
          className: "ui3_fragment_community_attribution--ui3DescriptionButton--aLiCP",
          children: [jsx("div", {
            className: "ui3_fragment_community_attribution--ui3DescriptionText--B0-1J ellipsis--ellipsis--Tjyfa",
            children: hubFileName
          }), jsx(_$$c, {})]
        })
      })
    })
  });
}
export const T = $$m0;