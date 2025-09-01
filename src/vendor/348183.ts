var r = Object.assign || function (e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = $$arguments[r];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }
  return e;
};
function n(e, r) {
  var n = {};
  for (var i in e) !(r.indexOf(i) >= 0) && Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
  return n;
}
var i = "BEGIN";
var s = "COMMIT";
var o = "REVERT";
var a = [];
function h(e) {
  function n(n, i) {
    var s = g(n);
    var o = s.optimist;
    var a = s.innerState;
    o = o.concat([{
      beforeState: a,
      action: i
    }]);
    p(a = e(a, i), i);
    return r({
      optimist: o
    }, a);
  }
  function a(e, r) {
    var n = g(e);
    var i = n.optimist;
    var s = n.innerState;
    var o = [];
    var a = !1;
    var h = !1;
    i.forEach(function (e) {
      a ? e.beforeState && d(e.action, r.optimist.id) ? (h = !0, o.push({
        action: e.action
      })) : o.push(e) : e.beforeState && !d(e.action, r.optimist.id) ? (a = !0, o.push(e)) : e.beforeState && d(e.action, r.optimist.id) && (h = !0);
    });
    h || console.error('Cannot commit transaction with id "my-transaction" because it does not exist');
    return m(i = o, s, r);
  }
  function h(r, n) {
    var i = g(r);
    var s = i.optimist;
    var o = i.innerState;
    var a = [];
    var h = !1;
    var v = !1;
    var y = o;
    s.forEach(function (r) {
      r.beforeState && d(r.action, n.optimist.id) && (y = r.beforeState, v = !0);
      !d(r.action, n.optimist.id) && (r.beforeState && (h = !0), h && (v && r.beforeState ? a.push({
        beforeState: y,
        action: r.action
      }) : a.push(r)), v && (y = e(y, r.action), p(o, n)));
    });
    v || console.error('Cannot revert transaction with id "my-transaction" because it does not exist');
    return m(s = a, y, n);
  }
  function m(n, i, s) {
    n.length && (n = n.concat([{
      action: s
    }]));
    p(i = e(i, s), s);
    return r({
      optimist: n
    }, i);
  }
  return function (e, r) {
    if (r.optimist) switch (r.optimist.type) {
      case i:
        return n(e, r);
      case s:
        return a(e, r);
      case o:
        return h(e, r);
    }
    var d = g(e);
    return m(d.optimist, d.innerState, r);
  };
}
function d(e, r) {
  return e.optimist && e.optimist.id === r;
}
function p(e, r) {
  if (!e || "object" != typeof e || Array.isArray(e)) throw TypeError('Error while handling "' + r.type + '": Optimist requires that state is always a plain object.');
}
function g(e) {
  if (!e) return {
    optimist: a,
    innerState: e
  };
  var r = e.optimist;
  return {
    optimist: void 0 === r ? a : r,
    innerState: n(e, ["optimist"])
  };
}
module.exports = h;
module.exports.BEGIN = i;
module.exports.COMMIT = s;
module.exports.REVERT = o;