import { XHR } from "../905/910117";
import { getI18nString } from "../905/303541";
import { J } from "../905/231762";
import { L_, Nr, HZ as _$$HZ } from "../905/890368";
import { F } from "../905/302958";
import { hm } from "../figma_app/976345";
import { createOptimistThunk } from "../905/350402";
import { N } from "../905/696711";
let $$u3 = L_;
let $$p4 = Nr;
let $$m2 = _$$HZ;
let $$h1 = createOptimistThunk((e, {
  email: t,
  profileId: i,
  userId: s
}, {
  loadingKey: l
}) => {
  let d = XHR.post(`/api/profile/${i}/primary_user`, {
    new_primary_user_id: s
  });
  N(d, e, l);
  d.then(({
    data: i
  }) => {
    e.dispatch($$u3(i.meta));
    e.dispatch(F.enqueue({
      error: !1,
      type: "profile-merge-update",
      message: getI18nString("community.actions.your_profile_s_primary_email_was_set_to_email", {
        email: t
      })
    }));
  }).catch(t => {
    let i = J(t);
    i && e.dispatch(F.enqueue({
      error: !0,
      type: "profile-merge-update",
      message: i
    }));
  });
}, ({
  profileId: e
}) => `COMMUNITY_HUB_CHANGE_COMMUNITY_PROFILE_PRIMARY_USER_${e}`);
let $$g0 = createOptimistThunk((e, {
  email: t,
  profileId: i,
  userId: s
}, {
  loadingKey: d
}) => {
  let p = XHR.del(`/api/profile/${i}/user`, {
    secondary_user_id: s
  });
  N(p, e, d);
  p.then(({
    data: i
  }) => {
    e.dispatch($$u3(i.meta));
    e.dispatch(F.enqueue({
      error: !1,
      type: "profile-merge-update",
      message: getI18nString("community.actions.email_was_removed_from_your_profile", {
        email: t
      })
    }));
    e.dispatch(hm());
  }).catch(t => {
    let i = J(t);
    i && e.dispatch(F.enqueue({
      error: !0,
      type: "profile-merge-update",
      message: i
    }));
  });
}, ({
  profileId: e
}) => `COMMUNITY_HUB_REMOVE_COMMUNITY_PROFILE_USER_${e}`);
let $$f5 = createOptimistThunk((e, {
  primaryUserId: t,
  secondaryUserId: i
}, {
  loadingKey: s
}) => {
  let d = XHR.post("/api/profile/merge", {
    primary_user_id: t,
    secondary_user_id: i
  });
  N(d, e, s);
  d.then(({
    data: t
  }) => {
    e.dispatch($$u3(t.meta));
    e.dispatch(F.enqueue({
      type: "profile-merge-update",
      message: getI18nString("community.actions.new_profile_connection_added")
    }));
    e.dispatch(hm());
  }).catch(t => {
    let i = J(t);
    i && e.dispatch(F.enqueue({
      error: !0,
      type: "profile-merge-update",
      message: getI18nString("community.actions.failed_to_merge_msg", {
        msg: i
      })
    }));
  });
}, ({
  secondaryUserId: e
}) => `COMMUNITY_HUB_ADD_COMMUNITY_PROFILE_USER_${e}`);
export const G0 = $$g0;
export const Gu = $$h1;
export const HZ = $$m2;
export const Oo = $$u3;
export const cr = $$p4;
export const n7 = $$f5;