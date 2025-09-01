export function $$n0(e) {
  let t = {};
  for (let i of Object.keys(e)) t[i] = function (e, t) {
    if (e[t]) {
      let i = e[t];
      if (i && i.length >= 1) return i[0].originalText;
    }
    return "";
  }(e, i);
  return t;
}
export const K = $$n0;