import { useSelector } from "react-redux";
import { getUserId } from "../905/372672";
export function $$a0() {
  let e = getUserId();
  let t = useSelector(t => e ? t.authedUsers.byId[e]?.plans : null);
  let i = {};
  t?.forEach(e => {
    e.is_org || (i[e.plan_id] = {
      id: e.plan_id,
      name: e.name,
      img_url: e.img_url
    });
  });
  return i;
}
export const x = $$a0;