let o = e => {
  let t = i(e);
  let {
    conflictingClassGroups,
    conflictingClassGroupModifiers
  } = e;
  return {
    getClassGroupId: e => {
      let r = e.split("-");
      "" === r[0] && 1 !== r.length && r.shift();
      return a(r, t) || l(e);
    },
    getConflictingClassGroupIds: (e, t) => {
      let a = conflictingClassGroups[e] || [];
      return t && conflictingClassGroupModifiers[e] ? [...a, ...conflictingClassGroupModifiers[e]] : a;
    }
  };
};
let a = (e, t) => {
  if (0 === e.length) return t.classGroupId;
  let r = e[0];
  let o = t.nextPart.get(r);
  let n = o ? a(e.slice(1), o) : void 0;
  if (n) return n;
  if (0 === t.validators.length) return;
  let l = e.join("-");
  return t.validators.find(({
    validator: e
  }) => e(l))?.classGroupId;
};
let n = /^\[(.+)\]$/;
let l = e => {
  if (n.test(e)) {
    let t = n.exec(e)[1];
    let r = t?.substring(0, t.indexOf(":"));
    if (r) return "arbitrary.." + r;
  }
};
let i = e => {
  let {
    theme,
    classGroups
  } = e;
  let o = {
    nextPart: new Map(),
    validators: []
  };
  for (let e in classGroups) s(classGroups[e], o, e, theme);
  return o;
};
let s = (e, t, r, o) => {
  e.forEach(e => {
    if ("string" == typeof e) {
      ("" === e ? t : d(t, e)).classGroupId = r;
      return;
    }
    if ("function" == typeof e) {
      if (c(e)) {
        s(e(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: e,
        classGroupId: r
      });
      return;
    }
    Object.entries(e).forEach(([e, a]) => {
      s(a, d(t, e), r, o);
    });
  });
};
let d = (e, t) => {
  let r = e;
  t.split("-").forEach(e => {
    r.nextPart.has(e) || r.nextPart.set(e, {
      nextPart: new Map(),
      validators: []
    });
    r = r.nextPart.get(e);
  });
  return r;
};
let c = e => e.isThemeGetter;
let m = e => {
  if (e < 1) return {
    get: () => void 0,
    set: () => {}
  };
  let t = 0;
  let r = new Map();
  let o = new Map();
  let a = (a, n) => {
    r.set(a, n);
    ++t > e && (t = 0, o = r, r = new Map());
  };
  return {
    get(e) {
      let t = r.get(e);
      return void 0 !== t ? t : void 0 !== (t = o.get(e)) ? (a(e, t), t) : void 0;
    },
    set(e, t) {
      r.has(e) ? r.set(e, t) : a(e, t);
    }
  };
};
let u = e => {
  let {
    prefix,
    experimentalParseClassName
  } = e;
  let o = e => {
    let t;
    let r = [];
    let o = 0;
    let a = 0;
    let n = 0;
    for (let l = 0; l < e.length; l++) {
      let i = e[l];
      if (0 === o && 0 === a) {
        if (":" === i) {
          r.push(e.slice(n, l));
          n = l + 1;
          continue;
        }
        if ("/" === i) {
          t = l;
          continue;
        }
      }
      "[" === i ? o++ : "]" === i ? o-- : "(" === i ? a++ : ")" === i && a--;
    }
    let l = 0 === r.length ? e : e.substring(n);
    let i = p(l);
    return {
      modifiers: r,
      hasImportantModifier: i !== l,
      baseClassName: i,
      maybePostfixModifierPosition: t && t > n ? t - n : void 0
    };
  };
  if (prefix) {
    let e = prefix + ":";
    let r = o;
    o = t => t.startsWith(e) ? r(t.substring(e.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: t,
      maybePostfixModifierPosition: void 0
    };
  }
  if (experimentalParseClassName) {
    let e = o;
    o = t => experimentalParseClassName({
      className: t,
      parseClassName: e
    });
  }
  return o;
};
let p = e => e.endsWith("!") ? e.substring(0, e.length - 1) : e.startsWith("!") ? e.substring(1) : e;
let f = e => {
  let t = Object.fromEntries(e.orderSensitiveModifiers.map(e => [e, !0]));
  return e => {
    if (e.length <= 1) return e;
    let r = [];
    let o = [];
    e.forEach(e => {
      "[" === e[0] || t[e] ? (r.push(...o.sort(), e), o = []) : o.push(e);
    });
    r.push(...o.sort());
    return r;
  };
};
let b = e => ({
  cache: m(e.cacheSize),
  parseClassName: u(e),
  sortModifiers: f(e),
  ...o(e)
});
let g = /\s+/;
let h = (e, t) => {
  let {
    parseClassName,
    getClassGroupId,
    getConflictingClassGroupIds,
    sortModifiers
  } = t;
  let l = [];
  let i = e.trim().split(g);
  let s = "";
  for (let e = i.length - 1; e >= 0; e -= 1) {
    let t = i[e];
    let {
      isExternal,
      modifiers,
      hasImportantModifier,
      baseClassName,
      maybePostfixModifierPosition
    } = parseClassName(t);
    if (isExternal) {
      s = t + (s.length > 0 ? " " + s : s);
      continue;
    }
    let f = !!maybePostfixModifierPosition;
    let b = getClassGroupId(f ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    if (!b) {
      if (!f || !(b = getClassGroupId(baseClassName))) {
        s = t + (s.length > 0 ? " " + s : s);
        continue;
      }
      f = !1;
    }
    let g = sortModifiers(modifiers).join(":");
    let h = hasImportantModifier ? g + "!" : g;
    let x = h + b;
    if (l.includes(x)) continue;
    l.push(x);
    let v = getConflictingClassGroupIds(b, f);
    for (let e = 0; e < v.length; ++e) {
      let t = v[e];
      l.push(h + t);
    }
    s = t + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function x() {
  let e;
  let t;
  let r = 0;
  let o = "";
  for (; r < $$arguments.length;) (e = $$arguments[r++]) && (t = v(e)) && (o && (o += " "), o += t);
  return o;
}
let v = e => {
  let t;
  if ("string" == typeof e) return e;
  let r = "";
  for (let o = 0; o < e.length; o++) e[o] && (t = v(e[o])) && (r && (r += " "), r += t);
  return r;
};
let w = e => {
  let t = t => t[e] || [];
  t.isThemeGetter = !0;
  return t;
};
let y = /^\[(?:(\w[\w-]*):)?(.+)\]$/i;
let k = /^\((?:(\w[\w-]*):)?(.+)\)$/i;
let $ = /^\d+\/\d+$/;
let j = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
let _ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
let z = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/;
let N = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
let M = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
let A = e => $.test(e);
let C = e => !!e && !Number.isNaN(Number(e));
let E = e => !!e && Number.isInteger(Number(e));
let O = e => e.endsWith("%") && C(e.slice(0, -1));
let P = e => j.test(e);
let S = () => !0;
let q = e => _.test(e) && !z.test(e);
let R = () => !1;
let G = e => N.test(e);
let W = e => M.test(e);
let L = e => !I(e) && !Z(e);
let B = e => ee(e, ea, R);
let I = e => y.test(e);
let Y = e => ee(e, en, q);
let F = e => ee(e, el, C);
let T = e => ee(e, er, R);
let X = e => ee(e, eo, W);
let V = e => ee(e, es, G);
let Z = e => k.test(e);
let D = e => et(e, en);
let U = e => et(e, ei);
let K = e => et(e, er);
let H = e => et(e, ea);
let Q = e => et(e, eo);
let J = e => et(e, es, !0);
let ee = (e, t, r) => {
  let o = y.exec(e);
  return !!o && (o[1] ? t(o[1]) : r(o[2]));
};
let et = (e, t, r = !1) => {
  let o = k.exec(e);
  return !!o && (o[1] ? t(o[1]) : r);
};
let er = e => "position" === e || "percentage" === e;
let eo = e => "image" === e || "url" === e;
let ea = e => "length" === e || "size" === e || "bg-size" === e;
let en = e => "length" === e;
let el = e => "number" === e;
let ei = e => "family-name" === e;
let es = e => "shadow" === e;
Symbol.toStringTag;
export let $$ed0 = function (e, ...t) {
  let r;
  let o;
  let a;
  let n = function (i) {
    o = (r = b(t.reduce((e, t) => t(e), e()))).cache.get;
    a = r.cache.set;
    n = l;
    return l(i);
  };
  function l(e) {
    let t = o(e);
    if (t) return t;
    let n = h(e, r);
    a(e, n);
    return n;
  }
  return function () {
    return n(x.apply(null, arguments));
  };
}(() => {
  let e = w("color");
  let t = w("font");
  let r = w("text");
  let o = w("font-weight");
  let a = w("tracking");
  let n = w("leading");
  let l = w("breakpoint");
  let i = w("container");
  let s = w("spacing");
  let d = w("radius");
  let c = w("shadow");
  let m = w("inset-shadow");
  let u = w("text-shadow");
  let p = w("drop-shadow");
  let f = w("blur");
  let b = w("perspective");
  let g = w("aspect");
  let h = w("ease");
  let x = w("animate");
  let v = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  let y = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"];
  let k = () => [...y(), Z, I];
  let $ = () => ["auto", "hidden", "clip", "visible", "scroll"];
  let j = () => ["auto", "contain", "none"];
  let _ = () => [Z, I, s];
  let z = () => [A, "full", "auto", ..._()];
  let N = () => [E, "none", "subgrid", Z, I];
  let M = () => ["auto", {
    span: ["full", E, Z, I]
  }, E, Z, I];
  let q = () => [E, "auto", Z, I];
  let R = () => ["auto", "min", "max", "fr", Z, I];
  let G = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"];
  let W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"];
  let ee = () => ["auto", ..._()];
  let et = () => [A, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()];
  let er = () => [e, Z, I];
  let eo = () => [...y(), K, T, {
    position: [Z, I]
  }];
  let ea = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }];
  let en = () => ["auto", "cover", "contain", H, B, {
    size: [Z, I]
  }];
  let el = () => [O, D, Y];
  let ei = () => ["", "none", "full", d, Z, I];
  let es = () => ["", C, D, Y];
  let ed = () => ["solid", "dashed", "dotted", "double"];
  let ec = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  let em = () => [C, O, K, T];
  let eu = () => ["", "none", f, Z, I];
  let ep = () => ["none", C, Z, I];
  let ef = () => ["none", C, Z, I];
  let eb = () => [C, Z, I];
  let eg = () => [A, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [P],
      breakpoint: [P],
      color: [S],
      container: [P],
      "drop-shadow": [P],
      ease: ["in", "out", "in-out"],
      font: [L],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [P],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [P],
      shadow: [P],
      spacing: ["px", C],
      text: [P],
      "text-shadow": [P],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      aspect: [{
        aspect: ["auto", "square", A, I, Z, g]
      }],
      container: ["container"],
      columns: [{
        columns: [C, I, Z, i]
      }],
      "break-after": [{
        "break-after": v()
      }],
      "break-before": [{
        "break-before": v()
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
      sr: ["sr-only", "not-sr-only"],
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
        object: k()
      }],
      overflow: [{
        overflow: $()
      }],
      "overflow-x": [{
        "overflow-x": $()
      }],
      "overflow-y": [{
        "overflow-y": $()
      }],
      overscroll: [{
        overscroll: j()
      }],
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      inset: [{
        inset: z()
      }],
      "inset-x": [{
        "inset-x": z()
      }],
      "inset-y": [{
        "inset-y": z()
      }],
      start: [{
        start: z()
      }],
      end: [{
        end: z()
      }],
      top: [{
        top: z()
      }],
      right: [{
        right: z()
      }],
      bottom: [{
        bottom: z()
      }],
      left: [{
        left: z()
      }],
      visibility: ["visible", "invisible", "collapse"],
      z: [{
        z: [E, "auto", Z, I]
      }],
      basis: [{
        basis: [A, "full", "auto", i, ..._()]
      }],
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      flex: [{
        flex: [C, A, "auto", "initial", "none", I]
      }],
      grow: [{
        grow: ["", C, Z, I]
      }],
      shrink: [{
        shrink: ["", C, Z, I]
      }],
      order: [{
        order: [E, "first", "last", "none", Z, I]
      }],
      "grid-cols": [{
        "grid-cols": N()
      }],
      "col-start-end": [{
        col: M()
      }],
      "col-start": [{
        "col-start": q()
      }],
      "col-end": [{
        "col-end": q()
      }],
      "grid-rows": [{
        "grid-rows": N()
      }],
      "row-start-end": [{
        row: M()
      }],
      "row-start": [{
        "row-start": q()
      }],
      "row-end": [{
        "row-end": q()
      }],
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      "auto-cols": [{
        "auto-cols": R()
      }],
      "auto-rows": [{
        "auto-rows": R()
      }],
      gap: [{
        gap: _()
      }],
      "gap-x": [{
        "gap-x": _()
      }],
      "gap-y": [{
        "gap-y": _()
      }],
      "justify-content": [{
        justify: [...G(), "normal"]
      }],
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      "align-content": [{
        content: ["normal", ...G()]
      }],
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      "place-content": [{
        "place-content": G()
      }],
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      p: [{
        p: _()
      }],
      px: [{
        px: _()
      }],
      py: [{
        py: _()
      }],
      ps: [{
        ps: _()
      }],
      pe: [{
        pe: _()
      }],
      pt: [{
        pt: _()
      }],
      pr: [{
        pr: _()
      }],
      pb: [{
        pb: _()
      }],
      pl: [{
        pl: _()
      }],
      m: [{
        m: ee()
      }],
      mx: [{
        mx: ee()
      }],
      my: [{
        my: ee()
      }],
      ms: [{
        ms: ee()
      }],
      me: [{
        me: ee()
      }],
      mt: [{
        mt: ee()
      }],
      mr: [{
        mr: ee()
      }],
      mb: [{
        mb: ee()
      }],
      ml: [{
        ml: ee()
      }],
      "space-x": [{
        "space-x": _()
      }],
      "space-x-reverse": ["space-x-reverse"],
      "space-y": [{
        "space-y": _()
      }],
      "space-y-reverse": ["space-y-reverse"],
      size: [{
        size: et()
      }],
      w: [{
        w: [i, "screen", ...et()]
      }],
      "min-w": [{
        "min-w": [i, "screen", "none", ...et()]
      }],
      "max-w": [{
        "max-w": [i, "screen", "none", "prose", {
          screen: [l]
        }, ...et()]
      }],
      h: [{
        h: ["screen", "lh", ...et()]
      }],
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...et()]
      }],
      "max-h": [{
        "max-h": ["screen", "lh", ...et()]
      }],
      "font-size": [{
        text: ["base", r, D, Y]
      }],
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      "font-style": ["italic", "not-italic"],
      "font-weight": [{
        font: [o, Z, F]
      }],
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", O, I]
      }],
      "font-family": [{
        font: [U, I, t]
      }],
      "fvn-normal": ["normal-nums"],
      "fvn-ordinal": ["ordinal"],
      "fvn-slashed-zero": ["slashed-zero"],
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      tracking: [{
        tracking: [a, Z, I]
      }],
      "line-clamp": [{
        "line-clamp": [C, "none", Z, F]
      }],
      leading: [{
        leading: [n, ..._()]
      }],
      "list-image": [{
        "list-image": ["none", Z, I]
      }],
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      "list-style-type": [{
        list: ["disc", "decimal", "none", Z, I]
      }],
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      "placeholder-color": [{
        placeholder: er()
      }],
      "text-color": [{
        text: er()
      }],
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      "text-decoration-style": [{
        decoration: [...ed(), "wavy"]
      }],
      "text-decoration-thickness": [{
        decoration: [C, "from-font", "auto", Z, Y]
      }],
      "text-decoration-color": [{
        decoration: er()
      }],
      "underline-offset": [{
        "underline-offset": [C, "auto", Z, I]
      }],
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      indent: [{
        indent: _()
      }],
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z, I]
      }],
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      content: [{
        content: ["none", Z, I]
      }],
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      "bg-position": [{
        bg: eo()
      }],
      "bg-repeat": [{
        bg: ea()
      }],
      "bg-size": [{
        bg: en()
      }],
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, E, Z, I],
          radial: ["", Z, I],
          conic: [E, Z, I]
        }, Q, X]
      }],
      "bg-color": [{
        bg: er()
      }],
      "gradient-from-pos": [{
        from: el()
      }],
      "gradient-via-pos": [{
        via: el()
      }],
      "gradient-to-pos": [{
        to: el()
      }],
      "gradient-from": [{
        from: er()
      }],
      "gradient-via": [{
        via: er()
      }],
      "gradient-to": [{
        to: er()
      }],
      rounded: [{
        rounded: ei()
      }],
      "rounded-s": [{
        "rounded-s": ei()
      }],
      "rounded-e": [{
        "rounded-e": ei()
      }],
      "rounded-t": [{
        "rounded-t": ei()
      }],
      "rounded-r": [{
        "rounded-r": ei()
      }],
      "rounded-b": [{
        "rounded-b": ei()
      }],
      "rounded-l": [{
        "rounded-l": ei()
      }],
      "rounded-ss": [{
        "rounded-ss": ei()
      }],
      "rounded-se": [{
        "rounded-se": ei()
      }],
      "rounded-ee": [{
        "rounded-ee": ei()
      }],
      "rounded-es": [{
        "rounded-es": ei()
      }],
      "rounded-tl": [{
        "rounded-tl": ei()
      }],
      "rounded-tr": [{
        "rounded-tr": ei()
      }],
      "rounded-br": [{
        "rounded-br": ei()
      }],
      "rounded-bl": [{
        "rounded-bl": ei()
      }],
      "border-w": [{
        border: es()
      }],
      "border-w-x": [{
        "border-x": es()
      }],
      "border-w-y": [{
        "border-y": es()
      }],
      "border-w-s": [{
        "border-s": es()
      }],
      "border-w-e": [{
        "border-e": es()
      }],
      "border-w-t": [{
        "border-t": es()
      }],
      "border-w-r": [{
        "border-r": es()
      }],
      "border-w-b": [{
        "border-b": es()
      }],
      "border-w-l": [{
        "border-l": es()
      }],
      "divide-x": [{
        "divide-x": es()
      }],
      "divide-x-reverse": ["divide-x-reverse"],
      "divide-y": [{
        "divide-y": es()
      }],
      "divide-y-reverse": ["divide-y-reverse"],
      "border-style": [{
        border: [...ed(), "hidden", "none"]
      }],
      "divide-style": [{
        divide: [...ed(), "hidden", "none"]
      }],
      "border-color": [{
        border: er()
      }],
      "border-color-x": [{
        "border-x": er()
      }],
      "border-color-y": [{
        "border-y": er()
      }],
      "border-color-s": [{
        "border-s": er()
      }],
      "border-color-e": [{
        "border-e": er()
      }],
      "border-color-t": [{
        "border-t": er()
      }],
      "border-color-r": [{
        "border-r": er()
      }],
      "border-color-b": [{
        "border-b": er()
      }],
      "border-color-l": [{
        "border-l": er()
      }],
      "divide-color": [{
        divide: er()
      }],
      "outline-style": [{
        outline: [...ed(), "none", "hidden"]
      }],
      "outline-offset": [{
        "outline-offset": [C, Z, I]
      }],
      "outline-w": [{
        outline: ["", C, D, Y]
      }],
      "outline-color": [{
        outline: er()
      }],
      shadow: [{
        shadow: ["", "none", c, J, V]
      }],
      "shadow-color": [{
        shadow: er()
      }],
      "inset-shadow": [{
        "inset-shadow": ["none", m, J, V]
      }],
      "inset-shadow-color": [{
        "inset-shadow": er()
      }],
      "ring-w": [{
        ring: es()
      }],
      "ring-w-inset": ["ring-inset"],
      "ring-color": [{
        ring: er()
      }],
      "ring-offset-w": [{
        "ring-offset": [C, Y]
      }],
      "ring-offset-color": [{
        "ring-offset": er()
      }],
      "inset-ring-w": [{
        "inset-ring": es()
      }],
      "inset-ring-color": [{
        "inset-ring": er()
      }],
      "text-shadow": [{
        "text-shadow": ["none", u, J, V]
      }],
      "text-shadow-color": [{
        "text-shadow": er()
      }],
      opacity: [{
        opacity: [C, Z, I]
      }],
      "mix-blend": [{
        "mix-blend": [...ec(), "plus-darker", "plus-lighter"]
      }],
      "bg-blend": [{
        "bg-blend": ec()
      }],
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      "mask-image-linear-pos": [{
        "mask-linear": [C]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": em()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": em()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": er()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": er()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": em()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": em()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": er()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": er()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": em()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": em()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": er()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": er()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": em()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": em()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": er()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": er()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": em()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": em()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": er()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": er()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": em()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": em()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": er()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": er()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": em()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": em()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": er()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": er()
      }],
      "mask-image-radial": [{
        "mask-radial": [Z, I]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": em()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": em()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": er()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": er()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": y()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [C]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": em()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": em()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": er()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": er()
      }],
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      "mask-position": [{
        mask: eo()
      }],
      "mask-repeat": [{
        mask: ea()
      }],
      "mask-size": [{
        mask: en()
      }],
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      "mask-image": [{
        mask: ["none", Z, I]
      }],
      filter: [{
        filter: ["", "none", Z, I]
      }],
      blur: [{
        blur: eu()
      }],
      brightness: [{
        brightness: [C, Z, I]
      }],
      contrast: [{
        contrast: [C, Z, I]
      }],
      "drop-shadow": [{
        "drop-shadow": ["", "none", p, J, V]
      }],
      "drop-shadow-color": [{
        "drop-shadow": er()
      }],
      grayscale: [{
        grayscale: ["", C, Z, I]
      }],
      "hue-rotate": [{
        "hue-rotate": [C, Z, I]
      }],
      invert: [{
        invert: ["", C, Z, I]
      }],
      saturate: [{
        saturate: [C, Z, I]
      }],
      sepia: [{
        sepia: ["", C, Z, I]
      }],
      "backdrop-filter": [{
        "backdrop-filter": ["", "none", Z, I]
      }],
      "backdrop-blur": [{
        "backdrop-blur": eu()
      }],
      "backdrop-brightness": [{
        "backdrop-brightness": [C, Z, I]
      }],
      "backdrop-contrast": [{
        "backdrop-contrast": [C, Z, I]
      }],
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", C, Z, I]
      }],
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [C, Z, I]
      }],
      "backdrop-invert": [{
        "backdrop-invert": ["", C, Z, I]
      }],
      "backdrop-opacity": [{
        "backdrop-opacity": [C, Z, I]
      }],
      "backdrop-saturate": [{
        "backdrop-saturate": [C, Z, I]
      }],
      "backdrop-sepia": [{
        "backdrop-sepia": ["", C, Z, I]
      }],
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      "border-spacing": [{
        "border-spacing": _()
      }],
      "border-spacing-x": [{
        "border-spacing-x": _()
      }],
      "border-spacing-y": [{
        "border-spacing-y": _()
      }],
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      caption: [{
        caption: ["top", "bottom"]
      }],
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Z, I]
      }],
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      duration: [{
        duration: [C, "initial", Z, I]
      }],
      ease: [{
        ease: ["linear", "initial", h, Z, I]
      }],
      delay: [{
        delay: [C, Z, I]
      }],
      animate: [{
        animate: ["none", x, Z, I]
      }],
      backface: [{
        backface: ["hidden", "visible"]
      }],
      perspective: [{
        perspective: [b, Z, I]
      }],
      "perspective-origin": [{
        "perspective-origin": k()
      }],
      rotate: [{
        rotate: ep()
      }],
      "rotate-x": [{
        "rotate-x": ep()
      }],
      "rotate-y": [{
        "rotate-y": ep()
      }],
      "rotate-z": [{
        "rotate-z": ep()
      }],
      scale: [{
        scale: ef()
      }],
      "scale-x": [{
        "scale-x": ef()
      }],
      "scale-y": [{
        "scale-y": ef()
      }],
      "scale-z": [{
        "scale-z": ef()
      }],
      "scale-3d": ["scale-3d"],
      skew: [{
        skew: eb()
      }],
      "skew-x": [{
        "skew-x": eb()
      }],
      "skew-y": [{
        "skew-y": eb()
      }],
      transform: [{
        transform: [Z, I, "", "none", "gpu", "cpu"]
      }],
      "transform-origin": [{
        origin: k()
      }],
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      translate: [{
        translate: eg()
      }],
      "translate-x": [{
        "translate-x": eg()
      }],
      "translate-y": [{
        "translate-y": eg()
      }],
      "translate-z": [{
        "translate-z": eg()
      }],
      "translate-none": ["translate-none"],
      accent: [{
        accent: er()
      }],
      appearance: [{
        appearance: ["none", "auto"]
      }],
      "caret-color": [{
        caret: er()
      }],
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Z, I]
      }],
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      "scroll-m": [{
        "scroll-m": _()
      }],
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      "scroll-my": [{
        "scroll-my": _()
      }],
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      "scroll-me": [{
        "scroll-me": _()
      }],
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      "scroll-p": [{
        "scroll-p": _()
      }],
      "scroll-px": [{
        "scroll-px": _()
      }],
      "scroll-py": [{
        "scroll-py": _()
      }],
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      "scroll-pl": [{
        "scroll-pl": _()
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
        "will-change": ["auto", "scroll", "contents", "transform", Z, I]
      }],
      fill: [{
        fill: ["none", ...er()]
      }],
      "stroke-w": [{
        stroke: [C, D, Y, F]
      }],
      stroke: [{
        stroke: ["none", ...er()]
      }],
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
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
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
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
});
export const QP = $$ed0;