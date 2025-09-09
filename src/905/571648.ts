import { useMemo, useCallback } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { l as _$$l } from "../905/716947";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useStableMemo } from "../905/19536";
import { parsePxInt } from "../figma_app/783094";
import { f as _$$f } from "../905/412913";
import { Oo } from "../905/709171";
import { Kz, dp } from "../905/760074";
import { Fl } from "../figma_app/236178";
import { NX, Qy } from "../figma_app/777207";
import { q5 } from "../figma_app/516028";
import { sZ } from "../905/845253";
import { bO, z5 } from "../figma_app/936646";
import { ti, uJ } from "../figma_app/646357";
import { Oe } from "../figma_app/336853";
import { Bg } from "../905/81982";
import { b as _$$b } from "../figma_app/882253";
import { je, Sp } from "../figma_app/155728";
import { sO } from "../figma_app/21029";
import { Dq } from "../figma_app/177697";
import { s1 } from "../figma_app/226737";
import { LB, kj } from "../905/883812";
import { V as _$$V } from "../905/693394";
import { b as _$$b2 } from "../905/857767";
import { HU0, Lbn } from "../figma_app/27776";
import { stylePickerMaxHeight } from "../figma_app/786175";
export function $$R1(e) {
  let t = useSelector(e => e.library.local.styles);
  return useMemo(() => ti(t, e), [t, e]);
}
export function $$N0(e, t) {
  let i = useSelector(i => _$$b(i, e, t));
  let n = q5();
  let a = n && (Kz(n) ? n.sourceFileKey : n.key);
  return a && Oo(i?.data, a) ? null : i;
}
export function $$P2() {
  let e = je();
  return useMemo(() => "loaded" === e.status && e.data.some(e => e.numStyles > 0), [e]);
}
function O() {
  function e(e) {
    return e.replace(/\//g, " ");
  }
  let t = new Bg([], {
    keys: ["searchName", "description"],
    threshold: .1,
    ignoreLocation: !0,
    ignoreFieldNorm: !0,
    useExtendedSearch: !0
  });
  return (i, n) => {
    let r = n.map(t => ({
      ...t,
      searchName: e(t.name)
    }));
    t.set(r);
    let a = e(i);
    return t.search(a).map(e => e.item);
  };
}
export function $$D5(e, t, i) {
  let n = 0;
  0 === i && (n += parsePxInt(HU0));
  i === t.length - 1 && (n += parsePxInt(HU0));
  return 0 === i || i === t.length - 1 ? {
    ...e,
    height: e.height - n,
    marginTop: 0 === i ? HU0 : void 0,
    marginBottom: i === t.length - 1 ? HU0 : void 0
  } : e;
}
let L = _$$f();
export function $$F6(e, t) {
  let i = q5();
  let a = je();
  let s = sZ();
  let l = Fl();
  let d = Oe(s) && NX(l);
  let f = useCallback(t => !(0 === Sp(t, e) || t.fileKey === i?.key || dp({
    file_repo_id: i?.fileRepoId ?? null,
    source_file_key: i?.sourceFileKey ?? null
  }, t.fileKey)), [i?.fileRepoId, i?.key, i?.sourceFileKey, e]);
  let _ = useCallback((e, i) => t?.status === "loaded" && (Oo(t.data, e.fileKey) || Oo(t.data, i.fileKey)) ? L(t.data) === e.fileKey ? -1 : 1 : d ? Qy({
    libraryA: {
      library_key: e.libraryKey,
      name: e.name
    },
    libraryB: {
      library_key: i.libraryKey,
      name: i.name
    },
    approvedLibraryKeysByResourceType: l
  }) : e.name < i.name ? -1 : 1, [t, d, l]);
  let y = useMemo(() => ("loaded" === a.status ? a.data : []).filter(f).sort(_), [a, f, _]);
  return useStableMemo({
    status: "loading" === a.status || "disabled" === a.status ? "loading" : "loaded",
    libraries: y
  }, shallowEqual);
}
let M = _$$f();
export function $$j4({
  styleType: e,
  initialSelectedSubscribedStyle: t,
  selectedLibraries: i
}) {
  let a = $$F6(e, t);
  let s = i && i.length > 0 ? i : a.libraries;
  let l = bO();
  let {
    stylesByFileKey,
    isLoadingLibraryData
  } = useMemo(() => {
    let i = Object.create(null);
    let n = !1;
    for (let t of s) {
      let r = l[t.fileKey];
      if (r?.status === "loading" || r?.status === "disabled") {
        n = !0;
        break;
      }
      r && r?.status !== "errors" && (i[r.data.fileKey] = {
        styles: z5(r, e),
        fileName: r.data.name,
        libraryKey: r.data.libraryKey
      });
    }
    t?.status !== "loaded" || i[M(t.data)] || (i[M(t.data)] = {
      styles: [t.data],
      fileName: t.data.fileName,
      libraryKey: t.data.library_key
    });
    return {
      isLoadingLibraryData: n,
      stylesByFileKey: i
    };
  }, [t, l, e, s]);
  let u = "loading" === a.status || t?.status === "loading" || t?.status === "disabled" || isLoadingLibraryData;
  return useStableMemo({
    status: u ? "loading" : "loaded",
    stylesByFileKey
  }, shallowEqual);
}
let U = _$$f();
export function $$B3(e, t, i, d, c, u) {
  let p = q5();
  let m = p?.key ?? "__OPEN_FILE_KEY__";
  let g = p ? _$$l(p.libraryKey) : void 0;
  let f = $$R1(e);
  let A = sO();
  let y = s1();
  let b = useAtomWithSubscription(Dq);
  let v = u || f;
  let {
    status,
    stylesByFileKey
  } = $$j4({
    styleType: e,
    initialSelectedSubscribedStyle: i
  });
  let D = useMemo(O, []);
  let L = useCallback((e, t) => c ? t && c && t.toLocaleLowerCase().trim().includes(c.toLocaleLowerCase()) ? e : D(c, e) : e, [D, c]);
  let F = useMemo(() => {
    let e = {};
    e[m] = L(v);
    Object.entries(stylesByFileKey).forEach(([t, {
      styles: i,
      fileName: n
    }]) => {
      e[t] = L(i, n);
    });
    return e;
  }, [L, v, stylesByFileKey, m]);
  let M = useMemo(() => {
    let t = new _$$V(d);
    if (A && ("TEXT" === e || "GRID" === e)) {
      let e = F[m].reduce((e, t) => (e[t.node_id] = t, e), {});
      t.addSlideThemesToResult(m, e, y, b);
    } else {
      let {
        sortedPrefixes,
        stylesByPrefix
      } = uJ(F[m]);
      t.addLibraryStyleItemsToResult(sortedPrefixes, stylesByPrefix, m, g);
    }
    if (i?.status === "loaded") {
      let {
        sortedPrefixes,
        stylesByPrefix
      } = uJ(F[U(i.data)]);
      t.addLibraryStyleItemsToResult(sortedPrefixes, stylesByPrefix, U(i.data), i.data.library_key, i.data.fileName);
    }
    Object.entries(stylesByFileKey).forEach(([e, {
      fileName: n,
      libraryKey: r
    }]) => {
      if (i?.status === "loaded" && e === U(i.data)) return;
      let a = F[e];
      if (!a || 0 === a.length) return;
      let {
        sortedPrefixes,
        stylesByPrefix
      } = uJ(a);
      t.addLibraryStyleItemsToResult(sortedPrefixes, stylesByPrefix, e, r, n);
    });
    LB();
    return t.getResult();
  }, [stylesByFileKey, F, i, m, g, d, A, y, e, b]);
  let [B, V] = useMemo(() => {
    let e;
    let i = 0;
    for (let n = 0; n < M.length; n++) {
      let r = M[n];
      if (i += kj(M, n), r.type === _$$b2.StylesRow && r.styles.some(e => e.key === t) && (e = i - parsePxInt(Lbn) / 2), i >= parsePxInt(stylePickerMaxHeight) && null != e) break;
    }
    return [Math.min(i, parsePxInt(stylePickerMaxHeight)), e];
  }, [M, t]);
  return useStableMemo({
    status,
    items: M,
    height: B,
    initialOffset: V
  }, shallowEqual);
}
export const AH = $$N0;
export const Je = $$R1;
export const Kq = $$P2;
export const V0 = $$B3;
export const Zk = $$j4;
export const _l = $$D5;
export const dG = $$F6;