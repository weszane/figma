import { y } from "../vendor/74176";
export class $$s0 extends y {
  constructor(e) {
    super();
    this.data = e;
    this.rows = e.length;
    this.columns = e[0].length;
  }
  set(e, r, n) {
    this.data[e][r] = n;
    return this;
  }
  get(e, r) {
    return this.data[e][r];
  }
}
export const A = $$s0;