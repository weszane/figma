import { jsx } from "react/jsx-runtime";
import { Fullscreen } from "../figma_app/763686";
import { RecordingComponent } from "../figma_app/878298";
import { k } from "../905/582200";
import { renderI18nText } from "../905/303541";
import { Zk, fI, nV } from "../figma_app/626177";
import { u } from "../642/523719";
export class $$c0 extends RecordingComponent {
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
          removeProperty: Fullscreen.clearFillAndStrokePaintsOnSelectedGroups,
          contentsVisibleOrMixed: !0,
          children: jsx(fI, {
            className: "remove_group_fill_and_stroke_panel--labelContainer--ngqjq",
            children: jsx(nV, {
              className: "remove_group_fill_and_stroke_panel--label--orOpK",
              children: renderI18nText("fullscreen.remove_group_fill_and_stroke.background_color_group_unsupported")
            })
          })
        })
      })
    });
  }
}
export const C = $$c0;