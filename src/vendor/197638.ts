! /*! @license DOMPurify 2.5.4 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.5.4/LICENSE */function (r, n) {
  module.exports = n();
}(0, function () {
  "use strict";

  function e(r) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(r);
  }
  function r(e, n) {
    return (r = Object.setPrototypeOf || function (e, r) {
      e.__proto__ = r;
      return e;
    })(e, n);
  }
  function n() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return !0;
    } catch (e) {
      return !1;
    }
  }
  function i(e, s, o) {
    return (i = n() ? Reflect.construct : function (e, n, i) {
      var s = [null];
      s.push.apply(s, n);
      var o = new (Function.bind.apply(e, s))();
      i && r(o, i.prototype);
      return o;
    }).apply(null, arguments);
  }
  function s(e) {
    return o(e) || a(e) || h(e) || p();
  }
  function o(e) {
    if (Array.isArray(e)) return d(e);
  }
  function a(e) {
    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
  }
  function h(e, r) {
    if (e) {
      if ("string" == typeof e) return d(e, r);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, r);
    }
  }
  function d(e, r) {
    (null == r || r > e.length) && (r = e.length);
    for (n = 0, i = Array(r), void 0; n < r; n++) {
      var n;
      var i;
      i[n] = e[n];
    }
    return i;
  }
  function p() {
    throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var g = Object.hasOwnProperty;
  var m = Object.setPrototypeOf;
  var v = Object.isFrozen;
  var y = Object.getPrototypeOf;
  var b = Object.getOwnPropertyDescriptor;
  var O = Object.freeze;
  var x = Object.seal;
  var w = Object.create;
  var k = "undefined" != typeof Reflect && Reflect;
  var _ = k.apply;
  var S = k.construct;
  _ || (_ = function (e, r, n) {
    return e.apply(r, n);
  });
  O || (O = function (e) {
    return e;
  });
  x || (x = function (e) {
    return e;
  });
  S || (S = function (e, r) {
    return i(e, s(r));
  });
  var E = j(Array.prototype.forEach);
  var A = j(Array.prototype.pop);
  var C = j(Array.prototype.push);
  var T = j(String.prototype.toLowerCase);
  var I = j(String.prototype.toString);
  var P = j(String.prototype.match);
  var R = j(String.prototype.replace);
  var M = j(String.prototype.indexOf);
  var D = j(String.prototype.trim);
  var N = j(RegExp.prototype.test);
  var $ = z(TypeError);
  function L(e) {
    return "number" == typeof e && isNaN(e);
  }
  function j(e) {
    return function (r) {
      for (n = $$arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1, void 0; s < n; s++) {
        var n;
        var i;
        var s;
        i[s - 1] = $$arguments[s];
      }
      return _(e, r, i);
    };
  }
  function z(e) {
    return function () {
      for (r = $$arguments.length, n = Array(r), i = 0, void 0; i < r; i++) {
        var r;
        var n;
        var i;
        n[i] = $$arguments[i];
      }
      return S(e, n);
    };
  }
  function Z(e, r, n) {
    n = null !== (i = n) && void 0 !== i ? i : T;
    m && m(e, null);
    for (s = r.length, void 0; s--;) {
      var i;
      var s;
      var o = r[s];
      if ("string" == typeof o) {
        var a = n(o);
        a !== o && (v(r) || (r[s] = a), o = a);
      }
      e[o] = !0;
    }
    return e;
  }
  function F(e) {
    var r;
    var n = w(null);
    for (r in e) !0 === _(g, e, [r]) && (n[r] = e[r]);
    return n;
  }
  function U(e, r) {
    for (; null !== e;) {
      var n = b(e, r);
      if (n) {
        if (n.get) return j(n.get);
        if ("function" == typeof n.value) return j(n.value);
      }
      e = y(e);
    }
    return function (e) {
      console.warn("fallback value for", e);
      return null;
    };
  }
  var Q = O(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
  var V = O(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
  var B = O(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
  var q = O(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
  var W = O(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
  var Y = O(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
  var G = O(["#text"]);
  var X = O(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
  var H = O(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
  var K = O(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
  var J = O(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
  var ee = x(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
  var et = x(/<%[\w\W]*|[\w\W]*%>/gm);
  var er = x(/\${[\w\W]*}/gm);
  var en = x(/^data-[\-\w.\u00B7-\uFFFF]/);
  var ei = x(/^aria-[\-\w]+$/);
  var es = x(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
  var eo = x(/^(?:\w+script|data):/i);
  var ea = x(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
  var el = x(/^html$/i);
  var eu = x(/^[a-z][.\w]*(-[.\w]+)+$/i);
  var ec = function () {
    return "undefined" == typeof window ? null : window;
  };
  var eh = function (r, n) {
    if ("object" !== e(r) || "function" != typeof r.createPolicy) return null;
    var i = null;
    var s = "data-tt-policy-suffix";
    n.currentScript && n.currentScript.hasAttribute(s) && (i = n.currentScript.getAttribute(s));
    var o = "dompurify" + (i ? "#" + i : "");
    try {
      return r.createPolicy(o, {
        createHTML: function (e) {
          return e;
        },
        createScriptURL: function (e) {
          return e;
        }
      });
    } catch (e) {
      console.warn("TrustedTypes policy " + o + " could not be created.");
      return null;
    }
  };
  function ed() {
    var r;
    var n;
    var i = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : ec();
    var o = function (e) {
      return ed(e);
    };
    if (o.version = "2.5.4", o.removed = [], !i || !i.document || 9 !== i.document.nodeType) {
      o.isSupported = !1;
      return o;
    }
    var a = i.document;
    var h = i.document;
    var d = i.DocumentFragment;
    var p = i.HTMLTemplateElement;
    var g = i.Node;
    var m = i.Element;
    var v = i.NodeFilter;
    var y = i.NamedNodeMap;
    var b = void 0 === y ? i.NamedNodeMap || i.MozNamedAttrMap : y;
    var x = i.HTMLFormElement;
    var w = i.DOMParser;
    var k = i.trustedTypes;
    var _ = m.prototype;
    var S = U(_, "cloneNode");
    var j = U(_, "nextSibling");
    var z = U(_, "childNodes");
    var ef = U(_, "parentNode");
    if ("function" == typeof p) {
      var ep = h.createElement("template");
      ep.content && ep.content.ownerDocument && (h = ep.content.ownerDocument);
    }
    var eg = eh(k, a);
    var em = eg ? eg.createHTML("") : "";
    var ev = h;
    var ey = ev.implementation;
    var eb = ev.createNodeIterator;
    var eO = ev.createDocumentFragment;
    var ex = ev.getElementsByTagName;
    var ew = a.importNode;
    var ek = {};
    try {
      ek = F(h).documentMode ? h.documentMode : {};
    } catch (e) {}
    var e_ = {};
    o.isSupported = "function" == typeof ef && ey && void 0 !== ey.createHTMLDocument && 9 !== ek;
    var eS = ee;
    var eE = et;
    var eA = er;
    var eC = en;
    var eT = ei;
    var eI = eo;
    var eP = ea;
    var eR = eu;
    var eM = es;
    var eD = null;
    var eN = Z({}, [].concat(s(Q), s(V), s(B), s(W), s(G)));
    var e$ = null;
    var eL = Z({}, [].concat(s(X), s(H), s(K), s(J)));
    var ej = Object.seal(Object.create(null, {
      tagNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      attributeNameCheck: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: null
      },
      allowCustomizedBuiltInElements: {
        writable: !0,
        configurable: !1,
        enumerable: !0,
        value: !1
      }
    }));
    var ez = null;
    var eZ = null;
    var eF = !0;
    var eU = !0;
    var eQ = !1;
    var eV = !0;
    var eB = !1;
    var eq = !0;
    var eW = !1;
    var eY = !1;
    var eG = !1;
    var eX = !1;
    var eH = !1;
    var eK = !1;
    var eJ = !0;
    var e0 = !1;
    var e1 = "user-content-";
    var e2 = !0;
    var e5 = !1;
    var e3 = {};
    var e6 = null;
    var e4 = Z({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
    var e8 = null;
    var e7 = Z({}, ["audio", "video", "img", "source", "image", "track"]);
    var e9 = null;
    var te = Z({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
    var tt = "http://www.w3.org/1998/Math/MathML";
    var tr = "http://www.w3.org/2000/svg";
    var tn = "http://www.w3.org/1999/xhtml";
    var ti = tn;
    var ts = !1;
    var to = null;
    var ta = Z({}, [tt, tr, tn], I);
    var tl = ["application/xhtml+xml", "text/html"];
    var tu = "text/html";
    var tc = null;
    var th = 255;
    var td = h.createElement("form");
    var tf = function (e) {
      return e instanceof RegExp || e instanceof Function;
    };
    var tp = function (i) {
      tc && tc === i || (i && "object" === e(i) || (i = {}), i = F(i), n = "application/xhtml+xml" === (r = r = -1 === tl.indexOf(i.PARSER_MEDIA_TYPE) ? tu : i.PARSER_MEDIA_TYPE) ? I : T, eD = "ALLOWED_TAGS" in i ? Z({}, i.ALLOWED_TAGS, n) : eN, e$ = "ALLOWED_ATTR" in i ? Z({}, i.ALLOWED_ATTR, n) : eL, to = "ALLOWED_NAMESPACES" in i ? Z({}, i.ALLOWED_NAMESPACES, I) : ta, e9 = "ADD_URI_SAFE_ATTR" in i ? Z(F(te), i.ADD_URI_SAFE_ATTR, n) : te, e8 = "ADD_DATA_URI_TAGS" in i ? Z(F(e7), i.ADD_DATA_URI_TAGS, n) : e7, e6 = "FORBID_CONTENTS" in i ? Z({}, i.FORBID_CONTENTS, n) : e4, ez = "FORBID_TAGS" in i ? Z({}, i.FORBID_TAGS, n) : {}, eZ = "FORBID_ATTR" in i ? Z({}, i.FORBID_ATTR, n) : {}, e3 = "USE_PROFILES" in i && i.USE_PROFILES, eF = !1 !== i.ALLOW_ARIA_ATTR, eU = !1 !== i.ALLOW_DATA_ATTR, eQ = i.ALLOW_UNKNOWN_PROTOCOLS || !1, eV = !1 !== i.ALLOW_SELF_CLOSE_IN_ATTR, eB = i.SAFE_FOR_TEMPLATES || !1, eq = !1 !== i.SAFE_FOR_XML, eW = i.WHOLE_DOCUMENT || !1, eX = i.RETURN_DOM || !1, eH = i.RETURN_DOM_FRAGMENT || !1, eK = i.RETURN_TRUSTED_TYPE || !1, eG = i.FORCE_BODY || !1, eJ = !1 !== i.SANITIZE_DOM, e0 = i.SANITIZE_NAMED_PROPS || !1, e2 = !1 !== i.KEEP_CONTENT, e5 = i.IN_PLACE || !1, eM = i.ALLOWED_URI_REGEXP || eM, ti = i.NAMESPACE || tn, ej = i.CUSTOM_ELEMENT_HANDLING || {}, i.CUSTOM_ELEMENT_HANDLING && tf(i.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (ej.tagNameCheck = i.CUSTOM_ELEMENT_HANDLING.tagNameCheck), i.CUSTOM_ELEMENT_HANDLING && tf(i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (ej.attributeNameCheck = i.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), i.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (ej.allowCustomizedBuiltInElements = i.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), eB && (eU = !1), eH && (eX = !0), e3 && (eD = Z({}, s(G)), e$ = [], !0 === e3.html && (Z(eD, Q), Z(e$, X)), !0 === e3.svg && (Z(eD, V), Z(e$, H), Z(e$, J)), !0 === e3.svgFilters && (Z(eD, B), Z(e$, H), Z(e$, J)), !0 === e3.mathMl && (Z(eD, W), Z(e$, K), Z(e$, J))), i.ADD_TAGS && (eD === eN && (eD = F(eD)), Z(eD, i.ADD_TAGS, n)), i.ADD_ATTR && (e$ === eL && (e$ = F(e$)), Z(e$, i.ADD_ATTR, n)), i.ADD_URI_SAFE_ATTR && Z(e9, i.ADD_URI_SAFE_ATTR, n), i.FORBID_CONTENTS && (e6 === e4 && (e6 = F(e6)), Z(e6, i.FORBID_CONTENTS, n)), e2 && (eD["#text"] = !0), eW && Z(eD, ["html", "head", "body"]), eD.table && (Z(eD, ["tbody"]), delete ez.tbody), O && O(i), tc = i);
    };
    var tg = Z({}, ["mi", "mo", "mn", "ms", "mtext"]);
    var tm = Z({}, ["foreignobject", "annotation-xml"]);
    var tv = Z({}, ["title", "style", "font", "a", "script"]);
    var ty = Z({}, V);
    Z(ty, B);
    Z(ty, q);
    var tb = Z({}, W);
    Z(tb, Y);
    var tO = function (e) {
      var n = ef(e);
      n && n.tagName || (n = {
        namespaceURI: ti,
        tagName: "template"
      });
      var i = T(e.tagName);
      var s = T(n.tagName);
      return !!to[e.namespaceURI] && (e.namespaceURI === tr ? n.namespaceURI === tn ? "svg" === i : n.namespaceURI === tt ? "svg" === i && ("annotation-xml" === s || tg[s]) : !!ty[i] : e.namespaceURI === tt ? n.namespaceURI === tn ? "math" === i : n.namespaceURI === tr ? "math" === i && tm[s] : !!tb[i] : e.namespaceURI === tn ? (n.namespaceURI !== tr || !!tm[s]) && (n.namespaceURI !== tt || !!tg[s]) && !tb[i] && (tv[i] || !ty[i]) : "application/xhtml+xml" === r && !!to[e.namespaceURI]);
    };
    var tx = function (e) {
      C(o.removed, {
        element: e
      });
      try {
        e.parentNode.removeChild(e);
      } catch (r) {
        try {
          e.outerHTML = em;
        } catch (r) {
          e.remove();
        }
      }
    };
    var tw = function (e, r) {
      try {
        C(o.removed, {
          attribute: r.getAttributeNode(e),
          from: r
        });
      } catch (e) {
        C(o.removed, {
          attribute: null,
          from: r
        });
      }
      if (r.removeAttribute(e), "is" === e && !e$[e]) {
        if (eX || eH) try {
          tx(r);
        } catch (e) {} else try {
          r.setAttribute(e, "");
        } catch (e) {}
      }
    };
    var tk = function (e) {
      if (eG) e = "<remove></remove>" + e;else {
        var n;
        var i;
        var s = P(e, /^[\r\n\t ]+/);
        i = s && s[0];
      }
      "application/xhtml+xml" === r && ti === tn && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
      var o = eg ? eg.createHTML(e) : e;
      if (ti === tn) try {
        n = new w().parseFromString(o, r);
      } catch (e) {}
      if (!n || !n.documentElement) {
        n = ey.createDocument(ti, "template", null);
        try {
          n.documentElement.innerHTML = ts ? em : o;
        } catch (e) {}
      }
      var a = n.body || n.documentElement;
      return (e && i && a.insertBefore(h.createTextNode(i), a.childNodes[0] || null), ti === tn) ? ex.call(n, eW ? "html" : "body")[0] : eW ? n.documentElement : a;
    };
    var t_ = function (e) {
      return eb.call(e.ownerDocument || e, e, v.SHOW_ELEMENT | v.SHOW_COMMENT | v.SHOW_TEXT | v.SHOW_PROCESSING_INSTRUCTION | v.SHOW_CDATA_SECTION, null, !1);
    };
    var tS = function (e) {
      return e instanceof x && (void 0 !== e.__depth && "number" != typeof e.__depth || void 0 !== e.__removalCount && "number" != typeof e.__removalCount || "string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof b) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes);
    };
    var tE = function (r) {
      return "object" === e(g) ? r instanceof g : r && "object" === e(r) && "number" == typeof r.nodeType && "string" == typeof r.nodeName;
    };
    var tA = function (e, r, n) {
      e_[e] && E(e_[e], function (e) {
        e.call(o, r, n, tc);
      });
    };
    var tC = function (e) {
      if (tA("beforeSanitizeElements", e, null), tS(e) || N(/[\u0080-\uFFFF]/, e.nodeName)) {
        tx(e);
        return !0;
      }
      var r;
      var i = n(e.nodeName);
      if (tA("uponSanitizeElement", e, {
        tagName: i,
        allowedTags: eD
      }), e.hasChildNodes() && !tE(e.firstElementChild) && (!tE(e.content) || !tE(e.content.firstElementChild)) && N(/<[/\w]/g, e.innerHTML) && N(/<[/\w]/g, e.textContent) || "select" === i && N(/<template/i, e.innerHTML) || 7 === e.nodeType || eq && 8 === e.nodeType && N(/<[/\w]/g, e.data)) {
        tx(e);
        return !0;
      }
      if (!eD[i] || ez[i]) {
        if (!ez[i] && tI(i) && (ej.tagNameCheck instanceof RegExp && N(ej.tagNameCheck, i) || ej.tagNameCheck instanceof Function && ej.tagNameCheck(i))) return !1;
        if (e2 && !e6[i]) {
          var s = ef(e) || e.parentNode;
          var a = z(e) || e.childNodes;
          if (a && s) for (h = a.length, d = h - 1, void 0; d >= 0; --d) {
            var h;
            var d;
            var p = S(a[d], !0);
            p.__removalCount = (e.__removalCount || 0) + 1;
            s.insertBefore(p, j(e));
          }
        }
        tx(e);
        return !0;
      }
      return e instanceof m && !tO(e) || ("noscript" === i || "noembed" === i || "noframes" === i) && N(/<\/no(script|embed|frames)/i, e.innerHTML) ? (tx(e), !0) : (eB && 3 === e.nodeType && (r = R(r = e.textContent, eS, " "), r = R(r, eE, " "), r = R(r, eA, " "), e.textContent !== r && (C(o.removed, {
        element: e.cloneNode()
      }), e.textContent = r)), tA("afterSanitizeElements", e, null), !1);
    };
    var tT = function (e, r, n) {
      if (eJ && ("id" === r || "name" === r) && (n in h || n in td || "__depth" === n || "__removalCount" === n)) return !1;
      if (eU && !eZ[r] && N(eC, r)) ;else if (eF && N(eT, r)) ;else if (!e$[r] || eZ[r]) {
        if (!(tI(e) && (ej.tagNameCheck instanceof RegExp && N(ej.tagNameCheck, e) || ej.tagNameCheck instanceof Function && ej.tagNameCheck(e)) && (ej.attributeNameCheck instanceof RegExp && N(ej.attributeNameCheck, r) || ej.attributeNameCheck instanceof Function && ej.attributeNameCheck(r)) || "is" === r && ej.allowCustomizedBuiltInElements && (ej.tagNameCheck instanceof RegExp && N(ej.tagNameCheck, n) || ej.tagNameCheck instanceof Function && ej.tagNameCheck(n)))) return !1;
      } else if (e9[r]) ;else if (N(eM, R(n, eP, ""))) ;else if (("src" === r || "xlink:href" === r || "href" === r) && "script" !== e && 0 === M(n, "data:") && e8[e]) ;else if (eQ && !N(eI, R(n, eP, ""))) ;else if (n) return !1;
      return !0;
    };
    var tI = function (e) {
      return "annotation-xml" !== e && P(e, eR);
    };
    var tP = function (r) {
      tA("beforeSanitizeAttributes", r, null);
      var i;
      var s;
      var a;
      var h;
      var d = r.attributes;
      if (d) {
        var p = {
          attrName: "",
          attrValue: "",
          keepAttr: !0,
          allowedAttributes: e$
        };
        for (h = d.length; h--;) {
          var g = i = d[h];
          var m = g.name;
          var v = g.namespaceURI;
          if (s = "value" === m ? i.value : D(i.value), a = n(m), p.attrName = a, p.attrValue = s, p.keepAttr = !0, p.forceKeepAttr = void 0, tA("uponSanitizeAttribute", r, p), s = p.attrValue, !p.forceKeepAttr && (tw(m, r), p.keepAttr)) {
            if (!eV && N(/\/>/i, s) || eq && N(/((--!?|])>)|<\/(style|title)/i, s)) {
              tw(m, r);
              continue;
            }
            eB && (s = R(s, eS, " "), s = R(s, eE, " "), s = R(s, eA, " "));
            var y = n(r.nodeName);
            if (tT(y, a, s)) {
              if (e0 && ("id" === a || "name" === a) && (tw(m, r), s = e1 + s), eg && "object" === e(k) && "function" == typeof k.getAttributeType) {
                if (v) ;else switch (k.getAttributeType(y, a)) {
                  case "TrustedHTML":
                    s = eg.createHTML(s);
                    break;
                  case "TrustedScriptURL":
                    s = eg.createScriptURL(s);
                }
              }
              try {
                v ? r.setAttributeNS(v, m, s) : r.setAttribute(m, s);
                tS(r) ? tx(r) : A(o.removed);
              } catch (e) {}
            }
          }
        }
        tA("afterSanitizeAttributes", r, null);
      }
    };
    var tR = function e(r) {
      var n;
      var i = t_(r);
      for (tA("beforeSanitizeShadowDOM", r, null); n = i.nextNode();) if (tA("uponSanitizeShadowNode", n, null), !tC(n)) {
        var s = ef(n);
        1 === n.nodeType && (s && s.__depth ? n.__depth = (n.__removalCount || 0) + s.__depth + 1 : n.__depth = 1);
        (n.__depth >= th || L(n.__depth)) && tx(n);
        n.content instanceof d && (n.content.__depth = n.__depth, e(n.content));
        tP(n);
      }
      tA("afterSanitizeShadowDOM", r, null);
    };
    o.sanitize = function (r) {
      var s;
      var h;
      var p;
      var m;
      var v;
      var y = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
      if ((ts = !r) && (r = "\x3c!--\x3e"), "string" != typeof r && !tE(r)) {
        if ("function" == typeof r.toString) {
          if ("string" != typeof (r = r.toString())) throw $("dirty is not a string, aborting");
        } else throw $("toString is not a function");
      }
      if (!o.isSupported) {
        if ("object" === e(i.toStaticHTML) || "function" == typeof i.toStaticHTML) {
          if ("string" == typeof r) return i.toStaticHTML(r);
          if (tE(r)) return i.toStaticHTML(r.outerHTML);
        }
        return r;
      }
      if (eY || tp(y), o.removed = [], "string" == typeof r && (e5 = !1), e5) {
        if (r.nodeName) {
          var b = n(r.nodeName);
          if (!eD[b] || ez[b]) throw $("root node is forbidden and cannot be sanitized in-place");
        }
      } else if (r instanceof g) 1 === (h = (s = tk("\x3c!----\x3e")).ownerDocument.importNode(r, !0)).nodeType && "BODY" === h.nodeName ? s = h : "HTML" === h.nodeName ? s = h : s.appendChild(h);else {
        if (!eX && !eB && !eW && -1 === r.indexOf("<")) return eg && eK ? eg.createHTML(r) : r;
        if (!(s = tk(r))) return eX ? null : eK ? em : "";
      }
      s && eG && tx(s.firstChild);
      for (var O = t_(e5 ? r : s); p = O.nextNode();) if (!(3 === p.nodeType && p === m || tC(p))) {
        var x = ef(p);
        1 === p.nodeType && (x && x.__depth ? p.__depth = (p.__removalCount || 0) + x.__depth + 1 : p.__depth = 1);
        (p.__depth >= th || L(p.__depth)) && tx(p);
        p.content instanceof d && (p.content.__depth = p.__depth, tR(p.content));
        tP(p);
        m = p;
      }
      if (m = null, e5) return r;
      if (eX) {
        if (eH) for (v = eO.call(s.ownerDocument); s.firstChild;) v.appendChild(s.firstChild);else v = s;
        (e$.shadowroot || e$.shadowrootmod) && (v = ew.call(a, v, !0));
        return v;
      }
      var w = eW ? s.outerHTML : s.innerHTML;
      eW && eD["!doctype"] && s.ownerDocument && s.ownerDocument.doctype && s.ownerDocument.doctype.name && N(el, s.ownerDocument.doctype.name) && (w = "<!DOCTYPE " + s.ownerDocument.doctype.name + ">\n" + w);
      eB && (w = R(w, eS, " "), w = R(w, eE, " "), w = R(w, eA, " "));
      return eg && eK ? eg.createHTML(w) : w;
    };
    o.setConfig = function (e) {
      tp(e);
      eY = !0;
    };
    o.clearConfig = function () {
      tc = null;
      eY = !1;
    };
    o.isValidAttribute = function (e, r, i) {
      tc || tp({});
      return tT(n(e), n(r), i);
    };
    o.addHook = function (e, r) {
      "function" == typeof r && (e_[e] = e_[e] || [], C(e_[e], r));
    };
    o.removeHook = function (e) {
      if (e_[e]) return A(e_[e]);
    };
    o.removeHooks = function (e) {
      e_[e] && (e_[e] = []);
    };
    o.removeAllHooks = function () {
      e_ = {};
    };
    return o;
  }
  return ed();
});