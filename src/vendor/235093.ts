export function $$i0() {
  var e = $$arguments[0];
  "string" == typeof e && (e = document.createElement(e));
  var r = 1;
  var n = $$arguments[1];
  if (n && "object" == typeof n && null == n.nodeType && !Array.isArray(n)) {
    for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
      var o = n[i];
      "string" == typeof o ? e.setAttribute(i, o) : null != o && (e[i] = o);
    }
    r++;
  }
  for (; r < $$arguments.length; r++) s(e, $$arguments[r]);
  return e;
}
function s(e, r) {
  if ("string" == typeof r) e.appendChild(document.createTextNode(r));else if (null == r) ;else if (null != r.nodeType) e.appendChild(r);else if (Array.isArray(r)) for (var n = 0; n < r.length; n++) s(e, r[n]);else throw RangeError("Unsupported child node: " + r);
}
export const A = $$i0;