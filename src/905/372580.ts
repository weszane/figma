exports.flatMap = exports.flatten = exports.omit = exports.keys = exports.values = exports.entries = exports.exists = void 0;
exports.exists = function (e) {
  return null != e;
};
exports.entries = Object.entries;
exports.values = Object.values;
exports.keys = Object.keys;
let i = exports.keys;
function n(e) {
  return e.reduce((e, t) => e.concat(t), []);
}
exports.omit = function (e, t) {
  let n = {};
  for (let r of i(e)) -1 === t.indexOf(r) && (n[r] = e[r]);
  return n;
};
exports.flatten = n;
exports.flatMap = function (e, t) {
  return n(e.map(t));
};