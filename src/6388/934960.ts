export function $$o0(e) {
  let t = e.extension;
  return `data:${{
    png: "image/png",
    jpeg: "image/jpeg",
    jpg: "image/jpeg",
    gif: "image/gif",
    bmp: "image/bmp",
    webp: "image/webp"
  }[t]};base64,` + function (e) {
    if (!e) return "";
    let t = "";
    [].slice.call(new Uint8Array(e)).forEach(e => t += String.fromCharCode(e));
    return window.btoa(t);
  }(e.buffer);
}
export function $$n3(e, t) {
  return `${e},${t}`;
}
let $$s2 = 3;
let $$r1 = ":";
export const DG = $$o0;
export const YB = $$r1;
export const c3 = $$s2;
export const jZ = $$n3;