import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useSelector, useDispatch } from "../vendor/514228";
import { getI18nString, renderI18nText } from "../905/303541";
import { E } from "../905/984674";
import { Ce } from "../905/156213";
import { bE } from "../figma_app/375098";
import { c as _$$c } from "../905/370443";
import { iZ } from "../905/372672";
import { S } from "../5885/332447";
import { Ju } from "../905/102752";
import { xx } from "../figma_app/995208";
import { buildUploadUrl } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { X } from "../5885/331878";
let h = "seen_pro_onboarding_welcome_modal";
function y() {
  return jsxs("div", {
    className: _$$s.mt16.$,
    children: [jsx(X, {
      bulletLabel: getI18nString("pro_onboarding.unlimited_files_for_all_your_ideas")
    }), jsx(X, {
      bulletLabel: getI18nString("pro_onboarding.unlimited_projects_to_organize_your_files")
    }), jsx(X, {
      bulletLabel: getI18nString("pro_onboarding.dev_mode_for_simpler_inspection_and_handoff")
    })]
  });
}
function T({
  user: e
}) {
  return jsx(E, {
    fontSize: 24,
    fontWeight: "bold",
    children: renderI18nText("pro_onboarding.welcome_to_professional", {
      userName: e.name.split(" ")[0]
    })
  });
}
function v() {
  return jsx("img", {
    width: 313,
    src: buildUploadUrl("4323e87513cec17f5decef84ebf66c12c0d2ea59"),
    alt: "An illustration welcoming you to Figma Professional"
  });
}
export let $$b0 = Ju(function ({
  teamId: e
}) {
  let t = iZ();
  let i = useSelector(t => t.teams[e]);
  let m = useDispatch();
  let u = useSelector(e => e.userTeamFlags);
  if (!t || u[e]?.[h]) return null;
  let g = () => {
    m(bE({
      all_team_flags: [{
        team_id: e,
        flags: {
          [h]: !0
        }
      }]
    }));
    m(Ce());
  };
  let f = jsxs(Fragment, {
    children: [renderI18nText("pro_onboarding.you_successfully_upgraded_team_name_to_a_professional_plan", {
      teamName: jsx(E, {
        fontWeight: "bold",
        children: i.name
      })
    }), jsx(y, {})]
  });
  return jsx(xx, {
    title: jsx(T, {
      user: t
    }),
    description: f,
    media: jsx(v, {}),
    primaryCta: {
      type: "button",
      label: jsx(E, {
        fontSize: 13,
        children: renderI18nText("pro_onboarding.get_started")
      }),
      ctaTrackingDescriptor: _$$c.GET_STARTED,
      onClick: g
    },
    trackingContextName: "Pro Onboarding Team Upgrader Welcome Modal",
    trackingProperties: S.getTrackingProperties(e),
    onClose: g,
    closeButtonColor: "light"
  });
}, "ProOnboardingTeamUpgraderWelcomeModal");
export const C = $$b0;