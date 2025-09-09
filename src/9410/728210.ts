import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useContext, useRef, useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { Multiplayer } from "../figma_app/763686";
import { useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import d from "classnames";
import { N as _$$N } from "../vendor/930821";
import { P as _$$P } from "../vendor/348225";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { useLatestRef } from "../figma_app/922077";
import { BrowserInfo, isMobileNotFigmaMobile, isAnyMobile } from "../figma_app/778880";
import { y7, oJ, $ as _$$$, jA, NB, L3, KI } from "../figma_app/385215";
import { Fj, Dv, ah, uc } from "../905/763714";
import { Av } from "../905/149328";
import { hk } from "../figma_app/632319";
import { renderI18nText, getI18nString } from "../905/303541";
import { O1, KD } from "../figma_app/317394";
import { _o } from "../figma_app/701001";
import { ni } from "../figma_app/62612";
import { p8 } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { $0, dR, Ww, y as _$$y, oW, D_, HG, By, VA, Pi } from "../figma_app/440875";
import { T as _$$T, N as _$$N2 } from "../905/847283";
import { _6, z3 } from "../figma_app/386952";
import { a8, $i } from "../figma_app/467440";
import { h0, JJ } from "../figma_app/61403";
import { rK } from "../figma_app/631279";
import { iP } from "../figma_app/803054";
import { VA as _$$VA } from "../figma_app/844818";
import { s as _$$s } from "../3276/982041";
import { Y as _$$Y } from "../3276/704944";
import { h as _$$h } from "../3276/814771";
import { Bn } from "../3276/256210";
import { Y$, Fd, GE, KM } from "../3276/784372";
var c = d;
export let $$U3 = 5;
var G = (e => (e[e.Default = 0] = "Default", e[e.Mobile = 1] = "Mobile", e[e.Prototype = 2] = "Prototype", e[e.Slide = 3] = "Slide", e))(G || {});
let K = (e, t) => {
  let i = ni();
  let r = Av();
  let a = _o();
  let s = p8("showUi");
  let o = _6();
  let l = function ({
    isUI3: e,
    prototypeHeaderHidden: t,
    showUi: i,
    style: r,
    toolbarHeight: n,
    editorBannerHeight: a
  }) {
    return (2 === r ? t ? 0 : n : e ? BrowserInfo.isIpadNative || isMobileNotFigmaMobile() && i ? _$$VA() : 0 : i || BrowserInfo.isIpadNative ? n : 0) + a;
  }({
    isUI3: !("prototype" === o.view && "slides" === o.file.editor_type),
    prototypeHeaderHidden: t,
    showUi: s,
    style: e,
    toolbarHeight: r,
    editorBannerHeight: a
  });
  return useMemo(() => ({
    left: i.x,
    top: l,
    width: i.width
  }), [i, l]);
};
function H(e) {
  let t;
  let i = ni();
  let r = _o();
  p8("showUi");
  let a = 0;
  (BrowserInfo.isIpad || isMobileNotFigmaMobile()) && (a = _$$VA());
  let s = i.y + r + a;
  switch (e) {
    case 1:
      t = 4;
      break;
    case 2:
      t = s;
      break;
    case 3:
      t = 0;
      break;
    case 0:
      t = 2 * $$U3;
  }
  return useMemo(() => ({
    left: i.x,
    top: s,
    width: i.width - (0 === e ? 2 * $$U3 : 0),
    height: i.height - r - t - a
  }), [i, e, s, t, r, a]);
}
let z = (e, t) => {
  let i;
  let r = H(t);
  let a = 0;
  switch (t) {
    case 0:
      i = {
        borderWidth: $$U3
      };
      a = $$U3;
      break;
    case 1:
      if (isMobileNotFigmaMobile()) {
        i = {};
        break;
      }
      i = {
        borderTopWidth: 4
      };
      a = 4;
      break;
    case 3:
      i = {
        borderWidth: $$U3,
        borderRadius: "0.8rem",
        boxSizing: "border-box"
      };
      a = $$U3;
      break;
    case 2:
      i = {};
  }
  return useMemo(() => ({
    style: {
      ...r,
      ...i,
      "--multiplayerBorderColor": e,
      borderStyle: "solid",
      "--multiplayerBorderWidth": `${a}px`
    },
    borderInfo: {
      width: a,
      color: e
    }
  }), [e, r, i, a]);
};
function V(e) {
  let {
    children,
    prototypeHeaderHidden
  } = e;
  let n = z3();
  let a = 0;
  "prototype" === n ? a = 2 : isAnyMobile && (a = 1);
  let s = K(a, prototypeHeaderHidden || !1);
  let o = 2 === a ? Y$ : void 0;
  let l = 2 === a && prototypeHeaderHidden ? Fd : void 0;
  return jsx("div", {
    className: c()(GE, o, l),
    style: s,
    "data-testid": "multiplayer-bell-container",
    children
  });
}
function W() {
  let {
    style,
    borderInfo
  } = useContext(_$$h);
  e = {
    ...style,
    borderColor: borderInfo.color
  };
  return jsx("div", {
    "data-testid": "viewport-frame",
    className: KM,
    style
  });
}
function Y() {
  let {
    style,
    borderInfo
  } = useContext(_$$h);
  e = {
    ...style,
    color: "brand" === borderInfo.color ? "var(--color-bg-brand)" : borderInfo.color,
    "--borderColorTransitionDurationSeconds": `${Bn}s`
  };
  return jsx("div", {
    className: KM,
    style
  });
}
function J(e) {
  let {
    children,
    colorOverride,
    overlayStatus
  } = e;
  let a = $0();
  let s = dR();
  let o = Ww();
  let l = _6();
  let d = 0;
  "prototype" === l.view ? d = l.isPresenterView ? 3 : 2 : isAnyMobile && (d = 1);
  let c = z((() => {
    if (colorOverride) return colorOverride;
    if (!overlayStatus) return s && o?.sessionID === s?.sessionID ? o?.color ?? "transparent" : a?.color ?? "transparent";
    {
      let {
        self,
        others
      } = overlayStatus;
      return "none" !== self ? "brand" : "following" === others && "none" === self ? a?.color ?? "transparent" : "transparent";
    }
  })(), d);
  return jsx(_$$h.Provider, {
    value: c,
    children
  });
}
var q = (e => (e.PRESENTING = "presenting", e.PROMPT_TO_ACCEPT_NOMINATION = "prompt_to_accept_nomination", e.SHOWING_EXPLAINER = "showing_explainer", e.NONE = "none", e))(q || {});
var X = (e => (e.PENDING_AUTO_FOLLOW = "pending_auto_follow", e.FOLLOWING = "following", e.PROMPT_TO_REJOIN = "prompt_to_rejoin", e.NONE = "none", e))(X || {});
function Z() {
  return "prototype" !== z3() && !isMobileNotFigmaMobile();
}
function Q(e, t, i, r) {
  let a = useLatestRef(e);
  let s = useLatestRef(t);
  let o = useRef(performance.now());
  useEffect(() => {
    if ("presenting" === e) {
      let e = globalPerfTimer.tryStop("start_spotlight");
      e && trackEventAnalytics("start_spotlight", {
        elapsedMs: e
      }, {
        forwardToDatadog: !0
      });
    } else if ("pending_auto_follow" === t) {
      let e = globalPerfTimer.tryStop("join_spotlight");
      e && trackEventAnalytics("join_spotlight", {
        elapsedMs: e
      }, {
        forwardToDatadog: !0
      });
    } else if ("following" === t) {
      let e = globalPerfTimer.tryStop("start_following");
      e && trackEventAnalytics("start_following", {
        elapsedMs: e
      }, {
        forwardToDatadog: !0
      });
    }
  }, [e, t, i, r]);
  (e !== a || t !== s) && (o.current = performance.now());
  return {
    statusChangedAt: o.current
  };
}
function $(e) {
  let {
    multiplayer,
    prototypeHeaderHidden,
    isTabAccessible = !1,
    hideOthersOverlayOverride = !1
  } = e;
  let c = Ww();
  let h = dR();
  let m = $0();
  let f = _$$y();
  let y = selectCurrentFile();
  let E = useAtomWithSubscription(Fj);
  let T = _$$T();
  let w = y7();
  let N = oJ();
  let A = _$$$();
  let [O, L] = useState(!1);
  useEffect(() => {
    L(!1);
  }, [h?.sessionID]);
  useEffect(() => {
    m?.sessionID === h?.sessionID && L(!1);
  }, [m?.sessionID, h?.sessionID]);
  let {
    isAutoFollowPending,
    cancelAutoFollowCallback,
    completeAutoFollowCallback,
    observeCurrentPresenter,
    autoFollowType,
    autoFollowDelayMs
  } = oW(e);
  let {
    isWaitingForFirstFollower,
    stopPresenting
  } = function (e) {
    let [t, i] = useState(!1);
    let r = e.followerCount;
    let [a, s] = useAtomValueAndSetter(Dv);
    0 === r || t || i(!0);
    let d = jA(e) || a;
    jA(e) && a && s(!1);
    !d && t && i(!1);
    let c = d && 0 === r && !t;
    let u = _$$T();
    let p = z3();
    let h = useCallback(() => {
      u(_$$N2.STOP);
      "prototype" === p ? hk()?.stopPresenting() : Multiplayer.stopPresenting();
    }, [u, p]);
    let m = useCallback(() => !!c && (h(), !0), [h, c]);
    O1(m, KD.MULTIPLAYER_SPOTLIGHT);
    return {
      isWaitingForFirstFollower: c,
      stopPresenting: h
    };
  }(multiplayer);
  let W = function (e) {
    let {
      multiplayer: _multiplayer,
      showingExplainer,
      isPendingPresenting
    } = e;
    return jA(_multiplayer) || isPendingPresenting ? "presenting" : showingExplainer ? "showing_explainer" : NB(_multiplayer) ? "prompt_to_accept_nomination" : "none";
  }({
    multiplayer,
    showingExplainer: useAtomWithSubscription(ah),
    isPendingPresenting: useAtomWithSubscription(Dv)
  });
  let q = function (e) {
    let {
      multiplayer: _multiplayer2,
      isAutoFollowPending: _isAutoFollowPending,
      presenterUser,
      suppressRejoinPrompt
    } = e;
    return _isAutoFollowPending ? "pending_auto_follow" : L3(_multiplayer2) ? "following" : presenterUser && !suppressRejoinPrompt ? "prompt_to_rejoin" : "none";
  }({
    multiplayer,
    isAutoFollowPending,
    presenterUser: h,
    suppressRejoinPrompt: O
  });
  let X = useRef(multiplayer.allUsers.length);
  X.current = multiplayer.allUsers.length;
  let {
    statusChangedAt
  } = Q(W, q, y, X);
  let [ee, et] = function (e, t) {
    switch (e) {
      case "presenting":
        if ("following" === t || "prompt_to_rejoin" === t) return [e, "none"];
        return [e, t];
      case "prompt_to_accept_nomination":
        if ("pending_auto_follow" === t) return ["none", t];
        return [e, "none"];
      case "showing_explainer":
      case "none":
        return [e, t];
      default:
        throwTypeError(e);
    }
  }(W, q);
  let ei = et;
  hideOthersOverlayOverride && "following" === ei && (ei = "none");
  let er = useCallback(() => {
    L(!0);
    cancelAutoFollowCallback();
    T(_$$N2.IGNORE);
  }, [cancelAutoFollowCallback, T]);
  let en = autoFollowType === D_.INITIAL;
  let ea = useCallback(() => "pending_auto_follow" === ei && !!isAutoFollowPending && autoFollowType === D_.INITIAL && (cancelAutoFollowCallback(), !0), [autoFollowType, cancelAutoFollowCallback, isAutoFollowPending, ei]);
  O1(ea, KD.MULTIPLAYER_SPOTLIGHT);
  let es = Z();
  let eo = "showing_explainer" === ee;
  let el = "none" !== ee;
  let ed = "none" !== ei;
  let ec = ["presenting", "prompt_to_accept_nomination", "showing_explainer"].includes(ee) || ["following"].includes(ei);
  let [eu, ep] = useAtomValueAndSetter(uc);
  ec !== eu && ep(ec);
  return jsxs(J, {
    overlayStatus: {
      self: ee,
      others: ei
    },
    children: [jsx(_$$N, {
      children: ec && jsx(_$$P.span, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          ease: "easeIn",
          duration: Bn
        },
        children: jsx(Y, {})
      })
    }), jsx(_$$N, {
      children: el && jsx(_$$P.span, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          ease: "easeIn",
          duration: Bn
        },
        children: jsx(V, {
          prototypeHeaderHidden,
          children: (() => {
            switch (ee) {
              case "presenting":
                if (null === c) return null;
                if (isWaitingForFirstFollower) {
                  let e = renderI18nText("collaboration.spotlight.bell.presenter.waiting_for_followers");
                  let t = getI18nString("collaboration.spotlight.bell.presenter.cancel");
                  return jsx(_$$Y, {
                    color: "brand",
                    message: {
                      text: e
                    },
                    renderKey: `${c.sessionID}`,
                    progressBar: !0,
                    progressBarDurationMs: E,
                    autoHide: !1,
                    button: {
                      text: t,
                      onClick: stopPresenting
                    },
                    isTabAccessible
                  });
                }
                return jsx(_$$Y, {
                  color: "brand",
                  message: {
                    text: jsx(_$$s, {
                      count: multiplayer.followerCount
                    })
                  },
                  renderKey: `${c.sessionID}`,
                  progressBar: !1,
                  progressBarDurationMs: 0,
                  autoHide: !1,
                  button: {
                    text: getI18nString("collaboration.spotlight.bell.presenter.stop"),
                    onClick: stopPresenting
                  },
                  docked: es,
                  isTabAccessible
                });
              case "prompt_to_accept_nomination":
                if (!c || !f) return null;
                return jsx(_$$Y, {
                  autoHide: !1,
                  button: {
                    text: getI18nString("collaboration.spotlight.tooltip.spotlight_me"),
                    onClick: () => {
                      w(multiplayer);
                    }
                  },
                  color: "brand",
                  isTabAccessible,
                  message: {
                    text: renderI18nText("collaboration.spotlight.bell.follower.nominated", {
                      nominatorName: f.name
                    })
                  },
                  onCloseCallback: () => {
                    N(c.sessionID, multiplayer);
                  },
                  progressBar: !1,
                  progressBarDurationMs: 0,
                  renderKey: `${c.sessionID}`,
                  showCloseButton: !0,
                  useSecondaryColor: !0
                });
              case "showing_explainer":
                if (null === c) return null;
                let e = h ? renderI18nText("collaboration.spotlight.bell.explainer.takeover", {
                  currentPresenter: h?.name
                }) : renderI18nText("collaboration.spotlight.bell.explainer");
                return jsx(_$$Y, {
                  autoHide: !1,
                  button: null,
                  color: "brand",
                  docked: !1,
                  isTabAccessible,
                  message: {
                    text: e
                  },
                  progressBar: !1,
                  progressBarDurationMs: 0,
                  renderKey: `${multiplayer.sessionID}`,
                  useSecondaryColor: !0
                });
              case "none":
                return null;
              default:
                throwTypeError(ee);
            }
          })()
        })
      })
    }), jsx(_$$N, {
      children: ed && jsx(_$$P.span, {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        transition: {
          ease: "easeIn",
          duration: Bn
        },
        children: jsx(V, {
          prototypeHeaderHidden,
          children: (() => {
            switch (ei) {
              case "pending_auto_follow":
                {
                  if (!h) return null;
                  let e = h.name;
                  let t = en ? {
                    text: renderI18nText("collaboration.spotlight.bell.follower.spotlighting_presenter_alternate_copy", {
                      presenterName: e
                    }),
                    onClick: completeAutoFollowCallback
                  } : {
                    text: renderI18nText("collaboration.spotlight.bell.follower.switching_to_new_presenter", {
                      presenterName: e
                    })
                  };
                  let i = en ? {
                    text: getI18nString("collaboration.spotlight.bell.follower.not_now"),
                    onClick: er
                  } : null;
                  return jsx(_$$Y, {
                    color: h?.color,
                    message: t,
                    renderKey: `${h.sessionID}`,
                    progressBar: en,
                    progressBarDurationMs: autoFollowDelayMs || 0,
                    autoHide: !1,
                    button: i,
                    ghost: eo,
                    isTabAccessible
                  });
                }
              case "following":
                {
                  let e = multiplayer.observingSessionID === multiplayer.presenterSessionID;
                  if (null === m) return null;
                  let i = m?.name || "";
                  let n = e ? renderI18nText("collaboration.spotlight.bell.follower.spotlight_on_presenter", {
                    observedUserName: i
                  }) : renderI18nText("collaboration.spotlight.bell.follower.following_non_presenter", {
                    observedUserName: i
                  });
                  let s = {
                    text: e ? getI18nString("collaboration.spotlight.bell.stop_following") : getI18nString("collaboration.spotlight.bell.stop"),
                    onClick: () => A(multiplayer)
                  };
                  return jsx(_$$Y, {
                    autoHide: !isAnyMobile,
                    button: s,
                    color: m?.color,
                    docked: es,
                    ghost: eo,
                    isTabAccessible,
                    message: {
                      text: n
                    },
                    progressBar: !1,
                    progressBarDurationMs: 0,
                    renderKey: `${multiplayer.observingSessionID}`
                  });
                }
              case "prompt_to_rejoin":
                let e = () => KI(observeCurrentPresenter, multiplayer, "Spotlight Rejoined", statusChangedAt);
                if (null !== m || null === h) return null;
                let i = renderI18nText("collaboration.spotlight.bell.follower.reprompt_spotlight_on_presenter", {
                  presenterUserName: h.name
                });
                let n = getI18nString("collaboration.spotlight.bell.follower.follow");
                return jsx(_$$Y, {
                  autoHide: !1,
                  button: {
                    text: n,
                    onClick: e
                  },
                  color: h?.color,
                  ghost: eo,
                  isTabAccessible,
                  message: {
                    text: i,
                    onClick: e
                  },
                  onCloseCallback: () => KI(() => L(!0), multiplayer, "Spotlight Rejoin Dismissed", statusChangedAt),
                  progressBar: !1,
                  progressBarDurationMs: 0,
                  renderKey: `${h.sessionID}`,
                  showCloseButton: !0,
                  useSecondaryColor: !0
                });
              case "none":
                return null;
              default:
                throwTypeError(ei);
            }
          })()
        })
      })
    })]
  });
}
export function $$ee0({
  prototypeHeaderHidden: e,
  isTabAccessible: t = !1,
  hideOthersOverlayOverride: i = !1
}) {
  let n = useSelector(({
    multiplayer: e
  }) => e);
  let s = HG();
  let o = By();
  let l = -1 !== n.observingSessionID;
  return (VA({
    multiplayer: n
  }), Pi({
    multiplayer: n
  }), o) ? null : s ? jsx($, {
    multiplayer: n,
    prototypeHeaderHidden: e,
    isTabAccessible: t,
    hideOthersOverlayOverride: i
  }) : l ? jsx(et, {
    prototypeHeaderHidden: e,
    isTabAccessible: t
  }) : null;
}
function et(e) {
  let {
    prototypeHeaderHidden,
    isTabAccessible = !1
  } = e;
  let s = $0();
  let o = selectCurrentFile();
  let l = useSelector(e => e.multiplayer.allUsers.length);
  let d = useRef(l);
  d.current = l;
  Q("none", "following", o, d);
  let c = `${s?.sessionID}`;
  let u = useMemo(() => {
    let e = s?.name || "";
    return {
      text: renderI18nText("collaboration.spotlight.bell.follower.following_non_presenter", {
        observedUserName: e
      })
    };
  }, [s]);
  let p = Z();
  return null === s ? null : jsxs(J, {
    children: [jsx(W, {}), jsx(V, {
      prototypeHeaderHidden,
      children: jsx(_$$Y, {
        color: s?.color,
        message: u,
        renderKey: c,
        autoHide: !isAnyMobile,
        progressBar: !1,
        progressBarDurationMs: 0,
        button: null,
        docked: p,
        isTabAccessible
      })
    })]
  });
}
export function $$ei1() {
  let e = useAtomWithSubscription(a8) === h0.PLAYING;
  let t = useAtomWithSubscription($i);
  if (!e) return null;
  switch (t) {
    case JJ.CANVAS:
      return jsx(J, {
        colorOverride: rK,
        children: jsx(W, {})
      });
    case JJ.PROPERTIES_PANEL:
      return jsx(er, {});
    default:
      return null;
  }
}
function er() {
  let e = H(0);
  let t = iP - 2 * $$U3;
  return jsx("div", {
    "data-testid": "cursor-bot-properties-panel-frame",
    className: KM,
    style: {
      border: `${$$U3}px solid ${rK}`,
      width: `${t}px`,
      height: e.height,
      top: e.top,
      right: 0
    }
  });
}
export function $$en2() {
  return jsx(J, {
    colorOverride: "var(--color-border-brand-strong)",
    children: jsx(W, {})
  });
}
export const Nz = $$ee0;
export const Qe = $$ei1;
export const X5 = $$en2;
export const hH = $$U3;