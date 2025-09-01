import _require from "../vendor/390788";
import n from "../vendor/411015";
let {
  swap32LE
} = _require;
module.exports = class {
  constructor(t) {
    let e = "function" == typeof t.readUInt32BE && "function" == typeof t.slice;
    if (e || t instanceof Uint8Array) {
      let r;
      if (e) {
        this.highStart = t.readUInt32LE(0);
        this.errorValue = t.readUInt32LE(4);
        r = t.readUInt32LE(8);
        t = t.slice(12);
      } else {
        let e = new DataView(t.buffer);
        this.highStart = e.getUint32(0, !0);
        this.errorValue = e.getUint32(4, !0);
        r = e.getUint32(8, !0);
        t = t.subarray(12);
      }
      t = n(t, new Uint8Array(r));
      swap32LE(t = n(t, new Uint8Array(r)));
      this.data = new Uint32Array(t.buffer);
    } else ({
      data: this.data,
      highStart: this.highStart,
      errorValue: this.errorValue
    } = t);
  }
  get(t) {
    let e;
    return t < 0 || t > 1114111 ? this.errorValue : t < 55296 || t > 56319 && t <= 65535 ? (e = (this.data[t >> 5] << 2) + (31 & t), this.data[e]) : t <= 65535 ? (e = (this.data[2048 + (t - 55296 >> 5)] << 2) + (31 & t), this.data[e]) : t < this.highStart ? (e = this.data[2080 + (t >> 11)], e = ((e = this.data[e + (t >> 5 & 63)]) << 2) + (31 & t), this.data[e]) : this.data[this.data.length - 4];
  }
};