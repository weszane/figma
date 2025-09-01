import { jsxs, jsx } from "react/jsx-runtime";
import { Yf, uA, EY } from "../905/143116";
import { IY } from "../905/521466";
let s = "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
let $$o0 = IY(function (e) {
  return jsxs(Yf, {
    name: "Avatar",
    children: [jsx(uA, {
      name: "type=Letter,size=Large",
      fill: "#FFC700",
      stroke: "#0000001A",
      cornerRadius: 32,
      direction: "vertical",
      spacing: 8,
      padding: 8,
      width: 32,
      height: 32,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      children: jsx(EY, {
        name: "letter",
        fill: "#FFF",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        lineHeight: 24,
        fontFamily: "Inter",
        letterSpacing: -.14399999618530274,
        children: e.letter ?? "A"
      })
    }), jsx(uA, {
      name: "type=Letter,size=Small",
      fill: "#FFC700",
      stroke: "#0000001A",
      cornerRadius: 32,
      direction: "vertical",
      spacing: 8,
      padding: 8,
      width: 26,
      height: 26,
      verticalAlignItems: "center",
      horizontalAlignItems: "center",
      children: jsx(EY, {
        name: "letter",
        fill: "#FFF",
        verticalAlignText: "center",
        horizontalAlignText: "center",
        lineHeight: 24,
        fontFamily: "Inter",
        fontSize: 14,
        letterSpacing: -.014000000208616257,
        children: e.letter ?? "A"
      })
    }), jsx(uA, {
      name: "type=Image,size=Large",
      effect: {
        spread: 1,
        color: "#FFF",
        offset: {
          x: 0,
          y: 0
        },
        blur: 0,
        type: "drop-shadow"
      },
      fill: {
        type: "image",
        src: s,
        imageRef: "efe98099a0aa97c1aa64e286bc82e633cc9aed22",
        scalingFactor: .5
      },
      stroke: "#0000001A",
      cornerRadius: 32,
      direction: "vertical",
      spacing: 8,
      padding: 8,
      width: 32,
      height: 32,
      verticalAlignItems: "center",
      horizontalAlignItems: "center"
    }), jsx(uA, {
      name: "type=Image,size=Small",
      fill: {
        type: "image",
        src: s,
        imageRef: "efe98099a0aa97c1aa64e286bc82e633cc9aed22",
        scalingFactor: .5
      },
      stroke: "#0000001A",
      cornerRadius: 13,
      direction: "vertical",
      spacing: 8,
      padding: 8,
      width: 26,
      height: 26,
      verticalAlignItems: "center",
      horizontalAlignItems: "center"
    })]
  });
});
export const e = $$o0;