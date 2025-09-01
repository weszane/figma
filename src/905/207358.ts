class n {
  constructor() {
    this.chunks = [];
    this.centralDirectory = [];
    this.encoder = new TextEncoder();
    this.fileCount = 0;
    this.offset = 0;
  }
  static async getZipFileForFiles(e) {
    let t = new n();
    for (let i of e) await t.writeResultFile(i);
    return t.getZipBlob();
  }
  async writeResultFile(e) {
    let t = "string" == typeof e.contents ? this.encoder.encode(e.contents) : new Uint8Array(await e.contents.arrayBuffer());
    await this.writeFile(e.name, t);
    this.fileCount++;
  }
  write(e) {
    this.chunks.push(e);
    this.offset += e.length;
  }
  async compressData(e) {
    let t = new CompressionStream("deflate-raw");
    let i = t.writable.getWriter();
    i.write(e);
    i.close();
    let n = [];
    let r = t.readable.getReader();
    let a = !1;
    for (; !a;) {
      let {
        value,
        done
      } = await r.read();
      done ? a = !0 : n.push(new Uint8Array(value));
    }
    let s = new Uint8Array(n.reduce((e, t) => e + t.length, 0));
    let o = 0;
    for (let e of n) {
      s.set(e, o);
      o += e.length;
    }
    return s;
  }
  async writeFile(e, t) {
    let i = await this.compressData(t);
    let n = function (e) {
      let t = 0xffffffff;
      for (let i of e) {
        t ^= i;
        for (let e = 0; e < 8; e++) t = t >>> 1 ^ 0xedb88320 & -(1 & t);
      }
      return (0xffffffff ^ t) >>> 0;
    }(t);
    let r = i.length;
    let a = t.length;
    let s = this.encoder.encode(e);
    let o = this.offset;
    let l = new Date();
    let d = (l.getHours() << 11 | l.getMinutes() << 5 | l.getSeconds() / 2) & 65535;
    let c = (l.getFullYear() - 1980 << 9 | l.getMonth() + 1 << 5 | l.getDate()) & 65535;
    let u = new Uint8Array(30 + s.length);
    let p = new DataView(u.buffer);
    p.setUint32(0, 0x4034b50, !0);
    p.setUint16(4, 20, !0);
    p.setUint16(6, 0, !0);
    p.setUint16(8, 8, !0);
    p.setUint16(10, d, !0);
    p.setUint16(12, c, !0);
    p.setUint32(14, n, !0);
    p.setUint32(18, r, !0);
    p.setUint32(22, a, !0);
    p.setUint16(26, s.length, !0);
    p.setUint16(28, 0, !0);
    u.set(s, 30);
    this.write(u);
    this.write(i);
    let m = new Uint8Array(46 + s.length);
    let h = new DataView(m.buffer);
    h.setUint32(0, 0x2014b50, !0);
    h.setUint16(4, 20, !0);
    h.setUint16(6, 20, !0);
    h.setUint16(8, 0, !0);
    h.setUint16(10, 8, !0);
    h.setUint16(12, d, !0);
    h.setUint16(14, c, !0);
    h.setUint32(16, n, !0);
    h.setUint32(20, r, !0);
    h.setUint32(24, a, !0);
    h.setUint16(28, s.length, !0);
    h.setUint16(30, 0, !0);
    h.setUint16(32, 0, !0);
    h.setUint16(34, 0, !0);
    h.setUint16(36, 0, !0);
    h.setUint32(38, 0, !0);
    h.setUint32(42, o, !0);
    m.set(s, 46);
    this.centralDirectory.push(m);
  }
  getZipBlob() {
    let e = this.offset;
    for (let e of this.centralDirectory) this.write(e);
    let t = new Uint8Array(22);
    let i = new DataView(t.buffer);
    i.setUint32(0, 0x6054b50, !0);
    i.setUint16(4, 0, !0);
    i.setUint16(6, 0, !0);
    i.setUint16(8, this.fileCount, !0);
    i.setUint16(10, this.fileCount, !0);
    i.setUint32(12, this.offset - e, !0);
    i.setUint32(16, e, !0);
    i.setUint16(20, 0, !0);
    this.write(t);
    return new Blob(this.chunks, {
      type: "application/zip"
    });
  }
}
export let $$r0 = n.getZipFileForFiles;
export const O = $$r0;