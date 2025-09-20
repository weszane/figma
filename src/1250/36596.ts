import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useState, useCallback, Fragment as _$$Fragment, useRef, useMemo, useEffect } from "react";
import { lQ } from "../905/934246";
import { IconButton } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/44647";
import { f as _$$f } from "../905/54715";
import { V } from "../905/900932";
import { V as _$$V } from "../905/802779";
import { K as _$$K } from "../905/799615";
import p from "classnames";
import { H as _$$H } from "../figma_app/47866";
import { getI18nString } from "../905/303541";
import { OG, w6 } from "../1250/340571";
import { k1 } from "../1250/428971";
import { KindEnum } from "../905/129884";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { rt } from "../1250/282084";
import { trackEventAnalytics } from "../905/449184";
import { O as _$$O } from "../1250/664647";
import { A as _$$A } from "../1250/29260";
import { getLibraryName } from "../905/506188";
import { I as _$$I } from "../1250/564115";
var g = p;
function v({
  tooltip: e
}) {
  return jsx("div", {
    "data-tooltip": e,
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.TEXT,
    className: "component_browser_hotkey_indicator--hotkeyIcon---Qb3S",
    children: "\u21B5"
  });
}
function w({
  shortcut: e,
  state: t,
  sourceIndex: n,
  isInputEmpty: r,
  selectedFile: i
}) {
  return "not_connected" !== t || void 0 === n || !i && r ? null : jsx("div", {
    children: jsx(v, {
      tooltip: e
    })
  });
}
let A = forwardRef(({
  libraryKey: e,
  onClose: t
}, n) => {
  let [i, o] = useState(!1);
  let s = getLibraryName(e).unwrapOr(null);
  let d = useCallback(() => {
    o(!0);
  }, []);
  let c = useCallback(() => {
    o(!1);
    t();
  }, [t, o]);
  return s ? jsxs("div", {
    tabIndex: 0,
    className: "component_browser_input_github_dropdown--container--WQ5k5",
    ref: n,
    children: [jsx("div", {
      className: "component_browser_input_github_dropdown--header--uCNzg",
      children: getI18nString("dev_handoff.component_browser.github_repo_dropdown.header", {
        libraryName: s
      })
    }), jsx("div", {
      className: "component_browser_input_github_dropdown--description--GKHUI",
      children: getI18nString("dev_handoff.component_browser.github_repo_dropdown.description")
    }), jsx(Button, {
      variant: "primary",
      onClick: d,
      children: getI18nString("dev_handoff.component_browser.github_repo_dropdown.button")
    }), i && jsx(_$$A, {
      libraryKey: e,
      onClose: c,
      onBack: c
    })]
  }) : null;
});
let N = "component_browser_input--wrapper--VlXZo";
let O = "component_browser_input--disabled--QH8GR";
let R = "component_browser_input--readonly--m8lWF";
let M = "component_browser_input--chip--TzaRn";
let P = "component_browser_input--empty--wTZBe";
let D = "component_browser_input--max--kTrPE";
let L = "component_browser_input--chevron--gFXeX";
let F = "component_browser_input--buttonContainer--nLuhN";
let $$B3 = forwardRef((e, t) => {
  let {
    items,
    maxChipWidth,
    readonly,
    disabled,
    onRemoveLastItem,
    ...d
  } = e;
  return jsxs("div", {
    className: g()(N, "component_browser_input--multiChipInput--TokgR"),
    children: [items.map((e, t) => jsx(U, {
      parts: [e],
      maxItems: 1,
      maxChipWidth,
      readonly,
      disabled,
      onClear: () => onRemoveLastItem(t)
    }, e.value)), !readonly && jsx(G, {
      ref: t,
      items: [],
      maxItems: 1,
      onRemoveLastItem: lQ,
      ...d
    })]
  });
});
function U({
  parts: e,
  maxItems: t,
  maxChipWidth: n,
  readonly: i,
  disabled: s,
  onClear: l
}) {
  return jsxs("div", {
    className: g()(M, "component_browser_input--items--97pb-", {
      [P]: 0 === e.length,
      "component_browser_input--incomplete--sIuCz": e.length < t && !i,
      [O]: s,
      [R]: i
    }),
    children: [e.map((o, s) => {
      let l = s < e.length && s < t - 1 && !i || s < e.length - 1 && i;
      return jsxs(_$$Fragment, {
        children: [jsx("div", {
          className: "component_browser_input--item---g-f1",
          "data-tooltip": o.value,
          "data-tooltip-type": "text",
          style: {
            maxWidth: n ? `${n}px` : void 0
          },
          children: o.value
        }), l && jsx(_$$k, {
          className: L
        })]
      }, s);
    }), e.length === t && !i && jsx(IconButton, {
      "aria-label": getI18nString("dev_handoff.component_browser.clear_input"),
      onClick: l,
      children: jsx(_$$f, {})
    })]
  });
}
let G = forwardRef(({
  children: e,
  maxItems: t = 1,
  disabled: n = !1,
  onAddItem: r,
  onRemoveLastItem: i,
  onClearItems: s,
  onMaxItemsReached: l,
  items: d,
  value: _,
  onValueChange: u,
  onRequestPlaceholder: m,
  onFocus: p,
  onBlur: f,
  onKeyDown: b,
  readonly: x = !1
}, y) => {
  let v = d.length > 0;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: g()(M, "component_browser_input--inputWrapper--4eKiy", {
        [P]: !v,
        [D]: d.length >= t,
        [O]: n
      }),
      children: [jsx("input", {
        ref: y,
        onFocus: p,
        onBlur: f,
        placeholder: m(d.length),
        className: g()("component_browser_input--input--VpMqX", {
          [P]: !v,
          [D]: d.length >= t || x
        }),
        type: "text",
        value: _,
        onChange: e => {
          n || d.length >= t || u(e.target.value);
        },
        onKeyDown: e => {
          if (!(n || b(e))) switch (e.key) {
            case "Enter":
              if (d.length >= t) {
                l?.();
                return;
              }
              r({
                value: _
              }, d.length);
              e.preventDefault();
              break;
            case "Backspace":
              0 === _.length && d.length > 0 && (i(d.length - 1), e.preventDefault());
          }
        }
      }), v && d.length < t && !x && jsx(IconButton, {
        "aria-label": getI18nString("dev_handoff.component_browser.clear_input"),
        onClick: () => s(),
        children: jsx(_$$f, {})
      })]
    }), jsx("div", {
      className: g()(F, {
        "component_browser_input--filled--3Hnhr": v
      }),
      children: e
    })]
  });
});
let W = forwardRef((e, t) => {
  let {
    maxItems = 1,
    disabled = !1,
    onClearItems,
    items,
    maxChipWidth,
    readonly = !1
  } = e;
  return jsxs("div", {
    className: g()(N, {
      [O]: disabled,
      [R]: readonly
    }),
    children: [items.length > 0 && jsx(U, {
      parts: items,
      maxItems,
      maxChipWidth,
      readonly,
      disabled,
      onClear: () => onClearItems()
    }), !readonly && jsx(G, {
      ref: t,
      ...e
    })]
  });
});
var z = (e => (e.FILE = "file", e.COMPONENT = "component", e.CONFIRM = "confirm", e))(z || {});
export function $$$0({
  items: e,
  isSuggestion: t,
  onClick: n
}) {
  let i = jsxs(Fragment, {
    children: [t && jsx(V, {}), e.length > 0 && e.map((t, n) => jsxs(_$$Fragment, {
      children: [jsx("div", {
        className: "component_browser_input--chipLabel--4InwA",
        children: t
      }), n !== e.length - 1 && jsx("div", {
        className: L,
        children: jsx(_$$k, {})
      })]
    }, n))]
  });
  let o = g()(M, R, {
    "component_browser_input--suggestion--RaUTH": t
  });
  return n ? jsx(ButtonPrimitive, {
    className: o,
    onClick: n,
    children: i
  }) : jsx("div", {
    className: o,
    children: i
  });
}
export function $$q2({
  onConfirmConnection: e,
  showButton: t,
  disabled: n,
  children: r
}) {
  return jsx("div", {
    className: g()(F, {
      "component_browser_input--hidden--ffbn1": !t
    }),
    children: jsx(Button, {
      onClick: e,
      disabled: n,
      variant: "primary",
      children: r ?? getI18nString("dev_handoff.component_browser.connect")
    })
  });
}
export function $$V1({
  isFirstRow: e,
  item: t,
  isRowHovered: n,
  isLoading: i,
  sourceIndex: o,
  currentRowIndex: s,
  libraryKey: l,
  onComponentChanged: d,
  onFileChanged: c,
  onValueChange: _,
  onConfirmConnection: p,
  value: g = "",
  selectedFile: y,
  selectedComponent: v,
  suggestions: C,
  inputRefs: I,
  readonly: N = !1,
  autosave: O = !0,
  location: R,
  entrypoint: M,
  onBlur: P,
  isRowActive: D,
  onActiveRowChange: L,
  searchSessionId: F,
  isLoadingSuggestions: B
}) {
  let U = useCallback(e => {
    e && void 0 !== s && (I.current[s] = e);
  }, [s, I]);
  let [G, z] = useState([]);
  let $ = useRef(null);
  let V = useRef(null);
  let H = OG(l);
  let {
    result,
    isLoading
  } = _$$I({
    searchTerm: g,
    libraryKey: l,
    suggestions: C
  });
  let {
    results,
    isLoading: _isLoading
  } = function ({
    libraryKey: e,
    selectedFile: t,
    searchTerm: n,
    suggestions: a
  }) {
    let i = t?.metadata?.repository?.id;
    let o = t?.metadata?.path;
    let [s] = setupResourceAtomHandler(rt({
      libraryKey: e,
      repository: i ?? "",
      path: o ?? ""
    }), {
      enabled: !!t && !!e && !!i && !!o && !t?.metadata?.isCustomLink,
      key: `repositoryComponentsQuery-${o}`
    });
    let l = "loading" === s.status;
    let d = "loaded" === s.status;
    let c = s.data;
    let _ = useMemo(() => d && c ? c.components : [], [d, c]);
    let u = useMemo(() => a ? a.filter(e => e.src_path === o) : [], [a, o]);
    let m = useMemo(() => Array.from(new Set([...u.map(e => e.name), ..._])), [_, u]);
    return {
      results: useMemo(() => m.length ? m.filter(e => e.toLowerCase().includes(n.toLowerCase())).map((e, t) => ({
        title: e,
        subtitle: "",
        metadata: {
          index: t
        }
      })) : [], [n, m]),
      isLoading: l,
      searchTerm: n
    };
  }({
    libraryKey: l,
    selectedFile: y,
    searchTerm: g,
    suggestions: C
  });
  let X = function ({
    data: e
  }) {
    let {
      component,
      inputValue,
      selectedFile,
      selectedComponent,
      sourceIndex
    } = e;
    let s = component.code_connect_info.v1.state;
    let {
      shortcut
    } = useMemo(() => selectedFile ? selectedFile && !selectedComponent && inputValue && 0 === inputValue.length ? {
      shortcut: getI18nString("dev_handoff.component_browser.confirm_connection_shortcut")
    } : !selectedComponent && inputValue && inputValue.length > 0 ? {
      shortcut: getI18nString("dev_handoff.component_browser.connect_component_shortcut")
    } : {
      shortcut: getI18nString("dev_handoff.component_browser.confirm_connection_shortcut")
    } : {
      shortcut: getI18nString("dev_handoff.component_browser.connect_file_shortcut")
    }, [selectedFile, selectedComponent, inputValue]);
    let d = useMemo(() => selectedFile || inputValue && inputValue.length > 0 || selectedComponent && selectedFile, [selectedFile, inputValue, selectedComponent]);
    return {
      selectedFile,
      selectedComponent,
      shortcut,
      state: s,
      sourceIndex,
      canConnect: d,
      isInputEmpty: inputValue?.length === 0
    };
  }({
    data: t
  });
  let J = useMemo(() => {
    let e = 0 === G.length;
    let t = 1 === G.length;
    return e ? {
      results: result.map(e => ({
        title: e.title,
        subtitle: e.subtitle,
        icon: jsx(_$$V, {})
      })),
      isLoading
    } : t ? {
      results: results.map(e => ({
        title: e.title,
        subtitle: e.subtitle,
        icon: jsx(_$$K, {})
      })),
      isLoading: _isLoading
    } : {
      results: [],
      isLoading: !1
    };
  }, [result, results, G.length, isLoading, _isLoading]);
  let [ee, et] = useState({
    shouldBeVisible: !1,
    shouldShowGithubCTA: !1,
    selectedIndex: 0,
    sessionId: "",
    lastItemsLength: 0
  });
  let en = useMemo(() => D && ee.shouldBeVisible && H.status === w6.NeedsInfo && H.queryStatus === _$$H.LOADED, [ee.shouldBeVisible, H, D]);
  useEffect(() => {
    let e = [];
    y && e.push({
      value: y.subtitle ?? y.title
    });
    v && e.push({
      value: v.title
    });
    z(e);
  }, [y, v]);
  (function ({
    dropdownState: e,
    items: t,
    dropdownDataResultsLength: n,
    value: a,
    isRowActive: i,
    isLoadingSuggestions: o,
    isLoadingDropdownData: s,
    fileSearchResults: l,
    componentSearchResults: d,
    selectedFile: c,
    suggestions: _,
    location: u,
    entrypoint: m
  }) {
    let p = useRef(null);
    useEffect(() => {
      let r = {
        sessionId: e.sessionId,
        itemsLength: t.length
      };
      let g = p.current;
      let f = e.shouldBeVisible && n > 0;
      let h = !!e.sessionId;
      let b = 0 === a.length;
      let x = !g || g.sessionId !== e.sessionId || g.itemsLength !== t.length;
      if (f && h && b && i && x) {
        let n;
        let a;
        n = 0;
        a = 0;
        0 === t.length ? l.forEach(e => {
          _?.some(t => t.src_path === e.metadata?.path) ? n++ : a++;
        }) : 1 === t.length && d.forEach(e => {
          _?.some(t => t.src_path === c?.metadata?.path && t.name === e.title) ? n++ : a++;
        });
        let {
          aiCodebaseSuggestionsCount,
          lexicalSearchResultsCount
        } = {
          aiCodebaseSuggestionsCount: n,
          lexicalSearchResultsCount: a
        };
        trackEventAnalytics("component_browser.code_component_input_typeahead_displayed", {
          location: u,
          entrypoint: m,
          sessionId: e.sessionId,
          aiCodebaseSuggestionsCount,
          lexicalSearchResultsCount,
          hasCodebaseSuggestionsLoaded: !o,
          hasLexicalSearchLoaded: !s
        });
        p.current = r;
      }
    }, [e.shouldBeVisible, e.sessionId, n, i, t.length, l, d, c, _, u, m, o, s, a.length, t]);
  })({
    dropdownState: {
      shouldBeVisible: ee.shouldBeVisible,
      sessionId: ee.sessionId
    },
    items: G,
    dropdownDataResultsLength: J.results.length,
    value: g,
    isRowActive: D,
    isLoadingSuggestions: B,
    isLoadingDropdownData: J.isLoading,
    fileSearchResults: result,
    componentSearchResults: results,
    selectedFile: y ?? null,
    suggestions: C,
    location: R,
    entrypoint: M
  });
  let ea = useCallback(e => {
    switch (e) {
      case 0:
        return getI18nString("dev_handoff.component_browser.paste_code_link");
      case 1:
        return getI18nString("dev_handoff.component_browser.component_name");
    }
  }, []);
  let er = useCallback(() => {
    p({
      row: t,
      sourceIndex: o,
      currentRowIndex: s,
      trackingProps: {
        location: R,
        source: "manual",
        entrypoint: M,
        sessionId: ee.sessionId || crypto.randomUUID()
      }
    });
  }, [p, t, o, s, R, M, ee.sessionId]);
  let ei = () => {
    et(e => ({
      ...e,
      selectedIndex: 0
    }));
  };
  function eo(e, n) {
    let a = 0 === G.length;
    let r = 1 === G.length;
    if (et(e => ({
      ...e,
      selectedIndex: 0
    })), a) {
      let e = result[n];
      if (e) {
        let t = -1 !== (C ? C.findIndex(t => t.src_path === e.metadata?.path) : -1) ? "ai_codebase_suggestion" : "lexical_search_result";
        et(e => ({
          ...e,
          sourceOfLastInput: t
        }));
        c({
          save: O,
          sourceIndex: o,
          currentRowIndex: s,
          selectedFile: e,
          trackingProps: {
            location: R,
            source: t,
            entrypoint: M,
            sessionId: ee.sessionId || crypto.randomUUID()
          }
        });
        ei();
      }
    } else if (r && results[n]) {
      let n = -1 !== (C ? C.findIndex(n => n.src_path === t.selectedFile?.metadata?.path && n.name === e.title) : -1) ? "ai_codebase_suggestion" : "lexical_search_result";
      et(e => ({
        ...e,
        sourceOfLastInput: n
      }));
      d({
        save: O,
        sourceIndex: o,
        currentRowIndex: s,
        selectedComponent: e,
        action: "create",
        trackingProps: {
          location: R,
          source: n,
          entrypoint: M,
          sessionId: ee.sessionId || crypto.randomUUID()
        }
      });
      ei();
    }
    I.current && I.current.length > 0 && s && I.current[s]?.focus();
  }
  let es = (n || X.canConnect) && "connected" !== X.state;
  return jsxs("div", {
    className: "component_browser_input--container---QBDC",
    onBlur: P,
    "data-onboarding-key": e ? k1.Step2 : void 0,
    children: [jsxs("div", {
      className: "component_browser_input--inputContainer--3wDJt",
      children: [jsx(W, {
        ref: U,
        disabled: i,
        items: G,
        maxChipWidth: 110,
        maxItems: 2,
        onAddItem: (e, t) => {
          if (0 === g.length && y) {
            er?.();
            return;
          }
          switch (t) {
            case 0:
              c({
                save: O,
                sourceIndex: o,
                currentRowIndex: s,
                selectedFile: {
                  title: e.value,
                  subtitle: e.value,
                  metadata: {
                    isCustomLink: !1,
                    repository: {
                      id: "",
                      name: ""
                    },
                    path: e.value
                  }
                },
                trackingProps: {
                  location: R,
                  source: "manual",
                  entrypoint: M,
                  sessionId: ee.sessionId || crypto.randomUUID()
                }
              });
              break;
            case 1:
              d({
                save: O,
                sourceIndex: o,
                currentRowIndex: s,
                selectedComponent: {
                  title: e.value,
                  subtitle: e.value,
                  metadata: {
                    index: t
                  }
                },
                action: "create",
                trackingProps: {
                  location: R,
                  source: "manual",
                  entrypoint: M,
                  sessionId: ee.sessionId || crypto.randomUUID()
                }
              });
          }
        },
        onBlur: e => {
          let t = e.relatedTarget;
          t && $.current?.contains(t) || V && t && V.current?.contains(t) || et(e => ({
            ...e,
            shouldBeVisible: !1,
            selectedIndex: 0
          }));
        },
        onClearItems: () => {
          c({
            save: O,
            sourceIndex: o,
            currentRowIndex: s,
            selectedFile: null,
            trackingProps: {
              location: R,
              source: "manual",
              entrypoint: M,
              sessionId: ee.sessionId || crypto.randomUUID()
            }
          });
          et(e => ({
            ...e,
            shouldBeVisible: !1,
            selectedIndex: 0,
            lastItemsLength: 0,
            sourceOfLastInput: void 0
          }));
        },
        onFocus: () => {
          L(t.component.node_id);
          et(e => {
            let t = 0 === g.length && 0 === G.length && (e.lastItemsLength > 0 || !e.sessionId) ? crypto.randomUUID() : e.sessionId;
            return {
              ...e,
              shouldBeVisible: !0,
              selectedIndex: 0,
              sessionId: t,
              lastItemsLength: G.length
            };
          });
        },
        onKeyDown: e => {
          if ("ArrowDown" === e.key) {
            if (ee.selectedIndex < J.results.length - 1) {
              et(e => ({
                ...e,
                selectedIndex: e.selectedIndex + 1
              }));
              e.preventDefault();
              return !0;
            }
          } else if ("ArrowUp" === e.key) {
            if (ee.selectedIndex > 0) {
              et(e => ({
                ...e,
                selectedIndex: e.selectedIndex - 1
              }));
              e.preventDefault();
              return !0;
            }
          } else if ("Enter" === e.key) {
            let t = J.results[ee.selectedIndex];
            if (t) {
              eo(t, ee.selectedIndex);
              e.preventDefault();
              return !0;
            }
          } else if ("Escape" === e.key) {
            et(e => ({
              ...e,
              shouldBeVisible: !1,
              selectedIndex: 0
            }));
            e.currentTarget.blur();
            e.preventDefault();
            e.stopPropagation();
            return !0;
          }
          return !1;
        },
        onMaxItemsReached: er,
        onRemoveLastItem: e => {
          switch (e) {
            case 0:
              c({
                save: O,
                sourceIndex: o,
                currentRowIndex: s,
                selectedFile: null,
                trackingProps: {
                  location: R,
                  source: "manual",
                  entrypoint: M,
                  sessionId: ee.sessionId || crypto.randomUUID()
                }
              });
              break;
            case 1:
              d({
                save: O,
                sourceIndex: o,
                currentRowIndex: s,
                selectedComponent: null,
                action: "delete",
                trackingProps: {
                  location: R,
                  source: "manual",
                  entrypoint: M,
                  sessionId: ee.sessionId || crypto.randomUUID()
                }
              });
          }
        },
        onRequestPlaceholder: ea,
        onValueChange: e => _({
          sourceIndex: o,
          value: e
        }),
        readonly: N,
        value: g,
        children: jsx(w, {
          ...X
        })
      }), en && jsx(A, {
        libraryKey: l,
        ref: V,
        onClose: () => {
          et(e => ({
            ...e,
            shouldBeVisible: !1,
            selectedIndex: 0
          }));
        }
      }), jsx(_$$O, {
        ref: $,
        shouldBeVisible: ee.shouldBeVisible && D,
        isLoading: J.isLoading,
        items: J.results,
        selectedIndex: ee.selectedIndex,
        onItemSelect: eo
      })]
    }), jsx($$q2, {
      showButton: !!es,
      disabled: !X.canConnect,
      onConfirmConnection: () => p({
        row: t,
        sourceIndex: o,
        currentRowIndex: s,
        trackingProps: {
          location: R,
          source: ee.sourceOfLastInput || "manual",
          entrypoint: M,
          sessionId: ee.sessionId || crypto.randomUUID()
        }
      })
    })]
  });
}
export const SN = $$$0;
export const Q3 = $$V1;
export const pK = $$q2;
export const i6 = $$B3;