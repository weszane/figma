import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { k as _$$k } from "../905/443820";
import { E as _$$E } from "../905/53857";
import { K } from "../905/443068";
import { L as _$$L } from "../1577/392861";
import { i as _$$i } from "../905/22844";
import { IT } from "../figma_app/566371";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { $O } from "../905/156213";
import { fu } from "../figma_app/831799";
import { z5 } from "../905/713722";
import { TA } from "../905/372672";
import { iP2 } from "../figma_app/43951";
import { cD } from "../figma_app/598018";
import { fJ } from "../figma_app/616107";
import { Ib } from "../905/129884";
import { e0 } from "../905/696396";
import { Ju } from "../905/102752";
import { yX } from "../figma_app/918700";
import { RN, In, dq } from "../figma_app/967873";
import { jE } from "../figma_app/639088";
import { TS } from "../figma_app/153399";
import { cd } from "../figma_app/650460";
import { $v } from "../figma_app/634656";
import { dV } from "../1577/337708";
let I = Ju(function ({
  paletteUuid: e
}) {
  let t = useDispatch();
  return jsx(yX, {
    size: 300,
    confirmText: _$$t("whiteboard.color_palettes.modal.delete_color_palette_button"),
    confirmationTitle: _$$t("whiteboard.color_palettes.modal.delete_color_palette_confirmation_modal_title"),
    popStack: !0,
    destructive: !0,
    onConfirm: () => {
      RN(e, t);
    },
    children: jsx("div", {
      className: jE,
      children: tx("whiteboard.color_palettes.modal.delete_color_palette_confirmation_modal_content")
    })
  });
}, "DeleteColorPaletteConfirmationModal");
let M = Ju(function ({
  paletteName: e,
  paletteUuid: t
}) {
  let i = useDispatch();
  let o = cD();
  let r = useSelector(e => e.teams[o]?.name);
  r || console.error("No team name found for team id", o);
  return jsx(yX, {
    size: 360,
    confirmationTitle: _$$t("whiteboard.color_palettes.make_default_confirmation_modal.title"),
    confirmText: _$$t("whiteboard.color_palettes.make_default_confirmation_modal.confirm_button"),
    content: _$$t("whiteboard.color_palettes.make_default_confirmation_modal.description", {
      teamName: r,
      paletteName: e || _$$t("whiteboard.color_palettes.make_default_confirmation_modal.this_palette")
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
  let l = e.name || _$$t("whiteboard.color_palettes.unnamed_palette");
  return jsxs(Y, {
    width: "fill-parent",
    direction: "vertical",
    spacing: "4px",
    children: [jsxs(Y, {
      direction: "horizontal",
      spacing: "8px",
      children: [jsx("h3", {
        children: l
      }), e.isTeamDefault && jsx(_$$E, {
        variant: "brandOutline",
        children: _$$t("whiteboard.color_palettes.manage_modal.default")
      })]
    }), jsxs(Y, {
      direction: "horizontal",
      width: "fill-parent",
      horizontalAlignItems: "space-between",
      children: [jsx(Y, {
        direction: "horizontal",
        width: "hug-contents",
        spacing: "0px",
        children: e.baseColors.map(e => jsx(cd, {
          value: z5.parse(e),
          paletteType: "base",
          background: "light",
          role: "img",
          ariaLabel: _$$t("whiteboard.colors.palette.hexadecimal", {
            hex: e
          })
        }, e))
      }), jsxs(Y, {
        direction: "horizontal",
        width: "hug-contents",
        spacing: "8px",
        children: [!r && jsxs(Fragment, {
          children: [jsx(K, {
            onClick: () => {
              o($O({
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
            "aria-label": _$$t("whiteboard.color_palettes.modal.edit_named_palette_tooltip", {
              palette_name: l
            }),
            htmlAttributes: {
              "data-testid": "edit-color-palette-button-" + e.uuid,
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t("whiteboard.color_palettes.modal.edit_named_palette_tooltip", {
                palette_name: l
              })
            },
            children: jsx(_$$L, {})
          }), jsx(K, {
            onClick: () => {
              o($O({
                type: I.type,
                data: {
                  paletteUuid: e.uuid
                }
              }));
            },
            "aria-label": _$$t("whiteboard.color_palettes.modal.delete_named_palette_tooltip", {
              palette_name: l
            }),
            htmlAttributes: {
              "data-testid": "delete-color-palette-button-" + e.uuid,
              "data-tooltip-type": Ib.TEXT,
              "data-tooltip": _$$t("whiteboard.color_palettes.modal.delete_named_palette_tooltip", {
                palette_name: l
              })
            },
            children: jsx(_$$i, {})
          })]
        }), i && jsx($z, {
          variant: "secondary",
          disabled: e.isTeamDefault,
          onClick: () => {
            o($O({
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
          children: tx("whiteboard.color_palettes.modal.set_default")
        })]
      })]
    })]
  });
}
export let $$B0 = Ju(function ({
  showMakeDefaultButton: e,
  entryPoint: t,
  theme: i,
  ...c
}) {
  let d = TA();
  let u = cD();
  let _ = hS(c);
  let h = useDispatch();
  let [y] = IT(iP2({
    teamId: u
  }), {
    enabled: !!u
  });
  return jsx(fu, {
    name: e0.FIGJAM_MANAGE_PALETTES_MODAL,
    properties: {
      entryPoint: t,
      userId: d,
      teamId: u
    },
    children: jsx(bL, {
      width: "fit-content",
      height: "dynamic",
      manager: _,
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: _$$t("whiteboard.color_palettes.manage_modal.color_palettes")
          })
        }), jsxs(nB, {
          padding: 16,
          children: [jsxs("div", {
            className: "manage_color_palettes_modal--subheader--2Aol7",
            children: [jsx("div", {
              className: "manage_color_palettes_modal--manageText---c1Ro",
              children: tx("whiteboard.color_palettes.manage_modal.manage_your_teams_color_palettes")
            }), jsx($z, {
              variant: "primary",
              onClick: () => {
                h($O({
                  type: dV.type,
                  data: {
                    theme: i
                  }
                }));
              },
              htmlAttributes: {
                "data-testid": "create-color-palette-button"
              },
              children: tx("whiteboard.color_palettes.manage_modal.create_new_palette")
            })]
          }), jsx("div", {
            className: "manage_color_palettes_modal--paletteRowsOuter--d2OIk",
            "aria-busy": "loading" === y.status,
            children: "loaded" === y.status && y.data.colorPalettesForTeam ? jsxs(Fragment, {
              children: [jsx(L, {
                palette: {
                  uuid: fJ,
                  name: _$$t("whiteboard.color_palettes.figjam_colors"),
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