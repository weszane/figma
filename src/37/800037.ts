import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { VariablesBindings, VariableResolvedDataType, VariableDataType } from "../figma_app/763686";
import { n as _$$n } from "../vendor/110313";
import { a as _$$a } from "../vendor/683966";
import { A as _$$A } from "../vendor/211731";
import { G as _$$G } from "../vendor/947080";
import { D as _$$D } from "../vendor/212109";
import { $ as _$$$ } from "../vendor/909072";
import { $selectAll } from "@lexical/selection";
import { getFeatureFlags } from "../905/601108";
import m from "classnames";
import { $isNodeSelection, $getSelection, KEY_ARROW_UP_COMMAND, COMMAND_PRIORITY_LOW, KEY_ARROW_DOWN_COMMAND, $setSelection, $createRangeSelection, DecoratorNode, TextNode, $getNodeByKey, KEY_BACKSPACE_COMMAND, KEY_DELETE_COMMAND, $$if, COMMAND_PRIORITY_NORMAL, KEY_ESCAPE_COMMAND, INSERT_PARAGRAPH_COMMAND, $isRangeSelection, $isDecoratorNode, $getRoot, $isElementNode, $isParagraphNode, $isTextNode, BLUR_COMMAND, SELECTION_CHANGE_COMMAND, $createTextNode, $createParagraphNode } from "lexical";
import { useSetupPlayback, generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { useKeyboardNavigationItem } from "../figma_app/119475";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { d as _$$d } from "../905/954754";
import { o as _$$o } from "../905/609215";
import { BQ, pN } from "../figma_app/852050";
import { R as _$$R } from "../905/69216";
import { Yc, lC, LV } from "../905/820169";
import { he, Cq, aA, tz, J4, TL, uX, d9, HC, sO, q2, a1, $$if as _$$$$if, kl, DE, tJ, yZ, er as _$$er, I0, yy, Ub, Q6, _z, bU, wL, ZX, N_ } from "../figma_app/632975";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { Y as _$$Y } from "../vendor/435990";
import { eF } from "../figma_app/394327";
import { J2, wG } from "../905/331989";
import { getPathLeaf } from "../905/782020";
import { getLocalVariableInfo, getLocalVariableSetInfo } from "../figma_app/633080";
import { X as _$$X } from "../905/55424";
import { noop } from 'lodash-es';
import { f as _$$f } from "../37/573389";
import en from "../vendor/73823";
import { logError } from "../905/714362";
import { Id } from "../figma_app/626177";
import { A as _$$A2 } from "../905/749030";
import { HZ } from "../figma_app/74668";
import { Z as _$$Z } from "../905/230174";
import { TX, _P, Oe, MT, Rv, zc, KF, Rt, qf } from "../905/549307";
import { eB } from "../905/794523";
var _ = m;
function F({
  variable: e,
  variableCollection: t,
  modeID: r,
  nodeKey: s,
  componentProp: l
}) {
  let [o] = useLexicalComposerContext();
  let [a, u] = _$$Y(s);
  let [c, p] = useState(null);
  let d = useMemo(() => $isNodeSelection(c) && a, [a, c]);
  let f = useCallback(() => !!d, [d]);
  useEffect(() => o.registerUpdateListener(({
    editorState: e
  }) => p(e.read(() => $getSelection()))), [o]);
  useEffect(() => o.registerCommand(KEY_ARROW_UP_COMMAND, f, COMMAND_PRIORITY_LOW), [o, f]);
  useEffect(() => o.registerCommand(KEY_ARROW_DOWN_COMMAND, f, COMMAND_PRIORITY_LOW), [o, f]);
  let m = e && t && getPathLeaf(e.name) || l && l.name;
  let _ = m ? r && t ? m + ": " + he(t, r) : m : getI18nString("proto.expression_builder_entry.missing");
  let g = a ? J2.SELECTED : l ? J2.COMPONENT : J2.DEFAULT;
  let O = BQ(e?.node_id);
  let h = l ? Cq(l) : O;
  return jsx("span", {
    children: jsx(wG, {
      text: _,
      colorTheme: g,
      thumbnailValue: h,
      isDeleted: !!e && eF(e),
      onClick: e => {
        o.update(() => {
          e.shiftKey || e.metaKey || $setSelection($createRangeSelection());
          u(!0);
        });
      }
    })
  });
}
class D extends DecoratorNode {
  constructor(e, t, r) {
    super(r);
    this.__stablePathToNode = e;
    this.__componentProp = t;
  }
  static getType() {
    return "component-prop-token";
  }
  static clone(e) {
    return new D(e.__stablePathToNode, e.__componentProp, e.__key);
  }
  getTextContent() {
    return this.__componentProp?.name || getI18nString("proto.expression_builder_entry.missing");
  }
  decorate() {
    return jsx(F, {
      nodeKey: this.__key,
      componentProp: this.__componentProp
    });
  }
  createDOM() {
    return document.createElement("span");
  }
  updateDOM() {
    return !1;
  }
  exportDOM() {
    let e = document.createElement("span");
    this.__stablePathToNode && e.setAttribute("data-component-prop-alias-stable-path", JSON.stringify(this.__stablePathToNode));
    this.__componentProp && e.setAttribute("data-component-property-id", this.__componentProp.explicitDefId);
    return {
      element: e
    };
  }
  static importDOM() {
    return {
      span: e => ({
        conversion: w,
        priority: 2
      })
    };
  }
  exportJSON() {
    return {
      stablePathToNode: this.__stablePathToNode,
      componentProp: this.__componentProp,
      type: "component-prop-token",
      version: 1
    };
  }
  static importJSON(e) {
    return k(e.stablePathToNode, e.componentProp);
  }
}
function k(e, t) {
  return new D(e, t);
}
function X(e) {
  return e instanceof D;
}
function w(e) {
  let t = JSON.parse(e.getAttribute("data-component-prop-alias-stable-path") ?? "[]");
  let r = e.getAttribute("data-component-property-id");
  if (t && r) {
    let e = aA(t, r);
    if (e) return {
      node: k(JSON.parse(t), e)
    };
  }
  return {
    node: k()
  };
}
class B extends DecoratorNode {
  constructor(e, t, r, n) {
    super(n);
    this.__variable = e;
    this.__variableCollection = t;
    this.__modeID = r;
  }
  static getType() {
    return "expression-token";
  }
  static clone(e) {
    return new B(e.__variable, e.__variableCollection, e.__modeID, e.__key);
  }
  getTextContent() {
    return this.__variable?.name || getI18nString("proto.expression_builder_entry.missing");
  }
  decorate() {
    return jsx(F, {
      variable: this.__variable,
      variableCollection: this.__variableCollection,
      modeID: this.__modeID,
      nodeKey: this.__key
    });
  }
  createDOM() {
    return document.createElement("span");
  }
  updateDOM() {
    return !1;
  }
  exportDOM() {
    let e = document.createElement("span");
    this.__variable && e.setAttribute("data-variable-id", this.__variable.node_id);
    this.__variableCollection && e.setAttribute("data-variable-collection-id", this.__variableCollection.node_id);
    this.__modeID && e.setAttribute("data-mode-id", this.__modeID);
    return {
      element: e
    };
  }
  static importDOM() {
    return {
      span: e => ({
        conversion: W,
        priority: 2
      })
    };
  }
  exportJSON() {
    return {
      variable: this.__variable,
      variableCollection: this.__variableCollection,
      modeID: this.__modeID,
      type: "expression-token",
      version: 1
    };
  }
  static importJSON(e) {
    return j(e.variable, e.variableCollection, e.modeID);
  }
  setModeID(e) {
    this.getWritable().__modeID = e;
  }
}
function j(e, t, r) {
  return new B(e, t, r);
}
function V(e) {
  return e instanceof B;
}
function W(e) {
  let t = e.getAttribute("data-variable-id");
  let r = e.getAttribute("data-variable-collection-id");
  if (null !== t) {
    let n = VariablesBindings.getLocalVariableInfo(t);
    let i = VariablesBindings.getLocalVariableSetsInfo().find(e => e.id === r);
    if (n && i) return {
      node: j(getLocalVariableInfo(n), getLocalVariableSetInfo(i), e.getAttribute("data-mode-id") ?? void 0)
    };
  }
  return {
    node: j()
  };
}
class Y extends TextNode {
  constructor(e, t) {
    super(e, t);
  }
  static getType() {
    return "literal";
  }
  static clone(e) {
    return new Y(e.__text, e.__key);
  }
  createDOM(e) {
    return super.createDOM(e);
  }
  exportDOM() {
    return {
      element: document.createElement("span")
    };
  }
  static importDOM() {
    return {
      span: e => ({
        conversion: U,
        priority: 2
      })
    };
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "literal",
      version: 1
    };
  }
  static importJSON(e) {
    let t = J(e.text);
    t.setTextContent(e.text);
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    return t;
  }
}
function J(e) {
  return new Y(e);
}
function K(e) {
  return e instanceof Y;
}
function U(e) {
  let t = e.textContent;
  return t ? {
    node: J(t)
  } : null;
}
function z({
  text: e,
  nodeKey: t
}) {
  let [r] = useLexicalComposerContext();
  let s = useCallback(e => {
    r.update(() => {
      let r = $getNodeByKey(t);
      r && (r.getNextSibling() ? r.selectNext(0, 0) : r.getParent()?.selectEnd(), e.preventDefault());
    });
  }, [r, t]);
  return jsx(_$$X, {
    text: e,
    onMouseDown: s
  });
}
class q extends DecoratorNode {
  constructor(e, t) {
    super(t);
    this.__text = e;
  }
  setText(e) {
    this.getWritable().__text = e;
  }
  static getType() {
    return "operator";
  }
  static clone(e) {
    return new q(e.__text, e.__key);
  }
  getTextContent() {
    return this.__text;
  }
  decorate() {
    return jsx(z, {
      text: this.__text,
      nodeKey: this.__key
    });
  }
  createDOM() {
    return document.createElement("span");
  }
  updateDOM() {
    return !1;
  }
  exportDOM() {
    return {
      element: document.createElement("span")
    };
  }
  static importDOM() {
    return {
      span: e => ({
        conversion: Q,
        priority: 2
      })
    };
  }
  exportJSON() {
    return {
      text: this.__text,
      type: "operator",
      version: 1
    };
  }
  static importJSON(e) {
    return Z(e.text);
  }
  isKeyboardSelectable() {
    return !1;
  }
}
function Z(e) {
  return new q(e);
}
function H(e) {
  return e instanceof q;
}
function Q(e) {
  return {
    node: Z(e.TEXT_NODE.toString())
  };
}
function $({
  searchNavigationItem: e
}) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    t.focus();
  }, [t]);
  useEffect(() => {
    e && e.fauxFocus();
  }, [e]);
  return null;
}
function ee({
  error: e,
  highlightedItemID: t,
  onSubmit: r,
  onClose: n,
  wiggleCount: s,
  setWiggleCount: l
}) {
  let [o] = useLexicalComposerContext();
  let a = useCallback(() => !t && (e ? l(s + 1, "enter_error") : r(), !0), [e, t, r, l, s]);
  let u = useCallback(() => (n("esc_cancel"), !0), [n]);
  let c = useCallback(e => (o.update(() => {
    let t = $getSelection();
    if ($isNodeSelection(t)) {
      e.preventDefault();
      let r = t.getNodes();
      let n = r[r.length - 1];
      n.getPreviousSibling() ? n.selectPrevious() : n.getParent()?.selectStart();
      r.forEach(e => {
        e.remove();
      });
    }
  }), !1), [o]);
  useEffect(() => o.registerCommand(KEY_BACKSPACE_COMMAND, c, COMMAND_PRIORITY_LOW), [o, c]);
  useEffect(() => o.registerCommand(KEY_DELETE_COMMAND, c, COMMAND_PRIORITY_LOW), [o, c]);
  useEffect(() => o.registerCommand($$if, a, COMMAND_PRIORITY_NORMAL), [o, a]);
  useEffect(() => o.registerCommand(KEY_ESCAPE_COMMAND, u, COMMAND_PRIORITY_LOW), [o, u]);
  useEffect(() => o.registerCommand(INSERT_PARAGRAPH_COMMAND, () => !0, COMMAND_PRIORITY_NORMAL), [o]);
  useEffect(() => {
    let e = e => {
      let t = !1;
      o.update(() => {
        let r = $getSelection();
        e.metaKey && "ArrowRight" === e.key && $isRangeSelection(r) && 0 === r.anchor.offset && 1 === r.getNodes().length && $isDecoratorNode(r.getNodes()[0]) && ($getRoot().selectEnd(), t = !0);
      });
      return t;
    };
    return o.registerRootListener((t, r) => {
      null !== r && r.removeEventListener("keydown", e);
      null !== t && t.addEventListener("keydown", e);
    });
  }, [o]);
  return null;
}
var ei = en;
let el = [{
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Addition",
    value: "+",
    supports: (e, t) => e === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Subtraction",
    value: "-",
    supports: (e, t) => e === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Multiplication",
    value: "*",
    supports: (e, t) => e === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Division",
    value: "/",
    supports: (e, t) => e === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Add to string",
    value: "+",
    supports: (e, t) => tz(e) && tz(t)
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Equal to",
    value: "==",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Not equal to",
    value: "!=",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Greater than",
    value: ">",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Greater than or equal to",
    value: ">=",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Less than",
    value: "<",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Less than or equal to",
    value: "<=",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.FLOAT
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "And",
    value: "and",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.BOOLEAN
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "OPERATOR",
    name: "Or",
    value: "or",
    supports: (e, t) => e === VariableResolvedDataType.BOOLEAN && t === VariableResolvedDataType.BOOLEAN
  }
}];
function eo(e) {
  return $isElementNode(e) ? ei()(e.getChildren().map(e => $isElementNode(e) ? e.getChildren() : [])) : [];
}
function ea(e, t, r) {
  let n = $getSelection();
  if (n) {
    if (!t || $isParagraphNode(t) || K(t) && !K(e) || H(t) && !H(e) || V(t) && !V(e) || X(t) && !X(e)) n.insertNodes([e]);else if ($isTextNode(t)) {
      let n = t.splitText(r[0], r[1]);
      1 === n.length ? n[0].replace(e) : 2 === n.length ? 0 === r[0] ? n[0].replace(e) : n[1].replace(e) : 3 === n.length ? n[1].replace(e) : logError("expressions", "invalid number of nodes after split to insert variable");
    } else t.replace(e);
  }
}
function eu(e) {
  let t = e.getNodes();
  if (t.length > 1) return "";
  let r = t.filter(e => $isTextNode(e));
  return 0 === r.length ? "" : r.some(e => !K(e)) ? r[0].getTextContent() : null;
}
let ec = [{
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "LITERAL",
    name: "True",
    value: "Boolean literal"
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "LITERAL",
    name: "False",
    value: "Boolean literal"
  }
}, {
  type: Yc.EXPRESSION,
  expressionItem: {
    type: "LITERAL",
    name: "Not",
    value: "Boolean operator",
    supports: e => e === VariableResolvedDataType.BOOLEAN
  }
}];
function ep(e, t) {
  return el.filter(r => "OPERATOR" === r.expressionItem.type && r.expressionItem.supports(t, e));
}
function eO({
  listItems: e,
  resolvedType: t,
  highlightedItemID: r,
  setHighlightedItemID: s,
  currentView: l,
  setCurrentView: o,
  onItemSelect: a,
  recordingKey: u
}) {
  let [c] = useLexicalComposerContext();
  let p = useCallback(e => {
    "node_id" in e ? s(e.node_id) : "COMPONENT_PROP" === e.type ? s(lC(e)) : s(e.name);
  }, [s]);
  let d = useSetupPlayback(u ?? "", "ENTER", useCallback(() => {
    c.update(() => {
      let e = $getSelection()?.getNodes();
      a(e?.[0]);
    });
    s(null);
  }, [c, a, s]));
  let f = useRef(null);
  let m = useCallback(() => (c.update(() => {
    f.current && (c.focus(), f.current.selectNext(), f.current = null);
  }), !1), [c]);
  let _ = useCallback(() => (r === J4(e) && s(null), !1), [r, e, s]);
  useEffect(() => c.registerCommand($$if, () => (d(), !0), COMMAND_PRIORITY_LOW), [c, d]);
  useEffect(() => c.registerCommand(BLUR_COMMAND, m, COMMAND_PRIORITY_LOW), [c, m]);
  useEffect(() => c.registerCommand(KEY_ARROW_UP_COMMAND, _, COMMAND_PRIORITY_NORMAL), [c, _]);
  let O = TL(t);
  let h = _$$A2(O, null);
  let E = useMemo(() => h.sort((e, t) => e.fileName.localeCompare(t.fileName)), [h]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: TX,
      children: jsx(_$$Z, {
        currentView: l,
        subscribedLibraries: E,
        resolvedType: t,
        onSetSelect: o,
        setControlRightButtons: jsx(_$$f, {
          resolvedTypes: O
        })
      })
    }), jsx(Id, {
      className: eB,
      "data-testid": "expression-builder-variables-panel",
      children: jsx(HZ, {
        disabledVariableIds: new Set(),
        highlightedItemID: r,
        listItems: e,
        onItemContextMenu: noop,
        onItemHighlight: p,
        onItemMouseLeave: noop,
        onItemSelect: e => {
          d();
          c.update(() => {
            f.current = function (e, t) {
              let r;
              let n = eo(e).reverse();
              "node_id" in t ? r = n.filter(e => V(e)).find(e => e.__variable?.node_id === t.node_id) : "MODE" === t.type ? r = n.filter(e => V(e)).find(e => e.__modeID === t.name) : "OPERATOR" === t.type ? r = n.filter(e => $isTextNode(e)).find(e => e.getTextContent().trim().endsWith(t.value)) : "LITERAL" === t.type ? r = n.filter(e => $isTextNode(e)).find(e => e.getTextContent().trim().endsWith(t.name)) : "COMPONENT_PROP" === t.type && (r = n.filter(e => X(e)).find(e => e.__stablePathToNode === t.value.stablePath && e.__componentProp?.name === t.value.name));
              return r ?? null;
            }($getRoot(), e);
          });
        },
        pickerType: "fields",
        recordingKey: generateRecordingKey(u, "variableList"),
        selectedItemID: null
      })
    })]
  });
}
function eh({
  listItems: e,
  resolvedType: t,
  searchQuery: r,
  isInConditional: n,
  setSearchQuery: l,
  setExpressionListItems: o,
  setHighlightedItemID: a
}) {
  let [u] = useLexicalComposerContext();
  let c = useCallback(() => {
    let e = $getSelection();
    let r = function (e, t, r) {
      if ($isNodeSelection(e)) {
        let t = e.getNodes();
        if (t.length > 1) return [];
        let r = t[0];
        if (V(r)) {
          let e = r.__variable;
          let t = r.__variableCollection;
          return e && eF(e) || !e || !t ? [] : function (e, t) {
            let r = [{
              type: Yc.SECTION_HEADER,
              name: "Modes"
            }, {
              type: Yc.EXPRESSION,
              expressionItem: {
                type: "MODE",
                id: "",
                name: "Auto",
                value: ""
              }
            }];
            let n = e.modeValues;
            for (let i in n) {
              let l = n[i].type === VariableDataType.EXPRESSION ? "expression" : e.resolvedType === VariableResolvedDataType.FLOAT ? String(parseFloat(n[i].value.toFixed(2))) : n[i].value;
              r.push({
                type: Yc.EXPRESSION,
                expressionItem: {
                  type: "MODE",
                  id: i,
                  name: he(t, i),
                  value: l
                }
              });
            }
            return r;
          }(e, t);
        }
      } else if ($isRangeSelection(e)) {
        let n = function (e, t) {
          let r = e.getNodes()[0];
          let n = e => {
            let t = e.trim();
            return ["&", "|"].includes(t) ? "&" === t ? "and" : "or" : t;
          };
          if ((V(r) || X(r)) && e.anchor.offset > 0) {
            let e = V(r) ? r.__variable?.resolvedType : r.__componentProp?.varValue.resolvedType;
            return void 0 === e ? [] : ep(e, t);
          }
          let i = r.getPreviousSibling();
          if ($isTextNode(r) && (V(i) || X(i))) {
            let e = V(i) ? i.__variable?.resolvedType : i.__componentProp?.varValue.resolvedType;
            if (void 0 === e) return [];
            let s = n(r.getTextContent());
            return ep(e, t).filter(e => e.expressionItem.value.startsWith(s));
          }
          if (K(r)) return e.anchor.offset === r.getTextContent().length ? ep(r.__text.includes('"') ? VariableResolvedDataType.STRING : VariableResolvedDataType.BOOLEAN, t) : [];
          if ($isTextNode(r) && K(i)) {
            let e = i.__text.includes('"') ? VariableResolvedDataType.STRING : VariableResolvedDataType.BOOLEAN;
            let l = n(r.getTextContent());
            return ep(e, t).filter(e => e.expressionItem.value.startsWith(l));
          }
          if (H(r) && e.anchor.offset > 0) {
            let e = r.getTextContent().trim();
            if (">" === e || "<" === e) return el.filter(t => 2 === t.expressionItem.value.length && t.expressionItem.value.startsWith(e));
          }
          if ($isTextNode(r) && H(i) && 0 === e.anchor.offset) {
            let e = i.getTextContent().trim();
            if (">" === e || "<" === e) return el.filter(t => 2 === t.expressionItem.value.length && t.expressionItem.value.startsWith(e));
          }
          return [];
        }(e, t);
        if (n.length > 0) return n;
        if (t === VariableResolvedDataType.STRING) {
          let t = eu(e);
          if (t && t.length > 0) return function (e) {
            if (!e?.trim() || '"' === e.trim()) return [];
            let t = e;
            e.startsWith('"') || (t = '"' + t);
            e.endsWith('"') || (t += '"');
            return [{
              type: Yc.EXPRESSION,
              expressionItem: {
                type: "LITERAL",
                name: t,
                value: "String literal"
              }
            }];
          }(t);
        } else if (t === VariableResolvedDataType.BOOLEAN) return function (e, t) {
          let r = e.getNodes()[0];
          let n = e => {
            let t = e.getPreviousSibling();
            return K(t) && ("false" === t.getTextContent().toLowerCase() || "true" === t.getTextContent().toLowerCase()) || V(t) && t.__variable?.resolvedType === VariableResolvedDataType.BOOLEAN || X(t) && t.__componentProp?.varValue.resolvedType === VariableResolvedDataType.BOOLEAN;
          };
          if (H(r) && e.anchor.offset > 0 && uX.test(r.__text) && n(r)) return ec;
          let i = e => ec.filter(t => t.expressionItem.name.toLowerCase().startsWith(e.getTextContent().trim().toLowerCase()));
          let l = r.getPreviousSibling();
          if ($isTextNode(r) && H(l) && uX.test(l.__text) && n(l)) return i(r);
          if (H(r) && e.anchor.offset > 0 && ["not", "!"].includes(r.__text.toLowerCase())) return ec.filter(e => "Not" !== e.expressionItem.name);
          if ($isTextNode(r) && H(l) && ["not", "!"].includes(l.__text.toLowerCase())) return ec.filter(e => "Not" !== e.expressionItem.name && e.expressionItem.name.toLowerCase().startsWith(r.getTextContent().trim().toLowerCase()));
          let o = eo($getRoot());
          return t || 0 !== o.length && (1 !== o.length || r !== o[0]) ? [] : i(r);
        }(e, r);
      }
      return [];
    }(e, t, n);
    if (o(r), r.length > 0 && r.some(e => e.type === Yc.EXPRESSION && "LITERAL" !== e.expressionItem.type)) l(null);else if ($isRangeSelection(e)) {
      let t = eu(e);
      l(t?.trim() ?? null);
    } else if ($isNodeSelection(e)) {
      let t = e.getNodes();
      1 === t.length && V(t[0]) && t[0].__variable && eF(t[0].__variable) ? l("") : l(null);
    } else logError("expressions", "somehow hitting a GridSelection or null selection");
    return !1;
  }, [t, n, o, l]);
  useEffect(() => {
    a(d9(r) ? HC(e) : null);
  }, [e, r, a]);
  useEffect(() => u.registerCommand(SELECTION_CHANGE_COMMAND, c, COMMAND_PRIORITY_LOW), [u, c]);
  return null;
}
let eE = new RegExp(/[ .]\s+/g);
let eb = new RegExp(/VariableID:[0-9a-zA-Z/]+:[0-9]+/);
function eT({
  highlightedItemID: e,
  searchQuery: t,
  variables: r,
  componentProps: n,
  resolvedType: l,
  onItemSelect: o
}) {
  let [a] = useLexicalComposerContext();
  let u = (e, t) => {
    for (let r of t) if (getPathLeaf(r.name).toLowerCase().startsWith(e.toLowerCase())) return !0;
    return !1;
  };
  let c = (e, t) => t.some(t => t.value.name.toLowerCase().startsWith(e.toLowerCase()));
  let p = useCallback(e => {
    let t = e.getTextContent();
    if (t.includes('"') || u(t.trim(), r) || c(t.trim(), n)) return;
    if (l === VariableResolvedDataType.BOOLEAN && sO.test(t)) {
      let r = sO.lastIndex - 3;
      ea(Z(t.slice(r, r + 3)), e, [r, r + 3]);
    }
    let i = e.getPreviousSibling();
    if (H(i) && (">" === i.getTextContent() || "<" === i.getTextContent() || "!" === i.getTextContent()) && t.startsWith("=") && (t = i.getTextContent() + t), l === VariableResolvedDataType.BOOLEAN && q2.test(t)) {
      let r = q2.lastIndex - 2;
      let n = t.slice(r, r + 2);
      H(i) && (">=" === n || "<=" === n || "!=" === n) && (">" === i.getTextContent() || "<" === i.getTextContent() || "!" === i.getTextContent()) ? (e.setTextContent(e.getTextContent().slice(1)), i.replace(Z(n)), e.selectNext(0, 0)) : ea(Z(n), e, [r, r + 2]);
    }
    t = e.getTextContent();
    let o = r => {
      let n = r.lastIndex - 1;
      ea(Z(t[n]), e, [n, n + 1]);
      t = e.getTextContent();
    };
    (l === VariableResolvedDataType.FLOAT || l === VariableResolvedDataType.BOOLEAN) && a1.test(t) && o(a1);
    l === VariableResolvedDataType.BOOLEAN && _$$$$if.test(t) && !t.match(kl) && o(_$$$$if);
    l === VariableResolvedDataType.STRING && DE.test(t) && o(DE);
    tJ.test(t) && o(tJ);
  }, [n, l, r]);
  let d = useCallback(e => {
    let t = e.getTextContent();
    let i = t.match(yZ);
    if (i) {
      let r = J('"' + i[1] + '"');
      let n = t.indexOf('"');
      ea(r, e, [n, t.indexOf('"', n + 1) + 1]);
    }
    if (u(t, r) || c(t, n)) return;
    let s = t.match(_$$er);
    if (s) {
      let r = s[1];
      let n = t.trim().toLowerCase();
      if ("false" === n || "true" === n) {
        let n = J(r);
        let i = t.indexOf(r);
        ea(n, e, [i, i + r.length]);
      }
    }
  }, [n, r]);
  let f = useCallback(i => {
    if (!t?.trim() || !e || !i.isSelected()) return;
    let s = i.getTextContent();
    let l = s.charAt(s.length - 1);
    !l.match(I0) || s === l || u(s.trimStart(), r) || c(s.trimStart(), n) || o(i, e => e && "node_id" in e ? !getPathLeaf(e.name).toLowerCase().startsWith(t.toLowerCase()) : e && "COMPONENT_PROP" === e.type ? !e.value.name.toLowerCase().startsWith(t.toLowerCase()) : '"' === t.charAt(0) ? !l.match(yy) : !l.match(I0));
  }, [n, e, o, t, r]);
  let m = useCallback(e => {
    let t = e.getTextContent();
    if (eE.test(t)) {
      let r = t.replace(eE, " ");
      a.update(() => {
        let t = $getSelection();
        $isRangeSelection(t) && (e.setTextContent(r), e.select(t.anchor.offset - 1));
      });
    }
  }, [a]);
  let _ = useCallback(e => {
    let t = e.getTextContent();
    let r = t.match(eb);
    if (r) {
      let n = r[0];
      let i = new _$$o();
      let s = i.variableIdToVariable(n);
      if (!s) return;
      let l = i.variableCollectionIdToVariableCollection(s.variableSetId);
      if (!l) return;
      let o = j(s, l);
      let a = t.indexOf(n);
      ea(o, e, [a, a + n.length]);
    }
  }, []);
  let g = useCallback(e => {
    a.update(() => {
      f(e);
      d(e);
      p(e);
      m(e);
      _(e);
    });
  }, [m, a, d, p, f, _]);
  useEffect(() => a.registerNodeTransform(TextNode, g), [a, g]);
  let O = useCallback(e => {
    a.update(() => {
      for (let [t, r] of e) if ("created" === r) {
        let e = $getNodeByKey(t);
        if (!e) return;
        let r = e.getPreviousSibling();
        if ($isTextNode(r)) {
          let e = r.getTextContent();
          e.endsWith(" ") && r.setTextContent(e.trimEnd());
        }
        let n = e.getNextSibling();
        if ($isTextNode(n)) {
          let e = n.getTextContent();
          e.startsWith(" ") && n.setTextContent(e.trimStart());
        }
      }
    });
  }, [a]);
  useEffect(() => a.registerMutationListener(q, O), [a, O]);
  let h = useCallback(e => {
    let t = e.getTextContent().trim();
    if (yZ.test(t)) {
      if (!t.startsWith('"')) {
        let r = t.indexOf('"');
        let n = t.slice(0, r);
        n.length > 0 && (e.setTextContent(t.slice(r)), e.insertBefore($createTextNode(n)), e.selectPrevious());
      }
      if (!t.endsWith('"')) {
        let r = t.lastIndexOf('"');
        let n = t.slice(r);
        n.length > 0 && (e.setTextContent(t.slice(0, r)), e.insertAfter($createTextNode(n)), e.selectNext());
      }
    } else {
      let r = t.match(_$$er);
      if (r) {
        if (!t.startsWith(r[1]) && !t.startsWith('"')) {
          let n = t.slice(0, r.index);
          n.length > 0 && (e.setTextContent(r[1]), e.insertBefore($createTextNode(n)), e.selectPrevious());
        }
        if (!t.endsWith(r[1]) && !t.endsWith('"')) {
          let n = t.slice(r[1].length);
          n.length > 0 && (e.setTextContent(r[1]), e.insertAfter($createTextNode(n)), e.selectNext());
        }
      } else e.replace($createTextNode(t));
    }
  }, []);
  useEffect(() => a.registerNodeTransform(Y, h), [a, h]);
  return null;
}
let eC = {
  paragraph: _P
};
export function $$ev0({
  initialTokens: e,
  expressionText: t,
  resolvedType: r,
  error: m,
  setError: S,
  onSubmit: P,
  onClose: R,
  icon: A,
  wiggleCount: L,
  setWiggleCount: F,
  hasWiggled: w,
  placeholderText: M,
  isInConditional: W,
  recordingKey: U,
  requestedTypes: G
}) {
  let z = useCallback(() => {
    let t = $getRoot();
    if (null !== t.getFirstChild()) return;
    let r = $createParagraphNode();
    t.append(r);
    let n = function (e) {
      let t = new _$$o();
      return e.map(e => {
        if ("TOKEN_VARIABLE" === e.type) {
          let r = t.variableIdToVariable(e.stringValue);
          let n = r && t.variableCollectionIdToVariableCollection(r.variableSetId);
          return j(r, n);
        }
        if ("TOKEN_VARIABLE_WITH_MODE" === e.type) {
          let [r, n] = Ub(e.stringValue);
          let i = t.variableIdToVariable(r);
          let s = i && t.variableCollectionIdToVariableCollection(i.variableSetId);
          return j(i, s, n);
        }
        if ("TOKEN_NODE_FIELD_ALIAS" === e.type) {
          let [t, r, n] = Q6(e.stringValue);
          return "COMPONENT_PROP_ASSIGNMENTS" === r ? k(t, aA(t, n)) : (logError("component prop vars", "Unsupported node field alias type in expressionTokensToLexicalNodes"), $createTextNode(e.stringValue));
        }
        return "TOKEN_NUMBER" === e.type ? $createTextNode(e.stringValue) : ["TOKEN_STRING", "TOKEN_BOOL"].includes(e.type) ? J(e.stringValue) : Z(e.stringValue);
      });
    }(e);
    (V(n[n.length - 1]) || X(n[n.length - 1]) || K(n[n.length - 1]) || H(n[n.length - 1])) && n.push($createTextNode(" "));
    r.append(...n);
    $selectAll(r.select(0, r.getChildrenSize()));
  }, [e]);
  let [Q, et] = useState("");
  let [er, en] = useState([]);
  let ei = TL(r);
  let el = useCallback(() => {
    if (getFeatureFlags().ds_variable_props_proto) {
      let e = VariablesBindings.getComponentPropsForSetVariableList();
      if (!e || 0 === Object.keys(e).length || 0 === e.length || null === Q) return [];
      let t = [];
      e.forEach(e => {
        let {
          componentName,
          values
        } = e;
        if (0 === values.length) return;
        let i = {
          type: Yc.SECTION_HEADER,
          name: getI18nString("proto.variable_picker.properties", {
            componentName
          })
        };
        let s = LV(values, ei);
        let l = !1;
        s.forEach(e => {
          e.value.name.toLowerCase().startsWith(Q.toLowerCase()) && (l || (t.push(i), l = !0), t.push({
            type: Yc.COMPONENT_PROPS,
            items: [{
              type: "COMPONENT_PROP",
              value: e.value
            }]
          }));
        });
      });
      return t;
    }
    return [];
  }, [ei, Q]);
  let [eu, ec] = useState(null);
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem
  } = useKeyboardNavigationItem({
    path: [0],
    id: "search"
  });
  let ef = useCallback(e => {
    ec(e);
    e || keyboardNavigationItem?.fauxFocus();
  }, [keyboardNavigationItem]);
  let em = useCallback(e => {
    e.read(() => {
      t.current = function (e) {
        let t = eo(e);
        let r = "";
        t.forEach(e => {
          if (V(e)) e.__variable ? e.__modeID ? r += _z(e.__variable.node_id, e.__modeID, new _$$o(!0)) : r += e.__variable?.node_id || "{}" : r += "{}";else if (X(e)) e.__stablePathToNode && e.__componentProp ? r += bU(e.__stablePathToNode, "COMPONENT_PROP_ASSIGNMENTS", e.__componentProp.explicitDefId) : r += "[]";else if (H(e)) {
            let t = e.getTextContent().trim();
            "&&" === t ? r += "and" : "||" === t ? r += "or" : "!" === t ? r += "not" : r += e.getTextContent();
          } else ($isTextNode(e) || K(e)) && (r += e.getTextContent());
        });
        return r;
      }($getRoot());
      t.current.trim().length > 0 ? S(_$$d(t.current, r, G)) : S(!1);
      F(0);
    });
  }, [t, G, r, S, F]);
  let {
    currentView,
    setCurrentView
  } = _$$R({
    selectedItem: null,
    resolvedType: r
  });
  let eE = wL(Q, r, currentView, G);
  let eb = useMemo(() => {
    if (getFeatureFlags().ds_variable_props_proto) {
      let e = el();
      return e.length > 0 && eE.length > 0 ? er.concat(e).concat([{
        type: Yc.SECTION_HEADER,
        name: getI18nString("variables.binding_ui.set_labels.variables_created_in_file")
      }]).concat(eE) : er.concat(e).concat(eE);
    }
    return er.concat(eE);
  }, [el, er, eE]);
  let ev = useMemo(() => eE.filter(e => e.type === Yc.VARIABLES).map(e => e.items[0]), [eE]);
  let eN = useMemo(() => getFeatureFlags().ds_variable_props_proto ? eb.filter(e => e.type === Yc.COMPONENT_PROPS).map(e => e.items[0]) : [], [eb]);
  let eI = pN();
  let ey = eI.data?.libraryVariables;
  let eS = useCallback((e, t) => {
    let r = [-1, -1];
    if (e && t) {
      let n = e.getTextContent().indexOf(t);
      r = [n, n + t.length];
    }
    return r;
  }, []);
  useMemo(async () => {
    let e = ZX({
      highlightedItemID: eu,
      variables: ev,
      expressionItems: eb.filter(e => e.type === Yc.EXPRESSION).map(e => e.expressionItem),
      componentPropItems: eN
    });
    e && "node_id" in e && "LIBRARY" === e.subscriptionStatus && (await N_(e, ey ?? []));
  }, [eN, ev, eb, eu, ey]);
  let eP = useCallback((e, t) => {
    let r = ZX({
      highlightedItemID: eu,
      variables: ev,
      expressionItems: eb.filter(e => e.type === Yc.EXPRESSION).map(e => e.expressionItem),
      componentPropItems: eN
    });
    if (r) {
      if ("node_id" in r) {
        let n = new _$$o();
        let i = n.variableIdToVariable(r.node_id);
        let s = n.variableCollectionIdToVariableCollection(r.variableSetId);
        if (t?.(i)) return;
        let l = j(i, s);
        let o = eS(e, Q);
        ea(l, e, o);
        let a = l.getNextSibling()?.getTextContentSize() ?? 0;
        l.selectNext(a, a);
      } else if ("COMPONENT_PROP" === r.type) {
        if (t?.(r)) return;
        let n = k(r.value.stablePath, r.value);
        let i = eS(e, Q);
        ea(n, e, i);
        let s = n.getNextSibling()?.getTextContentSize() ?? 0;
        n.selectNext(s, s);
      } else if ("OPERATOR" === r.type) {
        if (t?.(r)) return;
        let n = Z(r.value);
        let i = eS(e, Q);
        ea(n, e, i);
        n.selectNext(0, 0);
      } else if ("LITERAL" === r.type) {
        if (t?.(r)) return;
        let n = J(r.name);
        let i = eS(e, Q);
        ea(n, e, i);
        let s = n.getNextSibling()?.getTextContentSize() ?? 0;
        n.selectNext(s, s);
      } else if ("MODE" === r.type && V(e)) {
        if (t?.(r)) return;
        let n = "" === r.id;
        e.setModeID(n ? void 0 : r.id);
        e.selectNext(0, 0);
      }
    }
  }, [eu, ev, eb, eN, eS, Q]);
  return jsx("div", {
    tabIndex: 0,
    role: "searchbox",
    onKeyDown: e => {
      ("ArrowUp" === e.key || "ArrowDown" === e.key) && e.preventDefault();
    },
    children: jsxs(_$$n, {
      initialConfig: {
        editorState: z,
        namespace: "ExpressionBuilder",
        nodes: [B, D, q, Y],
        onError: e => {
          console.error(e);
        },
        theme: eC
      },
      children: [jsx("div", {
        className: Oe,
        children: jsxs("div", {
          ref: setKeyboardNavigationElement,
          className: _()(MT, {
            [Rv]: m && w
          }),
          children: [jsx(SvgComponent, {
            className: zc,
            svg: A
          }), jsx(RecordableDiv, {
            onMouseDown: e => e.stopPropagation(),
            className: KF,
            recordingKey: U,
            children: jsx(_$$$, {
              contentEditable: jsx(_$$a, {
                className: Rt,
                spellCheck: !1,
                "data-testid": "expression-builder-text-input"
              }),
              placeholder: jsx("span", {
                className: qf,
                children: M
              }),
              ErrorBoundary: _$$A
            })
          })]
        })
      }), jsx(_$$D, {
        onChange: em,
        ignoreSelectionChange: !0
      }), jsx(_$$G, {}), jsx($, {
        searchNavigationItem: keyboardNavigationItem
      }), jsx(ee, {
        error: m,
        highlightedItemID: eu,
        onSubmit: P,
        onClose: R,
        wiggleCount: L,
        setWiggleCount: F
      }), jsx(eO, {
        listItems: eb,
        resolvedType: r,
        highlightedItemID: eu,
        setHighlightedItemID: ef,
        currentView,
        setCurrentView,
        onItemSelect: eP,
        recordingKey: generateRecordingKey(U, "selectVariablePlugin")
      }), jsx(eh, {
        listItems: eb,
        resolvedType: r,
        searchQuery: Q,
        isInConditional: W,
        setSearchQuery: et,
        setExpressionListItems: en,
        setHighlightedItemID: ef
      }), jsx(eT, {
        highlightedItemID: eu,
        searchQuery: Q,
        variables: ev,
        componentProps: eN,
        resolvedType: r,
        onItemSelect: eP
      })]
    })
  });
}
export const ExpressionBuilderSearch = $$ev0;