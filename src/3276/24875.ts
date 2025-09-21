import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getResourceDataOrFallback } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { e6, lR } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { nl, Pf } from "../905/590952";
import { DeepLinkType } from "../905/15667";
import { useDraftsCopyLinkExperiment } from "../figma_app/297957";
import { TrackingProvider } from "../figma_app/831799";
import { isDevHandoffEditorType } from "../figma_app/976749";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { modalTypeAtom } from "../figma_app/386952";
import { ViewerRestrictedDraftAccessLog } from "../figma_app/43951";
import { wH } from "../figma_app/680166";
import { q as _$$q } from "../905/202542";
import { defaultValidator } from "../figma_app/181241";
import { Cf } from "../905/504727";
import { Bj, ic } from "../3276/565493";
import { D as _$$D } from "../905/261307";
import { t } from "../905/789267";
import { PK, YG } from "../905/223565";
import { i as _$$i } from "../905/46262";
let C = new class {
  notifyViewerRestrictedDraftShared(e) {
    return defaultValidator.validate(({
      xr: t
    }) => t.put(`/api/viewer_restricted_draft/${e}/notify`));
  }
  dismissViewerRestrictedDraftShared(e) {
    return defaultValidator.validate(({
      xr: t
    }) => t.put(`/api/viewer_restricted_draft/${e}/dismiss`));
  }
}();
function M() {
  return jsxs("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    className: "shared_vr_draft_tooltip--svg--6colb",
    children: [jsx("path", {
      d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z",
      fill: "#FFCD29"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.30796 4.53016V9.09594H8.6777V4.53016H7.30796Z",
      fill: "black"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.9925 10.2382C8.49683 10.2382 8.90566 10.6471 8.90566 11.1514V11.214C8.90566 11.7183 8.49683 12.1272 7.9925 12.1272C7.48818 12.1272 7.07935 11.7183 7.07935 11.214V11.1514C7.07935 10.6471 7.48818 10.2382 7.9925 10.2382Z",
      fill: "black"
    })]
  });
}
let E = [_$$D.type, PK.type, YG.type, t.type];
export function $$N0({
  file: e,
  target: t
}) {
  let n = Bj(500);
  let a = isDevHandoffEditorType();
  let l = useSubscription(ViewerRestrictedDraftAccessLog, {
    fileKey: e.key,
    orgId: e.parentOrgId || null,
    teamId: e.teamId || null
  });
  let d = getProductAccessTypeOrDefault(e.editorType);
  let {
    handleUpgrade,
    getUpgradeEligibility
  } = wH({
    entryPoint: DeepLinkType.IN_EDITOR_RESTRICTED_DRAFT
  });
  let p = useAtomWithSubscription(modalTypeAtom);
  if (p && E.includes(p) || !n || "loaded" !== l.status) return null;
  let h = getResourceDataOrFallback(l.data.viewerRestrictedDraftAccessLog);
  if (!h || a || !e.parentOrgId && !e.teamId || !l.data.file?.isDraftFile) return null;
  let y = l.data.currentUser?.baseOrgUser;
  let C = l.data.currentUser?.teamUser;
  if (!(e.parentOrgId ? y : C) || h.dismissedAt || getUpgradeEligibility(d) !== _$$q.CAN_UPGRADE) return null;
  let w = h.viewerUser?.name;
  let k = handleUpgrade({
    licenseType: d,
    upgradeReason: _$$i.DRAFTS_SHARE,
    entryPoint: DeepLinkType.IN_EDITOR_RESTRICTED_DRAFT
  });
  return jsx(S, {
    target: t,
    viewerUserName: w,
    file: e,
    orgUser: y,
    teamUser: C,
    handleUpgrade: k
  });
}
function S({
  target: e,
  viewerUserName: t,
  file: n,
  orgUser: i,
  teamUser: s,
  handleUpgrade: r
}) {
  let m = ic(e);
  let u = useDraftsCopyLinkExperiment(!!i);
  let [f, _] = useState(!1);
  if (!u || f || !m) return null;
  let g = i?.org ?? s?.team;
  if (!g) return null;
  let v = () => {
    C.dismissViewerRestrictedDraftShared(n.key);
    _(!0);
  };
  let x = renderI18nText("viewer_restricted_tooltip.teammates_cant_access_this_file");
  let b = t ? renderI18nText("viewer_restricted_tooltip.to_collaborate_in_this_draft", {
    fileOpenerName: t
  }) : renderI18nText("viewer_restricted_tooltip.to_collaborate_in_this_draft_no_name");
  return jsx(TrackingProvider, {
    name: "VR Draft Share Notification Tooltip",
    children: jsx(Cf, {
      targetRect: m,
      disableDropdownScrollContainer: !0,
      showPoint: !0,
      propagateCloseClick: !0,
      maxWidth: 384,
      children: jsxs("div", {
        className: cssBuilderInstance.flex.flexRow.gap14.mb4.mt4.ml8.mr8.$,
        "data-testid": "SharedVrDraftTooltipView",
        children: [jsx(D, {
          plan: g
        }), jsxs("div", {
          children: [jsx("div", {
            className: cssBuilderInstance.colorTextOnbrand.fontBold.$,
            children: x
          }), jsx("div", {
            className: cssBuilderInstance.colorTextOnbrandSecondary.mt2.$,
            children: b
          }), jsxs("div", {
            className: cssBuilderInstance.flex.flexRow.mt8.gap8.$,
            children: [jsx(e6, {
              className: "shared_vr_draft_tooltip--ignoreButton---wVA0",
              onClick: v,
              children: renderI18nText("viewer_restricted_tooltip.ignore")
            }), jsx(lR, {
              variant: "primary",
              type: "submit",
              onClick: e => {
                _(!0);
                r(e);
                v();
              },
              children: renderI18nText("viewer_restricted_tooltip.get_upgraded_seat")
            })]
          })]
        })]
      })
    })
  });
}
function D({
  plan: e
}) {
  let t = {
    imgUrl: e.imgUrl ?? void 0,
    id: e.id,
    name: e.name
  };
  return jsxs("div", {
    className: "shared_vr_draft_tooltip--svgContainer--SousN",
    children: [jsx(nl, {
      team: t,
      size: Pf.LARGE
    }), jsx(M, {})]
  });
}
export const q = $$N0;