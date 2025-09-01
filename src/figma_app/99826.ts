export function $$n2(e) {
  return null == e ? "" : new URL(e).hostname;
}
export function $$i1(e) {
  return null == e ? "" : new URL(e).origin;
}
export function $$a4(e) {
  try {
    new URL(e);
    return !0;
  } catch {
    return !1;
  }
}
export function $$s3(e) {
  return $$a4(e) ? e : new URL(e, window.location.origin).href;
}
export function $$o0(e) {
  if (0 !== e.indexOf("data:")) throw Error("Invalid data URL: `data:` prefix missing");
  let [t, r] = e.slice(5).split(",");
  if (!r) throw Error("Invalid data URL: data part missing");
  let n = !!t && t.length > 0;
  let i = n && t.endsWith(";base64");
  let a = i ? t.slice(0, -7) : n ? t : void 0;
  return new Blob([i ? function (e) {
    let t = atob(e);
    let r = t.length;
    let n = new Uint8Array(r);
    for (let e = 0; e < r; e++) n[e] = t.charCodeAt(e);
    return n;
  }(r) : decodeURIComponent(r)], {
    type: a
  });
}
export const G_ = $$o0;
export const Jk = $$i1;
export const Kf = $$n2;
export const ky = $$s3;
export const vh = $$a4;