import { __rest } from "../vendor/56636";
import { forwardRef, Children, isValidElement, cloneElement } from "react";
import { exists, omit } from "../905/372580";
exports.ComponentSet = void 0;
let s = e => e.map(e => e.trim()).sort().join(",");
let o = e => e.split(",").map(e => {
  let [t] = e.split("=");
  return t.trim();
});
exports.ComponentSet = forwardRef(function (e, t) {
  let {
    children,
    name
  } = e;
  let d = __rest(e, ["children", "name"]);
  let c = Children.toArray(children);
  let u = o(c[0].props.name);
  let p = s(u.map(e => {
    var t;
    return `${e}=${d[e]?.toString()}`;
  }));
  let m = c.find(e => e.props.name && s(e.props.name.split(",")) === p);
  if (!exists(m) || !isValidElement(m)) throw Error(`Cannot find variant ${p} in component set ${name}`);
  return cloneElement(m, Object.assign({
    key: "selected",
    ref: t
  }, omit(d, u)));
});