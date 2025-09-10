import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { RecordingContext } from "src/905/959312";
import { tf } from "src/figma_app/831799";
import { RecordingPureComponent, handleMouseEvent, SKIP_RECORDING, handlePointerEvent, handleKeyboardEvent, handleGenericEvent, handleChangeEvent, isRecordingEnabled, useRecordingKey, handleEvent } from "src/figma_app/878298";
class l extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.onClick = handleMouseEvent(this, "click", e => this.props.onClick ? this.props.onClick(e) : SKIP_RECORDING);
    this.onContextClick = handleMouseEvent(this, "contextmenu", e => this.props.onContextMenu ? this.props.onContextMenu(e) : SKIP_RECORDING);
    this.onDoubleClick = handleMouseEvent(this, "dblclick", e => this.props.onDoubleClick ? this.props.onDoubleClick(e) : SKIP_RECORDING);
    this.onMouseDown = handleMouseEvent(this, "mousedown", e => this.props.onMouseDown ? this.props.onMouseDown(e) : SKIP_RECORDING);
    this.onMouseUp = handleMouseEvent(this, "mouseup", e => this.props.onMouseUp ? this.props.onMouseUp(e) : SKIP_RECORDING);
    this.onMouseMove = handleMouseEvent(this, "mousemove", e => this.props.onMouseMove ? this.props.onMouseMove(e) : SKIP_RECORDING);
    this.onMouseEnter = handleMouseEvent(this, "mouseenter", e => this.props.onMouseEnter ? this.props.onMouseEnter(e) : SKIP_RECORDING);
    this.onMouseLeave = handleMouseEvent(this, "mouseleave", e => this.props.onMouseLeave ? this.props.onMouseLeave(e) : SKIP_RECORDING);
    this.onPointerDown = handlePointerEvent(this, "pointerdown", e => this.props.onPointerDown ? this.props.onPointerDown(e) : SKIP_RECORDING);
    this.onPointerUp = handlePointerEvent(this, "pointerup", e => this.props.onPointerUp ? this.props.onPointerUp(e) : SKIP_RECORDING);
    this.onPointerMove = handlePointerEvent(this, "pointermove", e => this.props.onPointerMove ? this.props.onPointerMove(e) : SKIP_RECORDING);
    this.onKeyUp = handleKeyboardEvent(this, "keyup", e => this.props.onKeyUp ? this.props.onKeyUp(e) : SKIP_RECORDING);
    this.onKeyDown = handleKeyboardEvent(this, "keydown", e => this.props.onKeyDown ? this.props.onKeyDown(e) : SKIP_RECORDING);
    this.onFocus = handleGenericEvent(this, "focus", e => this.props.onFocus ? this.props.onFocus(e) : SKIP_RECORDING);
    this.onBlur = handleGenericEvent(this, "blur", e => this.props.onBlur ? this.props.onBlur(e) : SKIP_RECORDING);
  }
  render() {
    let {
      recordingKey,
      forwardedRef,
      dataTestId,
      dataOnboardingKey,
      ...r
    } = this.props;
    this.recordingKey() && (this.props.onClick && (r.onClick = this.onClick), this.props.onDoubleClick && (r.onDoubleClick = this.onDoubleClick), this.props.onMouseDown && (r.onMouseDown = this.onMouseDown), this.props.onMouseMove && (r.onMouseMove = this.onMouseMove), this.props.onMouseEnter && (r.onMouseEnter = this.onMouseEnter), this.props.onMouseLeave && (r.onMouseLeave = this.onMouseLeave), this.props.onMouseUp && (r.onMouseUp = this.onMouseUp), this.props.onContextMenu && (r.onContextMenu = this.onContextClick), this.props.onKeyUp && (r.onKeyUp = this.onKeyUp), this.props.onKeyDown && (r.onKeyDown = this.onKeyDown), this.props.onFocus && (r.onFocus = this.onFocus), this.props.onBlur && (r.onBlur = this.onBlur), this.props.onPointerDown && (r.onPointerDown = this.onPointerDown), this.props.onPointerUp && (r.onPointerUp = this.onPointerUp), this.props.onPointerMove && (r.onPointerMove = this.onPointerMove));
    dataTestId && (r["data-testid"] = dataTestId);
    dataOnboardingKey && (r["data-onboarding-key"] = dataOnboardingKey);
    return this.node(r, forwardedRef);
  }
}
export class $$d0 extends l {
  node(e, t) {
    return jsx("div", {
      ...e,
      ref: t
    });
  }
}
$$d0.displayName = "RecordableDiv";
tf($$d0);
export class $$c5 extends l {
  node(e, t) {
    return jsx("span", {
      ...e,
      ref: t
    });
  }
}
$$c5.displayName = "RecordableSpan";
export class $$u1 extends l {
  node(e, t) {
    return jsx("button", {
      ...e,
      ref: t
    });
  }
}
$$u1.displayName = "RecordableButton";
export class $$p3 extends l {
  node(e, t) {
    return jsx("a", {
      ...e,
      ref: t
    });
  }
}
$$p3.displayName = "RecordableA";
export class $$m6 extends l {
  constructor() {
    super(...arguments);
    this.onChange = handleChangeEvent(this, "change", e => this.props.onChange ? this.props.onChange(e) : SKIP_RECORDING);
  }
  node(e, t) {
    return jsx("input", {
      ...e,
      onChange: this.onChange,
      ref: t,
      dir: "auto",
      "data-onboarding-key": this.props.dataOnboardingKey
    });
  }
}
$$m6.displayName = "RecordableInput";
export class $$h4 extends l {
  constructor() {
    super(...arguments);
    this.onChange = handleChangeEvent(this, "change", e => this.props.onChange ? this.props.onChange(e) : SKIP_RECORDING);
  }
  node(e, t) {
    return jsx("textarea", {
      ...e,
      onChange: this.onChange,
      ref: t,
      dir: "auto"
    });
  }
}
export function $$g2({
  children: e
}) {
  let t = useMemo(() => isRecordingEnabled() ? function (e, t) {
    let i = useRecordingKey(t.recordingKey);
    return useMemo(() => {
      if (!e || !t.recordingKey) return e;
      let n = handleEvent(i, t.eventName, t => Array.isArray(t) ? e(...t) : e(t));
      return (...e) => n(e);
    }, [i, t.eventName, e, t.recordingKey]);
  } : null, []);
  return jsx(RecordingContext.Provider, {
    value: t,
    children: e
  });
}
$$h4.displayName = "RecordableTextarea";
export const D8 = $$d0;
export const GG = $$u1;
export const T9 = $$g2;
export const lt = $$p3;
export const mv = $$h4;
export const oj = $$c5;
export const u2 = $$m6;
