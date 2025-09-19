import { sha1Hex, sha1BytesFromHex, sha1HexFromBytes } from "../905/125019";
import { ServiceCategories as _$$e } from "../905/165054";
import { SlidePptxImporterBindings, Fullscreen, FontSourceType } from "../figma_app/763686";
import { delay } from "../905/236856";
import { trackEventAnalytics } from "../905/449184";
import { isFigmaEmail } from "../figma_app/416935";
import { getInitialOptions } from "../figma_app/169182";
import { UploadError } from "../905/623179";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { trackFileEvent } from "../figma_app/314264";
import { yF, M1 } from "../905/777093";
import { GK } from "../905/37051";
import { C as _$$C } from "../905/991119";
import { Ec, bT } from "../905/163189";
import { enqueueNetworkErrorBell } from "../905/470594";
import { OL, lZ, pl, Yw } from "../905/615657";
import { Lg, Ij } from "../905/902099";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { fullscreenValue } from "../figma_app/455680";
import w from "../vendor/7508";
import { VS } from "../905/696699";
import { TF } from "../905/18922";
import { Vy, zT } from "../905/484695";
import { XMLParser } from "../vendor/870203";
import { F as _$$F } from "../905/422355";
import { getImageManager } from "../figma_app/624361";
import { U_ } from "../905/327855";
import { FEditorType } from "../figma_app/53721";
import { F as _$$F2 } from "../905/877554";
import { canCreateFileTypeAsync } from "../figma_app/687776";
import { VisualBellActions } from "../905/302958";
import { selectFolderView } from "../figma_app/976345";
import { bE } from "../905/466026";
import { y$ } from "../905/81009";
import { fA } from "../figma_app/543100";
import { F as _$$F4 } from "../905/915030";
var C = w;
function N(e, t = 1) {
  return e / 914400 * 72 * t;
}
function P(e) {
  return "ctr" === e ? "CENTER" : "b" === e ? "BOTTOM" : "TOP";
}
function O(e) {
  return "ctr" === e ? "CENTER" : "just" === e || "dist" === e ? "JUSTIFIED" : "r" === e ? "RIGHT" : "LEFT";
}
function D(e) {
  return /^[0-9A-F]{6}$/i.test(e);
}
function L(e) {
  return {
    r: parseInt(e.substring(0, 2), 16) / 255,
    g: parseInt(e.substring(2, 4), 16) / 255,
    b: parseInt(e.substring(4, 6), 16) / 255
  };
}
let M = {
  preserveOrder: !0,
  ignoreDeclaration: !0,
  ignoreAttributes: !1,
  attributeNamePrefix: "",
  parseTagValue: !0,
  trimValues: !1
};
class j {
  constructor(e) {
    this.parser = new XMLParser({
      ...M,
      ...e
    });
  }
  convertToElementTree(e) {
    return Array.isArray(e) ? e.map(e => this.convertToElementTreeItem(e)).filter(e => null !== e) : [this.convertToElementTreeItem(e)].filter(e => null !== e);
  }
  convertToElementTreeItem(e) {
    let t = {
      name: "",
      elements: [],
      attributes: {}
    };
    for (let i in e) if ("#text" === i) {
      if ("string" == typeof e[i] && "" === e[i].trim()) return null;
      t.type = "text";
      t.text = e[i];
    } else if (":@" === i) for (let n in t.attributes = {}, e[i]) t.attributes[n.replace(/^@/, "")] = e[i][n];else Array.isArray(e[i]) ? (t.name = i, t.elements = this.convertToElementTree(e[i])) : "object" == typeof e[i] && (t.name = i, t.elements = this.convertToElementTree([e[i]]));
    t.elements && 0 === t.elements.length && delete t.elements;
    0 === Object.keys(t.attributes || {}).length && delete t.attributes;
    return t;
  }
  parse(e) {
    if (!e) throw Error("XML is empty");
    let t = this.parser.parse(e);
    if (!t) throw Error("XML failed to parse");
    let i = this.convertToElementTree(t);
    if (!i || 0 === i.length || !i[0]) throw Error("XML failed to convert");
    return i[0];
  }
}
function U(e, t) {
  let i = e;
  t.forEach(e => {
    let t = i?.elements?.find(t => t.name === e);
    if (!t) {
      i = null;
      return;
    }
    i = t;
  });
  return i?.elements || [];
}
function B(e, t) {
  let i = [];
  let n = e => {
    e.name === t && i.push(e);
    e.elements?.forEach(e => n(e));
  };
  n(e);
  return i;
}
function V(e, t) {
  let i = e;
  for (let e of t) {
    let t = (e, t) => "function" == typeof t && e.name ? t(e.name) : e.name === t;
    let n = i?.elements?.find(i => t(i, e));
    if (!n) return null;
    i = n;
  }
  return i;
}
function G(e, t) {
  let i = e;
  if (0 === t.length) return;
  t.forEach((e, n) => {
    if (n === t.length - 1) return;
    let r = i?.elements?.find(t => $$W(t, e));
    if (!r) {
      i = null;
      return;
    }
    i = r;
  });
  let n = t[t.length - 1];
  if ("string" == typeof n) return i?.attributes?.[n];
}
var z = (e => (e[e.BOOLEAN = 0] = "BOOLEAN", e[e.INT = 1] = "INT", e[e.FLOAT = 2] = "FLOAT", e[e.STRING = 3] = "STRING", e))(z || {});
function H(e, t, i = 3) {
  let n;
  let r = U(e, t);
  return 0 === r.length ? void 0 : (r?.[0].type === "text" && (n = r[0].text), 1 === i) ? parseInt(n) : 3 === i ? String(n) : n;
}
let $$W = (e, t) => "function" == typeof t && e.name ? t(e.name) : e.name === t;
function K(e) {
  return t => t.endsWith(e);
}
function Y(e, t) {
  if (e.name !== t) throw Error(`pptx-import - assertElement expected ${t} but got ${e.name}`);
}
function q(e) {
  let t = G(e, ["a:alpha", "val"]);
  return t ? parseFloat(t) / 1e5 : 1;
}
function $(e, t, i) {
  let n = V(e, ["a:srgbClr"]);
  if (n) {
    let r = G(e, ["a:srgbClr", "val"]);
    let a = q(n);
    let s = Z(t, r, i);
    if (s) return {
      color: s,
      opacity: a
    };
  }
  let r = V(e, ["a:schemeClr"]);
  if (r) {
    let n = G(e, ["a:schemeClr", "val"]);
    let a = q(r);
    let s = Z(t, n, i);
    if (s) return {
      color: s,
      opacity: a
    };
  }
  return null;
}
function Z(e, t, i) {
  if (!t) return;
  if (D(t)) return L(t);
  let n = e?.colors?.[t];
  if (n && D(n)) return L(n);
  if (i) {
    let n = i.colorMap?.[t];
    if (n) {
      let t = e?.colors?.[n];
      if (t && D(t)) return L(t);
    }
  }
}
function X(e, t, i) {
  let n = V(e, ["a:solidFill"]);
  if (!n) return null;
  let r = $(n, t, i);
  return r ? {
    type: "SOLID",
    color: r.color,
    opacity: r.opacity,
    visible: !0,
    blendMode: "NORMAL"
  } : null;
}
function Q(e, t, i) {
  if (!i) return null;
  let n = G(e, [K("blipFill"), "a:blip", "r:embed"]);
  if (n) {
    let r = G(e, [K("blipFill"), "a:blip", "a:alphaModFix", "amt"]);
    let a = r ? parseFloat(r) / 1e5 : 1;
    let s = t?.imageTargets.find(e => e.id === n)?.file;
    let o = i?.get(s ?? "");
    if (o) {
      let t = {
        type: "IMAGE",
        imageRef: o,
        scaleMode: V(e, [K("blipFill"), "a:tile"]) ? "TILE" : V(e, [K("blipFill"), "a:stretch"]) ? "CROP" : V(e, [K("blipFill"), "a:srcRect"]) ? "FILL" : "FIT",
        opacity: a
      };
      let i = function (e) {
        let t = V(e, [K("blipFill"), "a:srcRect"]);
        if (!t) return null;
        let i = parseFloat(G(t, ["l"]) ?? "0") / 1e3 / 100;
        let n = parseFloat(G(t, ["b"]) ?? "0") / 1e3 / 100;
        let r = parseFloat(G(t, ["r"]) ?? "0") / 1e3 / 100;
        let a = parseFloat(G(t, ["t"]) ?? "0") / 1e3 / 100;
        return [[1 - r - i, 0, i], [0, 1 - n - a, a]];
      }(e);
      i && (t.transform = i);
      return t;
    }
  }
  return null;
}
function J({
  node: e,
  relationships: t,
  imageHashes: i,
  slideTheme: n,
  slideMaster: r,
  slideLayout: a
}, s) {
  if ("p:cSld" !== e.name) {
    Vy.error(`Failed extractBgForSlide with invalid node: ${e.name}`, s);
    return;
  }
  let o = V(e, ["p:bg", "p:bgPr"]) ?? V(e, ["p:bg", "p:bgRef"]);
  return o ? ee({
    node: o,
    relationships: t,
    imageHashes: i,
    slideTheme: n,
    slideMaster: r,
    slideLayout: a
  }) : a?.backgroundFillStyle ? a.backgroundFillStyle : r?.backgroundFillStyle ? r.backgroundFillStyle : void 0;
}
function ee({
  node: e,
  relationships: t,
  imageHashes: i,
  slideTheme: n,
  slideMaster: r
}) {
  let a = X(e, n, r);
  if (a) return a;
  let s = Q(e, t, i);
  if (s) return s;
  let o = function (e, t, i) {
    let n = U(e, ["a:gradFill", "a:gsLst"]);
    let r = G(e, ["a:gradFill", "a:path", "path"]);
    let a = [];
    for (let e of n) {
      let n = G(e, ["pos"]);
      let r = $(e, t, i);
      n && "number" == typeof parseFloat(n) && r && a.push({
        position: parseFloat(n) / 1e5,
        color: {
          ...r.color,
          a: r.opacity
        }
      });
    }
    return a.length ? {
      type: "circle" === r ? "GRADIENT_RADIAL" : "GRADIENT_LINEAR",
      visible: !0,
      opacity: 1,
      blendMode: "NORMAL",
      stops: a
    } : null;
  }(e, n, r);
  if (o) return o;
}
let et = {
  dash: [20, 24],
  sysDot: [8, 10]
};
function ei(e, t, i) {
  let n = {
    width: void 0,
    fills: void 0,
    presetDash: void 0,
    headEnd: void 0,
    tailEnd: void 0
  };
  Y(e, "p:spPr");
  let r = V(e, ["a:ln"]);
  if (!r) return n;
  n.width = 25400;
  let a = G(r, ["w"]);
  a && (n.width = parseInt(a));
  let s = ee({
    node: r,
    slideTheme: t
  });
  s && (n.fills = [s]);
  n.headEnd = en(V(r, ["a:head"]), i);
  n.tailEnd = en(V(r, ["a:tailEnd"]), i);
  let o = G(r, ["a:prstDash", "val"]);
  o ? ["solid", "dash", "sysDot"].includes(o) && (n.presetDash = o) : n.presetDash = "solid";
  return n;
}
function en(e, t) {
  if (e) {
    if (e.name && !["a:head", "a:tailEnd"].includes(e.name)) {
      Vy.error(`Unknown line end property: ${e.name}`, t);
      return;
    }
    return {
      type: G(e, ["type"]),
      width: G(e, ["w"]),
      length: G(e, ["len"])
    };
  }
}
function er(e, t, i) {
  for (let n of U(e, ["p:cSld", "p:spTree"]).filter(e => "p:sp" === e.name)) {
    let e = eo(G(n, ["p:nvSpPr", "p:nvPr", "p:ph", "type"]), G(n, ["p:nvSpPr", "p:nvPr", "p:ph", "idx"]));
    let r = ea(n, i);
    let a = es(n, i);
    if (r && a && e) {
      let [i, n] = r;
      let [s, o] = a;
      t.pos[e] = {
        x: i,
        y: n,
        w: s,
        h: o
      };
    }
  }
}
function ea(e, t) {
  let i = G(e, ["p:spPr", "a:xfrm", "a:off", "x"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "a:off", "x"]);
  let n = G(e, ["p:spPr", "a:xfrm", "a:off", "y"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "a:off", "y"]);
  if (i && n) return [N(parseInt(i), t), N(parseInt(n), t)];
}
function es(e, t) {
  let i = G(e, ["p:spPr", "a:xfrm", "a:ext", "cx"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "a:ext", "cx"]);
  let n = G(e, ["p:spPr", "a:xfrm", "a:ext", "cy"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "a:ext", "cy"]);
  if (i && n) return [N(parseInt(i), t), N(parseInt(n), t)];
}
function eo(e, t) {
  return t || e || void 0;
}
function el(e, t) {
  return e.placeholders.find(e => {
    let i = e[0];
    return eo(i.type, i.idx) === t.key;
  })?.[1];
}
function ed(e, t) {
  if (!e) return t;
  if (!t) return e;
  let i = {
    ...e
  };
  for (let e in t) void 0 !== t[e] && (i[e] = t[e]);
  return i;
}
let ec = ({
  node: e,
  nodeTransform: t,
  slideLayout: i,
  locator: n,
  slideTheme: r,
  relationships: a,
  parentScope: s
}) => {
  let o = function (e, t) {
    let i = t?.size?.x ?? 0;
    let n = t?.size?.y ?? 0;
    if (0 === i || 0 === n) return null;
    let r = [];
    for (let t of e) {
      let e = parseInt(G(t, ["w"]) ?? "0", 10);
      let a = parseInt(G(t, ["h"]) ?? "0", 10);
      let s = t.elements ?? [];
      let o = new TF("NONE");
      s.forEach(t => {
        switch (t.name) {
          case "a:moveTo":
            let r = eu(t);
            o.moveTo({
              x: r.x * i / e,
              y: r.y * n / a
            });
            break;
          case "a:lnTo":
            let s = eu(t);
            o.lineTo({
              x: s.x * i / e,
              y: s.y * n / a
            });
            break;
          case "a:cubicBezTo":
            let l = function (e) {
              let t = [];
              let i = e.elements?.filter(e => "a:pt" === e.name) ?? [];
              if (3 !== i.length) throw Error("Invalid number of points for cubic bezier");
              i.forEach(e => {
                t.push({
                  x: parseInt(G(e, ["x"]) ?? "0", 10),
                  y: parseInt(G(e, ["y"]) ?? "0", 10)
                });
              });
              return t;
            }(t);
            o.curveTo({
              x: l[0].x * i / e,
              y: l[0].y * n / a
            }, {
              x: l[1].x * i / e,
              y: l[1].y * n / a
            }, {
              x: l[2].x * i / e,
              y: l[2].y * n / a
            });
            break;
          case "a:close":
            o.closePath();
        }
      });
      r.push(o.toVectorPath());
    }
    return {
      type: "VECTOR",
      vectorNetwork: VS(r)
    };
  }(U(e, ["p:spPr", "a:custGeom", "a:pathLst"]), t);
  if (!o) return;
  let l = function ({
    node: e,
    relationships: t,
    imageHashes: i,
    slideTheme: n,
    slideMaster: r
  }, a) {
    if ("p:sp" !== e.name) {
      Vy.error(`Failed extractBgFillForSp with invalid node: ${e.name}`, a);
      return;
    }
    let s = V(e, ["p:spPr"]);
    if (!s) {
      Vy.error(`Failed extractBgFillForSp, spPr not found in: ${e.name}`, a);
      return;
    }
    return ee({
      node: s,
      relationships: t,
      imageHashes: i,
      slideTheme: n,
      slideMaster: r
    });
  }({
    node: e,
    relationships: a,
    slideTheme: r
  }, s);
  if (l && (o.fills = [l]), i && n?.key) {
    let e = el(i, n);
    o.fills = o.fills ?? e?.fills;
  }
  let d = G(e, ["p:nvSpPr", "p:cNvPr", "name"]);
  let c = {
    ...o,
    name: d
  };
  let u = V(e, ["p:spPr"]);
  if (u) {
    let e = ei(u, r, s);
    e && (c.strokes = e.fills, c.strokeWeight = e.width ? N(e.width) : void 0);
  }
  return c;
};
function eu(e) {
  let t = e.elements?.find(e => "a:pt" === e.name);
  if (!t) throw Error("Point element not found");
  return {
    x: parseInt(G(t, ["x"]) ?? "0", 10),
    y: parseInt(G(t, ["y"]) ?? "0", 10)
  };
}
var ep = (e => (e.rect = "rect", e.roundRect = "roundRect", e.ellipse = "ellipse", e.triangle = "triangle", e))(ep || {});
function em(e, t, i) {
  let n = {
    type: ep.rect,
    cornerRadius: 0
  };
  Y(e, "p:spPr");
  let r = V(e, ["a:prstGeom"]);
  if (!r) return n;
  let a = G(r, ["prst"]);
  if (a && !Object.values(ep).includes(a)) {
    Vy.error(`Failed extractPresetGeom, invalid prst: ${a}`, i);
    return n;
  }
  switch (a) {
    case ep.ellipse:
      n.type = ep.ellipse;
      n.cornerRadius = 1e6;
      break;
    case ep.roundRect:
      n.type = ep.roundRect;
      n.cornerRadius = .1653 * Math.min(t.size.x, t.size.y);
      break;
    case ep.triangle:
      n.type = ep.triangle;
      n.cornerRadius = 0;
      break;
    case ep.rect:
    default:
      n.type = ep.rect;
      n.cornerRadius = 0;
  }
  return n;
}
let eh = ({
  node: e,
  relationships: t,
  imageHashes: i,
  nodeTransform: n,
  slideTheme: r,
  parentScope: a
}) => {
  let s = Q(e, t, i);
  let o = V(e, ["p:spPr"]);
  let l = {
    type: "FRAME",
    fills: s ? [s] : void 0,
    cornerRadius: 0,
    strokes: void 0,
    strokeWeight: void 0
  };
  if (o) {
    let e = em(o, n, a);
    e && (l.cornerRadius = e.cornerRadius);
    let t = ei(o, r, a);
    t && (l.strokes = t.fills, l.strokeWeight = t.width ? N(t.width) : 0);
  }
  return l;
};
let eg = {
  [ep.ellipse]: "ELLIPSE",
  [ep.roundRect]: "RECTANGLE",
  [ep.triangle]: "REGULAR_POLYGON",
  [ep.rect]: "RECTANGLE"
};
let ef = ({
  node: e,
  nodeTransform: t,
  slideLayout: i,
  slideMaster: n,
  locator: r,
  slideTheme: a,
  relationships: s,
  parentScope: o
}) => {
  Y(e, "p:sp");
  let l = V(e, ["p:spPr"]);
  if (!l) {
    Vy.error(`Failed extractPresetGeom, spPr not found in: ${e.name}`, o);
    return;
  }
  let d = em(l, t, o);
  let c = ei(l, a, o);
  let u = ee({
    node: l,
    slideTheme: a,
    relationships: s,
    slideMaster: n
  });
  let p = {
    ...d,
    type: eg[d.type] ?? "RECTANGLE",
    fills: u ? [u] : void 0,
    strokes: c.fills,
    strokeWeight: c.width ? N(c.width) : void 0
  };
  i && r?.key && (p = ed(p, el(i, r)));
  c.presetDash && "solid" !== c.presetDash && c.presetDash in et && (p.strokeDashes = et[c.presetDash]);
  void 0 === p.fills && (p.fills = []);
  return p;
};
function eA(e) {
  !function (e, t) {
    if (!t.includes(e.name ?? "")) throw Error(`pptx-import - assertElementOneOf expected one of ${t} but got ${e.name}`);
  }(e, ["a:defPPr", "a:pPr", "a:lvl1pPr", "a:lvl2pPr", "a:lvl3pPr", "a:lvl4pPr", "a:lvl5pPr", "a:lvl6pPr", "a:lvl7pPr", "a:lvl8pPr", "a:lvl9pPr"]);
  let t = V(e, ["a:buNone"]);
  let i = function (e) {
    if (!e || !e.name) return 0;
    if (/a:lvl\d+pPr/.test(e.name)) {
      let t = e.name.indexOf("lvl");
      if (-1 !== t) return parseInt(e.name.slice(t + 3, t + 4));
    }
    return "a:pPr" === e.name ? parseInt(G(e, ["lvl"]) ?? "0") : 0;
  }(e);
  return t ? {
    type: "NONE",
    level: i
  } : V(e, ["a:buAutoNum"]) ? {
    type: "ORDERED",
    level: i
  } : {
    type: "UNORDERED",
    level: i
  };
}
function ey(e, t, i) {
  let n = V(e, ["a:defRPr"]);
  if (!n) return;
  let r = n.attributes?.sz;
  let a = X(n, t);
  return {
    fontSize: r ? parseInt(r) / 100 * i : void 0,
    latin: G(n, ["latin", "typeface"]),
    fills: a ? [a] : void 0,
    eastAsian: G(n, ["ea", "typeface"]),
    complexScript: G(n, ["cs", "typeface"]),
    symbol: G(n, ["sym", "typeface"]),
    style: {}
  };
}
function eb(e, t, i) {
  Y(e, "p:txBody");
  let n = {};
  let r = /a:lvl\d+pPr/;
  let a = U(e, ["a:lstStyle"]).filter(e => e.name && r.test(e.name));
  a?.length && a.forEach((e, r) => {
    let a = r + 1;
    n[a] = {
      level: a,
      bulletProperties: eA(e),
      properties: ey(e, t, i)
    };
  });
  return n;
}
let ev = ({
  node: e,
  slideMaster: t,
  slideLayout: i,
  slideTheme: n,
  locator: r,
  metadata: a,
  parentScope: s
}) => {
  let o = function (e, t, i) {
    Y(e, "p:sp");
    let n = V(e, ["p:txBody"]);
    return n ? (n.elements ?? []).filter(e => "a:p" === e.name).map(e => ({
      runs: function (e, t, i) {
        let n;
        Y(e, "a:p");
        let r = (e.elements ?? []).filter(e => "a:r" === e.name);
        let a = V(e, ["a:pPr"]);
        a && (n = ey(a, t, i));
        return r.map(e => {
          let r = function (e, t, i) {
            let n = {
              fontSize: void 0,
              textAlignHorizontal: void 0,
              textAlignVertical: void 0,
              fills: void 0,
              textDecoration: void 0,
              style: {
                bold: !1,
                italic: !1
              }
            };
            if (!e) return n;
            Y(e, "a:rPr");
            let r = X(e, t);
            r && (n.fills = [r]);
            "sng" === G(e, ["u"]) && (n.textDecoration = "UNDERLINE");
            let a = e.attributes?.sz;
            if (a) {
              let e = parseInt(a) / 100 * i;
              n.fontSize = e;
            }
            "1" === G(e, ["b"]) && (n.style.bold = !0);
            "1" === G(e, ["i"]) && (n.style.italic = !0);
            return n;
          }(V(e, ["a:rPr"]), t, i);
          return {
            text: H(e, ["a:t"]) ?? "",
            properties: ed(n, r)
          };
        });
      }(e, t, i),
      properties: function (e) {
        var t;
        let i = V(e, ["a:pPr"]);
        if (!i) return;
        Y(i, "a:pPr");
        let n = V(i, [(t = "a:bu", e => e.startsWith(t))]);
        let r = {
          leftMargin: H(e, ["a:pPr", "marL"], z.INT) ?? 0,
          indent: H(e, ["a:pPr", "indent"], z.INT) ?? 0,
          bulletProperties: void 0
        };
        n && (r.bulletProperties = eA(i));
        return r;
      }(e)
    })) : [];
  }(e, n, a.scalingFactor);
  let {
    text,
    characterStyleOverrides,
    styleOverrideTable
  } = function (e, t) {
    let i = [];
    let n = [];
    let r = {};
    let a = "";
    for (let [t, s] of e.entries()) {
      for (let e of s.runs) {
        if (0 === e.text.length) continue;
        let t = _$$F(JSON.stringify(e.properties));
        let s = 0;
        r[t] ? s = r[t] : (s = n.push(e.properties) - 1, r[t] = s);
        i.length += e.text.length;
        i.fill(s, i.length - e.text.length);
        a += e.text;
      }
      t < e.length - 1 && (a += "\n", i.push(0));
    }
    a.length !== i.length && (Vy.error("Failed to convert text runs, text length mismatch", t), Vy.debug("text length mismatch", t, {
      text: a,
      text_len: a.length,
      overrides_len: i.length,
      characterStyleOverrides: i
    }));
    return {
      text: a,
      characterStyleOverrides: i,
      styleOverrideTable: n
    };
  }(o, s);
  if ("" === text) return;
  let u = {
    fontSize: void 0,
    textAlignHorizontal: void 0,
    textAlignVertical: void 0,
    fills: void 0,
    style: {
      bold: !1,
      italic: !1
    }
  };
  let {
    lineTypes,
    lineIndentations
  } = function (e, t, i) {
    let n;
    e && e.key && i && (n = el(i, e));
    let r = [];
    let a = [];
    let s = i?.listStyles[`${e?.key}`]?.[1]?.bulletProperties;
    t.forEach(e => {
      let t = e.properties?.bulletProperties ?? s;
      let i = 0;
      let o = "NONE";
      !t && n ? (o = n.lineTypes?.[0] ?? "NONE", i = n.lineIndentations?.[0] ?? 0) : t && (o = t.type, i = (t.level ?? 0) + ("NONE" === o ? 0 : 1));
      r.push(o);
      a.push(i);
    });
    return {
      lineTypes: r,
      lineIndentations: a
    };
  }(r, o, i);
  let h = G(e, ["p:txBody", "a:bodyPr", "anchor"]);
  let g = G(e, ["p:txBody", "a:lstStyle", "a:lvl1pPr", "algn"]);
  h && (u.textAlignVertical = P(h));
  g && (u.textAlignHorizontal = O(g));
  let f = o[0].runs[0]?.properties;
  f && (u.fontSize = f.fontSize, u.fills = f.fills, u.style.bold = f.style?.bold, u.style.italic = f.style?.italic);
  let _ = eb(V(e, ["p:txBody"]), n, a.scalingFactor);
  if (_) {
    let e = _?.[1]?.properties;
    u.fontSize = u.fontSize ?? e?.fontSize;
    u.fills = u.fills ?? e?.fills;
  }
  if (r) {
    if (r.key && i && i.textStyles[`${r.key}`]) {
      let e = i.textStyles[`${r.key}`];
      u.fontSize = u.fontSize ?? e.fontSize;
      u.textAlignHorizontal = u.textAlignHorizontal ?? e.textAlignHorizontal;
      u.textAlignVertical = u.textAlignVertical ?? e.textAlignVertical;
      let t = i.listStyles[`${r.key}`];
      if (t) {
        let e = t?.[1]?.properties;
        u.fills = u.fills ?? e?.fills;
      }
    }
    let e = t.textStyles[`${r.type}Style`] ?? ("ctrTitle" === r.type && t.textStyles.titleStyle);
    r.type && e && (u.fontSize = u.fontSize ?? e.fontSize, u.textAlignHorizontal = u.textAlignHorizontal ?? e.textAlignHorizontal, u.textAlignVertical = u.textAlignVertical ?? e.textAlignVertical);
  }
  return {
    type: "TEXT",
    characters: text,
    fontSize: u.fontSize ?? 24,
    textAlignHorizontal: u.textAlignHorizontal ?? "LEFT",
    textAlignVertical: u.textAlignVertical ?? "TOP",
    textAutoResize: "NONE",
    fills: u.fills,
    lineTypes,
    lineIndentations,
    style: {
      bold: u.style?.bold ?? !1,
      italic: u.style?.italic ?? !1
    },
    characterStyleOverrides,
    styleOverrideTable
  };
};
async function eI(e, t) {
  let i = sha1Hex(t);
  let r = sha1BytesFromHex(i);
  return {
    name: e,
    bytes: t,
    sha1Hash: i,
    sha1Bytes: r
  };
}
async function eE(e) {
  return (await Promise.all(e.map(e => eI(e[0], e[1])))).reduce((e, t) => null !== t ? {
    ...e,
    images: [...e.images, t]
  } : {
    ...e,
    hadImageError: !0
  }, {
    images: [],
    hadImageError: !1
  });
}
let ex = {
  filename: "",
  relFilename: "",
  layoutFilename: "",
  layoutRelFilename: "",
  masterFilename: "",
  masterRelFilename: "",
  themeFilename: "",
  imageTargets: []
};
class eS {
  constructor(e) {
    this.xmlParser = new j();
    this.files = e;
    this.relationships = new Map();
  }
  parseXml(e) {
    return this.xmlParser.parse(new TextDecoder().decode(e.contents));
  }
  updateRelationship(e, t) {
    let i = this.relationships.get(e);
    i ? this.relationships.set(e, {
      ...ex,
      ...i,
      ...t
    }) : this.relationships.set(e, {
      ...ex,
      ...t
    });
  }
  findSlideThemes(e, t) {
    let i = t.elements?.find(e => "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme" === e.attributes.Type)?.attributes.Target;
    if ("string" != typeof i) throw Error(`Failed parsing slide theme rels for slide ${e}`);
    let n = `ppt/theme/${i.split("/").pop()}`;
    this.updateRelationship(e, {
      themeFilename: n
    });
    return n;
  }
  findSlideMaster(e, t) {
    let i = t.elements?.find(e => "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideMaster" === e.attributes.Type)?.attributes.Target;
    if ("string" != typeof i) throw Error(`Failed parsing slide master rels for slide ${e}`);
    let n = i.split("/").pop();
    let r = {
      masterFilename: `ppt/slideMasters/${n}`,
      masterRelFilename: `ppt/slideMasters/_rels/${n}.rels`
    };
    this.updateRelationship(e, r);
    return r;
  }
  findSlideLayout(e, t) {
    let i = t.elements?.find(e => e.attributes?.Type === "http://schemas.openxmlformats.org/officeDocument/2006/relationships/slideLayout")?.attributes?.Target;
    if ("string" != typeof i) throw Error(`Failed parsing slide layout rels for slide ${e}`);
    let n = i.split("/").pop();
    let r = {
      layoutFilename: `ppt/slideLayouts/${n}`,
      layoutRelFilename: `ppt/slideLayouts/_rels/${n}.rels`
    };
    this.updateRelationship(e, r);
    return r;
  }
  findSlideNotes(e, t) {
    let i = t.elements?.find(e => e.attributes?.Type === "http://schemas.openxmlformats.org/officeDocument/2006/relationships/notesSlide")?.attributes?.Target;
    if ("string" != typeof i) return;
    let n = i.split("/").pop();
    let r = {
      notesFilename: `ppt/notesSlides/${n}`,
      notesRelFilename: `ppt/notesSlides/_rels/${n}.rels`
    };
    this.updateRelationship(e, r);
  }
  findImageTargets(e, t) {
    let i = t.elements?.filter(e => e.attributes?.Type === "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image").map(e => ({
      id: e.attributes.Id,
      file: e.attributes.Target.split("/").pop()
    })) ?? [];
    this.updateRelationship(e, {
      imageTargets: i
    });
  }
  getSlideRelFile(e) {
    return this.getFile(`ppt/slides/_rels/slide${e}.xml.rels`);
  }
  getLayoutRelFile(e) {
    return this.getFile(`ppt/slideLayouts/_rels/${e}.rels`);
  }
  getMasterRelFile(e) {
    return this.getFile(`ppt/slideMasters/_rels/${e}.rels`);
  }
  getSlideFile(e) {
    return this.getFile(`ppt/slides/slide${e}.xml`);
  }
  getFile(e) {
    let t = this.files.get(e);
    if (!t) throw Error(`Failed getFile for ${e}`);
    return t;
  }
  getImageFilename(e, t) {
    let i = this.getRelationships(e).imageTargets.find(e => e.id === t);
    if (!i) throw Error(`Failed getImageTarget for slide ${e} and id ${t}`);
    return i.file;
  }
  getRelationships(e) {
    return this.relationships.get(e) ?? ex;
  }
  parseRelationshipsForSlide(e) {
    let t = this.getSlideFile(e).name;
    if (this.relationships.has(t)) return this.relationships.get(t);
    let i = this.getSlideRelFile(e);
    this.updateRelationship(t, {
      filename: `ppt/slides/slide${e}.xml`,
      relFilename: i.name
    });
    let n = this.parseXml(i);
    this.findImageTargets(t, n);
    let {
      layoutRelFilename
    } = this.findSlideLayout(t, n);
    let {
      masterRelFilename
    } = this.findSlideMaster(t, this.parseXml(this.getFile(layoutRelFilename)));
    this.findSlideThemes(t, this.parseXml(this.getFile(masterRelFilename)));
    this.findSlideNotes(t, n);
    return this.relationships.get(t) ?? ex;
  }
  parseRelationshipsForLayout(e) {
    if (this.relationships.has(e)) return this.relationships.get(e);
    let t = e.split("/").pop();
    let i = this.getLayoutRelFile(t);
    this.updateRelationship(e, {
      filename: `ppt/slideLayouts/${t}`,
      relFilename: i.name
    });
    let n = this.parseXml(i);
    this.findImageTargets(e, n);
    let {
      masterRelFilename
    } = this.findSlideMaster(e, this.parseXml(i));
    this.findSlideThemes(e, this.parseXml(this.getFile(masterRelFilename)));
    return this.relationships.get(e) ?? ex;
  }
  parseRelationshipsForMaster(e) {
    if (this.relationships.has(e)) return this.relationships.get(e);
    let t = e.split("/").pop();
    let i = this.getMasterRelFile(t);
    this.updateRelationship(e, {
      filename: `ppt/slideMasters/${t}`,
      relFilename: i.name
    });
    let n = this.parseXml(i);
    this.findImageTargets(e, n);
    this.findSlideThemes(e, n);
    return this.relationships.get(e) ?? ex;
  }
  getUsedLayouts() {
    return new Set([...this.relationships.values()].filter(e => null != e.layoutFilename && "" !== e.layoutFilename).map(e => e.layoutFilename));
  }
  getUsedSlideMasters() {
    return new Set([...this.relationships.values()].filter(e => null != e.masterFilename && "" !== e.masterFilename).map(e => e.masterFilename));
  }
  toDebugString() {
    return JSON.stringify([...this.relationships.entries()], null, 2);
  }
}
let ew = ["png", "jpeg", "jpg"];
let eC = class e {
  constructor() {
    this.xmlParser = new j();
    this.files = new Map();
    this.slideMasters = new Map();
    this.slideLayouts = new Map();
    this.themes = new Map();
    this.imageHashes = new Map();
    this.metadata = {
      numSlides: 0,
      width: 0,
      height: 0,
      scalingFactor: 1
    };
    this.relParser = new eS(this.files);
  }
  async parsePPTX(e) {
    for (let t of function (e) {
      let t = new (C())();
      t.load(e);
      let i = [];
      Object.keys(t.files).forEach(e => {
        try {
          let n = t.file(e).asUint8Array();
          i.push({
            name: e,
            contents: n
          });
        } catch (t) {
          console.error("pptx_parser", "error reading file", e, t);
        }
      });
      return i;
    }(new Uint8Array(await e.arrayBuffer()))) this.files.set(t.name, t);
  }
  parseXml(e) {
    return this.xmlParser.parse(new TextDecoder().decode(e.contents));
  }
  parseMetadata() {
    let t = [...this.files.keys()].reduce((e, t) => (-1 !== t.indexOf("ppt/slides/slide") && e++, e), 0);
    let i = this.files.get(e.PRESENTATION_FILE_PATH);
    let n = this.parseXml(i);
    let r = N(parseInt(G(n, ["p:sldSz", "cx"])), 1);
    let a = N(parseInt(G(n, ["p:sldSz", "cy"])), 1);
    this.metadata = {
      numSlides: t,
      width: r,
      height: a,
      scalingFactor: 1920 / r
    };
    return this.metadata;
  }
  parseSlideThemeXml(e) {
    if (e && this.themes.has(e)) return this.themes.get(e);
    let t = this.files.get(e);
    if (!t) throw Error(`Missing theme file ${e}`);
    let i = this.parseXml(t);
    let n = {
      colors: {}
    };
    for (let t of U(i, ["a:themeElements", "a:clrScheme"])) {
      let i = t.name?.slice(2);
      let r = G(t, ["a:srgbClr", "val"]) ?? G(t, ["a:sysClr", "lastClr"]);
      if (null != i) n.colors[i] = r;else throw Error(`Error parsing color ${i} in ${e}`);
    }
    return e ? (this.themes.set(e, n), n) : {};
  }
  parseLayoutOrMasterShapes(e, t, i, n, r, a, s) {
    for (let o of (t.attributes?.showMasterSp === "0" && (e.showMasterSp = !1), U(t, ["p:cSld", "p:spTree"]))) {
      let t = G(o, ["p:nvSpPr", "p:nvPr", "p:ph", "type"]);
      let l = G(o, ["p:nvSpPr", "p:nvPr", "p:ph", "idx"]);
      let d = eo(t, l);
      let c = G(o, ["p:txBody", "a:bodyPr", "anchor"]);
      let u = G(o, ["p:txBody", "a:lstStyle", "a:lvl1pPr", "algn"]);
      let p = G(o, ["p:txBody", "a:p", "a:r", "a:rPr", "sz"]);
      p || (p = G(o, ["p:txBody", "a:lstStyle", "a:lvl1pPr", "a:defRPr", "sz"]));
      let m = this.mapNode(o, i, n, r, null, a, s);
      if (d) {
        e.textStyles[d] = {};
        c && (e.textStyles[d].textAlignVertical = P(c));
        u && (e.textStyles[d].textAlignHorizontal = O(u));
        p && (e.textStyles[d].fontSize = parseInt(p) / 100 * this.metadata.scalingFactor);
        m && e.placeholders.push([{
          idx: l,
          type: t
        }, m]);
        let i = V(o, ["p:txBody"]);
        i && (e.listStyles[d] = eb(i, r, this.metadata.scalingFactor));
      } else m && e.renderables.push(m);
    }
    return e;
  }
  parseSlideMasterXmls() {
    if ([...this.files.keys()].filter(t => e.SLIDE_MASTER_FILE_PATTERN.test(t)).forEach(e => {
      Vy.withSlideMasterScope(e, t => {
        this.relParser.parseRelationshipsForMaster(e);
        let i = this.parseXml(this.files.get(e));
        this.slideMasters.set(e, {
          pos: {},
          textStyles: {},
          listStyles: {},
          backgroundFillStyle: {},
          renderables: [],
          placeholders: [],
          showMasterSp: !0
        });
        let n = this.slideMasters.get(e);
        for (let e of (er(i, n, this.metadata.scalingFactor), U(i, ["p:txStyles"]))) {
          let t = e.name;
          if (void 0 === t) continue;
          let i = t.slice(2);
          let r = G(e, ["a:lvl1pPr", "a:defRPr", "sz"]);
          if (!r) continue;
          let a = parseInt(r) / 100 * this.metadata.scalingFactor;
          n.textStyles[i] = {
            fontSize: a
          };
          let s = G(e, ["a:lvl1pPr", "algn"]);
          s && (n.textStyles[i].textAlignHorizontal = O(s));
        }
        let r = {};
        let a = V(i, ["p:clrMap"]);
        if (a && Object.keys(a.attributes ?? {}).length) for (let [e, t] of Object.entries(a.attributes ?? {})) r[e] = `${t}`;
        n.colorMap = r;
        let s = this.relParser.getRelationships(e);
        let o = this.themes.get(s.themeFilename);
        this.parseLayoutOrMasterShapes(n, i, n, null, o, s, t);
        n.backgroundFillStyle = J({
          node: V(i, ["p:cSld"]),
          imageHashes: this.imageHashes,
          relationships: s,
          slideTheme: o,
          slideMaster: n
        }, t);
      });
    }), 0 === this.slideMasters.size) throw Error("Could not find any slide masters");
  }
  parseSlideLayoutXmls() {
    for (let e of this.relParser.getUsedLayouts()) Vy.withSlideLayoutScope(e, t => {
      let i = this.relParser.parseRelationshipsForLayout(e);
      if (!i.masterFilename) return null;
      let n = this.slideMasters.get(i.masterFilename);
      let r = this.files.get(e);
      let a = this.themes.get(i.themeFilename);
      if (this.slideLayouts.has(r.name)) return this.slideLayouts.get(r.name);
      let s = this.parseXml(r);
      this.slideLayouts.set(r.name, {
        pos: {},
        textStyles: {},
        listStyles: {},
        renderables: [],
        placeholders: [],
        showMasterSp: !0
      });
      let o = this.slideLayouts.get(r.name);
      er(s, o, this.metadata.scalingFactor);
      this.parseLayoutOrMasterShapes(o, s, n, o, this.themes.get(i.themeFilename), i, t);
      o.backgroundFillStyle = J({
        node: V(s, ["p:cSld"]),
        imageHashes: this.imageHashes,
        relationships: i,
        slideTheme: a
      }, t);
    });
  }
  parseRelationshipsAndThemesForSlide(e) {
    let t = this.relParser.parseRelationshipsForSlide(e);
    this.parseSlideThemeXml(t.themeFilename);
  }
  parseSlideNotesXml(e) {
    return Vy.withMetaScope(`Speaker Notes for slide ${e}`, null, () => {
      let t = this.relParser.parseRelationshipsForSlide(e);
      if (t.notesFilename) {
        let e = this.files.get(t.notesFilename);
        let i = e ? this.parseXml(e) : null;
        if (i) return B(i, "p:sp").filter(e => "body" === G(e, ["p:nvSpPr", "p:nvPr", "p:ph", "type"])).map(e => B(e, "a:p").map(e => B(e, "a:t").map(e => e.elements?.[0]?.text ?? "").join("")).join("\n")).join("\n");
      }
      return null;
    });
  }
  parseSlideContentXml(e) {
    return Vy.withSlideScope(e, t => {
      let i = this.files.get(`ppt/slides/slide${e}.xml`);
      let n = this.parseXml(i);
      let r = this.relParser.parseRelationshipsForSlide(e);
      let a = this.themes.get(r.themeFilename);
      let s = this.slideMasters.get(r.masterFilename);
      let o = this.slideLayouts.get(r.layoutFilename) ?? null;
      let l = o?.showMasterSp ?? !0;
      n.attributes?.showMasterSp === "0" && (l = !1);
      let d = U(n, ["p:cSld", "p:spTree"]);
      let c = this.traverseAndMapSlideContentNodes(d, s, o, a, r, l, t);
      let u = [];
      let p = J({
        node: V(n, ["p:cSld"]),
        relationships: this.relParser.getRelationships(i.name),
        imageHashes: this.imageHashes,
        slideTheme: a,
        slideMaster: s,
        slideLayout: o ?? void 0
      }, t);
      p && u.push(JSON.stringify({
        fills: [p]
      }));
      Vy.debug("conversion result", t, {
        mappedNodes: c,
        nodeUpdates: u
      });
      return {
        addedNodes: c.map(e => JSON.stringify(e)),
        nodeUpdates: u
      };
    });
  }
  async parseImages() {
    return await Vy.withMetaScopeAsync("parsing images", null, async e => {
      let t = [];
      for (let i of this.files.values()) if (i.name.startsWith("ppt/media/")) {
        if (!ew.some(e => i.name.endsWith(e))) {
          Vy.error(`Unsupported image format: ${i.name.split(".").pop()}`, e);
          continue;
        }
        t.push(i.name);
      }
      let i = await eE(t.map(e => [e.split("/").pop(), this.files.get(e).contents]));
      this.imageHashes = new Map(i.images.map(e => [e.name, e.sha1Hash]));
      return i;
    });
  }
  traverseAndMapSlideContentNodes(e, t, i, n, r, a, s) {
    let o = [];
    if (a) for (let e of t?.renderables ?? []) o.push(e);
    for (let e of i?.renderables ?? []) o.push(e);
    for (let a of e) {
      let e = G(a, ["p:nvSpPr", "p:nvPr", "p:ph", "type"]);
      let l = G(a, ["p:nvSpPr", "p:nvPr", "p:ph", "idx"]);
      let d = eo(e, l);
      let c = {
        type: e,
        idx: l,
        key: d
      };
      let u = this.mapNode(a, t, i, n, c, r, s);
      u && o.push(u);
    }
    return o;
  }
  mapNode(t, i, n, r, a, s, o) {
    return Vy.withNodeScope(t.name, o, l => {
      let d;
      if (e.KNOWN_NON_VISUAL_NODES.includes(t.name ?? "")) return;
      let c = this.mapNodeTransforms(t, i, n, a, l);
      switch (t.name) {
        case "p:sp":
          d = this.mapSp(t, c, i, n, r, a, s, l);
          break;
        case "p:pic":
          d = eh({
            node: t,
            nodeTransform: c,
            slideMaster: i,
            slideLayout: n,
            locator: a,
            relationships: s,
            slideTheme: r,
            metadata: this.metadata,
            imageHashes: this.imageHashes,
            parentScope: o
          });
          break;
        case "p:grpSp":
          d = this.mapGrpSp(t, c, i, n, r, a, s, l);
      }
      d && (d = {
        ...d,
        ...c
      });
      return d;
    });
  }
  mapSp(e, t, i, n, r, a, s, o) {
    let l = [];
    if (U(e, ["p:spPr", "a:prstGeom"]).length > 0) {
      let d = ef({
        node: e,
        nodeTransform: t,
        slideMaster: i,
        slideLayout: n,
        slideTheme: r,
        locator: a,
        relationships: s,
        metadata: this.metadata,
        parentScope: o
      });
      d && l.push(d);
    }
    if (B(e, "a:t").length > 0) {
      let d = ev({
        node: e,
        nodeTransform: t,
        slideMaster: i,
        slideLayout: n,
        slideTheme: r,
        locator: a,
        relationships: s,
        metadata: this.metadata,
        parentScope: o
      });
      d && l.push(d);
    } else if (U(e, ["p:spPr", "a:custGeom"]).length > 0) {
      let d = ec({
        node: e,
        nodeTransform: t,
        slideMaster: i,
        slideLayout: n,
        slideTheme: r,
        locator: a,
        relationships: s,
        metadata: this.metadata,
        parentScope: o
      });
      d && l.push(d);
    }
    if (0 === l.length) {
      Vy.error(`Failed to convert spNode: ${e.name}`, o);
      return;
    }
    return 1 === l.length ? l[0] : {
      type: "FRAME",
      children: l.map(e => ({
        ...e,
        size: t?.size
      })),
      clipsContent: !1,
      fills: []
    };
  }
  mapNodeTransforms(e, t, i, n, r) {
    let a = ea(e, this.metadata.scalingFactor);
    let s = es(e, this.metadata.scalingFactor);
    let o = function (e) {
      let t = G(e, ["p:spPr", "a:xfrm", "rot"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "rot"]);
      return t ? parseInt(t) / 6e4 * (Math.PI / 180) : 0;
    }(e);
    let l = ["1" === (G(e, ["p:spPr", "a:xfrm", "flipH"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "flipH"])), "1" === (G(e, ["p:spPr", "a:xfrm", "flipV"]) ?? G(e, ["p:grpSpPr", "a:xfrm", "flipH"]))];
    if (!a && n) {
      let e = n.key && i ? i.pos[n.key] : null;
      let o = n.key ? t.pos[n.key] : null;
      n.key && e ? (a = [e.x, e.y], s = [e.w, e.h]) : n.key && o ? (a = [o.x, o.y], s = [o.w, o.h]) : Vy.error(`Failed to get offset for locator: ${JSON.stringify(n)}`, r);
    }
    if (!a && !s) return null;
    let d = {};
    if (a && s) {
      let e = function (e, t, i, n, r) {
        let a = n ? -1 : 1;
        let s = r ? -1 : 1;
        let [o, l] = t;
        let [d, c] = e;
        let u = o / 2;
        let p = l / 2;
        let m = Math.cos(i) * a;
        let h = Math.sin(i) * a;
        let g = -Math.sin(i) * s;
        let f = Math.cos(i) * s;
        return [[m, h, d + u - (m * u + h * p)], [g, f, c + p - (g * u + f * p)]];
      }(a, s, o, l[0], l[1]);
      d.relativeTransform = e;
      d.size = {
        x: s[0],
        y: s[1]
      };
    }
    return d;
  }
  mapGrpSp(e, t, i, n, r, a, s, o) {
    let l = [];
    let d = e.elements ?? [];
    let c = function (e, t) {
      let i = G(e, ["p:grpSpPr", "a:xfrm", "a:chOff", "x"]);
      let n = G(e, ["p:grpSpPr", "a:xfrm", "a:chOff", "y"]);
      if (i && n) return [N(parseInt(i), t), N(parseInt(n), t)];
    }(e, this.metadata.scalingFactor);
    let u = function (e, t) {
      let i = G(e, ["p:grpSpPr", "a:xfrm", "a:chExt", "cx"]);
      let n = G(e, ["p:grpSpPr", "a:xfrm", "a:chExt", "cy"]);
      if (i && n) return [N(parseInt(i), t), N(parseInt(n), t)];
    }(e, this.metadata.scalingFactor);
    let p = t?.size && u ? [t.size.x / u[0], t.size.y / u[1]] : [1, 1];
    for (let e of d) {
      let t = this.mapNode(e, i, n, r, a, s, o);
      t && (c && u ? l.push(function (e, t, i = [1, 1]) {
        if (!e.relativeTransform) return e;
        let [n, r] = t;
        let [a, s] = i;
        return {
          ...e,
          relativeTransform: [[e.relativeTransform[0][0] * a, e.relativeTransform[0][1], (e.relativeTransform[0][2] + n) * a], [e.relativeTransform[1][0], e.relativeTransform[1][1] * s, (e.relativeTransform[1][2] + r) * s]]
        };
      }(t, [-c[0], -c[1]], p)) : l.push(t));
    }
    return {
      type: "FRAME",
      children: l,
      fills: []
    };
  }
};
eC.APP_FILE_PATH = "docProps/app.xml";
eC.PRESENTATION_FILE_PATH = "ppt/presentation.xml";
eC.SLIDE_MASTER_FILE_PATTERN = RegExp("^ppt/slideMasters/slideMaster[0-9]+.xml$");
eC.SLIDE_THEME_DIR_PATH = "ppt/theme/";
eC.KNOWN_NON_VISUAL_NODES = ["p:grpSpPr", "p:nvGrpSpPr"];
async function eP(e, t, i) {
  fullscreenValue.resetLoadedFigFile();
  await U_(e, FEditorType.Slides);
  let n = new eC();
  await n.parsePPTX(i);
  let r = n.parseMetadata();
  let s = SlidePptxImporterBindings?.createSlides(r) ?? [];
  if (0 === s.length) throw Error("No slides found in the pptx file");
  let o = await n.parseImages();
  for (let e = 1; e < r.numSlides + 1; e++) n.parseRelationshipsAndThemesForSlide(e);
  n.parseSlideMasterXmls();
  n.parseSlideLayoutXmls();
  permissionScopeHandler.user("pptx-import", () => {
    for (let e = 1; e < s.length + 1; e++) {
      let t = s[e - 1];
      let {
        addedNodes,
        nodeUpdates
      } = n.parseSlideContentXml(e);
      SlidePptxImporterBindings?.insertContentIntoSlide(t, addedNodes, nodeUpdates);
      (function (e, t, i) {
        if (e) try {
          let i = _$$F2(e);
          let n = getSingletonSceneGraph().get(t);
          n && i && (n.slideSpeakerNotes = i);
        } catch (e) {
          console.error("pptx-import", `Failed to set slide speaker notes for slide #${i}`, {
            error: e
          });
        }
      })(n.parseSlideNotesXml(e), t, e);
    }
  });
  Vy.toConsole(zT.IMPORT);
  let l = Fullscreen?.getScene();
  o.images.forEach(e => {
    getImageManager().forgetImage(e.sha1Hash);
  });
  let d = {
    bytes: new Uint8Array(),
    clientMeta: {}
  };
  return {
    file: {
      name: t.length > 100 ? t.slice(0, 99) + "\u2026" : t,
      type: "deck",
      bytes: l,
      thumbnail: d,
      version: 1
    },
    images: o.images,
    videos: [],
    warnings: []
  };
}
let eB = {
  bytes: new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 1, 0, 0, 0, 1, 8, 6, 0, 0, 0, 31, 21, 196, 137, 0, 0, 0, 10, 73, 68, 65, 84, 120, 156, 99, 0, 1, 0, 0, 5, 0, 1, 13, 10, 45, 180, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130]),
  clientMeta: {
    background_color: {
      r: 0,
      g: 0,
      b: 0,
      a: 0
    },
    thumbnail_size: {
      width: 1,
      height: 1
    }
  }
};
async function eV(e, t, i, n, a, s, o, l, d) {
  var c = null;
  let p = Ec(n);
  try {
    let g;
    if (!(p && (await canCreateFileTypeAsync(d, p)))) {
      let t = e.getState();
      let i = t.user?.drafts_folder_id;
      let n = !!i && d !== i && !!p && (await canCreateFileTypeAsync(i, p));
      let r = t.folders[d];
      let a = new OL.InvalidPermissions(r?.name);
      e.dispatch(VisualBellActions.enqueue({
        message: a.message,
        type: "restricted-import-type",
        error: !0,
        button: n ? {
          text: getI18nString("fullscreen.file_import.go_to_drafts"),
          action: () => {
            e.dispatch(selectFolderView(i));
          }
        } : void 0
      }));
      return a;
    }
    if (t.hasCanceled()) throw new OL.Canceled();
    let f = await function (e, t, i, n, a, s, o) {
      if (e.hasCanceled()) return Promise.reject(new OL.Canceled());
      let l = new lZ.ServiceUnavailable();
      let d = function (e, t, i, n, r, a) {
        let s = new FormData();
        s.append("manifest", JSON.stringify({
          canvas_count: 1,
          parts: [{
            name: "canvas",
            mime: "application/x-figma",
            length: t.length
          }, {
            name: "thumbnail",
            mime: "image/png",
            length: i.bytes.length
          }],
          folder_id: a,
          file_type: e,
          client_meta: i.clientMeta,
          max_session_id: n,
          import_file_format: r
        }));
        s.append("canvas", new Blob([t], {
          type: "application/x-figma"
        }));
        s.append("thumbnail", new Blob([i.bytes], {
          type: "image/png"
        }));
        return s;
      }(t, i, n, a, s, o);
      return XHR.post("/api/upnode/checkpoint?st=import", d, {
        raw: !0,
        retryCount: 3
      }).catch(e => {
        reportError(_$$e.SCENEGRAPH_AND_SYNC, e);
        return l;
      }).then(e => {
        if (e.error) throw Error(e.error);
        try {
          return JSON.parse(e.data);
        } catch (e) {
          reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Unparseable canvas upload response"));
          return l;
        }
      });
    }(t, n, a, s || eB, o, l, d);
    if (c = f.meta.file.key, t.hasCanceled()) throw new OL.Canceled();
    if (!c) {
      reportError(_$$e.SCENEGRAPH_AND_SYNC, Error("Converted file upload did not return a file key"));
      return new lZ.ServiceUnavailable();
    }
    if (f.meta.file.file_repo_id) {
      let t = await XHR.put(`/api/repo/${f.meta.file.file_repo_id}`, {
        name: i
      });
      e.dispatch(bE({
        repo: t.data.meta
      }));
      g = {
        file: {
          ...f.meta.file,
          accessed_at: new Date().toISOString()
        }
      };
    } else {
      await XHR.put(`/api/files/${c}`, {
        name: i
      });
      g = {
        file: {
          ...f.meta.file,
          accessed_at: new Date().toISOString(),
          name: i
        }
      };
    }
    e.dispatch(y$({
      type: _$$F4.FILES,
      tiles: [fA(g.file)]
    }));
    return {
      fileKey: c
    };
  } catch (e) {
    c && XHR.del("/api/files_batch", {
      files: [{
        key: c
      }]
    });
    return e;
  }
}
async function eG(e, t, i) {
  let r = t.length;
  let a = 0;
  let l = 0;
  try {
    for (let o = 0; o < t.length; o += 5) {
      let c = [];
      for (let u = o; u < o + 5 && u < t.length; u++) {
        let o = t[u];
        if (e.hasCanceled()) throw new OL.Canceled();
        let p = "application/octet-stream";
        if (e.isProbablyPNGFile(o.bytes)) p = "image/png";else if (e.isProbablyJPEGFile(o.bytes)) p = "image/jpeg";else if (e.isProbablyGIFFile(o.bytes)) p = "image/gif";else {
          console.warn("warning: ignoring image with unknown type (" + Array.prototype.slice.call(o.bytes, 0, 10).map(e => (256 | e).toString(16).slice(-2)) + "...)");
          continue;
        }
        e.callUpdateProgressCallback(20 + (0 === r ? 0 : 80 * u / r));
        c.push(new Promise((e, t) => {
          let r = s => {
            let c = new XMLHttpRequest();
            let u = !1;
            c.onloadend = () => {
              let i = pl.indexOf(c);
              if (i > -1 && pl.slice(i, 1), 4 === c.readyState && 200 === c.status) e();else if (u) t(new OL.Canceled());else if (413 === c.status) {
                a++;
                e();
              } else if (400 === c.status) {
                l++;
                e();
              } else if (401 !== c.status) {
                let e = 3 - s;
                if (--s > 0) {
                  let t = 1e3 * Math.pow(2, e);
                  let i = t + t * Math.random();
                  (429 === c.status || 503 === c.status) && (i *= 2);
                  console.warn("Image upload failed, retrying...");
                  setTimeout(() => {
                    r(s);
                  }, i);
                  return;
                }
              }
              let n = new lZ.ImageUploadFailed();
              t(n);
            };
            c.onabort = () => {
              u = !0;
            };
            c.open("POST", `/api/upnode/image?purpose=canvas&sha1=${sha1HexFromBytes(o.sha1Bytes)}&fileKey=${i.fileKey}`);
            let m = getInitialOptions().user_data?.id;
            m && c.setRequestHeader("X-Figma-User-ID", m);
            c.setRequestHeader("Content-Type", p);
            pl.push(c);
            c.send(o.bytes || null);
          };
          r(3);
        }));
        await delay(0);
      }
      await Promise.all(c);
    }
  } catch (e) {
    XHR.del("/api/files_batch", {
      files: [{
        key: i.fileKey
      }]
    });
    return e;
  }
  let c = [];
  a > 0 && c.push(getI18nString("fullscreen.file_import.oversized_files_images_exceeded_max_size", {
    oversizedFiles: a
  }));
  l > 0 && c.push(getI18nString("fullscreen.file_import.import_invalid_images", {
    invalidFiles: l
  }));
  trackEventAnalytics("file_import_image_upload_complete", {
    oversizedFiles: a,
    invalidFiles: l
  });
  return c;
}
function ez(e) {
  let t = yF([FontSourceType.LOCAL, FontSourceType.GOOGLE, FontSourceType.SHARED]);
  return {
    getFont: async function (i) {
      let n = await t;
      for (let t of [n.localFontsList, n.indexFontsList, n.sharedFontsList]) if (void 0 !== t) for (let n of t) {
        let t = function (e, t) {
          if (e === t) return !0;
          let i = e.toLowerCase().trim();
          let n = t.toLowerCase().trim();
          if (i === n) return "lower";
          let r = i.split("-");
          let a = n.split("-");
          return 0 !== r.length && 0 !== a.length && a[0] === r[0] && (1 === r.length && 2 === a.length && "regular" === a[1] || 2 === r.length && 1 === a.length && "regular" === r[1]) && "assume-regular";
        }(n.postscript, i);
        if (t) {
          !0 !== t && console.warn(`Fuzzy font name match: ${n.postscript} = ${i} (${t})`);
          let r = e.getState();
          let a = null;
          if ("folder" === r.selectedView.view) {
            let e = r.folders[r.selectedView.folderId];
            a = e?.team_id ?? null;
          }
          let s = await M1({
            source: n.source,
            id: n.id,
            postscriptName: n.postscript,
            fileKey: r.openFile?.key || null,
            teamId: a,
            orgId: r.currentUserOrgId
          });
          if (s) return {
            name: n.postscript,
            font: s
          };
        }
      }
      return new Promise((e, t) => t(null));
    }
  };
}
async function eH(e, t, i, n, r, a, s) {
  let c;
  if (".svg" === t.extension) throw new OL.SvgFromFileBrowser();
  let u = i.blob;
  if (!u) {
    logError("convertAndUploadFile", "attempted to convert a file with no blob");
    return new lZ.NoBlob();
  }
  a.fileLength = u.size;
  let m = isFigmaEmail(getInitialOptions()?.user_data?.email);
  ".pdf" === t.extension ? (a.pdf_source_selected = bT(s), trackEventAnalytics("pdf_import_started", a, {
    forwardToDatadog: !0
  }), c = await Lg(e, t.basename, u, s)) : c = ".pptx" === t.extension ? await eP(e, t.basename, u) : await n.convertFile({
    blob: u,
    featureFlags: r,
    fontLoader: ez(e),
    isUserFigmaEmployee: m,
    fileExtension: t.extension
  });
  return c;
}
async function eW(e, t, i, n, a, s, o, l) {
  let {
    fileKey
  } = await eV(e, i, t.basename, s.type, s.bytes, s.thumbnail, s.maxSessionID || 0, n, a);
  let p = {
    fileKey,
    sketchMeta: s.sketchMeta
  };
  let m = _$$C(l, p.fileKey, i);
  let g = await eG(i, o, p);
  try {
    await m;
  } catch (t) {
    t instanceof UploadError && enqueueNetworkErrorBell(e.dispatch, getI18nString("check_network_compatibility.error_bell.video_upload.message"));
    return t;
  }
  try {
    if (s.developerRelatedLinks) {
      let e = new GK();
      let t = s.developerRelatedLinks.map(e => ({
        fileKey,
        nodeId: e.nodeId,
        linkName: e.linkName,
        linkUrl: e.linkUrl
      }));
      await e.addLinks(t);
    }
  } catch (e) {
    reportError(_$$e.DEVELOPER_TOOLS, e);
  }
  return {
    warnings: g,
    file: p
  };
}
export async function $$eK0(e, t, i, n, r, a, s, o) {
  var l;
  var d;
  var c;
  let u = {
    entrypoint: "file_browser"
  };
  try {
    let {
      file,
      images,
      videos,
      warnings
    } = await eH(e, t, r, n, i, u, s);
    if (!file) throw new lZ.UnknownConversionError();
    if (n.hasCanceled()) throw new OL.Canceled();
    let f = await eW(e, t, n, a, o, file, images, videos);
    ".pptx" === t.extension && function (e, t, i) {
      let n = i.file?.fileKey;
      Vy.toFigment(n, zT.IMPORT, t.blob.size / 1024, e.bytes.length / 1024);
      Vy.reset();
    }(file, r, f);
    l = f.file?.fileKey;
    d = t.extension;
    ".pdf" === d && (trackFileEvent("pdf_import_successful", l, e.getState(), u, {
      forwardToDatadog: !0
    }), Ij({
      type: "success"
    }, u.entrypoint, u.fileLength, s));
    return {
      ...f,
      warnings: f.warnings.concat(warnings)
    };
  } catch (e) {
    if (".pdf" === t.extension) !function (e, t, i) {
      if (e instanceof OL.Canceled) return;
      "string" == typeof e && (e = Error(e));
      let n = e instanceof Yw ? e : new lZ.UnknownConversionError();
      Ij({
        type: "failed",
        error: n
      }, t.entrypoint, t.fileLength, i);
    }(e, u, s);else if (".pptx" === t.extension && ((c = e) instanceof OL.Canceled || ("string" == typeof c && (c = Error(c)), Vy.toFigment(r.fileKey, zT.IMPORT, r.blob.size / 1024, 0, c), Vy.reset()), !(e instanceof OL.Canceled))) throw new OL.GenericPptxError();
    throw e;
  }
}
export async function $$eY1(e, t, i, n) {
  let r = isFigmaEmail(getInitialOptions()?.user_data?.email);
  let a = await i.convertFile({
    blob: n,
    featureFlags: t,
    fontLoader: ez(e),
    isUserFigmaEmployee: r,
    fileExtension: ".fig"
  });
  if (!a.file) throw new lZ.UnknownConversionError();
  return a.file;
}
export const W = $$eK0;
export const _ = $$eY1;