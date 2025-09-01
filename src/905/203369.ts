import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PureComponent, createRef } from "react";
import { cZ } from "../figma_app/272902";
import s from "classnames";
import { Uz, sC, xH } from "../905/63728";
import { By } from "../905/777187";
import { Ay } from "../figma_app/778880";
import { aH } from "../figma_app/806412";
import { s as _$$s } from "../cssbuilder/589278";
import { t } from "../905/303541";
import { _L, mb, ql } from "../905/668764";
import { LS } from "../figma_app/975811";
import { jr, W0 } from "../figma_app/896988";
import { hS, _W, gl, E7 } from "../905/216495";
import { zk } from "../figma_app/198712";
import { jT } from "../figma_app/626177";
import { p as _$$p } from "../905/427409";
import { P, J } from "../figma_app/120873";
var o = s;
export class $$I3 extends PureComponent {
  constructor() {
    super(...arguments);
    this.previousContext = null;
    this.inputRef = createRef();
    this.didIncrement = !1;
    this.state = {
      editingValue: null,
      incrementTargets: null
    };
    this.looksEqual = (e, t) => {
      let i = !hS(e);
      return !hS(t) === i && (!!i || (this.props.formatter.isEqual ? this.props.formatter.isEqual(e, t) : this.props.formatter.format(e) === this.props.formatter.format(t)));
    };
    this.selectAll = () => {
      let e = this.inputRef.current;
      if (hS(this.props.property) && this.props.formatter.defaultSelection) {
        let t = this.props.formatter.defaultSelection(e.value);
        e.setSelectionRange(t.start, t.end);
      } else e.select();
      this.needToSelectAll = !1;
    };
    this.needToSelectAll = !1;
    this.onFocus = e => {
      this.needToSelectAll = !0;
      this.props.shouldClearOnFocus && this.setState({
        editingValue: ""
      });
      this.props.onFocus && this.props.onFocus(e);
    };
    this.onBlur = e => {
      this.props.onBlur?.(e);
      let t = this.props.property;
      let i = this.inputRef.current?.value;
      if (null == i || null == this.state.editingValue) return;
      this.setState({
        editingValue: null
      });
      let n = e => {
        let t = this.props.formatter.parse(i, _W(e, void 0));
        return this.props.formatter.clamp?.(t) ?? t;
      };
      try {
        let e = n(t);
        null !== t && this.looksEqual(e, t) || this.props.onChange(e);
      } catch (r) {
        if (r instanceof LS) {
          if (r.errorType === By.SYNTAX_EMPTY && this.props.allowEmpty) this.props.onChange(null);else if (r.errorType === By.EVAL_NO_CURRENT_VALUE && gl(t)) {
            if (this.props.mixedMathHandler) {
              let e = this.props.mixedMathHandler.getValue();
              this.props.mixedMathHandler.onChange(e, n, zk.YES);
            } else this.props.mixedMathCallback && this.props.mixedMathCallback(i);
          }
        }
        let e = this.props.formatter.onParseThrow?.(r, i);
        null != e && this.props.onChange(e);
      }
    };
    this.onChange = e => {
      this.setState({
        editingValue: e.target.value.toString()
      });
    };
    this.onKeyDown = e => {
      if (jr(e, this.shouldForwardUndo()) || (this.props.onKeyDown?.(e), e.defaultPrevented)) return;
      this.didIncrement = !1;
      let t = this.inputRef.current;
      if (e.keyCode === Uz.ESCAPE) {
        this.setState({
          editingValue: null
        });
        setTimeout(() => t.blur(), 0);
        e.preventDefault();
      } else if (e.keyCode === Uz.ENTER) {
        t.blur();
        e.preventDefault();
        return aH;
      } else if (e.keyCode === Uz.UP_ARROW || e.keyCode === Uz.DOWN_ARROW) {
        if (this.context?.boundVariableId || (e.preventDefault(), !this.props.formatter.incrementBy)) return;
        let i = this.props.property;
        try {
          i = this.props.formatter.parse(t.value || (this.props.placeholder ?? ""), E7(this.props.property) ?? void 0);
        } catch (e) {}
        if (null == i && !this.props.allowEmpty) return;
        if (hS(i)) {
          let n = _L(this.props.formatter, t);
          let r = e.shiftKey;
          let a = e.keyCode === Uz.DOWN_ARROW ? -1 : 1;
          let s = mb(this.props.formatter, r, i);
          let o = ql(this.props.formatter, i, s * a, {
            incrementTargets: n
          });
          this.setState({
            editingValue: null,
            incrementTargets: n
          });
          this.looksEqual(i, o) || (this.props.onChange(o), this.didIncrement = !0);
        } else if (this.props.mixedMathHandler) {
          if (null == this.inputRef.current?.value) return;
          let t = this.props.mixedMathHandler.getValue();
          this.props.mixedMathHandler.onChange(t, t => {
            let i = e.keyCode === Uz.DOWN_ARROW ? -1 : 1;
            let n = e.shiftKey;
            let r = mb(this.props.formatter, n, t);
            return ql(this.props.formatter, t, r * i);
          }, zk.YES);
          this.props.onMixedMathNudge?.(e);
        }
        this.props.onNudge?.(e);
      } else if (this.shouldHandleVariables() && "=" === e.key) {
        e.preventDefault();
        let t = this.inputRef.current?.closest("label") ?? this.inputRef.current ?? null;
        if (!t) return;
        this.context?.showBindingUI(t, {
          currentFieldValue: this.props.property
        });
      } else if (e.keyCode !== Uz.TAB) return aH;
    };
    this.onKeyUp = e => {
      if (jr(e, this.shouldForwardUndo())) return aH;
      this.props.onKeyUp?.(e);
      let t = this.inputRef.current;
      if (!this.props.formatter.autocomplete) return aH;
      {
        let i = t.value;
        let n = i.length > 0 && t.selectionStart === i.length && t.selectionEnd === i.length;
        let r = e.key && 1 === e.key.length;
        let a = 32 === e.keyCode || e.keyCode >= 65 && e.keyCode <= 90;
        if (n && (r || a) && sC(e, xH.SHIFT)) {
          let e = this.props.formatter.autocomplete(i);
          null !== e && (t.value = e, t.setSelectionRange(i.length, e.length));
        }
      }
    };
    this.onMouseUp = e => {
      let t = this.inputRef.current;
      if (!this.state.editingValue && gl(this.props.property) && t.select?.(), !this.needToSelectAll) return aH;
      t.selectionStart === t.selectionEnd && this.selectAll();
      this.needToSelectAll = !1;
    };
    this.onMouseLeave = e => {
      this.needToSelectAll && (this.needToSelectAll = !1);
    };
    this.shouldHandleVariables = () => !!(!this.props.variablesDisabled && this.context);
    this.onClick = e => {
      if (this.props.onClick?.(e), this.shouldHandleVariables() && this.context?.boundVariableId) {
        let e = this.inputRef.current;
        e.blur();
        this.context?.showBindingUI(e.closest("label"), {
          currentFieldValue: this.props.property
        });
      }
    };
  }
  componentDidMount() {
    let e = this.inputRef.current;
    this.props.autoFocus && (e.select(), Ay.safari && e.focus());
  }
  getSnapshotBeforeUpdate(e, t) {
    if (e.property === this.props.property) return !1;
    let i = this.inputRef.current;
    if (null == i || i !== document.activeElement) return !1;
    let {
      selectionStart,
      selectionEnd,
      value
    } = i;
    return "number" == typeof selectionEnd && "number" == typeof selectionStart && selectionEnd > 0 && selectionEnd - selectionStart === value.length;
  }
  componentDidUpdate(e, t, i) {
    e.source !== this.props.source && this.setState({
      editingValue: null
    });
    let n = this.inputRef.current;
    if (this.didIncrement && e.property !== this.props.property) {
      if (this.didIncrement = !1, this.state.incrementTargets && this.props.formatter.getSelection) {
        let {
          start,
          end
        } = this.props.formatter.getSelection(n.value, this.state.incrementTargets);
        n.setSelectionRange(start, end);
      } else this.selectAll();
    } else i && n === document.activeElement && n.select();
    let r = this.context;
    let a = this.previousContext;
    a?.boundVariableId !== r?.boundVariableId && r?.boundVariableId && this.inputRef?.current && this.setState({
      editingValue: null
    });
    this.previousContext = this.context;
  }
  shouldForwardUndo() {
    if (null === this.state.editingValue) return W0.YES;
    if (hS(this.props.property)) {
      let e = null == this.props.property ? "" : this.props.formatter.format(this.props.property);
      return this.state.editingValue === e ? W0.YES : W0.NO;
    }
    return W0.YES;
  }
  valueForRender() {
    return null !== this.state.editingValue ? this.state.editingValue : hS(this.props.property) ? null == this.props.property ? "" : this.props.formatter.format(this.props.property) : t("fullscreen.mixed");
  }
  renderVariablePill() {
    if (!this.shouldHandleVariables()) return null;
    let e = this.valueForRender();
    return this.context?.boundVariableId && e ? jsx(P, {
      value: e,
      variableId: this.context.boundVariableId ?? void 0,
      colorTheme: this.context.isBoundVariableDeleted ? J.DISABLED_TERTIARY : J.DEFAULT,
      isDeleted: !1,
      offsetLeft: this.props.noLeftBorder || this.props.squareRightBorder ? 1 : -7,
      offsetTop: -11,
      zeroSizeLayout: !0
    }) : null;
  }
  focus(e) {
    this.inputRef.current?.focus(e);
  }
  render() {
    return jsxs(Fragment, {
      children: [this.renderVariablePill(), jsx(jT, {
        ref: e => {
          this.inputRef.current = e;
          cZ(this.props.forwardedRef, e);
        },
        "aria-description": this.props.ariaDescription,
        "aria-label": this.props.ariaLabel,
        autoFocus: !Ay.safari && this.props.autoFocus,
        className: o()({
          [_$$s.ellipsis.$]: this.props.ellipsis
        }, this.props.className),
        dataOnboardingKey: this.props.dataOnboardingKey,
        dataTestId: this.props.dataTestId,
        disabled: this.props.disabled,
        id: this.props.id,
        name: this.props.name,
        noBorderOnFocus: this.props.noBorderOnFocus,
        noLeftBorder: this.props.noLeftBorder,
        noPlaceholderLine: this.props.noPlaceholderLine,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onClick: this.onClick,
        onFocus: this.onFocus,
        onKeyDown: this.onKeyDown,
        onKeyUp: this.onKeyUp,
        onMouseDown: this.props.onMouseDown,
        onMouseLeave: this.onMouseLeave,
        onMouseUp: this.onMouseUp,
        onPaste: this.props.onPaste,
        placeholder: this.props.placeholder,
        recordingKey: this.props.recordingKey,
        size: this.props.size,
        softDisabled: this.props.softDisabled,
        squareRightBorder: this.props.squareRightBorder,
        style: this.props.style,
        tabIndex: this.props.tabIndex,
        value: this.valueForRender()
      })]
    });
  }
}
$$I3.displayName = "FormattedInput";
$$I3.contextType = _$$p;
export class $$E1 extends $$I3 {}
export class $$x2 extends $$I3 {}
export class $$S0 extends $$I3 {}
export const AN = $$S0;
export const Q7 = $$E1;
export const nA = $$x2;
export const p_ = $$I3;