import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { _ } from "../figma_app/496441";
import { K } from "../905/443068";
import { N } from "../905/301843";
import { E } from "../905/235326";
import { glU } from "../figma_app/763686";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { b as _$$b } from "../905/217163";
import { gl } from "../905/216495";
import { Ib } from "../905/129884";
import { $ } from "../905/330495";
export function $$f0(e) {
  let {
    instanceAndSublayerGUIDs
  } = e;
  let i = function (e) {
    let {
      backingSymbolGUID: _backingSymbolGUID,
      singleBackingSymbol,
      isBackingSymbolShared,
      isBackingSymbolSoftDeleted,
      restoreType
    } = $(e);
    let h = _$$b({
      libraryKey: singleBackingSymbol?.sourceLibraryKey,
      nodeId: singleBackingSymbol?.publishID,
      mainComponent: !0
    });
    let f = useMemo(() => !!h.data?.link, [h.data]);
    let _ = useMemo(() => h.data?.type === "community", [h.data]);
    let A = useMemo(() => isBackingSymbolSoftDeleted || !singleBackingSymbol ? "SYMBOL_AS_STATE" === restoreType ? getI18nString("design_systems.instance_panel.variant_missing") : getI18nString("design_systems.instance_panel.component_missing") : isBackingSymbolShared ? _ ? getI18nString("design_systems.instance_panel.view_library_in_community") : getI18nString("design_systems.instance_panel.go_to_main_component_nin_library") : getI18nString("design_systems.instance_panel.go_to_main_component"), [isBackingSymbolSoftDeleted, singleBackingSymbol, isBackingSymbolShared, _, restoreType]);
    let y = !(isBackingSymbolSoftDeleted || !singleBackingSymbol) && isBackingSymbolShared;
    let b = useCallback(() => {
      _backingSymbolGUID && !gl(_backingSymbolGUID) && glU.goToSymbolOrStateGroupById(_backingSymbolGUID, !0);
    }, [_backingSymbolGUID]);
    return y && !f || null == _backingSymbolGUID || gl(_backingSymbolGUID) ? null : {
      onMouseDown: b,
      url: h.data?.link,
      dataTooltip: A,
      disabled: isBackingSymbolSoftDeleted || !singleBackingSymbol,
      ui3Icon: _ ? jsx(N, {}) : jsx(E, {}),
      backingSymbolGUID: _backingSymbolGUID
    };
  }(instanceAndSublayerGUIDs);
  if (!i) return null;
  let {
    ui3Icon,
    url,
    onMouseDown,
    dataTooltip,
    disabled,
    backingSymbolGUID
  } = i;
  return url ? jsx(_, {
    href: url,
    newTab: !0,
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": dataTooltip
    },
    className: "navigate_to_primary_component_icon--link--wMyz4 navigate_to_primary_component_icon--iconButton--6QIIs navigate_to_primary_component_icon--baseIconButton--ilwdm",
    children: jsx("span", {
      className: "navigate_to_primary_component_icon--icon--9WHoR",
      children: ui3Icon
    })
  }) : jsx(K, {
    onClick: onMouseDown,
    "aria-label": dataTooltip,
    disabled,
    actionOnPointerDown: !0,
    recordingKey: Pt(e, "findComponentButton", backingSymbolGUID),
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": dataTooltip
    },
    children: ui3Icon
  });
}
export const F = $$f0;