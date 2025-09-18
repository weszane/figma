import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { W as _$$W } from "../905/933320";
import { r as _$$r } from "../905/571838";
import { useAtomWithSubscription, atomStoreManager } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import c from "../vendor/524488";
import { wY } from "../figma_app/708845";
import { KeyCodes } from "../905/63728";
import { z3 } from "../figma_app/119475";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { fi } from "../figma_app/913823";
import { g5 } from "../figma_app/178752";
import { selectOpenFile } from "../figma_app/516028";
import { U as _$$U } from "../905/506188";
import { getBasename } from "../905/309735";
import { useIsLoading } from "../905/18797";
import { FDocumentType } from "../905/862883";
import { I as _$$I } from "../figma_app/130633";
import { F as _$$F } from "../905/84606";
import { Y } from "../905/411989";
import { lX } from "../figma_app/588397";
import { K as _$$K } from "../905/275787";
import { kK } from "../figma_app/144974";
import { WP } from "../905/198599";
import { s as _$$s2 } from "../905/169089";
import { dd } from "../figma_app/604494";
import { x as _$$x } from "../905/773818";
import { N as _$$N } from "../905/998668";
import { O as _$$O } from "../905/947996";
import { V as _$$V } from "../905/240794";
import { Y as _$$Y } from "../905/279663";
import { a as _$$a } from "../905/297215";
import { S as _$$S } from "../905/933340";
import { p as _$$p } from "../905/274457";
import { X } from "../905/257698";
import { H as _$$H, B as _$$B } from "../905/500226";
import { b as _$$b } from "../905/552119";
var u = c;
export function $$W0({
  numberOfGridColumns: e = 4,
  maxResults: t,
  stretchEmptyStates: r = !1,
  header: c,
  suggestion: p,
  onClickSuggestion: f,
  largeSpacing: I,
  noLibraries: x,
  onLoadStateChange: N,
  assetInsertionCallback: C
}) {
  let {
    currentSearch
  } = useAtomWithSubscription(WP);
  let G = useSelector(selectOpenFile);
  let V = g5(FDocumentType.Design).productComponents;
  let H = useMemoStable(() => V.map(e => e.library_key), [V]);
  let z = _$$U(H);
  let W = useIsLoading(fi) || "loading" === z.status;
  let $ = useMemoStable(() => currentSearch?.result.data?.map(e => e.library_key), [currentSearch]);
  let X = _$$U($ || []);
  let q = z3("faux");
  let J = _$$s2(currentSearch);
  let Z = "";
  currentSearch && "input-text" === currentSearch.input.type ? Z = currentSearch.input.query : J && (Z = J.name);
  let Q = I ? 12 : 8;
  let ee = !W && !!c;
  let et = !currentSearch && !kK() && W || currentSearch?.result.status === "loading" || "loading" === X.status;
  if (useEffect(() => {
    N?.(et);
  }, [et, N]), et) return jsxs("div", {
    children: [ee && jsx(K, {
      title: c.title,
      icon: c.icon
    }), jsx(_$$V, {
      columns: e,
      padding: Q,
      gap: 12,
      children: Array.from({
        length: t ?? 3 * e
      }).map((e, t) => jsxs(_$$V.Item, {
        children: [jsx("div", {
          className: _$$s.wFull.flex.itemsCenter.justifyCenter.radiusMedium.$,
          children: jsx(_$$Y, {
            animationDelay: 150 * t
          })
        }), jsx("div", {
          className: _$$s.wFull.pt8.$,
          children: jsxs(_$$O.Container, {
            children: [jsx(_$$O.SkeletonLine, {
              index: t
            }), jsx(_$$O.SkeletonLine, {
              index: t,
              bottom: !0
            })]
          })
        })]
      }, t))
    })]
  });
  if (!currentSearch || "disabled" === currentSearch.result.status) {
    if (0 === V.length || kK()) return jsx("div", {
      className: _$$s.$$if(r, _$$s.hFull).$,
      children: jsx(_$$S, {
        fillHeight: r,
        children: jsxs(_$$N, {
          children: [jsx(_$$N.ArtworkIcon, {
            children: jsx(_$$W, {})
          }), jsx(_$$N.Text, {
            title: getI18nString("assets_in_actions.assets_section.initial_state.title"),
            dataTestId: "assets-grid-initial-state"
          })]
        })
      })
    });
    let i = V.slice(0, t ?? V.length).map((e, t) => jsx($$Y1, {
      asset: e,
      assetInsertionCallback: C,
      assetTypeDropdownSelection: _$$I.ALL,
      libraryNameByLibraryKeyFromLG: z.data || {},
      onDragStart: q,
      openFileKey: G?.key ?? "",
      queryId: currentSearch ? currentSearch.queryId : "",
      searchQuery: Z,
      searchSessionId: atomStoreManager.get(dd) ?? "",
      sectionPosition: t
    }, e.node_id));
    return jsxs("div", {
      "data-testid": "recents-assets-grid",
      children: [c && jsx(K, {
        title: c.title,
        icon: c.icon,
        seeMore: c.seeMore
      }), jsx(_$$a, {}), jsx(_$$x, {
        primary: !0,
        columns: e,
        padding: Q,
        gap: 12,
        children: i
      })]
    });
  }
  if ("errors" === currentSearch.result.status) return jsxs("div", {
    className: _$$s.$$if(r, _$$s.hFull).$,
    children: [c && jsx(K, {
      title: c.title,
      icon: c.icon,
      seeMore: c.seeMore
    }), jsx(_$$S, {
      fillHeight: r,
      children: jsxs(_$$N, {
        children: [jsx(_$$N.ArtworkIcon, {
          variant: "danger",
          children: jsx(_$$r, {})
        }), jsx(_$$N.Text, {
          title: getI18nString("assets_in_actions.assets_section.error.title"),
          subtitle: getI18nString("assets_in_actions.assets_section.error.description")
        })]
      })
    })]
  });
  if (x) return jsxs("div", {
    className: _$$s.$$if(r, _$$s.hFull).$,
    children: [c && jsx(K, {
      title: c.title,
      icon: c.icon,
      seeMore: c.seeMore
    }), jsx(_$$S, {
      fillHeight: r,
      children: jsx("span", {
        className: _$$s.textBodyMedium.colorTextSecondary.$,
        "data-testid": "assets-grid-no-results",
        children: renderI18nText("assets_in_actions.no_results_no_libraries.title")
      })
    })]
  });
  let er = currentSearch.result.data;
  if (!er || 0 === er.length) return jsxs("div", {
    className: _$$s.$$if(r, _$$s.hFull).$,
    children: [c && jsx(K, {
      title: c.title,
      icon: c.icon
    }), jsx(_$$S, {
      fillHeight: r,
      children: jsx("span", {
        className: _$$s.textBodyMedium.colorTextSecondary.$,
        "data-testid": "assets-grid-no-results",
        children: renderI18nText("assets_in_actions.assets_section.no_results.title", {
          query: u()(Z, {
            length: 24
          })
        })
      })
    })]
  });
  let en = er.slice(0, t ?? currentSearch.result.data.length).map((e, t) => jsx($$Y1, {
    asset: e,
    assetInsertionCallback: C,
    assetTypeDropdownSelection: _$$I.ALL,
    libraryNameByLibraryKeyFromLG: X.data || {},
    onDragStart: q,
    openFileKey: G?.key ?? "",
    queryId: currentSearch ? currentSearch.queryId : "",
    searchQuery: Z,
    searchSessionId: atomStoreManager.get(dd) ?? "",
    sectionPosition: t
  }, e.node_id));
  p && en.push(jsx(_$$x.Item, {
    fullWidth: !0,
    primaryAction: {
      text: "Search designs",
      shortcuts: [{
        key: KeyCodes.ENTER
      }],
      onAction: f
    },
    singleClick: !0,
    defaultFocusOptions: {
      block: "center",
      inline: "nearest"
    },
    children: jsx(_$$x.GridItemHighlight, {
      children: p
    })
  }, "suggestion"));
  return jsxs("div", {
    children: [c && jsx(K, {
      title: c.title,
      icon: c.icon,
      seeMore: c.seeMore
    }), jsx(_$$a, {}), jsx(_$$x, {
      primary: !0,
      columns: e,
      padding: Q,
      gap: 12,
      children: en
    })]
  });
}
function K({
  title: e,
  icon: t,
  seeMore: r
}) {
  let i = r ? jsx(_$$p, {
    onAction: r.onAction,
    recordingKey: r.recordingKey,
    children: r.title
  }) : jsx("div", {
    className: _$$s.h24.$
  });
  return jsxs(X, {
    children: [t && jsx(X.Icon, {
      children: t
    }), jsx(X.Title, {
      endEnhancer: i,
      children: e
    })]
  });
}
export function $$Y1({
  asset: e,
  libraryNameByLibraryKeyFromLG: t,
  assetTypeDropdownSelection: r,
  searchQuery: i,
  openFileKey: a,
  sectionPosition: s,
  onDragStart: o,
  disableActionShortcuts: l,
  assetInsertionCallback: d
}) {
  let c = t[e.library_key];
  let {
    afterSuccessfulInsert,
    componentInsertSwapCallback
  } = _$$H({
    asset: e,
    assetTypeDropdownSelection: r,
    sectionPosition: s,
    openFileKey: a,
    assetInsertionCallback: d
  });
  let {
    primaryAction,
    secondaryAction,
    tertiaryAction
  } = _$$b({
    asset: e,
    afterSuccessfulInsert,
    componentInsertSwapCallback,
    source: "assets_grid",
    disableActionShortcuts: l
  });
  return jsxs(_$$x.Item, {
    primaryAction,
    secondaryAction,
    tertiaryAction,
    defaultFocusOptions: {
      block: "center",
      inline: "nearest"
    },
    children: [jsx(_$$x.GridItemHighlight, {
      children: jsx($, {
        asset: e,
        sectionPosition: s,
        fileName: c,
        isSearch: !!i,
        onDragStart: o,
        afterSuccessfulInsert
      })
    }), jsx(_$$x.ItemFooter, {
      children: jsxs("div", {
        className: _$$s.pt8.flex.flexColumn.gap2.alignLeft.$,
        children: [jsx("span", {
          className: _$$s.textBodyMedium.colorText.truncate.$,
          children: getBasename(e.name)
        }), jsx("span", {
          className: _$$s.textBodyMedium.colorTextSecondary.truncate.$,
          children: c
        })]
      })
    })]
  });
}
function $({
  asset: e,
  sectionPosition: t,
  isSearch: r,
  afterSuccessfulInsert: a,
  fileName: s,
  onDragStart: o
}) {
  let l = Y(e);
  let d = useRef(null);
  let [c, u] = useState({
    width: 0,
    height: 0
  });
  wY(d, () => {
    u({
      width: d.current?.clientWidth ?? 0,
      height: d.current?.clientHeight ?? 0
    });
  });
  let _ = _$$F(e, _$$K.ACTIONS_ASSETS, t, "Actions Component Search");
  return jsx("div", {
    className: _$$s.wFull.$,
    style: sx.add({
      aspectRatio: "1/1"
    }).$,
    children: jsx("div", {
      ref: d,
      className: _$$s.wFull.hFull.$,
      children: jsx(lX, {
        alwaysShowBorder: !1,
        buttonProps: {
          onContextMenu: _
        },
        displayType: "grid",
        draggable: {
          sourceForTracking: "actions_assets_tab",
          afterSuccessfulInsert: a,
          sectionNameForTracking: _$$B,
          onDragStart: o
        },
        fileName: s,
        height: c.height,
        hideNameOverlay: !1,
        isSearch: r,
        item: e,
        numVariants: l,
        sectionPosition: t,
        shouldHideTooltip: !0,
        showName: !1,
        showTooltipImmediately: !1,
        useBaseTile: !0,
        width: c.width
      })
    })
  });
}
export const O = $$W0;
export const a = $$Y1;