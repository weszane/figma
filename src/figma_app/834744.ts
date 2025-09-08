import { jsx } from "react/jsx-runtime";
import { memo, useRef } from "react";
import { R } from "../905/649743";
import { W } from "../905/63398";
import { D } from "../905/591570";
import { Pt } from "../figma_app/806412";
import { getI18nString, renderI18nText } from "../905/303541";
import { A as _$$A } from "../905/482208";
import { fullscreenValue } from "../figma_app/455680";
import { Zr } from "../figma_app/678782";
import { Ib } from "../905/129884";
import { t as _$$t2 } from "../figma_app/480016";
import { fn } from "../figma_app/811257";
import { a as _$$a } from "../905/361302";
import { E as _$$E } from "../905/277716";
import { yb } from "../905/608681";
import { Z } from "../905/557139";
import { lJ } from "../905/275640";
import { o3, nt } from "../905/226610";
import { zk } from "../figma_app/198712";
import { Zp } from "../figma_app/178475";
import { KG } from "../figma_app/98483";
import { BP, hF, QK } from "../figma_app/100987";
function x(e) {
  let [t, r] = lJ("angle");
  let i = o3(nt.fplScrubbableInput);
  let {
    smallNudgeAmount,
    bigNudgeAmount,
    ...o
  } = KG({
    key: "angle",
    setValue: r
  });
  return jsx(_$$E, {
    name: "rotation_input",
    children: i ? jsx(Z, {
      "aria-label": getI18nString("fullscreen.properties_panel.transform_panel.rotation"),
      value: t,
      onChange: (e, {
        commit: t
      }) => {
        o.onValueChange(e, t ? zk.YES : zk.NO);
      },
      mixedMathHandler: o.mixedMathHandler,
      recordingKey: Pt(e, "angleInput"),
      incrementDirection: yb.Counterclockwise
    }) : jsx(Zp, {
      className: BP,
      inputClassName: hF,
      value: t,
      disabled: e.disabled,
      ...o,
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": getI18nString("fullscreen.properties_panel.transform_panel.rotation"),
      recordingKey: Pt(e, "angleInput"),
      children: jsx("div", {
        className: QK,
        children: jsx(_$$a, {})
      })
    })
  });
}
let $$N0 = memo(function (e) {
  let t = useRef(null);
  let r = Zr("flip-horizontal");
  let c = Zr("flip-vertical");
  let u = Zr("rotate-90-clockwise");
  let _ = renderI18nText("properties.label.rotation");
  let g = jsx(x, {
    disabled: e.angleDisabled,
    recordingKey: e.recordingKey
  });
  let f = jsx(_$$t2, {
    recordingKey: Pt(e.recordingKey, "rotateFlipControls"),
    controls: [C("rotate-90-clockwise", jsx(R, {}), u, "rotate90"), C("flip-horizontal", jsx(W, {}), r, "flipHorizontal"), C("flip-vertical", jsx(D, {}), c, "flipVertical")]
  });
  return jsx(fn, {
    ref: t,
    leftLabel: _,
    leftInput: g,
    rightInput: f,
    rightLabel: null,
    icon: null
  });
});
let C = (e, t, r, n) => ({
  "aria-label": _$$A(e),
  "data-tooltip": e,
  "data-tooltip-type": Ib.LOOKUP,
  children: t,
  disabled: !r,
  recordingKey: n,
  onClick: () => {
    fullscreenValue.triggerActionInUserEditScope(e);
  }
});
export const Q = $$N0;