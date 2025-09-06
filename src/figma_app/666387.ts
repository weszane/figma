import { jsx, jsxs } from "react/jsx-runtime";
import { useSelector, useDispatch } from "../vendor/514228";
import { G as _$$G } from "../905/865520";
import { generateRecordingKey } from "../figma_app/878298";
import o from "classnames";
import { IT } from "../figma_app/566371";
import { getI18nString, renderI18nText } from "../905/303541";
import { eB } from "../905/765855";
import { DQ, Pw } from "../figma_app/121751";
import { A as _$$A } from "../905/654645";
import { u8 } from "../figma_app/391338";
import { q5 } from "../figma_app/516028";
import { iP2 } from "../figma_app/43951";
import { zQ } from "../figma_app/465071";
import { cD } from "../figma_app/598018";
import { Ib, Ui, Zj } from "../905/129884";
import { $n } from "../figma_app/439493";
import { A as _$$A2 } from "../905/139173";
import { vm, Vz } from "../figma_app/431620";
import { Z9, $v, Bw, X8, VR, US, WR } from "../figma_app/634656";
import { useState, useRef } from "react";
import { K } from "../905/443068";
import { e as _$$e } from "../905/149844";
import { P as _$$P } from "../905/537307";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { P as _$$P2 } from "../905/347284";
import { $O } from "../905/156213";
import { fu } from "../figma_app/831799";
import { F as _$$F } from "../905/989956";
import { z5 } from "../905/713722";
import { _ as _$$_ } from "../905/613917";
import { fJ } from "../figma_app/616107";
import { e0 } from "../905/696396";
import { TS } from "../figma_app/153399";
import { cd } from "../figma_app/650460";
import { Ze } from "../figma_app/967873";
import { dV } from "../1577/337708";
import { j as _$$j } from "../1577/266226";
var l = o;
let V = "color_palette_picker--header__iconButton--rFfgT";
function H({
  customColorPalettes: e,
  closeColorPalettePicker: t,
  paletteType: r
}) {
  let a = cD();
  let s = useSelector(e => _$$_(a, e));
  let [o, d] = useAtomValueAndSetter(Ze);
  let [u, p] = useState(!1);
  let _ = Z9();
  let h = useRef(null);
  let m = {
    uuid: fJ,
    name: getI18nString("whiteboard.color_palettes.figjam_colors"),
    baseColors: TS(r).map(e => z5.format(e))
  };
  if (!e) return jsx("div", {});
  let g = [m].concat(e).map((e, r) => jsx(z, {
    index: r,
    palette: e,
    isSelected: _.uuid === e.uuid,
    containerRef: h,
    defaultColorPaletteLength: m.baseColors.length,
    closeColorPalettePicker: t
  }, e.uuid));
  return jsx(fu, {
    name: e0.COLOR_PALETTE_PICKER,
    children: jsx("div", {
      className: l()({
        "color_palette_picker--wrapper--DVGTu": !0,
        "color_palette_picker--wrapper_onClose--zERit": o
      }),
      children: jsxs("div", {
        ref: h,
        className: l()({
          "color_palette_picker--container--2HK33": !0,
          "color_palette_picker--container_onClose--NlCEf": o
        }),
        onAnimationEnd: () => {
          o && (d(!1), t());
        },
        children: [jsx(W, {
          teamName: s?.name || "",
          showBottomBorder: u
        }), jsx("div", {
          className: "color_palette_picker--paletteList--jdLIl",
          children: jsx(_$$P2, {
            maxHeight: 290,
            innerClassName: "color_palette_picker--scrollContainer__inner--GF0-Z",
            onScroll: e => {
              e > 0 ? p(!0) : p(!1);
            },
            children: g
          })
        })]
      })
    })
  });
}
function z({
  palette: e,
  isSelected: t,
  index: r,
  containerRef: i,
  defaultColorPaletteLength: a,
  closeColorPalettePicker: s
}) {
  let o = $v(e.baseColors);
  let d = Bw();
  let c = useRef(0 === r ? 0 : 2 * Math.random() * (r % 2 ? 1 : -1));
  let u = i?.current?.offsetHeight || 0;
  let p = {
    "--rowRotation": `rotate(${t ? 0 : c.current}deg)`,
    "--translatePaletteRow": `${Math.max(u - 80 - 32 * r, 0)}px`
  };
  return jsx("button", {
    className: l()({
      "color_palette_picker--paletteRow--9Pdbd": !0,
      "color_palette_picker--paletteRow_selected--um2Cd": t
    }),
    style: p,
    onClick: () => {
      if (!t) {
        let t = e.uuid === fJ ? a : e.baseColors.length;
        d(e.uuid, t);
      }
      s(!0);
    },
    type: "button",
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": e.name,
    "data-tooltip-max-width": 200,
    "data-tooltip-show-above": !0,
    "data-testid": `color-palette-row-${e.uuid}`,
    children: o.map((t, r) => jsx(cd, {
      size: "medium",
      value: t,
      paletteType: "base",
      background: "light"
    }, e.uuid + _$$F.format(t) + "-" + r))
  });
}
function W(e) {
  let t = useDispatch();
  let r = q5();
  let a = X8(!!r?.team?.canEdit, zQ(r?.plan ?? null));
  return jsxs("div", {
    className: l()({
      "color_palette_picker--header--m9FBq": !0,
      "color_palette_picker--header_bottomBorder--PRGsS": e.showBottomBorder
    }),
    children: [e.teamName ? renderI18nText("whiteboard.color_palettes.color_palette_picker.team_palettes", {
      teamName: e.teamName
    }) : getI18nString("whiteboard.color_palettes.color_palette_picker.team_palettes_no_name"), a && jsxs("div", {
      className: "color_palette_picker--header__rightHand--z-7ux",
      children: [jsx(K, {
        onClick: () => {
          t($O({
            type: dV.type,
            data: {
              theme: "light"
            }
          }));
        },
        "aria-label": getI18nString("whiteboard.color_palettes.dropdown.new_palette"),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("whiteboard.color_palettes.dropdown.new_palette"),
          "data-tooltip-show-above": !0,
          "data-testid": "create-color-palette-button"
        },
        children: jsx(_$$e, {
          className: V
        })
      }), jsx(K, {
        onClick: () => {
          t($O({
            type: _$$j.type,
            data: {
              entryPoint: "whiteboard",
              theme: "light"
            }
          }));
        },
        "aria-label": getI18nString("whiteboard.color_palettes.dropdown.manage_palettes"),
        htmlAttributes: {
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": getI18nString("whiteboard.color_palettes.dropdown.manage_palettes"),
          "data-tooltip-show-above": !0,
          "data-testid": "manage-color-palettes-button"
        },
        children: jsx(_$$P, {
          className: V
        })
      })]
    })]
  });
}
export function $$K0(e) {
  let t = cD();
  let r = useSelector(e => !!e.user);
  let a = VR();
  let s = q5();
  let o = US();
  let l = WR(!!s?.team?.canView, zQ(s?.plan ?? null));
  let c = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
  let u = u8({
    oldValue: o,
    newValue: l,
    newValueReady: c,
    label: _$$A.ColorPalettesSubmenuPopover.canViewTeamPalettes,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      isOpenFileLoadedFromLiveGraph: c
    }
  });
  let [y] = IT(iP2({
    teamId: t
  }), {
    enabled: !!t
  });
  let b = u ? y.data?.colorPalettesForTeam || [] : a ? [a] : [];
  let I = useSelector(e => !!(s && !t && s.canManage && e.currentUserOrgId));
  let v = r && c && (I || u || t && !!a);
  let A = e.renderAsToolbeltButton ? 7 : e.isInDltSubmenu ? 2 : 16;
  let {
    closeColorPalettePicker,
    isColorPalettePickerOpen
  } = e.colorPalettePickerState;
  return v ? jsx(_$$A2, {
    isOpen: isColorPalettePickerOpen,
    onClose: closeColorPalettePicker,
    positionY: (e, t) => e.y - A - t.height,
    className: e.renderAsToolbeltButton ? "color_palettes_submenu_picker--toolbeltPopover--DE1fl" : void 0,
    target: e.renderAsToolbeltButton ? jsx($, {
      colorPalettePickerState: e.colorPalettePickerState,
      isPaletteLoading: e.isPaletteLoading,
      shouldShowMoveToTeamTooltip: I,
      recordingKey: e.recordingKey
    }) : jsx(Y, {
      shouldShowMoveToTeamTooltip: I,
      colorPalettePickerState: e.colorPalettePickerState,
      disabled: e.disabled,
      recordingKey: e.recordingKey,
      isInDltSubmenu: e.isInDltSubmenu
    }),
    renderPopoverContents: () => jsx(H, {
      customColorPalettes: b,
      closeColorPalettePicker,
      paletteType: e.paletteType
    })
  }) : null;
}
function Y({
  colorPalettePickerState: e,
  shouldShowMoveToTeamTooltip: t,
  isInDltSubmenu: r,
  disabled: a,
  recordingKey: o
}) {
  let d = useDispatch();
  return jsx("div", {
    className: l()("color_palettes_submenu_picker--submenuPickerContainer--GTTBT", {
      "color_palettes_submenu_picker--submenuPickerContainerNested--wuRz-": !r,
      "color_palettes_submenu_picker--disabled--scEBs": a
    }),
    children: jsx($n, {
      active: "NONE",
      animateCaret: r,
      buttonStyle: {
        height: "100%",
        backgroundColor: "inherit"
      },
      caret: "up",
      isNewSubmenu: r,
      onClick: t ? e => {
        let t = e.target.closest("button");
        t && d(eB({
          target: {
            kind: Ui.TEXT,
            text: getI18nString("whiteboard.color_palettes.tooltip.move_to_team")
          },
          targetRect: t.getBoundingClientRect(),
          position: Zj.ABOVE
        }));
      } : () => {
        if (!e) return;
        let {
          openColorPalettePicker,
          closeColorPalettePicker,
          isColorPalettePickerOpen
        } = e;
        isColorPalettePickerOpen ? closeColorPalettePicker(!0) : openColorPalettePicker();
      },
      recordingKey: generateRecordingKey(o, "colorPalettesPickerCaret"),
      tabIndex: -1,
      testId: "color-palettes-picker-button",
      tooltip: t ? getI18nString("whiteboard.color_palettes.tooltip.move_to_team") : void 0
    })
  }, "caret");
}
function $({
  colorPalettePickerState: e,
  isPaletteLoading: t,
  shouldShowMoveToTeamTooltip: r,
  recordingKey: i
}) {
  let {
    isColorPalettePickerOpen,
    openColorPalettePicker,
    closeColorPalettePicker
  } = e;
  return jsx(vm, {
    buttonType: Vz.DialogTrigger,
    isActive: isColorPalettePickerOpen,
    onClick: () => {
      e && (isColorPalettePickerOpen ? closeColorPalettePicker(!0) : openColorPalettePicker());
    },
    disabled: t || r,
    "aria-label": getI18nString("whiteboard.color_palettes.dropdown.manage_palettes"),
    showTooltipWhenDisabled: !0,
    tooltipText: r ? getI18nString("whiteboard.color_palettes.tooltip.move_to_team") : getI18nString("whiteboard.color_palettes.dropdown.manage_palettes"),
    "data-testid": "color-palettes-picker-button",
    recordingKey: generateRecordingKey(i, "colorPalettesToolbeltButton"),
    children: jsx(_$$G, {})
  });
}
export const s = $$K0;