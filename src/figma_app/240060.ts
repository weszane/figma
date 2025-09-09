import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, PureComponent } from "react";
import { $n } from "../905/521428";
import { parsePxInt } from "../figma_app/783094";
import { Sr, B3 } from "../905/535224";
import { hW, vn, _p } from "../figma_app/814196";
import { Point } from "../905/736624";
import { tB, JU } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { Z1 } from "../figma_app/91703";
import { Yk } from "../figma_app/644079";
import { VisibilityOption } from "../figma_app/175992";
import { Ao } from "../905/748636";
import { oVP } from "../figma_app/27776";
import { k, K } from "../905/542574";
let E = parsePxInt(oVP);
export function $$y1(e) {
  let t = Yk();
  let r = useMemo(() => new Point(window.innerWidth / 2 - E / 2, window.innerHeight - (t > 0 ? 120 + t : 150)), [t]);
  return jsx($$b0, {
    initialPosition: r,
    ...e
  });
}
export class $$b0 extends PureComponent {
  constructor(e) {
    super(e);
    this.onClose = () => {
      this.props.dispatch(Z1());
      hW(VisibilityOption.NEVER);
    };
    this.onClickOpenInApp = () => {
      this.props.dispatch(Z1());
      hW(this.state.alwaysChecked ? VisibilityOption.ALWAYS : VisibilityOption.NEVER);
      Sr(location.href, B3.OPEN_IN_DESKTOP_MODAL);
    };
    this.onClickAlwaysOpenDesktopApp = () => {
      this.setState({
        alwaysChecked: !this.state.alwaysChecked
      });
    };
    this.state = {
      alwaysChecked: vn() !== VisibilityOption.NEVER
    };
  }
  static shouldShowOnce() {
    return _p() && void 0 === vn();
  }
  static shouldAutoOpen() {
    return _p() && vn() === VisibilityOption.ALWAYS;
  }
  static toggleAutoOpen() {
    let e = vn() === VisibilityOption.ALWAYS;
    hW(e ? VisibilityOption.NEVER : VisibilityOption.ALWAYS);
  }
  static isAutoOpenEnabled() {
    return vn() === VisibilityOption.ALWAYS;
  }
  static enableAutoOpen() {
    hW(VisibilityOption.ALWAYS);
  }
  static disableAutoOpenIfUnset() {
    void 0 === vn() && hW(VisibilityOption.NEVER);
  }
  render() {
    return jsx(Ao, {
      initialPosition: this.props.initialPosition,
      title: getI18nString("desktop_open_views.open_in_desktop_modal.title"),
      headerSize: "small",
      dragHeaderOnly: !0,
      onClose: this.onClose,
      children: jsxs("div", {
        className: k,
        children: [jsxs("div", {
          className: K,
          children: [jsx(tB, {
            id: "always-open-desktop-app",
            checked: this.state.alwaysChecked,
            onClick: this.onClickAlwaysOpenDesktopApp
          }), jsx(JU, {
            htmlFor: "always-open-desktop-app",
            children: renderI18nText("desktop_open_views.open_in_desktop_modal.always_open_in_app_checkbox")
          })]
        }), jsxs("div", {
          className: K,
          children: [jsx($n, {
            variant: "secondary",
            onClick: this.onClose,
            children: renderI18nText("desktop_open_views.modal.dismiss_button")
          }), jsx($n, {
            variant: "primary",
            onClick: this.onClickOpenInApp,
            children: renderI18nText("desktop_open_views.open_in_desktop_modal.open_in_app_button")
          })]
        })]
      })
    });
  }
}
$$b0.displayName = "OpenDesktopAppModal";
export const N = $$b0;
export const g = $$y1;