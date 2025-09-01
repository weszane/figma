import { useMemo, useCallback } from "react";
import { l as _$$l } from "../905/716947";
import { f } from "../figma_app/436731";
import { Fl } from "../figma_app/236178";
import { fi } from "../figma_app/155728";
export function $$l0() {
  let {
    workspaceApprovedLibraryKeys,
    orgApprovedLibraryKeys
  } = Fl();
  let i = fi();
  let l = useMemo(() => {
    let e = i.data?.file;
    let t = [];
    t.push(...(e?.libraryTeamSubscriptions ?? []));
    t.push(...(e?.computedWorkspacePublicInfo?.workspace?.librarySubscriptions?.filter(e => e.isSubscribed) ?? []));
    t.push(...(e?.libraryOrgSubscriptions ?? []));
    let n = new Set();
    t.forEach(e => {
      if (e.library) {
        let t = e.library.file?.libraryKey;
        t && n.add(_$$l(t));
      }
    });
    return n;
  }, [i.data?.file]);
  return useCallback(i => i.sort((i, n) => function (e, t, i, n, r) {
    let s = n.has(e.library_key) ? 1 : 0;
    let o = n.has(t.library_key) ? 1 : 0;
    if (s !== o) return o - s;
    let l = i.has(e.library_key) ? 1 : 0;
    let d = i.has(t.library_key) ? 1 : 0;
    if (l !== d) return d - l;
    let c = r.has(e.library_key) ? 1 : 0;
    let u = r.has(t.library_key) ? 1 : 0;
    return c !== u ? u - c : f.LEXICOGRAPHICALLY(e.library_name, t.library_name);
  }(i, n, workspaceApprovedLibraryKeys, orgApprovedLibraryKeys, l)), [orgApprovedLibraryKeys, l, workspaceApprovedLibraryKeys]);
}
export const z = $$l0;