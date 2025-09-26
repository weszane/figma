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
import { F } from "../905/604606";
import { ZS, Fs } from "../905/549307";
import { A } from "../1617/954184";
export function $$g0({
  resolvedTypes: e,
  recordingKey: t
}) {
  let {
    showing,
    toggle,
    hide
  } = useDropdown("expression-builder-create-variable");
  let h = useRef(null);
  let g = useHandleMouseEvent(generateRecordingKey(t, "createVariableDropdown"), "click", useCallback(() => {
    1 === e.length ? v(e[0]) : toggle();
  }, [e, toggle]));
  let [f, _] = useState(!1);
  let b = useRef(null);
  let v = e => {
    let t = h.current?.getBoundingClientRect();
    t && (b.current = {
      initialPosition: new Point(t.left, t.top),
      resolvedType: e
    }, _(!0));
  };
  let I = () => {
    _(!1);
  };
  return jsxs(Fragment, {
    children: [jsx("button", {
      ref: h,
      className: ZS,
      onClick: g,
      children: jsx(SvgComponent, {
        svg: A
      })
    }), f && (f && b.current ? jsx(U, {
      initialPosition: b.current.initialPosition,
      initialWidth: _$$i,
      resolvedType: b.current.resolvedType,
      onCreateVariable: I,
      onClose: I
    }) : null), showing && h.current && jsx(Cf, {
      arrowOffsetFromRectLeft: 14,
      leanPadding: 0,
      lean: "right",
      targetRect: h.current.getBoundingClientRect(),
      children: e.map(e => jsx(y, {
        resolvedType: e,
        onClose: hide,
        showCreationModal: v,
        recordingKey: t
      }, e))
    })]
  });
}
function y({
  resolvedType: e,
  onClose: t,
  showCreationModal: n,
  recordingKey: a
}) {
  let s = F(e);
  let d = useHandleMouseEvent(generateRecordingKey(a, "createVariableOption", s.name), "click", useCallback(() => {
    n(e);
    t();
  }, [t, e, n]));
  return jsxs(c$, {
    className: Fs,
    onClick: d,
    children: [jsx(_$$i2, {
      type: e,
      showTooltip: !1
    }), s.name]
  });
}
export const f = $$g0;