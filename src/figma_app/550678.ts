import { sha1Hex } from "../905/125019";
import { XHR } from "../905/910117";
export function $$a0(e, t, r) {
  null == r && (r = "image/png");
  return XHR.post("/api/upnode/image", t, {
    rawBody: !0,
    params: {
      purpose: e,
      sha1: sha1Hex(t)
    },
    headers: {
      ...XHR.requiredHeaders,
      "Content-Type": r
    }
  });
}
export function $$s1({
  imageBytes: e,
  sha1: t,
  contentType: r,
  collection: n
}) {
  return XHR.post("/api/upnode/image", e, {
    rawBody: !0,
    params: {
      purpose: "canvas",
      sha1: t,
      using_cms_collection: n.databaseId
    },
    headers: {
      ...XHR.requiredHeaders,
      "Content-Type": r
    }
  });
}
export const Q = $$a0;
export const x = $$s1;