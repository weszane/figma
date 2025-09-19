import { uniqBy } from 'lodash-es'
import { createContext, useCallback, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { selectWithShallowEqual } from '../905/103090'
import { ServiceCategories } from '../905/165054'
import { NotificationType } from '../905/170564'
import { getI18nString } from '../905/303541'
import { getDirname } from '../905/309735'
import { generateUniqueKey } from '../905/383708'
import { MissingStyleKeyToLibraryKeyQuery, UnpublishedStylesQuery } from '../905/404538'
import { isFullyTransparentFill } from '../905/405710'
import { debugState } from '../905/407919'
import { FileKeySourceEnum } from '../905/412913'
import { trackEventAnalytics } from '../905/449184'
import { handleAtomEvent } from '../905/502364'
import { orgLibrarySubscriptionsAtom, teamLibrarySubscriptionOverridesAtomFamily, usePresetSubscriptionsMapping, userLibrarySubscriptionsAtom, workspaceLibrarySubscriptionsAtomFamily } from '../905/561897'
import { getFeatureFlags } from '../905/601108'
import { replaceLocalThumbnails, updateStyleThumbnailOptimist } from '../905/711212'
import { liveStoreInstance } from '../905/713695'
import { logError } from '../905/714362'
import { areSetsSubset } from '../905/760682'
import { getSelectedFile } from '../905/766303'
import { generateFileVersionUrl } from '../905/815475'
import { getOrgByCurrentUserId } from '../905/845253'
import { notificationActions } from '../905/851662'
import { F7, n3, Pg, Rf, VariableStyleId } from '../905/859698'
import { getParentOrgId, resolveParentOrgId } from '../905/872904'
import { componentReplaceLocal } from '../905/879323'
import { XHR } from '../905/910117'
import { debounce } from '../905/915765'
import { createLoadedState, createLoadingState } from '../905/957591'
import { atomStoreManager, useAtomWithSubscription } from '../figma_app/27355'
import { batchPutFileAction } from '../figma_app/78808'
import { generateNodeThumbnail, generateThumbnailFromStyleMaster, getDefaultPlaceholderThumbnail, isValidThumbnail, revokeThumbnailUrl, teamLibraryCache } from '../figma_app/80990'
import { subscribedStateGroupsNodeIdsFromLoadedPagesSelector, subscribedStateGroupsNodeIdsOnCurrentPageSelector, subscribedSymbolsNodeIdsFromLoadedPagesSelector, subscribedSymbolsNodeIdsOnCurrentPageSelector } from '../figma_app/141508'
import { He, je, Qh } from '../figma_app/155728'
import { FContainerType } from '../figma_app/191312'
import { e3 } from '../figma_app/275938'
import { wM } from '../figma_app/463500'
import { debug, throwTypeError } from '../figma_app/465776'
import { selectCurrentFile } from '../figma_app/516028'
import { LibraryAgeEnum, NO_TEAM, PRIMARY_WORKFLOW_TYPES, PrimaryWorkflowEnum, StagingStatusEnum, SubscriptionStatusEnum } from '../figma_app/633080'
import { filterNotNullish } from '../figma_app/656233'
import { loadingStateDelete } from '../figma_app/714946'
import { Fullscreen, SceneGraphHelpers, StateGroupErrorType, VariableErrorType, VariableSetErrorType } from '../figma_app/763686'
import { Ez } from '../figma_app/766708'
import { memoizeByArgs } from '../figma_app/815945'
import { isSelectedViewFullscreenCooper } from '../figma_app/828186'
import { CURRENT_VERSION_ID } from '../figma_app/841351'
import { formatList } from '../figma_app/930338'

var $$er57 = (e => (e.CURRENT = 'current', e.ALL = 'all', e))($$er57 || {})
export let $$en23 = createContext(null)
export function $$ei18(e) {
  return e === StagingStatusEnum.CURRENT || e === StagingStatusEnum.CHANGED || e === StagingStatusEnum.DELETED
}
export function $$ea79(e) {
  return e === StagingStatusEnum.NEW || e === StagingStatusEnum.CHANGED || e === StagingStatusEnum.DELETED
}
export function $$es33(e) {
  switch (e.type) {
    case PrimaryWorkflowEnum.COMPONENT:
      return {
        type: e.type,
        key: e.component_key,
        version: e.content_hash,
      }
    case PrimaryWorkflowEnum.STATE_GROUP:
      return {
        type: e.type,
        key: e.key,
        version: e.version,
      }
    case PrimaryWorkflowEnum.STYLE:
      return {
        type: e.type,
        key: e.key,
        version: e.content_hash,
      }
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.MODULE:
      return {
        type: e.type,
        key: e.key,
        version: e.version,
      }
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      if (e.subscriptionStatus === 'LOCAL') {
        return {
          type: e.type,
          key: e.keyForPublish,
          version: e.version,
        }
      }
      return {
        type: e.type,
        key: e.key,
        version: e.version,
      }
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return {
        type: e.type,
        key: e.keyForPublish,
        version: e.version,
      }
    default:
      throwTypeError(e, `Unknown type ${e?.type}`)
  }
}
export function $$eo3(e) {
  let {
    key,
  } = $$es33(e)
  debug(void 0 !== key, 'Asset had no key', {
    asset: e,
  })
  return key
}
export function $$el46(e) {
  switch (e.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return e.subscriptionStatus === 'LIBRARY' ? e.sourceLibraryKey : null
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return e.library_key
  }
}
export function $$ed51(e) {
  return e.map($$eo3)
}
export function $$ec7(e) {
  return $$es33(e).version
}
export function $$eu21(e) {
  return !e.isShown || e.isCreating ? null : e.style.isLocal ? null : e.style
}
export function $$ep106(e, t, r) {
  for (let r of Object.values(t)) {
    if (r.status === 'loaded' && r.data.key === e)
      return r.data
  }
  for (let t of Object.values(r)) {
    if (t.key === e)
      return t
  }
  return null
}
export function $$e_73(e, t) {
  let r = Object.create(null)
  if (!t || !t.library_key)
    return r
  let n = t.library_key
  let i = t.team_id || NO_TEAM
  let a = e[i]?.[n] ?? Object.create(null)
  for (let e in a) a[e].unpublished_at == null && (r[e] = a[e])
  return r
}
export function $$eh19(e, t) {
  return t ? $$eg95(e)[t] ?? {} : {}
}
export function $$em0(e, t) {
  return Object.values($$eh19(e, t))
}
export function $$eg95(e) {
  let t = {}
  for (let r of Object.values(e)) {
    for (let [e, n] of Object.entries(r)) t[e] = n
  }
  return t
}
export function $$ef101(e) {
  let t = []
  $$ey41(e, (e, r, n, i) => {
    t.push(i)
  })
  return t
}
export function $$eE1(e) {
  let t = []
  for (let r of Object.keys(e)) {
    for (let n of Object.values(e[r] ?? {})) t.push(n)
  }
  return t
}
export function $$ey41(e, t) {
  for (let [r, n] of Object.entries(e)) {
    for (let [e, i] of Object.entries(n)) {
      let n = e
      for (let [e, a] of Object.entries(i)) t(r, n, e, a)
    }
  }
}
export function $$eb50(e) {
  return Object.keys(e).map(t => e[t]).filter(e => !e.deletedFromSceneGraph)
}
export function $$eT96(e, t) {
  let r = []
  for (let n in e) {
    let i = e[n]
    i.style_type !== t || i.deletedFromSceneGraph || r.push(i)
  }
  return r
}
export function $$eI2(e, t, r, n) {
  let i = []
  for (let a of Object.keys(t)) {
    let s = a
    if (eF(e.defaultPublished, r, s, n)) {
      let e = t[s] ?? {}
      i.push(...Object.values(e))
    }
  }
  return i
}
let $$eS = new Set()
export async function $$ev90(e) {
  let t = new Map((e = e.filter(e => e.canvas_url && !teamLibraryCache.hasKeyInCache(generateFileVersionUrl(e.canvas_url).url) && !$$eS.has(e.key))).map(e => [e.key, e.canvas_url]))
  let r = e.map(e => e.key)
  if (r.forEach(e => $$eS.add(e)), getFeatureFlags().ds_file_proxy_for_style_assets) {
    await Promise.all(r.map(e => teamLibraryCache.getCanvas({
      canvas_url: t.get(e),
    })))
  }
  else {
    if (r.length === 0)
      return
    try {
      let e = await XHR.post('/style/canvases', {
        style_keys: r,
      })
      for (let [r, n] of Object.entries(e.data.meta.urls)) {
        XHR.crossOriginGetAny(n, null, {
          responseType: 'arraybuffer',
        }).then(({
          data: e,
        }) => {
          let n = t.get(n3(r))
          if (n) {
            let t = generateFileVersionUrl(n).url
            teamLibraryCache.putCanvas(t, e)
          }
          $$eS.$$delete(n3(r))
        }).catch(() => {
          $$eS.$$delete(n3(r))
        })
      }
    }
    catch (e) {
      r.forEach(e => $$eS.$$delete(e))
    }
  }
}
let $$eA84 = ['TEXT', 'FILL', 'EFFECT', 'GRID']
let ex = (e, t) => {
  let r = t ? 1 : 2
  switch (e) {
    case 'TEXT':
      return getI18nString('design_systems.styles.text_style', {
        numStyles: r,
      })
    case 'FILL':
      return getI18nString('design_systems.styles.color_style', {
        numStyles: r,
      })
    case 'EFFECT':
      return getI18nString('design_systems.styles.effect_style', {
        numStyles: r,
      })
    case 'GRID':
      return getI18nString('design_systems.styles.guide_style', {
        numStyles: r,
      })
    case 'EXPORT':
      return getI18nString('design_systems.styles.export_style')
    case 'STROKE':
      return getI18nString('design_systems.styles.stroke_style')
    default:
      trackEventAnalytics('Unknown style type', {
        styleType: e,
      })
      return getI18nString('design_systems.styles.styles', {
        numStyles: r,
      })
  }
}
export function $$eN39(e) {
  return ex(e, !1)
}
export function $$eC52(e) {
  return ex(e, !0)
}
function ew(e, t, r) {
  return t in e
    ? {
        design: !!e[t]?.design,
        figjam: !!e[t]?.figjam,
        slides: !!e[t]?.slides,
        buzz: !!e[t]?.buzz,
        subscriptionType: r,
        subscriptionId: e[t]?.subscriptionId,
      }
    : {
        design: null,
        figjam: null,
        slides: null,
        buzz: null,
        subscriptionType: null,
      }
}
let eO = e => e.design !== null && e.figjam !== null && e.slides !== null
export function $$eR35(e) {
  let t = useAtomWithSubscription(orgLibrarySubscriptionsAtom)
  let r = (function (e) {
    let t = usePresetSubscriptionsMapping()
    return useMemo(() => e
      ? t ? createLoadedState(ew(t, e, Qh.COMMUNITY)) : createLoadingState()
      : createLoadedState({
          design: !1,
          figjam: !1,
          slides: !1,
          buzz: !1,
          subscriptionType: null,
        }), [e, t])
  }(e))
  return useMemo(() => {
    if (!e) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null,
      })
    }
    if (t.status !== 'loaded')
      return t
    if (r.status !== 'loaded')
      return r
    let n = ew(t.data, e, Qh.ORGANIZATION)
    return eO(n) ? createLoadedState(n) : r
  }, [e, t, r])
}
export function $$eL103(e, t) {
  let r = useAtomWithSubscription(workspaceLibrarySubscriptionsAtomFamily(t))
  let i = $$eR35(e)
  return useMemo(() => {
    if (!e) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null,
      })
    }
    if (r.status !== 'loaded')
      return r
    if (i.status !== 'loaded')
      return i
    let t = ew(r.data, e, Qh.WORKSPACE)
    return eO(t) ? createLoadedState(t) : i
  }, [e, r, i])
}
export function $$eP105(e, t) {
  let r = useAtomWithSubscription(teamLibrarySubscriptionOverridesAtomFamily(t))
  let i = $$eL103(e, t)
  return useMemo(() => {
    if (!e || !t) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null,
      })
    }
    if (r.status !== 'loaded')
      return r
    if (i.status !== 'loaded')
      return i
    let n = ew(r.data, e, Qh.TEAM)
    return eO(n) ? createLoadedState(n) : i
  }, [e, r, i, t])
}
export function $$eD4(e) {
  let t = useAtomWithSubscription(userLibrarySubscriptionsAtom)
  let r = $$eR35(e)
  return useMemo(() => {
    if (!e) {
      return createLoadedState({
        design: !1,
        figjam: !1,
        slides: !1,
        buzz: !1,
        subscriptionType: null,
      })
    }
    if (t.status !== 'loaded')
      return t
    if (r.status !== 'loaded')
      return r
    let n = ew(t.data, e, Qh.USER)
    return eO(n) ? createLoadedState(n) : r
  }, [e, t, r])
}
let ek = (e, t) => generateUniqueKey(e.key) === t || !!e.source_file_key && generateUniqueKey(e.source_file_key) === t
export function $$$$eM69() {
  let e = selectCurrentFile()
  let t = useSelector(e => e.library)
  let r = He()
  return useCallback(n => !!e && eF(t.defaultPublished, {
    key: e.key,
    team_id: e.teamId,
    editor_type: e.editorType,
    source_file_key: e.sourceFileKey,
  }, n, r), [e, t.defaultPublished, r])
}
function eF(e, t, r, n) {
  return !(!t || !r || ek(t, r)) && (!!$$tu94(e, r) || n.has(r))
}
export function $$ej14(e, t, r, n, i, a) {
  if (r.length)
    return !0
  for (let r of n) {
    let n
    let s = i[r]
    if (s && (n = 'library_key' in s ? s.library_key : s.status === 'loaded' && s.data.library_key) && eF(e.defaultPublished, {
      key: t.key,
      team_id: t.teamId,
      editor_type: t.editorType,
      source_file_key: t.sourceFileKey,
    }, n, a)) {
      return !0
    }
  }
  return !1
}
let eU = (e, t) => e.style_type === t.style_type ? 0 : $$eA84.indexOf(e.style_type) < $$eA84.indexOf(t.style_type) ? -1 : 1
let eB = (e, t) => -Ez(e.sort_position || '', t.sort_position || '')
export function $$eG31(e, t) {
  let r = eU(e, t)
  return r === 0 ? eB(e, t) : r
}
export function $$eV30(e) {
  e.sort(eB)
}
export function $$eH25(e) {
  let t = new Map()
  e.forEach((e) => {
    let r = t.get(e.style_type)
    r ? r.push(e) : t.set(e.style_type, [e])
  })
  return t
}
export function $$ez70(e, t) {
  let r = e => e && e.toLowerCase ? e.toLowerCase() : ''
  let n = e.containing_frame || {}
  let i = t.containing_frame || {}
  return n.pageId !== i.pageId ? r(n.pageName) < r(i.pageName) ? -1 : 1 : n.nodeId !== i.nodeId ? r(n.name) < r(i.name) ? -1 : 1 : r(e.name) < r(t.name) ? -1 : 1
}
export function $$eW98(e) {
  let t = [...e]
  $$eV30(t)
  return {
    stylesByPrefix: t.reduce((e, t) => {
      let r = getDirname(t.name)
      e[r] = e[r] || []
      e[r].push(t)
      return e
    }, Object.create(null)),
    sortedPrefixes: wM(t),
  }
}
let eK = !0
function eY(e, t) {
  if (!e || !t)
    return !0
  for (let r in e) {
    if (!(r in t))
      return !0
    let n = e[r]
    let i = t[r]
    for (let e in n) {
      if (n[e] !== i[e])
        return !0
    }
    for (let e in i) {
      if (!(e in n))
        return !0
    }
  }
  for (let r in t) {
    if (!(r in e))
      return !0
  }
  return !1
}
export function $$e$89(e, t, r, n, i, a, s, o, l, d) {
  let c = Object.create(null)
  let u = 0
  for (let p in t.forEach((t) => {
    let l = t.nodeId
    let p = n[l]
    a[l] = e2(i[l])
    c[l] = e(p, r[l], t, s, o, d)
    let _ = c[l]
    _.status === StagingStatusEnum.NEW && _.type === PrimaryWorkflowEnum.COMPONENT && (u += 1)
  }), n) {
    if (!(p in c)) {
      let e = i[p]
      e && e.url && revokeThumbnailUrl(e.url)
      let t = n[p]
      if (t.type === PrimaryWorkflowEnum.COMPONENT || t.type === PrimaryWorkflowEnum.STATE_GROUP) {
        t.type
        PrimaryWorkflowEnum.COMPONENT
        let e = t
        e.old_key && l.add(e.node_id)
      }
    }
  }
  for (let t in r) t in c || (a[t] = e2(i[t]), c[t] = e(n[t], r[t], null, s, o, d))
  return {
    newLocal: c,
    numNewComponents: u,
  }
}
export function $$eX24(e) {
  let t = e.getState()
  if (t.versionHistory.activeId && t.versionHistory.activeId !== CURRENT_VERSION_ID || !t.mirror?.sceneGraph)
    return
  let r = getSelectedFile(t)
  let n = r ? r.key : ''
  let i = r?.library_key ? r.library_key : ''
  let a = new Set()
  let s = isSelectedViewFullscreenCooper(t)
  let o = {}
  let {
    newLocal,
    numNewComponents,
  } = $$e$89((e, t, r, n, i) => $$eZ74(e, t, r, n, i, s), t.library.publishableSymbols, t.library.openFilePublished__LIVEGRAPH.components, t.library.local.components, t.library.local.thumbnails, o, n, i, a, PrimaryWorkflowEnum.COMPONENT)
  let {
    newLocal: _newLocal,
  } = $$e$89($$eQ26, t.library.publishableStateGroups, t.library.openFilePublished__LIVEGRAPH.stateGroups, t.library.local.stateGroups, t.library.local.thumbnails, o, n, i, a, PrimaryWorkflowEnum.STATE_GROUP)
  let {
    newLocal: _newLocal2,
  } = $$e$89($$e0104, t.library.publishableStyles, t.library.openFilePublished__LIVEGRAPH.styles, t.library.local.styles, t.library.local.thumbnails, o, n, i, a, PrimaryWorkflowEnum.STYLE)
  let {
    newLocal: _newLocal3,
  } = $$e$89(e1, t.library.publishableModules, t.library.openFilePublished__LIVEGRAPH.modules, t.library.local.modules, t.library.local.thumbnails, o, n, i, a, PrimaryWorkflowEnum.MODULE)
  if (eY(t.library.local.components, newLocal) && e.dispatch(componentReplaceLocal({
    local: newLocal,
    type: PrimaryWorkflowEnum.COMPONENT,
  })), eY(t.library.local.stateGroups, _newLocal) && e.dispatch(componentReplaceLocal({
    local: _newLocal,
    type: PrimaryWorkflowEnum.STATE_GROUP,
  })), eY(t.library.local.styles, _newLocal2) && e.dispatch(componentReplaceLocal({
    local: _newLocal2,
    type: PrimaryWorkflowEnum.STYLE,
  })), eY(t.library.local.modules, _newLocal3) && getFeatureFlags().dse_module_publish && e.dispatch(componentReplaceLocal({
    local: _newLocal3,
    type: PrimaryWorkflowEnum.MODULE,
  })), (function (e, t) {
    if (!e && !t)
      return !1
    if (!e || !t || Object.keys(e).length !== Object.keys(t).length)
      return !0
    for (let r in e) {
      if (!t[r] || e[r].url !== t[r].url || e[r].content_hash !== t[r].content_hash)
        return !0
    }
    return !1
  }(t.library.local.thumbnails, o)) && e.dispatch(replaceLocalThumbnails({
    thumbnails: o,
  })), numNewComponents > 0 && eK && (handleAtomEvent({
    id: 'Parsed first components',
  }), eK = !1), a.size > 0) {
    let r = t.notifications.filter(e => e.type === NotificationType.MOVE_COMPONENTS_PROMPT)
    if (r.length > 0) {
      let t = r[0].type === NotificationType.MOVE_COMPONENTS_PROMPT && r[0].movableItemIds
      t && areSetsSubset(t, a) && e.dispatch(notificationActions.dequeue({
        type: NotificationType.MOVE_COMPONENTS_PROMPT,
      }))
    }
  }
}
let eq = 'Generating a local library item that is neither in the library nor in the scene graph. Why.'
let eJ = (e, t, r, n, i, a) => {
  let s
  if (!r) {
    if (t) {
      return {
        ...t,
        status: StagingStatusEnum.DELETED,
        deletedFromSceneGraph: !0,
      }
    }
    throw new Error(eq)
  }
  let o = t && t.unpublished_at == null
  let l = !!r.isPublishable
  let d = StagingStatusEnum.NOT_STAGED
  o && !l ? d = StagingStatusEnum.DELETED : !o && l ? d = StagingStatusEnum.NEW : o || l || (d = StagingStatusEnum.NOT_STAGED)
  s = r.description
  let {
    description,
    description_rt,
  } = {
    description: r.descriptionPlain ?? '',
    description_rt: s ?? '',
  }
  return {
    node_id: r.nodeId,
    name: r.name,
    description,
    description_rt,
    file_key: n,
    file_key_source: FileKeySourceEnum.LOCAL_FILE,
    library_key: i,
    isPublishable: l,
    deletedFromSceneGraph: !1,
    meta: e ? e.meta : void 0,
    isLocal: !0,
    status: d,
    type: a,
    thumbnail_url: t && t.thumbnail_url || void 0,
  }
}
export function $$eZ74(e, t, r, n, i, a) {
  let s = {
    ...eJ(e, t, r, n, i, PrimaryWorkflowEnum.COMPONENT),
    type: PrimaryWorkflowEnum.COMPONENT,
    height: r?.height,
    width: r?.width,
    x: r?.x,
    y: r?.y,
    componentPropDefError: r?.componentPropDefError,
    containing_frame: r?.containingFrame || t?.containing_frame || void 0,
    component_key: t?.component_key || void 0,
    content_hash: r?.versionHash || t?.content_hash || void 0,
    userFacingVersion: r?.userFacingVersion ?? F7.INVALID,
    old_key: r?.oldKey || void 0,
    sort_position: r?.sortPosition ?? null,
    has_video: r?.hasVideo ?? !1,
  }
  if (!t)
    return s
  let o = t.unpublished_at == null
  let l = !!r?.isPublishable
  o && l && (t && t.content_hash === s.content_hash && !$$rt40(t.containing_frame, r?.containingFrame, {
    compareSortPositions: a,
  }) && $$re86(t.name, r?.name) && $$re86(t.description, s.description) && (!a || $$re86(t.sort_position, s.sort_position))
    ? s.status = StagingStatusEnum.CURRENT
    : s.status = StagingStatusEnum.CHANGED)
  return s
}
export function $$eQ26(e, t, r, n, i) {
  let a = eJ(e, t, r, n, i, PrimaryWorkflowEnum.STATE_GROUP)
  if (!t) {
    if (!r)
      throw new Error(eq)
    return {
      ...a,
      type: PrimaryWorkflowEnum.STATE_GROUP,
      version: r.versionHash,
      userFacingVersion: r.userFacingVersion,
      containing_frame: r.containingFrame,
      width: r.width,
      height: r.height,
      stateGroupError: r.stateGroupError,
      componentPropDefError: r.componentPropDefError,
      fill_color: r.fill_color,
      default_state_key: r.default_state_key,
      old_key: r.oldKey || void 0,
    }
  }
  let s = {
    ...a,
    type: PrimaryWorkflowEnum.STATE_GROUP,
    version: r?.versionHash || t.version,
    userFacingVersion: r?.userFacingVersion || Rf.INVALID,
    containing_frame: r?.containingFrame || t.containing_frame,
    width: r?.width || t.min_node_width,
    height: r?.height || t.min_node_height,
    key: t.key || void 0,
    stateGroupError: r?.stateGroupError || StateGroupErrorType.NONE,
    componentPropDefError: r?.componentPropDefError || VariableSetErrorType.NONE,
    fill_color: r?.fill_color || t?.fill_color,
    default_state_key: r?.default_state_key || t?.default_state_key,
    old_key: r?.oldKey || void 0,
  }
  let o = t.unpublished_at == null
  let l = !!r?.isPublishable
  o && l && (t.version === s.version && !$$rt40(t.containing_frame, r?.containingFrame) && $$re86(t.name, r?.name) && $$re86(t.description, s.description) ? s.status = StagingStatusEnum.CURRENT : s.status = StagingStatusEnum.CHANGED)
  return s
}
export function $$e0104(e, t, r, n, i) {
  let a = eJ(e, t, r, n, i, PrimaryWorkflowEnum.STYLE)
  let s = t && t.unpublished_at == null
  let o = !!r?.isPublishable
  let l = !1
  if (s && o && (t && t.content_hash === r?.versionHash && $$re86(t.name, r?.name) && $$re86(t.description, a.description) ? $$re86(t.sort_position, r?.sortPosition) ? a.status = StagingStatusEnum.CURRENT : (a.status = StagingStatusEnum.CHANGED, l = !0) : a.status = StagingStatusEnum.CHANGED), r) {
    return {
      ...a,
      type: PrimaryWorkflowEnum.STYLE,
      key: r.styleKey,
      style_type: r.styleType,
      is_soft_deleted: r.isSoftDeleted,
      sort_position: r.sortPosition,
      content_hash: r.versionHash,
      userFacingVersion: r.userFacingVersion,
      hasOnlyBeenReordered: l,
      old_key: r.oldKey || void 0,
    }
  }
  if (t) {
    return {
      ...a,
      type: PrimaryWorkflowEnum.STYLE,
      key: t.key,
      style_type: t.style_type,
      is_soft_deleted: !0,
      sort_position: t.sort_position,
      content_hash: t.content_hash,
      userFacingVersion: t.userFacingVersion,
      hasOnlyBeenReordered: l,
    }
  }
  throw new Error(eq)
}
function e1(e, t, r, n, i) {
  let a = eJ(e, t, r, n, i, PrimaryWorkflowEnum.MODULE)
  if (!t) {
    if (!r)
      throw new Error(eq)
    return {
      ...a,
      type: PrimaryWorkflowEnum.MODULE,
      moduleSource: r.moduleSource,
      height: r.height,
      width: r.width,
      x: r.x,
      y: r.y,
      containing_frame: r.containingFrame,
      version: r.versionHash,
      userFacingVersion: r.userFacingVersion,
      old_key: r.oldKey || void 0,
    }
  }
  let s = {
    ...a,
    type: PrimaryWorkflowEnum.MODULE,
    moduleSource: r?.moduleSource || t.moduleSource,
    height: r?.height || t.height,
    width: r?.width || t.width,
    x: r?.x,
    y: r?.y,
    containing_frame: r?.containingFrame || t.containing_frame || void 0,
    version: r?.versionHash || t.version,
    userFacingVersion: r?.userFacingVersion || Pg.INVALID,
    old_key: r?.oldKey || void 0,
    key: t.key,
  }
  let o = t && t.unpublished_at == null
  let l = !!r?.isPublishable
  o && l && (t.version === s.version && !$$rt40(t.containing_frame, r?.containingFrame) && $$re86(t.name, r?.name) && $$re86(t.description, s.description) ? s.status = StagingStatusEnum.CURRENT : s.status = StagingStatusEnum.CHANGED)
  return s
}
function e2(e) {
  return {
    kind: e && e.kind || void 0,
    url: e && e.url || void 0,
    content_hash: e && e.content_hash || void 0,
  }
}
export function $$e534(e) {
  return `GET_PUBLISHED_COMPONENTS_FOR_${e}`
}
export let $$e353 = new Set()
export function $$e422(e) {
  for (let t of $$e353) {
    e(loadingStateDelete({
      key: t,
    }))
  }
}
let e8 = new Set()
export function $$e610(e, t) {
  return e8.has(e) || e8.has(t)
}
export function $$e748(e) {
  e8.add(e)
}
export function $$e945() {
  e8.clear()
}
export let $$te75 = e => `GET_DEFAULT_LIBRARIES_FOR_${e}`
export function $$tt15(e, t) {
  let r = {}
  t.forEach((e) => {
    if (e.containing_frame?.containingStateGroup?.nodeId) {
      let t = e.containing_frame?.containingStateGroup?.nodeId
      r[t] || (r[t] = [])
      r[t].push(e.name)
    }
  })
  return e.map(e => ({
    ...e,
    stateNames: r[e.node_id],
  }))
}
let tr = new Set()
export async function $$tn62(e, t = [], r, n, i, a, s) {
  if (!t.length) {
    return {
      usedStylesByLibraryKey: {},
    }
  }
  let o = {}
  for (let r of t) {
    let t = e.get(r)
    t && t.styleKeyForPublish && Fullscreen.getNumUsagesOfStyle(t.styleKeyForPublish, !0) !== 0 && (o[t.styleKeyForPublish] = r)
  }
  let l = Object.keys(o).map(n3)
  let p = await liveStoreInstance.fetch(UnpublishedStylesQuery.UnpublishedStylesQuery({
    styleKeys: l,
    orgId: i,
  }))
  let _ = uniqBy([...p, ...Object.values(r).filter(e => e.key in o)], e => e.key)
  let h = new Set(_.map(e => e.key))
  let m = l.filter(e => e && !h.has(n3(e)))
  let f = await liveStoreInstance.fetch(MissingStyleKeyToLibraryKeyQuery.MissingStyleKeyToLibraryKeyQuery({
    styleKeys: m,
  }))
  a && delete f[a.libraryKey]
  let E = []
  let y = {}
  for (let e of _) {
    let t = e.library_key;
    (y[t] ??= []).push(e)
    n[t] || tr.has(t) || (tr.add(t), E.push(t))
  }
  for (let [t, r] of Object.entries(f)) {
    let n = t
    let i = y[n] ??= []
    for (let t of r) {
      let r = o[t] && e.get(o[t])
      r && i.push({
        type: PrimaryWorkflowEnum.STYLE,
        name: r.name,
        key: t,
        thumbnail_url: $$ti(t, r.styleVersionHash),
        canvas_url: $$ti(t, r.styleVersionHash),
        content_hash: r.styleVersionHash || void 0,
        userFacingVersion: VariableStyleId(r.userFacingVersion),
        node_id: r.guid,
        isLocal: !1,
        style_type: r.styleType,
        library_key: r.sourceLibraryKey,
      })
    }
  }
  await $$ta68(E, s)
  return {
    usedStylesByLibraryKey: y,
  }
}
function $$ti(e, t) {
  return `/style/${e}/thumbnail?ver=${t}`
}
export async function $$ta68(e, t) {
  if (e.length > 0) {
    let n = []
    async function r(e) {
      try {
        let r = await XHR.post('/api/files/batch', {
          library_keys: e,
        })
        r.data.meta || logError('designSystems', 'Unexpected empty API response', {
          data: JSON.stringify(r.data ?? null),
          numFiles: e.length,
          status: r.status,
        })
        t(batchPutFileAction({
          files: r.data.meta.files,
          subscribeToRealtime: !0,
        }))
      }
      catch (e) {
        reportError(ServiceCategories.DESIGN_SYSTEMS_EDITOR, e)
      }
    }
    for (let t = 0; t < e.length; t += 200) {
      let i = e.slice(t, t + 200)
      n.push(r(i))
    }
    await Promise.all(n)
  }
}
export async function $$ts87(e, t, r) {
  if (t.length === 0)
    return []
  let {
    styles,
    files,
  } = (await XHR.post('/api/styles', {
    style_keys: t,
    org_id: r,
  })).data.meta
  e(batchPutFileAction({
    files,
    subscribeToRealtime: !0,
  }))
  return styles
}
export function $$to85(e, t = [], r = [], n, i, a, s = !1) {
  let o = {}
  let l = t.concat(r)
  let u = $$eg95(n.components)
  let p = $$eg95(n.stateGroups)
  let _ = []
  for (let t of l) {
    let r = e.get(t)
    if (!r)
      continue
    let n = r.sourceLibraryKey
    let a = r.publishID
    if (!a || !n)
      continue
    p[n] || u[n] || tr.has(n) || (tr.add(n), _.push(n))
    let l = r.isStateGroup
    let h = l ? r.sharedStateGroupVersion : r.sharedSymbolVersion
    let m = l ? r.stateGroupKey : r.componentKey
    let g = (l ? p[n] ?? {} : u[n] ?? {})[a]
    if (g?.type === PrimaryWorkflowEnum.COMPONENT) {
      let e = g.containing_frame?.containingStateGroup?.nodeId
      if (e) {
        let t = p[n]
        g = t?.[e]
        l = !0
      }
    }
    if (g) {
      o[$$eo3(g)] = g
    }
    else if (l) {
      if (!m || o[m] || !r.reversedChildrenGuids.some((t) => {
        let r = e.get(t)?.componentKey
        return r && !o[r]
      })) {
        continue
      }
      let n = Fullscreen.getDefaultStateForLocalStateGroup(t)
      let s = e.get(n)
      let [l, u] = s ? [s.size.x, s.size.y] : [0, 0]
      o[m] = {
        type: PrimaryWorkflowEnum.STATE_GROUP,
        name: r.name,
        library_key: r.sourceLibraryKey,
        key: m,
        thumbnail_url: `/state_group/${m}/thumbnail?ver=${h}&fv=${i}`,
        canvas_url: `/state_group/${m}/canvas?ver=${h}&fv=${i}`,
        node_id: a || '',
        isLocal: !1,
        version: h || Rf.INVALID,
        userFacingVersion: Rf(r.userFacingVersion),
        containing_frame: {},
        min_node_width: u,
        min_node_height: l,
        default_state_key: '',
      }
    }
    else {
      if (!m || o[m] || r.isState && !s || i === null)
        continue
      o[m] = {
        type: PrimaryWorkflowEnum.COMPONENT,
        name: r.name,
        library_key: r.sourceLibraryKey,
        component_key: m,
        thumbnail_url: `/component/${m}/thumbnail?ver=${h}&fv=${i}`,
        canvas_url: `/component/${m}/canvas?ver=${h}&fv=${i}`,
        node_id: a || '',
        content_hash: r.sharedSymbolVersion || void 0,
        userFacingVersion: F7(r.userFacingVersion),
        isLocal: !1,
        min_node_height: r.size.x,
        min_node_width: r.size.y,
      }
    }
  }
  $$ta68(_, a)
  return Object.values(o)
}
export function $$tl9(e, t) {
  return new Set($$to85(e.mirror.sceneGraph, subscribedSymbolsNodeIdsFromLoadedPagesSelector(e), subscribedStateGroupsNodeIdsFromLoadedPagesSelector(e), e.library.publishedByLibraryKey, e.fileVersion, t).map(e => $$eo3(e)))
}
let $$td = (e, t, r, n, i, a) => $$to85(e, t, r, n, i, a, !0).reduce((e, t) => (t.type === PrimaryWorkflowEnum.COMPONENT ? t.component_key && (e[t.component_key] = t) : e[t.key] = t, e), Object.create(null))
export function $$tc66(e) {
  let t = useDispatch()
  let {
    library,
    sceneGraph,
    fileVersion,
    subscribedComponents,
    subscribedStateGroups,
    subscribedComponentsOnCurrentPage,
    subscribedStateGroupsOnCurrentPage,
  } = selectWithShallowEqual(e => ({
    library: e.library,
    sceneGraph: e.mirror.sceneGraph,
    fileVersion: e.fileVersion,
    subscribedComponents: subscribedSymbolsNodeIdsFromLoadedPagesSelector(e),
    subscribedStateGroups: subscribedStateGroupsNodeIdsFromLoadedPagesSelector(e),
    subscribedComponentsOnCurrentPage: subscribedSymbolsNodeIdsOnCurrentPageSelector(e),
    subscribedStateGroupsOnCurrentPage: subscribedStateGroupsNodeIdsOnCurrentPageSelector(e),
  }))
  let [u, p] = e === 'current' ? [subscribedComponentsOnCurrentPage, subscribedStateGroupsOnCurrentPage] : [subscribedComponents, subscribedStateGroups]
  return useMemo(() => $$td(sceneGraph, u, p, library.publishedByLibraryKey, fileVersion, t), [sceneGraph, u, p, library.publishedByLibraryKey, fileVersion, t])
}
export function $$tu94(e, t) {
  let r = e.libraryKeys.includes(t)
  let n = atomStoreManager.get(e3).has(t)
  return !!r || !!n
}
let tp = memoizeByArgs((e) => {
  let t = {}
  let r = e.local.styles
  for (let e in r) {
    let n = r[e]
    t[n.key] = n
  }
  return t
})
export function $$t_17(e, t, r) {
  let n = tp(r)[e]
  if (n) {
    return {
      kind: SubscriptionStatusEnum.LOCAL,
      value: n,
    }
  }
  let i = r.used__LIVEGRAPH.styles[e]
  return i?.status === 'loaded'
    ? {
        kind: SubscriptionStatusEnum.SUBSCRIBED_WITH_LIBRARY,
        value: i.data,
      }
    : t && t.length
      ? {
          kind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
          value: {
            key: e,
            node_id: t[0],
          },
        }
      : void 0
}
export function $$th42(e, t) {
  return $$t_17(e, t, useSelector(e => e.library))
}
export function $$tm97(e, t) {
  if (!e)
    return ''
  if (e.kind !== SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY)
    return e.value.name
  {
    let r = t.get(e.value.node_id)
    return r ? r.name : ''
  }
}
export function $$tg92(e, t) {
  let r = useSelector(e => e.mirror.sceneGraph)
  return $$tm97($$th42(e, t), r)
}
export function $$tf49(e) {
  let t = {}
  for (let r in e) {
    let n = e[r]
    n.containing_frame?.containingStateGroup && (t[r] = {
      ...n,
    })
  }
  return t
}
export function $$tE61(e, t, r, n) {
  let i = t ? n[t] : null
  if (!i || !e)
    return null
  let a = i[e]
  return a ? a[r] : null
}
export function $$ty80(e, t) {
  return (function (e, t) {
    if (t.components[e]) {
      let r = t.components[e]
      let n = r.containing_frame?.containingStateGroup?.nodeId
      return n ? t.stateGroups[n] || null : r || null
    }
    return t.stateGroups[e] && t.stateGroups[e] || null
  }(e, t)) || getFeatureFlags().dse_module_publish && t.modules[e] && t.modules[e] || null
}
export function $$tb107(e) {
  let t = e.type === PrimaryWorkflowEnum.STATE_GROUP && !!(e.stateGroupError && e.stateGroupError !== StateGroupErrorType.TOO_MANY_STATES_ERROR)
  return !!(e.componentPropDefError && (e.componentPropDefError === VariableSetErrorType.CONFLICTING_NAMES_ERROR || e.componentPropDefError === VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR || e.componentPropDefError === VariableSetErrorType.UNUSED_DEF_ERROR) || t)
}
export function $$tT43(e) {
  return e.variableSetError !== VariableErrorType.NONE
}
let $$tI27 = () => {}
let $$tS36 = new Promise((e) => {
  $$tI27 = e
})
let $$tv55 = () => {}
let $$tA38 = new Promise((e) => {
  $$tv55 = e
})
let tx = () => {}
let tN = new Promise((e) => {
  tx = e
})
let $$tC78 = e => ({
  callback: tx,
  promise: tN,
  resetPromise: tD,
  loadingKey: `GET_USED_COMPONENTS_STATE_GROUPS_FOR_${e.getState().openFile?.key}`,
})
let $$tw76 = () => {}
let $$tO77 = new Promise((e) => {
  $$tw76 = e
})
let $$tR65 = () => {}
let $$tL83 = new Promise((e) => {
  $$tR65 = e
})
export function $$tP60() {
  $$tI27()
  $$tv55()
  $$tw76()
  $$tS36 = new Promise((e) => {
    $$tI27 = e
  })
  $$tA38 = new Promise((e) => {
    $$tv55 = e
  })
  $$tO77 = new Promise((e) => {
    $$tw76 = e
  })
  tD()
}
function tD() {
  tx()
  tN = new Promise((e) => {
    tx = e
  })
}
export function $$tk88(e, t, r) {
  return e.team_id === r ? -1 : t.team_id === r ? 1 : (e.team_name || '').localeCompare(t.team_name || '')
}
export function $$tM71(e, t, r) {
  return e.sort((e, n) => {
    let i
    i = r?.groupByFolders
    let a = e.team_id !== n.team_id ? $$tk88(e, n, t) : i && e.file.folder_id !== n.file.folder_id ? e.folder_name < n.folder_name ? -1 : 1 : (e.library_file_name || '').localeCompare(n.library_file_name || '')
    return r?.isDescending ? a : -a
  })
}
export function $$tF72(e, t, r, n) {
  return e.sort((e, i) => {
    let a
    let s
    let o
    let l
    let d
    a = e
    s = i
    o = t
    l = r
    d = n?.groupByFolders
    let c = a.team_id !== s.team_id ? a.team_id === o ? -1 : s.team_id === o ? 1 : (a.team_name || '').localeCompare(s.team_name || '') : d && a.folder_id !== s.folder_id ? (l[a.folder_id]?.path ?? '') < (l[s.folder_id]?.path ?? '') ? -1 : 1 : (a.library_name || '').localeCompare(s.library_name || '')
    return n?.isDescending ? c : -c
  })
}
export function $$tj56(e, t, r) {
  let n
  let i = e.node_id
  let a = t[i] || {}
  let o = a.url || null
  switch (e.type) {
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STYLE:
      n = e.content_hash
      break
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.MODULE:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.MANAGED_STRING:
      n = e.version
      break
    default:
      throwTypeError(e)
  }
  (r || a.content_hash !== n || !isValidThumbnail(o)) && (e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP || e.type === PrimaryWorkflowEnum.MODULE || e.type === PrimaryWorkflowEnum.RESPONSIVE_SET || e.type === PrimaryWorkflowEnum.CODE_COMPONENT ? o = generateNodeThumbnail(i) : e.type === PrimaryWorkflowEnum.STYLE ? o = isFullyTransparentFill(e) ? getDefaultPlaceholderThumbnail() : generateThumbnailFromStyleMaster(i, e.style_type) : e.type === PrimaryWorkflowEnum.VARIABLE || e.type === PrimaryWorkflowEnum.VARIABLE_SET || e.type === PrimaryWorkflowEnum.MANAGED_STRING ? o = getDefaultPlaceholderThumbnail() : throwTypeError(e))
  return o
}
export function $$tU13({
  numProductComponents: e,
  numStyles: t,
  numVariables: r,
  numVariableCollections: n,
}) {
  let i = t > 0
    ? getI18nString('design_systems.libraries_modal.plural.num_style', {
        numStyles: t,
      })
    : null
  let s = e > 0
    ? getI18nString('design_systems.libraries_modal.plural.num_component', {
        numComponents: e,
      })
    : null
  let o = r > 0
    ? getI18nString('design_systems.libraries_modal.plural.num_variables', {
        numVariables: r,
      })
    : null
  let l = r === 0 && n > 0
    ? getI18nString('design_systems.libraries_modal.plural.variable_collections', {
        numVariableCollections: n,
      })
    : null
  let d = filterNotNullish([s, i, o, l])
  return d.length === 0 ? getI18nString('design_systems.libraries_modal.no_components_styles_variables') : formatList(d, 'unit')
}
export let $$tB20 = e => e !== StagingStatusEnum.DELETED && e !== StagingStatusEnum.NOT_STAGED
export function $$tG47(e, t, r, n) {
  let i = t[e]
  if (!i)
    return null
  let a = $$ef101(r).find(e => e.type === PrimaryWorkflowEnum.COMPONENT ? e.component_key === i : e.key === i)
  let s = 'another file'
  if (!a)
    return s
  let o = n[a.library_key]
  return o ? o.name : s
}
export function $$tV6(e, t, r) {
  let n = e.reduce((r, n) => (t[n]
    ? r[n] = t[n]
    : debug(!1, 'Expected nodeIdsToMove to be a subset of movableNodeIdToOldKey', {
        nodeIdsToMove: e,
        movableNodeIdToOldKey: t,
      }), r), Object.create(null))
  for (let e of r) {
    let r = e.containing_frame?.containingStateGroup?.nodeId
    let i = t[e.node_id]
    if (!r || !i)
      continue
    let a = !!t[r]
    n[r] || !a ? n[e.node_id] = i : n[e.node_id] && delete n[e.node_id]
  }
  return {
    moveRemappings: n,
    movableItemsToPublishAsNew: new Set(Object.keys(t).filter(e => !n[e])),
  }
}
export function $$tH28(e) {
  return e.isStateGroup || e.type === 'SYMBOL' && !e.isState || e.isCodeComponent
}
export function $$tz63(e) {
  return PRIMARY_WORKFLOW_TYPES.includes(e.type)
}
export function $$tW5(e) {
  return e.isLocal ? SceneGraphHelpers.getAssetKeyForPublish(e.node_id) : $$eo3(e)
}
export function $$tK8(e) {
  return e.containing_frame?.containingStateGroup?.nodeId ?? null
}
export function $$tY58(e) {
  return !!$$tK8(e)
}
export function $$t$37(e, t, r, n) {
  let i
  if (!e)
    return
  let a = t.get(e)
  if (a && a.containingStateGroupId && (a = t.get(a.containingStateGroupId)), a) {
    if (a.isSubscribedAsset) {
      let e = a.componentKey ?? a.stateGroupKey
      e && (i = n?.[e])
    }
    else {
      i = r?.[a.guid]
    }
    return i
  }
}
export function $$tX32(e, t) {
  function r(e) {
    return e.toLowerCase()
  }
  let n = r(e.name)
  let i = r(t.name)
  return n < i ? -1 : n > i ? 1 : 0
}
export function $$tq29(e) {
  switch (e) {
    case LibraryAgeEnum.THIRTY_DAYS:
      return getI18nString('design_systems.libraries_modal.30_days')
    case LibraryAgeEnum.SIXTY_DAYS:
      return getI18nString('design_systems.libraries_modal.60_days')
    case LibraryAgeEnum.NINETY_DAYS:
      return getI18nString('design_systems.libraries_modal.90_days')
    case LibraryAgeEnum.YEAR:
      return getI18nString('design_systems.libraries_modal.year')
    default:
      throwTypeError(e)
  }
}
export function $$tJ12(e) {
  return !!(getFeatureFlags().dse_templates_proto && e.description?.startsWith('Figma.TemporaryIsTemplate'))
}
export function $$tZ11(e) {
  return !!(getFeatureFlags().dse_module_publish && e.type === 'MODULE')
}
export function $$tQ44(e, t) {
  return (e.design !== null || e.figjam !== null || e.slides !== null || e.buzz !== null) && (!!e.design || !!e.figjam || !!e.slides || !!e.buzz) && (!!e.design && !t.designSubscribed || !!e.figjam && !t.figjamSubscribed || !!e.slides && !t.slidesSubscribed || !!e.buzz && !t.buzzSubscribed)
}
export function $$t099(e, t) {
  return e ? (t || (t = $$t559(debugState.getState().library.publishedByLibraryKey.components)), t[e]?.library_key ?? null) : null
}
export function $$t167(e, t) {
  return e ? (t || (t = $$t559(debugState.getState().library.publishedByLibraryKey.stateGroups)), t[e]?.library_key ?? null) : null
}
export function $$t2100(e) {
  let t = {}
  Object.keys(e).forEach((r) => {
    Object.keys(e[r]).forEach((n) => {
      Object.keys(e[r][n]).forEach((i) => {
        t[n] = t[n] || {}
        t[n][i] = e[r][n][i]
      })
    })
  })
  return t
}
export function $$t559(e) {
  let t = {}
  $$ey41(e, (e, r, n, i) => {
    t[$$eo3(i)] = i
  })
  return t
}
export function $$t3102(e) {
  let t = useDispatch()
  let r = useMemo(() => debounce(() => {
    e && e.value.node_id && t(updateStyleThumbnailOptimist({
      styleNodeId: e.value.node_id,
      styleKind: e.kind,
    }))
  }), [t, e])
  useEffect(r)
}
export function $$t416(e) {
  switch (e.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return e.subscriptionStatus === 'LIBRARY' ? `${e.sourceLibraryKey}:${e.assetId}` : `${e.library_key}:${e.node_id}`
    default:
      return `${e.library_key}:${e.node_id}`
  }
}
export function $$t864(e) {
  return resolveParentOrgId(e.openFile, e.currentUserOrgId)
}
export function $$t691() {
  let e = getParentOrgId()
  let t = useSelector(e => e.orgById)
  return getOrgByCurrentUserId(e, t)
}
export function $$t793(e) {
  let t = je()
  return useMemo(() => {
    if (e && t.status === 'loaded')
      return t.data?.find(t => t.libraryKey === e)?.id
  }, [e, t.data, t.status])
}
export function $$t982(e) {
  return e === FContainerType.ORG || e === FContainerType.WORKSPACE
}
export function $$re86(e, t) {
  return !e && !t || e === t
}
export function $$rt40(e, t, r) {
  let n = e ? e.nodeId : void 0
  let i = e ? e.name : void 0
  let a = e ? e.backgroundColor : void 0
  let s = e ? e.pageId : void 0
  let o = e ? e.sortPosition : void 0
  let l = t ? t.nodeId : void 0
  let d = t ? t.name : void 0
  let c = t ? t.backgroundColor : void 0
  let u = t ? t.pageId : void 0
  let p = t ? t.sortPosition : void 0
  let _ = !r?.compareSortPositions || o === p
  return (n !== l || i !== d || a !== c || !_ || !!s || !u) && !(e == null && t == null || !(e == null || t == null || !$$re86(e.nodeId, t.nodeId) || !$$re86(e.name, t.name) || !$$re86(e.backgroundColor, t.backgroundColor) || !$$re86(e.pageName, t.pageName) || !$$re86(e.pageId, t.pageId) || r?.compareSortPositions && !$$re86(e.sortPosition, t.sortPosition)) && (function (e, t) {
    if (e == null && t == null)
      return !0
    if (e == null || t == null)
      return !1
    for (let r of ['nodeId', 'name']) {
      if (!$$re86(e[r], t[r]))
        return !1
    }
    return !0
  }(e.containingStateGroup, t.containingStateGroup)))
}
export function $$rr54(e, t) {
  return !e && !t || !!e && !!t && e.pageId == t.pageId
}
export function $$rn81(e, t) {
  return !e && !t || !!e && !!t && e.nodeId == t.nodeId
}
export const $N = $$em0
export const $j = $$eE1
export const A0 = $$eI2
export const Av = $$eo3
export const Bt = $$eD4
export const CG = $$tW5
export const Cj = $$tV6
export const Dg = $$ec7
export const E2 = $$tK8
export const ET = $$tl9
export const El = $$e610
export const FS = $$tZ11
export const Fl = $$tJ12
export const G$ = $$tU13
export const GA = $$ej14
export const Gg = $$tt15
export const Gj = $$t416
export const Gp = $$t_17
export const HF = $$ei18
export const HK = $$eh19
export const Hb = $$tB20
export const IW = $$eu21
export const J1 = $$e422
export const Jc = $$en23
export const KQ = $$eX24
export const Kw = $$eH25
export const LB = $$eQ26
export const LC = $$tI27
export const LI = $$tH28
export const LT = $$tq29
export const LX = $$eV30
export const Lk = $$eG31
export const MA = $$tX32
export const MF = $$es33
export const Mb = $$e534
export const Mj = $$eR35
export const NW = $$tS36
export const NY = $$t$37
export const QO = $$tA38
export const QT = $$eN39
export const Q_ = $$rt40
export const Qb = $$ey41
export const R2 = $$th42
export const RQ = $$tT43
export const T4 = $$tQ44
export const UB = $$e945
export const VJ = $$el46
export const VO = $$tG47
export const Ve = $$e748
export const WV = $$tf49
export const X0 = $$eb50
export const X7 = $$ed51
export const XV = $$eC52
export const Ys = $$e353
export const ZX = $$rr54
export const _B = $$tv55
export const _Q = $$tj56
export const aD = $$er57
export const ad = $$tY58
export const ah = $$t559
export const bd = $$tP60
export const bp = $$tE61
export const cU = $$tn62
export const dx = $$tz63
export const eD = $$t864
export const eM = $$tR65
export const eS = $$tc66
export const f0 = $$t167
export const f2 = $$ta68
export const fc = $$$$eM69
export const gA = $$ez70
export const gi = $$tM71
export const gy = $$tF72
export const iP = $$e_73
export const i_ = $$eZ74
export const iw = $$te75
export const kG = $$tw76
export const kw = $$tO77
export const lG = $$tC78
export const lg = $$ea79
export const n5 = $$ty80
export const nJ = $$rn81
export const nn = $$t982
export const oH = $$tL83
export const og = $$eA84
export const ov = $$to85
export const pD = $$re86
export const pq = $$ts87
export const r9 = $$tk88
export const rC = $$e$89
export const rt = $$ev90
export const sv = $$t691
export const sy = $$tg92
export const t$ = $$t793
export const td = $$tu94
export const th = $$eg95
export const ti = $$eT96
export const uH = $$tm97
export const uJ = $$eW98
export const uN = $$t099
export const v2 = $$t2100
export const vu = $$ef101
export const w$ = $$t3102
export const w3 = $$eL103
export const w8 = $$e0104
export const wn = $$eP105
export const yh = $$ep106
export const zE = $$tb107
