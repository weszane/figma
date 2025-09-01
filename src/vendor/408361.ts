export function $$r59(e) {
  return {};
}
let $$i24 = {};
let $$A73 = {};
let $$o52 = {};
let $$s40 = {};
let $$a11 = {};
let $$l41 = {};
let $$u47 = {};
let $$g86 = {};
let $$c1 = {};
let $$f61 = {};
let $$$$d85 = {};
let $$h69 = {};
let $$p44 = {};
let $$$$C35 = {};
let $$I29 = {};
let $$E17 = {};
let B = {};
let $$m3 = {};
let y = {};
let $$_34 = {};
let $$Q49 = {};
let $$D64 = {};
let $$w = {};
let $$b58 = {};
let $$v28 = {};
let $$k87 = {};
let $$x26 = {};
let $$S42 = {};
let $$F27 = {};
let $$N80 = {};
let $$T32 = {};
let $$L56 = {};
let $$R33 = {};
let $$M77 = {};
let O = {};
let $$G82 = {};
let $$P36 = {};
let $$U14 = {};
let $$q31 = {};
let $$J81 = {};
let $$z38 = {};
let $$H20 = {};
let $$K0 = {};
let $$j74 = {};
let $$Y50 = {};
let W = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement;
let V = W && "documentMode" in document ? document.documentMode : null;
let Z = W && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
let $ = W && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
let X = !(!W || !("InputEvent" in window) || V) && "getTargetRanges" in new window.InputEvent("input");
let ee = W && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
let et = W && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
let en = W && /Android/.test(navigator.userAgent);
let er = W && /^(?=.*Chrome).*/i.test(navigator.userAgent);
let ei = W && en && er;
let eA = W && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !er;
let eo = ee || et || eA ? "\xa0" : "\u200B";
let es = $ ? "\xa0" : eo;
let ea = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC";
let el = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-\u02B8\u0300-\u0590\u0800-\u1FFF\u200E\u2C00-\uFB1C\uFE00-\uFE6F\uFEFD-\uFFFF";
let eu = RegExp("^[^" + el + "]*[" + ea + "]");
let eg = RegExp("^[^" + ea + "]*[" + el + "]");
let ec = {
  bold: 1,
  code: 16,
  highlight: 128,
  italic: 2,
  strikethrough: 4,
  subscript: 32,
  superscript: 64,
  underline: 8
};
let ef = {
  directionless: 1,
  unmergeable: 2
};
let ed = {
  center: 2,
  end: 6,
  justify: 4,
  left: 1,
  right: 3,
  start: 5
};
let eh = {
  2: "center",
  6: "end",
  4: "justify",
  1: "left",
  3: "right",
  5: "start"
};
let ep = {
  normal: 0,
  segmented: 2,
  token: 1
};
let eC = {
  0: "normal",
  2: "segmented",
  1: "token"
};
var eI = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let t = new URLSearchParams();
  t.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) t.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
function eE(...e) {
  let t = [];
  for (let n of e) if (n && "string" == typeof n) for (let [e] of n.matchAll(/\S+/g)) t.push(e);
  return t;
}
let eB = !1;
let em = 0;
function ey(e) {
  em = e.timeStamp;
}
function e_(e, t, n) {
  return t.__lexicalLineBreak === e || void 0 !== e[`__lexicalKey_${n._key}`];
}
function eQ(e, t, n) {
  eB = !0;
  let r = performance.now() - em > 100;
  try {
    rG(e, () => {
      let i = $$ra84() || e.getEditorState().read(() => {
        let e = $$ra84();
        return null !== e ? e.clone() : null;
      });
      let A = new Map();
      let o = e.getRootElement();
      let s = e._editorState;
      let a = e._blockCursorElement;
      let l = !1;
      let u = "";
      for (let n = 0; n < t.length; n++) {
        let g = t[n];
        let c = g.type;
        let f = g.target;
        let d = $$eW89(f, s);
        if (!(null === d && f !== o || $$rz9(d))) {
          if ("characterData" === c) r && $$nK67(d) && function (e, t, n) {
            if ($$n815(e)) {
              let t = e.anchor.getNode();
              if (t.is(n) && e.format !== t.getFormat()) return !1;
            }
            return 3 === t.nodeType && n.isAttached();
          }(i, f, d) && function (e, t, n) {
            let r = tm(n._window);
            let i = null;
            let A = null;
            null !== r && r.anchorNode === e && (i = r.anchorOffset, A = r.focusOffset);
            let o = e.nodeValue;
            null !== o && e4(t, o, i, A, !1);
          }(f, d, e);else if ("childList" === c) {
            l = !0;
            let t = g.addedNodes;
            for (let n = 0; n < t.length; n++) {
              let r = t[n];
              let i = eY(r);
              let A = r.parentNode;
              if (null != A && r !== a && null === i && ("BR" !== r.nodeName || !e_(r, A, e))) {
                if ($) {
                  let e = r.innerText || r.nodeValue;
                  e && (u += e);
                }
                A.removeChild(r);
              }
            }
            let n = g.removedNodes;
            let r = n.length;
            if (r > 0) {
              let t = 0;
              for (let i = 0; i < r; i++) {
                let r = n[i];
                ("BR" === r.nodeName && e_(r, f, e) || a === r) && (f.appendChild(r), t++);
              }
              r !== t && (f === o && (d = eX(s)), A.set(f, d));
            }
          }
        }
      }
      if (A.size > 0) for (let [t, n] of A) if ($$rU57(n)) {
        let r = n.getChildrenKeys();
        let i = t.firstChild;
        for (let n = 0; n < r.length; n++) {
          let A = r[n];
          let o = e.getElementByKey(A);
          null !== o && (null == i ? (t.appendChild(o), i = o) : i !== o && t.replaceChild(o, i), i = i.nextSibling);
        }
      } else $$nK67(n) && n.markDirty();
      let g = n.takeRecords();
      if (g.length > 0) {
        for (let t = 0; t < g.length; t++) {
          let n = g[t];
          let r = n.addedNodes;
          let i = n.target;
          for (let t = 0; t < r.length; t++) {
            let n = r[t];
            let A = n.parentNode;
            A?.removeChild(n);
          }
        }
        n.takeRecords();
      }
      null !== i && (l && (i.dirty = !0, $$e070(i)), $ && tu(e) && i.insertRawText(u));
    });
  } finally {
    eB = !1;
  }
}
function eD(e) {
  let t = e._observer;
  null !== t && eQ(e, t.takeRecords(), t);
}
function ew(e) {
  0 === em && th(e).addEventListener("textInput", ey, !0);
  e._observer = new MutationObserver((t, n) => {
    eQ(e, t, n);
  });
}
function eb(e, t) {
  let n = e.__mode;
  let r = e.__format;
  let i = e.__style;
  let A = t.__mode;
  let o = t.__format;
  let s = t.__style;
  return !(null !== n && n !== A || null !== r && r !== o || null !== i && i !== s);
}
function $$ev(e, t) {
  let n = e.mergeWithSibling(t);
  let r = rw()._normalizedNodes;
  r.add(e.__key);
  r.add(t.__key);
  return n;
}
function ek(e) {
  let t;
  let n;
  let r = e;
  if ("" !== r.__text || !r.isSimpleText() || r.isUnmergeable()) {
    for (; null !== (t = r.getPreviousSibling()) && $$nK67(t) && t.isSimpleText() && !t.isUnmergeable();) {
      if ("" !== t.__text) {
        eb(t, r) && (r = $$ev(t, r));
        break;
      }
      t.remove();
    }
    for (; null !== (n = r.getNextSibling()) && $$nK67(n) && n.isSimpleText() && !n.isUnmergeable();) {
      if ("" !== n.__text) {
        eb(r, n) && (r = $$ev(r, n));
        break;
      }
      n.remove();
    }
  } else r.remove();
}
export function $$ex7(e) {
  eS(e.anchor);
  eS(e.focus);
  return e;
}
function eS(e) {
  for (; "element" === e.type;) {
    let t;
    let n;
    let r = e.getNode();
    let i = e.offset;
    if (i === r.getChildrenSize() ? (t = r.getChildAtIndex(i - 1), n = !0) : (t = r.getChildAtIndex(i), n = !1), $$nK67(t)) {
      e.set(t.__key, n ? t.getTextContentSize() : 0, "text");
      break;
    }
    if (!$$rU57(t)) break;
    e.set(t.__key, n ? t.getChildrenSize() : 0, "element");
  }
}
let eF = 1;
let eN = "function" == typeof queueMicrotask ? queueMicrotask : e => {
  Promise.resolve().then(e);
};
export function $$eT43(e) {
  let t = document.activeElement;
  if (null === t) return !1;
  let n = t.nodeName;
  return $$rz9($$eW89(e)) && ("INPUT" === n || "TEXTAREA" === n || "true" === t.contentEditable && null == eO(t));
}
export function $$eL22(e, t, n) {
  let r = e.getRootElement();
  try {
    return null !== r && r.contains(t) && r.contains(n) && null !== t && !$$eT43(t) && eM(t) === e;
  } catch (e) {
    return !1;
  }
}
function eR(e) {
  return e instanceof r9;
}
function eM(e) {
  let t = e;
  for (; null != t;) {
    let e = eO(t);
    if (eR(e)) return e;
    t = tf(t);
  }
  return null;
}
function eO(e) {
  return e ? e.__lexicalEditor : null;
}
function eG(e) {
  return e.isToken() || e.isSegmented();
}
function eP(e) {
  let t = e;
  for (; null != t;) {
    if (3 === t.nodeType) return t;
    t = t.firstChild;
  }
  return null;
}
function eU(e, t, n) {
  let r = ec[t];
  if (null !== n && (e & r) == (n & r)) return e;
  let i = e ^ r;
  "subscript" === t ? i &= ~ec.superscript : "superscript" === t && (i &= ~ec.subscript);
  return i;
}
export function $$eq65(e) {
  return $$nK67(e) || $$nk88(e) || $$rz9(e);
}
function eJ(e) {
  let t = e.getParent();
  if (null !== t) {
    let n = e.getWritable();
    let r = t.getWritable();
    let i = e.getPreviousSibling();
    let A = e.getNextSibling();
    if (null === i) {
      if (null !== A) {
        let e = A.getWritable();
        r.__first = A.__key;
        e.__prev = null;
      } else r.__first = null;
    } else {
      let e = i.getWritable();
      if (null !== A) {
        let t = A.getWritable();
        t.__prev = e.__key;
        e.__next = t.__key;
      } else e.__next = null;
      n.__prev = null;
    }
    if (null === A) {
      if (null !== i) {
        let e = i.getWritable();
        r.__last = i.__key;
        e.__next = null;
      } else r.__last = null;
    } else {
      let e = A.getWritable();
      if (null !== i) {
        let t = i.getWritable();
        t.__next = e.__key;
        e.__prev = t.__key;
      } else e.__prev = null;
      n.__next = null;
    }
    r.__size--;
    n.__parent = null;
  }
}
function ez(e) {
  rQ();
  let t = e.getLatest();
  let n = t.__parent;
  let r = rD();
  let i = rw();
  let A = r._nodeMap;
  let o = i._dirtyElements;
  null !== n && function (e, t, n) {
    let r = e;
    for (; null !== r;) {
      if (n.has(r)) return;
      let e = t.get(r);
      if (void 0 === e) break;
      n.set(r, !1);
      r = e.__parent;
    }
  }(n, A, o);
  let s = t.__key;
  i._dirtyType = 1;
  $$rU57(e) ? o.set(s, !0) : i._dirtyLeaves.add(s);
}
function eH(e) {
  r_();
  let t = rw();
  let n = t._compositionKey;
  if (e !== n) {
    if (t._compositionKey = e, null !== n) {
      let e = $$ej72(n);
      null !== e && e.getWritable();
    }
    if (null !== e) {
      let t = $$ej72(e);
      null !== t && t.getWritable();
    }
  }
}
function eK() {
  return ry() ? null : rw()._compositionKey;
}
export function $$ej72(e, t) {
  let n = (t || rD())._nodeMap.get(e);
  return void 0 === n ? null : n;
}
function eY(e, t) {
  let n = e[`__lexicalKey_${rw()._key}`];
  return void 0 !== n ? $$ej72(n, t) : null;
}
export function $$eW89(e, t) {
  let n = e;
  for (; null != n;) {
    let e = eY(n, t);
    if (null !== e) return e;
    n = tf(n);
  }
  return null;
}
function eV(e) {
  let t = Object.assign({}, e._decorators);
  e._pendingDecorators = t;
  return t;
}
function eZ(e) {
  return e.read(() => $$e$25().getTextContent());
}
export function $$e$25() {
  return eX(rD());
}
function eX(e) {
  return e._nodeMap.get("root");
}
export function $$e070(e) {
  r_();
  let t = rD();
  null !== e && (e.dirty = !0, e.setCachedNodes(null));
  t._selection = e;
}
function $$e1(e) {
  let t = rw();
  let n = function (e, t) {
    let n = e;
    for (; null != n;) {
      let e = n[`__lexicalKey_${t._key}`];
      if (void 0 !== e) return e;
      n = tf(n);
    }
    return null;
  }(e, t);
  return null === n ? e === t.getRootElement() ? $$ej72("root") : null : $$ej72(n);
}
function e2(e, t) {
  return t ? e.getTextContentSize() : 0;
}
function e8(e) {
  return /[\uD800-\uDBFF][\uDC00-\uDFFF]/g.test(e);
}
function e6(e) {
  let t = [];
  let n = e;
  for (; null !== n;) {
    t.push(n);
    n = n._parentEditor;
  }
  return t;
}
function e3() {
  return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);
}
function e5(e) {
  return 3 === e.nodeType ? e.nodeValue : null;
}
function e9(e, t, n) {
  let r = tm(t._window);
  if (null === r) return;
  let i = r.anchorNode;
  let {
    anchorOffset,
    focusOffset
  } = r;
  if (null !== i) {
    let t = e5(i);
    let r = $$eW89(i);
    if (null !== t && $$nK67(r)) {
      if (t === eo && n) {
        let e = n.length;
        t = n;
        A = e;
        o = e;
      }
      null !== t && e4(r, t, anchorOffset, focusOffset, e);
    }
  }
}
function e4(e, t, n, r, i) {
  let A = e;
  if (A.isAttached() && (i || !A.isDirty())) {
    let o = A.isComposing();
    let s = t;
    (o || i) && t[t.length - 1] === eo && (s = t.slice(0, -1));
    let a = A.getTextContent();
    if (i || s !== a) {
      if ("" === s) {
        if (eH(null), ee || et || eA) A.remove();else {
          let e = rw();
          setTimeout(() => {
            e.update(() => {
              A.isAttached() && A.remove();
            });
          }, 20);
        }
        return;
      }
      let t = A.getParent();
      let i = rl();
      let a = A.getTextContentSize();
      let l = eK();
      let u = A.getKey();
      if (A.isToken() || null !== l && u === l && !o || $$n815(i) && (null !== t && !t.canInsertTextBefore() && 0 === i.anchor.offset || i.anchor.key === e.__key && 0 === i.anchor.offset && !A.canInsertTextBefore() && !o || i.focus.key === e.__key && i.focus.offset === a && !A.canInsertTextAfter() && !o)) return void A.markDirty();
      let g = $$ra84();
      if (!$$n815(g) || null === n || null === r) return void A.setTextContent(s);
      if (g.setTextNodeRange(A, n, A, r), A.isSegmented()) {
        let e = $$nH78(A.getTextContent());
        A.replace(e);
        A = e;
      }
      A.setTextContent(s);
    }
  }
}
function e7(e) {
  return "ArrowLeft" === e;
}
function te(e) {
  return "ArrowRight" === e;
}
function tt(e) {
  return "Backspace" === e;
}
function tn(e) {
  return "Delete" === e;
}
function tr(e, t, n) {
  return "a" === e.toLowerCase() && (Z ? t : n);
}
export function $$ti53() {
  let e = $$e$25();
  $$e070($$ex7(e.select(0, e.getChildrenSize())));
}
function tA(e, t) {
  void 0 === e.__lexicalClassNameCache && (e.__lexicalClassNameCache = {});
  let n = e.__lexicalClassNameCache;
  let r = n[t];
  if (void 0 !== r) return r;
  let i = e[t];
  if ("string" == typeof i) {
    let e = eE(i);
    n[t] = e;
    return e;
  }
  return i;
}
function to(e, t, n, r, i) {
  if (0 === n.size) return;
  let A = r.__type;
  let o = r.__key;
  let s = t.get(A);
  void 0 === s && eI(33, A);
  let a = s.klass;
  let l = e.get(a);
  void 0 === l && (l = new Map(), e.set(a, l));
  let u = l.get(o);
  let g = "destroyed" === u && "created" === i;
  (void 0 === u || g) && l.set(o, g ? "updated" : i);
}
export function $$ts91(e) {
  let t = e.getType();
  let n = rD();
  if (n._readOnly) {
    let e = tF(n).get(t);
    return e ? Array.from(e.values()) : [];
  }
  let r = n._nodeMap;
  let i = [];
  for (let [, n] of r) n instanceof e && n.__type === t && n.isAttached() && i.push(n);
  return i;
}
function ta(e, t, n) {
  let r = e.getParent();
  let i = n;
  let A = e;
  null !== r && (t && 0 === n ? (i = A.getIndexWithinParent(), A = r) : t || n !== A.getChildrenSize() || (i = A.getIndexWithinParent() + 1, A = r));
  return A.getChildAtIndex(t ? i - 1 : i);
}
export function $$tl5(e, t) {
  let n = e.offset;
  if ("element" === e.type) return ta(e.getNode(), t, n);
  {
    let r = e.getNode();
    if (t && 0 === n || !t && n === r.getTextContentSize()) {
      let e = t ? r.getPreviousSibling() : r.getNextSibling();
      return e;
    }
  }
  return null;
}
function tu(e) {
  let t = th(e).event;
  let n = t && t.inputType;
  return "insertFromPaste" === n || "insertFromPasteAsQuotation" === n;
}
function tg(e) {
  return !$$rK60(e) && !e.isLastChild() && !e.isInline();
}
function tc(e, t) {
  let n = e._keyToDOMMap.get(t);
  void 0 === n && eI(75, t);
  return n;
}
function tf(e) {
  let t = e.assignedSlot || e.parentElement;
  return null !== t && 11 === t.nodeType ? t.host : t;
}
function td(e, t) {
  let n = e.getParent();
  for (; null !== n;) {
    if (n.is(t)) return !0;
    n = n.getParent();
  }
  return !1;
}
function th(e) {
  let t = e._window;
  null === t && eI(78);
  return t;
}
export function $$tp16(e) {
  return $$rK60(e) || $$rU57(e) && e.isShadowRoot();
}
export function $$tC75(e) {
  let t = rw();
  let n = e.constructor.getType();
  let r = t._nodes.get(n);
  void 0 === r && eI(200, e.constructor.name, n);
  let {
    replace,
    replaceWithKlass
  } = r;
  if (null !== replace) {
    let t = replace(e);
    let r = t.constructor;
    null !== replaceWithKlass ? t instanceof replaceWithKlass || eI(201, replaceWithKlass.name, replaceWithKlass.getType(), r.name, r.getType(), e.constructor.name, n) : t instanceof e.constructor && r !== e.constructor || eI(202, r.name, r.getType(), e.constructor.name, n);
    t.__key === e.__key && eI(203, e.constructor.name, n, r.name, r.getType());
    return t;
  }
  return e;
}
function tI(e, t) {
  !$$rK60(e.getParent()) || $$rU57(t) || $$rz9(t) || eI(99);
}
function tE(e) {
  return ($$rz9(e) || $$rU57(e) && !e.canBeEmpty()) && !e.isInline();
}
function tB(e, t, n) {
  n.style.removeProperty("caret-color");
  t._blockCursorElement = null;
  let r = e.parentElement;
  null !== r && r.removeChild(e);
}
function tm(e) {
  return W ? (e || window).getSelection() : null;
}
export function $$ty71(e) {
  return $$t_79(e) && "A" === e.tagName;
}
export function $$t_79(e) {
  return 1 === e.nodeType;
}
export function $$tQ19(e) {
  return 11 === e.nodeType;
}
export function $$tD45(e) {
  let t = RegExp(/^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var|#text)$/, "i");
  return null !== e.nodeName.match(t);
}
export function $$tw46(e) {
  let t = RegExp(/^(address|article|aside|blockquote|canvas|dd|div|dl|dt|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hr|li|main|nav|noscript|ol|p|pre|section|table|td|tfoot|ul|video)$/, "i");
  return null !== e.nodeName.match(t);
}
function tb(e) {
  if ($$rz9(e) && !e.isInline()) return !0;
  if (!$$rU57(e) || $$tp16(e)) return !1;
  let t = e.getFirstChild();
  let n = t?.isInline();
  return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
function tv(e, t) {
  let n = e;
  for (; null !== n && null !== n.getParent() && !t(n);) n = n.getParentOrThrow();
  return t(n) ? n : null;
}
export function $$tk62() {
  return rw();
}
let tx = new WeakMap();
let tS = new Map();
function tF(e) {
  if (!e._readOnly && e.isEmpty()) return tS;
  e._readOnly || eI(192);
  let t = tx.get(e);
  if (!t) for (let [n, r] of (t = new Map(), tx.set(e, t), e._nodeMap)) {
    let e = r.__type;
    let i = t.get(e);
    i || (i = new Map(), t.set(e, i));
    i.set(n, r);
  }
  return t;
}
export function $$tN6(e) {
  let t = e.constructor.clone(e);
  t.afterCloneFrom(e);
  return t;
}
let tT;
let tL;
let tR;
let tM;
let tO;
let tG;
let tP;
let tU;
let tq;
let tJ;
let tz = "";
let tH = "";
let tK = null;
let tj = "";
let tY = "";
let tW = !1;
let tV = !1;
let tZ = null;
function t$(e, t) {
  let n = tP.get(e);
  if (null !== t) {
    let n = nt(e);
    n.parentNode === t && t.removeChild(n);
  }
  if (tU.has(e) || tL._keyToDOMMap.$$delete(e), $$rU57(n)) {
    let e = t4(n, tP);
    tX(e, 0, e.length - 1, null);
  }
  void 0 !== n && to(tJ, tR, tM, n, "destroyed");
}
function tX(e, t, n, r) {
  let i = t;
  for (; i <= n; ++i) {
    let t = e[i];
    void 0 !== t && t$(t, r);
  }
}
function t0(e, t) {
  e.setProperty("text-align", t);
}
function t1(e, t) {
  let n = tT.theme.indent;
  if ("string" == typeof n) {
    let r = e.classList.contains(n);
    t > 0 && !r ? e.classList.add(n) : t < 1 && r && e.classList.remove(n);
  }
  let r = getComputedStyle(e).getPropertyValue("--lexical-indent-base-value") || "40px";
  e.style.setProperty("padding-inline-start", 0 === t ? "" : `calc(${t} * ${r})`);
}
function t2(e, t) {
  let n = e.style;
  0 === t ? t0(n, "") : 1 === t ? t0(n, "left") : 2 === t ? t0(n, "center") : 3 === t ? t0(n, "right") : 4 === t ? t0(n, "justify") : 5 === t ? t0(n, "start") : 6 === t && t0(n, "end");
}
function t8(e, t, n) {
  let r = tU.get(e);
  void 0 === r && eI(60);
  let i = r.createDOM(tT, tL);
  if (function (e, t, n) {
    let r = n._keyToDOMMap;
    t["__lexicalKey_" + n._key] = e;
    r.set(e, t);
  }(e, i, tL), $$nK67(r) ? i.setAttribute("data-lexical-text", "true") : $$rz9(r) && i.setAttribute("data-lexical-decorator", "true"), $$rU57(r)) {
    let e = r.__indent;
    let t = r.__size;
    0 !== e && t1(i, e);
    0 !== t && function (e, t, n, r) {
      let i = tH;
      tH = "";
      t6(e, n, 0, t, r, null);
      t9(n, r);
      tH = i;
    }(t4(r, tU), t - 1, r, i);
    let n = r.__format;
    0 !== n && t2(i, n);
    r.isInline() || $$t5(null, r, i);
    tg(r) && (tz += "\n\n", tY += "\n\n");
  } else {
    let t = r.getTextContent();
    if ($$rz9(r)) {
      let t = r.decorate(tL, tT);
      null !== t && t7(e, t);
      i.contentEditable = "false";
    } else $$nK67(r) && (r.isDirectionless() || (tH += t));
    tz += t;
    tY += t;
  }
  if (null !== t) {
    if (null != n) t.insertBefore(i, n);else {
      let e = t.__lexicalLineBreak;
      null != e ? t.insertBefore(i, e) : t.appendChild(i);
    }
  }
  to(tJ, tR, tM, r, "created");
  return i;
}
function t6(e, t, n, r, i, A) {
  let o = tz;
  tz = "";
  let s = n;
  for (; s <= r; ++s) {
    t8(e[s], i, A);
    let t = tU.get(e[s]);
    null !== t && $$nK67(t) && (null === tK && (tK = t.getFormat()), "" === tj && (tj = t.getStyle()));
  }
  tg(t) && (tz += "\n\n");
  i.__lexicalTextContent = tz;
  tz = o + tz;
}
function t3(e, t) {
  let n = t.get(e);
  return $$nk88(n) || $$rz9(n) && n.isInline();
}
function $$t5(e, t, n) {
  let r = null !== e && (0 === e.__size || t3(e.__last, tP));
  let i = 0 === t.__size || t3(t.__last, tU);
  if (r) {
    if (!i) {
      let e = n.__lexicalLineBreak;
      if (null != e) try {
        n.removeChild(e);
      } catch (t) {
        if ("object" == typeof t && null != t) throw Error(`${t.toString()} Parent: ${n.tagName}, child: ${e.tagName}.`);
        throw t;
      }
      n.__lexicalLineBreak = null;
    }
  } else if (i) {
    let e = document.createElement("br");
    n.__lexicalLineBreak = e;
    n.appendChild(e);
  }
}
function t9(e, t) {
  var n;
  let r = t.__lexicalDirTextContent;
  let i = t.__lexicalDir;
  if (r !== tH || i !== tZ) {
    let r = "" === tH;
    let A = r ? tZ : (n = tH, eu.test(n) ? "rtl" : eg.test(n) ? "ltr" : null);
    if (A !== i) {
      let n = t.classList;
      let o = tT.theme;
      let s = null !== i ? o[i] : void 0;
      let a = null !== A ? o[A] : void 0;
      if (void 0 !== s) {
        if ("string" == typeof s) {
          let e = eE(s);
          s = o[i] = e;
        }
        n.remove(...s);
      }
      if (null === A || r && "ltr" === A) t.removeAttribute("dir");else {
        if (void 0 !== a) {
          if ("string" == typeof a) {
            let e = eE(a);
            a = o[A] = e;
          }
          void 0 !== a && n.add(...a);
        }
        t.dir = A;
      }
      tV || (e.getWritable().__dir = A);
    }
    tZ = A;
    t.__lexicalDirTextContent = tH;
    t.__lexicalDir = A;
  }
}
function t4(e, t) {
  let n = [];
  let r = e.__first;
  for (; null !== r;) {
    let e = t.get(r);
    void 0 === e && eI(101);
    n.push(r);
    r = e.__next;
  }
  return n;
}
function t7(e, t) {
  let n = tL._pendingDecorators;
  let r = tL._decorators;
  if (null === n) {
    if (r[e] === t) return;
    n = eV(tL);
  }
  n[e] = t;
}
function ne(e) {
  let t = e.nextSibling;
  null !== t && t === tL._blockCursorElement && (t = t.nextSibling);
  return t;
}
function nt(e) {
  let t = tq.get(e);
  void 0 === t && eI(75, e);
  return t;
}
let nn = Object.freeze({});
let nr = [["keydown", function (e, t) {
  if (ni = e.timeStamp, nA = e.key, t.isComposing()) return;
  let {
    key,
    shiftKey,
    ctrlKey,
    metaKey,
    altKey
  } = e;
  !rR(t, $$I29, e) && null != key && (!te(key) || ctrlKey || metaKey || altKey ? te(key) && !altKey && !shiftKey && (ctrlKey || metaKey) ? rR(t, B, e) : !e7(key) || ctrlKey || metaKey || altKey ? e7(key) && !altKey && !shiftKey && (ctrlKey || metaKey) ? rR(t, y, e) : "ArrowUp" !== key || ctrlKey || metaKey ? "ArrowDown" !== key || ctrlKey || metaKey ? "Enter" === key && shiftKey ? (ng = !0, rR(t, $$D64, e)) : " " === key ? rR(t, $$w, e) : Z && ctrlKey && "o" === key.toLowerCase() ? (e.preventDefault(), ng = !0, rR(t, $$a11, !0)) : "Enter" !== key || shiftKey ? (Z ? !altKey && !metaKey && (tt(key) || "h" === key.toLowerCase() && ctrlKey) : !(ctrlKey || altKey || metaKey) && tt(key)) ? tt(key) ? rR(t, $$b58, e) : (e.preventDefault(), rR(t, $$s40, !0)) : "Escape" === key ? rR(t, $$v28, e) : (Z ? !(shiftKey || altKey || metaKey) && (tn(key) || "d" === key.toLowerCase() && ctrlKey) : !(ctrlKey || altKey || metaKey) && tn(key)) ? tn(key) ? rR(t, $$k87, e) : (e.preventDefault(), rR(t, $$s40, !1)) : tt(key) && (Z ? altKey : ctrlKey) ? (e.preventDefault(), rR(t, $$f61, !0)) : tn(key) && (Z ? altKey : ctrlKey) ? (e.preventDefault(), rR(t, $$f61, !1)) : Z && metaKey && tt(key) ? (e.preventDefault(), rR(t, $$$$d85, !0)) : Z && metaKey && tn(key) ? (e.preventDefault(), rR(t, $$$$d85, !1)) : "b" === key.toLowerCase() && !altKey && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$h69, "bold")) : "u" === key.toLowerCase() && !altKey && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$h69, "underline")) : "i" === key.toLowerCase() && !altKey && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$h69, "italic")) : "Tab" !== key || altKey || ctrlKey || metaKey ? "z" === key.toLowerCase() && !shiftKey && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$p44, void 0)) : (Z ? "z" === key.toLowerCase() && metaKey && shiftKey : "y" === key.toLowerCase() && ctrlKey || "z" === key.toLowerCase() && ctrlKey && shiftKey) ? (e.preventDefault(), rR(t, $$$$C35, void 0)) : $$n330(t._editorState._selection) ? !shiftKey && "c" === key.toLowerCase() && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$G82, e)) : !shiftKey && "x" === key.toLowerCase() && (Z ? metaKey : ctrlKey) ? (e.preventDefault(), rR(t, $$P36, e)) : tr(key, metaKey, ctrlKey) && (e.preventDefault(), rR(t, $$U14, e)) : !$ && tr(key, metaKey, ctrlKey) && (e.preventDefault(), rR(t, $$U14, e)) : rR(t, $$x26, e) : (ng = !1, rR(t, $$D64, e)) : rR(t, $$Q49, e) : rR(t, $$_34, e) : rR(t, $$m3, e) : rR(t, $$E17, e), (ctrlKey || shiftKey || altKey || metaKey) && rR(t, $$Y50, e));
}], ["pointerdown", function (e, t) {
  let n = e.target;
  let r = e.pointerType;
  n instanceof Node && "touch" !== r && rG(t, () => {
    $$rz9($$eW89(n)) || (nu = !0);
  });
}], ["compositionstart", function (e, t) {
  rG(t, () => {
    let n = $$ra84();
    if ($$n815(n) && !t.isComposing()) {
      let r = n.anchor;
      let i = n.anchor.getNode();
      eH(r.key);
      (e.timeStamp < ni + 30 || "element" === r.type || !n.isCollapsed() || i.getFormat() !== n.format || $$nK67(i) && i.getStyle() !== n.style) && rR(t, $$u47, es);
    }
  });
}], ["compositionend", function (e, t) {
  $ ? nc = !0 : rG(t, () => {
    nI(t, e.data);
  });
}], ["input", function (e, t) {
  e.stopPropagation();
  rG(t, () => {
    let n = $$ra84();
    let r = e.data;
    let i = nC(e);
    if (null != r && $$n815(n) && nd(n, i, r, e.timeStamp, !1)) {
      nc && (nI(t, r), nc = !1);
      let i = n.anchor.getNode();
      let A = tm(t._window);
      if (null === A) return;
      let o = n.isBackward();
      let s = o ? n.anchor.offset : n.focus.offset;
      let a = o ? n.focus.offset : n.anchor.offset;
      X && !n.isCollapsed() && $$nK67(i) && null !== A.anchorNode && i.getTextContent().slice(0, s) + r + i.getTextContent().slice(s + a) === e5(A.anchorNode) || rR(t, $$u47, r);
      let l = r.length;
      $ && l > 1 && "insertCompositionText" === e.inputType && !t.isComposing() && (n.anchor.offset -= l);
      ee || et || eA || !t.isComposing() || (ni = 0, eH(null));
    } else {
      e9(!1, t, null !== r ? r : void 0);
      nc && (nI(t, r || void 0), nc = !1);
    }
    r_();
    eD(rw());
  });
  $$ns = null;
}], ["click", function (e, t) {
  rG(t, () => {
    let n = $$ra84();
    let r = tm(t._window);
    let i = rl();
    if (r) {
      if ($$n815(n)) {
        let t = n.anchor;
        let A = t.getNode();
        "element" === t.type && 0 === t.offset && n.isCollapsed() && !$$rK60(A) && 1 === $$e$25().getChildrenSize() && A.getTopLevelElementOrThrow().isEmpty() && null !== i && n.is(i) ? (r.removeAllRanges(), n.dirty = !0) : 3 !== e.detail || n.isCollapsed() || A === n.focus.getNode() || ($$rU57(A) ? A.select(0) : A.getParentOrThrow().select(0));
      } else if ("touch" === e.pointerType) {
        let n = r.anchorNode;
        if (null !== n) {
          let A = n.nodeType;
          (1 === A || 3 === A) && $$e070(rs(i, r, t, e));
        }
      }
    }
    rR(t, $$o52, e);
  });
}], ["cut", nn], ["copy", nn], ["dragstart", nn], ["dragover", nn], ["dragend", nn], ["paste", nn], ["focus", nn], ["blur", nn], ["drop", nn]];
X && nr.push(["beforeinput", (e, t) => function (e, t) {
  let n = e.inputType;
  let r = nC(e);
  "deleteCompositionText" === n || $ && tu(t) || "insertCompositionText" === n || rG(t, () => {
    var i;
    let A = $$ra84();
    if ("deleteContentBackward" === n) {
      if (null === A) {
        let e = rl();
        if (!$$n815(e)) return;
        $$e070(e.clone());
      }
      if ($$n815(A)) {
        let n = A.anchor.key === A.focus.key;
        if (i = e.timeStamp, "MediaLast" === nA && i < ni + 30 && t.isComposing() && n) {
          if (eH(null), ni = 0, setTimeout(() => {
            rG(t, () => {
              eH(null);
            });
          }, 30), $$n815(A)) {
            let e = A.anchor.getNode();
            e.markDirty();
            A.format = e.getFormat();
            $$nK67(e) || eI(142);
            A.style = e.getStyle();
          }
        } else {
          eH(null);
          e.preventDefault();
          let r = A.anchor.getNode().getTextContent();
          let i = 0 === A.anchor.offset && A.focus.offset === r.length;
          ei && n && !i || rR(t, $$s40, !0);
        }
        return;
      }
    }
    if (!$$n815(A)) return;
    let o = e.data;
    null !== $$ns && e9(!1, t, $$ns);
    A.dirty && null === $$ns || !A.isCollapsed() || $$rK60(A.anchor.getNode()) || null === r || A.applyDOMRange(r);
    $$ns = null;
    let I = A.anchor;
    let E = A.focus;
    let B = I.getNode();
    let m = E.getNode();
    if ("insertText" !== n && "insertTranspose" !== n) switch (e.preventDefault(), n) {
      case "insertFromYank":
      case "insertFromDrop":
      case "insertReplacementText":
        rR(t, $$u47, e);
        break;
      case "insertFromComposition":
        eH(null);
        rR(t, $$u47, e);
        break;
      case "insertLineBreak":
        eH(null);
        rR(t, $$a11, !1);
        break;
      case "insertParagraph":
        eH(null);
        ng && !et ? (ng = !1, rR(t, $$a11, !1)) : rR(t, $$l41, void 0);
        break;
      case "insertFromPaste":
      case "insertFromPasteAsQuotation":
        rR(t, $$g86, e);
        break;
      case "deleteByComposition":
        (B !== m || $$rU57(B) || $$rU57(m) || !B.isToken() || !m.isToken()) && rR(t, $$c1, e);
        break;
      case "deleteByDrag":
      case "deleteByCut":
        rR(t, $$c1, e);
        break;
      case "deleteContent":
        rR(t, $$s40, !1);
        break;
      case "deleteWordBackward":
        rR(t, $$f61, !0);
        break;
      case "deleteWordForward":
        rR(t, $$f61, !1);
        break;
      case "deleteHardLineBackward":
      case "deleteSoftLineBackward":
        rR(t, $$$$d85, !0);
        break;
      case "deleteContentForward":
      case "deleteHardLineForward":
      case "deleteSoftLineForward":
        rR(t, $$$$d85, !1);
        break;
      case "formatStrikeThrough":
        rR(t, $$h69, "strikethrough");
        break;
      case "formatBold":
        rR(t, $$h69, "bold");
        break;
      case "formatItalic":
        rR(t, $$h69, "italic");
        break;
      case "formatUnderline":
        rR(t, $$h69, "underline");
        break;
      case "historyUndo":
        rR(t, $$p44, void 0);
        break;
      case "historyRedo":
        rR(t, $$$$C35, void 0);
    } else {
      if ("\n" === o) {
        e.preventDefault();
        rR(t, $$a11, !1);
      } else if ("\n\n" === o) {
        e.preventDefault();
        rR(t, $$l41, void 0);
      } else if (null == o && e.dataTransfer) {
        let t = e.dataTransfer.getData("text/plain");
        e.preventDefault();
        A.insertRawText(t);
      } else null != o && nd(A, r, o, e.timeStamp, !0) ? (e.preventDefault(), rR(t, $$u47, o)) : $$ns = o;
      no = e.timeStamp;
    }
  });
}(e, t)]);
let ni = 0;
let nA = null;
let no = 0;
let $$ns = null;
let na = new WeakMap();
let nl = !1;
let nu = !1;
let ng = !1;
let nc = !1;
let nf = [0, "", 0, "root", 0];
function nd(e, t, n, r, i) {
  let A = e.anchor;
  let o = e.focus;
  let s = A.getNode();
  let a = rw();
  let l = tm(a._window);
  let u = null !== l ? l.anchorNode : null;
  let g = A.key;
  let c = a.getElementByKey(g);
  let f = n.length;
  return g !== o.key || !$$nK67(s) || (!i && (!X || no < r + 50) || s.isDirty() && f < 2 || e8(n)) && A.offset !== o.offset && !s.isComposing() || eG(s) || s.isDirty() && f > 1 || (i || !X) && null !== c && !s.isComposing() && u !== eP(c) || null !== l && null !== t && (!t.collapsed || t.startContainer !== l.anchorNode || t.startOffset !== l.anchorOffset) || s.getFormat() !== e.format || s.getStyle() !== e.style || function (e, t) {
    if (t.isSegmented()) return !0;
    if (!e.isCollapsed()) return !1;
    let n = e.anchor.offset;
    let r = t.getParentOrThrow();
    let i = t.isToken();
    return 0 === n ? !t.canInsertTextBefore() || !r.canInsertTextBefore() && !t.isComposing() || i || function (e) {
      let t = e.getPreviousSibling();
      return ($$nK67(t) || $$rU57(t) && t.isInline()) && !t.canInsertTextAfter();
    }(t) : n === t.getTextContentSize() && (!t.canInsertTextAfter() || !r.canInsertTextAfter() && !t.isComposing() || i);
  }(e, s);
}
function nh(e, t) {
  return null !== e && null !== e.nodeValue && 3 === e.nodeType && 0 !== t && t !== e.nodeValue.length;
}
function np(e, t, n) {
  let {
    anchorNode,
    anchorOffset,
    focusNode,
    focusOffset
  } = e;
  nl && (nl = !1, nh(anchorNode, anchorOffset) && nh(focusNode, focusOffset)) || rG(t, () => {
    if (!n) return void $$e070(null);
    if (!$$eL22(t, anchorNode, focusNode)) return;
    let a = $$ra84();
    if ($$n815(a)) {
      let n = a.anchor;
      let r = n.getNode();
      if (a.isCollapsed()) {
        "Range" === e.type && e.anchorNode === e.focusNode && (a.dirty = !0);
        let i = th(t).event;
        let A = i ? i.timeStamp : performance.now();
        let [o, s, l, u, g] = nf;
        let c = $$e$25();
        let f = !1 === t.isComposing() && "" === c.getTextContent();
        if (A < g + 200 && n.offset === l && n.key === u) {
          a.format = o;
          a.style = s;
        } else if ("text" === n.type) {
          $$nK67(r) || eI(141);
          a.format = r.getFormat();
          a.style = r.getStyle();
        } else if ("element" === n.type && !f) {
          let e = n.getNode();
          a.style = "";
          e instanceof rV && 0 === e.getChildrenSize() ? (a.format = e.getTextFormat(), a.style = e.getTextStyle()) : a.format = 0;
        }
      } else {
        let e = n.key;
        let t = a.focus.key;
        let r = a.getNodes();
        let i = r.length;
        let o = a.isBackward();
        let l = o ? focusOffset : anchorOffset;
        let u = o ? anchorOffset : focusOffset;
        let g = o ? t : e;
        let c = o ? e : t;
        let f = 255;
        let d = !1;
        for (let e = 0; e < i; e++) {
          let t = r[e];
          let n = t.getTextContentSize();
          if ($$nK67(t) && 0 !== n && !(0 === e && t.__key === g && l === n || e === i - 1 && t.__key === c && 0 === u) && (d = !0, 0 == (f &= t.getFormat()))) break;
        }
        a.format = d ? f : 0;
      }
    }
    rR(t, $$i24, void 0);
  });
}
function nC(e) {
  if (!e.getTargetRanges) return null;
  let t = e.getTargetRanges();
  return 0 === t.length ? null : t[0];
}
function nI(e, t) {
  let n = e._compositionKey;
  if (eH(null), null !== n && null != t) {
    if ("" === t) {
      let t = $$ej72(n);
      let r = eP(e.getElementByKey(n));
      return void (null !== r && null !== r.nodeValue && $$nK67(t) && e4(t, r.nodeValue, null, null, !0));
    }
    if ("\n" === t[t.length - 1]) {
      let t = $$ra84();
      if ($$n815(t)) {
        let n = t.focus;
        t.anchor.set(n.key, n.offset, n.type);
        return void rR(e, $$D64, null);
      }
    }
  }
  e9(!0, e, t);
}
function nE(e) {
  let t = e.__lexicalEventHandles;
  void 0 === t && (t = [], e.__lexicalEventHandles = t);
  return t;
}
let nB = new Map();
function nm(e) {
  let t = e.target;
  let n = tm(null == t ? null : 9 === t.nodeType ? t.defaultView : t.ownerDocument.defaultView);
  if (null === n) return;
  let r = eM(n.anchorNode);
  if (null === r) return;
  nu && (nu = !1, rG(r, () => {
    let t = rl();
    let i = n.anchorNode;
    if (null === i) return;
    let A = i.nodeType;
    (1 === A || 3 === A) && $$e070(rs(t, n, r, e));
  }));
  let i = e6(r);
  let A = i[i.length - 1];
  let o = A._key;
  let s = nB.get(o);
  let a = s || A;
  a !== r && np(n, a, !1);
  np(n, r, !0);
  r !== A ? nB.set(o, r) : s && nB.$$delete(o);
}
function ny(e) {
  e._lexicalHandled = !0;
}
function n_(e) {
  return !0 === e._lexicalHandled;
}
function nQ(e, t, n) {
  r_();
  let r = e.__key;
  let i = e.getParent();
  if (null === i) return;
  let A = function (e) {
    let t = $$ra84();
    if (!$$n815(t) || !$$rU57(e)) return t;
    let {
      anchor,
      focus
    } = t;
    let i = anchor.getNode();
    let A = focus.getNode();
    td(i, e) && anchor.set(e.__key, 0, "element");
    td(A, e) && focus.set(e.__key, 0, "element");
    return t;
  }(e);
  let o = !1;
  if ($$n815(A) && t) {
    let t = A.anchor;
    let n = A.focus;
    t.key === r && (rc(t, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
    n.key === r && (rc(n, e, i, e.getPreviousSibling(), e.getNextSibling()), o = !0);
  } else $$n330(A) && t && e.isSelected() && e.selectPrevious();
  if ($$n815(A) && t && !o) {
    let t = e.getIndexWithinParent();
    eJ(e);
    ru(A, i, t, -1);
  } else eJ(e);
  n || $$tp16(i) || i.canBeEmpty() || !i.isEmpty() || nQ(i, t);
  t && $$rK60(i) && i.isEmpty() && i.selectEnd();
}
class nD {
  static getType() {
    eI(64, this.name);
  }
  static clone(e) {
    eI(65, this.name);
  }
  afterCloneFrom(e) {
    this.__parent = e.__parent;
    this.__next = e.__next;
    this.__prev = e.__prev;
  }
  constructor(e) {
    this.__type = this.constructor.getType();
    this.__parent = null;
    this.__prev = null;
    this.__next = null;
    (function (e, t) {
      if (null != t) return void (e.__key = t);
      r_();
      rQ();
      let n = rw();
      let r = rD();
      let i = "" + eF++;
      r._nodeMap.set(i, e);
      $$rU57(e) ? n._dirtyElements.set(i, !0) : n._dirtyLeaves.add(i);
      n._cloneNotNeeded.add(i);
      n._dirtyType = 1;
      e.__key = i;
    })(this, e);
  }
  getType() {
    return this.__type;
  }
  isInline() {
    eI(137, this.constructor.name);
  }
  isAttached() {
    let e = this.__key;
    for (; null !== e;) {
      if ("root" === e) return !0;
      let t = $$ej72(e);
      if (null === t) break;
      e = t.__parent;
    }
    return !1;
  }
  isSelected(e) {
    let t = e || $$ra84();
    if (null == t) return !1;
    let n = t.getNodes().some(e => e.__key === this.__key);
    if ($$nK67(this)) return n;
    if ($$n815(t) && "element" === t.anchor.type && "element" === t.focus.type) {
      if (t.isCollapsed()) return !1;
      let e = this.getParent();
      if ($$rz9(this) && this.isInline() && e) {
        let n = t.isBackward() ? t.focus : t.anchor;
        let r = n.getNode();
        if (n.offset === r.getChildrenSize() && r.is(e) && r.getLastChildOrThrow().is(this)) return !1;
      }
    }
    return n;
  }
  getKey() {
    return this.__key;
  }
  getIndexWithinParent() {
    let e = this.getParent();
    if (null === e) return -1;
    let t = e.getFirstChild();
    let n = 0;
    for (; null !== t;) {
      if (this.is(t)) return n;
      n++;
      t = t.getNextSibling();
    }
    return -1;
  }
  getParent() {
    let e = this.getLatest().__parent;
    return null === e ? null : $$ej72(e);
  }
  getParentOrThrow() {
    let e = this.getParent();
    null === e && eI(66, this.__key);
    return e;
  }
  getTopLevelElement() {
    let e = this;
    for (; null !== e;) {
      let t = e.getParent();
      if ($$tp16(t)) {
        $$rU57(e) || e === this && $$rz9(e) || eI(194);
        return e;
      }
      e = t;
    }
    return null;
  }
  getTopLevelElementOrThrow() {
    let e = this.getTopLevelElement();
    null === e && eI(67, this.__key);
    return e;
  }
  getParents() {
    let e = [];
    let t = this.getParent();
    for (; null !== t;) {
      e.push(t);
      t = t.getParent();
    }
    return e;
  }
  getParentKeys() {
    let e = [];
    let t = this.getParent();
    for (; null !== t;) {
      e.push(t.__key);
      t = t.getParent();
    }
    return e;
  }
  getPreviousSibling() {
    let e = this.getLatest().__prev;
    return null === e ? null : $$ej72(e);
  }
  getPreviousSiblings() {
    let e = [];
    let t = this.getParent();
    if (null === t) return e;
    let n = t.getFirstChild();
    for (; null !== n && !n.is(this);) {
      e.push(n);
      n = n.getNextSibling();
    }
    return e;
  }
  getNextSibling() {
    let e = this.getLatest().__next;
    return null === e ? null : $$ej72(e);
  }
  getNextSiblings() {
    let e = [];
    let t = this.getNextSibling();
    for (; null !== t;) {
      e.push(t);
      t = t.getNextSibling();
    }
    return e;
  }
  getCommonAncestor(e) {
    let t = this.getParents();
    let n = e.getParents();
    $$rU57(this) && t.unshift(this);
    $$rU57(e) && n.unshift(e);
    let r = t.length;
    let i = n.length;
    if (0 === r || 0 === i || t[r - 1] !== n[i - 1]) return null;
    let A = new Set(n);
    for (let e = 0; e < r; e++) {
      let n = t[e];
      if (A.has(n)) return n;
    }
    return null;
  }
  is(e) {
    return null != e && this.__key === e.__key;
  }
  isBefore(e) {
    if (this === e) return !1;
    if (e.isParentOf(this)) return !0;
    if (this.isParentOf(e)) return !1;
    let t = this.getCommonAncestor(e);
    let n = 0;
    let r = 0;
    let i = this;
    for (;;) {
      let e = i.getParentOrThrow();
      if (e === t) {
        n = i.getIndexWithinParent();
        break;
      }
      i = e;
    }
    for (i = e;;) {
      let e = i.getParentOrThrow();
      if (e === t) {
        r = i.getIndexWithinParent();
        break;
      }
      i = e;
    }
    return n < r;
  }
  isParentOf(e) {
    let t = this.__key;
    if (t === e.__key) return !1;
    let n = e;
    for (; null !== n;) {
      if (n.__key === t) return !0;
      n = n.getParent();
    }
    return !1;
  }
  getNodesBetween(e) {
    let t = this.isBefore(e);
    let n = [];
    let r = new Set();
    let i = this;
    for (; null !== i;) {
      let A = i.__key;
      if (r.has(A) || (r.add(A), n.push(i)), i === e) break;
      let o = $$rU57(i) ? t ? i.getFirstChild() : i.getLastChild() : null;
      if (null !== o) {
        i = o;
        continue;
      }
      let s = t ? i.getNextSibling() : i.getPreviousSibling();
      if (null !== s) {
        i = s;
        continue;
      }
      let a = i.getParentOrThrow();
      if (r.has(a.__key) || n.push(a), a === e) break;
      let l = null;
      let u = a;
      do {
        if (null === u && eI(68), l = t ? u.getNextSibling() : u.getPreviousSibling(), null === (u = u.getParent())) break;
        null !== l || r.has(u.__key) || n.push(u);
      } while (null === l);
      i = l;
    }
    t || n.reverse();
    return n;
  }
  isDirty() {
    let e = rw()._dirtyLeaves;
    return null !== e && e.has(this.__key);
  }
  getLatest() {
    let e = $$ej72(this.__key);
    null === e && eI(113);
    return e;
  }
  getWritable() {
    r_();
    let e = rD();
    let t = rw();
    let n = e._nodeMap;
    let r = this.__key;
    let i = this.getLatest();
    let A = t._cloneNotNeeded;
    let o = $$ra84();
    if (null !== o && o.setCachedNodes(null), A.has(r)) {
      ez(i);
      return i;
    }
    let s = $$tN6(i);
    A.add(r);
    ez(s);
    n.set(r, s);
    return s;
  }
  getTextContent() {
    return "";
  }
  getTextContentSize() {
    return this.getTextContent().length;
  }
  createDOM(e, t) {
    eI(70);
  }
  updateDOM(e, t, n) {
    eI(71);
  }
  exportDOM(e) {
    return {
      element: this.createDOM(e._config, e)
    };
  }
  exportJSON() {
    eI(72);
  }
  static importJSON(e) {
    eI(18, this.name);
  }
  static transform() {
    return null;
  }
  remove(e) {
    nQ(this, !0, e);
  }
  replace(e, t) {
    r_();
    let n = $$ra84();
    null !== n && (n = n.clone());
    tI(this, e);
    let r = this.getLatest();
    let i = this.__key;
    let A = e.__key;
    let o = e.getWritable();
    let s = this.getParentOrThrow().getWritable();
    let a = s.__size;
    eJ(o);
    let l = r.getPreviousSibling();
    let u = r.getNextSibling();
    let g = r.__prev;
    let c = r.__next;
    let f = r.__parent;
    if ((nQ(r, !1, !0), null === l) ? s.__first = A : l.getWritable().__next = A, (o.__prev = g, null === u) ? s.__last = A : u.getWritable().__prev = A, o.__next = c, o.__parent = f, s.__size = a, t && ($$rU57(this) && $$rU57(o) || eI(139), this.getChildren().forEach(e => {
      o.append(e);
    })), $$n815(n)) {
      $$e070(n);
      let e = n.anchor;
      let t = n.focus;
      e.key === i && n0(e, o);
      t.key === i && n0(t, o);
    }
    eK() === i && eH(A);
    return o;
  }
  insertAfter(e, t = !0) {
    r_();
    tI(this, e);
    let n = this.getWritable();
    let r = e.getWritable();
    let i = r.getParent();
    let A = $$ra84();
    let o = !1;
    let s = !1;
    if (null !== i) {
      let t = e.getIndexWithinParent();
      if (eJ(r), $$n815(A)) {
        let e = i.__key;
        let n = A.anchor;
        let r = A.focus;
        o = "element" === n.type && n.key === e && n.offset === t + 1;
        s = "element" === r.type && r.key === e && r.offset === t + 1;
      }
    }
    let a = this.getNextSibling();
    let l = this.getParentOrThrow().getWritable();
    let u = r.__key;
    let g = n.__next;
    if (null === a ? l.__last = u : a.getWritable().__prev = u, l.__size++, n.__next = u, r.__next = g, r.__prev = n.__key, r.__parent = n.__parent, t && $$n815(A)) {
      let e = this.getIndexWithinParent();
      ru(A, l, e + 1);
      let t = l.__key;
      o && A.anchor.set(t, e + 2, "element");
      s && A.focus.set(t, e + 2, "element");
    }
    return e;
  }
  insertBefore(e, t = !0) {
    r_();
    tI(this, e);
    let n = this.getWritable();
    let r = e.getWritable();
    let i = r.__key;
    eJ(r);
    let A = this.getPreviousSibling();
    let o = this.getParentOrThrow().getWritable();
    let s = n.__prev;
    let a = this.getIndexWithinParent();
    null === A ? o.__first = i : A.getWritable().__next = i;
    o.__size++;
    n.__prev = i;
    r.__prev = s;
    r.__next = n.__key;
    r.__parent = n.__parent;
    let l = $$ra84();
    t && $$n815(l) && ru(l, this.getParentOrThrow(), a);
    return e;
  }
  isParentRequired() {
    return !1;
  }
  createParentElementNode() {
    return $$r$68();
  }
  selectStart() {
    return this.selectPrevious();
  }
  selectEnd() {
    return this.selectNext(0, 0);
  }
  selectPrevious(e, t) {
    r_();
    let n = this.getPreviousSibling();
    let r = this.getParentOrThrow();
    if (null === n) return r.select(0, 0);
    if ($$rU57(n)) return n.select();
    if (!$$nK67(n)) {
      let e = n.getIndexWithinParent() + 1;
      return r.select(e, e);
    }
    return n.select(e, t);
  }
  selectNext(e, t) {
    r_();
    let n = this.getNextSibling();
    let r = this.getParentOrThrow();
    if (null === n) return r.select();
    if ($$rU57(n)) return n.select(0, 0);
    if (!$$nK67(n)) {
      let e = n.getIndexWithinParent();
      return r.select(e, e);
    }
    return n.select(e, t);
  }
  markDirty() {
    this.getWritable();
  }
}
class nw extends nD {
  static getType() {
    return "linebreak";
  }
  static clone(e) {
    return new nw(e.__key);
  }
  constructor(e) {
    super(e);
  }
  getTextContent() {
    return "\n";
  }
  createDOM() {
    return document.createElement("br");
  }
  updateDOM() {
    return !1;
  }
  static importDOM() {
    return {
      br: e => function (e) {
        let t = e.parentElement;
        if (null !== t && $$tw46(t)) {
          let n = t.firstChild;
          if (n === e || n.nextSibling === e && nx(n)) {
            let n = t.lastChild;
            if (n === e || n.previousSibling === e && nx(n)) return !0;
          }
        }
        return !1;
      }(e) || function (e) {
        let t = e.parentElement;
        if (null !== t && $$tw46(t)) {
          let n = t.firstChild;
          if (n === e || n.nextSibling === e && nx(n)) return !1;
          let r = t.lastChild;
          if (r === e || r.previousSibling === e && nx(r)) return !0;
        }
        return !1;
      }(e) ? null : {
        conversion: nb,
        priority: 0
      }
    };
  }
  static importJSON(e) {
    return $$nv37();
  }
  exportJSON() {
    return {
      type: "linebreak",
      version: 1
    };
  }
}
function nb(e) {
  return {
    node: $$nv37()
  };
}
export function $$nv37() {
  return $$tC75(new nw());
}
export function $$nk88(e) {
  return e instanceof nw;
}
function nx(e) {
  return 3 === e.nodeType && /^( |\t|\r?\n)+$/.test(e.textContent || "");
}
function nS(e, t) {
  return 16 & t ? "code" : 128 & t ? "mark" : 32 & t ? "sub" : 64 & t ? "sup" : null;
}
function nF(e, t) {
  return 1 & t ? "strong" : 2 & t ? "em" : "span";
}
function nN(e, t, n, r, i) {
  let A = r.classList;
  let o = tA(i, "base");
  void 0 !== o && A.add(...o);
  let s = !1;
  let a = 8 & t && 4 & t;
  for (let e in void 0 !== (o = tA(i, "underlineStrikethrough")) && (8 & n && 4 & n ? (s = !0, a || A.add(...o)) : a && A.remove(...o)), ec) {
    let r = ec[e];
    if (void 0 !== (o = tA(i, e))) {
      if (n & r) {
        if (s && ("underline" === e || "strikethrough" === e)) {
          t & r && A.remove(...o);
          continue;
        }
        t & r && (!a || "underline" !== e) && "strikethrough" !== e || A.add(...o);
      } else t & r && A.remove(...o);
    }
  }
}
function nT(e, t, n) {
  let r = t.firstChild;
  let i = n.isComposing();
  let A = e + (i ? eo : "");
  if (null == r) t.textContent = A;else {
    let e = r.nodeValue;
    if (e !== A) {
      if (i || $) {
        let [t, n, i] = function (e, t) {
          let n = e.length;
          let r = t.length;
          let i = 0;
          let A = 0;
          for (; i < n && i < r && e[i] === t[i];) i++;
          for (; A + i < n && A + i < r && e[n - A - 1] === t[r - A - 1];) A++;
          return [i, n - i - A, t.slice(i, r - A)];
        }(e, A);
        0 !== n && r.deleteData(t, n);
        r.insertData(t, i);
      } else r.nodeValue = A;
    }
  }
}
function nL(e, t, n, r, i, A) {
  nT(i, e, t);
  let o = A.theme.text;
  void 0 !== o && nN(0, 0, r, e, o);
}
function nR(e, t) {
  let n = document.createElement(t);
  n.appendChild(e);
  return n;
}
export class $$nM10 extends nD {
  static getType() {
    return "text";
  }
  static clone(e) {
    return new $$nM10(e.__text, e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e);
    this.__format = e.__format;
    this.__style = e.__style;
    this.__mode = e.__mode;
    this.__detail = e.__detail;
  }
  constructor(e, t) {
    super(t);
    this.__text = e;
    this.__format = 0;
    this.__style = "";
    this.__mode = 0;
    this.__detail = 0;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getDetail() {
    return this.getLatest().__detail;
  }
  getMode() {
    return eC[this.getLatest().__mode];
  }
  getStyle() {
    return this.getLatest().__style;
  }
  isToken() {
    return 1 === this.getLatest().__mode;
  }
  isComposing() {
    return this.__key === eK();
  }
  isSegmented() {
    return 2 === this.getLatest().__mode;
  }
  isDirectionless() {
    return !!(1 & this.getLatest().__detail);
  }
  isUnmergeable() {
    return !!(2 & this.getLatest().__detail);
  }
  hasFormat(e) {
    let t = ec[e];
    return !!(this.getFormat() & t);
  }
  isSimpleText() {
    return "text" === this.__type && 0 === this.__mode;
  }
  getTextContent() {
    return this.getLatest().__text;
  }
  getFormatFlags(e, t) {
    return eU(this.getLatest().__format, e, t);
  }
  canHaveFormat() {
    return !0;
  }
  createDOM(e, t) {
    let n = this.__format;
    let r = nS(0, n);
    let i = nF(0, n);
    let A = r;
    let o = document.createElement(A);
    let s = o;
    this.hasFormat("code") && o.setAttribute("spellcheck", "false");
    null !== r && (s = document.createElement(i), o.appendChild(s));
    nL(s, this, 0, n, this.__text, e);
    let a = this.__style;
    "" !== a && (o.style.cssText = a);
    return o;
  }
  updateDOM(e, t, n) {
    let r = this.__text;
    let i = e.__format;
    let A = this.__format;
    let o = nS(0, i);
    let s = nS(0, A);
    let a = nF(0, i);
    let l = nF(0, A);
    if (o !== s) return !0;
    if (o === s && a !== l) {
      let e = t.firstChild;
      null == e && eI(48);
      let i = document.createElement(l);
      nL(i, this, 0, A, r, n);
      t.replaceChild(i, e);
      return !1;
    }
    let u = t;
    null !== s && null !== o && null == (u = t.firstChild) && eI(49);
    nT(r, u, this);
    let g = n.theme.text;
    void 0 !== g && i !== A && nN(0, i, A, u, g);
    let c = e.__style;
    let f = this.__style;
    c !== f && (t.style.cssText = f);
    return !1;
  }
  static importDOM() {
    return {
      "#text": () => ({
        conversion: nU,
        priority: 0
      }),
      b: () => ({
        conversion: nG,
        priority: 0
      }),
      code: () => ({
        conversion: nz,
        priority: 0
      }),
      em: () => ({
        conversion: nz,
        priority: 0
      }),
      i: () => ({
        conversion: nz,
        priority: 0
      }),
      s: () => ({
        conversion: nz,
        priority: 0
      }),
      span: () => ({
        conversion: nO,
        priority: 0
      }),
      strong: () => ({
        conversion: nz,
        priority: 0
      }),
      sub: () => ({
        conversion: nz,
        priority: 0
      }),
      sup: () => ({
        conversion: nz,
        priority: 0
      }),
      u: () => ({
        conversion: nz,
        priority: 0
      })
    };
  }
  static importJSON(e) {
    let t = $$nH78(e.text);
    t.setFormat(e.format);
    t.setDetail(e.detail);
    t.setMode(e.mode);
    t.setStyle(e.style);
    return t;
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    null !== element && $$t_79(element) || eI(132);
    element.style.whiteSpace = "pre-wrap";
    this.hasFormat("bold") && (t = nR(element, "b"));
    this.hasFormat("italic") && (t = nR(element, "i"));
    this.hasFormat("strikethrough") && (t = nR(element, "s"));
    this.hasFormat("underline") && (t = nR(element, "u"));
    return {
      element
    };
  }
  exportJSON() {
    return {
      detail: this.getDetail(),
      format: this.getFormat(),
      mode: this.getMode(),
      style: this.getStyle(),
      text: this.getTextContent(),
      type: "text",
      version: 1
    };
  }
  selectionTransform(e, t) {}
  setFormat(e) {
    let t = this.getWritable();
    t.__format = "string" == typeof e ? ec[e] : e;
    return t;
  }
  setDetail(e) {
    let t = this.getWritable();
    t.__detail = "string" == typeof e ? ef[e] : e;
    return t;
  }
  setStyle(e) {
    let t = this.getWritable();
    t.__style = e;
    return t;
  }
  toggleFormat(e) {
    let t = eU(this.getFormat(), e, null);
    return this.setFormat(t);
  }
  toggleDirectionless() {
    let e = this.getWritable();
    e.__detail ^= 1;
    return e;
  }
  toggleUnmergeable() {
    let e = this.getWritable();
    e.__detail ^= 2;
    return e;
  }
  setMode(e) {
    let t = ep[e];
    if (this.__mode === t) return this;
    let n = this.getWritable();
    n.__mode = t;
    return n;
  }
  setTextContent(e) {
    if (this.__text === e) return this;
    let t = this.getWritable();
    t.__text = e;
    return t;
  }
  select(e, t) {
    r_();
    let n = e;
    let r = t;
    let i = $$ra84();
    let A = this.getTextContent();
    let o = this.__key;
    if ("string" == typeof A) {
      let e = A.length;
      void 0 === n && (n = e);
      void 0 === r && (r = e);
    } else {
      n = 0;
      r = 0;
    }
    if (!$$n815(i)) return $$ri(o, n, o, r, "text", "text");
    {
      let e = eK();
      e !== i.anchor.key && e !== i.focus.key || eH(o);
      i.setTextNodeRange(this, n, this, r);
    }
    return i;
  }
  selectStart() {
    return this.select(0, 0);
  }
  selectEnd() {
    let e = this.getTextContentSize();
    return this.select(e, e);
  }
  spliceText(e, t, n, r) {
    let i = this.getWritable();
    let A = i.__text;
    let o = n.length;
    let s = e;
    s < 0 && (s = o + s) < 0 && (s = 0);
    let a = $$ra84();
    if (r && $$n815(a)) {
      let t = e + o;
      a.setTextNodeRange(i, t, i, t);
    }
    let l = A.slice(0, s) + n + A.slice(s + t);
    i.__text = l;
    return i;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  splitText(...e) {
    let t;
    r_();
    let n = this.getLatest();
    let r = n.getTextContent();
    let i = n.__key;
    let A = eK();
    let o = new Set(e);
    let s = [];
    let a = r.length;
    let l = "";
    for (let e = 0; e < a; e++) {
      "" !== l && o.has(e) && (s.push(l), l = "");
      l += r[e];
    }
    "" !== l && s.push(l);
    let u = s.length;
    if (0 === u) return [];
    if (s[0] === r) return [n];
    let g = s[0];
    let c = n.getParent();
    let f = n.getFormat();
    let d = n.getStyle();
    let h = n.__detail;
    let p = !1;
    n.isSegmented() ? ((t = $$nH78(g)).__format = f, t.__style = d, t.__detail = h, p = !0) : (t = n.getWritable()).__text = g;
    let C = $$ra84();
    let I = [t];
    let E = g.length;
    for (let e = 1; e < u; e++) {
      let t = s[e];
      let n = t.length;
      let r = $$nH78(t).getWritable();
      r.__format = f;
      r.__style = d;
      r.__detail = h;
      let o = r.__key;
      let a = E + n;
      if ($$n815(C)) {
        let e = C.anchor;
        let t = C.focus;
        e.key === i && "text" === e.type && e.offset > E && e.offset <= a && (e.key = o, e.offset -= E, C.dirty = !0);
        t.key === i && "text" === t.type && t.offset > E && t.offset <= a && (t.key = o, t.offset -= E, C.dirty = !0);
      }
      A === i && eH(o);
      E = a;
      I.push(r);
    }
    if (null !== c) {
      !function (e) {
        let t = e.getPreviousSibling();
        let n = e.getNextSibling();
        null !== t && ez(t);
        null !== n && ez(n);
      }(this);
      let e = c.getWritable();
      let t = this.getIndexWithinParent();
      p ? (e.splice(t, 0, I), this.remove()) : e.splice(t, 1, I);
      $$n815(C) && ru(C, c, t, u - 1);
    }
    return I;
  }
  mergeWithSibling(e) {
    let t = e === this.getPreviousSibling();
    t || e === this.getNextSibling() || eI(50);
    let n = this.__key;
    let r = e.__key;
    let i = this.__text;
    let A = i.length;
    eK() === r && eH(n);
    let o = $$ra84();
    if ($$n815(o)) {
      let i = o.anchor;
      let s = o.focus;
      null !== i && i.key === r && (rf(i, t, n, e, A), o.dirty = !0);
      null !== s && s.key === r && (rf(s, t, n, e, A), o.dirty = !0);
    }
    let s = e.__text;
    let a = t ? s + i : i + s;
    this.setTextContent(a);
    let l = this.getWritable();
    e.remove();
    return l;
  }
  isTextEntity() {
    return !1;
  }
}
function nO(e) {
  return {
    forChild: nj(e.style),
    node: null
  };
}
function nG(e) {
  let t = "normal" === e.style.fontWeight;
  return {
    forChild: nj(e.style, t ? void 0 : "bold"),
    node: null
  };
}
let nP = new WeakMap();
function nU(e) {
  null === e.parentElement && eI(129);
  let t = e.textContent || "";
  if (null !== function (e) {
    var t;
    let n;
    let r = e.parentNode;
    let i = [e];
    for (; null !== r && void 0 === (n = nP.get(r)) && !("PRE" === (t = r).nodeName || 1 === t.nodeType && void 0 !== t.style && void 0 !== t.style.whiteSpace && t.style.whiteSpace.startsWith("pre"));) {
      i.push(r);
      r = r.parentNode;
    }
    let A = void 0 === n ? r : n;
    for (let e = 0; e < i.length; e++) nP.set(i[e], A);
    return A;
  }(e)) {
    let e = t.split(/(\r?\n|\t)/);
    let n = [];
    let r = e.length;
    for (let t = 0; t < r; t++) {
      let r = e[t];
      "\n" === r || "\r\n" === r ? n.push($$nv37()) : "	" === r ? n.push($$nW54()) : "" !== r && n.push($$nH78(r));
    }
    return {
      node: n
    };
  }
  if ("" === (t = t.replace(/\r/g, "").replace(/[ \t\n]+/g, " "))) return {
    node: null
  };
  if (" " === t[0]) {
    let n = e;
    let r = !0;
    for (; null !== n && null !== (n = nq(n, !1));) {
      let e = n.textContent || "";
      if (e.length > 0) {
        /[ \t\n]$/.test(e) && (t = t.slice(1));
        r = !1;
        break;
      }
    }
    r && (t = t.slice(1));
  }
  if (" " === t[t.length - 1]) {
    let n = e;
    let r = !0;
    for (; null !== n && null !== (n = nq(n, !0));) if ((n.textContent || "").replace(/^( |\t|\r?\n)+/, "").length > 0) {
      r = !1;
      break;
    }
    r && (t = t.slice(0, t.length - 1));
  }
  return "" === t ? {
    node: null
  } : {
    node: $$nH78(t)
  };
}
function nq(e, t) {
  let n = e;
  for (;;) {
    let e;
    for (; null === (e = t ? n.nextSibling : n.previousSibling);) {
      let e = n.parentElement;
      if (null === e) return null;
      n = e;
    }
    if (1 === (n = e).nodeType) {
      let e = n.style.display;
      if ("" === e && !$$tD45(n) || "" !== e && !e.startsWith("inline")) return null;
    }
    let r = n;
    for (; null !== (r = t ? n.firstChild : n.lastChild);) n = r;
    if (3 === n.nodeType) return n;
    if ("BR" === n.nodeName) return null;
  }
}
let nJ = {
  code: "code",
  em: "italic",
  i: "italic",
  s: "strikethrough",
  strong: "bold",
  sub: "subscript",
  sup: "superscript",
  u: "underline"
};
function nz(e) {
  let t = nJ[e.nodeName.toLowerCase()];
  return void 0 === t ? {
    node: null
  } : {
    forChild: nj(e.style, t),
    node: null
  };
}
export function $$nH78(e = "") {
  return $$tC75(new $$nM10(e));
}
export function $$nK67(e) {
  return e instanceof $$nM10;
}
function nj(e, t) {
  let n = e.fontWeight;
  let r = e.textDecoration.split(" ");
  let i = "700" === n || "bold" === n;
  let A = r.includes("line-through");
  let o = "italic" === e.fontStyle;
  let s = r.includes("underline");
  let a = e.verticalAlign;
  return e => ($$nK67(e) && (i && !e.hasFormat("bold") && e.toggleFormat("bold"), A && !e.hasFormat("strikethrough") && e.toggleFormat("strikethrough"), o && !e.hasFormat("italic") && e.toggleFormat("italic"), s && !e.hasFormat("underline") && e.toggleFormat("underline"), "sub" !== a || e.hasFormat("subscript") || e.toggleFormat("subscript"), "super" !== a || e.hasFormat("superscript") || e.toggleFormat("superscript"), t && !e.hasFormat(t) && e.toggleFormat(t)), e);
}
class $$nY extends $$nM10 {
  static getType() {
    return "tab";
  }
  static clone(e) {
    return new $$nY(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e);
    this.__text = e.__text;
  }
  constructor(e) {
    super("	", e);
    this.__detail = 2;
  }
  static importDOM() {
    return null;
  }
  static importJSON(e) {
    let t = $$nW54();
    t.setFormat(e.format);
    t.setStyle(e.style);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      type: "tab",
      version: 1
    };
  }
  setTextContent(e) {
    eI(126);
  }
  setDetail(e) {
    eI(127);
  }
  setMode(e) {
    eI(128);
  }
  canInsertTextBefore() {
    return !1;
  }
  canInsertTextAfter() {
    return !1;
  }
}
export function $$nW54() {
  return $$tC75(new $$nY());
}
export function $$nV23(e) {
  return e instanceof $$nY;
}
class nZ {
  constructor(e, t, n) {
    this._selection = null;
    this.key = e;
    this.offset = t;
    this.type = n;
  }
  is(e) {
    return this.key === e.key && this.offset === e.offset && this.type === e.type;
  }
  isBefore(e) {
    let t = this.getNode();
    let n = e.getNode();
    let r = this.offset;
    let i = e.offset;
    if ($$rU57(t)) {
      let e = t.getDescendantByIndex(r);
      t = null != e ? e : t;
    }
    if ($$rU57(n)) {
      let e = n.getDescendantByIndex(i);
      n = null != e ? e : n;
    }
    return t === n ? r < i : t.isBefore(n);
  }
  getNode() {
    let e = $$ej72(this.key);
    null === e && eI(20);
    return e;
  }
  set(e, t, n) {
    let r = this._selection;
    let i = this.key;
    this.key = e;
    this.offset = t;
    this.type = n;
    ry() || (eK() === i && eH(e), null !== r && (r.setCachedNodes(null), r.dirty = !0));
  }
}
function n$(e, t, n) {
  return new nZ(e, t, n);
}
function nX(e, t) {
  let n = t.__key;
  let r = e.offset;
  let i = "element";
  if ($$nK67(t)) {
    i = "text";
    let e = t.getTextContentSize();
    r > e && (r = e);
  } else if (!$$rU57(t)) {
    let e = t.getNextSibling();
    if ($$nK67(e)) {
      n = e.__key;
      r = 0;
      i = "text";
    } else {
      let e = t.getParent();
      e && (n = e.__key, r = t.getIndexWithinParent() + 1);
    }
  }
  e.set(n, r, i);
}
function n0(e, t) {
  if ($$rU57(t)) {
    let n = t.getLastDescendant();
    $$rU57(n) || $$nK67(n) ? nX(e, n) : nX(e, t);
  } else nX(e, t);
}
function $$n1(e, t, n, r) {
  e.key = t;
  e.offset = n;
  e.type = r;
}
class n2 {
  constructor(e) {
    this._cachedNodes = null;
    this._nodes = e;
    this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    if (!$$n330(e)) return !1;
    let t = this._nodes;
    let n = e._nodes;
    return t.size === n.size && Array.from(t).every(e => n.has(e));
  }
  isCollapsed() {
    return !1;
  }
  isBackward() {
    return !1;
  }
  getStartEndPoints() {
    return null;
  }
  add(e) {
    this.dirty = !0;
    this._nodes.add(e);
    this._cachedNodes = null;
  }
  delete(e) {
    this.dirty = !0;
    this._nodes.$$delete(e);
    this._cachedNodes = null;
  }
  clear() {
    this.dirty = !0;
    this._nodes.clear();
    this._cachedNodes = null;
  }
  has(e) {
    return this._nodes.has(e);
  }
  clone() {
    return new n2(new Set(this._nodes));
  }
  extract() {
    return this.getNodes();
  }
  insertRawText(e) {}
  insertText() {}
  insertNodes(e) {
    let t;
    let n = this.getNodes();
    let r = n.length;
    let i = n[r - 1];
    if ($$nK67(i)) t = i.select();else {
      let e = i.getIndexWithinParent() + 1;
      t = i.getParentOrThrow().select(e, e);
    }
    t.insertNodes(e);
    for (let e = 0; e < r; e++) n[e].remove();
  }
  getNodes() {
    let e = this._cachedNodes;
    if (null !== e) return e;
    let t = this._nodes;
    let n = [];
    for (let e of t) {
      let t = $$ej72(e);
      null !== t && n.push(t);
    }
    ry() || (this._cachedNodes = n);
    return n;
  }
  getTextContent() {
    let e = this.getNodes();
    let t = "";
    for (let n = 0; n < e.length; n++) t += e[n].getTextContent();
    return t;
  }
}
export function $$n815(e) {
  return e instanceof n6;
}
class n6 {
  constructor(e, t, n, r) {
    this.anchor = e;
    this.focus = t;
    e._selection = this;
    t._selection = this;
    this._cachedNodes = null;
    this.format = n;
    this.style = r;
    this.dirty = !1;
  }
  getCachedNodes() {
    return this._cachedNodes;
  }
  setCachedNodes(e) {
    this._cachedNodes = e;
  }
  is(e) {
    return !!$$n815(e) && this.anchor.is(e.anchor) && this.focus.is(e.focus) && this.format === e.format && this.style === e.style;
  }
  isCollapsed() {
    return this.anchor.is(this.focus);
  }
  getNodes() {
    let e;
    let t = this._cachedNodes;
    if (null !== t) return t;
    let n = this.anchor;
    let r = this.focus;
    let i = n.isBefore(r);
    let A = i ? n : r;
    let o = i ? r : n;
    let s = A.getNode();
    let a = o.getNode();
    let l = A.offset;
    let u = o.offset;
    if ($$rU57(s)) {
      let e = s.getDescendantByIndex(l);
      s = null != e ? e : s;
    }
    if ($$rU57(a)) {
      let e = a.getDescendantByIndex(u);
      null !== e && e !== s && a.getChildAtIndex(u) === e && (e = e.getPreviousSibling());
      a = null != e ? e : a;
    }
    e = s.is(a) ? $$rU57(s) && s.getChildrenSize() > 0 ? [] : [s] : s.getNodesBetween(a);
    ry() || (this._cachedNodes = e);
    return e;
  }
  setTextNodeRange(e, t, n, r) {
    $$n1(this.anchor, e.__key, t, "text");
    $$n1(this.focus, n.__key, r, "text");
    this._cachedNodes = null;
    this.dirty = !0;
  }
  getTextContent() {
    let e = this.getNodes();
    if (0 === e.length) return "";
    let t = e[0];
    let n = e[e.length - 1];
    let r = this.anchor;
    let i = this.focus;
    let A = r.isBefore(i);
    let [o, s] = $$n98(this);
    let a = "";
    let l = !0;
    for (let u = 0; u < e.length; u++) {
      let g = e[u];
      if ($$rU57(g) && !g.isInline()) {
        l || (a += "\n");
        l = !g.isEmpty();
      } else if (l = !1, $$nK67(g)) {
        let e = g.getTextContent();
        g === t ? g === n ? "element" === r.type && "element" === i.type && i.offset !== r.offset || (e = o < s ? e.slice(o, s) : e.slice(s, o)) : e = A ? e.slice(o) : e.slice(s) : g === n && (e = A ? e.slice(0, s) : e.slice(0, o));
        a += e;
      } else !$$rz9(g) && !$$nk88(g) || g === n && this.isCollapsed() || (a += g.getTextContent());
    }
    return a;
  }
  applyDOMRange(e) {
    let t = rw();
    let n = t.getEditorState()._selection;
    let r = rn(e.startContainer, e.startOffset, e.endContainer, e.endOffset, t, n);
    if (null === r) return;
    let [i, A] = r;
    $$n1(this.anchor, i.key, i.offset, i.type);
    $$n1(this.focus, A.key, A.offset, A.type);
    this._cachedNodes = null;
  }
  clone() {
    let e = this.anchor;
    let t = this.focus;
    return new n6(n$(e.key, e.offset, e.type), n$(t.key, t.offset, t.type), this.format, this.style);
  }
  toggleFormat(e) {
    this.format = eU(this.format, e, null);
    this.dirty = !0;
  }
  setStyle(e) {
    this.style = e;
    this.dirty = !0;
  }
  hasFormat(e) {
    let t = ec[e];
    return !!(this.format & t);
  }
  insertRawText(e) {
    let t = e.split(/(\r?\n|\t)/);
    let n = [];
    let r = t.length;
    for (let e = 0; e < r; e++) {
      let r = t[e];
      "\n" === r || "\r\n" === r ? n.push($$nv37()) : "	" === r ? n.push($$nW54()) : n.push($$nH78(r));
    }
    this.insertNodes(n);
  }
  insertText(e) {
    let t = this.anchor;
    let n = this.focus;
    let r = this.format;
    let i = this.style;
    let A = t;
    let o = n;
    !this.isCollapsed() && n.isBefore(t) && (A = n, o = t);
    "element" === A.type && function (e, t, n, r) {
      let i = e.getNode();
      let A = i.getChildAtIndex(e.offset);
      let o = $$nH78();
      let s = $$rK60(i) ? $$r$68().append(o) : o;
      o.setFormat(n);
      o.setStyle(r);
      A?.insertBefore(s);
      e.is(t) && t.set(o.__key, 0, "text");
      e.set(o.__key, 0, "text");
    }(A, o, r, i);
    let s = A.offset;
    let a = o.offset;
    let l = this.getNodes();
    let u = l.length;
    let g = l[0];
    $$nK67(g) || eI(26);
    let c = g.getTextContent().length;
    let f = g.getParentOrThrow();
    let d = l[u - 1];
    if (1 === u && "element" === o.type && (a = c, o.set(A.key, a, "text")), this.isCollapsed() && s === c && (g.isSegmented() || g.isToken() || !g.canInsertTextAfter() || !f.canInsertTextAfter() && null === g.getNextSibling())) {
      let t = g.getNextSibling();
      if ($$nK67(t) && t.canInsertTextBefore() && !eG(t) || ((t = $$nH78()).setFormat(r), t.setStyle(i), f.canInsertTextAfter() ? g.insertAfter(t) : f.insertAfter(t)), t.select(0, 0), g = t, "" !== e) return void this.insertText(e);
    } else if (this.isCollapsed() && 0 === s && (g.isSegmented() || g.isToken() || !g.canInsertTextBefore() || !f.canInsertTextBefore() && null === g.getPreviousSibling())) {
      let t = g.getPreviousSibling();
      if ($$nK67(t) && !eG(t) || ((t = $$nH78()).setFormat(r), f.canInsertTextBefore() ? g.insertBefore(t) : f.insertBefore(t)), t.select(), g = t, "" !== e) return void this.insertText(e);
    } else if (g.isSegmented() && s !== c) {
      let e = $$nH78(g.getTextContent());
      e.setFormat(r);
      g.replace(e);
      g = e;
    } else if (!this.isCollapsed() && "" !== e) {
      let t = d.getParent();
      if (!f.canInsertTextBefore() || !f.canInsertTextAfter() || $$rU57(t) && (!t.canInsertTextBefore() || !t.canInsertTextAfter())) {
        this.insertText("");
        rt(this.anchor, this.focus, null);
        return void this.insertText(e);
      }
    }
    if (1 === u) {
      if (g.isToken()) {
        let t = $$nH78(e);
        t.select();
        return void g.replace(t);
      }
      let t = g.getFormat();
      let n = g.getStyle();
      if (s !== a || t === r && n === i) {
        if ($$nV23(g)) {
          let t = $$nH78(e);
          t.setFormat(r);
          t.setStyle(i);
          t.select();
          return void g.replace(t);
        }
      } else {
        if ("" !== g.getTextContent()) {
          let t = $$nH78(e);
          if (t.setFormat(r), t.setStyle(i), t.select(), 0 === s) g.insertBefore(t, !1);else {
            let [e] = g.splitText(s);
            e.insertAfter(t, !1);
          }
          return void (t.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length));
        }
        g.setFormat(r);
        g.setStyle(i);
      }
      let A = a - s;
      "" === (g = g.spliceText(s, A, e, !0)).getTextContent() ? g.remove() : "text" === this.anchor.type && (g.isComposing() ? this.anchor.offset -= e.length : (this.format = t, this.style = n));
    } else {
      let t = new Set([...g.getParentKeys(), ...d.getParentKeys()]);
      let n = $$rU57(g) ? g : g.getParentOrThrow();
      let r = $$rU57(d) ? d : d.getParentOrThrow();
      let i = d;
      if (!n.is(r) && r.isInline()) do {
        i = r;
        r = r.getParentOrThrow();
      } while (r.isInline());
      if ("text" === o.type && (0 !== a || "" === d.getTextContent()) || "element" === o.type && d.getIndexWithinParent() < a) {
        if ($$nK67(d) && !d.isToken() && a !== d.getTextContentSize()) {
          if (d.isSegmented()) {
            let e = $$nH78(d.getTextContent());
            d.replace(e);
            d = e;
          }
          $$rK60(o.getNode()) || "text" !== o.type || (d = d.spliceText(0, a, ""));
          t.add(d.__key);
        } else {
          let e = d.getParentOrThrow();
          e.canBeEmpty() || 1 !== e.getChildrenSize() ? d.remove() : e.remove();
        }
      } else t.add(d.__key);
      let A = r.getChildren();
      let f = new Set(l);
      let h = n.is(r);
      let p = n.isInline() && null === g.getNextSibling() ? n : g;
      for (let e = A.length - 1; e >= 0; e--) {
        let t = A[e];
        if (t.is(g) || $$rU57(t) && t.isParentOf(g)) break;
        t.isAttached() && (!f.has(t) || t.is(i) ? h || p.insertAfter(t, !1) : t.remove());
      }
      if (!h) {
        let e = r;
        let n = null;
        for (; null !== e;) {
          let r = e.getChildren();
          let i = r.length;
          (0 === i || r[i - 1].is(n)) && (t.$$delete(e.__key), n = e);
          e = e.getParent();
        }
      }
      if (g.isToken()) {
        if (s === c) g.select();else {
          let t = $$nH78(e);
          t.select();
          g.replace(t);
        }
      } else "" === (g = g.spliceText(s, c - s, e, !0)).getTextContent() ? g.remove() : g.isComposing() && "text" === this.anchor.type && (this.anchor.offset -= e.length);
      for (let e = 1; e < u; e++) {
        let n = l[e];
        let r = n.__key;
        t.has(r) || n.remove();
      }
    }
  }
  removeText() {
    if (this.isCollapsed()) return;
    let {
      anchor,
      focus
    } = this;
    let n = this.getNodes();
    let r = this.isBackward() ? focus : anchor;
    let i = this.isBackward() ? anchor : focus;
    let A = r.getNode();
    let o = i.getNode();
    let s = tv(A, tb);
    let a = tv(o, tb);
    n.forEach(e => {
      td(A, e) || td(o, e) || e.getKey() === A.getKey() || e.getKey() === o.getKey() || e.remove();
    });
    let l = (e, t) => {
      if ("" === e.getTextContent()) e.remove();else if (0 !== t && eG(e)) {
        let t = $$nH78(e.getTextContent());
        t.setFormat(e.getFormat());
        t.setStyle(e.getStyle());
        return e.replace(t);
      }
    };
    if (A === o && $$nK67(A)) {
      let n = Math.abs(focus.offset - anchor.offset);
      A.spliceText(r.offset, n, "", !0);
      return void l(A, n);
    }
    if ($$nK67(A)) {
      let e = A.getTextContentSize() - r.offset;
      A.spliceText(r.offset, e, "");
      A = l(A, e) || A;
    }
    $$nK67(o) && (o.spliceText(0, i.offset, ""), o = l(o, i.offset) || o);
    A.isAttached() && $$nK67(A) ? A.selectEnd() : o.isAttached() && $$nK67(o) && o.selectStart();
    $$rU57(s) && $$rU57(a) && s !== a && (s.append(...a.getChildren()), a.remove(), i.set(r.key, r.offset, r.type));
  }
  formatText(e, t = null) {
    if (this.isCollapsed()) {
      this.toggleFormat(e);
      return void eH(null);
    }
    let n = this.getNodes();
    let r = [];
    for (let e of n) $$nK67(e) && r.push(e);
    let i = r.length;
    if (0 === i) {
      this.toggleFormat(e);
      return void eH(null);
    }
    let A = this.anchor;
    let o = this.focus;
    let s = this.isBackward();
    let a = s ? o : A;
    let l = s ? A : o;
    let u = 0;
    let g = r[0];
    let c = "element" === a.type ? 0 : a.offset;
    if ("text" === a.type && c === g.getTextContentSize() && (u = 1, g = r[1], c = 0), null == g) return;
    let f = g.getFormatFlags(e, t);
    n.forEach(t => {
      if ($$rX48(t)) {
        let n = t.getFormatFlags(e, f);
        t.setTextFormat(n);
      }
    });
    let d = i - 1;
    let h = r[d];
    let p = "text" === l.type ? l.offset : h.getTextContentSize();
    if (g.is(h)) {
      if (c === p) return;
      if (eG(g) || 0 === c && p === g.getTextContentSize()) g.setFormat(f);else {
        let e = g.splitText(c, p);
        let t = 0 === c ? e[0] : e[1];
        t.setFormat(f);
        "text" === a.type && a.set(t.__key, 0, "text");
        "text" === l.type && l.set(t.__key, p - c, "text");
      }
      return void (this.format = f);
    }
    0 === c || eG(g) || ([, g] = g.splitText(c), c = 0);
    g.setFormat(f);
    let C = h.getFormatFlags(e, f);
    p > 0 && (p === h.getTextContentSize() || eG(h) || ([h] = h.splitText(p)), h.setFormat(C));
    for (let t = u + 1; t < d; t++) {
      let n = r[t];
      let i = n.getFormatFlags(e, C);
      n.setFormat(i);
    }
    "text" === a.type && a.set(g.__key, c, "text");
    "text" === l.type && l.set(h.__key, p, "text");
    this.format = f | C;
  }
  insertNodes(e) {
    var t;
    if (0 === e.length) return;
    if ("root" === this.anchor.key) {
      this.insertParagraph();
      let t = $$ra84();
      $$n815(t) || eI(134);
      return t.insertNodes(e);
    }
    let n = tv((this.isBackward() ? this.focus : this.anchor).getNode(), tb);
    let r = e[e.length - 1];
    if ("__language" in n && $$rU57(n)) {
      if ("__language" in e[0]) this.insertText(e[0].getTextContent());else {
        let t = rh(this);
        n.splice(t, 0, e);
        r.selectEnd();
      }
      return;
    }
    if (!e.some(e => ($$rU57(e) || $$rz9(e)) && !e.isInline())) {
      $$rU57(n) || eI(135);
      let t = rh(this);
      n.splice(t, 0, e);
      return void r.selectEnd();
    }
    let i = function (e) {
      let t = $$r$68();
      let n = null;
      for (let r = 0; r < e.length; r++) {
        let i = e[r];
        let A = $$nk88(i);
        if (A || $$rz9(i) && i.isInline() || $$rU57(i) && i.isInline() || $$nK67(i) || i.isParentRequired()) {
          if (null === n && (n = i.createParentElementNode(), t.append(n), A)) continue;
          null !== n && n.append(i);
        } else {
          t.append(i);
          n = null;
        }
      }
      return t;
    }(e);
    let A = i.getLastDescendant();
    let o = i.getChildren();
    let s = $$rU57(n) && n.isEmpty() ? null : this.insertParagraph();
    let a = o[o.length - 1];
    let l = o[0];
    $$rU57(t = l) && tb(t) && !t.isEmpty() && $$rU57(n) && (!n.isEmpty() || n.canMergeWhenEmpty()) && ($$rU57(n) || eI(135), n.append(...l.getChildren()), l = o[1]);
    l && function (e, t, n) {
      let r = t.getParentOrThrow().getLastChild();
      let i = t;
      let A = [t];
      for (; i !== r;) {
        i.getNextSibling() || eI(140);
        A.push(i = i.getNextSibling());
      }
      let o = e;
      for (let e of A) o = o.insertAfter(e);
    }(n, l);
    let u = tv(A, tb);
    s && $$rU57(u) && (s.canMergeWhenEmpty() || tb(a)) && (u.append(...s.getChildren()), s.remove());
    $$rU57(n) && n.isEmpty() && n.remove();
    A.selectEnd();
    let g = $$rU57(n) ? n.getLastChild() : null;
    $$nk88(g) && u !== n && g.remove();
  }
  insertParagraph() {
    if ("root" === this.anchor.key) {
      let e = $$r$68();
      $$e$25().splice(this.anchor.offset, 0, [e]);
      e.select();
      return e;
    }
    let e = rh(this);
    let t = tv(this.anchor.getNode(), tb);
    $$rU57(t) || eI(136);
    let n = t.getChildAtIndex(e);
    let r = n ? [n, ...n.getNextSiblings()] : [];
    let i = t.insertNewAfter(this, !1);
    return i ? (i.append(...r), i.selectStart(), i) : null;
  }
  insertLineBreak(e) {
    let t = $$nv37();
    if (this.insertNodes([t]), e) {
      let e = t.getParentOrThrow();
      let n = t.getIndexWithinParent();
      e.select(n, n);
    }
  }
  extract() {
    let e = this.getNodes();
    let t = e.length;
    let n = t - 1;
    let r = this.anchor;
    let i = this.focus;
    let A = e[0];
    let o = e[n];
    let [s, a] = $$n98(this);
    if (0 === t) return [];
    if (1 === t) {
      if ($$nK67(A) && !this.isCollapsed()) {
        let e = s > a ? a : s;
        let t = A.splitText(e, s > a ? s : a);
        let n = 0 === e ? t[0] : t[1];
        return null != n ? [n] : [];
      }
      return [A];
    }
    let l = r.isBefore(i);
    if ($$nK67(A)) {
      let t = l ? s : a;
      t === A.getTextContentSize() ? e.shift() : 0 !== t && ([, A] = A.splitText(t), e[0] = A);
    }
    if ($$nK67(o)) {
      let t = o.getTextContent().length;
      let r = l ? a : s;
      0 === r ? e.pop() : r !== t && ([o] = o.splitText(r), e[n] = o);
    }
    return e;
  }
  modify(e, t, n) {
    let r = this.focus;
    let i = this.anchor;
    let A = "move" === e;
    let o = $$tl5(r, t);
    if ($$rz9(o) && !o.isIsolated()) {
      if (A && o.isKeyboardSelectable()) {
        let e = $$ro76();
        e.add(o.__key);
        return void $$e070(e);
      }
      let e = t ? o.getPreviousSibling() : o.getNextSibling();
      if ($$nK67(e)) {
        let n = e.__key;
        let o = t ? e.getTextContent().length : 0;
        r.set(n, o, "text");
        return void (A && i.set(n, o, "text"));
      }
      {
        let n;
        let s;
        let a = o.getParentOrThrow();
        $$rU57(e) ? (s = e.__key, n = t ? e.getChildrenSize() : 0) : (n = o.getIndexWithinParent(), s = a.__key, t || n++);
        r.set(s, n, "element");
        return void (A && i.set(s, n, "element"));
      }
    }
    let s = rw();
    let a = tm(s._window);
    if (!a) return;
    let l = s._blockCursorElement;
    let u = s._rootElement;
    if (null === u || null === l || !$$rU57(o) || o.isInline() || o.canBeEmpty() || tB(l, s, u), function (e, t, n, r) {
      e.modify(t, n, r);
    }(a, e, t ? "backward" : "forward", n), a.rangeCount > 0) {
      let e = a.getRangeAt(0);
      let n = this.anchor.getNode();
      let r = $$rK60(n) ? n : function (e) {
        let t = e.getParentOrThrow();
        for (; null !== t && !$$tp16(t);) t = t.getParentOrThrow();
        return t;
      }(n);
      if (this.applyDOMRange(e), this.dirty = !0, !A) {
        let n = this.getNodes();
        let i = [];
        let A = !1;
        for (let e = 0; e < n.length; e++) {
          let t = n[e];
          td(t, r) ? i.push(t) : A = !0;
        }
        if (A && i.length > 0) {
          if (t) {
            let e = i[0];
            $$rU57(e) ? e.selectStart() : e.getParentOrThrow().selectStart();
          } else {
            let e = i[i.length - 1];
            $$rU57(e) ? e.selectEnd() : e.getParentOrThrow().selectEnd();
          }
        }
        a.anchorNode === e.startContainer && a.anchorOffset === e.startOffset || function (e) {
          let t = e.focus;
          let n = e.anchor;
          let r = n.key;
          let i = n.offset;
          let A = n.type;
          $$n1(n, t.key, t.offset, t.type);
          $$n1(t, r, i, A);
          e._cachedNodes = null;
        }(this);
      }
    }
  }
  forwardDeletion(e, t, n) {
    if (!n && ("element" === e.type && $$rU57(t) && e.offset === t.getChildrenSize() || "text" === e.type && e.offset === t.getTextContentSize())) {
      let e = t.getParent();
      let n = t.getNextSibling() || e?.getNextSibling();
      if ($$rU57(n) && n.isShadowRoot()) return !0;
    }
    return !1;
  }
  deleteCharacter(e) {
    let t = this.isCollapsed();
    if (this.isCollapsed()) {
      let t = this.anchor;
      let n = t.getNode();
      if (this.forwardDeletion(t, n, e)) return;
      let r = this.focus;
      let A = $$tl5(r, e);
      if ($$rz9(A) && !A.isIsolated()) {
        if (A.isKeyboardSelectable() && $$rU57(n) && 0 === n.getChildrenSize()) {
          n.remove();
          let e = $$ro76();
          e.add(A.__key);
          $$e070(e);
        } else {
          A.remove();
          rw().dispatchCommand($$i24, void 0);
        }
        return;
      }
      if (!e && $$rU57(A) && $$rU57(n) && n.isEmpty()) {
        n.remove();
        return void A.selectStart();
      }
      if (this.modify("extend", e, "character"), this.isCollapsed()) {
        if (e && 0 === t.offset && ("element" === t.type ? t.getNode() : t.getNode().getParentOrThrow()).collapseAtStart(this)) return;
      } else {
        let i = "text" === r.type ? r.getNode() : null;
        if (n = "text" === t.type ? t.getNode() : null, null !== i && i.isSegmented()) {
          let t = r.offset;
          let A = i.getTextContentSize();
          if (i.is(n) || e && t !== A || !e && 0 !== t) return void n4(i, e, t);
        } else if (null !== n && n.isSegmented()) {
          let r = t.offset;
          let A = n.getTextContentSize();
          if (n.is(i) || e && 0 !== r || !e && r !== A) return void n4(n, e, r);
        }
        !function (e, t) {
          let n = e.anchor;
          let r = e.focus;
          let i = n.getNode();
          if (i === r.getNode() && "text" === n.type && "text" === r.type) {
            let e = n.offset;
            let A = r.offset;
            let o = e < A;
            let s = o ? e : A;
            let a = o ? A : e;
            let l = a - 1;
            s !== l && (e8(i.getTextContent().slice(s, a)) || (t ? r.offset = l : n.offset = l));
          }
        }(this, e);
      }
    }
    if (this.removeText(), e && !t && this.isCollapsed() && "element" === this.anchor.type && 0 === this.anchor.offset) {
      let e = this.anchor.getNode();
      e.isEmpty() && $$rK60(e.getParent()) && 0 === e.getIndexWithinParent() && e.collapseAtStart(this);
    }
  }
  deleteLine(e) {
    if (this.isCollapsed()) {
      let t = "element" === this.anchor.type;
      if (t && this.insertText(" "), this.modify("extend", e, "lineboundary"), 0 === (e ? this.focus : this.anchor).offset && this.modify("extend", e, "character"), t) {
        let t = e ? this.anchor : this.focus;
        t.set(t.key, t.offset + 1, t.type);
      }
    }
    this.removeText();
  }
  deleteWord(e) {
    if (this.isCollapsed()) {
      let t = this.anchor;
      let n = t.getNode();
      if (this.forwardDeletion(t, n, e)) return;
      this.modify("extend", e, "word");
    }
    this.removeText();
  }
  isBackward() {
    return this.focus.isBefore(this.anchor);
  }
  getStartEndPoints() {
    return [this.anchor, this.focus];
  }
}
export function $$n330(e) {
  return e instanceof n2;
}
function n5(e) {
  let t = e.offset;
  if ("text" === e.type) return t;
  let n = e.getNode();
  return t === n.getChildrenSize() ? n.getTextContent().length : 0;
}
export function $$n98(e) {
  let t = e.getStartEndPoints();
  if (null === t) return [0, 0];
  let [n, r] = t;
  return "element" === n.type && "element" === r.type && n.key === r.key && n.offset === r.offset ? [0, 0] : [n5(n), n5(r)];
}
function n4(e, t, n) {
  let r = e.getTextContent().split(/(?=\s)/g);
  let i = r.length;
  let A = 0;
  let o = 0;
  for (let e = 0; e < i; e++) {
    let s = e === i - 1;
    if (o = A, A += r[e].length, t && A === n || A > n || s) {
      r.splice(e, 1);
      s && (o = void 0);
      break;
    }
  }
  let s = r.join("").trim();
  "" === s ? e.remove() : (e.setTextContent(s), e.select(o, o));
}
function n7(e, t, n, r) {
  let i;
  let A = t;
  if (1 === e.nodeType) {
    let o = !1;
    let s = e.childNodes;
    let a = s.length;
    let l = r._blockCursorElement;
    A === a && (o = !0, A = a - 1);
    let u = s[A];
    let g = !1;
    if (u === l) {
      u = s[A + 1];
      g = !0;
    } else if (null !== l) {
      let n = l.parentNode;
      e === n && t > Array.prototype.indexOf.call(n.children, l) && A--;
    }
    if ($$nK67(i = $$e1(u))) A = e2(i, o);else {
      let r = $$e1(e);
      if (null === r) return null;
      if ($$rU57(r)) {
        A = Math.min(r.getChildrenSize(), A);
        let e = r.getChildAtIndex(A);
        if ($$rU57(e) && function (e, t, n) {
          let r = e.getParent();
          return null === n || null === r || !r.canBeEmpty() || r !== n.getNode();
        }(e, 0, n)) {
          let t = o ? e.getLastDescendant() : e.getFirstDescendant();
          r = null === t ? e : $$rU57(e = t) ? e : e.getParentOrThrow();
          A = 0;
        }
        $$nK67(e) ? (i = e, r = null, A = e2(e, o)) : e !== r && o && !g && A++;
      } else {
        let n = r.getIndexWithinParent();
        A = 0 === t && $$rz9(r) && $$e1(e) === r ? n : n + 1;
        r = r.getParentOrThrow();
      }
      if ($$rU57(r)) return n$(r.__key, A, "element");
    }
  } else i = $$e1(e);
  return $$nK67(i) ? n$(i.__key, A, "text") : null;
}
function re(e, t, n) {
  let r = e.offset;
  let i = e.getNode();
  if (0 === r) {
    let r = i.getPreviousSibling();
    let A = i.getParent();
    if (t) {
      if ((n || !t) && null === r && $$rU57(A) && A.isInline()) {
        let t = A.getPreviousSibling();
        $$nK67(t) && (e.key = t.__key, e.offset = t.getTextContent().length);
      }
    } else $$rU57(r) && !n && r.isInline() ? (e.key = r.__key, e.offset = r.getChildrenSize(), e.type = "element") : $$nK67(r) && (e.key = r.__key, e.offset = r.getTextContent().length);
  } else if (r === i.getTextContent().length) {
    let r = i.getNextSibling();
    let A = i.getParent();
    if (t && $$rU57(r) && r.isInline()) {
      e.key = r.__key;
      e.offset = 0;
      e.type = "element";
    } else if ((n || t) && null === r && $$rU57(A) && A.isInline() && !A.canInsertTextAfter()) {
      let t = A.getNextSibling();
      $$nK67(t) && (e.key = t.__key, e.offset = 0);
    }
  }
}
function rt(e, t, n) {
  if ("text" === e.type && "text" === t.type) {
    let r = e.isBefore(t);
    let i = e.is(t);
    re(e, r, i);
    re(t, !r, i);
    i && (t.key = e.key, t.offset = e.offset, t.type = e.type);
    let A = rw();
    if (A.isComposing() && A._compositionKey !== e.key && $$n815(n)) {
      let r = n.anchor;
      let i = n.focus;
      $$n1(e, r.key, r.offset, r.type);
      $$n1(t, i.key, i.offset, i.type);
    }
  }
}
function rn(e, t, n, r, i, A) {
  if (null === e || null === n || !$$eL22(i, e, n)) return null;
  let o = n7(e, t, $$n815(A) ? A.anchor : null, i);
  if (null === o) return null;
  let s = n7(n, r, $$n815(A) ? A.focus : null, i);
  if (null === s) return null;
  if ("element" === o.type && "element" === s.type) {
    let t = $$e1(e);
    let r = $$e1(n);
    if ($$rz9(t) && $$rz9(r)) return null;
  }
  rt(o, s, A);
  return [o, s];
}
export function $$rr90(e) {
  return $$rU57(e) && !e.isInline();
}
function $$ri(e, t, n, r, i, A) {
  let o = rD();
  let s = new n6(n$(e, t, i), n$(n, r, A), 0, "");
  s.dirty = !0;
  o._selection = s;
  return s;
}
export function $$rA83() {
  return new n6(n$("root", 0, "element"), n$("root", 0, "element"), 0, "");
}
export function $$ro76() {
  return new n2(new Set());
}
function rs(e, t, n, r) {
  let i;
  let A;
  let o;
  let s;
  let a = n._window;
  if (null === a) return null;
  let l = r || a.event;
  let u = l ? l.type : void 0;
  let g = "selectionchange" === u;
  let c = !eB && (g || "beforeinput" === u || "compositionstart" === u || "compositionend" === u || "click" === u && l && 3 === l.detail || "drop" === u || void 0 === u);
  if ($$n815(e) && !c) return e.clone();
  if (null === t) return null;
  if (i = t.anchorNode, A = t.focusNode, o = t.anchorOffset, s = t.focusOffset, g && $$n815(e) && !$$eL22(n, i, A)) return e.clone();
  let f = rn(i, o, A, s, n, e);
  if (null === f) return null;
  let [d, h] = f;
  return new n6(d, h, $$n815(e) ? e.format : 0, $$n815(e) ? e.style : "");
}
export function $$ra84() {
  return rD()._selection;
}
function rl() {
  return rw()._editorState._selection;
}
function ru(e, t, n, r = 1) {
  let i = e.anchor;
  let A = e.focus;
  let o = i.getNode();
  let s = A.getNode();
  if (!t.is(o) && !t.is(s)) return;
  let a = t.__key;
  if (e.isCollapsed()) {
    let t = i.offset;
    if (n <= t && r > 0 || n < t && r < 0) {
      let n = Math.max(0, t + r);
      i.set(a, n, "element");
      A.set(a, n, "element");
      rg(e);
    }
  } else {
    let o = e.isBackward();
    let s = o ? A : i;
    let l = s.getNode();
    let u = o ? i : A;
    let g = u.getNode();
    if (t.is(l)) {
      let e = s.offset;
      (n <= e && r > 0 || n < e && r < 0) && s.set(a, Math.max(0, e + r), "element");
    }
    if (t.is(g)) {
      let e = u.offset;
      (n <= e && r > 0 || n < e && r < 0) && u.set(a, Math.max(0, e + r), "element");
    }
  }
  rg(e);
}
function rg(e) {
  let t = e.anchor;
  let n = t.offset;
  let r = e.focus;
  let i = r.offset;
  let A = t.getNode();
  let o = r.getNode();
  if (e.isCollapsed()) {
    if (!$$rU57(A)) return;
    let e = A.getChildrenSize();
    let i = n >= e;
    let o = i ? A.getChildAtIndex(e - 1) : A.getChildAtIndex(n);
    if ($$nK67(o)) {
      let e = 0;
      i && (e = o.getTextContentSize());
      t.set(o.__key, e, "text");
      r.set(o.__key, e, "text");
    }
  } else {
    if ($$rU57(A)) {
      let e = A.getChildrenSize();
      let r = n >= e;
      let i = r ? A.getChildAtIndex(e - 1) : A.getChildAtIndex(n);
      if ($$nK67(i)) {
        let e = 0;
        r && (e = i.getTextContentSize());
        t.set(i.__key, e, "text");
      }
    }
    if ($$rU57(o)) {
      let e = o.getChildrenSize();
      let t = i >= e;
      let n = t ? o.getChildAtIndex(e - 1) : o.getChildAtIndex(i);
      if ($$nK67(n)) {
        let e = 0;
        t && (e = n.getTextContentSize());
        r.set(n.__key, e, "text");
      }
    }
  }
}
function rc(e, t, n, r, i) {
  let A = null;
  let o = 0;
  let s = null;
  null !== r ? (A = r.__key, $$nK67(r) ? (o = r.getTextContentSize(), s = "text") : $$rU57(r) && (o = r.getChildrenSize(), s = "element")) : null !== i && (A = i.__key, $$nK67(i) ? s = "text" : $$rU57(i) && (s = "element"));
  null !== A && null !== s ? e.set(A, o, s) : (-1 === (o = t.getIndexWithinParent()) && (o = n.getChildrenSize()), e.set(n.__key, o, "element"));
}
function rf(e, t, n, r, i) {
  "text" === e.type ? (e.key = n, t || (e.offset += i)) : e.offset > r.getIndexWithinParent() && (e.offset -= 1);
}
export function $$rd13(e) {
  let t = $$ra84() || rl();
  null === t && (t = $$e$25().selectEnd());
  t.insertNodes(e);
}
function rh(e) {
  let t = e;
  e.isCollapsed() || t.removeText();
  let n = $$ra84();
  $$n815(n) && (t = n);
  $$n815(t) || eI(161);
  let r = t.anchor;
  let i = r.getNode();
  let A = r.offset;
  for (; !tb(i);) [i, A] = function (e, t) {
    let n = e.getParent();
    if (!n) {
      let e = $$r$68();
      $$e$25().append(e);
      e.select();
      return [$$e$25(), 0];
    }
    if ($$nK67(e)) {
      let r = e.splitText(t);
      if (0 === r.length) return [n, e.getIndexWithinParent()];
      let i = 0 === t ? 0 : 1;
      return [n, r[0].getIndexWithinParent() + i];
    }
    if (!$$rU57(e) || 0 === t) return [n, e.getIndexWithinParent()];
    let r = e.getChildAtIndex(t);
    if (r) {
      let n = new n6(n$(e.__key, t, "element"), n$(e.__key, t, "element"), 0, "");
      let i = e.insertNewAfter(n);
      i && i.append(r, ...r.getNextSiblings());
    }
    return [n, e.getIndexWithinParent() + 1];
  }(i, A);
  return A;
}
let rp = null;
let rC = null;
let rI = !1;
let rE = !1;
let rB = 0;
let rm = {
  characterData: !0,
  childList: !0,
  subtree: !0
};
function ry() {
  return rI || null !== rp && rp._readOnly;
}
function r_() {
  rI && eI(13);
}
function rQ() {
  rB > 99 && eI(14);
}
function rD() {
  null === rp && eI(195, rb());
  return rp;
}
function rw() {
  null === rC && eI(196, rb());
  return rC;
}
function rb() {
  let e = 0;
  let t = new Set();
  let n = r9.version;
  if ("undefined" != typeof window) for (let r of document.querySelectorAll("[contenteditable]")) {
    let i = eO(r);
    if (eR(i)) e++;else if (i) {
      let e = String(i.constructor.version || "<0.17.1");
      e === n && (e += " (separately built, likely a bundler configuration issue)");
      t.add(e);
    }
  }
  let r = ` Detected on the page: ${e} compatible editor(s) with version ${n}`;
  t.size && (r += ` and incompatible editors with versions ${Array.from(t).join(", ")}`);
  return r;
}
function rv(e, t, n) {
  let r = t.__type;
  let i = function (e, t) {
    let n = e._nodes.get(t);
    void 0 === n && eI(30, t);
    return n;
  }(e, r);
  let A = n.get(r);
  void 0 === A && (A = Array.from(i.transforms), n.set(r, A));
  let o = A.length;
  for (let e = 0; e < o && (A[e](t), t.isAttached()); e++);
}
function rk(e, t) {
  return void 0 !== e && e.__key !== t && e.isAttached();
}
function rx(e, t) {
  if (!t) return;
  let n = e._updateTags;
  let r = t;
  for (let e of (Array.isArray(t) || (r = [t]), r)) n.add(e);
}
export function $$rS12(e) {
  return rF(e, rw()._nodes);
}
function rF(e, t) {
  let n = e.type;
  let r = t.get(n);
  void 0 === r && eI(17, n);
  let i = r.klass;
  e.type !== i.getType() && eI(18, i.name);
  let A = i.importJSON(e);
  let o = e.children;
  if ($$rU57(A) && Array.isArray(o)) for (let e = 0; e < o.length; e++) {
    let n = rF(o[e], t);
    A.append(n);
  }
  return A;
}
function rN(e, t, n) {
  let r = rp;
  let i = rI;
  let A = rC;
  rp = t;
  rI = !0;
  rC = e;
  try {
    return n();
  } finally {
    rp = r;
    rI = i;
    rC = A;
  }
}
function rT(e, t) {
  let n = e._pendingEditorState;
  let r = e._rootElement;
  let A = e._headless || null === r;
  if (null === n) return;
  let o = e._editorState;
  let s = o._selection;
  let a = n._selection;
  let l = 0 !== e._dirtyType;
  let u = rp;
  let g = rI;
  let c = rC;
  let f = e._updating;
  let d = e._observer;
  let h = null;
  if (e._pendingEditorState = null, e._editorState = n, !A && l && null !== d) {
    rC = e;
    rp = n;
    rI = !1;
    e._updating = !0;
    try {
      let t = e._dirtyType;
      let r = e._dirtyElements;
      let i = e._dirtyLeaves;
      d.disconnect();
      h = function (e, t, n, r, i, A) {
        tz = "";
        tY = "";
        tH = "";
        tW = 2 === r;
        tZ = null;
        tL = n;
        tT = n._config;
        tR = n._nodes;
        tM = tL._listeners.mutation;
        tO = i;
        tG = A;
        tP = e._nodeMap;
        tU = t._nodeMap;
        tV = t._readOnly;
        tq = new Map(n._keyToDOMMap);
        let o = new Map();
        tJ = o;
        (function e(t, n) {
          let r = tP.get(t);
          let i = tU.get(t);
          void 0 !== r && void 0 !== i || eI(61);
          let A = tW || tG.has(t) || tO.has(t);
          let o = tc(tL, t);
          if (r === i && !A) {
            if ($$rU57(r)) {
              let e = o.__lexicalTextContent;
              void 0 !== e && (tz += e, tY += e);
              let t = o.__lexicalDirTextContent;
              void 0 !== t && (tH += t);
            } else {
              let e = r.getTextContent();
              $$nK67(r) && !r.isDirectionless() && (tH += e);
              tY += e;
              tz += e;
            }
            return o;
          }
          if (r !== i && A && to(tJ, tR, tM, i, "updated"), i.updateDOM(r, o, tT)) {
            let e = t8(t, null, null);
            null === n && eI(62);
            n.replaceChild(e, o);
            t$(t, null);
            return e;
          }
          if ($$rU57(r) && $$rU57(i)) {
            let t = i.__indent;
            t !== r.__indent && t1(o, t);
            let n = i.__format;
            n !== r.__format && t2(o, n);
            A && (function (t, n, r) {
              let i = tH;
              tH = "";
              tK = null;
              tj = "";
              (function (t, n, r) {
                let i = tz;
                let A = t.__size;
                let o = n.__size;
                if (tz = "", 1 === A && 1 === o) {
                  let i = t.__first;
                  let A = n.__first;
                  if (i === A) e(i, r);else {
                    let e = nt(i);
                    let t = t8(A, null, null);
                    try {
                      r.replaceChild(t, e);
                    } catch (n) {
                      if ("object" == typeof n && null != n) throw Error(`${n.toString()} Parent: ${r.tagName}, new child: {tag: ${t.tagName} key: ${A}}, old child: {tag: ${e.tagName}, key: ${i}}.`);
                      throw n;
                    }
                    t$(i, null);
                  }
                  let o = tU.get(A);
                  $$nK67(o) && (null === tK && (tK = o.getFormat()), "" === tj && (tj = o.getStyle()));
                } else {
                  let i = t4(t, tP);
                  let s = t4(n, tU);
                  if (0 === A) 0 !== o && t6(s, n, 0, o - 1, r, null);else if (0 === o) {
                    if (0 !== A) {
                      let e = null == r.__lexicalLineBreak;
                      tX(i, 0, A - 1, e ? null : r);
                      e && (r.textContent = "");
                    }
                  } else !function (t, n, r, i, A, o) {
                    let s = i - 1;
                    let a = A - 1;
                    let l;
                    let u;
                    let g = o.firstChild;
                    let c = 0;
                    let f = 0;
                    for (; c <= s && f <= a;) {
                      let t = n[c];
                      let i = r[f];
                      if (t === i) {
                        g = ne(e(i, o));
                        c++;
                        f++;
                      } else {
                        void 0 === l && (l = new Set(n));
                        void 0 === u && (u = new Set(r));
                        let A = u.has(t);
                        let s = l.has(i);
                        if (A) {
                          if (s) {
                            let t = tc(tL, i);
                            t === g ? g = ne(e(i, o)) : (null != g ? o.insertBefore(t, g) : o.appendChild(t), e(i, o));
                            c++;
                            f++;
                          } else {
                            t8(i, o, g);
                            f++;
                          }
                        } else {
                          g = ne(nt(t));
                          t$(t, o);
                          c++;
                        }
                      }
                      let A = tU.get(i);
                      null !== A && $$nK67(A) && (null === tK && (tK = A.getFormat()), "" === tj && (tj = A.getStyle()));
                    }
                    let d = c > s;
                    let h = f > a;
                    if (d && !h) {
                      let e = r[a + 1];
                      t6(r, t, f, a, o, void 0 === e ? null : tL.getElementByKey(e));
                    } else h && !d && tX(n, c, s, o);
                  }(n, i, s, A, o, r);
                }
                tg(n) && (tz += "\n\n");
                r.__lexicalTextContent = tz;
                tz = i + tz;
              })(t, n, r);
              t9(n, r);
              $$rX48(n) && null != tK && tK !== n.__textFormat && !tV && (n.setTextFormat(tK), n.setTextStyle(tj));
              $$rX48(n) && "" !== tj && tj !== n.__textStyle && !tV && n.setTextStyle(tj);
              tH = i;
            }(r, i, o), $$rK60(i) || i.isInline() || $$t5(r, i, o));
            tg(i) && (tz += "\n\n", tY += "\n\n");
          } else {
            let e = i.getTextContent();
            if ($$rz9(i)) {
              let e = i.decorate(tL, tT);
              null !== e && t7(t, e);
            } else $$nK67(i) && !i.isDirectionless() && (tH += e);
            tz += e;
            tY += e;
          }
          if (!tV && $$rK60(i) && i.__cachedText !== tY) {
            let e = i.getWritable();
            e.__cachedText = tY;
            i = e;
          }
          return o;
        })("root", null);
        tL = void 0;
        tR = void 0;
        tO = void 0;
        tG = void 0;
        tP = void 0;
        tU = void 0;
        tT = void 0;
        tq = void 0;
        tJ = void 0;
        return o;
      }(o, n, e, t, r, i);
    } catch (t) {
      if (t instanceof Error && e._onError(t), rE) throw t;
      r3(e, null, r, n);
      ew(e);
      e._dirtyType = 2;
      rE = !0;
      rT(e, o);
      return void (rE = !1);
    } finally {
      d.observe(r, rm);
      e._updating = f;
      rp = u;
      rI = g;
      rC = c;
    }
  }
  n._readOnly || (n._readOnly = !0);
  let p = e._dirtyLeaves;
  let C = e._dirtyElements;
  let I = e._normalizedNodes;
  let E = e._updateTags;
  let B = e._deferred;
  l && (e._dirtyType = 0, e._cloneNotNeeded.clear(), e._dirtyLeaves = new Set(), e._dirtyElements = new Map(), e._normalizedNodes = new Set(), e._updateTags = new Set());
  (function (e, t) {
    let n;
    let r = e._decorators;
    let i = e._pendingDecorators || r;
    let A = t._nodeMap;
    for (n in i) A.has(n) || (i === r && (i = eV(e)), delete i[n]);
  })(e, n);
  let m = A ? null : tm(e._window);
  if (e._editable && null !== m && (l || a.dirty)) {
    rC = e;
    rp = n;
    try {
      if (null !== d && d.disconnect(), l || a.dirty) {
        let t = e._blockCursorElement;
        null !== t && tB(t, e, r);
        (function (e, t, n, r, i, A, o) {
          let s = r.anchorNode;
          let a = r.focusNode;
          let l = r.anchorOffset;
          let u = r.focusOffset;
          let g = document.activeElement;
          if (i.has("collaboration") && g !== A || null !== g && $$eT43(g)) return;
          if (!$$n815(t)) return void (null !== e && $$eL22(n, s, a) && r.removeAllRanges());
          let c = t.anchor;
          let f = t.focus;
          let d = c.key;
          let h = f.key;
          let p = tc(n, d);
          let C = tc(n, h);
          let I = c.offset;
          let E = f.offset;
          let B = t.format;
          let m = t.style;
          let y = t.isCollapsed();
          let _ = p;
          let Q = C;
          let D = !1;
          if ("text" === c.type) {
            _ = eP(p);
            let e = c.getNode();
            D = e.getFormat() !== B || e.getStyle() !== m;
          } else $$n815(e) && "text" === e.anchor.type && (D = !0);
          if ("text" === f.type && (Q = eP(C)), null !== _ && null !== Q && (y && (null === e || D || $$n815(e) && (e.format !== B || e.style !== m)) && (nf = [B, m, I, d, performance.now()]), l !== I || u !== E || s !== _ || a !== Q || "Range" === r.type && y || (null !== g && A.contains(g) || A.focus({
            preventScroll: !0
          }), "element" === c.type))) {
            try {
              r.setBaseAndExtent(_, I, Q, E);
            } catch (e) {}
            if (!i.has("skip-scroll-into-view") && t.isCollapsed() && null !== A && A === document.activeElement) {
              let e = t instanceof n6 && "element" === t.anchor.type ? _.childNodes[I] || null : r.rangeCount > 0 ? r.getRangeAt(0) : null;
              if (null !== e) {
                let t;
                if (e instanceof Text) {
                  let n = document.createRange();
                  n.selectNode(e);
                  t = n.getBoundingClientRect();
                } else t = e.getBoundingClientRect();
                !function (e, t, n) {
                  let r = n.ownerDocument;
                  let i = r.defaultView;
                  if (null === i) return;
                  let {
                    top,
                    bottom
                  } = t;
                  let s = 0;
                  let a = 0;
                  let l = n;
                  for (; null !== l;) {
                    let t = l === r.body;
                    if (t) {
                      s = 0;
                      a = th(e).innerHeight;
                    } else {
                      let e = l.getBoundingClientRect();
                      s = e.top;
                      a = e.bottom;
                    }
                    let n = 0;
                    if (top < s ? n = -(s - top) : bottom > a && (n = bottom - a), 0 !== n) {
                      if (t) i.scrollBy(0, n);else {
                        let e = l.scrollTop;
                        l.scrollTop += n;
                        let t = l.scrollTop - e;
                        A -= t;
                        o -= t;
                      }
                    }
                    if (t) break;
                    l = tf(l);
                  }
                }(n, t, A);
              }
            }
            nl = !0;
          }
        })(s, a, e, m, E, r);
      }
      (function (e, t, n) {
        let r = e._blockCursorElement;
        if ($$n815(n) && n.isCollapsed() && "element" === n.anchor.type && t.contains(document.activeElement)) {
          let i = n.anchor;
          let A = i.getNode();
          let o = i.offset;
          let s = !1;
          let a = null;
          if (o === A.getChildrenSize()) tE(A.getChildAtIndex(o - 1)) && (s = !0);else {
            let t = A.getChildAtIndex(o);
            if (tE(t)) {
              let n = t.getPreviousSibling();
              (null === n || tE(n)) && (s = !0, a = e.getElementByKey(t.__key));
            }
          }
          if (s) {
            let n = e.getElementByKey(A.__key);
            null === r && (e._blockCursorElement = r = function (e) {
              let t = e.theme;
              let n = document.createElement("div");
              n.contentEditable = "false";
              n.setAttribute("data-lexical-cursor", "true");
              let r = t.blockCursor;
              if (void 0 !== r) {
                if ("string" == typeof r) {
                  let e = eE(r);
                  r = t.blockCursor = e;
                }
                void 0 !== r && n.classList.add(...r);
              }
              return n;
            }(e._config));
            t.style.caretColor = "transparent";
            return void (null === a ? n.appendChild(r) : n.insertBefore(r, a));
          }
        }
        null !== r && tB(r, e, t);
      })(e, r, a);
      null !== d && d.observe(r, rm);
    } finally {
      rC = c;
      rp = u;
    }
  }
  null !== h && function (e, t, n, r, i) {
    let A = Array.from(e._listeners.mutation);
    let o = A.length;
    for (let e = 0; e < o; e++) {
      let [o, s] = A[e];
      let a = t.get(s);
      void 0 !== a && o(a, {
        dirtyLeaves: r,
        prevEditorState: i,
        updateTags: n
      });
    }
  }(e, h, E, p, o);
  $$n815(a) || null === a || null !== s && s.is(a) || e.dispatchCommand($$i24, void 0);
  let y = e._pendingDecorators;
  null !== y && (e._decorators = y, e._pendingDecorators = null, rL("decorator", e, !0, y));
  (function (e, t, n) {
    let r = eZ(t);
    let i = eZ(n);
    r !== i && rL("textcontent", e, !0, i);
  })(e, t || o, n);
  rL("update", e, !0, {
    dirtyElements: C,
    dirtyLeaves: p,
    editorState: n,
    normalizedNodes: I,
    prevEditorState: t || o,
    tags: E
  });
  (function (e, t) {
    if (e._deferred = [], 0 !== t.length) {
      let n = e._updating;
      e._updating = !0;
      try {
        for (let e = 0; e < t.length; e++) t[e]();
      } finally {
        e._updating = n;
      }
    }
  })(e, B);
  (function (e) {
    let t = e._updates;
    if (0 !== t.length) {
      let n = t.shift();
      if (n) {
        let [t, r] = n;
        rO(e, t, r);
      }
    }
  })(e);
}
function rL(e, t, n, ...r) {
  let i = t._updating;
  t._updating = n;
  try {
    let n = Array.from(t._listeners[e]);
    for (let e = 0; e < n.length; e++) n[e].apply(null, r);
  } finally {
    t._updating = i;
  }
}
function rR(e, t, n) {
  if (!1 === e._updating || rC !== e) {
    let r = !1;
    e.update(() => {
      r = rR(e, t, n);
    });
    return r;
  }
  let r = e6(e);
  for (let i = 4; i >= 0; i--) for (let A = 0; A < r.length; A++) {
    let o = r[A]._commands.get(t);
    if (void 0 !== o) {
      let t = o[i];
      if (void 0 !== t) {
        let r = Array.from(t);
        let i = r.length;
        for (let t = 0; t < i; t++) if (!0 === r[t](n, e)) return !0;
      }
    }
  }
  return !1;
}
function rM(e, t) {
  let n = e._updates;
  let r = t || !1;
  for (; 0 !== n.length;) {
    let t = n.shift();
    if (t) {
      let n;
      let [i, A] = t;
      if (void 0 !== A) {
        if (n = A.onUpdate, A.skipTransforms && (r = !0), A.discrete) {
          let t = e._pendingEditorState;
          null === t && eI(191);
          t._flushSync = !0;
        }
        n && e._deferred.push(n);
        rx(e, A.tag);
      }
      i();
    }
  }
  return r;
}
function rO(e, t, n) {
  let r = e._updateTags;
  let i;
  let A = !1;
  let o = !1;
  void 0 !== n && (i = n.onUpdate, rx(e, n.tag), A = n.skipTransforms || !1, o = n.discrete || !1);
  i && e._deferred.push(i);
  let s = e._editorState;
  let a = e._pendingEditorState;
  let l = !1;
  a?._readOnly && (a = e._pendingEditorState = new rY(new Map((a || s)._nodeMap)), l = !0);
  a._flushSync = o;
  let u = rp;
  let g = rI;
  let c = rC;
  let f = e._updating;
  rp = a;
  rI = !1;
  e._updating = !0;
  rC = e;
  try {
    l && (e._headless ? null !== s._selection && (a._selection = s._selection.clone()) : a._selection = function (e) {
      let t = e.getEditorState()._selection;
      let n = tm(e._window);
      return $$n815(t) || null == t ? rs(t, n, e, null) : t.clone();
    }(e));
    let n = e._compositionKey;
    t();
    A = rM(e, A);
    (function (e, t) {
      let n = t.getEditorState()._selection;
      let r = e._selection;
      if ($$n815(r)) {
        let e;
        let t = r.anchor;
        let i = r.focus;
        if ("text" === t.type && (e = t.getNode()).selectionTransform(n, r), "text" === i.type) {
          let t = i.getNode();
          e !== t && t.selectionTransform(n, r);
        }
      }
    })(a, e);
    0 !== e._dirtyType && (A ? function (e, t) {
      let n = t._dirtyLeaves;
      let r = e._nodeMap;
      for (let e of n) {
        let t = r.get(e);
        $$nK67(t) && t.isAttached() && t.isSimpleText() && !t.isUnmergeable() && ek(t);
      }
    }(a, e) : function (e, t) {
      let n = t._dirtyLeaves;
      let r = t._dirtyElements;
      let i = e._nodeMap;
      let A = eK();
      let o = new Map();
      let s = n;
      let a = s.size;
      let l = r;
      let u = l.size;
      for (; a > 0 || u > 0;) {
        if (a > 0) {
          for (let e of (t._dirtyLeaves = new Set(), s)) {
            let r = i.get(e);
            $$nK67(r) && r.isAttached() && r.isSimpleText() && !r.isUnmergeable() && ek(r);
            void 0 !== r && rk(r, A) && rv(t, r, o);
            n.add(e);
          }
          if ((a = (s = t._dirtyLeaves).size) > 0) {
            rB++;
            continue;
          }
        }
        for (let e of (t._dirtyLeaves = new Set(), t._dirtyElements = new Map(), l)) {
          let n = e[0];
          let s = e[1];
          if ("root" !== n && !s) continue;
          let a = i.get(n);
          void 0 !== a && rk(a, A) && rv(t, a, o);
          r.set(n, s);
        }
        a = (s = t._dirtyLeaves).size;
        u = (l = t._dirtyElements).size;
        rB++;
      }
      t._dirtyLeaves = n;
      t._dirtyElements = r;
    }(a, e), rM(e), function (e, t, n, r) {
      let i = e._nodeMap;
      let A = t._nodeMap;
      let o = [];
      for (let [e] of r) {
        let t = A.get(e);
        void 0 !== t && (t.isAttached() || ($$rU57(t) && function e(t, n, r, i, A, o) {
          let s = t.getFirstChild();
          for (; null !== s;) {
            let t = s.__key;
            s.__parent === n && ($$rU57(s) && e(s, t, r, i, A, o), r.has(t) || o.$$delete(t), A.push(t));
            s = s.getNextSibling();
          }
        }(t, e, i, A, o, r), i.has(e) || r.$$delete(e), o.push(e)));
      }
      for (let e of o) A.$$delete(e);
      for (let e of n) {
        let t = A.get(e);
        t?.isAttached() || (i.has(e) || n.$$delete(e), A.$$delete(e));
      }
    }(s, a, e._dirtyLeaves, e._dirtyElements));
    n !== e._compositionKey && (a._flushSync = !0);
    let r = a._selection;
    if ($$n815(r)) {
      let e = a._nodeMap;
      let t = r.anchor.key;
      let n = r.focus.key;
      void 0 !== e.get(t) && void 0 !== e.get(n) || eI(19);
    } else $$n330(r) && 0 === r._nodes.size && (a._selection = null);
  } catch (t) {
    t instanceof Error && e._onError(t);
    e._pendingEditorState = s;
    e._dirtyType = 2;
    e._cloneNotNeeded.clear();
    e._dirtyLeaves = new Set();
    e._dirtyElements.clear();
    return void rT(e);
  } finally {
    rp = u;
    rI = g;
    rC = c;
    e._updating = f;
    rB = 0;
  }
  0 !== e._dirtyType || function (e, t) {
    let n = t.getEditorState()._selection;
    let r = e._selection;
    if (null !== r) {
      if (r.dirty || !r.is(n)) return !0;
    } else if (null !== n) return !0;
    return !1;
  }(a, e) ? a._flushSync ? (a._flushSync = !1, rT(e)) : l && eN(() => {
    rT(e);
  }) : (a._flushSync = !1, l && (r.clear(), e._deferred = [], e._pendingEditorState = null));
}
function rG(e, t, n) {
  e._updating ? e._updates.push([t, n]) : rO(e, t, n);
}
export class $$rP55 extends nD {
  constructor(e) {
    super(e);
    this.__first = null;
    this.__last = null;
    this.__size = 0;
    this.__format = 0;
    this.__style = "";
    this.__indent = 0;
    this.__dir = null;
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e);
    this.__first = e.__first;
    this.__last = e.__last;
    this.__size = e.__size;
    this.__indent = e.__indent;
    this.__format = e.__format;
    this.__style = e.__style;
    this.__dir = e.__dir;
  }
  getFormat() {
    return this.getLatest().__format;
  }
  getFormatType() {
    return eh[this.getFormat()] || "";
  }
  getStyle() {
    return this.getLatest().__style;
  }
  getIndent() {
    return this.getLatest().__indent;
  }
  getChildren() {
    let e = [];
    let t = this.getFirstChild();
    for (; null !== t;) {
      e.push(t);
      t = t.getNextSibling();
    }
    return e;
  }
  getChildrenKeys() {
    let e = [];
    let t = this.getFirstChild();
    for (; null !== t;) {
      e.push(t.__key);
      t = t.getNextSibling();
    }
    return e;
  }
  getChildrenSize() {
    return this.getLatest().__size;
  }
  isEmpty() {
    return 0 === this.getChildrenSize();
  }
  isDirty() {
    let e = rw()._dirtyElements;
    return null !== e && e.has(this.__key);
  }
  isLastChild() {
    let e = this.getLatest();
    let t = this.getParentOrThrow().getLastChild();
    return null !== t && t.is(e);
  }
  getAllTextNodes() {
    let e = [];
    let t = this.getFirstChild();
    for (; null !== t;) {
      if ($$nK67(t) && e.push(t), $$rU57(t)) {
        let n = t.getAllTextNodes();
        e.push(...n);
      }
      t = t.getNextSibling();
    }
    return e;
  }
  getFirstDescendant() {
    let e = this.getFirstChild();
    for (; $$rU57(e);) {
      let t = e.getFirstChild();
      if (null === t) break;
      e = t;
    }
    return e;
  }
  getLastDescendant() {
    let e = this.getLastChild();
    for (; $$rU57(e);) {
      let t = e.getLastChild();
      if (null === t) break;
      e = t;
    }
    return e;
  }
  getDescendantByIndex(e) {
    let t = this.getChildren();
    let n = t.length;
    if (e >= n) {
      let e = t[n - 1];
      return $$rU57(e) && e.getLastDescendant() || e || null;
    }
    let r = t[e];
    return $$rU57(r) && r.getFirstDescendant() || r || null;
  }
  getFirstChild() {
    let e = this.getLatest().__first;
    return null === e ? null : $$ej72(e);
  }
  getFirstChildOrThrow() {
    let e = this.getFirstChild();
    null === e && eI(45, this.__key);
    return e;
  }
  getLastChild() {
    let e = this.getLatest().__last;
    return null === e ? null : $$ej72(e);
  }
  getLastChildOrThrow() {
    let e = this.getLastChild();
    null === e && eI(96, this.__key);
    return e;
  }
  getChildAtIndex(e) {
    let t;
    let n;
    let r = this.getChildrenSize();
    if (e < r / 2) {
      for (t = this.getFirstChild(), n = 0; null !== t && n <= e;) {
        if (n === e) return t;
        t = t.getNextSibling();
        n++;
      }
      return null;
    }
    for (t = this.getLastChild(), n = r - 1; null !== t && n >= e;) {
      if (n === e) return t;
      t = t.getPreviousSibling();
      n--;
    }
    return null;
  }
  getTextContent() {
    let e = "";
    let t = this.getChildren();
    let n = t.length;
    for (let r = 0; r < n; r++) {
      let i = t[r];
      e += i.getTextContent();
      $$rU57(i) && r !== n - 1 && !i.isInline() && (e += "\n\n");
    }
    return e;
  }
  getTextContentSize() {
    let e = 0;
    let t = this.getChildren();
    let n = t.length;
    for (let r = 0; r < n; r++) {
      let i = t[r];
      e += i.getTextContentSize();
      $$rU57(i) && r !== n - 1 && !i.isInline() && (e += 2);
    }
    return e;
  }
  getDirection() {
    return this.getLatest().__dir;
  }
  hasFormat(e) {
    if ("" !== e) {
      let t = ed[e];
      return !!(this.getFormat() & t);
    }
    return !1;
  }
  select(e, t) {
    r_();
    let n = $$ra84();
    let r = e;
    let i = t;
    let A = this.getChildrenSize();
    if (!this.canBeEmpty()) {
      if (0 === e && 0 === t) {
        let e = this.getFirstChild();
        if ($$nK67(e) || $$rU57(e)) return e.select(0, 0);
      } else if (!(void 0 !== e && e !== A || void 0 !== t && t !== A)) {
        let e = this.getLastChild();
        if ($$nK67(e) || $$rU57(e)) return e.select();
      }
    }
    void 0 === r && (r = A);
    void 0 === i && (i = A);
    let o = this.__key;
    return $$n815(n) ? (n.anchor.set(o, r, "element"), n.focus.set(o, i, "element"), n.dirty = !0, n) : $$ri(o, r, o, i, "element", "element");
  }
  selectStart() {
    let e = this.getFirstDescendant();
    return e ? e.selectStart() : this.select();
  }
  selectEnd() {
    let e = this.getLastDescendant();
    return e ? e.selectEnd() : this.select();
  }
  clear() {
    let e = this.getWritable();
    this.getChildren().forEach(e => e.remove());
    return e;
  }
  append(...e) {
    return this.splice(this.getChildrenSize(), 0, e);
  }
  setDirection(e) {
    let t = this.getWritable();
    t.__dir = e;
    return t;
  }
  setFormat(e) {
    this.getWritable().__format = "" !== e ? ed[e] : 0;
    return this;
  }
  setStyle(e) {
    this.getWritable().__style = e || "";
    return this;
  }
  setIndent(e) {
    this.getWritable().__indent = e;
    return this;
  }
  splice(e, t, n) {
    let r = n.length;
    let i = this.getChildrenSize();
    let A = this.getWritable();
    let o = A.__key;
    let s = [];
    let a = [];
    let l = this.getChildAtIndex(e + t);
    let u = null;
    let g = i - t + r;
    if (0 !== e) {
      if (e === i) u = this.getLastChild();else {
        let t = this.getChildAtIndex(e);
        null !== t && (u = t.getPreviousSibling());
      }
    }
    if (t > 0) {
      let e = u?.getNextSibling();
      for (let n = 0; n < t; n++) {
        null === e && eI(100);
        let t = e.getNextSibling();
        let n = e.__key;
        eJ(e.getWritable());
        a.push(n);
        e = t;
      }
    }
    let c = u;
    for (let e = 0; e < r; e++) {
      let t = n[e];
      null !== c && t.is(c) && (u = c = c.getPreviousSibling());
      let r = t.getWritable();
      r.__parent === o && g--;
      eJ(r);
      let i = t.__key;
      if (null === c) {
        A.__first = i;
        r.__prev = null;
      } else {
        let e = c.getWritable();
        e.__next = i;
        r.__prev = e.__key;
      }
      t.__key === o && eI(76);
      r.__parent = o;
      s.push(i);
      c = t;
    }
    if (e + t === i) null !== c && (c.getWritable().__next = null, A.__last = c.__key);else if (null !== l) {
      let e = l.getWritable();
      if (null !== c) {
        let t = c.getWritable();
        e.__prev = c.__key;
        t.__next = l.__key;
      } else e.__prev = null;
    }
    if (A.__size = g, a.length) {
      let e = $$ra84();
      if ($$n815(e)) {
        let t = new Set(a);
        let n = new Set(s);
        let {
          anchor,
          focus
        } = e;
        rq(anchor, t, n) && rc(anchor, anchor.getNode(), this, u, l);
        rq(focus, t, n) && rc(focus, focus.getNode(), this, u, l);
        0 !== g || this.canBeEmpty() || $$tp16(this) || this.remove();
      }
    }
    return A;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "element",
      version: 1
    };
  }
  insertNewAfter(e, t) {
    return null;
  }
  canIndent() {
    return !0;
  }
  collapseAtStart(e) {
    return !1;
  }
  excludeFromCopy(e) {
    return !1;
  }
  canReplaceWith(e) {
    return !0;
  }
  canInsertAfter(e) {
    return !0;
  }
  canBeEmpty() {
    return !0;
  }
  canInsertTextBefore() {
    return !0;
  }
  canInsertTextAfter() {
    return !0;
  }
  isInline() {
    return !1;
  }
  isShadowRoot() {
    return !1;
  }
  canMergeWith(e) {
    return !1;
  }
  extractWithChild(e, t, n) {
    return !1;
  }
  canMergeWhenEmpty() {
    return !1;
  }
}
export function $$rU57(e) {
  return e instanceof $$rP55;
}
function rq(e, t, n) {
  let r = e.getNode();
  for (; r;) {
    let e = r.__key;
    if (t.has(e) && !n.has(e)) return !0;
    r = r.getParent();
  }
  return !1;
}
export class $$rJ21 extends nD {
  constructor(e) {
    super(e);
  }
  decorate(e, t) {
    eI(47);
  }
  isIsolated() {
    return !1;
  }
  isInline() {
    return !0;
  }
  isKeyboardSelectable() {
    return !0;
  }
}
export function $$rz9(e) {
  return e instanceof $$rJ21;
}
class rH extends $$rP55 {
  static getType() {
    return "root";
  }
  static clone() {
    return new rH();
  }
  constructor() {
    super("root");
    this.__cachedText = null;
  }
  getTopLevelElementOrThrow() {
    eI(51);
  }
  getTextContent() {
    let e = this.__cachedText;
    return (ry() || 0 === rw()._dirtyType) && null !== e ? e : super.getTextContent();
  }
  remove() {
    eI(52);
  }
  replace(e) {
    eI(53);
  }
  insertBefore(e) {
    eI(54);
  }
  insertAfter(e) {
    eI(55);
  }
  updateDOM(e, t) {
    return !1;
  }
  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t];
      $$rU57(n) || $$rz9(n) || eI(56);
    }
    return super.append(...e);
  }
  static importJSON(e) {
    let t = $$e$25();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    return t;
  }
  exportJSON() {
    return {
      children: [],
      direction: this.getDirection(),
      format: this.getFormatType(),
      indent: this.getIndent(),
      type: "root",
      version: 1
    };
  }
  collapseAtStart() {
    return !0;
  }
}
export function $$rK60(e) {
  return e instanceof rH;
}
function rj() {
  return new rY(new Map([["root", new rH()]]));
}
class rY {
  constructor(e, t) {
    this._nodeMap = e;
    this._selection = t || null;
    this._flushSync = !1;
    this._readOnly = !1;
  }
  isEmpty() {
    return 1 === this._nodeMap.size && null === this._selection;
  }
  read(e, t) {
    return rN(t && t.editor || null, this, e);
  }
  clone(e) {
    let t = new rY(this._nodeMap, void 0 === e ? this._selection : e);
    t._readOnly = !0;
    return t;
  }
  toJSON() {
    return rN(null, this, () => ({
      root: function e(t) {
        let n = t.exportJSON();
        let r = t.constructor;
        if (n.type !== r.getType() && eI(130, r.name), $$rU57(t)) {
          let i = n.children;
          Array.isArray(i) || eI(59, r.name);
          let A = t.getChildren();
          for (let t = 0; t < A.length; t++) {
            let n = e(A[t]);
            i.push(n);
          }
        }
        return n;
      }($$e$25())
    }));
  }
}
export class $$rW2 extends $$rP55 {
  static getType() {
    return "artificial";
  }
  createDOM(e) {
    return document.createElement("div");
  }
}
class rV extends $$rP55 {
  constructor(e) {
    super(e);
    this.__textFormat = 0;
    this.__textStyle = "";
  }
  static getType() {
    return "paragraph";
  }
  getTextFormat() {
    return this.getLatest().__textFormat;
  }
  setTextFormat(e) {
    let t = this.getWritable();
    t.__textFormat = e;
    return t;
  }
  hasTextFormat(e) {
    let t = ec[e];
    return !!(this.getTextFormat() & t);
  }
  getFormatFlags(e, t) {
    return eU(this.getLatest().__textFormat, e, t);
  }
  getTextStyle() {
    return this.getLatest().__textStyle;
  }
  setTextStyle(e) {
    let t = this.getWritable();
    t.__textStyle = e;
    return t;
  }
  static clone(e) {
    return new rV(e.__key);
  }
  afterCloneFrom(e) {
    super.afterCloneFrom(e);
    this.__textFormat = e.__textFormat;
    this.__textStyle = e.__textStyle;
  }
  createDOM(e) {
    let t = document.createElement("p");
    let n = tA(e.theme, "paragraph");
    void 0 !== n && t.classList.add(...n);
    return t;
  }
  updateDOM(e, t, n) {
    return !1;
  }
  static importDOM() {
    return {
      p: e => ({
        conversion: rZ,
        priority: 0
      })
    };
  }
  exportDOM(e) {
    let {
      element
    } = super.exportDOM(e);
    if (element && $$t_79(element)) {
      this.isEmpty() && element.append(document.createElement("br"));
      let e = this.getFormatType();
      element.style.textAlign = e;
      let n = this.getDirection();
      n && (element.dir = n);
      let r = this.getIndent();
      r > 0 && (element.style.textIndent = 20 * r + "px");
    }
    return {
      element
    };
  }
  static importJSON(e) {
    let t = $$r$68();
    t.setFormat(e.format);
    t.setIndent(e.indent);
    t.setDirection(e.direction);
    t.setTextFormat(e.textFormat);
    return t;
  }
  exportJSON() {
    return {
      ...super.exportJSON(),
      textFormat: this.getTextFormat(),
      textStyle: this.getTextStyle(),
      type: "paragraph",
      version: 1
    };
  }
  insertNewAfter(e, t) {
    let n = $$r$68();
    n.setTextFormat(e.format);
    n.setTextStyle(e.style);
    let r = this.getDirection();
    n.setDirection(r);
    n.setFormat(this.getFormatType());
    n.setStyle(this.getTextStyle());
    this.insertAfter(n, t);
    return n;
  }
  collapseAtStart() {
    let e = this.getChildren();
    if (0 === e.length || $$nK67(e[0]) && "" === e[0].getTextContent().trim()) {
      if (null !== this.getNextSibling()) {
        this.selectNext();
        this.remove();
        return !0;
      }
      if (null !== this.getPreviousSibling()) {
        this.selectPrevious();
        this.remove();
        return !0;
      }
    }
    return !1;
  }
}
function rZ(e) {
  let t = $$r$68();
  if (e.style) {
    t.setFormat(e.style.textAlign);
    let n = parseInt(e.style.textIndent, 10) / 20;
    n > 0 && t.setIndent(n);
  }
  return {
    node: t
  };
}
export function $$r$68() {
  return $$tC75(new rV());
}
export function $$rX48(e) {
  return e instanceof rV;
}
let $$r066 = 0;
let $$r14 = 1;
let $$r218 = 2;
let $$r839 = 3;
let $$r651 = 4;
function r3(e, t, n, r) {
  let i = e._keyToDOMMap;
  i.clear();
  e._editorState = rj();
  e._pendingEditorState = r;
  e._compositionKey = null;
  e._dirtyType = 0;
  e._cloneNotNeeded.clear();
  e._dirtyLeaves = new Set();
  e._dirtyElements.clear();
  e._normalizedNodes = new Set();
  e._updateTags = new Set();
  e._updates = [];
  e._blockCursorElement = null;
  let A = e._observer;
  null !== A && (A.disconnect(), e._observer = null);
  null !== t && (t.textContent = "");
  null !== n && (n.textContent = "", i.set("root", n));
}
export function $$r563(e) {
  let t;
  let n = e || {};
  let r = rC;
  let i = n.theme || {};
  let A = void 0 === e ? r : n.parentEditor || null;
  let o = n.disableEvents || !1;
  let s = rj();
  let a = n.namespace || (null !== A ? A._config.namespace : e3());
  let l = n.editorState;
  let u = [rH, $$nM10, nw, $$nY, rV, $$rW2, ...(n.nodes || [])];
  let {
    onError,
    html
  } = n;
  let f = void 0 === n.editable || n.editable;
  if (void 0 === e && null !== r) t = r._nodes;else {
    t = new Map();
    for (let e = 0; e < u.length; e++) {
      let n = u[e];
      let r = null;
      let i = null;
      if ("function" != typeof n) {
        let e = n;
        n = e.replace;
        r = e.$$with;
        i = e.withKlass || null;
      }
      let A = n.getType();
      let o = n.transform();
      let s = new Set();
      null !== o && s.add(o);
      t.set(A, {
        exportDOM: html && html.$$export ? html.$$export.get(n) : void 0,
        klass: n,
        replace: r,
        replaceWithKlass: i,
        transforms: s
      });
    }
  }
  let d = new r9(s, A, t, {
    disableEvents: o,
    namespace: a,
    theme: i
  }, onError || console.error, function (e, t) {
    let n = new Map();
    let r = new Set();
    let i = e => {
      Object.keys(e).forEach(t => {
        let r = n.get(t);
        void 0 === r && (r = [], n.set(t, r));
        r.push(e[t]);
      });
    };
    e.forEach(e => {
      let t = e.klass.importDOM;
      if (null == t || r.has(t)) return;
      r.add(t);
      let n = t.call(e.klass);
      null !== n && i(n);
    });
    t && i(t);
    return n;
  }(t, html ? html.$$import : void 0), f);
  void 0 !== l && (d._pendingEditorState = l, d._dirtyType = 2);
  return d;
}
class r9 {
  constructor(e, t, n, r, i, A, o) {
    this._parentEditor = t;
    this._rootElement = null;
    this._editorState = e;
    this._pendingEditorState = null;
    this._compositionKey = null;
    this._deferred = [];
    this._keyToDOMMap = new Map();
    this._updates = [];
    this._updating = !1;
    this._listeners = {
      decorator: new Set(),
      editable: new Set(),
      mutation: new Map(),
      root: new Set(),
      textcontent: new Set(),
      update: new Set()
    };
    this._commands = new Map();
    this._config = r;
    this._nodes = n;
    this._decorators = {};
    this._pendingDecorators = null;
    this._dirtyType = 0;
    this._cloneNotNeeded = new Set();
    this._dirtyLeaves = new Set();
    this._dirtyElements = new Map();
    this._normalizedNodes = new Set();
    this._updateTags = new Set();
    this._observer = null;
    this._key = e3();
    this._onError = i;
    this._htmlConversions = A;
    this._editable = o;
    this._headless = null !== t && t._headless;
    this._window = null;
    this._blockCursorElement = null;
  }
  isComposing() {
    return null != this._compositionKey;
  }
  registerUpdateListener(e) {
    let t = this._listeners.update;
    t.add(e);
    return () => {
      t.$$delete(e);
    };
  }
  registerEditableListener(e) {
    let t = this._listeners.editable;
    t.add(e);
    return () => {
      t.$$delete(e);
    };
  }
  registerDecoratorListener(e) {
    let t = this._listeners.decorator;
    t.add(e);
    return () => {
      t.$$delete(e);
    };
  }
  registerTextContentListener(e) {
    let t = this._listeners.textcontent;
    t.add(e);
    return () => {
      t.$$delete(e);
    };
  }
  registerRootListener(e) {
    let t = this._listeners.root;
    e(this._rootElement, null);
    t.add(e);
    return () => {
      e(null, this._rootElement);
      t.$$delete(e);
    };
  }
  registerCommand(e, t, n) {
    void 0 === n && eI(35);
    let r = this._commands;
    r.has(e) || r.set(e, [new Set(), new Set(), new Set(), new Set(), new Set()]);
    let i = r.get(e);
    void 0 === i && eI(36, String(e));
    let A = i[n];
    A.add(t);
    return () => {
      A.$$delete(t);
      i.every(e => 0 === e.size) && r.$$delete(e);
    };
  }
  registerMutationListener(e, t, n) {
    let r = this.resolveRegisteredNodeAfterReplacements(this.getRegisteredNode(e)).klass;
    let i = this._listeners.mutation;
    i.set(t, r);
    let A = n && n.skipInitialization;
    void 0 === A || A || this.initializeMutationListener(t, r);
    return () => {
      i.$$delete(t);
    };
  }
  getRegisteredNode(e) {
    let t = this._nodes.get(e.getType());
    void 0 === t && eI(37, e.name);
    return t;
  }
  resolveRegisteredNodeAfterReplacements(e) {
    for (; e.replaceWithKlass;) e = this.getRegisteredNode(e.replaceWithKlass);
    return e;
  }
  initializeMutationListener(e, t) {
    let n = this._editorState;
    let r = tF(n).get(t.getType());
    if (!r) return;
    let i = new Map();
    for (let e of r.keys()) i.set(e, "created");
    i.size > 0 && e(i, {
      dirtyLeaves: new Set(),
      prevEditorState: n,
      updateTags: new Set(["registerMutationListener"])
    });
  }
  registerNodeTransformToKlass(e, t) {
    let n = this.getRegisteredNode(e);
    n.transforms.add(t);
    return n;
  }
  registerNodeTransform(e, t) {
    var n;
    let r = this.registerNodeTransformToKlass(e, t);
    let i = [r];
    let A = r.replaceWithKlass;
    if (null != A) {
      let e = this.registerNodeTransformToKlass(A, t);
      i.push(e);
    }
    n = e.getType();
    rG(this, () => {
      let e = rD();
      if (!e.isEmpty()) {
        if ("root" === n) return void $$e$25().markDirty();
        for (let [, t] of e._nodeMap) t.markDirty();
      }
    }, null === this._pendingEditorState ? {
      tag: "history-merge"
    } : void 0);
    return () => {
      i.forEach(e => e.transforms.$$delete(t));
    };
  }
  hasNode(e) {
    return this._nodes.has(e.getType());
  }
  hasNodes(e) {
    return e.every(this.hasNode.bind(this));
  }
  dispatchCommand(e, t) {
    return rR(this, e, t);
  }
  getDecorators() {
    return this._decorators;
  }
  getRootElement() {
    return this._rootElement;
  }
  getKey() {
    return this._key;
  }
  setRootElement(e) {
    let t = this._rootElement;
    if (e !== t) {
      let n = tA(this._config.theme, "root");
      let r = this._pendingEditorState || this._editorState;
      if (this._rootElement = e, r3(this, t, e, r), null !== t && (this._config.disableEvents || function (e) {
        let t = e.ownerDocument;
        let n = na.get(t);
        void 0 === n && eI(162);
        let r = n - 1;
        r >= 0 || eI(164);
        na.set(t, r);
        0 === r && t.removeEventListener("selectionchange", nm);
        let i = eO(e);
        eR(i) ? (function (e) {
          if (null !== e._parentEditor) {
            let t = e6(e);
            let n = t[t.length - 1]._key;
            nB.get(n) === e && nB.$$delete(n);
          } else nB.$$delete(e._key);
        }(i), e.__lexicalEditor = null) : i && eI(198);
        let A = nE(e);
        for (let e = 0; e < A.length; e++) A[e]();
        e.__lexicalEventHandles = [];
      }(t), null != n && t.classList.remove(...n)), null !== e) {
        let t = function (e) {
          let t = e.ownerDocument;
          return t && t.defaultView || null;
        }(e);
        let r = e.style;
        r.userSelect = "text";
        r.whiteSpace = "pre-wrap";
        r.wordBreak = "break-word";
        e.setAttribute("data-lexical-editor", "true");
        this._window = t;
        this._dirtyType = 2;
        ew(this);
        this._updateTags.add("history-merge");
        rT(this);
        this._config.disableEvents || function (e, t) {
          let n = e.ownerDocument;
          let r = na.get(n);
          (void 0 === r || r < 1) && n.addEventListener("selectionchange", nm);
          na.set(n, (r || 0) + 1);
          e.__lexicalEditor = t;
          let i = nE(e);
          for (let n = 0; n < nr.length; n++) {
            let [r, A] = nr[n];
            let o = "function" == typeof A ? e => {
              n_(e) || (ny(e), (t.isEditable() || "click" === r) && A(e, t));
            } : e => {
              if (n_(e)) return;
              ny(e);
              let n = t.isEditable();
              switch (r) {
                case "cut":
                  return n && rR(t, $$P36, e);
                case "copy":
                  return rR(t, $$G82, e);
                case "paste":
                  return n && rR(t, $$g86, e);
                case "dragstart":
                  return n && rR(t, $$R33, e);
                case "dragover":
                  return n && rR(t, $$M77, e);
                case "dragend":
                  return n && rR(t, O, e);
                case "focus":
                  return n && rR(t, $$K0, e);
                case "blur":
                  return n && rR(t, $$j74, e);
                case "drop":
                  return n && rR(t, $$T32, e);
              }
            };
            e.addEventListener(r, o);
            i.push(() => {
              e.removeEventListener(r, o);
            });
          }
        }(e, this);
        null != n && e.classList.add(...n);
      } else {
        this._editorState = r;
        this._pendingEditorState = null;
        this._window = null;
      }
      rL("root", this, !1, e, t);
    }
  }
  getElementByKey(e) {
    return this._keyToDOMMap.get(e) || null;
  }
  getEditorState() {
    return this._editorState;
  }
  setEditorState(e, t) {
    e.isEmpty() && eI(38);
    eD(this);
    let n = this._pendingEditorState;
    let r = this._updateTags;
    let i = void 0 !== t ? t.tag : null;
    n?.isEmpty() || (null != i && r.add(i), rT(this));
    this._pendingEditorState = e;
    this._dirtyType = 2;
    this._dirtyElements.set("root", !1);
    this._compositionKey = null;
    null != i && r.add(i);
    rT(this);
  }
  parseEditorState(e, t) {
    return function (e, t, n) {
      let r = rj();
      let i = rp;
      let A = rI;
      let o = rC;
      let s = t._dirtyElements;
      let a = t._dirtyLeaves;
      let l = t._cloneNotNeeded;
      let u = t._dirtyType;
      t._dirtyElements = new Map();
      t._dirtyLeaves = new Set();
      t._cloneNotNeeded = new Set();
      t._dirtyType = 0;
      rp = r;
      rI = !1;
      rC = t;
      try {
        let i = t._nodes;
        rF(e.root, i);
        n && n();
        r._readOnly = !0;
      } catch (e) {
        e instanceof Error && t._onError(e);
      } finally {
        t._dirtyElements = s;
        t._dirtyLeaves = a;
        t._cloneNotNeeded = l;
        t._dirtyType = u;
        rp = i;
        rI = A;
        rC = o;
      }
      return r;
    }("string" == typeof e ? JSON.parse(e) : e, this, t);
  }
  read(e) {
    rT(this);
    return this.getEditorState().read(e, {
      editor: this
    });
  }
  update(e, t) {
    rG(this, e, t);
  }
  focus(e, t = {}) {
    let n = this._rootElement;
    null !== n && (n.setAttribute("autocapitalize", "off"), rG(this, () => {
      let e = $$ra84();
      let n = $$e$25();
      null !== e ? e.dirty = !0 : 0 !== n.getChildrenSize() && ("rootStart" === t.defaultSelection ? n.selectStart() : n.selectEnd());
    }, {
      onUpdate: () => {
        n.removeAttribute("autocapitalize");
        e && e();
      },
      tag: "focus"
    }), null === this._pendingEditorState && n.removeAttribute("autocapitalize"));
  }
  blur() {
    let e = this._rootElement;
    null !== e && e.blur();
    let t = tm(this._window);
    null !== t && t.removeAllRanges();
  }
  isEditable() {
    return this._editable;
  }
  setEditable(e) {
    this._editable !== e && (this._editable = e, rL("editable", this, !0, e));
  }
  toJSON() {
    return {
      editorState: this._editorState.toJSON()
    };
  }
}
r9.version = "0.18.0+prod.esm";
export const $7 = $$K0;
export const $e = $$c1;
export const A7 = $$rW2;
export const AX = $$m3;
export const Ac = $$r14;
export const B$ = $$tl5;
export const BE = $$tN6;
export const C = $$ex7;
export const Ck = $$n98;
export const Cy = $$rz9;
export const Ey = $$nM10;
export const FE = $$a11;
export const GM = $$rS12;
export const H2 = $$rd13;
export const HY = $$U14;
export const I2 = $$n815;
export const Iq = $$tp16;
export const JM = $$E17;
export const Jj = $$r218;
export const K8 = $$tQ19;
export const Kf = $$H20;
export const Kp = $$rJ21;
export const LY = $$eL22;
export const MK = $$nV23;
export const Mv = $$i24;
export const Ni = $$e$25;
export const OX = $$x26;
export const Pi = $$F27;
export const Q$ = $$v28;
export const R1 = $$I29;
export const RT = $$n330;
export const SK = $$q31;
export const Sr = $$T32;
export const Tg = $$R33;
export const UD = $$_34;
export const V3 = $$$$C35;
export const VS = $$P36;
export const WK = $$nv37;
export const WW = $$z38;
export const Wg = $$r839;
export const Wu = $$s40;
export const XK = $$l41;
export const YW = $$S42;
export const Z$ = $$eT43;
export const ZK = $$p44;
export const _O = $$tD45;
export const a9 = $$tw46;
export const bM = $$u47;
export const bS = $$rX48;
export const bb = $$Q49;
export const cq = $$Y50;
export const d = $$r651;
export const d8 = $$o52;
export const e1 = $$ti53;
export const ev = $$nW54;
export const fG = $$rP55;
export const fU = $$L56;
export const ff = $$rU57;
export const gC = $$b58;
export const gu = $$r59;
export const hV = $$rK60;
export const hi = $$f61;
export const i0 = $$tk62;
export const ie = $$r563;
export const _$$if = $$D64;
export const jG = $$eq65;
export const jZ = $$r066;
export const kF = $$nK67;
export const lJ = $$r$68;
export const mB = $$h69;
export const n1 = $$e070;
export const nY = $$ty71;
export const ns = $$ej72;
export const oq = $$A73;
export const pF = $$j74;
export const pT = $$tC75;
export const rU = $$ro76;
export const ri = $$M77;
export const sT = $$nH78;
export const sb = $$t_79;
export const si = $$N80;
export const t5 = $$J81;
export const u5 = $$G82;
export const uT = $$rA83;
export const vJ = $$ra84;
export const vi = $$$$d85;
export const w = $$g86;
export const w$ = $$k87;
export const wH = $$nk88;
export const xL = $$eW89;
export const y6 = $$rr90;
export const zl = $$ts91;