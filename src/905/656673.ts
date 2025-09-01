import n, { t as _$$t, CortexErrorV2 } from "../figma_app/316567";
export function $$r0(e) {
  return null !== e && "object" == typeof e && "marker" in e && "statusCode" in e && "message" in e;
}
export function $$a1(e) {
  for (let t of Object.keys(n)) {
    let i = _$$t;
    if ("function" == typeof i && "isInstance" in i && "fromJSON" in i && i.isInstance(e)) {
      let t = i.fromJSON(e);
      t.trace = e.trace;
      return t;
    }
  }
  return new CortexErrorV2({
    message: `Unrecognized Cortex error with marker: ${e.marker}`,
    trace: e.trace
  });
}
export const G = $$r0;
export const j = $$a1;