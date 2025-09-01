import { Lz } from "../vendor/37366";
import { cr, y9 } from "../vendor/401644";
import { _A } from "../vendor/548993";
let s = {
  WHITE1000: "#FFFFFF",
  WHITE500: "#FFFFFFB3",
  WHITE400: "#FFFFFF66",
  WHITE300: "#FFFFFF33",
  WHITE200: "#FFFFFF1A",
  PINK400: "#FC9CE0",
  PURPLE400: "#D1A8FF",
  BLUE400: "#7CC4F8",
  GREY800: "#2C2C2C",
  ORANGE400: "#FCB34A"
};
let o = Lz.theme({
  "&": {
    color: s.WHITE1000,
    backgroundColor: s.GREY800
  },
  ".cm-gutters": {
    backgroundColor: s.GREY800,
    color: s.WHITE400,
    border: "none"
  },
  ".cm-activeLineGutter": {
    backgroundColor: "transparent",
    color: s.WHITE500
  },
  ".cm-activeLine": {
    backgroundColor: "transparent"
  },
  ".cm-cursor": {
    borderLeft: `2px solid ${s.WHITE1000}`
  },
  "&.cm-focused .cm-matchingBracket": {
    backgroundColor: s.WHITE200
  },
  ".cm-selectionBackground": {
    backgroundColor: `${s.WHITE300} !important`
  },
  ".cm-foldPlaceholder": {
    border: `1px solid ${s.WHITE300}`,
    backgroundColor: s.WHITE200,
    color: s.WHITE1000,
    padding: "0 3px 0 1px",
    transition: "background-color 0.2s ease-in-out, border-color 0.2s ease-in-out"
  },
  ".cm-hyper-link-underline": {
    backgroundColor: s.WHITE200
  },
  ".cm-foldPlaceholder:hover, .cm-foldPlaceholder:focus": {
    backgroundColor: s.WHITE300,
    borderColor: s.WHITE400
  },
  ".cm-selectionMatch": {
    backgroundColor: s.WHITE200
  }
});
let l = Lz.theme({
  ".cm-custom-quick-info-punctuation": {
    color: s.WHITE1000
  },
  ".cm-custom-quick-info-aliasName": {
    color: s.PURPLE400
  },
  ".cm-custom-quick-info-keyword": {
    color: s.PINK400
  },
  ".cm-custom-quick-info-numericLiteral": {
    color: s.ORANGE400
  },
  ".cm-custom-quick-info-stringLiteral": {
    color: s.ORANGE400
  },
  ".cm-custom-quick-info-operator": {
    color: s.WHITE1000
  },
  ".cm-custom-quick-info-functionName": {
    color: s.PINK400
  },
  ".cm-custom-quick-info-moduleName": {
    color: s.BLUE400
  },
  ".cm-custom-quick-info-parameterName": {
    color: s.PINK400
  },
  ".cm-custom-quick-info-propertyName": {
    color: s.PINK400
  },
  ".cm-custom-quick-info-localName": {
    color: s.BLUE400
  },
  ".cm-custom-quick-info-interfaceName": {
    color: s.BLUE400
  },
  ".cm-custom-quick-info-typeParameterName": {
    color: s.BLUE400
  }
});
let d = cr.define([{
  tag: [_A.name, _A.deleted, _A.character, _A.macroName, _A.propertyName, _A.definition(_A.name)],
  color: s.BLUE400
}, {
  tag: [_A.keyword, _A.processingInstruction, _A.inserted, _A.url, _A.escape, _A.regexp, _A.link, _A.color, _A.standard(_A.name), _A.className, _A.changed, _A.annotation, _A.modifier, _A.self, _A.namespace, _A.operatorKeyword, _A.$$function(_A.punctuation), _A.typeName],
  color: s.PINK400
}, {
  tag: [_A.string, _A.number, _A.bool, _A.atom],
  color: s.ORANGE400
}, {
  tag: [_A.labelName, _A.constant(_A.name), _A.definition(_A.name)],
  color: s.PURPLE400
}, {
  tag: [_A.separator, _A.meta, _A.comment],
  color: s.WHITE500
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
  color: s.WHITE1000
}, {
  tag: _A.strikethrough,
  textDecoration: "line-through"
}]);
let $$c0 = [o, l, y9(d)];
export const A = $$c0;