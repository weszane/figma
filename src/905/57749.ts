import { getFeatureFlags } from "../905/601108";
import { unsetSymbol } from "../905/17894";
import { getFieldValueOrDefault, canSetFieldValue } from "../905/497882";
import { findProfile, trimOrEmpty } from "../figma_app/740025";
import { isUserWorkspace, isTeamWorkspace, isOrgWorkspace } from "../figma_app/599979";
import { profileServiceAPI } from "../905/608932";
let $$d1 = 15;
let c = RegExp(`^[a-zA-Z0-9_]{1,${$$d1}}$`);
function u(e) {
  let {
    authorField,
    authedProfilesById
  } = e;
  let r = getFieldValueOrDefault(authorField, void 0);
  if (getFeatureFlags().ext_plugin_publish_rearch) {
    if (!canSetFieldValue(authorField)) return !1;
    let e = r && (isUserWorkspace(r) && findProfile({
      userId: r.user_id,
      authedProfilesById
    }) || isTeamWorkspace(r) && findProfile({
      teamId: r.team_id,
      authedProfilesById
    }) || isOrgWorkspace(r) && findProfile({
      orgId: r.org_id,
      authedProfilesById
    }));
    return !e || !e.public_at;
  }
  let l = r && isUserWorkspace(r) && findProfile({
    userId: r.user_id,
    authedProfilesById
  });
  return !!l && !l.public_at;
}
export let $$p0 = {
  displayName: "ProfileHandleField",
  fetchInitialValue: ({
    authorField: e
  }) => e.currentValue === unsetSymbol ? unsetSymbol : "",
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