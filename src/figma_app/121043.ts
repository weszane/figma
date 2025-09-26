import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { memo, useState, useEffect, useRef, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { setupToggleButton } from "../905/167712";
import { IconButton } from "../905/443068";
import { EventShield } from "../905/821217";
import { T as _$$T } from "../905/745591";
import { V as _$$V } from "../905/291719";
import { z as _$$z } from "../905/947624";
import { m as _$$m } from "../figma_app/203842";
import { V as _$$V2 } from "../905/751103";
import { m as _$$m2 } from "../905/270214";
import { Multiplayer, SaveConnectionIssues, SchemaJoinStatus, DesignGraphElements, Fullscreen } from "../figma_app/763686";
import E from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { trackFileEventWithStore } from "../figma_app/901889";
import { selectWithShallowEqual } from "../905/103090";
import { useConnectionState, ConnectionState } from "../figma_app/288654";
import { parseQuery } from "../905/634134";
import { RecordingPureComponent, handleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { isInteractionOrEvalMode } from "../figma_app/897289";
import { generateUUIDv4 } from "../905/871474";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { WN } from "../figma_app/638601";
import { b as _$$b } from "../figma_app/556971";
import { SvgComponent } from "../905/714743";
import { MediaQuerySvgComponent } from "../905/331623";
import { i as _$$i, L as _$$L } from "../figma_app/942671";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { handleAtomEvent } from "../905/502364";
import { c as _$$c } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { showModalHandler, hideSpecificModal } from "../905/156213";
import { n6 } from "../905/234821";
import { formatI18nMessage } from "../905/482208";
import { isWorkshopModeEnabled } from "../figma_app/789";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { getAutosaveManagerInstance } from "../figma_app/840917";
import { hx } from "../figma_app/290668";
import { VU } from "../905/625959";
import { fullscreenValue } from "../figma_app/455680";
import { getCanvasViewState } from "../905/758967";
import { isGoogleMeetIntegration } from "../figma_app/469876";
import { z4 } from "../905/37051";
import { LW, bs, GG } from "../figma_app/553940";
import { useDropdownState } from "../905/848862";
import { selectCurrentFile } from "../figma_app/516028";
import { replaceColonWithDash } from "../905/691205";
import { getObservableOrFallback } from "../figma_app/84367";
import { FEditorType } from "../figma_app/53721";
import { KindEnum } from "../905/129884";
import { Yh, TY, G as _$$G, pi, IS } from "../figma_app/357047";
import { AuthModal } from "../905/749159";
import { e as _$$e } from "../figma_app/320600";
import { KeyboardFocusManager } from "../905/826900";
import { getSingletonSceneGraph } from "../905/700578";
import { j as _$$j } from "../905/834956";
import { PH } from "../figma_app/701580";
import { tO as _$$tO } from "../figma_app/598952";
import { ec as _$$ec } from "../figma_app/29089";
import { ZU } from "../figma_app/986347";
import { M as _$$M } from "../figma_app/182591";
import { dM, WT, q3, e1, by, yT, gb, U as _$$U2, TE, Zm, Ex, AQ, ET, Er } from "../figma_app/152574";
import { A as _$$A2 } from "../6828/255111";
import { A as _$$A3 } from "../svg/633280";
import { A as _$$A4 } from "../svg/211939";
import { A as _$$A5 } from "../svg/623841";
import { A as _$$A6 } from "../svg/279162";
import { A as _$$A7 } from "../svg/254926";
import { A as _$$A8 } from "../svg/61813";
let p = memo(function (e) {
  return jsx("svg", {
    width: "24",
    height: "24",
    fill: "none",
    viewBox: "0 0 24 24",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "m16.988 9.17.055.758.747.15A4.002 4.002 0 0 1 17 18H8a5 5 0 0 1-.34-9.989l.567-.038.257-.507a4.5 4.5 0 0 1 8.504 1.703M2 13a6 6 0 0 1 5.593-5.986 5.5 5.5 0 0 1 10.393 2.083A5.002 5.002 0 0 1 17 19H8a6 6 0 0 1-6-6m8.354-2.854a.5.5 0 0 0-.708.708l1.647 1.646-1.647 1.646a.5.5 0 0 0 .708.708L12 13.207l1.646 1.647a.5.5 0 0 0 .708-.708L12.707 12.5l1.647-1.646a.5.5 0 0 0-.708-.708L12 11.793z",
      clipRule: "evenodd"
    })
  });
});
var y = E;
function ep(e) {
  let t = useSelector(e => e.mirror.appModel.pagesList);
  let r = useSelector(e => e.mirror.appModel.currentPage);
  let i = useDispatch();
  if (!t || t.length <= 1) return null;
  let s = async e => {
    await getSingletonSceneGraph().setCurrentPageFromNodeAsync(e.nodeId);
  };
  let o = t.map(e => ({
    displayText: e.name,
    disabled: !1,
    isChecked: r === e.nodeId,
    nodeId: e.nodeId
  }));
  return jsx(_$$j, {
    dispatch: i,
    items: o,
    showPoint: !0,
    parentRect: e.dropdown.data.targetRect,
    onSelectItem: s,
    recordingKey: "pagesPicker"
  });
}
let ex = [PH.type];
function eN(e) {
  return e.iconOverride ? {
    svg: e.iconOverride,
    ui3Icon: jsx(_$$V, {})
  } : e.type === ZU.TOOL ? LW(e.tool) : e.type === ZU.ACTION || e.type === ZU.TEXT_BUTTON ? bs(e.action) : (console.error(`Couldn't find icon for item ${e}`), null);
}
export class $$eC6 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onClick = handleMouseEvent(this, "click", VU.get(this.props.action, "toolbar"));
  }
  render() {
    let {
      action,
      text
    } = this.props;
    return jsx("span", {
      className: dM,
      children: jsx(Button, {
        onClick: this.props.onClick || this.onClick,
        htmlAttributes: {
          "data-tooltip-type": KindEnum.LOOKUP,
          "data-tooltip": action
        },
        children: text
      }, `toolbar-action-button-${action}`)
    });
  }
}
export function $$ew0(e) {
  let {
    item,
    isEnabled,
    isActive,
    showBadge,
    recordingKey
  } = e;
  if (!isEnabled) return null;
  let c = eN(item);
  if (!c) return jsx(Fragment, {});
  let u = c?.ui3Icon;
  let p = `toolbar-action-${item.action}`;
  let _ = item.getDisplayAction?.();
  let h = {
    "data-tooltip-type": KindEnum.LOOKUP,
    "data-tooltip": _ ?? item.action,
    "data-onboarding-key": item.onboardingKey,
    "data-tooltip-submenu-open": isActive,
    "data-testid": p
  };
  let m = null;
  let g = () => VU.get(item.action, "toolbar")?.();
  if (item && item.isActive) {
    let e = "focus-mode-component-set-toggle" === item.action ? {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": isActive ? getI18nString("fullscreen.focus_mode.toggle_variants.exit") : getI18nString("fullscreen.focus_mode.toggle_variants.enter"),
      "data-tooltip-submenu-open": !1,
      "data-tooltip-shortcut-key": "focus-mode-component-set-toggle"
    } : null;
    m = jsx(setupToggleButton, {
      recordingKey,
      "aria-label": e?.["data-tooltip"] || formatI18nMessage(h["data-tooltip"]),
      checked: isActive,
      onIcon: u,
      offIcon: u,
      variant: "highlighted",
      onChange: g,
      htmlAttributes: {
        ...h,
        ...e,
        "data-tooltip-submenu-open": !1
      }
    }, item.reactKey && `action-toggle-${item.reactKey}`);
  } else m = jsx(IconButton, {
    recordingKey,
    "aria-label": formatI18nMessage(item.action),
    onClick: g,
    htmlAttributes: {
      ...h
    },
    children: u
  }, item.reactKey && `action-icon-button-${item.reactKey}`);
  return jsx(EventShield, {
    eventListeners: ["onClick", "onMouseDown", "onPointerDown"],
    children: jsxs("span", {
      className: WT,
      children: [m, showBadge && jsx("div", {
        className: q3,
        children: jsx(SvgComponent, {
          svg: _$$A5
        })
      })]
    })
  });
}
export function $$eO4() {
  return getObservableOrFallback(getCanvasViewState().showTimeSlicingEditRenderingDot) ? jsx("div", {
    className: e1,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("time_sliced_edit_rendering.active"),
    "data-onboarding-key": "tsmer-status",
    children: jsx(SvgComponent, {
      className: by,
      svg: _$$A4
    })
  }) : null;
}
export function $$eR10() {
  let e = !!selectCurrentFile();
  let [t, r] = useState(!1);
  let n = eG(useConnectionState() !== ConnectionState.CONNECTED);
  let s = eG(useSelector(e => e.saveStatus?.hasAutosaveChanges ?? !1));
  let o = eG(useSelector(e => e.saveStatus?.hasMultiplayerChanges ?? !1));
  useEffect(() => {
    if (null == n && null == s && null == o) {
      r(!1);
      return;
    }
    function t() {
      if (isInteractionOrEvalMode()) {
        r(!1);
        return;
      }
      let t = e ? 6e3 : 1e4;
      let i = Date.now();
      if (null != n && i - n > t || null != s && (i - Math.max(s, getAutosaveManagerInstance()?.session()?.getLastCommitTime() ?? 0) > t || i - s > 3e4) || null != o && (i - Math.max(Multiplayer?.lastReceivedAckUnixtime() ?? 0, o) > t || i - o > 3e4)) {
        r(!0);
        return;
      }
      r(!1);
    }
    t();
    let i = setInterval(t, 500);
    return () => clearInterval(i);
  }, [s, e, n, o]);
  return t;
}
$$eC6.displayName = "TextButton";
memo(function ({
  recordingKey: e
}) {
  let t = useDropdownState();
  let r = selectCurrentFile();
  let i = useSelector(e => Yh(e.mirror.appModel, _$$ec.action) && !!r);
  let s = useSelector(e => e.mirror.appModel.currentTool === _$$ec.tool);
  let o = n6();
  let l = useSelector(e => e.mirror.appModel.topLevelMode);
  return jsx($$ej5, {
    dropdownShown: t,
    isEnabled: i,
    isActive: s,
    item: _$$ec,
    numUnreadComments: o,
    recordingKey: e,
    topLevelMode: l
  }, `tool-button-${_$$ec.tool}`);
});
let eL = e => {
  switch (e) {
    case SaveConnectionIssues.SUPPRESS_UNSAVED_CHANGES_UI:
    case SaveConnectionIssues.NONE:
      return "";
    case SaveConnectionIssues.DISCONNECTED_AUTOSAVE_DISABLED:
      return getI18nString("unsaved_changes.disconnected.autosave_disabled");
    case SaveConnectionIssues.DISCONNECTED_SERVER_ISSUES:
      return getI18nString("unsaved_changes.disconnected.server_issues");
    case SaveConnectionIssues.DISCONNECTED_OTHER:
      return getI18nString("unsaved_changes.disconnected.other");
    case SaveConnectionIssues.SYNCING_AUTOSAVE_DISABLED:
      return getI18nString("unsaved_changes.syncing.autosave_disabled");
    case SaveConnectionIssues.SYNCING_SERVER_ISSUES:
      return getI18nString("unsaved_changes.syncing.server_issues");
    case SaveConnectionIssues.SYNCING_OTHER:
      return getI18nString("unsaved_changes.syncing.other");
    default:
      throw Error(`Unhandled tab close text enum value ${e}`);
  }
};
export function $$eP9() {
  let e = useSelector(e => e.mirror.appModel.multiplayerSessionState === SchemaJoinStatus.JOINED);
  let t = useSelector(e => e.saveStatus?.tabCloseText);
  let r = useConnectionState() === ConnectionState.CONNECTED || isInteractionOrEvalMode();
  let s = $$eR10();
  let o = t ? eL(t) : "";
  let l = _$$A2;
  e && (r ? l = _$$A3 : o = getI18nString("unsaved_changes.disconnected.live_updates"));
  let d = l === _$$A2 ? jsx(p, {
    "aria-label": o
  }) : jsx(_$$z, {
    "aria-label": o
  });
  !function (e, t, r, n, s) {
    let o = useSelector(e => e.saveStatus?.hasUnsavedChanges);
    let [l, d] = useState(!1);
    useEffect(() => {
      if (t && !l) {
        let t = r === _$$A2 ? "offline" : "unsaved";
        trackEventAnalytics("Show Save Status Icon", {
          tooltipText: e,
          iconName: t,
          multiplayerJoined: n,
          livegraphConnected: s,
          hasUnsavedChanges: o
        }, {
          forwardToDatadog: !0
        });
        d(!0);
      }
    }, [l, d, e, t, r, o, n, s]);
  }(o, s, l, e, r);
  return {
    shouldShow: s,
    label: o,
    icon: l === _$$A3 ? _$$m : _$$V2,
    tooltipIcon: l,
    tooltipIconComponent: d
  };
}
let $$eD3 = memo(function ({
  isLeftRail: e = !1
}) {
  let {
    shouldShow,
    label,
    tooltipIconComponent
  } = $$eP9();
  return shouldShow ? jsx(_$$T, {
    className: e1,
    "data-tooltip-show-right": e,
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": label,
    "data-onboarding-key": "multiplayer-save-status",
    children: tooltipIconComponent
  }) : null;
});
let ek = e => e === _$$ec ? getI18nString("fullscreen.accessibility.view_comments") : formatI18nMessage(e.action);
let $$eM2 = "fullscreen_menu_visible";
let $$eF1 = "fullscreen_menu_hidden";
export function $$ej5(e) {
  let {
    isEnabled,
    isActive,
    item,
    numUnreadComments,
    recordingKey,
    isWide
  } = e;
  let d = useRef(null);
  let c = eN(item)?.svg || null;
  let u = item.type === ZU.ACTION ? GG(item.action) : null;
  let p = z4.getIsExtension();
  let _ = useRef(null);
  if (!isActive && _.current && _.current === document.activeElement && KeyboardFocusManager.focusCustomCanvasFocusElement(), !c) return null;
  function h(e) {
    return n => {
      isEnabled && (isActive && item.tool === DesignGraphElements.COMMENTS ? (fullscreenValue.triggerAction("set-tool-default"), e && _.current?.focus()) : VU.get(item.action, "toolbar")(n));
    };
  }
  return jsxs("div", {
    "data-testid": item.action,
    className: yT,
    ref: d,
    children: [jsx(MediaQuerySvgComponent, {
      "aria-pressed": isActive,
      ariaLabel: ek(item),
      className: y()(gb, _$$M(isEnabled, isActive), isWide ? _$$U2 : null),
      "data-fullscreen-intercept": !0,
      "data-onboarding-key": item.onboardingKey,
      "data-tooltip": item.action,
      "data-tooltip-type": KindEnum.LOOKUP,
      fallbackSvg: u || void 0,
      innerSpanRef: _,
      onKeyDown: e => hx({
        e,
        onClickHandler: h(!0)
      }),
      onMouseDown: h(!1),
      recordingKey,
      role: "button",
      svg: c,
      tabIndex: 0
    }), !p && numUnreadComments > 0 && item.tool === DesignGraphElements.COMMENTS && jsx("div", {
      className: isActive ? TE : Zm
    })]
  }, item.action);
}
let $$eU7 = memo(function (e) {
  let t = useRef(null);
  let r = useDispatch();
  let s = useMemo(() => generateUUIDv4(), []);
  let {
    dropdownShown,
    modalShown,
    user,
    selectedView
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    modalShown: e.modalShown,
    user: e.user,
    selectedView: e.selectedView
  }));
  let u = isWorkshopModeEnabled();
  let p = isUserNotLoggedInAndEditorSupported();
  let _ = WN();
  useEffect(() => {
    TY(dropdownShown) ? handleAtomEvent({
      id: $$eM2
    }) : handleAtomEvent({
      id: $$eF1
    });
  }, [dropdownShown]);
  let h = useRef(null);
  let m = _$$b();
  return isGoogleMeetIntegration() ? jsx("div", {
    className: Ex,
    children: jsx(_$$m2, {})
  }) : jsxs(_$$i, {
    ref: t,
    "aria-controls": s,
    "aria-expanded": TY(dropdownShown),
    "aria-haspopup": "menu",
    ariaLabel: getI18nString("fullscreen_actions.main_menu"),
    chevronRef: h,
    className: y()(AQ, e.hideToolsClassName, {
      [ET]: TY(dropdownShown)
    }),
    "data-tooltip": "main-menu",
    "data-tooltip-offset-x": m ? 8 : 0,
    "data-tooltip-show-right": m,
    "data-tooltip-type": KindEnum.LOOKUP,
    fallbackSvg: _$$A8,
    id: "toggle-menu-button",
    isUI3: !0,
    onClick: () => {
      let e = t.current;
      if (!user || user.appData && user.appData.loggedOut) {
        if (e) {
          if ("fullscreen" === selectedView.view && selectedView.editorType === FEditorType.Whiteboard) {
            r(AUTH_INIT({
              origin: "logged_out_main_menu_toolbar",
              redirectUrl: customHistory.location.pathname,
              signedUpFromOpenSession: u
            }));
            r(showModalHandler({
              type: AuthModal,
              data: {
                headerText: getI18nString("fullscreen.toolbar.create_an_account_to_do_more_with_fig_jam")
              }
            }));
          } else {
            if (p) {
              _("LEFT_PANEL_FIGMA_LOGO");
              return;
            }
            r(showDropdownThunk({
              type: _$$G,
              data: {
                targetRect: e.getBoundingClientRect()
              }
            }));
          }
        }
        return;
      }
      if (modalShown?.type && ex.includes(modalShown?.type) && r(hideSpecificModal({
        type: modalShown.type
      })), TY(dropdownShown)) r(hideDropdownAction());else if (e) {
        let t = {
          type: pi,
          data: {
            targetRect: e.getBoundingClientRect()
          },
          hasOwnEscKeyHandler: !0
        };
        r(showDropdownThunk(t));
      }
    },
    onboardingKey: _$$tO,
    positionOnChevron: !0,
    recordingKey: "toggleMenuTopbarButton",
    showChevron: !e.hideChevron,
    svg: _$$A7,
    ui3Icon: jsx(_$$m2, {}),
    children: [TY(dropdownShown) && jsx(_$$e, {
      id: s,
      "aria-labelledby": "toggle-menu-button",
      controlledByID: "toggle-menu-button",
      dropdown: dropdownShown,
      chevronRef: h,
      positionOnChevron: !0
    }, "fullscreen-menu"), IS(dropdownShown) && jsx(ep, {
      dropdown: dropdownShown
    })]
  }, "toggle-menu-button");
});
let $$eB8 = memo(function (e) {
  let t = selectCurrentFile();
  let {
    selectedView
  } = selectWithShallowEqual(e => ({
    selectedView: e.selectedView
  }));
  let i = isWorkshopModeEnabled();
  let s = useDispatch();
  return jsx("span", {
    className: cssBuilderInstance.mr8.$,
    "data-preferred-theme": e.useDarkTheme ? "dark" : void 0,
    children: jsx(_$$c, {
      variant: "secondary",
      "aria-label": getI18nString("fullscreen.toolbar.log_in"),
      onClick: () => {
        let e = "";
        "fullscreen" === selectedView.view && "DUPLICATE" === selectedView.landingState ? e = t ? getI18nString("fullscreen.toolbar.log_in_or_create_an_account_to_get_a_copy_of", {
          file: t.name
        }) : getI18nString("fullscreen.toolbar.log_in_or_create_an_account") : i && (e = getI18nString("fullscreen.toolbar.log_in_to_do_more_with_figjam"));
        let n = parseQuery(customHistory.location.search)["node-id"];
        s(AUTH_INIT({
          origin: "logged_out_footer",
          formState: AuthFlowStep.SIGN_IN,
          redirectUrl: n ? `${customHistory.location.pathname}?node-id=${encodeURIComponent(replaceColonWithDash(n))}` : customHistory.location.pathname
        }));
        s(showModalHandler({
          type: AuthModal,
          data: {
            headerText: e
          }
        }));
      },
      children: getI18nString("fullscreen.toolbar.log_in")
    })
  });
});
function eG(e) {
  let [t, r] = useState(e ? Date.now() : void 0);
  useEffect(() => {
    r(t => {
      if (e) return t ?? Date.now();
    });
  }, [e]);
  return t;
}
memo(function (e) {
  let t = trackFileEventWithStore();
  return jsx(_$$L, {
    ariaLabel: getI18nString("fullscreen.toolbar.missing_fonts"),
    svg: _$$A6,
    className: Er,
    onClick: () => {
      t("missing_fonts_button_clicked");
      Fullscreen.findMissingFontsAndShowPopover();
    },
    recordingKey: generateRecordingKey(e, "missingFontsButton"),
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": getI18nString("fullscreen.toolbar.missing_fonts")
  }, "missing-fonts-button");
});
export const rA = $$ew0;
export const kL = $$eF1;
export const kF = $$eM2;
export const n8 = $$eD3;
export const bu = $$eO4;
export const T0 = $$ej5;
export const FK = $$eC6;
export const xG = $$eU7;
export const tO = $$eB8;
export const Py = $$eP9;
export const Kd = $$eR10;