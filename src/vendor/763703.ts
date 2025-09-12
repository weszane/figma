let i = {
  inert: ':not([inert]):not([inert] *)',
  negTabIndex: ':not([tabindex^="-"])',
  disabled: ':not(:disabled)',
}
let s = [`a[href]${i.inert}${i.negTabIndex}`, `area[href]${i.inert}${i.negTabIndex}`, `input:not([type="hidden"]):not([type="radio"])${i.inert}${i.negTabIndex}${i.disabled}`, `input[type="radio"]${i.inert}${i.negTabIndex}${i.disabled}`, `select${i.inert}${i.negTabIndex}${i.disabled}`, `textarea${i.inert}${i.negTabIndex}${i.disabled}`, `button${i.inert}${i.negTabIndex}${i.disabled}`, `details${i.inert} > summary:first-of-type${i.negTabIndex}`, `iframe${i.inert}${i.negTabIndex}`, `audio[controls]${i.inert}${i.negTabIndex}`, `video[controls]${i.inert}${i.negTabIndex}`, `[contenteditable]${i.inert}${i.negTabIndex}`, `[tabindex]${i.inert}${i.negTabIndex}`]
function o(e) {
  (e.querySelector('[autofocus]') || e).focus()
}
function a(e) {
  let r = h(e, !0)
  let n = r ? h(e, !1) || r : null
  return [r, n]
}
function h(e, r) {
  if (r && m(e))
    return e
  if (v(e)) {
    if (e.shadowRoot) {
      let n = d(e.shadowRoot, r)
      for (; n;) {
        let e = h(n, r)
        if (e)
          return e
        n = p(n, r)
      }
    }
    else if (e.localName === 'slot') {
      let n = e.assignedElements({
        flatten: !0,
      })
      for (let e of (r || n.reverse(), n)) {
        let n = h(e, r)
        if (n)
          return n
      }
    }
    else {
      let n = d(e, r)
      for (; n;) {
        let e = h(n, r)
        if (e)
          return e
        n = p(n, r)
      }
    }
  }
  return !r && m(e) ? e : null
}
function d(e, r) {
  return r ? e.firstElementChild : e.lastElementChild
}
function p(e, r) {
  return r ? e.nextElementSibling : e.previousElementSibling
}
let g = e => !!e.matches('details:not([open]) *') && !e.matches('details>summary:first-of-type') || !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
let m = e => !e.shadowRoot?.delegatesFocus && e.matches(s.join(',')) && !g(e)
function v(e) {
  return (!e.shadowRoot || e.getAttribute('tabindex') !== '-1') && !e.matches(':disabled,[hidden],[inert]')
}
function y(e = document) {
  let r = e.activeElement
  return r ? r.shadowRoot ? y(r.shadowRoot) || document.activeElement : r : null
}
function b(e, r) {
  let [n, i] = a(e)
  if (!n)
    return r.preventDefault()
  let s = y()
  r.shiftKey && s === n ? (i.focus(), r.preventDefault()) : r.shiftKey || s !== i || (n.focus(), r.preventDefault())
}
function O(e, r) {
  function n(r) {
    return r && r !== document && r !== window ? (r.assignedSlot && (r = r.assignedSlot), r.closest(e) || n(r.getRootNode().host)) : null
  }
  return n(r)
}
let x = 'data-a11y-dialog'
export class A11yDialog {
  $el
  id
  previouslyFocused
  shown
  constructor(e) {
    this.$el = e
    this.id = this.$el.getAttribute(x) || this.$el.id
    this.previouslyFocused = null
    this.shown = !1
    this.maintainFocus = this.maintainFocus.bind(this)
    this.bindKeypress = this.bindKeypress.bind(this)
    this.handleTriggerClicks = this.handleTriggerClicks.bind(this)
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
    this.$el.setAttribute('aria-hidden', 'true')
    this.$el.setAttribute('aria-modal', 'true')
    this.$el.setAttribute('tabindex', '-1')
    this.$el.hasAttribute('role') || this.$el.setAttribute('role', 'dialog')
    document.addEventListener('click', this.handleTriggerClicks, !0)
  }

  destroy() {
    this.fire('destroy').defaultPrevented || (this.hide(), document.removeEventListener('click', this.handleTriggerClicks, !0), this.$el.replaceWith(this.$el.cloneNode(!0)))
    return this
  }

  show(e) {
    this.shown || this.fire('show', e).defaultPrevented || (this.shown = !0, this.$el.removeAttribute('aria-hidden'), this.previouslyFocused = y(), this.previouslyFocused?.tagName === 'BODY' && e?.target && (this.previouslyFocused = e.target), e?.type === 'focus' ? this.maintainFocus(e) : o(this.$el), document.body.addEventListener('focus', this.maintainFocus, !0), this.$el.addEventListener('keydown', this.bindKeypress, !0))
    return this
  }

  hide(e) {
    !this.shown || this.fire('hide', e).defaultPrevented || (this.shown = !1, this.$el.setAttribute('aria-hidden', 'true'), this.previouslyFocused?.focus?.(), document.body.removeEventListener('focus', this.maintainFocus, !0), this.$el.removeEventListener('keydown', this.bindKeypress, !0))
    return this
  }

  on(e, r, n) {
    this.$el.addEventListener(e, r, n)
    return this
  }

  off(e, r, n) {
    this.$el.removeEventListener(e, r, n)
    return this
  }

  fire(e, r) {
    let n = new CustomEvent(e, {
      detail: r,
      cancelable: !0,
    })
    this.$el.dispatchEvent(n)
    return n
  }

  handleTriggerClicks(e) {
    let r = e.composedPath()[0]
    let n = O(`[${x}-show="${this.id}"]`, r)
    let i = O(`[${x}-hide="${this.id}"]`, r)
    let s = O(`[${x}-hide]`, r) && O('[aria-modal="true"]', r) === this.$el
    n && this.show(e);
    (i || s) && this.hide(e)
  }

  bindKeypress(e) {
    if (O('[aria-modal="true"]', y()) !== this.$el)
      return
    let r = !1
    try {
      r = !!this.$el.querySelector('[popover]:not([popover="manual"]):popover-open')
    }
    catch {}
    e.key !== 'Escape' || this.$el.getAttribute('role') === 'alertdialog' || r || (e.preventDefault(), this.hide(e))
    e.key === 'Tab' && b(this.$el, e)
  }

  maintainFocus(e) {
    e.target.closest(`[aria-modal="true"], [${x}-ignore-focus-trap]`) || o(this.$el)
  }
}
function k() {
  for (let e of document.querySelectorAll('[data-a11y-dialog]')) new A11yDialog (e)
}
typeof document != 'undefined' && (document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', k) : k())
export const A = A11yDialog
