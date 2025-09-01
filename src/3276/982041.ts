import { jsx } from "react/jsx-runtime";
import { tx } from "../905/303541";
export function $$i0({
  count: e
}) {
  let t;
  t = e < 10 ? 60 : e < 100 ? 68 : 72;
  return jsx("div", {
    style: {
      minWidth: t,
      display: "flex",
      justifyContent: "center"
    },
    children: tx("collaboration.spotlight.bell.presenter.follower_count", {
      followerCount: e
    })
  });
}
export const s = $$i0;