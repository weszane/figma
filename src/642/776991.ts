import { jsx } from "react/jsx-runtime";
import { glU } from "../figma_app/763686";
import { uA } from "../figma_app/806412";
import { k } from "../905/582200";
import { tx } from "../905/303541";
import { Zk, fI, nV } from "../figma_app/626177";
import { u } from "../642/523719";
export class $$c0 extends uA {
  constructor() {
    super(...arguments);
    this.noop = () => {};
  }
  render() {
    return jsx(k, {
      name: "remove_group_fill_and_stroke_panel",
      children: jsx(Zk, {
        children: jsx(u, {
          title: "Background",
          addProperty: this.noop,
          removeProperty: glU.clearFillAndStrokePaintsOnSelectedGroups,
          contentsVisibleOrMixed: !0,
          children: jsx(fI, {
            className: "remove_group_fill_and_stroke_panel--labelContainer--ngqjq",
            children: jsx(nV, {
              className: "remove_group_fill_and_stroke_panel--label--orOpK",
              children: tx("fullscreen.remove_group_fill_and_stroke.background_color_group_unsupported")
            })
          })
        })
      })
    });
  }
}
export const C = $$c0;