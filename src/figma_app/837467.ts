import { jsx, Fragment } from "react/jsx-runtime";
import { createContext, useContext } from "react";
export function $$a0({
  toolType: e,
  inactiveIcon: t,
  hoveredIcon: r,
  activeIcon: i,
  isHovered: a,
  isSelected: s
}) {
  return jsx(o, {
    toolType: e,
    children: jsx("div", {
      className: "dlt_hoverable_icon--centeredIcon--clLyK",
      children: s ? i : a ? r : t
    })
  });
}
let s = createContext({
  enableHiding: !1,
  visibleTool: "text"
});
function o({
  toolType: e,
  children: t
}) {
  let r = useContext(s);
  return jsx(Fragment, {
    children: r.enableHiding && r.visibleTool !== e ? null : t
  });
}
export const gd = $$a0;