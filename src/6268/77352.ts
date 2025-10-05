import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useEffect, useRef } from "react";
import { CH, g4 } from "../figma_app/770359";
import { Button } from "../905/521428";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { Link } from "../905/438674";
import { k as _$$k } from "../905/443820";
import { IconButton } from "../905/443068";
import { Tabs } from "../905/150656";
import { k as _$$k2 } from "../905/44647";
import { v as _$$v } from "../4452/513456";
import { _ as _$$_ } from "../7021/243271";
import { S as _$$S } from "../5132/525530";
import { O as _$$O } from "../905/666679";
import { o as _$$o } from "../905/89370";
import { useTheme } from "../905/289770";
import { setupThemeContext } from "../905/614223";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { $w } from "../figma_app/935144";
import { nP } from "../figma_app/484865";
import { t2 } from "../figma_app/911720";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { n as _$$n } from "../905/734251";
import { getI18nString } from "../905/303541";
import { yT } from "../figma_app/332598";
import { getLanguageFromFileExtension } from "../figma_app/711907";
import { D as _$$D } from "../6268/819008";
import { Fq } from "../1250/51387";
import { uI } from "../6268/693700";
let D = "component_browser_detail_view--titleContent--ZdxlO";
let O = "component_browser_detail_view--title--Wsyqd";
let P = "component_browser_detail_view--subtitle--PUhsW";
let A = "component_browser_detail_view--infoTab--QAINZ";
let F = "component_browser_detail_view--infoTabTable--MyZfY";
let K = {
  r: 0,
  g: 0,
  b: 0,
  a: 0
};
function q({
  handleDeleteMapping: e,
  isDisabled: n,
  isIgnored: o
}) {
  return jsx(Button, {
    onClick: e,
    variant: "destructiveSecondary",
    disabled: n,
    children: o ? getI18nString("dev_handoff.component_browser.has_code_equivalent") : getI18nString("dev_handoff.component_browser.disconnect")
  });
}
function B({
  leftLabel: e,
  rightLabel: n
}) {
  return jsxs("div", {
    className: "component_browser_detail_view--chevronSubtitle--xIC8u",
    children: [e, jsx(_$$k2, {}), n]
  });
}
function W({
  content: e,
  accessory: n
}) {
  return jsxs("div", {
    className: "component_browser_detail_view--titleItem--IEVMe",
    children: [e, n]
  });
}
function $({
  label: e,
  icon: n,
  value: o
}) {
  return jsxs("tr", {
    className: "component_browser_detail_view--infoTabRow--1cnrE",
    children: [jsx("td", {
      className: "component_browser_detail_view--infoTabItemIconCell--eigv4",
      children: n
    }), jsx("td", {
      className: "component_browser_detail_view--infoTabItemLabelCell--0Y-SV",
      children: e
    }), jsx("td", {
      className: "component_browser_detail_view--infoTabItemValueCell--68huU",
      children: o
    })]
  });
}
function U() {
  return jsx(BannerInset, {
    variant: "warn",
    children: jsxs(BannerMessage, {
      title: getI18nString("dev_handoff.component_browser.cli_only_title"),
      children: [getI18nString("dev_handoff.component_browser.cli_only_message"), jsx(Link, {
        href: "https://www.figma.com/code-connect-docs/",
        children: getI18nString("dev_handoff.component_browser.learn_more")
      })]
    })
  });
}
function z({
  isConnected: e,
  isIgnored: n,
  data: o
}) {
  let s = o.component.code_connect_info.v1.author_name;
  let c = o.component?.code_connect_info?.v1?.type === "figmadoc";
  return n ? jsx("div", {
    className: A,
    children: jsx("table", {
      className: F,
      children: jsxs("tbody", {
        children: [jsx($, {
          label: getI18nString("dev_handoff.component_browser.marked_on"),
          icon: jsx(_$$v, {}),
          value: o.component.name
        }), s && jsx($, {
          label: getI18nString("dev_handoff.component_browser.marked_by"),
          icon: jsx(_$$_, {}),
          value: s
        })]
      })
    })
  }) : e ? jsxs("div", {
    className: "component_browser_detail_view--infoTabContainer---9h5X",
    children: [c && jsx(U, {}), jsx("div", {
      className: A,
      children: jsx("table", {
        className: F,
        children: jsxs("tbody", {
          children: [jsx($, {
            label: getI18nString("dev_handoff.component_browser.connected_on"),
            icon: jsx(_$$v, {}),
            value: o.component.name
          }), s && jsx($, {
            label: getI18nString("dev_handoff.component_browser.connected_by"),
            icon: jsx(_$$_, {}),
            value: s
          })]
        })
      })
    })]
  }) : null;
}
function G({
  label: e
}) {
  let n = Array.from({
    length: 15
  }, (e, n) => ({
    code: "",
    lineNumber: n + 1
  }));
  return jsxs("div", {
    className: "component_browser_detail_view--emptySourceCodeContainer--0guzU",
    children: [jsx("div", {
      className: "component_browser_detail_view--emptySourceCodeOverlay--QCKTU",
      children: jsx("div", {
        className: "component_browser_detail_view--emptySourceCodeOverlayText---Mr-e",
        children: e
      })
    }), jsx(yT, {
      includeMargin: !1,
      hideHeader: !0,
      section: {
        lines: n,
        language: "typescript",
        name: "code"
      },
      code: [{
        lines: n,
        language: "typescript",
        name: "code"
      }],
      copyAllActionEnabled: !0
    })]
  });
}
function J({
  data: e,
  onIgnoreMapping: n,
  sourceIndex: o,
  entrypoint: s
}) {
  return jsxs("div", {
    className: "component_browser_detail_view--emptySourceCodeTab--5AaCn",
    children: [jsxs("div", {
      className: "component_browser_detail_view--emptySourceCodeTabTitle--FGecJ",
      children: [jsx("span", {
        children: getI18nString("dev_handoff.component_browser.source_code")
      }), jsx(Button, {
        onClick: () => {
          n({
            row: {
              assetKey: e.assetKey,
              sourceIndex: o,
              component: e.component,
              selectedFile: null,
              selectedComponent: null
            },
            trackingProps: {
              location: "side_sheet",
              entrypoint: s
            }
          });
        },
        variant: "secondary",
        children: getI18nString("dev_handoff.component_browser.no_code_equivalent")
      })]
    }), jsx(G, {
      label: getI18nString("dev_handoff.component_browser.empty_source_code_overlay_text")
    })]
  });
}
function Q({
  data: e,
  repositoryId: n
}) {
  let o = e.component.code_connect_info.v1.figmadoc;
  let c = e => {
    let n = e.match(/github\.com\/([^\/]+\/[^\/]+)\/blob\/[^\/]+\/(.+)/);
    return n ? n[2] ?? void 0 : e;
  };
  let i = useMemo(() => {
    try {
      if (o) {
        let t = JSON.parse(o);
        let s = e.selectedFile?.metadata?.path;
        return {
          name: e.selectedComponent?.title,
          repositoryId: t[0]?.repository?.id ?? n,
          filePath: s ? c(s) : void 0
        };
      }
    } catch (e) {
      return {
        errorMessage: getI18nString("dev_handoff.component_browser.error_retrieving_component_path_and_repository"),
        error: e
      };
    }
  }, [o, e.selectedFile?.metadata?.path, e.selectedComponent?.title, n]);
  let [r] = setupResourceAtomHandler(Fq({
    libraryKey: e.component.library_key,
    repositoryId: i?.repositoryId ?? "",
    filePath: i?.filePath ?? ""
  }), {
    enabled: !!i?.repositoryId && !!i?.filePath
  });
  let a = r.data?.content;
  let l = useMemo(() => {
    let n = a?.split("\n") ?? [];
    let o = getLanguageFromFileExtension(e.selectedFile?.title ?? "");
    return {
      lines: n.map((e, n) => {
        let o = Math.floor((e.match(/^(\s*)/)?.[1] || "").length / 2);
        return {
          code: e,
          lineNumber: n + 1,
          indent: o
        };
      }),
      language: o
    };
  }, [a, e.selectedFile?.title]);
  return jsx("div", {
    className: "component_browser_detail_view--sourceCodeTab---zyhy",
    children: "loading" === r.status ? jsx("div", {
      className: "component_browser_detail_view--loadingCode--esp-4",
      children: jsx(_$$k, {})
    }) : a ? jsx(yT, {
      includeMargin: !1,
      hideHeader: !0,
      section: {
        lines: l.lines,
        language: getLanguageFromFileExtension(e.selectedFile?.title ?? ""),
        name: e.selectedFile?.title ?? "code"
      },
      code: [{
        lines: l.lines,
        language: getLanguageFromFileExtension(e.selectedFile?.title ?? ""),
        name: e.selectedFile?.title ?? "code"
      }],
      copyAllActionEnabled: !0
    }) : jsx(G, {
      label: i?.errorMessage ?? getI18nString("dev_handoff.component_browser.file_not_found")
    })
  });
}
function H({
  data: e
}) {
  let [n, o] = useState(!1);
  let i = function (e, n) {
    let [o, t] = useState(null);
    useEffect(() => {
      if (!e) {
        t(null);
        return;
      }
      let o = getSingletonSceneGraph().get(e);
      if (!o) {
        t(null);
        return;
      }
      (async function () {
        n(!0);
        try {
          if (!o) {
            t(null);
            return;
          }
          let e = $w(o);
          let n = await t2(o, e, "web", async () => {
            let [[e], [n]] = await nP(o, "get_code");
            return [e, n];
          }, void 0);
          if (n[0]?.content && Array.isArray(n[0].content) && n[0].content[0]?.type === "text") {
            let e = n[0].content[0].text.replace(/<CodeConnectSnippet[^>]*>/g, "").replace(/<\/CodeConnectSnippet>/g, "").replace(/\n\s*\n/g, "\n");
            t(e);
          } else t(null);
        } catch (e) {
          console.warn("Failed to generate MCP output:", e);
          t(null);
        } finally {
          n(!1);
        }
      })();
    }, [e, n]);
    return o;
  }(e.component.node_id, o);
  let r = useTheme();
  return jsxs("div", {
    children: [jsx("div", {
      className: "component_browser_detail_view--mcpTabInfoText--cp8bE",
      children: getI18nString("dev_handoff.component_browser.mcp_tab_info_text")
    }), n ? jsx(_$$k, {}) : jsx(CH, {
      value: i ?? "",
      extensions: [g4],
      theme: "light" === r.color ? "light" : "dark"
    })]
  });
}
var Y = (e => (e.Info = "Info", e.SourceCode = "SourceCode", e.Mcp = "Mcp", e))(Y || {});
function V({
  data: e
}) {
  let n = useTheme();
  let [o, c] = useState(n.color);
  useEffect(() => {
    c(n.color);
  }, [n.color]);
  return jsx(setupThemeContext, {
    mode: o,
    children: jsxs("div", {
      className: "component_browser_detail_view--componentThumbnailPanel--tlaYl",
      children: [jsx("div", {
        className: "component_browser_detail_view--themeToggle--kLZt7",
        children: jsx(IconButton, {
          size: "lg",
          variant: "secondary",
          "aria-label": getI18nString("dev_handoff.component_browser.change_theme"),
          onClick: () => c("light" === o ? "dark" : "light"),
          children: jsx(_$$S, {})
        })
      }), jsx("div", {
        className: "component_browser_detail_view--imageWrapper--i16N8",
        children: jsx(_$$D, {
          imageSrc: e.component.thumbnail_url ?? "",
          shouldZoomToStart: !1,
          shouldWheelPan: !0,
          imageScale: 1,
          enableZoomKeyControls: !0,
          enableZoomControls: !0,
          pageBackgroundColor: K
        })
      })]
    })
  });
}
function X({
  data: e,
  isIgnored: n,
  isConnected: o,
  repositoryId: s,
  onIgnoreMapping: c,
  sourceIndex: i,
  entrypoint: r
}) {
  let a = {
    Info: o || n ? jsx(z, {
      isConnected: o,
      isIgnored: n,
      data: e
    }) : jsx(J, {
      data: e,
      onIgnoreMapping: c,
      sourceIndex: i,
      entrypoint: r
    }),
    SourceCode: o && jsx(Q, {
      data: e,
      repositoryId: s
    }),
    Mcp: jsx(H, {
      data: e
    })
  };
  let l = {
    Info: !0,
    SourceCode: o && !n,
    Mcp: getFeatureFlags().dt_component_browser_mcp_tab ?? !1
  };
  let [d, _, p] = Tabs.useTabs(l, {
    defaultActive: "Info"
  });
  return jsx("div", {
    className: "component_browser_detail_view--componentDetailTabsPanel--NXILY",
    children: jsxs("div", {
      className: "component_browser_detail_view--tabsContainer--S8u8q",
      children: [p.tabs.length > 1 && jsx(Tabs.TabStrip, {
        manager: p,
        children: p.tabs.map(e => a[e] ? jsx(Tabs.Tab, {
          ...d[e],
          children: function (e) {
            switch (e) {
              case "Info":
                return getI18nString("dev_handoff.component_browser.info_tab_title");
              case "SourceCode":
                return getI18nString("dev_handoff.component_browser.source_code");
              case "Mcp":
                return getI18nString("dev_handoff.component_browser.mcp_tab_title");
            }
          }(e)
        }, e) : null)
      }), jsx("div", {
        className: "component_browser_detail_view--tabContent--xWwoa",
        children: p.tabs.map(e => {
          let n = a[e];
          return n ? jsx(Tabs.TabPanel, {
            ..._[e],
            children: n
          }, e) : null;
        })
      })]
    })
  });
}
export function $$Z0({
  data: e,
  sourceIndex: n,
  onClose: o,
  onRequestNextComponent: c,
  onRequestPreviousComponent: r,
  onDeleteMapping: a,
  onIgnoreMapping: l,
  onActiveRowChange: d,
  onConfirmConnection: m,
  onConfirmSuggestion: p,
  onComponentChanged: h,
  onFileChanged: u,
  onValueChange: b,
  inputRefs: g,
  repositoryId: x,
  isWindowed: w = !1,
  searchSessionId: j,
  entrypoint: y,
  isLoadingSuggestions: N
}) {
  let [C, k] = useState(null);
  let [T, L] = useState(null);
  let R = useRef(null);
  let E = e?.component?.code_connect_info?.v1?.state === "connected";
  let A = e?.component?.code_connect_info?.v1?.state === "ignored";
  let F = e?.component?.code_connect_info?.v1?.type === "figmadoc";
  useEffect(() => {
    k(e?.selectedFile ?? null);
    L(e?.selectedComponent ?? null);
  }, [e]);
  useEffect(() => {
    (A || E) && R.current?.focus();
  }, [A, E]);
  let K = () => {
    let o = e.component.code_connect_info.v1.id;
    o && a({
      codeConnectId: o,
      row: {
        assetKey: e.assetKey,
        sourceIndex: n,
        component: e.component,
        selectedFile: null,
        selectedComponent: null
      },
      trackingProps: {
        location: "side_sheet",
        entrypoint: y
      }
    });
  };
  return jsx(_$$n.div, {
    ref: R,
    className: "component_browser_detail_view--wrapper--19kfI",
    onKeyDown: function (t) {
      switch (t.key) {
        case "ArrowUp":
          r?.();
          break;
        case "ArrowDown":
          c?.();
          break;
        case "Escape":
          o();
          break;
        case "Backspace":
          t.shiftKey && l({
            row: {
              assetKey: e.assetKey,
              sourceIndex: n,
              component: e.component,
              selectedFile: C,
              selectedComponent: T
            },
            trackingProps: {
              location: "side_sheet",
              entrypoint: y
            }
          });
      }
    },
    tabIndex: -1,
    children: jsxs("div", {
      className: "component_browser_detail_view--content----WqK",
      children: [jsxs("div", {
        className: "component_browser_detail_view--titleContainer--uEBHQ",
        children: [jsxs("div", {
          className: "component_browser_detail_view--titleContainerLeft--ilpvY",
          children: [!w && jsx(IconButton, {
            "aria-label": getI18nString("dev_handoff.component_browser.close_component_browser"),
            onClick: () => o(),
            children: jsx(_$$O, {})
          }), jsx(W, {
            content: jsxs("div", {
              className: D,
              children: [jsx("div", {
                className: O,
                children: getI18nString("dev_handoff.component_browser.design_component")
              }), jsx("div", {
                className: P,
                children: e.component.name
              })]
            }),
            accessory: jsx(_$$o, {})
          })]
        }), jsx("div", {
          className: "component_browser_detail_view--titleContainerRight--1wNmD",
          children: jsx(W, {
            content: E ? jsxs("div", {
              className: D,
              children: [jsx("div", {
                className: O,
                children: getI18nString("dev_handoff.component_browser.code_component")
              }), jsx("div", {
                className: P,
                children: jsx(B, {
                  leftLabel: C?.title ?? "",
                  rightLabel: T?.title ?? ""
                })
              })]
            }) : A ? jsxs("div", {
              className: D,
              children: [jsx("div", {
                className: O,
                children: getI18nString("dev_handoff.component_browser.code_component")
              }), jsx("div", {
                className: P,
                children: "--"
              })]
            }) : jsx(uI, {
              component: e.component,
              currentRowIndex: n,
              entrypoint: y,
              inputRefs: g,
              isFirstRow: !0,
              isLoadingSuggestions: N,
              isRowActive: !0,
              isRowHovered: !0,
              item: e,
              libraryKey: e.component.library_key,
              location: "side_sheet",
              onActiveRowChange: d,
              onComponentChanged: h,
              onConfirmConnection: m,
              onConfirmSuggestion: p,
              onFileChanged: u,
              onValueChange: b,
              searchSessionId: j,
              showSuggestionsDebug: !1,
              sourceIndex: n,
              spacing: "compact",
              suggestions: []
            }),
            accessory: E ? jsx(q, {
              handleDeleteMapping: K,
              isDisabled: F,
              isIgnored: A
            }) : A ? jsx(Button, {
              onClick: K,
              variant: "secondary",
              children: getI18nString("dev_handoff.component_browser.has_code_equivalent")
            }) : null
          })
        })]
      }), jsxs("div", {
        className: "component_browser_detail_view--panels--eIMlI",
        children: [jsx(V, {
          data: e
        }), jsx(X, {
          data: e,
          isConnected: E,
          isIgnored: A,
          repositoryId: x,
          onIgnoreMapping: l,
          sourceIndex: n,
          entrypoint: y
        })]
      })]
    })
  });
}
export const o = $$Z0;