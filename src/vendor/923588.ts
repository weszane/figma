import { create } from "../vendor/425694";
import s from "../vendor/564492";
import u from "../vendor/517500";
import c from "../vendor/329327";
import l from "../vendor/725564";
import f from "../vendor/634152";
import p from "../vendor/312623";
import h from "../vendor/64627";
import d from "../vendor/942580";
import g from "../vendor/391990";
import { List, Map as _$$Map, OrderedSet } from "../vendor/116740";
import b from "../vendor/453256";
import S from "../vendor/848923";
import w from "../vendor/952823";
import x from "../vendor/644316";
function n(t) {
  for (var e = 1; e < $$arguments.length; e++) {
    var r = null != $$arguments[e] ? $$arguments[e] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })));
    n.forEach(function (e) {
      i(t, e, r[e]);
    });
  }
  return t;
}
function i(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
var o;
var v = List;
var m = _$$Map;
var _ = OrderedSet;
var k = g("draft_tree_data_support");
var C = RegExp("\r", "g");
var E = RegExp("\n", "g");
var O = RegExp("^\n", "g");
var D = RegExp("&nbsp;", "g");
var K = RegExp("&#13;?", "g");
var T = RegExp("&#8203;?", "g");
var M = ["bold", "bolder", "500", "600", "700", "800", "900"];
var A = ["light", "lighter", "normal", "100", "200", "300", "400"];
var I = ["className", "href", "rel", "target", "title"];
var B = ["alt", "className", "height", "src", "width"];
i(o = {}, p("public/DraftStyleDefault/depth0"), 0);
i(o, p("public/DraftStyleDefault/depth1"), 1);
i(o, p("public/DraftStyleDefault/depth2"), 2);
i(o, p("public/DraftStyleDefault/depth3"), 3);
i(o, p("public/DraftStyleDefault/depth4"), 4);
var L = o;
var R = m({
  b: "BOLD",
  code: "CODE",
  del: "STRIKETHROUGH",
  em: "ITALIC",
  i: "ITALIC",
  s: "STRIKETHROUGH",
  strike: "STRIKETHROUGH",
  strong: "BOLD",
  u: "UNDERLINE",
  mark: "HIGHLIGHT"
});
var F = function (t) {
  var e = {};
  t.mapKeys(function (t, r) {
    var n = [r.element];
    void 0 !== r.aliasedElements && n.push.apply(n, r.aliasedElements);
    n.forEach(function (r) {
      void 0 === e[r] ? e[r] = t : "string" == typeof e[r] ? e[r] = [e[r], t] : e[r].push(t);
    });
  });
  return m(e);
};
var N = function (t) {
  var e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
  Object.keys(L).some(function (r) {
    t.classList.contains(r) && (e = L[r]);
  });
  return e;
};
var P = function (t) {
  if (!b(t) || !t.href || "http:" !== t.protocol && "https:" !== t.protocol && "mailto:" !== t.protocol && "tel:" !== t.protocol) return !1;
  try {
    new f(t.href);
    return !0;
  } catch (t) {
    return !1;
  }
};
var z = function (t, e) {
  if (!w(t)) return e;
  var r = t.style.fontWeight;
  var n = t.style.fontStyle;
  var i = t.style.textDecoration;
  return e.withMutations(function (t) {
    M.indexOf(r) >= 0 ? t.add("BOLD") : A.indexOf(r) >= 0 && t.remove("BOLD");
    "italic" === n ? t.add("ITALIC") : "normal" === n && t.remove("ITALIC");
    "underline" === i && t.add("UNDERLINE");
    "line-through" === i && t.add("STRIKETHROUGH");
    "none" === i && (t.remove("UNDERLINE"), t.remove("STRIKETHROUGH"));
  });
};
var j = function (t) {
  return "ul" === t || "ol" === t;
};
var U = function () {
  function t(t, e) {
    i(this, "characterList", v());
    i(this, "currentBlockType", "unstyled");
    i(this, "currentDepth", 0);
    i(this, "currentEntity", null);
    i(this, "currentText", "");
    i(this, "wrapper", null);
    i(this, "blockConfigs", []);
    i(this, "contentBlocks", []);
    i(this, "entityMap", l);
    i(this, "blockTypeMap", void 0);
    i(this, "disambiguate", void 0);
    this.clear();
    this.blockTypeMap = t;
    this.disambiguate = e;
  }
  var e = t.prototype;
  e.clear = function () {
    this.characterList = v();
    this.blockConfigs = [];
    this.currentBlockType = "unstyled";
    this.currentDepth = 0;
    this.currentEntity = null;
    this.currentText = "";
    this.entityMap = l;
    this.wrapper = null;
    this.contentBlocks = [];
  };
  e.addDOMNode = function (t) {
    var e;
    this.contentBlocks = [];
    this.currentDepth = 0;
    (e = this.blockConfigs).push.apply(e, this._toBlockConfigs([t], _()));
    this._trimCurrentText();
    "" !== this.currentText && this.blockConfigs.push(this._makeBlockConfig());
    return this;
  };
  e.getContentBlocks = function () {
    0 === this.contentBlocks.length && (k ? this._toContentBlocks(this.blockConfigs) : this._toFlatContentBlocks(this.blockConfigs));
    return {
      contentBlocks: this.contentBlocks,
      entityMap: this.entityMap
    };
  };
  e._makeBlockConfig = function () {
    var t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : {};
    var e = n({
      key: t.key || h(),
      type: this.currentBlockType,
      text: this.currentText,
      characterList: this.characterList,
      depth: this.currentDepth,
      parent: null,
      children: v(),
      prevSibling: null,
      nextSibling: null,
      childConfigs: []
    }, t);
    this.characterList = v();
    this.currentBlockType = "unstyled";
    this.currentText = "";
    return e;
  };
  e._toBlockConfigs = function (t, e) {
    for (r = [], n = 0, void 0; n < t.length; n++) {
      var r;
      var n;
      var i = t[n];
      var o = i.nodeName.toLowerCase();
      if ("body" === o || j(o)) {
        this._trimCurrentText();
        "" !== this.currentText && r.push(this._makeBlockConfig());
        var a = this.currentDepth;
        var s = this.wrapper;
        j(o) && (this.wrapper = o, j(s) && this.currentDepth++);
        r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), e));
        this.currentDepth = a;
        this.wrapper = s;
        continue;
      }
      var u = this.blockTypeMap.get(o);
      if (void 0 !== u) {
        this._trimCurrentText();
        "" !== this.currentText && r.push(this._makeBlockConfig());
        var c = this.currentDepth;
        var l = this.wrapper;
        this.wrapper = "pre" === o ? "pre" : this.wrapper;
        "string" != typeof u && (u = this.disambiguate(o, this.wrapper) || u[0] || "unstyled");
        !k && w(i) && ("unordered-list-item" === u || "ordered-list-item" === u) && (this.currentDepth = N(i, this.currentDepth));
        var f = h();
        var p = this._toBlockConfigs(Array.from(i.childNodes), e);
        this._trimCurrentText();
        r.push(this._makeBlockConfig({
          key: f,
          childConfigs: p,
          type: u
        }));
        this.currentDepth = c;
        this.wrapper = l;
        continue;
      }
      if ("#text" === o) {
        this._addTextNode(i, e);
        continue;
      }
      if ("br" === o) {
        this._addBreakNode(i, e);
        continue;
      }
      if (x(i) && i.attributes.getNamedItem("src") && i.attributes.getNamedItem("src").value) {
        this._addImgNode(i, e);
        continue;
      }
      if (P(i)) {
        this._addAnchorNode(i, r, e);
        continue;
      }
      var d = e;
      R.has(o) && (d = d.add(R.get(o)));
      d = z(i, d);
      var g = w(i) && i.style.fontFamily.includes("monospace") ? "CODE" : null;
      null != g && (d = d.add(g));
      r.push.apply(r, this._toBlockConfigs(Array.from(i.childNodes), d));
    }
    return r;
  };
  e._appendText = function (t, e) {
    this.currentText += t;
    var r;
    var n = create({
      style: e,
      entity: this.currentEntity
    });
    this.characterList = (r = this.characterList).push.apply(r, Array(t.length).fill(n));
  };
  e._trimCurrentText = function () {
    var t = this.currentText.length;
    var e = t - this.currentText.trimLeft().length;
    var r = this.currentText.trimRight().length;
    var n = this.characterList.findEntry(function (t) {
      return null !== t.getEntity();
    });
    (e = void 0 !== n ? Math.min(e, n[0]) : e) > (r = void 0 !== (n = this.characterList.reverse().findEntry(function (t) {
      return null !== t.getEntity();
    })) ? Math.max(r, t - n[0]) : r) ? (this.currentText = "", this.characterList = v()) : (this.currentText = this.currentText.slice(e, r), this.characterList = this.characterList.slice(e, r));
  };
  e._addTextNode = function (t, e) {
    var r = t.textContent;
    "" === r.trim() && "pre" !== this.wrapper && (r = " ");
    "pre" !== this.wrapper && (r = (r = r.replace(O, "")).replace(E, " "));
    this._appendText(r, e);
  };
  e._addBreakNode = function (t, e) {
    S(t) && this._appendText("\n", e);
  };
  e._addImgNode = function (t, e) {
    if (x(t)) {
      var r = {};
      B.forEach(function (e) {
        var n = t.getAttribute(e);
        n && (r[e] = n);
      });
      this.currentEntity = this.entityMap.__create("IMAGE", "IMMUTABLE", r);
      g("draftjs_fix_paste_for_img") ? "presentation" !== t.getAttribute("role") && this._appendText("\uD83D\uDCF7", e) : this._appendText("\uD83D\uDCF7", e);
      this.currentEntity = null;
    }
  };
  e._addAnchorNode = function (t, e, r) {
    if (b(t)) {
      var n = {};
      I.forEach(function (e) {
        var r = t.getAttribute(e);
        r && (n[e] = r);
      });
      n.url = new f(t.href).toString();
      this.currentEntity = this.entityMap.__create("LINK", "MUTABLE", n || {});
      e.push.apply(e, this._toBlockConfigs(Array.from(t.childNodes), r));
      this.currentEntity = null;
    }
  };
  e._toContentBlocks = function (t) {
    for (e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : null, r = t.length - 1, i = 0, void 0; i <= r; i++) {
      var e;
      var r;
      var i;
      var o = t[i];
      o.parent = e;
      o.prevSibling = i > 0 ? t[i - 1].key : null;
      o.nextSibling = i < r ? t[i + 1].key : null;
      o.children = v(o.childConfigs.map(function (t) {
        return t.key;
      }));
      this.contentBlocks.push(new u(n({}, o)));
      this._toContentBlocks(o.childConfigs, o.key);
    }
  };
  e._hoistContainersInBlockConfigs = function (t) {
    var e = this;
    return v(t).flatMap(function (t) {
      return "unstyled" !== t.type || "" !== t.text ? [t] : e._hoistContainersInBlockConfigs(t.childConfigs);
    });
  };
  e._toFlatContentBlocks = function (t) {
    var e = this;
    this._hoistContainersInBlockConfigs(t).forEach(function (t) {
      var r = e._extractTextFromBlockConfigs(t.childConfigs);
      var i = r.text;
      var o = r.characterList;
      e.contentBlocks.push(new s(n({}, t, {
        text: t.text + i,
        characterList: t.characterList.concat(o)
      })));
    });
  };
  e._extractTextFromBlockConfigs = function (t) {
    for (e = t.length - 1, r = "", n = v(), i = 0, void 0; i <= e; i++) {
      var e;
      var r;
      var n;
      var i;
      var o = t[i];
      r += o.text;
      n = n.concat(o.characterList);
      "" !== r && "unstyled" !== o.type && (r += "\n", n = n.push(n.last()));
      var a = this._extractTextFromBlockConfigs(o.childConfigs);
      r += a.text;
      n = n.concat(a.characterList);
    }
    return {
      text: r,
      characterList: n
    };
  };
  return t;
}();
module.exports = function (t) {
  var e = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : d;
  var r = $$arguments.length > 2 && void 0 !== $$arguments[2] ? $$arguments[2] : c;
  var n = e(t = t.trim().replace(C, "").replace(D, " ").replace(K, "").replace(T, ""));
  return n ? new U(F(r), function (t, e) {
    return "li" === t ? "ol" === e ? "ordered-list-item" : "unordered-list-item" : null;
  }).addDOMNode(n).getContentBlocks() : null;
};