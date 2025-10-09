import _require from "../905/946258";
import { sanitize } from "../vendor/197638";
import g from "lodash-es/camelCase";
import { GP } from "../formatter/863953";
import y from "../formatter/335834";
import v from "../formatter/998035";
import { QP } from "../vendor/335500";
import { xR } from "../vendor/558427";
import { getSingletonSceneGraph } from "../905/700578";
import { isNotNullish } from "../figma_app/95419";
import { Fullscreen, weakHandleHelpers, TrackType, LayoutSizingMode } from "../figma_app/763686";
import { throwTypeError, assert, throwError } from "../figma_app/465776";
import { permissionScopeHandler } from "../905/189185";
import { getClosestFontName, loadNonPluginFont } from "../905/426868";
import { positiveMod, clamp } from "../figma_app/492908";
import { labToRgb, labToXyz } from "../figma_app/273493";
import { Ay } from "../vendor/917855";
import { PW, KS } from "../2824/430873";
import { D as _$$D, h as _$$h } from "../2824/655106";
import { Or } from "../2824/651976";
import { HZ } from "../2824/891226";
import { b as _$$b } from "../2824/307439";
let r = {
  includeDefaultExport: !0,
  variantSerializationMode: "all"
};
let a = {
  accept: "accept",
  acceptcharset: "acceptCharset",
  "accept-charset": "acceptCharset",
  accesskey: "accessKey",
  action: "action",
  allowfullscreen: "allowFullScreen",
  alt: "alt",
  as: "as",
  async: "async",
  autocapitalize: "autoCapitalize",
  autocomplete: "autoComplete",
  autocorrect: "autoCorrect",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  autosave: "autoSave",
  capture: "capture",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  challenge: "challenge",
  charset: "charSet",
  checked: "checked",
  children: "children",
  cite: "cite",
  class: "className",
  classid: "classID",
  classname: "className",
  cols: "cols",
  colspan: "colSpan",
  content: "content",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  controls: "controls",
  controlslist: "controlsList",
  coords: "coords",
  crossorigin: "crossOrigin",
  dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
  data: "data",
  datetime: "dateTime",
  default: "default",
  defaultchecked: "defaultChecked",
  defaultvalue: "defaultValue",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback",
  download: "download",
  draggable: "draggable",
  enctype: "encType",
  enterkeyhint: "enterKeyHint",
  fetchpriority: "fetchPriority",
  for: "htmlFor",
  form: "form",
  formmethod: "formMethod",
  formaction: "formAction",
  formenctype: "formEncType",
  formnovalidate: "formNoValidate",
  formtarget: "formTarget",
  frameborder: "frameBorder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hrefLang",
  htmlfor: "htmlFor",
  httpequiv: "httpEquiv",
  "http-equiv": "httpEquiv",
  icon: "icon",
  id: "id",
  imagesizes: "imageSizes",
  imagesrcset: "imageSrcSet",
  inert: "inert",
  innerhtml: "innerHTML",
  inputmode: "inputMode",
  integrity: "integrity",
  is: "is",
  itemid: "itemID",
  itemprop: "itemProp",
  itemref: "itemRef",
  itemscope: "itemScope",
  itemtype: "itemType",
  keyparams: "keyParams",
  keytype: "keyType",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginwidth: "marginWidth",
  marginheight: "marginHeight",
  max: "max",
  maxlength: "maxLength",
  media: "media",
  mediagroup: "mediaGroup",
  method: "method",
  min: "min",
  minlength: "minLength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  nomodule: "noModule",
  nonce: "nonce",
  novalidate: "noValidate",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  playsinline: "playsInline",
  poster: "poster",
  preload: "preload",
  profile: "profile",
  radiogroup: "radioGroup",
  readonly: "readOnly",
  referrerpolicy: "referrerPolicy",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rows: "rows",
  rowspan: "rowSpan",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellCheck",
  src: "src",
  srcdoc: "srcDoc",
  srclang: "srcLang",
  srcset: "srcSet",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabIndex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "useMap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap",
  about: "about",
  accentheight: "accentHeight",
  "accent-height": "accentHeight",
  accumulate: "accumulate",
  additive: "additive",
  alignmentbaseline: "alignmentBaseline",
  "alignment-baseline": "alignmentBaseline",
  allowreorder: "allowReorder",
  alphabetic: "alphabetic",
  amplitude: "amplitude",
  arabicform: "arabicForm",
  "arabic-form": "arabicForm",
  ascent: "ascent",
  attributename: "attributeName",
  attributetype: "attributeType",
  autoreverse: "autoReverse",
  azimuth: "azimuth",
  basefrequency: "baseFrequency",
  baselineshift: "baselineShift",
  "baseline-shift": "baselineShift",
  baseprofile: "baseProfile",
  bbox: "bbox",
  begin: "begin",
  bias: "bias",
  by: "by",
  calcmode: "calcMode",
  capheight: "capHeight",
  "cap-height": "capHeight",
  clip: "clip",
  clippath: "clipPath",
  "clip-path": "clipPath",
  clippathunits: "clipPathUnits",
  cliprule: "clipRule",
  "clip-rule": "clipRule",
  color: "color",
  colorinterpolation: "colorInterpolation",
  "color-interpolation": "colorInterpolation",
  colorinterpolationfilters: "colorInterpolationFilters",
  "color-interpolation-filters": "colorInterpolationFilters",
  colorprofile: "colorProfile",
  "color-profile": "colorProfile",
  colorrendering: "colorRendering",
  "color-rendering": "colorRendering",
  contentscripttype: "contentScriptType",
  contentstyletype: "contentStyleType",
  cursor: "cursor",
  cx: "cx",
  cy: "cy",
  d: "d",
  datatype: "datatype",
  decelerate: "decelerate",
  descent: "descent",
  diffuseconstant: "diffuseConstant",
  direction: "direction",
  display: "display",
  divisor: "divisor",
  dominantbaseline: "dominantBaseline",
  "dominant-baseline": "dominantBaseline",
  dur: "dur",
  dx: "dx",
  dy: "dy",
  edgemode: "edgeMode",
  elevation: "elevation",
  enablebackground: "enableBackground",
  "enable-background": "enableBackground",
  end: "end",
  exponent: "exponent",
  externalresourcesrequired: "externalResourcesRequired",
  fill: "fill",
  fillopacity: "fillOpacity",
  "fill-opacity": "fillOpacity",
  fillrule: "fillRule",
  "fill-rule": "fillRule",
  filter: "filter",
  filterres: "filterRes",
  filterunits: "filterUnits",
  floodopacity: "floodOpacity",
  "flood-opacity": "floodOpacity",
  floodcolor: "floodColor",
  "flood-color": "floodColor",
  focusable: "focusable",
  fontfamily: "fontFamily",
  "font-family": "fontFamily",
  fontsize: "fontSize",
  "font-size": "fontSize",
  fontsizeadjust: "fontSizeAdjust",
  "font-size-adjust": "fontSizeAdjust",
  fontstretch: "fontStretch",
  "font-stretch": "fontStretch",
  fontstyle: "fontStyle",
  "font-style": "fontStyle",
  fontvariant: "fontVariant",
  "font-variant": "fontVariant",
  fontweight: "fontWeight",
  "font-weight": "fontWeight",
  format: "format",
  from: "from",
  fx: "fx",
  fy: "fy",
  g1: "g1",
  g2: "g2",
  glyphname: "glyphName",
  "glyph-name": "glyphName",
  glyphorientationhorizontal: "glyphOrientationHorizontal",
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphorientationvertical: "glyphOrientationVertical",
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphref: "glyphRef",
  gradienttransform: "gradientTransform",
  gradientunits: "gradientUnits",
  hanging: "hanging",
  horizadvx: "horizAdvX",
  "horiz-adv-x": "horizAdvX",
  horizoriginx: "horizOriginX",
  "horiz-origin-x": "horizOriginX",
  ideographic: "ideographic",
  imagerendering: "imageRendering",
  "image-rendering": "imageRendering",
  in2: "in2",
  in: "in",
  inlist: "inlist",
  intercept: "intercept",
  k1: "k1",
  k2: "k2",
  k3: "k3",
  k4: "k4",
  k: "k",
  kernelmatrix: "kernelMatrix",
  kernelunitlength: "kernelUnitLength",
  kerning: "kerning",
  keypoints: "keyPoints",
  keysplines: "keySplines",
  keytimes: "keyTimes",
  lengthadjust: "lengthAdjust",
  letterspacing: "letterSpacing",
  "letter-spacing": "letterSpacing",
  lightingcolor: "lightingColor",
  "lighting-color": "lightingColor",
  limitingconeangle: "limitingConeAngle",
  local: "local",
  markerend: "markerEnd",
  "marker-end": "markerEnd",
  markerheight: "markerHeight",
  markermid: "markerMid",
  "marker-mid": "markerMid",
  markerstart: "markerStart",
  "marker-start": "markerStart",
  markerunits: "markerUnits",
  markerwidth: "markerWidth",
  mask: "mask",
  maskcontentunits: "maskContentUnits",
  maskunits: "maskUnits",
  mathematical: "mathematical",
  mode: "mode",
  numoctaves: "numOctaves",
  offset: "offset",
  opacity: "opacity",
  operator: "operator",
  order: "order",
  orient: "orient",
  orientation: "orientation",
  origin: "origin",
  overflow: "overflow",
  overlineposition: "overlinePosition",
  "overline-position": "overlinePosition",
  overlinethickness: "overlineThickness",
  "overline-thickness": "overlineThickness",
  paintorder: "paintOrder",
  "paint-order": "paintOrder",
  panose1: "panose1",
  "panose-1": "panose1",
  pathlength: "pathLength",
  patterncontentunits: "patternContentUnits",
  patterntransform: "patternTransform",
  patternunits: "patternUnits",
  pointerevents: "pointerEvents",
  "pointer-events": "pointerEvents",
  points: "points",
  pointsatx: "pointsAtX",
  pointsaty: "pointsAtY",
  pointsatz: "pointsAtZ",
  popover: "popover",
  popovertarget: "popoverTarget",
  popovertargetaction: "popoverTargetAction",
  prefix: "prefix",
  preservealpha: "preserveAlpha",
  preserveaspectratio: "preserveAspectRatio",
  primitiveunits: "primitiveUnits",
  property: "property",
  r: "r",
  radius: "radius",
  refx: "refX",
  refy: "refY",
  renderingintent: "renderingIntent",
  "rendering-intent": "renderingIntent",
  repeatcount: "repeatCount",
  repeatdur: "repeatDur",
  requiredextensions: "requiredExtensions",
  requiredfeatures: "requiredFeatures",
  resource: "resource",
  restart: "restart",
  result: "result",
  results: "results",
  rotate: "rotate",
  rx: "rx",
  ry: "ry",
  scale: "scale",
  security: "security",
  seed: "seed",
  shaperendering: "shapeRendering",
  "shape-rendering": "shapeRendering",
  slope: "slope",
  spacing: "spacing",
  specularconstant: "specularConstant",
  specularexponent: "specularExponent",
  speed: "speed",
  spreadmethod: "spreadMethod",
  startoffset: "startOffset",
  stddeviation: "stdDeviation",
  stemh: "stemh",
  stemv: "stemv",
  stitchtiles: "stitchTiles",
  stopcolor: "stopColor",
  "stop-color": "stopColor",
  stopopacity: "stopOpacity",
  "stop-opacity": "stopOpacity",
  strikethroughposition: "strikethroughPosition",
  "strikethrough-position": "strikethroughPosition",
  strikethroughthickness: "strikethroughThickness",
  "strikethrough-thickness": "strikethroughThickness",
  string: "string",
  stroke: "stroke",
  strokedasharray: "strokeDasharray",
  "stroke-dasharray": "strokeDasharray",
  strokedashoffset: "strokeDashoffset",
  "stroke-dashoffset": "strokeDashoffset",
  strokelinecap: "strokeLinecap",
  "stroke-linecap": "strokeLinecap",
  strokelinejoin: "strokeLinejoin",
  "stroke-linejoin": "strokeLinejoin",
  strokemiterlimit: "strokeMiterlimit",
  "stroke-miterlimit": "strokeMiterlimit",
  strokewidth: "strokeWidth",
  "stroke-width": "strokeWidth",
  strokeopacity: "strokeOpacity",
  "stroke-opacity": "strokeOpacity",
  suppresscontenteditablewarning: "suppressContentEditableWarning",
  suppresshydrationwarning: "suppressHydrationWarning",
  surfacescale: "surfaceScale",
  systemlanguage: "systemLanguage",
  tablevalues: "tableValues",
  targetx: "targetX",
  targety: "targetY",
  textanchor: "textAnchor",
  "text-anchor": "textAnchor",
  textdecoration: "textDecoration",
  "text-decoration": "textDecoration",
  textlength: "textLength",
  textrendering: "textRendering",
  "text-rendering": "textRendering",
  to: "to",
  transform: "transform",
  transformorigin: "transformOrigin",
  "transform-origin": "transformOrigin",
  typeof: "typeof",
  u1: "u1",
  u2: "u2",
  underlineposition: "underlinePosition",
  "underline-position": "underlinePosition",
  underlinethickness: "underlineThickness",
  "underline-thickness": "underlineThickness",
  unicode: "unicode",
  unicodebidi: "unicodeBidi",
  "unicode-bidi": "unicodeBidi",
  unicoderange: "unicodeRange",
  "unicode-range": "unicodeRange",
  unitsperem: "unitsPerEm",
  "units-per-em": "unitsPerEm",
  unselectable: "unselectable",
  valphabetic: "vAlphabetic",
  "v-alphabetic": "vAlphabetic",
  values: "values",
  vectoreffect: "vectorEffect",
  "vector-effect": "vectorEffect",
  version: "version",
  vertadvy: "vertAdvY",
  "vert-adv-y": "vertAdvY",
  vertoriginx: "vertOriginX",
  "vert-origin-x": "vertOriginX",
  vertoriginy: "vertOriginY",
  "vert-origin-y": "vertOriginY",
  vhanging: "vHanging",
  "v-hanging": "vHanging",
  videographic: "vIdeographic",
  "v-ideographic": "vIdeographic",
  viewbox: "viewBox",
  viewtarget: "viewTarget",
  visibility: "visibility",
  vmathematical: "vMathematical",
  "v-mathematical": "vMathematical",
  vocab: "vocab",
  widths: "widths",
  wordspacing: "wordSpacing",
  "word-spacing": "wordSpacing",
  writingmode: "writingMode",
  "writing-mode": "writingMode",
  x1: "x1",
  x2: "x2",
  x: "x",
  xchannelselector: "xChannelSelector",
  xheight: "xHeight",
  "x-height": "xHeight",
  xlinkactuate: "xlinkActuate",
  "xlink:actuate": "xlinkActuate",
  xlinkarcrole: "xlinkArcrole",
  "xlink:arcrole": "xlinkArcrole",
  xlinkhref: "xlinkHref",
  "xlink:href": "xlinkHref",
  xlinkrole: "xlinkRole",
  "xlink:role": "xlinkRole",
  xlinkshow: "xlinkShow",
  "xlink:show": "xlinkShow",
  xlinktitle: "xlinkTitle",
  "xlink:title": "xlinkTitle",
  xlinktype: "xlinkType",
  "xlink:type": "xlinkType",
  xmlbase: "xmlBase",
  "xml:base": "xmlBase",
  xmllang: "xmlLang",
  "xml:lang": "xmlLang",
  xmlns: "xmlns",
  "xml:space": "xmlSpace",
  xmlnsxlink: "xmlnsXlink",
  "xmlns:xlink": "xmlnsXlink",
  xmlspace: "xmlSpace",
  y1: "y1",
  y2: "y2",
  y: "y",
  ychannelselector: "yChannelSelector",
  z: "z",
  zoomandpan: "zoomAndPan"
};
function n(e) {
  return e.replace(/-([a-z])/g, (e, t) => t.toUpperCase());
}
function o(e) {
  return e?.nodeType === Node.ELEMENT_NODE;
}
function l(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class d {
  advance() {
    this.position++;
    this.currentChar = this.position < this.input.length ? this.input[this.position] : null;
  }
  skipWhitespace() {
    for (; null !== this.currentChar && /\s/.test(this.currentChar);) this.advance();
  }
  parseProperty() {
    let e = "";
    for (this.skipWhitespace(); null !== this.currentChar && ":" !== this.currentChar;) {
      e += this.currentChar;
      this.advance();
    }
    return e.trim();
  }
  parseValue() {
    let e = "";
    ":" === this.currentChar && this.advance();
    this.skipWhitespace();
    let t = null;
    let i = 0;
    for (; null !== this.currentChar;) {
      if (";" === this.currentChar && !t && 0 === i) {
        this.advance();
        break;
      }
      if (('"' === this.currentChar || "'" === this.currentChar) && (null === t || t === this.currentChar)) {
        let e = !1;
        let i = 1;
        for (; this.position - i >= 0 && "\\" === this.input[this.position - i];) {
          e = !e;
          i++;
        }
        e || (t = null === t ? this.currentChar : null);
      }
      "(" !== this.currentChar || t ? ")" !== this.currentChar || t || (i = Math.max(0, i - 1)) : i++;
      e += this.currentChar;
      this.advance();
    }
    return e.trim();
  }
  parse() {
    let e = [];
    for (; null !== this.currentChar && null !== this.currentChar;) {
      let t = this.parseProperty();
      if ("" === t) {
        ";" === this.currentChar && this.advance();
        continue;
      }
      let i = this.parseValue();
      e.push({
        property: t,
        value: i
      });
    }
    return e;
  }
  constructor(e) {
    l(this, "input", void 0);
    l(this, "position", void 0);
    l(this, "currentChar", void 0);
    this.input = e;
    this.position = 0;
    this.currentChar = this.input.length > 0 ? this.input[0] : null;
  }
}
function c(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let u = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
function p(e = "#EEE") {
  let t = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1 1"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <rect width="1" height="1" fill="${e}" />
    </svg>
  `.trim();
  let i = btoa(Array.from(new TextEncoder().encode(t)).map(e => String.fromCharCode(e)).join(""));
  return `data:image/svg+xml;base64,${i}`;
}
let h = {
  disableSvgImports: !1,
  singleLineSvgImports: !1,
  svgElements: new Map(),
  svgPathData: new Map(),
  extractEntireSvgs: !1
};
let m = class {
  htmlToJsx(e) {
    if (!e.trim()) return {
      jsx: ""
    };
    let t = sanitize(e, {
      USE_PROFILES: {
        html: !0,
        svg: !0,
        svgFilters: !0
      },
      ALLOW_UNKNOWN_PROTOCOLS: !0
    });
    let i = this.parser.parseFromString(t, "text/html");
    return {
      jsx: this.convertChildrenToJsx(i.body.childNodes).trim()
    };
  }
  convertChildrenToJsx(e) {
    return Array.from(e).map(e => this.convertNodeToJsx(e)).join("");
  }
  convertNodeToJsx(e) {
    let {
      domNodeToReactStr,
      markupImageOption
    } = this.options;
    if (domNodeToReactStr) {
      let i = o(e) ? e.attributes : void 0;
      let r = domNodeToReactStr({
        node: e,
        attributes: i
      });
      if (r) return r;
    }
    if (e.nodeType === Node.TEXT_NODE) return e.textContent ?? "";
    if (e.nodeType === Node.COMMENT_NODE) return "";
    if (o(e)) {
      let t = e.localName;
      if (t.includes("-") || "body" === t) return this.convertChildrenToJsx(e.childNodes);
      if ("img" === t) {
        let t;
        let r = e.getAttribute("src");
        let s = r?.match(/^blob:.*#filename=(.+\.svg)$/);
        if (s || (s = r?.match(/\/_assets\/v2\/([0-9a-fA-F]+\.svg)$/)), s && (t = s[1]), t && !this.options.extractEntireSvgs) {
          let e = this.options.svgElements?.get(t);
          if (o(e)) return this.convertSvgNodeToJsx(e);
        }
        "placeholder-svg" === markupImageOption && e.setAttribute("src", p());
      }
      if ("svg" === t) return this.convertSvgNodeToJsx(e);
      let r = this.transformAttributes(e);
      let s = r ? ` ${r}` : "";
      let a = "&nbsp;" === e.innerHTML ? e.innerHTML : this.convertChildrenToJsx(e.childNodes);
      return u.has(t) || !a ? `<${t}${s} />` : `<${t}${s}>${a}</${t}>`;
    }
    return "";
  }
  convertSvgNodeToJsx(e) {
    e.removeAttribute("xmlns");
    "visible" === e.getAttribute("overflow") && e.removeAttribute("overflow");
    e.style?.display === "block" && (e.classList.add("block"), e.style.display = "");
    let t = e.getAttribute("width");
    let i = e.getAttribute("height");
    "100%" === t && "100%" === i ? (e.removeAttribute("width"), e.removeAttribute("height"), e.classList.add("size-full")) : "100%" === t ? (e.removeAttribute("width"), e.classList.add("w-full")) : "100%" === i && (e.removeAttribute("height"), e.classList.add("h-full"));
    this.options.disableSvgImports || this.extractSvgPathData(e);
    let r = this.transformAttributes(e);
    let s = r ? ` ${r}` : "";
    let a = "&nbsp;" === e.innerHTML ? e.innerHTML : this.convertChildrenToJsx(e.childNodes);
    let n = `<svg${s}>${a}</svg>`;
    for (let e of this.options.svgPathData.keys()) {
      let t = `${f}.${e}`;
      let i = `d="${t}"`;
      let r = `d={${t}}`;
      n = n.replace(RegExp(i, "g"), r);
    }
    return n;
  }
  extractSvgPathData(e) {
    if ("path" === e.localName) {
      let t = e.getAttribute("d");
      if (t && t.length > 28) {
        let i = "p" + (new TextEncoder().encode(t).reduce((e, t) => -((e ^ t) * 0x9e3779b1), 0) >>> 2).toString(16).slice(0, 8);
        let r = `${f}.${i}`;
        e.setAttribute("d", r);
        this.options.singleLineSvgImports || this.options.svgPathData.set(i, t);
      }
    }
    for (let t of e.children) this.extractSvgPathData(t);
  }
  transformAttributes(e) {
    let t = [];
    for (let i of Array.from(e.attributes)) {
      let e = i.name;
      let r = i.value.replace(/'/g, "\\'").replace(/"/g, "'");
      if ("style" === e) {
        let e = this.convertStyleStringToObject(r);
        e && t.push(`style=${e}`);
        continue;
      }
      let s = (e in a ? a[e] : null) || (e.startsWith("data-") || e.startsWith("aria-") ? e : n(e));
      "" === r ? t.push(s) : t.push(`${s}="${r}"`);
    }
    t.sort((e, t) => {
      let i = e.split("=")[0];
      let r = t.split("=")[0];
      return i.localeCompare(r);
    });
    return t.join(" ");
  }
  convertStyleStringToObject(e) {
    if (!e.trim()) return "";
    let t = new d(e).parse().reduce((e, t) => {
      let {
        property,
        value
      } = t;
      property && value && (property.startsWith("--") ? e[property] = value : "background-image" === property && "placeholder-svg" === this.options.markupImageOption ? e.backgroundImage = `url(${p()})` : e[n(property).replace(/^-webkit-/, "Webkit").replace(/^-moz-/, "Moz").replace(/^-ms-/, "ms").replace(/^-o-/, "O")] = value);
      return e;
    }, {});
    let i = [];
    let r = !1;
    for (let [e, s] of Object.entries(t)) {
      s = this.options.stylePlaceholders?.get(s) ?? s;
      e.startsWith("--") ? (r = !0, i.push(`"${e}": "${s}"`)) : i.push(`${e}: "${s}"`);
    }
    return "{{" + i.join(", ") + "}" + (r ? " as React.CSSProperties }" : "}");
  }
  constructor(e) {
    c(this, "options", void 0);
    c(this, "parser", new DOMParser());
    this.options = {
      ...h,
      ...(e ?? {})
    };
  }
};
let f = "svgPaths";
function x(e) {
  let t = g(e).replace(/^./, e => e.toUpperCase());
  t = t.replace(/[^a-zA-Z0-9_]/g, "");
  /^[a-zA-Z]/.test(t) || (t = `Component${t}`);
  return t;
}
async function k(e) {
  let t = e.split("\n");
  let i = "";
  for (let e of t) {
    /^(function|interface|export)\b/.test(e) && (i += "\n");
    i += "\n" + e;
  }
  return (i = await GP(i, {
    parser: "typescript",
    printWidth: 120,
    plugins: [y, v]
  })).trim();
}
function w(e, t = 3) {
  return parseFloat(e.toFixed(t));
}
function F(e, t = 3) {
  return 0 === w(e, t);
}
let S = Object.fromEntries(Object.entries({
  "slate-50": "#f8fafc",
  "slate-100": "#f1f5f9",
  "slate-200": "#e2e8f0",
  "slate-300": "#cbd5e1",
  "slate-400": "#94a3b8",
  "slate-500": "#64748b",
  "slate-600": "#475569",
  "slate-700": "#334155",
  "slate-800": "#1e293b",
  "slate-900": "#0f172a",
  "slate-950": "#020617",
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
  "gray-950": "#030712",
  "zinc-50": "#fafafa",
  "zinc-100": "#f4f4f5",
  "zinc-200": "#e4e4e7",
  "zinc-300": "#d4d4d8",
  "zinc-400": "#a1a1aa",
  "zinc-500": "#71717a",
  "zinc-600": "#52525b",
  "zinc-700": "#3f3f46",
  "zinc-800": "#27272a",
  "zinc-900": "#18181b",
  "zinc-950": "#09090b",
  "neutral-50": "#fafafa",
  "neutral-100": "#f5f5f5",
  "neutral-200": "#e5e5e5",
  "neutral-300": "#d4d4d4",
  "neutral-400": "#a3a3a3",
  "neutral-500": "#737373",
  "neutral-600": "#525252",
  "neutral-700": "#404040",
  "neutral-800": "#262626",
  "neutral-900": "#171717",
  "neutral-950": "#0a0a0a",
  "stone-50": "#fafaf9",
  "stone-100": "#f5f5f4",
  "stone-200": "#e7e5e4",
  "stone-300": "#d6d3d1",
  "stone-400": "#a8a29e",
  "stone-500": "#78716c",
  "stone-600": "#57534e",
  "stone-700": "#44403c",
  "stone-800": "#292524",
  "stone-900": "#1c1917",
  "stone-950": "#0c0a09",
  "red-50": "#fef2f2",
  "red-100": "#fee2e2",
  "red-200": "#fecaca",
  "red-300": "#fca5a5",
  "red-400": "#f87171",
  "red-500": "#ef4444",
  "red-600": "#dc2626",
  "red-700": "#b91c1c",
  "red-800": "#991b1b",
  "red-900": "#7f1d1d",
  "red-950": "#450a0a",
  "orange-50": "#fff7ed",
  "orange-100": "#ffedd5",
  "orange-200": "#fed7aa",
  "orange-300": "#fdba74",
  "orange-400": "#fb923c",
  "orange-500": "#f97316",
  "orange-600": "#ea580c",
  "orange-700": "#c2410c",
  "orange-800": "#9a3412",
  "orange-900": "#7c2d12",
  "orange-950": "#431407",
  "amber-50": "#fffbeb",
  "amber-100": "#fef3c7",
  "amber-200": "#fde68a",
  "amber-300": "#fcd34d",
  "amber-400": "#fbbf24",
  "amber-500": "#f59e0b",
  "amber-600": "#d97706",
  "amber-700": "#b45309",
  "amber-800": "#92400e",
  "amber-900": "#78350f",
  "amber-950": "#451a03",
  "yellow-50": "#fefce8",
  "yellow-100": "#fef9c3",
  "yellow-200": "#fef08a",
  "yellow-300": "#fde047",
  "yellow-400": "#facc15",
  "yellow-500": "#eab308",
  "yellow-600": "#ca8a04",
  "yellow-700": "#a16207",
  "yellow-800": "#854d0e",
  "yellow-900": "#713f12",
  "yellow-950": "#422006",
  "lime-50": "#f7fee7",
  "lime-100": "#ecfccb",
  "lime-200": "#d9f99d",
  "lime-300": "#bef264",
  "lime-400": "#a3e635",
  "lime-500": "#84cc16",
  "lime-600": "#65a30d",
  "lime-700": "#4d7c0f",
  "lime-800": "#3f6212",
  "lime-900": "#365314",
  "lime-950": "#1a2e05",
  "green-50": "#f0fdf4",
  "green-100": "#dcfce7",
  "green-200": "#bbf7d0",
  "green-300": "#86efac",
  "green-400": "#4ade80",
  "green-500": "#22c55e",
  "green-600": "#16a34a",
  "green-700": "#15803d",
  "green-800": "#166534",
  "green-900": "#14532d",
  "green-950": "#052e16",
  "emerald-50": "#ecfdf5",
  "emerald-100": "#d1fae5",
  "emerald-200": "#a7f3d0",
  "emerald-300": "#6ee7b7",
  "emerald-400": "#34d399",
  "emerald-500": "#10b981",
  "emerald-600": "#059669",
  "emerald-700": "#047857",
  "emerald-800": "#065f46",
  "emerald-900": "#064e3b",
  "emerald-950": "#022c22",
  "teal-50": "#f0fdfa",
  "teal-100": "#ccfbf1",
  "teal-200": "#99f6e4",
  "teal-300": "#5eead4",
  "teal-400": "#2dd4bf",
  "teal-500": "#14b8a6",
  "teal-600": "#0d9488",
  "teal-700": "#0f766e",
  "teal-800": "#115e59",
  "teal-900": "#134e4a",
  "teal-950": "#042f2e",
  "cyan-50": "#ecfeff",
  "cyan-100": "#cffafe",
  "cyan-200": "#a5f3fc",
  "cyan-300": "#67e8f9",
  "cyan-400": "#22d3ee",
  "cyan-500": "#06b6d4",
  "cyan-600": "#0891b2",
  "cyan-700": "#0e7490",
  "cyan-800": "#155e75",
  "cyan-900": "#164e63",
  "cyan-950": "#083344",
  "sky-50": "#f0f9ff",
  "sky-100": "#e0f2fe",
  "sky-200": "#bae6fd",
  "sky-300": "#7dd3fc",
  "sky-400": "#38bdf8",
  "sky-500": "#0ea5e9",
  "sky-600": "#0284c7",
  "sky-700": "#0369a1",
  "sky-800": "#075985",
  "sky-900": "#0c4a6e",
  "sky-950": "#082f49",
  "blue-50": "#eff6ff",
  "blue-100": "#dbeafe",
  "blue-200": "#bfdbfe",
  "blue-300": "#93c5fd",
  "blue-400": "#60a5fa",
  "blue-500": "#3b82f6",
  "blue-600": "#2563eb",
  "blue-700": "#1d4ed8",
  "blue-800": "#1e40af",
  "blue-900": "#1e3a8a",
  "blue-950": "#172554",
  "indigo-50": "#eef2ff",
  "indigo-100": "#e0e7ff",
  "indigo-200": "#c7d2fe",
  "indigo-300": "#a5b4fc",
  "indigo-400": "#818cf8",
  "indigo-500": "#6366f1",
  "indigo-600": "#4f46e5",
  "indigo-700": "#4338ca",
  "indigo-800": "#3730a3",
  "indigo-900": "#312e81",
  "indigo-950": "#1e1b4b",
  "violet-50": "#f5f3ff",
  "violet-100": "#ede9fe",
  "violet-200": "#ddd6fe",
  "violet-300": "#c4b5fd",
  "violet-400": "#a78bfa",
  "violet-500": "#8b5cf6",
  "violet-600": "#7c3aed",
  "violet-700": "#6d28d9",
  "violet-800": "#5b21b6",
  "violet-900": "#4c1d95",
  "violet-950": "#2e1065",
  "purple-50": "#faf5ff",
  "purple-100": "#f3e8ff",
  "purple-200": "#e9d5ff",
  "purple-300": "#d8b4fe",
  "purple-400": "#c084fc",
  "purple-500": "#a855f7",
  "purple-600": "#9333ea",
  "purple-700": "#7e22ce",
  "purple-800": "#6b21a8",
  "purple-900": "#581c87",
  "purple-950": "#3b0764",
  "fuchsia-50": "#fdf4ff",
  "fuchsia-100": "#fae8ff",
  "fuchsia-200": "#f5d0fe",
  "fuchsia-300": "#f0abfc",
  "fuchsia-400": "#e879f9",
  "fuchsia-500": "#d946ef",
  "fuchsia-600": "#c026d3",
  "fuchsia-700": "#a21caf",
  "fuchsia-800": "#86198f",
  "fuchsia-900": "#701a75",
  "fuchsia-950": "#4a044e",
  "pink-50": "#fdf2f8",
  "pink-100": "#fce7f3",
  "pink-200": "#fbcfe8",
  "pink-300": "#f9a8d4",
  "pink-400": "#f472b6",
  "pink-500": "#ec4899",
  "pink-600": "#db2777",
  "pink-700": "#be185d",
  "pink-800": "#9d174d",
  "pink-900": "#831843",
  "pink-950": "#500724",
  "rose-50": "#fff1f2",
  "rose-100": "#ffe4e6",
  "rose-200": "#fecdd3",
  "rose-300": "#fda4af",
  "rose-400": "#fb7185",
  "rose-500": "#f43f5e",
  "rose-600": "#e11d48",
  "rose-700": "#be123c",
  "rose-800": "#9f1239",
  "rose-900": "#881337",
  "rose-950": "#4c0519"
}).map(([e, t]) => [t, e]));
function L(e) {
  let t = document.createElement("div");
  let i = e.replace(/((?:rgb)a?|(?:hsl)|(?:lab)|(?:hwb)|(?:lch)|(?:color)|(?:gray))\(([^)]+)\)/, (e, t, i) => {
    let r = t;
    let s = i;
    if (s.includes("/") && ("rgb" === r || "hsl" === r)) {
      ("rgb" === r || "hsl" === r) && (r = `${r}a`);
      let [e, t] = s.split("/");
      if (t?.includes("%")) {
        let i = parseFloat(t) / 100;
        s = `${e} / ${i}`;
      }
      s = s.replace("/", ",");
    }
    let a = s.replace(/,/g, " ");
    if ("rgba" === r) {
      let [e, t, i, r] = a.split(/\s+/);
      a = [parseInt(e), parseInt(t), parseInt(i), w(parseFloat(r))].join(",");
    } else if ("rgb" === r) {
      let [e, t, i] = a.split(/\s+/);
      a = [parseInt(e), parseInt(t), parseInt(i)].join(",");
    } else r.startsWith("hsl") && (a = a.replace(/\s+/g, ","));
    return `${r}(${a})`;
  });
  t.style.color = i;
  let r = t.style.color;
  if (r.startsWith("rgb(")) {
    let e = r.slice(4, -1).split(/[\s,]+/).map(e => parseInt(e, 10));
    r = `#${e.map(e => e.toString(16).padStart(2, "0")).join("")}`;
  }
  return r.replace(/\s+/g, "");
}
function N(e, t, i) {
  let r = L(i);
  let s = S[r];
  if (s) {
    t.classList.add(`${e}-${s}`);
    return;
  }
  t.classList.add(`${e}-[${r}]`);
}
function C(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let E = class e {
  parse() {
    if (!this.value) return [];
    let e = [];
    for (; this.i < this.value.length;) {
      let t = this.value.charAt(this.i);
      if ("#" === t) {
        e.push(this.handleHexColors());
        continue;
      }
      if ("-" === t && "-" === this.value.charAt(this.i + 1)) {
        e.push(this.handleCSSVariables());
        continue;
      }
      if ('"' === t || "'" === t) {
        e.push(this.handleQuotedStrings(t));
        continue;
      }
      if (/[a-zA-Z]/.test(t)) {
        e.push(this.handleFunctionsAndIdentifiers());
        continue;
      }
      if (/[0-9.-]/.test(t)) {
        e.push(this.handleNumbersWithUnits());
        continue;
      }
      if (/[+\-*\/]/.test(t)) {
        e.push(this.handleOperators());
        continue;
      }
      if (/\s/.test(t)) {
        this.i++;
        continue;
      }
      this.i++;
    }
    return e;
  }
  handleHexColors() {
    let e = "#";
    for (this.i++; this.i < this.value.length && /[0-9a-fA-F]/.test(this.value.charAt(this.i));) {
      e += this.value.charAt(this.i);
      this.i++;
    }
    return {
      type: "color",
      value: e
    };
  }
  handleCSSVariables() {
    let e = "";
    for (this.i += 2; this.i < this.value.length && /[a-zA-Z\-]/.test(this.value.charAt(this.i));) {
      e += this.value.charAt(this.i);
      this.i++;
    }
    return {
      type: "variable",
      value: e
    };
  }
  handleQuotedStrings(e) {
    let t = "";
    for (this.i++; this.i < this.value.length && (this.value.charAt(this.i) !== e || "\\" === this.value.charAt(this.i - 1));) "\\" === this.value.charAt(this.i) && this.value.charAt(this.i + 1) === e ? (t += e, this.i += 2) : (t += this.value.charAt(this.i), this.i++);
    this.i++;
    return {
      type: "string",
      value: t
    };
  }
  handleFunctionsAndIdentifiers() {
    let t = "";
    for (; this.i < this.value.length && /[a-zA-Z]/.test(this.value.charAt(this.i));) {
      t += this.value.charAt(this.i);
      this.i++;
    }
    if (!(this.i < this.value.length) || "(" !== this.value.charAt(this.i)) return {
      type: "ident",
      value: t
    };
    {
      let i = 1;
      let r = "";
      for (this.i++; this.i < this.value.length && i > 0;) {
        "(" === this.value.charAt(this.i) && i++;
        ")" === this.value.charAt(this.i) && i--;
        i > 0 && (r += this.value.charAt(this.i));
        this.i++;
      }
      return {
        type: "function",
        value: t.toLowerCase(),
        children: new e(r).parse()
      };
    }
  }
  handleNumbersWithUnits() {
    let e = "";
    if ("-" === this.value.charAt(this.i) && !/[0-9]/.test(this.value.charAt(this.i + 1))) return {
      type: "operator",
      value: this.value.charAt(this.i++)
    };
    for (; this.i < this.value.length && /[0-9.-]/.test(this.value.charAt(this.i));) {
      e += this.value.charAt(this.i);
      this.i++;
    }
    let t = "";
    for (; this.i < this.value.length && /[a-zA-Z%]/.test(this.value.charAt(this.i));) {
      t += this.value.charAt(this.i);
      this.i++;
    }
    return t ? {
      type: "dimension",
      value: e,
      unit: t
    } : {
      type: "number",
      value: e
    };
  }
  handleOperators() {
    return {
      type: "operator",
      value: this.value.charAt(this.i++)
    };
  }
  constructor(e) {
    C(this, "value", void 0);
    C(this, "i", void 0);
    this.value = e.trim();
    this.i = 0;
  }
};
let T = {
  0: "0",
  100: "full",
  25: "1/4",
  50: "1/2",
  75: "3/4"
};
let A = {
  0: "0",
  1: "px",
  10: "2.5",
  112: "28",
  12: "3",
  128: "32",
  14: "3.5",
  144: "36",
  16: "4",
  160: "40",
  176: "44",
  192: "48",
  2: "0.5",
  20: "5",
  208: "52",
  224: "56",
  24: "6",
  240: "60",
  256: "64",
  28: "7",
  288: "72",
  32: "8",
  320: "80",
  36: "9",
  384: "96",
  4: "1",
  40: "10",
  44: "11",
  48: "12",
  56: "14",
  6: "1.5",
  64: "16",
  8: "2",
  80: "20",
  96: "24"
};
function I(e, t) {
  let i = document.createElement("iframe");
  try {
    i.style.display = "none";
    document.body.appendChild(i);
    let r = i.contentDocument || i.contentWindow?.document;
    if (!r) throw Error("Failed to access iframe document");
    let s = document.createElement("style");
    s.textContent = e;
    r.head.appendChild(s);
    let a = s.sheet;
    if (!a) throw Error("Failed to access CSSStyleSheet object");
    t(a);
  } finally {
    document.body.removeChild(i);
  }
}
function $(e, t = !1) {
  let i = Array.from(e.match(/([^,]*(\(.+?\))[^,]*)|([^,\(]+)/g) ?? []);
  let r = [];
  i.forEach(e => {
    let i;
    let s = Array.from(e.match(/(\S*(\(.+?\)))|([^\s\(]+)/g) ?? []);
    let a = [];
    s.forEach(e => {
      let r = L(e);
      if (r) {
        if (t && !i) {
          i = r;
          return;
        }
        a.push(r);
      } else a.push(e);
    });
    i && a.push(i);
    r.push(a.join("_"));
  });
  return r.join(",");
}
let P = {
  left: 2,
  right: 2,
  top: 2,
  bottom: 2
};
function R(e, t, i, r) {
  let s = new E(r).parse();
  if (0 !== s.length) {
    if (1 === s.length && s[0]) {
      let {
        type,
        value,
        unit
      } = s[0];
      let o = parseFloat(value);
      let l = P[t] ?? 3;
      let d = isNaN(o) ? value : w(o, l);
      switch (type) {
        case "dimension":
          if (0 === d) {
            i.classList.add(`${e}-0`);
            return;
          }
          if ("px" === unit && value in A) {
            i.classList.add(`${e}-${A[value]}`);
            return;
          }
          if ("%" === unit && value in T) {
            i.classList.add(`${e}-${T[value]}`);
            return;
          }
          i.classList.add(`${e}-[${d}${unit}]`);
          return;
        case "number":
          if (0 === d) {
            i.classList.add(`${e}-0`);
            return;
          }
          i.classList.add(`${e}-[${d}]`);
          return;
        case "ident":
          if ("auto" === value) return;
          i.classList.add(`${e}-${value}`);
          return;
      }
    }
    i.style.setProperty(t, r);
  }
}
let D = new Map();
for (let e of [{
  shorthand: "padding",
  properties: ["padding-top", "padding-right", "padding-bottom", "padding-left"]
}, {
  shorthand: "margin",
  properties: ["margin-top", "margin-right", "margin-bottom", "margin-left"]
}, {
  shorthand: "border-width",
  properties: ["border-top-width", "border-right-width", "border-bottom-width", "border-left-width"]
}, {
  shorthand: "border-style",
  properties: ["border-top-style", "border-right-style", "border-bottom-style", "border-left-style"]
}, {
  shorthand: "border-color",
  properties: ["border-top-color", "border-right-color", "border-bottom-color", "border-left-color"]
}, {
  shorthand: "border",
  properties: ["border-top", "border-right", "border-bottom", "border-left"]
}, {
  shorthand: "border-radius",
  properties: ["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius"]
}, {
  shorthand: "inset",
  properties: ["top", "right", "bottom", "left"]
}, {
  shorthand: "overflow",
  properties: ["overflow-x", "overflow-y"]
}, {
  shorthand: "mask-position",
  properties: ["-webkit-mask-position-x", "-webkit-mask-position-y"],
  joinWithSpace: !0
}]) for (let t of e.properties) D.set(t, e);
function M(e) {
  return e.replaceAll("'", "\\\\'");
}
function W(e) {
  let t = e.split(":");
  if (t.length > 1) {
    let e = t.slice(1).join(":");
    if (H.some(t => t.test(e))) return !0;
  }
  return H.some(t => t.test(e));
}
let H = [/^text-/, /^font-/, /^tracking-/, /^leading-/, /^break-/, /^hyphens-/, /^whitespace-/, /^cursor-/, /^pointer-events-/, /^writing-/, /^list-(inside|outside|none|disc|decimal)$/, /^italic$/, /^not-italic$/, /^underline$/, /^no-underline$/, /^line-through$/, /^uppercase$/, /^lowercase$/, /^capitalize$/, /^normal-case$/];
let j = {
  "background-image": (e, t) => {
    e.style.setProperty("background-image", M(t));
  },
  "mask-image": (e, t) => {
    e.style.setProperty("mask-image", M(t));
  },
  "border-image": (e, t) => {
    e.style.setProperty("border-image", M(t));
  },
  "list-style-image": (e, t) => {
    e.style.setProperty("list-style-image", M(t));
  },
  "font-variation-settings": (e, t) => {
    "normal" !== t && e.style.setProperty("font-variation-settings", t);
  }
};
let V = {
  ...j,
  "background-color": (e, t) => {
    N("bg", e, t);
  },
  "align-content": (e, t) => {
    switch (t) {
      case "flex-start":
      case "flex-end":
      case "space-between":
      case "space-around":
      case "space-evenly":
        e.classList.add(`content-${t.split("-")[1]}`);
        break;
      default:
        e.classList.add(`content-${t}`);
    }
  },
  "aspect-ratio": (e, t) => {
    let i = t.replace(/\s+/g, "");
    let r = `aspect-[${i}]`;
    switch (i) {
      case "auto":
        r = "aspect-auto";
        break;
      case "1/1":
        r = "aspect-square";
        break;
      case "16/9":
        r = "aspect-video";
    }
    e.classList.add(r);
  },
  columns: (e, t) => {
    let i = parseInt(t, 10);
    if (!isNaN(i) && i >= 1 && i <= 8) {
      e.classList.add(`columns-${i}`);
      return;
    }
    e.classList.add(`columns-[${t}]`);
  },
  "background-size": (e, t) => {
    ["cover", "auto", "contain"].includes(t) ? e.classList.add(`bg-${t}`) : e.classList.add(`bg-size-[${$(t)}]`);
  },
  "break-after": (e, t) => {
    e.classList.add(`break-after-${t}`);
  },
  "break-before": (e, t) => {
    e.classList.add(`break-before-${t}`);
  },
  "break-inside": (e, t) => {
    e.classList.add(`break-inside-${t}`);
  },
  "box-decoration-break": (e, t) => {
    e.classList.add(`box-decoration-${t}`);
  },
  "box-sizing": (e, t) => {
    let i = t;
    switch (t) {
      case "border-box":
        i = "border";
        break;
      case "content-box":
        i = "content";
    }
    e.classList.add(`box-${i}`);
  },
  display: (e, t) => {
    ("block" !== t || "DIV" !== e.tagName) && e.classList.add("none" === t ? "hidden" : t);
  },
  float: (e, t) => {
    switch (t) {
      case "inline-start":
        e.classList.add("float-start");
        break;
      case "inline-end":
        e.classList.add("float-end");
        break;
      default:
        e.classList.add(`float-${t}`);
    }
  },
  clear: (e, t) => {
    switch (t) {
      case "inline-start":
        e.classList.add("clear-start");
        break;
      case "inline-end":
        e.classList.add("clear-end");
        break;
      default:
        e.classList.add(`clear-${t}`);
    }
  },
  isolation: (e, t) => {
    "isolate" === t && e.classList.add("isolate");
    "auto" === t && e.classList.add("isolation-auto");
  },
  "object-fit": (e, t) => {
    e.classList.add(`object-${t}`);
  },
  "object-position": (e, t) => {
    let i = t.replace(/\s+/g, "-");
    e.classList.add(`object-${i}`);
  },
  overflow: (e, t) => {
    ("DIV" !== e.tagName || "visible" !== t) && e.classList.add(`overflow-${t}`);
  },
  "overflow-x": (e, t) => {
    ("DIV" !== e.tagName || "visible" !== t) && e.classList.add(`overflow-x-${t}`);
  },
  "overflow-y": (e, t) => {
    ("DIV" !== e.tagName || "visible" !== t) && e.classList.add(`overflow-y-${t}`);
  },
  "overscroll-behavior": (e, t) => {
    e.classList.add(`overscroll-${t}`);
  },
  "overscroll-behavior-x": (e, t) => {
    e.classList.add(`overscroll-x-${t}`);
  },
  "overscroll-behavior-y": (e, t) => {
    e.classList.add(`overscroll-y-${t}`);
  },
  position: (e, t) => {
    e.classList.add(t);
  },
  visibility: (e, t) => {
    e.classList.add(t);
  },
  "z-index": (e, t) => {
    switch (t) {
      case "0":
      case "10":
      case "20":
      case "30":
      case "40":
      case "50":
      case "auto":
        e.classList.add(`z-${t}`);
        return;
    }
    e.classList.add(`z-[${t}]`);
  },
  inset: (e, t) => {
    R("inset", "inset", e, t);
  },
  left: (e, t) => {
    R("left", "left", e, t);
  },
  right: (e, t) => {
    R("right", "right", e, t);
  },
  top: (e, t) => {
    R("top", "top", e, t);
  },
  bottom: (e, t) => {
    R("bottom", "bottom", e, t);
  },
  width: (e, t) => {
    R("w", "width", e, t);
  },
  height: (e, t) => {
    R("h", "height", e, t);
  },
  "min-width": (e, t) => {
    R("min-w", "min-width", e, t);
  },
  "min-height": (e, t) => {
    R("min-h", "min-height", e, t);
  },
  "max-width": (e, t) => {
    R("max-w", "max-width", e, t);
  },
  "max-height": (e, t) => {
    R("max-h", "max-height", e, t);
  },
  "padding-top": (e, t) => {
    R("pt", "padding-top", e, t);
  },
  "padding-right": (e, t) => {
    R("pr", "padding-right", e, t);
  },
  "padding-bottom": (e, t) => {
    R("pb", "padding-bottom", e, t);
  },
  "padding-left": (e, t) => {
    R("pl", "padding-left", e, t);
  },
  "margin-top": (e, t) => {
    R("mt", "margin-top", e, t);
  },
  "margin-right": (e, t) => {
    R("mr", "margin-right", e, t);
  },
  "margin-bottom": (e, t) => {
    R("mb", "margin-bottom", e, t);
  },
  "margin-left": (e, t) => {
    R("ml", "margin-left", e, t);
  },
  gap: (e, t) => {
    R("gap", "gap", e, t);
  },
  "row-gap": (e, t) => {
    R("gap", "gap", e, t);
  },
  "column-gap": (e, t) => {
    R("gap", "gap", e, t);
  },
  color: (e, t) => {
    N("text", e, t);
  },
  background: (e, t) => {
    N("bg", e, t);
  },
  "border-color": (e, t) => {
    N("border", e, t);
  },
  "border-radius": (e, t) => {
    if ("DIV" !== e.tagName || "inherit" !== t) switch (t) {
      case "4px":
        e.classList.add("rounded");
        break;
      case "2px":
        e.classList.add("rounded-sm");
        break;
      case "6px":
        e.classList.add("rounded-md");
        break;
      case "8px":
        e.classList.add("rounded-lg");
        break;
      case "12px":
        e.classList.add("rounded-xl");
        break;
      case "16px":
        e.classList.add("rounded-2xl");
        break;
      case "24px":
        e.classList.add("rounded-3xl");
        break;
      default:
        e.classList.add(`rounded-[${t}]`);
    }
  },
  border: (e, t) => {
    N("border", e, t);
  },
  "border-top-color": (e, t) => {
    N("border-t", e, t);
  },
  "border-right-color": (e, t) => {
    N("border-r", e, t);
  },
  "border-bottom-color": (e, t) => {
    N("border-b", e, t);
  },
  "border-left-color": (e, t) => {
    N("border-l", e, t);
  },
  "outline-color": (e, t) => {
    N("outline", e, t);
  },
  outline: (e, t) => {
    N("outline", e, t);
  },
  "text-decoration-color": (e, t) => {
    N("decoration", e, t);
  },
  "caret-color": (e, t) => {
    N("caret", e, t);
  },
  "accent-color": (e, t) => {
    N("accent", e, t);
  },
  fill: (e, t) => {
    N("fill", e, t);
  },
  stroke: (e, t) => {
    N("stroke", e, t);
  },
  "column-rule-color": (e, t) => {
    let i = L(t);
    e.classList.add(`[column-rule-color:${i}]`);
  },
  "column-rule": (e, t) => {
    let i = L(t);
    e.classList.add(`[column-rule:${i}]`);
  },
  "box-shadow": (e, t) => {
    if ("none" === t) {
      e.classList.add("shadow-none");
      return;
    }
    let i = $(t, !0);
    e.classList.add(`shadow-[${i}]`);
  },
  "line-height": (e, t) => {
    if ("1" === t) {
      e.classList.add("leading-none");
      return;
    }
    e.classList.add(`leading-[${t}]`);
  },
  "letter-spacing": (e, t) => {
    "0" !== t && "normal" !== t && "0px" !== t && e.classList.add(`tracking-[${t}]`);
  },
  "margin-inline-start": (e, t) => {
    R("ms", "margin-inline-start", e, t);
  },
  "text-shadow": (e, t) => {
    let i = $(t);
    e.classList.add(`[text-shadow:${i}]`);
  },
  "white-space": (e, t) => {
    t.includes(" ") ? e.style.setProperty("white-space", t) : e.classList.add(`whitespace-${t}`);
  },
  "text-wrap-mode": (e, t) => {
    switch (t) {
      case "wrap":
        return;
      case "nowrap":
        e.classList.add("text-nowrap");
        return;
      default:
        e.classList.add(`[text-wrap-mode:${t}]'`);
    }
  },
  "text-wrap": (e, t) => {
    switch (t) {
      case "wrap":
        return;
      case "nowrap":
        e.classList.add("text-nowrap");
        return;
      default:
        e.classList.add(`[text-wrap:${t}]'`);
    }
  },
  "white-space-collapse": (e, t) => {
    let i = $(t);
    if ("collapse" !== i || "DIV" !== e.tagName) {
      if ("preserve" === i) {
        e.classList.add("whitespace-pre");
        return;
      }
      e.classList.add(`[white-space-collapse:${i}]`);
    }
  },
  transform: (e, t) => {
    if ("none" === t) {
      e.classList.add("transform-none");
      return;
    }
    function i() {
      let i = t.match(/^translateX\(([^)]+)\)\s+translateY\(([^)]+)\)$/);
      let r = t.match(/^translateX\(([^)]+)\)$/);
      let s = t.match(/^translateY\(([^)]+)\)$/);
      if (i) {
        let [, t, r] = i;
        e.classList.add(`translate-x-[${t}]`);
        e.classList.add(`translate-y-[${r}]`);
      } else if (r) {
        let [, t] = r;
        e.classList.add(`translate-x-[${t}]`);
      } else if (s) {
        let [, t] = s;
        e.classList.add(`translate-y-[${t}]`);
      } else e.classList.add(`transform-[${t.replace(/\s+/g, "_")}]`);
    }
    if (!t.startsWith("matrix(")) {
      i();
      return;
    }
    try {
      let r = t.match(/matrix\(\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*,\s*([^,]+)\s*\)/);
      if (!r || 7 !== r.length) {
        i();
        return;
      }
      let [, s, a, n, o, l, d] = r.map(e => parseFloat(e));
      let {
        rotationDeg,
        skewXDeg,
        scaleX,
        scaleY,
        translateX,
        translateY
      } = function (e) {
        let [[t, i, r], [s, a, n]] = e;
        let o = Math.sqrt(t * t + s * s);
        let l = Math.sqrt(i * i + a * a);
        t * a - s * i < 0 && (l = -l);
        let d = Math.atan2(s, t);
        let c = (360 + 180 / Math.PI * d) % 360;
        let u = Math.atan((t * Math.cos(d) - s * Math.sin(d)) * (i * Math.cos(d) - a * Math.sin(d)) + (t * Math.sin(d) + s * Math.cos(d)) * (i * Math.sin(d) + a * Math.cos(d)));
        return {
          rotationDeg: c,
          skewXDeg: F(u) ? 0 : (360 + 180 / Math.PI * u) % 360,
          scaleX: o,
          scaleY: l,
          translateX: r,
          translateY: n
        };
      }([[s, n, l], [a, o, d]]);
      F(rotationDeg) || e.classList.add(`rotate-[${w(rotationDeg)}deg]`);
      F(skewXDeg) || e.classList.add(`skew-x-[${w(skewXDeg)}deg]`);
      F(scaleX - 1) && F(scaleY - 1) || (F(scaleX - scaleY) ? e.classList.add(`scale-[${w(100 * scaleX)}%]`) : (F(scaleX - 1) || e.classList.add(`scale-x-[${w(100 * scaleX)}%]`), F(scaleY - 1) || e.classList.add(`scale-y-[${w(100 * scaleY)}%]`)));
      F(l) || e.classList.add(`translate-x-[${w(translateX)}px]`);
      F(d) || e.classList.add(`translate-y-[${w(translateY)}px]`);
    } catch (e) {
      i();
      return;
    }
  },
  flex: (e, t) => {
    if ("0 0 auto" === t) {
      e.classList.add("flex-none");
      return;
    }
    if ("1 1 auto" === t) {
      e.classList.add("flex-auto");
      return;
    }
    if ("0 1 auto" === t) {
      e.classList.add("flex-initial");
      return;
    }
    if ("1 0 0px" === t) {
      e.classList.add("grow");
      e.classList.add("shrink-0");
      e.classList.add("basis-0");
      return;
    }
    if ("none" === t) {
      e.classList.add("flex-none");
      return;
    }
    e.classList.add(`flex-[${t.replace(/\s+/g, "_")}]`);
  },
  "mask-clip": (e, t) => {
    switch (t) {
      case "border-box":
        e.classList.add("mask-clip-border");
        break;
      case "padding-box":
        e.classList.add("mask-clip-padding");
        break;
      case "content-box":
        e.classList.add("mask-clip-content");
        break;
      case "fill-box":
        e.classList.add("mask-clip-fill");
        break;
      case "stroke-box":
        e.classList.add("mask-clip-stroke");
        break;
      case "view-box":
        e.classList.add("mask-clip-view");
        break;
      case "no-clip":
        e.classList.add("mask-no-clip");
        break;
      default:
        e.classList.add(`[mask-clip:${t.replace(/\s+/g, "_")}]`);
    }
  },
  "mask-composite": (e, t) => {
    switch (t) {
      case "add":
        e.classList.add("mask-add");
        break;
      case "subtract":
        e.classList.add("mask-subtract");
        break;
      case "intersect":
        e.classList.add("mask-intersect");
        break;
      case "exclude":
        e.classList.add("mask-exclude");
        break;
      default:
        e.classList.add(`[mask-composite:${t.replace(/\s+/g, "_")}]`);
    }
  },
  "mask-repeat": (e, t) => {
    switch (t) {
      case "repeat":
        e.classList.add("mask-repeat");
        break;
      case "no-repeat":
        e.classList.add("mask-no-repeat");
        break;
      case "repeat-x":
        e.classList.add("mask-repeat-x");
        break;
      case "repeat-y":
        e.classList.add("mask-repeat-y");
        break;
      case "space":
        e.classList.add("mask-repeat-space");
        break;
      case "round":
        e.classList.add("mask-repeat-round");
        break;
      default:
        e.classList.add(`[mask-repeat:${t.replace(/\s+/g, "_")}]`);
    }
  },
  "mask-mode": (e, t) => {
    switch (t) {
      case "alpha":
        e.classList.add("mask-alpha");
        break;
      case "luminance":
        e.classList.add("mask-luminance");
        break;
      case "match-source":
        e.classList.add("mask-match");
        break;
      default:
        e.classList.add(`[mask-mode:${t.replace(/\s+/g, "_")}]`);
    }
  },
  "mask-position": (e, t) => {
    e.classList.add(`mask-position-[${t.replace(/\s+/g, "_")}]`);
  },
  "mask-size": (e, t) => {
    e.classList.add(`mask-size-[${t.replace(/\s+/g, "_")}]`);
  },
  "--letter-spacing": () => {},
  "text-box-edge": () => {},
  "text-box-trim": () => {}
};
let _ = {
  px: ["pl", "pr"],
  py: ["pt", "pb"],
  mx: ["ml", "mr"],
  my: ["mt", "mb"],
  size: ["w", "h"],
  inset: ["top", "right", "bottom", "left"]
};
function B(e) {
  return e.replaceAll("'", "\\\\'");
}
function U(e) {
  if (!e || e.startsWith("#")) return e;
  let t = e.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/);
  if (!t) return e;
  let i = parseInt(t[1], 10);
  let r = parseInt(t[2], 10);
  let s = parseInt(t[3], 10);
  let a = void 0 !== t[4] ? parseFloat(t[4]) : 1;
  let n = "#" + (0 | i).toString(16).padStart(2, "0") + (0 | r).toString(16).padStart(2, "0") + (0 | s).toString(16).padStart(2, "0");
  return 1 === a ? n : n + Math.round(255 * a).toString(16).padStart(2, "0");
}
function G(e) {
  let t = parseFloat(e.endsWith("%") ? e.replace("%", "") : e);
  return .01 > Math.abs(t - Math.round(t)) ? Math.round(t).toString() + "%" : `[${parseFloat(t.toFixed(3))}%]`;
}
function X(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let q = ["background-image", "mask-image", "border-image", "list-style-image"];
let J = class {
  cleanResetText() {
    for (let e of Array.from(this.bodyElement.querySelectorAll(".textContents"))) e instanceof HTMLElement && (e.classList.remove("textContents"), e.querySelectorAll(":scope ul > li").forEach(e => {
      e instanceof HTMLElement && e.classList.add("list-disc");
    }));
    for (let e of Array.from(this.bodyElement.querySelectorAll(".textClip"))) e instanceof HTMLElement && (e.classList.remove("textClip"), ["bg-clip-border", "bg-clip-padding", "bg-clip-content", "bg-clip-text"].some(t => e.classList.contains(t)) || (e.classList.add("bg-clip-text"), e.style.webkitTextFillColor = "transparent"));
  }
  cleanStyle(e) {
    let t = Array.from(e.cssRules);
    let i = [];
    for (let e of t) {
      if (!(e instanceof CSSStyleRule)) {
        i.push(e.cssText);
        continue;
      }
      this.seenSelectorTexts.add(e.selectorText);
      let t = [];
      let r = function (e) {
        let t = {};
        let i = new Set();
        for (let r = 0; r < e.length; r++) {
          let s = e[r];
          if (!s || i.has(s)) continue;
          let a = e.getPropertyValue(s);
          let n = D.get(s);
          if (!n) {
            t[s] = a;
            continue;
          }
          let o = !0;
          for (let t of n.properties) {
            let i = e.getPropertyValue(t);
            if (i !== a) {
              if (n.joinWithSpace) a += ` ${i}`;else {
                o = !1;
                break;
              }
            }
          }
          if (!o) {
            t[s] = a;
            continue;
          }
          for (let e of n.properties) i.add(e);
          t[n.shorthand] = a;
        }
        return t;
      }(e.style);
      let s = new Set();
      for (let [i, a] of Object.entries(r)) {
        let r = Array.from(this.bodyElement.querySelectorAll(e.selectorText));
        if (!r.length) continue;
        let n = this.cleanupRules[i];
        if (!n && !this.options.inlineStyles) {
          t.push({
            propertyName: i,
            propertyValue: a
          });
          continue;
        }
        for (let e of r) e instanceof HTMLElement && (n ? (n(e, a), s.add(e)) : this.options.inlineStyles && e.style.setProperty(i, a));
      }
      this.options.forTailwind && function (e) {
        for (let t of e) for (let [e, i] of Object.entries(_)) {
          let r = Array.from(t.classList);
          let s = [];
          for (let e of i) {
            let t = r.filter(t => t.startsWith(`${e}-`));
            1 === t.length && s.push({
              cls: t[0],
              prefix: e,
              value: t[0].substring(e.length + 1)
            });
          }
          if (s.length !== i.length) continue;
          let {
            value,
            allSame
          } = s.reduce((e, t) => e.allSame ? null == e.value ? {
            value: t.value,
            allSame: !0
          } : e.value !== t.value ? {
            ...e,
            allSame: !1
          } : {
            ...e,
            allSame: !0
          } : e, {
            value: void 0,
            allSame: !0
          });
          if (allSame) for (let i of (t.classList.add(`${e}-${value}`), s)) t.classList.remove(i.cls);
        }
      }(s);
      t.length > 0 ? i.push(`${e.selectorText} {${t.map(({
        propertyName: e,
        propertyValue: t
      }) => `${e}: ${t};`).join(" ")}}`) : /^\.[a-zA-Z_][a-zA-Z0-9_-]*$/.test(e.selectorText) && this.deletedSimpleClasses.add(e.selectorText.slice(1));
    }
    return i.join("\n");
  }
  getUpdatedHtml() {
    let e = new Set(Array.from(this.deletedSimpleClasses).filter(e => {
      for (let t of this.seenSelectorTexts) if (t !== `.${e}` && t.includes(e)) return !1;
      return !0;
    }));
    let t = i => {
      let r = Array.from(i.classList).filter(t => {
        let i = e.has(t);
        let r = this.seenSelectorTexts.has(`.${t}`);
        return !i && (r || this.options.forTailwind);
      });
      0 === r.length ? i.removeAttribute("class") : i.className = r.join(" ");
      let s = Array.from(i.children);
      for (let e of (!("DIV" === i.tagName && r.includes("relative")) || 0 !== i.children.length || i.style.top || i.style.left || i.style.bottom || i.style.right || i.style.inset || i.classList.remove("relative"), !function (e) {
        let t = e.style.getPropertyValue("width").match(/calc\(1px \* \(\(var\(--transform-inner-height\) \* (\d+(?:\.\d+)?)\) \+ \(var\(--transform-inner-width\) \* (\d+(?:\.\d+)?)\)\)\)/);
        let i = e.style.getPropertyValue("height").match(/calc\(1px \* \(\(var\(--transform-inner-width\) \* (\d+(?:\.\d+)?)\) \+ \(var\(--transform-inner-height\) \* (\d+(?:\.\d+)?)\)\)\)/);
        if (!t || !i) return;
        let r = e.style.getPropertyValue("--transform-inner-width");
        let s = e.style.getPropertyValue("--transform-inner-height");
        if (!r || !s) {
          e.classList.contains("contents") && (e.style.removeProperty("width"), e.style.removeProperty("height"));
          return;
        }
        if (t && 3 === t.length) {
          let i = parseFloat(t[1]);
          let a = parseFloat(t[2]);
          let n = w(parseFloat(s) * i + parseFloat(r) * a);
          e.classList.add(`w-[${n}px]`);
        }
        if (i && 3 === i.length) {
          let t = parseFloat(i[1]);
          let a = parseFloat(i[2]);
          let n = w(parseFloat(r) * t + parseFloat(s) * a);
          e.classList.add(`h-[${n}px]`);
        }
        e.style.removeProperty("--transform-inner-width");
        e.style.removeProperty("--transform-inner-height");
        e.style.removeProperty("width");
        e.style.removeProperty("height");
      }(i), i.getAttribute("aria-label") === i.innerText && i.removeAttribute("aria-label"), i.classList.contains("whitespace-pre") && !i.classList.contains("text-nowrap") && (i.classList.remove("whitespace-pre"), i.innerText?.match(/\s{2,}/) && i.classList.add("whitespace-pre-wrap")), i.hasAttribute("class") && i.getAttribute("class")?.trim() === "" && i.removeAttribute("class"), s)) e instanceof HTMLElement && t(e);
      "DIV" === i.tagName && 2 === r.length && r.includes("absolute") && r.includes("inset-0") && 1 === i.children.length && !i.nextSibling && !i.previousSibling && i.replaceWith(i.children[0]);
    };
    t(this.bodyElement);
    return this.bodyElement.innerHTML;
  }
  constructor(e, t) {
    X(this, "options", void 0);
    X(this, "bodyElement", void 0);
    X(this, "seenSelectorTexts", void 0);
    X(this, "deletedSimpleClasses", void 0);
    X(this, "cleanupRules", void 0);
    this.options = t;
    this.seenSelectorTexts = new Set();
    this.deletedSimpleClasses = new Set();
    this.bodyElement = new DOMParser().parseFromString(e, "text/html").body;
    this.cleanupRules = t.forTailwind ? V : j;
    let i = this.options.stylePlaceholders;
    if (this.options.forTailwind && i) for (let e of q) this.cleanupRules[e] = (t, r) => {
      !function (e, t, i, r) {
        let s = function (e) {
          let t = [];
          let i = "";
          let r = 0;
          for (let s = 0; s < e.length; s++) {
            let a = e[s];
            "(" === a ? (r++, i += a) : ")" === a ? (r--, i += a, 0 === r && s + 1 < e.length && "," === e[s + 1] && (t.push(i.trim()), i = "", s++)) : "," === a && 0 === r ? (t.push(i.trim()), i = "") : i += a;
          }
          i.trim() && t.push(i.trim());
          return t.filter(e => "none" !== e.trim());
        }(i);
        if ("background-image" === t) {
          let t = s.filter(e => e.startsWith("linear-gradient("));
          1 === t.length && null != t[0] && (function (e, t) {
            let i = t.match(/^linear-gradient\((.*)\)$/);
            if (!i || !i[1]) return;
            let r = [];
            let s = "";
            let a = 0;
            for (let e = 0; e < i[1].length; e++) {
              let t = i[1][e];
              "(" === t ? (a++, s += t) : ")" === t ? (a--, s += t) : "," === t && 0 === a ? (r.push(s.trim()), s = "") : s += t;
            }
            if (s.trim() && r.push(s.trim()), r.length < 2 || r.length > 4) return;
            let n = "";
            let o = [...r];
            if ((r[0].includes("deg") || r[0].includes("turn") || r[0].includes("rad") || r[0].includes("grad") || "to top" === r[0] || "to bottom" === r[0] || "to left" === r[0] || "to right" === r[0] || "to top left" === r[0] || "to top right" === r[0] || "to bottom left" === r[0] || "to bottom right" === r[0]) && (n = r[0], o = r.slice(1)), o.length > 3) return;
            let l = o.map(e => {
              let t = "";
              let i = "";
              let r = e.trim();
              if (r.startsWith("rgb")) {
                let e = r.indexOf(")");
                -1 !== e ? (t = r.substring(0, e + 1), i = r.substring(e + 1).trim()) : t = r;
              } else {
                let e = r.split(/\s+/);
                t = e[0];
                i = e[1] || "";
              }
              return {
                color: t,
                position: i
              };
            });
            if (l.every(e => e.color === l[0].color)) {
              e.style.removeProperty("background-image");
              e.classList.add(`bg-[${U(l[0].color)}]`);
              return;
            }
            if (n) {
              if ("to top" === n) e.classList.add("bg-gradient-to-t");else if ("to bottom" === n) e.classList.add("bg-gradient-to-b");else if ("to left" === n) e.classList.add("bg-gradient-to-l");else if ("to right" === n) e.classList.add("bg-gradient-to-r");else if ("to top left" === n) e.classList.add("bg-gradient-to-tl");else if ("to top right" === n) e.classList.add("bg-gradient-to-tr");else if ("to bottom left" === n) e.classList.add("bg-gradient-to-bl");else if ("to bottom right" === n) e.classList.add("bg-gradient-to-br");else {
                if (!n.includes("deg")) return;
                let t = parseFloat(n);
                if (isNaN(t)) e.classList.add("bg-gradient-to-r");else {
                  let i = Math.round(t);
                  if (!(.01 >= Math.abs(t - i))) return;
                  if (.01 >= Math.abs(i - 0)) e.classList.add("bg-gradient-to-t");else if (.01 >= Math.abs(i - 90)) e.classList.add("bg-gradient-to-r");else if (.01 >= Math.abs(i - 180)) e.classList.add("bg-gradient-to-b");else {
                    if (!(.01 >= Math.abs(i - 270))) return;
                    e.classList.add("bg-gradient-to-l");
                  }
                }
              }
            } else e.classList.add("bg-gradient-to-b");
            let d = l[0];
            let c = `from-[${U(d.color)}]`;
            if (e.classList.add(c), d.position && "0%" !== d.position && e.classList.add(`from-${G(d.position)}`), 3 === l.length) {
              let t = l[1];
              let i = `via-[${U(t.color)}]`;
              e.classList.add(i);
              t.position && e.classList.add(`via-${G(t.position)}`);
            }
            let u = l[l.length - 1];
            let p = `to-[${U(u.color)}]`;
            e.classList.add(p);
            u.position && "100%" !== u.position && e.classList.add(`to-${G(u.position)}`);
          }(e, t[0]), s = s.filter(e => e !== t[0]));
        }
        if (s.length > 1) {
          let i = (s = (s = s.map(e => B(e))).map(e => e.startsWith("url(") ? e.replace(/"/g, "'") : e)).join(", ");
          let a = r.add(i);
          e.style.setProperty(t, a);
        } else null != s[0] && e.style.setProperty(t, B(s[0]));
      }(t, e, r, i);
    };
  }
};
function K({
  html: e,
  styles: t
}, i = {
  forTailwind: !1
}) {
  let r = new J(e, i);
  let s = [];
  for (let e of (r.cleanResetText(), t)) try {
    I(e.content, t => {
      s.push({
        content: r.cleanStyle(t),
        id: e.id
      });
    });
  } catch (t) {
    console.error("Failed to walk the style sheet: ", t);
    s.push(e);
  }
  return {
    html: r.getUpdatedHtml(),
    styles: s
  };
}
function Z(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class Y {
  dedupeName(e) {
    let t = e;
    let i = !1;
    for (; this.seenNames.has(t) || i && this.preExistingNames.has(t);) {
      let e = t.match(/^(.*?)(\d*)$/);
      if (!e) throw Error(`Unexpected name: ${t}`);
      let [, r, s] = e;
      let a = (parseInt(s, 10) || 0) + 1;
      t = `${r}${a}`;
      i = !0;
    }
    this.seenNames.add(t);
    return t;
  }
  constructor(e = new Set(), t = []) {
    Z(this, "preExistingNames", void 0);
    Z(this, "seenNames", void 0);
    this.preExistingNames = e;
    this.seenNames = new Set(t);
  }
}
function Q(e, t) {
  let i = et(e);
  let r = t.querySelector(i);
  if (!r || !(r instanceof HTMLElement)) throw Error(`No html element found with selector '${i}'`);
  return r;
}
function ee(e, t) {
  let i = et(e);
  let r = t.querySelector(i);
  return r && r instanceof HTMLElement ? r : (console.warn(`No html element found with selector '${i}'`), null);
}
function et(e) {
  return `[id^="node-${e.replaceAll(":", "_").replaceAll(";", "-")}"]`;
}
function er(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let es = /<div\s*(?:id="[^"]+?")?\s*name="replace-me-(\d+)"\s*(?:(?:\/>)|(?:><\/div>))/g;
let ea = class e {
  applyTextReplacements(e) {
    return e.replace(es, (e, t) => this.textReplacements[parseInt(t)]);
  }
  replaceNode(e, t) {
    let i = ee(e, this.document);
    if (!i) return;
    let r = "string" == typeof t ? t : t(i);
    this.replaceElement(i, r);
  }
  replaceNodeChildren(e, t) {
    let i = ee(e, this.document);
    if (!i) return;
    let r = "string" == typeof t ? t : t(i);
    this.replaceElementChildren(i, r);
  }
  replaceElement(e, t) {
    let {
      replacementDiv,
      indexOfReplacement,
      replacementString
    } = this.generateReplacementDiv(e, t, {
      shouldMoveId: !0
    });
    e.replaceWith(replacementDiv);
    indexOfReplacement === this.textReplacements.length && this.textReplacements.push(replacementString);
  }
  replaceElementChildren(e, t) {
    let {
      replacementDiv,
      indexOfReplacement,
      replacementString
    } = this.generateReplacementDiv(e, t, {
      shouldMoveId: !1
    });
    e.replaceChildren(replacementDiv);
    indexOfReplacement === this.textReplacements.length && this.textReplacements.push(replacementString);
  }
  generateReplacementDiv(t, i, {
    shouldMoveId: r
  }) {
    let s = i;
    s = this.applyTextReplacements(s);
    let a = this.document.createElement("div");
    let n = t.id;
    r && n && (a.id = n);
    let o = this.textReplacements.length;
    for (let t = 0; t < this.textReplacements.length; t++) if (e.compareIgnoringNodeIds(this.textReplacements[t], s)) {
      o = t;
      break;
    }
    a.setAttribute("name", `replace-me-${o}`);
    return {
      replacementDiv: a,
      indexOfReplacement: o,
      replacementString: s
    };
  }
  static compareIgnoringNodeIds(e, t) {
    return e.replace(/id="[^"]*"/g, "") === t.replace(/id="[^"]*"/g, "");
  }
  constructor(e) {
    er(this, "document", void 0);
    er(this, "textReplacements", void 0);
    this.document = e;
    this.textReplacements = [];
  }
};
async function eo(e, t, i, r = "all") {
  let s = null;
  let a = (await i(e)).html;
  let n = new DOMParser().parseFromString(a, "text/html");
  if ((s = Q(e.developerFriendlyId, n)).classList.remove("overflow-x-clip"), s.classList.remove("overflow-y-clip"), e.isStateGroup && "representative" === r) {
    let t = function (e) {
      let t = function (e) {
        if (0 === e.childCount) return {};
        let t = e.defaultVariant ?? e.childrenNodes[0];
        if (!t) throw Error("No default state found in state group");
        let i = t.variantProperties() ?? {};
        let r = {};
        for (let t of e.childrenNodes) {
          let e = t.variantProperties() ?? {};
          let s = 0;
          for (let [t, r] of Object.entries(e)) i[t] !== r && (s += 1);
          for (let t of Object.keys(i)) t in e || (s += 1);
          for (let [i, a] of Object.entries(e)) i in r ? a in r[i] && !(r[i][a].distanceFromDefault > s) || (r[i][a] = {
            developerFriendlyId: t.developerFriendlyId,
            distanceFromDefault: s
          }) : r[i] = {
            [a]: {
              developerFriendlyId: t.developerFriendlyId,
              distanceFromDefault: s
            }
          };
        }
        return r;
      }(e);
      let i = new Set();
      for (let e of Object.values(t)) for (let t of Object.values(e)) i.add(t.developerFriendlyId);
      return i;
    }({
      childCount: e.childCount,
      childrenNodes: e.childrenNodes,
      defaultVariant: e.defaultVariant ? e.defaultVariant : null
    });
    t.size > 0 && function (e, t) {
      for (let i of Array.from(e.childNodes)) if (i instanceof HTMLElement && i.id.match(/^node-\d+_\d+$/)) {
        let e = i.id.replace("node-", "").replace("_", ":");
        t.has(e) || i.remove();
      }
    }(s, t);
  }
  if (!e.parentNode?.isBreakpointFrame) {
    let e = Array.from(s.classList.values()).find(e => e.startsWith("bg-[#"));
    e && s.classList.remove(e);
  }
  t.body.appendChild(s);
}
function el(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class ed {
  static applySubstitutions(...e) {
    let t = new ed(...e);
    if (t.isTextDataLinked) {
      let e = t.getVariableNameForPropRef(t.propRefs["text-data"]);
      t.replaceNodeForTextData(e);
    }
    if (t.isOverriddenSymbolIdLinked) {
      let e = t.getVariableNameForPropRef(t.propRefs["overridden-symbol-id"]);
      t.replaceNodeForOverriddenSymbolId(e);
    }
    if (t.isVisibleLinked) {
      let e = t.getVariableNameForPropRef(t.propRefs.visible);
      t.replaceNodeForVisible(e);
    }
  }
  getVariableNameForPropRef(e) {
    let t = e?.isLinked ? e.explicitDefID : "";
    let i = this.propertyDefinitionsWithVariableName[t];
    return i ? i.variableName : (console.warn(`Property definition not found for explicitDefId ${t}`), "");
  }
  get isVisibleLinked() {
    return this.propRefs.visible && this.propRefs.visible.isLinked;
  }
  get isTextDataLinked() {
    return this.propRefs["text-data"] && this.propRefs["text-data"].isLinked;
  }
  get isOverriddenSymbolIdLinked() {
    return this.propRefs["overridden-symbol-id"] && this.propRefs["overridden-symbol-id"].isLinked;
  }
  replaceNodeForTextData(e) {
    this.domSubstitutionController.replaceNode(this.developerFriendlyId, t => {
      let i = t.cloneNode(!0);
      let r = i;
      for (; r.firstChild && r.firstChild instanceof HTMLElement;) r = r.firstChild;
      r.textContent = `{${e}}`;
      return this.htmlToJsx(i.outerHTML);
    });
  }
  replaceNodeForOverriddenSymbolId(e) {
    this.domSubstitutionController.replaceNode(this.developerFriendlyId, t => {
      let i = `${e} || (${this.htmlToJsx(t.outerHTML)})`;
      this.isVisibleLinked || (i = `{${i}}`);
      return i;
    });
  }
  replaceNodeForVisible(e) {
    this.domSubstitutionController.replaceNode(this.developerFriendlyId, t => `{${e} && (${this.htmlToJsx(t.outerHTML)})}`);
  }
  constructor(e, t, i, r, s) {
    el(this, "domSubstitutionController", void 0);
    el(this, "propertyDefinitionsWithVariableName", void 0);
    el(this, "propRefs", void 0);
    el(this, "developerFriendlyId", void 0);
    el(this, "htmlToJsx", void 0);
    this.domSubstitutionController = e;
    this.propertyDefinitionsWithVariableName = t;
    this.propRefs = i;
    this.developerFriendlyId = r;
    this.htmlToJsx = s;
  }
}
function ec(e) {
  return Array.from(e.childNodes).filter(e => e instanceof Text).map(e => e.data).join("");
}
async function ep(e, t, i) {
  let {
    componentName,
    propertyDefinitionsWithVariableName
  } = e;
  let a = t.isInstance ? t.componentProperties() : t.componentPropertyDefinitions();
  let n = "";
  for (let [e, {
    value: t,
    type: r,
    defaultValue: o
  }] of Object.entries(a)) {
    let a = t ?? o;
    let l = "";
    let d = propertyDefinitionsWithVariableName[e];
    if (e.includes("#")) {
      let [, t] = e.split("#");
      d = propertyDefinitionsWithVariableName[t];
    }
    if (!d) throw Error(`Property definition not found for key ${e}`);
    if (l = d.variableName, a !== d.definition.defaultValue) switch (r) {
      case "BOOLEAN":
      case "NUMBER":
        n += `${l}={${a}} `;
        break;
      case "TEXT":
      case "VARIANT":
        n += `${l}="${a}" `;
        break;
      case "INSTANCE_SWAP":
        if ("string" != typeof a) throw Error("Expected string value for INSTANCE_SWAP");
        let c = await i(a);
        n += `${l}={(< ${c} />)} `;
    }
  }
  return `<${componentName} ${n} />`;
}
function eh(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
let em = new Set(["name", "width", "height", "minHeight", "minWidth", "maxHeight", "maxWidth", "fills", "clipsContent", "opacity", "topRightRadius", "bottomLeftRadius", "bottomRightRadius", "topLeftRadius", "cornerRadius", "counterAxisSizingMode", "primaryAxisSizingMode", "reactions"]);
class ef {
  get componentsCode() {
    return this.components.join("\n");
  }
  get usedComponentNames() {
    return this.componentNameDeduper.seenNames;
  }
  async buildFigmaComponents(e) {
    try {
      this.gatherSymbolIdsToSerialize(e);
      await this.substituteInstancePlaceholdersIntoDOM(e, this.domSubstitutionController, this.document, {
        treatSymbolAsInstance: !0
      });
    } catch (e) {
      console.warn(e);
    }
  }
  replacePlaceholdersWithInstances(e) {
    return this.domSubstitutionController.applyTextReplacements(e);
  }
  maybeBubbleUpSymbol(e) {
    let t = getSingletonSceneGraph().get(e);
    if (!t) throw Error("Component not found");
    if (!t.isState) return t;
    {
      let e = t.parentNode;
      if (!e) throw Error("Component is state, but has no parent");
      if (!e.isStateGroup) throw Error("Component is state, but parent is not state group");
      return "used" === this.variantSerializationMode ? t : e;
    }
  }
  gatherSymbolIdsToSerialize(e, t = this.document) {
    if (e.isLooseComponent || e.isStateGroup || e.isState) this.symbolIdsConsumed.add(this.maybeBubbleUpSymbol(e.guid).guid);else if (this.isReplaceableInstance(e, t, {
      treatSymbolAsInstance: !0
    })) {
      if (!e.symbolId) throw Error("Unexpectedly missing symbolId");
      let i = this.maybeBubbleUpSymbol(e.symbolId);
      this.symbolIdsConsumed.add(i.guid);
      e.isInstance && Object.values(e.componentProperties?.() ?? {}).forEach(async e => {
        if ("INSTANCE_SWAP" === e.type && e.value && "string" == typeof e.value) {
          let i = this.maybeBubbleUpSymbol(e.value);
          if (!i) {
            console.warn("Unexpectedly unable to retrieve instance swap symbol");
            return;
          }
          let r = t.implementation.createHTMLDocument();
          await eo(i, r, this.serializeNodeToHtml, this.variantSerializationMode);
          this.gatherSymbolIdsToSerialize(i, r);
        }
      });
      Object.values((i.isState ? i.parentNode?.componentPropertyDefinitions?.() : i.componentPropertyDefinitions?.()) ?? {}).forEach(async e => {
        if ("INSTANCE_SWAP" === e.type && e.defaultValue && "string" == typeof e.defaultValue) {
          let i = this.maybeBubbleUpSymbol(e.defaultValue);
          if (!i) {
            console.warn("Unexpectedly unable to retrieve instance swap symbol");
            return;
          }
          let r = t.implementation.createHTMLDocument();
          await eo(i, r, this.serializeNodeToHtml, this.variantSerializationMode);
          this.gatherSymbolIdsToSerialize(i, r);
        }
      });
    }
    for (let i of e.childrenNodes) this.gatherSymbolIdsToSerialize(i, t);
  }
  isVisitableNode(e, t) {
    let i = ee(e.developerFriendlyId, t);
    let r = i && this.domNodeToReactStr?.({
      node: i
    }) != null;
    let s = e.childrenNodes.filter(e => e.visible).every(e => !!ee(e.developerFriendlyId, t));
    return !!i && s && !r;
  }
  isReplaceableInstance(e, t, {
    treatSymbolAsInstance: i = !1
  } = {}) {
    if ((e.isStateGroup || e.isLooseComponent) && i) return e.visible && this.isVisitableNode(e, t) && (!this.useFigmaComponentForNode || this.useFigmaComponentForNode(e.guid));
    let r = !!e.instanceScaleFactor && 1 != e.instanceScaleFactor;
    return e.isInstance && null === e.detachedInfo && e.visible && !r && this.isVisitableNode(e, t) && e.overrides.every(e => !e.id.startsWith("I") && e.overriddenFields.every(e => em.has(e))) && (!this.useFigmaComponentForNode || this.useFigmaComponentForNode(e.guid));
  }
  async substituteInstancePlaceholdersIntoDOM(e, t, i, {
    treatSymbolAsInstance: r = !1
  } = {}) {
    let s = async e => {
      if (this.isReplaceableInstance(e, i, {
        treatSymbolAsInstance: r
      })) {
        let i = e.isInstance ? e.symbolId : e.guid;
        if (!i) throw Error(`SymbolId not found for instance ${e.developerFriendlyId}`);
        let r = await this.getComponentForSymbolId(i);
        if (null === r) return;
        let s = await ep(r, e, async e => {
          let t = await this.getComponentForSymbolId(e);
          if (!t) throw Error(`Component data not found for symbolId ${e}`);
          return t.componentName;
        });
        t.replaceNodeChildren(e.developerFriendlyId, s);
      } else if (this.isVisitableNode(e, i)) for (let t of e.childrenNodes) await s(t);
    };
    await s(e);
  }
  async getComponentForSymbolId(e) {
    let t = getSingletonSceneGraph().get(e);
    if (!t) throw Error("Component not found");
    if (t.isState) {
      let e = t.parentNode;
      if (!e) throw Error("Component is state, but has no parent");
      if (!e.isStateGroup) throw Error("Component is state, but parent is not state group");
      t = e;
    }
    let i = t.developerFriendlyId;
    let r = this.componentIdToComponentData.get(i) ?? null;
    if (r) return r;
    let s = document.implementation.createHTMLDocument();
    let a = Array.from(this.symbolIdsConsumed).map(e => getSingletonSceneGraph().get(e)).filter(isNotNullish);
    await Promise.all(a.map(e => eo(e, s, this.serializeNodeToHtml, this.variantSerializationMode)));
    (r = await this.makeComponentFromFigmaComponent(t, s)) && this.componentIdToComponentData.set(i, r);
    return r;
  }
  async makeComponentFromFigmaComponent(e, t) {
    let i = this.componentNameDeduper.dedupeName(x(e.name));
    let r = new ea(t);
    return (await this.substituteInstancePlaceholdersIntoDOM(e, r, t), 0 === Object.entries(e.componentPropertyDefinitions()).length) ? this.makeComponentWithoutProps(e, t, i) : this.makeComponentWithProps(i, e, r, t);
  }
  makeComponentWithProps(e, t, i, r) {
    let s = new Y();
    let a = Object.fromEntries(Object.entries(t.componentPropertyDefinitions()).map(([e, t]) => {
      if (e.includes("#")) {
        let [i, r] = e.split("#");
        return [r, {
          definition: t,
          variableName: s.dedupeName(eg(i))
        }];
      }
      let i = s.dedupeName(eg(e));
      return [e, {
        definition: t,
        variableName: i
      }];
    }));
    let {
      propsDefinition,
      destructuringExpression
    } = function (e, t) {
      let i = [];
      let r = [];
      for (let t of Object.values(e)) {
        let e = t.definition;
        let s = t.variableName;
        let a = `"${e.defaultValue}"`;
        let n = "";
        switch (e.type) {
          case "BOOLEAN":
            n = "boolean";
            a = e.defaultValue ? "true" : "false";
            break;
          case "NUMBER":
            n = "number";
            a = String(e.defaultValue);
            break;
          case "INSTANCE_SWAP":
            n = "React.ReactNode | null";
            a = "null";
            break;
          case "TEXT":
          case "VARIANT":
            n = e.variantOptions ? e.variantOptions.map(e => `'${e}'`).join(" | ") : "string";
        }
        i.push(`${s}?: ${n}`);
        r.push(`${s} = ${a}`);
      }
      return {
        propsDefinition: `interface ${t}Props {
      ${i.join("\n")}
    }`,
        destructuringExpression: `{${r.join(",\n")}}: ${t}Props`
      };
    }(a, e);
    let {
      variantReturns,
      refactoredElements
    } = function (e, t, i, r, s, a, n) {
      let o = [];
      let l = e.isStateGroup ? e.childrenNodes : [e];
      if (0 === l.length) return {
        variantReturns: o,
        refactoredElements: []
      };
      for (let e of l = l.filter(e => e.parentGuid && n.has(e.parentGuid) || n.has(e.guid))) (function (e, t, i) {
        let r = s => {
          if (!s.visible) return;
          for (let e of s.childrenNodes) r(e);
          let a = s.propRefs;
          a && 0 !== Object.keys(a).length && ed.applySubstitutions(e, t, a, s.developerFriendlyId, i);
        };
        return r;
      })(t, i, a)(e);
      let d = [];
      for (let c of (e.isStateGroup && e.childrenNodes.length > 1 && (d = function (e, t, i, r) {
        if (e.length < 2) return [];
        let s = [];
        let a = [];
        let n = {};
        let o = (e, t) => {
          if (t.length < 2) return !0;
          let [i, ...r] = t;
          let a = i.children.length;
          let n = !1;
          if (r.some(e => e.children.length !== a) && (n = !0), n) for (let e of r) a = Math.min(a, e.children.length);
          let l = [];
          let d = !1;
          for (let i = 0; i < a; i++) {
            let r = [];
            let s = null;
            for (let e of t) {
              let t = e.children[i];
              if (!t || !(t instanceof HTMLElement)) {
                d = !0;
                continue;
              }
              if (null === s) s = ec(t);else if (s !== ec(t)) {
                d = !0;
                continue;
              }
              r.push(t);
            }
            if (!o(`${e}>${i}`, r)) {
              d = !0;
              continue;
            }
            l.push(i);
          }
          if (n || d) return !1;
          let c = Array.from(i.attributes).filter(e => "id" !== e.name);
          for (let e of r) {
            let t = Array.from(e.attributes).filter(e => "id" !== e.name);
            if (c.length !== t.length) return !1;
            for (let t of c) {
              let i = e.getAttributeNode(t.name);
              if (!i || i.value !== t.value) return !1;
            }
          }
          "" !== e && s.push({
            elements: t,
            path: e
          });
          return !0;
        };
        o("", e);
        let l = [];
        let d = new Set();
        for (let e of s.reverse()) {
          d.add(e.path);
          let t = e.path.split(">").slice(0, -1).join(">");
          d.has(t) || l.push(e.elements);
        }
        for (let e of l = l.reverse()) {
          (function e(t) {
            for (let i of t) {
              i.removeAttribute("id");
              e(Array.from(i.children).filter(e => e instanceof HTMLElement));
            }
          })(e);
          let [s] = e;
          let o = r(s.outerHTML);
          let l = n[o];
          let d = void 0 !== l;
          l || (l = i.dedupeName(g(s.getAttribute("data-name") || "element")), n[o] = l);
          let c = `
        const ${l} = (${o})
      `;
          for (let i of (c = t.applyTextReplacements(c), d || a.push(c), e)) t.replaceElement(i, `{${l}}`);
        }
        return a;
      }(e.childrenNodes.filter(t => n.has(e.guid) || n.has(t.guid)).map(e => ee(e.developerFriendlyId, r)).filter(isNotNullish), t, s, a)), l)) {
        let s = (e.isStateGroup && c.variantProperties?.()) ?? {};
        let n = ee(c.developerFriendlyId, r);
        if (!n) continue;
        let l = a(n.outerHTML);
        let d = Object.entries(s).map(([e, t]) => {
          let r = i[e].variableName;
          return `${r} === '${t}'`;
        }).join(" && ");
        let u = !e.isStateGroup || c.guid === e.defaultVariant?.guid;
        let p = `return (${l})`;
        u || (p = `if (${d}) {
          ${p}
        }`);
        p = t.applyTextReplacements(p);
        o.push({
          returnStatement: p,
          isDefault: u
        });
      }
      return {
        variantReturns: o,
        refactoredElements: d
      };
    }(t, i, a, r, s, this.htmlToJsx, this.symbolIdsConsumed);
    if (0 === variantReturns.length) return null;
    let c = 0;
    if (variantReturns.length > 1 && -1 === (c = variantReturns.findIndex(({
      isDefault: e
    }) => e))) throw Error("Default variant not found");
    let [u] = variantReturns.splice(c, 1);
    let p = `
      ${propsDefinition}
      function ${e}(${destructuringExpression}) {
        ${refactoredElements.join("\n")}

        ${variantReturns.map(({
      returnStatement: e
    }) => e).join("\n")}
        ${u.returnStatement}
      }
    `;
    this.shouldIncludeComponentDefinition(t, r) && this.components.push(p);
    return {
      componentName: e,
      propertyDefinitionsWithVariableName: a
    };
  }
  makeComponentWithoutProps(e, t, i) {
    let r = ee(e.developerFriendlyId, t);
    if (!r) return null;
    let s = this.htmlToJsx(r.outerHTML);
    this.shouldIncludeComponentDefinition(e, t) && this.components.push(`
      function ${i}() {
        return ${s}
      }`);
    return {
      componentName: i,
      propertyDefinitionsWithVariableName: {}
    };
  }
  shouldIncludeComponentDefinition(e, t) {
    let i = ee(e.developerFriendlyId, t);
    return !i || !this?.domNodeToReactStr?.({
      node: i
    });
  }
  constructor(e, t, i, r, s = "all", a) {
    eh(this, "serializeNodeToHtml", void 0);
    eh(this, "htmlToJsx", void 0);
    eh(this, "useFigmaComponentForNode", void 0);
    eh(this, "variantSerializationMode", void 0);
    eh(this, "domNodeToReactStr", void 0);
    eh(this, "componentIdToComponentData", void 0);
    eh(this, "componentNameDeduper", void 0);
    eh(this, "components", void 0);
    eh(this, "domSubstitutionController", void 0);
    eh(this, "document", void 0);
    eh(this, "symbolIdsConsumed", void 0);
    this.serializeNodeToHtml = e;
    this.htmlToJsx = i;
    this.useFigmaComponentForNode = r;
    this.variantSerializationMode = s;
    this.domNodeToReactStr = a;
    this.componentIdToComponentData = new Map();
    this.componentNameDeduper = new Y();
    this.components = [];
    this.symbolIdsConsumed = new Set([]);
    this.document = t;
    this.domSubstitutionController = new ea(t);
    this.useFigmaComponentForNode = r;
  }
}
function eg(e) {
  let t = g(e).replace(/[^a-zA-Z0-9]/g, "");
  return !t || t.match(/^[0-9]/) ? `prop${t}` : g(t);
}
function eb(e) {
  let t = e;
  ["_background", "_border", "_clipper", "_shadow", "_sticky-wrapper", "_transform-wrapper-outer", "_transform-wrapper-inner"].some(e => t.endsWith(e)) && (t = t.slice(0, t.lastIndexOf("_")));
  let i = t = t.replace(/^node-/, "").replace(/_/g, ":");
  return getSingletonSceneGraph().getFromDeveloperFriendlyId(i);
}
async function ey(e, t, i) {
  let r = [];
  for (let [e, s] of i.entries()) {
    let i = t.get(s);
    if (!i) {
      console.warn(`No blob found for ${s}`);
      continue;
    }
    let a = await i.arrayBuffer();
    let n = encodeURIComponent(new TextDecoder("utf-8").decode(a));
    r.push(`export const ${e} = "data:image/svg+xml,${n}";`);
  }
  return {
    name: e,
    contents: r.join("\n")
  };
}
let ex = class {
  getSuccess() {
    return !(0 !== new DataView(this.buffer.buffer).getUint8(2));
  }
  getRequestId() {
    return new DataView(this.buffer.buffer).getInt16(0, !0);
  }
  getHash() {
    let e = [];
    for (let t = 3; t < this.buffer.length; t++) {
      let i = this.buffer[t];
      if (void 0 === i || 0 === i) break;
      e.push(i);
    }
    return new TextDecoder("utf-8").decode(new Uint8Array(e));
  }
  constructor() {
    !function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    }(this, "buffer", new Uint8Array(44));
  }
};
async function ek(e, t) {
  let i = new Uint8Array(await t.arrayBuffer());
  let r = new ex();
  let s = null;
  let a = null;
  return new Promise((t, n) => {
    if (!Fullscreen) {
      n(Error("Fullscreen is not available"));
      return;
    }
    a = (s = Fullscreen.registerImageDesignToReact(e, i, r.buffer)).subscribeFromJs(() => {
      if (s?.getCopy()) {
        if (!r.getSuccess()) {
          n(Error("Failed to get hash for image"));
          return;
        }
        try {
          t(r.getHash());
        } catch (e) {
          n(e);
        }
      }
    });
  }).finally(() => {
    s && weakHandleHelpers?.isAlive(s.handle) && a && s.unsubscribeFromJs(a);
    Fullscreen?.cleanUpGetHashForImageDesignToReactRequest(r.getRequestId());
  });
}
async function ew(e) {
  let t = new Map();
  for (let [i, r] of e.entries()) {
    if (i.endsWith(".svg")) continue;
    let e = i.replace(/\.[^/.]+$/, "");
    let s = await ek(i, r);
    e !== s && t.set(e, s);
  }
  return t;
}
async function eF(e, t) {
  for (let [i, r] of await ew(t)) {
    e = e.replace(RegExp(i, "g"), r);
    let s = i + ".png";
    let a = t.get(s);
    if (!a) {
      console.warn(`Blob not found for hash ${i}`);
      continue;
    }
    t.$$delete(s);
    t.set(r + ".png", a);
  }
  return e;
}
async function eS(e) {
  let t = new Map();
  let {
    imageAssetsOptions
  } = e;
  !imageAssetsOptions || imageAssetsOptions.extractEntireSvgs || (await Promise.all(Array.from(imageAssetsOptions.assets.entries()).map(async ([e, i]) => {
    if (e?.endsWith(".svg") && i) try {
      let r = await eL(i);
      r && t.set(e, r);
    } catch (e) {
      console.error("Unable to parse SVG from blob", e);
    }
  })));
  return t;
}
async function eL(e) {
  let t = await e.text();
  let i = new DOMParser().parseFromString(t, "image/svg+xml");
  return i.querySelector("parsererror") ? null : i.querySelector("svg");
}
let eN = class {
  add(e) {
    this.replacements.push(e);
    return `url(figma.com/placeholders/${this.replacements.length - 1})`;
  }
  get(e) {
    let t = e.match(/^url\(['"]?figma.com\/placeholders\/([0-9]+)['"]?\)$/);
    if (!t) return e;
    let i = parseInt(t[1], 10);
    return isNaN(i) || i < 0 || i >= this.replacements.length ? e : this.replacements[i];
  }
  constructor() {
    !function (e, t, i) {
      t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i;
    }(this, "replacements", []);
  }
};
function eC(e, t, i) {
  t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i;
  return e;
}
class eE {
  get shouldExtractRootNode() {
    return !1;
  }
  async process() {
    if (!this.options.disableExtractFrames) for (let e of [this.rootNode, ...(this.options?.additionalNodes ?? [])]) this.visitNodeAndSetComponentName(e);
    let e = await this.getDocument();
    this.svgElements = this.singleLineSvgImports ? new Map() : await eS(this.options);
    this.statsForLogs.numSvgElements = this.svgElements.size;
    (function (e) {
      (function (e = document.body) {
        let t;
        let i = document.createTreeWalker(e, NodeFilter.SHOW_TEXT, null);
        let r = [];
        for (; t = i.nextNode();) r.push(t);
        return r;
      })(e.body).forEach(e => {
        let t = e.textContent;
        let i = t?.trim();
        t && i && 0 !== i.length && /[\n\r\t{}<>&'"]|^\s|\s$|\s{2,}/.test(t) && (e.textContent = ["{`", t.replace(/`/g, "\\`"), "`}"].join(""));
      });
    })(e);
    let t = new ef(this.serializeWithOptions, e, this.htmlToJsx, this.options.useFigmaComponentForNode, this.options.variantSerializationMode, this.options.domNodeToReactStr);
    let i = performance.now();
    if (this.options.useFigmaComponents && this.options.convertToTailwindCSS) for (let e of [this.rootNode, ...(this.options.additionalNodes ?? [])]) await t.buildFigmaComponents(e);
    this.statsForLogs.buildComponentsElapsedTimeMs = performance.now() - i;
    let r = t.componentsCode;
    for (let e of t.usedComponentNames) this.reservedNames.push(e);
    this.dedupeComponentNames();
    this.replaceElementsWithComponents(e);
    let s = this.assembleReactCode(e, r);
    s = t.replacePlaceholdersWithInstances(s);
    let a = this.options.imageAssetsOptions;
    if (a) {
      let {
        assets
      } = a;
      this.statsForLogs.numAssets = assets.size;
      assets.forEach(e => {
        this.statsForLogs.totalAssetsSize += e.size;
      });
      a?.skipUpdateHashes || (s = await eF(s, assets));
      let {
        variableNameToFilename,
        updatedReactCode,
        svgFileName,
        svgVariableToFilename
      } = await a.transformer(s, this.nodeNamesForDocument, this.singleLineSvgImports);
      let o = Object.fromEntries(Object.entries(variableNameToFilename).map(([e, t]) => [t, e]));
      if (this.resultFiles.push({
        name: "assets.json",
        contents: JSON.stringify(o, null, 2)
      }), s = updatedReactCode, svgFileName) {
        let t = await ey(svgFileName, assets, svgVariableToFilename);
        this.resultFiles.push(t);
      }
    }
    this.options.optimizeCode && (s = await this.options.optimizeCode(s));
    let n = new Set();
    for (let e of this.svgPathData.keys()) s.includes(e) && n.add(e);
    if (n.size > 0) {
      let e = `svg-${Math.random().toString(36).substring(2, 12)}`;
      let t = Array.from(n.keys()).sort();
      let i = `import ${f} from './${e}'`;
      s = `${i}
${s}`;
      let r = [];
      for (let e of (r.push("export default {"), t)) r.push(`${e}: ${JSON.stringify(this.svgPathData.get(e) ?? "")},`);
      r.push("}");
      this.resultFiles.push({
        name: `${e}.ts`,
        contents: r.join("\n") + "\n"
      });
      this.statsForLogs.numSvgPaths = n.size;
    }
    try {
      s = await k(s);
    } catch (e) {
      e instanceof Error && "message" in e ? this.onWarning?.(e.message) : this.onWarning?.("Unknown error");
    }
    return {
      files: [{
        name: "index.tsx",
        contents: s
      }, {
        name: "styles.css",
        contents: this.mergedCSS
      }, ...this.resultFiles],
      stats: this.statsForLogs
    };
  }
  assembleReactCode(e, t) {
    return function ({
      primaryComponent: e,
      additionalComponents: t,
      options: i,
      componentsCode: r = "",
      additionalImports: s = []
    }) {
      let a = [...new Set(s)].join("\n");
      let {
        jsx,
        name
      } = e;
      let l = i?.includeDefaultExport;
      return `${a}
${r}
${t.map(({
        name: e,
        jsx: t
      }) => `function ${e}() {
  return ${t}
}`).join("\n\n")}

${l ? "export default " : ""}function ${name}() {
  return ${jsx}
}`;
    }({
      primaryComponent: {
        id: this.rootNode.developerFriendlyId,
        name: this.getPrimaryComponentName(),
        jsx: this.htmlToJsx(e.body.innerHTML)
      },
      additionalComponents: this.components,
      options: this.options,
      componentsCode: t,
      additionalImports: this.importStatements
    });
  }
  getPrimaryComponentName() {
    let e = this.options.rootComponentName ?? this.idToComponentInfo.get(this.rootNode.developerFriendlyId)?.name;
    e || (e = this.generateDedupedPrimaryComponentName());
    return e;
  }
  generateDedupedPrimaryComponentName() {
    return new Y(void 0, [...this.reservedNames, ...Array.from(this.idToComponentInfo.values()).map(({
      name: e
    }) => e)]).dedupeName(x(this.rootNode.name));
  }
  async getDocument() {
    let e = performance.now();
    let t = await this.serializeWithOptions(this.rootNode);
    this.statsForLogs.serializerElapsedTimeMs = performance.now() - e;
    this.mergedCSS = t.styles.map(e => e.content).join("\n");
    return new DOMParser().parseFromString(t.html, "text/html");
  }
  visitNodeAndSetComponentName(e, t) {
    if (e.visible || !t) {
      try {
        e.isInstance ? e.variantProperties() ? this.statsForLogs.numVariantInstances++ : this.statsForLogs.numComponentInstances++ : e.isComponentish && (e.isStateGroup || e.isState ? this.statsForLogs.numVariants++ : this.statsForLogs.numComponents++);
      } catch (e) {
        this.onWarning?.(e.message);
      }
      for (let [t, i] of e.childrenNodes.entries()) this.visitNodeAndSetComponentName(i, t);
      ("FRAME" === e.type || e.parentNode?.isBreakpointFrame || this.options.additionalNodes?.length && void 0 === t) && this.idToComponentInfo.set(e.developerFriendlyId, {
        id: e.developerFriendlyId,
        name: this.getNameForNode(e),
        parentGuid: e.parentGuid ?? void 0,
        parentIdx: t
      });
    }
  }
  getNameForNode(e) {
    return x(e.name);
  }
  dedupeComponentNames() {
    let e = new Y(new Set(Array.from(this.idToComponentInfo.values()).map(({
      name: e
    }) => e)), this.reservedNames);
    for (let [t, i] of this.idToComponentInfo.entries()) {
      let {
        name
      } = i;
      let s = e.dedupeName(name);
      this.idToComponentInfo.set(t, {
        ...i,
        name: s
      });
    }
  }
  replaceElementsWithComponents(e) {
    let t = new Map();
    for (let [i, r] of this.idToComponentInfo.entries()) {
      let s;
      let {
        parentGuid
      } = r;
      if (!parentGuid || !this.shouldExtractRootNode && i === this.rootNode.developerFriendlyId) continue;
      try {
        s = Q(i, e);
      } catch (e) {
        console.error(e);
        continue;
      }
      let n = this.htmlToJsx(s.outerHTML).replace(/id="[^"]*"/g, "");
      r.jsx = n;
      t.has(parentGuid) || t.set(parentGuid, new Map());
      t.get(parentGuid)?.has(r.jsx) ? t.get(parentGuid)?.get(r.jsx)?.push(r) : t.get(parentGuid)?.set(r.jsx, [r]);
    }
    let i = new Set();
    for (let [r, s] of this.idToComponentInfo.entries()) {
      let r;
      let {
        parentGuid,
        jsx
      } = s;
      if (!parentGuid || !jsx || i.has(`${parentGuid}-${jsx}`)) continue;
      i.add(`${parentGuid}-${jsx}`);
      let o = t.get(parentGuid);
      if (!o) continue;
      let l = o.get(jsx);
      if (!l) continue;
      l.sort((e, t) => (e.parentIdx ?? 0) - (t.parentIdx ?? 0));
      let d = l[0];
      try {
        r = Q(d.id, e);
      } catch (e) {
        console.error(e);
        continue;
      }
      let c = this.htmlToJsx(r.outerHTML);
      this.components.push({
        id: d.id,
        name: d.name,
        jsx: c
      });
      let u = l[0].parentIdx ?? 0;
      if ((l[l.length - 1].parentIdx ?? 0) - u == l.length - 1 && l.length > 1) {
        r.replaceWith(`{[...Array(${l.length}).keys()].map((_, i) => (<${d.name} key={i}/>))}`);
        for (let t = 1; t < l.length; t++) {
          let i = l[t];
          try {
            Q(i.id, e).remove();
          } catch (e) {
            console.error(e);
          }
        }
      } else for (let t of l) try {
        Q(t.id, e).replaceWith(`<${d.name} />`);
      } catch (e) {
        console.error(e);
      }
    }
  }
  constructor(e, t, i, r) {
    eC(this, "rootNode", void 0);
    eC(this, "serializeNodeToHtml", void 0);
    eC(this, "options", void 0);
    eC(this, "onWarning", void 0);
    eC(this, "components", void 0);
    eC(this, "idToComponentInfo", void 0);
    eC(this, "reservedNames", void 0);
    eC(this, "resultFiles", void 0);
    eC(this, "importStatements", void 0);
    eC(this, "nodeNamesForDocument", void 0);
    eC(this, "singleLineSvgImports", void 0);
    eC(this, "stylePlaceholders", void 0);
    eC(this, "svgElements", void 0);
    eC(this, "svgPathData", void 0);
    eC(this, "statsForLogs", void 0);
    eC(this, "mergedCSS", void 0);
    eC(this, "htmlToJsx", void 0);
    eC(this, "serializeWithOptions", void 0);
    this.rootNode = e;
    this.serializeNodeToHtml = t;
    this.options = i;
    this.onWarning = r;
    this.components = [];
    this.idToComponentInfo = new Map();
    this.reservedNames = [];
    this.resultFiles = [];
    this.nodeNamesForDocument = new Map();
    this.stylePlaceholders = new eN();
    this.svgElements = new Map();
    this.svgPathData = new Map();
    this.statsForLogs = {
      numComponents: 0,
      numVariants: 0,
      numComponentInstances: 0,
      numVariantInstances: 0,
      numAssets: 0,
      totalAssetsSize: 0,
      numSvgElements: 0,
      numSvgPaths: 0
    };
    this.mergedCSS = "";
    this.htmlToJsx = e => new m({
      ...this.options,
      svgElements: this.svgElements,
      svgPathData: this.svgPathData,
      singleLineSvgImports: this.singleLineSvgImports,
      extractEntireSvgs: this.options.imageAssetsOptions?.extractEntireSvgs ?? !1,
      stylePlaceholders: this.stylePlaceholders
    }).htmlToJsx(e).jsx;
    this.serializeWithOptions = async e => {
      let t = await this.serializeNodeToHtml(e);
      if (this.options.imageAssetsOptions) for (let [e, i] of t.assets ?? []) this.options.imageAssetsOptions?.assets && this.options.imageAssetsOptions.assets.set(e, i.blob);
      t = this.options.convertToTailwindCSS ? function (e, t) {
        let i = function ({
          html: e,
          styles: t
        }) {
          let i = t.map(({
            content: e
          }) => {
            try {
              let t = "";
              I(e, e => {
                for (let i = 0; i < e.cssRules.length; i++) {
                  let r = e.cssRules[i];
                  (r instanceof CSSStyleRule || r instanceof CSSStyleDeclaration) && (t += r.cssText);
                }
              });
              return xR(t);
            } catch (t) {
              console.error("Failed to walk the style sheet: ", t);
              return xR(e);
            }
          });
          let r = new Map();
          for (let {
            code,
            data
          } of i) if ("OK" === code && data) for (let {
            selectorName,
            resultVal
          } of data) r.set(selectorName, resultVal);
          let s = new Set();
          let a = new DOMParser().parseFromString(e, "text/html").body;
          !function e(t) {
            let i = [];
            for (let e of Array.from(t.classList)) {
              let t = r.get(`.${e}`);
              if (t) {
                let r = t.split(" ");
                i.push(...r);
                s.add(e);
              } else i.push(e);
            }
            for (let r of (function (e) {
              for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if (!i.match(/bg-\[\d+%_\d+%/)) continue;
                let r = i.replace("bg-[", "bg-[position:");
                let s = i.match(/bg-\[(\d+)%_(\d+)%\]/);
                if (s) {
                  let [, e, t] = s;
                  "50" === e && "50" === t ? r = "bg-center" : "0" === e && "0" === t ? r = "bg-top-left" : "0" === e && "50" === t ? r = "bg-left" : "0" === e && "100" === t ? r = "bg-bottom-left" : "50" === e && "100" === t ? r = "bg-bottom" : "100" === e && "100" === t ? r = "bg-bottom-right" : "100" === e && "50" === t ? r = "bg-right" : "100" === e && "0" === t ? r = "bg-top-right" : "50" === e && "0" === t && (r = "bg-top");
                }
                e[t] = r;
              }
            }(i), t.className = QP(i), function (e) {
              let t = e.parentElement;
              if (!t) return;
              let i = Array.from(t.children);
              if (i.length < 2) return;
              let r = Array.from(e.classList).filter(W);
              if (0 !== r.length) {
                for (let e of r) if (i.every(t => t.classList.contains(e))) {
                  for (let t of i) t.classList.remove(e);
                  t.classList.add(e);
                }
              }
            }(t), t.classList.contains("flex-[0_0_auto]") ? (t.classList.remove("flex-[0_0_auto]"), t.classList.add("flex-none")) : t.classList.contains("flex-[1_1_auto]") ? (t.classList.remove("flex-[1_1_auto]"), t.classList.add("flex-auto")) : t.classList.contains("flex-[0_1_auto]") ? (t.classList.remove("flex-[0_1_auto]"), t.classList.add("flex-initial")) : t.classList.contains("flex-[1_0_0px]") ? (t.classList.remove("flex-[1_0_0px]"), t.classList.add("grow"), t.classList.add("shrink-0"), t.classList.add("basis-0")) : t.classList.contains("flex-[none]") ? (t.classList.remove("flex-[none]"), t.classList.add("flex-none")) : t.classList.contains("flex-shrink-0") && (t.classList.remove("flex-shrink-0"), t.classList.add("shrink-0")), function (e) {
              let t = Array.from(e.classList);
              let i = t.find(e => e.startsWith("top-["));
              let r = t.find(e => e.startsWith("left-["));
              let s = t.find(e => e.startsWith("bottom-["));
              let a = t.find(e => e.startsWith("right-["));
              if (!i || !r || !s || !a) return;
              let n = i.slice(5, -1);
              let o = r.slice(6, -1);
              let l = s.slice(8, -1);
              let d = a.slice(7, -1);
              e.classList.remove(i, r, s, a);
              n === l && o === d ? e.classList.add(`inset-[${n}_${o}]`) : e.classList.add(`inset-[${n}_${d}_${l}_${o}]`);
            }(t), Array.from(t.children))) r instanceof HTMLElement && e(r);
            (function (e) {
              if (e.parentElement) for (let t of Array.from(e.classList).filter(W)) e.parentElement.classList.contains(t) && e.classList.remove(t);
            })(t);
            Array.from(t.classList.values()).some(e => e.startsWith("leading-") && "leading-[0]" !== e) && t.classList.remove("leading-[0]");
          }(a);
          let n = [];
          for (let {
            id,
            content
          } of t) try {
            I(content, t => {
              for (let e = t.cssRules.length - 1; e >= 0; e--) {
                let i = t.cssRules[e];
                i instanceof CSSStyleRule && i.selectorText.startsWith(".") && s.has(i.selectorText.slice(1)) && t.deleteRule(e);
              }
              let i = Array.from(t.cssRules).map(e => e.cssText).join("\n");
              n.push({
                id,
                content: i
              });
            });
          } catch (t) {
            console.error("Failed to walk the style sheet: ", t);
            n.push({
              id,
              content
            });
          }
          return {
            html: a.innerHTML,
            styles: n
          };
        }(K(e, t));
        (function (e) {
          let t = new DOMParser().parseFromString(e.html, "text/html");
          (function e(t) {
            if (t.classList) {
              let e = Array.from(t.classList).sort().join(" ");
              e && t.setAttribute("class", e);
            }
            for (let i of t.children) i instanceof HTMLElement && e(i);
          })(t.body);
          e.html = t.documentElement.outerHTML;
        })(i);
        return i;
      }(t, {
        forTailwind: !0,
        stylePlaceholders: this.stylePlaceholders
      }) : K(t, {
        forTailwind: !1,
        inlineStyles: this.options.inlineStyleProperties
      });
      let i = new DOMParser().parseFromString(t.html, "text/html");
      if (this.options.attributes) {
        for (let [e, t] of Object.entries(this.options.attributes)) {
          let r = ee(e, i);
          if (r) for (let [e, i] of Object.entries(t)) r.setAttribute(e, i);
        }
        t.html = i.body.innerHTML;
      }
      if (this.options.attributesWithFallback) {
        for (let {
          name,
          value,
          nodeIds,
          mergeFn
        } of this.options.attributesWithFallback) for (let a of nodeIds) {
          let r = ee(a, i);
          if (r) {
            let i = r.getAttribute(name);
            r.hasAttribute(name) && i ? r.setAttribute(name, mergeFn([i, value])) : r.setAttribute(name, value);
            break;
          }
        }
        t.html = i.body.innerHTML;
      }
      for (let [e, t] of function (e) {
        let t = new Map();
        let i = e.createTreeWalker(e, NodeFilter.SHOW_ELEMENT);
        for (; i.nextNode();) {
          if (!(i.currentNode instanceof HTMLElement)) continue;
          let e = i.currentNode.getAttribute("id");
          if (!e) continue;
          let r = eb(e)?.name;
          r && t.set(e, r);
        }
        return t;
      }(i).entries()) this.nodeNamesForDocument.set(e, t);
      return t;
    };
    this.importStatements = i.imports ?? [];
    i.rootComponentName && this.reservedNames.push(i.rootComponentName);
    this.singleLineSvgImports = "local" === i.markupImageOption || "write-to-disk" === i.markupImageOption;
  }
}
class eT extends eE {
  get shouldExtractRootNode() {
    return !0;
  }
  async getDocument() {
    let e = performance.now();
    let t = window.document.implementation.createHTMLDocument();
    await Promise.all([this.rootNode, ...(this.options?.additionalNodes ?? [])].map(e => eo(e, t, this.serializeWithOptions)));
    this.statsForLogs.serializerElapsedTimeMs = performance.now() - e;
    return t;
  }
  getNameForNode(e) {
    return x(e.name + (e.containingBreakpointFrame?.name ?? ""));
  }
  getPrimaryComponentName() {
    return this.generateDedupedPrimaryComponentName();
  }
  assembleReactCode(e, t) {
    let i = [this.rootNode, ...(this.options?.additionalNodes ?? [])].map(e => {
      let t = e.developerFriendlyId === this.rootNode.developerFriendlyId;
      let i = NaN;
      e.containingBreakpointFrame ? i = e.containingBreakpointFrame.size.x : t && this.options?.containingBreakpointFrame && (i = this.options.containingBreakpointFrame.size.x);
      return {
        id: e.developerFriendlyId,
        isPrimary: t,
        breakpointMin: i
      };
    });
    return function ({
      primaryComponentName: e,
      topLevelNodes: t,
      components: i,
      options: r,
      componentsCode: s = "",
      additionalImports: a = []
    }) {
      let n = ["import { useActiveBreakpoint } from 'figma:react'", ...new Set(a)].join("\n");
      let o = r?.includeDefaultExport ? `export default ${e};` : "";
      let l = t.sort((e, t) => e.isPrimary ? 1 : t.isPrimary ? -1 : e.breakpointMin - t.breakpointMin);
      let d = l.map((e, t) => {
        let r = i.find(t => t.id === e.id);
        if (!r) throw Error(`Component with id ${e.id} not found`);
        if (t === l.length - 1) return `  return <${r.name} />`;
        let s = l[t + 1]?.breakpointMin ?? 1 / 0;
        return Number.isNaN(s) || s === 1 / 0 ? `  return <${r.name} />` : `
  if (width < ${s}) {
    return <${r.name} />
  }`;
      }).join("\n");
      return `${n}
${s}
${i.map(({
        name: e,
        jsx: t
      }) => `function ${e}() {
  return ${t}
}`).join("\n\n")}

function ${e}() {
  const { width } = useActiveBreakpoint() 
  ${d}
}

${o}`;
    }({
      primaryComponentName: this.getPrimaryComponentName(),
      topLevelNodes: i,
      components: this.components,
      options: this.options,
      componentsCode: t,
      additionalImports: this.importStatements
    });
  }
}
export function $$eA0(e, t, i = r, s?:any) {
  let a = [e, t, {
    ...r,
    ...i
  }, s];
  return (i.additionalNodes?.length ? new eT(...a) : new eE(...a)).process();
}

let ez = {
  aliceblue: "#F0F8FF",
  antiquewhite: "#FAEBD7",
  aqua: "#00FFFF",
  aquamarine: "#7FFFD4",
  azure: "#F0FFFF",
  beige: "#F5F5DC",
  bisque: "#FFE4C4",
  black: "#000000",
  blanchedalmond: "#FFEBCD",
  blue: "#0000FF",
  blueviolet: "#8A2BE2",
  brown: "#A52A2A",
  burlywood: "#DEB887",
  cadetblue: "#5F9EA0",
  chartreuse: "#7FFF00",
  chocolate: "#D2691E",
  coral: "#FF7F50",
  cornflowerblue: "#6495ED",
  cornsilk: "#FFF8DC",
  crimson: "#DC143C",
  cyan: "#00FFFF",
  darkblue: "#00008B",
  darkcyan: "#008B8B",
  darkgoldenrod: "#B8860B",
  darkgray: "#A9A9A9",
  darkgreen: "#006400",
  darkgrey: "#A9A9A9",
  darkkhaki: "#BDB76B",
  darkmagenta: "#8B008B",
  darkolivegreen: "#556B2F",
  darkorange: "#FF8C00",
  darkorchid: "#9932CC",
  darkred: "#8B0000",
  darksalmon: "#E9967A",
  darkseagreen: "#8FBC8F",
  darkslateblue: "#483D8B",
  darkslategray: "#2F4F4F",
  darkslategrey: "#2F4F4F",
  darkturquoise: "#00CED1",
  darkviolet: "#9400D3",
  deeppink: "#FF1493",
  deepskyblue: "#00BFFF",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1E90FF",
  firebrick: "#B22222",
  floralwhite: "#FFFAF0",
  forestgreen: "#228B22",
  fuchsia: "#FF00FF",
  gainsboro: "#DCDCDC",
  ghostwhite: "#F8F8FF",
  gold: "#FFD700",
  goldenrod: "#DAA520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#ADFF2F",
  grey: "#808080",
  honeydew: "#F0FFF0",
  hotpink: "#FF69B4",
  indianred: "#CD5C5C",
  indigo: "#4B0082",
  ivory: "#FFFFF0",
  khaki: "#F0E68C",
  lavender: "#E6E6FA",
  lavenderblush: "#FFF0F5",
  lawngreen: "#7CFC00",
  lemonchiffon: "#FFFACD",
  lightblue: "#ADD8E6",
  lightcoral: "#F08080",
  lightcyan: "#E0FFFF",
  lightgoldenrodyellow: "#FAFAD2",
  lightgray: "#D3D3D3",
  lightgreen: "#90EE90",
  lightgrey: "#D3D3D3",
  lightpink: "#FFB6C1",
  lightsalmon: "#FFA07A",
  lightseagreen: "#20B2AA",
  lightskyblue: "#87CEFA",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#B0C4DE",
  lightyellow: "#FFFFE0",
  lime: "#00FF00",
  limegreen: "#32CD32",
  linen: "#FAF0E6",
  magenta: "#FF00FF",
  maroon: "#800000",
  mediumaquamarine: "#66CDAA",
  mediumblue: "#0000CD",
  mediumorchid: "#BA55D3",
  mediumpurple: "#9370DB",
  mediumseagreen: "#3CB371",
  mediumslateblue: "#7B68EE",
  mediumspringgreen: "#00FA9A",
  mediumturquoise: "#48D1CC",
  mediumvioletred: "#C71585",
  midnightblue: "#191970",
  mintcream: "#F5FFFA",
  mistyrose: "#FFE4E1",
  moccasin: "#FFE4B5",
  navajowhite: "#FFDEAD",
  navy: "#000080",
  oldlace: "#FDF5E6",
  olive: "#808000",
  olivedrab: "#6B8E23",
  orange: "#FFA500",
  orangered: "#FF4500",
  orchid: "#DA70D6",
  palegoldenrod: "#EEE8AA",
  palegreen: "#98FB98",
  paleturquoise: "#AFEEEE",
  palevioletred: "#DB7093",
  papayawhip: "#FFEFD5",
  peachpuff: "#FFDAB9",
  peru: "#CD853F",
  pink: "#FFC0CB",
  plum: "#DDA0DD",
  powderblue: "#B0E0E6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#FF0000",
  rosybrown: "#BC8F8F",
  royalblue: "#4169E1",
  saddlebrown: "#8B4513",
  salmon: "#FA8072",
  sandybrown: "#F4A460",
  seagreen: "#2E8B57",
  seashell: "#FFF5EE",
  sienna: "#A0522D",
  silver: "#C0C0C0",
  skyblue: "#87CEEB",
  slateblue: "#6A5ACD",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#FFFAFA",
  springgreen: "#00FF7F",
  steelblue: "#4682B4",
  tan: "#D2B48C",
  teal: "#008080",
  thistle: "#D8BFD8",
  tomato: "#FF6347",
  turquoise: "#40E0D0",
  violet: "#EE82EE",
  wheat: "#F5DEB3",
  white: "#FFFFFF",
  whitesmoke: "#F5F5F5",
  yellow: "#FFFF00",
  yellowgreen: "#9ACD32"
};
function eO(e, t) {
  if (!e) return null;
  if ("string" != typeof e) return e;
  let i = null != t;
  let r = t ?? 1;
  return function (e, t = 1) {
    let i = RegExp("color\\(\\s*display-p3\\s*(?<red>[-+]?[0-9]*\\.?[0-9]+)\\s+(?<green>[-+]?[0-9]*\\.?[0-9]+)\\s+(?<blue>[-+]?[0-9]*\\.?[0-9]+)\\s*(?:\\/\\s*(?<alpha>[-+]?[0-9]*\\.?[0-9]+%?))?\\s*\\)");
    let r = e.match(i);
    if (r && r.groups && "red" in r.groups && "green" in r.groups && "blue" in r.groups) {
      let {
        red,
        green,
        blue,
        alpha
      } = r.groups;
      return {
        r: parseFloat(red),
        g: parseFloat(green),
        b: parseFloat(blue),
        a: alpha ? parseFloat(alpha) : t
      };
    }
    return null;
  }(e, r) ?? function (e, t = 1) {
    let i = ez[e.toLowerCase()];
    return i ? eW(i, !1, t) : null;
  }(e, r) ?? function (e, t = 1) {
    let i;
    return (i = eK.exec(e = e.trim())) ? ej(eU(i[1]), eU(i[2]), eU(i[3]), null == i[4] ? t : eX(i[4])) : (i = eZ.exec(e)) ? ej(eB(i[1]), eB(i[2]), eB(i[3]), null == i[4] ? t : eX(i[4])) : (i = eY.exec(e)) ? function (e, t, i, r) {
      if (0 === t) return ej(i, i, i, r);
      let s = i < .5 ? i * (1 + t) : i + t - i * t;
      let a = 2 * i - s;
      let n = [0, 0, 0];
      for (let t = 0; t < 3; ++t) {
        let i = e + -(1 / 3 * (t - 1));
        i < 0 && ++i;
        i > 1 && --i;
        6 * i < 1 ? n[t] = a + (s - a) * 6 * i : 2 * i < 1 ? n[t] = s : 3 * i < 2 ? n[t] = a + (s - a) * (2 / 3 - i) * 6 : n[t] = a;
      }
      return ej(n[0], n[1], n[2], r);
    }(eq(i[1]), eU(i[2]), eU(i[3]), null == i[4] ? t : eX(i[4])) : (i = eQ.exec(e)) ? function (e, t, i, r) {
      let s = (100 * e + 16) / 116;
      let a = t / 500 + s;
      let n = s - i / 200;
      let o = e => {
        let t = e ** 3;
        return t > eH ? t : (e - 16 / 116) / 7.787;
      };
      s = o(s);
      let l = e => e > .0031308 ? 1.055 * e ** (1 / 2.4) - .055 : 12.92 * e;
      let d = l(3.2404542 * (a = 95.047 * o(a) / 100) + -1.5371385 * s + -.4985314 * (n = 108.883 * o(n) / 100));
      let c = l(-.969266 * a + 1.8760108 * s + .041556 * n);
      let u = l(.0556434 * a + -.2040259 * s + 1.0572252 * n);
      return ej(eJ(d), eJ(c), eJ(u), r);
    }(eU(i[1]), parseFloat(i[2]), parseFloat(i[3]), null == i[4] ? t : eX(i[4])) : (i = e0.exec(e)) ? labToRgb({
      l: eG(i[1], .01),
      c: eG(i[2], .004),
      h: eq(i[3]),
      a: null == i[4] ? t : eX(i[4])
    }) : (i = e1.exec(e)) ? labToXyz({
      l: eG(i[1], .01),
      ax: eG(i[2], .01),
      bx: parseFloat(i[3]),
      a: null == i[4] ? t : eX(i[4])
    }) : null;
  }(e, r) ?? eW(e, i, r) ?? null;
}
function eW(e, t = !1, i = 1) {
  let r = /[^0-9a-f]*([0-9a-f]*)/i.exec(e.trim());
  if (!r) return null;
  let s = r[1];
  if (s.length >= 8 && t) return ej(e_(s.substring(0, 2)), e_(s.substring(2, 4)), e_(s.substring(4, 6)), e_(s.substring(6, 8)));
  if (7 === s.length && t) return ej(e_(s.substring(0, 2)), e_(s.substring(2, 4)), e_(s.substring(4, 6)), eV(s[6]));
  if (s.length >= 6) return ej(e_(s.substring(0, 2)), e_(s.substring(2, 4)), e_(s.substring(4, 6)), i);
  if (5 === s.length && t) return ej(eV(s[0]), eV(s[1]), eV(s[2]), e_(s.substring(3, 5)));
  if (4 === s.length && t) return ej(eV(s[0]), eV(s[1]), eV(s[2]), eV(s[3]));
  if (s.length >= 3) return ej(eV(s[0]), eV(s[1]), eV(s[2]), i);
  if (2 === s.length) {
    let e = e_(s);
    return ej(e, e, e, i);
  } else if (1 === s.length) {
    let e = eV(s);
    return ej(e, e, e, i);
  }
  return null;
}
let eH = 443 == require.j ? (6 / 29) ** 3 : null;
function ej(e, t, i, r = 1) {
  return isNaN(e) || isNaN(t) || isNaN(i) || isNaN(r) ? null : {
    r: e,
    g: t,
    b: i,
    a: r
  };
}
function eV(e) {
  return e_(`${e}${e}`);
}
function e_(e) {
  return eJ(parseInt(e, 16) / 255);
}
function eB(e) {
  return eJ(parseFloat(e) / 255);
}
function eU(e) {
  return eJ(.01 * parseFloat(e));
}
function eG(e, t) {
  return e.endsWith("%") ? eJ(parseFloat(e) * t) : parseFloat(e);
}
function eX(e) {
  return e ? e.includes("%") ? eU(e) : eJ(parseFloat(e)) : 1;
}
function eq(e) {
  let t = parseFloat(e);
  let i = 0;
  i = e.includes("grad") ? .9 * t : e.includes("rad") ? 180 * t / Math.PI : e.includes("turn") ? 360 * t : t;
  return (i = positiveMod(i, 360)) / 360;
}
function eJ(e) {
  return clamp(e, 0, 1);
}
let eK = /^(?:rgba?\()?\s*([-+]?[0-9]*\.?[0-9]+)%\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)%\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)%\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+%?))?\s*\)?\s*;?$/;
let eZ = /^(?:rgba?\()?\s*([0-9]*\.?[0-9]+)\s*?[, ]\s*([0-9]*\.?[0-9]+)\s*?[, ]\s*([0-9]*\.?[0-9]+)\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+%?))?\s*\)?\s*;?$/;
let eY = /^(?:hsla?\()?\s*([-+]?[0-9]*\.?[0-9]+(?:deg|rad|grad|turn)?)\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)%\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)%\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+%?))?\s*\)?\s*;?$/;
let eQ = /^(?:lab?\()?\s*([0-9]*\.?[0-9]+)%\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+%?))?\s*\)?\s*;?$/;
let e0 = /^(?:oklch?\()\s*([0-9]*\.?[0-9]+%?)\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+%?)\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+(?:deg|rad|grad|turn)?))?\s*\)?\s*;?$/;
let e1 = /^(?:oklab?\()\s*([0-9]*\.?[0-9]+%?)%\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+%?)\s*?[, ]\s*([-+]?[0-9]*\.?[0-9]+)\s*?(?:[,\/ ]\s*([-+]?[0-9]*\.?[0-9]+%?))?\s*\)?\s*;?$/;
let e2 = e => {
  let t = eO(e);
  if (null == t) return null;
  let {
    r: _r,
    g,
    b,
    a
  } = t;
  return {
    type: "SOLID",
    color: {
      r: _r,
      g,
      b,
      a: 1
    },
    opacity: a
  };
};
let e4 = e => {
  try {
    let t = Ay(e).rgba();
    return {
      type: "SOLID",
      color: {
        r: t[0] / 255,
        g: t[1] / 255,
        b: t[2] / 255,
        a: t[3]
      },
      opacity: t[3]
    };
  } catch {
    return null;
  }
};
let e5 = (e, {
  useChromaJs: t = !1
} = {}) => t ? e4(e) : e2(e);
function e9(e, t, i) {
  if ("text" != t.styles.backgroundClip) {
    let r = t.styles.backgroundColor ? e5(t.styles.backgroundColor, {
      useChromaJs: !0
    }) : null;
    let s = t.styles.backgroundImage ? function (e, t) {
      let i = [];
      for (let r of function (e) {
        let t = e.trim();
        return ["none", "initial", "inherit", "unset", "revert", "revert-layer"].includes(t) ? [] : e3(t).map(e => {
          var t;
          var i;
          return (t = (t = e.trim()).trim()).startsWith("url(") ? function (e) {
            let t = e.match(/url\(\s*(['"]?)(.+?)\1\s*\)/);
            return t ? {
              type: "url",
              value: t[2]
            } : {
              type: "url",
              value: ""
            };
          }(t) : t.startsWith("linear-gradient(") ? e6(t) : t.startsWith("radial-gradient(") ? e7(t) : t.startsWith("conic-gradient(") ? te(t) : t.startsWith("repeating-linear-gradient(") ? tt(t, "repeating-linear-gradient") : t.startsWith("repeating-radial-gradient(") ? tt(t, "repeating-radial-gradient") : t.startsWith("repeating-conic-gradient(") ? tt(t, "repeating-conic-gradient") : t.startsWith("image-set(") ? {
            type: "image-set",
            images: e3((i = t).substring(10, i.length - 1).trim()).map(e => {
              let t;
              let i;
              let r = (e = e.trim()).match(/url\(\s*(['"]?)(.+?)\1\s*\)/);
              if (!r) return {
                url: ""
              };
              let s = r[2];
              let a = e.replace(r[0], "").trim();
              let n = a.match(/(\d+(?:\.\d+)?x|(?:\d+(?:\.\d+)?)(?:dpi|dpcm|dppx))/);
              n && (t = n[0]);
              let o = a.match(/type\(\s*(['"])(.+?)\1\s*\)/);
              o && (i = o[2]);
              return {
                url: s,
                resolution: t,
                type: i
              };
            })
          } : (t.includes("(") && t.endsWith(")") ? console.warn(`Unrecognized function: ${t}`) : console.warn(`Unrecognized value: ${t}`), null);
        }).filter(e => null != e);
      }(e)) switch (r.type) {
        case "linear-gradient":
          i.push({
            type: "GRADIENT_LINEAR",
            opacity: 1,
            visible: !0,
            blendMode: "NORMAL",
            stops: r.stops.map((e, t) => ({
              color: eO(e.color),
              position: 0 == r.stops.length ? 0 : t / (r.stops.length - 1)
            }))
          });
          break;
        case "radial-gradient":
        case "conic-gradient":
        case "repeating-linear-gradient":
        case "repeating-radial-gradient":
        case "repeating-conic-gradient":
        case "image-set":
          break;
        case "url":
          let e = t.get(r.value);
          if (null == e) return null;
          i.push(function (e) {
            let t = getSingletonSceneGraph().createNode("FRAME");
            t.fills = [];
            t.insertImageInFillPaint(e, "FIT");
            let [i] = t.fills;
            t.removeSelfAndChildren();
            return i;
          }(e));
          break;
        default:
          throwTypeError(r);
      }
      return i.toReversed();
    }(t.styles.backgroundImage, i) : null;
    e.fills = [...(null != r ? [r] : []), ...(null != s ? s : [])];
  } else e.fills = [];
}
function e3(e) {
  let t = [];
  let i = "";
  let r = 0;
  for (let s = 0; s < e.length; s++) {
    let a = e[s];
    "(" === a ? (r++, i += a) : ")" === a ? (r--, i += a) : "," === a && 0 === r ? (t.push(i), i = "") : i += a;
  }
  i && t.push(i);
  return t;
}
function e8(e, t) {
  let i = e3(e.substring(t.length + 1, e.length - 1).trim());
  if (0 === i.length) return {
    params: "",
    stops: []
  };
  let r = "";
  let s = i;
  let a = i[0].trim();
  (!/^(#|rgb|rgba|hsl|hsla|[a-z]+)/.test(a) || a.includes("at") || a.includes("to") || /^\d+deg/.test(a) || /^(circle|ellipse)/.test(a)) && (r = a, s = i.slice(1));
  return {
    params: r,
    stops: s.map(e => function (e) {
      if (e = e.trim(), /[\d\.]+(deg|rad|grad|turn)\s*[\d\.]+(deg|rad|grad|turn)\s*$/.test(e)) {
        let t = e.match(/[\d\.]+(deg|rad|grad|turn)\s*[\d\.]+(deg|rad|grad|turn)\s*$/);
        if (t) return {
          color: e.substring(0, t.index).trim(),
          position: t[0].trim()
        };
      }
      let t = e.lastIndexOf(" ");
      if (-1 === t) return {
        color: e
      };
      let i = e.substring(t + 1);
      return /^[0-9]+(%|px|em|rem|vh|vw|vmin|vmax|ch|ex|cm|mm|in|pt|pc|deg|rad|grad|turn)?$/.test(i) ? {
        color: e.substring(0, t).trim(),
        position: i
      } : {
        color: e
      };
    }(e.trim()))
  };
}
function e6(e) {
  let {
    params,
    stops
  } = e8(e, "linear-gradient");
  return {
    type: "linear-gradient",
    direction: params || void 0,
    stops
  };
}
function e7(e) {
  let t;
  let i;
  let r;
  let {
    params,
    stops
  } = e8(e, "radial-gradient");
  if (params) {
    if (params.includes(" at ")) {
      let [e, a] = params.split(" at ");
      r = a.trim();
      e.includes("circle") ? (t = "circle", i = e.replace("circle", "").trim() || void 0) : e.includes("ellipse") ? (t = "ellipse", i = e.replace("ellipse", "").trim() || void 0) : i = e.trim();
    } else params.includes("circle") ? (t = "circle", i = params.replace("circle", "").trim() || void 0) : params.includes("ellipse") ? (t = "ellipse", i = params.replace("ellipse", "").trim() || void 0) : i = params.trim();
  }
  return {
    type: "radial-gradient",
    shape: t,
    size: i,
    position: r,
    stops
  };
}
function te(e) {
  let t;
  let i;
  let {
    params,
    stops
  } = e8(e, "conic-gradient");
  if (params) {
    if (params.startsWith("at ") && (r = "from 0deg " + params), params.includes(" at ")) {
      let [e, s] = params.split(" at ");
      t = e.trim() || void 0;
      i = s.trim();
    } else /^[\d\.]+(deg|rad|grad|turn)/.test(params) ? t = Array.from(params.matchAll(/([\d\.]+(?:deg|rad|grad|turn))+/gm)).map(e => e[1]).join(" ") : i = params.trim();
  }
  return {
    type: "conic-gradient",
    angle: t,
    position: i,
    stops
  };
}
function tt(e, t) {
  if ("repeating-linear-gradient" === t) {
    let i = e6(e.replace("repeating-", ""));
    return {
      type: t,
      direction: i.direction,
      stops: i.stops
    };
  }
  if ("repeating-radial-gradient" === t) {
    let i = e7(e.replace("repeating-", ""));
    return {
      type: t,
      shape: i.shape,
      size: i.size,
      position: i.position,
      stops: i.stops
    };
  }
  {
    let i = te(e.replace("repeating-", ""));
    return {
      type: t,
      angle: i.angle,
      position: i.position,
      stops: i.stops
    };
  }
}
if (443 == require.j) {}
function tr(e, t) {
  let {
    width,
    height
  } = t.rect;
  let {
    borderLeftWidth,
    borderRightWidth,
    borderTopWidth,
    borderBottomWidth,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderLeftColor
  } = t.styles;
  e.bordersTakeSpace = !1;
  e.borderStrokeWeightsIndependent = !0;
  e.borderLeftWeight = PW(borderLeftWidth) ?? 0;
  e.borderRightWeight = PW(borderRightWidth) ?? 0;
  e.borderTopWeight = PW(borderTopWidth) ?? 0;
  e.borderBottomWeight = PW(borderBottomWidth) ?? 0;
  e.stackLeftPadding = e.stackLeftPadding + e.borderLeftWeight;
  e.stackRightPadding = e.stackRightPadding + e.borderRightWeight;
  e.stackTopPadding = e.stackTopPadding + e.borderTopWeight;
  e.stackBottomPadding = e.stackBottomPadding + e.borderBottomWeight;
  e.rectangleCornerRadiiIndependent = !0;
  e.rectangleTopLeftCornerRadius = PW(borderTopLeftRadius) ?? (width === height ? KS(borderTopLeftRadius, {
    axisSizeInPixels: width
  }) ?? 0 : 0);
  e.rectangleTopRightCornerRadius = PW(borderTopRightRadius) ?? (width === height ? KS(borderTopRightRadius, {
    axisSizeInPixels: width
  }) ?? 0 : 0);
  e.rectangleBottomLeftCornerRadius = PW(borderBottomLeftRadius) ?? (width === height ? KS(borderBottomLeftRadius, {
    axisSizeInPixels: width
  }) ?? 0 : 0);
  e.rectangleBottomRightCornerRadius = PW(borderBottomRightRadius) ?? (width === height ? KS(borderBottomRightRadius, {
    axisSizeInPixels: width
  }) ?? 0 : 0);
  let h = borderLeftColor ? e5(borderLeftColor) : null;
  e.strokePaints = h ? {
    data: [h],
    blobs: []
  } : {
    data: [],
    blobs: []
  };
}
if (443 == require.j) {}
if (_require, 443 == require.j) {}
function tn(e, t, i) {
  let r = function (e) {
    for (let t of ((e.styles.fontFamily ?? "sans-serif") || "").split(/,(?=(?:[^"']*["'][^"']*["'])*[^"']*$)/).map(e => e.trim().replace(/^["']|["']$/g, "")).filter(Boolean)) {
      let i = null;
      let r = parseInt(e.styles.fontWeight ?? "400");
      let s = "italic" == e.styles.fontStyle;
      if (i = getClosestFontName(t, r, s) ?? getClosestFontName(td[t], r, s) ?? getClosestFontName(to[t], r, s)) return {
        ...i,
        postscript: i.family
      };
    }
    return null;
  }(t) ?? {
    family: "Arimo",
    style: "Regular",
    postscript: "Arimo"
  };
  let s = PW(t.styles.fontSize ?? "16px");
  assert(null != r, `Expected font to be parsed: ${t.styles.fontFamily}`);
  assert(null != s, `Expected font size to be parsed: ${t.styles.fontSize}`);
  i.fontName = r;
  i.fontSize = s;
  i.lineHeight = function (e) {
    let t = Or(e ?? "");
    return null == t || "AUTO" === t.units || "RAW" === t.units ? {
      units: "PERCENT",
      value: 100
    } : t;
  }(t.styles.lineHeight ?? "normal");
  i.letterSpacing = function (e) {
    let t = {
      units: "PERCENT",
      value: -.05
    };
    if (null == e) return t;
    let i = Or(e);
    return i?.units === "PIXELS" || i?.units === "PERCENT" ? i : t;
  }(t.styles.letterSpacing ?? "0px");
  i.textAlignHorizontal = function (e) {
    switch (e) {
      case "start":
      case "left":
      case null:
        return "LEFT";
      case "end":
      case "right":
        return "RIGHT";
      case "center":
      case "-webkit-center":
        return "CENTER";
      case "justify":
        return "JUSTIFIED";
      case "-moz-initial":
      case "inherit":
      case "initial":
      case "revert":
      case "revert-layer":
      case "unset":
      case "match-parent":
        throw Error(`Unsupported text-align: ${e}`);
      default:
        throwTypeError(e);
    }
  }(t.styles.textAlign ?? "left");
  i.fills = [e5(t.styles.color ?? "rgb(0, 0, 0)")];
  i.characters = e.text.trim();
}
let to = {
  Arial: "Arimo",
  "Arial Rounded MT": "Arimo",
  "SF Pro": "Arimo",
  "SF Pro Rounded": "Arimo",
  Helvetica: "Arimo",
  "Segoe UI Variable": "Arimo",
  Times: "Tinos",
  "New York": "Tinos",
  "Times New Roman": "Tinos",
  Consolas: "Cousine",
  "SF Mono": "Cousine",
  Menlo: "Cousine",
  serif: "Tinos",
  "ui-serif": "Tinos",
  "sans-serif": "Arimo",
  "ui-sans-serif": "Arimo",
  "ui-rounded": "Arimo",
  monospace: "Cousine",
  "ui-monospace": "Cousine",
  "system-ui": "Arimo"
};
let tl = navigator.userAgent.includes("Macintosh");
let td = {
  serif: tl ? "Times" : "Times New Roman",
  "sans-serif": tl ? "Helvetica" : "Arial",
  monospace: tl ? "Menlo" : "Consolas",
  "system-ui": tl ? "SF Pro" : "Segoe UI Variable",
  "ui-serif": tl ? "New York" : "Times New Roman",
  "ui-sans-serif": tl ? "SF Pro" : "Arial",
  "ui-monospace": tl ? "SF Mono" : "Consolas",
  "ui-rounded": tl ? "SF Pro Rounded" : "Arial Rounded MT"
};
if (443 == require.j) {}
export async function $$tu1(e, t, i, r = TrackType.IGNORE) {
  let s = await tp(i, e.assets);
  await loadNonPluginFont({
    family: "Inter",
    style: "Regular"
  });
  await loadNonPluginFont({
    family: "Arimo",
    style: "Regular"
  });
  return permissionScopeHandler.system("html-to-figma", () => {
    let i = t.createNode("FRAME", {
      tracking: r
    });
    i.name = "Viewport";
    i.x = e.viewportRect.x;
    i.y = e.viewportRect.y;
    i.resizeWithConstraints(e.viewportRect.width, e.viewportRect.height);
    i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }];
    i.frameMaskDisabled = !0;
    let a = t.createNode("FRAME", {
      tracking: r
    });
    for (let {
      node
    } of (a.name = "Document", a.x = e.documentRect.x, a.y = e.documentRect.y, a.resizeWithConstraints(e.documentRect.width, e.documentRect.height), i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }], i.appendChild(a), function e(t, i, r, s, a) {
      let n = i(t, s, a);
      if (null == n) return [];
      let {
        ctx,
        node: _node
      } = n;
      let d = [];
      if (1 === s.nodeType) for (let t of s.childNodes) {
        let a = e(ctx, i, r, t, s);
        d.push(...a);
      }
      return r(ctx, s, _node, d);
    }({
      assets: s
    }, (e, i, a) => {
      if (i.nodeType === HZ.ELEMENT_NODE) {
        let r = function (e, t, i) {
          if ("SVG" === t.tag && t.content) return e.createNodeFromSVG(t.content);
          if ("IMG" === t.tag) {
            let r = i.svgs.get(t.attributes.src);
            if (r) return e.createNodeFromSVG(r);
          }
          return null;
        }(t, i, s);
        let a = r ?? t.createNode("FRAME");
        if (a.x = i.rect.x, a.y = i.rect.y, a.resizeWithConstraints(i.rect.width, i.rect.height), a.name = i.tag || i.id, _$$D(a, i), e9(a, i, e.assets.imageSets), tr(a, i), "CANVAS" === i.tag && i.placeholderUrl) {
          let e = s.imageSets.get(i.placeholderUrl);
          e && a.insertImageInFillPaint(e, "FIT");
        }
        if ("IMG" === i.tag && !r) {
          let e = s.imageSets.get(i.attributes.src);
          e && a.insertImageInFillPaint(e, "contain" == i.styles.objectFit ? "FIT" : "FILL");
        }
        return {
          ctx: e,
          node: a
        };
      }
      if (i.nodeType === HZ.TEXT_NODE) {
        assert(null != a, "Expected parent element to be defined for TEXT_NODE");
        let s = t.createNode("TEXT", {
          tracking: r
        });
        s.x = i.rect.x;
        s.y = i.rect.y;
        tn(i, a, s);
        s.resizeWithConstraints(i.rect.width, i.rect.height);
        s.textAutoResize = "HEIGHT";
        s.update();
        return {
          ctx: e,
          node: s
        };
      }
      throw Error(`Unsupported node type: ${i.nodeType}`);
    }, (e, t, i, r) => {
      for (let {
        node: _node2
      } of r) {
        _node2.x -= t.rect.x;
        _node2.y -= t.rect.y;
        i.appendChild(_node2);
      }
      return [{
        ctx: e,
        element: t,
        node: i
      }];
    }, e.root))) a.appendChild(node);
    t.updateAll();
    return i;
  });
}
async function tp(e, t) {
  return {
    imageSets: await tm(e, t),
    svgs: await th(t)
  };
}
async function th(e) {
  let t = new Map();
  for (let [i, r] of e.entries()) "image/svg+xml" === r.blob.type && t.set(i, await r.blob.text());
  return t;
}
async function tm(e, t) {
  let i = new Map();
  for (let [r, s] of t.entries()) {
    let t = new Uint8Array(await s.blob.arrayBuffer());
    i.set(r, await e.decodeImage(t, s.blob.type, "image"));
  }
  return i;
}
if (443 == require.j) {}
export async function $$tg2(e, t, i, r = TrackType.IGNORE) {
  let s = await tb(i, e.assets);
  await loadNonPluginFont({
    family: "Inter",
    style: "Regular"
  });
  await loadNonPluginFont({
    family: "Arimo",
    style: "Regular"
  });
  return permissionScopeHandler.system("html-to-figma", () => {
    let i = t.createNode("FRAME", {
      tracking: r
    });
    i.name = "Viewport";
    i.x = e.viewportRect.x;
    i.y = e.viewportRect.y;
    i.resizeWithConstraints(e.viewportRect.width, e.viewportRect.height);
    i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }];
    i.frameMaskDisabled = !0;
    let a = t.createNode("FRAME", {
      tracking: r
    });
    for (let {
      node
    } of (a.name = "Document", a.x = e.documentRect.x, a.y = e.documentRect.y, a.resizeWithConstraints(e.documentRect.width, e.documentRect.height), i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }], i.appendChild(a), function e(t, i, r, s, a) {
      let n = i(t, s, a);
      if (null == n) return [];
      let {
        ctx,
        node: _node3
      } = n;
      let d = [];
      if (1 === s.nodeType) for (let t of s.childNodes) {
        let a = e(ctx, i, r, t, s);
        d.push(...a);
      }
      return r(ctx, s, _node3, d) ?? d;
    }({
      assets: s
    }, (e, i, a) => {
      if (i.nodeType === HZ.ELEMENT_NODE) {
        let r = function (e, t, i) {
          if ("SVG" === t.tag && t.content) return e.createNodeFromSVG(t.content);
          if ("IMG" === t.tag) {
            let r = i.svgs.get(t.attributes.src);
            if (r) return e.createNodeFromSVG(r);
          }
          return null;
        }(t, i, s);
        let a = r ?? t.createNode("FRAME");
        if (a.x = i.rect.x, a.y = i.rect.y, a.resizeWithConstraints(i.rect.width, i.rect.height), a.name = i.tag || i.id, _$$D(a, i), e9(a, i, e.assets.imageSets), tr(a, i), "CANVAS" === i.tag && i.placeholderUrl) {
          let e = s.imageSets.get(i.placeholderUrl);
          e && a.insertImageInFillPaint(e, "FIT");
        }
        if ("IMG" === i.tag && !r) {
          let e = s.imageSets.get(i.attributes.src);
          e && a.insertImageInFillPaint(e, "contain" == i.styles.objectFit ? "FIT" : "FILL");
        }
        return {
          ctx: e,
          node: a
        };
      }
      if (i.nodeType === HZ.TEXT_NODE) {
        assert(null != a, "Expected parent element to be defined for TEXT_NODE");
        let s = t.createNode("TEXT", {
          tracking: r
        });
        s.x = i.rect.x;
        s.y = i.rect.y;
        tn(i, a, s);
        s.resizeWithConstraints(i.rect.width, i.rect.height);
        s.textAutoResize = "HEIGHT";
        s.update();
        return {
          ctx: e,
          node: s
        };
      }
      throw Error(`Unsupported node type: ${i.nodeType}`);
    }, (e, t, i, r) => {
      for (let s of _$$b()) try {
        let a = s.onPostVisit(e, t, i, r);
        if (a) return a;
      } catch (e) {
        console.error(`Failed to apply special case: ${s.name}`, e);
      }
      for (let {
        node: _node4,
        element
      } of r) (1 !== element.nodeType || "BR" !== element.tag) && (_node4.x -= t.rect.x, _node4.y -= t.rect.y, i.appendChild(_node4));
      return [{
        ctx: e,
        element: t,
        node: i
      }];
    }, e.root))) a.appendChild(node);
    t.updateAll();
    return i;
  });
}
async function tb(e, t) {
  return {
    imageSets: await tv(e, t),
    svgs: await ty(t)
  };
}
async function ty(e) {
  let t = new Map();
  for (let [i, r] of e.entries()) "image/svg+xml" === r.blob.type && t.set(i, await r.blob.text());
  return t;
}
async function tv(e, t) {
  let i = new Map();
  for (let [r, s] of t.entries()) {
    let t = new Uint8Array(await s.blob.arrayBuffer());
    i.set(r, await e.decodeImage(t, s.blob.type, "image"));
  }
  return i;
}
export async function $$tx3(e, t, i, r = TrackType.IGNORE) {
  let s = await tk(i, e.assets);
  await loadNonPluginFont({
    family: "Inter",
    style: "Regular"
  });
  await loadNonPluginFont({
    family: "Arimo",
    style: "Regular"
  });
  return permissionScopeHandler.system("html-to-figma", () => {
    let i = t.createNode("FRAME", {
      tracking: r
    });
    i.name = "Viewport";
    i.x = e.viewportRect.x;
    i.y = e.viewportRect.y;
    i.resizeWithConstraints(e.viewportRect.width, e.viewportRect.height);
    i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }];
    i.frameMaskDisabled = !0;
    let a = t.createNode("FRAME", {
      tracking: r
    });
    a.name = "Document";
    a.x = e.documentRect.x;
    a.y = e.documentRect.y;
    a.resizeWithConstraints(e.documentRect.width, e.documentRect.height);
    a.stackMode = "VERTICAL";
    i.fills = [{
      type: "SOLID",
      color: {
        r: 1,
        g: 1,
        b: 1,
        a: 1
      }
    }];
    i.appendChild(a);
    let n = new Map();
    let o = {
      nodeType: HZ.ELEMENT_NODE,
      tag: "html",
      attributes: {},
      styles: {},
      childNodes: [],
      rect: {
        ...e.documentRect
      },
      id: "__root"
    };
    n.set(o, a);
    (function (e, t, i, r) {
      let s = [{
        element: e.root,
        parentElement: t,
        index: 0,
        phase: "enter"
      }];
      for (; s.length > 0;) {
        let {
          element,
          parentElement,
          index,
          phase
        } = s.pop();
        if ("enter" === phase) {
          if (!1 === i(element, parentElement, index)) continue;
          if (s.push({
            element,
            parentElement,
            index,
            phase: "leave"
          }), element.nodeType === HZ.ELEMENT_NODE && element.childNodes.length > 0) for (let t = element.childNodes.length - 1; t >= 0; t--) s.push({
            element: element.childNodes[t],
            parentElement: element,
            index: t,
            phase: "enter"
          });
        } else r(element, parentElement, index);
      }
    })(e, o, (e, i) => {
      if (e.nodeType === HZ.TEXT_NODE) {
        let s = function (e, t) {
          switch (e.styles.whiteSpace) {
            case void 0:
            case "normal":
            case "nowrap":
              return t.text.replace(/\s+/g, " ").trim();
            case "pre":
            case "pre-wrap":
            case "break-spaces":
              return t.text;
            case "pre-line":
              return t.text.replace(/[^\S\n]+/g, " ").replace(/^[ ]+|[ ]+$/gm, "");
            default:
              throwError(`Unsupported white-space: ${e.styles.whiteSpace}`);
          }
        }(i, e);
        if (0 === s.length) return !1;
        e.text = s;
        let a = t.createNode("TEXT", {
          tracking: r
        });
        n.set(e, a);
        tn(e, i, a);
        return void a.resizeWithConstraints(e.rect.width, e.rect.height);
      }
      if (e.nodeType === HZ.ELEMENT_NODE) {
        if ("none" === e.styles.display || _$$h(e) && (e.rect.width < 1 || e.rect.height < 1)) return !1;
        let a = function (e, t, i) {
          if ("SVG" === t.tag && t.content) return e.createNodeFromSVG(t.content);
          if ("IMG" === t.tag) {
            let r = i.svgs.get(t.attributes.src);
            if (r) return e.createNodeFromSVG(r);
          }
          return null;
        }(t, e, s) ?? t.createNode("FRAME", {
          tracking: r
        });
        switch (a.name = `Content (${e.tag || e.id}) (${e.styles.display})`, n.set(e, a), _$$D(a, e), e9(a, e, s.imageSets), function (e, t, i) {
          if ("IMG" === t.tag && t.attributes.src) {
            let r = i.imageSets.get(t.attributes.src);
            r && e.insertImageInFillPaint(r, "contain" == t.styles.objectFit ? "FIT" : "FILL");
          }
        }(a, e, s), function (e, t, i) {
          if ("CANVAS" === t.tag && t.placeholderUrl) {
            let r = i.imageSets.get(t.placeholderUrl);
            r && e.insertImageInFillPaint(r, "FIT");
          }
        }(a, e, s), a.stackMode = "VERTICAL", a.stackLeftPadding = PW(e.styles.paddingLeft) ?? 0, a.stackTopPadding = PW(e.styles.paddingTop) ?? 0, a.stackRightPadding = PW(e.styles.paddingRight) ?? 0, a.stackBottomPadding = PW(e.styles.paddingBottom) ?? 0, tr(a, e), a.resizeWithConstraints(e.rect.width - a.stackLeftPadding - a.stackRightPadding, e.rect.height - a.stackTopPadding - a.stackBottomPadding), e.styles.display) {
          case "block":
          case "inline-block":
          case "inline":
          case "flow-root":
          case "list-item":
          case "inline list-item":
            if (a.stackMode = "VERTICAL", a.stackPrimaryAlignItems = "MIN", a.stackCounterAlignItems = "MIN", i.styles.alignItems) switch (i.styles.alignItems) {
              case "normal":
              case "start":
              case "stretch":
              case "baseline":
              case "flex-start":
                a.stackCounterAlignItems = "MIN";
                break;
              case "center":
                a.stackCounterAlignItems = "CENTER";
                break;
              case "flex-end":
                a.stackCounterAlignItems = "MAX";
                break;
              default:
                throwError(`Unsupported align-items value: ${i.styles.alignItems}`);
            }
            if (i.styles.justifyContent) switch (i.styles.justifyContent) {
              case "normal":
              case "start":
              case "flex-start":
                a.stackPrimaryAlignItems = "MIN";
                break;
              case "center":
                a.stackPrimaryAlignItems = "CENTER";
                break;
              case "flex-end":
                a.stackPrimaryAlignItems = "MAX";
                break;
              case "space-between":
              case "space-around":
              case "space-evenly":
                a.stackPrimaryAlignItems = "SPACE_BETWEEN";
                break;
              default:
                throwError(`Unsupported justify-content value: ${i.styles.justifyContent}`);
            }
            break;
          case "flex":
          case "inline-flex":
            a.stackMode = "HORIZONTAL";
            a.stackWrap = "wrap" === e.styles.flexWrap || "wrap-reverse" === e.styles.flexWrap ? "WRAP" : "NO_WRAP";
            a.stackSpacing = "row" === e.styles.flexDirection ? PW(e.styles.rowGap) ?? 0 : PW(e.styles.columnGap) ?? 0;
            a.stackCounterSpacing = "row" === e.styles.flexDirection ? PW(e.styles.columnGap) ?? 0 : PW(e.styles.rowGap) ?? 0;
            a.stackPrimaryAlignItems = "MIN";
            a.stackCounterAlignItems = "MIN";
            break;
          case "grid":
          case "inline-grid":
          case "table":
          case "inline-table":
          case "contents":
            n.$$delete(e);
            a.removeSelfAndChildren();
            return !1;
          default:
            throwError(`Unsupported display type: ${e.styles.display}`);
        }
      }
    }, (e, i, s) => {
      let a = n.get(e);
      let o = n.get(i);
      if (!a) {
        console.log(`Skipping ${e.nodeType} ${(e?.tag ?? "TEXT") || e.id} - no frame created`);
        return;
      }
      if (e.nodeType === HZ.TEXT_NODE) {
        o.appendChild(a);
        a.stackHorizontalLayoutSize = LayoutSizingMode.FILL_CONTAINER;
        a.stackVerticalLayoutSize = LayoutSizingMode.HUG_CONTENT;
        a.textAutoResize = "HEIGHT";
        a.resizeWithConstraints(a.size.x, a.size.y);
        return;
      }
      switch (e.styles.display) {
        case "block":
        case "list-item":
        case "flow-root":
        case "flex":
        case "grid":
          {
            o.appendChild(a);
            a.stackHorizontalLayoutSize = LayoutSizingMode.FILL_CONTAINER;
            a.stackVerticalLayoutSize = LayoutSizingMode.HUG_CONTENT;
            let t = PW(e.styles.width);
            let i = PW(e.styles.height);
            if (null != t && (a.stackHorizontalLayoutSize = LayoutSizingMode.FIXED), null != i && (a.stackVerticalLayoutSize = LayoutSizingMode.FIXED), "border-box" === e.styles.boxSizing) a.resizeWithConstraints(t ?? e.rect.width, i ?? e.rect.height);else {
              let r = a.stackLeftPadding + a.stackRightPadding;
              let s = a.stackTopPadding + a.stackBottomPadding;
              a.resizeWithConstraints(t ? t + r : e.rect.width, i ? i + s : e.rect.height);
            }
            break;
          }
        case "inline":
        case "inline list-item":
        case "inline-block":
        case "inline-flex":
        case "inline-grid":
          {
            o.appendChild(a);
            a.stackHorizontalLayoutSize = LayoutSizingMode.HUG_CONTENT;
            a.stackVerticalLayoutSize = LayoutSizingMode.HUG_CONTENT;
            let t = PW(e.styles.width);
            let i = PW(e.styles.height);
            null != t && (a.stackHorizontalLayoutSize = LayoutSizingMode.FIXED);
            null != i && (a.stackVerticalLayoutSize = LayoutSizingMode.FIXED);
            a.resizeWithConstraints(a.size.x, a.size.y);
            break;
          }
        default:
          throwError(`Unsupported display type: ${e.styles.display}`);
      }
      if (!(e.styles.marginTop || e.styles.marginBottom || e.styles.marginLeft || e.styles.marginRight)) return;
      let l = {
        left: PW(e.styles.marginLeft) ?? 0,
        right: PW(e.styles.marginRight) ?? 0,
        top: PW(e.styles.marginTop) ?? 0,
        bottom: PW(e.styles.marginBottom) ?? 0
      };
      let d = t.createNode("FRAME", {
        tracking: r
      });
      switch (d.name = `Margin (${e.tag || e.id})`, n.set(e, d), e.styles.display) {
        case "block":
        case "flow-root":
        case "flex":
        case "list-item":
          {
            let e = i.childNodes.findLast((e, t) => t < s && n.has(i.childNodes[t]));
            let t = e ? n.get(e) : null;
            d.stackMode = "VERTICAL";
            d.fills = [];
            o.appendChild(d);
            d.stackHorizontalLayoutSize = a.stackHorizontalLayoutSize === LayoutSizingMode.FILL_CONTAINER ? LayoutSizingMode.FILL_CONTAINER : LayoutSizingMode.HUG_CONTENT;
            d.stackVerticalLayoutSize = LayoutSizingMode.HUG_CONTENT;
            d.stackLeftPadding = l.left;
            d.stackRightPadding = l.right;
            d.stackBottomPadding = l.bottom;
            ("block" === i.styles.display || "flow-root" === i.styles.display || "list-item" === i.styles.display) && t && t.name.startsWith("Margin") ? d.stackTopPadding = Math.max(l.top - t.stackBottomPadding, 0) : d.stackTopPadding = l.top;
            d.appendChild(a);
            d.resizeWithConstraints(d.size.x, d.size.y);
            break;
          }
        case "inline-block":
        case "inline":
        case "inline-flex":
        case "inline list-item":
          d.stackMode = "VERTICAL";
          d.fills = [];
          o.appendChild(d);
          d.stackHorizontalLayoutSize = a.stackHorizontalLayoutSize === LayoutSizingMode.FILL_CONTAINER ? LayoutSizingMode.FILL_CONTAINER : LayoutSizingMode.HUG_CONTENT;
          d.stackVerticalLayoutSize = LayoutSizingMode.HUG_CONTENT;
          d.stackLeftPadding = l.left;
          d.stackRightPadding = l.right;
          ("img" === e.tag || "svg" === e.tag || "video" === e.tag || "audio" === e.tag || "canvas" === e.tag || "input" === e.tag) && (d.stackTopPadding = l.top, d.stackBottomPadding = l.bottom);
          d.appendChild(a);
          d.resizeWithConstraints(d.size.x, d.size.y);
          break;
        default:
          throwError(`Unsupported display type: ${e.styles.display}`);
      }
    });
    t.updateAll();
    return i;
  });
}
async function tk(e, t) {
  return {
    imageSets: await tF(e, t),
    svgs: await tw(t)
  };
}
async function tw(e) {
  let t = new Map();
  for (let [i, r] of e.entries()) "image/svg+xml" === r.blob.type && t.set(i, await r.blob.text());
  return t;
}
async function tF(e, t) {
  let i = new Map();
  for (let [r, s] of t.entries()) {
    let t = new Uint8Array(await s.blob.arrayBuffer());
    i.set(r, await e.decodeImage(t, s.blob.type, "image"));
  }
  return i;
}
export function $$tS4(e) {
  let t = eb(e);
  if (!t) return "";
  let i = t.$$export([{
    imageType: "SVG",
    contentsOnly: !0
  }]);
  let r = new TextDecoder("utf-8").decode(i);
  let s = new DOMParser().parseFromString(r, "image/svg+xml");
  let a = s.querySelector("svg");
  let n = s.querySelector("parsererror");
  return !a || n ? (console.error(`Unable to load SVG: ${n}`), "") : (a.setAttribute("preserveAspectRatio", "none"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%"), new XMLSerializer().serializeToString(a));
}
export const designToReact = $$eA0;
export const MO = $$tu1;
export const UQ = $$tg2;
export const hq = $$tx3;
export const svgForDomId = $$tS4;
