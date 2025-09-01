import { nF } from "../905/350402";
import { D } from "../905/775228";
import { q } from "../figma_app/446378";
export function $$s0(e = {}, t) {
  if (D.matches(t)) {
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
export let $$o1 = nF(async (e, {
  fileKey: t
}) => {
  let r = e.getState();
  let n = r.currentUserOrgId;
  let s = r.currentTeamId;
  if (t in r.recentCustomTemplates || !n && !s) return;
  let o = await q.getRecents({
    fileKeys: t,
    ...(n ? {
      orgId: n
    } : s ? {
      teamId: s
    } : {})
  });
  o && o.data.meta.templates.length > 0 && e.dispatch(D([o.data.meta.templates[0]]));
});
export const A = $$s0;
export const Y = $$o1;