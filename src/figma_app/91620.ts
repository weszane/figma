import { useSelector } from "../vendor/514228";
import { useAtomWithSubscription } from "../figma_app/27355";
import { ow } from "../figma_app/976749";
import { VF } from "../figma_app/864723";
import { useFullscreenReady } from "../905/924253";
import { aV } from "../figma_app/722362";
import { iZ } from "../905/372672";
import { L } from "../905/453756";
import { g as _$$g } from "../figma_app/391708";
import { z } from "../figma_app/849005";
export function $$$$_0() {
  let e = useSelector(e => e.mirror?.appModel.showUi);
  let t = ow() && e;
  let r = L();
  let _ = aV();
  let h = iZ();
  let m = useAtomWithSubscription(VF);
  let g = useFullscreenReady();
  let f = useSelector(e => e.mirror?.appModel.isReadOnly);
  let E = z();
  let y = _$$g();
  return r ? t && !_ && g && (!h || m) : t && (!f || E || y);
}
export const _ = $$$$_0;