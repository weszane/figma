import { jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h as _$$h } from "../905/791079";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { NotModalType } from "../905/11928";
import { F_ } from "../905/858282";
import { QzE } from "../figma_app/6204";
let m = userFlagExistsAtomFamily("seen_connected_projects_admin_settings_content_tab_overlay");
let $$g1 = "org_admin_connected_projects_tab_onboarding_key";
export function $$f0() {
  let e = useAtomWithSubscription(m);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: QzE,
    priority: N.DEFAULT_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(rq, {
    arrowPosition: F_.TOP,
    description: jsx("p", {
      children: renderI18nText("resource_connection.onboarding.connect_an_external_team_to_a_project_to_share_designs_and_resources")
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText("file_browser.modal.got_it"),
      type: "button",
      onClick: () => {
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText("general.learn_more"),
      type: "link",
      href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    targetKey: $$g1,
    title: renderI18nText("project_creation.introducing_connected_projects"),
    trackingContextName: "Connected Projects Admin Settings Content Tab Onboarding",
    width: 350,
    zIndex: NotModalType.MODAL
  });
}
export const Q = $$f0;
export const k = $$g1;
