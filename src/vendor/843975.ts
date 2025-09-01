import { List } from "../vendor/116740";
import { create } from "../vendor/425694";
var i = List;
module.exports = function (t, e) {
  return i(t.map(function (t, r) {
    var i = e[r];
    return create({
      style: t,
      entity: i
    });
  }));
};