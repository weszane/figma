import { props } from '@stylexjs/stylex';
import cn from 'classnames';
import { noop } from 'lodash-es';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, shallowEqual, useStore } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { Kr, TN, Yh } from '../905/334566';
import { LivegraphProvider } from '../905/436043';
import { g as _$$g } from '../905/607862';
import { SortableHeaderCell, NonSortableHeaderCell } from '../905/682977';
import { H as _$$H } from '../905/734998';
import { DragDataHandler } from '../905/904854';
import { styleBuilderInstance } from '../905/941192';
import { TextWithTruncation } from '../905/984674';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { AtomProvider } from '../figma_app/27355';
import { getInitialOptions } from '../figma_app/169182';
import { ViewMode } from '../figma_app/756995';
import { BrowserInfo } from '../figma_app/778880';
import { useHandleKeyboardEvent } from '../figma_app/878298';
import { Te } from '../vendor/813803';
function $$A(e) {
  return jsxs('div', {
    className: cssBuilderInstance.relative.$,
    children: [e.selectedItems.slice(0, 3).map((t, i) => jsx('div', {
      style: styleBuilderInstance.match(i, {
        0: styleBuilderInstance.add({
          top: 0,
          left: 0
        }),
        1: styleBuilderInstance.add({
          top: '8px',
          left: '8px'
        }),
        2: styleBuilderInstance.add({
          top: '16px',
          left: '16px'
        })
      }).$,
      className: cn()(cssBuilderInstance.absolute.bRadius8.b2.colorBorderSelected.colorBg.overflowHidden.$, 'items_view_drag_image--dragImageSizeBounds--OJfPU'),
      children: e.renderDragImage(t)
    }, `DragImageItem${i}`)).reverse(), !e.multiselectDisabled && e.selectedItems.length ? jsx('div', {
      className: cssBuilderInstance.h24.w24.colorBgBrand.bRadiusFull.absolute.flex.justifyCenter.itemsCenter.$,
      style: styleBuilderInstance.add({
        top: '-12px',
        left: '-12px'
      }).$,
      children: jsx(TextWithTruncation, {
        color: 'onbrand',
        truncate: !0,
        children: e.selectedItems.length > 100 ? '99+' : e.selectedItems.length
      })
    }) : jsx(Fragment, {})]
  });
}
function C(e) {
  return jsx('th', {
    className: cn()(e.containerClassName, cssBuilderInstance.alignMiddle.$),
    children: jsx('div', {
      className: cssBuilderInstance.mt8.mb8.if(e.hasLeftBorder, cssBuilderInstance.colorBorder.bSolid.pl8.pr4, cssBuilderInstance.if(!e.noPadding, cssBuilderInstance.pl4.pr4)).$,
      children: e.sortOptions ? jsx(SortableHeaderCell, {
        className: cssBuilderInstance.if(!e.sortOptions.hasArrow, cssBuilderInstance.colorTextSecondary).font11.$,
        isDescending: e.sortOptions.isDescending,
        hasArrow: e.sortOptions.hasArrow,
        field: e.sortOptions.field,
        sortBy: e.sortOptions.handleSortBy,
        children: e.children
      }) : jsx(NonSortableHeaderCell, {
        className: cssBuilderInstance.colorTextSecondary.font11.$,
        children: e.children
      })
    })
  });
}
function T(e) {
  return jsxs('tr', {
    children: [e.hasGutterColumn && jsx('th', {
      className: cssBuilderInstance.w32.minW32.$
    }), e.columns.map((t, i) => jsx(C, {
      containerClassName: t.headerCellClassName,
      hasLeftBorder: i > 0,
      noPadding: !0,
      sortOptions: void 0 !== t.field && e.handleSortBy ? {
        field: t.field,
        hasArrow: e.currentSort?.field === t.field,
        isDescending: e.currentSort?.field === t.field && !!e.currentSort?.isDescending,
        handleSortBy: e.handleSortBy
      } : void 0,
      children: t.renderHeaderCell()
    }, `ListViewHeaderCell${i}`))]
  });
}
function k(e) {
  let t = e.isSelected && !e.isAboveSelected;
  let i = e.isSelected && !e.isBelowSelected;
  let r = e.isSelected && e.isFirstSelectableCell;
  let a = e.isSelected && e.isLastSelectableCell;
  let s = cssBuilderInstance.borderBox.alignMiddle.hFull.if(t, cssBuilderInstance.pt4).if(i, cssBuilderInstance.pb4).$;
  return jsx('td', {
    draggable: e.isDraggable,
    onClick: e.onClick,
    onDragStart: e.isDraggable ? e.onDragStart : void 0,
    onDragEnd: e.onDragEnd,
    onContextMenu: e.onContextMenu,
    className: s,
    children: jsx('div', {
      className: cn()(cssBuilderInstance.flex.flexRow.itemsCenter.overflowHidden.borderBox.ellipsis.bSolid.colorBorderSelected.hFull.wFull.if(t, cssBuilderInstance.bt2.pt2, cssBuilderInstance.pt8).if(i, cssBuilderInstance.bb2.pb2, cssBuilderInstance.pb8).if(a, cssBuilderInstance.br2, cssBuilderInstance.pr2).if(r, cssBuilderInstance.bl2.if(e.hasLeftPadding, cssBuilderInstance.pl6, cssBuilderInstance.pl2), cssBuilderInstance.if(e.hasLeftPadding, cssBuilderInstance.pl8, cssBuilderInstance.pl4)).$, {
        'list_view_cell--topRightBorderRadius--qPV-m': e.isLastSelectableCell && !e.isAboveSelected,
        'list_view_cell--bottomRightBorderRadius--tuU0n': e.isLastSelectableCell && !e.isBelowSelected,
        'list_view_cell--topLeftBorderRadius--zeTRC': e.isFirstSelectableCell && !e.isAboveSelected,
        'list_view_cell--bottomLeftBorderRadius--lt2sK': e.isFirstSelectableCell && !e.isBelowSelected
      }),
      children: e.renderRowCell(e.item, {
        itemIndex: e.itemIndex,
        isSelected: e.isSelected,
        isHovered: e.isHovered
      })
    })
  });
}
function R(e) {
  let {
    refocusParent
  } = e;
  let i = useRef(null);
  useLayoutEffect(() => {
    let e = i.current;
    return () => {
      Yh(e) && refocusParent?.();
    };
  }, [refocusParent]);
  let [a, s] = useState(!1);
  let o = useCallback(() => {
    s(!0);
  }, []);
  let l = useCallback(() => {
    s(!1);
  }, []);
  return jsxs('tr', {
    'data-index': e.itemIndex,
    'tabIndex': 0,
    'ref': i,
    'aria-selected': e.isSelected,
    'aria-label': e.ariaLabel,
    'className': cn()(e.containerClassName, 'list_view_row--defaultRowStyles--qutPa'),
    'style': e.virtualizationStyle,
    'onMouseEnter': o,
    'onMouseLeave': l,
    'children': [e.gutterColumn && jsx(k, {
      hasLeftPadding: !1,
      isAboveSelected: !1,
      isBelowSelected: !1,
      isDraggable: !1,
      isFirstSelectableCell: !1,
      isHovered: a,
      isLastSelectableCell: !1,
      isSelected: !1,
      item: e.item,
      itemIndex: e.itemIndex,
      onClick: e.clearSelected,
      onContextMenu: e.clearSelected,
      onDragEnd: e.handleDragEnd,
      onDragStart: e.clearSelected,
      renderRowCell: e.gutterColumn.renderRowCell
    }), e.columns.map(({
      renderRowCell: t
    }, i) => jsx(k, {
      hasLeftPadding: i > 0,
      isAboveSelected: e.isAboveSelected,
      isBelowSelected: e.isBelowSelected,
      isDraggable: e.isDraggable,
      isFirstSelectableCell: i === 0,
      isHovered: a,
      isLastSelectableCell: i === e.columns.length - 1,
      isSelected: e.isSelected,
      item: e.item,
      itemIndex: e.itemIndex,
      onClick: e.handleClick,
      onContextMenu: e.handleContextMenu,
      onDragEnd: e.handleDragEnd,
      onDragStart: e.handleDrag,
      renderRowCell: t
    }, `ListViewCell${i}`))]
  });
}
function N(e) {
  let {
    virtualizer,
    virtualItems,
    tableRef,
    tableParentRef,
    tableHeadRef,
    tableBodyRef,
    tableParentHeight
  } = function ({
    items: e,
    updateRenderedItems: t
  }) {
    let [i, n] = useState(null);
    let a = useRef(null);
    let o = useRef(null);
    let l = useRef(null);
    let d = useRef(null);
    TN(a, 'ListView');
    let c = Kr(a);
    useLayoutEffect(() => {
      let e = a?.current;
      let t = o?.current;
      let i = d?.current;
      let r = l?.current;
      if (!e || !t || !i || !r) return;
      let u = () => {
        let e = i.children[0];
        let a = e ? e.getBoundingClientRect().height : null;
        let o = r.getBoundingClientRect().height;
        let l = c();
        let d = {
          firstRowHeight: a,
          scrollOffset: t.getBoundingClientRect().y + (l?.scrollTop || 0) + o,
          tableHeadHeight: o
        };
        n(e => shallowEqual(e, d) ? e : d);
      };
      u();
      let p = new ResizeObserver(u);
      p.observe(e);
      return () => p.disconnect();
    }, [c]);
    let u = i?.firstRowHeight ?? 0;
    let p = Te({
      getScrollElement: c,
      count: e.length,
      estimateSize: useCallback(() => u, [u]),
      getItemKey: useCallback(e => `${e}-${u}`, [u]),
      overscan: 30,
      scrollPaddingStart: i ? -i.scrollOffset + 120 : 0,
      scrollPaddingEnd: i?.scrollOffset ?? 0
    });
    let m = p.getVirtualItems();
    useEffect(() => {
      t?.(m.map(t => e[t.index]));
    }, [e, t, m]);
    let h = p.getTotalSize();
    i && (h += i.tableHeadHeight);
    return {
      virtualizer: p,
      virtualItems: m,
      tableRef: a,
      tableParentRef: o,
      tableHeadRef: l,
      tableBodyRef: d,
      tableParentHeight: h
    };
  }(e);
  let [u, p] = useState();
  let [m, h] = useState();
  let [g, f] = useState(new Set());
  let {
    items,
    onSelection,
    handleDeleteKey,
    handleOpenItem,
    canSelectItem,
    updateVisibleItems
  } = e;
  _$$H({
    containerRef: tableBodyRef,
    items,
    updateVisibleItems
  });
  let O = useCallback(e => (canSelectItem && (e = new Set([...e].filter(e => canSelectItem(items[e])))), onSelection && onSelection([...e].map(e => items[e])), f(e), e), [f, onSelection, canSelectItem, items]);
  let D = useCallback(() => {
    h(void 0);
    p(void 0);
    O(new Set());
  }, [O, h, p]);
  let L = useCallback(() => {
    e.keepSelectionOnFocusLost || D();
  }, [D, e.keepSelectionOnFocusLost]);
  let F = useCallback(e => {
    tableBodyRef.current?.contains(e.relatedTarget) || e.relatedTarget?.role === 'menu' || L();
  }, [L, tableBodyRef]);
  let M = useCallback(() => {
    tableRef.current?.focus({
      preventScroll: !0
    });
  }, [tableRef]);
  let j = (t, i, n = !1, r = !1) => {
    let a;
    if ((i.ctrlKey || i.metaKey) && !r) {
      if (g.has(t)) {
        if (n || i.ctrlKey) return g;
        a = e.multiselectDisabled ? new Set() : new Set([...g].filter(e => e !== t));
      } else {
        a = new Set(e.multiselectDisabled ? [t] : [...g, t]);
      }
    } else if (i.shiftKey) {
      a = new Set(void 0 === m || void 0 === u || e.multiselectDisabled ? [t] : m > t ? [...[...g].filter(e => e > Math.max(u, m) || e < Math.min(u, m)), ...[...new Array(m - t + 1)].map((e, i) => i + t)] : [...[...g].filter(e => e > Math.max(u, m) || e < Math.min(u, m)), ...[...new Array(t - m + 1)].map((e, t) => t + m)]);
    } else {
      if (n && g.has(t)) return g;
      a = new Set([t]);
    }
    a.size ? (a.size === 1 && h(t), p(t)) : (h(void 0), p(void 0));
    return a = O(a);
  };
  let U = t => i => {
    if (i.stopPropagation(), (i.detail === 2 || BrowserInfo.mobile || BrowserInfo.tablet) && handleOpenItem) {
      handleOpenItem(e.items[t], i, t);
    } else {
      let n = j(t, i);
      if (n.size && !n.has(t)) {
        let i = t + 1;
        for (; i < e.items.length;) {
          if (n.has(i)) {
            p(i);
            h(i);
            return;
          }
          i++;
        }
        for (i = t - 1; i >= 0;) {
          if (n.has(i)) {
            p(i);
            h(i);
            return;
          }
          i--;
        }
      } else {
        n.size && !i.shiftKey && h(t);
      }
    }
  };
  let B = t => i => {
    let n = j(t, i, !0);
    e.handleContextMenu && n.has(t) && (i.stopPropagation(), i.preventDefault(), e.handleContextMenu([...n].map(t => e.items[t]), i, t));
  };
  let V = t => i => {
    if (e.isDraggable) {
      let n = [...j(t, i, !0)].map(t => e.items[t]);
      e.handleDragImage(n, i);
    }
  };
  let G = useHandleKeyboardEvent('listViewKeyDown', 'keydown', t => {
    switch (t.key) {
      case 'a':
        if (!t.ctrlKey && !t.metaKey || e.multiselectDisabled) break;
        O(new Set([...Array.from({
          length: e.items.length
        }).keys()]));
        p(e.items.length - 1);
        h(0);
        t.preventDefault();
        t.stopPropagation();
        break;
      case 'Delete':
      case 'Backspace':
        handleDeleteKey && (handleDeleteKey(e.items.filter((e, t) => g.has(t))), D(), t.stopPropagation(), t.preventDefault());
        break;
      case 'Enter':
        if (g.size === 1 && handleOpenItem) {
          let e = [...g][0];
          handleOpenItem(items[e], t, e);
        }
        t.stopPropagation();
        t.preventDefault();
        break;
      case 'ArrowUp':
        if (void 0 === u || void 0 === m) {
          j(e.items.length - 1, t, !1, !0);
        } else if (t.altKey) {
          j(0, t, !1, !0);
        } else {
          let e = u;
          if (t.shiftKey && u < m) {
            for (; e > 0 && g.has(e - 1);) e--;
          }
          e > 0 && j(e - 1, t, !1, !0);
        }
        t.preventDefault();
        t.stopPropagation();
        break;
      case 'ArrowDown':
        if (void 0 === u || void 0 === m) {
          j(0, t, !1, !0);
        } else if (t.altKey) {
          j(e.items.length - 1, t, !1, !0);
        } else {
          let i = u;
          if (t.shiftKey && u > m) {
            for (; i < e.items.length - 1 && g.has(i + 1);) i++;
          }
          i < e.items.length - 1 && j(i + 1, t, !1, !0);
        }
        t.preventDefault();
        t.stopPropagation();
        break;
      case 'Tab':
        t.shiftKey ? u === 0 || void 0 === u ? D() : (h(u - 1), p(u - 1), O(new Set([u - 1]))) : u === items.length - 1 ? D() : void 0 === u ? (h(0), p(0), O(new Set([0]))) : (h(u + 1), p(u + 1), O(new Set([u + 1])));
    }
  });
  useEffect(() => {
    void 0 !== u && virtualizer.scrollToIndex(u, {
      align: 'auto',
      behavior: virtualizer.getTotalSize() > 1e4 ? 'auto' : 'smooth'
    });
  }, [u, virtualizer]);
  let z = virtualItems.map(t => {
    let r = t.index;
    let a = e.items[r];
    return jsx(R, {
      ariaLabel: e.getAriaLabel ? e.getAriaLabel(a) : void 0,
      clearSelected: D,
      columns: e.columns,
      gutterColumn: e.gutterColumn,
      handleClick: U(r),
      handleContextMenu: B(r),
      handleDrag: V(r),
      handleDragEnd: e.isDraggable ? e.handleDragEnd : noop,
      isAboveSelected: g.has(r - 1),
      isBelowSelected: g.has(r + 1),
      isDraggable: !!e.isDraggable,
      isSelected: g.has(r),
      item: a,
      itemIndex: r,
      refocusParent: M,
      virtualizationStyle: {
        transform: `translateY(${virtualItems[0].start}px)`
      }
    }, `ListViewRow${r}`);
  });
  return jsx('div', {
    style: {
      height: tableParentHeight,
      flex: 1
    },
    ref: tableParentRef,
    children: jsxs('table', {
      'ref': tableRef,
      'onKeyDown': G,
      'onBlur': F,
      'tabIndex': 0,
      'aria-multiselectable': !e.multiselectDisabled,
      ...props(P.tableStyles, !e.gutterColumn && P.noGutterPaddingLeft),
      'children': [jsx('thead', {
        ref: tableHeadRef,
        children: jsx(T, {
          hasGutterColumn: !!e.gutterColumn,
          columns: e.columns,
          handleSortBy: e.handleSortBy,
          currentSort: e.currentSort
        })
      }), jsx('tbody', {
        ref: tableBodyRef,
        children: z
      })]
    })
  });
}
let P = {
  tableStyles: {
    borderCollapse: 'xdjjs7w',
    tableLayout: 'x140o2bo',
    width: 'xh8yej3',
    textAlign: 'xdpxx8g',
    userSelect: 'x87ps6o',
    marginBottom: 'x1yztbdb',
    height: 'xjm9jq1',
    paddingRight: 'x1m2p0i2 xe9ede5',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  },
  noGutterPaddingLeft: {
    paddingLeft: 'x1tudf5h x1mbcpsd',
    paddingInlineStart: null,
    paddingInlineEnd: null,
    $$css: !0
  }
};
export function $$O0(e) {
  let [t, i] = useState(null);
  let h = useStore();
  let g = r => (p, m) => {
    if (m.stopPropagation(), e.canSelectedItemsBeDragged && !e.canSelectedItemsBeDragged(p)) {
      m.preventDefault();
      return;
    }
    m.dataTransfer.effectAllowed = 'move';
    let g = document.createElement('div');
    g.className = cssBuilderInstance.absolute.zIndexMinus1.$;
    g.style.left = '-9999px';
    m.currentTarget.appendChild(g);
    createRoot(g).render(jsx(LivegraphProvider, {
      userId: getInitialOptions().user_data?.id || null,
      children: jsx(AtomProvider, {
        children: jsx(Provider, {
          store: h,
          children: jsx($$A, {
            multiselectDisabled: !!e.multiselectDisabled,
            selectedItems: p,
            renderDragImage: r
          })
        })
      })
    }));
    let f = new DragDataHandler(m.dataTransfer);
    f.setDragImage(g, 64, 32);
    e.handleDragDataTransfer && e.handleDragDataTransfer(p, f);
    t && t.remove();
    i(g);
  };
  let f = () => {
    t && t.remove();
    i(null);
  };
  switch (e.viewType) {
    case ViewMode.LIST:
      return jsx(N, {
        canSelectItem: e.canSelectItem,
        columns: e.listViewProps.columns,
        currentSort: e.listViewProps.currentSort,
        doNotFocusOnLoad: e.doNotFocusOnLoad,
        getAriaLabel: e.getAriaLabel,
        gutterColumn: e.listViewProps.gutterColumn,
        handleContextMenu: e.handleContextMenu,
        handleDeleteKey: e.handleDeleteKey,
        handleDragEnd: f,
        handleDragImage: e.listViewProps.renderItemDragImage ? g(e.listViewProps.renderItemDragImage) : () => {},
        handleOpenItem: e.handleOpenItem,
        handleSortBy: e.listViewProps.handleSortBy,
        isDraggable: e.isDraggable && !!e.listViewProps.renderItemDragImage,
        items: e.items,
        keepSelectionOnFocusLost: e.keepSelectionOnFocusLost,
        multiselectDisabled: e.multiselectDisabled,
        onSelection: e.onSelection,
        updateRenderedItems: e.updateRenderedItems,
        updateVisibleItems: e.updateVisibleItems
      });
    case ViewMode.GRID:
      return jsx(_$$g, {
        canSelectItem: e.canSelectItem,
        containerStyle: e.gridViewProps.containerStyle,
        disableScrollTo: e.gridViewProps.disableScrollTo,
        disableTabInGrid: e.gridViewProps.disableTabInGrid,
        doNotFocusOnLoad: e.doNotFocusOnLoad,
        forceSingleClick: e.gridViewProps.forceSingleClick,
        getAriaLabel: e.getAriaLabel,
        handleContextMenu: e.handleContextMenu,
        handleDeleteKey: e.handleDeleteKey,
        handleDragEnd: f,
        handleDragImage: e.gridViewProps.renderTileDragImage ? g(e.gridViewProps.renderTileDragImage) : () => {},
        handleOpenItem: e.handleOpenItem,
        isDraggable: e.isDraggable && !!e.gridViewProps.renderTileDragImage,
        items: e.items,
        keepSelectionOnFocusLost: e.keepSelectionOnFocusLost,
        multiselectDisabled: e.multiselectDisabled,
        nestedFocus: e.gridViewProps.nestedFocus,
        onSelection: e.onSelection,
        renderTile: e.gridViewProps.renderTile,
        renderTileFooter: e.gridViewProps.renderTileFooter,
        showHoverBorder: e.gridViewProps.showHoverBorder,
        tileBorderRadius: e.gridViewProps.tileBorderRadius,
        tileBorderStyle: e.gridViewProps.tileBorderStyle,
        tileClassName: e.gridViewProps.tileClassName,
        tileFooterPosition: e.gridViewProps.tileFooterPosition,
        trailingGridElements: e.gridViewProps.trailingGridElements,
        updateRenderedItems: e.updateRenderedItems,
        updateVisibleItems: e.updateVisibleItems
      });
    default:
      return null;
  }
}
export const A = $$O0;