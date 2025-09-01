import { jsx, jsxs } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { Yy } from "../figma_app/59509";
import { Q } from "../905/363675";
import { $ } from "../905/692618";
import { I } from "../469e6e40/329965";
import { J } from "../905/341359";
import { t as _$$t, tx } from "../905/303541";
import { b } from "../905/985254";
export function $$u0({
  openConnectedProjects: e
}) {
  let t = wA();
  let a = () => {
    t(b({
      seen_connected_project_in_admin_dashboard_banner: !0
    }));
  };
  return jsx(J, {
    children: jsxs(Yy, {
      variant: "brand",
      icon: jsx(I, {
        style: {
          "--color-icon": "var(--color-icon-brand)"
        }
      }),
      onDismiss: a,
      children: [jsx(Q, {
        title: _$$t("project_creation.introducing_connected_projects"),
        children: jsx("div", {
          className: "connected_projects_admin_banner--onboardingBannerDescription--beviJ",
          children: tx("project_creation.connect_an_external_team_to_a_project_to_share_designs_and_resources", {
            learnMore: jsx("a", {
              className: "connected_projects_admin_banner--learnMore--0F6S0 modal--blueLink--9GcJu blue_link--blueLink--9rlnd",
              href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
              target: "_blank",
              children: _$$t("file_browser.team_settings.learn_more")
            })
          })
        })
      }), jsx($, {
        onClick: () => {
          e();
          a();
        },
        children: tx("admin_dashboard.onboarding.try_it")
      })]
    })
  });
}
export const k = $$u0;