import { useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback } from "../905/723791";
import { generateUUIDv4 } from "../905/871474";
import { hU, ZI, EJ } from "../figma_app/934707";
import { NotificationExperimentInfoView } from "../figma_app/43951";
export function $$u0(e = !1) {
  let t = useDispatch<AppDispatch>();
  let i = useMemo(() => generateUUIDv4(), []);
  let c = useSubscription(NotificationExperimentInfoView({
    cacheNonce: i
  }));
  useEffect(() => {
    if ("loaded" !== c.status) return;
    let i = getResourceDataOrFallback(c.data.currentUser.notificationExperimentInfo);
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
