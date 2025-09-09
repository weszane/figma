import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { N } from "../905/7587";
import { A as _$$A } from "../905/410311";
import o from "classnames";
import { B } from "../905/714743";
import { e6 } from "../figma_app/617427";
import { getI18nString } from "../905/303541";
import { nl, Pf } from "../905/590952";
import { lx } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { getPermissionLevelName } from "../figma_app/12796";
import { useCurrentPlanUser, useIsAdminUser } from "../figma_app/465071";
import { AccessLevelEnum } from "../905/557142";
import { ShareAction } from "../figma_app/707808";
import { Ib } from "../905/129884";
import { HU } from "../figma_app/926061";
import { o as _$$o } from "../905/382697";
import { zn, H, $S, NE, UU, yR, iA, QW, qD, mL, C1 as _$$C, e0, my, dz, dT, kk, f1, Zk } from "../905/372455";
import { A as _$$A2 } from "../svg/443105";
var l = o;
export function $$x2(e) {
  let t;
  let i = "level-change-dropdown";
  let s = useDispatch();
  let o = _$$o();
  let p = lx()({
    rolePending: e.pending,
    inviteBillableProductKey: e.invite?.billableProductKey,
    editorType: e.editorType,
    filePlanKey: e.filePlanKey,
    userNeedsUpgrade: e.userNeedsUpgrade,
    hasEditRole: e.level >= AccessLevelEnum.EDITOR
  });
  let x = useCurrentPlanUser("UserRowBase");
  let S = useIsAdminUser(x).unwrapOr(!1);
  let C = p && e.level === AccessLevelEnum.EDITOR;
  let T = e.virtualRowItem ? {
    position: "absolute",
    top: e.virtualRowItem.start,
    left: 0,
    right: 0
  } : void 0;
  return jsxs("div", {
    className: zn,
    style: T,
    "data-testid": "role-row",
    children: [jsx("div", {
      className: H,
      children: jsx($$w3, {
        user: e.user,
        id: e.id,
        pending: e.pending
      })
    }), jsxs("div", {
      className: $S,
      children: [jsx("div", {
        className: e.pending ? NE : UU,
        children: e.userName
      }, `name-${e.id}`), p && S ? jsxs(e6, {
        trackingProperties: {
          trackingDescriptor: _$$c.UPGRADE_SEAT
        },
        className: yR,
        onClick: () => {
          e.setSelectedRoleToUpdateSeat && e.setSelectedRoleToUpdateSeat();
          o(ShareAction.UPDATE_SEAT);
        },
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": getI18nString("role_row.upgrade_seat.tooltip"),
        "data-tooltip-timeout-delay": 50,
        "aria-label": getI18nString("role_row.upgrade_seat"),
        children: [jsxs("span", {
          className: iA,
          children: [jsx(B, {
            className: QW,
            svg: _$$A2
          }), jsx(N, {
            className: qD
          })]
        }), getI18nString("role_row.upgrade_seat")]
      }) : jsxs(Fragment, {
        children: [e.warningMessage && jsx(B, {
          className: QW,
          svg: _$$A2,
          "data-tooltip-timeout-delay": 50,
          "data-tooltip-type": Ib.TEXT,
          "data-tooltip": e.warningMessage,
          "aria-label": e.warningMessage
        }), e.warningTooltipId && jsx(B, {
          className: QW,
          svg: _$$A2,
          "data-tooltip-type": Ib.SPECIAL,
          "data-tooltip": e.warningTooltipId,
          "data-tooltip-timeout-delay": 50,
          "data-tooltip-interactive": !0,
          "aria-label": e.warningTooltipText
        })]
      }), (t = e.getRoleOptions(), (C && t && (t = t.map(t => "option" === t.type && t.key === e.level ? {
        ...t,
        selectedLabelClass: mL
      } : t)), t) ? jsx(HU, {
        dispatch: s,
        onChange: e.onChangeLevel,
        options: t,
        id: i,
        value: e.level,
        dropdownShown: e.dropdownShown,
        dropdownData: {
          dropdownId: e.id
        },
        isOpen: !!(e.dropdownShown && e.dropdownShown.type === i && e.dropdownShown.data.dropdownId === e.id)
      }) : e.isPrototypeRole && e.level === AccessLevelEnum.VIEW_PROTOTYPES ? jsx("span", {
        className: _$$C,
        children: getI18nString("permissions.level_name.can_view")
      }) : jsx("span", {
        className: l()(_$$C, C && mL),
        children: getPermissionLevelName(e.level, e.isBranchFile)
      }))]
    })]
  });
}
export function $$S0(e) {
  let {
    user,
    plan
  } = e;
  return jsxs("div", {
    className: e0,
    children: [jsx("img", {
      "data-tooltip-type": Ib.TEXT,
      "data-tooltip": user.email,
      src: user.img_url,
      className: my,
      alt: ""
    }, `avatar-${e.id}`), jsx("div", {
      className: dz,
      children: jsx(nl, {
        size: Pf.SMALL,
        shape: "CIRCLE",
        team: {
          id: plan?.parentId ?? "",
          name: plan?.name ?? "",
          imgUrl: plan?.imgUrl ?? ""
        }
      })
    })]
  });
}
export function $$w3(e) {
  let {
    user,
    pending
  } = e;
  let r = !1 === pending && user.img_url;
  return r && !pending ? jsx("img", {
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": e.user.email,
    src: r,
    className: l()(my, e.small && dT, e.border && kk),
    alt: ""
  }, `avatar-${e.id}`) : jsx("div", {
    className: l()(f1, e.small && dT, e.border && kk),
    "data-tooltip-type": Ib.TEXT,
    "data-tooltip": e.user.email,
    children: jsx(_$$A, {
      className: l()(Zk, e.small && dT)
    })
  });
}
export function $$C1(e, t) {
  return !1 === e.pending ? e.user.handle : e.user.email in t ? t.usersByEmail[e.user.email].handle : e.user.email;
}
export function $$T4(e, t, i, n, r, a, s) {
  let o = [];
  let l = !1;
  if (!i) return null;
  s && a === AccessLevelEnum.VIEW_PROTOTYPES ? o.push({
    type: "option",
    key: AccessLevelEnum.VIEW_PROTOTYPES,
    text: getPermissionLevelName(AccessLevelEnum.VIEWER)
  }) : t ? o.push(k(a)) : (e && !r && o.push(k(AccessLevelEnum.OWNER)), n && o.push(k(AccessLevelEnum.ADMIN)), o.push(k(AccessLevelEnum.EDITOR)), o.push(k(AccessLevelEnum.VIEWER)), l = r);
  let d = t && !e ? getI18nString("confirm_remove_role.leave") : getI18nString("confirm_remove_role.remove");
  o.push({
    type: "separator"
  });
  l && o.push({
    type: "option",
    key: "resend",
    text: getI18nString("role_row.resend_invite")
  });
  o.push({
    type: "option",
    key: AccessLevelEnum.NONE,
    text: d
  });
  return o;
}
function k(e) {
  return {
    type: "option",
    key: e,
    text: getPermissionLevelName(e)
  };
}
export const CM = $$S0;
export const E4 = $$C1;
export const R9 = $$x2;
export const hP = $$w3;
export const nu = $$T4;