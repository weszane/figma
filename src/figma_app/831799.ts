import { Children, Component, createContext, forwardRef, PureComponent, useContext, useEffect, useMemo, useRef } from 'react'
import { shallowEqual } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { getRumLoggingConfig } from '../905/16237'
import { K } from '../905/135526'
import { getI18nString, I18nTextComponent } from '../905/303541'
import { trackEventAnalytics } from '../905/449184'
import { handleAtomEvent } from '../905/502364'
import { logDebug } from '../905/714362'
import { qD as _$$qD, Cu, fy } from '../figma_app/314264'
import { N_ } from '../vendor/956898'

let h = null
function m() {
  h = null
}
export let $$g2 = createContext({
  properties: {},
  trackEvent: () => null,
})
export function $$f4({
  name: e,
  properties: t = {},
  trackingTargets: r = K.ALL,
  enabled: s = !0,
  ignoreParent: c = !1,
  onlyOnce: u = !1,
  children: m,
  trackingOptions: f,
}) {
  let {
    name,
    properties,
  } = useContext($$g2)
  let b = useRef({})
  let T = useRef(null)
  b.current && shallowEqual(b.current, t) || (b.current = t)
  t = b.current
  let I = useMemo(() => {
    let r = name && !c ? `${name} > ${e}` : e
    let n = {
      ...properties,
      ...t,
    }
    return {
      name: r,
      properties: n,
      trackEvent: (e, t) => trackEventAnalytics(e, {
        trackingContext: r,
        ...n,
        ...t,
      }),
    }
  }, [e, t, name, properties, c])
  useEffect(() => {
    if (!s || r === K.NONE)
      return
    let e = I.name
    let t = I.properties
    if (T.current && T.current.name === e && (u || shallowEqual(T.current.properties, t)))
      return
    if (r === K.RCS) {
      let r = {}
      for (let e of Object.keys(t)) t[e] !== null && void 0 !== t[e] && (r[e] = t[e])
      handleAtomEvent({
        id: e,
        properties: r,
      })
      return
    }
    let n = {
      name: e,
      ...(h != null && {
        ctaClickedReferrer: h,
      }),
      ...t,
    }
    logDebug('Context Viewed', e, n)
    _$$qD(n, f)
    T.current = I
  }, [r, I, s, u, f])
  return jsx($$g2.Provider, {
    value: I,
    children: m,
  })
}
export function $$E8(e, t) {
  let r;
  (r = class extends PureComponent {
    render() {
      return jsx($$f4, {
        name: t || e.displayName,
        children: jsx(e, {
          ...this.props,
        }),
      })
    }
  }).displayName = e.displayName
  return r
}
export function $$y3(e, t, r = {}, i = !0) {
  return jsx($$f4, {
    name: t,
    properties: r,
    enabled: i,
    children: e,
  })
}
export function $$b10(e, t) {
  let r = forwardRef((r, a) => {
    let s = getRumLoggingConfig()
    return jsx($$g2.Consumer, {
      children: (o) => {
        let l = (e) => {
          if (r.disabled)
            return
          let n = {
            ...o.properties,
            ...r.trackingProperties,
          }
          o.name && (n.trackingContext = o.name)
          let a = (function (e, t) {
            if (t)
              return t
            if (e && typeof e == 'string')
              return e
            {
              let t = Children.map(e, (e) => {
                if (e?.type !== I18nTextComponent)
                  return e
                {
                  let {
                    id,
                    options,
                  } = e.props
                  return getI18nString(id, options)
                }
              })
              if (t?.every(e => typeof e == 'string'))
                return t.join('')
            }
          }(r.children, r.innerText))
          a && (n.text = a)
          let l = r.trackingOptions
          r.RUMEnabled && (l = {
            ...s,
            ...(l || {}),
          })
          Cu(n, r.trackingEventName, t, l)
          h = `${n.trackingContext} : ${n.text}`
          r.onClick?.(e)
          setTimeout(m, 150)
        }
        let {
          trackingProperties,
          innerText,
          useMouseDown,
          trackingEventName,
          trackingOptions,
          RUMEnabled,
          ...y
        } = r
        return jsx(e, {
          ref: a,
          ...y,
          ...(r.useMouseDown
            ? {
                onMouseDown: l,
              }
            : {
                onClick: l,
              }),
        })
      },
    })
  })
  r.displayName = `Tracked(${e.displayName || e.name})`
  return r
}
export function $$T5(e) {
  return class extends Component {
    render() {
      return jsx($$g2.Consumer, {
        children: (t) => {
          let {
            trackingProperties,
            trackingPopulationLevel,
            trackingFieldName,
            ...s
          } = this.props
          return jsx(e, {
            ...s,
            onBlur: (e) => {
              let r = {
                ...t.properties,
                ...this.props.trackingProperties,
                fieldName: this.props.trackingFieldName,
                populationLevel: this.props.trackingPopulationLevel,
              }
              t.name && (r.trackingContext = t.name)
              fy(r)
              this.props.onBlur && this.props.onBlur(e)
            },
          })
        },
      })
    }
  }
}
let $$I0 = $$b10(({
  dataTestId: e,
  ...t
}) => jsx('button', {
  ...t,
  'data-testid': e,
}))
let $$S7 = $$b10(e => jsx('div', {
  ...e,
}))
let $$v1 = $$b10(e => jsx('a', {
  ...e,
  children: e.children,
}), !0)
let $$A9 = $$b10(e => jsx(N_, {
  ...e,
}))
export function $$x6() {
  return useContext($$g2)
}
$$b10(e => jsx('input', {
  ...e,
}))
export const $z = $$I0
export const L0 = $$v1
export const QE = $$g2
export const T8 = $$y3
export const fu = $$f4
export const h3 = $$T5
export const j6 = $$x6
export const jm = $$S7
export const kp = $$E8
export const o3 = $$A9
export const tf = $$b10
