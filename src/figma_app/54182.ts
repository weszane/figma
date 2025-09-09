import { jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { EJ } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { $D } from "../figma_app/789";
import { _6 } from "../figma_app/386952";
import { selectCurrentUser } from "../905/372672";
import { q } from "../905/495564";
import { e6 } from "../905/557142";
import { QB } from "../figma_app/707808";
import { Ib } from "../905/129884";
import { cJ } from "../905/561485";
import { c as _$$c, M } from "../905/57178";
function g(e, t, r) {
  let n = EJ(e, 25);
  let i = r ? function (e) {
    switch (e) {
      case e6.OWNER:
        return " (owner)";
      case e6.ADMIN:
        return " (admin)";
      default:
        return "";
    }
  }(r) : "";
  return t ? getI18nString("avatar.tooltip.current_user_handle", {
    handle: n,
    roleName: i
  }) : getI18nString("avatar.tooltip.other_user_handle", {
    handle: n,
    roleName: i
  });
}
export function $$f0(e) {
  let t = selectCurrentUser();
  let r = useSelector(e => e.multiplayer);
  let a = q();
  let s = cJ();
  let u = "user" in e ? `user-${e.user.id}` : `role-${e.role.id}`;
  let f = "user" in e ? e.user : e.role.user;
  let E = !1;
  let y = "sessionId" in f && f.sessionId === r.sessionID;
  let b = r.allUsers.find(e => e.userID === f.id);
  let T = s ? b?.sitesViewState : void 0;
  t ? E = f.id === t.id : "sessionId" in f && (E = y);
  let I = "role" in e ? g(f.handle, E, e.role.level) : g(f.handle, E);
  let S = function (e) {
    let t = selectCurrentUser();
    return function (e) {
      let {
        localUser,
        tooltipUser,
        multiplayer,
        isInWorkshop,
        selectedView
      } = e;
      let s = tooltipUser.id?.includes("VISITOR-") || !tooltipUser.id;
      let o = -1 !== multiplayer.sessionID;
      let l = "sessionId" in tooltipUser && tooltipUser.sessionId === multiplayer.sessionID;
      let d = "sessionId" in tooltipUser && tooltipUser.sessionId === multiplayer.presenterSessionID;
      let c = "sessionId" in tooltipUser && multiplayer.observingSessionID === tooltipUser.sessionId;
      return !o || QB(selectedView) ? s ? _$$c.NONE : _$$c.VIEW_PROFILE : l ? s || !localUser ? isInWorkshop ? _$$c.EDIT_NAME : _$$c.NONE : d ? _$$c.STOP_PRESENTING : _$$c.NONE : d && !c ? _$$c.FOLLOW_PRESENTER : c ? _$$c.STOP_OBSERVE : _$$c.START_OBSERVE;
    }({
      localUser: t,
      tooltipUser: e,
      multiplayer: useSelector(e => e.multiplayer),
      isInWorkshop: $D(),
      selectedView: _6()
    });
  }(f);
  let v = `/files${a}/user/${f.id}`;
  return jsx("div", {
    "data-tooltip": M,
    "data-tooltip-click-action": S,
    "data-tooltip-interactive": !0,
    "data-tooltip-max-width": 300,
    "data-tooltip-offset-y": e.tooltipOffsetY ?? 8,
    "data-tooltip-timeout-delay": 150,
    "data-tooltip-type": Ib.SPECIAL,
    "data-tooltip-user-handle": I,
    "data-tooltip-user-profile-url": v,
    "data-tooltip-user-session-id": "sessionId" in f ? f.sessionId : void 0,
    "data-tooltip-user-view-state": T,
    id: e.id,
    style: {
      display: "inherit"
    },
    children: e.children
  }, `avatar-${u}`);
}
export const W = $$f0;