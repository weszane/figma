import { A as _$$A } from "../vendor/74176";
import { A as _$$A2 } from "../vendor/134496";
export class $$o0 {
  constructor(e) {
    let r;
    let n;
    let i;
    let o;
    let a;
    let h;
    let d;
    let p;
    let g;
    let m = (e = _$$A2.checkMatrix(e)).clone();
    let v = m.rows;
    let y = m.columns;
    let b = new Float64Array(v);
    let O = 1;
    for (r = 0; r < v; r++) b[r] = r;
    for (n = 0, p = new Float64Array(v); n < y; n++) {
      for (r = 0; r < v; r++) p[r] = m.get(r, n);
      for (r = 0; r < v; r++) {
        for (i = 0, g = Math.min(r, n), a = 0; i < g; i++) a += m.get(r, i) * p[i];
        p[r] -= a;
        m.set(r, n, p[r]);
      }
      for (o = n, r = n + 1; r < v; r++) Math.abs(p[r]) > Math.abs(p[o]) && (o = r);
      if (o !== n) {
        for (i = 0; i < y; i++) {
          h = m.get(o, i);
          m.set(o, i, m.get(n, i));
          m.set(n, i, h);
        }
        d = b[o];
        b[o] = b[n];
        b[n] = d;
        O = -O;
      }
      if (n < v && 0 !== m.get(n, n)) for (r = n + 1; r < v; r++) m.set(r, n, m.get(r, n) / m.get(n, n));
    }
    this.LU = m;
    this.pivotVector = b;
    this.pivotSign = O;
  }
  isSingular() {
    let e = this.LU;
    let r = e.columns;
    for (let n = 0; n < r; n++) if (0 === e.get(n, n)) return !0;
    return !1;
  }
  solve(e) {
    let r;
    let n;
    let s;
    e = _$$A.checkMatrix(e);
    let o = this.LU;
    if (o.rows !== e.rows) throw Error("Invalid matrix dimensions");
    if (this.isSingular()) throw Error("LU matrix is singular");
    let a = e.columns;
    let h = e.subMatrixRow(this.pivotVector, 0, a - 1);
    let d = o.columns;
    for (s = 0; s < d; s++) for (r = s + 1; r < d; r++) for (n = 0; n < a; n++) h.set(r, n, h.get(r, n) - h.get(s, n) * o.get(r, s));
    for (s = d - 1; s >= 0; s--) {
      for (n = 0; n < a; n++) h.set(s, n, h.get(s, n) / o.get(s, s));
      for (r = 0; r < s; r++) for (n = 0; n < a; n++) h.set(r, n, h.get(r, n) - h.get(s, n) * o.get(r, s));
    }
    return h;
  }
  get determinant() {
    let e = this.LU;
    if (!e.isSquare()) throw Error("Matrix must be square");
    let r = this.pivotSign;
    let n = e.columns;
    for (let i = 0; i < n; i++) r *= e.get(i, i);
    return r;
  }
  get lowerTriangularMatrix() {
    let e = this.LU;
    let r = e.rows;
    let n = e.columns;
    let s = new _$$A(r, n);
    for (let i = 0; i < r; i++) for (let r = 0; r < n; r++) i > r ? s.set(i, r, e.get(i, r)) : i === r ? s.set(i, r, 1) : s.set(i, r, 0);
    return s;
  }
  get upperTriangularMatrix() {
    let e = this.LU;
    let r = e.rows;
    let n = e.columns;
    let s = new _$$A(r, n);
    for (let i = 0; i < r; i++) for (let r = 0; r < n; r++) i <= r ? s.set(i, r, e.get(i, r)) : s.set(i, r, 0);
    return s;
  }
  get pivotPermutationVector() {
    return Array.from(this.pivotVector);
  }
}
export const A = $$o0;