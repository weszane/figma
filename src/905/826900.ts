import { jsx } from "react/jsx-runtime";
import { PureComponent } from "react";
import { AI } from "../905/705398";
import { t as _$$t } from "../905/181774";
import { zy } from "../figma_app/915202";
export class $$s1 {
  event;
  shouldPropagate = !0;
  constructor(e) {
    this.event = e;
  }
  accept = () => {
    this.shouldPropagate = !1;
    this.event.stopPropagation();
    this.event.preventDefault();
  };
}
let d = Object.create(null);
let c = 1;
let u = () => `${c++}`;
export class $$p0 extends PureComponent {
  constructor(e) {
    super(e);
    this.unmounting = !1;
    this.el = null;
    this.ref = e => {
      e && (this.el = e);
    };
    this.focus = () => {
      $$h3.setFocusedReceiver(this);
      this.focusDidChange();
      this.unmounting && this.blur();
    };
    this.blur = () => {
      if ($$h3.isParentOfFocusedReceiver(this)) {
        let e = this.getParentReceiver();
        e ? e.focus() : $$h3.setFocusedReceiver(null);
        this.focusDidChange();
      }
    };
    this.hasFocus = () => $$h3.receiverIsReceivingKeyboardEvents(this);
    this.focusDidChange = () => {
      if (!this.unmounting) {
        if (this.props.propagateKeyboardFocus) {
          let e = this.getParentReceiver();
          e && e.focusDidChange();
        } else this.props.forceUpdate && this.props.forceUpdate();
      }
    };
    this.getParentReceiver = () => {
      if (!this.el) return null;
      let e = this.el.parentElement;
      for (; e;) {
        let t = e.getAttribute("data-keyboard-receiver");
        if (null != t) return d[t] ?? null;
        e = e.parentElement;
      }
      return null;
    };
    this.blurSubtreeIfHidden = e => {
      if (!$$h3.isFocusedReceiver(this)) return;
      let t = [];
      let i = !1;
      let n = this.el;
      for (; n;) {
        let r = n.getAttribute("data-keyboard-receiver");
        if (null != r && t.push(r), n === e) {
          i = !0;
          break;
        }
        n = n.parentElement;
      }
      if (i) for (; t.length;) {
        let e = d[t.pop()];
        e?.onHideOrUnmount();
      }
    };
    this.handleKeyboardEvent = e => {
      if (this.props.handleKeyDown && "keydown" === e.event.type && this.props.handleKeyDown(e), e.shouldPropagate) {
        let t = this.getParentReceiver();
        t && t.handleKeyboardEvent(e);
      }
    };
    this.handleClipboardEvent = (e, t) => {
      if (this.props.handleClipboard && this.props.handleClipboard(e, t), e.shouldPropagate) {
        let i = this.getParentReceiver();
        i && i.handleClipboardEvent(e, t);
      }
    };
    this.isInTextInputElement = () => {
      let e = document.activeElement;
      return !!e && (!!AI(e) || !!e.isContentEditable);
    };
    this.bubbleUpClipboardEvent = (e, t) => {
      this.isInTextInputElement() || this.handleClipboardEvent(e, t);
    };
    this.handlePasteEvent = e => {
      let t = new $$s1(e.nativeEvent);
      this.bubbleUpClipboardEvent(t, zy.PASTE);
    };
    this.handleCopyEvent = e => {
      let t = new $$s1(e.nativeEvent);
      this.bubbleUpClipboardEvent(t, zy.COPY);
    };
    this.handleCutEvent = e => {
      let t = new $$s1(e.nativeEvent);
      this.bubbleUpClipboardEvent(t, zy.CUT);
    };
    this.id = u();
    d[this.id] = this;
    e.focusFunctionRef && (e.focusFunctionRef.current = this.focus);
    e.blurFunctionRef && (e.blurFunctionRef.current = this.blur);
    this.onShowOrMount();
  }
  componentWillUnmount() {
    this.onHideOrUnmount();
    delete d[this.id];
  }
  onHideOrUnmount() {
    this.unmounting = !0;
    this.blur();
  }
  onShowOrMount() {
    this.unmounting = !1;
    this.props.focusOnMount && this.focus();
  }
  render() {
    return jsx("div", {
      ref: this.ref,
      "data-keyboard-receiver": this.id,
      style: this.props.style,
      className: this.props.className,
      onCopy: this.handleCopyEvent,
      onCut: this.handleCutEvent,
      onPaste: this.handlePasteEvent,
      "data-non-interactive": !0,
      children: this.props.children
    });
  }
}
export function $$m2(e) {
  for (; e;) {
    if ("none" === e.style.display) return !0;
    e = e.parentElement;
  }
  return !1;
}
$$p0.displayName = "KeyboardReceiver";
export let $$h3 = new class {
  constructor() {
    this.focusedReceiver = null;
    this.customFocusElement = null;
    this.hasFocus = !0;
    this.setCustomFocusElement = e => {
      this.customFocusElement = e;
      this.customFocusElement.addFocusChangedCallback(this.focusChanged);
    };
    this.focusChanged = e => {
      this.hasFocus = e;
      this.focusedReceiver && this.focusedReceiver.focusDidChange();
    };
    this.setFocusedReceiver = e => {
      let t = this.focusedReceiver;
      this.focusedReceiver = e;
      t && t.focusDidChange();
    };
    this.shouldInterceptKeyboardEvent = e => {
      if (!this.customFocusElement?.isFocusElement(e.target) && e.target !== document.body && !_$$t(e.target)) {
        let t = e.target;
        for (; t;) {
          if ("fullscreen-root" === t.id || "curator-portal-target" === t.id) return !1;
          t = t.parentElement;
        }
        return !0;
      }
      let t = new $$s1(e);
      this.dispatchKeyboardEvent(t);
      return !t.shouldPropagate;
    };
    this.shouldInterceptClipboardEvent = (e, t) => {
      if (this.customFocusElement && this.customFocusElement.isFocusElement(e.target) || e.target === document.body) {
        e.preventDefault();
        let i = new $$s1(e);
        this.dispatchClipboardEvent(i, t);
        return !i.shouldPropagate;
      }
      return !1;
    };
    this.dispatchKeyboardEvent = e => {
      if (this.focusedReceiver && $$m2(this.focusedReceiver.el)) {
        console.warn("Detected a hidden focused receiver, ignoring keyboard event");
        return;
      }
      this.focusedReceiver && this.focusedReceiver.handleKeyboardEvent(e);
    };
    this.dispatchClipboardEvent = (e, t) => {
      this.focusedReceiver && this.focusedReceiver.handleClipboardEvent(e, t);
    };
    this.receiverIsReceivingKeyboardEvents = e => {
      if (!this.hasFocus) return !1;
      if (this.focusedReceiver === e) return !0;
      let t = this.focusedReceiver;
      for (; t && t.props.propagateKeyboardFocus;) {
        let i = t.getParentReceiver();
        if (i === e) return !0;
        t = i;
      }
      return !1;
    };
    this.isFocusedReceiver = e => this.focusedReceiver === e;
    this.isParentOfFocusedReceiver = e => {
      let t = this.focusedReceiver;
      for (; t;) {
        if (t === e) return !0;
        t = t.getParentReceiver();
      }
    };
    this.focusSubtreeIfNecessary = e => {
      let t = [e];
      let i = 0;
      for (; i < t.length;) {
        let e = t[i];
        let n = e.getAttribute("data-keyboard-receiver");
        if (n) {
          let e = d[n];
          e?.onShowOrMount();
        }
        if (e.children) for (let i = 0; i < e.children.length; i++) t.push(e.children[i]);
        i++;
      }
    };
    this.blurSubtreeIfNecessary = e => {
      this.focusedReceiver && this.focusedReceiver.blurSubtreeIfHidden(e);
    };
    this.focusedReceiverName = () => {
      if (this.focusedReceiver) return this.focusedReceiver.props.name;
    };
    this.focusCustomCanvasFocusElement = this.focusCustomCanvasFocusElement.bind(this);
  }
  focusCustomCanvasFocusElement() {
    return this.customFocusElement ? this.customFocusElement.focus() : null;
  }
  focusIfUnfocused() {
    let e = document.activeElement;
    !(!document.hasFocus() || !this.customFocusElement || this.customFocusElement.isFocusElement(e)) && (e && e !== document.body || this.customFocusElement.focus());
  }
}();
export const vL = $$p0;
export const pS = $$s1;
export const NB = $$m2;
export const F2 = $$h3;