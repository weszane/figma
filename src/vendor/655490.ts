import { Lz } from "../vendor/37366";
import { cr, y9 } from "../vendor/401644";
import { _A } from "../vendor/548993";
let a = "#e5c07b";
let h = "#e06c75";
let d = "#56b6c2";
let p = "#ffffff";
let g = "#abb2bf";
let m = "#7d8799";
let v = "#61afef";
let y = "#98c379";
let b = "#d19a66";
let O = "#c678dd";
let x = "#21252b";
let w = "#2c313a";
let k = "#282c34";
let _ = "#353a42";
let S = "#3E4451";
let E = "#528bff";
let A = Lz.theme({
  "&": {
    color: g,
    backgroundColor: k
  },
  ".cm-content": {
    caretColor: E
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: E
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: S
  },
  ".cm-panels": {
    backgroundColor: x,
    color: g
  },
  ".cm-panels.cm-panels-top": {
    borderBottom: "2px solid black"
  },
  ".cm-panels.cm-panels-bottom": {
    borderTop: "2px solid black"
  },
  ".cm-searchMatch": {
    backgroundColor: "#72a1ff59",
    outline: "1px solid #457dff"
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: "#6199ff2f"
  },
  ".cm-activeLine": {
    backgroundColor: "#6699ff0b"
  },
  ".cm-selectionMatch": {
    backgroundColor: "#aafe661a"
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: "#bad0f847"
  },
  ".cm-gutters": {
    backgroundColor: k,
    color: m,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: w
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: "#ddd"
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: _
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: _,
    borderBottomColor: _
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: w,
      color: g
    }
  }
}, {
  dark: !0
});
let C = cr.define([{
  tag: _A.keyword,
  color: O
}, {
  tag: [_A.name, _A.deleted, _A.character, _A.propertyName, _A.macroName],
  color: h
}, {
  tag: [_A.$$function(_A.variableName), _A.labelName],
  color: v
}, {
  tag: [_A.color, _A.constant(_A.name), _A.standard(_A.name)],
  color: b
}, {
  tag: [_A.definition(_A.name), _A.separator],
  color: g
}, {
  tag: [_A.typeName, _A.className, _A.number, _A.changed, _A.annotation, _A.modifier, _A.self, _A.namespace],
  color: a
}, {
  tag: [_A.operator, _A.operatorKeyword, _A.url, _A.escape, _A.regexp, _A.link, _A.special(_A.string)],
  color: d
}, {
  tag: [_A.meta, _A.comment],
  color: m
}, {
  tag: _A.strong,
  fontWeight: "bold"
}, {
  tag: _A.emphasis,
  fontStyle: "italic"
}, {
  tag: _A.strikethrough,
  textDecoration: "line-through"
}, {
  tag: _A.link,
  color: m,
  textDecoration: "underline"
}, {
  tag: _A.heading,
  fontWeight: "bold",
  color: h
}, {
  tag: [_A.atom, _A.bool, _A.special(_A.variableName)],
  color: b
}, {
  tag: [_A.processingInstruction, _A.string, _A.inserted],
  color: y
}, {
  tag: _A.invalid,
  color: p
}]);
let $$T0 = [A, y9(C)];
export const bM = $$T0;