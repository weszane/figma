import { useState, useRef, useCallback, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { resourceUtils } from "../905/989992";
import s from "../vendor/128080";
import { trackEventAnalytics } from "../905/449184";
import { xj, ok } from "../figma_app/851625";
import { logger } from "../905/651849";
import { useLatestRef } from "../figma_app/922077";
import { J } from "../905/931050";
import { subscribeAndAwaitData } from "../905/553831";
import { useSubscription } from "../figma_app/288654";
import { Xm, gB, e1, tT } from "../905/723791";
import { r as _$$r } from "../905/520829";
import { serializeQuery } from "../905/634134";
import { generateUUIDv4 } from "../905/871474";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { $ } from "../905/240853";
import { hZ } from "../figma_app/996356";
import { hZ as _$$hZ } from "../figma_app/990058";
import { OrgAdminUserView, OrgAdminUserMinimalFieldsView } from "../figma_app/43951";
import { nG } from "../figma_app/585126";
import { n as _$$n } from "../905/902560";
import { xw } from "../figma_app/951233";
import { useCurrentPrivilegedPlan } from "../figma_app/465071";
import { J0 } from "../figma_app/967319";
import { Eh, Wd } from "../figma_app/617654";
import { t as _$$t2 } from "../figma_app/157238";
var o = s;
let L = 1e4;
export function $$P3() {
  return useSelector(e => xw(e));
}
export function $$D7(e, t, r) {
  let [i, a] = useState(Xm());
  let s = useRef(null);
  let o = () => {
    s.current && (clearTimeout(s.current), s.current = null);
  };
  let l = useCallback(async () => await Eh.getOrgUsersFilterCounts({
    searchQuery: t,
    licenseGroupId: r.licenseGroupFilter || void 0,
    workspaceId: r.workspaceFilter || void 0,
    permission: r.permissionFilter || void 0,
    orgId: e,
    seatType: r.seatTypeFilter || void 0
  }), [r.licenseGroupFilter, r.workspaceFilter, r.permissionFilter, r.seatTypeFilter, e, t]);
  let c = J(() => (o(), l()), [l]);
  useEffect(() => {
    xj(c) ? a(gB(c.value.data.meta)) : ok(c) ? a(e1([])) : a(Xm());
  }, [c]);
  return {
    filterCountsViewResult: i,
    queueFilterCountsRefetch: useCallback(() => {
      o();
      s.current = setTimeout(async () => {
        a(Xm());
        try {
          let e = await l();
          a(gB(e.data.meta));
        } catch (e) {
          a(e1([]));
        }
      }, L);
    }, [l])
  };
}
export function $$k2({
  orgId: e,
  includeLicenseAdmins: t = !0
}) {
  let [r, a] = useState(!1);
  let [s, o] = useState(!1);
  let [l, d] = useState(!1);
  let [c, u] = useState([]);
  let p = useDispatch();
  useEffect(() => {
    (async () => {
      if (!r && !s && !l) {
        a(!0);
        try {
          let r = await Eh.getAdmins({
            includeLicenseAdmins: !!t,
            orgId: e
          });
          u(r.data.meta);
          o(!0);
          a(!1);
        } catch (e) {
          p(FlashActions.error(getI18nString("org_user_actions.an_error_occurred_fetching_org_admins")));
          a(!1);
          o(!1);
          d(!0);
        }
      }
    })();
  }, [e, t, s, r, l, p]);
  return {
    isFetched: s,
    orgAdmins: c
  };
}
class M extends Error {}
let F = async (e, t, r) => {
  let {
    cursor,
    searchQuery,
    sort,
    filter,
    firstPageSize,
    signal,
    minimalFields
  } = r;
  let u = null === cursor ? (firstPageSize || 25).toString() : null;
  try {
    let e = Date.now();
    trackEventAnalytics("Org Admin Members V2 Fetch Initiated", {
      orgId: t,
      ...r.extraLoggingData,
      isInitialLoad: null === cursor,
      minimalFields
    });
    let o = Eh.getOrgUsersPaginatedV2({
      orgId: t,
      pageSize: u,
      after: cursor,
      searchQuery,
      sort: sort ? _$$n(sort) : void 0,
      filter: filter ? nG(filter) : void 0,
      minimalFields
    });
    let p = await o;
    trackEventAnalytics("Org Admin Members V2 Fetch Succeeded", {
      orgId: t,
      durationMs: Date.now() - e,
      ...r.extraLoggingData,
      isInitialLoad: null === cursor,
      minimalFields
    });
    let _ = [...(p.data.meta.users || [])];
    let h = p.data.meta.cursor;
    let m = p.data.meta.totalUserCount;
    if (signal?.aborted) throw new M();
    return {
      users: _,
      newCursor: h,
      totalUserCount: m
    };
  } catch (t) {
    if (!(t instanceof M)) {
      let r = t.data?.status === 422 ? t.data?.message : t.message;
      e(FlashActions.error(r || getI18nString("org_user_actions.an_error_occurred_fetching_org_users")));
    }
    return t;
  }
};
export async function $$j5(e, t, r) {
  let {
    users,
    newCursor,
    totalUserCount
  } = await F(e, t, r);
  U(t, e, users);
  return {
    users,
    newCursor,
    totalUserCount
  };
}
let U = (e, t, r) => {
  let n = [];
  let i = [];
  let a = [];
  r.forEach(e => {
    switch (e.type) {
      case Wd.ORG_USER:
        if (!("org_id" in e)) break;
        n.push(e);
        break;
      case Wd.IDP_USER:
        i.push(e);
        break;
      case Wd.ORG_INVITE:
        a.push(e);
    }
  });
  t(_$$hZ({
    orgUsers: n,
    orgId: e
  }));
  i && t($({
    idpUsers: i
  }));
  a && t(hZ(a));
};
export function $$B6(e) {
  let t = useDispatch();
  let r = useSelector(({
    currentUserOrgId: e
  }) => e);
  let s = useCurrentPrivilegedPlan("useGetOrgUsers").unwrapOr(null);
  let o = null;
  s && (o = s.campfireModelEnabledAt);
  let l = useMemo(() => z(r, e), [r, e]);
  let d = useSubscription(OrgAdminUserView, l);
  let [u, p] = useState(null);
  let m = useCallback(() => {
    subscribeAndAwaitData(OrgAdminUserView, {
      ...l,
      refetchToken: generateUUIDv4()
    }).then(e => {
      p(resourceUtils.loaded(e));
    }, e => {
      throw e;
    });
  }, [l]);
  let g = u ?? d;
  let f = useMemo(() => g.data ? _$$t2(g.data, o) : [], [g.data, o]);
  useEffect(() => {
    "errors" === g.status && t(FlashActions.error(getI18nString("org_user_actions.an_error_occurred_fetching_org_users")));
  }, [t, g.status]);
  useEffect(() => {
    "loaded" === g.status && U(r, t, f);
  }, [t, f, g.status, r]);
  let T = useSelector(e => {
    let t = e.currentUserOrgId;
    return e.orgUsersByOrgId[t];
  });
  let I = useSelector(e => e.idpUserById);
  let S = useMemo(() => function (e, t, r) {
    let n = [];
    let i = new Set();
    let a = [];
    e.forEach(e => {
      if (e.type === Wd.ORG_USER) {
        let r = t[e.user_id];
        r ? i.has(e.user_id) ? a.push(e.user_id) : (n.push(r), i.add(e.user_id)) : logger.warn(`sortedUsers returned a user (${e.type}-${e.id}) that is not in redux`);
      } else {
        let t = r.idpUsers[e.id];
        t && (e.type === Wd.ORG_INVITE && t.isOrgInvite || e.type === Wd.IDP_USER && !t.isOrgInvite) ? i.has(e.id) ? a.push(e.id) : (n.push(t), i.add(e.id)) : logger.warn(`sortedUsers returned a user (${e.type}-${e.id}) that is not in redux`);
      }
    });
    a.length && logger.error(`ERROR: Duplicate user result in sortedUsers: ${a}.`);
    return n;
  }(f, T, I), [I, T, f]);
  let A = useCallback(() => {
    g.data?.orgAdminUsers?.loadNext(100);
  }, [g.data?.orgAdminUsers]);
  let x = g.data?.orgAdminUsers?.hasNextPage() && !g.data.orgAdminUsers.isLoadingNextPage ? A : void 0;
  let N = useCallback((e = L) => setTimeout(m, e), [m]);
  return {
    status: g.status,
    sortedUsers: S,
    fetchMore: x,
    queueRefetch: N
  };
}
export function $$G0({
  searchQuery: e,
  filter: t,
  selectedAll: r
}) {
  let a = useSelector(({
    currentUserOrgId: e
  }) => e);
  let [s, l] = useState({});
  let d = useLatestRef(e);
  let c = useLatestRef(t);
  let p = useLatestRef(r);
  let _ = d !== e || !o()(c, t) || !p && r;
  let f = {
    ...J0,
    ...t
  };
  let E = !r || "provisional" === f.permissionFilter;
  useEffect(() => {
    _ && l({});
  }, [_]);
  let y = useMemo(() => z(a, {
    searchQuery: e,
    filter: t
  }), [t, a, e]);
  let b = useSubscription(OrgAdminUserMinimalFieldsView, y);
  let T = _$$r.LOADING;
  if ("loaded" === b.status && b.data?.orgAdminUsersMinimalFields?.status === tT.Loaded ? T = _$$r.SUCCESS : ("errors" === b.status || b.data?.orgAdminUsersMinimalFields?.status === tT.Error) && (T = _$$r.FAILURE), useEffect(() => {
    if (T !== _$$r.SUCCESS) return;
    let e = b.data?.orgAdminUsersMinimalFields?.status === tT.Loaded ? function (e) {
      let t = [];
      for (let r of e) {
        let e = r.orgUser;
        e && t.push({
          id: e.id,
          type: Wd.ORG_USER,
          user: {
            id: e.user.id,
            handle: e.user.handle,
            img_url: e.user.imgUrl,
            email: e.user.email
          }
        });
      }
      return t;
    }(b.data.orgAdminUsersMinimalFields.data) : [];
    l(t => {
      let r = _ ? {} : {
        ...t
      };
      e.forEach(e => r[e.id] = e);
      return r;
    });
    b.data?.orgAdminUsersMinimalFields?.status === tT.Loaded && b.data.orgAdminUsersMinimalFields.data.hasNextPage() && b.data.orgAdminUsersMinimalFields.data.loadNext(400);
  }, [T, b.data, _]), E) return {
    status: _$$r.INIT,
    users: [],
    totalSelectable: null
  };
  let I = T === _$$r.SUCCESS && b.data && b.data.orgAdminUsersMinimalFields && b.data.orgAdminUsersMinimalFields.status === tT.Loaded && b.data.orgAdminUsersMinimalFields.data && !b.data.orgAdminUsersMinimalFields.data.hasNextPage();
  let S = null;
  I && (S = Object.keys(s).length);
  return {
    status: I ? _$$r.SUCCESS : T === _$$r.SUCCESS ? _$$r.LOADING : T,
    users: Object.values(s),
    totalSelectable: S
  };
}
export function $$V4(e, t) {
  return !!(e && t);
}
export function $$H1(e) {
  var t;
  let r = xw(e);
  return !!((t = e.currentUserOrgId ? e.orgById[e.currentUserOrgId] : null) && t.are_custom_templates_allowed && r);
}
function z(e, {
  searchQuery: t,
  sort: r,
  filter: n,
  firstPageSize: i
}, a) {
  return {
    orgId: e,
    firstPageSize: i || 25,
    refetchToken: a || null,
    queryParams: `${serializeQuery({
      ...(t && {
        search_query: t
      }),
      ...(r && _$$n(r)),
      ...(n && nG(n))
    })}`
  };
}
export const Ew = $$G0;
export const LQ = $$H1;
export const YM = $$k2;
export const a9 = $$P3;
export const ar = $$V4;
export const n = $$j5;
export const oo = $$B6;
export const vu = $$D7;