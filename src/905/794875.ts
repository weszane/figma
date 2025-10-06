import m from "classnames";
import { Children, cloneElement, forwardRef, PureComponent, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { KeyCodes } from "../905/63728";
import { o as _$$o } from "../905/96108";
import { KindEnum } from "../905/129884";
import { getThemePx } from "../905/149328";
import { O as _$$O, ai, AN, BB, BI, CU, Df, fE, H9, hF, hH, Hi, HT, IK, IZ, JB, kL, l8, nJ, Om, P2, pR, Qc, QF, Qw, re, sS, tN, uK, UY, Vb, w$, Wm, x1, x7, yF, z6, ZM } from "../905/151685";
import { iw } from "../905/163832";
import { W } from "../905/187396";
import { r as _$$r2 } from "../905/211029";
import { isAutoMarker, isValidValue, MIXED_MARKER, normalizeValue } from "../905/216495";
import { D as _$$D } from "../905/225412";
import { getI18nString } from "../905/303541";
import { R as _$$R } from "../905/307199";
import { MediaQuerySvgComponent } from "../905/331623";
import { V as _$$V } from "../905/418494";
import { trackEventAnalytics } from "../905/449184";
import { ag } from "../905/454970";
import { RecordableDiv } from "../905/511649";
import { r as _$$r } from "../905/571562";
import { getFeatureFlags } from "../905/601108";
import { getSingletonSceneGraph } from "../905/700578";
import { SvgComponent } from "../905/714743";
import { generateUUIDv4 } from "../905/871474";
import { debounce } from "../905/915765";
import { hideDropdownAction, showDropdownThunk } from "../905/929976";
import { A as _$$A3 } from "../3850/824007";
import { A as _$$A } from "../6828/364616";
import { A as _$$A2 } from "../6828/844411";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { gw, wv } from "../figma_app/236327";
import { setRefValue } from "../figma_app/272902";
import { fullscreenValue } from "../figma_app/455680";
import { stopPropagation } from "../figma_app/753501";
import { BrowserInfo } from "../figma_app/778880";
import { generateRecordingKey, handleGenericEvent, handleMouseEvent, hookForKeyboard, RecordingPureComponent, SKIP_RECORDING } from "../figma_app/878298";
import { handleKeyboardEventByState } from "../figma_app/896988";
import { isInteractionPathCheck } from "../figma_app/897289";
import { dD } from "../figma_app/941824";
let h = m;
let {
  OverridesProvider,
  OverridableComponent
} = _$$r2();
let Y = gw;
let q = wv;
function $() {
  return getI18nString("design_systems.instance_panel.mixed");
}
function Z(e) {
  return jsx("div", {
    className: e.providedClassName,
    children: jsx(_$$r, {})
  });
}
function X(e) {
  let t;
  t = e.dropdownOverride ? e.dropdownOverride : isValidValue(e.property) ? e.formatter.format(e.property) : e.customMixedText || $();
  let [i, a] = useState(!1);
  let s = h()({
    [hF]: !e.isDisabled,
    [pR]: e.isDisabled,
    [BB]: e.icon,
    [Qc]: e.textAlign === "right",
    [Qw]: e.borderless,
    [Hi]: e.fauxFocus,
    [ag]: !0
  });
  let o = jsxs(Fragment, {
    children: [e.icon && jsx("div", {
      className: `${Vb} ${e.iconClassName || ""}`,
      children: e.icon
    }), e.showChit && e.chitPaint && jsx(_$$D, {
      paint: e.chitPaint,
      className: x7,
      onMouseDown: e.onChitMouseDown
    }), e.truncation === "middle" ? jsx("span", {
      className: tN,
      children: jsx(_$$o, {
        text: t
      })
    }) : jsx("span", {
      className: h()(AN, {
        [IK]: e.truncation !== "none",
        [HT]: e.fill
      }),
      ref: e.textRef,
      children: t
    }), e.rightIcon]
  });
  let l = jsxs(Fragment, {
    children: [o, jsx(OverridableComponent, {
      "originalComponent": Z,
      "data-test-id": "select-chevron",
      "isHoveredOverInput": e.isHoveredOverScrubbableComboboxControl || i,
      "providedClassName": `${ai} ${e.chevronClassName || ""}`,
      "overrideKey": "chevron"
    })]
  });
  return e.recordingKey ? jsx(RecordableDiv, {
    "aria-hidden": e.screenreaderVisible ? void 0 : "true",
    "className": h()(s, e.inputClassName),
    "data-testid": e.dataTestId,
    "onClick": e.isDisabled ? void 0 : e.onClick,
    "onMouseDown": e.isDisabled ? void 0 : e.onMouseDown,
    "onMouseEnter": t => {
      e.onMouseEnter && e.onMouseEnter(t);
      a(!0);
    },
    "onMouseLeave": t => {
      e.onMouseLeave && e.onMouseLeave(t);
      a(!1);
    },
    "onPointerDown": e.isDisabled ? void 0 : stopPropagation,
    "recordingKey": e.recordingKey,
    "style": {
      width: e.inputWidth,
      border: e.borderless ? "1px solid transparent" : void 0
    },
    "children": l
  }) : jsx("div", {
    "aria-hidden": e.screenreaderVisible ? void 0 : "true",
    "className": h()(s, e.inputClassName),
    "data-testid": e.dataTestId,
    "onClick": e.isDisabled ? void 0 : e.onClick,
    "onMouseDown": e.isDisabled ? void 0 : e.onMouseDown,
    "onMouseEnter": t => {
      e.onMouseEnter && e.onMouseEnter(t);
      a(!0);
    },
    "onMouseLeave": t => {
      e.onMouseLeave && e.onMouseLeave(t);
      a(!1);
    },
    "onPointerDown": e.isDisabled ? void 0 : stopPropagation,
    "style": {
      width: e.inputWidth,
      border: e.borderless ? "1px solid transparent" : void 0
    },
    "children": l
  });
}
let $$Q5 = forwardRef(({
  containerClassName: e,
  ...t
}, i) => {
  return jsx("div", {
    className: h()(kL, e),
    ref: i,
    children: jsx(X, {
      ...t
    })
  });
});
let J = [KeyCodes.UP_ARROW, KeyCodes.DOWN_ARROW, KeyCodes.SPACE, KeyCodes.ENTER];
export function $$ee2({
  targetDomNode: e,
  ...t
}) {
  let i = iw();
  let {
    useGrid
  } = useContext(dD);
  return jsx(et, {
    ...t,
    isInFPLGridCell: useGrid,
    targetDomNode: void 0 !== e ? e : i ? document.body : void 0
  });
}
class et extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.keyRecycler = new _$$V();
    this.updateWindowHeight = () => {
      this.setState({
        windowHeight: window.innerHeight
      });
    };
    this.container = null;
    this.containerRect = null;
    this.containerRef = e => {
      this.container = e;
    };
    this.hiddenInput = null;
    this.hiddenInputRef = e => {
      setRefValue(this.props.inputRef, e);
      this.props.preventHiddenInput !== "always" && (this.hiddenInput = e, e && this.props.autoFocus && e.focus());
    };
    this.focus = () => {
      this.hiddenInput?.focus();
    };
    this.dropdownListboxId = generateUUIDv4();
    this.isDropdownShown = e => e.dropdownShown?.type === this.props.id;
    this.dropdownShown = () => this.isDropdownShown(this.props);
    this.formattedSelectedValue = () => {
      let e = this.props.focusedOption || this.props.property;
      return isValidValue(e) ? this.props.formatter.format(e) : this.props.customMixedText || $();
    };
    this.childPositionByIndex = {};
    this.optionIndexByFormattedValue = {};
    this.optionValueByIndex = {};
    this.optionHeightByIndex = {};
    this.dropdownContentHeight = 0;
    this.allowSelectionTask = new W();
    this.cacheOptionPositions = e => {
      let t = 8;
      this.childPositionByIndex = Object.create(null);
      this.optionIndexByFormattedValue = Object.create(null);
      this.optionValueByIndex = Object.create(null);
      (e.property === MIXED_MARKER || this.state.previousPreviewValue === MIXED_MARKER) && (t += 24, Children.count(this.props.children) !== 0 && (t += 17));
      let i = 0;
      Children.forEach(e.children, n => {
        if (n == null) return null;
        if (n.type.__CLASS_NAME__ === "Option") {
          let r = n.props.value ?? null;
          let a = n.props.formattedValue ?? (r == null ? "" : e.formatter.format(r));
          this.optionIndexByFormattedValue[a] = i;
          this.optionValueByIndex[i] = r;
          this.optionHeightByIndex[i] = n.props.height || 24;
          this.childPositionByIndex[i] = t;
          t += n.props.height || 24;
          i++;
        } else {
          this.childPositionByIndex[i] = t;
          t += 17;
          i++;
        }
      });
      t += 8;
      this.dropdownContentHeight = t;
    };
    this.onMouseDown = handleMouseEvent(this, "mousedown", e => {
      if (this.props.onMouseDown || e.stopPropagation(), this.dropdownShown()) {
        this.hideDropdown();
        return;
      }
      isInteractionPathCheck() ? this.setState({
        allowSelection: !0
      }) : (this.setState({
        allowSelection: !1
      }), this.allowSelectionTask.reset(), this.allowSelectionTask.scheduleOnce(() => {
        this.setState({
          allowSelection: !0
        });
      }, 250));
      this.showDropdown();
      this.setState({
        wasOpenedOnMouseClick: !0
      });
    });
    this.showDropdown = () => {
      this.resetUserInput();
      this.startValue = this.props.property;
      (this.props.willShowDropdown ? this.props.willShowDropdown() : Promise.resolve()).then(() => {
        this.resizeDropdown();
        this.props.onShowDropdownOverride ? this.props.onShowDropdownOverride() : this.props.dispatch(showDropdownThunk({
          type: this.props.id
        }));
        this.state.focusedOptionValue != null && this.props.onOptionFocus?.(this.state.focusedOptionValue, "option");
        this.props.onShowDropdown?.();
      });
    };
    this.hideDropdown = (e = !0, t = !1) => {
      this.setState({
        currentDropdownAccepted: e
      });
      e || this.clearPreview();
      this.props.onHideDropdownOverride ? this.props.onHideDropdownOverride() : this.props.dispatch(hideDropdownAction());
      this.hiddenInput && !0 === this.state.wasOpenedOnMouseClick && (this.setState({
        wasOpenedOnMouseClick: !1
      }), this.hiddenInput.blur());
      this.props.onDropdownHidden && this.props.onDropdownHidden(t);
      this.startValue = void 0;
    };
    this.shouldConstrainTop = !1;
    this.shouldConstrainBottom = !1;
    this.resizeDropdown = () => {
      let e;
      if (this.hiddenInput && this.props.preventHiddenInput == null && this.hiddenInput.focus(), this.container && (this.containerRect = this.container.getBoundingClientRect()), !this.containerRect) return;
      let t = this.positionForFormattedValue(this.formattedSelectedValue());
      let i = -t;
      let n = this.dropdownContentHeight;
      let a = () => i + n;
      let s = normalizeValue(this.props.property);
      let o = s !== null ? this.props.formatter.format(s) : this.props.customMixedText || $();
      let l = () => this.containerRect.top + a();
      let d = this.props.minTop != null ? this.props.minTop : this.getDropdownMarginTop();
      let c = this.getDropdownMarginBottom();
      let u = window.innerHeight - c;
      if (this.props.neverConstrain || BrowserInfo.windows) {
        let e = 0;
        if (l() > u) {
          let t = l() - u;
          i -= t;
          e -= t;
        }
        if (this.containerRect.top + i < d) {
          let t = d - (this.containerRect.top + i);
          i += t;
          e += t;
        }
        if (l() > u) {
          let e = l() - u;
          n -= e;
        }
        this.shouldConstrainTop = !1;
        this.shouldConstrainBottom = !1;
        this.setState({
          topPositionOffsetForNeverConstrain: e
        });
      } else {
        if (this.props.targetDomNode && this.props.targetDomNode !== document.body) throw new Error("If you are parenting your <Select /> into a node that is NOT document.body via the targetDomNode prop, please ensure neverConstrain is also set to true. There are known issues with scrolling positioning with a specified targetDomNode.");
        if (this.shouldConstrainTop = this.containerRect.top + i < d, this.shouldConstrainTop) {
          let a = this.containerRect.top - d;
          i = -a;
          n = this.dropdownContentHeight - (t - a);
          e = this.scrollTopForValueOverInput(i, o);
          let s = Children.toArray(this.props.children);
          for (let t = s.length - 2; t >= 0; t--) {
            let r = this.childPositionByIndex[t] - e;
            if (Math.abs(r) <= 8) {
              if (s[t].type.__CLASS_NAME__ === "SelectDivider" || t === this.optionIndexByFormattedValue[o]) break;
              let e = r;
              e += (this.childPositionByIndex[t + 1] - this.childPositionByIndex[t]) / 2;
              i += e;
              n -= e;
              break;
            }
          }
        }
        if (this.shouldConstrainBottom = l() > u, this.shouldConstrainBottom) {
          n = window.innerHeight - (this.containerRect.top + i) - 8;
          e = this.scrollTopForValueOverInput(i, o);
          let t = Children.toArray(this.props.children);
          for (let i = 1; i < t.length; i++) {
            let r = this.childPositionByIndex[i] - e;
            if (Math.abs(r - n) <= 8) {
              if (t[i - 1].type.__CLASS_NAME__ === "SelectDivider" || i === this.optionIndexByFormattedValue[o]) break;
              n += r - n;
              n -= (this.childPositionByIndex[i] - this.childPositionByIndex[i - 1]) / 2;
              break;
            }
          }
        }
      }
      e = this.scrollTopForValueOverInput(i, o);
      let p = this.containerRect.top + i;
      let m = typeof this.props.dropdownAlignment == "function" ? this.props.dropdownAlignment(this.containerRect.left) : this.props.dropdownAlignment === "left" ? this.containerRect.left : void 0;
      this.props.targetDomNode && (p -= this.props.targetDomNode.getBoundingClientRect().top, m && (m -= this.props.targetDomNode.getBoundingClientRect().left));
      this.setState({
        focusedOptionValue: normalizeValue(this.props.property),
        dropdownScreenTop: p,
        dropdownScreenLeft: m,
        dropdownScreenRight: this.props.dropdownAlignment === "right" ? window.innerWidth - this.containerRect.right : void 0,
        dropdownWidth: this.containerRect.width,
        dropdownHeight: n,
        dropdownScrollTop: e
      });
    };
    this.ignoreMouseMove = !1;
    this.onOptionMouseMove = (e, t, i) => {
      this.ignoreMouseMove || (this.updateFocusedValue(e, t), this.resetUserInput());
      this.ignoreMouseMove = !1;
    };
    this.onOptionMouseUp = (e, t) => {
      this.state.allowSelection && (this.submitValue(e), this.hiddenInput && this.hiddenInput.blur());
    };
    this.submitValue = e => {
      this.clearPreview();
      this.props.onChange(e, this.startValue !== e ? yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT : void 0);
      this.props.keepDropdownOpenOnSubmit || this.hideDropdown(!0);
    };
    this.clearPreview = () => {
      void 0 !== this.state.previousPreviewValue && (fullscreenValue.triggerActionInUserEditScope("undo"), this.setState({
        previousPreviewValue: void 0
      }), this.props.onPreview?.(void 0));
    };
    this.updatePreview = debounce(e => {
      if (!this.props.enablePreview || !this.isDropdownShown(this.props)) return;
      let t = getSingletonSceneGraph().getCurrentPage();
      let i = 0;
      if (t && (i = t.directlySelectedNodes.length ?? 0), i > 250 || e === null) {
        this.clearPreview();
        return;
      }
      if (e && this.props.optionsWithDisabledPreviews?.includes(e)) return;
      let n = void 0 === this.state.previousPreviewValue;
      if (n) {
        if (this.props.property === e) return;
        this.setState({
          previousPreviewValue: this.props.property
        });
        this.props.onPreview?.(this.props.property);
      }
      let r = performance.now();
      this.props.onChange(e, n ? yesNoTrackingEnum.YES_WITHOUT_TRACKING_AS_EDIT : yesNoTrackingEnum.NO);
      getFeatureFlags().ee_canvas_previews_logging && trackEventAnalytics("on_canvas_preview", {
        timeMs: performance.now() - r,
        directlySelectedNodesCount: i,
        property: this.props.id
      }, {
        batchRequest: !0
      });
    }, this.props.previewDebounce ?? 50);
    this.updateFocusedValue = (e, t) => {
      e === this.state.focusedOptionValue || (this.setState({
        focusedOptionValue: e
      }), this.props.onOptionFocus?.(e ?? void 0, "option"), t || this.updatePreview(e));
    };
    this.dropdownRef = e => {
      e && (this.dropdownEl = e, this.scrollValueOverInput(this.formattedSelectedValue()));
    };
    this.maxDropdownHeight = () => {
      let e = this.props.minTop != null ? this.props.minTop : this.getDropdownMarginTop();
      return window.innerHeight - e - 8;
    };
    this.onScroll = (e, t, i) => {
      let {
        dropdownScrollTop,
        dropdownHeight
      } = this.state;
      if (void 0 === dropdownScrollTop || void 0 === dropdownHeight) return;
      t && i && (this.dropdownEl.scrollTop += i, this.dropdownEl.scrollTop = Math.max(0, this.dropdownEl.scrollTop));
      let a = this.dropdownEl.scrollTop;
      let s = a - dropdownScrollTop;
      if (this.setState({
        dropdownScrollTop: a
      }), this.dropdownContentHeight > dropdownHeight && !this.props.shouldNotTryToExpand && (this.shouldConstrainTop && s < 0 || this.shouldConstrainBottom && s > 0)) {
        let e = this.props.minTop != null ? this.props.minTop : this.getDropdownMarginTop();
        let t = Math.min(dropdownHeight + Math.abs(s), this.dropdownContentHeight, this.maxDropdownHeight());
        if (t - dropdownHeight > 0) {
          let i = this.state.dropdownScreenTop;
          s > 0 && void 0 !== i && (i = Math.max(i - s, e), a -= s, this.dropdownEl.scrollTop = a, this.setState({
            dropdownScrollTop: a
          }));
          this.setState({
            dropdownScreenTop: i,
            dropdownHeight: t
          });
        }
      }
      this.ignoreMouseMove = !0;
    };
    this.onKeyDown = hookForKeyboard(this, "keydown", e => {
      if (hookForKeyboard(e)) return SKIP_RECORDING;
      if (this.dropdownShown()) {
        let t = this.state.focusedOptionValue == null ? "" : this.props.formatter.format(this.state.focusedOptionValue);
        let i = this.optionIndexByFormattedValue[t];
        let n = !1;
        switch (e.keyCode) {
          case KeyCodes.UP_ARROW:
          case KeyCodes.TAB:
          case KeyCodes.DOWN_ARROW:
            {
              let t;
              if (this.props.disableSelectFocus && e.metaKey) break;
              let a = i ?? -1;
              let s = Children.toArray(this.props.children);
              let o = e.keyCode === KeyCodes.UP_ARROW ? -1 : 1;
              do {
                a += o;
                (t = s[a]) && (n = !!t.props.disabled);
              } while (t && t.type.__CLASS_NAME__ === "SelectDivider" || t?.props?.isHeader);
              let l = this.optionValueByIndex[a];
              l != null && (this.updateFocusedValue(l, n), this.scrollValueIntoView(this.props.formatter.format(l)), this.ignoreMouseMove = !0, this.resetUserInput());
              this.props.preventHiddenInput === "until_keydown" && this.focus();
              e.stopPropagation();
              e.preventDefault();
              break;
            }
          case KeyCodes.ENTER:
            this.state.focusedOptionValue != null && this.submitValue(this.state.focusedOptionValue);
            e.stopPropagation();
            break;
          case KeyCodes.ESCAPE:
            this.hiddenInput && (this.hideDropdown(!1, !0), e.stopPropagation());
            break;
          default:
            this.addInputChar(e.keyCode);
        }
      } else if (e.keyCode === KeyCodes.ESCAPE) {
        !this.props.isInFPLGridCell && this.hiddenInput && this.hiddenInput.blur();
      } else {
        if (this.props.isInFPLGridCell && e.code === "Space" && e.shiftKey) return;
        (this.props.openOnKeyPressed ? this.props.openOnKeyPressed.includes(e.keyCode) : J.includes(e.keyCode)) ? (e.preventDefault(), e.stopPropagation(), this.showDropdown(), this.setState({
          allowSelection: !0
        })) : this.addInputChar(e.keyCode);
      }
    });
    this.onFocus = handleGenericEvent(this, "focus", () => {
      let e = normalizeValue(this.props.property);
      e != null && this.props.onOptionFocus?.(e, "input");
    });
    this.onBlur = handleGenericEvent(this, "blur", () => {
      this.dropdownShown() || this.props.onOptionFocus?.(void 0, "input");
    });
    this.userInput = "";
    this.lastInputAt = 0;
    this.addInputChar = e => {
      if (this.props.disableTyping) return;
      let t = String.fromCharCode(e).toLowerCase();
      let i = Date.now();
      this.userInput = i - this.lastInputAt < 1500 ? this.userInput + t : t;
      this.lastInputAt = i;
      let n = null;
      let a = !1;
      if (Children.forEach(this.props.children, e => {
        e != null && n === null && e.props.value != null && this.props.formatter.format(e.props.value).toLowerCase().startsWith(this.userInput) && (n = e.props.value, a = !!e.props.disabled);
      }), n !== null) {
        if (this.dropdownShown()) {
          this.updateFocusedValue(n, a);
          let e = this.props.formatter.format(n);
          this.scrollValueOverInput(e);
        } else {
          this.submitValue(n);
        }
      }
    };
    this.isDisabled = () => this.props.disabled || Children.count(this.props.children) === 0;
    this.cloneChildForRender = (e, t, i) => {
      let n = (e, t) => e != null && t != null && this.props.formatter.isEqual ? this.props.formatter.isEqual(e, t) : e == t;
      if (e == null) return null;
      if (e.props.value == null) {
        let i = this.childPositionByIndex[t];
        return cloneElement(e, {
          style: {
            ...(e.props.style || {}),
            top: i
          }
        });
      }
      if (void 0 === this.state.dropdownHeight || void 0 === this.state.dropdownScrollTop) {
        this.keyRecycler.freeKeyForId(e.key);
        return null;
      }
      let a = Math.max(this.state.dropdownHeight, 72);
      let s = this.state.dropdownScrollTop - a;
      let o = this.state.dropdownScrollTop + this.state.dropdownHeight + a;
      let l = this.childPositionByIndex[t];
      let d = l + (e.props.height || 24);
      if (!isInteractionPathCheck() && (d < s || l > o)) {
        this.keyRecycler.freeKeyForId(e.key);
        return null;
      }
      let c = this.keyRecycler.getKeyForId(e.key);
      let u = this.state.previousPreviewValue ?? this.props.property;
      let p = n(normalizeValue(u), e.props.value);
      this.props.multipleSelections?.forEach(t => {
        !p && n(normalizeValue(t), e.props.value || null) && (p = !0);
      });
      let m = this.props.formatter.formatExtended?.(e.props.value);
      let h = m?.text ?? this.props.formatter.format(e.props.value);
      let {
        svg,
        fallbackSvg
      } = m || {};
      let _ = isAutoMarker(e.props.value) ? "auto" : e.props.value;
      return cloneElement(e, {
        key: c,
        selected: p,
        formattedValue: h,
        svg,
        fallbackSvg,
        focused: n(this.state.focusedOptionValue, e.props.value),
        onMouseUp: e.props.disabled || !this.state.allowSelection ? null : this.onOptionMouseUp.bind(this, e.props.value),
        onMouseMove: this.onOptionMouseMove.bind(this, e.props.value, e.props.disabled),
        id: `${i}-${t}`,
        style: {
          ...(e.props.style || {}),
          top: l
        },
        recordingKey: e.props.recordingKey || generateRecordingKey(this.props, `${_}`)
      });
    };
    this.state = {
      focusedOptionValue: normalizeValue(this.props.property),
      showTopScrollIndicator: !1,
      showBottomScrollIndicator: !1,
      windowHeight: window.innerHeight,
      currentDropdownAccepted: !1,
      wasOpenedOnMouseClick: !1
    };
    this.cacheOptionPositions(e);
  }
  static get defaultProps() {
    return {
      dropdownAlignment: "left"
    };
  }
  componentDidMount() {
    super.componentDidMount();
    window.addEventListener("resize", this.updateWindowHeight);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    this.allowSelectionTask.reset();
    window.removeEventListener("resize", this.updateWindowHeight);
    this.dropdownShown() && (this.props.onOptionFocus?.(void 0, "input"), this.clearPreview());
  }
  UNSAFE_componentWillUpdate(e) {
    this.cacheOptionPositions(e);
  }
  componentDidUpdate(e, t) {
    if (super.componentDidUpdate(this.props, this.state), this.props.triggerDropdown && (this.showDropdown(), this.setState({
      allowSelection: !0
    }), this.props.setTriggerDropdown && this.props.setTriggerDropdown(!1)), this.hiddenInput && this.props.preventHiddenInput == null && (this.dropdownShown() && !this.state.currentDropdownAccepted ? this.hiddenInput.focus() : this.props.blurOnChange && this.hiddenInput.blur()), this.isDropdownShown(e) && !this.dropdownShown()) {
      if (this.state.currentDropdownAccepted ? this.setState({
        currentDropdownAccepted: !1
      }) : this.props.onCancel?.(), this.props.onOptionFocus) {
        if (document.activeElement !== this.hiddenInput) {
          this.props.onOptionFocus(void 0, "input");
        } else {
          let e = normalizeValue(this.props.property);
          e != null && this.props.onOptionFocus(e, "input");
        }
      }
      this.setState({
        topPositionOffsetForNeverConstrain: void 0
      });
      this.clearPreview();
    }
    if (this.dropdownShown() && (this.isDropdownShown(e) || void 0 !== this.state.dropdownHeight && void 0 !== this.state.dropdownScrollTop ? (Children.count(this.props.children) !== Children.count(e.children) || t.windowHeight !== this.state.windowHeight) && this.resizeDropdown() : (this.resizeDropdown(), this.props.openBelowTarget && this.updateFocusedValue(this.optionValueByIndex[0])), this.props.hideDropdownWhenContainerMoves && this.container && this.containerRect)) {
      let e = this.container.getBoundingClientRect();
      (Math.abs(this.containerRect.left - e.left) > 1 || Math.abs(this.containerRect.top - e.top) > 1) && (this.containerRect = e, this.hideDropdown());
    }
  }
  getDropdownMarginBottom() {
    return this.props.dropdownMarginBottom || 8;
  }
  getDropdownMarginTop() {
    return this.getDropdownMarginBottom() + getThemePx();
  }
  positionForFormattedValue(e) {
    let t = 0;
    let i = 0;
    if (this.props.neverConstrain && (i = this.state.topPositionOffsetForNeverConstrain || 0), this.props.openBelowTarget) return -i;
    if (this.containerRect) {
      let i = this.heightForFormattedValue(e);
      t = (this.containerRect.height - i) / 2;
    }
    return e !== this.props.customMixedText && e !== $() && e in this.optionIndexByFormattedValue ? this.childPositionByIndex[this.optionIndexByFormattedValue[e]] - t - i : 8 - t;
  }
  heightForFormattedValue(e) {
    let t = this.optionIndexByFormattedValue[e];
    return this.optionHeightByIndex[t];
  }
  scrollTopForValueOverInput(e, t) {
    return Math.max(this.positionForFormattedValue(t) + e, 0);
  }
  scrollValueOverInput(e) {
    if (!this.dropdownEl || !this.containerRect || void 0 === this.state.dropdownScreenTop) return;
    let t = this.scrollTopForValueOverInput(this.state.dropdownScreenTop - this.containerRect.top, e);
    let {
      dropdownScreenTop
    } = this.state;
    if (t > 0) {
      let n = this.positionForFormattedValue(e) - t;
      if (n < 16) {
        let e = 16 - n;
        t -= e;
        i -= e;
      }
    }
    this.dropdownEl.scrollTop = t;
    this.setState({
      dropdownScrollTop: t,
      dropdownScreenTop
    });
  }
  scrollValueIntoView(e) {
    if (!this.dropdownEl || void 0 === this.state.dropdownHeight || this.dropdownContentHeight <= this.state.dropdownHeight) return;
    let t = this.dropdownEl.scrollTop;
    let i = this.dropdownEl.scrollTop + this.dropdownEl.offsetHeight;
    let n = this.positionForFormattedValue(e);
    let r = this.heightForFormattedValue(e);
    let a = 0;
    if (this.containerRect && (a = (this.containerRect.height - r) / 2), n < t + 16) {
      let e = n + -(r - 16 + a);
      this.dropdownEl.scrollTop = e;
      this.setState({
        dropdownScrollTop: e
      });
    } else if (n + r > i - 16) {
      let e = 16 + a;
      let t = n - this.dropdownEl.offsetHeight + r + e;
      this.dropdownEl.scrollTop = t;
      this.setState({
        dropdownScrollTop: t
      });
    }
  }
  resetUserInput() {
    this.lastInputAt = 0;
    this.userInput = "";
  }
  renderInput() {
    return this.props.renderInput ? this.props.renderInput({
      onMouseDown: this.onMouseDown,
      props: this.props
    }) : jsx(X, {
      borderless: this.props.borderless,
      chevronClassName: this.props.chevronClassName,
      chitPaint: this.props.chitPaint,
      customMixedText: this.props.customMixedText,
      dataTestId: this.props.inputDataTestId,
      dropdownOverride: this.props.dropdownOverride,
      fauxFocus: this.props.fauxFocus,
      fill: this.props.fill,
      formatter: this.props.formatter,
      icon: this.props.icon,
      iconClassName: this.props.iconClassName,
      inputClassName: this.props.inputClassName,
      inputWidth: this.props.inputWidth,
      isDisabled: this.isDisabled(),
      isHoveredOverScrubbableComboboxControl: this.props.isHoveredOverScrubbableComboboxControl,
      onChitMouseDown: this.props.onChitMouseDown,
      onMouseDown: this.onMouseDown,
      onMouseEnter: this.props.onMouseEnterFakeSelect,
      onMouseLeave: this.props.onMouseLeaveFakeSelect,
      property: this.props.property,
      rightIcon: this.props.rightIcon,
      showChit: this.props.showChit,
      textAlign: this.props.textAlign,
      textRef: this.props.inputTextRef,
      truncation: this.props.truncation
    });
  }
  render() {
    let e = h()(this.props.className, kL);
    let t = this.props.role ?? "listbox";
    let i = this.props.tooltip ? {
      "data-tooltip": this.props.tooltip,
      "data-tooltip-type": KindEnum.TEXT
    } : {};
    if (this.isDisabled()) {
      return jsx("div", {
        "className": e,
        "data-testid": this.props.dataTestId,
        "data-onboarding-key": this.props.dataOnboardingKey,
        "onMouseEnter": this.props.onMouseEnter,
        "onMouseLeave": this.props.onMouseLeave,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "role": t,
        "aria-disabled": !0,
        ...i,
        "children": this.renderInput()
      });
    }
    let s = [];
    if (this.dropdownShown()) {
      let e = 0;
      s = Children.map(this.props.children, t => {
        let i = this.cloneChildForRender(t, e, this.dropdownListboxId);
        t && e++;
        return i;
      }) || [];
      (this.props.property === MIXED_MARKER || this.state.previousPreviewValue === MIXED_MARKER) && (Children.count(this.props.children) !== 0 && s.unshift(jsx($$ea3, {
        style: {
          top: 32
        }
      }, "mixed-divider")), s.unshift(jsx($$en1, {
        selected: !0,
        formattedValue: this.props.customMixedText || $(),
        disabled: !0,
        style: {
          top: 8
        }
      }, "select-option-mixed")));
    }
    let o = this.state.dropdownScrollTop || 0;
    let l = void 0 !== this.state.dropdownHeight && o + this.state.dropdownHeight < this.dropdownContentHeight;
    let d = jsx("div", {
      className: `${P2} ${this.props.dropdownClassName || ""}`,
      style: {
        top: (this.state.dropdownScreenTop ?? 0) + (this.props.openBelowTarget && this.containerRect ? this.containerRect.height : 0),
        height: this.state.dropdownHeight,
        left: this.state.dropdownScreenLeft,
        right: this.state.dropdownScreenRight,
        width: typeof this.props.dropdownWidth == "function" ? this.state.dropdownWidth && this.props.dropdownWidth(this.state.dropdownWidth) : this.props.dropdownWidth != null ? this.props.dropdownWidth : this.state.dropdownWidth
      },
      children: jsxs("div", {
        className: x1,
        children: [jsx(Y, {
          className: Wm,
          dropdownRef: this.dropdownRef,
          dispatch: this.props.dispatch,
          onScroll: this.onScroll,
          onKeyDown: this.onKeyDown,
          children: jsx("div", {
            "className": QF,
            "style": {
              height: this.dropdownContentHeight,
              minHeight: this.dropdownContentHeight
            },
            "onMouseLeave": () => this.updateFocusedValue(null),
            "role": "group",
            "tabIndex": -1,
            "id": this.dropdownListboxId,
            "data-testid": "select-dropdown-content",
            "children": s
          })
        }), jsx(es, {
          showTopIndicator: o > 0,
          showBottomIndicator: l,
          onScroll: this.onScroll
        })]
      })
    });
    let c = this.state.focusedOptionValue == null ? "" : this.props.formatter.format(this.state.focusedOptionValue);
    let u = t === "combobox" ? this.dropdownShown() : void 0;
    let p = this.optionIndexByFormattedValue[c];
    return jsxs("div", {
      "className": e,
      "ref": this.containerRef,
      "onClick": stopPropagation,
      "onMouseDown": this.props.onMouseDown,
      "onMouseEnter": this.props.onMouseEnter,
      "onMouseLeave": this.props.onMouseLeave,
      "data-testid": this.props.dataTestId,
      "data-onboarding-key": this.props.dataOnboardingKey,
      ...i,
      "children": [jsx("div", {
        "ref": this.hiddenInputRef,
        "aria-activedescendant": u ? `${this.dropdownListboxId}-${p}` : void 0,
        "aria-controls": this.dropdownShown() ? this.dropdownListboxId : void 0,
        "aria-expanded": u,
        "aria-label": this.props.ariaLabel,
        "aria-labelledby": this.props.ariaLabelledBy,
        "aria-owns": this.dropdownShown() ? this.dropdownListboxId : void 0,
        "className": h()(hH, UY),
        "onBlur": this.onBlur,
        "onFocus": this.onFocus,
        "onKeyDown": this.onKeyDown,
        "role": t,
        "tabIndex": this.props.disableSelectFocus ? -1 : 0
      }), this.renderInput(), !this.props.targetDomNode && this.dropdownShown() && d, this.props.targetDomNode && this.dropdownShown() && createPortal(d, this.props.targetDomNode)]
    });
  }
}
function ei({
  ignoreCheck: e,
  iconToReplaceCheck: t,
  rightCheck: i,
  selected: r,
  checkSvg: a,
  icon: s
}) {
  return jsxs(Fragment, {
    children: [!e && !t && !i && (r ? jsx(SvgComponent, {
      className: z6,
      svg: a || _$$A3
    }) : jsx("span", {
      className: z6
    })), !!t && jsx("div", {
      className: Df,
      children: t
    }), !t && s]
  });
}
et.displayName = "Select";
et.propTypes = {
  children: (e, t, i) => {
    let n = e[t];
    let a = null;
    Children.forEach(n, e => {
      e == null || e.type && e.type.__IS_VALID_SELECT_CHILD__ || (a = new Error(`${i} children should be of type 'Option' or 'SelectDivider'`));
    });
    return a;
  }
};
export class $$en1 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => {
      if (!this.props.onMouseUp) return SKIP_RECORDING;
      this.props.onMouseUp(e);
    });
    this.onMouseMove = handleMouseEvent(this, "mousemove", e => {
      if (!this.props.onMouseMove) return SKIP_RECORDING;
      this.props.onMouseMove(e);
    });
  }
  render() {
    let e;
    e = this.props.disabled ? IZ : this.props.focused ? BI : this.props.isHeader ? l8 : uK;
    this.props.fullWidth && (e += ` ${fE}`);
    let t = {
      ...(this.props.style || {}),
      height: this.props.height || 24
    };
    return jsxs("div", {
      "ref": this.props.forwardedRef,
      "aria-disabled": this.props.disabled,
      "aria-label": this.props.ariaLabel ?? this.props.formattedValue,
      "aria-selected": this.props.selected,
      "className": `${e} ${this.props.additionalStylesClassName ?? ""}`,
      "data-dropdown-tooltip": this.props.tooltip,
      "data-testid": this.props.dataTestId,
      "data-tooltip-bottom-flip-margin": this.props["data-tooltip-bottom-flip-margin"],
      "data-tooltip-max-width": this.props["data-tooltip-max-width"],
      "data-tooltip-offset-x": this.props["data-tooltip-offset-x"],
      "data-tooltip-offset-y": this.props["data-tooltip-offset-y"],
      "data-tooltip-show-above": this.props["data-tooltip-show-above"],
      "data-tooltip-show-below": this.props["data-tooltip-show-below"],
      "data-tooltip-show-immediately": this.props["data-tooltip-show-immediately"],
      "data-tooltip-show-left": this.props["data-tooltip-show-left"],
      "data-tooltip-show-right": this.props["data-tooltip-show-right"],
      "data-tooltip-type": this.props.tooltipType,
      "id": this.props.id,
      "onMouseEnter": this.props.onMouseEnter,
      "onMouseLeave": this.props.onMouseLeave,
      "onMouseMove": this.onMouseMove,
      "onMouseUp": this.onMouseUp,
      "role": "option",
      "style": t,
      "tabIndex": -1,
      "children": [jsx(OverridableComponent, {
        ...this.props,
        originalComponent: ei,
        overrideKey: "leftCheckIcon"
      }), this.props.svg && jsx(MediaQuerySvgComponent, {
        className: H9,
        svg: this.props.svg,
        fallbackSvg: this.props.fallbackSvg
      }), this.props.children || !this.props.truncateInMiddle ? jsx("span", {
        className: h()(re, `${this.props.additionalTextStylesClassName ?? ""}`, {
          [Om]: this.props.rightCheck,
          [CU]: this.props.removeTextRightPadding
        }),
        dir: "auto",
        style: {
          textAlign: "left"
        },
        children: this.props.children || this.props.formattedValue
      }) : jsx(_$$R, {
        className: nJ,
        text: this.props.formattedValue || ""
      }), this.props.rightLabel && jsx("span", {
        className: h()(ZM, this.props.rightLabelStyle),
        children: this.props.rightLabel
      }), this.props.rightSettingsIcon, !this.props.ignoreCheck && !this.props.iconToReplaceCheck && this.props.rightCheck && this.props.selected && jsx(SvgComponent, {
        className: JB,
        svg: this.props.checkSvg || _$$A3
      })]
    });
  }
}
$$en1.displayName = "Option";
$$en1.__IS_VALID_SELECT_CHILD__ = !0;
$$en1.__CLASS_NAME__ = "Option";
export class $$er0 extends $$en1 {}
export class $$ea3 extends PureComponent {
  render() {
    return jsx(q, {
      ...this.props,
      className: yF
    });
  }
}
$$ea3.displayName = "SelectDivider";
$$ea3.__IS_VALID_SELECT_CHILD__ = !0;
$$ea3.__CLASS_NAME__ = "SelectDivider";
class es extends PureComponent {
  constructor() {
    super(...arguments);
    this.scrollInterval = void 0;
    this.onMouseEnterIndicator = e => t => {
      this.scrollInterval && clearInterval(this.scrollInterval);
      this.scrollInterval = setInterval(() => {
        this.props.onScroll(void 0, !0, e);
      }, 25);
    };
    this.onMouseLeaveIndicator = e => {
      clearInterval(this.scrollInterval);
    };
    this.onWheelIndicator = e => {
      this.props.onScroll(void 0, !0, e.deltaY);
    };
  }
  componentWillUnmount() {
    clearInterval(this.scrollInterval);
  }
  render() {
    let e = this.props.showTopIndicator ? {} : {
      display: "none"
    };
    let t = this.props.showBottomIndicator ? {} : {
      display: "none"
    };
    return jsxs(Fragment, {
      children: [jsx("div", {
        className: sS,
        style: e,
        onMouseEnter: this.onMouseEnterIndicator(-8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onMouseDown: stopPropagation,
        onClick: stopPropagation,
        onWheel: this.onWheelIndicator,
        children: jsx(SvgComponent, {
          className: w$,
          svg: _$$A2
        })
      }), jsx("div", {
        className: _$$O,
        style: t,
        onMouseEnter: this.onMouseEnterIndicator(8),
        onMouseLeave: this.onMouseLeaveIndicator,
        onMouseDown: stopPropagation,
        onClick: stopPropagation,
        onWheel: this.onWheelIndicator,
        children: jsx(SvgComponent, {
          className: w$,
          svg: _$$A
        })
      })]
    });
  }
}
export const Z0 = $$er0;
export const c$ = $$en1;
export const l6 = $$ee2;
export const sK = $$ea3;
export const tV = OverridesProvider;
export const uQ = $$Q5;