import { jsxs, jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { rW } from "../figma_app/591738";
import { Zr } from "../figma_app/678782";
import { aV } from "../figma_app/722362";
import { o3, nt } from "../905/226610";
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
import { ex } from "../905/524523";
import { n8, xG } from "../figma_app/121043";
import { $0 } from "../1556/751556";
import { selectCurrentFile } from "../figma_app/516028";
import { Z } from "../905/521211";
import { O as _$$O } from "../6020/752349";
import { s as _$$s } from "../9410/760762";
import { n as _$$n } from "../9410/783801";
import { A as _$$A, n as _$$n2 } from "../6020/932863";
import { _ as _$$_2 } from "../1528/446737";
import { En } from "../9410/28424";
import { J } from "../9410/617561";
let S = "hub_file_tooltips--hubFileInfo--mO1Xa text--fontPos11--2LvXf text--_fontBase--QdLsd";
let k = "hub_file_tooltips--handle--n3W-M";
let E = "hub_file_tooltips--link--fRVPc blue_link--blueLink--9rlnd";
let C = ex("hub_file_in_review", function (e) {
  let {
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
    className: S,
    htmlAttributes: {
      onMouseDown: i
    },
    children: [jsx("span", {
      className: k,
      children: renderI18nText("community.tooltip.is_currently_in_review")
    }), jsx("div", {
      className: E,
      children: renderI18nText("community.permissions_modal_publish_tab.footer.view_community_page")
    })]
  });
}, e => ({
  url: e.getAttribute("data-tooltip-hub-file-url") || ""
}));
let A = ex("hub_file_info", function (e) {
  let {
    lastPublishedAt,
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
    className: S,
    htmlAttributes: {
      onMouseDown: n
    },
    children: [jsx("span", {
      className: k,
      children: renderI18nText("community.tooltip.published_to_community_on_date", {
        date: lastPublishedAt
      })
    }), jsx("div", {
      className: E,
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
let I = ex("hub_file_info_unverified", function (e) {
  let {
    verificationStatus
  } = e;
  return jsx("div", {
    className: S,
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
  return e ? jsx(R, {
    hubFile: e
  }) : null;
}
function R({
  hubFile: e
}) {
  let t;
  let i = Vz(e.id);
  if (e.unpublishedAt) return null;
  let {
    currentHubFileVersion
  } = e;
  let s = getI18nString("fullscreen.filename_view.hub_file_published_at", {
    publish_date: new Date(currentHubFileVersion.createdAt)
  });
  let l = e.verificationStatus === FUserVerificationStatusType.BLOCKED ? getI18nString("community.tooltip.this_community_file_is_currently_blocked") : e.verificationStatus === FUserVerificationStatusType.UNVERIFIED ? getI18nString("community.tooltip.this_community_file_is_currently_unverified") : "";
  let a = e.verificationStatus === FUserVerificationStatusType.BLOCKED || e.verificationStatus === FUserVerificationStatusType.UNVERIFIED;
  let o = e.publishingStatus === FPublicationStatusType.PENDING_PUBLIC || e.publishingStatus === FPublicationStatusType.PENDING_USER_VISUAL_COMPLIANCE;
  a ? t = I : o ? t = C : getFeatureFlags().hub_file_info_tooltip && (t = A);
  return jsx("div", {
    className: a ? "hub_file_backlink--publicIconDisabled--ESBVX hub_file_backlink--publicIconBase--uhtkz" : "hub_file_backlink--publicIcon--gl5n8 hub_file_backlink--publicIconBase--uhtkz",
    "data-testid": "filename-view-public-icon",
    "data-tooltip": t,
    "data-tooltip-hub-file-last-published-at": s,
    "data-tooltip-hub-file-url": getCommunityFileUrl(e.id),
    "data-tooltip-hub-file-verification-status": l,
    "data-tooltip-interactive": !0,
    "data-tooltip-max-width": 300,
    "data-tooltip-offset-y": 0,
    "data-tooltip-type": KindEnum.SPECIAL,
    onClick: a ? void 0 : i,
    children: a ? jsx(_$$N, {}) : jsx(_$$m, {})
  });
}
function N() {
  let e = selectCurrentFile();
  let t = Z();
  return jsxs(_$$O, {
    label: getI18nString("fullscreen_actions.expand-ui-with-filename", {
      fileName: t
    }),
    children: [jsx("div", {
      className: "design_dev_handoff_collapsed_left_panel_toggle--fileName--3AMNd",
      children: jsx(_$$n, {
        shouldShowConnectedBadge: !0
      })
    }), e && jsx(_$$s, {
      openFile: e
    }), jsx(n8, {}), jsx(_$$A, {})]
  });
}
export function $$q0() {
  let {
    isLeftPanelCollapsed
  } = useContext(_$$t);
  let t = aV();
  let i = useSelector(e => e.mirror.appModel.showUi);
  let l = o3(nt.designNavBar);
  return t || !i ? null : jsxs(_$$_2, {
    isCollapsed: isLeftPanelCollapsed,
    children: [(!l || isLeftPanelCollapsed) && jsx(xG, {}), isLeftPanelCollapsed ? jsx(N, {}) : jsx(G, {})]
  });
}
function G() {
  let e = Zr("toggle-sidebar");
  let t = rW()();
  return jsxs("div", {
    className: "design_dev_handoff_left_panel_island--expandedIconSection--8-YFf",
    children: [jsx(n8, {}), jsx(En, {}), jsx(J, {}), jsx(T, {}), t && jsx($0, {}), e && jsx(_$$n2, {})]
  });
}
export const s = $$q0;