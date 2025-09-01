import { handleExtensionCausedError } from "../vendor/477853";
import { logSelectionStateFailure } from "../vendor/555736";
import { isBrowser } from "../vendor/42266";
import a from "../vendor/12281";
import s from "../vendor/927746";
import u from "../vendor/127745";
import c from "../vendor/153658";
import l from "../vendor/35020";
var f = isBrowser("IE");
function p(t, e) {
  for (r = t, n = r, void 0; r;) {
    var r;
    var n;
    if (l(r) && n.hasAttribute("contenteditable")) return function (t, e) {
      if (!t) return "[empty]";
      var r = function t(e, r) {
        var n = void 0 !== r ? r(e) : [];
        if (e.nodeType === Node.TEXT_NODE) {
          var i = e.textContent.length;
          return u(e).createTextNode("[text " + i + (n.length ? " | " + n.join(", ") : "") + "]");
        }
        var o = e.cloneNode();
        1 === o.nodeType && n.length && o.setAttribute("data-labels", n.join(", "));
        for (a = e.childNodes, s = 0, void 0; s < a.length; s++) {
          var a;
          var s;
          o.appendChild(t(a[s], r));
        }
        return o;
      }(t, e);
      return r.nodeType === Node.TEXT_NODE ? r.textContent : (l(r) || c(!1), r.outerHTML);
    }(r, e);
    n = r = r.parentNode;
  }
  return "Could not find contentEditable parent of node";
}
function h(t) {
  return t.nodeValue?.length;
}
function d(t, e, r, n) {
  var o = s();
  if (t.extend && null != e && a(o, e)) {
    r > h(e) && logSelectionStateFailure({
      anonymizedDom: p(e),
      extraParams: JSON.stringify({
        offset: r
      }),
      selectionState: JSON.stringify(n.toJS())
    });
    var u = e === t.focusNode;
    try {
      t.rangeCount > 0 && t.extend && t.extend(e, r);
    } catch (a) {
      logSelectionStateFailure({
        anonymizedDom: p(e, function (e) {
          var r = [];
          e === o && r.push("active element");
          e === t.anchorNode && r.push("selection anchor node");
          e === t.focusNode && r.push("selection focus node");
          return r;
        }),
        extraParams: JSON.stringify({
          activeElementName: o ? o.nodeName : null,
          nodeIsFocus: e === t.focusNode,
          nodeWasFocus: u,
          selectionRangeCount: t.rangeCount,
          selectionAnchorNodeName: t.anchorNode ? t.anchorNode.nodeName : null,
          selectionAnchorOffset: t.anchorOffset,
          selectionFocusNodeName: t.focusNode ? t.focusNode.nodeName : null,
          selectionFocusOffset: t.focusOffset,
          message: a ? "" + a : null,
          offset: r
        }, null, 2),
        selectionState: JSON.stringify(n.toJS(), null, 2)
      });
      return a;
    }
  } else if (e && t.rangeCount > 0) {
    var c = t.getRangeAt(0);
    c.setEnd(e, r);
    t.addRange(c.cloneRange());
  }
}
function g(t, e, r, o) {
  var a = u(e).createRange();
  if (r > h(e) && (logSelectionStateFailure({
    anonymizedDom: p(e),
    extraParams: JSON.stringify({
      offset: r
    }),
    selectionState: JSON.stringify(o.toJS())
  }), handleExtensionCausedError()), a.setStart(e, r), f) try {
    t.addRange(a);
  } catch (t) {} else t.addRange(a);
}
module.exports = {
  setDraftEditorSelection: function (t, e, r, n, i) {
    var o = u(e);
    if (a(o.documentElement, e)) {
      var s = o.defaultView.getSelection();
      var c = t.getAnchorKey();
      var l = t.getAnchorOffset();
      var f = t.getFocusKey();
      var p = t.getFocusOffset();
      var h = t.getIsBackward();
      if (!s.extend && h) {
        var y = c;
        var v = l;
        c = f;
        l = p;
        f = y;
        p = v;
        h = !1;
      }
      var m = c === r && n <= l && i >= l;
      var _ = f === r && n <= p && i >= p;
      if (m && _) {
        s.removeAllRanges();
        g(s, e, l - n, t);
        d(s, e, p - n, t);
        return;
      }
      if (h) {
        if (_ && (s.removeAllRanges(), g(s, e, p - n, t)), m) {
          var b = s.focusNode;
          var S = s.focusOffset;
          s.removeAllRanges();
          g(s, e, l - n, t);
          d(s, b, S, t);
        }
      } else {
        m && (s.removeAllRanges(), g(s, e, l - n, t));
        _ && d(s, e, p - n, t);
      }
    }
  },
  addFocusToSelection: d
};