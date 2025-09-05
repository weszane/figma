import { jsxs, jsx } from "react/jsx-runtime";
import { useId, useCallback, memo, useState } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { b as _$$b } from "../905/946806";
import { v8u, ZRE, EUU, Ez5, glU } from "../figma_app/763686";
import { Pt, of } from "../figma_app/806412";
import { n as _$$n } from "../figma_app/339971";
import { t as _$$t, tx } from "../905/303541";
import { rg } from "../figma_app/401069";
import { Ce } from "../905/156213";
import { J2 } from "../figma_app/84367";
import { Ju } from "../905/102752";
import { throwTypeError } from "../figma_app/465776";
import { Ay } from "../figma_app/778880";
import { Ho, JI, GU, t_, dB, Kj } from "../905/416496";
import { J as _$$J } from "../905/270045";
import { bL as _$$bL, DZ, mc, c$ } from "../905/493196";
import U from "classnames";
import { A as _$$A } from "../905/639174";
import { b as _$$b2, c as _$$c } from "../905/308099";
import { q as _$$q } from "../905/932270";
import { Ib } from "../905/129884";
import { SD, ZF } from "../905/920793";
let I = {
  PNG: v8u.PNG,
  JPG: v8u.JPEG,
  CSV: v8u.CSV,
  PDF: v8u.PDF
};
function E(e) {
  switch (e) {
    case v8u.PNG:
      return "PNG";
    case v8u.JPEG:
      return "JPG";
    case v8u.CSV:
      return "CSV";
    case v8u.PDF:
      return "PDF";
    default:
      throwTypeError(e);
  }
}
function x(e) {
  switch (e) {
    case ZRE.SOLID:
      return _$$t("whiteboard.figjam_export.solid");
    case ZRE.TRANSPARENT:
      return _$$t("whiteboard.figjam_export.transparent");
    case ZRE.GRID:
      return _$$t("whiteboard.figjam_export.grid");
    default:
      throwTypeError(e);
  }
}
function S(e) {
  switch (e) {
    case EUU.TABLE:
      return _$$t("whiteboard.figjam_export.table");
    case EUU.STICKY:
      return _$$t("whiteboard.figjam_export.sticky");
    default:
      throwTypeError(e);
  }
}
function w(e) {
  switch (e) {
    case "selection":
      return _$$t("whiteboard.figjam_export.selection_only");
    case "file":
      return _$$t("whiteboard.figjam_export.entire_file");
    default:
      throwTypeError(e);
  }
}
function C(e) {
  switch (e) {
    case v8u.CSV:
      return [];
    case v8u.JPEG:
      return [ZRE.SOLID, ZRE.GRID];
    case v8u.PNG:
      return [ZRE.TRANSPARENT, ZRE.SOLID, ZRE.GRID];
    case v8u.PDF:
      return [ZRE.SOLID];
    default:
      throwTypeError(e);
  }
}
function T() {
  return [EUU.TABLE, EUU.STICKY];
}
function k(e, t) {
  return C(t).includes(e);
}
function R(e) {
  switch (e) {
    case v8u.JPEG:
      return Ho;
    case v8u.PDF:
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
    children: [jsx(_$$J, {
      htmlFor: l,
      className: D,
      children: tx("whiteboard.figjam_export.export_area")
    }), !o && jsx(_$$J, {
      className: L,
      children: w("file")
    }), o && jsxs(_$$bL, {
      value: w(areaType),
      onChange: e => {
        let t = M.find(t => w(t) === e);
        void 0 !== t && onChangeAreaType(t);
      },
      recordingKey: Pt(recordingKey, "exportAreaTypeSelect"),
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
let G = [ZRE.GRID, ZRE.TRANSPARENT, ZRE.SOLID];
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
  let c = d ? x(d) : _$$t("whiteboard.figjam_export.no_background");
  let u = useId();
  return jsxs("div", {
    className: O,
    children: [jsx(_$$J, {
      htmlFor: u,
      className: D,
      children: tx("whiteboard.figjam_export.background")
    }), !l && jsx(_$$J, {
      className: L,
      children: c
    }), l && jsxs(_$$bL, {
      value: x(backgroundType),
      onChange: e => {
        let t = G.find(t => x(t) === e);
        void 0 !== t && onChangeBackgroundType(t);
      },
      recordingKey: Pt(recordingKey, "backgroundTypeSelect"),
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
    case ZRE.TRANSPARENT:
      return jsx("div", {
        className: F,
        style: {
          background: `url(${_$$A()})`,
          backgroundSize: "5px 5px"
        }
      });
    case ZRE.GRID:
      return jsx("div", {
        className: $$B()("figjam_export_pickers--gridIcon--mPS09 thumbnail_DEPRECATED--lightModeDotGrid--ZUhXy thumbnail_DEPRECATED--thumbnailContainer--xPcsg", F)
      });
    case ZRE.SOLID:
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
  return fileType !== v8u.CSV ? null : jsxs("div", {
    className: O,
    children: [jsx(_$$J, {
      htmlFor: l,
      className: D,
      children: tx("whiteboard.figjam_export.content_type")
    }), jsxs(_$$bL, {
      value: S(contentType),
      onChange: e => {
        let t = T().find(t => S(t) === e);
        void 0 !== t && onChangeContentType(t);
      },
      recordingKey: Pt(recordingKey, "contentTypeSelect"),
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
    children: [jsx(_$$J, {
      className: D,
      children: tx("whiteboard.figjam_export.file_type")
    }), jsx(_$$b2, {
      legend: jsx(_$$q, {
        children: tx("whiteboard.figjam_export.file_type")
      }),
      value: s,
      onChange: e => onChangeFileType(I[e]),
      recordingKey: Pt(recordingKey, "exportFileTypeRadioGroup"),
      children: (Ay.isIpadNative ? [v8u.PNG, v8u.JPEG, v8u.PDF] : [v8u.PNG, v8u.JPEG, v8u.PDF, v8u.CSV]).map(e => {
        let t = E(e);
        let i = disabledFileTypes.includes(e) ? {
          readonly: !0,
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": _$$t("whiteboard.figjam_export.csv_disabled")
          }
        } : {};
        return jsx(_$$c, {
          value: t,
          label: jsx(_$$J, {
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
  if (fileType !== v8u.PDF && fileType !== v8u.JPEG) return null;
  let c = l ?? Kj.HIGH;
  return jsxs("div", {
    className: O,
    children: [jsx(_$$J, {
      htmlFor: d,
      className: D,
      children: tx("fullscreen.properties_panel.export_settings_quality")
    }), jsxs(_$$bL, {
      value: SD.format(c),
      onChange: e => {
        let i = ZF.find(t => SD.format(t) === e);
        void 0 !== i && o(i, fileType);
      },
      recordingKey: Pt(recordingKey, "qualitySelect"),
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
  let A = hS(i);
  let b = useDispatch();
  let v = pickerInfo.nodeCounts.selectionStickyCount > 0 || pickerInfo.nodeCounts.canvasStickyCount > 0;
  let I = pickerInfo.nodeCounts.selectionTableCount > 0 || pickerInfo.nodeCounts.canvasTableCount > 0;
  let E = [];
  v || I || E.push(v8u.CSV);
  let x = [];
  v || x.push(EUU.STICKY);
  I || x.push(EUU.TABLE);
  let S = J2(Ez5.editorPreferences().exportSelectionSettings);
  let [w, C] = useState(S.fileType);
  let [T, N] = useState(S.contentType);
  let [P, O] = useState(S.backgroundType);
  let [D, L] = useState(() => 0 === S.quality ? R(S.fileType) : S.quality);
  let F = useSelector(e => !!e.mirror.selectionProperties.numSelected);
  let [M, U] = useState(F ? "selection" : "file");
  let [B, V] = useState(!1);
  let G = of(Q, "submit", () => {
    V(!0);
    b(_$$n.set({
      message: _$$t("whiteboard.figjam_export.exporting"),
      showLoadingSpinner: !0,
      callback: () => {
        Ez5.editorPreferences().exportSelectionSettings.set({
          contentType: T,
          fileType: w,
          backgroundType: P,
          quality: D
        });
        "selection" === M ? glU.exportSelectionOrCurrentPage(!0, pickerInfo.selectionArea, pickerInfo.nodeCounts.selectionNodeCount) : glU.exportSelectionOrCurrentPage(!1, pickerInfo.canvasArea, pickerInfo.nodeCounts.canvasNodeCount);
        b(rg());
        b(Ce());
      }
    }));
  });
  return jsx(bL, {
    manager: A,
    height: "dynamic",
    width: 364,
    children: jsxs(Rq, {
      onSubmit: G,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: tx("whiteboard.figjam_export.export")
        })
      }), jsxs(nB, {
        children: [jsx($, {
          fileType: w,
          onChangeFileType: e => {
            C(e);
            k(P, e) || O(ZRE.SOLID);
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
      }), jsxs(wi, {
        children: [function (e, t, i) {
          switch (e) {
            case v8u.PNG:
            case v8u.JPEG:
              return ("selection" === t ? i.selectionArea : i.canvasArea) >= 15e7;
            case v8u.PDF:
              return ("selection" === t ? i.nodeCounts.selectionNodeCount : i.nodeCounts.canvasNodeCount) >= 300;
            case v8u.CSV:
              return !1;
            default:
              throwTypeError(e);
          }
        }(w, M, pickerInfo) && jsxs("div", {
          className: "figjam_export_pickers--exportWarning--KzT0q",
          children: [jsx(_$$b, {}), tx("whiteboard.figjam_export.exporting_may_take_a_minute_or_two")]
        }), jsx(jk, {
          children: jsx($n, {
            variant: "primary",
            type: "submit",
            disabled: B,
            children: tx("whiteboard.figjam_export.export")
          })
        })]
      })]
    })
  });
});
let $$ee0 = Ju(J, "FIGJAM_EXPORT_SETTINGS_PICKER_MODAL");
export const B = $$ee0;