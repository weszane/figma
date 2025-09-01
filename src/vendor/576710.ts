import i, { YH, OF, Pe, vS, Fh, MK, sj, QR, sU, Nb, iR, EY, ZX, FB, om, Je } from "../vendor/59696";
import s, { OP, c_, DK, Lz, Eg, Z9, NZ, xO, w4 } from "../vendor/37366";
import o, { mv, Xt } from "../vendor/401644";
export class $$a6 {
  constructor(e, r, n, i) {
    this.state = e;
    this.pos = r;
    this.explicit = n;
    this.view = i;
    this.abortListeners = [];
    this.abortOnDocChange = !1;
  }
  tokenBefore(e) {
    let r = mv(this.state).resolveInner(this.pos, -1);
    for (; r && 0 > e.indexOf(r.name);) r = r.parent;
    return r ? {
      from: r.from,
      to: this.pos,
      text: this.state.sliceDoc(r.from, this.pos),
      type: r.type
    } : null;
  }
  matchBefore(e) {
    let r = this.state.doc.lineAt(this.pos);
    let n = Math.max(r.from, this.pos - 250);
    let i = r.text.slice(n - r.from, this.pos - r.from);
    let s = i.search(y(e, !1));
    return s < 0 ? null : {
      from: n + s,
      to: this.pos,
      text: i.slice(s)
    };
  }
  get aborted() {
    return null == this.abortListeners;
  }
  addEventListener(e, r, n) {
    "abort" == e && this.abortListeners && (this.abortListeners.push(r), n && n.onDocChange && (this.abortOnDocChange = !0));
  }
}
function h(e) {
  let r = Object.keys(e).join("");
  let n = /\w/.test(r);
  n && (r = r.replace(/\w/g, ""));
  return `[${n ? "\\w" : ""}${r.replace(/[^\w\s]/g, "\\$&")}]`;
}
function d(e) {
  let r = Object.create(null);
  let n = Object.create(null);
  for (let {
    label
  } of e) {
    r[label[0]] = !0;
    for (let e = 1; e < label.length; e++) n[label[e]] = !0;
  }
  let i = h(r) + h(n) + "*$";
  return [RegExp("^" + i), new RegExp(i)];
}
export function $$p7(e) {
  let r = e.map(e => "string" == typeof e ? {
    label: e
  } : e);
  let [n, i] = r.every(e => /^\w+$/.test(e.label)) ? [/\w*$/, /\w+$/] : d(r);
  return e => {
    let s = e.matchBefore(i);
    return s || e.explicit ? {
      from: s ? s.from : e.pos,
      options: r,
      validFor: n
    } : null;
  };
}
export function $$g1(e, r) {
  return n => {
    for (let r = mv(n.state).resolveInner(n.pos, -1); r; r = r.parent) {
      if (e.indexOf(r.name) > -1) return null;
      if (r.type.isTop) break;
    }
    return r(n);
  };
}
class m {
  constructor(e, r, n, i) {
    this.completion = e;
    this.source = r;
    this.match = n;
    this.score = i;
  }
}
function v(e) {
  return e.selection.main.from;
}
function y(e, r) {
  var n;
  let {
    source
  } = e;
  let s = r && "^" != source[0];
  let o = "$" != source[source.length - 1];
  return s || o ? RegExp(`${s ? "^" : ""}(?:${source})${o ? "$" : ""}`, null !== (n = e.flags) && void 0 !== n ? n : e.ignoreCase ? "i" : "") : e;
}
let b = YH.define();
function O(e, r, n, s) {
  let {
    main
  } = e.selection;
  let a = n - main.from;
  let h = s - main.from;
  return Object.assign(Object.assign({}, e.changeByRange(d => {
    if (d != main && n != s && e.sliceDoc(d.from + a, d.from + h) != e.sliceDoc(n, s)) return {
      range: d
    };
    let p = e.toText(r);
    return {
      changes: {
        from: d.from + a,
        to: s == main.from ? d.to : d.from + h,
        insert: p
      },
      range: OF.cursor(d.from + a + p.length)
    };
  })), {
    scrollIntoView: !0,
    userEvent: "input.complete"
  });
}
let x = new WeakMap();
function w(e) {
  if (!Array.isArray(e)) return e;
  let r = x.get(e);
  r || x.set(e, r = $$p7(e));
  return r;
}
let k = Pe.define();
let _ = Pe.define();
class S {
  constructor(e) {
    this.pattern = e;
    this.chars = [];
    this.folded = [];
    this.any = [];
    this.precise = [];
    this.byWord = [];
    this.score = 0;
    this.matched = [];
    for (let r = 0; r < e.length;) {
      let n = vS(e, r);
      let s = Fh(n);
      this.chars.push(n);
      let o = e.slice(r, r + s);
      let a = o.toUpperCase();
      this.folded.push(vS(a == o ? o.toLowerCase() : a, 0));
      r += s;
    }
    this.astral = e.length != this.chars.length;
  }
  ret(e, r) {
    this.score = e;
    this.matched = r;
    return this;
  }
  match(e) {
    if (0 == this.pattern.length) return this.ret(-100, []);
    if (e.length < this.pattern.length) return null;
    let {
      chars,
      folded,
      any,
      precise,
      byWord
    } = this;
    if (1 == chars.length) {
      let s = vS(e, 0);
      let o = Fh(s);
      let a = o == e.length ? 0 : -100;
      if (s == chars[0]); else {
        if (s != folded[0]) return null;
        a += -200;
      }
      return this.ret(a, [0, o]);
    }
    let h = e.indexOf(this.pattern);
    if (0 == h) return this.ret(e.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
    let d = chars.length;
    let p = 0;
    if (h < 0) {
      for (function() {
        let o = 0;
        let a = Math.min(e.length, 200);
      }(); o < a && p < d;) {
        let a = vS(e, o);
        (a == chars[p] || a == folded[p]) && (any[p++] = o);
        o += Fh(a);
      }
      if (p < d) return null;
    }
    let g = 0;
    let m = 0;
    let v = !1;
    let y = 0;
    let b = -1;
    let O = -1;
    let x = /[a-z]/.test(e);
    let w = !0;
    for (function() {
      let s = 0;
      let p = Math.min(e.length, 200);
      let k = 0;
    }(); s < p && m < d;) {
      let p = vS(e, s);
      h < 0 && (g < d && p == chars[g] && (precise[g++] = s), y < d && (p == chars[y] || p == folded[y] ? (0 == y && (b = s), O = s + 1, y++) : y = 0));
      let _;
      let S = p < 255 ? p >= 48 && p <= 57 || p >= 97 && p <= 122 ? 2 : p >= 65 && p <= 90 ? 1 : 0 : (_ = MK(p)) != _.toLowerCase() ? 1 : _ != _.toUpperCase() ? 2 : 0;
      (!s || 1 == S && x || 0 == k && 0 != S) && (chars[m] == p || folded[m] == p && (v = !0) ? byWord[m++] = s : byWord.length && (w = !1));
      k = S;
      s += Fh(p);
    }
    return m == d && 0 == byWord[0] && w ? this.result(-100 + (v ? -200 : 0), byWord, e) : y == d && 0 == b ? this.ret(-200 - e.length + (O == e.length ? 0 : -100), [0, O]) : h > -1 ? this.ret(-700 - e.length, [h, h + this.pattern.length]) : y == d ? this.ret(-900 - e.length, [b, O]) : m == d ? this.result(-100 + (v ? -200 : 0) + -700 + (w ? 0 : -1100), byWord, e) : 2 == chars.length ? null : this.result((any[0] ? -700 : 0) + -200 + -1100, any, e);
  }
  result(e, r, n) {
    let s = [];
    let o = 0;
    for (let e of r) {
      let r = e + (this.astral ? Fh(vS(n, e)) : 1);
      o && s[o - 1] == e ? s[o - 1] = r : (s[o++] = e, s[o++] = r);
    }
    return this.ret(e - n.length, s);
  }
}
class E {
  constructor(e) {
    this.pattern = e;
    this.matched = [];
    this.score = 0;
    this.folded = e.toLowerCase();
  }
  match(e) {
    if (e.length < this.pattern.length) return null;
    let r = e.slice(0, this.pattern.length);
    let n = r == this.pattern ? 0 : r.toLowerCase() == this.folded ? -200 : null;
    return null == n ? null : (this.matched = [0, r.length], this.score = n + (e.length == this.pattern.length ? 0 : -100), this);
  }
}
let A = sj.define({
  combine: e => QR(e, {
    activateOnTyping: !0,
    activateOnCompletion: () => !1,
    activateOnTypingDelay: 100,
    selectOnOpen: !0,
    override: null,
    closeOnBlur: !0,
    maxRenderedOptions: 100,
    defaultKeymap: !0,
    tooltipClass: () => "",
    optionClass: () => "",
    aboveCursor: !1,
    icons: !0,
    addToOptions: [],
    positionInfo: T,
    filterStrict: !1,
    compareCompletions: (e, r) => e.label.localeCompare(r.label),
    interactionDelay: 75,
    updateSyncTime: 100
  }, {
    defaultKeymap: (e, r) => e && r,
    closeOnBlur: (e, r) => e && r,
    icons: (e, r) => e && r,
    tooltipClass: (e, r) => n => C(e(n), r(n)),
    optionClass: (e, r) => n => C(e(n), r(n)),
    addToOptions: (e, r) => e.concat(r),
    filterStrict: (e, r) => e || r
  })
});
function C(e, r) {
  return e ? r ? e + " " + r : e : r;
}
function T(e, r, n, i, o, a) {
  let h = e.textDirection == OP.RTL;
  let d = h;
  let p = !1;
  let g = "top";
  let m;
  let v;
  let y = r.left - o.left;
  let b = o.right - r.right;
  let O = i.right - i.left;
  let x = i.bottom - i.top;
  if (d && y < Math.min(O, b) ? d = !1 : !d && b < Math.min(O, y) && (d = !0), O <= (d ? y : b)) {
    m = Math.max(o.top, Math.min(n.top, o.bottom - x)) - r.top;
    v = Math.min(400, d ? y : b);
  } else {
    p = !0;
    v = Math.min(400, (h ? r.right : o.right - r.left) - 30);
    let e = o.bottom - r.bottom;
    e >= x || e > r.top ? m = n.bottom - r.top : (g = "bottom", m = r.bottom - n.top);
  }
  let w = (r.bottom - r.top) / a.offsetHeight;
  let k = (r.right - r.left) / a.offsetWidth;
  return {
    style: `${g}: ${m / w}px; max-width: ${v / k}px`,
    class: "cm-completionInfo-" + (p ? h ? "left-narrow" : "right-narrow" : d ? "left" : "right")
  };
}
function I(e) {
  let r = e.addToOptions.slice();
  e.icons && r.push({
    render(e) {
      let r = document.createElement("div");
      r.classList.add("cm-completionIcon");
      e.type && r.classList.add(...e.type.split(/\s+/g).map(e => "cm-completionIcon-" + e));
      r.setAttribute("aria-hidden", "true");
      return r;
    },
    position: 20
  });
  r.push({
    render(e, r, n, i) {
      let s = document.createElement("span");
      s.className = "cm-completionLabel";
      let o = e.displayLabel || e.label;
      let a = 0;
      for (let e = 0; e < i.length;) {
        let r = i[e++];
        let n = i[e++];
        r > a && s.appendChild(document.createTextNode(o.slice(a, r)));
        let h = s.appendChild(document.createElement("span"));
        h.appendChild(document.createTextNode(o.slice(r, n)));
        h.className = "cm-completionMatchedText";
        a = n;
      }
      a < o.length && s.appendChild(document.createTextNode(o.slice(a)));
      return s;
    },
    position: 50
  }, {
    render(e) {
      if (!e.detail) return null;
      let r = document.createElement("span");
      r.className = "cm-completionDetail";
      r.textContent = e.detail;
      return r;
    },
    position: 80
  });
  return r.sort((e, r) => e.position - r.position).map(e => e.render);
}
function P(e, r, n) {
  if (e <= n) return {
    from: 0,
    to: e
  };
  if (r < 0 && (r = 0), r <= e >> 1) {
    let e = Math.floor(r / n);
    return {
      from: e * n,
      to: (e + 1) * n
    };
  }
  let i = Math.floor((e - r) / n);
  return {
    from: e - (i + 1) * n,
    to: e - i * n
  };
}
class R {
  constructor(e, r, n) {
    this.view = e;
    this.stateField = r;
    this.applyCompletion = n;
    this.info = null;
    this.infoDestroy = null;
    this.placeInfoReq = {
      read: () => this.measureInfo(),
      write: e => this.placeInfo(e),
      key: this
    };
    this.space = null;
    this.currentClass = "";
    let i = e.state.field(r);
    let {
      options,
      selected
    } = i.open;
    let a = e.state.facet(A);
    this.optionContent = I(a);
    this.optionClass = a.optionClass;
    this.tooltipClass = a.tooltipClass;
    this.range = P(options.length, selected, a.maxRenderedOptions);
    this.dom = document.createElement("div");
    this.dom.className = "cm-tooltip-autocomplete";
    this.updateTooltipClass(e.state);
    this.dom.addEventListener("mousedown", n => {
      let {
        options
      } = e.state.field(r).open;
      for (function() {
        let r = n.target;
        let s;
      }(); r && r != this.dom; r = r.parentNode) if ("LI" == r.nodeName && (s = /-(\d+)$/.exec(r.id)) && +s[1] < options.length) {
        this.applyCompletion(e, options[+s[1]]);
        n.preventDefault();
        return;
      }
    });
    this.dom.addEventListener("focusout", r => {
      let n = e.state.field(this.stateField, !1);
      n && n.tooltip && e.state.facet(A).closeOnBlur && r.relatedTarget != e.contentDOM && e.dispatch({
        effects: _.of(null)
      });
    });
    this.showOptions(options, i.id);
  }
  mount() {
    this.updateSel();
  }
  showOptions(e, r) {
    this.list && this.list.remove();
    this.list = this.dom.appendChild(this.createListBox(e, r, this.range));
    this.list.addEventListener("scroll", () => {
      this.info && this.view.requestMeasure(this.placeInfoReq);
    });
  }
  update(e) {
    var r;
    let n = e.state.field(this.stateField);
    let i = e.startState.field(this.stateField);
    if (this.updateTooltipClass(e.state), n != i) {
      let {
        options,
        selected,
        disabled
      } = n.open;
      i.open && i.open.options == options || (this.range = P(options.length, selected, e.state.facet(A).maxRenderedOptions), this.showOptions(options, n.id));
      this.updateSel();
      disabled != i.open?.disabled && this.dom.classList.toggle("cm-tooltip-autocomplete-disabled", !!disabled);
    }
  }
  updateTooltipClass(e) {
    let r = this.tooltipClass(e);
    if (r != this.currentClass) {
      for (let e of this.currentClass.split(" ")) e && this.dom.classList.remove(e);
      for (let e of r.split(" ")) e && this.dom.classList.add(e);
      this.currentClass = r;
    }
  }
  positioned(e) {
    this.space = e;
    this.info && this.view.requestMeasure(this.placeInfoReq);
  }
  updateSel() {
    let e = this.view.state.field(this.stateField);
    let r = e.open;
    if ((r.selected > -1 && r.selected < this.range.from || r.selected >= this.range.to) && (this.range = P(r.options.length, r.selected, this.view.state.facet(A).maxRenderedOptions), this.showOptions(r.options, e.id)), this.updateSelectedOption(r.selected)) {
      this.destroyInfo();
      let {
        completion
      } = r.options[r.selected];
      let {
        info
      } = n;
      if (!info) return;
      let o = "string" == typeof info ? document.createTextNode(info) : info(completion);
      if (!o) return;
      "then" in o ? o.then(r => {
        r && this.view.state.field(this.stateField, !1) == e && this.addInfoPane(r, completion);
      }).catch(e => c_(this.view.state, e, "completion info")) : this.addInfoPane(o, completion);
    }
  }
  addInfoPane(e, r) {
    this.destroyInfo();
    let n = this.info = document.createElement("div");
    if (n.className = "cm-tooltip cm-completionInfo", null != e.nodeType) {
      n.appendChild(e);
      this.infoDestroy = null;
    } else {
      let {
        dom,
        destroy
      } = e;
      n.appendChild(dom);
      this.infoDestroy = destroy || null;
    }
    this.dom.appendChild(n);
    this.view.requestMeasure(this.placeInfoReq);
  }
  updateSelectedOption(e) {
    var _this = this;
    let r = null;
    for (function() {
      let n = _this.list.firstChild;
      let i = _this.range.from;
    }(); n; n = n.nextSibling, i++) "LI" == n.nodeName && n.id ? i == e ? n.hasAttribute("aria-selected") || (n.setAttribute("aria-selected", "true"), r = n) : n.hasAttribute("aria-selected") && n.removeAttribute("aria-selected") : i--;
    r && D(this.list, r);
    return r;
  }
  measureInfo() {
    let e = this.dom.querySelector("[aria-selected]");
    if (!e || !this.info) return null;
    let r = this.dom.getBoundingClientRect();
    let n = this.info.getBoundingClientRect();
    let i = e.getBoundingClientRect();
    let s = this.space;
    if (!s) {
      let e = this.dom.ownerDocument.defaultView || window;
      s = {
        left: 0,
        top: 0,
        right: e.innerWidth,
        bottom: e.innerHeight
      };
    }
    return i.top > Math.min(s.bottom, r.bottom) - 10 || i.bottom < Math.max(s.top, r.top) + 10 ? null : this.view.state.facet(A).positionInfo(this.view, r, i, n, s, this.dom);
  }
  placeInfo(e) {
    this.info && (e ? (e.style && (this.info.style.cssText = e.style), this.info.className = "cm-tooltip cm-completionInfo " + (e.$$class || "")) : this.info.style.cssText = "top: -1e6px");
  }
  createListBox(e, r, n) {
    let i = document.createElement("ul");
    i.id = r;
    i.setAttribute("role", "listbox");
    i.setAttribute("aria-expanded", "true");
    i.setAttribute("aria-label", this.view.state.phrase("Completions"));
    let s = null;
    for (let o = n.from; o < n.to; o++) {
      let {
        completion,
        match
      } = e[o];
      let {
        section
      } = a;
      if (section) {
        let e = "string" == typeof section ? section : section.name;
        e != s && (o > n.from || 0 == n.from) && (s = e, "string" != typeof section && section.header ? i.appendChild(section.header(section)) : i.appendChild(document.createElement("completion-section")).textContent = e);
      }
      let p = i.appendChild(document.createElement("li"));
      p.id = r + "-" + o;
      p.setAttribute("role", "option");
      let g = this.optionClass(completion);
      for (let e of (g && (p.className = g), this.optionContent)) {
        let r = e(completion, this.view.state, this.view, match);
        r && p.appendChild(r);
      }
    }
    n.from && i.classList.add("cm-completionListIncompleteTop");
    n.to < e.length && i.classList.add("cm-completionListIncompleteBottom");
    return i;
  }
  destroyInfo() {
    this.info && (this.infoDestroy && this.infoDestroy(), this.info.remove(), this.info = null);
  }
  destroy() {
    this.destroyInfo();
  }
}
function M(e, r) {
  return n => new R(n, e, r);
}
function D(e, r) {
  let n = e.getBoundingClientRect();
  let i = r.getBoundingClientRect();
  let s = n.height / e.offsetHeight;
  i.top < n.top ? e.scrollTop -= (n.top - i.top) / s : i.bottom > n.bottom && (e.scrollTop += (i.bottom - n.bottom) / s);
}
function N(e) {
  return 100 * (e.boost || 0) + (e.apply ? 10 : 0) + (e.info ? 5 : 0) + (e.type ? 1 : 0);
}
function $(e, r) {
  let n = [];
  let i = null;
  let s = e => {
    n.push(e);
    let {
      section
    } = e.completion;
    if (section) {
      i || (i = []);
      let e = "string" == typeof section ? section : section.name;
      i.some(r => r.name == e) || i.push("string" == typeof section ? {
        name: e
      } : section);
    }
  };
  let o = r.facet(A);
  for (let i of e) if (i.hasResult()) {
    let e = i.result.getMatch;
    if (!1 === i.result.filter) for (let r of i.result.options) s(new m(r, i.source, e ? e(r) : [], 1e9 - n.length)); else {
      let n = r.sliceDoc(i.from, i.to);
      let a;
      let h = o.filterStrict ? new E(n) : new S(n);
      for (let r of i.result.options) if (a = h.match(r.label)) {
        let n = r.displayLabel ? e ? e(r, a.matched) : [] : a.matched;
        s(new m(r, i.source, n, a.score + (r.boost || 0)));
      }
    }
  }
  if (i) {
    let e = Object.create(null);
    let r = 0;
    let s = (e, r) => {
      var n;
      var i;
      return (null !== (n = e.rank) && void 0 !== n ? n : 1e9) - (null !== (i = r.rank) && void 0 !== i ? i : 1e9) || (e.name < r.name ? -1 : 1);
    };
    for (let n of i.sort(s)) {
      r -= 1e5;
      e[n.name] = r;
    }
    for (let r of n) {
      let {
        section
      } = r.completion;
      section && (r.score += e["string" == typeof section ? section : section.name]);
    }
  }
  let a = [];
  let h = null;
  let d = o.compareCompletions;
  for (let e of n.sort((e, r) => r.score - e.score || d(e.completion, r.completion))) {
    let r = e.completion;
    h && h.label == r.label && h.detail == r.detail && (null == h.type || null == r.type || h.type == r.type) && h.apply == r.apply && h.boost == r.boost ? N(e.completion) > N(h) && (a[a.length - 1] = e) : a.push(e);
    h = e.completion;
  }
  return a;
}
class L {
  constructor(e, r, n, i, s, o) {
    this.options = e;
    this.attrs = r;
    this.tooltip = n;
    this.timestamp = i;
    this.selected = s;
    this.disabled = o;
  }
  setSelected(e, r) {
    return e == this.selected || e >= this.options.length ? this : new L(this.options, U(r, e), this.tooltip, this.timestamp, e, this.disabled);
  }
  static build(e, r, n, i, s, o) {
    if (i && !o && e.some(e => e.isPending)) return i.setDisabled();
    let a = $(e, r);
    if (!a.length) return i && e.some(e => e.isPending) ? i.setDisabled() : null;
    let h = r.facet(A).selectOnOpen ? 0 : -1;
    if (i && i.selected != h && -1 != i.selected) {
      let e = i.options[i.selected].completion;
      for (let r = 0; r < a.length; r++) if (a[r].completion == e) {
        h = r;
        break;
      }
    }
    return new L(a, U(n, h), {
      pos: e.reduce((e, r) => r.hasResult() ? Math.min(e, r.from) : e, 1e8),
      create: K,
      above: s.aboveCursor
    }, i ? i.timestamp : Date.now(), h, !1);
  }
  map(e) {
    return new L(this.options, this.attrs, Object.assign(Object.assign({}, this.tooltip), {
      pos: e.mapPos(this.tooltip.pos)
    }), this.timestamp, this.selected, this.disabled);
  }
  setDisabled() {
    return new L(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
  }
}
class j {
  constructor(e, r, n) {
    this.active = e;
    this.id = r;
    this.open = n;
  }
  static start() {
    return new j(Q, "cm-ac-" + Math.floor(2e6 * Math.random()).toString(36), null);
  }
  update(e) {
    let {
      state
    } = e;
    let n = state.facet(A);
    let i = (n.override || state.languageDataAt("autocomplete", v(state)).map(w)).map(r => (this.active.find(e => e.source == r) || new B(r, this.active.some(e => 0 != e.state) ? 1 : 0)).update(e, n));
    i.length == this.active.length && i.every((e, r) => e == this.active[r]) && (i = this.active);
    let s = this.open;
    let o = e.effects.some(e => e.is(Y));
    for (let a of (s && e.docChanged && (s = s.map(e.changes)), e.selection || i.some(r => r.hasResult() && e.changes.touchesRange(r.from, r.to)) || !z(i, this.active) || o ? s = L.build(i, state, this.id, s, n, o) : s && s.disabled && !i.some(e => e.isPending) && (s = null), !s && i.every(e => !e.isPending) && i.some(e => e.hasResult()) && (i = i.map(e => e.hasResult() ? new B(e.source, 0) : e)), e.effects)) a.is(G) && (s = s && s.setSelected(a.value, this.id));
    return i == this.active && s == this.open ? this : new j(i, this.id, s);
  }
  get tooltip() {
    return this.open ? this.open.tooltip : null;
  }
  get attrs() {
    return this.open ? this.open.attrs : this.active.length ? Z : F;
  }
}
function z(e, r) {
  if (e == r) return !0;
  for (function() {
    let n = 0;
    let i = 0;
  }(); ;) {
    for (; n < e.length && !e[n].hasResult();) n++;
    for (; i < r.length && !r[i].hasResult();) i++;
    let s = n == e.length;
    let o = i == r.length;
    if (s || o) return s == o;
    if (e[n++].result != r[i++].result) return !1;
  }
}
let Z = {
  "aria-autocomplete": "list"
};
let F = {};
function U(e, r) {
  let n = {
    "aria-autocomplete": "list",
    "aria-haspopup": "listbox",
    "aria-controls": e
  };
  r > -1 && (n["aria-activedescendant"] = e + "-" + r);
  return n;
}
let Q = [];
function V(e, r) {
  if (e.isUserEvent("input.complete")) {
    let n = e.annotation(b);
    if (n && r.activateOnCompletion(n)) return 12;
  }
  let n = e.isUserEvent("input.type");
  return n && r.activateOnTyping ? 5 : n ? 1 : e.isUserEvent("delete.backward") ? 2 : e.selection ? 8 : e.docChanged ? 16 : 0;
}
class B {
  constructor(e, r, n = !1) {
    this.source = e;
    this.state = r;
    this.explicit = n;
  }
  hasResult() {
    return !1;
  }
  get isPending() {
    return 1 == this.state;
  }
  update(e, r) {
    let n = V(e, r);
    let i = this;
    for (let r of ((8 & n || 16 & n && this.touches(e)) && (i = new B(i.source, 0)), 4 & n && 0 == i.state && (i = new B(this.source, 1)), i = i.updateFor(e, n), e.effects)) if (r.is(k)) i = new B(i.source, 1, r.value); else if (r.is(_)) i = new B(i.source, 0); else if (r.is(Y)) for (let e of r.value) e.source == i.source && (i = e);
    return i;
  }
  updateFor(e, r) {
    return this.map(e.changes);
  }
  map(e) {
    return this;
  }
  touches(e) {
    return e.changes.touchesRange(v(e.state));
  }
}
class q extends B {
  constructor(e, r, n, i, s, o) {
    super(e, 3, r);
    this.limit = n;
    this.result = i;
    this.from = s;
    this.to = o;
  }
  hasResult() {
    return !0;
  }
  updateFor(e, r) {
    var n;
    if (!(3 & r)) return this.map(e.changes);
    let i = this.result;
    i.map && !e.changes.empty && (i = i.map(i, e.changes));
    let s = e.changes.mapPos(this.from);
    let o = e.changes.mapPos(this.to, 1);
    let h = v(e.state);
    if (h > o || !i || 2 & r && (v(e.startState) == this.from || h < this.limit)) return new B(this.source, 4 & r ? 1 : 0);
    let d = e.changes.mapPos(this.limit);
    return W(i.validFor, e.state, s, o) ? new q(this.source, this.explicit, d, i, s, o) : i.update && (i = i.update(i, s, o, new $$a6(e.state, h, !1))) ? new q(this.source, this.explicit, d, i, i.from, null !== (n = i.to) && void 0 !== n ? n : v(e.state)) : new B(this.source, 1, this.explicit);
  }
  map(e) {
    return e.empty ? this : (this.result.map ? this.result.map(this.result, e) : this.result) ? new q(this.source, this.explicit, e.mapPos(this.limit), this.result, e.mapPos(this.from), e.mapPos(this.to, 1)) : new B(this.source, 0);
  }
  touches(e) {
    return e.changes.touchesRange(this.from, this.to);
  }
}
function W(e, r, n, i) {
  if (!e) return !1;
  let s = r.sliceDoc(n, i);
  return "function" == typeof e ? e(s, n, i, r) : y(e, !0).test(s);
}
let Y = Pe.define({
  map: (e, r) => e.map(e => e.map(r))
});
let G = Pe.define();
let X = sU.define({
  create: () => j.start(),
  update: (e, r) => e.update(r),
  provide: e => [DK.from(e, e => e.tooltip), Lz.contentAttributes.from(e, e => e.attrs)]
});
function H(e, r) {
  let n = r.completion.apply || r.completion.label;
  let i = e.state.field(X).active.find(e => e.source == r.source);
  return i instanceof q && ("string" == typeof n ? e.dispatch(Object.assign(Object.assign({}, O(e.state, n, i.from, i.to)), {
    annotations: b.of(r.completion)
  })) : n(e, r.completion, i.from, i.to), !0);
}
let K = M(X, H);
function J(e, r = "option") {
  return n => {
    let i = n.state.field(X, !1);
    if (!i || !i.open || i.open.disabled || Date.now() - i.open.timestamp < n.state.facet(A).interactionDelay) return !1;
    let o = 1;
    let a;
    "page" == r && (a = Eg(n, i.open.tooltip)) && (o = Math.max(2, Math.floor(a.dom.offsetHeight / a.dom.querySelector("li").offsetHeight) - 1));
    let {
      length
    } = i.open.options;
    let d = i.open.selected > -1 ? i.open.selected + o * (e ? 1 : -1) : e ? 0 : length - 1;
    d < 0 ? d = "page" == r ? 0 : length - 1 : d >= length && (d = "page" == r ? length - 1 : 0);
    n.dispatch({
      effects: G.of(d)
    });
    return !0;
  };
}
let $$ee0 = e => {
  let r = e.state.field(X, !1);
  return !(e.state.readOnly || !r || !r.open || r.open.selected < 0 || r.open.disabled || Date.now() - r.open.timestamp < e.state.facet(A).interactionDelay) && H(e, r.open.options[r.open.selected]);
};
let $$et = e => !!e.state.field(X, !1) && (e.dispatch({
  effects: k.of(!0)
}), !0);
let er = e => {
  let r = e.state.field(X, !1);
  return !!(r && r.active.some(e => 0 != e.state)) && (e.dispatch({
    effects: _.of(null)
  }), !0);
};
class en {
  constructor(e, r) {
    this.active = e;
    this.context = r;
    this.time = Date.now();
    this.updates = [];
    this.done = void 0;
  }
}
let ei = 50;
let es = 1e3;
let eo = Z9.fromClass(class {
  constructor(e) {
    for (let r of (this.view = e, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0, e.state.field(X).active)) r.isPending && this.startQuery(r);
  }
  update(e) {
    let r = e.state.field(X);
    let n = e.state.facet(A);
    if (!e.selectionSet && !e.docChanged && e.startState.field(X) == r) return;
    let i = e.transactions.some(e => {
      let r = V(e, n);
      return 8 & r || (e.selection || e.docChanged) && !(3 & r);
    });
    for (let r = 0; r < this.running.length; r++) {
      let n = this.running[r];
      if (i || n.context.abortOnDocChange && e.docChanged || n.updates.length + e.transactions.length > ei && Date.now() - n.time > es) {
        for (let e of n.context.abortListeners) try {
          e();
        } catch (e) {
          c_(this.view.state, e);
        }
        n.context.abortListeners = null;
        this.running.splice(r--, 1);
      } else n.updates.push(...e.transactions);
    }
    this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate);
    e.transactions.some(e => e.effects.some(e => e.is(k))) && (this.pendingStart = !0);
    let o = this.pendingStart ? 50 : n.activateOnTypingDelay;
    if (this.debounceUpdate = r.active.some(e => e.isPending && !this.running.some(r => r.active.source == e.source)) ? setTimeout(() => this.startUpdate(), o) : -1, 0 != this.composing) for (let r of e.transactions) r.isUserEvent("input.type") ? this.composing = 2 : 2 == this.composing && r.selection && (this.composing = 3);
  }
  startUpdate() {
    this.debounceUpdate = -1;
    this.pendingStart = !1;
    let {
      state
    } = this.view;
    let r = state.field(X);
    for (let e of r.active) e.isPending && !this.running.some(r => r.active.source == e.source) && this.startQuery(e);
    this.running.length && r.open && r.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(A).updateSyncTime));
  }
  startQuery(e) {
    let {
      state
    } = this.view;
    let n = v(state);
    let i = new $$a6(state, n, e.explicit, this.view);
    let o = new en(e, i);
    this.running.push(o);
    Promise.resolve(e.source(i)).then(e => {
      o.context.aborted || (o.done = e || null, this.scheduleAccept());
    }, e => {
      this.view.dispatch({
        effects: _.of(null)
      });
      c_(this.view.state, e);
    });
  }
  scheduleAccept() {
    this.running.every(e => void 0 !== e.done) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(A).updateSyncTime));
  }
  accept() {
    var e;
    this.debounceAccept > -1 && clearTimeout(this.debounceAccept);
    this.debounceAccept = -1;
    let r = [];
    let n = this.view.state.facet(A);
    let i = this.view.state.field(X);
    for (let s = 0; s < this.running.length; s++) {
      let o = this.running[s];
      if (void 0 === o.done) continue;
      if (this.running.splice(s--, 1), o.done) {
        let i = v(o.updates.length ? o.updates[0].startState : this.view.state);
        let s = Math.min(i, o.done.from + (o.active.explicit ? 0 : 1));
        let a = new q(o.active.source, o.active.explicit, s, o.done, o.done.from, null !== (e = o.done.to) && void 0 !== e ? e : i);
        for (let e of o.updates) a = a.update(e, n);
        if (a.hasResult()) {
          r.push(a);
          continue;
        }
      }
      let a = i.active.find(e => e.source == o.active.source);
      if (a && a.isPending) {
        if (null == o.done) {
          let e = new B(o.active.source, 0);
          for (let r of o.updates) e = e.update(r, n);
          e.isPending || r.push(e);
        } else this.startQuery(a);
      }
    }
    (r.length || i.open && i.open.disabled) && this.view.dispatch({
      effects: Y.of(r)
    });
  }
}, {
  eventHandlers: {
    blur(e) {
      let r = this.view.state.field(X, !1);
      if (r && r.tooltip && this.view.state.facet(A).closeOnBlur) {
        let n = r.open && Eg(this.view, r.open.tooltip);
        n && n.dom.contains(e.relatedTarget) || setTimeout(() => this.view.dispatch({
          effects: _.of(null)
        }), 10);
      }
    },
    compositionstart() {
      this.composing = 1;
    },
    compositionend() {
      3 == this.composing && setTimeout(() => this.view.dispatch({
        effects: k.of(!1)
      }), 20);
      this.composing = 0;
    }
  }
});
let ea = "object" == typeof navigator && /Win/.test(navigator.platform);
let el = Nb.highest(Lz.domEventHandlers({
  keydown(e, r) {
    let n = r.state.field(X, !1);
    if (!n || !n.open || n.open.disabled || n.open.selected < 0 || e.key.length > 1 || e.ctrlKey && !(ea && e.altKey) || e.metaKey) return !1;
    let i = n.open.options[n.open.selected];
    let s = n.active.find(e => e.source == i.source);
    let o = i.completion.commitCharacters || s.result.commitCharacters;
    o && o.indexOf(e.key) > -1 && H(r, i);
    return !1;
  }
}));
let eu = Lz.baseTheme({
  ".cm-tooltip.cm-tooltip-autocomplete": {
    "& > ul": {
      fontFamily: "monospace",
      whiteSpace: "nowrap",
      overflow: "hidden auto",
      maxWidth_fallback: "700px",
      maxWidth: "min(700px, 95vw)",
      minWidth: "250px",
      maxHeight: "10em",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer"
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
        opacity: .7
      }
    }
  },
  "&light .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#17c",
    color: "white"
  },
  "&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#777"
  },
  "&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "#347",
    color: "white"
  },
  "&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "#444"
  },
  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"\xb7\xb7\xb7"',
    opacity: .5,
    display: "block",
    textAlign: "center"
  },
  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: "400px",
    boxSizing: "border-box",
    whiteSpace: "pre-line"
  },
  ".cm-completionInfo.cm-completionInfo-left": {
    right: "100%"
  },
  ".cm-completionInfo.cm-completionInfo-right": {
    left: "100%"
  },
  ".cm-completionInfo.cm-completionInfo-left-narrow": {
    right: "30px"
  },
  ".cm-completionInfo.cm-completionInfo-right-narrow": {
    left: "30px"
  },
  "&light .cm-snippetField": {
    backgroundColor: "#00000022"
  },
  "&dark .cm-snippetField": {
    backgroundColor: "#ffffff22"
  },
  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },
  ".cm-completionMatchedText": {
    textDecoration: "underline"
  },
  ".cm-completionDetail": {
    marginLeft: "0.5em",
    fontStyle: "italic"
  },
  ".cm-completionIcon": {
    fontSize: "90%",
    width: ".8em",
    display: "inline-block",
    textAlign: "center",
    paddingRight: ".6em",
    opacity: "0.6",
    boxSizing: "content-box"
  },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": {
      content: "'\u0192'"
    }
  },
  ".cm-completionIcon-class": {
    "&:after": {
      content: "'\u25CB'"
    }
  },
  ".cm-completionIcon-interface": {
    "&:after": {
      content: "'\u25CC'"
    }
  },
  ".cm-completionIcon-variable": {
    "&:after": {
      content: "'\u{1D465}'"
    }
  },
  ".cm-completionIcon-constant": {
    "&:after": {
      content: "'\u{1D436}'"
    }
  },
  ".cm-completionIcon-type": {
    "&:after": {
      content: "'\u{1D461}'"
    }
  },
  ".cm-completionIcon-enum": {
    "&:after": {
      content: "'\u222A'"
    }
  },
  ".cm-completionIcon-property": {
    "&:after": {
      content: "'\u25A1'"
    }
  },
  ".cm-completionIcon-keyword": {
    "&:after": {
      content: "'\u{1F511}\uFE0E'"
    }
  },
  ".cm-completionIcon-namespace": {
    "&:after": {
      content: "'\u25A2'"
    }
  },
  ".cm-completionIcon-text": {
    "&:after": {
      content: "'abc'",
      fontSize: "50%",
      verticalAlign: "middle"
    }
  }
});
class ec {
  constructor(e, r, n, i) {
    this.field = e;
    this.line = r;
    this.from = n;
    this.to = i;
  }
}
class eh {
  constructor(e, r, n) {
    this.field = e;
    this.from = r;
    this.to = n;
  }
  map(e) {
    let r = e.mapPos(this.from, -1, iR.TrackDel);
    let n = e.mapPos(this.to, 1, iR.TrackDel);
    return null == r || null == n ? null : new eh(this.field, r, n);
  }
}
class ed {
  constructor(e, r) {
    this.lines = e;
    this.fieldPositions = r;
  }
  instantiate(e, r) {
    let n = [];
    let i = [r];
    let s = e.doc.lineAt(r);
    let a = /^\s*/.exec(s.text)[0];
    for (let s of this.lines) {
      if (n.length) {
        let n = a;
        let h = /^\t*/.exec(s)[0].length;
        for (let r = 0; r < h; r++) n += e.facet(Xt);
        i.push(r + n.length - h);
        s = n + s.slice(h);
      }
      n.push(s);
      r += s.length + 1;
    }
    return {
      text: n,
      ranges: this.fieldPositions.map(e => new eh(e.field, i[e.line] + e.from, i[e.line] + e.to))
    };
  }
  static parse(e) {
    let r = [];
    let n = [];
    let i = [];
    let s;
    for (let o of e.split(/\r\n?|\n/)) {
      for (; s = /[#$]\{(?:(\d+)(?::([^}]*))?|((?:\\[{}]|[^}])*))\}/.exec(o);) {
        let e = s[1] ? +s[1] : null;
        let a = s[2] || s[3] || "";
        let h = -1;
        let d = a.replace(/\\[{}]/g, e => e[1]);
        for (let n = 0; n < r.length; n++) (null != e ? r[n].seq == e : d && r[n].name == d) && (h = n);
        if (h < 0) {
          let n = 0;
          for (; n < r.length && (null == e || null != r[n].seq && r[n].seq < e);) n++;
          for (let s of (r.splice(n, 0, {
            seq: e,
            name: d
          }), h = n, i)) s.field >= h && s.field++;
        }
        i.push(new ec(h, n.length, s.index, s.index + d.length));
        o = o.slice(0, s.index) + a + o.slice(s.index + s[0].length);
      }
      o = o.replace(/\\([{}])/g, (e, r, s) => {
        for (let e of i) e.line == n.length && e.from > s && (e.from--, e.to--);
        return r;
      });
      n.push(o);
    }
    return new ed(n, i);
  }
}
let ef = NZ.widget({
  widget: new class extends xO {
    toDOM() {
      let e = document.createElement("span");
      e.className = "cm-snippetFieldPosition";
      return e;
    }
    ignoreEvent() {
      return !1;
    }
  }()
});
let ep = NZ.mark({
  class: "cm-snippetField"
});
class eg {
  constructor(e, r) {
    this.ranges = e;
    this.active = r;
    this.deco = NZ.set(e.map(e => (e.from == e.to ? ef : ep).range(e.from, e.to)));
  }
  map(e) {
    let r = [];
    for (let n of this.ranges) {
      let i = n.map(e);
      if (!i) return null;
      r.push(i);
    }
    return new eg(r, this.active);
  }
  selectionInsideField(e) {
    return e.ranges.every(e => this.ranges.some(r => r.field == this.active && r.from <= e.from && r.to >= e.to));
  }
}
let em = Pe.define({
  map: (e, r) => e && e.map(r)
});
let ev = Pe.define();
let ey = sU.define({
  create: () => null,
  update(e, r) {
    for (let n of r.effects) {
      if (n.is(em)) return n.value;
      if (n.is(ev) && e) return new eg(e.ranges, n.value);
    }
    e && r.docChanged && (e = e.map(r.changes));
    e && r.selection && !e.selectionInsideField(r.selection) && (e = null);
    return e;
  },
  provide: e => Lz.decorations.from(e, e => e ? e.deco : NZ.none)
});
function eb(e, r) {
  return OF.create(e.filter(e => e.field == r).map(e => OF.range(e.from, e.to)));
}
function eO(e) {
  let r = ed.parse(e);
  return (e, n, s, o) => {
    let {
      text,
      ranges
    } = r.instantiate(e.state, s);
    let {
      main
    } = e.state.selection;
    let p = {
      changes: {
        from: s,
        to: o == main.from ? main.to : o,
        insert: EY.of(text)
      },
      scrollIntoView: !0,
      annotations: n ? [b.of(n), ZX.userEvent.of("input.complete")] : void 0
    };
    if (ranges.length && (p.selection = eb(ranges, 0)), ranges.some(e => e.field > 0)) {
      let r = new eg(ranges, 0);
      let n = p.effects = [em.of(r)];
      void 0 === e.state.field(ey, !1) && n.push(Pe.appendConfig.of([ey, eS, eA, eu]));
    }
    e.dispatch(e.state.update(p));
  };
}
function ex(e) {
  return ({
    state: r,
    dispatch: n
  }) => {
    let i = r.field(ey, !1);
    if (!i || e < 0 && 0 == i.active) return !1;
    let s = i.active + e;
    let o = e > 0 && !i.ranges.some(r => r.field == s + e);
    n(r.update({
      selection: eb(i.ranges, s),
      effects: em.of(o ? null : new eg(i.ranges, s)),
      scrollIntoView: !0
    }));
    return !0;
  };
}
let ew = ({
  state: e,
  dispatch: r
}) => !!e.field(ey, !1) && (r(e.update({
  effects: em.of(null)
})), !0);
let ek = [{
  key: "Tab",
  run: ex(1),
  shift: ex(-1)
}, {
  key: "Escape",
  run: ew
}];
let e_ = sj.define({
  combine: e => e.length ? e[0] : ek
});
let eS = Nb.highest(w4.compute([e_], e => e.facet(e_)));
export function $$eE4(e, r) {
  return Object.assign(Object.assign({}, r), {
    apply: eO(e)
  });
}
let eA = Lz.domEventHandlers({
  mousedown(e, r) {
    let n = r.state.field(ey, !1);
    let i;
    if (!n || r.posAtCoords({
      x: e.clientX,
      y: e.clientY
    })) return !1;
    let s = n.ranges.find(e => e.from <= i && e.to >= i);
    return !!s && s.field != n.active && (r.dispatch({
      selection: eb(n.ranges, s.field),
      effects: em.of(n.ranges.some(e => e.field > s.field) ? new eg(n.ranges, s.field) : null),
      scrollIntoView: !0
    }), !0);
  }
});
let eC = {
  brackets: ["(", "[", "{", "'", '"'],
  before: ")]}:;>",
  stringPrefixes: []
};
let eT = Pe.define({
  map(e, r) {
    let n = r.mapPos(e, -1, iR.TrackAfter);
    return n;
  }
});
let eI = new class extends FB { }();
eI.startSide = 1;
eI.endSide = -1;
let eP = sU.define({
  create: () => om.empty,
  update(e, r) {
    if (e = e.map(r.changes), r.selection) {
      let n = r.state.doc.lineAt(r.selection.main.head);
      e = e.update({
        filter: e => e >= n.from && e <= n.to
      });
    }
    for (let n of r.effects) n.is(eT) && (e = e.update({
      add: [eI.range(n.value, n.value + 1)]
    }));
    return e;
  }
});
export function $$eR8() {
  return [eL, eP];
}
let eM = "()[]{}<>";
function eD(e) {
  for (let r = 0; r < eM.length; r += 2) if (eM.charCodeAt(r) == e) return eM.charAt(r + 1);
  return MK(e < 128 ? e : e + 1);
}
function eN(e, r) {
  return e.languageDataAt("closeBrackets", r)[0] || eC;
}
let e$ = "object" == typeof navigator && /Android\b/.test(navigator.userAgent);
let eL = Lz.inputHandler.of((e, r, n, s) => {
  if ((e$ ? e.composing : e.compositionStarted) || e.state.readOnly) return !1;
  let o = e.state.selection.main;
  if (s.length > 2 || 2 == s.length && 1 == Fh(vS(s, 0)) || r != o.from || n != o.to) return !1;
  let a = ez(e.state, s);
  return !!a && (e.dispatch(a), !0);
});
let $$ej2 = [{
  key: "Backspace",
  run: ({
    state: e,
    dispatch: r
  }) => {
    if (e.readOnly) return !1;
    let n = eN(e, e.selection.main.head).brackets || eC.brackets;
    let s = null;
    let o = e.changeByRange(r => {
      if (r.empty) {
        let s = eU(e.doc, r.head);
        for (let o of n) if (o == s && eF(e.doc, r.head) == eD(vS(o, 0))) return {
          changes: {
            from: r.head - o.length,
            to: r.head + o.length
          },
          range: OF.cursor(r.head - o.length)
        };
      }
      return {
        range: s = r
      };
    });
    s || r(e.update(o, {
      scrollIntoView: !0,
      userEvent: "delete.backward"
    }));
    return !s;
  }
}];
function ez(e, r) {
  let n = eN(e, e.selection.main.head);
  let s = n.brackets || eC.brackets;
  for (let o of s) {
    let a = eD(vS(o, 0));
    if (r == o) return a == o ? eB(e, o, s.indexOf(o + o + o) > -1, n) : eQ(e, o, a, n.before || eC.before);
    if (r == a && eZ(e, e.selection.main.from)) return eV(e, o, a);
  }
  return null;
}
function eZ(e, r) {
  let n = !1;
  e.field(eP).between(0, e.doc.length, e => {
    e == r && (n = !0);
  });
  return n;
}
function eF(e, r) {
  let n = e.sliceString(r, r + 2);
  return n.slice(0, Fh(vS(n, 0)));
}
function eU(e, r) {
  let n = e.sliceString(r - 2, r);
  return Fh(vS(n, 0)) == n.length ? n : n.slice(1);
}
function eQ(e, r, n, s) {
  let o = null;
  let a = e.changeByRange(a => {
    if (!a.empty) return {
      changes: [{
        insert: r,
        from: a.from
      }, {
        insert: n,
        from: a.to
      }],
      effects: eT.of(a.to + r.length),
      range: OF.range(a.anchor + r.length, a.head + r.length)
    };
    let h = eF(e.doc, a.head);
    return !h || /\s/.test(h) || s.indexOf(h) > -1 ? {
      changes: {
        insert: r + n,
        from: a.head
      },
      effects: eT.of(a.head + r.length),
      range: OF.cursor(a.head + r.length)
    } : {
      range: o = a
    };
  });
  return o ? null : e.update(a, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function eV(e, r, n) {
  let s = null;
  let o = e.changeByRange(r => r.empty && eF(e.doc, r.head) == n ? {
    changes: {
      from: r.head,
      to: r.head + n.length,
      insert: n
    },
    range: OF.cursor(r.head + n.length)
  } : s = {
    range: r
  });
  return s ? null : e.update(o, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function eB(e, r, n, s) {
  let o = s.stringPrefixes || eC.stringPrefixes;
  let a = null;
  let h = e.changeByRange(s => {
    if (!s.empty) return {
      changes: [{
        insert: r,
        from: s.from
      }, {
        insert: r,
        from: s.to
      }],
      effects: eT.of(s.to + r.length),
      range: OF.range(s.anchor + r.length, s.head + r.length)
    };
    let h = s.head;
    let d = eF(e.doc, h);
    let p;
    if (d == r) {
      if (eq(e, h)) return {
        changes: {
          insert: r + r,
          from: h
        },
        effects: eT.of(h + r.length),
        range: OF.cursor(h + r.length)
      };
      if (eZ(e, h)) {
        let s = n && e.sliceDoc(h, h + 3 * r.length) == r + r + r ? r + r + r : r;
        return {
          changes: {
            from: h,
            to: h + s.length,
            insert: s
          },
          range: OF.cursor(h + s.length)
        };
      }
    } else if (n && e.sliceDoc(h - 2 * r.length, h) == r + r && (p = eY(e, h - 2 * r.length, o)) > -1 && eq(e, p)) return {
      changes: {
        insert: r + r + r + r,
        from: h
      },
      effects: eT.of(h + r.length),
      range: OF.cursor(h + r.length)
    }; else if (e.charCategorizer(h)(d) != Je.Word && eY(e, h, o) > -1 && !eW(e, h, r, o)) return {
      changes: {
        insert: r + r,
        from: h
      },
      effects: eT.of(h + r.length),
      range: OF.cursor(h + r.length)
    };
    return {
      range: a = s
    };
  });
  return a ? null : e.update(h, {
    scrollIntoView: !0,
    userEvent: "input.type"
  });
}
function eq(e, r) {
  let n = mv(e).resolveInner(r + 1);
  return n.parent && n.from == r;
}
function eW(e, r, n, i) {
  let s = mv(e).resolveInner(r, -1);
  let a = i.reduce((e, r) => Math.max(e, r.length), 0);
  for (let o = 0; o < 5; o++) {
    let o = e.sliceDoc(s.from, Math.min(s.to, s.from + n.length + a));
    let h = o.indexOf(n);
    if (!h || h > -1 && i.indexOf(o.slice(0, h)) > -1) {
      let r = s.firstChild;
      for (; r && r.from == s.from && r.to - r.from > n.length + h;) {
        if (e.sliceDoc(r.to - n.length, r.to) == n) return !1;
        r = r.firstChild;
      }
      return !0;
    }
    let d = s.to == r && s.parent;
    if (!d) break;
    s = d;
  }
  return !1;
}
function eY(e, r, n) {
  let s = e.charCategorizer(r);
  if (s(e.sliceDoc(r - 1, r)) != Je.Word) return r;
  for (let o of n) {
    let n = r - o.length;
    if (e.sliceDoc(n, r) == o && s(e.sliceDoc(n - 1, n)) != Je.Word) return n;
  }
  return -1;
}
export function $$eG9(e = {}) {
  return [el, X, A.of(e), eo, eH, eu];
}
let $$eX5 = [{
  key: "Ctrl-Space",
  run: $$et
}, {
  mac: "Alt-`",
  run: $$et
}, {
  key: "Escape",
  run: er,
  preventDefault: !0,
  stopPropagation: !0
}, {
  key: "ArrowDown",
  run: J(!0)
}, {
  key: "ArrowUp",
  run: J(!1)
}, {
  key: "PageDown",
  run: J(!0, "page")
}, {
  key: "PageUp",
  run: J(!1, "page")
}, {
  key: "Enter",
  run: $$ee0
}];
let eH = Nb.highest(w4.computeN([A], e => e.facet(A).defaultKeymap ? [$$eX5] : []));
export function $$eK3(e) {
  let r = e.field(X, !1);
  return r && r.active.some(e => e.isPending) ? "pending" : r && r.active.some(e => 0 != e.state) ? "active" : null;
}
export const $w = $$ee0;
export const Ar = $$g1;
export const Bc = $$ej2;
export const DH = $$eK3;
export const Gw = $$eE4;
export const OO = $$eX5;
export const _5 = $$a6;
export const et = $$p7;
export const wm = $$eR8;
export const yU = $$eG9; 
