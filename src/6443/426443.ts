import { jsx, Fragment } from "react/jsx-runtime";
import { Component, createRef } from "react";
import { debounce } from "../905/915765";
import { AppStateTsApi } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { SelectionState, Modifier, EditorState, convertToRaw, convertFromRaw, KeyBindingUtil, CompositeDecorator, getDefaultKeyBinding, convertFromHTML, ContentState, RichUtils, Editor } from "../vendor/279643";
import { trackEventAnalytics } from "../905/449184";
import { l5, vj, Wf } from "../figma_app/819288";
import { desktopAPIInstance } from "../figma_app/876459";
import { getFalseValue } from "../figma_app/897289";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { We, UU, Qe } from "../figma_app/770088";
import { Hx } from "../figma_app/530167";
import { pP, jD } from "../905/765855";
import { b as _$$b } from "../905/985254";
import { Ty, pP as _$$pP, yO, I2 } from "../905/331019";
import { FFileType } from "../figma_app/191312";
import { fG, oQ } from "../905/772425";
import { AT_MENTIONS_TYPEAHEAD } from "../905/380385";
import { PositionEnum, KindEnum } from "../905/129884";
import { xT } from "../figma_app/841415";
import { tI as _$$tI } from "../905/603628";
import { il } from "../vendor/291472";
import { xM, Lg as _$$Lg, wd, UF } from "../905/403166";
import { F as _$$F2 } from "../905/241044";
import B from "../vendor/426804";
import { E as _$$E } from "../905/508367";
import { splitIntoCharacters } from "../figma_app/930338";
import { Vt, $x } from "../905/780715";
function K(t) {
  let e;
  let n = 0;
  let i = 0;
  -1 !== t.lastIndexOf("\n") && (i = t.lastIndexOf("\n") + 1, t = t.substring(i));
  let r = t.lastIndexOf("@");
  if (-1 !== r) {
    if (e = t.substring(r + 1), n = r, " " === e.substring(0, 1) || e.length > 100) return null;
    let i = t.substring(0, r);
    let s = i.lastIndexOf("@");
    if (-1 !== s) {
      let r = t.substring(s + 1);
      if (-1 === r.indexOf(" ")) {
        if (0 !== s && " " !== i[s - 1]) return null;
        e = r;
        n = s;
      }
    } else if (0 !== r && ![" ", "[", "{", "("].includes(t[r - 1])) return null;
  }
  return null != e ? {
    search: e,
    index: n += i
  } : null;
}
class x {
  constructor() {
    this._isCanceled = !1;
    this._isEnabled = !0;
  }
  isCanceled() {
    return !!this._isEnabled && this._isCanceled;
  }
  reset() {
    this._isEnabled = !1;
  }
  cancel() {
    this._isEnabled && (this._isCanceled = !0);
  }
}
class b extends Error {}
async function A(t, e) {
  let n = await t;
  if (e.isCanceled()) {
    e.reset();
    return new b();
  }
  e.reset();
  return n;
}
var F = B;
let R = /:([0-9A-Za-z-_+]+)$/;
let P = /(:[0-9A-Za-z-_+]+:)$/;
let N = {
  BOLD: "b",
  ITALIC: "i",
  STRIKETHROUGH: "s"
};
let D = {
  b: "BOLD",
  i: "ITALIC",
  s: "STRIKETHROUGH"
};
let j = {
  BOLD: [{
    char: "*",
    sequence: "**"
  }, {
    char: "_",
    sequence: "__"
  }],
  ITALIC: [{
    char: "*",
    sequence: "*"
  }, {
    char: "_",
    sequence: "_"
  }],
  STRIKETHROUGH: [{
    char: "~",
    sequence: "~"
  }]
};
let G = new Set(["*", "-", "+"]);
function W(t, e, n) {
  return z(t, e, n, "EMOJI");
}
function Q(t, e, n) {
  return z(t, e, n, "HYPERLINK");
}
function Y(t, e) {
  let n = t.getText();
  for (let i of Vt(n).filter(e => {
    for (let n = e.start; n < e.end; n++) if (t.getEntityAt(n)) return !1;
    return !0;
  })) e(i.start, i.end);
}
function $(t, e, n) {
  return z(t, e, n, "MENTION");
}
function q(t, e, n) {
  return z(t, e, n, "INVITE");
}
let z = (t, e, n, i) => {
  t.findEntityRanges(t => function (t, e, n) {
    return null !== e && t.getEntity(e).getType() === n;
  }(n, t.getEntity(), i), e);
};
function J(t) {
  let e = t.getSelection();
  let n = t.getCurrentContent();
  let i = e.getAnchorKey();
  let r = n.getBlockForKey(i);
  let s = e.getAnchorOffset();
  let o = K(r.getText().substring(0, s));
  return null !== o ? o.search : "";
}
function V(t) {
  let e;
  let n;
  let i;
  let r;
  let s = t.getSelection();
  let o = t.getCurrentContent();
  let a = s.getAnchorKey();
  let l = o.getBlockForKey(a);
  let h = s.getAnchorOffset();
  let p = o.getBlocksAsArray();
  let c = tl(t);
  let g = l.getText().substring(0, h);
  let u = g.match(R);
  let f = g.match(P);
  let y = K(g);
  if (y) {
    let t = function (t, e, n, i, r) {
      let {
        token
      } = function t(e, n) {
        let i = 0;
        for (let r = 0; r < n.length; r++) {
          if (n[r].children?.length) {
            let {
              lengthOfText,
              token: _token
            } = t(e - i, n[r].children);
            if ((i += lengthOfText) > e) return {
              lengthOfText: i,
              token: _token
            };
          } else n[r].t ? i += n[r].t?.replace(/\n/g, "").length || 0 : i += _$$F2(n[r].user_annotated?.handle)?.length || 0;
          if ((i += "profile_id" in n[r] ? 1 : 0) > e) return {
            lengthOfText: i,
            token: n[r]
          };
        }
        return {
          lengthOfText: i,
          token: null
        };
      }(function (t, e, n, i) {
        let r = 0;
        for (let n = 0; n < t.length && t[n] !== e; ++n) r += t[n].getText().replace(/\n/g, "").length;
        return r + (n - (i.match(/\n/g) || []).length);
      }(t, e, n, r), i);
      return token;
    }(p, l, y.index, c, g);
    y = t && l5(t) === vj.PLAIN_TEXT ? y : null;
  }
  y ? (e = "MENTION", n = y.search, i = y.index, r = h) : u ? (e = "EMOJI", n = u[1], i = u.index, r = h) : f && xM(f[1]) && (e = "COMPLETE_EMOJI", n = f[1], i = f.index, r = h);
  return {
    type: e,
    search: n,
    start: i,
    end: r
  };
}
function Z(t, e, n, i) {
  let r = e.getEntityAt(n);
  if (!r) return !1;
  let s = t.getEntity(r);
  return "HYPERLINK" === s.getType() && s.getData().hyperlink === i;
}
function X(t, e, n) {
  let i = t.getCurrentContent();
  let r = i.getEntity(n);
  if (!r || "HYPERLINK" !== r.getType()) return e;
  let s = r.getData().hyperlink;
  let o = i.getBlockForKey(e.getStartKey());
  let a = e.getStartOffset();
  let l = o;
  let h = a - 1;
  t: for (let t = 0; t < i.getBlocksAsArray().length && l; t++) {
    for (; h >= 0; h--) {
      if (!Z(i, l, h, s)) break t;
      o = l;
      a = h;
    }
    l = i.getBlockBefore(l.getKey());
    h = (l?.getLength() || 0) - 1;
  }
  let d = i.getBlockForKey(e.getEndKey());
  let p = e.getEndOffset();
  l = d;
  h = p + 1;
  t: for (let t = 0; t < i.getBlocksAsArray().length && l; t++) {
    for (; h <= l.getLength(); h++) {
      if (!Z(i, l, h - 1, s)) break t;
      d = l;
      p = h;
    }
    l = i.getBlockAfter(l.getKey());
    h = 1;
  }
  return e.merge({
    anchorOffset: a,
    anchorKey: o.getKey(),
    focusOffset: p,
    focusKey: d.getKey()
  });
}
function tt(t) {
  let e = t.getSelection();
  return e.getAnchorKey() === e.getFocusKey() && e.getAnchorOffset() === e.getFocusOffset();
}
function te(t) {
  let e = t.getSelection().getAnchorKey();
  return t.getCurrentContent().getBlockForKey(e);
}
function tn(t, e) {
  let n = te(t);
  return SelectionState.createEmpty(n.getKey()).merge({
    anchorOffset: e.start,
    focusOffset: e.end
  });
}
function ti(t, e, n) {
  let i = tn(t, e);
  return Modifier.replaceText(t.getCurrentContent(), i, n);
}
let tr = t => {
  let {
    index,
    char: _char2,
    line,
    numRepeats,
    exactMatch
  } = t;
  if (exactMatch && index - numRepeats - 1 >= 0 && line.charAt(index - numRepeats - 1) === _char2) return !1;
  for (let t = 0; t < numRepeats; t++) if (line.charAt(index - t - 1) !== _char2) return !1;
  return !0;
};
let ts = (t, e, n) => {
  if (n - 1 > 0 && " " === t.charAt(n - 1)) return null;
  for (let i = n - 1; i >= 0; i--) {
    if (" " === t.charAt(i)) continue;
    let r = !1;
    switch (e) {
      case "BOLD":
        for (let {
          char: _char3,
          sequence
        } of j.BOLD) t.charAt(i) !== _char3 && t.charAt(n) === _char3 && tr({
          index: i,
          char: _char3,
          line: t,
          numRepeats: sequence.length,
          exactMatch: !1
        }) && (r = !0);
        break;
      case "ITALIC":
        for (let {
          char: _char4,
          sequence
        } of j.ITALIC) if (t.charAt(i) !== _char4 && t.charAt(n) === _char4 && tr({
          index: i,
          char: _char4,
          line: t,
          numRepeats: sequence.length,
          exactMatch: !1
        })) {
          if ("_" === _char4) {
            let e = i - sequence.length - 1;
            (e < 0 || " " === t.charAt(e)) && (r = !0);
          } else r = !0;
        }
        break;
      case "STRIKETHROUGH":
        for (let {
          char: _char5,
          sequence
        } of j.STRIKETHROUGH) t.charAt(i) !== _char5 && t.charAt(n) === _char5 && tr({
          index: i,
          char: _char5,
          line: t,
          numRepeats: sequence.length,
          exactMatch: !1
        }) && (r = !0);
    }
    if (r) return {
      start: i,
      end: n
    };
  }
  return null;
};
function to(t, e) {
  if (!tt(t)) return null;
  let n = t.getSelection();
  let i = te(t);
  let r = n.getAnchorOffset();
  if (0 === r && "" === e) {
    let e = t.getCurrentContent().getBlockBefore(i.getKey());
    if (!e) return null;
    i = e;
    r = e.getLength();
  }
  let s = i.getText();
  for (let t of Object.keys(j)) for (let n of j[t]) {
    let {
      char: _char,
      sequence
    } = n;
    if (e !== _char && tr({
      index: r,
      char: _char,
      line: s,
      numRepeats: sequence.length,
      exactMatch: !0
    })) {
      let e = ts(s, t, r - sequence.length);
      if (e) return {
        sequence,
        style: t,
        range: e
      };
    }
  }
  return null;
}
function ta(t, e, n) {
  let {
    sequence,
    style,
    range
  } = n;
  if (e.length) {
    let n = Modifier.insertText(t.getCurrentContent(), tn(t, {
      start: range.end + sequence.length,
      end: range.end + sequence.length
    }), e);
    t = EditorState.push(t, n, "insert-characters");
  }
  let o = Modifier.removeRange(t.getCurrentContent(), tn(t, {
    start: range.end,
    end: range.end + sequence.length
  }), "backward");
  o = Modifier.removeRange(o, tn(t, {
    start: range.start - sequence.length,
    end: range.start
  }), "backward");
  let a = {
    start: range.start - sequence.length,
    end: range.end - sequence.length
  };
  let h = tn(t, a);
  let d = Modifier.applyInlineStyle(o, h, style);
  t = EditorState.push(t, d, "change-inline-style");
  let p = {
    start: a.end + e.length,
    end: a.end + e.length
  };
  return t = EditorState.forceSelection(t, tn(t, p));
}
function tl(t) {
  let e;
  let n;
  let i = [];
  let r = "";
  let s = t => {
    let e = n || i;
    t.profile_id || t.user_id || t.user_annotated || t.styles || t.link ? e.push(t) : "" !== t.t && (e.length && "t" in e[e.length - 1] && 1 === Object.keys(e[e.length - 1]).length ? e[e.length - 1].t += t.t : e.push(t));
  };
  let o = (t, e, n) => {
    let i = a.entityMap[t.key];
    let r = {};
    "MENTION" === i.type && "profile_handle" in i.data.mention ? (r.profile_id = i.data.mention.id, r.t = i.data.mention.profile_handle) : "MENTION" === i.type ? (r.user_id = i.data.mention.id, r.user_annotated = i.data.mention) : "HYPERLINK" === i.type ? (r.link = i.data.hyperlink, r.t = e) : "EMOJI" === i.type ? r.t = i.data.text : "INVITE" === i.type ? (r.t = i.data.mention.email, r.user_id = i.data.mention.id) : (r.t = e, n.length && (r.styles = n));
    s(r);
  };
  let a = convertToRaw(t.getCurrentContent());
  let h = "";
  a.blocks.forEach(t => {
    let a = splitIntoCharacters(_$$F2(t.text) || "");
    ["ordered-list-item", "unordered-list-item"].includes(t.type) ? (t.type !== r && (n && i.push({
      styles: ["ordered-list-item" === r ? "ol" : "ul"],
      children: e
    }), e = [], n = []), e ||= [], n ||= [], r = t.type.slice()) : (i.length && "" === r && s({
      t: "\n"
    }), n && (i.push({
      styles: ["ordered-list-item" === r ? "ol" : "ul"],
      children: e
    }), e = void 0, n = void 0), r = "");
    let l = {};
    t.entityRanges.forEach(t => {
      l[t.offset] = t;
    });
    let d = {};
    Vt(t.text).forEach(t => {
      let {
        start,
        end
      } = t;
      for (let t = start; t < end; t++) if (l[t]) return;
      d[start] = t;
    });
    let p = {};
    t.inlineStyleRanges.forEach(t => {
      t.offset in p ? p[t.offset].push(t) : p[t.offset] = [t];
    });
    let c = [];
    let g = {};
    for (let t = 0; t < a.length; t++) {
      if (t in g && c.length && (s({
        t: h,
        styles: [...c]
      }), h = "", c = c.filter(e => !g[t].includes(e))), t in l) {
        let e = l[t];
        if (c.length) for (var u in s({
          t: h,
          styles: [...c]
        }), c = [], g) Number(u) > t + e.length && c.push(...g[u]);else s({
          t: h
        });
        h = "";
        o(e, a.slice(t, t + e.length).join(""), c);
        t += e.length - 1;
        continue;
      }
      if (t in d) {
        let e = d[t];
        let n = e.end - e.start;
        if (c.length) for (var u in s({
          t: h,
          styles: [...c]
        }), c = [], g) Number(u) > t + n && c.push(...g[u]);else s({
          t: h
        });
        h = "";
        s({
          t: a.slice(t, t + n).join(""),
          link: e.href
        });
        t += n - 1;
        continue;
      }
      t in p && (c.length ? s({
        t: h,
        styles: [...c]
      }) : s({
        t: h
      }), h = "", p[t].forEach(t => {
        if (N[t.style]) {
          let e = N[t.style];
          c.push(e);
          let n = t.offset + t.length;
          n in g ? g[n].push(e) : g[n] = [e];
        }
      }));
      h += a[t];
    }
    c.length ? s({
      t: h,
      styles: [...c]
    }) : s({
      t: h
    });
    h = "";
    n && (0 === n.length && n.push({
      t: ""
    }), e.push({
      children: n
    }), n = []);
  });
  n && i.push({
    styles: ["ordered-list-item" === r ? "ol" : "ul"],
    children: e
  });
  return i;
}
let th = (t, e, n, i, r, s = "default") => {
  let o = [];
  let a = [];
  let l = "";
  (function (t) {
    let e = [];
    t.forEach(t => {
      let n = _$$F2(t.t);
      if (n) {
        let i = n.split("\n");
        1 === i.length ? e.push(t) : i.forEach((n, r) => {
          let s = r < i.length - 1 ? `${n}
` : n;
          void 0 !== t.styles ? e.push({
            t: s,
            styles: t.styles
          }) : e.push({
            t: s
          });
        });
      } else e.push(t);
    });
    return e;
  })(t).forEach(t => {
    let h = _$$F2(t.t);
    if (t.children?.length) {
      "" !== l && (r.push({
        text: l,
        entityRanges: o,
        type: s,
        depth: 0,
        inlineStyleRanges: a,
        key: r.length.toString()
      }), l = "", a = [], o = []);
      let h = t.styles?.includes("ol") ? "ordered-list-item" : "unordered-list-item";
      t.children.forEach(t => {
        t.children?.length && th(t.children, e, n, i, r, h);
      });
    } else if (t.user_annotated || t.profile_id) {
      let e = t.user_annotated ? _$$F2(t.user_annotated.handle) || "" : "@" + h;
      let n = t.user_annotated ? t.user_annotated : {
        id: t.profile_id,
        profile_handle: h
      };
      o.push({
        key: Object.keys(i).length,
        length: splitIntoCharacters(e).length,
        offset: splitIntoCharacters(l).length
      });
      i[Object.keys(i).length] = {
        type: "MENTION",
        mutability: "IMMUTABLE",
        data: {
          mention: n
        }
      };
      l += e;
    } else if (t.link && $x(xT(t.link))) {
      o.push({
        key: Object.keys(i).length,
        length: splitIntoCharacters(h).length,
        offset: splitIntoCharacters(l).length
      });
      i[Object.keys(i).length] = {
        type: "HYPERLINK",
        mutability: "MUTABLE",
        data: {
          hyperlink: t.link,
          commentEditorType: n
        }
      };
      l += h;
    } else {
      if (t.styles?.length) t.styles.forEach(t => {
        if (D[t]) {
          let e = D[t];
          a.push({
            style: e,
            length: splitIntoCharacters(h).length,
            offset: splitIntoCharacters(l).length
          });
        }
      });else if (_$$Lg(h)) {
        let t = wd(h);
        let e = 0;
        let n = "";
        for (let r of t) {
          let t = "";
          let s = "";
          xM(r) && (UF(r).forEach(e => {
            t += e.unicode;
            s += e.meta;
          }), o.push({
            key: Object.keys(i).length,
            length: splitIntoCharacters(t).length,
            offset: splitIntoCharacters(l).length + e
          }), i[Object.keys(i).length] = {
            type: "EMOJI",
            mutability: "IMMUTABLE",
            data: {
              text: s,
              unicode: t
            }
          });
          n += t.length ? t : r;
          e += splitIntoCharacters(t.length ? t : r).length;
        }
        h = n;
      }
      h?.endsWith("\n") ? (l += h.slice(0, -1), r.push({
        text: l,
        entityRanges: o,
        type: s,
        depth: 0,
        inlineStyleRanges: a,
        key: r.length.toString()
      }), l = "", o = [], a = []) : l += h;
    }
  });
  ("" !== l || "default" !== s) && r.push({
    text: l,
    entityRanges: o,
    type: s,
    depth: 0,
    inlineStyleRanges: a,
    key: r.length.toString()
  });
};
function td(t, e, n) {
  let i = {};
  let r = [];
  th(t, e, n, i, r, "default");
  let s = convertFromRaw({
    blocks: r,
    entityMap: i
  });
  return EditorState.createWithContent(s, e);
}
let tp = t => {
  let e = t.getCurrentContent().getFirstBlock();
  let n = e.getKey();
  let i = e.getLength();
  return EditorState.acceptSelection(t, new SelectionState({
    anchorKey: n,
    anchorOffset: i,
    focusKey: n,
    focusOffset: i,
    isBackward: !1
  }));
};
function tc(t) {
  let e = tp(t);
  return EditorState.forceSelection(e, e.getSelection());
}
let tg = t => {
  let e = t.getAttribute("data-mention-user-id");
  let n = t.getAttribute("data-tooltip-user-handle");
  return e && n ? {
    id: e,
    handle: n
  } : null;
};
let tu = t => t.getAttribute("data-tooltip-url-string");
function tf(t, e) {
  let n = V(t);
  let i = UF(e)[0].unicode;
  let r = t.getCurrentContent().createEntity("EMOJI", "IMMUTABLE", {
    text: e,
    unicode: i
  }).getLastCreatedEntityKey();
  return ty(t, n, r, i, !1);
}
let ty = (t, e, n, i, r) => {
  let s = t.getSelection();
  let o = t.getCurrentContent();
  let {
    start,
    end
  } = e;
  let d = s;
  null != start && null != end && (d = s.merge({
    anchorOffset: start,
    focusOffset: end
  }));
  let p = Modifier.replaceText(o, d, i, void 0, n);
  let c = p.getSelectionAfter();
  let g = p.getLastBlock();
  g.getKey() === c.getStartKey() && g.getKey() === c.getEndKey() && g.getLength() === c.getStartOffset() && g.getLength() === c.getEndOffset() && (p = Modifier.replaceText(p, c, r ? "" : " ", void 0, void 0));
  let u = EditorState.push(t, p, "insert-fragment");
  return r ? function (t, e) {
    let n = t.getCurrentContent().getBlockMap().toArray();
    let i = null;
    for (let t of n) {
      let e = t.getText().indexOf("@");
      if (-1 !== e) {
        i = {
          blockKey: t.getKey(),
          position: e + 1
        };
        break;
      }
    }
    if (i) {
      let e = new SelectionState({
        anchorKey: i.blockKey,
        anchorOffset: i.position,
        focusKey: i.blockKey,
        focusOffset: i.position
      });
      return EditorState.forceSelection(t, e);
    }
    return t;
  }(u, 0) : EditorState.forceSelection(u, p.getSelectionAfter());
};
let tS = "editable_typeahead--mention--yPPjQ";
let tm = "editable_typeahead--hyperlink--JH0Ig";
let {
  hasCommandModifier
} = KeyBindingUtil;
var tC = (t => (t.Bold = "toggle-bold", t.Italic = "toggle-italic", t.Strikethrough = "toggle-strikethrough", t))(tC || {});
var tk = (t => (t.UL = "toggle-unordered-list", t.OL = "toggle-ordered-list", t))(tk || {});
var tT = (t => (t.ListBackspace = "handle-list-backspace", t.Undo = "handle-undo", t.Redo = "handle-redo", t.Link = "toggle-link", t))(tT || {});
let tI = {
  BOLD: {
    fontWeight: 600
  },
  HIGHLIGHT: {
    background: "var(--color-texthighlight)"
  }
};
let tM = {
  "toggle-bold": "BOLD",
  "toggle-italic": "ITALIC",
  "toggle-strikethrough": "STRIKETHROUGH"
};
let tO = {
  "toggle-unordered-list": "unordered-list-item",
  "toggle-ordered-list": "ordered-list-item"
};
let tK = new Set(["HIGHLIGHT", ...Object.values(tM)]);
function tx() {
  let t = [{
    strategy: $,
    component: t => jsx("span", {
      className: tS,
      spellCheck: !1,
      children: t.children
    })
  }, {
    strategy: q,
    component: t => jsx("span", {
      className: tS,
      spellCheck: !1,
      children: t.children
    })
  }, {
    strategy: W,
    component: t => jsx("span", {
      className: "editable_typeahead--emoji--vp6nb",
      spellCheck: !1,
      children: t.children
    })
  }, {
    strategy: Q,
    component: t => {
      let e = "";
      let n = "";
      if (t.entityKey && t.contentState) {
        let i = t.contentState.getEntity(t.entityKey).getData();
        e = i.hyperlink;
        n = i.commentEditorType;
      }
      return jsx("span", {
        className: tm,
        "data-tooltip": PositionEnum.HYPERLINK_POPUP,
        "data-tooltip-can-edit": !0,
        "data-tooltip-entity-key": t.entityKey,
        "data-tooltip-interactive": !0,
        "data-tooltip-precise": !0,
        "data-tooltip-show-above": !0,
        "data-tooltip-target-ref-key": n,
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip-unconstrain-width": !0,
        "data-tooltip-url-string": e,
        spellCheck: !1,
        children: t.children
      });
    }
  }, {
    strategy: Y,
    component: t => {
      let e = Vt(t.decoratedText);
      if (1 !== e.length) return jsx(Fragment, {
        children: t.children
      });
      let n = new URL(e[0].href).toString();
      return jsx("span", {
        className: tm,
        "data-testid": `implicit-hyperlink-${n}`,
        "data-tooltip": PositionEnum.HYPERLINK_POPUP,
        "data-tooltip-can-edit": !1,
        "data-tooltip-interactive": !0,
        "data-tooltip-precise": !0,
        "data-tooltip-show-above": !0,
        "data-tooltip-type": KindEnum.SPECIAL,
        "data-tooltip-unconstrain-width": !0,
        "data-tooltip-url-string": n,
        spellCheck: !1,
        children: t.children
      });
    }
  }];
  return new CompositeDecorator(t);
}
let tb = RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/, "i");
export class $$tA0 extends Component {
  constructor(t) {
    super(t);
    this.TEST_ONLY_mentionsSearchPending = null;
    this.pendingMentionsSearch = null;
    this.wrapperRef = createRef();
    this.trackMentionSearchMetrics = (t, e, n) => {
      let i = e.index;
      let r = e.mentions ? e.mentions.length : 0;
      trackEventAnalytics("at_mention_search_metrics", {
        did_click_through: n,
        search_text_length: t.length,
        selected_index: i,
        suggestions_length: r
      });
    };
    this.onChange = t => {
      let e = this.state.editorState;
      this.setState({
        editorState: t
      });
      let n = e.getCurrentContent();
      let i = t.getCurrentContent();
      let r = e.getSelection();
      let s = t.getSelection();
      n !== i ? this.onEditorContentChange(t) : this.props.typeahead?.type === "mentions" ? r.getAnchorKey() !== s.getAnchorKey() || r.getFocusKey() !== s.getFocusKey() ? this.clearTypeahead("changed_selection_mentions_typeahead") : this.setState({
        editorState: EditorState.forceSelection(t, s)
      }) : r !== s && this.clearTypeahead("changed_selection");
    };
    this.onEditorContentChange = t => {
      let e = tl(t);
      this.props.updateMessage([e, t]);
      let {
        search,
        type
      } = V(t);
      null != search ? "MENTION" === type ? this.onMentionSearchChange(search) : "EMOJI" === type ? this.onEmojiSearchChange(search) : "COMPLETE_EMOJI" === type && (this.clearTypeahead("completed_emoji_search"), this.insertEmojiFromString(search)) : this.clearTypeahead("input_deleted");
    };
    this.hasTypeahead = () => !!this.props.typeahead;
    this.insertMention = (t, e) => {
      let n = J(this.state.editorState);
      this.state.contactsAnalytics?.trackResultClicked(n, e.index, e.mentions.length, t.id.startsWith("invite-"));
      this.trackMentionSearchMetrics(n, e, !0);
      let i = function (t, e) {
        let n = t.getCurrentContent();
        if (e.id.startsWith("invite-") && !("profile_handle" in e)) {
          let i = n.createEntity("INVITE", "IMMUTABLE", {
            mention: e
          }).getLastCreatedEntityKey();
          let r = V(t);
          return ty(t, r, i, _$$F2(e.handle) || "", !1);
        }
        let i = n.createEntity("MENTION", "IMMUTABLE", {
          mention: e
        }).getLastCreatedEntityKey();
        let r = V(t);
        let s = "profile_handle" in e ? `@${e.profile_handle}` : e.handle;
        return ty(t, r, i, _$$F2(s) || "", !1);
      }(this.state.editorState, t);
      "profile_handle" in t && this.props.dispatch(Hx(t));
      this.onChange(i);
    };
    this.insertEmoji = t => {
      let e = function (t, e) {
        let n = il.getDefaultSkin();
        let i = n ? `:skin-tone-${n}:` : "";
        e.skins.length < 2 && (i = "");
        return tf(t, `:${e.id}:` + i);
      }(this.state.editorState, t);
      this.onChange(e);
    };
    this.insertSuggestion = t => {
      let e = function (t, e) {
        let n = t.getCurrentContent().createEntity("SUGGESTION", "IMMUTABLE", {
          suggestion: e
        }).getLastCreatedEntityKey();
        let i = V(t);
        return ty(t, i, n, e.suggestionInsert, e.suggestionInsert.includes("@"));
      }(this.state.editorState, t.suggestedComments[t.index]);
      this.onChange(e);
    };
    this.insertFirstPendingUserInvite = t => {
      if (t[0].user?.email) {
        let e = function (t, e) {
          let n = t.getCurrentContent().createEntity("INVITE", "IMMUTABLE", {
            mention: {
              email: e.user.email,
              id: `invite-${e.id}`
            }
          }).getLastCreatedEntityKey();
          let i = V(t);
          return e.user.email ? ty(t, i, n, e.user.email, !1) : t;
        }(this.state.editorState, t[0]);
        this.onChange(e);
      }
    };
    this.insertEmojiFromString = t => {
      let e = tf(this.state.editorState, t);
      this.onChange(e);
    };
    this.onInsert = () => {
      let t = this.props.typeahead;
      t && "mentions" === t.type && t.mentions[t.index] ? this.insertMention(t.mentions[t.index], t) : t && "emojis" === t.type && t.emojis[t.index] ? this.insertEmoji(t.emojis[t.index]) : t && "suggestions" === t.type && this.insertSuggestion(t);
    };
    this.assignEditorOnInsertClear = () => {
      this.props.editorOnInsert(this.onInsert);
      this.props.editorOnClear(() => this.clearTypeahead("editor_clear"));
    };
    this.newMentionsSearch = async t => {
      this.pendingMentionsSearch && this.pendingMentionsSearch.cancel();
      this.pendingMentionsSearch = new x();
      try {
        return {
          result: await A(fG(t, this.props.mentionables, !this.props.isProtoView && this.props.figmaEditorType === FFileType.DESIGN), this.pendingMentionsSearch),
          canceled: !1
        };
      } catch (t) {
        if (t instanceof b) return {
          result: null,
          canceled: !0
        };
        throw t;
      }
    };
    this.onMentionSearchChange = debounce(async t => {
      let e = this.newMentionsSearch(t);
      getFalseValue() && (this.TEST_ONLY_mentionsSearchPending = e);
      let {
        result,
        canceled
      } = await e;
      canceled || (result ? (this.state.contactsAnalytics?.trackQueryResult(t, result?.mentions.length ?? 0), this.props.dispatch(We(result))) : this.props.dispatch(We({
        type: "mentions",
        mentions: [],
        index: 0,
        maxMentions: 0,
        search: t
      })), this.props.onUpdateTextArea(this.state.editorState));
    }, 300);
    this.onEmojiSearchChange = t => {
      this.props.dispatch(We(oQ(t)));
      this.props.onUpdateTextArea(this.state.editorState);
    };
    this.clearTypeahead = t => {
      this.pendingMentionsSearch && this.pendingMentionsSearch.cancel();
      this.state.contactsAnalytics?.endSession(t);
      this.hasTypeahead() && (this.props.typeahead?.type === "suggestions" ? "editor_clear" === t ? this.props.dispatch(UU({
        force: !0
      })) : "changed_selection" !== t && this.props.dispatch(We(null)) : this.props.dispatch(We(null)));
    };
    this._handleBeforeInput = (t, e) => {
      if (this.props.maxCommentLength && e.getCurrentContent().getPlainText("").length >= this.props.maxCommentLength) return "handled";
      let n = function (t, e) {
        if (" " !== e || !tt(t)) return null;
        let n = t.getSelection();
        let i = te(t);
        if (" " === e) {
          let t = F()(i.getText().slice(0, n.getAnchorOffset()));
          if (G.has(t)) return "unordered-list-item";
          if ("1." === t) return "ordered-list-item";
        }
        return null;
      }(e, t);
      if ("ordered-list-item" === n || "unordered-list-item" === n) {
        e = function (t, e) {
          let n = {
            start: 0,
            end: t.getSelection().getAnchorOffset()
          };
          let i = te(t).getText().slice(n.start, n.end);
          let r = ti(t, n, `${i} `);
          let s = ti(t = EditorState.push(t, r, "insert-characters"), {
            start: n.start,
            end: n.end + 1
          }, "");
          let o = {
            start: 0,
            end: 0
          };
          let a = tn(t, o);
          let h = Modifier.setBlockType(s, a, e);
          t = EditorState.push(t, h, "change-block-type");
          return t = EditorState.forceSelection(t, tn(t, o));
        }(e, n);
        this.onChange(e);
        return "handled";
      }
      let i = to(e, t);
      return i ? (e = ta(e, t, i), this.onChange(e), "handled") : "not-handled";
    };
    this.selectAll = () => {
      let t = this.state.editorState.getSelection();
      let e = this.state.editorState.getCurrentContent();
      let n = t.merge({
        anchorKey: e.getFirstBlock().getKey(),
        anchorOffset: 0,
        focusOffset: e.getLastBlock().getText().length,
        focusKey: e.getLastBlock().getKey()
      });
      this.setState({
        editorState: EditorState.forceSelection(this.state.editorState, n)
      });
    };
    this.hasFocus = () => this.state.editorState.getSelection().getHasFocus();
    this.focus = (t = !0) => {
      let e = this.state.editorState.getSelection();
      e.getHasFocus() ? this.props.onFocus() : t ? setTimeout(() => {
        this.props.moveFocusToStartOnMount ? this.setState({
          editorState: tc(this.state.editorState)
        }) : this.setState({
          editorState: EditorState.moveFocusToEnd(this.state.editorState)
        });
        this.onFocus();
      }, 0) : this.setState({
        editorState: EditorState.forceSelection(this.state.editorState, e)
      });
    };
    this.moveFocusBefore = () => {
      let t = te(this.state.editorState);
      let e = this.state.editorState.getCurrentContent().getBlockBefore(t.getKey());
      let n = this.state.editorState.getSelection();
      if (e) {
        let t = n.merge({
          anchorKey: e.getKey(),
          anchorOffset: e.getLength(),
          focusKey: e.getKey(),
          focusOffset: e.getLength()
        });
        this.setState({
          editorState: EditorState.forceSelection(this.state.editorState, t)
        });
      }
    };
    this.isAllSelected = () => {
      let t = this.state.editorState;
      return t.isSelectionAtStartOfContent() && t.isSelectionAtEndOfContent();
    };
    this.onNavigationKeyDown = t => (t.stopPropagation(), this.hasTypeahead()) ? (t.preventDefault(), null) : getDefaultKeyBinding(t);
    this.handleEscape = () => {
      this.hasTypeahead() || this.props.isThreadCommentOverflowMenuOpen || this.props.editingComment && "comment-editor-reply" === this.props.editorType || this.props.onCancel();
    };
    this.handleReturn = (t, e) => {
      t.stopPropagation();
      let n = this.state.editorState.getCurrentContent().getPlainText();
      let i = /^\s+$/;
      let r = !!n && !i.test(n);
      let s = e.getSelection();
      let o = e.getCurrentContent().getBlockForKey(s.getStartKey());
      if (this.hasTypeahead()) {
        t.preventDefault();
        return "handled";
      }
      if (r) {
        if (t.altKey || t.metaKey) {
          t.preventDefault();
          this.props.onSubmit();
          return "handled";
        }
        if (t.shiftKey || t.ctrlKey) {
          let t = to(e, "\n");
          if (t) {
            e = ta(e, "", t);
            let n = Modifier.splitBlock(e.getCurrentContent(), e.getSelection());
            e = EditorState.push(e, n, "split-block");
            this.onChange(e);
            return "handled";
          }
        } else if (s.isCollapsed() && ["unordered-list-item", "ordered-list-item"].includes(o.getType())) {
          if (i.test(o.getText())) {
            let t = Modifier.setBlockType(e.getCurrentContent(), s, "unstyled");
            e = EditorState.push(e, t, "change-block-type");
          } else {
            let t = Modifier.splitBlock(e.getCurrentContent(), s);
            e = EditorState.push(e, t, "split-block");
          }
          this.onChange(e);
          return "handled";
        } else if (this.props.submitOnEnter) {
          t.preventDefault();
          this.props.onSubmit();
          return "handled";
        }
      }
      return "not-handled";
    };
    this.handlePastedFiles = t => (this.props.onFilePaste && this.props.onFilePaste(t), "handled");
    this.handlePastedText = (t, e, n) => {
      if (!t) return "handled";
      let i = n.getSelection();
      let r = n.getCurrentContent();
      if (!tt(n) && t.match(tb) && $x(xT(t))) {
        for (let t of (i.getIsBackward() && (i = i.merge({
          anchorKey: i.getFocusKey(),
          anchorOffset: i.getFocusOffset(),
          focusKey: i.getAnchorKey(),
          focusOffset: i.getAnchorOffset(),
          isBackward: !1
        })), Object.values(tM))) r = Modifier.removeInlineStyle(r, i, t);
        let e = (r = r.createEntity("HYPERLINK", "MUTABLE", {
          hyperlink: t,
          commentEditorType: this.props.editorType
        })).getLastCreatedEntityKey();
        let s = Modifier.applyEntity(r, i, e);
        n = EditorState.push(n, s, "apply-entity");
        let o = i.merge({
          anchorOffset: i.getEndOffset(),
          anchorKey: i.getEndKey(),
          focusOffset: i.getEndOffset(),
          focusKey: i.getEndKey()
        });
        n = EditorState.forceSelection(n, o);
        this.onChange(n);
        return "handled";
      }
      if (getFeatureFlags().comments_html_paste && e) {
        let t = function (t, e) {
          var n = new DOMParser().parseFromString(t, "text/html");
          var i = n.getElementsByTagName("a");
          let r = {};
          for (let t = 0; t < i.length; t++) {
            i[t].setAttribute("href", new URL(i[t].href, document.baseURI).toString());
            let e = i[t].getAttribute("href");
            let n = tg(i[t]);
            n && e && (r[e] = n);
            let s = tu(i[t]);
            s && i[t].setAttribute("href", s);
          }
          n.querySelectorAll('[data-stringify-type="paragraph-break"]').forEach(function (t) {
            let e = n.createElement("br");
            t.parentNode && t.parentNode.replaceChild(e, t);
          });
          let s = n.querySelector("body");
          let o = s ? s.innerHTML : n.documentElement.outerHTML;
          let a = o.includes("\x3c!--StartFragment--\x3e") ? o : o.replace(/(?:\r\n|\r|\n)/g, "<br/>");
          let h = convertFromHTML(a);
          let d = ContentState.createFromBlockArray(h.contentBlocks, h.entityMap);
          d.getBlockMap().forEach(t => {
            t?.findEntityRanges(t => {
              let e = t.getEntity();
              return !!e && "LINK" === d.getEntity(e).getType();
            }, (e, n) => {
              let i = t.getText().slice(e, n);
              let s = SelectionState.createEmpty(t.getKey());
              s = s.merge({
                anchorOffset: e,
                focusKey: t.getKey(),
                focusOffset: n
              });
              let o = t.getEntityAt(e);
              let a = d.getEntity(o).getData().url;
              let h = r[a];
              h && h.handle === i ? d = d.createEntity("MENTION", "IMMUTABLE", {
                mention: r[a]
              }) : $x(xT(a)) && (d = d.createEntity("HYPERLINK", "MUTABLE", {
                hyperlink: a,
                editorType: void 0
              }));
              let p = d.getLastCreatedEntityKey();
              d = Modifier.applyEntity(d, s, p);
            });
          });
          return d;
        }(e);
        let i = Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), t.getBlockMap());
        let r = EditorState.push(n, i, "insert-fragment");
        this.onChange(r);
        return "handled";
      }
      {
        let e = Modifier.replaceWithFragment(n.getCurrentContent(), n.getSelection(), ContentState.createFromText(t).getBlockMap());
        let i = EditorState.push(n, e, "insert-fragment");
        this.onChange(i);
        return "handled";
      }
    };
    this.onSubmitHyperlink = t => {
      let e = this.state.editorState;
      if (this.state.hyperlinkState) {
        let n = this.state.hyperlinkState.selectionToHyperlink;
        let i = xT(t);
        if ($x(i)) {
          if (n.isCollapsed()) {
            let t = e.getCurrentContent();
            t = Modifier.insertText(t, n, i);
            e = EditorState.push(e, t, "insert-characters");
            let r = n.getStartOffset();
            n = tn(e, {
              start: r,
              end: r + i.length
            });
          }
          let t = e.getCurrentContent();
          for (let e of tK) t = Modifier.removeInlineStyle(t, n, e);
          if (e = EditorState.push(e, t, "change-inline-style"), this.state.hyperlinkState.entityKey) {
            t = t.replaceEntityData(this.state.hyperlinkState.entityKey, {
              hyperlink: i,
              commentEditorType: this.props.editorType
            });
            let r = Modifier.applyEntity(t, n, this.state.hyperlinkState.entityKey);
            e = EditorState.push(e, r, "apply-entity");
          } else {
            let r = (t = t.createEntity("HYPERLINK", "MUTABLE", {
              hyperlink: i,
              commentEditorType: this.props.editorType
            })).getLastCreatedEntityKey();
            let s = Modifier.applyEntity(t, n, r);
            e = EditorState.push(e, s, "apply-entity");
          }
        } else {
          let t = e.getCurrentContent();
          t = Modifier.removeInlineStyle(t, n, "HIGHLIGHT");
          e = EditorState.push(e, t, "change-inline-style");
          this.props.dispatch(VisualBellActions.enqueue({
            message: getI18nString("hyperlink.invalid_link_plain")
          }));
        }
        this.onChange(e);
        this.setState({
          hyperlinkState: null
        });
      }
    };
    this.onFocus = () => {
      if (this.assignEditorOnInsertClear(), this.props.setIsEditorFocused(!0), this.focus(!this.props.maintainSelectionOnFocus), this.state.hyperlinkState?.selectionToHyperlink && !this.props.hyperlinkLocation) {
        let t = this.state.editorState.getCurrentContent();
        let e = this.state.editorState;
        t = Modifier.removeInlineStyle(t, this.state.hyperlinkState.selectionToHyperlink, "HIGHLIGHT");
        e = EditorState.push(e, t, "change-inline-style");
        this.onChange(e);
        this.setState({
          hyperlinkState: null
        });
      }
    };
    this.onBlur = () => {
      let {
        typeahead
      } = this.props;
      if (typeahead && "mentions" === typeahead.type && typeahead.mentions[typeahead.index]) {
        this.state.contactsAnalytics?.endSession("input_blurred");
        let e = J(this.state.editorState);
        this.trackMentionSearchMetrics(e, typeahead, !1);
      }
      this.props.setIsEditorFocused(!1);
    };
    this.handleKeyCommand = (t, e) => {
      if (tM[t]) {
        let n = tM[t];
        let i = RichUtils.toggleInlineStyle(e, n);
        if (i) {
          this.onChange(i);
          return "handled";
        }
      } else if (tO[t]) {
        let n = tO[t];
        let i = RichUtils.toggleBlockType(e, n);
        if (i) {
          this.onChange(i);
          return "handled";
        }
      } else if ("handle-undo" === t) {
        let t = te(e = EditorState.undo(e)).getText();
        for (let n of G) if (t.trim() === n || "1." === t.trim()) {
          let n = t.length;
          e = EditorState.forceSelection(e, tn(e, {
            start: n,
            end: n
          }));
        }
        this.onChange(e);
        return "handled";
      } else if ("handle-redo" === t) {
        let t = te(e).getText();
        let n = te(e = EditorState.redo(e)).getText();
        for (let i of G) if (t.trim() === i || n.trim() === i) {
          let t = n.length;
          e = EditorState.forceSelection(e, tn(e, {
            start: t,
            end: t
          }));
          this.onChange(e);
          return "handled";
        }
        if ("1." === t.trim() || "1." === n.trim()) {
          let t = n.length;
          e = EditorState.forceSelection(e, tn(e, {
            start: t,
            end: t
          }));
          this.onChange(e);
          return "handled";
        }
        this.onChange(e);
        return "handled";
      } else if ("handle-list-backspace" === t) {
        let t = Modifier.setBlockType(e.getCurrentContent(), e.getSelection(), "unstyled");
        let n = EditorState.push(e, t, "change-block-type");
        this.onChange(n);
        return "handled";
      } else if ("toggle-link" === t) {
        let {
          selection,
          entityKey
        } = function (t) {
          var e;
          let n = t.getSelection();
          let i = null;
          if ((e = n).getStartKey() === e.getEndKey()) {
            let e = te(t);
            let r = [];
            if (e.findEntityRanges(e => {
              let n = e.getEntity();
              return null !== n && "HYPERLINK" === t.getCurrentContent().getEntity(n).getType();
            }, (t, e) => {
              r.push({
                start: t,
                end: e
              });
            }), r.length < 1) return {
              selection: n,
              entityKey: i
            };
            let s = {
              start: n.getStartOffset(),
              end: n.getEndOffset()
            };
            for (let o of r) if (s.start >= o.start && s.end <= o.end) {
              n = tn(t, o);
              i = e.getEntityAt(o.start);
              break;
            }
          }
          i && (n = X(t, n, i));
          return {
            selection: n,
            entityKey: i
          };
        }(e);
        e = EditorState.forceSelection(e, selection);
        this.onChange(e);
        let i = function () {
          let t = window.getSelection();
          if (t && t.rangeCount > 0) {
            let e = t.getRangeAt(0).getBoundingClientRect();
            return _$$E(e);
          }
          return null;
        }();
        if (i && this.props.setHyperlinkLocation && this.props.setHyperlinkEditorRef) {
          this.setHyperlinkEditorState(e, i, entityKey);
          return "handled";
        }
      }
      return "not-handled";
    };
    this.getActiveHyperlinkForCurrentSelection = () => this.state.hyperlinkState?.entityKey ? this.state.editorState.getCurrentContent().getEntity(this.state.hyperlinkState.entityKey).getData().hyperlink : "";
    this.onRemoveHyperlink = () => {
      if (this.state.hyperlinkState?.entityKey) {
        let t = this.state.editorState;
        let e = Modifier.applyEntity(this.state.editorState.getCurrentContent(), this.state.hyperlinkState.selectionToHyperlink, null);
        this.onChange(EditorState.push(t, e, "apply-entity"));
      }
    };
    this.keyBindingFn = t => {
      if ("Escape" === t.key && !this.props.delegateEscapeHandling) {
        this.handleEscape();
        return null;
      }
      if ("Backspace" === t.key) {
        let t = te(this.state.editorState);
        if (("ordered-list-item" === t.getType() || "unordered-list-item" === t.getType()) && function (t) {
          return !!tt(t) && 0 === t.getSelection().getStartOffset();
        }(this.state.editorState)) return "handle-list-backspace";
      }
      if ("ArrowUp" === t.key || "ArrowDown" === t.key || "ArrowLeft" === t.key || "ArrowRight" === t.key || "Tab" === t.key) return this.onNavigationKeyDown(t);
      if (hasCommandModifier(t)) {
        t.stopPropagation();
        let e = AppStateTsApi?.uiState().isUI3.getCopy() ?? !1;
        let n = "k" === t.key && !e || t.shiftKey && "u" === t.key && e;
        if ("z" === t.key && !t.shiftKey) return "handle-undo";
        if ("z" === t.key && t.shiftKey) return "handle-redo";
        if ("b" === t.key) return "toggle-bold";
        if ("i" === t.key) return "toggle-italic";
        if (n) return "toggle-link";
        if (t.shiftKey && "x" === t.key) return "toggle-strikethrough";
        if (t.shiftKey && "8" === t.key) return "toggle-unordered-list";
        if (t.shiftKey && "7" === t.key) return "toggle-ordered-list";
      }
      t.stopPropagation();
      return getDefaultKeyBinding(t);
    };
    this.onMouseDown = t => {
      t.stopPropagation();
    };
    this.onContextMenu = t => {
      desktopAPIInstance || t.stopPropagation();
    };
    this.addAriaHiddenToPlaceholder = () => {
      let t = this.wrapperRef.current?.querySelector(".public-DraftEditorPlaceholder-root");
      t && t.setAttribute("aria-hidden", "true");
    };
    let e = Ty(t.currentOrgId ?? null, t.user ?? null, t.currentOrgUsers);
    let n = _$$pP(t.currentOrgId, t.openFileTeamId, e);
    let i = t.openFileTeamId ?? null;
    let d = null;
    let S = tx();
    d = this.props.messageMeta ? td(this.props.messageMeta, S, this.props.editorType) : EditorState.createEmpty(S);
    this.state = {
      editorState: d,
      contactsAnalytics: new yO(I2, t.openFileKey, n, t.currentOrgId, i),
      hyperlinkState: null
    };
  }
  async componentDidMount() {
    if (this.assignEditorOnInsertClear(), this.addAriaHiddenToPlaceholder(), this.props.mountInputFocused) {
      let t = this.props.moveFocusToStartOnMount ? tc(this.state.editorState) : EditorState.moveFocusToEnd(this.state.editorState);
      if (this.props.setIsEditorFocused(!0), this.onChange(t), (!this.props.hasMentionedPendingUserInvite || !this.props.hasMentionedPendingUserInviteTwice) && this.props.pendingUserInvites && this.props.pendingUserInvites.length > 0) {
        if (1 === this.props.pendingUserInvites.length) this.insertFirstPendingUserInvite(this.props.pendingUserInvites);else {
          let {
            result,
            canceled
          } = await this.newMentionsSearch("");
          canceled || setTimeout(() => {
            this.props.dispatch(We(result));
            this.onChange(t);
            this.props.onUpdateTextArea(this.state.editorState);
          }, 180);
        }
      }
    }
    this.props.editorRef && this.props.editorType && this.props.dispatch(pP({
      targetKey: this.props.editorType,
      targetRef: this.props.editorRef
    }));
    this.props.updateMessageOnMount && this.onEditorContentChange(this.state.editorState);
  }
  componentDidCatch(t) {
    "Node.removeChild: The node to be removed is not a child of this node" === t.message && this.forceUpdate();
  }
  componentDidUpdate(t) {
    this.addAriaHiddenToPlaceholder();
    let e = this.state.editorState;
    if (!Wf(this.props.messageMeta, t.messageMeta)) {
      let t = tl(this.state.editorState);
      if (!Wf(t, this.props.messageMeta)) {
        let t = tx();
        e = td(this.props.messageMeta, t, this.props.editorType);
        e = this.state.editorState.getSelection().getHasFocus() ? EditorState.moveFocusToEnd(e) : EditorState.moveSelectionToEnd(e);
        this.onChange(e);
      }
      let n = this.props.pendingUserInvites?.length === 1 ? e.getCurrentContent().getPlainText() === `${this.props.pendingUserInvites[0].user?.email} ` : "" === e.getCurrentContent().getPlainText();
      (!this.props.hasMentionedPendingUserInvite || !this.props.hasMentionedPendingUserInviteTwice) && (this.props.pendingUserInvites?.length ?? 0) > 0 && this.props.user?.id && !this.props.typeahead && n && setTimeout(async () => {
        if (this.props.onUpdateTextArea(this.state.editorState), this.props.pendingUserInvites?.length === 1) this.props.dispatch(We(_$$tI({
          index: -1,
          userId: this.props?.user?.id
        })));else {
          let t = await fG("", this.props.mentionables, !this.props.isProtoView && this.props.figmaEditorType === FFileType.DESIGN);
          this.props.dispatch(We(t));
        }
      }, 180);
    }
    if (t.mentionables !== this.props.mentionables && this.onEditorContentChange(e), this.props.initMention && !t.initMention) {
      let t;
      let n = e;
      t = n.getSelection().size > 0 ? Modifier.replaceText(n.getCurrentContent(), n.getSelection(), "@") : Modifier.insertText(n.getCurrentContent(), n.getSelection(), "@");
      this.setState({
        editorState: EditorState.push(e, t, "insert-fragment")
      });
    }
    if (!t.typeahead && this.props.typeahead && "mentions" === this.props.typeahead.type) {
      let {
        search
      } = V(e);
      "" === search && this.state.contactsAnalytics?.trackQueryResult("", this.props.typeahead.mentions.length);
      this.props.dispatch(Qe());
    }
  }
  componentWillUnmount() {
    this.props.setIsEditorFocused(!1);
    let t = this.props.pendingUserInvites && this.props.pendingUserInvites.length > 0;
    t && !this.props.hasMentionedPendingUserInvite ? (this.props.dispatch(_$$b({
      has_mentioned_pending_user_invite: !0
    })), this.props.setPendingUserInvitesAtom?.([])) : t && this.props.hasMentionedPendingUserInvite && !this.props.hasMentionedPendingUserInviteTwice && this.props.dispatch(_$$b({
      has_mentioned_pending_user_invite_twice: !0
    }));
  }
  editHyperlinkFromTooltip(t, e) {
    let n = this.state.editorState.getCurrentContent();
    let i = "";
    let r = 0;
    let s = 0;
    if (n.getBlockMap().every((e, n) => (e && e.findEntityRanges(e => e.getEntity() === t, (t, e) => {
      i = n || "";
      r = t;
      s = e;
    }), !i)), this.props.dispatch(jD()), "" === i) return;
    let o = this.state.editorState.getSelection().merge({
      anchorKey: i,
      focusKey: i,
      anchorOffset: r,
      focusOffset: s
    });
    o = X(this.state.editorState, o, t);
    let a = EditorState.forceSelection(this.state.editorState, o);
    this.onChange(a);
    e && this.setHyperlinkEditorState(a, e, t);
  }
  setHyperlinkEditorState(t, e, n) {
    if (this.props.setHyperlinkLocation && this.props.setHyperlinkEditorRef && this.props.editorRef) {
      this.setState({
        hyperlinkState: {
          selectionToHyperlink: t.getSelection(),
          entityKey: n
        }
      });
      this.props.setHyperlinkLocation(e);
      this.props.setHyperlinkEditorRef(this.props.editorRef);
      let i = Modifier.applyInlineStyle(t.getCurrentContent(), t.getSelection(), "HIGHLIGHT");
      let r = EditorState.push(t, i, "change-inline-style");
      this.onChange(r);
    }
  }
  render() {
    let t = "editable_typeahead--wrapperBase--rwdvD";
    t = this.props.className ? t + " " + this.props.className : t + " editable_typeahead--wrapperDefault--G1MoY";
    let e = function (t) {
      let e = t.getCurrentContent();
      return !e.hasText() && "unstyled" === e.getBlockMap().first().getType();
    }(this.state.editorState);
    return jsx("div", {
      className: t,
      onMouseDown: this.onMouseDown,
      onContextMenu: this.onContextMenu,
      onFocus: this.onFocus,
      onClick: this.onFocus,
      "data-testid": "editable-typeahead",
      ref: this.wrapperRef,
      children: jsx(Editor, {
        "aria-haspopup": "menu",
        ariaActiveDescendantID: this.props.typeahead?.type === "mentions" ? AT_MENTIONS_TYPEAHEAD : void 0,
        ariaControls: this.props.typeahead?.type === "mentions" ? AT_MENTIONS_TYPEAHEAD : void 0,
        ariaDescribedBy: "",
        ariaLabel: this.props.ariaLabel ?? this.props.placeholderText,
        customStyleMap: tI,
        editorState: this.state.editorState,
        handleBeforeInput: this._handleBeforeInput,
        handleKeyCommand: this.handleKeyCommand,
        handlePastedFiles: this.handlePastedFiles,
        handlePastedText: this.handlePastedText,
        handleReturn: this.handleReturn,
        keyBindingFn: this.keyBindingFn,
        onBlur: this.onBlur,
        onChange: this.onChange,
        placeholder: e ? this.props.placeholderText : void 0,
        readOnly: this.props.readOnly,
        spellCheck: !0,
        tabIndex: this.props.tabIndex || 0
      })
    });
  }
}
$$tA0.displayName = "EditableTypeahead";
export const iX = $$tA0;