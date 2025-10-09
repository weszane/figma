!function (t) {
  var n;
  module.exports = (n = t()).$$default || n;
}(function () {
  "use strict";

  var e;
  var t;
  var n = Object.defineProperty;
  var r = Object.getOwnPropertyDescriptor;
  var i = Object.getOwnPropertyNames;
  var a = Object.prototype.hasOwnProperty;
  var o = (e, t) => {
    for (var r in t) n(e, r, {
      get: t[r],
      enumerable: !0
    });
  };
  var s = (e, t, n) => {
    if (!t.has(e)) throw TypeError("Cannot " + n);
  };
  var _ = (e, t, n) => (s(e, t, "read from private field"), n ? n.call(e) : t.get(e));
  var l = (e, t, n) => {
    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
    t instanceof WeakSet ? t.add(e) : t.set(e, n);
  };
  var u = (e, t, n, r) => (s(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
  var c = {};
  o(c, {
    languages: () => tG,
    options: () => tY,
    parsers: () => tQ,
    printers: () => rd
  });
  var p = (e, t, n, r) => {
    if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
  };
  var d = "string";
  var m = "array";
  var f = "cursor";
  var h = "indent";
  var y = "align";
  var g = "trim";
  var b = "group";
  var D = "fill";
  var x = "if-break";
  var v = "indent-if-break";
  var T = "line-suffix";
  var S = "line-suffix-boundary";
  var C = "line";
  var E = "label";
  var w = "break-parent";
  var A = new Set([f, h, y, g, b, D, x, v, T, S, C, E, w]);
  var k = function (e) {
    if ("string" == typeof e) return d;
    if (Array.isArray(e)) return m;
    if (!e) return;
    let {
      type
    } = e;
    if (A.has(type)) return type;
  };
  var F = e => new Intl.ListFormat("en-US", {
    type: "disjunction"
  }).format(e);
  var P = class extends Error {
    name = "InvalidDocError";
    constructor(e) {
      super(function (e) {
        let t = null === e ? "null" : typeof e;
        if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
        if (k(e)) throw Error("doc is valid.");
        let n = Object.prototype.toString.call(e);
        if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
        let r = F([...A].map(e => `'${e}'`));
        return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
      }(e));
      this.doc = e;
    }
  };
  var N = () => {};
  function I(e) {
    N(e);
    return {
      type: h,
      contents: e
    };
  }
  function O(e, t) {
    N(t);
    return {
      type: y,
      contents: t,
      n: e
    };
  }
  function B(e, t = {}) {
    N(e);
    N(t.expandedStates, !0);
    return {
      type: b,
      id: t.id,
      contents: e,
      break: !!t.shouldBreak,
      expandedStates: t.expandedStates
    };
  }
  function j(e) {
    N(e);
    return {
      type: D,
      parts: e
    };
  }
  function M(e, t = "", n = {}) {
    N(e);
    "" !== t && N(t);
    return {
      type: x,
      breakContents: e,
      flatContents: t,
      groupId: n.groupId
    };
  }
  var L = {
    type: w
  };
  var R = {
    type: C
  };
  var J = {
    type: C,
    soft: !0
  };
  var q = [{
    type: C,
    hard: !0
  }, L];
  var U = [{
    type: C,
    hard: !0,
    literal: !0
  }, L];
  function z(e, t) {
    N(e);
    N(t);
    let n = [];
    for (let r = 0; r < t.length; r++) {
      0 !== r && n.push(e);
      n.push(t[r]);
    }
    return n;
  }
  var K = (e, t, n) => {
    if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
  };
  function W(e, t) {
    if ("string" == typeof e) return t(e);
    let n = new Map();
    return function e(r) {
      if (n.has(r)) return n.get(r);
      let i = function (n) {
        switch (k(n)) {
          case m:
            return t(n.map(e));
          case D:
            return t({
              ...n,
              parts: n.parts.map(e)
            });
          case x:
            return t({
              ...n,
              breakContents: e(n.breakContents),
              flatContents: e(n.flatContents)
            });
          case b:
            {
              let {
                expandedStates,
                contents
              } = n;
              i = expandedStates ? (r = expandedStates.map(e))[0] : e(contents);
              return t({
                ...n,
                contents,
                expandedStates
              });
            }
          case y:
          case h:
          case v:
          case E:
          case T:
            return t({
              ...n,
              contents: e(n.contents)
            });
          case d:
          case f:
          case g:
          case S:
          case C:
          case w:
            return t(n);
          default:
            throw new P(n);
        }
      }(r);
      n.set(r, i);
      return i;
    }(e);
  }
  function V(e, t = U) {
    return W(e, e => "string" == typeof e ? z(t, e.split(`
`)) : e);
  }
  var $;
  var H = function (e, t) {
    let n = !0 === t || "'" === t ? "'" : '"';
    let r = "'" === n ? '"' : "'";
    let i = 0;
    let a = 0;
    for (let t of e) t === n ? i++ : t === r && a++;
    return i > a ? r : n;
  };
  var G = class {
    constructor(e) {
      l(this, $, void 0);
      u(this, $, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
      let t = _(this, $);
      let n = 0;
      for (let r = 0; r < e.length && t.has(e.charAt(r)); r++) n++;
      return n;
    }
    getTrailingWhitespaceCount(e) {
      let t = _(this, $);
      let n = 0;
      for (let r = e.length - 1; r >= 0 && t.has(e.charAt(r)); r--) n++;
      return n;
    }
    getLeadingWhitespace(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(0, t);
    }
    getTrailingWhitespace(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - t);
    }
    hasLeadingWhitespace(e) {
      return _(this, $).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
      return _(this, $).has(K(!1, e, -1));
    }
    trimStart(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(t);
    }
    trimEnd(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - t);
    }
    trim(e) {
      return this.trimEnd(this.trimStart(e));
    }
    split(e, t = !1) {
      let n = `[${function (e) {
        if ("string" != typeof e) throw TypeError("Expected a string");
        return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }([..._(this, $)].join(""))}]+`;
      let r = new RegExp(t ? `(${n})` : n);
      return e.split(r);
    }
    hasWhitespaceCharacter(e) {
      let t = _(this, $);
      return Array.prototype.some.call(e, e => t.has(e));
    }
    hasNonWhitespaceCharacter(e) {
      let t = _(this, $);
      return Array.prototype.some.call(e, e => !t.has(e));
    }
    isWhitespaceOnly(e) {
      let t = _(this, $);
      return Array.prototype.every.call(e, e => t.has(e));
    }
  };
  $ = new WeakMap();
  var X = new G(["	", `
`, "\f", "\r", " "]);
  var Y = class extends Error {
    name = "UnexpectedNodeError";
    constructor(e, t, n = "type") {
      super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`);
      this.node = e;
    }
  };
  var Q = function (e) {
    return e?.type === "front-matter";
  };
  var Z = new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
  var ee = new Set(["if", "else if", "for", "switch", "case"]);
  function et(e, t) {
    var n;
    if ("text" === e.type || "comment" === e.type || Q(e) || "yaml" === e.type || "toml" === e.type) return null;
    if ("attribute" === e.type && delete t.value, "docType" === e.type && delete t.value, "angularControlFlowBlock" === e.type && null != (n = t.parameters) && n.children) for (let n of t.parameters.children) ee.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
    "angularIcuExpression" === e.type && (t.switchValue = e.switchValue.trim());
  }
  async function en(e, t) {
    if ("yaml" === e.lang) {
      let n = e.value.trim();
      let r = n ? await t(n, {
        parser: "yaml"
      }) : "";
      return O({
        type: "root"
      }, [e.startDelimiter, q, r, r ? q : "", e.endDelimiter]);
    }
  }
  function er(e, t = !0) {
    return [I([J, e]), t ? J : ""];
  }
  function ei(e, t) {
    let n = "NGRoot" === e.type ? "NGMicrosyntax" === e.node.type && 1 === e.node.body.length && "NGMicrosyntaxExpression" === e.node.body[0].type ? e.node.body[0].expression : e.node : "JsExpressionRoot" === e.type ? e.node : e;
    return n && ("ObjectExpression" === n.type || "ArrayExpression" === n.type || ("__vue_expression" === t.parser || "__vue_ts_expression" === t.parser) && ("TemplateLiteral" === n.type || "StringLiteral" === n.type));
  }
  async function ea(e, t, n, r) {
    n = {
      __isInHtmlAttribute: !0,
      __embeddedInHtml: !0,
      ...n
    };
    let i = !0;
    r && (n.__onHtmlBindingRoot = (e, t) => {
      i = r(e, t);
    });
    let a = await t(e, n, t);
    return i ? B(a) : er(a);
  }
  et.ignoredProperties = Z;
  var eo = function (e, t, n, r) {
    let {
      node
    } = n;
    let a = r.originalText.slice(node.sourceSpan.start.offset, node.sourceSpan.end.offset);
    return /^\s*$/.test(a) ? "" : ea(a, e, {
      parser: "__ng_directive",
      __isInHtmlAttribute: !1,
      trailingComma: "none"
    }, ei);
  };
  var es = e => String(e).split(/[/\\]/).pop();
  function e_(e, t) {
    if (!t) return;
    let n = es(t).toLowerCase();
    return e.find(({
      filenames: e
    }) => e?.some(e => e.toLowerCase() === n)) ?? e.find(({
      extensions: e
    }) => e?.some(e => n.endsWith(e)));
  }
  var el = function (e, t) {
    let n = e.plugins.flatMap(e => e.languages ?? []);
    let r = function (e, t) {
      if (t) return e.find(({
        name: e
      }) => e.toLowerCase() === t) ?? e.find(({
        aliases: e
      }) => e?.includes(t)) ?? e.find(({
        extensions: e
      }) => e?.includes(`.${t}`));
    }(n, t.language) ?? e_(n, t.physicalFile) ?? e_(n, t.file) ?? void t.physicalFile;
    return r?.parsers[0];
  };
  var eu = {
    area: "none",
    base: "none",
    basefont: "none",
    datalist: "none",
    head: "none",
    link: "none",
    meta: "none",
    noembed: "none",
    noframes: "none",
    param: "block",
    rp: "none",
    script: "block",
    style: "none",
    template: "inline",
    title: "none",
    html: "block",
    body: "block",
    address: "block",
    blockquote: "block",
    center: "block",
    dialog: "block",
    div: "block",
    figure: "block",
    figcaption: "block",
    footer: "block",
    form: "block",
    header: "block",
    hr: "block",
    legend: "block",
    listing: "block",
    main: "block",
    p: "block",
    plaintext: "block",
    pre: "block",
    search: "block",
    xmp: "block",
    slot: "contents",
    ruby: "ruby",
    rt: "ruby-text",
    article: "block",
    aside: "block",
    h1: "block",
    h2: "block",
    h3: "block",
    h4: "block",
    h5: "block",
    h6: "block",
    hgroup: "block",
    nav: "block",
    section: "block",
    dir: "block",
    dd: "block",
    dl: "block",
    dt: "block",
    menu: "block",
    ol: "block",
    ul: "block",
    li: "list-item",
    table: "table",
    caption: "table-caption",
    colgroup: "table-column-group",
    col: "table-column",
    thead: "table-header-group",
    tbody: "table-row-group",
    tfoot: "table-footer-group",
    tr: "table-row",
    td: "table-cell",
    th: "table-cell",
    input: "inline-block",
    button: "inline-block",
    fieldset: "block",
    marquee: "inline-block",
    source: "block",
    track: "block",
    details: "block",
    summary: "block",
    meter: "inline-block",
    progress: "inline-block",
    object: "inline-block",
    video: "inline-block",
    audio: "inline-block",
    select: "inline-block",
    option: "block",
    optgroup: "block"
  };
  var ec = {
    listing: "pre",
    plaintext: "pre",
    pre: "pre",
    xmp: "pre",
    nobr: "nowrap",
    table: "initial",
    textarea: "pre-wrap"
  };
  var ep = function (e) {
    return "element" === e.type && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
  };
  var ed = e => p(!1, e, /^[\t\f\r ]*\n/g, "");
  var em = e => ed(X.trimEnd(e));
  var ef = e => {
    let t = e;
    let n = X.getLeadingWhitespace(t);
    n && (t = t.slice(n.length));
    let r = X.getTrailingWhitespace(t);
    r && (t = t.slice(0, -r.length));
    return {
      leadingWhitespace: n,
      trailingWhitespace: r,
      text: t
    };
  };
  function eh(e, t) {
    return !!("ieConditionalComment" === e.type && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || "ieConditionalComment" === e.type && !e.complete || eP(e) && e.children.some(e => "text" !== e.type && "interpolation" !== e.type) || eR(e, t) && !eb(e) && "interpolation" !== e.type);
  }
  function ey(e) {
    var t;
    return "attribute" !== e.type && !!e.parent && !!e.prev && "comment" === (t = e.prev).type && "prettier-ignore" === t.value.trim();
  }
  function eg(e) {
    return "text" === e.type || "comment" === e.type;
  }
  function eb(e) {
    return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName || "svg:script" === e.fullName || ep(e) && ("script" === e.name || "style" === e.name));
  }
  function eD(e) {
    return eN(e).startsWith("pre");
  }
  function ex(e) {
    return Q(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
  }
  function ev(e) {
    return "element" === e.type && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay);
  }
  function eT(e) {
    var t;
    var n;
    return eE(e) || e.prev && (eE(t = e.prev) || "element" === t.type && "br" === t.fullName || eS(n = t) && eC(n)) || eS(e) && eC(e);
  }
  function eS(e) {
    return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
  }
  function eC(e) {
    return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
  }
  function eE(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "comment":
      case "directive":
        return !0;
      case "element":
        return ["script", "select"].includes(e.name);
    }
    return !1;
  }
  function ew(e) {
    return e.lastChild ? ew(e.lastChild) : e;
  }
  function eA(e) {
    if (e) switch (e) {
      case "module":
      case "text/javascript":
      case "text/babel":
      case "application/javascript":
        return "babel";
      case "application/x-typescript":
        return "typescript";
      case "text/markdown":
        return "markdown";
      case "text/html":
        return "html";
      case "text/x-handlebars-template":
        return "glimmer";
      default:
        if (e.endsWith("json") || e.endsWith("importmap") || "speculationrules" === e) return "json";
    }
  }
  function ek(e, t) {
    return function (e, t) {
      let {
        name,
        attrMap
      } = e;
      if ("script" !== name || Object.prototype.hasOwnProperty.call(attrMap, "src")) return;
      let {
        type,
        lang
      } = e.attrMap;
      return lang || type ? el(t, {
        language: lang
      }) ?? eA(type) : "babel";
    }(e, t) ?? function (e, t) {
      if ("style" !== e.name) return;
      let {
        lang
      } = e.attrMap;
      return lang ? el(t, {
        language: lang
      }) : "css";
    }(e, t) ?? function (e, t) {
      if (!eR(e, t)) return;
      let {
        attrMap
      } = e;
      if (Object.prototype.hasOwnProperty.call(attrMap, "src")) return;
      let {
        type,
        lang
      } = attrMap;
      return el(t, {
        language: lang
      }) ?? eA(type);
    }(e, t);
  }
  function eF(e) {
    return "block" === e || "list-item" === e || e.startsWith("table");
  }
  function eP(e) {
    return eN(e).startsWith("pre");
  }
  function eN(e) {
    return "element" === e.type && (!e.namespace || ep(e)) && ec[e.name] || "normal";
  }
  function eI(e, t = function (e) {
    let t = Number.POSITIVE_INFINITY;
    for (let n of e.split(`
`)) {
      if (0 === n.length) continue;
      let e = X.getLeadingWhitespaceCount(n);
      if (0 === e) return 0;
      n.length !== e && e < t && (t = e);
    }
    return t === Number.POSITIVE_INFINITY ? 0 : t;
  }(e)) {
    return 0 === t ? e : e.split(`
`).map(e => e.slice(t)).join(`
`);
  }
  function eO(e) {
    return p(!1, p(!1, e, "&apos;", "'"), "&quot;", '"');
  }
  function eB(e) {
    return eO(e.value);
  }
  var ej = new Set(["template", "style", "script"]);
  function eM(e, t) {
    return eL(e, t) && !ej.has(e.fullName);
  }
  function eL(e, t) {
    return "vue" === t.parser && "element" === e.type && "root" === e.parent.type && "html" !== e.fullName.toLowerCase();
  }
  function eR(e, t) {
    return eL(e, t) && (eM(e, t) || e.attrMap.lang && "html" !== e.attrMap.lang);
  }
  function eJ(e, t = e.value) {
    return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? V(t) : V(eI(em(t)), q) : z(R, X.split(t));
  }
  function eq(e, t) {
    return eL(e, t) && "script" === e.name;
  }
  var eU = /{{(.+?)}}/s;
  async function ez(e, t) {
    let n = [];
    for (let [r, i] of e.split(eU).entries()) if (r % 2 == 0) n.push(V(i));else try {
      n.push(B(["{{", I([R, await ea(i, t, {
        parser: "__ng_interpolation",
        __isInHtmlInterpolation: !0,
        trailingComma: "none"
      })]), R, "}}"]));
    } catch {
      n.push("{{", V(i), "}}");
    }
    return n;
  }
  function eK({
    parser: e
  }) {
    return (t, n, r) => ea(eB(r.node), t, {
      parser: e,
      trailingComma: "none"
    }, ei);
  }
  var eW = eK({
    parser: "__ng_action"
  });
  var eV = eK({
    parser: "__ng_binding"
  });
  var e$ = eK({
    parser: "__ng_directive"
  });
  var eH = function (e, t) {
    if ("angular" !== t.parser) return;
    let {
      node
    } = e;
    let r = node.fullName;
    if (r.startsWith("(") && r.endsWith(")") || r.startsWith("on-")) return eW;
    if (r.startsWith("[") && r.endsWith("]") || /^bind(?:on)?-/.test(r) || /^ng-(?:if|show|hide|class|style)$/.test(r)) return eV;
    if (r.startsWith("*")) return e$;
    let i = eB(node);
    return /^i18n(?:-.+)?$/.test(r) ? () => er(j(eJ(node, i.trim())), !i.includes("@@")) : eU.test(i) ? e => ez(i, e) : void 0;
  };
  var eG = function (e, t) {
    let {
      node
    } = e;
    let r = eB(node);
    if ("class" === node.fullName && !t.parentParser && !r.includes("{{")) return () => r.trim().split(/\s+/).join(" ");
  };
  function eX(e) {
    return "	" === e || e === `
` || "\f" === e || "\r" === e || " " === e;
  }
  var eY = /^[ \t\n\r\u000c]+/;
  var eQ = /^[, \t\n\r\u000c]+/;
  var eZ = /^[^ \t\n\r\u000c]+/;
  var e0 = /[,]+$/;
  var e1 = /^\d+$/;
  var e2 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
  var e3 = function (e) {
    let t = e.length;
    let n;
    let r;
    let i;
    let a;
    let o;
    let s = 0;
    let _;
    function l(t) {
      let n;
      let r = t.exec(e.substring(s));
      if (r) {
        [n] = r;
        s += n.length;
        return n;
      }
    }
    let u = [];
    for (;;) {
      if (l(eQ), s >= t) {
        if (0 === u.length) throw Error("Must contain one or more image candidate strings.");
        return u;
      }
      _ = s;
      n = l(eZ);
      r = [];
      "," === n.slice(-1) ? (n = n.replace(e0, ""), c()) : function () {
        for (l(eY), i = "", a = "in descriptor";;) {
          if (o = e.charAt(s), "in descriptor" === a) {
            if (eX(o)) i && (r.push(i), i = "", a = "after descriptor");else if ("," === o) {
              s += 1;
              i && r.push(i);
              c();
              return;
            } else if ("(" === o) {
              i += o;
              a = "in parens";
            } else if ("" === o) {
              i && r.push(i);
              c();
              return;
            } else i += o;
          } else if ("in parens" === a) {
            if (")" === o) {
              i += o;
              a = "in descriptor";
            } else if ("" === o) {
              r.push(i);
              c();
              return;
            } else i += o;
          } else if ("after descriptor" === a && !eX(o)) {
            if ("" === o) {
              c();
              return;
            }
            a = "in descriptor";
            s -= 1;
          }
          s += 1;
        }
      }();
    }
    function c() {
      let t = !1;
      let i;
      let a;
      let o;
      let s;
      let l = {};
      let c;
      let p;
      let d;
      let m;
      let f;
      for (s = 0; s < r.length; s++) {
        p = (c = r[s])[c.length - 1];
        m = parseInt(d = c.substring(0, c.length - 1), 10);
        f = parseFloat(d);
        e1.test(d) && "w" === p ? ((i || a) && (t = !0), 0 === m ? t = !0 : i = m) : e2.test(d) && "x" === p ? ((i || a || o) && (t = !0), f < 0 ? t = !0 : a = f) : e1.test(d) && "h" === p ? ((o || a) && (t = !0), 0 === m ? t = !0 : o = m) : t = !0;
      }
      if (t) throw Error(`Invalid srcset descriptor found in "${e}" at "${c}".`);
      l.source = {
        value: n,
        startOffset: _
      };
      i && (l.width = {
        value: i
      });
      a && (l.density = {
        value: a
      });
      o && (l.height = {
        value: o
      });
      u.push(l);
    }
  };
  var e6 = {
    width: "w",
    height: "h",
    density: "x"
  };
  var e4 = Object.keys(e6);
  var e8 = function (e) {
    if ("srcset" === e.node.fullName && ("img" === e.parent.fullName || "source" === e.parent.fullName)) return () => function (e) {
      let t = e3(e);
      let n = e4.filter(e => t.some(t => Object.prototype.hasOwnProperty.call(t, e)));
      if (n.length > 1) throw Error("Mixed descriptor in srcset is not supported");
      let [r] = n;
      let i = e6[r];
      let a = t.map(e => e.source.value);
      let o = Math.max(...a.map(e => e.length));
      let s = t.map(e => e[r] ? String(e[r].value) : "");
      let _ = s.map(e => {
        let t = e.indexOf(".");
        return -1 === t ? e.length : t;
      });
      let l = Math.max(..._);
      return er(z([",", R], a.map((e, t) => {
        let n = [e];
        let r = s[t];
        if (r) {
          let a = o - e.length + 1;
          let s = l - _[t];
          let u = " ".repeat(a + s);
          n.push(M(u, " "), r + i);
        }
        return n;
      })));
    }(eB(e.node));
  };
  function e5(e, t) {
    let {
      node
    } = e;
    let r = eB(e.node).trim();
    if ("style" === node.fullName && !t.parentParser && !r.includes("{{")) return async e => er(await e(r, {
      parser: "css",
      __isHTMLStyleAttribute: !0
    }));
  }
  var e7 = new WeakMap();
  var e9 = function (e, t) {
    let {
      root
    } = e;
    e7.has(root) || e7.set(root, root.children.some(e => eq(e, t) && ["ts", "typescript"].includes(e.attrMap.lang)));
    return e7.get(root);
  };
  function te(e, t, n) {
    let {
      node
    } = n;
    let i = eB(node);
    return ea(`type T<${i}> = any`, e, {
      parser: "babel-ts",
      __isEmbeddedTypescriptGenericParameters: !0
    }, ei);
  }
  async function tt(e, t, n, r) {
    let {
      left,
      operator,
      right
    } = function (e) {
      let t = /,([^,\]}]*)(?:,([^,\]}]*))?$/;
      let n = e.match(/(.*?)\s+(in|of)\s+(.*)/s);
      if (!n) return;
      let r = {};
      if (r.$$for = n[3].trim(), !r.$$for) return;
      let i = p(!1, n[1].trim(), /^\(|\)$/g, "");
      let a = i.match(t);
      a ? (r.alias = i.replace(t, ""), r.iterator1 = a[1].trim(), a[2] && (r.iterator2 = a[2].trim())) : r.alias = i;
      let o = [r.alias, r.iterator1, r.iterator2];
      if (!o.some((e, t) => !e && (0 === t || o.slice(t + 1).some(Boolean)))) return {
        left: o.filter(Boolean).join(","),
        operator: n[2],
        right: r.$$for
      };
    }(eB(n.node));
    let s = e9(n, r);
    return [B(await ea(`function _(${left}) {}`, e, {
      parser: s ? "babel-ts" : "babel",
      __isVueForBindingLeft: !0
    })), " ", operator, " ", await ea(right, e, {
      parser: s ? "__ts_expression" : "__js_expression"
    })];
  }
  function tn(e, t, {
    parseWithTs: n
  }) {
    return ea(e, t, {
      parser: n ? "__ts_expression" : "__js_expression"
    }, ei);
  }
  var tr = function (e, t) {
    let n;
    if ("vue" !== t.parser) return;
    let {
      node
    } = e;
    let i = node.fullName;
    if ("v-for" === i) return tt;
    if ("generic" === i && eq(node.parent, t)) return te;
    let a = eB(node);
    let o = e9(e, t);
    return "#" === (n = node.fullName).charAt(0) || "slot-scope" === n || "v-slot" === n || n.startsWith("v-slot:") || function (e, t) {
      let n = e.parent;
      if (!eL(n, t)) return !1;
      let r = n.fullName;
      let i = e.fullName;
      return "script" === r && "setup" === i || "style" === r && "vars" === i;
    }(node, t) ? e => function (e, t, {
      parseWithTs: n
    }) {
      return ea(`function _(${e}) {}`, t, {
        parser: n ? "babel-ts" : "babel",
        __isVueBindings: !0
      });
    }(a, e, {
      parseWithTs: o
    }) : i.startsWith("@") || i.startsWith("v-on:") ? e => function (e, t, {
      parseWithTs: n
    }) {
      let r;
      return (r = e.trim(), /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/.test(r) || /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$_a-z][\w$]*])*$/i.test(r)) ? tn(e, t, {
        parseWithTs: n
      }) : ea(e, t, {
        parser: n ? "__vue_ts_event_binding" : "__vue_event_binding"
      }, ei);
    }(a, e, {
      parseWithTs: o
    }) : i.startsWith(":") || i.startsWith("v-bind:") ? e => function (e, t, {
      parseWithTs: n
    }) {
      return ea(e, t, {
        parser: n ? "__vue_ts_expression" : "__vue_expression"
      }, ei);
    }(a, e, {
      parseWithTs: o
    }) : i.startsWith("v-") ? e => tn(a, e, {
      parseWithTs: o
    }) : void 0;
  };
  var ti = function (e, t) {
    let {
      node
    } = e;
    if (node.value) {
      if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(t.originalText.slice(node.valueSpan.start.offset, node.valueSpan.end.offset)) || "lwc" === t.parser && node.value.startsWith("{") && node.value.endsWith("}")) return [node.rawName, "=", node.value];
      for (let n of [e8, e5, eG, tr, eH]) {
        let r = n(e, t);
        if (r) return function (e) {
          return async (t, n, r, i) => {
            let a = await e(t, n, r, i);
            if (a) {
              a = W(a, e => "string" == typeof e ? p(!1, e, '"', "&quot;") : e);
              return [r.node.rawName, '="', B(a), '"'];
            }
          };
        }(r);
      }
    }
  };
  var ta = new Proxy(() => {}, {
    get: () => ta
  });
  var to = function (e) {
    return Array.isArray(e) && e.length > 0;
  };
  function ts(e) {
    return e.sourceSpan.start.offset;
  }
  function t_(e) {
    return e.sourceSpan.end.offset;
  }
  function tl(e, t) {
    return [e.isSelfClosing ? "" : e.lastChild && ty(e.lastChild) ? "" : [th(e) ? td(e.lastChild, t) : "", tp(e, t)], tu(e, t)];
  }
  function tu(e, t) {
    return (e.next ? tf(e.next) : th(e.parent)) ? "" : [td(e, t), tc(e, t)];
  }
  function tc(e, t) {
    return ty(e) ? tp(e.parent, t) : tg(e) ? tT(e.next) : "";
  }
  function tp(e, t) {
    if (ta(!e.isSelfClosing), tm(e, t)) return "";
    switch (e.type) {
      case "ieConditionalComment":
        return "<!";
      case "element":
        if (e.hasHtmComponentClosingTag) return "<//";
      default:
        return `</${e.rawName}`;
    }
  }
  function td(e, t) {
    if (tm(e, t)) return "";
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalEndComment":
        return "[endif]--\x3e";
      case "ieConditionalStartComment":
        return "]>\x3c!--\x3e";
      case "interpolation":
        return "}}";
      case "angularIcuExpression":
        return "}";
      case "element":
        if (e.isSelfClosing) return "/>";
      default:
        return ">";
    }
  }
  function tm(e, t) {
    return !e.isSelfClosing && !e.endSourceSpan && (ey(e) || eh(e.parent, t));
  }
  function tf(e) {
    return e.prev && "docType" !== e.prev.type && "angularControlFlowBlock" !== e.type && !eg(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }
  function th(e) {
    var t;
    return (null == (t = e.lastChild) ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !eg(ew(e.lastChild)) && !eP(e);
  }
  function ty(e) {
    return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && eg(ew(e));
  }
  function tg(e) {
    return e.next && !eg(e.next) && eg(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
  }
  function tb(e) {
    return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
  }
  function tD(e, t, n) {
    let {
      node
    } = e;
    return [tx(node, t), function (e, t, n) {
      var r;
      let i;
      let {
        node: _node
      } = e;
      if (!to(_node.attrs)) return _node.isSelfClosing ? " " : "";
      let o = (null == (r = _node.prev) ? void 0 : r.type) === "comment" && !!(i = _node.prev.value.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s)) && (!i[1] || i[1].split(/\s+/));
      let s = "boolean" == typeof o ? () => o : Array.isArray(o) ? e => o.includes(e.rawName) : () => !1;
      let _ = e.map(({
        node: e
      }) => s(e) ? V(t.originalText.slice(ts(e), t_(e))) : n(), "attrs");
      let l = "element" === _node.type && "script" === _node.fullName && 1 === _node.attrs.length && "src" === _node.attrs[0].fullName && 0 === _node.children.length;
      let u = t.singleAttributePerLine && _node.attrs.length > 1 && !eL(_node, t) ? q : R;
      let c = [I([l ? " " : R, z(u, _)])];
      _node.firstChild && tb(_node.firstChild) || _node.isSelfClosing && th(_node.parent) || l ? c.push(_node.isSelfClosing ? " " : "") : c.push(t.bracketSameLine ? _node.isSelfClosing ? " " : "" : _node.isSelfClosing ? R : J);
      return c;
    }(e, t, n), node.isSelfClosing ? "" : node.firstChild && tb(node.firstChild) ? "" : tS(node)];
  }
  function tx(e, t) {
    return e.prev && tg(e.prev) ? "" : [tv(e, t), tT(e)];
  }
  function tv(e, t) {
    return tb(e) ? tS(e.parent) : tf(e) ? td(e.prev, t) : "";
  }
  function tT(e) {
    switch (e.type) {
      case "ieConditionalComment":
      case "ieConditionalStartComment":
        return `<!--[if ${e.condition}`;
      case "ieConditionalEndComment":
        return "\x3c!--<!";
      case "interpolation":
        return "{{";
      case "docType":
        return "html" === e.value ? "<!doctype" : "<!DOCTYPE";
      case "angularIcuExpression":
        return "{";
      case "element":
        if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
      default:
        return `<${e.rawName}`;
    }
  }
  function tS(e) {
    switch (ta(!e.isSelfClosing), e.type) {
      case "ieConditionalComment":
        return "]>";
      case "element":
        if (e.condition) return ">\x3c!--<![endif]--\x3e";
      default:
        return ">";
    }
  }
  var tC = function (e, t) {
    if (!e.endSourceSpan) return "";
    let n = e.startSourceSpan.end.offset;
    e.firstChild && tb(e.firstChild) && (n -= tS(e).length);
    let r = e.endSourceSpan.start.offset;
    e.lastChild && ty(e.lastChild) ? r += tp(e, t).length : th(e) && (r -= td(e.lastChild, t).length);
    return t.originalText.slice(n, r);
  };
  var tE = new Set(["if", "else if", "for", "switch", "case"]);
  var tw = null;
  function tA(e) {
    if (null !== tw && (tw.property, 1)) {
      let e = tw;
      tw = tA.prototype = null;
      return e;
    }
    tw = tA.prototype = e ?? Object.create(null);
    return new tA();
  }
  for (let e = 0; e <= 10; e++) tA();
  var tk = function (e, t = "type") {
    tA(e);
    return function (n) {
      let r = n[t];
      let i = e[r];
      if (!Array.isArray(i)) throw Object.assign(Error(`Missing visitor keys for '${r}'.`), {
        node: n
      });
      return i;
    };
  }({
    "front-matter": [],
    root: ["children"],
    element: ["attrs", "children"],
    ieConditionalComment: ["children"],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ["children"],
    text: ["children"],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: ["children", "parameters"],
    angularControlFlowBlockParameters: ["children"],
    angularControlFlowBlockParameter: [],
    angularIcuExpression: ["cases"],
    angularIcuCase: ["expression"]
  });
  function tF(e) {
    return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e);
  }
  var tP = new Map([["if", new Set(["else if", "else"])], ["else if", new Set(["else if", "else"])], ["for", new Set(["empty"])], ["defer", new Set(["placeholder", "error", "loading"])], ["placeholder", new Set(["placeholder", "error", "loading"])], ["error", new Set(["placeholder", "error", "loading"])], ["loading", new Set(["placeholder", "error", "loading"])]]);
  function tN(e, t, n) {
    let r = e.node;
    if (ey(r)) {
      let e = function e(t) {
        let n = t_(t);
        return "element" === t.type && !t.endSourceSpan && to(t.children) ? Math.max(n, e(K(!1, t.children, -1))) : n;
      }(r);
      return [tv(r, t), V(X.trimEnd(t.originalText.slice(ts(r) + (r.prev && tg(r.prev) ? tT(r).length : 0), e - (r.next && tf(r.next) ? td(r, t).length : 0)))), tc(r, t)];
    }
    return n();
  }
  function tI(e, t) {
    return eg(e) && eg(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? eT(t) ? q : R : "" : eT(t) ? q : J : tg(e) && (ey(t) || t.firstChild || t.isSelfClosing || "element" === t.type && t.attrs.length > 0) || "element" === e.type && e.isSelfClosing && tf(t) ? "" : !t.isLeadingSpaceSensitive || eT(t) || tf(t) && e.lastChild && ty(e.lastChild) && e.lastChild.lastChild && ty(e.lastChild.lastChild) ? q : t.hasLeadingSpaces ? R : J;
  }
  function tO(e, t, n) {
    let {
      node
    } = e;
    if (ev(node)) return [L, ...e.map(e => {
      let r = e.node;
      let i = r.prev ? tI(r.prev, r) : "";
      return [i ? [i, ex(r.prev) ? q : ""] : "", tN(e, t, n)];
    }, "children")];
    let i = node.children.map(() => Symbol(""));
    return e.map((e, r) => {
      let a = e.node;
      if (eg(a)) {
        if (a.prev && eg(a.prev)) {
          let r = tI(a.prev, a);
          if (r) return ex(a.prev) ? [q, q, tN(e, t, n)] : [r, tN(e, t, n)];
        }
        return tN(e, t, n);
      }
      let o = [];
      let s = [];
      let _ = [];
      let l = [];
      let u = a.prev ? tI(a.prev, a) : "";
      let c = a.next ? tI(a, a.next) : "";
      u && (ex(a.prev) ? o.push(q, q) : u === q ? o.push(q) : eg(a.prev) ? s.push(u) : s.push(M("", J, {
        groupId: i[r - 1]
      })));
      c && (ex(a) ? eg(a.next) && l.push(q, q) : c === q ? eg(a.next) && l.push(q) : _.push(c));
      return [...o, B([...s, B([tN(e, t, n), ..._], {
        id: i[r]
      })]), ...l];
    }, "children");
  }
  function tB(e) {
    var t;
    var n;
    return !((null == (t = e.next) ? void 0 : t.type) === "angularControlFlowBlock" && null != (n = tP.get(e.name)) && n.has(e.next.name));
  }
  function tj(e) {
    return e >= 9 && e <= 32 || 160 == e;
  }
  function tM(e) {
    return 48 <= e && e <= 57;
  }
  function tL(e) {
    return e >= 97 && e <= 122 || e >= 65 && e <= 90;
  }
  function tR(e) {
    return 10 === e || 13 === e;
  }
  function tJ(e) {
    return 48 <= e && e <= 55;
  }
  function tq(e) {
    return 39 === e || 34 === e || 96 === e;
  }
  var tU;
  var tz = /-+([a-z0-9])/g;
  var tK = class e {
    constructor(e, t, n, r) {
      this.file = e;
      this.offset = t;
      this.line = n;
      this.col = r;
    }
    toString() {
      return null != this.offset ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(t) {
      let n = this.file.content;
      let r = n.length;
      let i = this.offset;
      let a = this.line;
      let o = this.col;
      for (; i > 0 && t < 0;) if (i--, t++, 10 == n.charCodeAt(i)) {
        a--;
        let e = n.substring(0, i - 1).lastIndexOf("\n");
        o = e > 0 ? i - e : i;
      } else o--;
      for (; i < r && t > 0;) {
        let e = n.charCodeAt(i);
        i++;
        t--;
        10 == e ? (a++, o = 0) : o++;
      }
      return new e(this.file, i, a, o);
    }
    getContext(e, t) {
      let n = this.file.content;
      let r = this.offset;
      if (null != r) {
        r > n.length - 1 && (r = n.length - 1);
        let i = r;
        let a = 0;
        let o = 0;
        for (; a < e && r > 0 && (r--, a++, !(n[r] == `
` && ++o == t)););
        for (a = 0, o = 0; a < e && i < n.length - 1 && (i++, a++, !(n[i] == `
` && ++o == t)););
        return {
          before: n.substring(r, this.offset),
          after: n.substring(this.offset, i + 1)
        };
      }
      return null;
    }
  };
  var tW = class {
    constructor(e, t) {
      this.content = e;
      this.url = t;
    }
  };
  var tV = class {
    constructor(e, t, n = e, r = null) {
      this.start = e;
      this.end = t;
      this.fullStart = n;
      this.details = r;
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  };
  (t7 = tU || (tU = {}))[t7.WARNING = 0] = "WARNING";
  t7[t7.ERROR = 1] = "ERROR";
  var t$ = class {
    constructor(e, t, n = tU.ERROR) {
      this.span = e;
      this.msg = t;
      this.level = n;
    }
    contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e ? `${this.msg} ("${e.before}[${tU[this.level]} ->]${e.after}")` : this.msg;
    }
    toString() {
      let e = this.span.details ? `, ${this.span.details}` : "";
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
    }
  };
  var tH = [function (e) {
    e.walk(e => {
      if ("element" === e.type && e.tagDefinition.ignoreFirstLf && e.children.length > 0 && "text" === e.children[0].type && e.children[0].value[0] === `
`) {
        let t = e.children[0];
        1 === t.value.length ? e.removeChild(t) : t.value = t.value.slice(1);
      }
    });
  }, function (e) {
    let t = e => {
      var t;
      var n;
      return "element" === e.type && (null == (t = e.prev) ? void 0 : t.type) === "ieConditionalStartComment" && e.prev.sourceSpan.end.offset === e.startSourceSpan.start.offset && (null == (n = e.firstChild) ? void 0 : n.type) === "ieConditionalEndComment" && e.firstChild.sourceSpan.start.offset === e.startSourceSpan.end.offset;
    };
    e.walk(e => {
      if (e.children) for (let n = 0; n < e.children.length; n++) {
        let r = e.children[n];
        if (!t(r)) continue;
        let i = r.prev;
        let a = r.firstChild;
        e.removeChild(i);
        n--;
        let o = new tV(i.sourceSpan.start, a.sourceSpan.end);
        let s = new tV(o.start, r.sourceSpan.end);
        r.condition = i.condition;
        r.sourceSpan = s;
        r.startSourceSpan = o;
        r.removeChild(a);
      }
    });
  }, function (e) {
    return function (e, t, n) {
      e.walk(e => {
        if (e.children) for (let r = 0; r < e.children.length; r++) {
          let i = e.children[r];
          if ("text" !== i.type && !t(i)) continue;
          "text" !== i.type && (i.type = "text", i.value = n(i));
          let a = i.prev;
          !a || "text" !== a.type || (a.value += i.value, a.sourceSpan = new tV(a.sourceSpan.start, i.sourceSpan.end), e.removeChild(i), r--);
        }
      });
    }(e, e => "cdata" === e.type, e => `<![CDATA[${e.value}]]>`);
  }, function (e, t) {
    if ("html" === t.parser) return;
    let n = /{{(.+?)}}/s;
    e.walk(e => {
      if (e.children && !eb(e)) for (let t of e.children) {
        if ("text" !== t.type) continue;
        let r = t.sourceSpan.start;
        let i = null;
        let a = t.value.split(n);
        for (let n = 0; n < a.length; n++, r = i) {
          let o = a[n];
          if (n % 2 == 0) {
            i = r.moveBy(o.length);
            o.length > 0 && e.insertChildBefore(t, {
              type: "text",
              value: o,
              sourceSpan: new tV(r, i)
            });
            continue;
          }
          i = r.moveBy(o.length + 4);
          e.insertChildBefore(t, {
            type: "interpolation",
            sourceSpan: new tV(r, i),
            children: 0 === o.length ? [] : [{
              type: "text",
              value: o,
              sourceSpan: new tV(r.moveBy(2), i.moveBy(-2))
            }]
          });
        }
        e.removeChild(t);
      }
    });
  }, function (e) {
    e.walk(e => {
      if (!e.children) return;
      if (0 === e.children.length || 1 === e.children.length && "text" === e.children[0].type && 0 === X.trim(e.children[0].value).length) {
        e.hasDanglingSpaces = e.children.length > 0;
        e.children = [];
        return;
      }
      let t = eb(e) || "interpolation" === e.type || eD(e);
      let n = eD(e);
      if (!t) for (let t = 0; t < e.children.length; t++) {
        let n = e.children[t];
        if ("text" !== n.type) continue;
        let {
          leadingWhitespace,
          text,
          trailingWhitespace
        } = ef(n.value);
        let o = n.prev;
        let s = n.next;
        text ? (n.value = text, n.sourceSpan = new tV(n.sourceSpan.start.moveBy(leadingWhitespace.length), n.sourceSpan.end.moveBy(-trailingWhitespace.length)), leadingWhitespace && (o && (o.hasTrailingSpaces = !0), n.hasLeadingSpaces = !0), trailingWhitespace && (n.hasTrailingSpaces = !0, s && (s.hasLeadingSpaces = !0))) : (e.removeChild(n), t--, (leadingWhitespace || trailingWhitespace) && (o && (o.hasTrailingSpaces = !0), s && (s.hasLeadingSpaces = !0)));
      }
      e.isWhitespaceSensitive = t;
      e.isIndentationSensitive = n;
    });
  }, function (e, t) {
    e.walk(e => {
      e.cssDisplay = function (e, t) {
        var n;
        if (eL(e, t)) return "block";
        if ((null == (n = e.prev) ? void 0 : n.type) === "comment") {
          let t = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
          if (t) return t[1];
        }
        let r = !1;
        if ("element" === e.type && "svg" === e.namespace) {
          if (!function (e, t) {
            let n = e;
            for (; n;) {
              if (t(n)) return !0;
              n = n.parent;
            }
            return !1;
          }(e, e => "svg:foreignObject" === e.fullName)) return "svg" === e.name ? "inline-block" : "block";
          r = !0;
        }
        switch (t.htmlWhitespaceSensitivity) {
          case "strict":
            return "inline";
          case "ignore":
            return "block";
          default:
            return "element" === e.type && (!e.namespace || r || ep(e)) && eu[e.name] || "inline";
        }
      }(e, t);
    });
  }, function (e) {
    e.walk(e => {
      e.isSelfClosing = !e.children || "element" === e.type && (e.tagDefinition.isVoid || e.endSourceSpan && e.startSourceSpan.start === e.endSourceSpan.start && e.startSourceSpan.end === e.endSourceSpan.end);
    });
  }, function (e, t) {
    e.walk(e => {
      "element" === e.type && (e.hasHtmComponentClosingTag = e.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t.originalText.slice(e.endSourceSpan.start.offset, e.endSourceSpan.end.offset)));
    });
  }, function (e, t) {
    e.walk(e => {
      let {
        children
      } = e;
      if (children) {
        var r;
        var i;
        if (0 === children.length) {
          e.isDanglingSpaceSensitive = !eF(r = e.cssDisplay) && "inline-block" !== r && !eb(e);
          return;
        }
        for (let e of children) {
          e.isLeadingSpaceSensitive = function (e, t) {
            var n;
            var r;
            let i = function () {
              var n;
              return !Q(e) && "angularControlFlowBlock" !== e.type && (("text" === e.type || "interpolation" === e.type) && !!e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type) || !!e.parent && "none" !== e.parent.cssDisplay && (!!eP(e.parent) || !(!e.prev && ("root" === e.parent.type || eP(e) && e.parent || eb(e.parent) || eM(e.parent, t) || !(!eF(n = e.parent.cssDisplay) && "inline-block" !== n)) || e.prev && eF(e.prev.cssDisplay))));
            }();
            return i && !e.prev && null != (r = null == (n = e.parent) ? void 0 : n.tagDefinition) && r.ignoreFirstLf ? "interpolation" === e.type : i;
          }(e, t);
          e.isTrailingSpaceSensitive = !Q(e) && "angularControlFlowBlock" !== e.type && (("text" === e.type || "interpolation" === e.type) && !!e.next && ("text" === e.next.type || "interpolation" === e.next.type) || !!e.parent && "none" !== e.parent.cssDisplay && (!!eP(e.parent) || !(!e.next && ("root" === e.parent.type || eP(e) && e.parent || eb(e.parent) || eM(e.parent, t) || !(!eF(i = e.parent.cssDisplay) && "inline-block" !== i)) || e.next && eF(e.next.cssDisplay))));
        }
        for (let e = 0; e < children.length; e++) {
          let t = children[e];
          t.isLeadingSpaceSensitive = (0 === e || t.prev.isTrailingSpaceSensitive) && t.isLeadingSpaceSensitive;
          t.isTrailingSpaceSensitive = (e === children.length - 1 || t.next.isLeadingSpaceSensitive) && t.isTrailingSpaceSensitive;
        }
      }
    });
  }, function (e) {
    let t = e => {
      var t;
      var n;
      return "element" === e.type && 0 === e.attrs.length && 1 === e.children.length && "text" === e.firstChild.type && !X.hasWhitespaceCharacter(e.children[0].value) && !e.firstChild.hasLeadingSpaces && !e.firstChild.hasTrailingSpaces && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces && (null == (t = e.prev) ? void 0 : t.type) === "text" && (null == (n = e.next) ? void 0 : n.type) === "text";
    };
    e.walk(e => {
      if (e.children) for (let n = 0; n < e.children.length; n++) {
        let r = e.children[n];
        if (!t(r)) continue;
        let i = r.prev;
        let a = r.next;
        i.value += `<${r.rawName}>` + r.firstChild.value + `</${r.rawName}>` + a.value;
        i.sourceSpan = new tV(i.sourceSpan.start, a.sourceSpan.end);
        i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive;
        i.hasTrailingSpaces = a.hasTrailingSpaces;
        e.removeChild(r);
        n--;
        e.removeChild(a);
      }
    });
  }];
  var tG = [{
    linguistLanguageId: 146,
    name: "Angular",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [".component.html"],
    parsers: ["angular"],
    vscodeLanguageIds: ["html"],
    filenames: []
  }, {
    linguistLanguageId: 146,
    name: "HTML",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"],
    parsers: ["html"],
    vscodeLanguageIds: ["html"]
  }, {
    linguistLanguageId: 146,
    name: "Lightning Web Components",
    type: "markup",
    tmScope: "text.html.basic",
    aceMode: "html",
    codemirrorMode: "htmlmixed",
    codemirrorMimeType: "text/html",
    color: "#e34c26",
    aliases: ["xhtml"],
    extensions: [],
    parsers: ["lwc"],
    vscodeLanguageIds: ["html"],
    filenames: []
  }, {
    linguistLanguageId: 391,
    name: "Vue",
    type: "markup",
    color: "#41b883",
    extensions: [".vue"],
    tmScope: "text.html.vue",
    aceMode: "html",
    parsers: ["vue"],
    vscodeLanguageIds: ["vue"]
  }];
  var tX = "HTML";
  var tY = {
    bracketSameLine: {
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Put > of opening tags on the last line instead of on a new line."
    },
    htmlWhitespaceSensitivity: {
      category: tX,
      type: "choice",
      default: "css",
      description: "How to handle whitespaces in HTML.",
      choices: [{
        value: "css",
        description: "Respect the default value of CSS display property."
      }, {
        value: "strict",
        description: "Whitespaces are considered sensitive."
      }, {
        value: "ignore",
        description: "Whitespaces are considered insensitive."
      }]
    },
    singleAttributePerLine: {
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Enforce single attribute per line in HTML, Vue and JSX."
    },
    vueIndentScriptAndStyle: {
      category: tX,
      type: "boolean",
      default: !1,
      description: "Indent script and style tags in Vue files."
    }
  };
  var tQ = {};
  o(tQ, {
    angular: () => ru,
    html: () => rl,
    lwc: () => rp,
    vue: () => rc
  });
  RegExp("(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=([\"']?)([^\\]\"']*)\\5)?\\])|(\\))|(\\s*,\\s*)", "g");
  (t9 = ni || (ni = {}))[t9.Emulated = 0] = "Emulated";
  t9[t9.None = 2] = "None";
  t9[t9.ShadowDom = 3] = "ShadowDom";
  (ne = na || (na = {}))[ne.OnPush = 0] = "OnPush";
  ne[ne.Default = 1] = "Default";
  var tZ = {
    name: "custom-elements"
  };
  var t0 = "no-errors-schema";
  function t1(e) {
    if (":" != e[0]) return [null, e];
    let t = e.indexOf(":", 1);
    if (-1 === t) throw Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [e.slice(1, t), e.slice(t + 1)];
  }
  function t2(e) {
    return "ng-container" === t1(e)[1];
  }
  function t3(e) {
    return "ng-content" === t1(e)[1];
  }
  function t6(e) {
    return null === e ? null : t1(e)[0];
  }
  function t4(e, t) {
    return e ? `:${e}:${t}` : t;
  }
  function t8() {
    nl || (nl = {}, t5(no.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), t5(no.STYLE, ["*|style"]), t5(no.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), t5(no.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"]));
    return nl;
  }
  function t5(e, t) {
    for (let n of t) nl[n.toLowerCase()] = e;
  }
  (nt = no || (no = {}))[nt.NONE = 0] = "NONE";
  nt[nt.HTML = 1] = "HTML";
  nt[nt.STYLE = 2] = "STYLE";
  nt[nt.SCRIPT = 3] = "SCRIPT";
  nt[nt.URL = 4] = "URL";
  nt[nt.RESOURCE_URL = 5] = "RESOURCE_URL";
  (nn = ns || (ns = {}))[nn.Error = 0] = "Error";
  nn[nn.Warning = 1] = "Warning";
  nn[nn.Ignore = 2] = "Ignore";
  (nr = n_ || (n_ = {}))[nr.RAW_TEXT = 0] = "RAW_TEXT";
  nr[nr.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT";
  nr[nr.PARSABLE_DATA = 2] = "PARSABLE_DATA";
  var t7;
  var t9;
  var ne;
  var nt;
  var nn;
  var nr;
  var ni;
  var na;
  var no;
  var ns;
  var n_;
  var nl;
  var nu;
  var nc;
  var np = class {};
  var nd = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|"];
  var nm = new Map(Object.entries({
    class: "className",
    for: "htmlFor",
    formaction: "formAction",
    innerHtml: "innerHTML",
    readonly: "readOnly",
    tabindex: "tabIndex"
  }));
  var nf = Array.from(nm).reduce((e, [t, n]) => (e.set(t, n), e), new Map());
  var nh = class extends np {
    constructor() {
      super();
      this._schema = new Map();
      this._eventSchema = new Map();
      nd.forEach(e => {
        let t = new Map();
        let n = new Set();
        let [r, i] = e.split("|");
        let a = i.split(",");
        let [o, s] = r.split("^");
        o.split(",").forEach(e => {
          this._schema.set(e.toLowerCase(), t);
          this._eventSchema.set(e.toLowerCase(), n);
        });
        let _ = s && this._schema.get(s.toLowerCase());
        if (_) {
          for (let [e, n] of _) t.set(e, n);
          for (let e of this._eventSchema.get(s.toLowerCase())) n.add(e);
        }
        a.forEach(e => {
          if (e.length > 0) switch (e[0]) {
            case "*":
              n.add(e.substring(1));
              break;
            case "!":
              t.set(e.substring(1), "boolean");
              break;
            case "#":
              t.set(e.substring(1), "number");
              break;
            case "%":
              t.set(e.substring(1), "object");
              break;
            default:
              t.set(e, "string");
          }
        });
      });
    }
    hasProperty(e, t, n) {
      if (n.some(e => e.name === t0)) return !0;
      if (e.indexOf("-") > -1) {
        if (t2(e) || t3(e)) return !1;
        if (n.some(e => e.name === tZ.name)) return !0;
      }
      return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
    }
    hasElement(e, t) {
      return !!(t.some(e => e.name === t0) || e.indexOf("-") > -1 && (t2(e) || t3(e) || t.some(e => e.name === tZ.name))) || this._schema.has(e.toLowerCase());
    }
    securityContext(e, t, n) {
      n && (t = this.getMappedPropName(t));
      e = e.toLowerCase();
      t = t.toLowerCase();
      let r = t8()[e + "|" + t];
      return r || (r = t8()["*|" + t]) || no.NONE;
    }
    getMappedPropName(e) {
      return nm.get(e) ?? e;
    }
    getDefaultComponentElementName() {
      return "ng-component";
    }
    validateProperty(e) {
      return e.toLowerCase().startsWith("on") ? {
        error: !0,
        msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.`
      } : {
        error: !1
      };
    }
    validateAttribute(e) {
      return e.toLowerCase().startsWith("on") ? {
        error: !0,
        msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...`
      } : {
        error: !1
      };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
      return Array.from((this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).keys()).map(e => nf.get(e) ?? e);
    }
    allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
      return e.replace(tz, (...e) => e[1].toUpperCase());
    }
    normalizeAnimationStyleValue(e, t, n) {
      let r = "";
      let i = n.toString().trim();
      let a = null;
      if (function (e) {
        switch (e) {
          case "width":
          case "height":
          case "minWidth":
          case "minHeight":
          case "maxWidth":
          case "maxHeight":
          case "left":
          case "top":
          case "bottom":
          case "right":
          case "fontSize":
          case "outlineWidth":
          case "outlineOffset":
          case "paddingTop":
          case "paddingLeft":
          case "paddingBottom":
          case "paddingRight":
          case "marginTop":
          case "marginLeft":
          case "marginBottom":
          case "marginRight":
          case "borderRadius":
          case "borderWidth":
          case "borderTopWidth":
          case "borderLeftWidth":
          case "borderRightWidth":
          case "borderBottomWidth":
          case "textIndent":
            return !0;
          default:
            return !1;
        }
      }(e) && 0 !== n && "0" !== n) {
        if ("number" == typeof n) r = "px";else {
          let e = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
          e && 0 == e[1].length && (a = `Please provide a CSS unit value for ${t}:${n}`);
        }
      }
      return {
        error: a,
        value: i + r
      };
    }
  };
  var ny = class {
    constructor({
      closedByChildren: e,
      implicitNamespacePrefix: t,
      contentType: n = n_.PARSABLE_DATA,
      closedByParent: r = !1,
      isVoid: i = !1,
      ignoreFirstLf: a = !1,
      preventNamespaceInheritance: o = !1,
      canSelfClose: s = !1
    } = {}) {
      this.closedByChildren = {};
      this.closedByParent = !1;
      e && e.length > 0 && e.forEach(e => this.closedByChildren[e] = !0);
      this.isVoid = i;
      this.closedByParent = r || i;
      this.implicitNamespacePrefix = t || null;
      this.contentType = n;
      this.ignoreFirstLf = a;
      this.preventNamespaceInheritance = o;
      this.canSelfClose = s ?? i;
    }
    isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
      return "object" == typeof this.contentType ? (void 0 === e ? void 0 : this.contentType[e]) ?? this.contentType.$$default : this.contentType;
    }
  };
  function ng(e) {
    nc || (nu = new ny({
      canSelfClose: !0
    }), nc = Object.assign(Object.create(null), {
      base: new ny({
        isVoid: !0
      }),
      meta: new ny({
        isVoid: !0
      }),
      area: new ny({
        isVoid: !0
      }),
      embed: new ny({
        isVoid: !0
      }),
      link: new ny({
        isVoid: !0
      }),
      img: new ny({
        isVoid: !0
      }),
      input: new ny({
        isVoid: !0
      }),
      param: new ny({
        isVoid: !0
      }),
      hr: new ny({
        isVoid: !0
      }),
      br: new ny({
        isVoid: !0
      }),
      source: new ny({
        isVoid: !0
      }),
      track: new ny({
        isVoid: !0
      }),
      wbr: new ny({
        isVoid: !0
      }),
      p: new ny({
        closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"],
        closedByParent: !0
      }),
      thead: new ny({
        closedByChildren: ["tbody", "tfoot"]
      }),
      tbody: new ny({
        closedByChildren: ["tbody", "tfoot"],
        closedByParent: !0
      }),
      tfoot: new ny({
        closedByChildren: ["tbody"],
        closedByParent: !0
      }),
      tr: new ny({
        closedByChildren: ["tr"],
        closedByParent: !0
      }),
      td: new ny({
        closedByChildren: ["td", "th"],
        closedByParent: !0
      }),
      th: new ny({
        closedByChildren: ["td", "th"],
        closedByParent: !0
      }),
      col: new ny({
        isVoid: !0
      }),
      svg: new ny({
        implicitNamespacePrefix: "svg"
      }),
      foreignObject: new ny({
        implicitNamespacePrefix: "svg",
        preventNamespaceInheritance: !0
      }),
      math: new ny({
        implicitNamespacePrefix: "math"
      }),
      li: new ny({
        closedByChildren: ["li"],
        closedByParent: !0
      }),
      dt: new ny({
        closedByChildren: ["dt", "dd"]
      }),
      dd: new ny({
        closedByChildren: ["dt", "dd"],
        closedByParent: !0
      }),
      rb: new ny({
        closedByChildren: ["rb", "rt", "rtc", "rp"],
        closedByParent: !0
      }),
      rt: new ny({
        closedByChildren: ["rb", "rt", "rtc", "rp"],
        closedByParent: !0
      }),
      rtc: new ny({
        closedByChildren: ["rb", "rtc", "rp"],
        closedByParent: !0
      }),
      rp: new ny({
        closedByChildren: ["rb", "rt", "rtc", "rp"],
        closedByParent: !0
      }),
      optgroup: new ny({
        closedByChildren: ["optgroup"],
        closedByParent: !0
      }),
      option: new ny({
        closedByChildren: ["option", "optgroup"],
        closedByParent: !0
      }),
      pre: new ny({
        ignoreFirstLf: !0
      }),
      listing: new ny({
        ignoreFirstLf: !0
      }),
      style: new ny({
        contentType: n_.RAW_TEXT
      }),
      script: new ny({
        contentType: n_.RAW_TEXT
      }),
      title: new ny({
        contentType: {
          default: n_.ESCAPABLE_RAW_TEXT,
          svg: n_.PARSABLE_DATA
        }
      }),
      textarea: new ny({
        contentType: n_.ESCAPABLE_RAW_TEXT,
        ignoreFirstLf: !0
      })
    }), new nh().allKnownElementNames().forEach(e => {
      nc[e] || null !== t6(e) || (nc[e] = new ny({
        canSelfClose: !1
      }));
    }));
    return nc[e] ?? nu;
  }
  var nb = class {
    constructor(e, t) {
      this.sourceSpan = e;
      this.i18n = t;
    }
  };
  var nD = class extends nb {
    constructor(e, t, n, r) {
      super(t, r);
      this.value = e;
      this.tokens = n;
      this.type = "text";
    }
    visit(e, t) {
      return e.visitText(this, t);
    }
  };
  var nx = class extends nb {
    constructor(e, t, n, r) {
      super(t, r);
      this.value = e;
      this.tokens = n;
      this.type = "cdata";
    }
    visit(e, t) {
      return e.visitCdata(this, t);
    }
  };
  var nv = class extends nb {
    constructor(e, t, n, r, i, a) {
      super(r, a);
      this.switchValue = e;
      this.type = t;
      this.cases = n;
      this.switchValueSourceSpan = i;
    }
    visit(e, t) {
      return e.visitExpansion(this, t);
    }
  };
  var nT = class {
    constructor(e, t, n, r, i) {
      this.value = e;
      this.expression = t;
      this.sourceSpan = n;
      this.valueSourceSpan = r;
      this.expSourceSpan = i;
      this.type = "expansionCase";
    }
    visit(e, t) {
      return e.visitExpansionCase(this, t);
    }
  };
  var nS = class extends nb {
    constructor(e, t, n, r, i, a, o) {
      super(n, o);
      this.name = e;
      this.value = t;
      this.keySpan = r;
      this.valueSpan = i;
      this.valueTokens = a;
      this.type = "attribute";
    }
    visit(e, t) {
      return e.visitAttribute(this, t);
    }
    get nameSpan() {
      return this.keySpan;
    }
  };
  var nC = class extends nb {
    constructor(e, t, n, r, i, a = null, o = null, s) {
      super(r, s);
      this.name = e;
      this.attrs = t;
      this.children = n;
      this.startSourceSpan = i;
      this.endSourceSpan = a;
      this.nameSpan = o;
      this.type = "element";
    }
    visit(e, t) {
      return e.visitElement(this, t);
    }
  };
  var nE = class {
    constructor(e, t) {
      this.value = e;
      this.sourceSpan = t;
      this.type = "comment";
    }
    visit(e, t) {
      return e.visitComment(this, t);
    }
  };
  var nw = class {
    constructor(e, t) {
      this.value = e;
      this.sourceSpan = t;
      this.type = "docType";
    }
    visit(e, t) {
      return e.visitDocType(this, t);
    }
  };
  var nA = class {
    constructor(e, t, n, r, i, a = null) {
      this.name = e;
      this.parameters = t;
      this.children = n;
      this.sourceSpan = r;
      this.startSourceSpan = i;
      this.endSourceSpan = a;
      this.type = "block";
    }
    visit(e, t) {
      return e.visitBlock(this, t);
    }
  };
  var nk = class {
    constructor(e, t) {
      this.expression = e;
      this.sourceSpan = t;
      this.type = "blockParameter";
      this.startSourceSpan = null;
      this.endSourceSpan = null;
    }
    visit(e, t) {
      return e.visitBlockParameter(this, t);
    }
  };
  function nF(e, t, n = null) {
    let r = [];
    let i = e.visit ? t => e.visit(t, n) || t.visit(e, n) : t => t.visit(e, n);
    t.forEach(e => {
      let t = i(e);
      t && r.push(t);
    });
    return r;
  }
  var nP = class {
    constructor() {}
    visitElement(e, t) {
      this.visitChildren(t, t => {
        t(e.attrs);
        t(e.children);
      });
    }
    visitAttribute(e, t) {}
    visitText(e, t) {}
    visitCdata(e, t) {}
    visitComment(e, t) {}
    visitDocType(e, t) {}
    visitExpansion(e, t) {
      return this.visitChildren(t, t => {
        t(e.cases);
      });
    }
    visitExpansionCase(e, t) {}
    visitBlock(e, t) {
      this.visitChildren(t, t => {
        t(e.parameters);
        t(e.children);
      });
    }
    visitBlockParameter(e, t) {}
    visitChildren(e, t) {
      let n = [];
      let r = this;
      t(function (t) {
        t && n.push(nF(r, t, e));
      });
      return Array.prototype.concat.apply([], n);
    }
  };
  var nN = {
    AElig: "\xc6",
    AMP: "&",
    amp: "&",
    Aacute: "\xc1",
    Abreve: "\u0102",
    Acirc: "\xc2",
    Acy: "\u0410",
    Afr: "\u{1D504}",
    Agrave: "\xc0",
    Alpha: "\u0391",
    Amacr: "\u0100",
    And: "\u2A53",
    Aogon: "\u0104",
    Aopf: "\u{1D538}",
    ApplyFunction: "\u2061",
    af: "\u2061",
    Aring: "\xc5",
    angst: "\xc5",
    Ascr: "\u{1D49C}",
    Assign: "\u2254",
    colone: "\u2254",
    coloneq: "\u2254",
    Atilde: "\xc3",
    Auml: "\xc4",
    Backslash: "\u2216",
    setminus: "\u2216",
    setmn: "\u2216",
    smallsetminus: "\u2216",
    ssetmn: "\u2216",
    Barv: "\u2AE7",
    Barwed: "\u2306",
    doublebarwedge: "\u2306",
    Bcy: "\u0411",
    Because: "\u2235",
    becaus: "\u2235",
    because: "\u2235",
    Bernoullis: "\u212C",
    Bscr: "\u212C",
    bernou: "\u212C",
    Beta: "\u0392",
    Bfr: "\u{1D505}",
    Bopf: "\u{1D539}",
    Breve: "\u02D8",
    breve: "\u02D8",
    Bumpeq: "\u224E",
    HumpDownHump: "\u224E",
    bump: "\u224E",
    CHcy: "\u0427",
    COPY: "\xa9",
    copy: "\xa9",
    Cacute: "\u0106",
    Cap: "\u22D2",
    CapitalDifferentialD: "\u2145",
    DD: "\u2145",
    Cayleys: "\u212D",
    Cfr: "\u212D",
    Ccaron: "\u010C",
    Ccedil: "\xc7",
    Ccirc: "\u0108",
    Cconint: "\u2230",
    Cdot: "\u010A",
    Cedilla: "\xb8",
    cedil: "\xb8",
    CenterDot: "\xb7",
    centerdot: "\xb7",
    middot: "\xb7",
    Chi: "\u03A7",
    CircleDot: "\u2299",
    odot: "\u2299",
    CircleMinus: "\u2296",
    ominus: "\u2296",
    CirclePlus: "\u2295",
    oplus: "\u2295",
    CircleTimes: "\u2297",
    otimes: "\u2297",
    ClockwiseContourIntegral: "\u2232",
    cwconint: "\u2232",
    CloseCurlyDoubleQuote: "\u201D",
    rdquo: "\u201D",
    rdquor: "\u201D",
    CloseCurlyQuote: "\u2019",
    rsquo: "\u2019",
    rsquor: "\u2019",
    Colon: "\u2237",
    Proportion: "\u2237",
    Colone: "\u2A74",
    Congruent: "\u2261",
    equiv: "\u2261",
    Conint: "\u222F",
    DoubleContourIntegral: "\u222F",
    ContourIntegral: "\u222E",
    conint: "\u222E",
    oint: "\u222E",
    Copf: "\u2102",
    complexes: "\u2102",
    Coproduct: "\u2210",
    coprod: "\u2210",
    CounterClockwiseContourIntegral: "\u2233",
    awconint: "\u2233",
    Cross: "\u2A2F",
    Cscr: "\u{1D49E}",
    Cup: "\u22D3",
    CupCap: "\u224D",
    asympeq: "\u224D",
    DDotrahd: "\u2911",
    DJcy: "\u0402",
    DScy: "\u0405",
    DZcy: "\u040F",
    Dagger: "\u2021",
    ddagger: "\u2021",
    Darr: "\u21A1",
    Dashv: "\u2AE4",
    DoubleLeftTee: "\u2AE4",
    Dcaron: "\u010E",
    Dcy: "\u0414",
    Del: "\u2207",
    nabla: "\u2207",
    Delta: "\u0394",
    Dfr: "\u{1D507}",
    DiacriticalAcute: "\xb4",
    acute: "\xb4",
    DiacriticalDot: "\u02D9",
    dot: "\u02D9",
    DiacriticalDoubleAcute: "\u02DD",
    dblac: "\u02DD",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "\u02DC",
    tilde: "\u02DC",
    Diamond: "\u22C4",
    diam: "\u22C4",
    diamond: "\u22C4",
    DifferentialD: "\u2146",
    dd: "\u2146",
    Dopf: "\u{1D53B}",
    Dot: "\xa8",
    DoubleDot: "\xa8",
    die: "\xa8",
    uml: "\xa8",
    DotDot: "\u20DC",
    DotEqual: "\u2250",
    doteq: "\u2250",
    esdot: "\u2250",
    DoubleDownArrow: "\u21D3",
    Downarrow: "\u21D3",
    dArr: "\u21D3",
    DoubleLeftArrow: "\u21D0",
    Leftarrow: "\u21D0",
    lArr: "\u21D0",
    DoubleLeftRightArrow: "\u21D4",
    Leftrightarrow: "\u21D4",
    hArr: "\u21D4",
    iff: "\u21D4",
    DoubleLongLeftArrow: "\u27F8",
    Longleftarrow: "\u27F8",
    xlArr: "\u27F8",
    DoubleLongLeftRightArrow: "\u27FA",
    Longleftrightarrow: "\u27FA",
    xhArr: "\u27FA",
    DoubleLongRightArrow: "\u27F9",
    Longrightarrow: "\u27F9",
    xrArr: "\u27F9",
    DoubleRightArrow: "\u21D2",
    Implies: "\u21D2",
    Rightarrow: "\u21D2",
    rArr: "\u21D2",
    DoubleRightTee: "\u22A8",
    vDash: "\u22A8",
    DoubleUpArrow: "\u21D1",
    Uparrow: "\u21D1",
    uArr: "\u21D1",
    DoubleUpDownArrow: "\u21D5",
    Updownarrow: "\u21D5",
    vArr: "\u21D5",
    DoubleVerticalBar: "\u2225",
    par: "\u2225",
    parallel: "\u2225",
    shortparallel: "\u2225",
    spar: "\u2225",
    DownArrow: "\u2193",
    ShortDownArrow: "\u2193",
    darr: "\u2193",
    downarrow: "\u2193",
    DownArrowBar: "\u2913",
    DownArrowUpArrow: "\u21F5",
    duarr: "\u21F5",
    DownBreve: "\u0311",
    DownLeftRightVector: "\u2950",
    DownLeftTeeVector: "\u295E",
    DownLeftVector: "\u21BD",
    leftharpoondown: "\u21BD",
    lhard: "\u21BD",
    DownLeftVectorBar: "\u2956",
    DownRightTeeVector: "\u295F",
    DownRightVector: "\u21C1",
    rhard: "\u21C1",
    rightharpoondown: "\u21C1",
    DownRightVectorBar: "\u2957",
    DownTee: "\u22A4",
    top: "\u22A4",
    DownTeeArrow: "\u21A7",
    mapstodown: "\u21A7",
    Dscr: "\u{1D49F}",
    Dstrok: "\u0110",
    ENG: "\u014A",
    ETH: "\xd0",
    Eacute: "\xc9",
    Ecaron: "\u011A",
    Ecirc: "\xca",
    Ecy: "\u042D",
    Edot: "\u0116",
    Efr: "\u{1D508}",
    Egrave: "\xc8",
    Element: "\u2208",
    in: "\u2208",
    isin: "\u2208",
    isinv: "\u2208",
    Emacr: "\u0112",
    EmptySmallSquare: "\u25FB",
    EmptyVerySmallSquare: "\u25AB",
    Eogon: "\u0118",
    Eopf: "\u{1D53C}",
    Epsilon: "\u0395",
    Equal: "\u2A75",
    EqualTilde: "\u2242",
    eqsim: "\u2242",
    esim: "\u2242",
    Equilibrium: "\u21CC",
    rightleftharpoons: "\u21CC",
    rlhar: "\u21CC",
    Escr: "\u2130",
    expectation: "\u2130",
    Esim: "\u2A73",
    Eta: "\u0397",
    Euml: "\xcb",
    Exists: "\u2203",
    exist: "\u2203",
    ExponentialE: "\u2147",
    ee: "\u2147",
    exponentiale: "\u2147",
    Fcy: "\u0424",
    Ffr: "\u{1D509}",
    FilledSmallSquare: "\u25FC",
    FilledVerySmallSquare: "\u25AA",
    blacksquare: "\u25AA",
    squarf: "\u25AA",
    squf: "\u25AA",
    Fopf: "\u{1D53D}",
    ForAll: "\u2200",
    forall: "\u2200",
    Fouriertrf: "\u2131",
    Fscr: "\u2131",
    GJcy: "\u0403",
    GT: ">",
    gt: ">",
    Gamma: "\u0393",
    Gammad: "\u03DC",
    Gbreve: "\u011E",
    Gcedil: "\u0122",
    Gcirc: "\u011C",
    Gcy: "\u0413",
    Gdot: "\u0120",
    Gfr: "\u{1D50A}",
    Gg: "\u22D9",
    ggg: "\u22D9",
    Gopf: "\u{1D53E}",
    GreaterEqual: "\u2265",
    ge: "\u2265",
    geq: "\u2265",
    GreaterEqualLess: "\u22DB",
    gel: "\u22DB",
    gtreqless: "\u22DB",
    GreaterFullEqual: "\u2267",
    gE: "\u2267",
    geqq: "\u2267",
    GreaterGreater: "\u2AA2",
    GreaterLess: "\u2277",
    gl: "\u2277",
    gtrless: "\u2277",
    GreaterSlantEqual: "\u2A7E",
    geqslant: "\u2A7E",
    ges: "\u2A7E",
    GreaterTilde: "\u2273",
    gsim: "\u2273",
    gtrsim: "\u2273",
    Gscr: "\u{1D4A2}",
    Gt: "\u226B",
    NestedGreaterGreater: "\u226B",
    gg: "\u226B",
    HARDcy: "\u042A",
    Hacek: "\u02C7",
    caron: "\u02C7",
    Hat: "^",
    Hcirc: "\u0124",
    Hfr: "\u210C",
    Poincareplane: "\u210C",
    HilbertSpace: "\u210B",
    Hscr: "\u210B",
    hamilt: "\u210B",
    Hopf: "\u210D",
    quaternions: "\u210D",
    HorizontalLine: "\u2500",
    boxh: "\u2500",
    Hstrok: "\u0126",
    HumpEqual: "\u224F",
    bumpe: "\u224F",
    bumpeq: "\u224F",
    IEcy: "\u0415",
    IJlig: "\u0132",
    IOcy: "\u0401",
    Iacute: "\xcd",
    Icirc: "\xce",
    Icy: "\u0418",
    Idot: "\u0130",
    Ifr: "\u2111",
    Im: "\u2111",
    image: "\u2111",
    imagpart: "\u2111",
    Igrave: "\xcc",
    Imacr: "\u012A",
    ImaginaryI: "\u2148",
    ii: "\u2148",
    Int: "\u222C",
    Integral: "\u222B",
    int: "\u222B",
    Intersection: "\u22C2",
    bigcap: "\u22C2",
    xcap: "\u22C2",
    InvisibleComma: "\u2063",
    ic: "\u2063",
    InvisibleTimes: "\u2062",
    it: "\u2062",
    Iogon: "\u012E",
    Iopf: "\u{1D540}",
    Iota: "\u0399",
    Iscr: "\u2110",
    imagline: "\u2110",
    Itilde: "\u0128",
    Iukcy: "\u0406",
    Iuml: "\xcf",
    Jcirc: "\u0134",
    Jcy: "\u0419",
    Jfr: "\u{1D50D}",
    Jopf: "\u{1D541}",
    Jscr: "\u{1D4A5}",
    Jsercy: "\u0408",
    Jukcy: "\u0404",
    KHcy: "\u0425",
    KJcy: "\u040C",
    Kappa: "\u039A",
    Kcedil: "\u0136",
    Kcy: "\u041A",
    Kfr: "\u{1D50E}",
    Kopf: "\u{1D542}",
    Kscr: "\u{1D4A6}",
    LJcy: "\u0409",
    LT: "<",
    lt: "<",
    Lacute: "\u0139",
    Lambda: "\u039B",
    Lang: "\u27EA",
    Laplacetrf: "\u2112",
    Lscr: "\u2112",
    lagran: "\u2112",
    Larr: "\u219E",
    twoheadleftarrow: "\u219E",
    Lcaron: "\u013D",
    Lcedil: "\u013B",
    Lcy: "\u041B",
    LeftAngleBracket: "\u27E8",
    lang: "\u27E8",
    langle: "\u27E8",
    LeftArrow: "\u2190",
    ShortLeftArrow: "\u2190",
    larr: "\u2190",
    leftarrow: "\u2190",
    slarr: "\u2190",
    LeftArrowBar: "\u21E4",
    larrb: "\u21E4",
    LeftArrowRightArrow: "\u21C6",
    leftrightarrows: "\u21C6",
    lrarr: "\u21C6",
    LeftCeiling: "\u2308",
    lceil: "\u2308",
    LeftDoubleBracket: "\u27E6",
    lobrk: "\u27E6",
    LeftDownTeeVector: "\u2961",
    LeftDownVector: "\u21C3",
    dharl: "\u21C3",
    downharpoonleft: "\u21C3",
    LeftDownVectorBar: "\u2959",
    LeftFloor: "\u230A",
    lfloor: "\u230A",
    LeftRightArrow: "\u2194",
    harr: "\u2194",
    leftrightarrow: "\u2194",
    LeftRightVector: "\u294E",
    LeftTee: "\u22A3",
    dashv: "\u22A3",
    LeftTeeArrow: "\u21A4",
    mapstoleft: "\u21A4",
    LeftTeeVector: "\u295A",
    LeftTriangle: "\u22B2",
    vartriangleleft: "\u22B2",
    vltri: "\u22B2",
    LeftTriangleBar: "\u29CF",
    LeftTriangleEqual: "\u22B4",
    ltrie: "\u22B4",
    trianglelefteq: "\u22B4",
    LeftUpDownVector: "\u2951",
    LeftUpTeeVector: "\u2960",
    LeftUpVector: "\u21BF",
    uharl: "\u21BF",
    upharpoonleft: "\u21BF",
    LeftUpVectorBar: "\u2958",
    LeftVector: "\u21BC",
    leftharpoonup: "\u21BC",
    lharu: "\u21BC",
    LeftVectorBar: "\u2952",
    LessEqualGreater: "\u22DA",
    leg: "\u22DA",
    lesseqgtr: "\u22DA",
    LessFullEqual: "\u2266",
    lE: "\u2266",
    leqq: "\u2266",
    LessGreater: "\u2276",
    lessgtr: "\u2276",
    lg: "\u2276",
    LessLess: "\u2AA1",
    LessSlantEqual: "\u2A7D",
    leqslant: "\u2A7D",
    les: "\u2A7D",
    LessTilde: "\u2272",
    lesssim: "\u2272",
    lsim: "\u2272",
    Lfr: "\u{1D50F}",
    Ll: "\u22D8",
    Lleftarrow: "\u21DA",
    lAarr: "\u21DA",
    Lmidot: "\u013F",
    LongLeftArrow: "\u27F5",
    longleftarrow: "\u27F5",
    xlarr: "\u27F5",
    LongLeftRightArrow: "\u27F7",
    longleftrightarrow: "\u27F7",
    xharr: "\u27F7",
    LongRightArrow: "\u27F6",
    longrightarrow: "\u27F6",
    xrarr: "\u27F6",
    Lopf: "\u{1D543}",
    LowerLeftArrow: "\u2199",
    swarr: "\u2199",
    swarrow: "\u2199",
    LowerRightArrow: "\u2198",
    searr: "\u2198",
    searrow: "\u2198",
    Lsh: "\u21B0",
    lsh: "\u21B0",
    Lstrok: "\u0141",
    Lt: "\u226A",
    NestedLessLess: "\u226A",
    ll: "\u226A",
    Map: "\u2905",
    Mcy: "\u041C",
    MediumSpace: "\u205F",
    Mellintrf: "\u2133",
    Mscr: "\u2133",
    phmmat: "\u2133",
    Mfr: "\u{1D510}",
    MinusPlus: "\u2213",
    mnplus: "\u2213",
    mp: "\u2213",
    Mopf: "\u{1D544}",
    Mu: "\u039C",
    NJcy: "\u040A",
    Nacute: "\u0143",
    Ncaron: "\u0147",
    Ncedil: "\u0145",
    Ncy: "\u041D",
    NegativeMediumSpace: "\u200B",
    NegativeThickSpace: "\u200B",
    NegativeThinSpace: "\u200B",
    NegativeVeryThinSpace: "\u200B",
    ZeroWidthSpace: "\u200B",
    NewLine: `
`,
    Nfr: "\u{1D511}",
    NoBreak: "\u2060",
    NonBreakingSpace: "\xa0",
    nbsp: "\xa0",
    Nopf: "\u2115",
    naturals: "\u2115",
    Not: "\u2AEC",
    NotCongruent: "\u2262",
    nequiv: "\u2262",
    NotCupCap: "\u226D",
    NotDoubleVerticalBar: "\u2226",
    npar: "\u2226",
    nparallel: "\u2226",
    nshortparallel: "\u2226",
    nspar: "\u2226",
    NotElement: "\u2209",
    notin: "\u2209",
    notinva: "\u2209",
    NotEqual: "\u2260",
    ne: "\u2260",
    NotEqualTilde: "\u2242\u0338",
    nesim: "\u2242\u0338",
    NotExists: "\u2204",
    nexist: "\u2204",
    nexists: "\u2204",
    NotGreater: "\u226F",
    ngt: "\u226F",
    ngtr: "\u226F",
    NotGreaterEqual: "\u2271",
    nge: "\u2271",
    ngeq: "\u2271",
    NotGreaterFullEqual: "\u2267\u0338",
    ngE: "\u2267\u0338",
    ngeqq: "\u2267\u0338",
    NotGreaterGreater: "\u226B\u0338",
    nGtv: "\u226B\u0338",
    NotGreaterLess: "\u2279",
    ntgl: "\u2279",
    NotGreaterSlantEqual: "\u2A7E\u0338",
    ngeqslant: "\u2A7E\u0338",
    nges: "\u2A7E\u0338",
    NotGreaterTilde: "\u2275",
    ngsim: "\u2275",
    NotHumpDownHump: "\u224E\u0338",
    nbump: "\u224E\u0338",
    NotHumpEqual: "\u224F\u0338",
    nbumpe: "\u224F\u0338",
    NotLeftTriangle: "\u22EA",
    nltri: "\u22EA",
    ntriangleleft: "\u22EA",
    NotLeftTriangleBar: "\u29CF\u0338",
    NotLeftTriangleEqual: "\u22EC",
    nltrie: "\u22EC",
    ntrianglelefteq: "\u22EC",
    NotLess: "\u226E",
    nless: "\u226E",
    nlt: "\u226E",
    NotLessEqual: "\u2270",
    nle: "\u2270",
    nleq: "\u2270",
    NotLessGreater: "\u2278",
    ntlg: "\u2278",
    NotLessLess: "\u226A\u0338",
    nLtv: "\u226A\u0338",
    NotLessSlantEqual: "\u2A7D\u0338",
    nleqslant: "\u2A7D\u0338",
    nles: "\u2A7D\u0338",
    NotLessTilde: "\u2274",
    nlsim: "\u2274",
    NotNestedGreaterGreater: "\u2AA2\u0338",
    NotNestedLessLess: "\u2AA1\u0338",
    NotPrecedes: "\u2280",
    npr: "\u2280",
    nprec: "\u2280",
    NotPrecedesEqual: "\u2AAF\u0338",
    npre: "\u2AAF\u0338",
    npreceq: "\u2AAF\u0338",
    NotPrecedesSlantEqual: "\u22E0",
    nprcue: "\u22E0",
    NotReverseElement: "\u220C",
    notni: "\u220C",
    notniva: "\u220C",
    NotRightTriangle: "\u22EB",
    nrtri: "\u22EB",
    ntriangleright: "\u22EB",
    NotRightTriangleBar: "\u29D0\u0338",
    NotRightTriangleEqual: "\u22ED",
    nrtrie: "\u22ED",
    ntrianglerighteq: "\u22ED",
    NotSquareSubset: "\u228F\u0338",
    NotSquareSubsetEqual: "\u22E2",
    nsqsube: "\u22E2",
    NotSquareSuperset: "\u2290\u0338",
    NotSquareSupersetEqual: "\u22E3",
    nsqsupe: "\u22E3",
    NotSubset: "\u2282\u20D2",
    nsubset: "\u2282\u20D2",
    vnsub: "\u2282\u20D2",
    NotSubsetEqual: "\u2288",
    nsube: "\u2288",
    nsubseteq: "\u2288",
    NotSucceeds: "\u2281",
    nsc: "\u2281",
    nsucc: "\u2281",
    NotSucceedsEqual: "\u2AB0\u0338",
    nsce: "\u2AB0\u0338",
    nsucceq: "\u2AB0\u0338",
    NotSucceedsSlantEqual: "\u22E1",
    nsccue: "\u22E1",
    NotSucceedsTilde: "\u227F\u0338",
    NotSuperset: "\u2283\u20D2",
    nsupset: "\u2283\u20D2",
    vnsup: "\u2283\u20D2",
    NotSupersetEqual: "\u2289",
    nsupe: "\u2289",
    nsupseteq: "\u2289",
    NotTilde: "\u2241",
    nsim: "\u2241",
    NotTildeEqual: "\u2244",
    nsime: "\u2244",
    nsimeq: "\u2244",
    NotTildeFullEqual: "\u2247",
    ncong: "\u2247",
    NotTildeTilde: "\u2249",
    nap: "\u2249",
    napprox: "\u2249",
    NotVerticalBar: "\u2224",
    nmid: "\u2224",
    nshortmid: "\u2224",
    nsmid: "\u2224",
    Nscr: "\u{1D4A9}",
    Ntilde: "\xd1",
    Nu: "\u039D",
    OElig: "\u0152",
    Oacute: "\xd3",
    Ocirc: "\xd4",
    Ocy: "\u041E",
    Odblac: "\u0150",
    Ofr: "\u{1D512}",
    Ograve: "\xd2",
    Omacr: "\u014C",
    Omega: "\u03A9",
    ohm: "\u03A9",
    Omicron: "\u039F",
    Oopf: "\u{1D546}",
    OpenCurlyDoubleQuote: "\u201C",
    ldquo: "\u201C",
    OpenCurlyQuote: "\u2018",
    lsquo: "\u2018",
    Or: "\u2A54",
    Oscr: "\u{1D4AA}",
    Oslash: "\xd8",
    Otilde: "\xd5",
    Otimes: "\u2A37",
    Ouml: "\xd6",
    OverBar: "\u203E",
    oline: "\u203E",
    OverBrace: "\u23DE",
    OverBracket: "\u23B4",
    tbrk: "\u23B4",
    OverParenthesis: "\u23DC",
    PartialD: "\u2202",
    part: "\u2202",
    Pcy: "\u041F",
    Pfr: "\u{1D513}",
    Phi: "\u03A6",
    Pi: "\u03A0",
    PlusMinus: "\xb1",
    plusmn: "\xb1",
    pm: "\xb1",
    Popf: "\u2119",
    primes: "\u2119",
    Pr: "\u2ABB",
    Precedes: "\u227A",
    pr: "\u227A",
    prec: "\u227A",
    PrecedesEqual: "\u2AAF",
    pre: "\u2AAF",
    preceq: "\u2AAF",
    PrecedesSlantEqual: "\u227C",
    prcue: "\u227C",
    preccurlyeq: "\u227C",
    PrecedesTilde: "\u227E",
    precsim: "\u227E",
    prsim: "\u227E",
    Prime: "\u2033",
    Product: "\u220F",
    prod: "\u220F",
    Proportional: "\u221D",
    prop: "\u221D",
    propto: "\u221D",
    varpropto: "\u221D",
    vprop: "\u221D",
    Pscr: "\u{1D4AB}",
    Psi: "\u03A8",
    QUOT: '"',
    quot: '"',
    Qfr: "\u{1D514}",
    Qopf: "\u211A",
    rationals: "\u211A",
    Qscr: "\u{1D4AC}",
    RBarr: "\u2910",
    drbkarow: "\u2910",
    REG: "\xae",
    circledR: "\xae",
    reg: "\xae",
    Racute: "\u0154",
    Rang: "\u27EB",
    Rarr: "\u21A0",
    twoheadrightarrow: "\u21A0",
    Rarrtl: "\u2916",
    Rcaron: "\u0158",
    Rcedil: "\u0156",
    Rcy: "\u0420",
    Re: "\u211C",
    Rfr: "\u211C",
    real: "\u211C",
    realpart: "\u211C",
    ReverseElement: "\u220B",
    SuchThat: "\u220B",
    ni: "\u220B",
    niv: "\u220B",
    ReverseEquilibrium: "\u21CB",
    leftrightharpoons: "\u21CB",
    lrhar: "\u21CB",
    ReverseUpEquilibrium: "\u296F",
    duhar: "\u296F",
    Rho: "\u03A1",
    RightAngleBracket: "\u27E9",
    rang: "\u27E9",
    rangle: "\u27E9",
    RightArrow: "\u2192",
    ShortRightArrow: "\u2192",
    rarr: "\u2192",
    rightarrow: "\u2192",
    srarr: "\u2192",
    RightArrowBar: "\u21E5",
    rarrb: "\u21E5",
    RightArrowLeftArrow: "\u21C4",
    rightleftarrows: "\u21C4",
    rlarr: "\u21C4",
    RightCeiling: "\u2309",
    rceil: "\u2309",
    RightDoubleBracket: "\u27E7",
    robrk: "\u27E7",
    RightDownTeeVector: "\u295D",
    RightDownVector: "\u21C2",
    dharr: "\u21C2",
    downharpoonright: "\u21C2",
    RightDownVectorBar: "\u2955",
    RightFloor: "\u230B",
    rfloor: "\u230B",
    RightTee: "\u22A2",
    vdash: "\u22A2",
    RightTeeArrow: "\u21A6",
    map: "\u21A6",
    mapsto: "\u21A6",
    RightTeeVector: "\u295B",
    RightTriangle: "\u22B3",
    vartriangleright: "\u22B3",
    vrtri: "\u22B3",
    RightTriangleBar: "\u29D0",
    RightTriangleEqual: "\u22B5",
    rtrie: "\u22B5",
    trianglerighteq: "\u22B5",
    RightUpDownVector: "\u294F",
    RightUpTeeVector: "\u295C",
    RightUpVector: "\u21BE",
    uharr: "\u21BE",
    upharpoonright: "\u21BE",
    RightUpVectorBar: "\u2954",
    RightVector: "\u21C0",
    rharu: "\u21C0",
    rightharpoonup: "\u21C0",
    RightVectorBar: "\u2953",
    Ropf: "\u211D",
    reals: "\u211D",
    RoundImplies: "\u2970",
    Rrightarrow: "\u21DB",
    rAarr: "\u21DB",
    Rscr: "\u211B",
    realine: "\u211B",
    Rsh: "\u21B1",
    rsh: "\u21B1",
    RuleDelayed: "\u29F4",
    SHCHcy: "\u0429",
    SHcy: "\u0428",
    SOFTcy: "\u042C",
    Sacute: "\u015A",
    Sc: "\u2ABC",
    Scaron: "\u0160",
    Scedil: "\u015E",
    Scirc: "\u015C",
    Scy: "\u0421",
    Sfr: "\u{1D516}",
    ShortUpArrow: "\u2191",
    UpArrow: "\u2191",
    uarr: "\u2191",
    uparrow: "\u2191",
    Sigma: "\u03A3",
    SmallCircle: "\u2218",
    compfn: "\u2218",
    Sopf: "\u{1D54A}",
    Sqrt: "\u221A",
    radic: "\u221A",
    Square: "\u25A1",
    squ: "\u25A1",
    square: "\u25A1",
    SquareIntersection: "\u2293",
    sqcap: "\u2293",
    SquareSubset: "\u228F",
    sqsub: "\u228F",
    sqsubset: "\u228F",
    SquareSubsetEqual: "\u2291",
    sqsube: "\u2291",
    sqsubseteq: "\u2291",
    SquareSuperset: "\u2290",
    sqsup: "\u2290",
    sqsupset: "\u2290",
    SquareSupersetEqual: "\u2292",
    sqsupe: "\u2292",
    sqsupseteq: "\u2292",
    SquareUnion: "\u2294",
    sqcup: "\u2294",
    Sscr: "\u{1D4AE}",
    Star: "\u22C6",
    sstarf: "\u22C6",
    Sub: "\u22D0",
    Subset: "\u22D0",
    SubsetEqual: "\u2286",
    sube: "\u2286",
    subseteq: "\u2286",
    Succeeds: "\u227B",
    sc: "\u227B",
    succ: "\u227B",
    SucceedsEqual: "\u2AB0",
    sce: "\u2AB0",
    succeq: "\u2AB0",
    SucceedsSlantEqual: "\u227D",
    sccue: "\u227D",
    succcurlyeq: "\u227D",
    SucceedsTilde: "\u227F",
    scsim: "\u227F",
    succsim: "\u227F",
    Sum: "\u2211",
    sum: "\u2211",
    Sup: "\u22D1",
    Supset: "\u22D1",
    Superset: "\u2283",
    sup: "\u2283",
    supset: "\u2283",
    SupersetEqual: "\u2287",
    supe: "\u2287",
    supseteq: "\u2287",
    THORN: "\xde",
    TRADE: "\u2122",
    trade: "\u2122",
    TSHcy: "\u040B",
    TScy: "\u0426",
    Tab: "	",
    Tau: "\u03A4",
    Tcaron: "\u0164",
    Tcedil: "\u0162",
    Tcy: "\u0422",
    Tfr: "\u{1D517}",
    Therefore: "\u2234",
    there4: "\u2234",
    therefore: "\u2234",
    Theta: "\u0398",
    ThickSpace: "\u205F\u200A",
    ThinSpace: "\u2009",
    thinsp: "\u2009",
    Tilde: "\u223C",
    sim: "\u223C",
    thicksim: "\u223C",
    thksim: "\u223C",
    TildeEqual: "\u2243",
    sime: "\u2243",
    simeq: "\u2243",
    TildeFullEqual: "\u2245",
    cong: "\u2245",
    TildeTilde: "\u2248",
    ap: "\u2248",
    approx: "\u2248",
    asymp: "\u2248",
    thickapprox: "\u2248",
    thkap: "\u2248",
    Topf: "\u{1D54B}",
    TripleDot: "\u20DB",
    tdot: "\u20DB",
    Tscr: "\u{1D4AF}",
    Tstrok: "\u0166",
    Uacute: "\xda",
    Uarr: "\u219F",
    Uarrocir: "\u2949",
    Ubrcy: "\u040E",
    Ubreve: "\u016C",
    Ucirc: "\xdb",
    Ucy: "\u0423",
    Udblac: "\u0170",
    Ufr: "\u{1D518}",
    Ugrave: "\xd9",
    Umacr: "\u016A",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "\u23DF",
    UnderBracket: "\u23B5",
    bbrk: "\u23B5",
    UnderParenthesis: "\u23DD",
    Union: "\u22C3",
    bigcup: "\u22C3",
    xcup: "\u22C3",
    UnionPlus: "\u228E",
    uplus: "\u228E",
    Uogon: "\u0172",
    Uopf: "\u{1D54C}",
    UpArrowBar: "\u2912",
    UpArrowDownArrow: "\u21C5",
    udarr: "\u21C5",
    UpDownArrow: "\u2195",
    updownarrow: "\u2195",
    varr: "\u2195",
    UpEquilibrium: "\u296E",
    udhar: "\u296E",
    UpTee: "\u22A5",
    bot: "\u22A5",
    bottom: "\u22A5",
    perp: "\u22A5",
    UpTeeArrow: "\u21A5",
    mapstoup: "\u21A5",
    UpperLeftArrow: "\u2196",
    nwarr: "\u2196",
    nwarrow: "\u2196",
    UpperRightArrow: "\u2197",
    nearr: "\u2197",
    nearrow: "\u2197",
    Upsi: "\u03D2",
    upsih: "\u03D2",
    Upsilon: "\u03A5",
    Uring: "\u016E",
    Uscr: "\u{1D4B0}",
    Utilde: "\u0168",
    Uuml: "\xdc",
    VDash: "\u22AB",
    Vbar: "\u2AEB",
    Vcy: "\u0412",
    Vdash: "\u22A9",
    Vdashl: "\u2AE6",
    Vee: "\u22C1",
    bigvee: "\u22C1",
    xvee: "\u22C1",
    Verbar: "\u2016",
    Vert: "\u2016",
    VerticalBar: "\u2223",
    mid: "\u2223",
    shortmid: "\u2223",
    smid: "\u2223",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "\u2758",
    VerticalTilde: "\u2240",
    wr: "\u2240",
    wreath: "\u2240",
    VeryThinSpace: "\u200A",
    hairsp: "\u200A",
    Vfr: "\u{1D519}",
    Vopf: "\u{1D54D}",
    Vscr: "\u{1D4B1}",
    Vvdash: "\u22AA",
    Wcirc: "\u0174",
    Wedge: "\u22C0",
    bigwedge: "\u22C0",
    xwedge: "\u22C0",
    Wfr: "\u{1D51A}",
    Wopf: "\u{1D54E}",
    Wscr: "\u{1D4B2}",
    Xfr: "\u{1D51B}",
    Xi: "\u039E",
    Xopf: "\u{1D54F}",
    Xscr: "\u{1D4B3}",
    YAcy: "\u042F",
    YIcy: "\u0407",
    YUcy: "\u042E",
    Yacute: "\xdd",
    Ycirc: "\u0176",
    Ycy: "\u042B",
    Yfr: "\u{1D51C}",
    Yopf: "\u{1D550}",
    Yscr: "\u{1D4B4}",
    Yuml: "\u0178",
    ZHcy: "\u0416",
    Zacute: "\u0179",
    Zcaron: "\u017D",
    Zcy: "\u0417",
    Zdot: "\u017B",
    Zeta: "\u0396",
    Zfr: "\u2128",
    zeetrf: "\u2128",
    Zopf: "\u2124",
    integers: "\u2124",
    Zscr: "\u{1D4B5}",
    aacute: "\xe1",
    abreve: "\u0103",
    ac: "\u223E",
    mstpos: "\u223E",
    acE: "\u223E\u0333",
    acd: "\u223F",
    acirc: "\xe2",
    acy: "\u0430",
    aelig: "\xe6",
    afr: "\u{1D51E}",
    agrave: "\xe0",
    alefsym: "\u2135",
    aleph: "\u2135",
    alpha: "\u03B1",
    amacr: "\u0101",
    amalg: "\u2A3F",
    and: "\u2227",
    wedge: "\u2227",
    andand: "\u2A55",
    andd: "\u2A5C",
    andslope: "\u2A58",
    andv: "\u2A5A",
    ang: "\u2220",
    angle: "\u2220",
    ange: "\u29A4",
    angmsd: "\u2221",
    measuredangle: "\u2221",
    angmsdaa: "\u29A8",
    angmsdab: "\u29A9",
    angmsdac: "\u29AA",
    angmsdad: "\u29AB",
    angmsdae: "\u29AC",
    angmsdaf: "\u29AD",
    angmsdag: "\u29AE",
    angmsdah: "\u29AF",
    angrt: "\u221F",
    angrtvb: "\u22BE",
    angrtvbd: "\u299D",
    angsph: "\u2222",
    angzarr: "\u237C",
    aogon: "\u0105",
    aopf: "\u{1D552}",
    apE: "\u2A70",
    apacir: "\u2A6F",
    ape: "\u224A",
    approxeq: "\u224A",
    apid: "\u224B",
    apos: "'",
    aring: "\xe5",
    ascr: "\u{1D4B6}",
    ast: "*",
    midast: "*",
    atilde: "\xe3",
    auml: "\xe4",
    awint: "\u2A11",
    bNot: "\u2AED",
    backcong: "\u224C",
    bcong: "\u224C",
    backepsilon: "\u03F6",
    bepsi: "\u03F6",
    backprime: "\u2035",
    bprime: "\u2035",
    backsim: "\u223D",
    bsim: "\u223D",
    backsimeq: "\u22CD",
    bsime: "\u22CD",
    barvee: "\u22BD",
    barwed: "\u2305",
    barwedge: "\u2305",
    bbrktbrk: "\u23B6",
    bcy: "\u0431",
    bdquo: "\u201E",
    ldquor: "\u201E",
    bemptyv: "\u29B0",
    beta: "\u03B2",
    beth: "\u2136",
    between: "\u226C",
    twixt: "\u226C",
    bfr: "\u{1D51F}",
    bigcirc: "\u25EF",
    xcirc: "\u25EF",
    bigodot: "\u2A00",
    xodot: "\u2A00",
    bigoplus: "\u2A01",
    xoplus: "\u2A01",
    bigotimes: "\u2A02",
    xotime: "\u2A02",
    bigsqcup: "\u2A06",
    xsqcup: "\u2A06",
    bigstar: "\u2605",
    starf: "\u2605",
    bigtriangledown: "\u25BD",
    xdtri: "\u25BD",
    bigtriangleup: "\u25B3",
    xutri: "\u25B3",
    biguplus: "\u2A04",
    xuplus: "\u2A04",
    bkarow: "\u290D",
    rbarr: "\u290D",
    blacklozenge: "\u29EB",
    lozf: "\u29EB",
    blacktriangle: "\u25B4",
    utrif: "\u25B4",
    blacktriangledown: "\u25BE",
    dtrif: "\u25BE",
    blacktriangleleft: "\u25C2",
    ltrif: "\u25C2",
    blacktriangleright: "\u25B8",
    rtrif: "\u25B8",
    blank: "\u2423",
    blk12: "\u2592",
    blk14: "\u2591",
    blk34: "\u2593",
    block: "\u2588",
    bne: "=\u20E5",
    bnequiv: "\u2261\u20E5",
    bnot: "\u2310",
    bopf: "\u{1D553}",
    bowtie: "\u22C8",
    boxDL: "\u2557",
    boxDR: "\u2554",
    boxDl: "\u2556",
    boxDr: "\u2553",
    boxH: "\u2550",
    boxHD: "\u2566",
    boxHU: "\u2569",
    boxHd: "\u2564",
    boxHu: "\u2567",
    boxUL: "\u255D",
    boxUR: "\u255A",
    boxUl: "\u255C",
    boxUr: "\u2559",
    boxV: "\u2551",
    boxVH: "\u256C",
    boxVL: "\u2563",
    boxVR: "\u2560",
    boxVh: "\u256B",
    boxVl: "\u2562",
    boxVr: "\u255F",
    boxbox: "\u29C9",
    boxdL: "\u2555",
    boxdR: "\u2552",
    boxdl: "\u2510",
    boxdr: "\u250C",
    boxhD: "\u2565",
    boxhU: "\u2568",
    boxhd: "\u252C",
    boxhu: "\u2534",
    boxminus: "\u229F",
    minusb: "\u229F",
    boxplus: "\u229E",
    plusb: "\u229E",
    boxtimes: "\u22A0",
    timesb: "\u22A0",
    boxuL: "\u255B",
    boxuR: "\u2558",
    boxul: "\u2518",
    boxur: "\u2514",
    boxv: "\u2502",
    boxvH: "\u256A",
    boxvL: "\u2561",
    boxvR: "\u255E",
    boxvh: "\u253C",
    boxvl: "\u2524",
    boxvr: "\u251C",
    brvbar: "\xa6",
    bscr: "\u{1D4B7}",
    bsemi: "\u204F",
    bsol: "\\",
    bsolb: "\u29C5",
    bsolhsub: "\u27C8",
    bull: "\u2022",
    bullet: "\u2022",
    bumpE: "\u2AAE",
    cacute: "\u0107",
    cap: "\u2229",
    capand: "\u2A44",
    capbrcup: "\u2A49",
    capcap: "\u2A4B",
    capcup: "\u2A47",
    capdot: "\u2A40",
    caps: "\u2229\uFE00",
    caret: "\u2041",
    ccaps: "\u2A4D",
    ccaron: "\u010D",
    ccedil: "\xe7",
    ccirc: "\u0109",
    ccups: "\u2A4C",
    ccupssm: "\u2A50",
    cdot: "\u010B",
    cemptyv: "\u29B2",
    cent: "\xa2",
    cfr: "\u{1D520}",
    chcy: "\u0447",
    check: "\u2713",
    checkmark: "\u2713",
    chi: "\u03C7",
    cir: "\u25CB",
    cirE: "\u29C3",
    circ: "\u02C6",
    circeq: "\u2257",
    cire: "\u2257",
    circlearrowleft: "\u21BA",
    olarr: "\u21BA",
    circlearrowright: "\u21BB",
    orarr: "\u21BB",
    circledS: "\u24C8",
    oS: "\u24C8",
    circledast: "\u229B",
    oast: "\u229B",
    circledcirc: "\u229A",
    ocir: "\u229A",
    circleddash: "\u229D",
    odash: "\u229D",
    cirfnint: "\u2A10",
    cirmid: "\u2AEF",
    cirscir: "\u29C2",
    clubs: "\u2663",
    clubsuit: "\u2663",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "\u2201",
    complement: "\u2201",
    congdot: "\u2A6D",
    copf: "\u{1D554}",
    copysr: "\u2117",
    crarr: "\u21B5",
    cross: "\u2717",
    cscr: "\u{1D4B8}",
    csub: "\u2ACF",
    csube: "\u2AD1",
    csup: "\u2AD0",
    csupe: "\u2AD2",
    ctdot: "\u22EF",
    cudarrl: "\u2938",
    cudarrr: "\u2935",
    cuepr: "\u22DE",
    curlyeqprec: "\u22DE",
    cuesc: "\u22DF",
    curlyeqsucc: "\u22DF",
    cularr: "\u21B6",
    curvearrowleft: "\u21B6",
    cularrp: "\u293D",
    cup: "\u222A",
    cupbrcap: "\u2A48",
    cupcap: "\u2A46",
    cupcup: "\u2A4A",
    cupdot: "\u228D",
    cupor: "\u2A45",
    cups: "\u222A\uFE00",
    curarr: "\u21B7",
    curvearrowright: "\u21B7",
    curarrm: "\u293C",
    curlyvee: "\u22CE",
    cuvee: "\u22CE",
    curlywedge: "\u22CF",
    cuwed: "\u22CF",
    curren: "\xa4",
    cwint: "\u2231",
    cylcty: "\u232D",
    dHar: "\u2965",
    dagger: "\u2020",
    daleth: "\u2138",
    dash: "\u2010",
    hyphen: "\u2010",
    dbkarow: "\u290F",
    rBarr: "\u290F",
    dcaron: "\u010F",
    dcy: "\u0434",
    ddarr: "\u21CA",
    downdownarrows: "\u21CA",
    ddotseq: "\u2A77",
    eDDot: "\u2A77",
    deg: "\xb0",
    delta: "\u03B4",
    demptyv: "\u29B1",
    dfisht: "\u297F",
    dfr: "\u{1D521}",
    diamondsuit: "\u2666",
    diams: "\u2666",
    digamma: "\u03DD",
    gammad: "\u03DD",
    disin: "\u22F2",
    div: "\xf7",
    divide: "\xf7",
    divideontimes: "\u22C7",
    divonx: "\u22C7",
    djcy: "\u0452",
    dlcorn: "\u231E",
    llcorner: "\u231E",
    dlcrop: "\u230D",
    dollar: "$",
    dopf: "\u{1D555}",
    doteqdot: "\u2251",
    eDot: "\u2251",
    dotminus: "\u2238",
    minusd: "\u2238",
    dotplus: "\u2214",
    plusdo: "\u2214",
    dotsquare: "\u22A1",
    sdotb: "\u22A1",
    drcorn: "\u231F",
    lrcorner: "\u231F",
    drcrop: "\u230C",
    dscr: "\u{1D4B9}",
    dscy: "\u0455",
    dsol: "\u29F6",
    dstrok: "\u0111",
    dtdot: "\u22F1",
    dtri: "\u25BF",
    triangledown: "\u25BF",
    dwangle: "\u29A6",
    dzcy: "\u045F",
    dzigrarr: "\u27FF",
    eacute: "\xe9",
    easter: "\u2A6E",
    ecaron: "\u011B",
    ecir: "\u2256",
    eqcirc: "\u2256",
    ecirc: "\xea",
    ecolon: "\u2255",
    eqcolon: "\u2255",
    ecy: "\u044D",
    edot: "\u0117",
    efDot: "\u2252",
    fallingdotseq: "\u2252",
    efr: "\u{1D522}",
    eg: "\u2A9A",
    egrave: "\xe8",
    egs: "\u2A96",
    eqslantgtr: "\u2A96",
    egsdot: "\u2A98",
    el: "\u2A99",
    elinters: "\u23E7",
    ell: "\u2113",
    els: "\u2A95",
    eqslantless: "\u2A95",
    elsdot: "\u2A97",
    emacr: "\u0113",
    empty: "\u2205",
    emptyset: "\u2205",
    emptyv: "\u2205",
    varnothing: "\u2205",
    emsp13: "\u2004",
    emsp14: "\u2005",
    emsp: "\u2003",
    eng: "\u014B",
    ensp: "\u2002",
    eogon: "\u0119",
    eopf: "\u{1D556}",
    epar: "\u22D5",
    eparsl: "\u29E3",
    eplus: "\u2A71",
    epsi: "\u03B5",
    epsilon: "\u03B5",
    epsiv: "\u03F5",
    straightepsilon: "\u03F5",
    varepsilon: "\u03F5",
    equals: "=",
    equest: "\u225F",
    questeq: "\u225F",
    equivDD: "\u2A78",
    eqvparsl: "\u29E5",
    erDot: "\u2253",
    risingdotseq: "\u2253",
    erarr: "\u2971",
    escr: "\u212F",
    eta: "\u03B7",
    eth: "\xf0",
    euml: "\xeb",
    euro: "\u20AC",
    excl: "!",
    fcy: "\u0444",
    female: "\u2640",
    ffilig: "\uFB03",
    fflig: "\uFB00",
    ffllig: "\uFB04",
    ffr: "\u{1D523}",
    filig: "\uFB01",
    fjlig: "fj",
    flat: "\u266D",
    fllig: "\uFB02",
    fltns: "\u25B1",
    fnof: "\u0192",
    fopf: "\u{1D557}",
    fork: "\u22D4",
    pitchfork: "\u22D4",
    forkv: "\u2AD9",
    fpartint: "\u2A0D",
    frac12: "\xbd",
    half: "\xbd",
    frac13: "\u2153",
    frac14: "\xbc",
    frac15: "\u2155",
    frac16: "\u2159",
    frac18: "\u215B",
    frac23: "\u2154",
    frac25: "\u2156",
    frac34: "\xbe",
    frac35: "\u2157",
    frac38: "\u215C",
    frac45: "\u2158",
    frac56: "\u215A",
    frac58: "\u215D",
    frac78: "\u215E",
    frasl: "\u2044",
    frown: "\u2322",
    sfrown: "\u2322",
    fscr: "\u{1D4BB}",
    gEl: "\u2A8C",
    gtreqqless: "\u2A8C",
    gacute: "\u01F5",
    gamma: "\u03B3",
    gap: "\u2A86",
    gtrapprox: "\u2A86",
    gbreve: "\u011F",
    gcirc: "\u011D",
    gcy: "\u0433",
    gdot: "\u0121",
    gescc: "\u2AA9",
    gesdot: "\u2A80",
    gesdoto: "\u2A82",
    gesdotol: "\u2A84",
    gesl: "\u22DB\uFE00",
    gesles: "\u2A94",
    gfr: "\u{1D524}",
    gimel: "\u2137",
    gjcy: "\u0453",
    glE: "\u2A92",
    gla: "\u2AA5",
    glj: "\u2AA4",
    gnE: "\u2269",
    gneqq: "\u2269",
    gnap: "\u2A8A",
    gnapprox: "\u2A8A",
    gne: "\u2A88",
    gneq: "\u2A88",
    gnsim: "\u22E7",
    gopf: "\u{1D558}",
    gscr: "\u210A",
    gsime: "\u2A8E",
    gsiml: "\u2A90",
    gtcc: "\u2AA7",
    gtcir: "\u2A7A",
    gtdot: "\u22D7",
    gtrdot: "\u22D7",
    gtlPar: "\u2995",
    gtquest: "\u2A7C",
    gtrarr: "\u2978",
    gvertneqq: "\u2269\uFE00",
    gvnE: "\u2269\uFE00",
    hardcy: "\u044A",
    harrcir: "\u2948",
    harrw: "\u21AD",
    leftrightsquigarrow: "\u21AD",
    hbar: "\u210F",
    hslash: "\u210F",
    planck: "\u210F",
    plankv: "\u210F",
    hcirc: "\u0125",
    hearts: "\u2665",
    heartsuit: "\u2665",
    hellip: "\u2026",
    mldr: "\u2026",
    hercon: "\u22B9",
    hfr: "\u{1D525}",
    hksearow: "\u2925",
    searhk: "\u2925",
    hkswarow: "\u2926",
    swarhk: "\u2926",
    hoarr: "\u21FF",
    homtht: "\u223B",
    hookleftarrow: "\u21A9",
    larrhk: "\u21A9",
    hookrightarrow: "\u21AA",
    rarrhk: "\u21AA",
    hopf: "\u{1D559}",
    horbar: "\u2015",
    hscr: "\u{1D4BD}",
    hstrok: "\u0127",
    hybull: "\u2043",
    iacute: "\xed",
    icirc: "\xee",
    icy: "\u0438",
    iecy: "\u0435",
    iexcl: "\xa1",
    ifr: "\u{1D526}",
    igrave: "\xec",
    iiiint: "\u2A0C",
    qint: "\u2A0C",
    iiint: "\u222D",
    tint: "\u222D",
    iinfin: "\u29DC",
    iiota: "\u2129",
    ijlig: "\u0133",
    imacr: "\u012B",
    imath: "\u0131",
    inodot: "\u0131",
    imof: "\u22B7",
    imped: "\u01B5",
    incare: "\u2105",
    infin: "\u221E",
    infintie: "\u29DD",
    intcal: "\u22BA",
    intercal: "\u22BA",
    intlarhk: "\u2A17",
    intprod: "\u2A3C",
    iprod: "\u2A3C",
    iocy: "\u0451",
    iogon: "\u012F",
    iopf: "\u{1D55A}",
    iota: "\u03B9",
    iquest: "\xbf",
    iscr: "\u{1D4BE}",
    isinE: "\u22F9",
    isindot: "\u22F5",
    isins: "\u22F4",
    isinsv: "\u22F3",
    itilde: "\u0129",
    iukcy: "\u0456",
    iuml: "\xef",
    jcirc: "\u0135",
    jcy: "\u0439",
    jfr: "\u{1D527}",
    jmath: "\u0237",
    jopf: "\u{1D55B}",
    jscr: "\u{1D4BF}",
    jsercy: "\u0458",
    jukcy: "\u0454",
    kappa: "\u03BA",
    kappav: "\u03F0",
    varkappa: "\u03F0",
    kcedil: "\u0137",
    kcy: "\u043A",
    kfr: "\u{1D528}",
    kgreen: "\u0138",
    khcy: "\u0445",
    kjcy: "\u045C",
    kopf: "\u{1D55C}",
    kscr: "\u{1D4C0}",
    lAtail: "\u291B",
    lBarr: "\u290E",
    lEg: "\u2A8B",
    lesseqqgtr: "\u2A8B",
    lHar: "\u2962",
    lacute: "\u013A",
    laemptyv: "\u29B4",
    lambda: "\u03BB",
    langd: "\u2991",
    lap: "\u2A85",
    lessapprox: "\u2A85",
    laquo: "\xab",
    larrbfs: "\u291F",
    larrfs: "\u291D",
    larrlp: "\u21AB",
    looparrowleft: "\u21AB",
    larrpl: "\u2939",
    larrsim: "\u2973",
    larrtl: "\u21A2",
    leftarrowtail: "\u21A2",
    lat: "\u2AAB",
    latail: "\u2919",
    late: "\u2AAD",
    lates: "\u2AAD\uFE00",
    lbarr: "\u290C",
    lbbrk: "\u2772",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "\u298B",
    lbrksld: "\u298F",
    lbrkslu: "\u298D",
    lcaron: "\u013E",
    lcedil: "\u013C",
    lcy: "\u043B",
    ldca: "\u2936",
    ldrdhar: "\u2967",
    ldrushar: "\u294B",
    ldsh: "\u21B2",
    le: "\u2264",
    leq: "\u2264",
    leftleftarrows: "\u21C7",
    llarr: "\u21C7",
    leftthreetimes: "\u22CB",
    lthree: "\u22CB",
    lescc: "\u2AA8",
    lesdot: "\u2A7F",
    lesdoto: "\u2A81",
    lesdotor: "\u2A83",
    lesg: "\u22DA\uFE00",
    lesges: "\u2A93",
    lessdot: "\u22D6",
    ltdot: "\u22D6",
    lfisht: "\u297C",
    lfr: "\u{1D529}",
    lgE: "\u2A91",
    lharul: "\u296A",
    lhblk: "\u2584",
    ljcy: "\u0459",
    llhard: "\u296B",
    lltri: "\u25FA",
    lmidot: "\u0140",
    lmoust: "\u23B0",
    lmoustache: "\u23B0",
    lnE: "\u2268",
    lneqq: "\u2268",
    lnap: "\u2A89",
    lnapprox: "\u2A89",
    lne: "\u2A87",
    lneq: "\u2A87",
    lnsim: "\u22E6",
    loang: "\u27EC",
    loarr: "\u21FD",
    longmapsto: "\u27FC",
    xmap: "\u27FC",
    looparrowright: "\u21AC",
    rarrlp: "\u21AC",
    lopar: "\u2985",
    lopf: "\u{1D55D}",
    loplus: "\u2A2D",
    lotimes: "\u2A34",
    lowast: "\u2217",
    loz: "\u25CA",
    lozenge: "\u25CA",
    lpar: "(",
    lparlt: "\u2993",
    lrhard: "\u296D",
    lrm: "\u200E",
    lrtri: "\u22BF",
    lsaquo: "\u2039",
    lscr: "\u{1D4C1}",
    lsime: "\u2A8D",
    lsimg: "\u2A8F",
    lsquor: "\u201A",
    sbquo: "\u201A",
    lstrok: "\u0142",
    ltcc: "\u2AA6",
    ltcir: "\u2A79",
    ltimes: "\u22C9",
    ltlarr: "\u2976",
    ltquest: "\u2A7B",
    ltrPar: "\u2996",
    ltri: "\u25C3",
    triangleleft: "\u25C3",
    lurdshar: "\u294A",
    luruhar: "\u2966",
    lvertneqq: "\u2268\uFE00",
    lvnE: "\u2268\uFE00",
    mDDot: "\u223A",
    macr: "\xaf",
    strns: "\xaf",
    male: "\u2642",
    malt: "\u2720",
    maltese: "\u2720",
    marker: "\u25AE",
    mcomma: "\u2A29",
    mcy: "\u043C",
    mdash: "\u2014",
    mfr: "\u{1D52A}",
    mho: "\u2127",
    micro: "\xb5",
    midcir: "\u2AF0",
    minus: "\u2212",
    minusdu: "\u2A2A",
    mlcp: "\u2ADB",
    models: "\u22A7",
    mopf: "\u{1D55E}",
    mscr: "\u{1D4C2}",
    mu: "\u03BC",
    multimap: "\u22B8",
    mumap: "\u22B8",
    nGg: "\u22D9\u0338",
    nGt: "\u226B\u20D2",
    nLeftarrow: "\u21CD",
    nlArr: "\u21CD",
    nLeftrightarrow: "\u21CE",
    nhArr: "\u21CE",
    nLl: "\u22D8\u0338",
    nLt: "\u226A\u20D2",
    nRightarrow: "\u21CF",
    nrArr: "\u21CF",
    nVDash: "\u22AF",
    nVdash: "\u22AE",
    nacute: "\u0144",
    nang: "\u2220\u20D2",
    napE: "\u2A70\u0338",
    napid: "\u224B\u0338",
    napos: "\u0149",
    natur: "\u266E",
    natural: "\u266E",
    ncap: "\u2A43",
    ncaron: "\u0148",
    ncedil: "\u0146",
    ncongdot: "\u2A6D\u0338",
    ncup: "\u2A42",
    ncy: "\u043D",
    ndash: "\u2013",
    neArr: "\u21D7",
    nearhk: "\u2924",
    nedot: "\u2250\u0338",
    nesear: "\u2928",
    toea: "\u2928",
    nfr: "\u{1D52B}",
    nharr: "\u21AE",
    nleftrightarrow: "\u21AE",
    nhpar: "\u2AF2",
    nis: "\u22FC",
    nisd: "\u22FA",
    njcy: "\u045A",
    nlE: "\u2266\u0338",
    nleqq: "\u2266\u0338",
    nlarr: "\u219A",
    nleftarrow: "\u219A",
    nldr: "\u2025",
    nopf: "\u{1D55F}",
    not: "\xac",
    notinE: "\u22F9\u0338",
    notindot: "\u22F5\u0338",
    notinvb: "\u22F7",
    notinvc: "\u22F6",
    notnivb: "\u22FE",
    notnivc: "\u22FD",
    nparsl: "\u2AFD\u20E5",
    npart: "\u2202\u0338",
    npolint: "\u2A14",
    nrarr: "\u219B",
    nrightarrow: "\u219B",
    nrarrc: "\u2933\u0338",
    nrarrw: "\u219D\u0338",
    nscr: "\u{1D4C3}",
    nsub: "\u2284",
    nsubE: "\u2AC5\u0338",
    nsubseteqq: "\u2AC5\u0338",
    nsup: "\u2285",
    nsupE: "\u2AC6\u0338",
    nsupseteqq: "\u2AC6\u0338",
    ntilde: "\xf1",
    nu: "\u03BD",
    num: "#",
    numero: "\u2116",
    numsp: "\u2007",
    nvDash: "\u22AD",
    nvHarr: "\u2904",
    nvap: "\u224D\u20D2",
    nvdash: "\u22AC",
    nvge: "\u2265\u20D2",
    nvgt: ">\u20D2",
    nvinfin: "\u29DE",
    nvlArr: "\u2902",
    nvle: "\u2264\u20D2",
    nvlt: "<\u20D2",
    nvltrie: "\u22B4\u20D2",
    nvrArr: "\u2903",
    nvrtrie: "\u22B5\u20D2",
    nvsim: "\u223C\u20D2",
    nwArr: "\u21D6",
    nwarhk: "\u2923",
    nwnear: "\u2927",
    oacute: "\xf3",
    ocirc: "\xf4",
    ocy: "\u043E",
    odblac: "\u0151",
    odiv: "\u2A38",
    odsold: "\u29BC",
    oelig: "\u0153",
    ofcir: "\u29BF",
    ofr: "\u{1D52C}",
    ogon: "\u02DB",
    ograve: "\xf2",
    ogt: "\u29C1",
    ohbar: "\u29B5",
    olcir: "\u29BE",
    olcross: "\u29BB",
    olt: "\u29C0",
    omacr: "\u014D",
    omega: "\u03C9",
    omicron: "\u03BF",
    omid: "\u29B6",
    oopf: "\u{1D560}",
    opar: "\u29B7",
    operp: "\u29B9",
    or: "\u2228",
    vee: "\u2228",
    ord: "\u2A5D",
    order: "\u2134",
    orderof: "\u2134",
    oscr: "\u2134",
    ordf: "\xaa",
    ordm: "\xba",
    origof: "\u22B6",
    oror: "\u2A56",
    orslope: "\u2A57",
    orv: "\u2A5B",
    oslash: "\xf8",
    osol: "\u2298",
    otilde: "\xf5",
    otimesas: "\u2A36",
    ouml: "\xf6",
    ovbar: "\u233D",
    para: "\xb6",
    parsim: "\u2AF3",
    parsl: "\u2AFD",
    pcy: "\u043F",
    percnt: "%",
    period: ".",
    permil: "\u2030",
    pertenk: "\u2031",
    pfr: "\u{1D52D}",
    phi: "\u03C6",
    phiv: "\u03D5",
    straightphi: "\u03D5",
    varphi: "\u03D5",
    phone: "\u260E",
    pi: "\u03C0",
    piv: "\u03D6",
    varpi: "\u03D6",
    planckh: "\u210E",
    plus: "+",
    plusacir: "\u2A23",
    pluscir: "\u2A22",
    plusdu: "\u2A25",
    pluse: "\u2A72",
    plussim: "\u2A26",
    plustwo: "\u2A27",
    pointint: "\u2A15",
    popf: "\u{1D561}",
    pound: "\xa3",
    prE: "\u2AB3",
    prap: "\u2AB7",
    precapprox: "\u2AB7",
    precnapprox: "\u2AB9",
    prnap: "\u2AB9",
    precneqq: "\u2AB5",
    prnE: "\u2AB5",
    precnsim: "\u22E8",
    prnsim: "\u22E8",
    prime: "\u2032",
    profalar: "\u232E",
    profline: "\u2312",
    profsurf: "\u2313",
    prurel: "\u22B0",
    pscr: "\u{1D4C5}",
    psi: "\u03C8",
    puncsp: "\u2008",
    qfr: "\u{1D52E}",
    qopf: "\u{1D562}",
    qprime: "\u2057",
    qscr: "\u{1D4C6}",
    quatint: "\u2A16",
    quest: "?",
    rAtail: "\u291C",
    rHar: "\u2964",
    race: "\u223D\u0331",
    racute: "\u0155",
    raemptyv: "\u29B3",
    rangd: "\u2992",
    range: "\u29A5",
    raquo: "\xbb",
    rarrap: "\u2975",
    rarrbfs: "\u2920",
    rarrc: "\u2933",
    rarrfs: "\u291E",
    rarrpl: "\u2945",
    rarrsim: "\u2974",
    rarrtl: "\u21A3",
    rightarrowtail: "\u21A3",
    rarrw: "\u219D",
    rightsquigarrow: "\u219D",
    ratail: "\u291A",
    ratio: "\u2236",
    rbbrk: "\u2773",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "\u298C",
    rbrksld: "\u298E",
    rbrkslu: "\u2990",
    rcaron: "\u0159",
    rcedil: "\u0157",
    rcy: "\u0440",
    rdca: "\u2937",
    rdldhar: "\u2969",
    rdsh: "\u21B3",
    rect: "\u25AD",
    rfisht: "\u297D",
    rfr: "\u{1D52F}",
    rharul: "\u296C",
    rho: "\u03C1",
    rhov: "\u03F1",
    varrho: "\u03F1",
    rightrightarrows: "\u21C9",
    rrarr: "\u21C9",
    rightthreetimes: "\u22CC",
    rthree: "\u22CC",
    ring: "\u02DA",
    rlm: "\u200F",
    rmoust: "\u23B1",
    rmoustache: "\u23B1",
    rnmid: "\u2AEE",
    roang: "\u27ED",
    roarr: "\u21FE",
    ropar: "\u2986",
    ropf: "\u{1D563}",
    roplus: "\u2A2E",
    rotimes: "\u2A35",
    rpar: ")",
    rpargt: "\u2994",
    rppolint: "\u2A12",
    rsaquo: "\u203A",
    rscr: "\u{1D4C7}",
    rtimes: "\u22CA",
    rtri: "\u25B9",
    triangleright: "\u25B9",
    rtriltri: "\u29CE",
    ruluhar: "\u2968",
    rx: "\u211E",
    sacute: "\u015B",
    scE: "\u2AB4",
    scap: "\u2AB8",
    succapprox: "\u2AB8",
    scaron: "\u0161",
    scedil: "\u015F",
    scirc: "\u015D",
    scnE: "\u2AB6",
    succneqq: "\u2AB6",
    scnap: "\u2ABA",
    succnapprox: "\u2ABA",
    scnsim: "\u22E9",
    succnsim: "\u22E9",
    scpolint: "\u2A13",
    scy: "\u0441",
    sdot: "\u22C5",
    sdote: "\u2A66",
    seArr: "\u21D8",
    sect: "\xa7",
    semi: ";",
    seswar: "\u2929",
    tosa: "\u2929",
    sext: "\u2736",
    sfr: "\u{1D530}",
    sharp: "\u266F",
    shchcy: "\u0449",
    shcy: "\u0448",
    shy: "\xad",
    sigma: "\u03C3",
    sigmaf: "\u03C2",
    sigmav: "\u03C2",
    varsigma: "\u03C2",
    simdot: "\u2A6A",
    simg: "\u2A9E",
    simgE: "\u2AA0",
    siml: "\u2A9D",
    simlE: "\u2A9F",
    simne: "\u2246",
    simplus: "\u2A24",
    simrarr: "\u2972",
    smashp: "\u2A33",
    smeparsl: "\u29E4",
    smile: "\u2323",
    ssmile: "\u2323",
    smt: "\u2AAA",
    smte: "\u2AAC",
    smtes: "\u2AAC\uFE00",
    softcy: "\u044C",
    sol: "/",
    solb: "\u29C4",
    solbar: "\u233F",
    sopf: "\u{1D564}",
    spades: "\u2660",
    spadesuit: "\u2660",
    sqcaps: "\u2293\uFE00",
    sqcups: "\u2294\uFE00",
    sscr: "\u{1D4C8}",
    star: "\u2606",
    sub: "\u2282",
    subset: "\u2282",
    subE: "\u2AC5",
    subseteqq: "\u2AC5",
    subdot: "\u2ABD",
    subedot: "\u2AC3",
    submult: "\u2AC1",
    subnE: "\u2ACB",
    subsetneqq: "\u2ACB",
    subne: "\u228A",
    subsetneq: "\u228A",
    subplus: "\u2ABF",
    subrarr: "\u2979",
    subsim: "\u2AC7",
    subsub: "\u2AD5",
    subsup: "\u2AD3",
    sung: "\u266A",
    sup1: "\xb9",
    sup2: "\xb2",
    sup3: "\xb3",
    supE: "\u2AC6",
    supseteqq: "\u2AC6",
    supdot: "\u2ABE",
    supdsub: "\u2AD8",
    supedot: "\u2AC4",
    suphsol: "\u27C9",
    suphsub: "\u2AD7",
    suplarr: "\u297B",
    supmult: "\u2AC2",
    supnE: "\u2ACC",
    supsetneqq: "\u2ACC",
    supne: "\u228B",
    supsetneq: "\u228B",
    supplus: "\u2AC0",
    supsim: "\u2AC8",
    supsub: "\u2AD4",
    supsup: "\u2AD6",
    swArr: "\u21D9",
    swnwar: "\u292A",
    szlig: "\xdf",
    target: "\u2316",
    tau: "\u03C4",
    tcaron: "\u0165",
    tcedil: "\u0163",
    tcy: "\u0442",
    telrec: "\u2315",
    tfr: "\u{1D531}",
    theta: "\u03B8",
    thetasym: "\u03D1",
    thetav: "\u03D1",
    vartheta: "\u03D1",
    thorn: "\xfe",
    times: "\xd7",
    timesbar: "\u2A31",
    timesd: "\u2A30",
    topbot: "\u2336",
    topcir: "\u2AF1",
    topf: "\u{1D565}",
    topfork: "\u2ADA",
    tprime: "\u2034",
    triangle: "\u25B5",
    utri: "\u25B5",
    triangleq: "\u225C",
    trie: "\u225C",
    tridot: "\u25EC",
    triminus: "\u2A3A",
    triplus: "\u2A39",
    trisb: "\u29CD",
    tritime: "\u2A3B",
    trpezium: "\u23E2",
    tscr: "\u{1D4C9}",
    tscy: "\u0446",
    tshcy: "\u045B",
    tstrok: "\u0167",
    uHar: "\u2963",
    uacute: "\xfa",
    ubrcy: "\u045E",
    ubreve: "\u016D",
    ucirc: "\xfb",
    ucy: "\u0443",
    udblac: "\u0171",
    ufisht: "\u297E",
    ufr: "\u{1D532}",
    ugrave: "\xf9",
    uhblk: "\u2580",
    ulcorn: "\u231C",
    ulcorner: "\u231C",
    ulcrop: "\u230F",
    ultri: "\u25F8",
    umacr: "\u016B",
    uogon: "\u0173",
    uopf: "\u{1D566}",
    upsi: "\u03C5",
    upsilon: "\u03C5",
    upuparrows: "\u21C8",
    uuarr: "\u21C8",
    urcorn: "\u231D",
    urcorner: "\u231D",
    urcrop: "\u230E",
    uring: "\u016F",
    urtri: "\u25F9",
    uscr: "\u{1D4CA}",
    utdot: "\u22F0",
    utilde: "\u0169",
    uuml: "\xfc",
    uwangle: "\u29A7",
    vBar: "\u2AE8",
    vBarv: "\u2AE9",
    vangrt: "\u299C",
    varsubsetneq: "\u228A\uFE00",
    vsubne: "\u228A\uFE00",
    varsubsetneqq: "\u2ACB\uFE00",
    vsubnE: "\u2ACB\uFE00",
    varsupsetneq: "\u228B\uFE00",
    vsupne: "\u228B\uFE00",
    varsupsetneqq: "\u2ACC\uFE00",
    vsupnE: "\u2ACC\uFE00",
    vcy: "\u0432",
    veebar: "\u22BB",
    veeeq: "\u225A",
    vellip: "\u22EE",
    vfr: "\u{1D533}",
    vopf: "\u{1D567}",
    vscr: "\u{1D4CB}",
    vzigzag: "\u299A",
    wcirc: "\u0175",
    wedbar: "\u2A5F",
    wedgeq: "\u2259",
    weierp: "\u2118",
    wp: "\u2118",
    wfr: "\u{1D534}",
    wopf: "\u{1D568}",
    wscr: "\u{1D4CC}",
    xfr: "\u{1D535}",
    xi: "\u03BE",
    xnis: "\u22FB",
    xopf: "\u{1D569}",
    xscr: "\u{1D4CD}",
    yacute: "\xfd",
    yacy: "\u044F",
    ycirc: "\u0177",
    ycy: "\u044B",
    yen: "\xa5",
    yfr: "\u{1D536}",
    yicy: "\u0457",
    yopf: "\u{1D56A}",
    yscr: "\u{1D4CE}",
    yucy: "\u044E",
    yuml: "\xff",
    zacute: "\u017A",
    zcaron: "\u017E",
    zcy: "\u0437",
    zdot: "\u017C",
    zeta: "\u03B6",
    zfr: "\u{1D537}",
    zhcy: "\u0436",
    zigrarr: "\u21DD",
    zopf: "\u{1D56B}",
    zscr: "\u{1D4CF}",
    zwj: "\u200D",
    zwnj: "\u200C"
  };
  nN.ngsp = "\uE500";
  var nI = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
  var nO = new class e {
    static fromArray(t) {
      return t ? (function (e, t) {
        if (null != t && !(Array.isArray(t) && 2 == t.length)) throw Error(`Expected '${e}' to be an array, [start, end].`);
        if (null != t) {
          let e = t[0];
          let n = t[1];
          nI.forEach(t => {
            if (t.test(e) || t.test(n)) throw Error(`['${e}', '${n}'] contains unusable interpolation symbol.`);
          });
        }
      }("interpolation", t), new e(t[0], t[1])) : nO;
    }
    constructor(e, t) {
      this.start = e;
      this.end = t;
    }
  }("{{", "}}");
  var nB = class extends t$ {
    constructor(e, t, n) {
      super(n, e);
      this.tokenType = t;
    }
  };
  var nj = class {
    constructor(e, t, n) {
      this.tokens = e;
      this.errors = t;
      this.nonNormalizedIcuExpressions = n;
    }
  };
  var nM = /\r\n?/g;
  function nL(e) {
    return `Unexpected character "${0 === e ? "EOF" : String.fromCharCode(e)}"`;
  }
  function nR(e) {
    return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
  }
  (e = t || (t = {})).HEX = "hexadecimal";
  e.DEC = "decimal";
  var nJ = class {
    constructor(e) {
      this.error = e;
    }
  };
  var nq = class {
    constructor(e, t, n) {
      this._getTagContentType = t;
      this._currentTokenStart = null;
      this._currentTokenType = null;
      this._expansionCaseStack = [];
      this._inInterpolation = !1;
      this._fullNameStack = [];
      this.tokens = [];
      this.errors = [];
      this.nonNormalizedIcuExpressions = [];
      this._tokenizeIcu = n.tokenizeExpansionForms || !1;
      this._interpolationConfig = n.interpolationConfig || nO;
      this._leadingTriviaCodePoints = n.leadingTriviaChars && n.leadingTriviaChars.map(e => e.codePointAt(0) || 0);
      this._canSelfClose = n.canSelfClose || !1;
      this._allowHtmComponentClosingTags = n.allowHtmComponentClosingTags || !1;
      let r = n.range || {
        endPos: e.content.length,
        startPos: 0,
        startLine: 0,
        startCol: 0
      };
      this._cursor = n.escapedString ? new nX(e, r) : new nG(e, r);
      this._preserveLineEndings = n.preserveLineEndings || !1;
      this._i18nNormalizeLineEndingsInICUs = n.i18nNormalizeLineEndingsInICUs || !1;
      this._tokenizeBlocks = n.tokenizeBlocks ?? !0;
      try {
        this._cursor.init();
      } catch (e) {
        this.handleError(e);
      }
    }
    _processCarriageReturns(e) {
      return this._preserveLineEndings ? e : e.replace(nM, `
`);
    }
    tokenize() {
      for (; 0 !== this._cursor.peek();) {
        let e = this._cursor.clone();
        try {
          if (this._attemptCharCode(60)) {
            if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);else if (this._attemptCharCode(47)) this._consumeTagClose(e);else {
              let t = this._cursor.clone();
              this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
            }
          } else this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
        } catch (e) {
          this.handleError(e);
        }
      }
      this._beginToken(30);
      this._endToken([]);
    }
    _getBlockName() {
      let e = !1;
      let t = this._cursor.clone();
      this._attemptCharCodeUntilFn(t => tj(t) ? !e : !n$(t) || (e = !0, !1));
      return this._cursor.getChars(t).trim();
    }
    _consumeBlockStart(e) {
      this._beginToken(25, e);
      let t = this._endToken([this._getBlockName()]);
      if (40 === this._cursor.peek()) {
        if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(nU), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(nU);else {
          t.type = 29;
          return;
        }
      }
      this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : t.type = 29;
    }
    _consumeBlockEnd(e) {
      this._beginToken(27, e);
      this._endToken([]);
    }
    _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(nH); 41 !== this._cursor.peek() && 0 !== this._cursor.peek();) {
        this._beginToken(28);
        let e = this._cursor.clone();
        let t = null;
        let n = 0;
        for (; 59 !== this._cursor.peek() && 0 !== this._cursor.peek() || null !== t;) {
          let e = this._cursor.peek();
          if (92 === e) this._cursor.advance();else if (e === t) t = null;else if (null === t && tq(e)) t = e;else if (40 === e && null === t) n++;else if (41 === e && null === t) {
            if (0 === n) break;
            n > 0 && n--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]);
        this._attemptCharCodeUntilFn(nH);
      }
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) {
        this._consumeExpansionFormStart();
        return !0;
      }
      if (125 !== this._cursor.peek() && this._isInExpansionForm()) {
        this._consumeExpansionCaseStart();
        return !0;
      }
      if (125 === this._cursor.peek()) {
        if (this._isInExpansionCase()) {
          this._consumeExpansionCaseEnd();
          return !0;
        }
        if (this._isInExpansionForm()) {
          this._consumeExpansionFormEnd();
          return !0;
        }
      }
      return !1;
    }
    _beginToken(e, t = this._cursor.clone()) {
      this._currentTokenStart = t;
      this._currentTokenType = e;
    }
    _endToken(e, t) {
      if (null === this._currentTokenStart) throw new nB("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(t));
      if (null === this._currentTokenType) throw new nB("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
      let n = {
        type: this._currentTokenType,
        parts: e,
        sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints)
      };
      this.tokens.push(n);
      this._currentTokenStart = null;
      this._currentTokenType = null;
      return n;
    }
    _createError(e, t) {
      this._isInExpansionForm() && (e += ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
      let n = new nB(e, this._currentTokenType, t);
      this._currentTokenStart = null;
      this._currentTokenType = null;
      return new nJ(n);
    }
    handleError(e) {
      if (e instanceof nY && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof nJ) this.errors.push(e.error);else throw e;
    }
    _attemptCharCode(e) {
      return this._cursor.peek() === e && (this._cursor.advance(), !0);
    }
    _attemptCharCodeCaseInsensitive(e) {
      return nV(this._cursor.peek()) === nV(e) && (this._cursor.advance(), !0);
    }
    _requireCharCode(e) {
      let t = this._cursor.clone();
      if (!this._attemptCharCode(e)) throw this._createError(nL(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let n = this._cursor.clone();
      for (let r = 0; r < t; r++) if (!this._attemptCharCode(e.charCodeAt(r))) {
        this._cursor = n;
        return !1;
      }
      return !0;
    }
    _attemptStrCaseInsensitive(e) {
      for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
      return !0;
    }
    _requireStr(e) {
      let t = this._cursor.clone();
      if (!this._attemptStr(e)) throw this._createError(nL(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _requireStrCaseInsensitive(e) {
      let t = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(nL(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek());) this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, t) {
      let n = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(e), this._cursor.diff(n) < t) throw this._createError(nL(this._cursor.peek()), this._cursor.getSpan(n));
    }
    _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e;) this._cursor.advance();
    }
    _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      this._cursor.advance();
      return e;
    }
    _consumeEntity(e) {
      this._beginToken(9);
      let n = this._cursor.clone();
      if (this._cursor.advance(), this._attemptCharCode(35)) {
        let e = this._attemptCharCode(120) || this._attemptCharCode(88);
        let i = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(nK), 59 != this._cursor.peek()) {
          var r;
          this._cursor.advance();
          let i = e ? t.HEX : t.DEC;
          throw this._createError((r = this._cursor.getChars(n), `Unable to parse entity "${r}" - ${i} character reference entities must end with ";"`), this._cursor.getSpan());
        }
        let a = this._cursor.getChars(i);
        this._cursor.advance();
        try {
          let t = parseInt(a, e ? 16 : 10);
          this._endToken([String.fromCharCode(t), this._cursor.getChars(n)]);
        } catch {
          throw this._createError(nR(this._cursor.getChars(n)), this._cursor.getSpan());
        }
      } else {
        let t = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(nW), 59 != this._cursor.peek()) {
          this._beginToken(e, n);
          this._cursor = t;
          this._endToken(["&"]);
        } else {
          let e = this._cursor.getChars(t);
          this._cursor.advance();
          let r = nN[e];
          if (!r) throw this._createError(nR(e), this._cursor.getSpan(n));
          this._endToken([r, `&${e};`]);
        }
      }
    }
    _consumeRawText(e, t) {
      this._beginToken(e ? 6 : 7);
      let n = [];
      for (;;) {
        let r = this._cursor.clone();
        let i = t();
        if (this._cursor = r, i) break;
        e && 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(n.join(""))]), n.length = 0, this._consumeEntity(6), this._beginToken(6)) : n.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(n.join(""))]);
    }
    _consumeComment(e) {
      this._beginToken(10, e);
      this._endToken([]);
      this._consumeRawText(!1, () => this._attemptStr("--\x3e"));
      this._beginToken(11);
      this._requireStr("--\x3e");
      this._endToken([]);
    }
    _consumeBogusComment(e) {
      this._beginToken(10, e);
      this._endToken([]);
      this._consumeRawText(!1, () => 62 === this._cursor.peek());
      this._beginToken(11);
      this._cursor.advance();
      this._endToken([]);
    }
    _consumeCdata(e) {
      this._beginToken(12, e);
      this._endToken([]);
      this._consumeRawText(!1, () => this._attemptStr("]]>"));
      this._beginToken(13);
      this._requireStr("]]>");
      this._endToken([]);
    }
    _consumeDocType(e) {
      this._beginToken(18, e);
      this._endToken([]);
      this._consumeRawText(!1, () => 62 === this._cursor.peek());
      this._beginToken(19);
      this._cursor.advance();
      this._endToken([]);
    }
    _consumePrefixAndName() {
      var e;
      let t;
      let n = this._cursor.clone();
      let r = "";
      for (; 58 !== this._cursor.peek() && !(((e = this._cursor.peek()) < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57));) this._cursor.advance();
      58 === this._cursor.peek() ? (r = this._cursor.getChars(n), this._cursor.advance(), t = this._cursor.clone()) : t = n;
      this._requireCharCodeUntilFn(nz, "" === r ? 0 : 1);
      return [r, this._cursor.getChars(t)];
    }
    _consumeTagOpen(e) {
      let t;
      let n;
      let r;
      let i = [];
      try {
        if (!tL(this._cursor.peek())) throw this._createError(nL(this._cursor.peek()), this._cursor.getSpan(e));
        for (n = (r = this._consumeTagOpenStart(e)).parts[0], t = r.parts[1], this._attemptCharCodeUntilFn(nU); 47 !== this._cursor.peek() && 62 !== this._cursor.peek() && 60 !== this._cursor.peek() && 0 !== this._cursor.peek();) {
          let [e, t] = this._consumeAttributeName();
          if (this._attemptCharCodeUntilFn(nU), this._attemptCharCode(61)) {
            this._attemptCharCodeUntilFn(nU);
            let n = this._consumeAttributeValue();
            i.push({
              prefix: e,
              name: t,
              value: n
            });
          } else i.push({
            prefix: e,
            name: t
          });
          this._attemptCharCodeUntilFn(nU);
        }
        this._consumeTagOpenEnd();
      } catch (t) {
        if (t instanceof nJ) {
          r ? r.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
          return;
        }
        throw t;
      }
      if (this._canSelfClose && 2 === this.tokens[this.tokens.length - 1].type) return;
      let a = this._getTagContentType(t, n, this._fullNameStack.length > 0, i);
      this._handleFullNameStackForTagOpen(n, t);
      a === n_.RAW_TEXT ? this._consumeRawTextWithTagClose(n, t, !1) : a === n_.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, t, !0);
    }
    _consumeRawTextWithTagClose(e, t, n) {
      this._consumeRawText(n, () => !!(this._attemptCharCode(60) && this._attemptCharCode(47) && (this._attemptCharCodeUntilFn(nU), this._attemptStrCaseInsensitive(e ? `${e}:${t}` : t))) && (this._attemptCharCodeUntilFn(nU), this._attemptCharCode(62)));
      this._beginToken(3);
      this._requireCharCodeUntilFn(e => 62 === e, 3);
      this._cursor.advance();
      this._endToken([e, t]);
      this._handleFullNameStackForTagClose(e, t);
    }
    _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let t = this._consumePrefixAndName();
      return this._endToken(t);
    }
    _consumeAttributeName() {
      let e = this._cursor.peek();
      if (39 === e || 34 === e) throw this._createError(nL(e), this._cursor.getSpan());
      this._beginToken(14);
      let t = this._consumePrefixAndName();
      this._endToken(t);
      return t;
    }
    _consumeAttributeValue() {
      let e;
      if (39 === this._cursor.peek() || 34 === this._cursor.peek()) {
        let t = this._cursor.peek();
        this._consumeQuote(t);
        let n = () => this._cursor.peek() === t;
        e = this._consumeWithInterpolation(16, 17, n, n);
        this._consumeQuote(t);
      } else {
        let t = () => nz(this._cursor.peek());
        e = this._consumeWithInterpolation(16, 17, t, t);
      }
      return e;
    }
    _consumeQuote(e) {
      this._beginToken(15);
      this._requireCharCode(e);
      this._endToken([String.fromCodePoint(e)]);
    }
    _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e);
      this._requireCharCode(62);
      this._endToken([]);
    }
    _consumeTagClose(e) {
      if (this._beginToken(3, e), this._attemptCharCodeUntilFn(nU), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) {
        this._attemptCharCodeUntilFn(nU);
        this._requireCharCode(62);
        this._endToken([]);
      } else {
        let [e, t] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(nU);
        this._requireCharCode(62);
        this._endToken([e, t]);
        this._handleFullNameStackForTagClose(e, t);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20);
      this._requireCharCode(123);
      this._endToken([]);
      this._expansionCaseStack.push(20);
      this._beginToken(7);
      let e = this._readUntil(44);
      let t = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);else {
        let n = this._endToken([e]);
        t !== e && this.nonNormalizedIcuExpressions.push(n);
      }
      this._requireCharCode(44);
      this._attemptCharCodeUntilFn(nU);
      this._beginToken(7);
      let n = this._readUntil(44);
      this._endToken([n]);
      this._requireCharCode(44);
      this._attemptCharCodeUntilFn(nU);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]);
      this._attemptCharCodeUntilFn(nU);
      this._beginToken(22);
      this._requireCharCode(123);
      this._endToken([]);
      this._attemptCharCodeUntilFn(nU);
      this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23);
      this._requireCharCode(125);
      this._endToken([]);
      this._attemptCharCodeUntilFn(nU);
      this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24);
      this._requireCharCode(125);
      this._endToken([]);
      this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, t, n, r) {
      this._beginToken(e);
      let i = [];
      for (; !n();) {
        let n = this._cursor.clone();
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], n), i.length = 0, this._consumeInterpolation(t, n, r), this._beginToken(e)) : 38 === this._cursor.peek() ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e), this._beginToken(e)) : i.push(this._readChar());
      }
      this._inInterpolation = !1;
      let a = this._processCarriageReturns(i.join(""));
      this._endToken([a]);
      return a;
    }
    _consumeInterpolation(e, t, n) {
      let r = [];
      this._beginToken(e, t);
      r.push(this._interpolationConfig.start);
      let i = this._cursor.clone();
      let a = null;
      let o = !1;
      for (; 0 !== this._cursor.peek() && (null === n || !n());) {
        let e = this._cursor.clone();
        if (this._isTagStart()) {
          this._cursor = e;
          r.push(this._getProcessedChars(i, e));
          this._endToken(r);
          return;
        }
        if (null === a) {
          if (this._attemptStr(this._interpolationConfig.end)) {
            r.push(this._getProcessedChars(i, e));
            r.push(this._interpolationConfig.end);
            this._endToken(r);
            return;
          }
          this._attemptStr("//") && (o = !0);
        }
        let t = this._cursor.peek();
        this._cursor.advance();
        92 === t ? this._cursor.advance() : t === a ? a = null : !o && null === a && tq(t) && (a = t);
      }
      r.push(this._getProcessedChars(i, this._cursor));
      this._endToken(r);
    }
    _getProcessedChars(e, t) {
      return this._processCarriageReturns(t.getChars(e));
    }
    _isTextEnd() {
      return !!(this._isTagStart() || 0 === this._cursor.peek() || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || 125 === this._cursor.peek() && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || 125 === this._cursor.peek()));
    }
    _isTagStart() {
      if (60 === this._cursor.peek()) {
        let e = this._cursor.clone();
        e.advance();
        let t = e.peek();
        if (97 <= t && t <= 122 || 65 <= t && t <= 90 || 47 === t || 33 === t) return !0;
      }
      return !1;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && 64 === this._cursor.peek()) {
        let e = this._cursor.clone();
        if (e.advance(), n$(e.peek())) return !0;
      }
      return !1;
    }
    _readUntil(e) {
      let t = this._cursor.clone();
      this._attemptUntilChar(e);
      return this._cursor.getChars(t);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && 22 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && 20 === this._expansionCaseStack[this._expansionCaseStack.length - 1];
    }
    isExpansionFormStart() {
      if (123 !== this._cursor.peek()) return !1;
      if (this._interpolationConfig) {
        let e = this._cursor.clone();
        let t = this._attemptStr(this._interpolationConfig.start);
        this._cursor = e;
        return !t;
      }
      return !0;
    }
    _handleFullNameStackForTagOpen(e, t) {
      let n = t4(e, t);
      (0 === this._fullNameStack.length || this._fullNameStack[this._fullNameStack.length - 1] === n) && this._fullNameStack.push(n);
    }
    _handleFullNameStackForTagClose(e, t) {
      let n = t4(e, t);
      0 !== this._fullNameStack.length && this._fullNameStack[this._fullNameStack.length - 1] === n && this._fullNameStack.pop();
    }
  };
  function nU(e) {
    return !tj(e) || 0 === e;
  }
  function nz(e) {
    return tj(e) || 62 === e || 60 === e || 47 === e || 39 === e || 34 === e || 61 === e || 0 === e;
  }
  function nK(e) {
    return 59 === e || 0 === e || !(e >= 97 && e <= 102 || e >= 65 && e <= 70 || tM(e));
  }
  function nW(e) {
    return 59 === e || 0 === e || !tL(e);
  }
  function nV(e) {
    return e >= 97 && e <= 122 ? e - 97 + 65 : e;
  }
  function n$(e) {
    return tL(e) || tM(e) || 95 === e;
  }
  function nH(e) {
    return 59 !== e && nU(e);
  }
  var nG = class e {
    constructor(t, n) {
      if (t instanceof e) {
        this.file = t.file;
        this.input = t.input;
        this.end = t.end;
        let e = t.state;
        this.state = {
          peek: e.peek,
          offset: e.offset,
          line: e.line,
          column: e.column
        };
      } else {
        if (!n) throw Error("Programming error: the range argument must be provided with a file argument.");
        this.file = t;
        this.input = t.content;
        this.end = n.endPos;
        this.state = {
          peek: -1,
          offset: n.startPos,
          line: n.startLine,
          column: n.startCol
        };
      }
    }
    clone() {
      return new e(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(e) {
      return this.state.offset - e.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(e, t) {
      let n = e = e || this;
      if (t) for (; this.diff(e) > 0 && -1 !== t.indexOf(e.peek());) {
        n === e && (e = e.clone());
        e.advance();
      }
      let r = this.locationFromCursor(e);
      let i = this.locationFromCursor(this);
      let a = n !== e ? this.locationFromCursor(n) : r;
      return new tV(r, i, a);
    }
    getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
    }
    charAt(e) {
      return this.input.charCodeAt(e);
    }
    advanceState(e) {
      if (e.offset >= this.end) {
        this.state = e;
        return new nY('Unexpected character "EOF"', this);
      }
      let t = this.charAt(e.offset);
      10 === t ? (e.line++, e.column = 0) : tR(t) || e.column++;
      e.offset++;
      this.updatePeek(e);
    }
    updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
    }
    locationFromCursor(e) {
      return new tK(e.file, e.state.offset, e.state.line, e.state.column);
    }
  };
  var nX = class e extends nG {
    constructor(t, n) {
      t instanceof e ? (super(t), this.internalState = {
        ...t.internalState
      }) : (super(t, n), this.internalState = this.state);
    }
    advance() {
      this.state = this.internalState;
      super.advance();
      this.processEscapeSequence();
    }
    init() {
      super.init();
      this.processEscapeSequence();
    }
    clone() {
      return new e(this);
    }
    getChars(e) {
      let t = e.clone();
      let n = "";
      for (; t.internalState.offset < this.internalState.offset;) {
        n += String.fromCodePoint(t.peek());
        t.advance();
      }
      return n;
    }
    processEscapeSequence() {
      let e = () => this.internalState.peek;
      if (92 === e()) {
        if (this.internalState = {
          ...this.state
        }, this.advanceState(this.internalState), 110 === e()) this.state.peek = 10;else if (114 === e()) this.state.peek = 13;else if (118 === e()) this.state.peek = 11;else if (116 === e()) this.state.peek = 9;else if (98 === e()) this.state.peek = 8;else if (102 === e()) this.state.peek = 12;else if (117 === e()) {
          if (this.advanceState(this.internalState), 123 === e()) {
            this.advanceState(this.internalState);
            let t = this.clone();
            let n = 0;
            for (; 125 !== e();) {
              this.advanceState(this.internalState);
              n++;
            }
            this.state.peek = this.decodeHexDigits(t, n);
          } else {
            let e = this.clone();
            this.advanceState(this.internalState);
            this.advanceState(this.internalState);
            this.advanceState(this.internalState);
            this.state.peek = this.decodeHexDigits(e, 4);
          }
        } else if (120 === e()) {
          this.advanceState(this.internalState);
          let e = this.clone();
          this.advanceState(this.internalState);
          this.state.peek = this.decodeHexDigits(e, 2);
        } else if (tJ(e())) {
          let t = "";
          let n = 0;
          let r = this.clone();
          for (; tJ(e()) && n < 3;) {
            r = this.clone();
            t += String.fromCodePoint(e());
            this.advanceState(this.internalState);
            n++;
          }
          this.state.peek = parseInt(t, 8);
          this.internalState = r.internalState;
        } else tR(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
      }
    }
    decodeHexDigits(e, t) {
      let n = parseInt(this.input.slice(e.internalState.offset, e.internalState.offset + t), 16);
      if (isNaN(n)) {
        e.state = e.internalState;
        return new nY("Invalid hexadecimal escape sequence", e);
      }
      return n;
    }
  };
  var nY = class {
    constructor(e, t) {
      this.msg = e;
      this.cursor = t;
    }
  };
  var nQ = class e extends t$ {
    static create(t, n, r) {
      return new e(t, n, r);
    }
    constructor(e, t, n) {
      super(t, n);
      this.elementName = e;
    }
  };
  var nZ = class {
    constructor(e, t) {
      this.rootNodes = e;
      this.errors = t;
    }
  };
  var n0 = class {
    constructor(e) {
      this.getTagDefinition = e;
    }
    parse(e, t, n, r = !1, i) {
      let a = e => (t, ...n) => e(t.toLowerCase(), ...n);
      let o = r ? this.getTagDefinition : a(this.getTagDefinition);
      let s = e => o(e).getContentType();
      let _ = r ? i : a(i);
      let l = function (e, t, n, r = {}) {
        let i = new nq(new tW(e, t), n, r);
        i.tokenize();
        return new nj(function (e) {
          let t = [];
          let n;
          for (let r = 0; r < e.length; r++) {
            let i = e[r];
            n && 5 === n.type && 5 === i.type || n && 16 === n.type && 16 === i.type ? (n.parts[0] += i.parts[0], n.sourceSpan.end = i.sourceSpan.end) : (n = i, t.push(n));
          }
          return t;
        }(i.tokens), i.errors, i.nonNormalizedIcuExpressions);
      }(e, t, i ? (e, t, n, r) => {
        let i = _(e, t, n, r);
        return void 0 !== i ? i : s(e);
      } : s, n);
      let u = n && n.canSelfClose || !1;
      let c = n && n.allowHtmComponentClosingTags || !1;
      let p = new n1(l.tokens, o, u, c, r);
      p.build();
      return new nZ(p.rootNodes, l.errors.concat(p.errors));
    }
  };
  var n1 = class e {
    constructor(e, t, n, r, i) {
      this.tokens = e;
      this.getTagDefinition = t;
      this.canSelfClose = n;
      this.allowHtmComponentClosingTags = r;
      this.isTagNameCaseSensitive = i;
      this._index = -1;
      this._containerStack = [];
      this.rootNodes = [];
      this.errors = [];
      this._advance();
    }
    build() {
      for (; 30 !== this._peek.type;) 0 === this._peek.type || 4 === this._peek.type ? this._consumeStartTag(this._advance()) : 3 === this._peek.type ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : 12 === this._peek.type ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : 10 === this._peek.type ? (this._closeVoidElement(), this._consumeComment(this._advance())) : 5 === this._peek.type || 7 === this._peek.type || 6 === this._peek.type ? (this._closeVoidElement(), this._consumeText(this._advance())) : 20 === this._peek.type ? this._consumeExpansion(this._advance()) : 25 === this._peek.type ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : 27 === this._peek.type ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : 29 === this._peek.type ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : 18 === this._peek.type ? this._consumeDocType(this._advance()) : this._advance();
      for (let e of this._containerStack) e instanceof nA && this.errors.push(nQ.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
    }
    _advance() {
      let e = this._peek;
      this._index < this.tokens.length - 1 && this._index++;
      this._peek = this.tokens[this._index];
      return e;
    }
    _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
    }
    _consumeCdata(e) {
      let t = this._advance();
      let n = this._getText(t);
      let r = this._advanceIf(13);
      this._addToParent(new nx(n, new tV(e.sourceSpan.start, (r || t).sourceSpan.end), [t]));
    }
    _consumeComment(e) {
      let t = this._advanceIf(7);
      let n = this._advanceIf(11);
      let r = null != t ? t.parts[0].trim() : null;
      let i = new tV(e.sourceSpan.start, (n || t || e).sourceSpan.end);
      this._addToParent(new nE(r, i));
    }
    _consumeDocType(e) {
      let t = this._advanceIf(7);
      let n = this._advanceIf(19);
      let r = null != t ? t.parts[0].trim() : null;
      let i = new tV(e.sourceSpan.start, (n || t || e).sourceSpan.end);
      this._addToParent(new nw(r, i));
    }
    _consumeExpansion(e) {
      let t = this._advance();
      let n = this._advance();
      let r = [];
      for (; 21 === this._peek.type;) {
        let e = this._parseExpansionCase();
        if (!e) return;
        r.push(e);
      }
      if (24 !== this._peek.type) {
        this.errors.push(nQ.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
      }
      let i = new tV(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new nv(t.parts[0], n.parts[0], r, i, t.sourceSpan));
      this._advance();
    }
    _parseExpansionCase() {
      let t = this._advance();
      if (22 !== this._peek.type) {
        this.errors.push(nQ.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'."));
        return null;
      }
      let n = this._advance();
      let r = this._collectExpansionExpTokens(n);
      if (!r) return null;
      let i = this._advance();
      r.push({
        type: 30,
        parts: [],
        sourceSpan: i.sourceSpan
      });
      let a = new e(r, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if (a.build(), a.errors.length > 0) {
        this.errors = this.errors.concat(a.errors);
        return null;
      }
      let o = new tV(t.sourceSpan.start, i.sourceSpan.end, t.sourceSpan.fullStart);
      let s = new tV(n.sourceSpan.start, i.sourceSpan.end, n.sourceSpan.fullStart);
      return new nT(t.parts[0], a.rootNodes, o, t.sourceSpan, s);
    }
    _collectExpansionExpTokens(e) {
      let t = [];
      let n = [22];
      for (;;) {
        if ((20 === this._peek.type || 22 === this._peek.type) && n.push(this._peek.type), 23 === this._peek.type) {
          if (!n2(n, 22)) {
            this.errors.push(nQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'."));
            return null;
          }
          if (n.pop(), 0 === n.length) return t;
        }
        if (24 === this._peek.type) {
          if (!n2(n, 20)) {
            this.errors.push(nQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'."));
            return null;
          }
          n.pop();
        }
        if (30 === this._peek.type) {
          this.errors.push(nQ.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'."));
          return null;
        }
        t.push(this._advance());
      }
    }
    _getText(e) {
      let t = e.parts[0];
      if (t.length > 0 && t[0] == `
`) {
        let e = this._getClosestParentElement();
        null != e && 0 == e.children.length && this.getTagDefinition(e.name).ignoreFirstLf && (t = t.substring(1));
      }
      return t;
    }
    _consumeText(e) {
      let t = [e];
      let n = e.sourceSpan;
      let r = e.parts[0];
      if (r.length > 0 && r[0] === `
`) {
        let n = this._getContainer();
        null != n && 0 === n.children.length && this.getTagDefinition(n.name).ignoreFirstLf && (r = r.substring(1), t[0] = {
          type: e.type,
          sourceSpan: e.sourceSpan,
          parts: [r]
        });
      }
      for (; 8 === this._peek.type || 5 === this._peek.type || 9 === this._peek.type;) {
        e = this._advance();
        t.push(e);
        8 === e.type ? r += e.parts.join("").replace(/&([^;]+);/g, n3) : 9 === e.type ? r += e.parts[0] : r += e.parts.join("");
      }
      if (r.length > 0) {
        let i = e.sourceSpan;
        this._addToParent(new nD(r, new tV(n.start, i.end, n.fullStart, n.details), t));
      }
    }
    _closeVoidElement() {
      let e = this._getContainer();
      e instanceof nC && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
    }
    _consumeStartTag(e) {
      let [t, n] = e.parts;
      let r = [];
      for (; 14 === this._peek.type;) r.push(this._consumeAttr(this._advance()));
      let i = this._getElementFullName(t, n, this._getClosestParentElement());
      let a = !1;
      if (2 === this._peek.type) {
        this._advance();
        a = !0;
        let t = this.getTagDefinition(i);
        this.canSelfClose || t.canSelfClose || null !== t6(i) || t.isVoid || this.errors.push(nQ.create(i, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
      } else 1 === this._peek.type && (this._advance(), a = !1);
      let o = this._peek.sourceSpan.fullStart;
      let s = new tV(e.sourceSpan.start, o, e.sourceSpan.fullStart);
      let _ = new nC(i, r, [], s, new tV(e.sourceSpan.start, o, e.sourceSpan.fullStart), void 0, new tV(e.sourceSpan.start.moveBy(1), e.sourceSpan.end));
      let l = this._getContainer();
      this._pushContainer(_, l instanceof nC && this.getTagDefinition(l.name).isClosedByChild(_.name));
      a ? this._popContainer(i, nC, s) : 4 === e.type && (this._popContainer(i, nC, null), this.errors.push(nQ.create(i, s, `Opening tag "${i}" not terminated.`)));
    }
    _pushContainer(e, t) {
      t && this._containerStack.pop();
      this._addToParent(e);
      this._containerStack.push(e);
    }
    _consumeEndTag(e) {
      let t = this.allowHtmComponentClosingTags && 0 === e.parts.length ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
      if (t && this.getTagDefinition(t).isVoid) this.errors.push(nQ.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));else if (!this._popContainer(t, nC, e.sourceSpan)) {
        let n = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(nQ.create(t, e.sourceSpan, n));
      }
    }
    _popContainer(e, t, n) {
      let r = !1;
      for (let i = this._containerStack.length - 1; i >= 0; i--) {
        let a = this._containerStack[i];
        if (t6(a.name) ? a.name === e : (null == e || a.name.toLowerCase() === e.toLowerCase()) && a instanceof t) {
          a.endSourceSpan = n;
          a.sourceSpan.end = null !== n ? n.end : a.sourceSpan.end;
          this._containerStack.splice(i, this._containerStack.length - i);
          return !r;
        }
        (a instanceof nA || a instanceof nC && !this.getTagDefinition(a.name).closedByParent) && (r = !0);
      }
      return !1;
    }
    _consumeAttr(e) {
      let t = t4(e.parts[0], e.parts[1]);
      let n = e.sourceSpan.end;
      let r;
      15 === this._peek.type && (r = this._advance());
      let i = "";
      let a = [];
      let o;
      let s;
      if (16 === this._peek.type) for (o = this._peek.sourceSpan, s = this._peek.sourceSpan.end; 16 === this._peek.type || 17 === this._peek.type || 9 === this._peek.type;) {
        let e = this._advance();
        a.push(e);
        17 === e.type ? i += e.parts.join("").replace(/&([^;]+);/g, n3) : 9 === e.type ? i += e.parts[0] : i += e.parts.join("");
        s = n = e.sourceSpan.end;
      }
      15 === this._peek.type && (s = n = this._advance().sourceSpan.end);
      let _ = o && s && new tV(r?.sourceSpan.start ?? o.start, s, r?.sourceSpan.fullStart ?? o.fullStart);
      return new nS(t, i, new tV(e.sourceSpan.start, n, e.sourceSpan.fullStart), e.sourceSpan, _, a.length > 0 ? a : void 0, void 0);
    }
    _consumeBlockOpen(e) {
      let t = [];
      for (; 28 === this._peek.type;) {
        let e = this._advance();
        t.push(new nk(e.parts[0], e.sourceSpan));
      }
      26 === this._peek.type && this._advance();
      let n = this._peek.sourceSpan.fullStart;
      let r = new tV(e.sourceSpan.start, n, e.sourceSpan.fullStart);
      let i = new tV(e.sourceSpan.start, n, e.sourceSpan.fullStart);
      let a = new nA(e.parts[0], t, [], r, i);
      this._pushContainer(a, !1);
    }
    _consumeBlockClose(e) {
      this._popContainer(null, nA, e.sourceSpan) || this.errors.push(nQ.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
    }
    _consumeIncompleteBlock(e) {
      let t = [];
      for (; 28 === this._peek.type;) {
        let e = this._advance();
        t.push(new nk(e.parts[0], e.sourceSpan));
      }
      let n = this._peek.sourceSpan.fullStart;
      let r = new tV(e.sourceSpan.start, n, e.sourceSpan.fullStart);
      let i = new tV(e.sourceSpan.start, n, e.sourceSpan.fullStart);
      let a = new nA(e.parts[0], t, [], r, i);
      this._pushContainer(a, !1);
      this._popContainer(null, nA, null);
      this.errors.push(nQ.create(e.parts[0], r, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
    }
    _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
    }
    _getClosestParentElement() {
      for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof nC) return this._containerStack[e];
      return null;
    }
    _addToParent(e) {
      let t = this._getContainer();
      t?.children.push(e);
    }
    _getElementFullName(e, t, n) {
      if ("" === e && "" === (e = this.getTagDefinition(t).implicitNamespacePrefix || "") && null != n) {
        let t = t1(n.name)[1];
        this.getTagDefinition(t).preventNamespaceInheritance || (e = t6(n.name));
      }
      return t4(e, t);
    }
  };
  function n2(e, t) {
    return e.length > 0 && e[e.length - 1] === t;
  }
  function n3(e, t) {
    return void 0 !== nN[t] ? nN[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
  }
  var n6 = class extends n0 {
    constructor() {
      super(ng);
    }
    parse(e, t, n, r = !1, i) {
      return super.parse(e, t, n, r, i);
    }
  };
  var n4 = null;
  var n8 = () => (n4 || (n4 = new n6()), n4);
  function n5(e, t = {}) {
    let {
      canSelfClose = !1,
      allowHtmComponentClosingTags = !1,
      isTagNameCaseSensitive = !1,
      getTagContentType,
      tokenizeAngularBlocks = !1
    } = t;
    return n8().parse(e, "angular-html-parser", {
      tokenizeExpansionForms: tokenizeAngularBlocks,
      interpolationConfig: void 0,
      canSelfClose,
      allowHtmComponentClosingTags,
      tokenizeBlocks: tokenizeAngularBlocks
    }, isTagNameCaseSensitive, getTagContentType);
  }
  var n7 = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
  var n9 = function (e) {
    let t = e.match(n7);
    if (!t) return {
      content: e
    };
    let {
      startDelimiter,
      language,
      value = "",
      endDelimiter
    } = t.groups;
    let o = language.trim() || "yaml";
    if ("+++" === startDelimiter && (o = "toml"), "yaml" !== o && startDelimiter !== endDelimiter) return {
      content: e
    };
    let [s] = t;
    return {
      frontMatter: {
        type: "front-matter",
        lang: o,
        value,
        startDelimiter,
        endDelimiter,
        raw: s.replace(/\n$/, "")
      },
      content: p(!1, s, /[^\n]/g, " ") + e.slice(s.length)
    };
  };
  var re = {
    attrs: !0,
    children: !0,
    cases: !0,
    expression: !0
  };
  var rt = new Set(["parent"]);
  var rn = class e {
    constructor(e = {}) {
      for (let t of new Set([...rt, ...Object.keys(e)])) this.setProperty(t, e[t]);
    }
    setProperty(e, t) {
      if (this[e] !== t) {
        if (e in re && (t = t.map(e => this.createChild(e))), !rt.has(e)) {
          this[e] = t;
          return;
        }
        Object.defineProperty(this, e, {
          value: t,
          enumerable: !1,
          configurable: !0
        });
      }
    }
    map(t) {
      let n;
      for (let r in re) {
        let i = this[r];
        if (i) {
          let a = function (e, t) {
            let n = e.map(t);
            return n.some((t, n) => t !== e[n]) ? n : e;
          }(i, e => e.map(t));
          n !== i && (n || (n = new e({
            parent: this.parent
          })), n.setProperty(r, a));
        }
      }
      if (n) for (let e in this) e in re || (n[e] = this[e]);
      return t(n || this);
    }
    walk(e) {
      for (let t in re) {
        let n = this[t];
        if (n) for (let t = 0; t < n.length; t++) n[t].walk(e);
      }
      e(this);
    }
    createChild(t) {
      let n = t instanceof e ? t.clone() : new e(t);
      n.setProperty("parent", this);
      return n;
    }
    insertChildBefore(e, t) {
      this.children.splice(this.children.indexOf(e), 0, this.createChild(t));
    }
    removeChild(e) {
      this.children.splice(this.children.indexOf(e), 1);
    }
    replaceChild(e, t) {
      this.children[this.children.indexOf(e)] = this.createChild(t);
    }
    clone() {
      return new e(this);
    }
    get firstChild() {
      var e;
      return null == (e = this.children) ? void 0 : e[0];
    }
    get lastChild() {
      var e;
      return null == (e = this.children) ? void 0 : e[this.children.length - 1];
    }
    get prev() {
      var e;
      var t;
      return null == (t = null == (e = this.parent) ? void 0 : e.children) ? void 0 : t[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var e;
      var t;
      return null == (t = null == (e = this.parent) ? void 0 : e.children) ? void 0 : t[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map(e => [e.fullName, e.value]));
    }
  };
  var rr = [{
    regex: /^(\[if([^\]]*)]>)(.*?)<!\s*\[endif]$/s,
    parse: function (e, t, n) {
      let [, r, i, a] = n;
      let o = 4 + r.length;
      let s = e.sourceSpan.start.moveBy(o);
      let _ = s.moveBy(a.length);
      let [l, u] = (() => {
        try {
          return [!0, t(a, s).children];
        } catch {
          return [!1, [{
            type: "text",
            value: a,
            sourceSpan: new tV(s, _)
          }]];
        }
      })();
      return {
        type: "ieConditionalComment",
        complete: l,
        children: u,
        condition: p(!1, i.trim(), /\s+/g, " "),
        sourceSpan: e.sourceSpan,
        startSourceSpan: new tV(e.sourceSpan.start, s),
        endSourceSpan: new tV(_, e.sourceSpan.end)
      };
    }
  }, {
    regex: /^\[if([^\]]*)]><!$/,
    parse: function (e, t, n) {
      let [, r] = n;
      return {
        type: "ieConditionalStartComment",
        condition: p(!1, r.trim(), /\s+/g, " "),
        sourceSpan: e.sourceSpan
      };
    }
  }, {
    regex: /^<!\s*\[endif]$/,
    parse: function (e) {
      return {
        type: "ieConditionalEndComment",
        sourceSpan: e.sourceSpan
      };
    }
  }];
  var ri = new Map([["*", new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate"])], ["a", new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", new Set(["href", "target"])], ["basefont", new Set(["color", "face", "size"])], ["blockquote", new Set(["cite"])], ["body", new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", new Set(["clear"])], ["button", new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", new Set(["height", "width"])], ["caption", new Set(["align"])], ["col", new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", new Set(["value"])], ["del", new Set(["cite", "datetime"])], ["details", new Set(["name", "open"])], ["dialog", new Set(["open"])], ["dir", new Set(["compact"])], ["div", new Set(["align"])], ["dl", new Set(["compact"])], ["embed", new Set(["height", "src", "type", "width"])], ["fieldset", new Set(["disabled", "form", "name"])], ["font", new Set(["color", "face", "size"])], ["form", new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", new Set(["cols", "rows"])], ["h1", new Set(["align"])], ["h2", new Set(["align"])], ["h3", new Set(["align"])], ["h4", new Set(["align"])], ["h5", new Set(["align"])], ["h6", new Set(["align"])], ["head", new Set(["profile"])], ["hr", new Set(["align", "noshade", "size", "width"])], ["html", new Set(["manifest", "version"])], ["iframe", new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", new Set(["cite", "datetime"])], ["isindex", new Set(["prompt"])], ["label", new Set(["for", "form"])], ["legend", new Set(["align"])], ["li", new Set(["type", "value"])], ["link", new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", new Set(["name"])], ["menu", new Set(["compact"])], ["meta", new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", new Set(["compact", "reversed", "start", "type"])], ["optgroup", new Set(["disabled", "label"])], ["option", new Set(["disabled", "label", "selected", "value"])], ["output", new Set(["for", "form", "name"])], ["p", new Set(["align"])], ["param", new Set(["name", "type", "value", "valuetype"])], ["pre", new Set(["width"])], ["progress", new Set(["max", "value"])], ["q", new Set(["cite"])], ["script", new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", new Set(["name"])], ["source", new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", new Set(["blocking", "media", "type"])], ["table", new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", new Set(["align", "char", "charoff", "valign"])], ["td", new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", new Set(["shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", new Set(["align", "char", "charoff", "valign"])], ["th", new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", new Set(["align", "char", "charoff", "valign"])], ["time", new Set(["datetime"])], ["tr", new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", new Set(["default", "kind", "label", "src", "srclang"])], ["ul", new Set(["compact", "type"])], ["video", new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
  var ra = new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
  function ro(e) {
    var t;
    let {
      msg,
      span: {
        start,
        end
      }
    } = e;
    throw Object.assign(SyntaxError(msg + " (" + (t = {
      loc: {
        start: {
          line: start.line + 1,
          column: start.col + 1
        },
        end: {
          line: end.line + 1,
          column: end.col + 1
        }
      },
      cause: e
    }).loc.start.line + ":" + t.loc.start.column + ")"), t);
  }
  function rs(e) {
    return {
      parse: (t, n) => function e(t, n, r = {}, i = !0) {
        let {
          frontMatter,
          content
        } = i ? n9(t) : {
          frontMatter: null,
          content: t
        };
        let s = new tW(t, r.filepath);
        let _ = new tK(s, 0, 0, 0);
        let l = _.moveBy(t.length);
        let u = {
          type: "root",
          sourceSpan: new tV(_, l),
          children: function e(t, n, r) {
            let {
              name,
              canSelfClose = !0,
              normalizeTagName = !1,
              normalizeAttributeName = !1,
              allowHtmComponentClosingTags = !1,
              isTagNameCaseSensitive = !1,
              shouldParseAsRawText
            } = n;
            let {
              rootNodes,
              errors
            } = n5(t, {
              canSelfClose,
              allowHtmComponentClosingTags,
              isTagNameCaseSensitive,
              getTagContentType: shouldParseAsRawText ? (...e) => shouldParseAsRawText(...e) ? n_.RAW_TEXT : void 0 : void 0,
              tokenizeAngularBlocks: "angular" === name || void 0
            });
            if ("vue" === name) {
              if (rootNodes.some(e => "docType" === e.type && "html" === e.value || "element" === e.type && "html" === e.name.toLowerCase())) return e(t, r_, r);
              let n;
              let i = () => n ?? (n = n5(t, {
                canSelfClose,
                allowHtmComponentClosingTags,
                isTagNameCaseSensitive
              }));
              let o = e => i().rootNodes.find(({
                startSourceSpan: t
              }) => t && t.start.offset === e.startSourceSpan.start.offset) ?? e;
              for (let [e, t] of rootNodes.entries()) {
                let {
                  endSourceSpan,
                  startSourceSpan
                } = t;
                if (null === endSourceSpan) {
                  p = i().errors;
                  rootNodes[e] = o(t);
                } else if (function (e, t) {
                  var n;
                  if ("element" !== e.type || "template" !== e.name) return !1;
                  let r = null == (n = e.attrs.find(e => "lang" === e.name)) ? void 0 : n.value;
                  return !r || "html" === el(t, {
                    language: r
                  });
                }(t, r)) {
                  let r = i().errors.find(e => e.span.start.offset > startSourceSpan.start.offset && e.span.start.offset < endSourceSpan.end.offset);
                  r && ro(r);
                  rootNodes[e] = o(t);
                }
              }
            }
            errors.length > 0 && ro(errors[0]);
            let d = e => {
              let t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null;
              let n = e.nameSpan.toString();
              let r = null !== t && n.startsWith(`${t}:`);
              let i = r ? n.slice(t.length + 1) : n;
              e.name = i;
              e.namespace = t;
              e.hasExplicitNamespace = r;
            };
            let m = e => {
              switch (e.type) {
                case "element":
                  for (let t of (d(e), e.attrs)) {
                    d(t);
                    t.valueSpan ? (t.value = t.valueSpan.toString(), /["']/.test(t.value[0]) && (t.value = t.value.slice(1, -1))) : t.value = null;
                  }
                  break;
                case "comment":
                  e.value = e.sourceSpan.toString().slice(4, -3);
                  break;
                case "text":
                  e.value = e.sourceSpan.toString();
              }
            };
            let f = (e, t) => {
              let n = e.toLowerCase();
              return t(n) ? n : e;
            };
            let h = e => {
              if ("element" === e.type && (normalizeTagName && (!e.namespace || e.namespace === e.tagDefinition.implicitNamespacePrefix || ep(e)) && (e.name = f(e.name, e => ra.has(e))), normalizeAttributeName)) for (let t of e.attrs) t.namespace || (t.name = f(t.name, t => ri.has(e.name) && (ri.get("*").has(t) || ri.get(e.name).has(t))));
            };
            let y = e => {
              e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new tV(e.sourceSpan.start, e.endSourceSpan.end));
            };
            let g = e => {
              if ("element" === e.type) {
                let t = ng(isTagNameCaseSensitive ? e.name : e.name.toLowerCase());
                !e.namespace || e.namespace === t.implicitNamespacePrefix || ep(e) ? e.tagDefinition = t : e.tagDefinition = ng("");
              }
            };
            nF(new class extends nP {
              visitExpansionCase(e, t) {
                "angular" === name && this.visitChildren(t, t => {
                  t(e.expression);
                });
              }
              visit(e) {
                m(e);
                g(e);
                h(e);
                y(e);
              }
            }(), rootNodes);
            return rootNodes;
          }(content, n, r)
        };
        if (frontMatter) {
          let e = new tK(s, 0, 0, 0);
          let t = e.moveBy(frontMatter.raw.length);
          frontMatter.sourceSpan = new tV(e, t);
          u.children.unshift(frontMatter);
        }
        let c = new rn(u);
        let d = (i, a) => {
          let {
            offset
          } = a;
          let s = e(p(!1, t.slice(0, offset), /[^\n\r]/g, " ") + i, n, r, !1);
          s.sourceSpan = new tV(a, K(!1, s.children, -1).sourceSpan.end);
          let _ = s.children[0];
          _.length === offset ? s.children.shift() : (_.sourceSpan = new tV(_.sourceSpan.start.moveBy(offset), _.sourceSpan.end), _.value = _.value.slice(offset));
          return s;
        };
        c.walk(e => {
          if ("comment" === e.type) {
            let t = function (e, t) {
              if (e.value) for (let {
                regex,
                parse
              } of rr) {
                let i = e.value.match(regex);
                if (i) return parse(e, t, i);
              }
              return null;
            }(e, d);
            t && e.parent.replaceChild(e, t);
          }
          (function (e) {
            if ("block" === e.type) {
              if (e.name = p(!1, e.name.toLowerCase(), /\s+/g, " ").trim(), e.type = "angularControlFlowBlock", !to(e.parameters)) {
                delete e.parameters;
                return;
              }
              for (let t of e.parameters) t.type = "angularControlFlowBlockParameter";
              e.parameters = {
                type: "angularControlFlowBlockParameters",
                children: e.parameters,
                sourceSpan: new tV(e.parameters[0].sourceSpan.start, K(!1, e.parameters, -1).sourceSpan.end)
              };
            }
          })(e);
          ("plural" === e.type || "select" === e.type) && (e.clause = e.type, e.type = "angularIcuExpression");
          "expansionCase" === e.type && (e.type = "angularIcuCase");
        });
        return c;
      }(t, e, n),
      hasPragma: tF,
      astFormat: "html",
      locStart: ts,
      locEnd: t_
    };
  }
  var r_ = {
    name: "html",
    normalizeTagName: !0,
    normalizeAttributeName: !0,
    allowHtmComponentClosingTags: !0
  };
  var rl = rs(r_);
  var ru = rs({
    name: "angular"
  });
  var rc = rs({
    name: "vue",
    isTagNameCaseSensitive: !0,
    shouldParseAsRawText: (e, t, n, r) => "html" !== e.toLowerCase() && !n && ("template" !== e || r.some(({
      name: e,
      value: t
    }) => "lang" === e && "html" !== t && "" !== t && void 0 !== t))
  });
  var rp = rs({
    name: "lwc",
    canSelfClose: !1
  });
  var rd = {
    html: {
      preprocess: function (e, t) {
        for (let n of tH) n(e, t);
        return e;
      },
      print: function (e, t, n) {
        let {
          node
        } = e;
        switch (node.type) {
          case "front-matter":
            return V(node.raw);
          case "root":
            t.__onHtmlRoot && t.__onHtmlRoot(node);
            return [B(tO(e, t, n)), q];
          case "element":
          case "ieConditionalComment":
            return function (e, t, n) {
              var r;
              var i;
              let a;
              let {
                node: _node2
              } = e;
              if (eh(_node2, t)) return [tv(_node2, t), B(tD(e, t, n)), V(tC(_node2, t)), ...tl(_node2, t), tc(_node2, t)];
              let s = 1 === _node2.children.length && ("interpolation" === _node2.firstChild.type || "angularIcuExpression" === _node2.firstChild.type) && _node2.firstChild.isLeadingSpaceSensitive && !_node2.firstChild.hasLeadingSpaces && _node2.lastChild.isTrailingSpaceSensitive && !_node2.lastChild.hasTrailingSpaces;
              let _ = Symbol("element-attr-group-id");
              a = 0 === _node2.children.length ? _node2.hasDanglingSpaces && _node2.isDanglingSpaceSensitive ? R : "" : [ev(_node2) || "element" === _node2.type && _node2.children.length > 0 && (["body", "script", "style"].includes(_node2.name) || _node2.children.some(e => {
                var t;
                return null == (t = e.children) ? void 0 : t.some(e => "text" !== e.type);
              })) || _node2.firstChild && _node2.firstChild === _node2.lastChild && "text" !== _node2.firstChild.type && eS(_node2.firstChild) && (!_node2.lastChild.isTrailingSpaceSensitive || eC(_node2.lastChild)) ? L : "", (r = [s ? M(J, "", {
                groupId: _
              }) : _node2.firstChild.hasLeadingSpaces && _node2.firstChild.isLeadingSpaceSensitive ? R : "text" === _node2.firstChild.type && _node2.isWhitespaceSensitive && _node2.isIndentationSensitive ? O(Number.NEGATIVE_INFINITY, J) : J, tO(e, t, n)], s ? (i = {
                groupId: _
              }, N(r), {
                type: v,
                contents: r,
                groupId: i.groupId,
                negate: i.negate
              }) : (eb(_node2) || eM(_node2, t)) && "root" === _node2.parent.type && "vue" === t.parser && !t.vueIndentScriptAndStyle ? r : I(r)), (_node2.next ? tf(_node2.next) : th(_node2.parent)) ? _node2.lastChild.hasTrailingSpaces && _node2.lastChild.isTrailingSpaceSensitive ? " " : "" : s ? M(J, "", {
                groupId: _
              }) : _node2.lastChild.hasTrailingSpaces && _node2.lastChild.isTrailingSpaceSensitive ? R : ("comment" === _node2.lastChild.type || "text" === _node2.lastChild.type && _node2.isWhitespaceSensitive && _node2.isIndentationSensitive) && RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`).test(_node2.lastChild.value) ? "" : J];
              return B([B(tD(e, t, n), {
                id: _
              }), a, tl(_node2, t)]);
            }(e, t, n);
          case "angularControlFlowBlock":
            return function (e, t, n) {
              let {
                node: _node3
              } = e;
              let i = [];
              (function (e) {
                let {
                  previous
                } = e;
                return previous?.type === "angularControlFlowBlock" && !ey(previous) && !tB(previous);
              })(e) && i.push("} ");
              i.push("@", _node3.name);
              _node3.parameters && i.push(" (", B(n("parameters")), ")");
              i.push(" {");
              let a = tB(_node3);
              _node3.children.length > 0 ? (_node3.firstChild.hasLeadingSpaces = !0, _node3.lastChild.hasTrailingSpaces = !0, i.push(I([q, tO(e, t, n)])), a && i.push(q, "}")) : a && i.push("}");
              return B(i, {
                shouldBreak: !0
              });
            }(e, t, n);
          case "angularControlFlowBlockParameters":
            return [I([J, z([";", R], e.map(n, "children"))]), J];
          case "angularControlFlowBlockParameter":
            return X.trim(node.expression);
          case "angularIcuExpression":
            return function (e, t, n) {
              let {
                node: _node4
              } = e;
              return [tx(_node4, t), B([_node4.switchValue.trim(), ", ", _node4.clause, _node4.cases.length > 0 ? [",", I([R, z(R, e.map(n, "cases"))])] : "", J]), tu(_node4, t)];
            }(e, t, n);
          case "angularIcuCase":
            return function (e, t, n) {
              let {
                node: _node5
              } = e;
              return [_node5.value, " {", B([I([J, e.map(({
                node: e
              }) => "text" !== e.type || X.trim(e.value) ? n() : "", "expression")]), J]), "}"];
            }(e, 0, n);
          case "ieConditionalStartComment":
          case "ieConditionalEndComment":
            return [tx(node), tu(node)];
          case "interpolation":
            return [tx(node, t), ...e.map(n, "children"), tu(node, t)];
          case "text":
            {
              if ("interpolation" === node.parent.type) {
                let e = /\n[^\S\n]*$/;
                let t = e.test(node.value);
                return [V(t ? node.value.replace(e, "") : node.value), t ? q : ""];
              }
              let e = W([tv(node, t), ...eJ(node), tc(node, t)], e => function (e) {
                switch (k(e)) {
                  case D:
                    if (e.parts.every(e => "" === e)) return "";
                    break;
                  case b:
                    if (!e.contents && !e.id && !e.$$break && !e.expandedStates) return "";
                    if (e.contents.type === b && e.contents.id === e.id && e.contents.$$break === e.$$break && e.contents.expandedStates === e.expandedStates) return e.contents;
                    break;
                  case y:
                  case h:
                  case v:
                  case T:
                    if (!e.contents) return "";
                    break;
                  case x:
                    if (!e.flatContents && !e.breakContents) return "";
                    break;
                  case m:
                    {
                      let t = [];
                      for (let n of e) {
                        if (!n) continue;
                        let [e, ...r] = Array.isArray(n) ? n : [n];
                        "string" == typeof e && "string" == typeof K(!1, t, -1) ? t[t.length - 1] += e : t.push(e);
                        t.push(...r);
                      }
                      return 0 === t.length ? "" : 1 === t.length ? t[0] : t;
                    }
                  case d:
                  case f:
                  case g:
                  case S:
                  case C:
                  case E:
                  case w:
                    break;
                  default:
                    throw new P(e);
                }
                return e;
              }(e));
              return Array.isArray(e) ? j(e) : e;
            }
          case "docType":
            return [B([tx(node, t), " ", p(!1, node.value.replace(/^html\b/i, "html"), /\s+/g, " ")]), tu(node, t)];
          case "comment":
            return [tv(node, t), V(t.originalText.slice(ts(node), t_(node))), tc(node, t)];
          case "attribute":
            {
              if (null === node.value) return node.rawName;
              let e = eO(node.value);
              let t = H(e, '"');
              return [node.rawName, "=", t, V('"' === t ? p(!1, e, '"', "&quot;") : p(!1, e, "'", "&apos;")), t];
            }
          default:
            throw new Y(node, "HTML");
        }
      },
      insertPragma: function (e) {
        return `<!-- @format -->

` + e;
      },
      massageAstNode: et,
      embed: function (e, t) {
        let {
          node
        } = e;
        switch (node.type) {
          case "element":
            if (eb(node) || "interpolation" === node.type) return;
            if (!node.isSelfClosing && eR(node, t)) {
              let r = ek(node, t);
              return r ? async (i, a) => {
                let o = tC(node, t);
                let s = /^\s*$/.test(o);
                let _ = "";
                s || (s = "" === (_ = await i(em(o), {
                  parser: r,
                  __embeddedInHtml: !0
                })));
                return [tv(node, t), B(tD(e, t, a)), s ? "" : q, _, s ? "" : q, tl(node, t), tc(node, t)];
              } : void 0;
            }
            break;
          case "text":
            if (eb(node.parent)) {
              let e = ek(node.parent, t);
              if (e) return async r => {
                let i = "markdown" === e ? eI(node.value.replace(/^[^\S\n]*\n/, "")) : node.value;
                let a = {
                  parser: e,
                  __embeddedInHtml: !0
                };
                if ("html" === t.parser && "babel" === e) {
                  let e = "script";
                  let {
                    attrMap
                  } = node.parent;
                  attrMap && ("module" === attrMap.type || "text/babel" === attrMap.type && "module" === attrMap["data-type"]) && (e = "module");
                  a.__babelSourceType = e;
                }
                return [L, tv(node, t), await r(i, a), tc(node, t)];
              };
            } else if ("interpolation" === node.parent.type) return async r => {
              let i = {
                __isInHtmlInterpolation: !0,
                __embeddedInHtml: !0
              };
              "angular" === t.parser ? (i.parser = "__ng_interpolation", i.trailingComma = "none") : "vue" === t.parser ? i.parser = e9(e, t) ? "__vue_ts_expression" : "__vue_expression" : i.parser = "__js_expression";
              return [I([R, await r(node.value, i)]), node.parent.next && tf(node.parent.next) ? " " : R];
            };
            break;
          case "attribute":
            return ti(e, t);
          case "front-matter":
            return e => en(node, e);
          case "angularControlFlowBlockParameters":
            return tE.has(e.parent.name) ? eo : void 0;
        }
      },
      getVisitorKeys: tk
    }
  };
  return ((e, t, o, s) => {
    if (t && "object" == typeof t || "function" == typeof t) for (let _ of i(t)) a.call(e, _) || _ === o || n(e, _, {
      get: () => t[_],
      enumerable: !(s = r(t, _)) || s.enumerable
    });
    return e;
  })(n({}, "__esModule", {
    value: !0
  }), c);
});