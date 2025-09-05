import { useState, useMemo, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { throwTypeError } from "../figma_app/465776";
import { Rs } from "../figma_app/288654";
import { oA } from "../905/723791";
import { t } from "../905/303541";
import { F } from "../905/302958";
import { d as _$$d } from "../4452/230712";
import { to } from "../905/156213";
import { FAccessRequestStatusType } from "../figma_app/191312";
import { XPZ } from "../figma_app/43951";
import { T5 } from "../figma_app/465071";
if (443 == require.j) {}
if (443 == require.j) {}
let g = e => {
  switch (e) {
    case FAccessRequestStatusType.APPROVED:
      return t("resource_connection.visual_bell.already_approved");
    case FAccessRequestStatusType.DENIED:
      return t("resource_connection.visual_bell.already_denied");
    case FAccessRequestStatusType.REVOKED:
      return t("resource_connection.visual_bell.already_revoked");
    case FAccessRequestStatusType.PENDING:
      return;
    default:
      throwTypeError(e);
  }
};
export function $$h0(e) {
  var t;
  let [a, r] = useState((t = e || "", /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(t)) ? e : void 0);
  let o = useDispatch();
  let h = T5("useOpenResourceConnectionReviewModal").unwrapOr(null);
  let x = Rs(XPZ, {
    resourceConnectionInviteId: a
  }, {
    enabled: !!a
  });
  let f = useMemo(() => {
    let e = oA(x.data?.resourceConnectionInvite);
    return e && {
      resourceConnectionInvite: {
        ...e,
        resourceName: e.projectLimitedInfo?.name || "",
        hostInviter: {
          name: e.hostInviterPublic?.name || "",
          imgUrl: e.hostInviterPublic?.userPublicImgUrl || null
        },
        hostPlan: {
          name: e.hostPlanName,
          imgUrl: e.hostPlanImageUrl,
          type: e.hostPlanType
        },
        connectingPlan: {
          name: e.connectingPlanName,
          type: e.connectingPlanType
        }
      }
    };
  }, [x]);
  return useCallback(() => {
    if (a && f && h && f?.resourceConnectionInvite.connectingPlanId === h.key.parentId) {
      if (f?.resourceConnectionInvite.status === FAccessRequestStatusType.PENDING) o(to({
        type: _$$d,
        data: f
      }));else {
        let e = g(f?.resourceConnectionInvite.status);
        e && o(F.enqueue({
          message: e
        }));
      }
      r(void 0);
    }
  }, [f, o, h, a]);
}
export const Z = $$h0;