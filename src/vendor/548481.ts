import { NZ, S7, Lz, ld, Z9, c_, xO, wJ, DK, Ux } from "../vendor/37366";
import { vB, Pe, sU, sj, QR, om } from "../vendor/59696";
import { A as _$$A } from "../vendor/235093";
class a {
  constructor(e, r, n) {
    this.from = e;
    this.to = r;
    this.diagnostic = n;
  }
}
class h {
  constructor(e, r, n) {
    this.diagnostics = e;
    this.panel = r;
    this.selected = n;
  }
  static init(e, r, n) {
    let o = e;
    let a = n.facet(C).markerFilter;
    a && (o = a(o, n));
    let p = e.slice().sort((e, r) => e.from - r.from || e.to - r.to);
    let g = new vB();
    let m = [];
    let v = 0;
    for (let e = 0;;) {
      let r;
      let s;
      let o = e == p.length ? null : p[e];
      if (!o && !m.length) break;
      for (m.length ? (r = v, s = m.reduce((e, r) => Math.min(e, r.to), o && o.from > r ? o.from : 1e8)) : (r = o.from, s = o.to, m.push(o), e++); e < p.length;) {
        let n = p[e];
        if (n.from == r && (n.to > n.from || n.to == r)) {
          m.push(n);
          e++;
          s = Math.min(n.to, s);
        } else {
          s = Math.min(n.from, s);
          break;
        }
      }
      let a = z(m);
      if (m.some(e => e.from == e.to || e.from == e.to - 1 && n.doc.lineAt(e.from).to == e.from)) g.add(r, r, NZ.widget({
        widget: new R(a),
        diagnostics: m.slice()
      }));else {
        let e = m.reduce((e, r) => r.markClass ? e + " " + r.markClass : e, "");
        g.add(r, s, NZ.mark({
          class: "cm-lintRange cm-lintRange-" + a + e,
          diagnostics: m.slice(),
          inclusiveEnd: m.some(e => e.to > s)
        }));
      }
      v = s;
      for (let e = 0; e < m.length; e++) m[e].to <= v && m.splice(e--, 1);
    }
    let y = g.finish();
    return new h(y, r, d(y));
  }
}
function d(e, r = null, n = 0) {
  let i = null;
  e.between(n, 1e9, (e, n, {
    spec: s
  }) => {
    if (!(r && 0 > s.diagnostics.indexOf(r))) {
      if (i) {
        if (0 > s.diagnostics.indexOf(i.diagnostic)) return !1;
        i = new a(i.from, n, i.diagnostic);
      } else i = new a(e, n, r || s.diagnostics[0]);
    }
  });
  return i;
}
function p(e, r) {
  let n = r.pos;
  let i = r.end || n;
  let s = e.state.facet(C).hideOn(e, n, i);
  if (null != s) return s;
  let o = e.startState.doc.lineAt(r.pos);
  return !!(e.effects.some(e => e.is(v)) || e.changes.touchesRange(o.from, Math.max(o.to, i)));
}
function g(e, r) {
  return e.field(O, !1) ? r : r.concat(Pe.appendConfig.of(q));
}
function m(e, r) {
  return {
    effects: g(e, [v.of(r)])
  };
}
let v = Pe.define();
let y = Pe.define();
let b = Pe.define();
let O = sU.define({
  create: () => new h(NZ.none, null, null),
  update(e, r) {
    if (r.docChanged && e.diagnostics.size) {
      let n = e.diagnostics.map(r.changes);
      let i = null;
      let s = e.panel;
      if (e.selected) {
        let s = r.changes.mapPos(e.selected.from, 1);
        i = d(n, e.selected.diagnostic, s) || d(n, null, s);
      }
      !n.size && s && r.state.facet(C).autoPanel && (s = null);
      e = new h(n, s, i);
    }
    for (let n of r.effects) if (n.is(v)) {
      let i = r.state.facet(C).autoPanel ? n.value.length ? D.open : null : e.panel;
      e = h.init(n.value, i, r.state);
    } else n.is(y) ? e = new h(e.diagnostics, n.value ? D.open : null, e.selected) : n.is(b) && (e = new h(e.diagnostics, e.panel, n.value));
    return e;
  },
  provide: e => [S7.from(e, e => e.panel), Lz.decorations.from(e, e => e.diagnostics)]
});
let x = NZ.mark({
  class: "cm-lintRange cm-lintRange-active"
});
function w(e, r, n) {
  let {
    diagnostics
  } = e.state.field(O);
  let s;
  let o = -1;
  let a = -1;
  diagnostics.between(r - (n < 0 ? 1 : 0), r + (n > 0 ? 1 : 0), (e, i, {
    spec: h
  }) => {
    if (r >= e && r <= i && (e == i || (r > e || n > 0) && (r < i || n < 0))) {
      s = h.diagnostics;
      o = e;
      a = i;
      return !1;
    }
  });
  let h = e.state.facet(C).tooltipFilter;
  return (s && h && (s = h(s, e.state)), s) ? {
    pos: o,
    end: a,
    above: e.state.doc.lineAt(o).to < a,
    create: () => ({
      dom: k(e, s)
    })
  } : null;
}
function k(e, r) {
  return _$$A("ul", {
    class: "cm-tooltip-lint"
  }, r.map(r => P(e, r, !1)));
}
let _ = e => {
  let r = e.state.field(O, !1);
  return !!r && !!r.panel && (e.dispatch({
    effects: y.of(!1)
  }), !0);
};
let $$S0 = [{
  key: "Mod-Shift-m",
  run: e => {
    let r = e.state.field(O, !1);
    r && r.panel || e.dispatch({
      effects: g(e.state, [y.of(!0)])
    });
    let n = ld(e, D.open);
    n && n.dom.querySelector(".cm-panel-lint ul").focus();
    return !0;
  },
  preventDefault: !0
}, {
  key: "F8",
  run: e => {
    let r = e.state.field(O, !1);
    if (!r) return !1;
    let n = e.state.selection.main;
    let i = r.diagnostics.iter(n.to + 1);
    return (!!i.value || !!(i = r.diagnostics.iter(0)).value && (i.from != n.from || i.to != n.to)) && (e.dispatch({
      selection: {
        anchor: i.from,
        head: i.to
      },
      scrollIntoView: !0
    }), !0);
  }
}];
let E = Z9.fromClass(class {
  constructor(e) {
    this.view = e;
    this.timeout = -1;
    this.set = !0;
    let {
      delay
    } = e.state.facet(C);
    this.lintTime = Date.now() + delay;
    this.run = this.run.bind(this);
    this.timeout = setTimeout(this.run, delay);
  }
  run() {
    clearTimeout(this.timeout);
    let e = Date.now();
    if (e < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - e);else {
      this.set = !1;
      let {
        state
      } = this.view;
      let {
        sources
      } = state.facet(C);
      sources.length && A(sources.map(e => Promise.resolve(e(this.view))), r => {
        this.view.state.doc == state.doc && this.view.dispatch(m(this.view.state, r.reduce((e, r) => e.concat(r))));
      }, e => {
        c_(this.view.state, e);
      });
    }
  }
  update(e) {
    let r = e.state.facet(C);
    (e.docChanged || r != e.startState.facet(C) || r.needsRefresh && r.needsRefresh(e)) && (this.lintTime = Date.now() + r.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, r.delay)));
  }
  force() {
    this.set && (this.lintTime = Date.now(), this.run());
  }
  destroy() {
    clearTimeout(this.timeout);
  }
});
function A(e, r, n) {
  let i = [];
  let s = -1;
  for (let o of e) o.then(n => {
    i.push(n);
    clearTimeout(s);
    i.length == e.length ? r(i) : s = setTimeout(() => r(i), 200);
  }, n);
}
let C = sj.define({
  combine: e => Object.assign({
    sources: e.map(e => e.source).filter(e => null != e)
  }, QR(e.map(e => e.config), {
    delay: 750,
    markerFilter: null,
    tooltipFilter: null,
    needsRefresh: null,
    hideOn: () => null
  }, {
    needsRefresh: (e, r) => e ? r ? n => e(n) || r(n) : e : r
  }))
});
export function $$T1(e, r = {}) {
  return [C.of({
    source: e,
    config: r
  }), E, q];
}
function I(e) {
  let r = [];
  if (e) i: for (let {
    name
  } of e) {
    for (let e = 0; e < name.length; e++) {
      let i = name[e];
      if (/[a-zA-Z]/.test(i) && !r.some(e => e.toLowerCase() == i.toLowerCase())) {
        r.push(i);
        continue i;
      }
    }
    r.push("");
  }
  return r;
}
function P(e, r, n) {
  var i;
  let s = n ? I(r.actions) : [];
  return _$$A("li", {
    class: "cm-diagnostic cm-diagnostic-" + r.severity
  }, _$$A("span", {
    class: "cm-diagnosticText"
  }, r.renderMessage ? r.renderMessage(e) : r.message), r.actions?.map((n, i) => {
    let a = !1;
    let h = i => {
      if (i.preventDefault(), a) return;
      a = !0;
      let s = d(e.state.field(O).diagnostics, r);
      s && n.apply(e, s.from, s.to);
    };
    let {
      name
    } = n;
    let g = s[i] ? name.indexOf(s[i]) : -1;
    let m = g < 0 ? name : [name.slice(0, g), _$$A("u", name.slice(g, g + 1)), name.slice(g + 1)];
    return _$$A("button", {
      type: "button",
      class: "cm-diagnosticAction",
      onclick: h,
      onmousedown: h,
      "aria-label": ` Action: ${name}${g < 0 ? "" : ` (access key "${s[i]})"`}.`
    }, m);
  }), r.source && _$$A("div", {
    class: "cm-diagnosticSource"
  }, r.source));
}
class R extends xO {
  constructor(e) {
    super();
    this.sev = e;
  }
  eq(e) {
    return e.sev == this.sev;
  }
  toDOM() {
    return _$$A("span", {
      class: "cm-lintPoint cm-lintPoint-" + this.sev
    });
  }
}
class M {
  constructor(e, r) {
    this.diagnostic = r;
    this.id = "item_" + Math.floor(0xffffffff * Math.random()).toString(16);
    this.dom = P(e, r, !0);
    this.dom.id = this.id;
    this.dom.setAttribute("role", "option");
  }
}
class D {
  constructor(e) {
    this.view = e;
    this.items = [];
    let r = r => {
      if (27 == r.keyCode) {
        _(this.view);
        this.view.focus();
      } else if (38 == r.keyCode || 33 == r.keyCode) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);else if (40 == r.keyCode || 34 == r.keyCode) this.moveSelection((this.selectedIndex + 1) % this.items.length);else if (36 == r.keyCode) this.moveSelection(0);else if (35 == r.keyCode) this.moveSelection(this.items.length - 1);else if (13 == r.keyCode) this.view.focus();else {
        if (!(r.keyCode >= 65) || !(r.keyCode <= 90) || !(this.selectedIndex >= 0)) return;
        let {
          diagnostic
        } = this.items[this.selectedIndex];
        let i = I(diagnostic.actions);
        for (let s = 0; s < i.length; s++) if (i[s].toUpperCase().charCodeAt(0) == r.keyCode) {
          let r = d(this.view.state.field(O).diagnostics, diagnostic);
          r && diagnostic.actions[s].apply(e, r.from, r.to);
        }
      }
      r.preventDefault();
    };
    let n = e => {
      for (let r = 0; r < this.items.length; r++) this.items[r].dom.contains(e.target) && this.moveSelection(r);
    };
    this.list = _$$A("ul", {
      tabIndex: 0,
      role: "listbox",
      "aria-label": this.view.state.phrase("Diagnostics"),
      onkeydown: r,
      onclick: n
    });
    this.dom = _$$A("div", {
      class: "cm-panel-lint"
    }, this.list, _$$A("button", {
      type: "button",
      name: "close",
      "aria-label": this.view.state.phrase("close"),
      onclick: () => _(this.view)
    }, "\xd7"));
    this.update();
  }
  get selectedIndex() {
    let e = this.view.state.field(O).selected;
    if (!e) return -1;
    for (let r = 0; r < this.items.length; r++) if (this.items[r].diagnostic == e.diagnostic) return r;
    return -1;
  }
  update() {
    let {
      diagnostics,
      selected
    } = this.view.state.field(O);
    let n = 0;
    let i = !1;
    let s = null;
    let o = new Set();
    for (diagnostics.between(0, this.view.state.doc.length, (e, a, {
      spec: h
    }) => {
      for (let e of h.diagnostics) {
        if (o.has(e)) continue;
        o.add(e);
        let a = -1;
        let h;
        for (let r = n; r < this.items.length; r++) if (this.items[r].diagnostic == e) {
          a = r;
          break;
        }
        a < 0 ? (h = new M(this.view, e), this.items.splice(n, 0, h), i = !0) : (h = this.items[a], a > n && (this.items.splice(n, a - n), i = !0));
        selected && h.diagnostic == selected.diagnostic ? h.dom.hasAttribute("aria-selected") || (h.dom.setAttribute("aria-selected", "true"), s = h) : h.dom.hasAttribute("aria-selected") && h.dom.removeAttribute("aria-selected");
        n++;
      }
    }); n < this.items.length && !(1 == this.items.length && this.items[0].diagnostic.from < 0);) {
      i = !0;
      this.items.pop();
    }
    0 == this.items.length && (this.items.push(new M(this.view, {
      from: -1,
      to: -1,
      severity: "info",
      message: this.view.state.phrase("No diagnostics")
    })), i = !0);
    s ? (this.list.setAttribute("aria-activedescendant", s.id), this.view.requestMeasure({
      key: this,
      read: () => ({
        sel: s.dom.getBoundingClientRect(),
        panel: this.list.getBoundingClientRect()
      }),
      write: ({
        sel: e,
        panel: r
      }) => {
        let n = r.height / this.list.offsetHeight;
        e.top < r.top ? this.list.scrollTop -= (r.top - e.top) / n : e.bottom > r.bottom && (this.list.scrollTop += (e.bottom - r.bottom) / n);
      }
    })) : this.selectedIndex < 0 && this.list.removeAttribute("aria-activedescendant");
    i && this.sync();
  }
  sync() {
    let e = this.list.firstChild;
    function r() {
      let r = e;
      e = r.nextSibling;
      r.remove();
    }
    for (let n of this.items) if (n.dom.parentNode == this.list) {
      for (; e != n.dom;) r();
      e = n.dom.nextSibling;
    } else this.list.insertBefore(n.dom, e);
    for (; e;) r();
  }
  moveSelection(e) {
    if (this.selectedIndex < 0) return;
    let r = d(this.view.state.field(O).diagnostics, this.items[e].diagnostic);
    r && this.view.dispatch({
      selection: {
        anchor: r.from,
        head: r.to
      },
      scrollIntoView: !0,
      effects: b.of(r)
    });
  }
  static open(e) {
    return new D(e);
  }
}
function N(e, r = 'viewBox="0 0 40 40"') {
  return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${r}>${encodeURIComponent(e)}</svg>')`;
}
function $(e) {
  return N(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${e}" fill="none" stroke-width=".7"/>`, 'width="6" height="3"');
}
let L = Lz.baseTheme({
  ".cm-diagnostic": {
    padding: "3px 6px 3px 8px",
    marginLeft: "-1px",
    display: "block",
    whiteSpace: "pre-wrap"
  },
  ".cm-diagnostic-error": {
    borderLeft: "5px solid #d11"
  },
  ".cm-diagnostic-warning": {
    borderLeft: "5px solid orange"
  },
  ".cm-diagnostic-info": {
    borderLeft: "5px solid #999"
  },
  ".cm-diagnostic-hint": {
    borderLeft: "5px solid #66d"
  },
  ".cm-diagnosticAction": {
    font: "inherit",
    border: "none",
    padding: "2px 4px",
    backgroundColor: "#444",
    color: "white",
    borderRadius: "3px",
    marginLeft: "8px",
    cursor: "pointer"
  },
  ".cm-diagnosticSource": {
    fontSize: "70%",
    opacity: .7
  },
  ".cm-lintRange": {
    backgroundPosition: "left bottom",
    backgroundRepeat: "repeat-x",
    paddingBottom: "0.7px"
  },
  ".cm-lintRange-error": {
    backgroundImage: $("#d11")
  },
  ".cm-lintRange-warning": {
    backgroundImage: $("orange")
  },
  ".cm-lintRange-info": {
    backgroundImage: $("#999")
  },
  ".cm-lintRange-hint": {
    backgroundImage: $("#66d")
  },
  ".cm-lintRange-active": {
    backgroundColor: "#ffdd9980"
  },
  ".cm-tooltip-lint": {
    padding: 0,
    margin: 0
  },
  ".cm-lintPoint": {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-2px",
      borderLeft: "3px solid transparent",
      borderRight: "3px solid transparent",
      borderBottom: "4px solid #d11"
    }
  },
  ".cm-lintPoint-warning": {
    "&:after": {
      borderBottomColor: "orange"
    }
  },
  ".cm-lintPoint-info": {
    "&:after": {
      borderBottomColor: "#999"
    }
  },
  ".cm-lintPoint-hint": {
    "&:after": {
      borderBottomColor: "#66d"
    }
  },
  ".cm-panel.cm-panel-lint": {
    position: "relative",
    "& ul": {
      maxHeight: "100px",
      overflowY: "auto",
      "& [aria-selected]": {
        backgroundColor: "#ddd",
        "& u": {
          textDecoration: "underline"
        }
      },
      "&:focus [aria-selected]": {
        background_fallback: "#bdf",
        backgroundColor: "Highlight",
        color_fallback: "white",
        color: "HighlightText"
      },
      "& u": {
        textDecoration: "none"
      },
      padding: 0,
      margin: 0
    },
    "& [name=close]": {
      position: "absolute",
      top: "0",
      right: "2px",
      background: "inherit",
      border: "none",
      font: "inherit",
      padding: 0,
      margin: 0
    }
  }
});
function j(e) {
  return "error" == e ? 4 : "warning" == e ? 3 : "info" == e ? 2 : 1;
}
function z(e) {
  let r = "hint";
  let n = 1;
  for (let i of e) {
    let e = j(i.severity);
    e > n && (n = e, r = i.severity);
  }
  return r;
}
class Z extends wJ {
  constructor(e) {
    super();
    this.diagnostics = e;
    this.severity = z(e);
  }
  toDOM(e) {
    let r = document.createElement("div");
    r.className = "cm-lint-marker cm-lint-marker-" + this.severity;
    let n = this.diagnostics;
    let i = e.state.facet(W).tooltipFilter;
    i && (n = i(n, e.state));
    n.length && (r.onmouseover = () => U(e, r, n));
    return r;
  }
}
function F(e, r) {
  let n = i => {
    let s = r.getBoundingClientRect();
    if (!(i.clientX > s.left - 10) || !(i.clientX < s.right + 10) || !(i.clientY > s.top - 10) || !(i.clientY < s.bottom + 10)) {
      for (let e = i.target; e; e = e.parentNode) if (1 == e.nodeType && e.classList.contains("cm-tooltip-lint")) return;
      window.removeEventListener("mousemove", n);
      e.state.field(B) && e.dispatch({
        effects: V.of(null)
      });
    }
  };
  window.addEventListener("mousemove", n);
}
function U(e, r, n) {
  function i() {
    let i = e.elementAtHeight(r.getBoundingClientRect().top + 5 - e.documentTop);
    e.coordsAtPos(i.from) && e.dispatch({
      effects: V.of({
        pos: i.from,
        above: !1,
        clip: !1,
        create: () => ({
          dom: k(e, n),
          getCoords: () => r.getBoundingClientRect()
        })
      })
    });
    r.onmouseout = r.onmousemove = null;
    F(e, r);
  }
  let {
    hoverTime
  } = e.state.facet(W);
  let o = setTimeout(i, hoverTime);
  r.onmouseout = () => {
    clearTimeout(o);
    r.onmouseout = r.onmousemove = null;
  };
  r.onmousemove = () => {
    clearTimeout(o);
    o = setTimeout(i, hoverTime);
  };
}
function Q(e, r) {
  let n = Object.create(null);
  for (let i of r) {
    let r = e.lineAt(i.from);
    (n[r.from] || (n[r.from] = [])).push(i);
  }
  let i = [];
  for (let e in n) i.push(new Z(n[e]).range(+e));
  return om.of(i, !0);
}
let V = Pe.define();
let B = sU.define({
  create: () => null,
  update: (e, r) => (e && r.docChanged && (e = p(r, e) ? null : Object.assign(Object.assign({}, e), {
    pos: r.changes.mapPos(e.pos)
  })), r.effects.reduce((e, r) => r.is(V) ? r.value : e, e)),
  provide: e => DK.from(e)
});
let q = [O, Lz.decorations.compute([O], e => {
  let {
    selected,
    panel
  } = e.field(O);
  return selected && panel && selected.from != selected.to ? NZ.set([x.range(selected.from, selected.to)]) : NZ.none;
}), Ux(w, {
  hideOn: p
}), L];
let W = sj.define({
  combine: e => QR(e, {
    hoverTime: 300,
    markerFilter: null,
    tooltipFilter: null
  })
});
export const $w = $$S0;
export const bu = $$T1;