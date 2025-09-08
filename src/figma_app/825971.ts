import { D } from "../905/347702";
import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { Fullscreen } from "../figma_app/763686";
import { b } from "../905/985254";
import { fullscreenValue } from "../figma_app/455680";
import { g } from "../figma_app/115586";
import { f } from "../905/940356";
let c = D(() => fullscreenValue.fromFullscreen);
export function $$u0(e, t) {
  let r = useDispatch();
  let o = f(e);
  let u = g();
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
      r(b({
        [e]: !0
      }));
    }
  }, [o, r, e, t]);
}
export const U = $$u0;