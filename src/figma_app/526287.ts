import { createOptimistThunk } from "../905/350402";
import { recentCustomTemplatePutAll } from "../905/775228";
import { templateService } from "../figma_app/446378";
export function $$s0(e = {}, t) {
  if (recentCustomTemplatePutAll.matches(t)) {
    let r = {
      ...e
    };
    for (let n of t.payload) r[n.file_key] = {
      ...e[n.file_key],
      ...n
    };
    return r;
  }
  return e;
}
export let $$o1 = createOptimistThunk(async (e, {
  fileKey: t
}) => {
  let r = e.getState();
  let n = r.currentUserOrgId;
  let s = r.currentTeamId;
  if (t in r.recentCustomTemplates || !n && !s) return;
  let o = await templateService.getRecents({
    fileKeys: t,
    ...(n ? {
      orgId: n
    } : s ? {
      teamId: s
    } : {})
  });
  o && o.data.meta.templates.length > 0 && e.dispatch(recentCustomTemplatePutAll([o.data.meta.templates[0]]));
});
export const A = $$s0;
export const Y = $$o1;