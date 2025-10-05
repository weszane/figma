import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { memo, useState, useRef, useMemo, useCallback, useEffect, useLayoutEffect, PureComponent, Component, createRef } from "react";
import { z } from "../vendor/999105";
import { noop } from 'lodash-es';
import { Checkbox } from "../905/274480";
import { HiddenLabel } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { memoizeByArgs } from "../figma_app/815945";
import u from "classnames";
import { parsePxInt } from "../figma_app/783094";
import { isInputElement } from "../figma_app/243213";
import { trackedSvgComponent } from "../figma_app/637027";
import { Wi, JR } from "../figma_app/162641";
import { P as _$$P } from "../905/347284";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { styleBuilderInstance } from "../905/941192";
import v, { AutoLayout } from "../905/470281";
import { TrackingProvider } from "../figma_app/831799";
import { RCSMessageType } from "../905/135526";
import { iA, Hj } from "../905/682977";
import { LI } from "../905/832675";
import { UE, sM, nM, uH, BA, D as _$$D, I6, E0, eO as _$$eO, U1, wY, TH, jG, NM, ln, T3, p$, _Z, KY, SB, cr, SM, Ym, ry, jm, hw } from "../figma_app/527041";
import { B6G, fAD } from "../figma_app/27776";
import { A as _$$A } from "../svg/927263";
var p = u;
let k = {
  action: "Clear Selection"
};
let R = memo(e => {
  let t = e.isReversed ? "\u2191" : "\u2193";
  return jsxs("div", {
    className: `${LI} ${e.className || ""}`,
    onClick: e.onClick,
    "data-onboarding-key": e.onboardingKey,
    children: [e.nameElement ? e.nameElement : e.name, e.isSelected && jsx("div", {
      className: UE,
      children: t
    }), e.extraContent]
  });
});
R.displayName = "MultiSelectHeader";
let N = parsePxInt(B6G);
function P(e) {
  let {
    items,
    getItemKey,
    unselectableItemKeys,
    onSelectedItemsChange,
    onToggleSelectAll,
    sortState,
    isLoading,
    singleSelect,
    styleOverrideClassNames,
    itemBasedStyleOverride,
    shouldRoundBordersForSelectedRows,
    highlightState,
    noCheckboxColumn,
    columns,
    rightActionColumns,
    isRowClickable,
    onRowClick,
    onScroll,
    onSetSortState,
    disabled,
    selectAllDisabled,
    actionBarClassName,
    scrollContainerInnerClassName,
    minContentWidth,
    isBannerHeightDynamic,
    rowHeightOverride,
    paddingEnd,
    scrollContentRef,
    hasNewScrollContext,
    scrollBarAlwaysVisible,
    getTotalSelected,
    itemTypeContext,
    actionBar,
    footer,
    hideHeader,
    onFetchMore,
    scrollAwayContent,
    stickyBanner,
    stickyContent,
    emptyContent
  } = e;
  let [eh, eg] = useState(new Set());
  let [ef, e_] = useState(!1);
  let eA = useRef(null);
  let ey = useRef(null);
  let eb = useRef(null);
  let ev = useMemo(() => memoizeByArgs((e, t) => e.map(e => t(e))), []);
  let eI = useCallback(() => {
    let e = ev(items, getItemKey);
    return unselectableItemKeys ? e.filter(e => !unselectableItemKeys?.has(e)) : e;
  }, [items, getItemKey, unselectableItemKeys, ev]);
  let eE = useMemo(() => memoizeByArgs((e, t, i, n) => e.filter(e => t.has(n(e)) && !i?.has(n(e)))), []);
  let ex = useRef(sortState);
  let eS = useRef(items.length);
  let ew = useRef(isLoading);
  let {
    columnName,
    isReversed
  } = v;
  useEffect(() => {
    if (ex.current.columnName !== columnName || ex.current.isReversed !== isReversed || eS.current !== items.length) {
      if (eA.current = null, (ew.current || isLoading) && eS.current < items.length && ef) {
        let e = items.slice(eS.current).map(e => getItemKey(e));
        eg(t => new Set([...t, ...e]));
      }
      isLoading && 0 === items.length && ef && (eg(new Set()), e_(!1), onToggleSelectAll?.(!0));
    }
    ex.current = {
      columnName,
      isReversed
    };
    eS.current = items.length;
    ew.current = isLoading;
  }, [columnName, isReversed, items, isLoading, ef, onToggleSelectAll, getItemKey]);
  let ek = useCallback(() => {
    onScroll && onScroll();
  }, [onScroll]);
  let eR = useCallback(e => {
    onSetSortState(e);
  }, [onSetSortState]);
  let eN = useCallback((e, n, r = !1) => {
    eA.current = null;
    let o = onSelectedItemsChange ?? noop;
    n ? r ? (eg(new Set()), e_(!1), o([])) : (eg(t => {
      let i = new Set(t);
      e.forEach(e => i.$$delete(e));
      return i;
    }), e_(e => e), o(eE(items, new Set([...eh].filter(t => !e.includes(t))), unselectableItemKeys, getItemKey))) : (eg(t => new Set([...e, ...t])), e_(e => e || r), o(eE(items, new Set([...e, ...eh]), unselectableItemKeys, getItemKey)));
  }, [onSelectedItemsChange, items, unselectableItemKeys, getItemKey, eh, eE]);
  let eP = useCallback(e => {
    let t = getItemKey(e);
    return eh.has(t) && !unselectableItemKeys?.has(t);
  }, [eh, getItemKey, unselectableItemKeys]);
  let eO = useCallback(e => {
    let n = getItemKey(e);
    if (unselectableItemKeys?.has(n)) return;
    let r = new Set(singleSelect ? [] : eh);
    eA.current = n;
    eP(e) ? r.$$delete(n) : r.add(n);
    eg(r);
    onSelectedItemsChange && onSelectedItemsChange(eE(items, r, unselectableItemKeys, getItemKey));
  }, [singleSelect, eh, eP, onSelectedItemsChange, items, unselectableItemKeys, getItemKey, eE]);
  let eD = useCallback((e, n, r) => {
    if (e === n) return;
    let s = items.map(e => getItemKey(e)).filter(e => !unselectableItemKeys?.has(e));
    let o = s.indexOf(e);
    let l = s.indexOf(n);
    if (-1 === o || -1 === l) return;
    let d = Math.min(o, l);
    let c = Math.max(o, l);
    let u = s.slice(d, c + 1);
    r ? eN(u, !0) : eN(u, !1);
  }, [items, getItemKey, unselectableItemKeys, eN]);
  let eL = useCallback(e => {
    let t = getItemKey(e);
    return !unselectableItemKeys?.has(t);
  }, [getItemKey, unselectableItemKeys]);
  let eF = useCallback((e, t) => {
    if (!eL(t)) return;
    let n = getItemKey(t);
    if (e.nativeEvent instanceof MouseEvent && e.nativeEvent.shiftKey && !singleSelect) {
      let e;
      if (1 === eh.size ? e = [...eh][0] : eA.current && (e = eA.current), e && e !== n) {
        let t = eh.has(n);
        eD(e, n, t);
        eA.current = n;
        return;
      }
    }
    eO(t);
  }, [eL, getItemKey, singleSelect, eh, eD, eO]);
  let eM = useCallback(e => isRowClickable ? isRowClickable(e) : eL(e), [isRowClickable, eL]);
  let ej = useCallback((e, t) => {
    if (!isInputElement(e.target) && eM(t)) return eh.size > 0 ? eF(e, t) : onRowClick?.(t);
  }, [eM, eh.size, eF, onRowClick]);
  let eU = useCallback(e => {
    let n = getItemKey(items[e]);
    if (!eh.has(n)) return !1;
    let r = items[e - 1];
    if (!r) return !0;
    let a = getItemKey(r);
    return !eh.has(a);
  }, [items, getItemKey, eh]);
  let eB = useCallback(e => {
    let n = getItemKey(items[e]);
    if (!eh.has(n)) return !1;
    let r = items[e + 1];
    if (!r) return !0;
    let a = getItemKey(r);
    return !eh.has(a);
  }, [items, getItemKey, eh]);
  let eV = useCallback((e, t, r) => {
    let a = eP(e);
    let d = getItemKey(e);
    let c = p()(sM, styleOverrideClassNames?.unselectedCheckbox);
    let u = itemBasedStyleOverride ? itemBasedStyleOverride(e) : void 0;
    let m = p()(nM, styleOverrideClassNames?.row, u?.row);
    let h = p()(styleOverrideClassNames?.selectedRow, u?.selectedRow);
    let g = eL(e);
    let f = t => {
      eF(t, e);
    };
    let _ = jsx("div", {
      className: a ? void 0 : c,
      children: jsx(Checkbox, {
        label: jsx(HiddenLabel, {
          children: function () {
            let t = "name" in e && e.name ? e.name : void 0;
            return t ? a ? getI18nString("multi_select_list.checkbox_aria_label_deselect", {
              name: t
            }) : getI18nString("multi_select_list.checkbox_aria_label_select", {
              name: t
            }) : a ? getI18nString("multi_select_list.checkbox_aria_label_without_name_deselect") : getI18nString("multi_select_list.checkbox_aria_label_without_name_select");
          }()
        }),
        checked: a,
        "data-onboarding-key": a ? "msl_selected_row_onboarding_key" : void 0,
        "data-testid": "multi-select-list-select-item-checkbox",
        onChange: (e, {
          event: t
        }) => f(t)
      })
    });
    let A = e.tooltipText;
    let b = [];
    shouldRoundBordersForSelectedRows && (b.push(uH), a && !eU(r) && b.push(BA), a && !eB(r) && b.push(_$$D));
    return jsxs(iA, {
      className: p()(nM, m, a ? h : void 0, ...b, {
        [I6]: d === highlightState?.itemKey
      }),
      selected: a,
      onClick: t => ej(t, e),
      tooltipText: A,
      useAdminTableStyles: !0,
      dataTestId: "multi-select-list-table-trackable-row",
      children: [!noCheckboxColumn && jsx("div", {
        className: p()(E0, styleOverrideClassNames?.checkboxColumn),
        children: g ? _ : null
      }), columns.map(i => jsx("div", {
        className: i.className,
        children: i.cellComponent(e, t, highlightState ?? {
          itemKey: null,
          setItemKey: noop
        }, r)
      }, i.name)), rightActionColumns && jsx(L, {
        rightActionColumns,
        areDropdownsDisabled: t,
        item: e,
        itemMetadata: {
          isClickable: eM(e)
        }
      })]
    }, d);
  }, [eP, getItemKey, styleOverrideClassNames, itemBasedStyleOverride, eL, eF, shouldRoundBordersForSelectedRows, eU, eB, highlightState, noCheckboxColumn, columns, rightActionColumns, eM, ej]);
  let eG = useCallback(e => {
    let t = 0;
    e < 2 ? t = 1 : e < 10 && (t = 1 - (e - 2 + 1) / 9);
    return jsx("div", {
      style: {
        opacity: t
      },
      "data-testid": "multi-select-list-loading-row",
      children: jsxs(iA, {
        className: p()(nM, styleOverrideClassNames?.row),
        useAdminTableStyles: !0,
        dataTestId: "multi-select-list-table-loading-row",
        children: [!noCheckboxColumn && jsx("div", {
          className: p()(E0, styleOverrideClassNames?.checkboxColumn)
        }), columns.map((t, i) => t.name ? jsx("div", {
          className: t.className,
          children: t.loadingComponent ? t.loadingComponent : jsx("div", {
            style: styleBuilderInstance.add({
              width: `${50 * Math.abs(Math.sin(e + i + 1)) + 30}%`
            }).$,
            children: jsx(Wi, {
              className: cssBuilderInstance.h12.$,
              animationType: JR.SHIMMER
            })
          })
        }, t.name) : jsx("div", {
          className: p()(cssBuilderInstance.wFull.$, t.className)
        }, t.name)), rightActionColumns && jsx(L, {
          rightActionColumns
        })]
      })
    }, e);
  }, [styleOverrideClassNames, noCheckboxColumn, columns, rightActionColumns]);
  let ez = useCallback(e => {
    let t = e.length === eI().length;
    let i = e.length > 0;
    let r = 0 === e.length;
    let a = eI().length > 0 && !selectAllDisabled;
    let s = jsx(Checkbox, {
      label: jsx(HiddenLabel, {
        children: i ? getI18nString("multi_select_list.deselect_all") : getI18nString("multi_select_list.select_all")
      }),
      checked: i,
      mixed: i && !t,
      "data-onboarding-key": "msl_header_toggle_select_all_onboarding_key",
      onChange: () => {
        r ? (eN(eI(), !1, !0), onToggleSelectAll && onToggleSelectAll(!1)) : (eN(eI(), !0, !0), onToggleSelectAll && onToggleSelectAll(!0));
      },
      "data-testid": "multi-select-list-select-all-checkbox"
    });
    return jsxs(Hj, {
      header: !0,
      useAdminTableStyles: !0,
      className: p()(disabled ? _$$eO : U1, styleOverrideClassNames?.header),
      dataTestId: "multi-select-list-table-header-row",
      children: [!noCheckboxColumn && jsx("div", {
        className: p()(E0, styleOverrideClassNames?.checkboxColumn),
        children: a && s
      }), columns.map(e => jsx("div", {
        className: e.className,
        children: jsx(R, {
          className: e.headerClassName,
          extraContent: e.headerExtraContent,
          name: e.name,
          nameElement: e.nameElement,
          isReversed: sortState.isReversed,
          isSelected: e.sorting_key ? e.sorting_key === sortState.columnName : e.name === sortState.columnName,
          onClick: e.getSortValue ? () => eR(e.sorting_key ?? e.name) : void 0,
          onboardingKey: e.onboardingKey
        })
      }, e.name)), rightActionColumns && jsx(L, {
        rightActionColumns
      })]
    });
  }, [eI, eN, onToggleSelectAll, selectAllDisabled, disabled, styleOverrideClassNames, noCheckboxColumn, columns, sortState, eR, rightActionColumns]);
  let eH = useMemo(() => eE(items, eh, unselectableItemKeys, getItemKey), [items, eh, unselectableItemKeys, getItemKey, eE]);
  let eW = useMemo(() => isBannerHeightDynamic ? {
    top: ey?.current?.getBoundingClientRect()?.height || 0
  } : void 0, [isBannerHeightDynamic]);
  let eK = useMemo(() => isLoading && 0 === items.length, [isLoading, items.length]);
  let eY = useMemo(() => e.trackingProperties ? e.trackingProperties.batchAction : {}, [e.trackingProperties]);
  return jsxs(Fragment, {
    children: [jsx(D, {
      anyVisibleAndSelectedItems: eH.length > 0,
      highlightState
    }), jsxs("div", {
      className: p()(wY, {
        [TH]: hasNewScrollContext
      }, styleOverrideClassNames?.tableWrapper),
      children: [jsx(_$$P, {
        className: jG,
        innerClassName: p()(NM, scrollContainerInnerClassName),
        onScroll: ek,
        minContentWidth: minContentWidth || parsePxInt(fAD),
        scrollContainerRef: eb,
        scrollContentRef,
        scrollingDisabled: eK,
        horizontalScrollingDisabled: hasNewScrollContext,
        scrollBarAlways: scrollBarAlwaysVisible,
        children: jsxs(Fragment, {
          children: [jsx("div", {
            ref: ey,
            className: ln,
            children: stickyBanner
          }), jsx("div", {
            children: scrollAwayContent
          }), jsxs("div", {
            className: void 0 !== stickyBanner ? T3 : ln,
            style: eW,
            children: [jsx(TrackingProvider, {
              name: "MultiSelectList Header",
              trackingTargets: RCSMessageType.NONE,
              properties: {
                tableType: itemTypeContext.itemType
              },
              children: stickyContent
            }), !hideHeader && ez(eH)]
          }), 0 === items.length && !isLoading && jsx("div", {
            className: p$,
            children: emptyContent
          }), jsx(TrackingProvider, {
            name: "MultiSelectList - Row",
            trackingTargets: RCSMessageType.RCS,
            properties: {
              tableType: itemTypeContext.itemType
            },
            children: jsx(O, {
              totalLoaded: items.length,
              isLoading: !!isLoading,
              disabled: !!disabled,
              renderLoadingRow: eG,
              renderItem: e => eV(items[e], eH.length > 0, e),
              scrollContainerRef: eb,
              onFetchMore,
              rowHeight: rowHeightOverride ?? N,
              paddingEnd: paddingEnd || 32
            })
          })]
        })
      }), actionBar && jsx(TrackingProvider, {
        name: "MultiSelectList BatchAction",
        trackingTargets: RCSMessageType.RCS,
        properties: {
          selectedAll: ef,
          selectedCount: eH.length,
          ...eY
        },
        children: jsx("div", {
          className: eH.length > 0 ? _Z : KY,
          "data-testid": "multi-select-list-action-bar",
          children: jsxs("div", {
            className: p()(eH.length > 0 ? SB : cr, actionBarClassName),
            children: [jsx("div", {
              className: SM,
              children: itemTypeContext.getSelectedCountString(getTotalSelected ? getTotalSelected(eH, eI()) : eH.length)
            }), actionBar(eH), jsx(trackedSvgComponent, {
              className: p()(Ym, styleOverrideClassNames?.batchActionClearButton),
              svg: _$$A,
              onClick: () => {
                eN(eI(), !0, !0);
                onToggleSelectAll && onToggleSelectAll(!0);
              },
              trackingProperties: k
            })]
          })
        })
      })]
    }), footer && footer(eH)]
  });
}
function O({
  totalLoaded: e,
  isLoading: t,
  disabled: i,
  renderItem: s,
  renderLoadingRow: o,
  scrollContainerRef: l,
  onFetchMore: d,
  rowHeight: c,
  paddingEnd: u
}) {
  let p = useCallback(() => c, [c]);
  let {
    virtualItems,
    totalSize
  } = z({
    size: t || d ? e + 10 : e,
    parentRef: l,
    overscan: 15,
    estimateSize: p,
    paddingEnd: u || 32
  });
  useEffect(() => {
    let t = virtualItems[virtualItems.length - 1];
    e && d && t?.index >= e - 1 && d();
  }, [d, e, virtualItems]);
  return jsx("div", {
    className: `${i ? ry : jm}`,
    style: {
      height: totalSize
    },
    children: virtualItems.map(t => jsx("div", {
      style: {
        position: "absolute",
        top: t.start,
        left: 0,
        width: "100%",
        height: t.size
      },
      children: t.index >= e ? o(t.index - e) : s(t.index)
    }, t.index))
  });
}
function D(e) {
  let {
    anyVisibleAndSelectedItems,
    highlightState
  } = e;
  useLayoutEffect(() => {
    anyVisibleAndSelectedItems && highlightState?.itemKey && highlightState.setItemKey(null);
  }, [anyVisibleAndSelectedItems, highlightState?.itemKey, highlightState?.setItemKey]);
  return null;
}
function L({
  rightActionColumns: e,
  item: t,
  areDropdownsDisabled: i,
  itemMetadata: r
}) {
  return t && r ? jsx(AutoLayout, {
    width: "hug-contents",
    padding: {
      right: 8
    },
    children: e?.map(e => jsx("div", {
      className: p()(e.className, {
        [hw]: i
      }),
      "data-testid": "multi-select-list-right-action-column",
      children: e.cellComponent(t, r)
    }, e.name))
  }) : jsx(AutoLayout, {
    width: "hug-contents",
    padding: {
      right: 8
    },
    children: e?.map(e => jsx("div", {
      className: e.className
    }, e.name))
  });
}
P.displayName = "MultiSelectList";
class F extends PureComponent {
  render() {
    let e = this.props.isReversed ? "\u2191" : "\u2193";
    return jsxs("div", {
      className: `${LI} ${this.props.className || ""}`,
      onClick: this.props.onClick,
      "data-onboarding-key": this.props.onboardingKey,
      children: [this.props.nameElement ? this.props.nameElement : this.props.name, this.props.isSelected && jsx("div", {
        className: UE,
        children: e
      }), this.props.extraContent]
    });
  }
}
F.displayName = "MultiSelectHeader";
let M = parsePxInt(B6G);
class j extends Component {
  constructor(e) {
    super(e);
    this.rangeSelectAnchorRowKey = null;
    this.setScrollTopState = () => {
      this.setState({
        scrollTop: this.nextScrollTop
      });
      this.frameRequest = null;
    };
    this.onScroll = e => {
      this.nextScrollTop = e;
      null == this.frameRequest && (this.frameRequest = requestAnimationFrame(this.setScrollTopState));
      this.props.onScroll && this.props.onScroll();
    };
    this.itemKeys = memoizeByArgs((e, t) => e.map(e => t(e)));
    this.selectableItemKeys = () => {
      let e = this.itemKeys(this.props.items, this.props.getItemKey);
      return this.props.unselectableItemKeys ? e.filter(e => !this.props.unselectableItemKeys?.has(e)) : e;
    };
    this.toggleSelectMultiple = (e, t, i = !1) => {
      this.rangeSelectAnchorRowKey = null;
      let n = this.props.onSelectedItemsChange ?? noop;
      if (t) {
        if (i) {
          this.setState({
            selectedItemKeys: new Set(),
            selectedAll: !1
          });
          n([]);
        } else {
          let t = new Set(this.state.selectedItemKeys);
          e.forEach(e => t.$$delete(e));
          this.setState(e => ({
            selectedItemKeys: t,
            selectedAll: e.selectedAll
          }));
          n(this.filterToSelected(this.props.items, t, this.props.unselectableItemKeys, this.props.getItemKey));
        }
      } else {
        let t = new Set([...e, ...this.state.selectedItemKeys]);
        this.setState(e => ({
          selectedItemKeys: t,
          selectedAll: e.selectedAll || i
        }));
        n(this.filterToSelected(this.props.items, t, this.props.unselectableItemKeys, this.props.getItemKey));
      }
    };
    this.isItemSelected = e => {
      let t = this.props.getItemKey(e);
      return this.state.selectedItemKeys.has(t) && !this.props.unselectableItemKeys?.has(t);
    };
    this.toggleSelect = e => {
      let t = this.props.getItemKey(e);
      if (this.props.unselectableItemKeys?.has(t)) return;
      let i = new Set(this.props.singleSelect ? [] : this.state.selectedItemKeys);
      this.rangeSelectAnchorRowKey = t;
      this.isItemSelected(e) ? i.$$delete(t) : i.add(t);
      this.setState({
        selectedItemKeys: i
      });
      this.props.onSelectedItemsChange && this.props.onSelectedItemsChange(this.filterToSelected(this.props.items, i, this.props.unselectableItemKeys, this.props.getItemKey));
    };
    this.selectRowsInRange = (e, t, i) => {
      if (e === t) return;
      let n = this.props.items.map(e => this.props.getItemKey(e)).filter(e => !this.props.unselectableItemKeys?.has(e));
      let r = n.indexOf(e);
      let a = n.indexOf(t);
      if (-1 === r || -1 === a) return;
      let s = Math.min(r, a);
      let o = Math.max(r, a);
      let l = n.slice(s, o + 1);
      i ? this.toggleSelectMultiple(l, !0) : this.toggleSelectMultiple(l, !1);
    };
    this.isItemSelectable = e => {
      let t = this.props.getItemKey(e);
      return !this.props.unselectableItemKeys?.has(t);
    };
    this.onRowSelect = (e, t) => {
      if (!this.isItemSelectable(t)) return;
      let i = this.props.getItemKey(t);
      if (e.nativeEvent instanceof MouseEvent && e.nativeEvent.shiftKey && !this.props.singleSelect) {
        let e;
        if (1 === this.state.selectedItemKeys.size ? e = [...this.state.selectedItemKeys][0] : this.rangeSelectAnchorRowKey && (e = this.rangeSelectAnchorRowKey), e && e !== i) {
          let t = this.state.selectedItemKeys.has(i);
          this.selectRowsInRange(e, i, t);
          this.rangeSelectAnchorRowKey = i;
          return;
        }
      }
      this.toggleSelect(t);
    };
    this.isRowClickable = e => this.props.isRowClickable ? this.props.isRowClickable(e) : this.isItemSelectable(e);
    this.onRowClick = (e, t) => {
      if (!isInputElement(e.target) && this.isRowClickable(t)) return this.state.selectedItemKeys.size > 0 ? this.onRowSelect(e, t) : this.props.onRowClick?.(t);
    };
    this.isFirstInSelectedGroup = e => {
      let t = this.props.items[e];
      let i = this.props.getItemKey(t);
      if (!this.state.selectedItemKeys.has(i)) return !1;
      let n = this.props.items[e - 1];
      if (!n) return !0;
      let r = this.props.getItemKey(n);
      return !this.state.selectedItemKeys.has(r);
    };
    this.isLastInSelectedGroup = e => {
      let t = this.props.items[e];
      let i = this.props.getItemKey(t);
      if (!this.state.selectedItemKeys.has(i)) return !1;
      let n = this.props.items[e + 1];
      if (!n) return !0;
      let r = this.props.getItemKey(n);
      return !this.state.selectedItemKeys.has(r);
    };
    this.rowWithCheckbox = (e, t, i) => {
      let r = this.isItemSelected(e);
      let a = this.props.getItemKey(e);
      let d = p()(sM, this.props.styleOverrideClassNames?.unselectedCheckbox);
      let c = this.props.itemBasedStyleOverride ? this.props.itemBasedStyleOverride(e) : void 0;
      let u = p()(nM, this.props.styleOverrideClassNames?.row, c?.row);
      let m = p()(this.props.styleOverrideClassNames?.selectedRow, c?.selectedRow);
      let h = t => {
        this.onRowSelect(t, e);
      };
      let g = e.tooltipText;
      let f = [];
      this.props.shouldRoundBordersForSelectedRows && (f.push(uH), r && !this.isFirstInSelectedGroup(i) && f.push(BA), r && !this.isLastInSelectedGroup(i) && f.push(_$$D));
      return jsxs(iA, {
        className: p()(nM, u, r ? m : void 0, ...f, {
          [I6]: a === this.props.highlightState?.itemKey
        }),
        selected: r,
        onClick: t => this.onRowClick(t, e),
        tooltipText: g,
        useAdminTableStyles: !0,
        dataTestId: "multi-select-list-table-trackable-row",
        children: [!this.props.noCheckboxColumn && jsx("div", {
          className: p()(E0, this.props.styleOverrideClassNames?.checkboxColumn),
          children: this.isItemSelectable(e) ? jsx("div", {
            className: r ? void 0 : d,
            children: jsx(Checkbox, {
              label: jsx(HiddenLabel, {
                children: function () {
                  let t = "name" in e && e.name ? e.name : void 0;
                  return t ? r ? getI18nString("multi_select_list.checkbox_aria_label_deselect", {
                    name: t
                  }) : getI18nString("multi_select_list.checkbox_aria_label_select", {
                    name: t
                  }) : r ? getI18nString("multi_select_list.checkbox_aria_label_without_name_deselect") : getI18nString("multi_select_list.checkbox_aria_label_without_name_select");
                }()
              }),
              checked: r,
              "data-onboarding-key": r ? "msl_selected_row_onboarding_key" : void 0,
              "data-testid": "multi-select-list-select-item-checkbox",
              onChange: (e, {
                event: t
              }) => h(t)
            })
          }) : null
        }), this.props.columns.map(r => jsx("div", {
          className: r.className,
          children: r.cellComponent(e, t, this.props.highlightState ?? {
            itemKey: null,
            setItemKey: noop
          }, i)
        }, r.name)), this.props.rightActionColumns && jsx(V, {
          rightActionColumns: this.props.rightActionColumns,
          areDropdownsDisabled: t,
          item: e,
          itemMetadata: {
            isClickable: this.isRowClickable(e)
          }
        })]
      }, a);
    };
    this.renderLoadingRow = e => {
      let t = 0;
      e < 2 ? t = 1 : e < 10 && (t = 1 - (e - 2 + 1) / 9);
      return jsx("div", {
        style: {
          opacity: t
        },
        "data-testid": "multi-select-list-loading-row",
        children: jsxs(iA, {
          className: p()(nM, this.props.styleOverrideClassNames?.row),
          useAdminTableStyles: !0,
          dataTestId: "multi-select-list-table-loading-row",
          children: [!this.props.noCheckboxColumn && jsx("div", {
            className: p()(E0, this.props.styleOverrideClassNames?.checkboxColumn)
          }), this.props.columns.map((t, i) => t.name ? jsx("div", {
            className: t.className,
            children: t.loadingComponent ? t.loadingComponent : jsx("div", {
              style: styleBuilderInstance.add({
                width: `${50 * Math.abs(Math.sin(e + i + 1)) + 30}%`
              }).$,
              children: jsx(Wi, {
                className: cssBuilderInstance.h12.$,
                animationType: JR.SHIMMER
              })
            })
          }, t.name) : jsx("div", {
            className: p()(cssBuilderInstance.wFull.$, t.className)
          }, t.name)), this.props.rightActionColumns && jsx(V, {
            rightActionColumns: this.props.rightActionColumns
          })]
        })
      }, e);
    };
    this.filterToSelected = memoizeByArgs((e, t, i, n) => e.filter(e => t.has(n(e)) && !i?.has(n(e))));
    this.state = {
      scrollTop: 0,
      selectedItemKeys: new Set(),
      selectedAll: !1
    };
    this.stickBannerRef = createRef();
    this.scrollContainerRef = createRef();
  }
  componentDidUpdate(e, t) {
    if (e.sortState.columnName !== this.props.sortState.columnName || e.sortState.isReversed !== this.props.sortState.isReversed || e.items.length !== this.props.items.length) {
      if (this.rangeSelectAnchorRowKey = null, (e.isLoading || this.props.isLoading) && e.items.length < this.props.items.length && this.state.selectedAll) {
        let t = this.props.items.slice(e.items.length).map(e => this.props.getItemKey(e));
        this.setState(e => ({
          selectedItemKeys: new Set([...e.selectedItemKeys, ...t])
        }));
      }
      this.props.isLoading && 0 === this.props.items.length && this.state.selectedAll && (this.setState({
        selectedItemKeys: new Set(),
        selectedAll: !1
      }), this.props.onToggleSelectAll?.(!0));
    }
  }
  onHeaderClick(e) {
    this.props.onSetSortState(e);
  }
  renderColumnHeaders(e) {
    let t = e.length === this.selectableItemKeys().length;
    let i = e.length > 0;
    let r = 0 === e.length;
    let a = this.selectableItemKeys().length > 0 && !this.props.selectAllDisabled;
    let s = jsx(Checkbox, {
      label: jsx(HiddenLabel, {
        children: i ? getI18nString("multi_select_list.deselect_all") : getI18nString("multi_select_list.select_all")
      }),
      checked: i,
      mixed: i && !t,
      "data-onboarding-key": "msl_header_toggle_select_all_onboarding_key",
      onChange: () => {
        r ? (this.toggleSelectMultiple(this.selectableItemKeys(), !1, !0), this.props.onToggleSelectAll && this.props.onToggleSelectAll(!1)) : (this.toggleSelectMultiple(this.selectableItemKeys(), !0, !0), this.props.onToggleSelectAll && this.props.onToggleSelectAll(!0));
      },
      "data-testid": "multi-select-list-select-all-checkbox"
    });
    return jsxs(Hj, {
      header: !0,
      useAdminTableStyles: !0,
      className: p()(this.props.disabled ? _$$eO : U1, this.props.styleOverrideClassNames?.header),
      dataTestId: "multi-select-list-table-header-row",
      children: [!this.props.noCheckboxColumn && jsx("div", {
        className: p()(E0, this.props.styleOverrideClassNames?.checkboxColumn),
        children: a && s
      }), this.props.columns.map(e => jsx("div", {
        className: e.className,
        children: jsx(F, {
          className: e.headerClassName,
          extraContent: e.headerExtraContent,
          name: e.name,
          nameElement: e.nameElement,
          isReversed: this.props.sortState.isReversed,
          isSelected: e.sorting_key ? e.sorting_key === this.props.sortState.columnName : e.name === this.props.sortState.columnName,
          onClick: e.getSortValue ? () => this.onHeaderClick(e.sorting_key ?? e.name) : void 0,
          onboardingKey: e.onboardingKey
        })
      }, e.name)), this.props.rightActionColumns && jsx(V, {
        rightActionColumns: this.props.rightActionColumns
      })]
    });
  }
  render() {
    let e = this.filterToSelected(this.props.items, this.state.selectedItemKeys, this.props.unselectableItemKeys, this.props.getItemKey);
    let t = this.props.isBannerHeightDynamic ? {
      top: this.stickBannerRef?.current?.getBoundingClientRect()?.height || 0
    } : void 0;
    let i = this.props.isLoading && 0 === this.props.items.length;
    let r = this.props.trackingProperties ? this.props.trackingProperties.batchAction : {};
    return jsxs(Fragment, {
      children: [jsx(B, {
        anyVisibleAndSelectedItems: e.length > 0,
        highlightState: this.props.highlightState
      }), jsxs("div", {
        className: p()(wY, {
          [TH]: this.props.hasNewScrollContext
        }, this.props.styleOverrideClassNames?.tableWrapper),
        children: [jsx(_$$P, {
          className: jG,
          innerClassName: p()(NM, this.props.scrollContainerInnerClassName),
          onScroll: this.onScroll,
          minContentWidth: this.props.minContentWidth || parsePxInt(fAD),
          scrollContainerRef: this.scrollContainerRef,
          scrollContentRef: this.props.scrollContentRef,
          scrollingDisabled: i,
          horizontalScrollingDisabled: this.props.hasNewScrollContext,
          scrollBarAlways: this.props.scrollBarAlwaysVisible,
          children: jsxs(Fragment, {
            children: [jsx("div", {
              ref: this.stickBannerRef,
              className: ln,
              children: this.props.stickyBanner
            }), jsx("div", {
              children: this.props.scrollAwayContent
            }), jsxs("div", {
              className: void 0 !== this.props.stickyBanner ? T3 : ln,
              style: t,
              children: [jsx(TrackingProvider, {
                name: "MultiSelectList Header",
                trackingTargets: RCSMessageType.NONE,
                properties: {
                  tableType: this.props.itemTypeContext.itemType
                },
                children: this.props.stickyContent
              }), !this.props.hideHeader && this.renderColumnHeaders(e)]
            }), 0 === this.props.items.length && !this.props.isLoading && jsx("div", {
              className: p$,
              children: this.props.emptyContent
            }), jsx(TrackingProvider, {
              name: "MultiSelectList - Row",
              trackingTargets: RCSMessageType.RCS,
              properties: {
                tableType: this.props.itemTypeContext.itemType
              },
              children: jsx(U, {
                totalLoaded: this.props.items.length,
                isLoading: !!this.props.isLoading,
                disabled: !!this.props.disabled,
                renderLoadingRow: e => this.renderLoadingRow(e),
                renderItem: t => this.rowWithCheckbox(this.props.items[t], e.length > 0, t),
                scrollContainerRef: this.scrollContainerRef,
                onFetchMore: this.props.onFetchMore,
                rowHeight: this.props.rowHeightOverride ?? M,
                paddingEnd: this.props.paddingEnd || 32
              })
            })]
          })
        }), this.props.actionBar && jsx(TrackingProvider, {
          name: "MultiSelectList BatchAction",
          trackingTargets: RCSMessageType.RCS,
          properties: {
            selectedAll: this.state.selectedAll,
            selectedCount: e.length,
            ...r
          },
          children: jsx("div", {
            className: e.length > 0 ? _Z : KY,
            "data-testid": "multi-select-list-action-bar",
            children: jsxs("div", {
              className: p()(e.length > 0 ? SB : cr, this.props.actionBarClassName),
              children: [jsx("div", {
                className: SM,
                children: this.props.itemTypeContext.getSelectedCountString(this.props.getTotalSelected ? this.props.getTotalSelected(e, this.selectableItemKeys()) : e.length)
              }), this.props.actionBar(e), jsx(trackedSvgComponent, {
                className: p()(Ym, this.props.styleOverrideClassNames?.batchActionClearButton),
                svg: _$$A,
                onClick: () => {
                  this.toggleSelectMultiple(this.selectableItemKeys(), !0, !0);
                  this.props.onToggleSelectAll && this.props.onToggleSelectAll(!0);
                },
                trackingProperties: {
                  action: "Clear Selection"
                }
              })]
            })
          })
        })]
      }), this.props.footer && this.props.footer(e)]
    });
  }
}
function U({
  totalLoaded: e,
  isLoading: t,
  disabled: i,
  renderItem: s,
  renderLoadingRow: o,
  scrollContainerRef: l,
  onFetchMore: d,
  rowHeight: c,
  paddingEnd: u
}) {
  let p = useCallback(() => c, [c]);
  let {
    virtualItems,
    totalSize
  } = z({
    size: t || d ? e + 10 : e,
    parentRef: l,
    overscan: 15,
    estimateSize: p,
    paddingEnd: u || 32
  });
  useEffect(() => {
    let t = virtualItems[virtualItems.length - 1];
    e && d && t?.index >= e - 1 && d();
  }, [d, e, virtualItems]);
  return jsx("div", {
    className: `${i ? ry : jm}`,
    style: {
      height: totalSize
    },
    children: virtualItems.map(t => jsx("div", {
      style: {
        position: "absolute",
        top: t.start,
        left: 0,
        width: "100%",
        height: t.size
      },
      children: t.index >= e ? o(t.index - e) : s(t.index)
    }, t.index))
  });
}
function B(e) {
  let {
    anyVisibleAndSelectedItems,
    highlightState
  } = e;
  useLayoutEffect(() => {
    anyVisibleAndSelectedItems && highlightState?.itemKey && highlightState.setItemKey(null);
  }, [anyVisibleAndSelectedItems, highlightState?.itemKey, highlightState?.setItemKey]);
  return null;
}
function V({
  rightActionColumns: e,
  item: t,
  areDropdownsDisabled: i,
  itemMetadata: r
}) {
  return t && r ? jsx(AutoLayout, {
    width: "hug-contents",
    padding: {
      right: 8
    },
    children: e?.map(e => jsx("div", {
      className: p()(e.className, {
        [hw]: i
      }),
      "data-testid": "multi-select-list-right-action-column",
      children: e.cellComponent(t, r)
    }, e.name))
  }) : jsx(AutoLayout, {
    width: "hug-contents",
    padding: {
      right: 8
    },
    children: e?.map(e => jsx("div", {
      className: e.className
    }, e.name))
  });
}
export function $$G0(e) {
  return getFeatureFlags().ff_msl_v2 ? jsx(P, {
    ...e
  }) : jsx(j, {
    ...e
  });
}
j.displayName = "MultiSelectListClass";
export const Cj = $$G0;