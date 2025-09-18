import { ServiceCategories as _$$e } from "../905/165054";
import { getSingletonSceneGraph } from "../905/700578";
import { reportError } from "../905/11";
import { formatSummaryText } from "../figma_app/274571";
export let $$n0;
class l {
  getSummaryAsClipboardText(e) {
    let t;
    let r = getSingletonSceneGraph().get(e);
    let n = r?.getWidgetSyncedState()["syncedState:ai-summary-items"];
    let l = r?.getWidgetSyncedState()["syncedState:summarized-at"];
    try {
      t = JSON.parse(n);
    } catch (e) {
      reportError(_$$e.AI_PRODUCTIVITY, Error(`Could not parse summary data, error: ${e}`));
    }
    return formatSummaryText(t, l);
  }
}
export function $$d1() {
  $$n0 = new l();
}
export const Vm = $$n0;
export const no = $$d1;