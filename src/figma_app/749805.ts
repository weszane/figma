import { getFeatureFlags } from "../905/601108";
import i from "../vendor/879378";
import { GZ } from "../905/508367";
import { Ay } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { P as _$$P } from "../905/724705";
import { XHR } from "../905/910117";
import { U2 } from "../figma_app/545293";
import { ES, to } from "../905/156213";
import { Pg } from "../figma_app/314264";
import { z4 } from "../905/37051";
import { $g } from "../figma_app/415217";
import { N as _$$N } from "../905/517193";
import { xn, eN } from "../905/498952";
import { eD } from "../figma_app/876459";
import { Q1, Ji, Ay as _$$Ay3 } from "../figma_app/778880";
var a = i;
var b = !1;
let T = null;
let I = null;
let S = null;
let v = ["mousemove", "mousedown", "keydown", "touchstart", "touchmove", "wheel"];
function A(e, t, r, i, l, A) {
  if (Q1() || Ji() || _$$Ay3.isIpadNative) return;
  let x = `last-active-at-${e.email}`;
  let N = "idle_timeout_last_active_at_change";
  let C = GZ();
  let w = C && "embed" === l;
  let O = C && "integration" === l;
  let R = .05 * t;
  let L = Math.min(60, t / 2);
  let P = new _$$P();
  let D = e => {
    localStorage.setItem(x, e.toString());
    P.sendToAllTabs(N);
  };
  D(r);
  let k = () => {
    document.hasFocus() && XHR.post(`/api/user/${e.id}/idle_timeout_last_active_at`, {
      is_embed: C.toString() && !z4.getIsExtension()
    }).then(e => {
      let t = e.data.meta.idle_timeout_last_active_at;
      t && D(t);
    }).catch(e => {
      401 === e.status && F();
    });
  };
  let M = () => !!A && A.getState().modalShown?.type === xn;
  let F = () => {
    if (A && A?.getState().authedUsers.orderedIds.length === 1 && (Pg(), U2.clear()), w) Ay.reload("idleSessionTimeout-embed"); else if (O) {
      let {
        pathname,
        search
      } = Ay.location;
      let r = `${pathname}${search}&integration_host=msft`;
      window.location.replace(r);
    } else z4.getIsExtension() && getFeatureFlags().dt_dev_mode_vscode_idle_timeout ? $g() : Ay.redirect(`/idle_timeout?fuid=${e.id}&redirect_uri=${encodeURIComponent(window.location.href)}`);
  };
  let j = () => Math.floor(Date.now() / 1e3);
  S && v.forEach(e => {
    document.removeEventListener(e, S);
  });
  S = a()(k, 1e3 * R, {
    trailing: !1,
    leading: !0
  });
  v.forEach(e => {
    document.addEventListener(e, S);
  });
  let U = () => {
    I && clearTimeout(I);
    T && clearTimeout(T);
    !M() || document.hasFocus() || eD || A?.dispatch(ES(eN));
    let r = parseInt(localStorage.getItem(x)) + t - j();
    T = setTimeout(() => {
      _$$N.getIdleTimeoutPrecheck({
        fuid: e.id
      }).then(e => {
        let r = e.data.meta.idle_timeout_last_active_at;
        r && r + t >= j() ? D(r) : F();
      }).catch(e => {
        F();
      });
    }, 1e3 * r);
    w || (I = setTimeout(() => {
      M() || A?.dispatch(to({
        type: eN,
        data: {
          orgName: i,
          duration: t,
          onHide: () => {
            k();
          }
        }
      }));
    }, 1e3 * (r - L)));
  };
  P.register(N, () => {
    U();
  });
  U();
  b = !0;
}
export function $$x2() {
  return b;
}
export function $$N0(e, t) {
  let {
    user_data,
    frame_context
  } = getInitialOptions();
  user_data && (t.duration_in_secs && t.last_active_at && t.org_name ? A(user_data, t.duration_in_secs, t.last_active_at, t.org_name, frame_context?.type, e) : (b = !1, I && clearTimeout(I), T && clearTimeout(T), S && v.forEach(e => {
    document.removeEventListener(e, S);
  })));
}
export function $$C1(e) {
  let {
    user_data,
    idle_timeout_duration_in_secs,
    idle_timeout_last_active_at,
    idle_timeout_org_name,
    frame_context
  } = getInitialOptions();
  user_data && idle_timeout_duration_in_secs && idle_timeout_last_active_at && idle_timeout_org_name && !b && A(user_data, idle_timeout_duration_in_secs, idle_timeout_last_active_at, idle_timeout_org_name, frame_context?.type, e);
}
export const K7 = $$N0;
export const R_ = $$C1;
export const w5 = $$x2; 
