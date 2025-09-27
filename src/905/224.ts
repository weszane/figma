import { useDispatch } from 'react-redux';
import { jsx } from 'react/jsx-runtime';
import { hideModal, popModalStack, showModalHandler } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { getI18nString, renderI18nText } from '../905/303541';
import { UpgradeAction } from '../905/370443';
import { getProductName } from '../905/389382';
import { getFeatureFlags } from '../905/601108';
import { I as _$$I } from '../905/641938';
import { FeatureFlag, PageFolderFile, TeamCreationSpeedBump } from '../905/652992';
import { logError } from '../905/714362';
import { TeamCanEdit } from '../figma_app/43951';
import { dR, lk } from '../figma_app/109538';
import { FFileType, FOrganizationLevelType } from '../figma_app/191312';
import { useSubscription } from '../figma_app/288654';
import { FILE_TYPE_PAGE_LIMITS, PRIMARY_LIMIT, STANDARD_LIMIT } from '../figma_app/345997';
import { EK } from '../figma_app/396432';
import { throwTypeError } from '../figma_app/465776';
import { startOrgUpgradeFlowThunk, startProUpgradeFlowThunk } from '../figma_app/482142';
import { selectCurrentFile } from '../figma_app/516028';
import { fileActionEnum } from '../figma_app/630077';
import { linkWithTracking } from '../figma_app/637027';
import { getProductAccessTypeOrDefault } from '../figma_app/765689';
import { mapUpsellModalTypeToSource, UpsellSourceType } from '../figma_app/831101';
import { desktopAPIInstance } from '../figma_app/876459';

// Define plan types enum
export enum PlanType {
  STARTER = 0,
  PRO = 1,
  ORG = 2,
  ENTERPRISE = 3,
}

/**
 * Hook to get modal controls for consumption paywalls
 * @param teamId - The team ID for team-specific flows
 * @returns Object with modal control functions
 * (original: useModalControls)
 */
export function useModalControls(teamId: string | null) {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(popModalStack());
  };
  const hideModalFn = () => {
    dispatch(hideModal());
  };
  return {
    cancel: closeModal,
    dispatch,
    startProUpgradeFlow: (redirectInfo: any, upsellSource: any) => {
      if (teamId) {
        hideModalFn();
        const entryPoint = mapUpsellModalTypeToSource({
          upsellSource,
          fallbackEntryPoint: UpsellSourceType.CONSUMPTION_MODAL
        });
        dispatch(startProUpgradeFlowThunk({
          teamId,
          openInNewTab: !desktopAPIInstance,
          selectedView: {
            view: 'team',
            teamId
          },
          entryPoint,
          ...(redirectInfo ? {
            onBillingCompleteRedirectInfo: redirectInfo
          } : {})
        }) as any);
      } else {
        closeModal();
        dispatch(showModalHandler({
          type: dR,
          data: {
            plan: _$$I.PRO,
            upsellSource: UpsellModalType.UNSET,
            ...(redirectInfo ? {
              onBillingCompleteRedirectInfo: redirectInfo
            } : {})
          }
        }) as any);
      }
    },
    startOrgUpgradeFlow: ({
      upsellSource
    }: {
      upsellSource: any;
    }) => {
      hideModalFn();
      const entryPoint = mapUpsellModalTypeToSource({
        upsellSource,
        fallbackEntryPoint: UpsellSourceType.CONSUMPTION_MODAL
      });
      dispatch(startOrgUpgradeFlowThunk({
        openInNewTab: true,
        upsellSource,
        entryPoint
      }) as any);
    },
    startEnterpriseUpgradeFlow: (source: any) => {
      hideModalFn();
      dispatch(showModalHandler({
        type: lk,
        data: {
          source
        }
      }) as any);
    }
  };
}

/**
 * Get resource limits for different plan types
 * @param resourceType - The type of resource (FILE, FOLDER, PAGE)
 * @param fileType - The file type for PAGE resources
 * @returns The limit for the specified resource
 * (original: t)
 */
export function getResourceLimit(resourceType: any, fileType: FFileType | null) {
  switch (resourceType) {
    case PageFolderFile.FILE:
      return STANDARD_LIMIT;
    case PageFolderFile.FOLDER:
      return PRIMARY_LIMIT;
    case PageFolderFile.PAGE:
      return fileType ? FILE_TYPE_PAGE_LIMITS[fileType] : FILE_TYPE_PAGE_LIMITS[FFileType.DESIGN];
  }
}

/**
 * Get starter plan feature text for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns The feature text for starter plan
 * (original: i)
 */
export function getStarterPlanFeatureText(resourceOrFeature: any, fileType: FFileType | null, isCampfire: boolean) {
  // Note: This function references consumptionPaywallUtils.getResourceLimit,
  // so we need to maintain the object structure for backward compatibility
  switch (resourceOrFeature) {
    case PageFolderFile.FOLDER:
      return getI18nString('consumption_paywalls.free_project_limit', {
        project_limit: getResourceLimit(PageFolderFile.FOLDER, fileType)
      });
    case PageFolderFile.FILE:
      return isCampfire ? getI18nString('consumption_paywalls.campfire.starter_file_limit') : getI18nString('consumption_paywalls.both_file_limits', {
        file_limit: getResourceLimit(PageFolderFile.FILE, fileType)
      });
    case PageFolderFile.PAGE:
      if (fileType === FFileType.WHITEBOARD) {
        return getI18nString('consumption_paywalls.free_page_limit_figjam', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType)
        });
      }
      return getI18nString('consumption_paywalls.free_page_limit', {
        page_limit: getResourceLimit(PageFolderFile.PAGE, FFileType.DESIGN)
      });
    case FeatureFlag.AUDIO:
      return getI18nString('consumption_paywalls.text_comments');
    case FeatureFlag.OPEN_SESSION:
      return getI18nString('consumption_paywalls.open_session.no_open_session');
    case FeatureFlag.PROJECT_TRANSFER:
      return getI18nString('consumption_paywalls.project_transfer.no_project_transfers');
    case FeatureFlag.PROTOTYPE_SHARING:
      return fileType === FFileType.SLIDES ? getI18nString('consumption_paywalls.presentation_sharing.no_sharing_presentation_separately') : getI18nString('consumption_paywalls.prototype_sharing.no_sharing_prototypes_separately');
    case FeatureFlag.PASSWORD_PROTECTION:
      return getI18nString('consumption_paywalls.password_protection.no_password_protection');
    case FeatureFlag.VERSION_HISTORY:
      return getI18nString('consumption_paywalls.version_history.no_version_history_past_30_days');
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
    case FeatureFlag.VIDEOS_IN_SLIDES:
    case FeatureFlag.VIDEOS_IN_BUZZ:
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
      return getI18nString('consumption_paywalls.videos_in_prototypes.image_fills_only');
    case FeatureFlag.VOTING:
      return getI18nString('consumption_paywalls.text_comments');
    case FeatureFlag.TEAM_LIBRARY:
      return getI18nString('consumption_paywalls.shared_styles');
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
      return getI18nString('consumption_paywalls.no_control_over_project_permissions');
    case FeatureFlag.PUBLISH_STYLES:
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
      return '';
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
    case FeatureFlag.PROTOTYPING_VARIABLES:
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
      return getI18nString('consumption_paywalls.interactive_prototypes');
    case FeatureFlag.VARIABLES_MODES:
      return getI18nString('consumption_paywalls.variables.1_mode');
    case FeatureFlag.PLUGIN_ANALYTICS:
    case FeatureFlag.WIDGET_ANALYTICS:
      return '';
    case FeatureFlag.SHARED_FONTS:
      return getProPlanFeatureText(resourceOrFeature, fileType);
    case FeatureFlag.DEV_MODE:
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
      return '';
    case FeatureFlag.CONNECTED_PROJECTS:
      return getI18nString('consumption_paywalls.connected_projects.starter_plan_text');
    case FeatureFlag.ADVANCED_SHAPES:
      return getI18nString('consumption_paywalls.advanced_diagramming.basic_shapes_only');
    case FeatureFlag.ORG:
      return '';
    case FeatureFlag.FIGMAKE:
      return getI18nString('consumption_paywalls.figmake_limit');
    case FeatureFlag.PROMPT_LIMIT:
    case FeatureFlag.PUBLISH_SITE:
    case FeatureFlag.CONNECT_DOMAIN:
      return getI18nString('consumption_paywalls.publish_site.no_publishing');
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getI18nString('consumption_paywalls.code_chat_library_import.no_design_libraries');
    case FeatureFlag.MCP:
      return getI18nString('consumption_paywalls.mcp.no_mcp_access');
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get pro plan feature text for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileType - The file type
 * @returns The feature text for pro plan
 * (original: n)
 */
export function getProPlanFeatureText(resourceOrFeature: any, fileType: FFileType | null) {
  switch (resourceOrFeature) {
    case PageFolderFile.FOLDER:
      return getI18nString('consumption_paywalls.unlimited_projects');
    case PageFolderFile.FILE:
      return getI18nString('consumption_paywalls.unlimited_files');
    case PageFolderFile.PAGE:
      if (fileType === FFileType.WHITEBOARD) {
        return getI18nString('consumption_paywalls.unlimited_pages_in_figjam_files');
      }
      return getI18nString('consumption_paywalls.unlimited_pages_in_design_files');
    case FeatureFlag.VOTING:
      return getI18nString('consumption_paywalls.voting');
    case FeatureFlag.AUDIO:
      return getI18nString('consumption_paywalls.audio_conversations');
    case FeatureFlag.OPEN_SESSION:
      return getI18nString('consumption_paywalls.open_session.host_open_sessions');
    case FeatureFlag.PROJECT_TRANSFER:
      return getI18nString('consumption_paywalls.project_transfer.transfer_projects');
    case FeatureFlag.PROTOTYPE_SHARING:
      return fileType === FFileType.SLIDES ? getI18nString('consumption_paywalls.presentation_sharing.share_presentation_separately') : getI18nString('consumption_paywalls.prototype_sharing.share_prototypes_separately');
    case FeatureFlag.PASSWORD_PROTECTION:
      return getI18nString('consumption_paywalls.password_protection.password_protection');
    case FeatureFlag.VERSION_HISTORY:
      return getI18nString('consumption_paywalls.version_history.unlimited_version_history');
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
    case FeatureFlag.VIDEOS_IN_SLIDES:
    case FeatureFlag.VIDEOS_IN_BUZZ:
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
      return getI18nString('consumption_paywalls.videos_in_prototypes.video_and_image_fills');
    case FeatureFlag.TEAM_LIBRARY:
      return getI18nString('consumption_paywalls.shared_team_libraries');
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
      return getI18nString('consumption_paywalls.full_control_over_project_permissions');
    case FeatureFlag.VARIABLES_MODES:
      return getI18nString('consumption_paywalls.variables.4_modes');
    case FeatureFlag.PUBLISH_STYLES:
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
      return '';
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      return getI18nString('consumption_paywalls.multiple_action_prototypes');
    case FeatureFlag.PROTOTYPING_VARIABLES:
      return getI18nString('consumption_paywalls.variables_in_prototypes');
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
      return getI18nString('consumption_paywalls.conditional_prototypes');
    case FeatureFlag.PLUGIN_ANALYTICS:
    case FeatureFlag.WIDGET_ANALYTICS:
      return '';
    case FeatureFlag.SHARED_FONTS:
      return getI18nString('consumption_paywalls.shared_fonts.locally_installed_fonts');
    case FeatureFlag.DEV_MODE:
      return getI18nString('consumption_paywalls.dev_mode');
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
      return getI18nString('consumption_paywalls.dev_mode_admin_settings');
    case FeatureFlag.CONNECTED_PROJECTS:
      return getI18nString('consumption_paywalls.connected_projects.feature_text');
    case FeatureFlag.ADVANCED_SHAPES:
      return getI18nString('consumption_paywalls.advanced_diagramming.basic_and_advanced_shapes');
    case FeatureFlag.ORG:
      return '';
    case FeatureFlag.FIGMAKE:
      return getI18nString('consumption_paywalls.access_to_figmake');
    case FeatureFlag.PROMPT_LIMIT:
    case FeatureFlag.PUBLISH_SITE:
    case FeatureFlag.CONNECT_DOMAIN:
      return getFeatureFlags().ai_ga && fileType ? getI18nString('consumption_paywalls.ai_ga.publishing_current_product', {
        productName: getProductName(getProductAccessTypeOrDefault(fileType))
      }) : getI18nString('consumption_paywalls.publish_site.publishing');
    case FeatureFlag.MCP:
      return getI18nString('consumption_paywalls.mcp.access_to_mcp');
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getI18nString('consumption_paywalls.code_chat_library_import.bring_styling_context');
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get org plan feature text for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileType - The file type
 * @returns The feature text for org plan
 * (original: k)
 */
export function getOrgPlanFeatureText(resourceOrFeature: any, fileType: FFileType | null) {
  switch (resourceOrFeature) {
    case FeatureFlag.VARIABLES_MODES:
      return getI18nString('consumption_paywalls.variables.4_modes');
    case PageFolderFile.FOLDER:
    case PageFolderFile.FILE:
    case PageFolderFile.PAGE:
    case FeatureFlag.VOTING:
    case FeatureFlag.AUDIO:
    case FeatureFlag.OPEN_SESSION:
    case FeatureFlag.PROJECT_TRANSFER:
    case FeatureFlag.PROTOTYPE_SHARING:
    case FeatureFlag.PASSWORD_PROTECTION:
    case FeatureFlag.VERSION_HISTORY:
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
    case FeatureFlag.VIDEOS_IN_SLIDES:
    case FeatureFlag.VIDEOS_IN_BUZZ:
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
    case FeatureFlag.TEAM_LIBRARY:
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
    case FeatureFlag.PUBLISH_STYLES:
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
    case FeatureFlag.PROTOTYPING_VARIABLES:
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
    case FeatureFlag.PLUGIN_ANALYTICS:
    case FeatureFlag.WIDGET_ANALYTICS:
    case FeatureFlag.DEV_MODE:
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
    case FeatureFlag.ADVANCED_SHAPES:
    case FeatureFlag.CONNECTED_PROJECTS:
    case FeatureFlag.FIGMAKE:
    case FeatureFlag.PROMPT_LIMIT:
    case FeatureFlag.PUBLISH_SITE:
    case FeatureFlag.CONNECT_DOMAIN:
    case FeatureFlag.MCP:
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getProPlanFeatureText(resourceOrFeature, fileType);
    case FeatureFlag.SHARED_FONTS:
      return getI18nString('consumption_paywalls.shared_fonts.shared_fonts_and_libraries');
    case FeatureFlag.ORG:
      return '';
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get enterprise plan feature text for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileType - The file type
 * @returns The feature text for enterprise plan
 * (original: R)
 */
export function getEnterprisePlanFeatureText(resourceOrFeature: any, fileType: FFileType | null) {
  switch (resourceOrFeature) {
    case FeatureFlag.VARIABLES_MODES:
      return getI18nString('consumption_paywalls.variables.40_modes');
    case PageFolderFile.FOLDER:
    case PageFolderFile.FILE:
    case PageFolderFile.PAGE:
    case FeatureFlag.VOTING:
    case FeatureFlag.AUDIO:
    case FeatureFlag.OPEN_SESSION:
    case FeatureFlag.PROJECT_TRANSFER:
    case FeatureFlag.PROTOTYPE_SHARING:
    case FeatureFlag.PASSWORD_PROTECTION:
    case FeatureFlag.VERSION_HISTORY:
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
    case FeatureFlag.VIDEOS_IN_SLIDES:
    case FeatureFlag.VIDEOS_IN_BUZZ:
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
    case FeatureFlag.TEAM_LIBRARY:
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
    case FeatureFlag.PUBLISH_STYLES:
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
    case FeatureFlag.PROTOTYPING_VARIABLES:
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
    case FeatureFlag.PLUGIN_ANALYTICS:
    case FeatureFlag.SHARED_FONTS:
    case FeatureFlag.WIDGET_ANALYTICS:
    case FeatureFlag.DEV_MODE:
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
    case FeatureFlag.CONNECTED_PROJECTS:
    case FeatureFlag.ADVANCED_SHAPES:
    case FeatureFlag.ORG:
    case FeatureFlag.FIGMAKE:
    case FeatureFlag.PROMPT_LIMIT:
    case FeatureFlag.PUBLISH_SITE:
    case FeatureFlag.CONNECT_DOMAIN:
    case FeatureFlag.MCP:
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getOrgPlanFeatureText(resourceOrFeature, fileType);
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get paywall feature list for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param planType - The plan type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @param isStarterPlan - Whether this is for starter plan
 * @returns Array of feature list items
 * (original: N)
 */
export function getPaywallFeatureList(resourceOrFeature: any, planType: number, fileType: FFileType | null, isCampfire: boolean, _isStarterPlan: boolean) {
  if (Object.values(PageFolderFile).includes(resourceOrFeature)) return getModalFeatureList(resourceOrFeature, planType, fileType, isCampfire);
  if (resourceOrFeature === FeatureFlag.VARIABLES_MODES) return getVariablesModesFeatureList(planType, fileType, isCampfire);
  if (resourceOrFeature === FeatureFlag.PLUGIN_ANALYTICS || resourceOrFeature === FeatureFlag.WIDGET_ANALYTICS) return getAnalyticsFeatureList(resourceOrFeature, planType);
  if (resourceOrFeature === FeatureFlag.DEV_MODE_ADMIN_SETTINGS) return getDevModeAdminSettingsFeatureList(planType);
  if (resourceOrFeature === FeatureFlag.SHARED_FONTS) return getSharedFontsFeatureList(resourceOrFeature, planType, isCampfire);
  if (resourceOrFeature === FeatureFlag.ORG) return getOrgFeatureList(planType);
  if (Object.values(FeatureFlag).includes(resourceOrFeature)) return getFeatureList(resourceOrFeature, planType, fileType, isCampfire);else if (resourceOrFeature === TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP) return getTeamCreationSpeedBumpFeatureList(planType, fileType, isCampfire);
  return [];
}

/**
 * Get org feature list
 * @param planType - The plan type
 * @returns Array of feature list items
 * (original: O)
 */
function getOrgFeatureList(planType: number) {
  if (planType === 1) {
    return [{
      text: getI18nString('consumption_paywalls.unlimited_files.feature_text')
    }, {
      text: getI18nString('consumption_paywalls.unlimited_pages.feature_text')
    }, {
      text: getI18nString('consumption_paywalls.unlimited_projects.feature_text')
    }];
  } else if (planType === 2) {
    return [{
      text: getI18nString('plan_comparison.campfire.org.feature.unlimited_teams')
    }, {
      text: getI18nString('plan_comparison.campfire.org.feature.branching')
    }, {
      text: getI18nString('plan_comparison.campfire.org.feature.security')
    }, {
      text: getI18nString('plan_comparison.campfire.org.feature.scim')
    }, {
      text: getI18nString('plan_comparison.campfire.org.feature.customizations')
    }];
  }
  return [];
}

/**
 * Get shared fonts feature list
 * @param resourceOrFeature - The resource or feature type
 * @param planType - The plan type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature list items
 * (original: D)
 */
function getSharedFontsFeatureList(resourceOrFeature: any, planType: number, isCampfire: boolean) {
  if (planType === 0) {
    return [{
      text: getStarterPlanFeatureText(resourceOrFeature, FFileType.DESIGN, isCampfire)
    }];
  } else if (planType === 1) {
    return [{
      text: getProPlanFeatureText(resourceOrFeature, FFileType.DESIGN)
    }];
  } else if (planType === 2) {
    return [{
      text: getOrgPlanFeatureText(resourceOrFeature, FFileType.DESIGN)
    }, {
      text: getI18nString('consumption_paywalls.branching.feature_text')
    }, {
      text: getI18nString('consumption_paywalls.design_system_analytics.feature_text')
    }];
  }
  return [];
}

/**
 * Get variables modes feature list
 * @param planType - The plan type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature list items
 * (original: L)
 */
function getVariablesModesFeatureList(planType: number, fileType: FFileType | null, isCampfire: boolean) {
  if (planType === 0) {
    return [{
      text: getStarterPlanFeatureText(PageFolderFile.FILE, FFileType.DESIGN, isCampfire),
      disabled: isNegativeText(getStarterPlanFeatureText(PageFolderFile.FILE, FFileType.DESIGN, isCampfire))
    }, {
      text: getStarterPlanFeatureText(FeatureFlag.VARIABLES_MODES, FFileType.DESIGN, isCampfire)
    }];
  } else if (planType === 1) {
    // This condition seems to be checking if planType equals some variable 't'
    // Since we don't have that variable, we'll assume the else path
    return [{
      text: getProPlanFeatureText(FeatureFlag.VARIABLES_MODES, FFileType.DESIGN)
    }, {
      text: getI18nString('consumption_paywalls.shared_team_libraries')
    }, {
      text: getI18nString('consumption_paywalls.shared_team_libraries')
    }];
  } else if (planType === 2) {
    return [{
      text: getOrgPlanFeatureText(FeatureFlag.VARIABLES_MODES, FFileType.DESIGN)
    }, {
      text: getI18nString('consumption_paywalls.shared_team_libraries')
    }];
  } else if (planType === 3) {
    return [{
      text: getEnterprisePlanFeatureText(FeatureFlag.VARIABLES_MODES, FFileType.DESIGN)
    }, {
      text: getI18nString('consumption_paywalls.variables.rest_api'),
      hoverText: renderI18nText('consumption_paywalls.variables.rest_api_hover_text', {
        learnMore: jsx(linkWithTracking, {
          trusted: true,
          href: 'https://www.figma.com/developers/api#variables',
          target: '_blank',
          children: renderI18nText('consumption_paywalls.learn_more')
        })
      })
    }, {
      text: getI18nString('consumption_paywalls.workspaces')
    }];
  } else {
    throwTypeError(planType);
  }
}

/**
 * Get team creation speed bump feature list
 * @param planType - The plan type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature list items
 * (original: F)
 */
function getTeamCreationSpeedBumpFeatureList(planType: number, fileType: FFileType | null, isCampfire: boolean) {
  if (planType === 0) {
    return [{
      text: getI18nString('consumption_paywalls.free_project_limit', {
        project_limit: getResourceLimit(PageFolderFile.FOLDER, fileType)
      })
    }, isCampfire ? {
      text: getI18nString('consumption_paywalls.campfire.starter_file_limit')
    } : {
      text: getI18nString('consumption_paywalls.both_file_limits', {
        file_limit: getResourceLimit(PageFolderFile.FILE, fileType)
      })
    }, {
      text: getI18nString('consumption_paywalls.free_page_limit', {
        page_limit: getResourceLimit(PageFolderFile.PAGE, fileType)
      })
    }];
  } else {
    return [{
      text: getI18nString('consumption_paywalls.unlimited_projects')
    }, {
      text: getI18nString('consumption_paywalls.unlimited_files')
    }, {
      text: getI18nString('consumption_paywalls.unlimited_pages_in_design_files')
    }];
  }
}

/**
 * Get modal feature list for resources
 * @param resourceType - The resource type
 * @param planType - The plan type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature list items
 * (original: M)
 */
function getModalFeatureList(resourceType: any, planType: number, fileType: FFileType | null, isCampfire: boolean) {
  const otherResourceTypes = Object.values(PageFolderFile).filter(t => t !== resourceType);
  switch (planType) {
    case 0:
      return getResourceFeatureListItems(resourceType, otherResourceTypes, getStarterPlanFeatureText, fileType, isCampfire).map(text => ({
        text,
        disabled: isNegativeText(text)
      }));
    case 1:
      return getResourceFeatureListItems(resourceType, otherResourceTypes, getProPlanFeatureText, fileType).map(text => ({
        text
      }));
    case 2:
      return getResourceFeatureListItems(resourceType, otherResourceTypes, getOrgPlanFeatureText, fileType).map(text => ({
        text
      }));
    case 3:
      return getResourceFeatureListItems(resourceType, otherResourceTypes, getEnterprisePlanFeatureText, fileType).map(text => ({
        text
      }));
    default:
      return [];
  }
}

/**
 * Get resource feature list items
 * @param resourceType - The resource type
 * @param otherResourceTypes - Other resource types
 * @param getTextFunction - Function to get text for a resource
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature text items
 * (original: j)
 */
function getResourceFeatureListItems(resourceType: any, otherResourceTypes: any[], getTextFunction: (resourceType: any, fileType: FFileType | null, isCampfire?: boolean) => string, fileType: FFileType | null, isCampfire?: boolean) {
  return [getTextFunction(resourceType, fileType, isCampfire)].concat(otherResourceTypes.map(type => getTextFunction(type, fileType, isCampfire)));
}

/**
 * Get analytics feature list
 * @param resourceOrFeature - The resource or feature type
 * @param planType - The plan type
 * @returns Array of feature list items
 * (original: N)
 */
function getAnalyticsFeatureList(resourceOrFeature: any, planType: number) {
  if (planType === 2) {
    return resourceOrFeature === FeatureFlag.PLUGIN_ANALYTICS ? [{
      text: getI18nString('consumption_paywalls.manage_plugin_access')
    }] : [{
      text: getI18nString('consumption_paywalls.manage_widget_access')
    }];
  } else if (planType === 3) {
    return resourceOrFeature === FeatureFlag.PLUGIN_ANALYTICS ? [{
      text: getI18nString('consumption_paywalls.manage_plugin_access_by_workspace')
    }, {
      text: getI18nString('consumption_paywalls.plugin_usage_analytics')
    }] : [{
      text: getI18nString('consumption_paywalls.manage_widget_access_by_workspace')
    }, {
      text: getI18nString('consumption_paywalls.widget_usage_analytics')
    }];
  }
  return [];
}

/**
 * Get dev mode admin settings feature list
 * @param planType - The plan type
 * @returns Array of feature list items
 * (original: P)
 */
function getDevModeAdminSettingsFeatureList(planType: number) {
  if (planType === 2) {
    return [{
      text: getI18nString('consumption_paywalls.manage_plugin_access')
    }];
  } else if (planType === 3) {
    return [{
      text: getI18nString('consumption_paywalls.manage_plugin_access_by_workspace')
    }, {
      text: getI18nString('consumption_paywalls.plugin_usage_analytics')
    }, {
      text: getI18nString('consumption_paywalls.dev_mode_customize_experience')
    }];
  }
  return [];
}

/**
 * Get feature list for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param planType - The plan type
 * @param fileType - The file type
 * @param isCampfire - Whether this is for campfire context
 * @returns Array of feature list items
 * (original: U)
 */
function getFeatureList(resourceOrFeature: any, planType: number, fileType: FFileType | null, isCampfire: boolean) {
  let featureTexts: string[] = [];
  const editorType = fileType === FFileType.WHITEBOARD ? getI18nString('consumption_paywalls.editor_type.figjam') : getI18nString('consumption_paywalls.editor_type.figma_design');
  if (planType === 0) {
    switch (resourceOrFeature) {
      case FeatureFlag.VOTING:
      case FeatureFlag.PUBLISH_STYLES:
        featureTexts = [getI18nString('consumption_paywalls.free_editor_type_files_and_project_limit', {
          editor_type: editorType
        }), getI18nString('consumption_paywalls.free_page_limit_per_editor_type_file', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType),
          editor_type: editorType
        })];
        break;
      case FeatureFlag.TEAM_LIBRARY:
        featureTexts = [getI18nString('consumption_paywalls.free_design_files_and_project_limit'), getI18nString('consumption_paywalls.free_page_limit', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType)
        })];
        break;
      case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      case FeatureFlag.PROTOTYPING_VARIABLES:
      case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
        featureTexts = [getStarterPlanFeatureText(resourceOrFeature, fileType, isCampfire)];
        break;
      case FeatureFlag.DEV_MODE:
        featureTexts = [getI18nString('consumption_paywalls.free_design_files_and_project_limit'), getI18nString('consumption_paywalls.free_page_limit', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType)
        })];
        break;
      case FeatureFlag.CONNECTED_PROJECTS:
        featureTexts = [getStarterPlanFeatureText(resourceOrFeature, fileType, isCampfire), getI18nString('consumption_paywalls.campfire.starter_file_limit'), getI18nString('consumption_paywalls.free_page_limit', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType)
        })];
        break;
      case FeatureFlag.FIGMAKE:
        featureTexts = [getStarterPlanFeatureText(resourceOrFeature, fileType, isCampfire)];
        break;
      case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
        featureTexts = [getI18nString('consumption_paywalls.code_chat_library_import.no_design_libraries'), getI18nString('consumption_paywalls.three_files_and_one_project_per_team')];
        break;
      case FeatureFlag.PUBLISH_SITE:
      case FeatureFlag.CONNECT_DOMAIN:
        featureTexts = [getFeatureFlags().ai_ga && fileType === FFileType.FIGMAKE ? getI18nString('consumption_paywalls.ai_ga.publish_make_community') : getI18nString('consumption_paywalls.publish_site.no_publishing'), getI18nString('consumption_paywalls.three_files_and_one_project_per_team')];
        break;
      default:
        featureTexts = [getStarterPlanFeatureText(resourceOrFeature, fileType, isCampfire), getI18nString('consumption_paywalls.free_editor_type_files_and_project_limit', {
          editor_type: editorType
        }), getI18nString('consumption_paywalls.free_page_limit_per_editor_type_file', {
          page_limit: getResourceLimit(PageFolderFile.PAGE, fileType),
          editor_type: editorType
        })];
    }
  } else {
    switch (resourceOrFeature) {
      case FeatureFlag.PUBLISH_STYLES:
        featureTexts = [getI18nString('consumption_paywalls.unlimited_files_and_projects'), getI18nString('consumption_paywalls.unlimited_pages_in_design_files'), getI18nString('consumption_paywalls.shared_team_libraries')];
        break;
      case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      case FeatureFlag.PROTOTYPING_VARIABLES:
      case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
        featureTexts = [getI18nString('consumption_paywalls.multiple_action_prototypes'), getI18nString('consumption_paywalls.variables_in_prototypes'), getI18nString('consumption_paywalls.conditional_prototypes')];
        break;
      case FeatureFlag.CONNECTED_PROJECTS:
        featureTexts = [getProPlanFeatureText(resourceOrFeature, fileType), getI18nString('consumption_paywalls.unlimited_files'), getI18nString('consumption_paywalls.unlimited_pages_in_design_files')];
        break;
      case FeatureFlag.FIGMAKE:
        featureTexts = [getProPlanFeatureText(resourceOrFeature, fileType)];
        break;
      case FeatureFlag.PUBLISH_SITE:
        featureTexts = [getFeatureFlags().ai_ga && fileType ? getI18nString('consumption_paywalls.ai_ga.publishing_current_product', {
          productName: getProductName(getProductAccessTypeOrDefault(fileType))
        }) : getI18nString('consumption_paywalls.publish_site.publishing'), getFeatureFlags().ai_ga ? getI18nString('plan_comparison.feature.ai_credits', {
          aiCredits: EK
        }) : getI18nString('consumption_paywalls.publish_site.higher_credit_limits'), getI18nString('consumption_paywalls.unlimited_files_and_projects')];
        break;
      case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
        featureTexts = [getI18nString('consumption_paywalls.code_chat_library_import.bring_styling_context'), getFeatureFlags().ai_ga ? getI18nString('plan_comparison.feature.ai_credits', {
          aiCredits: EK
        }) : getI18nString('consumption_paywalls.publish_site.higher_credit_limits'), getI18nString('consumption_paywalls.unlimited_files_and_projects')];
        break;
      default:
        featureTexts = [getProPlanFeatureText(resourceOrFeature, fileType), getI18nString('consumption_paywalls.unlimited_files_and_projects'), getI18nString('consumption_paywalls.unlimited_pages_in_editor_type_files', {
          editor_type: editorType
        })];
    }
  }
  return featureTexts.map(text => ({
    text,
    disabled: isNegativeText(text)
  }));
}

/**
 * Check if text is negative (should be disabled)
 * @param text - The text to check
 * @returns Whether the text is negative
 * (original: B)
 */
export function isNegativeText(text: string) {
  switch (text) {
    case getI18nString('consumption_paywalls.password_protection.no_password_protection'):
    case getI18nString('consumption_paywalls.open_session.no_open_session'):
    case getI18nString('consumption_paywalls.project_transfer.no_project_transfers'):
    case getI18nString('consumption_paywalls.presentation_sharing.no_sharing_presentation_separately'):
    case getI18nString('consumption_paywalls.prototype_sharing.no_sharing_prototypes_separately'):
    case getI18nString('consumption_paywalls.version_history.no_version_history_past_30_days'):
    case getI18nString('consumption_paywalls.figmake_limit'):
    case getI18nString('consumption_paywalls.publish_site.no_publishing'):
    case getI18nString('consumption_paywalls.mcp.no_mcp_access'):
    case getI18nString('consumption_paywalls.code_chat_library_import.no_design_libraries'):
      return true;
    default:
      return false;
  }
}

/**
 * Get modal title for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileAction - The file action type
 * @param isMultiple - Whether this is for multiple items
 * @param fileType - The file type
 * @returns The modal title
 * (original: getModalTitle)
 */
export function getModalTitle(resourceOrFeature: any, fileAction: any, isMultiple: boolean, fileType: FFileType | null) {
  switch (resourceOrFeature) {
    case PageFolderFile.FILE:
      if (fileAction === fileActionEnum.MOVE_FILES) {
        return isMultiple ? getI18nString('consumption_paywalls.want_to_add_these_files_to_your_team') : getI18nString('consumption_paywalls_want_to_add_this_file_to_your_team');
      }
      if (fileAction === fileActionEnum.RESTORE_FILES) {
        return isMultiple ? getI18nString('consumption_paywalls.want_to_restore_these_files') : getI18nString('consumption_paywalls.want_to_restore_this_file');
      }
      if (fileAction === fileActionEnum.DUPLICATE_FILES) {
        return isMultiple ? getI18nString('consumption_paywalls.want_to_duplicate_these_files') : getI18nString('consumption_paywalls.want_to_duplicate_this_file');
      }
      if (fileAction === fileActionEnum.IMPORT_FILES) {
        return isMultiple ? getI18nString('consumption_paywalls.want_to_import_these_files') : getI18nString('consumption_paywalls.want_to_import_this_file');
      }
      return getI18nString('consumption_paywalls.need_more_files');
    case PageFolderFile.FOLDER:
      if (fileAction === fileActionEnum.MOVE_FOLDER) return getI18nString('consumption_paywalls.want_to_move_this_project');
      return getI18nString('consumption_paywalls.need_more_projects');
    case PageFolderFile.PAGE:
      return getI18nString('consumption_paywalls.need_more_pages');
    case FeatureFlag.AUDIO:
      return getI18nString('consumption_paywalls.talk_it_through_with_audio');
    case FeatureFlag.OPEN_SESSION:
      return getI18nString('consumption_paywalls.open_session.title');
    case FeatureFlag.PROJECT_TRANSFER:
      return getI18nString('consumption_paywalls.project_transfer.title');
    case FeatureFlag.PROTOTYPE_SHARING:
      return fileType === FFileType.SLIDES ? getI18nString('consumption_paywalls.presentation_sharing.title') : getI18nString('consumption_paywalls.prototype_sharing.title');
    case FeatureFlag.PASSWORD_PROTECTION:
      return getI18nString('consumption_paywalls.password_protection.title');
    case FeatureFlag.VERSION_HISTORY:
      return getI18nString('consumption_paywalls.version_history.title');
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
      return getI18nString('consumption_paywalls.videos_in_prototypes.title');
    case FeatureFlag.VIDEOS_IN_SLIDES:
      return getI18nString('consumption_paywalls.videos_in_slides.title');
    case FeatureFlag.VIDEOS_IN_BUZZ:
      return getI18nString('consumption_paywalls.videos_in_buzz.title');
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
      return getI18nString('consumption_paywalls.videos_in_whiteboard.title');
    case FeatureFlag.VOTING:
      return getI18nString('consumption_paywalls.voting_title');
    case FeatureFlag.TEAM_LIBRARY:
      return getI18nString('consumption_paywalls.ready_to_build_a_team_library');
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
      return getI18nString('consumption_paywalls.need_more_privacy_for_this_project');
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
      return getI18nString('consumption_paywalls.looking_for_unlimited_projects');
    case FeatureFlag.PUBLISH_STYLES:
      return getI18nString('consumption_paywalls.need_to_publish_styles');
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
    case FeatureFlag.PROTOTYPING_VARIABLES:
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
      return getI18nString('consumption_paywalls.need_to_access_prototyping_features');
    case FeatureFlag.VARIABLES_MODES:
      return fileAction === fileActionEnum.PUBLISH_MORE_VARIABLE_MODES ? getI18nString('consumption_paywalls.variables_modes.need_to_publish_variables_for_your_team') : getI18nString('consumption_paywalls.variables_modes.need_more_modes');
    case FeatureFlag.PLUGIN_ANALYTICS:
      return getI18nString('consumption_paywalls.whos_using_plugin');
    case FeatureFlag.WIDGET_ANALYTICS:
      return getI18nString('consumption_paywalls.whos_using_widget');
    case FeatureFlag.SHARED_FONTS:
      return getI18nString('consumption_paywalls.shared_fonts.modal_title');
    case FeatureFlag.DEV_MODE:
      return getI18nString('consumption_paywalls.dev_mode_modal_title');
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
      return getI18nString('consumption_paywalls.dev_mode_admin_settings_modal_title');
    case FeatureFlag.CONNECTED_PROJECTS:
      return getI18nString('consumption_paywalls.connected_projects.title');
    case FeatureFlag.ADVANCED_SHAPES:
      return getI18nString('consumption_paywalls.advanced_diagramming.need_more_advanced_shapes');
    case FeatureFlag.ORG:
      return getI18nString('org_upgrade.single_team.get_more_out_of_figma_as_you_grow');
    case FeatureFlag.FIGMAKE:
      return getI18nString('consumption_paywalls.upgrade_your_team_to_use_figmake');
    case FeatureFlag.PROMPT_LIMIT:
      return getI18nString('consumption_paywalls.credit_limit.title');
    case FeatureFlag.PUBLISH_SITE:
      return getI18nString('consumption_paywalls.publish_site.title');
    case FeatureFlag.CONNECT_DOMAIN:
      return getI18nString('consumption_paywalls.connect_domain.title');
    case FeatureFlag.MCP:
      return getI18nString('consumption_paywalls.mcp.title');
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getI18nString('consumption_paywalls.code_chat_library_import.title');
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get modal learn more link for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @returns The learn more link JSX element
 * (original: getModalLearnMoreLink)
 */
export function getModalLearnMoreLink(resourceOrFeature: any) {
  switch (resourceOrFeature) {
    case FeatureFlag.FIGMAKE:
      return jsx(linkWithTracking, {
        trusted: true,
        target: '_blank',
        href: 'https://help.figma.com/hc/articles/31722591905559-Figma-Make-FAQs',
        children: getI18nString('general.learn_more')
      });
    case PageFolderFile.FILE:
    case PageFolderFile.PAGE:
      if (getFeatureFlags().sts_starter_enabled) {
        return jsx(linkWithTracking, {
          trusted: true,
          target: '_blank',
          href: 'https://help.figma.com/hc/articles/33543548184215',
          children: getI18nString('consumption_paywalls.learn_more.global_file_limit')
        });
      }
      return null;
    default:
      return null;
  }
}

/**
 * Get modal subtitle for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileAction - The file action type
 * @param planType - The plan type
 * @param fileType - The file type
 * @returns The modal subtitle
 * (original: getModalSubtitle)
 */
export function getModalSubtitle(resourceOrFeature: any, fileAction: any, planType: number, fileType: FFileType | null) {
  switch (resourceOrFeature) {
    case PageFolderFile.FILE:
      return getI18nString('consumption_paywalls.the_starter_plan_only_comes_with_file_limit_files', {
        file_limit: getResourceLimit(resourceOrFeature, fileType)
      });
    case PageFolderFile.FOLDER:
      return getI18nString('consumption_paywalls.the_starter_plan_only_comes_with_project_limit_projects', {
        project_limit: getResourceLimit(resourceOrFeature, fileType)
      });
    case PageFolderFile.PAGE:
      if (fileType === FFileType.WHITEBOARD) {
        return getI18nString('consumption_paywalls.upgrade_your_plan_to_get_unlimited_pages_in_all_your_figjam_files');
      }
      return getI18nString('consumption_paywalls.the_starter_plan_only_comes_with_page_limit_pages', {
        page_limit: getResourceLimit(resourceOrFeature, fileType)
      });
    case FeatureFlag.VOTING:
      return getI18nString('consumption_paywalls.upgrade_to_use_voting_description');
    case FeatureFlag.AUDIO:
      return getI18nString('consumption_paywalls.upgrade_to_have_quick_easy_conversations_right_from_your_file');
    case FeatureFlag.OPEN_SESSION:
      return getI18nString('consumption_paywalls.open_session.subtitle');
    case FeatureFlag.PROJECT_TRANSFER:
      return getI18nString('consumption_paywalls.project_transfer.subtitle');
    case FeatureFlag.PROTOTYPE_SHARING:
      return fileType === FFileType.SLIDES ? getI18nString('consumption_paywalls.presentation_sharing.subtitle') : getI18nString('consumption_paywalls.prototype_sharing.subtitle');
    case FeatureFlag.PASSWORD_PROTECTION:
      return getI18nString('consumption_paywalls.password_protection.subtitle');
    case FeatureFlag.VERSION_HISTORY:
      return getI18nString('consumption_paywalls.version_history.subtitle');
    case FeatureFlag.VIDEOS_IN_PROTOTYPES:
    case FeatureFlag.VIDEOS_IN_SLIDES:
    case FeatureFlag.VIDEOS_IN_BUZZ:
    case FeatureFlag.VIDEOS_IN_WHITEBOARD:
      return getI18nString('consumption_paywalls.videos_in_prototypes.subtitle');
    case FeatureFlag.TEAM_LIBRARY:
      return getI18nString('consumption_paywalls.plan_does_not_support_team_libraries');
    case FeatureFlag.VIEW_ONLY_PROJECT:
    case FeatureFlag.INVITE_ONLY_PROJECT:
      return getI18nString('consumption_paywalls.on_your_plan_projects_are_public_to_the_whole_team_professional_lets_you_choose_who_sees_what');
    case TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP:
      return getI18nString('consumption_paywalls.your_plan_only_comes_with_project_limit_projects', {
        project_limit: getResourceLimit(PageFolderFile.FOLDER, fileType)
      });
    case FeatureFlag.PUBLISH_STYLES:
      return getI18nString('consumption_paywalls.your_plan_does_not_support_publishing_library_assets');
    case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      return getI18nString('consumption_paywalls.you_cannot_create_multiple_actions_with_your_current_plan');
    case FeatureFlag.PROTOTYPING_VARIABLES:
      return getI18nString('consumption_paywalls.you_cannot_use_variables_in_prototyping_with_your_current_plan');
    case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
      return getI18nString('consumption_paywalls.you_cannot_use_conditional_prototyping_with_your_current_plan');
    case FeatureFlag.VARIABLES_MODES:
      if (fileAction === fileActionEnum.PUBLISH_MORE_VARIABLE_MODES) {
        return getI18nString('consumption_paywalls.variables_modes.subtitle_publishing');
      }
      if (planType === 0) {
        return getI18nString('consumption_paywalls.variables_modes.subtitle_starter');
      }
      if (planType === 1) {
        return getI18nString('consumption_paywalls.variables_modes.subtitle_pro');
      }
      if (planType === 2) {
        return getI18nString('consumption_paywalls.variables_modes.subtitle_org');
      }
      logError('designSystems', 'Attempted to show upsell modal when current plan is enterprise');
      return '';
    case FeatureFlag.PLUGIN_ANALYTICS:
      return getI18nString('consumption_paywalls.upgrade_plugin_analytics');
    case FeatureFlag.WIDGET_ANALYTICS:
      return getI18nString('consumption_paywalls.upgrade_widget_analytics');
    case FeatureFlag.SHARED_FONTS:
      return getI18nString('consumption_paywalls.shared_fonts.modal_description');
    case FeatureFlag.DEV_MODE:
      return getI18nString('consumption_paywalls.plan_does_not_support_dev_mode');
    case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
      return getI18nString('consumption_paywalls.dev_mode_admin_settings_modal_subtitle');
    case FeatureFlag.CONNECTED_PROJECTS:
      return getI18nString('consumption_paywalls.connected_projects.subtitle');
    case FeatureFlag.ADVANCED_SHAPES:
      return getI18nString('consumption_paywalls.advanced_diagramming.upgrade_advanced_shapes');
    case FeatureFlag.ORG:
      return '';
    case FeatureFlag.FIGMAKE:
      return getI18nString('consumption_paywalls.starter_teams_cannot_access_figmake');
    case FeatureFlag.PROMPT_LIMIT:
      return getI18nString('consumption_paywalls.prompt_limit.subtitle');
    case FeatureFlag.PUBLISH_SITE:
      return getFeatureFlags().ai_ga && fileType === FFileType.FIGMAKE ? getI18nString('consumption_paywalls.publish_site.ai_ga.subtitle') : getI18nString('consumption_paywalls.publish_site.subtitle');
    case FeatureFlag.CONNECT_DOMAIN:
      return getI18nString('consumption_paywalls.connect_domain.subtitle');
    case FeatureFlag.MCP:
      return getI18nString('consumption_paywalls.mcp.subtitle');
    case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
      return getI18nString('consumption_paywalls.code_chat_library_import.subtitle');
    default:
      throwTypeError(resourceOrFeature);
  }
}

/**
 * Get modal tracking name for a given resource or feature
 * @param resourceOrFeature - The resource or feature type
 * @param fileAction - The file action type
 * @returns The modal tracking name
 * (original: getModalTrackingName)
 */
export function getModalTrackingName(resourceOrFeature: any, fileAction: any) {
  const isSpeedBump = Object.values(TeamCreationSpeedBump).includes(resourceOrFeature);
  const isBillingFeature = Object.values(FeatureFlag).includes(resourceOrFeature);
  const isResourceLimit = Object.values(PageFolderFile).includes(resourceOrFeature);
  if (isSpeedBump) {
    return resourceOrFeature === TeamCreationSpeedBump.TEAM_CREATION_SPEED_BUMP ? 'Team creation speed bump upsell modal' : throwTypeError(resourceOrFeature);
  }
  if (isBillingFeature) {
    switch (resourceOrFeature) {
      case FeatureFlag.TEAM_LIBRARY:
        return 'Team Library Paywall Modal';
      case FeatureFlag.AUDIO:
        return 'Audio Paywall Modal';
      case FeatureFlag.VIEW_ONLY_PROJECT:
      case FeatureFlag.INVITE_ONLY_PROJECT:
        return 'Project Permissions Paywall Modal';
      case FeatureFlag.VOTING:
        return 'Voting Paywall Modal';
      case FeatureFlag.OPEN_SESSION:
        return 'Open Session Paywall Modal';
      case FeatureFlag.PROJECT_TRANSFER:
        return 'Project Transfer Paywall Modal';
      case FeatureFlag.PROTOTYPE_SHARING:
        return 'Prototype Sharing Paywall Modal';
      case FeatureFlag.PASSWORD_PROTECTION:
        return 'Password Protection Paywall Modal';
      case FeatureFlag.VERSION_HISTORY:
        return 'Version History Paywall Modal';
      case FeatureFlag.VIDEOS_IN_PROTOTYPES:
        return 'Videos in Prototypes Paywall Modal';
      case FeatureFlag.VIDEOS_IN_SLIDES:
        return 'Videos in Slides Paywall Modal';
      case FeatureFlag.VIDEOS_IN_BUZZ:
        return 'Videos in Buzz Paywall Modal';
      case FeatureFlag.VIDEOS_IN_WHITEBOARD:
        return 'Videos in FigJam Paywall Modal';
      case FeatureFlag.PUBLISH_STYLES:
        return 'Style Publishing Paywall Modal';
      case FeatureFlag.PROTOTYPING_MULTIPLE_ACTIONS:
      case FeatureFlag.PROTOTYPING_VARIABLES:
      case FeatureFlag.PROTOTYPING_CONDITIONAL_ACTIONS:
        return 'Advanced Prototyping Paywall Modal';
      case FeatureFlag.VARIABLES_MODES:
        return 'Variables Modes Paywall Modal';
      case FeatureFlag.PLUGIN_ANALYTICS:
        return 'Plugin Analytics Paywall Modal';
      case FeatureFlag.WIDGET_ANALYTICS:
        return 'Widget Analytics Paywall Modal';
      case FeatureFlag.SHARED_FONTS:
        return 'Shared Fonts Paywall Modal';
      case FeatureFlag.DEV_MODE:
        return 'Dev Mode Paywall Modal';
      case FeatureFlag.DEV_MODE_ADMIN_SETTINGS:
        return 'Dev Mode Admin Settings Paywall Modal';
      case FeatureFlag.CONNECTED_PROJECTS:
        return 'Connected Projects Paywall Modal';
      case FeatureFlag.ADVANCED_SHAPES:
        return 'Advanced Shapes Paywall Modal';
      case FeatureFlag.ORG:
        return 'Pro To Org Modal';
      case FeatureFlag.FIGMAKE:
        return 'Figma Make Paywall Modal';
      case FeatureFlag.PROMPT_LIMIT:
        return 'Prompt Limit Paywall Modal';
      case FeatureFlag.PUBLISH_SITE:
        return 'Publish Site Paywall Modal';
      case FeatureFlag.CONNECT_DOMAIN:
        return 'Connect Domain Paywall Modal';
      case FeatureFlag.MCP:
        return 'Figma MCP Paywall Modal';
      case FeatureFlag.CODE_CHAT_LIBRARY_IMPORT:
        return 'Code Chat Library Import Paywall Modal';
      default:
        return throwTypeError(resourceOrFeature);
    }
  } else if (isResourceLimit && fileAction) {
    switch (fileAction) {
      case fileActionEnum.CREATE_FILE:
      case fileActionEnum.CREATE_FOLDER:
      case fileActionEnum.CREATE_PAGE:
      case fileActionEnum.MOVE_FILES:
      case fileActionEnum.DUPLICATE_PAGE:
        return 'Consumption Paywall Modal: Plans Pricing';
      case fileActionEnum.RESTORE_FILES:
      case fileActionEnum.DUPLICATE_FILES:
      case fileActionEnum.IMPORT_FILES:
      case fileActionEnum.MOVE_FOLDER:
        return 'Consumption Paywall Modal: Pricing Clarity V2';
      case fileActionEnum.CREATE_FILE_FROM_DROPDOWN:
        return 'Consumption Paywall Modal: Hit File Limit From Dropdown';
    }
  }
  return `${resourceOrFeature} ${fileAction} Paywall Modal`;
}

/**
 * Get modal tracking product type for a given file type
 * @param fileType - The file type
 * @returns The modal tracking product type
 * (original: getModalTrackingProductType)
 */
export function getModalTrackingProductType(fileType: FFileType | null) {
  if (fileType) {
    switch (fileType) {
      case FFileType.DESIGN:
        return 'design';
      case FFileType.WHITEBOARD:
        return 'figjam';
      case FFileType.SLIDES:
        return 'slides';
      case FFileType.COOPER:
        return 'cooper';
      case FFileType.SITES:
        return 'sites';
      case FFileType.FIGMAKE:
        return 'figmake';
      default:
        return throwTypeError(fileType);
    }
  }
}

/**
 * Get CTA tracking descriptor
 * @param plan - The plan type
 * @returns The CTA tracking descriptor
 * (original: getCtaTrackingDescriptor)
 */
export function getCtaTrackingDescriptor({
  plan
}: {
  plan: number;
}) {
  return plan === 3 ? UpgradeAction.CONTACT_SALES : plan === 2 ? UpgradeAction.UPGRADE_TO_ORGANIZATION : plan === 1 ? UpgradeAction.UPGRADE_TO_PROFESSIONAL : null;
}

/**
 * Hook to determine if starter CTA should be hidden for open file
 * @returns Whether starter CTA should be hidden
 * (original: useShouldHideStarterCtaForOpenFile)
 */
export function useShouldHideStarterCtaForOpenFile() {
  const currentFile = selectCurrentFile();
  const teamId = currentFile?.teamId;
  const subscription = useSubscription(TeamCanEdit({
    id: teamId ?? ''
  }), {
    enabled: !!teamId
  });
  return subscription.status === 'loaded' && !subscription.data?.team?.hasPermission;
}

/**
 * Convert consumption plan to plan type
 * @param consumptionPlan - The consumption plan
 * @returns The organization level type
 * (original: consumptionPlanToPlanType)
 */
export function consumptionPlanToPlanType(consumptionPlan: number) {
  switch (consumptionPlan) {
    case 0:
    case 1:
      return FOrganizationLevelType.TEAM;
    case 2:
    case 3:
      return FOrganizationLevelType.ORG;
    default:
      return throwTypeError(consumptionPlan);
  }
}

// Create the consumptionPaywallUtils object to maintain backward compatibility
export let consumptionPaywallUtils = {
  useModalControls,
  Plan: PlanType,
  getResourceLimit,
  getStarterPlanFeatureText,
  getProPlanFeatureText,
  getOrgPlanFeatureText,
  getEnterprisePlanFeatureText,
  getPaywallFeatureList,
  getModalTitle,
  getModalLearnMoreLink,
  getModalSubtitle,
  getModalTrackingName,
  getModalTrackingProductType,
  isNegativeText,
  getCtaTrackingDescriptor,
  useShouldHideStarterCtaForOpenFile,
  consumptionPlanToPlanType
};
export const F = consumptionPaywallUtils;