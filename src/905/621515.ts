import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { reportError } from "../905/11";
import { overlayIdsAtom, overlayStateAtom } from "../905/12032";
import { isAllowedToSeeNux } from "../905/14910";
import { useMemoShallow } from "../905/19536";
import { BaseRule } from "../905/92222";
import { e as _$$e } from "../905/107684";
import { setCuratorLoggingLevel } from "../905/121508";
import { LifecycleManager } from "../905/147383";
import { ServiceCategories } from "../905/165054";
import { NotificationCategory } from "../905/170564";
import { debugState } from "../905/407919";
import { trackEventAnalytics } from "../905/449184";
import { useEventForwarder } from "../905/453826";
import { handleAtomEvent } from "../905/502364";
import { checkLifecycleConditions, createLifecycleAtomFamily, getBlockMessage, incrementLifecycleCounter } from "../905/539601";
import { globalPerfTimer } from "../905/542194";
import { getFeatureFlags } from "../905/601108";
import { getQueryParam } from "../905/609392";
import { E1 } from "../905/696065";
import { useSingleEffect } from "../905/791079";
import { h as _$$h } from "../905/881732";
import { BlockReasonType, ChannelID, ExperienceManager, OverlayManager } from "../905/953718";
import { appendUUID, removeUUID } from "../905/958284";
import { resourceUtils } from "../905/989992";
import { logCuratorEvent } from "../905/994802";
import { atom, atomStoreManager, t_, useAtomValueAndSetter, useAtomWithSubscription, Xr } from "../figma_app/27355";
import { getInitialOptions, getLaunchDarklyFlagsExport, isDevEnvironment } from "../figma_app/169182";
import { N as _$$N } from "../figma_app/268271";
import { modalTypeAtom, notificationTypeAtom, selectedViewAtom } from "../figma_app/386952";
import { isSyntheticTesterEmail } from "../figma_app/416935";
import { throwTypeError } from "../figma_app/465776";
import { userFlagAtomFamily } from "../figma_app/545877";
import { NT } from "../figma_app/579169";
import { y as _$$y2 } from "../figma_app/608914";
import { RI } from "../figma_app/621201";
import { CURATOR_GLOBAL_REQUEST_CLOSE } from "../figma_app/916469";

let l = t_(() => new OverlayManager());
let _ = new BaseRule("PreventModalCollisions", "A rule that prevents overlays from being shown while a modal is displayed", (e, t) => !e.uiState.modalShownType || (t.attributes.allowShowingIfModalPresent ? (trackEventAnalytics("curator_collision", {
  blocked_overlay_id: removeUUID(t.id),
  blocking_modal_type: e.uiState.modalShownType,
  was_allowlisted: !0
}), !0) : (trackEventAnalytics("curator_collision", {
  blocked_overlay_id: removeUUID(t.id),
  blocking_modal_type: e.uiState.modalShownType
}), !1)));
let A = new BaseRule("PreventNotificationCollisions", "A rule that prevents overlays from being shown while a notification is displayed", (e, t) => {
  if (e.uiState.currentNotificationType === null) return !0;
  let i = NotificationCategory[e.uiState.currentNotificationType];
  trackEventAnalytics("curator_collision", {
    blocked_overlay_id: removeUUID(t.id),
    blocking_notif_type: i
  });
  return !1;
});
let b = new BaseRule("DenyForRequestModal", "Don't show any overlays on the team page if the request to upgrade pro modal is open", e => !(e.uiState.modalShownType === E1 && e.uiState.selectedView.view === "team"));
let E = new BaseRule("DenyForSyntheticTestUser", "Don't show to synthetic test users (in E2E tests)", e => !isSyntheticTesterEmail(e.userData?.email) || !!getQueryParam("allow_synthetic_tester_overlays"));
let T = new BaseRule("DenyIfNuxHasNotShown", "Don't show any overlays if the user has not seen NUX", (e, t) => {
  let i = removeUUID(t.id);
  let n = getFeatureFlags().curator_deny_if_nux_has_not_shown;
  if (t.priority === _$$N.URGENT_ALERT || !n || !_$$e.some(t => e.allMountedOverlays.includes(t)) || e.uiState.selectedView.view === "prototype") return !0;
  let r = {
    emailValidatedAt: e.userData?.email_validated_at ? new Date(e.userData?.email_validated_at) : null,
    jobTitle: e.jobTitle
  };
  return !(!_$$e.includes(i) && function ({
    emailValidatedAt: e,
    jobTitle: t
  }) {
    return !isAllowedToSeeNux({
      emailValidatedAt: e,
      jobTitle: t
    });
  }(r));
});
let k = new BaseRule("DenyInInlinePreview", "Hide all overlays inside the inline preview", e => e.uiState.selectedView.view !== "prototype" || !e.uiState.selectedView.inlinePreview);
let R = new BaseRule("DenyInKillSwitch", "Don't show any overlays that belong to the LaunchDarkly flag when the kill switch is enabled", (e, t) => {
  let i = removeUUID(t.id);
  let n = getLaunchDarklyFlagsExport().curator_disallow_overlay_rule;
  return !n || !Array.isArray(n) || !n.includes(i);
});
let O = atom(e => {
  let t = e(selectedViewAtom);
  let i = e(modalTypeAtom);
  let n = e(notificationTypeAtom);
  let r = e(NT);
  let a = e(overlayIdsAtom);
  let o = typeof r == "string" || void 0 === r ? r : r.status === "loaded" ? r.data : void 0;
  let l = e(userFlagAtomFamily("last_seen_dev_mode_upsell"));
  return {
    uiState: {
      selectedView: t,
      modalShownType: i,
      currentNotificationType: n
    },
    userData: getInitialOptions().user_data,
    lastSeenDevModeUpsell: l.data?.updatedAt,
    jobTitle: o || getInitialOptions().user_data?.profile?.job_title,
    allMountedOverlays: a.map(e => removeUUID(e))
  };
});
class D {
  constructor() {
    this.id = ChannelID.Overlay;
    this.currentExperience = void 0;
    this.queuedExperiences = [];
  }
  getContext() {
    return atomStoreManager.get(O);
  }
  getRules() {
    return [R, k, _$$h, E, b, RI, T, _, A];
  }
}
let L = atom(() => new ExperienceManager({
  [ChannelID.Overlay]: new D()
}));
window.Curator = {
  enableTraceLogging: () => setCuratorLoggingLevel("trace"),
  enableDebugLogging: () => setCuratorLoggingLevel("debug"),
  disableLogging: () => setCuratorLoggingLevel("disabled"),
  getMountedOverlays() {
    return atomStoreManager.get(overlayIdsAtom);
  },
  sendEvent(e) {
    handleAtomEvent(e);
    return !0;
  },
  getExperienceSelectorChannels() {
    return atomStoreManager.get(L).getImmutableChannels();
  },
  getLoadingOverlays() {
    return atomStoreManager.get(l).getImmutableLoadingOverlays();
  },
  getOverlaysBlockedByDataDependencies() {
    return atomStoreManager.get(l).getImmutableQueuedOverlays();
  },
  resetUserFlags(e) {
    let t = e.reduce((e, t) => ({
      ...e,
      [t]: !1
    }), {});
    debugState.dispatch({
      type: "USER_FLAG_POST",
      payload: t
    });
  }
};
let Q = /__[0-9A-Z\-]+$/i;
var ee = (e => (e.Deactivated = "deactivated", e.Unmounted = "unmounted", e.GlobalRequestClose = "global_request_close", e))(ee || {});
let et = atom(!1);
function ei(e) {
  return e.state === "hasData" ? resourceUtils.loaded(e.data) : e.state === "hasError" ? resourceUtils.error(e.error) : resourceUtils.loading();
}
function en(e) {
  return e.status === "loading";
}
let er = "curator_perf";
let ea = "timed out";
export function $$es0({
  overlay: e,
  ...t
}, i = []) {
  let r = e.id;
  let [a] = useState(() => appendUUID(r));
  let u = function (e, t) {
    let i = useContext(_$$y2);
    let n = useRef(!1);
    return useMemo(() => {
      if (!i) return t;
      let r = i.priorityMap.get(e);
      return r ? getFeatureFlags().curator_file_browser_ordering ? r : t : (!n.current && getFeatureFlags().curator_file_browser_ordering && (reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Overlay not registered with gallery"), {
        tags: {
          overlayId: e,
          galleryName: i.name
        }
      }), n.current = !0), getFeatureFlags().curator_file_browser_ordering ? 0 : t);
    }, [e, i, t]);
  }(r, t.priority);
  let p = Xr(overlayStateAtom);
  let m = useAtomWithSubscription(l);
  let g = useAtomWithSubscription(L);
  let f = Xr(overlayIdsAtom);
  let _ = useAtomWithSubscription(createLifecycleAtomFamily(e.lifecycle));
  let A = useRef(_);
  A.current = _;
  let [y, b] = useAtomValueAndSetter(et);
  let [v, I] = useState(!1);
  let E = useRef(v);
  E.current = v;
  let S = useRef(void 0);
  let w = function (e, t, i) {
    let n = useMemoShallow(() => [t, ...e], [e, t]);
    let r = useMemo(() => function (e) {
      let t = e.map(e => "state" in e ? ei(e) : e);
      return resourceUtils.all(t);
    }(n), [n]);
    !function (e, t) {
      function i(e) {
        return e.map(e => "state" in e ? ei(e) : e);
      }
      let n = useCallback((t, i) => {
        isDevEnvironment() && console.error(i);
        trackEventAnalytics("curator_dependency_error", {
          errorType: t,
          overlay: e
        }, {
          forwardToDatadog: !0
        });
      }, [e]);
      let r = useRef(!1);
      let a = useRef(!1);
      let s = useRef(i(t ?? []));
      useEffect(() => {
        if ((t?.length ?? 0) === 0 && s.current.length === 0) return;
        let o = i(t ?? []);
        if (o.length !== s.current.length) {
          r.current || (n("changed_dependency_count", `[Error] Number of dependencies changed between calls to useOverlay in overlay \`${e}\`.`), r.current = !0);
          return;
        }
        let l = a.current;
        for (let [e, t] of zip()(o, s.current)) {
          if (e == null || t == null || (l ||= e.status !== "loaded" && t.status === "loaded")) break;
        }
        l && !a.current && (n("unloaded_dependencies", `[useOverlay] One or more dependency statuses became unloaded between updates in overlay '${e}'.`), a.current = !0);
        s.current = o;
      }, [t, n, e]);
    }(i, n);
    let [a, s] = useState(!1);
    useEffect(() => {
      let e = setTimeout(() => {
        r.status === "loading" && (s(!0), trackEventAnalytics("curator_dependencies_timed_out", {
          overlay: i
        }, {
          forwardToDatadog: !0
        }));
      }, 9e3);
      return () => clearTimeout(e);
    }, [r.status, i]);
    return a ? eo : r;
  }(i, _, r);
  let C = useRef(w);
  C.current = w;
  let [T, k] = useState(void 0);
  let {
    experiment
  } = t;
  let N = useRef(experiment?.check);
  N.current = experiment?.check;
  let [P] = useState(() => [() => {
    if (experiment == null) return;
    let e = N.current;
    if (!e) return;
    let t = e();
    k(t);
    let i = experiment.predicate(t);
    let n = !1;
    if (C.current.status === "loaded" ? n = experiment.postCheck(...ed(C.current.data)) : C.current.status === "loading" && reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Experiment postCheck unexpectedly did not have loaded data dependencies"), {
      tags: {
        overlayId: r,
        dependencyStatus: C.current.status
      }
    }), i && n) {
      logCuratorEvent({
        type: "resumed",
        name: "experiment_check_passed",
        properties: {
          overlayId: a
        }
      }, "debug");
      return;
    }
    logCuratorEvent({
      type: "failed",
      name: "experiment_check_failed",
      properties: {
        overlayId: a,
        predicateValue: i,
        postCheckValue: n
      }
    }, "debug");
    return {
      reasonType: BlockReasonType.ExperimentCheckFail
    };
  }, () => {
    if (e.lifecycle != null) {
      if (A.current.status !== "loaded") {
        reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Lifecycle postCheck unexpectedly did not have loaded data dependencies"), {
          tags: {
            overlayId: r,
            dependencyStatus: C.current.status
          }
        });
        return;
      }
      return checkLifecycleConditions({
        ...A.current.data,
        lifecycleConfig: e.lifecycle
      });
    }
  }]);
  let O = function (e, t, i) {
    let n = useRef(0);
    useLayoutEffect(() => (globalPerfTimer.start(el, {
      key: t
    }), () => {
      globalPerfTimer.$$delete(el, t);
    }), []);
    useLayoutEffect(() => {
      i === "loaded" ? n.current = globalPerfTimer.tryStop(el, t) ?? 0 : (i === "errors" || i === "disabled") && globalPerfTimer.$$delete(el, t);
    }, [i, e, t]);
    return n;
  }(r, a, w.status);
  let D = useRef(0);
  let F = useRef();
  useEffect(() => {
    F.current?.(w);
  }, [w]);
  let G = useCallback((e, t) => {
    if (E.current) {
      if (logCuratorEvent({
        type: "triggered",
        name: "overlay_complete_called",
        properties: {
          overlayId: a,
          completeReason: e,
          completeRequester: t
        }
      }, "debug"), S.current) {
        let i;
        let n = (performance.now() - S.current) / 1e3;
        i = t ?? null;
        trackEventAnalytics("curator_content_hidden", {
          overlay_id: r,
          timeShownSec: n,
          completeReason: e,
          completeRequester: i
        }, {
          forwardToDatadog: !0
        });
        S.current = void 0;
      }
      I(!1);
      g.completeExperience(a);
      p(null);
    }
  }, [S, a, r, g, p]);
  useEventForwarder(a, CURATOR_GLOBAL_REQUEST_CLOSE, ({
    properties: {
      requester: e
    }
  }) => {
    G(ee.GlobalRequestClose, e);
  });
  useEffect(() => () => {
    E.current ? G(ee.Unmounted) : g.dequeueExperience(a);
  }, [G, g, a]);
  useEffect(() => () => {
    m.removeOverlay(a);
  }, [m, a]);
  useSingleEffect(() => (y || (b(!0), LifecycleManager.removeStaleLocalStorageLifecycleNames()), logCuratorEvent({
    type: "triggered",
    name: "overlay_mounted",
    properties: {
      overlayId: a,
      priority: u
    }
  }, "debug"), f({
    type: "mount",
    uniqueOverlayId: a
  }), () => {
    logCuratorEvent({
      type: "triggered",
      name: "overlay_unmounted",
      properties: {
        overlayId: a
      }
    }, "debug");
    f({
      type: "unmount",
      uniqueOverlayId: a
    });
  }));
  let ec = useCallback(t => {
    let i = {
      id: a,
      priority: u,
      channelID: ChannelID.Overlay,
      onShow: i => {
        I(!0);
        e.lifecycle && incrementLifecycleCounter(e.lifecycle);
        t?.onShow?.();
        trackEventAnalytics("curator_content_shown", {
          shown: r,
          overlay_id: r
        }, {
          forwardToDatadog: !0
        });
        logCuratorEvent({
          type: "output",
          name: "overlay_showing",
          properties: {
            overlayId: a
          }
        }, "debug");
        S.current = performance.now();
        p(r);
        let n = globalPerfTimer.tryStop(er, a);
        n && (trackEventAnalytics(er, {
          totalShowMs: n,
          dependenciesLoadingMs: O.current,
          queuedMs: D.current,
          overlayId: r
        }, {
          forwardToDatadog: !0
        }), O.current = 0);
      },
      onBlocked: i => {
        switch (i.reasonType) {
          case BlockReasonType.ExistingExperience:
          case BlockReasonType.HigherPriExperience:
            let n = {
              overlayId: a,
              blockingOverlayId: i.blocker.id
            };
            e.queueOnBlock ? logCuratorEvent({
              type: "paused",
              name: "paused_on_current_overlay",
              properties: n
            }, "debug") : logCuratorEvent({
              type: "failed",
              name: "failed_on_current_overlay",
              properties: n
            }, "debug");
            let s = i.blocker.id.replace(Q, "");
            t?.onBlocked?.(s);
            trackEventAnalytics("curator_content_blocked", {
              blocked: r,
              blocking: s,
              overlay_id: r,
              blocked_priority: u,
              blocking_priority: i.blocker.priority,
              block_type: i.reasonType
            }, {
              forwardToDatadog: !0
            });
            globalPerfTimer.$$delete(er, a);
            break;
          case BlockReasonType.ExperimentCheckFail:
            break;
          case BlockReasonType.RuleFail:
            logCuratorEvent({
              type: "failed",
              name: "rule_check_failed",
              properties: {
                overlayId: a,
                name: i.rule.name,
                description: i.rule.description
              }
            }, "debug");
            break;
          case BlockReasonType.LifecycleCheckFail:
            logCuratorEvent({
              type: "failed",
              name: "lifecycle_check_failed",
              properties: {
                overlayId: a,
                description: getBlockMessage(i.cause)
              }
            }, "debug");
            break;
          default:
            throwTypeError(i);
        }
      },
      postChecks: P,
      queueOnBlock: e.queueOnBlock ?? !1,
      attributes: {
        allowShowingIfModalPresent: !!e.allowShowingIfModalPresent
      }
    };
    g.queueExperience(i);
  }, [e.queueOnBlock, e.allowShowingIfModalPresent, e.lifecycle, O, g, u, P, r, p, a]);
  let eu = useCallback(e => {
    if (E.current) return;
    globalPerfTimer.start(er, {
      key: a
    });
    logCuratorEvent({
      type: "triggered",
      name: "overlay_show_called",
      properties: {
        overlayId: a
      }
    }, "debug");
    let t = {
      id: a,
      priority: u,
      queryResult: C.current
    };
    function i(i) {
      if (i.status === "errors") {
        m.removeOverlay(t.id);
        e?.onLoadFailed?.(i.errors);
        let n = i.errors.includes(ea);
        logCuratorEvent({
          type: "failed",
          name: "data_dependencies_load_error",
          properties: {
            overlayId: a,
            timedOut: n,
            errors: i.errors
          }
        }, "debug");
        globalPerfTimer.$$delete(er, a);
        return;
      }
      if (i.status === "disabled") {
        m.removeOverlay(t.id);
        logCuratorEvent({
          type: "failed",
          name: "data_dependencies_disabled",
          properties: {
            overlayId: a
          }
        }, "debug");
        globalPerfTimer.$$delete(er, a);
        return;
      }
      if (i.status === "loaded") {
        if (logCuratorEvent({
          type: "resumed",
          name: "data_dependencies_loaded",
          properties: {
            overlayId: a,
            dataDependencies: i.data
          }
        }, "trace"), e?.canShow != null && !e.canShow(...ed(i.data))) {
          m.removeOverlay(t.id);
          logCuratorEvent({
            type: "failed",
            name: "can_show_failed",
            properties: {
              overlayId: a,
              dataDependencies: i.data
            }
          }, "debug");
          globalPerfTimer.$$delete(er, a);
          return;
        }
        m.showOverlay(t.id, t => {
          D.current = "didNotQueue" in t ? 0 : t.queueDuration;
          ec(e);
        });
      }
    }
    if (m.updateOverlay(t), !en(C.current)) {
      i(C.current);
      return;
    }
    logCuratorEvent({
      type: "paused",
      name: "data_dependencies_loading",
      properties: {
        overlayId: a
      }
    }, "trace");
    F.current = e => {
      m.updateOverlay({
        id: t.id,
        priority: u,
        queryResult: e
      });
      en(e) || (i(e), F.current = void 0);
    };
  }, [a, u, m, ec]);
  let ep = useCallback(() => G(ee.Deactivated), [G]);
  return useMemo(() => ({
    show: eu,
    complete: ep,
    isShowing: v,
    experimentResult: T,
    uniqueId: a
  }), [eu, ep, v, T, a]);
}
let eo = resourceUtils.error([ea]);
let el = "curator_deps_loaded";
function ed(e) {
  let [t, ...i] = e;
  return i;
}
export const e = $$es0;
