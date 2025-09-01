import { Aj, Lu, U1 } from "../vendor/211528";
import { pn, _A } from "../vendor/548993";
import n, { $g } from "../vendor/579039";
import { cssLanguage, css } from "../vendor/543018";
import { o$, sL, W6, g4, Q2 } from "../vendor/831678";
import { Lz } from "../vendor/37366";
import { OF } from "../vendor/59696";
import { mv, bj, Oh, b_, Q_, Yy } from "../vendor/401644";
let s = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  command: !0,
  embed: !0,
  frame: !0,
  hr: !0,
  img: !0,
  input: !0,
  keygen: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
  menuitem: !0
};
let o = {
  dd: !0,
  li: !0,
  optgroup: !0,
  option: !0,
  p: !0,
  rp: !0,
  rt: !0,
  tbody: !0,
  td: !0,
  tfoot: !0,
  th: !0,
  tr: !0
};
let O = {
  dd: {
    dd: !0,
    dt: !0
  },
  dt: {
    dd: !0,
    dt: !0
  },
  li: {
    li: !0
  },
  option: {
    option: !0,
    optgroup: !0
  },
  optgroup: {
    optgroup: !0
  },
  p: {
    address: !0,
    article: !0,
    aside: !0,
    blockquote: !0,
    dir: !0,
    div: !0,
    dl: !0,
    fieldset: !0,
    footer: !0,
    form: !0,
    h1: !0,
    h2: !0,
    h3: !0,
    h4: !0,
    h5: !0,
    h6: !0,
    header: !0,
    hgroup: !0,
    hr: !0,
    menu: !0,
    nav: !0,
    ol: !0,
    p: !0,
    pre: !0,
    section: !0,
    table: !0,
    ul: !0
  },
  rp: {
    rp: !0,
    rt: !0
  },
  rt: {
    rp: !0,
    rt: !0
  },
  tbody: {
    tbody: !0,
    tfoot: !0
  },
  td: {
    td: !0,
    th: !0
  },
  tfoot: {
    tbody: !0
  },
  th: {
    td: !0,
    th: !0
  },
  thead: {
    tbody: !0,
    tfoot: !0
  },
  tr: {
    tr: !0
  }
};
function i(e) {
  return 9 == e || 10 == e || 13 == e || 32 == e;
}
let u = null;
let c = null;
let p = 0;
function d(e, t) {
  var l;
  let a = e.pos + t;
  if (p == a && c == e) return u;
  let r = e.peek(t);
  for (; i(r);) r = e.peek(++t);
  let n = "";
  for (; 45 == (l = r) || 46 == l || 58 == l || l >= 65 && l <= 90 || 95 == l || l >= 97 && l <= 122 || l >= 161;) {
    n += String.fromCharCode(r);
    r = e.peek(++t);
  }
  c = e;
  p = a;
  return u = n ? n.toLowerCase() : r == m || r == f ? void 0 : null;
}
let m = 63;
let f = 33;
function S(e, t) {
  this.name = e;
  this.parent = t;
}
let h = [6, 10, 7, 8, 9];
let g = new Aj({
  start: null,
  shift: (e, t, l, a) => h.indexOf(t) > -1 ? new S(d(a, 1) || "", e) : e,
  reduce: (e, t) => 20 == t && e ? e.parent : e,
  reuse(e, t, l, a) {
    let r = t.type.id;
    return 6 == r || 36 == r ? new S(d(a, 1) || "", e) : e;
  },
  strict: !1
});
let b = new Lu((e, t) => {
  if (60 != e.next) {
    e.next < 0 && t.context && e.acceptToken(57);
    return;
  }
  e.advance();
  let l = 47 == e.next;
  l && e.advance();
  let a = d(e, 0);
  if (void 0 === a) return;
  if (!a) return e.acceptToken(l ? 14 : 6);
  let r = t.context ? t.context.name : null;
  if (l) {
    if (a == r) return e.acceptToken(11);
    if (r && o[r]) return e.acceptToken(57, -2);
    if (t.dialectEnabled(0)) return e.acceptToken(12);
    for (let e = t.context; e; e = e.parent) if (e.name == a) return;
    e.acceptToken(13);
  } else {
    if ("script" == a) return e.acceptToken(7);
    if ("style" == a) return e.acceptToken(8);
    if ("textarea" == a) return e.acceptToken(9);
    if (s.hasOwnProperty(a)) return e.acceptToken(10);
    r && O[r] && O[r][a] ? e.acceptToken(57, -1) : e.acceptToken(6);
  }
}, {
  contextual: !0
});
let x = new Lu(e => {
  for (function () {
    let t = 0;
    let l = 0;
  }();; l++) {
    if (e.next < 0) {
      l && e.acceptToken(58);
      break;
    }
    if (45 == e.next) t++;else if (62 == e.next && t >= 2) {
      l >= 3 && e.acceptToken(58, -2);
      break;
    } else t = 0;
    e.advance();
  }
});
let P = new Lu((e, t) => {
  if (47 == e.next && 62 == e.peek(1)) {
    let l = t.dialectEnabled(1) || function (e) {
      for (; e; e = e.parent) if ("svg" == e.name || "math" == e.name) return !0;
      return !1;
    }(t.context);
    e.acceptToken(l ? 5 : 4, 2);
  } else 62 == e.next && e.acceptToken(4, 1);
});
function V(e, t, l) {
  let r = 2 + e.length;
  return new Lu(a => {
    for (function () {
      let n = 0;
      let s = 0;
      let o = 0;
    }();; o++) {
      if (a.next < 0) {
        o && a.acceptToken(t);
        break;
      }
      if (0 == n && 60 == a.next || 1 == n && 47 == a.next || n >= 2 && n < r && a.next == e.charCodeAt(n - 2)) {
        n++;
        s++;
      } else if ((2 == n || n == r) && i(a.next)) s++;else if (n == r && 62 == a.next) {
        o > s ? a.acceptToken(t, -s) : a.acceptToken(l, -(s - 2));
        break;
      } else if ((10 == a.next || 13 == a.next) && o) {
        a.acceptToken(t, 1);
        break;
      } else n = s = 0;
      a.advance();
    }
  });
}
let w = V("script", 54, 1);
let T = V("style", 55, 2);
let v = V("textarea", 56, 3);
let X = pn({
  "Text RawText": _A.content,
  "StartTag StartCloseTag SelfClosingEndTag EndTag": _A.angleBracket,
  TagName: _A.tagName,
  "MismatchedCloseTag/TagName": [_A.tagName, _A.invalid],
  AttributeName: _A.attributeName,
  "AttributeValue UnquotedAttributeValue": _A.attributeValue,
  Is: _A.definitionOperator,
  "EntityReference CharacterReference": _A.character,
  Comment: _A.blockComment,
  ProcessingInst: _A.processingInstruction,
  DoctypeDecl: _A.documentMeta
});
let y = U1.deserialize({
  version: 14,
  states: ",xOVO!rOOO!WQ#tO'#CqO!]Q#tO'#CzO!bQ#tO'#C}O!gQ#tO'#DQO!lQ#tO'#DSO!qOaO'#CpO!|ObO'#CpO#XOdO'#CpO$eO!rO'#CpOOO`'#Cp'#CpO$lO$fO'#DTO$tQ#tO'#DVO$yQ#tO'#DWOOO`'#Dk'#DkOOO`'#DY'#DYQVO!rOOO%OQ&rO,59]O%ZQ&rO,59fO%fQ&rO,59iO%qQ&rO,59lO%|Q&rO,59nOOOa'#D^'#D^O&XOaO'#CxO&dOaO,59[OOOb'#D_'#D_O&lObO'#C{O&wObO,59[OOOd'#D`'#D`O'POdO'#DOO'[OdO,59[OOO`'#Da'#DaO'dO!rO,59[O'kQ#tO'#DROOO`,59[,59[OOOp'#Db'#DbO'pO$fO,59oOOO`,59o,59oO'xQ#|O,59qO'}Q#|O,59rOOO`-E7W-E7WO(SQ&rO'#CsOOQW'#DZ'#DZO(bQ&rO1G.wOOOa1G.w1G.wOOO`1G/Y1G/YO(mQ&rO1G/QOOOb1G/Q1G/QO(xQ&rO1G/TOOOd1G/T1G/TO)TQ&rO1G/WOOO`1G/W1G/WO)`Q&rO1G/YOOOa-E7[-E7[O)kQ#tO'#CyOOO`1G.v1G.vOOOb-E7]-E7]O)pQ#tO'#C|OOOd-E7^-E7^O)uQ#tO'#DPOOO`-E7_-E7_O)zQ#|O,59mOOOp-E7`-E7`OOO`1G/Z1G/ZOOO`1G/]1G/]OOO`1G/^1G/^O*PQ,UO,59_OOQW-E7X-E7XOOOa7+$c7+$cOOO`7+$t7+$tOOOb7+$l7+$lOOOd7+$o7+$oOOO`7+$r7+$rO*[Q#|O,59eO*aQ#|O,59hO*fQ#|O,59kOOO`1G/X1G/XO*kO7[O'#CvO*|OMhO'#CvOOQW1G.y1G.yOOO`1G/P1G/POOO`1G/S1G/SOOO`1G/V1G/VOOOO'#D['#D[O+_O7[O,59bOOQW,59b,59bOOOO'#D]'#D]O+pOMhO,59bOOOO-E7Y-E7YOOQW1G.|1G.|OOOO-E7Z-E7Z",
  stateData: ",]~O!^OS~OUSOVPOWQOXROYTO[]O][O^^O`^Oa^Ob^Oc^Ox^O{_O!dZO~OfaO~OfbO~OfcO~OfdO~OfeO~O!WfOPlP!ZlP~O!XiOQoP!ZoP~O!YlORrP!ZrP~OUSOVPOWQOXROYTOZqO[]O][O^^O`^Oa^Ob^Oc^Ox^O!dZO~O!ZrO~P#dO![sO!euO~OfvO~OfwO~OS|OT}OhyO~OS!POT}OhyO~OS!ROT}OhyO~OS!TOT}OhyO~OS}OT}OhyO~O!WfOPlX!ZlX~OP!WO!Z!XO~O!XiOQoX!ZoX~OQ!ZO!Z!XO~O!YlORrX!ZrX~OR!]O!Z!XO~O!Z!XO~P#dOf!_O~O![sO!e!aO~OS!bO~OS!cO~Oi!dOSgXTgXhgX~OS!fOT!gOhyO~OS!hOT!gOhyO~OS!iOT!gOhyO~OS!jOT!gOhyO~OS!gOT!gOhyO~Of!kO~Of!lO~Of!mO~OS!nO~Ok!qO!`!oO!b!pO~OS!rO~OS!sO~OS!tO~Oa!uOb!uOc!uO!`!wO!a!uO~Oa!xOb!xOc!xO!b!wO!c!xO~Oa!uOb!uOc!uO!`!{O!a!uO~Oa!xOb!xOc!xO!b!{O!c!xO~OT~bac!dx{!d~",
  goto: "%p!`PPPPPPPPPPPPPPPPPPPP!a!gP!mPP!yP!|#P#S#Y#]#`#f#i#l#r#x!aP!a!aP$O$U$l$r$x%O%U%[%bPPPPPPPP%hX^OX`pXUOX`pezabcde{!O!Q!S!UR!q!dRhUR!XhXVOX`pRkVR!XkXWOX`pRnWR!XnXXOX`pQrXR!XpXYOX`pQ`ORx`Q{aQ!ObQ!QcQ!SdQ!UeZ!e{!O!Q!S!UQ!v!oR!z!vQ!y!pR!|!yQgUR!VgQjVR!YjQmWR![mQpXR!^pQtZR!`tS_O`ToXp",
  nodeNames: "\u26A0 StartCloseTag StartCloseTag StartCloseTag EndTag SelfClosingEndTag StartTag StartTag StartTag StartTag StartTag StartCloseTag StartCloseTag StartCloseTag IncompleteCloseTag Document Text EntityReference CharacterReference InvalidEntity Element OpenTag TagName Attribute AttributeName Is AttributeValue UnquotedAttributeValue ScriptText CloseTag OpenTag StyleText CloseTag OpenTag TextareaText CloseTag OpenTag CloseTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag CloseTag DoctypeDecl",
  maxTerm: 67,
  context: g,
  nodeProps: [["closedBy", -10, 1, 2, 3, 7, 8, 9, 10, 11, 12, 13, "EndTag", 6, "EndTag SelfClosingEndTag", -4, 21, 30, 33, 36, "CloseTag"], ["openedBy", 4, "StartTag StartCloseTag", 5, "StartTag", -4, 29, 32, 35, 37, "OpenTag"], ["group", -9, 14, 17, 18, 19, 20, 39, 40, 41, 42, "Entity", 16, "Entity TextContent", -3, 28, 31, 34, "TextContent Entity"], ["isolate", -11, 21, 29, 30, 32, 33, 35, 36, 37, 38, 41, 42, "ltr", -3, 26, 27, 39, ""]],
  propSources: [X],
  skippedNodes: [0],
  repeatNodeCount: 9,
  tokenData: "!<p!aR!YOX$qXY,QYZ,QZ[$q[]&X]^,Q^p$qpq,Qqr-_rs3_sv-_vw3}wxHYx}-_}!OH{!O!P-_!P!Q$q!Q![-_![!]Mz!]!^-_!^!_!$S!_!`!;x!`!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4U-_4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!Z$|c`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr$qrs&}sv$qvw+Pwx(tx!^$q!^!_*V!_!a&X!a#S$q#S#T&X#T;'S$q;'S;=`+z<%lO$q!R&bX`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&Xq'UV`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}P'pT`POv'kw!^'k!_;'S'k;'S;=`(P<%lO'kP(SP;=`<%l'kp([S!cpOv(Vx;'S(V;'S;=`(h<%lO(Vp(kP;=`<%l(Vq(qP;=`<%l&}a({W`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t`)jT!a`Or)esv)ew;'S)e;'S;=`)y<%lO)e`)|P;=`<%l)ea*SP;=`<%l(t!Q*^V!a`!cpOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!Q*vP;=`<%l*V!R*|P;=`<%l&XW+UYkWOX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+PW+wP;=`<%l+P!Z+}P;=`<%l$q!a,]``P!a`!cp!^^OX&XXY,QYZ,QZ]&X]^,Q^p&Xpq,Qqr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!_-ljhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q[/ebhSkWOX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+PS0rXhSqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0mS1bP;=`<%l0m[1hP;=`<%l/^!V1vchS`P!a`!cpOq&Xqr1krs&}sv1kvw0mwx(tx!P1k!P!Q&X!Q!^1k!^!_*V!_!a&X!a#s1k#s$f&X$f;'S1k;'S;=`3R<%l?Ah1k?Ah?BY&X?BY?Mn1k?MnO&X!V3UP;=`<%l1k!_3[P;=`<%l-_!Z3hV!`h`P!cpOv&}wx'kx!^&}!^!_(V!_;'S&};'S;=`(n<%lO&}!_4WihSkWc!ROX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst>]tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^/^!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!Z5zbkWOX5uXZ7SZ[5u[^7S^p5uqr5urs7Sst+Ptw5uwx7Sx!]5u!]!^7w!^!a7S!a#S5u#S#T7S#T;'S5u;'S;=`8n<%lO5u!R7VVOp7Sqs7St!]7S!]!^7l!^;'S7S;'S;=`7q<%lO7S!R7qOa!R!R7tP;=`<%l7S!Z8OYkWa!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!Z8qP;=`<%l5u!_8{ihSkWOX5uXZ7SZ[5u[^7S^p5uqr8trs7Sst/^tw8twx7Sx!P8t!P!Q5u!Q!]8t!]!^:j!^!a7S!a#S8t#S#T;{#T#s8t#s$f5u$f;'S8t;'S;=`>V<%l?Ah8t?Ah?BY5u?BY?Mn8t?MnO5u!_:sbhSkWa!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!V<QchSOp7Sqr;{rs7Sst0mtw;{wx7Sx!P;{!P!Q7S!Q!];{!]!^=]!^!a7S!a#s;{#s$f7S$f;'S;{;'S;=`>P<%l?Ah;{?Ah?BY7S?BY?Mn;{?MnO7S!V=dXhSa!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!V>SP;=`<%l;{!_>YP;=`<%l8t!_>dhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^/^!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!Z@TakWOX@OXZAYZ[@O[^AY^p@Oqr@OrsAYsw@OwxAYx!]@O!]!^Az!^!aAY!a#S@O#S#TAY#T;'S@O;'S;=`Bq<%lO@O!RA]UOpAYq!]AY!]!^Ao!^;'SAY;'S;=`At<%lOAY!RAtOb!R!RAwP;=`<%lAY!ZBRYkWb!ROX+PZ[+P^p+Pqr+Psw+Px!^+P!a#S+P#T;'S+P;'S;=`+t<%lO+P!ZBtP;=`<%l@O!_COhhSkWOX@OXZAYZ[@O[^AY^p@OqrBwrsAYswBwwxAYx!PBw!P!Q@O!Q!]Bw!]!^Dj!^!aAY!a#SBw#S#TE{#T#sBw#s$f@O$f;'SBw;'S;=`HS<%l?AhBw?Ah?BY@O?BY?MnBw?MnO@O!_DsbhSkWb!ROX+PZ[+P^p+Pqr/^sw/^x!P/^!P!Q+P!Q!^/^!a#S/^#S#T0m#T#s/^#s$f+P$f;'S/^;'S;=`1e<%l?Ah/^?Ah?BY+P?BY?Mn/^?MnO+P!VFQbhSOpAYqrE{rsAYswE{wxAYx!PE{!P!QAY!Q!]E{!]!^GY!^!aAY!a#sE{#s$fAY$f;'SE{;'S;=`G|<%l?AhE{?Ah?BYAY?BY?MnE{?MnOAY!VGaXhSb!Rqr0msw0mx!P0m!Q!^0m!a#s0m$f;'S0m;'S;=`1_<%l?Ah0m?BY?Mn0m!VHPP;=`<%lE{!_HVP;=`<%lBw!ZHcW!bx`P!a`Or(trs'ksv(tw!^(t!^!_)e!_;'S(t;'S;=`*P<%lO(t!aIYlhS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OKQ!O!P-_!P!Q$q!Q!^-_!^!_*V!_!a&X!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!aK_khS`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx!P-_!P!Q$q!Q!^-_!^!_*V!_!`&X!`!aMS!a#S-_#S#T1k#T#s-_#s$f$q$f;'S-_;'S;=`3X<%l?Ah-_?Ah?BY$q?BY?Mn-_?MnO$q!TM_X`P!a`!cp!eQOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X!aNZ!ZhSfQ`PkW!a`!cpOX$qXZ&XZ[$q[^&X^p$qpq&Xqr-_rs&}sv-_vw/^wx(tx}-_}!OMz!O!PMz!P!Q$q!Q![Mz![!]Mz!]!^-_!^!_*V!_!a&X!a!c-_!c!}Mz!}#R-_#R#SMz#S#T1k#T#oMz#o#s-_#s$f$q$f$}-_$}%OMz%O%W-_%W%oMz%o%p-_%p&aMz&a&b-_&b1pMz1p4UMz4U4dMz4d4e-_4e$ISMz$IS$I`-_$I`$IbMz$Ib$Je-_$Je$JgMz$Jg$Kh-_$Kh%#tMz%#t&/x-_&/x&EtMz&Et&FV-_&FV;'SMz;'S;:j!#|;:j;=`3X<%l?&r-_?&r?AhMz?Ah?BY$q?BY?MnMz?MnO$q!a!$PP;=`<%lMz!R!$ZY!a`!cpOq*Vqr!$yrs(Vsv*Vwx)ex!a*V!a!b!4t!b;'S*V;'S;=`*s<%lO*V!R!%Q]!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!%y!O!f*V!f!g!']!g#W*V#W#X!0`#X;'S*V;'S;=`*s<%lO*V!R!&QX!a`!cpOr*Vrs(Vsv*Vwx)ex}*V}!O!&m!O;'S*V;'S;=`*s<%lO*V!R!&vV!a`!cp!dPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!'dX!a`!cpOr*Vrs(Vsv*Vwx)ex!q*V!q!r!(P!r;'S*V;'S;=`*s<%lO*V!R!(WX!a`!cpOr*Vrs(Vsv*Vwx)ex!e*V!e!f!(s!f;'S*V;'S;=`*s<%lO*V!R!(zX!a`!cpOr*Vrs(Vsv*Vwx)ex!v*V!v!w!)g!w;'S*V;'S;=`*s<%lO*V!R!)nX!a`!cpOr*Vrs(Vsv*Vwx)ex!{*V!{!|!*Z!|;'S*V;'S;=`*s<%lO*V!R!*bX!a`!cpOr*Vrs(Vsv*Vwx)ex!r*V!r!s!*}!s;'S*V;'S;=`*s<%lO*V!R!+UX!a`!cpOr*Vrs(Vsv*Vwx)ex!g*V!g!h!+q!h;'S*V;'S;=`*s<%lO*V!R!+xY!a`!cpOr!+qrs!,hsv!+qvw!-Swx!.[x!`!+q!`!a!/j!a;'S!+q;'S;=`!0Y<%lO!+qq!,mV!cpOv!,hvx!-Sx!`!,h!`!a!-q!a;'S!,h;'S;=`!.U<%lO!,hP!-VTO!`!-S!`!a!-f!a;'S!-S;'S;=`!-k<%lO!-SP!-kO{PP!-nP;=`<%l!-Sq!-xS!cp{POv(Vx;'S(V;'S;=`(h<%lO(Vq!.XP;=`<%l!,ha!.aX!a`Or!.[rs!-Ssv!.[vw!-Sw!`!.[!`!a!.|!a;'S!.[;'S;=`!/d<%lO!.[a!/TT!a`{POr)esv)ew;'S)e;'S;=`)y<%lO)ea!/gP;=`<%l!.[!R!/sV!a`!cp{POr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!0]P;=`<%l!+q!R!0gX!a`!cpOr*Vrs(Vsv*Vwx)ex#c*V#c#d!1S#d;'S*V;'S;=`*s<%lO*V!R!1ZX!a`!cpOr*Vrs(Vsv*Vwx)ex#V*V#V#W!1v#W;'S*V;'S;=`*s<%lO*V!R!1}X!a`!cpOr*Vrs(Vsv*Vwx)ex#h*V#h#i!2j#i;'S*V;'S;=`*s<%lO*V!R!2qX!a`!cpOr*Vrs(Vsv*Vwx)ex#m*V#m#n!3^#n;'S*V;'S;=`*s<%lO*V!R!3eX!a`!cpOr*Vrs(Vsv*Vwx)ex#d*V#d#e!4Q#e;'S*V;'S;=`*s<%lO*V!R!4XX!a`!cpOr*Vrs(Vsv*Vwx)ex#X*V#X#Y!+q#Y;'S*V;'S;=`*s<%lO*V!R!4{Y!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!a!4t!a!b!:]!b;'S!4t;'S;=`!;r<%lO!4tq!5pV!cpOv!5kvx!6Vx!a!5k!a!b!7W!b;'S!5k;'S;=`!8V<%lO!5kP!6YTO!a!6V!a!b!6i!b;'S!6V;'S;=`!7Q<%lO!6VP!6lTO!`!6V!`!a!6{!a;'S!6V;'S;=`!7Q<%lO!6VP!7QOxPP!7TP;=`<%l!6Vq!7]V!cpOv!5kvx!6Vx!`!5k!`!a!7r!a;'S!5k;'S;=`!8V<%lO!5kq!7yS!cpxPOv(Vx;'S(V;'S;=`(h<%lO(Vq!8YP;=`<%l!5ka!8bX!a`Or!8]rs!6Vsv!8]vw!6Vw!a!8]!a!b!8}!b;'S!8];'S;=`!:V<%lO!8]a!9SX!a`Or!8]rs!6Vsv!8]vw!6Vw!`!8]!`!a!9o!a;'S!8];'S;=`!:V<%lO!8]a!9vT!a`xPOr)esv)ew;'S)e;'S;=`)y<%lO)ea!:YP;=`<%l!8]!R!:dY!a`!cpOr!4trs!5ksv!4tvw!6Vwx!8]x!`!4t!`!a!;S!a;'S!4t;'S;=`!;r<%lO!4t!R!;]V!a`!cpxPOr*Vrs(Vsv*Vwx)ex;'S*V;'S;=`*s<%lO*V!R!;uP;=`<%l!4t!V!<TXiS`P!a`!cpOr&Xrs&}sv&Xwx(tx!^&X!^!_*V!_;'S&X;'S;=`*y<%lO&X",
  tokenizers: [w, T, v, P, b, x, 0, 1, 2, 3, 4, 5],
  topRules: {
    Document: [0, 15]
  },
  dialects: {
    noMatch: 0,
    selfClosing: 509
  },
  tokenPrec: 511
});
function k(e, t) {
  let l = Object.create(null);
  for (let a of e.getChildren(23)) {
    let e = a.getChild(24);
    let r = a.getChild(26) || a.getChild(27);
    e && (l[t.read(e.from, e.to)] = r ? 26 == r.type.id ? t.read(r.from + 1, r.to - 1) : t.read(r.from, r.to) : "");
  }
  return l;
}
function _(e, t) {
  let l = e.getChild(22);
  return l ? t.read(l.from, l.to) : " ";
}
function $(e, t, l) {
  let a;
  for (let r of l) if (!r.attrs || r.attrs(a || (a = k(e.node.parent.firstChild, t)))) return {
    parser: r.parser
  };
  return null;
}
function q(e = [], t = []) {
  let l = [];
  let a = [];
  let r = [];
  let s = [];
  for (let t of e) ("script" == t.tag ? l : "style" == t.tag ? a : "textarea" == t.tag ? r : s).push(t);
  let o = t.length ? Object.create(null) : null;
  for (let e of t) (o[e.name] || (o[e.name] = [])).push(e);
  return $g((e, t) => {
    let n = e.type.id;
    if (28 == n) return $(e, t, l);
    if (31 == n) return $(e, t, a);
    if (34 == n) return $(e, t, r);
    if (20 == n && s.length) {
      let l = e.node;
      let a = l.firstChild;
      let r = a && _(a, t);
      let n;
      if (r) {
        for (let e of s) if (e.tag == r && (!e.attrs || e.attrs(n || (n = k(a, t))))) {
          let t = l.lastChild;
          let r = 37 == t.type.id ? t.from : l.to;
          if (r > a.to) return {
            parser: e.parser,
            overlay: [{
              from: a.to,
              to: r
            }]
          };
        }
      }
    }
    if (o && 23 == n) {
      let l = e.node;
      let a;
      if (a = l.firstChild) {
        let e = o[t.read(a.from, a.to)];
        if (e) for (let a of e) {
          if (a.tagName && a.tagName != _(l.parent, t)) continue;
          let e = l.lastChild;
          if (26 == e.type.id) {
            let t = e.from + 1;
            let l = e.lastChild;
            let r = e.to - (l && l.isError ? 0 : 1);
            if (r > t) return {
              parser: a.parser,
              overlay: [{
                from: t,
                to: r
              }]
            };
          } else if (27 == e.type.id) return {
            parser: a.parser,
            overlay: [{
              from: e.from,
              to: e.to
            }]
          };
        }
      }
    }
    return null;
  });
}
let R = ["_blank", "_self", "_top", "_parent"];
let Z = ["ascii", "utf-8", "utf-16", "latin1", "latin1"];
let B = ["get", "post", "put", "delete"];
let E = ["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"];
let z = ["true", "false"];
let W = {};
let D = {
  a: {
    attrs: {
      href: null,
      ping: null,
      type: null,
      media: null,
      target: R,
      hreflang: null
    }
  },
  abbr: W,
  address: W,
  area: {
    attrs: {
      alt: null,
      coords: null,
      href: null,
      target: null,
      ping: null,
      media: null,
      hreflang: null,
      type: null,
      shape: ["default", "rect", "circle", "poly"]
    }
  },
  article: W,
  aside: W,
  audio: {
    attrs: {
      src: null,
      mediagroup: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["none", "metadata", "auto"],
      autoplay: ["autoplay"],
      loop: ["loop"],
      controls: ["controls"]
    }
  },
  b: W,
  base: {
    attrs: {
      href: null,
      target: R
    }
  },
  bdi: W,
  bdo: W,
  blockquote: {
    attrs: {
      cite: null
    }
  },
  body: W,
  br: W,
  button: {
    attrs: {
      form: null,
      formaction: null,
      name: null,
      value: null,
      autofocus: ["autofocus"],
      disabled: ["autofocus"],
      formenctype: E,
      formmethod: B,
      formnovalidate: ["novalidate"],
      formtarget: R,
      type: ["submit", "reset", "button"]
    }
  },
  canvas: {
    attrs: {
      width: null,
      height: null
    }
  },
  caption: W,
  center: W,
  cite: W,
  code: W,
  col: {
    attrs: {
      span: null
    }
  },
  colgroup: {
    attrs: {
      span: null
    }
  },
  command: {
    attrs: {
      type: ["command", "checkbox", "radio"],
      label: null,
      icon: null,
      radiogroup: null,
      command: null,
      title: null,
      disabled: ["disabled"],
      checked: ["checked"]
    }
  },
  data: {
    attrs: {
      value: null
    }
  },
  datagrid: {
    attrs: {
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  datalist: {
    attrs: {
      data: null
    }
  },
  dd: W,
  del: {
    attrs: {
      cite: null,
      datetime: null
    }
  },
  details: {
    attrs: {
      open: ["open"]
    }
  },
  dfn: W,
  div: W,
  dl: W,
  dt: W,
  em: W,
  embed: {
    attrs: {
      src: null,
      type: null,
      width: null,
      height: null
    }
  },
  eventsource: {
    attrs: {
      src: null
    }
  },
  fieldset: {
    attrs: {
      disabled: ["disabled"],
      form: null,
      name: null
    }
  },
  figcaption: W,
  figure: W,
  footer: W,
  form: {
    attrs: {
      action: null,
      name: null,
      "accept-charset": Z,
      autocomplete: ["on", "off"],
      enctype: E,
      method: B,
      novalidate: ["novalidate"],
      target: R
    }
  },
  h1: W,
  h2: W,
  h3: W,
  h4: W,
  h5: W,
  h6: W,
  head: {
    children: ["title", "base", "link", "style", "meta", "script", "noscript", "command"]
  },
  header: W,
  hgroup: W,
  hr: W,
  html: {
    attrs: {
      manifest: null
    }
  },
  i: W,
  iframe: {
    attrs: {
      src: null,
      srcdoc: null,
      name: null,
      width: null,
      height: null,
      sandbox: ["allow-top-navigation", "allow-same-origin", "allow-forms", "allow-scripts"],
      seamless: ["seamless"]
    }
  },
  img: {
    attrs: {
      alt: null,
      src: null,
      ismap: null,
      usemap: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"]
    }
  },
  input: {
    attrs: {
      alt: null,
      dirname: null,
      form: null,
      formaction: null,
      height: null,
      list: null,
      max: null,
      maxlength: null,
      min: null,
      name: null,
      pattern: null,
      placeholder: null,
      size: null,
      src: null,
      step: null,
      value: null,
      width: null,
      accept: ["audio/*", "video/*", "image/*"],
      autocomplete: ["on", "off"],
      autofocus: ["autofocus"],
      checked: ["checked"],
      disabled: ["disabled"],
      formenctype: E,
      formmethod: B,
      formnovalidate: ["novalidate"],
      formtarget: R,
      multiple: ["multiple"],
      readonly: ["readonly"],
      required: ["required"],
      type: ["hidden", "text", "search", "tel", "url", "email", "password", "datetime", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"]
    }
  },
  ins: {
    attrs: {
      cite: null,
      datetime: null
    }
  },
  kbd: W,
  keygen: {
    attrs: {
      challenge: null,
      form: null,
      name: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      keytype: ["RSA"]
    }
  },
  label: {
    attrs: {
      for: null,
      form: null
    }
  },
  legend: W,
  li: {
    attrs: {
      value: null
    }
  },
  link: {
    attrs: {
      href: null,
      type: null,
      hreflang: null,
      media: null,
      sizes: ["all", "16x16", "16x16 32x32", "16x16 32x32 64x64"]
    }
  },
  map: {
    attrs: {
      name: null
    }
  },
  mark: W,
  menu: {
    attrs: {
      label: null,
      type: ["list", "context", "toolbar"]
    }
  },
  meta: {
    attrs: {
      content: null,
      charset: Z,
      name: ["viewport", "application-name", "author", "description", "generator", "keywords"],
      "http-equiv": ["content-language", "content-type", "default-style", "refresh"]
    }
  },
  meter: {
    attrs: {
      value: null,
      min: null,
      low: null,
      high: null,
      max: null,
      optimum: null
    }
  },
  nav: W,
  noscript: W,
  object: {
    attrs: {
      data: null,
      type: null,
      name: null,
      usemap: null,
      form: null,
      width: null,
      height: null,
      typemustmatch: ["typemustmatch"]
    }
  },
  ol: {
    attrs: {
      reversed: ["reversed"],
      start: null,
      type: ["1", "a", "A", "i", "I"]
    },
    children: ["li", "script", "template", "ul", "ol"]
  },
  optgroup: {
    attrs: {
      disabled: ["disabled"],
      label: null
    }
  },
  option: {
    attrs: {
      disabled: ["disabled"],
      label: null,
      selected: ["selected"],
      value: null
    }
  },
  output: {
    attrs: {
      for: null,
      form: null,
      name: null
    }
  },
  p: W,
  param: {
    attrs: {
      name: null,
      value: null
    }
  },
  pre: W,
  progress: {
    attrs: {
      value: null,
      max: null
    }
  },
  q: {
    attrs: {
      cite: null
    }
  },
  rp: W,
  rt: W,
  ruby: W,
  samp: W,
  script: {
    attrs: {
      type: ["text/javascript"],
      src: null,
      async: ["async"],
      defer: ["defer"],
      charset: Z
    }
  },
  section: W,
  select: {
    attrs: {
      form: null,
      name: null,
      size: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      multiple: ["multiple"]
    }
  },
  slot: {
    attrs: {
      name: null
    }
  },
  small: W,
  source: {
    attrs: {
      src: null,
      type: null,
      media: null
    }
  },
  span: W,
  strong: W,
  style: {
    attrs: {
      type: ["text/css"],
      media: null,
      scoped: null
    }
  },
  sub: W,
  summary: W,
  sup: W,
  table: W,
  tbody: W,
  td: {
    attrs: {
      colspan: null,
      rowspan: null,
      headers: null
    }
  },
  template: W,
  textarea: {
    attrs: {
      dirname: null,
      form: null,
      maxlength: null,
      name: null,
      placeholder: null,
      rows: null,
      cols: null,
      autofocus: ["autofocus"],
      disabled: ["disabled"],
      readonly: ["readonly"],
      required: ["required"],
      wrap: ["soft", "hard"]
    }
  },
  tfoot: W,
  th: {
    attrs: {
      colspan: null,
      rowspan: null,
      headers: null,
      scope: ["row", "col", "rowgroup", "colgroup"]
    }
  },
  thead: W,
  time: {
    attrs: {
      datetime: null
    }
  },
  title: W,
  tr: W,
  track: {
    attrs: {
      src: null,
      label: null,
      default: null,
      kind: ["subtitles", "captions", "descriptions", "chapters", "metadata"],
      srclang: null
    }
  },
  ul: {
    children: ["li", "script", "template", "ul", "ol"]
  },
  var: W,
  video: {
    attrs: {
      src: null,
      poster: null,
      width: null,
      height: null,
      crossorigin: ["anonymous", "use-credentials"],
      preload: ["auto", "metadata", "none"],
      autoplay: ["autoplay"],
      mediagroup: ["movie"],
      muted: ["muted"],
      controls: ["controls"]
    }
  },
  wbr: W
};
let G = {
  accesskey: null,
  class: null,
  contenteditable: z,
  contextmenu: null,
  dir: ["ltr", "rtl", "auto"],
  draggable: ["true", "false", "auto"],
  dropzone: ["copy", "move", "link", "string:", "file:"],
  hidden: ["hidden"],
  id: null,
  inert: ["inert"],
  itemid: null,
  itemprop: null,
  itemref: null,
  itemscope: ["itemscope"],
  itemtype: null,
  lang: ["ar", "bn", "de", "en-GB", "en-US", "es", "fr", "hi", "id", "ja", "pa", "pt", "ru", "tr", "zh"],
  spellcheck: z,
  autocorrect: z,
  autocapitalize: z,
  style: null,
  tabindex: null,
  title: null,
  translate: ["yes", "no"],
  rel: ["stylesheet", "alternate", "author", "bookmark", "help", "license", "next", "nofollow", "noreferrer", "prefetch", "prev", "search", "tag"],
  role: "alert application article banner button cell checkbox complementary contentinfo dialog document feed figure form grid gridcell heading img list listbox listitem main navigation region row rowgroup search switch tab table tabpanel textbox timer".split(" "),
  "aria-activedescendant": null,
  "aria-atomic": z,
  "aria-autocomplete": ["inline", "list", "both", "none"],
  "aria-busy": z,
  "aria-checked": ["true", "false", "mixed", "undefined"],
  "aria-controls": null,
  "aria-describedby": null,
  "aria-disabled": z,
  "aria-dropeffect": null,
  "aria-expanded": ["true", "false", "undefined"],
  "aria-flowto": null,
  "aria-grabbed": ["true", "false", "undefined"],
  "aria-haspopup": z,
  "aria-hidden": z,
  "aria-invalid": ["true", "false", "grammar", "spelling"],
  "aria-label": null,
  "aria-labelledby": null,
  "aria-level": null,
  "aria-live": ["off", "polite", "assertive"],
  "aria-multiline": z,
  "aria-multiselectable": z,
  "aria-owns": null,
  "aria-posinset": null,
  "aria-pressed": ["true", "false", "mixed", "undefined"],
  "aria-readonly": z,
  "aria-relevant": null,
  "aria-required": z,
  "aria-selected": ["true", "false", "undefined"],
  "aria-setsize": null,
  "aria-sort": ["ascending", "descending", "none", "other"],
  "aria-valuemax": null,
  "aria-valuemin": null,
  "aria-valuenow": null,
  "aria-valuetext": null
};
let j = "beforeunload copy cut dragstart dragover dragleave dragenter dragend drag paste focus blur change click load mousedown mouseenter mouseleave mouseup keydown keyup resize scroll unload".split(" ").map(e => "on" + e);
for (let e of j) G[e] = null;
class I {
  constructor(e, t) {
    this.tags = Object.assign(Object.assign({}, D), e);
    this.globalAttrs = Object.assign(Object.assign({}, G), t);
    this.allTags = Object.keys(this.tags);
    this.globalAttrNames = Object.keys(this.globalAttrs);
  }
}
function U(e, t, l = e.length) {
  if (!t) return "";
  let a = t.firstChild;
  let r = a && a.getChild("TagName");
  return r ? e.sliceString(r.from, Math.min(r.to, l)) : "";
}
function N(e, t = !1) {
  for (; e; e = e.parent) if ("Element" == e.name) {
    if (!t) return e;
    t = !1;
  }
  return null;
}
function L(e, t, l) {
  let a = l.tags[U(e, N(t))];
  return a?.children || l.allTags;
}
function F(e, t) {
  let l = [];
  for (let a = N(t); a && !a.type.isTop; a = N(a.parent)) {
    let r = U(e, a);
    if (r && "CloseTag" == a.lastChild.name) break;
    r && 0 > l.indexOf(r) && ("EndTag" == t.name || t.from >= a.firstChild.to) && l.push(r);
  }
  return l;
}
I.$$default = new I();
let H = /^[:\-\.\w\u00b7-\uffff]*$/;
function K(e, t, l, a, r) {
  let n = /\s*>/.test(e.sliceDoc(r, r + 5)) ? "" : ">";
  let s = N(l, !0);
  return {
    from: a,
    to: r,
    options: L(e.doc, s, t).map(e => ({
      label: e,
      type: "type"
    })).concat(F(e.doc, l).map((e, t) => ({
      label: "/" + e,
      apply: "/" + e + n,
      type: "type",
      boost: 99 - t
    }))),
    validFor: /^\/?[:\-\.\w\u00b7-\uffff]*$/
  };
}
function J(e, t, l, a) {
  let r = /\s*>/.test(e.sliceDoc(a, a + 5)) ? "" : ">";
  return {
    from: l,
    to: a,
    options: F(e.doc, t).map((e, t) => ({
      label: e,
      apply: e + r,
      type: "type",
      boost: 99 - t
    })),
    validFor: H
  };
}
function ee(e, t) {
  let {
    state,
    pos
  } = t;
  let r = mv(state).resolveInner(pos, -1);
  let n = r.resolve(pos);
  for (function () {
    let e = pos;
    let t;
  }(); n == r && (t = r.childBefore(e));) {
    let l = t.lastChild;
    if (!l || !l.type.isError || l.from < l.to) break;
    n = r = t;
    e = l.from;
  }
  if ("TagName" == r.name) return r.parent && /CloseTag$/.test(r.parent.name) ? J(state, r, r.from, pos) : K(state, e, r, r.from, pos);
  if ("StartTag" == r.name) return K(state, e, r, pos, pos);
  if ("StartCloseTag" == r.name || "IncompleteCloseTag" == r.name) return J(state, r, pos, pos);
  if ("OpenTag" == r.name || "SelfClosingTag" == r.name || "AttributeName" == r.name) {
    var s;
    var o;
    let t;
    let n;
    let O;
    s = r;
    o = "AttributeName" == r.name ? r.from : pos;
    O = (n = (t = N(s)) ? e.tags[U(state.doc, t)] : null) && n.attrs ? Object.keys(n.attrs) : [];
    return {
      from: o,
      to: pos,
      options: (n && !1 === n.globalAttrs ? O : O.length ? O.concat(e.globalAttrNames) : e.globalAttrNames).map(e => ({
        label: e,
        type: "property"
      })),
      validFor: H
    };
  }
  return "Is" == r.name || "AttributeValue" == r.name || "UnquotedAttributeValue" == r.name ? function (e, t, l, a, r) {
    var n;
    let s = l.parent?.getChild("AttributeName");
    let o = [];
    let O;
    if (s) {
      let n = e.sliceDoc(s.from, s.to);
      let i = t.globalAttrs[n];
      if (!i) {
        let a = N(l);
        let r = a ? t.tags[U(e.doc, a)] : null;
        i = r?.attrs && r.attrs[n];
      }
      if (i) {
        let t = e.sliceDoc(a, r).toLowerCase();
        let l = '"';
        let n = '"';
        for (let s of (/^['"]/.test(t) ? (O = '"' == t[0] ? /^[^"]*$/ : /^[^']*$/, l = "", n = e.sliceDoc(r, r + 1) == t[0] ? "" : t[0], t = t.slice(1), a++) : O = /^[^\s<>='"]*$/, i)) o.push({
          label: s,
          apply: l + s + n,
          type: "constant"
        });
      }
    }
    return {
      from: a,
      to: r,
      options: o,
      validFor: O
    };
  }(state, e, r, "Is" == r.name ? pos : r.from, pos) : t.explicit && ("Element" == n.name || "Text" == n.name || "Document" == n.name) ? function (e, t, l, a) {
    let r = [];
    let n = 0;
    for (let a of L(e.doc, l, t)) r.push({
      label: "<" + a,
      type: "type"
    });
    for (let t of F(e.doc, l)) r.push({
      label: "</" + t + ">",
      type: "type",
      boost: 99 - n++
    });
    return {
      from: a,
      to: a,
      options: r,
      validFor: /^<\/?[:\-\.\w\u00b7-\uffff]*$/
    };
  }(state, e, r, pos) : null;
}
export function $$et2(e) {
  return ee(I.$$default, e);
}
export function $$el3(e) {
  let {
    extraTags,
    extraGlobalAttributes
  } = e;
  let a = extraGlobalAttributes || extraTags ? new I(extraTags, extraGlobalAttributes) : I.$$default;
  return e => ee(a, e);
}
let ea = o$.parser.configure({
  top: "SingleExpression"
});
let er = [{
  tag: "script",
  attrs: e => "text/typescript" == e.type || "ts" == e.lang,
  parser: sL.parser
}, {
  tag: "script",
  attrs: e => "text/babel" == e.type || "text/jsx" == e.type,
  parser: W6.parser
}, {
  tag: "script",
  attrs: e => "text/typescript-jsx" == e.type,
  parser: g4.parser
}, {
  tag: "script",
  attrs: e => /^(importmap|speculationrules|application\/(.+\+)?json)$/i.test(e.type),
  parser: ea
}, {
  tag: "script",
  attrs: e => !e.type || /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i.test(e.type),
  parser: o$.parser
}, {
  tag: "style",
  attrs: e => (!e.lang || "css" == e.lang) && (!e.type || /^(text\/)?(x-)?(stylesheet|css)$/i.test(e.type)),
  parser: cssLanguage.parser
}];
let en = [{
  name: "style",
  parser: cssLanguage.parser.configure({
    top: "Styles"
  })
}].concat(j.map(e => ({
  name: e,
  parser: o$.parser
})));
let $$es5 = bj.define({
  name: "html",
  parser: y.configure({
    props: [Oh.add({
      Element(e) {
        let t = /^(\s*)(<\/)?/.exec(e.textAfter);
        return e.node.to <= e.pos + t[0].length ? e.$$continue() : e.lineIndent(e.node.from) + (t[2] ? 0 : e.unit);
      },
      "OpenTag CloseTag SelfClosingTag": e => e.column(e.node.from) + e.unit,
      Document(e) {
        if (e.pos + /\s*/.exec(e.textAfter)[0].length < e.node.to) return e.$$continue();
        let t = null;
        let l;
        for (let l = e.node;;) {
          let e = l.lastChild;
          if (!e || "Element" != e.name || e.to != l.to) break;
          t = l = e;
        }
        return t && !((l = t.lastChild) && ("CloseTag" == l.name || "SelfClosingTag" == l.name)) ? e.lineIndent(t.from) + e.unit : null;
      }
    }), b_.add({
      Element(e) {
        let t = e.firstChild;
        let l = e.lastChild;
        return t && "OpenTag" == t.name ? {
          from: t.to,
          to: "CloseTag" == l.name ? l.from : e.to
        } : null;
      }
    }), Q_.add({
      "OpenTag CloseTag": e => e.getChild("TagName")
    })]
  }),
  languageData: {
    commentTokens: {
      block: {
        open: "\x3c!--",
        close: "--\x3e"
      }
    },
    indentOnInput: /^\s*<\/\w+\W$/,
    wordChars: "-._"
  }
});
let $$eo4 = $$es5.configure({
  wrap: q(er, en)
});
export function $$eO1(e = {}) {
  let t = "";
  let l;
  !1 === e.matchClosingTags && (t = "noMatch");
  !0 === e.selfClosingTags && (t = (t ? t + " " : "") + "selfClosing");
  (e.nestedLanguages && e.nestedLanguages.length || e.nestedAttributes && e.nestedAttributes.length) && (l = q((e.nestedLanguages || []).concat(er), (e.nestedAttributes || []).concat(en)));
  let a = l ? $$es5.configure({
    wrap: l,
    dialect: t
  }) : t ? $$eo4.configure({
    dialect: t
  }) : $$eo4;
  return new Yy(a, [$$eo4.data.of({
    autocomplete: $$el3(e)
  }), !1 !== e.autoCloseTags ? $$eu0 : [], Q2().support, css().support]);
}
let ei = new Set("area base br col command embed frame hr img input keygen link meta param source track wbr menuitem".split(" "));
let $$eu0 = Lz.inputHandler.of((e, t, l, a, r) => {
  if (e.composing || e.state.readOnly || t != l || ">" != a && "/" != a || !$$eo4.isActiveAt(e.state, t, -1)) return !1;
  let n = r();
  let {
    state
  } = n;
  let o = state.changeByRange(e => {
    var t;
    var l;
    var r;
    let n = state.doc.sliceString(e.from - 1, e.to) == a;
    let {
      head
    } = e;
    let O = mv(state).resolveInner(head, -1);
    let i;
    if (n && ">" == a && "EndTag" == O.name) {
      let a = O.parent;
      if (a.parent?.lastChild?.name != "CloseTag" && (i = U(state.doc, a.parent, head)) && !ei.has(i)) {
        let t = head + (">" === state.doc.sliceString(head, head + 1) ? 1 : 0);
        return {
          range: e,
          changes: {
            from: head,
            to: t,
            insert: `</${i}>`
          }
        };
      }
    } else if (n && "/" == a && "IncompleteCloseTag" == O.name) {
      let e = O.parent;
      if (O.from == head - 2 && e.lastChild?.name != "CloseTag" && (i = U(state.doc, e, head)) && !ei.has(i)) {
        let e = head + (">" === state.doc.sliceString(head, head + 1) ? 1 : 0);
        let t = `${i}>`;
        return {
          range: OF.cursor(head + t.length, -1),
          changes: {
            from: head,
            to: e,
            insert: t
          }
        };
      }
    }
    return {
      range: e
    };
  });
  return !o.changes.empty && (e.dispatch([n, state.update(o, {
    userEvent: "input.complete",
    scrollIntoView: !0
  })]), !0);
});
export const autoCloseTags = $$eu0;
export const html = $$eO1;
export const htmlCompletionSource = $$et2;
export const htmlCompletionSourceWith = $$el3;
export const htmlLanguage = $$eo4;
export const htmlPlain = $$es5;