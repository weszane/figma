import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { atomStoreManager } from "../figma_app/27355";
import { selectWithShallowEqual } from "../905/103090";
import { BrowserInfo } from "../figma_app/778880";
import { RecordingComponent, SKIP_RECORDING, handleMouseEvent } from "../figma_app/878298";
import { S } from "../figma_app/552746";
import { x } from "../figma_app/859253";
import { oB } from "../905/929976";
import { jD } from "../905/765855";
import { ft, UE } from "../figma_app/753501";
import { y as _$$y } from "../905/320282";
import { selectCurrentFile } from "../figma_app/516028";
import { lM } from "../905/574958";
import { zr } from "../905/129884";
import { aT } from "../figma_app/613182";
import { a8 } from "../figma_app/467440";
import { h0 } from "../figma_app/61403";
import { yA, Qs } from "../figma_app/581520";
class E extends RecordingComponent {
  constructor(e) {
    super(e);
    this.dontHideOnClick = !1;
    this.hideTooltips = e => {
      let t = this.props.reduxState?.tooltip.state === zr.SHOWING;
      let i = !!this.props.reduxState && aT(e, this.props.reduxState);
      t && !i && this.props.dispatch(jD());
    };
    this.dropdownShowing = () => this.props.reduxState && this.props.reduxState.dropdownShown;
    this.hideDropdown = () => {
      this.props.reduxState && this.dropdownShowing() && atomStoreManager.get(a8) !== h0.PLAYING && this.dropdownShowing()?.type !== x && this.props.dispatch(oB());
    };
    this.hideDropdownsIfShowing = e => {
      if (this.hideTooltips(e), !this.dropdownShowing()) return SKIP_RECORDING;
      this.hideDropdown();
    };
    this.hideDropdownsIfShowingForPointerEvent = e => {
      if (ft()) {
        let t = e.target;
        t instanceof Element && !UE(t) && this.hideDropdownsIfShowing(e);
      }
    };
    this.onClick = handleMouseEvent(this, "click", e => {
      if (this.dontHideOnClick) {
        this.dontHideOnClick = !1;
        return;
      }
      this.hideDropdownsIfShowing(e);
    });
    this.onContextMenu = e => {
      e.ctrlKey && BrowserInfo.mac && BrowserInfo.safari && (this.dontHideOnClick = !0);
    };
    this.onDocumentKeyDown = e => {
      27 === e.keyCode && (this.hideDropdown(), this.hideTooltips(e));
    };
    this.onDocumentWheel = e => {
      (e.ctrlKey || e.metaKey) && e.preventDefault();
    };
  }
  componentDidMount() {
    let e = !!BrowserInfo.safari;
    super.componentDidMount();
    window.addEventListener("blur", this.hideDropdownsIfShowing);
    document.addEventListener("keydown", this.onDocumentKeyDown);
    document.addEventListener("wheel", this.onDocumentWheel, {
      passive: e
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    window.removeEventListener("blur", this.hideDropdownsIfShowing);
    document.removeEventListener("keydown", this.onDocumentKeyDown);
    document.removeEventListener("wheel", this.onDocumentWheel);
  }
  render() {
    return jsx(S.div, {
      ref: this.props.containerRef,
      className: yA,
      onClick: this.onClick,
      onMouseDown: this.hideDropdownsIfShowing,
      onContextMenu: this.onContextMenu,
      onPointerDown: this.hideDropdownsIfShowingForPointerEvent,
      children: jsx("div", {
        className: Qs,
        children: this.props.children
      })
    });
  }
}
export function $$x0({
  recordingKey: e,
  children: t,
  containerRef: i
}) {
  let s = useDispatch();
  let l = selectWithShallowEqual(e => ({
    tooltip: e.tooltip,
    dropdownShown: e.dropdownShown,
    selectedView: {
      view: e.selectedView.view,
      editorType: "fullscreen" === e.selectedView.view ? e.selectedView.editorType : void 0
    }
  }));
  let d = selectCurrentFile();
  let c = useRef(!1);
  useEffect(() => {
    d?.key && !c.current && (c.current = !0, _$$y.startTimer(d.key, lM()));
  }, [d?.key]);
  return jsx(E, {
    recordingKey: e,
    reduxState: l,
    dispatch: s,
    containerRef: i,
    children: t
  });
}
E.displayName = "InAppPage";
export const K = $$x0;