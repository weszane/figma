import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import { shallowEqual } from "react-redux";
import { clamp } from "../figma_app/492908";
import { lQ } from "../905/934246";
import { xk } from "@stylexjs/stylex";
import { Te } from "../vendor/813803";
import { BrowserInfo } from "../figma_app/778880";
import { Yh, TN, Kr, ud } from "../905/334566";
import { S as _$$S } from "../figma_app/552746";
import { H as _$$H } from "../905/734998";
import { s as _$$s } from "../cssbuilder/589278";
import y from "classnames";
let $$g = (e, t, i) => ({
  height: Math.abs(e.y - t.y),
  width: Math.abs(e.x - t.x),
  top: Math.min(e.y, t.y) + (i?.top ?? 0),
  left: Math.min(e.x, t.x) + (i?.left ?? 0),
  bottom: Math.max(e.y, t.y) + (i?.top ?? 0),
  right: Math.max(e.x, t.x) + (i?.left ?? 0)
});
let f = (e, t) => ({
  x: clamp(e.clientX - t.left, 0, t.width),
  y: clamp(e.clientY - t.top, 0, t.height)
});
function _(e) {
  let t = useRef(null);
  let [i, a] = useState(0);
  let [s, o] = useState(null);
  let [l, d] = useState(null);
  let c = i => {
    if (s && t.current) {
      let n = t.current.getBoundingClientRect();
      let r = f(i, n);
      d(r);
      let a = $$g(s, r, n);
      e.onDragMove(i, a);
    }
  };
  let u = n => {
    if (s && t.current) {
      let i = t.current.getBoundingClientRect();
      let r = f(n, i);
      d(r);
      let a = $$g(s, r, i);
      e.onDragEnd(n, a);
    }
    clearTimeout(i);
    a(setTimeout(() => {
      o(null);
      d(null);
    }, 80));
  };
  return jsxs(_$$S.div, {
    className: _$$s.hFull.wFull.relative.$,
    ref: t,
    onMouseDown: e => {
      if (e.stopPropagation(), t.current) {
        let i = t.current.getBoundingClientRect();
        o({
          x: e.clientX - i.left,
          y: e.clientY - i.top
        });
      }
    },
    "data-testid": "dragSelectionInitiatorDataTestId",
    children: [e.children, s && jsx(_$$S.div, {
      "data-testid": "dragSelectionListenerDataTestId",
      className: "drag_selection--dragSelectionListener--p7XNN",
      onMouseMove: c,
      onMouseUp: u,
      onMouseEnter: e => {
        e.buttons ? c(e) : u(e);
      }
    }), s && l && jsx(A, {
      start: s,
      end: l
    })]
  });
}
function A(e) {
  let t = $$g(e.start, e.end);
  return jsx("div", {
    className: "drag_selection--dragSelection--0ZgzT",
    style: {
      top: `${t.top}px`,
      left: `${t.left}px`,
      width: `${t.width}px`,
      height: `${t.height}px`
    }
  });
}
var b = y;
function v(e) {
  let {
    refocusParent
  } = e;
  let i = useRef(null);
  let [a, s] = useState(!1);
  let o = useCallback(() => {
    s(!0);
  }, []);
  let l = useCallback(() => {
    s(!1);
  }, []);
  useEffect(() => {
    e.focused && i.current?.focus({
      preventScroll: !0
    });
  }, [e.focused, e.itemIndex]);
  useLayoutEffect(() => {
    let e = i.current;
    return () => {
      Yh(e) && refocusParent?.();
    };
  }, [refocusParent]);
  return jsx("div", {
    ref: t => {
      i.current = t;
      e.measureRef?.(t);
    },
    "aria-label": e.ariaLabel,
    "aria-selected": e.isSelected,
    className: "grid_item--scrollMargins--o9Jqd",
    "data-index": e.itemIndex,
    draggable: e.isDraggable,
    onClick: e.handleClick,
    onContextMenu: e.handleContextMenu,
    onDragEnd: e.handleDragEnd,
    onDragStart: e.isDraggable ? e.handleDrag : void 0,
    onFocus: e.itemOnFocus,
    onMouseDown: e => {
      e.stopPropagation();
    },
    onMouseEnter: o,
    onMouseLeave: l,
    role: "gridcell",
    tabIndex: 0,
    children: jsxs("div", {
      className: b()(_$$s.flex.$$if("right" === e.tileFooterPosition, _$$s.flexRow.itemsCenter, _$$s.flexColumn.wFull.hFull).$, e.tileClassName),
      children: [jsx("div", {
        className: b()(_$$s.overflowHidden.flexShrink0.$, {
          "grid_item--bRadius16--ljQxD": 16 === e.tileBorderRadius,
          [_$$s.bRadius8.$]: 8 === e.tileBorderRadius,
          [_$$s.bRadius4.$]: 4 === e.tileBorderRadius,
          [_$$s.radiusSmall.$]: "small" === e.tileBorderRadius,
          [_$$s.radiusMedium.$]: "medium" === e.tileBorderRadius,
          [_$$s.radiusLarge.$]: "large" === e.tileBorderRadius,
          [_$$s.flexGrow1.$]: "bottom" === e.tileFooterPosition
        }, function (e) {
          switch (e) {
            case "dashed":
              return "grid_item--dashed--jvVC-";
            case "solid":
              return "grid_item--solid--dEvKQ";
          }
        }(e.tileBorderStyle), e.isSelected ? "grid_item--selected--TLreG" : "grid_item--notSelected--2f2QR", e.showHoverBorder && a && "grid_item--hovered--rA4kS"),
        onFocus: t => {
          t.relatedTarget === i.current && e.nestedFocus || e.clearSelected();
          t.stopPropagation();
        },
        children: e.renderTile(e.item, e.onChildFocusChange, {
          isSelected: e.isSelected,
          isHovered: a
        })
      }), jsx("div", {
        className: _$$s.overflowHidden.$,
        onFocus: t => {
          e.clearSelected();
          t.stopPropagation();
        },
        children: e.renderTileFooter && e.renderTileFooter(e.item, {
          isSelected: e.isSelected,
          isHovered: a
        })
      })]
    })
  });
}
export function $$I0(e) {
  let {
    virtualizer,
    virtualItems,
    gridRef,
    gridParentRef,
    gridParentHeight,
    numItemsPerRow
  } = function ({
    items: e,
    updateRenderedItems: t
  }) {
    let [i, n] = useState(null);
    let s = useRef(null);
    let o = useRef(null);
    TN(s, "GridView");
    let l = Kr(s);
    useLayoutEffect(() => {
      let e = s?.current;
      let t = o?.current;
      if (!e || !t) return;
      let i = () => {
        let i = window.getComputedStyle(e);
        let r = parseInt(i.rowGap) || 0;
        let s = parseInt(i.columnGap) || 0;
        let o = parseInt(i.paddingTop) || 0;
        let d = parseInt(i.paddingBottom) || 0;
        let c = e.children.length ? e.children[0]?.getBoundingClientRect() : null;
        let u = c?.height ?? null;
        let p = (c?.width ?? 0) + s;
        let m = p > 0 ? Math.round((e.clientWidth + s) / p) : null;
        let h = l();
        let g = {
          firstTileHeight: u,
          columnGap: s,
          rowGap: r,
          verticalPadding: o + d,
          numItemsPerRow: m,
          scrollOffset: t.getBoundingClientRect().y + (h?.scrollTop ?? 0)
        };
        n(e => shallowEqual(e, g) ? e : g);
      };
      i();
      let r = new ResizeObserver(i);
      r.observe(e);
      return () => r.disconnect();
    }, [l]);
    let c = i?.firstTileHeight ? i.firstTileHeight + i.rowGap : 0;
    let p = i?.numItemsPerRow ?? 1;
    let m = Te({
      count: e.length,
      getScrollElement: l,
      estimateSize: useCallback(() => c, [c]),
      getItemKey: useCallback(e => `${e}-${c}`, [c]),
      overscan: 25,
      lanes: p,
      scrollPaddingStart: i ? -i.scrollOffset + 120 : 0,
      scrollPaddingEnd: i?.scrollOffset ?? 0
    });
    let h = useRef(null);
    useLayoutEffect(() => {
      i?.numItemsPerRow && h.current !== i.numItemsPerRow && (h.current = i?.numItemsPerRow, m.measure());
    }, [m, i?.numItemsPerRow]);
    let g = ud(m.getVirtualItems(), p);
    useLayoutEffect(() => {
      t?.(g.map(t => e[t.index]));
    }, [e, g, t]);
    let f = m.getTotalSize();
    i && (g.length > 0 && (f -= i.rowGap), f += i.verticalPadding);
    return {
      virtualizer: m,
      virtualItems: g,
      gridRef: s,
      gridParentRef: o,
      gridParentHeight: f,
      numItemsPerRow: i?.numItemsPerRow ?? null
    };
  }(e);
  let [y, b] = useState();
  let [I, x] = useState();
  let [S, w] = useState();
  let [C, T] = useState(new Set());
  let [k, R] = useState(new Set());
  let {
    items,
    onSelection,
    canSelectItem,
    handleOpenItem,
    handleContextMenu,
    handleDeleteKey,
    isDraggable,
    handleDragImage,
    multiselectDisabled,
    updateVisibleItems
  } = e;
  _$$H({
    containerRef: gridRef,
    items,
    updateVisibleItems
  });
  let V = useCallback(e => (canSelectItem && (e = new Set([...e].filter(e => canSelectItem(items[e])))), onSelection && onSelection([...e].map(e => items[e])), T(e), e), [T, onSelection, canSelectItem, items]);
  let G = useCallback(() => {
    C.size > 0 && (x(void 0), b(void 0));
    w(void 0);
    V(new Set());
  }, [C, V]);
  let z = useCallback(() => {
    e.keepSelectionOnFocusLost || G();
  }, [e.keepSelectionOnFocusLost, G]);
  let H = useCallback(() => {
    gridRef.current?.focus({
      preventScroll: !0
    });
  }, [gridRef]);
  let W = useCallback(e => {
    gridRef.current?.contains(e.relatedTarget) || e.relatedTarget?.role === "menu" || z();
  }, [z, gridRef]);
  let K = useCallback(i => {
    e.disableScrollTo || virtualizer.scrollToIndex(i, {
      align: "auto",
      behavior: virtualizer.getTotalSize() > 1e4 ? "auto" : "smooth"
    });
  }, [virtualizer, e.disableScrollTo]);
  let Y = useCallback((e, t, i = !1, n = !1) => {
    let r;
    if ((t.ctrlKey || t.metaKey) && !n) {
      if (C.has(e)) {
        if (i || t.ctrlKey) return C;
        r = multiselectDisabled ? new Set() : new Set([...C].filter(t => t !== e));
      } else r = new Set(multiselectDisabled ? [e] : [...C, e]);
    } else if (t.shiftKey) r = new Set(void 0 === I || void 0 === y || multiselectDisabled ? [e] : n ? [...C, e] : I > e ? [...[...C].filter(e => e > Math.max(y, I) || e < Math.min(y, I)), ...[...Array(I - e + 1)].map((t, i) => i + e)] : [...[...C].filter(e => e > Math.max(y, I) || e < Math.min(y, I)), ...[...Array(e - I + 1)].map((e, t) => t + I)]); else {
      if (i && C.has(e)) return C;
      r = new Set([e]);
    }
    r.size ? (1 === r.size && x(e), b(e), w(e), K(e)) : (x(void 0), b(void 0), w(void 0));
    return r = V(r);
  }, [V, C, multiselectDisabled, I, y, K]);
  let [q, $] = useState(void 0);
  let Z = t => {
    let i = y + (numItemsPerRow || 1) * t;
    return clamp(i, 0, e.items.length - 1);
  };
  let X = useCallback(t => () => {
    b(t);
    e.multiselectDisabled ? (x(t), V(new Set([t])), q?.key !== "Tab" && K(t)) : q && ("Tab" === q.key ? (x(t), V(new Set([t]))) : ("ArrowLeft" === q.key || "ArrowRight" === q.key || "ArrowUp" === q.key || "ArrowDown" === q.key) && Y(t, q, !1, !0));
  }, [q, e.multiselectDisabled, K, V, Y]);
  let Q = t => {
    switch (t.key) {
      case "a":
        if (!t.ctrlKey && !t.metaKey || e.multiselectDisabled) break;
        V(new Set([...Array(items.length).keys()]));
        b(items.length - 1);
        w(items.length - 1);
        x(0);
        t.preventDefault();
        t.stopPropagation();
        break;
      case "Delete":
      case "Backspace":
        handleDeleteKey && (handleDeleteKey(items.filter((e, t) => C.has(t))), G(), t.preventDefault(), t.stopPropagation());
        break;
      case "Enter":
        if (1 === C.size && handleOpenItem) {
          let e = [...C][0];
          handleOpenItem(items[e], t, e);
        }
        t.stopPropagation();
        break;
      case "ArrowLeft":
        if (void 0 === y || void 0 === I) Y(items.length - 1, t, !1, !0); else if (t.altKey) Y(0, t, !1, !0); else {
          let e = y;
          if (t.shiftKey && y < I) for (; e > 0 && C.has(e - 1);) e--;
          e > 0 && Y(e - 1, t, !1, !0);
        }
        t.preventDefault();
        t.stopPropagation();
        break;
      case "ArrowRight":
        if (void 0 === y || void 0 === I) Y(0, t, !1, !0); else if (t.altKey) Y(items.length - 1, t, !1, !0); else {
          let e = y;
          if (t.shiftKey && y > I) for (; e < items.length - 1 && C.has(e + 1);) e++;
          e < items.length - 1 && Y(e + 1, t, !1, !0);
        }
        t.preventDefault();
        t.stopPropagation();
        break;
      case "ArrowUp":
        void 0 === y || void 0 === I ? Y(items.length - 1, t, !0, !0) : Y(Z(-1), t, !0, !0);
        t.preventDefault();
        t.stopPropagation();
        break;
      case "ArrowDown":
        void 0 === y || void 0 === I ? Y(0, t, !0, !0) : Y(Z(1), t, !0, !0);
        t.preventDefault();
        t.stopPropagation();
        break;
      case "Tab":
        {
          let e = virtualItems[0];
          let n = virtualItems[virtualItems.length - 1];
          void 0 === y ? e && e.index > 0 && (b(0), V(new Set([0])), x(0), K(0), t.preventDefault()) : (e && y < e.index || n && n.index < y) && (t.shiftKey ? y > 0 && Y(y - 1, t, !1, !0) : y < items.length - 1 && Y(y + 1, t, !1, !0), t.preventDefault());
          t.shiftKey && (0 === y || void 0 === y) && G();
        }
    }
  };
  let J = useCallback(t => i => {
    if (i.stopPropagation(), (2 === i.detail || BrowserInfo.mobile || BrowserInfo.tablet || e.forceSingleClick) && handleOpenItem) handleOpenItem(items[t], i, t); else {
      let e = Y(t, i);
      if (e.size && !e.has(t)) {
        let i = t + 1;
        for (; i < items.length;) {
          if (e.has(i)) {
            b(i);
            w(i);
            x(i);
            return;
          }
          i++;
        }
        for (i = t - 1; i >= 0;) {
          if (e.has(i)) {
            b(i);
            w(i);
            x(i);
            return;
          }
          i--;
        }
      } else e.size && !i.shiftKey && x(t);
    }
  }, [items, Y, handleOpenItem, e.forceSingleClick]);
  let ee = useCallback(e => t => {
    let i = Y(e, t, !0);
    handleContextMenu && i.has(e) && (t.stopPropagation(), t.preventDefault(), handleContextMenu([...i].map(e => items[e]), t, e));
  }, [handleContextMenu, items, Y]);
  let et = useCallback(e => t => {
    isDraggable && handleDragImage([...Y(e, t, !0)].map(e => items[e]), t);
  }, [handleDragImage, isDraggable, Y, items]);
  let ei = e => {
    let t = new Set();
    virtualItems.forEach((n, r) => {
      if (gridRef.current) {
        let n = gridRef.current.children[r].getBoundingClientRect();
        if (!(n.left > e.right || n.right < e.left || n.top > e.bottom || n.bottom < e.top)) {
          let e = virtualItems[r];
          t.add(e.index);
        }
      }
    });
    return t;
  };
  let en = e => {
    e.shiftKey || e.metaKey || G();
  };
  let er = virtualItems.map(t => {
    let i = t.index;
    let r = e.items[i];
    return jsx(v, {
      ariaLabel: e.getAriaLabel ? e.getAriaLabel(r) : void 0,
      clearSelected: () => V(new Set([])),
      focused: i === S,
      handleClick: J(i),
      handleContextMenu: ee(i),
      handleDrag: et(i),
      handleDragEnd: e.isDraggable ? e.handleDragEnd : lQ,
      isDraggable: !!e.isDraggable,
      isSelected: C.has(i) || k.has(i),
      item: r,
      itemIndex: i,
      itemOnFocus: X(i),
      nestedFocus: e.nestedFocus,
      onChildFocusChange: () => {
        b(i);
        x(i);
        V(new Set([]));
      },
      refocusParent: H,
      renderTile: e.renderTile,
      renderTileFooter: e.renderTileFooter,
      showHoverBorder: e.showHoverBorder,
      tileBorderRadius: e.tileBorderRadius ?? 8,
      tileBorderStyle: e.tileBorderStyle ?? "solid",
      tileClassName: e.tileClassName,
      tileFooterPosition: e.tileFooterPosition
    }, `GridViewItem${i}`);
  });
  let ea = jsx("div", {
    style: {
      height: gridParentHeight
    },
    ref: gridParentRef,
    children: jsxs(_$$S.div, {
      role: "grid",
      tabIndex: -1,
      "aria-multiselectable": !e.multiselectDisabled,
      ...xk(E.grid, e.containerStyle),
      ref: gridRef,
      onKeyDown: e => {
        Q(e);
        $(e);
      },
      onMouseDown: e => {
        en(e);
        $(void 0);
      },
      onBlur: W,
      style: {
        transform: `translateY(${virtualItems[0]?.start || 0}px)`
      },
      children: [er, virtualItems[virtualItems.length - 1]?.index === e.items.length - 1 ? e.trailingGridElements : jsx(Fragment, {})]
    })
  });
  return e.multiselectDisabled ? ea : jsx(_, {
    onDragMove: (e, t) => {
      e.buttons && R(ei(t));
    },
    onDragEnd: (e, t) => {
      V(new Set([...C, ...ei(t)]));
      R(new Set());
    },
    children: ea
  });
}
let E = {
  grid: {
    display: "xrvj5dj",
    gridTemplateColumns: "x1rr9rqv",
    gap: "x1rzw5jd",
    rowGap: null,
    columnGap: null,
    margin: "xy3p2pi",
    marginInline: null,
    marginInlineStart: null,
    marginLeft: null,
    marginInlineEnd: null,
    marginRight: null,
    marginBlock: null,
    marginTop: null,
    marginBottom: null,
    boxSizing: "x9f619",
    $$css: !0
  }
};
export const g = $$I0;
