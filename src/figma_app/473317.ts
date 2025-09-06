import { jsx, jsxs } from "react/jsx-runtime";
import { debug } from "../figma_app/465776";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { $ } from "../905/137257";
import { m as _$$m } from "../905/375522";
import { V } from "../905/921027";
import { Ez5, mrc } from "../figma_app/763686";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { vx } from "../figma_app/175258";
import { Y5 } from "../figma_app/455680";
import { kl } from "../905/275640";
import { J2 } from "../figma_app/84367";
import { ae } from "../905/566585";
import { DE } from "../figma_app/811257";
export function $$b1() {
  let {
    textAutoResize,
    missingFont
  } = selectWithShallowEqual(e => ({
    textAutoResize: e.mirror.selectionProperties.textAutoResize,
    missingFont: e.mirror.selectionProperties.missingFont
  }));
  let r = kl("numSelectedByType");
  return {
    hasSelectedText: !!r && vx(r, "TEXT"),
    disableFontControls: !Y5?.isFontListLoaded() || !!missingFont,
    enabledTypePanelControls: J2(Ez5.propertiesPanelState().enabledTypePanelControls),
    textAutoResize
  };
}
export function $$T2({
  disabled: e,
  enabledTypePanelControls: t,
  textAutoResize: r,
  recordingKey: a
}) {
  e = e || !((0 | t) & 1 << mrc.TEXT_AUTO_RESIZE);
  let s = ae();
  e || debug(null != r, "TypePanel missing textAutoResize");
  let o = jsx($$I0, {
    disabled: e,
    textAutoResize: r,
    recordingKey: a,
    setTextResizing: s
  });
  return jsx(DE, {
    input: o,
    icon: null,
    label: getI18nString("fullscreeen.type_panel.resizing")
  });
}
export function $$I0(e) {
  return jsxs(bL, {
    value: e.textAutoResize,
    onChange: t => e.setTextResizing(t, "panel"),
    readonly: e.disabled,
    recordingKey: Pt(e, "autoResize"),
    legend: jsx(q, {
      children: getI18nString("fullscreeen.type_panel.resizing")
    }),
    children: [jsx(c$, {
      value: "WIDTH_AND_HEIGHT",
      "aria-label": getI18nString("fullscreen.type_panel.auto_width"),
      icon: jsx($, {})
    }), jsx(c$, {
      value: "HEIGHT",
      "aria-label": getI18nString("fullscreen.type_panel.auto_height"),
      icon: jsx(_$$m, {})
    }), jsx(c$, {
      value: "NONE",
      "aria-label": getI18nString("fullscreen.type_panel.fixed_size"),
      icon: jsx(V, {})
    })]
  });
}
export const NP = $$I0;
export const SA = $$b1;
export const fB = $$T2;