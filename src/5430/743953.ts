import { createOptimistThunk } from "../905/350402";
import { vr } from "../figma_app/49598";
import { XHR } from "../905/910117";
import { U, xQ } from "../figma_app/45218";
let n = createOptimistThunk((e, {
  pluginId: t,
  isWidget: r
}) => XHR.post(`/api/${r ? "widgets" : "plugins"}/${t}/view`, {
  pluginId: t
}));
export function $$a0(e, t) {
  e(U(t) ? vr({
    hubFileId: t.id
  }) : n({
    pluginId: t.id,
    isWidget: xQ(t)
  }));
}
export const S = $$a0;