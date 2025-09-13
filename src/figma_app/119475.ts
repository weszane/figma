import { createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { jsx } from 'react/jsx-runtime';
import { useStableMemo } from '../905/19536';
import { isExactModifier, ModifierKeyCodes } from '../905/63728';
import { RecordableDiv } from '../905/511649';
import { logger } from '../905/651849';
import { lQ } from '../905/934246';
import { assertNotNullish, isNullish } from '../figma_app/95419';
import { throwTypeError } from '../figma_app/465776';
import { findNearest, findNext, findPrevious, popLast } from '../figma_app/656233';
import { BrowserInfo } from '../figma_app/778880';
let h = {
  preventScroll: !1,
  block: 'nearest'
};
let m = {
  supportHorizontalNavigation: !0,
  simulateClickOnEnter: !0
};
class g {
  constructor({
    id: e,
    path: t,
    column: r,
    element: n,
    defaultFocusOptions: i = h,
    setIsFauxFocused: a,
    fauxClick: s,
    onFocusThroughKeyboardNavigation: o,
    keyboardItemNavigationOptions: l = m
  }) {
    this.id = e;
    this.path = t;
    this.column = r;
    this.element = n;
    this.defaultFocusOptions = i;
    this.setIsFauxFocused = a;
    this.fauxClick = s;
    this.onFocusThroughKeyboardNavigation = o;
    this.navigationOptions = l;
  }
  addToTree(e, t) {
    this.tree = e;
    (function (e, t) {
      let r;
      let {
        path,
        column
      } = t;
      try {
        r = P(e, path, !0);
      } catch (e) {
        logger.warn('Failed to add item to KeyboardNavigationProvider tree: ', t);
        return;
      }
      let a = column ?? 0;
      let s = r.items[a]?.element;
      s && s !== t.element && logger.warn('Overwriting item in KeyboardNavigationProvider tree. Existing item: ', r.items[a], ' New item: ', t);
      r.items[a] = t;
    })(e, this);
    t && this.id && t.set(this.id, this);
  }
  removeFromTree(e) {
    this.tree && (function (e, t) {
      let r;
      let n;
      let {
        path,
        column
      } = t;
      try {
        r = (n = P(e, path)).items[column || 0] ?? null;
      } catch (e) {
        logger.warn('Item not found in KeyboardNavigationProvider tree: ', t);
        return;
      }
      if (!r) {
        logger.warn('Item not found in KeyboardNavigationProvider tree: ', t);
        return;
      }
      if (r.element !== t.element) {
        logger.warn('Item found in KeyboardNavigationProvider tree, but it does not match the expected item: ', r, t);
        return;
      }
      if (n.items[column || 0] = void 0, n.items.every(isNullish)) {
        L(e, path.slice(0, -1)).children[path[path.length - 1]] = void 0;
        for (let t = path.length - 1; t >= 1; t--) {
          let r = path.slice(0, t);
          let [n, s] = popLast(r);
          let o = L(e, n);
          if (L(e, r).children.every(isNullish)) o.children[s] = void 0;else break;
        }
        e.children.every(isNullish) && (e.children = []);
      }
    }(this.tree, this), this.tree = void 0);
    e && this.id && e.$$delete(this.id);
  }
  focus(e = this.defaultFocusOptions) {
    this.element.focus({
      preventScroll: !0
    });
    this.onFocusThroughKeyboardNavigation?.();
    e.preventScroll || this.element.scrollIntoView(e);
  }
  blur() {
    this.element.blur();
  }
  fauxFocus(e = this.defaultFocusOptions) {
    this.setIsFauxFocused(!0, this);
    e.preventScroll || this.element.scrollIntoView(e);
  }
  fauxBlur() {
    this.setIsFauxFocused(!1, this);
  }
  simulateClick() {
    this.fauxClick ? this.fauxClick() : this.element.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: !0,
      cancelable: !0
    }));
  }
  getItemAbove() {
    return this.tree && R(this.tree, this, 'up');
  }
  getItemBelow() {
    if (!this.tree) return null;
    let e = R(this.tree, this, 'down') || null;
    for (; e && e.navigationOptions.skipOnDownNavigation;) e = e.getItemBelow();
    return e;
  }
  getItemToTheLeft() {
    return this.tree && O(this.tree, this, 'left');
  }
  getItemToTheRight() {
    if (!this.tree) return null;
    let e = O(this.tree, this, 'right') || null;
    for (; e && e.navigationOptions.skipOnRightNavigation;) e = e.getItemToTheRight();
    return e;
  }
}
let f = createContext(null);
let $$E4 = forwardRef(({
  onKeyDown: e,
  allowVim: t = !1,
  disabled: r,
  overrideDown: a,
  overrideUp: s,
  overrideLeft: l,
  overrideRight: d,
  allowHorizontalNavigationWhileInputFocused: c = !1,
  useKeyNavFauxFocusSync: u,
  useFocusOnly: p,
  useDisplayContents: h,
  stopPropagationOnEventHandle: m = !1,
  ...g
}, E) => {
  let y = useRef({
    type: 'parent',
    children: []
  });
  let b = useRef(new Map());
  let T = useRef(null);
  let I = useCallback(e => {
    T.current === e && (T.current = null);
  }, []);
  let N = useCallback(e => {
    T.current = e;
  }, []);
  let C = useRef(null);
  let w = useRef(null);
  let O = useRef(lQ);
  let R = useCallback(e => {
    e === C.current && (C.current = null, O.current(), O.current = lQ);
  }, []);
  let L = useCallback((e, t) => {
    C.current && R(C.current);
    C.current = e;
    O.current = t;
  }, [R]);
  let P = useCallback(e => {
    m && e.stopPropagation();
    e.preventDefault();
  }, [m]);
  let M = useCallback(r => {
    let n = T.current;
    let i = C.current;
    let o = k(r);
    let u = !(r.metaKey || r.ctrlKey || r.altKey || r.shiftKey) && c;
    if ($$S3(r, t)) {
      if (i && !p) {
        P(r);
        let e = D(y.current, i, s);
        e ? e?.fauxFocus() : i.getItemAbove()?.fauxFocus();
      } else if (n) {
        P(r);
        let e = D(y.current, n, s);
        e ? e?.focus() : n.getItemAbove()?.focus();
      }
    } else if ($$v1(r, t)) {
      if (i && !p) {
        P(r);
        let e = D(y.current, i, a);
        e ? e?.fauxFocus() : i.getItemBelow()?.fauxFocus();
      } else if (n) {
        P(r);
        let e = D(y.current, n, a);
        e ? e?.focus() : n.getItemBelow()?.focus();
      } else {
        w.current && w.current.fauxFocus();
      }
    } else if ($$A7(o, t, u)) {
      if (i && i.navigationOptions.supportHorizontalNavigation && !p) {
        P(r);
        let e = D(y.current, i, l);
        e ? e?.fauxFocus() : i.getItemToTheLeft()?.fauxFocus();
      } else if (n) {
        P(r);
        let e = D(y.current, n, l);
        e ? e?.focus() : n.getItemToTheLeft()?.focus();
      }
    } else if ($$x5(o, t, u)) {
      if (i && i.navigationOptions.supportHorizontalNavigation && !p) {
        P(r);
        let e = D(y.current, i, d);
        e ? e?.fauxFocus() : i.getItemToTheRight()?.fauxFocus();
      } else if (n) {
        P(r);
        let e = D(y.current, n, d);
        e ? e?.focus() : n.getItemToTheRight()?.focus();
      }
    } else {
      o === 'Enter' ? i && !p && (P(r), i.navigationOptions.simulateClickOnEnter && i.simulateClick()) : o === 'Escape' && (n || i) && (P(r), n && n.blur(), i && i.fauxBlur());
    }
    e?.(r);
  }, [c, t, e, p, s, a, l, d, P]);
  let F = useMemo(() => ({
    tree: y.current,
    lookupMap: b.current,
    onFocusItem: N,
    onBlurItem: I,
    onFauxFocusItem: L,
    onFauxBlurItem: R,
    fauxBlurItem: () => C.current?.fauxBlur(),
    blurItem: () => T.current?.blur(),
    setDefaultFauxFocusedItem: e => {
      w.current || (w.current = e);
    },
    fauxFocusDefaultItem: () => {
      w.current?.fauxFocus();
    },
    useKeyNavFauxFocusSync: u
  }), [N, I, L, R, u]);
  return jsx(f.Provider, {
    value: F,
    children: jsx(RecordableDiv, {
      style: h ? {
        display: 'contents'
      } : void 0,
      onKeyDown: r ? e : M,
      forwardedRef: E,
      ...g
    })
  });
});
export function $$y0({
  path: e,
  column: t = null,
  id: r,
  defaultFocusOptions: n,
  onFocus: a,
  onBlur: s,
  onFauxFocus: o,
  onFauxBlur: c,
  onFocusThroughKeyboardNavigation: u,
  fauxClick: p,
  disabled: _,
  navigationOptions: h
}) {
  let m = useStableMemo(e);
  let E = useStableMemo(n);
  let y = useStableMemo(h);
  if (m.length === 0) throw new Error('Path must be non-empty');
  if (m.some(e => e < 0)) throw new Error('All path indices must be non-negative');
  if (t != null && t < 0) throw new Error('Column must be non-negative');
  let [b, T] = useState(void 0);
  let [I, S] = useState(!1);
  let [v, A] = useState(!1);
  let x = useRef(null);
  let {
    tree,
    lookupMap,
    onFocusItem,
    onBlurItem,
    onFauxFocusItem,
    onFauxBlurItem,
    setDefaultFauxFocusedItem,
    useKeyNavFauxFocusSync
  } = assertNotNullish(useContext(f), 'Must use `useKeyboardNavigationItem` inside `<KeyboardNavigationProvider>');
  useEffect(() => {
    if (b && !_) {
      let e = () => S(!0);
      let t = () => S(!1);
      b.addEventListener('focus', e);
      b.addEventListener('blur', t);
      b === document.activeElement && e();
      return () => {
        b.removeEventListener('focus', e);
        b.removeEventListener('blur', t);
        b === document.activeElement && t();
      };
    }
  }, [_, b]);
  let k = useCallback(e => {
    A(t => (t && (c?.(), onFauxBlurItem(e)), !1));
  }, [c, onFauxBlurItem]);
  let M = useCallback(e => {
    A(t => (t || (o?.(), onFauxFocusItem(e, () => {
      x.current !== null && clearTimeout(x.current);
      x.current = setTimeout(() => {
        k(e);
      }, 0);
    })), !0));
  }, [k, o, onFauxFocusItem]);
  let F = useCallback((e, t) => {
    e ? M(t) : k(t);
  }, [M, k]);
  useEffect(() => () => {
    x.current !== null && clearTimeout(x.current);
  }, []);
  let j = useMemo(() => b == null || _ ? null : new g({
    id: r,
    path: m,
    column: t,
    element: b,
    defaultFocusOptions: E,
    setIsFauxFocused: useKeyNavFauxFocusSync ? F : A,
    fauxClick: p,
    onFocusThroughKeyboardNavigation: u,
    keyboardItemNavigationOptions: y
  }), [b, _, r, m, t, E, useKeyNavFauxFocusSync, F, p, u, y]);
  useEffect(() => {
    if (j) {
      j.addToTree(tree, lookupMap);
      j.navigationOptions.fauxFocusByDefault && setDefaultFauxFocusedItem(j);
      return () => {
        j.removeFromTree(lookupMap);
        j.navigationOptions.fauxFocusByDefault && setDefaultFauxFocusedItem(null);
      };
    }
  }, [j, lookupMap, setDefaultFauxFocusedItem, tree]);
  useEffect(() => {
    if (j && I) {
      a?.();
      onFocusItem(j);
      return () => {
        s?.();
        onBlurItem(j);
      };
    }
  }, [j, I, a, s, onFocusItem, onBlurItem]);
  useEffect(() => {
    if (!useKeyNavFauxFocusSync && j && v) {
      o?.();
      onFauxFocusItem(j, () => {
        A(!1);
      });
      return () => {
        c?.();
        onFauxBlurItem(j);
      };
    }
  }, [j, v, o, c, onFauxFocusItem, onFauxBlurItem, useKeyNavFauxFocusSync]);
  return {
    setKeyboardNavigationElement: T,
    keyboardNavigationItem: j,
    isFocused: I,
    isFauxFocused: v
  };
}
export function $$b6() {
  let {
    lookupMap
  } = assertNotNullish(useContext(f), 'Must use `useKeyboardNavigationLookupMap` inside `<KeyboardNavigationProvider>');
  return useCallback(t => lookupMap.get(t), [lookupMap]);
}
export function $$T8(e = 'real') {
  let {
    blurItem,
    fauxBlurItem
  } = assertNotNullish(useContext(f), 'Must use `useBlurFocusedItem` inside `<KeyboardNavigationProvider>');
  return useCallback(() => {
    switch (e) {
      case 'real':
        blurItem();
        break;
      case 'faux':
        fauxBlurItem();
        break;
      default:
        throwTypeError(e);
    }
  }, [blurItem, fauxBlurItem, e]);
}
export function $$I2({
  preventScroll: e
} = {}) {
  let {
    tree
  } = assertNotNullish(useContext(f), 'Must use `useFocusFirstItem` inside `<KeyboardNavigationProvider>');
  return useCallback(() => {
    let r = function e(t) {
      if (t.type === 'leaf') return t.items.find(e => e != null) ?? null;
      for (let r of t.children) {
        if (r) {
          let t = e(r);
          if (t) return t;
        }
      }
      return null;
    }(tree);
    r?.focus({
      preventScroll: e
    });
  }, [e, tree]);
}
export function $$S3(e, t) {
  let r = k(e);
  let n = isExactModifier(e, ModifierKeyCodes.CONTROL);
  let i = BrowserInfo.mac && n;
  return r === 'ArrowUp' || r === 'KeyK' && t && N() || i && r === 'KeyP';
}
export function $$v1(e, t) {
  let r = k(e);
  let n = isExactModifier(e, ModifierKeyCodes.CONTROL);
  let i = BrowserInfo.mac && n;
  return r === 'ArrowDown' || r === 'KeyJ' && t && N() || i && r === 'KeyN';
}
export function $$A7(e, t, r = !1) {
  return e === 'ArrowLeft' && C(r) || e === 'KeyH' && t && N();
}
export function $$x5(e, t, r = !1) {
  return e === 'ArrowRight' && C(r) || e === 'KeyL' && t && N();
}
function N() {
  return !w(document.activeElement);
}
function C(e) {
  let t = document.activeElement;
  return !w(t) || !!e || (t instanceof HTMLDivElement ? t.textContent === '' : t.value === '');
}
function w(e) {
  return !!e && (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) || e instanceof HTMLDivElement && e.contentEditable === 'true';
}
function O(e, {
  path: t,
  column: r
}, n) {
  if (r == null) return;
  let i = P(e, t);
  return (n === 'left' ? findPrevious : findNext)(i.items, r) || R(e, {
    path: t,
    column: n === 'left' ? 1 / 0 : -1
  }, n === 'left' ? 'up' : 'down');
}
function R(e, {
  path: t,
  column: r
}, n) {
  for (let i = t.length - 1; i >= 0; i--) {
    let s = t.slice(0, i);
    let o = t[i];
    let l = L(e, s);
    let d = (n === 'up' ? findPrevious : findNext)(l.children, o);
    if (d) {
      let e = (n === 'up' ? function e(t) {
        if (t.type === 'leaf') return t;
        let r = findPrevious(t.children, t.children.length);
        if (r) return e(r);
        throw new Error('Expected a node but got nothing');
      } : function e(t) {
        if (t.type === 'leaf') return t;
        let r = findNext(t.children, -1);
        if (r) return e(r);
        throw new Error('Expected a node but got nothing');
      })(d);
      return findNearest(e.items, r || 0);
    }
  }
}
function L(e, t, r = !1) {
  for (let n of t) {
    let t = e.children[n];
    if (t) {
      if (t.type === 'leaf') throw new Error('Expected a parent but got a leaf');
      e = t;
    } else if (r) {
      let t = {
        type: 'parent',
        children: []
      };
      e.children[n] = t;
      e = t;
    } else {
      throw new Error('Expected a parent but got nothing');
    }
  }
  return e;
}
function P(e, t, r = !1) {
  let [n, i] = popLast(t);
  let s = L(e, n, r);
  let o = s.children[i];
  if (o) {
    if (o.type !== 'parent') return o;
    throw new Error('Expected a parent but got a leaf');
  }
  if (r) {
    let e = {
      type: 'leaf',
      items: []
    };
    s.children[i] = e;
    return e;
  }
  throw new Error('Expected a leaf but got nothing');
}
function D(e, t, r) {
  try {
    let n;
    let i;
    let a = r?.(t);
    return a && (n = a.path, i = a.column, P(e, n).items[i ?? 0]);
  } catch (e) {}
}
function k(e) {
  return e.code ?? e.key;
}
export const M3 = $$y0;
export const Nt = $$v1;
export const bh = $$I2;
export const c2 = $$S3;
export const dP = $$E4;
export const lv = $$x5;
export const q_ = $$b6;
export const yn = $$A7;
export const z3 = $$T8;