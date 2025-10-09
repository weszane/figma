import { jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { renderI18nText } from "../905/303541";
import { W } from "../5430/573261";
import { WorkspaceSelectorModal } from "../905/456042";
import { isResourceHubLightboxRdp } from "../5132/515990";
import { getResourceType } from "../figma_app/427318";
import { showModalHandler } from "../905/156213";
import { logAndTrackCTA } from "../figma_app/314264";
import { getOrgAdminAccess } from "../figma_app/740025";
import { selectCurrentUser } from "../905/372672";
import { isPlugin, isWidget } from "../figma_app/45218";
import { KindEnum } from "../905/129884";
export function $$x0({
  resource: e,
  viewContext: t
}) {
  let r = useDispatch<AppDispatch>();
  let x = selectCurrentUser();
  let f = isResourceHubLightboxRdp();
  let y = Object.values(useSelector(e => getOrgAdminAccess(e))).filter(t => isPlugin(e) && t.plugins_whitelist_enforced || isWidget(e) && t.widgets_whitelist_enforced);
  let g = (e, t) => {
    r(showModalHandler({
      type: W(),
      data: {
        extensionId: e.id,
        orgId: t,
        extensionType: isPlugin(e) ? "plugin" : "widget",
        isAllowed: !1,
        resource: f ? e : void 0,
        source: "community"
      }
    }));
  };
  return jsx("button", {
    className: "approve_button--buttonContainer--lDvpx cta_button--buttonBase--xMT0c text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L",
    onClick: () => {
      if (logAndTrackCTA({
        viewContext: t,
        resourceId: e.id,
        resourceType: getResourceType(e),
        allowlistOrgs: y.length
      }, "approve-button-clicked"), 1 === y.length) {
        g(e, y[0].id);
        return;
      }
      if (!x) return;
      let s = y.map(e => ({
        orgId: e.id,
        workspaceName: e.name,
        user: x,
        userId: x?.id || ""
      }));
      r(showModalHandler({
        type: WorkspaceSelectorModal,
        data: {
          payload: {
            extension: e,
            workspaces: s,
            onSelectWorkspace: t => {
              g(e, t.orgId);
            },
            mode: "manage_allowlist"
          }
        }
      }));
    },
    "data-testid": "approve-button",
    "data-onboarding-key": "approve-button",
    "data-tooltip-type": KindEnum.TEXT,
    children: renderI18nText("community.plugins.approve_ellipsis")
  });
}
export const s = $$x0;
