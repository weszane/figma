import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { I } from "../figma_app/4253";
import { QQ, C } from "../figma_app/808294";
import { K2 } from "../figma_app/777551";
import { XW, qY } from "../figma_app/427318";
import { bb } from "../figma_app/399472";
import { MK, Gl } from "../figma_app/599979";
import { selectCurrentUser } from "../905/372672";
import { hasClientMeta, isWidget, isPlugin, hasMonetizedResourceMetadata } from "../figma_app/45218";
import { d as _$$d, NY, EV } from "../5430/309696";
export function $$h0({
  resource: e
}) {
  let t = useDispatch();
  let r = useSelector(e => e.authedActiveCommunityProfile);
  let h = useSelector(t => MK(t, e));
  let x = XW(e) ? qY(e) : e;
  let f = Gl.includes(h) && (e.community_publishers?.accepted || []).length > 1 && r?.primary_user_id;
  let y = useCallback(() => {
    hasClientMeta(x) ? t(bb({
      hub_file_id: x.id
    })) : isWidget(x) ? t(bb({
      widget_id: x.id
    })) : isPlugin(x) && t(bb({
      plugin_id: x.id
    }));
  }, [t, x]);
  let g = hasMonetizedResourceMetadata(x);
  let v = I(x);
  let b = selectCurrentUser();
  return jsxs(Fragment, {
    children: [f && jsx(_$$d, {
      onClick: y,
      className: "metadata_additional_actions_logged_in--link--Hgvm- text--fontPos13--xW8hS text--_fontBase--QdLsd"
    }), g && QQ(v) && jsx(NY, {
      resource: x,
      payment: v
    }), g && b && QQ(v) && C(v) && jsx(EV, {
      user: b,
      name: K2(e) || "",
      monetizedResource: x.monetized_resource_metadata
    })]
  });
}
export const G = $$h0;