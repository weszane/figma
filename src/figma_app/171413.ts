import { qg } from "../vendor/149334";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { Vny } from "../figma_app/43951";
let o = "dns_verification";
export function $$l0(e) {
  return e.hasCustomDomain && null != e.verifiedAt ? e.customDomain : e.domain;
}
export function $$d6(e) {
  return e.hasCustomDomain && null != e.verifiedAt ? e.customDomainURL : e.fullURL;
}
export function $$c1(e) {
  return function ({
    activationStatus: e,
    step: t
  }) {
    if (!e) return !1;
    let r = e[t];
    return void 0 !== r && 0 === r.length;
  }({
    activationStatus: e,
    step: o
  });
}
function u({
  activationStatus: e,
  step: t,
  reason: r
}) {
  if (!e) return !1;
  let n = e[t];
  return void 0 !== n && (r ? n.includes(r) : n.length > 0);
}
export function $$p5(e) {
  return u({
    activationStatus: e,
    step: o
  });
}
export function $$_4(e, t) {
  return u({
    activationStatus: e,
    step: o,
    reason: t
  });
}
export function $$h2(e) {
  return u({
    activationStatus: e,
    step: "ssl_cert_generation"
  });
}
export function $$m3(e) {
  let t = Rs(Vny, {
    fileKey: e
  });
  if ("loaded" !== t.status) return null;
  let r = oA(t.data?.siteMount);
  let o = r?.customDomain;
  let l = r?.siteDomain;
  if (!r || !l) return null;
  let d = !!r.pwdConfig;
  if (o) {
    let e = o.activationStatus ? JSON.parse(o.activationStatus) : {};
    let t = o.pairedDomain?.activationStatus ? JSON.parse(o.pairedDomain.activationStatus) : {};
    let r = function (e, t) {
      let r = {};
      for (let n of new Set([...Object.keys(t), ...Object.keys(e)])) {
        let i = [...(t[n] || []), ...(e[n] || [])];
        r[n] = [...new Set(i)];
      }
      return r;
    }(e, t);
    let i = null != o.verifiedAt && (null == o.pairedDomain || null != o.pairedDomain.verifiedAt);
    let a = qg(o.domain).subdomain;
    return {
      fullURL: `https://${l.domain}`,
      domain: l.domain,
      hasCustomDomain: !0,
      customDomain: o.domain,
      customDomainURL: `https://${o.domain}`,
      verifiedAt: o.verifiedAt,
      activationStatus: e,
      pairedDomain: o.pairedDomain ? {
        domain: o.pairedDomain.domain,
        verifiedAt: o.pairedDomain.verifiedAt,
        activationStatus: t
      } : void 0,
      combinedActivationStatus: r,
      customDomainType: a ? "subdomain" : "apex",
      isDomainFullyActivated: i,
      isPasswordProtected: d
    };
  }
  return {
    fullURL: `https://${l.domain}`,
    domain: l.domain,
    hasCustomDomain: !1,
    isPasswordProtected: d
  };
}
export const RT = $$l0;
export const S5 = $$c1;
export const V7 = $$h2;
export const _t = $$m3;
export const dH = $$_4;
export const hr = $$p5;
export const uw = $$d6;