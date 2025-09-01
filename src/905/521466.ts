import { __rest } from "../vendor/56636";
import { cloneElement, forwardRef } from "react";
exports.IY = void 0;
exports.IY = function (e) {
  let t = (t, i) => {
    var {
      overrides,
      parent
    } = t;
    var o = __rest(t, ["overrides", "parent"]);
    return cloneElement(e(o), Object.assign({
      parent,
      overrides,
      ref: i
    }, o));
  };
  Object.defineProperty(t, "name", {
    value: e.name,
    writable: !1
  });
  return forwardRef(t);
};