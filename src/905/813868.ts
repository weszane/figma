import { glU } from "../figma_app/763686";
import { getSceneGraphInstance } from "../905/830071";
import { getFeatureFlags } from "../905/601108";
import { isInteractionPathCheck } from "../figma_app/897289";
import { Point } from "../905/736624";
import { getI18nString } from "../905/303541";
import { Q7 } from "../905/15667";
import { b as _$$b } from "../905/985254";
import { Y5 } from "../figma_app/455680";
import { $$ } from "../figma_app/62612";
import { F1 } from "../figma_app/12796";
import { fR, T as _$$T } from "../figma_app/300692";
import { R as _$$R } from "../figma_app/612938";
import { o8, Fr, r_ } from "../905/622391";
import { rJ } from "../905/486749";
import { Ym } from "../905/571565";
import { k as _$$k2 } from "../figma_app/644304";
import { x as _$$x } from "../905/239551";
import { z } from "../905/223332";
export function $$I0({
  pluginID: e,
  widgetName: t,
  pluginVersionID: i,
  position: I,
  basicOverrides: E,
  mapOverrides: x,
  widgetAction: S,
  parentNodeID: w,
  triggeredFrom: C,
  shouldPositionWidget: T = !0,
  indexInParent: k,
  isOnInternalCanvas: R
}) {
  if (!o8()) {
    fR(getI18nString("widgets.cannot_insert_widget_while_logged_out"));
    return {
      widgetNodeID: void 0,
      widgetRunPromise: void 0
    };
  }
  if (getFeatureFlags().ext_require_appropriate_seat && !Fr()) {
    _$$R.instance.handleUpgrade(Q7.RUN_WIDGET);
    return {
      widgetNodeID: void 0,
      widgetRunPromise: void 0
    };
  }
  let N = F1();
  if (!N.canRun) {
    fR(N.message);
    return {
      widgetNodeID: void 0,
      widgetRunPromise: void 0
    };
  }
  "universal-insert" === C && "figma" === _$$T() && Y5.dispatch(_$$b({
    seen_widget_insert_onboarding_modal: !0
  }));
  "undo_widget_update" !== S && Ym({
    name: t,
    isInsert: !0,
    cancelCallback: () => {},
    vmType: r_()
  });
  z.startInteraction(e, "insert");
  let P = glU.createWidget(e, t, i ?? "", w ?? "", k ?? null, R ?? null);
  if (!isInteractionPathCheck() && T && function (e, t) {
    let i = getSceneGraphInstance().get(e);
    if (i) {
      if (!t) {
        let e = 0;
        Y5.showUI() && (e = document.getElementById(_$$k2)?.clientWidth ?? 0);
        let n = Y5.getViewportInfo();
        let r = $$(n, {
          x: n.x + n.width / 2 - e,
          y: n.y + n.height / 2
        });
        let a = i.size;
        t = new Point(r.x - a.x / 2, r.y - a.y / 2);
      }
      glU.positionAndParentWidget(e, t.x, t.y);
    }
  }(P, I), E || x) {
    let e = getSceneGraphInstance().get(P);
    rJ(e, E, x);
  }
  let O = _$$x.mountWidget(e, P, "insert", I, S, C);
  return {
    widgetNodeID: P,
    widgetRunPromise: O
  };
}
getFeatureFlags().widgets_dev_window_bindings && (window.createWidget = $$I0);
export const j = $$I0;