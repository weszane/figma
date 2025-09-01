import { useState, useEffect } from "react";
import { wA } from "../vendor/514228";
import { K } from "../905/807535";
import { getFeatureFlags } from "../905/601108";
import { oA } from "../905/663269";
import { Ek } from "../905/553831";
import { t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { ps, Xv } from "../figma_app/845611";
import { QL, EM } from "../905/609392";
import { s7T } from "../figma_app/43951";
import { w } from "../905/281010";
var m = (e => (e.AdminUpgradeEmail = "admin_upgrade_email", e.UnknownDeeplink = "unknown_deeplink", e))(m || {});
let h = {
  approvalRequestId: "approvalRequestId",
  entryPoint: "entryPoint"
};
export async function $$x0(e, t) {
  try {
    let a = await Ek(s7T, {
      requestId: e
    });
    let s = oA(a.accountTypeRequest);
    if (!s) {
      v(t, _$$t("admin_dashboard.requests.not_found"));
      return;
    }
    if ("pending" !== s.status) {
      t(F.enqueue({
        message: _$$t("admin_dashboard.requests.this_request_has_already_been_handled"),
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
  let e = wA();
  let [t, a] = useState(!1);
  let [l, o] = useState();
  let d = getFeatureFlags().one_click_approve_on_recents;
  useEffect(() => {
    async function t(t) {
      let s = await $$x0(t, e);
      s ? o(s) : a(!0);
    }
    if (!d) return;
    let s = QL(h.approvalRequestId);
    s && (EM(h.approvalRequestId), t(s));
  }, [e, d]);
  useEffect(() => {
    async function s(t) {
      let s = QL(h.entryPoint);
      let n = K(m, s || "") ?? m.UnknownDeeplink;
      let i = K(ps, t.planType) || ps.TEAM;
      try {
        let a = await w.approveRequests({
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
        EM(h.entryPoint);
      }
    }
    d && l && !t && s(l);
  }, [l, e, t, d]);
}
let v = (e, t) => {
  e(F.enqueue({
    message: t || _$$t("admin_dashboard.requests.error_generic"),
    error: !0
  }));
};
let b = (e, t) => {
  let a = t ? _$$t("admin_dashboard.requests.success_approve_with_name", {
    requesterName: t
  }) : _$$t("admin_dashboard.requests.success_approve_multiple", {
    numRequests: 1
  });
  e(F.enqueue({
    message: a,
    type: "requests-approved"
  }));
};
export const q = $$x0;
export const V = $$f1;