import { jsx } from "react/jsx-runtime";
import { styleBuilderInstance } from "../905/941192";
export function $$i2() {
  return jsx($$a1, {
    children: jsx("p", {
      children: "Reading file..."
    })
  });
}
export function $$l0({
  error: e
}) {
  let t = "Oops! Something went wrong";
  "string" == typeof e ? t = e : e instanceof Error && (t = e.message, console.error(e));
  return jsx($$a1, {
    children: jsx("p", {
      style: styleBuilderInstance.colorTextOndanger.colorBgDanger.p16.font20.maxW400.$,
      children: t
    })
  });
}
export function $$a1({
  children: e
}) {
  return jsx("div", {
    style: styleBuilderInstance.fillPositionedContainer.flex.itemsCenter.justifyCenter.flexColumn.lh1_5Lines.font16.$,
    children: e
  });
}
export const rf = $$l0;
export const tV = $$a1;
export const zG = $$i2;