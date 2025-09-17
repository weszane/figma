import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useMemo } from "react";
import { IconButton } from "../905/443068";
import { EventShield } from "../905/821217";
import { MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { d as _$$d } from "../905/976845";
import { N as _$$N } from "../905/852320";
import { l as _$$l } from "../905/803103";
import { getFeatureFlags } from "../905/601108";
import { Q } from "../figma_app/67145";
import { generateRecordingKey } from "../figma_app/878298";
import { getI18nString } from "../905/303541";
import { ro } from "../figma_app/451499";
import { dG } from "../figma_app/753501";
import { normalizeValue } from "../905/216495";
import { KindEnum } from "../905/129884";
import { Z, m as _$$m } from "../905/423399";
import { qg, r5, GZ } from "../figma_app/436286";
import { X7 } from "../905/713167";
import { K0 } from "../figma_app/778125";
import { c$, l6, sK } from "../905/794875";
import { useIsFullscreenSitesView } from "../905/561485";
import { p6, DU, rO } from "../905/567570";
let x = c$;
function N(e) {
  let t = X7();
  let r = jsx($$C0, {
    value: normalizeValue(e.property),
    defaultBlendMode: "NORMAL"
  });
  return jsx(l6, {
    ...e,
    renderInput: ({
      onMouseDown: e,
      props: i
    }) => {
      let s = p6;
      "NORMAL" !== normalizeValue(i.property) && (s = DU);
      return t ? jsx(IconButton, {
        onClick: e,
        "aria-label": getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode")
        },
        disabled: i.disabled,
        children: r
      }) : jsx(K0, {
        className: s,
        tabIndex: -1,
        onPointerDown: dG,
        onMouseDown: e,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode"),
        children: r
      });
    }
  });
}
export function $$C0({
  value: e,
  defaultBlendMode: t
}) {
  return qg(e, t) ? jsx(_$$N, {}) : jsx(_$$l, {});
}
let w = new ro();
export function $$O1(e) {
  return getFeatureFlags().eu_fpl_migration_menu ? jsx(P, {
    property: e.blendMode,
    onBlendModeChange: e.onBlendModeChange,
    disabled: e.disabled,
    recordingKey: e.recordingKey
  }) : jsx(R, {
    ...e
  });
}
let R = memo(function (e) {
  let t = useIsFullscreenSitesView();
  let r = r5.map((r, i) => {
    let a = "LINEAR_BURN" === r && t;
    return "SELECT_DIVIDER" === r ? jsx(sK, {}, i) : jsx(x, {
      value: r,
      disabled: a,
      recordingKey: generateRecordingKey(e, r)
    }, i);
  });
  let a = 130;
  let [s, o] = useState(a);
  let l = useMemo(() => jsx(Q, {
    setMaxWidth: (e = a) => {
      o(Math.max(e, a));
    },
    options: r,
    formatOption: e => w.format(e.props.value),
    getIcon: () => void 0
  }), [r]);
  return jsxs(Fragment, {
    children: [jsx(N, {
      ariaLabel: getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode"),
      className: rO,
      disabled: e.disabled,
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      dropdownWidth: s,
      enablePreview: !0,
      formatter: w,
      id: "color-picker-blend-mode-select",
      inputClassName: p6,
      minTop: 6,
      onChange: e.onBlendModeChange,
      onMouseDown: dG,
      property: e.blendMode,
      recordingKey: e.recordingKey,
      children: r
    }), l]
  });
});
let L = GZ(r5);
function P({
  property: e,
  disabled: t,
  onBlendModeChange: r,
  recordingKey: i
}) {
  let {
    getTriggerProps,
    manager,
    updatePreview,
    onSubmit,
    valueBeforePreview
  } = Z({
    id: "color-picker-blend-mode-select",
    blendMode: e,
    onChange: r
  });
  return jsx(EventShield, {
    eventListeners: ["onWheel"],
    children: jsxs(MenuRootComp, {
      manager,
      children: [jsx(_$$d, {
        recordingKey: i,
        disabled: t,
        "aria-label": getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode"),
        htmlAttributes: {
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.properties_panel.color_picker.blend_mode_select.tooltip.blend_mode")
        },
        ...getTriggerProps(),
        children: jsx($$C0, {
          value: normalizeValue(e),
          defaultBlendMode: "NORMAL"
        })
      }), jsx(MenuContainerComp, {
        children: jsx(_$$m, {
          selectedItem: valueBeforePreview ?? e,
          options: L,
          onChange: onSubmit,
          recordingKey: i,
          onFocus: updatePreview
        })
      })]
    })
  });
}
export const MK = $$C0;
export const Rk = $$O1;