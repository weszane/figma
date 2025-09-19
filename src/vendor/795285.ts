var r;
var n;
var s;
var a;
var o;
var h;
var u;
var l;
var f;
var d;
var c;
var p;
var m;
var g;
var _;
var y;
var v;
var k;
var w;
var b;
var C;
var E;
var x;
var S;
var R;
var O;
var ImageDownloadQueue;
var M;
var T;
var L;
var I;
var W;
var D;
var z;
var F = (e, t, i) => {
  if (!t.has(e)) throw TypeError("Cannot " + i);
};
var U = (e, t, i) => (F(e, t, "read from private field"), i ? i.call(e) : t.get(e));
var P = (e, t, i) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, i);
};
var j = (e, t, i, r) => (F(e, t, "write to private field"), r ? r.call(e, i) : t.set(e, i), i);
var B = (e, t, i) => (F(e, t, "access private method"), i);
var q = new Uint8Array(8);
var H = new DataView(q.buffer);
var N = e => [(e % 256 + 256) % 256];
var K = e => (H.setUint16(0, e, !1), [q[0], q[1]]);
var Q = e => (H.setInt16(0, e, !1), [q[0], q[1]]);
var J = e => (H.setUint32(0, e, !1), [q[1], q[2], q[3]]);
var $ = e => (H.setUint32(0, e, !1), [q[0], q[1], q[2], q[3]]);
var Z = e => (H.setUint32(0, Math.floor(e / 0x100000000), !1), H.setUint32(4, e, !1), [q[0], q[1], q[2], q[3], q[4], q[5], q[6], q[7]]);
var G = e => (H.setInt16(0, 256 * e, !1), [q[0], q[1]]);
var V = e => (H.setInt32(0, 65536 * e, !1), [q[0], q[1], q[2], q[3]]);
var Y = e => (H.setInt32(0, 0x40000000 * e, !1), [q[0], q[1], q[2], q[3]]);
var X = (e, t = !1) => {
  let i = Array(e.length).fill(null).map((t, i) => e.charCodeAt(i));
  t && i.push(0);
  return i;
};
var ee = e => e && e[e.length - 1];
var et = (e, t, i = !0) => {
  let r = e * t;
  return i ? Math.round(r) : r;
};
var ei = e => {
  let t = Math.PI / 180 * e;
  let i = Math.cos(t);
  let r = Math.sin(t);
  return [i, r, 0, -r, i, 0, 0, 0, 1];
};
var er = ei(0);
var en = e => [V(e[0]), V(e[1]), Y(e[2]), V(e[3]), V(e[4]), Y(e[5]), V(e[6]), V(e[7]), Y(e[8])];
var es = e => e && "object" == typeof e ? Array.isArray(e) ? e.map(es) : Object.fromEntries(Object.entries(e).map(([e, t]) => [e, es(t)])) : e;
var ea = (e, t, i) => ({
  type: e,
  contents: t && new Uint8Array(t.flat(10)),
  children: i
});
var eo = (e, t, i, r, n) => ea(e, [N(t), J(i), r ?? []], n);
var eh = (e, t) => {
  let i = ee(e.samples);
  let r = et(i ? i.timestamp + i.duration : 0, eI);
  return eo("tkhd", 0, 3, [$(t), $(t), $(e.id), $(0), $(r), Array(8).fill(0), K(0), K(0), G("audio" === e.info.type ? 1 : 0), K(0), en(ei("video" === e.info.type ? e.info.rotation : 0)), V("video" === e.info.type ? e.info.width : 0), V("video" === e.info.type ? e.info.height : 0)]);
};
var eu = (e, t) => ea("mdia", null, [el(e, t), ef("video" === e.info.type ? "vide" : "soun"), ed(e)]);
var el = (e, t) => {
  let i = ee(e.samples);
  let r = et(i ? i.timestamp + i.duration : 0, e.timescale);
  return eo("mdhd", 0, 0, [$(t), $(t), $(e.timescale), $(r), K(21956), K(0)]);
};
var ef = e => eo("hdlr", 0, 0, [X("mhlr"), X(e), $(0), $(0), $(0), X("mp4-muxer-hdlr")]);
var ed = e => ea("minf", null, ["video" === e.info.type ? ec() : ep(), em(), ey(e)]);
var ec = () => eo("vmhd", 0, 1, [K(0), K(0), K(0), K(0)]);
var ep = () => eo("smhd", 0, 0, [K(0), K(0)]);
var em = () => ea("dinf", null, [eg()]);
var eg = () => eo("dref", 0, 0, [$(1)], [e_()]);
var e_ = () => eo("url ", 0, 1);
var ey = e => ea("stbl", null, [ev(e), eb(e), eC(e), eE(e), ex(e), eS(e)]);
var ev = e => eo("stsd", 0, 0, [$(1)], ["video" === e.info.type ? ek(eR[e.info.codec], e) : ew(eA[e.info.codec], e)]);
var ek = (e, t) => ea(e, [Array(6).fill(0), K(1), K(0), K(0), Array(12).fill(0), K(t.info.width), K(t.info.height), $(4718592), $(4718592), $(0), K(1), Array(32).fill(0), K(24), Q(65535)], [eO[t.info.codec](t)]);
var ew = (e, t) => ea(e, [Array(6).fill(0), K(1), K(0), K(0), $(0), K(t.info.numberOfChannels), K(16), K(0), K(0), V(t.info.sampleRate)], [eM[t.info.codec](t)]);
var eb = e => eo("stts", 0, 0, [$(e.timeToSampleTable.length), e.timeToSampleTable.map(e => [$(e.sampleCount), $(e.sampleDelta)])]);
var eC = e => {
  if (e.samples.every(e => "key" === e.type)) return null;
  let t = [...e.samples.entries()].filter(([, e]) => "key" === e.type);
  return eo("stss", 0, 0, [$(t.length), t.map(([e]) => $(e + 1))]);
};
var eE = e => eo("stsc", 0, 0, [$(e.compactlyCodedChunkTable.length), e.compactlyCodedChunkTable.map(e => [$(e.firstChunk), $(e.samplesPerChunk), $(1)])]);
var ex = e => eo("stsz", 0, 0, [$(0), $(e.samples.length), e.samples.map(e => $(e.size))]);
var eS = e => e.finalizedChunks.length > 0 && ee(e.finalizedChunks).offset >= 0x100000000 ? eo("co64", 0, 0, [$(e.finalizedChunks.length), e.finalizedChunks.map(e => Z(e.offset))]) : eo("stco", 0, 0, [$(e.finalizedChunks.length), e.finalizedChunks.map(e => $(e.offset))]);
var eR = {
  avc: "avc1",
  hevc: "hvc1",
  vp9: "vp09",
  av1: "av01"
};
var eO = {
  avc: e => e.codecPrivate && ea("avcC", [...e.codecPrivate]),
  hevc: e => e.codecPrivate && ea("hvcC", [...e.codecPrivate]),
  vp9: e => e.codecPrivate && ea("vpcC", [...e.codecPrivate]),
  av1: e => e.codecPrivate && ea("av1C", [...e.codecPrivate])
};
var eA = {
  aac: "mp4a",
  opus: "Opus"
};
var eM = {
  aac: e => eo("esds", 0, 0, [$(0x3808080), N(32 + e.codecPrivate.byteLength), K(1), N(0), $(0x4808080), N(18 + e.codecPrivate.byteLength), N(64), N(21), J(0), $(130071), $(130071), $(0x5808080), N(e.codecPrivate.byteLength), ...e.codecPrivate, $(0x6808080), N(1), N(2)]),
  opus: e => ea("dOps", [N(0), N(e.info.numberOfChannels), K(3840), $(e.info.sampleRate), G(0), N(0)])
};
var eT = class {
  constructor() {
    this.pos = 0;
    P(this, r, new Uint8Array(8));
    P(this, n, new DataView(U(this, r).buffer));
    this.offsets = new WeakMap();
  }
  seek(e) {
    this.pos = e;
  }
  writeU32(e) {
    U(this, n).setUint32(0, e, !1);
    this.write(U(this, r).subarray(0, 4));
  }
  writeU64(e) {
    U(this, n).setUint32(0, Math.floor(e / 0x100000000), !1);
    U(this, n).setUint32(4, e, !1);
    this.write(U(this, r).subarray(0, 8));
  }
  writeAscii(e) {
    for (let t = 0; t < e.length; t++) {
      U(this, n).setUint8(t % 8, e.charCodeAt(t));
      t % 8 == 7 && this.write(U(this, r));
    }
    e.length % 8 != 0 && this.write(U(this, r).subarray(0, e.length % 8));
  }
  writeBox(e) {
    if (this.offsets.set(e, this.pos), e.contents && !e.children) {
      this.writeBoxHeader(e, e.size ?? e.contents.byteLength + 8);
      this.write(e.contents);
    } else {
      let t = this.pos;
      if (this.writeBoxHeader(e, 0), e.contents && this.write(e.contents), e.children) for (let t of e.children) t && this.writeBox(t);
      let i = this.pos;
      let r = e.size ?? i - t;
      this.seek(t);
      this.writeBoxHeader(e, r);
      this.seek(i);
    }
  }
  writeBoxHeader(e, t) {
    this.writeU32(e.largeSize ? 1 : t);
    this.writeAscii(e.type);
    e.largeSize && this.writeU64(t);
  }
  measureBoxHeader(e) {
    return 8 + (e.largeSize ? 8 : 0);
  }
  patchBox(e) {
    let t = this.pos;
    this.seek(this.offsets.get(e));
    this.writeBox(e);
    this.seek(t);
  }
  measureBox(e) {
    if (e.contents && !e.children) return this.measureBoxHeader(e) + e.contents.byteLength;
    {
      let t = this.measureBoxHeader(e);
      if (e.contents && (t += e.contents.byteLength), e.children) for (let i of e.children) i && (t += this.measureBox(i));
      return t;
    }
  }
};
r = new WeakMap();
n = new WeakMap();
new WeakMap();
a = new WeakMap();
o = new WeakMap();
new WeakMap();
new WeakSet();
var eL = class extends eT {
  constructor(e) {
    super();
    P(this, l, void 0);
    P(this, f, []);
    j(this, l, e);
  }
  write(e) {
    U(this, f).push({
      data: e.slice(),
      start: this.pos
    });
    this.pos += e.byteLength;
  }
  flush() {
    if (0 === U(this, f).length) return;
    let e = [];
    let t = [...U(this, f)].sort((e, t) => e.start - t.start);
    e.push({
      start: t[0].start,
      size: t[0].data.byteLength
    });
    for (let i = 1; i < t.length; i++) {
      let r = e[e.length - 1];
      let n = t[i];
      n.start <= r.start + r.size ? r.size = Math.max(r.size, n.start + n.data.byteLength - r.start) : e.push({
        start: n.start,
        size: n.data.byteLength
      });
    }
    for (let t of e) {
      for (let e of (t.data = new Uint8Array(t.size), U(this, f))) t.start <= e.start && e.start < t.start + t.size && t.data.set(e.data, e.start - t.start);
      U(this, l).onData(t.data, t.start);
    }
    U(this, f).length = 0;
  }
  finalize() {
    U(this, l).onDone?.();
  }
};
l = new WeakMap();
f = new WeakMap();
d = new WeakMap();
c = new WeakMap();
p = new WeakMap();
m = new WeakSet();
g = function (e, t) {
  let i = U(this, p).findIndex(e => e.start <= t && t < e.start + U(this, c));
  -1 === i && (i = B(this, v, k).call(this, t));
  let r = U(this, p)[i];
  let n = t - r.start;
  let s = e.subarray(0, Math.min(U(this, c) - n, e.byteLength));
  r.data.set(s, n);
  let a = {
    start: n,
    end: n + s.byteLength
  };
  if (B(this, _, y).call(this, r, a), 0 === r.written[0].start && r.written[0].end === U(this, c) && (r.shouldFlush = !0), U(this, p).length > 2) {
    for (let e = 0; e < U(this, p).length - 1; e++) U(this, p)[e].shouldFlush = !0;
    B(this, w, b).call(this);
  }
  s.byteLength < e.byteLength && B(this, m, g).call(this, e.subarray(s.byteLength), t + s.byteLength);
};
_ = new WeakSet();
y = function (e, t) {
  let i = 0;
  let r = e.written.length - 1;
  let n = -1;
  for (; i <= r;) {
    let s = Math.floor(i + (r - i + 1) / 2);
    e.written[s].start <= t.start ? (i = s + 1, n = s) : r = s - 1;
  }
  for (e.written.splice(n + 1, 0, t), (-1 === n || e.written[n].end < t.start) && n++; n < e.written.length - 1 && e.written[n].end >= e.written[n + 1].start;) {
    e.written[n].end = Math.max(e.written[n].end, e.written[n + 1].end);
    e.written.splice(n + 1, 1);
  }
};
v = new WeakSet();
k = function (e) {
  let t = {
    start: Math.floor(e / U(this, c)) * U(this, c),
    data: new Uint8Array(U(this, c)),
    written: [],
    shouldFlush: !1
  };
  U(this, p).push(t);
  U(this, p).sort((e, t) => e.start - t.start);
  return U(this, p).indexOf(t);
};
w = new WeakSet();
b = function (e = !1) {
  for (let t = 0; t < U(this, p).length; t++) {
    let i = U(this, p)[t];
    if (i.shouldFlush || e) {
      for (let e of i.written) U(this, d).onData(i.data.subarray(e.start, e.end), i.start + e.start);
      U(this, p).splice(t--, 1);
    }
  }
};
var eI = 1e3;
C = new WeakMap();
E = new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
new WeakMap();
ImageDownloadQueue = new WeakMap();
new WeakMap();
new WeakSet();
new WeakSet();
new WeakSet();
new WeakSet();
new WeakSet();
new WeakSet();
new WeakSet();
new WeakSet();
D = new WeakSet();
z = function () {
  U(this, E) instanceof eL && U(this, E).flush();
};
new WeakSet();
