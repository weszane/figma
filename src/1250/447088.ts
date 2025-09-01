import { l7 } from '../905/189185'
import { isNotNullish } from '../figma_app/95419'
import { XW } from '../figma_app/427318'
import { x } from '../figma_app/639711'
import { Egt, Ez5, fZl, glU, IPu, Z64 } from '../figma_app/763686'
import { Ez } from '../figma_app/766708'

let $$d2 = 3
let c = [Z64.FACEBOOK_AD_PORTRAIT, Z64.INSTA_POST_PORTRAIT, Z64.LINKEDIN_POST_PORTRAIT, Z64.LINKEDIN_POST_LANDSCAPE, Z64.LINKEDIN_AD_SQUARE, Z64.LINKEDIN_AD_VERTICAL, Z64.GOOGLE_MOBILE_BANNER_AD, Z64.GOOGLE_SKYSCRAPER_AD, Z64.PRINT_US_LETTER, Z64.POSTER, Z64.BANNER_STANDARD, Z64.BANNER_WIDE, Z64.BANNER_ULTRAWIDE, Z64.NAME_TAG_PORTRAIT, Z64.NAME_TAG_LANDSCAPE, Z64.INSTA_REEL_COVER, Z64.ZOOM_BACKGROUND, Z64.TIKTOK_POST]
export function $$_0({
  dimensions: e,
  assets: t,
}) {
  if (!t || t.length === 0)
    return t
  let {
    width,
    height,
  } = e
  let r = [[504, 360], [360, 504], [540, 792], [648, 864], [576, 288], [576, 192], [576, 144], [144, 216], [216, 144]]
  let i = [{
    w: 2100,
    h: 1500,
  }, {
    w: 1500,
    h: 2100,
  }, {
    w: 2250,
    h: 3300,
  }, {
    w: 2700,
    h: 3600,
  }, {
    w: 2400,
    h: 1200,
  }, {
    w: 2400,
    h: 800,
  }, {
    w: 2400,
    h: 600,
  }, {
    w: 600,
    h: 900,
  }, {
    w: 900,
    h: 600,
  }]
  for (let e = 0; e < r.length; e++) {
    let o = r[e]
    if (o && width === o[0] && height === o[1]) {
      let r = i[e]
      return t.filter((e) => {
        if (!XW(e))
          return !1
        let t = $$u1(e)
        return !!t && (t.width === width && t.height === height || t.width === r?.w && t.height === r?.h)
      })
    }
  }
  return t.filter((e) => {
    if (!XW(e))
      return !1
    let t = $$u1(e)
    return !!t && t.width === width && t.height === height
  })
}
export function $$u1(e) {
  if (!XW(e))
    return
  let t = e.content.component_v2?.min_node_width
  let n = e.content.component_v2?.min_node_height
  return t && n
    ? {
        width: t,
        height: n,
      }
    : void 0
}
export function $$m4({
  templateType: e,
  closeTemplatePicker: t,
  shouldInsertFrame: n,
  shouldEnterGridView: a,
  setDimensionsSubmenuOpen: o,
  setActiveTab: s,
  setCooperTemplateShouldUseAssetType: d,
}) {
  l7.user('Create blank template', () => {
    let i = fZl?.getCooperTemplateTypeSize(e)
    let _ = Ez5?.getInsertGridCoord({
      x: -1 / 0,
      y: -1 / 0,
    })
    if (!i || !_) {
      console.error('Failed fetch size and/or location for new template', i, _)
      return
    }
    let u = IPu?.createBlankChildAtCoord(_.row, _.col, i, 'start_from_scratch', !n, e)
    u && (a
      ? (Ez5?.cooperFocusView().exitFocusedNodeView(), glU?.panToNode(u, !1), Egt?.replaceSelection([u], !1))
      : Ez5?.cooperFocusView().isFocusedNodeViewEnabled()
        ? Ez5?.cooperFocusView().focusNodeInFocusedNodeView(u, !0)
        : (setTimeout(() => {
            Ez5?.cooperFocusView().panToNodeIfOutsideViewport(u, 0.6)
          }, 0), Egt?.replaceSelection([u], !1)))
    e === Z64.CUSTOM && o(!0)
    e !== Z64.CUSTOM && s && d && (s(x.TEMPLATES), c.includes(e) || d(!0))
    t()
  })
}
export function $$p3(e, t) {
  return isNotNullish(e.sort_position) && isNotNullish(t.sort_position) ? -Ez(e.sort_position, t.sort_position) : e.name.localeCompare(t.name)
}
export const AO = $$_0
export const Kq = $$u1
export const YS = $$d2
export const go = $$p3
export const r5 = $$m4
