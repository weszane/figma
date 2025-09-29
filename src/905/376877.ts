import { requestOrgAccountTypeAction } from "../figma_app/990058";
import { DeepLinkType } from "../905/15667";
import { requestUpgrade } from "../905/584989";
import { ProductAccessTypeMap } from "../905/513035";
import { FOrganizationLevelType } from "../figma_app/191312";
export async function $$l0({
  dispatch: e,
  fileKey: t,
  folderId: i,
  plan: l,
  seatType: d
}) {
  return await new Promise((c, u) => {
    if (l.key.type === FOrganizationLevelType.ORG) {
      let a = l.key.parentId;
      e(requestOrgAccountTypeAction({
        orgId: a,
        entryPoint: DeepLinkType.NUX,
        licenseType: ProductAccessTypeMap[d],
        seatTypeKey: d,
        fileKey: t ?? void 0,
        onError: () => u(Error("Error requesting upgrade for org")),
        onSuccess: e => {
          c(e);
        },
        suppressVisualBell: !0,
        folderId: i ?? void 0
      }));
    } else {
      let n = l.key.parentId;
      e(requestUpgrade({
        teamId: n,
        entryPoint: DeepLinkType.NUX,
        licenseType: ProductAccessTypeMap[d],
        seatTypeKey: d,
        fileKey: t ?? void 0,
        onError: () => u(Error("Error requesting upgrade for team")),
        onSuccess: e => {
          c(e);
        },
        hideSuccessMessage: !0,
        folderId: i ?? void 0
      }));
    }
  });
}
export const b = $$l0;