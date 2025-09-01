import { Lz } from "../vendor/37366";
import { cr, y9 } from "../vendor/401644";
import { _A } from "../vendor/548993";
let $$s = {
  BLACK800: "#000000CC",
  BLACK500: "#00000080",
  BLACK400: "#0000004D",
  BLACK300: "#00000033",
  BLACK200: "#0000001A",
  PINK700: "#CB0B96",
  BLUE900: "#093077",
  BLUE700: "#0768CF",
  PERSIMMON700: "#C53E0D",
  WHITE1000: "#FFFFFF"
};
let o = Lz.theme({
  "&": {
    color: $$s.BLACK800,
    backgroundColor: $$s.WHITE1000
  },
  ".cm-gutters": {
    backgroundColor: $$s.WHITE1000,
    color: $$s.BLACK400,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "transparent",
    color: $$s.BLACK500
  },
  ".cm-activeLine": {
    backgroundColor: "transparent"
  },
  ".cm-cursor": {
    borderLeft: `2px solid ${$$s.BLACK800}`
  },
  "&.cm-focused .cm-matchingBracket": {
    backgroundColor: $$s.BLACK200
  },
  ".cm-selectionBackground": {
    backgroundColor: `${$$s.BLACK300} !important`
  },
  ".cm-foldPlaceholder": {
    border: `1px solid ${$$s.BLACK300}`,
    backgroundColor: $$s.BLACK200,
    color: $$s.BLACK800,
    padding: "0 3px 0 1px",
    transition: "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out"
  },
  ".cm-hyper-link-underline": {
    backgroundColor: $$s.BLACK200
  },
  ".cm-foldPlaceholder:hover, .cm-foldPlaceholder:focus": {
    backgroundColor: $$s.BLACK300,
    borderColor: $$s.BLACK400
  },
  ".cm-selectionMatch": {
    backgroundColor: $$s.BLACK200
  }
});
let l = Lz.theme({
  ".cm-custom-quick-info-punctuation": {
    color: $$s.BLACK800
  },
  ".cm-custom-quick-info-aliasName": {
    color: $$s.BLUE700
  },
  ".cm-custom-quick-info-keyword": {
    color: $$s.PINK700
  },
  ".cm-custom-quick-info-numericLiteral": {
    color: $$s.PERSIMMON700
  },
  ".cm-custom-quick-info-stringLiteral": {
    color: $$s.PERSIMMON700
  },
  ".cm-custom-quick-info-operator": {
    color: $$s.BLACK800
  },
  ".cm-custom-quick-info-functionName": {
    color: $$s.PINK700
  },
  ".cm-custom-quick-info-moduleName": {
    color: $$s.BLUE900
  },
  ".cm-custom-quick-info-parameterName": {
    color: $$s.PINK700
  },
  ".cm-custom-quick-info-propertyName": {
    color: $$s.PINK700
  },
  ".cm-custom-quick-info-localName": {
    color: $$s.BLUE900
  },
  ".cm-custom-quick-info-interfaceName": {
    color: $$s.BLUE900
  },
  ".cm-custom-quick-info-typeParameterName": {
    color: $$s.BLUE900
  }
});
let d = cr.define([{
  tag: [_A.name, _A.deleted, _A.character, _A.macroName, _A.propertyName, _A.definition(_A.name)],
  color: $$s.BLUE900
}, {
  tag: [_A.keyword, _A.processingInstruction, _A.inserted, _A.url, _A.escape, _A.regexp, _A.link, _A.color, _A.standard(_A.name), _A.className, _A.changed, _A.annotation, _A.modifier, _A.self, _A.namespace, _A.operatorKeyword, _A.$$function(_A.punctuation), _A.typeName],
  color: $$s.PINK700
}, {
  tag: [_A.string, _A.number, _A.bool, _A.atom],
  color: $$s.PERSIMMON700
}, {
  tag: [_A.labelName, _A.constant(_A.name), _A.definition(_A.name)],
  color: $$s.BLUE700
}, {
  tag: [_A.separator, _A.meta, _A.comment],
  color: $$s.BLACK500
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
  color: $$s.BLACK800
}, {
  tag: _A.strikethrough,
  textDecoration: "line-through"
}]);
let $$c0 = [o, l, y9(d)];
export const s = $$c0;