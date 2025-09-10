import { atom } from "../figma_app/27355";
import { fh } from "../figma_app/98072";
import { libraryKeySelector } from "../905/617744";
import { openFileLibraryKeyAtom } from "../figma_app/516028";
import { LibraryAssetByKey } from "../figma_app/43951";
import { Gd } from "../figma_app/600968";
import { sC } from "../905/395857";
import { PrimaryWorkflowEnum } from "../905/497152";
let $$u0 = {
  [PrimaryWorkflowEnum.CODE_COMPONENT]: function (e) {
    return atom(t => {
      let i = sC[e];
      let n = {};
      let l = t(fh[e].subscribed);
      let c = t(openFileLibraryKeyAtom);
      let u = t(libraryKeySelector) ?? c;
      for (let [e, r] of Object.entries(l)) {
        if (r.sourceLibraryKey === u || t(p).has(e)) continue;
        let a = t(LibraryAssetByKey.Query({
          libraryKey: r.sourceLibraryKey,
          key: e
        }));
        if ("loaded" === a.status && a.data.libraryAsset) {
          let e = i(r.sourceLibraryKey, a.data.libraryAsset);
          if (!e) continue;
          for (let [t, i] of Object.entries(r.pagesByVersion)) if (e.version !== t) for (let t of i) {
            n[t] ||= [];
            n[t].push(e);
          }
        }
      }
      return n;
    });
  }(PrimaryWorkflowEnum.CODE_COMPONENT)
};
let p = atom(e => e(Gd));
export const i = $$u0;
