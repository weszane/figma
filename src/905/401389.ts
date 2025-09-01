import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useCallback, useMemo, useRef } from "react";
import { wA } from "../vendor/514228";
import { arraysEqual } from "../figma_app/656233";
import { K as _$$K } from "../905/443068";
import { d as _$$d } from "../905/976845";
import { f as _$$f } from "../905/167712";
import { O as _$$O } from "../905/487602";
import { y as _$$y } from "../905/661502";
import { e as _$$e } from "../905/149844";
import { J as _$$J } from "../905/125993";
import { l as _$$l } from "../905/103989";
import { f as _$$f2 } from "../905/640587";
import { rrT, VD3, e0R, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { AD, dI } from "../905/871411";
import { mC } from "../figma_app/27355";
import v from "classnames";
import { Ay } from "../figma_app/778880";
import { Pt, rf, uA, _3 } from "../figma_app/806412";
import { t as _$$t, tx } from "../905/303541";
import { XE, Uv, bS } from "../figma_app/91703";
import { AV } from "../figma_app/933328";
import { Y5 } from "../figma_app/455680";
import { fG, C4, yH, l7 as _$$l2 } from "../figma_app/540726";
import { _W, hS, gl, E7, oV } from "../905/216495";
import { zy } from "../figma_app/915202";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { vL } from "../905/826900";
import { f as _$$f3 } from "../905/135117";
import { JH } from "../figma_app/479313";
import { kp, UJ, _D } from "../905/657318";
import { zM, zK } from "../905/182453";
import { x as _$$x } from "../905/346809";
import { m5 } from "../figma_app/651753";
import { fI, nV } from "../figma_app/626177";
import { MM, UP } from "../figma_app/246831";
import { N2 } from "../905/213527";
import { A8, zb, OS } from "../figma_app/836943";
import { $ as _$$$ } from "../figma_app/297778";
import { q as _$$q } from "../figma_app/905311";
import { c9, kG, U1, AA, xu, zi, ko, o1, et, PT, Dn, yr, Pf, wx, Qf } from "../figma_app/459377";
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
      d: "M3.103 10.19a1.5 1.5 0 0 0 0 2.121l4.043 4.044.02.018 2.285 2.285a4.42 4.42 0 0 0 7.196-1.41C17.88 14.288 15.715 11 12.5 11h-2.293l2.146-2.146a.5.5 0 1 0-.707-.707l-3 3a.5.5 0 0 0 0 .707l3 3a.5.5 0 1 0 .707-.707L10.208 12H12.5c2.494 0 4.186 2.555 3.224 4.863q-.162.387-.412.722a3.42 3.42 0 0 1-5.154.366l-4.304-4.304-.02-.018-2.024-2.025a.5.5 0 0 1 0-.707l7.586-7.586a.5.5 0 0 1 .707 0l7.586 7.586a.5.5 0 0 1 0 .707l-.851.852a.5.5 0 1 0 .707.707l.851-.852a1.5 1.5 0 0 0 0-2.121L12.81 2.603a1.5 1.5 0 0 0-2.121 0z",
      clipRule: "evenodd"
    })
  });
});
var I = v;
let q = () => useCallback(e => e.stopPropagation(), []);
function $(e) {
  let {
    onDeleteProperty,
    onChange
  } = e;
  let {
    getSelectedIndices,
    propertyList,
    setSelectedIndices,
    getSelectedIndicesAsSet
  } = e.selection;
  let u = useCallback(() => {
    let e = _W(propertyList, []);
    let n = onDeleteProperty;
    n || (n = t => onChange(e.filter((e, i) => !t.has(i))));
    getSelectedIndices().length ? (n(getSelectedIndicesAsSet()), setSelectedIndices([])) : (n(new Set([e.length - 1])), onChange(e.slice(0, e.length - 1)));
  }, [getSelectedIndicesAsSet, getSelectedIndices, propertyList, onDeleteProperty, setSelectedIndices, onChange]);
  let p = q();
  let m = Number(hS(propertyList) && _W(propertyList, []).length);
  return jsx(_$$K, {
    recordingKey: Pt(e, "removeButton"),
    disabled: 0 === m,
    "aria-label": _$$t("fullscreen.draggable_list.remove"),
    onClick: u,
    htmlAttributes: {
      onMouseDown: p
    },
    children: jsx(_$$O, {})
  });
}
function Z(e) {
  let {
    parent,
    toggleShowingStyles
  } = e;
  let {
    current
  } = t;
  let s = useCallback(() => {
    let e = current?.getBoundingClientRect();
    e && toggleShowingStyles(e);
  }, [current, toggleShowingStyles]);
  let o = q();
  return e.toggleShowingStyles ? jsx(_$$d, {
    "aria-label": _$$t("fullscreen.properties_panel.style"),
    recordingKey: Pt(e, "stylesButton"),
    "aria-expanded": e.isStylesPickerShown,
    onClick: s,
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": _$$t("fullscreen.properties_panel.style"),
      onMouseDown: o
    },
    children: jsx(_$$y, {})
  }) : null;
}
function X(e) {
  return jsx(_$$K, {
    recordingKey: Pt(e, "resetInteractionsButton"),
    "aria-label": _$$t("proto.prototype_panel.reset_interactions"),
    onClick: e.onResetInteractions,
    htmlAttributes: {
      "data-tooltip": _$$t("proto.prototype_panel.reset_interactions"),
      "data-tooltip-type": Ib.TEXT
    },
    children: jsx(p, {})
  });
}
function Q(e) {
  return jsx("span", {
    className: c9,
    children: jsx(_$$K, {
      actionOnPointerDown: !0,
      recordingKey: Pt(e, "addButton"),
      "aria-label": e.overrideAddPropertyTooltip ?? _$$t("fullscreen.draggable_list.add"),
      onClick: e.addProperty,
      htmlAttributes: {
        "data-tooltip": e.overrideAddPropertyTooltip ?? _$$t("fullscreen.draggable_list.add"),
        "data-tooltip-type": Ib.TEXT
      },
      children: jsx(_$$e, {
        className: c9
      })
    })
  });
}
function J(e) {
  let t = q();
  return jsx("span", {
    className: kG,
    children: jsx(_$$K, {
      recordingKey: Pt(e, "scrollBehaviorButton"),
      "aria-label": _$$t("fullscreen.draggable_list.scroll_behavior"),
      onClick: e.toggleScrollBehaviorPicker,
      htmlAttributes: {
        onMouseDown: t,
        "data-testid": "scroll-behavior-button",
        "data-tooltip": _$$t("fullscreen.draggable_list.scroll_behavior"),
        "data-tooltip-type": Ib.TEXT
      },
      children: jsx(_$$J, {})
    })
  });
}
function ee(e) {
  return jsx(_$$f, {
    "aria-label": _$$t("fullscreen.toolbar.prototyping-visibility"),
    recordingKey: Pt(e, "addButton"),
    checked: !!e.checked,
    onIcon: jsx(_$$l, {}),
    offIcon: jsx(_$$f2, {}),
    onChange: (t, i) => {
      e.toggleVisibleFlows?.(i.event);
    },
    htmlAttributes: {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": _$$t("fullscreen.toolbar.prototyping-visibility"),
      "data-tooltip-shortcut-key": "toggle-prototyping-info",
      "data-onboarding-key": "visible-flows-toggle"
    }
  });
}
export function $$et1(e) {
  let {
    propertyList
  } = e.selection;
  let i = hS(propertyList) && 0 === _W(propertyList, []).length;
  return jsxs("div", {
    className: U1,
    children: [e.children, jsxs("div", {
      className: AA,
      children: [!i && e.showRemoveButton && jsx($, {
        recordingKey: e.recordingKey,
        selection: e.selection,
        onDeleteProperty: e.onDeleteProperty,
        onChange: e.onChange
      }), jsx(Z, {
        recordingKey: e.recordingKey,
        isStylesPickerShown: e.isStylesPickerShown || !1,
        toggleShowingStyles: e.toggleShowingStyles,
        parent: e.parent
      }), e.showResetInteractionsButton && jsx(X, {
        recordingKey: e.recordingKey,
        onResetInteractions: e.onResetInteractions
      }), e.showScrollBehaviorButton && jsx(J, {
        recordingKey: e.recordingKey,
        toggleScrollBehaviorPicker: e.toggleScrollBehaviorPicker
      }), e.headerAccessory, !e.hideAddButton && jsxs("div", {
        className: xu,
        children: [jsx(Q, {
          recordingKey: e.recordingKey,
          addProperty: e.addProperty,
          overrideAddPropertyTooltip: e.overrideAddPropertyTooltip
        }), jsx("div", {
          className: I()(zi, {
            [ko]: !i
          }),
          children: e.entrypointMenu
        })]
      }), e.showVisibleFlowsButton && jsx(ee, {
        recordingKey: e.recordingKey,
        toggleVisibleFlows: e.toggleVisibleFlows,
        checked: e.visibleFlowsButtonChecked
      })]
    })]
  });
}
let ei = (e, t, i) => {
  let n = useCallback(n => {
    let r = n || {
      selectedPropertyType: e,
      propertyList: t,
      currentSelectedProperty: i
    };
    let a = _W(r.propertyList, []);
    return r.selectedPropertyType === r.currentSelectedProperty?.type ? r.currentSelectedProperty.indices.filter(e => e >= 0 && e < a.length) : [];
  }, [i, e, t]);
  let o = useCallback(() => new Set(n()), [n]);
  let l = wA();
  let d = useCallback(t => {
    arraysEqual(t, n()) || (0 === t.length ? Y5.deselectProperty() : Y5.updateAppModel({
      currentSelectedProperty: {
        type: e,
        indices: t
      }
    }), l(XE()), l(Uv()));
  }, [n, e, l]);
  return useMemo(() => ({
    propertyList: t,
    getSelectedIndices: n,
    getSelectedIndicesAsSet: o,
    setSelectedIndices: d
  }), [t, n, o, d]);
};
function en(e) {
  let {
    addProperty,
    hideAddButton,
    onHeaderClick
  } = e;
  let {
    propertyList
  } = e.selection;
  let {
    headerClickTriggersAddProperty = !0
  } = e;
  let l = useCallback(e => {
    onHeaderClick && onHeaderClick(e);
    headerClickTriggersAddProperty && hS(propertyList) && 0 === _W(propertyList, []).length && !hideAddButton && addProperty(e);
  }, [addProperty, propertyList, hideAddButton, onHeaderClick, headerClickTriggersAddProperty]);
  let d = rf(Pt(e, "panelTitle"), "click", l);
  let c = useRef(null);
  let u = mC(!1, e.isPanelBodyCollapsedAtom);
  if (!e.title) return null;
  let p = 0 === Number(_W(propertyList, []).length);
  let m = !(e.isMixed || gl(propertyList)) && !e.boldHeaderRow && (p || u);
  let h = !e.isPanelBodyCollapsedAtom || u && !p;
  return jsx(fI, {
    ref: c,
    className: I()(o1, {
      [et]: m,
      [PT]: h
    }),
    children: jsx($$et1, {
      addProperty: e.addProperty,
      entrypointMenu: e.entrypointMenu,
      headerAccessory: e.headerAccessory,
      hideAddButton: e.hideAddButton,
      isStylesPickerShown: e.isStylesPickerShown || !1,
      onChange: e.onChange,
      onDeleteProperty: e.onDeleteProperty,
      onResetInteractions: e.onResetInteractions,
      overrideAddPropertyTooltip: e.overrideAddPropertyTooltip,
      parent: c,
      recordingKey: e.recordingKey,
      selection: e.selection,
      showRemoveButton: !p && e.showRemoveButton,
      showResetInteractionsButton: e.showResetInteractionsButton,
      showScrollBehaviorButton: e.showScrollBehaviorButton,
      showVisibleFlowsButton: e.showVisibleFlowsButton,
      toggleScrollBehaviorPicker: e.toggleScrollBehaviorPicker,
      toggleShowingStyles: e.toggleShowingStyles,
      toggleVisibleFlows: e.toggleVisibleFlows,
      visibleFlowsButtonChecked: e.visibleFlowsButtonChecked,
      children: jsx(_$$x, {
        className: Dn,
        isPanelBodyCollapsedAtom: p ? null : e.isPanelBodyCollapsedAtom,
        onPointerDown: d,
        children: jsx("span", {
          className: yr,
          children: e.title
        })
      })
    })
  });
}
class er extends uA {
  constructor(e) {
    super(e);
    this.focusChange = () => this.forceUpdate();
    this.keyboardReceiverRef = e => {
      e && (this.keyboardReceiver = e);
    };
    this.onKeyDown = _3(this, "keydown", e => {
      if (this.props.shouldIgnoreKeyboardEvents) return;
      let t = e.event;
      switch (t.keyCode) {
        case 8:
        case 46:
          this.removeProperty();
          e.accept();
          break;
        case 68:
          if (this.props.shouldIgnoreKeyboardEventDuplicateProperty) return;
          (t.metaKey && Ay.mac || t.ctrlKey && !Ay.mac) && (this.duplicateProperty(), e.accept());
          break;
        case 27:
          this.props.selectionHandler.getSelectedIndices().length && (this.props.selectionHandler.setSelectedIndices([]), e.accept());
      }
    });
    this.clipboardDataType = () => {
      switch (this.props.selectedPropertyType) {
        case rrT.FILL:
          return "fillPaints";
        case rrT.STROKE:
        case rrT.STROKE_PRESET:
          return "strokePaints";
        case rrT.EXPORT:
          return "exportSettings";
        case rrT.LAYOUT_GRID:
          return "layoutGrids";
        case rrT.EFFECT:
          return "effects";
        case rrT.PROTOTYPE_INTERACTION:
          return "prototypeInteractions";
        case rrT.PROTOTYPE_INHERITED_INTERNAL_INTERACTION:
          return null;
        case rrT.TRANSFORM_MODIFIER:
          return "transformModifiers";
        default:
          throw Error(`Unexpected: ${rrT[this.props.selectedPropertyType]}`);
      }
    };
    this.liftInteractionsFromInteractionGroups = e => {
      let t = e.map(e => e.interactions);
      let i = [];
      for (var n of t) for (var r of n) {
        let e = JSON.parse(JSON.stringify(r));
        r && r.actions && (e.actions = m5(e.actions));
        i.push(e);
      }
      return i;
    };
    this.onClipboard = (e, t) => {
      let i = this.clipboardDataType();
      if (!i) return;
      let n = e.event.clipboardData || window.clipboardData;
      let r = this.props.selectionHandler.getSelectedIndices();
      switch (t) {
        case zy.COPY:
        case zy.CUT:
          if (r.length) {
            let a = E7(this.props.propertyList);
            let s = a ? r.map(e => a[e]) : [];
            "prototypeInteractions" === i && (s = this.liftInteractionsFromInteractionGroups(s));
            let o = fG(this.props.openFile?.key || null, {
              [i]: s
            });
            if (!o) break;
            C4(n, o, "");
            t === zy.CUT && this.removeProperty();
            e.accept();
          }
          break;
        case zy.PASTE:
          if ("prototypeInteractions" === i) break;
          if (r.length) {
            let t = yH(n);
            let a = t ? _$$l2(t) : null;
            if (a) {
              let t = a.nodeChanges && a.nodeChanges[0] || {};
              let n = this.getProperties(t, i) ?? [];
              let s = a.pasteFileKey && a.pasteFileKey !== this.props.openFile?.key;
              if (("fillPaints" === i || "strokePaints" === i) && s && (n = n.map(e => _$$$(e))), n && n.length) {
                let t = r[r.length - 1];
                let i = _W(this.props.propertyList, []);
                i = i.slice(0, t + 1).concat(n).concat(i.slice(t + 1));
                this.props.onChange(i);
                let a = n.map((e, i) => t + i + 1);
                this.props.selectionHandler.setSelectedIndices(a);
                e.accept();
              }
            }
          }
      }
    };
    this.onPropertyChange = (e, t, i) => {
      let n = _W(this.props.propertyList, []).slice(0);
      n[e] = t;
      this.props.onChange(n, i);
    };
    this.removeProperty = () => {
      let e = _W(this.props.propertyList, []);
      let t = this.props.onDeleteProperty;
      t || (t = t => this.props.onChange(e.filter((e, i) => !t.has(i))));
      this.props.selectionHandler.getSelectedIndices().length && (t(this.props.selectionHandler.getSelectedIndicesAsSet()), this.props.selectionHandler.setSelectedIndices([]));
    };
    this.duplicateProperty = () => {
      let e = _W(this.props.propertyList, []).slice();
      if (this.props.selectionHandler.getSelectedIndices().length) {
        let t = this.props.selectionHandler.getSelectedIndices().map(t => e[t]);
        for (let i of t) {
          let t = {
            ...i
          };
          e.splice(e.indexOf(i), 0, t);
        }
        this.props.onChange(e);
        let i = [];
        for (let n of t) i.push(e.indexOf(n));
        this.props.selectionHandler.setSelectedIndices(i);
      }
    };
    this.renderListItem = (e, t, i, n, r, a, s) => this.props.renderProperty(e, t, i, n, this.keyboardReceiver && this.keyboardReceiver.hasFocus(), this.onPropertyChange.bind(this, t), r, a, s);
  }
  UNSAFE_componentWillReceiveProps(e) {
    this.props.currentSelectedProperty !== e.currentSelectedProperty && (this.props.selectionHandler.getSelectedIndices(e).length ? this.keyboardReceiver.focus() : this.keyboardReceiver.blur());
  }
  getProperties(e, t) {
    let i = e[t] || null;
    let n = ["fillPaints", "strokePaints", "backgroundPaints"];
    n.indexOf(t) >= 0 && (i = i || (() => {
      for (let t of n) {
        let i = e[t] || null;
        if (i && i.length) return i;
      }
      return null;
    })());
    return i;
  }
  render() {
    let e = _W(this.props.propertyList, []);
    let t = this.props.propertyList === oV || this.props.isMixed;
    let i = this.props.renderHeader;
    let r = this.props.headerClickTriggersAddProperty ?? !0;
    return jsxs(vL, {
      name: "Draggable property list",
      handleKeyDown: this.onKeyDown,
      handleClipboard: this.onClipboard,
      ref: this.keyboardReceiverRef,
      forceUpdate: this.focusChange,
      children: [i ? jsx(i, {
        selectionHandler: this.props.selectionHandler
      }) : this.props.title && jsx(en, {
        addProperty: this.props.addProperty,
        boldHeaderRow: this.props.boldHeaderRow,
        entrypointMenu: this.props.entrypointMenu,
        headerAccessory: this.props.headerAccessory,
        headerClickTriggersAddProperty: r,
        hideAddButton: this.props.hideAddButton,
        isMixed: this.props.isMixed,
        isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom,
        isStylesPickerShown: this.props.isStylesPickerShown || !1,
        onChange: this.props.onChange,
        onDeleteProperty: this.props.onDeleteProperty,
        onHeaderClick: this.props.onHeaderClick,
        onResetInteractions: this.props.onResetInteractions,
        overrideAddPropertyTooltip: this.props.overrideAddPropertyTooltip,
        recordingKey: this.props.recordingKey,
        selection: this.props.selectionHandler,
        showRemoveButton: this.props.showRemoveButton,
        showResetInteractionsButton: this.props.showResetInteractionsButton,
        showScrollBehaviorButton: this.props.showScrollBehaviorButton,
        showVisibleFlowsButton: this.props.showVisibleFlowsButton,
        title: this.props.title,
        toggleScrollBehaviorPicker: this.props.toggleScrollBehaviorPicker,
        toggleShowingStyles: this.props.toggleShowingStyles,
        toggleVisibleFlows: this.props.toggleVisibleFlows,
        visibleFlowsButtonChecked: this.props.visibleFlowsButtonChecked
      }), jsxs(JH, {
        isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom || null,
        children: [t && jsx(fI, {
          children: jsx(nV, {
            className: Pf,
            children: this.props.selectedPropertyType === rrT.EXPORT ? tx("fullscreen.properties_panel.click_plus_to_replace_mixed_export_settings") : tx("fullscreen.properties_panel.click_plus_to_replace_mixed_content")
          })
        }), !t && e.length > 0 && jsx(_$$q, {
          listItems: e,
          onChange: this.props.onChange,
          onReorder: this.props.onReorder,
          selectedIndices: this.props.selectionHandler.getSelectedIndices(),
          updateSelection: this.props.selectionHandler.setSelectedIndices,
          renderListItem: this.renderListItem,
          reversed: void 0 === this.props.reversed || this.props.reversed
        })]
      })]
    });
  }
}
export function $$ea0(e) {
  let t = ei(e.selectedPropertyType, e.propertyList, e.currentSelectedProperty);
  return jsx(er, {
    ...e,
    selectionHandler: t
  });
}
er.displayName = "DraggablePropertyList";
export class $$es2 extends uA {
  constructor() {
    super(...arguments);
    this.state = {
      hasEverHovered: !1
    };
    this.context = null;
    this.onApplyStyle = (e, t) => {
      this.props.dispatch(AV({
        style: e,
        inheritStyleKeyField: this.props.inheritStyleKeyField,
        fromSearch: t
      }));
    };
    this.addProperty = e => {
      this.props.addProperty(e);
      this.isInStyleModal() || this.props.dispatch(XE());
      this.props.dispatch(Uv());
    };
    this.removeAllProperties = () => {
      A8(this.props.inheritStyleKey) && l7.user("remove-all-properties", () => {
        _$$f3(VD3.IGNORE, e0R.UNKNOWN, () => {
          glU?.applyStyleToSelection(this.props.inheritStyleKeyField, AD, !1);
        });
      });
      this.props.onChange([], zk.YES);
    };
    this.toggleShowingStyles = e => {
      if (this.props.onPickerIconClick) {
        let t = e.left + (e.width - N2) / 2;
        let i = e.top + e.height;
        this.props.onPickerIconClick({
          initialX: t,
          initialY: i
        });
        return;
      }
      if (zb(this.props)) this.props.dispatch(Uv());else {
        let t = e.left + (e.width - N2) / 2;
        let i = e.top + e.height;
        this.props.dispatch(bS({
          id: OS(this.props.inheritStyleKeyField),
          initialX: t,
          initialY: i,
          modal: !0
        }));
      }
    };
    this.onMouseOver = () => {
      this.setState({
        hasEverHovered: !0
      });
    };
  }
  isInStyleModal() {
    return null != this.context;
  }
  isInCreateStyleModal() {
    return this.context === zM.CREATE_STYLE;
  }
  isInCreateVariableStyleModal() {
    return this.context === zM.CREATE_VARIABLE_STYLE;
  }
  render() {
    let e = this.props.propertyList === oV || this.props.inheritStyleKey === oV;
    let t = !e && 0 === _W(this.props.propertyList, []).length && !E7(this.props.inheritStyleKey);
    if (e) {
      let e = zb(this.props);
      return jsxs("div", {
        onMouseOver: this.onMouseOver,
        children: [jsx($$ea0, {
          ...this.props,
          isMixed: !0,
          addProperty: this.addProperty,
          toggleShowingStyles: this.toggleShowingStyles,
          isStylesPickerShown: !!e
        }), this.state.hasEverHovered && jsx(MM, {
          inheritStyleKey: this.props.inheritStyleKey,
          inheritStyleID: this.props.inheritStyleID,
          styleType: this.props.styleType
        }), e && jsx(UP, {
          inheritStyleID: this.props.inheritStyleID,
          inheritStyleKey: this.props.inheritStyleKey,
          initialPosition: kp(e),
          minBottomMargin: UJ,
          onApplyStyle: this.onApplyStyle,
          onToggleListLayout: this.props.onToggleListLayout,
          picker: e,
          recordingKey: "stylePicker",
          stylePickerListLayout: this.props.stylePickerListLayout,
          styleType: this.props.styleType
        })]
      });
    }
    if (this.isInStyleModal()) {
      let e = dI(this.props.selectedStyleGuid);
      let t = !!(e && this.props.library.local.styles[e]);
      return jsx("div", {
        className: t || this.isInCreateStyleModal() || this.isInCreateVariableStyleModal() ? wx : Qf,
        children: jsx($$ea0, {
          ...this.props,
          title: _$$t("design_systems.styles.properties"),
          addProperty: this.addProperty
        })
      });
    }
    return jsx(_D, {
      addProperty: this.addProperty,
      advancedSettingsTooltip: this.props.advancedSettingsTooltip,
      entrypointMenu: this.props.entrypointMenu,
      hasMissingFont: this.props.hasMissingFont,
      hasMixedProperties: this.props.hasMixedProperties,
      inheritStyleID: this.props.inheritStyleID,
      inheritStyleKey: this.props.inheritStyleKey,
      inheritStyleKeyField: this.props.inheritStyleKeyField,
      isEmpty: t,
      isPanelBodyCollapsedAtom: this.props.isPanelBodyCollapsedAtom,
      onPickerIconClick: this.props.onPickerIconClick,
      onToggleAdvancedSettings: this.props.onToggleAdvancedSettings,
      onToggleListLayout: this.props.onToggleListLayout,
      openStylePickerToLeft: this.props.openStylePickerToLeft,
      overrideAddPropertyTooltip: this.props.overrideAddPropertyTooltip,
      recordingKey: this.props.recordingKey,
      removeAllProperties: void 0 !== this.props.removeAllProperties ? this.props.removeAllProperties : this.removeAllProperties,
      selectedPropertyType: this.props.selectedPropertyType,
      stylePickerListLayout: this.props.stylePickerListLayout,
      styleType: this.props.styleType,
      styleVisibility: this.props.styleVisibility,
      stylesButtonDataTag: this.props.stylesButtonDataTag,
      title: this.props.title,
      children: jsx($$ea0, {
        ...this.props,
        title: ""
      })
    });
  }
}
$$es2.displayName = "StyleAndPropertyList";
$$es2.contextType = zK;
export const h6 = $$ea0;
export const MX = $$et1;
export const Kx = $$es2;