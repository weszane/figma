import { permissionScopeHandler } from "../905/189185";
import { logError } from "../905/714362";
import { createFigmaPluginScope } from "../905/629114";
import { rp } from "../figma_app/229710";
import { GF, NI, h0 } from "../figma_app/61403";
import { eb } from "../figma_app/234505";
let $$d10 = "cursor_bot";
let $$c9 = "#007BE5";
export function $$u6(e, t) {
  return Math.min(t.width / (e.absoluteBoundingBox.w + 300), t.height / (e.absoluteBoundingBox.h + 300)) * t.zoom;
}
export function $$p1(e, t, r) {
  let n;
  e instanceof HTMLElement ? n = e.getBoundingClientRect() : n = {
    h: e.absoluteBoundingBox.h,
    w: e.absoluteBoundingBox.w,
    x: e.absoluteBoundingBox.x,
    y: e.absoluteBoundingBox.y,
    left: e.absoluteBoundingBox.x,
    right: e.absoluteBoundingBox.x + e.absoluteBoundingBox.w,
    top: e.absoluteBoundingBox.y,
    bottom: e.absoluteBoundingBox.y + e.absoluteBoundingBox.h
  };
  let i = r?.x || 0;
  let a = r?.y || 0;
  let s = 0;
  return {
    targetX: t?.x === GF.LEFT ? n.left + i : t?.x === GF.RIGHT ? n.right + i : (n.right + n.left) / 2 + i,
    targetY: t?.y === NI.TOP ? n.top + a : t?.y === NI.BOTTOM ? n.bottom + a : (n.top + n.bottom) / 2 + a
  };
}
export async function $$_7({
  imgSrc: e,
  desiredWidth: t,
  desiredHeight: r
}) {
  try {
    let i = createFigmaPluginScope();
    let s = permissionScopeHandler.onboarding("create-rectangle-for-image", () => i.createRectangle());
    let o = await i.createImageAsync(e);
    let {
      width,
      height
    } = await o.getSizeAsync();
    let c = void 0 !== t ? t : width;
    let u = void 0 !== r ? r : height;
    permissionScopeHandler.onboarding("resize-rectangle-node-with-image-fill", () => {
      s.resize(c, u);
    });
    permissionScopeHandler.onboarding("set-image-fill", () => {
      s.fills = [{
        type: "IMAGE",
        imageHash: o.hash,
        scaleMode: "FILL"
      }];
    });
    return s.id;
  } catch (t) {
    logError($$d10, "Failed to insert image", {
      imgUrl: e,
      err: t
    }, {
      reportAsSentryError: !0
    });
    return null;
  }
}
export function $$h0(e) {
  let t = document.getElementById(rp);
  t.classList.add(eb);
  t.scrollTop = e;
  t.classList.remove(eb);
}
export function $$m3(e) {
  return e === h0.PLAYING;
}
export function $$g2(e, t) {
  let r = t ? "cursor_bot_v2__basics_file__" : "cursor_bot_v2__no_basics_file__";
  switch (e) {
    case "How to draw a frame":
      return {
        tutorialPlayedUserFlag: `${r}clicked_show_me_for_create_a_frame`,
        stepCompletedUserFlag: `${r}played_create_a_frame`
      };
    case "How to use the design panel":
      return {
        tutorialPlayedUserFlag: `${r}clicked_show_me_for_frame_formatting`,
        stepCompletedUserFlag: `${r}played_frame_formatting`
      };
    case "Add words where needed":
      return {
        tutorialPlayedUserFlag: `${r}clicked_show_me_for_create_text`,
        stepCompletedUserFlag: `${r}played_create_text`
      };
    case "How to format text":
      return {
        tutorialPlayedUserFlag: `${r}clicked_show_me_for_text_formatting`,
        stepCompletedUserFlag: `${r}played_text_formatting`
      };
    default:
      throw Error(`Unknown tutorial name: ${e}`);
  }
}
let $$f8 = 600;
let $$E4 = 1200;
let $$y5 = 1500;
export const $1 = $$h0;
export const L7 = $$p1;
export const Of = $$g2;
export const XC = $$m3;
export const Y4 = $$E4;
export const YX = $$y5;
export const dK = $$u6;
export const mF = $$_7;
export const pM = $$f8;
export const rK = $$c9;
export const tF = $$d10;