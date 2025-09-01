import { KC } from "../figma_app/349248";
export function $$r0(e) {
  let t = [];
  if (e?.status === "loaded") {
    let i = e.data.communityLibraryByHubFileId;
    if (i?.libraryHierarchyPaths) for (let e of i.libraryHierarchyPaths) for (let r of e.styles) t.push(KC(r, {
      type: "hubFile",
      file: {
        id: i.hubFileId,
        libraryKey: i.libraryKey
      }
    }));
  }
  return t;
}
export const F = $$r0;