/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
let i = ['input:not([inert])', 'select:not([inert])', 'textarea:not([inert])', 'a[href]:not([inert])', 'button:not([inert])', '[tabindex]:not(slot):not([inert])', 'audio[controls]:not([inert])', 'video[controls]:not([inert])', '[contenteditable]:not([contenteditable="false"]):not([inert])', 'details>summary:first-of-type:not([inert])', 'details:not([inert])']
let s = i.join(',')
let o = typeof Element == 'undefined'
let a = o ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector
let h = !o && Element.prototype.getRootNode
  ? function (e) {
    let r
    return e?.getRootNode?.call(e)
  }
  : function (e) {
    return e?.ownerDocument
  }
let d = function e(r, n) {
  void 0 === n && (n = !0)
  let i
  let s = r?.getAttribute?.call(r, 'inert')
  return s === '' || s === 'true' || n && r && e(r.parentNode)
}
let p = function (e) {
  let r
  let n = e?.getAttribute?.call(e, 'contenteditable')
  return n === '' || n === 'true'
}
let g = function (e, r, n) {
  if (d(e))
    return []
  let i = Array.prototype.slice.apply(e.querySelectorAll(s))
  r && a.call(e, s) && i.unshift(e)
  return i = i.filter(n)
}
let m = function e(r, n, i) {
  for (o = [], h = Array.from(r), void 0; h.length;) {
    var o
    var h
    let p = h.shift()
    if (!d(p, !1)) {
      if (p.tagName === 'SLOT') {
        let g = p.assignedElements()
        let m = e(g.length ? g : p.children, !0, i)
        i.flatten
          ? o.push.apply(o, m)
          : o.push({
              scopeParent: p,
              candidates: m,
            })
      }
      else {
        a.call(p, s) && i.filter(p) && (n || !r.includes(p)) && o.push(p)
        let v = p.shadowRoot || typeof i.getShadowRoot == 'function' && i.getShadowRoot(p)
        let y = !d(v, !1) && (!i.shadowRootFilter || i.shadowRootFilter(p))
        if (v && y) {
          let b = e(!0 === v ? p.children : v.children, !0, i)
          i.flatten
            ? o.push.apply(o, b)
            : o.push({
                scopeParent: p,
                candidates: b,
              })
        }
        else {
          h.unshift.apply(h, p.children)
        }
      }
    }
  }
  return o
}
let v = function (e) {
  return !isNaN(parseInt(e.getAttribute('tabindex'), 10))
}
let y = function (e) {
  if (!e)
    throw new Error('No node provided')
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || p(e)) && !v(e) ? 0 : e.tabIndex
}
let b = function (e, r) {
  let n = y(e)
  return n < 0 && r && !v(e) ? 0 : n
}
let O = function (e, r) {
  return e.tabIndex === r.tabIndex ? e.documentOrder - r.documentOrder : e.tabIndex - r.tabIndex
}
let x = function (e) {
  return e.tagName === 'INPUT'
}
let w = function (e) {
  return x(e) && e.type === 'hidden'
}
let k = function (e) {
  return e.tagName === 'DETAILS' && Array.prototype.slice.apply(e.children).some((e) => {
    return e.tagName === 'SUMMARY'
  })
}
let _ = function (e, r) {
  for (let n = 0; n < e.length; n++) {
    if (e[n].checked && e[n].form === r)
      return e[n]
  }
}
let S = function (e) {
  if (!e.name)
    return !0
  let r
  let n = e.form || h(e)
  let i = function (e) {
    return n.querySelectorAll(`input[type="radio"][name="${e}"]`)
  }
  if (typeof window != 'undefined' && void 0 !== window.CSS && typeof window.CSS.escape == 'function') {
    r = i(window.CSS.escape(e.name))
  }
  else {
    try {
      r = i(e.name)
    }
    catch (e) {
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', e.message)
      return !1
    }
  }
  let s = _(r, e.form)
  return !s || s === e
}
let E = function (e) {
  return x(e) && e.type === 'radio'
}
let A = function (e) {
  return E(e) && !S(e)
}
let C = function (e) {
  let r
  let n
  let i
  let s
  let o
  let a
  let d
  let p = e && h(e)
  let g = p?.host
  let m = !1
  if (p && p !== e) {
    for (m = !!((n = g) !== null && void 0 !== n && (i = n.ownerDocument) !== null && void 0 !== i && i.contains(g) || e != null && (s = e.ownerDocument) !== null && void 0 !== s && s.contains(e)); !m && g;) m = !!((a = g = (p = h(g))?.host) !== null && void 0 !== a && (d = a.ownerDocument) !== null && void 0 !== d && d.contains(g))
  }
  return m
}
let T = function (e) {
  let r = e.getBoundingClientRect()
  let n = r.width
  let i = r.height
  return n === 0 && i === 0
}
let I = function (e, r) {
  let n = r.displayCheck
  let i = r.getShadowRoot
  if (getComputedStyle(e).visibility === 'hidden')
    return !0
  let s = a.call(e, 'details>summary:first-of-type') ? e.parentElement : e
  if (a.call(s, 'details:not([open]) *'))
    return !0
  if (n && n !== 'full' && n !== 'legacy-full') {
    if (n === 'non-zero-area')
      return T(e)
  }
  else {
    if (typeof i == 'function') {
      for (var o = e; e;) {
        let d = e.parentElement
        let p = h(e)
        if (d && !d.shadowRoot && !0 === i(d))
          return T(e)
        e = e.assignedSlot ? e.assignedSlot : d || p === e.ownerDocument ? d : p.host
      }
      e = o
    }
    if (C(e))
      return !e.getClientRects().length
    if (n !== 'legacy-full')
      return !0
  }
  return !1
}
let P = function (e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) {
    for (let r = e.parentElement; r;) {
      if (r.tagName === 'FIELDSET' && r.disabled) {
        for (let n = 0; n < r.children.length; n++) {
          let i = r.children.item(n)
          if (i.tagName === 'LEGEND')
            return !!a.call(r, 'fieldset[disabled] *') || !i.contains(e)
        }
        return !0
      }
      r = r.parentElement
    }
  }
  return !1
}
let R = function (e, r) {
  return !(r.disabled || d(r) || w(r) || I(r, e) || k(r) || P(r))
}
let M = function (e, r) {
  return !(A(r) || y(r) < 0) && !!R(e, r)
}
let D = function (e) {
  let r = parseInt(e.getAttribute('tabindex'), 10)
  return !!isNaN(r) || r >= 0
}
let N = function e(r) {
  let n = []
  let i = []
  r.forEach((r, s) => {
    let o = !!r.scopeParent
    let a = o ? r.scopeParent : r
    let h = b(a, o)
    let d = o ? e(r.candidates) : a
    h === 0
      ? o ? n.push.apply(n, d) : n.push(a)
      : i.push({
          documentOrder: s,
          tabIndex: h,
          item: r,
          isScope: o,
          content: d,
        })
  })
  return i.sort(O).reduce((e, r) => {
    r.isScope ? e.push.apply(e, r.content) : e.push(r.content)
    return e
  }, []).concat(n)
}
let tabbable = function (e, r) {
  let n
  return N(n = (r = r || {}).getShadowRoot
    ? m([e], r.includeContainer, {
        filter: M.bind(null, r),
        flatten: !1,
        getShadowRoot: r.getShadowRoot,
        shadowRootFilter: D,
      })
    : g(e, r.includeContainer, M.bind(null, r)))
}
let isTabbable = function (e, r) {
  if (r = r || {}, !e)
    throw new Error('No node provided')
  return !1 !== a.call(e, s) && M(r, e)
}
let j = i.concat('iframe').join(',')
let isFocusable = function (e, r) {
  if (r = r || {}, !e)
    throw new Error('No node provided')
  return !1 !== a.call(e, j) && R(r, e)
}
export const AO = isTabbable
export const Kr = tabbable
export const tp = isFocusable
