import { createOptimistThunk } from "../905/350402";
import { vr } from "../figma_app/49598";
import { XHR } from "../905/910117";
import { hasClientMeta, isWidget } from "../figma_app/45218";
let n = createOptimistThunk((e, {
  pluginId: t,
  isWidget: r
}) => XHR.post(`/api/${r ? "widgets" : "plugins"}/${t}/view`, {
  pluginId: t
}));
export function $$a0(e, t) {
  e(hasClientMeta(t) ? vr({
    hubFileId: t.id
  }) : n({
    pluginId: t.id,
    isWidget: isWidget(t)
  }));
}
export const S = $$a0;