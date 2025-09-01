module.exports = {
  encode: function (t, e, r) {
    return t + "-" + e + "-" + r;
  },
  decode: function (t) {
    var e = t.split("-").reverse();
    var r = e[0];
    var n = e[1];
    return {
      blockKey: e.slice(2).reverse().join("-"),
      decoratorKey: parseInt(n, 10),
      leafKey: parseInt(r, 10)
    };
  }
};