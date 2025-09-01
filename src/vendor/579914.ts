import { RETURN } from "../vendor/685920";
module.exports = function (t) {
  return t.which === RETURN && (t.getModifierState("Shift") || t.getModifierState("Alt") || t.getModifierState("Control"));
};