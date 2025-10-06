import { getInitialOptions } from "../figma_app/169182";
import { SET_MINIMAL_MFA_USER } from "../905/194276";
import { hydrateFileBrowser, initAction } from "../905/929976";
import { yJ, WJ, C$, hz } from "../figma_app/24841";
import { updateUserColorProfileAction } from "../figma_app/829197";
export function $$l4(e, t) {
  return t && t.id === e.id ? "You" : e.handle;
}
export function $$d1(e = !0, t) {
  return hydrateFileBrowser.matches(t) && null != t.payload.is_free_user ? t.payload.is_free_user : e;
}
export function $$c3(e = !0, t) {
  return hydrateFileBrowser.matches(t) && null != t.payload.is_starter_user ? t.payload.is_starter_user : e;
}
export function $$u2(e = null, t) {
  if (initAction.matches(t)) return getInitialOptions().user_data || null;
  if (SET_MINIMAL_MFA_USER.matches(t)) return {
    ...e,
    ...t.payload.user
  };
  if (yJ.matches(t)) {
    if (e && e.id === t.payload.user.id) {
      let r = new Map(e.dev_tokens?.map(e => [e.id, e]));
      let n = [];
      for (let e of t.payload.user.dev_tokens || []) if (r.has(e.id)) {
        let t = r.get(e.id);
        n.push({
          ...t,
          ...e
        });
      } else n.push(e);
      return {
        ...e,
        ...t.payload.user,
        dev_tokens: n
      };
    }
  } else if (WJ.matches(t)) return e ? {
    ...e,
    two_factor_secret_loaded: !1,
    password_token: void 0,
    temp_phone: void 0,
    phone_token: void 0,
    backup_codes: void 0
  } : null;else if (C$.matches(t)) return e ? {
    ...e,
    two_factor_app_enabled: t.payload.enabled
  } : null;else if (hz.matches(t)) return e ? {
    ...e,
    delete_user_loading: t.payload.loading
  } : null;else if (hydrateFileBrowser.matches(t)) return e ? {
    ...e,
    drafts_folder_id: t.payload.drafts_folder_id,
    personal_drafts_folder_id: t.payload.personal_drafts_folder_id
  } : null;else if (updateUserColorProfileAction.matches(t)) return e ? {
    ...e,
    color_profile: t.payload.color_profile
  } : null;
  return e;
}
export let $$p0 = $$u2;
export const Ay = $$p0;
export const Yb = $$d1;
export const kQ = $$u2;
export const nm = $$c3;
export const z4 = $$l4;