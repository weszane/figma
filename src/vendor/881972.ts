import { createFromArray } from "../vendor/172680";
import { EMPTY, fromJS } from "../vendor/425694";
import a from "../vendor/564492";
import s from "../vendor/517500";
import u, { __getLastCreatedEntityKey, __create, __mergeData, __replaceData, __add, __get, __getAll, __loadWithEntities } from "../vendor/725564";
import c, { createEmpty } from "../vendor/33809";
import l from "../vendor/64627";
import f from "../vendor/180307";
import p from "../vendor/391990";
import { List, Record, Repeat, Map as _$$Map, OrderedMap } from "../vendor/116740";
import d from "../vendor/940781";
function n(t) {
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
}
var g = List;
var y = Record;
var v = Repeat;
var m = _$$Map;
var _ = OrderedMap;
var b = y({
  entityMap: null,
  blockMap: null,
  selectionBefore: null,
  selectionAfter: null
});
var S = p("draft_tree_data_support") ? s : a;
var w = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.getEntityMap = function () {
    return u;
  };
  r.getBlockMap = function () {
    return this.get("blockMap");
  };
  r.getSelectionBefore = function () {
    return this.get("selectionBefore");
  };
  r.getSelectionAfter = function () {
    return this.get("selectionAfter");
  };
  r.getBlockForKey = function (t) {
    return this.getBlockMap().get(t);
  };
  r.getKeyBefore = function (t) {
    return this.getBlockMap().reverse().keySeq().skipUntil(function (e) {
      return e === t;
    }).skip(1).first();
  };
  r.getKeyAfter = function (t) {
    return this.getBlockMap().keySeq().skipUntil(function (e) {
      return e === t;
    }).skip(1).first();
  };
  r.getBlockAfter = function (t) {
    return this.getBlockMap().skipUntil(function (e, r) {
      return r === t;
    }).skip(1).first();
  };
  r.getBlockBefore = function (t) {
    return this.getBlockMap().reverse().skipUntil(function (e, r) {
      return r === t;
    }).skip(1).first();
  };
  r.getBlocksAsArray = function () {
    return this.getBlockMap().toArray();
  };
  r.getFirstBlock = function () {
    return this.getBlockMap().first();
  };
  r.getLastBlock = function () {
    return this.getBlockMap().last();
  };
  r.getPlainText = function (t) {
    return this.getBlockMap().map(function (t) {
      return t ? t.getText() : "";
    }).join(t || "\n");
  };
  r.getLastCreatedEntityKey = function () {
    return __getLastCreatedEntityKey();
  };
  r.hasText = function () {
    var t = this.getBlockMap();
    return t.size > 1 || escape(t.first().getText()).replace(/%u200B/g, "").length > 0;
  };
  r.createEntity = function (t, e, r) {
    __create(t, e, r);
    return this;
  };
  r.mergeEntityData = function (t, e) {
    __mergeData(t, e);
    return this;
  };
  r.replaceEntityData = function (t, e) {
    __replaceData(t, e);
    return this;
  };
  r.addEntity = function (t) {
    __add(t);
    return this;
  };
  r.getEntity = function (t) {
    return __get(t);
  };
  r.getAllEntities = function () {
    return __getAll();
  };
  r.loadWithEntities = function (t) {
    return __loadWithEntities(t);
  };
  e.createFromBlockArray = function (t, r) {
    var n = Array.isArray(t) ? t : t.contentBlocks;
    var o = createFromArray(n);
    var a = o.isEmpty() ? new c() : createEmpty(o.first().getKey());
    return new e({
      blockMap: o,
      entityMap: r || u,
      selectionBefore: a,
      selectionAfter: a
    });
  };
  e.createFromText = function (t) {
    var r = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : /\r\n?|\n/g;
    var n = t.split(r).map(function (t) {
      t = d(t);
      return new S({
        key: l(),
        text: t,
        type: "unstyled",
        characterList: g(v(EMPTY, t.length))
      });
    });
    return e.createFromBlockArray(n);
  };
  e.fromJS = function (t) {
    return new e(n({}, t, {
      blockMap: _(t.blockMap).map(e.createContentBlockFromJS),
      selectionBefore: new c(t.selectionBefore),
      selectionAfter: new c(t.selectionAfter)
    }));
  };
  e.createContentBlockFromJS = function (t) {
    var e = t.characterList;
    return new S(n({}, t, {
      data: m(t.data),
      characterList: null != e ? g((Array.isArray(e) ? e : f(e)).map(function (t) {
        return fromJS(t);
      })) : void 0
    }));
  };
  return e;
}(b);
module.exports = w;