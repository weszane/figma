import { Sm, j6 } from "../905/859698";
import { FacetType, assetConsumptionBindings } from "../figma_app/763686";
import { atom, setupCustomAtom } from "../figma_app/27355";
import { fullscreenValue } from "../figma_app/455680";
import { setupRemovableAtomFamily } from "../figma_app/615482";
import { isPublishableAssetType } from "../905/566074";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
export let $$n0;
let u = {
  [PrimaryWorkflowEnum.CODE_COMPONENT]: {
    idl: FacetType.CODE_COMPONENT,
    key: Sm(""),
    version: j6("")
  }
};
let $$p1 = {
  [PrimaryWorkflowEnum.CODE_COMPONENT]: {
    subscribed: function (e) {
      let t = u[e].idl;
      let r = setupRemovableAtomFamily(() => atom({}));
      let n = setupCustomAtom(r, (t, r) => {
        if ("changed" in r) {
          if (!isPublishableAssetType(e)) return t;
          let n = r.changed;
          return {
            ...t,
            ...n.reduce((e, t) => (e[t.key] = {
              sourceLibraryKey: t.sourceLibraryKey,
              pagesByVersion: {
                ...e[t.key]?.pagesByVersion,
                ...function (e) {
                  let t = {};
                  for (let {
                    version,
                    consumingPages
                  } of e) t[version] = consumingPages;
                  return t;
                }(t.pagesByVersion)
              }
            }, e), {})
          };
        }
        return "reset" in r ? {} : t;
      });
      let i = `consumedAssetVersionsByKey(${FacetType[t]})`;
      n.debugLabel = i;
      n.onMount = r => {
        var n;
        let i = () => {
          isPublishableAssetType(e) && r({
            changed: assetConsumptionBindings?.getAllSubscribedAssetConsumptions(t) ?? []
          });
        };
        fullscreenValue.isReady() ? i() : fullscreenValue.onReady().then(i);
        n = e => {
          r(e);
        };
        _[t] = n;
        let s = () => {
          _[t] = null;
        };
        return () => {
          s();
          r({
            reset: !0
          });
        };
      };
      return n;
    }(PrimaryWorkflowEnum.CODE_COMPONENT)
  }
};
let _ = {
  [FacetType.CODE_COMPONENT]: null
};
class h {
  syncChangedSubscribedConsumptions(e, t) {
    _[e]?.({
      changed: t
    });
  }
  resetMirrorCache() {
    for (let e of Object.values(_)) e?.({
      reset: !0
    });
  }
}
export function $$m2() {
  $$n0 = new h();
}
export const BF = $$n0;
export const fh = $$p1;
export const tO = $$m2;