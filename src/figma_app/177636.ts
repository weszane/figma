import { useMemo, useCallback } from "react";
import { l as _$$l } from "../905/716947";
import { atom, useAtomWithSubscription } from "../figma_app/27355";
import { z } from "../905/239603";
import { unwrap } from "../vendor/812047";
import { oA as _$$oA } from "../905/663269";
import { Xm, gB } from "../905/723791";
import { En } from "../figma_app/566371";
import { w0 } from "../figma_app/594947";
import { ZJ } from "../3973/697935";
import { Uv } from "../3973/473379";
import { Lg, isInteractionPathCheck } from "../figma_app/897289";
import { u8 } from "../figma_app/976749";
import { U } from "../905/506188";
import { kH } from "../905/309735";
import { FComponentType } from "../figma_app/191312";
import { LibraryAssetDataOfType, LibraryComponentDataByLibraryKey } from "../figma_app/43951";
import { Qp } from "../figma_app/349248";
import { NR } from "../905/722604";
import { FEditorType } from "../figma_app/53721";
import { G } from "../figma_app/923271";
import { n as _$$n } from "../905/347702";
import { Pv, GZ, Yl } from "../figma_app/10098";
import { V } from "../figma_app/862515";
let N = _$$n(async () => await w0("ds_sts_lib_key"));
let C = z.object({
  libraryKey: z.string(),
  primaryTextFieldId: z.string(),
  secondaryTextFieldId: z.string(),
  imageFieldId: z.string(),
  assetNames: z.object({
    textImageList: z.string(),
    textOnlyList: z.string(),
    imageOnlyList: z.string(),
    imageSingleTextList: z.string().optional()
  })
});
let w = [];
let O = atom(async e => {
  let t = e(u8) === FEditorType.Sites;
  let r = !!(Lg() || isInteractionPathCheck()) || e(ZJ).status === Uv.COMPLETED;
  if (!t || !r) return {
    libraryKeys: w,
    cmsConfig: null,
    enabled: !1,
    publishedFromSiteFile: !1,
    sortedPrefixes: void 0
  };
  let n = await N();
  let i = n.get("libraryKeys", [], R);
  let a = n.get("siteFile", !1, e => "boolean" == typeof e);
  let s = n.get("order", [], R);
  let o = n.get("cms", null, L);
  let l = i.length > 0 && t;
  return {
    libraryKeys: l ? i : [],
    cmsConfig: l ? o : null,
    enabled: l,
    publishedFromSiteFile: a,
    sortedPrefixes: s.map(e => e.toLocaleLowerCase())
  };
});
function R(e) {
  return Array.isArray(e) && e.every(e => "string" == typeof e);
}
function L(e) {
  return C.safeParse(e).success;
}
let $$P0 = unwrap(O, () => ({
  libraryKeys: w,
  cmsConfig: null,
  enabled: !1,
  publishedFromSiteFile: !1,
  sortedPrefixes: void 0
}));
let $$D2 = _$$n(() => {
  let {
    libraryKeys,
    enabled
  } = useAtomWithSubscription($$P0);
  let r = libraryKeys.map(e => LibraryAssetDataOfType.Query({
    libraryKey: e,
    assetType: FComponentType.RESPONSIVE_SET
  }));
  return En(r, {
    enabled
  });
});
export function $$k4() {
  let e = $$D2();
  let {
    enabled
  } = useAtomWithSubscription($$P0);
  let r = useMemo(() => {
    let r = {
      libraries: [],
      assetsByLibraryKey: new Map()
    };
    if (enabled) {
      for (let t of e) {
        if (t.data) {
          let e = Pv(t.data);
          if (e) {
            r.libraries.push(e.library);
            let t = e.library.libraryKey;
            r.assetsByLibraryKey.set(t, e.assets);
          }
        }
        if ("loading" === t.status) return Xm();
      }
      let t = V();
      t && r.libraries.push(t);
    }
    return gB(r);
  }, [e, enabled]);
  return useMemo(() => {
    if ("loading" === r.status) return Xm();
    let e = r.data;
    return e.libraries.length > 0 ? gB(e) : {
      status: "disabled",
      data: null,
      errors: null
    };
  }, [r]);
}
export function $$M5(e) {
  let t = $$k4();
  return !!e && t.data?.assetsByLibraryKey.has(e);
}
export function $$F6() {
  let {
    publishedFromSiteFile
  } = useAtomWithSubscription($$P0);
  let t = $$D2();
  let r = [];
  for (let e of t) {
    let t = _$$oA(e.data?.libraryKeyToFile?.file);
    let n = t?.libraryKey ?? "";
    n && r.push(n);
  }
  let s = r.map(e => LibraryComponentDataByLibraryKey.Query({
    libraryKey: e
  }));
  let o = En(s, {
    enabled: !0
  });
  return useMemo(() => {
    let t = {};
    for (let r of o) {
      let n = _$$oA(r.data?.libraryKeyToFile?.file);
      let a = r.data?.libraryKeyToFile?.file?.libraryKey;
      if (!n || !a) continue;
      let s = n.libraryHierarchyPaths.flatMap(e => e.components).map(e => Qp(e, {
        type: "team",
        file: {
          key: "",
          teamId: null,
          name: GZ,
          libraryKey: a
        }
      }));
      let o = {};
      if (publishedFromSiteFile) for (let e of s) {
        let t = e.name.match(/(.*) thumbnail/i);
        if (t) {
          let r = t[1];
          if (!r) continue;
          o[r] = e;
        }
      } else for (let e of s.filter(j)) {
        let t = e.containing_frame?.pageName?.toLocaleLowerCase();
        t && (o[t] = e);
      }
      t[_$$l(a)] = o;
    }
    return t;
  }, [publishedFromSiteFile, o]);
}
function j(e) {
  return "thumbnail" === e.name.toLocaleLowerCase();
}
export function $$U8() {
  let {
    cmsConfig
  } = useAtomWithSubscription($$P0);
  return cmsConfig;
}
export function $$B3() {
  let {
    cmsConfig
  } = useAtomWithSubscription($$P0);
  return useCallback(t => cmsConfig?.libraryKey === t, [cmsConfig]);
}
export function $$G1() {
  let {
    sortedPrefixes
  } = useAtomWithSubscription($$P0);
  return useMemo(() => {
    if (void 0 !== sortedPrefixes && 0 !== sortedPrefixes.length) return (t, r) => {
      let n = NR(kH(t.name)).toLocaleLowerCase();
      let i = NR(kH(r.name)).toLocaleLowerCase();
      let a = sortedPrefixes.findIndex(e => n.startsWith(e));
      let s = sortedPrefixes.findIndex(e => i.startsWith(e));
      return a === s ? n.localeCompare(i) : -1 === a ? 1 : -1 === s ? -1 : a - s;
    };
  }, [sortedPrefixes]);
}
export function $$V7(e) {
  let t = useMemo(() => e.map(e => e.type === FComponentType.RESPONSIVE_SET ? e.sourceLibraryKey : _$$l(Yl)), [e]);
  let {
    getLibrary
  } = G();
  let {
    data,
    status
  } = U(t);
  return useCallback(e => {
    let t = e.type === FComponentType.RESPONSIVE_SET ? e.sourceLibraryKey : _$$l(Yl);
    return data?.[t] ?? getLibrary(t)?.name ?? "";
  }, [data, getLibrary]);
}
export const AS = $$P0;
export const Bv = $$G1;
export const Nn = $$D2;
export const VF = $$B3;
export const ce = $$k4;
export const dj = $$M5;
export const fi = $$F6;
export const r6 = $$V7;
export const t0 = $$U8;