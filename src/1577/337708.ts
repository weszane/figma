import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { fP, mc } from "../905/691059";
import { u as _$$u } from "../905/65923";
import { E as _$$E } from "../905/632989";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { J as _$$J } from "../905/270045";
import { p as _$$p } from "../905/185998";
import { hS } from "../905/437088";
import { L as _$$L } from "../905/704296";
import { oB, In } from "../figma_app/273493";
import { NLJ, cxo } from "../figma_app/763686";
import { fp, Xr, md } from "../figma_app/27355";
import x from "classnames";
import { colorToHex } from "../905/436288";
import { $K, DA, tK, ol, Uv } from "../figma_app/191804";
import { g as _$$g } from "../905/880308";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { E as _$$E2 } from "../905/984674";
import { $O, Lo } from "../905/156213";
import { fu } from "../figma_app/831799";
import { O1, KD } from "../figma_app/317394";
import { dH } from "../figma_app/722362";
import { TA } from "../905/372672";
import { cD } from "../figma_app/598018";
import { I_ } from "../figma_app/616107";
import { nT } from "../figma_app/53721";
import { e0 } from "../905/696396";
import { Ju } from "../905/102752";
import { B as _$$B } from "../figma_app/397954";
import { Vk } from "../figma_app/153399";
import { cd, HL, WW, xY } from "../figma_app/650460";
import { w as _$$w } from "../figma_app/99807";
import { Bw } from "../figma_app/634656";
import { Jq, rN, NK, cl } from "../figma_app/967873";
var k = x;
let H = "edit_color_palette_modal--modalLabel--AVogh text--fontPos11--2LvXf text--_fontBase--QdLsd";
let z = "edit_color_palette_modal--circleButton--ewqgH";
function V({
  color: e,
  setColor: t,
  index: i,
  isColorPickerOpen: n,
  setColorPickerOpen: o,
  removeColor: c,
  theme: d,
  dropperDisabled: u
}) {
  let {
    getContainerProps,
    getTriggerProps
  } = fP({
    isOpen: n,
    onOpenChange: o,
    type: "menu",
    softDismiss: !0
  });
  return jsxs(Fragment, {
    children: [jsx(mc, {
      ...getContainerProps(),
      children: jsx(_$$w, {
        color: e,
        theme: d,
        currentTool: NLJ.NONE,
        dropdownShown: null,
        onColorChange: t,
        dropperDisabled: u
      })
    }), jsxs("div", {
      className: "edit_color_palette_modal--colorCircleOuter--ZJqke",
      children: [jsx(_$$u, {
        "aria-label": _$$t("whiteboard.colors.palette.hexadecimal", {
          hex: colorToHex(e)
        }),
        className: z,
        ...getTriggerProps(),
        children: jsx(cd, {
          size: "large",
          value: e,
          selectionState: n ? "selected" : "unselected",
          paletteType: "base",
          background: "light"
        }, e + "-" + i)
      }), jsx(_$$E, {
        className: k()({
          "edit_color_palette_modal--deleteColorButton--rWqOY": !0,
          "edit_color_palette_modal--deleteColorButtonDisabled--dwsFr": n
        }),
        onClick: () => c(),
        "aria-label": _$$t("whiteboard.color_palettes.modal.remove_color", {
          color_name: _$$t("whiteboard.colors.palette.hexadecimal", {
            hex: colorToHex(e)
          })
        }),
        "data-testid": `delete-color-button-${i}`,
        children: jsx(_$$L, {
          className: "edit_color_palette_modal--deleteColorIcon--BlYrV"
        })
      })]
    }, "wrapper" + e + "-" + i)]
  });
}
function Q({
  onSave: e,
  onCancel: t,
  palette: i,
  enableSubmitWithNoChanges: r,
  manager: s,
  isPaletteEyedropperActive: m,
  theme: f
}) {
  let x = useDispatch();
  let [k, A] = useState(i?.name || "");
  let [P, F] = fp(Jq);
  let M = useCallback(() => -1 !== P && (F(-1), !0), [P, F]);
  O1(M, KD.OVERLAY);
  let O = useMemo(() => i?.baseColors || Vk(), [i?.baseColors]);
  let [Q, Y] = fp(rN);
  let J = Xr(_$$B);
  let K = !$K(O, Q) || r;
  let [X, W] = useState(!1);
  useEffect(() => (F(-1), Y(O), J(cxo.EDIT_PALETTE_MODAL), () => {
    F(-1);
    Y(O);
    J(cxo.SELECTION);
  }), [F, Y, J, O]);
  let G = useSelector(e => {
    let t = e.selectedView;
    return "fullscreen" !== t.view || t.editorType !== nT.Whiteboard;
  });
  let Z = useCallback(e => {
    Y([...Q, e]);
  }, [Q, Y]);
  let ee = useCallback((e, t) => {
    Y([...Q.slice(0, e), t, ...Q.slice(e + 1)]);
  }, [Q, Y]);
  let et = e => {
    Y([...Q.slice(0, e), ...Q.slice(e + 1)]);
  };
  let ei = useCallback(e => {
    x($O({
      type: $$$0.type,
      data: {
        palette: {
          uuid: e,
          name: k,
          baseColors: Q
        },
        enableSubmitWithNoChanges: !0,
        theme: f
      }
    }));
  }, [x, k, Q, f]);
  let ea = cD();
  let en = TA();
  let eo = Bw();
  let er = useCallback(() => {
    let t = Q.some((e, t) => Q.some((i, a) => t !== a && DA(e, i)));
    if (W(t), t) return;
    let a = Q.map(e => colorToHex(e, 1));
    if (k && en && a.length) {
      let t = i?.uuid || _$$g();
      i ? NK({
        name: k,
        teamId: ea,
        baseColors: a,
        uuid: t
      }, x, () => ei(t)) : (cl({
        name: k,
        teamId: ea,
        uuid: t,
        baseColors: a,
        creatorId: en,
        isTeamDefault: !1,
        canRead: !0
      }, x, () => ei(t)), eo(t, a.length, !0));
      e();
    }
  }, [Q, k, en, i, e, ea, x, ei, eo]);
  let el = function (e) {
    let t = tK(ol.MULTIPLAYER_PURPLE) || Uv;
    if (!e) return t;
    let i = oB(e);
    let a = 360 * i.h;
    let n = {
      ...i,
      h: (a + 40) % 360 / 360
    };
    return In(n);
  }(Q.length > 0 ? Q[Q.length - 1] : null);
  let es = Q.length >= I_;
  let ec = k && k.trim() && Q.length > 0 && (!i || K || k !== i.name);
  let ed = i ? _$$t("whiteboard.color_palettes.modal.edit_palette") : _$$t("whiteboard.color_palettes.modal.create_palette");
  return jsx(bL, {
    width: "fit-content",
    height: "dynamic",
    manager: s,
    children: jsxs(vo, {
      allowOverflow: !0,
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: ed
        })
      }), jsxs(nB, {
        style: {
          overflow: "visible"
        },
        children: [jsx(_$$J, {
          htmlFor: "palette-name-input",
          className: H,
          children: tx("whiteboard.color_palettes.modal.name")
        }), jsx("div", {
          className: "edit_color_palette_modal--nameInput--iRWoM",
          children: jsx(_$$p, {
            id: "palette-name-input",
            placeholder: _$$t("whiteboard.color_palettes.modal.palette_name"),
            value: k || "",
            onChange: e => A(e.slice(0, 100)),
            size: "lg",
            "data-testid": "palette-name-input"
          })
        }), jsxs("div", {
          className: "edit_color_palette_modal--colorsContainer--VNvss",
          children: [jsx("h3", {
            className: H,
            children: tx("whiteboard.color_palettes.modal.colors")
          }), jsx("p", {
            className: "edit_color_palette_modal--modalDescription--SeVmv text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: tx("whiteboard.color_palettes.modal.choose_up_to_9_colors")
          }), X && jsx("p", {
            className: "edit_color_palette_modal--modalDescriptionError--W6hs7 text--fontPos11--2LvXf text--_fontBase--QdLsd",
            children: tx("whiteboard.color_palettes.modal.duplicate_colors")
          }), jsxs("div", {
            className: "edit_color_palette_modal--colorPaletteContainer--aQ-En",
            children: [Q.map((e, t) => jsx(V, {
              color: e,
              setColor: e => ee(t, e),
              index: t,
              isColorPickerOpen: !m && P === t,
              setColorPickerOpen: e => F(e ? t : -1),
              removeColor: () => et(t),
              dropperDisabled: G,
              theme: f
            }, "editbutton-" + e + "-" + t)), !es && jsx(_$$u, {
              "aria-label": _$$t("whiteboard.color_palettes.modal.add_color"),
              "aria-haspopup": !0,
              "aria-expanded": !1,
              "data-testid": "add-color-button",
              className: z,
              onClick: () => {
                F(Q.length);
                Z(el);
              },
              children: jsx(HL, {
                size: "large",
                value: WW,
                swatchStyle: {
                  boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset"
                },
                fallbackSvg: xY
              })
            })]
          })]
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx(_$$E2, {
            color: "secondary",
            children: tx("whiteboard.color_palettes.modal.palettes_visible_to_everyone")
          }), jsx($z, {
            variant: "secondary",
            onClick: t,
            children: tx("whiteboard.color_palettes.modal.cancel")
          }), jsx($z, {
            variant: "primary",
            disabled: !ec,
            type: "submit",
            onClick: er,
            htmlAttributes: {
              "data-testid": "save-button"
            },
            children: tx("whiteboard.color_palettes.modal.save_palette")
          })]
        })
      })]
    })
  });
}
export let $$$0 = Ju(function ({
  palette: e,
  theme: t,
  enableSubmitWithNoChanges: i,
  ...r
}) {
  let l = useDispatch();
  let s = TA();
  let c = cD();
  let d = hS(r);
  let u = dH();
  let _ = md(_$$B);
  let f = u === NLJ.DROPPER_COLOR && _ === cxo.EDIT_PALETTE_MODAL;
  let p = useCallback(() => {
    l(Lo());
  }, [l]);
  return jsx("div", {
    className: k()("edit_color_palette_modal--headerModalTransitionContainer--C-CFV", {
      "edit_color_palette_modal--hidden--EDk-H": f
    }),
    children: jsx(fu, {
      name: e0.FIGJAM_EDIT_PALETTE_MODAL,
      properties: {
        userId: s,
        teamId: c,
        type: e ? "edit palette" : "new palette"
      },
      children: jsx(Q, {
        onSave: p,
        onCancel: p,
        palette: e,
        enableSubmitWithNoChanges: i,
        manager: d,
        isPaletteEyedropperActive: f,
        theme: t
      })
    })
  });
}, "EditColorPaletteModal");
export const dV = $$$0;