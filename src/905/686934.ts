import { ServiceCategories as _$$e } from "../905/165054";
import { zl, eU } from "../figma_app/27355";
import { x1 } from "../905/714362";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { zX } from "../905/576487";
import { jO } from "../905/573265";
import { Ce } from "../905/156213";
import { l as _$$l } from "../905/618307";
import { o as _$$o, M$ } from "../figma_app/633080";
import { pz } from "../figma_app/825489";
import { MZ } from "../905/470594";
import { _9, VW, UV, Jw, WU } from "../figma_app/755939";
let f = "Cooper Template Publish Error";
let $$_0 = "cooper-template-publish";
export function $$A3(e, t) {
  _$$l({
    ...t,
    dispatch: e,
    onSuccess: () => {
      zl.set(_9, {
        state: VW.PUBLISH_TEMPLATE_COMPLETED
      });
      e(F.enqueue({
        type: $$_0,
        message: t.isPublishedTemplate ? _$$t("cooper.templates.template_updates_published") : _$$t("cooper.templates.template_published"),
        icon: zX.CHECK
      }));
      e(Ce());
    },
    onFailure: (t) => {
      let i = zl.get(UV);
      let l = Jw(i);
      x1(_$$e.PROJECT_BUZZ, f, {
        publishState: i,
        publishStep: l,
        error: t
      }, {
        reportAsSentryError: !0
      });
      zl.set(_9, {
        state: VW.PUBLISH_TEMPLATE_ERRORED
      });
      e(F.enqueue({
        type: $$_0,
        message: _$$t("cooper.templates.template_failed_published"),
        error: !0
      }));
    }
  });
}
export function $$y2(e) {
  e(F.enqueue({
    type: $$_0,
    icon: zX.EXCLAMATION,
    error: !0,
    message: _$$t("cooper.templates.template_publish_error_mark_at_least_one_ready")
  }));
}
let b = {
  onPublishSuccess: function (e) {
    let {
      dispatch
    } = e;
    let i = zl.get(UV);
    let n = zl.get(WU);
    switch (zl.set(pz, _$$o.LIBRARY), i) {
      case VW.PUBLISH_HUB_FILE_INITIATED:
        zl.set(_9, {
          state: VW.PUBLISH_HUB_FILE_COMPLETED
        });
        dispatch(F.dequeue({
          matchType: $$_0
        }));
        break;
      case VW.PUBLISH_TEMPLATE_INITIATED:
        if (!n) throw Error("Publish request params do not exist.");
        $$A3(dispatch, n);
        break;
      case VW.UNPUBLISH_HUB_FILE_INITIATED:
      case VW.UNPUBLISH_TEMPLATE_INITIATED:
        zl.set(_9, {
          state: VW.UNPUBLISH_COMPLETED
        });
    }
  },
  onPublishProgress: function (e) {
    let {
      publishType,
      dispatch
    } = e;
    let n = zl.get(UV);
    [VW.PUBLISH_TEMPLATE_INITIATED, VW.PUBLISH_HUB_FILE_INITIATED].includes(n) && dispatch(F.enqueue({
      type: $$_0,
      message: publishType === M$.UNPUBLISH ? _$$t("cooper.templates.template_unpublishing") : _$$t("cooper.templates.template_publishing"),
      icon: e.icon,
      progressKey: e.progressKey
    }));
  },
  onPublishError: function (e) {
    let {
      error,
      dispatch
    } = e;
    let c = zl.get(UV);
    let u = Jw(c);
    switch (zl.set(pz, _$$o.LIBRARY), x1(_$$e.PROJECT_BUZZ, f, {
      publishState: c,
      publishStep: u,
      error
    }, {
      reportAsSentryError: !0
    }), c) {
      case VW.PUBLISH_HUB_FILE_INITIATED:
        zl.set(_9, {
          state: VW.PUBLISH_HUB_FILE_ERRORED
        });
        break;
      case VW.PUBLISH_TEMPLATE_INITIATED:
        zl.set(_9, {
          state: VW.PUBLISH_TEMPLATE_ERRORED
        });
        break;
      case VW.UNPUBLISH_TEMPLATE_INITIATED:
      case VW.UNPUBLISH_HUB_FILE_INITIATED:
        zl.set(_9, {
          state: VW.UNPUBLISH_TEMPLATE_ERRORED
        });
        return;
    }
    switch (error) {
      case jO.Offline:
        dispatch(F.enqueue({
          type: $$_0,
          icon: zX.EXCLAMATION,
          error: !0,
          message: _$$t("cooper.templates.template_publish_error_offline")
        }));
        break;
      case jO.NonS3PresignedPost:
        MZ(dispatch, _$$t("check_network_compatibility.error_bell.library_publish.message"));
        break;
      case jO.NoItemsToPublish:
        dispatch(F.enqueue({
          type: $$_0,
          icon: zX.EXCLAMATION,
          error: !0,
          message: _$$t("cooper.templates.template_publish_error_empty")
        }));
        break;
      case jO.ErrorCode:
        dispatch(413 === e.errorCode ? F.enqueue({
          type: $$_0,
          error: !0,
          message: _$$t("cooper.templates.template_publish_error_page_name_too_long")
        }) : F.enqueue({
          type: $$_0,
          error: !0,
          message: _$$t("cooper.templates.template_publish_error_something_went_wrong")
        }));
        break;
      default:
        dispatch(F.enqueue({
          type: $$_0,
          error: !0,
          message: _$$t("cooper.templates.template_publish_error_something_went_wrong")
        }));
    }
  }
};
let v = eU(void 0);
let $$I1 = eU((e) => e(v) ?? b, (e, t, i) => {
  if (i && e(v)) throw Error("Cooper library publish callbacks already overriden");
  t(v, i);
  return i ?? b;
});
export function $$E4() {
  return zl.get($$I1);
}
export const Ao = $$_0;
export const BT = $$I1;
export const Bj = $$y2;
export const _I = $$A3;
export const sG = $$E4;