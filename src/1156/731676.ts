import { jsx, jsxs } from "react/jsx-runtime";
import { memo } from "react";
import { d4 } from "../vendor/514228";
import { k as _$$k } from "../642/978258";
import { jk } from "../1006/969977";
import { x as _$$x } from "../1006/523157";
import { IA } from "../905/291714";
import { W1 } from "../figma_app/439493";
import { Ez5, RN9, Qa7, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import m from "classnames";
import { Uz } from "../905/63728";
import { gk } from "../figma_app/540726";
import { J2 } from "../figma_app/84367";
import { fI } from "../figma_app/626177";
import { q } from "../642/649844";
import { s as _$$s } from "../642/632766";
import { HF } from "../figma_app/409807";
import { KI } from "../figma_app/335781";
var h = m;
let k = "stack_controls--input--gK1jo text--fontNeg12--2PWcg text--_fontBase--QdLsd text--_negText--j9g-L";
let C = "stack_controls--scrubbableControl--b1ChI";
let E = "stack_controls--inputSvg--wFizL";
let S = "stack_controls--stackSpacingRow--Uus3H";
function N() {
  let e = J2(Ez5.canvasViewState().focusedStackRegion);
  if (!e) return null;
  let {
    region,
    focus
  } = e;
  return region === RN9.SPACING ? jsx(A, {
    focusOnMount: focus
  }) : region === RN9.COUNTER_SPACING ? jsx(T, {
    focusOnMount: focus
  }) : jsx(I, {
    stackRegion: region,
    focusOnMount: focus
  });
}
let w = e => {
  if (e.keyCode === Uz.TAB) {
    e.preventDefault();
    e.currentTarget.blur();
    let t = e.shiftKey;
    Qa7.tabActiveStackRegion(t);
  }
};
function A({
  focusOnMount: e
}) {
  return jsx(fI, {
    className: S,
    children: jsx(KI, {
      focusOnMount: e,
      inputClassName: k,
      inputTestId: "stackSpacingControl",
      noBorderOnFocus: !0,
      onBlur: Qa7.clearActiveStackRegion,
      onCanvasUI: !0,
      onKeyDown: w,
      onPaste: L,
      outerClassName: C,
      recordingKey: "stackSpacingControl",
      source: "canvas",
      svgClassName: E
    })
  });
}
function T({
  focusOnMount: e
}) {
  return jsx(fI, {
    className: S,
    children: jsx(q, {
      focusOnMount: e,
      inputClassName: k,
      inputTestId: "stackCounterSpacingControl",
      noBorderOnFocus: !0,
      onBlur: Qa7.clearActiveStackRegion,
      onCanvasUI: !0,
      onKeyDown: w,
      onPaste: L,
      outerClassName: C,
      recordingKey: "stackCounterSpacingControl",
      source: "canvas",
      svgClassName: E
    })
  });
}
function I({
  stackRegion: e,
  focusOnMount: t
}) {
  let [n] = HF(e);
  let i = Array.isArray(n) ? n.length : 0;
  return e === RN9.SPACING ? null : jsx(fI, {
    className: h()("stack_controls--stackPaddingRow--40WUa", {
      "stack_controls--large--bJFUN": i > 3
    }),
    children: jsx(_$$s, {
      disableVariablesEntryPoint: !0,
      focusOnMount: t,
      inputClassName: k,
      inputTestId: "stackPaddingControl",
      noBorderOnFocus: !0,
      onBlur: Qa7.clearActiveStackRegion,
      onKeyDown: w,
      onPaste: L,
      outerClassName: C,
      paddingSelection: e,
      recordingKey: "stackPaddingControl",
      source: "canvas",
      svgClassName: E
    })
  });
}
function L(e) {
  gk(e) && (e.preventDefault(), e.currentTarget.blur(), l7.user("paste-in-stack", () => {
    glU.triggerAction("paste", {});
  }));
}
export let $$z0 = memo(function () {
  return d4(e => e.mirror.appModel.isReadOnly) ? null : jsx(M, {});
});
function M() {
  return jsx(_$$k, {
    isShown: !0,
    children: jsx(IA, {
      children: jsx(R, {
        testID: "DesignInlineMenu"
      })
    })
  });
}
function R({
  testID: e
}) {
  let t = d4(e => {
    let t = e.mirror.selectionProperties.stackMode;
    return 1 === e.mirror.selectionProperties.numSelected && ("HORIZONTAL" === t || "VERTICAL" === t || "GRID" === t);
  });
  return d4(e => {
    let t = e.mirror.selectionProperties.selectedWidgetInfo;
    return !!(1 === e.mirror.selectionProperties.numSelected && t?.propertyMenu.length);
  }) ? jsxs(W1, {
    size: "small",
    testID: e,
    children: [jsx(jk, {}), jsx(_$$x, {})]
  }) : t ? jsx(W1, {
    testID: e,
    darkModePreferred: !0,
    children: jsx(N, {}, "stackControls")
  }) : null;
}
export const X = $$z0;