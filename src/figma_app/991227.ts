import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { NLJ } from "../figma_app/763686";
import { parsePxInt } from "../figma_app/783094";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { getI18nString } from "../905/303541";
import { x } from "../figma_app/943271";
import { K } from "../figma_app/824081";
import { A } from "../905/638715";
import { xEX } from "../figma_app/27776";
let m = "fake_cursor--hideCursor--CUrrB";
export var $$g0 = (e => (e[e.NONE = 0] = "NONE", e[e.EYEDROPPER = 1] = "EYEDROPPER", e[e.CHAT = 2] = "CHAT", e[e.HIGH_FIVE = 3] = "HIGH_FIVE", e))($$g0 || {});
let f = {
  [NLJ.SELECT]: "aed6896e6ad35977610fc23bb6590c1484d3ee01",
  [NLJ.HAND]: "aebe1073b0b9e7ca3907e21cc08ee416d86520c4",
  [NLJ.DROPPER_COLOR]: "3a904092ca690b41c06a24b8e2dddb724a992c94"
};
let E = parsePxInt(xEX);
export function $$y4(e) {
  useEffect(() => (e ? document.body.classList.add(m) : document.body.classList.remove(m), () => document.body.classList.remove(m)), [e]);
}
export function $$b1(e) {
  let {
    position,
    currentToolForCursor,
    children
  } = e;
  $$y4(!e.hidden);
  let s = useSelector(e => e.downtime.status === A.Ongoing || e.downtime.status === A.Imminent || e.showingDowntimeBanner) ? E : 0;
  let o = position.x;
  let l = position.y - s;
  let d = {
    willChange: "transform",
    transform: `translate3D(${o}px, ${l}px, 0)`,
    opacity: e.hidden ? 0 : 1
  };
  return jsxs("div", {
    style: d,
    className: "fake_cursor--container--FpLnk",
    children: [jsx($$S3, {
      currentToolForCursor
    }), children]
  });
}
export function $$T2(e) {
  let t = x({
    subscribeToUpdates_EXPENSIVE: !0
  });
  let r = K();
  return t ? jsx($$b1, {
    ...e,
    position: t,
    hidden: !r
  }) : null;
}
let I = e => {
  switch (e) {
    case NLJ.SELECT:
      return getI18nString("fake_cursor.select_cursor");
    case NLJ.HAND:
      return getI18nString("fake_cursor.hand_cursor");
    case NLJ.DROPPER_COLOR:
      return getI18nString("fake_cursor.eyedropper_cursor");
    default:
      return getI18nString("fake_cursor.cursor");
  }
};
export function $$S3({
  currentToolForCursor: e
}) {
  let t = "fake_cursor--handCursor--3jlcf fake_cursor--cursor--xDDWs";
  e === NLJ.SELECT ? t = "fake_cursor--selectCursorUI3--FjJsi fake_cursor--cursor--xDDWs" : e === NLJ.DROPPER_COLOR && (t = "fake_cursor--eyedropperCursor--uXak0 fake_cursor--cursor--xDDWs");
  let r = f[e];
  return r ? jsx(oW, {
    className: t,
    src: buildUploadUrl(r),
    alt: I(e)
  }) : null;
}
export const mZ = $$g0;
export const ix = $$b1;
export const AS = $$T2;
export const fA = $$S3;
export const Gz = $$y4;