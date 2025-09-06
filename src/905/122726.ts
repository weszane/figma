import { p as _$$p } from '../905/428660'
import { communityPagePaths } from '../905/528121'
import { Ay } from '../905/612521'
import { parseQuery } from '../905/634134'
import { languageCodes } from '../905/816253'
import { bL } from '../905/934145'
import { P5, z4 } from '../figma_app/175992'
import { M3 } from '../figma_app/198840'
import { my, Rd } from '../figma_app/300692'
import { _O, E2, Tb } from '../figma_app/350203'
import { Uo } from '../figma_app/354658'
import { throwTypeError } from '../figma_app/465776'
import { UI } from '../figma_app/471982'
import { MU, wl } from '../figma_app/640564'
import { g3, ou, U6 } from '../figma_app/707808'
import { K2 } from '../figma_app/777551'

export class $$y0 {
  pathToSelectedView(e, t, i) {
    let a = {
      view: 'communityHub',
    }
    let s = [...t]
    let l = Object.keys(communityPagePaths).find((e) => {
      let i = communityPagePaths[e]
      return i && t.join('/').startsWith(i)
    })
    if (l && l !== languageCodes.EN && (t = t.slice(3)).unshift('', 'community'), t[1] === 'community') {
      let e = i ? parseQuery(i) : {}
      if (t[2] === 'seller') {
        return {
          view: 'communityHub',
          subView: 'monetizationRedirectView',
          interstitialType: U6.ONBOARDING,
          redirectUrl: e.redirect_url,
        }
      }
      if (t[2] === 'file' && t[3] && t.length > 4 && t[t.length - 1] === 'embed') {
        return {
          ...a,
          subView: 'hubFileEmbed',
          hubFileId: t[3],
        }
      }
      if (['file', 'plugin', 'widget'].includes(t[2]) && t[3]) {
        let [n, r] = [t[2], t[3]]
        let a = e.comment
        let s = _$$p(n, r)
        let o = new URLSearchParams(i)
        let l = {
          ...s,
          triggerCheckout: o.get(Tb) ?? null,
          triggerFreemiumPreview: o.get(_O) === E2,
          commentThreadId: a,
          rating: e.rating,
        }
        if (t[2] === 'file') {
          let t = e.preview
          t && (l.fullscreenState = t)
        }
        return l
      }
      if (t[2] === 'iframe_modal') {
        let e = ou.ACCOUNT_SETTINGS
        let i = t[t.length - 1]
        i === 'settings' ? e = ou.ACCOUNT_SETTINGS : i === 'publish' && (e = ou.UNIVERSAL_PUBLISHING)
        return {
          view: 'modalInIFrame',
          modalInIFrameType: e,
        }
      }
      return t[2] === 'collections'
        ? {
            view: 'communityHub',
            subView: 'searchAndBrowse',
            data: void 0,
          }
        : t[2] === 'templates' && t[3]
          ? {
              view: 'communityHub',
              subView: 'searchAndBrowse',
              data: void 0,
            }
          : {
              view: 'communityHub',
              subView: 'searchAndBrowse',
              data: wl(s.join('/'), i),
            }
    }
    if (t[1]?.startsWith('@')) {
      let i = t[1].slice(1)?.toLowerCase()
      let {
        user,
      } = e
      if (!i)
        return null
      let r = t[2]
      r === g3.METRICS && z4(user?.stripe_account_status) < z4(P5.ACCEPTED) && (r = g3.RESOURCES)
      return {
        ...a,
        subView: 'handle',
        handle: i,
        profileTab: r,
      }
    }
    return null
  }

  requireHistoryChange(e, t) {
    return e.view !== 'communityHub' || t.view !== 'communityHub' ? e.view === 'communityHub' != (t.view === 'communityHub') : e.subView === 'handle' && t.subView === 'handle' ? e.handle !== t.handle || e.profileTab !== t.profileTab : e.subView === 'plugin' && t.subView === 'plugin' ? e.publishedPluginId !== t.publishedPluginId : e.subView === 'widget' && t.subView === 'widget' ? e.widgetId !== t.widgetId : e.subView === 'hubFile' && t.subView === 'hubFile' ? e.hubFileId !== t.hubFileId : e.subView !== t.subView
  }

  selectedViewName(e, t) {
    if (e.view !== 'communityHub')
      return null
    if (e.subView === 'plugin') {
      let i = my(e.publishedPluginId, t.publishedPlugins)
      return K2(i)
    }
    if (e.subView === 'widget') {
      let i = Rd(e.widgetId, t.publishedWidgets)
      return K2(i)
    }
    if (e.subView === 'hubFile') {
      let i = M3(e.hubFileId, t.hubFiles)
      return K2(i)
    }
    if (e.subView === 'hubFileEmbed')
      return 'Community'
    if (e.subView === 'handle')
      return `@${e.handle}`
    if (e.subView === 'searchAndBrowse')
      return 'Community'
    if (e.subView === 'monetizationRedirectView')
      return 'Stripe onboarding complete'
    throwTypeError(e)
  }

  selectedViewToPath(e, t) {
    if (e.view === 'modalInIFrame')
      return `/community/iframe_modal/${e.modalInIFrameType}`
    if (e.view !== 'communityHub')
      return null
    if (e.subView === 'monetizationRedirectView' && e.interstitialType === U6.ONBOARDING)
      return '/community/seller/onboarding/completed'
    if (e.subView === 'plugin' || e.subView === 'widget') {
      let i = this.selectedViewName(e, t)
      let n = UI({
        path: e.subView,
        id: e.subView === 'plugin' ? e.publishedPluginId : e.widgetId,
        name: i,
      })
      e.triggerCheckout !== null && void 0 !== e.triggerCheckout && (n += `?checkout=${e.triggerCheckout}`)
      e.commentThreadId && (n += `${!n.includes('?') ? '?' : '&'}comment=${e.commentThreadId}`)
      e.rating && (n += `${!n.includes('?') ? '?' : '&'}rating=${e.rating}`)
      return n
    }
    if (e.subView === 'hubFile') {
      let n = {}
      e.commentThreadId && (n.comment = e.commentThreadId)
      e.fullscreenState && (n.preview = e.fullscreenState)
      e.triggerCheckout !== null && void 0 !== e.triggerCheckout && (n[Tb] = e.triggerCheckout)
      e.triggerFreemiumPreview && (n[_O] = E2)
      e.rating && (n.rating = e.rating)
      let r = this.selectedViewName(e, t)
      let i = UI({
        path: Uo.FILE,
        id: e.hubFileId,
        name: r,
      })
      let a = new URLSearchParams(n).toString()
      return `${i}${a && `?${a}`}`
    }
    return e.subView === 'hubFileEmbed' ? `/community/file/${e.hubFileId}/embed` : e.subView === 'handle' ? bL(e.handle, e.profileTab, t.user) : e.subView === 'searchAndBrowse' ? e.data ? MU(e.data) : Ay.location.pathname : '/community'
  }
}
export const B = $$y0
