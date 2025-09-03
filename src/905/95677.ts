import { x1 } from "../905/714362";
export function $$r0(e) {
  try {
    return new a(e);
  } catch (e) {
    console.warn(`Failure in parsing GIF: ${e}`);
    return null;
  }
}
class a {
  width: number;
  height: number;
  numFrames() {
    return this._frames.length;
  }
  loopCount() {
    return this.loop_count;
  }
  frameInfo(e) {
    if (e < 0 || e >= this._frames.length) throw Error("Frame index out of range.");
    return this._frames[e];
  }
  frameIsFullSized(e) {
    return e.width === this.width && e.height === this.height;
  }
  blitFrame(e, t, i) {
    let r;
    if (e === this.currentFrame) return t;
    if (this.frameNeedsBackfill(e)) {
      if (!this.currentFrame || e < this.currentFrame) for (r = e - 1; r >= 0 && this.frameNeedsBackfill(r);) r--; else r = this.currentFrame;
    } else r = e;
    let a = !1;
    if (0 === r) a = !0; else {
      let e = this.frameInfo(r - 1);
      2 === e.disposal && this.frameIsFullSized(e) && (a = !0);
    }
    a && (t.data.fill(0), i.putImageData(t, 0, 0));
    for (let a = r; a <= e; a++) {
      if (a !== e) {
        if (2 === this.frameInfo(a).disposal) {
          let e = this.frameInfo(a);
          i.clearRect(e.x, e.y, e.width, e.height);
          t = i.getImageData(0, 0, this.width, this.height);
          continue;
        }
        if (3 === this.frameInfo(a).disposal) {
          null === this._tmpBufForLastNonDisposedFrame && (x1("gif", "Found null array for last non-disposed frame for GIF with disposal = 3"), this._tmpBufForLastNonDisposedFrame = new Uint8Array(this.width * this.height * 4));
          t.data.set(this._tmpBufForLastNonDisposedFrame);
          i.putImageData(t, 0, 0);
          continue;
        }
      }
      this.decodeAndBlitFrameRGBA(a, t.data);
      i.putImageData(t, 0, 0);
      this._needsLastNonDisposedFrame && (0 === a || this.frameInfo(a).disposal < 2) && this._tmpIdxForNonDisposedFrame !== a && (null === this._tmpBufForLastNonDisposedFrame && (x1("gif", "Found null array for last non-disposed frame for GIF with disposal = 3"), this._tmpBufForLastNonDisposedFrame = new Uint8Array(this.width * this.height * 4)), 0 === a && this.frameInfo(a).disposal >= 2 ? this._tmpBufForLastNonDisposedFrame.fill(0) : this._tmpBufForLastNonDisposedFrame.set(t.data), this._tmpIdxForNonDisposedFrame = a);
    }
    this.currentFrame = e;
    return t;
  }
  frameNeedsBackfill(e) {
    if (0 === e) return !1;
    let t = this.frameInfo(e);
    if (null === t.transparent_index && this.frameIsFullSized(t)) return !1;
    let i = this.frameInfo(e - 1);
    return !this.frameIsFullSized(i) || 2 !== i.disposal;
  }
  constructor(e) {
    this.currentFrame = null;
    this.buf = e;
    var t = 0;
    if (71 !== e[t++] || 73 !== e[t++] || 70 !== e[t++] || 56 !== e[t++] || (e[t++] + 1 & 253) != 56 || 97 !== e[t++]) throw Error("Invalid GIF 87a/89a header.");
    this.width = e[t++] | e[t++] << 8;
    this.height = e[t++] | e[t++] << 8;
    var i = e[t++];
    var n = 1 << (7 & i) + 1;
    t += 2;
    var r = null;
    var a = null;
    i >> 7 && (r = t, a = n, t += 3 * n);
    var s = !0;
    this._frames = [];
    this._needsLastNonDisposedFrame = !1;
    this._tmpIdxForNonDisposedFrame = -1;
    for (o = 0, l = null, d = 0, void 0; s && t < e.length;) {
      var o;
      var l;
      var d;
      switch (e[t++]) {
        case 33:
          switch (e[t++]) {
            case 255:
              if (11 !== e[t] || 78 === e[t + 1] && 69 === e[t + 2] && 84 === e[t + 3] && 83 === e[t + 4] && 67 === e[t + 5] && 65 === e[t + 6] && 80 === e[t + 7] && 69 === e[t + 8] && 50 === e[t + 9] && 46 === e[t + 10] && 48 === e[t + 11] && 3 === e[t + 12] && 1 === e[t + 13] && 0 === e[t + 16]) {
                t += 14;
                this.loop_count = e[t++] | e[t++] << 8;
                t++;
              } else for (t += 12; ;) {
                var c = e[t++];
                if (!(c >= 0)) throw Error("Invalid block size");
                if (0 === c) break;
                t += c;
              }
              break;
            case 249:
              if (4 !== e[t++] || 0 !== e[t + 4]) throw Error("Invalid graphics extension block.");
              var u = e[t++];
              o = e[t++] | e[t++] << 8;
              l = e[t++];
              (1 & u) == 0 && (l = null);
              d = u >> 2 & 7;
              this._needsLastNonDisposedFrame || 3 !== d || (this._needsLastNonDisposedFrame = !0, this._tmpBufForLastNonDisposedFrame = new Uint8Array(this.width * this.height * 4));
              t++;
              break;
            case 254:
            case 1:
              for (; ;) {
                var p = e[t++];
                if (!(p >= 0)) throw Error("Invalid block size");
                if (0 === p) break;
                t += p;
              }
              break;
            default:
              throw Error("Unknown graphic control label: 0x" + e[t - 1].toString(16));
          }
          break;
        case 44:
          var m = e[t++] | e[t++] << 8;
          var h = e[t++] | e[t++] << 8;
          var g = e[t++] | e[t++] << 8;
          var f = e[t++] | e[t++] << 8;
          var _ = e[t++];
          var A = _ >> 7;
          var y = _ >> 6 & 1;
          var b = 1 << (7 & _) + 1;
          var v = r;
          var I = a;
          var E = !1;
          A && (E = !0, v = t, I = b, t += 3 * b);
          var x = t;
          var S = !1;
          for (t++; ;) {
            var w = e[t++];
            if (void 0 === w) {
              S = !0;
              break;
            }
            if (!(w >= 0)) throw Error("Invalid block size");
            if (0 === w) break;
            t += w;
          }
          S || this._frames.push({
            x: m,
            y: h,
            width: g,
            height: f,
            has_local_palette: E,
            palette_offset: v,
            palette_size: I,
            data_offset: x,
            data_length: t - x,
            transparent_index: l,
            interlaced: !!y,
            delay: o,
            disposal: d
          });
          break;
        case 59:
          s = !1;
          break;
        default:
          throw Error("Unknown gif block: 0x" + e[t - 1].toString(16));
      }
    }
  }
  decodeAndBlitFrameRGBA(e, t) {
    var i = this.frameInfo(e);
    var n = i.width * i.height;
    var r = new Uint8Array(n);
    this.GifReaderLZWOutputIndexStream(i.data_offset, r, n);
    var a = i.palette_offset;
    var s = i.transparent_index;
    null === s && (s = 256);
    var o = i.width;
    var l = this.width - o;
    var d = o;
    var c = (i.y * this.width + i.x) * 4;
    var u = ((i.y + i.height) * this.width - (this.width - i.width - i.x)) * 4;
    var p = c;
    var m = 4 * l;
    !0 === i.interlaced && (m += 28 * this.width);
    for (h = 8, g = 0, f = r.length, void 0; g < f; ++g) {
      var h;
      var g;
      var f;
      var _ = r[g];
      if (0 === d && (p += m, d = o, p >= u && (m = 4 * l + 4 * this.width * (h - 1), p = c + (o + l) * (h << 1), h >>= 1)), _ === s) p += 4; else {
        var A = this.buf[a + 3 * _];
        var y = this.buf[a + 3 * _ + 1];
        var b = this.buf[a + 3 * _ + 2];
        t[p++] = A;
        t[p++] = y;
        t[p++] = b;
        t[p++] = 255;
      }
      --d;
    }
  }
  GifReaderLZWOutputIndexStream(e, t, i) {
    for (n = this.buf[e++], r = 1 << n, a = r + 1, s = a + 1, o = n + 1, l = (1 << o) - 1, d = 0, c = 0, u = 0, p = this.buf[e++], m = new Int32Array(4096), h = null, void 0; ;) {
      var n;
      var r;
      var a;
      var s;
      var o;
      var l;
      var d;
      var c;
      var u;
      var p;
      var m;
      var h;
      for (; d < 16 && 0 !== p;) {
        c |= this.buf[e++] << d;
        d += 8;
        1 === p ? p = this.buf[e++] : --p;
      }
      if (d < o) break;
      var g = c & l;
      if (c >>= o, d -= o, g === r) {
        s = a + 1;
        l = (1 << (o = n + 1)) - 1;
        h = null;
        continue;
      }
      if (g === a) break;
      for (f = g < s ? g : h, _ = 0, A = f, void 0; A > r;) {
        var f;
        var _;
        var A;
        A = m[A] >> 8;
        ++_;
      }
      var y = A;
      if (u + _ + (f !== g ? 1 : 0) > i) {
        console.warn("Warning, gif stream longer than expected.");
        return;
      }
      t[u++] = y;
      var b = u += _;
      for (f !== g && (t[u++] = y), A = f; _--;) {
        A = m[A];
        t[--b] = 255 & A;
        A >>= 8;
      }
      null !== h && s < 4096 && (m[s++] = h << 8 | y, s >= l + 1 && o < 12 && (++o, l = l << 1 | 1));
      h = g;
    }
    u !== i && console.warn("Warning, gif stream shorter than expected.");
    return t;
  }
}
export const J = $$r0;
