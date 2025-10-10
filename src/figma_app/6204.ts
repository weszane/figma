/**
 * Creates an object with an id and additional properties
 *
 * @param id - The unique identifier for the object
 * @param properties - Additional properties to spread into the object
 * @returns An object containing the id and all provided properties
 */
export function createProperies(id: string, properties: Record<string, any>): {
  id: string
} & Record<string, any> {
  return {
    id,
    ...properties,
  }
}

export let AdvancedPrototypingUpsellOverlay = createProperies("AdvancedPrototypingUpsellOverlay", {
  team: "monetization_upgrades",
})
export let AspectRatioLockOnboarding = createProperies("AspectRatioLockOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "aspect_ratio_locking_onboarding_overlay",
    maxTimes: 1,
  },
})
export let AudioNux = createProperies("AudioNux", {
  team: "feedback",
  queueOnBlock: !0,
})
export let BillingGroupAdminOnboarding = createProperies("BillingGroupAdminOnboarding", {
  team: "scale",
})
export let BugReporterMachine = createProperies("BugReporterMachine", {
  team: "client_platform",
})
export let CollectiveUpsellOverlay = createProperies("CollectiveUpsellOverlay", {
  team: "monetization_upgrades",
})
export let CommunityCreatorMediaUpsellModal = createProperies("CommunityCreatorMediaUpsellModal", {
  team: "community",
  queueOnBlock: !0,
})
export let CommunityDevModeFilterOnboarding = createProperies("CommunityDevModeFilterOnboarding", {
  team: "community",
  queueOnBlock: !0,
})
export let ResourceHubPromotionalOverlay = createProperies("ResourceHubPromotionalOverlay", {
  team: "community",
  queueOnBlock: !0,
})
export let CommunityTabOnboardingOverlay = createProperies("CommunityTabOnboardingOverlay", {
  team: "community",
  queueOnBlock: !0,
})
export let CommunityMonetizationMetricsTabOnboarding = createProperies("CommunityMonetizationMetricsTabOnboarding", {
  team: "community",
  queueOnBlock: !1,
})
export let CommunityProfileAdminDropdownOnboarding = createProperies("CommunityProfileAdminDropdownOnboarding", {
  team: "community",
  queueOnBlock: !0,
})
export let VisualAssetsIntroTooltip = createProperies("VisualAssetsIntroTooltip", {
  team: "community",
})
export let VisualAssetsPanelTooltip = createProperies("VisualAssetsPanelTooltip", {
  team: "community",
})
export let VisualAssetPacksTooltip = createProperies("VisualAssetPacksTooltip", {
  team: "community",
})
export let AIOnboarding = createProperies("AIOnboarding", {
  team: "editor_usability",
  queueOnBlock: !0,
  allowShowingIfModalPresent: !0,
})
export let UI3LayersHorizontalScrollOverlay = createProperies("UI3LayersHorizontalScrollOverlay", {
  team: "editor_usability",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_ui3_layers_horizontal_scroll_overlay",
    maxTimes: 1,
  },
})
export let UI3LabelsEducation = createProperies("UI3LabelsEducation", {
  team: "ui3_platform",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_ui3_labels_onboarding",
    maxTimes: 1,
  },
})
export let UI3ReactivationOverlay = createProperies("UI3ReactivationOverlay", {
  team: "ui3_platform",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_ui2_sunset_overlay",
    maxTimes: 1,
  },
})
export let CustomSectionsNudge = createProperies("CustomSectionsNudge", {
  team: "wayfinding",
})
export let CustomTemplatePublishNudge = createProperies("CustomTemplatePublishNudge", {
  team: "figjam",
})
export let DesignFileLinkExpiration = createProperies("DesignFileLinkExpiration", {
  team: "scale",
})
export let DesktopDownloadModalPrompt = createProperies("DesktopDownloadModalPrompt", {
  team: "desktop",
})
export let DevHandoffConfigWizard = createProperies("DevHandoffConfigWizard", {
  team: "developer_tools",
  queueOnBlock: !0,
})
export let DevModeDemoFileTourOverlay = createProperies("DevModeDemoFileTourOverlay", {
  team: "activation",
  queueOnBlock: !0,
})
export let DevModeUpgradedPopup = createProperies("DevModeUpgradedPopup", {
  team: "developer_tools",
})
export let DevModeOptInEventOnlyOverlay = createProperies("DevModeOptInEventOnlyOverlay", {
  team: "scale",
})
export let DevModeFocusViewOnboardingOverlay = createProperies("DevModeFocusViewOnboardingOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "dev_mode_has_seen_focus_view_onboarding",
    maxTimes: 1,
  },
})
export let DevModeInteractiveInspectionOnboardingOverlay = createProperies("DevModeInteractiveInspectionOnboardingOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "dev_mode_has_seen_interactive_inspection_onboarding",
    maxTimes: 1,
  },
})
export let DevModeOverviewOnboardingOverlay = createProperies("DevModeOverviewOnboardingOverlay", {
  team: "developer_tools",
  allowShowingIfModalPresent: !0,
  lifecycle: {
    userFlagName: "seen_ready_for_dev_callout",
    maxTimes: 1,
  },
})
export let DevModeComponentBrowserOnboardingOverlay = createProperies("DevModeComponentBrowserOnboardingOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "dev_mode_has_seen_component_browser_onboarding",
    maxTimes: 1,
  },
})
export let EditorFigjamWhatsNew = createProperies("EditorFigjamWhatsNew", {
  team: "figjam",
})
export let EduPostVerification = createProperies("EduPostVerification", {
  team: "activation",
})
export let EduOffboarding = createProperies("EduOffboarding", {
  team: "monetization_upgrades",
})
export let EnterpriseOrgAdminOnboarding = createProperies("EnterpriseOrgAdminOnboarding", {
  team: "scale",
})
export let EsEsLaunchAnnouncementModal = createProperies("EsEsLaunchAnnouncementModal", {
  team: "growth_platform",
  lifecycle: {
    userFlagName: "seen_es_es_launch_announcement",
    maxTimes: 1,
  },
})
export let EsLaLaunchAnnouncementModal = createProperies("EsLaLaunchAnnouncementModal", {
  team: "growth_platform",
  lifecycle: {
    userFlagName: "seen_es_la_launch_announcement",
    maxTimes: 1,
  },
})
export let FigJamAdvancedDiagrammingOnboarding = createProperies("FigJamAdvancedDiagrammingOnboarding", {
  team: "figjam",
  queueOnBlock: !0,
})
export let FigJamConnectGoogleDrive = createProperies("FigJamConnectGoogleDrive", {
  team: "figjam",
})
export let FigJamPanZoomOnboardingDLTBannerOverlay = createProperies("FigJamPanZoomOnboardingDLTBannerOverlay", {
  team: "figjam",
  queueOnBlock: !0,
})
export let FigJamTryConfirmSave = createProperies("FigJamTryConfirmSave", {
  team: "figjam",
  queueOnBlock: !0,
})
export let FigJamTryDeviceAlreadyClaimed = createProperies("FigJamTryDeviceAlreadyClaimed", {
  team: "figjam",
  queueOnBlock: !0,
})
export let FigJamUI3ToolbeltOnboarding = createProperies("FigJamUI3ToolbeltOnboarding", {
  team: "figjam",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_figjam_ui3_toolbelt_onboarding",
    maxTimes: 1,
  },
})
export let FigmaBasicsTooltipOnboarding = createProperies("FigmaBasicsTooltipOnboarding", {
  team: "activation",
  queueOnBlock: !0,
})
export let FileBrowserFigjamWhatsNew = createProperies("FileBrowserFigjamWhatsNew", {
  team: "wayfinding",
})
export let GridOnboarding = createProperies("GridOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_grid_onboarding_overlay",
    maxTimes: 1,
  },
})
export let SitesOnboardingCallouts = createProperies("SitesOnboardingCallouts", {
  team: "sites_editor",
  lifecycle: {
    userFlagName: "seen_sites_onboarding_callouts",
    maxTimes: 1,
  },
  queueOnBlock: !0,
})
export let SitesOnboardingCodeCallout = createProperies("SitesOnboardingCodeCallout", {
  team: "make",
  lifecycle: {
    userFlagName: "seen_sites_onboarding_code_callout",
    maxTimes: 1,
  },
})
export let SitesOnboardingTOS = createProperies("SitesOnboardingTOS", {
  team: "sites_editor",
  queueOnBlock: !0,
})
export let FigmakeOnboardingTOS = createProperies("FigmakeOnboardingTOS", {
  team: "ai_for_production",
  queueOnBlock: !0,
})
export let FigmakeMobileWebBlockingPopup = createProperies("FigmakeMobileWebBlockingPopup", {
  team: "activation",
  queueOnBlock: !0,
})
export let FigmakePromoOverlay = createProperies("FigmakePromoOverlay", {
  team: "ai_for_production",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_figmake_promo_overlay",
    maxTimes: 1,
  },
})
export let FigmakeFileCreationTooltip = createProperies("FigmakeFileCreationTooltip", {
  team: "wayfinding",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_figmake_file_creation_tooltip",
    maxTimes: 1,
  },
})
export let FigmakeNewFileOnboardingPreGeneration = createProperies("FigmakeNewFileOnboardingPreGeneration", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_new_file_pre_generation_onboarding",
    maxTimes: 1,
  },
})
export let FigmakeNewFileOnboardingPostGeneration = createProperies("FigmakeNewFileOnboardingPostGeneration", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_new_file_post_generation_onboarding",
    maxTimes: 1,
  },
})
export let FigmakeNewFileTemplateInsertionChatNudge = createProperies("FigmakeNewFileTemplateInsertionChatNudge", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_new_file_template_insertion_chat_nudge",
    maxTimes: 1,
  },
})
export let FigmakeExistingFilesEditorOnboarding = createProperies("FigmakeExistingFilesEditorOnboarding", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_existing_files_editor_onboarding",
    maxTimes: 1,
  },
  queueOnBlock: !0,
})
export let FigmakeExistingFilesFullscreenOnboarding = createProperies("FigmakeExistingFilesFullscreenOnboarding", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_existing_files_fullscreen_onboarding",
    maxTimes: 1,
  },
  queueOnBlock: !0,
})
export let FigmakeSelectedDesignSystemOnboarding = createProperies("FigmakeSelectedDesignSystemOnboarding", {
  team: "ai_for_production",
  lifecycle: {
    userFlagName: "seen_figmake_selected_design_system_onboarding",
    maxTimes: 1,
  },
  queueOnBlock: !0,
})
export let FigmakeSendToMakeOnboarding = createProperies("FigmakeSendToMakeOnboarding", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figmake_send_to_make_onboarding",
    maxTimes: 1,
  },
})
export let SlidesOnboarding = createProperies("SlidesOnboarding", {
  team: "slides",
  lifecycle: {
    userFlagName: "seen_slides_onboarding",
    maxTimes: 1,
  },
  queueOnBlock: !0,
})
export let SlidesAiWelcome = createProperies("SlidesAiWelcome", {
  team: "slides",
  queueOnBlock: !0,
})
export let SlidesTemplateOnboarding = createProperies("SlidesTemplateOnboarding", {
  team: "slides",
  queueOnBlock: !0,
})
export let SlidesProTemplatesAnnouncement = createProperies("SlidesProTemplatesAnnouncement", {
  team: "slides",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_slides_pro_templates_announcement",
    maxTimes: 1,
  },
})
export let BaseNuxOnboardingOverlay = createProperies("NuxOnboardingOverlay", {
  team: "activation",
  queueOnBlock: !0,
})
export let JapaneseLaunchAnnouncementMachine = createProperies("JapaneseLaunchAnnouncementMachine", {
  team: "growth_platform",
  queueOnBlock: !0,
})
export let KoKrLaunchAnnouncementModal = createProperies("KoKrLaunchAnnouncementModal", {
  team: "growth_platform",
  lifecycle: {
    userFlagName: "seen_ko_kr_launch_announcement",
    maxTimes: 1,
  },
})
export let LibrariesWorkspaceOnboarding = createProperies("LibrariesWorkspaceOnboarding", {
  team: "scale",
  allowShowingIfModalPresent: !0,
})
export let LimitedPlanSpacesOnboarding = createProperies("LimitedPlanSpacesOnboarding", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_limited_spaces_onboarding",
    maxTimes: 1,
  },
})
export let LocalComponentDragDrop = createProperies("LocalComponentDragDrop", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let MobileCommentDownloadModalPrompt = createProperies("MobileCommentDownloadModalPrompt", {
  team: "desktop",
})
export let MobileRedirect = createProperies("MobileRedirect", {
  team: "activation",
  queueOnBlock: !0,
})
export let MoveDraftsNudge = createProperies("MoveDraftsNudge", {
  team: "monetization_upgrades",
})
export let MoveDraftsNudgeV2 = createProperies("MoveDraftsNudgeV2", {
  team: "monetization_upgrades",
})
export let MultiplayerObservationNux = createProperies("MultiplayerObservationNux", {
  team: "feedback",
  queueOnBlock: !0,
})
export let MultiplayerSpotlightNudgeNux = createProperies("MultiplayerSpotlightNudgeNux", {
  team: "feedback",
})
export let MultiplayerSpotlightNux = createProperies("MultiplayerSpotlightNux", {
  team: "feedback",
  queueOnBlock: !0,
})
export let OnboardFigJamEditor = createProperies("OnboardFigJamEditor", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamEditorBrowseTemplates = createProperies("OnboardFigJamEditorBrowseTemplates", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamEditorMakeSomething = createProperies("OnboardFigJamEditorMakeSomething", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamViewer = createProperies("OnboardFigJamViewer", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamEditorUnified = createProperies("OnboardFigJamEditorUnified", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamEditorUnifiedPanAndZoom = createProperies("OnboardFigJamEditorUnifiedPanAndZoom", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFigJamEditorUnifiedProduct = createProperies("OnboardFigJamEditorUnifiedProduct", {
  team: "figjam",
  queueOnBlock: !0,
})
export let OnboardFileBrowser = createProperies("OnboardFileBrowser", {
  team: "activation",
  queueOnBlock: !0,
})
export let OnboardNewTextContentRowLocation = createProperies("OnboardNewTextContentRowLocation", {
  team: "prototyping",
  lifecycle: {
    userFlagName: "seen_text_row_location_callout",
    maxTimes: 1,
  },
})
export let OnboardOrgsWelcome = createProperies("OnboardOrgsWelcome", {
  team: "activation",
})
export let OpenPlaygroundFile = createProperies("OpenPlaygroundFile", {
  team: "community",
})
export let OrgAdminActivityOnboarding = createProperies("OrgAdminActivityOnboarding", {
  team: "scale",
})
export let OrgAdminLicenseGroupsOnboarding = createProperies("OrgAdminLicenseGroupsOnboarding", {
  team: "scale",
})
export let OrgAdminMembersOnboarding = createProperies("OrgAdminMembersOnboarding", {
  team: "scale",
})
export let OrgAdminRequestDashboardOnboarding = createProperies("OrgAdminRequestDashboardOnboarding", {
  team: "scale",
})
export let OrgAdminSurvey = createProperies("OrgAdminSurvey", {
  team: "scale",
})
export let OrgAdminTeamOnboarding = createProperies("OrgAdminTeamOnboarding", {
  team: "scale",
})
export let OrgAdminFiltersOnboardingOverlay = createProperies("OrgAdminFiltersOnboardingOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_org_admin_filters_onboarding_overlay",
    maxTimes: 1,
  },
})
export let OrgAdminWorkspacesOnboarding = createProperies("OrgAdminWorkspacesOnboarding", {
  team: "scale",
})
export let OrgAdminUnassignedDraftsTabOnboarding = createProperies("OrgAdminUnassignedDraftsTabOnboarding", {
  team: "scale",
})
export let OrgAdminMovedUnassignedDraftsOnboarding = createProperies("OrgAdminMovedUnassignedDraftsOnboarding", {
  team: "scale",
})
export let OrgCartAbandonSurvey = createProperies("OrgCartAbandonSurvey", {
  team: "monetization_upgrades",
})
export let OrgSelectWorkspace = createProperies("OrgSelectWorkspace", {
  team: "wayfinding",
  queueOnBlock: !0,
})
export let OrgTrialExpiredOverlay = createProperies("OrgTrialExpiredOverlay", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let OrgTrialPendingOverlay = createProperies("OrgTrialPendingOverlay", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let ProductTrialPendingOverlay = createProperies("ProductTrialPendingOverlay", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let OssSalesUpsell = createProperies("OssSalesUpsell", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let PlanSpacesLaunchOverlay = createProperies("PlanSpacesLaunchOverlay", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_plan_spaces_launch_modal",
    maxTimes: 1,
  },
})
export let PlanSpacesNewStarterTeamOverlay = createProperies("PlanSpacesNewStarterTeamOverlay", {
  team: "sharing_and_access",
})
export let PlanSpacesRecreatedStarterTeamOverlay = createProperies("PlanSpacesRecreatedStarterTeamOverlay", {
  team: "sharing_and_access",
})
export let PluginPublishInvitePublishersOnboardingNudgeModal = createProperies("PluginPublishInvitePublishersOnboardingNudgeModal", {
  team: "extensibility",
  allowShowingIfModalPresent: !0,
})
export let ProTrialsV3EntryOverlay = createProperies("ProTrialsV3EntryOverlay", {
  team: "monetization_upgrades",
})
export let ProTrialsV3ExpiryOverlay = createProperies("ProTrialsV3ExpiryOverlay", {
  team: "monetization_upgrades",
})
export let ProTrialsV3TeamWelcomeOverlay = createProperies("ProTrialsV3TeamWelcomeOverlay", {
  team: "monetization_upgrades",
})
export let PromoCodeCreateTeam = createProperies("PromoCodeCreateTeam", {
  team: "monetization_upgrades",
})
export let PromoCodeSelectTeam = createProperies("PromoCodeSelectTeam", {
  team: "monetization_upgrades",
})
export let PtBrLaunchAnnouncementModal = createProperies("PtBrLaunchAnnouncementModal", {
  team: "growth_platform",
  lifecycle: {
    userFlagName: "seen_pt_br_launch_announcement",
    maxTimes: 1,
  },
})
export let ReadyForDevNodeNameChangeUpsell = createProperies("ReadyForDevNodeNameChangeUpsell", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_rfd_frame_or_section_upsell",
    maxTimes: 2,
    cooldown: "FORTNIGHTLY",
  },
})
export let ReadyForDevPageNameChangeUpsell = createProperies("ReadyForDevPageNameChangeUpsell", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_rfd_page_upsell",
    maxTimes: 1,
  },
})
export let SearchWorkspaceOnboarding = createProperies("SearchWorkspaceOnboarding", {
  team: "scale",
})
export let ShareToGoogleClassroomExistingUserOnboarding = createProperies("ShareToGoogleClassroomExistingUserOnboarding", {
  team: "figjam",
  allowShowingIfModalPresent: !0,
  queueOnBlock: !0,
})
export let ShareToGoogleClassroomNewUserOnboarding = createProperies("ShareToGoogleClassroomNewUserOnboarding", {
  team: "figjam",
  allowShowingIfModalPresent: !0,
  queueOnBlock: !0,
})
export let SidebarWorkspaceLinkOnboarding = createProperies("SidebarWorkspaceLinkOnboarding", {
  team: "wayfinding",
  queueOnBlock: !0,
})
export let SprigSurveysOverlay = createProperies("SprigSurveysOverlay", {
  team: "community",
  queueOnBlock: !1,
  allowShowingIfModalPresent: !0,
})
export let StarterPlanUpdatesOverlay = createProperies("StarterPlanUpdatesOverlay", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_starter_plan_updates_overlay",
    maxTimes: 1,
  },
})
export let TeamProjectLinkOverlay = createProperies("TeamProjectLinkOverlay", {
  team: "monetization_upgrades",
})
export let UniversalUpgrade = createProperies("UniversalUpgrade", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let UpsellLibrariesConsecutivePaste = createProperies("UpsellLibrariesConsecutivePaste", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let UpsellLibrariesReuseComponentsOverlay = createProperies("UpsellLibrariesReuseComponentsOverlay", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_reuse_components_overlay",
    maxTimes: 2,
    cooldown: "DAILY",
  },
})
export let WorkflowInteropMachine = createProperies("WorkflowInteropMachine", {
  team: "activation",
  queueOnBlock: !1,
})
export let WorkshopPointer = createProperies("WorkshopPointer", {
  team: "figjam",
})
export let WorkspaceAdminOnboarding = createProperies("WorkspaceAdminOnboarding", {
  team: "scale",
})
export let MobileReplyUpsellAnnouncement = createProperies("MobileReplyUpsellAnnouncement", {
  team: "desktop",
})
export let MobileReplyUpsellHint = createProperies("MobileReplyUpsellHint", {
  team: "desktop",
})
export let FigJamTemplatesWhatsNew = createProperies("FigJamTemplatesWhatsNew", {
  team: "figjam",
})
export let ColorManagementDefaultToP3Modal = createProperies("ColorManagementDefaultToP3Modal", {
  team: "editor_usability",
  queueOnBlock: !0,
})
export let LinkShortcutOverlay = createProperies("LinkShortcutOverlay", {
  team: "extensibility",
})
export let MSALOnboardingOverlay = createProperies("MSALOnboardingOverlay", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_msal_onboarding_overlay",
    maxTimes: 1,
  },
})
export let FrameFormattingReactiveFollowUp = createProperies("FrameFormattingReactiveFollowUp", {
  team: "activation",
})
export let TextFormattingReactiveFollowUp = createProperies("TextFormattingReactiveFollowUp", {
  team: "activation",
})
export let SetUserOnboardingProgressUserFlagsEventOnlyOverlay = createProperies("SetUserOnboardingProgressUserFlagsEventOnlyOverlay", {
  team: "activation",
})
export let FeedPostDetailZoomPanNudge = createProperies("FeedPostDetailZoomPanNudge", {
  team: "wayfinding",
  allowShowingIfModalPresent: !0,
})
export let TeamFeedAudienceSelection = createProperies("TeamFeedAudienceSelection", {
  team: "wayfinding",
  allowShowingIfModalPresent: !0,
})
export let FigJamAiNewFileOverlay = createProperies("FigJamAiNewFileOverlay", {
  team: "ai_productivity",
  queueOnBlock: !0,
})
export let FigJamAiSummarizationNudgeOverlay = createProperies("FigJamAiSummarizationNudgeOverlay", {
  team: "ai_productivity",
})
export let FigJamAISummarizationEntrpointPointerOverlay = createProperies("FigJamAISummarizationEntrpointPointerOverlay", {
  team: "ai_productivity",
})
export let FigJamAiToolbarOverlay = createProperies("FigJamAiToolbarOverlay", {
  team: "ai_productivity",
})
export let FigJamSectionPresetsAnnouncementOverlay = createProperies("FigJamSectionPresetsAnnouncementOverlay", {
  team: "figjam",
  queueOnBlock: !0,
})
export let FigJamSectionPresetPickerCallout = createProperies("FigJamSectionPresetPickerCallout", {
  team: "figjam",
})
export let CursorBotV2Overlay = createProperies("CursorBotV2Overlay", {
  team: "activation",
  queueOnBlock: !0,
})
export let CursorBotFrameFormattingFollowUp = createProperies("CursorBotFrameFormattingFollowUp", {
  team: "activation",
})
export let CursorBotTextFormattingFollowUp = createProperies("CursorBotTextFormattingFollowUp", {
  team: "activation",
})
export let SharingClarityAdminOnboardingOverlay = createProperies("SharingClarityAdminOnboardingOverlay", {
  team: "workflow",
})
export let SharingClarityBranchModalOverlay = createProperies("SharingClarityBranchModalOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityFileAudienceOverlay = createProperies("SharingClarityFileAudienceOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityFileModalOverlay = createProperies("SharingClarityFileModalOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityPrototypeModalOverlay = createProperies("SharingClarityPrototypeModalOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityProjectCreationPermissionOverlay = createProperies("SharingClarityProjectCreationPermissionOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityProjectCreationTeamAccessOverlay = createProperies("SharingClarityProjectCreationTeamAccessOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityProjectModalOverlay = createProperies("SharingClarityProjectModalOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let SharingClarityTeamCreationOverlay = createProperies("SharingClarityTeamCreationOverlay", {
  team: "workflow",
  allowShowingIfModalPresent: !0,
})
export let TeamAdminAuthorityOverlay = createProperies("TeamAdminAuthorityOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_team_admin_authority_overlay",
    maxTimes: 1,
  },
})
export let TeamAdminMovedUnassignedDraftsOverlay = createProperies("TeamAdminMovedUnassignedDraftsOverlay", {
  team: "scale",
})
export let TeamAdminManageUnassignedDraftsOverlay = createProperies("TeamAdminManageUnassignedDraftsOverlay", {
  team: "scale",
})
export let TeamAdminPeopleTableChangesOverlay = createProperies("TeamAdminPeopleTableChangesOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_team_admin_people_table_changes_overlay",
    maxTimes: 1,
  },
})
export let OrgAdminFlyoutOnboardingOverlay = createProperies("OrgAdminFlyoutOnboardingOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_org_admin_flyout_onboarding_overlay",
    maxTimes: 1,
  },
})
export let OrgAdminAuthorityOverlay = createProperies("OrgAdminAuthorityOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_org_admin_authority_overlay",
    maxTimes: 1,
  },
})
export let AdminDashboardOnboardingOverlay = createProperies("AdminDashboardOnboardingOverlay", {
  team: "monetization_expansion",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_admin_dashboard_onboarding",
    maxTimes: 1,
  },
})
export let AdminSeatApprovalSettingsOnboardingOverlay = createProperies("AdminSeatApprovalSettingsOnboardingOverlay", {
  team: "monetization_expansion",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_admin_seat_approval_settings_onboarding",
    maxTimes: 1,
  },
})
export let AdminNavigationOnboardingOverlay = createProperies("AdminNavigationOnboardingOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_admin_navigation_onboarding",
    maxTimes: 1,
  },
})
export let AdminBillingOverviewSecondaryTabOnboardingOverlay = createProperies("AdminBillingOverviewSecondaryTabOnboardingOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_admin_billing_overview_secondary_tab_onboarding_overlay",
    maxTimes: 1,
  },
})
export let OrgAdminBillingGroupsSecondaryTabOnboardingOverlay = createProperies("OrgAdminBillingGroupsSecondaryTabOnboardingOverlay", {
  team: "scale",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_org_admin_billing_groups_secondary_tab_onboarding_overlay",
    maxTimes: 1,
  },
})
export let StartingPointsTemplatesModal = createProperies("StartingPointsTemplatesModal", {
  team: "activation",
  queueOnBlock: !0,
  allowShowingIfModalPresent: !0,
})
export let FilePreviewOverlay = createProperies("FilePreviewOverlay", {
  team: "search",
  lifecycle: {
    userFlagName: "seen_file_preview_overlay",
    maxTimes: 1,
  },
})
export let DevModeOnboardingTooltipOverlay = createProperies("DevModeOnboardingTooltipOverlay", {
  team: "activation",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "dev_mode_has_seen_onboarding_tooltip",
    maxTimes: 1,
  },
})
export let DeveloperRFDUpsellOverlay = createProperies("DeveloperRFDUpsellOverlay", {
  team: "activation",
  queueOnBlock: !1,
  lifecycle: {
    userFlagName: "dev_mode_has_seen_rfd_upsell",
    maxTimes: 10,
    cooldown: "MONTHLY",
  },
})
export let DeveloperContextualUpsellExportOverlay = createProperies("DeveloperContextualUpsellExportOverlay", {
  team: "activation",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "dev_mode_has_seen_contextual_upsell_export_overlay",
    maxTimes: 2,
    cooldown: "FORTNIGHTLY",
  },
})
export let DeveloperContextualUpsellMeasureOverlay = createProperies("DeveloperContextualUpsellMeasureOverlay", {
  team: "activation",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "dev_mode_has_seen_contextual_upsell_measure_overlay",
    maxTimes: 2,
    cooldown: "FORTNIGHTLY",
  },
})
export let JobTitlePromptOverlay = createProperies("JobTitlePromptOverlay", {
  team: "activation",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_job_title_prompt_v2_overlay",
    maxTimes: 3,
    cooldown: "FORTNIGHTLY",
  },
})
export let SeatBillingTermsOverlay = createProperies("SeatBillingTermsOverlay", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_seat_billing_terms_modal",
    cooldown: "DAILY",
  },
})
export let SeatApprovalOverlay = createProperies("SeatApprovalOverlay", {
  team: "monetization_upgrades",
  queueOnBlock: !0,
})
export let FolderSettingsConnectedProjectsOnboardingOverlay = createProperies("FolderSettingsConnectedProjectsOnboardingOverlay", {
  team: "workflow",
})
export let FolderSettingsDisconnectedProjectShareCopyOnboardingOverlay = createProperies("FolderSettingsDisconnectedProjectShareCopyOnboardingOverlay", {
  team: "workflow",
})
export let ConnectedProjectsAdminSettingsOverlay = createProperies("ConnectedProjectsAdminSettingsOverlay", {
  team: "workflow",
  lifecycle: {
    userFlagName: "seen_connected_projects_admin_settings_overlay",
    maxTimes: 1,
  },
})
export let ConnectedProjectsAdminSettingsContentTabOverlay = createProperies("ConnectedProjectsAdminSettingsContentTabOverlay", {
  team: "workflow",
  lifecycle: {
    userFlagName: "seen_connected_projects_admin_settings_content_tab_overlay",
    maxTimes: 1,
  },
})
export let ConnectedProjectsUsageOverlay = createProperies("ConnectedProjectsUsageOverlay", {
  team: "workflow",
})
export let FileViewHistoryOnboardingOverlay = createProperies("FileViewHistoryOnboardingOverlay", {
  team: "workflow",
})
export let DtmDeprecationFileOverlay = createProperies("DtmDeprecationFileOverlay", {
  team: "workflow",
  lifecycle: {
    userFlagName: "seen_dtm_deprecation_file_overlay",
    maxTimes: 1,
  },
})
export let DtmDeprecationPostMigrationOverlay = createProperies("DtmDeprecationPostMigrationOverlay", {
  team: "workflow",
  lifecycle: {
    userFlagName: "seen_dtm_deprecation_post_migration_overlay",
    maxTimes: 1,
  },
})
export let DtmDeprecationNavToPlanOverlay = createProperies("DtmDeprecationNavToPlanOverlay", {
  team: "workflow",
  lifecycle: {
    userFlagName: "seen_dtm_deprecation_nav_to_plan_overlay",
    maxTimes: 1,
  },
})
export let ColorContrastOnboardingOverlay = createProperies("ColorContrastOnboardingOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "has_seen_color_contrast_onboarding_overlay",
    maxTimes: 1,
  },
})
export let EyeDropperToolInDevModeOnboardingOverlay = createProperies("EyeDropperToolInDevModeOnboardingOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "has_seen_eyedropper_tool_in_dev_mode_onboarding_overlay",
    maxTimes: 1,
  },
})
export let GuestLanguagePickerOverlay = createProperies("GuestLanguagePickerOverlay", {
  team: "growth_platform",
})
export let DevModeDemoFileEntryPoint = createProperies("DevModeDemoFileEntryPoint", {
  team: "activation",
  lifecycle: {
    userFlagName: "has_seen_dev_mode_demo_file_entry_point_popup",
    maxTimes: 3,
    cooldown: "DAILY",
  },
})
export let CooperBulkCreate = createProperies("CooperBulkCreate", {
  team: "project_buzz",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_cooper_bulk_create_callout",
    maxTimes: 1,
  },
})
export let CooperInsertLockedTemplate = createProperies("CooperInsertLockedTemplate", {
  team: "project_buzz",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_cooper_insert_locked_template",
    maxTimes: 1,
  },
})
export let CooperModal = createProperies("CooperModal", {
  team: "project_buzz",
  queueOnBlock: !0,
})
export let CooperPublishTemplatesOverview = createProperies("CooperPublishTemplatesOverview", {
  team: "project_buzz",
  queueOnBlock: !0,
  lifecycle: {
    userFlagName: "seen_cooper_publish_templates_overview",
    maxTimes: 1,
  },
})
export let SitesStarterFullscreenOverlay = createProperies("SitesStarterFullscreenOverlay", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_sites_starter_fullscreen_overlay",
    cooldown: "DAILY",
  },
})
export let FigMakeStarterFullscreenOverlay = createProperies("FigMakeStarterFullscreenOverlay", {
  team: "monetization_upgrades",
  lifecycle: {
    userFlagName: "seen_figmake_starter_fullscreen_overlay",
    cooldown: "DAILY",
  },
})
export let KoreanReportTranslationIssueCallout = createProperies("KoreanReportTranslationIssueCallout", {
  team: "growth_platform",
  lifecycle: {
    userFlagName: "seen_korean_report_translation_issue_callout",
    maxTimes: 1,
  },
})
export let FigJamAIActionsCallout = createProperies("FigJamAIActionsCallout", {
  team: "figjam",
  lifecycle: {
    userFlagName: "seen_figjam_ai_actions_callout",
    maxTimes: 1,
  },
})
export let DrawFirstTimeOnboarding = createProperies("DrawFirstTimeOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_first_time_onboarding",
    maxTimes: 1,
  },
})
export let DrawSecondaryToolbeltOnboarding = createProperies("DrawSecondaryToolbeltOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_secondary_toolbelt_onboarding",
    maxTimes: 1,
  },
})
export let DrawPropertiesPanelOnboarding = createProperies("DrawPropertiesPanelOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_properties_panel_onboarding",
    maxTimes: 1,
  },
})
export let DrawDesignFollowupOnboarding = createProperies("DrawDesignFollowupOnboarding", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_design_followup_onboarding",
    maxTimes: 1,
  },
})
export let DrawVariableWidthStrokeOnboarding = createProperies("DrawVariableWidthStrokeOnboarding", {
  team: "texture_labs",
  lifecycle: {
    userFlagName: "seen_draw_variable_width_stroke_onboarding",
    maxTimes: 1,
  },
})
export let DrawScatterBrushOnboarding = createProperies("DrawScatterBrushOnboarding", {
  team: "texture_labs",
  lifecycle: {
    userFlagName: "seen_draw_scatter_brush_onboarding",
    maxTimes: 1,
  },
})
export let TOSAgreementOverlay = createProperies("TOSAgreementOverlay", {
  team: "activation",
  queueOnBlock: !0,
})
export let DrawPostConfigNudge = createProperies("DrawPostConfigNudge", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_post_config_nudge",
    maxTimes: 1,
  },
})
export let DrawBackToDesignNudge = createProperies("DrawBackToDesignNudge", {
  team: "text_and_vector",
  lifecycle: {
    userFlagName: "seen_draw_back_to_design_nudge",
    maxTimes: 1,
  },
})
export let ViewerDevModeStatusChangedTooltipOverlay = createProperies("ViewerDevModeStatusChangedTooltipOverlay", {
  team: "activation",
  lifecycle: {
    userFlagName: "dev_mode_has_seen_viewer_dev_mode_status_changed_notif_overlay",
    maxTimes: 1,
  },
})
export let McpEnableButtonCalloutOverlay = createProperies("McpEnableButtonCalloutOverlay", {
  team: "developer_tools",
  lifecycle: {
    userFlagName: "dev_mode_mcp_has_seen_mcp_enable_button_callout",
    maxTimes: 3,
    cooldown: "WEEKLY",
  },
})
export let BrowserNotificationsOnboardingOverlay = createProperies("BrowserNotificationsOnboardingOverlay", {
  team: "wayfinding",
  lifecycle: {
    localStorageName: "seen_browser_notifications_onboarding_overlay",
    maxTimes: 2,
    cooldown: "WEEKLY",
  },
})
export let GlassEffectOnboardingOverlay = createProperies("GlassEffectOnboardingOverlay", {
  team: "texture_labs",
  lifecycle: {
    userFlagName: "seen_glass_effect_onboarding_overlay",
    maxTimes: 1,
  },
})
export let VideoFillCallout = createProperies("VideoFillCallout", {
  team: "sites_web_publishing",
  lifecycle: {
    userFlagName: "seen_video_fill_callout",
    maxTimes: 1,
  },
})
export let FigmaMakeUpsellInDesignEditorOverlay = createProperies("FigmaMakeUpsellInDesignEditorOverlay", {
  team: "activation",
  lifecycle: {
    userFlagName: "seen_figma_make_upsell_in_design_editor_overlay",
    maxTimes: 1,
  },
})
export const $T1 = MobileReplyUpsellHint
export const B14 = AdvancedPrototypingUpsellOverlay
export const BTz = TeamProjectLinkOverlay
export const BWk = SharingClarityProjectModalOverlay
export const BZN = FigmakeSendToMakeOnboarding
export const Bd = FigmakeNewFileOnboardingPreGeneration
export const BrS = UpsellLibrariesReuseComponentsOverlay
export const Byv = FigJamSectionPresetPickerCallout
export const CAe = JobTitlePromptOverlay
export const CBZ = FigmakePromoOverlay
export const CVA = FrameFormattingReactiveFollowUp
export const Clh = AdminSeatApprovalSettingsOnboardingOverlay
export const DE1 = OrgAdminAuthorityOverlay
export const DFF = SprigSurveysOverlay
export const DKg = ShareToGoogleClassroomNewUserOnboarding
export const Dkp = DrawFirstTimeOnboarding
export const Dqt = MobileReplyUpsellAnnouncement
export const Duq = PlanSpacesNewStarterTeamOverlay
export const E5y = DevModeDemoFileEntryPoint
export const EKN = OrgAdminFlyoutOnboardingOverlay
export const ENg = CursorBotTextFormattingFollowUp
export const EYw = StartingPointsTemplatesModal
export const FJT = EsLaLaunchAnnouncementModal
export const FR6 = KoreanReportTranslationIssueCallout
export const Fff = SlidesAiWelcome
export const Fq3 = WorkshopPointer
export const FtN = DevModeFocusViewOnboardingOverlay
export const GCV = SharingClarityFileModalOverlay
export const GFz = OrgAdminSurvey
export const H2x = MobileCommentDownloadModalPrompt
export const HU3 = UI3ReactivationOverlay
export const HaT = OrgAdminUnassignedDraftsTabOnboarding
export const Htp = FigmakeExistingFilesFullscreenOnboarding
export const Hx5 = DevModeComponentBrowserOnboardingOverlay
export const I$z = PromoCodeSelectTeam
export const I3H = FileBrowserFigjamWhatsNew
export const I5n = FigJamConnectGoogleDrive
export const IQ = TextFormattingReactiveFollowUp
export const Iu5 = DevModeInteractiveInspectionOnboardingOverlay
export const JGK = FigJamTryConfirmSave
export const JUF = ColorContrastOnboardingOverlay
export const K69 = TeamFeedAudienceSelection
export const KP = DrawBackToDesignNudge
export const KTt = AIOnboarding
export const KYV = FigmakeNewFileOnboardingPostGeneration
export const K_h = DesignFileLinkExpiration
export const KdZ = SharingClarityBranchModalOverlay
export const Kgs = ResourceHubPromotionalOverlay
export const Kze = OnboardFigJamEditorUnifiedProduct
export const L69 = TeamAdminPeopleTableChangesOverlay
export const L6E = DeveloperContextualUpsellExportOverlay
export const LB2 = CustomSectionsNudge
export const LPt = TeamAdminManageUnassignedDraftsOverlay
export const LQ8 = ConnectedProjectsUsageOverlay
export const MJs = OnboardFigJamViewer
export const MYY = OrgCartAbandonSurvey
export const Msu = EnterpriseOrgAdminOnboarding
export const MwQ = ProTrialsV3EntryOverlay
export const NM0 = FileViewHistoryOnboardingOverlay
export const Nbd = SitesOnboardingCallouts
export const NdL = ProTrialsV3ExpiryOverlay
export const Nh9 = DeveloperContextualUpsellMeasureOverlay
export const Njd = OnboardFigJamEditorMakeSomething
export const Nlr = VideoFillCallout
export const Nwg = GlassEffectOnboardingOverlay
export const O5v = OrgAdminLicenseGroupsOnboarding
export const O9D = CommunityMonetizationMetricsTabOnboarding
export const ODB = CooperInsertLockedTemplate
export const OKV = DtmDeprecationFileOverlay
export const ONe = OrgAdminRequestDashboardOnboarding
export const Ob5 = OnboardFileBrowser
export const PXv = DrawSecondaryToolbeltOnboarding
export const Q16 = OrgAdminActivityOnboarding
export const QI3 = VisualAssetPacksTooltip
export const QKV = CooperPublishTemplatesOverview
export const QLv = FigJamAiToolbarOverlay
export const Ql8 = OrgAdminTeamOnboarding
export const Qlc = PromoCodeCreateTeam
export const QpH = SharingClarityProjectCreationPermissionOverlay
export const QzE = ConnectedProjectsAdminSettingsContentTabOverlay
export const RSb = FigJamAiSummarizationNudgeOverlay
export const SAR = CooperModal
export const SAW = DrawScatterBrushOnboarding
export const Sgd = LimitedPlanSpacesOnboarding
export const Smd = LocalComponentDragDrop
export const SqV = SharingClarityProjectCreationTeamAccessOverlay
export const SyB = CursorBotV2Overlay
export const TUm = FigmakeFileCreationTooltip
export const TaD = AdminDashboardOnboardingOverlay
export const Tp6 = SidebarWorkspaceLinkOnboarding
export const TrJ = VisualAssetsPanelTooltip
export const TtK = SitesOnboardingCodeCallout
export const Ttn = EditorFigjamWhatsNew
export const Tuf = UI3LabelsEducation
export const Tw6 = KoKrLaunchAnnouncementModal
export const UDe = LibrariesWorkspaceOnboarding
export const USq = OrgSelectWorkspace
export const Ujx = OrgTrialExpiredOverlay
export const Ult = EduOffboarding
export const UmN = OrgAdminMembersOnboarding
export const V86 = OnboardNewTextContentRowLocation
export const WD4 = FigmaBasicsTooltipOnboarding
export const War = EyeDropperToolInDevModeOnboardingOverlay
export const Wb3 = UniversalUpgrade
export const Wd_ = FigJamAdvancedDiagrammingOnboarding
export const X5_ = OnboardOrgsWelcome
export const XAb = FigJamTryDeviceAlreadyClaimed
export const XIg = SharingClarityAdminOnboardingOverlay
export const Xu4 = DevModeUpgradedPopup
export const Y2_ = ShareToGoogleClassroomExistingUserOnboarding
export const YHe = WorkspaceAdminOnboarding
export const YPG = FolderSettingsConnectedProjectsOnboardingOverlay
export const Yd_ = CollectiveUpsellOverlay
export const YiU = FigJamAISummarizationEntrpointPointerOverlay
export const Ypw = DevModeDemoFileTourOverlay
export const Yqi = SlidesOnboarding
export const ZNl = ReadyForDevPageNameChangeUpsell
export const _5$ = SetUserOnboardingProgressUserFlagsEventOnlyOverlay
export const __X = FigmakeMobileWebBlockingPopup
export const _v_ = OpenPlaygroundFile
export const a9B = CursorBotFrameFormattingFollowUp
export const aBI = OrgTrialPendingOverlay
export const aI5 = MultiplayerSpotlightNux
export const ak5 = DtmDeprecationPostMigrationOverlay
export const ar0 = MultiplayerObservationNux
export const b0J = FilePreviewOverlay
export const bGx = ProTrialsV3TeamWelcomeOverlay
export const bIZ = FeedPostDetailZoomPanNudge
export const bbp = FigmakeNewFileTemplateInsertionChatNudge
export const c$$ = GridOnboarding
export const c6t = CommunityProfileAdminDropdownOnboarding
export const cJy = CommunityCreatorMediaUpsellModal
export const cvy = CommunityTabOnboardingOverlay
export const d8X = SeatApprovalOverlay
export const dYj = StarterPlanUpdatesOverlay
export const dvJ = DevModeOnboardingTooltipOverlay
export const eD$ = FigJamPanZoomOnboardingDLTBannerOverlay
export const ePo = SharingClarityPrototypeModalOverlay
export const efW = AspectRatioLockOnboarding
export const evB = DrawPostConfigNudge
export const fQh = BillingGroupAdminOnboarding
export const g4U = UpsellLibrariesConsecutivePaste
export const gik = PtBrLaunchAnnouncementModal
export const hPP = MultiplayerSpotlightNudgeNux
export const hib = TOSAgreementOverlay
export const hoH = OrgAdminBillingGroupsSecondaryTabOnboardingOverlay
export const hsL = FigJamTemplatesWhatsNew
export const hxO = JapaneseLaunchAnnouncementMachine
export const iq7 = TeamAdminAuthorityOverlay
export const j0N = BaseNuxOnboardingOverlay
export const j9$ = FolderSettingsDisconnectedProjectShareCopyOnboardingOverlay
export const jQF = MobileRedirect
export const jRE = OssSalesUpsell
export const jk = CooperBulkCreate
export const jkr = SharingClarityTeamCreationOverlay
export const kBA = ReadyForDevNodeNameChangeUpsell
export const kBq = ConnectedProjectsAdminSettingsOverlay
export const kKu = EsEsLaunchAnnouncementModal
export const kSi = SeatBillingTermsOverlay
export const kmj = DesktopDownloadModalPrompt
export const kmq = EduPostVerification
export const koo = DeveloperRFDUpsellOverlay
export const kp0 = OnboardFigJamEditorBrowseTemplates
export const l4 = SitesStarterFullscreenOverlay
export const lLk = OnboardFigJamEditor
export const l_p = VisualAssetsIntroTooltip
export const lk2 = BugReporterMachine
export const ma5 = McpEnableButtonCalloutOverlay
export const nRk = GuestLanguagePickerOverlay
export const nWd = MoveDraftsNudge
export const p2q = FigmakeExistingFilesEditorOnboarding
export const pjo = FigJamSectionPresetsAnnouncementOverlay
export const q6k = FigmakeSelectedDesignSystemOnboarding
export const qiY = FigmaMakeUpsellInDesignEditorOverlay
export const qmK = FigmakeOnboardingTOS
export const qnr = CustomTemplatePublishNudge
export const qw_ = PluginPublishInvitePublishersOnboardingNudgeModal
export const r3Y = DevModeOptInEventOnlyOverlay
export const r4m = MoveDraftsNudgeV2
export const rQs = OrgAdminWorkspacesOnboarding
export const rRT = AdminNavigationOnboardingOverlay
export const rv = OrgAdminMovedUnassignedDraftsOnboarding
export const s1f = SlidesTemplateOnboarding
export const s3e = AdminBillingOverviewSecondaryTabOnboardingOverlay
export const sJD = FigJamUI3ToolbeltOnboarding
export const sP8 = FigJamAIActionsCallout
export const sfE = SitesOnboardingTOS
export const sqw = PlanSpacesLaunchOverlay
export const swf = OrgAdminFiltersOnboardingOverlay
export const t8H = ProductTrialPendingOverlay
export const tBR = SearchWorkspaceOnboarding
export const tUL = CommunityDevModeFilterOnboarding
export const tZO = TeamAdminMovedUnassignedDraftsOverlay
export const t_E = ColorManagementDefaultToP3Modal
export const tb3 = DevHandoffConfigWizard
export const tzJ = SharingClarityFileAudienceOverlay
export const uPw = WorkflowInteropMachine
export const uTW = SlidesProTemplatesAnnouncement
export const ueY = BrowserNotificationsOnboardingOverlay
export const v58 = DrawPropertiesPanelOnboarding
export const v75 = LinkShortcutOverlay
export const vlG = UI3LayersHorizontalScrollOverlay
export const wRI = OnboardFigJamEditorUnifiedPanAndZoom
export const wRw = ViewerDevModeStatusChangedTooltipOverlay
export const xPo = DtmDeprecationNavToPlanOverlay
export const xiH = FigJamAiNewFileOverlay
export const xjb = DevModeOverviewOnboardingOverlay
export const xtb = MSALOnboardingOverlay
export const y4J = AudioNux
export const y_w = DrawDesignFollowupOnboarding
export const yc_ = DrawVariableWidthStrokeOnboarding
export const yjU = PlanSpacesRecreatedStarterTeamOverlay
export const zoI = OnboardFigJamEditorUnified
export const zpn = FigMakeStarterFullscreenOverlay
