import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef } from "react";
import { EventShield } from "../905/821217";
import { E } from "../905/632989";
import o from "classnames";
import { generateRecordingKey } from "../figma_app/878298";
import { oO, Ad, Y9 } from "../figma_app/811257";
import { SN, zC, _f, nr, HQ, ez, tv, dO, S5, fH, RO, LV, x4, ox, Ap, zD, zX, Y1, UC, kI } from "../905/982943";
var l = o;
export let $$p0 = forwardRef((e, t) => {
  let i = [];
  e.firstIconButton && i.push(jsx("div", {
    className: l()(SN, {
      [zC]: !e.visible || e.selected
    }),
    children: e.firstIconButton
  }));
  e.secondIconButton && i.push(e.secondIconButton);
  let r = jsx(EventShield, {
    eventListeners: ["onFocus"],
    display: "contents",
    children: jsxs(E, {
      className: l()(_f, {
        [nr]: e.selected && !e.hasFocus,
        [HQ]: e.selected && e.hasFocus
      }),
      recordingKey: generateRecordingKey(e.recordingKey, "rowPropertyInput"),
      onClick: e.onPreviewClick,
      actionOnPointerDown: !0,
      children: [jsx("div", {
        className: l()(ez, {
          [tv]: e.selected && !e.previewActive,
          [dO]: e.isStyleRow && e.isPaintStyleRow,
          [S5]: e.isStyleRow && e.isTextStyleRow
        }),
        children: e.previewElement
      }), jsxs("div", {
        className: fH,
        children: [jsx("div", {
          className: l()(RO, {
            [LV]: e.variableBound,
            [x4]: !e.visible
          }),
          children: e.propertyName
        }), jsx("div", {
          className: l()(ox, {
            [Ap]: !e.visible
          }),
          children: (e.propertyValues || []).join(" \xb7 ")
        })]
      })]
    })
  });
  let o = i.length > 0 ? jsx(oO, {
    appendedClassName: zD,
    input: r,
    children: i
  }) : jsx(Ad, {
    appendedClassName: zX,
    input: r,
    label: null
  });
  return e.isStyleRow ? o : jsx(Y9, {
    ref: t,
    containerClassName: l()(Y1, {
      [UC]: !e.dragging
    }),
    dragging: e.dragging,
    grabberClassName: kI,
    onFocus: e.onRowFocus,
    onMouseDown: e.onMouseDown,
    onMouseMove: e.onMouseMove,
    onMouseUp: e.onMouseUp,
    recordingKey: e.recordingKey,
    selected: e.selected && e.hasFocus,
    singletonRow: e.singletonRow,
    children: o
  });
});
export const C = $$p0;