import { useSelector } from "react-redux";
import { resourceUtils } from "../905/989992";
import { ui } from "../905/941249";
import { VP, aF } from "../905/18797";
import { OL, _M } from "../figma_app/869776";
export function $$l0(e) {
  let t = useSelector(e => e.loadingState);
  let r = useSelector(e => e.teamJoinLinks);
  return !function (e, t, r) {
    let a = !VP(t, OL(e)) && !aF(t, OL(e)) && !r;
    return VP(t, OL(e)) || VP(t, ui.loadingKeyForPayload({
      teamId: e
    })) || VP(t, _M(e)) || a;
  }(e, t, r) ? resourceUtils.loaded(r?.url) : resourceUtils.loading();
}
export const S = $$l0;
