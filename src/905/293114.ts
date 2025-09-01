import { Fo, yM, nP, nf, ul, u_, fY, TA, j0, OS, CB, Id, hb, $V, yV } from "../figma_app/262240";
import { I as _$$I } from "../905/83107";
import { oP, rb, E$ } from "../905/209596";
import { bB } from "../905/776065";
import { k_, kH, a$, fq, Fw } from "../905/170103";
import { _ as _$$_ } from "../905/447176";
import { xw, sy, fW, tc, nO, E8, Du, vl, Iw } from "../905/192923";
import { uV, t$, _p } from "../905/41027";
import { P as _$$P, W as _$$W } from "../905/49602";
import { JM, TX } from "../905/950718";
import { Qm } from "../905/131414";
import { wU, nq, v$, KE } from "../905/279649";
import { Sm, yy, Ax, Ft } from "../905/55006";
let n;
function l(e) {
  let t = Fo(e, e => "TEXT" === e.type, {
    includeSelf: !1
  });
  if (1 === t.length) return t[0];
}
let d = ["FRAME", "RECTANGLE", "ROUNDED_RECTANGLE", "INSTANCE", "GROUP"];
function c(e) {
  let t = e.toLowerCase();
  return (t = (t = t.replace(/[^a-zA-Z\s-]/g, "")).trim(), bB(t)) ? "" : t;
}
let f = /[\$\xA2-\xA5\u058F\u060B\u09F2\u09F3\u09FB\u0AF1\u0BF9\u0E3F\u17DB\u20A0-\u20BD\uA838\uFDFC\uFE69\uFF04\uFFE0\uFFE1\uFFE5\uFFE6\u20B9]/;
let _ = /([0-1]?[0-9]|2[0-3])\s*:\s*[0-5][0-9]/;
try {
  n = RegExp("^[^\\p{L}]*$", "u");
} catch (e) {
  n = /^[^a-zA-Z]*$/;
}
function A(e) {
  let t = e.trim();
  return 0 === t.length ? null : t.length >= 20 ? "normal" : f.test(t) ? "price" : _.test(t) ? "time" : n.test(t) ? "no_letters" : "normal";
}
let v = ["input", "inputname", "inputactive", "inputfield", "textfield", "statusfilltypedefaultstatefilledinputthemelightcomponentinputfield", "statusfilltypedefaultstatefilledinputthemedarkcomponentinputfield", "statusfilltypedefaultstateemptyinputthemelightcomponentinputfield", "statusfilltypedefaultstateemptyinputthemedarkcomponentinputfield", "statusfilltypenormalstatefilledinputthemelightcomponentinputfield", "statusfilltypenormalstatefilledinputthemedarkcomponentinputfield", "rowlightsmalltextfielddefault", "formtextfield", "formfield", "textinput", "textfieldinput"];
let I = ["placeholder", "placeholdertext", "email", "password", "username", "fullname", "cardnumber", "cardholdername", "cardname", "cardexpirationdate", "expirationdate", "expirydate", "cvv", "firstname", "lastname", "name", "mobilenumber", "phonenumber", "emailaddress", "address", "country", "countryregion", "city", "state", "nationality", "maritalstatus", "zip", "zipcode", "postalcode", "dateofbirth", "yourmessage", "subject", "message", "discountcode", "discount", "promocode", "yourname", "locationzipcode", "referralcode", "createpassword", "nameoncard", "name"];
let E = ["enter ", "confirm ", "repeat ", "select ", "write "];
let x = ["***", "\u2022\u2022\u2022", "@gmail.com", "@email.com", "@yourdomain.com", "@example.com"];
let S = ["search", "searchfield", "searchinput", "searchbar", "formsearchinput", "formsearchfield", "formsearchtextfield", "formsearchinputfield", "formsearchfieldtextfield", "searchinputfield", "searchtextfield", "searchinputtextfield", "searchtextfieldinput", "searchfieldinputtextfield", "searchfieldtextfieldinput", "searchfieldtextfield"];
function w(e) {
  let t = e.characters;
  if (!t) return !1;
  let i = t.replace(/^[^a-zA-Z0-9]+/, "");
  i = i.toLowerCase();
  let n = E.some(e => i.startsWith(e.toLowerCase()) && t.length > e.length);
  let r = i.replace(/[^a-zA-Z]/g, "");
  let a = I.includes(r) || x.includes(r);
  let s = "LEFT" === e.textAlignHorizontal;
  return (n || a) && s;
}
function k(e, t, i, n, r, a, s) {
  try {
    var o = e[a](s);
    var l = o.value;
  } catch (e) {
    i(e);
    return;
  }
  o.done ? t(l) : Promise.resolve(l).then(n, r);
}
function R(e) {
  return function () {
    var t = this;
    var i = arguments;
    return new Promise(function (n, r) {
      var a = e.apply(t, i);
      function s(e) {
        k(a, n, r, s, o, "next", e);
      }
      function o(e) {
        k(a, n, r, s, o, "throw", e);
      }
      s(void 0);
    });
  };
}
export let $$N1 = function () {
  var e = R(function* (e, t, i, n) {
    let a;
    let o;
    let l = performance.now();
    if (a = t.SlowOrAsyncNodeFeatures ? function (e, t, i) {
      return O.apply(this, arguments);
    }(e, i, n) : new Map(), t.LinearTimeNodeFeatures) {
      let e = performance.now();
      o = $$P0(i);
      JM(`Added linear time node features with duration ${performance.now() - e}`);
    } else o = new Map();
    if (!t.SlowOrAsyncNodeFeatures) return o;
    let d = yield a;
    JM(`Added slow and async node features with duration ${performance.now() - l}`);
    let c = new Map();
    for (let [e, t] of o.entries()) {
      let i = d.get(e);
      if (!i) throw Error(`Fast node features were computed for node ${e}, but slow features are missing.`);
      c.set(e, function (e) {
        for (var t = 1; t < $$arguments.length; t++) {
          var i = null != $$arguments[t] ? $$arguments[t] : {};
          var n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable;
          })));
          n.forEach(function (t) {
            var n;
            n = i[t];
            t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n;
          });
        }
        return e;
      }({}, t, i));
    }
    let u = performance.now();
    (function (e, t) {
      for (let i of e) yM(i, e => {
        var i;
        var n;
        var r;
        var a;
        var o;
        var l;
        var d;
        let c = t.get(e.id);
        let u = null !== (n = e.children?.map(e => t.get(e.id))) && void 0 !== n ? n : [];
        let p = function (e, t) {
          var i;
          var n;
          let r = null !== (n = e.parentNode.children?.map(e => t.get(e.id))) && void 0 !== n ? n : [];
          let a = [];
          for (let t of r) {
            if (!t) continue;
            let i = {
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height
            };
            let n = {
              x: e.x,
              y: e.y,
              width: e.w,
              height: e.h
            };
            oP(i, n) && a.push(t);
          }
          return a;
        }(e, t);
        if (null == c.imageEmbedding) {
          let e = [];
          let t = [];
          for (let t of u) t?.imageEmbedding && e.push({
            memoEntry: t,
            embedding: t.imageEmbedding
          });
          for (let e of p) e && e.imageEmbedding && t.push({
            memoEntry: e,
            embedding: e.imageEmbedding
          });
          let i = e.length;
          let n = t.length;
          if (i > 0) {
            let t = e.reduce((e, t) => e.memoEntry.area > t.memoEntry.area ? e : t);
            let n = t.memoEntry;
            let s = t?.embedding;
            c.imageEmbedding = s;
            c.hoistedImageAreaRatio = Math.min((null !== (r = n.hoistedImageAreaRatio) && void 0 !== r ? r : 1) * n.area / c.area, 1);
            c.hoistedImageFromChildNumLevels = (null !== (a = n.hoistedImageFromChildNumLevels) && void 0 !== a ? a : 0) + 1;
            c.hoistedImageNumCandidates = (null !== (o = n.hoistedImageNumCandidates) && void 0 !== o ? o : 0) + i;
          } else {
            if (!(n > 0)) return;
            let e = t.reduce((e, t) => e.memoEntry.area > t.memoEntry.area ? e : t);
            let i = e.memoEntry;
            let r = e?.embedding;
            c.imageEmbedding = r;
            c.hoistedImageAreaRatio = Math.min((null !== (l = i.hoistedImageAreaRatio) && void 0 !== l ? l : 1) * i.area / c.area, 1);
            c.hoistedImageFromSibling = !0;
            c.hoistedImageNumCandidates = (null !== (d = i.hoistedImageNumCandidates) && void 0 !== d ? d : 0) + n;
          }
        }
      });
    })(i, c);
    JM(`Hoisted features with duration ${performance.now() - u}`);
    return c;
  });
  return function (t, i, n, r) {
    return e.apply(this, arguments);
  };
}();
export function $$P0(e) {
  let t = new Map();
  let i = 0;
  let n = 0;
  for (let _ of e) {
    var a;
    var s;
    var d;
    var c;
    var u;
    var f;
    let b = TX("numNeighboringTLFs", () => function (e) {
      var t;
      let i = (e.parentNode?.children || []).filter(e => nP(e)).filter(t => t !== e);
      let n = {
        up: 0,
        down: 0,
        left: 0,
        right: 0
      };
      i.forEach(t => {
        t.x + t.w < e.x && 30 >= Math.abs(t.y - e.y) ? n.left++ : t.x > e.x + e.w && 30 >= Math.abs(t.y - e.y) && n.right++;
        t.y + t.h < e.y && 30 >= Math.abs(t.x - e.x) ? n.up++ : t.y > e.y + e.h && 30 >= Math.abs(t.x - e.x) && n.down++;
      });
      return n;
    }(_));
    i = Math.max(i, b.right);
    n = Math.max(n, b.down);
    let C = _.parentNode.children.filter(e => e.type === _.type && e.w == _.w && e.h == _.h).length;
    t.set(_.id, {
      isTlf: !0,
      numAncestors: 0,
      numDescendants: 0,
      numChildren: _.children?.length || 0,
      numSiblings: e.length - 1,
      numSiblingsSameType: e.length - 1,
      numSiblingsSameTypeAndArea: C,
      name: _.name,
      nameIsExactBackButtonString: !1,
      textIsExactBackButtonString: !1,
      nodeTypeEllipse: "ELLIPSE" === _.type,
      nodeTypeFrame: "FRAME" === _.type,
      nodeTypeGroup: "GROUP" === _.type,
      nodeTypeInstance: "INSTANCE" === _.type,
      nodeTypeRectangle: "RECTANGLE" === _.type,
      nodeTypeSymbol: "SYMBOL" === _.type,
      nodeTypeText: "TEXT" === _.type,
      nodeTypeVector: "VECTOR" === _.type,
      nodeTypeBooleanOperation: "BOOLEAN_OPERATION" === _.type,
      nodeTypeLine: "LINE" === _.type,
      parentNodeTypeFrame: !1,
      parentNodeTypeGroup: !1,
      parentNodeTypeInstance: !1,
      parentNodeTypeSymbol: !1,
      characters: null !== (d = _.characters) && void 0 !== d ? d : null,
      charactersLength: null !== (c = _.characters?.length) && void 0 !== c ? c : null,
      x: _.x,
      y: _.y,
      width: _.w,
      height: _.h,
      area: _.w * _.h,
      areaRelativeToParent: null,
      aspectRatio: _.w / _.h,
      cornerRadius: null !== (u = _.cornerRadius) && void 0 !== u ? u : 0,
      isClippedByAncestor: !1,
      nodeIsVisible: nf(_),
      containingTlfX: _.x,
      containingTlfY: _.y,
      containingTlfWidth: _.w,
      containingTlfHeight: _.h,
      normalizedXRelativeToTlf: 0,
      normalizedYRelativeToTlf: 0,
      widthRelativeToTlf: 1,
      heightRelativeToTlf: 1,
      fontSize: null,
      childCharacters: null,
      childCharactersAreExactBackButtonString: !1,
      childCharactersLength: null,
      childFontSize: null,
      semanticType: null,
      semanticTypeButton: !1,
      semanticTypeHeader: !1,
      semanticTypeInput: !1,
      semanticTypeFooter: !1,
      inSemanticTypeButton: !1,
      inSemanticTypeHeader: !1,
      inSemanticTypeInput: !1,
      inSemanticTypeFooter: !1,
      isNavigationMenu: !1,
      isInNavigationMenu: !1,
      isGenericEmptyNode: !1,
      isEmptyRectangle: !1,
      isEmptyVector: !1,
      isCovered: !1,
      isCoveredV2: !1,
      textTypePrice: null,
      textTypeTime: null,
      textTypeNoLetters: null,
      childTextTypePrice: null,
      childTextTypeTime: null,
      childTextTypeNoLetters: null,
      numTLFsLeftOfContainingTLF: b.left,
      numTLFsRightOfContainingTLF: b.right,
      numTLFsAboveContainingTLF: b.up,
      numTLFsBelowContainingTLF: b.down,
      isContainerWithGenericVectors: !1,
      isIconish: !1,
      isInputField: !1,
      numRowsInSelection: 0,
      numColsInSelection: 0,
      hasColorfulSolidFill: !1,
      colorfulness: 0,
      isLargestButtonInTLF: !1,
      numEllipseDescendants: 0,
      numFrameDescendants: 0,
      numGroupDescendants: 0,
      numImageDescendants: 0,
      numInstanceDescendants: 0,
      numTextDescendants: 0,
      numRectDescendants: 0,
      numRoundedRectDescendants: 0,
      numVectorDescendants: 0,
      TlfNumDescendants: 0,
      TlfNumTextDescendants: 0,
      isLeftAlignedText: !1,
      isRightAlignedText: !1,
      isCenterAlignedText: !1,
      isSearchContainer: !1,
      isSearchStringText: !1,
      isEmptyInputText: !1,
      isFilledInputText: !1,
      isInputContainer: !1,
      relativeXPositionToParent: -1,
      relativeYPositionToParent: -1,
      layoutMode: null !== (f = _.layoutMode) && void 0 !== f ? f : null
    });
    let T = {
      id: "",
      area: 0
    };
    ul(_, e => {
      var i;
      var n;
      var a;
      var s;
      var d;
      var c;
      var u;
      var f;
      var C;
      var k;
      var R;
      var N;
      var P;
      var O;
      var D;
      var L;
      var F;
      if (e.id === _.id) return;
      let M = t.get(e.parentNode.id);
      if (!M) throw Error("The parent memo entry should have been created by now.");
      let j = e.children?.length || 0;
      let U = M.numAncestors + 1;
      let B = "SECTION" === e.parentNode.type ? 0 : e.parentNode.children.length - 1;
      let V = e.parentNode.children.filter(t => t.type === e.type).length - 1;
      let G = e.parentNode.children.filter(t => t.type === e.type && t.w == e.w && t.h == e.h).length;
      let z = l(e);
      let H = null !== (c = TX("semanticType", () => function (e, t) {
        if (!u_(e) || !e.children || 0 === e.children.length) return;
        let i = function (e, t) {
          let i = xw(e, t) && sy(e, t);
          return i && fW(e, t) && tc(e) ? "header" : i && nO(e, t) && tc(e) ? "footer" : void 0;
        }(e, t);
        if (i) return i;
        let n = function (e) {
          if (fY(e)) return "button";
        }(e);
        if (n) return n;
      }(e, _))) && void 0 !== c ? c : null;
      let W = {
        isTlf: !1,
        numAncestors: U,
        numChildren: j,
        numSiblings: B,
        numSiblingsSameType: V,
        numSiblingsSameTypeAndArea: G,
        numDescendants: 0,
        name: e.name,
        nameIsExactBackButtonString: uV(e.name),
        textIsExactBackButtonString: uV(null !== (u = e.characters) && void 0 !== u ? u : ""),
        nodeTypeEllipse: "ELLIPSE" === e.type,
        nodeTypeFrame: "FRAME" === e.type,
        nodeTypeGroup: "GROUP" === e.type,
        nodeTypeInstance: "INSTANCE" === e.type,
        nodeTypeRectangle: "RECTANGLE" === e.type,
        nodeTypeSymbol: "SYMBOL" === e.type,
        nodeTypeText: "TEXT" === e.type,
        nodeTypeVector: "VECTOR" === e.type,
        nodeTypeBooleanOperation: "BOOLEAN_OPERATION" === e.type,
        nodeTypeLine: "LINE" === e.type,
        parentNodeTypeFrame: "FRAME" === e.parentNode.type,
        parentNodeTypeGroup: "GROUP" === e.parentNode.type,
        parentNodeTypeInstance: "INSTANCE" === e.parentNode.type,
        parentNodeTypeSymbol: "SYMBOL" === e.parentNode.type,
        layoutMode: null !== (f = _.layoutMode) && void 0 !== f ? f : null,
        characters: null !== (C = e.characters) && void 0 !== C ? C : null,
        charactersLength: null !== (k = e.characters?.length) && void 0 !== k ? k : null,
        fontSize: null !== (R = e.fontSize) && void 0 !== R ? R : null,
        x: e.x,
        y: e.y,
        width: e.w,
        height: e.h,
        area: e.w * e.h,
        areaRelativeToParent: e.w * e.h / (M.area + 1e-6),
        aspectRatio: 0 === e.h ? null : e.w / e.h,
        cornerRadius: null !== (N = e.cornerRadius) && void 0 !== N ? N : 0,
        childCharacters: null !== (P = z?.characters) && void 0 !== P ? P : null,
        childCharactersAreExactBackButtonString: uV(null !== (O = z?.characters) && void 0 !== O ? O : ""),
        childCharactersLength: null !== (D = z?.characters?.length) && void 0 !== D ? D : null,
        childFontSize: null !== (L = z?.fontSize) && void 0 !== L ? L : null,
        isClippedByAncestor: TX("isClippedByAncestor", () => _$$_(e)),
        nodeIsVisible: nf(e),
        containingTlfX: _.x,
        containingTlfY: _.y,
        containingTlfWidth: _.w,
        containingTlfHeight: _.h,
        widthRelativeToTlf: e.w / _.w,
        heightRelativeToTlf: e.h / _.h,
        normalizedXRelativeToTlf: TX("normalizedXRelativeToFrame", () => E8(e, _)),
        normalizedYRelativeToTlf: TX("normalizedYRelativeToFrame", () => Du(e, _)),
        semanticType: H,
        semanticTypeButton: "button" === H,
        semanticTypeHeader: "header" === H,
        semanticTypeInput: "input" === H,
        semanticTypeFooter: "footer" === H,
        inSemanticTypeButton: M.semanticTypeButton,
        inSemanticTypeHeader: M.semanticTypeHeader,
        inSemanticTypeInput: M.semanticTypeInput,
        inSemanticTypeFooter: M.semanticTypeFooter,
        isInNavigationMenu: TX("isInNavigationMenu", () => function (e, t) {
          var i;
          if (TA(e)) return !1;
          let n = e.parentNode;
          return !TA(n) && !!(n.children && n.children?.length >= 3 && u_(n) && sy(n, t) && tc(n) && n.w > n.h && e.w > .1 * n.w && (nO(n, t) || fW(n, t)));
        }(e, _)),
        isContainerWithGenericVectors: j0(e),
        isGenericEmptyNode: 0 === j && bB(e.name),
        isEmptyRectangle: "RECTANGLE" === e.type && e.fills?.length === 0,
        isEmptyVector: "VECTOR" === e.type && e.fills?.length === 0,
        isNavigationMenu: !1,
        isCovered: M.isCovered || _$$P(e),
        isCoveredV2: M.isCoveredV2 || _$$W(e),
        textTypePrice: null,
        textTypeTime: null,
        textTypeNoLetters: null,
        childTextTypePrice: null,
        childTextTypeTime: null,
        childTextTypeNoLetters: null,
        numTLFsLeftOfContainingTLF: b.left,
        numTLFsRightOfContainingTLF: b.right,
        numTLFsAboveContainingTLF: b.up,
        numTLFsBelowContainingTLF: b.down,
        isIconish: TX("isIconish", () => OS(e)),
        isInputField: TX("isInputField", () => function e(t) {
          if (CB(t.parentNode)) return !1;
          let i = Id(t);
          if (t.w >= i.w || t.h >= i.h / 2 || t.w < .01 || t.h < .01) return !1;
          if (u_(t) && t.children) {
            let i = t.name.toLowerCase().replace(/[^a-zA-Z]/g, "");
            if (v.includes(i)) return !0;
            if (1 === t.children.length) {
              let i = t.children[0];
              if (!1 === i.visible) return !1;
              if (w(i) || "FRAME" === i.type && i.children && 1 === i.children.length && e(i.children[0])) return !0;
            }
            let n = !1;
            if (t.children.length > 1 && t.children.length < 5) {
              for (let e of t.children) if (w(e)) {
                if (n) return !1;
                n = !0;
              } else if ("GROUP" !== e.type && !OS(e)) return !1;
            }
            if (n) return !0;
          }
          return !1;
        }(e)),
        isLeftAlignedText: TX("isLeftAlignedText", () => "LEFT" === e.textAlignHorizontal),
        isRightAlignedText: TX("isRightAlignedText", () => "RIGHT" === e.textAlignHorizontal),
        isCenterAlignedText: TX("isCenterAlignedText", () => "CENTER" === e.textAlignHorizontal),
        isSearchContainer: TX("isSearchContainer", () => function (e) {
          let t = e.name.toLowerCase().replace(/[^a-zA-Z]/g, "");
          return u_(e) && S.includes(t);
        }(e)),
        isSearchStringText: TX("isSearchStringText", () => function (e) {
          if (!e.characters || 0 === e.characters.length || "TEXT" !== e.type) return !1;
          let t = e.characters.replace(/^[^a-zA-Z0-9]+/, "");
          return (t = t.toLowerCase()).startsWith("search");
        }(e)),
        isEmptyInputText: TX("isEmptyInputText", () => function (e) {
          if (!e.characters || 0 === e.characters.length || "TEXT" !== e.type) return !1;
          let t = e.characters;
          let i = t.replace(/^[^a-zA-Z0-9]+/, "");
          i = i.toLowerCase();
          let n = E.some(e => i.startsWith(e.toLowerCase()) && t.length > e.length);
          let r = i.replace(/[^a-zA-Z]/g, "");
          let a = I.includes(r);
          return n || a;
        }(e)),
        isFilledInputText: TX("isFilledInputText", () => function (e) {
          if (!e.characters || 0 === e.characters.length || "TEXT" !== e.type) return !1;
          let t = e.characters.replace(/^[^a-zA-Z0-9]+/, "");
          t = t.toLowerCase();
          return x.some(e => t.includes(e));
        }(e)),
        isInputContainer: TX("isInputContainer", () => function (e) {
          let t = e.name.toLowerCase().replace(/[^a-zA-Z]/g, "");
          return u_(e) && v.includes(t);
        }(e)),
        relativeXPositionToParent: TX("relativeXPositionToParent", () => vl(e)),
        relativeYPositionToParent: TX("relativeYPositionToParent", () => Iw(e)),
        numRowsInSelection: null,
        numColsInSelection: null,
        hasColorfulSolidFill: TX("hasColorfulSolidFill", () => function (e) {
          var t;
          for (let i of null !== (t = e.fills) && void 0 !== t ? t : []) if ("SOLID" === i.type && !function (e) {
            let {
              r,
              g,
              b
            } = e;
            return .1 > Math.abs(r - g) && .1 > Math.abs(g - b) && .1 > Math.abs(r - b);
          }(i.color)) return !0;
          return !1;
        }(e)),
        colorfulness: TX("colorfulness", () => function (e) {
          var t;
          let i = null !== (t = e.fills) && void 0 !== t ? t : [];
          let n = 0;
          for (let e of i) "SOLID" === e.type && (n = Math.max(n, function (e) {
            let {
              r: _r,
              g,
              b
            } = e;
            let r = (_r + g + b) / 3;
            return Math.sqrt(((_r - r) ** 2 + (g - r) ** 2 + (b - r) ** 2) / 3);
          }(e.color)));
          return n;
        }(e)),
        isLargestButtonInTLF: !1,
        numEllipseDescendants: 0,
        numFrameDescendants: 0,
        numGroupDescendants: 0,
        numImageDescendants: 0,
        numInstanceDescendants: 0,
        numTextDescendants: 0,
        numRectDescendants: 0,
        numRoundedRectDescendants: 0,
        numVectorDescendants: 0,
        TlfNumDescendants: 0,
        TlfNumTextDescendants: 0
      };
      if (W.isInNavigationMenu && (M.isNavigationMenu = !0), W.semanticTypeButton) {
        let t = e.w * e.h;
        T.area < t && (T = {
          id: e.id,
          area: e.w * e.h
        });
      }
      let K = TX("textType", () => {
        var e;
        return A(null !== (e = W.characters) && void 0 !== e ? e : "");
      });
      let Y = A(null !== (F = W.childCharacters) && void 0 !== F ? F : "");
      W.textTypePrice = "price" === K;
      W.textTypeTime = "time" === K;
      W.textTypeNoLetters = "no_letters" === K;
      W.childTextTypePrice = "price" === Y;
      W.childTextTypeTime = "time" === Y;
      W.childTextTypeNoLetters = "no_letters" === Y;
      t.set(e.id, W);
    });
    "" !== T.id && (t.get(T.id).isLargestButtonInTLF = !0);
    yM(_, e => {
      var i;
      var n;
      var r;
      var a;
      var s;
      var o;
      var l;
      var d;
      var c;
      var u;
      var p;
      var m;
      var h;
      var g;
      var f;
      var _;
      var A;
      var y;
      var b;
      var v;
      let I = null !== (p = e.children?.reduce((e, i) => e + t.get(i.id).numDescendants + 1, 0)) && void 0 !== p ? p : 0;
      let E = null !== (m = e.children?.reduce((e, i) => e + t.get(i.id).numTextDescendants + ("TEXT" === i.type ? 1 : 0), 0)) && void 0 !== m ? m : 0;
      let x = null !== (h = e.children?.reduce((e, i) => e + t.get(i.id).numEllipseDescendants + ("ELLIPSE" === i.type ? 1 : 0), 0)) && void 0 !== h ? h : 0;
      let S = null !== (g = e.children?.reduce((e, i) => e + t.get(i.id).numFrameDescendants + ("FRAME" === i.type ? 1 : 0), 0)) && void 0 !== g ? g : 0;
      let w = null !== (f = e.children?.reduce((e, i) => e + t.get(i.id).numGroupDescendants + ("GROUP" === i.type ? 1 : 0), 0)) && void 0 !== f ? f : 0;
      let C = null !== (_ = e.children?.reduce((e, i) => e + t.get(i.id).numImageDescendants + (i.fills && i.fills.filter(e => "IMAGE" === e.type).length > 0 ? 1 : 0), 0)) && void 0 !== _ ? _ : 0;
      let T = null !== (A = e.children?.reduce((e, i) => e + t.get(i.id).numInstanceDescendants + ("INSTANCE" === i.type ? 1 : 0), 0)) && void 0 !== A ? A : 0;
      let k = null !== (y = e.children?.reduce((e, i) => e + t.get(i.id).numRectDescendants + ("RECTANGLE" === i.type ? 1 : 0), 0)) && void 0 !== y ? y : 0;
      let R = null !== (b = e.children?.reduce((e, i) => {
        var n;
        return e + t.get(i.id).numRoundedRectDescendants + ("RECTANGLE" === i.type && (null !== (n = i.cornerRadius) && void 0 !== n ? n : 0) > 0 ? 1 : 0);
      }, 0)) && void 0 !== b ? b : 0;
      let N = null !== (v = e.children?.reduce((e, i) => e + t.get(i.id).numVectorDescendants + ("VECTOR" === i.type ? 1 : 0), 0)) && void 0 !== v ? v : 0;
      let P = t.get(e.id);
      P.numDescendants = I;
      P.numTextDescendants = E;
      P.numEllipseDescendants = x;
      P.numFrameDescendants = S;
      P.numGroupDescendants = w;
      P.numImageDescendants = C;
      P.numInstanceDescendants = T;
      P.numTextDescendants = E;
      P.numRectDescendants = k;
      P.numRoundedRectDescendants = R;
      P.numVectorDescendants = N;
    });
  }
  for (let i of e) {
    let e = t.get(i.id);
    let n = e.numDescendants;
    let a = e.numTextDescendants;
    ul(i, e => {
      let i = t.get(e.id);
      i.TlfNumDescendants = n;
      i.TlfNumTextDescendants = a;
    });
  }
  for (let r of e) {
    let e = t.get(r.id);
    e.numRowsInSelection = n + 1;
    e.numColsInSelection = i + 1;
  }
  return t;
}
function O() {
  return (O = R(function* (e, t, i) {
    let {
      allTlfSummaries,
      tlfCharacterSummaryStrings,
      tlfNameSummaryStrings
    } = function (e) {
      let t = D(e, "characters", k_);
      let i = Array.from(t.values());
      let n = D(e, "name", c);
      let r = Array.from(n.values());
      return {
        allTlfSummaries: i.concat(r),
        tlfCharacterSummaryStrings: t,
        tlfNameSummaryStrings: n
      };
    }(t);
    let m = function (e, t) {
      let i = [];
      e.forEach(e => {
        ul(e, e => {
          t$(e, t) && i.push(e);
        });
      });
      return i.flatMap(e => [Qm(e)]).filter(e => !!e);
    }(t, e);
    let g = yield wU(e.children);
    let f = new kH(Sm());
    let _ = new a$(yy());
    let y = Ax();
    let v = new Map();
    if (i) ({
      textEmbeddingsCache: _,
      textNodesByTLF: y,
      imageEmbeddingsCache: f,
      backEmbeddings: v
    } = yield fq(e, allTlfSummaries.concat(m)));else {
      let i = Ft();
      Fw(e, i, y, t);
    }
    let I = new Map();
    for (let n of t) {
      let t = y.get(n.id);
      if (!t) throw Error("Couldn't find text nodes for TLF " + n.id + n.name);
      yield hb(n, function () {
        var u = R(function* (u) {
          var m;
          var y;
          var b;
          var E;
          var x;
          var S;
          var w;
          var T;
          var k;
          var R;
          var N;
          var P;
          var O;
          var D;
          var F;
          var M;
          var j;
          var U;
          var B;
          var V;
          var G;
          var z;
          let H = l(u);
          let W = function (e, t) {
            let i;
            if (!d.includes(e.type)) return;
            let n = _$$I(e);
            if (!n) return;
            if (!t) throw `Couldnt find text node caches for TLF id ${n.id}`;
            let o = rb(e);
            for (let n of t) {
              if (n === e || $V(n, e)) continue;
              let t = rb(n);
              let a = E$(o, t);
              if (a && a.width * a.height / (t.width * t.height) > .7) {
                if (i) return;
                i = n;
              }
            }
            return i;
          }(u, t);
          let K = yV(u);
          let Y = yV(u, !0);
          let q = Y.length > 0 ? Y.reduce((e, t) => Math.min(e, u.w * u.h / (t.w * t.h + 1e-9)), 1) : null;
          let $ = K.length > 0 ? K.reduce((e, t) => Math.max(e, u.w * u.h / (t.w * t.h + 1e-9)), 0) : null;
          let Z = null !== (S = yield function (e, t, i) {
            return L.apply(this, arguments);
          }(u, f, !i)) && void 0 !== S ? S : null;
          let X = !1;
          v.size > 0 && (X = yield _p(u, e, _, v));
          let Q = c(u.name);
          let J = Q && null !== (w = yield _.get(Q)) && void 0 !== w ? w : null;
          let ee = Object.values(nq);
          let et = Object.values(v$);
          let ei = null !== (T = g.get(u.id)?.filter(e => ee.includes(e.$$class)).map(e => e.similarity)) && void 0 !== T ? T : [];
          let en = null !== (k = g.get(u.id)?.filter(e => et.includes(e.$$class)).map(e => e.similarity)) && void 0 !== k ? k : [];
          let er = null !== (R = g.get(u.id)?.filter(e => !ee.includes(e.$$class) && !et.includes(e.$$class)).map(e => e.similarity)) && void 0 !== R ? R : [];
          let ea = null !== (N = g.get(u.id)?.filter(e => e.$$class === KE).map(e => e.similarity)[0]) && void 0 !== N ? N : 0;
          let es = ei.length > 0 ? Math.max(...ei) : 0;
          let eo = en.length > 0 ? Math.max(...en) : 0;
          let el = er.length > 0 ? Math.max(...er) : 0;
          let ed = {
            backButtonScore: es,
            highestOtherArrowScore: eo,
            highestNonArrowScore: el,
            highestNonBackButtonScore: el,
            emptyImageScore: ea,
            charactersEmbedding: u.characters && null !== (P = yield _.get(u.characters)) && void 0 !== P ? P : null,
            childCharactersEmbedding: H?.characters && null !== (O = yield _.get(H.characters)) && void 0 !== O ? O : null,
            overlappingSiblingTextCharacters: null !== (D = W?.characters) && void 0 !== D ? D : null,
            overlappingSiblingTextCharactersEmbedding: W?.characters && null !== (F = yield _.get(W.characters)) && void 0 !== F ? F : null,
            overlappingSiblingFontSize: null !== (M = W?.fontSize) && void 0 !== M ? M : null,
            overlappingSiblingCharactersLength: null !== (j = W?.characters?.length) && void 0 !== j ? j : null,
            overlappingTextTypePrice: null,
            overlappingTextTypeTime: null,
            overlappingTextTypeNoLetters: null,
            nameEmbedding: J,
            characterSummaryEmbedding: null !== (B = yield _.get(null !== (U = tlfCharacterSummaryStrings.get(n.id)) && void 0 !== U ? U : "")) && void 0 !== B ? B : null,
            nameSummaryEmbedding: null !== (G = yield _.get(null !== (V = tlfNameSummaryStrings.get(n.id)) && void 0 !== V ? V : "")) && void 0 !== G ? G : null,
            imageEmbedding: Z,
            isMaybeBackButton: X,
            hoistedImageAreaRatio: null,
            hoistedImageWidthRatio: null,
            hoistedImageHeightRatio: null,
            hoistedImageFromChildNumLevels: 0,
            hoistedImageFromSibling: !1,
            hoistedImageNumCandidates: 0,
            numVisuallyContainedSiblings: K.length,
            numVisuallyContainingSiblings: Y.length,
            visuallyContainedInRectangle: Y.filter(e => "RECTANGLE" === e.type).length > 0,
            numVisuallyContainedRectangles: K.filter(e => "RECTANGLE" === e.type).length,
            maxAreaRatioVisuallyContainedSiblings: $,
            minAreaRatioVisuallyContainingSiblings: q
          };
          let ec = A(null !== (z = ed.overlappingSiblingTextCharacters) && void 0 !== z ? z : "");
          ed.overlappingTextTypePrice = "price" === ec;
          ed.overlappingTextTypeTime = "time" === ec;
          ed.overlappingTextTypeNoLetters = "no_letters" === ec;
          I.set(u.id, ed);
        });
        return function (e) {
          return u.apply(this, arguments);
        };
      }());
    }
    return I;
  })).apply(this, arguments);
}
function D(e, t, i) {
  let {
    tlfSummaryArrays,
    wordCounter
  } = function (e, t, i) {
    let n = new Map();
    let a = new Map();
    for (let s of e) {
      let e = [];
      for (let o of (yM(s, n => {
        if (n.id === s.id) return;
        let r = n[t];
        if (r) {
          if (r.toLowerCase().startsWith("lorem")) return;
          for (let t of r.split(" ").filter(e => i(e).length > 0).filter(e => /^[a-zA-Z]+$/.test(e)).slice(0, 10)) {
            let n = i(t);
            n.length > 2 && e.push(n);
          }
        }
      }), n.set(s.id, e), new Set(e))) a.has(o) ? a.set(o, a.get(o) + 1) : a.set(o, 1);
    }
    return {
      tlfSummaryArrays: n,
      wordCounter: a
    };
  }(e, t, i);
  return function (e, t) {
    let i = new Map();
    for (let [n, r] of e) {
      for (let e of r) {
        let r = t.get(e);
        void 0 !== r && r <= 2 && (i.has(n) ? i.set(n, i.get(n) + " " + e) : i.set(n, e));
      }
      i.has(n) || i.set(n, "");
    }
    return i;
  }(tlfSummaryArrays, wordCounter);
}
function L() {
  return (L = R(function* (e, t, i) {
    let n;
    let r = (e.fills || []).filter(e => "IMAGE" === e.type);
    let a = r.length > 0 ? r[0] : void 0;
    if (a && "IMAGE" === a.type && a.thumbnailHash) {
      let e = a.thumbnailHash;
      if (!(n = yield t.get(e)) && !i) throw Error("Couldn't find image embedding for key: " + e);
    }
    return n && 0 === n.length ? (console.log("Image embedding was empty for node " + e.id), null) : n;
  })).apply(this, arguments);
}
export const _q = $$P0;
export const TH = $$N1;