import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, PureComponent, createRef } from "react";
import { d as _$$d } from "../905/976845";
import { EventShield } from "../905/821217";
import { IconButton } from "../905/443068";
import { E as _$$E } from "../905/375716";
import { m as _$$m } from "../905/148147";
import { Y as _$$Y } from "../905/762765";
import { O as _$$O } from "../905/487602";
import { AppStateTsApi, NodePropertyCategory, StyleVariableOperation, CopyPasteType } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { memoizeByArgs } from "../figma_app/815945";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { AutoInteractableWrapper } from "../905/277716";
import { k as _$$k2 } from "../905/582200";
import { getI18nString } from "../905/303541";
import { hidePickerThunk, showPickerThunk } from "../figma_app/91703";
import { F as _$$F } from "../figma_app/8833";
import { stopPropagation } from "../figma_app/753501";
import { fullscreenValue } from "../figma_app/455680";
import { c6 } from "../905/950959";
import { valueOrFallback } from "../905/216495";
import { useLabConfiguration, labConfigurations } from "../905/226610";
import { Q as _$$Q } from "../figma_app/104130";
import { KindEnum } from "../905/129884";
import { calculatePickerPositionLeft } from "../905/959568";
import { executeWithDSAAction } from "../905/135117";
import { zK, zM } from "../905/182453";
import { e as _$$e } from "../figma_app/905311";
import { Kx } from "../905/401389";
import { PO, YR, dW } from "../905/75293";
import { b as _$$b, O as _$$O2 } from "../905/916974";
import { Zk, JU, $4 } from "../figma_app/626177";
import { yT } from "../figma_app/836943";
import { dD, o7 } from "../figma_app/941824";
import { Y9, Oe } from "../figma_app/811257";
import { B as _$$B } from "../905/229357";
import { ZB } from "../905/668609";
import H from "classnames";
import { X9 } from "../figma_app/975811";
import { C as _$$C } from "../905/549861";
import { i1 } from "../905/982943";
function F(e) {
  return {
    type: "STRETCH",
    axis: "X",
    visible: !0,
    numSections: 5,
    offset: 0,
    sectionSize: e,
    color: {
      r: 1,
      g: 0,
      b: 0,
      a: .1
    },
    pattern: "GRID",
    gutterSize: 20
  };
}
var W = H;
let $ = e => {
  switch (e.pattern) {
    case "GRID":
    default:
      return getI18nString("fullscreen.grid_panel.grid");
    case "STRIPES":
      if ("X" === e.axis) return getI18nString("fullscreen.grid_panel.columns_formatter");
      return getI18nString("fullscreen.grid_panel.rows_formatter");
  }
};
let Z = new PO();
let X = new X9();
let Q = e => {
  let t = [];
  switch (e.pattern) {
    case "GRID":
      t.push(getI18nString("properties_panel.transform_modifiers.repeat.units_pixels_lowercase", {
        numPx: X.format(e.sectionSize)
      }));
      break;
    case "STRIPES":
      switch (t.push(Z.format(e.numSections)), e.type) {
        case "MIN":
          t.push("X" === e.axis ? getI18nString("fullscreen.grids_panel.grid_settings.left") : getI18nString("fullscreen.grids_panel.grid_settings.top"));
          break;
        case "CENTER":
          t.push(getI18nString("fullscreen.grids_panel.grid_settings.center"));
          break;
        case "STRETCH":
          t.push(getI18nString("fullscreen.grids_panel.grid_settings.stretch"));
          break;
        case "MAX":
          t.push("X" === e.axis ? getI18nString("fullscreen.grids_panel.grid_settings.right") : getI18nString("fullscreen.grids_panel.grid_settings.bottom"));
      }
      break;
    default:
      t.push(getI18nString("fullscreen.properties_panel.section_transform_modifiers.tooltip_add_transform_modifier"));
  }
  return t;
};
let J = forwardRef((e, t) => {
  let i;
  let r = $(e.layoutGrid);
  let a = Q(e.layoutGrid);
  i = "GRID" === e.layoutGrid.pattern ? jsx(_$$E, {}) : "X" === e.layoutGrid.axis ? jsx(_$$m, {}) : jsx(_$$Y, {});
  return jsx(_$$C, {
    ...e,
    ref: t,
    propertyName: r,
    propertyValues: a,
    visible: e.layoutGrid.visible,
    previewElement: jsx("span", {
      className: W()("grids_panel--iconButton--1LBv2", i1, {
        "grids_panel--invisible--7m0Kl": !e.layoutGrid.visible
      }),
      children: i
    })
  });
});
let ee = (e, t) => {
  let {
    axis,
    numSections,
    type,
    sectionSize,
    pattern
  } = e;
  let o = "STRETCH" === type ? t ? "" : getI18nString("fullscreen.grid_panel.auto") : getI18nString("fullscreen.grid_panel.section_size_px", {
    sectionSize
  });
  return "GRID" === pattern ? getI18nString("fullscreen.grid_panel.grid_size", {
    sectionSize
  }) : "X" === axis ? numSections === _$$F ? getI18nString("fullscreen.grid_panel.columns", {
    suffix: o ?? ""
  }) : getI18nString("fullscreen.grid_panel.num_columns", {
    numColumns: numSections,
    suffix: o
  }) : numSections === _$$F ? getI18nString("fullscreen.grid_panel.rows", {
    suffix: o ?? ""
  }) : getI18nString("fullscreen.grid_panel.num_rows", {
    numRows: numSections,
    suffix: o
  });
};
let et = _$$b();
export function $$ei0(e) {
  let t = useLabConfiguration(labConfigurations.useGrid);
  return jsx(dD.Provider, {
    value: {
      useGrid: t
    },
    children: jsx(en, {
      ...e,
      useFPLGrid: t
    })
  });
}
class en extends PureComponent {
  constructor() {
    super(...arguments);
    this.context = null;
    this.layoutGrids = memoizeByArgs(e => {
      let t = valueOrFallback(e, []);
      let i = F(this.props.bigNudgeAmount);
      return t.map(e => function (e, t) {
        if (!e.pattern) throw Error("unknown layout grid pattern");
        return {
          ...t,
          ...e
        };
      }(e, i));
    });
    this.onGridsChange = (e, t) => {
      this.props.showFrameGrids || (c6(), AppStateTsApi.editorPreferences().showFrameGrids.set(!0));
      fullscreenValue.updateSelectionProperties({
        layoutGrids: e
      }, {
        shouldCommit: t
      });
    };
  }
  render() {
    let e = yT({
      ...this.props,
      styleType: "GRID",
      inheritStyleKeyField: "inheritGridStyleKey"
    });
    return jsx(_$$k2, {
      name: "grids_panel",
      children: jsx(Zk, {
        children: jsx(ea, {
          bigNudgeAmount: this.props.bigNudgeAmount,
          currentSelectedProperty: this.props.currentSelectedProperty,
          onChange: this.onGridsChange,
          pickerShown: this.props.pickerShown,
          propertyList: this.layoutGrids(this.props.layoutGrids),
          recordingKey: generateRecordingKey(this.props, "list"),
          selectedPropertyType: NodePropertyCategory.LAYOUT_GRID,
          showFrameGrids: this.props.showFrameGrids,
          smallNudgeAmount: this.props.smallNudgeAmount,
          ...e,
          stylePickerListLayout: !0,
          useFPLGrid: this.props.useFPLGrid,
          version: this.props.version
        })
      })
    });
  }
}
en.displayName = "GridsPanel";
en.contextType = zK;
class er extends Kx {}
class ea extends PureComponent {
  constructor() {
    super(...arguments);
    this.addProperty = () => {
      this.addConfiguredProperty("GRID");
    };
    this.addConfiguredProperty = e => {
      trackEventAnalytics("editor-layout-grid-add", {
        fileKey: this.props.openFile?.key || "",
        nodeIds: Object.keys(this.props.sceneGraphSelection).slice(0, 50),
        layoutType: "GRID" === e ? "grid" : "X" === e ? "columns" : "rows"
      });
      let t = F(this.props.bigNudgeAmount);
      switch (e) {
        case "Y":
          t = {
            ...t,
            axis: "Y",
            pattern: "STRIPES"
          };
          break;
        case "X":
          t = {
            ...t,
            axis: "X",
            pattern: "STRIPES"
          };
      }
      let i = valueOrFallback(this.props.propertyList, []);
      atomStoreManager.set(et, i.length);
      this.props.onChange(i.concat([t]));
    };
    this.removeProperty = e => {
      let t = valueOrFallback(this.props.propertyList, []);
      trackEventAnalytics("editor-layout-guide-removed", {
        fileKey: this.props.openFile?.key || "",
        nodeIds: Object.keys(this.props.sceneGraphSelection).slice(0, 50),
        layoutType: t?.[e] ? t[e]?.pattern === "GRID" ? "grid" : t[e]?.axis === "X" ? "columns" : "rows" : null
      });
      executeWithDSAAction(StyleVariableOperation.IGNORE, CopyPasteType.UNKNOWN, () => {
        this.props.onChange(t.filter((t, i) => i !== e));
      });
      fullscreenValue.deselectProperty();
    };
    this.onToggleGridStyleVisibility = e => {
      AppStateTsApi.editorPreferences().showFrameGrids.set(e);
    };
    this.renderProperty = (e, t, i, r, a, s, o, l, d) => jsx(es, {
      bigNudgeAmount: this.props.bigNudgeAmount,
      dispatch: this.props.dispatch,
      dropdownShown: this.props.dropdownShown,
      hasFocus: a,
      id: `${this.props.selectedPropertyType}-${t}`,
      index: t,
      isDragging: r,
      layoutGrid: e,
      onChange: s,
      onMouseDown: o,
      onMouseMove: l,
      onMouseUp: d,
      onRemoveGrid: this.removeProperty.bind(this, t),
      pickerShown: this.props.pickerShown,
      recordingKey: generateRecordingKey(this.props, "grid", t),
      selected: i,
      singletonRow: valueOrFallback(this.props.propertyList, []).length <= 1,
      smallNudgeAmount: this.props.smallNudgeAmount,
      useFPLGrid: this.props.useFPLGrid,
      version: this.props.version
    }, this.props.useFPLGrid ? void 0 : `grid-${t}`);
    this.memoizedStyleVisibility = memoizeByArgs(e => ({
      styleIsVisible: e,
      onToggleStyleVisibility: this.onToggleGridStyleVisibility
    }));
  }
  render() {
    return jsx(er, {
      entrypointMenu: jsx(ZB, {
        addGridOfType: this.addConfiguredProperty
      }),
      onChange: this.props.onChange,
      propertyList: this.props.propertyList,
      title: getI18nString("fullscreen.grid_panel.layout_guide"),
      ...(!getFeatureFlags().ds_qw_variable_and_style_visibility && {
        styleVisibility: this.memoizedStyleVisibility(this.props.showFrameGrids)
      }),
      addProperty: this.addProperty,
      currentSelectedProperty: this.props.currentSelectedProperty,
      dispatch: this.props.dispatch,
      openStylePickerToLeft: "ui3" === this.props.version,
      overrideAddPropertyTooltip: getI18nString("fullscreen.properties_panel.section_layout_grid.tooltip_addLayoutGuide"),
      pickerShown: this.props.pickerShown,
      recordingKey: this.props.recordingKey,
      renderProperty: this.renderProperty,
      selectedPropertyType: this.props.selectedPropertyType,
      ...yT(this.props)
    });
  }
}
ea.displayName = "GridsList";
class es extends PureComponent {
  constructor() {
    super(...arguments);
    this.isInCreateStyleModal = this.context === zM.CREATE_STYLE;
    this.onChange = e => {
      e.visible = !0;
      this.props.onChange(e);
    };
    this.onVisibleChange = e => {
      this.props.onChange({
        ...this.props.layoutGrid,
        visible: e
      });
    };
    this.rowRef = createRef();
    this.windowButtonRef = createRef();
    this.ui3RowRef = createRef();
    this.toggleSettings = e => {
      if (e && e.stopPropagation(), this.settingsPickerShown()) {
        this.props.dispatch(hidePickerThunk());
        fullscreenValue.deselectProperty();
      } else {
        let e = calculatePickerPositionLeft("ui3" === this.props.version ? this.ui3RowRef.current : this.rowRef.current);
        fullscreenValue.updateAppModel({
          currentSelectedProperty: {
            type: NodePropertyCategory.LAYOUT_GRID,
            indices: [this.props.index]
          }
        });
        this.props.dispatch(showPickerThunk({
          id: this.pickerId,
          initialX: e.x,
          initialY: e.y
        }));
      }
    };
  }
  get pickerId() {
    return this.isInCreateStyleModal ? `create-style-grid-${this.props.id}` : this.props.id;
  }
  settingsPickerShown() {
    return this.props.pickerShown && this.props.pickerShown.id === this.pickerId ? this.props.pickerShown : null;
  }
  render() {
    let e;
    let t = this.settingsPickerShown();
    let i = this.props.layoutGrid;
    let {
      axis,
      pattern
    } = i;
    e = "GRID" === pattern ? jsx(_$$E, {}) : "X" === axis ? jsx(_$$m, {}) : jsx(_$$Y, {});
    let h = ee(i, "ui3" === this.props.version);
    let g = jsx(AutoInteractableWrapper, {
      name: "toggle_settings_picker_button",
      children: jsx(_$$d, {
        ref: this.windowButtonRef,
        "aria-label": getI18nString("fullscreen.grid_panel.layout_guide_settings"),
        recordingKey: generateRecordingKey(this.props, "settings"),
        "aria-expanded": !!t,
        onClick: this.toggleSettings,
        actionOnPointerDown: !0,
        htmlAttributes: {
          onKeyDown: e => {
            this.props.useFPLGrid && " " === e.key && e.shiftKey && e.preventDefault();
          },
          onMouseUp: stopPropagation,
          "data-tooltip-type": KindEnum.TEXT,
          "data-tooltip": getI18nString("fullscreen.grid_panel.layout_guide_settings")
        },
        children: e
      })
    });
    let f = jsx("div", {
      className: "grids_panel--labelContainer--4kqDz",
      children: jsx(EventShield, {
        eventListeners: ["onMouseDown"],
        children: jsx(JU, {
          className: this.props.layoutGrid.visible ? "grids_panel--labelVisible---7DFp" : "grids_panel--labelInvisible--obeqU",
          children: h
        })
      })
    });
    let y = jsx(AutoInteractableWrapper, {
      name: "toggle_grid_visibility_button",
      children: jsx(_$$B, {
        visible: this.props.layoutGrid.visible,
        onChange: this.onVisibleChange,
        recordingKey: generateRecordingKey(this.props, "visibleToggle")
      })
    });
    let v = jsx(AutoInteractableWrapper, {
      name: "remove_grid_button",
      children: jsx(IconButton, {
        recordingKey: generateRecordingKey(this.props, "removeButton"),
        onClick: this.props.onRemoveGrid,
        "aria-label": getI18nString("fullscreen.grid_panel.remove_layout_guide"),
        htmlAttributes: {
          onMouseDown: stopPropagation
        },
        children: jsx(_$$O, {})
      })
    });
    let I = t && jsx(YR, {
      dropdownShown: this.props.dropdownShown,
      positionRef: this.windowButtonRef,
      initialX: t.initialX || 0,
      initialY: t.initialY || 0,
      layoutGrid: this.props.layoutGrid,
      onChange: this.onChange,
      recordingKey: generateRecordingKey(this.props, "settings"),
      bigNudgeAmount: this.props.bigNudgeAmount,
      smallNudgeAmount: this.props.smallNudgeAmount
    });
    if ("ui3" === this.props.version) {
      let e = this.props.selected && !this.props.hasFocus;
      let r = jsx(dW, {
        layoutGrid: i,
        onChange: this.onChange,
        dropdownOverride: h
      });
      return jsx(_$$Q.Consumer, {
        children: a => jsxs(Fragment, {
          children: [getFeatureFlags().ce_tv_new_row_open_modal && jsx(_$$O2, {
            lastAddedItemIndexAtom: et,
            index: this.props.index,
            callback: this.toggleSettings
          }), a.useLargePreviewRows ? jsx(J, {
            ref: this.ui3RowRef,
            dragging: this.props.isDragging,
            firstIconButton: y,
            hasFocus: this.props.hasFocus,
            layoutGrid: i,
            onMouseDown: this.props.onMouseDown,
            onMouseMove: this.props.onMouseMove,
            onMouseUp: this.props.onMouseUp,
            onPreviewClick: this.toggleSettings,
            previewActive: !!t,
            recordingKey: this.props.recordingKey,
            secondIconButton: v,
            selected: !!this.props.selected,
            singletonRow: this.props.singletonRow
          }) : this.props.useFPLGrid ? jsx(o7, {
            ref: this.ui3RowRef,
            cellHasCustomFocusRingTarget: !0,
            firstRightIcon: y,
            hasFocus: !0,
            input: r,
            leftIcon: g,
            recordingKey: this.props.recordingKey,
            secondRightIcon: v,
            selected: this.props.selected && !t,
            singletonRow: this.props.singletonRow
          }) : jsx(Y9, {
            ref: this.ui3RowRef,
            containerClassName: e ? "grids_panel--rowContainerSecondarySelect--iDZtH ui3_rows--rowContainerSecondarySelectDisabled--WFL3w" : void 0,
            dragging: this.props.isDragging,
            onMouseDown: this.props.onMouseDown,
            onMouseMove: this.props.onMouseMove,
            onMouseUp: this.props.onMouseUp,
            recordingKey: this.props.recordingKey,
            selected: this.props.selected,
            selectedSecondary: e,
            singletonRow: this.props.singletonRow,
            children: jsx(Oe, {
              label: null,
              leftIcon: g,
              input: r,
              firstRightIcon: y,
              secondRightIcon: v
            })
          }), I]
        })
      });
    }
    return jsxs(Fragment, {
      children: [jsxs(_$$e, {
        ref: this.rowRef,
        selected: this.props.selected,
        selectedSecondary: this.props.selected && !this.props.hasFocus,
        singletonRow: this.props.singletonRow,
        dragging: this.props.isDragging,
        onMouseDown: this.props.onMouseDown,
        onMouseMove: this.props.onMouseMove,
        onMouseUp: this.props.onMouseUp,
        recordingKey: this.props.recordingKey,
        children: [g, f, jsxs($4, {
          children: [y, v]
        })]
      }), I]
    });
  }
}
es.displayName = "Grid";
es.contextType = zK;
export const S = $$ei0;