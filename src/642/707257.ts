import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useId } from "react";
import { debounce } from "../905/915765";
import { bL, l9, mc, c$, wv } from "../905/493196";
import { h as _$$h } from "../905/270045";
import { Pt } from "../figma_app/806412";
import { k } from "../905/582200";
import { renderI18nText, getI18nString } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { gl } from "../905/216495";
import { zk } from "../figma_app/198712";
import { Q } from "../905/346809";
import { Zk, fI } from "../figma_app/626177";
import { g as _$$g } from "../905/412697";
import { Ad } from "../figma_app/811257";
export function $$y0(e) {
  let {
    maskType
  } = e;
  let s = useId();
  return jsx(k, {
    name: "mask_panel",
    children: jsxs(Zk, {
      children: [jsx(fI, {
        children: jsx(Q, {
          id: s,
          children: renderI18nText("fullscreen.mask_panel.mask")
        })
      }), jsx(Ad, {
        input: jsx(j, {
          maskType,
          recordingKey: e.recordingKey
        }),
        label: null
      })]
    })
  });
}
function _(e, t = zk.YES) {
  Y5.updateSelectionProperties({
    maskType: e
  }, {
    shouldCommit: t
  });
}
let b = "Mixed";
let C = {
  format: e => {
    switch (e) {
      case "ALPHA":
        return getI18nString("fullscreen.mask_panel.alpha");
      case "OUTLINE":
        return getI18nString("fullscreen.mask_panel.vector");
      case "LUMINANCE":
        return getI18nString("fullscreen.mask_panel.luminance");
      case "Mixed":
        return getI18nString("fullscreen.mixed");
    }
  },
  formatExtended: e => {
    switch (e) {
      case "ALPHA":
        return {
          text: getI18nString("fullscreen.mask_panel.alpha_extended")
        };
      case "OUTLINE":
        return {
          text: getI18nString("fullscreen.mask_panel.vector_extended")
        };
      case "LUMINANCE":
        return {
          text: getI18nString("fullscreen.mask_panel.luminance_extended")
        };
      case "Mixed":
        return {
          text: getI18nString("fullscreen.mixed")
        };
    }
  }
};
function j({
  maskType: e,
  recordingKey: t
}) {
  let {
    valueBeforePreview,
    updatePreview,
    onSubmit,
    clearPreview
  } = _$$g({
    id: "mask-type-dropdown",
    property: e,
    onChange: _
  });
  let h = gl(e) || gl(valueBeforePreview);
  let m = h ? b : valueBeforePreview ?? e;
  let g = debounce(e => {
    if (e !== b) {
      if (!e && valueBeforePreview && !gl(valueBeforePreview)) {
        updatePreview(valueBeforePreview);
        return;
      }
      updatePreview(e);
    }
  }, 50);
  return jsxs(bL, {
    value: m,
    onChange: e => {
      e !== b && onSubmit(e);
    },
    onSelectionChange: g,
    onOpenChange: e => {
      valueBeforePreview && !e && clearPreview();
    },
    recordingKey: Pt(t, "maskType"),
    children: [jsx(l9, {
      width: "fill",
      label: jsx(_$$h, {
        children: renderI18nText("fullscreen.mask_panel.mask")
      }),
      children: C.format(m)
    }), jsxs(mc, {
      children: [h && jsxs(Fragment, {
        children: [jsx(c$, {
          value: b,
          disabled: !0,
          children: renderI18nText("fullscreen.mixed")
        }), jsx(wv, {})]
      }), jsx(c$, {
        value: "ALPHA",
        children: C.formatExtended("ALPHA")?.text
      }), jsx(c$, {
        value: "OUTLINE",
        children: C.formatExtended("OUTLINE")?.text
      }), jsx(c$, {
        value: "LUMINANCE",
        children: C.formatExtended("LUMINANCE")?.text
      })]
    })]
  });
}
export const B = $$y0;