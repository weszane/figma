import { TRANSFORMERS, registerMarkdownShortcuts } from "../vendor/693164";
import { useLexicalComposerContext } from "../vendor/463802";
import { Y } from "../vendor/435990";
import { mergeRegister, addClassNamesToElement, removeClassNamesFromElement } from "../vendor/425002";
import { $getSelection, $isNodeSelection, CLICK_COMMAND, COMMAND_PRIORITY_LOW, KEY_DELETE_COMMAND, KEY_BACKSPACE_COMMAND, createCommand, DecoratorNode, $applyNodeReplacement } from "../vendor/408361";
import { useCallback, useEffect } from "react";
import { jsx } from "react/jsx-runtime";
function g({
  nodeKey: e
}) {
  let [r] = useLexicalComposerContext();
  let [n, i, p] = Y(e);
  let g = useCallback(e => {
    let i = $getSelection();
    n && $isNodeSelection(i) && (e.preventDefault(), r.update(() => {
      i.getNodes().forEach(e => {
        b(e) && e.remove();
      });
    }));
    return !1;
  }, [r, n]);
  useEffect(() => mergeRegister(r.registerCommand(CLICK_COMMAND, s => {
    let o = r.getElementByKey(e);
    return s.target === o && (s.shiftKey || p(), i(!n), !0);
  }, COMMAND_PRIORITY_LOW), r.registerCommand(KEY_DELETE_COMMAND, g, COMMAND_PRIORITY_LOW), r.registerCommand(KEY_BACKSPACE_COMMAND, g, COMMAND_PRIORITY_LOW)), [p, r, n, e, g, i]);
  useEffect(() => {
    let i = r.getElementByKey(e);
    let s = "selected";
    null !== i && (n ? addClassNamesToElement(i, s) : removeClassNamesFromElement(i, s));
  }, [r, n, e]);
  return null;
}
createCommand("INSERT_HORIZONTAL_RULE_COMMAND");
class m extends DecoratorNode {
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
    addClassNamesToElement(r, e.theme.hr);
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
  return $applyNodeReplacement(new m());
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
}, ...TRANSFORMERS];
export function $$x0({
  transformers: e = O
}) {
  let [r] = useLexicalComposerContext();
  useEffect(() => registerMarkdownShortcuts(r, e), [r, e]);
  return null;
}
export const E = $$x0;