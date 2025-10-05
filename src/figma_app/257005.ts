import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resourceUtils } from "../905/989992";
import { Wn } from "../figma_app/88484";
import { KeyCodes } from "../905/63728";
import { useSubscription, useMultiSubscription } from "../figma_app/288654";
import { LazyInputForwardRef } from "../905/408237";
import { LoadingSpinner } from "../figma_app/858013";
import { ne } from "../figma_app/563413";
import { SvgComponent } from "../905/714743";
import { getI18nString, renderI18nText } from "../905/303541";
import { isLibraryResource } from "../figma_app/471982";
import { startSearchSessionAction } from "../905/977218";
import { Q1 } from "../905/201596";
import { TileType } from "../figma_app/543100";
import { selectPermissionsState } from "../figma_app/212807";
import { fileEntityDataMapper } from "../905/943101";
import { CommunityPlaygroundFileSelectorRecentFilesView, FileCanEdit } from "../figma_app/43951";
import { mapRecentFilesAndRepos, filterValidRecentFiles } from "../figma_app/349248";
import { TeamSortField, PublicModelType } from "../figma_app/162807";
import { searchAPIHandler } from "../905/144933";
import { GQ, lJ } from "../905/50159";
import { bx, Uz as _$$Uz, SL, Vg, g4, ZF, Tm, qc, Rt, i3 } from "../figma_app/312949";
import { A as _$$A } from "../1617/586892";
import { A as _$$A2 } from "../svg/821527";
var $$w3 = (e => (e.FILES = "FILES", e.PLUGINS = "PLUGINS", e.WIDGETS = "WIDGETS", e))($$w3 || {});
export function $$O4(e) {
  return jsxs("div", {
    className: bx,
    children: [jsx("div", {
      className: _$$Uz,
      children: "FILES" === e.tab ? getI18nString("community.universal_posting_modal.resource_empty.files_title") : "PLUGINS" === e.tab ? getI18nString("community.universal_posting_modal.resource_empty.plugins_title") : getI18nString("community.universal_posting_modal.resource_empty.widgets_title")
    }), jsx("div", {
      className: SL,
      children: "FILES" === e.tab ? getI18nString("community.universal_posting_modal.resource_empty.files_subtitle") : "PLUGINS" === e.tab ? getI18nString("community.universal_posting_modal.resource_empty.plugins_subtitle") : getI18nString("community.universal_posting_modal.resource_empty.widgets_subtitle")
    })]
  });
}
export function $$R5() {
  let e = useSubscription(CommunityPlaygroundFileSelectorRecentFilesView({}));
  useEffect(() => {
    if ("loaded" === e.status) {
      let t = mapRecentFilesAndRepos(e.data.currentUser.recentFiles2);
      Wn(t);
    }
  }, [e]);
  return useMemo(() => e.transform(e => filterValidRecentFiles(e.currentUser.recentFiles2)), [e]);
}
export function $$L1(e) {
  var t;
  var r;
  var o;
  var l;
  let d = useSelector(e => e.currentUserOrgId);
  r = $$R5();
  o = useMemo(() => {
    let e = r.data || [];
    return resourceUtils.loaded(e.filter(e => e.file?.parentOrgId === d));
  }, [r, d]);
  l = e.editorTypes;
  t = useMemo(() => {
    if (!l || 0 === l.length) return o;
    let e = o.data || [];
    return resourceUtils.loaded(e.filter(e => e.file?.editorType != null && l.includes(e.file.editorType)));
  }, [o, l]);
  let c = useMemo(() => "loaded" !== t.status ? [] : t.data.flatMap(e => null !== e.file ? [{
    type: TileType.FILE,
    file: {
      ...e.file,
      signedPreviewThumbnailUrls: null,
      UserFileRecentAny: {
        actionAt: e.actionAt
      }
    },
    sharedWithYouFields: null
  }] : []), [t]);
  return 0 === c.length ? jsx($$O4, {
    tab: "FILES"
  }) : jsx("div", {
    className: Vg,
    onClick: e.deselectActiveFile,
    children: c.map(t => {
      if (t.type !== TileType.FILE) return null;
      let {
        file
      } = t;
      return e.filterFn && !e.filterFn(file) ? null : jsx(k, {
        file,
        setActiveFile: e.setActiveFile,
        activeFileKey: e.activeFileKey
      }, file.key);
    })
  });
}
export function $$P2({
  activeSearchQuery: e,
  activeFileKey: t,
  setActiveFile: r,
  deselectActiveFile: s,
  searchResults: o,
  editorTypes: l
}) {
  let c = selectPermissionsState();
  let p = useSelector(e => e.authedProfilesById);
  let _ = useSelector(e => e.figFileDuplicatedFromHubFile);
  let g = useMemo(() => (o || []).map(({
    model: {
      key: e
    }
  }) => ({
    key: e
  })), [o]);
  let E = useMultiSubscription(FileCanEdit, g);
  let I = useMemo(() => E.map(({
    result: e
  }) => e.transform(e => !!e.file?.hasPermission)), [E]);
  if (!o) return jsx("div", {
    className: g4,
    children: jsx(LoadingSpinner, {
      size: "small"
    })
  });
  let S = o.filter((e, t) => e.model.editorType && (void 0 === l || l?.includes(e.model.editorType)) && !Q1(fileEntityDataMapper.toSinatra(e.model), I[t].unwrapOr(!1), {
    ...c,
    authedProfilesById: p,
    figFileDuplicatedFromHubFile: _
  }, null));
  return 0 === S.length ? jsx("div", {
    className: bx,
    children: jsx("div", {
      className: _$$Uz,
      children: renderI18nText("community.universal_posting_modal.recent_editable_files_search.no_files_matching", {
        searchQuery: jsx("span", {
          className: ZF,
          children: e
        })
      })
    })
  }) : jsx("div", {
    className: Vg,
    onClick: s,
    children: S.map(e => {
      let i = e.model;
      let a = i.hub_file && isLibraryResource(i.hub_file);
      return jsx(k, {
        file: i,
        disabled: a,
        setActiveFile: r,
        activeFileKey: t
      }, i.key);
    })
  });
}
export function $$D0(e) {
  let {
    query,
    setQuery,
    setSearchResults,
    hasCloseButton = !0
  } = e;
  let d = useDispatch();
  let u = useCallback(() => {
    query && (d(startSearchSessionAction({
      entryPoint: "community:universal_posting"
    })), setSearchResults(null), searchAPIHandler.getFullResults({
      query,
      desc: !0,
      sort: TeamSortField.RELEVANCY,
      orgId: void 0,
      isGlobal: !0,
      searchModelType: PublicModelType.FILES
    }).then(({
      data: {
        meta: e
      }
    }) => {
      setSearchResults(e.results.map(e => ({
        ...e,
        model: {
          ...fileEntityDataMapper.toLiveGraph(e.model),
          fileRepo: e.model.file_repo,
          fragments: e.model.fragments,
          owner: e.model.owner
        }
      })));
    }));
  }, [query, d, setSearchResults]);
  let m = useCallback(() => {
    setQuery("");
  }, [setQuery]);
  let f = useCallback(e => (e.keyCode === KeyCodes.ENTER && u(), !0), [u]);
  let E = useCallback(e => {
    setQuery(e);
  }, [setQuery]);
  useEffect(() => {
    let e = setTimeout(u, 300);
    return () => clearTimeout(e);
  }, [query, u]);
  let y = useRef(null);
  let {
    searchInputRef,
    onMouseDown,
    onMouseUp,
    onBlur,
    onClearSearchClick,
    onSearchKeyDown,
    onSearchChange
  } = ne({
    ...e,
    focusOnMount: !1,
    clearSearch: m,
    onChange: E,
    onSubmit: u,
    isKeyDownHandled: f
  }, y);
  return jsxs("div", {
    className: Tm,
    children: [jsx(SvgComponent, {
      className: qc,
      svg: _$$A
    }), jsx(LazyInputForwardRef, {
      ref: searchInputRef,
      className: Rt,
      onBlur,
      onChange: onSearchChange,
      onKeyDown: onSearchKeyDown,
      onMouseDown,
      onMouseUp,
      placeholder: e.placeholderText ?? getI18nString("community.universal_posting_modal.search_bar.placeholder"),
      spellCheck: !1,
      value: query
    }), !!query && hasCloseButton && jsx(SvgComponent, {
      className: i3,
      svg: _$$A2,
      onClick: onClearSearchClick
    })]
  });
}
function k(e) {
  let {
    file,
    disabled,
    setActiveFile,
    activeFileKey
  } = e;
  let o = useMemo(() => fileEntityDataMapper.toSinatra(file), [file]);
  return jsx(GQ, {
    onClick: e => {
      e.stopPropagation();
      disabled || setActiveFile(file);
    },
    file: o,
    subtitle: jsx(lJ, {
      file: o
    }),
    activeFileUsers: [],
    currentUser: null,
    isSelected: !disabled && activeFileKey === file.key,
    disabled,
    tooltipText: disabled ? getI18nString("community.publishing.this_file_has_been_published_to_community_as_a_library") : void 0
  });
}
export const IW = $$D0;
export const fV = $$L1;
export const fp = $$P2;
export const gr = $$w3;
export const n6 = $$O4;
export const ql = $$R5;