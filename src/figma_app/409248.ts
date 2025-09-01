import { Nd } from "../figma_app/291892";
export async function $$i0(e, t) {
  if (e in t) {
    let r = t[e];
    switch (r.type) {
      case "bytes":
        return Promise.resolve(r.bytes);
      case "promise":
        return r.promise;
    }
  }
  let r = Nd(e);
  t[e] = {
    type: "promise",
    promise: r
  };
  let i = await r;
  t[e] = {
    type: "bytes",
    bytes: i
  };
  return i;
}
export const T = $$i0;