import { useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { permissionScopeHandler } from "../905/189185";
import { Point } from "../905/736624";
import { FU, b$, Bs } from "../figma_app/933328";
import { fullscreenValue } from "../figma_app/455680";
import { v9 } from "../figma_app/383828";
import { PW } from "../figma_app/633080";
import { $A } from "../905/862883";
import { r as _$$r } from "../905/632622";
import { S } from "../905/459477";
import { A as _$$A } from "../905/456912";
export function $$g0({
  alwaysSwap: e,
  canSwap: t,
  insertAsChildOfCanvas: i,
  itemsToSwap: g,
  openFileKey: f,
  onSwap: _,
  sourceForTracking: A,
  insertLogArgsOverride: y,
  insertionCallback: b
}) {
  let v = useDispatch();
  let I = useSelector(e => e.mirror.sceneGraphSelection);
  let E = _$$A();
  let x = S.useOpenFileProperties();
  return useCallback((n, r, m) => {
    let h = n.altKey;
    if ((e || h && E) && r.type !== PW.MODULE) {
      t && permissionScopeHandler.user("swap-instance", () => v9(r, v, f, g || Object.keys(I), A, !e && h, x, m));
      _?.(r);
    } else {
      _$$r();
      let e = fullscreenValue.getViewportInfo();
      let t = {
        canvasPosition: {
          x: e.offsetX,
          y: e.offsetY
        },
        insertAsChildOfCanvas: i ?? !1,
        percentageOffset: new Point(.5, .5),
        storeInRecentsKey: $A.Design,
        useSmartPositioning: !0
      };
      r.type === PW.COMPONENT ? v(FU({
        item: r,
        ...t,
        insertionCallback: b,
        insertLogArgsOverride: y
      })) : r.type === PW.STATE_GROUP ? v(b$({
        item: r,
        ...t,
        insertionCallback: b,
        insertLogArgsOverride: y
      })) : r.type === PW.MODULE && v(Bs({
        item: r,
        ...t,
        insertLogArgsOverride: y,
        insertionCallback: () => fullscreenValue.triggerAction("commit")
      }));
    }
  }, [e, t, v, i, y, b, g, _, x, f, I, E, A]);
}
export const u = $$g0;