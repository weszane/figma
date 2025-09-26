import { jsx } from "react/jsx-runtime";
import { memo } from "react";
import { Fullscreen } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { ms, c$ } from "../figma_app/236327";
import { renderI18nText } from "../905/303541";
import { useLibraryFileLink } from "../905/217163";
import { H } from "../905/184637";
let u = ms;
let p = c$;
let $$_1 = "component-insert-leaf-context-menu";
let $$h0 = memo(function () {
  let {
    dropdownShown,
    defaultLibraryKeys,
    openFileKey
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    defaultLibraryKeys: e.library.defaultPublished.libraryKeys,
    openFileKey: e.openFile?.key || null
  }));
  let i = dropdownShown?.data?.component;
  let o = i?.file_key === openFileKey;
  let h = useLibraryFileLink({
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
      onClick: () => Fullscreen.goToSymbolOrStateGroupById(i.node_id, !1),
      children: renderI18nText("design_systems.instance_swap_picker.go_to_main_component")
    }) : jsx(p, {
      recordingKey: `goToSubscribedComponent.${i.node_id}`,
      href: m?.link,
      target: "_blank",
      children: renderI18nText("design_systems.instance_swap_picker.go_to_main_component")
    })
  }) : null;
});
export const Q = $$h0;
export const j = $$_1;