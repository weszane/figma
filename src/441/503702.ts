import { useMemo, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { g } from "../905/880308";
import { hU, ZI, EJ } from "../figma_app/934707";
import { gvX } from "../figma_app/43951";
export function $$u0(e = !1) {
  let t = useDispatch();
  let i = useMemo(() => g(), []);
  let c = Rs(gvX({
    cacheNonce: i
  }));
  useEffect(() => {
    if ("loaded" !== c.status) return;
    let i = oA(c.data.currentUser.notificationExperimentInfo);
    i && ("exp_notification_catfile" === i.experimentName || "exp_notification_catfic" === i.experimentName) && ("prompt_to_opt_in" === i.type ? t((e ? hU : ZI)({
      userId: i.userId,
      fileKey: i.fileKey,
      experimentName: i.experimentName,
      toastType: "prompt_to_opt_in"
    })) : t(EJ({
      userId: i.userId,
      fileKey: i.fileKey,
      preference: i.preference,
      experimentName: i.experimentName
    })));
  }, [t, c, e]);
}
export const W = $$u0;