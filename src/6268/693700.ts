import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useCallback, useState, useRef } from "react";
import { ManuallyLabeledCheckbox } from "../905/909715";
import { Link } from "../905/438674";
import { o as _$$o } from "../905/89370";
import { a as _$$a } from "../905/964520";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import _ from "classnames";
import { useSprigWithSampling } from "../905/99656";
import { WAFImage } from "../905/675859";
import { getI18nString } from "../905/303541";
import { a as _$$a2 } from "../6658/303587";
import { k1 } from "../1250/428971";
import { useDispatch } from "react-redux";
import { VisualBellActions } from "../905/302958";
import { I as _$$I } from "../6658/358099";
import { s as _$$s } from "../6658/286262";
import { b as _$$b } from "../905/217163";
import { getLibraryName } from "../905/506188";
import { LoadingSpinner } from "../figma_app/858013";
import { sD, P8 } from "../1250/807901";
import { i7, yO, oE, yS, LU, jU, RA, T$, sp, of, f_, v6, Kk, I$, V3, TQ, b0, IO, fI, $M, WD, fo, AT, YS, MO, K4, WX, Gh, t5, OC, dg, L3, hP, YQ, Gd, xw, SR, dl } from "../6268/430335";
import { Wi, JR } from "../figma_app/162641";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuGroupComp, MenuItemComp } from "../figma_app/860955";
import { IconButton } from "../905/443068";
import { J } from "../905/125993";
import { b as _$$b3 } from "../905/946806";
import { d as _$$d } from "../6658/928537";
import { SN, pK, Q3 } from "../1250/36596";
var m = _;
let x = "component-browser-bulk-actions";
function w({
  selectedCount: e,
  onBulkConnectComponents: n,
  onBulkIgnoreComponents: o,
  onDismiss: t
}) {
  let c = useDispatch();
  useEffect(() => {
    if (0 === e) {
      c(VisualBellActions.dequeue({
        matchType: x
      }));
      return;
    }
    c(VisualBellActions.enqueue({
      type: x,
      message: getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.description", {
        count: e
      }),
      button: {
        primary: {
          text: getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.action_connect"),
          action: () => (n(), !0)
        },
        secondary: {
          text: getI18nString("dev_handoff.component_browser.bulk_mapping.selected_components_bell.action_ignore"),
          action: () => (o(), !0)
        }
      },
      onDismiss: () => {
        t?.();
      },
      timeoutOverride: 1 / 0
    }));
  }, [e, n, o, t, c]);
  return null;
}
function T({
  component: e,
  isLoading: n
}) {
  let o = sD();
  let c = P8();
  let i = e.code_connect_info.v1.state;
  let r = useMemo(() => {
    switch (i) {
      case "not_connected":
        let e = c.notConnected;
        return jsx(e, {
          "data-tooltip": o.notConnected,
          "data-tooltip-type": "text"
        });
      case "connected":
        let n = c.connected;
        return jsx(n, {
          "data-tooltip": o.connected,
          "data-tooltip-type": "text",
          style: {
            "--color-icon": "var(--color-icon-success)"
          }
        });
      case "ignored":
        let s = c.ignored;
        return jsx(s, {
          "data-tooltip": o.ignored,
          "data-tooltip-type": "text",
          style: {
            "--color-icon": "var(--color-icon-warning)"
          }
        });
    }
  }, [i, o, c]);
  return n ? jsx("span", {
    className: i7,
    children: jsx(LoadingSpinner, {})
  }) : jsx("span", {
    className: i7,
    children: r
  });
}
function R({
  width: e = 102,
  height: n = 58,
  spacing: o = "spacious"
}) {
  let s = Math.ceil((window.innerHeight - 200) / 49);
  return jsx("div", {
    className: m()(yO, {
      [oE]: "compact" === o
    }),
    children: Array.from({
      length: s
    }).map((o, s) => jsxs("div", {
      className: yS,
      children: [jsx(Wi, {
        style: {
          width: e,
          height: n,
          borderRadius: 4
        },
        animationType: JR.SHIMMER
      }), jsx(Wi, {
        style: {
          width: 200
        },
        animationType: JR.SHIMMER
      }), jsx(Wi, {
        style: {
          flex: 1
        },
        animationType: JR.SHIMMER
      }), jsx(Wi, {
        style: {
          width: 120
        },
        animationType: JR.SHIMMER
      })]
    }, s))
  });
}
function A({
  data: e,
  isConnected: n,
  isIgnored: o,
  isComponentBrowserType: c,
  onMenuItemClick: i,
  showOpenInSidebar: r = !0,
  onPrepareForOpen: a,
  onCloseMenu: l
}) {
  let {
    manager,
    getTriggerProps
  } = setupMenu();
  let m = useCallback(() => {
    a?.(e.component.node_id);
  }, [a, e.component.node_id]);
  useEffect(() => {
    manager.isOpen || l?.();
  }, [manager.isOpen, l]);
  let p = {
    label: getI18nString("dev_handoff.component_browser.open_in_sidebar"),
    onClick: () => i({
      event: _$$d.OpenInSidebar,
      row: e
    })
  };
  let h = [[{
    label: getI18nString("dev_handoff.component_browser.no_code_equivalent_menu"),
    onClick: () => i({
      event: _$$d.Ignore,
      row: e
    }),
    disabled: !c
  }]];
  r && h.push([p]);
  let b = [[{
    label: getI18nString("dev_handoff.component_browser.disconnect_menu"),
    onClick: () => i({
      event: _$$d.Disconnect,
      row: e
    }),
    disabled: !c
  }]];
  r && b.push([p]);
  let f = [[{
    label: getI18nString("dev_handoff.component_browser.has_code_equivalent"),
    onClick: () => i({
      event: _$$d.HasCodeEquivalent,
      row: e
    })
  }]];
  r && f.push([p]);
  let v = [];
  if (0 === (v = n ? b : o ? f : h).length) return null;
  let g = getTriggerProps({
    onClick: m,
    onMouseDown: m
  });
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(IconButton, {
      ...g,
      "aria-label": getI18nString("dev_handoff.component_browser.more_actions"),
      children: jsx(J, {})
    }), jsxs(MenuContainerComp, {
      children: [v.map((e, n) => jsx(MenuGroupComp, {
        children: e.map(e => jsx(MenuItemComp, {
          disabled: e.disabled,
          onClick: e.onClick,
          children: e.label
        }, e.label))
      }, n)), !c && jsxs("div", {
        className: "component_browser_more_actions_menu--info--4QHeV",
        children: [jsx(_$$b3, {}), jsx("div", {
          className: "component_browser_more_actions_menu--infoText--4rpGc",
          children: getI18nString("dev_handoff.component_browser.code_connect_cli_only_message")
        })]
      })]
    })]
  });
}
function K({
  suggestions: e
}) {
  return jsxs("table", {
    className: "suggestions_debug--suggestionsDebugTable--RcFBw",
    children: [jsx("thead", {
      children: jsxs("tr", {
        children: [jsx("th", {
          children: "Index"
        }), jsx("th", {
          children: "Filepath"
        }), jsx("th", {
          children: "Name"
        }), jsx("th", {
          children: "Score"
        }), jsx("th", {
          children: "Confidence"
        })]
      })
    }), jsx("tbody", {
      children: 0 === e.length ? jsx("tr", {
        children: jsx("td", {
          colSpan: 5,
          style: {
            textAlign: "center"
          },
          children: "(No suggestions)"
        })
      }) : e.map((e, n) => jsxs("tr", {
        children: [jsx("td", {
          children: n
        }), jsx("td", {
          children: e.src_path
        }), jsx("td", {
          children: e.name
        }), jsx("td", {
          children: e.score.toFixed(3)
        }), jsx("td", {
          children: e.confidence_level
        })]
      }, e.codebase_component_id))
    })]
  });
}
export function $$q1({
  spacing: e = "spacious",
  isFirstRow: n,
  isRowHovered: o,
  item: c,
  component: i,
  suggestions: r,
  isLoadingSuggestions: a,
  libraryKey: d,
  onComponentChanged: _,
  onConfirmConnection: p,
  onConfirmSuggestion: h,
  onFileChanged: b,
  onValueChange: f,
  sourceIndex: v,
  inputRefs: g,
  currentRowIndex: x,
  location: w,
  entrypoint: j,
  onActiveRowChange: y,
  isRowActive: N,
  showSuggestionsDebug: C,
  searchSessionId: k
}) {
  let [S, T] = useState(!1);
  let L = i?.code_connect_info.v1.state === "ignored";
  let R = "figmadoc" === i.code_connect_info.v1.type;
  let E = "connected" === i.code_connect_info.v1.state;
  let M = getFeatureFlags().dt_component_browser_bulk_mapping && !E && !L && r && r.length > 0 && !S;
  let D = useMemo(() => {
    if (M) {
      let e = r[0];
      let n = [e.src_path];
      e.name && n.push(e.name);
      return jsxs(Fragment, {
        children: [jsx(SN, {
          items: n,
          isSuggestion: !0,
          onClick: e => {
            T(!0);
            y(c.component.node_id);
            e.stopPropagation();
          }
        }), jsx(pK, {
          onConfirmConnection: n => {
            h({
              filepath: e.src_path,
              componentName: e.name,
              item: c,
              currentRowIndex: x,
              sourceIndex: v
            });
            n.stopPropagation();
          },
          showButton: o,
          children: getI18nString("dev_handoff.component_browser.confirm")
        })]
      });
    }
    if (R) {
      let e = [];
      c.selectedFile && e.push(c.selectedFile.title);
      c.selectedComponent && e.push(c.selectedComponent.title);
      return jsx(SN, {
        items: e
      });
    }
    if (L) return "--";
    let e = r?.[0];
    return jsx(Q3, {
      autosave: !1,
      currentRowIndex: x,
      entrypoint: j,
      inputRefs: g,
      isFirstRow: n,
      isLoading: c.isLoading ?? !1,
      isLoadingSuggestions: a,
      isRowActive: N,
      isRowHovered: o,
      item: c,
      libraryKey: d,
      location: w,
      onActiveRowChange: y,
      onBlur: e ? () => T(!1) : void 0,
      onComponentChanged: _,
      onConfirmConnection: p,
      onFileChanged: b,
      onValueChange: f,
      readonly: c?.component?.code_connect_info?.v1?.state === "connected",
      searchSessionId: k,
      selectedComponent: c.selectedComponent,
      selectedFile: c.selectedFile,
      sourceIndex: v,
      suggestions: r,
      value: c.inputValue ?? ""
    });
  }, [M, R, n, L, r, x, j, g, c, a, N, o, d, w, y, _, p, b, f, k, v, h]);
  let O = getFeatureFlags().dt_component_browser_suggestions_debug && C;
  return jsxs("td", {
    className: m()(LU, jU, {
      [RA]: O,
      [oE]: "compact" === e
    }),
    onClick: e => {
      L || R || M || e.stopPropagation();
    },
    children: [D, O && jsx(K, {
      suggestions: r
    })]
  });
}
function B({
  item: e,
  currentRowIndex: n,
  onSelectComponent: o,
  onMoreActionsMenuItemClick: l,
  columns: d,
  spacing: _,
  onlyShowActionsOnHover: p,
  openMenuRowId: u,
  onPrepareForOpen: b,
  onConfirmConnection: v,
  onConfirmSuggestion: g,
  suggestions: x,
  isLoadingSuggestions: w,
  onCloseMenu: y,
  selectedComponent: k,
  isIconsFlow: S,
  inputRefs: L,
  onComponentChanged: R,
  onFileChanged: E,
  onValueChange: M,
  showExpandChevron: D,
  showLibraryNames: O,
  location: P,
  entrypoint: F,
  onActiveRowChange: K,
  isRowActive: B,
  selectedRows: W,
  onRowSelectionChange: $,
  showSuggestionsDebug: U,
  searchSessionId: z
}) {
  let [G, J] = useState(!1);
  let Q = e.sourceIndex;
  let H = e.component;
  let Y = "ignored" === H.code_connect_info.v1.state;
  let V = "connected" === H.code_connect_info.v1.state;
  let {
    isSelected
  } = (e => {
    let n = null;
    if ("connected" === e.code_connect_info.v1.state) try {
      let o = JSON.parse(e.code_connect_info.v1.figmadoc ?? "");
      n = Array.isArray(o) ? o[0] : o;
    } catch (e) {}
    let o = k && _$$I(e) === _$$I(k);
    let t = null;
    let s = null;
    if ("connected" === e.code_connect_info.v1.state && n) {
      let e = n.source;
      e && (t = e.substring(e.lastIndexOf("/") + 1));
      s = n.component;
    }
    return {
      isSelected: o,
      fileName: t,
      componentName: s
    };
  })(H);
  let Z = !H.code_connect_info.v1.type || "component_browser" === H.code_connect_info.v1.type;
  let ee = 0 === n;
  let en = getLibraryName(H.library_key).unwrapOr(null);
  let eo = _$$b({
    libraryKey: H.library_key,
    nodeId: H.node_id,
    isDevHandoff: !0
  });
  let et = en && O;
  let es = eo.data?.link;
  let ec = !!W && W.has(H.node_id);
  let ei = useCallback(e => {
    if (!$ || !W) return;
    let n = new Set(W);
    e ? n.add(H.node_id) : n.$$delete(H.node_id);
    $(n);
  }, [H.node_id, W, $]);
  return jsxs("tr", {
    onMouseEnter: () => J(!0),
    onMouseLeave: () => J(!1),
    className: m()(T$, {
      [sp]: isSelected,
      "js-is-selected": isSelected
    }),
    onClick: () => {
      o(e);
      K(H.node_id);
    },
    children: [d.includes("checkbox") && jsx("td", {
      className: m()(LU, of),
      onClick: e => e.stopPropagation(),
      children: jsx(ManuallyLabeledCheckbox, {
        checked: ec,
        muted: !0,
        onChange: e => ei(e),
        "aria-label": `Select ${H.name}`,
        id: e.component.node_id
      })
    }), d.includes("design") && jsxs("td", {
      className: m()(LU, f_),
      children: [H.thumbnail_url && jsx("div", {
        className: m()(v6, {
          [Kk]: S
        }),
        children: jsx(WAFImage, {
          "data-onboarding-key": ee ? k1.Step1 : void 0,
          className: I$,
          src: H.thumbnail_url,
          alt: H.name
        })
      }), jsxs("div", {
        className: V3,
        children: [jsx("div", {
          className: TQ,
          children: H.name
        }), et && es && jsx(Link, {
          newTab: !0,
          href: es,
          children: jsx("div", {
            className: b0,
            children: en
          })
        })]
      })]
    }), d.includes("decorator") && jsx("td", {
      className: m()(LU, IO),
      children: jsx(_$$o, {
        className: fI
      })
    }), d.includes("file") && jsx($$q1, {
      component: H,
      currentRowIndex: n,
      entrypoint: F,
      inputRefs: L,
      isFirstRow: ee,
      isLoadingSuggestions: w,
      isRowActive: B,
      isRowHovered: G,
      item: e,
      libraryKey: H.library_key,
      location: P,
      onActiveRowChange: K,
      onComponentChanged: R,
      onConfirmConnection: v,
      onConfirmSuggestion: g,
      onFileChanged: E,
      onValueChange: M,
      searchSessionId: z,
      showSuggestionsDebug: U,
      sourceIndex: Q,
      suggestions: x
    }), d.includes("variants") && jsx("td", {
      className: m()(LU, $M),
      children: "variants" in H ? jsx("div", {
        className: WD,
        children: H.variants.length
      }) : "--"
    }), d.includes("status") && jsx("td", {
      className: m()(LU, fo),
      children: jsx(T, {
        component: H,
        isLoading: e.isLoading ?? !1
      })
    }), d.includes("actions") && jsxs("td", {
      className: m()(LU, AT, {
        [YS]: p,
        [MO]: u === H.node_id
      }),
      children: [jsx(A, {
        data: e,
        isConnected: V,
        isIgnored: Y,
        isComponentBrowserType: Z,
        onMenuItemClick: l,
        showOpenInSidebar: "spacious" === _,
        onPrepareForOpen: b,
        onCloseMenu: y
      }), D && jsx("div", {
        className: K4,
        children: jsx(_$$a, {})
      })]
    })]
  }, H.node_id);
}
export function $$W0({
  libraryKey: e,
  data: n,
  selectedComponent: o,
  onSelectComponent: i,
  onFileChanged: r,
  onComponentChanged: a,
  onConfirmConnection: _,
  onConfirmSuggestion: h,
  onValueChange: f,
  isLoading: v,
  isLoadingSuggestions: g,
  onMoreActionsMenuItemClick: x,
  inputRefs: N,
  searchQuery: C,
  columns: k,
  spacing: S = "spacious",
  showExpandChevron: T = !1,
  showTableHeader: L = !0,
  showLibraryNames: E = !1,
  onlyShowActionsOnHover: M = !1,
  bulkSuggestions: D,
  location: O,
  entrypoint: P,
  selectedRows: A,
  onRowSelectionChange: F,
  onBulkConfirmSuggestions: K,
  searchSessionId: q,
  showSuggestionsDebug: W,
  isShowingSideSheet: $,
  onActiveRowChange: U,
  activeRowKey: z,
  hasConnections: G,
  dropdownFilter: J
}) {
  let {
    Sprig
  } = useSprigWithSampling();
  useEffect(() => {
    v || Sprig("track", _$$s);
  }, [v, Sprig]);
  let H = 0 === n.length;
  let Y = useRef(null);
  let V = useAtomWithSubscription(_$$a2);
  let X = getFeatureFlags().dt_component_browser_icons_flow && "icons" === V;
  let [Z, ee] = useState(null);
  let en = o ? _$$I(o) : null;
  useEffect(() => {
    en && Y.current?.querySelector(".js-is-selected")?.scrollIntoView({
      block: "nearest"
    });
  }, [en]);
  let eo = useCallback(e => {
    ee(e);
  }, []);
  let et = useCallback(() => {
    ee(null);
  }, []);
  return v ? jsx("div", {
    className: WX,
    children: jsx(R, {
      spacing: S
    })
  }) : H ? G && "notConnected" === J ? jsxs("div", {
    className: Gh,
    children: [jsx("div", {
      className: t5,
      children: getI18nString("dev_handoff.component_browser.all_connected")
    }), jsx("div", {
      className: OC,
      children: getI18nString("dev_handoff.component_browser.all_connected_subtext")
    })]
  }) : jsx("div", {
    className: dg,
    children: jsx("span", {
      children: C.length > 0 ? getI18nString("dev_handoff.component_browser.no_components_search_result", {
        searchQuery: C
      }) : getI18nString("dev_handoff.component_browser.no_results_found")
    })
  }) : jsxs(Fragment, {
    children: [jsx("div", {
      ref: Y,
      className: L3,
      children: jsxs("table", {
        className: m()(hP, {
          [YQ]: "spacious" === S,
          [oE]: "compact" === S
        }),
        children: [L && jsx("thead", {
          className: m()(Gd, {
            [YQ]: "spacious" === S,
            [oE]: "compact" === S,
            [xw]: $
          }),
          children: jsxs("tr", {
            className: SR,
            children: [k.includes("checkbox") && jsx("th", {
              className: m()(LU, of),
              children: jsx(ManuallyLabeledCheckbox, {
                checked: !!A && A.size > 0 && A.size === n.length,
                mixed: !!A && A.size > 0 && A.size < n.length,
                muted: !0,
                onChange: e => {
                  F && (e ? F(new Set(n.map(e => e.component.node_id))) : F(new Set()));
                },
                id: "select-all-checkbox"
              })
            }), k.includes("design") && jsx("th", {
              className: m()(LU, f_),
              children: jsx("div", {
                children: getI18nString("dev_handoff.component_browser.design_component")
              })
            }), k.includes("decorator") && jsx("th", {
              className: m()(LU, IO)
            }), k.includes("file") && jsx("th", {
              className: m()(LU, jU, {
                [oE]: "compact" === S
              }),
              children: jsx("div", {
                children: getI18nString("dev_handoff.component_browser.code_file_column")
              })
            }), k.includes("variants") && jsx("th", {
              className: m()(LU, $M),
              children: jsx("div", {
                children: getI18nString("dev_handoff.component_browser.variants")
              })
            }), k.includes("status") && jsx("th", {
              className: m()(LU, fo),
              children: jsx("div", {
                children: getI18nString("dev_handoff.component_browser.status")
              })
            }), k.includes("actions") && jsx("th", {
              className: m()(LU, AT)
            })]
          })
        }), jsx("tbody", {
          className: m()(dl, {
            [YQ]: "spacious" === S,
            [oE]: "compact" === S,
            [xw]: $
          }),
          children: n.map((n, s) => {
            let c = D[n.assetKey] || [];
            return jsx(B, {
              columns: k,
              currentRowIndex: s,
              entrypoint: P,
              inputRefs: N,
              isIconsFlow: X ?? !1,
              isLoadingSuggestions: g,
              isRowActive: z === n.component.node_id,
              item: n,
              libraryKey: e,
              location: O,
              onActiveRowChange: U,
              onCloseMenu: et,
              onComponentChanged: a,
              onConfirmConnection: _,
              onConfirmSuggestion: h,
              onFileChanged: r,
              onMoreActionsMenuItemClick: x,
              onPrepareForOpen: eo,
              onRowSelectionChange: F,
              onSelectComponent: i,
              onValueChange: f,
              onlyShowActionsOnHover: M,
              openMenuRowId: Z,
              searchSessionId: q,
              selectedComponent: o,
              selectedRows: A,
              showExpandChevron: T,
              showLibraryNames: E,
              showSuggestionsDebug: W,
              spacing: S,
              suggestions: c
            }, n.component.node_id);
          })
        })]
      })
    }), jsx(w, {
      selectedCount: (A ?? new Set()).size,
      onBulkConnectComponents: () => {
        (K ?? (() => {}))({
          selectedComponents: n.filter(e => (A ?? new Set()).has(e.component.node_id)),
          bulkSuggestions: D,
          trackingProps: {
            location: O,
            source: "ai_codebase_suggestion",
            entrypoint: P,
            sessionId: crypto.randomUUID()
          }
        });
        F?.(new Set());
      },
      onBulkIgnoreComponents: () => {
        (K ?? (() => {}))({
          selectedComponents: n.filter(e => (A ?? new Set()).has(e.component.node_id)),
          bulkSuggestions: D,
          trackingProps: {
            location: O,
            source: "ai_codebase_suggestion",
            entrypoint: P,
            sessionId: crypto.randomUUID()
          },
          ignore: !0
        });
        F?.(new Set());
      },
      onDismiss: () => {
        F?.(new Set());
      }
    })]
  });
}
export const gP = $$W0;
export const uI = $$q1;