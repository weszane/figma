import { jsxs, jsx } from "react/jsx-runtime";
import { A } from "../905/389851";
import { g } from "../905/125190";
import { z } from "../905/252950";
import { getFeatureFlags } from "../905/601108";
import { renderI18nText } from "../905/303541";
import { FBuildStatusType } from "../figma_app/191312";
import { hx, lA } from "../905/447412";
export function $$u1({
  status: e,
  nodes: t
}) {
  let i = t.every(e => e.name);
  let r = function (e) {
    switch (e) {
      case FBuildStatusType.BUILD:
        return renderI18nText("dev_handoff.status.ready_for_dev");
      case FBuildStatusType.COMPLETED:
        return renderI18nText("dev_handoff.status.completed");
      default:
        return null;
    }
  }(e);
  return r ? i && getFeatureFlags().dt_workflows_version_fast_follows ? 1 === t.length ? jsxs("span", {
    children: [r, " ", jsx("span", {
      className: hx,
      children: t[0].name
    })]
  }) : jsxs("div", {
    className: lA,
    children: [r, t.map(e => jsx("span", {
      className: hx,
      children: e.name
    }, e.name))]
  }) : jsx("span", {
    children: r
  }) : null;
}
export function $$p0({
  status: e
}) {
  switch (e) {
    case FBuildStatusType.BUILD:
      return jsx(A, {});
    case FBuildStatusType.COMPLETED:
      return jsx(g, {});
    default:
      return jsx(z, {});
  }
}
export const M = $$p0;
export const e = $$u1;