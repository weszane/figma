let $$n29 = /^(\d+:\d+)|(I(\d+:\d+;)*(\d+:\d+))|(T(\d+:\d+;+\d+:\d+;+\d+:\d+))$/;
let $$r23 = [{
  nodeType: "RECTANGLE",
  createMethod: "createRectangle"
}, {
  nodeType: "CANVAS",
  createMethod: "createPage"
}, {
  nodeType: "SLICE",
  createMethod: "createSlice"
}, {
  nodeType: "FRAME",
  createMethod: "createFrame"
}, {
  nodeType: "SYMBOL",
  createMethod: "createComponent"
}, {
  nodeType: "BOOLEAN_OPERATION",
  createMethod: "createBooleanOperation"
}, {
  nodeType: "VECTOR",
  createMethod: "createVector"
}, {
  nodeType: "STAR",
  createMethod: "createStar"
}, {
  nodeType: "LINE",
  createMethod: "createLine"
}, {
  nodeType: "ELLIPSE",
  createMethod: "createEllipse"
}, {
  nodeType: "REGULAR_POLYGON",
  createMethod: "createPolygon"
}, {
  nodeType: "TEXT",
  createMethod: "createText"
}, {
  nodeType: "STICKY",
  createMethod: "createSticky"
}, {
  nodeType: "CONNECTOR",
  createMethod: "createConnector"
}, {
  nodeType: "SHAPE_WITH_TEXT",
  createMethod: "createShapeWithText"
}, {
  nodeType: "CODE_BLOCK",
  createMethod: "createCodeBlock"
}, {
  nodeType: "SECTION",
  createMethod: "createSection"
}, {
  nodeType: "TABLE",
  createMethod: "createTable"
}, {
  nodeType: "SLIDE",
  createMethod: "createSlide"
}, {
  nodeType: "SLIDE_ROW",
  createMethod: "createSlideRow"
}];
let $$a13 = [{
  styleType: "FILL",
  createMethod: "createPaintStyle",
  getMethod: "getLocalPaintStyles",
  getMethodAsync: "getLocalPaintStylesAsync",
  moveMethod: "moveLocalPaintStyleAfter",
  moveFolderMethod: "moveLocalPaintFolderAfter"
}, {
  styleType: "TEXT",
  createMethod: "createTextStyle",
  getMethod: "getLocalTextStyles",
  getMethodAsync: "getLocalTextStylesAsync",
  moveMethod: "moveLocalTextStyleAfter",
  moveFolderMethod: "moveLocalTextFolderAfter"
}, {
  styleType: "GRID",
  createMethod: "createGridStyle",
  getMethod: "getLocalGridStyles",
  getMethodAsync: "getLocalGridStylesAsync",
  moveMethod: "moveLocalGridStyleAfter",
  moveFolderMethod: "moveLocalGridFolderAfter"
}, {
  styleType: "EFFECT",
  createMethod: "createEffectStyle",
  getMethod: "getLocalEffectStyles",
  getMethodAsync: "getLocalEffectStylesAsync",
  moveMethod: "moveLocalEffectStyleAfter",
  moveFolderMethod: "moveLocalEffectFolderAfter"
}];
let $$s19 = "localWidgetCodeMD5";
let o = ["CANVAS"];
let l = ["STICKY", "SHAPE_WITH_TEXT", "CONNECTOR", "CODE_BLOCK", "TABLE", "MEDIA"];
let d = ["SLIDE", "SLIDE_GRID", "SLIDE_ROW", "INTERACTIVE_SLIDE_ELEMENT"];
let c = ["WEBPAGE"];
let $$u22 = [...o, ...d, ...c, "SYMBOL"];
let $$p28 = [...l, ...d, ...c];
let $$m6 = [...o, ...l, ...c, "SYMBOL"];
let $$h25 = [...o, ...l, ...d];
let $$g20 = [...o, ...l, ...c, "SLIDE", "INTERACTIVE_SLIDE_ELEMENT"];
let $$f30 = .01;
let $$_5 = 20;
let $$A4 = -.5;
let $$y31 = 20;
let $$b18 = -3e4;
let $$v32 = 3e4;
let $$I14 = 0;
let $$E2 = 250;
let $$x9 = 100;
let $$S26 = 100;
let $$w17 = 100;
let $$C11 = 0;
let $$T12 = 1;
let $$k8 = 1;
let $$R16 = 100;
let $$N1 = 0;
let $$P27 = 1;
let $$O3 = 0;
let $$D24 = 100;
let $$L0 = -899;
let $$F10 = 900;
let $$M15 = 0;
let $$j7 = 1;
let $$U33 = "Glass effects can only be applied to non-group frames.";
let $$B21 = "Only one glass effect is allowed per node.";
export const $$ = $$L0;
export const $x = $$N1;
export const DW = $$E2;
export const Df = $$O3;
export const IF = $$A4;
export const Iz = $$_5;
export const J6 = $$m6;
export const Jk = $$j7;
export const Ku = $$k8;
export const Mo = $$x9;
export const NH = $$F10;
export const SU = $$C11;
export const U_ = $$T12;
export const Ut = $$a13;
export const V8 = $$I14;
export const VL = $$M15;
export const Wp = $$R16;
export const XX = $$w17;
export const cT = $$b18;
export const cz = $$s19;
export const e1 = $$g20;
export const eM = $$B21;
export const fx = $$u22;
export const h2 = $$r23;
export const hD = $$D24;
export const lm = $$h25;
export const mx = $$S26;
export const rY = $$P27;
export const tO = $$p28;
export const vs = $$n29;
export const wU = $$f30;
export const yR = $$y31;
export const yj = $$v32;
export const zd = $$U33;