import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
import { wA } from "../vendor/514228";
import { KF } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { jM } from "../905/508367";
import { V } from "../905/749397";
import { W8, _B } from "../figma_app/320164";
import { J } from "../905/931050";
import { getInitialOptions, isGovCluster } from "../figma_app/169182";
import { r as _$$r } from "../905/520829";
import { o4 } from "../figma_app/778880";
import { WY, My, Qg } from "../905/194276";
import { g as _$$g } from "../905/248178";
import { S$ } from "../figma_app/591738";
import { o as _$$o } from "../905/621736";
import { d as _$$d } from "../905/241150";
import { z } from "../905/819918";
function T({
  origin: e,
  iFrameHandler: t,
  overrideUseFedCMPrompt: r
}) {
  let n = window;
  try {
    window.origin === window.parent.origin && (n = window.parent || window);
  } catch {}
  let o = J(() => _$$o(n), [n]);
  let h = wA();
  let y = !!S$();
  let T = r ?? y;
  let I = useRef(!1);
  let S = useCallback(async ({
    credential: r
  }) => {
    _$$g("google_one_tap_login_start", e, {}, {
      forwardToDatadog: !0
    });
    let i = z(r);
    if (!i) return;
    let a = {
      name: i.name,
      token: r,
      tokenType: V.ID_TOKEN
    };
    if (t) {
      t(a);
      return;
    }
    try {
      h(WY({
        redirectUrl: function () {
          let e = jM();
          try {
            window.origin === window.parent.origin && (e = window.parent.location.pathname + window.parent.location.search);
          } catch {}
          return e;
        }()
      }));
      let t = await W8(a, {
        dispatch: h,
        apiUrl: _B,
        origin: e
      });
      "mfa" === t.type && n !== window && n.postMessage({
        type: "auth_iframe_show"
      }, "*");
      "login" === t.type && (_$$g("google_one_tap_login_complete", e, {}, {
        forwardToDatadog: !0
      }), h(My({
        userId: t.user.id
      })));
    } catch (e) {
      n !== window && n.postMessage({
        type: "auth_iframe_show"
      }, "*");
      h(Qg({
        message: e.message
      }));
    }
  }, [e, t, h, n]);
  useEffect(() => {
    if (o.status === _$$r.SUCCESS && !I.current) {
      I.current = !0;
      let t = o.value;
      let {
        google_client_id
      } = getInitialOptions();
      KF(void 0 !== google_client_id, "google_client_id should be defined in initialOptions");
      t.accounts.id.initialize({
        client_id: google_client_id,
        callback: S,
        cancel_on_tap_outside: !1,
        itp_support: !0,
        use_fedcm_for_prompt: T
      });
      t.accounts.id.prompt(t => {
        if (T) {
          let r = t.getMomentType();
          _$$g("google_one_tap_prompt_moment", e, {
            momentType: r,
            reason: "dismissed" === r ? t.getDismissedReason() : void 0
          }, {
            forwardToDatadog: !0
          });
          return;
        }
        "display" === t.getMomentType() ? t.isDisplayed() ? _$$g("google_one_tap_prompt_displayed", e, {}, {
          forwardToDatadog: !0
        }) : _$$g("google_one_tap_prompt_display_failed", e, {
          reason: t.getNotDisplayedReason()
        }, {
          forwardToDatadog: !0
        }) : "skipped" === t.getMomentType() ? _$$g("google_one_tap_prompt_skipped", e, {
          reason: t.getSkippedReason()
        }, {
          forwardToDatadog: !0
        }) : "dismissed" === t.getMomentType() && _$$g("google_one_tap_prompt_dismissed", e, {
          reason: t.getDismissedReason()
        }, {
          forwardToDatadog: !0
        });
      });
    }
  }, [o, S, e, T]);
  return null;
}
export function $$I0(e) {
  return getFeatureFlags()?.google_one_tap_killswitch || isGovCluster() || e.hideOnMobile && o4() ? null : jsx(_$$d, {
    children: jsx(T, {
      ...e
    })
  });
}
export const P = $$I0;