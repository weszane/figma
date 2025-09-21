import { useState, useMemo, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { debounce } from "../905/915765";
import { getInitialOptions } from "../figma_app/169182";
import { isCommandOrShift } from "../905/63728";
import { getTranslatedDynamicContent, getI18nString } from "../905/303541";
import { sz } from "../figma_app/216696";
import { rL } from "../figma_app/49598";
import { showDropdownThunk } from "../905/929976";
import { _ as _$$_ } from "../905/793009";
import { logAndTrackCTA } from "../figma_app/314264";
import { fG } from "../figma_app/973927";
import { useCurrentFileKey } from "../figma_app/516028";
import { a6 } from "../figma_app/198840";
import { FTemplateCategoryType } from "../figma_app/191312";
import { useIsLoading, useIsLoaded } from "../905/18797";
import { Ef } from "../905/81982";
import { n as _$$n } from "../905/79930";
import { CommunityPageType } from "../figma_app/45218";
import { hubFileAPI } from "../905/473998";
let $$S = {};
let v = {};
export function $$A3(e) {
  let {
    templatesShelfType,
    source
  } = e;
  let o = useDispatch();
  let [u] = useState(() => new Ef([], {
    keys: ["name"]
  }));
  let p = templatesShelfType || CommunityPageType.FIGJAM_TEMPLATES_PICKER;
  let h = sz.loadingKeyForPayload({
    shelfType: p
  });
  let f = useIsLoading(h);
  let b = useIsLoaded(h);
  let I = useSelector(e => e.hubFiles);
  let S = useSelector(e => e.communityHub.shelves[p]);
  let v = useCurrentFileKey();
  let A = getInitialOptions().user_data?.id;
  let [x, N] = useState("");
  let [C, w] = useState([]);
  let O = useMemo(() => (S || []).reduce((e, t) => ({
    ...e,
    [t.id]: t.shelf_content.map(e => e.id)
  }), {}), [S]);
  let R = useMemo(() => (S || []).reduce((e, t) => ({
    ...e,
    [t.id]: getTranslatedDynamicContent(t.i18n_meta.title, t.title)
  }), {}), [S]);
  let L = useMemo(() => (S || []).map(({
    id: e
  }) => e), [S]);
  let P = useCallback(e => {
    let t = I[e];
    let n = a6(t);
    o(rL({
      hubFileId: e,
      hubFileName: n.name || "this file",
      openInNewTab: !0,
      source
    }));
  }, [o, I, source]);
  useEffect(() => {
    f || b || o(sz({
      shelfType: p
    }));
  }, [o, b, f, p]);
  useEffect(() => {
    let e = Object.keys(O).reduce((e, t) => [...e, ...O[t]], []).map(e => a6(I[e]));
    u.set(e);
  }, [O, I, u]);
  useEffect(() => {
    let e;
    x ? (e = [...new Set(e = u.search(x).map(e => e.hub_file_id))], logAndTrackCTA({
      userId: A,
      fileKey: v,
      entry_point: "templates_modal",
      scope: "Templates Modal",
      files: 0,
      private_plugins: 0,
      private_widgets: 0,
      public_plugins: 0,
      public_widgets: 0,
      projects: 0,
      teams: 0,
      users: 0
    }, "search_query_result")) : e = [];
    w(e);
  }, [x, A, v, u]);
  return {
    templates: O,
    categoryTitles: R,
    hubFiles: I,
    isLoading: f,
    duplicateFile: P,
    fileKey: v,
    userId: A,
    setSearchQuery: useCallback(debounce(N, 300), []),
    searchQuery: x,
    searchTemplatesResult: C,
    categoryIds: L,
    subcategories: useMemo(() => {
      if (!S) return [];
      let e = {
        activity: getI18nString("browse_templates_modal.subcategory.activity"),
        role: getI18nString("browse_templates_modal.subcategory.role")
      };
      let t = [];
      S.forEach(r => {
        if (!r.shelf_meta.category) return;
        let n = r.shelf_meta.category;
        let i = t.find(e => e.id === n);
        i ? i.categoryIds.push(r.id) : t.push({
          id: n,
          title: e[n] || n,
          categoryIds: [r.id]
        });
      });
      return t;
    }, [S])
  };
}
export let $$x0 = "templates_context_menu";
export function $$N2(e) {
  let t = useDispatch();
  let {
    primaryKey
  } = fG()(e);
  return useCallback(e => {
    e.preventDefault();
    let n = {
      templatePrimaryKey: primaryKey,
      position: {
        top: e.clientY,
        left: e.clientX
      }
    };
    t(showDropdownThunk({
      type: $$x0,
      data: n
    }));
  }, [t, primaryKey]);
}
export function $$C1(e) {
  let {
    additionalCtaLoggingProps,
    templateId,
    source,
    forceOpenNewTab = !1,
    isDrawMode,
    enabled = !0
  } = e;
  let u = useDispatch();
  let [h] = useState(() => enabled ? new Promise(e => function (e, t) {
    if (v[e]) {
      t(v[e]);
      return;
    }
    $$S[e] || ($$S[e] = [], hubFileAPI.getVersions({
      id: e
    }).then(t => {
      if (!t) return;
      let {
        data
      } = t;
      let n = data.meta;
      v[e] = n;
      $$S[e].map(e => e(n));
      $$S[e] = [];
    }));
    $$S[e].push(t);
  }(templateId, e)) : Promise.resolve(null));
  return async (e, n) => {
    if (!enabled) {
      n?.(null);
      return;
    }
    let i = await h;
    if (!i) {
      n?.(null);
      return;
    }
    let m = a6(i);
    u(rL({
      hubFileId: templateId,
      hubFileName: m?.name || "this file",
      openInNewTab: !!forceOpenNewTab || isCommandOrShift(e),
      folderId: void 0,
      source,
      isDrawMode,
      callback: e => {
        logAndTrackCTA({
          fileKey: e,
          templateId,
          productType: i.viewer_mode === FTemplateCategoryType.WHITEBOARD ? "figjam" : "design",
          ...additionalCtaLoggingProps
        });
        _$$_("resource_inserted", {
          fileKey: e,
          resourceId: templateId,
          resourceName: m?.name,
          resourceType: "template",
          templateType: _$$n.HubFile,
          triggeredFrom: source
        });
        n?.(e);
      }
    }));
  };
}
export const hx = $$x0;
export const S = $$C1;
export const jq = $$N2;
export const bg = $$A3;