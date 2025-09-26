import { jsx } from "react/jsx-runtime";
import { ThumbnailContainer } from "../905/600041";
import { DesignsList, SizeOption } from "../905/171275";
import s from "classnames";
import { SvgComponent } from "../905/714743";
import { A } from "../5724/971107";
var o = s;
function c(e) {
  return jsx("div", {
    className: o()({
      "locked_key_circle--keyCircle--UzcaU": !0,
      [e.additionalClassName || ""]: !!e.additionalClassName
    }),
    children: jsx(SvgComponent, {
      className: o()({
        "locked_key_circle--keyIcon--mJECd": !0,
        [e.iconClassName || ""]: !!e.iconClassName
      }),
      svg: A
    })
  });
}
let u = "thumbnail_locked_icon--fullSizeKey--VAD-0";
function p({
  thumbnailType: e,
  size: t
}) {
  switch (e) {
    case DesignsList.WHITEBOARD:
    case DesignsList.DEFAULT_WHITEBOARD:
      return jsx(c, {
        additionalClassName: o()("thumbnail_locked_icon--keyCircleWhiteboard--LThE1", {
          [u]: t === SizeOption.SMALL
        })
      });
    case DesignsList.PROTOTYPE:
      return jsx(c, {
        additionalClassName: o()("thumbnail_locked_icon--keyCirclePrototype--an6UQ", {
          [u]: t === SizeOption.SMALL
        }),
        iconClassName: "thumbnail_locked_icon--keyCirclePrototypeIcon--VYwDO"
      });
    case DesignsList.OFFLINE:
    case DesignsList.DESIGN:
    case DesignsList.DEFAULT_DESIGN:
    default:
      return jsx(c, {
        additionalClassName: o()("thumbnail_locked_icon--keyCircleDesign--HClG5", {
          [u]: t === SizeOption.SMALL
        })
      });
  }
}
export function $$m0({
  thumbnailType: e,
  size: t,
  borderRadius: i,
  noBorder: s
}) {
  let o;
  switch (e) {
    case DesignsList.WHITEBOARD:
    case DesignsList.DEFAULT_WHITEBOARD:
      o = "locked_thumbnail--lockedWhiteboardBackground--GH-Yl";
      break;
    case DesignsList.PROTOTYPE:
      o = "locked_thumbnail--lockedPrototypeBackground---DSZl";
      break;
    default:
      o = "locked_thumbnail--lockedThumbnailDefault--nQRmr";
  }
  return jsx(ThumbnailContainer, {
    borderRadius: i,
    backgroundClassName: o,
    noBorder: s,
    children: jsx(p, {
      thumbnailType: e,
      size: t
    })
  });
}
export const N = $$m0;