import { zl } from "../figma_app/27355";
import { ze } from "../figma_app/516028";
import { M4 } from "../905/713695";
import { rK } from "../figma_app/72338";
import { y7, TT, YF } from "../figma_app/952035";
export async function $$o0() {
  let e = zl.get(ze);
  let {
    authenticated
  } = await M4.fetch(y7({
    fileKey: e
  }), {
    policy: "networkOnly"
  });
  await M4.fetch(TT({
    fileKey: e
  }), {
    policy: "networkOnly"
  });
  authenticated && (await M4.fetch(YF({
    fileKey: e
  }), {
    policy: "networkOnly"
  }));
  zl.set(rK, !0);
}
export const r = $$o0;