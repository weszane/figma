import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { PureComponent, useId } from "react";
import { throwTypeError } from "../figma_app/465776";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { bL } from "../905/911410";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import { b as _$$b, c as _$$c } from "../905/308099";
import { q } from "../905/932270";
import { InputComponent } from "../905/185998";
import { ColorSpaceEnum, Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import f from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { E as _$$E } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { Point } from "../905/736624";
import { getI18nString, renderI18nText } from "../905/303541";
import { hidePickerThunk } from "../figma_app/91703";
import { fullscreenValue } from "../figma_app/455680";
import { ZH } from "../figma_app/504823";
import { valueOrFallback } from "../905/216495";
import { KindEnum } from "../905/129884";
import { fI, JU } from "../figma_app/626177";
import { dx } from "../figma_app/334459";
import { Kj, Yj, OK } from "../905/416496";
import { nM, hD, Po } from "../905/921139";
var _ = f;
let $$O11 = 240;
let D = e => ({
  format: t => {
    switch (t) {
      case "DOCUMENT":
        return getI18nString("fullscreen.properties_panel.export_settings_color_profile.document", {
          documentColorProfile: e === ColorSpaceEnum.DISPLAY_P3 ? getI18nString("fullscreen.properties_panel.export_settings_color_profile.p3") : getI18nString("fullscreen.properties_panel.export_settings_color_profile.srgb")
        });
      case "SRGB":
        return getI18nString("fullscreen.properties_panel.export_settings_color_profile.srgb");
      case "DISPLAY_P3_V4":
        return getI18nString("fullscreen.properties_panel.export_settings_color_profile.display_p3");
      case "CMYK":
        return getI18nString("fullscreen.properties_panel.export_settings_color_profile.cmyk");
    }
  }
});
let L = ["CMYK"];
let F = ["DOCUMENT", "SRGB", "DISPLAY_P3_V4"];
let $$M4 = {
  format: e => {
    switch (e) {
      case Kj.LOW:
        return getI18nString("fullscreen.properties_panel.export_settings_quality.low");
      case Kj.MEDIUM:
        return getI18nString("fullscreen.properties_panel.export_settings_quality.medium");
      case Kj.HIGH:
        return getI18nString("fullscreen.properties_panel.export_settings_quality.high");
      default:
        throwTypeError(e);
    }
  }
};
let $$j7 = [Kj.HIGH, Kj.MEDIUM, Kj.LOW];
let U = {
  format: e => e ? getI18nString("fullscreen.properties_panel.export_settings_image_sampling.bicubic") : getI18nString("fullscreen.properties_panel.export_settings_image_sampling.standard")
};
export class $$B5 extends PureComponent {
  constructor() {
    super(...arguments);
    this.close = () => {
      this.props.dispatch(hidePickerThunk());
      fullscreenValue.deselectProperty();
    };
    this.onColorProfileChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        colorProfile: e
      });
      trackEventAnalytics("export_color_profile_change", {
        colorProfile: e,
        assetType: t.imageType
      });
    };
    this.onUseBicubicSamplerChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        useBicubicSampler: e
      });
    };
    this.onContentsOnlyChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        contentsOnly: e
      });
    };
    this.onSVGIDChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        svgIDMode: e ? "ALWAYS" : "IF_NEEDED"
      });
    };
    this.onSVGTextOutlinesChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        svgOutlineText: e
      });
    };
    this.onUseAbsoluteBoundsChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        useAbsoluteBounds: e
      });
    };
    this.onSVGSimplifyStrokeChange = e => {
      let t = valueOrFallback(this.props.exportSettings, {});
      this.props.onChange({
        ...t,
        svgForceStrokeMasks: !e
      });
    };
    this.onExportQualityChange = (e, t) => {
      let i = valueOrFallback(this.props.exportSettings, {});
      let n = Yj(e, t);
      this.props.onChange({
        ...i,
        quality: n
      });
    };
  }
  render() {
    let e = valueOrFallback(this.props.exportSettings, null);
    if (!e) return null;
    let t = new Point(this.props.pickerShown?.initialX, this.props.pickerShown?.initialY);
    let i = "SVG" === e.imageType && jsxs("div", {
      children: [jsx(fI, {
        className: nM,
        children: jsx(Checkbox, {
          checked: "ALWAYS" === e.svgIDMode,
          onChange: this.onSVGIDChange,
          label: jsx(Label, {
            htmlAttributes: {
              "data-tooltip": getI18nString("fullscreen.properties_panel.export_layer_names_using_id_attributes"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: renderI18nText("fullscreen.properties_panel.include_id_attribute")
          }),
          recordingKey: generateRecordingKey(this.props, "svgID")
        })
      }), Fullscreen && Fullscreen.shouldShowTextNodeExportOptions() && jsx(fI, {
        className: nM,
        children: jsx(Checkbox, {
          checked: !!e.svgOutlineText,
          onChange: this.onSVGTextOutlinesChange,
          label: jsx(Label, {
            htmlAttributes: {
              "data-tooltip": getI18nString("fullscreen.properties_panel.export_text_as_outlined_path_element"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: renderI18nText("fullscreen.properties_panel.outline_text")
          }),
          recordingKey: generateRecordingKey(this.props, "svgTextOutlines")
        })
      }), Fullscreen && Fullscreen.isStrokeMaskableAsSVG() && jsx(fI, {
        className: nM,
        children: jsx(Checkbox, {
          checked: !e.svgForceStrokeMasks,
          onChange: this.onSVGSimplifyStrokeChange,
          label: jsx(Label, {
            htmlAttributes: {
              "data-tooltip": getI18nString("fullscreen.properties_panel.export_stroke_as_inlined_path_element"),
              "data-tooltip-type": KindEnum.TEXT
            },
            children: renderI18nText("fullscreen.properties_panel.simplify_stroke")
          }),
          recordingKey: generateRecordingKey(this.props, "svgSimplifyStroke")
        })
      })]
    });
    let r = jsxs(Fragment, {
      children: [jsx(J, {
        value: e.suffix || "",
        onChange: this.props.onSuffixChange,
        recordingKey: generateRecordingKey(this.props, "suffix")
      }), jsx(ZH, {
        children: ({
          documentExportColorProfile: t
        }) => {
          let i = jsx($$V6, {});
          let r = jsx($$z2, {
            documentExportColorProfile: t,
            onColorProfileChange: this.onColorProfileChange,
            colorProfile: e.colorProfile,
            dispatch: this.props.dispatch,
            dropdownShown: this.props.dropdownShown,
            recordingKey: this.props.recordingKey
          });
          return jsx(dx, {
            left: i,
            right: r
          });
        }
      }), jsx($, {
        onExportQualityChange: this.onExportQualityChange,
        exportSettings: e,
        dispatch: this.props.dispatch,
        dropdownShown: this.props.dropdownShown,
        recordingKey: this.props.recordingKey
      }), getFeatureFlags().bicubic_image_sampler && jsx(Q, {
        onExportImageSamplingChange: this.onUseBicubicSamplerChange,
        exportSettings: e,
        dispatch: this.props.dispatch,
        dropdownShown: this.props.dropdownShown,
        recordingKey: this.props.recordingKey
      }), "PDF" === e.imageType ? null : jsx(fI, {
        className: nM,
        children: jsx(_$$E, {
          name: "export_settings_use_contents_only_checkbox",
          children: jsx(Checkbox, {
            checked: !!e.contentsOnly,
            onChange: this.onContentsOnlyChange,
            label: jsx(Label, {
              children: renderI18nText("fullscreen.properties_panel.ignore_overlapping_layers")
            }),
            recordingKey: generateRecordingKey(this.props, "contentsOnly")
          })
        })
      }), Fullscreen && Fullscreen.shouldShowTextNodeExportOptions() && jsx(fI, {
        className: nM,
        children: jsx(_$$E, {
          name: "export_settings_use_absolute_bounds_checkbox",
          children: jsx(Checkbox, {
            checked: !!e.useAbsoluteBounds,
            onChange: this.onUseAbsoluteBoundsChange,
            label: jsx(Label, {
              children: renderI18nText("fullscreen.properties_panel.include_bounding_box")
            }),
            recordingKey: generateRecordingKey(this.props, "useAbsoluteBounds")
          })
        })
      }), i]
    });
    return jsx(bL, {
      onClose: e => {
        "outside" !== e.source && this.close();
      },
      defaultPosition: t,
      width: $$O11,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("fullscreen.properties_panel.export")
          })
        }), jsx(DialogBody, {
          padding: {
            left: 0,
            right: 0
          },
          children: jsx(_$$k2, {
            name: "export_settings_modal",
            children: r
          })
        })]
      })
    });
  }
}
export function $$V6() {
  return jsx(Label, {
    variant: "secondary",
    className: hD,
    htmlFor: $$G10,
    children: getI18nString("fullscreen.properties_panel.export_settings_color_profile")
  });
}
$$B5.displayName = "ExportSettings";
export let $$G10 = "export-settings-color-profile";
export function $$z2({
  documentExportColorProfile: e,
  onColorProfileChange: t,
  colorProfile: i,
  dropdownShown: r,
  dispatch: a,
  dropdownClassName: s,
  width: o,
  inBuzzPrint: l,
  ...d
}) {
  return jsx(_$$E, {
    name: "export_settings_color_profile_select",
    children: jsxs(_$$bL, {
      value: i?.toString() ?? "DOCUMENT",
      onChange: t,
      recordingKey: generateRecordingKey(d, "colorProfile"),
      children: [jsx(DZ, {
        id: $$G10,
        "data-testid": $$G10,
        width: "fill",
        disabled: !!l
      }), jsx(mc, {
        children: (l ? L : F).map(t => jsx(c$, {
          value: t.toString(),
          children: D(e).format(t)
        }, t))
      })]
    }, e)
  });
}
export let $$H0 = "export-settings-quality";
export function $$W9() {
  return jsx(Label, {
    variant: "secondary",
    className: hD,
    htmlFor: $$H0,
    children: getI18nString("fullscreen.properties_panel.export_settings_quality")
  });
}
export function $$K1({
  onExportQualityChange: e,
  quality: t,
  imageType: i,
  dropdownShown: r,
  dispatch: a,
  ...s
}) {
  return jsx(_$$E, {
    name: "export_settings_quality_select",
    children: jsxs(_$$bL, {
      value: OK(t, i).toString(),
      onChange: t => {
        i && e(+t, i);
      },
      recordingKey: generateRecordingKey(s, "exportQuality"),
      children: [jsx(DZ, {
        id: $$H0,
        "data-testid": "export-settings-export-quality",
        width: "fill"
      }), jsx(mc, {
        children: $$j7.map(e => jsx(c$, {
          value: e.toString(),
          children: $$M4.format(e)
        }, e))
      })]
    })
  });
}
export function $$Y8({
  value: e,
  setValue: t,
  numSlides: i
}) {
  return jsxs(_$$b, {
    value: e,
    legend: jsx(q, {
      children: getI18nString("fullscreen.properties_panel.export_settings.slides_content")
    }),
    onChange: t,
    children: [jsx(_$$c, {
      value: "all",
      label: jsx(Label, {
        children: getI18nString("fullscreen.properties_panel.export_settings.slides_content.all")
      })
    }), i > 0 && jsx(_$$c, {
      value: "selection",
      label: jsx(Label, {
        children: getI18nString("fullscreen.properties_panel.export_settings.slides_content.selected", {
          numSlides: i
        })
      })
    })]
  });
}
export function $$q3() {
  return jsx(JU, {
    className: _()(hD, Po),
    htmlFor: $$G10,
    children: getI18nString("fullscreen.properties_panel.export_settings.slides_content")
  });
}
function $({
  onExportQualityChange: e,
  exportSettings: t,
  dropdownShown: i,
  dispatch: r,
  recordingKey: a
}) {
  if (!t || !t.quality || !t.imageType) return null;
  if ("JPEG" === t.imageType || "PDF" === t.imageType) {
    let s = jsx($$W9, {});
    let o = jsx($$K1, {
      onExportQualityChange: e,
      quality: t.quality,
      imageType: t.imageType,
      dropdownShown: i,
      dispatch: r,
      recordingKey: a
    });
    return jsx(dx, {
      left: s,
      right: o
    });
  }
  return null;
}
function Z() {
  return jsx(Label, {
    variant: "secondary",
    className: hD,
    htmlFor: "export-settings-image-sampling",
    children: getI18nString("fullscreen.properties_panel.export_settings_image_sampling")
  });
}
function X({
  onExportImageSamplingChange: e,
  useBicubicSampler: t,
  dropdownShown: i,
  dispatch: r,
  ...a
}) {
  return jsx(_$$E, {
    name: "export_settings_image_sampling_select",
    children: jsxs(_$$bL, {
      value: t ? "BICUBIC" : "DEFAULT",
      onChange: t => {
        e("BICUBIC" === t);
      },
      recordingKey: generateRecordingKey(a, "imageSampling"),
      children: [jsx(DZ, {
        id: "export-settings-image-sampling",
        "data-testid": "export-settings-image-sampling",
        width: "fill"
      }), jsxs(mc, {
        children: [jsx(c$, {
          value: "BICUBIC",
          children: U.format(!0)
        }), jsx(c$, {
          value: "DEFAULT",
          children: U.format(!1)
        })]
      })]
    })
  });
}
function Q({
  onExportImageSamplingChange: e,
  exportSettings: t,
  dropdownShown: i,
  dispatch: r,
  recordingKey: a
}) {
  if (!t) return null;
  let s = jsx(Z, {});
  let o = jsx(X, {
    onExportImageSamplingChange: e,
    useBicubicSampler: !!t.useBicubicSampler,
    dropdownShown: i,
    dispatch: r,
    recordingKey: a
  });
  return jsx(dx, {
    left: s,
    right: o
  });
}
function J({
  value: e,
  onChange: t,
  recordingKey: i
}) {
  let a = useId();
  return jsx(_$$E, {
    name: "export_settings_suffix_text_input",
    children: jsx(dx, {
      left: jsx(Label, {
        variant: "secondary",
        htmlFor: a,
        className: hD,
        children: getI18nString("fullscreen.properties_panel.export_suffix_label")
      }),
      right: jsx(InputComponent.Lazy, {
        id: a,
        value: e,
        onChange: t,
        placeholder: getI18nString("fullscreen.properties_panel.export_suffix_placeholder.none"),
        recordingKey: i
      })
    })
  });
}
export const F4 = $$H0;
export const J5 = $$K1;
export const K8 = $$z2;
export const O8 = $$q3;
export const SD = $$M4;
export const Tq = $$B5;
export const Vq = $$V6;
export const ZF = $$j7;
export const jd = $$Y8;
export const sZ = $$W9;
export const vl = $$G10;
export const zk = $$O11;