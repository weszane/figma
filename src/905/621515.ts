import { t_, atom, atomStoreManager, Xr, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { debugState } from "../905/407919";
import { handleAtomEvent } from "../905/502364";
import { a as _$$a, D as _$$D2 } from "../905/12032";
import { Z3, FQ, Oi, oE } from "../905/953718";
import { getLaunchDarklyFlagsExport, getInitialOptions, isDevEnvironment } from "../figma_app/169182";
import { y as _$$y, t as _$$t } from "../905/958284";
import { selectedViewAtom, modalTypeAtom, notificationTypeAtom } from "../figma_app/386952";
import { NT } from "../figma_app/579169";
import { userFlagAtomFamily } from "../figma_app/545877";
import { trackEventAnalytics } from "../905/449184";
import { NotificationType } from "../905/170564";
import { m as _$$m } from "../905/92222";
import { E1 } from "../905/696065";
import { isSyntheticTesterEmail } from "../figma_app/416935";
import { QL } from "../905/609392";
import { getFeatureFlags } from "../905/601108";
import { N as _$$N } from "../figma_app/268271";
import { d as _$$d } from "../905/14910";
import { e as _$$e } from "../905/107684";
import { h as _$$h } from "../905/881732";
import { RI } from "../figma_app/621201";
import { L as _$$L } from "../905/121508";
import { useState, useContext, useRef, useMemo, useCallback, useEffect, useLayoutEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { ServiceCategories as _$$e2 } from "../905/165054";
import { useMemoShallow } from "../905/19536";
import { resourceUtils } from "../905/989992";
import G from "../vendor/575087";
import { globalPerfTimer } from "../905/542194";
import { y as _$$y2 } from "../figma_app/608914";
import { h as _$$h2 } from "../905/207101";
import { reportError } from "../905/11";
import { X as _$$X } from "../figma_app/916469";
import { eC, $1, _Z, Gx } from "../905/539601";
import { C5 } from "../905/147383";
import { R as _$$R } from "../905/994802";
import { E as _$$E } from "../905/453826";
let l = t_(() => new Z3());
let _ = new _$$m("PreventModalCollisions", "A rule that prevents overlays from being shown while a modal is displayed", (e, t) => !e.uiState.modalShownType || (t.attributes.allowShowingIfModalPresent ? (trackEventAnalytics("curator_collision", {
  blocked_overlay_id: _$$y(t.id),
  blocking_modal_type: e.uiState.modalShownType,
  was_allowlisted: !0
}), !0) : (trackEventAnalytics("curator_collision", {
  blocked_overlay_id: _$$y(t.id),
  blocking_modal_type: e.uiState.modalShownType
}), !1)));
let A = new _$$m("PreventNotificationCollisions", "A rule that prevents overlays from being shown while a notification is displayed", (e, t) => {
  if (null === e.uiState.currentNotificationType) return !0;
  let i = NotificationType[e.uiState.currentNotificationType];
  trackEventAnalytics("curator_collision", {
    blocked_overlay_id: _$$y(t.id),
    blocking_notif_type: i
  });
  return !1;
});
let b = new _$$m("DenyForRequestModal", "Don't show any overlays on the team page if the request to upgrade pro modal is open", e => !(e.uiState.modalShownType === E1 && "team" === e.uiState.selectedView.view));
let E = new _$$m("DenyForSyntheticTestUser", "Don't show to synthetic test users (in E2E tests)", e => !isSyntheticTesterEmail(e.userData?.email) || !!QL("allow_synthetic_tester_overlays"));
let T = new _$$m("DenyIfNuxHasNotShown", "Don't show any overlays if the user has not seen NUX", (e, t) => {
  let i = _$$y(t.id);
  let n = getFeatureFlags().curator_deny_if_nux_has_not_shown;
  if (t.priority === _$$N.URGENT_ALERT || !n || !_$$e.some(t => e.allMountedOverlays.includes(t)) || "prototype" === e.uiState.selectedView.view) return !0;
  let r = {
    emailValidatedAt: e.userData?.email_validated_at ? new Date(e.userData?.email_validated_at) : null,
    jobTitle: e.jobTitle
  };
  return !(!_$$e.includes(i) && function ({
    emailValidatedAt: e,
    jobTitle: t
  }) {
    return !_$$d({
      emailValidatedAt: e,
      jobTitle: t
    });
  }(r));
});
let k = new _$$m("DenyInInlinePreview", "Hide all overlays inside the inline preview", e => "prototype" !== e.uiState.selectedView.view || !e.uiState.selectedView.inlinePreview);
let R = new _$$m("DenyInKillSwitch", "Don't show any overlays that belong to the LaunchDarkly flag when the kill switch is enabled", (e, t) => {
  let i = _$$y(t.id);
  let n = getLaunchDarklyFlagsExport().curator_disallow_overlay_rule;
  return !n || !(n instanceof Array) || !n.includes(i);
});
let O = atom(e => {
  let t = e(selectedViewAtom);
  let i = e(modalTypeAtom);
  let n = e(notificationTypeAtom);
  let r = e(NT);
  let a = e(_$$a);
  let o = "string" == typeof r || void 0 === r ? r : "loaded" === r.status ? r.data : void 0;
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
    allMountedOverlays: a.map(e => _$$y(e))
  };
});
class D {
  constructor() {
    this.id = FQ.Overlay;
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
let L = atom(() => new Oi({
  [FQ.Overlay]: new D()
}));
window.Curator = {
  enableTraceLogging: () => _$$L("trace"),
  enableDebugLogging: () => _$$L("debug"),
  disableLogging: () => _$$L("disabled"),
  getMountedOverlays: function () {
    return atomStoreManager.get(_$$a);
  },
  sendEvent: function (e) {
    handleAtomEvent(e);
    return !0;
  },
  getExperienceSelectorChannels: function () {
    return atomStoreManager.get(L).getImmutableChannels();
  },
  getLoadingOverlays: function () {
    return atomStoreManager.get(l).getImmutableLoadingOverlays();
  },
  getOverlaysBlockedByDataDependencies: function () {
    return atomStoreManager.get(l).getImmutableQueuedOverlays();
  },
  resetUserFlags: function (e) {
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
var z = G;
let Q = /__[0-9A-Za-z\-]+$/;
var ee = (e => (e.Deactivated = "deactivated", e.Unmounted = "unmounted", e.GlobalRequestClose = "global_request_close", e))(ee || {});
let et = atom(!1);
function ei(e) {
  return "hasData" === e.state ? resourceUtils.loaded(e.data) : "hasError" === e.state ? resourceUtils.error(e.error) : resourceUtils.loading();
}
function en(e) {
  return "loading" === e.status;
}
let er = "curator_perf";
let ea = "timed out";
export function $$es0({
  overlay: e,
  ...t
}, i = []) {
  let r = e.id;
  let [a] = useState(() => _$$t(r));
  let u = function (e, t) {
    let i = useContext(_$$y2);
    let n = useRef(!1);
    return useMemo(() => {
      if (!i) return t;
      let r = i.priorityMap.get(e);
      return r ? getFeatureFlags().curator_file_browser_ordering ? r : t : (!n.current && getFeatureFlags().curator_file_browser_ordering && (reportError(_$$e2.GROWTH_PLATFORM, Error("[Curator] Overlay not registered with gallery"), {
        tags: {
          overlayId: e,
          galleryName: i.name
        }
      }), n.current = !0), getFeatureFlags().curator_file_browser_ordering ? 0 : t);
    }, [e, i, t]);
  }(r, t.priority);
  let p = Xr(_$$D2);
  let m = useAtomWithSubscription(l);
  let g = useAtomWithSubscription(L);
  let f = Xr(_$$a);
  let _ = useAtomWithSubscription(eC(e.lifecycle));
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
        if (0 === (t?.length ?? 0) && 0 === s.current.length) return;
        let o = i(t ?? []);
        if (o.length !== s.current.length) {
          r.current || (n("changed_dependency_count", `[Error] Number of dependencies changed between calls to useOverlay in overlay \`${e}\`.`), r.current = !0);
          return;
        }
        let l = a.current;
        for (let [e, t] of z()(o, s.current)) if (null == e || null == t || (l ||= "loaded" !== e.status && "loaded" === t.status)) break;
        l && !a.current && (n("unloaded_dependencies", `[useOverlay] One or more dependency statuses became unloaded between updates in overlay '${e}'.`), a.current = !0);
        s.current = o;
      }, [t, n, e]);
    }(i, n);
    let [a, s] = useState(!1);
    useEffect(() => {
      let e = setTimeout(() => {
        "loading" === r.status && (s(!0), trackEventAnalytics("curator_dependencies_timed_out", {
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
    if (null == experiment) return;
    let e = N.current;
    if (!e) return;
    let t = e();
    k(t);
    let i = experiment.predicate(t);
    let n = !1;
    if ("loaded" === C.current.status ? n = experiment.postCheck(...ed(C.current.data)) : "loading" === C.current.status && reportError(_$$e2.GROWTH_PLATFORM, Error("[Curator] Experiment postCheck unexpectedly did not have loaded data dependencies"), {
      tags: {
        overlayId: r,
        dependencyStatus: C.current.status
      }
    }), i && n) {
      _$$R({
        type: "resumed",
        name: "experiment_check_passed",
        properties: {
          overlayId: a
        }
      }, "debug");
      return;
    }
    _$$R({
      type: "failed",
      name: "experiment_check_failed",
      properties: {
        overlayId: a,
        predicateValue: i,
        postCheckValue: n
      }
    }, "debug");
    return {
      reasonType: oE.ExperimentCheckFail
    };
  }, () => {
    if (null != e.lifecycle) {
      if ("loaded" !== A.current.status) {
        reportError(_$$e2.GROWTH_PLATFORM, Error("[Curator] Lifecycle postCheck unexpectedly did not have loaded data dependencies"), {
          tags: {
            overlayId: r,
            dependencyStatus: C.current.status
          }
        });
        return;
      }
      return $1({
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
      "loaded" === i ? n.current = globalPerfTimer.tryStop(el, t) ?? 0 : ("errors" === i || "disabled" === i) && globalPerfTimer.$$delete(el, t);
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
      if (_$$R({
        type: "triggered",
        name: "overlay_complete_called",
        properties: {
          overlayId: a,
          completeReason: e,
          completeRequester: t
        }
      }, "debug"), S.current) {
        var i;
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
  _$$E(a, _$$X, ({
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
  _$$h2(() => (y || (b(!0), C5.removeStaleLocalStorageLifecycleNames()), _$$R({
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
    _$$R({
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
      channelID: FQ.Overlay,
      onShow: i => {
        I(!0);
        e.lifecycle && _Z(e.lifecycle);
        t?.onShow?.();
        trackEventAnalytics("curator_content_shown", {
          shown: r,
          overlay_id: r
        }, {
          forwardToDatadog: !0
        });
        _$$R({
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
          case oE.ExistingExperience:
          case oE.HigherPriExperience:
            let n = {
              overlayId: a,
              blockingOverlayId: i.blocker.id
            };
            e.queueOnBlock ? _$$R({
              type: "paused",
              name: "paused_on_current_overlay",
              properties: n
            }, "debug") : _$$R({
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
          case oE.ExperimentCheckFail:
            break;
          case oE.RuleFail:
            _$$R({
              type: "failed",
              name: "rule_check_failed",
              properties: {
                overlayId: a,
                name: i.rule.name,
                description: i.rule.description
              }
            }, "debug");
            break;
          case oE.LifecycleCheckFail:
            _$$R({
              type: "failed",
              name: "lifecycle_check_failed",
              properties: {
                overlayId: a,
                description: Gx(i.cause)
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
    _$$R({
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
      if ("errors" === i.status) {
        m.removeOverlay(t.id);
        e?.onLoadFailed?.(i.errors);
        let n = i.errors.includes(ea);
        _$$R({
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
      if ("disabled" === i.status) {
        m.removeOverlay(t.id);
        _$$R({
          type: "failed",
          name: "data_dependencies_disabled",
          properties: {
            overlayId: a
          }
        }, "debug");
        globalPerfTimer.$$delete(er, a);
        return;
      }
      if ("loaded" === i.status) {
        if (_$$R({
          type: "resumed",
          name: "data_dependencies_loaded",
          properties: {
            overlayId: a,
            dataDependencies: i.data
          }
        }, "trace"), e?.canShow != null && !e.canShow(...ed(i.data))) {
          m.removeOverlay(t.id);
          _$$R({
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
    _$$R({
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