import { createSelector } from "../vendor/925040";
import { getAllFoldersFromFolder, getAllStylesFromFolder } from "../figma_app/463500";
let $$r2 = e => e.library.localStyleSelection;
let $$a1 = createSelector([$$r2, (e, t) => t], (e, t) => e?.type === t ? e : null);
let $$i0 = createSelector([$$a1, (e, t, l) => l], (e, t) => {
  if (!e) return null;
  let l = new Set();
  let s = new Set();
  e.folderNames.forEach(e => {
    let r = t.find(t => "STYLE_FOLDER" === t.type && t.name === e);
    r && (getAllFoldersFromFolder(r).forEach(e => {
      l.add(e.name);
    }), getAllStylesFromFolder(r).forEach(e => {
      s.add(e.node_id);
    }));
  });
  return {
    type: e.type,
    folderNames: l,
    styleIds: s
  };
});
export const A7 = $$i0;
export const i4 = $$a1;
export const nt = $$r2;