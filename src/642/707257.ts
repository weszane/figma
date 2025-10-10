import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useId } from "react";
import { debounce } from "../905/915765";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset, SelectRoot } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { generateRecordingKey } from "../figma_app/878298";
import { k } from "../905/582200";
import { renderI18nText, getI18nString } from "../905/303541";
import { fullscreenValue } from "../figma_app/455680";
import { isInvalidValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
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
function _(e, t = yesNoTrackingEnum.YES) {
  fullscreenValue.updateSelectionProperties({
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
  let h = isInvalidValue(e) || isInvalidValue(valueBeforePreview);
  let m = h ? b : valueBeforePreview ?? e;
  let g = debounce(e => {
    if (e !== b) {
      if (!e && valueBeforePreview && !isInvalidValue(valueBeforePreview)) {
        updatePreview(valueBeforePreview);
        return;
      }
      updatePreview(e);
    }
  }, 50);
  return jsxs(SelectGroupLabel, {
    value: m,
    onChange: e => {
      e !== b && onSubmit(e);
    },
    onSelectionChange: g,
    onOpenChange: e => {
      valueBeforePreview && !e && clearPreview();
    },
    recordingKey: generateRecordingKey(t, "maskType"),
    children: [jsx(SelectSeparator, {
      width: "fill",
      label: jsx(HiddenLabel, {
        children: renderI18nText("fullscreen.mask_panel.mask")
      }),
      children: C.format(m)
    }), jsxs(SelectContainer, {
      children: [h && jsxs(Fragment, {
        children: [jsx(SelectOptionReset, {
          value: b,
          disabled: !0,
          children: renderI18nText("fullscreen.mixed")
        }), jsx(SelectRoot, {})]
      }), jsx(SelectOptionReset, {
        value: "ALPHA",
        children: C.formatExtended("ALPHA")?.text
      }), jsx(SelectOptionReset, {
        value: "OUTLINE",
        children: C.formatExtended("OUTLINE")?.text
      }), jsx(SelectOptionReset, {
        value: "LUMINANCE",
        children: C.formatExtended("LUMINANCE")?.text
      })]
    })]
  });
}
export const B = $$y0;