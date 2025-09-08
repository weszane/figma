import { jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { roundToMultiple, clamp } from "../figma_app/492908";
import { l as _$$l } from "../905/556594";
import { O4 } from "../905/777187";
import { c1 } from "../figma_app/806412";
import { q, v as _$$v } from "../905/476456";
import { LS } from "../figma_app/975811";
import { fullscreenValue } from "../figma_app/455680";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { a3, ow, G7 } from "../905/188421";
import { fI } from "../figma_app/626177";
import { c$, tV } from "../905/794875";
import { pW, gm } from "../figma_app/335781";
import { t as _$$t } from "../905/1946";
import { sH, sI, Yq } from "../figma_app/183248";
import { QK } from "../figma_app/100987";
let I = [.25, .5, .75, 1, 2, 3, 4, 5, 10];
class E extends a3 {}
class x extends c$ {}
let S = new class {
  constructor() {
    this.MAX_SCALE = sH;
    this.MIN_SCALE = sI;
  }
  parse(e) {
    let t = q(e);
    let i = O4(t, 1);
    if (i.error) throw new LS("Could not parse input", i.error.type);
    let n = _$$v(e);
    return {
      value: i.value,
      anchorPoint: n
    };
  }
  format(e) {
    if (null == e) return "";
    let t = parseFloat(e.value.toFixed(2));
    return `${t}x`;
  }
  getNudgeAmount(e) {
    return e ? 1 : .5;
  }
  incrementBy(e, t) {
    return {
      value: e.value + t,
      anchorPoint: e.anchorPoint
    };
  }
  snap(e, t) {
    return {
      value: roundToMultiple(e.value, t),
      anchorPoint: e.anchorPoint
    };
  }
  clamp(e) {
    return {
      value: clamp(e.value, this.MIN_SCALE, this.MAX_SCALE),
      anchorPoint: e.anchorPoint
    };
  }
  isEqual(e, t) {
    return e.value === t.value && e.anchorPoint === t.anchorPoint;
  }
}();
let $$w0 = forwardRef((e, t) => {
  let {
    disabled,
    scale,
    onScaleChange,
    recordingKey,
    onInputKeyDown
  } = e;
  let u = useDispatch();
  let f = useSelector(e => e.dropdownShown);
  let w = c1(recordingKey);
  let C = I.map((e, t) => jsx(x, {
    value: {
      value: e
    },
    recordingKey: w("scaleInput", e)
  }, t));
  let T = {
    smallNudgeAmount: 1,
    bigNudgeAmount: 10,
    scrubMultiplier: 1,
    wheelMultiplier: 1,
    postScrubMultiplier: .01,
    postBigNudgeAmount: 1,
    postWheelMultiplier: .1,
    resolution: .01,
    "data-tooltip": "",
    "data-tooltip-type": Ib.TEXT,
    dispatch: u,
    value: {
      value: scale
    },
    onValueChange: (e, t) => {
      onScaleChange(e.value, Yq.Scrub, t);
      t && fullscreenValue.commit();
    },
    scrubbingDisabled: disabled,
    formatter: S
  };
  let k = jsx(_$$l, {});
  return jsx(ow, {
    value: {
      select: pW,
      inputComponent: gm
    },
    children: jsx(tV, {
      value: {
        chevron: _$$t
      },
      children: jsx(E, {
        className: "scale_row--scaleCombobox--jimxi",
        dataTestId: "scale_panel.scale",
        disabled,
        dispatch: u,
        dropdownShown: f,
        dropdownWidth: 104,
        formatter: S,
        forwardedRef: t,
        icon: k,
        iconClassName: QK,
        id: "scale-input-fullscreen.scale_panel.scale",
        onChange: (e, t, i) => {
          onScaleChange(e.value, i === G7.Input ? Yq.Input : Yq.Select, t ?? zk.NO, e.anchorPoint);
          t && fullscreenValue.commit();
        },
        onKeyDown: onInputKeyDown,
        onMouseDown: e => {
          e.stopPropagation();
        },
        property: {
          value: scale
        },
        recordingKey: w("scaleInput"),
        scrubbableControlProps: T,
        children: C
      })
    })
  });
});
forwardRef((e, t) => jsx(fI, {
  children: jsx($$w0, {
    ...e,
    ref: t
  })
}));
export const g = $$w0;