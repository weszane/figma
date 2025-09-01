import { isValidElement, cloneElement, createContext, useContext } from "react";
import { exists } from "../905/372580";
import { mergeProps } from "../905/545833";
exports.ForwardOverrides = exports.OverridesContext = exports.applyOverride = exports.findOverride = void 0;
function s(e, t) {
  if (exists(t.name)) return e[t.name];
}
exports.findOverride = s;
exports.applyOverride = function (e, t) {
  var i;
  if (!1 === t || null === t) return null;
  if (isValidElement(t)) {
    let s = null !== (i = t.key) && void 0 !== i ? i : e.key;
    let o = mergeProps(e.props, t.props);
    return cloneElement(t, exists(s) ? Object.assign({
      key: s
    }, o) : o);
  }
  return "function" == typeof t ? t(e.props) : "object" == typeof t ? cloneElement(e, mergeProps(e.props, t)) : e;
};
exports.OverridesContext = createContext({});
exports.ForwardOverrides = function (e) {
  var i;
  let {
    children,
    name
  } = e;
  let o = s(null !== (i = useContext(exports.OverridesContext)) && void 0 !== i ? i : {}, {
    name
  }) || {};
  return cloneElement(children, o);
};