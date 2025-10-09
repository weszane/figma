import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { MediaQuerySvgComponent } from '../905/331623';
import { setupAuthedUserPlanLoader } from '../905/352022';
import { selectUser } from '../905/372672';
import { getFeatureFlags } from '../905/601108';
import { SvgComponent } from '../905/714743';
import { j as _$$j } from '../905/834956';
import { hideDropdownAction, showDropdownThunk } from '../905/929976';
import { isSameWorkspaceIdentity } from '../905/967587';
import { A as SVG2 } from '../1617/159136';
import { A as SVG3 } from '../1617/741473';
import { A as SVG } from '../5724/267849';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { renderAvatar } from '../figma_app/3731';
import { selectPermissionsState } from '../figma_app/212807';
import { switchCommunityProfileThunk } from '../figma_app/530167';
import { findProfile, isOrgOrTeamExport, trackProfileAdminMenuOpen, useIsCommunityHubView } from '../figma_app/740025';
import { parsePxInt } from '../figma_app/783094';
import { Badge, BadgeColor } from '../figma_app/919079';
import { switchAccountAndNavigate } from '../figma_app/976345';

// Original constants and their refactored names
const AVATAR_SIZE = '32px'; // Original: x
const OPTION_CLASS = 'workspace_switcher--option--ykJBs'; // Original: S
const ADMIN_BADGE_CLASS = 'workspace_switcher--adminBadge--klir1'; // Original: w
const COMMUNITY_OPTION_CLASS = 'workspace_switcher--communityProfileOption--Enex8'; // Original: C
const ACTIVE_OPTION_CLASS = 'workspace_switcher--activeOption--5-jOu'; // Original: T
const RED_DOT_CLASS = 'workspace_switcher--baseRedDot--JUzRa red_dot--baseRedDot--pgZV7'; // Original: k
const ICON_CONTAINER_CLASS = 'workspace_switcher--redDotAndIconContainer--oTZoM red_dot--redDotAndIconContainer--vM6id workspace_switcher--_paddedIcon--sxKM6 workspace_switcher--_icon--TdUto workspace_switcher--_iconFlex--pM-O7 workspace_switcher--_iconMargin--RMvSX'; // Original: R
const OPTION_HEIGHT = parsePxInt(AVATAR_SIZE) + 2 * parsePxInt('4px') + 1; // Original: N

/**
 * Creates an option object for a community profile.
 * @param profile - The profile object.
 * @param user - The user object.
 * @param isCommunityHubView - Whether it's a community hub view.
 * @param isActive - Whether the option is active.
 * @param bellStates - The bell states for notifications.
 * @param view - The current view.
 * @param dispatch - The dispatch function.
 * @returns The option object.
 */
function createCommunityProfileOption(profile: any, user: any, isCommunityHubView: boolean, isActive: boolean, bellStates: any, view: any, dispatch: any) {
  // Original function: P
  return {
    displayText: profile.name,
    sideText: `@${profile.profile_handle}`,
    optionHeight: OPTION_HEIGHT,
    icon: jsxs('div', {
      className: ICON_CONTAINER_CLASS,
      children: [bellStates[profile.id] && jsx('div', {
        className: RED_DOT_CLASS
      }), jsx(renderAvatar, {
        userId: user.id,
        profileId: profile.id,
        forceAvatar: true
      })]
    }),
    itemBadge: isOrgOrTeamExport(profile) ? jsx(Badge, {
      className: ADMIN_BADGE_CLASS,
      text: getI18nString('navbar.community.admin_label'),
      color: BadgeColor.INVERT,
      subtle: true
    }) : undefined,
    isActive,
    isChecked: isActive,
    className: COMMUNITY_OPTION_CLASS,
    callback: () => dispatch(switchCommunityProfileThunk({
      profileId: profile.id,
      view: isCommunityHubView ? view : undefined
    }))
  };
}
const DROPDOWN_TYPE = 'FILE_BROWSER_WORKSPACE_SWITCHER'; // Original: F
const ONBOARDING_KEY = 'ACCOUNT_SWITCHING_COMMUNITY_ONBOARDING_KEY'; // Original: M
const LEAN_PADDING = parsePxInt('7px'); // Original: j
const MIN_WIDTH = parsePxInt('224px'); // Original: U
const MAX_WIDTH = parsePxInt('364px'); // Original: B
const USER_OPTION_HEIGHT = parsePxInt(AVATAR_SIZE) + 2 * parsePxInt('4px'); // Original: V
const PLAN_OPTION_HEIGHT = USER_OPTION_HEIGHT + 1; // Original: G

/**
 * Generates the dropdown items for the workspace switcher.
 * @param authedUsers - The authed users.
 * @param authedProfilesById - The authed profiles by ID.
 * @param permissionsState - The permissions state.
 * @param user - The current user.
 * @param orgById - The orgs by ID.
 * @param authedTeamsById - The authed teams by ID.
 * @param authedActiveCommunityProfile - The active community profile.
 * @param isCommunityHubView - Whether it's a community hub view.
 * @param hasOrgOrTeamProfiles - Whether there are org or team profiles.
 * @param communityProfileBellStates - The bell states.
 * @param selectedView - The selected view.
 * @param dispatch - The dispatch function.
 * @returns The array of dropdown items.
 */
function generateDropdownItems(authedUsers: any, authedProfilesById: any, permissionsState: any, user: any, orgById: any, authedTeamsById: any, authedActiveCommunityProfile: any, isCommunityHubView: boolean, hasOrgOrTeamProfiles: boolean, communityProfileBellStates: any, selectedView: any, dispatch: any) {
  // Original logic from z function
  let items: any[] = [];
  authedUsers.orderedIds.forEach((userId: string) => {
    const authedUser = authedUsers.byId[userId];
    if (!authedUser) return;
    items = items.concat([{
      displayText: authedUser.email,
      optionHeight: USER_OPTION_HEIGHT,
      icon: jsx('span', {
        className: 'workspace_switcher--iconEmpty--0neJ2 workspace_switcher--_icon--TdUto workspace_switcher--_iconMargin--RMvSX'
      }),
      disabled: true
    }]);
    const planItems = authedUser.plans?.map((plan: any) => {
      const workspaceIdentity = {
        userId: authedUser.id,
        orgId: plan.is_org ? plan.plan_id : null,
        teamId: plan.is_org ? null : plan.plan_id
      };
      const isActive = isSameWorkspaceIdentity(permissionsState, workspaceIdentity);
      const isGuest = !!plan.is_guest;
      const view = workspaceIdentity.orgId && !isGuest && getFeatureFlags().xr_debounce_threshold ? {
        view: 'teamFeed'
      } : {
        view: 'recentsAndSharing'
      };
      return {
        displayText: plan.name,
        optionHeight: PLAN_OPTION_HEIGHT,
        itemBadge: isGuest ? jsx(Badge, {
          className: 'workspace_switcher--badge--lsDwX',
          text: getI18nString('navbar.navbar.guest'),
          color: BadgeColor.INVERT,
          subtle: true
        }) : undefined,
        icon: jsx(renderAvatar, {
          className: cssBuilderInstance.mr8.$,
          userId: workspaceIdentity.userId,
          orgId: workspaceIdentity.orgId,
          teamId: workspaceIdentity.teamId
        }),
        isActive,
        isChecked: isActive,
        className: 'workspace_switcher--optionWithBottomMargin--8atEJ workspace_switcher--option--ykJBs',
        callback: () => dispatch(switchAccountAndNavigate({
          workspace: workspaceIdentity,
          view
        })),
        activeClassName: ACTIVE_OPTION_CLASS
      };
    }) || [];
    items = items.concat(planItems).concat([{
      displayText: '',
      disabled: true,
      separator: true
    }]);
  });
  const hasNotifications = !!communityProfileBellStates && Object.values(communityProfileBellStates).some((state: any) => state);
  const communityItems = (() => {
    // Extracted logic for community items
    const communityProfiles: any[] = [];
    const userProfiles: any[] = [];
    const orgProfiles: any[] = [];
    const seenProfiles = new Set();
    Object.keys(authedUsers.byId).forEach(userId => {
      const authedUser = authedUsers.byId[userId];
      const communityProfileId = authedUser.community_profile_id;
      if (communityProfileId) {
        const profile = authedProfilesById[communityProfileId];
        if (!profile || seenProfiles.has(communityProfileId)) return;
        seenProfiles.add(communityProfileId);
        const isPrimary = !!authedActiveCommunityProfile?.primary_user_id && authedActiveCommunityProfile?.id === profile.id;
        const isActive = isCommunityHubView && isPrimary;
        communityProfiles.push(createCommunityProfileOption(profile, user, isCommunityHubView, isActive, communityProfileBellStates, selectedView, dispatch));
      } else {
        const isPrimary = authedActiveCommunityProfile?.primary_user_id === authedUser.id;
        const isActive = isCommunityHubView && isPrimary;
        const profile = findProfile({
          authedProfilesById,
          userId: authedUser.id
        });
        userProfiles.push({
          displayText: authedUser.name,
          sideText: authedUser.email,
          optionHeight: OPTION_HEIGHT,
          icon: jsx('div', {
            className: ICON_CONTAINER_CLASS,
            children: jsx(renderAvatar, {
              userId: authedUser.id,
              forceAvatar: true
            })
          }),
          isActive,
          isChecked: isActive,
          className: COMMUNITY_OPTION_CLASS,
          callback: () => dispatch(switchCommunityProfileThunk({
            profileId: profile?.id || null,
            view: isCommunityHubView ? selectedView : undefined
          }))
        });
      }
    });
    Object.keys(orgById).forEach(orgId => {
      const org = orgById[orgId];
      const communityProfileId = org?.community_profile_id;
      if (communityProfileId) {
        const profile = authedProfilesById[communityProfileId];
        if (!profile || seenProfiles.has(communityProfileId)) return;
        seenProfiles.add(communityProfileId);
        const isActive = isCommunityHubView && authedActiveCommunityProfile?.id === profile.id;
        communityProfiles.push(createCommunityProfileOption(profile, user, isCommunityHubView, isActive, communityProfileBellStates, selectedView, dispatch));
      } else {
        const isActive = isCommunityHubView && authedActiveCommunityProfile?.org_id === org.id;
        const profile = findProfile({
          authedProfilesById,
          orgId: org.id
        });
        if (profile) {
          orgProfiles.push({
            displayText: org.name,
            sideText: undefined,
            optionHeight: OPTION_HEIGHT,
            icon: jsx('div', {
              className: ICON_CONTAINER_CLASS,
              children: jsx(renderAvatar, {
                userId: user.id,
                orgId: org.id,
                forceAvatar: true
              })
            }),
            isActive,
            itemBadge: jsx(Badge, {
              className: ADMIN_BADGE_CLASS,
              text: getI18nString('navbar.community.admin_label'),
              color: BadgeColor.INVERT,
              subtle: true
            }),
            isChecked: isActive,
            className: COMMUNITY_OPTION_CLASS,
            callback: () => dispatch(switchCommunityProfileThunk({
              profileId: profile.id || null,
              view: isCommunityHubView ? selectedView : undefined
            }))
          });
        }
      }
    });
    Object.values(authedTeamsById).forEach((team: any) => {
      const communityProfileId = team?.community_profile_id;
      if (communityProfileId) {
        const profile = authedProfilesById[communityProfileId];
        if (!profile || seenProfiles.has(communityProfileId)) return;
        seenProfiles.add(communityProfileId);
        const isActive = isCommunityHubView && authedActiveCommunityProfile?.id === profile.id;
        communityProfiles.push(createCommunityProfileOption(profile, user, isCommunityHubView, isActive, communityProfileBellStates, selectedView, dispatch));
      }
    });
    return communityProfiles.concat(userProfiles).concat(orgProfiles);
  })();
  if (communityItems.length > 1) {
    const headerItem = {
      displayText: hasOrgOrTeamProfiles ? '' : getI18nString('navbar.community.browse_community_workspace_switcher_label'),
      optionHeight: USER_OPTION_HEIGHT,
      itemBadge: hasOrgOrTeamProfiles ? jsxs('div', {
        className: 'workspace_switcher--browseCommunityRowContainer--X6NW8',
        children: [renderI18nText('navbar.community.browse_community_workspace_switcher_label'), jsx('a', {
          href: 'https://help.figma.com/hc/articles/4404108672663',
          target: '_blank',
          className: 'workspace_switcher--infoBadgeContainer--5BRbv',
          children: jsx(SvgComponent, {
            svg: SVG,
            className: 'workspace_switcher--infoBadge--kvJnm'
          })
        })]
      }) : undefined,
      icon: jsx('span', {
        className: 'workspace_switcher--browseCommunityHeaderIcon--pZkm4 workspace_switcher--iconEmpty--0neJ2 workspace_switcher--_icon--TdUto workspace_switcher--_iconMargin--RMvSX'
      }),
      disabled: true
    };
    return [{
      'displayText': getI18nString('navbar.community.community_label'),
      'optionHeight': USER_OPTION_HEIGHT,
      'icon': jsxs('div', {
        className: ICON_CONTAINER_CLASS,
        children: [hasNotifications && jsx('div', {
          className: RED_DOT_CLASS
        }), jsx(MediaQuerySvgComponent, {
          svg: SVG3,
          fallbackSvg: SVG2
        })]
      }),
      'onMouseEnter': () => trackProfileAdminMenuOpen('submenu', selectedView.view),
      'className': OPTION_CLASS,
      'children': [headerItem].concat(communityItems),
      'activeClassName': ACTIVE_OPTION_CLASS,
      'data-onboarding-key': ONBOARDING_KEY
    }];
  }
  if (communityItems.length !== 1) return [];
  const singleItem = communityItems[0];
  return [{
    'displayText': getI18nString('navbar.community.community_label'),
    'sideText': singleItem.sideText,
    'rightJustifySideText': true,
    'optionHeight': USER_OPTION_HEIGHT,
    'icon': jsxs('div', {
      className: ICON_CONTAINER_CLASS,
      children: [hasNotifications && jsx('div', {
        className: RED_DOT_CLASS
      }), jsx(MediaQuerySvgComponent, {
        svg: SVG3,
        fallbackSvg: SVG2
      })]
    }),
    'activeClassName': ACTIVE_OPTION_CLASS,
    'isActive': singleItem.isActive,
    'isChecked': singleItem.isChecked,
    'className': OPTION_CLASS,
    'callback': singleItem.callback,
    'data-onboarding-key': ONBOARDING_KEY
  }];
}

/**
 * Component for the workspace switcher dropdown.
 * @returns The JSX element.
 */
function WorkspaceSwitcherDropdown() {
  // Original function: z
  const dispatch = useDispatch<AppDispatch>();
  const isDropdownShown = useSelector((state: any) => state.dropdownShown?.type === DROPDOWN_TYPE);
  const selectedView = useSelector((state: any) => state.selectedView);
  const targetRect = useSelector((state: any) => state.dropdownShown?.data?.targetRect);
  const authedUsers = useSelector((state: any) => state.authedUsers);
  const authedProfilesById = useSelector((state: any) => state.authedProfilesById);
  const permissionsState = selectPermissionsState();
  const user = selectUser();
  const orgById = useSelector((state: any) => state.orgById);
  const authedTeamsById = useSelector((state: any) => state.authedTeamsById);
  const authedActiveCommunityProfile = useSelector((state: any) => state.authedActiveCommunityProfile);
  const isCommunityHubView: any = useIsCommunityHubView();
  const hasOrgOrTeamProfiles = useSelector((state: any) => Object.keys(state.authedProfilesById).some(id => !!state.authedProfilesById[id].org_id || !!state.authedProfilesById[id].team_id));
  const communityProfileBellStates = useSelector((state: any) => state.userNotifications.communityProfileBellStates);
  useEffect(() => {
    setupAuthedUserPlanLoader()(dispatch).catch((error: any) => {
      const message = error?.data?.message || getI18nString('file_browser.error_try_again');
      dispatch(VisualBellActions.enqueue({
        message,
        type: 'error'
      }));
    });
  }, [dispatch]);
  return jsx(Fragment, {
    children: isDropdownShown && jsx(_$$j, {
      dispatch,
      items: generateDropdownItems(authedUsers, authedProfilesById, permissionsState, user, orgById, authedTeamsById, authedActiveCommunityProfile, isCommunityHubView, hasOrgOrTeamProfiles, communityProfileBellStates, selectedView, dispatch),
      lean: 'left',
      leanPadding: LEAN_PADDING,
      minWidth: MIN_WIDTH,
      onSelectItem: (item: any) => {
        item.callback && item.callback('', null, dispatch);
      },
      parentRect: targetRect,
      rootAndSubmenuMaxWidth: MAX_WIDTH,
      showCheckmarkOnRight: true,
      showPoint: true
    })
  });
}

/**
 * Component for the workspace switcher button.
 * @param props - The props.
 * @returns The JSX element.
 */
export function WorkspaceSwitcherButton(props: {
  dataTestId?: string;
  text: string;
}) {
  // Original function: $$H0
  const dispatch = useDispatch<AppDispatch>();
  const isDropdownShown = useSelector((state: any) => state.dropdownShown?.type === DROPDOWN_TYPE);
  return jsxs(Fragment, {
    children: [jsx('button', {
      'type': 'button',
      'className': cssBuilderInstance.colorTextBrand.cursorPointer.selectNone.$,
      'onClick': event => {
        const rect = event.currentTarget.getBoundingClientRect();
        isDropdownShown ? dispatch(hideDropdownAction()) : rect && dispatch(showDropdownThunk({
          type: DROPDOWN_TYPE,
          data: {
            targetRect: rect
          }
        }));
      },
      'data-testid': props.dataTestId,
      'children': props.text
    }), jsx(WorkspaceSwitcherDropdown, {})]
  });
}

// Original export: export const h = $$H0
export const h = WorkspaceSwitcherButton;
