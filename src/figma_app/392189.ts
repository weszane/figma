import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { N as _$$N } from "../905/438674";
import { $n } from "../905/521428";
import { l as _$$l } from "../905/509505";
import l from "classnames";
import { Pt } from "../figma_app/806412";
import { M3 } from "../figma_app/119475";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { yy } from "../figma_app/543529";
import { n1 } from "../figma_app/657017";
import { u as _$$u } from "../905/389684";
import { I as _$$I } from "../905/342732";
import { Cn } from "../905/225265";
import { Wv } from "../figma_app/633080";
import { r6 } from "../905/542608";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { analyticsEventManager } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { g7 } from "../905/939482";
import { q5 } from "../figma_app/516028";
import { X$ } from "../905/612685";
import { _9 } from "../figma_app/76115";
import { ON, zr } from "../figma_app/644808";
import { dH } from "../figma_app/647246";
var d = l;
function R() {
  let e = n1();
  let t = g7();
  let r = q5();
  let i = e && t.length > 0;
  return (_$$h(() => {
    i && analyticsEventManager.trackDefinedEvent("assets_panel.view_ui_kit_empty_state", {
      fileKey: r?.key,
      fileTeamId: r?.teamId ?? void 0,
      fileOrgId: r?.parentOrgId ?? void 0
    });
  }), i) ? jsxs("div", {
    className: "ui_kit_select--container--lFmF-",
    children: [jsx("div", {
      className: _$$s.colorTextSecondary.alignCenter.$,
      children: renderI18nText("design_systems.assets_panel.ui_kit_empty_state")
    }), jsx("div", {
      className: _$$s.flex.flexColumn.gap8.mt16.$,
      children: t.map((e, t) => jsx(L, {
        library: e,
        index: t
      }, e.library_file_key))
    })]
  }) : null;
}
function L({
  library: e,
  index: t
}) {
  let {
    library_file_name,
    thumbnail_url,
    library_file_key,
    library_key,
    num_components
  } = e;
  let c = q5();
  let u = useCallback(() => {
    analyticsEventManager.trackDefinedEvent("assets_panel.go_to_library", {
      libraryKey: library_key,
      fileKey: c?.key,
      fileTeamId: c?.teamId ?? void 0,
      fileOrgId: c?.parentOrgId ?? void 0,
      entryPoint: "ui_kit_empty_state"
    });
  }, [library_key, c?.key, c?.parentOrgId, c?.teamId]);
  let h = useMemo(() => X$(library_file_key), [library_file_key]);
  return jsxs("div", {
    className: "ui_kit_select--uiKitCard--qVuvk",
    "data-testid": "ui-kit-card",
    children: [jsx("div", {
      style: {
        backgroundImage: `url(${thumbnail_url})`
      },
      className: "ui_kit_select--thumbnail--BSVO8"
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.itemsStart.overflowHidden.$,
      children: [jsx("div", {
        className: _$$s.flex.itemsCenter.gap2.maxWFull.$,
        children: jsx("div", {
          className: "ui_kit_select--uiKitName--ZMf0J ellipsis--ellipsis--Tjyfa",
          children: jsx(_$$N, {
            newTab: !0,
            href: h,
            onClick: u,
            children: library_file_name
          })
        })
      }), jsx("div", {
        className: "ui_kit_select--uiKitNumComponents--JH-mO",
        children: renderI18nText("design_systems.assets_panel.num_components", {
          numComponents: num_components
        })
      })]
    }), jsx(P, {
      libraryKey: library_key,
      index: t
    })]
  });
}
function P({
  libraryKey: e,
  index: t
}) {
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.CONTENTS, zr.UI_KITS, t]
  });
  let a = _9(e, "assets_panel_empty_state");
  let s = q5();
  let o = useCallback(() => {
    analyticsEventManager.trackDefinedEvent("assets_panel.ui_kit_start", {
      libraryKey: e,
      fileKey: s?.key,
      fileTeamId: s?.teamId ?? void 0,
      fileOrgId: s?.parentOrgId ?? void 0
    });
    a(!0);
    dH(e);
  }, [e, s?.key, s?.parentOrgId, s?.teamId, a]);
  return jsx("div", {
    className: "ui_kit_select--addButton--ahHMr",
    children: jsx(K, {
      onClick: o,
      "aria-label": getI18nString("design_systems.assets_panel.add_library"),
      ref: setKeyboardNavigationElement,
      htmlAttributes: {
        "data-tooltip": getI18nString("design_systems.assets_panel.add_library"),
        "data-tooltip-type": "text"
      },
      children: jsx(_$$e, {})
    })
  });
}
export function $$D3(e, t) {
  return e ? t ? r6.BROWSE_LIBRARIES_ACTIONS : r6.BROWSE_LIBRARIES_ASSETS_PANEL : t ? r6.ACTIONS_EXPLORE_LIBRARIES_LINK : r6.ASSETS_PANEL_EXPLORE_LIBRARIES_LINK;
}
export function $$k0() {
  let {
    query
  } = _$$I(Cn.AssetsPanel);
  return jsx("div", {
    className: "empty_states--emptyStatesTextContainer--dM-5d",
    children: jsx("div", {
      className: "empty_states--text--5nh4u",
      children: renderI18nText("design_systems.assets_panel.no_results_for_query", {
        searchQuery: query
      })
    })
  });
}
export function $$M2() {
  let e = n1();
  let t = yy();
  return jsxs("div", {
    className: _$$s.flex.flexColumn.$,
    children: [jsx($$F1, {}), e && !t && jsx(R, {})]
  });
}
export function $$F1({
  onClickExplore: e,
  width_ui3: t,
  fromActionsModal: r,
  bgTransparentUI3: a = !1
}) {
  let s = useMemo(() => $$D3(!0, !!r), [r]);
  let {
    onToggleLibraryModal
  } = _$$u({
    entrypoint: s,
    modalType: "editor",
    initialTab: Wv.TEAM_LIBRARIES
  });
  let l = useCallback(() => {
    e?.();
    onToggleLibraryModal();
  }, [e, onToggleLibraryModal]);
  return jsx(j, {
    onClick: l,
    width: t,
    bgTransparent: a,
    fromActionsModal: !!r
  });
}
function j({
  onClick: e,
  width: t,
  bgTransparent: r = !1,
  fromActionsModal: i
}) {
  let {
    setKeyboardNavigationElement
  } = M3({
    path: [ON.CONTENTS, zr.CTA],
    disabled: i
  });
  return jsxs("div", {
    className: d()("empty_states--ui3EmptyState--8bWkh", _$$s.$$if(r, _$$s.bgTransparent, _$$s.colorBgSecondary).$),
    style: {
      width: t
    },
    "data-testid": "empty-state-assets-ui3",
    children: [jsx("div", {
      className: "empty_states--ui3LibraryIcon--56jRu",
      children: jsx(_$$l, {})
    }), jsx("div", {
      className: "empty_states--ui3EmptyStateTitle--UwoAZ",
      children: renderI18nText("design_systems.assets_panel.empty_state_title_ui3")
    }), jsxs("div", {
      children: [jsx("div", {
        className: "empty_states--ui3EmptyStateSubtitle---Yamk",
        children: renderI18nText("design_systems.assets_panel.empty_state_subtitle_ui3")
      }), jsx(_$$N, {
        newTab: !0,
        trusted: !0,
        href: "https://help.figma.com/hc/articles/360038662654",
        children: renderI18nText("design_systems.assets_panel.learn_more")
      })]
    }), jsx($n, {
      onClick: e,
      recordingKey: Pt("assetsEmptyState", "exploreLibraries"),
      ref: setKeyboardNavigationElement,
      children: renderI18nText("design_systems.assets_panel.empty_state_cta_ui3")
    })]
  });
}
export const Wq = $$k0;
export const Ee = $$F1;
export const od = $$M2;
export const N2 = $$D3;