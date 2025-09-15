import { jsx } from "react/jsx-runtime";
import { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EventShield } from "../905/821217";
import { J } from "../905/614223";
import { useAtomWithSubscription } from "../figma_app/27355";
import { s as _$$s } from "../cssbuilder/589278";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { RCSMessageType } from "../905/135526";
import { openFileKeyAtom, openFileTeamIdAtom } from "../figma_app/516028";
import { Q } from "../905/717951";
export function $$g0(e) {
  let {
    isShowing,
    testId
  } = e;
  let g = useDispatch();
  let f = useSelector(e => e?.selectedView?.view === "fullscreen" && !e.mirror.appModel.showUi);
  let _ = useAtomWithSubscription(openFileKeyAtom);
  let A = useAtomWithSubscription(openFileTeamIdAtom);
  let y = useMemo(() => _ ? {
    fileTeamId: A,
    fileKey: _
  } : void 0, [_, A]);
  useEffect(() => {
    isShowing && e.userFlagOnShow && g(postUserFlag({
      [e.userFlagOnShow]: !0
    }));
  }, [g, e.userFlagOnShow, isShowing]);
  return isShowing ? jsx(Q, {
    dataFullscreenIntercept: e.dataFullscreenIntercept,
    children: jsx(TrackingProvider, {
      name: "Onboarding Sequence",
      properties: y,
      trackingTargets: RCSMessageType.NONE,
      ignoreParent: !0,
      children: jsx(EventShield, {
        eventListeners: ["onClick"],
        children: jsx(J, {
          brand: e.forceEditorTheme,
          children: jsx("div", {
            "data-testid": testId,
            className: _$$s.$$if(f, _$$s.invisible).$,
            children: e.children
          })
        })
      })
    })
  }) : null;
}
export const M = $$g0;