import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { k as _$$k } from "../905/443820";
import { E as _$$E } from "../905/53857";
import { K } from "../905/443068";
import { L as _$$L } from "../1577/392861";
import { i as _$$i } from "../905/22844";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { showModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { z5 } from "../905/713722";
import { getUserId } from "../905/372672";
import { ColorPalettesForTeam } from "../figma_app/43951";
import { cD } from "../figma_app/598018";
import { fJ } from "../figma_app/616107";
import { KindEnum } from "../905/129884";
import { e0 } from "../905/696396";
import { registerModal } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
import { RN, In, dq } from "../figma_app/967873";
import { jE } from "../figma_app/639088";
import { TS } from "../figma_app/153399";
import { cd } from "../figma_app/650460";
import { $v } from "../figma_app/634656";
import { dV } from "../1577/337708";
let I = registerModal(function ({
  paletteUuid: e
}) {
  let t = useDispatch();
  return jsx(ConfirmationModal2, {
    size: 300,
    confirmText: getI18nString("whiteboard.color_palettes.modal.delete_color_palette_button"),
    confirmationTitle: getI18nString("whiteboard.color_palettes.modal.delete_color_palette_confirmation_modal_title"),
    popStack: !0,
    destructive: !0,
    onConfirm: () => {
      RN(e, t);
    },
    children: jsx("div", {
      className: jE,
      children: renderI18nText("whiteboard.color_palettes.modal.delete_color_palette_confirmation_modal_content")
    })
  });
}, "DeleteColorPaletteConfirmationModal");
let M = registerModal(function ({
  paletteName: e,
  paletteUuid: t
}) {
  let i = useDispatch();
  let o = cD();
  let r = useSelector(e => e.teams[o]?.name);
  r || console.error("No team name found for team id", o);
  return jsx(ConfirmationModal2, {
    size: 360,
    confirmationTitle: getI18nString("whiteboard.color_palettes.make_default_confirmation_modal.title"),
    confirmText: getI18nString("whiteboard.color_palettes.make_default_confirmation_modal.confirm_button"),
    content: getI18nString("whiteboard.color_palettes.make_default_confirmation_modal.description", {
      teamName: r,
      paletteName: e || getI18nString("whiteboard.color_palettes.make_default_confirmation_modal.this_palette")
    }),
    onConfirm: () => {
      t === fJ ? In(o, i) : dq(o, t, i);
    },
    popStack: !0
  });
}, "MakePaletteTeamDefaultConfirmationModal");
function L({
  palette: e,
  theme: t,
  showMakeDefaultButton: i
}) {
  let o = useDispatch();
  let r = e.uuid === fJ;
  let l = e.name || getI18nString("whiteboard.color_palettes.unnamed_palette");
  return jsxs(AutoLayout, {
    width: "fill-parent",
    direction: "vertical",
    spacing: "4px",
    children: [jsxs(AutoLayout, {
      direction: "horizontal",
      spacing: "8px",
      children: [jsx("h3", {
        children: l
      }), e.isTeamDefault && jsx(_$$E, {
        variant: "brandOutline",
        children: getI18nString("whiteboard.color_palettes.manage_modal.default")
      })]
    }), jsxs(AutoLayout, {
      direction: "horizontal",
      width: "fill-parent",
      horizontalAlignItems: "space-between",
      children: [jsx(AutoLayout, {
        direction: "horizontal",
        width: "hug-contents",
        spacing: "0px",
        children: e.baseColors.map(e => jsx(cd, {
          value: z5.parse(e),
          paletteType: "base",
          background: "light",
          role: "img",
          ariaLabel: getI18nString("whiteboard.colors.palette.hexadecimal", {
            hex: e
          })
        }, e))
      }), jsxs(AutoLayout, {
        direction: "horizontal",
        width: "hug-contents",
        spacing: "8px",
        children: [!r && jsxs(Fragment, {
          children: [jsx(K, {
            onClick: () => {
              o(showModal({
                type: dV.type,
                data: {
                  palette: {
                    uuid: e.uuid,
                    name: e.name,
                    baseColors: $v(e?.baseColors),
                    isTeamDefault: e.isTeamDefault
                  },
                  theme: t
                }
              }));
            },
            "aria-label": getI18nString("whiteboard.color_palettes.modal.edit_named_palette_tooltip", {
              palette_name: l
            }),
            htmlAttributes: {
              "data-testid": "edit-color-palette-button-" + e.uuid,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("whiteboard.color_palettes.modal.edit_named_palette_tooltip", {
                palette_name: l
              })
            },
            children: jsx(_$$L, {})
          }), jsx(K, {
            onClick: () => {
              o(showModal({
                type: I.type,
                data: {
                  paletteUuid: e.uuid
                }
              }));
            },
            "aria-label": getI18nString("whiteboard.color_palettes.modal.delete_named_palette_tooltip", {
              palette_name: l
            }),
            htmlAttributes: {
              "data-testid": "delete-color-palette-button-" + e.uuid,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("whiteboard.color_palettes.modal.delete_named_palette_tooltip", {
                palette_name: l
              })
            },
            children: jsx(_$$i, {})
          })]
        }), i && jsx($z, {
          variant: "secondary",
          disabled: e.isTeamDefault,
          onClick: () => {
            o(showModal({
              type: M.type,
              data: {
                paletteUuid: e.uuid,
                paletteName: e.name
              }
            }));
          },
          htmlAttributes: {
            "data-testid": "make-palette-team-default-button-" + e.uuid
          },
          children: renderI18nText("whiteboard.color_palettes.modal.set_default")
        })]
      })]
    })]
  });
}
export let $$B0 = registerModal(function ({
  showMakeDefaultButton: e,
  entryPoint: t,
  theme: i,
  ...c
}) {
  let d = getUserId();
  let u = cD();
  let _ = useModalManager(c);
  let h = useDispatch();
  let [y] = setupResourceAtomHandler(ColorPalettesForTeam({
    teamId: u
  }), {
    enabled: !!u
  });
  return jsx(TrackingProvider, {
    name: e0.FIGJAM_MANAGE_PALETTES_MODAL,
    properties: {
      entryPoint: t,
      userId: d,
      teamId: u
    },
    children: jsx(ModalRootComponent, {
      width: "fit-content",
      height: "dynamic",
      manager: _,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("whiteboard.color_palettes.manage_modal.color_palettes")
          })
        }), jsxs(nB, {
          padding: 16,
          children: [jsxs("div", {
            className: "manage_color_palettes_modal--subheader--2Aol7",
            children: [jsx("div", {
              className: "manage_color_palettes_modal--manageText---c1Ro",
              children: renderI18nText("whiteboard.color_palettes.manage_modal.manage_your_teams_color_palettes")
            }), jsx($z, {
              variant: "primary",
              onClick: () => {
                h(showModal({
                  type: dV.type,
                  data: {
                    theme: i
                  }
                }));
              },
              htmlAttributes: {
                "data-testid": "create-color-palette-button"
              },
              children: renderI18nText("whiteboard.color_palettes.manage_modal.create_new_palette")
            })]
          }), jsx("div", {
            className: "manage_color_palettes_modal--paletteRowsOuter--d2OIk",
            "aria-busy": "loading" === y.status,
            children: "loaded" === y.status && y.data.colorPalettesForTeam ? jsxs(Fragment, {
              children: [jsx(L, {
                palette: {
                  uuid: fJ,
                  name: getI18nString("whiteboard.color_palettes.figjam_colors"),
                  baseColors: TS("base").map(e => z5.format(e)),
                  isTeamDefault: y.data.colorPalettesForTeam.every(e => !e.isTeamDefault)
                },
                theme: i,
                showMakeDefaultButton: e
              }, fJ), y.data.colorPalettesForTeam.map(t => jsx(L, {
                palette: t,
                theme: i,
                showMakeDefaultButton: e
              }, t.uuid))]
            }) : jsx(_$$k, {
              size: "lg",
              htmlAttributes: {
                "data-testid": "loading-spinner"
              }
            })
          })]
        })]
      })
    })
  });
}, "ManageColorPalettesModal");
export const j = $$B0;
