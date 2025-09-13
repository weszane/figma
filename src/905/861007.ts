import { jsx } from "react/jsx-runtime";
import { g as _$$g } from "../905/757007";
import { W } from "../905/569454";
import { w } from "../905/763623";
import { G } from "../905/117393";
import { g as _$$g2 } from "../905/687226";
import { V } from "../905/900932";
import { e as _$$e } from "../905/483726";
import u from "classnames";
import { LoadingSpinner, ImageBackedLoading } from "../figma_app/858013";
import { k } from "../905/700890";
import { SvgComponent } from "../905/714743";
import { OT } from "../905/70369";
import { VisualBellIcon, VisualBellShape } from "../905/576487";
import { Kk, hR, Nl, H0, Xy, m$ } from "../figma_app/143628";
import { A as _$$A } from "../1617/210240";
import { A as _$$A2 } from "../svg/261385";
import { A as _$$A3 } from "../svg/407438";
var p = u;
export function $$I0({
  error: e,
  icon: t,
  iconShape: i,
  iconURL: u,
  progress: I
}) {
  if (t === VisualBellIcon.SPINNER) return jsx("div", {
    className: Kk,
    children: jsx(LoadingSpinner, {})
  });
  if (t === VisualBellIcon.IMAGE_BACKED_SPINNER) return jsx("div", {
    className: Kk,
    children: jsx(ImageBackedLoading, {})
  });
  if (t === VisualBellIcon.CHECK) return jsx(SvgComponent, {
    className: Kk,
    svg: _$$A2
  });
  if (t === VisualBellIcon.GREEN_CHECK) return jsx(_$$g, {
    style: {
      "--color-icon": "var(--color-icon-success)"
    }
  });
  if (t === VisualBellIcon.CHECK_WITH_CIRCLE) return jsx(W, {});
  if (t === VisualBellIcon.EXCLAMATION) return jsx(SvgComponent, {
    className: Kk,
    svg: _$$A3
  });
  if (t === VisualBellIcon.RETURN_TO_INSTANCE) return jsx(SvgComponent, {
    className: Kk,
    svg: _$$A
  });else if (t === VisualBellIcon.UNDO) return jsx(SvgComponent, {
    className: Kk,
    svg: _$$A
  });else if (t === VisualBellIcon.PROGRESS) return jsx(k, {
    className: hR,
    fraction: OT(I),
    pathFill: "#FFFFFF"
  });else if (t === VisualBellIcon.FROM_URL) return jsx("img", {
    className: i === VisualBellShape.CIRCLE ? Nl : e ? H0 : Xy,
    src: u,
    alt: ""
  });else if (t === VisualBellIcon.NOTES_ON_RECTANGLE) return jsx(w, {
    className: p()(Kk, m$)
  });else if (t === VisualBellIcon.EYEDROPPER) return jsx(G, {});else if (t === VisualBellIcon.BRUSH) return jsx(_$$g2, {});else if (t === VisualBellIcon.SPARKLE) return jsx(V, {});else if (t === VisualBellIcon.WARNING_EXCLAMATION_WITH_TRIANGLE) return jsx(_$$e, {});
  return null;
}
export const H = $$I0;