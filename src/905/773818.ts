import { jsx } from "react/jsx-runtime";
import { useRef, useMemo, createContext, useEffect, useContext } from "react";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { M3 } from "../figma_app/119475";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { styleBuilderInstance } from "../905/941192";
import { a as _$$a, i as _$$i } from "../905/44915";
import { A } from "../905/780920";
import { c as _$$c } from "../905/566438";
import { L0, AM, AD, zp } from "../905/479155";
import { k } from "../905/341245";
import { U as _$$U } from "../905/172092";
export function $$g0({
  children: e,
  columns: t,
  gap: i,
  padding: a = 8,
  gridRepeatTracks: s,
  primary: l,
  defaultActiveIndex: d = 0,
  dataTestId: u
}) {
  let m = useRef(null);
  let {
    tracker,
    index,
    isPrimaryLayout
  } = L0(m, l);
  let _ = useMemo(() => ({
    trackerRef: tracker,
    layoutIndex: index,
    columns: t,
    primary: isPrimaryLayout
  }), [t, isPrimaryLayout, index, tracker]);
  return jsx(AM.Provider, {
    value: _,
    children: jsx("div", {
      ref: m,
      className: cssBuilderInstance.grid.$,
      style: {
        gridTemplateColumns: `repeat(${t}, ${s || "minmax(0, 1fr)"})`,
        padding: `0 ${a}px ${a}px ${a}px`,
        gap: `${i}px`
      },
      "data-testid": u,
      children: jsx(AD, {
        children: jsx(A.Provider, {
          value: d,
          children: e
        })
      })
    })
  });
}
(e => {
  let t = createContext({
    active: !1
  });
  e.Item = function ({
    primaryAction: e,
    secondaryAction: i,
    tertiaryAction: c,
    focusAction: u,
    children: g,
    fullWidth: f,
    actionLabel: _ = !0,
    recordingKey: A,
    disabled: y,
    singleClick: b,
    allowAutoFocus: v = !0,
    enableFauxFocus: I = !0,
    defaultFocusOptions: E
  }) {
    let x = useRef(null);
    let {
      itemIndex,
      rowIndex,
      layoutIndex,
      columnIndex,
      inPrimaryLayout
    } = zp(x, f);
    let {
      isFocused,
      isFauxFocused,
      setKeyboardNavigationElement,
      keyboardNavigationItem
    } = M3({
      disabled: y,
      path: [layoutIndex, rowIndex],
      column: columnIndex,
      navigationOptions: {
        supportHorizontalNavigation: !0,
        simulateClickOnEnter: !1,
        fauxFocusByDefault: inPrimaryLayout && 0 === rowIndex && 0 === columnIndex
      },
      defaultFocusOptions: E
    });
    let D = I ? isFauxFocused : isFocused;
    let L = _$$a({
      isPrimaryLayout: inPrimaryLayout,
      itemIndex,
      layoutIndex,
      enableAutoFocus: v
    });
    let {
      focus
    } = _$$i({
      keyboardNavigationItem,
      shouldAutoFocus: L,
      enableFauxFocus: I
    });
    let M = useMemo(() => keyboardNavigationItem ? {
      index: itemIndex,
      item: keyboardNavigationItem,
      element: x.current
    } : null, [itemIndex, keyboardNavigationItem]);
    let {
      onClickCallback
    } = k({
      primaryAction: e,
      secondaryAction: i,
      tertiaryAction: c,
      focusAction: u,
      active: D,
      actionLabel: _,
      target: M
    });
    useEffect(() => {
      x.current && !keyboardNavigationItem && setKeyboardNavigationElement(x.current);
    }, [keyboardNavigationItem, setKeyboardNavigationElement]);
    let U = _$$U();
    let B = generateRecordingKey(U, "grid", A || "");
    let V = useHandleMouseEvent(B, "click", () => {
      b ? onClickCallback() : focus();
    });
    let G = useHandleMouseEvent(B, "dblclick", () => {
      y || onClickCallback();
    });
    let z = useMemo(() => ({
      active: D
    }), [D]);
    return jsx("button", {
      className: cssBuilderInstance.flex.flexColumn.$,
      style: styleBuilderInstance.$$if(f, {
        gridColumn: "1 / -1"
      }).$,
      onClick: V,
      onDoubleClick: G,
      ref: x,
      children: jsx(t.Provider, {
        value: z,
        children: g
      })
    });
  };
  e.GridItemHighlight = function ({
    children: e
  }) {
    let {
      active
    } = useContext(t);
    return jsx(_$$c, {
      active,
      children: e
    });
  };
  e.ItemFooter = function ({
    children: e
  }) {
    return jsx("div", {
      className: cssBuilderInstance.wFull.$,
      children: e
    });
  };
})($$g0 || ($$g0 = {}));
export const x = $$g0;