import { sx } from "../905/449184";
import { p as _$$p } from "../905/762622";
import { o7 } from "../905/331019";
import { U } from "../figma_app/477548";
import { mp } from "../905/772425";
class o {
  constructor(e, t, i, n = {
    list: U.getShareModalContactsWithUserGroups,
    search: U.searchShareModalContactsWithUserGroups
  }) {
    this.api = n;
    this.planId = e;
    this.userLimit = void 0 !== t ? t : 5;
    this.userGroupLimit = void 0 !== i ? i : 3;
  }
  async list() {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.list({
        planId: this.planId,
        userLimit: this.userLimit,
        userGroupLimit: this.userGroupLimit
      });
      return {
        users: meta.users,
        userGroups: meta.user_groups
      };
    } catch (e) {
      console.error("An error occurred while trying to fetch contacts for share modal.", e);
      return {
        users: [],
        userGroups: []
      };
    }
  }
  async search(e) {
    try {
      let {
        data: {
          meta
        }
      } = await this.api.search({
        query: e,
        planId: this.planId,
        userLimit: this.userLimit,
        userGroupLimit: this.userGroupLimit
      });
      return {
        users: meta.users,
        userGroups: meta.user_groups
      };
    } catch (e) {
      console.error("An error occurred while searching for contacts in share modal.", e);
      return {
        users: [],
        userGroups: []
      };
    }
  }
}
var l = (e => (e.ShareModal = "SHARE_MODAL", e))(l || {});
var c = (e => (e.PENDING = "pending", e.CONFIRMED = "confirmed", e))(c || {});
function u(e, t, i) {
  let n = {};
  for (let t in e) n[e[t].id] = t;
  let r = {};
  for (let e of (r[t.id] = "confirmed", i)) {
    let t = e.user.id ?? e.user.email;
    t && (r[t] = e.pending ? "pending" : "confirmed");
  }
  return r;
}
export function $$p2(e, t, i) {
  let n = {};
  for (let t in e) n[e[t].id] = t;
  let r = new Set();
  for (let e of (r.add(t.email), i)) {
    let t = e.user.email ?? (e.user.id && n[e.user.id]);
    t && r.add(t);
  }
  return r;
}
export async function $$m0(e, t, i, r, a, s, o, l, c) {
  let p = mp({
    currentOrgId: a,
    teamId: s,
    users: [],
    fileKey: o,
    maxResultsCount: 10,
    isShareModal: !0
  });
  let m = await p.library.search(e.inputValue);
  if (null == m) {
    sx("contacts_search.invite_search_error", {
      invite_level: l.inviteLevel,
      source: l.source,
      input_value_is_empty: !e.inputValue,
      autocomplete_error: e.errorMessage
    });
    return Promise.resolve([]);
  }
  let h = m.map(e => e);
  let g = u(t, i, r);
  let f = h.map(e => {
    if (e.id in g || e.email in g) {
      let t = e.id in g ? e.id : e.email;
      "pending" === g[t] ? e.pendingRole = !0 : e.existingRole = !0;
      e.disabled = !0;
    }
    return e;
  });
  return c ? f.slice(0, c) : f;
}
export async function $$h1(e, t, i, a, s, d, c, p) {
  let m = function ({
    planRecordId: e,
    userLimit: t,
    userGroupLimit: i,
    type: n
  }) {
    if ("SHARE_MODAL" === n) return new o(e, t, i);
    throw Error("Unsupported contacts library type");
  }({
    planRecordId: s,
    userLimit: c,
    userGroupLimit: p,
    type: l.ShareModal
  });
  let h = await m.search(e.inputValue);
  if (null == h) {
    sx("contacts_search.invite_search_error", {
      invite_level: d.inviteLevel,
      source: d.source,
      input_value_is_empty: !e.inputValue,
      autocomplete_error: e.errorMessage
    });
    return Promise.resolve([]);
  }
  let g = h.userGroups?.map(e => ({
    ...e,
    type: _$$p
  }));
  let f = h.users?.map(e => e) ?? [];
  let _ = u(t, i, a);
  let A = f.map(e => {
    if (e.id in _ || e.email in _) {
      let t = e.id in _ ? e.id : e.email;
      "pending" === _[t] ? e.pendingRole = !0 : e.existingRole = !0;
      e.disabled = !0;
    }
    return e;
  });
  A = c ? A.slice(0, c) : A;
  return [...(g = p ? g.slice(0, p) : g), ...A];
}
export async function $$g4(e, t) {
  let i = mp({
    currentOrgId: e,
    teamId: t,
    users: [],
    maxResultsCount: 10,
    isShareModal: !0
  });
  let n = await i.library.search("");
  return n ? n.map((e, t) => ({
    ...e,
    rank: t + 1
  })) : [];
}
export function $$f3(e, t, i) {
  return e.user?.email ? e.user.email : e.user_id ? o7(e.user_id, t, i) : void 0;
}
export const Wj = $$m0;
export const _N = $$h1;
export const bp = $$p2;
export const Zm = $$f3;
export const hp = $$g4;