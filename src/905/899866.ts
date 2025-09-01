import { useRef, useEffect, useCallback } from "react";
import { Osy } from "../figma_app/763686";
import { dI } from "../905/871411";
import { GP } from "../figma_app/15927";
import { debugState } from "../905/407919";
import { ds, GS } from "../figma_app/314264";
import { E3 } from "../figma_app/385874";
export function $$c2(e, t) {
  let i = useRef(e);
  i.current = e;
  useEffect(() => {
    (function (e, t) {
      let i = debugState.getState();
      let n = m(e, i);
      ds("paint_picker_open", i.openFile?.key, i, {
        node_ids: n,
        paintPickerSessionId: t,
        metadata: JSON.stringify(e)
      });
    })(i.current, t);
  }, [t]);
  return useCallback((e) => {
    (function (e, t) {
      let i = debugState.getState();
      ds("paint_picker_select", i.openFile?.key, i, {
        paintPickerSessionId: e,
        paintType: t
      });
    })(t, e);
  }, [t]);
}
export function $$u1(e, t) {
  let i = debugState.getState();
  let n = m(e, i);
  let r = "raw";
  e.colorVar && (r = "variable");
  ds("paint_picker_close", i.openFile?.key, i, {
    paintPickerSessionId: t,
    selection_type: r,
    metadata: JSON.stringify(e)
  });
  GS("paint.set", i.openFile?.key ?? "", i, {
    nodeIds: n.toString(),
    paint_picker_session_id: t,
    metadata: JSON.stringify(e),
    selection_type: r
  });
}
export function $$p0(e, t) {
  let i = debugState.getState();
  let n = Object.keys(i.mirror.sceneGraphSelection);
  ds("paint_picker_close", i.openFile?.key, i, {
    paintPickerSessionId: t,
    metadata: JSON.stringify(e),
    selection_type: "style"
  });
  GS("paint.set", i.openFile?.key ?? "", i, {
    nodeIds: n.toString(),
    metadata: JSON.stringify(e),
    selection_type: "style"
  });
}
function m(e, t) {
  let i = Object.keys(t.mirror.sceneGraphSelection);
  let n = t.mirror.selectedStyleProperties.guid;
  n ? i = [dI(n)] : i.length > 1 && !E3(e.type) && (i = Osy.getConsumingPaints(GP(e)));
  return i;
}
export const T7 = $$p0;
export const d9 = $$u1;
export const rW = $$c2;