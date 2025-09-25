import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "classnames";
import { appendSearchParam } from "../905/508367";
import { parsePxNumber } from "../figma_app/783094";
import { WAFImage } from "../905/675859";
import { O7 } from "../figma_app/578832";
import { addWhiteboardToolToRecentsAction } from "../figma_app/147952";
import { fG } from "../figma_app/973927";
import { Cn } from "../905/862913";
import { M as _$$M } from "../9410/228122";
import { z } from "../3276/638169";
import { S as _$$S } from "../3276/591174";
import { c as _$$c } from "../3276/761211";
import { B as _$$B } from "../3276/578394";
import { AE, Ik, E as _$$E } from "../9410/36414";
import { FFileType } from "../figma_app/191312";
import { Vq } from "../figma_app/979658";
import { FDocumentType, ITemplateType } from "../905/862883";
import { KindEnum } from "../905/129884";
import { WM } from "../905/838765";
import { _ as _$$_ } from "../469e6e40/273550";
import { lX } from "../figma_app/588397";
import { p as _$$p } from "../905/42189";
import { I as _$$I } from "../9410/40694";
import { Yx } from "../9410/335206";
import { W as _$$W } from "../3276/776313";
import { J } from "../469e6e40/985095";
import { Ho } from "../figma_app/878651";
import { HD } from "../3276/316480";
import { J as _$$J } from "../469e6e40/430781";
import { MNc } from "../figma_app/27776";
var r = s;
let O = "dlt_universal_insert_item--recentItem--Jci7m";
let F = "dlt_universal_insert_item--recentItemImage--vvIrT";
let B = parsePxNumber(MNc);
function U(e) {
  return `data:image/svg+xml;utf8,${encodeURIComponent(e)}`;
}
let H = U(`<svg width="68" height="41" viewBox="0 0 68 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.858643" y="0.297363" width="66.9565" height="40" fill="#F5F5F5"/>
<path d="M6.24878 6.57568L61.5614 35.8461" stroke="#E6E6E6" stroke-width="2"/>
</svg>`);
let V = U(`<svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.795898" y="0.795898" width="46" height="46" rx="4" fill="#F5F5F5"/>
<path d="M6.05078 6.43506L42.0168 41.4843" stroke="#E6E6E6" stroke-width="2"/>
</svg>`);
function q(e, t) {
  let [n, o] = useState(0);
  let [i, s] = useState(0);
  useEffect(() => {
    if (e) {
      let t = new Image();
      t.addEventListener("load", function () {
        o(t.naturalWidth);
        s(t.naturalHeight);
      });
      t.src = e;
    }
  }, [e]);
  return !e || n * i > 25e5 ? t : e;
}
export function $$z1(e, t, n) {
  let {
    item,
    type
  } = e;
  if (!item) return null;
  switch (type) {
    case HD.LIBRARY_ITEM:
      return (n && item.thumbnail_url ? appendSearchParam(item.thumbnail_url, "fuid", n) : item.thumbnail_url) || null;
    case HD.WIDGET:
      return item.redirect_snapshot_url || J;
    case HD.PLUGIN:
      return item.redirect_icon_url || _$$W;
    case HD.TEMPLATE:
      return t(item).imageUrl || null;
    case HD.FACE_STAMP:
      return item.img_url || null;
    case HD.WHITEBOARD_TOOL:
      return AE(item);
  }
}
export function $$Z0({
  item: e,
  width: t,
  height: n,
  disableTooltips: i
}) {
  let s = fG();
  let r = useCallback(e => $$z1(e, s), [s]);
  if (!e.item) return null;
  switch (e.type) {
    case HD.LIBRARY_ITEM:
      return jsx(lX, {
        draggable: {
          sourceForTracking: "universal-insert-figjam-collage"
        },
        height: n || B,
        isDragged: i,
        isFigJam: !0,
        item: e.item,
        noBackground: !0,
        shouldHideDescription: !0,
        showName: !1,
        tooltipShownAbove: !0,
        width: t || B
      });
    case HD.WIDGET:
      return jsx($, {
        widget: e.item,
        disableTooltips: i,
        imgSrc: r(e)
      });
    case HD.PLUGIN:
      return jsx(K, {
        plugin: e.item,
        disableTooltips: i,
        imgSrc: r(e)
      });
    case HD.TEMPLATE:
      return jsx(W, {
        template: e.item,
        disableTooltips: i,
        width: t || B,
        imgSrc: r(e)
      });
    case HD.FACE_STAMP:
      return jsx(_$$I, {
        mini: !0,
        hideName: !0,
        user: e.item,
        triggeredFrom: Vq(_$$p.RECENTS_COLLAGE)
      });
    case HD.WHITEBOARD_TOOL:
      return jsx(G, {
        tool: e.item,
        onInsertableResourcePointerDown: Yx(e.item).insertToolWithDragAction,
        disableTooltips: i
      });
    default:
      return null;
  }
}
function $({
  widget: e,
  disableTooltips: t,
  imgSrc: n
}) {
  let a = q(n, e.redirect_icon_url || V);
  return jsx("div", {
    className: O,
    "data-tooltip-type": t ? void 0 : KindEnum.TEXT,
    "data-tooltip": t ? void 0 : e.name,
    "data-tooltip-timeout-delay": t ? void 0 : 500,
    "data-tooltip-show-above": !t || void 0,
    children: jsx(_$$_, {
      src: a,
      widget: e,
      analytics: {
        triggeredFrom: "universal-insert-figjam-collage"
      },
      fillContainer: !0,
      clickToInsert: !1,
      context: FFileType.WHITEBOARD
    })
  });
}
function K({
  plugin: e,
  disableTooltips: t,
  imgSrc: n
}) {
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$c({
    clickToInsert_DEPRECATED: !1,
    triggeredFrom: Vq(_$$p.RECENTS_COLLAGE),
    resource: e
  });
  let s = q(n, V);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: O,
      "data-tooltip-type": t ? void 0 : KindEnum.TEXT,
      "data-tooltip": t ? void 0 : e.name,
      "data-tooltip-timeout-delay": t ? void 0 : 500,
      "data-tooltip-show-above": !t || void 0,
      onPointerDown: onInsertableResourcePointerDown,
      role: "button",
      tabIndex: 0,
      children: jsx("div", {
        className: "dlt_universal_insert_item--recentPluginImageContainer--j2z08",
        children: jsx("img", {
          src: s,
          alt: e.name,
          className: F,
          draggable: !1
        })
      })
    }), jsx(z, {
      dragState
    })]
  });
}
function W({
  template: e,
  disableTooltips: t,
  width: n,
  imgSrc: a
}) {
  let i;
  let {
    dragState,
    onInsertableResourcePointerDown
  } = _$$B({
    resource: e,
    clickToInsert_DEPRECATED: !1,
    triggeredFrom: "universal-insert-figjam-collage"
  });
  let {
    name,
    clientMeta,
    thumbnailIsSet,
    hubFileId,
    resizedThumbnailUrls
  } = fG()(e);
  if (resizedThumbnailUrls) {
    let e = Object.keys(resizedThumbnailUrls).map(e => Number(e)).sort()[0];
    e && (i = resizedThumbnailUrls[e]);
  }
  let v = q(i || a, H);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: r()(O, {
        [_$$J]: !!dragState
      }),
      "data-tooltip-type": t ? void 0 : KindEnum.TEXT,
      "data-tooltip": t ? void 0 : name,
      "data-tooltip-timeout-delay": t ? void 0 : 500,
      "data-tooltip-show-above": !t || void 0,
      onPointerDown: onInsertableResourcePointerDown,
      role: "button",
      tabIndex: 0,
      style: {
        width: n,
        height: .6 * n
      },
      children: jsx(WM, {
        backgroundColor: Cn(clientMeta),
        removeBorder: !0,
        className: r()("dlt_universal_insert_item--recentTemplateCommunityCard--0w4xu", {
          "dlt_universal_insert_item--recentTemplateCommunityCardInnerImage--nDAlH": !thumbnailIsSet
        }),
        children: jsx(Ho, {
          image: v,
          isSet: !!thumbnailIsSet,
          isWhiteboard: !0,
          hubFileId,
          alt: name,
          draggable: !1,
          resizedThumbnailUrls,
          thumbnailContext: O7.UNIVERSAL_INSERT
        })
      })
    }), jsx(_$$S, {
      dragState
    })]
  });
}
function G({
  tool: e,
  onInsertableResourcePointerDown: t,
  disableTooltips: n
}) {
  let s = useDispatch();
  let r = useSelector(e => e.user?.id);
  let l = useCallback(() => {
    s(addWhiteboardToolToRecentsAction({
      currentUserId: r,
      storeInRecentsKey: FDocumentType.FigJam,
      item: {
        id: e,
        type: ITemplateType.WhiteboardTool
      }
    }));
  }, [r, s, e]);
  let {
    dragState,
    onInsertableResourcePointerDown
  } = Ik({
    resource: e,
    insertAction: t,
    clickToInsert_DEPRECATED: !1,
    triggeredFrom: Vq(_$$p.RECENTS_COLLAGE),
    afterSuccessfulInsert: l
  });
  let p = AE(e);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: O,
      "data-tooltip-type": n ? void 0 : KindEnum.TEXT,
      "data-tooltip": n ? void 0 : _$$E(e),
      "data-tooltip-timeout-delay": n ? void 0 : 500,
      "data-tooltip-show-above": !n || void 0,
      onPointerDown: onInsertableResourcePointerDown,
      role: "button",
      tabIndex: 0,
      children: jsx("div", {
        className: "dlt_universal_insert_item--recentTool--fZfmo",
        children: jsx(WAFImage, {
          src: p,
          alt: _$$E(e),
          className: F,
          draggable: !1
        })
      })
    }), jsx(_$$M, {
      dragState
    })]
  });
}
export const E = $$Z0;
export const h = $$z1;