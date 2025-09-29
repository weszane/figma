import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { createRef, Children, cloneElement, PureComponent } from "react";
import a from "classnames";
import { KeyCodes } from "../905/63728";
import { RecordingPureComponent, handleGenericEvent, hookForKeyboard, generateRecordingKey } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { MediaQuerySvgComponent } from "../905/331623";
import { normalizeValue } from "../905/216495";
import { KindEnum } from "../905/129884";
import { En } from "../figma_app/613182";
var s = a;
let h = "segmented_control--ui3FullWidth--PX8yl";
class g extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.hiddenInputRef = createRef();
    this.onChange = (e, t) => {
      this.props.property !== e && this.props.onChange(e, t);
    };
    this.onSelect = (e, t, i) => {
      i.stopPropagation();
      let n = void 0 !== t && i.altKey;
      this.onChange(n ? t : e, n);
    };
    this.onUnselect = e => {
      e.stopPropagation();
      null != this.props.unselectValue && this.onChange(this.props.unselectValue, !1);
    };
    this.selectValueWithOffset = e => {
      let t;
      let i = Children.map(this.props.children || [], e => e.props.value) || [];
      let n = i.indexOf(normalizeValue(this.props.property));
      t = -1 !== n ? ((t = n + e) + i.length) % i.length : e > 0 ? 0 : i.length - 1;
      this.onChange(i[t], !1);
    };
    this.onFocus = handleGenericEvent(this, "focus", e => {
      this.props.onFocus?.(e);
    });
    this.onKeyDown = hookForKeyboard(this, "keydown", e => {
      if (!this.props.disabled) switch (e.keyCode) {
        case KeyCodes.ENTER:
        case KeyCodes.RIGHT_ARROW:
        case KeyCodes.DOWN_ARROW:
        case KeyCodes.SPACE:
          this.selectValueWithOffset(1);
          e.stopPropagation();
          e.preventDefault();
          break;
        case KeyCodes.UP_ARROW:
        case KeyCodes.LEFT_ARROW:
          this.selectValueWithOffset(-1);
          e.stopPropagation();
          e.preventDefault();
          break;
        case KeyCodes.ESCAPE:
          this.hiddenInputRef.current && this.hiddenInputRef.current.blur();
      }
    });
  }
  render() {
    let e = Children.map(this.props.children, e => {
      if (!1 === e || null === e) return null;
      let t = this.props.property === e.props.value;
      let i = this.props.disabled ? null : null != this.props.unselectValue && t ? this.onUnselect : this.onSelect.bind(this, e.props.value, e.props.altValue);
      let n = e.props.recordingKey || generateRecordingKey(this.props, `${e.props.value}`);
      return cloneElement(e, {
        selected: t,
        onMouseDown: i,
        recordingKey: n
      });
    });
    let t = s()(this.props.className, "segmented_control--container--55Y4i", {
      "segmented_control--containerDisabled--hWYq7": this.props.disabled,
      [h]: !this.props.hugContentsIfUI3
    });
    return jsxs(Fragment, {
      children: [jsx("input", {
        ref: this.hiddenInputRef,
        className: "segmented_control--hiddenInput--azKuY raw_components--selectHiddenInput--bJ8vl",
        onKeyDown: this.onKeyDown,
        onFocus: this.onFocus,
        disabled: this.props.disabled
      }), jsx("div", {
        className: t,
        children: jsx("div", {
          className: s()("segmented_control--inner--8FNXc", {
            [h]: !this.props.hugContentsIfUI3
          }),
          children: e
        })
      })]
    });
  }
}
g.displayName = "SegmentedControl";
g.propTypes = {
  children: (e, t, i) => {
    let n = e[t];
    let a = null;
    Children.forEach(n, e => {
      if (!1 === e || null === e) return null;
      e.type && e.type.__IS_VALID_SEGMENTED_CONTROL_CHILD__ || (a = Error(`${i} children should be of type 'Segment'`));
    });
    return a;
  }
};
class f extends PureComponent {
  constructor() {
    super(...arguments);
    this.onMouseEnter = () => {
      this.props.mouseHoverHandler && this.props.mouseHoverHandler(this.props.value, "ENTER");
    };
    this.onMouseLeave = () => {
      this.props.mouseHoverHandler && this.props.mouseHoverHandler(this.props.value, "LEAVE");
    };
  }
  render() {
    let e = s()(this.props.className, {
      "segmented_control--segmentSelected--1M2Z8 segmented_control--_segment--XQq-a": this.props.selected,
      "segmented_control--segmentUnselected--3DBsl segmented_control--_segment--XQq-a": !this.props.selected,
      "segmented_control--segmentInactive--OjSUb segmented_control--_segment--XQq-a": this.props.inactive
    });
    let t = KindEnum.TEXT;
    let i = "";
    this.props.tooltip ? i = this.props.tooltip : this.props.tooltipAction && (t = KindEnum.LOOKUP, i = this.props.tooltipAction);
    return jsxs(RecordableDiv, {
      className: e,
      onMouseDown: this.props.inactive ? void 0 : this.props.onMouseDown,
      onMouseEnter: this.props.inactive || !this.props.mouseHoverHandler ? void 0 : this.onMouseEnter,
      onMouseLeave: this.props.inactive || !this.props.mouseHoverHandler ? void 0 : this.onMouseLeave,
      "data-tooltip-type": t,
      "data-tooltip": i,
      "aria-label": En({
        "data-tooltip-type": t,
        "data-tooltip": i
      }),
      "data-tooltip-show-above": this.props.tooltipShowAbove,
      recordingKey: this.props.recordingKey,
      children: [this.props.svg && jsx(MediaQuerySvgComponent, {
        className: "segmented_control--icon--PkdoQ",
        svg: this.props.svg,
        fallbackSvg: this.props.fallbackSvg
      }), !this.props.svg && this.props.children]
    });
  }
}
f.displayName = "Segment";
f.__IS_VALID_SEGMENTED_CONTROL_CHILD__ = !0;
