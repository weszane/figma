import { applyEntity } from "../vendor/425694";
module.exports = function (t, e, r, i) {
  for (o = e, a = t.getCharacterList(), void 0; o < r;) {
    var o;
    var a;
    a = a.set(o, applyEntity(a.get(o), i));
    o++;
  }
  return t.set("characterList", a);
};