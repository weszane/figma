import { jsxs, jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { lQ } from "../905/934246";
import { $n } from "../905/521428";
import { E as _$$E } from "../905/632989";
import { h3O } from "../figma_app/763686";
import { eD } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { Gc } from "../905/63728";
import { tu, oJ } from "../figma_app/385215";
import { hk } from "../figma_app/632319";
import { tx } from "../905/303541";
import { j7 } from "../905/929976";
import { jD } from "../905/765855";
import { b as _$$b } from "../905/985254";
import { HG } from "../figma_app/440875";
import { T as _$$T, N as _$$N } from "../905/847283";
import { z3 } from "../figma_app/386952";
import { a as _$$a } from "../905/298663";
import { Oc } from "../figma_app/552876";
import { cJ } from "../905/561485";
import { ex } from "../905/524523";
let w = "view_user_profile_tooltip--base--SgkjR tooltip--column--zo-M5 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let C = "view_user_profile_tooltip--handle--RzZyC";
let T = "view_user_profile_tooltip--userHandleAndLink--b3O-1 view_user_profile_tooltip--base--SgkjR tooltip--column--zo-M5 text--fontPos11--2LvXf text--_fontBase--QdLsd";
let k = "view_user_profile_tooltip--line--BVW2y";
export var $$R0 = (e => (e.VIEW_PROFILE = "view-profile", e.EDIT_NAME = "edit-name", e.START_OBSERVE = "start-observe", e.STOP_OBSERVE = "stop-observe", e.START_PRESENTING = "start-presenting", e.STOP_PRESENTING = "stop-presenting", e.FOLLOW_PRESENTER = "follow-presenter", e.NOMINATE_PRESENTER = "nominate-presenter", e.NONE = "none", e))($$R0 || {});
function N(e) {
  return jsxs("div", {
    className: w,
    children: [jsx("span", {
      className: C,
      dir: "auto",
      children: e.userHandle
    }), jsx("div", {
      className: k
    }), jsx($n, {
      variant: "primary",
      onClick: e.actionCallback,
      children: e.actionText
    })]
  });
}
function P(e) {
  return jsxs(_$$E, {
    onClick: e.actionCallback,
    className: T,
    children: [jsx("span", {
      className: C,
      dir: "auto",
      children: e.userHandle
    }), e.actionText]
  });
}
function O(e) {
  let t = wA();
  let {
    buttonCallback,
    linkCallback,
    disabled
  } = e;
  let c = useCallback(e => {
    linkCallback(e);
    t(jD());
  }, [linkCallback, t]);
  let u = useCallback(e => {
    buttonCallback && (buttonCallback(e), t(jD()));
  }, [buttonCallback, t]);
  let p = jsxs(_$$E, {
    onClick: c,
    className: T,
    disabled,
    children: [jsx("span", {
      className: C,
      dir: "auto",
      children: e.userHandle
    }), e.linkText]
  });
  return jsxs("div", {
    className: w,
    "data-preferred-theme": "secondary" === e.buttonVariant ? "dark" : void 0,
    children: [p, jsx("div", {
      className: k
    }), jsx($n, {
      variant: e.buttonVariant,
      onClick: u,
      disabled: "secondary" === e.buttonVariant && !e.buttonCallback,
      children: e.buttonText
    })]
  });
}
function D(e) {
  return jsx(P, {
    actionText: null,
    actionCallback: lQ,
    userHandle: e.userHandle
  });
}
let L = {
  "edit-name": function (e) {
    let t = wA();
    return jsx(P, {
      actionText: tx("avatar.tooltip.edit_name"),
      actionCallback: e => {
        e.stopPropagation();
        e.preventDefault();
        t(j7({
          type: "multiplayer-nickname-dropdown"
        }));
      },
      userHandle: e.userHandle
    });
  },
  "start-observe": function (e) {
    let t = wA();
    let i = HG();
    if (Oc()) return jsx(D, {
      ...e
    });
    let r = i => {
      i.stopPropagation();
      h3O && null != e.userSessionID && (h3O.observeUser(e.userSessionID), t(_$$b({
        aware_of_observation_mode: !0
      })));
    };
    return i ? jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.click_to_follow"),
      actionCallback: r,
      userHandle: e.userHandle
    }) : jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.legacy.click_to_observe_user"),
      actionCallback: r,
      userHandle: e.userHandle
    });
  },
  "stop-observe": function (e) {
    let t = HG();
    let i = e => {
      e.stopPropagation();
      h3O.observeUser(-1);
    };
    return t ? jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.click_to_unfollow"),
      actionCallback: i,
      userHandle: e.userHandle
    }) : jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.legacy.click_to_stop_observing_user"),
      actionCallback: i,
      userHandle: e.userHandle
    });
  },
  "view-profile": function (e) {
    let t = Gc(t => {
      t.stopPropagation();
      Ay.redirect(e.profileUrl, eD ? void 0 : "_blank");
    });
    return jsx(P, {
      actionText: tx("avatar.tooltip.view_profile"),
      actionCallback: t,
      userHandle: e.userHandle
    });
  },
  "start-presenting": function (e) {
    let t = _$$T();
    let i = z3();
    return jsx(N, {
      actionText: tx("collaboration.spotlight.tooltip.spotlight_me"),
      actionCallback: e => {
        e.stopPropagation();
        e.preventDefault();
        t(_$$N.START);
        "prototype" === i ? hk()?.startPresenting() : h3O.startPresenting();
      },
      userHandle: e.userHandle
    });
  },
  "stop-presenting": function (e) {
    return jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.stop_presenting"),
      actionCallback: e => {
        e.stopPropagation();
        e.preventDefault();
        h3O.stopPresenting();
      },
      userHandle: e.userHandle
    });
  },
  "follow-presenter": function (e) {
    let t = wA();
    return jsx(P, {
      actionText: tx("collaboration.spotlight.tooltip.click_to_follow"),
      actionCallback: i => {
        i.stopPropagation();
        null != e.userSessionID && (h3O.observeUser(e.userSessionID), t(_$$b({
          aware_of_observation_mode: !0
        })));
      },
      userHandle: tx("avatar.tooltip.spotlight_user_handle", {
        handle: e.userHandle
      })
    });
  },
  "nominate-presenter": function (e) {
    let t = d4(e => e.multiplayer);
    let i = cJ();
    let s = t && t.sessionNominatedByCurrentUser === e.userSessionID;
    let o = tu();
    let l = useCallback(() => {
      o(e.userSessionID, t);
    }, [o, e.userSessionID, t]);
    let d = oJ();
    let h = useCallback(() => {
      null != e.userSessionID && d(e.userSessionID, t);
    }, [e.userSessionID, d, t]);
    let f = Gc(t => {
      t.stopPropagation();
      Ay.redirect(e.profileUrl, eD ? void 0 : "_blank");
    });
    let _ = i && !!e.sitesViewState && _$$a(e.sitesViewState);
    return s ? jsx(O, {
      linkText: tx("avatar.tooltip.view_profile"),
      linkCallback: f,
      buttonText: tx("collaboration.spotlight.tooltip.cancel_ask_to_spotlight"),
      buttonCallback: h,
      buttonVariant: "secondary",
      userHandle: e.userHandle
    }) : jsx(O, {
      linkText: tx("avatar.tooltip.view_profile"),
      linkCallback: f,
      disabled: _,
      buttonText: tx("collaboration.spotlight.tooltip.ask_to_spotlight"),
      buttonCallback: l,
      buttonVariant: "primary",
      userHandle: e.userHandle
    });
  },
  none: D
};
let $$F1 = ex("view_user_profile", function (e) {
  let {
    action,
    profileUrl,
    userHandle,
    userSessionID,
    sitesViewState
  } = e;
  let o = L[action];
  return jsx(o, {
    profileUrl,
    userHandle,
    userSessionID,
    sitesViewState
  });
}, e => {
  let t;
  let i;
  let n = e.getAttribute("data-tooltip-user-profile-url") || "";
  let r = e.getAttribute("data-tooltip-user-handle") || "";
  let a = e.getAttribute("data-tooltip-user-session-id");
  let s = e.getAttribute("data-tooltip-user-view-state");
  null != a && Number.isNaN(t = Number(a)) && (t = void 0);
  s && !isNaN(parseInt(s)) && (i = parseInt(s));
  return {
    profileUrl: n,
    userHandle: r,
    userSessionID: t,
    action: e.getAttribute("data-tooltip-click-action"),
    unconstrainWidth: "true" === e.getAttribute("data-tooltip-unconstrain-width"),
    sitesViewState: i
  };
});
export const c = $$R0;
export const M = $$F1;