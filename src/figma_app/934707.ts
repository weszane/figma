import { DesignGraphElements } from "../figma_app/763686";
import { NC } from "../905/17179";
import { analyticsEventManager } from "../905/449184";
import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { _ as _$$_ } from "../905/170564";
import { Q } from "../905/463586";
import { F } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { d1 } from "../905/766303";
import { fullscreenValue } from "../figma_app/455680";
import { h as _$$h } from "../905/438683";
import { UU } from "../figma_app/770088";
let g = e => {
  let t = e.getState();
  e.dispatch(UU({
    force: !0
  }));
  t.mirror.appModel.showUi || fullscreenValue.triggerAction("toggle-ui");
  t.mirror.appModel.currentTool !== DesignGraphElements.COMMENTS && fullscreenValue.triggerAction("set-tool-comments");
  requestAnimationFrame(() => {
    _$$h();
  });
};
let f = (e, t, r, n) => {
  analyticsEventManager.trackDefinedMetric("notification.catfile_confirmation_toast_shown", {
    user_id: e,
    file_key: t,
    experiment_name: r,
    toast_type: n
  });
};
let $$E0 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = d1(r);
  if (n && t.fileKey === n.key && r?.user?.id === t.userId) {
    let r = {
      text: getI18nString("comments.manage"),
      action: () => g(e)
    };
    f(t.userId, t.fileKey, t.experimentName, "manage");
    let n = "all" === t.preference ? getI18nString("comments.you_will_be_notified_about_file_comments") : getI18nString("comments.you_will_be_notified_about_replies_and_at_mentions");
    e.dispatch(F.enqueue({
      message: n,
      type: "comments-opted-in",
      button: r,
      onDismiss: () => {},
      timeoutOverride: 15e3
    }));
  }
});
let y = (e, t) => {
  let r;
  "exp_notification_catfile" === t ? r = `/api/user_notifications/catfile_optin/${e}` : "exp_notification_catfic" === t && (r = `/api/user_notifications/catfic_optin/${e}`);
  return e => {
    XHR.post(r, {
      opted_in: e
    });
  };
};
let $$b3 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = d1(r);
  if (n && t.fileKey === n.key && r?.user?.id === t.userId) {
    let r = y(t.fileKey, t.experimentName);
    let n = {
      text: getI18nString("comments.turn_on"),
      action: () => {
        r(!0);
      }
    };
    f(t.userId, t.fileKey, t.experimentName, t.toastType);
    setTimeout(() => {
      e.dispatch(F.enqueue({
        message: getI18nString("comments.get_notified_about_all_comments_prompt"),
        type: "get_notified_about_all_comments_prompt",
        button: n,
        onDismiss: () => r(!1),
        timeoutOverride: 15e3
      }));
    }, 5e3);
  }
});
let $$T2 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = d1(r);
  if (n && t.fileKey === n.key && r?.user?.id === t.userId) {
    let r = y(t.fileKey, t.experimentName);
    f(t.userId, t.fileKey, t.experimentName, t.toastType);
    setTimeout(() => {
      e.dispatch(Q.enqueue({
        notification: {
          type: _$$_.SUBSCRIBED_TO_COMMENT_NOTIFICATIONS,
          message: getI18nString("comments.get_notified_about_all_comments_prompt"),
          acceptCallback: () => r(!0),
          dismissCallback: () => r(!1)
        }
      }));
    }, 5e3);
  }
});
let $$I4 = createOptimistThunk((e, t) => {
  let r = e.getState();
  let n = d1(r);
  if (n && t.fileKey === n.key && r?.user?.id === t.userId) {
    let t = {
      text: getI18nString("comments.manage"),
      action: () => g(e)
    };
    let r = getI18nString("dev_mode.you_will_be_notified_about_status_changes");
    e.dispatch(F.enqueue({
      message: r,
      type: "dev-mode-opted-in",
      button: t,
      onDismiss: () => {},
      timeoutOverride: 15e3
    }));
  }
});
let $$S1 = NC("USER_NOTIFICATIONS_SET_COMMUNITY_PROFILE_BELL");
export const EJ = $$E0;
export const Q$ = $$S1;
export const ZI = $$T2;
export const hU = $$b3;
export const jK = $$I4;