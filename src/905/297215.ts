import { jsx, Fragment } from "react/jsx-runtime";
import { useSelector } from "../vendor/514228";
import { h } from "../figma_app/198885";
import { K } from "../905/770444";
import { K as _$$K, h as _$$h } from "../905/275787";
export function $$l0() {
  let e = useSelector(e => e.dropdownShown);
  let t = e?.type === _$$K.ACTIONS_ASSETS && !!e?.data?.component;
  let i = useSelector(h);
  let l = K(!0);
  return jsx(Fragment, {
    children: t && jsx(_$$h, {
      selectedView: i,
      dropdownShown: e,
      onJumpToLocalComponent: l,
      usePortal: !0,
      hidePublishingForLocalComponents: !0
    })
  });
}
export const a = $$l0;