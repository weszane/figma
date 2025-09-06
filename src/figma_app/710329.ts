import { getI18nString } from "../905/303541";
import { ud, Gu } from "../905/513035";
export function $$a0(e) {
  switch (e) {
    case ud.EXPERT:
      return getI18nString("billing_modals.billing_remodel_edu.full_seat");
    case ud.DEVELOPER:
      return getI18nString("billing_modals.billing_remodel_edu.dev_seat");
    case ud.COLLABORATOR:
      return getI18nString("billing_modals.billing_remodel_edu.collab_seat");
    case ud.CONTENT:
      return getI18nString("billing_modals.billing_remodel_edu.content_seat");
    case Gu.VIEW:
      return getI18nString("billing_modals.billing_remodel_edu.view_seat");
    default:
      return "";
  }
}
export const O = $$a0;