import { Qp } from "../figma_app/349248";
export function $$r0(e) {
  let t = [];
  if (e?.status === "loaded") {
    let i = e.data.file;
    i && (t = i.components.map(e => Qp(e, {
      type: "hubFile",
      file: {
        id: i.hubFileId,
        libraryKey: i.libraryKey
      }
    })));
  }
  return t;
}
export const J = $$r0;