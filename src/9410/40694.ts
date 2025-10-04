import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { ButtonPrimitive } from "../905/632989";
import { SourceType } from "../figma_app/763686";
import d from "classnames";
import { Point } from "../905/736624";
import { WAFImage } from "../905/675859";
import { n as _$$n } from "../905/734251";
import { getI18nString } from "../905/303541";
import { addFaceStampToRecentsAction } from "../figma_app/147952";
import { fullscreenValue } from "../figma_app/455680";
import { Z } from "../3276/966473";
import { getUserId } from "../905/372672";
import { FDocumentType, ITemplateType } from "../905/862883";
import { KindEnum } from "../905/129884";
import { getColorForMultiplayer, multiplayerColors } from "../figma_app/136698";
import { LL, xG } from "../figma_app/565197";
import { b as _$$b } from "../905/635568";
import { $J, Yg } from "../figma_app/357202";
import { HG, ET, RX, M4, eP, iE, t$, OP, RT, Jy, dG } from "../3276/740623";
var c = d;
function S({
  children: e,
  mini: t,
  user: i
}) {
  return t ? jsx("div", {
    className: c()(HG, ET),
    children: e
  }) : jsx("div", {
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": i.name || i.handle || "",
    "data-tooltip-timeout-delay": "500",
    "data-tooltip-show-below": !0,
    "data-tooltip-offset-y": "-20",
    className: HG,
    children: e
  });
}
export function $$j0({
  user: e,
  hideName: t,
  mini: i,
  searchQuery: a,
  triggeredFrom: o
}) {
  let d = e.hi_res_img_url || e.img_url;
  let c = `${d}?c=1`;
  let p = getColorForMultiplayer(e.id, multiplayerColors);
  let m = LL(c, e.name || e.handle || "", p);
  let b = getUserId();
  let T = _$$b();
  let j = useDispatch();
  let O = useCallback(() => {
    j(addFaceStampToRecentsAction({
      currentUserId: b ?? void 0,
      storeInRecentsKey: FDocumentType.FigJam,
      item: {
        id: e.id,
        user: e,
        type: ITemplateType.FaceStamp
      }
    }));
  }, [b, j, e]);
  let {
    dragState,
    onInsertableResourcePointerDown
  } = Z({
    iconSrc: m,
    insertAction: t => {
      let {
        dropPosition
      } = t;
      let r = t.pointerPercentageOffset ? t.pointerPercentageOffset.x : 0;
      let n = t.pointerPercentageOffset ? t.pointerPercentageOffset.y : 0;
      let a = new Point(50, 50);
      let s = dropPosition.subtract(new Point(r * a.x, n * a.y)).subtract(new Point(5, 5));
      xG(m, s.x, s.y, e.id, "drag", SourceType.USER);
      O();
      T();
    },
    clickToInsert_DEPRECATED: !1,
    afterSuccessfulInsert: T,
    resource: {
      id: e.id,
      name: e.name || "",
      img: m
    },
    triggeredFrom: o,
    searchQuery: a,
    mini: i
  });
  return i && !m ? null : jsx(S, {
    mini: i,
    user: e,
    children: m ? jsxs(_$$n.recordableDiv, {
      className: RX,
      onPointerDown: onInsertableResourcePointerDown,
      children: [jsx(N, {
        stampImageUrl: m,
        username: e.handle || "",
        onClick: () => {
          let t = fullscreenValue.getViewportInfo();
          xG(m, t.offsetX, t.offsetY, e.id, "click", SourceType.USER);
          O();
          T();
        },
        dragging: null !== dragState,
        mini: i
      }), jsx(A, {
        dragState,
        imageUrl: m
      }), !t && jsx(k, {
        username: e.name || e.handle || ""
      })]
    }) : jsxs(Fragment, {
      children: [jsx($$$$I1, {
        mini: i
      }), !t && jsx(k, {
        username: ""
      })]
    })
  });
}
export function $$$$I1({
  mini: e
} = {}) {
  return jsxs("div", {
    className: c()(HG, {
      [ET]: e,
      [M4]: !e
    }),
    children: [jsx("div", {
      className: c()(eP, iE)
    }), !e && jsx("div", {
      className: c()(t$, OP)
    })]
  });
}
function k({
  username: e
}) {
  return jsx("div", {
    title: e,
    className: OP,
    children: e
  });
}
function N(e) {
  return jsx(ButtonPrimitive, {
    className: RT,
    recordingKey: "facestamp",
    onClick: e.onClick,
    htmlAttributes: {
      "data-testid": `facestamp-${e.username}${e.mini ? "-mini" : ""}`
    },
    children: jsx(WAFImage, {
      draggable: !1,
      src: e.stampImageUrl,
      className: c()(iE, {
        [Jy]: e.dragging,
        [dG]: e.mini
      }),
      alt: getI18nString("whiteboard.face_stamps.aria_label", {
        userName: e.username
      })
    })
  });
}
function A(e) {
  if (!e.dragState?.dragPosition || !e.dragState.grabbedPointerPercentageOffset) return null;
  let t = function () {
    let {
      zoomScale
    } = fullscreenValue.getViewportInfo();
    return new Point(50, 50).scale(zoomScale);
  }();
  let i = e.dragState.dragPosition.subtract(new Point(e.dragState.grabbedPointerPercentageOffset.x * t.x, e.dragState.grabbedPointerPercentageOffset.y * t.y));
  return createPortal(jsx(WAFImage, {
    alt: "",
    className: c()($J, {
      [Yg]: e.dragState.isDraggingOverCanvas
    }),
    style: {
      left: i.x,
      top: i.y,
      width: t.x,
      height: t.y
    },
    src: e.imageUrl
  }), document.getElementById("fullscreen-root"));
}
export const I = $$j0;
export const Q = $$$$I1;