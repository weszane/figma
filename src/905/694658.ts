import { jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { eu } from "../vendor/421718";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { getInitialOptions, isDevEnvironment } from "../figma_app/169182";
import { reportError } from "../905/11";
import { getFalseValue } from "../figma_app/897289";
import { z as _$$z } from "../905/239603";
import { YV, td } from "../figma_app/181241";
import { getI18nState } from "../figma_app/363242";
import { D as _$$D } from "../905/347702";
let n;
let g = _$$z.object({
  arkose_on_for_user: _$$z.boolean(),
  arkose_required_for_user: _$$z.boolean()
});
let f = new class {
  constructor() {
    this.ArkoseIsOnValidator = YV("ArkoseIsOnValidator", g, "xrv_api_arkose_is_on", !0);
    this.isArkoseOn = e => {
      let {
        captcha_action,
        ...i
      } = e;
      let n = {
        ...i,
        captcha_action: String(captcha_action)
      };
      return this.ArkoseIsOnValidator.validate(async ({
        xr: e
      }) => await e.post("/api/arkose/on_for_user", td.toAPIParameters({
        ...n
      }), {
        retryCount: 10
      }));
    };
  }
}();
var y = (e => (e.FRAME_MOUNTED = "frame-mounted", e.JS_LOADED = "js-loaded", e.CHALLENGE_LOADED = "loaded", e.CHALLENGE_SUPPRESSED = "suppressed", e.CHALLENGE_SHOWN = "challenged", e.IFRAMESIZE = "iframesize", e.COMPLETED = "completed", e.ERRORED = "errored", e.LOAD_TIMED_OUT = "timed-out", e.ARKOSE_IS_OFF_FOR_USER = "arkose-is-off-for-user", e))(y || {});
var b = (e => (e.FRAME_FAILED_TO_LOAD_IN_TIME = "frame failed to load in time", e.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FRAME_NOT_MOUNTED = "getArkoseToken failed because Arkose frame was never mounted", e.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED = "getArkoseToken failed because Arkose failed", e.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_IS_OFF_FOR_USER = "getArkoseToken failed because Arkose is off for user", e.MISSING_ARKOSE_TOKEN_WHEN_GETTING_ARKOSE_TOKEN = "getArkoseToken missing token despite frame being ready", e.GETTING_ARKOSE_TOKEN_SUCCEEDED = "success", e))(b || {});
var v = (e => (e.ERROR_HANDLING_MESSAGE = "error handling message", e))(v || {});
var I = (e => (e.REACHABILITY = "reachability", e))(I || {});
var E = (e => (e.IS_ARKOSE_ON_API_CALL_FAILED = "Is Arkose On API call failed", e.IS_ARKOSE_ON = "Is Arkose On", e))(E || {});
let x = {
  ...y,
  ...b,
  ...v,
  ...I,
  ...E
};
var S = (e => (e.CHALLENGE_JS_LOADED = "challenge-js-loaded", e.CHALLENGE_LOADED = "challenge-loaded", e.CHALLENGE_SUPPRESSED = "challenge-suppressed", e.CHALLENGE_SHOWN = "challenge-shown", e.CHALLENGE_IFRAMESIZE = "challenge-iframesize", e.CHALLENGE_COMPLETE = "challenge-complete", e.CHALLENGE_ERROR = "challenge-error", e))(S || {});
let w = {
  "challenge-js-loaded": "js-loaded",
  "challenge-loaded": "loaded",
  "challenge-suppressed": "suppressed",
  "challenge-shown": "challenged",
  "challenge-iframesize": "iframesize",
  "challenge-complete": "completed",
  "challenge-error": "errored"
};
let C = () => !T() && !k() && !N();
let T = () => "undefined" == typeof window || void 0 === window.arkose;
let k = () => "frame-mounted" === window.arkose;
let R = () => "arkose-is-off-for-user" === window.arkose;
let N = () => P() || O();
let P = () => "errored" === window.arkose;
let O = () => "timed-out" === window.arkose;
let D = () => "completed" === window.arkose;
let L = new eu();
let F = _$$D(e => e ? 864e5 : 1e4);
let M = _$$D(() => new Date().getTime());
let j = _$$D(() => !getFalseValue());
let U = ({
  event: e,
  prevFormState: t,
  getArkoseTokenAction: i,
  error: n,
  reachability: r,
  isArkoseOnAPICheckError: a,
  arkoseIsOnForUserProperties: s
}) => {
  if ("iframesize" === e) return;
  let o = e.toString();
  (e === x.ERRORED || e === x.ERROR_HANDLING_MESSAGE) && n && (o = `${e}: ${n}`);
  let d = {
    arkose_event: o
  };
  void 0 !== window.mountTime && (d.elapsed_time_since_mount_in_ms = M() - window.mountTime);
  t && (d.prev_form_state = t.toString());
  i && (d.get_arkose_token_action = String(i));
  a && (d.is_arkose_on_api_check_action = String(a.action), d.is_arkose_on_api_check_auth_param = a.authParam, d.is_arkose_on_api_check_error = a.error, d.is_arkose_on_api_check_error_status = a.status);
  s && (d.arkose_is_on_for_user_action = String(s.action), d.arkose_is_on_for_user_result_from_api = s.resultFromAPI, d.arkose_is_required_from_api = s.requiredFromAPI);
  e === x.REACHABILITY && r && (d.reachability = Object.entries(r).map(e => `${e[0]}|${e[1]}`).join(","));
  j() && trackEventAnalytics("Arkose", d, {
    forwardToDatadog: !0,
    batchRequest: !1
  });
};
export function $$B0(e) {
  let t;
  let i;
  let n = useRef(null);
  let s = t => {
    let i;
    if (N()) return;
    let n = JSON.parse(t.data);
    if (!Object.values(S).includes(n.eventId)) return;
    let r = w[i = n.eventId];
    switch (window.arkose = r.toString(), U({
      event: r,
      prevFormState: e.prevFormState,
      error: n.payload.error?.error
    }), i) {
      case "challenge-loaded":
        e.onLoaded();
        break;
      case "challenge-shown":
        e.onChallenge();
        break;
      case "challenge-iframesize":
        let a = document.getElementById("arkoseFrame");
        a && (a.width = n.payload.frameWidth, a.height = n.payload.frameHeight);
        break;
      case "challenge-complete":
        window.arkoseResult = n.payload.sessionToken;
        e.onCompleted();
        break;
      case "challenge-error":
        window.arkoseResult = r.toString();
    }
  };
  let o = t => {
    t.origin === getInitialOptions().arkose_origin && L.runExclusive(() => {
      s(t);
    }).catch(t => {
      U({
        event: x.ERROR_HANDLING_MESSAGE,
        prevFormState: e.prevFormState,
        error: t
      });
    });
  };
  let l = async (n, r) => await L.runExclusive(async () => {
    if (i) throw i;
    if (t) return t;
    try {
      t = await Y(n, e.prevFormState, r);
    } catch (e) {
      i = e;
      return e;
    }
    U({
      event: x.IS_ARKOSE_ON,
      arkoseIsOnForUserProperties: {
        action: n,
        resultFromAPI: t.arkose_on_for_user,
        requiredFromAPI: t.arkose_required_for_user
      }
    });
    return t;
  });
  _$$h(() => {
    l(e.arkoseAction, e.onFailed).then(t => {
      t.arkose_on_for_user && V(e.prevFormState);
    }).catch(e => {});
  });
  _$$h(() => {
    let t = () => {
      window.removeEventListener("message", o);
    };
    l(e.arkoseAction, e.onFailed).then(t => {
      t.arkose_on_for_user ? (window.addEventListener("message", o), z(e, n, t.arkose_required_for_user)) : (window.arkose = "arkose-is-off-for-user", e.onCompleted());
    }).catch(e => {
      if (t(), isDevEnvironment()) throw e;
    });
    return t;
  });
  let u = getI18nState().getPrimaryLocale(!1);
  let p = getInitialOptions().arkose_challenge_public_key;
  let m = getInitialOptions().arkose_frame_url + "?publicKey=" + p + "&locale=" + u;
  return jsx("div", {
    className: "arkose--arkoseFrameContainer--HaPFq",
    children: jsx("iframe", {
      id: "arkoseFrame",
      height: 0,
      width: 0,
      src: m,
      title: "Arkose Frame",
      className: "arkose--arkoseFrame--ErXcx"
    })
  });
}
let V = _$$D(e => {
  let t = getInitialOptions().arkose_challenge_public_key;
  let i = ["https://www.arkoselabs.com", "https://status.arkoselabs.com", "https://status.arkoselabs.com/api/v2/status.json", `https://figma-api.arkoselabs.com/v2/${t}/api.js`, getInitialOptions().arkose_frame_url, "https://verify.figma.com/arkose_frame.html"];
  Promise.allSettled(i.map(e => G(e))).then(t => {
    let n = {};
    t.forEach((e, t) => {
      n[i[t]] = "fulfilled" === e.status;
    });
    U({
      event: x.REACHABILITY,
      prevFormState: e,
      reachability: n
    });
  });
});
let G = _$$D(async e => {
  try {
    await fetch(e, {
      method: "HEAD",
      mode: "no-cors"
    });
    return Promise.resolve();
  } catch (e) {
    return Promise.reject();
  }
});
let z = _$$D((e, t, i) => {
  Object.defineProperty(window, "mountTime", {
    value: M(),
    configurable: !0,
    enumerable: !0
  });
  Promise.race([new Promise((n, r) => {
    t.current = setTimeout(() => {
      L.runExclusive(() => {
        C() ? n(window.arkose) : (delete window.arkose, window.arkose = "timed-out", U({
          event: x.FRAME_FAILED_TO_LOAD_IN_TIME,
          prevFormState: e.prevFormState
        }), r(Error("Arkose script failed to load.")));
      }).then(null);
    }, F(i));
  }), new Promise((e, t) => {
    Object.defineProperty(window, "arkose", {
      get: () => "frame-mounted",
      set: i => {
        L.runExclusive(() => {
          delete window.arkose;
          window.arkose = i;
          N() ? t(Error("Arkose script failed to load.")) : e(i);
        }).then(null);
      },
      configurable: !0,
      enumerable: !0
    });
  })]).then(null, t => {
    window.arkoseResult = window.arkose;
    e.onCompleted();
  }).$$finally(() => {
    H(t);
  });
});
let H = _$$D(e => {
  null !== e.current && (clearTimeout(e.current), e.current = null);
});
export async function $$W1(e, t) {
  let i;
  await L.runExclusive(() => {
    i = R() ? (U({
      event: x.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_IS_OFF_FOR_USER,
      prevFormState: t,
      getArkoseTokenAction: e
    }), Promise.reject(Error("Can't get token because Arkose is off for the user"))) : T() ? (U({
      event: x.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FRAME_NOT_MOUNTED,
      prevFormState: t,
      getArkoseTokenAction: e
    }), Promise.reject(Error("Can't get token because Arkose frame was never mounted"))) : N() ? (U({
      event: x.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED,
      prevFormState: t,
      getArkoseTokenAction: e
    }), Promise.reject(Error("Can't get token because Arkose challenge failed"))) : D() ? void 0 === window.arkoseResult || null === window.arkoseResult ? (U({
      event: x.MISSING_ARKOSE_TOKEN_WHEN_GETTING_ARKOSE_TOKEN,
      prevFormState: t,
      getArkoseTokenAction: e
    }), Promise.reject(Error("Arkose token missing despite challenge being completed!"))) : (U({
      event: x.GETTING_ARKOSE_TOKEN_SUCCEEDED,
      prevFormState: t,
      getArkoseTokenAction: e
    }), Promise.resolve(window.arkoseResult)) : new Promise((i, n) => {
      Object.defineProperty(window, "arkoseResult", {
        set: r => {
          L.runExclusive(() => {
            null != r && (N() ? (U({
              event: x.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED,
              prevFormState: t,
              getArkoseTokenAction: e
            }), n(Error("Can't get token because Arkose challenge failed"))) : (delete window.arkoseResult, window.arkoseResult = r, U({
              event: x.GETTING_ARKOSE_TOKEN_SUCCEEDED,
              prevFormState: t,
              getArkoseTokenAction: e
            }), i(r)));
          }).then(null);
        },
        configurable: !0,
        enumerable: !0
      });
    });
  });
  return i;
}
export async function $$K2(e) {
  await L.runExclusive(() => {
    n = "email" in e ? {
      email: e.email
    } : {
      token: e.googleUserInfo.token,
      token_type: e.googleUserInfo.tokenType
    };
  });
}
async function Y(e, t, i) {
  let r;
  let a;
  if (n && 0 !== Object.keys(n).length) try {
    return (await f.isArkoseOn({
      ...n,
      captcha_action: e
    })).data.meta;
  } catch (t) {
    r = t;
    a = t.cause?.message || t.data?.message || t.message || "Arkose API call failed";
    U({
      event: x.IS_ARKOSE_ON_API_CALL_FAILED,
      isArkoseOnAPICheckError: {
        action: e,
        authParam: "email" in n ? "email" : "google_token",
        error: a,
        status: t.status
      }
    });
  } else {
    r = Error(a = `Arkose API param is not set or empty for '${t}' form state.`);
    U({
      event: x.IS_ARKOSE_ON_API_CALL_FAILED,
      isArkoseOnAPICheckError: {
        action: e,
        error: a
      }
    });
  }
  i(r, a);
  reportError(_$$e.PRODUCT_SECURITY, Error(a));
  return r;
}
export const p8 = $$B0;
export const Hc = $$W1;
export const sT = $$K2;