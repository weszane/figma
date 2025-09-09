import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { I as _$$I } from "../3276/969941";
import o from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { getInitialOptions } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { BrowserInfo } from "../figma_app/778880";
import { YQ } from "../905/502364";
import { c as _$$c } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { D9 } from "../1250/182479";
import { DG } from "../9410/60600";
import { xo } from "../figma_app/473493";
import { l7 } from "../figma_app/88239";
import { S as _$$S } from "../figma_app/11182";
import { showModalHandler } from "../905/156213";
import { $z } from "../figma_app/831799";
import { xf } from "../3276/13008";
import { my } from "../figma_app/976749";
import { wR } from "../figma_app/765689";
import { nk } from "../figma_app/2023";
import { aV } from "../figma_app/722362";
import { m0 } from "../figma_app/546509";
import { Cq } from "../figma_app/516028";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { TeamCanEdit } from "../figma_app/43951";
import { XX } from "../figma_app/345997";
import { X$ } from "../figma_app/465071";
import { wH, KI } from "../figma_app/680166";
import { FEditorType } from "../figma_app/53721";
import { Ib } from "../905/129884";
import { J as _$$J } from "../905/202542";
import { jn } from "../figma_app/522082";
import { v as _$$v } from "../905/596134";
import { F as _$$F } from "../3276/949498";
import { q as _$$q } from "../3276/24875";
import { vt } from "../figma_app/231614";
import { g_ } from "../905/646788";
import { p as _$$p } from "../3276/162708";
import { v4 } from "../figma_app/598952";
import { r as _$$r } from "../3276/224454";
import { Oc } from "../figma_app/552876";
import { e as _$$e } from "../figma_app/831857";
import { $ as _$$$ } from "../3276/30079";
import { r as _$$r2 } from "../3276/233873";
import { M$q } from "../figma_app/27776";
import { lT, m as _$$m, cR, OI, Mg, A9, LF, z_, MI, uX } from "../3276/466614";
var l = o;
var ee = (e => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.DISABLED = "disabled", e.LOADING = "loading", e.OPEN_SESSION = "openSession", e.PERSONAL_DRAFT_DISABLED = "personalDraftDisabled", e.HAS_CURRENT_UPGRADE_REQUEST = "hasCurrentUpgradeRequest", e))(ee || {});
export function $$et0({
  editingFile: e,
  user: t,
  isFileInWorkshop: i,
  appendedClassname: s
}) {
  let o = l7();
  let l = my();
  let f = wR(e.editorType);
  let {
    hasPendingRequest,
    getUpgradePathway,
    getHasProvisionalAccess
  } = wH({
    folderId: e.folderId
  });
  let Z = e.editorType === FFileType.WHITEBOARD && !!e.org?.figjamDisabledAt;
  let ee = l === FEditorType.Slides && oA(e.org?.isSlidesDisabled);
  let et = l === FEditorType.Sites && !!e.org?.isSitesDisabled;
  let er = l === FEditorType.Cooper && !!e.org?.isCooperDisabled;
  let en = _$$e();
  let es = !!e.org || XX(e.team);
  let eo = e.isTryFile;
  let el = aV();
  let ed = useDispatch();
  let ec = Cq({
    useSinatraType: !0
  })?.url;
  let [eu, ep] = useState(null);
  let eh = !e.teamId && !e.parentOrgId && e.folderId === t?.personal_drafts_folder_id && !eo;
  let em = getHasProvisionalAccess(f);
  let {
    userLacksLicenseAccess
  } = KI({
    fileKey: e.key,
    userId: t?.id ?? null,
    enabled: !!e && !!t
  });
  let eg = userLacksLicenseAccess(e.editorType ?? FFileType.DESIGN);
  let e_ = e.folderId === t?.drafts_folder_id && eg && hasPendingRequest(f) && !em && getUpgradePathway(f) !== _$$J.AUTO_PATHWAY;
  let ex = t?.id === e.creatorId;
  let ey = vt(e.team?.id);
  let eb = jn();
  let eC = Rs(TeamCanEdit, {
    id: e.team?.id || ""
  }, {
    enabled: !!e.team
  });
  let ev = "loaded" === eC.status && !!eC.data.team?.hasPermission;
  let eE = !!e.team && ey || !!e.team && eb;
  let eT = e.editorType === FFileType.FIGMAKE && !en;
  let ew = X$("ShareButton").unwrapOr(null);
  let eS = ew?.tier === FPlanNameType.PRO;
  let ej = xo();
  xf(e);
  let eI = Oc();
  e.canView && e.canEdit;
  let ek = useCallback(() => {
    if (!el && !Z && !ee && !et && !er && !eT && !eh && e) {
      if (eo) {
        let t;
        void 0 !== ec && (ed(_$$S({
          url: ec
        })), t = !0);
        ed(showModalHandler({
          type: _$$p,
          data: {
            fileKey: e.key,
            alreadyCopied: t
          }
        }));
      } else {
        YQ({
          id: "multiplayer_toolbar_share_button"
        });
        ed(showModalHandler({
          type: g_,
          data: {
            fileKey: e.key,
            source: nk.fullscreenToolbar,
            isLockedTeam: eE
          }
        }));
      }
    }
  }, [el, Z, ee, et, er, eh, eo, eT, eE, ec, e, ed]);
  let eN = m0();
  if (useEffect(() => {
    eN && (eN._share_file = () => {
      ek();
    });
  }, [eN, ek]), BrowserInfo.isMeetDevice || (!eo || !i) && !t) return null;
  let eA = i && !eo && es;
  let eO = !!getInitialOptions().org_id && getInitialOptions().org_id === e.parentOrgId;
  if (eE && "loading" === eC.status) return null;
  let eL = eT ? "disabled" : eo ? "secondary" : Z || ee || et || er ? "disabled" : el ? "loading" : eA ? "openSession" : eh ? "personalDraftDisabled" : e_ ? "hasCurrentUpgradeRequest" : eE && ev && !e.canEdit || ej ? "secondary" : "primary";
  let eR = eT ? getI18nString("fullscreen.toolbar.multiplayer.sharing_figmake_files_disabled") : Z ? getI18nString("fullscreen.toolbar.multiplayer.sharing_fig_jam_files_disabled_by_your_organization") : ee ? getI18nString("fullscreen.toolbar.multiplayer.sharing_slides_files_disabled_by_your_organization") : et ? getI18nString("fullscreen.toolbar.multiplayer.sharing_sites_files_disabled_by_your_organization") : er ? getI18nString("fullscreen.toolbar.multiplayer.sharing_buzz_files_disabled_by_your_organization") : eA ? getI18nString("fullscreen.toolbar.multiplayer.open_session_in_progress") : eh ? _$$r : e_ ? getI18nString("fullscreen.toolbar.multiplayer.sharing_has_current_upgrade_request") : null;
  let eD = {
    "data-tooltip-is-current-user-file-owner": JSON.stringify(ex),
    "data-tooltip-type": eh ? Ib.SPECIAL : Ib.TEXT,
    "data-tooltip-interactive": !!eh,
    "data-tooltip": eR,
    "data-tooltip-show-immediately": !0,
    "data-tooltip-offset-y": eh ? 0 : 6
  };
  let eM = l === FEditorType.Whiteboard;
  let eP = eM || o || eI;
  let eF = eP ? lT : _$$m;
  let eB = e.hasEditRole && oA(e.hasEditRole);
  let eU = !el && !eR && eu && ex && (eO || eS);
  let eG = eM ? parsePxNumber(M$q) : void 0;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: eF,
      ref: ep,
      "data-onboarding-key": D9,
      children: [jsx(eP ? ea : ei, {
        variant: eL,
        onClick: ek,
        tooltipProps: eD,
        appendedClassname: s
      }), eB && jsx(_$$$, {
        fileKey: e.key,
        isLegacyPosition: !eP
      })]
    }), eB && !eR && eu && jsx(_$$F, {
      target: eu,
      windowPadding: eG
    }), eU && jsx(_$$q, {
      file: e,
      target: eu
    }), jsx(DG, {})]
  });
}
function ei({
  variant: e,
  onClick: t,
  tooltipProps: i,
  appendedClassname: n
}) {
  let a = _$$v();
  let s = "openSession" === e;
  let o = l()(a ? cR : OI, {
    [Mg]: "disabled" === e,
    [A9]: "loading" === e,
    [LF]: s,
    [z_]: "personalDraftDisabled" === e,
    [MI]: "secondary" === e
  }, uX, n);
  return jsxs($z, {
    type: "button",
    className: o,
    onClick: t,
    "data-onboarding-key": v4,
    ...i,
    dataTestId: "multiplayer-toolbar-share-button",
    trackingProperties: {
      buttonVariant: e
    },
    disabled: en(e),
    children: [s && jsx(_$$r2, {}), renderI18nText("fullscreen.toolbar.multiplayer.share")]
  });
}
let er = ["disabled", "personalDraftDisabled", "loading", "hasCurrentUpgradeRequest"];
function en(e) {
  return er.includes(e);
}
function ea({
  variant: e,
  onClick: t,
  tooltipProps: i
}) {
  let n = {
    primary: "primary",
    secondary: "secondary",
    disabled: "disabled",
    loading: "disabled",
    openSession: "primary",
    personalDraftDisabled: "disabled",
    hasCurrentUpgradeRequest: "disabled"
  }[e];
  let a = null;
  "openSession" === e && (a = jsx(_$$I, {}));
  return jsx(_$$c, {
    disabled: en(e),
    variant: "disabled" !== n ? n : void 0,
    iconPrefix: a,
    onClick: t,
    trackingProperties: {
      buttonVariant: e
    },
    htmlAttributes: {
      ...i,
      "data-testid": "multiplayer-toolbar-share-button",
      "data-onboarding-key": v4
    },
    children: renderI18nText("fullscreen.toolbar.multiplayer.share")
  });
}
export const w = $$et0;