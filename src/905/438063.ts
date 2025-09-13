import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useId } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { ButtonPrimitive } from "../905/632989";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { t as _$$t } from "../905/117577";
import { a as _$$a } from "../905/964520";
import { DocumentColorProfileEnum, Fullscreen } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { h as _$$h } from "../905/207101";
import { generateRecordingKey } from "../figma_app/878298";
import { k as _$$k3 } from "../905/582200";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { LU, kG } from "../figma_app/327588";
import { Pc, gI, dS } from "../figma_app/396464";
import { rg } from "../figma_app/401069";
import { hideModalHandler } from "../905/156213";
import { ZH } from "../figma_app/504823";
import { replaceSelection } from "../figma_app/741237";
import { Um } from "../905/848862";
import { eY } from "../figma_app/722362";
import { registerModal } from "../905/102752";
import { JI, Yj } from "../905/416496";
import { J5, K8, F4, vl } from "../905/920793";
import { W as _$$W, B } from "../905/72930";
import { Hk, fu, pu } from "../figma_app/123994";
import { eD } from "../905/257620";
export let $$M0 = registerModal(function (e) {
  let [t, i] = useState(!1);
  let u = useModalManager(e);
  let p = useDispatch();
  let m = eY();
  let h = Pc();
  let g = gI();
  let y = dS();
  let [N, M] = useState(g);
  let U = LU();
  let B = kG();
  let V = Um();
  let [G, z] = useState(JI);
  let [H, W] = useState("DOCUMENT");
  let [K, Y] = useState(!1);
  let [q, $] = useState("PNG");
  let [Z, X] = useState({
    type: "CONTENT_SCALE",
    value: 1
  });
  _$$h(() => {
    0 === g.length && 0 === y.length && (B ? replaceSelection([U]) : replaceSelection(h));
  });
  useEffect(() => {
    M(_$$W(g, y, h, m));
  }, [h, m, g, y]);
  let Q = N.length;
  let J = jsx(Hk, {
    ariaLabel: getI18nString("cooper.toolbar.export_modal.file_type"),
    imageType: q,
    setImageType: e => {
      $(e);
      "PDF Print" === e ? W("CMYK") : W("DOCUMENT");
    },
    dropdownShown: V,
    dispatch: p
  });
  let ee = jsx(fu, {
    ariaLabel: getI18nString("cooper.toolbar.export_modal.size"),
    imageType: q,
    constraint: Z,
    setConstraint: X,
    dropdownShown: V,
    dispatch: p
  });
  let et = jsx(J5, {
    onExportQualityChange: (e, t) => {
      z(Yj(e, t));
    },
    quality: G,
    imageType: q,
    dropdownShown: V,
    dispatch: p
  });
  let ei = jsx(ZH, {
    children: ({
      documentExportColorProfile: e
    }) => jsx(K8, {
      documentExportColorProfile: e,
      onColorProfileChange: W,
      colorProfile: H,
      dispatch: p,
      dropdownShown: V,
      dropdownClassName: eD,
      width: 240,
      inBuzzPrint: !!getFeatureFlags().buzz_print_export && "PDF Print" === q
    }, H)
  });
  return jsx(ModalRootComponent, {
    manager: u,
    width: "fit-content",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: getI18nString("cooper.toolbar.export_modal.export_title")
        })
      }), jsx(nB, {
        padding: 0,
        children: jsx(_$$k3, {
          name: "cooper_export_modal",
          children: jsx(j, {
            imageTypeInput: J,
            constraintInput: ee,
            qualityInput: et,
            colorProfileInput: ei,
            imageType: q,
            selectedIds: N,
            shouldAddPrintMarks: K,
            setShouldAddPrintMarks: Y
          })
        })
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx(Button, {
            variant: "primary",
            onClick: () => {
              i(!0);
              let e = DocumentColorProfileEnum.DOCUMENT;
              function t(e) {
                let t = !0;
                setTimeout(() => {
                  try {
                    e();
                  } catch (e) {
                    t = !1;
                    p(VisualBellActions.enqueue({
                      message: getI18nString("cooper.toolbar.export_modal.visual_bell.failed_to_export")
                    }));
                  } finally {
                    i(!1);
                  }
                  t && (p(hideModalHandler()), p(VisualBellActions.enqueue({
                    message: getI18nString("cooper.toolbar.export_modal.visual_bell.exported_assets", {
                      assetCount: Q
                    })
                  })));
                }, 0);
              }
              if ("SRGB" === H ? e = DocumentColorProfileEnum.SRGB : "DISPLAY_P3_V4" === H ? e = DocumentColorProfileEnum.DISPLAY_P3_V4 : "CMYK" === H && (e = DocumentColorProfileEnum.CMYK), "PDF" === q || "PDF Print" === q) {
                let i = "PDF Print" === q ? 1 : G;
                t(() => {
                  Fullscreen?.exportSelectedCooperFramesToPdf(N, i, e, K);
                });
              } else t(() => {
                Fullscreen?.exportSelectedCooperFramesToImg(N, q, Z.type, Z.value, e, G);
              });
              p(rg());
            },
            disabled: 0 === g.length && 0 === y.length || t,
            children: t ? jsxs("div", {
              className: "x78zum5 x1q0g3np x6s0dn4 x1n0bwc9",
              children: [jsx(_$$k, {}), getI18nString("buzz.toolbar.export_modal.export_button_text_exporting", {
                assetCount: Q
              })]
            }) : getI18nString("buzz.toolbar.export_modal.export_button_text", {
              assetCount: Q
            })
          })
        })
      })]
    })
  });
});
function j({
  imageTypeInput: e,
  constraintInput: t,
  qualityInput: i,
  colorProfileInput: a,
  imageType: s,
  selectedIds: o,
  shouldAddPrintMarks: l,
  setShouldAddPrintMarks: d
}) {
  let [c, p] = useState(0);
  let m = o[c];
  let f = 0 === c;
  let _ = 0 === o.length || c === o.length - 1;
  return jsx(Fragment, {
    children: jsxs("div", {
      className: "x78zum5",
      children: [jsxs("div", {
        className: "xhtvcic x98rzlu x78zum5 xdt5ytf xl56j7k x6s0dn4 xrm205 x4i7bpe x1g2khh7 x1algulf x1v8gsql x1fshhuq",
        children: [void 0 === m ? jsx("div", {
          className: "x1vd4hg5 xk7hi9x x1g82q5y x2b8uid xxymvpz x1n0bwc9",
          children: getI18nString("cooper.toolbar.export_modal.no_assets_selected")
        }) : jsx(Fragment, {
          children: jsx(ZH, {
            children: ({
              documentExportColorProfile: e
            }) => jsx(Fragment, {
              children: jsx(pu, {
                selectedCooperFrameNodeId: m,
                recordingKey: generateRecordingKey(m, "exportModalPreview"),
                useAbsoluteBounds: !0,
                panelWidth: 400,
                panelHeight: 300,
                colorProfile: e,
                renderPrintMarks: l
              }, m)
            })
          })
        }), void 0 !== m && jsx(Fragment, {
          children: jsxs("div", {
            className: "x78zum5 x1q0g3np x1nfngrj xl56j7k x6s0dn4 x1n0bwc9",
            children: [jsx(ButtonPrimitive, {
              onClick: () => p(c - 1),
              disabled: f,
              "aria-label": getI18nString("cooper.toolbar.export_modal.previous_asset"),
              className: "x1v8gsql",
              children: jsx(_$$t, {
                style: {
                  "--color-icon": `${f ? "var(--color-icon-disabled)" : "var(--color-icon-secondary)"}`
                }
              })
            }), jsx("div", {
              children: getI18nString("cooper.toolbar.export_modal.frame_number", {
                current: 0 === o.length ? 0 : c + 1,
                total: o.length
              })
            }), jsx(ButtonPrimitive, {
              onClick: () => p(c + 1),
              disabled: _,
              "aria-label": getI18nString("cooper.toolbar.export_modal.next_asset"),
              className: "x1v8gsql",
              children: jsx(_$$a, {
                style: {
                  "--color-icon": `${_ ? "var(--color-icon-disabled)" : "var(--color-icon-secondary)"}`
                }
              })
            })]
          })
        })]
      }), jsx(U, {
        imageTypeInput: e,
        constraintInput: t,
        qualityInput: i,
        colorProfileInput: a,
        imageType: s,
        shouldAddPrintMarks: l,
        setShouldAddPrintMarks: d
      })]
    })
  });
}
function U({
  imageTypeInput: e,
  constraintInput: t,
  qualityInput: i,
  colorProfileInput: a,
  imageType: s,
  shouldAddPrintMarks: o,
  setShouldAddPrintMarks: l
}) {
  let d = useId();
  return jsxs("div", {
    className: "xafpxmx x78zum5 xdt5ytf xg2d0mh xv2w18j xv6k3mh xehsoiq",
    children: [jsx("span", {
      id: d,
      className: "xkezfkh",
      children: getI18nString("cooper.toolbar.export_modal.select_assets")
    }), jsx(B, {
      ariaLabelledBy: d
    }), jsx("span", {
      className: "xkezfkh",
      children: getI18nString("cooper.toolbar.export_modal.file_type")
    }), e, "PDF" !== s && "PDF Print" !== s && jsxs(Fragment, {
      children: [jsx("span", {
        className: "xkezfkh",
        children: getI18nString("cooper.toolbar.export_modal.size")
      }), t]
    }), "PNG" !== s && "PDF Print" !== s && jsxs(Fragment, {
      children: [jsx("label", {
        htmlFor: F4,
        className: "xkezfkh",
        children: getI18nString("cooper.toolbar.export_modal.quality")
      }), i]
    }), jsx("label", {
      htmlFor: vl,
      className: "xkezfkh",
      children: getI18nString("cooper.toolbar.export_modal.color_profile")
    }), jsx("span", {
      className: "x1ef8nbk",
      children: a
    }), "PDF Print" === s && jsx("span", {
      className: "x1n0bwc9 x1ah0xmj",
      children: getI18nString("cooper.toolbar.export_modal.color_profile_warning")
    }), getFeatureFlags().buzz_print_export && "PDF Print" === s && jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("cooper.toolbar.export_modal.show_print_marks")
      }),
      checked: o,
      onChange: l
    })]
  });
}
export const Y = $$M0;