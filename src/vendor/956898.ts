import { Component, createElement, forwardRef } from 'react'
import { A as _$$A2 } from '../vendor/20707'
import { B6, XZ } from '../vendor/130505'
import { A as _$$A3 } from '../vendor/258635'
import { AO, yJ } from '../vendor/488412'
import { A as _$$A } from '../vendor/710480'

let p = function (e, r) {
  return typeof e == 'function' ? e(r) : e
}
let g = function (e, r) {
  return typeof e == 'string' ? yJ(e, null, null, r) : e
}
let m = function (e) {
  return e
}
let v = forwardRef
function y(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
void 0 === v && (v = m)
let b = v((e, r) => {
  let n = e.innerRef
  let i = e.navigate
  let o = e.onClick
  let d = _$$A2(e, ['innerRef', 'navigate', 'onClick'])
  let p = d.target
  let g = _$$A({}, d, {
    onClick(e) {
      try {
        o && o(e)
      }
      catch (r) {
        e.preventDefault()
        return r
      }
      e.defaultPrevented || e.button !== 0 || p && p !== '_self' || y(e) || (e.preventDefault(), i())
    },
  })
  m !== v ? g.ref = r || n : g.ref = n
  return createElement('a', g)
})
let $$O0 = v((e, r) => {
  let n = e.component
  let y = void 0 === n ? b : n
  let O = e.replace
  let x = e.to
  let w = e.innerRef
  let k = _$$A2(e, ['component', 'replace', 'to', 'innerRef'])
  return createElement(XZ.Consumer, null, (e) => {
    e || _$$A3(!1)
    let n = e.history
    let i = g(p(x, e.location), e.location)
    let h = i ? n.createHref(i) : ''
    let b = _$$A({}, k, {
      href: h,
      navigate() {
        let r = p(x, e.location)
        let i = AO(e.location) === AO(g(r));
        (O || i ? n.replace : n.push)(r)
      },
    })
    m !== v ? b.ref = r || w : b.innerRef = w
    return createElement(y, b)
  })
})
let x = function (e) {
  return e
}
let w = forwardRef
function k() {
  for (e = $$arguments.length, r = new Array(e), n = 0, void 0; n < e; n++) {
    var e
    var r
    var n
    r[n] = $$arguments[n]
  }
  return r.filter((e) => {
    return e
  }).join(' ')
}
void 0 === w && (w = x)
w((e, r) => {
  let n = e['aria-current']
  let o = void 0 === n ? 'page' : n
  let m = e.activeClassName
  let v = void 0 === m ? 'active' : m
  let y = e.activeStyle
  let b = e.className
  let _ = e.exact
  let S = e.isActive
  let E = e.location
  let A = e.sensitive
  let C = e.strict
  let T = e.style
  let I = e.to
  let P = e.innerRef
  let R = _$$A2(e, ['aria-current', 'activeClassName', 'activeStyle', 'className', 'exact', 'isActive', 'location', 'sensitive', 'strict', 'style', 'to', 'innerRef'])
  return createElement(XZ.Consumer, null, (e) => {
    e || _$$A3(!1)
    let n = E || e.location
    let h = g(p(I, n), n)
    let m = h.pathname
    let M = m && m.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
    let D = M
      ? B6(n.pathname, {
          path: M,
          exact: _,
          sensitive: A,
          strict: C,
        })
      : null
    let N = !!(S ? S(D, n) : D)
    let $ = typeof b == 'function' ? b(N) : b
    let L = typeof T == 'function' ? T(N) : T
    N && ($ = k($, v), L = _$$A({}, L, y))
    let j = _$$A({
      'aria-current': N && o || null,
      'className': $,
      'style': L,
      'to': h,
    }, R)
    x !== w ? j.ref = r || P : j.innerRef = P
    return createElement($$O0, j)
  })
})
export const N_ = $$O0
