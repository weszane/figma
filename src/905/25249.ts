import { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { NotModalType } from '../905/11928';
import { fetchContactsOptimist } from '../905/14223';
import { ModalRootComponent } from '../905/38914';
import { useSprigWithSampling } from '../905/99656';
import { registerModal } from '../905/102752';
import { getUserHandleOrEmail } from '../905/144598';
import { confirmOrgGuestInviteModal } from '../905/154112';
import { hideModal, showModalHandler } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { useSingleEffect } from '../905/791079';
import { Dp, Ni } from '../905/249410';
import { R as _$$R2 } from '../905/298004';
import { getI18nString, renderI18nText } from '../905/303541';
import { z as _$$z, Z as _$$Z2 } from '../905/306088';
import { r as _$$r2, X as _$$X } from '../905/308709';
import { sendRoleInvites } from '../905/351260';
import { BannerMessage } from '../905/363675';
import { UpgradeAction } from '../905/370443';
import { $S, $w, AA, j7, jq, Jt, KU, mL, rG, wk, zc, zn } from '../905/372455';
import { selectUser } from '../905/372672';
import { i as _$$i } from '../905/385727';
import { e as _$$e2 } from '../905/393279';
import { OnboardingModal } from '../905/425180';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { trackEventAnalytics } from '../905/449184';
import { E as _$$E2 } from '../905/453826';
import { useWebLoggerTimerEffect } from '../905/485103';
import { Button } from '../905/521428';
import { AccessLevelEnum } from '../905/557142';
import { e as _$$e3 } from '../905/621515';
import { $ as _$$$, t as _$$t2 } from '../905/628632';
import { ButtonPrimitive } from '../905/632989';
import { liveStoreInstance } from '../905/713695';
import { SvgComponent } from '../905/714743';
import { cL } from '../905/748726';
import { useCurrentUserOrg } from '../905/845253';
import { r as _$$r } from '../905/857502';
import { L as _$$L } from '../905/857916';
import { ArrowPosition } from '../905/858282';
import { WZ } from '../905/893645';
import { bp, Wj } from '../905/913057';
import { ob, t9, yI } from '../905/915142';
import { O as _$$O } from '../905/921963';
import { postUserFlag } from '../905/985254';
import { gy, o6 } from '../905/986349';
import { A as _$$A6 } from '../1617/357072';
import { A as _$$A4 } from '../1617/401431';
import { A as _$$A5 } from '../1617/442539';
import { A as _$$A3 } from '../1617/892083';
import { A as _$$A2 } from '../6828/70690';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { BWk, SqV } from '../figma_app/6204';
import { le } from '../figma_app/11182';
import { getPermissionLevelName } from '../figma_app/12796';
import { useAtomWithSubscription } from '../figma_app/27355';
import { FolderPermissions } from '../figma_app/43951';
import { BannerFullWidth } from '../figma_app/59509';
import { FPermissionLevelType, FPlanNameType, FResourceCategoryType, FTeamAccessPermissionType } from '../figma_app/191312';
import { Q3, xT } from '../figma_app/199513';
import { selectPermissionsState } from '../figma_app/212807';
import { N as _$$N2 } from '../figma_app/268271';
import { DialogActionStrip, DialogBackButton, DialogBody, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { useSubscription } from '../figma_app/288654';
import { checkDomainExists } from '../figma_app/336853';
import { isValidEmail } from '../figma_app/416935';
import { isProOrStudentPlan } from '../figma_app/465071';
import { debug, throwTypeError } from '../figma_app/465776';
import { bV, d3, DA, dF, hO, KN, KZ, l2, Lq, Sc, st, tb, VA, w3, Zk, zY } from '../figma_app/538002';
import { userFlagExistsAtomFamily } from '../figma_app/545877';
import { zl } from '../figma_app/641749';
import { getReadOnlyOverrideMessageForFolder } from '../figma_app/642025';
import { Z as _$$Z } from '../figma_app/761870';
import { z6 } from '../figma_app/805373';
import { TrackingProvider } from '../figma_app/831799';
import { LoadingOverlay } from '../figma_app/858013';
import { rn } from '../figma_app/903573';
import { _9, ET, Iz, J4, mi, YU } from '../figma_app/907616';
import { truncate } from '../figma_app/930338';
function SharingClarityProjectModalOverlay() {
  const userFlag = useAtomWithSubscription(projectModalOverlayFlagAtom);
  const {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: SqV,
    priority: _$$N2.DEFAULT_MODAL
  }, [userFlag]);
  useSingleEffect(() => {
    show({
      canShow: (flagValue: boolean) => !flagValue
    });
  });
  return jsx(OnboardingModal, {
    arrowPosition: ArrowPosition.LEFT_TITLE,
    description: jsx('p', {
      children: renderI18nText('rcs.sharing_clarity.project_creation_team_access_description')
    }),
    disableHighlight: true,
    emphasized: true,
    isShowing,
    onClose: complete,
    targetKey: 'sc_project_creation_team_access_onboarding_key',
    title: renderI18nText('rcs.sharing_clarity.project_creation_team_access_title'),
    trackingContextName: 'Sharing Clarity Project Creation Team Access Onboarding',
    userFlagOnShow: seenSharingClarityProjectModalOverlayFlag,
    zIndex: NotModalType.MODAL
  });
}
const seenSharingClarityProjectModalOverlayFlag = 'seen_sharing_clarity_project_modal_overlay';
const projectModalOnboardingKey = 'sc_project_modal_onboarding_key';
const projectModalTeamAccessOnboardingKey = 'sc_project_modal_team_access_onboarding_key';
const projectModalOverlayFlagAtom = userFlagExistsAtomFamily(seenSharingClarityProjectModalOverlayFlag);
const projectModalOnboardingAtom = rn('sc_project_modal_onboarding', _$$R2(BWk));
function SharingClarityProjectModalOnboarding() {
  const userFlag = useAtomWithSubscription(projectModalOverlayFlagAtom);
  const {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e3({
    overlay: BWk,
    priority: _$$N2.DEFAULT_MODAL
  }, [userFlag]);
  const dispatch = useDispatch();
  const onboardingState = zl(projectModalOnboardingAtom);
  useSingleEffect(() => {
    if (onboardingState.currentState === 'reset') {
      show({});
    } else {
      show({
        canShow: (flagValue: boolean) => !flagValue
      });
    }
  });
  _$$E2(uniqueId, 'Reset Onboarding', () => {
    show({});
  });
  const learnMoreCta = {
    label: renderI18nText('rcs.sharing_clarity.learn_more'),
    type: 'link',
    href: 'https://help.figma.com/hc/articles/360038006494-Create-a-new-project',
    ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
  };
  const onboardingSteps = [{
    title: renderI18nText('rcs.sharing_clarity.project_permissions_modal_step_1_title'),
    description: renderI18nText('rcs.sharing_clarity.project_permissions_modal_step_1_description'),
    trackingContextName: 'Sharing Clarity Project Modal Onboarding',
    targetKey: projectModalOnboardingKey,
    emphasized: true,
    zIndex: NotModalType.MODAL,
    secondaryCta: learnMoreCta
  }, {
    title: renderI18nText('rcs.sharing_clarity.project_permissions_modal_step_2_title'),
    description: renderI18nText('rcs.sharing_clarity.project_permissions_modal_step_2_description'),
    trackingContextName: 'Sharing Clarity Project Modal Team Access Onboarding',
    targetKey: projectModalTeamAccessOnboardingKey,
    emphasized: true,
    zIndex: NotModalType.MODAL,
    secondaryCta: learnMoreCta
  }];
  return jsx(WZ, {
    isShowing,
    steps: onboardingSteps,
    onComplete: () => {
      dispatch(postUserFlag({
        [seenSharingClarityProjectModalOverlayFlag]: true
      }));
      complete();
    }
  });
}
interface FolderAccessRowProps {
  folder: any;
  team: any;
  org: any;
  workspace?: any;
  folderCanEdit?: boolean;
  teamRoles: any[];
  sharingAudienceControl?: FPermissionLevelType;
  audienceAccessRow?: boolean;
  changeModalView?: () => void;
}
function eL({
  folder,
  team,
  org,
  workspace,
  folderCanEdit,
  teamRoles,
  sharingAudienceControl,
  audienceAccessRow = false,
  changeModalView
}: FolderAccessRowProps) {
  const folderCanEditValue = folderCanEdit;
  const canEditTeam = folderCanEditValue && team?.canEdit;
  const isInviteOnly = folder.is_invite_only;
  const isPublicEditable = !folder.is_invite_only && !folder.is_view_only;
  const isPublicViewable = !folder.is_invite_only && folder.is_view_only;
  const showAudienceAccessIcon = !audienceAccessRow || sharingAudienceControl !== FPermissionLevelType.INVITE_ONLY;
  let accessIcon = jsx('div', {
    className: isInviteOnly ? rG : zc,
    children: jsx(SvgComponent, {
      svg: _$$A6
    })
  });
  if (audienceAccessRow) {
    const isOrgLevel = sharingAudienceControl === FPermissionLevelType.ORG_EDIT || sharingAudienceControl === FPermissionLevelType.ORG_VIEW;
    const isWorkspaceLevel = sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT || sharingAudienceControl === FPermissionLevelType.WORKSPACE_VIEW;
    if (isOrgLevel && org) {
      accessIcon = jsx('div', {
        className: zc,
        children: jsx(SvgComponent, {
          svg: _$$A5
        })
      });
    } else if (isWorkspaceLevel) {
      accessIcon = workspace ? jsx(z6, {
        entity: workspace,
        size: 24
      }) : jsx('div', {
        className: zc,
        children: jsx(SvgComponent, {
          svg: _$$A3
        })
      });
    }
  }
  const accessIconContainer = showAudienceAccessIcon ? jsx('div', {
    className: AA,
    children: accessIcon
  }) : jsx(SvgComponent, {
    className: wk,
    svg: _$$A4
  });
  const onboardingKey = org ? projectModalTeamAccessOnboardingKey : 'sc_project_creation_team_access_onboarding_key';
  if (audienceAccessRow && !org) return jsx(Fragment, {});
  const showAudienceAccessRow = audienceAccessRow && folderCanEditValue;
  const showTeamAccessRowForInviteOnly = !audienceAccessRow && isInviteOnly && canEditTeam;
  const showTeamAccessRowForPublic = !audienceAccessRow && !isInviteOnly && team;
  const isClickable = showAudienceAccessRow || showTeamAccessRowForInviteOnly || showTeamAccessRowForPublic;
  const buttonClass = isClickable ? Jt : zn;
  return jsxs(Fragment, {
    children: [jsxs(ButtonPrimitive, {
      'className': buttonClass,
      'onClick': isClickable ? () => changeModalView && changeModalView() : undefined,
      'disabled': !isClickable,
      'data-testid': audienceAccessRow ? 'audience-access-row' : 'team-access-row',
      'children': [accessIconContainer, jsx('div', {
        className: $S,
        children: jsxs('div', {
          className: jq,
          children: [audienceAccessRow && sharingAudienceControl ? jsx('div', {
            children: ET(sharingAudienceControl, org, workspace, false, folder.name)
          }) : (() => {
            const teamName = team ? team.name : getI18nString('folder_permissions_modal.project_name_s_team', {
              projectName: truncate(folder.name, 30)
            });
            return jsx('span', {
              className: team && folder.is_invite_only ? mL : undefined,
              children: renderI18nText('permissions.anyone_in_container_name', {
                containerName: teamName
              })
            });
          })(), (() => {
            if (audienceAccessRow) {
              return org && jsxs('div', {
                'className': j7,
                'data-onboarding-key': projectModalOnboardingKey,
                'children': [sharingAudienceControl && mi(sharingAudienceControl), folderCanEditValue && jsx(SvgComponent, {
                  svg: _$$A2,
                  className: $w
                })]
              });
            }
            if (!canEditTeam) {
              if (isInviteOnly) return jsx(Fragment, {});
              if (team) {
                return renderI18nText('folder_access_row.num_people', {
                  num: teamRoles.length.toString()
                });
              }
              if (isPublicEditable) {
                return jsx('div', {
                  className: j7,
                  children: renderI18nText('permissions.level_name.can_access')
                });
              }
              if (isPublicViewable) {
                return jsx('div', {
                  className: j7,
                  children: renderI18nText('permissions.level_name.can_view')
                });
              }
            }
            return isInviteOnly ? jsx('a', {
              className: KU,
              children: jsx('div', {
                'data-onboarding-key': onboardingKey,
                'children': renderI18nText('folder_access_row.give_access')
              })
            }) : jsx(Fragment, {
              children: jsxs('div', {
                'className': j7,
                'data-onboarding-key': onboardingKey,
                'children': [renderI18nText('folder_access_row.num_people', {
                  num: teamRoles.length.toString()
                }), jsx(SvgComponent, {
                  svg: _$$A2,
                  className: $w
                })]
              })
            });
          })()]
        })
      })]
    }), folderCanEditValue && org && jsx(SharingClarityProjectModalOnboarding, {}), folderCanEditValue && !org && jsx(SharingClarityProjectModalOverlay, {})]
  });
}
interface TeamAccessSettingsProps {
  teamRoles: any[];
  teamName: string;
  teamAccess: FTeamAccessPermissionType;
  goBack: () => void;
}
function ez({
  teamRoles,
  teamName,
  teamAccess
}: TeamAccessSettingsProps) {
  const sortedTeamRoles = useMemo(() => teamRoles.sort((roleA, roleB) => {
    if (roleA.pending === roleB.pending && !roleA.pending) return roleA.user && roleB.user ? roleA.user.handle.toLowerCase() < roleB.user.handle.toLowerCase() ? -1 : 1 : -1;
    if (roleA.pending === roleB.pending && roleA.pending) {
      const emailA = roleA.pendingEmail || '';
      const emailB = roleB.pendingEmail || '';
      return emailA.toLowerCase() < emailB.toLowerCase() ? -1 : 1;
    }
    return roleA.pending ? 1 : -1;
  }), [teamRoles]);
  return jsxs(Fragment, {
    children: [jsx('div', {
      'className': cssBuilderInstance.colorTextSecondary.$,
      'data-testid': 'team-access-settings-description',
      'children': teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_EDIT ? renderI18nText('folder_share_settings.the_following_people_have_access_team', {
        teamName
      }) : renderI18nText('folder_share_settings.the_following_people_have_access_team_view_only', {
        teamName
      })
    }), jsx('div', {
      className: st,
      children: jsx('div', {
        className: d3,
        children: jsx('div', {
          children: sortedTeamRoles.map((role, index) => {
            const user = role.user;
            const userId = role.userId || '';
            return jsx(_$$i, {
              user: {
                id: userId,
                name: user?.name || '',
                email: user?.email || '',
                img_url: user?.imgUrl || '',
                handle: user?.handle || ''
              },
              level: teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_EDIT ? role.level : 100,
              id: userId,
              pending: role.pending,
              pendingEmail: role.pendingEmail || ''
            }, `user-team-row-static-${index}`);
          })
        })
      })
    })]
  });
}
interface TeamAccessLevelSelectorProps {
  selectedTeamAccess: FTeamAccessPermissionType;
  setSelectedTeamAccess: (value: FTeamAccessPermissionType) => void;
  teamName: string;
  goBack?: () => void;
}
function eH({
  selectedTeamAccess,
  setSelectedTeamAccess,
  teamName
}: TeamAccessLevelSelectorProps) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: bV,
      children: getI18nString('folder_permissions_modal.what_team_members_can_do_project', {
        teamName
      })
    }), jsxs(_$$z, {
      value: selectedTeamAccess,
      onChange: setSelectedTeamAccess,
      dataTestId: 'permissions-team-access-level-radio-group',
      children: [jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_EDIT,
        className: hO,
        children: jsx('p', {
          className: tb,
          children: renderI18nText('file_browser.folder_settings.team_access_same_as_team')
        })
      }, 'edit'), jsx('p', {
        className: w3,
        children: renderI18nText('file_browser.folder_settings.team_access_same_as_team_subtitle')
      }), jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_VIEW,
        className: hO,
        children: jsx('p', {
          className: tb,
          children: renderI18nText('file_browser.folder_settings.team_access_view_only')
        })
      }, 'view-only'), jsx('p', {
        className: w3,
        children: renderI18nText('file_browser.folder_settings.team_access_view_only_subtitle')
      }), jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_DISABLED,
        className: hO,
        children: jsx('p', {
          className: tb,
          children: renderI18nText('file_browser.folder_settings.team_access_disable')
        })
      }, 'team-access-disabled'), jsx('p', {
        className: w3,
        children: renderI18nText('file_browser.folder_settings.team_access_disabled_subtitle')
      })]
    })]
  });
}
interface SharingSuggestionsParams {
  orgId: string | null;
  teamId: string | null;
  disabled: boolean;
  contacts: any;
  roles: any[];
  user: any;
  autocompleteTokens: any[];
}

// Extract the sharing suggestions logic into a properly typed function
function getSharingSuggestions({
  orgId,
  teamId,
  disabled,
  contacts,
  roles,
  user,
  autocompleteTokens
}: SharingSuggestionsParams) {
  return _$$$({
    orgId,
    teamId,
    disabled,
    contacts,
    roles,
    user,
    autocompleteTokens
  });
}
export let FolderPermissionsModal = registerModal(modalProps => {
  let modalManager = useModalManager({
    ...modalProps,
    onClose: () => {
      hideModalDispatch(hideModal());
    }
  });
  let {
    folderId
  } = modalProps;
  let currentUser = selectUser();
  let autocompleteState = useSelector((state: any) => state.autocomplete);
  let contactsState = useSelector((state: any) => state.contacts);
  let dropdownShown = useSelector((state: any) => state.dropdownShown);
  let orgDomains = useSelector((state: any) => state.orgDomains);
  let permissionsState = selectPermissionsState();
  let folderData = (liveStoreInstance as any).useFolder(folderId).data;
  let teamData = useSelector((state: any) => folderData?.team_id && state.teams[folderData.team_id] || null);
  let currentOrg = useCurrentUserOrg() || null;
  let [inviteLevel, setInviteLevel] = useState(AccessLevelEnum.VIEWER);
  let [currentView, setCurrentView] = useState(0);
  let [showCopyLinkFeedback, setShowCopyLinkFeedback] = useState(false);
  let hideModalDispatch = useDispatch<AppDispatch>();
  let folderPermissionsSubscription = useSubscription(FolderPermissions, {
    projectId: folderId,
    currentOrgId: currentOrg?.id || null
  }, {
    enabled: !!folderId
  });
  useLayoutEffect(() => {
    if (folderPermissionsSubscription.status === 'loaded' && folderPermissionsSubscription.data.project === null) {
      hideModalDispatch(hideModal());
    }
  }, [folderPermissionsSubscription, hideModalDispatch]);
  let {
    Sprig
  } = useSprigWithSampling();
  useWebLoggerTimerEffect(folderPermissionsSubscription.status === 'loaded', latency => {
    let roleCount = folderPermissionsSubscription.data?.project?.roles?.length ?? 0;
    let roleSize = 'unknown';
    roleSize = roleCount <= 100 ? 'small' : roleCount <= 300 ? 'medium' : 'large';
    trackEventAnalytics('share_modal_latency', {
      latency_ms: latency,
      modal_type: 'project',
      is_outlier: latency > 1e3,
      role_size: roleSize
    }, {
      forwardToDatadog: true
    });
  });
  let folderPermissionsData = useMemo(() => ob(folderPermissionsSubscription), [folderPermissionsSubscription]);
  let {
    org,
    sharingAudienceControl,
    teamAccess,
    team,
    canEdit,
    isOwner,
    canModifyRoles,
    canRead,
    workspace,
    resourceConnection,
    planPublicInfo
  } = folderPermissionsData || {
    org: null,
    sharingAudienceControl: null,
    teamAccess: null,
    team: null,
    canEdit: false,
    isOwner: false,
    canModifyRoles: false,
    canRead: false,
    workspace: null,
    resourceConnection: null,
    planPublicInfo: null
  };
  let currentOrgId = org ? org.id : null;
  let orgDomainsData = org && org.org_domains ? org.org_domains : {
    domains: [],
    isFetching: false,
    fetchedAt: null
  };
  let sortedRoles = useMemo(() => {
    return (folderPermissionsData?.roles || []).sort((roleA, roleB) => roleA.pending === roleB.pending ? getUserHandleOrEmail(roleA, contactsState).toLocaleLowerCase() < getUserHandleOrEmail(roleB, contactsState).toLocaleLowerCase() ? -1 : 1 : roleA.pending ? 1 : -1);
  }, [folderPermissionsData?.roles, contactsState]);
  let handleInviteLevelChange = (level: AccessLevelEnum) => {
    setInviteLevel(level);
  };
  let getSearchResultToken = (email: string) => t9(email, org, orgDomains);
  let validateToken = (email: string) => yI(email, contactsState.usersByEmail[email] || email, org, orgDomainsData, (currentUser as any).email || '');
  useEffect(() => () => {
    hideModalDispatch(cL());
  }, [hideModalDispatch]);
  let sendInvites = (emails: string[]) => {
    hideModalDispatch(sendRoleInvites({
      emails: _$$Z(emails),
      resourceType: FResourceCategoryType.FOLDER,
      resourceIdOrKey: folderId,
      level: inviteLevel,
      emailsToExclude: bp(contactsState.usersByEmail, currentUser, sortedRoles),
      orgName: org ? org.name : void 0,
      teamId: folderData?.team_id || ''
    }));
  };
  let handleSendInvites = (emails: string[]) => {
    if (org && org.domain_capture && orgDomainsData && orgDomainsData.domains.length > 0) {
      let externalEmails = _$$Z(emails).filter(email => isValidEmail(email) && !checkDomainExists(orgDomainsData.domains, email));
      if (org.invite_whitelist_guest_invite_setting == null && externalEmails.length > 0) {
        hideModalDispatch(showModalHandler({
          type: confirmOrgGuestInviteModal,
          data: {
            emails: externalEmails,
            onConfirm: () => {
              sendInvites(emails);
            },
            popStack: true,
            orgName: org.name
          }
        }));
        return;
      }
    }
    sendInvites(emails);
  };
  let copyFolderLink = () => {
    hideModalDispatch(le({
      view: 'folder',
      folderId
    }));
  };
  let handleChangeTeamAccess = () => {
    updateTeamAccessState(teamAccess);
    if (teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
      setCurrentView(0);
      return;
    }
    setCurrentView(2);
  };
  let handleCloseModal = () => {
    hideModalDispatch(hideModal());
    hideModalDispatch(cL());
    trackSharingClarityExit();
  };
  let goBackToInviteView = () => {
    setCurrentView(0);
    setAudienceAccessType(getAudienceAccessType());
    setAudienceAccessLevel(getAudienceAccessLevel());
  };
  let trackSharingClarityExit = useCallback(() => {
    Sprig('track', 'sharing_clarity_share_project_modal_exit');
  }, [Sprig]);
  useEffect(() => {
    hideModalDispatch(fetchContactsOptimist());
  }, [hideModalDispatch]);
  let getAudienceAccessType = useCallback(() => sharingAudienceControl === FPermissionLevelType.ORG_EDIT || sharingAudienceControl === FPermissionLevelType.ORG_VIEW ? _9.ORG : sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT || sharingAudienceControl === FPermissionLevelType.WORKSPACE_VIEW ? _9.WORKSPACE : _9.INVITE_ONLY, [sharingAudienceControl]);
  let getAudienceAccessLevel = useCallback(() => sharingAudienceControl === FPermissionLevelType.ORG_EDIT || sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT ? J4.EDIT : (sharingAudienceControl === FPermissionLevelType.ORG_VIEW || FPermissionLevelType.WORKSPACE_VIEW, J4.VIEW), [sharingAudienceControl]);
  let [audienceAccessType, setAudienceAccessType] = useState<typeof _9>(getAudienceAccessType());
  let [teamAccessState, updateTeamAccessState] = useState<FTeamAccessPermissionType | null>(teamAccess);
  let [audienceAccessLevel, setAudienceAccessLevel] = useState<typeof J4>(getAudienceAccessLevel());
  useEffect(() => {
    setAudienceAccessType(getAudienceAccessType());
    setAudienceAccessLevel(getAudienceAccessLevel());
    updateTeamAccessState(teamAccess);
  }, [sharingAudienceControl, getAudienceAccessType, getAudienceAccessLevel, updateTeamAccessState, teamAccess]);
  let isProOrStudentPlanEnabled = false;
  if (currentOrgId) {
    isProOrStudentPlanEnabled = true;
  } else if (isProOrStudentPlan(planPublicInfo)) {
    isProOrStudentPlanEnabled = true;
  }

  // Refactored sharing suggestions logic with proper typing
  let {
    sharingSuggestions,
    sharingSuggestionIdsToExclude,
    sharingSuggestionEmailsToExclude
  } = getSharingSuggestions({
    orgId: currentOrgId,
    teamId: team?.id ?? null,
    disabled: !isProOrStudentPlanEnabled,
    contacts: contactsState.usersByEmail,
    roles: sortedRoles,
    user: currentUser,
    autocompleteTokens: autocompleteState.tokens
  });
  let mapAudienceAccessToPermissionLevel = (audienceType: typeof _9, accessLevel: typeof J4): FPermissionLevelType => audienceType === _9.ORG && accessLevel === J4.EDIT ? FPermissionLevelType.ORG_EDIT : audienceType === _9.ORG && accessLevel === J4.VIEW ? FPermissionLevelType.ORG_VIEW : audienceType === _9.WORKSPACE && accessLevel === J4.EDIT ? FPermissionLevelType.WORKSPACE_EDIT : audienceType === _9.WORKSPACE && accessLevel === J4.VIEW ? FPermissionLevelType.WORKSPACE_VIEW : FPermissionLevelType.INVITE_ONLY;
  if (!folderData) return jsx(LoadingOverlay, {});

  // Extract team access row rendering to a separate function
  let renderTeamAccessRow = () => {
    let teamId = folderData && folderData.team_id;
    let teamAccessRow = folderData && teamAccess && teamId && jsx(eL, {
      team: team || null,
      folder: folderData,
      folderTeamAccess: teamAccess,
      folderCanEdit: canEdit || void 0,
      org,
      teamRoles: team?.roles ?? [],
      changeModalView: () => {
        if (teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
          setCurrentView(3);
          return;
        }
        setCurrentView(2);
      }
    });
    let canEditTeam = canEdit && team?.canEdit;
    return teamAccess !== FTeamAccessPermissionType.TEAM_ACCESS_DISABLED || canEditTeam ? teamAccessRow : null;
  };

  // Extract role rows rendering to a separate function
  let renderRoleRows = () => {
    let canEditRole = (role: any) => role.level !== AccessLevelEnum.OWNER && role.level !== AccessLevelEnum.ADMIN && !!canModifyRoles;
    return jsx(Fragment, {
      children: sortedRoles.map((role, index) => jsx(_$$O, {
        canEditRole: canEditRole(role),
        canMakeAdmin: false,
        currentOrg: org,
        currentUserOrgId: currentOrgId,
        isOwnerOfResource: isOwner,
        orgDomains: orgDomainsData,
        readOnlyOverrideWarningMessage: getReadOnlyOverrideMessageForFolder(role, permissionsState),
        resource: {
          folder: folderData,
          type: FResourceCategoryType.FOLDER
        },
        resourceName: folderData.name,
        role,
        user: currentUser
      }, `role-row-${index}`))
    });
  };

  // Extract team access saving logic to a separate function
  let handleSaveTeamAccess = () => {
    if (teamAccessState) {
      if (planPublicInfo?.tier === FPlanNameType.STARTER) {
        if (!team) {
          reportError(ServiceCategories.WORKFLOW, new Error('Cannot read team when user tries to update team access for starter team'));
          return;
        }
        teamAccessState === FTeamAccessPermissionType.TEAM_ACCESS_VIEW ? hideModalDispatch(showModalHandler({
          type: Ni,
          data: {
            team,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_PERMISSION_MODAL
          }
        })) : teamAccessState === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED && hideModalDispatch(showModalHandler({
          type: Dp,
          data: {
            team,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_PERMISSION_MODAL
          }
        }));
        return;
      }
      hideModalDispatch(xT({
        folder: folderData,
        teamAccess: teamAccessState
      }));
      if (teamAccessState === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
        setCurrentView(0);
        return;
      }
      setCurrentView(2);
    }
  };
  let teamName = team?.name ?? getI18nString('folder_permissions_modal.project_name_s_team', {
    projectName: folderData.name
  });

  // Extract modal title rendering to a separate function
  let renderModalTitle = (title: string, options?: {
    goBackAction?: () => void;
    rightSideActions?: any;
  }) => {
    let backButton = options?.goBackAction ? jsx(DialogBackButton, {
      onClick: options.goBackAction
    }) : null;
    return jsxs('div', {
      'className': dF,
      'data-testid': 'folder-permissions-modal-title',
      'children': [jsxs('div', {
        className: zY,
        children: [options?.goBackAction ? backButton : null, title]
      }), options?.rightSideActions]
    });
  };
  return jsx(TrackingProvider, {
    name: 'Share Modal',
    properties: {
      resourceType: FResourceCategoryType.FOLDER,
      resourceId: folderId,
      currentView
    },
    children: jsx(ModalRootComponent, {
      manager: modalManager,
      width: 'lg',
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: (() => {
            if (!folderPermissionsData) {
              return jsx('div', {
                className: DA
              });
            }
            switch (currentView) {
              case 0:
                let copyLinkButton = jsx(Button, {
                  'onClick': () => {
                    copyFolderLink();
                    setShowCopyLinkFeedback(true);
                    setTimeout(() => {
                      setShowCopyLinkFeedback(false);
                    }, 4e3);
                  },
                  'htmlAttributes': {
                    role: showCopyLinkFeedback ? 'status' : 'button'
                  },
                  'aria-live': 'polite',
                  'variant': 'link',
                  'iconPrefix': !showCopyLinkFeedback && jsx(_$$r, {
                    className: Sc
                  }),
                  'children': showCopyLinkFeedback ? renderI18nText('file_permissions_modal.link_copied') : renderI18nText('file_permissions_modal.copy_folder_link')
                });
                return renderModalTitle(getI18nString('folder_permissions_modal.share_this_project'), {
                  goBackAction: void 0,
                  rightSideActions: copyLinkButton
                });
              case 1:
                return renderModalTitle(getI18nString('team_view.team_permissions_modal.share_settings'), {
                  goBackAction: goBackToInviteView
                });
              case 3:
                return renderModalTitle(getI18nString('file_browser.folder_settings.change_team_access_team_name', {
                  teamName
                }), {
                  goBackAction: handleChangeTeamAccess
                });
              case 2:
                let canEditTeam = canEdit && team?.canEdit;
                let changeTeamAccessButton = jsx(Button, {
                  variant: 'link',
                  onClick: () => setCurrentView(3),
                  children: renderI18nText('file_browser.folder_settings.change_team_access')
                });
                return renderModalTitle(getI18nString('file_browser.folder_settings.change_team_access_title', {
                  teamName: team?.name ?? ''
                }), {
                  goBackAction: goBackToInviteView,
                  rightSideActions: canEditTeam ? changeTeamAccessButton : void 0
                });
              default:
                throwTypeError(currentView);
            }
          })()
        }), jsx(DialogBody, {
          children: folderPermissionsData ? {
            0: (() => {
              let accessLevelOptions: AccessLevelEnum[] = [];
              canEdit && accessLevelOptions.push(AccessLevelEnum.EDITOR);
              canRead && accessLevelOptions.push(AccessLevelEnum.VIEWER);
              debug(accessLevelOptions.length > 0, 'there should be at least one role (the user\'s own)');
              return jsxs(Fragment, {
                children: [_$$r2(currentUser) ? jsx(_$$X, {
                  resourceType: 'folder'
                }) : jsxs(Fragment, {
                  children: [resourceConnection && jsx('div', {
                    className: KN,
                    children: jsx(BannerFullWidth, {
                      variant: 'brand',
                      icon: jsx(_$$L, {}),
                      children: jsx(BannerMessage, {
                        children: renderI18nText('folder_permissions_modal.this_is_a_connected_project_banner', {
                          hostPlanName: jsx('span', {
                            className: cssBuilderInstance.fontSemiBold.$,
                            children: resourceConnection.hostPlanName
                          }),
                          connectedPlanName: jsx('span', {
                            className: cssBuilderInstance.fontSemiBold.$,
                            children: resourceConnection.connectedPlanName
                          }),
                          connectedProjectLink: jsx(Link, {
                            href: 'https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects',
                            newTab: true,
                            children: getI18nString('resource_connection.connected_project_link')
                          })
                        })
                      })
                    })
                  }), jsx('div', {
                    className: Zk,
                    children: jsx(_$$e2, {
                      SearchResultComponent: o6,
                      TokenComponent: gy,
                      autocomplete: autocompleteState,
                      buttonText: getI18nString('folder_permissions_modal.send_invite'),
                      dispatch: hideModalDispatch,
                      dropdownKey: 'permissions-invite-dropdown',
                      dropdownShown,
                      getSearchResults: email => Wj(email, contactsState.usersByEmail, currentUser, sortedRoles, currentOrgId, folderData.team_id, null, {
                        inviteLevel,
                        source: 'folder-permissions-modal'
                      }, 10),
                      getSelectText: getPermissionLevelName,
                      hideDropdownOnEmpty: true,
                      inviteLevel,
                      onHideModal: handleCloseModal,
                      onInviteLevelChange: handleInviteLevelChange,
                      onSubmit: handleSendInvites,
                      options: accessLevelOptions,
                      placeholderText: getI18nString('team_creation.add_a_name_or_email'),
                      searchResultToken: getSearchResultToken,
                      shouldAutoFocus: true,
                      validateToken,
                      validateTokensAsEmail: true
                    })
                  }), isProOrStudentPlanEnabled && jsx(_$$t2, {
                    suggestions: sharingSuggestions ?? void 0,
                    autocomplete: autocompleteState,
                    searchResultToken: getSearchResultToken,
                    resourceType: 'folder',
                    resourceId: folderId,
                    idsToExclude: sharingSuggestionIdsToExclude ?? void 0,
                    emailsToExclude: sharingSuggestionEmailsToExclude ?? void 0
                  })]
                }), jsx('div', {
                  className: st,
                  children: jsxs('div', {
                    className: d3,
                    children: [jsx('div', {
                      className: KZ,
                      children: getI18nString('file_permissions_modal.who_has_access')
                    }), folderData && folderData.team_id && jsx(eL, {
                      team: team || null,
                      folder: folderData,
                      changeModalView: () => setCurrentView(1),
                      audienceAccessRow: true,
                      sharingAudienceControl: sharingAudienceControl || void 0,
                      workspace: workspace || void 0,
                      org: org || void 0,
                      folderCanEdit: canEdit || void 0,
                      teamRoles: team?.roles ?? []
                    }), renderTeamAccessRow(), renderRoleRows()]
                  })
                })]
              });
            })(),
            1: jsxs('div', {
              className: l2,
              children: [jsx('div', {
                className: bV,
                children: getI18nString('project_creation.who_has_access')
              }), teamData && jsx(YU, {
                resourceType: FResourceCategoryType.FOLDER,
                value: audienceAccessType,
                onChange: setAudienceAccessType,
                workspace: workspace || void 0,
                org: org || void 0,
                team: teamData,
                audienceAccessLevel
              }), audienceAccessType !== _9.INVITE_ONLY && jsxs(Fragment, {
                children: [jsx('div', {
                  className: bV,
                  children: getI18nString('folder_permissions_modal.what_they_can_do')
                }), jsx(Iz, {
                  selectedPermissionsLevel: audienceAccessLevel,
                  setSelectedPermissionsLevel: setAudienceAccessLevel
                }), jsx('div', {
                  className: VA,
                  children: audienceAccessLevel === J4.VIEW ? getI18nString('project_creation.can_view_and_comment') : getI18nString('project_creation.can_create_and_edit_files')
                })]
              })]
            }),
            2: teamAccess ? jsx(ez, {
              teamRoles: team?.roles ?? [],
              teamName,
              teamAccess,
              goBack: goBackToInviteView
            }) : jsx(Fragment, {}),
            3: teamAccessState ? jsx(eH, {
              selectedTeamAccess: teamAccessState,
              setSelectedTeamAccess: updateTeamAccessState,
              teamName,
              goBack: handleChangeTeamAccess
            }) : jsx(Fragment, {})
          }[currentView] : jsx('div', {
            'className': Lq,
            'data-testid': 'loading-spinner',
            'children': jsx(LoadingOverlay, {})
          })
        }), (currentView === 1 || currentView === 3) && jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              onClick: goBackToInviteView,
              variant: 'secondary',
              children: renderI18nText('project_creation.cancel')
            }), jsx(Button, {
              onClick: () => {
                if (teamAccessState !== teamAccess) {
                  handleSaveTeamAccess();
                  return;
                }
                let permissionLevel = mapAudienceAccessToPermissionLevel(audienceAccessType, audienceAccessLevel);
                hideModalDispatch(Q3({
                  folder: folderData,
                  sharingAudienceControl: permissionLevel
                }));
                setCurrentView(0);
              },
              variant: 'primary',
              children: renderI18nText('team_view.team_permissions_modal.save')
            })]
          })
        })]
      })
    })
  });
});
export const W = FolderPermissionsModal;