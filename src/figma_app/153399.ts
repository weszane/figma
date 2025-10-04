import { ServiceCategories } from "../905/165054";
import { WeightLevel, WhiteboardTsApi, ColorOptions, AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { colorCSSManipulatorInstance } from "../905/989956";
import { A$, X0 } from "../figma_app/837500";
import { W, r } from "../905/134572";
import { neutralDarkColor3, gray600Color2, redSecondaryColor, redOrangeColor2, redApricotColor2, greenMintColor, blueTintColor, purpleSecondaryColor2, neutralLightColor3, neutralDarkColor2, gray600Color, uiBlueColor, purpleMagentaColor, neutralLightColor, redCoralColor, redTomatoColor, redGoldColor2, greenForestColor, gray700Color, uiGrayColor5, redLightColor, redHoneyColor, redLemonColor, greenLightColor, blueUltraLightColor, purpleUltraLightColor, uiGrayBorderColor, blueSkyColor, purpleLavenderColor, redBlushColor, redAmberColor2, redButterColor, greenSeafoamColor, uiGrayBorderColor2, uiBlueSlateColor2, redCinnamonColor, redAmberColor, redCantaloupeColor, greenJadeColor, blueLightColor, purpleLightColor, pinkRoseColor, uiGrayColor4, uiGrayColor2, uiBlueSteelColor, blueTintColor2, purpleSecondaryColor, redSecondaryColor2, pinkFlamingoColor, redOrangeColor, redApricotColor3, greenMintColor2, uiGrayColor3, uiBlueSlateColor, uiGreenMintColor, uiBluePeriwinkleColor, redPeachColor, uiPinkCarnationColor, redAmberColor3, redPineappleColor, greenEmeraldColor, uiGrayColor, neutralDarkColor, neutralPaperColor, greenTealColor, redCaramelColor, redGoldColor, greenSageColor, gray800Color, pinkCottonCandyColor, redApricotColor, yellowCreamColor, greenLimeColor, greenAquaColor, uiPurpleColor, neutralLightColor2, pinkBubblegumColor, yellowLemonColor, greenPearColor, greenCyanColor, purpleOrchidColor, pinkSalmonColor, gray900Color, neutralLightColor4 } from "../figma_app/728075";
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
let h = WeightLevel.V700;
let m = new Map();
function g(e) {
  0 === m.size && function () {
    let e = WhiteboardTsApi?.getWhiteboardPaletteTypeToRampValue();
    if (e) for (let [t, r] of e.entries()) {
      if (!p.includes(t)) {
        reportError(ServiceCategories.FIGJAM, Error(`${t} doesn't exist in the WhiteboardPaletteType union type`));
        continue;
      }
      m.set(t, r);
    }
  }();
  return m.get(e) ?? h;
}
let f = _({
  colorsToCSS: new Map([[ColorOptions.BLACK, neutralDarkColor3], [ColorOptions.GRAY_DARK, gray600Color2], [ColorOptions.RED, redSecondaryColor], [ColorOptions.ORANGE, redOrangeColor2], [ColorOptions.YELLOW, redApricotColor2], [ColorOptions.GREEN, greenMintColor], [ColorOptions.BLUE, blueTintColor], [ColorOptions.VIOLET, purpleSecondaryColor2], [ColorOptions.WHITE, neutralLightColor3]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[ColorOptions.BLACK, neutralDarkColor2], [ColorOptions.GRAY_DARK, gray600Color], [ColorOptions.BLUE, uiBlueColor], [ColorOptions.VIOLET, purpleMagentaColor], [ColorOptions.WHITE, neutralLightColor], [ColorOptions.RED, redCoralColor], [ColorOptions.ORANGE, redTomatoColor], [ColorOptions.YELLOW, redGoldColor2], [ColorOptions.GREEN, greenForestColor]])
});
function E(e = !1) {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() && !e ? function () {
    let e = g("base");
    return _({
      colorsToCSS: new Map([[ColorOptions.BLACK, neutralDarkColor3], [ColorOptions.GRAY_DARK, gray600Color2], [ColorOptions.YELLOW, W(r.YELLOW, e)], [ColorOptions.ORANGE, W(r.ORANGE, e)], [ColorOptions.RED, W(r.RED, e)], [ColorOptions.PINK, W(r.PINK, e)], [ColorOptions.VIOLET, W(r.VIOLET, e)], [ColorOptions.BLUE, W(r.BLUE, e)], [ColorOptions.TEAL, W(r.TEAL, e)], [ColorOptions.GREEN, W(r.GREEN, e)], [ColorOptions.WHITE, neutralLightColor3]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : f;
}
let y = _({
  colorsToCSS: new Map([[ColorOptions.GRAY, gray700Color], [ColorOptions.GRAY_LIGHT, uiGrayColor5], [ColorOptions.RED_LIGHT, redLightColor], [ColorOptions.ORANGE_LIGHT, redHoneyColor], [ColorOptions.YELLOW_LIGHT, redLemonColor], [ColorOptions.GREEN_LIGHT, greenLightColor], [ColorOptions.BLUE_LIGHT, blueUltraLightColor], [ColorOptions.VIOLET_LIGHT, purpleUltraLightColor]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[ColorOptions.GRAY, gray600Color], [ColorOptions.GRAY_LIGHT, uiGrayBorderColor], [ColorOptions.BLUE_LIGHT, blueSkyColor], [ColorOptions.VIOLET_LIGHT, purpleLavenderColor], [ColorOptions.RED_LIGHT, redBlushColor], [ColorOptions.ORANGE_LIGHT, redAmberColor2], [ColorOptions.YELLOW_LIGHT, redButterColor], [ColorOptions.GREEN_LIGHT, greenSeafoamColor]])
});
function b() {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("baseLight");
    return _({
      colorsToCSS: new Map([[ColorOptions.GRAY, gray700Color], [ColorOptions.GRAY_LIGHT, uiGrayBorderColor2], [ColorOptions.YELLOW_LIGHT, W(r.YELLOW, e)], [ColorOptions.ORANGE_LIGHT, W(r.ORANGE, e)], [ColorOptions.RED_LIGHT, W(r.RED, e)], [ColorOptions.PINK_LIGHT, W(r.PINK, e)], [ColorOptions.VIOLET_LIGHT, W(r.VIOLET, e)], [ColorOptions.BLUE_LIGHT, W(r.BLUE, e)], [ColorOptions.TEAL_LIGHT, W(r.TEAL, e)], [ColorOptions.GREEN_LIGHT, W(r.GREEN, e)]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : y;
}
let T = _({
  colorsToCSS: new Map([[ColorOptions.STICKY_GRAY, uiBlueSlateColor2], [ColorOptions.STICKY_RED, redCinnamonColor], [ColorOptions.STICKY_ORANGE, redAmberColor], [ColorOptions.STICKY_YELLOW, redCantaloupeColor], [ColorOptions.STICKY_GREEN, greenJadeColor], [ColorOptions.STICKY_BLUE, blueLightColor], [ColorOptions.STICKY_VIOLET, purpleLightColor], [ColorOptions.STICKY_PINK, pinkRoseColor], [ColorOptions.STICKY_GRAY_LIGHT, uiGrayColor4]]),
  lightDisplayColors: new Map([[ColorOptions.STICKY_GRAY_LIGHT, uiGrayColor2], [ColorOptions.STICKY_GRAY, uiBlueSteelColor], [ColorOptions.STICKY_BLUE, blueTintColor2], [ColorOptions.STICKY_VIOLET, purpleSecondaryColor], [ColorOptions.STICKY_RED, redSecondaryColor2], [ColorOptions.STICKY_PINK, pinkFlamingoColor], [ColorOptions.STICKY_ORANGE, redOrangeColor], [ColorOptions.STICKY_YELLOW, redApricotColor3], [ColorOptions.STICKY_GREEN, greenMintColor2]]),
  darkDisplayColors: new Map([[ColorOptions.STICKY_GRAY_LIGHT, uiGrayColor3], [ColorOptions.STICKY_GRAY, uiBlueSlateColor], [ColorOptions.STICKY_BLUE, uiGreenMintColor], [ColorOptions.STICKY_VIOLET, uiBluePeriwinkleColor], [ColorOptions.STICKY_RED, redPeachColor], [ColorOptions.STICKY_PINK, uiPinkCarnationColor], [ColorOptions.STICKY_ORANGE, redAmberColor3], [ColorOptions.STICKY_YELLOW, redPineappleColor], [ColorOptions.STICKY_GREEN, greenEmeraldColor]])
});
function I() {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("sticky");
    return _({
      colorsToCSS: new Map([[ColorOptions.WHITE, neutralLightColor3], [ColorOptions.STICKY_GRAY_UI3, uiGrayColor], [ColorOptions.STICKY_YELLOW, W(r.YELLOW, e)], [ColorOptions.STICKY_ORANGE, W(r.ORANGE, e)], [ColorOptions.STICKY_RED, W(r.RED, e)], [ColorOptions.STICKY_PINK, W(r.PINK, e)], [ColorOptions.STICKY_VIOLET, W(r.VIOLET, e)], [ColorOptions.STICKY_BLUE, W(r.BLUE, e)], [ColorOptions.STICKY_TEAL, W(r.TEAL, e)], [ColorOptions.STICKY_GREEN, W(r.GREEN, e)]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : T;
}
function S() {
  return _({
    colorsToCSS: new Map([[ColorOptions.CODE_BLOCK_DRACULA, neutralDarkColor], [ColorOptions.CODE_BLOCK_DUOTONE_LIGHT, neutralPaperColor], [ColorOptions.CODE_BLOCK_DUOTONE_SEA, greenTealColor], [ColorOptions.CODE_BLOCK_DUOTONE_SPACE, redCaramelColor], [ColorOptions.CODE_BLOCK_DUOTONE_EARTH, redGoldColor], [ColorOptions.CODE_BLOCK_DUOTONE_FOREST, greenSageColor]]),
    lightDisplayColors: void 0,
    darkDisplayColors: void 0
  });
}
let v = _({
  colorsToCSS: new Map([[ColorOptions.HIGHLIGHT_GRAY, gray800Color], [ColorOptions.HIGHLIGHT_RED, pinkCottonCandyColor], [ColorOptions.HIGHLIGHT_ORANGE, redApricotColor], [ColorOptions.HIGHLIGHT_YELLOW, yellowCreamColor], [ColorOptions.HIGHLIGHT_GREEN, greenLimeColor], [ColorOptions.HIGHLIGHT_BLUE, greenAquaColor], [ColorOptions.HIGHLIGHT_VIOLET, uiPurpleColor], [ColorOptions.HIGHLIGHT_WHITE, neutralLightColor2]]),
  lightDisplayColors: new Map([[ColorOptions.HIGHLIGHT_RED, pinkBubblegumColor], [ColorOptions.HIGHLIGHT_YELLOW, yellowLemonColor], [ColorOptions.HIGHLIGHT_GREEN, greenPearColor], [ColorOptions.HIGHLIGHT_BLUE, greenCyanColor], [ColorOptions.HIGHLIGHT_VIOLET, purpleOrchidColor], [ColorOptions.HIGHLIGHT_ORANGE, pinkSalmonColor], [ColorOptions.HIGHLIGHT_GRAY, gray900Color], [ColorOptions.HIGHLIGHT_WHITE, neutralLightColor4]]),
  darkDisplayColors: new Map([[ColorOptions.HIGHLIGHT_RED, pinkBubblegumColor], [ColorOptions.HIGHLIGHT_YELLOW, yellowLemonColor], [ColorOptions.HIGHLIGHT_GREEN, greenPearColor], [ColorOptions.HIGHLIGHT_BLUE, greenCyanColor], [ColorOptions.HIGHLIGHT_VIOLET, purpleOrchidColor], [ColorOptions.HIGHLIGHT_ORANGE, pinkSalmonColor], [ColorOptions.HIGHLIGHT_GRAY, gray900Color], [ColorOptions.HIGHLIGHT_WHITE, neutralLightColor4]])
});
let A = _({
  colorsToCSS: new Map([[ColorOptions.BLACK, neutralDarkColor3], [ColorOptions.RED, redSecondaryColor], [ColorOptions.ORANGE, redOrangeColor2], [ColorOptions.YELLOW, redApricotColor2], [ColorOptions.GREEN, greenMintColor], [ColorOptions.BLUE, blueTintColor], [ColorOptions.VIOLET, purpleSecondaryColor2], [ColorOptions.WHITE, neutralLightColor3]]),
  lightDisplayColors: void 0,
  darkDisplayColors: new Map([[ColorOptions.BLACK, neutralDarkColor2], [ColorOptions.BLUE, uiBlueColor], [ColorOptions.VIOLET, purpleMagentaColor], [ColorOptions.WHITE, neutralLightColor], [ColorOptions.RED, redCoralColor], [ColorOptions.ORANGE, redTomatoColor], [ColorOptions.YELLOW, redGoldColor2], [ColorOptions.GREEN, greenForestColor]])
});
function x() {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? function () {
    let e = g("pencilUI3");
    return _({
      colorsToCSS: new Map([[ColorOptions.BLACK, neutralDarkColor3], [ColorOptions.RED, W(r.RED, e)], [ColorOptions.ORANGE, W(r.ORANGE, e)], [ColorOptions.YELLOW, W(r.YELLOW, e)], [ColorOptions.GREEN, W(r.GREEN, e)], [ColorOptions.BLUE, W(r.BLUE, e)], [ColorOptions.VIOLET, W(r.VIOLET, e)], [ColorOptions.WHITE, neutralLightColor3]]),
      lightDisplayColors: void 0,
      darkDisplayColors: void 0
    });
  }() : A;
}
let $$N13 = new Map([[ColorOptions.BLACK, "Black"], [ColorOptions.WHITE, "White"], [ColorOptions.GRAY_DARK, "Dark gray"], [ColorOptions.GRAY, "Gray"], [ColorOptions.GRAY_LIGHT, "Light gray"], [ColorOptions.BLUE, "Blue"], [ColorOptions.BLUE_LIGHT, "Light blue"], [ColorOptions.VIOLET, "Violet"], [ColorOptions.VIOLET_LIGHT, "Light violet"], [ColorOptions.RED, "Red"], [ColorOptions.RED_LIGHT, "Light red"], [ColorOptions.ORANGE, "Orange"], [ColorOptions.ORANGE_LIGHT, "Light orange"], [ColorOptions.YELLOW, "Yellow"], [ColorOptions.YELLOW_LIGHT, "Light yellow"], [ColorOptions.GREEN, "Green"], [ColorOptions.GREEN_LIGHT, "Light green"], [ColorOptions.PINK, "Pink"], [ColorOptions.PINK_LIGHT, "Light pink"], [ColorOptions.INDIGO, "Indigo"], [ColorOptions.INDIGO_LIGHT, "Light indigo"], [ColorOptions.COBALT, "Cobalt"], [ColorOptions.COBALT_LIGHT, "Light cobalt"], [ColorOptions.TEAL, "Teal"], [ColorOptions.TEAL_LIGHT, "Light teal"], [ColorOptions.OLIVE, "Olive"], [ColorOptions.OLIVE_LIGHT, "Light olive"], [ColorOptions.STICKY_GRAY_LIGHT, "Light gray"], [ColorOptions.STICKY_GRAY, "Gray"], [ColorOptions.STICKY_GRAY_UI3, "Gray"], [ColorOptions.STICKY_BLUE, "Blue"], [ColorOptions.STICKY_VIOLET, "Violet"], [ColorOptions.STICKY_RED, "Red"], [ColorOptions.STICKY_PINK, "Pink"], [ColorOptions.STICKY_ORANGE, "Orange"], [ColorOptions.STICKY_YELLOW, "Yellow"], [ColorOptions.STICKY_GREEN, "Green"], [ColorOptions.STICKY_COBALT, "Cobalt"], [ColorOptions.STICKY_INDIGO, "Indigo"], [ColorOptions.STICKY_TEAL, "Teal"], [ColorOptions.STICKY_OLIVE, "Olive"], [ColorOptions.HIGHLIGHT_RED, "Pink"], [ColorOptions.HIGHLIGHT_YELLOW, "Yellow"], [ColorOptions.HIGHLIGHT_GREEN, "Green"], [ColorOptions.HIGHLIGHT_BLUE, "Blue"], [ColorOptions.HIGHLIGHT_VIOLET, "Violet"], [ColorOptions.HIGHLIGHT_ORANGE, "Orange"], [ColorOptions.HIGHLIGHT_GRAY, "Gray"], [ColorOptions.HIGHLIGHT_WHITE, "White"], [ColorOptions.CODE_BLOCK_DRACULA, "Dracula"], [ColorOptions.CODE_BLOCK_DUOTONE_LIGHT, "Duotone light"], [ColorOptions.CODE_BLOCK_DUOTONE_SEA, "Duotone sea"], [ColorOptions.CODE_BLOCK_DUOTONE_SPACE, "Duotone space"], [ColorOptions.CODE_BLOCK_DUOTONE_EARTH, "Duotone earth"], [ColorOptions.CODE_BLOCK_DUOTONE_FOREST, "Duotone forest"]]);
let C = getFeatureFlags().figjam_ui3_color_palette_v2 ? [ColorOptions.BLACK, ColorOptions.GRAY_DARK, ColorOptions.RED, ColorOptions.ORANGE, ColorOptions.YELLOW, ColorOptions.GREEN, ColorOptions.TEAL, ColorOptions.BLUE, ColorOptions.VIOLET, ColorOptions.PINK, ColorOptions.WHITE] : [ColorOptions.BLACK, ColorOptions.GRAY_DARK, ColorOptions.GREEN, ColorOptions.TEAL, ColorOptions.BLUE, ColorOptions.VIOLET, ColorOptions.PINK, ColorOptions.RED, ColorOptions.ORANGE, ColorOptions.YELLOW, ColorOptions.WHITE];
let w = [ColorOptions.BLACK, ColorOptions.GRAY_DARK, ColorOptions.RED, ColorOptions.ORANGE, ColorOptions.YELLOW, ColorOptions.GREEN, ColorOptions.BLUE, ColorOptions.VIOLET, ColorOptions.WHITE];
let O = getFeatureFlags().figjam_ui3_color_palette_v2 ? [ColorOptions.GRAY, ColorOptions.GRAY_LIGHT, ColorOptions.RED_LIGHT, ColorOptions.ORANGE_LIGHT, ColorOptions.YELLOW_LIGHT, ColorOptions.GREEN_LIGHT, ColorOptions.TEAL_LIGHT, ColorOptions.BLUE_LIGHT, ColorOptions.VIOLET_LIGHT, ColorOptions.PINK_LIGHT] : [ColorOptions.GRAY, ColorOptions.GRAY_LIGHT, ColorOptions.GREEN_LIGHT, ColorOptions.TEAL_LIGHT, ColorOptions.BLUE_LIGHT, ColorOptions.VIOLET_LIGHT, ColorOptions.PINK_LIGHT, ColorOptions.RED_LIGHT, ColorOptions.ORANGE_LIGHT, ColorOptions.YELLOW_LIGHT];
let R = [ColorOptions.GRAY, ColorOptions.GRAY_LIGHT, ColorOptions.RED_LIGHT, ColorOptions.ORANGE_LIGHT, ColorOptions.YELLOW_LIGHT, ColorOptions.GREEN_LIGHT, ColorOptions.BLUE_LIGHT, ColorOptions.VIOLET_LIGHT];
export function $$L8() {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? O : R;
}
let $$P4 = [ColorOptions.BLACK, ColorOptions.RED, ColorOptions.ORANGE, ColorOptions.YELLOW, ColorOptions.GREEN, ColorOptions.BLUE, ColorOptions.VIOLET, ColorOptions.WHITE];
let D = [ColorOptions.STICKY_GRAY, ColorOptions.STICKY_RED, ColorOptions.STICKY_ORANGE, ColorOptions.STICKY_YELLOW, ColorOptions.STICKY_GREEN, ColorOptions.STICKY_BLUE, ColorOptions.STICKY_VIOLET, ColorOptions.STICKY_PINK, ColorOptions.STICKY_GRAY_LIGHT];
let k = getFeatureFlags().figjam_ui3_color_palette_v2 ? [ColorOptions.WHITE, ColorOptions.STICKY_GRAY_UI3, ColorOptions.STICKY_RED, ColorOptions.STICKY_ORANGE, ColorOptions.STICKY_YELLOW, ColorOptions.STICKY_GREEN, ColorOptions.STICKY_TEAL, ColorOptions.STICKY_BLUE, ColorOptions.STICKY_VIOLET, ColorOptions.STICKY_PINK] : [ColorOptions.WHITE, ColorOptions.STICKY_GRAY_UI3, ColorOptions.STICKY_GREEN, ColorOptions.STICKY_TEAL, ColorOptions.STICKY_BLUE, ColorOptions.STICKY_VIOLET, ColorOptions.STICKY_PINK, ColorOptions.STICKY_RED, ColorOptions.STICKY_ORANGE, ColorOptions.STICKY_YELLOW];
export function $$M5() {
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? k : D;
}
let $$F12 = [ColorOptions.HIGHLIGHT_GRAY, ColorOptions.HIGHLIGHT_RED, ColorOptions.HIGHLIGHT_ORANGE, ColorOptions.HIGHLIGHT_YELLOW, ColorOptions.HIGHLIGHT_GREEN, ColorOptions.HIGHLIGHT_BLUE, ColorOptions.HIGHLIGHT_VIOLET, ColorOptions.HIGHLIGHT_WHITE];
let j = [ColorOptions.CODE_BLOCK_DRACULA, ColorOptions.CODE_BLOCK_DUOTONE_LIGHT, ColorOptions.CODE_BLOCK_DUOTONE_SEA, ColorOptions.CODE_BLOCK_DUOTONE_EARTH, ColorOptions.CODE_BLOCK_DUOTONE_SPACE, ColorOptions.CODE_BLOCK_DUOTONE_FOREST];
export function $$U11() {
  let e = [neutralDarkColor3, uiGrayColor5, redSecondaryColor, redApricotColor2, greenMintColor].map(e => colorCSSManipulatorInstance.parse(e));
  let t = [ColorOptions.BLACK, ColorOptions.RED, ColorOptions.YELLOW, ColorOptions.GREEN, ColorOptions.BLUE].map(e => $$H1(e, "pencilUI3"));
  return AppStateTsApi?.uiState().showUI3Colors.getCopy() ? t : e;
}
export function $$B9(e) {
  switch (e) {
    case "widget":
    case "base":
      return (AppStateTsApi?.uiState().showUI3Colors.getCopy() ? C : w).map(e => $$H1(e, "base"));
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
export function $$V14(e, t, r = ColorOptions.CUSTOM) {
  let n;
  let a = colorCSSManipulatorInstance.format(e);
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
  return r ? colorCSSManipulatorInstance.parse(r) : void 0;
}
export function $$z10(e, t = "base", r = getI18nString("whiteboard.colors.custom")) {
  let n = Array.isArray(e) ? e[0] : e;
  let a = $$V14(n, t);
  "base" === t && a === ColorOptions.CUSTOM && (a = $$V14(n, "baseLight"));
  return function (e) {
    switch (e) {
      case ColorOptions.BLACK:
        return getI18nString("whiteboard.colors.black");
      case ColorOptions.WHITE:
        return getI18nString("whiteboard.colors.white");
      case ColorOptions.GRAY_DARK:
        return getI18nString("whiteboard.colors.dark_gray");
      case ColorOptions.GRAY:
        return getI18nString("whiteboard.colors.gray");
      case ColorOptions.GRAY_LIGHT:
        return getI18nString("whiteboard.colors.light_gray");
      case ColorOptions.YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case ColorOptions.YELLOW_LIGHT:
        return getI18nString("whiteboard.colors.light_yellow");
      case ColorOptions.ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case ColorOptions.ORANGE_LIGHT:
        return getI18nString("whiteboard.colors.light_orange");
      case ColorOptions.RED:
        return getI18nString("whiteboard.colors.red");
      case ColorOptions.RED_LIGHT:
        return getI18nString("whiteboard.colors.light_red");
      case ColorOptions.PINK:
        return getI18nString("whiteboard.colors.pink");
      case ColorOptions.PINK_LIGHT:
        return getI18nString("whiteboard.colors.light_pink");
      case ColorOptions.VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case ColorOptions.VIOLET_LIGHT:
        return getI18nString("whiteboard.colors.light_violet");
      case ColorOptions.INDIGO:
        return getI18nString("whiteboard.colors.indigo");
      case ColorOptions.INDIGO_LIGHT:
        return getI18nString("whiteboard.colors.light_indigo");
      case ColorOptions.COBALT:
        return getI18nString("whiteboard.colors.cobalt");
      case ColorOptions.COBALT_LIGHT:
        return getI18nString("whiteboard.colors.light_cobalt");
      case ColorOptions.BLUE:
        return getI18nString("whiteboard.colors.blue");
      case ColorOptions.BLUE_LIGHT:
        return getI18nString("whiteboard.colors.light_blue");
      case ColorOptions.TEAL:
        return getI18nString("whiteboard.colors.teal");
      case ColorOptions.TEAL_LIGHT:
        return getI18nString("whiteboard.colors.light_teal");
      case ColorOptions.GREEN:
        return getI18nString("whiteboard.colors.green");
      case ColorOptions.GREEN_LIGHT:
        return getI18nString("whiteboard.colors.light_green");
      case ColorOptions.OLIVE:
        return getI18nString("whiteboard.colors.olive");
      case ColorOptions.OLIVE_LIGHT:
        return getI18nString("whiteboard.colors.light_olive");
      case ColorOptions.STICKY_GRAY_LIGHT:
        return getI18nString("whiteboard.colors.light_gray");
      case ColorOptions.STICKY_GRAY:
      case ColorOptions.STICKY_GRAY_UI3:
        return getI18nString("whiteboard.colors.gray");
      case ColorOptions.STICKY_BLUE:
        return getI18nString("whiteboard.colors.blue");
      case ColorOptions.STICKY_VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case ColorOptions.STICKY_RED:
        return getI18nString("whiteboard.colors.red");
      case ColorOptions.STICKY_PINK:
        return getI18nString("whiteboard.colors.pink");
      case ColorOptions.STICKY_ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case ColorOptions.STICKY_YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case ColorOptions.STICKY_GREEN:
        return getI18nString("whiteboard.colors.green");
      case ColorOptions.STICKY_COBALT:
        return getI18nString("whiteboard.colors.cobalt");
      case ColorOptions.STICKY_INDIGO:
        return getI18nString("whiteboard.colors.indigo");
      case ColorOptions.STICKY_TEAL:
        return getI18nString("whiteboard.colors.teal");
      case ColorOptions.STICKY_OLIVE:
        return getI18nString("whiteboard.colors.olive");
      case ColorOptions.HIGHLIGHT_RED:
        return getI18nString("whiteboard.colors.pink");
      case ColorOptions.HIGHLIGHT_YELLOW:
        return getI18nString("whiteboard.colors.yellow");
      case ColorOptions.HIGHLIGHT_GREEN:
        return getI18nString("whiteboard.colors.green");
      case ColorOptions.HIGHLIGHT_BLUE:
        return getI18nString("whiteboard.colors.blue");
      case ColorOptions.HIGHLIGHT_VIOLET:
        return getI18nString("whiteboard.colors.violet");
      case ColorOptions.HIGHLIGHT_ORANGE:
        return getI18nString("whiteboard.colors.orange");
      case ColorOptions.HIGHLIGHT_GRAY:
        return getI18nString("whiteboard.colors.gray");
      case ColorOptions.HIGHLIGHT_WHITE:
        return getI18nString("whiteboard.colors.white");
      case ColorOptions.CODE_BLOCK_DRACULA:
      case ColorOptions.CODE_BLOCK_DUOTONE_EARTH:
      case ColorOptions.CODE_BLOCK_DUOTONE_FOREST:
      case ColorOptions.CODE_BLOCK_DUOTONE_LIGHT:
      case ColorOptions.CODE_BLOCK_DUOTONE_SEA:
      case ColorOptions.CODE_BLOCK_DUOTONE_SPACE:
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
  if (s === ColorOptions.NONE || s === ColorOptions.CUSTOM) return colorCSSManipulatorInstance.format(a);
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
  return ("light" === r ? n.LIGHT_DISPLAY.get(s) : n.DARK_DISPLAY.get(s)) ?? colorCSSManipulatorInstance.format(a);
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