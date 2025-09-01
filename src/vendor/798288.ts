let i;
let s = 1e3;
export function $$o2(e) {
  return g(e).segments_count;
}
export function $$a1(e) {
  g(e).segments_count += 1;
}
export function $$h0(e) {
  g(e).records_count += 1;
}
export function $$d3(e, r) {
  g(e).segments_total_raw_size += r;
}
export function $$p4(e) {
  return i?.get(e);
}
function g(e) {
  let r;
  i || (i = new Map());
  i.has(e) ? r = i.get(e) : (r = {
    records_count: 0,
    segments_count: 0,
    segments_total_raw_size: 0
  }, i.set(e, r), i.size > s && m());
  return r;
}
function m() {
  if (!i) return;
  let e = i.keys().next().value;
  e && i.$$delete(e);
}
export const $1 = $$h0;
export const H5 = $$a1;
export const K_ = $$o2;
export const L7 = $$d3;
export const lv = $$p4;