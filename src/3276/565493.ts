import { useState, useEffect, useLayoutEffect, useMemo, useCallback } from "react";
import { useSelector } from "../vendor/514228";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { Yx } from "../3276/926297";
import { aV } from "../figma_app/722362";
import { TA } from "../905/372672";
import { oA } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { ps } from "../figma_app/845611";
import { dI } from "../figma_app/297957";
import { q5 } from "../figma_app/516028";
import { FOrganizationLevelType } from "../figma_app/191312";
import { sog } from "../figma_app/43951";
import { jS } from "../905/136701";
import { x as _$$x } from "../9410/861323";
let x = "read-file-requests";
let b = "read-upgrade-requests";
export function $$y0(e) {
  let [t, n] = useState(!1);
  let a = aV();
  useEffect(() => {
    if (a) return;
    let t = setTimeout(() => n(!0), e);
    return () => clearTimeout(t);
  }, [a, e]);
  return t;
}
export function $$C2(e) {
  let [t, n] = useState();
  let a = aV();
  useLayoutEffect(() => {
    if (a) return;
    let t = () => {
      let t = e.getBoundingClientRect();
      let o = new DOMRect(t.left, t.top, t.width, t.height);
      o.x += 6;
      o.y += 6;
      n(o);
    };
    t();
    window.addEventListener("resize", t);
    return () => window.removeEventListener("resize", t);
  }, [a, e]);
  return t;
}
function w(e, t, n, a) {
  let i = TA();
  let s = P(t);
  return useMemo(() => null === s ? [] : e.filter(e => !s.has(e.id) && n(e) !== i), [e, s, i, n, a]);
}
function j(e, t) {
  let n = new Set([...(P(t) ?? new Set()), ...e.map(e => e.id)]);
  localStorage.setItem(t, JSON.stringify([...n]));
}
export function $$k3() {
  let [e, t] = useState(0);
  let n = Yx();
  let i = function () {
    let e = q5();
    let t = e?.planPublicInfo;
    let {
      parentId,
      type
    } = t?.key ?? {};
    let a = dI();
    let i = Rs(sog({
      planType: type === FOrganizationLevelType.TEAM ? ps.TEAM : ps.ORG,
      planId: parentId ?? "",
      sortOrder: "desc",
      filterParams: JSON.stringify({
        file_key: e?.key
      }),
      firstPageSize: 100
    }), {
      enabled: !!e && !!parentId && !!type && a
    });
    if (!parentId || !type || !e) return [];
    let s = oA(i.data?.accountTypeRequestsFromPlan);
    return s?.filter(e => e.request?.status === "pending") ?? [];
  }();
  let s = useSelector(e => e.modalShown?.type === jS);
  let l = w(n, x, e => e.requesterUserId, e);
  let d = w(i, b, e => e.userId, e);
  let v = useCallback(e => {
    j(l, x);
    j(d, b);
    e && t(e => e + 1);
  }, [l, d]);
  useEffect(() => {
    s && (l.length > 0 || d.length > 0) && v(!0);
  }, [s, v, l.length, d.length]);
  return {
    unreadFileRoleRequests: l,
    unreadUpgradeRequests: d,
    markRequestsAsRead: v
  };
}
function P(e) {
  try {
    return new Set(JSON.parse(localStorage.getItem(e) ?? "[]"));
  } catch (t) {
    reportError(_$$e.MONETIZATION_EXPANSION, Error(`Failed to parse read file requests from storage: ${t}`));
    localStorage.removeItem(e);
    return null;
  }
}
export function $$I1(e) {
  let t = e.map(e => e.requesterUser?.imgUrl ?? null);
  let n = 0 === e.length;
  return _$$x(n, t);
}
export const Bj = $$y0;
export const c4 = $$I1;
export const ic = $$C2;
export const lf = $$k3;