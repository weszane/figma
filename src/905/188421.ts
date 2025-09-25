import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent, Children } from "react";
import a from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { normalizeValue } from "../905/216495";
import { yesNoTrackingEnum } from "../figma_app/198712";
import { ScrubbableControl } from "../905/181535";
import { FormattedInput } from "../905/203369";
import { c$, sK, l6 } from "../905/794875";
import { TokenizableInput } from "../905/45781";
import { r as _$$r } from "../905/211029";
import { be, Wv, kL, Qz, t_, Lt, $$in, f0, d_, hL, hF } from "../figma_app/18327";
var s = a;
let {
  OverridesProvider,
  OverridableComponent
} = _$$r();
export var $$y0 = (e => (e[e.Select = 0] = "Select", e[e.Input = 1] = "Input", e))($$y0 || {});
export class $$b1 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      isMouseOver: !1,
      isFocused: !1,
      previousPreviewValue: this.props.property,
      isMouseOverScrubbableControl: !1,
      isMouseOverSelect: !1
    };
    this.onMouseOver = e => {
      this.props.onMouseEnter?.(e);
      this.setState({
        isMouseOver: !0
      });
    };
    this.onMouseLeave = e => {
      this.props.onMouseLeave?.(e);
      this.setState({
        isMouseOver: !1
      });
    };
    this.onFocus = e => {
      this.setState({
        isFocused: !0
      });
      this.props.onInputFocus?.(e);
    };
    this.onBlur = e => {
      this.setState({
        isFocused: !1
      });
      this.props.onInputBlur?.(e);
    };
    this.onMouseEnterScrubbableControl = () => {
      this.setState({
        isMouseOverScrubbableControl: !0
      });
    };
    this.onMouseLeaveScrubbableControl = () => {
      this.setState({
        isMouseOverScrubbableControl: !1
      });
    };
    this.onMouseEnterSelect = () => {
      this.setState({
        isMouseOverSelect: !0
      });
    };
    this.onMouseLeaveSelect = () => {
      this.setState({
        isMouseOverSelect: !1
      });
    };
  }
  componentDidUpdate(e) {
    this.props.enablePreview && !e.dropdownShown && this.props.dropdownShown?.type === this.props.id && this.setState({
      previousPreviewValue: this.props.property
    });
  }
  areValuesEqual(e, t) {
    return null == e || null == t ? null == e == (null == t) : this.props.formatter.isEqual ? this.props.formatter.isEqual(e, t) : e === t;
  }
  render() {
    let e = normalizeValue((this.props.enablePreview ? this.state.previousPreviewValue : null) ?? this.props.property);
    let t = [];
    let i = !0;
    Children.forEach(this.props.children, t => {
      this.areValuesEqual(t?.props?.value, e) && (i = !1);
    });
    i && e && !this.props.omitValueFromDropdown && (t.push(jsx(c$, {
      value: e,
      dataTestId: `custom-option-${e}`,
      children: this.props.formatter.format(e)
    }, "custom-option")), 0 !== Children.count(this.props.children) && t.push(jsx(sK, {}, "custom-option-divider")));
    let a = be;
    !this.props.disabled && (this.state.isMouseOver || this.state.isFocused) && (a = Wv);
    let g = kL;
    this.props.disabled && (g = Qz);
    let _ = this.props.isTokenizable ? TokenizableInput : FormattedInput;
    let y = e => {
      this.props.disableSelectFocus && "ArrowDown" === e.key && e.metaKey ? (e.preventDefault(), this.props.dispatch(showDropdownThunk({
        type: this.props.id
      }))) : this.props.onKeyDown?.(e);
    };
    return jsxs("div", {
      className: `${g} ${this.props.className || ""}`,
      onMouseDown: this.props.onMouseDown,
      onMouseOver: this.onMouseOver,
      onMouseLeave: this.onMouseLeave,
      onMouseEnter: this.props.onMouseEnterNonPropagating,
      "data-onboarding-key": this.props.onboardingKey,
      onKeyDown: e => {
        this.props.disableSelectFocus && this.props.dropdownShown?.type === this.props.id && "ArrowUp" === e.key && e.metaKey && (this.props.dispatch(hideDropdownAction()), this.props.forwardedRef?.current?.focus(), this.props.forwardedRef?.current?.select());
      },
      children: [jsxs(OverridableComponent, {
        ariaLabel: this.props.ariaLabel,
        chevronClassName: this.props.chevronClassName,
        className: this.props.disabled ? t_ : Lt,
        disableSelectFocus: this.props.disableSelectFocus,
        disabled: this.props.disabled,
        dispatch: this.props.dispatch,
        dropdownAlignment: this.props.dropdownAlignment,
        dropdownClassName: this.props.dropdownClassName,
        dropdownShown: this.props.dropdownShown,
        dropdownWidth: this.props.dropdownWidth,
        enablePreview: this.props.enablePreview && !!this.props.dropdownShown,
        formatter: this.props.formatter,
        icon: this.props.icon,
        iconClassName: this.props.iconClassName,
        id: this.props.id,
        inputClassName: s()(a, this.props.inputClassName, {
          [$$in]: this.props.disableSelectFocus && (this.state.isFocused || this.props.dropdownShown?.type === this.props.id)
        }),
        isHoveredOverScrubbableComboboxControl: this.state.isMouseOverScrubbableControl,
        onChange: (e, t) => {
          this.props.onChange(e, t, 0);
        },
        onDropdownHidden: e => {
          e && this.props.forwardedRef?.current?.focus();
          this.setState({
            previousPreviewValue: void 0
          });
        },
        onMouseEnterFakeSelect: this.onMouseEnterSelect,
        onMouseLeaveFakeSelect: this.onMouseLeaveSelect,
        onOptionFocus: this.props.onOptionFocus,
        openBelowTarget: this.props.openBelowTarget,
        optionsWithDisabledPreviews: this.props.optionsWithDisabledPreviews,
        originalComponent: l6,
        overrideKey: "select",
        property: e,
        recordingKey: generateRecordingKey(this.props, "select"),
        targetDomNode: this.props.targetDomNode,
        willShowDropdown: this.props.willShowDropdown,
        children: [t, this.props.children]
      }), this.props.scrubbableControlProps ? jsx(ScrubbableControl, {
        onMouseEnter: this.onMouseEnterScrubbableControl,
        onMouseLeave: this.onMouseLeaveScrubbableControl,
        ...this.props.scrubbableControlProps,
        className: s()(f0, {
          [d_]: !!this.props.icon && this.props.hasIconStyle,
          [hL]: this.props.disableSelectFocus
        }),
        children: jsx(OverridableComponent, {
          allowEmpty: this.props.allowEmpty,
          ariaLabel: this.props.ariaLabel,
          autoFocus: this.props.autoFocus,
          className: this.props.inputClassName,
          dataOnboardingKey: this.props.inputOnboardingKey,
          dataTestId: this.props.dataTestId,
          disabled: this.props.disabled,
          formatter: this.props.formatter,
          forwardedRef: this.props.forwardedRef,
          id: this.props.id,
          isHoveringOverSelect: this.state.isMouseOverSelect,
          mixedMathHandler: this.props.mixedMathHandler,
          noBorderOnFocus: !0,
          noPlaceholderLine: this.props.noPlaceholderLine,
          onBlur: this.onBlur,
          onChange: (e, t = yesNoTrackingEnum.YES) => {
            this.props.onChange(e, t, 1);
          },
          onFocus: this.onFocus,
          onKeyDown: y,
          onKeyUp: this.props.onKeyUp,
          originalComponent: _,
          overrideKey: "inputComponent",
          placeholder: this.props.placeholder && (this.props.forceInputPlaceholder || !this.props.property) ? this.props.placeholder : void 0,
          property: this.props.forceInputPlaceholder && this.props.placeholder ? "" : this.props.property,
          recordingKey: this.props.unNamespacedInputRecordingKey ? this.props.recordingKey : generateRecordingKey(this.props, "input"),
          shouldUseHoveringFormatterIfCombobox: this.state.isMouseOverScrubbableControl || this.state.isFocused
        })
      }) : jsx(OverridableComponent, {
        ariaLabel: this.props.ariaLabel,
        autoFocus: this.props.autoFocus,
        className: `${hF} ${this.props.icon ? d_ : ""} ${this.props.inputClassName || ""}`,
        dataOnboardingKey: this.props.inputOnboardingKey,
        dataTestId: this.props.dataTestId,
        disabled: this.props.disabled,
        formatter: this.props.formatter,
        forwardedRef: this.props.forwardedRef,
        id: this.props.id,
        onBlur: this.onBlur,
        onChange: (e, t = yesNoTrackingEnum.YES) => {
          this.props.onChange(e, t, 1);
        },
        onFocus: this.onFocus,
        onKeyDown: y,
        onKeyUp: this.props.onKeyUp,
        originalComponent: _,
        overrideKey: "inputComponent",
        placeholder: this.props.forceInputPlaceholder && this.props.placeholder ? this.props.placeholder : void 0,
        property: this.props.forceInputPlaceholder && this.props.placeholder ? "" : this.props.property,
        recordingKey: this.props.unNamespacedInputRecordingKey ? this.props.recordingKey : generateRecordingKey(this.props, "input")
      })]
    });
  }
}
$$b1.defaultProps = {
  hasIconStyle: !0
};
$$b1.displayName = "ComboBox";
$$b1.propTypes = {
  children: (e, t, i) => {
    let n = e[t];
    let a = null;
    Children.forEach(n, e => {
      e.type && e.type.__IS_VALID_SELECT_CHILD__ || (a = Error(`${i} children should be of type 'Option' or 'SelectDivider'`));
    });
    return a;
  }
};
export const G7 = $$y0;
export const a3 = $$b1;
export const ow = OverridesProvider;