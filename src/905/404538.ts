import { bN } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { l as _$$l } from "../905/716947";
import { Iz, eU, zl } from "../figma_app/27355";
import c from "../vendor/223926";
import { Z } from "../905/939602";
import { M4 } from "../905/713695";
var $$n0;
var $$r2;
var $$a1;
var u = c;
(e => {
  let t = Iz(() => eU(void 0), bN);
  e.UnpublishedStylesQuery = M4.Query({
    fetch: async ({
      styleKeys: e,
      orgId: i
    }) => {
      if (0 === e.length) return [];
      let n = e.filter(e => void 0 === zl.get(t({
        styleKey: e,
        orgId: i
      })));
      if (n.length > 0) {
        let e = await Z.postUnpublishedStyles({
          styleKeys: n,
          orgId: i
        });
        200 === e.status && (n.forEach(e => {
          zl.set(t({
            styleKey: e,
            orgId: i
          }), null);
        }), (e?.data?.meta?.styles ?? []).forEach(e => {
          zl.set(t({
            styleKey: e.key,
            orgId: i
          }), e);
        }));
      }
      return e.map(e => zl.get(t({
        styleKey: e,
        orgId: i
      }))).filter(isNotNullish);
    }
  });
})($$n0 || ($$n0 = {}));
(e => {
  let t = Iz(() => eU(void 0));
  e.MissingStyleKeyToLibraryKeyQuery = M4.Query({
    fetch: async ({
      styleKeys: e
    }) => {
      if (0 === e.length) return {};
      let i = e.filter(e => void 0 === zl.get(t(e)));
      if (i.length > 0) {
        let e = await Z.postMissingStylesByLibraryKey({
          styleKeys: i
        });
        if (200 === e.status) {
          for (let e of i) zl.set(t(e), null);
          Object.entries(e?.data?.meta ?? {}).forEach(([e, i]) => {
            i.forEach(i => {
              zl.set(t(i), _$$l(e));
            });
          });
        }
      }
      let n = e.filter(e => !!zl.get(t(e)));
      return u()(n, e => zl.get(t(e)));
    }
  });
})($$r2 || ($$r2 = {}));
(e => {
  let t = Iz(() => eU(void 0));
  e.EverPublishedLibraryQuery = M4.Query({
    fetch: async ({
      libraryKeys: e
    }) => {
      if (0 === e.length) return [];
      let i = e.filter(e => void 0 === zl.get(t(e)));
      if (i.length > 0) {
        let e = await Z.postEverPublishedLibraries({
          libraryKeys: i
        });
        200 === e.status && (i.forEach(e => {
          zl.set(t(e), !1);
        }), (e?.data?.meta ?? []).forEach(e => {
          zl.set(t(e), !0);
        }));
      }
      return e.filter(e => !0 === zl.get(t(e)));
    }
  });
})($$a1 || ($$a1 = {}));
export const _x = $$n0;
export const e6 = $$a1;
export const qE = $$r2;