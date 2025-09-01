import { e as _$$e } from "../vendor/125946";
export function $$s1(e, r, n) {
  let i = n ? e.rows : e.rows - 1;
  if (r < 0 || r > i) throw RangeError("Row index out of range");
}
export function $$o4(e, r, n) {
  let i = n ? e.columns : e.columns - 1;
  if (r < 0 || r > i) throw RangeError("Column index out of range");
}
export function $$a5(e, r) {
  if (r.to1DArray && (r = r.to1DArray()), r.length !== e.columns) throw RangeError("vector size must be the same as the number of columns");
  return r;
}
export function $$h8(e, r) {
  if (r.to1DArray && (r = r.to1DArray()), r.length !== e.rows) throw RangeError("vector size must be the same as the number of rows");
  return r;
}
export function $$d2(e, r) {
  if (!_$$e(r)) throw TypeError("row indices must be an array");
  for (let n = 0; n < r.length; n++) if (r[n] < 0 || r[n] >= e.rows) throw RangeError("row indices are out of range");
}
export function $$p7(e, r) {
  if (!_$$e(r)) throw TypeError("column indices must be an array");
  for (let n = 0; n < r.length; n++) if (r[n] < 0 || r[n] >= e.columns) throw RangeError("column indices are out of range");
}
export function $$g6(e, r, n, i, s) {
  if (5 != $$arguments.length) throw RangeError("expected 4 arguments");
  if (v("startRow", r), v("endRow", n), v("startColumn", i), v("endColumn", s), r > n || i > s || r < 0 || r >= e.rows || n < 0 || n >= e.rows || i < 0 || i >= e.columns || s < 0 || s >= e.columns) throw RangeError("Submatrix indices are out of range");
}
export function $$m3(e, r = 0) {
  let n = [];
  for (let i = 0; i < e; i++) n.push(r);
  return n;
}
function v(e, r) {
  if ("number" != typeof r) throw TypeError(`${e} must be a number`);
}
export function $$y0(e) {
  if (e.isEmpty()) throw Error("Empty matrix has no elements to index");
}
export const $s = $$y0;
export const Hi = $$s1;
export const QY = $$d2;
export const Wf = $$m3;
export const Xq = $$o4;
export const Yo = $$a5;
export const cd = $$g6;
export const gO = $$p7;
export const yL = $$h8;