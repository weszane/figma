import n from "../vendor/260986";
import { A } from "../905/17894";
import { Lz } from "../905/497882";
import { MAX_PUBLISHERS_PER_RESOURCE } from "../figma_app/740025";
import { Ii } from "../figma_app/599979";
import { wC } from "../905/448440";
var r = n;
export let $$c0 = {
  displayName: "CocreatorsField",
  fetchInitialValue: ({
    existingResourceContent: e,
    authedProfilesById: t,
    authorField: i,
    priceField: n,
    publishRoleField: r
  }) => {
    if (n.currentValue === A) return A;
    if (!r && wC(n)) return [];
    let s = [...(e?.community_publishers.accepted ?? []), ...(e?.community_publishers.pending ?? []).map(e => ({
      ...e,
      isPending: !0
    }))];
    return 0 === s.length ? [] : i.currentValue === A ? A : s.filter(e => void 0 !== i.currentValue && !Ii(t[e.id] || null, i.currentValue));
  },
  validate: async ({
    authedProfilesById: e,
    allowedCocreatorsPromise: t,
    authorField: i,
    priceField: n,
    publishRoleField: a
  }, c) => {
    let u = [];
    let p = !!a;
    !p && c.length > 0 && wC(n) && u.push({
      key: "COCREATORS_NOT_ALLOWED_FOR_PAID_RESOURCE",
      data: {}
    });
    r()(c, "id").length !== c.length && u.push({
      key: "DUPLICATE_COCREATORS",
      data: {
        duplicateCocreators: c.filter((e, t, i) => i.findIndex(t => t.id === e.id) !== t)
      }
    });
    let m = MAX_PUBLISHERS_PER_RESOURCE - 1;
    if (c.length > m && u.push({
      key: "TOO_MANY_COCREATORS",
      data: {
        maxCocreators: m
      }
    }), !p) {
      let e = await t;
      let i = c.filter(t => !e.some(e => e.id === t.id));
      i.length > 0 && u.push({
        key: "INVALID_COCREATORS",
        data: {
          invalidCocreators: i
        }
      });
    }
    let h = Lz(i, void 0);
    if (h) {
      let t = c.find(t => Ii(e[t.id] || null, h));
      t && u.push({
        key: "AUTHOR_IS_INVALID_COCREATOR",
        data: {
          author: t
        }
      });
    }
    return u;
  },
  canSet: ({
    publishRoleField: e
  }) => !e || !!Lz(e, void 0)?.is_public,
  isEqual: (e, t) => e === t || e.length === t.length && e.every(e => t.some(t => t.id === e.id))
};
export const S = $$c0;