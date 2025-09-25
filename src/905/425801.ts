import { jsx } from "react/jsx-runtime";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { getI18nString } from "../905/303541";
import { canSetFieldValue } from "../905/497882";
import { DropdownEnableState } from "../figma_app/188152";
import { FieldContainer } from "../905/567946";
export function $$c0({
  commentsSettingField: e
}) {
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.comments"),
    children: jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("community.publishing.allow_comments_from_community_members")
      }),
      checked: u(e),
      onChange: () => {
        canSetFieldValue(e) && (u(e) ? e.setValue(DropdownEnableState.ALL_DISABLED) : e.setValue(DropdownEnableState.ENABLED));
      },
      disabled: !canSetFieldValue(e)
    })
  });
}
let u = e => e.currentValue === DropdownEnableState.ENABLED;
export const A = $$c0;