import { useEffect } from "react";
import { d4 } from "../vendor/514228";
import { QOV } from "../figma_app/763686";
import { ZC } from "../figma_app/39751";
import { p8 } from "../figma_app/722362";
import { vD } from "../figma_app/889655";
import { LC } from "../figma_app/318590";
import { JT } from "../figma_app/632248";
import { KY } from "../figma_app/322845";
export function $$p0() {
  let e = d4(vD);
  let t = ZC(e);
  let i = p8("activeUserAction");
  let p = LC();
  useEffect(() => {
    (e !== t && t || ![QOV.DEFAULT, QOV.CLICKING_TO_CHANGE_SELECTION].includes(i)) && KY({
      actionToClear: JT.FIND_INSPIRATION
    });
  }, [e, i, t, p]);
}
export const K = $$p0;