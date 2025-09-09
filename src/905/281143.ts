import { useMemo } from "react";
import { useSelector } from "react-redux";
import { l as _$$l } from "../905/716947";
import s from "../vendor/239910";
import { je } from "../figma_app/155728";
var o = s;
export function $$d0() {
  let e = useSelector(e => e.hubFiles);
  let t = useMemo(() => o()(Object.values(e), e => _$$l(e.library_key ?? "")), [e]);
  let i = je();
  let s = useMemo(() => {
    let e = {};
    if (!i.data) return {};
    for (let t of i.data) {
      if ("community" === t.libraryType) continue;
      let i = {
        key: t.fileKey,
        name: t.name,
        library_key: t.libraryKey,
        thumbnail_guid: t.thumbnailGuid,
        thumbnail_url: t.thumbnailUrl ?? "",
        thumbnail_url_override: t.thumbnailUrlOverride
      };
      e[_$$l(t.libraryKey)] = i;
    }
    return e;
  }, [i]);
  return useMemo(() => ({
    subscribedFileDataByLibraryKey: s,
    hubFilesByLibraryKey: t,
    hubFilesById: e
  }), [e, t, s]);
}
export const N = $$d0;
