import { useCallback, useMemo, useState, useRef, useEffect, createContext, useContext } from "react";
import { useDispatch } from "../vendor/514228";
import { Ez5, zMY, zkO, QjO } from "../figma_app/763686";
import { l7, nc } from "../905/189185";
import { l as _$$l } from "../905/716947";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription, Xr, useAtomValueAndSetter } from "../figma_app/27355";
import { resourceUtils, LOADING_STATUS } from "../905/989992";
import { useLocalStorageSync } from "../905/657224";
import E from "../vendor/116389";
import { A as _$$A } from "../vendor/850789";
import { Wn, ql } from "../figma_app/88484";
import { isLocalCluster, getSlidesDefaultBlankTemplate } from "../figma_app/169182";
import { Point } from "../905/736624";
import { Bs } from "../figma_app/933328";
import { qY } from "../figma_app/622574";
import { Cu } from "../figma_app/314264";
import { q5, tS } from "../figma_app/516028";
import { TA } from "../905/372672";
import { a6 } from "../figma_app/198840";
import { FFileType } from "../figma_app/191312";
import { hN$ } from "../figma_app/43951";
import { YN } from "../figma_app/349248";
import { IT } from "../905/713695";
import { Fk } from "../figma_app/167249";
import { CN } from "../905/81982";
import { n as _$$n } from "../905/79930";
import { mapFileTypeToNumericString } from "../figma_app/53721";
import { Lk, uH } from "../figma_app/162807";
import { $W } from "../905/144933";
import { uW } from "../figma_app/409131";
import { E as _$$E } from "../figma_app/999099";
import { jY } from "../figma_app/21029";
import { D as _$$D } from "../7222/938408";
import { bY, Vf, VZ, Ei, Mt, ke, OR, M0 } from "../figma_app/60023";
import { l as _$$l2, x as _$$x } from "../7222/542428";
import { _ as _$$_ } from "../7222/460441";
import { Ji, CH } from "../figma_app/553488";
if (443 == require.j) {}
var f = E;
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
let j = "user_draft_template_key";
export function $$q6() {
  return Fk(e => e.getRoot().sourceLibraryKey);
}
export function $$G1(e) {
  let t = $$q6();
  let r = function (e) {
    let t = Fk((e, t) => e.get(t)?.sourceLibraryKey, e);
    let r = $$q6();
    return t || r;
  }(e);
  return useCallback(() => {
    let _ = getSingletonSceneGraph().get(e);
    l7.system("slides-remove-source-library-key", () => {
      _ && (_.sourceLibraryKey = _$$l(""));
      t === r && Ez5?.slideThemeLibBindings().setDocumentTemplateLibraryKey(_$$l(""));
    });
  }, [t, e, r]);
}
export function $$F16() {
  let e = $$J7();
  let t = function () {
    let e = useAtomWithSubscription(bY);
    return e.type === Vf.TEMPLATE_PICKER && e.source === _$$E.SLIDES_TEMPLATE;
  }();
  let r = Xr(VZ);
  let u = useMemo(() => e.data || [], [e]);
  let c = u[0];
  let i = "loaded" === e.status && u.length > 0;
  let a = jY();
  let o = (i || a || isLocalCluster()) && !t;
  let d = "dismiss-slides-template-overlay";
  let E = $$W17(u[0]);
  return {
    canDismiss: o,
    maybeUseLightTemplateOnDismiss: useCallback(() => {
      isLocalCluster() ? l7.system(d, () => {
        Ez5?.slideThemeLibBindings().insertDefaultLocalTheme(zMY.LIGHT, null);
      }) : !a && i && c && (E(c, {
        row: 0,
        col: 0
      }, zkO.SYSTEM, d, Ji.OVERLAY_MODAL), r(!1));
    }, [E, a, i, c, r])
  };
}
let Q = (e, t) => {
  let r = Number(e.name);
  let _ = Number(t.name);
  return isNaN(r) || isNaN(_) ? e.name.localeCompare(t.name) : r - _;
};
export function $$X5(e) {
  let t = uW(new Set(f()([e])), QjO.SLIDES_TEMPLATE);
  return useMemo(() => {
    if (!e) return resourceUtils.loaded([]);
    if (t.status === LOADING_STATUS.LOADING) return resourceUtils.loading();
    let r = t.data;
    if (!r) return resourceUtils.loaded([]);
    let _ = (r[e] || []).sort(Q);
    return resourceUtils.loaded(_);
  }, [t.status, t.data, e]);
}
export function $$$11(e) {
  let t = $$X5(e);
  return useMemo(() => {
    if (t.status !== LOADING_STATUS.LOADING) return f()((t.data ?? []).map(e => e.thumbnail_url));
  }, [t.status, t.data]);
}
export function $$J7() {
  let e = getSlidesDefaultBlankTemplate();
  return $$X5(_$$l(e));
}
export function $$W17(e) {
  let t = useDispatch();
  let r = Xr(Ei);
  let l = Xr(VZ);
  let [c, i] = useState(!1);
  let a = _$$D(e?.library_key);
  return (e, _, u, s, o) => {
    c || (i(!0), t(Bs({
      item: e,
      canvasPosition: new Point(),
      percentageOffset: new Point(),
      insertAsChildOfCanvas: !0,
      selectAfterInsert: !0,
      insertionCallback: nc(u, s, (r, u) => {
        CH({
          module: e,
          viewType: o,
          getGridCoord: () => _,
          dispatch: t,
          subscribeToLibrary: a
        })(r, u);
        i(!1);
      }),
      errorCallback: () => {
        i(!1);
      }
    })), r(!1), l(!1));
  };
}
export function $$z15() {
  let e = function () {
    let e = q5();
    let t = e?.template;
    return e && t && !t.unpublishedAt ? _$$l(e.libraryKey) : null;
  }();
  let [t, r] = useAtomValueAndSetter(bY);
  let [u, n] = useAtomValueAndSetter(Ei);
  let i = tS() || "";
  let a = useCallback(() => {
    n(!0);
    Cu({
      fileKey: i,
      productType: "slides",
      name: "new_slide_template_dropdown_opened"
    });
    let _ = null;
    if (e) _ = e;else {
      let e = Ez5?.slideThemeLibBindings().mostUsedTemplateLibraryKey();
      e && (_ = _$$l(e));
    }
    _ && r({
      type: Vf.TEMPLATE,
      libraryKey: _,
      parentView: {
        type: Vf.ALL
      },
      shouldRemoveSourceLibraryKeyOnFail: !0
    });
    [Vf.FILE_PICKER, Vf.TEMPLATE_PICKER].includes(t.type) && r({
      type: Vf.ALL
    });
  }, [i, n, r, e, t.type]);
  let o = useCallback(() => {
    n(!1);
  }, [n]);
  let d = useCallback(() => {
    u ? o() : a();
  }, [u, a, o]);
  return {
    openTemplatePicker: a,
    closeTemplatePicker: o,
    toggleTemplatePicker: d
  };
}
export function $$Z13() {
  let e = Xr(Ei);
  let t = Xr(VZ);
  return () => {
    e(!1);
    t(!1);
  };
}
export function $$ee9(e) {
  let [t, r] = useAtomValueAndSetter(Mt);
  let u = t[e] ?? 0;
  return {
    scrollPosition: u,
    scrollRef: useRef(null),
    onScroll: useCallback((t, _) => {
      r(e, t);
    }, [r, e]),
    resetScrollTop: useCallback(e => {
      for (let t in Vf) {
        let _ = Vf[t];
        e.includes(_) || r(_, 0);
      }
    }, [r])
  };
}
export function $$et12() {
  let [e, t] = useAtomValueAndSetter(ke);
  let r = useCallback((e, r) => {
    t(e);
  }, [t]);
  useEffect(() => () => t(0), [t]);
  return {
    showSeparator: e > 0,
    onShowSeparatorScroll: r
  };
}
let er = new CN({
  keys: ["name"],
  ignoreLocation: !0
});
export function $$e_0() {
  let [e, t] = useAtomValueAndSetter(OR);
  let r = e.trim();
  let [u] = _$$A(r, 200);
  let l = $$ei14();
  let {
    teamTemplates,
    requestLoadMore,
    status
  } = qY(u, FFileType.SLIDES, l === Ji.OVERLAY_MODAL ? 16 : 10);
  let {
    hubFilesById,
    hubFileVersions,
    areShelvesLoading
  } = function () {
    let [{
      data: e,
      status: t
    }] = IT(_$$_());
    let r = useMemo(() => e ? e.flatMap(e => e.shelf_content) : [], [e]);
    return {
      areShelvesLoading: "loading" === t,
      hubFilesById: useMemo(() => r.reduce((e, t) => (e[t.id] = t, e), {}), [r]),
      hubFileVersions: useMemo(() => r.map(e => a6(e)), [r])
    };
  }();
  let [E, f] = useState([]);
  let [b, C] = useState(!1);
  useEffect(() => {
    hubFileVersions && er.set(hubFileVersions);
  }, [hubFileVersions]);
  useEffect(() => {
    r.length > 0 && C(!0);
  }, [r]);
  useEffect(() => {
    let e = async () => {
      try {
        let e = await er.search(u);
        C(!1);
        let t = new Set();
        f(e.reduce((e, r) => {
          let _ = r.item.hub_file_id;
          let u = hubFilesById[_];
          !t.has(_) && u && (t.add(_), e.push({
            type: _$$n.HubFile,
            template: u
          }));
          return e;
        }, []));
      } catch (e) {
        C(!1);
      }
    };
    u.length > 0 && e();
  }, [u, hubFilesById]);
  return {
    searchQuery: e,
    trimmedSearchQuery: r,
    setSearchQuery: t,
    isSearchQueryLoading: "loading" === status || areShelvesLoading && u.length > 0 || b,
    searchQueryResult: [...E, ...teamTemplates],
    requestLoadMore
  };
}
export var $$eu3 = (e => (e[e.LOADING = 0] = "LOADING", e[e.NO_RECENT_FILES = 1] = "NO_RECENT_FILES", e[e.NO_QUERY_RESULTS = 2] = "NO_QUERY_RESULTS", e[e.SUCCESS = 3] = "SUCCESS", e))($$eu3 || {});
export function $$el8(e) {
  let [t, r] = useAtomValueAndSetter(M0);
  let u = t.trim();
  let [l] = _$$A(u, 200);
  let n = en(e);
  let c = useMemo(() => n.unwrapOr([]), [n]);
  let [i, a] = useState([]);
  let [o, d] = useState(!1);
  let E = l ? i : c;
  useEffect(() => {
    l && (d(!0), t());
    async function t() {
      a((await $W.getFullResults({
        query: l,
        desc: !0,
        sort: Lk.RELEVANCY,
        isGlobal: !0,
        searchModelType: uH.FILES
      }).then(({
        data: {
          meta: e
        }
      }) => e.results)).map(e => e.model).filter(t => t.editor_type === e));
      d(!1);
    }
  }, [l, e]);
  return {
    status: l && o || "loaded" !== n.status ? 0 : l && 0 === i.length ? 2 : l || 0 !== c.length ? 3 : 1,
    debouncedSearchQuery: l,
    searchQuery: t,
    setSearchQuery: r,
    files: E
  };
}
let en = getFeatureFlags().editor_file_picker_recent_files_standalone_view ? function (e) {
  let [t] = IT(hN$({
    _editorTypeRaw: mapFileTypeToNumericString(e)
  }));
  let r = useMemo(() => t.transform(e => YN(e.currentUser.recentFiles2ByEditorType)), [t]);
  useEffect(() => {
    "loaded" === r.status && Wn(r.data);
  }, [r]);
  return useMemo(() => r.transform(e => e.recent_files), [r]);
} : function (e) {
  let t = ql();
  return useMemo(() => t.transform(t => t.filter(t => t.editor_type === e)), [t, e]);
};
let $$ec4 = createContext(null);
export function $$ei14() {
  let e = useContext($$ec4);
  if (!e) throw Error("useSlidesTemplateViewType must be used within a SlidesTemplateViewTypeContext");
  return e;
}
export function $$ea10() {
  return $$ei14() === Ji.OVERLAY_MODAL ? _$$l2 : _$$x;
}
export function $$es2() {
  let [, e] = useLocalStorageSync(j, {});
  let t = q5();
  let r = TA();
  let u = (() => {
    let e = localStorage.getItem(j);
    if (!e) return {};
    try {
      let t = JSON.parse(e);
      return Object.fromEntries(Object.entries(t).filter(([e]) => e.includes("-")).map(([e, t]) => [e, t]));
    } catch {
      return {};
    }
  })();
  let l = useCallback(() => {
    if (t?.key && r) {
      let _ = `${r}-${t.key}`;
      let l = {
        userId: r,
        fileKey: t.key
      };
      e({
        ...u,
        [_]: l
      });
    }
  }, [t?.key, r, e, u]);
  let n = useCallback(() => !!t?.key && !!r && !!u[`${r}-${t.key}`], [u, t, r]);
  return {
    draftTemplateKeys: u,
    setUserDraftTemplateKeyForCurrentFile: l,
    isCurrentFileDraftTemplate: n
  };
}
export const $N = $$e_0;
export const BX = $$G1;
export const Iv = $$es2;
export const J_ = $$eu3;
export const Jn = $$ec4;
export const NG = $$X5;
export const S7 = $$q6;
export const WS = $$J7;
export const _8 = $$el8;
export const d$ = $$ee9;
export const fK = $$ea10;
export const fq = $$$11;
export const gH = $$et12;
export const m4 = $$Z13;
export const r$ = $$ei14;
export const uu = $$z15;
export const vN = $$F16;
export const yt = $$W17;