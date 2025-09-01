import { S9 } from "../figma_app/465776";
import { _YF } from "../figma_app/763686";
import { x1 } from "../905/714362";
import { FFileType } from "../figma_app/191312";
let $$o11 = "si" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 2 - r);
  }).join("");
}(45, 149, 163) + "s";
let $$l3 = "fig" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 31 - r);
  }).join("");
}(55, 195, 184, 195) + "e";
let $$d16 = function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 0 - r);
  }).join("");
}(50, 159) + "ak" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 57 - r);
  }).join("");
}(18, 176);
let $$c13 = "co" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 36 - r);
  }).join("");
}(2, 149) + "per";
let $$u0 = function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 63 - r);
  }).join("");
}(35, 196) + "u" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 48 - r);
  }).join("");
}(15, 186, 185);
let p = function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 61 - r);
  }).join("");
}(32, 202, 198) + "lu" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 5 - r);
  }).join("");
}(4, 119, 129, 109, 125, 126, 124) + "o" + function () {
  var e = Array.prototype.slice.call(arguments);
  var t = e.shift();
  return e.reverse().map(function (e, r) {
    return String.fromCharCode(e - t - 30 - r);
  }).join("");
}(39, 179);
export function $$_18(e) {
  return 1 === e || 7 === e;
}
export function $$h4(e) {
  return 2 === e || $$_18(e);
}
export function $$m6(e) {
  return 4 === e || $$h4(e);
}
export function $$g8(e, t) {
  switch (e) {
    case 1:
    case 7:
    case 3:
      return t === FFileType.DESIGN;
    case 2:
      return t === FFileType.WHITEBOARD;
    case 4:
      return t === FFileType.SLIDES;
    case 5:
      return t === FFileType.SITES;
    case 8:
      return t === FFileType.FIGMAKE;
    case 6:
      return t === FFileType.COOPER;
    default:
      x1("editorType", "Unknown editor type", {
        editorType: e
      });
      return !1;
  }
}
export var $$f9 = (e => (e[e.Design = 1] = "Design", e[e.Whiteboard = 2] = "Whiteboard", e[e.DevHandoff = 3] = "DevHandoff", e[e.Slides = 4] = "Slides", e[e.Sites = 5] = "Sites", e[e.Cooper = 6] = "Cooper", e[e.Illustration = 7] = "Illustration", e[e.Figmake = 8] = "Figmake", e))($$f9 || {});
export function $$E17(e) {
  switch (e) {
    case 1:
      return _YF.DESIGN;
    case 2:
      return _YF.WHITEBOARD;
    case 3:
      return _YF.DEV_HANDOFF;
    case 4:
      return _YF.SLIDES;
    case 5:
      return _YF.SITES;
    case 6:
      return _YF.COOPER;
    case 7:
      return _YF.ILLUSTRATION;
    case 8:
      return _YF.FIGMAKE;
    default:
      x1("editorType", "Unknown editor type", {
        editorType: e
      });
      return _YF.DESIGN;
  }
}
export function $$y10(e) {
  switch (e) {
    case 2:
      return FFileType.WHITEBOARD;
    case 4:
      return FFileType.SLIDES;
    case 5:
      return FFileType.SITES;
    case 8:
      return FFileType.FIGMAKE;
    case 3:
    case 1:
    case 7:
      return FFileType.DESIGN;
    case 6:
      return FFileType.COOPER;
    default:
      x1("editorType", "Unknown editor type", {
        editorType: e
      });
      return FFileType.DESIGN;
  }
}
export function $$b5(e) {
  switch (e) {
    case 2:
      return "whiteboard";
    case 4:
      return "slides";
    case 5:
      return "sites";
    case 8:
      return $$l3;
    case 3:
      return "dev_handoff";
    case 7:
      return "draw";
    case 6:
      return "cooper";
    case 1:
      return "design";
    default:
      return S9(e, "design");
  }
}
export function $$T12(e) {
  if (null == e) return null;
  switch (e) {
    case FFileType.DESIGN:
      return 1;
    case FFileType.WHITEBOARD:
      return 2;
    case FFileType.SLIDES:
      return 4;
    case FFileType.SITES:
      return 5;
    case FFileType.COOPER:
      return 6;
    case FFileType.FIGMAKE:
      return 8;
  }
}
export function $$I15(e) {
  if (null == e) return 1;
  switch (e) {
    case FFileType.DESIGN:
      return 1;
    case FFileType.WHITEBOARD:
      return 2;
    case FFileType.SLIDES:
      return 4;
    case FFileType.SITES:
      return 5;
    case FFileType.COOPER:
      return 6;
    case FFileType.FIGMAKE:
      return 8;
  }
}
export function $$S1(e) {
  switch (e) {
    case 1:
      return "design";
    case 2:
      return "whiteboard";
    case 3:
      return "dev_handoff";
    case 4:
      return "slides";
    case 5:
      return $$o11;
    case 8:
      return $$l3;
    case 6:
      return $$c13;
    case 7:
      return p;
    default:
      return e;
  }
}
export function $$v7(e) {
  switch (e) {
    case _YF.DESIGN:
      return 1;
    case _YF.WHITEBOARD:
      return 2;
    case _YF.DEV_HANDOFF:
      return 3;
    case _YF.SLIDES:
      return 4;
    case _YF.SITES:
      return 5;
    case _YF.FIGMAKE:
      return 8;
    case _YF.COOPER:
      return 6;
    case _YF.ILLUSTRATION:
      return 7;
    default:
      x1("editorType", "Unknown editor type", {
        editorType: e
      });
      return 1;
  }
}
export function $$A2(e) {
  switch (e) {
    case 1:
      return "design";
    case 2:
      return "whiteboard";
    case 3:
      return "dev_handoff";
    case 4:
      return "slides";
    case 5:
      return $$o11;
    case 8:
      return $$l3;
    case 6:
      return $$c13;
    case 7:
      return p;
    default:
      x1("editorType", "Unknown editor type", {
        editorType: e
      });
      return "";
  }
}
export function $$x14(e) {
  switch (e) {
    case FFileType.DESIGN:
      return "0";
    case FFileType.WHITEBOARD:
      return "1";
    case FFileType.SLIDES:
      return "2";
    case FFileType.SITES:
      return "3";
    case FFileType.COOPER:
      return "4";
    case FFileType.FIGMAKE:
      return "5";
    default:
      return S9(e, "0");
  }
}
export const $t = $$u0;
export const Bu = $$S1;
export const CO = $$A2;
export const GJ = $$l3;
export const Nw = $$h4;
export const YP = $$b5;
export const co = $$m6;
export const fB = $$v7;
export const fP = $$g8;
export const nT = $$f9;
export const oD = $$y10;
export const oQ = $$o11;
export const sL = $$T12;
export const sq = $$c13;
export const vD = $$x14;
export const wN = $$I15;
export const xi = $$d16;
export const xq = $$E17;
export const yY = $$_18;