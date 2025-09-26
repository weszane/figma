import { jsxs, jsx } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
export function $$a0({
  active: e,
  children: t,
  borderWidth: i = 2
}) {
  let a = cssBuilderInstance.b2.colorBorderSelected;
  1 === i && (a = cssBuilderInstance.b1.colorBorderSelected);
  return jsxs("div", {
    className: cssBuilderInstance.wFull.flex.itemsCenter.justifyCenter.radiusMedium.relative.$,
    children: [t, jsx("div", {
      className: cssBuilderInstance.absolute.top0.left0.right0.bottom0.radiusMedium.eventsNone.if(e, a).$
    })]
  });
}
export const c = $$a0;
