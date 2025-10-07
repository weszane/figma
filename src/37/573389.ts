import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useState } from "react";
import { useHandleMouseEvent, generateRecordingKey } from "../figma_app/878298";
import { Point } from "../905/736624";
import { c$ } from "../figma_app/236327";
import { SvgComponent } from "../905/714743";
import { useDropdown } from "../905/848862";
import { Cf } from "../905/504727";
import { U, i as _$$i } from "../905/649519";
import { i as _$$i2 } from "../905/415810";
import { getVariableTypeInfo } from "../905/604606";
import { ZS, Fs } from "../905/549307";
import { A } from "../1617/954184";
export function $$x0({
  resolvedTypes: e,
  recordingKey: t
}) {
  let {
    showing,
    toggle,
    hide
  } = useDropdown("expression-builder-create-variable");
  let f = useRef(null);
  let x = useHandleMouseEvent(generateRecordingKey(t, "createVariableDropdown"), "click", useCallback(() => {
    1 === e.length ? b(e[0]) : toggle();
  }, [e, toggle]));
  let [O, h] = useState(!1);
  let E = useRef(null);
  let b = e => {
    let t = f.current?.getBoundingClientRect();
    t && (E.current = {
      initialPosition: new Point(t.left, t.top),
      resolvedType: e
    }, h(!0));
  };
  let T = () => {
    h(!1);
  };
  return jsxs(Fragment, {
    children: [jsx("button", {
      ref: f,
      className: ZS,
      onClick: x,
      children: jsx(SvgComponent, {
        svg: A
      })
    }), O && (O && E.current ? jsx(U, {
      initialPosition: E.current.initialPosition,
      initialWidth: _$$i,
      resolvedType: E.current.resolvedType,
      onCreateVariable: T,
      onClose: T
    }) : null), showing && f.current && jsx(Cf, {
      arrowOffsetFromRectLeft: 14,
      leanPadding: 0,
      lean: "right",
      targetRect: f.current.getBoundingClientRect(),
      children: e.map(e => jsx(g, {
        resolvedType: e,
        onClose: hide,
        showCreationModal: b,
        recordingKey: t
      }, e))
    })]
  });
}
function g({
  resolvedType: e,
  onClose: t,
  showCreationModal: r,
  recordingKey: l
}) {
  let a = getVariableTypeInfo(e);
  let u = useHandleMouseEvent(generateRecordingKey(l, "createVariableOption", a.name), "click", useCallback(() => {
    r(e);
    t();
  }, [t, e, r]));
  return jsxs(c$, {
    className: Fs,
    onClick: u,
    children: [jsx(_$$i2, {
      type: e,
      showTooltip: !1
    }), a.name]
  });
}
export const f = $$x0;