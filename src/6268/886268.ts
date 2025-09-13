import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useEffect, Fragment as _$$Fragment, forwardRef, useState, useMemo, useCallback } from "react";
import { E as _$$E } from "../905/53857";
import { Button } from "../905/521428";
import { K as _$$K } from "../905/443068";
import { L as _$$L } from "../905/704296";
import { h as _$$h } from "../905/994594";
import { UI3ConditionalWrapper } from "../905/341359";
import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import h from "classnames";
import { useSubscription } from "../figma_app/288654";
import { Vc } from "../figma_app/211694";
import { LazyInputForwardRef } from "../905/408237";
import { getI18nString, renderI18nText } from "../905/303541";
import { a as _$$a } from "../6658/303587";
import { z as _$$z } from "../6268/891724";
import { v as _$$v } from "../1250/232926";
import { OG, w6 } from "../1250/340571";
import { A as _$$A } from "../1250/29260";
import { b as _$$b, bL, mc, q7 } from "../figma_app/860955";
import { z6, CU } from "../905/963340";
import { S as _$$S } from "../905/711470";
import { KindEnum } from "../905/129884";
import { Bt, xV, kZ } from "../figma_app/88239";
import { bh } from "../1250/224366";
import { LibraryKeyToFileLink } from "../figma_app/43951";
import { SelectorType } from "../figma_app/707808";
import { k1, qd, Mj } from "../1250/428971";
import { d as _$$d } from "../905/976845";
import { ButtonPrimitive } from "../905/632989";
import { k as _$$k2 } from "../905/443820";
import { J as _$$J2 } from "../905/125993";
import { g as _$$g } from "../905/757007";
import { A as _$$A2 } from "../905/251970";
import { $P } from "../vendor/218029";
import { A as _$$A3 } from "../vendor/850789";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { R as _$$R } from "../905/621802";
import { f as _$$f } from "../905/54715";
import { createPortal } from "react-dom";
import { LoadingSpinner } from "../figma_app/858013";
import { KF, r9 } from "../6268/430335";
import { Tp } from "../1250/282084";
import { Wq, dx } from "../6658/436658";
import { o as _$$o } from "../6268/77352";
import { K as _$$K2 } from "../6658/832968";
import { w as _$$w } from "../905/433065";
import { W as _$$W } from "../905/569454";
import { M as _$$M } from "../1250/358700";
import { N as _$$N } from "../905/865305";
import { trackDefinedFileEventWithStore } from "../figma_app/901889";
import { useDispatch } from "react-redux";
import { PopoverPrimitiveContainer, usePopoverPrimitive } from "../905/691059";
import { N as _$$N2 } from "../905/438674";
import { e as _$$e2 } from "../905/295932";
import { f as _$$f2 } from "../6268/481313";
import { I as _$$I } from "../905/932503";
import { FJ } from "../905/508367";
import { buildUploadUrl } from "../figma_app/169182";
import { H as _$$H } from "../figma_app/47866";
import { oW } from "../905/675859";
import { f as _$$f3 } from "../figma_app/258006";
import { G as _$$G, A as _$$A4 } from "../1250/975106";
import { bL as _$$bL, RT } from "../905/867927";
import { q as _$$q } from "../905/932270";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { TrackingProvider } from "../figma_app/831799";
import { registerModal } from "../905/102752";
import { n as _$$n } from "../1250/647011";
import { gK } from "../1250/158057";
import { o as _$$o2 } from "../1250/251689";
import { P as _$$P } from "../1250/665611";
import { e as _$$e3 } from "../1250/871209";
import { l as _$$l2 } from "../1250/511088";
import { showModalHandler } from "../905/156213";
import { DP } from "../905/640017";
import { trackEventAnalytics } from "../905/449184";
import { VisualBellActions } from "../905/302958";
import { useCurrentPlanUser } from "../figma_app/465071";
import { codeSuggestionAPIHandler } from "../905/70843";
import { WG } from "../1250/218868";
import { gP } from "../6268/693700";
import { x as _$$x } from "../6658/928537";
var u = h;
function T({
  currentSort: e,
  onSortChange: n
}) {
  let {
    manager,
    getTriggerProps
  } = _$$b({
    initialPosition: "bottom"
  });
  let c = [{
    value: "alphabetically",
    label: getI18nString("dev_handoff.component_browser.sort_alphabetically")
  }, {
    value: "insertions",
    label: getI18nString("dev_handoff.component_browser.sort_by_insertions")
  }];
  return jsxs(bL, {
    manager,
    children: [jsx(_$$K, {
      ...getTriggerProps(),
      "aria-label": getI18nString("dev_handoff.component_browser.sort_by"),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.component_browser.sort_by"),
        "data-testid": "component_browser_sort_by"
      },
      children: jsx(_$$S, {})
    }), jsx(mc, {
      children: jsx(z6, {
        title: jsx("div", {}),
        onChange: n,
        value: e,
        children: c.map(e => jsx(CU, {
          value: e.value,
          children: e.label
        }, e.value))
      })
    })]
  });
}
function Q({
  id: e,
  isVisible: n,
  position: o,
  containerRef: c,
  isLoading: i,
  loadingMessage: r,
  items: a,
  noItemsView: l,
  renderItem: d,
  selectedIndex: _ = 0
}) {
  let m = useRef(null);
  return (useEffect(() => {
    if (n && !i && a.length > 0 && m.current) {
      let e = m.current.children[_];
      e && e.scrollIntoView({
        block: "nearest"
      });
    }
  }, [n, i, a.length, _]), n && o) ? createPortal(jsx("div", {
    ref: c,
    id: e,
    className: "component_browser_chip_search_dropdown--componentBrowserChipSearchDropdownContainer--3WPEW",
    style: {
      top: `${o.top}px`,
      left: `${o.left}px`,
      width: `${o.width}px`
    },
    children: jsx("ul", {
      ref: m,
      className: "component_browser_chip_search_dropdown--resultsList--J1-7i",
      children: i ? jsxs("li", {
        className: "component_browser_chip_search_dropdown--loadingState--BfIlh",
        children: [jsx(LoadingSpinner, {}), r]
      }) : a.length > 0 ? a.map((e, n) => jsx(_$$Fragment, {
        children: d(e, n)
      }, n)) : jsx("li", {
        children: l
      })
    })
  }), document.body) : null;
}
function Y({
  labels: e,
  onClick: n,
  onBackspace: o,
  isClearable: c
}) {
  return jsx("button", {
    onKeyDown: e => {
      "Backspace" === e.key && o?.();
    },
    onClick: n,
    className: "component_browser_chip_search_input--pillBase--HlS0p",
    "aria-label": getI18nString("dev_handoff.component_browser.clear_input"),
    children: e.map((n, i) => jsxs(_$$Fragment, {
      children: [jsx("span", {
        "data-tooltip": n.tooltip,
        "data-tooltip-type": "text",
        className: "component_browser_chip_search_input--pillLabel--qzAew",
        children: n.value
      }), i < e.length - 1 && jsx(_$$R, {}), c && jsx(_$$f, {
        onClick: o,
        className: "component_browser_chip_search_input--pillClearIcon--QXb02"
      })]
    }, `${n.value}-${i}`))
  });
}
function V({
  title: e,
  subtitle: n,
  onClick: o,
  icon: s,
  isSelected: c
}) {
  return jsx("li", {
    children: jsxs(ButtonPrimitive, {
      className: u()("component_browser_chip_search_input--item--IGp8Y", {
        "component_browser_chip_search_input--selected--gg3EU": c
      }),
      onClick: e => {
        e.stopPropagation();
        o();
      },
      children: [s && jsx("div", {
        className: "component_browser_chip_search_input--itemIcon--8ZOb3",
        children: s
      }), jsxs("div", {
        className: "component_browser_chip_search_input--itemContent--2QfZV",
        children: [jsx("div", {
          className: "component_browser_chip_search_input--title--oGz9H",
          children: e
        }), n && jsx("div", {
          className: "component_browser_chip_search_input--subtitle--5zMEl",
          children: n
        })]
      })]
    })
  });
}
let X = "component-browser-chip-search-dropdown";
let Z = forwardRef(function ({
  placeholder: e,
  disabled: n,
  searchResults: o,
  isLoadingSearchResults: c,
  selectedItem: i,
  onChipSelect: r,
  onDeleteLastItem: l,
  onDropdownItemClick: d,
  onValueChanged: _,
  onEnterPressed: m,
  showDropdown: p = !0,
  showDropdownOnFocus: h = !1,
  arePillsClearable: b = !1,
  isClearable: f = !0,
  hint: v,
  onboardingKey: x
}, w) {
  let [j, y] = useState({
    value: "",
    isSearchListOpen: !1,
    dropdownPosition: null,
    isConnecting: !1,
    selectedIndex: 0
  });
  let N = useRef(j.value);
  let C = useRef(null);
  let k = useRef(null);
  useEffect(() => {
    if (j.isSearchListOpen && C.current) {
      let e = C.current.getBoundingClientRect();
      y(n => ({
        ...n,
        dropdownPosition: {
          top: e.bottom + window.scrollY,
          left: e.left + window.scrollX,
          width: e.width
        }
      }));
    } else y(e => ({
      ...e,
      dropdownPosition: null
    }));
  }, [j.isSearchListOpen]);
  useEffect(() => {
    function e(e) {
      let n = e.target;
      C.current && !C.current.contains(n) && k.current && !k.current.contains(n) && y(e => ({
        ...e,
        isSearchListOpen: !1
      }));
    }
    document.addEventListener("mousedown", e);
    return () => document.removeEventListener("mousedown", e);
  }, []);
  let S = () => {
    y(e => ({
      ...e,
      value: "",
      isSearchListOpen: !1
    }));
  };
  let I = e => {
    y(e => ({
      ...e,
      isSearchListOpen: !1,
      value: "",
      selectedIndex: 0
    }));
    d(e);
  };
  let T = e => {
    "" !== e && e !== N.current && (N.current = e, m?.(e) && S());
  };
  return jsxs("div", {
    className: "component_browser_chip_search_input--inlineSearchContainer--8CJzi",
    ref: C,
    children: [jsx("div", {
      className: "component_browser_chip_search_input--inputWrapper--aiWWZ",
      children: jsxs("div", {
        className: u()(KF, {
          [r9]: n
        }),
        children: [i && jsx(Y, {
          onBackspace: () => {
            l();
            w.current?.focus();
          },
          labels: i.value,
          onClick: () => r?.(i),
          isClearable: b
        }), jsx("input", {
          ref: w,
          className: "component_browser_chip_search_input--input--KG-iT faceted_search_bar--input--V5ksZ",
          "data-onboarding-key": x,
          onBlur: e => {
            T(j.value);
            let n = e.relatedTarget;
            n?.closest(`#${X}`) || y(e => ({
              ...e,
              isSearchListOpen: !1,
              selectedIndex: 0
            }));
          },
          onChange: e => {
            if (n || i) return;
            let o = e.target.value;
            y(e => ({
              ...e,
              value: o,
              isSearchListOpen: o.length > 0,
              selectedIndex: 0
            }));
            _(o);
          },
          onFocus: () => {
            h && y(e => ({
              ...e,
              isSearchListOpen: !0,
              selectedIndex: 0
            }));
          },
          onKeyDown: e => {
            if (!n) {
              if ("Backspace" === e.key && "" === j.value && l(), "Enter" === e.key) {
                if (o && o.length > 0) {
                  let n = o[j.selectedIndex];
                  if (n) {
                    e.preventDefault();
                    I(n);
                    return;
                  }
                }
                T(j.value);
              }
              "ArrowDown" === e.key && o && o.length > 0 && (e.preventDefault(), y(e => ({
                ...e,
                selectedIndex: (e.selectedIndex + 1) % o.length
              })));
              "ArrowUp" === e.key && o && o.length > 0 && (e.preventDefault(), y(e => ({
                ...e,
                selectedIndex: 0 === e.selectedIndex ? o.length - 1 : e.selectedIndex - 1
              })));
            }
          },
          placeholder: e,
          type: "search",
          value: j.value
        }), i && f && jsx("div", {
          className: "component_browser_chip_search_input--clearIconContainer--lm-6s",
          children: jsx(_$$L, {
            className: "component_browser_chip_search_input--clearIcon--1KMS0",
            onClick: l
          })
        })]
      })
    }), p && jsx(Q, {
      id: X,
      isVisible: !!j.isSearchListOpen,
      position: j.dropdownPosition,
      containerRef: k,
      isLoading: c || !1,
      items: o || [],
      selectedIndex: j.selectedIndex,
      noItemsView: jsxs("div", {
        className: "component_browser_chip_search_input--noItemsView--dmc-y",
        children: [jsx("span", {
          className: "component_browser_chip_search_input--noItemsTitle--MF48d",
          children: getI18nString("dev_handoff.component_browser.no_results_found")
        }), v && jsx("div", {
          className: "component_browser_chip_search_input--hint--W3h7w",
          children: jsx("span", {
            children: v
          })
        })]
      }),
      renderItem: (e, n) => jsx(V, {
        icon: e.icon,
        title: e.title,
        subtitle: e.subtitle,
        onClick: () => I(e),
        isSelected: n === j.selectedIndex
      })
    })]
  });
});
let eo = ({
  searchTerm: e,
  libraryKey: n,
  selectedRepositories: o
}) => {
  let t = (o?.length ?? 0) > 0;
  let c = o[0];
  let [i] = setupResourceAtomHandler(Tp({
    libraryKey: n,
    repository: c?.id ?? ""
  }), {
    enabled: !!n && t && !!c,
    key: "repositorySourceFilesQuery"
  });
  let r = useMemo(() => {
    let n = e.match(/^https?:\/\/github\.com\/([a-zA-Z0-9-_.]+)\/([a-zA-Z0-9-_.]+)\/(?:blob|tree)\/([a-zA-Z0-9-_.]+)\/(.*)$/);
    if (n) {
      let [,,,, e] = n;
      return e;
    }
    let o = e.replace(/^https?:\/\//, "");
    if (/^[a-zA-Z0-9\-_./\\]+$/.test(o)) return o;
  }, [e]);
  return {
    result: useMemo(() => i.data && r ? $P(r, i.data, {
      keySelector: e => [e.path, e.name],
      threshold: .6,
      limit: 10,
      ignoreCase: !0,
      ignoreSymbols: !0
    }).map(e => ({
      title: e.name,
      subtitle: e.path,
      metadata: e
    })) : [], [i.data, r]),
    isLoading: "loading" === i.status || "disabled" === i.status
  };
};
let et = forwardRef(function (e, n) {
  let {
    sourceIndex,
    currentRowIndex,
    component,
    libraryKey,
    disabled,
    onFileChanged,
    selectedFile,
    selectedRepositories,
    onboardingKey,
    entrypoint
  } = e;
  let [h, u] = useState("");
  let [b] = _$$A3(h, 300);
  let f = (selectedRepositories?.length ?? 0) > 0;
  let v = component?.code_connect_info.v1.state === "ignored";
  let {
    result,
    isLoading
  } = eo({
    searchTerm: b,
    libraryKey,
    selectedRepositories
  });
  if (v) return jsx("span", {
    children: "--"
  });
  let j = component?.node_id;
  if (component && !j) return null;
  let y = selectedFile?.title ? {
    value: [{
      value: selectedFile.title,
      tooltip: selectedFile.metadata?.path
    }]
  } : void 0;
  return jsx(Z, {
    ref: n,
    arePillsClearable: !0,
    disabled,
    hint: getI18nString("dev_handoff.component_browser.file_search_hint"),
    isClearable: !1,
    isLoadingSearchResults: isLoading,
    onDeleteLastItem: () => {
      onFileChanged({
        sourceIndex,
        selectedFile: null,
        currentRowIndex,
        trackingProps: {
          location: e.location,
          source: "manual",
          entrypoint
        }
      });
    },
    onDropdownItemClick: n => {
      onFileChanged({
        sourceIndex,
        selectedFile: n,
        currentRowIndex,
        trackingProps: {
          location: e.location,
          source: "manual",
          entrypoint
        }
      });
    },
    onEnterPressed: n => {
      if ("" === n.trim()) return !1;
      if (0 === result.length) {
        let t = n.split("/");
        onFileChanged({
          sourceIndex,
          currentRowIndex,
          selectedFile: {
            title: Wq(t, n) ?? n,
            subtitle: n,
            metadata: {
              isCustomLink: !0,
              repository: {
                id: "",
                name: ""
              },
              path: n
            }
          },
          trackingProps: {
            location: e.location,
            source: "manual",
            entrypoint
          }
        });
        return !0;
      }
      u(n);
      return !1;
    },
    onValueChanged: e => {
      u(e);
    },
    onboardingKey,
    placeholder: selectedFile ? "" : getI18nString("dev_handoff.component_browser.paste_code_link"),
    searchResults: result,
    selectedItem: y,
    showDropdown: f
  });
});
let es = "component_browser_bulk_icon_connect--container--j5G1s";
let ec = "component_browser_bulk_icon_connect--content--6ciQR";
let ei = "component_browser_bulk_icon_connect--connectStateText--y18Lf";
let er = "component_browser_bulk_icon_connect--spinnerContainer--zuPn7";
let ea = "component_browser_bulk_icon_connect--progressText--5HqXg";
let el = "component_browser_bulk_icon_connect--connectStateContainer--i7RgN";
let ed = "component_browser_bulk_icon_connect--connectStateRightContent--5AW1y";
var e_ = (e => (e.INITIAL = "initial", e.CONNECTING = "connecting", e.CONNECTED = "connected", e.DISCONNECTING = "disconnecting", e))(e_ || {});
function em({
  connectedComponents: e,
  onDeleteMapping: n,
  entrypoint: o
}) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  return jsxs(bL, {
    manager,
    children: [jsx(_$$d, {
      "aria-label": getI18nString("dev_handoff.component_browser.bulk_icon_connect.more_options"),
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.component_browser.bulk_icon_connect.more_options"),
        "data-tooltip-type": KindEnum.TEXT
      },
      ...getTriggerProps(),
      children: jsx(_$$J2, {})
    }), jsx(mc, {
      children: jsx(q7, {
        onClick: function () {
          for (let t of e) t.component.isIcon && n({
            codeConnectId: t.component.code_connect_info.v1.id,
            row: {
              ...t,
              selectedFile: null,
              selectedComponent: null
            },
            trackingProps: {
              location: "list_view",
              entrypoint: o
            }
          });
        },
        disabled: 0 === e.length,
        children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.disconnect_all")
      })
    })]
  });
}
function ep({
  connectedComponents: e,
  notConnectedComponents: n,
  onConnectMapping: o,
  libraryKey: c,
  entrypoint: i
}) {
  let [a, l] = useState(null);
  let [_, m] = useState("initial");
  let [p, h] = useState(0);
  let [u, b] = useState(0);
  let f = useRef(null);
  let v = OG(c);
  useEffect(() => {
    0 === e.length && "connected" === _ && m("initial");
  }, [e, _]);
  let x = useCallback(e => {
    l(e.selectedFile);
  }, []);
  let w = () => {
    if (a) for (let e of (m("connecting"), h(0), b(n.length), n)) o({
      row: {
        assetKey: e.assetKey,
        sourceIndex: e.sourceIndex,
        component: e.component,
        selectedFile: a,
        selectedComponent: {
          title: e.component.name
        }
      },
      trackingProps: {
        location: "list_view",
        source: "manual",
        entrypoint: i
      },
      callback: e => {
        if (e) {
          m("initial");
          return;
        }
        h(e => e + 1);
        p === u && m("connected");
      }
    });
  };
  return jsx(UI3ConditionalWrapper, {
    children: (() => {
      switch (_) {
        case "initial":
          return n.length > 0 && jsx("div", {
            className: es,
            children: jsx("div", {
              className: "component_browser_bulk_icon_connect--initialContent--yYbWa",
              children: jsxs(Fragment, {
                children: [jsxs("div", {
                  className: "component_browser_bulk_icon_connect--header--z22ji",
                  children: [jsx("h2", {
                    className: "component_browser_bulk_icon_connect--title--Ssiyo",
                    children: e.length > 0 ? getI18nString("dev_handoff.component_browser.bulk_icon_connect.connect_remaining", {
                      count: n.length
                    }) : getI18nString("dev_handoff.component_browser.bulk_icon_connect.connect_all", {
                      count: n.length
                    })
                  }), jsx("p", {
                    className: "component_browser_bulk_icon_connect--description--fumpL",
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.description")
                  })]
                }), jsxs("div", {
                  className: "component_browser_bulk_icon_connect--inputGroup--rMbmm",
                  children: [jsx(et, {
                    ref: f,
                    sourceIndex: 0,
                    libraryKey: c,
                    onFileChanged: x,
                    selectedFile: a,
                    selectedRepositories: v?.selectedRepositories ?? [],
                    location: "list_view",
                    entrypoint: i
                  }), jsx(ButtonPrimitive, {
                    className: "component_browser_bulk_icon_connect--connectButton--QRuMQ",
                    onClick: w,
                    disabled: !a,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.connect_button")
                  })]
                })]
              })
            })
          });
        case "connecting":
          return jsx("div", {
            className: es,
            children: jsx("div", {
              className: ec,
              children: jsxs("div", {
                className: el,
                children: [jsxs("div", {
                  className: er,
                  children: [jsx(_$$k2, {
                    size: "sm"
                  }), jsx("h2", {
                    className: ei,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.connecting_progress")
                  })]
                }), jsx("div", {
                  className: ed,
                  children: jsx("p", {
                    className: ea,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.connected_progress", {
                      connected: p,
                      total: u
                    })
                  })
                })]
              })
            })
          });
        case "connected":
          return jsx("div", {
            className: es,
            children: jsx("div", {
              className: ec,
              children: jsxs("div", {
                className: el,
                children: [jsxs("div", {
                  className: "component_browser_bulk_icon_connect--checkmarkContainer---3EnN",
                  children: [jsx(_$$g, {
                    className: "component_browser_bulk_icon_connect--checkmark--l-ftB",
                    style: {
                      "--color-icon": "var(--color-icon-success)"
                    }
                  }), jsx("h2", {
                    className: ei,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.connected_success", {
                      count: e.length
                    })
                  })]
                }), jsx("div", {
                  className: ed,
                  children: jsx(_$$K, {
                    "aria-label": getI18nString("dev_handoff.component_browser.bulk_icon_connect.close_notification"),
                    onClick: () => m("initial"),
                    children: jsx(_$$A2, {})
                  })
                })]
              })
            })
          });
        case "disconnecting":
          return jsx("div", {
            className: es,
            children: jsx("div", {
              className: ec,
              children: jsxs("div", {
                className: el,
                children: [jsxs("div", {
                  className: er,
                  children: [jsx(_$$k2, {
                    size: "sm"
                  }), jsx("h2", {
                    className: ei,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.disconnecting_progress")
                  })]
                }), jsx("div", {
                  className: ed,
                  children: jsx("p", {
                    className: ea,
                    children: getI18nString("dev_handoff.component_browser.bulk_icon_connect.disconnected_progress", {
                      disconnected: p,
                      total: u
                    })
                  })
                })]
              })
            })
          });
      }
    })()
  });
}
let eg = "progress_ring--ring--QMZk8";
function ex(e) {
  let {
    fraction,
    stroke = 2,
    size = 16,
    color = "var(--color-icon-menu-tertiary, rgba(255, 255, 255, 0.4))"
  } = e;
  let i = size / 2;
  let r = (size - stroke) / 2;
  let a = 2 * r * Math.PI;
  return jsxs("svg", {
    height: size,
    width: size,
    children: [e.background && jsx("circle", {
      className: eg,
      strokeWidth: stroke,
      strokeDasharray: `${a} ${a}`,
      strokeDashoffset: 0,
      r: r,
      cx: i,
      cy: i,
      style: {
        stroke: e.background
      }
    }), jsx("circle", {
      className: eg,
      strokeWidth: stroke,
      strokeDasharray: `${a} ${a}`,
      style: {
        strokeDashoffset: a - fraction * a,
        stroke: color
      },
      r: r,
      cx: i,
      cy: i
    })]
  });
}
let ew = "component_browser_library_view_mapping_counts--statusRow--U5TVX";
let ej = "component_browser_library_view_mapping_counts--statusText--EMe8n";
let ey = "component_browser_library_view_mapping_counts--iconRingContainer--35-2h";
let eN = "component_browser_library_view_mapping_counts--centeredIcon--9-npT";
function eC({
  notConnectedComponents: e,
  connectedComponents: n,
  ignoredComponents: o
}) {
  let s = n.length + e.length + o.length;
  let c = e => 0 === s ? 0 : Math.round(e / s * 100);
  return jsxs("div", {
    className: "component_browser_library_view_mapping_counts--container--rjZ68",
    children: [jsx("div", {
      className: "component_browser_library_view_mapping_counts--border--M34yA"
    }), jsx("div", {
      className: "component_browser_library_view_mapping_counts--headerRow--dorJ-",
      children: jsx("div", {
        className: "component_browser_library_view_mapping_counts--title--mlZdy",
        children: renderI18nText("dev_handoff.component_browser_right_panel_mapping_counts.title")
      })
    }), jsxs("div", {
      className: "component_browser_library_view_mapping_counts--statusSection--229SS",
      children: [jsxs("div", {
        className: ew,
        children: [jsxs("div", {
          className: ey,
          children: [jsx(ex, {
            fraction: c(e.length) / 100,
            color: "var(--color-multiplayergrey)",
            background: "var(--color-bg-secondary)",
            size: 32,
            stroke: 4
          }), jsx(_$$w, {
            className: eN,
            style: {
              "--color-icon": "var(--color-multiplayergrey)"
            }
          })]
        }), jsx("div", {
          className: ej,
          children: renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_need_to_be_mapped", {
            num_components: c(e.length)
          })
        })]
      }), jsxs("div", {
        className: ew,
        children: [jsxs("div", {
          className: ey,
          children: [jsx(ex, {
            fraction: c(n.length) / 100,
            color: "var(--color-bg-handoff)",
            background: "var(--color-bg-handoff-tertiary)",
            size: 32,
            stroke: 4
          }), jsx(_$$W, {
            className: eN,
            style: {
              "--color-icon": "var(--color-bg-handoff)"
            }
          })]
        }), jsx("div", {
          className: ej,
          children: renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_mapped", {
            num_components: c(n.length)
          })
        })]
      }), jsxs("div", {
        className: ew,
        children: [jsxs("div", {
          className: ey,
          children: [jsx(ex, {
            fraction: c(o.length) / 100,
            color: "var(--color-bg-warning)",
            background: "var(--color-bg-warning-tertiary)",
            size: 32,
            stroke: 4
          }), jsx(_$$M, {
            className: eN,
            style: {
              "--color-icon": "var(--color-icon-warning)"
            }
          })]
        }), jsx("div", {
          className: ej,
          children: renderI18nText("dev_handoff.component_browser.in_context_section_percent_components_can_t_be_mapped", {
            num_components: c(o.length)
          })
        })]
      })]
    })]
  });
}
let eI = "component_browser_library_view_suggestions_status--container--qSV-D";
let eT = "component_browser_library_view_suggestions_status--border--Jw79U";
let eL = "component_browser_library_view_suggestions_status--header--kBmN-";
let eR = "component_browser_library_view_suggestions_status--headerRow--QgWgT";
let eE = "component_browser_library_view_suggestions_status--title--inV3P";
let eM = "component_browser_library_view_suggestions_status--statusSection--BDuQ4";
let eD = "component_browser_library_view_suggestions_status--statusDescriptionRow--Iehb8";
let eO = "component_browser_library_view_suggestions_status--statusDescription---7S3f";
let eP = "component_browser_library_view_suggestions_status--statusDotCircle--5M5TN";
let eA = "component_browser_library_view_suggestions_status--statusDotCircleTertiary--AnmEk";
let eF = "component_browser_library_view_suggestions_status--statusButtonContainer--BkWpr";
function eK({
  indexingState: e,
  componentsWithSuggestionsCount: n,
  totalComponentsCount: o,
  onChooseDirectories: s,
  onViewSuggestions: c
}) {
  let r = "";
  let a = "";
  let l = eP;
  let d = "";
  let _ = () => {};
  switch (e) {
    case "directory_selection_required":
      r = getI18nString("dev_handoff.component_browser.suggestions_status.no_suggestions");
      a = getI18nString("dev_handoff.component_browser.suggestions_status.directory_selection_required_description");
      l = eP + " " + eA;
      d = getI18nString("dev_handoff.component_browser.suggestions_status.choose_directories");
      _ = s;
      break;
    case "indexing":
      r = getI18nString("dev_handoff.component_browser.suggestions_status.indexing_in_progress");
      a = getI18nString("dev_handoff.component_browser.suggestions_status.indexing_description");
      l = eP + " component_browser_library_view_suggestions_status--statusDotCircleWarning--XNDIt";
      break;
    case "complete_available_components":
      r = getI18nString("dev_handoff.component_browser.suggestions_status.suggestions_available");
      a = getI18nString("dev_handoff.component_browser.suggestions_status.suggestions_available_description", {
        suggestions_count: n ?? 0,
        total_components_count: o ?? 0
      });
      l = eP + " component_browser_library_view_suggestions_status--statusDotCircleHandoff--Vd7wB";
      d = getI18nString("dev_handoff.component_browser.suggestions_status.view_suggestions");
      _ = c;
      break;
    case "complete_no_available_components":
      r = getI18nString("dev_handoff.component_browser.suggestions_status.no_suggestions");
      a = getI18nString("dev_handoff.component_browser.suggestions_status.no_suggestions_description");
      l = eP + " " + eA;
  }
  return jsxs("div", {
    className: eI,
    children: [jsx("div", {
      className: eT
    }), jsx("div", {
      className: eL,
      children: jsxs("div", {
        className: eR,
        children: [jsx(_$$N, {}), jsx("div", {
          className: eE,
          children: jsx("p", {
            children: getI18nString("dev_handoff.component_browser.suggestions_status.title")
          })
        })]
      })
    }), jsxs("div", {
      className: eM,
      children: [jsxs("div", {
        className: "component_browser_library_view_suggestions_status--statusRow--BJKC5",
        children: [jsx("div", {
          className: l
        }), jsx("div", {
          className: "component_browser_library_view_suggestions_status--statusText--IRVPD",
          children: jsx("p", {
            children: r
          })
        })]
      }), jsx("div", {
        className: eD,
        children: jsx("div", {
          className: eO,
          children: jsx("p", {
            children: a
          })
        })
      }), d.length > 0 && jsx("div", {
        className: eF,
        children: jsx(Button, {
          variant: "secondary",
          onClick: _,
          children: d
        })
      })]
    })]
  });
}
function eq({
  onChooseDirectories: e
}) {
  let n = trackDefinedFileEventWithStore();
  return jsxs("div", {
    className: eI,
    children: [jsx("div", {
      className: eT
    }), jsx("div", {
      className: eL,
      children: jsx("div", {
        className: eR,
        children: jsx("div", {
          className: u()(eE, "component_browser_library_view_suggestions_status--directorySelectionRequiredTitle--ZQzx-"),
          children: jsx("p", {
            children: getI18nString("dev_handoff.component_browser.suggestions_status.pick_directories")
          })
        })
      })
    }), jsxs("div", {
      className: eM,
      children: [jsx("div", {
        className: eD,
        children: jsx("div", {
          className: eO,
          children: jsx("p", {
            children: getI18nString("dev_handoff.component_browser.suggestions_status.directory_selection_required_description")
          })
        })
      }), jsx("div", {
        className: eF,
        children: jsx(Button, {
          variant: "secondary",
          onClick: () => {
            e();
            n("component_browser.clicked_change_directories", {
              location: "directories_not_picked_cta"
            });
          },
          children: getI18nString("dev_handoff.component_browser.suggestions_status.choose_directories")
        })
      })]
    })]
  });
}
function eB({
  notConnectedComponents: e,
  connectedComponents: n,
  ignoredComponents: o,
  suggestionsAvailableComponents: s,
  repositoryDirectories: c,
  directoriesHasLoaded: i,
  onChooseDirectories: r,
  onViewSuggestions: a,
  libraryKey: l
}) {
  let {
    indexingState,
    componentsWithSuggestionsCount,
    hasLoaded
  } = function (e, n, o) {
    let {
      ingestionStatus,
      hasLoaded: _hasLoaded
    } = _$$K2(o);
    if (0 === n.length) return {
      indexingState: "directory_selection_required",
      componentsWithSuggestionsCount: 0,
      hasLoaded: _hasLoaded
    };
    if ("in_progress" === ingestionStatus || "not_connected" === ingestionStatus) return {
      indexingState: "indexing",
      componentsWithSuggestionsCount: 0,
      hasLoaded: _hasLoaded
    };
    let c = e.length;
    return 0 === c ? {
      indexingState: "complete_no_available_components",
      componentsWithSuggestionsCount: 0,
      hasLoaded: _hasLoaded
    } : {
      indexingState: "complete_available_components",
      componentsWithSuggestionsCount: c,
      hasLoaded: _hasLoaded
    };
  }(s, c, l);
  let h = hasLoaded && i;
  return jsxs("div", {
    className: "component_browser_library_view_analysis_card--container--GT6I0",
    children: [jsx(eC, {
      notConnectedComponents: e,
      connectedComponents: n,
      ignoredComponents: o
    }), getFeatureFlags().dt_component_browser_bulk_mapping && h && jsx(eK, {
      indexingState,
      componentsWithSuggestionsCount,
      totalComponentsCount: e.length + n.length + o.length,
      onChooseDirectories: r,
      onViewSuggestions: a
    }), !getFeatureFlags().dt_component_browser_bulk_mapping && getFeatureFlags().dt_component_browser_inline_suggestions && h && "directory_selection_required" === indexingState && jsx(eq, {
      onChooseDirectories: r
    })]
  });
}
let nn = registerModal(function (e) {
  let n = useModalManager(e);
  let {
    installMethod,
    setInstallMethod,
    availableInstallMethods
  } = gK(!0);
  let r = _$$G();
  return jsx(TrackingProvider, {
    name: "Codebase Suggestions Onboarding Modal",
    children: jsx(ModalRootComponent, {
      manager: n,
      width: "lg",
      height: "dynamic",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: jsxs("div", {
              className: "codebase_suggestions_onboarding_modal--title--xqlCj",
              children: [getI18nString("dev_handoff.codebase_suggestions.onboarding_title"), jsx(_$$E, {
                children: getI18nString("dev_handoff.codebase_suggestions.alpha")
              })]
            })
          })
        }), jsx(nB, {
          padding: 0,
          children: jsxs("div", {
            className: "codebase_suggestions_onboarding_modal--body--vuR62",
            children: [jsxs("div", {
              className: "codebase_suggestions_onboarding_modal--header--5Yg-p",
              children: [jsx("div", {
                className: "codebase_suggestions_onboarding_modal--heading--oSLk2",
                children: getI18nString("dev_handoff.codebase_suggestions.onboarding_body_title")
              }), jsx("p", {
                children: getI18nString("dev_handoff.codebase_suggestions.onboarding_body_description")
              }), "disabled" === r && jsx(_$$P, {}), availableInstallMethods.length > 1 && installMethod && jsx(no, {
                methodDetails: installMethod,
                onMethodChange: setInstallMethod,
                availableMethods: availableInstallMethods
              })]
            }), installMethod && jsx(_$$o2, {
              installMethod: installMethod.installMethod,
              onContinue: () => e.onClose()
            })]
          })
        }), jsx(wi, {
          children: jsx("div", {
            className: "codebase_suggestions_onboarding_modal--actionStrip--sGI6V",
            children: jsx(_$$n, {})
          })
        })]
      })
    })
  });
});
function no({
  methodDetails: e,
  onMethodChange: n,
  availableMethods: o
}) {
  return jsx(_$$bL, {
    value: e.installMethod,
    onChange: n,
    legend: jsx(_$$q, {
      children: getI18nString("dev_handoff.codebase_suggestions.installation_methods")
    }),
    children: o.map(e => jsx(RT, {
      value: e.installMethod,
      label: e.renderTitle()
    }, e.installMethod))
  });
}
let nm = "confirm_deletion_modal--bodyText--OTH-f";
let np = registerModal(function (e) {
  let n = useModalManager(e);
  let o = useCurrentPlanUser("ConfirmDeletionModal");
  let c = useDispatch();
  let r = "loaded" === o.status;
  let [a, l] = useState(!1);
  let d = o.data?.planKey;
  let _ = d?.type;
  let m = d?.parentId;
  let p = useCallback(async () => {
    if (_ && m) {
      trackEventAnalytics(WG);
      l(!0);
      try {
        await codeSuggestionAPIHandler.deleteAllCodeSuggestions({
          planParentType: _,
          planParentId: m
        });
        c(VisualBellActions.enqueue({
          type: "success",
          message: getI18nString("dev_handoff.codebase_suggestions.deletion_request_received_it_may_take_a_few_minutes_to_complete")
        }));
        e.onClose();
      } catch (e) {
        c(VisualBellActions.enqueue({
          type: "error",
          message: getI18nString("dev_handoff.codebase_suggestions.failed_to_submit_deletion_request_please_try_again_later")
        }));
        l(!1);
      }
    }
  }, [e, c, _, m]);
  return jsx(ModalRootComponent, {
    manager: n,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("dev_handoff.codebase_suggestions.delete_all_visual_codebase_suggestions")
        })
      }), jsxs(nB, {
        children: [jsx("p", {
          className: nm,
          children: getI18nString("dev_handoff.codebase_suggestions.are_you_sure_you_want_to_delete_all_the_visual_codebase_suggestions_that_have_been_collected_so_far")
        }), jsx("p", {
          className: nm,
          children: getI18nString("dev_handoff.codebase_suggestions.this_will_delete_all_the_visual_codebase_suggestions_that_have_been_collected_so_far_for_your_organization_you_ll_need_to_connect_your_running_app_again_if_you_change_your_mind")
        }), jsx("p", {
          className: nm,
          children: getI18nString("dev_handoff.codebase_suggestions.this_will_not_delete_any_explicit_code_connect_mappings_you_have_made_with_those_suggestions")
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: e.onClose,
            children: getI18nString("dev_handoff.codebase_suggestions.cancel")
          }), jsx(Button, {
            variant: "destructive",
            disabled: !(r && !a),
            onClick: p,
            children: getI18nString("dev_handoff.codebase_suggestions.delete")
          })]
        })
      })]
    })
  });
});
let nh = "component_browser_settings_panel--iconContainer--xstoF";
let nu = "component_browser_settings_panel--optionTitleText--KwUII";
let nb = "component_browser_settings_panel--option--v7PyN";
let nf = "component_browser_settings_panel--optionTitle--hQS7B";
let nv = "component_browser_settings_panel--directoryItem--IBCJc";
let ng = "component_browser_settings_panel--directoryIcon--bccXc";
let nx = "component_browser_settings_panel--directoryItemText--Dxd-X";
function nw({
  onChangeRepo: e,
  onChangeGithubDirectories: n,
  status: o,
  hasMultipleAvailableRepositories: c
}) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let l = _$$e3();
  let [d, _] = useState(!1);
  let p = async () => {
    _(!0);
    try {
      await l();
    } finally {
      _(!1);
    }
  };
  let h = async () => {
    let e = await _$$l2();
    FJ(e.manage);
  };
  let u = {
    [w6.Connected]: jsxs(Fragment, {
      children: [c && jsx(q7, {
        onClick: e,
        children: getI18nString("dev_handoff.component_browser.settings.change_repository")
      }), getFeatureFlags().dt_component_browser_inline_suggestions && jsx(q7, {
        onClick: n,
        children: getI18nString("dev_handoff.component_browser.settings.change_github_directories")
      }), jsx(q7, {
        onClick: h,
        children: getI18nString("dev_handoff.component_browser.settings.disconnect")
      })]
    }),
    [w6.NeedsInfo]: jsx(Fragment, {
      children: jsx(q7, {
        onClick: e,
        children: getI18nString("dev_handoff.component_browser.settings.select_repository")
      })
    }),
    [w6.Pending]: jsx(Fragment, {
      children: jsx(q7, {
        onClick: h,
        children: getI18nString("dev_handoff.component_browser.settings.manage_request")
      })
    }),
    [w6.NotSetup]: jsx(Fragment, {
      children: jsx(q7, {
        onClick: p,
        children: d ? jsx(_$$k2, {
          size: "sm"
        }) : getI18nString("dev_handoff.component_browser.settings.setup")
      })
    })
  };
  return jsxs(bL, {
    manager,
    children: [jsx(Button, {
      variant: "ghost",
      ...getTriggerProps(),
      children: jsx(_$$J2, {})
    }), jsx(mc, {
      children: u[o]
    })]
  });
}
function nj() {
  let e = useDispatch();
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let c = useCallback(() => {
    e(showModalHandler({
      type: nn
    }));
  }, [e]);
  let r = useCallback(() => {
    e(showModalHandler({
      type: np
    }));
  }, [e]);
  return jsx("div", {
    className: "component_browser_settings_panel--setupIngestionButton---keGz",
    children: jsxs(bL, {
      manager,
      children: [jsx(Button, {
        variant: "ghost",
        ...getTriggerProps(),
        children: jsx(_$$J2, {})
      }), jsxs(mc, {
        children: [jsx(q7, {
          onClick: c,
          children: getI18nString("dev_handoff.component_browser.settings.setup")
        }), jsx(q7, {
          onClick: r,
          children: getI18nString("dev_handoff.codebase_suggestions.delete_all_codebase_suggestions")
        })]
      })]
    })
  });
}
function ny({
  status: e
}) {
  switch (e) {
    case w6.Pending:
      return jsx(_$$E, {
        variant: "warningOutline",
        children: getI18nString("dev_handoff.component_browser_source_connection_status.pending")
      });
    case w6.NeedsInfo:
      return jsx(_$$E, {
        variant: "warningOutline",
        children: getI18nString("dev_handoff.component_browser_source_connection_status.needs_info")
      });
    case w6.Connected:
      return jsx(_$$E, {
        variant: "successOutline",
        children: getI18nString("dev_handoff.component_browser_source_connection_status.connected")
      });
    default:
      return jsx(_$$E, {
        variant: "inactiveOutline",
        children: getI18nString("dev_handoff.component_browser_source_connection_status.not_setup")
      });
  }
}
function nN({
  position: e,
  getContainerProps: n,
  onOpenChange: o,
  libraryKey: c
}) {
  let i = "dark" === DP();
  let r = trackDefinedFileEventWithStore();
  let a = _$$A4();
  let l = i ? buildUploadUrl("87362980e1543a5db4a0044590b04d5f491a1e75") : buildUploadUrl("a938cc4b8421dc36477282e09f83e9e6770065ed");
  let d = Bt();
  let _ = OG(c);
  let p = _?.selectedRepositories?.[0];
  let h = {
    [w6.Connected]: p?.name ?? getI18nString("dev_handoff.component_browser.settings.change_repository"),
    [w6.NeedsInfo]: getI18nString("dev_handoff.component_browser.settings.connect_github"),
    [w6.Pending]: getI18nString("dev_handoff.component_browser.settings.connect_github"),
    [w6.NotSetup]: getI18nString("dev_handoff.component_browser.settings.connect_github")
  };
  let u = _?.availableRepositories?.length && _.availableRepositories.length > 1;
  let {
    directories,
    isLoading
  } = _$$v({
    libraryKey: c,
    repositoryId: p?.id || ""
  });
  let [v, x] = useState(!1);
  return jsxs(PopoverPrimitiveContainer, {
    ...n(),
    className: "component_browser_settings_panel--container--bNvEu",
    style: {
      top: `${e.top + 24 + 8}px`,
      left: `${e.left - 320 + 24}px`,
      width: "320px"
    },
    children: [jsx("div", {
      className: "component_browser_settings_panel--title--I250A",
      children: getI18nString("dev_handoff.component_browser.settings.title")
    }), jsxs("div", {
      className: "component_browser_settings_panel--options--BisI-",
      children: [jsxs("div", {
        className: nb,
        children: [jsxs("div", {
          className: nf,
          children: [jsx("div", {
            className: nh,
            children: jsx(_$$f3, {})
          }), _?.queryStatus === _$$H.LOADING ? jsx("div", {
            className: nu,
            children: jsx(_$$k2, {
              size: "sm"
            })
          }) : jsx("div", {
            className: nu,
            children: jsx("div", {
              children: h[_.status]
            })
          })]
        }), jsxs("div", {
          className: "component_browser_settings_panel--optionActions--kGJXl",
          children: [jsx(ny, {
            status: _.status
          }), jsx(nw, {
            onChangeRepo: () => {
              d(SelectorType.REPO_SELECTOR);
              o(!1);
            },
            onChangeGithubDirectories: () => {
              d(SelectorType.DIRECTORY_SELECTOR);
              o(!1);
              r("component_browser.clicked_change_directories", {
                location: "options_menu"
              });
            },
            status: _.status,
            hasMultipleAvailableRepositories: !!u
          })]
        })]
      }), getFeatureFlags().dt_component_browser_inline_suggestions && _?.queryStatus !== _$$H.LOADING && _.status === w6.Connected && p?.id && jsx(Fragment, {
        children: isLoading ? jsx("div", {
          className: nb,
          children: jsxs("div", {
            className: nf,
            children: [jsx("div", {
              className: nh,
              children: jsx(_$$k2, {
                size: "sm"
              })
            }), jsx("div", {
              className: nu,
              children: jsx("span", {
                className: "component_browser_settings_panel--loadingText---ucZu",
                children: getI18nString("dev_handoff.component_browser.settings.loading_directories")
              })
            })]
          })
        }) : directories.length > 0 ? jsx(Fragment, {
          children: jsxs("div", {
            className: "component_browser_settings_panel--directoriesList--QPnWw",
            children: [(v ? directories : directories.slice(0, 2)).map((e, n) => jsxs("div", {
              className: nv,
              children: [jsx("div", {
                className: `${nh} ${ng}`,
                children: jsx(_$$e2, {})
              }), jsx("div", {
                className: nx,
                "data-tooltip": e,
                "data-tooltip-type": KindEnum.TEXT,
                children: e
              })]
            }, n)), directories.length > 2 && !v && jsxs("button", {
              className: nv,
              onClick: () => x(!0),
              children: [jsx("div", {
                className: `${nh} ${ng}`,
                children: jsx(_$$f2, {})
              }), jsx("div", {
                className: nx,
                children: getI18nString("dev_handoff.component_browser.settings.see_more_directories", {
                  count: directories.length - 2
                })
              })]
            })]
          })
        }) : null
      }), a && jsxs("div", {
        className: nb,
        children: [jsxs("div", {
          className: nf,
          children: [jsx("div", {
            className: nh,
            children: jsx(oW, {
              src: l,
              alt: getI18nString("dev_handoff.component_browser_onboarding.connected_projects_icon"),
              className: "component_browser_settings_panel--cardImage--YKour"
            })
          }), jsx("div", {
            className: nu,
            children: getI18nString("dev_handoff.component_browser.settings.connect_running_app")
          })]
        }), jsx("div", {
          children: jsx(nj, {})
        })]
      }), jsx("div", {
        className: "component_browser_settings_panel--footer--2OuKN",
        children: renderI18nText("dev_handoff.component_browser.settings.footer_message", {
          learnMore: jsx(_$$N2, {
            href: "https://docs.google.com/document/d/1IsJTLpqR1rRQfphfbotvWoYbtoaZExKpggeANRFmRI8/edit?tab=t.0",
            newTab: !0,
            "aria-label": getI18nString("dev_handoff.component_browser.settings.footer_message_link"),
            children: getI18nString("dev_handoff.component_browser.settings.footer_message_link")
          })
        })
      })]
    })]
  });
}
function nC({
  libraryKey: e
}) {
  let n = useRef(null);
  let [o, c] = useState(!1);
  let {
    getTriggerProps,
    getContainerProps
  } = usePopoverPrimitive({
    isOpen: o,
    onOpenChange: c,
    type: "menu",
    softDismiss: !0
  });
  return jsxs(Fragment, {
    children: [jsx(_$$d, {
      ...getTriggerProps(),
      "aria-label": getI18nString("dev_handoff.component_browser.settings"),
      htmlAttributes: {
        "data-tooltip": getI18nString("dev_handoff.codebase_suggestions.open_settings"),
        "data-tooltip-type": KindEnum.TEXT
      },
      "data-onboarding-key": k1.Step3,
      "aria-expanded": o,
      ref: n,
      children: jsx(_$$I, {})
    }), jsx(nN, {
      getContainerProps,
      onOpenChange: c,
      position: n.current?.getBoundingClientRect() ?? {
        top: 0,
        left: 0
      },
      libraryKey: e
    })]
  });
}
let nI = "component_browser_library_view--detail--suoco";
let nT = "component_browser_library_view--componentsListLoadingOrError--JChCC";
function nL({
  isDetailViewOpen: e,
  searchQuery: n,
  setSearchQuery: o,
  dropdownFilter: s,
  setDropdownFilter: c,
  componentCounts: i,
  sortBy: r,
  setSortBy: a
}) {
  return jsx("div", {
    className: u()("component_browser_library_view--componentsListFilters--M4se4", {
      [nI]: e
    }),
    children: jsxs("div", {
      className: u()("component_browser_library_view--componentsListFiltersInner--t95XT", {
        [nI]: e
      }),
      children: [jsx(nM, {
        isDetailViewOpen: e,
        value: n,
        onChange: o
      }), !e && jsxs("div", {
        className: u()("component_browser_library_view--componentsListFiltersRight--d-PGj", {
          [nI]: e
        }),
        children: [jsx(_$$z, {
          componentCounts: i,
          dropdownFilter: s,
          setDropdownFilter: c
        }), jsx(T, {
          currentSort: r,
          onSortChange: a
        })]
      })]
    })
  });
}
function nR({
  location: e,
  isDetailViewOpen: n,
  isIconsFlow: o,
  libraryKey: s,
  connectedComponents: l,
  onDeleteMapping: d,
  exitComponentBrowser: _,
  showSuggestionsDebug: p,
  setShowSuggestionsDebug: h,
  entrypoint: b
}) {
  return jsxs("div", {
    className: u()("component_browser_library_view--header--pZiav", n && nI),
    children: [jsxs("div", {
      className: "component_browser_library_view--headerLeft--coXBP",
      children: [jsx("h1", {
        className: "component_browser_library_view--headerText--jnhLj",
        children: o ? getI18nString("dev_handoff.component_browser.map_icons_to_code_title") : getI18nString("dev_handoff.component_browser.title")
      }), jsx(_$$E, {
        variant: "defaultOutline",
        children: getI18nString("dev_handoff.component_browser.alpha")
      })]
    }), jsxs("div", {
      className: "component_browser_library_view--headerRight--iwCrG",
      children: [getFeatureFlags().dt_component_browser_suggestions_debug && jsxs(Button, {
        onClick: () => {
          h(!p);
        },
        children: [p ? "Hide" : "Show", " Suggestions Debug"]
      }), jsx(nC, {
        libraryKey: s
      }), o && jsx(em, {
        connectedComponents: l,
        onDeleteMapping: d,
        entrypoint: b
      }), "file" === e && jsx(_$$K, {
        "aria-label": getI18nString("dev_handoff.component_browser.close_component_browser"),
        onClick: _,
        children: jsx(_$$L, {})
      })]
    })]
  });
}
export function $$nE0(e) {
  let n = e.componentKey;
  let o = _$$l(e.libraryKey);
  let c = bh();
  let i = $$nD1(o);
  let r = useAtomWithSubscription(_$$a);
  let a = xV();
  let l = kZ();
  let h = Bt();
  let b = getFeatureFlags().dt_component_browser_icons_flow && "icons" === r;
  let [v, w] = useState(new Set());
  let C = OG(o);
  let k = C?.selectedRepositories[0]?.id;
  let {
    directories,
    hasLoaded
  } = _$$v({
    libraryKey: o,
    repositoryId: k || ""
  }, {
    enabled: !!o && !!k
  });
  let {
    inputRefs,
    status,
    displayedComponent,
    displayedComponentIndex,
    onDisplayedComponentChanged,
    onFileChanged,
    onComponentChanged,
    onValueChange,
    onConfirmConnection,
    onConfirmSuggestion,
    onMoreActionsMenuItemClick,
    filteredComponents,
    searchQuery,
    setSearchQuery,
    dropdownFilter,
    setDropdownFilter,
    sortBy,
    setSortBy,
    onConnectMapping,
    onDeleteMapping,
    onIgnoreMapping,
    onDisplayNextComponent,
    onDisplayPreviousComponent,
    getIndexOfComponent,
    connectedComponents,
    notConnectedComponents,
    ignoredComponents,
    suggestionsAvailableComponents,
    componentCounts,
    suggestions,
    onBulkConfirmSuggestions,
    onActiveRowChange,
    activeRowKey,
    searchSessionId,
    isLoadingSuggestions
  } = dx({
    libraryKey: o,
    componentKey: n,
    defaultFilter: e.defaultFilter,
    entrypoint: e.entrypoint
  });
  let ef = "loading" === i || "loading" === status;
  let ev = useCallback(e => {
    if (e === qd.OpenDialog) {
      if (filteredComponents.length > 0 && !displayedComponent) {
        let e = filteredComponents[0];
        e && onDisplayedComponentChanged(e);
      }
    } else e === qd.CloseDialog && onDisplayedComponentChanged(null);
  }, [filteredComponents, displayedComponent, onDisplayedComponentChanged]);
  let [eg, ex] = Vc("component_browser_show_suggestions_debug", !0);
  let ew = useMemo(() => !!displayedComponent && !0 === i, [displayedComponent, i]);
  let ej = useMemo(() => ew ? ["design"] : "suggestionsAvailable" === dropdownFilter ? ["checkbox", ..._$$x] : _$$x, [dropdownFilter, ew]);
  return jsxs(UI3ConditionalWrapper, {
    children: [jsx(Mj, {
      canShowOnboarding: !ef,
      onOnboardingSequenceAction: ev
    }), jsxs("div", {
      className: "component_browser_library_view--library--PmYvJ",
      children: [jsx(nR, {
        connectedComponents,
        entrypoint: e.entrypoint,
        exitComponentBrowser: c,
        isDetailViewOpen: ew,
        isIconsFlow: b ?? !1,
        libraryKey: o,
        location: e.location,
        onDeleteMapping,
        setShowSuggestionsDebug: ex,
        showSuggestionsDebug: eg
      }), jsxs("div", {
        className: "component_browser_library_view--container--sxcXn",
        children: [jsxs("div", {
          className: u()("component_browser_library_view--containerLeft--tMnWN", {
            [nI]: ew
          }),
          children: [b && i && jsx(ep, {
            connectedComponents,
            entrypoint: e.entrypoint,
            getIndexOfComponent,
            ignoredComponents,
            libraryKey: o,
            notConnectedComponents,
            onConnectMapping,
            onDeleteMapping,
            onIgnoreMapping
          }), jsxs("div", {
            className: "component_browser_library_view--contentContainer--EKiHF",
            children: [jsx("div", {
              className: "component_browser_library_view--componentsToolbarAndList--o2Dlh",
              children: ef || i ? "errors" === status ? jsx("div", {
                className: nT,
                children: getI18nString("dev_handoff.component_browser.error_loading")
              }) : jsxs(Fragment, {
                children: [jsx(nL, {
                  isDetailViewOpen: ew,
                  searchQuery,
                  setSearchQuery,
                  dropdownFilter,
                  setDropdownFilter,
                  componentCounts,
                  sortBy,
                  setSortBy
                }), jsx(gP, {
                  activeRowKey,
                  bulkSuggestions: suggestions,
                  columns: ej,
                  data: filteredComponents,
                  dropdownFilter,
                  entrypoint: e.entrypoint,
                  hasConnections: connectedComponents.length > 0 || ignoredComponents.length > 0,
                  inputRefs,
                  isLoading: ef,
                  isLoadingSuggestions,
                  isShowingSideSheet: ew,
                  libraryKey: o,
                  location: "list_view",
                  onActiveRowChange,
                  onBulkConfirmSuggestions,
                  onComponentChanged,
                  onConfirmConnection,
                  onConfirmSuggestion,
                  onFileChanged,
                  onMoreActionsMenuItemClick,
                  onRowSelectionChange: "suggestionsAvailable" === dropdownFilter ? w : void 0,
                  onSelectComponent: onDisplayedComponentChanged,
                  onValueChange,
                  searchQuery,
                  searchSessionId,
                  selectedComponent: displayedComponent?.component ?? null,
                  selectedRows: "suggestionsAvailable" === dropdownFilter ? v : void 0,
                  showExpandChevron: !0,
                  showSuggestionsDebug: eg
                })]
              }) : jsx("div", {
                className: nT,
                children: getI18nString("dev_handoff.component_browser.no_permission")
              })
            }), !ew && jsx("div", {
              className: "component_browser_library_view--analysisCard--P-fU3",
              children: jsx(eB, {
                connectedComponents,
                directoriesHasLoaded: hasLoaded,
                ignoredComponents,
                libraryKey: o,
                notConnectedComponents,
                onChooseDirectories: () => {
                  h(SelectorType.DIRECTORY_SELECTOR);
                },
                onViewSuggestions: () => setDropdownFilter("suggestionsAvailable"),
                repositoryDirectories: directories,
                suggestionsAvailableComponents
              })
            })]
          })]
        }), ew && displayedComponent && jsx("div", {
          className: "component_browser_library_view--containerRight--zBqnJ",
          children: jsx(_$$o, {
            data: displayedComponent,
            entrypoint: e.entrypoint,
            inputRefs,
            isLoadingSuggestions,
            onActiveRowChange,
            onClose: () => onDisplayedComponentChanged(null),
            onComponentChanged,
            onConfirmConnection,
            onConfirmSuggestion,
            onDeleteMapping,
            onFileChanged,
            onIgnoreMapping,
            onRequestNextComponent: onDisplayNextComponent,
            onRequestPreviousComponent: onDisplayPreviousComponent,
            onValueChange,
            repositoryId: k,
            searchSessionId,
            sourceIndex: displayedComponentIndex
          })
        })]
      })]
    }), a && o && jsx(_$$A, {
      libraryKey: o,
      onClose: () => {
        h(SelectorType.NONE);
      },
      onBack: () => {
        h(SelectorType.NONE);
      },
      isDirectorySelection: l === SelectorType.DIRECTORY_SELECTOR
    })]
  });
}
function nM({
  value: e,
  onChange: n,
  isDetailViewOpen: o
}) {
  return jsxs("div", {
    className: u()("component_browser_library_view--searchBar--bauvr", {
      [nI]: o
    }),
    children: [jsx(_$$h, {}), jsx(LazyInputForwardRef, {
      placeholder: getI18nString("dev_handoff.component_browser.search_placeholder"),
      value: e,
      onChange: e => {
        n(e.currentTarget.value);
      },
      className: "component_browser_library_view--searchInput--tzNk- text--fontPos11--2LvXf text--_fontBase--QdLsd",
      spellCheck: !1
    }), !!e && jsx("div", {
      children: jsx(_$$K, {
        onClick: () => n(""),
        "aria-label": getI18nString("dev_handoff.component_browser.clear_search"),
        htmlAttributes: {
          "data-tooltip": getI18nString("dev_handoff.component_browser.clear_search"),
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$L, {})
      })
    })]
  });
}
export function $$nD1(e) {
  let n = useSubscription(LibraryKeyToFileLink({
    libraryKey: e ?? ""
  }), {
    enabled: !!e
  });
  return !!e && "errors" !== n.status && ("loading" === n.status ? "loading" : !!n.data?.libraryKeyToFile?.fileCanAccess);
}
export const ComponentBrowserLibraryView = $$nE0;
export const T_ = $$nD1;