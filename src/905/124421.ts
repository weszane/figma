import { t } from "../905/303541";
export function $$r0(e) {
  switch (e) {
    case "file_repo":
      return t("activity_log.resource.file");
    case "folder":
      return t("activity_log.resource.project");
    default:
      return e;
  }
}
export const v = $$r0;