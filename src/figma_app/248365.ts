import { jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { fW } from "../figma_app/103728";
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { DT } from "../figma_app/320164";
import { Ay as _$$Ay } from "../905/612521";
import { qB } from "../905/862321";
import { tl } from "../figma_app/781453";
import { zq } from "../figma_app/598412";
import { A } from "../figma_app/122760";
import { figmaAuthModal } from "../figma_app/727769";
var m = (e => (e[e.CLOSED = 0] = "CLOSED", e[e.PRELOAD = 1] = "PRELOAD", e[e.OPEN = 2] = "OPEN", e))(m || {});
let g = `/login_iframe?with_community_header=true&type=fixedmodal&one_tap_origin=${DT.COMMUNITY}&locale=${zq() ?? "en"}`;
let f = atom({
  state: 0,
  url: g,
  mounted: !1
});
let E = atom(!1);
export function $$y1(e = qB.SIGN_IN, t = {}) {
  if (t.preventDefaultRedirect && (t.authOptions ??= {}, t.authOptions.redirect_url = _$$Ay.location.pathname + _$$Ay.location.search), atomStoreManager.get(E)) !function (e) {
    let t = document.querySelector("iframe#figma-auth-iframe");
    t?.contentWindow?.postMessage(e, location.origin);
  }({
    type: tl,
    options: {
      formState: e,
      redirectUrl: t.authOptions?.redirect_url
    }
  });else {
    let r = new URLSearchParams(t.authOptions);
    let n = "/login_iframe";
    e === qB.SIGN_UP && r.append("form_state", "sign_up");
    r.append("one_tap_origin", DT.COMMUNITY);
    r.append("type", "fixedmodal");
    r.append("with_community_header", "true");
    let i = r.toString();
    let a = i.length ? [n, i].join("?") : n;
    atomStoreManager.set(f, e => ({
      ...e,
      url: a
    }));
  }
  fW();
  atomStoreManager.set(f, e => ({
    ...e,
    state: 2
  }));
}
function b() {
  atomStoreManager.set(f, e => ({
    ...e,
    state: 0
  }));
}
export function $$T0() {
  let e = useRef(null);
  let [t, r] = useAtomValueAndSetter(E);
  let {
    url,
    state
  } = useAtomWithSubscription(f);
  let [d, c] = useState(!1);
  !function (e) {
    let t = useRef();
    useEffect(() => {
      t.current = e;
    }, [e]);
    useEffect(() => {
      let e = e => {
        t.current?.(e);
      };
      window.addEventListener("message", e, !1);
      return () => {
        window.removeEventListener("message", e, !1);
      };
    }, []);
  }(t => {
    e.current && t.origin === location.origin && (t.data?.type === "trackEvent" && t.data?.event === "Auth Actions" && t.data?.properties?.eventSubtype === "show_auth_page" && r(!0), "trackEvent" === t.data.type && trackEventAnalytics(t.data.event, t.data.properties, t.data.options), "auth_iframe_hide" === t.data.type && b(), "auth_iframe_heartbeat" === t.data.type && atomStoreManager.set(f, e => ({
      ...e,
      mounted: !0
    })), "auth_iframe_show" === t.data.type && atomStoreManager.set(f, e => ({
      ...e,
      state: 2
    })));
  });
  useEffect(() => {
    if (e.current && (state > 0 && !d && c(!0), 2 === state && e.current.contentDocument)) {
      let t = e.current.contentDocument?.getElementsByTagName("input")[0];
      t?.focus();
    }
  }, [state, d]);
  return jsx(A, {
    className: figmaAuthModal,
    style: {
      visibility: 2 === state ? "visible" : "hidden"
    },
    showInnerModal: t,
    onClick: b,
    children: state > 0 || d ? jsx("iframe", {
      id: "figma-auth-iframe",
      "data-testid": "figma-auth-iframe",
      ref: e,
      title: "Figma Auth",
      src: url
    }) : jsx(Fragment, {})
  });
}
export const Ay = $$T0;
export const FL = $$y1;