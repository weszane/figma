import { D } from "../905/347702";
import { useEffect } from "react";
import { wA } from "../vendor/514228";
import { glU } from "../figma_app/763686";
import { b } from "../905/985254";
import { Y5 } from "../figma_app/455680";
import { g as _$$g } from "../figma_app/115586";
import { f } from "../905/940356";
let c = D(() => Y5.fromFullscreen);
export function $$u0(e, t) {
  let r = wA();
  let o = f(e);
  let u = _$$g();
  useEffect(() => {
    t?.current || o || !u || glU.setUsedZoomAction(!1);
  }, [u, o, t]);
  useEffect(() => {
    if (!(o || t?.current)) {
      c().on("zoomActionMessageForOnboarding", n);
      return () => {
        c().removeListener("zoomActionMessageForOnboarding", n);
      };
    }
    function n() {
      r(b({
        [e]: !0
      }));
    }
  }, [o, r, e, t]);
}
export const g = $$u0;