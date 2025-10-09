import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Xr } from "../figma_app/27355";
import { getInitialOptions } from "../figma_app/169182";
import { getI18nString, renderI18nText } from "../905/303541";
import { t as _$$t2 } from "../905/378566";
import { h as _$$h } from "../905/142086";
import { showModalHandler } from "../905/156213";
import { isBranch } from "../905/760074";
import { P as _$$P } from "../905/842406";
import { useDropdownState } from "../905/848862";
import { FResourceCategoryType, FOrganizationLevelType } from "../figma_app/191312";
import { C0 } from "../905/162414";
import { resendInvite } from "../905/351260";
import { hw, zO, lP, yN } from "../905/727738";
import { Zm } from "../905/913057";
import { KI } from "../figma_app/680166";
import { AccessLevelEnum } from "../905/557142";
import { K } from "../905/868738";
import { t as _$$t3 } from "../905/50272";
import { _ as _$$_ } from "../905/328370";
import { a as _$$a } from "../905/699981";
import { _ as _$$_2 } from "../905/872445";
import { b as _$$b } from "../905/173822";
import { G as _$$G } from "../905/595923";
import { generateRoleOptions, setupRoleRow, getUserHandleOrEmail } from "../905/144598";
import { to as _$$to, vQ, UU } from "../905/372455";
export function $$N0(e) {
  let t = useDispatch<AppDispatch>();
  let i = useDropdownState();
  let N = _$$P();
  let P = useSelector(e => e.userFlags);
  let O = Xr(_$$G);
  let D = e.resource && e.resource.type === FResourceCategoryType.FILE ? e.resource.file : null;
  let L = e.role.pending && e.role.invite ? e.role.invite.inviteeUserId : e.role.user_id;
  let F = !!(D && D.key && L);
  let {
    userLacksLicenseAccess
  } = KI({
    fileKey: D?.key ?? null,
    userId: L ?? null,
    enabled: F
  });
  let j = D?.editor_type;
  let U = !!j && !!userLacksLicenseAccess(j);
  let B = () => {
    t(resendInvite({
      role: e.role
    }));
  };
  let V = useCallback(() => {
    let t = e.user;
    let i = e.canEditRole;
    let n = e.role.user_id === t.id;
    let r = e.role.level === AccessLevelEnum.OWNER;
    let a = e.isOwnerOfResource;
    a ? i = !r : r ? i = !1 : n && (i = !0);
    return generateRoleOptions(a, n, i, e.canMakeAdmin, e.role.pending, e.role.level, e.isPrototypeRole);
  }, [e.canEditRole, e.canMakeAdmin, e.isOwnerOfResource, e.isPrototypeRole, e.role, e.user]);
  let G = e.readOnlyOverrideWarningMessage;
  let z = e.isStarterTier || e.role.level === AccessLevelEnum.VIEWER || e.resource.type !== FResourceCategoryType.FILE ? null : e.user.id === e.role.user_id && U ? {
    tooltipId: _$$a,
    text: getI18nString("folder_permissions_modal.restricted_warning.admin_needs_to_update_your_seat")
  } : e.role.user_id && U ? {
    tooltipId: _$$_2,
    text: getI18nString("folder_permissions_modal.restricted_warning.admin_needs_to_update_this_seat")
  } : null;
  z && (G = null);
  let H = !!(e.repo && e.resource.type === FResourceCategoryType.FILE && isBranch(e.resource.file));
  let W = e.resource.type === FResourceCategoryType.FILE ? e.resource.file.parent_org_id ? {
    type: FOrganizationLevelType.ORG,
    parentId: e.resource.file.parent_org_id
  } : {
    type: FOrganizationLevelType.TEAM,
    parentId: e.resource.file.team_id || ""
  } : null;
  return jsx(setupRoleRow, {
    contacts: N,
    dropdownShown: i,
    editorType: j,
    filePlanKey: W,
    getRoleOptions: V,
    id: `role-${e.role.id}`,
    invite: e.role.pending ? e.role.invite : void 0,
    isBranchFile: H,
    isPrototypeRole: e.isPrototypeRole,
    level: e.role.level,
    onChangeLevel: i => {
      if ("resend" === i) {
        B();
        return;
      }
      let r = () => {
        e.role.resource_type === FResourceCategoryType.FILE ? t(hw({
          role: e.role,
          level: i,
          seenState: null
        })) : e.role.resource_type === FResourceCategoryType.FILE_REPO ? t(zO({
          role: e.role,
          level: i
        })) : e.role.resource_type === FResourceCategoryType.FOLDER ? t(lP({
          role: e.role,
          level: i
        })) : e.role.resource_type === FResourceCategoryType.TEAM && t(yN({
          role: e.role,
          level: i
        }));
        C0;
      };
      let a = e.resource && e.resource.type === FResourceCategoryType.FILE && e.resource.file;
      let s = e.resource && e.resource.type === FResourceCategoryType.FILE && e.resource.isInDraftsFolder && !e.resource.file.parent_org_id;
      let l = e.role.level === AccessLevelEnum.VIEWER && i === AccessLevelEnum.EDITOR;
      let p = !!P.dismissed_move_draft_to_project_interstitial_modal;
      if (i === AccessLevelEnum.OWNER) e.isPaidPublished ? t(showModalHandler({
        type: K,
        data: {}
      })) : t(showModalHandler({
        type: _$$b,
        data: {
          resourceType: e.role.resource_type,
          resourceName: e.resourceName,
          newOwnerName: e.role.user.handle,
          onConfirmTransfer: r
        }
      }));else if (a && s && l && e.isStarterTier) {
        let i = Zm(e.role, N);
        i?.endsWith(getInitialOptions().figma_email_suffix) ? r() : p ? _$$h(a, e.repo || null, t, {
          handlesVisualBell: !0,
          callback: () => {
            t(hw({
              role: e.role,
              level: AccessLevelEnum.EDITOR,
              fromDraftsLockdownFileMove: !0,
              seenState: null
            }));
          }
        }, jsx(_$$t3, {})) : t(showModalHandler({
          type: _$$t2(),
          data: {
            file: a,
            repo: e.repo || null,
            afterFileMove: {
              handlesVisualBell: !0,
              callback: () => {
                t(hw({
                  role: e.role,
                  level: AccessLevelEnum.EDITOR,
                  fromDraftsLockdownFileMove: !0,
                  seenState: null
                }));
              }
            },
            bannerToDisplay: jsx(_$$t3, {})
          }
        }));
      } else r();
    },
    pending: e.role.pending,
    setSelectedRoleToUpdateSeat: () => {
      O(e.role);
    },
    user: e.role.user,
    userName: function () {
      let {
        role,
        user
      } = e;
      if (user && role.user_id === user.id) return renderI18nText("role_row.you", {
        name: jsx("b", {
          className: _$$to,
          children: user.name
        }),
        you: jsx("span", {
          className: vQ,
          children: renderI18nText("role_row.you_label_lowercase")
        })
      });
      let r = role.user.email || "";
      if (e.currentUserOrgId && !r && !1 === role.pending) {
        for (let e in N.usersByEmail) if (N.usersByEmail[e].id === role.user.id) {
          r = e;
          break;
        }
      }
      let a = function () {
        let {
          role: _role
        } = e;
        return getUserHandleOrEmail(_role, N);
      }();
      return jsx(_$$_, {
        className: UU,
        guestNameClassName: _$$to,
        email: r,
        displayString: a,
        org: e.currentOrg,
        orgDomains: e.orgDomains,
        pending: e.role.pending
      });
    }(),
    userNeedsUpgrade: U,
    virtualRowItem: e.virtualRowItem,
    warningMessage: G,
    warningTooltipId: z?.tooltipId || null,
    warningTooltipText: z?.text || null
  });
}
export const O = $$N0;
