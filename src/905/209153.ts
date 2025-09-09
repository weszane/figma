import { jsx, Fragment } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { s as _$$s } from "../cssbuilder/589278";
import { selectCurrentUser } from "../905/372672";
import { Ib } from "../905/129884";
import { Ro } from "../figma_app/805373";
export function $$d0(e) {
  let t = selectCurrentUser();
  let i = useSelector(e => t ? e.authedUsers.byId[t.id]?.has_content_from_other_plans : null);
  if (!t && !i) return jsx(Fragment, {});
  let d = {
    id: e.entityId,
    imgUrl: e.imgUrl,
    name: e.entityName
  };
  let c = e.hideTooltip ? "" : e.entityName;
  return jsx("div", {
    className: _$$s.inlineFlex.mr4.$,
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": c,
    "data-tooltip-timeout-delay": 500,
    "data-tooltip-max-width": 250,
    children: jsx(Ro, {
      entity: d,
      hideFallbackInitial: !1,
      size: e.size ?? 14
    })
  });
}
export const H = $$d0;