import { Children, cloneElement, Component, createContext, createElement, isValidElement, useContext } from 'react'
import { A as _$$A } from '../vendor/179604'
import A from '../vendor/223108'
import { A as _$$A2 } from '../vendor/258635'
import u from '../vendor/353719'
import { Fu, yJ } from '../vendor/488412'
import { A as _$$A3 } from '../vendor/710480'

let o = A
let $$g = u
let c = typeof globalThis != 'undefined' ? globalThis : typeof window != 'undefined' ? window : void 0 !== require.g ? require.g : {}
let f = createContext || function (e, t) {
  let n
  let A
  let s
  let a = `__create-react-context-${c[n = '__global_unique_id__'] = (c[n] || 0) + 1}__`
  let l = (function (e) {
    function n() {
      for (i = $$arguments.length, A = new Array(i), o = 0, void 0; o < i; o++) {
        var t
        var n
        var r
        var i
        var A
        var o
        A[o] = $$arguments[o]
      }
      (t = e.call.apply(e, [this].concat(A)) || this).emitter = (n = t.props.value, r = [], {
        on(e) {
          r.push(e)
        },
        off(e) {
          r = r.filter((t) => {
            return t !== e
          })
        },
        get() {
          return n
        },
        set(e, t) {
          n = e
          r.forEach((e) => {
            return e(n, t)
          })
        },
      })
      return t
    }
    _$$A(n, e)
    let i = n.prototype
    i.getChildContext = function () {
      let e;
      (e = {})[a] = this.emitter
      return e
    }
    i.componentWillReceiveProps = function (e) {
      if (this.props.value !== e.value) {
        let n
        let r = this.props.value
        let i = e.value;
        (r === i ? r !== 0 || 1 / r == 1 / i : r != r && i != i) ? n = 0 : (n = (typeof t == 'function' ? t(r, i) : 0x3FFFFFFF) | 0) != 0 && this.emitter.set(e.value, n)
      }
    }
    i.render = function () {
      return this.props.children
    }
    return n
  }(Component))
  l.childContextTypes = ((A = {})[a] = o().object.isRequired, A)
  let u = (function (t) {
    function n() {
      for (n = $$arguments.length, r = new Array(n), i = 0, void 0; i < n; i++) {
        var e
        var n
        var r
        var i
        r[i] = $$arguments[i]
      }
      (e = t.call.apply(t, [this].concat(r)) || this).observedBits = void 0
      e.state = {
        value: e.getValue(),
      }
      e.onUpdate = function (t, n) {
        ((0 | e.observedBits) & n) != 0 && e.setState({
          value: e.getValue(),
        })
      }
      return e
    }
    _$$A(n, t)
    let i = n.prototype
    i.componentWillReceiveProps = function (e) {
      let t = e.observedBits
      this.observedBits = t
    }
    i.componentDidMount = function () {
      this.context[a] && this.context[a].on(this.onUpdate)
      let e = this.props.observedBits
      this.observedBits = e
    }
    i.componentWillUnmount = function () {
      this.context[a] && this.context[a].off(this.onUpdate)
    }
    i.getValue = function () {
      return this.context[a] ? this.context[a].get() : e
    }
    i.render = function () {
      let e
      return (Array.isArray(e = this.props.children) ? e[0] : e)(this.state.value)
    }
    return n
  }(Component))
  u.contextTypes = ((s = {})[a] = o().object, s)
  return {
    Provider: l,
    Consumer: u,
  }
}
let d = function (e) {
  let t = f()
  t.displayName = e
  return t
}
let h = d('Router-History')
let $$p3 = d('Router')
let $$C1 = (function (e) {
  function t(t) {
    let n;
    (n = e.call(this, t) || this).state = {
      location: t.history.location,
    }
    n._isMounted = !1
    n._pendingLocation = null
    t.staticContext || (n.unlisten = t.history.listen((e) => {
      n._pendingLocation = e
    }))
    return n
  }
  _$$A(t, e)
  t.computeRootMatch = function (e) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: e === '/',
    }
  }
  let n = t.prototype
  n.componentDidMount = function () {
    let e = this
    this._isMounted = !0
    this.unlisten && this.unlisten()
    this.props.staticContext || (this.unlisten = this.props.history.listen((t) => {
      e._isMounted && e.setState({
        location: t,
      })
    }))
    this._pendingLocation && this.setState({
      location: this._pendingLocation,
    })
  }
  n.componentWillUnmount = function () {
    this.unlisten && (this.unlisten(), this._isMounted = !1, this._pendingLocation = null)
  }
  n.render = function () {
    return createElement($$p3.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: t.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext,
      },
    }, createElement(h.Provider, {
      children: this.props.children || null,
      value: this.props.history,
    }))
  }
  return t
}(Component))
Component
let I = (function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  _$$A(t, e)
  let n = t.prototype
  n.componentDidMount = function () {
    this.props.onMount && this.props.onMount.call(this, this)
  }
  n.componentDidUpdate = function (e) {
    this.props.onUpdate && this.props.onUpdate.call(this, this, e)
  }
  n.componentWillUnmount = function () {
    this.props.onUnmount && this.props.onUnmount.call(this, this)
  }
  n.render = function () {
    return null
  }
  return t
}(Component))
let E = {}
let B = 0
export function $$m8(e, t) {
  void 0 === e && (e = '/')
  void 0 === t && (t = {})
  return e === '/'
    ? e
    : (function (e) {
        if (E[e])
          return E[e]
        let t = $$g().compile(e)
        B < 1e4 && (E[e] = t, B++)
        return t
      }(e))(t, {
        pretty: !0,
      })
}
export function $$y7(e) {
  let t = e.computedMatch
  let n = e.to
  let r = e.push
  let A = void 0 !== r && r
  return createElement($$p3.Consumer, null, (e) => {
    e || _$$A2(!1)
    let r = e.history
    let o = e.staticContext
    let u = A ? r.push : r.replace
    let g = yJ(t
      ? typeof n == 'string'
        ? $$m8(n, t.params)
        : _$$A3({}, n, {
            pathname: $$m8(n.pathname, t.params),
          })
      : n)
    return o
      ? (u(g), null)
      : createElement(I, {
          onMount() {
            u(g)
          },
          onUpdate(e, t) {
            let n = yJ(t.to)
            Fu(n, _$$A3({}, g, {
              key: n.key,
            })) || u(g)
          },
          to: n,
        })
  })
}
let _ = {}
let Q = 0
export function $$D0(e, t) {
  void 0 === t && (t = {});
  (typeof t == 'string' || Array.isArray(t)) && (t = {
    path: t,
  })
  let n = t
  let r = n.path
  let i = n.exact
  let A = void 0 !== i && i
  let o = n.strict
  let s = void 0 !== o && o
  let a = n.sensitive
  let l = void 0 !== a && a
  return [].concat(r).reduce((t, n) => {
    if (!n && n !== '')
      return null
    if (t)
      return t
    let r = (function (e, t) {
      let n = `${t.end}${t.strict}${t.sensitive}`
      let r = _[n] || (_[n] = {})
      if (r[e])
        return r[e]
      let i = []
      let A = {
        regexp: $$g()(e, i, t),
        keys: i,
      }
      Q < 1e4 && (r[e] = A, Q++)
      return A
    }(n, {
      end: A,
      strict: s,
      sensitive: l,
    }))
    let i = r.regexp
    let o = r.keys
    let a = i.exec(e)
    if (!a)
      return null
    let u = a[0]
    let c = a.slice(1)
    let f = e === u
    return A && !f
      ? null
      : {
          path: n,
          url: n === '/' && u === '' ? '/' : u,
          isExact: f,
          params: o.reduce((e, t, n) => {
            e[t.name] = c[n]
            return e
          }, {}),
        }
  }, null)
}
export var $$w6 = (function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  _$$A(t, e)
  t.prototype.render = function () {
    let e = this
    return createElement($$p3.Consumer, null, (t) => {
      t || _$$A2(!1)
      let n
      let r = e.props.location || t.location
      let A = e.props.computedMatch ? e.props.computedMatch : e.props.path ? $$D0(r.pathname, e.props) : t.match
      let o = _$$A3({}, t, {
        location: r,
        match: A,
      })
      let s = e.props
      let u = s.children
      let g = s.component
      let c = s.render
      Array.isArray(u) && (n = u, Children.count(n) === 0) && (u = null)
      return createElement($$p3.Provider, {
        value: o,
      }, o.match ? u ? typeof u == 'function' ? u(o) : u : g ? createElement(g, o) : c ? c(o) : null : typeof u == 'function' ? u(o) : null)
    })
  }
  return t
}(Component))
Component
let $$b4 = (function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }
  _$$A(t, e)
  t.prototype.render = function () {
    let e = this
    return createElement($$p3.Consumer, null, (t) => {
      t || _$$A2(!1)
      let n
      let r
      let A = e.props.location || t.location
      Children.forEach(e.props.children, (e) => {
        if (r == null && isValidElement(e)) {
          n = e
          let o = e.props.path || e.props.from
          r = o
            ? $$D0(A.pathname, _$$A3({}, e.props, {
                path: o,
              }))
            : t.match
        }
      })
      return r
        ? cloneElement(n, {
            location: A,
            computedMatch: r,
          })
        : null
    })
  }
  return t
}(Component))
let v = useContext
export function $$k9() {
  return v($$p3).location
}
export function $$x5() {
  let e = v($$p3).match
  return e ? e.params : {}
}
export function $$S2(e) {
  let t = $$k9()
  let n = v($$p3).match
  return e ? $$D0(t.pathname, e) : n
}
export const B6 = $$D0
export const Ix = $$C1
export const W5 = $$S2
export const XZ = $$p3
export const dO = $$b4
export const g = $$x5
export const qh = $$w6
export const rd = $$y7
export const tW = $$m8
export const zy = $$k9
