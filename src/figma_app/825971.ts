import { D } from "../905/347702";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen } from "../figma_app/763686";
import { postUserFlag } from "../905/985254";
import { fullscreenValue } from "../figma_app/455680";
import { useIsFullscreenReady } from "../figma_app/115586";
import { selectUserFlag } from "../905/940356";
let c = D(() => fullscreenValue.fromFullscreen);
export function $$u0(e, t) {
  let r = useDispatch();
  let o = selectUserFlag(e);
  let u = useIsFullscreenReady();
  useEffect(() => {
    t?.current || o || !u || Fullscreen.setUsedPanAction(!1);
  }, [u, o, t]);
  useEffect(() => {
    if (!(o || t?.current)) {
      c().on("panActionMessageForOnboarding", n);
      return () => {
        c().removeListener("panActionMessageForOnboarding", n);
      };
    }
    function n() {
      r(postUserFlag({
        [e]: !0
      }));
    }
  }, [o, r, e, t]);
}
export const U = $$u0;