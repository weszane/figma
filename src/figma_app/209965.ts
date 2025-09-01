import { ServiceCategories as _$$e } from "../905/165054";
import { UN } from "../905/700578";
import { $D } from "../905/11";
import { Aq } from "../figma_app/274571";
export let $$n0;
class l {
  getSummaryAsClipboardText(e) {
    let t;
    let r = UN().get(e);
    let n = r?.getWidgetSyncedState()["syncedState:ai-summary-items"];
    let l = r?.getWidgetSyncedState()["syncedState:summarized-at"];
    try {
      t = JSON.parse(n);
    } catch (e) {
      $D(_$$e.AI_PRODUCTIVITY, Error(`Could not parse summary data, error: ${e}`));
    }
    return Aq(t, l);
  }
}
export function $$d1() {
  $$n0 = new l();
}
export const Vm = $$n0;
export const no = $$d1;