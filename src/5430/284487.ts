import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import o from "classnames";
import { m as _$$m } from "../5430/656485";
import { qD } from "../figma_app/471982";
import { fu } from "../figma_app/831799";
import { vt } from "../figma_app/45218";
import { a as _$$a } from "../905/329735";
import { bN, cS, Yw, Cv } from "../figma_app/795938";
import { z3, wS } from "../figma_app/583284";
var a = o;
function _({
  children: e
}) {
  return jsx(Fragment, {
    children: e
  });
}
let x = e => {
  let t = {};
  return e.filter(e => {
    let r = "model" in e ? e.model.id : e.id;
    return !t[r] && (t[r] = !0, !0);
  });
};
export function $$f0({
  resources: e,
  adtlClassName: t,
  showAsTable: r = !1,
  showMoreCallback: o,
  onIntersectionChange: f,
  viewContext: y = "feedResourceGrid",
  TileWrapper: g = _
}) {
  let v = useSelector(e => "authedActiveCommunityProfile" in e ? e.authedActiveCommunityProfile : null);
  let b = useMemo(() => x(e), [e]);
  return jsxs(fu, {
    name: y,
    children: [jsx("div", {
      className: a()(t || z3, wS),
      children: b.map((e, t) => "is_widget" in e ? e.is_widget ? jsx(g, {
        resourceId: e.id,
        resourceType: vt.WIDGET,
        resourceName: qD(e).name,
        children: jsx(bN, {
          index: t,
          resource: e,
          onIntersectionChange: t => f?.(e, t),
          subView: y
        }, `widget-${e.id}`)
      }, `widget-${e.id}`) : r ? jsx(g, {
        resourceId: e.id,
        resourceType: vt.PLUGIN,
        resourceName: qD(e).name,
        children: jsx(_$$m, {
          index: t,
          resource: e,
          onIntersectionChange: t => f?.(e, t),
          isOrgTeamBrowsing: !!(v?.team_id || v?.org_id)
        }, `pluginRow-${e.id}`)
      }, `pluginRow-${e.id}`) : jsx(g, {
        resourceId: e.id,
        resourceType: vt.PLUGIN,
        resourceName: qD(e).name,
        children: jsx(cS, {
          index: t,
          resource: e,
          onIntersectionChange: t => f?.(e, t),
          subView: y
        }, `plugin-${e.id}`)
      }, `plugin-${e.id}`) : "resources" in e ? jsx(g, {
        resourceId: e.model.id,
        resourceType: "profile",
        resourceName: e.model.name,
        children: jsx(Yw, {
          index: t,
          resource: e,
          authedActiveCommunityProfile: v
        }, `profileRow-${e.model.id}`)
      }, `profileRow-${e.model.id}`) : jsx(g, {
        resourceId: e.id,
        resourceType: vt.HUB_FILE,
        resourceName: qD(e).name,
        children: jsx(Cv, {
          index: t,
          resource: e,
          onIntersectionChange: t => f?.(e, t),
          subView: y
        }, `file-${e.id}`)
      }, `file-${e.id}`))
    }), e.length > 0 && o && jsx(_$$a, {
      callback: e => {
        e[0].isIntersecting && o();
      }
    })]
  });
}
export const J = $$f0;