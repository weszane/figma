import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reportError } from '../905/11'
import { isDefined, useIsLoading } from '../905/18797'
import { selectWithShallowEqual } from '../905/103090'
import { searchAPIHandler } from '../905/144933'
import { ServiceCategories } from '../905/165054'
import { ResourceTypes } from '../905/178090'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { getUserId } from '../905/372672'
import { deepEqual } from '../905/382883'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { PerfTimer } from '../905/609396'
import { logError } from '../905/714362'
import { setPluginAllowlisted, setWidgetsAllowlisted } from '../905/717906'
import { isFullscreenDevHandoffView } from '../905/782918'
import { useMappedEditorTypeA } from '../905/808775'
import { mV, Vl } from '../905/837497'
import { useCurrentUserOrg } from '../905/845253'
import { canPerformAction, canRunExtensions } from '../figma_app/12796'
import { InstalledPlugins, Plugin } from '../figma_app/43951'
import { FEditorType } from '../figma_app/53721'
import { getPluginAllowListKey, getWidgetAllowListKey, hasLocalFileId, isPublicPlugin, manifestContainsWidget, ManifestEditorType, ManifestSchema } from '../figma_app/155287'
import { FPinStatusType, FPublicationStatusType, FPublisherType, FUserRoleType } from '../figma_app/191312'
import { Ol, xy } from '../figma_app/279454'
import { useMultiSubscription, useSubscription } from '../figma_app/288654'
import { canRunPlugin, convertEditorTypeToFileType, filterEntriesByEditorType, filterEntriesByPluginVersionEditorType, filterPublishedResources, filterResourcesByMatch, getCurrentPluginVersion, getPluginByFileId, getPluginVersion, isDevModePlugin, isEditorTypeMatch, sortResourcesByCreatedAt } from '../figma_app/300692'
import { useCurrentFileKey } from '../figma_app/516028'
import { BI as getFigmaMobile } from '../figma_app/546509'
import { f1, O8, Qi } from '../figma_app/559491'
import { isPendingPublisher } from '../figma_app/564095'
import { CR, kA } from '../figma_app/684168'
import { useAppModelProperty } from '../figma_app/722362'
import { isResourcePendingPublishing } from '../figma_app/777551'
import { getEditorTypeOrNull, getSelectedEditorType, isDevHandoffEditorType, selectEditorType } from '../figma_app/976749'

export function $$V0(e) {
  let t = useSelector(e => e.localPlugins)
  return xy(t, e)
}
export function $$H41(e) {
  let t = $$V0(e)
  return useMemo(() => {
    let e = {}
    for (let r in t) {
      let n = t[r]
      manifestContainsWidget(n) || (e[r] = n)
    }
    return e
  }, [t])
}
export function $$z53() {
  let e = $$V0()
  return useMemo(() => {
    let t = {}
    for (let r in e) {
      let n = e[r]
      manifestContainsWidget(n) && (t[r] = n)
    }
    return t
  }, [e])
}
export function $$W22(e) {
  return Object.values($$V0()).find(t => t.plugin_id === e)
}
export function $$K10() {
  let e = $$V0()
  return useMemo(() => {
    let t = {}
    for (let r in e) {
      let n = e[r]
      t[n.plugin_id] = n
    }
    return t
  }, [e])
}
export function $$Y37() {
  return useSelector(e => e.publishingPlugins)
}
export function $$$32() {
  let e = useSelector(e => e.publishedPlugins)
  let t = getEditorTypeOrNull()
  return useMemo(() => filterEntriesByPluginVersionEditorType(t, e), [e, t])
}
export function $$X27() {
  let e = useSelector(e => e.publishedWidgets)
  let t = $$eq15()
  let r = useMemo(() => ({}), [])
  return t ? e : r
}
export function $$q12(e) {
  let t = $$$32()[e.id]
  let r = $$X27()[e.id]
  return e.isWidget ? r : t
}
export function $$J38({
  includePendingPublishers: e = !0,
} = {}) {
  let t = getUserId()
  let r = $$$32()
  return useMemo(() => {
    if (!t)
      return []
    let n = filterPublishedResources(Object.values(r))
    return sortResourcesByCreatedAt(filterResourcesByMatch(n, t, e))
  }, [r, t, e])
}
function Z() {
  let e = $$J38()
  let t = $$H41()
  return useMemo(() => Object.values(t).filter(t => e.every(e => e.id !== t.plugin_id)), [e, t])
}
export function $$Q11() {
  let e = getUserId()
  let t = $$J38()
  let r = Z()
  return useMemo(() => t.reduce((t, r) => {
    if ((r.plugin_publishers?.pending ?? []).find(t => t.id === e)) {
      let e = [...t.invitedPlugins, r]
      return {
        ...t,
        invitedPlugins: e,
      }
    }
    if (isResourcePendingPublishing(r)) {
      let e = [...t.pendingReviewPlugins, r]
      return {
        ...t,
        pendingReviewPlugins: e,
      }
    }
    let n = [...t.approvedPlugins, r]
    return {
      ...t,
      approvedPlugins: n,
    }
  }, {
    invitedPlugins: [],
    approvedPlugins: [],
    pendingReviewPlugins: [],
    developmentPlugins: r,
  }), [e, r, t])
}
export function $$ee5() {
  let e = $$J38()
  let t = Z()
  return e.length + t.length
}
export function $$et33() {
  let e = getUserId()
  let t = $$J38()
  return e != null ? t.filter(t => isPendingPublisher(t, e)) : []
}
export function $$er30(e) {
  let t = getUserId()
  let r = $$$32()[e]
  let n = $$X27()
  if (r)
    return isPendingPublisher(r, t ?? '')
  let i = n[e]
  return isPendingPublisher(i, t ?? '')
}
export function $$en31({
  includePendingPublishers: e = !0,
} = {}) {
  let t = getUserId()
  let r = $$X27()
  if (!t)
    return []
  let n = filterPublishedResources(Object.values(r))
  return sortResourcesByCreatedAt(filterResourcesByMatch(n, t, e))
}
export function $$ei7() {
  let e = getUserId()
  let t = $$en31()
  let r = ea()
  return useMemo(() => t.reduce((t, r) => {
    if ((r.plugin_publishers?.pending ?? []).find(t => t.id === e)) {
      let e = [...t.invitedWidgets, r]
      return {
        ...t,
        invitedWidgets: e,
      }
    }
    if (isResourcePendingPublishing(r)) {
      let e = [...t.pendingReviewWidgets, r]
      return {
        ...t,
        pendingReviewWidgets: e,
      }
    }
    let n = [...t.approvedWidgets, r]
    return {
      ...t,
      approvedWidgets: n,
    }
  }, {
    invitedWidgets: [],
    approvedWidgets: [],
    pendingReviewWidgets: [],
    developmentWidgets: r,
  }), [e, r, t])
}
function ea() {
  let e = $$en31()
  let t = $$z53()
  return useMemo(() => Object.values(t).filter(t => e.every(e => e.id !== t.plugin_id)), [e, t])
}
export function $$es6() {
  let e = $$en31()
  let t = ea()
  return e.length + t.length
}
export function $$eo51() {
  let e = getUserId()
  let t = $$en31()
  return e != null ? t.filter(t => isPendingPublisher(t, e)) : []
}
export function $$el2(e) {
  return Object.values($$J38({
    includePendingPublishers: !1,
  })).find(t => t.id === e)
}
export function $$ed20(e) {
  return Object.values($$en31({
    includePendingPublishers: !1,
  })).find(t => t.id === e)
}
export function $$ec45(e) {
  try {
    let t = typeof e == 'string' ? JSON.parse(e) : e
    t.documentAccess !== 'dynamic-page' && delete t.documentAccess
    let r = ManifestSchema.safeParse(t)
    if (!r.success) {
      reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest schema parse error'), {
        extra: {
          jsonParsedResult: JSON.stringify(t, null, 2),
          rawManifest: JSON.stringify(e, null, 2),
          errors: r.error.format(),
        },
      })
      return t
    }
    return r.data
  }
  catch (t) {
    reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest JSON parse error'), {
      extra: {
        rawManifest: e,
      },
    })
  }
}
export function $$eu13(e, t) {
  if (e.current_plugin_version_id === null)
    return null
  let r = e.versions[e.current_plugin_version_id]
  if (!r)
    return null
  let n = {
    id: e.current_plugin_version_id,
    pluginId: e.id,
    resourceStagingSignature: null,
    updatedAt: new Date(Date.now()),
    iconUrl: r.redirect_icon_url,
    coverImageUrl: r.redirect_cover_image_url,
    name: r.name,
    version: r.version,
    releaseNotes: r.release_notes,
    description: r.description,
    tagline: r.tagline,
    creatorPolicy: r.creator_policy,
    manifest: JSON.stringify(r.manifest),
    createdAt: new Date(r.created_at),
    iconPath: r.redirect_icon_url,
    coverImagePath: r.redirect_cover_image_url,
    codePath: r.redirect_code_url,
    plugin: {
      currentPluginVersionId: r.id,
    },
    playgroundFigFileKey: r.playground_fig_file?.key ?? null,
    hasPlaygroundFile: !!r.playground_file_version_id,
    playgroundFileVersionId: r.playground_file_version_id ?? null,
    userId: '',
    snapshotPath: '',
  }
  let i = {
    id: e.id,
    currentPluginVersionId: e.current_plugin_version_id,
    publishingStatus: e.publishing_status,
    isWidget: e.is_widget,
    orgId: e.org_id,
    thumbnailUrl: '',
    userId: '',
    updatedAt: new Date(Date.now()),
    createdAt: new Date(e.created_at),
    unpublishedAt: null,
    supportContact: e.support_contact,
    approvedAt: new Date(Date.now()),
    installCount: e.install_count,
    likeCount: 0,
    viewCount: e.view_count,
    blockedAt: null,
    profileId: '',
    commentCount: e.comment_count,
    hideRelatedContentByOthers: e.hide_related_content_by_others ?? null,
    isPublic: e.publishing_status === FPublicationStatusType.APPROVED_PUBLIC,
    isInspect: e.editor_type === 'inspect',
    isSlides: r?.manifest.editorType?.includes(ManifestEditorType.SLIDES) || !1,
    widgetsWhitelistEnforced: null,
    pluginsWhitelistEnforced: null,
    monetizedResourceMetadataId: e.monetized_resource_metadata?.id ?? null,
    thirdPartyM10nStatus: e.third_party_m10n_status ?? null,
    monetizationStatus: e.monetization_status ?? null,
    canRead: !0,
    categoryId: '',
    uniqueRunCount: 0,
    pluginEditorType: 0,
    commentsSetting: '',
    currentUserFirstRanAt: '',
    profileInstallStatus: 2,
    redirectThumbnailUrl: '',
    communityPublishers: e.community_publishers?.accepted.map(t => ({
      id: t.id,
      isPending: !1,
      role: FPublisherType.CREATOR,
      userId: t.primary_user_id,
      profileId: t.id,
      pluginId: e.id,
      hubFileId: null,
      profile: {
        id: t.id,
        profileHandle: t.profile_handle,
        team: t.entity_type === 'team'
          ? {
              id: t.id,
              name: t.name,
            }
          : null,
        org: t.entity_type === 'org'
          ? {
              id: t.id,
              name: t.name,
            }
          : null,
        user: t.entity_type === 'user'
          ? {
              id: t.primary_user_id,
              name: t.name,
            }
          : null,
        teamId: t.entity_type === 'team' ? t.id : null,
        orgId: t.entity_type === 'org' ? t.id : null,
        primaryUserId: t.entity_type === 'user' ? t.primary_user_id : null,
        publicAt: new Date(Date.now()),
        website: null,
        description: null,
        location: null,
        twitter: null,
        instagram: null,
        createdAt: new Date(Date.now()),
        updatedAt: new Date(Date.now()),
        followerCount: 0,
        followingCount: 0,
        coverImagePath: null,
        pronouns: null,
        badges: [],
        communityUserIsFollowing: t.current_user_is_following,
        communityUserIsFollowed: t.current_user_is_followed,
        entityType: t.entity_type,
        currentUserIsFollowing: !1,
        currentUserIsFollowed: !1,
        name: t.name,
        imgUrl: null,
        imgUrls: {},
      },
    })) || [],
    currentPluginVersion: n,
    viewableInEditor: !0,
    publishingStatusUpdatedAt: null,
    isSeoIndexingAllowed: null,
    currentPlanUser: null,
  }
  return {
    pluginId: e.id,
    createdAt: new Date(Date.now()),
    userId: t.userId,
    orgId: t.orgId,
    pluginVersionId: e.current_plugin_version_id,
    plugin: i,
    pinnedStatus: FPinStatusType.UNPINNED,
  }
}
export function $$ep40(e, t, r, n) {
  if (!e || e.publishingStatus && [FPublicationStatusType.ORG_PRIVATE, FPublicationStatusType.ORG_PRIVATE_PENDING_PUBLIC].includes(e.publishingStatus) && (!e.orgId || e.orgId !== t) && !getFeatureFlags().community_hub_admin)
    return
  let i = e.currentPluginVersion
  if (!i)
    return
  if (!i.manifest) {
    reportError(ServiceCategories.EXTENSIBILITY, new Error('manifest missing'), {
      extra: {
        plugin: e,
      },
    })
    return
  }
  let a = e.isWidget ? 'widget' : 'plugin'
  let l = $$ec45(i.manifest)
  if (!l)
    return
  let d = `?resource_type=${a}&resource_id=${e.id}`
  r && (d += `&fuid=${r}`)
  let c = {
    id: i.id,
    plugin_id: e.id,
    name: i.name || '',
    current_plugin_version_id: i.plugin?.currentPluginVersionId || void 0,
    version: i.version || '',
    release_notes: i.releaseNotes || '',
    is_private: !!e.orgId,
    description: i.description || '',
    creator_policy: i.creatorPolicy ?? '',
    manifest: l,
    installed_by: n,
    tagline: i.tagline || '',
    created_at: i.createdAt.toString(),
    redirect_icon_url: `/community/icon${d}`,
    redirect_cover_image_url: `/community/thumbnail${d}`,
    redirect_code_url: `/community/${a}/${e.id}/code`,
  }
  e.communityPublishers && (c.community_publishers = e.communityPublishers)
  e.isWidget && (c.redirect_snapshot_url = `/community/snapshot${d}`)
  e.orgId && (c.org_id = e.orgId)
  return c
}
let e_ = (e, t, r) => {
  let n = {}
  let i = {}
  let a = {}
  let s = {}
  let o = {}
  let l = {}
  if (e.status !== 'loaded') {
    return {
      plugins: {},
      widgets: {},
      orgPlugins: {},
      orgWidgets: {},
      userPlugins: {},
      userWidgets: {},
    }
  }
  let d = e.data
  for (let e of [{
    source: 'org',
    savedExtensions: d.org?.installedPlugins,
  }, {
    source: 'user',
    savedExtensions: d.currentUser?.installedPlugins,
  }]) {
    let {
      source,
      savedExtensions,
    } = e
    if (savedExtensions) {
      for (let e of savedExtensions) {
        let {
          plugin,
        } = e
        if (!plugin || !plugin.viewableInEditor)
          continue
        let u = $$ep40(plugin, t, r, source)
        u && (plugin.isWidget ? (i[e.pluginId] = u, source === 'org' ? s[e.pluginId] = u : source === 'user' && (l[e.pluginId] = u)) : (n[e.pluginId] = u, source === 'org' ? a[e.pluginId] = u : source === 'user' && (o[e.pluginId] = u)))
      }
    }
  }
  return {
    plugins: n,
    widgets: i,
    orgPlugins: a,
    orgWidgets: s,
    userPlugins: o,
    userWidgets: l,
  }
}
let eh = new Set()
let em = new Set()
let eg = debounce((e) => {
  eh.size > 0 && (e(f1({
    pluginIds: Array.from(eh),
  })), eh.clear())
  em.size > 0 && (e(O8({
    widgetIds: Array.from(em),
  })), em.clear())
}, 300)
export function $$ef4() {
  let e = useDispatch()
  let t = useSelector(e => e.currentUserOrgId)
  let r = useSubscription(InstalledPlugins, {
    orgId: t,
  })
  let a = getUserId()
  let s = $$eq15()
  return useMemo(() => {
    if (r.status !== 'loaded') {
      return {
        loaded: !1,
        plugins: {},
        widgets: {},
        orgWidgets: {},
        orgPlugins: {},
        userWidgets: {},
        userPlugins: {},
      }
    }
    let {
      plugins,
      widgets,
      orgPlugins,
      orgWidgets,
      userPlugins,
      userWidgets,
    } = e_(r, t, a)
    !(function (e, t, r) {
      let n = Object.keys(t)
      let i = Object.keys(r)
      n.forEach(e => eh.add(e))
      i.forEach(e => em.add(e))
      eg(e)
    }(e, plugins, s ? widgets : {}))
    return {
      loaded: !0,
      plugins,
      widgets: s ? widgets : {},
      orgPlugins,
      orgWidgets: s ? orgWidgets : {},
      userPlugins,
      userWidgets: s ? userWidgets : {},
    }
  }, [e, r, t, a, s])
}
export function $$eE44() {
  let e = getSelectedEditorType()
  return (function (e) {
    let t = $$ef4()
    let {
      plugins,
      widgets,
      orgPlugins,
      orgWidgets,
      userPlugins,
      userWidgets,
    } = t
    let d = useMemo(() => e(plugins), [e, plugins])
    let c = useMemo(() => e(widgets), [e, widgets])
    let u = useMemo(() => e(orgPlugins), [e, orgPlugins])
    let p = useMemo(() => e(orgWidgets), [e, orgWidgets])
    let _ = useMemo(() => e(userPlugins), [e, userPlugins])
    let h = useMemo(() => e(userWidgets), [e, userWidgets])
    return {
      loaded: t.loaded,
      plugins: d,
      widgets: c,
      orgPlugins: u,
      orgWidgets: p,
      userPlugins: _,
      userWidgets: h,
    }
  }(t => filterEntriesByEditorType(e, t)))
}
export function $$ey43(e) {
  let t = getSelectedEditorType()
  return useMemo(() => (function (e, {
    editorType: t,
  }) {
    let {
      plugins,
      widgets,
      orgPlugins,
      orgWidgets,
      userPlugins,
      userWidgets,
    } = e
    let l = [plugins, widgets, orgPlugins, orgWidgets, userPlugins, userWidgets].map(e => Object.fromEntries(Object.entries(e).filter(([e, r]) => {
      let {
        canRun,
      } = canRunPlugin({
        plugin: r,
        editorType: t,
      })
      return canRun
    })))
    return {
      loaded: !0,
      plugins: l[0],
      widgets: l[1],
      orgPlugins: l[2],
      orgWidgets: l[3],
      userPlugins: l[4],
      userWidgets: l[5],
    }
  }(e, {
    editorType: t,
  })), [e, t])
}
export function $$eb28(e, t) {
  let r = useCurrentUserOrg()?.id ?? null
  let i = getUserId()
  let a = useSubscription(Plugin, {
    orgId: r,
    pluginId: e,
  }, {
    enabled: t,
  })
  let s = a.data?.plugin
  let o = a.status
  return useMemo(() => o !== 'loaded'
    ? {
        loaded: !1,
        plugin: null,
      }
    : {
        loaded: !0,
        plugin: s ? $$ep40(s, r, i, null) ?? null : null,
      }, [o, s, r, i])
}
export function $$eT49(e, {
  enabled: t,
}) {
  let r = useCurrentUserOrg()?.id ?? null
  let i = getUserId()
  let a = useMemo(() => e.map(e => ({
    orgId: r,
    pluginId: e,
  })), [e, r])
  let s = useMultiSubscription(Plugin, a, {
    enabled: t,
  })
  let o = []
  s.forEach((e) => {
    let t = e.result
    if (t.status !== 'loaded')
      return
    let n = t.data?.plugin
    if (!n)
      return
    let a = $$ep40(n, r, i, null)
    a && o.push(a)
  })
  return o
}
export function $$eI25(e, t) {
  return e.name.localeCompare(t.name)
}
let eS = {
  loaded: !0,
  plugins: {},
}
export function $$ev50() {
  let e = useSelector(e => e.selectedView)
  let t = useSelector(e => e.installedPluginVersions)
  if (e.view !== 'fullscreen')
    return eS
  let r = convertEditorTypeToFileType(e.editorType)
  if (!t.loaded)
    return t
  let n = {}
  for (let i of Object.values(t.plugins)) isEditorTypeMatch(r, i.manifest.editorType) ? n[i.plugin_id] = i : (isFullscreenDevHandoffView(e) && isDevModePlugin(i) || r === 'figma' && isDevModePlugin(i)) && (n[i.plugin_id] = i)
  let a = e.view === 'fullscreen' ? e.editorType : null
  return {
    loaded: !0,
    plugins: filterEntriesByEditorType(a, n),
  }
}
export function $$eA14() {
  let {
    widgets,
  } = $$ef4()
  let t = useSelector(e => e.selectedView.view === 'fullscreen')
  let r = xy(widgets)
  return useMemo(() => t ? r : {}, [t, r])
}
export function $$ex1() {
  let e = useSelector(e => e.recentlyUsed.widgets)
  let t = $$z53()
  let r = useMappedEditorTypeA()
  let a = getUserId()
  let s = $$eq15()
  return useMemo(() => {
    let n = []
    s && r && a && e[r].forEach((r) => {
      if (a && !r.run_by_user_ids?.includes(a))
        return
      let i = e.fetchedResources[r.id]
      if (i && i.version) {
        n.push(i.version)
        return
      }
      if (t[r.id]) {
        n.push(t[r.id])
      }
    })
    return n
  }, [r, t, e, a, s])
}
export function $$eN46() {
  return eO($$ex1())
}
export function $$eC8() {
  let e = useSelector(e => e.recentlyUsed.plugins)
  let t = $$H41()
  let r = useMappedEditorTypeA()
  let a = getUserId()
  let s = useMemo(() => {
    let n = []
    r && a && e[r].forEach((r) => {
      if (a && !r.run_by_user_ids?.includes(a))
        return
      let i = e.fetchedResources[r.id]
      if (i && i.version) {
        n.push(i.version)
        return
      }
      if (t[r.id]) {
        n.push(t[r.id])
      }
    })
    return n
  }, [r, e, t, a])
  return Ol(s)
}
export function $$ew18() {
  return eO($$eC8())
}
function eO(e) {
  let t = {}
  return e.filter(e => !t[e.plugin_id] && (t[e.plugin_id] = !0, !0))
}
export function $$eR29() {
  let e = $$ew18()
  return useMemo(() => {
    let t = {}
    e.forEach(e => t[e.plugin_id] = e)
    return t
  }, [e])
}
export function $$eL24() {
  let e = $$eN46()
  return useMemo(() => {
    let t = {}
    e.forEach(e => t[e.plugin_id] = e)
    return t
  }, [e])
}
export function $$eP48() {
  let e = useSelector(e => e.recentlyUsed.plugins)
  let t = useSelector(e => e.recentlyUsed.widgets)
  let r = getUserId()
  let a = useMappedEditorTypeA()
  return useMemo(() => {
    let n = {}
    a && r && (e[a].forEach((e) => {
      let t = e.last_added_at_by_user_id?.[r]
      t && (n[e.id] = t)
    }), t[a].forEach((e) => {
      let t = e.last_added_at_by_user_id?.[r]
      t && (n[e.id] = t)
    }))
    return n
  }, [a, r, e, t])
}
function eD(e, t, r) {
  let n = Object.keys(e).reduce((e, r) => {
    if (t[r]) {
      let n = t[r]
      let i = getCurrentPluginVersion(n)
      if (!i)
        return e
      e[r] = i
    }
    return e
  }, {})
  return filterEntriesByEditorType(r, n)
}
function ek(e) {
  let t = useCurrentUserOrg()?.id ?? ''
  let r = useDispatch()
  let n = useSelector(t => e === 'plugin' ? t.whitelistedPlugins : t.whitelistedWidgets)
  let s = !!t
  let o = (function (e, t = !0) {
    let r = useCurrentUserOrg()?.id ?? ''
    let n = useCurrentFileKey()
    let i = CR(e, t && !!n)
    let a = kA(r ?? '', e, t && !!r && !n)
    return n ? i : a
  }(e, s))
  let l = o.loaded ? o.data : []
  if (!s)
    return n
  if (!o.loaded)
    return {}
  let d = {}
  l.forEach((e) => {
    e && (d[e] = !0)
  })
  deepEqual(d, n) || r((e === 'plugin' ? setPluginAllowlisted : setWidgetsAllowlisted)(d))
  return d
}
export function $$eM39() {
  let e = getEditorTypeOrNull()
  let t = useCurrentUserOrg()
  let r = $$$32()
  let a = !!(t && t.plugins_whitelist_enforced)
  let s = ek('plugin')
  let o = useDispatch()
  let l = useCurrentFileKey()
  let d = getPluginAllowListKey(t?.id ?? '', l)
  let c = useSelector(e => !!t && isDefined(e.loadingState, d))
  useEffect(() => {
    a && !c && o(Vl({}))
  }, [a, o, c])
  return useMemo(() => eD(s, r, e), [e, s, r])
}
export function $$eF19() {
  let e = getEditorTypeOrNull()
  let t = useCurrentUserOrg()
  let r = $$X27()
  let a = !!(t && t.widgets_whitelist_enforced)
  let s = ek('widget')
  let o = useDispatch()
  let l = useCurrentFileKey()
  let d = getWidgetAllowListKey(t?.id ?? '', l)
  let c = useSelector(e => !!t && isDefined(e.loadingState, d))
  useEffect(() => {
    a && !c && o(mV({}))
  }, [a, o, c])
  let u = useMemo(() => eD(s, r, e), [s, r, e])
  let p = $$eq15()
  let _ = useMemo(() => ({}), [])
  return p ? u : _
}
let ej = 'plugin_search_duration'
let eU = 'widget_search_duration'
function eB(e, t) {
  t.elapsedMs && trackEventAnalytics(e, t, {
    forwardToDatadog: !0,
  })
}
export function $$eG9(e) {
  let [t, r] = useState(!1)
  let [a, s] = useState(!1)
  let [l, d] = useState(null)
  let c = useSelector(e => e.currentUserOrgId && e.orgById[e.currentUserOrgId])
  let u = c && c.id
  let p = useSelector(e => !!(u && e.user && e.orgUsersByOrgId[u][e.user.id]?.permission !== FUserRoleType.GUEST))
  let h = useDispatch()
  let f = $$ev50().plugins
  let y = getFigmaMobile()
  let T = y?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os ? 'free' : 'all'
  let v = isDevHandoffEditorType()
  return {
    pluginServerSideSearch: useCallback((t, n, i, a) => {
      let o = new PerfTimer(ej, {})
      o.start()
      let [l, c] = searchAPIHandler.getCommunityPlugins(t, u, T, e, v, p)
      r(!0)
      s(!1)
      Promise.all([l, c]).then(([l, c]) => {
        s(!0)
        let u = []
        let p = l.data.meta.results.map(e => (u.push(e.model), e.model.id))
        let _ = c ? c.map(e => (u.push(e.model), e.model.id)) : []
        h(Qi({
          publishedPlugins: u,
          src: 'universalInsert',
        }))
        let m = p.filter(e => f[e])
        let g = p.filter(e => !f[e])
        let E = _.filter(e => f[e])
        let y = _.filter(e => !f[e])
        n(g)
        i(y)
        a([...E, ...m])
        d(t)
        r(!1)
        eB(ej, {
          elapsedMs: o.stop(),
          editorType: e,
          query: t,
          numPublicResults: p.length,
          numOrgResults: _.length,
        })
      }).catch((r) => {
        let n = {
          query: t,
          current_org_id: u || '',
          resource_type: ResourceTypes.BrowseResourceTypes.PLUGINS,
          editor_type: e,
          did_org_search: p,
          error: r?.message,
          status: r?.status,
        }
        logError('search', 'Search error for Community resources in inserts modal', n, {
          reportAsSentryError: !0,
        })
        let i = getI18nString('community.actions.an_error_occurred_while_searching_for_plugins')
        h(VisualBellActions.enqueue({
          error: !0,
          message: i,
        }))
      })
    }, [h, e, f, v, u, T, p]),
    pluginSearchIsLoading: t,
    pluginSearchHasResolved: a,
    setLastPluginSearchQuery: d,
    lastPluginSearchQuery: l,
  }
}
export function $$eV17(e) {
  let [t, r] = useState(!1)
  let [a, s] = useState(!1)
  let [l, d] = useState(null)
  let c = useSelector(e => e.currentUserOrgId && e.orgById[e.currentUserOrgId])
  let u = c && c.id
  let p = useSelector(e => !!(u && e.user && e.orgUsersByOrgId[u][e.user.id]?.permission !== FUserRoleType.GUEST))
  let h = $$eA14()
  let f = useDispatch()
  let y = getFigmaMobile()
  let T = y?.shouldOptimizeForIpadApp || getFeatureFlags().cmty_m10n_test_apple_os ? 'free' : 'all'
  return {
    widgetServerSideSearch: useCallback((t, n, i, a) => {
      let o = new PerfTimer(eU, {})
      o.start()
      let [l, c] = searchAPIHandler.getCommunityWidgets(t, u, T, e, p)
      r(!0)
      s(!1)
      Promise.all([l, c]).then(([l, c]) => {
        s(!0)
        let u = []
        let p = l.data.meta.results.map(e => (u.push(e.model), e.model.id))
        let _ = c.map(e => (u.push(e.model), e.model.id))
        f(Qi({
          publishedPlugins: u,
          src: 'universalInsert',
        }))
        let m = p.filter(e => h[e])
        let g = p.filter(e => !h[e])
        let E = _.filter(e => h[e])
        let y = _.filter(e => !h[e])
        n(g)
        i(y)
        a([...E, ...m])
        r(!1)
        d(t)
        eB(eU, {
          elapsedMs: o.stop(),
          editorType: e,
          query: t,
          numPublicResults: p.length,
          numOrgResults: _.length,
        })
      }).catch((r) => {
        let n = {
          query: t,
          current_org_id: u || '',
          resource_type: ResourceTypes.BrowseResourceTypes.WIDGETS,
          editor_type: e,
          did_org_search: p,
          error: r?.message,
          status: r?.status,
        }
        logError('search', 'Search error for Community resources in inserts modal', n, {
          reportAsSentryError: !0,
        })
        let i = getI18nString('community.actions.an_error_occurred_while_searching_for_widgets')
        f(VisualBellActions.enqueue({
          error: !0,
          message: i,
        }))
      })
    }, [f, e, u, T, h, p]),
    widgetSearchIsLoading: t,
    widgetSearchHasResolved: a,
    setLastWidgetSearchQuery: d,
    lastWidgetSearchQuery: l,
  }
}
export function $$eH47(e) {
  let t = $$J38({
    includePendingPublishers: !1,
  })
  let r = $$en31({
    includePendingPublishers: !1,
  })
  let n = $$K10()
  return (e ? r : t).filter(e => !n[e.id])
}
export function $$ez16(e, {
  searchLocalPlugins: t,
  searchPublishedPlugins: r,
}) {
  let i = $$V0()
  let a = $$$32()
  return useMemo(() => getPluginByFileId({
    idToSearch: e,
    localExtensionsByFileId: t ? i : void 0,
    publishedExtensions: r ? a : void 0,
  }), [e, t, r, i, a])
}
export function $$eW35() {
  let e = $$ev50()
  let t = $$J38()
  let r = $$eC8()
  let n = {}
  Object.values(e.plugins).forEach((e) => {
    n[e.plugin_id] || (n[e.plugin_id] = e)
  })
  Object.values(t).map(getPluginVersion).forEach((e) => {
    n[e.plugin_id] || hasLocalFileId(e) || (n[e.plugin_id] = e)
  })
  r.forEach((e) => {
    n[e.plugin_id] || hasLocalFileId(e) || (n[e.plugin_id] = e)
  })
  return n
}
function eK(e) {
  let t = {}
  Object.keys(e).forEach((e) => {
    t[e] = !0
  })
  return t
}
export function $$eY23() {
  let e = getSelectedEditorType()
  let t = eK($$eM39())
  let r = eK($$eF19())
  let i = selectWithShallowEqual(e => ({
    currentUserOrgId: e.currentUserOrgId,
    orgById: e.orgById,
    selectedView: e.selectedView,
    openFile: e.openFile,
  }))
  let a = useAppModelProperty('isReadOnly')
  return useCallback((n) => {
    let {
      canRun,
    } = canRunPlugin({
      plugin: n,
      editorType: e,
      canRunPluginState: {
        ...i,
        mirror: {
          appModel: {
            isReadOnly: a,
          },
        },
        whitelistedPlugins: t,
        whitelistedWidgets: r,
      },
    })
    return canRun
  }, [e, i, t, r, a])
}
export function $$e$52() {
  return useSelector(canPerformAction)
}
export function $$eX21() {
  return useSelector(canRunExtensions)
}
export function $$eq15() {
  let e = getSelectedEditorType()
  return e !== FEditorType.Slides && e !== FEditorType.Sites && e !== FEditorType.Figmake && e !== FEditorType.Cooper
}
export function $$eJ3(e) {
  let t = selectEditorType(e)
  return t !== FEditorType.Slides && t !== FEditorType.Sites && t !== FEditorType.Figmake && t !== FEditorType.Cooper
}
export function $$eZ26(e) {
  let t = useCurrentUserOrg()
  let r = !!(t && t.widgets_whitelist_enforced)
  let a = useSelector(e => e.whitelistedWidgets)[e]
  let s = $$z53()
  let o = useMemo(() => Object.values(s).find(t => t.plugin_id === e), [s, e])
  let l = useSelector(t => t.publishedWidgets[e])
  let d = !r || o || l?.org_id
  return {
    isWidgetBlockedByAllowlist: !a && !d,
  }
}
export function $$eQ34(e) {
  let t = useDispatch()
  let r = useCurrentUserOrg()
  let a = !!(r && r.plugins_whitelist_enforced)
  let s = useSelector(e => e.whitelistedPlugins)[e]
  let o = $$V0()
  let l = useMemo(() => Object.values(o).find(t => t.plugin_id === e), [o, e])
  let d = useSelector(t => t.publishedPlugins[e])
  let c = !a || l || d?.org_id
  let u = !s && !c
  return {
    validatePublishedPluginInOrgAllowlist: useCallback(() => !u || (t(VisualBellActions.enqueue({
      message: getI18nString('universal_insert.plugin_not_in_allowlist'),
      error: !0,
    })), !1), [u, t]),
    isPluginBlockedByAllowlist: u,
  }
}
export function $$e036(e) {
  let t = useCurrentUserOrg()
  let r = !!(t && t.plugins_whitelist_enforced)
  let i = !!(t && t.widgets_whitelist_enforced)
  let a = !!t && !t.public_plugins_allowed
  let s = $$eM39()
  let o = $$eF19()
  let l = e ? o : s
  let d = e ? i : r
  let c = t?.id ?? ''
  let u = useCurrentFileKey()
  let p = useIsLoading(e ? getWidgetAllowListKey(c, u) : getPluginAllowListKey(c, u))
  let _ = useCallback(e => d ? e.filter(e => !isPublicPlugin(e) || !!l[e.plugin_id]) : e, [l, d])
  let h = useCallback(e => a ? e.filter(e => !isPublicPlugin(e)) : e, [a])
  return {
    publicExtensionsDisallowed: a,
    allowList: l,
    hasAllowList: d,
    allowListIsLoading: p,
    hasPluginAllowList: r,
    hasWidgetAllowList: i,
    filterByPublicResourcesAllowed: h,
    filterByAllowlist: _,
  }
}
export function $$e142() {
  let {
    filterByAllowlist,
    filterByPublicResourcesAllowed,
  } = $$e036(!1)
  return filterByAllowlist(filterByPublicResourcesAllowed($$ew18()))
}
export const $1 = $$V0
export const AR = $$ex1
export const B7 = $$el2
export const BE = $$eJ3
export const Be = $$ef4
export const CI = $$ee5
export const Dy = $$es6
export const E$ = $$ei7
export const FG = $$eC8
export const I5 = $$eG9
export const Im = $$K10
export const LR = $$Q11
export const Lq = $$q12
export const N3 = $$eu13
export const NU = $$eA14
export const QZ = $$eq15
export const S0 = $$ez16
export const SG = $$eV17
export const Tg = $$ew18
export const U6 = $$eF19
export const Ud = $$ed20
export const V2 = $$eX21
export const WK = $$W22
export const YN = $$eY23
export const YO = $$eL24
export const YW = $$eI25
export const Ys = $$eZ26
export const ZT = $$X27
export const _P = $$eb28
export const b4 = $$eR29
export const bI = $$er30
export const bh = $$en31
export const cW = $$$32
export const f6 = $$et33
export const j1 = $$eQ34
export const j8 = $$eW35
export const jA = $$e036
export const jg = $$Y37
export const kd = $$J38
export const ll = $$eM39
export const mf = $$ep40
export const nl = $$H41
export const op = $$e142
export const pR = $$ey43
export const q3 = $$eE44
export const qT = $$ec45
export const qr = $$eN46
export const sp = $$eH47
export const tB = $$eP48
export const uf = $$eT49
export const wH = $$ev50
export const wW = $$eo51
export const x = $$e$52
export const yQ = $$z53
