import { useLayoutEffect } from "react";
import { wA } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { sf } from "../905/929976";
import { Bl3 } from "../figma_app/43951";
export function $$o0(e) {
  let t = Rs(Bl3, {
    id: e ?? ""
  }, {
    enabled: !!e
  });
  let a = wA();
  useLayoutEffect(() => {
    "loaded" !== t.status || t.data.team || a(sf({
      view: "recentsAndSharing"
    }));
  }, [t, a]);
}
export function $$d1(e) {
  let t = Rs(Bl3, {
    id: e ?? ""
  }, {
    enabled: !!e
  });
  let a = wA();
  useLayoutEffect(() => {
    "loaded" !== t.status || t.data.team?.hasPermission || a(sf({
      view: "recentsAndSharing"
    }));
  }, [t, a]);
}
export const r = $$o0;
export const w = $$d1;