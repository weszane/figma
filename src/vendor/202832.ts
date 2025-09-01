let i = "-";
function s(e) {
  let r = d(e);
  let {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = e;
  return {
    getClassGroupId: function (e) {
      let n = e.split(i);
      "" === n[0] && 1 !== n.length && n.shift();
      return o(n, r) || h(e);
    },
    getConflictingClassGroupIds: function (e, r) {
      let i = conflictingClassGroups[e] || [];
      return r && conflictingClassGroupModifiers[e] ? [...i, ...conflictingClassGroupModifiers[e]] : i;
    }
  };
}
function o(e, r) {
  if (0 === e.length) return r.classGroupId;
  let n = e[0];
  let s = r.nextPart.get(n);
  let a = s ? o(e.slice(1), s) : void 0;
  if (a) return a;
  if (0 === r.validators.length) return;
  let h = e.join(i);
  return r.validators.find(({
    validator: e
  }) => e(h))?.classGroupId;
}
let a = /^\[(.+)\]$/;
function h(e) {
  if (a.test(e)) {
    let r = a.exec(e)[1];
    let n = r?.substring(0, r.indexOf(":"));
    if (n) return "arbitrary.." + n;
  }
}
function d(e) {
  let {
    theme,
    prefix
  } = e;
  let i = {
    nextPart: new Map(),
    validators: []
  };
  v(Object.entries(e.classGroups), prefix).forEach(([e, n]) => {
    p(n, i, e, theme);
  });
  return i;
}
function p(e, r, n, i) {
  e.forEach(e => {
    if ("string" == typeof e) {
      ("" === e ? r : g(r, e)).classGroupId = n;
      return;
    }
    if ("function" == typeof e) {
      if (m(e)) {
        p(e(i), r, n, i);
        return;
      }
      r.validators.push({
        validator: e,
        classGroupId: n
      });
      return;
    }
    Object.entries(e).forEach(([e, s]) => {
      p(s, g(r, e), n, i);
    });
  });
}
function g(e, r) {
  let n = e;
  r.split(i).forEach(e => {
    n.nextPart.has(e) || n.nextPart.set(e, {
      nextPart: new Map(),
      validators: []
    });
    n = n.nextPart.get(e);
  });
  return n;
}
function m(e) {
  return e.isThemeGetter;
}
function v(e, r) {
  return r ? e.map(([e, n]) => [e, n.map(e => "string" == typeof e ? r + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, n]) => [r + e, n])) : e)]) : e;
}
function y(e) {
  if (e < 1) return {
    get: () => void 0,
    set: () => {}
  };
  let r = 0;
  let n = new Map();
  let i = new Map();
  function s(s, o) {
    n.set(s, o);
    ++r > e && (r = 0, i = n, n = new Map());
  }
  return {
    get(e) {
      let r = n.get(e);
      return void 0 !== r ? r : void 0 !== (r = i.get(e)) ? (s(e, r), r) : void 0;
    },
    set(e, r) {
      n.has(e) ? n.set(e, r) : s(e, r);
    }
  };
}
let b = "!";
function O(e) {
  let r = e.separator;
  let n = 1 === r.length;
  let i = r[0];
  let s = r.length;
  return function (e) {
    let o;
    let a = [];
    let h = 0;
    let d = 0;
    for (let p = 0; p < e.length; p++) {
      let g = e[p];
      if (0 === h) {
        if (g === i && (n || e.slice(p, p + s) === r)) {
          a.push(e.slice(d, p));
          d = p + s;
          continue;
        }
        if ("/" === g) {
          o = p;
          continue;
        }
      }
      "[" === g ? h++ : "]" === g && h--;
    }
    let p = 0 === a.length ? e : e.substring(d);
    let g = p.startsWith(b);
    let m = g ? p.substring(1) : p;
    return {
      modifiers: a,
      hasImportantModifier: g,
      baseClassName: m,
      maybePostfixModifierPosition: o && o > d ? o - d : void 0
    };
  };
}
function x(e) {
  if (e.length <= 1) return e;
  let r = [];
  let n = [];
  e.forEach(e => {
    "[" === e[0] ? (r.push(...n.sort(), e), n = []) : n.push(e);
  });
  r.push(...n.sort());
  return r;
}
function w(e) {
  return {
    cache: y(e.cacheSize),
    splitModifiers: O(e),
    ...s(e)
  };
}
let k = /\s+/;
function _(e, r) {
  let {
    splitModifiers,
    getClassGroupId,
    getConflictingClassGroupIds
  } = r;
  let o = new Set();
  return e.trim().split(k).map(e => {
    let {
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = splitModifiers(e);
    let h = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    let d = !!maybePostfixModifierPosition;
    if (!h) {
      if (!maybePostfixModifierPosition || !(h = getClassGroupId(baseClassName))) return {
        isTailwindClass: !1,
        originalClassName: e
      };
      d = !1;
    }
    let p = x(modifiers).join(":");
    return {
      isTailwindClass: !0,
      modifierId: hasImportantModifier ? p + b : p,
      classGroupId: h,
      originalClassName: e,
      hasPostfixModifier: d
    };
  }).reverse().filter(e => {
    if (!e.isTailwindClass) return !0;
    let {
      modifierId,
      classGroupId,
      hasPostfixModifier
    } = e;
    let a = modifierId + classGroupId;
    return !o.has(a) && (o.add(a), getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(e => o.add(modifierId + e)), !0);
  }).reverse().map(e => e.originalClassName).join(" ");
}
function S() {
  let e;
  let r;
  let n = 0;
  let i = "";
  for (; n < $$arguments.length;) (e = $$arguments[n++]) && (r = E(e)) && (i && (i += " "), i += r);
  return i;
}
function E(e) {
  let r;
  if ("string" == typeof e) return e;
  let n = "";
  for (let i = 0; i < e.length; i++) e[i] && (r = E(e[i])) && (n && (n += " "), n += r);
  return n;
}
function A(e, ...r) {
  let n;
  let i;
  let s;
  let o = a;
  function a(a) {
    i = (n = w(r.reduce((e, r) => r(e), e()))).cache.get;
    s = n.cache.set;
    o = h;
    return h(a);
  }
  function h(e) {
    let r = i(e);
    if (r) return r;
    let o = _(e, n);
    s(e, o);
    return o;
  }
  return function () {
    return o(S.apply(null, arguments));
  };
}
function C(e) {
  let r = r => r[e] || [];
  r.isThemeGetter = !0;
  return r;
}
let T = /^\[(?:([a-z-]+):)?(.+)\]$/i;
let I = /^\d+\/\d+$/;
let P = new Set(["px", "full", "screen"]);
let R = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
let M = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
let D = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/;
let N = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
let $ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function L(e) {
  return z(e) || P.has(e) || I.test(e);
}
function j(e) {
  return K(e, "length", J);
}
function z(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Z(e) {
  return K(e, "number", z);
}
function F(e) {
  return !!e && Number.isInteger(Number(e));
}
function U(e) {
  return e.endsWith("%") && z(e.slice(0, -1));
}
function Q(e) {
  return T.test(e);
}
function V(e) {
  return R.test(e);
}
let B = new Set(["length", "size", "percentage"]);
function q(e) {
  return K(e, B, ee);
}
function W(e) {
  return K(e, "position", ee);
}
let Y = new Set(["image", "url"]);
function G(e) {
  return K(e, Y, er);
}
function X(e) {
  return K(e, "", et);
}
function H() {
  return !0;
}
function K(e, r, n) {
  let i = T.exec(e);
  return !!i && (i[1] ? "string" == typeof r ? i[1] === r : r.has(i[1]) : n(i[2]));
}
function J(e) {
  return M.test(e) && !D.test(e);
}
function ee() {
  return !1;
}
function et(e) {
  return N.test(e);
}
function er(e) {
  return $.test(e);
}
export let $$en1 = Object.defineProperty({
  __proto__: null,
  isAny: H,
  isArbitraryImage: G,
  isArbitraryLength: j,
  isArbitraryNumber: Z,
  isArbitraryPosition: W,
  isArbitraryShadow: X,
  isArbitrarySize: q,
  isArbitraryValue: Q,
  isInteger: F,
  isLength: L,
  isNumber: z,
  isPercent: U,
  isTshirtSize: V
}, Symbol.toStringTag, {
  value: "Module"
});
function ei() {
  let e = C("colors");
  let r = C("spacing");
  let n = C("blur");
  let i = C("brightness");
  let s = C("borderColor");
  let o = C("borderRadius");
  let a = C("borderSpacing");
  let h = C("borderWidth");
  let d = C("contrast");
  let p = C("grayscale");
  let g = C("hueRotate");
  let m = C("invert");
  let v = C("gap");
  let y = C("gradientColorStops");
  let b = C("gradientColorStopPositions");
  let O = C("inset");
  let x = C("margin");
  let w = C("opacity");
  let k = C("padding");
  let _ = C("saturate");
  let S = C("scale");
  let E = C("sepia");
  let A = C("skew");
  let T = C("space");
  let I = C("translate");
  let P = () => ["auto", "contain", "none"];
  let R = () => ["auto", "hidden", "clip", "visible", "scroll"];
  let M = () => ["auto", Q, r];
  let D = () => [Q, r];
  let N = () => ["", L, j];
  let $ = () => ["auto", z, Q];
  let B = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  let Y = () => ["solid", "dashed", "dotted", "double", "none"];
  let K = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  let J = () => ["start", "end", "center", "between", "around", "evenly", "stretch"];
  let ee = () => ["", "0", Q];
  let et = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  let er = () => [z, Z];
  let en = () => [z, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [H],
      spacing: [L, j],
      blur: ["none", "", V, Q],
      brightness: er(),
      borderColor: [e],
      borderRadius: ["none", "", "full", V, Q],
      borderSpacing: D(),
      borderWidth: N(),
      contrast: er(),
      grayscale: ee(),
      hueRotate: en(),
      invert: ee(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [U, j],
      inset: M(),
      margin: M(),
      opacity: er(),
      padding: D(),
      saturate: er(),
      scale: er(),
      sepia: ee(),
      skew: en(),
      space: D(),
      translate: D()
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", "video", Q]
      }],
      container: ["container"],
      columns: [{
        columns: [V]
      }],
      "break-after": [{
        "break-after": et()
      }],
      "break-before": [{
        "break-before": et()
      }],
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      box: [{
        box: ["border", "content"]
      }],
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      isolation: ["isolate", "isolation-auto"],
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      "object-position": [{
        object: [...B(), Q]
      }],
      overflow: [{
        overflow: R()
      }],
      "overflow-x": [{
        "overflow-x": R()
      }],
      "overflow-y": [{
        "overflow-y": R()
      }],
      overscroll: [{
        overscroll: P()
      }],
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: [O]
      }],
      "inset-x": [{
        "inset-x": [O]
      }],
      "inset-y": [{
        "inset-y": [O]
      }],
      start: [{
        start: [O]
      }],
      end: [{
        end: [O]
      }],
      top: [{
        top: [O]
      }],
      right: [{
        right: [O]
      }],
      bottom: [{
        bottom: [O]
      }],
      left: [{
        left: [O]
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: ["auto", F, Q]
      }],
      basis: [{
        basis: M()
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      flex: [{
        flex: ["1", "auto", "initial", "none", Q]
      }],
      grow: [{
        grow: ee()
      }],
      shrink: [{
        shrink: ee()
      }],
      order: [{
        order: ["first", "last", "none", F, Q]
      }],
      "grid-cols": [{
        "grid-cols": [H]
      }],
      "col-start-end": [{
        col: ["auto", {
          span: ["full", F, Q]
        }, Q]
      }],
      "col-start": [{
        "col-start": $()
      }],
      "col-end": [{
        "col-end": $()
      }],
      "grid-rows": [{
        "grid-rows": [H]
      }],
      "row-start-end": [{
        row: ["auto", {
          span: [F, Q]
        }, Q]
      }],
      "row-start": [{
        "row-start": $()
      }],
      "row-end": [{
        "row-end": $()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
      }],
      gap: [{
        gap: [v]
      }],
      "gap-x": [{
        "gap-x": [v]
      }],
      "gap-y": [{
        "gap-y": [v]
      }],
      "justify-content": [{
        justify: ["normal", ...J()]
      }],
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      "align-content": [{
        content: ["normal", ...J(), "baseline"]
      }],
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      "place-content": [{
        "place-content": [...J(), "baseline"]
      }],
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      p: [{
        p: [k]
      }],
      px: [{
        px: [k]
      }],
      py: [{
        py: [k]
      }],
      ps: [{
        ps: [k]
      }],
      pe: [{
        pe: [k]
      }],
      pt: [{
        pt: [k]
      }],
      pr: [{
        pr: [k]
      }],
      pb: [{
        pb: [k]
      }],
      pl: [{
        pl: [k]
      }],
      m: [{
        m: [x]
      }],
      mx: [{
        mx: [x]
      }],
      my: [{
        my: [x]
      }],
      ms: [{
        ms: [x]
      }],
      me: [{
        me: [x]
      }],
      mt: [{
        mt: [x]
      }],
      mr: [{
        mr: [x]
      }],
      mb: [{
        mb: [x]
      }],
      ml: [{
        ml: [x]
      }],
      "space-x": [{
        "space-x": [T]
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": [T]
      }],
      "space-y-reverse": ["space-y-reverse"],
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, r]
      }],
      "min-w": [{
        "min-w": [Q, r, "min", "max", "fit"]
      }],
      "max-w": [{
        "max-w": [Q, r, "none", "full", "min", "max", "fit", "prose", {
          screen: [V]
        }, V]
      }],
      h: [{
        h: [Q, r, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "min-h": [{
        "min-h": [Q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      "max-h": [{
        "max-h": [Q, r, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      size: [{
        size: [Q, r, "auto", "min", "max", "fit"]
      }],
      "font-size": [{
        text: ["base", V, j]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Z]
      }],
      "font-family": [{
        font: [H]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      "line-clamp": [{
        "line-clamp": ["none", z, Z]
      }],
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", L, Q]
      }],
      "list-image": [{
        "list-image": ["none", Q]
      }],
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "placeholder-color": [{
        placeholder: [e]
      }],
      "placeholder-opacity": [{
        "placeholder-opacity": [w]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "text-color": [{
        text: [e]
      }],
      "text-opacity": [{
        "text-opacity": [w]
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...Y(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", L, j]
      }],
      "underline-offset": [{
        "underline-offset": ["auto", L, Q]
      }],
      "text-decoration-color": [{
        decoration: [e]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: D()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", Q]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-opacity": [{
        "bg-opacity": [w]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: [...B(), W]
      }],
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      "bg-size": [{
        bg: ["auto", "cover", "contain", q]
      }],
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, G]
      }],
      "bg-color": [{
        bg: [e]
      }],
      "gradient-from-pos": [{
        from: [b]
      }],
      "gradient-via-pos": [{
        via: [b]
      }],
      "gradient-to-pos": [{
        to: [b]
      }],
      "gradient-from": [{
        from: [y]
      }],
      "gradient-via": [{
        via: [y]
      }],
      "gradient-to": [{
        to: [y]
      }],
      rounded: [{
        rounded: [o]
      }],
      "rounded-s": [{
        "rounded-s": [o]
      }],
      "rounded-e": [{
        "rounded-e": [o]
      }],
      "rounded-t": [{
        "rounded-t": [o]
      }],
      "rounded-r": [{
        "rounded-r": [o]
      }],
      "rounded-b": [{
        "rounded-b": [o]
      }],
      "rounded-l": [{
        "rounded-l": [o]
      }],
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      "rounded-se": [{
        "rounded-se": [o]
      }],
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      "rounded-es": [{
        "rounded-es": [o]
      }],
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      "rounded-br": [{
        "rounded-br": [o]
      }],
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      "border-w": [{
        border: [h]
      }],
      "border-w-x": [{
        "border-x": [h]
      }],
      "border-w-y": [{
        "border-y": [h]
      }],
      "border-w-s": [{
        "border-s": [h]
      }],
      "border-w-e": [{
        "border-e": [h]
      }],
      "border-w-t": [{
        "border-t": [h]
      }],
      "border-w-r": [{
        "border-r": [h]
      }],
      "border-w-b": [{
        "border-b": [h]
      }],
      "border-w-l": [{
        "border-l": [h]
      }],
      "border-opacity": [{
        "border-opacity": [w]
      }],
      "border-style": [{
        border: [...Y(), "hidden"]
      }],
      "divide-x": [{
        "divide-x": [h]
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": [h]
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "divide-opacity": [{
        "divide-opacity": [w]
      }],
      "divide-style": [{
        divide: Y()
      }],
      "border-color": [{
        border: [s]
      }],
      "border-color-x": [{
        "border-x": [s]
      }],
      "border-color-y": [{
        "border-y": [s]
      }],
      "border-color-t": [{
        "border-t": [s]
      }],
      "border-color-r": [{
        "border-r": [s]
      }],
      "border-color-b": [{
        "border-b": [s]
      }],
      "border-color-l": [{
        "border-l": [s]
      }],
      "divide-color": [{
        divide: [s]
      }],
      "outline-style": [{
        outline: ["", ...Y()]
      }],
      "outline-offset": [{
        "outline-offset": [L, Q]
      }],
      "outline-w": [{
        outline: [L, j]
      }],
      "outline-color": [{
        outline: [e]
      }],
      "ring-w": [{
        ring: N()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: [e]
      }],
      "ring-opacity": [{
        "ring-opacity": [w]
      }],
      "ring-offset-w": [{
        "ring-offset": [L, j]
      }],
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      shadow: [{
        shadow: ["", "inner", "none", V, X]
      }],
      "shadow-color": [{
        shadow: [H]
      }],
      opacity: [{
        opacity: [w]
      }],
      "mix-blend": [{
        "mix-blend": K()
      }],
      "bg-blend": [{
        "bg-blend": K()
      }],
      filter: [{
        filter: ["", "none"]
      }],
      blur: [{
        blur: [n]
      }],
      brightness: [{
        brightness: [i]
      }],
      contrast: [{
        contrast: [d]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", V, Q]
      }],
      grayscale: [{
        grayscale: [p]
      }],
      "hue-rotate": [{
        "hue-rotate": [g]
      }],
      invert: [{
        invert: [m]
      }],
      saturate: [{
        saturate: [_]
      }],
      sepia: [{
        sepia: [E]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [i]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [g]
      }],
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": [a]
      }],
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
      }],
      duration: [{
        duration: en()
      }],
      ease: [{
        ease: ["linear", "in", "out", "in-out", Q]
      }],
      delay: [{
        delay: en()
      }],
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
      }],
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      scale: [{
        scale: [S]
      }],
      "scale-x": [{
        "scale-x": [S]
      }],
      "scale-y": [{
        "scale-y": [S]
      }],
      rotate: [{
        rotate: [F, Q]
      }],
      "translate-x": [{
        "translate-x": [I]
      }],
      "translate-y": [{
        "translate-y": [I]
      }],
      "skew-x": [{
        "skew-x": [A]
      }],
      "skew-y": [{
        "skew-y": [A]
      }],
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
      }],
      accent: [{
        accent: ["auto", e]
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
      }],
      "caret-color": [{
        caret: [e]
      }],
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": D()
      }],
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      "scroll-my": [{
        "scroll-my": D()
      }],
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      "scroll-me": [{
        "scroll-me": D()
      }],
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      "scroll-p": [{
        "scroll-p": D()
      }],
      "scroll-px": [{
        "scroll-px": D()
      }],
      "scroll-py": [{
        "scroll-py": D()
      }],
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      "touch-pz": ["touch-pinch-zoom"],
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Q]
      }],
      fill: [{
        fill: [e, "none"]
      }],
      "stroke-w": [{
        stroke: [L, j, Z]
      }],
      stroke: [{
        stroke: [e, "none"]
      }],
      sr: ["sr-only", "not-sr-only"],
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
function es(e, r, n) {
  void 0 !== n && (e[r] = n);
}
export let $$eo0 = A(ei);
export const QP = $$eo0;
export const y$ = $$en1;