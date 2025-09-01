let n;
let r;
let a;
let s;
let o;
export function $$l2() {
  if (!n) throw Error("Call setImageEmbeddingsCacheProvider before trying to use embedding cache");
  return n();
}
export function $$d4() {
  if (!r) throw Error("Call setTextEmbeddingsCacheProvider before trying to use embedding cache");
  return r();
}
export function $$c0() {
  if (!a) throw Error("Call setTextNodesByTLFCacheProvider before trying to use cache");
  return a();
}
export function $$u3() {
  if (!s) throw Error("Call setImageNodesByPageCacheProvider before trying to use cache");
  return s();
}
export function $$p1() {
  if (!o) throw Error("Call setTextNodesByPageCacheProvider before trying to use cache");
  return o();
}
export const Ax = $$c0;
export const Ft = $$p1;
export const Sm = $$l2;
export const T4 = $$u3;
export const yy = $$d4;