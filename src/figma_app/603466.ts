import { reportError } from '../905/11'
import { w } from '../905/83498'
import { ServiceCategories as _$$e } from '../905/165054'
import { getSingletonSceneGraph } from '../905/700578'
import { debounce } from '../905/915765'
import { nM } from '../figma_app/276332'
import { PluginHelpers, SceneChangeType } from '../figma_app/763686'

export let $$n31
let u = []
let p = []
let _ = []
let h = []
let m = []
let g = []
let f = []
let E = []
let y = []
let b = []
let T = []
let I = []
let S = null
let v = new class {
  constructor() {
    this.task = null
    this.eventByGuid = new Map()
    this.styleEventByGuid = new Map()
    this.nodeEventByGuid = new Map()
    this.timeOutMs = 100
    this.flush = () => {
      let e = []
      for (let t of this.eventByGuid.values()) {
        if (t.nodeType !== 'NONE') {
          for (let r of t.events) e.push(this.injectTypeIntoEvent(t, r))
        }
      }
      for (let t of m) t(e)
      let t = []
      for (let e of this.styleEventByGuid.values()) {
        if (e.nodeType !== 'NONE') {
          for (let r of e.events) t.push(r)
        }
      }
      for (let e of g) e(t)
      let r = []
      for (let e of this.nodeEventByGuid.values()) {
        if (e.nodeType !== 'NONE') {
          for (let t of e.events) {
            r.push({
              ...t,
              nodeType: e.nodeType,
            })
          }
        }
      }
      for (let e of f) e(r)
      this.eventByGuid.clear()
      this.styleEventByGuid.clear()
      this.nodeEventByGuid.clear()
      this.task = null
    }
  }

  onEventFired(e) {
    this.task == null && (this.task = scheduler.postTask(this.flush, {
      delay: this.timeOutMs,
      priority: 'user-visible',
    }))
    let t = this.eventByGuid.get(e.id) ?? {
      nodeType: this.publicNodeTypeFromEvent(e),
      events: [],
    }
    if (!t)
      return
    t.nodeType === 'NONE' && (t.nodeType = this.publicNodeTypeFromEvent(e))
    let r = t.events.find(t => t.type === e.type && t.origin === e.origin)
    if (r) {
      for (let t of e.properties) r.properties.add(t)
    }
    else {
      let r = getSingletonSceneGraph().get(e.id)
      r && (e.type === SceneChangeType.STYLE_PROPERTY_CHANGE || e.type === SceneChangeType.STYLE_CREATE || e.type === SceneChangeType.STYLE_DELETE
        ? r.styleKeyForPublish && t.events.push({
          id: e.id,
          origin: e.origin,
          type: e.type,
          properties: new Set(e.properties),
          styleKey: nM({
            key: r.styleKeyForPublish,
            version: r.styleVersionHash,
          }),
        })
        : t.events.push({
            id: e.id,
            origin: e.origin,
            type: e.type,
            properties: new Set(e.properties),
            devFriendlyId: getSingletonSceneGraph().developerFriendlyIdFromGuid(e.id),
            oldContainingCanvas: e.oldContainingCanvas,
          }))
    }
    this.eventByGuid.set(e.id, t)
    let n = getSingletonSceneGraph().get(e.id)
    if (n) {
      if (n.styleKeyForPublish) {
        let r = t.events.filter(e => e.type === SceneChangeType.STYLE_DELETE || e.type === SceneChangeType.STYLE_CREATE || e.type === SceneChangeType.STYLE_PROPERTY_CHANGE)
        this.styleEventByGuid.set(e.id, {
          nodeType: this.publicNodeTypeFromEvent(e),
          events: r,
        })
      }
      else {
        let r = t.events.filter(e => e.type === SceneChangeType.CREATE || e.type === SceneChangeType.PROPERTY_CHANGE || e.type === SceneChangeType.DELETE).map((e) => {
          let t = ''
          e.type === SceneChangeType.CREATE || e.type === SceneChangeType.PROPERTY_CHANGE ? t = n.containingCanvas || '' : e.type === SceneChangeType.DELETE && (t = e.oldContainingCanvas?.toString() || '')
          t === '' && reportError(_$$e.EXTENSIBILITY, new Error('Containing canvas for nodechange event is empty'))
          return {
            ...e,
            containingCanvas: t,
          }
        })
        this.nodeEventByGuid.set(e.id, {
          nodeType: this.publicNodeTypeFromEvent(e),
          events: r,
        })
      }
    }
  }

  publicNodeTypeFromEvent(e) {
    let t = getSingletonSceneGraph().get(e.id)
    return t && t?.type !== 'NONE' ? w(t) : 'NONE'
  }

  injectTypeIntoEvent(e, t) {
    return t.type === SceneChangeType.CREATE || t.type === SceneChangeType.DELETE || t.type === SceneChangeType.PROPERTY_CHANGE
      ? {
          ...t,
          nodeType: e.nodeType,
        }
      : t
  }
}()
export function $$A55() {
  $$n31 = {
    selectionChange(e) {
      for (let t of u) e ? t.boxSelection() : t.normal()
    },
    boxSelectionEnded() {
      for (let e of u) e.boxSelection.flush()
    },
    currentPageChange() {
      for (let e of p) e()
    },
    timerChange(e) {
      for (let t of _) t(e)
    },
    documentChange(e) {
      v.onEventFired(e)
    },
    codegenPreferencesChange(e) {
      for (let t of E) t(e)
    },
    slidesViewChange(e) {
      for (let t of y) {
        t({
          view: e,
        })
      }
    },
    stackInvariantsEnforced(e) {
      eL?.(e)
    },
    pluginPageLoaded(e) {
      for (let t of b) t(e)
    },
    pluginAccessibleNodeIds() {
      let e = new Set()
      for (let t of T) t().forEach(t => e.add(t))
      return Array.from(e)
    },
    pluginAccessiblePages() {
      let e = new Set()
      for (let t of I) t().forEach(t => e.add(t))
      return Array.from(e)
    },
  }
}
export function $$x12(e) {
  u.push({
    normal: e,
    boxSelection: debounce(e, 500),
  })
}
export function $$N53(e) {
  u = u.filter(t => t.normal !== e || (t.boxSelection.cancel(), !1))
}
export function $$C27(e) {
  p.push(e)
}
export function $$w30(e) {
  p = p.filter(t => t !== e)
}
export function $$O20(e) {
  _.push(e)
}
export function $$R47(e) {
  _ = _.filter(t => t !== e)
}
export function $$L11(e) {
  h.push(e)
}
export function $$P22(e) {
  h = h.filter(t => t !== e)
}
export function $$D7(e) {
  for (let t of h) {
    if (!1 === t(e))
      return !1
  }
  return !0
}
export function $$k26(e) {
  b.push(e)
}
export function $$M19(e) {
  b = b.filter(t => t !== e)
}
export function $$F16(e) {
  T.push(e)
}
export function $$j24(e) {
  T = T.filter(t => t !== e)
}
export function $$U17(e) {
  I.push(e)
}
export function $$B42(e) {
  I = I.filter(t => t !== e)
}
function G() {
  m.length || g.length || f.length ? PluginHelpers.setIsDocumentChangeCallbackRegistered(!0) : PluginHelpers.setIsDocumentChangeCallbackRegistered(!1)
}
export function $$V14(e) {
  m.push(e)
  G()
}
export function $$H29(e) {
  m = m.filter(t => t !== e)
  G()
}
export function $$z40(e) {
  g.push(e)
  G()
}
export function $$W37(e) {
  g = g.filter(t => t !== e)
  G()
}
export function $$K1(e) {
  f.push(e)
  G()
}
export function $$Y48(e) {
  f = f.filter(t => t !== e)
  G()
}
export function $$$39(e) {
  E.push(e)
}
export function $$X0(e) {
  E = E.filter(t => t !== e)
}
export function $$q28(e) {
  y.push(e)
  G()
}
export function $$J44(e) {
  y = y.filter(t => t !== e)
  G()
}
let {
  set,
  remove,
  has,
  runOrTimeout,
} = eD()
let {
  set: _set,
  remove: _remove,
  has: _has,
  run,
} = eD()
let {
  set: _set2,
  remove: _remove2,
  has: _has2,
  run: _run,
  reset,
  runOrTimeout: _runOrTimeout,
} = eD()
let {
  set: _set3,
  remove: _remove3,
  has: _has3,
  run: _run2,
  reset: _reset,
} = eD()
let {
  set: _set4,
  remove: _remove4,
  has: _has4,
  run: _run3,
  reset: _reset2,
} = eD()
let {
  set: _set5,
  remove: _remove5,
  has: _has5,
  run: _run4,
  reset: _reset3,
  runOrTimeout: _runOrTimeout2,
} = eD()
export function $$eC41(e) {
  S = e
}
export function $$ew36() {
  return !!S
}
export function $$eO32() {
  S = null
}
export async function $$eR9() {
  return !S || (await S())
}
let eL = null
export function $$eP49(e) {
  eL = e
  return () => eL = null
}
function eD() {
  let e
  let t = new Promise((t) => {
    e = t
  })
  let r = null
  let n = () => {
    t = new Promise((t) => {
      e = t
    })
    r = null
  }
  let i = async (...e) => {
    let r = await t
    return await r(...e)
  }
  return {
    set: (t) => {
      r = t
      e(t)
    },
    remove: (e) => {
      e === r && n()
    },
    has: () => !!r,
    run: i,
    runOrTimeout: async (e, ...t) => {
      let r = !1
      let n = new Promise((t) => {
        setTimeout(() => {
          r = !0
          t()
        }, e)
      })
      let a = await Promise.race([i(...t), n])
      return r
        ? {
            didRun: !1,
          }
        : {
            didRun: !0,
            returnValue: a,
          }
    },
    reset: n,
  }
}
export const $y = $$X0
export const BT = $$K1
export const B_ = _set5
export const Bs = set
export const Cu = _runOrTimeout
export const G1 = _remove2
export const H4 = _remove5
export const I2 = $$D7
export const IM = _has
export const It = $$eR9
export const Jc = _has5
export const KB = $$L11
export const LL = $$x12
export const ME = _set4
export const Mw = $$V14
export const OD = _set3
export const Q4 = $$F16
export const Ql = $$U17
export const Qx = run
export const Rp = $$M19
export const Sf = $$O20
export const Sx = _set
export const Ty = $$P22
export const Ut = _run3
export const VM = $$j24
export const Vb = remove
export const W5 = $$k26
export const Xx = $$C27
export const _C = $$q28
export const b_ = $$H29
export const cI = $$w30
export const d1 = $$n31
export const dG = $$eO32
export const dM = has
export const f$ = reset
export const f2 = runOrTimeout
export const fS = $$ew36
export const fd = $$W37
export const hY = _reset2
export const i1 = $$$39
export const iP = $$z40
export const jG = $$eC41
export const jS = $$B42
export const n4 = _reset
export const nf = $$J44
export const o5 = _run
export const oZ = _set2
export const po = $$R47
export const q$ = $$Y48
export const qC = $$eP49
export const r2 = _runOrTimeout2
export const sd = _remove
export const se = _run2
export const wk = $$N53
export const xG = _run4
export const xi = $$A55
