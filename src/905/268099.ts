import { jsxs, jsx } from "react/jsx-runtime";
import { e as _$$e } from "../905/295932";
import a from "classnames";
import { AT } from "../905/672745";
import { Badge, BadgeColor } from "../figma_app/919079";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { W } from "../905/95038";
import { x } from "../905/98916";
import { KindEnum } from "../905/129884";
import { e0, rm, Ps } from "../905/989969";
var s = a;
export function $$g0(e) {
  let t = x(e.folderId).data;
  let i = void 0 !== e.canEdit && !e.canEdit;
  let a = AT(e.folderId);
  let g = a.data ? a.data[0] : void 0;
  return jsxs("button", {
    className: e.checked ? e0 : rm,
    "aria-pressed": e.checked,
    onClick: e.onSelect,
    disabled: i || e.canDisableForConnectedProject && (e.isConnectedProject || e.hasPendingConnectionInvite),
    "data-tooltip-type": KindEnum.TEXT,
    "data-tooltip": (() => {
      if (i) return getI18nString("file_browser.file_move.you_dont_have_edit_access_to_this_project");
      if (e.canDisableForConnectedProject) {
        if (e.isConnectedProject) return getI18nString("resource_connection.project_is_already_connected");
        if (e.hasPendingConnectionInvite) return getI18nString("resource_connection.project_has_pending_connection_invite");
      }
    })(),
    "data-tooltip-show-above": !0,
    "data-tooltip-timeout-delay": 100,
    "data-tooltip-max-width": 250,
    children: [jsx(_$$e, {
      className: _$$s.p8.mr4.minW24.minH24.colorIcon.$
    }), jsxs("div", {
      className: _$$s.alignLeft.minW0.mr6.$,
      children: [jsxs("div", {
        className: _$$s.flex.alignCenter.gap6.$,
        children: [jsx("div", {
          className: _$$s.ellipsis.noWrap.overflowHidden.$,
          children: e.folderName
        }), e.isCurrentFolder ? jsx(Badge, {
          color: BadgeColor.INFORMATIONAL,
          text: getI18nString("file_browser.file_move.current_location"),
          className: _$$s.eventsNone.flexShrink0.$
        }) : e.isConnectedProject && g ? jsx("div", {
          className: _$$s.eventsNone.flex.alignCenter.gap4.$,
          children: jsx(W, {
            hostPlanName: g.hostPlanName,
            connectedPlanName: g.connectedPlanName
          })
        }) : null]
      }), jsxs("span", {
        className: s()(_$$s.colorTextSecondary.$, _$$s.noWrap.flex.pre.$),
        children: [e.teamName && jsx("div", {
          className: Ps,
          children: e.teamName
        }), e.teamName && " \xb7 ", renderI18nText("file_browser.file_move.file_count", {
          fileCount: e.fileCount ?? t
        })]
      })]
    })]
  });
}
export const o = $$g0;