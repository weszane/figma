import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Y } from "../905/601180";
import { i as _$$i } from "../905/159448";
import { pG } from "../905/54367";
import { Jw } from "../905/118234";
export function $$l0(e) {
  return jsx($$d1, {
    tabs: e.tabs,
    left: e.left,
    center: e.center,
    hideToolBarOnMobile: e.hideToolBarOnMobile,
    centerFullWidth: e.centerFullWidth,
    containerClassName: e.containerClassName || Jw,
    showDividerBeforeTabIndex: e.showDividerBeforeTabIndex
  });
}
export function $$d1(e) {
  return jsxs(Fragment, {
    children: [jsx(_$$i, {
      tabs: e.tabs,
      center: e.center,
      hideToolBarOnMobile: e.hideToolBarOnMobile
    }), jsx(Y, {
      tabs: e.tabs,
      left: e.left,
      center: e.center,
      centerFullWidth: e.centerFullWidth,
      containerClassName: e.containerClassName,
      showDividerBeforeTabIndex: e.showDividerBeforeTabIndex
    })]
  });
}
$$d1.propTypes = {
  tabs: (e, t, r) => {
    let n = e[t];
    if (!n) return null;
    if (n.some(e => e.type.WrappedComponent.name !== pG)) throw Error(`${t} of ${r} must be a list of elements created from calling ToolBarTabContainer`);
    return null;
  }
};
export const W = $$l0;
export const i = $$d1;