import { jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { renderI18nText } from "../905/303541";
import { W } from "../5430/573261";
import { _ as _$$_ } from "../905/456042";
import { I } from "../5132/515990";
import { Vm } from "../figma_app/427318";
import { to } from "../905/156213";
import { Cu } from "../figma_app/314264";
import { Tm } from "../figma_app/740025";
import { iZ } from "../905/372672";
import { I0, xQ } from "../figma_app/45218";
import { Ib } from "../905/129884";
export function $$x0({
  resource: e,
  viewContext: t
}) {
  let r = useDispatch();
  let x = iZ();
  let f = I();
  let y = Object.values(useSelector(e => Tm(e))).filter(t => I0(e) && t.plugins_whitelist_enforced || xQ(e) && t.widgets_whitelist_enforced);
  let g = (e, t) => {
    r(to({
      type: W(),
      data: {
        extensionId: e.id,
        orgId: t,
        extensionType: I0(e) ? "plugin" : "widget",
        isAllowed: !1,
        resource: f ? e : void 0,
        source: "community"
      }
    }));
  };
  return jsx("button", {
    className: "approve_button--buttonContainer--lDvpx cta_button--buttonBase--xMT0c text--fontNeg14--ARPWl text--_fontBase--QdLsd text--_negText--j9g-L",
    onClick: () => {
      if (Cu({
        viewContext: t,
        resourceId: e.id,
        resourceType: Vm(e),
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
      r(to({
        type: _$$_,
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
    "data-tooltip-type": Ib.TEXT,
    children: renderI18nText("community.plugins.approve_ellipsis")
  });
}
export const s = $$x0;