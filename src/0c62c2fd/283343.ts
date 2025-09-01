import { d4 } from "../vendor/514228";
import { Qw } from "../905/989992";
import { ui } from "../905/941249";
import { VP, aF } from "../905/18797";
import { OL, _M } from "../figma_app/869776";
export function $$l0(e) {
  let t = d4(e => e.loadingState);
  let r = d4(e => e.teamJoinLinks);
  return !function (e, t, r) {
    let a = !VP(t, OL(e)) && !aF(t, OL(e)) && !r;
    return VP(t, OL(e)) || VP(t, ui.loadingKeyForPayload({
      teamId: e
    })) || VP(t, _M(e)) || a;
  }(e, t, r) ? Qw.loaded(r?.url) : Qw.loading();
}
export const S = $$l0;