import { mapTemplateAndModuleProperties } from "../figma_app/349248";
export function $$r0(e) {
  if (e?.status === "loaded") {
    let t = e.data.communityLibraryByHubFileId;
    if (t) {
      let e = t.modules;
      if ("loaded" === e.status) return e.data.map(e => mapTemplateAndModuleProperties(e, {
        type: "hubFile",
        file: {
          id: t.hubFileId,
          libraryKey: t.libraryKey
        }
      }));
    }
  }
  return [];
}
export const i = $$r0;