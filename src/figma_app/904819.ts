import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { glU } from "../figma_app/763686";
import { R } from "../905/103090";
import { ms, c$ } from "../figma_app/236327";
import { tx } from "../905/303541";
import { b } from "../905/217163";
import { H } from "../905/184637";
let u = ms;
let p = c$;
let $$_1 = "component-insert-leaf-context-menu";
let $$h0 = memo(function () {
  let {
    dropdownShown,
    defaultLibraryKeys,
    openFileKey
  } = R(e => ({
    dropdownShown: e.dropdownShown,
    defaultLibraryKeys: e.library.defaultPublished.libraryKeys,
    openFileKey: e.openFile?.key || null
  }));
  let i = dropdownShown?.data?.component;
  let o = i?.file_key === openFileKey;
  let h = b({
    libraryKey: i?.library_key,
    nodeId: i?.node_id
  });
  if (!dropdownShown || dropdownShown.type !== $$_1 || !i || defaultLibraryKeys.includes(i.library_key)) return null;
  let m = h.data;
  return o || m?.link ? jsx(u, {
    className: H,
    style: dropdownShown.data.position,
    children: o ? jsx(p, {
      recordingKey: `goToLocalComponent.${i.node_id}`,
      onClick: () => glU.goToSymbolOrStateGroupById(i.node_id, !1),
      children: tx("design_systems.instance_swap_picker.go_to_main_component")
    }) : jsx(p, {
      recordingKey: `goToSubscribedComponent.${i.node_id}`,
      href: m?.link,
      target: "_blank",
      children: tx("design_systems.instance_swap_picker.go_to_main_component")
    })
  }) : null;
});
export const Q = $$h0;
export const j = $$_1;