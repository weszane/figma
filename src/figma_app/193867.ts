import { T as _$$T } from '../905/27038'
import { B } from '../905/122726'
import { y as _$$y } from '../905/289978'
import { ViewSelectorGroup } from '../905/560883'
import { N } from '../905/694285'
import { _ as _$$_ } from '../905/733330'
import { u as _$$u } from '../905/778192'
import { YY } from '../905/782918'
import { v as _$$v } from '../905/832475'
import { O as _$$O } from '../905/833838'
import { i as _$$i } from '../905/838114'
import { G } from '../905/855105'
import { V } from '../905/856857'
import { a as _$$a } from '../905/870666'
import { m as _$$m } from '../905/931569'
import { f as _$$f } from '../905/992906'
import { FEditorType } from '../figma_app/53721'
import { $T, nw } from '../figma_app/422062'
import { throwTypeError } from '../figma_app/465776'
import { G as _$$G } from '../figma_app/471068'
import { pk } from '../figma_app/502247'
import { addBreadcrumb } from '../vendor/39153'

export let $$A0 = new ViewSelectorGroup([new $T(), new _$$f(), new YY(), new _$$y(), new _$$a(), new _$$m(), new B(), new G(), new _$$_(), new N(), new _$$u(), new _$$i(), new _$$T(), new _$$v()])
export function $$x14(e, t) {
  return new URL($$N6(e, t), document.baseURI).href
}
export function $$N6(e, t) {
  return $$A0.selectedViewToPath(t, e)
}
let C = ['drafts', 'fonts', 'libraries', 'search', 'settings', 'plugins', 'widgets', 'user'].concat(nw)
let w = new RegExp(`^/files/([0-9]+)/(?:${C.join('|')})(.*)$`)
let O = new RegExp('^/files/(\\d+)/?$')
let R = new RegExp(`^/files/team/([0-9]+)/(?:${C.join('|')})(.*)$`)
let L = (e, t, r) => {
  let n = e.split('/')
  n[1] && n[1] === 'files' && (n.length !== 6 || n[1] !== 'files' || n[2] !== 'team' || n[5] !== 'restore') && (e.match(w) ? n.splice(2, 1) : e.match(R) ? n.splice(2, 2) : (n.length >= 3 && t && n[2] === t && n.splice(2, 1), n.length >= 3 && r && n[3] === r && n.splice(2, 2)))
  return n
}
let P = (e, t) => {
  let r = e.split('/')
  r[1] && r[1] === 'files' && (e.match(w) ? r.splice(2, 1) : r.length >= 3 && t && r[2] === t && r.splice(2, 1))
  return r
}
export function $$D10(e) {
  let t = e.match(w)
  if (t)
    return t[1]
  let r = e.match(O)
  return r ? r[1] : null
}
export function $$k15(e) {
  let t = e.match(R)
  return t ? t[1] : null
}
export function $$M9(e) {
  let t = P(e, pk())
  t[t.length - 1] === '' && t.splice(t.length - 1, 1)
  return t
}
export function $$F13(e, t, r, n, i = {
  view: 'recentsAndSharing',
}) {
  let a = [](a = L(t, e.currentUserOrgId, e.currentTeamId))[a.length - 1] === '' && a.splice(a.length - 1, 1)
  return $$A0.pathToSelectedView(e, a, r, n) || i
}
export function $$j7(e, t, r, n, i) {
  if (t === n && r === i)
    return e
  let a = t === _$$O.ORG ? r : `team/${r}`
  let s = n === _$$O.ORG ? i : `team/${i}`
  return e.replace(a, s)
}
export function $$U3(e, t) {
  return $$A0.selectedViewName(t, e)
}
export function $$B2(e) {
  let t = e.modalShown
  for (; t;) {
    if (t.type === 'ACCOUNT_SETTINGS_MODAL')
      return !0
    t = t.prevModal
  }
  return !1
}
export function $$G1(e) {
  let t = e.view
  switch (t) {
    case 'deletedFiles':
    case 'folder':
    case 'team':
    case 'allProjects':
    case 'teamAdminConsole':
    case 'orgAdminSettings':
    case 'licenseGroup':
    case 'workspace':
    case 'billingGroupDashboard':
    case 'search':
    case 'fullscreen':
    case 'org':
    case 'user':
    case 'resourceUnavailable':
    case 'feed':
    case 'desktopNewTab':
    case 'modalInIFrame':
    case 'teamFeed':
    case 'limitedTeamSharedProjects':
    case 'recentsAndSharing':
    case 'draftsToMove':
    case 'orgDomainManagement':
    case 'orgIdpManagement':
    case 'abandonedDraftFiles':
    case 'trashedFolders':
    case 'seatRequests':
    case 'resourceHub':
      return !0
    case 'teamCreation':
    case 'teamUpgrade':
    case 'teamRestore':
    case 'addCollaborators':
    case 'promoReview':
    case 'eduReview':
    case 'orgSelfServe':
    case 'communityHub':
    case 'prototype':
    case 'figmascope':
    case 'mobileViewer':
    case 'figjamTry':
    case 'presentation':
    case 'litmus':
    case 'litmus-standalone':
    case 'componentBrowserLibrary':
    case 'abuseReportForm':
      return !1
    default:
      throwTypeError(t)
  }
}
export function $$V16(e) {
  return e.view === 'fullscreen' && e.workshopModeInfoLoaded && e.workshopModeInfo && e.editorType === FEditorType.Whiteboard && new Date() < e.workshopModeInfo.until || !1
}
export function $$H11(e) {
  return !!(e.view === 'fullscreen' && e.tryPluginId && e.tryPluginName && e.tryPluginVersionId)
}
export function $$z12(e) {
  return e.view === 'fullscreen' && e.nodeId || null
}
export function $$W8(e) {
  switch (e.view) {
    case 'fullscreen':
      return e.fileKey || null
    case 'mobileViewer':
      return e.file?.key || null
    case 'prototype':
      e.file == null && addBreadcrumb({
        data: {
          selectedView: e,
        },
      })
      return e.file.key
    default:
      return null
  }
}
export function $$$$K4(e) {
  return e.view === 'recentsAndSharing' && (void 0 === e.tab || e.tab === _$$G.RECENTLY_VIEWED)
}
export function $$Y5(e) {
  return e.view === 'resourceHub' || V(e)
}
export const $Z = $$A0
export const CR = $$G1
export const IE = $$B2
export const Iu = $$U3
export const K = $$$$K4
export const Mo = $$Y5
export const Np = $$N6
export const Tk = $$j7
export const U2 = $$W8
export const YP = $$M9
export const bW = $$D10
export const i1 = $$H11
export const s5 = $$z12
export const vU = $$F13
export const xS = $$x14
export const yn = $$k15
export const zg = $$V16
