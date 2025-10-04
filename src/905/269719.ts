import { jsx, Fragment } from "react/jsx-runtime";
import { useRelativeTime } from "../905/986103";
export function $$a0(e) {
  let t = e.getDateFromGenericTile(e.tile);
  let i = useRelativeTime(t);
  return jsx(Fragment, {
    children: i ?? "--"
  });
}
export const M = $$a0;