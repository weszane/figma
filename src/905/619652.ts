import { kiwiParserCodec } from "../905/294864";
import { NodePropertyCategory, Thumbnail, SceneNodeCpp, BackgroundPattern } from "../figma_app/763686";
import { sessionLocalIDToString, isValidSessionLocalID } from "../905/871411";
import { whiteColor } from "../figma_app/191804";
import { Point } from "../905/736624";
import { getColorSpaceString } from "../figma_app/622881";
import { getPatternPaint } from "../figma_app/385874";
function c(e) {
  return e ? {
    pixels: e.pixels,
    pixelSize: new Point(e.pixelSize.x, e.pixelSize.y),
    displaySize: new Point(e.displaySize.x, e.displaySize.y)
  } : null;
}
export function $$u5(e, t) {
  let i = {
    guid: {
      sessionID: 0,
      localID: 0
    }
  };
  switch (t) {
    case NodePropertyCategory.STROKE:
    case NodePropertyCategory.STROKE_PRESET:
      i.strokePaints = [e];
      break;
    case NodePropertyCategory.FILL:
    default:
      i.fillPaints = [e];
  }
  return kiwiParserCodec.encodeMessage({
    type: "NODE_CHANGES",
    sessionID: 0,
    ackID: 0,
    nodeChanges: [i]
  });
}
export function $$p8(e, t, i = whiteColor) {
  return c(Thumbnail.generatePaintIcon({
    width: Math.round(t.x),
    height: Math.round(t.y),
    paint: $$u5(e),
    backgroundColor: {
      red: i.r,
      green: i.g,
      blue: i.b,
      alpha: i.a
    }
  }));
}
export function $$m0(e, t) {
  if (!Thumbnail) return null;
  let i = getPatternPaint(e);
  if (!i) return null;
  let n = sessionLocalIDToString(i.sourceNodeId);
  if (!n || !isValidSessionLocalID(i.sourceNodeId)) return null;
  let [s, o] = Thumbnail.generateThumbnailForNode(n, 2 * Math.round(t.x), 2 * Math.round(t.y), 4, {
    useRenderTreeWithoutEffects: !0
  });
  if (o) {
    let e = new Blob([o], {
      type: "image/png"
    });
    return URL.createObjectURL(e);
  }
  return null;
}
export function $$h4(e, t, i) {
  let n = $$u5(e, i);
  let a = new Uint8Array(t.buffer);
  return SceneNodeCpp.updateStillImageAndSelectionPropertiesForGIF(n, a);
}
export function $$g7(e, t, i, n = BackgroundPattern.CHECKERBOARD, a = !1, s = !1, o = !1, l = !1) {
  return c(Thumbnail.generateExportThumbnail({
    width: Math.round(e.x),
    height: Math.round(e.y),
    nodeId: t,
    contentsOnly: i,
    background: n,
    isDevModeBlendedSection: a,
    ignorePixelRatio: s,
    useBicubicSampler: !1,
    useAbsoluteBounds: o,
    renderPrintMarks: l
  }));
}
export function $$f6(e, t, i, n = !1) {
  return c(Thumbnail.generateExportPreview({
    width: Math.round(e.x),
    height: Math.round(e.y),
    useAbsoluteBounds: t,
    useBicubicSampler: i,
    useTopLevelFrame: n
  }));
}
export function $$_1(e) {
  return Thumbnail.generateObjectsPanelIcon(e) ?? "";
}
export function $$A3(e, t, i) {
  let n = document.createElement("canvas");
  let r = i ? n.getContext("2d", {
    colorSpace: getColorSpaceString(i)
  }) : n.getContext("2d");
  n.width = t.x;
  n.height = t.y;
  let a = r.createImageData(t.x, t.y);
  a.data.set(e);
  r.putImageData(a, 0, 0);
  return n;
}
export function $$y2(e, t, i) {
  return $$A3(e, t, i).toDataURL();
}
export const HT = $$m0;
export const NO = $$_1;
export const Pv = $$y2;
export const Q1 = $$A3;
export const SK = $$h4;
export const Sl = $$u5;
export const WQ = $$f6;
export const _G = $$g7;
export const jS = $$p8;