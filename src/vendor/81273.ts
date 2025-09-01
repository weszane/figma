import { $$default } from "../vendor/644123";
Object.defineProperty(exports, "__esModule", {
  value: !0
});
exports.$$default = class {
  constructor(t) {
    this.ops = t;
    this.index = 0;
    this.offset = 0;
  }
  hasNext() {
    return this.peekLength() < 1 / 0;
  }
  next(t) {
    t || (t = 1 / 0);
    let e = this.ops[this.index];
    if (!e) return {
      retain: 1 / 0
    };
    {
      let r = this.offset;
      let n = $$default.length(e);
      if (t >= n - r ? (t = n - r, this.index += 1, this.offset = 0) : this.offset += t, "number" == typeof e.$$delete) return {
        delete: t
      };
      {
        let i = {};
        e.attributes && (i.attributes = e.attributes);
        "number" == typeof e.retain ? i.retain = t : "object" == typeof e.retain && null !== e.retain ? i.retain = e.retain : "string" == typeof e.insert ? i.insert = e.insert.substr(r, t) : i.insert = e.insert;
        return i;
      }
    }
  }
  peek() {
    return this.ops[this.index];
  }
  peekLength() {
    return this.ops[this.index] ? $$default.length(this.ops[this.index]) - this.offset : 1 / 0;
  }
  peekType() {
    let t = this.ops[this.index];
    if (t) {
      if ("number" == typeof t.$$delete) return "delete";
      if ("number" != typeof t.retain && ("object" != typeof t.retain || null === t.retain)) return "insert";
    }
    return "retain";
  }
  rest() {
    if (!this.hasNext()) return [];
    if (0 === this.offset) return this.ops.slice(this.index);
    {
      let t = this.offset;
      let e = this.index;
      let r = this.next();
      let i = this.ops.slice(this.index);
      this.offset = t;
      this.index = e;
      return [r].concat(i);
    }
  }
};