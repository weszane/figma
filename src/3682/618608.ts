import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { oY } from "../figma_app/387100";
import { memoizeByArgs } from "../figma_app/815945";
import l from "classnames";
import { V, B } from "../905/714743";
import { Dm } from "../figma_app/8833";
import { _X, Yb } from "../figma_app/62612";
import { D, GN } from "../figma_app/249941";
import { V_, F, sQ, Io, HR, rH, Pn, Ok, ue } from "../3682/933480";
import { A } from "../3850/108557";
import { A as _$$A } from "../3850/253654";
import { A as _$$A2 } from "../3850/839808";
import { A as _$$A3 } from "../3850/564837";
import { A as _$$A4 } from "../3850/60943";
import { A as _$$A5 } from "../2854/559949";
import { A as _$$A6 } from "../2854/372209";
import { A as _$$A7 } from "../2854/253373";
import { A as _$$A8 } from "../2854/160761";
import { A as _$$A9 } from "../2854/939968";
var r = l;
export let $$x0 = forwardRef(function (e, t) {
  let {
    boundingBox,
    isFigmaPurple
  } = e.node;
  let i = function (e, t, a, o) {
    let s = _X({
      subscribeToUpdates_expensive: !0
    });
    if (!s) return null;
    let i = {};
    let n = Yb(s, {
      x: e.x,
      y: e.y,
      width: e.w,
      height: e.h
    });
    i.left = n.x + s.x;
    i.top = n.y + s.y;
    t && (i.left += n.width / 2);
    a && (i.top = n.y + s.y + n.height);
    return {
      containerStyle: i,
      pillStyle: o && {
        maxWidth: o(n.width)
      },
      zoomScale: s.zoomScale
    };
  }(boundingBox, e.centered, e.bottom, e.maxWidth);
  if (!i) return null;
  let {
    containerStyle,
    pillStyle
  } = i;
  return jsx("div", {
    ref: t,
    className: r()(Dm, V_, {
      [F]: e.centered,
      [sQ]: e.bottom
    }),
    style: {
      ...containerStyle,
      marginLeft: e.offsetX ?? 0,
      marginTop: e.offsetY?.(i.zoomScale) ?? 0
    },
    "data-testid": e.dataTestId,
    children: jsx("div", {
      className: r()(Io, isFigmaPurple ? HR : rH, e.largeBorderRadius && Pn, e.forceBrandColor && Ok),
      style: pillStyle,
      children: e.children
    })
  });
});
export function $$b1({
  node: e
}) {
  let t = memoizeByArgs((e, t) => D(e, t));
  let a = e ? t(e.guid, e.objectsPanelThumbnailId) : "";
  let s = a ? V(a) : function (e) {
    let t = null;
    switch (e.type) {
      case "TEXT":
        t = _$$A8;
        break;
      case "FRAME":
        t = e.isGroup ? _$$A : e.isStateGroup ? _$$A6 : GN({
          stackMode: e.stackMode,
          stackCounterAlignItems: e.stackCounterAlignItems
        });
        break;
      case "ROUNDED_RECTANGLE":
        t = _$$A4;
        break;
      case "ELLIPSE":
        t = A;
        break;
      case "STAR":
        t = _$$A5;
        break;
      case "VECTOR":
        t = _$$A9;
        break;
      case "GROUP":
        t = _$$A;
        break;
      case "INSTANCE":
        t = _$$A2;
        break;
      case "SYMBOL":
        t = e.isState ? _$$A7 : _$$A6;
    }
    oY(e.type) && e.hasEnabledStaticImagePaint && (t = _$$A3);
    return t;
  }(e);
  return s ? jsx(B, {
    className: ue,
    svg: s
  }) : null;
}
export const MO = $$x0;
export const Tq = $$b1;