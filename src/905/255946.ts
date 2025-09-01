import { jsx } from "react/jsx-runtime";
import r from "classnames";
import { FFileType } from "../figma_app/191312";
import { LZ, Gb } from "../905/483312";
var a = r;
export function $$l0(e) {
  return jsx("div", {
    className: a()(LZ, {
      [Gb]: e.context === FFileType.WHITEBOARD
    }),
    "data-testid": "widget-snapshot-static",
    children: jsx("img", {
      src: e.src,
      alt: ""
    })
  });
}
export const z = $$l0;