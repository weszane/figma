import { Wp } from "../vendor/703739";
import { dG, xD, gf } from "../vendor/395562";
import { desktopAPIInstance, bellFeedAPIInstance, isFigmaDesktopUA } from "../figma_app/876459";
import { getInitialOptions } from "../figma_app/169182";
import { isAnyMobile } from "../figma_app/778880";
import { sr } from "../905/894881";
import { analyticsEventManager } from "../905/449184";
import { iX, Ke, _F, Jr } from "../905/415545";
class c {
  static trackNotificationReceived(e) {
    analyticsEventManager.trackDefinedEvent("notification.browser_notification_received", {
      user_notification_id: e.id,
      user_notification_member_id: e.member_id,
      user_notification_batching_category: e.batching_category,
      user_notification_is_actionable: e.is_actionable,
      user_notification_area: e.area,
      user_notification_view_id: e.view_id,
      user_notification_type: e.type,
      is_background_push: !1
    });
  }
  static trackPermissionRequest(e) {
    analyticsEventManager.trackDefinedEvent("notification.browser_notification_permission_request", {
      request_origin: e
    });
  }
  static trackTokenRegistered(e) {
    analyticsEventManager.trackDefinedEvent("notification.firebase_token_registered", {
      registration_origin: e
    });
  }
  static trackTokenBlocked(e) {
    analyticsEventManager.trackDefinedEvent("notification.firebase_token_registration_blocked", {
      status: e
    });
  }
  static trackTokenFailed() {
    analyticsEventManager.trackDefinedEvent("notification.firebase_token_registration_failed", {});
  }
  static trackFirebaseError(e) {
    analyticsEventManager.trackDefinedEvent("notification.browser_notification_firebase_error", {
      error_message: e
    });
  }
}
export class $$p0 {
  constructor() {
    this.permissionRequestMade = !1;
    let e = getInitialOptions().firebase_cloud_messaging_browser_notifications;
    this.config = {
      apiKey: e?.api_key,
      authDomain: e?.auth_domain,
      projectId: e?.project_id,
      storageBucket: e?.storage_bucket,
      messagingSenderId: e?.messaging_sender_id,
      appId: e?.app_id
    };
    this.vapidKey = e?.vapid_id;
    let t = Wp(this.config);
    this.messaging = dG(t);
    try {
      this.registerOnMessageListener();
      this.registerVisibilityChangeListener();
      this.updateServiceWorker();
    } catch (e) {
      c.trackFirebaseError(e instanceof Error ? e.message : "Unknown error");
    }
  }
  static getInstance() {
    $$p0.instance ??= new $$p0();
    return $$p0.instance;
  }
  async registerServiceWorker() {
    this.serviceWorkerRegistration = await navigator.serviceWorker.register(Fig.firebaseMessagingServiceWorkerURL, {
      type: "module"
    });
    return Promise.resolve(this.serviceWorkerRegistration);
  }
  async getServiceWorkerRegistration() {
    this.serviceWorkerRegistration || (this.serviceWorkerRegistration = await navigator.serviceWorker.getRegistration(Fig.firebaseMessagingServiceWorkerURL));
    return Promise.resolve(this.serviceWorkerRegistration);
  }
  registerOnMessageListener() {
    this.onMessageUnsubscribe = xD(this.messaging, async e => {
      if (!e.data || !e.data.title || !e.data.body) return;
      let t = await this.getServiceWorkerRegistration();
      let i = e.data;
      c.trackNotificationReceived(i);
      let {
        notificationTitle,
        notificationOptions
      } = function ({
        notificationPayload: e,
        isBackgroundPush: t,
        additionalOptions: i
      }) {
        return {
          notificationTitle: e.title,
          notificationOptions: {
            body: e.body,
            data: {
              url: e.open_url,
              user_id: e.user_id,
              notification_id: e.id,
              notification_member_id: e.member_id,
              notification_batching_category: e.batching_category,
              notification_is_actionable: e.is_actionable,
              notification_area: e.area,
              notification_view_id: e.view_id,
              notification_type: e.type,
              is_background_push: t
            },
            ...i
          }
        };
      }({
        notificationPayload: i,
        isBackgroundPush: !1,
        additionalOptions: {
          tag: e.messageId
        }
      });
      t?.showNotification(notificationTitle, notificationOptions);
    });
  }
  registerVisibilityChangeListener() {
    document.addEventListener("visibilitychange", e => {
      "visible" === document.visibilityState ? this.onMessageUnsubscribe || this.registerOnMessageListener() : (this.onMessageUnsubscribe?.(), this.onMessageUnsubscribe = void 0);
    }, !1);
  }
  async updateServiceWorker() {
    let e = await this.getServiceWorkerRegistration();
    let t = await navigator.permissions.query({
      name: "notifications"
    });
    let i = await this.updateServiceWorkerOnPermissionChange(t);
    let n = !1;
    "granted" !== t.state || i || e?.active?.scriptURL === Fig.firebaseMessagingServiceWorkerURL || (await this.unregisterServiceWorker(), await this.registerServiceWorkerWhenPermissionGranted(), n = !0);
    return i || n;
  }
  async updateServiceWorkerOnPermissionChange(e) {
    return "granted" !== e.state ? (this.unregisterServiceWorker(), !0) : (await this.getServiceWorkerRegistration()) ? (this.sendFirebaseTokenToServer(), !1) : (this.registerServiceWorkerWhenPermissionGranted(), !0);
  }
  async unregisterServiceWorker() {
    let e = await this.getServiceWorkerRegistration();
    e?.unregister();
  }
  async sendFirebaseTokenToServer() {
    let e = await this.getServiceWorkerRegistration();
    let t = await gf(this.messaging, {
      vapidKey: this.vapidKey,
      serviceWorkerRegistration: e
    });
    sr.sendFirebaseToken({
      firebaseToken: t
    });
    c.trackTokenRegistered(iX.INTERNAL);
  }
  async registerServiceWorkerWhenPermissionGranted() {
    await this.registerServiceWorker();
    this.sendFirebaseTokenToServer();
  }
  async shouldRequestPermission() {
    try {
      let [e, t] = await Promise.all([navigator.permissions.query({
        name: "notifications"
      }), this.getServiceWorkerRegistration()]);
      if ("granted" === e.state) {
        t?.update();
        let e = !!t;
        e && this.sendFirebaseTokenToServer();
        return !e;
      }
      if ("denied" === e.state) return !1;
      return !0;
    } catch (e) {
      return !1;
    }
  }
  async requestPermission(e) {
    c.trackPermissionRequest(e);
    let t = await Notification.requestPermission();
    if ("granted" === t) {
      let e = await this.registerServiceWorker();
      let t = await gf(this.messaging, {
        vapidKey: this.vapidKey,
        serviceWorkerRegistration: e
      });
      return {
        status: Ke,
        token: t
      };
    }
    return "denied" === t ? {
      status: _F
    } : {
      status: Jr
    };
  }
  static isFirebaseInitialized() {
    return !!$$p0.instance;
  }
  static createInstance() {
    return $$p0.isBrowserNotificationSupported() ? this.getInstance() : null;
  }
  static isUserOnMobileDevice() {
    return isAnyMobile;
  }
  static isBrowserNotificationSupported() {
    let e = "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window;
    return !desktopAPIInstance && !bellFeedAPIInstance && !isFigmaDesktopUA && !$$p0.isUserOnMobileDevice() && e;
  }
  static getPermissionPreference() {
    return navigator.permissions.query({
      name: "notifications"
    });
  }
  static async sendTokenToServer() {
    let e = $$p0.createInstance();
    if (!e) return;
    let t = await e.getServiceWorkerRegistration();
    let i = await $$p0.getPermissionPreference();
    t && "granted" === i.state && e.sendFirebaseTokenToServer();
  }
  static async requestPushNotifications(e) {
    if (!$$p0.isBrowserNotificationSupported()) return _F;
    let t = $$p0.getInstance();
    if ((!(await t.shouldRequestPermission()) || t.permissionRequestMade) && e !== iX.SETTINGS) return _F;
    t.permissionRequestMade = !0;
    try {
      let i = await t.requestPermission(e);
      if (i.status === Ke) {
        sr.sendFirebaseToken({
          firebaseToken: i.token
        });
        c.trackTokenRegistered(e);
        return Ke;
      }
      c.trackTokenBlocked(i.status);
      return _F;
    } catch (e) {
      c.trackFirebaseError(e instanceof Error ? e.message : "Unknown error");
      c.trackTokenFailed();
    }
    return Jr;
  }
}
export const d = $$p0;