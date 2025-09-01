export function $$n1(e, t, r) {
  let n = [];
  if (e && e[r]) {
    let i;
    let a = -1;
    (n = Object.keys(e[r]).map(t => e[r][t])).sort((e, t) => e.handle.toLowerCase() < t.handle.toLowerCase() ? -1 : 1);
    n.forEach((e, r) => {
      t === e.id && (a = r, i = e);
    });
    -1 != a && (n.splice(a, 1), n.unshift(i));
  }
  return n;
}
export function $$i0(e) {
  return e?.file?.activeFileUsers?.map(e => e) ?? [];
}
export function $$a2(e) {
  return !!e.imageUrl && !!e.id && !!e.handle;
}
export function $$s3(e) {
  return {
    id: e.id,
    handle: e.handle,
    img_url: e.imageUrl
  };
}
export const ZF = $$i0;
export const gH = $$n1;
export const q3 = $$a2;
export const rR = $$s3;