import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { SceneGraphHelpers, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { sessionLocalIDToString } from "../905/871411";
import { Xr, atomStoreManager } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { KeyCodes, ModifierKeyCodes } from "../905/63728";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { cP, Xi, mj } from "../figma_app/451499";
import { fullscreenValue } from "../figma_app/455680";
import { av } from "../figma_app/316316";
import { eY } from "../figma_app/722362";
import { Zh } from "../figma_app/2590";
import { J } from "../905/980942";
import { Ay } from "../figma_app/976110";
import { Gh, d_, xP } from "../905/727576";
import { cq } from "../905/794154";
import { $J } from "../905/278499";
import { r as _$$r } from "../905/189361";
import { B } from "../905/222272";
import { y as _$$y } from "../905/236825";
import { Oq, is } from "../905/904596";
import { hg } from "../figma_app/425489";
export function $$k0({
  aiTrackingContext: e
}) {
  let t = Xr(Gh);
  let i = Xr(d_);
  let k = Xr(xP);
  _$$h(() => (i(!0), k(!0), () => {
    k(!1);
    t(e);
    fullscreenValue.triggerAction("end-magic-link", {
      canGoBackToReviewFlow: !0
    });
  }));
  let R = useDispatch();
  let N = eY();
  let {
    close
  } = cq();
  let O = useMemo(() => new cP(N), [N]);
  let D = new Xi(!0);
  let L = jsx(Oq, {
    iterateOptions: [{
      type: is.PREVIEW,
      callback: () => {
        fullscreenValue.triggerAction("toggle-inline-preview", {
          source: "magic-link"
        });
        atomStoreManager.set(hg, {
          type: "ENABLE_TARGET_FRAME_FOLLOWING"
        });
      },
      shortcuts: [{
        key: KeyCodes.SPACE,
        modifier: [ModifierKeyCodes.SHIFT]
      }]
    }, {
      type: is.KEEP_IT,
      callback: () => {
        SceneGraphHelpers.clearSelection();
        close();
      },
      isPrimary: !0
    }],
    aiTrackingContext: {
      ...e,
      iteration_view_type: $J.SUCCESS_WITH_REVIEW
    },
    recordingKey: "magic-link"
  });
  let {
    selectedNoodleIds,
    selectedInteractions
  } = Ay(J.NORMAL);
  if (selectedNoodleIds && 1 === selectedNoodleIds.length) {
    let e;
    let t = "";
    if (selectedInteractions && selectedInteractions[0]?.actions?.[0]) {
      let i = selectedInteractions[0].actions[0];
      "NAVIGATE_TO" === (e = mj(i)) && i.transitionNodeID && (t = O.format(sessionLocalIDToString(i.transitionNodeID)));
    }
    if (e) {
      let i = t ? getI18nString("proto.action_navigate_to_layer", {
        layerName: t
      }) : D.format(e);
      return jsx(_$$y, {
        children: jsxs(B, {
          gap: 4,
          justify: "space-between",
          align: "center",
          fullWidth: !0,
          children: [jsxs(B, {
            gap: 4,
            align: "center",
            children: [av(e), jsx("span", {
              className: _$$s.textBodyMediumStrong.$,
              children: i
            })]
          }), jsx(B, {
            gap: 2,
            children: jsx(_$$r, {
              onAction: () => {
                let e = selectedNoodleIds[0];
                R(Zh({
                  name: "prototype.ai_magic_link_review_reject_connector",
                  params: {
                    connectorId: JSON.stringify(e)
                  }
                }));
                permissionScopeHandler.user("delete-ai-generated-interaction", () => {
                  Fullscreen.deleteInteractions([e]);
                });
                SceneGraphHelpers.clearSelection();
              },
              shortcuts: [{
                key: KeyCodes.BACKSPACE
              }],
              variant: "secondary",
              children: jsx("span", {
                className: _$$s.textBodyMediumStrong.$,
                children: renderI18nText("magic_link.remove")
              })
            })
          })]
        })
      });
    }
  }
  return L;
}
export const x = $$k0;