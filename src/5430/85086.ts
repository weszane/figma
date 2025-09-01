import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { z8, bb } from "../figma_app/399472";
import { cs } from "../figma_app/740025";
import { MK, ot } from "../figma_app/599979";
import { M3 } from "../figma_app/198840";
import { my } from "../figma_app/300692";
import { vt, U, xQ, I0 } from "../figma_app/45218";
import { vR } from "../5430/309696";
export function $$h0({
  resourceId: e,
  resourceType: t,
  containerClassName: r
}) {
  let h = wA();
  let x = d4(r => t === vt.HUB_FILE ? M3(e, r.hubFiles) : my(e, r.publishedPlugins));
  let f = d4(e => e.authedActiveCommunityProfile);
  let y = d4(e => MK(e, x));
  let g = useCallback(() => {
    h(z8({
      hub_file_id: U(x) ? x.id : void 0,
      widget_id: xQ(x) ? x.id : void 0,
      plugin_id: I0(x) ? x.id : void 0
    }));
    h(F.enqueue({
      message: _$$t("community.detail_view.accepted_creator_invite")
    }));
  }, [h, x]);
  let v = useCallback(() => {
    h(bb({
      hub_file_id: U(x) ? x.id : void 0,
      widget_id: xQ(x) ? x.id : void 0,
      plugin_id: I0(x) ? x.id : void 0
    }));
    h(F.enqueue({
      message: _$$t("community.detail_view.declined_creator_invite")
    }));
  }, [h, x]);
  return !f || cs(f) || !ot.includes(y) ? null : jsx("div", {
    className: r,
    children: jsx(vR, {
      onClickAccept: g,
      onClickDecline: v,
      label: _$$t("community.detail_view.you_have_been_added_as_a_creator_of_this_resource")
    })
  });
}
export const y = $$h0;