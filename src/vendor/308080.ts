import i, { INSERT, DELETE, EQUAL } from "../vendor/629924";
import n from "../vendor/850618";
import s from "../vendor/883718";
import { $$default } from "../vendor/3910";
import { $$default as _$$$$default } from "../vendor/644123";
import { $$default as _$$$$default2 } from "../vendor/81273";
exports.AttributeMap = exports.OpIterator = exports.Op = void 0;
exports.AttributeMap = $$default;
exports.Op = _$$$$default;
exports.OpIterator = _$$$$default2;
let c = (t, e) => {
  if ("object" != typeof t || null === t) throw Error(`cannot retain a ${typeof t}`);
  if ("object" != typeof e || null === e) throw Error(`cannot retain a ${typeof e}`);
  let r = Object.keys(t)[0];
  if (!r || r !== Object.keys(e)[0]) throw Error(`embed types not matched: ${r} != ${Object.keys(e)[0]}`);
  return [r, t[r], e[r]];
};
class u {
  constructor(t) {
    Array.isArray(t) ? this.ops = t : null != t && Array.isArray(t.ops) ? this.ops = t.ops : this.ops = [];
  }
  static registerEmbed(t, e) {
    this.handlers[t] = e;
  }
  static unregisterEmbed(t) {
    delete this.handlers[t];
  }
  static getHandler(t) {
    let e = this.handlers[t];
    if (!e) throw Error(`no handlers for embed type "${t}"`);
    return e;
  }
  insert(t, e) {
    let r = {};
    return "string" == typeof t && 0 === t.length ? this : (r.insert = t, null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e), this.push(r));
  }
  delete(t) {
    return t <= 0 ? this : this.push({
      delete: t
    });
  }
  retain(t, e) {
    if ("number" == typeof t && t <= 0) return this;
    let r = {
      retain: t
    };
    null != e && "object" == typeof e && Object.keys(e).length > 0 && (r.attributes = e);
    return this.push(r);
  }
  push(t) {
    let e = this.ops.length;
    let r = this.ops[e - 1];
    if (t = n(t), "object" == typeof r) {
      if ("number" == typeof t.$$delete && "number" == typeof r.$$delete) {
        this.ops[e - 1] = {
          delete: r.$$delete + t.$$delete
        };
        return this;
      }
      if ("number" == typeof r.$$delete && null != t.insert && (e -= 1, "object" != typeof (r = this.ops[e - 1]))) {
        this.ops.unshift(t);
        return this;
      }
      if (s(t.attributes, r.attributes)) {
        if ("string" == typeof t.insert && "string" == typeof r.insert) {
          this.ops[e - 1] = {
            insert: r.insert + t.insert
          };
          "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes);
          return this;
        }
        if ("number" == typeof t.retain && "number" == typeof r.retain) {
          this.ops[e - 1] = {
            retain: r.retain + t.retain
          };
          "object" == typeof t.attributes && (this.ops[e - 1].attributes = t.attributes);
          return this;
        }
      }
    }
    e === this.ops.length ? this.ops.push(t) : this.ops.splice(e, 0, t);
    return this;
  }
  chop() {
    let t = this.ops[this.ops.length - 1];
    t && "number" == typeof t.retain && !t.attributes && this.ops.pop();
    return this;
  }
  filter(t) {
    return this.ops.filter(t);
  }
  forEach(t) {
    this.ops.forEach(t);
  }
  map(t) {
    return this.ops.map(t);
  }
  partition(t) {
    let e = [];
    let r = [];
    this.forEach(i => {
      (t(i) ? e : r).push(i);
    });
    return [e, r];
  }
  reduce(t, e) {
    return this.ops.reduce(t, e);
  }
  changeLength() {
    return this.reduce((t, e) => e.insert ? t + _$$$$default.length(e) : e.$$delete ? t - e.$$delete : t, 0);
  }
  length() {
    return this.reduce((t, e) => t + _$$$$default.length(e), 0);
  }
  slice(t = 0, e = 1 / 0) {
    let r = [];
    let i = new _$$$$default2(this.ops);
    let n = 0;
    for (; n < e && i.hasNext();) {
      let s;
      n < t ? s = i.next(t - n) : (s = i.next(e - n), r.push(s));
      n += _$$$$default.length(s);
    }
    return new u(r);
  }
  compose(t) {
    let e = new _$$$$default2(this.ops);
    let r = new _$$$$default2(t.ops);
    let i = [];
    let n = r.peek();
    if (null != n && "number" == typeof n.retain && null == n.attributes) {
      let t = n.retain;
      for (; "insert" === e.peekType() && e.peekLength() <= t;) {
        t -= e.peekLength();
        i.push(e.next());
      }
      n.retain - t > 0 && r.next(n.retain - t);
    }
    let o = new u(i);
    for (; e.hasNext() || r.hasNext();) if ("insert" === r.peekType()) o.push(r.next());else if ("delete" === e.peekType()) o.push(e.next());else {
      let t = Math.min(e.peekLength(), r.peekLength());
      let i = e.next(t);
      let n = r.next(t);
      if (n.retain) {
        let a = {};
        if ("number" == typeof i.retain) a.retain = "number" == typeof n.retain ? t : n.retain;else if ("number" == typeof n.retain) null == i.retain ? a.insert = i.insert : a.retain = i.retain;else {
          let t = null == i.retain ? "insert" : "retain";
          let [e, r, s] = c(i[t], n.retain);
          let l = u.getHandler(e);
          a[t] = {
            [e]: l.compose(r, s, "retain" === t)
          };
        }
        let h = $$default.compose(i.attributes, n.attributes, "number" == typeof i.retain);
        if (h && (a.attributes = h), o.push(a), !r.hasNext() && s(o.ops[o.ops.length - 1], a)) {
          let t = new u(e.rest());
          return o.concat(t).chop();
        }
      } else "number" == typeof n.$$delete && ("number" == typeof i.retain || "object" == typeof i.retain && null !== i.retain) && o.push(n);
    }
    return o.chop();
  }
  concat(t) {
    let e = new u(this.ops.slice());
    t.ops.length > 0 && (e.push(t.ops[0]), e.ops = e.ops.concat(t.ops.slice(1)));
    return e;
  }
  diff(t, e) {
    if (this.ops === t.ops) return new u();
    let r = [this, t].map(e => e.map(r => {
      if (null != r.insert) return "string" == typeof r.insert ? r.insert : "\0";
      throw Error("diff() called " + (e === t ? "on" : "with") + " non-document");
    }).join(""));
    let n = new u();
    let o = i(r[0], r[1], e, !0);
    let c = new _$$$$default2(this.ops);
    let h = new _$$$$default2(t.ops);
    o.forEach(t => {
      let e = t[1].length;
      for (; e > 0;) {
        let r = 0;
        switch (t[0]) {
          case INSERT:
            r = Math.min(h.peekLength(), e);
            n.push(h.next(r));
            break;
          case DELETE:
            r = Math.min(e, c.peekLength());
            c.next(r);
            n.$$delete(r);
            break;
          case EQUAL:
            r = Math.min(c.peekLength(), h.peekLength(), e);
            let o = c.next(r);
            let a = h.next(r);
            s(o.insert, a.insert) ? n.retain(r, $$default.diff(o.attributes, a.attributes)) : n.push(a).$$delete(r);
        }
        e -= r;
      }
    });
    return n.chop();
  }
  eachLine(t, e = "\n") {
    let r = new _$$$$default2(this.ops);
    let i = new u();
    let n = 0;
    for (; r.hasNext();) {
      if ("insert" !== r.peekType()) return;
      let s = r.peek();
      let l = _$$$$default.length(s) - r.peekLength();
      let a = "string" == typeof s.insert ? s.insert.indexOf(e, l) - l : -1;
      if (a < 0) i.push(r.next());else if (a > 0) i.push(r.next(a));else {
        if (!1 === t(i, r.next(1).attributes || {}, n)) return;
        n += 1;
        i = new u();
      }
    }
    i.length() > 0 && t(i, {}, n);
  }
  invert(t) {
    let e = new u();
    this.reduce((r, i) => {
      if (i.insert) e.$$delete(_$$$$default.length(i));else if ("number" == typeof i.retain && null == i.attributes) {
        e.retain(i.retain);
        return r + i.retain;
      } else if (i.$$delete || "number" == typeof i.retain) {
        let n = i.$$delete || i.retain;
        t.slice(r, r + n).forEach(t => {
          i.$$delete ? e.push(t) : i.retain && i.attributes && e.retain(_$$$$default.length(t), $$default.invert(i.attributes, t.attributes));
        });
        return r + n;
      } else if ("object" == typeof i.retain && null !== i.retain) {
        let n = t.slice(r, r + 1);
        let s = new _$$$$default2(n.ops).next();
        let [o, h, d] = c(i.retain, s.insert);
        let f = u.getHandler(o);
        e.retain({
          [o]: f.invert(h, d)
        }, $$default.invert(i.attributes, s.attributes));
        return r + 1;
      }
      return r;
    }, 0);
    return e.chop();
  }
  transform(t, e = !1) {
    if (e = !!e, "number" == typeof t) return this.transformPosition(t, e);
    let r = new _$$$$default2(this.ops);
    let i = new _$$$$default2(t.ops);
    let n = new u();
    for (; r.hasNext() || i.hasNext();) if ("insert" === r.peekType() && (e || "insert" !== i.peekType())) n.retain(_$$$$default.length(r.next()));else if ("insert" === i.peekType()) n.push(i.next());else {
      let t = Math.min(r.peekLength(), i.peekLength());
      let s = r.next(t);
      let o = i.next(t);
      if (s.$$delete) continue;
      if (o.$$delete) n.push(o);else {
        let r = s.retain;
        let i = o.retain;
        let a = "object" == typeof i && null !== i ? i : t;
        if ("object" == typeof r && null !== r && "object" == typeof i && null !== i) {
          let t = Object.keys(r)[0];
          if (t === Object.keys(i)[0]) {
            let n = u.getHandler(t);
            n && (a = {
              [t]: n.transform(r[t], i[t], e)
            });
          }
        }
        n.retain(a, $$default.transform(s.attributes, o.attributes, e));
      }
    }
    return n.chop();
  }
  transformPosition(t, e = !1) {
    e = !!e;
    let r = new _$$$$default2(this.ops);
    let i = 0;
    for (; r.hasNext() && i <= t;) {
      let n = r.peekLength();
      let s = r.peekType();
      if (r.next(), "delete" === s) {
        t -= Math.min(n, t - i);
        continue;
      }
      "insert" === s && (i < t || !e) && (t += n);
      i += n;
    }
    return t;
  }
}
u.Op = _$$$$default;
u.OpIterator = _$$$$default2;
u.AttributeMap = $$default;
u.handlers = {};
exports.$$default = u;
module.exports = u;
module.exports.$$default = u;