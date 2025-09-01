import { isNullish } from "../figma_app/95419";
var $$r0 = (e => (e.REST_API = "REST_API", e.LIVEGRAPH_DATA = "LIVEGRAPH_DATA", e.LIVEGRAPH_DATA_HUB_FILE = "LIVEGRAPH_DATA_HUB_FILE", e.LOCAL_FILE = "LOCAL_FILE", e.TEST = "TEST", e))($$r0 || {});
export function $$a1() {
  return e => isNullish(e) ? e : e.file_key;
}
export const P = $$r0;
export const f = $$a1;