import { jsxs, jsx } from "react/jsx-runtime";
import { useId, useCallback, memo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { b as _$$b } from "../905/946806";
import { FileFormat, FillType, StickyTableConfig, AppStateTsApi, Fullscreen } from "../figma_app/763686";
import { generateRecordingKey, useHandleFocusEvent } from "../figma_app/878298";
import { n as _$$n } from "../figma_app/339971";
import { getI18nString, renderI18nText } from "../905/303541";
import { rg } from "../figma_app/401069";
import { hideModal } from "../905/156213";
import { getObservableOrFallback } from "../figma_app/84367";
import { registerModal } from "../905/102752";
import { throwTypeError } from "../figma_app/465776";
import { BrowserInfo } from "../figma_app/778880";
import { Ho, JI, GU, t_, dB, Kj } from "../905/416496";
import { Label } from "../905/270045";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import U from "classnames";
import { A as _$$A } from "../905/639174";
import { RadioInputRoot, RadioInputOption } from "../905/308099";
import { Legend } from "../905/932270";
import { KindEnum } from "../905/129884";
import { SD, ZF } from "../905/920793";
let I = {
  PNG: FileFormat.PNG,
  JPG: FileFormat.JPEG,
  CSV: FileFormat.CSV,
  PDF: FileFormat.PDF
};
function E(e) {
  switch (e) {
    case FileFormat.PNG:
      return "PNG";
    case FileFormat.JPEG:
      return "JPG";
    case FileFormat.CSV:
      return "CSV";
    case FileFormat.PDF:
      return "PDF";
    default:
      throwTypeError(e);
  }
}
function x(e) {
  switch (e) {
    case FillType.SOLID:
      return getI18nString("whiteboard.figjam_export.solid");
    case FillType.TRANSPARENT:
      return getI18nString("whiteboard.figjam_export.transparent");
    case FillType.GRID:
      return getI18nString("whiteboard.figjam_export.grid");
    default:
      throwTypeError(e);
  }
}
function S(e) {
  switch (e) {
    case StickyTableConfig.TABLE:
      return getI18nString("whiteboard.figjam_export.table");
    case StickyTableConfig.STICKY:
      return getI18nString("whiteboard.figjam_export.sticky");
    default:
      throwTypeError(e);
  }
}
function w(e) {
  switch (e) {
    case "selection":
      return getI18nString("whiteboard.figjam_export.selection_only");
    case "file":
      return getI18nString("whiteboard.figjam_export.entire_file");
    default:
      throwTypeError(e);
  }
}
function C(e) {
  switch (e) {
    case FileFormat.CSV:
      return [];
    case FileFormat.JPEG:
      return [FillType.SOLID, FillType.GRID];
    case FileFormat.PNG:
      return [FillType.TRANSPARENT, FillType.SOLID, FillType.GRID];
    case FileFormat.PDF:
      return [FillType.SOLID];
    default:
      throwTypeError(e);
  }
}
function T() {
  return [StickyTableConfig.TABLE, StickyTableConfig.STICKY];
}
function k(e, t) {
  return C(t).includes(e);
}
function R(e) {
  switch (e) {
    case FileFormat.JPEG:
      return Ho;
    case FileFormat.PDF:
      return JI;
    default:
      return GU;
  }
}
let O = "figjam_export_pickers--selectRow--aTA0S figjam_export_pickers--row--iT7Hm";
let D = "figjam_export_pickers--label--a71ES";
let L = "figjam_export_pickers--dropdownPlaceholderText--JNOu2 ellipsis--ellipsis--Tjyfa";
let F = "figjam_export_pickers--backgroundTypeIcon--s-7IZ";
let M = ["selection", "file"];
function j(e) {
  let {
    areaType,
    onChangeAreaType,
    recordingKey
  } = e;
  let o = useSelector(e => !!e.mirror.selectionProperties.numSelected);
  let l = useId();
  return jsxs("div", {
    className: o ? O : "figjam_export_pickers--exportAreaPlaceholderRow--G7H-m figjam_export_pickers--selectRow--aTA0S figjam_export_pickers--row--iT7Hm",
    children: [jsx(Label, {
      htmlFor: l,
      className: D,
      children: renderI18nText("whiteboard.figjam_export.export_area")
    }), !o && jsx(Label, {
      className: L,
      children: w("file")
    }), o && jsxs(_$$bL, {
      value: w(areaType),
      onChange: e => {
        let t = M.find(t => w(t) === e);
        void 0 !== t && onChangeAreaType(t);
      },
      recordingKey: generateRecordingKey(recordingKey, "exportAreaTypeSelect"),
      children: [jsx(DZ, {
        id: l
      }), jsx(mc, {
        children: M.map(e => jsx(c$, {
          value: w(e),
          children: w(e)
        }, e))
      })]
    })]
  });
}
var $$B = U;
let G = [FillType.GRID, FillType.TRANSPARENT, FillType.SOLID];
function z(e) {
  let {
    fileType,
    backgroundType,
    onChangeBackgroundType,
    recordingKey
  } = e;
  let o = C(fileType);
  let l = o.length > 1;
  let d = o[0];
  let c = d ? x(d) : getI18nString("whiteboard.figjam_export.no_background");
  let u = useId();
  return jsxs("div", {
    className: O,
    children: [jsx(Label, {
      htmlFor: u,
      className: D,
      children: renderI18nText("whiteboard.figjam_export.background")
    }), !l && jsx(Label, {
      className: L,
      children: c
    }), l && jsxs(_$$bL, {
      value: x(backgroundType),
      onChange: e => {
        let t = G.find(t => x(t) === e);
        void 0 !== t && onChangeBackgroundType(t);
      },
      recordingKey: generateRecordingKey(recordingKey, "backgroundTypeSelect"),
      children: [jsx(DZ, {
        id: u
      }), jsx(mc, {
        children: G.map(e => {
          let i = !k(e, fileType);
          return jsx(c$, {
            value: x(e),
            disabled: i,
            children: jsxs("div", {
              className: "figjam_export_pickers--backgroundOptionWrapper--DkFx1",
              children: [jsx(H, {
                background: e,
                disabled: i
              }), jsx("span", {
                className: "figjam_export_pickers--backgroundTypeLabel--b--Px ellipsis--ellipsis--Tjyfa",
                children: x(e)
              })]
            })
          }, e);
        })
      })]
    })]
  });
}
function H(e) {
  switch (e.background) {
    case FillType.TRANSPARENT:
      return jsx("div", {
        className: F,
        style: {
          background: `url(${_$$A()})`,
          backgroundSize: "5px 5px"
        }
      });
    case FillType.GRID:
      return jsx("div", {
        className: $$B()("figjam_export_pickers--gridIcon--mPS09 thumbnail_DEPRECATED--lightModeDotGrid--ZUhXy thumbnail_DEPRECATED--thumbnailContainer--xPcsg", F)
      });
    case FillType.SOLID:
      return jsx("div", {
        className: $$B()(F, "figjam_export_pickers--solidIcon--Gt-95")
      });
    default:
      throwTypeError(e.background);
  }
}
function W(e) {
  let {
    fileType,
    contentType,
    onChangeContentType,
    disabledContentTypes,
    recordingKey
  } = e;
  let l = useId();
  return fileType !== FileFormat.CSV ? null : jsxs("div", {
    className: O,
    children: [jsx(Label, {
      htmlFor: l,
      className: D,
      children: renderI18nText("whiteboard.figjam_export.content_type")
    }), jsxs(_$$bL, {
      value: S(contentType),
      onChange: e => {
        let t = T().find(t => S(t) === e);
        void 0 !== t && onChangeContentType(t);
      },
      recordingKey: generateRecordingKey(recordingKey, "contentTypeSelect"),
      children: [jsx(DZ, {
        id: l
      }), jsx(mc, {
        children: T().map(e => {
          let t = S(e);
          return jsx(c$, {
            value: t,
            disabled: disabledContentTypes.includes(e),
            children: t
          }, e);
        })
      })]
    })]
  });
}
function $(e) {
  let {
    fileType,
    onChangeFileType,
    disabledFileTypes,
    recordingKey
  } = e;
  let s = E(fileType);
  return jsxs("div", {
    className: "figjam_export_pickers--row--iT7Hm",
    children: [jsx(Label, {
      className: D,
      children: renderI18nText("whiteboard.figjam_export.file_type")
    }), jsx(RadioInputRoot, {
      legend: jsx(Legend, {
        children: renderI18nText("whiteboard.figjam_export.file_type")
      }),
      value: s,
      onChange: e => onChangeFileType(I[e]),
      recordingKey: generateRecordingKey(recordingKey, "exportFileTypeRadioGroup"),
      children: (BrowserInfo.isIpadNative ? [FileFormat.PNG, FileFormat.JPEG, FileFormat.PDF] : [FileFormat.PNG, FileFormat.JPEG, FileFormat.PDF, FileFormat.CSV]).map(e => {
        let t = E(e);
        let i = disabledFileTypes.includes(e) ? {
          readonly: !0,
          htmlAttributes: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": getI18nString("whiteboard.figjam_export.csv_disabled")
          }
        } : {};
        return jsx(RadioInputOption, {
          value: t,
          label: jsx(Label, {
            children: t
          }),
          htmlAttributes: {
            "data-testid": `figjam-export-file-type-option-${t}`
          },
          ...i
        }, t);
      })
    })]
  });
}
function X(e) {
  let {
    fileType,
    quality,
    onChangeQuality,
    recordingKey
  } = e;
  let o = useCallback((e, t) => {
    onChangeQuality(t_(e, t));
  }, [onChangeQuality]);
  let l = dB(quality, fileType);
  let d = useId();
  if (fileType !== FileFormat.PDF && fileType !== FileFormat.JPEG) return null;
  let c = l ?? Kj.HIGH;
  return jsxs("div", {
    className: O,
    children: [jsx(Label, {
      htmlFor: d,
      className: D,
      children: renderI18nText("fullscreen.properties_panel.export_settings_quality")
    }), jsxs(_$$bL, {
      value: SD.format(c),
      onChange: e => {
        let i = ZF.find(t => SD.format(t) === e);
        void 0 !== i && o(i, fileType);
      },
      recordingKey: generateRecordingKey(recordingKey, "qualitySelect"),
      children: [jsx(DZ, {
        id: d
      }), jsx(mc, {
        children: ZF.map(e => jsx(c$, {
          value: SD.format(e),
          children: SD.format(e)
        }, e))
      })]
    })]
  });
}
let Q = "exportSettingsPickerModal";
let J = memo(function (e) {
  let {
    pickerInfo,
    ...i
  } = e;
  let A = useModalManager(i);
  let b = useDispatch();
  let v = pickerInfo.nodeCounts.selectionStickyCount > 0 || pickerInfo.nodeCounts.canvasStickyCount > 0;
  let I = pickerInfo.nodeCounts.selectionTableCount > 0 || pickerInfo.nodeCounts.canvasTableCount > 0;
  let E = [];
  v || I || E.push(FileFormat.CSV);
  let x = [];
  v || x.push(StickyTableConfig.STICKY);
  I || x.push(StickyTableConfig.TABLE);
  let S = getObservableOrFallback(AppStateTsApi.editorPreferences().exportSelectionSettings);
  let [w, C] = useState(S.fileType);
  let [T, N] = useState(S.contentType);
  let [P, O] = useState(S.backgroundType);
  let [D, L] = useState(() => 0 === S.quality ? R(S.fileType) : S.quality);
  let F = useSelector(e => !!e.mirror.selectionProperties.numSelected);
  let [M, U] = useState(F ? "selection" : "file");
  let [B, V] = useState(!1);
  let G = useHandleFocusEvent(Q, "submit", () => {
    V(!0);
    b(_$$n.set({
      message: getI18nString("whiteboard.figjam_export.exporting"),
      showLoadingSpinner: !0,
      callback: () => {
        AppStateTsApi.editorPreferences().exportSelectionSettings.set({
          contentType: T,
          fileType: w,
          backgroundType: P,
          quality: D
        });
        "selection" === M ? Fullscreen.exportSelectionOrCurrentPage(!0, pickerInfo.selectionArea, pickerInfo.nodeCounts.selectionNodeCount) : Fullscreen.exportSelectionOrCurrentPage(!1, pickerInfo.canvasArea, pickerInfo.nodeCounts.canvasNodeCount);
        b(rg());
        b(hideModal());
      }
    }));
  });
  return jsx(ModalRootComponent, {
    manager: A,
    height: "dynamic",
    width: 364,
    children: jsxs(ModalFormContents, {
      onSubmit: G,
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText("whiteboard.figjam_export.export")
        })
      }), jsxs(DialogBody, {
        children: [jsx($, {
          fileType: w,
          onChangeFileType: e => {
            C(e);
            k(P, e) || O(FillType.SOLID);
            L(R(e));
          },
          disabledFileTypes: E,
          recordingKey: Q
        }), jsx(W, {
          fileType: w,
          contentType: T,
          onChangeContentType: N,
          disabledContentTypes: x,
          recordingKey: Q
        }), jsx(X, {
          fileType: w,
          quality: D,
          onChangeQuality: L,
          recordingKey: Q
        }), jsx(z, {
          fileType: w,
          backgroundType: P,
          onChangeBackgroundType: O,
          recordingKey: Q
        }), jsx(j, {
          areaType: M,
          onChangeAreaType: U,
          recordingKey: Q
        })]
      }), jsxs(DialogFooter, {
        children: [function (e, t, i) {
          switch (e) {
            case FileFormat.PNG:
            case FileFormat.JPEG:
              return ("selection" === t ? i.selectionArea : i.canvasArea) >= 15e7;
            case FileFormat.PDF:
              return ("selection" === t ? i.nodeCounts.selectionNodeCount : i.nodeCounts.canvasNodeCount) >= 300;
            case FileFormat.CSV:
              return !1;
            default:
              throwTypeError(e);
          }
        }(w, M, pickerInfo) && jsxs("div", {
          className: "figjam_export_pickers--exportWarning--KzT0q",
          children: [jsx(_$$b, {}), renderI18nText("whiteboard.figjam_export.exporting_may_take_a_minute_or_two")]
        }), jsx(DialogActionStrip, {
          children: jsx(Button, {
            variant: "primary",
            type: "submit",
            disabled: B,
            children: renderI18nText("whiteboard.figjam_export.export")
          })
        })]
      })]
    })
  });
});
let $$ee0 = registerModal(J, "FIGJAM_EXPORT_SETTINGS_PICKER_MODAL");
export const B = $$ee0;