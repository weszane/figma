import { jsx } from "react/jsx-runtime";
import { s } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
export function $$s0({
  children: e,
  columns: t,
  gap: i,
  padding: a = 8
}) {
  return jsx("div", {
    className: s.grid.$,
    style: {
      gridTemplateColumns: `repeat(${t}, minmax(0, 1fr))`,
      padding: `0 ${a}px ${a}px ${a}px`,
      gap: `${i}px`
    },
    children: e
  });
}
($$s0 || ($$s0 = {})).Item = function ({
  children: e,
  fullWidth: t
}) {
  return jsx("div", {
    className: s.flex.flexColumn.$,
    style: styleBuilderInstance.$$if(t, {
      gridColumn: "1 / -1"
    }).$,
    children: e
  });
};
export const V = $$s0;