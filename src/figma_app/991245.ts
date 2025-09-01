import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { zl } from "../figma_app/27355";
import { az } from "../905/449184";
import { S8, O_ } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { WB } from "../905/761735";
import { Ay as _$$Ay } from "../figma_app/778880";
import { $D } from "../905/11";
import { sf } from "../905/929976";
import { d as _$$d } from "../905/531325";
import { sr } from "../905/894881";
import { sL } from "../figma_app/50271";
import { vY, cz } from "../905/579526";
let E = new Map();
let y = new vY();
export function $$b1(e, t, r) {
  var n;
  var i;
  n = {
    id: r.id,
    title: r.message.title,
    subtitle: r.message.subtitle,
    body: r.message.body,
    thumbnailUrl: r.message.thumbnailUrl,
    silent: !1,
    deliveryChannel: "lg"
  };
  i = S(e, r.id, r.openUrl || null, t);
  T(n.id, i);
  S8 && (_$$Ay.windows && n.title && n.subtitle && (n.title = n.title + " \u2022 " + n.subtitle), S8.sendNotification(n));
}
function T(e, t) {
  E.set(e, t);
  setTimeout(() => E.$$delete(e), 6048e5);
}
async function I(e) {
  let t = e.match(/link_uuid=(figlink_[\w-]+)/);
  if (t) {
    let r = t[1];
    try {
      let t = await fetch(`/email/link_redirect?link_uuid=${r}&response=true`);
      if (t.ok) {
        let r = await t.json();
        e = r.meta?.url;
      }
    } catch (e) {
      console.error("Error decoding revokable link:", e);
    }
  }
  return e;
}
function S(e, t, r, n) {
  return () => {
    sr.recordNotificationClicked({
      id: t,
      currentView: n,
      medium: "desktoppush"
    }).then(async t => {
      if (r?.includes("/email/link_redirect") && (r = await I(r)), S8) {
        let t = sL(r || "") || void 0;
        e(sf({
          view: "feed",
          quickReplyInfo: t
        }));
        S8.toggleTrayWindow(!0);
      } else r && Ay.redirect(r);
    });
  };
}
S8?.setListener({
  name: "notificationClicked",
  listener(e) {
    E.get(e)?.();
    E.$$delete(e);
  }
});
let v = null;
function A(e, t) {
  if (e) {
    v?.();
    v = null;
  } else if (t) v = cz(t);else throw Error("Could not subscribe to PersistentUserNotificationBellData as BellFeed LiveGraphClient was null.");
}
let x = O_(10);
function N() {
  let e = getInitialOptions().user_data?.id;
  if ((getFeatureFlags().desktop_fcm_notifications || getFeatureFlags().desktop_fcm_shadow_mode) && x && x.desktopAppVersion && e) {
    let t = x.getFCMToken(e);
    let r = x.desktopAppVersion;
    t && (sr.sendDesktopToken({
      firebaseToken: t,
      version: r
    }), az.trackDefinedEvent("notification.firebase_token_registered", {}));
  }
}
export function $$C0(e) {
  let t = WB();
  S8?.setListener({
    name: "updateRealtimeTokens",
    listener(e) {
      y.updateSubscriptions(e, t);
    }
  });
  S8?.setListener({
    name: "updateIsLivegraphClientEnabled",
    listener(e) {
      e !== zl.get(_$$d) && (A(e, t), zl.set(_$$d, e));
    }
  });
  let r = O_(9);
  if (r) {
    let e = r.getIsLivegraphClientEnabled();
    zl.set(_$$d, e);
    A(e, t);
  }
  if (S8?.setListener({
    name: "pushNotificationReceived",
    listener(t, r, n) {
      !function (e, t, r, n) {
        let i = S(e, t, r, n);
        T(t, i);
      }(e.dispatch, t.id, n, r);
    }
  }), S8?.setListener({
    name: "notificationServiceStarted",
    listener(e) {
      N();
    }
  }), N(), S8) {
    let e = S8.getRealtimeTokens();
    if (null == e && ($D(_$$e.DESKTOP, Error(`initDesktopBellFeedBindings: got ${e} from getRealtimeTokens() on first try`), {
      level: "warning"
    }), e = S8.getRealtimeTokens()), null == e) {
      $D(_$$e.DESKTOP, Error(`initDesktopBellFeedBindings: got ${e} from getRealtimeTokens() on second try`));
      return;
    }
    y.updateSubscriptions(e, t);
  }
}
export const IK = $$C0;
export const gY = $$b1;