import { zU } from "../figma_app/740025";
import { canMemberOrg } from "../figma_app/642025";
import { PublicModelType, ModelTypeConfigs, SpaceAccessType } from "../figma_app/162807";
import { FileType } from "../figma_app/756995";
export function $$o0(e, t, i) {
  let n = [e];
  i || (n = [e, PublicModelType.PUBLIC_PLUGINS, PublicModelType.PRIVATE_PLUGINS]);
  return ModelTypeConfigs[t].modelTypes.filter(e => !n.includes(e));
}
export function $$l2(e, t) {
  let i = /[^\p{L}\p{Nd}\p{S}]+/gu;
  let n = i.exec(e);
  let r = 0;
  let a = [];
  for (; null !== n;) {
    a.push([e.substring(r, n.index + n[0].length), 0]);
    r = n.index + n[0].length;
    n = i.exec(e);
  }
  r < e.length && a.push([e.substring(r, e.length), 0]);
  t.toLowerCase().split(/[\p{Z}\p{P}]/u).filter(e => "" !== e).forEach(e => {
    for (let t = 0; t < a.length; t++) {
      let [i, n] = a[t];
      if (0 === n && i.toLowerCase().startsWith(e)) {
        a[t] = [i, e.length];
        break;
      }
    }
  });
  return a;
}
export function $$d1(e, t, i) {
  let o = new URLSearchParams(e);
  let l = o.get("q");
  let d = o.get("model_type");
  let c = parseInt(o.get("file_type") ?? "", 10);
  let u = FileType.ANY;
  isNaN(c) || (u = c);
  let p = SpaceAccessType.PERSONAL;
  zU(i) ? p = SpaceAccessType.COMMUNITY : t.currentUserOrgId && (p = canMemberOrg(t.currentUserOrgId, t) ? SpaceAccessType.ORG : SpaceAccessType.ORG_GUEST);
  return {
    query: l,
    searchModelType: d,
    searchScope: p,
    fileFilter: u
  };
}
export const L4 = $$o0;
export const jr = $$d1;
export const mV = $$l2;