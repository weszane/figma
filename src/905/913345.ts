import { ex } from "../905/524523";
import { jsx } from "react/jsx-runtime";
import { s } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
export let $$s0 = ex("approved_library_tooltip", function (e) {
  let {
    orgName,
    workspaceName,
    isWorkspaceToggleDisabled
  } = e;
  function o({
    resourceName: e
  }) {
    return jsx("span", {
      className: s.alignTop.inlineBlock.truncate.$,
      style: {
        maxWidth: 154
      },
      children: e
    });
  }
  return isWorkspaceToggleDisabled ? jsx("div", {
    className: s.alignCenter.$,
    children: renderI18nText("resources_tab.approved_libraries.library_already_approved_by_org_admin", {
      orgName: jsx(o, {
        resourceName: orgName
      })
    })
  }) : jsx("div", {
    className: s.alignCenter.$,
    children: orgName ? renderI18nText("resources_tab.approved_libraries.library_approved_by_org_admin", {
      orgName: jsx(o, {
        resourceName: orgName
      })
    }) : renderI18nText("resources_tab.approved_libraries.library_approved_by_workspace_admin", {
      workspaceName: jsx(o, {
        resourceName: workspaceName
      })
    })
  });
}, e => ({
  workspaceName: e.getAttribute("data-tooltip-workspace-name") || "",
  orgName: e.getAttribute("data-tooltip-org-name") || "",
  isWorkspaceToggleDisabled: "true" === e.getAttribute("data-tooltip-is-workspace-toggle-disabled")
}));
export const A = $$s0;