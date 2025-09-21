import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { Link } from "../905/438674";
import { Button } from "../905/521428";
import { e as _$$e } from "../905/149844";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { B } from "../905/900597";
import { showModalHandler } from "../905/156213";
import { useTeamPlanUser, useIsAdminUser } from "../figma_app/465071";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$h0(e) {
  let t = useDispatch();
  let a = useTeamPlanUser();
  let h = useIsAdminUser(a).unwrapOr(!1);
  let x = jsxs(Link, {
    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ",
    children: [" ", renderI18nText("resource_connection.request_modal.learn_more"), " "]
  });
  return jsxs(AutoLayout, {
    width: "fill-parent",
    height: "fill-parent",
    direction: "vertical",
    horizontalAlignItems: "center",
    verticalAlignItems: "center",
    spacing: 16,
    padding: 32,
    children: [jsx(oW, {
      src: buildUploadUrl("1afa222e66cf25ca6e6364b97885e5354321145f"),
      alt: "Connected projects logo",
      width: 150
    }), jsx("div", {
      className: cssBuilderInstance.textHeadingMedium.$,
      children: getI18nString("connected_projects_table.collaborate_in_a_connected_project")
    }), jsx("div", {
      className: cssBuilderInstance.textBodyLarge.$,
      style: {
        width: "508px",
        textAlign: "center"
      },
      children: h ? renderI18nText("resource_connection.admin_ui.create_a_connected_project_body_for_permissioned_user_v3") : renderI18nText("resource_connection.admin_ui.connected_projects_help_you_collaborate_and_share_resources_with_external_teams", {
        learnMore: x
      })
    }), h && jsxs(Fragment, {
      children: [jsx(Button, {
        iconPrefix: jsx(_$$e, {}),
        variant: "primary",
        onClick: () => {
          t(showModalHandler({
            type: B,
            data: {
              entryPoint: e.entryPoint
            }
          }));
        },
        children: getI18nString("resource_connection.admin_ui.connect_project")
      }), x]
    }), jsx("div", {
      className: cssBuilderInstance.h100.$
    })]
  });
}
export const K = $$h0;