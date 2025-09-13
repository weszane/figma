import { mapStateGroupProperties } from "../figma_app/349248";
export function $$r0(e) {
  let t = [];
  if (e?.status === "loaded") {
    let i = e.data.file;
    i && (t = i.stateGroups.map(e => mapStateGroupProperties(e, {
      type: "hubFile",
      file: {
        id: i.hubFileId,
        libraryKey: i.libraryKey
      }
    })));
  }
  return t;
}
export const o = $$r0;