import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { DialogLabel } from "../905/799737";
import { useAtomWithSubscription } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { M, n as _$$n } from "../3674/214307";
import { BC } from "../3674/61752";
import { DevModeUI } from "../905/15667";
import { selectCurrentFile } from "../figma_app/516028";
import { FProductAccessType } from "../figma_app/191312";
import { wH } from "../figma_app/680166";
import { J as _$$J } from "../905/202542";
import { R as _$$R } from "../905/300969";
import { I } from "../3674/466343";
import { DD, N$, HS, Ps } from "../3674/371829";
let v = buildUploadUrl("6d5e9cb0e9ec7fd5dd58425c5527dc8a78143a19");
function y() {
  let e;
  let t = M();
  let n = useAtomWithSubscription(_$$R);
  e = t ? renderI18nText("dev_handoff.paywall.blocking_modal.title.starter") : n ? renderI18nText("dev_handoff.paywall.blocking_modal.title.direct_link") : renderI18nText("dev_handoff.paywall.blocking_modal.title.dev_onboarding");
  return jsx(DialogLabel, {
    className: DD,
    children: e
  });
}
function b() {
  let e = [renderI18nText("dev_handoff.paywall.blocking_modal.content.copy_code"), renderI18nText("dev_handoff.paywall.blocking_modal.content.track_design_changes"), renderI18nText("dev_handoff.paywall.blocking_modal.content.customize_plugins")];
  return jsx("ul", {
    children: e.map((e, t) => jsx("li", {
      className: N$,
      children: e
    }, t))
  });
}
function j() {
  let e = _$$n();
  let t = selectCurrentFile();
  let n = t?.team?.name || "";
  return e ? jsx("div", {
    className: HS,
    children: renderI18nText("dev_handoff.paywall.blocking_modal.content.ask_admin", {
      teamName: jsx("span", {
        className: Ps,
        children: n
      })
    })
  }) : jsx(N, {});
}
export function $$w0() {
  return {
    imgSrc: v,
    modalContent: jsxs(Fragment, {
      children: [jsx(y, {}), jsx(b, {}), jsx(j, {})]
    })
  };
}
function N() {
  let {
    getUpgradePathway,
    getPlanAndPlanUser
  } = wH();
  let n = getUpgradePathway(FProductAccessType.DEV_MODE);
  let {
    plan
  } = getPlanAndPlanUser(FProductAccessType.DEV_MODE);
  return [_$$J.ADMIN_AUTO_PATHWAY, _$$J.AUTO_PATHWAY].includes(n) ? jsx("div", {
    className: _$$s.alignCenter.colorTextSecondary.mt16.$,
    children: jsx("span", {
      children: renderI18nText("auto_upgrade_confirmation.dev_mode.body", {
        planName: plan?.name
      })
    })
  }) : null;
}
export function $$k1() {
  let {
    primaryButtonProps,
    secondaryButtonProps
  } = BC({
    entryPoint: DevModeUI.BlockingModal
  });
  let {
    imgSrc,
    modalContent
  } = $$w0();
  return jsx(I, {
    imgSrc,
    content: modalContent,
    modalType: "blocking modal",
    primaryButtonProps: {
      ...primaryButtonProps,
      type: "upgrade"
    },
    secondaryButtonProps: secondaryButtonProps ? {
      ...secondaryButtonProps,
      type: "back to design"
    } : void 0
  });
}
export const L = $$w0;
export const R = $$k1;