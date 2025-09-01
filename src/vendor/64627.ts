var e = {};
module.exports = function () {
  for (var t; void 0 === t || e.hasOwnProperty(t) || !isNaN(+t);) t = Math.floor(0x1000000 * Math.random()).toString(32);
  e[t] = !0;
  return t;
};