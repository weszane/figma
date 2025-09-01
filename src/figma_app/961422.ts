import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useMemo } from "react";
import o from "classnames";
import { Ay } from "../figma_app/778880";
import { y1, w4 } from "../905/445814";
import { t as _$$t } from "../905/303541";
import { FTemplateCategoryType } from "../figma_app/191312";
import { Ro } from "../figma_app/805373";
import { ev, ll, nK } from "../905/224306";
import { Wg, yE, nN, pn, bh, wb, vw, QQ, Hw, oY, kR, $7, ez, ac, Jk, Rb, yG } from "../905/410784";
var $$n3;
var $$i1;
var l = o;
export let $$g2 = memo(function (e) {
  return jsxs("div", {
    onClick: e.onClick,
    onContextMenu: e.onContextMenu,
    className: l()(Wg, e.containerStyle),
    children: [jsx("div", {
      children: e.image
    }), jsx("div", {
      className: e.bottomRowStyle ?? yE,
      children: e.bottomRow
    })]
  });
});
export function $$f0(e) {
  let t = {
    backgroundClip: Ay.safari ? "padding-box" : ""
  };
  e.backgroundColor && (t.backgroundColor = e.backgroundColor);
  return jsxs("div", {
    className: l()(nN, e.className, e.removeBorder && ev),
    onClick: e => {
      e.preventDefault();
    },
    style: t,
    children: [jsx("div", {
      className: e.customRatioClassName ?? ll
    }), jsx("div", {
      className: nK,
      children: e.children
    })]
  });
}
(e => {
  e.Center = function (e) {
    return jsx("div", {
      className: pn,
      children: e.children
    });
  };
  e.Cover = function (e) {
    return jsx("div", {
      className: bh,
      children: e.children
    });
  };
  e.BottomLeft = function (e) {
    return jsx("div", {
      className: wb,
      children: e.children
    });
  };
  e.BottomRowRight = function (e) {
    return jsx("div", {
      className: vw,
      children: e.children
    });
  };
})($$n3 || ($$n3 = {}));
(e => {
  e.NameAndFileIconMetadata = function (e) {
    let t = useMemo(() => {
      switch (e.viewerMode) {
        case FTemplateCategoryType.WHITEBOARD:
          return y1.WHITEBOARD;
        case FTemplateCategoryType.SLIDE_TEMPLATE:
          return y1.SLIDES;
        case FTemplateCategoryType.CANVAS:
        case FTemplateCategoryType.LIBRARY:
          return y1.DESIGN;
        case FTemplateCategoryType.PROTOTYPE:
          return y1.PROTOTYPE;
        default:
          return null;
      }
    }, [e.viewerMode]);
    return jsxs("div", {
      className: `${QQ} ${e.className}`,
      children: [jsx("div", {
        className: Hw,
        children: jsx("div", {
          className: e.textClassName || oY,
          children: e.name
        })
      }), t && jsx("div", {
        className: kR,
        children: jsx(w4, {
          type: t,
          size: 16
        })
      })]
    });
  };
  e.AvatarAndNameMetadata = function (e) {
    let t = e.publishers && e.publishers.length > 0 && e.publishers[0];
    return jsxs("div", {
      className: `${QQ} ${e.className}`,
      children: [t && jsx("div", {
        className: $7,
        children: jsx(Ro, {
          entity: t,
          size: 32,
          className: ez
        })
      }), jsx("div", {
        className: Hw,
        children: jsx("div", {
          className: e.textClassName || oY,
          children: e.name
        })
      })]
    });
  };
  e.FullMetadata = function (e) {
    if (!e.publishers || 0 === e.publishers.length) return null;
    let t = e.publishers.length - 1;
    let r = e.publishers.length > 1 ? _$$t("community.cards.pluralize_num_other_publishers", {
      numOtherPublishers: t
    }) : "";
    return jsxs("div", {
      className: QQ,
      onClick: e.onClick,
      children: [jsx("div", {
        className: $7,
        children: jsx(Ro, {
          entity: e.publishers[0],
          size: 32,
          className: ez
        })
      }), jsxs("div", {
        className: Hw,
        children: [jsx("div", {
          className: ac,
          children: e.name
        }), jsxs("div", {
          className: e.hoverText ? Jk : Rb,
          children: [_$$t("community.cards.by"), " ", e.publishers[0].name, " ", r]
        }), e.hoverText && jsx("div", {
          className: yG,
          children: e.hoverText
        })]
      })]
    });
  };
})($$i1 || ($$i1 = {}));
export const FK = $$f0;
export const Wf = $$i1;
export const zq = $$g2;
export const zx = $$n3;