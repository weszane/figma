import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { N } from "../905/438674";
import { $n } from "../905/521428";
import { e as _$$e } from "../905/149844";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { Y } from "../905/830372";
import { B } from "../905/900597";
import { to } from "../905/156213";
import { px, Um } from "../figma_app/465071";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
export function $$h0(e) {
  let t = useDispatch();
  let a = px();
  let h = Um(a).unwrapOr(!1);
  let x = jsxs(N, {
    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ",
    children: [" ", tx("resource_connection.request_modal.learn_more"), " "]
  });
  return jsxs(Y, {
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
      className: _$$s.textHeadingMedium.$,
      children: _$$t("connected_projects_table.collaborate_in_a_connected_project")
    }), jsx("div", {
      className: _$$s.textBodyLarge.$,
      style: {
        width: "508px",
        textAlign: "center"
      },
      children: h ? tx("resource_connection.admin_ui.create_a_connected_project_body_for_permissioned_user_v3") : tx("resource_connection.admin_ui.connected_projects_help_you_collaborate_and_share_resources_with_external_teams", {
        learnMore: x
      })
    }), h && jsxs(Fragment, {
      children: [jsx($n, {
        iconPrefix: jsx(_$$e, {}),
        variant: "primary",
        onClick: () => {
          t(to({
            type: B,
            data: {
              entryPoint: e.entryPoint
            }
          }));
        },
        children: _$$t("resource_connection.admin_ui.connect_project")
      }), x]
    }), jsx("div", {
      className: _$$s.h100.$
    })]
  });
}
export const K = $$h0;