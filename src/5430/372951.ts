import { jsx, jsxs } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { x as _$$x } from "../7222/491815";
import { C as _$$C } from "../5430/935440";
import { e as _$$e2 } from "../905/693478";
import l from "classnames";
import { reportError } from "../905/11";
import { oW } from "../905/675859";
import { c as _$$c } from "../905/320067";
import { MediaQuerySvgComponent } from "../905/331623";
import { getSearchSessionIdFromSelector, getCurrentQueryId } from "../figma_app/387599";
import { buildCommunityUrl } from "../figma_app/471982";
import { Q } from "../905/978641";
import { getResourceTaglineOrDescription, trackResourceClickEvent } from "../figma_app/777551";
import { getResourceType } from "../figma_app/427318";
import { ResourceTypeEnum } from "../figma_app/306946";
import { dn } from "../figma_app/994403";
import { a as _$$a } from "../905/329735";
import { my } from "../905/14017";
import { Mr } from "../figma_app/795938";
import { A6 } from "../905/350234";
import { A } from "../1617/424579";
var c = l;
let L = "resource_tile--extensionEditorIcon--kZpTa resource_tile--templateEditorIcon--8SNng";
export function $$I1({
  resource: e,
  isSelected: t
}) {
  let r = null;
  let n = getResourceType(e);
  [ResourceTypeEnum.DESIGN_TEMPLATE, ResourceTypeEnum.FIGJAM_TEMPLATE, ResourceTypeEnum.PROTOTYPE, ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.UI_KIT, ResourceTypeEnum.SITE_TEMPLATE, ResourceTypeEnum.FIGMAKE_TEMPLATE].includes(n) ? e.thumbnail_url ? r = jsx(_$$c, {
    srcSet: "",
    src: e.thumbnail_url,
    image_type: "COMMUNITY_RESOURCE_THUMBNAIL",
    alt: e.name,
    imageProps: {
      loading: "lazy",
      className: "resource_tile--thumbnailImage--RJCYv"
    }
  }) : reportError(_$$e.COMMUNITY, Error("ResourceTileImage: resource has no thumbnail_url")) : n === ResourceTypeEnum.COOPER_TEMPLATE_FILE ? e.thumbnail_url ? r = jsx(Q, {
    src: e.thumbnail_url,
    loading: "lazy",
    alt: e.name,
    draggable: !1,
    crossOrigin: "use-credentials"
  }) : reportError(_$$e.COMMUNITY, Error("ResourceTileImage: resource has no thumbnail_url")) : [ResourceTypeEnum.PLUGIN, ResourceTypeEnum.WIDGET].includes(n) && (e.icon_url ? r = jsxs("div", {
    className: "resource_tile--iconWrapper--K9Ds6",
    children: [jsx(oW, {
      className: c()({
        "resource_tile--pluginIcon--jtOsZ": n === ResourceTypeEnum.PLUGIN,
        "resource_tile--widgetIcon--G6Tsn": n === ResourceTypeEnum.WIDGET
      }),
      alt: e.name,
      src: e.icon_url,
      loading: "lazy"
    }), n === ResourceTypeEnum.PLUGIN && jsx("div", {
      className: "resource_tile--pluginTaglineOrDescription--kfqm7 text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: getResourceTaglineOrDescription(e)
    })]
  }) : reportError(_$$e.COMMUNITY, Error("ResourceTileImage: resource has no icon_url")));
  return jsx("div", {
    className: "resource_tile--aspectRatioContainer--61bXu",
    children: jsxs("div", {
      className: c()("resource_tile--resourceTileImageContainer--s9lq8", {
        "resource_tile--selectedResourceTileImageContainer--aRRdF": t
      }),
      children: [n === ResourceTypeEnum.PROTOTYPE && jsx(MediaQuerySvgComponent, {
        svg: A,
        className: "resource_tile--prototypeIcon--sQEUY",
        useOriginalSrcFills_DEPRECATED: !0,
        fallbackSvg: A
      }), r]
    })
  });
}
function N({
  resource: e
}) {
  return [ResourceTypeEnum.DESIGN_TEMPLATE, ResourceTypeEnum.FIGJAM_TEMPLATE, ResourceTypeEnum.SLIDE_TEMPLATE, ResourceTypeEnum.PROTOTYPE, ResourceTypeEnum.COOPER_TEMPLATE_FILE, ResourceTypeEnum.COOPER_TEMPLATE_ASSET, ResourceTypeEnum.SITE_TEMPLATE].includes(e.resource_type) ? jsx("div", {
    className: "resource_tile--templateEditorIcon--8SNng",
    children: jsx(dn, {
      editorType: e.editor_types[0]
    })
  }) : e.resource_type === ResourceTypeEnum.PLUGIN ? jsx("div", {
    className: L,
    children: jsx(_$$x, {
      style: {
        "--color-icon": "white"
      }
    })
  }) : e.resource_type === ResourceTypeEnum.WIDGET ? jsx("div", {
    className: L,
    children: jsx(_$$C, {
      style: {
        "--color-icon": "white"
      }
    })
  }) : e.resource_type === ResourceTypeEnum.FIGMAKE_TEMPLATE ? jsx("div", {
    className: L,
    children: jsx(_$$e2, {
      style: {
        "--color-icon": "white"
      }
    })
  }) : null;
}
export function $$E0({
  resource: e,
  onIntersectionChange: t,
  isMetaHidden: r,
  index: i,
  onClickTracking: n
}) {
  let o = getSearchSessionIdFromSelector();
  let a = getCurrentQueryId();
  return jsxs("div", {
    className: "resource_tile--resourceTile--SiKPd",
    "data-testid": "community-resource-tile",
    children: [jsx(_$$a, {
      callback: e => {
        e[0] && t(e[0]);
      }
    }), jsxs(A6, {
      to: buildCommunityUrl({
        resource: e
      }) || e.rdp_url,
      onClick: () => {
        n ? n(e) : trackResourceClickEvent(e.resource_type, e.id, i, o, a);
      },
      className: "resource_tile--resourceTileLink--6Aeyd",
      children: [jsx($$I1, {
        resource: e
      }), jsx(N, {
        resource: e
      }), !r && jsx(Mr, {
        resource: e,
        showMonetizationBadge: !1
      })]
    }), !r && jsx(my, {
      resource: e
    })]
  });
}
export const f = $$E0;
export const i = $$I1;