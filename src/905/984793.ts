import { jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useCallback, useMemo } from "react";
import { qE } from "../figma_app/492908";
import { i as _$$i } from "../905/97346";
import { getFeatureFlags } from "../905/601108";
import { Xr, useAtomValueAndSetter } from "../figma_app/27355";
import d from "classnames";
import { parsePxNumber } from "../figma_app/783094";
import { Zu, $y, Jy } from "../905/708651";
import { y } from "../905/871724";
import { X } from "../905/456000";
import { U3, SG } from "../905/101482";
var c = d;
let f = "variables_spreadsheet--hasPadding--teQJ7";
let _ = "variables_spreadsheet--verticalResize--O8tU-";
let $$A2 = forwardRef(function ({
  children: e,
  gridColumnSizes: t,
  style: i
}, r) {
  return jsx(Zu, {
    ref: r,
    className: "variables_spreadsheet--root--m6SQ8",
    gridColumnSizes: t,
    stickyTop: !0,
    stickyLeft: !0,
    style: i,
    children: e
  });
});
let $$y7 = forwardRef(function ({
  "data-index": e,
  "data-testid": t,
  children: i,
  className: r,
  isHeader: a = !1,
  isSelected: s = !1,
  onContextMenu: o,
  onMouseDown: l,
  onMouseUp: d,
  style: u,
  onFocus: h
}, g) {
  return jsx($y, {
    ref: g,
    className: c()({
      "variables_spreadsheet--row--kDRcv": !0,
      "variables_spreadsheet--header--5zFMo": a,
      "variables_spreadsheet--selected--Ys6-N": s,
      selected: s
    }, r),
    style: u,
    "data-index": e,
    "data-testid": t,
    onMouseDown: l,
    onMouseUp: d,
    onContextMenu: o,
    onFocus: h,
    children: jsx(y, {
      isSelected: s,
      children: i
    })
  });
});
function b() {
  let e = Xr(X);
  return [() => {
    e(e => ({
      ...e,
      isResizing: !0
    }));
  }, () => {
    e(e => ({
      ...e,
      isResizing: !1
    }));
  }];
}
export function $$v0() {
  let [e, t] = useAtomValueAndSetter(X);
  let i = useRef(0);
  let [d, c] = b();
  let [, p] = _$$i({
    onDragStart() {
      d();
      i.current = e.nameColumnWidth ?? parsePxNumber(U3);
    },
    onDrag(e) {
      let n = qE(i.current + e.delta.x, 50, 500);
      t(e => ({
        ...e,
        nameColumnWidth: n
      }));
    },
    onDragEnd() {
      c();
    }
  });
  let m = useCallback(() => {
    t(e => ({
      ...e,
      nameColumnWidth: void 0
    }));
  }, [t]);
  return getFeatureFlags().ds_variables_modal_resize ? jsx("div", {
    ...p({
      className: _
    }),
    onDoubleClick: m
  }) : null;
}
export function $$I1({
  modeID: e
}) {
  let [t, i] = useAtomValueAndSetter(X);
  let d = useRef(0);
  let [c, p] = b();
  let [, m] = _$$i({
    onDragStart() {
      c();
      d.current = t.valueColumnWidths.get(e) ?? parsePxNumber(SG);
    },
    onDrag(t) {
      i(i => {
        let n = new Map(i.valueColumnWidths);
        let r = qE(d.current + t.delta.x, 50, 500);
        n.set(e, r);
        return {
          ...i,
          valueColumnWidths: n
        };
      });
    },
    onDragEnd() {
      p();
    }
  });
  let f = useCallback(() => {
    i(t => {
      let i = new Map(t.valueColumnWidths);
      i.$$delete(e);
      return {
        ...t,
        valueColumnWidths: i
      };
    });
  }, [e, i]);
  return getFeatureFlags().ds_variables_modal_resize ? jsx("div", {
    ...m({
      className: _
    }),
    onDoubleClick: f
  }) : null;
}
let $$E4 = forwardRef(function (e, t) {
  let i = useMemo(() => ({
    position: "sticky",
    right: 0,
    zIndex: 100
  }), []);
  return jsx($$x3, {
    ...e,
    ref: t,
    style: i
  });
});
let $$x3 = forwardRef(function ({
  children: e,
  style: t,
  hasPadding: i = !0,
  disabled: r = !1,
  onDoubleClick: a,
  onContextMenu: s,
  noBorderOnFocus: l = !1,
  "data-testid": d,
  "data-mode-id": u,
  "data-mode-selectable": m,
  onClick: h,
  onMouseDown: g,
  draggable: _,
  onDragStart: A,
  onDragOver: y,
  onDrop: b
}, v) {
  return jsx(Jy, {
    ref: v,
    className: c()({
      "variables_spreadsheet--cell--6pPKK": !0,
      "variables_spreadsheet--cellOverflowHidden--IywWB": !getFeatureFlags().ds_variables_modal_resize,
      [f]: i,
      "variables_spreadsheet--disabled--itTpj": r,
      "variables_spreadsheet--cellFocusBorder--gWxtr variables_modal_value_input--inputCellFocus--vj5GD": !l
    }),
    "data-mode-id": u,
    "data-mode-selectable": m,
    "data-testid": d,
    draggable: _,
    onClick: h,
    onContextMenu: s,
    onDoubleClick: r ? void 0 : a ?? void 0,
    onDragOver: y,
    onDragStart: A,
    onDrop: b,
    onMouseDown: g,
    style: t,
    children: e
  });
});
let $$S6 = forwardRef(function ({
  children: e,
  style: t,
  "data-index": i,
  hasPadding: r = !0
}, a) {
  return jsx("tr", {
    ref: a,
    className: "variables_spreadsheet--fullWidthRow--Xp54Q",
    style: t,
    "data-index": i,
    children: jsx("td", {
      className: c()({
        "variables_spreadsheet--fullWidthCell--aQpVo": !0,
        [f]: r
      }),
      children: e
    })
  });
});
let $$w5 = forwardRef(function ({
  top: e
}, t) {
  return jsx("tr", {
    className: "variables_spreadsheet--divider--oA75e",
    style: {
      transform: `translateY(${e}px)`
    },
    ref: t
  });
});
export const uM = $$v0;
export const Mz = $$I1;
export const SS = $$A2;
export const Ar = $$x3;
export const v6 = $$E4;
export const N0 = $$w5;
export const $4 = $$S6;
export const GC = $$y7;