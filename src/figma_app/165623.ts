import { decodeBase64 } from "../905/561685";
export async function $$i2(e) {
  let t = new TextEncoder().encode(e);
  return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", t))).map(e => e.toString(16).padStart(2, "0")).join("");
}
export function $$a1(e, t) {
  return o(e, t);
}
export function $$s0(e) {
  return window.crypto.subtle.importKey("raw", decodeBase64(e), "AES-GCM", !0, ["encrypt", "decrypt"]);
}
async function o(e, t) {
  let r = t.split(".");
  if (2 !== r.length) throw Error("Could not parse message and nonce.");
  let i = r[0];
  let a = r[1];
  let s = decodeBase64(i);
  let o = decodeBase64(a);
  let l = await window.crypto.subtle.decrypt({
    name: "AES-GCM",
    iv: s
  }, e, o);
  return new TextDecoder().decode(l);
}
export const JL = $$s0;
export const We = $$a1;
export const qV = $$i2;