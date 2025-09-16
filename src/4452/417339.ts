import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { selectViewAction } from "../905/929976";
import { TeamCanView } from "../figma_app/43951";
export function $$o0(e) {
  let t = useSubscription(TeamCanView, {
    id: e ?? ""
  }, {
    enabled: !!e
  });
  let a = useDispatch();
  useLayoutEffect(() => {
    "loaded" !== t.status || t.data.team || a(selectViewAction({
      view: "recentsAndSharing"
    }));
  }, [t, a]);
}
export function $$d1(e) {
  let t = useSubscription(TeamCanView, {
    id: e ?? ""
  }, {
    enabled: !!e
  });
  let a = useDispatch();
  useLayoutEffect(() => {
    "loaded" !== t.status || t.data.team?.hasPermission || a(selectViewAction({
      view: "recentsAndSharing"
    }));
  }, [t, a]);
}
export const r = $$o0;
export const w = $$d1;