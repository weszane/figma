import { Sm, j6 } from "../905/859698";
import { PWo, IXA } from "../figma_app/763686";
import { eU, FZ } from "../figma_app/27355";
import { Y5 } from "../figma_app/455680";
import { Wh } from "../figma_app/615482";
import { e as _$$e } from "../905/566074";
import { PW } from "../figma_app/633080";
export let $$n0;
let u = {
  [PW.CODE_COMPONENT]: {
    idl: PWo.CODE_COMPONENT,
    key: Sm(""),
    version: j6("")
  }
};
let $$p1 = {
  [PW.CODE_COMPONENT]: {
    subscribed: function (e) {
      let t = u[e].idl;
      let r = Wh(() => eU({}));
      let n = FZ(r, (t, r) => {
        if ("changed" in r) {
          if (!_$$e(e)) return t;
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
      let i = `consumedAssetVersionsByKey(${PWo[t]})`;
      n.debugLabel = i;
      n.onMount = r => {
        var n;
        let i = () => {
          _$$e(e) && r({
            changed: IXA?.getAllSubscribedAssetConsumptions(t) ?? []
          });
        };
        Y5.isReady() ? i() : Y5.onReady().then(i);
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
    }(PW.CODE_COMPONENT)
  }
};
let _ = {
  [PWo.CODE_COMPONENT]: null
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