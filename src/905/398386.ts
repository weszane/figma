import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import o from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { VisualBellActions } from "../905/302958";
import { R } from "../905/687502";
import { isUsingLocalBuild } from "../figma_app/298277";
import { getSelectedView } from "../figma_app/386952";
var l = o;
function f({
  isSticky: e,
  hasTopDivider: t,
  children: i
}) {
  return jsx("div", {
    className: l()("file_browser_page_view--viewBarWrapper--LVp2Z", {
      [cssBuilderInstance.sticky.$]: e,
      [cssBuilderInstance.bSolid.colorBorder.bt1.$]: t
    }),
    children: i
  });
}
export function $$_0(e) {
  let {
    mobileToolBarSpacerStyle,
    containerStyle,
    metaContainerStyle
  } = e.collapseSidebarOnTabletView ? {
    mobileToolBarSpacerStyle: "",
    containerStyle: "file_browser_page_view--tabletOptimizedContainer--EYJ4F file_browser_page_view--container--ktTUu",
    metaContainerStyle: "file_browser_page_view--tabletOptimizedMetaContainer--zpv8C file_browser_page_view--metaContainer--0kBjx"
  } : {
    mobileToolBarSpacerStyle: "file_browser_page_view--mobileToolBarSpacer--bfkn5",
    containerStyle: "file_browser_page_view--container--ktTUu",
    metaContainerStyle: "file_browser_page_view--metaContainer--0kBjx"
  };
  let u = getSelectedView();
  let _ = useDispatch<AppDispatch>();
  let [A, y] = useState(!1);
  let b = window.performance.getEntriesByType("navigation")[0];
  useEffect(() => {
    let e = b?.loadEventEnd;
    0 === e || A || (trackEventAnalytics("File Browser Cold Start Page Load Time", {
      elapsedMs: e,
      selectedView: u.view
    }, {
      forwardToDatadog: !0,
      batchRequest: !0
    }), y(!0));
  }, [b?.loadEventEnd, A, u.view]);
  let v = e.errorBoundaryConfig?.figmaTeam ?? ServiceCategories.WAYFINDING;
  let I = e.errorBoundaryConfig?.boundaryKeySuffix ? `-${e.errorBoundaryConfig.boundaryKeySuffix}` : "";
  let E = jsxs(Fragment, {
    children: [!!e.banner && jsx(ErrorBoundaryCrash, {
      team: v,
      boundaryKey: `FileBrowserPageBanner${I}`,
      fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
      hasCustomWASMBuild: isUsingLocalBuild,
      children: e.banner
    }), jsx(ErrorBoundaryCrash, {
      team: v,
      boundaryKey: `FileBrowserPageToolbar${I}`,
      fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
      onError: () => {
        _(VisualBellActions.enqueue({
          message: "Something went wrong.",
          type: "react-error"
        }));
      },
      hasCustomWASMBuild: isUsingLocalBuild,
      children: e.toolbar
    }), !!e.header && e.header, jsx("div", {
      className: mobileToolBarSpacerStyle
    }), e.viewbar && jsx(f, {
      isSticky: e.viewBarSticky,
      children: e.viewbar
    }), !!e.belowToolbarBanner && jsx(ErrorBoundaryCrash, {
      team: v,
      boundaryKey: `FileBrowserPageBannerBelowToolbar${I}`,
      fallback: errorBoundaryFallbackTypes.NONE_I_KNOW_WHAT_IM_DOING,
      hasCustomWASMBuild: isUsingLocalBuild,
      children: e.belowToolbarBanner
    }), jsx("div", {
      className: l()(e.scrollableContainerClass, "file_browser_page_view--scrollableContainerClass--z7mzE"),
      children: jsxs("div", {
        className: `${containerStyle} ${e.containerClass || ""}`,
        children: [e.metaContent && jsx("div", {
          className: metaContainerStyle,
          children: jsx(ErrorBoundaryCrash, {
            team: v,
            boundaryKey: `FileBrowserPageMetaContent${I}`,
            fallback: jsx(R, {}),
            hasCustomWASMBuild: isUsingLocalBuild,
            children: e.metaContent
          })
        }), jsx("main", {
          className: `file_browser_page_view--contentContainer--m6UCY ${e.contentContainerClass || ""}`,
          children: jsx(ErrorBoundaryCrash, {
            team: v,
            boundaryKey: `FileBrowserPageContent${I}`,
            fallback: jsx(R, {}),
            hasCustomWASMBuild: isUsingLocalBuild,
            children: e.content
          })
        })]
      })
    })]
  });
  return jsx(ErrorBoundaryCrash, {
    team: v,
    boundaryKey: `FileBrowserPageHeader${I}`,
    fallback: jsx(R, {}),
    hasCustomWASMBuild: isUsingLocalBuild,
    children: E
  });
}
export const r = $$_0;
