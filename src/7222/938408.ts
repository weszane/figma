import { useCallback } from "react";
import { l as _$$l } from "../905/716947";
import { bj } from "../905/420347";
import { ZA, Nf } from "../figma_app/633080";
import { _ as _$$_ } from "../905/381235";
if (443 == require.j) {}
export function $$i0(e) {
  let {
    library,
    status
  } = function (e) {
    let t = bj([e]);
    return {
      library: 1 === t.data.length && t.data[0] && ZA(t.data[0]) ? t.data[0] : null,
      status: t.status
    };
  }(e ?? _$$l(""));
  let i = library && Nf(library);
  let {
    subscribe
  } = _$$_(i ? library : null);
  return useCallback(() => {
    "loaded" === status && subscribe();
  }, [status, subscribe]);
}
export const D = $$i0;