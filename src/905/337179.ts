import { jsx } from "react/jsx-runtime";
import { Children, isValidElement, createRef } from "react";
import { PluginHelpers } from "../figma_app/763686";
import s from "classnames";
import { KeyCodes } from "../905/63728";
import { RecordingPureComponent, hookForKeyboard, handlePointerEvent, RecordingComponent } from "../figma_app/878298";
var o = s;
var $$c0 = (e => (e.UPWARDS = "upwards", e.DOWNWARDS = "downwards", e))($$c0 || {});
export class $$u2 extends RecordingPureComponent {
  constructor() {
    super(...arguments);
    this.isPointerInTypeaheadView = !0;
    this.getPositionStyle = () => {
      if (this.props.useFixedPosition) {
        let e = this.props.targetRect.left;
        return "downwards" === this.props.direction ? {
          top: this.props.targetRect.bottom,
          left: e
        } : this.props.useWindowAsViewport ? {
          bottom: window.innerHeight - this.props.targetRect.top,
          left: e
        } : PluginHelpers ? {
          bottom: PluginHelpers.getViewportBounds().height - this.props.targetRect.top,
          left: this.props.targetRect.left
        } : {
          top: this.props.targetRect.bottom,
          left: this.props.targetRect.left
        };
      }
      if ("downwards" === this.props.direction) {
        let {
          left,
          bottom
        } = this.props.targetRect;
        return {
          transform: `translate(${left}px, ${bottom}px)`,
          WebkitTransform: `translate(${left}px, ${bottom}px)`
        };
      }
      if ("upwards" === this.props.direction) {
        let {
          left,
          bottom
        } = this.props.positionFromBottom;
        return {
          left,
          bottom
        };
      }
    };
    this.handleKeyDown = hookForKeyboard(this, "keydown", e => {
      if (this.props.shouldNotHandleKeyDown) return;
      let t = !0;
      let i = this.props.typeahead;
      let n = Children.count(this.props.children?.filter(e => isValidElement(e) && e.type === $$p1));
      let a = null;
      if (e.keyCode !== KeyCodes.DOWN_ARROW || e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
        if (e.keyCode !== KeyCodes.UP_ARROW || e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) {
          if ((e.keyCode === KeyCodes.DOWN_ARROW || e.keyCode === KeyCodes.UP_ARROW) && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey)) {
            this.props.onClear();
            return;
          }
        } else a = "suggestions" === this.props.typeahead.type && -1 === i.index ? n - 1 : (n + i.index - 1) % n;
      } else a = (i.index + 1) % n;
      (e.keyCode === KeyCodes.ENTER || e.keyCode === KeyCodes.TAB) && (e.stopPropagation(), e.preventDefault(), a = i.index, "suggestions" === i.type && this.props.trackEvent && this.props.trackEvent("comments_suggestions_picker_selected_item", {
        commentSuggestion: i.suggestedComments[i.index].suggestionsKey,
        commentSuggestionIndex: i.index + 1
      }), this.props.onInsert(), this.props.shouldNotClearOnEnter && (t = !1));
      "suggestions" === this.props.typeahead.type && this.props.isOneLineOfSuggestions && !(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && (e.keyCode === KeyCodes.RIGHT_ARROW ? a = (i.index + 1) % n : e.keyCode === KeyCodes.LEFT_ARROW && (a = (n + i.index - 1) % n));
      null !== a && this.props.dispatchTypeahead({
        ...this.props.typeahead,
        index: a
      });
      e.keyCode === KeyCodes.ESCAPE || "suggestions" !== this.props.typeahead.type && (e.keyCode === KeyCodes.TAB || e.keyCode === KeyCodes.ENTER || e.keyCode === KeyCodes.LEFT_ARROW || e.keyCode === KeyCodes.RIGHT_ARROW) ? setTimeout(() => {
        t && this.props.onClear();
      }, 50) : "suggestions" === this.props.typeahead.type && (e.keyCode === KeyCodes.ENTER || e.keyCode === KeyCodes.TAB) && this.props.dispatchTypeahead(null);
    });
    this.handlePointerUp = handlePointerEvent(this, "pointerup", () => {
      this.holdTimeout && (clearTimeout(this.holdTimeout), this.props.setIsPointerDownInTypeahead?.(!1), this.isPointerInTypeaheadView || this.props.setWasPointerDownInTypeahead?.(!1));
    });
    this.handlePointerDown = handlePointerEvent(this, "pointerdown", e => {
      e.stopPropagation();
      e.preventDefault();
      this.holdTimeout = window.setTimeout(() => {
        this.props.setIsPointerDownInTypeahead?.(!0);
        this.props.setWasPointerDownInTypeahead?.(!0);
      }, 500);
    });
    this.handlePointerEnter = () => this.isPointerInTypeaheadView = !0;
    this.handlePointerLeave = () => this.isPointerInTypeaheadView = !1;
    this.pointerUpHandler = () => {
      this.isPointerInTypeaheadView || this.props.setWasPointerDownInTypeahead?.(!1);
    };
  }
  componentDidMount() {
    super.componentDidMount();
    window.addEventListener("keydown", this.handleKeyDown, {
      capture: !0
    });
    window.addEventListener("pointerup", this.pointerUpHandler);
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    window.removeEventListener("keydown", this.handleKeyDown, {
      capture: !0
    });
    window.removeEventListener("pointerup", this.pointerUpHandler);
  }
  render() {
    let e = jsx("div", {
      "aria-label": this.props.ariaLabel,
      className: o()("typeahead--typeahead--R3Cas", this.props.className, "downwards" === this.props.direction && "typeahead--openDownwards--qftyz"),
      "data-testid": this.props.dataTestId,
      id: this.props.id,
      onKeyDown: this.handleKeyDown,
      onPointerDown: this.handlePointerDown,
      onPointerEnter: this.handlePointerEnter,
      onPointerLeave: this.handlePointerLeave,
      onPointerMove: this.props.onPointerMove,
      onPointerUp: this.handlePointerUp,
      role: "listbox",
      style: {
        ...this.getPositionStyle(),
        width: this.props.width,
        zIndex: this.props.zIndex
      },
      tabIndex: -1,
      children: this.props.children
    });
    return this.props.useFixedPosition ? jsx("div", {
      className: "typeahead--fixedTypeaheadContainer--wzT8k",
      children: e
    }) : e;
  }
}
$$u2.displayName = "TypeaheadView";
export class $$p1 extends RecordingComponent {
  constructor() {
    super(...arguments);
    this.containerRef = createRef();
    this.handlePointerDown = handlePointerEvent(this, "pointerdown", e => this.props.onPointerDown());
    this.handlePointerUp = handlePointerEvent(this, "pointerup", () => this.props.onClick());
  }
  componentDidUpdate(e, t) {
    super.componentDidUpdate(e, t);
    !e.selected && this.props.selected && this.containerRef.current?.scrollIntoView({
      block: "nearest"
    });
  }
  render() {
    let e = this.props.className;
    this.props.selected && (e += " " + this.props.selectedClassName);
    return jsx("div", {
      role: "option",
      tabIndex: -1,
      "aria-selected": this.props.selected,
      className: e,
      onPointerDown: this.handlePointerDown,
      onPointerUp: this.handlePointerUp,
      onPointerOver: this.props.onPointerOver,
      ref: this.containerRef,
      children: this.props.children
    });
  }
}
export function $$m3(e) {
  return {
    ...(e.useFixedPosition ? {
      useFixedPosition: !0,
      targetRect: e.targetRect,
      direction: e.direction
    } : "downwards" === e.direction ? {
      targetRect: e.targetRect,
      direction: "downwards"
    } : {
      positionFromBottom: e.positionFromBottom,
      direction: "upwards"
    }),
    useWindowAsViewport: e.useWindowAsViewport
  };
}
$$p1.displayName = "TypeaheadItem";
export const ri = $$c0;
export const Hn = $$p1;
export const xD = $$u2;
export const f6 = $$m3;
