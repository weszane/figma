import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { debug } from "../figma_app/465776";
import { bL, c$ } from "../905/867927";
import { q } from "../905/932270";
import { h as _$$h } from "../905/513745";
import { N as _$$N } from "../905/568293";
import { K } from "../905/459096";
import { h as _$$h2 } from "../905/123399";
import { b as _$$b } from "../905/874849";
import { X } from "../905/399133";
import { z } from "../905/821223";
import { Ez5, mrc } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { Pt } from "../figma_app/806412";
import { E as _$$E } from "../905/277716";
import { tx, t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { oV, _W } from "../905/216495";
import { kl } from "../905/275640";
import { J2 } from "../figma_app/84367";
import { fI } from "../figma_app/626177";
import { vK } from "../905/566585";
import { DE, fn } from "../figma_app/811257";
import { lY, Xh, qf } from "../905/71683";
export function $$C0(e) {
  let t = jsx(_$$E, {
    name: "text_align_horizontal",
    children: jsx($$O3, {
      recordingKey: Pt(e.recordingKey, "textAlignHorizontal")
    })
  });
  let r = jsx(_$$E, {
    name: "text_align_vertical",
    children: jsx($$R1, {
      textAlignVertical: e.textAlignVertical || oV,
      recordingKey: Pt(e.recordingKey, "textAlignVertical")
    })
  });
  let i = vK();
  return e.isUI3 ? i ? jsxs(Fragment, {
    children: [jsx(DE, {
      ref: e.alignmentRowRef,
      label: tx("properties.label.alignment"),
      input: t,
      icon: e.textPathFlipButton
    }), jsx(DE, {
      ref: e.alignmentRowRef,
      label: null,
      input: r,
      icon: !e.isStyleConsumer && e.iconButton
    })]
  }) : jsx(fn, {
    ref: e.alignmentRowRef,
    leftLabel: tx("properties.label.alignment"),
    leftInput: t,
    rightLabel: null,
    rightInput: r,
    icon: e.iconButton
  }) : jsxs(fI, {
    className: lY,
    ref: e.alignmentRowRef,
    "data-onboarding-key": "type-panel-alignment-row",
    children: [jsx("div", {
      className: Xh,
      children: t
    }), jsx("div", {
      className: qf,
      children: r
    }), e.iconButton]
  });
}
export var $$w2 = (e => (e.LEFT = "text-align-left", e.CENTER = "text-align-center", e.RIGHT = "text-align-right", e.JUSTIFIED = "text-align-justified", e))($$w2 || {});
export function $$O3({
  recordingKey: e,
  loggingCallback: t
}) {
  let r = kl("textAlignHorizontal") || oV;
  let u = _W(kl("missingFont"), !1);
  let p = !((0 | J2(Ez5.propertiesPanelState().enabledTypePanelControls)) & 1 << mrc.TEXT_ALIGN_HORIZONTAL);
  let _ = vK();
  debug(!!(r || p), "TypePanel missing textAlignHorizontal");
  return jsxs(bL, {
    legend: jsx(q, {
      children: _$$t("fullscreen.type_panel.align_horizontal")
    }),
    value: r,
    onChange: e => {
      t && t();
      Y5.updateSelectionProperties({
        textAlignHorizontal: e
      });
    },
    readonly: p || u,
    recordingKey: e,
    children: [jsx(c$, {
      value: "LEFT",
      "aria-label": _$$t("fullscreen.type_panel.align_left"),
      icon: jsx(_$$h, {})
    }), jsx(c$, {
      value: "CENTER",
      "aria-label": _$$t("fullscreen.type_panel.align_center"),
      icon: jsx(_$$N, {})
    }), jsx(c$, {
      value: "RIGHT",
      "aria-label": _$$t("fullscreen.type_panel.align_right"),
      icon: jsx(K, {})
    }), _ && jsx(c$, {
      value: "JUSTIFIED",
      "aria-label": _$$t("fullscreen.type_panel.justify"),
      icon: jsx(_$$h2, {})
    })]
  });
}
export function $$R1(e) {
  let t = _W(kl("missingFont"), !1);
  let r = !((0 | J2(Ez5.propertiesPanelState().enabledTypePanelControls)) & 1 << mrc.TEXT_ALIGN_VERTICAL);
  let i = vK();
  return jsxs(bL, {
    value: e.textAlignVertical,
    onChange: e => (getFeatureFlags().ce_properties_panel_tracking && sx("editor_type_panel_change", {
      key: "textAlignVertical",
      value: e
    }), Y5.updateSelectionProperties({
      textAlignVertical: e
    })),
    readonly: t || r,
    recordingKey: e.recordingKey,
    legend: jsx(q, {
      children: _$$t("fullscreen.type_panel.align_vertical")
    }),
    children: [jsx(c$, {
      value: "TOP",
      "aria-label": i ? _$$t("fullscreen.type_panel.text_on_a_path_align_above") : _$$t("fullscreen.type_panel.align_top"),
      icon: jsx(_$$b, {})
    }), jsx(c$, {
      value: "CENTER",
      "aria-label": i ? _$$t("fullscreen.type_panel.text_on_a_path_align_on") : _$$t("fullscreen.type_panel.align_middle"),
      icon: jsx(X, {})
    }), jsx(c$, {
      value: "BOTTOM",
      "aria-label": i ? _$$t("fullscreen.type_panel.text_on_a_path_align_below") : _$$t("fullscreen.type_panel.align_bottom"),
      icon: jsx(z, {})
    })]
  });
}
export const DJ = $$C0;
export const Ln = $$R1;
export const XL = $$w2;
export const jw = $$O3;