/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var i = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
var s = i.join(",");
var o = "undefined" == typeof Element;
var a = o ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var h = !o && Element.prototype.getRootNode ? function (e) {
  var r;
  return e?.getRootNode?.call(e);
} : function (e) {
  return e?.ownerDocument;
};
var d = function e(r, n) {
  void 0 === n && (n = !0);
  var i;
  var s = r?.getAttribute?.call(r, "inert");
  return "" === s || "true" === s || n && r && e(r.parentNode);
};
var p = function (e) {
  var r;
  var n = e?.getAttribute?.call(e, "contenteditable");
  return "" === n || "true" === n;
};
var g = function (e, r, n) {
  if (d(e)) return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(s));
  r && a.call(e, s) && i.unshift(e);
  return i = i.filter(n);
};
var m = function e(r, n, i) {
  for (o = [], h = Array.from(r), void 0; h.length;) {
    var o;
    var h;
    var p = h.shift();
    if (!d(p, !1)) {
      if ("SLOT" === p.tagName) {
        var g = p.assignedElements();
        var m = e(g.length ? g : p.children, !0, i);
        i.flatten ? o.push.apply(o, m) : o.push({
          scopeParent: p,
          candidates: m
        });
      } else {
        a.call(p, s) && i.filter(p) && (n || !r.includes(p)) && o.push(p);
        var v = p.shadowRoot || "function" == typeof i.getShadowRoot && i.getShadowRoot(p);
        var y = !d(v, !1) && (!i.shadowRootFilter || i.shadowRootFilter(p));
        if (v && y) {
          var b = e(!0 === v ? p.children : v.children, !0, i);
          i.flatten ? o.push.apply(o, b) : o.push({
            scopeParent: p,
            candidates: b
          });
        } else h.unshift.apply(h, p.children);
      }
    }
  }
  return o;
};
var v = function (e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
};
var y = function (e) {
  if (!e) throw Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || p(e)) && !v(e) ? 0 : e.tabIndex;
};
var b = function (e, r) {
  var n = y(e);
  return n < 0 && r && !v(e) ? 0 : n;
};
var O = function (e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex;
};
var x = function (e) {
  return "INPUT" === e.tagName;
};
var w = function (e) {
  return x(e) && "hidden" === e.type;
};
var k = function (e) {
  return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some(function (e) {
    return "SUMMARY" === e.tagName;
  });
};
var _ = function (e, r) {
  for (var n = 0; n < e.length; n++) if (e[n].checked && e[n].form === r) return e[n];
};
var S = function (e) {
  if (!e.name) return !0;
  var r;
  var n = e.form || h(e);
  var i = function (e) {
    return n.querySelectorAll('input[type="radio"][name="' + e + '"]');
  };
  if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) r = i(window.CSS.escape(e.name));else try {
    r = i(e.name);
  } catch (e) {
    console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message);
    return !1;
  }
  var s = _(r, e.form);
  return !s || s === e;
};
var E = function (e) {
  return x(e) && "radio" === e.type;
};
var A = function (e) {
  return E(e) && !S(e);
};
var C = function (e) {
  var r;
  var n;
  var i;
  var s;
  var o;
  var a;
  var d;
  var p = e && h(e);
  var g = p?.host;
  var m = !1;
  if (p && p !== e) for (m = !!(null !== (n = g) && void 0 !== n && null !== (i = n.ownerDocument) && void 0 !== i && i.contains(g) || null != e && null !== (s = e.ownerDocument) && void 0 !== s && s.contains(e)); !m && g;) m = !!(null !== (a = g = (p = h(g))?.host) && void 0 !== a && null !== (d = a.ownerDocument) && void 0 !== d && d.contains(g));
  return m;
};
var T = function (e) {
  var r = e.getBoundingClientRect();
  var n = r.width;
  var i = r.height;
  return 0 === n && 0 === i;
};
var I = function (e, r) {
  var n = r.displayCheck;
  var i = r.getShadowRoot;
  if ("hidden" === getComputedStyle(e).visibility) return !0;
  var s = a.call(e, "details>summary:first-of-type") ? e.parentElement : e;
  if (a.call(s, "details:not([open]) *")) return !0;
  if (n && "full" !== n && "legacy-full" !== n) {
    if ("non-zero-area" === n) return T(e);
  } else {
    if ("function" == typeof i) {
      for (var o = e; e;) {
        var d = e.parentElement;
        var p = h(e);
        if (d && !d.shadowRoot && !0 === i(d)) return T(e);
        e = e.assignedSlot ? e.assignedSlot : d || p === e.ownerDocument ? d : p.host;
      }
      e = o;
    }
    if (C(e)) return !e.getClientRects().length;
    if ("legacy-full" !== n) return !0;
  }
  return !1;
};
var P = function (e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) for (var r = e.parentElement; r;) {
    if ("FIELDSET" === r.tagName && r.disabled) {
      for (var n = 0; n < r.children.length; n++) {
        var i = r.children.item(n);
        if ("LEGEND" === i.tagName) return !!a.call(r, "fieldset[disabled] *") || !i.contains(e);
      }
      return !0;
    }
    r = r.parentElement;
  }
  return !1;
};
var R = function (e, r) {
  return !(r.disabled || d(r) || w(r) || I(r, e) || k(r) || P(r));
};
var M = function (e, r) {
  return !(A(r) || 0 > y(r)) && !!R(e, r);
};
var D = function (e) {
  var r = parseInt(e.getAttribute("tabindex"), 10);
  return !!isNaN(r) || r >= 0;
};
var N = function e(r) {
  var n = [];
  var i = [];
  r.forEach(function (r, s) {
    var o = !!r.scopeParent;
    var a = o ? r.scopeParent : r;
    var h = b(a, o);
    var d = o ? e(r.candidates) : a;
    0 === h ? o ? n.push.apply(n, d) : n.push(a) : i.push({
      documentOrder: s,
      tabIndex: h,
      item: r,
      isScope: o,
      content: d
    });
  });
  return i.sort(O).reduce(function (e, r) {
    r.isScope ? e.push.apply(e, r.content) : e.push(r.content);
    return e;
  }, []).concat(n);
};
var $$$1 = function (e, r) {
  var n;
  return N(n = (r = r || {}).getShadowRoot ? m([e], r.includeContainer, {
    filter: M.bind(null, r),
    flatten: !1,
    getShadowRoot: r.getShadowRoot,
    shadowRootFilter: D
  }) : g(e, r.includeContainer, M.bind(null, r)));
};
var $$L0 = function (e, r) {
  if (r = r || {}, !e) throw Error("No node provided");
  return !1 !== a.call(e, s) && M(r, e);
};
var j = i.concat("iframe").join(",");
var $$z2 = function (e, r) {
  if (r = r || {}, !e) throw Error("No node provided");
  return !1 !== a.call(e, j) && R(r, e);
};
export const AO = $$L0;
export const Kr = $$$1;
export const tp = $$z2;