import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { T } from "../905/880327";
import { am, ut } from "../4452/575555";
import { to } from "../905/156213";
if (443 == require.j) {}
export function $$o0(e, t, a, o, d, c) {
  let u = wA();
  return useCallback(() => {
    void 0 !== t && (e === am.MEMBERS && t.team.org_id ? u(to({
      type: T(),
      data: {
        teamId: t.team.id,
        notifyOnSuccess: !0,
        initialView: 0
      }
    })) : u(to({
      type: ut,
      data: {
        tab: e,
        teamSettingsProps: t,
        canAdmin: a,
        canEdit: o,
        canView: d,
        entryView: c
      }
    })));
  }, [t, e, u, a, o, d, c]);
}
export const n = $$o0;