import { useMemo, useState, useEffect } from "react";
import { d4, wA } from "../vendor/514228";
import { sortByPropertyWithOptions } from "../figma_app/656233";
import { A } from "../905/920142";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { kc } from "../figma_app/35887";
import { Eh } from "../figma_app/617654";
import { dq } from "../905/845253";
import { C5, D1, hX } from "../figma_app/614170";
export let $$_1 = e => `LICENSE_GROUP_GET_${e}`;
export function $$h3(e) {
  let t = d4(({
    licenseGroups: e
  }) => e);
  let r = dq();
  return useMemo(() => {
    let n = Object.values(t).filter(t => t && t.org_id === (e ?? r));
    sortByPropertyWithOptions(n, "name");
    return n;
  }, [t, r, e]);
}
export function $$m8(e, t = !0) {
  let [r, a] = useState(!1);
  let [s, d] = useState(!1);
  let [u, p] = useState(!1);
  let [_, h] = useState({});
  let g = wA();
  useEffect(() => {
    (async () => {
      if (!r && !s && !u && t) {
        a(!0);
        try {
          let t = await Eh.getLicenseGroupsMembersCounts({
            orgId: e
          });
          h(t.data.meta);
          d(!0);
          a(!1);
        } catch (e) {
          g(_$$s.error(_$$t("license_group.an_error_occurred_fetching_license_group_counts")));
          a(!1);
          d(!1);
          p(!0);
        }
      }
    })();
  }, [e, s, r, u, g, t]);
  return {
    isFetched: s,
    memberCounts: _,
    isLoading: r
  };
}
export function $$g5() {
  return d4(e => !!e.currentUserOrgId && $$f6(e.orgById[e.currentUserOrgId], e.licenseGroups));
}
export function $$f6(e, t) {
  return !!e?.bigma_enabled && (!!e?.license_groups_count || !!Object.keys(t).length);
}
export function $$E2(e, t, r) {
  let n = [];
  let i = [];
  e.forEach(e => {
    e.admin_users_metadata.length > 0 ? e.admin_users_metadata.some(e => e.id === t) ? n.push(e) : r || i.push(e) : r || n.push(e);
  });
  let s = n.concat(i);
  sortByPropertyWithOptions(n, "name");
  sortByPropertyWithOptions(i, "name");
  sortByPropertyWithOptions(s, "name");
  return {
    groupsUserIsAdminOf: n,
    otherLicenseGroups: i,
    allAdminableLicenseGroups: s
  };
}
export function $$y7(e, t) {
  return e.last_reviewed_at && A(e.last_reviewed_at).add(14, "days").isAfter(t);
}
export function $$b4(e, t) {
  let r = C5(t ?? [], "upcoming");
  return !!(t && r && D1(r)) && hX(t) && !$$y7(e, r.due_at);
}
export function $$T0(e, t) {
  let r = [];
  let n = [];
  e.forEach(e => {
    $$b4(e, t) ? r.push(e) : n.push(e);
  });
  return {
    groupsToReview: r,
    groupsAlreadyReviewed: n
  };
}
export function $$I9(e, t) {
  let r = "";
  let n = "";
  if (e) {
    let i = "";
    if (e?.actor_user_id) {
      let r = t[e.actor_user_id];
      i = r?.user?.handle || r?.user?.name || "";
    }
    e?.idp_group && (i = e.idp_group?.name || "");
    r = function (e, t) {
      switch (e) {
        case kc.SELF_SELECTED:
          return _$$t("members_table.billing_group_update_description.self_selected");
        case kc.SELF_SELECTED_NOT_LISTED:
          return _$$t("members_table.billing_group_update_description.self_selected_not_listed");
        case kc.SELF_SELECTED_DONT_KNOW:
          return _$$t("members_table.billing_group_update_description.self_selected_dont_know");
        case kc.MOVED_BY_ADMIN:
          return t ? _$$t("members_table.billing_group_update_description.moved_by_admin", {
            adminName: t
          }) : _$$t("members_table.billing_group_update_description.moved_by_admin_generic");
        case kc.AUTO_ASSIGNED:
          return _$$t("members_table.billing_group_update_description.auto_assigned");
        case kc.SCIM_GROUP:
          return _$$t("members_table.billing_group_update_description.scim_group", {
            groupName: t
          });
        default:
          return null;
      }
    }(e.update_reason, i);
    n = e.assigned_at;
  }
  return {
    updateReason: r,
    updateTimestamp: n
  };
}
export const Cz = $$T0;
export const EO = $$_1;
export const EQ = $$E2;
export const MX = $$h3;
export const NV = $$b4;
export const RG = $$g5;
export const a3 = $$f6;
export const cI = $$y7;
export const cZ = $$m8;
export const mm = $$I9;