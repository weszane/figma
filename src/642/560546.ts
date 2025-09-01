import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useState, useRef, useCallback, useMemo } from "react";
import { d4, wA } from "../vendor/514228";
import { o as _$$o } from "../905/821217";
import { m1T } from "../figma_app/763686";
import { dI } from "../905/805904";
import { E as _$$E } from "../905/277716";
import { Point } from "../905/736624";
import { e as _$$e, v as _$$v } from "../642/135773";
import { o as _$$o2 } from "../905/96108";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { u1, XE } from "../figma_app/91703";
import { TI } from "../905/713722";
import { Y5 } from "../figma_app/455680";
import { hS, gl } from "../905/216495";
import { bn, sb } from "../figma_app/385874";
import { u as _$$u } from "../figma_app/852050";
import { cn } from "../905/959568";
import { zi } from "../905/824449";
import { C as _$$C } from "../642/180963";
import { jj, Gc, Mg, NQ } from "../figma_app/952764";
import { pg, GY } from "../figma_app/78309";
import { jP, Ph } from "../figma_app/998161";
import { lQ } from "../905/934246";
import { E as _$$E2 } from "../905/632989";
import { O as _$$O } from "../905/969533";
import M from "classnames";
import { Pt } from "../figma_app/806412";
import { So } from "../figma_app/580959";
import { oE, $$in } from "../figma_app/887835";
let a = memo(function (e) {
  return jsx("svg", {
    width: "16",
    height: "16",
    fill: "none",
    viewBox: "0 0 16 16",
    ...e,
    children: jsx("path", {
      fill: "var(--color-icon)",
      fillRule: "evenodd",
      d: "M2.486 5.143a1 1 0 0 0 0 1.715L4.39 8 2.486 9.143a1 1 0 0 0 0 1.715l4.485 2.69a2 2 0 0 0 2.058 0l4.486-2.69a1 1 0 0 0 0-1.715L11.61 8l1.905-1.142a1 1 0 0 0 0-1.715L9.029 2.45a2 2 0 0 0-2.058 0zM9.666 8l.973-.583 1.39-.834L13 6l-.972-.583-3.514-2.108a1 1 0 0 0-1.028 0L3.972 5.417 3 6l.972.583 1.39.834.971.583 1.152.691a1 1 0 0 0 1.03 0zm-4.304.583 1.609.966a2 2 0 0 0 2.058 0l1.61-.966 1.39.834L13 10l-.972.583-3.514 2.108a1 1 0 0 1-1.028 0l-3.514-2.108L3 10l.972-.583z",
      clipRule: "evenodd"
    })
  });
});
var A = M;
function O({
  paint: e,
  onColorChange: t,
  openColorPicker: s,
  closeColorPicker: i,
  isPickerOpen: l,
  icon: a,
  recordingKey: o
}) {
  let [d, c] = useState(!1);
  let u = useRef(null);
  let p = () => {
    l ? (i(), u.current?.blur()) : (s(), u.current?.focus(), u.current?.select());
  };
  return jsxs("div", {
    className: A()(oE, {
      [$$in]: d
    }),
    children: [jsx(D, {
      onClick: p,
      recordingKey: Pt(o, "chit"),
      "aria-label": _$$t("slides.properties_panel.color_picker.open.aria_label"),
      children: a
    }), jsx(So, {
      focusableRef: u,
      noBorderOnFocus: !0,
      onBlur: () => c(!1),
      onColorChange: e => {
        t(e);
        i();
      },
      onFocus: () => {
        c(!0);
        s();
      },
      onMouseDown: e => {
        e.stopPropagation();
        d && i();
      },
      onTypeMouseDown: lQ,
      paint: e,
      recordingKey: o,
      visible: !0
    }), jsx(D, {
      onClick: p,
      recordingKey: Pt(o, "chevron"),
      children: jsx(_$$O, {})
    })]
  });
}
function D({
  onClick: e,
  recordingKey: t,
  children: s,
  ...n
}) {
  return jsx(_$$E2, {
    className: _$$s.hFull.px4.bgTransparent.$,
    onClick: t => {
      t.stopPropagation();
      t.preventDefault();
      e();
    },
    actionOnPointerDown: !0,
    recordingKey: t,
    "aria-label": n["aria-label"],
    children: s
  });
}
export function $$F0({
  paint: e,
  onChange: t,
  inheritStyleKey: s,
  inheritStyleName: l,
  inheritStyleId: a,
  pickerId: d,
  inheritStyleKeyField: c,
  hideCustomColorPickerFillTypeToggle: p,
  recordingKey: h
}) {
  let m = d4(e => e.pickerShown && e.pickerShown.id === d ? e.pickerShown : null);
  let g = useRef(null);
  let x = !!e && hS(e) && bn(e.type);
  let {
    openColorPicker,
    closeColorPicker
  } = function (e, t, s, r, l) {
    let a = wA();
    let d = d4(e => e.mirror.appModel.activeCanvasEditModeType);
    let c = jj(e);
    return {
      openColorPicker: useCallback(() => {
        if (!s) {
          if (r.current) {
            let {
              x,
              y
            } = cn(r.current, l ? jP : pg);
            a(u1({
              id: t,
              initialX: x - 16,
              initialY: y
            }));
            c();
          } else console.error("rowRef.current is null");
        }
      }, [t, s, a, r, l, c]),
      closeColorPicker: useCallback(() => {
        d === m1T.GRADIENT && Y5.triggerAction("leave-edit-mode");
        a(XE());
      }, [a, d])
    };
  }(e, d, m, g, x);
  return jsxs(Fragment, {
    children: [jsx("span", {
      ref: g,
      children: jsx(B, {
        paint: e,
        onChange: t,
        inheritStyleKey: s,
        inheritStyleName: l,
        inheritStyleId: a,
        isPickerOpen: !!m,
        openColorPicker,
        closeColorPicker,
        recordingKey: h
      })
    }), m && e && (x ? jsx(Ph, {
      paint: e,
      onChange: t,
      onClose: closeColorPicker,
      initialPosition: new Point(m.initialX, m.initialY),
      enableGradients: !0,
      hideCustomColorPickerFillTypeToggle: p,
      inheritStyleKeyField: c
    }) : jsx(GY, {
      paint: e,
      onChange: t,
      onClose: closeColorPicker,
      pickerShown: m,
      hideCustomColorPickerFillTypeToggle: p,
      inheritStyleKeyField: c
    }))]
  });
}
function B({
  paint: e,
  onChange: t,
  inheritStyleKey: s,
  inheritStyleName: i,
  inheritStyleId: o,
  isPickerOpen: u,
  openColorPicker: f,
  closeColorPicker: y,
  recordingKey: C
}) {
  let j = Gc();
  let w = !!e && hS(e) && bn(e.type);
  let T = !!e && hS(e) && sb(e.type);
  let N = Mg("FILL", s, o);
  let I = _$$e(e);
  let E = (() => {
    if (gl(e)) return null;
    let t = e?.colorVar?.value?.alias;
    return t ? dI(t) : null;
  })();
  let M = () => gl(e) || gl(i) ? _$$t("fullscreen.mixed") : i || (j ? _$$t("slides.properties_panel.color_picker.multiple") : w ? _$$t("slides.properties_panel.fill.fill_type_gradient") : TI.format(I[0]));
  let A = useMemo(() => j ? jsx(a, {}) : N ? jsx(zi, {
    dsStyle: N,
    disableTooltip: !0
  }) : jsx(_$$v, {
    colors: I,
    paint: e,
    forceNonInteractive: !0
  }), [j, N, I, e]);
  let P = useCallback(() => {
    u ? y() : f();
  }, [u, y, f]);
  let L = !j && T && !e.colorVar && !N;
  return jsx(_$$E, {
    name: "slides_color_input",
    children: L ? jsx(O, {
      paint: e,
      onColorChange: e => t(NQ(e)),
      openColorPicker: f,
      closeColorPicker: y,
      isPickerOpen: u,
      icon: A,
      recordingKey: C
    }) : jsx(_$$o, {
      eventListeners: ["onMouseDown"],
      children: jsx(_$$C, {
        isOpen: u,
        onClick: P,
        recordingKey: C,
        "aria-label": _$$t("slides.properties_panel.color_picker.open.aria_label"),
        children: jsxs("span", {
          className: _$$s.pl4.inlineFlex.gap6.overflowHidden.$,
          children: [A, !i && E ? jsx(K, {
            variableId: E,
            fallbackText: M()
          }) : jsx(_$$o2, {
            text: M()
          })]
        })
      })
    })
  });
}
function K({
  variableId: e,
  fallbackText: t
}) {
  let s = _$$u(e);
  return jsx(_$$o2, {
    lastClassName: _$$s.overflowHidden.noWrap.ellipsis.$,
    text: s?.name ?? t
  });
}
export const u = $$F0;