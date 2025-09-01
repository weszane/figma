import { EMPTY } from "../vendor/425694";
import i from "../vendor/652015";
import { List, Map as _$$Map, OrderedSet, Record, Repeat } from "../vendor/116740";
var a = List;
var s = _$$Map;
var u = OrderedSet;
var c = Record;
var l = Repeat;
var f = u();
var p = c({
  key: "",
  type: "unstyled",
  text: "",
  characterList: a(),
  depth: 0,
  data: s()
});
var h = function (t) {
  if (!t) return t;
  var e = t.characterList;
  var r = t.text;
  r && !e && (t.characterList = a(l(EMPTY, r.length)));
  return t;
};
var d = function (t) {
  function e(e) {
    return t.call(this, h(e)) || this;
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
  r.findStyleRanges = function (t, e) {
    i(this.getCharacterList(), g, t, e);
  };
  r.findEntityRanges = function (t, e) {
    i(this.getCharacterList(), y, t, e);
  };
  return e;
}(p);
function g(t, e) {
  return t.getStyle() === e.getStyle();
}
function y(t, e) {
  return t.getEntity() === e.getEntity();
}
module.exports = d;