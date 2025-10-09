import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { N } from '../905/7587';
import { KindEnum } from '../905/129884';
import { getI18nString } from '../905/303541';
import { UpgradeAction } from '../905/370443';
import { $S, C1 as _$$C, dT, dz, e0, f1, H, iA, kk, mL, my, NE, qD, QW, UU, yR, Zk, zn } from '../905/372455';
import { setupShareModalTabHandler } from '../905/382697';
import { A as SVG } from '../905/410311';
import { AccessLevelEnum } from '../905/557142';
import { AvatarSize, TeamAvatar } from '../905/590952';
import { SvgComponent } from '../905/714743';
import { getPermissionLevelName } from '../figma_app/12796';
import { useFileInviteWithSeatExperiment } from '../figma_app/297957';
import { useCurrentPlanUser, useIsAdminUser } from '../figma_app/465071';
import { WithTrackedPopupButtonPrimitive } from '../figma_app/617427';
import { ShareAction } from '../figma_app/707808';
import { HU } from '../figma_app/926061';
import { A as _$$A2 } from '../svg/443105';

/**
 * Renders the role row component.
 * Original: $$x2
 */
export function setupRoleRow(props: {
  user: any;
  id: string;
  pending: boolean;
  invite?: any;
  editorType?: any;
  filePlanKey?: any;
  userNeedsUpgrade?: boolean;
  level: AccessLevelEnum;
  virtualRowItem?: {
    start: number;
  };
  userName: string;
  setSelectedRoleToUpdateSeat?: () => void;
  warningMessage?: string;
  warningTooltipId?: string;
  warningTooltipText?: string;
  getRoleOptions: () => any[];
  onChangeLevel?: (level: AccessLevelEnum) => void;
  dropdownShown?: {
    type: string;
    data: {
      dropdownId: string;
    };
  };
  isPrototypeRole?: boolean;
  isBranchFile?: boolean;
}) {
  // Redux dispatch
  const dispatch = useDispatch<AppDispatch>();
  // Share modal tab handler
  const handleShareModalTab = setupShareModalTabHandler();
  // Experiment hook
  const inviteWithSeatExperiment = useFileInviteWithSeatExperiment()({
    rolePending: props.pending,
    inviteBillableProductKey: props.invite?.billableProductKey,
    editorType: props.editorType,
    filePlanKey: props.filePlanKey,
    userNeedsUpgrade: props.userNeedsUpgrade,
    hasEditRole: props.level >= AccessLevelEnum.EDITOR
  });
  // Current plan user
  const currentPlanUser = useCurrentPlanUser('UserRowBase');
  // Admin check
  const isAdminUser = useIsAdminUser(currentPlanUser).unwrapOr(false);
  // Is upgrade seat available
  const canUpgradeSeat = inviteWithSeatExperiment && props.level === AccessLevelEnum.EDITOR;
  // Virtual row style
  const virtualRowStyle = props.virtualRowItem ? {
    position: 'absolute',
    top: props.virtualRowItem.start,
    left: 0,
    right: 0
  } : undefined;
  // Role options
  let roleOptions = props.getRoleOptions();
  if (canUpgradeSeat && roleOptions) {
    roleOptions = roleOptions.map(option => option.type === 'option' && option.key === props.level ? {
      ...option,
      selectedLabelClass: mL
    } : option);
  }
  // Dropdown open state
  const isDropdownOpen = !!(props.dropdownShown && props.dropdownShown.type === 'level-change-dropdown' && props.dropdownShown.data.dropdownId === props.id);
  return jsxs('div', {
    'className': zn,
    'style': virtualRowStyle,
    'data-testid': 'role-row',
    'children': [jsx('div', {
      className: H,
      children: jsx(UserAvatar, {
        user: props.user,
        id: props.id,
        pending: props.pending
      })
    }), jsxs('div', {
      className: $S,
      children: [jsx('div', {
        className: props.pending ? NE : UU,
        children: props.userName
      }, `name-${props.id}`), inviteWithSeatExperiment && isAdminUser ? jsxs(WithTrackedPopupButtonPrimitive, {
        'trackingProperties': {
          trackingDescriptor: UpgradeAction.UPGRADE_SEAT
        },
        'className': yR,
        'onClick': () => {
          props.setSelectedRoleToUpdateSeat && props.setSelectedRoleToUpdateSeat();
          handleShareModalTab(ShareAction.UPDATE_SEAT);
        },
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('role_row.upgrade_seat.tooltip'),
        'data-tooltip-timeout-delay': 50,
        'aria-label': getI18nString('role_row.upgrade_seat'),
        'children': [jsxs('span', {
          className: iA,
          children: [jsx(SvgComponent, {
            className: QW,
            svg: _$$A2
          }), jsx(N, {
            className: qD
          })]
        }), getI18nString('role_row.upgrade_seat')]
      }) : jsxs(Fragment, {
        children: [props.warningMessage && jsx(SvgComponent, {
          'className': QW,
          'svg': _$$A2,
          'data-tooltip-timeout-delay': 50,
          'data-tooltip-type': KindEnum.TEXT,
          'data-tooltip': props.warningMessage,
          'aria-label': props.warningMessage
        }), props.warningTooltipId && jsx(SvgComponent, {
          'className': QW,
          'svg': _$$A2,
          'data-tooltip-type': KindEnum.SPECIAL,
          'data-tooltip': props.warningTooltipId,
          'data-tooltip-timeout-delay': 50,
          'data-tooltip-interactive': true,
          'aria-label': props.warningTooltipText
        })]
      }), roleOptions ? jsx(HU, {
        dispatch,
        onChange: props.onChangeLevel,
        options: roleOptions,
        id: 'level-change-dropdown',
        value: props.level,
        dropdownShown: props.dropdownShown,
        dropdownData: {
          dropdownId: props.id
        },
        isOpen: isDropdownOpen
      }) : props.isPrototypeRole && props.level === AccessLevelEnum.VIEW_PROTOTYPES ? jsx('span', {
        className: _$$C,
        children: getI18nString('permissions.level_name.can_view')
      }) : jsx('span', {
        className: classNames(_$$C, canUpgradeSeat && mL),
        children: getPermissionLevelName(props.level, props.isBranchFile)
      })]
    })]
  });
}

/**
 * Renders the user and team avatar.
 * Original: $$S0
 */
export function UserTeamAvatar({
  user,
  plan,
  id
}: {
  user: {
    email: string;
    img_url: string;
  };
  plan?: {
    parentId?: string;
    name?: string;
    imgUrl?: string;
  };
  id: string;
}) {
  return jsxs('div', {
    className: e0,
    children: [jsx('img', {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip': user.email,
      'src': user.img_url,
      'className': my,
      'alt': ''
    }, `avatar-${id}`), jsx('div', {
      className: dz,
      children: jsx(TeamAvatar, {
        size: AvatarSize.SMALL,
        shape: 'CIRCLE',
        team: {
          id: plan?.parentId ?? '',
          name: plan?.name ?? '',
          imgUrl: plan?.imgUrl ?? ''
        }
      })
    })]
  });
}

/**
 * Renders the user avatar or fallback SVG.
 * Original: $$w3
 */
export function UserAvatar({
  user,
  pending,
  id,
  small,
  border
}: {
  user: {
    email: string;
    img_url?: string;
  };
  pending: boolean;
  id: string;
  small?: boolean;
  border?: boolean;
}) {
  const hasAvatar = !pending && user.img_url;
  return hasAvatar ? jsx('img', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': user.email,
    'src': user.img_url,
    'className': classNames(my, small && dT, border && kk),
    'alt': ''
  }, `avatar-${id}`) : jsx('div', {
    'className': classNames(f1, small && dT, border && kk),
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': user.email,
    'children': jsx(SVG, {
      className: classNames(Zk, small && dT)
    })
  });
}

/**
 * Gets the user handle or email.
 * Original: $$C1
 */
export function getUserHandleOrEmail(e: {
  pending: boolean;
  user: {
    handle: string;
    email: string;
  };
}, t: {
  usersByEmail: {
    [email: string]: {
      handle: string;
    };
  };
}) {
  return !e.pending ? e.user.handle : e.user.email in t ? t.usersByEmail[e.user.email].handle : e.user.email;
}

/**
 * Generates role options for dropdown.
 * Original: $$T4
 */
export function generateRoleOptions(isOwner: boolean, isLeaving: boolean, isAdmin: boolean, isEditor: boolean, currentLevel: AccessLevelEnum, isPending: boolean, isPrototypeRole: boolean) {
  const options: any[] = [];
  let isResend = false;
  if (!isAdmin) return null;
  if (isPrototypeRole && currentLevel === AccessLevelEnum.VIEW_PROTOTYPES) {
    options.push({
      type: 'option',
      key: AccessLevelEnum.VIEW_PROTOTYPES,
      text: getPermissionLevelName(AccessLevelEnum.VIEWER)
    });
  } else if (isLeaving) {
    options.push(createRoleOption(currentLevel));
  } else {
    if (isOwner && !isPending) options.push(createRoleOption(AccessLevelEnum.OWNER));
    if (isEditor) options.push(createRoleOption(AccessLevelEnum.ADMIN));
    options.push(createRoleOption(AccessLevelEnum.EDITOR));
    options.push(createRoleOption(AccessLevelEnum.VIEWER));
    isResend = isPending;
  }
  const removeText = isLeaving && !isOwner ? getI18nString('confirm_remove_role.leave') : getI18nString('confirm_remove_role.remove');
  options.push({
    type: 'separator'
  });
  if (isResend) {
    options.push({
      type: 'option',
      key: 'resend',
      text: getI18nString('role_row.resend_invite')
    });
  }
  options.push({
    type: 'option',
    key: AccessLevelEnum.NONE,
    text: removeText
  });
  return options;
}

/**
 * Helper to create a role option.
 * Original: k
 */
function createRoleOption(level: AccessLevelEnum) {
  return {
    type: 'option',
    key: level,
    text: getPermissionLevelName(level)
  };
}

// Refactored exports
export const YJ = setupRoleRow;
export const CM = UserTeamAvatar;
export const E4 = getUserHandleOrEmail;
export const R9 = setupRoleRow;
export const hP = UserAvatar;
export const nu = generateRoleOptions;
