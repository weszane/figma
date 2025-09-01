import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { g5 } from "../905/959312";
import { tf } from "../figma_app/831799";
import { o6, cZ, aH, Am, C0, Ht, Z7, Fk, cC, fA } from "../figma_app/806412";
class l extends o6 {
  constructor() {
    super(...arguments);
    this.onClick = cZ(this, "click", e => this.props.onClick ? this.props.onClick(e) : aH);
    this.onContextClick = cZ(this, "contextmenu", e => this.props.onContextMenu ? this.props.onContextMenu(e) : aH);
    this.onDoubleClick = cZ(this, "dblclick", e => this.props.onDoubleClick ? this.props.onDoubleClick(e) : aH);
    this.onMouseDown = cZ(this, "mousedown", e => this.props.onMouseDown ? this.props.onMouseDown(e) : aH);
    this.onMouseUp = cZ(this, "mouseup", e => this.props.onMouseUp ? this.props.onMouseUp(e) : aH);
    this.onMouseMove = cZ(this, "mousemove", e => this.props.onMouseMove ? this.props.onMouseMove(e) : aH);
    this.onMouseEnter = cZ(this, "mouseenter", e => this.props.onMouseEnter ? this.props.onMouseEnter(e) : aH);
    this.onMouseLeave = cZ(this, "mouseleave", e => this.props.onMouseLeave ? this.props.onMouseLeave(e) : aH);
    this.onPointerDown = Am(this, "pointerdown", e => this.props.onPointerDown ? this.props.onPointerDown(e) : aH);
    this.onPointerUp = Am(this, "pointerup", e => this.props.onPointerUp ? this.props.onPointerUp(e) : aH);
    this.onPointerMove = Am(this, "pointermove", e => this.props.onPointerMove ? this.props.onPointerMove(e) : aH);
    this.onKeyUp = C0(this, "keyup", e => this.props.onKeyUp ? this.props.onKeyUp(e) : aH);
    this.onKeyDown = C0(this, "keydown", e => this.props.onKeyDown ? this.props.onKeyDown(e) : aH);
    this.onFocus = Ht(this, "focus", e => this.props.onFocus ? this.props.onFocus(e) : aH);
    this.onBlur = Ht(this, "blur", e => this.props.onBlur ? this.props.onBlur(e) : aH);
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
    this.onChange = Z7(this, "change", e => this.props.onChange ? this.props.onChange(e) : aH);
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
    this.onChange = Z7(this, "change", e => this.props.onChange ? this.props.onChange(e) : aH);
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
  let t = useMemo(() => Fk() ? function (e, t) {
    let i = cC(t.recordingKey);
    return useMemo(() => {
      if (!e || !t.recordingKey) return e;
      let n = fA(i, t.eventName, t => Array.isArray(t) ? e(...t) : e(t));
      return (...e) => n(e);
    }, [i, t.eventName, e, t.recordingKey]);
  } : null, []);
  return jsx(g5.Provider, {
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