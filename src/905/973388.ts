import { Ju } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { Ce, Lo } from "../905/156213";
import { fu } from "../figma_app/831799";
import { c as _$$c } from "../905/32166";
export let $$g0 = Ju(function(e) {
  let t = wA();
  let i = hS(e);
  let g = () => {
    t(Ce());
  };
  return jsx(fu, {
    name: "Project Connection Revoke Modal",
    properties: {
      inviteId: e.resourceConnectionInvite.id
    },
    children: jsx(bL, {
      manager: i,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: tx("resource_connection.revoke_modal.revoke_connection_invite")
          })
        }), jsx(nB, {
          scrolling: "none",
          children: jsx("div", {
            children: tx("resource_connection.revoke_modal.this_will_end_the_connection_request", {
              connectingPlanName: jsx("span", {
                className: _$$s.fontSemiBold.$,
                children: e.resourceConnectionInvite.connectingPlan.name
              }),
              projectName: jsx("span", {
                className: _$$s.fontSemiBold.$,
                children: e.resourceConnectionInvite.projectName
              })
            })
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: () => {
                t(Lo());
              },
              children: tx("resource_connection.request_modal.cancel")
            }), jsx($n, {
              variant: "destructive",
              onClick: () => {
                _$$c.revokeResourceConnectionInvite(e.resourceConnectionInvite.id).then(() => {
                  g();
                  t(F.enqueue({
                    message: _$$t("resource_connection.visual_bell.connection_request_revoked")
                  }));
                }).catch(e => {
                  g();
                  t(F.enqueue({
                    message: _$$t("resource_connection.visual_bell.generic_error"),
                    error: !0
                  }));
                });
              },
              children: tx("resource_connection.revoke_modal.revoke")
            })]
          })
        })]
      })
    })
  });
}, "ResourceConnectRevokeModal");
export const h = $$g0; 
