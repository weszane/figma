import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useId, Fragment as _$$Fragment, useCallback, useMemo, useState } from "react";
import { usePopoverPrimitive, PopoverPrimitiveContainer } from "../905/691059";
import { K } from "../905/443068";
import { Button } from "../905/521428";
import { S as _$$S } from "../905/711470";
import { L as _$$L } from "../905/704296";
import { xk } from "@stylexjs/stylex";
import { analyticsEventManager } from "../905/449184";
import { Wi, JR } from "../figma_app/162641";
import { e6, hH } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { TextWithTruncation } from "../905/984674";
import { e as _$$e } from "../figma_app/522702";
import { v as _$$v } from "../905/213481";
import { Ay } from "../vendor/159563";
import { k as _$$k, p as _$$p } from "../469e6e40/343829";
import { Checkbox } from "../905/274480";
import { Label, HiddenLabel } from "../905/270045";
import { ManuallyLabeledCheckbox } from "../905/909715";
import { mc as _$$mc, c$, bL, DZ } from "../905/493196";
import { s as _$$s } from "../9314/287043";
function j(e, t) {
  return Object.fromEntries(t.map(t => [t, {
    default: null,
    current: e[t]
  }]));
}
function y(e) {
  let t = new Set(e.rowFilters.map(({
    type: e
  }) => e));
  let a = Object.entries(e.currentFilters).filter(e => null !== e[1]);
  let s = a.filter(([e, a]) => !t.has(e));
  if (0 === s.length) return null;
  let i = (t, a) => {
    let n = e.allFilters.find(e => e.type === t);
    if (n?.filterComponent === _$$k.CHECKBOX) return n.label;
    let s = n?.options.find(e => e.value === a);
    return s?.display || a;
  };
  let r = t => {
    let a = e.allFilters.find(e => e.type === t);
    return a?.label || t;
  };
  let o = t => {
    let a = {
      ...e.currentFilters,
      [t]: null
    };
    let n = Object.keys(a);
    let s = j(a, n);
    e.onApply(s);
  };
  return jsxs(AutoLayout, {
    direction: "horizontal",
    spacing: 8,
    width: "hug-contents",
    children: [a.length > 1 && jsx(Button, {
      variant: "link",
      onClick: () => {
        let t = Object.fromEntries(Object.keys(e.currentFilters).map(e => [e, null]));
        let a = Object.keys(t);
        let n = j(t, a);
        e.onApply(n);
      },
      children: getI18nString("people_table_filters.button_text.clear")
    }), s.map(([t, a]) => {
      let s = e.allFilters.find(e => e.type === t);
      return jsx(_$$v, {
        hasCloseButton: !0,
        "aria-label": getI18nString("people_table_filters.clear_active_filter_button_aria_label", {
          filterType: r(t)
        }),
        onClick: () => o(t),
        onClose: () => o(t),
        selected: !0,
        "data-testid": "active-filter",
        children: s?.filterComponent === _$$k.CHECKBOX ? jsx("span", {
          className: "x1iog12x xiuzu7u xuxw1ft",
          children: i(t, a)
        }) : jsx(w, {
          filterLabel: r(t),
          filterValue: i(t, a)
        })
      }, `${t}-${a}`);
    })]
  });
}
function w({
  filterLabel: e,
  filterValue: t
}) {
  return jsx("div", {
    className: "x78zum5 x1q0g3np x6s0dn4",
    children: renderI18nText("people_table_filters.active_filter_badge", {
      filterType: jsx("span", {
        className: "xv1l7n4",
        children: e
      }),
      filterValue: jsx("span", {
        className: "x1iog12x xiuzu7u xuxw1ft",
        title: t,
        children: t
      })
    })
  });
}
function S({
  type: e,
  label: t,
  checked: a,
  handleChange: s
}) {
  return jsx(Checkbox, {
    checked: a,
    label: jsx(Label, {
      children: t
    }),
    onChange: t => s(e, t ? "on" : _$$p)
  });
}
function N({
  type: e,
  label: t,
  checked: a,
  handleChange: i
}) {
  let r = useId();
  return jsxs("div", {
    className: "x78zum5 x6s0dn4 x1qughib xh8yej3",
    children: [jsx(Label, {
      htmlFor: r,
      className: "x1n0bwc9",
      children: t
    }), jsx(ManuallyLabeledCheckbox, {
      checked: a,
      onChange: t => i(e, t ? "on" : _$$p),
      id: r
    })]
  });
}
function T(e, t) {
  let a = e.find(({
    value: e
  }) => e === t);
  return a ? a.display : e[0].display;
}
function A({
  filterCounts: e,
  options: t,
  type: a
}) {
  return jsx(_$$mc, {
    children: t.map(({
      display: t,
      value: i
    }, r) => {
      let l = null !== i && e[a] ? e[a][i] ?? 0 : null;
      return jsxs(_$$Fragment, {
        children: [jsx(c$, {
          value: i ?? _$$p,
          children: jsxs("div", {
            "data-testid": i ?? _$$p,
            className: "x78zum5 x1q0g3np xt7fyls xw5ewwj",
            children: [jsx("span", {
              className: "x78zum5 x1q0g3np xw5ewwj xlyipyv xuxw1ft xb3r6kr",
              children: t
            }), null !== l && jsx("span", {
              className: "x8x9d4c xd3ty66 xoq6bns",
              children: l.toLocaleString()
            })]
          })
        }), 0 === r && jsx("div", {
          className: "x1a1ra1p x1y0btm7 xh8yej3 x1y1aw1k x1e56ztr x1hqtkzk"
        })]
      }, i ?? _$$p);
    })
  });
}
function R(e) {
  let {
    filterValues,
    handleChange,
    filterCounts,
    label,
    options,
    type
  } = e;
  let o = filterValues[type].current;
  return jsx(bL, {
    onChange: e => handleChange(type, e),
    value: o ?? _$$p,
    children: jsxs("div", {
      className: "xh8yej3 x78zum5 x1q0g3np x6s0dn4 x1qughib",
      children: [jsx(Label, {
        htmlFor: label,
        children: jsx(TextWithTruncation, {
          color: "secondary",
          children: label
        })
      }), jsx(L, {
        ...e,
        hasFixedWidth: !0,
        selectedValue: o
      }), jsx(A, {
        filterCounts,
        options,
        type
      })]
    })
  }, label);
}
function O(e) {
  let {
    filterValues,
    handleChange,
    filterCounts,
    label,
    options,
    type
  } = e;
  let o = filterValues[type].current;
  return jsxs(bL, {
    onChange: e => handleChange(type, e),
    value: o ?? _$$p,
    children: [jsx(HiddenLabel, {
      htmlFor: `${label}-row-filter`,
      children: label
    }), jsx(D, {
      ...e,
      id: `${label}-row-filter`,
      selectedValue: o
    }), jsx(A, {
      filterCounts,
      options,
      type
    })]
  }, label);
}
function L({
  selectedValue: e,
  label: t,
  options: a,
  id: s,
  hasFixedWidth: i = !1
}) {
  return jsx("div", {
    ...xk(i ? M.fixedWidthTrigger : M.limitedWidthTrigger),
    children: jsx(DZ, {
      width: "fill",
      id: s || t,
      children: T(a, e ?? _$$p)
    })
  });
}
function D(e) {
  return e.selectedValue ? jsx(_$$v.SelectTrigger, {
    selected: !0,
    children: jsx(w, {
      filterLabel: e.filterLabel,
      filterValue: T(e.options, e.selectedValue)
    })
  }) : jsx("div", {
    className: "x65f84u",
    children: jsx(DZ, {
      width: "fill",
      id: e.id,
      children: jsx(w, {
        filterLabel: e.filterLabel,
        filterValue: T(e.options, _$$p)
      })
    })
  });
}
let M = {
  limitedWidthTrigger: {
    maxWidth: "x65f84u",
    $$css: !0
  },
  fixedWidthTrigger: {
    width: "xrostsh",
    $$css: !0
  }
};
function P(e) {
  return jsx("div", {
    className: "x14lv1n5 x23rxs8 x197cmgg",
    children: jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 8,
      children: [jsx("h2", {
        className: "xk50ysn x1j6dyjg",
        children: e.title
      }), e.filters.map(t => {
        let {
          label,
          type,
          filterComponent
        } = t;
        if (filterComponent === _$$k.SELECT) {
          let {
            options
          } = t;
          return jsx(R, {
            filterValues: e.filterValues,
            handleChange: e.handleChange,
            filterCounts: e.filterCounts,
            label,
            options,
            type
          }, label);
        }
        if (filterComponent === _$$k.CHECKBOX) return jsx(N, {
          type,
          label,
          handleChange: e.handleChange,
          checked: "on" === e.filterValues[type].current
        }, label);
      })]
    })
  });
}
function U({
  onApply: e,
  currentFilters: t,
  filterCounts: a,
  rowFilters: i
}) {
  let r = useCallback((a, n) => {
    let s = {
      ...t,
      [a]: n === _$$p ? null : n
    };
    let i = Object.keys(s);
    e(j(s, i));
  }, [e, t]);
  let l = Object.keys(t);
  let o = j(t, l);
  return jsx(Fragment, {
    children: i.map(e => e.filterComponent === _$$k.CHECKBOX ? jsx(S, {
      checked: "on" === o[e.type].current,
      handleChange: r,
      label: e.label,
      type: e.type
    }, e.label) : jsx(O, {
      filterValues: o,
      filterCounts: a,
      handleChange: r,
      label: e.label,
      options: e.options,
      type: e.type,
      filterLabel: e.label
    }, e.label))
  });
}
let F = {
  popoverHeader: {
    paddingLeft: "xnm25rq",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    borderBottom: "x1n5zjp5",
    borderBottomWidth: null,
    borderBottomColor: null,
    boxSizing: "x9f619",
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    width: "xh8yej3",
    height: "x1vqgdyp",
    alignItems: "x6s0dn4",
    marginBottom: "xod5an3",
    $$css: !0
  },
  popoverContent: {
    backgroundColor: "x1yjdb4r",
    paddingLeft: "xnm25rq",
    paddingRight: "xyfqnmn",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    marginBottom: "x1yztbdb",
    width: "xh8yej3",
    boxSizing: "x9f619",
    $$css: !0
  },
  popoverFooter: {
    display: "x78zum5",
    flexDirection: "x1q0g3np",
    borderTop: "xdyg6lv",
    borderTopWidth: null,
    borderTopColor: null,
    paddingLeft: "xnm25rq",
    paddingRight: "xy13l1i",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    borderStyle: "x1y0btm7",
    borderInlineStyle: null,
    borderInlineStartStyle: null,
    borderLeftStyle: null,
    borderInlineEndStyle: null,
    borderRightStyle: null,
    borderBlockStyle: null,
    borderTopStyle: null,
    borderBottomStyle: null,
    width: "xh8yej3",
    boxSizing: "x9f619",
    alignItems: "x6s0dn4",
    $$css: !0
  },
  headerSpacing: {
    marginLeft: "x8x9d4c",
    marginRight: "x1db2dqx",
    marginInlineStart: null,
    marginInlineEnd: null,
    $$css: !0
  },
  footerSpacing: {
    marginLeft: "x8x9d4c",
    marginInlineStart: null,
    marginInlineEnd: null,
    paddingTop: "x1y1aw1k",
    paddingBottom: "xwib8y2",
    $$css: !0
  }
};
function $(e) {
  if (0 === e.suggestedFilters.length || Object.entries(e.currentFilters).filter(t => {
    let a = e.rowFilters.some(e => e.type === t[0]);
    return null !== t[1] && !a;
  }).length > 0) return null;
  let t = (t, a) => {
    let n = {
      ...e.currentFilters,
      [t]: a
    };
    let s = Object.fromEntries(Object.keys(n).map(e => [e, {
      default: null,
      current: n[e]
    }]));
    e.onApply(s);
  };
  return jsx(AutoLayout, {
    verticalAlignItems: "center",
    direction: "vertical",
    width: "hug-contents",
    children: e.suggestedFilters.map(e => jsx(e6, {
      "aria-label": getI18nString("people_table_filters.add_suggested_filter_button_aria_label", {
        suggestedFilter: e.display
      }),
      onClick: () => t(e.type, e.value),
      className: "xh721vt x17fksa9 x10b2vn1 xam5rvr x1ypdohk xg3gfjp x3rkogp",
      trackingProperties: {
        suggestedFilterType: e.type,
        suggestedFilterValue: e.value
      },
      children: jsxs(AutoLayout, {
        direction: "horizontal",
        spacing: 0,
        children: [jsx(_$$s, {
          style: {
            "--color-icon": "var(--color-icon-secondary)"
          },
          className: "x2lah0s"
        }), jsx("span", {
          className: "xuxw1ft",
          children: jsx(TextWithTruncation, {
            color: "secondary",
            children: e.display
          })
        })]
      })
    }, e.display))
  });
}
export function $$B0({
  onApply: e,
  ariaLabel: t,
  currentFilters: a,
  filterCounts: r,
  filterSections: l,
  rowFilters: d,
  suggestedFilters: c = [],
  onboardingKey: _,
  analyticsPageName: p,
  loading: g
}) {
  let [h, b, v, f] = _$$e(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = usePopoverPrimitive({
    isOpen: h,
    onOpenChange: f,
    type: "dialog",
    placement: "bottom-end",
    softDismiss: !0
  });
  let k = new Set([...l.flatMap(e => e.filters), ...d].map(({
    type: e
  }) => e)).size > 2;
  let E = useMemo(() => {
    if (k) return d;
    let e = [...l.flatMap(e => e.filters), ...d];
    let t = new Set();
    return e.filter(e => !t.has(e.type) && (t.add(e.type), !0));
  }, [k, l, d]);
  return jsxs("div", {
    className: "x8x9d4c x78zum5 x1q0g3np x6s0dn4 x167g77z",
    children: [g ? jsxs("div", {
      className: "x5yr21d x78zum5 x6s0dn4 x167g77z",
      children: [jsx(Wi, {
        style: {
          width: 200,
          height: "24px"
        },
        animationType: JR.SHIMMER_ON_MENU
      }), jsx(Wi, {
        style: {
          width: 116,
          height: "24px"
        },
        animationType: JR.SHIMMER_ON_MENU
      })]
    }) : jsxs(Fragment, {
      children: [jsx($, {
        onApply: e,
        currentFilters: a,
        rowFilters: E,
        suggestedFilters: c
      }), k && jsx(y, {
        currentFilters: a,
        onApply: e,
        allFilters: [...l.flatMap(e => e.filters), ...d],
        rowFilters: d
      }), jsx(U, {
        rowFilters: E,
        filterCounts: r,
        onApply: e,
        currentFilters: a
      })]
    }), k && !g && jsxs(Fragment, {
      children: [jsx(hH, {
        "aria-label": t,
        innerText: t,
        ...getTriggerProps(),
        "data-onboarding-key": _,
        children: jsx(_$$S, {})
      }), jsx(PopoverPrimitiveContainer, {
        ...getContainerProps({
          style: {
            boxShadow: "var(--elevation-500)",
            borderRadius: "var(--radius-medium)",
            width: "320px",
            background: "var(--color-bg)",
            color: "var(--color-text)",
            fontFamily: "var(--text-body-medium-font-family, Inter)",
            fontSize: "var(--text-body-medium-font-size, 11px)",
            lineHeight: "var(--text-body-medium-line-height, 16px)"
          }
        }),
        children: jsx(G, {
          onApply: e,
          analyticsPageName: p,
          currentFilters: a,
          disable: v,
          filterCounts: r,
          filterSections: l,
          onboardingKey: _,
          rowFilters: d,
          suggestedFilters: c
        })
      })]
    })]
  });
}
function G({
  onApply: e,
  currentFilters: t,
  filterCounts: a,
  filterSections: i,
  analyticsPageName: o,
  disable: u
}) {
  let m = useMemo(() => i.flatMap(e => e.filters).map(e => e.type), [i]);
  let x = useMemo(() => Object.fromEntries(m.map(e => [e, null])), [m]);
  let {
    resetFilters,
    filterValues,
    handleChange
  } = function (e, t, a) {
    let [n, i] = useState(j(e, t));
    return {
      filterValues: n,
      handleChange: useCallback((e, t) => {
        i(Ay(a => {
          a[e].current = t === _$$p ? null : t;
        }));
      }, []),
      resetFilters: useCallback(() => {
        i(j(a, t));
      }, [a, t]),
      setFilterValues: i
    };
  }(t, m, x);
  let k = useCallback(() => {
    let t = Object.fromEntries(Object.entries(filterValues).filter(([e, t]) => t.current !== t.$$default).map(([e, t]) => [e, t.current]));
    e(filterValues);
    o && analyticsEventManager.trackDefinedEvent("admin.filters_applied", {
      pageName: o,
      filters: JSON.stringify(t)
    });
    u();
  }, [e, filterValues, u, o]);
  let E = Object.values(filterValues).every(e => e.current === e.$$default);
  return jsxs(AutoLayout, {
    dataTestId: "table-filter-popover",
    direction: "vertical",
    children: [jsxs("div", {
      ...xk(F.popoverHeader),
      children: [jsx(TextWithTruncation, {
        fontWeight: "medium",
        fontSize: 11,
        children: getI18nString("people_table_filters.popover_header")
      }), jsx("span", {
        ...xk(F.headerSpacing),
        children: jsx(K, {
          "aria-label": getI18nString("people_table_filters.close_button_aria_label"),
          onClick: u,
          children: jsx(_$$L, {})
        })
      })]
    }), jsx("div", {
      ...xk(F.popoverContent),
      children: i.map(e => jsx(P, {
        title: e.title,
        filters: e.filters,
        filterValues,
        handleChange,
        filterCounts: a
      }, e.title))
    }), jsxs("div", {
      ...xk(F.popoverFooter),
      children: [!E && jsx(Button, {
        variant: "link",
        onClick: resetFilters,
        children: getI18nString("people_table_filters.button_text.clear_all")
      }), jsx("span", {
        ...xk(F.footerSpacing),
        children: jsx(Button, {
          variant: "primary",
          onClick: k,
          children: getI18nString("people_table_filters.button_text.apply")
        })
      })]
    })]
  });
}
export const W = $$B0;