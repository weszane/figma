import { useAtomWithSubscription } from "../figma_app/27355";
import { kG } from "../figma_app/327588";
import { to } from "../figma_app/828186";
import { rt } from "../figma_app/615482";
var $$o2 = (e => (e.ASSETS = "ASSETS", e.TEMPLATES = "TEMPLATES", e.TEXT = "TEXT", e.MEDIA = "MEDIA", e.SHAPES = "SHAPES", e.INSERTS = "INSERTS", e.FIELDS = "FIELDS", e.BULK_CREATE = "BULK_CREATE", e.FIND = "FIND", e.PLUGINS = "PLUGINS", e))($$o2 || {});
export let $$l0 = rt("ASSETS");
export function $$d1() {
  let e = to();
  let t = kG();
  let r = useAtomWithSubscription($$l0);
  return !!e && (!!t || "ASSETS" !== r);
}
export const Lk = $$l0;
export const gN = $$d1;
export const x = $$o2;