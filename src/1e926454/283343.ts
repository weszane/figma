import { useSelector } from "react-redux";
import { resourceUtils } from "../905/989992";
import { ui } from "../905/941249";
import { isLoading, isFailure } from "../905/18797";
import { OL, _M } from "../figma_app/869776";
export function $$o0(e) {
  let n = useSelector(e => e.loadingState);
  let t = useSelector(e => e.teamJoinLinks);
  return !function (e, n, t) {
    let i = !isLoading(n, OL(e)) && !isFailure(n, OL(e)) && !t;
    return isLoading(n, OL(e)) || isLoading(n, ui.loadingKeyForPayload({
      teamId: e
    })) || isLoading(n, _M(e)) || i;
  }(e, n, t) ? resourceUtils.loaded(t?.url) : resourceUtils.loading();
}
export const S = $$o0;