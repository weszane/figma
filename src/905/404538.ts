import { shallowEqual } from "react-redux";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { createRemovableAtomFamily, atom, atomStoreManager } from "../figma_app/27355";
import c from "../vendor/223926";
import { Z } from "../905/939602";
import { liveStoreInstance } from "../905/713695";
var $$n0;
var $$r2;
var $$a1;
var u = c;
(e => {
  let t = createRemovableAtomFamily(() => atom(void 0), shallowEqual);
  e.UnpublishedStylesQuery = liveStoreInstance.Query({
    fetch: async ({
      styleKeys: e,
      orgId: i
    }) => {
      if (0 === e.length) return [];
      let n = e.filter(e => void 0 === atomStoreManager.get(t({
        styleKey: e,
        orgId: i
      })));
      if (n.length > 0) {
        let e = await Z.postUnpublishedStyles({
          styleKeys: n,
          orgId: i
        });
        200 === e.status && (n.forEach(e => {
          atomStoreManager.set(t({
            styleKey: e,
            orgId: i
          }), null);
        }), (e?.data?.meta?.styles ?? []).forEach(e => {
          atomStoreManager.set(t({
            styleKey: e.key,
            orgId: i
          }), e);
        }));
      }
      return e.map(e => atomStoreManager.get(t({
        styleKey: e,
        orgId: i
      }))).filter(isNotNullish);
    }
  });
})($$n0 || ($$n0 = {}));
(e => {
  let t = createRemovableAtomFamily(() => atom(void 0));
  e.MissingStyleKeyToLibraryKeyQuery = liveStoreInstance.Query({
    fetch: async ({
      styleKeys: e
    }) => {
      if (0 === e.length) return {};
      let i = e.filter(e => void 0 === atomStoreManager.get(t(e)));
      if (i.length > 0) {
        let e = await Z.postMissingStylesByLibraryKey({
          styleKeys: i
        });
        if (200 === e.status) {
          for (let e of i) atomStoreManager.set(t(e), null);
          Object.entries(e?.data?.meta ?? {}).forEach(([e, i]) => {
            i.forEach(i => {
              atomStoreManager.set(t(i), _$$l(e));
            });
          });
        }
      }
      let n = e.filter(e => !!atomStoreManager.get(t(e)));
      return u()(n, e => atomStoreManager.get(t(e)));
    }
  });
})($$r2 || ($$r2 = {}));
(e => {
  let t = createRemovableAtomFamily(() => atom(void 0));
  e.EverPublishedLibraryQuery = liveStoreInstance.Query({
    fetch: async ({
      libraryKeys: e
    }) => {
      if (0 === e.length) return [];
      let i = e.filter(e => void 0 === atomStoreManager.get(t(e)));
      if (i.length > 0) {
        let e = await Z.postEverPublishedLibraries({
          libraryKeys: i
        });
        200 === e.status && (i.forEach(e => {
          atomStoreManager.set(t(e), !1);
        }), (e?.data?.meta ?? []).forEach(e => {
          atomStoreManager.set(t(e), !0);
        }));
      }
      return e.filter(e => !0 === atomStoreManager.get(t(e)));
    }
  });
})($$a1 || ($$a1 = {}));
export const _x = $$n0;
export const e6 = $$a1;
export const qE = $$r2;