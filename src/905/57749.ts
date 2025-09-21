import { getFeatureFlags } from "../905/601108";
import { A } from "../905/17894";
import { Lz, Zc } from "../905/497882";
import { findProfile, trimOrEmpty } from "../figma_app/740025";
import { jr, Z7, MO } from "../figma_app/599979";
import { profileServiceAPI } from "../905/608932";
let $$d1 = 15;
let c = RegExp(`^[a-zA-Z0-9_]{1,${$$d1}}$`);
function u(e) {
  let {
    authorField,
    authedProfilesById
  } = e;
  let r = Lz(authorField, void 0);
  if (getFeatureFlags().ext_plugin_publish_rearch) {
    if (!Zc(authorField)) return !1;
    let e = r && (jr(r) && findProfile({
      userId: r.user_id,
      authedProfilesById
    }) || Z7(r) && findProfile({
      teamId: r.team_id,
      authedProfilesById
    }) || MO(r) && findProfile({
      orgId: r.org_id,
      authedProfilesById
    }));
    return !e || !e.public_at;
  }
  let l = r && jr(r) && findProfile({
    userId: r.user_id,
    authedProfilesById
  });
  return !!l && !l.public_at;
}
export let $$p0 = {
  displayName: "ProfileHandleField",
  fetchInitialValue: ({
    authorField: e
  }) => e.currentValue === A ? A : "",
  validate: async (e, t) => {
    if (!u(e)) return;
    let i = trimOrEmpty(t);
    if (0 === i.length) {
      if (e.valueRequired) return [{
        key: "PROFILE_HANDLE_EMPTY",
        data: {
          sanitizedProfileHandle: i
        }
      }];
    } else {
      if (i.length > $$d1) return [{
        key: "PROFILE_HANDLE_TOO_LONG",
        data: {
          sanitizedProfileHandle: i,
          maxLength: $$d1
        }
      }];
      if (!c.test(i)) return [{
        key: "PROFILE_HANDLE_CONTAINS_SPECIAL_CHAR",
        data: {
          sanitizedProfileHandle: i
        }
      }];
      if (!(await profileServiceAPI.getHandleAvailable({
        profileHandle: i
      })).data.meta.available) return [{
        key: "PROFILE_HANDLE_NOT_AVAILABLE",
        data: {
          sanitizedProfileHandle: i
        }
      }];
    }
  },
  canSet: u
};
export const i2 = $$p0;
export const lD = $$d1;