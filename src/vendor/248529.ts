import { isSurrogatePair } from "../vendor/425872";
import i from "../vendor/127745";
import o from "../vendor/507517";
import a from "../vendor/153658";
function s(t, e) {
  for (r = 1 / 0, n = 1 / 0, i = -1 / 0, o = -1 / 0, a = 0, void 0; a < t.length; a++) {
    var r;
    var n;
    var i;
    var o;
    var a;
    var s = t[a];
    0 !== s.width && 1 !== s.width && (r = Math.min(r, s.top), n = Math.min(n, s.bottom), i = Math.max(i, s.top), o = Math.max(o, s.bottom));
  }
  return i <= n && i - r < e && o - n < e;
}
module.exports = function (t) {
  t.collapsed || a(!1);
  var e;
  var r;
  var u;
  var c;
  var l;
  var f;
  var p = (t = t.cloneRange()).startContainer;
  1 !== p.nodeType && (p = p.parentNode);
  r = getComputedStyle(e = p);
  (c = (u = i(e)).createElement("div")).style.fontFamily = r.fontFamily;
  c.style.fontSize = r.fontSize;
  c.style.fontStyle = r.fontStyle;
  c.style.fontWeight = r.fontWeight;
  c.style.lineHeight = r.lineHeight;
  c.style.position = "absolute";
  c.textContent = "M";
  (l = u.body) || a(!1);
  l.appendChild(c);
  f = c.getBoundingClientRect();
  l.removeChild(c);
  var h = f.height;
  var d = t.endContainer;
  var g = t.endOffset;
  for (t.setStart(t.startContainer, 0); s(o(t), h) && (d = t.startContainer, g = t.startOffset, d.parentNode || a(!1), t.setStartBefore(d), 1 !== d.nodeType || "inline" === getComputedStyle(d).display););
  for (y = d, v = g - 1, void 0;;) {
    var y;
    var v;
    for (m = y.nodeValue, _ = v, void 0; _ >= 0; _--) {
      var m;
      var _;
      if (!(null != m && _ > 0 && isSurrogatePair(m, _ - 1))) {
        if (t.setStart(y, _), s(o(t), h)) {
          d = y;
          g = _;
        } else break;
      }
    }
    if (-1 === _ || 0 === y.childNodes.length) break;
    v = function (t) {
      switch (t.nodeType) {
        case Node.DOCUMENT_TYPE_NODE:
          return 0;
        case Node.TEXT_NODE:
        case Node.PROCESSING_INSTRUCTION_NODE:
        case Node.COMMENT_NODE:
          return t.length;
        default:
          return t.childNodes.length;
      }
    }(y = y.childNodes[_]);
  }
  t.setStart(d, g);
  return t;
};