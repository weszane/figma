import { jsx } from "react/jsx-runtime";
import { d4 } from "../vendor/514228";
import { Tf } from "../figma_app/543100";
import { Pc } from "../905/372672";
import { Mz } from "../vendor/925040";
import { W } from "../905/244810";
let l = e => e.activeFileUsers;
let d = e => Mz(l, t => t[e] || {});
export function $$u0(e) {
  let t = Tf.getFileOrSelectedBranchKey(e.tile) || "";
  let i = Pc();
  let o = Object.values(d4(d(t)));
  return o.length ? jsx(W, {
    entityList: o,
    maxNumHeads: 3,
    currentUser: i,
    overlapped: !0
  }) : null;
}
export const V = $$u0;