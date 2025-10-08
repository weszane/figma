import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { wI } from "../figma_app/98578";
import { M$ } from "../figma_app/297822";
import { qI } from "../figma_app/171177";
import { B } from "../905/388732";
import { enterKey } from "../905/235578";
import { OX } from "../figma_app/592180";
export function $$u0({
  source: e,
  text: t,
  onAction: r,
  augmentedExtension: n,
  submenuRef: l,
  hideShortcutOnKeyboardFocus: u = !1
}) {
  let p = OX();
  let _ = qI();
  return useMemo(() => {
    let i = {
      text: t,
      shortcuts: u && _ ? [] : [enterKey],
      onAction: e => {
        n && wI({
          extensionId: n.extension.plugin_id,
          searchPosition: e.target?.index ?? 0,
          numSearchResults: p.numResults,
          searchQuery: p.searchQuery,
          moduleFilters: p.moduleFilters
        });
        r(e);
      },
      submenuRef: l
    };
    return M$(i, e);
  }, [_, n, p.moduleFilters, p.numResults, p.searchQuery, u, r, e, l, t]);
}
export function $$$$p1({
  children: e,
  hasNestedButton: t,
  primaryAction: r,
  setActive: i
}) {
  return t ? jsx(B.Item, {
    primaryAction: r,
    setActive: i,
    actionLabel: !1,
    recordingKey: "extension-list-item",
    type: "container",
    children: e
  }) : jsx(B.Item, {
    primaryAction: r,
    setActive: i,
    actionLabel: !1,
    recordingKey: "extension-list-item",
    children: e
  });
}
export const D = $$u0;
export const p = $$$$p1;