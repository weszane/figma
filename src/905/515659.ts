import { inflate } from "src/vendor/323834";
export function $$r2(e) {
  let t = {};
  for (let i of function (e) {
    let t = [];
    let i = 0;
    for (; i < e.length && i + 1 < e.length;) if (255 === e[i] && 226 === e[i + 1]) {
      let n = e.subarray(i);
      let r = n[2] << 8 | n[3];
      let a = n.subarray(4, r + 2);
      t.push(a);
      i += r + 2;
    } else i++;
    return t;
  }(e)) {
    let e = function (e) {
      let t = null;
      let i = {
        begin: 12,
        end: 13
      };
      let n = {
        begin: i.end,
        end: i.end + 1
      };
      let r = {
        begin: n.end,
        end: e.length
      };
      "ICC_PROFILE\0" === String.fromCharCode.apply(null, [...e.subarray(0, 12)]) && r.end <= e.length && (t = {
        markerSeqNumber: e[i.begin],
        totalNumberOfMarkers: e[n.begin],
        iccProfileData: e.subarray(r.begin, r.end)
      });
      return t;
    }(i);
    e && (t[e.markerSeqNumber] = e);
  }
  return function (e) {
    let t = [];
    for (let [i, n] of Object.entries(e)) {
      0 === t.length && (t = Array(n.totalNumberOfMarkers).fill(null));
      t[Number(i) - 1] = n.iccProfileData;
    }
    if (!t.every(Boolean)) return null;
    let i = new Uint8Array(t.reduce((e, t) => e + t.length, 0));
    let n = 0;
    for (let e of t) {
      i.set(e, n);
      n += e.length;
    }
    return i.length ? i : null;
  }(t);
}
export function $$a0(e) {
  let t = 8;
  let i = 0;
  let r = null;
  let a = null;
  let s = new DataView(e.buffer);
  let o = !1;
  for (; t + 12 < e.length;) {
    let l = s.getInt32(t);
    if (l < 0) {
      r && (r = null);
      break;
    }
    let d = s.getInt32(t + 4);
    switch (d) {
      case 0x49444154:
        o = !0;
        r && (r.copyWithin(i, t, e.length), i += e.length - t, r = r.subarray(0, i));
        break;
      case 0x73524742:
      case 0x67414d41:
      case 0x6348524d:
      case 0x69434350:
        if (r || (r = new Uint8Array(e), i = t), 0x69434350 === d && !a) try {
          a = function (e, t) {
            let i = new DataView(e.buffer, t).getUint32(0);
            let r = {
              min: 1,
              max: 79
            };
            let a = t + 4 + 4;
            let s = function () {
              let t = null;
              for (let i = a; i < a + r.max && i < e.length; ++i) if (0 === e[i]) {
                t = i;
                break;
              }
              if (null === t) throw Error("Couldn't find null separator");
              if (0 !== e[t]) throw Error("Null separator is not the null character");
              return t;
            }();
            let o = s + 1;
            if (0 !== e[o]) throw Error("Compression method is not 0 (deflate)");
            let l = s - a;
            if (l < r.min || l > r.max) throw Error(`Profile name length of ${l} isn't between ${r.min} bytes and ${r.max} bytes`);
            let d = o + 1;
            if (8 + i + 4 > e.length - t) throw Error("data is not large enough to contain the entire iCCP chunk");
            let c = e.subarray(d, d + (i - l - 1 - 1));
            return inflate(c);
          }(e, t);
        } catch (e) {}
        break;
      default:
        r && (r.copyWithin(i, t, t + l + 12), i += l + 12);
    }
    if (o) break;
    t += l + 12;
  }
  return {
    withoutColorSpace: r || e,
    iccProfileRawData: a
  };
}
export function $$s1(e) {
  if (71 !== e[0] || 73 !== e[1] || 70 !== e[2] || 56 !== e[3]) return !1;
  let t = !0;
  function i(i) {
    for (; i < e.length;) {
      let n = e[i++];
      if (n > 0) i += n;else if (0 === n) break;else {
        t = !1;
        break;
      }
    }
    return i;
  }
  let n = 0;
  let r = 10;
  let a = e[r++];
  for (r += 2, a >> 7 && (r += (1 << (7 & a) + 1) * 3); t && r < e.length;) switch (e[r++]) {
    case 33:
      switch (e[r++]) {
        case 255:
          11 !== e[r] || 78 == e[r + 1] && 69 == e[r + 2] && 84 == e[r + 3] && 83 == e[r + 4] && 67 == e[r + 5] && 65 == e[r + 6] && 80 == e[r + 7] && 69 == e[r + 8] && 50 == e[r + 9] && 46 == e[r + 10] && 48 == e[r + 11] && 3 == e[r + 12] && 1 == e[r + 13] && 0 == e[r + 16] ? r += 17 : r = i(r + 12);
          break;
        case 249:
          r += 6;
          break;
        case 254:
        case 1:
          r = i(r);
      }
      break;
    case 44:
      if (++n > 1) return !0;
      r += 8;
      let t = e[r++];
      t >> 7 && (r += (1 << (7 & t) + 1) * 3);
      r = i(r + 1);
      break;
    case 59:
      return !1;
  }
  return !1;
}
export const Ll = $$a0;
export const fB = $$s1;
export const yy = $$r2;
