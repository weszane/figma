export function $$t0(e, n) {
  if (null == e) return {};
  var i = {};
  for (var t in e) if ({}.hasOwnProperty.call(e, t)) {
    if (-1 !== n.indexOf(t)) continue;
    i[t] = e[t];
  }
  return i;
}
export const A = $$t0;