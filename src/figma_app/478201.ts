import { useState, useEffect } from "react";
import { getFeatureFlags } from "../905/601108";
import { eU, md } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { D } from "../905/33172";
export let $$l1 = eU(!1);
function d(e, t = !1) {
  if (!getFeatureFlags().dt_code_connect_js_iframe || !e) return;
  t && console.log("Code Connect Debug: iframe JS to be evaluated:", {
    js: e
  });
  let r = document.createElement("iframe");
  r.style.cssText = "display: none";
  r.setAttribute("sandbox", "allow-scripts");
  r.srcdoc = D(getInitialOptions().csp_nonce, window.location.origin, !getFeatureFlags().dt_code_connect_without_eval);
  document.body.appendChild(r);
  return r;
}
function c(e, t, r, n) {
  t && "null" === e.origin && e.source === t.contentWindow && ("IFRAME_READY" === e.data.type ? t.contentWindow?.postMessage({
    type: "EVAL",
    data: r
  }, "*") : "EVAL_RESPONSE" === e.data.type && (document.body.removeChild(t), n(e.data.data)));
}
export function $$u0(e, t = !1) {
  let r = d(e, t);
  return new Promise(t => {
    window.addEventListener("message", function n(i) {
      c(i, r, e, e => {
        window.removeEventListener("message", n);
        t(e);
      });
    }, !1);
  });
}
export function $$p2(e) {
  let [t, r] = useState();
  let i = md($$l1);
  useEffect(() => {
    let t = d(e, i);
    if (!t) {
      r(void 0);
      return;
    }
    function n(i) {
      c(i, t, e, e => {
        window.removeEventListener("message", n);
        r(e);
      });
    }
    window.addEventListener("message", n, !1);
    return () => {
      try {
        document.body.removeChild(t);
        window.removeEventListener("message", n);
      } catch (e) {}
    };
  }, [e, i]);
  return t;
}
export const Nv = $$u0;
export const Oq = $$l1;
export const yT = $$p2;