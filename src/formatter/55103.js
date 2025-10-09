!function (t) {
  var n;
  module.exports = (n = t()).$$default || n;
}(function () {
  "use strict";

  var e = Object.create;
  var t = Object.defineProperty;
  var n = Object.getOwnPropertyDescriptor;
  var r = Object.getOwnPropertyNames;
  var i = Object.getPrototypeOf;
  var a = Object.prototype.hasOwnProperty;
  var o = (e, t) => () => (t || e((t = {
    exports: {}
  }).exports, t), t.exports);
  var s = (e, n) => {
    for (var r in n) t(e, r, {
      get: n[r],
      enumerable: !0
    });
  };
  var _ = (e, i, o, s) => {
    if (i && "object" == typeof i || "function" == typeof i) for (let _ of r(i)) a.call(e, _) || _ === o || t(e, _, {
      get: () => i[_],
      enumerable: !(s = n(i, _)) || s.enumerable
    });
    return e;
  };
  var l = (n, r, a) => (a = null != n ? e(i(n)) : {}, _(!r && n && n.__esModule ? a : t(a, "default", {
    value: n,
    enumerable: !0
  }), n));
  var u = o(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.extract = function (e) {
      let t = e.match(r);
      return t ? t[0].trimLeft() : "";
    };
    e.parse = function (e) {
      return u(e).pragmas;
    };
    e.parseWithComments = u;
    e.print = function ({
      comments: e = "",
      pragmas: t = {}
    }) {
      let n = `
`;
      let r = Object.keys(t);
      let i = r.flatMap(e => c(e, t[e])).map(e => ` * ${e}${n}`).join("");
      if (!e) {
        if (0 === r.length) return "";
        if (1 === r.length && !Array.isArray(t[r[0]])) {
          let e = t[r[0]];
          return `/** ${c(r[0], e)[0]} */`;
        }
      }
      let a = e.split(n).map(e => ` * ${e}`).join(n) + n;
      return "/**" + n + (e ? a : "") + (e && r.length ? " *" + n : "") + i + " */";
    };
    e.strip = function (e) {
      let t = e.match(r);
      return t && t[0] ? e.substring(t[0].length) : e;
    };
    var t = /\*\/$/;
    var n = /^\/\*\*?/;
    var r = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/;
    var i = /(^|\s+)\/\/([^\r\n]*)/g;
    var a = /^(\r?\n)+/;
    var o = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g;
    var s = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g;
    var _ = /(\r?\n|^) *\* ?/g;
    var l = [];
    function u(e) {
      let r = `
`;
      e = e.replace(n, "").replace(t, "").replace(_, "$1");
      let u = "";
      for (; u !== e;) {
        u = e;
        e = e.replace(o, `${r}$1 $2${r}`);
      }
      e = e.replace(a, "").trimRight();
      let c = Object.create(null);
      let p = e.replace(s, "").replace(a, "").trimRight();
      let d;
      for (; d = s.exec(e);) {
        let e = d[2].replace(i, "");
        "string" == typeof c[d[1]] || Array.isArray(c[d[1]]) ? c[d[1]] = l.concat(c[d[1]], e) : c[d[1]] = e;
      }
      return {
        comments: p,
        pragmas: c
      };
    }
    function c(e, t) {
      return l.concat(t).map(t => `@${e} ${t}`.trim());
    }
  });
  var c = o((e, t) => {
    t.exports.isClean = Symbol("isClean");
    t.exports.my = Symbol("my");
  });
  var p = o((e, t) => {
    var n = String;
    var r = function () {
      return {
        isColorSupported: !1,
        reset: n,
        bold: n,
        dim: n,
        italic: n,
        underline: n,
        inverse: n,
        hidden: n,
        strikethrough: n,
        black: n,
        red: n,
        green: n,
        yellow: n,
        blue: n,
        magenta: n,
        cyan: n,
        white: n,
        gray: n,
        bgBlack: n,
        bgRed: n,
        bgGreen: n,
        bgYellow: n,
        bgBlue: n,
        bgMagenta: n,
        bgCyan: n,
        bgWhite: n
      };
    };
    t.exports = r();
    t.exports.createColors = r;
  });
  var d = o(() => {});
  var m = o((e, t) => {
    var n = p();
    var r = d();
    var i = class e extends Error {
      constructor(t, n, r, i, a, o) {
        super(t);
        this.name = "CssSyntaxError";
        this.reason = t;
        a && (this.file = a);
        i && (this.source = i);
        o && (this.plugin = o);
        "u" > typeof n && "u" > typeof r && ("number" == typeof n ? (this.line = n, this.column = r) : (this.line = n.line, this.column = n.column, this.endLine = r.line, this.endColumn = r.column));
        this.setMessage();
        Error.captureStackTrace && Error.captureStackTrace(this, e);
      }
      setMessage() {
        this.message = this.plugin ? this.plugin + ": " : "";
        this.message += this.file ? this.file : "<css input>";
        "u" > typeof this.line && (this.message += ":" + this.line + ":" + this.column);
        this.message += ": " + this.reason;
      }
      showSourceCode(e) {
        if (!this.source) return "";
        let t = this.source;
        null == e && (e = n.isColorSupported);
        r && e && (t = r(t));
        let i = t.split(/\r?\n/);
        let a = Math.max(this.line - 3, 0);
        let o = Math.min(this.line + 2, i.length);
        let s = String(o).length;
        let _;
        let l;
        if (e) {
          let {
            bold,
            gray,
            red
          } = n.createColors(!0);
          _ = t => bold(red(t));
          l = e => gray(e);
        } else _ = l = e => e;
        return i.slice(a, o).map((e, t) => {
          let n = a + 1 + t;
          let r = " " + (" " + n).slice(-s) + " | ";
          if (n === this.line) {
            let t = l(r.replace(/\d/g, " ")) + e.slice(0, this.column - 1).replace(/[^\t]/g, " ");
            return _(">") + l(r) + e + `
 ` + t + _("^");
          }
          return " " + l(r) + e;
        }).join(`
`);
      }
      toString() {
        let e = this.showSourceCode();
        e && (e = `

` + e + `
`);
        return this.name + ": " + this.message + e;
      }
    };
    t.exports = i;
    i.$$default = i;
  });
  var f = o((e, t) => {
    var n = {
      after: `
`,
      beforeClose: `
`,
      beforeComment: `
`,
      beforeDecl: `
`,
      beforeOpen: " ",
      beforeRule: `
`,
      colon: ": ",
      commentLeft: " ",
      commentRight: " ",
      emptyBody: "",
      indent: "    ",
      semicolon: !1
    };
    var r = class {
      constructor(e) {
        this.builder = e;
      }
      atrule(e, t) {
        let n = "@" + e.name;
        let r = e.params ? this.rawValue(e, "params") : "";
        if ("u" > typeof e.raws.afterName ? n += e.raws.afterName : r && (n += " "), e.nodes) this.block(e, n + r);else {
          let i = (e.raws.between || "") + (t ? ";" : "");
          this.builder(n + r + i, e);
        }
      }
      beforeAfter(e, t) {
        let n;
        n = "decl" === e.type ? this.raw(e, null, "beforeDecl") : "comment" === e.type ? this.raw(e, null, "beforeComment") : "before" === t ? this.raw(e, null, "beforeRule") : this.raw(e, null, "beforeClose");
        let r = e.parent;
        let i = 0;
        for (; r && "root" !== r.type;) {
          i += 1;
          r = r.parent;
        }
        if (n.includes(`
`)) {
          let t = this.raw(e, null, "indent");
          if (t.length) for (let e = 0; e < i; e++) n += t;
        }
        return n;
      }
      block(e, t) {
        let n;
        let r = this.raw(e, "between", "beforeOpen");
        this.builder(t + r + "{", e, "start");
        e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody");
        n && this.builder(n);
        this.builder("}", e, "end");
      }
      body(e) {
        let t = e.nodes.length - 1;
        for (; t > 0 && "comment" === e.nodes[t].type;) t -= 1;
        let n = this.raw(e, "semicolon");
        for (let r = 0; r < e.nodes.length; r++) {
          let i = e.nodes[r];
          let a = this.raw(i, "before");
          a && this.builder(a);
          this.stringify(i, t !== r || n);
        }
      }
      comment(e) {
        let t = this.raw(e, "left", "commentLeft");
        let n = this.raw(e, "right", "commentRight");
        this.builder("/*" + t + e.text + n + "*/", e);
      }
      decl(e, t) {
        let n = this.raw(e, "between", "colon");
        let r = e.prop + n + this.rawValue(e, "value");
        e.important && (r += e.raws.important || " !important");
        t && (r += ";");
        this.builder(r, e);
      }
      document(e) {
        this.body(e);
      }
      raw(e, t, r) {
        let i;
        if (r || (r = t), t && "u" > typeof (i = e.raws[t])) return i;
        let a = e.parent;
        if ("before" === r && (!a || "root" === a.type && a.first === e || a && "document" === a.type)) return "";
        if (!a) return n[r];
        let o = e.root();
        if (o.rawCache || (o.rawCache = {}), "u" > typeof o.rawCache[r]) return o.rawCache[r];
        if ("before" === r || "after" === r) return this.beforeAfter(e, r);
        {
          var s;
          let n = "raw" + ((s = r)[0].toUpperCase() + s.slice(1));
          this[n] ? i = this[n](o, e) : o.walk(e => {
            if ("u" > typeof (i = e.raws[t])) return !1;
          });
        }
        typeof i > "u" && (i = n[r]);
        o.rawCache[r] = i;
        return i;
      }
      rawBeforeClose(e) {
        let t;
        e.walk(e => {
          if (e.nodes && e.nodes.length > 0 && "u" > typeof e.raws.after) {
            (t = e.raws.after).includes(`
`) && (t = t.replace(/[^\n]+$/, ""));
            return !1;
          }
        });
        t && (t = t.replace(/\S/g, ""));
        return t;
      }
      rawBeforeComment(e, t) {
        let n;
        e.walkComments(e => {
          if ("u" > typeof e.raws.before) {
            (n = e.raws.before).includes(`
`) && (n = n.replace(/[^\n]+$/, ""));
            return !1;
          }
        });
        typeof n > "u" ? n = this.raw(t, null, "beforeDecl") : n && (n = n.replace(/\S/g, ""));
        return n;
      }
      rawBeforeDecl(e, t) {
        let n;
        e.walkDecls(e => {
          if ("u" > typeof e.raws.before) {
            (n = e.raws.before).includes(`
`) && (n = n.replace(/[^\n]+$/, ""));
            return !1;
          }
        });
        typeof n > "u" ? n = this.raw(t, null, "beforeRule") : n && (n = n.replace(/\S/g, ""));
        return n;
      }
      rawBeforeOpen(e) {
        let t;
        e.walk(e => {
          if ("decl" !== e.type && "u" > typeof (t = e.raws.between)) return !1;
        });
        return t;
      }
      rawBeforeRule(e) {
        let t;
        e.walk(n => {
          if (n.nodes && (n.parent !== e || e.first !== n) && "u" > typeof n.raws.before) {
            (t = n.raws.before).includes(`
`) && (t = t.replace(/[^\n]+$/, ""));
            return !1;
          }
        });
        t && (t = t.replace(/\S/g, ""));
        return t;
      }
      rawColon(e) {
        let t;
        e.walkDecls(e => {
          if ("u" > typeof e.raws.between) {
            t = e.raws.between.replace(/[^\s:]/g, "");
            return !1;
          }
        });
        return t;
      }
      rawEmptyBody(e) {
        let t;
        e.walk(e => {
          if (e.nodes && 0 === e.nodes.length && "u" > typeof (t = e.raws.after)) return !1;
        });
        return t;
      }
      rawIndent(e) {
        let t;
        return e.raws.indent ? e.raws.indent : (e.walk(n => {
          let r = n.parent;
          if (r && r !== e && r.parent && r.parent === e && "u" > typeof n.raws.before) {
            let e = n.raws.before.split(`
`);
            t = (t = e[e.length - 1]).replace(/\S/g, "");
            return !1;
          }
        }), t);
      }
      rawSemicolon(e) {
        let t;
        e.walk(e => {
          if (e.nodes && e.nodes.length && "decl" === e.last.type && "u" > typeof (t = e.raws.semicolon)) return !1;
        });
        return t;
      }
      rawValue(e, t) {
        let n = e[t];
        let r = e.raws[t];
        return r && r.value === n ? r.raw : n;
      }
      root(e) {
        this.body(e);
        e.raws.after && this.builder(e.raws.after);
      }
      rule(e) {
        this.block(e, this.rawValue(e, "selector"));
        e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
      }
      stringify(e, t) {
        if (!this[e.type]) throw Error("Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier.");
        this[e.type](e, t);
      }
    };
    t.exports = r;
    r.$$default = r;
  });
  var h = o((e, t) => {
    var n = f();
    function r(e, t) {
      new n(t).stringify(e);
    }
    t.exports = r;
    r.$$default = r;
  });
  var y = o((e, t) => {
    var {
      isClean,
      my
    } = c();
    var i = m();
    var a = f();
    var o = h();
    var s = class {
      constructor(e = {}) {
        for (let t in this.raws = {}, this[isClean] = !1, this[my] = !0, e) if ("nodes" === t) for (let n of (this.nodes = [], e[t])) "function" == typeof n.clone ? this.append(n.clone()) : this.append(n);else this[t] = e[t];
      }
      addToError(e) {
        if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
          let t = this.source;
          e.stack = e.stack.replace(/\n\s{4}at /, `$&${t.input.from}:${t.start.line}:${t.start.column}$&`);
        }
        return e;
      }
      after(e) {
        this.parent.insertAfter(this, e);
        return this;
      }
      assign(e = {}) {
        for (let t in e) this[t] = e[t];
        return this;
      }
      before(e) {
        this.parent.insertBefore(this, e);
        return this;
      }
      cleanRaws(e) {
        delete this.raws.before;
        delete this.raws.after;
        e || delete this.raws.between;
      }
      clone(e = {}) {
        let t = function e(t, n) {
          let r = new t.constructor();
          for (let i in t) {
            if (!Object.prototype.hasOwnProperty.call(t, i) || "proxyCache" === i) continue;
            let a = t[i];
            let o = typeof a;
            "parent" === i && "object" === o ? n && (r[i] = n) : "source" === i ? r[i] = a : Array.isArray(a) ? r[i] = a.map(t => e(t, r)) : ("object" === o && null !== a && (a = e(a)), r[i] = a);
          }
          return r;
        }(this);
        for (let n in e) t[n] = e[n];
        return t;
      }
      cloneAfter(e = {}) {
        let t = this.clone(e);
        this.parent.insertAfter(this, t);
        return t;
      }
      cloneBefore(e = {}) {
        let t = this.clone(e);
        this.parent.insertBefore(this, t);
        return t;
      }
      error(e, t = {}) {
        if (this.source) {
          let {
            end,
            start
          } = this.rangeBy(t);
          return this.source.input.error(e, {
            column: start.column,
            line: start.line
          }, {
            column: end.column,
            line: end.line
          }, t);
        }
        return new i(e);
      }
      getProxyProcessor() {
        return {
          get: (e, t) => "proxyOf" === t ? e : "root" === t ? () => e.root().toProxy() : e[t],
          set: (e, t, n) => (e[t] === n || (e[t] = n, ("prop" === t || "value" === t || "name" === t || "params" === t || "important" === t || "text" === t) && e.markDirty()), !0)
        };
      }
      markDirty() {
        if (this[isClean]) {
          this[isClean] = !1;
          let e = this;
          for (; e = e.parent;) e[isClean] = !1;
        }
      }
      next() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
      }
      positionBy(e, t) {
        let n = this.source.start;
        if (e.index) n = this.positionInside(e.index, t);else if (e.word) {
          let r = (t = this.toString()).indexOf(e.word);
          -1 !== r && (n = this.positionInside(r, t));
        }
        return n;
      }
      positionInside(e, t) {
        let n = t || this.toString();
        let r = this.source.start.column;
        let i = this.source.start.line;
        for (let t = 0; t < e; t++) n[t] === `
` ? (r = 1, i += 1) : r += 1;
        return {
          column: r,
          line: i
        };
      }
      prev() {
        if (!this.parent) return;
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
      }
      rangeBy(e) {
        let t = {
          column: this.source.start.column,
          line: this.source.start.line
        };
        let n = this.source.end ? {
          column: this.source.end.column + 1,
          line: this.source.end.line
        } : {
          column: t.column + 1,
          line: t.line
        };
        if (e.word) {
          let r = this.toString();
          let i = r.indexOf(e.word);
          -1 !== i && (t = this.positionInside(i, r), n = this.positionInside(i + e.word.length, r));
        } else {
          e.start ? t = {
            column: e.start.column,
            line: e.start.line
          } : e.index && (t = this.positionInside(e.index));
          e.end ? n = {
            column: e.end.column,
            line: e.end.line
          } : e.endIndex ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
        }
        (n.line < t.line || n.line === t.line && n.column <= t.column) && (n = {
          column: t.column + 1,
          line: t.line
        });
        return {
          end: n,
          start: t
        };
      }
      raw(e, t) {
        return new a().raw(this, e, t);
      }
      remove() {
        this.parent && this.parent.removeChild(this);
        this.parent = void 0;
        return this;
      }
      replaceWith(...e) {
        if (this.parent) {
          let t = this;
          let n = !1;
          for (let r of e) r === this ? n = !0 : n ? (this.parent.insertAfter(t, r), t = r) : this.parent.insertBefore(t, r);
          n || this.remove();
        }
        return this;
      }
      root() {
        let e = this;
        for (; e.parent && "document" !== e.parent.type;) e = e.parent;
        return e;
      }
      toJSON(e, t) {
        let n = {};
        let r = null == t;
        t = t || new Map();
        let i = 0;
        for (let e in this) {
          if (!Object.prototype.hasOwnProperty.call(this, e) || "parent" === e || "proxyCache" === e) continue;
          let r = this[e];
          if (Array.isArray(r)) n[e] = r.map(e => "object" == typeof e && e.toJSON ? e.toJSON(null, t) : e);else if ("object" == typeof r && r.toJSON) n[e] = r.toJSON(null, t);else if ("source" === e) {
            let a = t.get(r.input);
            null == a && (a = i, t.set(r.input, i), i++);
            n[e] = {
              end: r.end,
              inputId: a,
              start: r.start
            };
          } else n[e] = r;
        }
        r && (n.inputs = [...t.keys()].map(e => e.toJSON()));
        return n;
      }
      toProxy() {
        this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor()));
        return this.proxyCache;
      }
      toString(e = o) {
        e.stringify && (e = e.stringify);
        let t = "";
        e(this, e => {
          t += e;
        });
        return t;
      }
      warn(e, t, n) {
        let r = {
          node: this
        };
        for (let e in n) r[e] = n[e];
        return e.warn(t, r);
      }
      get proxyOf() {
        return this;
      }
    };
    t.exports = s;
    s.$$default = s;
  });
  var g = o((e, t) => {
    var n = y();
    var r = class extends n {
      constructor(e) {
        e && "u" > typeof e.value && "string" != typeof e.value && (e = {
          ...e,
          value: String(e.value)
        });
        super(e);
        this.type = "decl";
      }
      get variable() {
        return this.prop.startsWith("--") || "$" === this.prop[0];
      }
    };
    t.exports = r;
    r.$$default = r;
  });
  var b = o((e, t) => {
    var n = y();
    var r = class extends n {
      constructor(e) {
        super(e);
        this.type = "comment";
      }
    };
    t.exports = r;
    r.$$default = r;
  });
  var D = o((e, t) => {
    var n;
    var r;
    var i;
    var a;
    var {
      isClean,
      my
    } = c();
    var _ = g();
    var l = b();
    var u = y();
    var p = class e extends u {
      append(...e) {
        for (let t of e) for (let e of this.normalize(t, this.last)) this.proxyOf.nodes.push(e);
        this.markDirty();
        return this;
      }
      cleanRaws(e) {
        if (super.cleanRaws(e), this.nodes) for (let t of this.nodes) t.cleanRaws(e);
      }
      each(e) {
        if (!this.proxyOf.nodes) return;
        let t = this.getIterator();
        let n;
        let r;
        for (; this.indexes[t] < this.proxyOf.nodes.length && (n = this.indexes[t], !1 !== (r = e(this.proxyOf.nodes[n], n)));) this.indexes[t] += 1;
        delete this.indexes[t];
        return r;
      }
      every(e) {
        return this.nodes.every(e);
      }
      getIterator() {
        this.lastEach || (this.lastEach = 0);
        this.indexes || (this.indexes = {});
        this.lastEach += 1;
        let e = this.lastEach;
        this.indexes[e] = 0;
        return e;
      }
      getProxyProcessor() {
        return {
          get: (e, t) => "proxyOf" === t ? e : e[t] ? "each" === t || "string" == typeof t && t.startsWith("walk") ? (...n) => e[t](...n.map(e => "function" == typeof e ? (t, n) => e(t.toProxy(), n) : e)) : "every" === t || "some" === t ? n => e[t]((e, ...t) => n(e.toProxy(), ...t)) : "root" === t ? () => e.root().toProxy() : "nodes" === t ? e.nodes.map(e => e.toProxy()) : "first" === t || "last" === t ? e[t].toProxy() : e[t] : e[t],
          set: (e, t, n) => (e[t] === n || (e[t] = n, ("name" === t || "params" === t || "selector" === t) && e.markDirty()), !0)
        };
      }
      index(e) {
        return "number" == typeof e ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
      }
      insertAfter(e, t) {
        let n;
        let r = this.index(e);
        let i = this.normalize(t, this.proxyOf.nodes[r]).reverse();
        for (let t of (r = this.index(e), i)) this.proxyOf.nodes.splice(r + 1, 0, t);
        for (let e in this.indexes) r < (n = this.indexes[e]) && (this.indexes[e] = n + i.length);
        this.markDirty();
        return this;
      }
      insertBefore(e, t) {
        let n;
        let r = this.index(e);
        let i = 0 === r && "prepend";
        let a = this.normalize(t, this.proxyOf.nodes[r], i).reverse();
        for (let t of (r = this.index(e), a)) this.proxyOf.nodes.splice(r, 0, t);
        for (let e in this.indexes) r <= (n = this.indexes[e]) && (this.indexes[e] = n + a.length);
        this.markDirty();
        return this;
      }
      normalize(t, a) {
        if ("string" == typeof t) t = function e(t) {
          return t.map(t => (t.nodes && (t.nodes = e(t.nodes)), delete t.source, t));
        }(n(t).nodes);else if (Array.isArray(t)) for (let e of t = t.slice(0)) e.parent && e.parent.removeChild(e, "ignore");else if ("root" === t.type && "document" !== this.type) for (let e of t = t.nodes.slice(0)) e.parent && e.parent.removeChild(e, "ignore");else if (t.type) t = [t];else if (t.prop) {
          if (typeof t.value > "u") throw Error("Value field is missed in node creation");
          "string" != typeof t.value && (t.value = String(t.value));
          t = [new _(t)];
        } else if (t.selector) t = [new r(t)];else if (t.name) t = [new i(t)];else if (t.text) t = [new l(t)];else throw Error("Unknown node type in node creation");
        return t.map(t => (t[my] || e.rebuild(t), (t = t.proxyOf).parent && t.parent.removeChild(t), t[isClean] && function e(t) {
          if (t[isClean] = !1, t.proxyOf.nodes) for (let n of t.proxyOf.nodes) e(n);
        }(t), typeof t.raws.before > "u" && a && "u" > typeof a.raws.before && (t.raws.before = a.raws.before.replace(/\S/g, "")), t.parent = this.proxyOf, t));
      }
      prepend(...e) {
        for (let t of e = e.reverse()) {
          let e = this.normalize(t, this.first, "prepend").reverse();
          for (let t of e) this.proxyOf.nodes.unshift(t);
          for (let t in this.indexes) this.indexes[t] = this.indexes[t] + e.length;
        }
        this.markDirty();
        return this;
      }
      push(e) {
        e.parent = this;
        this.proxyOf.nodes.push(e);
        return this;
      }
      removeAll() {
        for (let e of this.proxyOf.nodes) e.parent = void 0;
        this.proxyOf.nodes = [];
        this.markDirty();
        return this;
      }
      removeChild(e) {
        let t;
        for (let n in e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1), this.indexes) (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
        this.markDirty();
        return this;
      }
      replaceValues(e, t, n) {
        n || (n = t, t = {});
        this.walkDecls(r => {
          t.props && !t.props.includes(r.prop) || t.fast && !r.value.includes(t.fast) || (r.value = r.value.replace(e, n));
        });
        this.markDirty();
        return this;
      }
      some(e) {
        return this.nodes.some(e);
      }
      walk(e) {
        return this.each((t, n) => {
          let r;
          try {
            r = e(t, n);
          } catch (e) {
            throw t.addToError(e);
          }
          !1 !== r && t.walk && (r = t.walk(e));
          return r;
        });
      }
      walkAtRules(e, t) {
        return t ? e instanceof RegExp ? this.walk((n, r) => {
          if ("atrule" === n.type && e.test(n.name)) return t(n, r);
        }) : this.walk((n, r) => {
          if ("atrule" === n.type && n.name === e) return t(n, r);
        }) : (t = e, this.walk((e, n) => {
          if ("atrule" === e.type) return t(e, n);
        }));
      }
      walkComments(e) {
        return this.walk((t, n) => {
          if ("comment" === t.type) return e(t, n);
        });
      }
      walkDecls(e, t) {
        return t ? e instanceof RegExp ? this.walk((n, r) => {
          if ("decl" === n.type && e.test(n.prop)) return t(n, r);
        }) : this.walk((n, r) => {
          if ("decl" === n.type && n.prop === e) return t(n, r);
        }) : (t = e, this.walk((e, n) => {
          if ("decl" === e.type) return t(e, n);
        }));
      }
      walkRules(e, t) {
        return t ? e instanceof RegExp ? this.walk((n, r) => {
          if ("rule" === n.type && e.test(n.selector)) return t(n, r);
        }) : this.walk((n, r) => {
          if ("rule" === n.type && n.selector === e) return t(n, r);
        }) : (t = e, this.walk((e, n) => {
          if ("rule" === e.type) return t(e, n);
        }));
      }
      get first() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[0];
      }
      get last() {
        if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
      }
    };
    p.registerParse = e => {
      n = e;
    };
    p.registerRule = e => {
      r = e;
    };
    p.registerAtRule = e => {
      i = e;
    };
    p.registerRoot = e => {
      a = e;
    };
    t.exports = p;
    p.$$default = p;
    p.rebuild = e => {
      "atrule" === e.type ? Object.setPrototypeOf(e, i.prototype) : "rule" === e.type ? Object.setPrototypeOf(e, r.prototype) : "decl" === e.type ? Object.setPrototypeOf(e, _.prototype) : "comment" === e.type ? Object.setPrototypeOf(e, l.prototype) : "root" === e.type && Object.setPrototypeOf(e, a.prototype);
      e[my] = !0;
      e.nodes && e.nodes.forEach(e => {
        p.rebuild(e);
      });
    };
  });
  var x = o((e, t) => {
    var n = /[\t\n\f\r "#'()/;[\\\]{}]/g;
    var r = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
    var i = /.[\r\n"'(/\\]/;
    var a = /[\da-f]/i;
    t.exports = function (e, t = {}) {
      let o = e.css.valueOf();
      let s = t.ignoreErrors;
      let _;
      let l;
      let u;
      let c;
      let p;
      let d;
      let m;
      let f;
      let h;
      let y;
      let g = o.length;
      let b = 0;
      let D = [];
      let x = [];
      function v(t) {
        throw e.error("Unclosed " + t, b);
      }
      return {
        back: function (e) {
          x.push(e);
        },
        endOfFile: function () {
          return 0 === x.length && b >= g;
        },
        nextToken: function (e) {
          if (x.length) return x.pop();
          if (b >= g) return;
          let t = !!e && e.ignoreUnclosed;
          switch (_ = o.charCodeAt(b)) {
            case 10:
            case 32:
            case 9:
            case 13:
            case 12:
              l = b;
              do {
                l += 1;
                _ = o.charCodeAt(l);
              } while (32 === _ || 10 === _ || 9 === _ || 13 === _ || 12 === _);
              y = ["space", o.slice(b, l)];
              b = l - 1;
              break;
            case 91:
            case 93:
            case 123:
            case 125:
            case 58:
            case 59:
            case 41:
              {
                let e = String.fromCharCode(_);
                y = [e, e, b];
                break;
              }
            case 40:
              if (f = D.length ? D.pop()[1] : "", h = o.charCodeAt(b + 1), "url" === f && 39 !== h && 34 !== h && 32 !== h && 10 !== h && 9 !== h && 12 !== h && 13 !== h) {
                l = b;
                do {
                  if (d = !1, -1 === (l = o.indexOf(")", l + 1))) {
                    if (s || t) {
                      l = b;
                      break;
                    }
                    v("bracket");
                  }
                  for (m = l; 92 === o.charCodeAt(m - 1);) {
                    m -= 1;
                    d = !d;
                  }
                } while (d);
                y = ["brackets", o.slice(b, l + 1), b, l];
                b = l;
              } else {
                l = o.indexOf(")", b + 1);
                c = o.slice(b, l + 1);
                -1 === l || i.test(c) ? y = ["(", "(", b] : (y = ["brackets", c, b, l], b = l);
              }
              break;
            case 39:
            case 34:
              u = 39 === _ ? "'" : '"';
              l = b;
              do {
                if (d = !1, -1 === (l = o.indexOf(u, l + 1))) {
                  if (s || t) {
                    l = b + 1;
                    break;
                  }
                  v("string");
                }
                for (m = l; 92 === o.charCodeAt(m - 1);) {
                  m -= 1;
                  d = !d;
                }
              } while (d);
              y = ["string", o.slice(b, l + 1), b, l];
              b = l;
              break;
            case 64:
              n.lastIndex = b + 1;
              n.test(o);
              l = 0 === n.lastIndex ? o.length - 1 : n.lastIndex - 2;
              y = ["at-word", o.slice(b, l + 1), b, l];
              b = l;
              break;
            case 92:
              for (l = b, p = !0; 92 === o.charCodeAt(l + 1);) {
                l += 1;
                p = !p;
              }
              if (_ = o.charCodeAt(l + 1), p && 47 !== _ && 32 !== _ && 10 !== _ && 9 !== _ && 13 !== _ && 12 !== _ && (l += 1, a.test(o.charAt(l)))) {
                for (; a.test(o.charAt(l + 1));) l += 1;
                32 === o.charCodeAt(l + 1) && (l += 1);
              }
              y = ["word", o.slice(b, l + 1), b, l];
              b = l;
              break;
            default:
              47 === _ && 42 === o.charCodeAt(b + 1) ? (0 === (l = o.indexOf("*/", b + 2) + 1) && (s || t ? l = o.length : v("comment")), y = ["comment", o.slice(b, l + 1), b, l]) : (r.lastIndex = b + 1, r.test(o), l = 0 === r.lastIndex ? o.length - 1 : r.lastIndex - 2, y = ["word", o.slice(b, l + 1), b, l], D.push(y));
              b = l;
          }
          b++;
          return y;
        },
        position: function () {
          return b;
        }
      };
    };
  });
  var v = o((e, t) => {
    var n = D();
    var r = class extends n {
      constructor(e) {
        super(e);
        this.type = "atrule";
      }
      append(...e) {
        this.proxyOf.nodes || (this.nodes = []);
        return super.append(...e);
      }
      prepend(...e) {
        this.proxyOf.nodes || (this.nodes = []);
        return super.prepend(...e);
      }
    };
    t.exports = r;
    r.$$default = r;
    n.registerAtRule(r);
  });
  var T = o((e, t) => {
    var n;
    var r;
    var i = D();
    var a = class extends i {
      constructor(e) {
        super(e);
        this.type = "root";
        this.nodes || (this.nodes = []);
      }
      normalize(e, t, n) {
        let r = super.normalize(e);
        if (t) {
          if ("prepend" === n) this.nodes.length > 1 ? t.raws.before = this.nodes[1].raws.before : delete t.raws.before;else if (this.first !== t) for (let e of r) e.raws.before = t.raws.before;
        }
        return r;
      }
      removeChild(e, t) {
        let n = this.index(e);
        !t && 0 === n && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[n].raws.before);
        return super.removeChild(e);
      }
      toResult(e = {}) {
        return new n(new r(), this, e).stringify();
      }
    };
    a.registerLazyResult = e => {
      n = e;
    };
    a.registerProcessor = e => {
      r = e;
    };
    t.exports = a;
    a.$$default = a;
    i.registerRoot(a);
  });
  var S = o((e, t) => {
    var n = {
      comma: e => n.split(e, [","], !0),
      space(e) {
        let t = [" ", `
`, "	"];
        return n.split(e, t);
      },
      split(e, t, n) {
        let r = [];
        let i = "";
        let a = !1;
        let o = 0;
        let s = !1;
        let _ = "";
        let l = !1;
        for (let n of e) {
          l ? l = !1 : "\\" === n ? l = !0 : s ? n === _ && (s = !1) : '"' === n || "'" === n ? (s = !0, _ = n) : "(" === n ? o += 1 : ")" === n ? o > 0 && (o -= 1) : 0 === o && t.includes(n) && (a = !0);
          a ? ("" !== i && r.push(i.trim()), i = "", a = !1) : i += n;
        }
        (n || "" !== i) && r.push(i.trim());
        return r;
      }
    };
    t.exports = n;
    n.$$default = n;
  });
  var C = o((e, t) => {
    var n = D();
    var r = S();
    var i = class extends n {
      constructor(e) {
        super(e);
        this.type = "rule";
        this.nodes || (this.nodes = []);
      }
      get selectors() {
        return r.comma(this.selector);
      }
      set selectors(e) {
        let t = this.selector ? this.selector.match(/,\s*/) : null;
        let n = t ? t[0] : "," + this.raw("between", "beforeOpen");
        this.selector = e.join(n);
      }
    };
    t.exports = i;
    i.$$default = i;
    n.registerRule(i);
  });
  var E = o((e, t) => {
    var n = g();
    var r = x();
    var i = b();
    var a = v();
    var o = T();
    var s = C();
    var _ = {
      empty: !0,
      space: !0
    };
    var l = class {
      constructor(e) {
        this.input = e;
        this.root = new o();
        this.current = this.root;
        this.spaces = "";
        this.semicolon = !1;
        this.customProperty = !1;
        this.createTokenizer();
        this.root.source = {
          input: e,
          start: {
            column: 1,
            line: 1,
            offset: 0
          }
        };
      }
      atrule(e) {
        let t = new a();
        t.name = e[1].slice(1);
        "" === t.name && this.unnamedAtrule(t, e);
        this.init(t, e[2]);
        let n;
        let r;
        let i;
        let o = !1;
        let s = !1;
        let _ = [];
        let l = [];
        for (; !this.tokenizer.endOfFile();) {
          if ("(" === (n = (e = this.tokenizer.nextToken())[0]) || "[" === n ? l.push("(" === n ? ")" : "]") : "{" === n && l.length > 0 ? l.push("}") : n === l[l.length - 1] && l.pop(), 0 === l.length) {
            if (";" === n) {
              t.source.end = this.getPosition(e[2]);
              t.source.end.offset++;
              this.semicolon = !0;
              break;
            }
            if ("{" === n) {
              s = !0;
              break;
            }
            if ("}" === n) {
              if (_.length > 0) {
                for (i = _.length - 1, r = _[i]; r && "space" === r[0];) r = _[--i];
                r && (t.source.end = this.getPosition(r[3] || r[2]), t.source.end.offset++);
              }
              this.end(e);
              break;
            } else _.push(e);
          } else _.push(e);
          if (this.tokenizer.endOfFile()) {
            o = !0;
            break;
          }
        }
        t.raws.between = this.spacesAndCommentsFromEnd(_);
        _.length ? (t.raws.afterName = this.spacesAndCommentsFromStart(_), this.raw(t, "params", _), o && (e = _[_.length - 1], t.source.end = this.getPosition(e[3] || e[2]), t.source.end.offset++, this.spaces = t.raws.between, t.raws.between = "")) : (t.raws.afterName = "", t.params = "");
        s && (t.nodes = [], this.current = t);
      }
      checkMissedSemicolon(e) {
        let t = this.colon(e);
        if (!1 === t) return;
        let n = 0;
        let r;
        for (let i = t - 1; i >= 0 && !("space" !== (r = e[i])[0] && 2 === (n += 1)); i--);
        throw this.input.error("Missed semicolon", "word" === r[0] ? r[3] + 1 : r[2]);
      }
      colon(e) {
        let t = 0;
        let n;
        let r;
        for (let [i, a] of e.entries()) {
          if ("(" === (n = a[0]) && (t += 1), ")" === n && (t -= 1), 0 === t && ":" === n) {
            if (r) {
              if ("word" === r[0] && "progid" === r[1]) continue;
              return i;
            }
            this.doubleColon(a);
          }
          r = a;
        }
        return !1;
      }
      comment(e) {
        let t = new i();
        this.init(t, e[2]);
        t.source.end = this.getPosition(e[3] || e[2]);
        t.source.end.offset++;
        let n = e[1].slice(2, -2);
        if (/^\s*$/.test(n)) {
          t.text = "";
          t.raws.left = n;
          t.raws.right = "";
        } else {
          let e = n.match(/^(\s*)([^]*\S)(\s*)$/);
          t.text = e[2];
          t.raws.left = e[1];
          t.raws.right = e[3];
        }
      }
      createTokenizer() {
        this.tokenizer = r(this.input);
      }
      decl(e, t) {
        let r;
        let i = new n();
        this.init(i, e[0][2]);
        let a = e[e.length - 1];
        for (";" === a[0] && (this.semicolon = !0, e.pop()), i.source.end = this.getPosition(a[3] || a[2] || function (e) {
          for (let t = e.length - 1; t >= 0; t--) {
            let n = e[t];
            let r = n[3] || n[2];
            if (r) return r;
          }
        }(e)), i.source.end.offset++; "word" !== e[0][0];) {
          1 === e.length && this.unknownWord(e);
          i.raws.before += e.shift()[1];
        }
        for (i.source.start = this.getPosition(e[0][2]), i.prop = ""; e.length;) {
          let t = e[0][0];
          if (":" === t || "space" === t || "comment" === t) break;
          i.prop += e.shift()[1];
        }
        for (i.raws.between = ""; e.length;) if (":" === (r = e.shift())[0]) {
          i.raws.between += r[1];
          break;
        } else {
          "word" === r[0] && /\w/.test(r[1]) && this.unknownWord([r]);
          i.raws.between += r[1];
        }
        ("_" === i.prop[0] || "*" === i.prop[0]) && (i.raws.before += i.prop[0], i.prop = i.prop.slice(1));
        let o = [];
        let s;
        for (; e.length && !("space" !== (s = e[0][0]) && "comment" !== s);) o.push(e.shift());
        this.precheckMissedSemicolon(e);
        for (let t = e.length - 1; t >= 0; t--) {
          if ("!important" === (r = e[t])[1].toLowerCase()) {
            i.important = !0;
            let n = this.stringFrom(e, t);
            " !important" !== (n = this.spacesFromEnd(e) + n) && (i.raws.important = n);
            break;
          }
          if ("important" === r[1].toLowerCase()) {
            let n = e.slice(0);
            let r = "";
            for (let e = t; e > 0; e--) {
              let t = n[e][0];
              if (0 === r.trim().indexOf("!") && "space" !== t) break;
              r = n.pop()[1] + r;
            }
            0 === r.trim().indexOf("!") && (i.important = !0, i.raws.important = r, e = n);
          }
          if ("space" !== r[0] && "comment" !== r[0]) break;
        }
        e.some(e => "space" !== e[0] && "comment" !== e[0]) && (i.raws.between += o.map(e => e[1]).join(""), o = []);
        this.raw(i, "value", o.concat(e), t);
        i.value.includes(":") && !t && this.checkMissedSemicolon(e);
      }
      doubleColon(e) {
        throw this.input.error("Double colon", {
          offset: e[2]
        }, {
          offset: e[2] + e[1].length
        });
      }
      emptyRule(e) {
        let t = new s();
        this.init(t, e[2]);
        t.selector = "";
        t.raws.between = "";
        this.current = t;
      }
      end(e) {
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon);
        this.semicolon = !1;
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.spaces = "";
        this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
      }
      endFile() {
        this.current.parent && this.unclosedBlock();
        this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon);
        this.current.raws.after = (this.current.raws.after || "") + this.spaces;
        this.root.source.end = this.getPosition(this.tokenizer.position());
      }
      freeSemicolon(e) {
        if (this.spaces += e[1], this.current.nodes) {
          let e = this.current.nodes[this.current.nodes.length - 1];
          e && "rule" === e.type && !e.raws.ownSemicolon && (e.raws.ownSemicolon = this.spaces, this.spaces = "");
        }
      }
      getPosition(e) {
        let t = this.input.fromOffset(e);
        return {
          column: t.col,
          line: t.line,
          offset: e
        };
      }
      init(e, t) {
        this.current.push(e);
        e.source = {
          input: this.input,
          start: this.getPosition(t)
        };
        e.raws.before = this.spaces;
        this.spaces = "";
        "comment" !== e.type && (this.semicolon = !1);
      }
      other(e) {
        let t = !1;
        let n = null;
        let r = !1;
        let i = null;
        let a = [];
        let o = e[1].startsWith("--");
        let s = [];
        let _ = e;
        for (; _;) {
          if (n = _[0], s.push(_), "(" === n || "[" === n) {
            i || (i = _);
            a.push("(" === n ? ")" : "]");
          } else if (o && r && "{" === n) {
            i || (i = _);
            a.push("}");
          } else if (0 === a.length) {
            if (";" === n) {
              if (r) {
                this.decl(s, o);
                return;
              }
              break;
            }
            if ("{" === n) {
              this.rule(s);
              return;
            }
            if ("}" === n) {
              this.tokenizer.back(s.pop());
              t = !0;
              break;
            } else ":" === n && (r = !0);
          } else n === a[a.length - 1] && (a.pop(), 0 === a.length && (i = null));
          _ = this.tokenizer.nextToken();
        }
        if (this.tokenizer.endOfFile() && (t = !0), a.length > 0 && this.unclosedBracket(i), t && r) {
          if (!o) for (; s.length && !("space" !== (_ = s[s.length - 1][0]) && "comment" !== _);) this.tokenizer.back(s.pop());
          this.decl(s, o);
        } else this.unknownWord(s);
      }
      parse() {
        let e;
        for (; !this.tokenizer.endOfFile();) switch ((e = this.tokenizer.nextToken())[0]) {
          case "space":
            this.spaces += e[1];
            break;
          case ";":
            this.freeSemicolon(e);
            break;
          case "}":
            this.end(e);
            break;
          case "comment":
            this.comment(e);
            break;
          case "at-word":
            this.atrule(e);
            break;
          case "{":
            this.emptyRule(e);
            break;
          default:
            this.other(e);
        }
        this.endFile();
      }
      precheckMissedSemicolon() {}
      raw(e, t, n, r) {
        let i;
        let a;
        let o = n.length;
        let s = "";
        let l = !0;
        let u;
        let c;
        for (let e = 0; e < o; e += 1) "space" !== (a = (i = n[e])[0]) || e !== o - 1 || r ? "comment" === a ? (c = n[e - 1] ? n[e - 1][0] : "empty", u = n[e + 1] ? n[e + 1][0] : "empty", _[c] || _[u] ? l = !1 : "," === s.slice(-1) ? l = !1 : s += i[1]) : s += i[1] : l = !1;
        if (!l) {
          let r = n.reduce((e, t) => e + t[1], "");
          e.raws[t] = {
            raw: r,
            value: s
          };
        }
        e[t] = s;
      }
      rule(e) {
        e.pop();
        let t = new s();
        this.init(t, e[0][2]);
        t.raws.between = this.spacesAndCommentsFromEnd(e);
        this.raw(t, "selector", e);
        this.current = t;
      }
      spacesAndCommentsFromEnd(e) {
        let t;
        let n = "";
        for (; e.length && !("space" !== (t = e[e.length - 1][0]) && "comment" !== t);) n = e.pop()[1] + n;
        return n;
      }
      spacesAndCommentsFromStart(e) {
        let t;
        let n = "";
        for (; e.length && !("space" !== (t = e[0][0]) && "comment" !== t);) n += e.shift()[1];
        return n;
      }
      spacesFromEnd(e) {
        let t = "";
        for (; e.length && "space" === e[e.length - 1][0];) t = e.pop()[1] + t;
        return t;
      }
      stringFrom(e, t) {
        let n = "";
        for (let r = t; r < e.length; r++) n += e[r][1];
        e.splice(t, e.length - t);
        return n;
      }
      unclosedBlock() {
        let e = this.current.source.start;
        throw this.input.error("Unclosed block", e.line, e.column);
      }
      unclosedBracket(e) {
        throw this.input.error("Unclosed bracket", {
          offset: e[2]
        }, {
          offset: e[2] + 1
        });
      }
      unexpectedClose(e) {
        throw this.input.error("Unexpected }", {
          offset: e[2]
        }, {
          offset: e[2] + 1
        });
      }
      unknownWord(e) {
        throw this.input.error("Unknown word", {
          offset: e[0][2]
        }, {
          offset: e[0][2] + e[0][1].length
        });
      }
      unnamedAtrule(e, t) {
        throw this.input.error("At-rule without name", {
          offset: t[2]
        }, {
          offset: t[2] + t[1].length
        });
      }
    };
    t.exports = l;
  });
  var w = o(() => {});
  var A = o((e, t) => {
    t.exports = {
      nanoid: (e = 21) => {
        let t = "";
        let n = e;
        for (; n--;) t += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict"[64 * Math.random() | 0];
        return t;
      },
      customAlphabet: (e, t = 21) => (n = t) => {
        let r = "";
        let i = n;
        for (; i--;) r += e[Math.random() * e.length | 0];
        return r;
      }
    };
  });
  var k = o((e, t) => {
    t.exports = class {};
  });
  var F = o((e, t) => {
    var {
      SourceMapConsumer,
      SourceMapGenerator
    } = w();
    var {
      fileURLToPath,
      pathToFileURL
    } = {};
    var {
      isAbsolute,
      resolve
    } = {};
    var {
      nanoid
    } = A();
    var l = d();
    var u = m();
    var c = k();
    var p = Symbol("fromOffsetCache");
    var f = !!(SourceMapConsumer && SourceMapGenerator);
    var h = !!(resolve && isAbsolute);
    var y = class {
      constructor(e, t = {}) {
        if (null === e || typeof e > "u" || "object" == typeof e && !e.toString) throw Error(`PostCSS received ${e} instead of CSS string`);
        if (this.css = e.toString(), "\uFEFF" === this.css[0] || "\uFFFE" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, t.from && (!h || /^\w+:\/\//.test(t.from) || isAbsolute(t.from) ? this.file = t.from : this.file = resolve(t.from)), h && f) {
          let e = new c(this.css, t);
          if (e.text) {
            this.map = e;
            let t = e.consumer().file;
            !this.file && t && (this.file = this.mapResolve(t));
          }
        }
        this.file || (this.id = "<input css " + nanoid(6) + ">");
        this.map && (this.map.file = this.from);
      }
      error(e, t, n, r = {}) {
        let i;
        let o;
        let s;
        if (t && "object" == typeof t) {
          let e = t;
          let r = n;
          if ("number" == typeof e.offset) {
            let r = this.fromOffset(e.offset);
            t = r.line;
            n = r.col;
          } else {
            t = e.line;
            n = e.column;
          }
          if ("number" == typeof r.offset) {
            let e = this.fromOffset(r.offset);
            o = e.line;
            s = e.col;
          } else {
            o = r.line;
            s = r.column;
          }
        } else if (!n) {
          let e = this.fromOffset(t);
          t = e.line;
          n = e.col;
        }
        let _ = this.origin(t, n, o, s);
        (i = _ ? new u(e, void 0 === _.endLine ? _.line : {
          column: _.column,
          line: _.line
        }, void 0 === _.endLine ? _.column : {
          column: _.endColumn,
          line: _.endLine
        }, _.source, _.file, r.plugin) : new u(e, void 0 === o ? t : {
          column: n,
          line: t
        }, void 0 === o ? n : {
          column: s,
          line: o
        }, this.css, this.file, r.plugin)).input = {
          column: n,
          endColumn: s,
          endLine: o,
          line: t,
          source: this.css
        };
        this.file && (pathToFileURL && (i.input.url = pathToFileURL(this.file).toString()), i.input.file = this.file);
        return i;
      }
      fromOffset(e) {
        let t;
        let n;
        if (this[p]) n = this[p];else {
          let e = this.css.split(`
`);
          n = Array(e.length);
          let t = 0;
          for (function () {
            let r = 0;
            let i = e.length;
          }(); r < i; r++) {
            n[r] = t;
            t += e[r].length + 1;
          }
          this[p] = n;
        }
        t = n[n.length - 1];
        let r = 0;
        if (e >= t) r = n.length - 1;else {
          let t = n.length - 2;
          let i;
          for (; r < t;) if (e < n[i = r + (t - r >> 1)]) t = i - 1;else if (e >= n[i + 1]) r = i + 1;else {
            r = i;
            break;
          }
        }
        return {
          col: e - n[r] + 1,
          line: r + 1
        };
      }
      mapResolve(e) {
        return /^\w+:\/\//.test(e) ? e : resolve(this.map.consumer().sourceRoot || this.map.root || ".", e);
      }
      origin(e, t, n, r) {
        let s;
        let _;
        if (!this.map) return !1;
        let l = this.map.consumer();
        let u = l.originalPositionFor({
          column: t,
          line: e
        });
        if (!u.source) return !1;
        "number" == typeof n && (s = l.originalPositionFor({
          column: r,
          line: n
        }));
        _ = isAbsolute(u.source) ? pathToFileURL(u.source) : new URL(u.source, this.map.consumer().sourceRoot || pathToFileURL(this.map.mapFile));
        let c = {
          column: u.column,
          endColumn: s && s.column,
          endLine: s && s.line,
          line: u.line,
          url: _.toString()
        };
        if ("file:" === _.protocol) {
          if (fileURLToPath) c.file = fileURLToPath(_);else throw Error("file: protocol is not available in this PostCSS build");
        }
        let p = l.sourceContentFor(u.source);
        p && (c.source = p);
        return c;
      }
      toJSON() {
        let e = {};
        for (let t of ["hasBOM", "css", "file", "id"]) null != this[t] && (e[t] = this[t]);
        this.map && (e.map = {
          ...this.map
        }, e.map.consumerCache && (e.map.consumerCache = void 0));
        return e;
      }
      get from() {
        return this.file || this.id;
      }
    };
    t.exports = y;
    y.$$default = y;
    l && l.registerInput && l.registerInput(y);
  });
  var P = o((e, t) => {
    var n = D();
    var r = E();
    var i = F();
    function a(e, t) {
      let n = new r(new i(e, t));
      try {
        n.parse();
      } catch (e) {
        throw e;
      }
      return n.root;
    }
    t.exports = a;
    a.$$default = a;
    n.registerParse(a);
  });
  var N = o((e, t) => {
    var n = x();
    var r = F();
    t.exports = {
      isInlineComment(e) {
        if ("word" === e[0] && "//" === e[1].slice(0, 2)) {
          let t = e;
          let i = [];
          let a;
          let o;
          for (; e;) {
            if (/\r?\n/.test(e[1])) {
              if (/['"].*\r?\n/.test(e[1])) {
                i.push(e[1].substring(0, e[1].indexOf(`
`)));
                o = e[1].substring(e[1].indexOf(`
`));
                let t = this.input.css.valueOf().substring(this.tokenizer.position());
                o += t;
                a = e[3] + t.length - o.length;
              } else this.tokenizer.back(e);
              break;
            }
            i.push(e[1]);
            a = e[2];
            e = this.tokenizer.nextToken({
              ignoreUnclosed: !0
            });
          }
          let s = ["comment", i.join(""), t[2], a];
          this.inlineComment(s);
          o && (this.input = new r(o), this.tokenizer = n(this.input));
          return !0;
        }
        if ("/" === e[1]) {
          let n = this.tokenizer.nextToken({
            ignoreUnclosed: !0
          });
          if ("comment" === n[0] && /^\/\*/.test(n[1])) {
            n[0] = "word";
            n[1] = n[1].slice(1);
            e[1] = "//";
            this.tokenizer.back(n);
            return t.exports.isInlineComment.bind(this)(e);
          }
        }
        return !1;
      }
    };
  });
  var I = o((e, t) => {
    t.exports = {
      interpolation(e) {
        let t = [e, this.tokenizer.nextToken()];
        let n = ["word", "}"];
        if (t[0][1].length > 1 || "{" !== t[1][0]) {
          this.tokenizer.back(t[1]);
          return !1;
        }
        for (e = this.tokenizer.nextToken(); e && n.includes(e[0]);) {
          t.push(e);
          e = this.tokenizer.nextToken();
        }
        let r = t.map(e => e[1]);
        let [i] = t;
        let a = t.pop();
        let o = ["word", r.join(""), i[2], a[2]];
        this.tokenizer.back(e);
        this.tokenizer.back(o);
        return !0;
      }
    };
  });
  var O = o((e, t) => {
    var n = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/;
    var r = /\.[0-9]/;
    t.exports = {
      isMixinToken: e => {
        let [, t] = e;
        let [i] = t;
        return ("." === i || "#" === i) && !1 === n.test(t) && !1 === r.test(t);
      }
    };
  });
  var B = o((e, t) => {
    var n = x();
    var r = /^url\((.+)\)/;
    t.exports = e => {
      let {
        name,
        params = ""
      } = e;
      if ("import" === name && params.length) {
        e.$$import = !0;
        let t = n({
          css: params
        });
        for (e.filename = params.replace(r, "$1"); !t.endOfFile();) {
          let [n, r] = t.nextToken();
          if ("word" === n && "url" === r) return;
          if ("brackets" === n) {
            e.options = r;
            e.filename = params.replace(r, "").trim();
            break;
          }
        }
      }
    };
  });
  var j = o((e, t) => {
    var n = /:$/;
    var r = /^:(\s+)?/;
    t.exports = e => {
      let {
        name,
        params = ""
      } = e;
      if (":" === e.name.slice(-1)) {
        if (n.test(name)) {
          let [r] = name.match(n);
          e.name = name.replace(r, "");
          e.raws.afterName = r + (e.raws.afterName || "");
          e.variable = !0;
          e.value = e.params;
        }
        if (r.test(params)) {
          let [t] = params.match(r);
          e.value = params.replace(t, "");
          e.raws.afterName = (e.raws.afterName || "") + t;
          e.variable = !0;
        }
      }
    };
  });
  var M = o((e, t) => {
    var n = b();
    var r = E();
    var {
      isInlineComment
    } = N();
    var {
      interpolation
    } = I();
    var {
      isMixinToken
    } = O();
    var s = B();
    var _ = j();
    var l = /(!\s*important)$/i;
    t.exports = class extends r {
      constructor(...e) {
        super(...e);
        this.lastNode = null;
      }
      atrule(e) {
        interpolation.bind(this)(e) || (super.atrule(e), s(this.lastNode), _(this.lastNode));
      }
      decl(...e) {
        super.decl(...e);
        /extend\(.+\)/i.test(this.lastNode.value) && (this.lastNode.extend = !0);
      }
      each(e) {
        e[0][1] = ` ${e[0][1]}`;
        let t = e.findIndex(e => "(" === e[0]);
        let n = e.reverse().find(e => ")" === e[0]);
        let r = e.reverse().indexOf(n);
        let i = e.splice(t, r).map(e => e[1]).join("");
        for (let t of e.reverse()) this.tokenizer.back(t);
        this.atrule(this.tokenizer.nextToken());
        this.lastNode.$$function = !0;
        this.lastNode.params = i;
      }
      init(e, t, n) {
        super.init(e, t, n);
        this.lastNode = e;
      }
      inlineComment(e) {
        let t = new n();
        let r = e[1].slice(2);
        if (this.init(t, e[2]), t.source.end = this.getPosition(e[3] || e[2]), t.inline = !0, t.raws.begin = "//", /^\s*$/.test(r)) {
          t.text = "";
          t.raws.left = r;
          t.raws.right = "";
        } else {
          let e = r.match(/^(\s*)([^]*[^\s])(\s*)$/);
          [, t.raws.left, t.text, t.raws.right] = e;
        }
      }
      mixin(e) {
        let [t] = e;
        let n = t[1].slice(0, 1);
        let r = e.findIndex(e => "brackets" === e[0]);
        let i = e.findIndex(e => "(" === e[0]);
        let a = "";
        if ((r < 0 || r > 3) && i > 0) {
          let t = e.reduce((e, t, n) => ")" === t[0] ? n : e);
          let n = e.slice(i, t + i).map(e => e[1]).join("");
          let [r] = e.slice(i);
          let a = [r[2], r[3]];
          let [o] = e.slice(t, t + 1);
          let s = ["brackets", n].concat(a, [o[2], o[3]]);
          let _ = e.slice(0, i);
          let l = e.slice(t + 1);
          (e = _).push(s);
          e = e.concat(l);
        }
        let o = [];
        for (let t of e) if (("!" === t[1] || o.length) && o.push(t), "important" === t[1]) break;
        if (o.length) {
          let [t] = o;
          let n = e.indexOf(t);
          let r = o[o.length - 1];
          let i = [t[2], t[3]];
          let a = [r[4], r[5]];
          let s = ["word", o.map(e => e[1]).join("")].concat(i, a);
          e.splice(n, o.length, s);
        }
        let s = e.findIndex(e => l.test(e[1]));
        for (let t of (s > 0 && ([, a] = e[s], e.splice(s, 1)), e.reverse())) this.tokenizer.back(t);
        this.atrule(this.tokenizer.nextToken());
        this.lastNode.mixin = !0;
        this.lastNode.raws.identifier = n;
        a && (this.lastNode.important = !0, this.lastNode.raws.important = a);
      }
      other(e) {
        isInlineComment.bind(this)(e) || super.other(e);
      }
      rule(e) {
        let t = e[e.length - 1];
        let n = e[e.length - 2];
        if ("at-word" === n[0] && "{" === t[0] && (this.tokenizer.back(t), interpolation.bind(this)(n))) {
          let t = this.tokenizer.nextToken();
          for (let n of (e = e.slice(0, e.length - 2).concat([t])).reverse()) this.tokenizer.back(n);
          return;
        }
        super.rule(e);
        /:extend\(.+\)/i.test(this.lastNode.selector) && (this.lastNode.extend = !0);
      }
      unknownWord(e) {
        let [t] = e;
        if ("each" === e[0][1] && "(" === e[1][0]) {
          this.each(e);
          return;
        }
        if (isMixinToken(t)) {
          this.mixin(e);
          return;
        }
        super.unknownWord(e);
      }
    };
  });
  var L = o((e, t) => {
    var n = f();
    t.exports = class extends n {
      atrule(e, t) {
        if (!e.mixin && !e.variable && !e.$$function) {
          super.atrule(e, t);
          return;
        }
        let n = `${e.$$function ? "" : e.raws.identifier || "@"}${e.name}`;
        let r = e.params ? this.rawValue(e, "params") : "";
        let i = e.raws.important || "";
        if (e.variable && (r = e.value), "u" > typeof e.raws.afterName ? n += e.raws.afterName : r && (n += " "), e.nodes) this.block(e, n + r + i);else {
          let a = (e.raws.between || "") + i + (t ? ";" : "");
          this.builder(n + r + a, e);
        }
      }
      comment(e) {
        if (e.inline) {
          let t = this.raw(e, "left", "commentLeft");
          let n = this.raw(e, "right", "commentRight");
          this.builder(`//${t}${e.text}${n}`, e);
        } else super.comment(e);
      }
    };
  });
  var R = o((e, t) => {
    var n = F();
    var r = M();
    var i = L();
    t.exports = {
      parse(e, t) {
        let i = new n(e, t);
        let a = new r(i);
        a.parse();
        a.root.walk(e => {
          let t = i.css.lastIndexOf(e.source.input.css);
          if (0 === t) return;
          if (t + e.source.input.css.length !== i.css.length) throw Error("Invalid state detected in postcss-less");
          let n = t + e.source.start.offset;
          let r = i.fromOffset(t + e.source.start.offset);
          if (e.source.start = {
            offset: n,
            line: r.line,
            column: r.col
          }, e.source.end) {
            let n = t + e.source.end.offset;
            let r = i.fromOffset(t + e.source.end.offset);
            e.source.end = {
              offset: n,
              line: r.line,
              column: r.col
            };
          }
        });
        return a.root;
      },
      stringify(e, t) {
        new i(t).stringify(e);
      },
      nodeToString(e) {
        let n = "";
        t.exports.stringify(e, e => {
          n += e;
        });
        return n;
      }
    };
  });
  var J = o((e, t) => {
    t.exports = class {
      generate() {}
    };
  });
  var q = o((e, t) => {
    var n;
    var r;
    var i = D();
    var a = class extends i {
      constructor(e) {
        super({
          type: "document",
          ...e
        });
        this.nodes || (this.nodes = []);
      }
      toResult(e = {}) {
        return new n(new r(), this, e).stringify();
      }
    };
    a.registerLazyResult = e => {
      n = e;
    };
    a.registerProcessor = e => {
      r = e;
    };
    t.exports = a;
    a.$$default = a;
  });
  var U = o((e, t) => {
    var n = {};
    t.exports = function (e) {
      n[e] || (n[e] = !0, "u" > typeof console && console.warn && console.warn(e));
    };
  });
  var z = o((e, t) => {
    var n = class {
      constructor(e, t = {}) {
        if (this.type = "warning", this.text = e, t.node && t.node.source) {
          let e = t.node.rangeBy(t);
          this.line = e.start.line;
          this.column = e.start.column;
          this.endLine = e.end.line;
          this.endColumn = e.end.column;
        }
        for (let e in t) this[e] = t[e];
      }
      toString() {
        return this.node ? this.node.error(this.text, {
          index: this.index,
          plugin: this.plugin,
          word: this.word
        }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
      }
    };
    t.exports = n;
    n.$$default = n;
  });
  var K = o((e, t) => {
    var n = z();
    var r = class {
      constructor(e, t, n) {
        this.processor = e;
        this.messages = [];
        this.root = t;
        this.opts = n;
        this.css = void 0;
        this.map = void 0;
      }
      toString() {
        return this.css;
      }
      warn(e, t = {}) {
        t.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t.plugin = this.lastPlugin.postcssPlugin);
        let r = new n(e, t);
        this.messages.push(r);
        return r;
      }
      warnings() {
        return this.messages.filter(e => "warning" === e.type);
      }
      get content() {
        return this.css;
      }
    };
    t.exports = r;
    r.$$default = r;
  });
  var W = o((e, t) => {
    var {
      isClean,
      my
    } = c();
    var i = J();
    var a = h();
    var o = D();
    var s = q();
    U();
    var _ = K();
    var l = P();
    var u = T();
    var p = {
      atrule: "AtRule",
      comment: "Comment",
      decl: "Declaration",
      document: "Document",
      root: "Root",
      rule: "Rule"
    };
    var d = {
      AtRule: !0,
      AtRuleExit: !0,
      Comment: !0,
      CommentExit: !0,
      Declaration: !0,
      DeclarationExit: !0,
      Document: !0,
      DocumentExit: !0,
      Once: !0,
      OnceExit: !0,
      postcssPlugin: !0,
      prepare: !0,
      Root: !0,
      RootExit: !0,
      Rule: !0,
      RuleExit: !0
    };
    var m = {
      Once: !0,
      postcssPlugin: !0,
      prepare: !0
    };
    function f(e) {
      return "object" == typeof e && "function" == typeof e.then;
    }
    function y(e) {
      let t = !1;
      let n = p[e.type];
      "decl" === e.type ? t = e.prop.toLowerCase() : "atrule" === e.type && (t = e.name.toLowerCase());
      return t && e.append ? [n, n + "-" + t, 0, n + "Exit", n + "Exit-" + t] : t ? [n, n + "-" + t, n + "Exit", n + "Exit-" + t] : e.append ? [n, 0, n + "Exit"] : [n, n + "Exit"];
    }
    function g(e) {
      return {
        eventIndex: 0,
        events: "document" === e.type ? ["Document", 0, "DocumentExit"] : "root" === e.type ? ["Root", 0, "RootExit"] : y(e),
        iterator: 0,
        node: e,
        visitorIndex: 0,
        visitors: []
      };
    }
    function b(e) {
      e[isClean] = !1;
      e.nodes && e.nodes.forEach(e => b(e));
      return e;
    }
    var x = {};
    var v = class e {
      constructor(t, n, i) {
        let a;
        if (this.stringified = !1, this.processed = !1, "object" == typeof n && null !== n && ("root" === n.type || "document" === n.type)) a = b(n);else if (n instanceof e || n instanceof _) {
          a = b(n.root);
          n.map && (typeof i.map > "u" && (i.map = {}), i.map.inline || (i.map.inline = !1), i.map.prev = n.map);
        } else {
          let e = l;
          i.syntax && (e = i.syntax.parse);
          i.parser && (e = i.parser);
          e.parse && (e = e.parse);
          try {
            a = e(n, i);
          } catch (e) {
            this.processed = !0;
            this.error = e;
          }
          a && !a[my] && o.rebuild(a);
        }
        this.result = new _(t, a, i);
        this.helpers = {
          ...x,
          postcss: x,
          result: this.result
        };
        this.plugins = this.processor.plugins.map(e => "object" == typeof e && e.prepare ? {
          ...e,
          ...e.prepare(this.result)
        } : e);
      }
      async() {
        return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
      }
      catch(e) {
        return this.async().$$catch(e);
      }
      finally(e) {
        return this.async().then(e, e);
      }
      getAsyncError() {
        throw Error("Use process(css).then(cb) to work with async plugins");
      }
      handleError(e, t) {
        let n = this.result.lastPlugin;
        try {
          t && t.addToError(e);
          this.error = e;
          "CssSyntaxError" !== e.name || e.plugin ? n.postcssVersion : (e.plugin = n.postcssPlugin, e.setMessage());
        } catch (e) {
          console && console.error && console.error(e);
        }
        return e;
      }
      prepareVisitors() {
        this.listeners = {};
        let e = (e, t, n) => {
          this.listeners[t] || (this.listeners[t] = []);
          this.listeners[t].push([e, n]);
        };
        for (let t of this.plugins) if ("object" == typeof t) for (let n in t) {
          if (!d[n] && /^[A-Z]/.test(n)) throw Error(`Unknown event ${n} in ${t.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
          if (!m[n]) {
            if ("object" == typeof t[n]) for (let r in t[n]) e(t, "*" === r ? n : n + "-" + r.toLowerCase(), t[n][r]);else "function" == typeof t[n] && e(t, n, t[n]);
          }
        }
        this.hasListener = Object.keys(this.listeners).length > 0;
      }
      async runAsync() {
        this.plugin = 0;
        for (let e = 0; e < this.plugins.length; e++) {
          let t = this.plugins[e];
          let n = this.runOnRoot(t);
          if (f(n)) try {
            await n;
          } catch (e) {
            throw this.handleError(e);
          }
        }
        if (this.prepareVisitors(), this.hasListener) {
          let e = this.result.root;
          for (; !e[isClean];) {
            e[isClean] = !0;
            let t = [g(e)];
            for (; t.length > 0;) {
              let e = this.visitTick(t);
              if (f(e)) try {
                await e;
              } catch (n) {
                let e = t[t.length - 1].node;
                throw this.handleError(n, e);
              }
            }
          }
          if (this.listeners.OnceExit) for (let [t, n] of this.listeners.OnceExit) {
            this.result.lastPlugin = t;
            try {
              if ("document" === e.type) {
                let t = e.nodes.map(e => n(e, this.helpers));
                await Promise.all(t);
              } else await n(e, this.helpers);
            } catch (e) {
              throw this.handleError(e);
            }
          }
        }
        this.processed = !0;
        return this.stringify();
      }
      runOnRoot(e) {
        this.result.lastPlugin = e;
        try {
          if ("object" == typeof e && e.Once) {
            if ("document" === this.result.root.type) {
              let t = this.result.root.nodes.map(t => e.Once(t, this.helpers));
              return f(t[0]) ? Promise.all(t) : t;
            }
            return e.Once(this.result.root, this.helpers);
          }
          if ("function" == typeof e) return e(this.result.root, this.result);
        } catch (e) {
          throw this.handleError(e);
        }
      }
      stringify() {
        if (this.error) throw this.error;
        if (this.stringified) return this.result;
        this.stringified = !0;
        this.sync();
        let e = this.result.opts;
        let t = a;
        e.syntax && (t = e.syntax.stringify);
        e.stringifier && (t = e.stringifier);
        t.stringify && (t = t.stringify);
        let n = new i(t, this.result.root, this.result.opts).generate();
        this.result.css = n[0];
        this.result.map = n[1];
        return this.result;
      }
      sync() {
        if (this.error) throw this.error;
        if (this.processed) return this.result;
        if (this.processed = !0, this.processing) throw this.getAsyncError();
        for (let e of this.plugins) if (f(this.runOnRoot(e))) throw this.getAsyncError();
        if (this.prepareVisitors(), this.hasListener) {
          let e = this.result.root;
          for (; !e[isClean];) {
            e[isClean] = !0;
            this.walkSync(e);
          }
          if (this.listeners.OnceExit) {
            if ("document" === e.type) for (let t of e.nodes) this.visitSync(this.listeners.OnceExit, t);else this.visitSync(this.listeners.OnceExit, e);
          }
        }
        return this.result;
      }
      then(e, t) {
        return this.async().then(e, t);
      }
      toString() {
        return this.css;
      }
      visitSync(e, t) {
        for (let [n, r] of e) {
          let e;
          this.result.lastPlugin = n;
          try {
            e = r(t, this.helpers);
          } catch (e) {
            throw this.handleError(e, t.proxyOf);
          }
          if ("root" !== t.type && "document" !== t.type && !t.parent) return !0;
          if (f(e)) throw this.getAsyncError();
        }
      }
      visitTick(e) {
        let t = e[e.length - 1];
        let {
          node,
          visitors
        } = t;
        if ("root" !== node.type && "document" !== node.type && !node.parent) {
          e.pop();
          return;
        }
        if (visitors.length > 0 && t.visitorIndex < visitors.length) {
          let [e, n] = visitors[t.visitorIndex];
          t.visitorIndex += 1;
          t.visitorIndex === visitors.length && (t.visitors = [], t.visitorIndex = 0);
          this.result.lastPlugin = e;
          try {
            return n(node.toProxy(), this.helpers);
          } catch (e) {
            throw this.handleError(e, node);
          }
        }
        if (0 !== t.iterator) {
          let i = t.iterator;
          let a;
          for (; a = node.nodes[node.indexes[i]];) if (node.indexes[i] += 1, !a[isClean]) {
            a[isClean] = !0;
            e.push(g(a));
            return;
          }
          t.iterator = 0;
          delete node.indexes[i];
        }
        let a = t.events;
        for (; t.eventIndex < a.length;) {
          let e = a[t.eventIndex];
          if (t.eventIndex += 1, 0 === e) {
            node.nodes && node.nodes.length && (node[isClean] = !0, t.iterator = node.getIterator());
            return;
          }
          if (this.listeners[e]) {
            t.visitors = this.listeners[e];
            return;
          }
        }
        e.pop();
      }
      walkSync(e) {
        for (let t of (e[isClean] = !0, y(e))) if (0 === t) e.nodes && e.each(e => {
          e[isClean] || this.walkSync(e);
        });else {
          let n = this.listeners[t];
          if (n && this.visitSync(n, e.toProxy())) return;
        }
      }
      warnings() {
        return this.sync().warnings();
      }
      get content() {
        return this.stringify().content;
      }
      get css() {
        return this.stringify().css;
      }
      get map() {
        return this.stringify().map;
      }
      get messages() {
        return this.sync().messages;
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        return this.sync().root;
      }
      get [Symbol.toStringTag]() {
        return "LazyResult";
      }
    };
    v.registerPostcss = e => {
      x = e;
    };
    t.exports = v;
    v.$$default = v;
    u.registerLazyResult(v);
    s.registerLazyResult(v);
  });
  var V = o((e, t) => {
    var n = J();
    var r = h();
    U();
    var i = P();
    var a = K();
    var o = class {
      constructor(e, t, i) {
        let o;
        t = t.toString();
        this.stringified = !1;
        this._processor = e;
        this._css = t;
        this._opts = i;
        this._map = void 0;
        this.result = new a(this._processor, o, this._opts);
        this.result.css = t;
        let s = this;
        Object.defineProperty(this.result, "root", {
          get: () => s.root
        });
        let _ = new n(r, o, this._opts, t);
        if (_.isMap()) {
          let [e, t] = _.generate();
          e && (this.result.css = e);
          t && (this.result.map = t);
        } else {
          _.clearAnnotation();
          this.result.css = _.css;
        }
      }
      async() {
        return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
      }
      catch(e) {
        return this.async().$$catch(e);
      }
      finally(e) {
        return this.async().then(e, e);
      }
      sync() {
        if (this.error) throw this.error;
        return this.result;
      }
      then(e, t) {
        return this.async().then(e, t);
      }
      toString() {
        return this._css;
      }
      warnings() {
        return [];
      }
      get content() {
        return this.result.css;
      }
      get css() {
        return this.result.css;
      }
      get map() {
        return this.result.map;
      }
      get messages() {
        return [];
      }
      get opts() {
        return this.result.opts;
      }
      get processor() {
        return this.result.processor;
      }
      get root() {
        let e;
        if (this._root) return this._root;
        try {
          e = i(this._css, this._opts);
        } catch (e) {
          this.error = e;
        }
        if (this.error) throw this.error;
        this._root = e;
        return e;
      }
      get [Symbol.toStringTag]() {
        return "NoWorkResult";
      }
    };
    t.exports = o;
    o.$$default = o;
  });
  var $ = o((e, t) => {
    var n = V();
    var r = W();
    var i = q();
    var a = T();
    var o = class {
      constructor(e = []) {
        this.version = "8.4.33";
        this.plugins = this.normalize(e);
      }
      normalize(e) {
        let t = [];
        for (let n of e) if (!0 === n.postcss ? n = n() : n.postcss && (n = n.postcss), "object" == typeof n && Array.isArray(n.plugins)) t = t.concat(n.plugins);else if ("object" == typeof n && n.postcssPlugin) t.push(n);else if ("function" == typeof n) t.push(n);else if (!("object" == typeof n && (n.parse || n.stringify))) throw Error(n + " is not a PostCSS plugin");
        return t;
      }
      process(e, t = {}) {
        return this.plugins.length || t.parser || t.stringifier || t.syntax ? new r(this, e, t) : new n(this, e, t);
      }
      use(e) {
        this.plugins = this.plugins.concat(this.normalize([e]));
        return this;
      }
    };
    t.exports = o;
    o.$$default = o;
    a.registerProcessor(o);
    i.registerProcessor(o);
  });
  var H = o((e, t) => {
    var n = g();
    var r = k();
    var i = b();
    var a = v();
    var o = F();
    var s = T();
    var _ = C();
    function l(e, t) {
      if (Array.isArray(e)) return e.map(e => l(e));
      let {
        inputs,
        ...c
      } = e;
      if (inputs) for (let e of (t = [], inputs)) {
        let n = {
          ...e,
          __proto__: o.prototype
        };
        n.map && (n.map = {
          ...n.map,
          __proto__: r.prototype
        });
        t.push(n);
      }
      if (c.nodes && (c.nodes = e.nodes.map(e => l(e, t))), c.source) {
        let {
          inputId,
          ...n
        } = c.source;
        c.source = n;
        null != inputId && (c.source.input = t[inputId]);
      }
      if ("root" === c.type) return new s(c);
      if ("decl" === c.type) return new n(c);
      if ("rule" === c.type) return new _(c);
      if ("comment" === c.type) return new i(c);
      if ("atrule" === c.type) return new a(c);
      throw Error("Unknown node type: " + e.type);
    }
    t.exports = l;
    l.$$default = l;
  });
  var G = o((e, t) => {
    var n = m();
    var r = g();
    var i = W();
    var a = D();
    var o = $();
    var s = h();
    var _ = H();
    var l = q();
    var u = z();
    var c = b();
    var p = v();
    var d = K();
    var f = F();
    var x = P();
    var E = S();
    var w = C();
    var A = T();
    var k = y();
    function N(...e) {
      1 === e.length && Array.isArray(e[0]) && (e = e[0]);
      return new o(e);
    }
    N.plugin = function (e, t) {
      let n;
      let r = !1;
      function i(...n) {
        console && console.warn && !r && (r = !0, console.warn(e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`));
        let a = t(...n);
        a.postcssPlugin = e;
        a.postcssVersion = new o().version;
        return a;
      }
      Object.defineProperty(i, "postcss", {
        get: () => (n || (n = i()), n)
      });
      i.process = function (e, t, n) {
        return N([i(n)]).process(e, t);
      };
      return i;
    };
    N.stringify = s;
    N.parse = x;
    N.fromJSON = _;
    N.list = E;
    N.comment = e => new c(e);
    N.atRule = e => new p(e);
    N.decl = e => new r(e);
    N.rule = e => new w(e);
    N.root = e => new A(e);
    N.document = e => new l(e);
    N.CssSyntaxError = n;
    N.Declaration = r;
    N.Container = a;
    N.Processor = o;
    N.Document = l;
    N.Comment = c;
    N.Warning = u;
    N.AtRule = p;
    N.Result = d;
    N.Input = f;
    N.Rule = w;
    N.Root = A;
    N.Node = k;
    i.registerPostcss(N);
    t.exports = N;
    N.$$default = N;
  });
  var X = o((e, t) => {
    var {
      Container
    } = G();
    var r = class extends Container {
      constructor(e) {
        super(e);
        this.type = "decl";
        this.isNested = !0;
        this.nodes || (this.nodes = []);
      }
    };
    t.exports = r;
  });
  var Y = o((e, t) => {
    var n = /[\t\n\f\r "#'()/;[\\\]{}]/g;
    var r = /[,\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g;
    var i = /.[\r\n"'(/\\]/;
    var a = /[\da-f]/i;
    var o = /[\n\f\r]/g;
    t.exports = function (e, t = {}) {
      let s = e.css.valueOf();
      let _ = t.ignoreErrors;
      let l;
      let u;
      let c;
      let p;
      let d;
      let m;
      let f;
      let h;
      let y;
      let g = s.length;
      let b = 0;
      let D = [];
      let x = [];
      let v;
      function T(t) {
        throw e.error("Unclosed " + t, b);
      }
      function S() {
        let e = 1;
        let t = !1;
        let n = !1;
        for (; e > 0;) {
          u += 1;
          s.length <= u && T("interpolation");
          l = s.charCodeAt(u);
          h = s.charCodeAt(u + 1);
          t ? n || l !== t ? 92 === l ? n = !n : n && (n = !1) : (t = !1, n = !1) : 39 === l || 34 === l ? t = l : 125 === l ? e -= 1 : 35 === l && 123 === h && (e += 1);
        }
      }
      return {
        back: function (e) {
          x.push(e);
        },
        endOfFile: function () {
          return 0 === x.length && b >= g;
        },
        nextToken: function (e) {
          if (x.length) return x.pop();
          if (b >= g) return;
          let t = !!e && e.ignoreUnclosed;
          switch (l = s.charCodeAt(b)) {
            case 10:
            case 32:
            case 9:
            case 13:
            case 12:
              u = b;
              do {
                u += 1;
                l = s.charCodeAt(u);
              } while (32 === l || 10 === l || 9 === l || 13 === l || 12 === l);
              y = ["space", s.slice(b, u)];
              b = u - 1;
              break;
            case 91:
            case 93:
            case 123:
            case 125:
            case 58:
            case 59:
            case 41:
              {
                let e = String.fromCharCode(l);
                y = [e, e, b];
                break;
              }
            case 44:
              y = ["word", ",", b, b + 1];
              break;
            case 40:
              if (f = D.length ? D.pop()[1] : "", h = s.charCodeAt(b + 1), "url" === f && 39 !== h && 34 !== h) {
                for (v = 1, m = !1, u = b + 1; u <= s.length - 1;) {
                  if (92 === (h = s.charCodeAt(u))) m = !m;else if (40 === h) v += 1;else if (41 === h && 0 == (v -= 1)) break;
                  u += 1;
                }
                y = ["brackets", p = s.slice(b, u + 1), b, u];
                b = u;
              } else {
                u = s.indexOf(")", b + 1);
                p = s.slice(b, u + 1);
                -1 === u || i.test(p) ? y = ["(", "(", b] : (y = ["brackets", p, b, u], b = u);
              }
              break;
            case 39:
            case 34:
              for (c = l, u = b, m = !1; u < g && (++u === g && T("string"), l = s.charCodeAt(u), h = s.charCodeAt(u + 1), !(!m && l === c));) 92 === l ? m = !m : m ? m = !1 : 35 === l && 123 === h && S();
              y = ["string", s.slice(b, u + 1), b, u];
              b = u;
              break;
            case 64:
              n.lastIndex = b + 1;
              n.test(s);
              u = 0 === n.lastIndex ? s.length - 1 : n.lastIndex - 2;
              y = ["at-word", s.slice(b, u + 1), b, u];
              b = u;
              break;
            case 92:
              for (u = b, d = !0; 92 === s.charCodeAt(u + 1);) {
                u += 1;
                d = !d;
              }
              if (l = s.charCodeAt(u + 1), d && 47 !== l && 32 !== l && 10 !== l && 9 !== l && 13 !== l && 12 !== l && (u += 1, a.test(s.charAt(u)))) {
                for (; a.test(s.charAt(u + 1));) u += 1;
                32 === s.charCodeAt(u + 1) && (u += 1);
              }
              y = ["word", s.slice(b, u + 1), b, u];
              b = u;
              break;
            default:
              h = s.charCodeAt(b + 1);
              35 === l && 123 === h ? (u = b, S(), y = ["word", p = s.slice(b, u + 1), b, u]) : 47 === l && 42 === h ? (0 === (u = s.indexOf("*/", b + 2) + 1) && (_ || t ? u = s.length : T("comment")), y = ["comment", s.slice(b, u + 1), b, u]) : 47 === l && 47 === h ? (o.lastIndex = b + 1, o.test(s), u = 0 === o.lastIndex ? s.length - 1 : o.lastIndex - 2, y = ["comment", p = s.slice(b, u + 1), b, u, "inline"]) : (r.lastIndex = b + 1, r.test(s), u = 0 === r.lastIndex ? s.length - 1 : r.lastIndex - 2, y = ["word", s.slice(b, u + 1), b, u], D.push(y));
              b = u;
          }
          b++;
          return y;
        },
        position: function () {
          return b;
        }
      };
    };
  });
  var Q = o((e, t) => {
    var {
      Comment
    } = G();
    var r = E();
    var i = X();
    var a = Y();
    var o = class extends r {
      atrule(e) {
        let t = e[1];
        let n = e;
        for (; !this.tokenizer.endOfFile();) {
          let e = this.tokenizer.nextToken();
          if ("word" === e[0] && e[2] === n[3] + 1) {
            t += e[1];
            n = e;
          } else {
            this.tokenizer.back(e);
            break;
          }
        }
        super.atrule(["at-word", t, e[2], n[3]]);
      }
      comment(e) {
        if ("inline" === e[4]) {
          let t = new Comment();
          this.init(t, e[2]);
          t.raws.inline = !0;
          let r = this.input.fromOffset(e[3]);
          t.source.end = {
            column: r.col,
            line: r.line,
            offset: e[3] + 1
          };
          let i = e[1].slice(2);
          if (/^\s*$/.test(i)) {
            t.text = "";
            t.raws.left = i;
            t.raws.right = "";
          } else {
            let e = i.match(/^(\s*)([^]*\S)(\s*)$/);
            let n = e[2].replace(/(\*\/|\/\*)/g, "*//*");
            t.text = n;
            t.raws.left = e[1];
            t.raws.right = e[3];
            t.raws.text = e[2];
          }
        } else super.comment(e);
      }
      createTokenizer() {
        this.tokenizer = a(this.input);
      }
      raw(e, t, n, r) {
        if (super.raw(e, t, n, r), e.raws[t]) {
          let r = e.raws[t].raw;
          e.raws[t].raw = n.reduce((e, t) => "comment" === t[0] && "inline" === t[4] ? e + "/*" + t[1].slice(2).replace(/(\*\/|\/\*)/g, "*//*") + "*/" : e + t[1], "");
          r !== e.raws[t].raw && (e.raws[t].scss = r);
        }
      }
      rule(e) {
        let t = !1;
        let n = 0;
        let r = "";
        for (let i of e) if (t) "comment" !== i[0] && "{" !== i[0] && (r += i[1]);else {
          if ("space" === i[0] && i[1].includes(`
`)) break;
          "(" === i[0] ? n += 1 : ")" === i[0] ? n -= 1 : 0 === n && ":" === i[0] && (t = !0);
        }
        if (!t || "" === r.trim() || /^[#:A-Za-z-]/.test(r)) super.rule(e);else {
          let t;
          let n;
          e.pop();
          let r = new i();
          this.init(r, e[0][2]);
          for (let n = e.length - 1; n >= 0; n--) if ("space" !== e[n][0]) {
            t = e[n];
            break;
          }
          if (t[3]) {
            let e = this.input.fromOffset(t[3]);
            r.source.end = {
              column: e.col,
              line: e.line,
              offset: t[3] + 1
            };
          } else {
            let e = this.input.fromOffset(t[2]);
            r.source.end = {
              column: e.col,
              line: e.line,
              offset: t[2] + 1
            };
          }
          for (; "word" !== e[0][0];) r.raws.before += e.shift()[1];
          if (e[0][2]) {
            let t = this.input.fromOffset(e[0][2]);
            r.source.start = {
              column: t.col,
              line: t.line,
              offset: e[0][2]
            };
          }
          for (r.prop = ""; e.length;) {
            let t = e[0][0];
            if (":" === t || "space" === t || "comment" === t) break;
            r.prop += e.shift()[1];
          }
          for (r.raws.between = ""; e.length;) if (":" === (n = e.shift())[0]) {
            r.raws.between += n[1];
            break;
          } else r.raws.between += n[1];
          ("_" === r.prop[0] || "*" === r.prop[0]) && (r.raws.before += r.prop[0], r.prop = r.prop.slice(1));
          r.raws.between += this.spacesAndCommentsFromStart(e);
          this.precheckMissedSemicolon(e);
          for (let t = e.length - 1; t > 0; t--) {
            if ("!important" === (n = e[t])[1]) {
              r.important = !0;
              let n = this.stringFrom(e, t);
              " !important" !== (n = this.spacesFromEnd(e) + n) && (r.raws.important = n);
              break;
            }
            if ("important" === n[1]) {
              let n = e.slice(0);
              let i = "";
              for (let e = t; e > 0; e--) {
                let t = n[e][0];
                if (0 === i.trim().indexOf("!") && "space" !== t) break;
                i = n.pop()[1] + i;
              }
              0 === i.trim().indexOf("!") && (r.important = !0, r.raws.important = i, e = n);
            }
            if ("space" !== n[0] && "comment" !== n[0]) break;
          }
          this.raw(r, "value", e);
          r.value.includes(":") && this.checkMissedSemicolon(e);
          this.current = r;
        }
      }
    };
    t.exports = o;
  });
  var Z = o((e, t) => {
    var {
      Input
    } = G();
    var r = Q();
    t.exports = function (e, t) {
      let i = new r(new Input(e, t));
      i.parse();
      return i.root;
    };
  });
  var ee = o(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.$$default = function (e) {
      this.after = e.after;
      this.before = e.before;
      this.type = e.type;
      this.value = e.value;
      this.sourceIndex = e.sourceIndex;
    };
  });
  var et = o(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var t;
    var n = (t = ee()) && t.__esModule ? t : {
      default: t
    };
    function r(e) {
      var t = this;
      this.constructor(e);
      this.nodes = e.nodes;
      void 0 === this.after && (this.after = this.nodes.length > 0 ? this.nodes[this.nodes.length - 1].after : "");
      void 0 === this.before && (this.before = this.nodes.length > 0 ? this.nodes[0].before : "");
      void 0 === this.sourceIndex && (this.sourceIndex = this.before.length);
      this.nodes.forEach(function (e) {
        e.parent = t;
      });
    }
    r.prototype = Object.create(n.$$default.prototype);
    r.constructor = n.$$default;
    r.prototype.walk = function (e, t) {
      for (n = "string" == typeof e || e instanceof RegExp, r = n ? t : e, i = "string" == typeof e ? new RegExp(e) : e, a = 0, void 0; a < this.nodes.length; a++) {
        var n;
        var r;
        var i;
        var a;
        var o = this.nodes[a];
        if ((!n || i.test(o.type)) && r && !1 === r(o, a, this.nodes) || o.nodes && !1 === o.walk(e, t)) return !1;
      }
      return !0;
    };
    r.prototype.each = function () {
      for (e = $$arguments.length <= 0 || void 0 === $$arguments[0] ? function () {} : $$arguments[0], t = 0, void 0; t < this.nodes.length; t++) {
        var e;
        var t;
        if (!1 === e(this.nodes[t], t, this.nodes)) return !1;
      }
      return !0;
    };
    e.$$default = r;
  });
  var en = o(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.parseMediaFeature = i;
    e.parseMediaQuery = a;
    e.parseMediaList = function (e) {
      var r = [];
      var i = 0;
      var o = 0;
      var s = /^(\s*)url\s*\(/.exec(e);
      if (null !== s) {
        for (_ = s[0].length, l = 1, void 0; l > 0;) {
          var _;
          var l;
          var u = e[_];
          "(" === u && l++;
          ")" === u && l--;
          _++;
        }
        r.unshift(new t.$$default({
          type: "url",
          value: e.substring(0, _).trim(),
          sourceIndex: s[1].length,
          before: s[1],
          after: /^(\s*)/.exec(e.substring(_))[1]
        }));
        i = _;
      }
      for (var c = i; c < e.length; c++) {
        var p = e[c];
        if ("(" === p && o++, ")" === p && o--, 0 === o && "," === p) {
          var d = e.substring(i, c);
          var m = /^(\s*)/.exec(d)[1];
          r.push(new n.$$default({
            type: "media-query",
            value: d.trim(),
            sourceIndex: i + m.length,
            nodes: a(d, i),
            before: m,
            after: /(\s*)$/.exec(d)[1]
          }));
          i = c + 1;
        }
      }
      var f = e.substring(i);
      var h = /^(\s*)/.exec(f)[1];
      r.push(new n.$$default({
        type: "media-query",
        value: f.trim(),
        sourceIndex: i + h.length,
        nodes: a(f, i),
        before: h,
        after: /(\s*)$/.exec(f)[1]
      }));
      return r;
    };
    var t = r(ee());
    var n = r(et());
    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function i(e) {
      var t = $$arguments.length <= 1 || void 0 === $$arguments[1] ? 0 : $$arguments[1];
      var n = [{
        mode: "normal",
        character: null
      }];
      var r = [];
      var i = 0;
      var a = "";
      var o = null;
      var s = null;
      var _ = t;
      var l = e;
      "(" === e[0] && ")" === e[e.length - 1] && (l = e.substring(1, e.length - 1), _++);
      for (var u = 0; u < l.length; u++) {
        var c = l[u];
        if (("'" === c || '"' === c) && (!0 === n[i].isCalculationEnabled ? (n.push({
          mode: "string",
          isCalculationEnabled: !1,
          character: c
        }), i++) : "string" === n[i].mode && n[i].character === c && "\\" !== l[u - 1] && (n.pop(), i--)), "{" === c ? (n.push({
          mode: "interpolation",
          isCalculationEnabled: !0
        }), i++) : "}" === c && (n.pop(), i--), "normal" === n[i].mode && ":" === c) {
          var p = l.substring(u + 1);
          (s = {
            type: "value",
            before: /^(\s*)/.exec(p)[1],
            after: /(\s*)$/.exec(p)[1],
            value: p.trim()
          }).sourceIndex = s.before.length + u + 1 + _;
          o = {
            type: "colon",
            sourceIndex: u + _,
            after: s.before,
            value: ":"
          };
          break;
        }
        a += c;
      }
      (a = {
        type: "media-feature",
        before: /^(\s*)/.exec(a)[1],
        after: /(\s*)$/.exec(a)[1],
        value: a.trim()
      }).sourceIndex = a.before.length + _;
      r.push(a);
      null !== o && (o.before = a.after, r.push(o));
      null !== s && r.push(s);
      return r;
    }
    function a(e) {
      var r = $$arguments.length <= 1 || void 0 === $$arguments[1] ? 0 : $$arguments[1];
      var a = [];
      var o = 0;
      var s = !1;
      var _ = void 0;
      function l() {
        return {
          before: "",
          after: "",
          value: ""
        };
      }
      _ = l();
      for (var u = 0; u < e.length; u++) {
        var c = e[u];
        s ? (_.value += c, ("{" === c || "(" === c) && o++, (")" === c || "}" === c) && o--) : -1 !== c.search(/\s/) ? _.before += c : ("(" === c && (_.type = "media-feature-expression", o++), _.value = c, _.sourceIndex = r + u, s = !0);
        s && 0 === o && (")" === c || u === e.length - 1 || -1 !== e[u + 1].search(/\s/)) && (-1 !== ["not", "only", "and"].indexOf(_.value) && (_.type = "keyword"), "media-feature-expression" === _.type && (_.nodes = i(_.value, _.sourceIndex)), a.push(Array.isArray(_.nodes) ? new n.$$default(_) : new t.$$default(_)), _ = l(), s = !1);
      }
      for (var p = 0; p < a.length; p++) if (_ = a[p], p > 0 && (a[p - 1].after = _.before), void 0 === _.type) {
        if (p > 0) {
          if ("media-feature-expression" === a[p - 1].type) {
            _.type = "keyword";
            continue;
          }
          if ("not" === a[p - 1].value || "only" === a[p - 1].value) {
            _.type = "media-type";
            continue;
          }
          if ("and" === a[p - 1].value) {
            _.type = "media-feature-expression";
            continue;
          }
          "media-type" === a[p - 1].type && (a[p + 1] ? _.type = "media-feature-expression" === a[p + 1].type ? "keyword" : "media-feature-expression" : _.type = "media-feature-expression");
        }
        if (0 === p) {
          if (!a[p + 1] || a[p + 1] && ("media-feature-expression" === a[p + 1].type || "keyword" === a[p + 1].type)) {
            _.type = "media-type";
            continue;
          }
          if (a[p + 2]) {
            if ("media-feature-expression" === a[p + 2].type) {
              _.type = "media-type";
              a[p + 1].type = "keyword";
              continue;
            }
            if ("keyword" === a[p + 2].type) {
              _.type = "keyword";
              a[p + 1].type = "media-type";
              continue;
            }
          }
          if (a[p + 3] && "media-feature-expression" === a[p + 3].type) {
            _.type = "keyword";
            a[p + 1].type = "media-type";
            a[p + 2].type = "keyword";
            continue;
          }
        }
      }
      return a;
    }
  });
  var er = o(e => {
    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    e.$$default = function (e) {
      return new n.$$default({
        nodes: r.parseMediaList(e),
        type: "media-query-list",
        value: e.trim()
      });
    };
    var t;
    var n = (t = et()) && t.__esModule ? t : {
      default: t
    };
    var r = en();
  });
  var ei = o((e, t) => {
    t.exports = function (e, t) {
      return (t = "number" == typeof t ? t : 1 / 0) ? function e(n, r) {
        return n.reduce(function (n, i) {
          return Array.isArray(i) && r < t ? n.concat(e(i, r + 1)) : n.concat(i);
        }, []);
      }(e, 1) : Array.isArray(e) ? e.map(function (e) {
        return e;
      }) : e;
    };
  });
  var ea = o((e, t) => {
    t.exports = function (e, t) {
      for (n = -1, r = [], void 0; -1 !== (n = e.indexOf(t, n + 1));) {
        var n;
        var r;
        r.push(n);
      }
      return r;
    };
  });
  var eo = o((e, t) => {
    t.exports = function (e, t, n) {
      return 0 === e.length ? e : t ? (n || e.sort(t), function (e, t) {
        for (n = 1, r = e.length, i = e[0], a = e[0], o = 1, void 0; o < r; ++o) {
          var n;
          var r;
          var i;
          var a;
          var o;
          if (a = i, t(i = e[o], a)) {
            if (o === n) {
              n++;
              continue;
            }
            e[n++] = i;
          }
        }
        e.length = n;
        return e;
      }(e, t)) : (n || e.sort(), function (e) {
        for (t = 1, n = e.length, r = e[0], i = e[0], a = 1, void 0; a < n; ++a, i = r) {
          var t;
          var n;
          var r;
          var i;
          var a;
          if (i = r, (r = e[a]) !== i) {
            if (a === t) {
              t++;
              continue;
            }
            e[t++] = r;
          }
        }
        e.length = t;
        return e;
      }(e));
    };
  });
  var es = o((e, t) => {
    e.__esModule = !0;
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    var r = function e(t, r) {
      if ((typeof t > "u" ? "undefined" : n(t)) !== "object") return t;
      var i = new t.constructor();
      for (var a in t) if (t.hasOwnProperty(a)) {
        var o = t[a];
        var s = typeof o > "u" ? "undefined" : n(o);
        "parent" === a && "object" === s ? r && (i[a] = r) : o instanceof Array ? i[a] = o.map(function (t) {
          return e(t, i);
        }) : i[a] = e(o, i);
      }
      return i;
    };
    var i = function () {
      function e() {
        var t = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : {};
        for (var n in !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, e), t) this[n] = t[n];
        var r = t.spaces;
        var i = (r = void 0 === r ? {} : r).before;
        var a = r.after;
        this.spaces = {
          before: void 0 === i ? "" : i,
          after: void 0 === a ? "" : a
        };
      }
      e.prototype.remove = function () {
        this.parent && this.parent.removeChild(this);
        this.parent = void 0;
        return this;
      };
      e.prototype.replaceWith = function () {
        if (this.parent) {
          for (var e in arguments) this.parent.insertBefore(this, $$arguments[e]);
          this.remove();
        }
        return this;
      };
      e.prototype.next = function () {
        return this.parent.at(this.parent.index(this) + 1);
      };
      e.prototype.prev = function () {
        return this.parent.at(this.parent.index(this) - 1);
      };
      e.prototype.clone = function () {
        var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : {};
        var t = r(this);
        for (var n in e) t[n] = e[n];
        return t;
      };
      e.prototype.toString = function () {
        return [this.spaces.before, String(this.value), this.spaces.after].join("");
      };
      return e;
    }();
    e.$$default = i;
    t.exports = e.$$default;
  });
  var e_ = o(e => {
    e.__esModule = !0;
    e.TAG = "tag";
    e.STRING = "string";
    e.SELECTOR = "selector";
    e.ROOT = "root";
    e.PSEUDO = "pseudo";
    e.NESTING = "nesting";
    e.ID = "id";
    e.COMMENT = "comment";
    e.COMBINATOR = "combinator";
    e.CLASS = "class";
    e.ATTRIBUTE = "attribute";
    e.UNIVERSAL = "universal";
  });
  var el = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1;
          r.configurable = !0;
          "value" in r && (r.writable = !0);
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        n && e(t.prototype, n);
        r && e(t, r);
        return t;
      };
    }();
    var i = (n = es()) && n.__esModule ? n : {
      default: n
    };
    var a = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      t.$$default = e;
      return t;
    }(e_());
    var o = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.nodes || (r.nodes = []);
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.append = function (e) {
        e.parent = this;
        this.nodes.push(e);
        return this;
      };
      t.prototype.prepend = function (e) {
        e.parent = this;
        this.nodes.unshift(e);
        return this;
      };
      t.prototype.at = function (e) {
        return this.nodes[e];
      };
      t.prototype.index = function (e) {
        return "number" == typeof e ? e : this.nodes.indexOf(e);
      };
      t.prototype.removeChild = function (e) {
        e = this.index(e);
        this.at(e).parent = void 0;
        this.nodes.splice(e, 1);
        var t = void 0;
        for (var n in this.indexes) (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
        return this;
      };
      t.prototype.removeAll = function () {
        for (t = this.nodes, n = Array.isArray(t), r = 0, t = n ? t : t[Symbol.iterator](), void 0;;) {
          var e;
          var t;
          var n;
          var r;
          var t;
          if (n) {
            if (r >= t.length) break;
            e = t[r++];
          } else {
            if ((r = t.next()).done) break;
            e = r.value;
          }
          e.parent = void 0;
        }
        this.nodes = [];
        return this;
      };
      t.prototype.empty = function () {
        return this.removeAll();
      };
      t.prototype.insertAfter = function (e, t) {
        var n = this.index(e);
        this.nodes.splice(n + 1, 0, t);
        var r = void 0;
        for (var i in this.indexes) n <= (r = this.indexes[i]) && (this.indexes[i] = r + this.nodes.length);
        return this;
      };
      t.prototype.insertBefore = function (e, t) {
        var n = this.index(e);
        this.nodes.splice(n, 0, t);
        var r = void 0;
        for (var i in this.indexes) n <= (r = this.indexes[i]) && (this.indexes[i] = r + this.nodes.length);
        return this;
      };
      t.prototype.each = function (e) {
        this.lastEach || (this.lastEach = 0);
        this.indexes || (this.indexes = {});
        this.lastEach++;
        var t = this.lastEach;
        if (this.indexes[t] = 0, this.length) {
          for (n = void 0, r = void 0, void 0; this.indexes[t] < this.length && (n = this.indexes[t], !1 !== (r = e(this.at(n), n)));) {
            var n;
            var r;
            this.indexes[t] += 1;
          }
          if (delete this.indexes[t], !1 === r) return !1;
        }
      };
      t.prototype.walk = function (e) {
        return this.each(function (t, n) {
          var r = e(t, n);
          if (!1 !== r && t.length && (r = t.walk(e)), !1 === r) return !1;
        });
      };
      t.prototype.walkAttributes = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.ATTRIBUTE) return e.call(t, n);
        });
      };
      t.prototype.walkClasses = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.CLASS) return e.call(t, n);
        });
      };
      t.prototype.walkCombinators = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.COMBINATOR) return e.call(t, n);
        });
      };
      t.prototype.walkComments = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.COMMENT) return e.call(t, n);
        });
      };
      t.prototype.walkIds = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.ID) return e.call(t, n);
        });
      };
      t.prototype.walkNesting = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.NESTING) return e.call(t, n);
        });
      };
      t.prototype.walkPseudos = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.PSEUDO) return e.call(t, n);
        });
      };
      t.prototype.walkTags = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.TAG) return e.call(t, n);
        });
      };
      t.prototype.walkUniversals = function (e) {
        var t = this;
        return this.walk(function (n) {
          if (n.type === a.UNIVERSAL) return e.call(t, n);
        });
      };
      t.prototype.split = function (e) {
        var t = this;
        var n = [];
        return this.reduce(function (r, i, a) {
          var o = e.call(t, i);
          n.push(i);
          o ? (r.push(n), n = []) : a === t.length - 1 && r.push(n);
          return r;
        }, []);
      };
      t.prototype.map = function (e) {
        return this.nodes.map(e);
      };
      t.prototype.reduce = function (e, t) {
        return this.nodes.reduce(e, t);
      };
      t.prototype.every = function (e) {
        return this.nodes.every(e);
      };
      t.prototype.some = function (e) {
        return this.nodes.some(e);
      };
      t.prototype.filter = function (e) {
        return this.nodes.filter(e);
      };
      t.prototype.sort = function (e) {
        return this.nodes.sort(e);
      };
      t.prototype.toString = function () {
        return this.map(String).join("");
      };
      r(t, [{
        key: "first",
        get: function () {
          return this.at(0);
        }
      }, {
        key: "last",
        get: function () {
          return this.at(this.length - 1);
        }
      }, {
        key: "length",
        get: function () {
          return this.nodes.length;
        }
      }]);
      return t;
    }(i.$$default);
    e.$$default = o;
    t.exports = e.$$default;
  });
  var eu = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = el()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.ROOT;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        var e = this.reduce(function (e, t) {
          var n = String(t);
          return n ? e + n + "," : "";
        }, "").slice(0, -1);
        return this.trailingComma ? e + "," : e;
      };
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ec = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = el()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.SELECTOR;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ep = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1;
          r.configurable = !0;
          "value" in r && (r.writable = !0);
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        n && e(t.prototype, n);
        r && e(t, r);
        return t;
      };
    }();
    var i = function (e) {
      function t() {
        (function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        })(this, t);
        return function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.apply(this, arguments));
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        return [this.spaces.before, this.ns, String(this.value), this.spaces.after].join("");
      };
      r(t, [{
        key: "ns",
        get: function () {
          var e = this.namespace;
          return e ? ("string" == typeof e ? e : "") + "|" : "";
        }
      }]);
      return t;
    }(((n = es()) && n.__esModule ? n : {
      default: n
    }).$$default);
    e.$$default = i;
    t.exports = e.$$default;
  });
  var ed = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = ep()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.CLASS;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        return [this.spaces.before, this.ns, "." + this.value, this.spaces.after].join("");
      };
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var em = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = es()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.COMMENT;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ef = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = ep()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.ID;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        return [this.spaces.before, this.ns, "#" + this.value, this.spaces.after].join("");
      };
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var eh = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = ep()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.TAG;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ey = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = es()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.STRING;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var eg = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = el()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.PSEUDO;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        var e = this.length ? "(" + this.map(String).join(",") + ")" : "";
        return [this.spaces.before, String(this.value), e, this.spaces.after].join("");
      };
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var eb = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = ep()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.ATTRIBUTE;
        r.raws = {};
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      t.prototype.toString = function () {
        var e = [this.spaces.before, "[", this.ns, this.attribute];
        this.operator && e.push(this.operator);
        this.value && e.push(this.value);
        this.raws.insensitive ? e.push(this.raws.insensitive) : this.insensitive && e.push(" i");
        e.push("]");
        return e.concat(this.spaces.after).join("");
      };
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var eD = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = ep()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.UNIVERSAL;
        r.value = "*";
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ex = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = es()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.COMBINATOR;
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ev = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = (n = es()) && n.__esModule ? n : {
      default: n
    };
    var i = e_();
    var a = function (e) {
      function t(n) {
        !function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        }(this, t);
        var r = function (e, t) {
          if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t && ("object" == typeof t || "function" == typeof t) ? t : e;
        }(this, e.call(this, n));
        r.type = i.NESTING;
        r.value = "&";
        return r;
      }
      !function (e, t) {
        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        });
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
      }(t, e);
      return t;
    }(r.$$default);
    e.$$default = a;
    t.exports = e.$$default;
  });
  var eT = o((e, t) => {
    e.__esModule = !0;
    e.$$default = function (e) {
      return e.sort(function (e, t) {
        return e - t;
      });
    };
    t.exports = e.$$default;
  });
  var eS = o((e, t) => {
    e.__esModule = !0;
    e.$$default = function (e) {
      for (t = [], i = e.css.valueOf(), a = void 0, o = void 0, s = void 0, _ = void 0, l = void 0, u = void 0, c = void 0, p = void 0, d = void 0, m = void 0, f = void 0, h = i.length, y = -1, g = 1, b = 0, D = function (t, n) {
        if (e.safe) {
          i += n;
          o = i.length - 1;
        } else throw e.error("Unclosed " + t, g, b - y, b);
      }, void 0; b < h;) {
        var t;
        var i;
        var a;
        var o;
        var s;
        var _;
        var l;
        var u;
        var c;
        var p;
        var d;
        var m;
        var f;
        var h;
        var y;
        var g;
        var b;
        var D;
        switch (10 === (a = i.charCodeAt(b)) && (y = b, g += 1), a) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            o = b;
            do {
              o += 1;
              10 === (a = i.charCodeAt(o)) && (y = o, g += 1);
            } while (32 === a || 10 === a || 9 === a || 13 === a || 12 === a);
            t.push(["space", i.slice(b, o), g, b - y, b]);
            b = o - 1;
            break;
          case 43:
          case 62:
          case 126:
          case 124:
            o = b;
            do {
              o += 1;
              a = i.charCodeAt(o);
            } while (43 === a || 62 === a || 126 === a || 124 === a);
            t.push(["combinator", i.slice(b, o), g, b - y, b]);
            b = o - 1;
            break;
          case 42:
            t.push(["*", "*", g, b - y, b]);
            break;
          case 38:
            t.push(["&", "&", g, b - y, b]);
            break;
          case 44:
            t.push([",", ",", g, b - y, b]);
            break;
          case 91:
            t.push(["[", "[", g, b - y, b]);
            break;
          case 93:
            t.push(["]", "]", g, b - y, b]);
            break;
          case 58:
            t.push([":", ":", g, b - y, b]);
            break;
          case 59:
            t.push([";", ";", g, b - y, b]);
            break;
          case 40:
            t.push(["(", "(", g, b - y, b]);
            break;
          case 41:
            t.push([")", ")", g, b - y, b]);
            break;
          case 39:
          case 34:
            s = 39 === a ? "'" : '"';
            o = b;
            do for (m = !1, -1 === (o = i.indexOf(s, o + 1)) && D("quote", s), f = o; 92 === i.charCodeAt(f - 1);) {
              f -= 1;
              m = !m;
            } while (m);
            t.push(["string", i.slice(b, o + 1), g, b - y, g, o - y, b]);
            b = o;
            break;
          case 64:
            n.lastIndex = b + 1;
            n.test(i);
            o = 0 === n.lastIndex ? i.length - 1 : n.lastIndex - 2;
            t.push(["at-word", i.slice(b, o + 1), g, b - y, g, o - y, b]);
            b = o;
            break;
          case 92:
            for (o = b, c = !0; 92 === i.charCodeAt(o + 1);) {
              o += 1;
              c = !c;
            }
            a = i.charCodeAt(o + 1);
            c && 47 !== a && 32 !== a && 10 !== a && 9 !== a && 13 !== a && 12 !== a && (o += 1);
            t.push(["word", i.slice(b, o + 1), g, b - y, g, o - y, b]);
            b = o;
            break;
          default:
            47 === a && 42 === i.charCodeAt(b + 1) ? (0 === (o = i.indexOf("*/", b + 2) + 1) && D("comment", "*/"), (l = (_ = (u = i.slice(b, o + 1)).split(`
`)).length - 1) > 0 ? (p = g + l, d = o - _[l].length) : (p = g, d = y), t.push(["comment", u, g, b - y, p, o - d, b]), y = d, g = p) : (r.lastIndex = b + 1, r.test(i), o = 0 === r.lastIndex ? i.length - 1 : r.lastIndex - 2, t.push(["word", i.slice(b, o + 1), g, b - y, g, o - y, b]));
            b = o;
        }
        b++;
      }
      return t;
    };
    var n = /[ \n\t\r\{\(\)'"\\;/]/g;
    var r = /[ \n\t\r\(\)\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
    t.exports = e.$$default;
  });
  var eC = o((e, t) => {
    e.__esModule = !0;
    var n = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1;
          r.configurable = !0;
          "value" in r && (r.writable = !0);
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        n && e(t.prototype, n);
        r && e(t, r);
        return t;
      };
    }();
    var r = x(ei());
    var i = x(ea());
    var a = x(eo());
    var o = x(eu());
    var s = x(ec());
    var _ = x(ed());
    var l = x(em());
    var u = x(ef());
    var c = x(eh());
    var p = x(ey());
    var d = x(eg());
    var m = x(eb());
    var f = x(eD());
    var h = x(ex());
    var y = x(ev());
    var g = x(eT());
    var b = x(eS());
    var D = function (e) {
      if (e && e.__esModule) return e;
      var t = {};
      if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      t.$$default = e;
      return t;
    }(e_());
    function x(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var v = function () {
      function e(t) {
        (function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        })(this, e);
        this.input = t;
        this.lossy = !1 === t.options.lossless;
        this.position = 0;
        this.root = new o.$$default();
        var n = new s.$$default();
        this.root.append(n);
        this.current = n;
        this.lossy ? this.tokens = b.$$default({
          safe: t.safe,
          css: t.css.trim()
        }) : this.tokens = b.$$default(t);
        return this.loop();
      }
      e.prototype.attribute = function () {
        var e = "";
        var t = void 0;
        var n = this.currToken;
        for (this.position++; this.position < this.tokens.length && "]" !== this.currToken[0];) {
          e += this.tokens[this.position][1];
          this.position++;
        }
        this.position !== this.tokens.length || ~e.indexOf("]") || this.error("Expected a closing square bracket.");
        var r = e.split(/((?:[*~^$|]?=))([^]*)/);
        var i = r[0].split(/(\|)/g);
        var a = {
          operator: r[1],
          value: r[2],
          source: {
            start: {
              line: n[2],
              column: n[3]
            },
            end: {
              line: this.currToken[2],
              column: this.currToken[3]
            }
          },
          sourceIndex: n[4]
        };
        if (i.length > 1 ? ("" === i[0] && (i[0] = !0), a.attribute = this.parseValue(i[2]), a.namespace = this.parseNamespace(i[0])) : a.attribute = this.parseValue(r[0]), t = new m.$$default(a), r[2]) {
          var o = r[2].split(/(\s+i\s*?)$/);
          var s = o[0].trim();
          t.value = this.lossy ? s : o[0];
          o[1] && (t.insensitive = !0, this.lossy || (t.raws.insensitive = o[1]));
          t.quoted = "'" === s[0] || '"' === s[0];
          t.raws.unquoted = t.quoted ? s.slice(1, -1) : s;
        }
        this.newNode(t);
        this.position++;
      };
      e.prototype.combinator = function () {
        if ("|" === this.currToken[1]) return this.namespace();
        for (var e = new h.$$default({
          value: "",
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[2],
              column: this.currToken[3]
            }
          },
          sourceIndex: this.currToken[4]
        }); this.position < this.tokens.length && this.currToken && ("space" === this.currToken[0] || "combinator" === this.currToken[0]);) {
          this.nextToken && "combinator" === this.nextToken[0] ? (e.spaces.before = this.parseSpace(this.currToken[1]), e.source.start.line = this.nextToken[2], e.source.start.column = this.nextToken[3], e.source.end.column = this.nextToken[3], e.source.end.line = this.nextToken[2], e.sourceIndex = this.nextToken[4]) : this.prevToken && "combinator" === this.prevToken[0] ? e.spaces.after = this.parseSpace(this.currToken[1]) : "combinator" === this.currToken[0] ? e.value = this.currToken[1] : "space" === this.currToken[0] && (e.value = this.parseSpace(this.currToken[1], " "));
          this.position++;
        }
        return this.newNode(e);
      };
      e.prototype.comma = function () {
        if (this.position === this.tokens.length - 1) {
          this.root.trailingComma = !0;
          this.position++;
          return;
        }
        var e = new s.$$default();
        this.current.parent.append(e);
        this.current = e;
        this.position++;
      };
      e.prototype.comment = function () {
        var e = new l.$$default({
          value: this.currToken[1],
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[4],
              column: this.currToken[5]
            }
          },
          sourceIndex: this.currToken[6]
        });
        this.newNode(e);
        this.position++;
      };
      e.prototype.error = function (e) {
        throw new this.input.error(e);
      };
      e.prototype.missingBackslash = function () {
        return this.error("Expected a backslash preceding the semicolon.");
      };
      e.prototype.missingParenthesis = function () {
        return this.error("Expected opening parenthesis.");
      };
      e.prototype.missingSquareBracket = function () {
        return this.error("Expected opening square bracket.");
      };
      e.prototype.namespace = function () {
        var e = this.prevToken && this.prevToken[1] || !0;
        return "word" === this.nextToken[0] ? (this.position++, this.word(e)) : "*" === this.nextToken[0] ? (this.position++, this.universal(e)) : void 0;
      };
      e.prototype.nesting = function () {
        this.newNode(new y.$$default({
          value: this.currToken[1],
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[2],
              column: this.currToken[3]
            }
          },
          sourceIndex: this.currToken[4]
        }));
        this.position++;
      };
      e.prototype.parentheses = function () {
        var e = this.current.last;
        if (e && e.type === D.PSEUDO) {
          var t = new s.$$default();
          var n = this.current;
          e.append(t);
          this.current = t;
          var r = 1;
          for (this.position++; this.position < this.tokens.length && r;) {
            "(" === this.currToken[0] && r++;
            ")" === this.currToken[0] && r--;
            r ? this.parse() : (t.parent.source.end.line = this.currToken[2], t.parent.source.end.column = this.currToken[3], this.position++);
          }
          r && this.error("Expected closing parenthesis.");
          this.current = n;
        } else {
          var i = 1;
          for (this.position++, e.value += "("; this.position < this.tokens.length && i;) {
            "(" === this.currToken[0] && i++;
            ")" === this.currToken[0] && i--;
            e.value += this.parseParenthesisToken(this.currToken);
            this.position++;
          }
          i && this.error("Expected closing parenthesis.");
        }
      };
      e.prototype.pseudo = function () {
        for (e = this, t = "", n = this.currToken, void 0; this.currToken && ":" === this.currToken[0];) {
          var e;
          var t;
          var n;
          t += this.currToken[1];
          this.position++;
        }
        if (!this.currToken) return this.error("Expected pseudo-class or pseudo-element");
        if ("word" === this.currToken[0]) {
          var r = void 0;
          this.splitWord(!1, function (i, a) {
            t += i;
            r = new d.$$default({
              value: t,
              source: {
                start: {
                  line: n[2],
                  column: n[3]
                },
                end: {
                  line: e.currToken[4],
                  column: e.currToken[5]
                }
              },
              sourceIndex: n[4]
            });
            e.newNode(r);
            a > 1 && e.nextToken && "(" === e.nextToken[0] && e.error("Misplaced parenthesis.");
          });
        } else this.error('Unexpected "' + this.currToken[0] + '" found.');
      };
      e.prototype.space = function () {
        var e = this.currToken;
        0 === this.position || "," === this.prevToken[0] || "(" === this.prevToken[0] ? (this.spaces = this.parseSpace(e[1]), this.position++) : this.position === this.tokens.length - 1 || "," === this.nextToken[0] || ")" === this.nextToken[0] ? (this.current.last.spaces.after = this.parseSpace(e[1]), this.position++) : this.combinator();
      };
      e.prototype.string = function () {
        var e = this.currToken;
        this.newNode(new p.$$default({
          value: this.currToken[1],
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6]
        }));
        this.position++;
      };
      e.prototype.universal = function (e) {
        var t = this.nextToken;
        if (t && "|" === t[1]) {
          this.position++;
          return this.namespace();
        }
        this.newNode(new f.$$default({
          value: this.currToken[1],
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[2],
              column: this.currToken[3]
            }
          },
          sourceIndex: this.currToken[4]
        }), e);
        this.position++;
      };
      e.prototype.splitWord = function (e, t) {
        for (n = this, o = this.nextToken, s = this.currToken[1], void 0; o && "word" === o[0];) {
          var n;
          var o;
          var s;
          this.position++;
          var l = this.currToken[1];
          if (s += l, l.lastIndexOf("\\") === l.length - 1) {
            var p = this.nextToken;
            p && "space" === p[0] && (s += this.parseSpace(p[1], " "), this.position++);
          }
          o = this.nextToken;
        }
        var d = i.$$default(s, ".");
        var m = i.$$default(s, "#");
        var f = i.$$default(s, "#{");
        f.length && (m = m.filter(function (e) {
          return !~f.indexOf(e);
        }));
        var h = g.$$default(a.$$default(r.$$default([[0], d, m])));
        h.forEach(function (r, i) {
          var a = h[i + 1] || s.length;
          var o = s.slice(r, a);
          if (0 === i && t) return t.call(n, o, h.length);
          var l = void 0;
          l = ~d.indexOf(r) ? new _.$$default({
            value: o.slice(1),
            source: {
              start: {
                line: n.currToken[2],
                column: n.currToken[3] + r
              },
              end: {
                line: n.currToken[4],
                column: n.currToken[3] + (a - 1)
              }
            },
            sourceIndex: n.currToken[6] + h[i]
          }) : ~m.indexOf(r) ? new u.$$default({
            value: o.slice(1),
            source: {
              start: {
                line: n.currToken[2],
                column: n.currToken[3] + r
              },
              end: {
                line: n.currToken[4],
                column: n.currToken[3] + (a - 1)
              }
            },
            sourceIndex: n.currToken[6] + h[i]
          }) : new c.$$default({
            value: o,
            source: {
              start: {
                line: n.currToken[2],
                column: n.currToken[3] + r
              },
              end: {
                line: n.currToken[4],
                column: n.currToken[3] + (a - 1)
              }
            },
            sourceIndex: n.currToken[6] + h[i]
          });
          n.newNode(l, e);
        });
        this.position++;
      };
      e.prototype.word = function (e) {
        var t = this.nextToken;
        return t && "|" === t[1] ? (this.position++, this.namespace()) : this.splitWord(e);
      };
      e.prototype.loop = function () {
        for (; this.position < this.tokens.length;) this.parse(!0);
        return this.root;
      };
      e.prototype.parse = function (e) {
        switch (this.currToken[0]) {
          case "space":
            this.space();
            break;
          case "comment":
            this.comment();
            break;
          case "(":
            this.parentheses();
            break;
          case ")":
            e && this.missingParenthesis();
            break;
          case "[":
            this.attribute();
            break;
          case "]":
            this.missingSquareBracket();
            break;
          case "at-word":
          case "word":
            this.word();
            break;
          case ":":
            this.pseudo();
            break;
          case ";":
            this.missingBackslash();
            break;
          case ",":
            this.comma();
            break;
          case "*":
            this.universal();
            break;
          case "&":
            this.nesting();
            break;
          case "combinator":
            this.combinator();
            break;
          case "string":
            this.string();
        }
      };
      e.prototype.parseNamespace = function (e) {
        if (this.lossy && "string" == typeof e) {
          var t = e.trim();
          return !t.length || t;
        }
        return e;
      };
      e.prototype.parseSpace = function (e, t) {
        return this.lossy ? t || "" : e;
      };
      e.prototype.parseValue = function (e) {
        return this.lossy && e && "string" == typeof e ? e.trim() : e;
      };
      e.prototype.parseParenthesisToken = function (e) {
        return this.lossy ? "space" === e[0] ? this.parseSpace(e[1], " ") : this.parseValue(e[1]) : e[1];
      };
      e.prototype.newNode = function (e, t) {
        t && (e.namespace = this.parseNamespace(t));
        this.spaces && (e.spaces.before = this.spaces, this.spaces = "");
        return this.current.append(e);
      };
      n(e, [{
        key: "currToken",
        get: function () {
          return this.tokens[this.position];
        }
      }, {
        key: "nextToken",
        get: function () {
          return this.tokens[this.position + 1];
        }
      }, {
        key: "prevToken",
        get: function () {
          return this.tokens[this.position - 1];
        }
      }]);
      return e;
    }();
    e.$$default = v;
    t.exports = e.$$default;
  });
  var eE = o((e, t) => {
    e.__esModule = !0;
    var n;
    var r = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1;
          r.configurable = !0;
          "value" in r && (r.writable = !0);
          Object.defineProperty(e, r.key, r);
        }
      }
      return function (t, n, r) {
        n && e(t.prototype, n);
        r && e(t, r);
        return t;
      };
    }();
    var i = (n = eC()) && n.__esModule ? n : {
      default: n
    };
    var a = function () {
      function e(t) {
        (function (e, t) {
          if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
        })(this, e);
        this.func = t || function () {};
        return this;
      }
      e.prototype.process = function (e) {
        var t = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : {};
        var n = new i.$$default({
          css: e,
          error: function (e) {
            throw Error(e);
          },
          options: t
        });
        this.res = n;
        this.func(n);
        return this;
      };
      r(e, [{
        key: "result",
        get: function () {
          return String(this.res);
        }
      }]);
      return e;
    }();
    e.$$default = a;
    t.exports = e.$$default;
  });
  var ew = o((e, t) => {
    var n = function (e, t) {
      let r = new e.constructor();
      for (let i in e) {
        if (!e.hasOwnProperty(i)) continue;
        let a = e[i];
        let o = typeof a;
        "parent" === i && "object" === o ? t && (r[i] = t) : "source" === i ? r[i] = a : a instanceof Array ? r[i] = a.map(e => n(e, r)) : "before" !== i && "after" !== i && "between" !== i && "semicolon" !== i && ("object" === o && null !== a && (a = n(a)), r[i] = a);
      }
      return r;
    };
    t.exports = class {
      constructor(e) {
        for (let t in e = e || {}, this.raws = {
          before: "",
          after: ""
        }, e) this[t] = e[t];
      }
      remove() {
        this.parent && this.parent.removeChild(this);
        this.parent = void 0;
        return this;
      }
      toString() {
        return [this.raws.before, String(this.value), this.raws.after].join("");
      }
      clone(e) {
        e = e || {};
        let t = n(this);
        for (let n in e) t[n] = e[n];
        return t;
      }
      cloneBefore(e) {
        e = e || {};
        let t = this.clone(e);
        this.parent.insertBefore(this, t);
        return t;
      }
      cloneAfter(e) {
        e = e || {};
        let t = this.clone(e);
        this.parent.insertAfter(this, t);
        return t;
      }
      replaceWith() {
        let e = Array.prototype.slice.call(arguments);
        if (this.parent) {
          for (let t of e) this.parent.insertBefore(this, t);
          this.remove();
        }
        return this;
      }
      moveTo(e) {
        this.cleanRaws(this.root() === e.root());
        this.remove();
        e.append(this);
        return this;
      }
      moveBefore(e) {
        this.cleanRaws(this.root() === e.root());
        this.remove();
        e.parent.insertBefore(e, this);
        return this;
      }
      moveAfter(e) {
        this.cleanRaws(this.root() === e.root());
        this.remove();
        e.parent.insertAfter(e, this);
        return this;
      }
      next() {
        let e = this.parent.index(this);
        return this.parent.nodes[e + 1];
      }
      prev() {
        let e = this.parent.index(this);
        return this.parent.nodes[e - 1];
      }
      toJSON() {
        let e = {};
        for (let t in this) {
          if (!this.hasOwnProperty(t) || "parent" === t) continue;
          let n = this[t];
          n instanceof Array ? e[t] = n.map(e => "object" == typeof e && e.toJSON ? e.toJSON() : e) : "object" == typeof n && n.toJSON ? e[t] = n.toJSON() : e[t] = n;
        }
        return e;
      }
      root() {
        let e = this;
        for (; e.parent;) e = e.parent;
        return e;
      }
      cleanRaws(e) {
        delete this.raws.before;
        delete this.raws.after;
        e || delete this.raws.between;
      }
      positionInside(e) {
        let t = this.toString();
        let n = this.source.start.column;
        let r = this.source.start.line;
        for (let i = 0; i < e; i++) t[i] === `
` ? (n = 1, r += 1) : n += 1;
        return {
          line: r,
          column: n
        };
      }
      positionBy(e) {
        let t = this.source.start;
        if (Object(e).index) t = this.positionInside(e.index);else if (Object(e).word) {
          let n = this.toString().indexOf(e.word);
          -1 !== n && (t = this.positionInside(n));
        }
        return t;
      }
    };
  });
  var eA = o((e, t) => {
    var n = ew();
    var r = class extends n {
      constructor(e) {
        super(e);
        this.nodes || (this.nodes = []);
      }
      push(e) {
        e.parent = this;
        this.nodes.push(e);
        return this;
      }
      each(e) {
        this.lastEach || (this.lastEach = 0);
        this.indexes || (this.indexes = {});
        this.lastEach += 1;
        let t = this.lastEach;
        let n;
        let r;
        if (this.indexes[t] = 0, this.nodes) {
          for (; this.indexes[t] < this.nodes.length && (n = this.indexes[t], !1 !== (r = e(this.nodes[n], n)));) this.indexes[t] += 1;
          delete this.indexes[t];
          return r;
        }
      }
      walk(e) {
        return this.each((t, n) => {
          let r = e(t, n);
          !1 !== r && t.walk && (r = t.walk(e));
          return r;
        });
      }
      walkType(e, t) {
        if (!e || !t) throw Error("Parameters {type} and {callback} are required.");
        let n = "function" == typeof e;
        return this.walk((r, i) => {
          if (n && r instanceof e || !n && r.type === e) return t.call(this, r, i);
        });
      }
      append(e) {
        e.parent = this;
        this.nodes.push(e);
        return this;
      }
      prepend(e) {
        e.parent = this;
        this.nodes.unshift(e);
        return this;
      }
      cleanRaws(e) {
        if (super.cleanRaws(e), this.nodes) for (let t of this.nodes) t.cleanRaws(e);
      }
      insertAfter(e, t) {
        let n = this.index(e);
        let r;
        for (let e in this.nodes.splice(n + 1, 0, t), this.indexes) n <= (r = this.indexes[e]) && (this.indexes[e] = r + this.nodes.length);
        return this;
      }
      insertBefore(e, t) {
        let n = this.index(e);
        let r;
        for (let e in this.nodes.splice(n, 0, t), this.indexes) n <= (r = this.indexes[e]) && (this.indexes[e] = r + this.nodes.length);
        return this;
      }
      removeChild(e) {
        let t;
        for (let n in e = this.index(e), this.nodes[e].parent = void 0, this.nodes.splice(e, 1), this.indexes) (t = this.indexes[n]) >= e && (this.indexes[n] = t - 1);
        return this;
      }
      removeAll() {
        for (let e of this.nodes) e.parent = void 0;
        this.nodes = [];
        return this;
      }
      every(e) {
        return this.nodes.every(e);
      }
      some(e) {
        return this.nodes.some(e);
      }
      index(e) {
        return "number" == typeof e ? e : this.nodes.indexOf(e);
      }
      get first() {
        if (this.nodes) return this.nodes[0];
      }
      get last() {
        if (this.nodes) return this.nodes[this.nodes.length - 1];
      }
      toString() {
        let e = this.nodes.map(String).join("");
        this.value && (e = this.value + e);
        this.raws.before && (e = this.raws.before + e);
        this.raws.after && (e += this.raws.after);
        return e;
      }
    };
    r.registerWalker = e => {
      let t = "walk" + e.name;
      t.lastIndexOf("s") !== t.length - 1 && (t += "s");
      r.prototype[t] || (r.prototype[t] = function (t) {
        return this.walkType(e, t);
      });
    };
    t.exports = r;
  });
  var ek = o((e, t) => {
    var n = eA();
    t.exports = class extends n {
      constructor(e) {
        super(e);
        this.type = "root";
      }
    };
  });
  var eF = o((e, t) => {
    var n = eA();
    t.exports = class extends n {
      constructor(e) {
        super(e);
        this.type = "value";
        this.unbalanced = 0;
      }
    };
  });
  var eP = o((e, t) => {
    var n = eA();
    var r = class extends n {
      constructor(e) {
        super(e);
        this.type = "atword";
      }
      toString() {
        this.quoted && this.raws.quote;
        return [this.raws.before, "@", String.prototype.toString.call(this.value), this.raws.after].join("");
      }
    };
    n.registerWalker(r);
    t.exports = r;
  });
  var eN = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "colon";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eI = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "comma";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eO = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "comment";
        this.inline = Object(e).inline || !1;
      }
      toString() {
        return [this.raws.before, this.inline ? "//" : "/*", String(this.value), this.inline ? "" : "*/", this.raws.after].join("");
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eB = o((e, t) => {
    var n = eA();
    var r = class extends n {
      constructor(e) {
        super(e);
        this.type = "func";
        this.unbalanced = -1;
      }
    };
    n.registerWalker(r);
    t.exports = r;
  });
  var ej = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "number";
        this.unit = Object(e).unit || "";
      }
      toString() {
        return [this.raws.before, String(this.value), this.unit, this.raws.after].join("");
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eM = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "operator";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eL = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "paren";
        this.parenType = "";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eR = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "string";
      }
      toString() {
        let e = this.quoted ? this.raws.quote : "";
        return [this.raws.before, e, this.value + "", e, this.raws.after].join("");
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eJ = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "word";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eq = o((e, t) => {
    var n = eA();
    var r = ew();
    var i = class extends r {
      constructor(e) {
        super(e);
        this.type = "unicode-range";
      }
    };
    n.registerWalker(i);
    t.exports = i;
  });
  var eU = o((e, t) => {
    var n = class extends Error {
      constructor(e) {
        super(e);
        this.name = this.constructor.name;
        this.message = e || "An error ocurred while tokzenizing.";
        "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error(e).stack;
      }
    };
    t.exports = n;
  });
  var ez = o((e, t) => {
    var n = /[ \n\t\r\{\(\)'"\\;,/]/g;
    var r = /[ \n\t\r\(\)\{\}\*:;@!&'"\+\|~>,\[\]\\]|\/(?=\*)/g;
    var i = /[ \n\t\r\(\)\{\}\*:;@!&'"\-\+\|~>,\[\]\\]|\//g;
    var a = /^[a-z0-9]/i;
    var o = /^[a-f0-9?\-]/i;
    var s = eU();
    t.exports = function (e, t) {
      t = t || {};
      let _ = [];
      let l = e.valueOf();
      let u = l.length;
      let c = -1;
      let p = 1;
      let d = 0;
      let m = 0;
      let f = null;
      let h;
      let y;
      let g;
      let b;
      let D;
      let x;
      let v;
      let T;
      let S;
      let C;
      let E;
      let w;
      function A(e) {
        throw new s(`Unclosed ${e} at line: ${p}, column: ${d - c}, token: ${d}`);
      }
      for (; d < u;) {
        switch (10 === (h = l.charCodeAt(d)) && (c = d, p += 1), h) {
          case 10:
          case 32:
          case 9:
          case 13:
          case 12:
            y = d;
            do {
              y += 1;
              10 === (h = l.charCodeAt(y)) && (c = y, p += 1);
            } while (32 === h || 10 === h || 9 === h || 13 === h || 12 === h);
            _.push(["space", l.slice(d, y), p, d - c, p, y - c, d]);
            d = y - 1;
            break;
          case 58:
            y = d + 1;
            _.push(["colon", l.slice(d, y), p, d - c, p, y - c, d]);
            d = y - 1;
            break;
          case 44:
            y = d + 1;
            _.push(["comma", l.slice(d, y), p, d - c, p, y - c, d]);
            d = y - 1;
            break;
          case 123:
            _.push(["{", "{", p, d - c, p, y - c, d]);
            break;
          case 125:
            _.push(["}", "}", p, d - c, p, y - c, d]);
            break;
          case 40:
            m++;
            f = !f && 1 === m && _.length > 0 && "word" === _[_.length - 1][0] && "url" === _[_.length - 1][1];
            _.push(["(", "(", p, d - c, p, y - c, d]);
            break;
          case 41:
            m--;
            f = f && m > 0;
            _.push([")", ")", p, d - c, p, y - c, d]);
            break;
          case 39:
          case 34:
            g = 39 === h ? "'" : '"';
            y = d;
            do for (C = !1, -1 === (y = l.indexOf(g, y + 1)) && A("quote", g), E = y; 92 === l.charCodeAt(E - 1);) {
              E -= 1;
              C = !C;
            } while (C);
            _.push(["string", l.slice(d, y + 1), p, d - c, p, y - c, d]);
            d = y;
            break;
          case 64:
            n.lastIndex = d + 1;
            n.test(l);
            y = 0 === n.lastIndex ? l.length - 1 : n.lastIndex - 2;
            _.push(["atword", l.slice(d, y + 1), p, d - c, p, y - c, d]);
            d = y;
            break;
          case 92:
            y = d;
            h = l.charCodeAt(y + 1);
            v && 47 !== h && 32 !== h && 10 !== h && 9 !== h && 13 !== h && 12 !== h && (y += 1);
            _.push(["word", l.slice(d, y + 1), p, d - c, p, y - c, d]);
            d = y;
            break;
          case 43:
          case 45:
          case 42:
            if (y = d + 1, w = l.slice(d + 1, y + 1), l.slice(d - 1, d), 45 === h && 45 === w.charCodeAt(0)) {
              y++;
              _.push(["word", l.slice(d, y), p, d - c, p, y - c, d]);
              d = y - 1;
              break;
            }
            _.push(["operator", l.slice(d, y), p, d - c, p, y - c, d]);
            d = y - 1;
            break;
          default:
            if (47 === h && (42 === l.charCodeAt(d + 1) || t.loose && !f && 47 === l.charCodeAt(d + 1))) {
              if (42 === l.charCodeAt(d + 1)) 0 === (y = l.indexOf("*/", d + 2) + 1) && A("comment", "*/");else {
                let e = l.indexOf(`
`, d + 2);
                y = -1 !== e ? e - 1 : u;
              }
              (D = (b = (x = l.slice(d, y + 1)).split(`
`)).length - 1) > 0 ? (T = p + D, S = y - b[D].length) : (T = p, S = c);
              _.push(["comment", x, p, d - c, T, y - S, d]);
              c = S;
              p = T;
              d = y;
            } else if (35 !== h || a.test(l.slice(d + 1, d + 2))) {
              if ((117 === h || 85 === h) && 43 === l.charCodeAt(d + 1)) {
                y = d + 2;
                do {
                  y += 1;
                  h = l.charCodeAt(y);
                } while (y < u && o.test(l.slice(y, y + 1)));
                _.push(["unicoderange", l.slice(d, y), p, d - c, p, y - c, d]);
                d = y - 1;
              } else if (47 === h) {
                y = d + 1;
                _.push(["operator", l.slice(d, y), p, d - c, p, y - c, d]);
                d = y - 1;
              } else {
                let e = r;
                if (h >= 48 && h <= 57 && (e = i), e.lastIndex = d + 1, e.test(l), y = 0 === e.lastIndex ? l.length - 1 : e.lastIndex - 2, e === i || 46 === h) {
                  let e = l.charCodeAt(y);
                  let t = l.charCodeAt(y + 1);
                  let n = l.charCodeAt(y + 2);
                  (101 === e || 69 === e) && (45 === t || 43 === t) && n >= 48 && n <= 57 && (i.lastIndex = y + 2, i.test(l), y = 0 === i.lastIndex ? l.length - 1 : i.lastIndex - 2);
                }
                _.push(["word", l.slice(d, y + 1), p, d - c, p, y - c, d]);
                d = y;
              }
            } else {
              y = d + 1;
              _.push(["#", l.slice(d, y), p, d - c, p, y - c, d]);
              d = y - 1;
            }
        }
        d++;
      }
      return _;
    };
  });
  var eK = o((e, t) => {
    var n = class extends Error {
      constructor(e) {
        super(e);
        this.name = this.constructor.name;
        this.message = e || "An error ocurred while parsing.";
        "function" == typeof Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error(e).stack;
      }
    };
    t.exports = n;
  });
  var eW = o((e, t) => {
    var n = ek();
    var r = eF();
    var i = eP();
    var a = eN();
    var o = eI();
    var s = eO();
    var _ = eB();
    var l = ej();
    var u = eM();
    var c = eL();
    var p = eR();
    var d = eJ();
    var m = eq();
    var f = ez();
    var h = ei();
    var y = ea();
    var g = eo();
    var b = eK();
    t.exports = class {
      constructor(e, t) {
        this.cache = [];
        this.input = e;
        this.options = Object.assign({}, {
          loose: !1
        }, t);
        this.position = 0;
        this.unbalanced = 0;
        this.root = new n();
        let i = new r();
        this.root.append(i);
        this.current = i;
        this.tokens = f(e, this.options);
      }
      parse() {
        return this.loop();
      }
      colon() {
        let e = this.currToken;
        this.newNode(new a({
          value: e[1],
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6]
        }));
        this.position++;
      }
      comma() {
        let e = this.currToken;
        this.newNode(new o({
          value: e[1],
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6]
        }));
        this.position++;
      }
      comment() {
        let e = !1;
        let t = this.currToken[1].replace(/\/\*|\*\//g, "");
        let n;
        this.options.loose && t.startsWith("//") && (t = t.substring(2), e = !0);
        n = new s({
          value: t,
          inline: e,
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[4],
              column: this.currToken[5]
            }
          },
          sourceIndex: this.currToken[6]
        });
        this.newNode(n);
        this.position++;
      }
      error(e, t) {
        throw new b(e + ` at line: ${t[2]}, column ${t[3]}`);
      }
      loop() {
        for (; this.position < this.tokens.length;) this.parseTokens();
        !this.current.last && this.spaces ? this.current.raws.before += this.spaces : this.spaces && (this.current.last.raws.after += this.spaces);
        this.spaces = "";
        return this.root;
      }
      operator() {
        let e = this.currToken[1];
        let t;
        if ("+" === e || "-" === e) {
          if (this.options.loose || this.position > 0 && ("func" === this.current.type && "calc" === this.current.value ? "space" !== this.prevToken[0] && "(" !== this.prevToken[0] ? this.error("Syntax Error", this.currToken) : "space" !== this.nextToken[0] && "word" !== this.nextToken[0] ? this.error("Syntax Error", this.currToken) : "word" === this.nextToken[0] && "operator" !== this.current.last.type && "(" !== this.current.last.value && this.error("Syntax Error", this.currToken) : ("space" === this.nextToken[0] || "operator" === this.nextToken[0] || "operator" === this.prevToken[0]) && this.error("Syntax Error", this.currToken)), this.options.loose) {
            if ((!this.current.nodes.length || this.current.last && "operator" === this.current.last.type) && "word" === this.nextToken[0]) return this.word();
          } else if ("word" === this.nextToken[0]) return this.word();
        }
        t = new u({
          value: this.currToken[1],
          source: {
            start: {
              line: this.currToken[2],
              column: this.currToken[3]
            },
            end: {
              line: this.currToken[2],
              column: this.currToken[3]
            }
          },
          sourceIndex: this.currToken[4]
        });
        this.position++;
        return this.newNode(t);
      }
      parseTokens() {
        switch (this.currToken[0]) {
          case "space":
            this.space();
            break;
          case "colon":
            this.colon();
            break;
          case "comma":
            this.comma();
            break;
          case "comment":
            this.comment();
            break;
          case "(":
            this.parenOpen();
            break;
          case ")":
            this.parenClose();
            break;
          case "atword":
          case "word":
          default:
            this.word();
            break;
          case "operator":
            this.operator();
            break;
          case "string":
            this.string();
            break;
          case "unicoderange":
            this.unicodeRange();
        }
      }
      parenOpen() {
        let e = 1;
        let t = this.position + 1;
        let n = this.currToken;
        let r;
        for (; t < this.tokens.length && e;) {
          let n = this.tokens[t];
          "(" === n[0] && e++;
          ")" === n[0] && e--;
          t++;
        }
        if (e && this.error("Expected closing parenthesis", n), (r = this.current.last) && "func" === r.type && r.unbalanced < 0 && (r.unbalanced = 0, this.current = r), this.current.unbalanced++, this.newNode(new c({
          value: n[1],
          source: {
            start: {
              line: n[2],
              column: n[3]
            },
            end: {
              line: n[4],
              column: n[5]
            }
          },
          sourceIndex: n[6]
        })), this.position++, "func" === this.current.type && this.current.unbalanced && "url" === this.current.value && "string" !== this.currToken[0] && ")" !== this.currToken[0] && !this.options.loose) {
          let e = this.nextToken;
          let t = this.currToken[1];
          let n = {
            line: this.currToken[2],
            column: this.currToken[3]
          };
          for (; e && ")" !== e[0] && this.current.unbalanced;) {
            this.position++;
            t += this.currToken[1];
            e = this.nextToken;
          }
          this.position !== this.tokens.length - 1 && (this.position++, this.newNode(new d({
            value: t,
            source: {
              start: n,
              end: {
                line: this.currToken[4],
                column: this.currToken[5]
              }
            },
            sourceIndex: this.currToken[6]
          })));
        }
      }
      parenClose() {
        let e = this.currToken;
        this.newNode(new c({
          value: e[1],
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6]
        }));
        this.position++;
        this.position >= this.tokens.length - 1 && !this.current.unbalanced || (this.current.unbalanced--, this.current.unbalanced < 0 && this.error("Expected opening parenthesis", e), !this.current.unbalanced && this.cache.length && (this.current = this.cache.pop()));
      }
      space() {
        let e = this.currToken;
        this.position === this.tokens.length - 1 || "," === this.nextToken[0] || ")" === this.nextToken[0] ? this.current.last.raws.after += e[1] : this.spaces = e[1];
        this.position++;
      }
      unicodeRange() {
        let e = this.currToken;
        this.newNode(new m({
          value: e[1],
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6]
        }));
        this.position++;
      }
      splitWord() {
        let e = this.nextToken;
        let t = this.currToken[1];
        let n = /^[\+\-]?((\d+(\.\d*)?)|(\.\d+))([eE][\+\-]?\d+)?/;
        let r;
        let a;
        if (!/^(?!\#([a-z0-9]+))[\#\{\}]/gi.test(t)) for (; e && "word" === e[0];) {
          this.position++;
          let n = this.currToken[1];
          t += n;
          e = this.nextToken;
        }
        (a = g(h([[0], r = y(t, "@")])).sort((e, t) => e - t)).forEach((o, s) => {
          let u = a[s + 1] || t.length;
          let c = t.slice(o, u);
          let p;
          if (~r.indexOf(o)) p = new i({
            value: c.slice(1),
            source: {
              start: {
                line: this.currToken[2],
                column: this.currToken[3] + o
              },
              end: {
                line: this.currToken[4],
                column: this.currToken[3] + (u - 1)
              }
            },
            sourceIndex: this.currToken[6] + a[s]
          });else if (n.test(this.currToken[1])) {
            let e = c.replace(n, "");
            p = new l({
              value: c.replace(e, ""),
              source: {
                start: {
                  line: this.currToken[2],
                  column: this.currToken[3] + o
                },
                end: {
                  line: this.currToken[4],
                  column: this.currToken[3] + (u - 1)
                }
              },
              sourceIndex: this.currToken[6] + a[s],
              unit: e
            });
          } else "word" === (p = new (e && "(" === e[0] ? _ : d)({
            value: c,
            source: {
              start: {
                line: this.currToken[2],
                column: this.currToken[3] + o
              },
              end: {
                line: this.currToken[4],
                column: this.currToken[3] + (u - 1)
              }
            },
            sourceIndex: this.currToken[6] + a[s]
          })).type ? (p.isHex = /^#(.+)/.test(c), p.isColor = /^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(c)) : this.cache.push(this.current);
          this.newNode(p);
        });
        this.position++;
      }
      string() {
        let e = this.currToken;
        let t = this.currToken[1];
        let n = /^(\"|\')/;
        let r = n.test(t);
        let i = "";
        let a;
        r && (i = t.match(n)[0], t = t.slice(1, t.length - 1));
        (a = new p({
          value: t,
          source: {
            start: {
              line: e[2],
              column: e[3]
            },
            end: {
              line: e[4],
              column: e[5]
            }
          },
          sourceIndex: e[6],
          quoted: r
        })).raws.quote = i;
        this.newNode(a);
        this.position++;
      }
      word() {
        return this.splitWord();
      }
      newNode(e) {
        this.spaces && (e.raws.before += this.spaces, this.spaces = "");
        return this.current.append(e);
      }
      get currToken() {
        return this.tokens[this.position];
      }
      get nextToken() {
        return this.tokens[this.position + 1];
      }
      get prevToken() {
        return this.tokens[this.position - 1];
      }
    };
  });
  var eV = {};
  s(eV, {
    languages: () => nD,
    options: () => nx,
    parsers: () => nv,
    printers: () => nV
  });
  var e$ = (e, t, n, r) => {
    if (!(e && null == t)) return t.replaceAll ? t.replaceAll(n, r) : n.global ? t.replace(n, r) : t.split(n).join(r);
  };
  var eH = "string";
  var eG = "array";
  var eX = "cursor";
  var eY = "indent";
  var eQ = "align";
  var eZ = "trim";
  var e0 = "group";
  var e1 = "fill";
  var e2 = "if-break";
  var e3 = "indent-if-break";
  var e6 = "line-suffix";
  var e4 = "line-suffix-boundary";
  var e8 = "line";
  var e5 = "label";
  var e7 = "break-parent";
  var e9 = new Set([eX, eY, eQ, eZ, e0, e1, e2, e3, e6, e4, e8, e5, e7]);
  var te = function (e) {
    if ("string" == typeof e) return eH;
    if (Array.isArray(e)) return eG;
    if (!e) return;
    let {
      type
    } = e;
    if (e9.has(type)) return type;
  };
  var tt = e => new Intl.ListFormat("en-US", {
    type: "disjunction"
  }).format(e);
  var tn = class extends Error {
    name = "InvalidDocError";
    constructor(e) {
      super(function (e) {
        let t = null === e ? "null" : typeof e;
        if ("string" !== t && "object" !== t) return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
        if (te(e)) throw Error("doc is valid.");
        let n = Object.prototype.toString.call(e);
        if ("[object Object]" !== n) return `Unexpected doc '${n}'.`;
        let r = tt([...e9].map(e => `'${e}'`));
        return `Unexpected doc.type '${e.type}'.
Expected it to be ${r}.`;
      }(e));
      this.doc = e;
    }
  };
  var tr = () => {};
  function ti(e) {
    tr(e);
    return {
      type: eY,
      contents: e
    };
  }
  function ta(e, t) {
    tr(t);
    return {
      type: eQ,
      contents: t,
      n: e
    };
  }
  function to(e, t = {}) {
    tr(e);
    tr(t.expandedStates, !0);
    return {
      type: e0,
      id: t.id,
      contents: e,
      break: !!t.shouldBreak,
      expandedStates: t.expandedStates
    };
  }
  function ts(e) {
    tr(e);
    return {
      type: e1,
      parts: e
    };
  }
  function t_(e, t = "", n = {}) {
    tr(e);
    "" !== t && tr(t);
    return {
      type: e2,
      breakContents: e,
      flatContents: t,
      groupId: n.groupId
    };
  }
  var tl = {
    type: e7
  };
  var tu = {
    type: e8
  };
  var tc = {
    type: e8,
    soft: !0
  };
  var tp = [{
    type: e8,
    hard: !0
  }, tl];
  function td(e, t) {
    tr(e);
    tr(t);
    let n = [];
    for (let r = 0; r < t.length; r++) {
      0 !== r && n.push(e);
      n.push(t[r]);
    }
    return n;
  }
  var tm = (e, t, n) => {
    if (!(e && null == t)) return Array.isArray(t) || "string" == typeof t ? t[n < 0 ? t.length + n : n] : t.at(n);
  };
  var tf = e => {
    if (Array.isArray(e)) return e;
    if (e.type !== e1) throw Error(`Expect doc to be 'array' or '${e1}'.`);
    return e.parts;
  };
  function th(e) {
    return e.type !== e8 || e.hard ? e.type === e2 ? e.flatContents : e : e.soft ? "" : " ";
  }
  var ty = function (e) {
    return Array.isArray(e) && e.length > 0;
  };
  var tg = function (e, t) {
    let n = !0 === t || "'" === t ? "'" : '"';
    let r = "'" === n ? '"' : "'";
    let i = 0;
    let a = 0;
    for (let t of e) t === n ? i++ : t === r && a++;
    return i > a ? r : n;
  };
  var tb = function (e, t, n) {
    let r = '"' === t ? "'" : '"';
    let i = e$(!1, e, /\\(.)|(["'])/gs, (e, i, a) => i === r ? i : a === t ? "\\" + a : a || (n && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i) ? i : "\\" + i));
    return t + i + t;
  };
  var tD = function (e, t) {
    let n = e.slice(1, -1);
    let r = "json" !== t.parser && "jsonc" !== t.parser && ("json5" !== t.parser || "preserve" !== t.quoteProps || t.singleQuote) ? t.__isInHtmlAttribute ? "'" : tg(n, t.singleQuote) : '"';
    return tb(n, r, !("css" === t.parser || "less" === t.parser || "scss" === t.parser || t.__embeddedInHtml));
  };
  var tx = class extends Error {
    name = "UnexpectedNodeError";
    constructor(e, t, n = "type") {
      super(`Unexpected ${t} node ${n}: ${JSON.stringify(e[n])}.`);
      this.node = e;
    }
  };
  var tv = function (e) {
    return e?.type === "front-matter";
  };
  var tT = new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma", "spaces"]);
  function tS(e, t, n) {
    if (tv(e) && "yaml" === e.lang && delete t.value, "css-comment" === e.type && "css-root" === n.type && n.nodes.length > 0 && ((n.nodes[0] === e || tv(n.nodes[0]) && n.nodes[1] === e) && (delete t.text, /^\*\s*@(?:format|prettier)\s*$/.test(e.text)) || "css-root" === n.type && tm(!1, n.nodes, -1) === e)) return null;
    if ("value-root" === e.type && delete t.text, ("media-query" === e.type || "media-query-list" === e.type || "media-feature-expression" === e.type) && delete t.value, "css-rule" === e.type && delete t.params, "selector-combinator" === e.type && (t.value = e$(!1, t.value, /\s+/g, " ")), "media-feature" === e.type && (t.value = e$(!1, t.value, " ", "")), ("value-word" === e.type && (e.isColor && e.isHex || ["initial", "inherit", "unset", "revert"].includes(t.value.toLowerCase())) || "media-feature" === e.type || "selector-root-invalid" === e.type || "selector-pseudo" === e.type) && (t.value = t.value.toLowerCase()), "css-decl" === e.type && (t.prop = t.prop.toLowerCase()), ("css-atrule" === e.type || "css-import" === e.type) && (t.name = t.name.toLowerCase()), "value-number" === e.type && (t.unit = t.unit.toLowerCase()), "value-unknown" === e.type && (t.value = e$(!1, t.value, /;$/g, "")), ("media-feature" === e.type || "media-keyword" === e.type || "media-type" === e.type || "media-unknown" === e.type || "media-url" === e.type || "media-value" === e.type || "selector-attribute" === e.type || "selector-string" === e.type || "selector-class" === e.type || "selector-combinator" === e.type || "value-string" === e.type) && t.value && (t.value = e$(!1, e$(!1, t.value, "'", '"'), /\\([^\da-f])/gi, "$1")), "selector-attribute" === e.type && (t.attribute = t.attribute.trim(), t.namespace && "string" == typeof t.namespace && (t.namespace = t.namespace.trim(), 0 === t.namespace.length && (t.namespace = !0)), t.value && (t.value = e$(!1, t.value.trim(), /^["']|["']$/g, ""), delete t.quoted)), ("media-value" === e.type || "media-type" === e.type || "value-number" === e.type || "selector-root-invalid" === e.type || "selector-class" === e.type || "selector-combinator" === e.type || "selector-tag" === e.type) && t.value && (t.value = e$(!1, t.value, /([\d+.e-]+)([a-z]*)/gi, (e, t, n) => {
      let r = Number(t);
      return Number.isNaN(r) ? e : r + n.toLowerCase();
    })), "selector-tag" === e.type) {
      let n = e.value.toLowerCase();
      ["from", "to"].includes(n) && (t.value = n);
    }
    if ("css-atrule" === e.type && "supports" === e.name.toLowerCase() && delete t.value, "selector-unknown" === e.type && delete t.value, "value-comma_group" === e.type) {
      let n = e.groups.findIndex(e => "value-number" === e.type && "..." === e.unit);
      -1 !== n && (t.groups[n].unit = "", t.groups.splice(n + 1, 0, {
        type: "value-word",
        value: "...",
        isColor: !1,
        isHex: !1
      }));
    }
    if ("value-comma_group" === e.type && e.groups.some(e => "value-atword" === e.type && e.value.endsWith("[") || "value-word" === e.type && e.value.startsWith("]"))) return {
      type: "value-atword",
      value: e.groups.map(e => e.value).join(""),
      group: {
        open: null,
        close: null,
        groups: [],
        type: "value-paren_group"
      }
    };
  }
  async function tC(e, t) {
    if ("yaml" === e.lang) {
      let n = e.value.trim();
      let r = n ? await t(n, {
        parser: "yaml"
      }) : "";
      return ta({
        type: "root"
      }, [e.startDelimiter, tp, r, r ? tp : "", e.endDelimiter]);
    }
  }
  function tE(e) {
    let {
      node
    } = e;
    if ("front-matter" === node.type) return async e => {
      let n = await tC(node, e);
      return n ? [n, tp] : void 0;
    };
  }
  tS.ignoredProperties = tT;
  tE.getVisitorKeys = e => "css-root" === e.type ? ["frontMatter"] : [];
  var tw = null;
  function tA(e) {
    if (null !== tw && (tw.property, 1)) {
      let e = tw;
      tw = tA.prototype = null;
      return e;
    }
    tw = tA.prototype = e ?? Object.create(null);
    return new tA();
  }
  for (let e = 0; e <= 10; e++) tA();
  var tk = function (e, t = "type") {
    tA(e);
    return function (n) {
      let r = n[t];
      let i = e[r];
      if (!Array.isArray(i)) throw Object.assign(Error(`Missing visitor keys for '${r}'.`), {
        node: n
      });
      return i;
    };
  }({
    "front-matter": [],
    "css-root": ["frontMatter", "nodes"],
    "css-comment": [],
    "css-rule": ["selector", "nodes"],
    "css-decl": ["value", "selector", "nodes"],
    "css-atrule": ["selector", "params", "value", "nodes"],
    "media-query-list": ["nodes"],
    "media-query": ["nodes"],
    "media-type": [],
    "media-feature-expression": ["nodes"],
    "media-feature": [],
    "media-colon": [],
    "media-value": [],
    "media-keyword": [],
    "media-url": [],
    "media-unknown": [],
    "selector-root": ["nodes"],
    "selector-selector": ["nodes"],
    "selector-comment": [],
    "selector-string": [],
    "selector-tag": [],
    "selector-id": [],
    "selector-class": [],
    "selector-attribute": [],
    "selector-combinator": ["nodes"],
    "selector-universal": [],
    "selector-pseudo": ["nodes"],
    "selector-nesting": [],
    "selector-unknown": [],
    "value-value": ["group"],
    "value-root": ["group"],
    "value-comment": [],
    "value-comma_group": ["groups"],
    "value-paren_group": ["open", "groups", "close"],
    "value-func": ["group"],
    "value-paren": [],
    "value-number": [],
    "value-operator": [],
    "value-word": [],
    "value-colon": [],
    "value-comma": [],
    "value-string": [],
    "value-atword": [],
    "value-unicode-range": [],
    "value-unknown": []
  });
  var tF = function (e, t) {
    let n = 0;
    for (let r = 0; r < e.line - 1; ++r) n = t.indexOf(`
`, n) + 1;
    return n + e.column;
  };
  function tP(e) {
    return (t, n, r) => {
      let i = !!(null != r && r.backwards);
      if (!1 === n) return !1;
      let {
        length
      } = t;
      let o = n;
      for (; o >= 0 && o < length;) {
        let n = t.charAt(o);
        if (e instanceof RegExp) {
          if (!e.test(n)) return o;
        } else if (!e.includes(n)) return o;
        i ? o-- : o++;
      }
      return (-1 === o || o === length) && o;
    };
  }
  tP(/\s/);
  var tN = tP(" 	");
  var tI = tP(",; 	");
  var tO = tP(/[^\n\r]/);
  function tB(e, t) {
    var n;
    var r;
    var i;
    if ("number" == typeof (null == (r = null == (n = e.source) ? void 0 : n.start) ? void 0 : r.offset)) return e.source.start.offset;
    if ("number" == typeof e.sourceIndex) return e.sourceIndex;
    if (null != (i = e.source) && i.start) return tF(e.source.start, t);
    throw Object.assign(Error("Can not locate node."), {
      node: e
    });
  }
  function tj(e, t) {
    var n;
    var r;
    if ("css-comment" === e.type && e.inline) return tO(t, e.source.startOffset);
    if ("number" == typeof (null == (r = null == (n = e.source) ? void 0 : n.end) ? void 0 : r.offset)) return e.source.end.offset;
    if (e.source) {
      if (e.source.end) return tF(e.source.end, t);
      if (ty(e.nodes)) return tj(tm(!1, e.nodes, -1), t);
    }
    return null;
  }
  function tM(e) {
    var t;
    return null == (t = e.source) ? void 0 : t.startOffset;
  }
  function tL(e) {
    var t;
    return null == (t = e.source) ? void 0 : t.endOffset;
  }
  var tR = l(u(), 1);
  var tJ = function (e) {
    if (!e.startsWith("#!")) return "";
    let t = e.indexOf(`
`);
    return -1 === t ? e : e.slice(0, t);
  };
  function tq(e) {
    let t = tJ(e);
    t && (e = e.slice(t.length + 1));
    let n = tR.extract(e);
    let {
      pragmas,
      comments
    } = tR.parseWithComments(n);
    return {
      shebang: t,
      text: e,
      pragmas,
      comments
    };
  }
  var tU = RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
  var tz = function (e) {
    let t = e.match(tU);
    if (!t) return {
      content: e
    };
    let {
      startDelimiter,
      language,
      value = "",
      endDelimiter
    } = t.groups;
    let o = language.trim() || "yaml";
    if ("+++" === startDelimiter && (o = "toml"), "yaml" !== o && startDelimiter !== endDelimiter) return {
      content: e
    };
    let [s] = t;
    return {
      frontMatter: {
        type: "front-matter",
        lang: o,
        value,
        startDelimiter,
        endDelimiter,
        raw: s.replace(/\n$/, "")
      },
      content: e$(!1, s, /[^\n]/g, " ") + e.slice(s.length)
    };
  };
  var tK = new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
  var tW = new Set(["initial", "inherit", "unset", "revert"]);
  function tV(e) {
    return e.includes("$") || e.includes("@") || e.includes("#") || e.startsWith("%") || e.startsWith("--") || e.startsWith(":--") || e.includes("(") && e.includes(")") ? e : e.toLowerCase();
  }
  function t$(e, t) {
    var n;
    let r = e.findAncestor(e => "value-func" === e.type);
    return (null == (n = r?.value) ? void 0 : n.toLowerCase()) === t;
  }
  function tH(e, t) {
    let n = Array.isArray(t) ? t : [t];
    let r = e.findAncestor(e => "css-atrule" === e.type);
    return r && n.includes(r.name.toLowerCase());
  }
  function tG(e, t) {
    var n;
    let r = null == (n = e.parent) ? void 0 : n.nodes;
    return r && r.indexOf(t) === r.length - 1;
  }
  function tX(e) {
    return "value-operator" === e.type && "*" === e.value;
  }
  function tY(e) {
    return "value-operator" === e.type && "/" === e.value;
  }
  function tQ(e) {
    return "value-operator" === e.type && "+" === e.value;
  }
  function tZ(e) {
    return "value-operator" === e.type && "-" === e.value;
  }
  function t0(e) {
    return tX(e) || tY(e) || tQ(e) || tZ(e) || "value-operator" === e.type && "%" === e.value;
  }
  function t1(e, t) {
    return "scss" === t.parser && "css-atrule" === e.type && ["if", "else", "for", "each", "while"].includes(e.name);
  }
  function t2(e) {
    var t;
    return (null == (t = e.raws) ? void 0 : t.params) && /^\(\s*\)$/.test(e.raws.params);
  }
  function t3(e) {
    return e.name.startsWith("prettier-placeholder");
  }
  function t6(e) {
    var t;
    return (null == (t = e.raws) ? void 0 : t.before) === "";
  }
  function t4(e) {
    var t;
    var n;
    return "value-comma_group" === e.type && (null == (n = null == (t = e.groups) ? void 0 : t[1]) ? void 0 : n.type) === "value-colon";
  }
  function t8(e) {
    var t;
    return "value-paren_group" === e.type && (null == (t = e.groups) ? void 0 : t[0]) && t4(e.groups[0]);
  }
  function t5(e, t) {
    var n;
    if ("scss" !== t.parser) return !1;
    let {
      node
    } = e;
    if (0 === node.groups.length) return !1;
    let i = e.grandparent;
    if (!t8(node) && !(i && t8(i))) return !1;
    let a = e.findAncestor(e => "css-decl" === e.type);
    return !!(null != (n = a?.prop) && n.startsWith("$") || t8(i) || "value-func" === i.type);
  }
  function t7(e) {
    return "value-comment" === e.type && e.inline;
  }
  function t9(e) {
    return "value-word" === e.type && "#" === e.value;
  }
  function ne(e) {
    return "value-word" === e.type && "{" === e.value;
  }
  function nt(e) {
    return "value-word" === e.type && "}" === e.value;
  }
  function nn(e) {
    return ["value-word", "value-atword"].includes(e.type);
  }
  function nr(e) {
    return e?.type === "value-colon";
  }
  function ni(e) {
    return /\/\//.test(e.split(/[\n\r]/).pop());
  }
  function na(e) {
    return e?.type === "value-atword" && e.value.startsWith("prettier-placeholder-");
  }
  function no(e) {
    var t;
    var n;
    return "value-paren_group" === e.type && (null == (t = e.open) ? void 0 : t.value) === "(" && (null == (n = e.close) ? void 0 : n.value) === ")";
  }
  var ns = function (e, t, n) {
    var r;
    var i;
    var a;
    var o;
    let {
      node
    } = e;
    let _ = e.parent;
    let l = e.grandparent;
    let u = null == (a = null == (i = e.findAncestor(e => "css-decl" === e.type)) ? void 0 : i.prop) ? void 0 : a.toLowerCase();
    let c = u && "value-value" === _.type && ("grid" === u || u.startsWith("grid-template"));
    let p = e.findAncestor(e => "css-atrule" === e.type);
    let d = p && t1(p, t);
    let m = node.groups.some(e => t7(e));
    let f = e.map(n, "groups");
    let h = [];
    let y = t$(e, "url");
    let g = !1;
    let b = !1;
    for (let n = 0; n < node.groups.length; ++n) {
      h.push(f[n]);
      let i = node.groups[n - 1];
      let a = node.groups[n];
      let u = node.groups[n + 1];
      let m = node.groups[n + 2];
      if (y) {
        (u && tQ(u) || tQ(a)) && h.push(" ");
        continue;
      }
      if (tH(e, "forward") && "value-word" === a.type && a.value && void 0 !== i && "value-word" === i.type && "as" === i.value && "value-operator" === u.type && "*" === u.value || !u || "value-word" === a.type && a.value.endsWith("-") && na(u)) continue;
      if ("value-string" === a.type && a.quoted) {
        let e = a.value.lastIndexOf("#{");
        let t = a.value.lastIndexOf("}");
        -1 !== e && -1 !== t ? g = e > t : -1 !== e ? g = !0 : -1 !== t && (g = !1);
      }
      if (g || nr(a) || nr(u) || "value-atword" === a.type && ("" === a.value || a.value.endsWith("[")) || "value-word" === u.type && u.value.startsWith("]") || "~" === a.value || "value-string" !== a.type && a.value && a.value.includes("\\") && u && "value-comment" !== u.type || null != i && i.value && i.value.indexOf("\\") === i.value.length - 1 && "value-operator" === a.type && "/" === a.value || "\\" === a.value || "$$" === a.value && "value-func" === a.type && u?.type === "value-word" && !u.raws.before || t9(a) || ne(a) || nt(u) || ne(u) && t6(u) || nt(a) && t6(u) || "--" === a.value && t9(u)) continue;
      let D = t0(a);
      let x = t0(u);
      if ((D && t9(u) || x && nt(a)) && t6(u) || !i && tY(a) || t$(e, "calc") && (tQ(a) || tQ(u) || tZ(a) || tZ(u)) && t6(u)) continue;
      let v = (tQ(a) || tZ(a)) && 0 === n && ("value-number" === u.type || u.isHex) && l && "value-func" === (o = l).type && tK.has(o.value.toLowerCase()) && !t6(u);
      let T = m?.type === "value-func" || m && nn(m) || "value-func" === a.type || nn(a);
      let S = "value-func" === u.type || nn(u) || i?.type === "value-func" || i && nn(i);
      if ("scss" === t.parser && D && "-" === a.value && "value-func" === u.type && tL(a) !== tM(u)) {
        h.push(" ");
        continue;
      }
      if (!(!(tX(u) || tX(a)) && !t$(e, "calc") && !v && (tY(u) && !T || tY(a) && !S || tQ(u) && !T || tQ(a) && !S || tZ(u) || tZ(a)) && (t6(u) || D && (!i || i && t0(i)))) && !(("scss" === t.parser || "less" === t.parser) && D && "-" === a.value && no(u) && tL(a) === tM(u.open) && "(" === u.open.value)) {
        if (t7(a)) {
          if ("value-paren_group" === _.type) {
            h.push(ta(-1, tp));
            continue;
          }
          h.push(tp);
          continue;
        }
        if (d && ("value-word" === u.type && ["==", "!="].includes(u.value) || "value-word" === u.type && ["<", ">", "<=", ">="].includes(u.value) || "value-word" === u.type && ["and", "or", "not"].includes(u.value) || "value-word" === a.type && "in" === a.value || "value-word" === a.type && ["from", "through", "end"].includes(a.value)) || p && "namespace" === p.name.toLowerCase()) {
          h.push(" ");
          continue;
        }
        if (c) {
          a.source && u.source && a.source.start.line !== u.source.start.line ? (h.push(tp), b = !0) : h.push(" ");
          continue;
        }
        if (x) {
          h.push(" ");
          continue;
        }
        if (u?.value !== "..." && !(na(a) && na(u) && tL(a) === tM(u))) {
          if (na(a) && no(u) && tL(a) === tM(u.open)) {
            h.push(tc);
            continue;
          }
          if ("with" === a.value && no(u)) {
            h.push(" ");
            continue;
          }
          null != (r = a.value) && r.endsWith("#") && "{" === u.value && no(u.group) || h.push(tu);
        }
      }
    }
    m && h.push(tl);
    b && h.unshift(tp);
    return d ? to(ti(h)) : !function (e) {
      var t;
      let {
        node
      } = e;
      return "url" === node.groups[0].value && 2 === node.groups.length && (null == (t = e.findAncestor(e => "css-atrule" === e.type)) ? void 0 : t.name) === "import";
    }(e) ? to(ti(ts(h))) : to(ts(h));
  };
  var n_ = new Map([["em", "em"], ["rem", "rem"], ["ex", "ex"], ["rex", "rex"], ["cap", "cap"], ["rcap", "rcap"], ["ch", "ch"], ["rch", "rch"], ["ic", "ic"], ["ric", "ric"], ["lh", "lh"], ["rlh", "rlh"], ["vw", "vw"], ["svw", "svw"], ["lvw", "lvw"], ["dvw", "dvw"], ["vh", "vh"], ["svh", "svh"], ["lvh", "lvh"], ["dvh", "dvh"], ["vi", "vi"], ["svi", "svi"], ["lvi", "lvi"], ["dvi", "dvi"], ["vb", "vb"], ["svb", "svb"], ["lvb", "lvb"], ["dvb", "dvb"], ["vmin", "vmin"], ["svmin", "svmin"], ["lvmin", "lvmin"], ["dvmin", "dvmin"], ["vmax", "vmax"], ["svmax", "svmax"], ["lvmax", "lvmax"], ["dvmax", "dvmax"], ["cm", "cm"], ["mm", "mm"], ["q", "Q"], ["in", "in"], ["pt", "pt"], ["pc", "pc"], ["px", "px"], ["deg", "deg"], ["grad", "grad"], ["rad", "rad"], ["turn", "turn"], ["s", "s"], ["ms", "ms"], ["hz", "Hz"], ["khz", "kHz"], ["dpi", "dpi"], ["dpcm", "dpcm"], ["dppx", "dppx"], ["x", "x"], ["cqw", "cqw"], ["cqh", "cqh"], ["cqi", "cqi"], ["cqb", "cqb"], ["cqmin", "cqmin"], ["cqmax", "cqmax"]]);
  var nl = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs;
  var nu = RegExp(nl.source + `|(${/[$@]?[_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/gi.source})?(${/(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/gi.source})(${/[a-z]+/gi.source})?`, "gi");
  function nc(e, t) {
    return e$(!1, e, nl, e => tD(e, t));
  }
  function np(e) {
    return e$(!1, e, nu, (e, t, n, r, i) => !n && r ? nd(r) + tV(i || "") : e);
  }
  function nd(e) {
    return e.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(?=\d)/, "$1$2").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "").replace(/\.0(?=$|e)/, "");
  }
  var nm = function (e, t, n) {
    let r = !!(null != n && n.backwards);
    if (!1 === t) return !1;
    let i = e.charAt(t);
    if (r) {
      if ("\r" === e.charAt(t - 1) && i === `
`) return t - 2;
      if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t - 1;
    } else {
      if ("\r" === i && e.charAt(t + 1) === `
`) return t + 2;
      if (i === `
` || "\r" === i || "\u2028" === i || "\u2029" === i) return t + 1;
    }
    return t;
  };
  var nf = function (e, t, n = {}) {
    let r = tN(e, n.backwards ? t - 1 : t, n);
    let i = nm(e, r, n);
    return r !== i;
  };
  var nh = function (e, t) {
    if (!1 === t) return !1;
    if ("/" === e.charAt(t) && "*" === e.charAt(t + 1)) {
      for (let n = t + 2; n < e.length; ++n) if ("*" === e.charAt(n) && "/" === e.charAt(n + 1)) return n + 2;
    }
    return t;
  };
  var ny = function (e, t) {
    var n;
    let r = null;
    let i = t;
    for (; i !== r;) {
      r = i;
      i = tI(e, i);
      i = nh(e, i);
      i = tN(e, i);
    }
    return !1 !== (i = nm(e, i = !1 !== (n = i) && ("/" === e.charAt(n) && "/" === e.charAt(n + 1) ? tO(e, n) : n))) && nf(e, i);
  };
  function ng(e) {
    return e.match(e => "value-paren_group" === e.type && !e.open && e.groups.some(e => "value-comma_group" === e.type), (e, t) => "group" === t && "value-value" === e.type, (e, t) => "group" === t && "value-root" === e.type, (e, t) => "value" === t && ("css-decl" === e.type && !e.prop.startsWith("--") || "css-atrule" === e.type && e.variable));
  }
  var nb = function (e, t, n) {
    let r = [];
    e.each(() => {
      let {
        node,
        previous
      } = e;
      if (previous?.type === "css-comment" && "prettier-ignore" === previous.text.trim() ? r.push(t.originalText.slice(tM(node), tL(node))) : r.push(n()), e.isLast) return;
      let {
        next
      } = e;
      ("css-comment" !== next.type || nf(t.originalText, tM(next), {
        backwards: !0
      }) || tv(node)) && ("css-atrule" !== next.type || "else" !== next.name || "css-comment" === node.type) ? (r.push(t.__isHTMLStyleAttribute ? tu : tp), ny(t.originalText, tL(node)) && !tv(node) && r.push(tp)) : r.push(" ");
    }, "nodes");
    return r;
  };
  var nD = [{
    linguistLanguageId: 50,
    name: "CSS",
    type: "markup",
    tmScope: "source.css",
    aceMode: "css",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    color: "#563d7c",
    extensions: [".css", ".wxss"],
    parsers: ["css"],
    vscodeLanguageIds: ["css"]
  }, {
    linguistLanguageId: 0xfa97795,
    name: "PostCSS",
    type: "markup",
    color: "#dc3a0c",
    tmScope: "source.postcss",
    group: "CSS",
    extensions: [".pcss", ".postcss"],
    aceMode: "text",
    parsers: ["css"],
    vscodeLanguageIds: ["postcss"]
  }, {
    linguistLanguageId: 198,
    name: "Less",
    type: "markup",
    color: "#1d365d",
    aliases: ["less-css"],
    extensions: [".less"],
    tmScope: "source.css.less",
    aceMode: "less",
    codemirrorMode: "css",
    codemirrorMimeType: "text/css",
    parsers: ["less"],
    vscodeLanguageIds: ["less"]
  }, {
    linguistLanguageId: 329,
    name: "SCSS",
    type: "markup",
    color: "#c6538c",
    tmScope: "source.css.scss",
    aceMode: "scss",
    codemirrorMode: "css",
    codemirrorMimeType: "text/x-scss",
    extensions: [".scss"],
    parsers: ["scss"],
    vscodeLanguageIds: ["scss"]
  }];
  var nx = {
    singleQuote: {
      category: "Common",
      type: "boolean",
      default: !1,
      description: "Use single quotes instead of double quotes."
    }
  };
  var nv = {};
  s(nv, {
    css: () => nz,
    less: () => nK,
    scss: () => nW
  });
  var nT = l(P(), 1);
  var nS = l(R(), 1);
  var nC = l(Z(), 1);
  function nE(e, t, n) {
    if (e && "object" == typeof e) for (let r in delete e.parent, e) {
      nE(e[r], t, n);
      "type" !== r || "string" != typeof e[r] || e[r].startsWith(t) || n && n.test(e[r]) || (e[r] = t + e[r]);
    }
    return e;
  }
  var nw = l(er(), 1).$$default.$$default;
  var nA = function (e) {
    let t;
    try {
      t = nw(e);
    } catch {
      return {
        type: "selector-unknown",
        value: e
      };
    }
    return nE(function e(t) {
      if (t && "object" == typeof t) {
        for (let n in delete t.parent, t) e(t[n]);
        Array.isArray(t) || !t.value || t.type || (t.type = "unknown");
      }
      return t;
    }(t), "media-");
  };
  var nk = l(eE(), 1);
  var nF = function (e) {
    let t;
    if (/\/\/|\/\*/.test(e)) return {
      type: "selector-unknown",
      value: e.trim()
    };
    try {
      new nk.$$default(e => {
        t = e;
      }).process(e);
    } catch {
      return {
        type: "selector-unknown",
        value: e
      };
    }
    return nE(t, "selector-");
  };
  var nP = l(eW(), 1);
  var nN = e => {
    for (; e.parent;) e = e.parent;
    return e;
  };
  var nI = function (e) {
    if (ty(e)) {
      for (let t = e.length - 1; t > 0; t--) if ("word" === e[t].type && "{" === e[t].value && "word" === e[t - 1].type && e[t - 1].value.endsWith("#")) return !0;
    }
    return !1;
  };
  var nO = function (e, t) {
    if ("less" === t.parser && e.startsWith("~`")) return {
      type: "value-unknown",
      value: e
    };
    let n = null;
    try {
      n = new nP.$$default(e, {
        loose: !0
      }).parse();
    } catch {
      return {
        type: "value-unknown",
        value: e
      };
    }
    n.text = e;
    return nE(function e(t, n) {
      if (t && "object" == typeof t) for (let r in t) "parent" !== r && (e(t[r], n), "nodes" === r && (t.group = function e(t) {
        return ("paren_group" !== t.type || t.open || t.close || 1 !== t.groups.length) && ("comma_group" !== t.type || 1 !== t.groups.length) ? "paren_group" === t.type || "comma_group" === t.type ? {
          ...t,
          groups: t.groups.map(e)
        } : t : e(t.groups[0]);
      }(function (e, t) {
        var n;
        var r;
        let {
          nodes
        } = e;
        let a = {
          open: null,
          close: null,
          groups: [],
          type: "paren_group"
        };
        let o = [a];
        let s = a;
        let _ = {
          groups: [],
          type: "comma_group"
        };
        let l = [_];
        for (let s = 0; s < nodes.length; ++s) {
          let u = nodes[s];
          if ("scss" === t.parser && "number" === u.type && ".." === u.unit && u.value.endsWith(".") && (u.value = u.value.slice(0, -1), u.unit = "..."), "func" === u.type && "selector" === u.value && (u.group.groups = [nF(nN(e).text.slice(u.group.open.sourceIndex + 1, u.group.close.sourceIndex))]), "func" === u.type && "url" === u.value) {
            let e = (null == (n = u.group) ? void 0 : n.groups) ?? [];
            let i = [];
            for (let t = 0; t < e.length; t++) {
              let n = e[t];
              "comma_group" === n.type ? i = [...i, ...n.groups] : i.push(n);
            }
            !nI(i) && (i.some(e => "string" === e.type || "func" === e.type && !e.value.endsWith("\\")) || (r = i[0], "scss" === t.parser && r?.type === "word" && r.value.startsWith("$"))) || (u.group.groups = [nN(u).text.slice(u.group.open.sourceIndex + 1, u.group.close.sourceIndex).trim()]);
          }
          if ("paren" === u.type && "(" === u.value) {
            a = {
              open: u,
              close: null,
              groups: [],
              type: "paren_group"
            };
            o.push(a);
            _ = {
              groups: [],
              type: "comma_group"
            };
            l.push(_);
          } else if ("paren" === u.type && ")" === u.value) {
            if (_.groups.length > 0 && a.groups.push(_), a.close = u, 1 === l.length) throw Error("Unbalanced parenthesis");
            l.pop();
            (_ = tm(!1, l, -1)).groups.push(a);
            o.pop();
            a = tm(!1, o, -1);
          } else "comma" === u.type ? (a.groups.push(_), _ = {
            groups: [],
            type: "comma_group"
          }, l[l.length - 1] = _) : _.groups.push(u);
        }
        _.groups.length > 0 && a.groups.push(_);
        return s;
      }(t, n)), delete t[r]));
      return t;
    }(n, t), "value-", /^selector-/);
  };
  var nB = new Set(["import", "use", "forward"]);
  var nj = /(\s*)(!default).*$/;
  var nM = /(\s*)(!global).*$/;
  function nL(e, t, n) {
    let r;
    let i = tz(t);
    let {
      frontMatter
    } = i;
    t = i.content;
    try {
      r = e(t, {
        map: !1
      });
    } catch (i) {
      var o;
      let {
        name,
        reason,
        line,
        column
      } = i;
      throw "number" != typeof line ? i : Object.assign(SyntaxError(`${name}: ${reason} (` + (o = {
        loc: {
          start: {
            line,
            column
          }
        },
        cause: i
      }).loc.start.line + ":" + o.loc.start.column + ")"), o);
    }
    n.originalText = t;
    (function e(t, n) {
      for (let r in t.source && (t.source.startOffset = tB(t, n), t.source.endOffset = tj(t, n)), t) {
        let i = t[r];
        "source" !== r && i && "object" == typeof i && ("value-root" === i.type || "value-unknown" === i.type ? function e(t, n, r) {
          for (let i in t.source && (t.source.startOffset = tB(t, r) + n, t.source.endOffset = tj(t, r) + n), t) {
            let a = t[i];
            "source" !== i && a && "object" == typeof a && e(a, n, r);
          }
        }(i, function (e) {
          var t;
          let n = e.source.startOffset;
          "string" == typeof e.prop && (n += e.prop.length);
          "css-atrule" === e.type && "string" == typeof e.name && (n += 1 + e.name.length + e.raws.afterName.match(/^\s*:?\s*/)[0].length);
          "css-atrule" !== e.type && "string" == typeof (null == (t = e.raws) ? void 0 : t.between) && (n += e.raws.between.length);
          return n;
        }(t), i.text || i.value) : e(i, n));
      }
    })(r = function e(t, n) {
      var r;
      var i;
      if (t && "object" == typeof t) {
        for (let r in delete t.parent, t) e(t[r], n);
        if (!t.type) return t;
        if (t.raws ?? (t.raws = {}), "css-decl" === t.type && "string" == typeof t.prop && t.prop.startsWith("--") && "string" == typeof t.value && t.value.startsWith("{")) {
          let e;
          if (t.value.trimEnd().endsWith("}")) {
            let i;
            let a = n.originalText.slice(0, t.source.start.offset);
            let o = "a".repeat(t.prop.length) + n.originalText.slice(t.source.start.offset + t.prop.length, t.source.end.offset);
            let s = e$(!1, a, /[^\n]/g, " ") + o;
            let _;
            _ = "scss" === n.parser ? nq : "less" === n.parser ? nJ : nR;
            try {
              i = _(s, {
                ...n
              });
            } catch {}
            (null == (r = i?.nodes) ? void 0 : r.length) === 1 && "css-rule" === i.nodes[0].type && (e = i.nodes[0].nodes);
          }
          e ? t.value = {
            type: "css-rule",
            nodes: e
          } : t.value = {
            type: "value-unknown",
            value: t.raws.value.raw
          };
          return t;
        }
        let a = "";
        "string" == typeof t.selector && (a = t.raws.selector ? t.raws.selector.scss ?? t.raws.selector.raw : t.selector, t.raws.between && t.raws.between.trim().length > 0 && (a += t.raws.between), t.raws.selector = a);
        let o = "";
        "string" == typeof t.value && (o = (o = t.raws.value ? t.raws.value.scss ?? t.raws.value.raw : t.value).trim(), t.raws.value = o);
        let s = "";
        if ("string" == typeof t.params && (s = t.raws.params ? t.raws.params.scss ?? t.raws.params.raw : t.params, t.raws.afterName && t.raws.afterName.trim().length > 0 && (s = t.raws.afterName + s), t.raws.between && t.raws.between.trim().length > 0 && (s += t.raws.between), s = s.trim(), t.raws.params = s), a.trim().length > 0) {
          a.startsWith("@") && a.endsWith(":") || (t.mixin ? t.selector = nO(a, n) : ("scss" === n.parser && t.selector && t.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*\n/, "").trim().endsWith(":") && (t.isSCSSNesterProperty = !0), t.selector = nF(a)));
          return t;
        }
        if (o.length > 0) {
          let e = o.match(nj);
          e && (o = o.slice(0, e.index), t.scssDefault = !0, "!default" !== e[0].trim() && (t.raws.scssDefault = e[0]));
          let r = o.match(nM);
          if (r && (o = o.slice(0, r.index), t.scssGlobal = !0, "!global" !== r[0].trim() && (t.raws.scssGlobal = r[0])), o.startsWith("progid:")) return {
            type: "value-unknown",
            value: o
          };
          t.value = nO(o, n);
        }
        if ("less" === n.parser && "css-decl" === t.type && o.startsWith("extend(") && (t.extend || (t.extend = ":" === t.raws.between), t.extend && !t.selector && (delete t.value, t.selector = nF(o.slice(7, -1)))), "css-atrule" === t.type) {
          if ("less" === n.parser) {
            if (t.mixin) {
              let e = t.raws.identifier + t.name + t.raws.afterName + t.raws.params;
              t.selector = nF(e);
              delete t.params;
              return t;
            }
            if (t.$$function) return t;
          }
          if ("css" === n.parser && "custom-selector" === t.name) {
            let e = t.params.match(/:--\S+\s+/)[0].trim();
            t.customSelector = e;
            t.selector = nF(t.params.slice(e.length).trim());
            delete t.params;
            return t;
          }
          if ("less" === n.parser) {
            if (t.name.includes(":") && !t.params) {
              t.variable = !0;
              let e = t.name.split(":");
              t.name = e[0];
              t.value = nO(e.slice(1).join(":"), n);
            }
            if (!["page", "nest", "keyframes"].includes(t.name) && (null == (i = t.params) ? void 0 : i[0]) === ":") {
              t.variable = !0;
              let e = t.params.slice(1);
              e && (t.value = nO(e, n));
              t.raws.afterName += ":";
            }
            if (t.variable) {
              delete t.params;
              t.value || delete t.value;
              return t;
            }
          }
        }
        if ("css-atrule" === t.type && s.length > 0) {
          let {
            name
          } = t;
          let r = t.name.toLowerCase();
          return "warn" === name || "error" === name ? (t.params = {
            type: "media-unknown",
            value: s
          }, t) : "extend" === name || "nest" === name ? (t.selector = nF(s), delete t.params, t) : "at-root" === name ? (/^\(\s*(?:without|with)\s*:.+\)$/s.test(s) ? t.params = nO(s, n) : (t.selector = nF(s), delete t.params), t) : nB.has(r) ? (t.$$import = !0, delete t.filename, t.params = nO(s, n), t) : ["namespace", "supports", "if", "else", "for", "each", "while", "debug", "mixin", "include", "function", "return", "define-mixin", "add-mixin"].includes(name) ? (s = (s = s.replace(/(\$\S+?)(\s+)?\.{3}/, "$1...$2")).replace(/^(?!if)(\S+)(\s+)\(/, "$1($2"), t.value = nO(s, n), delete t.params, t) : ["media", "custom-media"].includes(r) ? s.includes("#{") ? {
            type: "media-unknown",
            value: s
          } : (t.params = nA(s), t) : (t.params = s, t);
        }
      }
      return t;
    }(nE(r, "css-"), n), t);
    frontMatter && (frontMatter.source = {
      startOffset: 0,
      endOffset: frontMatter.raw.length
    }, r.frontMatter = frontMatter);
    return r;
  }
  function nR(e, t = {}) {
    return nL(nT.$$default.$$default, e, t);
  }
  function nJ(e, t = {}) {
    return nL(e => nS.$$default.parse(function (e) {
      let t = "initial";
      let n = "initial";
      let r;
      let i = !1;
      let a = [];
      for (let o = 0; o < e.length; o++) {
        let s = e[o];
        switch (t) {
          case "initial":
            if ("'" === s) {
              t = "single-quotes";
              continue;
            }
            if ('"' === s) {
              t = "double-quotes";
              continue;
            }
            if (("u" === s || "U" === s) && "url(" === e.slice(o, o + 4).toLowerCase()) {
              t = "url";
              o += 3;
              continue;
            }
            if ("*" === s && "/" === e[o - 1]) {
              t = "comment-block";
              continue;
            }
            "/" === s && "/" === e[o - 1] && (t = "comment-inline", r = o - 1);
            continue;
          case "single-quotes":
            if ("'" === s && "\\" !== e[o - 1] && (t = n, n = "initial"), s === `
` || "\r" === s) return e;
            continue;
          case "double-quotes":
            if ('"' === s && "\\" !== e[o - 1] && (t = n, n = "initial"), s === `
` || "\r" === s) return e;
            continue;
          case "url":
            if (")" === s && (t = "initial"), s === `
` || "\r" === s) return e;
            if ("'" === s) {
              t = "single-quotes";
              n = "url";
              continue;
            }
            '"' === s && (t = "double-quotes", n = "url");
            continue;
          case "comment-block":
            "/" === s && "*" === e[o - 1] && (t = "initial");
            continue;
          case "comment-inline":
            ('"' === s || "'" === s || "*" === s) && (i = !0);
            (s === `
` || "\r" === s) && (i && a.push([r, o]), t = "initial", i = !1);
            continue;
        }
      }
      for (let [t, n] of a) e = e.slice(0, t) + e$(!1, e.slice(t, n), /["'*]/g, " ") + e.slice(n);
      return e;
    }(e)), e, t);
  }
  function nq(e, t = {}) {
    return nL(nC.$$default, e, t);
  }
  var nU = {
    astFormat: "postcss",
    hasPragma: function (e) {
      return function (e) {
        let {
          pragmas
        } = tq(e);
        return Object.prototype.hasOwnProperty.call(pragmas, "prettier") || Object.prototype.hasOwnProperty.call(pragmas, "format");
      }(tz(e).content);
    },
    locStart: tM,
    locEnd: tL
  };
  var nz = {
    ...nU,
    parse: nR
  };
  var nK = {
    ...nU,
    parse: nJ
  };
  var nW = {
    ...nU,
    parse: nq
  };
  var nV = {
    postcss: {
      print: function (e, t, n) {
        var r;
        var i;
        var a;
        var o;
        var s;
        var _;
        var l;
        var u;
        var c;
        var p;
        var d;
        var m;
        var f;
        var h;
        var y;
        var g;
        var b;
        var D;
        let {
          node
        } = e;
        switch (node.type) {
          case "front-matter":
            return [node.raw, tp];
          case "css-root":
            {
              let r = nb(e, t, n);
              let i = node.raws.after.trim();
              i.startsWith(";") && (i = i.slice(1).trim());
              return [node.frontMatter ? [n("frontMatter"), tp] : "", r, i ? ` ${i}` : "", node.nodes.length > 0 ? tp : ""];
            }
          case "css-comment":
            {
              let e = node.inline || node.raws.inline;
              let n = t.originalText.slice(tM(node), tL(node));
              return e ? n.trimEnd() : n;
            }
          case "css-rule":
            return [n("selector"), node.important ? " !important" : "", node.nodes ? [(null == (r = node.selector) ? void 0 : r.type) === "selector-unknown" && ni(node.selector.value) ? tu : node.selector ? " " : "", "{", node.nodes.length > 0 ? ti([tp, nb(e, t, n)]) : "", tp, "}", !function (e) {
              let {
                selector
              } = e;
              return !!selector && ("string" == typeof selector && /^@.+:.*$/.test(selector) || selector.value && /^@.+:.*$/.test(selector.value));
            }(node) ? "" : ";"] : ";"];
          case "css-decl":
            {
              let r;
              let o;
              let s = e.parent;
              let {
                between
              } = node.raws;
              let p = between.trim();
              let d = ":" === p;
              let m = "string" == typeof node.value && /^ *$/.test(node.value);
              let f = "string" == typeof node.value ? node.value : n("value");
              f = (null == (l = node.value) ? void 0 : l.type) === "value-root" && (null == (u = node.value.group) ? void 0 : u.type) === "value-value" && "composes" === node.prop.toLowerCase() ? function (e, t) {
                if ("string" == typeof e) return t(e);
                let n = new Map();
                return function e(r) {
                  if (n.has(r)) return n.get(r);
                  let i = function (n) {
                    switch (te(n)) {
                      case eG:
                        return t(n.map(e));
                      case e1:
                        return t({
                          ...n,
                          parts: n.parts.map(e)
                        });
                      case e2:
                        return t({
                          ...n,
                          breakContents: e(n.breakContents),
                          flatContents: e(n.flatContents)
                        });
                      case e0:
                        {
                          let {
                            expandedStates,
                            contents
                          } = n;
                          i = expandedStates ? (r = expandedStates.map(e))[0] : e(contents);
                          return t({
                            ...n,
                            contents,
                            expandedStates
                          });
                        }
                      case eQ:
                      case eY:
                      case e3:
                      case e5:
                      case e6:
                        return t({
                          ...n,
                          contents: e(n.contents)
                        });
                      case eH:
                      case eX:
                      case eZ:
                      case e4:
                      case e8:
                      case e7:
                        return t(n);
                      default:
                        throw new tn(n);
                    }
                  }(r);
                  n.set(r, i);
                  return i;
                }(e);
              }(f, th) : f;
              !d && ni(p) && !(null != (a = null == (i = node.value) ? void 0 : i.group) && a.group && e.call(() => ng(e), "value", "group", "group")) && (f = ti([tp, ta(-1, f)]));
              return [e$(!1, node.raws.before, /[\s;]/g, ""), "css-atrule" === s.type && s.variable || (o = null == (c = null == (r = e.findAncestor(e => "css-rule" === e.type)) ? void 0 : r.raws) ? void 0 : c.selector) && (o.startsWith(":import") || o.startsWith(":export")) ? node.prop : tV(node.prop), p.startsWith("//") ? " " : "", p, node.extend || m ? "" : " ", "less" === t.parser && node.extend && node.selector ? ["extend(", n("selector"), ")"] : "", f, node.raws.important ? node.raws.important.replace(/\s*!\s*important/i, " !important") : node.important ? " !important" : "", node.raws.scssDefault ? node.raws.scssDefault.replace(/\s*!default/i, " !default") : node.scssDefault ? " !default" : "", node.raws.scssGlobal ? node.raws.scssGlobal.replace(/\s*!global/i, " !global") : node.scssGlobal ? " !global" : "", node.nodes ? [" {", ti([tc, nb(e, t, n)]), tc, "}"] : node.prop.startsWith("@prettier-placeholder") && !s.raws.semicolon && ";" !== t.originalText[tL(node) - 1] ? "" : t.__isHTMLStyleAttribute && tG(e, node) ? t_(";") : ";"];
            }
          case "css-atrule":
            {
              let r = e.parent;
              let i = t3(node) && !r.raws.semicolon && ";" !== t.originalText[tL(node) - 1];
              if ("less" === t.parser) {
                if (node.mixin) return [n("selector"), node.important ? " !important" : "", i ? "" : ";"];
                if (node.$$function) return [node.name, "string" == typeof node.params ? node.params : n("params"), i ? "" : ";"];
                if (node.variable) return ["@", node.name, ": ", node.value ? n("value") : "", node.raws.between.trim() ? node.raws.between.trim() + " " : "", node.nodes ? ["{", ti([node.nodes.length > 0 ? tc : "", nb(e, t, n)]), tc, "}"] : "", i ? "" : ";"];
              }
              let a = "import" === node.name && (null == (o = node.params) ? void 0 : o.type) === "value-unknown" && node.params.value.endsWith(";");
              return ["@", t2(node) || node.name.endsWith(":") || t3(node) ? node.name : tV(node.name), node.params ? [t2(node) ? "" : t3(node) ? "" === node.raws.afterName ? "" : node.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(node.raws.afterName) ? [tp, tp] : /^\s*\n/.test(node.raws.afterName) ? tp : " " : " ", "string" == typeof node.params ? node.params : n("params")] : "", node.selector ? ti([" ", n("selector")]) : "", node.value ? to([" ", n("value"), t1(node, t) ? (null == (m = null == (d = null == (p = node.value) ? void 0 : p.group) ? void 0 : d.group) ? void 0 : m.type) === "value-paren_group" && null !== node.value.group.group.open && null !== node.value.group.group.close ? " " : tu : ""]) : "else" === node.name ? " " : "", node.nodes ? [t1(node, t) ? "" : node.selector && !node.selector.nodes && "string" == typeof node.selector.value && ni(node.selector.value) || !node.selector && "string" == typeof node.params && ni(node.params) ? tu : " ", "{", ti([node.nodes.length > 0 ? tc : "", nb(e, t, n)]), tc, "}"] : i || a ? "" : ";"];
            }
          case "media-query-list":
            {
              let t = [];
              e.each(({
                node: e
              }) => {
                "media-query" === e.type && "" === e.value || t.push(n());
              }, "nodes");
              return to(ti(td(tu, t)));
            }
          case "media-query":
            return [td(" ", e.map(n, "nodes")), tG(e, node) ? "" : ","];
          case "media-type":
          case "media-value":
            return np(nc(node.value, t));
          case "media-feature-expression":
            return node.nodes ? ["(", ...e.map(n, "nodes"), ")"] : node.value;
          case "media-feature":
            return tV(nc(e$(!1, node.value, / +/g, " "), t));
          case "media-colon":
            return [node.value, " "];
          case "media-keyword":
          case "selector-string":
            return nc(node.value, t);
          case "media-url":
            return nc(e$(!1, e$(!1, node.value, /^url\(\s+/gi, "url("), /\s+\)$/g, ")"), t);
          case "media-unknown":
          case "selector-comment":
          case "selector-nesting":
          case "value-paren":
          case "value-operator":
          case "value-unicode-range":
          case "value-unknown":
            return node.value;
          case "selector-root":
            return to([tH(e, "custom-selector") ? [e.findAncestor(e => "css-atrule" === e.type).customSelector, tu] : "", td([",", tH(e, ["extend", "custom-selector", "nest"]) ? tu : tp], e.map(n, "nodes"))]);
          case "selector-selector":
            return to(ti(e.map(n, "nodes")));
          case "selector-tag":
            let v;
            return [node.namespace ? [!0 === node.namespace ? "" : node.namespace.trim(), "|"] : "", (null == (s = e.previous) ? void 0 : s.type) === "selector-nesting" ? node.value : np((f = node.value, (null == (h = null == (v = e.findAncestor(e => "css-atrule" === e.type)) ? void 0 : v.name) ? void 0 : h.toLowerCase().endsWith("keyframes")) && ["from", "to"].includes(f.toLowerCase())) ? node.value.toLowerCase() : node.value)];
          case "selector-id":
            return ["#", node.value];
          case "selector-class":
            return [".", np(nc(node.value, t))];
          case "selector-attribute":
            let T;
            return ["[", node.namespace ? [!0 === node.namespace ? "" : node.namespace.trim(), "|"] : "", node.attribute.trim(), node.operator ?? "", node.value ? (y = nc(node.value.trim(), t), T = t.singleQuote ? "'" : '"', y.includes('"') || y.includes("'") ? y : T + y + T) : "", node.insensitive ? " i" : "", "]"];
          case "selector-combinator":
            if ("+" === node.value || ">" === node.value || "~" === node.value || ">>>" === node.value) {
              let t = e.parent;
              return ["selector-selector" === t.type && t.nodes[0] === node ? "" : tu, node.value, tG(e, node) ? "" : " "];
            }
            return [node.value.trim().startsWith("(") ? tu : "", np(nc(node.value.trim(), t)) || tu];
          case "selector-universal":
            return [node.namespace ? [!0 === node.namespace ? "" : node.namespace.trim(), "|"] : "", node.value];
          case "selector-pseudo":
            return [tV(node.value), ty(node.nodes) ? to(["(", ti([tc, td([",", tu], e.map(n, "nodes"))]), tc, ")"]) : ""];
          case "selector-unknown":
            {
              let n = e.findAncestor(e => "css-rule" === e.type);
              if (null != n && n.isSCSSNesterProperty) return np(nc(tV(node.value), t));
              let r = e.parent;
              if (null != (_ = r.raws) && _.selector) {
                let e = tM(r);
                let n = e + r.raws.selector.length;
                return t.originalText.slice(e, n).trim();
              }
              let i = e.grandparent;
              if ("value-paren_group" === r.type && i?.type === "value-func" && "selector" === i.value) {
                let e = tL(r.open) + 1;
                let n = tM(r.close);
                let i = t.originalText.slice(e, n).trim();
                return ni(i) ? [tl, i] : i;
              }
              return node.value;
            }
          case "value-value":
          case "value-root":
            return n("group");
          case "value-comment":
            return t.originalText.slice(tM(node), tL(node));
          case "value-comma_group":
            return ns(e, t, n);
          case "value-paren_group":
            return function (e, t, n) {
              var r;
              let {
                node: _node,
                parent
              } = e;
              let o = e.map(({
                node: e
              }) => "string" == typeof e ? e : n(), "groups");
              if (parent && "value-func" === (r = parent).type && "url" === r.value.toLowerCase() && (1 === _node.groups.length || _node.groups.length > 0 && "value-comma_group" === _node.groups[0].type && _node.groups[0].groups.length > 0 && "value-word" === _node.groups[0].groups[0].type && _node.groups[0].groups[0].value.startsWith("data:"))) return [_node.open ? n("open") : "", td(",", o), _node.close ? n("close") : ""];
              if (!_node.open) {
                let t = ng(e);
                let n = td([",", t ? tp : tu], o);
                return ti(t ? [tp, n] : to(ts(n)));
              }
              let s = e.map(({
                node: n,
                isLast: r,
                index: i
              }) => {
                var a;
                var s;
                let _ = o[i];
                if (t4(n) && "value-comma_group" === n.type && n.groups && "value-paren_group" !== n.groups[0].type && (null == (a = n.groups[2]) ? void 0 : a.type) === "value-paren_group") {
                  let e = tf(_.contents.contents);
                  e[1] = to(e[1]);
                  _ = to(ta(-1, _));
                }
                let l = [_, r ? "value-func" === (s = e.grandparent).type && "var" === s.value.toLowerCase() && function ({
                  node: e,
                  parent: t
                }, n) {
                  return !!(e.source && n.originalText.slice(tM(e), tM(t.close)).trimEnd().endsWith(","));
                }(e, t) ? "," : "value-comment" !== e.node.type && !("value-comma_group" === e.node.type && e.node.groups.every(e => "value-comment" === e.type)) && ("es5" === t.trailingComma || "all" === t.trailingComma) && e.callParent(() => t5(e, t)) ? t_(",") : "" : ","];
                if (!r && "value-comma_group" === n.type && ty(n.groups)) {
                  let e = tm(!1, n.groups, -1);
                  !e.source && e.close && (e = e.close);
                  e.source && ny(t.originalText, tL(e)) && l.push(tp);
                }
                return l;
              }, "groups");
              let _ = function (e, t) {
                if (!t4(t)) return !1;
                let {
                  groups
                } = t;
                let r = groups.indexOf(e);
                return -1 !== r && nr(groups[r + 1]);
              }(_node, parent);
              let l = function (e, t) {
                var n;
                var r;
                if ((null == (n = e.open) ? void 0 : n.value) !== "(" || (null == (r = e.close) ? void 0 : r.value) !== ")" || e.groups.some(e => "value-comma_group" !== e.type)) return !1;
                if ("value-comma_group" === t.type) {
                  let n = t.groups.indexOf(e) - 1;
                  let r = t.groups[n];
                  if (r?.type === "value-word" && "with" === r.value) return !0;
                }
                return !1;
              }(_node, parent);
              let u = t5(e, t);
              let c = to([_node.open ? n("open") : "", ti([tc, td(tu, s)]), tc, _node.close ? n("close") : ""], {
                shouldBreak: l || u && !_
              });
              return l || _ ? ta(-1, c) : c;
            }(e, t, n);
          case "value-func":
            return [node.value, tH(e, "supports") && (g = node).value && ["not", "and", "or"].includes(g.value.toLowerCase()) ? " " : "", n("group")];
          case "value-number":
            let S;
            return [nd(node.value), (S = (b = node.unit).toLowerCase(), n_.has(S) ? n_.get(S) : b)];
          case "value-word":
            return node.isColor && node.isHex || (D = node.value, tW.has(D.toLowerCase())) ? node.value.toLowerCase() : node.value;
          case "value-colon":
            {
              let {
                previous
              } = e;
              return [node.value, "string" == typeof previous?.value && previous.value.endsWith("\\") || t$(e, "url") ? "" : tu];
            }
          case "value-string":
            return tD(node.raws.quote + node.value + node.raws.quote, t);
          case "value-atword":
            return ["@", node.value];
          default:
            throw new tx(node, "PostCSS");
        }
      },
      embed: tE,
      insertPragma: function (e) {
        let {
          frontMatter,
          content
        } = tz(e);
        return (frontMatter ? frontMatter.raw + `

` : "") + function (e) {
          let {
            shebang,
            text,
            pragmas,
            comments
          } = tq(e);
          let a = tR.strip(text);
          return (shebang ? `${shebang}
` : "") + tR.print({
            pragmas: {
              format: "",
              ...pragmas
            },
            comments: comments.trimStart()
          }) + (a.startsWith(`
`) ? `
` : `

`) + a;
        }(content);
      },
      massageAstNode: tS,
      getVisitorKeys: tk
    }
  };
  return _(t({}, "__esModule", {
    value: !0
  }), eV);
});