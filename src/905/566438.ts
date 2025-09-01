import { jsxs, jsx } from "react/jsx-runtime";
import { s } from "../cssbuilder/589278";
export function $$a0({
  active: e,
  children: t,
  borderWidth: i = 2
}) {
  let a = s.b2.colorBorderSelected;
  1 === i && (a = s.b1.colorBorderSelected);
  return jsxs("div", {
    className: s.wFull.flex.itemsCenter.justifyCenter.radiusMedium.relative.$,
    children: [t, jsx("div", {
      className: s.absolute.top0.left0.right0.bottom0.radiusMedium.eventsNone.$$if(e, a).$
    })]
  });
}
export const c = $$a0;