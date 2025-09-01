import { t } from "../905/303541";
import { ud, Gu } from "../905/513035";
export function $$a0(e) {
  switch (e) {
    case ud.EXPERT:
      return t("billing_modals.billing_remodel_edu.full_seat");
    case ud.DEVELOPER:
      return t("billing_modals.billing_remodel_edu.dev_seat");
    case ud.COLLABORATOR:
      return t("billing_modals.billing_remodel_edu.collab_seat");
    case ud.CONTENT:
      return t("billing_modals.billing_remodel_edu.content_seat");
    case Gu.VIEW:
      return t("billing_modals.billing_remodel_edu.view_seat");
    default:
      return "";
  }
}
export const O = $$a0;