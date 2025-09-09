import { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserActionState } from "../figma_app/763686";
import { useLatestRef } from "../figma_app/922077";
import { p8 } from "../figma_app/722362";
import { vD } from "../figma_app/889655";
import { LC } from "../figma_app/318590";
import { JT } from "../figma_app/632248";
import { KY } from "../figma_app/322845";
export function $$p0() {
  let e = useSelector(vD);
  let t = useLatestRef(e);
  let i = p8("activeUserAction");
  let p = LC();
  useEffect(() => {
    (e !== t && t || ![UserActionState.DEFAULT, UserActionState.CLICKING_TO_CHANGE_SELECTION].includes(i)) && KY({
      actionToClear: JT.FIND_INSPIRATION
    });
  }, [e, i, t, p]);
}
export const K = $$p0;