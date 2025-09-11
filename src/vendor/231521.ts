import { $getNearestNodeOfType, addClassNamesToElement, mergeRegister, removeClassNamesFromElement } from '@lexical/utils'
import { $applyNodeReplacement, $createParagraphNode, $createTextNode, $getSelection, $isElementNode, $isLeafNode, $isParagraphNode, $isRangeSelection, $isRootOrShadowRoot, COMMAND_PRIORITY_LOW, createCommand, ElementNode, INSERT_PARAGRAPH_COMMAND, isHTMLElement } from 'lexical'

let A = (function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.$$default : e
}((e) => {
  let t = new URLSearchParams()
  t.append('code', e)
  for (let e = 1; e < $$arguments.length; e++) t.append('v', $$arguments[e])
  throw new Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)
}))
export function $getListDepth(e) {
  let t = 1
  let n = e.getParent()
  for (; n != null;) {
    if ($isListItemNode(n)) {
      let e = n.getParent()
      if ($isListNode(e)) {
        t++
        n = e.getParent()
        continue
      }
      A(40)
    }
    break
  }
  return t
}
function s(e) {
  let t = e.getParent()
  $isListNode(t) || A(40)
  let n = t
  for (; n !== null;) $isListNode(n = n.getParent()) && (t = n)
  return t
}
function a(e) {
  return $isListItemNode(e) && $isListNode(e.getFirstChild())
}
function l(e) {
  return $createListItemNode().append(e)
}
function u(e, t) {
  return $isListItemNode(e) && (t.length === 0 || t.length === 1 && e.is(t[0]) && e.getChildrenSize() === 0)
}
function g(e, t) {
  e.update(() => {
    let e = $getSelection()
    if (e !== null) {
      let n = e.getNodes()
      if ($isRangeSelection(e)) {
        let r = e.getStartEndPoints()
        r === null && A(143)
        let [o] = r
        let s = o.getNode()
        let a = s.getParent()
        if (u(s, n)) {
          let e = $createListNode(t)
          if ($isRootOrShadowRoot(a)) {
            s.replace(e)
            let t = $createListItemNode()
            $isElementNode(s) && (t.setFormat(s.getFormatType()), t.setIndent(s.getIndent()))
            e.append(t)
          }
          else if ($isListItemNode(s)) {
            let t = s.getParentOrThrow()
            c(e, t.getChildren())
            t.replace(e)
          }
          return
        }
      }
      let r = new Set()
      for (let e = 0; e < n.length; e++) {
        let A = n[e]
        if (!$isElementNode(A) || !A.isEmpty() || $isListItemNode(A) || r.has(A.getKey())) {
          if ($isLeafNode(A)) {
            let e = A.getParent()
            for (; e != null;) {
              let n = e.getKey()
              if ($isListNode(e)) {
                if (!r.has(n)) {
                  let i = $createListNode(t)
                  c(i, e.getChildren())
                  e.replace(i)
                  r.add(n)
                }
                break
              }
              {
                let A = e.getParent()
                if ($isRootOrShadowRoot(A) && !r.has(n)) {
                  r.add(n)
                  f(e, t)
                  break
                }
                e = A
              }
            }
          }
        }
        else {
          f(A, t)
        }
      }
    }
  })
}
function c(e, t) {
  e.splice(e.getChildrenSize(), 0, t)
}
function f(e, t) {
  if ($isListNode(e))
    return e
  let n = e.getPreviousSibling()
  let r = e.getNextSibling()
  let i = $createListItemNode()
  if (i.setFormat(e.getFormatType()), i.setIndent(e.getIndent()), c(i, e.getChildren()), $isListNode(n) && t === n.getListType()) {
    n.append(i)
    e.remove()
    $isListNode(r) && t === r.getListType() && (c(n, r.getChildren()), r.remove())
    return n
  }
  if ($isListNode(r) && t === r.getListType()) {
    r.getFirstChildOrThrow().insertBefore(i)
    e.remove()
    return r
  }
  {
    let n = $createListNode(t)
    n.append(i)
    e.replace(n)
    return n
  }
}
function d(e, t) {
  let n = e.getLastChild()
  let r = t.getFirstChild()
  n && r && a(n) && a(r) && (d(n.getFirstChild(), r.getFirstChild()), r.remove())
  let i = t.getChildren()
  i.length > 0 && e.append(...i)
  t.remove()
}
function h(...e) {
  let t = []
  for (let n of e) {
    if (n && typeof n == 'string') {
      for (let [e] of n.matchAll(/\S+/g)) t.push(e)
    }
  }
  return t
}
export class ListItemNode extends ElementNode {
  static getType() {
    return 'listitem'
  }

  static clone(e) {
    return new ListItemNode(e.__value, e.__checked, e.__key)
  }

  constructor(e, t, n) {
    super(n)
    this.__value = void 0 === e ? 1 : e
    this.__checked = t
  }

  createDOM(e) {
    let t = document.createElement('li')
    let n = this.getParent()
    $isListNode(n) && n.getListType() === 'check' && I(t, this, null)
    t.value = this.__value
    $setListItemThemeClassNames(t, e.theme, this)
    return t
  }

  updateDOM(e, t, n) {
    let r = this.getParent()
    $isListNode(r) && r.getListType() === 'check' && I(t, this, e)
    t.value = this.__value
    $setListItemThemeClassNames(t, n.theme, this)
    return !1
  }

  static transform() {
    return (e) => {
      if ($isListItemNode(e) || A(144), e.__checked == null)
        return
      let t = e.getParent()
      $isListNode(t) && t.getListType() !== 'check' && e.getChecked() != null && e.setChecked(void 0)
    }
  }

  static importDOM() {
    return {
      li: () => ({
        conversion: E,
        priority: 0,
      }),
    }
  }

  static importJSON(e) {
    let t = $createListItemNode()
    t.setChecked(e.checked)
    t.setValue(e.value)
    t.setFormat(e.format)
    t.setDirection(e.direction)
    return t
  }

  exportDOM(e) {
    let t = this.createDOM(e._config)
    t.style.textAlign = this.getFormatType()
    return {
      element: t,
    }
  }

  exportJSON() {
    return {
      ...super.exportJSON(),
      checked: this.getChecked(),
      type: 'listitem',
      value: this.getValue(),
      version: 1,
    }
  }

  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t]
      if ($isElementNode(n) && this.canMergeWith(n)) {
        let e = n.getChildren()
        this.append(...e)
        n.remove()
      }
      else {
        super.append(n)
      }
    }
    return this
  }

  replace(e, t) {
    if ($isListItemNode(e))
      return super.replace(e)
    this.setIndent(0)
    let n = this.getParentOrThrow()
    if (!$isListNode(n))
      return e
    if (n.__first === this.getKey()) {
      n.insertBefore(e)
    }
    else if (n.__last === this.getKey()) {
      n.insertAfter(e)
    }
    else {
      let t = $createListNode(n.getListType())
      let r = this.getNextSibling()
      for (; r;) {
        let e = r
        r = r.getNextSibling()
        t.append(e)
      }
      n.insertAfter(e)
      e.insertAfter(t)
    }
    t && ($isElementNode(e) || A(139), this.getChildren().forEach((t) => {
      e.append(t)
    }))
    this.remove()
    n.getChildrenSize() === 0 && n.remove()
    return e
  }

  insertAfter(e, t = !0) {
    let n = this.getParentOrThrow()
    if ($isListNode(n) || A(39), $isListItemNode(e))
      return super.insertAfter(e, t)
    let r = this.getNextSiblings()
    if (n.insertAfter(e, t), r.length !== 0) {
      let i = $createListNode(n.getListType())
      r.forEach(e => i.append(e))
      e.insertAfter(i, t)
    }
    return e
  }

  remove(e) {
    let t = this.getPreviousSibling()
    let n = this.getNextSibling()
    super.remove(e)
    t && n && a(t) && a(n) && (d(t.getFirstChild(), n.getFirstChild()), n.remove())
  }

  insertNewAfter(e, t = !0) {
    let n = $createListItemNode(this.__checked == null && void 0)
    this.insertAfter(n, t)
    return n
  }

  collapseAtStart(e) {
    let t = $createParagraphNode()
    this.getChildren().forEach(e => t.append(e))
    let n = this.getParentOrThrow()
    let r = n.getParentOrThrow()
    let A = $isListItemNode(r)
    if (n.getChildrenSize() === 1) {
      if (A) {
        n.remove()
        r.select()
      }
      else {
        n.insertBefore(t)
        n.remove()
        let r = e.anchor
        let i = e.focus
        let A = t.getKey()
        r.type === 'element' && r.getNode().is(this) && r.set(A, r.offset, 'element')
        i.type === 'element' && i.getNode().is(this) && i.set(A, i.offset, 'element')
      }
    }
    else {
      n.insertBefore(t)
      this.remove()
    }
    return !0
  }

  getValue() {
    return this.getLatest().__value
  }

  setValue(e) {
    this.getWritable().__value = e
  }

  getChecked() {
    let e
    let t = this.getLatest()
    let n = this.getParent()
    $isListNode(n) && (e = n.getListType())
    return e === 'check' ? !!t.__checked : void 0
  }

  setChecked(e) {
    this.getWritable().__checked = e
  }

  toggleChecked() {
    this.setChecked(!this.__checked)
  }

  getIndent() {
    let e = this.getParent()
    if (e === null)
      return this.getLatest().__indent
    let t = e.getParentOrThrow()
    let n = 0
    for (; $isListItemNode(t);) {
      t = t.getParentOrThrow().getParentOrThrow()
      n++
    }
    return n
  }

  setIndent(e) {
    typeof e != 'number' && A(117);
    (e = Math.floor(e)) >= 0 || A(199)
    let t = this.getIndent()
    for (; t !== e;) {
      t < e
        ? ((function (e) {
            let t = new Set()
            if (a(e) || t.has(e.getKey()))
              return
            let n = e.getParent()
            let r = e.getNextSibling()
            let i = e.getPreviousSibling()
            if (a(r) && a(i)) {
              let n = i.getFirstChild()
              if ($isListNode(n)) {
                n.append(e)
                let i = r.getFirstChild()
                $isListNode(i) && (c(n, i.getChildren()), r.remove(), t.add(r.getKey()))
              }
            }
            else if (a(r)) {
              let t = r.getFirstChild()
              if ($isListNode(t)) {
                let n = t.getFirstChild()
                n !== null && n.insertBefore(e)
              }
            }
            else if (a(i)) {
              let t = i.getFirstChild()
              $isListNode(t) && t.append(e)
            }
            else if ($isListNode(n)) {
              let t = $createListItemNode()
              let A = $createListNode(n.getListType())
              t.append(A)
              A.append(e)
              i ? i.insertAfter(t) : r ? r.insertBefore(t) : n.append(t)
            }
          }(this)), t++)
        : ((function (e) {
            if (a(e))
              return
            let t = e.getParent()
            let n = t ? t.getParent() : void 0
            if ($isListNode(n ? n.getParent() : void 0) && $isListItemNode(n) && $isListNode(t)) {
              let r = t ? t.getFirstChild() : void 0
              let i = t ? t.getLastChild() : void 0
              if (e.is(r)) {
                n.insertBefore(e)
                t.isEmpty() && n.remove()
              }
              else if (e.is(i)) {
                n.insertAfter(e)
                t.isEmpty() && n.remove()
              }
              else {
                let r = t.getListType()
                let i = $createListItemNode()
                let A = $createListNode(r)
                i.append(A)
                e.getPreviousSiblings().forEach(e => A.append(e))
                let o = $createListItemNode()
                let s = $createListNode(r)
                o.append(s)
                c(s, e.getNextSiblings())
                n.insertBefore(i)
                n.insertAfter(o)
                n.replace(e)
              }
            }
          }(this)), t--)
    }
    return this
  }

  canInsertAfter(e) {
    return $isListItemNode(e)
  }

  canReplaceWith(e) {
    return $isListItemNode(e)
  }

  canMergeWith(e) {
    return $isParagraphNode(e) || $isListItemNode(e)
  }

  extractWithChild(e, t) {
    if (!$isRangeSelection(t))
      return !1
    let n = t.anchor.getNode()
    let r = t.focus.getNode()
    return this.isParentOf(n) && this.isParentOf(r) && this.getTextContent().length === t.getTextContent().length
  }

  isParentRequired() {
    return !0
  }

  createParentElementNode() {
    return $createListNode('bullet')
  }

  canMergeWhenEmpty() {
    return !0
  }
}
function $setListItemThemeClassNames(e, t, n) {
  let i
  let A = []
  let o = []
  let s = t.list
  let a = s ? s.listitem : void 0
  if (s && s.nested && (i = s.nested.listitem), void 0 !== a && A.push(...h(a)), s) {
    let e = n.getParent()
    let t = $isListNode(e) && e.getListType() === 'check'
    let r = n.getChecked()
    t && !r || o.push(s.listitemUnchecked)
    t && r || o.push(s.listitemChecked)
    t && A.push(r ? s.listitemChecked : s.listitemUnchecked)
  }
  if (void 0 !== i) {
    let e = h(i)
    n.getChildren().some(e => $isListNode(e)) ? A.push(...e) : o.push(...e)
  }
  o.length > 0 && removeClassNamesFromElement(e, ...o)
  A.length > 0 && addClassNamesToElement(e, ...A)
}
function I(e, t, n, r) {
  $isListNode(t.getFirstChild()) ? (e.removeAttribute('role'), e.removeAttribute('tabIndex'), e.removeAttribute('aria-checked')) : (e.setAttribute('role', 'checkbox'), e.setAttribute('tabIndex', '-1'), n && t.__checked === n.__checked || e.setAttribute('aria-checked', t.getChecked() ? 'true' : 'false'))
}
function E(e) {
  if (e.classList.contains('task-list-item')) {
    for (let t of e.children) {
      if (t.tagName === 'INPUT') {
        return t.getAttribute('type') !== 'checkbox'
          ? {
              node: null,
            }
          : {
              node: $createListItemNode(t.hasAttribute('checked')),
            }
      }
    }
  }
  let t = e.getAttribute('aria-checked')
  return {
    node: $createListItemNode(t === 'true' || t !== 'false' && void 0),
  }
}
export function $createListItemNode(e) {
  return $applyNodeReplacement(new ListItemNode(void 0, e))
}
export function $isListItemNode(e) {
  return e instanceof ListItemNode
}
export class ListNode extends ElementNode {
  static getType() {
    return 'list'
  }

  static clone(e) {
    return new ListNode(e.__listType || w[e.__tag], e.__start, e.__key)
  }

  constructor(e, t, n) {
    super(n)
    let r = w[e] || e
    this.__listType = r
    this.__tag = r === 'number' ? 'ol' : 'ul'
    this.__start = t
  }

  getTag() {
    return this.__tag
  }

  setListType(e) {
    let t = this.getWritable()
    t.__listType = e
    t.__tag = e === 'number' ? 'ol' : 'ul'
  }

  getListType() {
    return this.__listType
  }

  getStart() {
    return this.__start
  }

  createDOM(e, t) {
    let n = this.__tag
    let r = document.createElement(n)
    this.__start !== 1 && r.setAttribute('start', String(this.__start))
    r.__lexicalListType = this.__listType
    $setListThemeClassNames(r, e.theme, this)
    return r
  }

  updateDOM(e, t, n) {
    return e.__tag !== this.__tag || ($setListThemeClassNames(t, n.theme, this), !1)
  }

  static transform() {
    return (e) => {
      $isListNode(e) || A(163);
      (function (e) {
        let t = e.getNextSibling()
        $isListNode(t) && e.getListType() === t.getListType() && d(e, t)
      })(e);
      (function (e) {
        let t = e.getListType() !== 'check'
        let n = e.getStart()
        for (let r of e.getChildren()) $isListItemNode(r) && (r.getValue() !== n && r.setValue(n), t && r.getLatest().__checked != null && r.setChecked(void 0), $isListNode(r.getFirstChild()) || n++)
      })(e)
    }
  }

  static importDOM() {
    return {
      ol: () => ({
        conversion: D,
        priority: 0,
      }),
      ul: () => ({
        conversion: D,
        priority: 0,
      }),
    }
  }

  static importJSON(e) {
    let t = $createListNode(e.listType, e.start)
    t.setFormat(e.format)
    t.setIndent(e.indent)
    t.setDirection(e.direction)
    return t
  }

  exportDOM(e) {
    let {
      element,
    } = super.exportDOM(e)
    element && isHTMLElement(element) && (this.__start !== 1 && element.setAttribute('start', String(this.__start)), this.__listType === 'check' && element.setAttribute('__lexicalListType', 'check'))
    return {
      element,
    }
  }

  exportJSON() {
    return {
      ...super.exportJSON(),
      listType: this.getListType(),
      start: this.getStart(),
      tag: this.getTag(),
      type: 'list',
      version: 1,
    }
  }

  canBeEmpty() {
    return !1
  }

  canIndent() {
    return !1
  }

  append(...e) {
    for (let t = 0; t < e.length; t++) {
      let n = e[t]
      if ($isListItemNode(n)) {
        super.append(n)
      }
      else {
        let e = $createListItemNode()
        if ($isListNode(n)) {
          e.append(n)
        }
        else if ($isElementNode(n)) {
          let t = $createTextNode(n.getTextContent())
          e.append(t)
        }
        else {
          e.append(n)
        }
        super.append(e)
      }
    }
    return this
  }

  extractWithChild(e) {
    return $isListItemNode(e)
  }
}
function $setListThemeClassNames(e, t, n) {
  let i = []
  let A = []
  let s = t.list
  if (void 0 !== s) {
    let e
    let t = s[`${n.__tag}Depth`] || []
    let r = $getListDepth(n) - 1
    let a = r % t.length
    let l = t[a]
    let u = s[n.__tag]
    let g = s.nested
    let c = s.checklist
    if (void 0 !== g && g.list && (e = g.list), void 0 !== u && i.push(u), void 0 !== c && n.__listType === 'check' && i.push(c), void 0 !== l) {
      i.push(...h(l))
      for (let e = 0; e < t.length; e++) e !== a && A.push(n.__tag + e)
    }
    if (void 0 !== e) {
      let t = h(e)
      r > 1 ? i.push(...t) : A.push(...t)
    }
  }
  A.length > 0 && removeClassNamesFromElement(e, ...A)
  i.length > 0 && addClassNamesToElement(e, ...i)
}
function Q(e) {
  let t = []
  for (let n = 0; n < e.length; n++) {
    let r = e[n]
    if ($isListItemNode(r)) {
      t.push(r)
      let e = r.getChildren()
      e.length > 1 && e.forEach((e) => {
        $isListNode(e) && t.push(l(e))
      })
    }
    else {
      t.push(l(r))
    }
  }
  return t
}
function D(e) {
  let t = e.nodeName.toLowerCase()
  let n = null
  t === 'ol'
    ? n = $createListNode('number', e.start)
    : t === 'ul' && (n = !(function (e) {
      if (e.getAttribute('__lexicallisttype') === 'check' || e.classList.contains('contains-task-list'))
        return !0
      for (let t of e.childNodes) {
        if (isHTMLElement(t) && t.hasAttribute('aria-checked'))
          return !0
      }
      return !1
    }(e))
      ? $createListNode('bullet')
      : $createListNode('check'))
  return {
    after: Q,
    node: n,
  }
}
let w = {
  ol: 'number',
  ul: 'bullet',
}
export function $createListNode(e, t = 1) {
  return $applyNodeReplacement(new ListNode(e, t))
}
export function $isListNode(e) {
  return e instanceof ListNode
}
let INSERT_UNORDERED_LIST_COMMAND = createCommand('INSERT_UNORDERED_LIST_COMMAND')
let INSERT_ORDERED_LIST_COMMAND = createCommand('INSERT_ORDERED_LIST_COMMAND')
createCommand('INSERT_CHECK_LIST_COMMAND')
let S = createCommand('REMOVE_LIST_COMMAND')
export function registerList(e) {
  return mergeRegister(e.registerCommand(INSERT_ORDERED_LIST_COMMAND, () => (g(e, 'number'), !0), COMMAND_PRIORITY_LOW), e.registerCommand(INSERT_UNORDERED_LIST_COMMAND, () => (g(e, 'bullet'), !0), COMMAND_PRIORITY_LOW), e.registerCommand(S, () => ((function (e) {
    e.update(() => {
      let e = $getSelection()
      if ($isRangeSelection(e)) {
        let t = new Set()
        let n = e.getNodes()
        let A = e.anchor.getNode()
        if (u(A, n)) {
          t.add(s(A))
        }
        else {
          for (let e = 0; e < n.length; e++) {
            let A = n[e]
            if ($isLeafNode(A)) {
              let e = $getNearestNodeOfType(A, ListItemNode)
              e != null && t.add(s(e))
            }
          }
        }
        for (let n of t) {
          let t = n
          for (let r of (function e(t) {
            let n = []
            let r = t.getChildren().filter($isListItemNode)
            for (let t = 0; t < r.length; t++) {
              let i = r[t]
              let A = i.getFirstChild()
              $isListNode(A) ? n = n.concat(e(A)) : n.push(i)
            }
            return n
          }(n))) {
            let n = $createParagraphNode()
            c(n, r.getChildren())
            t.insertAfter(n)
            t = n
            r.__key === e.anchor.key && e.anchor.set(n.getKey(), 0, 'element')
            r.__key === e.focus.key && e.focus.set(n.getKey(), 0, 'element')
            r.remove()
          }
          n.remove()
        }
      }
    })
  }(e)), !0), COMMAND_PRIORITY_LOW), e.registerCommand(INSERT_PARAGRAPH_COMMAND, () => !!(function () {
    let e
    let t = $getSelection()
    if (!$isRangeSelection(t) || !t.isCollapsed())
      return !1
    let n = t.anchor.getNode()
    if (!$isListItemNode(n) || n.getChildrenSize() !== 0)
      return !1
    let r = s(n)
    let o = n.getParent()
    $isListNode(o) || A(40)
    let a = o.getParent()
    if ($isRootOrShadowRoot(a)) {
      e = $createParagraphNode()
      r.insertAfter(e)
    }
    else {
      if (!$isListItemNode(a))
        return !1
      e = $createListItemNode()
      a.insertAfter(e)
    }
    e.select()
    let l = n.getNextSiblings()
    if (l.length > 0) {
      let t = $createListNode(o.getListType())
      if ($isParagraphNode(e)) {
        e.insertAfter(t)
      }
      else {
        let n = $createListItemNode()
        n.append(t)
        e.insertAfter(n)
      }
      l.forEach((e) => {
        e.remove()
        t.append(e)
      })
    }
    (function (e) {
      let t = e
      for (; t.getNextSibling() == null && t.getPreviousSibling() == null;) {
        let e = t.getParent()
        if (e == null || !$isListItemNode(t) && !$isListNode(t))
          break
        t = e
      }
      t.remove()
    })(n)
    return !0
  }()), COMMAND_PRIORITY_LOW))
}
export const DE = $createListNode
export const HY = $isListNode
export const Mz = $isListItemNode
export const YW = ListItemNode
export const cz = registerList
export const g2 = $getListDepth
export const i = $createListItemNode
export const q7 = INSERT_UNORDERED_LIST_COMMAND
export const v5 = ListNode
export const x = INSERT_ORDERED_LIST_COMMAND
