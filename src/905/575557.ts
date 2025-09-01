import { jsx } from "react/jsx-runtime";
import { useRef, useCallback, useMemo, useContext } from "react";
import { wA } from "../vendor/514228";
import { YE } from "../figma_app/492908";
import { assertNotNullish } from "../figma_app/95419";
import { e as _$$e } from "../905/478588";
import { glU, rXF } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { dI } from "../905/871411";
import { t as _$$t } from "../905/303541";
import { Oe } from "../figma_app/933328";
import { h7 } from "../figma_app/975811";
import { Y5 } from "../figma_app/455680";
import { sT } from "../figma_app/740163";
import { gl, E7, hS } from "../905/216495";
import { SG } from "../figma_app/852050";
import { oZ, LS, TK, F6, UH } from "../905/129660";
import { zk } from "../figma_app/198712";
import { Ib } from "../905/129884";
import { e as _$$e2 } from "../905/579635";
import { Jl } from "../figma_app/178475";
import { sJ } from "../figma_app/841644";
import { h$ } from "../905/566585";
import { P as _$$P } from "../905/460261";
import { _X } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { k as _$$k } from "../905/67286";
import { hf, KY, Kk } from "../905/71683";
export function $$N0({
  lineHeight: e,
  lineHeightInContext: t,
  disabled: i,
  editingStyleGuid: s,
  rowElementRef: o,
  recordingKey: h,
  disableVariables: A,
  onChange: x,
  responsiveTextStyleVariantIndex: T
}) {
  let N = wA();
  let {
    smallNudgeAmount,
    bigNudgeAmount
  } = sT();
  let F = oZ(t);
  let M = !!LS(t.lineHeight);
  let j = useRef(null);
  let U = useCallback((e, i) => {
    if (x?.(), i === zk.YES && null != t && (e = TK(t, e)), void 0 !== T) {
      if (!s) throw Error("Expected editingStyleGuid to be set when responsiveTextStyleVariantIndex is set");
      let t = {
        value: e.value,
        units: e.units
      };
      l7.user("editVariantLineHeightForTextStyleNode", () => glU.editVariantLineHeightForTextStyleNode(dI(s), T, t));
      return;
    }
    Y5.updateSelectionProperties({
      lineHeight: e
    }, {
      shouldCommit: i
    });
    h$("LINE_HEIGHT", i);
  }, [x, t, s, T]);
  let B = useMemo(() => new P(t, smallNudgeAmount, bigNudgeAmount), [t, smallNudgeAmount, bigNudgeAmount]);
  let V = useCallback(async e => {
    if (void 0 !== T) {
      if (e) {
        let t = await N(Oe(e));
        l7.user("editVariantVCMForTextStyleNode", () => {
          glU.editVariantVCMForTextStyleNode(dI(s), T, "LINE_HEIGHT", t);
        });
      } else l7.user("editVariantVCMForTextStyleNode", () => {
        glU.clearVariantVCMFieldForTextStyleNode(dI(s), T, "LINE_HEIGHT");
      });
    }
  }, [N, s, T]);
  return jsx(_$$e2, {
    condition: !A,
    wrapper: e => jsx(_X, {
      fields: ["LINE_HEIGHT"],
      resolvedType: rXF.FLOAT,
      editingStyleGuid: s,
      responsiveTextStyleVariantIndex: T,
      onVariableSelected: void 0 !== T ? V : void 0,
      initialPickerPosition: () => _$$k({
        inputRef: j,
        rowRef: o,
        isInStyleModal: !!s
      }) ?? null,
      children: jsx(O, {
        controlRef: j,
        inputClassName: hf,
        currentFieldValue: F,
        isInStyleModal: !!s,
        rowElementRef: o,
        recordingKey: h,
        children: e
      })
    }),
    children: jsx(Jl, {
      bigNudgeAmount,
      className: A ? hf : void 0,
      "data-tooltip": _$$P(_$$t("fullscreen.type_panel.line_height")),
      "data-tooltip-type": Ib.TEXT,
      disabled: i,
      dispatch: N,
      formatter: B,
      inputClassName: KY,
      isTokenizable: !A,
      min: 0,
      noBorderOnHover: !A,
      onValueChange: U,
      placeholder: M ? null == F ? _$$t("fullscreen.mixed") : parseFloat(F.toFixed(1)).toString() : void 0,
      recordingKey: h,
      scrubMultiplier: gl(e) || e?.units === "PIXELS" ? 1 : .01,
      shouldClearOnFocus: M,
      smallNudgeAmount,
      value: e,
      children: jsx("div", {
        className: Kk,
        children: jsx(_$$e, {})
      })
    })
  });
}
class P {
  constructor(e, t, i) {
    this.lineHeightInContext = e;
    this.smallPixelNudgeAmount = t;
    this.bigPixelNudgeAmount = i;
    this.defaultValue = {
      value: 100,
      units: "PERCENT"
    };
    this.initialLineHeightInContext = e;
  }
  parse(e, t) {
    if ("" === (e = e.trim().toLowerCase())) return this.defaultValue;
    if ("%" === e) return null == t || "PIXELS" === t.units || 100 === t.value && "PERCENT" === t.units ? {
      value: assertNotNullish(F6(this.lineHeightInContext), "insufficient information to parse input"),
      units: "RAW"
    } : this.defaultValue;
    if ("auto%".startsWith(e)) return this.defaultValue;
    if ("px" === e || "px%" === e) {
      let e = oZ(this.lineHeightInContext);
      if (null == e) throw Error("single equivalent PIXELS value is undefined");
      return {
        value: e,
        units: "PIXELS"
      };
    }
    let i = h7.parse(e);
    if (void 0 === i) throw Error("could not parse input");
    let [n, r] = i;
    switch (r) {
      case "PIXELS":
        return {
          value: n,
          units: r
        };
      case void 0:
        return {
          value: n,
          units: "PIXELS"
        };
      case "RAW":
      case "PERCENT":
        return {
          value: n / 100,
          units: "RAW"
        };
    }
  }
  defaultSelection(e) {
    let t = /[0-9\.]+/.exec(e);
    return null != t ? {
      start: t.index,
      end: t.index + t[0].length
    } : {
      start: 0,
      end: e.length
    };
  }
  format(e) {
    return null == e || isNaN(e.value) || null == this.initialLineHeightInContext ? "" : UH(this.initialLineHeightInContext.withLineHeight(e));
  }
  getNudgeAmount(e, t) {
    switch (t.units) {
      case "PIXELS":
        return e ? this.bigPixelNudgeAmount : this.smallPixelNudgeAmount;
      case "RAW":
        return e ? .1 : .01;
      case "PERCENT":
        let {
          intrinsicLineHeight,
          fontSize
        } = this.lineHeightInContext;
        let r = E7(intrinsicLineHeight);
        if (null == r || !hS(fontSize)) return e ? this.bigPixelNudgeAmount : this.smallPixelNudgeAmount;
        return (e ? this.bigPixelNudgeAmount : this.smallPixelNudgeAmount) * 100 / (r * fontSize);
    }
  }
  incrementBy(e, t) {
    return {
      value: e.value + t,
      units: e.units
    };
  }
  clamp(e) {
    let t = e.value;
    return {
      value: t = Math.max(t, 0),
      units: e.units
    };
  }
  snap(e, t) {
    return {
      value: "PERCENT" === e.units ? e.value : YE(e.value, t),
      units: e.units
    };
  }
}
function O({
  inputClassName: e,
  currentFieldValue: t,
  isInStyleModal: i,
  rowElementRef: a,
  recordingKey: s,
  controlRef: o,
  children: l
}) {
  let d = useContext(_$$p);
  let c = SG(["LINE_HEIGHT"]).data ?? [];
  let u = useCallback(() => {
    a.current && d?.showBindingUI(a.current, {
      currentFieldValue: t,
      initialPosition: _$$k({
        inputRef: o,
        rowRef: a,
        isInStyleModal: i
      })
    });
  }, [d, t, i, a, o]);
  return jsx(sJ, {
    ref: o,
    inputClassName: e,
    currentFieldValue: t,
    isActive: d?.isShowingBindingUI ?? !1,
    disableEntryPoint: 0 === c.length,
    recordingKey: s,
    onPickerOpen: u,
    children: l
  });
}
export const a = $$N0;