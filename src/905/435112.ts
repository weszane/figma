import type { LiveGraphFieldConfig } from '../905/709183'
import { DatabaseTable } from '../905/709183'
import { _Y } from '../905/761697'
import { createViewRef, NULL_FIELD_REF } from '../905/871467'

// ========================================
// Type Definitions
// ========================================

/** Field mapping interface for database tables */
interface FieldMapping {
  [key: string]: string
}



// ========================================
// Field Set Generators
// ========================================

/**
 * Generates field set for organization user permissions
 * Original: fieldSetGenerator function in o.liveGraphField.overrides.project
 */
function generateOrgUserPermissionFields(fields: any) {
  return {
    _team_permsV2: {
      currentBaseOrgUser: [{
        userId: createViewRef('userId'),
      }, fields],
    },
    _draftFolderOrg_permsV2: {
      currentBaseOrgUser: [{
        userId: createViewRef('userId'),
      }, fields],
    },
  }
}

/**
 * Generates plan field set configuration
 * Original: c function
 */
function generatePlanFieldSet() {
  return {
    plan: [{
      userId: createViewRef('userId'),
    }, {
      monetizationConfig: {
        editorTypeToLicenseTypeMap: {
          fromValue: NULL_FIELD_REF,
          toValue: NULL_FIELD_REF,
        },
      },
    }],
  }
}





/**
 * Generates connected plan user field set
 * Original: M function
 */
function generateConnectedPlanUserFieldSet(fields: any) {
  return {
    _mostRecentActiveResourceConnection: {
      connectedPlanType: NULL_FIELD_REF,
      _connectedOrgPlanRecord: {
        _currentPlanUserRecord: [{
          userId: createViewRef('userId'),
        }, fields],
      },
      _connectedTeamPlanRecord: {
        _currentPlanUserRecord: [{
          userId: createViewRef('userId'),
        }, fields],
      },
    },
  }
}

/**
 * Generates connected plan field set
 * Original: z function
 */
function generateConnectedPlanFieldSet(fields: any) {
  return {
    _mostRecentActiveResourceConnection: {
      connectedPlanType: NULL_FIELD_REF,
      _connectedOrgPlanRecord: fields,
      _connectedTeamPlanRecord: fields,
    },
  }
}

// ========================================
// Field Mappings
// ========================================

/** Organization user field mappings */
const orgUserFields: FieldMapping = {
  id: 'id',
  accountType: 'account_type',
  whiteboardPaidStatus: 'whiteboard_paid_status',
  devModePaidStatus: 'dev_mode_paid_status',
  permission: 'permission',
  draftsFolderId: 'drafts_folder_id',
  userId: 'user_id',
  firstDevModeAccountTypeRequestCreatedAt: 'first_dev_mode_account_type_request_created_at',
}

/** File table field mappings */
const fileFields: FieldMapping = {
  id: 'id',
  key: 'key',
  teamId: 'team_id',
  folderId: 'folder_id',
  protoLinkAccess: 'proto_link_access',
  linkAccess: 'link_access',
  editorType: 'editor_type',
  deletedAt: 'deleted_at',
  trashedAt: 'trashed_at',
  sourceFileKey: 'source_file_key',
  fileRepoId: 'file_repo_id',
  parentOrgId: 'parent_org_id',
  hasFileLinkPassword: 'has_file_link_password',
  hasProtoLinkPassword: 'has_proto_link_password',
  orgId: 'parent_org_id',
  orgBrowsable: 'org_browsable',
  folderAccessEnabled: 'folder_access_enabled',
  viewerExportRestrictedAt: 'viewer_export_restricted_at',
  isDefaultTemplate: 'is_default_template',
  isDevModeDemoFile: 'is_dev_mode_demo_file',
  isBakeEnabled: 'is_bake_enabled',
}

/** User table field mappings */
const userFields: FieldMapping = {
  id: 'id',
  email: 'email',
  externalRestrictedOrgId: 'external_restricted_org_id',
  studentValidatedAt: 'student_validated_at',
  profileId: 'profile_id',
  emailDomain: 'email_domain',
  emailValidatedAt: 'email_validated_at',
  phoneNumberExists: 'phone_number_exists',
  ssoOnly: 'sso_only',
  googleSsoOnly: 'google_sso_only',
  samlSsoOnly: 'saml_sso_only',
  permissionsFeatureFlagsV2: 'permission_feature_flags_v2',
  fileViewHistoryDisabled: 'file_view_history_disabled',
  communityBlockedAt: 'community_blocked_at',
  sharingRestricted: 'sharing_restricted',
}

/** Organization table field mappings */
const organizationFields: FieldMapping = {
  id: 'id',
  domainCapture: 'domain_capture',
  domainCaptureDomains: 'domain_capture_domains',
  figjamDisabledAt: 'figjam_disabled_at',
  designDefaultPaidStatus: 'design_default_paid_status',
  whiteboardDefaultPaidStatus: 'whiteboard_default_paid_status',
  upgradeApprovalSetting: 'upgrade_approval_setting',
  domains: 'domains',
  customTemplatesAllowed: 'custom_templates_allowed',
  bigmaEnabledAt: 'bigma_enabled_at',
  guestInviteSetting: 'guest_invite_setting',
  aiFeaturesDisabledAt: 'ai_features_disabled_at',
  k12GoogleOrg: 'k12_google_org',
  isSlidesDisabled: 'is_slides_disabled',
  isSitesDisabled: 'is_sites_disabled',
  isFigmakeDisabled: 'is_figmake_disabled',
  isCooperDisabled: 'is_cooper_disabled',
  sitesPublishingDisabled: 'sites_publishing_disabled',
  mfaRequired: 'mfa_required',
  isOrgGuestMfaForGoogleSsoEnabled: 'is_org_guest_mfa_for_google_sso_enabled',
  isOrgGuestMfaForSamlSsoEnabled: 'is_org_guest_mfa_for_saml_sso_enabled',
  permissionOrgFeatureFlags: 'permission_org_feature_flags',
}

/** Shared settings field mappings */
const sharedSettingsFields: FieldMapping = {
  id: 'id',
  resourceType: 'resource_type',
  resourceId: 'resource_id',
  publicLinkControlsSetting: 'public_link_controls_setting',
  externalCollaborationControls: 'external_collaboration_controls',
  teamCreationControls: 'team_creation_controls',
  publicLinkControlsMaxExpiration: 'public_link_controls_max_expiration',
  fileExportSetting: 'file_export_setting',
  configuredUpgradeRequestSetting: 'configured_upgrade_request_setting',
}

/** Plan field mappings - Original: C */
const planFields: FieldMapping = {
  id: 'id',
  type: 'type',
  planId: 'plan_id',
  tier: 'tier',
  status: 'status',
  tierLevel: 'tier_level',
  stripeCustomerId: 'stripe_customer_id',
  vatGstId: 'vat_gst_id',
  taxIdVerificationStatus: 'tax_id_verification_status',
  aiFeaturesEnabled: 'ai_features_enabled',
  voiceEnabled: 'voice_enabled',
  figjamDisabledAt: 'figjam_disabled_at',
  isSlidesDisabled: 'is_slides_disabled',
  workshopEnabled: 'workshop_enabled',
  pluginRequestsAllowed: 'plugin_requests_allowed',
  widgetRequestsAllowed: 'widget_requests_allowed',
  cmtyPublishAsUserEnabled: 'cmty_publish_as_user_enabled',
  figmaProvidedLibrariesEnabled: 'figma_provided_libraries_enabled',
  pluginsWhitelistEnforced: 'plugins_whitelist_enforced',
  widgetsWhitelistEnforced: 'widgets_whitelist_enforced',
  activeTrialLicenseTypes: 'active_trial_license_types',
  templatePickerEnabled: 'template_picker_enabled',
  customTemplatesAllowed: 'custom_templates_allowed',
  cursorChatEnabled: 'cursor_chat_enabled',
  designDefaultPaidStatus: 'design_default_paid_status',
  whiteboardDefaultPaidStatus: 'whiteboard_default_paid_status',
  isBillingRemodelEnabled: 'is_billing_remodel_enabled',
  upgradeApprovalSettingsDeveloper: 'upgrade_approval_settings_developer',
  upgradeApprovalSettingsCollaborator: 'upgrade_approval_settings_collaborator',
  upgradeApprovalSettingsExpert: 'upgrade_approval_settings_expert',
  upgradeApprovalSettingsContent: 'upgrade_approval_settings_content',
  campfireModelEnabledAt: 'campfire_model_enabled_at',
  guestInviteSetting: 'guest_invite_setting',
  unlimitedConnectionsEnabled: 'unlimited_connections_enabled',
  testingOnlyUnlimitedConnectionsEnabled: 'testing_only_unlimited_connections_enabled',
  isResourceHubCmtyTabDisabled: 'resource_hub_cmty_tab_disabled',
  connectionCount: 'connection_count',
  featureFlagFcPlanEnabled: 'feature_flag_fc_plan_enabled',
  featureFlagBakePlanEnabled: 'feature_flag_bake_plan_enabled',
  featureFlagBakeMonetizationPlan: 'feature_flag_bake_monetization_plan',
  campfireProvisionalAccessEnabled: 'campfire_provisional_access_enabled',
}

/** Plan user field mappings - Original: N */
const planUserFields: FieldMapping = {
  id: 'id',
  userId: 'user_id',
  designPaidStatus: 'design_paid_status',
  devModePaidStatus: 'dev_mode_paid_status',
  whiteboardPaidStatus: 'whiteboard_paid_status',
  showFigjamUserOnboarding: 'show_figjam_user_onboarding',
  hasShownFigjamAdminOnboarding: 'has_shown_figjam_admin_onboarding',
  draftsFolderId: 'drafts_folder_id',
  type: 'type',
  planId: 'plan_id',
  permission: 'permission',
  licenseTypes: 'license_types',
  provisionalLicenseTypes: 'provisional_license_types',
  billableProductKeys: 'billable_product_keys',
  pendingAccountTypeRequestBillableProductKeys: 'pending_account_type_request_billable_product_keys',
  provisionalAccessesBillableProductKeys: 'provisional_accesses_billable_product_keys',
  planUserDowngradesNonCheckoutBillableProductKeys: 'plan_user_downgrades_non_checkout_billable_product_keys',
}

/** Connected plan user field mappings - Original: L */
const connectedPlanUserFields: FieldMapping = {
  id: 'id',
  userId: 'user_id',
  licenseTypes: 'license_types',
  provisionalLicenseTypes: 'provisional_license_types',
  permission: 'permission',
  designPaidStatus: 'design_paid_status',
  devModePaidStatus: 'dev_mode_paid_status',
  whiteboardPaidStatus: 'whiteboard_paid_status',
  planUserDowngradesNonCheckoutBillableProductKeys: 'plan_user_downgrades_non_checkout_billable_product_keys',
  provisionalAccessesBillableProductKeys: 'provisional_accesses_billable_product_keys',
}

/** Connected plan field mappings - Original: B */
const connectedPlanFields: FieldMapping = {
  id: 'id',
  planId: 'plan_id',
  campfireModelEnabledAt: 'campfire_model_enabled_at',
  tier: 'tier',
  type: 'type',
  tierLevel: 'tier_level',
  activeTrialLicenseTypes: 'active_trial_license_types',
  featureFlagFcPlanEnabled: 'feature_flag_fc_plan_enabled',
  featureFlagBakePlanEnabled: 'feature_flag_bake_plan_enabled',
  featureFlagBakeMonetizationPlan: 'feature_flag_bake_monetization_plan',
  campfireProvisionalAccessEnabled: 'campfire_provisional_access_enabled',
}

// ========================================
// Database Table Definitions
// ========================================

/**
 * Organization user table configuration
 * Original: o
 */
const orgUserTable = new DatabaseTable('org_user', {
  liveGraphField: {
    name: 'currentBaseOrgUser',
    requireUserArg: true,
    overrides: {
      project: {
        fieldSetGenerator: generateOrgUserPermissionFields,
      },
    },
  },
})

/**
 * Organization user table fields
 * Original: $$l15
 */
const orgUserTableFields = DatabaseTable.fields(orgUserTable, orgUserFields)

/**
 * Editor type license type mapping
 * Original: d
 */
const editorTypeLicenseTypeMap = Object.fromEntries(Object.values(_Y).map(value => [value, value]))

/**
 * Editor type license type map table
 * Original: $$u10
 */
const editorTypeLicenseTypeMapTable = DatabaseTable.new('editor_type_license_type_map', editorTypeLicenseTypeMap, {
  liveGraphField: {
    overrides: {
      org: { fieldSetGenerator: generatePlanFieldSet },
      file: { fieldSetGenerator: generatePlanFieldSet },
      repo: { fieldSetGenerator: generatePlanFieldSet },
      team: { fieldSetGenerator: generatePlanFieldSet },
      project: { fieldSetGenerator: generatePlanFieldSet },
    },
  },
})

/**
 * File table
 * Original: $$m7
 */
const fileTable = DatabaseTable.new('file', fileFields)

/**
 * User table configuration
 * Original: h
 */
const userTable = new DatabaseTable('user', {
  liveGraphField: {
    name: 'currentUser',
    requireUserArg: true,
  },
})

/**
 * User table fields
 * Original: $$g3
 */
const userTableFields = DatabaseTable.fields(userTable, userFields)

/**
 * Actor context table
 * Original: $$f0
 */
export const actorContextTable = DatabaseTable.new('actor_context', {
  featureFlags: 'feature_flags',
  featureFlagsV2: 'feature_flags_v2',
}, {
  skipFromLiveGraphViews: true,
})

/**
 * Organization table
 * Original: $$y2
 */
const organizationTable = DatabaseTable.new('org', organizationFields, {
  liveGraphField: {
    name: '_org_permsV2',
    objectName: 'org',
    overrides: {
      project: {
        fieldSetGenerator: (fields: any) => ({
          _draftFolderOrg_permsV2: fields,
          _team_permsV2: {
            _org_permsV2: fields,
          },
        }),
      },
    },
  },
})

/**
 * Organization shared settings table
 * Original: $$v8
 */
const orgSharedSettingsTable = DatabaseTable.new('org_shared_setting', sharedSettingsFields)

/**
 * Workspace shared settings table
 * Original: $$I5
 */
const workspaceSharedSettingsTable = DatabaseTable.new('workspace_shared_setting', sharedSettingsFields, {
  liveGraphField: {
    overrides: {
      file: {
        name: 'workspaceSharedSetting',
        through: { name: '_team_permsV2' },
      },
      repo: {
        name: 'workspaceSharedSetting',
        through: { name: '_team_permsV2' },
      },
    },
  },
})

/**
 * Plan table
 * Original: $$T9
 */
const planTable = DatabaseTable.new('plan', planFields, {
  liveGraphField: {
    requireUserArg: true,
  },
})

/**
 * Plan record table
 * Original: $$R1
 */
const planRecordTable = DatabaseTable.new('plan_record', planFields, {
  liveGraphField: {
    overrides: {
      file: {
        fieldSetGenerator: (fields: any) => ({
          _orgPlanRecord: fields,
          _teamPlanRecord: fields,
        }),
      },
      org: {
        fieldSetGenerator: (fields: any) => ({
          _planRecord: fields,
        }),
      },
      team: {
        fieldSetGenerator: (fields: any) => ({
          _orgPlanRecord: fields,
          _teamPlanRecord: fields,
        }),
      },
    },
  },
})

/**
 * Plan user table
 * Original: $$P16
 */
const planUserTable = DatabaseTable.new('plan_user', planUserFields, {
  liveGraphField: {
    name: 'currentPlanUser',
    requireUserArg: true,
  },
})

/**
 * Plan user record table
 * Original: $$D14
 */
const planUserRecordTable = DatabaseTable.new('plan_user_record', planUserFields, {
  liveGraphField: {
    requireUserArg: true,
    overrides: {
      file: {
        fieldSetGenerator: (fields: any) => ({
          _teamPlanUserRecord: [{ userId: createViewRef('userId') }, fields],
          _orgPlanUserRecord: [{ userId: createViewRef('userId') }, fields],
        }),
      },
      org: {
        fieldSetGenerator: (fields: any) => ({
          _planUserRecord: [{ userId: createViewRef('userId') }, fields],
        }),
      },
      team: {
        fieldSetGenerator: (fields: any) => ({
          _teamPlanUserRecord: [{ userId: createViewRef('userId') }, fields],
          _orgPlanUserRecord: [{ userId: createViewRef('userId') }, fields],
        }),
      },
      userGroup: {
        fieldSetGenerator: (fields: any) => ({
          _currentPlanUserRecord: [{ userId: createViewRef('userId') }, fields],
        }),
      },
    },
  },
})

/**
 * Connected plan user table
 * Original: $$F11
 */
const connectedPlanUserTable = DatabaseTable.new('connected_plan_user', connectedPlanUserFields, {
  liveGraphField: {
    name: 'connectedPlanUser',
    requireUserArg: true,
  },
})

/**
 * Connected plan user record table
 * Original: $$U4
 */
const connectedPlanUserRecordTable = DatabaseTable.new('connected_plan_user_record', connectedPlanUserFields, {
  liveGraphField: {
    requireUserArg: true,
    overrides: {
      file: {
        fieldSetGenerator: (fields: any) => ({
          _project_permsV2: generateConnectedPlanUserFieldSet(fields),
        }),
      },
      project: generateConnectedPlanUserFieldSet,
    },
  },
})

/**
 * Connected plan table
 * Original: $$V12
 */
const connectedPlanTable = DatabaseTable.new('connected_plan', connectedPlanFields, {
  liveGraphField: {
    name: 'connectedPlan',
    requireUserArg: true,
  },
})

/**
 * Connected plan record table
 * Original: $$H13
 */
const connectedPlanRecordTable = DatabaseTable.new('connected_plan_record', connectedPlanFields, {
  liveGraphField: {
    overrides: {
      file: {
        fieldSetGenerator: (fields: any) => ({
          _project_permsV2: generateConnectedPlanFieldSet(fields),
        }),
      },
      project: generateConnectedPlanFieldSet,
    },
  },
})

/**
 * Plan connection count table
 * Original: $$W6
 */
export const planConnectionCountTable = DatabaseTable.new('plan_connection_count', {
  id: 'id',
  planKey: 'plan_key',
  connectionCount: 'connection_count',
}, {
  liveGraphField: {
    name: 'planConnectionCount',
    overrides: {
      project: {
        name: 'planConnectionCount',
        through: {
          name: 'plan',
          requireUserArg: true,
        },
      },
    },
  },
})

// ========================================
// Exports
// ========================================

// Database tables
export const DB = actorContextTable
export const F5 = planRecordTable
export const Fs = organizationTable
export const KJ = userTableFields
export const Td = connectedPlanUserRecordTable
export const Vg = workspaceSharedSettingsTable
export const ZA = planConnectionCountTable
export const ZH = fileTable
export const cN = orgSharedSettingsTable
export const cw = planTable
export const dv = editorTypeLicenseTypeMapTable
export const mg = connectedPlanUserTable
export const px = connectedPlanTable
export const qH = connectedPlanRecordTable
export const q_ = planUserRecordTable
export const sO = orgUserTableFields
export const tc = planUserTable
