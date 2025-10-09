import { jsx, jsxs } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { getFieldValueOrDefault } from "../905/497882";
import { isUserWorkspace } from "../figma_app/599979";
import { selectUser } from "../905/372672";
import { FieldContainer } from "../905/567946";
export function $$c0({
  authorField: e,
  existingResourceContent: t
}) {
  let i = selectUser();
  let c = getFieldValueOrDefault(e, void 0);
  let u = c && isUserWorkspace(c) && c.user_id === i.id;
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.payee_label"),
    children: jsxs("div", {
      className: cssBuilderInstance.flex.flexRow.$,
      children: [t ? t.creator.handle : i.handle, "\xa0", jsx("span", {
        className: cssBuilderInstance.font11.colorTextSecondary.$,
        children: u ? getI18nString("community.publishing.payee_name_annotation_for_current_owner") : getI18nString("community.publishing.payee_name_annotation")
      })]
    })
  });
}
export const r = $$c0;