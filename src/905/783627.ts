import { jsx, jsxs } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { Lz } from "../905/497882";
import { jr } from "../figma_app/599979";
import { selectUser } from "../905/372672";
import { A } from "../905/567946";
export function $$c0({
  authorField: e,
  existingResourceContent: t
}) {
  let i = selectUser();
  let c = Lz(e, void 0);
  let u = c && jr(c) && c.user_id === i.id;
  return jsx(A, {
    label: getI18nString("community.publishing.payee_label"),
    children: jsxs("div", {
      className: _$$s.flex.flexRow.$,
      children: [t ? t.creator.handle : i.handle, "\xa0", jsx("span", {
        className: _$$s.font11.colorTextSecondary.$,
        children: u ? getI18nString("community.publishing.payee_name_annotation_for_current_owner") : getI18nString("community.publishing.payee_name_annotation")
      })]
    })
  });
}
export const r = $$c0;