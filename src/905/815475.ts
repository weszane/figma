import { debugState } from "../905/407919";
import { getRequest } from "../905/910117";
import { NK } from "../figma_app/111825";
export function $$s0(e) {
  let t = new URL(e, location.origin);
  let i = NK(debugState?.getState().fileVersion);
  t.searchParams.set("fv", i.toString());
  return {
    url: t.toString(),
    fileVersion: i
  };
}
let o = (e, t) => getRequest(e, null, {
  responseType: "arraybuffer"
}).then(({
  data: e
}) => e);
export async function $$l1(e, t = o) {
  if (!e) return Promise.reject(Error("No canvas URL"));
  let {
    url,
    fileVersion
  } = $$s0(e);
  let d = await t(url, fileVersion);
  return NK(debugState?.getState().fileVersion) > fileVersion ? $$l1(e) : [d, url, fileVersion];
}
export const P = $$s0;
export const n = $$l1;