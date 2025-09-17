import { jsx, jsxs } from "react/jsx-runtime";
import { MenuItemComp, MenuLinkComp, MenuSubTrigger } from "../figma_app/860955";
import { CU } from "../905/963340";
export function $$s2({
  children: e,
  ...t
}) {
  return jsx(MenuItemComp, {
    ...t,
    children: jsxs("span", {
      className: "xhs4bwn xh8yej3 x78zum5",
      children: [" ", e, " "]
    })
  });
}
export function $$o1({
  children: e,
  ...t
}) {
  return jsx(MenuLinkComp, {
    ...t,
    children: jsxs("span", {
      className: "xhs4bwn xh8yej3 x78zum5",
      children: [" ", e, " "]
    })
  });
}
export function $$l3({
  children: e,
  ...t
}) {
  return jsx(MenuSubTrigger, {
    ...t,
    children: jsxs("span", {
      className: "x15botz4 xh8yej3 x78zum5",
      children: [" ", e, " "]
    })
  });
}
export function $$d0({
  children: e,
  ...t
}) {
  return jsx(CU, {
    ...t,
    children: jsx("span", {
      className: "xhb15b9 xh8yej3 x78zum5",
      children: e
    })
  });
}
export const MJ = $$d0;
export const Oo = $$o1;
export const Pu = $$s2;
export const Qq = $$l3;