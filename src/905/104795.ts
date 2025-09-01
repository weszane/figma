import { E3, eU } from "../figma_app/27355";
var $$r2 = (e => (e.Position = "Position", e.Name = "Name", e.Memory = "Memory", e.NodeId = "Node ID", e))($$r2 || {});
var $$a1 = (e => (e.Search = "Search", e.Filter = "Filter", e))($$a1 || {});
export let $$s3 = E3("figmascope-settings", {});
export function $$o0(e, t) {
  return eU(i => i($$s3)[e] ?? t, (t, i, n) => i($$s3, t => ({
    ...t,
    [e]: n
  })));
}
export const Sv = $$o0;
export const Y6 = $$a1;
export const hX = $$r2;
export const lY = $$s3;