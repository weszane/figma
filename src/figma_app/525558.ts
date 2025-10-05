import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react"
import { jsx } from "react/jsx-runtime"
import { KeyCodes } from "../905/63728"
import { KeyboardNavigationProvider, useKeyboardNavigationItem } from "../figma_app/119475"
import { Qk, sN, t7 } from "../figma_app/188908"
import { fullscreenValue } from "../figma_app/455680"
import { e as _$$e } from "../figma_app/522702"
import { kL } from "../figma_app/547952"
import { ButtonType, SectionType } from "../figma_app/644808"
import { S5, wV } from "../figma_app/647246"
import { forwardKeyboardEvent } from "../figma_app/896988"

export let $$h3 = (e, t, r, n) => ({
  path: [...e, Math.floor(t / r) + (n ? 1 : 0)],
  column: t % r,
})
export function $$m1({
  onBoth: e,
  onClick: t,
  onKeyDown: r,
}) {
  return useCallback((n) => {
    e?.(n)
    n.detail !== 0 ? t?.(n) : r?.(n)
  }, [e, t, r])
}
export function $$g2({
  onBoth: e,
  onClick: t,
  onKeyDown: r,
}) {
  return useCallback((...n) => (i) => {
    e?.(...n)(i)
    i.detail !== 0 ? t?.(...n)(i) : r?.(...n)(i)
  }, [e, t, r])
}
function f({
  children: e,
}) {
  let t = useRef(null)
  let {
    clickBackButton,
    focusBackButton,
    focusSearchBar,
    inputRef,
  } = $$A4()
  let h = sN()
  let {
    forwardSwipe,
    onBack,
    currentView,
  } = wV()
  let E = useCallback((e) => {
    if (Qk(e.target) || e.keyCode !== KeyCodes.BACKSPACE) {
      if (e.altKey && [KeyCodes.KEY_1, KeyCodes.KEY_2, KeyCodes.KEY_3].includes(e.keyCode) && fullscreenValue.isReady() && e.target !== inputRef.current?.searchInput)
        return forwardKeyboardEvent(e)
    }
    else {
      clickBackButton()
      focusBackButton()
    }
  }, [clickBackButton, focusBackButton, inputRef])
  let y = useCallback((e) => {
    currentView !== S5.Search && (e === "left" ? (h("backwardsSwipe", onBack(!0)), focusSearchBar()) : e === "right" && (h("forwardsSwipe", forwardSwipe()), focusSearchBar()))
  }, [currentView, focusSearchBar, forwardSwipe, h, onBack])
  t7(t, y)
  return jsx("div", {
    "onKeyDown": E,
    "className": kL,
    "ref": t,
    "data-testid": "asset-panel-event-capture",
    "children": e,
  })
}
let E = () => {
  let {
    setKeyboardNavigationElement,
    keyboardNavigationItem,
    isFocused,
  } = useKeyboardNavigationItem({
    path: [SectionType.BREADCRUMB],
    column: ButtonType.BACK,
  })
  let n = useRef(!1)
  let a = useCallback(() => {
    keyboardNavigationItem && !isFocused ? keyboardNavigationItem.focus() : n.current = !0
  }, [keyboardNavigationItem, isFocused])
  useEffect(() => {
    keyboardNavigationItem && n.current && !isFocused && (keyboardNavigationItem.focus(), n.current = !1)
  }, [keyboardNavigationItem, isFocused])
  return {
    setBackButtonKeyboardItem: setKeyboardNavigationElement,
    focusBackButton: a,
    clickBackButton: useCallback(() => {
      keyboardNavigationItem?.simulateClick()
    }, [keyboardNavigationItem]),
  }
}
let y = () => {
  let e = useRef(null)
  return {
    focusSearchBar: useCallback(() => {
      e.current?.focus(!0)
    }, []),
    inputRef: e,
  }
}
let b = () => {
  let [e, t] = useState(null)
  let [r, n, a] = _$$e(!1)
  let s = useCallback(() => {
    t(null)
    n()
  }, [n])
  useEffect(() => {
    e && r && (e.focus({
      preventScroll: !0,
    }), a())
  }, [e, a, r])
  return {
    enqueueFocus: s,
    setKeyboardItem: t,
  }
}
export function $$T0(e, t) {
  let r = useContext(S)
  let n = r?.trackFirstItem
  useEffect(() => {
    e && t && n?.(e)
  }, [r, t, e, n])
}
export function $$I5({
  children: e,
  className: t,
}) {
  return jsx(KeyboardNavigationProvider, {
    className: t,
    stopPropagationOnEventHandle: !0,
    children: jsx(v, {
      children: e,
    }),
  })
}
let S = createContext(null)
function v({
  children: e,
}) {
  let {
    setBackButtonKeyboardItem,
    focusBackButton,
    clickBackButton,
  } = E()
  let {
    enqueueFocus,
    setKeyboardItem,
  } = b()
  let {
    focusSearchBar,
    inputRef,
  } = y()
  let c = useMemo(() => ({
    clickBackButton,
    focusBackButton,
    focusFirstItem: enqueueFocus,
    focusSearchBar,
    inputRef,
    trackFirstItem: setKeyboardItem,
    setBackButtonKeyboardItem,
  }), [clickBackButton, focusBackButton, enqueueFocus, focusSearchBar, inputRef, setKeyboardItem, setBackButtonKeyboardItem])
  return jsx(S.Provider, {
    value: c,
    children: jsx(f, {
      children: e,
    }),
  })
}
export function $$A4() {
  let e = useContext(S)
  return useMemo(() => {
    if (!e) {
      return {
        clickBackButton: () => {},
        focusBackButton: () => {},
        focusFirstItem: () => {},
        focusSearchBar: () => {},
        inputRef: {
          current: null,
        },
        setBackButtonKeyboardItem: () => {},
      }
    }
    let {
      trackFirstItem,
      ...r
    } = e
    return r
  }, [e])
}
export const C0 = $$T0
export const MB = $$m1
export const NR = $$g2
export const pg = $$h3
export const rl = $$A4
export const tM = $$I5
