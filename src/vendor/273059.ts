import { Record } from "../vendor/116740";
var n = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.getType = function () {
    return this.get("type");
  };
  r.getMutability = function () {
    return this.get("mutability");
  };
  r.getData = function () {
    return this.get("data");
  };
  return e;
}(Record({
  type: "TOKEN",
  mutability: "IMMUTABLE",
  data: Object
}));
module.exports = n;