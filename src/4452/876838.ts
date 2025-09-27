import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { findMatchingValue } from "../905/807535";
import { getFeatureFlags } from "../905/601108";
import { getResourceDataOrFallback } from "../905/663269";
import { subscribeAndAwaitData } from "../905/553831";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { ps, Xv } from "../figma_app/845611";
import { getQueryParam, removeQueryParam } from "../905/609392";
import { AccountTypeRequestByIdView } from "../figma_app/43951";
import { accountTypeRequestHandler } from "../905/281010";
var m = (e => (e.AdminUpgradeEmail = "admin_upgrade_email", e.UnknownDeeplink = "unknown_deeplink", e))(m || {});
let h = {
  approvalRequestId: "approvalRequestId",
  entryPoint: "entryPoint"
};
export async function $$x0(e, t) {
  try {
    let a = await subscribeAndAwaitData(AccountTypeRequestByIdView, {
      requestId: e
    });
    let s = getResourceDataOrFallback(a.accountTypeRequest);
    if (!s) {
      v(t, getI18nString("admin_dashboard.requests.not_found"));
      return;
    }
    if ("pending" !== s.status) {
      t(VisualBellActions.enqueue({
        message: getI18nString("admin_dashboard.requests.this_request_has_already_been_handled"),
        type: s?.status === "approved" ? "requests-approved" : "requests-denied"
      }));
      return;
    }
    return s;
  } catch (e) {
    v(t);
  }
}
export function $$f1() {
  let e = useDispatch();
  let [t, a] = useState(!1);
  let [l, o] = useState();
  let d = getFeatureFlags().one_click_approve_on_recents;
  useEffect(() => {
    async function t(t) {
      let s = await $$x0(t, e);
      s ? o(s) : a(!0);
    }
    if (!d) return;
    let s = getQueryParam(h.approvalRequestId);
    s && (removeQueryParam(h.approvalRequestId), t(s));
  }, [e, d]);
  useEffect(() => {
    async function s(t) {
      let s = getQueryParam(h.entryPoint);
      let n = findMatchingValue(m, s || "") ?? m.UnknownDeeplink;
      let i = findMatchingValue(ps, t.planType) || ps.TEAM;
      try {
        let a = await accountTypeRequestHandler.approveRequests({
          plan_id: t.planId,
          plan_type: i,
          selection_method: Xv.DEEPLINK,
          included_request_ids: [t.id],
          entry_point: n
        });
        if (200 === a.status) {
          let a = t.requestableOrgUser?.user?.name ?? t.requestableTeamUser?.user?.name ?? "";
          b(e, a);
        } else v(e);
      } catch (t) {
        v(e);
      } finally {
        a(!0);
        removeQueryParam(h.entryPoint);
      }
    }
    d && l && !t && s(l);
  }, [l, e, t, d]);
}
let v = (e, t) => {
  e(VisualBellActions.enqueue({
    message: t || getI18nString("admin_dashboard.requests.error_generic"),
    error: !0
  }));
};
let b = (e, t) => {
  let a = t ? getI18nString("admin_dashboard.requests.success_approve_with_name", {
    requesterName: t
  }) : getI18nString("admin_dashboard.requests.success_approve_multiple", {
    numRequests: 1
  });
  e(VisualBellActions.enqueue({
    message: a,
    type: "requests-approved"
  }));
};
export const q = $$x0;
export const V = $$f1;