import { jsx } from "react/jsx-runtime";
import { S } from "../905/274480";
import { J } from "../905/270045";
import { t } from "../905/303541";
import { Zc } from "../905/497882";
import { Ni } from "../figma_app/188152";
import { A as _$$A } from "../905/567946";
export function $$c0({
  commentsSettingField: e
}) {
  return jsx(_$$A, {
    label: t("community.publishing.comments"),
    children: jsx(S, {
      label: jsx(J, {
        children: t("community.publishing.allow_comments_from_community_members")
      }),
      checked: u(e),
      onChange: () => {
        Zc(e) && (u(e) ? e.setValue(Ni.ALL_DISABLED) : e.setValue(Ni.ENABLED));
      },
      disabled: !Zc(e)
    })
  });
}
let u = e => e.currentValue === Ni.ENABLED;
export const A = $$c0;