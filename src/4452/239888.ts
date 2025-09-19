import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "../905/438674";
import { BannerFullWidth } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { Button } from "../905/521428";
import { L } from "../905/857916";
import { getFeatureFlags } from "../905/601108";
import m from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { useSubscription } from "../figma_app/288654";
import { oW } from "../905/675859";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { wR } from "../905/346715";
import { B } from "../905/900597";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { N as _$$N2 } from "../figma_app/55043";
import { UserFlagByName } from "../figma_app/43951";
import { useTeamPlanUser, useTeamPlanFeatures, useIsAdminUser } from "../figma_app/465071";
import { b as _$$b2, A as _$$A } from "../905/723768";
var _ = m;
let $$A = "connected_projects_tab_header--headerContainer--Rz5m6";
export function $$w0() {
  let e = useDispatch();
  let t = useTeamPlanUser();
  let a = useTeamPlanFeatures().unwrapOr(null);
  let m = useIsAdminUser(t).unwrapOr(!1);
  let w = a?.tier;
  let N = a?.connectionCount ?? 0;
  let R = _$$N2(a?.key, () => {
    e(showModalHandler({
      type: B,
      data: {
        entryPoint: wR.CONNECTED_PROJECT_ADMIN_UI
      }
    }));
  });
  let C = jsx(Link, {
    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
    children: renderI18nText("resource_connection.request_modal.learn_more")
  });
  let k = useSubscription(UserFlagByName, {
    name: "seen_connected_projects_org_member_banner"
  });
  let q = useMemo(() => "loaded" !== k.status || !!k.data?.currentUser?.userFlagByName, [k]);
  let M = getFeatureFlags().fc_initial_onboarding_enabled && !q ? jsx("div", {
    className: _()(_$$s.pt10.$, $$A),
    children: jsx(BannerFullWidth, {
      variant: "brand",
      icon: jsx(L, {
        style: {
          "--color-icon": "var(--color-icon-brand)"
        }
      }),
      onDismiss: () => {
        e(postUserFlag({
          seen_connected_projects_org_member_banner: !0
        }));
      },
      children: jsx(BannerMessage, {
        children: renderI18nText("resource_connection.connected_projects_tab.connected_projects_help_you_collaborate", {
          learnMore: C
        })
      })
    })
  }) : jsx(Fragment, {});
  return m ? jsxs("div", {
    className: $$A,
    children: [jsx("div", {
      className: "connected_projects_tab_header--contentContainer--xKmY8",
      children: jsxs(Fragment, {
        children: [jsx("div", {
          className: _$$s.textBodyLarge.$,
          children: renderI18nText("resource_connection.admin_ui.create_a_connected_project_to_collaborate_with_external_teams_without_being_charged_for_their_seats", {
            learnMore: C
          })
        }), jsxs("div", {
          className: "connected_projects_tab_header--buttonContainer--mL5-t",
          children: [jsx("div", {
            children: jsx(Button, {
              onClick: R,
              children: getI18nString("resource_connection.admin_ui.connect_project")
            })
          }), jsx("div", {
            className: _$$s.colorTextSecondary.$,
            children: a && w && N ? a.unlimitedConnectionsEnabled || a.testingOnlyUnlimitedConnectionsEnabled ? renderI18nText("resource_connection.admin_ui.unlimited_connections", {
              numConnections: N
            }) : _$$b2[w] - N > 0 ? renderI18nText("resource_connection.admin_ui.using_num_of_connections", {
              numConnections: N,
              maxConnections: _$$b2[w]
            }) : renderI18nText("resource_connection.admin_ui.maxed_out_connections", {
              maxConnections: _$$b2[w],
              planTier: _$$A(w)
            }) : null
          })]
        })]
      })
    }), jsx(oW, {
      src: buildUploadUrl("1afa222e66cf25ca6e6364b97885e5354321145f"),
      alt: "Connected projects logo",
      width: 115,
      height: 80
    })]
  }) : M;
}
export const A = $$w0;