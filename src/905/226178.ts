import { jsx } from "react/jsx-runtime";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { A } from "../1617/217521";
export function $$d0() {
  return jsx("div", {
    className: cssBuilderInstance.bRadiusFull.flex.itemsCenter.maxWFull.borderBox.colorBgBrand.$,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("tile.file_tile.unsynced_changes"),
    "data-tooltip-timeout-delay": 50,
    children: jsx(SvgComponent, {
      className: cssBuilderInstance.colorIconOnbrand.$,
      svg: A
    })
  });
}
export const K = $$d0;