import { useState, useEffect } from "react";
import { encodeBase64 } from "../905/561685";
import { ServiceCategories as _$$e } from "../905/165054";
import { glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { buildUploadUrl } from "../figma_app/169182";
import { reportError } from "../905/11";
import { logInfo, logWarning } from "../905/714362";
import { T } from "../figma_app/409248";
import { w6, Dl } from "../figma_app/291892";
import { A } from "../905/426471";
import { $C, PN } from "../figma_app/728075";
let m = Object.create(null);
function g(e) {
  return w6(e).catch(() => null);
}
let f = new A();
let E = buildUploadUrl("cbbdc3ccc2f650369332a454328722aa11cbd78a");
export async function $$y6({
  profileImageUrl: e,
  userName: t,
  userColor: r,
  noCircleOutline: n
}) {
  let i = 500 * window.devicePixelRatio;
  let a = 81.25 * window.devicePixelRatio;
  let [s, o] = await Promise.all([g({
    url: E,
    height: i,
    width: i
  }), e ? g({
    url: e,
    height: i,
    width: i
  }) : null]);
  let l = Dl(i, i);
  let d = l.getContext("2d");
  if (!s) return "";
  w(s, o);
  try {
    n || d.drawImage(s, 0, 0, i, i);
  } catch (e) {
    O(s, e);
    return "";
  }
  if (d.arc(i / 2, i / 2, i / 2 - a, 0, 2 * Math.PI, !0), d.clip(), o) {
    let e = i - 2 * a;
    try {
      d.drawImage(o, a, a, e, e);
    } catch (e) {
      O(o, e);
      return "";
    }
  } else {
    if (!r || !t) return "";
    d.fillStyle = r;
    d.fillRect(0, 0, i, i);
    d.textBaseline = "middle";
    d.textAlign = "center";
    let e = 187.5 * window.devicePixelRatio;
    d.font = `${e}px Inter`;
    d.fillStyle === $C ? d.fillStyle = PN : d.fillStyle = "white";
    d.fillText(t.substring(0, 1).toUpperCase(), i / 2, i / 2 + 10 * window.devicePixelRatio);
  }
  d.scale(window.devicePixelRatio, window.devicePixelRatio);
  let c = l.toDataURL("image/png");
  f.set(c, e, t, r, n);
  return c;
}
export function $$b1(e, t, r, i) {
  let [a, s] = useState(f.get(e, t, r, i) || "");
  useEffect(() => {
    if (!e && !(t && r)) {
      s("");
      return;
    }
    let n = !1;
    let o = f.get(e, t, r, i);
    o !== a && (o ? s(o) : $$y6({
      profileImageUrl: e,
      userName: t,
      userColor: r,
      noCircleOutline: i
    }).then(e => {
      n || s(e);
    }));
    return () => {
      n = !0;
    };
  }, [e, t, r, i, a]);
  return a;
}
export function $$T7(e, t, r) {
  let [i, a] = useState(null);
  useEffect(() => {
    if (!e && !(t && r)) {
      a(null);
      return;
    }
    let n = !1;
    (async () => {
      let n = buildUploadUrl("cd58a828de2645b5c35b76d4b8ea61b0e93e2b34");
      let i = buildUploadUrl("e8f7fcffc0ef390a0bdac65da832cf0a35588ae0");
      let [a, s, o] = await Promise.all([g({
        url: n,
        height: 160,
        width: 160
      }), g({
        url: i,
        height: 80,
        width: 76
      }), e ? g({
        url: e,
        height: 500,
        width: 500
      }) : null]);
      let d = Dl(160, 160);
      let c = d.getContext("2d");
      if (!a || !s) return null;
      w(a, s);
      try {
        c.drawImage(a, 0, 0, 160, 160);
      } catch (e) {
        O(a, e);
        return null;
      }
      if (c.save(), c.arc(72, 80, 48, 0, 2 * Math.PI, !0), c.clip(), o) try {
        c.drawImage(o, 24, 32, 96, 96);
      } catch (e) {
        O(o, e);
        return null;
      } else {
        if (!r || !t) return null;
        c.fillStyle = r;
        c.fillRect(0, 0, 160, 160);
        c.textBaseline = "middle";
        c.textAlign = "center";
        c.font = "53px Inter";
        c.fillStyle = "white";
        c.fillText(t.substring(0, 1).toUpperCase(), 72, 83);
      }
      c.restore();
      try {
        c.drawImage(s, 80, 56, 76, 80);
      } catch (e) {
        O(s, e);
        return null;
      }
      return d.toDataURL("image/png");
    })().then(e => {
      n || a(e);
    });
    return () => {
      n = !0;
    };
  }, [e, t, r]);
  return i;
}
export async function $$I4(e, t) {
  let r = await T(e, m);
  logInfo("activateStampToolWithImageURL", "setting stamp tool", {
    label: t,
    bytesLength: r?.length
  });
  glU?.activateStampTool(r, t);
}
export async function $$S2(e, t, r, n, i, a) {
  let l = await T(e, m);
  l7(a, "drop-stamp", () => glU?.emojiWheelDropStampOntoCanvas(l, t, r, n, i, "wheel"));
}
export async function $$v9(e, t, r, n, i, a) {
  let l = await T(e, m);
  l7(a, "drop-face", () => glU?.dropFaceOntoCanvas(l, "Face Stamp", t, r, n, i));
}
export async function $$A8(e, t, r, n) {
  let i = await T(e, m);
  l7(n, "replace-face", () => glU?.updateFaceForNode(i, t, r));
}
export function $$x5(e, t) {
  if (e.image) return buildUploadUrl(e.image);
  if (e.imageFunc) return e.imageFunc(t);
  throw Error(`Invalid emoji ${e} has no image nor imageFunc`);
}
export function $$N0(e, t) {
  for (let r of e) {
    let e = $$x5(r, t);
    e && T(e, m).catch(e => {
      reportError(_$$e.FIGJAM, e);
    });
  }
}
export async function $$C3(e, t) {
  let r = $$x5(e, t);
  if (!r) return null;
  try {
    let e = await T(r, m);
    return `data:image/png;base64,${encodeBase64(e)}`;
  } catch {
    logWarning("emoji wheel", "unable to load emoji data", {
      url: r,
      name: e.name
    });
    return null;
  }
}
function w(...e) {
  for (let t of e) if (t && (!(t instanceof HTMLImageElement) || !t.src || !t.width || !t.height)) {
    let e = t.outerHTML || Object.prototype.toString.call(t);
    reportError(_$$e.FIGJAM, Error(`Expected object to be a valid HTMLImageElement but it wasn't: '${e}'`));
  }
}
function O(e, t) {
  if (t && reportError(_$$e.FIGJAM, t), !e) return;
  let r = e.outerHTML || Object.prototype.toString.call(e);
  reportError(_$$e.FIGJAM, Error(`Expected object to be a valid HTMLImageElement but it wasn't: '${r}'`));
}
export const C7 = $$N0;
export const LL = $$b1;
export const PK = $$S2;
export const WX = $$C3;
export const be = $$I4;
export const k6 = $$x5;
export const uL = $$y6;
export const vv = $$T7;
export const w8 = $$A8;
export const xG = $$v9;