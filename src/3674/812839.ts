import { jsxs, jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { shouldShowEditorBell } from "../figma_app/591738";
import { Zr } from "../figma_app/678782";
import { useIsProgressBarHiddenOrLocked } from "../figma_app/722362";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { t as _$$t } from "../figma_app/501766";
import { N as _$$N } from "../905/301843";
import { m as _$$m } from "../905/701558";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText, getI18nString } from "../905/303541";
import { JT } from "../figma_app/173838";
import { Vz } from "../figma_app/198840";
import { getCommunityFileUrl } from "../905/612685";
import { FUserVerificationStatusType, FPublicationStatusType } from "../figma_app/191312";
import { KindEnum } from "../905/129884";
import { LinkPrimitive } from "../figma_app/496441";
import { customHistory } from "../905/612521";
import { ignoreCommandOrShift } from "../905/63728";
import { registerTooltip } from "../905/524523";
import { n8, xG } from "../figma_app/121043";
import { $0 } from "../1556/751556";
import { selectCurrentFile } from "../figma_app/516028";
import { Z } from "../905/521211";
import { O as _$$O } from "../6020/752349";
import { s as _$$s } from "../9410/760762";
import { n } from "../9410/783801";
import { A as _$$A, n as _$$n } from "../6020/932863";
import { _ as _$$_2 } from "../1528/446737";
import { En } from "../9410/28424";
import { J } from "../9410/617561";
let N = "hub_file_tooltips--hubFileInfo--mO1Xa text--fontPos11--2LvXf text--_fontBase--QdLsd";
let k = "hub_file_tooltips--handle--n3W-M";
let A = "hub_file_tooltips--link--fRVPc blue_link--blueLink--9rlnd";
let I = registerTooltip("hub_file_in_review", function (e) {
  let {
    url
  } = e;
  let n = ignoreCommandOrShift(e => {
    e.preventDefault();
    customHistory.redirect(url, "_blank");
  });
  return jsxs(LinkPrimitive, {
    newTab: !0,
    trusted: !0,
    href: url,
    className: N,
    htmlAttributes: {
      onMouseDown: n
    },
    children: [jsx("span", {
      className: k,
      children: renderI18nText("community.tooltip.is_currently_in_review")
    }), jsx("div", {
      className: A,
      children: renderI18nText("community.permissions_modal_publish_tab.footer.view_community_page")
    })]
  });
}, e => ({
  url: e.getAttribute("data-tooltip-hub-file-url") || ""
}));
let E = registerTooltip("hub_file_info", function (e) {
  let {
    lastPublishedAt,
    url
  } = e;
  let i = ignoreCommandOrShift(e => {
    e.preventDefault();
    customHistory.redirect(url, "_blank");
  });
  return jsxs(LinkPrimitive, {
    newTab: !0,
    trusted: !0,
    href: url,
    className: N,
    htmlAttributes: {
      onMouseDown: i
    },
    children: [jsx("span", {
      className: k,
      children: renderI18nText("community.tooltip.published_to_community_on_date", {
        date: lastPublishedAt
      })
    }), jsx("div", {
      className: A,
      children: renderI18nText("community.permissions_modal_publish_tab.footer.view_community_page")
    })]
  });
}, e => {
  let t = e.getAttribute("data-tooltip-hub-file-url") || "";
  return {
    lastPublishedAt: e.getAttribute("data-tooltip-hub-file-last-published-at") || "",
    url: t
  };
});
let C = registerTooltip("hub_file_info_unverified", function (e) {
  let {
    verificationStatus
  } = e;
  return jsx("div", {
    className: N,
    children: jsx("span", {
      className: k,
      children: verificationStatus
    })
  });
}, e => ({
  verificationStatus: e.getAttribute("data-tooltip-hub-file-verification-status")
}));
function T() {
  let e = JT();
  return e ? jsx(S, {
    hubFile: e
  }) : null;
}
function S({
  hubFile: e
}) {
  let t;
  let n = Vz(e.id);
  if (e.unpublishedAt) return null;
  let {
    currentHubFileVersion
  } = e;
  let o = getI18nString("fullscreen.filename_view.hub_file_published_at", {
    publish_date: new Date(currentHubFileVersion.createdAt)
  });
  let l = e.verificationStatus === FUserVerificationStatusType.BLOCKED ? getI18nString("community.tooltip.this_community_file_is_currently_blocked") : e.verificationStatus === FUserVerificationStatusType.UNVERIFIED ? getI18nString("community.tooltip.this_community_file_is_currently_unverified") : "";
  let s = e.verificationStatus === FUserVerificationStatusType.BLOCKED || e.verificationStatus === FUserVerificationStatusType.UNVERIFIED;
  let r = e.publishingStatus === FPublicationStatusType.PENDING_PUBLIC || e.publishingStatus === FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE;
  s ? t = C : r ? t = I : getFeatureFlags().hub_file_info_tooltip && (t = E);
  return jsx("div", {
    className: s ? "hub_file_backlink--publicIconDisabled--ESBVX hub_file_backlink--publicIconBase--uhtkz" : "hub_file_backlink--publicIcon--gl5n8 hub_file_backlink--publicIconBase--uhtkz",
    "data-testid": "filename-view-public-icon",
    "data-tooltip": t,
    "data-tooltip-hub-file-last-published-at": o,
    "data-tooltip-hub-file-url": getCommunityFileUrl(e.id),
    "data-tooltip-hub-file-verification-status": l,
    "data-tooltip-interactive": !0,
    "data-tooltip-max-width": 300,
    "data-tooltip-offset-y": 0,
    "data-tooltip-type": KindEnum.SPECIAL,
    onClick: s ? void 0 : n,
    children: s ? jsx(_$$N, {}) : jsx(_$$m, {})
  });
}
function z() {
  let e = selectCurrentFile();
  let t = Z();
  return jsxs(_$$O, {
    label: getI18nString("fullscreen_actions.expand-ui-with-filename", {
      fileName: t
    }),
    children: [jsx("div", {
      className: "design_dev_handoff_collapsed_left_panel_toggle--fileName--3AMNd",
      children: jsx(n, {
        shouldShowConnectedBadge: !0
      })
    }), e && jsx(_$$s, {
      openFile: e
    }), jsx(n8, {}), jsx(_$$A, {})]
  });
}
export function $$G0() {
  let {
    isLeftPanelCollapsed
  } = useContext(_$$t);
  let t = useIsProgressBarHiddenOrLocked();
  let n = useSelector(e => e.mirror.appModel.showUi);
  let l = useLabConfiguration(labConfigurations.designNavBar);
  return t || !n ? null : jsxs(_$$_2, {
    isCollapsed: isLeftPanelCollapsed,
    children: [(!l || isLeftPanelCollapsed) && jsx(xG, {}), isLeftPanelCollapsed ? jsx(z, {}) : jsx(U, {})]
  });
}
function U() {
  let e = Zr("toggle-sidebar");
  let t = shouldShowEditorBell()();
  return jsxs("div", {
    className: "design_dev_handoff_left_panel_island--expandedIconSection--8-YFf",
    children: [jsx(n8, {}), jsx(En, {}), jsx(J, {}), jsx(T, {}), t && jsx($0, {}), e && jsx(_$$n, {})]
  });
}
export const s = $$G0;