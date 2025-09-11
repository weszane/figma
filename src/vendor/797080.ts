import { $wrapNodes } from "../vendor/850527";
import { ArtificialNode__DO_NOT_USE, $createLineBreakNode, $getRoot, $isElementNode, $copyNode, $isTextNode, isHTMLElement, isDocumentFragment, $isRootOrShadowRoot, $isBlockElementNode, isBlockDomNode, $createParagraphNode, isInlineDomNode } from "../vendor/408361";
export function $generateNodesFromDOM(e, r) {
  let n = r.body ? r.body.childNodes : [];
  let i = [];
  let o = [];
  for (let r = 0; r < n.length; r++) {
    let s = n[r];
    if (!$$d.has(s.nodeName)) {
      let r = p(s, e, o, !1);
      null !== r && (i = i.concat(r));
    }
  }
  (function (e) {
    for (let r of e) r.getNextSibling() instanceof ArtificialNode__DO_NOT_USE && r.insertAfter($createLineBreakNode());
    for (let r of e) {
      for (let e of r.getChildren()) r.insertBefore(e);
      r.remove();
    }
  })(o);
  return i;
}
export function $generateHtmlFromNodes(e, r) {
  if ("undefined" == typeof document || "undefined" == typeof window && void 0 === global.window) throw Error("To use $generateHtmlFromNodes in headless mode please initialize a headless browser implementation such as JSDom before calling this function.");
  let n = document.createElement("div");
  let i = $getRoot().getChildren();
  for (let s = 0; s < i.length; s++) h(e, i[s], n, r);
  return n.innerHTML;
}
function h(e, r, n, o = null) {
  let a = null === o || r.isSelected(o);
  let d = $isElementNode(r) && r.excludeFromCopy("html");
  let p = r;
  if (null !== o) {
    let e = $copyNode(r);
    p = e = $isTextNode(e) && null !== o ? $wrapNodes(o, e) : e;
  }
  let g = $isElementNode(p) ? p.getChildren() : [];
  let m = e._nodes.get(p.getType());
  let {
    element,
    after
  } = m && void 0 !== m.exportDOM ? m.exportDOM(e, p) : p.exportDOM(e);
  if (!element) return !1;
  let b = document.createDocumentFragment();
  for (let n = 0; n < g.length; n++) {
    let i = g[n];
    let d = h(e, i, b, o);
    !a && $isElementNode(r) && d && r.extractWithChild(i, o, "html") && (a = !0);
  }
  if (a && !d) {
    if ((isHTMLElement(element) || isDocumentFragment(element)) && element.append(b), n.append(element), after) {
      let e = after.call(p, element);
      e && (isDocumentFragment(element) ? element.replaceChildren(e) : element.replaceWith(e));
    }
  } else n.append(b);
  return a;
}
let $$d = new Set(["STYLE", "SCRIPT"]);
function p(e, r, n, i, o = new Map(), a) {
  let h = [];
  if ($$d.has(e.nodeName)) return h;
  let m = null;
  let v = function (e, r) {
    let {
      nodeName
    } = e;
    let i = r._htmlConversions.get(nodeName.toLowerCase());
    let s = null;
    if (void 0 !== i) for (let r of i) {
      let n = r(e);
      null !== n && (null === s || (s.priority || 0) < (n.priority || 0)) && (s = n);
    }
    return null !== s ? s.conversion : null;
  }(e, r);
  let y = v ? v(e) : null;
  let b = null;
  if (null !== y) {
    b = y.after;
    let r = y.node;
    if (null !== (m = Array.isArray(r) ? r[r.length - 1] : r)) {
      for (let [, e] of o) if (!(m = e(m, a))) break;
      m && h.push(...(Array.isArray(r) ? r : [m]));
    }
    null != y.forChild && o.set(e.nodeName, y.forChild);
  }
  let O = e.childNodes;
  let x = [];
  let w = (null == m || !$isRootOrShadowRoot(m)) && (null != m && $isBlockElementNode(m) || i);
  for (let e = 0; e < O.length; e++) x.push(...p(O[e], r, n, w, new Map(o), m));
  null != b && (x = b(x));
  isBlockDomNode(e) && (x = $$g(e, x, w ? () => {
    let e = new ArtificialNode__DO_NOT_USE();
    n.push(e);
    return e;
  } : $createParagraphNode));
  null == m ? x.length > 0 ? h = h.concat(x) : isBlockDomNode(e) && function (e) {
    return null != e.nextSibling && null != e.previousSibling && isInlineDomNode(e.nextSibling) && isInlineDomNode(e.previousSibling);
  }(e) && (h = h.concat($createLineBreakNode())) : $isElementNode(m) && m.append(...x);
  return h;
}
function $$g(e, r, n) {
  let i = e.style.textAlign;
  let o = [];
  let a = [];
  for (let e = 0; e < r.length; e++) {
    let h = r[e];
    if ($isBlockElementNode(h)) {
      i && !h.getFormat() && h.setFormat(i);
      o.push(h);
    } else if (a.push(h), e === r.length - 1 || e < r.length - 1 && $isBlockElementNode(r[e + 1])) {
      let e = n();
      e.setFormat(i);
      e.append(...a);
      o.push(e);
      a = [];
    }
  }
  return o;
}
export const d = $generateNodesFromDOM;
export const g = $generateHtmlFromNodes;