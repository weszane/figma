import { jsx, jsxs } from "react/jsx-runtime";
import { b, bL, mc, q7 } from "../figma_app/860955";
import { customHistory } from "../905/612521";
import { v$ } from "../figma_app/455722";
import { gM } from "../5430/823351";
import { useRouteStateInstance } from "../figma_app/321395";
import { ResourceHubCategoryRoute } from "../figma_app/805898";
import { ButtonPrimitive } from "../905/632989";
import { r } from "../905/571562";
import m from "classnames";
import { x6 } from "../5430/478538";
var _ = m;
function h({
  text: e,
  getTriggerProps: t
}) {
  return jsx(ButtonPrimitive, {
    className: _()(x6, "feed_filter_menu_button--filterButton--uqzcw", "feed_filter_menu_button--outline--Ez7yZ"),
    ...t(),
    children: jsxs("span", {
      className: "feed_filter_menu_button--filterButtonContent--7mAcr",
      children: [e, jsx(r, {})]
    })
  });
}
export function $$x0({
  context: e,
  defaultOption: t,
  selectedOption: r,
  options: d,
  searchParamUpdate: u,
  onOptionSelect: m,
  onUpdate: _
}) {
  let {
    getTriggerProps,
    manager
  } = b();
  let f = useRouteStateInstance(ResourceHubCategoryRoute);
  let y = v$();
  let g = e === gM.CATEGORY ? f : e === gM.SEARCH ? y : null;
  return g || _ ? jsxs(bL, {
    manager,
    children: [jsx(h, {
      text: r ? d.find(e => e.key === r)?.label ?? t : t,
      getTriggerProps
    }), jsx(mc, {
      children: d.map(e => jsx(q7, {
        onClick: () => {
          _ ? _(e.key) : g && customHistory.replace(g.copyWith({}, u(e.key)).href);
          m && m(e.key, r);
        },
        children: e.label
      }, e.key))
    })]
  }) : null;
}
export const n = $$x0;