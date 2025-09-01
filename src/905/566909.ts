import { Lz } from "../vendor/37366";
import { cr, y9 } from "../vendor/401644";
import { _A } from "../vendor/548993";
let s = {
  CREAM: "#faf8f5",
  BLUE: "#728fcb",
  NAVY: "#063289",
  LIGHT_BLUE: "#93abdc",
  BEIGE: "#cdc4b1",
  SAND: "#b6ad9a",
  CAMEL: "#b29762",
  ESPRESSO: "#2d2006",
  BRONZE: "#896724",
  SELECTION: "#e3dcce",
  HIGHLIGHT: "#ddceb154"
};
Lz.theme({
  "&": {
    color: s.CAMEL,
    backgroundColor: s.CREAM
  },
  ".cm-content": {
    caretColor: s.LIGHT_BLUE
  },
  ".cm-cursor, .cm-dropCursor": {
    borderLeftColor: s.LIGHT_BLUE
  },
  "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection": {
    backgroundColor: s.SELECTION
  },
  ".cm-panels": {
    backgroundColor: s.CREAM,
    color: s.CAMEL
  },
  ".cm-panels.cm-panels-top": {
    borderBottom: "2px solid transparent"
  },
  ".cm-panels.cm-panels-bottom": {
    borderTop: "2px solid transparent"
  },
  ".cm-searchMatch": {
    backgroundColor: s.LIGHT_BLUE + "59",
    outline: "1px solid " + s.BLUE
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: s.LIGHT_BLUE + "2f"
  },
  ".cm-activeLine": {
    backgroundColor: s.HIGHLIGHT
  },
  ".cm-selectionMatch": {
    backgroundColor: s.SELECTION
  },
  "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
    backgroundColor: s.SELECTION + "80"
  },
  ".cm-gutters": {
    backgroundColor: s.CREAM,
    color: s.BEIGE,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: s.HIGHLIGHT
  },
  ".cm-foldPlaceholder": {
    backgroundColor: "transparent",
    border: "none",
    color: s.BEIGE
  },
  ".cm-tooltip": {
    border: "none",
    backgroundColor: s.CREAM
  },
  ".cm-tooltip .cm-tooltip-arrow:before": {
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  ".cm-tooltip .cm-tooltip-arrow:after": {
    borderTopColor: s.CREAM,
    borderBottomColor: s.CREAM
  },
  ".cm-tooltip-autocomplete": {
    "& > ul > li[aria-selected]": {
      backgroundColor: s.SELECTION,
      color: s.CAMEL
    }
  }
});
let o = cr.define([{
  tag: [_A.name, _A.deleted, _A.character, _A.macroName, _A.propertyName, _A.definition(_A.name)],
  color: s.BRONZE
}, {
  tag: [_A.keyword, _A.processingInstruction, _A.string, _A.inserted, _A.special(_A.string), _A.url, _A.escape, _A.regexp, _A.link, _A.atom, _A.bool, _A.special(_A.variableName)],
  color: s.BLUE
}, {
  tag: [_A.$$function(_A.variableName), _A.labelName],
  color: s.CAMEL
}, {
  tag: [_A.color, _A.constant(_A.name), _A.standard(_A.name), _A.className, _A.number, _A.changed, _A.annotation, _A.modifier, _A.self, _A.namespace, _A.operator, _A.operatorKeyword, _A.typeName],
  color: s.NAVY
}, {
  tag: [_A.separator, _A.meta, _A.comment],
  color: s.SAND
}, {
  tag: _A.invalid,
  color: s.ESPRESSO
}, {
  tag: _A.strong,
  fontWeight: "bold"
}, {
  tag: _A.emphasis,
  fontStyle: "italic"
}, {
  tag: _A.link,
  textDecoration: "underline"
}, {
  tag: _A.heading,
  fontWeight: "bold",
  color: s.ESPRESSO
}, {
  tag: _A.strikethrough,
  textDecoration: "line-through"
}]);
y9(o);