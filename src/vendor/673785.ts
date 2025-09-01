let n = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD";
let i = n + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040";
let s = "[" + n + "][" + i + "]*";
let o = RegExp("^" + s + "$");
let a = function (e, r) {
  let n = [];
  let i = r.exec(e);
  for (; i;) {
    let s = [];
    s.startIndex = r.lastIndex - i[0].length;
    let o = i.length;
    for (let e = 0; e < o; e++) s.push(i[e]);
    n.push(s);
    i = r.exec(e);
  }
  return n;
};
let h = function (e) {
  return null != o.exec(e);
};
exports.isExist = function (e) {
  return void 0 !== e;
};
exports.isEmptyObject = function (e) {
  return 0 === Object.keys(e).length;
};
exports.merge = function (e, r, n) {
  if (r) {
    let i = Object.keys(r);
    let s = i.length;
    for (let o = 0; o < s; o++) "strict" === n ? e[i[o]] = [r[i[o]]] : e[i[o]] = r[i[o]];
  }
};
exports.getValue = function (e) {
  return exports.isExist(e) ? e : "";
};
exports.isName = h;
exports.getAllMatches = a;
exports.nameRegexp = s;