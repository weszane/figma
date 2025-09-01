import { Rm, iM } from "../vendor/693164";
import { DF } from "../vendor/463802";
import { Y } from "../vendor/435990";
import { Sd, ZB, HE } from "../vendor/425002";
import { vJ, RT, d8, Ac, w$, gC, gu, Kp, pT } from "../vendor/408361";
import { useCallback, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function g({
  nodeKey: e
}) {
  let [r] = DF();
  let [n, i, p] = Y(e);
  let g = useCallback(e => {
    let i = vJ();
    n && RT(i) && (e.preventDefault(), r.update(() => {
      i.getNodes().forEach(e => {
        b(e) && e.remove();
      });
    }));
    return !1;
  }, [r, n]);
  useEffect(() => Sd(r.registerCommand(d8, s => {
    let o = r.getElementByKey(e);
    return s.target === o && (s.shiftKey || p(), i(!n), !0);
  }, Ac), r.registerCommand(w$, g, Ac), r.registerCommand(gC, g, Ac)), [p, r, n, e, g, i]);
  useEffect(() => {
    let i = r.getElementByKey(e);
    let s = "selected";
    null !== i && (n ? ZB(i, s) : HE(i, s));
  }, [r, n, e]);
  return null;
}
gu("INSERT_HORIZONTAL_RULE_COMMAND");
class m extends Kp {
  static getType() {
    return "horizontalrule";
  }
  static clone(e) {
    return new m(e.__key);
  }
  static importJSON(e) {
    return y();
  }
  static importDOM() {
    return {
      hr: () => ({
        conversion: v,
        priority: 0
      })
    };
  }
  exportJSON() {
    return {
      type: "horizontalrule",
      version: 1
    };
  }
  exportDOM() {
    return {
      element: document.createElement("hr")
    };
  }
  createDOM(e) {
    let r = document.createElement("hr");
    ZB(r, e.theme.hr);
    return r;
  }
  getTextContent() {
    return "\n";
  }
  isInline() {
    return !1;
  }
  updateDOM() {
    return !1;
  }
  decorate() {
    return jsx(g, {
      nodeKey: this.__key
    });
  }
}
function v() {
  return {
    node: y()
  };
}
function y() {
  return pT(new m());
}
function b(e) {
  return e instanceof m;
}
let O = [{
  dependencies: [m],
  export: e => b(e) ? "***" : null,
  regExp: /^(---|\*\*\*|___)\s?$/,
  replace: (e, r, n, i) => {
    let s = y();
    i || null != e.getNextSibling() ? e.replace(s) : e.insertBefore(s);
    s.selectNext();
  },
  type: "element"
}, ...Rm];
export function $$x0({
  transformers: e = O
}) {
  let [r] = DF();
  useEffect(() => iM(r, e), [r, e]);
  return null;
}
export const E = $$x0;