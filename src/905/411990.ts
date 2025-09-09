import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { T } from "../905/880327";
import { showModalHandler } from "../905/156213";
import { Z5 } from "../figma_app/297957";
import { FOrganizationLevelType } from "../figma_app/191312";
import { S2 } from "../figma_app/465071";
import { e as _$$e2 } from "../905/86132";
export function $$m0() {
  let e = useDispatch();
  let t = Z5();
  let i = S2();
  let m = i.data?.type;
  return useCallback(n => {
    let {
      canAdmin,
      prepopulatedEmail,
      ...u
    } = n;
    "loaded" === i.status && m || reportError(_$$e.SCALE, Error("loading" === i.status ? "Tried to open team invite modal while plan is loading" : "Tried to open team invite modal but plan type failed to load"), {
      extra: n
    });
    m === FOrganizationLevelType.TEAM && t({
      isPlanAdmin: canAdmin
    }) ? e(showModalHandler({
      type: _$$e2(),
      data: {
        planType: m,
        prepopulatedEmail
      }
    })) : e(showModalHandler({
      type: T(),
      data: {
        teamId: u.teamId,
        notifyOnSuccess: !0,
        prepopulateEmail: prepopulatedEmail,
        initialView: u.initialView
      }
    }));
  }, [m, t, e, i.status]);
}
export const s = $$m0;
