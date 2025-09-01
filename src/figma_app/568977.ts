import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { h as _$$h } from "../905/270045";
import { bL } from "../905/911410";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { bL as _$$bL, D0 } from "../905/4410";
import { getFeatureFlags } from "../905/601108";
import { parsePxInt } from "../figma_app/783094";
import { Uz } from "../905/63728";
import { Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { S as _$$S } from "../905/177206";
import { tx, t as _$$t } from "../905/303541";
import { XE } from "../figma_app/91703";
import { bA, _q } from "../905/668764";
import { Lk } from "../figma_app/975811";
import { EU, RU, UK } from "../figma_app/740163";
import { Q7 } from "../905/203369";
import { cS } from "../figma_app/334459";
import { md8 } from "../figma_app/27776";
import { h as _$$h2, b as _$$b } from "../905/916167";
let $$v0 = "nudge-amount";
let A = parsePxInt(md8);
export function $$x1(e) {
  let t = wA();
  let r = EU();
  let c = RU();
  let I = _$$S({
    min: .1,
    nudge: bA,
    bigNudge: _q
  });
  let v = _$$S({
    min: 1,
    nudge: bA,
    bigNudge: _q
  });
  let x = new Lk({
    min: .1,
    smallNudgeAmount: bA,
    bigNudgeAmount: _q
  });
  let N = new Lk({
    min: 1,
    smallNudgeAmount: bA,
    bigNudgeAmount: _q
  });
  let C = () => {
    t(XE());
  };
  let w = e => {
    e.keyCode === Uz.ENTER && C();
  };
  let O = e => {
    UK().smallNudgeAmount.set(e);
  };
  let R = e => {
    UK().bigNudgeAmount.set(e);
  };
  let L = new Point(window.innerWidth / 2 - A / 2, window.innerHeight / 3);
  let P = getFeatureFlags().ce_tv_fpl_input ? jsxs(Fragment, {
    children: [jsx(_$$h, {
      htmlFor: "small-nudge-input",
      children: tx("fullscreen.nudge.small_nudge")
    }), jsx(_$$bL, {
      children: jsx(D0, {
        id: "small-nudge-input",
        formatter: I,
        value: r,
        onChange: O,
        recordingKey: Pt(e, "smallNudgeInput"),
        htmlAttributes: {
          onKeyDown: w
        }
      })
    })]
  }) : jsx(Q7, {
    ariaLabel: _$$t("fullscreen.nudge.small_nudge"),
    className: _$$h2,
    formatter: x,
    property: r,
    onChange: O,
    onKeyDown: w,
    recordingKey: Pt(e, "smallNudgeInput")
  });
  let D = getFeatureFlags().ce_tv_fpl_input ? jsxs(Fragment, {
    children: [jsx(_$$h, {
      htmlFor: "big-nudge-input",
      children: tx("fullscreen.nudge.big_nudge")
    }), jsx(_$$bL, {
      children: jsx(D0, {
        id: "big-nudge-input",
        formatter: v,
        value: c,
        onChange: R,
        recordingKey: Pt(e, "bigNudgeInput"),
        htmlAttributes: {
          onKeyDown: w
        }
      })
    })]
  }) : jsx(Q7, {
    ariaLabel: _$$t("fullscreen.nudge.big_nudge"),
    className: _$$b,
    formatter: N,
    property: c,
    onChange: R,
    onKeyDown: w,
    recordingKey: Pt(e, "bigNudgeInput")
  });
  let k = jsxs(Fragment, {
    children: [jsx(cS, {
      label: tx("fullscreen.nudge.small_nudge"),
      input: P
    }), jsx(cS, {
      label: tx("fullscreen.nudge.big_nudge"),
      input: D
    })]
  });
  return jsx(bL, {
    onClose: C,
    draggable: "header",
    defaultPosition: L,
    recordingKey: Pt(e, "modal"),
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("fullscreen.nudge.nudge_amount")
        })
      }), jsx(nB, {
        padding: {
          left: 0,
          right: 0
        },
        children: k
      })]
    })
  });
}
$$x1.displayName = "NudgeAmountPicker";
export const O = $$v0;
export const S = $$x1;