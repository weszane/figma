import { ServiceCategories as _$$e } from "../905/165054";
import { Hdj, DV9, daH, Ez5 } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { F } from "../905/989956";
import { A$, X0 } from "../figma_app/837500";
import { W, r } from "../905/134572";
import { jR, vh, N0, qm, Sb, RO, k0, zt, t1, Ws, _M, jc, mO, az, Af, n7, p5, R2, Z6, xr, Po, is, Qw, bu, oW, Py, A4, X8, eN, _P, LL, fU, c6, U8, oK, SW, B9, Pp, k7, JI, _x, a6, Uw, FQ, fh, yG, DN, pZ, i4, Q2, iU, h3, PQ, T2, o$, Zz, $b, Q1, aT, K4, nL, Dd, B8, Tn, OF, Zv, L5, QE, g$, vD, Ah, wO, Td, qH, fV, nG, qt, DE, ev, vY, gn, xu, AN, wl } from "../figma_app/728075";
let p = ["base", "baseLight", "sticky", "highlight", "widget", "pencilUI3", "codeBlockTheme"];
function _({
  colorsToCSS: e,
  lightDisplayColors: t,
  darkDisplayColors: r
}) {
  return {
    COLOR_TO_CSS: e,
    CSS_TO_COLOR: new Map(Array.from(e, ([e, t]) => [t, e])),
    LIGHT_DISPLAY: t ?? e,
    DARK_DISPLAY: r ?? e
  };
}
let h = Hdj.V700;
let m = new Map();
function g(e) {
  0 === m.size && function () {
    let e = DV9?.getWhiteboardPaletteTypeToRampValue();
    if (e) for (let [t, r] of e.entries()) {
      if (!p.includes(t)) {
        reportError(_$$e.FIGJAM, Error(`${t} doesn't exist in the WhiteboardPaletteType union type`));
        continue;
      }
      m.set(t, r);
    }
  }();
  return m.get(e) ?? h;
}
let f = _({
  colorsToCSS: new Map([[daH.BLACK, jR], [daH.GRAY_DARK, vh], [daH.RED, N0], [daH.ORANGE, qm], [daH.YELLOW, Sb], [daH.GREEN, RO], [daH.BLUE, k0], [daH.VIOLET, zt], [daH.WHITE, t1]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[daH.BLACK, Ws], [daH.GRAY_DARK, _M], [daH.BLUE, jc], [daH.VIOLET, mO], [daH.WHITE, az], [daH.RED, Af], [daH.ORANGE, n7], [daH.YELLOW, p5], [daH.GREEN, R2]])
});
function E(e = !1) {
  return Ez5?.uiState().showUI3Colors.getCopy() && !e ? function () {
    let e = g("base");
    return _({
      colorsToCSS: new Map([[daH.BLACK, jR], [daH.GRAY_DARK, vh], [daH.YELLOW, W(r.YELLOW, e)], [daH.ORANGE, W(r.ORANGE, e)], [daH.RED, W(r.RED, e)], [daH.PINK, W(r.PINK, e)], [daH.VIOLET, W(r.VIOLET, e)], [daH.BLUE, W(r.BLUE, e)], [daH.TEAL, W(r.TEAL, e)], [daH.GREEN, W(r.GREEN, e)], [daH.WHITE, t1]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : f;
}
let y = _({
  colorsToCSS: new Map([[daH.GRAY, Z6], [daH.GRAY_LIGHT, xr], [daH.RED_LIGHT, Po], [daH.ORANGE_LIGHT, is], [daH.YELLOW_LIGHT, Qw], [daH.GREEN_LIGHT, bu], [daH.BLUE_LIGHT, oW], [daH.VIOLET_LIGHT, Py]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[daH.GRAY, _M], [daH.GRAY_LIGHT, A4], [daH.BLUE_LIGHT, X8], [daH.VIOLET_LIGHT, eN], [daH.RED_LIGHT, _P], [daH.ORANGE_LIGHT, LL], [daH.YELLOW_LIGHT, fU], [daH.GREEN_LIGHT, c6]])
});
function b() {
  return Ez5?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("baseLight");
    return _({
      colorsToCSS: new Map([[daH.GRAY, Z6], [daH.GRAY_LIGHT, U8], [daH.YELLOW_LIGHT, W(r.YELLOW, e)], [daH.ORANGE_LIGHT, W(r.ORANGE, e)], [daH.RED_LIGHT, W(r.RED, e)], [daH.PINK_LIGHT, W(r.PINK, e)], [daH.VIOLET_LIGHT, W(r.VIOLET, e)], [daH.BLUE_LIGHT, W(r.BLUE, e)], [daH.TEAL_LIGHT, W(r.TEAL, e)], [daH.GREEN_LIGHT, W(r.GREEN, e)]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : y;
}
let T = _({
  colorsToCSS: new Map([[daH.STICKY_GRAY, oK], [daH.STICKY_RED, SW], [daH.STICKY_ORANGE, B9], [daH.STICKY_YELLOW, Pp], [daH.STICKY_GREEN, k7], [daH.STICKY_BLUE, JI], [daH.STICKY_VIOLET, _x], [daH.STICKY_PINK, a6], [daH.STICKY_GRAY_LIGHT, Uw]]),
  lightDisplayColors: new Map([[daH.STICKY_GRAY_LIGHT, FQ], [daH.STICKY_GRAY, fh], [daH.STICKY_BLUE, yG], [daH.STICKY_VIOLET, DN], [daH.STICKY_RED, pZ], [daH.STICKY_PINK, i4], [daH.STICKY_ORANGE, Q2], [daH.STICKY_YELLOW, iU], [daH.STICKY_GREEN, h3]]),
  darkDisplayColors: new Map([[daH.STICKY_GRAY_LIGHT, PQ], [daH.STICKY_GRAY, T2], [daH.STICKY_BLUE, o$], [daH.STICKY_VIOLET, Zz], [daH.STICKY_RED, $b], [daH.STICKY_PINK, Q1], [daH.STICKY_ORANGE, aT], [daH.STICKY_YELLOW, K4], [daH.STICKY_GREEN, nL]])
});
function I() {
  return Ez5?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("sticky");
    return _({
      colorsToCSS: new Map([[daH.WHITE, t1], [daH.STICKY_GRAY_UI3, Dd], [daH.STICKY_YELLOW, W(r.YELLOW, e)], [daH.STICKY_ORANGE, W(r.ORANGE, e)], [daH.STICKY_RED, W(r.RED, e)], [daH.STICKY_PINK, W(r.PINK, e)], [daH.STICKY_VIOLET, W(r.VIOLET, e)], [daH.STICKY_BLUE, W(r.BLUE, e)], [daH.STICKY_TEAL, W(r.TEAL, e)], [daH.STICKY_GREEN, W(r.GREEN, e)]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : T;
}
function S() {
  return _({
    colorsToCSS: new Map([[daH.CODE_BLOCK_DRACULA, B8], [daH.CODE_BLOCK_DUOTONE_LIGHT, Tn], [daH.CODE_BLOCK_DUOTONE_SEA, OF], [daH.CODE_BLOCK_DUOTONE_SPACE, Zv], [daH.CODE_BLOCK_DUOTONE_EARTH, L5], [daH.CODE_BLOCK_DUOTONE_FOREST, QE]]),
    lightDisplayColors: void 0,
    darkDisplayColors: void 0
  });
}
let v = _({
  colorsToCSS: new Map([[daH.HIGHLIGHT_GRAY, g$], [daH.HIGHLIGHT_RED, vD], [daH.HIGHLIGHT_ORANGE, Ah], [daH.HIGHLIGHT_YELLOW, wO], [daH.HIGHLIGHT_GREEN, Td], [daH.HIGHLIGHT_BLUE, qH], [daH.HIGHLIGHT_VIOLET, fV], [daH.HIGHLIGHT_WHITE, nG]]),
  lightDisplayColors: new Map([[daH.HIGHLIGHT_RED, qt], [daH.HIGHLIGHT_YELLOW, DE], [daH.HIGHLIGHT_GREEN, ev], [daH.HIGHLIGHT_BLUE, vY], [daH.HIGHLIGHT_VIOLET, gn], [daH.HIGHLIGHT_ORANGE, xu], [daH.HIGHLIGHT_GRAY, AN], [daH.HIGHLIGHT_WHITE, wl]]),
  darkDisplayColors: new Map([[daH.HIGHLIGHT_RED, qt], [daH.HIGHLIGHT_YELLOW, DE], [daH.HIGHLIGHT_GREEN, ev], [daH.HIGHLIGHT_BLUE, vY], [daH.HIGHLIGHT_VIOLET, gn], [daH.HIGHLIGHT_ORANGE, xu], [daH.HIGHLIGHT_GRAY, AN], [daH.HIGHLIGHT_WHITE, wl]])
});
let A = _({
  colorsToCSS: new Map([[daH.BLACK, jR], [daH.RED, N0], [daH.ORANGE, qm], [daH.YELLOW, Sb], [daH.GREEN, RO], [daH.BLUE, k0], [daH.VIOLET, zt], [daH.WHITE, t1]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[daH.BLACK, Ws], [daH.BLUE, jc], [daH.VIOLET, mO], [daH.WHITE, az], [daH.RED, Af], [daH.ORANGE, n7], [daH.YELLOW, p5], [daH.GREEN, R2]])
});
function x() {
  return Ez5?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("pencilUI3");
    return _({
      colorsToCSS: new Map([[daH.BLACK, jR], [daH.RED, W(r.RED, e)], [daH.ORANGE, W(r.ORANGE, e)], [daH.YELLOW, W(r.YELLOW, e)], [daH.GREEN, W(r.GREEN, e)], [daH.BLUE, W(r.BLUE, e)], [daH.VIOLET, W(r.VIOLET, e)], [daH.WHITE, t1]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : A;
}
let $$N13 = new Map([[daH.BLACK, "Black"], [daH.WHITE, "White"], [daH.GRAY_DARK, "Dark gray"], [daH.GRAY, "Gray"], [daH.GRAY_LIGHT, "Light gray"], [daH.BLUE, "Blue"], [daH.BLUE_LIGHT, "Light blue"], [daH.VIOLET, "Violet"], [daH.VIOLET_LIGHT, "Light violet"], [daH.RED, "Red"], [daH.RED_LIGHT, "Light red"], [daH.ORANGE, "Orange"], [daH.ORANGE_LIGHT, "Light orange"], [daH.YELLOW, "Yellow"], [daH.YELLOW_LIGHT, "Light yellow"], [daH.GREEN, "Green"], [daH.GREEN_LIGHT, "Light green"], [daH.PINK, "Pink"], [daH.PINK_LIGHT, "Light pink"], [daH.INDIGO, "Indigo"], [daH.INDIGO_LIGHT, "Light indigo"], [daH.COBALT, "Cobalt"], [daH.COBALT_LIGHT, "Light cobalt"], [daH.TEAL, "Teal"], [daH.TEAL_LIGHT, "Light teal"], [daH.OLIVE, "Olive"], [daH.OLIVE_LIGHT, "Light olive"], [daH.STICKY_GRAY_LIGHT, "Light gray"], [daH.STICKY_GRAY, "Gray"], [daH.STICKY_GRAY_UI3, "Gray"], [daH.STICKY_BLUE, "Blue"], [daH.STICKY_VIOLET, "Violet"], [daH.STICKY_RED, "Red"], [daH.STICKY_PINK, "Pink"], [daH.STICKY_ORANGE, "Orange"], [daH.STICKY_YELLOW, "Yellow"], [daH.STICKY_GREEN, "Green"], [daH.STICKY_COBALT, "Cobalt"], [daH.STICKY_INDIGO, "Indigo"], [daH.STICKY_TEAL, "Teal"], [daH.STICKY_OLIVE, "Olive"], [daH.HIGHLIGHT_RED, "Pink"], [daH.HIGHLIGHT_YELLOW, "Yellow"], [daH.HIGHLIGHT_GREEN, "Green"], [daH.HIGHLIGHT_BLUE, "Blue"], [daH.HIGHLIGHT_VIOLET, "Violet"], [daH.HIGHLIGHT_ORANGE, "Orange"], [daH.HIGHLIGHT_GRAY, "Gray"], [daH.HIGHLIGHT_WHITE, "White"], [daH.CODE_BLOCK_DRACULA, "Dracula"], [daH.CODE_BLOCK_DUOTONE_LIGHT, "Duotone light"], [daH.CODE_BLOCK_DUOTONE_SEA, "Duotone sea"], [daH.CODE_BLOCK_DUOTONE_SPACE, "Duotone space"], [daH.CODE_BLOCK_DUOTONE_EARTH, "Duotone earth"], [daH.CODE_BLOCK_DUOTONE_FOREST, "Duotone forest"]]);
let C = getFeatureFlags().figjam_ui3_color_palette_v2 ? [daH.BLACK, daH.GRAY_DARK, daH.RED, daH.ORANGE, daH.YELLOW, daH.GREEN, daH.TEAL, daH.BLUE, daH.VIOLET, daH.PINK, daH.WHITE] : [daH.BLACK, daH.GRAY_DARK, daH.GREEN, daH.TEAL, daH.BLUE, daH.VIOLET, daH.PINK, daH.RED, daH.ORANGE, daH.YELLOW, daH.WHITE];
let w = [daH.BLACK, daH.GRAY_DARK, daH.RED, daH.ORANGE, daH.YELLOW, daH.GREEN, daH.BLUE, daH.VIOLET, daH.WHITE];
let O = getFeatureFlags().figjam_ui3_color_palette_v2 ? [daH.GRAY, daH.GRAY_LIGHT, daH.RED_LIGHT, daH.ORANGE_LIGHT, daH.YELLOW_LIGHT, daH.GREEN_LIGHT, daH.TEAL_LIGHT, daH.BLUE_LIGHT, daH.VIOLET_LIGHT, daH.PINK_LIGHT] : [daH.GRAY, daH.GRAY_LIGHT, daH.GREEN_LIGHT, daH.TEAL_LIGHT, daH.BLUE_LIGHT, daH.VIOLET_LIGHT, daH.PINK_LIGHT, daH.RED_LIGHT, daH.ORANGE_LIGHT, daH.YELLOW_LIGHT];
let R = [daH.GRAY, daH.GRAY_LIGHT, daH.RED_LIGHT, daH.ORANGE_LIGHT, daH.YELLOW_LIGHT, daH.GREEN_LIGHT, daH.BLUE_LIGHT, daH.VIOLET_LIGHT];
export function $$L8() {
  return Ez5?.uiState().showUI3Colors.getCopy() ? O : R;
}
let $$P4 = [daH.BLACK, daH.RED, daH.ORANGE, daH.YELLOW, daH.GREEN, daH.BLUE, daH.VIOLET, daH.WHITE];
let D = [daH.STICKY_GRAY, daH.STICKY_RED, daH.STICKY_ORANGE, daH.STICKY_YELLOW, daH.STICKY_GREEN, daH.STICKY_BLUE, daH.STICKY_VIOLET, daH.STICKY_PINK, daH.STICKY_GRAY_LIGHT];
let k = getFeatureFlags().figjam_ui3_color_palette_v2 ? [daH.WHITE, daH.STICKY_GRAY_UI3, daH.STICKY_RED, daH.STICKY_ORANGE, daH.STICKY_YELLOW, daH.STICKY_GREEN, daH.STICKY_TEAL, daH.STICKY_BLUE, daH.STICKY_VIOLET, daH.STICKY_PINK] : [daH.WHITE, daH.STICKY_GRAY_UI3, daH.STICKY_GREEN, daH.STICKY_TEAL, daH.STICKY_BLUE, daH.STICKY_VIOLET, daH.STICKY_PINK, daH.STICKY_RED, daH.STICKY_ORANGE, daH.STICKY_YELLOW];
export function $$M5() {
  return Ez5?.uiState().showUI3Colors.getCopy() ? k : D;
}
let $$F12 = [daH.HIGHLIGHT_GRAY, daH.HIGHLIGHT_RED, daH.HIGHLIGHT_ORANGE, daH.HIGHLIGHT_YELLOW, daH.HIGHLIGHT_GREEN, daH.HIGHLIGHT_BLUE, daH.HIGHLIGHT_VIOLET, daH.HIGHLIGHT_WHITE];
let j = [daH.CODE_BLOCK_DRACULA, daH.CODE_BLOCK_DUOTONE_LIGHT, daH.CODE_BLOCK_DUOTONE_SEA, daH.CODE_BLOCK_DUOTONE_EARTH, daH.CODE_BLOCK_DUOTONE_SPACE, daH.CODE_BLOCK_DUOTONE_FOREST];
export function $$U11() {
  let e = [jR, xr, N0, Sb, RO].map(e => F.parse(e));
  let t = [daH.BLACK, daH.RED, daH.YELLOW, daH.GREEN, daH.BLUE].map(e => $$H1(e, "pencilUI3"));
  return Ez5?.uiState().showUI3Colors.getCopy() ? t : e;
}
export function $$B9(e) {
  switch (e) {
    case "widget":
    case "base":
      return (Ez5?.uiState().showUI3Colors.getCopy() ? C : w).map(e => $$H1(e, "base"));
    case "baseLight":
      return $$L8().map(e => $$H1(e, "baseLight"));
    case "sticky":
      return $$M5().map(e => $$H1(e, "sticky"));
    case "highlight":
      return $$F12.map(e => $$H1(e, "highlight"));
    case "pencilUI3":
      return $$P4.map(e => $$H1(e, "pencilUI3"));
    case "codeBlockTheme":
      return j.map(e => $$H1(e, "codeBlockTheme"));
  }
}
export function $$G2(e) {
  return "base" === e;
}
export function $$V14(e, t, r = daH.CUSTOM) {
  let n;
  let a = F.format(e);
  switch (t) {
    case "widget":
    case "base":
      n = E().CSS_TO_COLOR.get(a);
      break;
    case "baseLight":
      n = b().CSS_TO_COLOR.get(a);
      break;
    case "sticky":
      n = I().CSS_TO_COLOR.get(a);
      break;
    case "highlight":
      n = v.CSS_TO_COLOR.get(a);
      break;
    case "pencilUI3":
      n = x().CSS_TO_COLOR.get(a);
      break;
    case "codeBlockTheme":
      n = S().CSS_TO_COLOR.get(a);
  }
  return n ?? r;
}
export function $$H1(e, t) {
  let r;
  switch (t) {
    case "widget":
    case "base":
      r = E().COLOR_TO_CSS.get(e);
      break;
    case "baseLight":
      r = b().COLOR_TO_CSS.get(e);
      break;
    case "sticky":
      r = I().COLOR_TO_CSS.get(e);
      break;
    case "highlight":
      r = v.COLOR_TO_CSS.get(e);
      break;
    case "pencilUI3":
      r = x().COLOR_TO_CSS.get(e);
      break;
    case "codeBlockTheme":
      r = S().COLOR_TO_CSS.get(e);
  }
  return r ? F.parse(r) : void 0;
}
export function $$z10(e, t = "base", r = getI18nString("whiteboard.colors.custom")) {
  let n = Array.isArray(e) ? e[0] : e;
  let a = $$V14(n, t);
  "base" === t && a === daH.CUSTOM && (a = $$V14(n, "baseLight"));
  return function (e) {
    switch (e) {
      case daH.BLACK:
        return getI18nString("whiteboard.colors.black");
      case daH.WHITE:
        return getI18nString("whiteboard.colors.white");
      case daH.GRAY_DARK:
        return getI18nString("whiteboard.colors.dark_gray");
      case daH.GRAY:
        return getI18nString("whiteboard.colors.gray");
      case daH.GRAY_LIGHT:
        return getI18nString("whiteboard.colors.light_gray");
      case daH.YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case daH.YELLOW_LIGHT:
        return getI18nString("whiteboard.colors.light_yellow");
      case daH.ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case daH.ORANGE_LIGHT:
        return getI18nString("whiteboard.colors.light_orange");
      case daH.RED:
        return getI18nString("whiteboard.colors.red");
      case daH.RED_LIGHT:
        return getI18nString("whiteboard.colors.light_red");
      case daH.PINK:
        return getI18nString("whiteboard.colors.pink");
      case daH.PINK_LIGHT:
        return getI18nString("whiteboard.colors.light_pink");
      case daH.VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case daH.VIOLET_LIGHT:
        return getI18nString("whiteboard.colors.light_violet");
      case daH.INDIGO:
        return getI18nString("whiteboard.colors.indigo");
      case daH.INDIGO_LIGHT:
        return getI18nString("whiteboard.colors.light_indigo");
      case daH.COBALT:
        return getI18nString("whiteboard.colors.cobalt");
      case daH.COBALT_LIGHT:
        return getI18nString("whiteboard.colors.light_cobalt");
      case daH.BLUE:
        return getI18nString("whiteboard.colors.blue");
      case daH.BLUE_LIGHT:
        return getI18nString("whiteboard.colors.light_blue");
      case daH.TEAL:
        return getI18nString("whiteboard.colors.teal");
      case daH.TEAL_LIGHT:
        return getI18nString("whiteboard.colors.light_teal");
      case daH.GREEN:
        return getI18nString("whiteboard.colors.green");
      case daH.GREEN_LIGHT:
        return getI18nString("whiteboard.colors.light_green");
      case daH.OLIVE:
        return getI18nString("whiteboard.colors.olive");
      case daH.OLIVE_LIGHT:
        return getI18nString("whiteboard.colors.light_olive");
      case daH.STICKY_GRAY_LIGHT:
        return getI18nString("whiteboard.colors.light_gray");
      case daH.STICKY_GRAY:
      case daH.STICKY_GRAY_UI3:
        return getI18nString("whiteboard.colors.gray");
      case daH.STICKY_BLUE:
        return getI18nString("whiteboard.colors.blue");
      case daH.STICKY_VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case daH.STICKY_RED:
        return getI18nString("whiteboard.colors.red");
      case daH.STICKY_PINK:
        return getI18nString("whiteboard.colors.pink");
      case daH.STICKY_ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case daH.STICKY_YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case daH.STICKY_GREEN:
        return getI18nString("whiteboard.colors.green");
      case daH.STICKY_COBALT:
        return getI18nString("whiteboard.colors.cobalt");
      case daH.STICKY_INDIGO:
        return getI18nString("whiteboard.colors.indigo");
      case daH.STICKY_TEAL:
        return getI18nString("whiteboard.colors.teal");
      case daH.STICKY_OLIVE:
        return getI18nString("whiteboard.colors.olive");
      case daH.HIGHLIGHT_RED:
        return getI18nString("whiteboard.colors.pink");
      case daH.HIGHLIGHT_YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case daH.HIGHLIGHT_GREEN:
        return getI18nString("whiteboard.colors.green");
      case daH.HIGHLIGHT_BLUE:
        return getI18nString("whiteboard.colors.blue");
      case daH.HIGHLIGHT_VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case daH.HIGHLIGHT_ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case daH.HIGHLIGHT_GRAY:
        return getI18nString("whiteboard.colors.gray");
      case daH.HIGHLIGHT_WHITE:
        return getI18nString("whiteboard.colors.white");
      case daH.CODE_BLOCK_DRACULA:
      case daH.CODE_BLOCK_DUOTONE_EARTH:
      case daH.CODE_BLOCK_DUOTONE_FOREST:
      case daH.CODE_BLOCK_DUOTONE_LIGHT:
      case daH.CODE_BLOCK_DUOTONE_SEA:
      case daH.CODE_BLOCK_DUOTONE_SPACE:
        return A$.format(X0(e));
      default:
        return;
    }
  }(a) ?? r;
}
export function $$W0(e, t = "base") {
  let r = e + 1;
  switch (t) {
    case "highlight":
      return getI18nString("whiteboard.colors.palette.highlight", {
        index: r
      });
    case "baseLight":
      return getI18nString("whiteboard.colors.palette.light", {
        index: r
      });
    default:
      return getI18nString("whiteboard.colors.palette.base", {
        index: r
      });
  }
}
export function $$K7(e, t = "rgba(255, 255, 255, 1)") {
  return E().COLOR_TO_CSS.get(e) ?? t;
}
export function $$Y6(e, t = "rgba(255, 255, 255, 1)") {
  return I().COLOR_TO_CSS.get(e) ?? t;
}
export function $$$3(e, t, r) {
  let n;
  let a = {
    ...e,
    a: 1
  };
  let s = $$V14(a, t);
  if (s === daH.NONE || s === daH.CUSTOM) return F.format(a);
  switch (t) {
    case "baseLight":
      n = b();
      break;
    case "sticky":
      n = I();
      break;
    case "highlight":
      n = v;
      break;
    case "pencilUI3":
      n = x();
      break;
    case "codeBlockTheme":
      n = S();
      break;
    default:
      n = E();
  }
  return ("light" === r ? n.LIGHT_DISPLAY.get(s) : n.DARK_DISPLAY.get(s)) ?? F.format(a);
}
export const AF = $$W0;
export const BV = $$H1;
export const Cn = $$G2;
export const Cz = $$$3;
export const Dy = $$P4;
export const Ku = $$M5;
export const MV = $$Y6;
export const Mr = $$K7;
export const Qe = $$L8;
export const TS = $$B9;
export const V_ = $$z10;
export const Vk = $$U11;
export const aN = $$F12;
export const sE = $$N13;
export const zS = $$V14;