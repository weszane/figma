import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { N as _$$N } from "../905/438674";
import { Cs } from "../figma_app/59509";
import { Q } from "../905/363675";
import { $n } from "../905/521428";
import { L } from "../905/857916";
import { getFeatureFlags } from "../905/601108";
import m from "classnames";
import { buildUploadUrl } from "../figma_app/169182";
import { Rs } from "../figma_app/288654";
import { oW } from "../905/675859";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { wR } from "../905/346715";
import { B } from "../905/900597";
import { to } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { N as _$$N2 } from "../figma_app/55043";
import { sMZ } from "../figma_app/43951";
import { px, S2, Um } from "../figma_app/465071";
import { b as _$$b2, A as _$$A } from "../905/723768";
var _ = m;
let $$A = "connected_projects_tab_header--headerContainer--Rz5m6";
export function $$w0() {
  let e = useDispatch();
  let t = px();
  let a = S2().unwrapOr(null);
  let m = Um(t).unwrapOr(!1);
  let w = a?.tier;
  let N = a?.connectionCount ?? 0;
  let R = _$$N2(a?.key, () => {
    e(to({
      type: B,
      data: {
        entryPoint: wR.CONNECTED_PROJECT_ADMIN_UI
      }
    }));
  });
  let C = jsx(_$$N, {
    href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
    children: tx("resource_connection.request_modal.learn_more")
  });
  let k = Rs(sMZ, {
    name: "seen_connected_projects_org_member_banner"
  });
  let q = useMemo(() => "loaded" !== k.status || !!k.data?.currentUser?.userFlagByName, [k]);
  let M = getFeatureFlags().fc_initial_onboarding_enabled && !q ? jsx("div", {
    className: _()(_$$s.pt10.$, $$A),
    children: jsx(Cs, {
      variant: "brand",
      icon: jsx(L, {
        style: {
          "--color-icon": "var(--color-icon-brand)"
        }
      }),
      onDismiss: () => {
        e(_$$b({
          seen_connected_projects_org_member_banner: !0
        }));
      },
      children: jsx(Q, {
        children: tx("resource_connection.connected_projects_tab.connected_projects_help_you_collaborate", {
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
          children: tx("resource_connection.admin_ui.create_a_connected_project_to_collaborate_with_external_teams_without_being_charged_for_their_seats", {
            learnMore: C
          })
        }), jsxs("div", {
          className: "connected_projects_tab_header--buttonContainer--mL5-t",
          children: [jsx("div", {
            children: jsx($n, {
              onClick: R,
              children: _$$t("resource_connection.admin_ui.connect_project")
            })
          }), jsx("div", {
            className: _$$s.colorTextSecondary.$,
            children: a && w && N ? a.unlimitedConnectionsEnabled || a.testingOnlyUnlimitedConnectionsEnabled ? tx("resource_connection.admin_ui.unlimited_connections", {
              numConnections: N
            }) : _$$b2[w] - N > 0 ? tx("resource_connection.admin_ui.using_num_of_connections", {
              numConnections: N,
              maxConnections: _$$b2[w]
            }) : tx("resource_connection.admin_ui.maxed_out_connections", {
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