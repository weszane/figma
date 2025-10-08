import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, useLayoutEffect, useMemo, useContext, useEffect, createContext } from "react";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import s from "classnames";
import { RecordingScrollContainer } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { usKeyboardFocusHandler } from "../905/286442";
import { A as _$$A } from "../905/780920";
import { useLayoutRegistration, ListLayoutContext, LayoutProvider } from "../905/479155";
import { useResizeObserverRef } from "../figma_app/708845";
import { k } from "../905/341245";
import { U } from "../905/172092";
var o = s;
export function $$f0({
  children: e,
  resultCount: t,
  primary: i,
  maxVisibleResults: a,
  dataTestId: s,
  defaultActiveIndex: c = 0
}) {
  let h = useRef(null);
  let g = useRef(null);
  let {
    tracker,
    index,
    isPrimaryLayout
  } = useLayoutRegistration(g, i);
  let y = function (e, t, i, n) {
    let [a, s] = useState(0);
    let o = void 0 === n;
    let l = useCallback(() => {
      o && s(i.current?.clientHeight ?? 0);
    }, [o, i]);
    useResizeObserverRef(i, l);
    useLayoutEffect(() => {
      if (n) {
        let i = function ({
          trackerRef: e,
          maxItems: t,
          resultCount: i
        }) {
          let n = e.current;
          if (!n) return;
          let r = Math.min(i, t);
          let a = n.getRef(r - 1);
          let s = a?.current;
          if (s) return i >= t ? s.offsetTop + s.clientHeight / 2 : s.offsetTop + s.clientHeight;
        }({
          trackerRef: t,
          maxItems: n,
          resultCount: e
        });
        i && s(i);
      } else {
        let e = i.current;
        e && s(e.clientHeight);
      }
    }, [n, e, i, t]);
    return a;
  }(t, tracker, g, a);
  let b = useMemo(() => ({
    trackerRef: tracker,
    layoutIndex: index,
    primary: isPrimaryLayout
  }), [isPrimaryLayout, index, tracker]);
  return 0 === t ? null : jsx(ListLayoutContext.Provider, {
    value: b,
    children: jsx("div", {
      ref: g,
      className: cssBuilderInstance.flex.gap4.if(void 0 === a, cssBuilderInstance.absolute.left0.right0.top0.bottom0).$,
      "data-testid": s,
      children: jsx(RecordingScrollContainer, {
        ref: h,
        height: y,
        hideScrollbar: !0,
        className: cssBuilderInstance.wFull.$,
        children: jsx(LayoutProvider, {
          children: jsx("div", {
            className: o()("list--list--1-cyL", cssBuilderInstance.flex.flexColumn.pb8.$),
            children: jsx(_$$A.Provider, {
              value: c,
              children: e
            })
          })
        })
      })
    })
  });
}
(e => {
  function t({
    primaryAction: t,
    secondaryAction: i,
    tertiaryAction: s,
    actionLabel: o = !0,
    debug: l,
    setActive: p,
    ignoreFocusStyle: m,
    disabled: f,
    recordingKey: _,
    scrollMargin: A,
    ...y
  }) {
    let [b, v] = useState(!1);
    let I = useRef(null);
    let E = useRef(null);
    let x = useContext(_$$A);
    let {
      active,
      target,
      focus
    } = usKeyboardFocusHandler({
      ref: "container" === y.type ? I : E,
      navigationOptions: ({
        inPrimaryLayout: e,
        itemIndex: t
      }) => ({
        supportHorizontalNavigation: !1,
        simulateClickOnEnter: !1,
        fauxFocusByDefault: e && t === x
      }),
      itemsPerRow: 1,
      debug: l
    });
    let T = cssBuilderInstance.flex.alignCenter.bRadius5.ml8.mr8.p4.flex1.if(active && !m, cssBuilderInstance.colorBgHover).$;
    let {
      onClickCallback
    } = k({
      primaryAction: t,
      secondaryAction: i,
      tertiaryAction: s,
      active,
      actionLabel: o,
      target
    });
    useEffect(() => {
      p && p(active);
    }, [active, p]);
    let R = U();
    let N = generateRecordingKey(R, "list", _ || "");
    let P = useHandleMouseEvent(N, "mouseenter", () => {
      b && focus({
        preventScroll: !0
      });
    });
    let O = useHandleMouseEvent(N, "mousemove", () => {
      b || (v(!0), focus({
        preventScroll: !0
      }));
    });
    let D = useHandleMouseEvent(N, "mouseleave", () => {
      v(!1);
    });
    let L = useCallback(() => {
      focus({
        preventScroll: !0
      });
    }, [focus]);
    let F = useHandleMouseEvent(N, "click", () => {
      onClickCallback();
    });
    return "container" === y.type ? jsx(e.ListItemActiveContext.Provider, {
      value: active,
      children: jsx("div", {
        ref: I,
        className: T,
        "data-testid": _,
        onMouseEnter: P,
        onMouseLeave: D,
        onMouseMove: O,
        style: {
          scrollMargin: A
        },
        children: y.children?.(L, F) || null
      })
    }) : jsx(e.ListItemActiveContext.Provider, {
      value: active,
      children: jsx("button", {
        ref: E,
        className: T,
        "data-testid": _,
        disabled: f,
        onClick: F,
        onMouseEnter: P,
        onMouseLeave: D,
        onMouseMove: O,
        style: {
          scrollMargin: A
        },
        ...("checkbox" === y.type ? {
          "aria-checked": y.isChecked,
          role: "switch"
        } : {}),
        children: y.children
      })
    });
  }
  e.ListItemActiveContext = createContext(!1);
  e.Item = t;
  (t = e.Item || (e.Item = {})).useIsActive = function () {
    return useContext(e.ListItemActiveContext);
  };
  e.Section = function ({
    header: e,
    children: t
  }) {
    return jsxs("section", {
      className: cssBuilderInstance.flex.flexColumn.$,
      children: [jsx("h2", {
        className: cssBuilderInstance.textBodyMedium.colorTextSecondary.ml16.mb4.mt12.$,
        children: e
      }), t]
    });
  };
})($$f0 || ($$f0 = {}));
export const B = $$f0;