import { U1 } from "../vendor/211528";
import { pn, _A } from "../vendor/548993";
import { bj, Oh, mz, b_, yd, Yy } from "../vendor/401644";
let P = pn({
  String: _A.string,
  Number: _A.number,
  "True False": _A.bool,
  PropertyName: _A.propertyName,
  Null: _A.$$null,
  ", :": _A.separator,
  "[ ]": _A.squareBracket,
  "{ }": _A.brace
});
let n = U1.deserialize({
  version: 14,
  states: "$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#ClOOQO'#Cr'#CrQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CtOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59W,59WO!iQPO,59WOVQPO,59QOqQPO'#CmO!nQPO,59`OOQO1G.k1G.kOVQPO'#CnO!vQPO,59aOOQO1G.r1G.rOOQO1G.l1G.lOOQO,59X,59XOOQO-E6k-E6kOOQO,59Y,59YOOQO-E6l-E6l",
  stateData: "#O~OeOS~OQSORSOSSOTSOWQO_ROgPO~OVXOgUO~O^[O~PVO[^O~O]_OVhX~OVaO~O]bO^iX~O^dO~O]_OVha~O]bO^ia~O",
  goto: "!kjPPPPPPkPPkqwPPPPk{!RPPP!XP!e!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
  nodeNames: "\u26A0 JsonText True False Null Number String } { Object Property PropertyName : , ] [ Array",
  maxTerm: 25,
  nodeProps: [["isolate", -2, 6, 11, ""], ["openedBy", 7, "{", 14, "["], ["closedBy", 8, "}", 15, "]"]],
  propSources: [P],
  skippedNodes: [0],
  repeatNodeCount: 2,
  tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oe~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Og~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zO]~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yO[~~'OO_~~'TO^~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
  tokenizers: [0],
  topRules: {
    JsonText: [0, 1]
  },
  tokenPrec: 0
});
let $$Q2 = () => O => {
  try {
    JSON.parse(O.state.doc.toString());
  } catch (r) {
    if (!(r instanceof SyntaxError)) throw r;
    let e = function (O, e) {
      let r;
      return (r = O.message.match(/at position (\d+)/)) ? Math.min(+r[1], e.length) : (r = O.message.match(/at line (\d+) column (\d+)/)) ? Math.min(e.line(+r[1]).from + +r[2] - 1, e.length) : 0;
    }(r, O.state.doc);
    return [{
      from: e,
      message: r.message,
      severity: "error",
      to: e
    }];
  }
  return [];
};
let $$o1 = bj.define({
  name: "json",
  parser: n.configure({
    props: [Oh.add({
      Object: mz({
        except: /^\s*\}/
      }),
      Array: mz({
        except: /^\s*\]/
      })
    }), b_.add({
      "Object Array": yd
    })]
  }),
  languageData: {
    closeBrackets: {
      brackets: ["[", "{", '"']
    },
    indentOnInput: /^\s*[\}\]]$/
  }
});
export function $$i0() {
  return new Yy($$o1);
}
export const json = $$i0;
export const jsonLanguage = $$o1;
export const jsonParseLinter = $$Q2;