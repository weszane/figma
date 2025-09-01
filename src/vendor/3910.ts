import n from "../vendor/850618";
import s from "../vendor/883718";
var i;
Object.defineProperty(exports, "__esModule", {
  value: !0
});
!function (t) {
  t.compose = function (t = {}, e = {}, r = !1) {
    "object" != typeof t && (t = {});
    "object" != typeof e && (e = {});
    let i = n(e);
    for (let n in r || (i = Object.keys(i).reduce((t, e) => (null != i[e] && (t[e] = i[e]), t), {})), t) void 0 !== t[n] && void 0 === e[n] && (i[n] = t[n]);
    return Object.keys(i).length > 0 ? i : void 0;
  };
  t.diff = function (t = {}, e = {}) {
    "object" != typeof t && (t = {});
    "object" != typeof e && (e = {});
    let r = Object.keys(t).concat(Object.keys(e)).reduce((r, i) => (s(t[i], e[i]) || (r[i] = void 0 === e[i] ? null : e[i]), r), {});
    return Object.keys(r).length > 0 ? r : void 0;
  };
  t.invert = function (t = {}, e = {}) {
    t = t || {};
    let r = Object.keys(e).reduce((r, i) => (e[i] !== t[i] && void 0 !== t[i] && (r[i] = e[i]), r), {});
    return Object.keys(t).reduce((r, i) => (t[i] !== e[i] && void 0 === e[i] && (r[i] = null), r), r);
  };
  t.transform = function (t, e, r = !1) {
    if ("object" != typeof t) return e;
    if ("object" != typeof e) return;
    if (!r) return e;
    let i = Object.keys(e).reduce((r, i) => (void 0 === t[i] && (r[i] = e[i]), r), {});
    return Object.keys(i).length > 0 ? i : void 0;
  };
}(i || (i = {}));
exports.$$default = i;