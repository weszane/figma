import i, { A } from "../vendor/891206";
import s, { A as _$$A } from "../vendor/74176";
import { A as _$$A2 } from "../vendor/134496";
function a(e, r) {
  let n = 0;
  return Math.abs(e) > Math.abs(r) ? (n = r / e, Math.abs(e) * Math.sqrt(1 + n * n)) : 0 !== r ? (n = e / r, Math.abs(r) * Math.sqrt(1 + n * n)) : 0;
}
class h {
  constructor(e) {
    let r;
    let n;
    let i;
    let s;
    let h = (e = _$$A2.checkMatrix(e)).clone();
    let d = e.rows;
    let p = e.columns;
    let g = new Float64Array(p);
    for (i = 0; i < p; i++) {
      let e = 0;
      for (r = i; r < d; r++) e = a(e, h.get(r, i));
      if (0 !== e) {
        for (0 > h.get(i, i) && (e = -e), r = i; r < d; r++) h.set(r, i, h.get(r, i) / e);
        for (h.set(i, i, h.get(i, i) + 1), n = i + 1; n < p; n++) {
          for (s = 0, r = i; r < d; r++) s += h.get(r, i) * h.get(r, n);
          for (s = -s / h.get(i, i), r = i; r < d; r++) h.set(r, n, h.get(r, n) + s * h.get(r, i));
        }
      }
      g[i] = -e;
    }
    this.QR = h;
    this.Rdiag = g;
  }
  solve(e) {
    let r;
    let n;
    let i;
    let o;
    e = _$$A.checkMatrix(e);
    let a = this.QR;
    let h = a.rows;
    if (e.rows !== h) throw Error("Matrix row dimensions must agree");
    if (!this.isFullRank()) throw Error("Matrix is rank deficient");
    let d = e.columns;
    let p = e.clone();
    let g = a.columns;
    for (i = 0; i < g; i++) for (n = 0; n < d; n++) {
      for (o = 0, r = i; r < h; r++) o += a.get(r, i) * p.get(r, n);
      for (o = -o / a.get(i, i), r = i; r < h; r++) p.set(r, n, p.get(r, n) + o * a.get(r, i));
    }
    for (i = g - 1; i >= 0; i--) {
      for (n = 0; n < d; n++) p.set(i, n, p.get(i, n) / this.Rdiag[i]);
      for (r = 0; r < i; r++) for (n = 0; n < d; n++) p.set(r, n, p.get(r, n) - p.get(i, n) * a.get(r, i));
    }
    return p.subMatrix(0, g - 1, 0, d - 1);
  }
  isFullRank() {
    let e = this.QR.columns;
    for (let r = 0; r < e; r++) if (0 === this.Rdiag[r]) return !1;
    return !0;
  }
  get upperTriangularMatrix() {
    let e;
    let r;
    let n = this.QR;
    let i = n.columns;
    let o = new _$$A(i, i);
    for (e = 0; e < i; e++) for (r = 0; r < i; r++) e < r ? o.set(e, r, n.get(e, r)) : e === r ? o.set(e, r, this.Rdiag[e]) : o.set(e, r, 0);
    return o;
  }
  get orthogonalMatrix() {
    let e;
    let r;
    let n;
    let i;
    let o = this.QR;
    let a = o.rows;
    let h = o.columns;
    let d = new _$$A(a, h);
    for (n = h - 1; n >= 0; n--) {
      for (e = 0; e < a; e++) d.set(e, n, 0);
      for (d.set(n, n, 1), r = n; r < h; r++) if (0 !== o.get(n, n)) {
        for (i = 0, e = n; e < a; e++) i += o.get(e, n) * d.get(e, r);
        for (i = -i / o.get(n, n), e = n; e < a; e++) d.set(e, r, d.get(e, r) + i * o.get(e, n));
      }
    }
    return d;
  }
}
class d {
  constructor(e, r = {}) {
    let n;
    if ((e = _$$A2.checkMatrix(e)).isEmpty()) throw Error("Matrix must be non-empty");
    let i = e.rows;
    let h = e.columns;
    let {
      computeLeftSingularVectors = !0,
      computeRightSingularVectors = !0,
      autoTranspose = !1
    } = r;
    let m = !!computeLeftSingularVectors;
    let v = !!computeRightSingularVectors;
    let y = !1;
    if (i < h) {
      if (autoTranspose) {
        i = (n = e.transpose()).rows;
        h = n.columns;
        y = !0;
        let r = m;
        m = v;
        v = r;
      } else {
        n = e.clone();
        console.warn("Computing SVD on a matrix with more columns than rows. Consider enabling autoTranspose");
      }
    } else n = e.clone();
    let b = Math.min(i, h);
    let O = Math.min(i + 1, h);
    let x = new Float64Array(O);
    let w = new _$$A(i, b);
    let k = new _$$A(h, h);
    let _ = new Float64Array(h);
    let S = new Float64Array(i);
    let E = new Float64Array(O);
    for (let e = 0; e < O; e++) E[e] = e;
    let A = Math.min(i - 1, h);
    let C = Math.max(0, Math.min(h - 2, i));
    let T = Math.max(A, C);
    for (let e = 0; e < T; e++) {
      if (e < A) {
        x[e] = 0;
        for (let r = e; r < i; r++) x[e] = a(x[e], n.get(r, e));
        if (0 !== x[e]) {
          0 > n.get(e, e) && (x[e] = -x[e]);
          for (let r = e; r < i; r++) n.set(r, e, n.get(r, e) / x[e]);
          n.set(e, e, n.get(e, e) + 1);
        }
        x[e] = -x[e];
      }
      for (let r = e + 1; r < h; r++) {
        if (e < A && 0 !== x[e]) {
          let s = 0;
          for (let o = e; o < i; o++) s += n.get(o, e) * n.get(o, r);
          s = -s / n.get(e, e);
          for (let o = e; o < i; o++) n.set(o, r, n.get(o, r) + s * n.get(o, e));
        }
        _[r] = n.get(e, r);
      }
      if (m && e < A) for (let r = e; r < i; r++) w.set(r, e, n.get(r, e));
      if (e < C) {
        _[e] = 0;
        for (let r = e + 1; r < h; r++) _[e] = a(_[e], _[r]);
        if (0 !== _[e]) {
          _[e + 1] < 0 && (_[e] = 0 - _[e]);
          for (let r = e + 1; r < h; r++) _[r] /= _[e];
          _[e + 1] += 1;
        }
        if (_[e] = -_[e], e + 1 < i && 0 !== _[e]) {
          for (let r = e + 1; r < i; r++) S[r] = 0;
          for (let r = e + 1; r < i; r++) for (let i = e + 1; i < h; i++) S[r] += _[i] * n.get(r, i);
          for (let r = e + 1; r < h; r++) {
            let s = -_[r] / _[e + 1];
            for (let o = e + 1; o < i; o++) n.set(o, r, n.get(o, r) + s * S[o]);
          }
        }
        if (v) for (let r = e + 1; r < h; r++) k.set(r, e, _[r]);
      }
    }
    let I = Math.min(h, i + 1);
    if (A < h && (x[A] = n.get(A, A)), i < I && (x[I - 1] = 0), C + 1 < I && (_[C] = n.get(C, I - 1)), _[I - 1] = 0, m) {
      for (let e = A; e < b; e++) {
        for (let r = 0; r < i; r++) w.set(r, e, 0);
        w.set(e, e, 1);
      }
      for (let e = A - 1; e >= 0; e--) if (0 !== x[e]) {
        for (let r = e + 1; r < b; r++) {
          let n = 0;
          for (let s = e; s < i; s++) n += w.get(s, e) * w.get(s, r);
          n = -n / w.get(e, e);
          for (let s = e; s < i; s++) w.set(s, r, w.get(s, r) + n * w.get(s, e));
        }
        for (let r = e; r < i; r++) w.set(r, e, -w.get(r, e));
        w.set(e, e, 1 + w.get(e, e));
        for (let r = 0; r < e - 1; r++) w.set(r, e, 0);
      } else {
        for (let r = 0; r < i; r++) w.set(r, e, 0);
        w.set(e, e, 1);
      }
    }
    if (v) for (let e = h - 1; e >= 0; e--) {
      if (e < C && 0 !== _[e]) for (let r = e + 1; r < h; r++) {
        let n = 0;
        for (let i = e + 1; i < h; i++) n += k.get(i, e) * k.get(i, r);
        n = -n / k.get(e + 1, e);
        for (let i = e + 1; i < h; i++) k.set(i, r, k.get(i, r) + n * k.get(i, e));
      }
      for (let r = 0; r < h; r++) k.set(r, e, 0);
      k.set(e, e, 1);
    }
    let P = I - 1;
    let R = 0;
    let M = Number.EPSILON;
    for (; I > 0;) {
      let e;
      let r;
      for (e = I - 2; e >= -1 && -1 !== e; e--) {
        let r = Number.MIN_VALUE + M * Math.abs(x[e] + Math.abs(x[e + 1]));
        if (Math.abs(_[e]) <= r || Number.isNaN(_[e])) {
          _[e] = 0;
          break;
        }
      }
      if (e === I - 2) r = 4;else {
        let n;
        for (n = I - 1; n >= e && n !== e; n--) {
          let r = (n !== I ? Math.abs(_[n]) : 0) + (n !== e + 1 ? Math.abs(_[n - 1]) : 0);
          if (Math.abs(x[n]) <= M * r) {
            x[n] = 0;
            break;
          }
        }
        n === e ? r = 3 : n === I - 1 ? r = 1 : (r = 2, e = n);
      }
      switch (e++, r) {
        case 1:
          {
            let r = _[I - 2];
            _[I - 2] = 0;
            for (let n = I - 2; n >= e; n--) {
              let i = a(x[n], r);
              let s = x[n] / i;
              let o = r / i;
              if (x[n] = i, n !== e && (r = -o * _[n - 1], _[n - 1] = s * _[n - 1]), v) for (let e = 0; e < h; e++) {
                i = s * k.get(e, n) + o * k.get(e, I - 1);
                k.set(e, I - 1, -o * k.get(e, n) + s * k.get(e, I - 1));
                k.set(e, n, i);
              }
            }
            break;
          }
        case 2:
          {
            let r = _[e - 1];
            _[e - 1] = 0;
            for (let n = e; n < I; n++) {
              let s = a(x[n], r);
              let o = x[n] / s;
              let h = r / s;
              if (x[n] = s, r = -h * _[n], _[n] = o * _[n], m) for (let r = 0; r < i; r++) {
                s = o * w.get(r, n) + h * w.get(r, e - 1);
                w.set(r, e - 1, -h * w.get(r, n) + o * w.get(r, e - 1));
                w.set(r, n, s);
              }
            }
            break;
          }
        case 3:
          {
            let r = Math.max(Math.abs(x[I - 1]), Math.abs(x[I - 2]), Math.abs(_[I - 2]), Math.abs(x[e]), Math.abs(_[e]));
            let n = x[I - 1] / r;
            let s = x[I - 2] / r;
            let o = _[I - 2] / r;
            let d = x[e] / r;
            let p = _[e] / r;
            let g = ((s + n) * (s - n) + o * o) / 2;
            let y = n * o * (n * o);
            let b = 0;
            (0 !== g || 0 !== y) && (b = g < 0 ? 0 - Math.sqrt(g * g + y) : Math.sqrt(g * g + y), b = y / (g + b));
            let O = (d + n) * (d - n) + b;
            let S = d * p;
            for (let r = e; r < I - 1; r++) {
              let n = a(O, S);
              0 === n && (n = Number.MIN_VALUE);
              let s = O / n;
              let o = S / n;
              if (r !== e && (_[r - 1] = n), O = s * x[r] + o * _[r], _[r] = s * _[r] - o * x[r], S = o * x[r + 1], x[r + 1] = s * x[r + 1], v) for (let e = 0; e < h; e++) {
                n = s * k.get(e, r) + o * k.get(e, r + 1);
                k.set(e, r + 1, -o * k.get(e, r) + s * k.get(e, r + 1));
                k.set(e, r, n);
              }
              if (0 === (n = a(O, S)) && (n = Number.MIN_VALUE), s = O / n, o = S / n, x[r] = n, O = s * _[r] + o * x[r + 1], x[r + 1] = -o * _[r] + s * x[r + 1], S = o * _[r + 1], _[r + 1] = s * _[r + 1], m && r < i - 1) for (let e = 0; e < i; e++) {
                n = s * w.get(e, r) + o * w.get(e, r + 1);
                w.set(e, r + 1, -o * w.get(e, r) + s * w.get(e, r + 1));
                w.set(e, r, n);
              }
            }
            _[I - 2] = O;
            R += 1;
            break;
          }
        case 4:
          if (x[e] <= 0 && (x[e] = x[e] < 0 ? -x[e] : 0, v)) for (let r = 0; r <= P; r++) k.set(r, e, -k.get(r, e));
          for (; e < P && !(x[e] >= x[e + 1]);) {
            let r = x[e];
            if (x[e] = x[e + 1], x[e + 1] = r, v && e < h - 1) for (let n = 0; n < h; n++) {
              r = k.get(n, e + 1);
              k.set(n, e + 1, k.get(n, e));
              k.set(n, e, r);
            }
            if (m && e < i - 1) for (let n = 0; n < i; n++) {
              r = w.get(n, e + 1);
              w.set(n, e + 1, w.get(n, e));
              w.set(n, e, r);
            }
            e++;
          }
          R = 0;
          I--;
      }
    }
    if (y) {
      let e = k;
      k = w;
      w = e;
    }
    this.m = i;
    this.n = h;
    this.s = x;
    this.U = w;
    this.V = k;
  }
  solve(e) {
    let r = e;
    let n = this.threshold;
    let i = this.s.length;
    let o = _$$A.zeros(i, i);
    for (let e = 0; e < i; e++) Math.abs(this.s[e]) <= n ? o.set(e, e, 0) : o.set(e, e, 1 / this.s[e]);
    let a = this.U;
    let h = this.rightSingularVectors;
    let d = h.mmul(o);
    let p = h.rows;
    let g = a.rows;
    let m = _$$A.zeros(p, g);
    for (let e = 0; e < p; e++) for (let r = 0; r < g; r++) {
      let n = 0;
      for (let s = 0; s < i; s++) n += d.get(e, s) * a.get(r, s);
      m.set(e, r, n);
    }
    return m.mmul(r);
  }
  solveForDiagonal(e) {
    return this.solve(_$$A.diag(e));
  }
  inverse() {
    let e = this.V;
    let r = this.threshold;
    let n = e.rows;
    let i = e.columns;
    let o = new _$$A(n, this.s.length);
    for (let s = 0; s < n; s++) for (let n = 0; n < i; n++) Math.abs(this.s[n]) > r && o.set(s, n, e.get(s, n) / this.s[n]);
    let a = this.U;
    let h = a.rows;
    let d = a.columns;
    let p = new _$$A(n, h);
    for (let e = 0; e < n; e++) for (let r = 0; r < h; r++) {
      let n = 0;
      for (let i = 0; i < d; i++) n += o.get(e, i) * a.get(r, i);
      p.set(e, r, n);
    }
    return p;
  }
  get condition() {
    return this.s[0] / this.s[Math.min(this.m, this.n) - 1];
  }
  get norm2() {
    return this.s[0];
  }
  get rank() {
    let e = Math.max(this.m, this.n) * this.s[0] * Number.EPSILON;
    let r = 0;
    let n = this.s;
    for (function () {
      let i = 0;
      let s = n.length;
    }(); i < s; i++) n[i] > e && r++;
    return r;
  }
  get diagonal() {
    return Array.from(this.s);
  }
  get threshold() {
    return Number.EPSILON / 2 * Math.max(this.m, this.n) * this.s[0];
  }
  get leftSingularVectors() {
    return this.U;
  }
  get rightSingularVectors() {
    return this.V;
  }
  get diagonalMatrix() {
    return _$$A.diag(this.s);
  }
}
export function inverse(e, r = !1) {
  return (e = _$$A2.checkMatrix(e), r) ? new d(e).inverse() : g(e, _$$A.eye(e.rows));
}
function g(e, r, n = !1) {
  return (e = _$$A2.checkMatrix(e), r = _$$A2.checkMatrix(r), n) ? new d(e).solve(r) : e.isSquare() ? new A(e).solve(r) : new h(e).solve(r);
}
export const D = inverse;
