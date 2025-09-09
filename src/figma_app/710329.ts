import { getI18nString } from "../905/303541";
import { ProductAccessTypeEnum, ViewAccessTypeEnum } from "../905/513035";
export function $$a0(e) {
  switch (e) {
    case ProductAccessTypeEnum.EXPERT:
      return getI18nString("billing_modals.billing_remodel_edu.full_seat");
    case ProductAccessTypeEnum.DEVELOPER:
      return getI18nString("billing_modals.billing_remodel_edu.dev_seat");
    case ProductAccessTypeEnum.COLLABORATOR:
      return getI18nString("billing_modals.billing_remodel_edu.collab_seat");
    case ProductAccessTypeEnum.CONTENT:
      return getI18nString("billing_modals.billing_remodel_edu.content_seat");
    case ViewAccessTypeEnum.VIEW:
      return getI18nString("billing_modals.billing_remodel_edu.view_seat");
    default:
      return "";
  }
}
export const O = $$a0;