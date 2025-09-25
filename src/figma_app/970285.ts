import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent, useRef, useCallback, memo, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { debounce } from "../905/915765";
import { lQ } from "../905/934246";
import { getFirstKey } from "../figma_app/493477";
import { Checkbox } from "../905/274480";
import { Label, HiddenLabel } from "../905/270045";
import { bL, l9, mc, c$ } from "../905/493196";
import { d as _$$d } from "../905/976845";
import { IconButton } from "../905/443068";
import { s as _$$s2 } from "../905/403855";
import { J as _$$J2 } from "../905/125993";
import { O as _$$O } from "../905/487602";
import { O as _$$O2 } from "../905/969533";
import { k as _$$k } from "../905/44647";
import { ActionType, NodePropertyCategory } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import S from "classnames";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { generateRecordingKey, createRecordingCallback } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { k as _$$k3 } from "../905/582200";
import { Point } from "../905/736624";
import { ph } from "../figma_app/709893";
import { getI18nString, renderI18nText } from "../905/303541";
import { rg } from "../figma_app/401069";
import { showPickerThunk, hidePickerThunk } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { C9 } from "../figma_app/8833";
import { mz } from "../figma_app/975811";
import { stopPropagation } from "../figma_app/753501";
import { fullscreenValue } from "../figma_app/455680";
import { A as _$$A } from "../905/51490";
import { ZH } from "../figma_app/504823";
import { vk } from "../figma_app/397881";
import { Tr, Ay } from "../905/281495";
import { A0, Mc } from "../figma_app/454974";
import { ImageManager } from "../figma_app/624361";
import { isValidValue, valueOrFallback, isInvalidValue } from "../905/216495";
import { WQ, Pv } from "../905/619652";
import { o3, nt } from "../905/226610";
import { isExportRestricted } from "../figma_app/12796";
import { CachedSubtreeRenderer } from "../figma_app/679183";
import { Dc, hV } from "../figma_app/151766";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { a as _$$a } from "../figma_app/997280";
import { JH } from "../figma_app/479313";
import { a3, ow } from "../905/188421";
import { e as _$$e } from "../figma_app/905311";
import { MX, h6 } from "../905/401389";
import { JI, Ho } from "../905/416496";
import { zk as _$$zk, Tq } from "../905/920793";
import { Q as _$$Q } from "../905/346809";
import { z as _$$z } from "../905/454433";
import { Zk, JU, fI } from "../figma_app/626177";
import { c$ as _$$c$, l6, tV } from "../905/794875";
import { pW, gm } from "../figma_app/335781";
import { ChevronContainer } from "../905/1946";
import { dD, Qu, dp } from "../figma_app/941824";
import { Ad } from "../figma_app/811257";
import { JT } from "../figma_app/632248";
import { B3, Ag } from "../figma_app/862289";
import { zF } from "../figma_app/297822";
import { y as _$$y } from "../figma_app/13082";
import { n3 } from "../905/668609";
import { O as _$$O3, m as _$$m } from "../905/329739";
import { IN, hi, r9, dK, WO, SO, oB, fj, QU, AL, J9, Ez, tc, wm, PK, SL, uX, v_, ei as _$$ei, cT, q4, Pf } from "../905/684927";
var v = S;
function eI(e) {
  return 2 === e ? "@2x" : 3 === e ? "@3x" : 4 === e ? "@4x" : "";
}
export function $$eS5(e) {
  let t = !1;
  let r = !1;
  let n = !1;
  for (let i of e) _$$O3(i) && "CONTENT_SCALE" === i.constraint.type ? (1 === i.constraint.value && (t = !0), 2 === i.constraint.value && (r = !0), 3 === i.constraint.value && (n = !0)) : t = !0;
  let i = {
    contentsOnly: !0,
    imageType: "PNG",
    constraint: {
      type: "CONTENT_SCALE",
      value: 1
    },
    suffix: "",
    useAbsoluteBounds: !1,
    useBicubicSampler: !!getFeatureFlags().bicubic_image_sampler && !getFeatureFlags().swap_image_sampling_default_export_setting,
    colorProfile: "DOCUMENT"
  };
  t && (r ? n || (i.constraint.value = 3, i.suffix = eI(3)) : (i.constraint.value = 2, i.suffix = eI(2)));
  return i;
}
export function $$ev4() {
  return useSelector(e => {
    let t = e.mirror.selectionProperties.numSelected;
    let r = e.mirror.selectionProperties.exportSettings;
    let n = e.mirror.selectionProperties.name;
    return 1 === t && r && isValidValue(r) && r.length > 0 && null != n ? n.slice(0, 64) : "";
  });
}
export function $$eA2() {
  return useSelector(e => {
    let t = e.mirror.selectedStyleProperties;
    let r = e.mirror.selectionProperties;
    let n = !!e.mirror.selectedStyleProperties?.guid;
    let i = n ? t.numSelected : r.numSelected;
    let a = n ? t.exportSettings : r.exportSettings;
    let s = n ? t.name : r.name;
    return 1 === i && a && isValidValue(a) && a.length > 0 && null != s ? s.slice(0, 64) : "";
  });
}
let ex = class e extends PureComponent {
  constructor(e) {
    super(e);
    this.exportList = memoizeByArgs(e => valueOrFallback(e, []).map(_$$m));
    this.onExportChange = (e, t) => {
      let r = 0 === e.length;
      let n = r ? yesNoTrackingEnum.NO : t;
      fullscreenValue.updateSelectionProperties({
        exportSettings: e
      }, {
        shouldCommit: n
      });
      r && (fullscreenValue.updateSelectionProperties({
        exportBackgroundDisabled: !1
      }, {
        shouldCommit: t
      }), this.setState({
        isRenameLayersEnabled: !1
      }));
    };
    this.addProperty = e => {
      let t = this.exportList(this.props.exportSettings);
      let r = $$eS5(t);
      this.onExportChange(t.concat([r]));
      this.props.onAddClick?.() && e.stopPropagation();
      trackEventAnalytics("editor-export-panel-add", {
        selectionIsCanvas: 0 === this.props.numSelected
      });
    };
    this.addExportOfType = e => {
      let t = this.exportList(this.props.exportSettings);
      let r = $$eS5(t);
      if ("PNG" === e) {
        this.onExportChange(t.concat([r]));
        return;
      }
      let n = this.onExportChange.bind(this);
      $$ej1(r, e, function (e) {
        n(t.concat([e]));
      });
    };
    this.onClickExport = async () => {
      if (trackEventAnalytics("Export Panel Export Clicked"), 0 === this.props.numSelected) {
        trackEventAnalytics("Export Picker Opened", {
          from: "export-panel"
        });
        this.props.dispatch(showPickerThunk({
          id: C9
        }));
      } else {
        this.state.isRenameLayersEnabled && (await this.autoRenameFrameOnExport());
        let e = valueOrFallback(this.props.exportSettings, []);
        let t = e.filter(e => !0 === e.useBicubicSampler);
        let r = e.filter(e => !1 === e.useBicubicSampler);
        analyticsEventManager.trackDefinedEvent("rendering_and_animation.exported_export_setting_bicubic", {
          bicubicCount: t.length,
          nearestNeighborCount: r.length
        });
        let n = [this.props.currentPage];
        ImageManager.includeOutsideContents(e) || (n = Object.keys(this.props.sceneGraphSelection));
        Dc(hV.Export, this.props.saveAsState, this.props.dispatch, "export-selected-exportables-direct", n, "export-selected-exportables-direct");
        this.props.dispatch(rg());
      }
    };
    this.shouldShowAIRenameLayersCheckbox = e => A0(ActionType.EXPORT_FRAME) && (e > 0 || isInvalidValue(this.props.exportSettings)) && (this.props.isSelectionRenamable || this.state.isRenameLayersRunning);
    this.autoRenameFrameOnExport = async () => {
      this.props.isSelectionRenamable && (this.setState({
        isRenameLayersRunning: !0
      }), atomStoreManager.set(zF, Tr(ActionType.EXPORT_FRAME)), B3(JT.AUTO_RENAME_LAYERS), await Ag(JT.AUTO_RENAME_LAYERS, Ay, {
        source: ActionType.EXPORT_FRAME,
        overwriteNames: !1,
        ignoreDescendants: !0
      }), this.setState({
        isRenameLayersRunning: !1,
        isRenameLayersEnabled: !1
      }));
    };
    this._checkboxAndButtonRow = new CachedSubtreeRenderer(() => {
      let e = "";
      if (0 === this.props.numSelected || null == this.props.numSelected) {
        let {
          title
        } = vk("CANVAS", "", this.props.openFile?.name || getI18nString("fullscreen.fullscreen_view_selector.untitled"), []);
        e = getI18nString("fullscreen.properties_panel.export_title", {
          title
        });
      } else if (1 === this.props.numSelected) {
        let {
          title
        } = vk("RECTANGLE", this.props.singleNodeName, "", []);
        e = this.props.standalone ? getI18nString("fullscreen.properties_panel.export") : getI18nString("fullscreen.properties_panel.export_title", {
          title
        });
      } else e = getI18nString("fullscreen.properties_panel.export_this_props_num_selected_layers", {
        numSelected: this.props.numSelected
      });
      return jsx(_$$z, {
        onClick: this.onClickExport,
        recordingKey: generateRecordingKey(this.props, "export"),
        disabled: !!this.state.isRenameLayersRunning,
        children: jsx(ph, {
          text: this.state.isRenameLayersRunning ? getI18nString("fullscreen.properties_panel.export_generating_name") : e,
          tooltipPropsWhenTruncated: {
            "data-tooltip-type": KindEnum.TEXT,
            "data-tooltip": e
          }
        })
      }, "export-button");
    });
    this._shouldRenderPreviewThumbnail = () => valueOrFallback(this.props.exportSettings, []).length > 0;
    this._previewThumbnail = new CachedSubtreeRenderer(() => {
      let e = this.props.exportSettings;
      let t = e[0].useAbsoluteBounds || !1;
      let r = e[0].useBicubicSampler || !1;
      return jsx(ZH, {
        children: ({
          documentExportColorProfile: e
        }) => jsx(eG, {
          colorProfile: this.props.exportSettings && !isInvalidValue(this.props.exportSettings) ? _$$A(this.props.exportSettings, e) : e,
          currentPage: this.props.currentPage,
          numSelected: this.props.numSelected,
          panelWidth: this.props.panelWidth,
          recordingKey: generateRecordingKey(this.props, "previewThumbnail"),
          sceneGraphSelection: this.props.sceneGraphSelection,
          shouldComputeThumbnails: this._shouldRenderPreviewThumbnail,
          useAbsoluteBounds: t,
          useBicubicSampler: r
        }, "preview")
      });
    });
    this.state = {
      isRenameLayersRunning: !1,
      isRenameLayersEnabled: this.getRenameLayersCheckboxStatusForSelection(e.sceneGraphSelection)
    };
  }
  singleNodeIdFrom(e) {
    let t = Object.keys(e);
    if (1 === t.length) return t[0];
  }
  getRenameLayersCheckboxStatusForSelection(t) {
    let r = this.singleNodeIdFrom(t);
    return !!r && e.renameLayersCheckedForNode.has(r);
  }
  componentDidUpdate(t, r) {
    if (this.props.sceneGraphSelection === t.sceneGraphSelection) return;
    let n = this.singleNodeIdFrom(t.sceneGraphSelection);
    n && (r.isRenameLayersEnabled ? e.renameLayersCheckedForNode.add(n) : e.renameLayersCheckedForNode.$$delete(n));
    this.setState({
      isRenameLayersEnabled: this.getRenameLayersCheckboxStatusForSelection(this.props.sceneGraphSelection)
    });
  }
  render() {
    let e = this.props.openFile && isExportRestricted(this.props.openFile);
    let t = this.exportList(this.props.exportSettings);
    return jsx(_$$k3, {
      name: "export_panel",
      children: jsx(Zk, {
        className: v()({
          [IN]: this.props.standalone,
          [hi]: this.props.standalone && 0 === t.length
        }),
        children: e ? jsxs("div", {
          className: r9,
          children: [jsxs(_$$Q, {
            doNotReserveSpaceForChevron: !0,
            className: dK,
            children: [jsx(_$$s2, {
              className: WO
            }), renderI18nText("fullscreen.properties_panel.export_disabled")]
          }), jsx(JU, {
            className: SO,
            children: jsx("span", {
              children: renderI18nText("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
            })
          })]
        }) : jsxs(Fragment, {
          children: [jsx($$ew3, {
            addProperty: this.addProperty,
            currentSelectedProperty: this.props.currentSelectedProperty,
            dispatch: this.props.dispatch,
            dropdownShown: this.props.dropdownShown,
            entrypointMenu: jsx(n3, {
              addExportOfType: this.addExportOfType
            }),
            headerClickTriggersAddProperty: this.props.headerClickTriggersAddProperty,
            isMixed: isInvalidValue(this.props.exportSettings),
            isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom,
            onChange: this.onExportChange,
            onHeaderClick: t.length > 0 ? this.props.onHeaderClick : lQ,
            openFile: this.props.openFile,
            pickerShown: this.props.pickerShown,
            propertyList: t,
            recordingKey: generateRecordingKey(this.props, "exportList"),
            selectedPropertyType: NodePropertyCategory.EXPORT,
            standalone: this.props.standalone,
            title: this.props.title
          }), jsxs(JH, {
            isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom || null,
            children: [this._checkboxAndButtonRow.render({
              isVisible: t.length > 0 || isInvalidValue(this.props.exportSettings)
            }), this.shouldShowAIRenameLayersCheckbox(t.length) && jsx(Ad, {
              label: null,
              input: jsx(Checkbox, {
                muted: !0,
                checked: this.state.isRenameLayersEnabled,
                onChange: () => {
                  this.setState({
                    isRenameLayersEnabled: !this.state.isRenameLayersEnabled
                  });
                },
                label: jsx(Label, {
                  children: jsxs("div", {
                    className: oB,
                    children: [renderI18nText("auto_rename_layers.rename_layers", {
                      numLayers: this.props.numSelected
                    }), jsx(_$$y, {
                      helpUrlVariant: JT.AUTO_RENAME_LAYERS
                    })]
                  })
                })
              })
            }), this._previewThumbnail.render({
              isVisible: this._shouldRenderPreviewThumbnail()
            })]
          })]
        })
      })
    });
  }
};
ex.notifierName = "ExportNotifier";
ex.renameLayersCheckedForNode = new Set();
ex.isSelectionRenamable = e => {
  let {
    detectedUnnamedLayers,
    exceedingLayerLimit
  } = Mc(e, !0);
  return detectedUnnamedLayers && !exceedingLayerLimit;
};
export let $$eN0 = ex;
function eC(e) {
  let {
    selectionHandler
  } = e;
  let r = useRef(null);
  return jsx("div", {
    className: fj,
    children: jsx(MX, {
      selection: selectionHandler,
      onChange: e.onChange,
      addProperty: e.addProperty,
      overrideAddPropertyTooltip: getI18nString("fullscreen.properties_panel.section_exports.tooltip_addExportSettings"),
      isStylesPickerShown: !!e.pickerShown,
      showRemoveButton: !1,
      recordingKey: e.recordingKey,
      parent: r,
      children: jsx(_$$a, {
        title: e.title,
        ref: r
      })
    })
  });
}
export function $$ew3(e) {
  let t = useDispatch();
  let {
    selectedPropertyType,
    dropdownShown,
    pickerShown,
    onChange,
    propertyList
  } = e;
  let c = createRecordingCallback(e);
  let u = valueOrFallback(e.propertyList, []).length <= 1;
  let p = o3(nt.useGridPart2) && !0;
  let _ = useCallback(e => {
    t(hidePickerThunk());
    onChange(valueOrFallback(propertyList, []).filter((t, r) => r !== e));
    fullscreenValue.deselectProperty();
  }, [t, onChange, propertyList]);
  let h = useCallback((e, i, a, l, d, h, m, g, f) => jsx(eU, {
    dispatch: t,
    dropdownShown,
    exportSetting: e,
    hasFocus: d,
    id: `${selectedPropertyType}-${i}`,
    index: i,
    isDragging: l,
    onChange: h,
    onMouseDown: m,
    onMouseMove: g,
    onMouseUp: f,
    onRemoveExport: () => _(i),
    pickerShown,
    recordingKey: c(i),
    selected: a,
    selectedPropertyType,
    shouldUseGrid: p,
    singletonRow: u
  }, p ? void 0 : `export-${i}`), [selectedPropertyType, u, t, dropdownShown, pickerShown, c, _, p]);
  let m = e.standalone ? memo(t => jsx(eC, {
    ...e,
    ...t
  })) : void 0;
  return jsx(dD.Provider, {
    value: {
      useGrid: p
    },
    children: jsx(h6, {
      addProperty: e.addProperty,
      currentSelectedProperty: e.currentSelectedProperty,
      dispatch: e.dispatch,
      entrypointMenu: e.entrypointMenu,
      headerClickTriggersAddProperty: e.headerClickTriggersAddProperty,
      isMixed: e.isMixed,
      isPanelBodyCollapsedAtom: e.isPanelBodyCollapsedAtom,
      onChange: e.onChange,
      onHeaderClick: e.onHeaderClick,
      openFile: e.openFile,
      overrideAddPropertyTooltip: getI18nString("fullscreen.properties_panel.section_exports.tooltip_addExportSettings"),
      pickerShown: e.pickerShown,
      propertyList: e.propertyList,
      recordingKey: e.recordingKey,
      renderHeader: e.standalone ? m : void 0,
      renderProperty: h,
      selectedPropertyType: e.selectedPropertyType,
      showRemoveButton: !1,
      stylePickerShown: {
        isShown: !1
      },
      title: e.title || getI18nString("fullscreen.properties_panel.export")
    })
  });
}
$$ew3.displayName = "ExportList";
class eO extends a3 {}
class eR extends _$$c$ {}
let eL = l6;
let eP = _$$c$;
let eD = [{
  type: "CONTENT_SCALE",
  value: .5
}, {
  type: "CONTENT_SCALE",
  value: .75
}, {
  type: "CONTENT_SCALE",
  value: 1
}, {
  type: "CONTENT_SCALE",
  value: 1.5
}, {
  type: "CONTENT_SCALE",
  value: 2
}, {
  type: "CONTENT_SCALE",
  value: 3
}, {
  type: "CONTENT_SCALE",
  value: 4
}, {
  type: "CONTENT_WIDTH",
  value: 512
}, {
  type: "CONTENT_HEIGHT",
  value: 512
}];
let ek = new mz();
let eM = {
  format: e => {
    switch (e) {
      case "PNG":
        return "PNG";
      case "JPEG":
        return "JPG";
      case "SVG":
        return "SVG";
      case "PDF":
        return "PDF";
    }
  }
};
let eF = forwardRef(function ({
  dropdownShown: e,
  exportSetting: t,
  hasFocus: r,
  id: s,
  isDragging: o,
  onConstraintChange: l,
  onImageTypeChange: d,
  onMouseDown: h,
  onMouseMove: f,
  onMouseUp: E,
  onRemoveExport: y,
  onToggleModal: T,
  pickerShown: I,
  recordingKey: S,
  selected: A,
  shouldUseGrid: C,
  singletonRow: w
}, O) {
  let L = createRecordingCallback(S);
  let P = useDispatch();
  let D = getFeatureFlags().fpl_select_migration;
  let k = Qu();
  let M = eD.map((e, t) => jsx(eR, {
    value: e,
    recordingKey: L("constraints", e.value)
  }, t));
  let j = {
    onClick: T,
    onMouseDown: stopPropagation,
    "data-tooltip": getI18nString("fullscreen.export_panel.export_settings"),
    "data-tooltip-type": KindEnum.TEXT
  };
  let U = L("settings");
  let B = jsx(AutoInteractableWrapper, {
    name: "export_constraint_combo_box",
    children: jsx(ow, {
      value: {
        select: pW,
        inputComponent: gm
      },
      children: jsx(tV, {
        value: {
          chevron: ChevronContainer
        },
        children: jsx(eO, {
          ariaLabel: getI18nString("fullscreen.properties_panel.export_settings.constraints.aria_label"),
          className: v()(QU, AL),
          disabled: "SVG" === t.imageType || "PDF" === t.imageType,
          dispatch: P,
          dropdownClassName: J9,
          dropdownShown: e,
          formatter: ek,
          id: `export-constraint-${s}`,
          inputClassName: Ez,
          isTokenizable: !0,
          onChange: l,
          onKeyDown: k,
          onMouseDown: stopPropagation,
          property: t.constraint,
          recordingKey: L("contraints"),
          children: M
        })
      })
    })
  });
  let G = useRef(null);
  let V = jsx(AutoInteractableWrapper, {
    name: "export_image_type_select",
    children: D ? jsxs(bL, {
      value: t.imageType,
      onChange: d,
      recordingKey: L("imageType"),
      children: [jsx(l9, {
        ref: G,
        width: "fill",
        label: jsx(HiddenLabel, {
          children: getI18nString("fullscreen.properties_panel.export_settings_image_file_type")
        })
      }), jsxs(mc, {
        children: [jsx(c$, {
          value: "PNG",
          children: "PNG"
        }), jsx(c$, {
          value: "JPEG",
          children: "JPEG"
        }), jsx(c$, {
          value: "SVG",
          children: "SVG"
        }), jsx(c$, {
          value: "PDF",
          children: "PDF"
        })]
      })]
    }) : jsxs(eL, {
      ariaLabel: getI18nString("fullscreen.properties_panel.export_settings_image_file_type"),
      chevronClassName: tc,
      className: wm,
      dispatch: P,
      dropdownClassName: PK,
      dropdownShown: e,
      formatter: eM,
      id: `export-image-type-${s}`,
      inputClassName: SL,
      onChange: d,
      onMouseDown: stopPropagation,
      property: t.imageType,
      recordingKey: L("imageType"),
      children: [jsx(eP, {
        value: "PNG",
        recordingKey: L("imageType", "png")
      }), jsx(eP, {
        value: "JPEG",
        recordingKey: L("imageType", "jpeg")
      }), jsx(eP, {
        value: "SVG",
        recordingKey: L("imageType", "svg")
      }), jsx(eP, {
        value: "PDF",
        recordingKey: L("imageType", "pdf")
      })]
    })
  });
  let H = jsx(AutoInteractableWrapper, {
    name: "toggle_export_settings_modal_button",
    children: jsx("span", {
      className: uX,
      children: jsx(_$$d, {
        "aria-expanded": !!I,
        "aria-label": getI18nString("fullscreen.export_panel.export_settings"),
        recordingKey: U,
        htmlAttributes: {
          ...j,
          "data-test-id": "toggle-export-settings-modal-button"
        },
        children: jsx(_$$J2, {})
      })
    })
  });
  let z = !!y && jsx(AutoInteractableWrapper, {
    name: "remove_export_button",
    children: jsx(IconButton, {
      onClick: y,
      "aria-label": getI18nString("fullscreen.properties_panel.tooltip_remove"),
      recordingKey: L("removeButton"),
      htmlAttributes: {
        onMouseDown: stopPropagation,
        "data-tooltip": getI18nString("fullscreen.properties_panel.tooltip_remove"),
        "data-tooltip-type": KindEnum.TEXT
      },
      children: jsx(_$$O, {})
    })
  }) || null;
  return C ? jsx(dp, {
    ref: O,
    firstRightIcon: H,
    hasFocus: o,
    htmlAttributes: {
      onFocus: e => {
        e.target === G.current && null === e.relatedTarget && e.stopPropagation();
      }
    },
    leftInput: B,
    recordingKey: S,
    rightInput: V,
    secondRightIcon: z,
    selected: A,
    singletonRow: w
  }) : jsxs(_$$e, {
    ref: O,
    className: v_,
    dragging: o,
    onMouseDown: h,
    onMouseMove: f,
    onMouseUp: E,
    recordingKey: S,
    selected: A,
    selectedSecondary: A && !r,
    singletonRow: w,
    children: [B, V, H, z]
  });
});
export function $$ej1(e, t, r) {
  if (t === e.imageType) return;
  let n = "" !== e.suffix && eI(e.constraint.value) === e.suffix ? eI(1) : e.suffix;
  "PNG" === t ? r({
    imageType: t,
    contentsOnly: e.contentsOnly,
    colorProfile: e.colorProfile,
    useAbsoluteBounds: e.useAbsoluteBounds,
    useBicubicSampler: e.useBicubicSampler,
    suffix: e.suffix,
    constraint: e.constraint
  }) : "JPEG" === t || "PDF" === t ? r({
    imageType: t,
    contentsOnly: e.contentsOnly,
    colorProfile: e.colorProfile,
    useAbsoluteBounds: e.useAbsoluteBounds,
    useBicubicSampler: e.useBicubicSampler,
    suffix: "PDF" === t ? n : e.suffix,
    constraint: "PDF" === t ? {
      type: "CONTENT_SCALE",
      value: 1
    } : e.constraint,
    quality: "PDF" === t ? JI : Ho
  }) : "SVG" === t && r({
    imageType: t,
    contentsOnly: e.contentsOnly,
    colorProfile: e.colorProfile,
    useBicubicSampler: e.useBicubicSampler,
    suffix: n,
    constraint: {
      type: "CONTENT_SCALE",
      value: 1
    },
    svgIDMode: "IF_NEEDED",
    svgOutlineText: !0,
    svgForceStrokeMasks: !1,
    useAbsoluteBounds: e.useAbsoluteBounds
  });
}
function eU(e) {
  let t = useRef(null);
  let r = t => {
    e.onChange({
      ...e.exportSetting,
      suffix: t
    });
  };
  let a = () => e.pickerShown && e.pickerShown.id === e.id ? e.pickerShown : null;
  let s = a();
  return jsxs(Fragment, {
    children: [jsx(eF, {
      ref: t,
      dropdownShown: e.dropdownShown,
      exportSetting: e.exportSetting,
      hasFocus: e.hasFocus,
      id: e.id,
      isDragging: e.isDragging,
      onConstraintChange: t => {
        "" !== e.exportSetting.suffix && eI(e.exportSetting.constraint.value) === e.exportSetting.suffix ? e.onChange({
          ...e.exportSetting,
          constraint: t,
          suffix: eI(t.value)
        }) : e.onChange({
          ...e.exportSetting,
          constraint: t
        });
      },
      onImageTypeChange: t => {
        $$ej1(e.exportSetting, t, e.onChange);
      },
      onMouseDown: e.onMouseDown,
      onMouseMove: e.onMouseMove,
      onMouseUp: e.onMouseUp,
      onRemoveExport: e.onRemoveExport,
      onSuffixChange: r,
      onToggleModal: r => {
        if (r.stopPropagation(), a()) {
          e.dispatch(hidePickerThunk());
          fullscreenValue.deselectProperty();
        } else {
          let r = calculatePickerPositionLeft(t.current, _$$zk);
          fullscreenValue.updateAppModel({
            currentSelectedProperty: {
              type: e.selectedPropertyType,
              indices: [e.index]
            }
          });
          e.dispatch(showPickerThunk({
            id: e.id,
            initialX: r.x,
            initialY: r.y
          }));
          e.dispatch(sw());
        }
      },
      pickerShown: s,
      recordingKey: e.recordingKey,
      selected: e.selected,
      shouldUseGrid: e.shouldUseGrid,
      singletonRow: e.singletonRow
    }), s && jsx(Tq, {
      exportSettings: e.exportSetting,
      onChange: e.onChange,
      pickerShown: s,
      dispatch: e.dispatch,
      recordingKey: generateRecordingKey(e, "settings"),
      dropdownShown: e.dropdownShown,
      onSuffixChange: r,
      suffixClassName: _$$ei
    })]
  });
}
function eB(e) {
  return jsx("div", {
    className: e.className || cT,
    children: jsx("img", {
      src: e.thumbnail.src,
      width: e.thumbnail.displaySize.x,
      height: e.thumbnail.displaySize.y,
      alt: "preview of layer to be exported"
    })
  });
}
class eG extends PureComponent {
  constructor(e) {
    super(e);
    this.toggleShown = () => {
      this.setState({
        previewShown: !this.state.previewShown
      });
    };
    this.updateThumbnail = () => {
      if (!this.state.previewShown || !this.props.shouldComputeThumbnails()) return;
      let e = new Point(this.props.panelWidth - 30, this.props.panelWidth - 30);
      let t = WQ(e, this.props.useAbsoluteBounds, !!this.props.useBicubicSampler);
      let r = null;
      t && t.pixels && t.pixelSize && t.displaySize && (r = {
        src: Pv(t.pixels, t.pixelSize, this.props.colorProfile),
        displaySize: t.displaySize
      });
      this.setState({
        thumbnail: r
      });
    };
    this.updateThumbnailAfterDelay = debounce(() => this.updateThumbnail(), 1e3);
    this.onSceneGraphChange = () => {
      null != this.state.previewGUID && this.updateThumbnailAfterDelay();
    };
    this.state = {
      previewIsCanvas: !0,
      previewGUID: null,
      previewShown: !1,
      thumbnail: null
    };
  }
  componentDidUpdate(e, t) {
    e.colorProfile !== this.props.colorProfile && (this.setState({
      thumbnail: null
    }), this.updateThumbnailAfterDelay.cancel(), this.updateThumbnail());
    let r = !t.previewShown && this.state.previewShown;
    let n = e.panelWidth !== this.props.panelWidth;
    if (this.props.sceneGraphSelection === e.sceneGraphSelection && !r && !n) return;
    let i = this.props.sceneGraphSelection;
    let a = this.props.numSelected;
    if ((a > 1 || !this.state.previewShown) && !n) {
      this.setState({
        thumbnail: null,
        previewGUID: null
      });
      return;
    }
    let s = 0 === a;
    let o = s ? this.props.currentPage : getFirstKey(i);
    (o !== this.state.previewGUID || n) && (this.setState({
      thumbnail: null,
      previewGUID: o,
      previewIsCanvas: s
    }), this.updateThumbnailAfterDelay.cancel(), this.updateThumbnail());
  }
  componentDidMount() {
    fullscreenValue.fromFullscreen.on("pingSceneGraphEvent", this.onSceneGraphChange);
  }
  componentWillUnmount() {
    fullscreenValue.fromFullscreen.removeListener("pingSceneGraphEvent", this.onSceneGraphChange);
    this.updateThumbnailAfterDelay.cancel();
  }
  render() {
    return this.props.numSelected > 1 ? null : jsxs("div", {
      children: [jsx(AutoInteractableWrapper, {
        name: "toggle_export_preview_visibility_button",
        children: jsxs(fI, {
          onClick: this.toggleShown,
          recordingKey: this.props.recordingKey,
          className: q4,
          children: [this.state.previewShown ? jsx(_$$O2, {}) : jsx(_$$k, {}), jsx(JU, {
            className: Pf,
            children: renderI18nText("fullscreen.properties_panel.preview")
          })]
        })
      }), this.state.previewShown && this.state.thumbnail && jsx(eB, {
        thumbnail: this.state.thumbnail
      })]
    });
  }
}
eG.displayName = "PreviewThumbnail";
export const LI = $$eN0;
export const MU = $$ej1;
export const Wd = $$eA2;
export const df = $$ew3;
export const hD = $$ev4;
export const jj = $$eS5;