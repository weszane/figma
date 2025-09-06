import { getI18nString } from "../905/303541";
export function $$s0(e) {
  return e?.abandonedDraftUserEmail && e?.abandonedDraftUserName ? getI18nString("abandoned_drafts_table.folder_path", {
    abandonedDraftUserName: e.abandonedDraftUserName,
    abandonedDraftUserEmail: e.abandonedDraftUserEmail
  }) : e && "" !== e.path ? e.path : getI18nString("abandoned_drafts_table.unknown_user_drafts");
}
export const b = $$s0;