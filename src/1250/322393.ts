import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { permissionScopeHandler } from '../905/189185';
import { isInvalidValue, MIXED_MARKER } from '../905/216495';
import { getI18nString } from '../905/303541';
import { bj } from '../905/420347';
import { handleAtomEvent } from '../905/502364';
import { M as _$$M } from '../905/512402';
import { j as _$$j } from '../905/521149';
import { getResourceDataOrFallback } from '../905/663269';
import { getSingletonSceneGraph } from '../905/700578';
import { l as _$$l } from '../905/716947';
import { isValidSessionLocalID, parseSessionLocalID } from '../905/871411';
import { qA } from '../1250/182479';
import { go } from '../1250/447088';
import { Z } from '../1250/621895';
import { V as _$$V } from '../1250/993385';
import { useAtomValueAndSetter, Xr } from '../figma_app/27355';
import { LibraryComponentDataByLibraryKey } from '../figma_app/43951';
import { isNotNullish } from '../figma_app/95419';
import { u as _$$u } from '../figma_app/187359';
import { FFileType } from '../figma_app/191312';
import { vt } from '../figma_app/306946';
import { e as _$$e } from '../figma_app/324237';
import { LU } from '../figma_app/327588';
import { mapComponentProperties } from '../figma_app/349248';
import { gI, Wn } from '../figma_app/396464';
import { fullscreenValue } from '../figma_app/455680';
import { useIsProOrStudentPlan, useCurrentPublicPlan } from '../figma_app/465071';
import { useCurrentFileKey } from '../figma_app/516028';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { setupDynamicConfigHandler } from '../figma_app/594947';
import { Gi, qY } from '../figma_app/622574';
import { eY } from '../figma_app/722362';
import { setNodeExpanded } from '../figma_app/741237';
import { ce, EC, Fs, Hk, L1, mF, Tw, xB } from '../figma_app/755939';
import { SceneGraphHelpers, AppStateTsApi, CooperTemplateTypesTsBindings, Fullscreen, CooperHelpers, SocialMediaFormats } from '../figma_app/763686';
import { trackFileEventWithStore } from '../figma_app/901889';
import { ky } from '../figma_app/925970';
import { FU } from '../figma_app/933328';
import { useSelector, useDispatch } from 'react-redux';
import { A as _$$A } from '../vendor/850789';
function $(e) {
  let t = new Map();
  let n = new Map();
  e.forEach(e => {
    let n = e.containing_frame?.containingStateGroup?.nodeId;
    n && q(t, n, e);
  });
  e.forEach(e => {
    if (e.containing_frame?.containingStateGroup?.nodeId) return;
    let a = e.containing_frame?.nodeId || e.containing_frame?.pageId;
    let r = e.containing_frame?.name || e.containing_frame?.pageName;
    let i = e.containing_frame?.sortPosition ?? null;
    a && r && (q(t, a, e), n.set(a, {
      name: r,
      node_id: a,
      sort_position: i
    }));
  });
  return {
    groupingMap: t,
    containingFrameMap: n
  };
}
function q(e, t, n) {
  let a = e.get(t);
  a ? a.push(n) : e.set(t, [n]);
}
function V(e, t) {
  return [...e.entries()].map(([e, n]) => {
    let a = t.get(e) || [];
    return {
      name: n.name,
      node_id: n.node_id,
      sort_position: n.sort_position,
      components: a,
      thumbnail_url: a[0]?.thumbnail_url
    };
  });
}
export function $$H19() {
  return Wn().length === 0;
}
export function $$K5() {
  let e = eY();
  let t = gI();
  if (t.length === 0) return null;
  let n = t[0];
  if (n) {
    let t = e.get(n);
    if (t) {
      let n = t.symbolId;
      if (n) return e.get(n)?.sourceLibraryKey;
    }
  }
  return null;
}
export var $$Y0 = (e => (e.NEW_FILE_MODAL = 'NEW_FILE_MODAL', e.LEFT_RAIL = 'LEFT_RAIL', e))($$Y0 || {});
export let $$Q4 = createContext(null);
export function $$Z20() {
  let e = useContext($$Q4);
  if (!e) throw new Error('useCooperTemplateViewType must be used within a CooperTemplateViewTypeContext');
  return e;
}
export function $$X7() {
  return $$Z20() === 'LEFT_RAIL';
}
export function $$J18() {
  let e = trackFileEventWithStore();
  let t = useSelector(e => e.search.sessionId);
  let [n, i] = useAtomValueAndSetter(ce);
  let [o, s] = useAtomValueAndSetter(EC);
  let [l, d] = useAtomValueAndSetter(xB);
  let [c, _] = useAtomValueAndSetter(Fs);
  let m = n.trim();
  let [h] = _$$A(m, 200);
  let b = $$Z20();
  let x = Gi();
  let {
    teamTemplates,
    requestLoadMore,
    status
  } = qY(h, FFileType.COOPER, b === 'NEW_FILE_MODAL' ? 16 : 10);
  let E = useCurrentPublicPlan('useCooperTemplatesSearch');
  let C = useIsProOrStudentPlan(E).unwrapOr(!1);
  let I = _$$j();
  let N = x?.type === 'team' && C;
  let O = x?.type === 'org' ? x.entity.id : void 0;
  let R = N ? x.entity.id : void 0;
  let [{
    data: M,
    status: P
  }] = setupResourceAtomHandler(_$$V({
    query: h,
    sort_by: _$$e.Search.POPULAR,
    resource_type: [vt.COOPER_TEMPLATE_ASSET],
    org_id: O,
    team_id: R,
    include_content_for_cooper: !0
  }), {
    enabled: I && !!(O || R)
  });
  let [{
    data: D,
    status: L
  }] = setupResourceAtomHandler(_$$V({
    query: h,
    sort_by: _$$e.Search.POPULAR,
    resource_type: [vt.COOPER_TEMPLATE_ASSET],
    include_content_for_cooper: !0,
    include_category_slug: !0,
    include_tags: !0
  }));
  useEffect(() => {
    m !== h ? (s(!0), d(!0), _(!0)) : (s(status === 'loading'), d(P === 'loading'), _(L === 'loading'));
  }, [m, h, P, L, status, s, d, _]);
  o || l || c || e('template_picker_search_query_result', {
    query: m,
    searchSessionId: t,
    productType: 'cooper',
    orgId: O,
    teamId: R,
    templateFileResults: teamTemplates.length,
    internalAssetResults: M?.length ?? 0,
    communityAssetResults: D?.length ?? 0,
    entrypoint: b
  });
  return {
    searchQuery: n,
    trimmedSearchQuery: m,
    setSearchQuery: i,
    templateResults: teamTemplates,
    internalAssetResults: P === 'loaded' ? M : [],
    communityAssetResults: L === 'loaded' ? D : [],
    requestLoadMore
  };
}
export function $$ee13(e) {
  let t = Xr(Tw);
  let n = Z('cooper_template_picker_dismissed');
  let i = useSelector(e => e.search.sessionId);
  let l = useDispatch();
  return useCallback(() => {
    n({
      source: e
    });
    i && l(ky());
    permissionScopeHandler.user('Create blank template', () => {
      let e = SocialMediaFormats.CUSTOM;
      let n = CooperTemplateTypesTsBindings?.getCooperTemplateTypeSize(e);
      if (!n) {
        console.error('No size found for Cooper template type', e);
        return;
      }
      let a = CooperHelpers?.createBlankChildAtCoord(0, 0, n, 'start_from_scratch', !0, e);
      a && (fullscreenValue.triggerAction('enter-focus-view'), Fullscreen?.panToNode(a, !1));
      t(!1);
    });
  }, [t, n, e, i, l]);
}
export function $$et11() {
  let e = Xr(Tw);
  let t = Xr(Hk);
  let n = useCurrentFileKey();
  return useCallback(() => {
    n && (t(!0), e(!1), AppStateTsApi?.cooperFocusView().exitFocusedNodeView(), AppStateTsApi?.cooperFocusView().zoomToGrid(0));
  }, [e, n, t]);
}
export function $$en6({
  library: e
}) {
  let t = Xr(Tw);
  let n = useCurrentFileKey();
  let i = useDispatch();
  let s = function (e) {
    let [t] = setupResourceAtomHandler(_$$u(e), {
      enabled: !0
    });
    return useMemo(() => {
      if (t.status === 'loading') {
        return {
          status: 'loading',
          data: []
        };
      }
      let e = t.data?.components || [];
      let n = t.data?.state_groups || [];
      let {
        groupingMap,
        containingFrameMap
      } = $(e);
      return {
        status: 'loaded',
        data: [...n.map(e => ({
          name: e.name,
          node_id: e.node_id,
          components: groupingMap.get(e.node_id) || [],
          thumbnail_url: groupingMap.get(e.node_id)?.[0]?.thumbnail_url,
          sort_position: null
        })), ...V(containingFrameMap, groupingMap)]
      };
    }, [t.data, t.status]);
  }(e.library_key);
  let d = s.data;
  return useCallback(() => {
    if (!n || s.status !== 'loaded') return;
    let a = d.flatMap(e => e.components);
    if (a.length === 0) return;
    let r = {
      row: 0,
      col: 0
    };
    (AppStateTsApi?.canvasGrid().canvasGridArray.getCopy() ?? []).length > 0 && (r = {
      row: (AppStateTsApi?.canvasGrid().getLastChildCoord() ?? r).row + 1,
      col: 0
    });
    a.forEach((t, n) => {
      let a = $$ea12({
        getGridCoord: () => ({
          row: r.row,
          col: r.col + n
        }),
        libraryKey: e.library_key,
        detatchInstances: !1,
        selectAfterInsert: n === 0
      });
      i(FU({
        item: t,
        canvasPosition: new _$$M(),
        percentageOffset: new _$$M(),
        insertAsChildOfCanvas: !0,
        insertionCallback: a,
        isClick: !1,
        selectAfterInsert: !1,
        sourceForTracking: 'cooper-add-all-templates'
      }));
    });
    t(!1);
  }, [t, n, i, d, s.status, e.library_key]);
}
export function $$ea12({
  getGridCoord: e,
  detatchInstances: t = !1,
  selectAfterInsert: n = !0
}) {
  return (a, r, l) => {
    if (a.length === 0) return;
    if (t) {
      let e = permissionScopeHandler.user('cooper-detach-instances', () => Fullscreen?.detachInstances(a, !1));
      if (!e || e.length === 0) return;
      a = e;
    }
    let d = a.map(e => getSingletonSceneGraph().get(e)).filter(isNotNullish);
    let c = a[0];
    let u = CooperHelpers?.getNodeToReplace();
    if (u) {
      AppStateTsApi?.canvasGrid().replaceChildInGrid(c, u);
    } else {
      let {
        row,
        col
      } = e(!l && r ? r : {
        x: -1 / 0,
        y: -1 / 0
      });
      let a = AppStateTsApi?.canvasGrid();
      a?.insertChildAtCoord(c, row, col, 'cooper-add-template-panel');
    }
    if (n) {
      let e = getSingletonSceneGraph().get(c);
      e && SceneGraphHelpers?.replaceSelection([e.guid], !0);
      d.length === 1 && d[0] ? (d[0].isInstance && handleAtomEvent({
        id: qA
      }), AppStateTsApi?.cooperFocusView().isFocusedNodeViewEnabled() ? AppStateTsApi?.cooperFocusView().focusSelectedNodeInFocusedNodeView(!0) : setTimeout(() => {
        AppStateTsApi?.cooperFocusView().panToSelectedNodeIfOutsideViewport(0.6);
      }, 0)) : console.warn('Expected exactly one node to be inserted, but found', d.length);
    }
    setNodeExpanded(c, !0);
  };
}
export function $$er3(e) {
  let [t, n] = useAtomValueAndSetter(L1);
  let r = t[e] ?? 0;
  return {
    scrollPosition: r,
    scrollRef: useRef(null),
    onScroll: useCallback((t, a) => {
      n(e, t);
    }, [n, e]),
    resetScrollTop: useCallback(e => {
      for (let t in mF) {
        let a = mF[t];
        e.includes(a) || n(a, 0);
      }
    }, [n])
  };
}
export function $$ei9(e) {
  let t = LibraryComponentDataByLibraryKey.Query({
    libraryKey: e
  });
  let [n] = setupResourceAtomHandler(t, {
    enabled: !0
  });
  return useMemo(() => {
    if (n.status === 'loading') {
      return {
        status: 'loading',
        data: {
          templates: []
        }
      };
    }
    let t = getResourceDataOrFallback(n.data?.libraryKeyToFile?.file);
    if (!t || !e) {
      return {
        status: 'loaded',
        data: {
          templates: []
        }
      };
    }
    let {
      groupingMap,
      containingFrameMap
    } = $(t.libraryHierarchyPaths.flatMap(e => e.components).map(t => mapComponentProperties(t, {
      type: 'team',
      file: {
        key: '',
        teamId: null,
        name: '',
        libraryKey: e
      }
    })).sort(go));
    return {
      status: 'loaded',
      data: {
        templates: [...V(containingFrameMap, groupingMap)],
        template_name: t.template?.name,
        publisher_name: t.template?.publishedByUserNullable?.name,
        description: t.template?.description
      }
    };
  }, [n.data, n.status, e]);
}
export function $$eo8() {
  let e = useMemo(() => e => {
    let t = e.mirror.selectionProperties.cooperTemplateData;
    if (isInvalidValue(t)) return MIXED_MARKER;
    if (!t) return SocialMediaFormats.CUSTOM;
    let n = t.type || 'CUSTOM';
    return SocialMediaFormats[n];
  }, []);
  return useSelector(e);
}
export function $$es2() {
  let e = $$eo8();
  let t = ef();
  return useMemo(() => {
    if (isInvalidValue(e) || !t) return null;
    for (let t of CooperTemplateTypesTsBindings?.getAllExceptCustomTemplateGroups() || []) {
      let n = t.types.find(t => t.type === e);
      if (n) return n.name;
    }
    return null;
  }, [e, t]);
}
export function $$el16(e) {
  return useMemo(() => {
    if (!e) return null;
    for (let t of CooperTemplateTypesTsBindings?.getAllExceptCustomTemplateGroups() || []) {
      let n = t.types.find(t => t.type === e);
      if (n) return n.name;
    }
    return null;
  }, [e]);
}
function ed() {
  let {
    getDynamicConfig
  } = setupDynamicConfigHandler('cooper_asset_type_to_category_and_tag_map');
  return getDynamicConfig().get('asset_type_map', {});
}
function ec(e, t) {
  let n = {
    category_slug: void 0,
    tags_text: void 0,
    tags_slug: void 0
  };
  if (!e || isInvalidValue(e)) return n;
  try {
    return t[SocialMediaFormats[e]] || n;
  } catch (e) {
    console.error('Error getting asset type fields:', e);
    return n;
  }
}
export function $$e_14(e) {
  let t = ed();
  return useMemo(() => ec(e, t), [e, t]);
}
export function $$eu10() {
  let e = $$eo8();
  let t = ef();
  let n = ed();
  return useMemo(() => ec(t ? e : null, n), [e, n, t]);
}
export function $$em21(e) {
  let t = bj([_$$l(e)]);
  let n = t.data;
  return {
    libraries: n,
    librariesIsLoading: t.status === 'loading',
    numComponents: n && n[0] && 'num_components' in n[0] ? n[0].num_components : 0
  };
}
export function $$ep15() {
  let e = LU();
  return useCallback(() => {
    permissionScopeHandler.user('Duplicate as blank cooper asset', () => {
      let t = null;
      let n = AppStateTsApi?.getInsertGridCoord({
        x: -1 / 0,
        y: -1 / 0
      });
      if (!n) {
        console.error('No insert grid coordinate found for duplicating cooper asset', n);
        return;
      }
      t = isValidSessionLocalID(parseSessionLocalID(e)) ? CooperHelpers?.duplicateAsBlankCooperAsset(e, n.row, n.col, 'duplicate_as_blank_cooper_asset') : CooperHelpers?.createBlankChildAtCoord(n.row, n.col, new _$$M(1080, 1080), 'duplicate_as_blank_cooper_asset', !0, SocialMediaFormats.INSTA_POST_SQUARE) ?? null;
      AppStateTsApi?.cooperFocusView().isFocusedNodeViewEnabled() && t && AppStateTsApi?.cooperFocusView().focusNodeInFocusedNodeView(t, !0);
    });
  }, [e]);
}
export function $$eg17(e) {
  let [t, n] = useState(!1);
  useEffect(() => {
    let t = () => {
      e.current && n(e.current.scrollWidth > e.current.clientWidth || e.current.scrollHeight > e.current.clientHeight);
    };
    let a = requestAnimationFrame(t);
    let r = new ResizeObserver(t);
    e.current && r.observe(e.current);
    return () => {
      cancelAnimationFrame(a);
      r.disconnect();
    };
  }, [e]);
  return t;
}
function ef() {
  return useSelector(e => e.mirror.selectionProperties.numSelected || 0) === 1;
}
let eh = () => ({
  [SocialMediaFormats.BANNER_STANDARD]: getI18nString('cooper.templates.banner_standard_pretty'),
  [SocialMediaFormats.BANNER_ULTRAWIDE]: getI18nString('cooper.templates.banner_ultrawide_pretty'),
  [SocialMediaFormats.BANNER_WIDE]: getI18nString('cooper.templates.banner_wide_pretty'),
  [SocialMediaFormats.CARD_HORIZONTAL]: getI18nString('cooper.templates.card_horizontal_pretty'),
  [SocialMediaFormats.CARD_VERTICAL]: getI18nString('cooper.templates.card_vertical_pretty'),
  [SocialMediaFormats.FACEBOOK_AD_PORTRAIT]: getI18nString('cooper.templates.facebook_ad_portrait_pretty'),
  [SocialMediaFormats.FACEBOOK_AD_SQUARE]: getI18nString('cooper.templates.facebook_ad_square_pretty'),
  [SocialMediaFormats.INSTA_POST_PORTRAIT]: getI18nString('cooper.templates.instagram_post_portrait_pretty'),
  [SocialMediaFormats.INSTA_POST_SQUARE]: getI18nString('cooper.templates.instagram_post_square_pretty'),
  [SocialMediaFormats.LINKEDIN_AD_LANDSCAPE]: getI18nString('cooper.templates.linked_in_ad_landscape_pretty'),
  [SocialMediaFormats.LINKEDIN_AD_SQUARE]: getI18nString('cooper.templates.linked_in_ad_square_pretty'),
  [SocialMediaFormats.LINKEDIN_AD_VERTICAL]: getI18nString('cooper.templates.linked_in_ad_vertical_pretty'),
  [SocialMediaFormats.LINKEDIN_POST_LANDSCAPE]: getI18nString('cooper.templates.linked_in_post_landscape_pretty'),
  [SocialMediaFormats.LINKEDIN_POST_PORTRAIT]: getI18nString('cooper.templates.linked_in_post_portrait_pretty'),
  [SocialMediaFormats.LINKEDIN_POST_SQUARE]: getI18nString('cooper.templates.linked_in_post_square_pretty'),
  [SocialMediaFormats.NAME_TAG_LANDSCAPE]: getI18nString('cooper.templates.name_tag_landscape_pretty'),
  [SocialMediaFormats.NAME_TAG_PORTRAIT]: getI18nString('cooper.templates.name_tag_portrait_pretty'),
  [SocialMediaFormats.PRINT_US_LETTER]: getI18nString('cooper.templates.print_us_letter_pretty')
});
export function $$eb1(e, {
  usePrettyName: t
}) {
  let n = useMemo(eh, []);
  let r = useMemo(() => (CooperTemplateTypesTsBindings?.getAllExceptCustomTemplateGroups() || []).flatMap(e => e.types), []);
  let i = ed();
  let s = useCallback(e => e ? t ? n[e.type] ?? e.name : e.name : null, [n, t]);
  return useMemo(() => {
    let t = new Map();
    for (let n of e) {
      if (!n || !n.component) continue;
      let {
        component,
        categorySlug,
        tags
      } = n;
      let d = component.id;
      if (!d) continue;
      let c = null;
      let _ = {
        width: component.min_node_width,
        height: component.min_node_height
      };
      if (_.width && _.height) {
        let e = r.filter(e => e.dimension.x === _.width && e.dimension.y === _.height);
        if (e.length === 1) {
          c = s(e[0]) ?? null;
        } else if (e.length > 1) {
          let t = null;
          if (categorySlug) {
            for (let n of e) {
              let e = SocialMediaFormats[n.type];
              if (!e) continue;
              let r = i[e];
              if (r && r.category_slug === categorySlug) {
                let e = !tags || Object.keys(tags).length === 0;
                if (!e && tags) {
                  let t = Object.keys(tags)[0];
                  if (t) {
                    let n = tags[t];
                    n && r.tags_slug?.includes(n) && (e = !0);
                  }
                }
                if (e) {
                  t = s(n);
                  break;
                }
              }
            }
          }
          c = t ?? s(e[0]) ?? null;
        }
      }
      t.set(d, c);
    }
    return t;
  }, [e, r, i, s]);
}
export const Gu = $$Y0;
export const Ij = $$eb1;
export const M1 = $$es2;
export const Nd = $$er3;
export const TE = $$Q4;
export const Th = $$K5;
export const Ui = $$en6;
export const VU = $$X7;
export const XH = $$eo8;
export const _M = $$ei9;
export const a2 = $$eu10;
export const aZ = $$et11;
export const fp = $$ea12;
export const g5 = $$ee13;
export const gF = $$e_14;
export const jL = $$ep15;
export const jv = $$el16;
export const o6 = $$eg17;
export const pI = $$J18;
export const pK = $$H19;
export const v3 = $$Z20;
export const zA = $$em21;