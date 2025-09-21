import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef } from "react";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { H } from "../905/286442";
import { b } from "../905/222272";
let d = "assets-tab-empty-state";
let c = forwardRef(({
  children: e,
  fillHeight: t
}, i) => t ? jsx("div", {
  className: cssBuilderInstance.hFull.flex.flexColumn.itemsCenter.justifyCenter.$,
  "data-testid": d,
  style: styleBuilderInstance.add({
    paddingBottom: "48px"
  }).$,
  ref: i,
  tabIndex: 0,
  children: e
}) : jsx("div", {
  className: cssBuilderInstance.flex.flexColumn.itemsCenter.pt12.pb24.$,
  "data-testid": d,
  ref: i,
  tabIndex: 0,
  children: e
}));
function u({
  children: e,
  fillHeight: t = !1
}) {
  let i = useRef(null);
  H({
    ref: i,
    navigationOptions: {
      skipOnDownNavigation: !0,
      skipOnRightNavigation: !0
    }
  });
  return jsx(c, {
    fillHeight: t,
    ref: i,
    children: e
  });
}
export function $$p0({
  children: e,
  fillHeight: t = !1
}) {
  return t ? jsx(b, {
    fullHeight: !0,
    fullWidth: !0,
    primary: !0,
    justify: "center",
    children: jsx(u, {
      fillHeight: t,
      children: e
    })
  }) : jsx(c, {
    fillHeight: t,
    children: e
  });
}
export const S = $$p0;