import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useId, useContext, useRef, useCallback, memo } from "react";
import { IconButton } from "../905/443068";
import { ButtonPrimitive } from "../905/632989";
import { m as _$$m } from "../905/886380";
import { o as _$$o } from "../905/949628";
import { Ay } from "../figma_app/272902";
import c from "classnames";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { RecordableDiv } from "../905/511649";
import { SvgComponent } from "../905/714743";
import { getI18nString } from "../905/303541";
import { i as _$$i } from "../figma_app/85949";
import { SG } from "../figma_app/852050";
import { BK } from "../905/848862";
import { KindEnum } from "../905/129884";
import { _X } from "../figma_app/260445";
import { p as _$$p } from "../905/427409";
import { v as _$$v, G as _$$G } from "../905/77111";
import { Gp } from "../figma_app/779179";
import { mc, vu, li, KH, r9, fE, I6, Nb, zm, wQ, jX, NH, AM, Ab, UU } from "../905/838262";
import { $$default } from "../svg/764361";
var u = c;
let x = forwardRef(function ({
  children: e,
  disabled: t,
  icons: r,
  iconLayout: i = "absolute",
  inputClassName: a,
  isActive: s,
  nonTextChild: o,
  noBorder: l,
  fullHeight: d,
  onMouseDownCapture: c,
  onContextMenuCapture: h,
  onFocus: m,
  onBlur: g,
  onKeyDown: f,
  recordingKey: E
}, y) {
  return jsxs(RecordableDiv, {
    forwardedRef: y,
    recordingKey: generateRecordingKey(E, "comboInputControl", "container"),
    className: u()(a, {
      [mc]: !0,
      [vu]: s,
      [li]: l,
      [KH]: !l,
      [r9]: t,
      [fE]: o
    }),
    onMouseDownCapture: c,
    onContextMenuCapture: h,
    onFocus: m,
    onBlur: g,
    onKeyDown: f,
    children: [jsx("div", {
      className: u()(I6, {
        [Nb]: d
      }),
      children: e
    }), !t && jsx("span", {
      className: u()(zm, {
        [wQ]: "absolute" === i
      }),
      children: r
    })]
  });
});
let $$N2 = forwardRef(function ({
  inputClassName: e,
  inputRef: t,
  currentFieldValue: r,
  recordingKey: a,
  disabled: s,
  children: o,
  hideIcon: l = !1,
  iconLayout: c = "absolute",
  nonTextChild: _,
  isActive: h,
  onPickerOpen: m,
  disableEntryPoint: g = !1,
  noBorder: f,
  fullHeight: y,
  hasBindingContextMenu: b,
  onClickDetachButton: v,
  onFocus: A,
  onBlur: N,
  handleClearOverride: C
}, w) {
  let L = useId();
  let P = useContext(_$$p);
  let D = P?.boundVariableId;
  let k = useRef(null);
  let {
    showing,
    show,
    data,
    hide
  } = BK(_$$v + L);
  let B = useCallback(() => {
    m ? m() : P?.showBindingUI(k.current, {
      currentFieldValue: r
    });
    hide();
  }, [r, hide, m, P]);
  let G = useCallback(() => {
    P?.onVariableSelected?.(void 0);
    hide();
    v?.();
  }, [hide, P, v]);
  let V = useHandleMouseEvent(generateRecordingKey(a, "detachIcon"), "click", G);
  let H = useHandleMouseEvent(a, "mousedown", e => {
    if (e && !g && e.shiftKey) {
      B();
      e.preventDefault();
      e.stopPropagation();
      return;
    }
  });
  let z = useHandleMouseEvent(a, "contextmenu", e => {
    e && !g && b && t?.current && (show({
      data: {
        position: {
          top: e.clientY,
          left: e.clientX
        }
      }
    }), e.preventDefault(), e.stopPropagation());
  });
  let W = [C && jsx(O, {
    handleClearOverride: C,
    recordingKey: generateRecordingKey(a, "clearOverrideButton")
  }, "clearOverrideButton"), !(l || g) && jsx(R, {
    boundVariableId: D,
    handleUnbind: V,
    handlePickerOpen: B,
    recordingKey: a
  }, "variableBindingButton")].filter(Boolean);
  return jsxs(Fragment, {
    children: [jsx(x, {
      ref: Ay(w, k),
      disabled: s,
      fullHeight: y,
      iconLayout: c,
      icons: W,
      inputClassName: u()(e, {
        [Gp]: W.length > 0 && "absolute" === c
      }),
      isActive: null != h ? h : !!P?.isShowingBindingUI,
      noBorder: f,
      nonTextChild: _,
      onBlur: N,
      onContextMenuCapture: z,
      onFocus: A,
      onMouseDownCapture: H,
      recordingKey: a,
      children: o
    }), b && t && showing && "number" == typeof data?.position?.top && "number" == typeof data?.position?.left && jsx(_$$G, {
      inputRef: t,
      isBound: !!P?.boundVariableId,
      left: data.position.left,
      onClose: hide,
      onOpenVariablePicker: B,
      onUnbindVariable: V,
      recordingKey: generateRecordingKey(a, "contextMenu"),
      top: data.position.top
    })]
  });
});
let $$C1 = memo(function ({
  fields: e,
  currentFieldValue: t,
  resolvedType: r,
  editingStyleGuid: i,
  inputClassName: a,
  inputRef: s,
  disabled: o,
  recordingKey: l,
  disableEntryPoint: d,
  hideIcon: c,
  noBorder: u,
  children: p,
  hasBindingContextMenu: _,
  fullHeight: h,
  onClickDetachButton: m,
  onBlur: g,
  onFocus: E
}) {
  let y = SG(e).data ?? [];
  return jsx(_X, {
    fields: e,
    resolvedType: r,
    editingStyleGuid: i,
    children: jsx($$N2, {
      currentFieldValue: t,
      disableEntryPoint: !!d || 0 === y.length,
      disabled: o,
      fullHeight: h,
      hasBindingContextMenu: _,
      hideIcon: c,
      inputClassName: a,
      inputRef: s,
      noBorder: u,
      onBlur: g,
      onClickDetachButton: m,
      onFocus: E,
      recordingKey: l,
      children: p
    })
  });
});
let $$w0 = forwardRef(function ({
  currentFieldValue: e,
  disabled: t,
  isActive: r,
  recordingKey: a,
  children: s,
  onPickerOpen: o,
  dataTestId: l,
  openOnRightClick: c,
  inputClassName: _,
  tooltip: h
}, m) {
  let f = useContext(_$$p);
  let E = useRef(null);
  let b = useCallback(() => {
    o ? o() : f?.showBindingUI(E.current, {
      currentFieldValue: e
    });
  }, [e, o, f]);
  let I = useHandleMouseEvent(a, "mousedown", e => {
    if (e && !t) {
      if (c) {
        if (_$$i(e)) {
          e.preventDefault();
          e.stopPropagation();
          return;
        }
        if (e.shiftKey && 1 & e.buttons) {
          b();
          e.preventDefault();
          e.stopPropagation();
          return;
        }
      } else if (1 & e.buttons) {
        b();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
    }
  });
  let S = useHandleMouseEvent(a, "contextmenu", e => {
    e && !t && (b(), e.preventDefault(), e.stopPropagation());
  });
  return jsx("div", {
    ref: Ay(m, E),
    className: u()(_, {
      [jX]: !0,
      [NH]: r && !_
    }),
    onMouseDownCapture: I,
    onContextMenu: S,
    "data-testid": l,
    "data-tooltip-type": h ? KindEnum.TEXT : void 0,
    "data-tooltip": h ?? void 0,
    children: s
  });
});
function O({
  handleClearOverride: e,
  recordingKey: t
}) {
  return jsx(IconButton, {
    "aria-label": getI18nString("variables.authoring_modal.table.clear_override"),
    actionOnPointerDown: !0,
    onClick: e,
    recordingKey: t,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("variables.authoring_modal.table.clear_override")
    },
    children: jsx(_$$m, {})
  }, "clearOverrideButton");
}
function R({
  boundVariableId: e,
  handleUnbind: t,
  handlePickerOpen: r,
  recordingKey: i
}) {
  return e ? jsx(ButtonPrimitive, {
    className: u()(AM, Ab),
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("variables.binding_ui.detach_variable_tooltip")
    },
    "aria-label": getI18nString("variables.binding_ui.detach_variable_tooltip"),
    onClick: t,
    children: jsx(_$$o, {})
  }) : jsx(ButtonPrimitive, {
    className: UU,
    htmlAttributes: {
      "data-tooltip-type": KindEnum.TEXT,
      "data-tooltip": getI18nString("fullscreen.properties_panel.apply_variable"),
      "data-test-id": generateRecordingKey("variable-control-icon", i ?? ""),
      tabIndex: -1
    },
    "aria-label": getI18nString("fullscreen.properties_panel.apply_variable"),
    onClick: r,
    recordingKey: generateRecordingKey(i, "comboBoxButton"),
    children: jsx(SvgComponent, {
      svg: $$default
    })
  });
}
export const JQ = $$w0;
export const sA = $$C1;
export const sJ = $$N2;