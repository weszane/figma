import n from "../vendor/3757";
import { Fh } from "../905/448740";
import { T$, f7, Tn, jr, MO, Z7 } from "../figma_app/599979";
import { mr } from "../figma_app/45218";
var r = n;
export let $$l0 = {
  displayName: "AuthorField",
  fetchInitialValue: ({
    existingResourceContent: e,
    user: t,
    existingAuthor: i,
    allowedAuthors: n,
    authedProfilesById: a,
    authedActiveCommunityProfile: l
  }) => {
    if (e && mr(e) && i) return i;
    if (r()(n)) return;
    let d = T$(e || null, a, t.id || void 0);
    if (d && n.some(e => f7(e, d))) return d;
    let c = Tn(l);
    if (c && n.some(e => f7(e, c))) return c;
    let u = n.find(jr);
    if (u) return u;
    let p = n.find(MO);
    if (p) return p;
    let m = n.find(Z7);
    if (m) return m;
  },
  validate: ({
    existingResourceContent: e,
    user: t,
    allowedAuthors: i
  }, n) => n ? !d(e, t) && i.every(e => !f7(e, n)) ? [{
    key: "INVALID_AUTHOR",
    data: {
      currentValue: n
    }
  }] : void 0 : [{
    key: "AUTHOR_MISSING",
    data: {}
  }],
  canSet: ({
    existingResourceContent: e,
    user: t
  }) => !d(e, t),
  isEqual: (e, t) => f7(e, t)
};
function d(e, t) {
  return !!(e && mr(e) && !Fh(e) && e?.creator?.id && e.creator.id !== t.id);
}
export const q = $$l0;