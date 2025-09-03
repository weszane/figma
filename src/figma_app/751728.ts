import { jsxs, jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { r as _$$r } from "../905/571838";
import { md } from "../figma_app/27355";
import o from "../vendor/524488";
import { z3 } from "../figma_app/119475";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { hO } from "../figma_app/545293";
import { T5 } from "../figma_app/465071";
import { kK } from "../figma_app/144974";
import { s as _$$s2 } from "../905/169089";
import { x as _$$x } from "../905/773818";
import { r as _$$r2 } from "../905/45049";
import { N as _$$N } from "../905/998668";
import { a as _$$a } from "../905/140856";
import { A as _$$A } from "../905/766762";
import { A as _$$A2 } from "../905/90528";
import { O } from "../905/947996";
import { V as _$$V } from "../905/240794";
import { Y } from "../905/279663";
import { t as _$$t2 } from "../905/549562";
import { S as _$$S } from "../905/933340";
import { p as _$$p } from "../905/274457";
import { X } from "../905/257698";
var l = o;
export function $$w0({
  focusHandle: e,
  entryPoint: t,
  initialState: r,
  numberOfGridColumns: i = 3,
  maxResults: o,
  stretchEmptyStates: d = !1,
  header: g,
  isFigmake: f = !1,
  forceLoadingState: y,
  hideEditorNames: N,
  isCommunity: C,
  largeSpacing: w,
  searchResultRef: L,
  lastSearchResultRef: P,
  hubFileFragmentInsertionCallback: D
}) {
  let k = md(C ? hO.currentCommunitySearchAtom : hO.currentSearchAtom);
  let M = md(hO.sortByAtom);
  let F = _$$s2(k);
  let j = T5("FragmentsGrid").unwrapOr(null);
  let U = j?.name;
  let B = w ? 12 : 8;
  let G = kK() || !U;
  if (r?.type === "recents" && null === r.recents || k?.result.status === "loading" || y) return jsxs("div", {
    children: [g && jsx(R, {
      title: g.title,
      icon: g.icon,
      primaryText: g.primaryText,
      px: g.px
    }), jsx(_$$V, {
      columns: i,
      padding: B,
      gap: 12,
      children: Array.from({
        length: o ?? 3 * i
      }).map((e, t) => jsxs(_$$V.Item, {
        children: [jsx("div", {
          className: _$$s.wFull.flex.itemsCenter.justifyCenter.radiusMedium.$,
          children: jsx(Y, {
            animationDelay: 150 * t
          })
        }), jsx("div", {
          className: _$$s.wFull.pt8.$,
          children: jsxs(O.Container, {
            children: [jsx(O.SkeletonLine, {
              index: t
            }), jsx(O.SkeletonLine, {
              index: t,
              bottom: !0
            })]
          })
        })]
      }, t))
    })]
  });
  if (!k || "disabled" === k.result.status) {
    if (!r) return null;
    let a = C ? _$$t("assets_in_actions.fragments_section.empty_state.header_community") : G ? _$$t("assets_in_actions.fragments_section.empty_state.header_generic") : _$$t("assets_in_actions.fragments_section.empty_state.header", {
      orgText: U
    });
    let s = C ? _$$t("assets_in_actions.fragments_section.empty_state.text_community") : _$$t("assets_in_actions.fragments_section.empty_state.text");
    let l = C ? "community-fragments-grid-initial-state" : "fragments-grid-initial-state";
    let p = C ? "community-fragment-initial-state-with-data" : "fragments-grid-fragments-initial-state-with-data";
    return r.recents?.length ? jsxs("div", {
      children: [g && jsx(R, {
        title: g.title,
        icon: g.icon,
        seeMore: g.seeMore,
        px: g.px,
        primaryText: g.primaryText
      }), jsx($$O1, {
        dataTestId: p,
        disableDragging: f,
        entryPoint: t,
        focusHandle: e,
        fragments: r.recents,
        hideEditorNames: N,
        hubFileFragmentInsertionCallback: D,
        isCommunity: C,
        largeSpacing: w,
        lastSearchResultRef: P,
        maxResults: o,
        numberOfGridColumns: i,
        searchResultRef: L
      })]
    }) : jsx("div", {
      className: _$$s.$$if(d, _$$s.hFull).$,
      children: jsx(_$$S, {
        fillHeight: d,
        children: jsxs(_$$N, {
          children: [jsx(_$$N.ArtworkIllustration, {
            light: jsx(_$$A2, {}),
            dark: jsx(_$$A, {})
          }), jsx(_$$N.Text, {
            title: a,
            subtitle: s,
            dataTestId: l
          })]
        })
      })
    });
  }
  if ("errors" === k.result.status) return jsxs("div", {
    className: _$$s.$$if(d, _$$s.hFull).$,
    children: [g && jsx(R, {
      title: g.title,
      icon: g.icon
    }), jsx(_$$S, {
      fillHeight: d,
      children: jsxs(_$$N, {
        children: [jsx(_$$N.ArtworkIcon, {
          variant: "danger",
          children: jsx(_$$r, {})
        }), jsx(_$$N.Text, {
          title: _$$t("assets_in_actions.fragments_section.error.title"),
          subtitle: _$$t("assets_in_actions.fragments_section.error.description")
        })]
      })
    })]
  });
  if (0 === k.result.data.length) {
    let e = "";
    "input-text" === k.input.type ? e = k.input.value : F && (e = F.name);
    return jsxs("div", {
      className: _$$s.$$if(d, _$$s.hFull).$,
      children: [g && jsx(R, {
        title: g.title,
        icon: g.icon
      }), jsx(_$$S, {
        fillHeight: d,
        children: jsx("span", {
          className: _$$s.textBodyMedium.colorTextSecondary.$,
          children: tx("assets_in_actions.fragments_section.no_results.title", {
            query: l()(e, {
              length: 24
            })
          })
        })
      })]
    });
  }
  let V = _$$t2(k.result.data, M);
  return jsxs("div", {
    children: [g && jsx(R, {
      title: g.title,
      icon: g.icon,
      seeMore: g.seeMore
    }), jsx($$O1, {
      disableDragging: f,
      entryPoint: t,
      focusHandle: e,
      fragments: V,
      hideEditorNames: N,
      hubFileFragmentInsertionCallback: D,
      isCommunity: C,
      largeSpacing: w,
      lastSearchResultRef: P,
      maxResults: o,
      numberOfGridColumns: i,
      searchResultRef: L
    })]
  });
}
export function $$O1({
  fragments: e,
  focusHandle: t,
  numberOfGridColumns: r,
  entryPoint: a,
  maxResults: s,
  hideEditorNames: o,
  isCommunity: l,
  largeSpacing: u,
  searchResultRef: p,
  lastSearchResultRef: _,
  disableActionShortcuts: h,
  disableDragging: m,
  hubFileFragmentInsertionCallback: E,
  dataTestId: b
}) {
  let T = _$$r2("fragments_grid", t, a, h, E);
  let S = z3("faux");
  return jsx(_$$x, {
    primary: !0,
    columns: r,
    padding: u ? 12 : 8,
    gap: 12,
    dataTestId: b,
    children: e.slice(0, s ?? e.length).map((t, r) => {
      let d = jsxs(O.Container, {
        children: [jsx(O.Title, {
          children: t.file_name
        }), l ? jsx(O.CommunityMetadata, {
          name: t.editor_name
        }) : jsx(O.EditInfo, {
          editor: {
            name: t.editor_name,
            imageUrl: t.editor_img_url
          },
          lastEditedAt: t.last_edited_at,
          hideEditorName: o
        })]
      });
      let {
        primaryAction,
        secondaryAction,
        tertiaryAction
      } = T(t, r, null, e);
      let E = "";
      switch (t.type) {
        case "fig-file-fragment":
          E = `${t.file_key}-${t.node_id}`;
          break;
        case "hub-file-fragment":
          E = `${t.hub_file_id}-${t.node_id}`;
          break;
        default:
          throwTypeError(t);
      }
      let b = s ? s - 1 : e.length - 1;
      return jsxs(_$$x.Item, {
        primaryAction,
        secondaryAction,
        tertiaryAction,
        children: [jsx(_$$x.GridItemHighlight, {
          children: jsx(_$$a, {
            entryPoint: a,
            fragment: t,
            fragmentPosition: r,
            onDragStart: S,
            disabled: m,
            ref: 0 === r ? p : r === b ? _ : null
          })
        }), jsx(_$$x.ItemFooter, {
          children: jsx("div", {
            className: _$$s.pt8.$,
            children: d
          })
        })]
      }, E);
    })
  });
}
function R({
  title: e,
  icon: t,
  seeMore: r,
  primaryText: i,
  px: a
}) {
  let s = r ? jsx(_$$p, {
    onAction: r.onAction,
    recordingKey: r.recordingKey,
    children: r.title
  }) : jsx("div", {
    className: _$$s.h24.$
  });
  return jsxs(X, {
    px: a,
    children: [jsx(X.Icon, {
      children: t
    }), jsx(X.Title, {
      endEnhancer: s,
      primaryText: i,
      children: e
    })]
  });
}
export const M = $$w0;
export const U = $$O1;