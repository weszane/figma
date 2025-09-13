import { jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { d as _$$d } from "../905/976845";
import { u as _$$u } from "../905/911813";
import { useAtomWithSubscription } from "../figma_app/27355";
import l from "classnames";
import { D } from "../905/12032";
import { KindEnum } from "../905/129884";
import { FX } from "../figma_app/831569";
import { p as _$$p } from "../905/427409";
import { c6, e as _$$e } from "../figma_app/631970";
var d = l;
export function $$g0({
  isPickerShowing: e,
  onClick: t,
  recordingKey: i,
  tooltip: l,
  showAlways: g
}) {
  let f = useContext(_$$p);
  let _ = e ?? f?.isShowingBindingUI;
  let A = t ?? f?.showBindingUI;
  let y = useAtomWithSubscription(D);
  return jsx("span", {
    className: d()({
      [c6]: "OnboardNewTextContentRowLocation" !== y && !g,
      [_$$e]: _
    }),
    children: jsx(_$$d, {
      "aria-expanded": !!_,
      onClick: e => A ? A(e.currentTarget) : void 0,
      "aria-label": l,
      recordingKey: i,
      htmlAttributes: {
        "data-onboarding-key": FX,
        "data-tooltip": l,
        "data-tooltip-type": KindEnum.TEXT,
        "data-testid": "variable-binding-icon"
      },
      children: jsx(_$$u, {})
    })
  });
}
export const K = $$g0;