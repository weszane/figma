import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { PureComponent, useRef, useMemo } from "react";
import { wA, bN } from "../vendor/514228";
import { lQ } from "../905/934246";
import { S as _$$S } from "../905/274480";
import { J } from "../905/270045";
import { DP } from "../905/158740";
import { getFeatureFlags } from "../905/601108";
import { sx } from "../905/449184";
import { o6, Z7, Pt } from "../figma_app/806412";
import { k as _$$k2 } from "../905/582200";
import { Point } from "../905/736624";
import { tx, t as _$$t } from "../905/303541";
import { XE, u1 } from "../figma_app/91703";
import { sw } from "../figma_app/914957";
import { k8 } from "../figma_app/8833";
import { Y5 } from "../figma_app/455680";
import { hS, E7, gl, oV } from "../905/216495";
import { zj } from "../905/275640";
import { Q } from "../figma_app/104130";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
import { l as _$$l } from "../905/479687";
import { w as _$$w } from "../905/442596";
import { Uz } from "../905/63728";
import { h as _$$h } from "../905/65944";
import { y7 } from "../figma_app/580959";
import { Q as _$$Q } from "../905/346809";
import { Zk, fI, JU } from "../figma_app/626177";
import { DE, Ad } from "../figma_app/811257";
import { wu } from "../1528/306300";
import { B as _$$B } from "../905/229357";
import { M as _$$M } from "../figma_app/339170";
import { a as _$$a } from "../905/597867";
import { cJ } from "../905/561485";
let N = "mixed_checkbox--mixed--xYUsQ";
class I extends PureComponent {
  constructor(e) {
    super(e);
    this.documentKeyDown = e => {
      e.keyCode === Uz.TAB && this.setState({
        showFocus: !0
      });
    };
    this.documentMouseDown = e => {
      this.setState({
        showFocus: !1
      });
    };
    this.onFocus = e => {
      this.state.showFocus || e.target.blur();
    };
    this.state = {
      showFocus: !1
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.documentKeyDown);
    document.addEventListener("mousedown", this.documentMouseDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.documentKeyDown);
    document.removeEventListener("mousedown", this.documentMouseDown);
  }
  classNameForInput() {
    let {
      someChecked
    } = this.props;
    let t = "mixed_checkbox--checkboxInput--aoLHh";
    someChecked && (t += ` ${N}`);
    this.props.inputClassName && (t += ` ${this.props.inputClassName}`);
    return t;
  }
  classNameForCheckmark() {
    let {
      someChecked
    } = this.props;
    let t = "mixed_checkbox--checkmark--B6ca7";
    someChecked ? t += ` ${N}` : t += " mixed_checkbox--checked--w0eLb";
    this.props.disabled && (t += " mixed_checkbox--disabled--NP7v9");
    this.props.checkmarkClassName && (t += ` ${this.props.checkmarkClassName}`);
    return t;
  }
  render() {
    let {
      allChecked,
      someChecked
    } = this.props;
    return jsxs("label", {
      className: ["mixed_checkbox--checkboxHitbox--QsCWQ", this.props.className].filter(e => !!e).join(" "),
      children: [jsx("input", {
        id: this.props.id,
        "data-testid": this.props["data-testid"],
        "data-onboarding-key": this.props["data-onboarding-key"],
        type: "checkbox",
        onFocus: this.onFocus,
        checked: allChecked,
        className: this.classNameForInput(),
        onChange: this.props.onChange,
        disabled: this.props.disabled
      }), (someChecked || allChecked) && jsx("div", {
        className: this.classNameForCheckmark(),
        children: allChecked ? jsx(_$$l, {}) : jsx(_$$w, {})
      })]
    });
  }
}
I.displayName = "MixedCheckbox";
class E extends o6 {
  constructor(e) {
    super(e);
    this.onChange = Z7(this, "change", e => {
      this.props.onChange?.(e.target.checked);
    });
  }
  render() {
    let e = hS(this.props.property) && !!E7(this.props.property);
    let t = gl(this.props.property);
    return jsx(I, {
      className: ["checkbox--checkboxHitbox--HBFVf mixed_checkbox--checkboxHitbox--QsCWQ", this.props.className].filter(e => !!e).join(" "),
      inputClassName: "checkbox--checkboxInput--IHKak mixed_checkbox--checkboxInput--aoLHh",
      checkmarkClassName: "checkbox--checkmark--pzYni mixed_checkbox--checkmark--B6ca7",
      allChecked: e,
      someChecked: t,
      disabled: this.props.disabled,
      id: this.props.id,
      "data-testid": this.props["data-testid"],
      onChange: this.onChange
    });
  }
}
E.displayName = "Checkbox";
export function $$G0(e) {
  let t = useRef(null);
  let s = DP();
  let k = wA();
  let w = cJ();
  let {
    backgroundColor,
    backgroundEnabled,
    backgroundOpacity,
    exportBackgroundDisabled
  } = zj("backgroundColor", "backgroundEnabled", "backgroundOpacity", "exportBackgroundDisabled");
  let G = e => Y5.updateSelectionProperties({
    backgroundEnabled: e
  });
  let V = e => {
    Y5.updateSelectionProperties({
      exportBackgroundDisabled: !e
    });
  };
  let U = useMemo(() => {
    let e = E7(backgroundColor);
    let t = E7(backgroundOpacity);
    return null != e && null != t ? {
      ...e,
      a: t
    } : backgroundColor || oV;
  }, [backgroundColor, backgroundOpacity]);
  let z = useMemo(() => hS(backgroundOpacity) && "number" == typeof backgroundOpacity && isNaN(backgroundOpacity) ? 0 : backgroundOpacity, [backgroundOpacity]);
  let W = () => {
    if (e.setDefaultToolOnPickerOpen && Y5.triggerAction("set-tool-default"), e.pickerShown && e.pickerShown.id === k8) k(XE());else {
      getFeatureFlags().ce_properties_panel_tracking && sx("editor-background-panel-color-picker-show");
      let e = t.current ? cn(t.current) : {
        x: 0,
        y: 0
      };
      k(u1({
        id: k8,
        initialX: e.x,
        initialY: e.y
      }));
      k(sw());
    }
  };
  let $ = () => jsx(H, {
    backgroundColor,
    backgroundEnabled,
    backgroundOpacity,
    pickerShown: e.pickerShown,
    chitRowRef: t,
    recordingKey: e.recordingKey,
    toggleColorPicker: W
  });
  let Y = () => ({
    color: E7(backgroundColor) ?? void 0,
    opacity: E7(z) ?? void 0,
    type: "SOLID",
    blendMode: "NORMAL",
    visible: E7(backgroundEnabled) ?? void 0
  });
  let X = () => jsx(_$$a, {
    ...e,
    ref: t,
    dragging: !1,
    hasFocus: !1,
    onPreviewClick: W,
    onRowFocus: lQ,
    paint: Y(),
    previewActive: !1,
    secondIconButton: q(),
    selected: e.pickerShown?.id === k8,
    singletonRow: !0
  });
  let q = () => void 0 === backgroundEnabled ? void 0 : jsx("span", {
    className: "background_panel--visible--2-4Ns",
    children: jsx(_$$B, {
      visible: backgroundEnabled,
      onChange: G,
      recordingKey: Pt(e, "visibleToggle")
    })
  });
  return jsx(_$$k2, {
    name: "background_panel",
    children: jsxs(Zk, {
      children: [jsxs("div", {
        children: [jsxs(fI, {
          className: "background_panel--panelTitleRow--uNINf",
          children: [jsx(_$$Q, {
            children: w ? tx("fullscreen.properties_panel.background") : tx("fullscreen.properties_panel.page")
          }), jsx(_$$M, {
            showLibrarySets: !0,
            recordingKey: "pageLevel"
          })]
        }), "ui2" === s.version ? jsxs(fI, {
          ref: t,
          children: [$(), q()]
        }) : jsx(Q.Consumer, {
          children: e => e.useLargePreviewRows ? X() : jsx(DE, {
            ref: t,
            label: null,
            input: $(),
            icon: q()
          })
        })]
      }), e.hasExports ? "ui3" === s.version ? jsx(Ad, {
        label: jsx(Fragment, {}),
        input: jsx(_$$S, {
          muted: !0,
          mixed: exportBackgroundDisabled === oV,
          checked: !1 === exportBackgroundDisabled,
          onChange: V,
          recordingKey: Pt(e, "exportDisableCheckbox"),
          label: jsx(J, {
            htmlAttributes: {
              "data-tooltip": _$$t("fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports"),
              "data-tooltip-type": Ib.TEXT
            },
            children: tx("fullscreen.properties_panel.show_in_exports")
          }),
          htmlAttributes: {
            "data-tooltip": _$$t("fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports"),
            "data-tooltip-type": Ib.TEXT
          }
        })
      }) : jsxs(fI, {
        className: "background_panel--checkboxLabelRow--r-hmK",
        children: [jsx(E, {
          className: "background_panel--checkbox--6U3j-",
          id: "export-background-disabled",
          property: exportBackgroundDisabled === oV ? oV : !exportBackgroundDisabled,
          onChange: V,
          recordingKey: Pt(e, "exportDisableCheckbox")
        }), jsx(JU, {
          className: "background_panel--checkboxLabel--ITthj",
          htmlFor: "export-background-disabled",
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": _$$t("fullscreen.properties_panel.include_the_canvas_or_group_background_in_exports"),
          children: tx("fullscreen.properties_panel.show_in_exports")
        })]
      }) : void 0, e.pickerShown?.id === k8 && jsx(_$$h, {
        disabledVariableIds: new Set(),
        initialPosition: new Point(e.pickerShown.initialX, e.pickerShown.initialY),
        color: hS(U) ? E7(U) : {
          r: 1,
          g: 1,
          b: 1,
          a: 1
        },
        boundVariable: null,
        onChange: (e, t) => {
          let s = e.a;
          e.a = 1;
          Y5.updateSelectionProperties({
            backgroundColor: e,
            backgroundOpacity: s,
            backgroundEnabled: !0
          }, {
            shouldCommit: t
          });
        },
        recordingKey: Pt(e, "colorPicker")
      }), jsx(wu, {
        showExplicitOnly: !0,
        recordingKey: "backgroundPanel-variableModeEntries"
      })]
    })
  });
}
function H(e) {
  let t = useMemo(() => {
    let t = E7(e.backgroundColor);
    let s = E7(e.backgroundOpacity);
    return null != t && null != s ? {
      ...t,
      a: s
    } : e.backgroundColor || oV;
  }, [e.backgroundColor, e.backgroundOpacity]);
  let s = useMemo(() => hS(e.backgroundOpacity) && "number" == typeof e.backgroundOpacity && isNaN(e.backgroundOpacity) ? 0 : e.backgroundOpacity, [e.backgroundOpacity]);
  let l = E7(e.backgroundColor);
  let a = E7(e.backgroundEnabled);
  let o = {
    color: l ?? void 0,
    opacity: E7(s) ?? void 0,
    type: "SOLID",
    blendMode: "NORMAL",
    visible: a ?? void 0
  };
  return jsx("div", {
    className: "background_panel--colorValueContainer---lsls paint_panels--colorValueContainer--DGeSP raw_components--borderFocusWithin--BaipZ paint_panels--_baseColorValueContainer--t-UIV raw_components--base--T7G0z raw_components--singleRowHeight--dKM4t",
    children: jsx(y7, {
      recordingKey: e.recordingKey,
      togglePicker: e.toggleColorPicker,
      chitOverride: {
        color: t,
        opacity: s
      },
      paint: o,
      onChange: (t, s) => {
        let r = !bN(t.color, e.backgroundColor);
        let n = t.opacity !== e.backgroundOpacity;
        Y5.updateSelectionProperties({
          backgroundColor: r && t?.color ? {
            ...t.color,
            a: 1
          } : void 0,
          backgroundOpacity: n ? t.opacity : void 0,
          backgroundEnabled: 0 !== t.opacity
        }, {
          shouldCommit: s
        });
      }
    })
  });
}
export const v = $$G0;