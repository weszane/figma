import { jsxs, jsx } from "react/jsx-runtime";
import { buildUploadUrl } from "../figma_app/169182";
import { styleBuilderInstance } from "../905/941192";
export function $$s0() {
  return jsxs("div", {
    style: styleBuilderInstance.flex.columnGap32.flexRow.alignCenter.justifyCenter.wFull.$,
    children: [jsx("img", {
      alt: "Android QR code",
      src: buildUploadUrl("259b16f36c4afa958c6185b07e9b78f3e2b4cc4d")
    }), jsx("img", {
      alt: "IOS QR code",
      src: buildUploadUrl("d32c8c72eda223d979ca672dacb3ead939ac63a3")
    })]
  });
}
export const T = $$s0;