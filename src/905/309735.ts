export function $$n2(e) {
  return e.split("/").filter(e => !!e).map(e => e.trim());
}
export function $$r0(e) {
  let t = $$n2(e);
  t.pop();
  return t.join("/");
}
export function $$a1(e) {
  let t = $$n2(e);
  return t.length ? t[t.length - 1] : "";
}
export function $$s3(e) {
  return e.replace(/(\/)\1+/g, "$1").split("/").map(e => e.trim()).join("/");
}
export const In = $$r0;
export const kH = $$a1;
export const ke = $$n2;
export const rh = $$s3;