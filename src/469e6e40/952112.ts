import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { BannerButton } from "../905/692618";
import { I } from "../469e6e40/329965";
import { UI3ConditionalWrapper } from "../905/341359";
import { getI18nString, renderI18nText } from "../905/303541";
import { postUserFlag } from "../905/985254";
export function $$u0({
  openConnectedProjects: e
}) {
  let t = useDispatch();
  let a = () => {
    t(postUserFlag({
      seen_connected_project_in_admin_dashboard_banner: !0
    }));
  };
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(BannerInset, {
      variant: "brand",
      icon: jsx(I, {
        style: {
          "--color-icon": "var(--color-icon-brand)"
        }
      }),
      onDismiss: a,
      children: [jsx(BannerMessage, {
        title: getI18nString("project_creation.introducing_connected_projects"),
        children: jsx("div", {
          className: "connected_projects_admin_banner--onboardingBannerDescription--beviJ",
          children: renderI18nText("project_creation.connect_an_external_team_to_a_project_to_share_designs_and_resources", {
            learnMore: jsx("a", {
              className: "connected_projects_admin_banner--learnMore--0F6S0 modal--blueLink--9GcJu blue_link--blueLink--9rlnd",
              href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
              target: "_blank",
              children: getI18nString("file_browser.team_settings.learn_more")
            })
          })
        })
      }), jsx(BannerButton, {
        onClick: () => {
          e();
          a();
        },
        children: renderI18nText("admin_dashboard.onboarding.try_it")
      })]
    })
  });
}
export const k = $$u0;