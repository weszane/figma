import { jsx } from "react/jsx-runtime";
import { U1 } from "../figma_app/343967";
import { NodePropertyCategory } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { k9 } from "../905/19536";
import o from "classnames";
import { getI18nString } from "../905/303541";
import { CA } from "../figma_app/327588";
import { e as _$$e } from "../1528/93111";
import { q } from "../figma_app/590592";
import { Gt } from "../905/275640";
import { o3, nt } from "../905/226610";
import { m as _$$m } from "../905/99004";
import { aZ } from "../figma_app/481279";
import { KE, IV, tM, Ph } from "../figma_app/386160";
var d = o;
export function $$_0(e) {
  let t = e.target;
  if (t) {
    let s = t.tagName;
    let r = t.type;
    s && "INPUT" === s.toUpperCase() && r && "TEXT" === r.toUpperCase() || t.isContentEditable || e.preventDefault();
  }
}
export function $$b1({
  children: e,
  showRightSidebarPill: t
}) {
  let s = _$$e();
  let i = U1();
  let a = q();
  let o = CA();
  let m = o3(nt.newResizablePanel);
  return jsx(_$$m, {
    role: "region",
    "aria-label": getI18nString("fullscreen_actions.right_sidebar_label"),
    children: jsx("div", {
      ref: i,
      className: d()(KE, {
        [IV]: getFeatureFlags().properties_panel_resize_lag_fix && !m,
        [tM]: t,
        [Ph]: !a && !s || o
      }),
      children: e
    })
  });
}
export function $$C2() {
  let e = Gt("numSelectedByType");
  return k9(() => function (e) {
    if (e) return aZ(NodePropertyCategory.FILL, e);
  }(e), [e]);
}
export const GY = $$_0;
export const _w = $$b1;
export const qh = $$C2;