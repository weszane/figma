import { jsx } from "react/jsx-runtime";
import { useRef, useEffect, useCallback, useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { Et } from "../figma_app/397267";
import { E as _$$E } from "../905/658074";
import { W as _$$W } from "../figma_app/462192";
import { rXF, QeU, glU, hJs, Qa7 } from "../figma_app/763686";
import { l7 } from "../905/189185";
import u from "classnames";
import { B as _$$B } from "../905/714743";
import { t as _$$t } from "../905/303541";
import { Y5 } from "../figma_app/455680";
import { sT } from "../figma_app/740163";
import { gl, oV, Q8, SX } from "../905/216495";
import { kl, lJ } from "../905/275640";
import { F } from "../905/258517";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { Se } from "../figma_app/178475";
import { sA } from "../figma_app/841644";
import { ow } from "../905/188421";
import { c$, tV } from "../905/794875";
import { t as _$$t2 } from "../905/1946";
import { O as _$$O, S as _$$S } from "../figma_app/375482";
import { wm } from "../figma_app/694588";
import { s$, lW, lL } from "../figma_app/409807";
import { be, Kk, kk, j1, hF, QK, Sz } from "../figma_app/960598";
import { A as _$$A } from "../2854/668810";
import { A as _$$A2 } from "../svg/962815";
var p = u;
let P = "STACK_SPACING";
export function $$D2({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    inputClassName: be,
    iconClassName: Kk
  });
}
export function $$k1({
  OriginalComponent: e,
  ...t
}) {
  return jsx(e, {
    ...t,
    outerClassName: kk,
    pillsContainerClassName: j1
  });
}
export function $$M0({
  focusOnMount: e,
  source: t,
  onCanvasUI: r,
  ...u
}) {
  let M = useDispatch();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let U = kl("stackDistributionMode");
  let B = kl("stackMode");
  let [G, V] = lJ("stackSpacing");
  let {
    selection,
    selectedChildCount
  } = wm();
  let W = useRef(!1);
  let K = useRef(null);
  useEffect(() => {
    e && (K.current?.focus(), K.current?.select());
  }, [e]);
  let Y = "HORIZONTAL" === B || gl(B) ? _$$A : _$$A2;
  let $ = `stack-spacing-input-icon-${B}`;
  let X = "HORIZONTAL" === B || gl(B) ? jsx(_$$E, {}) : jsx(_$$W, {});
  let {
    boundVariable,
    consumedVariable
  } = _$$O(P, rXF.FLOAT);
  useEffect(() => {
    boundVariable && U === QeU.SPACE_BETWEEN && s$(QeU.PACKED, U);
  }, [boundVariable, U]);
  let Z = lW({
    bigNudgeAmount,
    smallNudgeAmount
  });
  let Q = gl(U) ? oV : U === QeU.SPACE_BETWEEN ? Q8 : G;
  let ee = U === QeU.SPACE_BETWEEN;
  let et = "HORIZONTAL" === B ? _$$t("fullscreen.properties_panel.section_autoLayout.tooltip_horizontalGap") : "VERTICAL" === B ? _$$t("fullscreen.properties_panel.section_autoLayout.tooltip_verticalGap") : _$$t("fullscreen.properties_panel.section_autoLayout.tooltip_mixedGap");
  let {
    clearVariableConsumption
  } = _$$O(P, rXF.FLOAT);
  let en = useCallback((e, r) => {
    r && (F.trackFromFullscreen("Autolayout Spacing Changed", {
      source: t,
      input: W.current ? "scrub" : "textfield",
      spacing: SX(e) ? "auto" : e,
      numericSpacing: SX(e) ? void 0 : e,
      autoSpacing: SX(e),
      selectedGuids: selection,
      selectedCount: selection.length,
      selectionChildCount: selectedChildCount
    }), glU.temporarilyHideOverlay(hJs.SELECTION));
    "number" == typeof e ? l7.user("set-stack-spacing", () => {
      s$(QeU.PACKED, U);
      V(e, zk.NO);
    }) : l7.user("unset-stack-spacing", () => {
      clearVariableConsumption();
      Qa7.unsyncStackCounterSpacing();
      s$(QeU.SPACE_BETWEEN, U);
    });
    r === zk.YES && Y5.triggerAction("commit");
  }, [clearVariableConsumption, U, selection, selectedChildCount, V, t]);
  let ei = [jsx(c$, {
    value: Et(G) ? G : bigNudgeAmount
  }, "value"), jsx(c$, {
    value: Q8
  }, "auto")];
  let ea = useMemo(() => [P], []);
  return r ? jsx(sA, {
    recordingKey: u.recordingKey,
    inputClassName: u.outerClassName,
    fields: ea,
    currentFieldValue: "number" == typeof Q ? Q : void 0,
    resolvedType: rXF.FLOAT,
    disableEntryPoint: r,
    children: jsx(Se, {
      bigNudgeAmount,
      "data-tooltip": et,
      "data-tooltip-max-width": 200,
      "data-tooltip-proxy-element-id": consumedVariable ? $ : void 0,
      "data-tooltip-show-on-target-only": !0,
      "data-tooltip-type": Ib.TEXT,
      dataTestId: u.inputTestId,
      dispatch: M,
      forwardedRef: K,
      inputClassName: p()(hF, u.inputClassName),
      isTokenizable: !0,
      mixedMathHandler: lL,
      noBorderOnFocus: u.noBorderOnFocus,
      noBorderOnHover: !0,
      noLeftBorder: u.noLeftBorder,
      onBlur: u.onBlur,
      onFocus: u.onFocus,
      onKeyDown: u.onKeyDown,
      onMouseEnter: u.onMouseEnter,
      onMouseLeave: u.onMouseLeave,
      onNudge: u.onNudge,
      onPaste: u.onPaste,
      onScrubBegin: e => {
        W.current = !0;
        u.onScrubBegin?.(e);
      },
      onScrubEnd: e => {
        W.current = !1;
        u.onScrubEnd?.(e);
      },
      onValueChange: en,
      recordingKey: u.recordingKey,
      scrubMultiplier: smallNudgeAmount,
      scrubbingDisabled: ee,
      smallNudgeAmount,
      squareRightBorder: u.squareRightBorder,
      value: Q,
      wheelMultiplier: smallNudgeAmount,
      children: jsx(_$$B, {
        className: p()(QK, u.svgClassName),
        svg: Y,
        "data-tooltip-type": consumedVariable ? Ib.TEXT : void 0,
        "data-tooltip": consumedVariable ? et : void 0,
        "data-tooltip-max-width": consumedVariable ? 200 : void 0,
        id: consumedVariable ? $ : void 0
      })
    })
  }) : jsx(ow, {
    value: {
      select: $$D2,
      inputComponent: $$k1
    },
    children: jsx(tV, {
      value: {
        chevron: _$$t2
      },
      children: jsx(_$$S, {
        "data-tooltip-max-width": 200,
        dropdownAlignment: "right",
        dropdownWidth: 140,
        formatter: Z,
        icon: X,
        iconId: $,
        id: "stackSpacing",
        inputClassName: u.inputClassName,
        inputRef: K,
        inputTestId: u.inputTestId,
        mixedMathHandler: lL,
        noBorderOnFocus: u.noBorderOnFocus,
        noLeftBorder: u.noLeftBorder,
        onBlur: u.onBlur,
        onChange: en,
        onFocus: u.onFocus,
        onKeyDown: u.onKeyDown,
        onMouseEnter: u.onMouseEnter,
        onMouseLeave: u.onMouseLeave,
        onNudge: u.onNudge,
        onPaste: u.onPaste,
        onScrubBegin: u.onScrubBegin,
        onScrubEnd: u.onScrubEnd,
        onboardingKey: u.onboardingKey,
        options: ei,
        outerClassName: p()(u.outerClassName, Sz),
        recordingKey: u.recordingKey,
        scrubbingDisabled: ee,
        shiftVariableOptionToAlign: !0,
        showTooltipOnTargetOnly: !0,
        source: t,
        squareRightBorder: u.squareRightBorder,
        tooltipText: et,
        value: Q,
        variableField: P
      })
    })
  });
}
export const KI = $$M0;
export const gm = $$k1;
export const pW = $$D2;