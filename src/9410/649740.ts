import { jsx, jsxs } from "react/jsx-runtime";
import { createRef } from "react";
import { RecordingPureComponent } from "../figma_app/878298";
import { DropdownContainer } from "../figma_app/236327";
import { RecordingScrollContainer } from "../905/347284";
import { jsFullscreenPreventEventCapture } from "../figma_app/8833";
import { KeyboardReceiver } from "../905/826900";
import { DU } from "../figma_app/575164";
export class $$u0 extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.onKeyDownFromFullscreen = e => {
      e.accept();
      this.props.onKeyDown(e.event);
    };
    this.onContainerClick = e => {
      e.stopPropagation();
    };
  }
  componentDidMount() {
    super.componentDidMount();
    document.addEventListener("keydown", this.props.onKeyDown);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    document.removeEventListener("keydown", this.props.onKeyDown);
  }
  render() {
    let e = {
      left: window.innerWidth / 2 - 200,
      top: window.innerHeight / 8,
      width: 400
    };
    return jsx(KeyboardReceiver, {
      name: this.props.recordingKey || "",
      handleKeyDown: this.onKeyDownFromFullscreen,
      focusOnMount: !0,
      children: jsx(DropdownContainer, {
        className: `${DU} ${jsFullscreenPreventEventCapture}`,
        style: e,
        "data-testid": this.props["data-testid"],
        onClick: this.onContainerClick,
        children: jsx("div", {
          children: this.props.children
        })
      })
    });
  }
}
export class $$p1 extends RecordingPureComponent {
  constructor(e) {
    super(e);
    this.scrollContainerRef = createRef();
  }
  scrollElementAtIndexIntoView(e) {
    if (this.props.resultCount >= 10) {
      let t = this.scrollContainerRef.current.getScrollTop();
      let i = 32 * e;
      let r = 32 * e + 32;
      i < t ? this.scrollContainerRef.current.scrollTo(i) : r > t + 304 && this.scrollContainerRef.current.scrollTo(r - 304);
    }
  }
  render() {
    let e = this.props.resultCount;
    let t = Math.min(Math.max(e, 1), 10);
    return jsxs(RecordingScrollContainer, {
      ref: this.scrollContainerRef,
      width: 400,
      height: 32 * t + (e >= 10 ? -16 : 8),
      hideScrollbar: !0,
      role: this.props.role,
      contentId: this.props.id,
      children: [this.props.children, jsx("div", {
        style: {
          height: 8
        }
      })]
    });
  }
}
export const H = $$u0;
export const h = $$p1;