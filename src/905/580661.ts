var $$n0 = (e => (e[e.ROTATE_0 = 0] = "ROTATE_0", e[e.ROTATE_90 = 1] = "ROTATE_90", e[e.ROTATE_180 = 2] = "ROTATE_180", e[e.ROTATE_270 = 3] = "ROTATE_270", e[e.FLIP_ROTATE_0 = 4] = "FLIP_ROTATE_0", e[e.FLIP_ROTATE_90 = 5] = "FLIP_ROTATE_90", e[e.FLIP_ROTATE_180 = 6] = "FLIP_ROTATE_180", e[e.FLIP_ROTATE_270 = 7] = "FLIP_ROTATE_270", e))($$n0 || {});
var r = (e => (e[e.BIG = 0] = "BIG", e[e.LITTLE = 1] = "LITTLE", e))(r || {});
function $$a(e, t, i) {
  if (t.value + 2 > e.length) return null;
  let n = e[t.value];
  let r = e[t.value + 1];
  t.value += 2;
  return {
    value: 1 == i ? n | r << 8 : r | n << 8
  };
}
function s(e, t, i) {
  if (t.value + 2 > e.length) return null;
  let n = e[t.value];
  let r = e[t.value + 1];
  let a = e[t.value + 2];
  let s = e[t.value + 3];
  t.value += 4;
  return {
    value: 1 == i ? n | r << 8 | a << 16 | s << 24 : s | a << 8 | r << 16 | n << 24
  };
}
export let $$o1 = {
  getOrientation: e => function (e) {
    let t = [255, 216, 255];
    if (e.length < t.length) return null;
    for (let i = 0; i < t.length; i++) if (t[i] != e[i]) return null;
    let i = {
      value: 2
    };
    for (; i.value + 4 <= e.length;) {
      let t = $$a(e, i, 0);
      if (null == t || t.value >> 8 != 255) break;
      let n = $$a(e, i, 0);
      if (null == n || n.value < 2) break;
      if (i.value -= 2, 65505 == t.value) return function (e, t) {
        let i = {
          value: t
        };
        let n = $$a(e, i, 0);
        if (null == n || n.value < 6) return null;
        let r = s(e, i, 0);
        if (null == r || 0x45786966 != r.value) return null;
        let o = $$a(e, i, 0);
        if (null == o || 0 != o.value) return null;
        let l = s(e, i, 0);
        if (null == l || 0x49492a00 != l.value && 0x4d4d002a != l.value) return null;
        let d = 0x49492a00 == l.value ? 1 : 0;
        let c = s(e, i, d);
        if (null == c) return null;
        i.value = i.value + c.value - 8;
        let u = $$a(e, i, d);
        if (null == u) return null;
        let p = u.value;
        let m = -1;
        for (let t = 0; t < p; t++) {
          let t = $$a(e, i, d);
          if (null == t) break;
          let n = t.value;
          let r = $$a(e, i, d);
          if (null == r) break;
          let o = r.value;
          let l = s(e, i, d);
          if (null == l) break;
          let c = l.value;
          let u = {
            value: i.value
          };
          if (i.value += 4, 274 == n && 1 == c) {
            if (1 == o) {
              let t = function (e, t) {
                if (t.value + 1 > e.length) return null;
                let i = {
                  value: e[t.value]
                };
                t.value += 1;
                return i;
              }(e, u);
              if (null == t) return null;
              m = t.value;
            } else if (3 == o) {
              let t = $$a(e, u, d);
              if (null == t) return null;
              m = t.value;
            } else {
              if (4 != o && 9 != o) continue;
              let t = s(e, u, d);
              if (null == t) return null;
              m = t.value;
            }
            switch (m) {
              case 1:
                return 0;
              case 6:
                return 1;
              case 3:
                return 2;
              case 8:
                return 3;
              case 2:
                return 4;
              case 5:
                return 5;
              case 4:
                return 6;
              case 7:
                return 7;
            }
          }
        }
        return null;
      }(e, i.value);
      i.value += n.value;
    }
    return null;
  }(e),
  angleFromOrientation(e) {
    switch (e) {
      case 0:
      case 4:
      default:
        return 0;
      case 1:
      case 5:
        return 90;
      case 2:
      case 6:
        return 180;
      case 3:
      case 7:
        return 270;
    }
  },
  orientationIsFlipped: e => 4 === e || 5 === e || 6 === e || 7 === e
};
export const a = $$n0;
export const f = $$o1;