import { ee } from "../figma_app/995580";
import { l4 } from "../figma_app/737746";
import { i6 } from "../figma_app/297822";
function s(e) {
  return {
    key: ee(e),
    isDisabled: !!e.disabled,
    resultType: e.pluginId || e.pluginLocalFileId ? l4.EXTENSION : l4.ACTION
  };
}
export function $$o0(e) {
  let t = new Map();
  e.forEach(e => {
    let i = e.category ?? "";
    t.has(i) || t.set(i, []);
    t.get(i)?.push(e);
  });
  let i = [];
  for (let [e, r] of t.entries()) i.push({
    name: e,
    actions: r.map(s)
  });
  return i6(i);
}
export const X = $$o0;