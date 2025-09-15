import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAtomWithSubscription } from "../figma_app/27355";
import { r as _$$r } from "../905/520829";
import { logError } from "../905/714362";
import { ResourceTypeEnum } from "../figma_app/306946";
import { ek, MJ } from "../figma_app/657017";
import { g } from "../905/347448";
import { nm } from "../905/352022";
import { selectCurrentUser } from "../905/372672";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { OrganizationType } from "../905/833838";
var $$h3 = (e => (e.SITES_DISABLED_FOR_STARTER = "sites_disabled_for_starter", e.SITES_DISABLED_FOR_ORG = "sites_disabled_for_org", e.COOPER_DISABLED_FOR_ORG = "cooper_disabled_for_org", e.FIGMAKE_DISABLED_FOR_ORG = "figmake_disabled_for_org", e))($$h3 || {});
function x(e) {
  let t = useAtomWithSubscription(g);
  let r = selectCurrentUser();
  useEffect(() => {
    t === _$$r.INIT && nm()(e).catch(e => {
      logError("Error loading plans for authed users", e, {
        reportErrorToSentry: !0
      });
    });
  }, [e, t]);
  return useMemo(() => {
    let e = [];
    let s = [];
    if (!r || t === _$$r.LOADING || t === _$$r.INIT) return {
      teams: e,
      orgs: s
    };
    let i = t.plansByUserId[r.id];
    i?.map(r => {
      if ("team" === r.plan_type) {
        let s = t.teams.find(e => e.id === r.plan_id);
        s && e.push(s);
      }
      if ("org" === r.plan_type) {
        let e = t.orgs.find(e => e.id === r.plan_id);
        e && s.push(e);
      }
    });
    return {
      teams: e,
      orgs: s
    };
  }, [t, r]);
}
export function $$f1(e) {
  let t = selectCurrentUser();
  let {
    teams,
    orgs
  } = x(e);
  let n = useCurrentPrivilegedPlan("useCanUseDsePresetsInCommunity").unwrapOr(null);
  let o = ek(n, null);
  return useMemo(() => !!t && (teams.length || orgs.length ? Object.values(teams).some(e => MJ(null, e, null)) || Object.values(orgs).some(e => MJ(e, null, null)) : o), [t, teams, orgs, o]);
}
export function $$y2(e) {
  let t = selectCurrentUser();
  let r = useSelector(e => e.searchResults?.data?.org);
  let {
    teams,
    orgs
  } = x(e);
  return useMemo(() => !!t && (teams.length || orgs.length ? teams.length > 0 || orgs.some(e => !e.is_slides_disabled) : !r?.is_slides_disabled), [t, teams, orgs, r]);
}
export function $$g0(e) {
  let t = useDispatch();
  let r = function (e) {
    let t = useAtomWithSubscription(g);
    let r = selectCurrentUser();
    useEffect(() => {
      t === _$$r.INIT && nm()(e).catch(e => {
        logError("Error loading plans for authed users", e, {
          reportErrorToSentry: !0
        });
      });
    }, [e, t]);
    return useMemo(() => r && t !== _$$r.LOADING && t !== _$$r.INIT ? t.plansByUserId[r.id] : [], [t, r]);
  }(t);
  let {
    teams
  } = x(t);
  let {
    isDisabled,
    disabledReason
  } = function (e, t, r) {
    if (e !== ResourceTypeEnum.SITE_TEMPLATE) return {
      isDisabled: !1
    };
    if (!r || 0 === r.length) return {
      isDisabled: !0
    };
    let s = r.filter(e => e.plan_type === OrganizationType.TEAM).reduce((e, r) => {
      let s = t.find(e => e.id === r.plan_id);
      s && (e[r.plan_id] = s);
      return e;
    }, {});
    var i = r.filter(e => e.plan_type !== OrganizationType.TEAM || s[e.plan_id]?.pro_team);
    return 0 === i.length ? {
      isDisabled: !0,
      disabledReason: "sites_disabled_for_starter"
    } : 0 === (i = i.filter(e => e.plan_type !== OrganizationType.ORG || !e.is_sites_disabled)).length ? {
      isDisabled: !0,
      disabledReason: "sites_disabled_for_org"
    } : {
      isDisabled: !1
    };
  }(e, teams, r);
  let {
    isDisabled: _isDisabled,
    disabledReason: _disabledReason
  } = e !== ResourceTypeEnum.COOPER_TEMPLATE_FILE ? {
    isDisabled: !1
  } : r && 0 !== r.length ? r.some(e => e.plan_type === OrganizationType.TEAM || !e.is_cooper_disabled) ? {
    isDisabled: !1
  } : {
    isDisabled: !0,
    disabledReason: "cooper_disabled_for_org"
  } : {
    isDisabled: !0
  };
  let {
    isDisabled: _isDisabled2,
    disabledReason: _disabledReason2
  } = e !== ResourceTypeEnum.FIGMAKE_TEMPLATE ? {
    isDisabled: !1
  } : r && 0 !== r.length ? r.some(e => e.plan_type === OrganizationType.TEAM || !e.is_figmake_disabled) ? {
    isDisabled: !1
  } : {
    isDisabled: !0,
    disabledReason: "figmake_disabled_for_org"
  } : {
    isDisabled: !0
  };
  return e === ResourceTypeEnum.SITE_TEMPLATE && isDisabled ? {
    isDisabled: !0,
    disabledReason
  } : e === ResourceTypeEnum.COOPER_TEMPLATE_FILE && _isDisabled ? {
    isDisabled: !0,
    disabledReason: _disabledReason
  } : e === ResourceTypeEnum.FIGMAKE_TEMPLATE && _isDisabled2 ? {
    isDisabled: !0,
    disabledReason: _disabledReason2
  } : {
    isDisabled: !1
  };
}
export const Cc = $$g0;
export const Rr = $$f1;
export const vQ = $$y2;
export const vb = $$h3;