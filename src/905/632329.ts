import { jsx } from "react/jsx-runtime";
import { useHandleMouseEvent } from "../figma_app/878298";
export function $$$$a0(e) {
  let t;
  let i = useHandleMouseEvent(e.recordingKey, "ondragstart", t => {
    e.onDragStart?.(t);
  });
  let a = useHandleMouseEvent(e.recordingKey, "ondragend", t => {
    e.onDragEnd?.(t);
  });
  let s = useHandleMouseEvent(e.recordingKey, "ondragover", t => {
    e.onDragOver?.(t);
  });
  let o = useHandleMouseEvent(e.recordingKey, "mousedown", t => {
    e.onClick?.(t);
  });
  let l = useHandleMouseEvent(e.recordingKey, "dblclick", t => {
    e.onDoubleClick?.(t);
  });
  let {
    selected,
    children,
    className,
    pillRef
  } = e;
  return (t = className || (selected ? "pill--pillSelected--mwWRM pill--pill--yeLll" : "pill--pillDeselected--3YkmX pill--pill--yeLll"), e.href) ? jsx("a", {
    ref: pillRef || null,
    className: t,
    dir: "auto",
    draggable: e.draggable,
    href: e.href,
    onClick: e => {
      e.preventDefault();
      o(e);
    },
    onDoubleClick: l,
    onDragEnd: a,
    onDragOver: s,
    onDragStart: i,
    children
  }) : jsx("span", {
    draggable: e.draggable,
    onDragStart: i,
    onDragEnd: a,
    onDragOver: s,
    onClick: o,
    onDoubleClick: l,
    className: t,
    ref: pillRef || null,
    dir: "auto",
    children
  });
}
export const a = $$$$a0;