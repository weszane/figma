import { debugState } from "../905/407919";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { j } from "../figma_app/172303";
import { zX, XU } from "../905/576487";
import { lW } from "../figma_app/11182";
import { RT, uw } from "../figma_app/171413";
var $$c2 = ((e) => (e.PublishingSuccess = "sites.PublishingSuccess", e.PublishingFailed = "sites.PublishingFailed", e))($$c2 || {});
export function $$u3({
  onDismiss: e,
  isFigmake: t
}) {
  debugState.dispatch(F.dequeue({
    matchType: "sites.PublishingInProgress"
  }));
  j("sites.PublishingFailed", !0, {
    message: t ? _$$t("figmake.publish.unsuccessful_publish_bell") : _$$t("sites.toolbar.publish_modal.unsuccessful_publish_bell")
  }, void 0, zX.EXCLAMATION, void 0, e);
}
export function $$p1({
  domainInfo: e,
  onDismiss: t,
  isFigmake: r
}) {
  let c = RT(e);
  let u = uw(e);
  debugState.dispatch(F.dequeue({
    matchType: "sites.PublishingInProgress"
  }));
  j("sites.PublishingSuccess", !1, {
    i18n: {
      id: r ? XU.FIGMAKE_PUBLISH_SUCCESS_BELL_ID : XU.SITES_PUBLISH_SUCCESS_BELL_ID,
      params: {
        text: c
      }
    }
  }, void 0, zX.CHECK, {
    text: _$$t("sites.toolbar.publish_modal.copy_to_clipboard"),
    action: () => {
      debugState.dispatch(lW({
        stringToCopy: u,
        ignoreLineBreaks: !1
      }));
    }
  }, t);
}
export function $$_0(e) {
  debugState.dispatch(F.enqueue({
    message: e ? _$$t("figmake.publish.failed_to_unpublish_site") : _$$t("sites.toolbar.publish_modal.failed_to_unpublish_site"),
    error: !0
  }));
}
export const Hh = $$_0;
export const TI = $$p1;
export const V7 = $$c2;
export const uV = $$u3;