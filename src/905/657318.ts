import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createRef, memo } from "react";
import { useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { DialogTriggerButton } from "../905/976845";
import { ButtonPrimitive } from "../905/632989";
import { U as _$$U } from "../905/708285";
import { O as _$$O } from "../905/487602";
import { o as _$$o } from "../905/530496";
import { A as _$$A } from "../905/891805";
import { y as _$$y } from "../905/661502";
import { e as _$$e } from "../905/149844";
import { n3, VariableStyleId } from "../905/859698";
import { StyleVariableOperation, CopyPasteType, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { defaultSessionLocalIDString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import v from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { selectWithShallowEqual } from "../905/103090";
import { RecordingPureComponent, generateRecordingKey } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { Point } from "../905/736624";
import { OptionComponent } from "../figma_app/236327";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { hideStylePicker, hidePickerThunk, showStylePicker } from "../figma_app/91703";
import { applySharedStyle, updateSelectedSharedStyleConsumers } from "../figma_app/933328";
import { showModalHandler } from "../905/156213";
import { hideStylePreview } from "../figma_app/914957";
import { hideTooltip } from "../905/765855";
import { fullscreenValue } from "../figma_app/455680";
import { MIXED_MARKER, normalizeValue } from "../905/216495";
import { b as _$$b } from "../figma_app/755529";
import { selectCurrentFile, useOpenFileLibraryKey } from "../figma_app/516028";
import { generateSlug, PanelIdentifiers } from "../figma_app/242339";
import { Q as _$$Q } from "../figma_app/104130";
import { nm, j_ } from "../figma_app/745458";
import { directlySubscribedStylesFromLoadedPagesSelector } from "../figma_app/141508";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { executeWithDSAAction } from "../905/135117";
import { $$ei1 } from "../905/759609";
import { ConnectedPointingDropdown } from "../905/504727";
import { Tu } from "../figma_app/479313";
import { YW } from "../figma_app/778125";
import { v2, V9, T7 } from "../figma_app/524618";
import { Q as _$$Q2, x as _$$x } from "../905/346809";
import { fI, nV } from "../figma_app/626177";
import { QN } from "../905/824449";
import { MM, UP } from "../figma_app/246831";
import { N2 } from "../905/213527";
import { getStylePickerShown, getStylePickerId, useStyleInfo } from "../figma_app/836943";
import { mw } from "../905/566585";
import { r as _$$r } from "../figma_app/711157";
import { B as _$$B } from "../905/229357";
import { RC } from "../905/579068";
import { isSitesFeatureEnabled } from "../905/561485";
import { c as _$$c } from "../figma_app/73139";
import { useIsFullscreenSlidesView } from "../figma_app/21029";
import { Rc } from "../figma_app/634146";
import { zK, lk } from "../905/182453";
import { g as _$$g } from "../figma_app/638268";
import { cL, v9, N4, l_, VM, FL, MC, x0, DV, LG, zi, ko, gn, lo, wr, lS, Om, Dn, yr, PD, ed as _$$ed, lN, Y7, KQ } from "../figma_app/892299";
var I = v;
var eg = (e => (e[e.STYLE_CONSUMER = 0] = "STYLE_CONSUMER", e[e.MIXED_STYLE_CONSUMER = 1] = "MIXED_STYLE_CONSUMER", e[e.CUSTOM_OR_MIXED_PROPERTIES = 2] = "CUSTOM_OR_MIXED_PROPERTIES", e))(eg || {});
export let $$ef1 = 4;
export function $$e_2(e) {
  return e && "isShown" in e ? new Point(e.isShown ? e.initialX : 0, e.isShown ? e.initialY : 0) : new Point(e ? e.initialX : 0, e ? e.initialY : 0);
}
class eA extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.STYLE_UPDATE_DROPDOWN_ID = `style-update-dropdown-${this.props.inheritStyleKeyField}`;
    this.panelTitleRef = createRef();
    this.stopPropagation = e => e.stopPropagation();
    this.toggleShowingStyles = e => {
      if (this.props.onPickerIconClick) {
        fullscreenValue.updateAppModel({
          currentSelectedProperty: {
            type: this.props.selectedPropertyType,
            indices: []
          }
        });
        let {
          x,
          y
        } = calculatePickerPositionLeft(this.panelTitleRef.current);
        this.props.onPickerIconClick({
          initialX: x,
          initialY: y
        });
        return;
      }
      if (getStylePickerShown(this.props)) {
        this.props.dispatch(hideStylePicker());
        this.props.dispatch(hideStylePreview());
        this.props.dispatch(hidePickerThunk());
      } else {
        let e = this.panelTitleRef.current.getBoundingClientRect();
        let t = e.left + (e.width - N2) / 2;
        let i = e.top + e.height;
        let {
          x,
          y
        } = this.props.openStylePickerToLeft ? calculatePickerPositionLeft(this.panelTitleRef.current, N2) : new Point(t, i);
        this.props.dispatch(showStylePicker({
          id: getStylePickerId(this.props.inheritStyleKeyField),
          initialX: x,
          initialY: y,
          modal: !0
        }));
        this.props.dispatch(hidePickerThunk());
        trackEventAnalytics("Style Picker Opened", {
          styleType: this.props.styleType,
          viewMode: this.props.stylePickerListLayout ? "LIST" : "GRID",
          nonInteraction: 0
        });
      }
    };
    this.detachStyle = () => {
      this.props.dispatch(hideTooltip());
      permissionScopeHandler.user("detach-style", () => {
        executeWithDSAAction(StyleVariableOperation.STYLE_DETACH, CopyPasteType.DIRECT, () => {
          Fullscreen.applyStyleToSelection(this.props.inheritStyleKeyField, defaultSessionLocalIDString, !0);
          Fullscreen.selectStyle(n3.INVALID, VariableStyleId.INVALID);
        });
      });
      trackEventAnalytics("Style Detached", {
        styleType: this.props.styleType
      });
    };
    this.createStyle = (e, t) => {
      if (!this.props.isEmpty && !this.props.hasMixedProperties) {
        let i = Object.keys(this.props.sceneGraphSelection)[0] || "";
        this.context({
          styleType: this.props.styleType,
          inheritStyleKeyField: this.props.inheritStyleKeyField,
          nodeId: i,
          rowLeft: e,
          rowTop: t
        });
      }
    };
    this.onApplyStyle = (e, t) => {
      this.props.dispatch(applySharedStyle({
        style: e,
        inheritStyleKeyField: this.props.inheritStyleKeyField,
        fromSearch: t
      }));
    };
    this.titleClicked = e => {
      this.props.isPanelBodyCollapsedAtom || e.currentTarget !== e.target || !this.props.isEmpty || this.props.pickerShown || this.props.dropdownShown || !this.props.addProperty || this.props.addProperty(e);
    };
    this.onMouseOver = () => {
      this.setState({
        hasEverHovered: !0
      });
    };
    this.selectUpdateOptionRef = createRef();
    this.state = {
      pickerInitialPosition: $$e_2(e.stylePickerShown),
      hasEverHovered: !1,
      isHoveringOverTitlePanel: !1
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleReviewUpdatesModal = this.toggleReviewUpdatesModal.bind(this);
  }
  UNSAFE_componentWillReceiveProps(e) {
    if (getStylePickerShown(e)) {
      let t;
      let i = this.panelTitleRef.current.getBoundingClientRect();
      let n = i.top + i.height;
      e.stylePickerShown.isShown && n !== e.stylePickerShown.initialY && (t = e.openStylePickerToLeft ? new Point(e.stylePickerShown.initialX, e.stylePickerShown.initialY) : new Point(e.stylePickerShown.initialX, n));
      t || e.stylePickerShown === this.props.stylePickerShown || ((t = $$e_2(e.stylePickerShown)).y = n);
      t && !this.state.pickerInitialPosition.equals(t) && this.setState({
        pickerInitialPosition: t
      });
    }
  }
  toggleDropdown(e) {
    this.props.dropdownShown?.type === this.STYLE_UPDATE_DROPDOWN_ID ? this.props.dispatch(hideDropdownAction()) : (this.stopPropagation(e), this.props.dispatch(showDropdownThunk({
      type: this.STYLE_UPDATE_DROPDOWN_ID
    })));
  }
  toggleReviewUpdatesModal(e, t) {
    e && this.props.dispatch(showModalHandler({
      type: $$ei1,
      data: {
        updateStyle: e,
        selectedOutdatedStyleGUID: t
      }
    }));
  }
  renderStyleTitle(e, t) {
    return jsx("div", {
      className: cL,
      "data-non-interactive": !0,
      children: jsx(_$$g, {
        recordingKey: generateRecordingKey(this.props, "titleButton"),
        dsStyle: e,
        displayAsDonut: QN(this.props.inheritStyleKeyField),
        onClick: this.toggleShowingStyles,
        onMouseDown: this.stopPropagation,
        selected: !!t,
        isNarrow: !!this.props.removeAllProperties,
        libraryKey: this.props.libraryKey || null,
        styleType: this.props.styleType
      })
    });
  }
  renderStyleButtons(e) {
    return 0 !== e ? null : jsxs(Fragment, {
      children: [!this.props.hideTextStyleControl && jsx("span", {
        className: v9,
        children: jsx(IconButton, {
          actionOnPointerDown: !0,
          recordingKey: generateRecordingKey(this.props, "detachButton"),
          "aria-label": getI18nString("design_systems.styles.detach_style"),
          onClick: this.detachStyle,
          htmlAttributes: {
            "data-tooltip": getI18nString("design_systems.styles.detach_style"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$U, {})
        })
      }), this.props.removeAllProperties && jsx("span", {
        className: N4,
        children: jsx(IconButton, {
          recordingKey: generateRecordingKey(this.props, "removeAllButton"),
          onClick: this.props.removeAllProperties,
          "aria-label": getI18nString("fullscreen.properties_panel.remove"),
          htmlAttributes: {
            onMouseDown: this.stopPropagation,
            "data-tooltip": getI18nString("fullscreen.properties_panel.remove"),
            "data-tooltip-type": KindEnum.TEXT
          },
          children: jsx(_$$O, {})
        })
      }), !this.props.isUI3 && this.maybeUpdateStyleButton(e)]
    });
  }
  maybeUpdateStyleButton(e) {
    if (0 !== e) return null;
    let t = v2(this.props.styleUpdates, this.props.versionedStyleInfo);
    let i = V9(T7(t, this.props.directlySubscribedStyles), t ?? void 0, this.props.versionedStyleInfo ? this.props.versionedStyleInfo.GUID : void 0);
    let r = Object.keys(this.props.sceneGraphSelection);
    let a = r.length > 0 && r.every(e => this.props.versionedStyleInfo && Fullscreen.isDirectStyleConsumer(this.props.versionedStyleInfo.GUID, this.props.inheritStyleKeyField, e));
    let s = [{
      value: "update-selected-style",
      displayText: getI18nString("design_systems.styles.update_selected_style"),
      callback: () => {
        i && this.props.versionedStyleInfo && this.props.dispatch(updateSelectedSharedStyleConsumers({
          styleUpdateInfo: i,
          oldStyleGUID: this.props.versionedStyleInfo.GUID,
          consumerGUIDsToUpdate: r
        }));
      }
    }, {
      value: "review-style-update",
      displayText: getI18nString("design_systems.styles.review_updates"),
      callback: () => this.toggleReviewUpdatesModal(t, this.props.versionedStyleInfo ? this.props.versionedStyleInfo.GUID : void 0)
    }];
    return t && this.props.versionedStyleInfo && a ? jsxs("div", {
      ref: this.selectUpdateOptionRef,
      "data-non-interactive": !0,
      children: [jsx(YW, {
        className: l_,
        selected: this.props.dropdownShown?.type === this.STYLE_UPDATE_DROPDOWN_ID,
        onClick: this.toggleDropdown,
        onMouseDown: this.stopPropagation,
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("design_systems.styles.update_available"),
        recordingKey: generateRecordingKey(this.props, ""),
        children: jsx(_$$o, {})
      }), this.props.dropdownShown?.type === this.STYLE_UPDATE_DROPDOWN_ID && (this.selectUpdateOptionRef.current ? jsx(ConnectedPointingDropdown, {
        targetRect: this.selectUpdateOptionRef.current.getBoundingClientRect(),
        propagateCloseClick: !0,
        children: s.map(e => jsx(OptionComponent, {
          className: VM,
          onClick: e.callback,
          recordingKey: generateRecordingKey(this.props, e.displayText),
          children: e.displayText
        }, e.value))
      }) : null)]
    }) : null;
  }
  renderAdvancedSettings() {
    return this.props.onToggleAdvancedSettings && this.props.advancedSettingsTooltip ? jsx(AutoInteractableWrapper, {
      name: "toggle_advanced_settings_button",
      children: jsx(IconButton, {
        onClick: this.props.onToggleAdvancedSettings,
        recordingKey: generateRecordingKey(this.props, "more"),
        "aria-label": this.props.advancedSettingsTooltip,
        htmlAttributes: {
          onMouseDown: this.stopPropagation,
          "data-tooltip": this.props.advancedSettingsTooltip,
          "data-tooltip-type": KindEnum.TEXT
        },
        children: jsx(_$$A, {})
      })
    }) : null;
  }
  render() {
    var e;
    let t;
    let i;
    let r;
    let a = ["FILL", "STROKE"];
    let {
      mainStyle
    } = this.props;
    !(isSitesFeatureEnabled() && getFeatureFlags().sites_responsive_text_styles && mw(this.props.sceneGraphSelection, this.props.library) && _$$c(this.props.sceneGraphSelection)) && (this.props.inheritStyleKey === MIXED_MARKER || null != normalizeValue(this.props.inheritStyleKey) && this.props.hasMixedProperties && mainStyle) ? (t = 1, i = this.props.addProperty) : mainStyle ? t = 0 : (t = 2, i = this.props.addProperty);
    let c = RC(this.props);
    let u = getStylePickerShown(this.props);
    let p = 0 === t && !this.props.hasMixedProperties;
    let g = !(this.props.isEmpty || this.props.hasMixedProperties || this.props.hasMissingFont || this.props.disableStyleCreation);
    let f = this.props.isSlides && !("FILL" === (e = this.props.styleType) || "STROKE" === e || Rc(e));
    let _ = jsxs(Fragment, {
      children: [(1 === t || 0 === t && this.props.hasMixedProperties) && jsx(fI, {
        children: jsx(nV, {
          className: FL,
          children: renderI18nText("fullscreen.properties_panel.click_plus_to_replace_mixed_content")
        })
      }, "label"), this.state.hasEverHovered && jsx(MM, {
        inheritStyleKey: this.props.inheritStyleKey,
        inheritStyleID: this.props.inheritStyleID,
        styleType: this.props.styleType
      }), u && jsx(UP, {
        hideCreateStyleButton: f,
        inheritStyleID: this.props.inheritStyleID,
        inheritStyleKey: this.props.inheritStyleKey,
        initialPosition: this.state.pickerInitialPosition,
        minBottomMargin: $$ef1,
        onApplyStyle: this.onApplyStyle,
        onCreateStyle: g ? this.createStyle : void 0,
        onToggleListLayout: this.props.onToggleListLayout,
        picker: u,
        recordingKey: "stylePicker",
        stylePickerListLayout: this.props.stylePickerListLayout,
        styleType: this.props.styleType
      }), 2 === t && this.props.children]
    });
    let A = this.props.isUI3 ? a.includes(this.props.styleType) ? getI18nString("fullscreen.properties_panel.tooltip_applyStylesAndVariables") : getI18nString("fullscreen.properties_panel.tooltip_applyStyles") : a.includes(this.props.styleType) ? getI18nString("design_systems.styles_and_variables") : getI18nString("design_systems.styles.style");
    let b = jsxs("span", {
      className: I()({
        [MC]: !this.props.mainStyle,
        [x0]: this.props.mainStyle
      }),
      children: [0 === t && null != this.props.styleVisibility && jsx("span", {
        className: v9,
        children: jsx(AutoInteractableWrapper, {
          name: "toggle_style_visibility_button",
          children: jsx(_$$B, {
            visible: this.props.styleVisibility.styleIsVisible,
            onChange: this.props.styleVisibility.onToggleStyleVisibility,
            recordingKey: generateRecordingKey(this.props, "visibleToggle")
          })
        })
      }), !this.props.isUI3 && this.renderAdvancedSettings(), this.renderStyleButtons(t), this.props.insetRightButton, jsx(zK.Consumer, {
        children: e => !e && 0 !== t && !this.props.hideTextStyleControl && jsx(AutoInteractableWrapper, {
          name: "toggle_style_or_variables_picker",
          children: jsx("span", {
            className: `${this.props.isEmpty && c ? "" : DV} ${N4}`,
            children: jsx(DialogTriggerButton, {
              "aria-label": `${this.props.title}, ${A}`,
              "aria-expanded": a.includes(this.props.styleType) ? !!c : !!u,
              recordingKey: generateRecordingKey(this.props, "showStylesButton"),
              onClick: this.toggleShowingStyles,
              htmlAttributes: {
                "data-tooltip-type": KindEnum.TEXT,
                "data-tooltip": A,
                "data-onboarding-key": this.props.stylesButtonDataTag,
                onMouseDown: this.stopPropagation
              },
              children: jsx(_$$y, {})
            })
          })
        })
      }), jsx("div", {
        className: LG,
        children: 0 !== t && !!i && jsxs(Fragment, {
          children: [jsx(AutoInteractableWrapper, {
            name: "add_property_button",
            children: jsx("span", {
              className: N4,
              children: jsx(IconButton, {
                recordingKey: generateRecordingKey(this.props, "addButton"),
                onClick: i,
                "aria-label": this.props.overrideAddPropertyTooltip ?? getI18nString("fullscreen.properties_panel.add"),
                htmlAttributes: {
                  onMouseDown: this.stopPropagation,
                  "data-tooltip": this.props.overrideAddPropertyTooltip ?? getI18nString("fullscreen.properties_panel.add"),
                  "data-tooltip-type": KindEnum.TEXT
                },
                children: jsx(_$$e, {})
              })
            })
          }), jsx("div", {
            className: I()(zi, {
              [ko]: this.state.isHoveringOverTitlePanel || !this.props.isEmpty
            }),
            children: this.props.entrypointMenu
          })]
        })
      })]
    });
    if (p && this.props.isUI3) {
      let e = c || u;
      return jsxs("div", {
        children: [jsx(_$$r, {
          titleTx: jsx("span", {
            children: this.props.title
          }),
          icon: this.maybeUpdateStyleButton(t) ?? void 0
        }), jsx(_$$Q.Consumer, {
          children: t => jsxs("div", {
            className: I()(gn, {
              [lo]: !!e,
              [wr]: t.useLargePreviewRows
            }),
            ref: this.panelTitleRef,
            onMouseOver: this.onMouseOver,
            children: [this.renderStyleTitle(mainStyle, e), jsxs("div", {
              className: lS,
              children: [b, this.props.rightButton]
            }), _]
          })
        })]
      });
    }
    let v = {
      faded: this.props.isEmpty && !this.state.isHoveringOverTitlePanel,
      className: p ? Om : Dn,
      "data-onboarding-key": generateSlug(PanelIdentifiers.PROPERTIES_PANEL_TITLE, this.props.title),
      isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom
    };
    let E = {
      recordingKey: generateRecordingKey(this.props, "panelTitle"),
      onClick: this.titleClicked
    };
    if (p) r = jsx(_$$Q2, {
      ...v,
      children: this.renderStyleTitle(mainStyle, c || u)
    });else if (getFeatureFlags().eu_fpl_migration_interactive_panel) {
      let e = jsx("h2", {
        className: yr,
        children: this.props.title
      });
      r = this.props.isEmpty ? jsx(_$$x, {
        ...v,
        ...E,
        children: e
      }) : jsx(_$$Q2, {
        ...v,
        children: e
      });
    } else r = jsx(_$$Q2, {
      ...v,
      children: jsx(ButtonPrimitive, {
        ...E,
        className: yr,
        htmlAttributes: {
          "data-non-interactive": !0,
          tabIndex: -1
        },
        children: this.props.title
      })
    });
    return jsxs("div", {
      "data-non-interactive": !0,
      children: [jsxs(fI, {
        ref: this.panelTitleRef,
        onMouseDown: getFeatureFlags().eu_fpl_migration_interactive_panel ? void 0 : this.titleClicked,
        onMouseOver: this.onMouseOver,
        selectedSecondary: !1,
        className: this.props.isEmpty ? PD : _$$ed,
        children: [jsxs("div", {
          "data-non-interactive": !0,
          className: I()({
            [lN]: this.props.isEmpty,
            [Y7]: !this.props.isEmpty,
            [KQ]: !this.props.isEmpty && this.props.rightButton
          }),
          onMouseEnter: () => this.setState({
            isHoveringOverTitlePanel: !0
          }),
          onMouseLeave: () => this.setState({
            isHoveringOverTitlePanel: !1
          }),
          children: [jsx(Tu, {
            isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom || null,
            children: r
          }), b]
        }), this.props.rightButton]
      }), _]
    });
  }
}
eA.displayName = "CollapsibleStyleAndPropertyPanel";
eA.contextType = lk;
export let $$ey0 = memo(e => {
  let t = selectCurrentFile();
  let i = useOpenFileLibraryKey();
  let r = {
    ...selectWithShallowEqual(t => ({
      dropdownShown: t.dropdownShown,
      library: t.library,
      modalShown: t.modalShown,
      pickerShown: t.pickerShown,
      reposById: t.repos,
      sceneGraphSelection: t.mirror.sceneGraphSelection,
      selectedStyleProperties: t.mirror.selectedStyleProperties,
      stylePickerShown: t.stylePickerShown,
      teams: t.teams,
      directlySubscribedStyles: directlySubscribedStylesFromLoadedPagesSelector(t),
      versionedStyleInfo: nm(t, e.inheritStyleID)
    })),
    styleUpdates: useAtomWithSubscription(j_)
  };
  let s = useDispatch<AppDispatch>();
  let o = normalizeValue(_$$b("guid"));
  let l = useStyleInfo(e.inheritStyleKey, e.inheritStyleID, e.styleType);
  let d = useIsFullscreenSlidesView();
  return jsx(eA, {
    ...r,
    ...e,
    openFile: t,
    libraryKey: i,
    dispatch: s,
    mainStyle: l,
    isUI3: !0,
    isSlides: d,
    selectedStyleGuid: o
  });
});
export const _D = $$ey0;
export const UJ = $$ef1;
export const kp = $$e_2;