import n from "../vendor/273059";
import { Map as _$$Map } from "../vendor/116740";
import o from "../vendor/153658";
import a from "../vendor/425141";
var s = _$$Map();
var u = a();
function c(t, e) {
  console.warn("WARNING: " + t + ' will be deprecated soon!\nPlease use "' + e + '" instead.');
}
var l = {
  getLastCreatedEntityKey: function () {
    c("DraftEntity.getLastCreatedEntityKey", "contentState.getLastCreatedEntityKey");
    return l.__getLastCreatedEntityKey();
  },
  create: function (t, e, r) {
    c("DraftEntity.create", "contentState.createEntity");
    return l.__create(t, e, r);
  },
  add: function (t) {
    c("DraftEntity.add", "contentState.addEntity");
    return l.__add(t);
  },
  get: function (t) {
    c("DraftEntity.get", "contentState.getEntity");
    return l.__get(t);
  },
  __getAll: function () {
    return s;
  },
  __loadWithEntities: function (t) {
    s = t;
    u = a();
  },
  mergeData: function (t, e) {
    c("DraftEntity.mergeData", "contentState.mergeEntityData");
    return l.__mergeData(t, e);
  },
  replaceData: function (t, e) {
    c("DraftEntity.replaceData", "contentState.replaceEntityData");
    return l.__replaceData(t, e);
  },
  __getLastCreatedEntityKey: function () {
    return u;
  },
  __create: function (t, e, r) {
    return l.__add(new n({
      type: t,
      mutability: e,
      data: r || {}
    }));
  },
  __add: function (t) {
    u = a();
    s = s.set(u, t);
    return u;
  },
  __get: function (t) {
    var e = s.get(t);
    e || o(!1);
    return e;
  },
  __mergeData: function (t, e) {
    var r = l.__get(t);
    var n = function (t) {
      for (var e = 1; e < $$arguments.length; e++) {
        var r = null != $$arguments[e] ? $$arguments[e] : {};
        var n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable;
        })));
        n.forEach(function (e) {
          var n;
          n = r[e];
          e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = n;
        });
      }
      return t;
    }({}, r.getData(), e);
    var i = r.set("data", n);
    s = s.set(t, i);
    return i;
  },
  __replaceData: function (t, e) {
    var r = l.__get(t).set("data", e);
    s = s.set(t, r);
    return r;
  }
};
module.exports = l;