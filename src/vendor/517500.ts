import { EMPTY } from "../vendor/425694";
import i from "../vendor/652015";
import { List, Map as _$$Map, OrderedSet, Record, Repeat } from "../vendor/116740";
var a = List;
var s = _$$Map;
var u = OrderedSet;
var c = Record;
var l = Repeat;
var f = u();
var p = {
  parent: null,
  characterList: a(),
  data: s(),
  depth: 0,
  key: "",
  text: "",
  type: "unstyled",
  children: a(),
  prevSibling: null,
  nextSibling: null
};
var h = function (t, e) {
  return t.getStyle() === e.getStyle();
};
var d = function (t, e) {
  return t.getEntity() === e.getEntity();
};
var g = function (t) {
  if (!t) return t;
  var e = t.characterList;
  var r = t.text;
  r && !e && (t.characterList = a(l(EMPTY, r.length)));
  return t;
};
var y = function (t) {
  function e() {
    var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : p;
    return t.call(this, g(e)) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.getKey = function () {
    return this.get("key");
  };
  r.getType = function () {
    return this.get("type");
  };
  r.getText = function () {
    return this.get("text");
  };
  r.getCharacterList = function () {
    return this.get("characterList");
  };
  r.getLength = function () {
    return this.getText().length;
  };
  r.getDepth = function () {
    return this.get("depth");
  };
  r.getData = function () {
    return this.get("data");
  };
  r.getInlineStyleAt = function (t) {
    var e = this.getCharacterList().get(t);
    return e ? e.getStyle() : f;
  };
  r.getEntityAt = function (t) {
    var e = this.getCharacterList().get(t);
    return e ? e.getEntity() : null;
  };
  r.getChildKeys = function () {
    return this.get("children");
  };
  r.getParentKey = function () {
    return this.get("parent");
  };
  r.getPrevSiblingKey = function () {
    return this.get("prevSibling");
  };
  r.getNextSiblingKey = function () {
    return this.get("nextSibling");
  };
  r.findStyleRanges = function (t, e) {
    i(this.getCharacterList(), h, t, e);
  };
  r.findEntityRanges = function (t, e) {
    i(this.getCharacterList(), d, t, e);
  };
  return e;
}(c(p));
module.exports = y;