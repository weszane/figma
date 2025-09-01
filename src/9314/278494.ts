import { Mz } from "../vendor/925040";
import { KU, dm } from "../figma_app/463500";
let $$o2 = e => e.library.localStyleSelection;
let $$r1 = Mz([$$o2, (e, t) => t], (e, t) => e?.type === t ? e : null);
let $$a0 = Mz([$$r1, (e, t, l) => l], (e, t) => {
  if (!e) return null;
  let l = new Set();
  let n = new Set();
  e.folderNames.forEach(e => {
    let o = t.find(t => "STYLE_FOLDER" === t.type && t.name === e);
    o && (KU(o).forEach(e => {
      l.add(e.name);
    }), dm(o).forEach(e => {
      n.add(e.node_id);
    }));
  });
  return {
    type: e.type,
    folderNames: l,
    styleIds: n
  };
});
export const A7 = $$a0;
export const i4 = $$r1;
export const nt = $$o2;