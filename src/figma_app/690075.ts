import { formatList } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { cV } from "../figma_app/740025";
export function $$s2(e, t, r) {
  if (0 === e.length) return "";
  if (1 === e.length) return r(e[0]);
  let a = e.slice(0, t - 1);
  let s = e.slice(t - 1);
  0 === s.length && (s = [a[a.length - 1]], a = a.slice(0, a.length - 1));
  let o = 1 === s.length ? r(s[0]) : getI18nString("community.resource.by_x_others", {
    numPublishers: s.length
  });
  let l = a.map(r);
  o && l.push(o);
  return formatList(l);
}
export function $$o1(e) {
  let t = cV(e);
  if (t) return t.name;
  let r = e.community_publishers.accepted;
  return $$s2(r, r.length, e => e.name);
}
export function $$l0(e) {
  let t = e.community_publishers.accepted;
  e.community_publishers.pending && (t = t.concat(e.community_publishers.pending));
  return t.reduce((e, t) => {
    let r = t.associated_users?.map(e => e.user_id) || [];
    t.primary_user_id && e.push(t.primary_user_id);
    return e.concat(r);
  }, []);
}
export const D = $$l0;
export const VH = $$o1;
export const eg = $$s2;