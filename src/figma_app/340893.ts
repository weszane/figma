import { throwTypeError } from "../figma_app/465776";
import { ColorOptions, AppStateTsApi } from "../figma_app/763686";
import { buildUploadUrl } from "../figma_app/169182";
import { colorCSSManipulatorInstance } from "../905/989956";
import { xf, JI, Vq, B9, Pi } from "../figma_app/942553";
import { textSizes, iconSizes } from "../figma_app/285009";
import { BV, sE, Dy, aN, Ku, Cz } from "../figma_app/153399";
import { B } from "../figma_app/371825";
let u = [{
  color: ColorOptions.RED,
  palette: "base"
}, {
  color: ColorOptions.ORANGE,
  palette: "base"
}, {
  color: ColorOptions.YELLOW,
  palette: "base"
}, {
  color: ColorOptions.GREEN,
  palette: "base"
}, {
  color: ColorOptions.BLUE,
  palette: "base"
}, {
  color: ColorOptions.VIOLET,
  palette: "base"
}, {
  color: ColorOptions.RED_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.ORANGE_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.YELLOW_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.GREEN_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.BLUE_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.VIOLET_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.BLACK,
  palette: "base"
}, {
  color: ColorOptions.GRAY_DARK,
  palette: "base"
}, {
  color: ColorOptions.GRAY,
  palette: "baseLight"
}, {
  color: ColorOptions.GRAY_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.WHITE,
  palette: "base"
}];
let p = [{
  color: ColorOptions.GREEN,
  palette: "base"
}, {
  color: ColorOptions.TEAL,
  palette: "base"
}, {
  color: ColorOptions.BLUE,
  palette: "base"
}, {
  color: ColorOptions.VIOLET,
  palette: "base"
}, {
  color: ColorOptions.PINK,
  palette: "base"
}, {
  color: ColorOptions.RED,
  palette: "base"
}, {
  color: ColorOptions.ORANGE,
  palette: "base"
}, {
  color: ColorOptions.YELLOW,
  palette: "base"
}, {
  color: ColorOptions.GREEN_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.TEAL_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.BLUE_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.VIOLET_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.PINK_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.RED_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.ORANGE_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.YELLOW_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.BLACK,
  palette: "base"
}, {
  color: ColorOptions.GRAY_DARK,
  palette: "base"
}, {
  color: ColorOptions.GRAY,
  palette: "baseLight"
}, {
  color: ColorOptions.GRAY_LIGHT,
  palette: "baseLight"
}, {
  color: ColorOptions.WHITE,
  palette: "base"
}];
let _ = [ColorOptions.HIGHLIGHT_GRAY, ColorOptions.HIGHLIGHT_RED, ColorOptions.HIGHLIGHT_ORANGE, ColorOptions.HIGHLIGHT_YELLOW, ColorOptions.HIGHLIGHT_GREEN, ColorOptions.HIGHLIGHT_BLUE, ColorOptions.HIGHLIGHT_VIOLET];
let $$h0 = new Map([["pencilStrokeWidth1", textSizes[0]], ["pencilStrokeWidth2", textSizes[1]], ["pencilStrokeWidth3", textSizes[2]], ["pencilStrokeWidth4", textSizes[3]], ["pencilStrokeWidth5", textSizes[4]]]);
let $$m10 = new Map([["highlighterStrokeWidth1", iconSizes[0]], ["highlighterStrokeWidth2", iconSizes[1]], ["highlighterStrokeWidth3", iconSizes[2]], ["highlighterStrokeWidth4", iconSizes[3]], ["highlighterStrokeWidth5", iconSizes[4]]]);
let $$g1 = B;
function f(e, t) {
  let r = BV(e, t);
  let n = sE.get(e);
  return r && n ? [r, n] : null;
}
export function $$E2(e) {
  let t = [];
  switch (e) {
    case "PENCIL":
      {
        let e = AppStateTsApi?.uiState().showUI3Colors.getCopy() ? "pencilUI3" : "base";
        t = Dy.map(t => f(t, e));
        break;
      }
    case "WHITEBOARD_COLOR":
      t = AppStateTsApi?.uiState().showUI3Colors.getCopy() ? p.map(({
        color: e,
        palette: t
      }) => f(e, t)) : u.map(({
        color: e,
        palette: t
      }) => f(e, t));
      break;
    case "HIGHLIGHTER":
      t = (AppStateTsApi?.uiState().showUI3Colors.getCopy() ? aN : _).map(e => f(e, "highlight"));
      break;
    case "STICKY":
      t = Ku().map(e => f(e, "sticky"));
      break;
    default:
      throwTypeError(e);
  }
  return t.filter(e => null !== e);
}
export function $$y7(e, t, r) {
  let n = e.map(e => ({
    type: xf.presetColor,
    color: function (e, t) {
      let r = Cz(e, t, "light");
      return colorCSSManipulatorInstance.parse(r);
    }(e[0], r),
    presetIdentifier: e[1]
  }));
  t && n.push({
    type: xf.colorPicker
  });
  return n;
}
export function $$b3(e, t) {
  let r = e.map(e => ({
    type: xf.presetImage,
    presetIdentifier: e.name,
    imageIdentifier: e.image
  }));
  t && r.push({
    type: xf.imagePicker
  });
  return r;
}
let $$T13 = [{
  itemStringType: "iconAction",
  identifier: "SQUARE",
  iconImageURL: buildUploadUrl("f79598e8524ca4f2fbc9a962a5d7215fca02e159"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ELLIPSE",
  iconImageURL: buildUploadUrl("23396f7f2f6eef50a1e368b2f0f1cd241d23d3af"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "DIAMOND",
  iconImageURL: buildUploadUrl("6230a108b0c86154a1b0c1080d3e09b5cec4e613"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "TRIANGLE_UP",
  iconImageURL: buildUploadUrl("c9cc7ce416ca0ec4f70dc3b225f09d31615da5b8"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "TRIANGLE_DOWN",
  iconImageURL: buildUploadUrl("d4bda7bcec3cad2d69741a18cbdf63b8da82a99e"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ROUNDED_RECTANGLE",
  iconImageURL: buildUploadUrl("89d2895e6eb7b40fba803d4f672819c003cfb630"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "PARALLELOGRAM_RIGHT",
  iconImageURL: buildUploadUrl("b55ccaf54dec26402c19d2d568c2a59256018d93"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "PARALLELOGRAM_LEFT",
  iconImageURL: buildUploadUrl("42f42dcfa824b4e32e24969b933dffa9bf10084b"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ENG_DATABASE",
  iconImageURL: buildUploadUrl("9e251dc52c5cff0da404e87e08ccce028119432d"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ENG_QUEUE",
  iconImageURL: buildUploadUrl("af1de841856f01e74ad2920744377c0b2432fc97"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ENG_FILE",
  iconImageURL: buildUploadUrl("3aefd3083060dc3d1f8610d9ec5d9294d92395ec"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "ENG_FOLDER",
  iconImageURL: buildUploadUrl("15a91df8c3e46310b0ecf10f8d9de1564fbc0e1b"),
  flashesOnPress: !1
}];
let $$I9 = [{
  rowMaxSize: 5,
  items: [{
    itemStringType: "iconAction",
    identifier: "SQUARE",
    iconImageURL: buildUploadUrl("f79598e8524ca4f2fbc9a962a5d7215fca02e159"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ELLIPSE",
    iconImageURL: buildUploadUrl("5d2a40eb30657270a63dda0191efefc81efe585c"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "DIAMOND",
    iconImageURL: buildUploadUrl("7d5dc35d510f22d669e59168fb77ff2bc1dca3f5"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "TRIANGLE_UP",
    iconImageURL: buildUploadUrl("c9cc7ce416ca0ec4f70dc3b225f09d31615da5b8"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "TRIANGLE_DOWN",
    iconImageURL: buildUploadUrl("d4bda7bcec3cad2d69741a18cbdf63b8da82a99e"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ROUNDED_RECTANGLE",
    iconImageURL: buildUploadUrl("8ecac2dda9fec3ef20972f675a3eb7ef825f4ec9"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "CHEVRON",
    iconImageURL: buildUploadUrl("c4cbbfdcca61f44472539daa91eb2db99c3606aa"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "PARALLELOGRAM_RIGHT",
    iconImageURL: buildUploadUrl("b55ccaf54dec26402c19d2d568c2a59256018d93"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "PARALLELOGRAM_LEFT",
    iconImageURL: buildUploadUrl("566be5f9829c7ec766a44e632655828be486784c"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "TRAPEZOID",
    iconImageURL: buildUploadUrl("4d9265acf0a470ce44edc50a81921035b8f14737"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ENG_DATABASE",
    iconImageURL: buildUploadUrl("edbfcf182d37c2ae6f2edd642694b447d67d1c17"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ENG_QUEUE",
    iconImageURL: buildUploadUrl("a0a13dfe0484413fb7430cb5201b5c030c602b19"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ENG_FILE",
    iconImageURL: buildUploadUrl("3aedb45c910ae3cf954da70b9379b93c6f2cb46c"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ENG_FOLDER",
    iconImageURL: buildUploadUrl("15a91df8c3e46310b0ecf10f8d9de1564fbc0e1b"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "PREDEFINED_PROCESS",
    iconImageURL: buildUploadUrl("2071f1648a3cb5285a9a9acfc170dfc639c527b2"),
    flashesOnPress: !1
  }]
}, {
  rowMaxSize: 5,
  items: [{
    itemStringType: "iconAction",
    identifier: "DOCUMENT_SINGLE",
    iconImageURL: buildUploadUrl("8adb04e21ebdf1c4a754ee34e9c391ad43679cb0"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "DOCUMENT_MULTIPLE",
    iconImageURL: buildUploadUrl("c9bba363f92b5e680fdbcc1705bf33ac16d86879"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "MANUAL_INPUT",
    iconImageURL: buildUploadUrl("1810338f9f5baff03fca8e1378efdaf9d4e94831"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "HEXAGON",
    iconImageURL: buildUploadUrl("65c741ec0b9ad01ba61a2c0377a93806704e78fa"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "INTERNAL_STORAGE",
    iconImageURL: buildUploadUrl("2106da9efbaf96424b5dfa09ec6ce28df6928888"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "SUMMING_JUNCTION",
    iconImageURL: buildUploadUrl("272cccc350581728358e2af57a3e61363f8263f1"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "OR",
    iconImageURL: buildUploadUrl("a1386111045fdad7627e37b5e548e543caf28f29"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "SHIELD",
    iconImageURL: buildUploadUrl("d853729cb404936b83e1c59c09e6a295d2193754"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "PENTAGON",
    iconImageURL: buildUploadUrl("01a5db3521b65064ca726459887b4c6bbc0f9e8b"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "OCTAGON",
    iconImageURL: buildUploadUrl("735de94f7163c356720141d7a0482e71d17d645e"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "PLUS",
    iconImageURL: buildUploadUrl("82de45c7c45006028922aedc696ba1899eb0456d"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ARROW_LEFT",
    iconImageURL: buildUploadUrl("2f28f081aefab479fe9e088530271445e143695b"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "ARROW_RIGHT",
    iconImageURL: buildUploadUrl("0fce4e733bbdc50b20b522a42dc735ed592769fb"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "STAR",
    iconImageURL: buildUploadUrl("865c87b8ca42950da5aaf92fab6c27c59abfbe06"),
    flashesOnPress: !1
  }, {
    itemStringType: "iconAction",
    identifier: "SPEECH_BUBBLE",
    iconImageURL: buildUploadUrl("bde92f09f777e82b43ea8829c819cf54f7a62c8f"),
    flashesOnPress: !1
  }]
}];
let S = [{
  itemStringType: "iconAction",
  identifier: "pencilStrokeWidth1",
  iconImageURL: buildUploadUrl("14c3a9f0a217ea9b2352087f4fa9941f7633e354"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "pencilStrokeWidth2",
  iconImageURL: buildUploadUrl("78a20ca3c78da46c777767a5c2e48b8f08e34f6e"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "pencilStrokeWidth3",
  iconImageURL: buildUploadUrl("e138358eb8b3a07efda73c406e4c61cc3d9fe6d3"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "pencilStrokeWidth4",
  iconImageURL: buildUploadUrl("86d9302f61c6ae08fd157ee9f809410bbc9943a0"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "pencilStrokeWidth5",
  iconImageURL: buildUploadUrl("5501e15bcfa02ecf2a362c7ce4bf7de6af44e268"),
  flashesOnPress: !1
}];
let v = [{
  itemStringType: "divider",
  identifier: "VERTICAL_PENCIL_STROKE_DIVIDER",
  padding: JI.none,
  axis: Vq.horizontal
}, {
  itemStringType: "slider",
  identifier: "PRIMARY_PENCIL_OPACITY",
  start: .2,
  numIntervals: 5,
  step: .2,
  axis: B9.vertical,
  sliderStyle: Pi.gradient
}];
let A = [{
  itemStringType: "slider",
  identifier: "CONTEXTUAL_PENCIL_OPACITY",
  start: .2,
  numIntervals: 5,
  step: .2,
  axis: B9.horizontal,
  sliderStyle: Pi.gradient
}, {
  itemStringType: "divider",
  identifier: "HORIZONTAL_PENCIL_STROKE_DIVIDER",
  padding: JI.none,
  axis: Vq.vertical
}];
let $$x4 = [...S, ...v];
let $$N12 = [...A, ...S.slice().reverse()];
let $$C11 = [{
  itemStringType: "iconAction",
  identifier: "highlighterStrokeWidth1",
  iconImageURL: buildUploadUrl("c147f32cfbda91123406824c6d820ddce58f165a"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "highlighterStrokeWidth2",
  iconImageURL: buildUploadUrl("71078416a9e9151bf83f6db32d26955f77a66080"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "highlighterStrokeWidth3",
  iconImageURL: buildUploadUrl("c1837ca930ad93b0f6cc7e262e425757c34bca44"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "highlighterStrokeWidth4",
  iconImageURL: buildUploadUrl("67c151255ecd8c362abfe8fcfbb20e783c2bbab7"),
  flashesOnPress: !1
}, {
  itemStringType: "iconAction",
  identifier: "highlighterStrokeWidth5",
  iconImageURL: buildUploadUrl("14e77850a70a88a5099d521df0e485d2662fdc03"),
  flashesOnPress: !1
}];
let $$w5 = $$I9.flatMap(e => e.items.map(e => e.identifier));
let $$O6 = S.map(e => e.identifier);
let $$R8 = $$C11.map(e => e.identifier);
export const E5 = $$h0;
export const FC = $$g1;
export const LK = $$E2;
export const MC = $$b3;
export const T5 = $$x4;
export const U9 = $$w5;
export const X4 = $$O6;
export const bE = $$y7;
export const k = $$R8;
export const p6 = $$I9;
export const tj = $$m10;
export const xp = $$C11;
export const yp = $$N12;
export const zD = $$T13;