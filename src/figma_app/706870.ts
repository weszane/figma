import { A } from "../vendor/198351";
import { createContext } from "react";
import { exists } from "../905/372580";
exports.css = exports.ABSOLUTE_CLASS = exports.getInvalidFillParentCheckerRef = exports.warnInvalidConstraints = exports.mergeRefs = exports.isAutoLayout = exports.ParentContext = void 0;
let a = A;
function s(e) {
  return exists(e) && "autolayout" === e.type;
}
exports.ParentContext = createContext(null);
exports.isAutoLayout = s;
exports.mergeRefs = function (e) {
  return t => {
    for (let r of e) "function" == typeof r ? r(t) : null != r && (r.current = t);
  };
};
exports.warnInvalidConstraints = function (e) {
  let {
    parent
  } = e;
  e.x && 0 !== e.x && s(parent) && console.warn(`'x=${JSON.stringify(e.x)}' is being used inside an AutoLayout. Constraints are only valid when inside a Frame`);
  e.y && 0 !== e.y && s(parent) && console.warn(`'y=${JSON.stringify(e.y)}' is being used inside an AutoLayout. Constraints are only valid when inside a Frame`);
};
exports.getInvalidFillParentCheckerRef = function (e) {
  return t => {
    let {
      name,
      parent,
      width,
      height,
      length,
      direction
    } = e;
    if ("fill-parent" !== width && "fill-parent" !== height && "fill-parent" !== length || !exists(t)) return;
    let d = t.parentElement;
    let c = exists(d?.dataset.layer);
    if (exists(parent) && !c) console.warn(`Layer "${name}" has 'fill-parent' set, but is wrapped in a non figma-react element. To fix this you can replace the wrapper element with a react Fragment (<></>) or a figma-react <AutoLayout> instead. Or you can add a <FigmaReact> tag between the wrapper and "${name}".`);else if (exists(parent) && "frame" === parent.type) {
      let e;
      let t;
      "fill-parent" === width && (e = "width", t = "x={{ type: 'left-right', leftOffset: 0 rightOffset: 0 }}");
      "fill-parent" === height && (e = "height", t = "y={{ type: 'top-bottom', topOffset: 0 bottomOffset: 0 }}");
      "fill-parent" === length && (e = length, t = "vertical" === direction ? "y={{ type: 'top-bottom', topOffset: 0 bottomOffset: 0 }}" : "x={{ type: 'left-right', leftOffset: 0 rightOffset: 0 }}");
      console.warn(`Layer "${name}" has ${e}="fill-parent" set, but "fill-parent" is not valid when the parent is a Frame. Either use <AutoLayout> for the parent or use ${t} instead of ${e}="fill-parent"`);
    }
  };
};
exports.ABSOLUTE_CLASS = "fg-absolute";
let o = a({
  key: "figma-codegen",
  nonce: window.INITIAL_OPTIONS.csp_nonce
});
exports.css = function (e) {
  let r = e?.position === "absolute";
  let n = o.css(e);
  return r ? `${n} ${exports.ABSOLUTE_CLASS}` : n;
};