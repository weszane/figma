import { t as _$$t } from "../905/658240";
export let $$r8 = 192;
export function $$a9(e) {
  let {
    r: _r,
    g,
    b,
    a = 1
  } = e;
  return {
    hex: `${Math.round(255 * _r).toString(16).padStart(2, "0")}${Math.round(255 * g).toString(16).padStart(2, "0")}${Math.round(255 * b).toString(16).padStart(2, "0")}`,
    opacity: a
  };
}
export let $$s10 = ["RECTANGLE", "ROUNDED_RECTANGLE", "ELLIPSE", "POLYGON", "REGULAR_POLYGON", "ROUND_RECT", "SQUARE", "DIAMOND", "TRIANGLE_UP", "STAR", "PLUS", "ARROW_LEFT", "ARROW_RIGHT", "SPEECH_BUBBLE", "LINE"];
export function $$o15(e, t, i) {
  return {
    RECTANGLE: l(i) ? e.ShapeType.roundRect : e.ShapeType.rect,
    ELLIPSE: e.ShapeType.ellipse,
    POLYGON: e.ShapeType.triangle,
    REGULAR_POLYGON: e.ShapeType.triangle,
    ROUND_RECT: l(i) ? e.ShapeType.roundRect : e.ShapeType.rect,
    SQUARE: l(i) ? e.ShapeType.roundRect : e.ShapeType.rect,
    DIAMOND: e.ShapeType.diamond,
    TRIANGLE_UP: e.ShapeType.triangle,
    STAR: e.ShapeType.star5,
    PLUS: e.ShapeType.plus,
    ARROW_LEFT: e.ShapeType.leftArrow,
    ARROW_RIGHT: e.ShapeType.rightArrow,
    SPEECH_BUBBLE: e.ShapeType.wedgeRoundRectCallout,
    LINE: e.ShapeType.line
  }[t] ?? (l(i) ? e.ShapeType.roundRect : e.ShapeType.rect);
}
function l(e) {
  return "number" == typeof e.cornerRadius && e.cornerRadius > 0;
}
export function $$d7(e, t) {
  if (!$$E3(e)) throw Error("pptx-export: Document absoluteBoundingBox is invalid");
  if (!$$E3(t)) throw Error("pptx-export: Node absoluteBoundingBox is invalid");
  if (b(t.size?.x) && b(t.size?.y) && b(t.rotation) && "VECTOR" !== t.type && Math.round(180 * (t.rotation ?? 0) / Math.PI) % 360 != 0) {
    let {
      newX,
      newY
    } = function (e, t, i) {
      let {
        width,
        height
      } = i.absoluteBoundingBox;
      return {
        newX: e + width / 2 - i.size.x / 2,
        newY: t + height / 2 - i.size.y / 2
      };
    }(1 >= Math.abs(t.absoluteBoundingBox.x - e.absoluteBoundingBox.x) ? 0 : Math.floor(t.absoluteBoundingBox.x - e.absoluteBoundingBox.x), 1 >= Math.abs(t.absoluteBoundingBox.y - e.absoluteBoundingBox.y) ? 0 : Math.floor(t.absoluteBoundingBox.y - e.absoluteBoundingBox.y), t);
    return {
      x: newX / $$r8,
      y: newY / $$r8,
      w: (t.size?.x ?? t.absoluteBoundingBox.x) / $$r8,
      h: (t.size?.y ?? t.absoluteBoundingBox.y) / $$r8
    };
  }
  return {
    x: (t.absoluteBoundingBox.x - e.absoluteBoundingBox.x) / $$r8,
    y: (t.absoluteBoundingBox.y - e.absoluteBoundingBox.y) / $$r8,
    w: (t.size?.x ?? t.absoluteBoundingBox.width) / $$r8,
    h: (t.size?.y ?? t.absoluteBoundingBox.height) / $$r8
  };
}
export function $$c0() {
  let e = document.createElement("canvas");
  e.width = 1e3;
  e.height = 1e3;
  let t = e.getContext("2d");
  t && (t.fillStyle = "red", t.fillRect(0, 0, 1e3, 1e3));
  return e.toDataURL("image/png");
}
export async function $$u14(e) {
  let t = await fetch(e);
  let i = new File([await t.blob()], `${e}.jpg`, {
    type: "image/jpeg"
  });
  let r = await _$$t(i);
  return `data:image/jpeg;base64,${r}`;
}
export function $$p17(e) {
  return e.fills?.some(e => "IMAGE" === e.type) ?? !1;
}
export function $$m16(e) {
  return e.children?.every(e => $$p17(e)) ?? !1;
}
export function $$h5(e) {
  return e.children?.every(e => "VECTOR" === e.type) ?? !1;
}
export function $$g2(e) {
  return e.fills?.some(e => "VIDEO" === e.type) ?? !1;
}
export function $$f11(e) {
  let {
    fill,
    fillColor
  } = $$_13(e.fills) ?? {};
  if (!fillColor) return null;
  let {
    hex,
    opacity
  } = $$a9(fillColor);
  return {
    type: "solid",
    color: hex,
    transparency: 100 - (e.opacity ?? fill?.opacity ?? opacity) * 100
  };
}
export function $$_13(e) {
  if (!e || !e?.length) return null;
  let t = e.find(e => $$v18(e));
  if (t?.type !== "SOLID" && t?.type !== "GRADIENT_LINEAR") return null;
  let i = t?.type === "GRADIENT_LINEAR" && t?.gradientStops?.length ? t?.gradientStops[0]?.color : t?.color;
  return i ? {
    fill: t,
    fillColor: i
  } : null;
}
export function $$A4(e, {
  imageHashesToUrls: t,
  videoHashesToUrls: i
}) {
  if (!e.fills?.length) return null;
  let n = e.fills.find(e => "IMAGE" === e.type);
  if (n && n.imageRef && t && n.imageRef in t) return {
    path: t[n.imageRef]
  };
  let r = e.fills.find(e => "VIDEO" === e.type);
  return r && r.videoRef && i && r.videoRef in i ? {
    path: i[r.videoRef]
  } : null;
}
export function $$y1(e) {
  return 72 * e / 96;
}
function b(e) {
  return "number" == typeof e && !isNaN(e);
}
export function $$v18(e) {
  return "boolean" != typeof e.visible || e.visible;
}
export async function $$I6(e) {
  try {
    return (await e.write("blob")).size / 1024;
  } catch (e) {
    console.error("pptx-export", "Error getting pptx file size", e);
    return 0;
  }
}
export function $$E3(e) {
  return b(e.absoluteBoundingBox?.width) && b(e.absoluteBoundingBox?.height) && b(e.absoluteBoundingBox?.x) && b(e.absoluteBoundingBox?.y);
}
export function $$x12(e) {
  return b(e.absoluteRenderBounds?.width) && b(e.absoluteRenderBounds?.height) && b(e.absoluteRenderBounds?.x) && b(e.absoluteRenderBounds?.y);
}
export const Fo = $$c0;
export const GZ = $$y1;
export const Oc = $$g2;
export const PC = $$E3;
export const PZ = $$A4;
export const RU = $$h5;
export const Uj = $$I6;
export const W9 = $$d7;
export const WE = $$r8;
export const XF = $$a9;
export const a6 = $$s10;
export const dE = $$f11;
export const il = $$x12;
export const pM = $$_13;
export const pV = $$u14;
export const sd = $$o15;
export const tS = $$m16;
export const un = $$p17;
export const zN = $$v18;