import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import s from "classnames";
import { s as _$$s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { J } from "../905/273120";
import { D } from "../905/621624";
var $$n0;
var o = s;
export function $$p1({
  animationDelay: e = 0
}) {
  return jsx("div", {
    className: o()(D, _$$s.colorBgSecondary.wFull.flex.alignCenter.justifyCenter.p16.radiusMedium.$),
    style: styleBuilderInstance.add({
      aspectRatio: "1/1",
      animationFillMode: "backwards",
      animationDelay: `${e}ms`
    }).$
  });
}
(e => {
  e.Container = forwardRef(({
    children: e,
    padding: t = 16,
    onPointerDown: i
  }, n) => jsx("div", {
    ref: n,
    className: _$$s.colorBgSecondary.flex.wFull.alignCenter.justifyCenter.radiusMedium.$,
    style: styleBuilderInstance.add({
      aspectRatio: "1/1",
      padding: `${t}px`
    }).$,
    onPointerDown: i,
    children: e
  }));
  e.Image = function ({
    src: e,
    alt: t
  }) {
    return jsx(J, {
      src: e,
      alt: t,
      className: _$$s.maxWFull.$,
      style: styleBuilderInstance.add({
        objectFit: "scale-down"
      }).$,
      draggable: !1
    });
  };
})($$n0 || ($$n0 = {}));
export const V = $$n0;
export const Y = $$p1;