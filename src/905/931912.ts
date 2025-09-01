import n from "lodash-es/mapValues";
import a from "../vendor/149674";
import { sx, pp } from "../905/449184";
import { k } from "../905/651849";
import { getInitialOptions } from "../figma_app/169182";
import { Br } from "../3973/348894";
import { G } from "../figma_app/714966";
import { secondaryModalZ } from "../figma_app/786175";
var r = n;
var s = a;
export let $$m0 = {
  sendMessage() { },
  listenForMatchingMessage: e => Promise.resolve({
    type: e,
    content: {}
  }),
  setCallbacks() { },
  tearDown() { }
};
function h(e, t) {
  return "string" == typeof e && (!t || t.test(e)) ? Date.parse(e) : NaN;
}
let g = {
  created_at: ({
    user: e
  }) => {
    let t = h(e?.created_at);
    return Number.isNaN(t) ? e?.created_at : t;
  },
  signup_date: ({
    userAnalyticsData: e
  }) => {
    let t = h(e?.signup_date, /^\d{4}-\d{2}-\d{2}$/);
    return Number.isNaN(t) ? e?.signup_date : t;
  },
  email_type: ({
    userAnalyticsData: e
  }) => e?.email_type,
  land_product: ({
    userAnalyticsData: e
  }) => e?.land_product,
  generation: ({
    userAnalyticsData: e
  }) => e?.generation,
  paid_status: ({
    userAnalyticsData: e
  }) => e?.paid_status,
  education_user: ({
    userAnalyticsData: e
  }) => e?.education_user,
  design_max_paid_role: ({
    userAnalyticsData: e
  }) => e?.design_max_paid_role,
  job_title: ({
    userAnalyticsData: e
  }) => e?.job_title,
  num_edit_days_30_day: ({
    userAnalyticsData: e
  }) => e?.num_edit_days_30_day,
  num_edit_days_60_day: ({
    userAnalyticsData: e
  }) => e?.num_edit_days_60_day,
  num_edit_days_90_day: ({
    userAnalyticsData: e
  }) => e?.num_edit_days_90_day,
  num_edits_30_day: ({
    userAnalyticsData: e
  }) => e?.num_edits_30_day,
  num_edits_60_day: ({
    userAnalyticsData: e
  }) => e?.num_edits_60_day,
  num_edits_90_day: ({
    userAnalyticsData: e
  }) => e?.num_edits_90_day,
  num_files_created: ({
    userAnalyticsData: e
  }) => e?.num_files_created,
  work_location: ({
    userAnalyticsData: e
  }) => e?.work_location_no_answer ? "no_answer" : e?.is_company ? "company" : e?.is_agency ? "agency" : e?.is_freelancer ? "freelancer" : e?.is_school ? "school" : void 0,
  how_do_you_plan_to_use_figma: ({
    userAnalyticsData: e
  }) => e?.how_plan_use_figma_no_answer ? "no_answer" : e?.is_work ? "work" : e?.is_using_it_for_school ? "school" : e?.is_personal_project ? "personal_project" : e?.is_learning_design ? "learning_design" : e?.is_other ? "other" : void 0,
  org_size: ({
    userAnalyticsData: e
  }) => e?.is_org_size_no_answer ? "no_answer" : e?.is_org_size_just_me ? "just_me" : e?.is_org_size_2_to_100 ? "2_to_100" : e?.is_org_size_101_to_500 ? "101_to_500" : e?.is_org_size_501_to_5000 ? "501_to_5000" : e?.is_org_size_over_5000 ? "over_5000" : void 0,
  num_admin_pro_teams: ({
    userAnalyticsData: e
  }) => e?.num_admin_pro_teams,
  pro_team_at_least_one_billing_cycle: ({
    userAnalyticsData: e
  }) => e?.pro_team_at_least_one_billing_cycle,
  pro_admin_notification_email_enabled: ({
    userAnalyticsData: e
  }) => e?.pro_admin_notification_email_enabled,
  num_admin_orgs: ({
    userAnalyticsData: e
  }) => e?.num_admin_orgs,
  org_admin_notification_email_enabled: ({
    userAnalyticsData: e
  }) => e?.org_admin_notification_email_enabled,
  is_design_power_user: ({
    userAnalyticsData: e
  }) => e?.is_design_power_user,
  max_plan_tier: ({
    userAnalyticsData: e
  }) => e?.max_plan_tier,
  max_plan_tier_seat_type: ({
    userAnalyticsData: e
  }) => e?.max_plan_tier_seat_type,
  user_age_bucket_name: ({
    userAnalyticsData: e
  }) => e?.user_age_bucket_name
};
let f = class e {
  static sendMessage(t) {
    if (!e.iframe?.contentWindow || !e.iframeUrl) {
      k.warn("[Sprigma] Skipping sending because sandbox iframe is not ready:", t);
      return;
    }
    if (!e.isSDKReady) {
      k.debug("[Sprigma] Sprig SDK is not yet ready, sending message to queue");
      e.messageQueue.push(t);
      k.debug("[Sprigma] Currently queued messages:", [...e.messageQueue]);
      return;
    }
    k.debug(`[Sprigma] Sending message to sandbox at ${e.iframeUrl}:`, t);
    e.iframe.contentWindow.postMessage(t, e.iframeUrl);
  }
  static updatePageUrl(t) {
    t !== e.pageUrl && (k.debug(`[Sprigma] Setting 'pageUrl' to ${t}`), e.pageUrl = t, e.sendMessage({
      type: G.Call,
      content: {
        args: ["trackPageView", t]
      }
    }));
  }
  static setUserData(t, i) {
    let n = t?.id;
    if (!n) return;
    k.debug(`[Sprigma] Setting user ID to ${n}`);
    e.sendMessage({
      type: G.Call,
      content: {
        args: ["setUserId", n]
      }
    });
    let a = s()(r()(g, e => e({
      user: t,
      userAnalyticsData: i
    })), e => void 0 !== e);
    Object.keys(a).length > 0 && (k.debug("[Sprigma] Syncing the following attributes to Sprig:", Object.keys(a)), e.sendMessage({
      type: G.Call,
      content: {
        args: ["setAttributes", a]
      }
    }));
  }
  static processQueuedMessages() {
    let t;
    if (e.messageQueue.length) for (k.debug("[Sprigma] Processing queued messages:", [...e.messageQueue]); t = e.messageQueue.shift();) e.sendMessage(t);
  }
  static listenForMatchingMessage(t, i, n) {
    return new Promise((r, a) => {
      let s = void 0 !== n && setTimeout(() => {
        window.removeEventListener("message", o);
        a(Error("Timed out waiting for matching message"));
      }, n);
      let o = n => {
        if (n.data?.type !== t) return;
        let a = n.data;
        if (n.origin !== e.iframeUrl) {
          k.warn(`[Sprigma] Ignoring message from unexpected origin ${n.origin}`);
          return;
        }
        (!i || i(a)) && (k.debug(`[Sprigma] Received matching message from sandbox at ${n.origin}:`, a), window.removeEventListener("message", o), s && clearTimeout(s), r(a));
      };
      window.addEventListener("message", o);
    });
  }
  static onWindowResize() {
    k.debug(`[Sprigma] Sending window dimensions to sandbox: height=${window.innerHeight} width=${window.innerWidth}`);
    e.sendMessage({
      type: G.Call,
      content: {
        args: ["setWindowDimensions", window.innerWidth, window.innerHeight]
      }
    });
    e.windowWidth = window.innerWidth;
    e.windowHeight = window.innerHeight;
    e.updateScreenAreasToAvoid();
  }
  static setIframeDimensions({
    height: t,
    width: i
  }) {
    e.iframe && (k.debug(`[Sprigma] Updating sandbox iframe dimensions: height=${t ?? "unchanged"} width=${i ?? "unchanged"}`), void 0 !== t && (e.iframe.height = t.toString()), void 0 !== i && (e.iframe.width = i.toString()), e.updateScreenAreasToAvoid());
  }
  static setScreenAreasToAvoid(t) {
    e.screenAreasToAvoid = t;
    e.iframe && e.updateScreenAreasToAvoid();
  }
  static updateScreenAreasToAvoid() {
    let t;
    if (!e.iframe) return;
    let i = parseInt(e.iframe.width, 10);
    let n = parseInt(e.iframe.height, 10);
    if (0 === e.screenAreasToAvoid.length || 0 === i || 0 === n) {
      e.setDefaultIframePosition();
      return;
    }
    let r = {
      x: e.windowWidth - i,
      y: e.windowHeight - n,
      width: i,
      height: n
    };
    let a = 0;
    let s = 0;
    do for (let i of (t = !1, e.screenAreasToAvoid)) {
      let {
        rect,
        direction
      } = i;
      let o = _(r, rect);
      void 0 !== o && (t = !0, "up" === direction ? (a += o.height, r.y -= o.height) : "left" === direction && (s += o.width, r.x -= o.width));
    } while (t);
    if (!this.isWithinWindowBounds(r)) {
      e.setDefaultIframePosition();
      return;
    }
    let o = e.iframe.style;
    o.bottom = `${a}px`;
    o.right = `${s}px`;
  }
  static setDefaultIframePosition() {
    if (!e.iframe) return;
    let t = e.iframe.style;
    t.bottom = "0";
    t.right = "0";
  }
  static isWithinWindowBounds(t) {
    return t.x >= 0 && t.y >= 0 && t.x + t.width <= e.windowWidth && t.y + t.height <= e.windowHeight;
  }
  static async processIncomingRequestsForPermissionToShowSurvey() {
    if (!e.isProcessingRequestsForPermissionToShowSurvey) {
      for (e.isProcessingRequestsForPermissionToShowSurvey = !0; e.incomingRequestsForPermissionToShowSurvey.length > 0;) {
        let t = e.incomingRequestsForPermissionToShowSurvey.shift();
        if (!t) continue;
        let i = e.onAttemptToShowSurveyCallbacks.map(e => e());
        k.debug(`[Sprigma] Requesting permission to show survey ${t.content.surveyId}, handlers =`, e.onAttemptToShowSurveyCallbacks);
        e.sendMessage({
          type: G.GetPermissionToShowSurvey,
          content: {
            surveyId: t?.content.surveyId,
            canShow: await Promise.all(i).then(e => e.every(e => e)).catch(e => (k.error(`[Sprigma] Failed to get permission to show survey ${t.content.surveyId}, reason =`, e), !1))
          }
        });
      }
      e.isProcessingRequestsForPermissionToShowSurvey = !1;
    }
  }
  constructor() {
    async function t() {
      let i = await e.listenForMatchingMessage(G.SetContainerDimensions);
      0 !== e.instanceCount && (i && e.setIframeDimensions(i.content), t());
    }
    async function i() {
      let t = await e.listenForMatchingMessage(G.Error);
      0 !== e.instanceCount && (t && sx("sprig_sandbox_error", t.content), i());
    }
    async function n() {
      let t = await e.listenForMatchingMessage(G.GetPermissionToShowSurvey);
      if (0 === e.instanceCount) {
        e.incomingRequestsForPermissionToShowSurvey = [];
        return;
      }
      t && (e.incomingRequestsForPermissionToShowSurvey.push(t), e.processIncomingRequestsForPermissionToShowSurvey());
      n();
    }
    async function r() {
      let t = await e.listenForMatchingMessage(G.SurveyClosed);
      0 !== e.instanceCount && (t && e.onSurveyCloseCallbacks.forEach(e => {
        e();
      }), r());
    }
    async function a() {
      let a;
      if (!e.iframeUrl) {
        k.warn("[Sprigma] Skipping loading Sprig SDK because `sprig_iframe_url` is not set");
        e.iframe = null;
        return;
      }
      let s = document.createElement("iframe");
      s.src = e.iframeUrl;
      s.ariaHidden = "true";
      s.tabIndex = -1;
      s.height = "0";
      s.width = "0";
      s.style.position = "fixed";
      s.style.bottom = "0";
      s.style.right = "0";
      s.style.zIndex = secondaryModalZ.toString();
      s.style.colorScheme = "normal";
      s.style.transition = "right 0.3s, bottom 0.3s";
      document.body.appendChild(s);
      e.iframe = s;
      k.debug("[Sprigma] Sandbox iframe injected into DOM");
      let m = setInterval(() => {
        e.updatePageUrl(Br(location.href));
      }, 100);
      e.tearDownIframeCallback = () => {
        k.debug("[Sprigma] Sandbox iframe is tearing down as there are no users left");
        window.removeEventListener("resize", e.onWindowResize);
        e.isSDKReady = !1;
        clearInterval(m);
        e.iframe = void 0;
        document.body.removeChild(s);
      };
      try {
        a = await e.listenForMatchingMessage(G.SDKReady, void 0, 1e4);
      } catch {
        sx("sprig_sdk_loading_timeout", {
          threshold: 1e4
        });
      }
      if (void 0 === a || 0 === e.instanceCount) return;
      e.isSDKReady = !0;
      sx("sprig_sdk_ready", {
        time_to_readiness: a.content.timeToReadinessInMs
      });
      k.info("[Sprigma] Sprig SDK is ready");
      let h = pp();
      h && (k.debug(`[Sprigma] Setting anonymous ID to ${h}`), e.sendMessage({
        type: G.Call,
        content: {
          args: ["setPartnerAnonymousId", h]
        }
      }));
      e.setUserData(getInitialOptions().user_data, getInitialOptions().user_analytics_data);
      e.onWindowResize();
      window.addEventListener("resize", e.onWindowResize);
      t();
      i();
      n();
      r();
      e.processQueuedMessages();
    }
    void 0 === e.iframe ? a() : k.debug("[Sprigma] Sandbox iframe has already been initialized");
    e.instanceCount++;
  }
  sendMessage(...t) {
    e.sendMessage(...t);
  }
  listenForMatchingMessage(...t) {
    return e.listenForMatchingMessage(...t);
  }
  setCallbacks({
    onAttemptToShowSurvey: t,
    onSurveyClose: i
  }) {
    this.onAttemptToShowSurvey && (e.onAttemptToShowSurveyCallbacks = e.onAttemptToShowSurveyCallbacks.filter(e => e !== this.onAttemptToShowSurvey), this.onAttemptToShowSurvey = void 0);
    this.onSurveyClose && (e.onSurveyCloseCallbacks = e.onSurveyCloseCallbacks.filter(e => e !== this.onSurveyClose), this.onSurveyClose = void 0);
    t && (this.onAttemptToShowSurvey = t, e.onAttemptToShowSurveyCallbacks.push(t));
    i && (this.onSurveyClose = i, e.onSurveyCloseCallbacks.push(i));
  }
  tearDown() {
    e.instanceCount--;
    this.setCallbacks({
      onAttemptToShowSurvey: void 0,
      onSurveyClose: void 0
    });
    0 === e.instanceCount && e.tearDownIframeCallback && (e.tearDownIframeCallback(), e.tearDownIframeCallback = void 0);
  }
};
f.iframeUrl = getInitialOptions().sprig_iframe_url;
f.isSDKReady = !1;
f.messageQueue = [];
f.instanceCount = 0;
f.incomingRequestsForPermissionToShowSurvey = [];
f.onAttemptToShowSurveyCallbacks = [];
f.onSurveyCloseCallbacks = [];
f.windowWidth = window.innerWidth;
f.windowHeight = window.innerHeight;
f.screenAreasToAvoid = [];
f.isProcessingRequestsForPermissionToShowSurvey = !1;
let _ = (e, t) => {
  let i = Math.max(e.x, t.x);
  let n = Math.max(e.y, t.y);
  let r = Math.min(e.x + e.width, t.x + t.width);
  let a = Math.min(e.y + e.height, t.y + t.height);
  let s = r - i;
  let o = a - n;
  return s <= 0 || o <= 0 ? void 0 : {
    x: i,
    y: n,
    width: s,
    height: o
  };
};
let $$A1 = f;
export const An = $$m0;
export const Ay = $$A1; 
