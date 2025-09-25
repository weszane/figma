import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import s from "classnames";
import { handleAtomEvent } from "../905/502364";
import { getI18nString } from "../905/303541";
import { overlayStateAtom } from "../905/12032";
import { X, Y } from "../figma_app/916469";
import { iN } from "../figma_app/634656";
import { l as _$$l } from "../figma_app/265420";
import { $n } from "../figma_app/439493";
import { cd, ZI } from "../figma_app/650460";
var o = s;
export function $$g2({
  alignment: e,
  children: t,
  onMouseEnter: r,
  onMouseLeave: i,
  innerRef: a
}) {
  return jsx("div", {
    className: o()("dlt_submenu--submenuContainer--M4ufs toolbar--passthruLayout--fN4I1", {
      "dlt_submenu--submenuLeftAligned--ADsMj": "LEFT" === e,
      "dlt_submenu--submenuCenterAligned--ryltJ": "CENTER" === e,
      "dlt_submenu--submenuRightAligned--kUi5D": "RIGHT" === e
    }),
    onMouseEnter: r,
    onMouseLeave: i,
    ref: a,
    children: t
  });
}
export function $$f1({
  isOpen: e,
  children: t,
  fadedOut: r,
  id: s,
  testId: d,
  optimizeForCompactSize: p,
  overflowChildren: h
}) {
  let m = useAtomWithSubscription(overlayStateAtom);
  useEffect(() => {
    e && m && !_$$l.has(m) && handleAtomEvent({
      id: X,
      properties: {
        requester: Y.FigjamDLTSubmenuOpen
      }
    });
  }, [e, m]);
  let g = jsx("div", {
    className: "dlt_submenu--submenuItems--FJHkH",
    children: t
  });
  return jsx("div", {
    className: o()("dlt_submenu--submenu--EmU1-", {
      "dlt_submenu--compactSize--yJCzh": !!p,
      "dlt_submenu--isOpen--sH4-4": e,
      "dlt_submenu--fadedOut--rHzEu": r
    }),
    "data-testid": d,
    "aria-hidden": !0,
    id: s,
    children: h ? g : jsx("div", {
      className: "dlt_submenu--submenuCornerClipping--rhbch",
      children: g
    })
  });
}
export function $$E4({
  children: e,
  disabled: t,
  paddingLeft: r,
  paddingRight: i,
  height: a,
  shouldVerticallyCenter: s,
  shouldClipAndRoundTopRightCorner: l
}) {
  return jsx("div", {
    className: o()("dlt_submenu--submenuGroup--KSxIU", {
      "dlt_submenu--submenuGroupDisabled--BPix8": t,
      "dlt_submenu--submenuGroupVerticallyCentered---T24I": s,
      "dlt_submenu--submenuRightCornerClipping--ccFVw": l
    }),
    style: {
      paddingLeft: r,
      paddingRight: i,
      height: a
    },
    children: e
  });
}
export function $$y3() {
  return jsx("div", {
    className: "dlt_submenu--submenuDivider--IwlsI"
  });
}
export function $$b5({
  isSelected: e,
  children: t,
  explicitWidth: r,
  shouldCenterContent: i,
  noScaleAnimation: a,
  isRightEdge: s
}) {
  return jsx("div", {
    style: {
      width: r
    },
    className: o()("dlt_submenu--toolBackground--St0Y2 toolbar--passthruLayout--fN4I1", {
      "dlt_submenu--toolBackgroundScalingHighlight--LTx6Y": !a,
      "dlt_submenu--toolBackgroundHighlighted--aUWM5": e,
      "dlt_submenu--toolBackgroundCenterContent--p466V": i,
      "dlt_submenu--toolBackgroundRightEdgeHighlight--hqdJJ": !!s
    }),
    children: t
  });
}
export function $$T0({
  currentColor: e,
  paletteType: t,
  showPopover: r,
  setShowPopover: i,
  alwaysUseCurrentColorInSwatch: a,
  recordingKey: s
}) {
  let o = iN(e, t);
  let l = e && (o || r || a);
  return jsx($n, {
    onClick: () => {
      i(!r);
    },
    active: r ? "LOUD" : "NONE",
    recordingKey: s,
    buttonStyle: {
      "--menu-padding-right": "4px",
      marginLeft: "4px",
      padding: "4px 4px 4px 0px"
    },
    isNewSubmenu: !0,
    tabIndex: -1,
    children: l ? jsx(cd, {
      size: "medium",
      value: e,
      selectionState: r ? "unselected" : "selected_custom",
      background: "light",
      paletteType: "base",
      tooltip: getI18nString("whiteboard.colors.custom")
    }, "custom-color") : jsx(ZI, {
      swatchStyle: {
        boxShadow: "0px 0px 0px 1px rgba(0, 0, 0, 0.2) inset"
      }
    })
  });
}
export const Qu = $$T0;
export const Qw = $$f1;
export const XN = $$g2;
export const XI = $$y3;
export const br = $$E4;
export const ti = $$b5;