import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo } from "react";
import { IconButton } from "../905/443068";
import { C } from "../905/520159";
import { h as _$$h } from "../figma_app/58251";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { P } from "../figma_app/582341";
import { useCurrentPublicPlan, getParentOrgIdIfOrgLevel } from "../figma_app/465071";
import { isTeamLibrary } from "../figma_app/633080";
import { S } from "../905/612212";
import { hx, m3 } from "../905/66449";
let g = "library_modal_body_header--libraryPath--PUMmE";
let f = "library_modal_body_header--libraryPathLink--SgLKL";
export function $$_0({
  title: e,
  workspace: t,
  team: i,
  communityAuthor: c,
  onBack: u,
  rightElement: p,
  showBottomBorder: g
}) {
  let f = useCallback(() => {
    S.setLastAction(S.NavAction.BACK_BUTTON);
    u?.();
  }, [u]);
  let {
    setKeyboardNavigationElement,
    onClickWithFocus
  } = hx({
    path: [m3.TabBodySection.Header],
    column: 0,
    onClick: f
  });
  return jsxs("div", {
    className: cssBuilderInstance.flex.pl8.pr16.py16.gap4.h32.minH32.itemsCenter.bSolid.colorBorder.$,
    style: g ? {
      borderBottomWidth: "1px"
    } : void 0,
    children: [u && jsx(IconButton, {
      onClick: onClickWithFocus,
      "aria-label": getI18nString("design_systems.libraries_modal.back"),
      ref: setKeyboardNavigationElement,
      htmlAttributes: {
        "data-testid": "library-modal-back-button"
      },
      children: jsx(C, {})
    }), jsxs("div", {
      className: cssBuilderInstance.textBodyMedium.minW0.flexGrow1.if(!u, cssBuilderInstance.ml10).$,
      children: ["string" == typeof e ? jsx(_$$h, {
        as: "h2",
        text: e
      }) : e, jsx(y, {
        workspace: t,
        team: i,
        communityAuthor: c
      })]
    }), p]
  });
}
export function $$A1(e) {
  let {
    library,
    ...i
  } = e;
  let {
    workspace,
    team,
    communityAuthor
  } = useMemo(() => isTeamLibrary(library) ? {
    workspace: library.workspace_id && library.workspace_name ? {
      name: library.workspace_name,
      id: library.workspace_id
    } : void 0,
    team: library.team_id && library.team_name ? {
      name: library.team_name,
      id: library.team_id
    } : void 0,
    communityAuthor: void 0
  } : {
    communityAuthor: {
      handle: library.community_author_handle,
      name: library.community_author_name
    },
    workspace: void 0,
    team: void 0
  }, [library]);
  return jsx($$_0, {
    ...i,
    title: jsxs("div", {
      className: cssBuilderInstance.flex.itemsCenter.gap2.$,
      children: [jsx(_$$h, {
        as: "h2",
        text: library.library_name
      }), jsx(P, {
        compact: !0,
        colorPrimaryOnHover: !0,
        showPresetTooltip: !0,
        libraryKey: library.library_key
      })]
    }),
    workspace,
    team,
    communityAuthor
  });
}
function y({
  workspace: e,
  team: t,
  communityAuthor: i
}) {
  let r = useCurrentPublicPlan("Path").unwrapOr(null);
  let a = getParentOrgIdIfOrgLevel(r);
  let {
    setKeyboardNavigationElement
  } = hx({
    path: [m3.TabBodySection.Header],
    column: 1
  });
  let {
    setKeyboardNavigationElement: _setKeyboardNavigationElement
  } = hx({
    path: [m3.TabBodySection.Header],
    column: 2
  });
  if (e || t) {
    let i = e ? `/files/${a}/workspace/${e.id}/` : void 0;
    let r = t ? a ? `/files/${a}/team/${t.id}` : `/files/team/${t.id}` : void 0;
    return jsxs("h3", {
      className: g,
      children: [e && i && jsx(_$$h, {
        as: "a",
        className: f,
        text: e.name,
        href: i,
        target: "_blank",
        elementRef: setKeyboardNavigationElement
      }), e && t && jsx(Fragment, {
        children: " / "
      }), t && r && jsx(_$$h, {
        as: "a",
        className: f,
        text: t.name,
        href: r,
        target: "_blank",
        elementRef: _setKeyboardNavigationElement
      })]
    });
  }
  if (i) {
    let e = `/@${i.handle}`;
    return jsx("h3", {
      className: g,
      children: jsx(_$$h, {
        as: "a",
        className: f,
        text: i.name,
        href: e,
        target: "_blank",
        elementRef: _setKeyboardNavigationElement
      })
    });
  }
  return null;
}
export const Q = $$_0;
export const d = $$A1;
