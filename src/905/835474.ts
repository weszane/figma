import { FLATTENED_BOOLEAN_VALUES } from "../figma_app/264776";
export function $$r0(e) {
  let t = e.split(",");
  let i = [];
  for (let e of t) {
    let t = e.trim().split("=");
    if (2 !== t.length || !t[0] || !t[1]) break;
    FLATTENED_BOOLEAN_VALUES.indexOf(t[1].toLowerCase()) > -1 ? i.push(e.trim()) : i.push(t[1]);
  }
  i.length === t.length && (e = i.join(", "));
  return e;
}
export const w = $$r0;