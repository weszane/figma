import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useContext } from "react";
import a from "classnames";
import { M } from "../figma_app/648761";
import { KeyCodes } from "../905/63728";
import { RecordableAnchor, RecordableButton } from "../905/511649";
import { SvgComponent } from "../905/714743";
import { t as _$$t } from "../905/331623";
import { withTrackedClick } from "../figma_app/831799";
import { dD } from "../figma_app/941824";
import { En } from "../figma_app/613182";
import { U, Ah, pq, vR, No, ai } from "../figma_app/973219";
import { A } from "../6828/364616";
var s = a;
forwardRef(function (e, t) {
  let r = s()(e.className, e.containerClassName, U, e.disabled ? Ah : pq, {
    [vR]: e.selected,
    [e.selectedClassName ?? ""]: e.selected,
    [No]: e.isBackgroundTransparent
  });
  return jsx($$f0, {
    ...e,
    className: r,
    ref: t,
    children: jsxs(Fragment, {
      children: [jsx(_$$t, {
        svg: e.svg,
        fallbackSvg: e.fallbackSvg,
        useOriginalSrcFills_DEPRECATED: e.useOriginalSrcFills_DEPRECATED,
        style: {
          fill: e.fill
        }
      }), jsx(SvgComponent, {
        className: ai,
        svg: A
      })]
    })
  });
});
let $$f0 = forwardRef(function (e, t) {
  let {
    useGrid
  } = useContext(dD);
  let a = M(t);
  function c() {
    a.current.blur();
  }
  let p = s()(e.className, {
    [vR]: e.selected,
    [e.selectedClassName ?? ""]: e.selected,
    [Ah]: !e.selected && e.disabled,
    [pq]: !e.selected && !e.disabled,
    [No]: e.isBackgroundTransparent
  });
  let g = e.tooltipForScreenReadersOnly || !e.showTooltipWhenSelectedIsTrue && e.selected;
  let f = e.href ? RecordableAnchor : RecordableButton;
  return jsx(f, {
    "aria-disabled": e.disabled,
    "aria-expanded": e["aria-expanded"],
    "aria-haspopup": e["aria-haspopup"],
    "aria-label": e["aria-label"] ?? En(e),
    "aria-owns": e["aria-owns"],
    "aria-pressed": e["aria-pressed"],
    className: p,
    "data-fullscreen-intercept": e["data-fullscreen-intercept"],
    "data-onboarding-key": e["data-onboarding-key"],
    "data-testid": e.dataTestId,
    "data-tooltip": g ? null : e["data-tooltip"],
    "data-tooltip-max-width": g ? null : e["data-tooltip-max-width"],
    "data-tooltip-offset-x": g ? null : e["data-tooltip-offset-x"],
    "data-tooltip-offset-y": g ? null : e["data-tooltip-offset-y"],
    "data-tooltip-shortcut-key": g ? null : e["data-tooltip-shortcut-key"],
    "data-tooltip-show-above": g ? null : e["data-tooltip-show-above"],
    "data-tooltip-show-immediately": g ? null : e["data-tooltip-show-immediately"],
    "data-tooltip-type": g ? null : e["data-tooltip-type"],
    disabled: e.disabled,
    forwardedRef: a,
    href: e.disabled ? void 0 : e.href,
    onClick: e.disabled ? void 0 : e.onClick,
    onContextMenu: e.disabled ? void 0 : e.onContextMenu,
    onDoubleClick: e.disabled ? void 0 : e.onDoubleClick,
    onKeyDown: e.disabled ? void 0 : t => {
      if (!useGrid || " " !== t.key || !t.shiftKey) switch (t.keyCode) {
        case KeyCodes.ENTER:
        case KeyCodes.SPACE:
          (e.onMouseDown || e.onClick || e.onKeyDown) && t.preventDefault();
          e.onMouseDown?.(t);
          e.onKeyDown ? e.onKeyDown(t) : e.onClick?.(t);
          break;
        case KeyCodes.ESCAPE:
          c();
      }
    },
    onMouseDown: e.disabled ? void 0 : e.onMouseDown,
    onMouseEnter: e.disabled ? void 0 : e.onMouseEnter,
    onMouseLeave: e.disabled ? void 0 : e.onMouseLeave,
    onMouseMove: e.disabled ? void 0 : e.onMouseMove,
    onMouseUp: e.disabled ? void 0 : c,
    onPointerDown: e.disabled ? void 0 : e.onPointerDown,
    recordingKey: e.recordingKey,
    style: e.style,
    tabIndex: null != e.tabIndex ? e.tabIndex : e.disabled ? -1 : 0,
    target: e.target,
    type: e.type,
    children: e.children || jsx(_$$t, {
      svg: e.svg,
      fallbackSvg: e.fallbackSvg,
      useOriginalSrcFills_DEPRECATED: e.useOriginalSrcFills_DEPRECATED,
      style: {
        fill: e.fill
      }
    })
  });
});
let $$E1 = withTrackedClick($$f0);
let $$y2 = $$f0;
let $$b3 = withTrackedClick($$y2);
export const K0 = $$f0;
export const Me = $$E1;
export const YW = $$y2;
export const o5 = $$b3;