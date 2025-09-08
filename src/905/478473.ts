import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import a from "classnames";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { $ } from "../905/355181";
import { E as _$$E } from "../905/984674";
import { qD } from "../figma_app/471982";
import { showModalHandler } from "../905/156213";
import { a as _$$a } from "../figma_app/453187";
import { XL } from "../figma_app/684168";
import { Ib } from "../905/129884";
import { S } from "../905/404161";
import { pF, Vj, xo, tW, bv, sw } from "../905/427932";
import { A as _$$A } from "../6828/718668";
import { A as _$$A2 } from "../5724/191519";
var s = a;
export function $$v0({
  tooltipText: e
}) {
  return jsxs("div", {
    className: pF,
    "data-tooltip": e,
    "data-tooltip-type": Ib.TEXT,
    "data-testid": "disabled-text",
    children: [jsx("div", {
      className: Vj,
      children: getI18nString("community.try.unavailable")
    }), jsx(B, {
      svg: _$$A2,
      svgClassName: xo
    })]
  });
}
function I(e) {
  let {
    workspace,
    isWidget,
    hasPendingRequest,
    extension
  } = e;
  if (workspace.isFigJamDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.figjam_disabled_by_your_org", {
      orgName: workspace.workspaceName
    })
  });
  if (workspace.isSlidesDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.slides_disabled_by_admins")
  });
  if (workspace.isSitesDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.sites_disabled_by_admins")
  });
  if (workspace.isCooperDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.buzz_disabled_by_admins")
  });
  if (workspace.isFigmakeDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.figmake_disabled_by_admins")
  });
  if (workspace.isDsePresetsDisabled) return jsx($$v0, {
    tooltipText: getI18nString("community.try.presets_disabled_by_admins")
  });
  if (workspace.isDisabledDueToECC) return jsx($$v0, {
    tooltipText: getI18nString("community.try.externally_restricted")
  });
  if (workspace.isPlanLocked) return jsx($$v0, {
    tooltipText: getI18nString("plan_picker.locked_plan_tooltip")
  });
  if (!workspace.draftFolderId) return jsx($$v0, {
    tooltipText: getI18nString("plan_picker.limited_access_tooltip")
  });
  if (workspace.publicPluginsOrWidgetDisabled) {
    if (hasPendingRequest) return jsx("div", {
      className: _$$s.mlAuto.$,
      children: jsx(_$$E, {
        fontSize: 11,
        color: "secondary",
        children: renderI18nText("community.try.pick_workspace.approval_pending")
      })
    });
    if (!XL({
      workspace,
      hasPendingRequest,
      extension
    })) {
      let e = function ({
        workspace: e,
        isWidget: t,
        extension: i
      }) {
        return i?.roles.org ? t ? getI18nString("community.try.org_private_widget_request_disabled") : getI18nString("community.try.org_private_plugin_request_disabled") : t ? getI18nString("community.try.widget_requests_disabled_by_your_org", {
          orgName: e.workspaceName
        }) : getI18nString("community.try.plugin_requests_disabled_by_your_org", {
          orgName: e.workspaceName
        });
      }({
        workspace,
        isWidget,
        extension
      });
      return jsx("div", {
        className: _$$s.mlAuto.$,
        children: jsx($, {
          disabled: !0,
          "data-tooltip": e,
          "data-tooltip-type": Ib.TEXT,
          children: renderI18nText("community.try.pick_workspace.request_approval")
        })
      });
    }
    return jsx("div", {
      className: _$$s.mlAuto.$,
      children: jsx($, {
        children: renderI18nText("community.try.pick_workspace.request_approval")
      })
    });
  }
  return jsx(B, {
    className: _$$s.pl16.pr16.mlAuto.colorIcon.$,
    svg: _$$A,
    dataTestId: "chevron-right"
  });
}
function E({
  onClick: e,
  workspace: t,
  disabled: i,
  rowIcon: r,
  Avatar: a
}) {
  return jsxs("button", {
    className: tW,
    onClick: i => {
      i.stopPropagation();
      e(t);
    },
    disabled: i,
    children: [jsx("div", {
      className: s()({
        [_$$s.ml8.mr8.$]: !0,
        [_$$s.opacity0_5.$]: i
      }),
      children: jsx(a, {
        name: t.workspaceName,
        userId: t.userId,
        orgId: t.orgId
      })
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.itemsStart.mr8.$,
      children: [jsx("div", {
        className: bv,
        children: jsx(_$$E, {
          fontSize: 13,
          color: "default",
          children: t.workspaceName
        })
      }), t.user ? jsx(_$$E, {
        fontSize: 11,
        color: "secondary",
        children: t.user.email
      }) : null]
    }), r]
  });
}
function x(e) {
  return jsx(E, {
    workspace: e.workspace,
    disabled: !1,
    onClick: e.onClick,
    rowIcon: jsx(B, {
      className: _$$s.pl16.pr16.mlAuto.colorIcon.$,
      svg: _$$A,
      dataTestId: "chevron-right"
    }),
    Avatar: e.Avatar
  });
}
export function $$S1(e) {
  let {
    workspace,
    Avatar,
    isWidget,
    extension,
    rowIcon
  } = e;
  let l = useDispatch();
  let d = _$$a(workspace.orgId, extension?.id);
  let c = e => {
    if (!extension) return;
    let t = qD(extension);
    let i = {
      extension: {
        pluginId: t.plugin_id,
        iconUrl: t.redirect_icon_url,
        name: t.name
      },
      isWidget: !!isWidget,
      orgId: e.orgId ?? "",
      workspaceDetails: void 0,
      openedFrom: "community",
      fullscreenEditorType: null
    };
    l(showModalHandler({
      type: S,
      data: i
    }));
  };
  let u = XL({
    workspace,
    hasPendingRequest: d,
    extension
  });
  let f = void 0 !== e.disabled ? e.disabled : workspace.isFigJamDisabled || workspace.isDisabledDueToECC || workspace.publicPluginsOrWidgetDisabled && !u || workspace.isDsePresetsDisabled || workspace.isSlidesDisabled || workspace.isSitesDisabled || workspace.isCooperDisabled || workspace.isFigmakeDisabled || !workspace.draftFolderId || workspace.isPlanLocked;
  return jsx(E, {
    workspace,
    disabled: !!f,
    onClick: function (t) {
      return u ? c(t) : e.onClick(t, "plan_picker");
    },
    rowIcon: void 0 !== rowIcon ? rowIcon : jsx(I, {
      workspace,
      isWidget: !!isWidget,
      hasPendingRequest: d,
      extension
    }),
    Avatar
  });
}
export function $$w2(e) {
  let {
    workspaces,
    extension,
    isWidget,
    Avatar,
    onClick
  } = e;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.alignCenter.$,
      children: "manage_allowlist" === e.mode ? jsx(_$$E, {
        fontWeight: "medium",
        fontSize: 20,
        color: "default",
        children: renderI18nText("community.allowlist.choose_an_organization")
      }) : jsx(_$$E, {
        fontWeight: "medium",
        fontSize: 20,
        color: "default",
        children: renderI18nText("community.using.pick_workspace.title")
      })
    }), jsx("div", {
      className: _$$s.alignCenter.pt6.$,
      children: "manage_allowlist" === e.mode ? jsx(_$$E, {
        fontSize: 13,
        color: "default",
        children: renderI18nText("community.allowlist.select_the_organization_you_would_like")
      }) : jsx(_$$E, {
        fontSize: 13,
        color: "default",
        children: renderI18nText("community.try.pick_workspace.subtitle")
      })
    }), jsx("div", {
      className: sw,
      children: workspaces.map(t => "manage_allowlist" === e.mode ? jsx(x, {
        workspace: t,
        onClick,
        Avatar
      }, t.orgId ?? t.teamId ?? "") : jsx($$S1, {
        workspace: t,
        onClick,
        extension,
        isWidget,
        Avatar
      }, t.orgId ?? t.teamId ?? ""))
    })]
  });
}
export const Ct = $$v0;
export const MA = $$S1;
export const oT = $$w2;