import { jsx, jsxs } from "react/jsx-runtime";
import { assertNotNullish } from "../figma_app/465776";
import { RotationType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import o from "classnames";
import { DEVICE_PRESETS_BY_ID } from "../figma_app/349969";
import { is, Ho } from "../figma_app/170018";
import { Wc } from "../9410/855699";
import { qW, Cb, Q$, Q0, mT, M4 } from "../9410/874933";
var l = o;
let d = ["APPLE_IPHONE_14_PRO", "APPLE_IPHONE_14_PLUS", "APPLE_IPHONE_15", "APPLE_WATCH_45MM", "APPLE_WATCH_SERIES_10_42MM", "APPLE_WATCH_SERIES_10_46MM", "APPLE_IPHONE_16"];
let c = e => d.some(t => e.startsWith(t));
export function $$f1({
  children: e,
  initialViewerSize: t,
  isDeviceFrameShown: i
}) {
  let n;
  i && (n = getSingletonSceneGraph().getCurrentPage()?.prototypeDevice);
  return jsx($$g0, {
    initialViewerSize: t,
    isDeviceFrameShown: i,
    prototypeDevice: n,
    isInlinePreview: !0,
    children: e
  });
}
export function $$g0({
  children: e,
  initialViewerSize: t,
  isDeviceFrameShown: i,
  prototypeDevice: s,
  isInlinePreview: o,
  onDeviceFrameLoaded: d
}) {
  let f = "data:,";
  let g = "";
  let _ = {};
  let x = !1;
  let y = 1;
  let b = !1;
  if (i) {
    assertNotNullish(s, "prototypeDevice should be set when device frame is shown");
    let {
      presetIdentifier,
      rotation
    } = s;
    let r = DEVICE_PRESETS_BY_ID[presetIdentifier];
    if (o) {
      let e = r?.inlinePreviewInfo;
      assertNotNullish(e, "inlinePreviewDeviceData should exist since device is supported for inline preview");
    }
    f = r.url;
    x = c(presetIdentifier);
    b = rotation === RotationType.CCW_90;
    let l = r.getI18nDeviceName();
    let d = r.getI18nStyleName();
    g = `${l} (${d})`;
    let {
      idealDeviceSize,
      framePresetSize,
      offset
    } = is(presetIdentifier, rotation);
    let v = Ho(t, framePresetSize, idealDeviceSize);
    y = v.x / v.y;
    let E = Ho(t, framePresetSize, offset);
    let T = {
      x: t.x / v.x * 100,
      y: t.y / v.y * 100
    };
    let w = {
      x: E.x / v.x * 100,
      y: E.y / v.y * 100
    };
    _ = {
      position: "absolute",
      width: `${T.x}%`,
      height: `${T.y}%`,
      left: `${w.x}%`,
      top: `${w.y}%`
    };
  }
  let C = i ? qW : Wc;
  let v = l()({
    [Wc]: !0,
    [Cb]: i,
    [Q$]: x
  });
  return jsxs("div", {
    className: C,
    children: [i && (b ? (() => {
      let e = 1 / y;
      return jsx("div", {
        style: {
          aspectRatio: y
        },
        children: jsx("img", {
          src: f,
          className: l()(Q0, mT, M4),
          style: {
            width: `${100 * e}%`
          },
          alt: g,
          "data-testid": "inline-preview-device-image",
          onLoad: d
        })
      });
    })() : jsx("img", {
      src: f,
      className: M4,
      alt: g,
      "data-testid": "inline-preview-device-image",
      onLoad: d
    })), jsx("div", {
      style: _,
      className: v,
      children: e
    })]
  });
}
export const _ = $$g0;
export const H = $$f1;