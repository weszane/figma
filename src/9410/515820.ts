import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback, useRef, useState } from "react";
import { o as _$$o } from "../905/821217";
import { Y9, JU, X0, bL, UC } from "../figma_app/57171";
import { getFeatureFlags } from "../905/601108";
import l from "classnames";
import { tx, t as _$$t } from "../905/303541";
import { dh, nn, rE } from "../figma_app/186343";
import { uF } from "../9410/398228";
import { Pt } from "../figma_app/806412";
import { l7 } from "../figma_app/88239";
import { jo } from "../figma_app/753501";
import { m0 } from "../figma_app/976749";
import { _ as _$$_ } from "../9410/218531";
import { i as _$$i } from "../9410/799000";
import { t as _$$t2 } from "../9410/254335";
import { W as _$$W } from "../9410/94839";
import { V as _$$V } from "../905/506207";
import { P as _$$P } from "../905/347284";
import { Uc } from "../figma_app/741237";
import { _Z } from "../figma_app/623300";
import { o3, nt } from "../905/226610";
import { wV } from "../figma_app/779965";
import { useDispatch, useSelector } from "../vendor/514228";
import { F as _$$F } from "../905/680873";
import { Us } from "../figma_app/637027";
import { V as _$$V2 } from "../905/223767";
import { to } from "../905/156213";
import { Fr } from "../figma_app/297957";
import { fu } from "../figma_app/831799";
import { h as _$$h } from "../905/864281";
import { DQ, Pw } from "../figma_app/121751";
import { A as _$$A } from "../905/654645";
import { u8 } from "../figma_app/391338";
import { p8 } from "../figma_app/722362";
import { q5 } from "../figma_app/516028";
import { FC } from "../figma_app/212807";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { XX, Lj, LF } from "../figma_app/345997";
import { canEditTeam } from "../figma_app/642025";
import { b as _$$b } from "../905/165519";
import { bU } from "../1250/506456";
import { k3 } from "../9410/695259";
import { a as _$$a } from "../9410/306437";
import { aY, l$, jG, ge } from "../0c62c2fd/214758";
import { J as _$$J } from "../9410/614829";
var d = l;
function C({
  isReadOnly: e,
  isPagesOpen: t,
  isComparingChanges: i,
  hasMultiplePageTypes: a,
  onClickNewPage: l,
  onCanvasSearch: d,
  onPageContextMenu: c,
  recordingKey: p,
  title: C,
  tooltipText: v
}) {
  let E = dh();
  let T = nn();
  let w = m0();
  let S = l7();
  let j = a || getFeatureFlags().interop_pages;
  let I = (e || w || S) && !!d;
  let k = useCallback(e => {
    jo(e);
    t || c?.({
      nodeId: E,
      clientX: e.clientX,
      clientY: e.clientY
    });
  }, [c, t, E]);
  return jsx(Fragment, {
    children: jsxs(Y9, {
      variant: "leftPanel",
      size: "lg",
      children: [I ? jsxs(Fragment, {
        children: [jsx(JU, {
          htmlAttributes: {
            onContextMenu: k
          },
          recordingKey: Pt(p, "collapsedRow"),
          children: jsx("span", {
            className: _$$W,
            "data-onboarding-key": "pages-panel-toggle",
            children: t ? jsx("span", {
              children: C
            }) : T || ""
          })
        }), !i && jsx(X0, {
          children: jsx(_$$_, {
            onClick: d
          })
        })]
      }) : jsx(JU, {
        htmlAttributes: {
          onContextMenu: k
        },
        recordingKey: Pt(p, "collapsedRow"),
        children: C
      }), !e && jsx(X0, {
        children: j ? jsx(_$$t2, {
          recordingKey: p
        }) : jsx(_$$i, {
          onClick: l,
          recordingKey: Pt(p, "newPage"),
          tooltipText: v
        })
      })]
    })
  });
}
function W({
  onHeightChange: e
}) {
  let t = useDispatch();
  let i = q5();
  let a = FC();
  let s = p8("pagesList").length;
  let o = m0();
  let l = Fr();
  let u = _$$h.useTrackingContext({
    trigger: _$$b.PAGE_TRACKER_UPSELL
  });
  let p = _$$F(e);
  let h = useCallback(e => {
    p.current?.(e?.getBoundingClientRect().height || 0);
  }, [s]);
  let m = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
  let f = i?.team;
  let _ = i?.plan;
  let x = f && canEditTeam(f.id, a) && !XX(f);
  let y = f && _ && f.canEdit && _.tier === FPlanNameType.STARTER;
  let b = u8({
    oldValue: x,
    newValue: y,
    newValueReady: m,
    label: _$$A.PageTrackerUpsell.canEditStarterTeam,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      planId: _?.id,
      isOpenFileLoadedFromLiveGraph: m
    }
  });
  if (s <= 0 || !i || o || !b) return null;
  let C = Lj(i);
  if ((C <= 1 || C >= 1 / 0) && !l(i)) return null;
  let v = () => {
    let e = _$$b.PAGE_TRACKER_UPSELL;
    t(to({
      type: _$$V2,
      data: {
        upsellSource: e,
        teamId: f?.id,
        openCheckoutInNewTab: !0
      }
    }));
  };
  let E = jsx(Us, {
    onClick: v,
    trusted: !0,
    "data-testid": "page_tracker_upsell_link",
    children: tx("fullscreen.pages_panel.see_plans_that_offer_more")
  });
  let T = jsx(Us, {
    onClick: v,
    trusted: !0,
    "data-testid": "page_tracker_upsell_link",
    children: tx("fullscreen.pages_panel.get_unlimited_pages_and_more")
  });
  let w = s / LF[i.editorType ?? FFileType.DESIGN];
  let S = d()({
    "page_tracker_upsell--progressPartial--guOiP": w < 1,
    "page_tracker_upsell--progressCompleteWarning--06IlO page_tracker_upsell--progressComplete--ilmev": 1 === w,
    "page_tracker_upsell--progressCompleteDanger--lCunz page_tracker_upsell--progressComplete--ilmev": w > 1
  });
  let j = `${Math.trunc(100 * Math.min(w, 1))}%`;
  let W = {
    fileTeamId: f?.id,
    numPages: s,
    ...u
  };
  return jsx(fu, {
    name: "Page Tracker Upsell",
    properties: W,
    children: jsx("div", {
      className: "page_tracker_upsell--upsellContainer--ZEwXz",
      ref: h,
      "data-testid": "page_tracker_upsell",
      children: jsxs("div", {
        className: "page_tracker_upsell--upsellBody--yUAjd",
        children: [jsx("div", {
          className: "page_tracker_upsell--progressBar--fDCBY",
          children: jsx("div", {
            className: S,
            style: {
              width: j
            },
            "data-testid": "page_tracker_progress_bar"
          })
        }), jsx("p", {
          className: "page_tracker_upsell--upsellText--Ng-u0",
          children: (() => {
            let e = LF[i.editorType ?? FFileType.DESIGN] - s;
            return e >= 2 ? jsxs(Fragment, {
              children: [tx("fullscreen.pages_panel.n_free_pages_left", {
                numPagesRemaining: e
              }), jsx("br", {}), E]
            }) : 1 === e ? jsxs(Fragment, {
              children: [tx("fullscreen.pages_panel.n_free_pages_left", {
                numPagesRemaining: e
              }), jsx("br", {}), T]
            }) : 0 === e ? jsxs(Fragment, {
              children: [tx("fullscreen.pages_panel.all_n_free_pages_used", {
                maxFreePages: LF[i.editorType ?? FFileType.DESIGN]
              }), jsx("br", {}), T]
            }) : jsxs(Fragment, {
              children: [tx("fullscreen.pages_panel.all_free_pages_used"), jsx("br", {}), T]
            });
          })()
        })]
      })
    })
  });
}
function Z({
  pages: e,
  initialHeight: t,
  extraControls: i,
  panelHeadersHeight: a,
  onScroll: s,
  shouldHighlightActivePage: o,
  isComparingChanges: l,
  pageToNumChanges: c,
  isReadOnly: u,
  onPageContextMenu: p,
  filterState: h,
  onHeightChange: m
}) {
  let f = _Z().isLoading;
  let g = useRef(null);
  _$$a({
    pagesList: e,
    scrollContainerRef: g
  });
  let _ = useRef(null);
  let [x, y] = useState(0);
  let b = e.length;
  let C = o3(nt.newResizablePanel);
  let {
    height,
    setHeight,
    defaultHeight
  } = k3({
    initialHeight: t,
    numberOfPages: b,
    upsellHeight: x,
    panelHeadersHeight: a,
    showingExtraControls: !!i,
    scrollContainerInnerRef: _,
    filterState: h,
    onHeightChange: m
  });
  return jsx(_$$V, {
    children: jsx(wV, {
      size: height,
      defaultSize: defaultHeight,
      onResize: e => {
        setHeight(e);
        Uc("");
      },
      side: "bottom",
      className: f ? aY : l$,
      children: jsxs(_$$P, {
        scrollBarAlways: !1,
        ref: g,
        scrollContainerRef: _,
        className: d()(jG, {
          [ge]: !C
        }),
        onScroll: s,
        children: [jsx(bU, {
          pages: e,
          scrollContainer: g.current ?? void 0,
          shouldHighlightActivePage: o,
          isComparingChanges: l,
          pageToNumChanges: c,
          isReadOnly: u,
          onContextMenu: p
        }), i, jsx(W, {
          onHeightChange: y
        })]
      })
    })
  });
}
let $ = "pages_panel--pagesPanelContent--ZGkcM";
let ee = "pages_panel--pagesPanelContentBottomBorder--dozDy";
export function $$et0({
  height: e,
  onHeightChange: t,
  isOpen: i,
  onToggle: l,
  showHeader: h = !0,
  pages: m,
  extraControls: f,
  filterState: g,
  panelHeadersHeight: _ = uF,
  shouldHighlightActivePage: x = !0,
  isComparingChanges: y = !1,
  pageToNumChanges: b,
  isReadOnly: v,
  onPageContextMenu: E,
  onCanvasSearch: T
}) {
  let w = "pagesPanel";
  let [S, j] = useState(!1);
  let I = useCallback(e => {
    j(e > 0);
  }, [j]);
  let k = rE();
  let N = i && S;
  let A = m.some(e => m[0] && e.pageType !== m[0].pageType);
  return getFeatureFlags().eu_fpl_collapse ? jsx(_$$o, {
    eventListeners: ["onClick"],
    children: jsx("div", {
      className: d()($, {
        [ee]: h
      }),
      children: jsxs(bL, {
        isOpen: i,
        toggle: l,
        children: [h && jsx(C, {
          hasMultiplePageTypes: A,
          isComparingChanges: y,
          isPagesOpen: i,
          isReadOnly: v,
          onCanvasSearch: T,
          onClickNewPage: () => k(null),
          onPageContextMenu: E,
          recordingKey: w,
          title: _$$t("fullscreen.pages_panel.pages"),
          tooltipText: _$$t("fullscreen.pages_panel.add_new_page")
        }), jsx(UC, {
          children: jsx(Z, {
            extraControls: f,
            filterState: g,
            initialHeight: e ?? void 0,
            isComparingChanges: y,
            isReadOnly: v,
            onHeightChange: t,
            onPageContextMenu: E,
            onScroll: I,
            pageToNumChanges: b,
            pages: m,
            panelHeadersHeight: _,
            shouldHighlightActivePage: x
          })
        })]
      })
    })
  }) : jsx(_$$o, {
    eventListeners: ["onClick"],
    children: jsxs("div", {
      className: d()($, {
        [ee]: h
      }),
      children: [h && jsx(_$$J, {
        hasMultiplePageTypes: A,
        hasScrollLine: N,
        isComparingChanges: y,
        isPagesOpen: i,
        isReadOnly: v,
        onCanvasSearch: T,
        onClickNewPage: () => k(null),
        onPageContextMenu: E,
        onTogglePages: l,
        recordingKey: w,
        title: _$$t("fullscreen.pages_panel.pages"),
        tooltipText: _$$t("fullscreen.pages_panel.add_new_page")
      }), i && jsx(Z, {
        extraControls: f,
        filterState: g,
        initialHeight: e ?? void 0,
        isComparingChanges: y,
        isReadOnly: v,
        onHeightChange: t,
        onPageContextMenu: E,
        onScroll: I,
        pageToNumChanges: b,
        pages: m,
        panelHeadersHeight: _,
        shouldHighlightActivePage: x
      })]
    })
  });
}
export const R = $$et0;