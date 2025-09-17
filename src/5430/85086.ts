import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { z8, bb } from "../figma_app/399472";
import { isOrgOrTeamExport } from "../figma_app/740025";
import { MK, ot } from "../figma_app/599979";
import { M3 } from "../figma_app/198840";
import { getPluginMetadata } from "../figma_app/300692";
import { ResourceTypeNoComment, hasClientMeta, isWidget, isPlugin } from "../figma_app/45218";
import { vR } from "../5430/309696";
export function $$h0({
  resourceId: e,
  resourceType: t,
  containerClassName: r
}) {
  let h = useDispatch();
  let x = useSelector(r => t === ResourceTypeNoComment.HUB_FILE ? M3(e, r.hubFiles) : getPluginMetadata(e, r.publishedPlugins));
  let f = useSelector(e => e.authedActiveCommunityProfile);
  let y = useSelector(e => MK(e, x));
  let g = useCallback(() => {
    h(z8({
      hub_file_id: hasClientMeta(x) ? x.id : void 0,
      widget_id: isWidget(x) ? x.id : void 0,
      plugin_id: isPlugin(x) ? x.id : void 0
    }));
    h(VisualBellActions.enqueue({
      message: getI18nString("community.detail_view.accepted_creator_invite")
    }));
  }, [h, x]);
  let v = useCallback(() => {
    h(bb({
      hub_file_id: hasClientMeta(x) ? x.id : void 0,
      widget_id: isWidget(x) ? x.id : void 0,
      plugin_id: isPlugin(x) ? x.id : void 0
    }));
    h(VisualBellActions.enqueue({
      message: getI18nString("community.detail_view.declined_creator_invite")
    }));
  }, [h, x]);
  return !f || isOrgOrTeamExport(f) || !ot.includes(y) ? null : jsx("div", {
    className: r,
    children: jsx(vR, {
      onClickAccept: g,
      onClickDecline: v,
      label: getI18nString("community.detail_view.you_have_been_added_as_a_creator_of_this_resource")
    })
  });
}
export const y = $$h0;