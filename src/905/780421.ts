import { jsx, jsxs } from "react/jsx-runtime";
import { PureComponent } from "react";
import { Button } from "../905/521428";
import { parsePxInt } from "../figma_app/783094";
import { _A, W2 } from "../figma_app/814196";
import { Point } from "../905/736624";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideOpenDesktopAppModal } from "../figma_app/91703";
import { fullscreenValue } from "../figma_app/455680";
import { N } from "../figma_app/240060";
import { Xj } from "../905/748636";
import { oVP } from "../figma_app/27776";
let g = parsePxInt(oVP);
export class $$f0 extends PureComponent {
  constructor(e) {
    super(e);
    this.initialPosition = new Point(window.innerWidth / 2 - g / 2, window.innerHeight / 2 - 60);
    this.onClose = () => {
      _A("shown");
      this.props.dispatch(hideOpenDesktopAppModal());
    };
    this.onAlwaysClick = () => {
      _A("shown");
      this.props.dispatch(hideOpenDesktopAppModal());
      N.enableAutoOpen();
      fullscreenValue.showVisualBellLocalized("plugins-added-from-file", "desktop_open_views.open_in_desktop_from_now_on_modal.visual_bell", {}, !1);
    };
  }
  static shouldShowOnce() {
    return void 0 === W2() && !N.isAutoOpenEnabled();
  }
  render() {
    return jsx(Xj, {
      initialPosition: this.initialPosition,
      title: getI18nString("desktop_open_views.open_in_desktop_from_now_on_modal.title"),
      headerSize: "small",
      dragHeaderOnly: !0,
      onClose: this.onClose,
      children: jsxs("div", {
        className: "open_desktop_app_from_now_on_modal--container--ucP3r",
        children: [jsx("div", {
          className: "open_desktop_app_from_now_on_modal--text--BP9St",
          children: renderI18nText("desktop_open_views.open_in_desktop_from_now_on_modal.preferences_message")
        }), jsxs("div", {
          className: "open_desktop_app_from_now_on_modal--buttonRow--gtV4g",
          children: [jsx(Button, {
            variant: "secondary",
            onClick: this.onClose,
            children: renderI18nText("desktop_open_views.modal.dismiss_button")
          }), jsx(Button, {
            onClick: this.onAlwaysClick,
            children: renderI18nText("desktop_open_views.open_in_desktop_from_now_on_modal.always_open_in_app_button")
          })]
        })]
      })
    });
  }
}
$$f0.displayName = "OpenDesktopAppFromNowOnModal";
export const s = $$f0;