import { jsx } from "react/jsx-runtime";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { getI18nString } from "../905/303541";
import { Zc } from "../905/497882";
import { DropdownEnableState } from "../figma_app/188152";
import { A as _$$A } from "../905/567946";
export function $$c0({
  commentsSettingField: e
}) {
  return jsx(_$$A, {
    label: getI18nString("community.publishing.comments"),
    children: jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("community.publishing.allow_comments_from_community_members")
      }),
      checked: u(e),
      onChange: () => {
        Zc(e) && (u(e) ? e.setValue(DropdownEnableState.ALL_DISABLED) : e.setValue(DropdownEnableState.ENABLED));
      },
      disabled: !Zc(e)
    })
  });
}
let u = e => e.currentValue === DropdownEnableState.ENABLED;
export const A = $$c0;