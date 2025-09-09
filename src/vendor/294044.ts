import { A } from "../vendor/891206";
import { y, A as _$$A } from "../vendor/74176";
import { QY, gO } from "../vendor/821199";
class $$a extends y {
  constructor(e, r, n) {
    super();
    this.matrix = e;
    this.rows = r;
    this.columns = n;
  }
}
class h extends $$a {
  constructor(e, r, n) {
    QY(e, r);
    gO(e, n);
    super(e, r.length, n.length);
    this.rowIndices = r;
    this.columnIndices = n;
  }
  set(e, r, n) {
    this.matrix.set(this.rowIndices[e], this.columnIndices[r], n);
    return this;
  }
  get(e, r) {
    return this.matrix.get(this.rowIndices[e], this.columnIndices[r]);
  }
}
export function determinant(e) {
  if ((e = _$$A.checkMatrix(e)).isSquare()) {
    let r;
    let n;
    let s;
    if (0 === e.columns) return 1;
    if (2 === e.columns) {
      r = e.get(0, 0);
      n = e.get(0, 1);
      s = e.get(1, 0);
      return r * e.get(1, 1) - n * s;
    }
    if (3 !== e.columns) return new A(e).determinant;
    {
      let i;
      let o;
      let a;
      i = new h(e, [1, 2], [1, 2]);
      o = new h(e, [1, 2], [0, 2]);
      a = new h(e, [1, 2], [0, 1]);
      r = e.get(0, 0);
      n = e.get(0, 1);
      s = e.get(0, 2);
      return r * determinant(i) - n * determinant(o) + s * determinant(a);
    }
  }
  throw Error("determinant can only be calculated for a square matrix");
}
export const a = determinant;
