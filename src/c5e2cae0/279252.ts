import { jsx } from "react/jsx-runtime";
import { LoadingSpinner } from "../905/443820";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { x } from "../c5e2cae0/907085";
if (443 == require.j) {}
export function $$d0() {
  return jsx(x, {
    title: null,
    dataTestId: "loading-cart-card",
    children: jsx("div", {
      className: cssBuilderInstance.flex.flexColumn.itemsCenter.justifyCenter.wFull.$,
      style: styleBuilderInstance.add({
        height: "208px"
      }).$,
      children: jsx(LoadingSpinner, {})
    })
  });
}
export const f = $$d0;