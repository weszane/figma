/**
 * File Activity Types
 * Original variable: $$n16
 */
export enum FFileActivityType {
  FILE_SEEN = 'file_seen',
  DESIGN_FILE_SEEN = 'design_file_seen',
  WHITEBOARD_FILE_SEEN = 'whiteboard_file_seen',
  FILE_EDIT = 'file_edit',
  DESIGN_FILE_EDIT = 'design_file_edit',
  WHITEBOARD_FILE_EDIT = 'whiteboard_file_edit',
  DEV_MODE_FILE_SEEN = 'dev_mode_file_seen',
}

/**
 * Team Types
 * Original variable: $$i7
 */
export enum FTeamType {
  TEAM = 'team',
  COMMUNITY = 'community',
}

/**
 * Component Types
 * Original variable: $$a22
 */
export enum FComponentType {
  RESPONSIVE_SET = 'responsive_set',
  CONSTRAINED_TEMPLATE = 'constrained_template',
  CODE_COMPONENT = 'code_component',
}

/**
 * Inheritance Types
 * Original variable: $$s66
 */
export enum FInheritanceType {
  INHERIT = 'INHERIT',
  NONE = 'NONE',
  OVERRIDE = 'OVERRIDE',
}

/**
 * Product Types
 * Original variable: $$o62
 */
export enum FProductType {
  DESIGN = 'design',
  WHITEBOARD = 'whiteboard',
  DEV_MODE = 'dev_mode',
  SLIDES = 'slides',
  COLLABORATOR = 'collaborator',
  DEVELOPER = 'developer',
  EXPERT = 'expert',
  CONTENT = 'content',
  AI_CREDITS = 'ai_credits',
}

/**
 * License Types
 * Original variable: $$l6
 */
export enum FLicenseType {
  STANDALONE = 'standalone',
  BUNDLE = 'bundle',
  ADD_ON = 'add_on',
}

/**
 * Billing Period Types
 * Original variable: $$d17
 */
export enum FBillingPeriodType {
  MONTH = 'month',
  YEAR = 'year',
}

/**
 * Plan Tier Types
 * Original variable: $$c15
 */
export enum FPlanTierType {
  ORGANIZATION = 'Organization',
  ENTERPRISE = 'Enterprise',
}

/**
 * Organization Types
 * Original variable: $$u11
 */
export enum FOrganizationType {
  ORG = 'Org',
}

/**
 * Subscription Status Types
 * Original variable: p
 */
// export enum  FSubscriptionStatus {
//   PENDING = 'Pending',
//   ACTIVE = 'Active',
//   EXPIRED = 'Expired',
//   DEACTIVATED = 'Deactivated',
// }

/**
 * Billing Entity Types
 * Original variable: $$_5
 */
export enum FBillingEntityType {
  PLAN = 'plan',
  PRODUCT = 'product',
}

/**
 * Plugin Types
 * Original variable: $$h48
 */
export enum FPluginType {
  PUBLISHED_PLUGIN = 'published-plugin',
  FIRST_PARTY = 'first-party',
}

/**
 * Override Types
 * Original variable: $$m28
 */
export enum FOverrideType {
  INHERIT = 'INHERIT',
  OVERRIDE = 'OVERRIDE',
}

/**
 * Animation Trigger Types
 * Original variable: $$g2
 */
export enum FAnimationTriggerType {
  MOTION = 'motion',
  MOUSE = 'mouse',
  SCROLLING = 'scrolling',
}

/**
 * Animation Effect Types
 * Original variable: $$f58
 */
export enum FAnimationEffectType {
  LIGHTBOX = 'lightbox',
  SPIN = 'spin',
  TYPEWRITER = 'typewriter',
  SCRAMBLE = 'scramble',
  DRAG = 'drag',
  MOUSEPARALLAX = 'mouseParallax',
}

/**
 * Node Types
 * Original variable: $$E35
 */
export enum FNodeType {
  FRAME = 'FRAME',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
  GROUP = 'GROUP',
  ROUNDED_RECTANGLE = 'ROUNDED_RECTANGLE',
  INSTANCE = 'INSTANCE',
  SYMBOL = 'SYMBOL',
  VECTOR = 'VECTOR',
  STAR = 'STAR',
  LINE = 'LINE',
  ELLIPSE = 'ELLIPSE',
  REGULAR_POLYGON = 'REGULAR_POLYGON',
}

/**
 * Color Space Types
 * Original variable: $$y3
 */
export enum FColorSpaceType {
  DEFAULT = 'default',
  SRGB = 'srgb',
  DISPLAY_P3 = 'display_p3',
}

/**
 * Publisher Types
 * Original variable: $$b63
 */
export enum FPublisherType {
  CREATOR = 'creator',
  PUBLISHER = 'publisher',
}

/**
 * Payment Status Types
 * Original variable: T
 */
// export enum  FPaymentStatus {
//   PENDING = 'pending',
//   SUCCEEDED = 'succeeded',
//   CANCELED = 'canceled',
//   REFUNDED = 'refunded',
//   TRIALING = 'trialing',
//   SUBSCRIPTION_PAYMENT_FAILED = 'subscription_payment_failed',
//   INVOICE_FINALIZATION_FAILED = 'invoice_finalization_failed',
//   DISPUTED = 'disputed',
// }

/**
 * Resource Types
 * Original variable: I
 */
// export enum  FResourceType {
//   HUB_FILE = 'hub_file',
//   PLUGIN = 'plugin',
//   PROFILE = 'profile',
//   WIDGET = 'widget',
// }

/**
 * Visibility Types
 * Original variable: $$S29
 */
export enum FVisibilityType {
  MEMBERS = 'members',
  ALL_USERS = 'all_users',
}

/**
 * Permission Types
 * Original variable: v
 */
// export enum  FPermissionType {
//   ALLOW = 'ALLOW',
//   DISABLE = 'DISABLE',
// }

/**
 * Device Types
 * Original variable: $$A44
 */
export enum FDeviceType {
  DESKTOP = 'desktop',
  IPAD = 'ipad',
}

/**
 * Event Types
 * Original variable: $$x56
 */
export enum FEventType {
  STATUS_CHANGE = 'status_change',
}

/**
 * Unit Types
 * Original variable: $$N61
 */
export enum FUnitType {
  PIXEL = 'PIXEL',
  SCALED = 'SCALED',
}

/**
 * File Types
 * Original variable: $$C39
 */
export enum FFileType {
  DESIGN = 'design',
  WHITEBOARD = 'whiteboard',
  SLIDES = 'slides',
  SITES = 'sites',
  COOPER = 'cooper',
  FIGMAKE = 'figmake',
}

/**
 * Entity Types
 * Original variable: $$w42
 */
export enum FEntityType {
  FILE = 'file',
  PROTOTYPE = 'prototype',
  FOLDER = 'folder',
  TEAM = 'team',
  WORKSPACE = 'workspace',
}

/**
 * Cost Center Types
 * Original variable: $$O30
 */
export enum FCostCenterType {
  COST_CENTER = 'costCenter',
  ORGANIZATION = 'organization',
  DIVISION = 'division',
  DEPARTMENT = 'department',
}

/**
 * Reference Types
 * Original variable: R
 */
// export enum  FReferenceType {
//   DESIGN = 'design',
//   WHITEBOARD = 'whiteboard',
//   EXTERNAL = 'external',
// }

/**
 * Access Types
 * Original variable: $$L27
 */
export enum FAccessType {
  ALLOWED = 'allowed',
  MEMBERS_ONLY = 'members_only',
  BANNED = 'banned',
}

/**
 * Trial Types
 * Original variable: $$P8
 */
export enum FTrialType {
  PRO_TRIAL = 'pro_trial',
  DOWNGRADED_ORG_TEAM = 'downgraded_org_team',
  PROMO_CODE = 'promo_code',
  ADMIN_OVERRIDE = 'admin_override',
}

/**
 * Container Types
 * Original variable: $$$$D57
 */
export enum FContainerType {
  ORG = 'Org',
  WORKSPACE = 'Workspace',
  TEAM = 'Team',
}

/**
 * Assignment Types
 * Original variable: k
 */
// export enum  FAssignmentType {
//   SELF_SELECTED = 'self',
//   SELF_SELECTED_NOT_LISTED = 'not listed',
//   SELF_SELECTED_DONT_KNOW = 'don\'t know',
//   MOVED_BY_ADMIN = 'moved',
//   AUTO_ASSIGNED = 'auto',
// }

/**
 * Product Access Types
 * Original variable: $$M9
 */
export enum FProductAccessType {
  DESIGN = 'design',
  WHITEBOARD = 'whiteboard',
  DEV_MODE = 'dev_mode',
  SLIDES = 'slides',
  SITES = 'sites',
  FIGMAKE = 'figmake',
  COOPER = 'cooper',
}

/**
 * Permission Level Types
 * Original variable: $$F21
 */
export enum FPermissionLevelType {
  ORG_VIEW = 'org_view',
  ORG_EDIT = 'org_edit',
  WORKSPACE_EDIT = 'workspace_edit',
  WORKSPACE_VIEW = 'workspace_view',
  VIEW = 'view',
  EDIT = 'edit',
  INHERIT = 'inherit',
  INVITE_ONLY = 'invite_only',
}

/**
 * Completion Status Types
 * Original variable: j
 */
// export enum  FCompletionStatus {
//   INCOMPLETE = 'incomplete',
//   COMPLETE = 'complete',
// }

/**
 * Upload Status Types
 * Original variable: U
 */
// export enum  FUploadStatus {
//   INCOMPLETE = 'incomplete',
//   BUNDLE_UPLOADED = 'bundle_uploaded',
//   READY_FOR_INGESTION = 'ready_for_ingestion',
//   COMPLETE = 'complete',
//   FAILED = 'failed',
// }

/**
 * Preview Types
 * Original variable: B
 */
// export enum  FPreviewType {
//   DESIGN = 'design',
//   SCREENSHOT = 'screenshot',
// }

/**
 * Review Status Types
 * Original variable: G
 */
// export enum  FReviewStatus {
//   PENDING = 'pending',
//   NEEDS_REVIEW = 'needs_review',
//   REVIEW_REJECTED = 'review_rejected',
//   REVIEW_ACCEPTED = 'review_accepted',
//   AUTO_ACCEPTED = 'auto_accepted',
// }

/**
 * Comparison Status Types
 * Original variable: V
 */
// export enum  FComparisonStatus {
//   NOT_STARTED = 'not_started',
//   MATCH = 'match',
//   MISMATCH = 'mismatch',
// }

/**
 * Approval Status Types
 * Original variable: H
 */
// export enum  FApprovalStatus {
//   APPROVED = 'approved',
//   REJECTED = 'rejected',
//   UNREVIEWED = 'unreviewed',
// }

/**
 * Test Status Types
 * Original variable: z
 */
// export enum  FTestStatus {
//   NOT_STARTED = 'not_started',
//   AWAITING_BUILDS = 'awaiting_builds',
//   IN_PROGRESS = 'in_progress',
//   COMPLETED = 'completed',
//   CLOSED = 'closed',
//   FAILED = 'failed',
// }

/**
 * Failure Reason Types
 * Original variable: W
 */
// export enum  FFailureReasonType {
//   BUILD_FAILED = 'build_failed',
//   DIFF_IMAGE_FAILED = 'diff_image_failed',
//   JNDIFF_NOT_FOUND = 'jndiff_not_found',
//   MISSING_VARIANTS = 'missing_variants',
//   S3_ACCESS_ERROR = 's3_access_error',
//   TIMED_OUT = 'timed_out',
//   TIMED_OUT_WAITING_FOR_BUILDS = 'timed_out_waiting_for_builds',
//   UNKNOWN = 'unknown',
// }

// /**
//  * Partnership Types
//  * Original variable: $$K
//  */
// export enum  FPartnershipType {
//   FIGMA_FIRST_PARTY = 'figma_first_party',
//   FIGMA_PARTNER = 'figma_partner',
//   OFF_PLATFORM = 'off_platform',
//   HAS_FREEMIUM_CODE = 'has_freemium_code',
// }

/**
 * Build Status Types
 * Original variable: $$Y68
 */
export enum FBuildStatusType {
  BUILD = 'build',
  COMPLETED = 'completed',
  NONE = 'none',
}

/**
 * Access Level Types
 * Original variable: $$$41
 */
export enum FAccessLevelType {
  PUBLIC = 'public',
  PRIVATE = '',
  SECRET = 'secret',
}

/**
 * Plan Feature Types
 * Original variable: $$X4
 */
export enum FPlanFeatureType {
  STARTER = 'starter',
  FULL = 'full',
  RESTRICTED = 'restricted',
}

/**
 * Security Types
 * Original variable: q
 */
// export enum  FSecurityType {
//   IP_ALLOWLIST = 'ip_allowlist',
//   NETWORK_ACCESS_RESTRICTION = 'network_access_restriction',
// }

/**
 * User Role Types
 * Original variable: $$J38
 */
export enum FUserRoleType {
  ADMIN = 'admin',
  MEMBER = 'member',
  GUEST = 'guest',
}

/**
 * Account Status Types
 * Original variable: Z
 */
// export enum  FAccountStatusType {
//   AUTO = 'AUTO',
//   GOOD = 'GOOD',
//   DELINQUENT = 'DELINQUENT',
//   SUSPENDED = 'SUSPENDED',
//   DEACTIVATED = 'DEACTIVATED',
//   INCOMPLETE = 'INCOMPLETE',
// }

/**
 * Upgrade Reason Types
 * Original variable: $$Q32
 */
export enum FUpgradeReasonType {
  ROLE_UPGRADE = 'role_upgrade',
  INVITE_REDEEM = 'invite_redeem',
  ORG_INVITE_REDEEM = 'org_invite_redeem',
  INVITE_AUTOUPGRADE = 'invite_autoupgrade',
  RESOURCE_MOVED_TO_ORG = 'resource_moved_to_org',
  DRAFTS_SHARE = 'drafts_share',
  ACCESS_EDIT_LINK = 'access_edit_link',
  CREATE_TEAM = 'create_team',
  JOIN_TEAM = 'join_team',
  JOIN_TEAM_REQUEST = 'join_team_request',
  ADMIN_UPGRADE = 'admin_upgrade',
  SCIM = 'scim',
  FIGMA_ADMIN = 'figma_admin',
  DEPART_TEAM = 'depart_team',
  CREATE_FILE = 'create_file',
  EDIT_REQUEST_APPROVAL = 'edit_request_approval',
  EDIT_REQUEST_AUTO_APPROVAL = 'edit_request_auto_approval',
  RUN_PLUGIN = 'run_plugin',
  RESOURCE_MOVED_FROM_ORG_DRAFTS = 'resource_moved_from_org_drafts',
  DEFAULT_PAID_STATUS = 'default_paid_status',
  FJ_GA_REUPGRADE = 'fj_ga_reupgrade',
  EDIT_BUTTON = 'edit_button',
  EDIT_ACTION = 'edit_action',
  ACTIVE_EDIT_ACTION = 'active_edit_action',
  ORG_MERGE = 'org_merge',
  DEV_MODE_PRE_COMMIT_BETA_USE = 'dev_mode_pre_commit_beta_use',
  UNKNOWN = 'unknown',
  UNKNOWN_POPULATED_THROUGH_BACKFILL = 'unknown_populated_through_backfill',
  SCIM_RECOVERY = 'scim_recovery',
  ROLE_FALLBACK = 'role_fallback',
  PAID_STATUS_ON_ORG_CREATION = 'paid_status_on_org_creation',
  TEAM_ADDED_TO_ORG_THROUGH_FIGMA_ADMIN = 'team_added_to_org_through_figma_admin',
  SEAT_MANAGEMENT_AT_SELF_SERVE_CHECKOUT = 'seat_management_at_self_serve_checkout',
  DEV_MODE = 'dev_mode',
  SUPPORT_DRIVEN_ORG_MIGRATION = 'support_driven_org_migration',
  SUPPORT_DRIVEN_ORG_MERGE = 'support_driven_org_merge',
  SUPPORT_DRIVEN_TEAM_ADDITION = 'support_driven_team_addition',
  PUBLISH_SITES = 'publish_sites',
  CODE_CHAT_LIMIT = 'code_chat_limit',
  RESTRICTED_DRAFT_SHARED_EMAIL = 'restricted_draft_shared_email',
  IN_EDITOR_RESTRICTED_DRAFT = 'in_editor_restricted_draft',
  DOWNGRADE_EMAIL = 'downgrade_email',
  LIFECYCLE_REUPGRADE_EMAIL = 'lifecycle_reupgrade_email',
}

/**
 * Resource Target Types
 * Original variable: $$ee37
 */
export enum FResourceTargetType {
  FILE = 'file',
  FILE_REPO = 'file_repo',
  FOLDER = 'folder',
  TEAM = 'team',
  ORG = 'org',
}

/**
 * Container Kind Types
 * Original variable: $$et12
 */
export enum FContainerKindType {
  FOLDER = 'Folder',
  WORKSPACE = 'Workspace',
}

/**
 * Pin Status Types
 * Original variable: $$er49
 */
export enum FPinStatusType {
  UNPINNED = 'unpinned',
  PINNED = 'pinned',
}

/**
 * Plan Access Types
 * Original variable: $$en45
 */
export enum FPlanAccessType {
  STARTER = 'starter',
  FULL = 'full',
  RESTRICTED = 'restricted',
}

/**
 * Organization Entity Types
 * Original variable: $$ei53
 */
export enum FOrganizationEntityType {
  ORG = 'Org',
  TEAM = 'Team',
}

/**
 * Member Role Types
 * Original variable: $$ea34
 */
export enum FMemberRoleType {
  ADMIN = 'admin',
  MEMBER = 'member',
  GUEST = 'guest',
}

/**
 * Team Status Types
 * Original variable: $$es31
 */
export enum FTeamStatusType {
  INCOMPLETE = 'incomplete',
  ACTIVE = 'active',
  UNPAID = 'unpaid',
  SUSPENDED = 'suspended',
  SUSPENDED_MONTHLY_SUB_EDITOR_COUNT_EXCEEDED = 'suspended_monthly_sub_editor_count_exceeded',
  DEACTIVATED = 'deactivated',
}

/**
 * Plan Name Types
 * Original variable: $$eo1
 */
export enum FPlanNameType {
  STARTER = 'starter',
  STUDENT = 'student',
  PRO = 'pro',
  ORG = 'org',
  ENTERPRISE = 'enterprise',
}

/**
 * Organization Level Types
 * Original variable: $$el18
 */
export enum FOrganizationLevelType {
  ORG = 'organization',
  TEAM = 'team',
}

/**
 * Event Source Types
 * Original variable: $$ed50
 */
export enum FEventSourceType {
  ASSET_TRANSFER = 'asset_transfer',
  AUTO_UPGRADE = 'auto_upgrade',
  BACKFILL = 'backfill',
  COMMENT_MENTION = 'comment_mention',
  CONNECTED_PROJECT_INVITE = 'connected_project_invite',
  CREATE_TEAM = 'create_team',
  DOMAIN_CAPTURE = 'domain_capture',
  DOMAIN_INSIGHTS = 'domain_insights',
  EDIT_REQUEST_APPROVAL = 'edit_request_approval',
  FIGMA_ADMIN = 'figma_admin',
  FILE_MOVE = 'file_move',
  FILE_RESTORE = 'file_restore',
  FILE_VIEW = 'file_view',
  FOLDER_MOVE = 'folder_move',
  INVITE_REDEEM = 'invite_redeem',
  JOIN_LINK_REDEEM = 'join_link_redeem',
  ORG_DOWNGRADE = 'org_downgrade',
  ORG_MERGE = 'org_merge',
  ORG_MIGRATION = 'org_migration',
  PERSONAL_DRAFTS_MIGRATION = 'personal_drafts_migration',
  PLAN_INVITE = 'plan_invite',
  PLAN_JOIN_REQUEST_APPROVAL = 'plan_join_request_approval',
  PROJECT_EXTRACTION = 'project_extraction',
  REQUEST_UPGRADE = 'request_upgrade',
  RESOURCE_MOVE = 'resource_move',
  ROLE_CREATE = 'role_create',
  SAML_SSO = 'saml_sso',
  TEAM_ADDITION = 'team_addition',
  TEAM_EXTRACTION = 'team_extraction',
  TEAM_TRANSFER = 'team_transfer',
  TEST = 'test',
  TEST_MATERIALS = 'test_materials',
  USERS_ORG_MOVE = 'users_org_move',
  VOICE_CALL = 'voice_call',
}

/**
 * Permission Inheritance Types
 * Original variable: ec
 */
// export enum  FPermissionInheritanceType {
//   INHERIT = 'inherit',
//   ALLOWED = 'allowed',
//   NOT_ALLOWED = 'not_allowed',
// }

/**
 * User Type Classification
 * Original variable: $$eu47
 */
export enum FUserTypeClassification {
  ORG_USER = 'org_user',
  TEAM_USER = 'team_user',
}

/**
 * Request Status Types
 * Original variable: $$ep40
 */
export enum FRequestStatusType {
  PENDING = 'pending',
  APPROVED = 'approved',
  REJECTED = 'rejected',
}

/**
 * Provider Config Types
 * Original variable: $$e_65
 */
export enum FProviderConfigType {
  DEFAULT = 'default',
  INTERNAL = 'internal',
  CONFIG24 = 'config24',
  APPLE_ALPHA = 'apple_alpha',
  GOOGLE_ALPHA = 'google_alpha',
}

/**
 * Auth Provider Types
 * Original variable: $$eh23
 */
export enum FAuthProviderType {
  FIGMA = 'figma',
  APPLE = 'apple',
  GOOGLE = 'google',
}

/**
 * View Permission Types
 * Original variable: $$em24
 */
export enum FViewPermissionType {
  ORG_VIEW = 'org_view',
  VIEW = 'view',
  INHERIT = 'inherit',
}

/**
 * License Status Types
 * Original variable: eg
 */
// export enum  FLicenseStatusType {
//   ACTIVE = 'active',
//   DEACTIVATED = 'deactivated',
//   EXPIRED = 'expired',
// }

/**
 * Permission Denial Reasons
 * Original variable: $$ef25
 */
export enum FPermissionDenialReason {
  TEST = 'test',
  FILE_DENY_CONNECTED_GUEST_CAN_MOVE = 'file_deny_connected_guest_can_move',
  FILE_REPO_DENY_CONNECTED_GUEST_CAN_MOVE = 'file_repo_deny_connected_guest_can_move',
  CONNECTED_FOLDER_DENY_CAN_TRASH_DESPITE_CAN_MANAGE_LIFECYCLE = 'connected_folder_deny_can_trash_despite_can_manage_lifecycle',
  PLAN_DENY_CAN_CONNECT_IF_AT_CONNECTION_LIMIT = 'plan_deny_can_connect_if_at_connection_limit',
  PLAN_DENY_BUNDLES_NOT_ENABLED = 'plan_deny_bundles_not_enabled',
  PLAN_DENY_CAN_UPGRADE_USER_DUE_TO_SUSPENDED_TEAM = 'plan_deny_can_upgrade_user_due_to_suspended_team',
  PLAN_DENY_CAN_UPGRADE_COLLABORATOR_DUE_TO_PAID_STATUS = 'plan_deny_can_upgrade_collaborator_due_to_paid_status',
  PLAN_DENY_CAN_UPGRADE_DEVELOPER_DUE_TO_PAID_STATUS = 'plan_deny_can_upgrade_developer_due_to_paid_status',
  PLAN_DENY_CAN_UPGRADE_EXPERT_DUE_TO_PAID_STATUS = 'plan_deny_can_upgrade_expert_due_to_paid_status',
  PLAN_DENY_CAN_UPGRADE_CONTENT_DUE_TO_PAID_STATUS = 'plan_deny_can_upgrade_content_due_to_paid_status',
  PLAN_DENY_CAN_UPGRADE_COLLABORATOR_DUE_TO_PENDING_REQUEST = 'plan_deny_can_upgrade_collaborator_due_to_pending_request',
  PLAN_DENY_CAN_UPGRADE_DEVELOPER_DUE_TO_PENDING_REQUEST = 'plan_deny_can_upgrade_developer_due_to_pending_request',
  PLAN_DENY_CAN_UPGRADE_EXPERT_DUE_TO_PENDING_REQUEST = 'plan_deny_can_upgrade_expert_due_to_pending_request',
  PLAN_DENY_CAN_UPGRADE_CONTENT_DUE_TO_PENDING_REQUEST = 'plan_deny_can_upgrade_content_due_to_pending_request',
  PLAN_DENY_CAN_UPGRADE_COLLABORATOR_DUE_TO_DISABLED_PRODUCTS = 'plan_deny_can_upgrade_collaborator_due_to_disabled_products',
  PLAN_DENY_CAN_UPGRADE_DUE_TO_GUEST_INVITE_SETTING = 'plan_deny_can_upgrade_due_to_guest_invite_setting',
  PLAN_DENY_CAN_UPGRADE_FOR_EXTERNALLY_RESTRICTED_USERS = 'plan_deny_can_upgrade_for_externally_restricted_users',
  PLAN_DENY_CAN_UPGRADE_AUTO_PATHWAY_FOR_CURF = 'plan_deny_can_upgrade_auto_pathway_for_curf',
  FOLDER_CREATE_FILE_DENY_FOR_TRASHED_FOLDER = 'folder_create_file_deny_for_trashed_folder',
  FOLDER_CREATE_FILE_DENY_PRODUCT_DISABLED_BY_ORG = 'folder_create_file_deny_product_disabled_by_org',
  FOLDER_CREATE_FILE_DENY_UNLICENSED_USERS = 'folder_create_file_deny_unlicensed_users',
  FOLDER_CREATE_SITE_FILE_DENY_K12_ORG = 'folder_create_site_file_deny_k12_org',
  FOLDER_CREATE_FIGMAKE_FILE_DENY_PLAN_NOT_ENABLED = 'folder_create_figmake_file_deny_plan_not_enabled',
  FOLDER_CREATE_FIGMAKE_FILE_DENY_K12_ORG = 'folder_create_figmake_file_deny_k12_org',
  FOLDER_CREATE_FIGMAKE_FILE_DENY_STARTER_TEAM = 'folder_create_figmake_file_deny_starter_team',
  FOLDER_CREATE_FIGMAKE_FILE_DENY_STUDENT_TEAM = 'folder_create_figmake_file_deny_student_team',
  FOLDER_CREATE_FIGMAKE_FILE_DENY_AI_DISABLED = 'folder_create_figmake_file_deny_ai_disabled',
  FOLDER_EDIT_DENY_EXTERNAL_RESTRICTED_USERS = 'folder_edit_deny_external_restricted_users',
  FOLDER_VIEW_DENY_ANOTHER_USERS_DRAFTS = 'folder_view_deny_another_users_drafts',
  FOLDER_DENY_DELETED = 'folder_deny_deleted',
  FOLDER_DENY_ORG_MFA_RESTRICTED_GUESTS = 'folder_deny_org_mfa_restricted_guests',
  FOLDER_DENY_UNVALIDATED_USER_EMAIL = 'folder_deny_unvalidated_user_email',
  FILE_DENY_EDIT_SITE_FILE_K12_ORG = 'file_deny_edit_site_file_k12_org',
  FILE_DENY_EDIT_FIGMAKE_FILE_K12_ORG = 'file_deny_edit_figmake_file_k12_org',
  FILE_DENY_EDIT_SITE_FILE_SITES_DISABLED = 'file_deny_edit_site_file_sites_disabled',
  FILE_DENY_EDIT_FIGMAKE_FILE_FIGMAKE_DISABLED = 'file_deny_edit_figmake_file_figmake_disabled',
  FILE_DENY_EDIT_COOPER_FILE_COOPER_DISABLED = 'file_deny_edit_cooper_file_cooper_disabled',
  FILE_DENY_EDIT_FIGMAKE_FILE_STARTER = 'file_deny_edit_figmake_file_starter',
  FILE_DENY_EDIT_FIGMAKE_FILE_STUDENT = 'file_deny_edit_figmake_file_student',
  FILE_DENY_EDIT_SITE_FILE_STARTER = 'file_deny_edit_site_file_starter',
  FILE_DENY_EDIT_SITE_FILE_STUDENT = 'file_deny_edit_site_file_student',
  FILE_DENY_PUBLISH_SITE_LACKS_LICENSE = 'file_deny_publish_site_lacks_license',
  FILE_DENY_EDIT_NIL_PLAN_USER = 'file_deny_edit_nil_plan_user',
  FILE_DENY_EDIT_SITE_FILE_DRAFTS_TO_MOVE = 'file_deny_edit_site_file_drafts_to_move',
  FILE_DENY_PUBLISH_SITE_ORG_DISABLED_PUBLISHING = 'file_deny_publish_site_org_disabled_publishing',
  FILE_DENY_PUBLISH_SITE_USER_RESTRICTED = 'file_deny_publish_site_user_restricted',
  FILE_DENY_PUBLISH_STARTER_TEAM = 'file_deny_publish_starter_team',
  FILE_DENY_EDIT_NIL_PLAN_USER_VR_BY_DEFAULT = 'file_deny_edit_nil_plan_user_vr_by_default',
  FILE_DENY_EDIT_DRAFTS_OWNER_RESTRICTED = 'file_deny_edit_drafts_owner_restricted',
  FILE_DENY_EDIT_RESTRICTED_PLAN_USER = 'file_deny_edit_restricted_plan_user',
  FILE_DENY_DELETED_FILE = 'file_deny_deleted_file',
  FILE_DENY_IN_DELETED_FOLDER = 'file_deny_in_deleted_folder',
  FILE_DENY_EDIT_ARCHIVED_FILE = 'file_deny_edit_archived_file',
  FILE_DENY_EDIT_TRASHED_BRANCH = 'file_deny_edit_trashed_branch',
  FILE_DENY_EDIT_EXTERNAL_RESTRICTED_USER = 'file_deny_edit_external_restricted_user',
  FILE_DENY_EDIT_EXPIRED_EDU_GRACE_PERIOD = 'file_deny_edit_expired_edu_grace_period',
  FILE_DENY_EDIT_LOCKED_TEAM = 'file_deny_edit_locked_team',
  FILE_DENY_EDIT_SLIDES_DISABLED_ORG = 'file_deny_edit_slides_disabled_org',
  FILE_DENY_ORG_MFA_RESTRICTED_GUEST = 'file_deny_org_mfa_restricted_guest',
  FILE_PROTO_DENY_ORG_MFA_RESTRICTED_GUEST = 'file_proto_deny_org_mfa_restricted_guest',
  FILE_DENY_SITES_NON_SITES_USER = 'file_deny_sites_non_sites_user',
  FILE_DENY_FIGMAKE_NON_FIGMAKE_USER = 'file_deny_figmake_non_figmake_user',
  FILE_DENY_SANCTIONED_TEAM_ACCESS = 'file_deny_sanctioned_team_access',
  FILE_DENY_UNVALIDATED_USER_EMAIL = 'file_deny_unvalidated_user_email',
  FILE_DENY_FIGMA_AI_USAGE_NOT_ALLOWED = 'file_deny_figma_ai_usage_not_allowed',
  FILE_DENY_FIGMA_AI_FOR_NO_TEAM_OR_ORG = 'file_deny_figma_ai_for_no_team_or_org',
  FILE_DENY_AI_FOR_AI_DISABLED_TEAM_OR_ORG = 'file_deny_ai_for_ai_disabled_team_or_org',
  FILE_DENY_AI_IN_K12_ORG = 'file_deny_ai_in_k12_org',
  FILE_DENY_FIGMA_AI_FOR_NON_PAID_PLAN_USER_V2 = 'file_deny_figma_ai_for_non_paid_plan_user_v2',
  FILE_DENY_FIGMA_AI_FOR_NON_PAID_PLAN_USER = 'file_deny_figma_ai_for_non_paid_plan_user',
  FILE_DENY_FIGMAKE_AI_USAGE_NOT_ALLOWED = 'file_deny_figmake_ai_usage_not_allowed',
}

/**
 * Publication Status Types
 * Original variable: $$eE13
 */
export enum FPublicationStatusType {
  BLOCKED = 'blocked',
  ORG_PRIVATE = 'org_private',
  PENDING_USER_VISUAL_COMPLIANCE = 'pending_user_visual_compliance',
  PENDING_3P_M10N_CHECK = 'pending_3p_m10n_check',
  PENDING_PUBLIC = 'pending_public',
  ORG_PRIVATE_PENDING_PUBLIC = 'org_private_pending_public',
  DELISTED = 'delisted',
  DELISTED_CREATOR_STRIPE_DISABLED = 'delisted_creator_stripe_disabled',
  APPROVED_PUBLIC = 'approved_public',
}

/**
 * Access Request Status Types
 * Original variable: $$ey60
 */
export enum FAccessRequestStatusType {
  PENDING = 'pending',
  APPROVED = 'approved',
  DENIED = 'denied',
  REVOKED = 'revoked',
}

/**
 * Resource Category Types
 * Original variable: $$eb64
 */
export enum FResourceCategoryType {
  FILE = 'file',
  FILE_REPO = 'file_repo',
  FOLDER = 'folder',
  TEAM = 'team',
}

/**
 * Access Level Product Types
 * Original variable: eT
 */
// export enum  FAccessLevelProductType {
//   DESIGN = 'design',
//   WHITEBOARD = 'whiteboard',
//   DEV_MODE = 'dev_mode',
//   SLIDES = 'slides',
//   COLLABORATOR = 'collaborator',
//   DEVELOPER = 'developer',
//   EXPERT = 'expert',
//   VIEW = 'view',
//   CONTENT = 'content',
// }

// /**
//  * Resource Access Types
//  * Original variable: eI
//  */
// export enum  FResourceAccessType {
//   FILE = 'file',
//   FILE_REPO = 'file_repo',
//   FOLDER = 'folder',
//   TEAM = 'team',
//   PROTOTYPE = 'prototype',
// }

/**
 * Migration Status Types
 * Original variable: eS
 */
// export enum  FMigrationStatusType {
//   MIGRATION_NOT_NEEDED = 'migration_not_needed',
//   MIGRATION_NEEDED = 'migration_needed',
//   MIGRATED = 'migrated',
// }

/**
 * Feature Adoption Status Types
 * Original variable: $$ev20
 */
export enum FFeatureAdoptionStatusType {
  NONE = 'NONE',
  ACCEPTED = 'ACCEPTED',
  STARTED_ONBOARDING = 'STARTED_ONBOARDING',
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
}

/**
 * Student Team Status Types
 * Original variable: $$eA55
 */
export enum FStudentTeamStatusType {
  STUDENT_TEAM_NULL = 'not_student_team',
  STUDENT_TEAM_CURRENT = 'current_student_team',
  STUDENT_TEAM_EXPIRED = 'expired_student_team',
}

/**
 * Payment Health Status Types
 * Original variable: $$ex26
 */
export enum FPaymentHealthStatusType {
  OK = 'ok',
  GRACE_PERIOD = 'grace_period',
  PAST_DUE = 'past_due',
  NO_MONTHLY_SUB_EDITOR_COUNT_EXCEEDED = 'no_monthly_sub_editor_count_exceeded',
  INCOMPLETE = 'incomplete',
}

/**
 * Domain Verification Status Types
 * Original variable: $$eN54
 */
export enum FDomainVerificationStatusType {
  UNVERIFIED = 'unverified',
  VERIFIED = 'verified',
  PENDING = 'pending',
  UNAVAILABLE = 'unavailable',
}

/**
 * Team Access Permission Types
 * Original variable: $$eC46
 */
export enum FTeamAccessPermissionType {
  TEAM_ACCESS_VIEW = 'team_view',
  TEAM_ACCESS_EDIT = 'team_edit',
  TEAM_ACCESS_DISABLED = 'team_access_disabled',
}

/**
 * Basic Permission Types
 * Original variable: $$ew59
 */
export enum FBasicPermissionType {
  VIEW = 'view',
  EDIT = 'edit',
}

/**
 * Plan Limitation Types
 * Original variable: $$eO19
 */
export enum FPlanLimitationType {
  LOCKED = 'locked',
  EDITORS_LIMITED = 'editors_limited',
  PROJECTS_LIMITED = 'projects_limited',
  FILES_LIMITED = 'files_limited',
  PROJECTS_LIMITED_LEGACY = 'projects_limited_legacy',
  FILES_LIMITED_LEGACY = 'files_limited_legacy',
  WHITEBOARD_FILES_LIMITED = 'whiteboard_files_limited',
  WHITEBOARD_FILES_LIMITED_BETA = 'whiteboard_files_limited_beta',
  SLIDE_FILES_LIMITED = 'slide_files_limited',
  SLIDE_FILES_LIMITED_BETA = 'slide_files_limited_beta',
  GLOBAL_FILES_LIMITED = 'global_files_limited',
  GLOBAL_FILES_LIMITED_LEGACY = 'global_files_limited_legacy',
  GLOBAL_FILES_MUST_CHECK = 'global_files_must_check',
}

/**
 * Plan Restriction Types
 * Original variable: $$eR36
 */
export enum FPlanRestrictionType {
  STARTER = 'starter',
  FULL = 'full',
  RESTRICTED = 'restricted',
}

/**
 * Seat Assignment Reason Types
 * Original variable: $$eL0
 */
export enum FSeatAssignmentReasonType {
  RESOURCE_MOVED_TO_TEAM = 'resource_moved_to_team',
  RESOURCE_RESTORED_FROM_TRASH = 'resource_restored_from_trash',
  JOIN_LINK_REDEEM = 'join_link_redeem',
  SELF_UPGRADE = 'self_upgrade',
  CHECKOUT = 'checkout',
  DEV_MODE = 'dev_mode',
  TEAM_DOWNGRADED_TO_STARTER = 'team_downgraded_to_starter',
  DEVELOPER_BUNDLE_OPT_IN = 'developer_bundle_opt_in',
  ADMIN_UPGRADE = 'admin_upgrade',
  ROLE_UPGRADE = 'role_upgrade',
  INVITE_REDEEM = 'invite_redeem',
  INVITE_AUTOUPGRADE = 'invite_autoupgrade',
  CREATE_FILE = 'create_file',
  EDIT_REQUEST_AUTO_APPROVAL = 'edit_request_auto_approval',
  EDIT_REQUEST_APPROVAL = 'edit_request_approval',
  EDIT_BUTTON = 'edit_button',
  ACTIVE_EDIT_ACTION = 'active_edit_action',
  DEFAULT_PAID_STATUS = 'default_paid_status',
  DRAFTS_SHARE = 'drafts_share',
  RESOURCE_MOVED_FROM_PLAN_DRAFTS = 'resource_moved_from_plan_drafts',
  CONVERTED_FROM_LICENSE_TYPE = 'converted_from_license_type',
  RESOURCE_MOVE = 'resource_move',
  UNKNOWN = 'unknown',
  UNKNOWN_POPULATED_THROUGH_BACKFILL = 'unknown_populated_through_backfill',
  FIGMA_ADMIN = 'figma_admin',
  NUX_SEAT_CHOICE = 'nux_seat_choice',
  PUBLISH_SITES = 'publish_sites',
  CODE_CHAT_LIMIT = 'code_chat_limit',
  RESTRICTED_DRAFT_SHARED_EMAIL = 'restricted_draft_shared_email',
  IN_EDITOR_RESTRICTED_DRAFT = 'in_editor_restricted_draft',
  DOWNGRADE_EMAIL = 'downgrade_email',
  LIFECYCLE_REUPGRADE_EMAIL = 'lifecycle_reupgrade_email',
  EDIT_LINK_EDIT_ACTION = 'edit_link_edit_action',
  DEPART_TEAM = 'depart_team',
  CREATE_TEAM = 'create_team',
  RUN_PLUGIN = 'run_plugin',
  TEAM_ADMIN_UPGRADE = 'team_admin_upgrade',
  FJ_GA_UPGRADE = 'fj_ga_upgrade',
  EDIT_ACTION = 'edit_action',
}

/**
 * Billing Model Types
 * Original variable: $$eP14
 */
export enum FBillingModelType {
  SEATS_MODEL_BILLING_2025 = 'seats_model_billing_2025',
}

/**
 * Special Status Types
 * Original variable: $$eD
 */
// export enum  FSpecialStatusType {
//   FLAGGED = 'flagged',
//   MIGRATING = 'migrating',
//   PENDING_AUTO_VALIDATION = 'pending_auto_validation',
// }

/**
 * Folder Types
 * Original variable: $$ek10
 */
export enum FFolderType {
  FOLDER = 'folder',
}

/**
 * Approval Method Types
 * Original variable: $$eM33
 */
export enum FApprovalMethodType {
  AUTO_APPROVED = 'auto_approved',
  AUTO_APPROVED_AVAILABLE_SEAT = 'auto_approved_available_seat',
  AUTO_APPROVED_EDU = 'auto_approved_edu',
  ADMIN_INITIATED = 'admin_initiated',
  ADMIN_SELF_UPGRADE = 'admin_self_upgrade',
  FIGMA_ADMIN = 'figma_admin',
  MANUAL_APPROVED = 'manual_approved',
  MANUAL_APPROVED_NO_AVAILABLE_SEAT = 'manual_approved_no_available_seat',
  SCIM = 'scim',
}

/**
 * User Verification Status Types
 * Original variable: $$eF52
 */
export enum FUserVerificationStatusType {
  VERIFIED = 'verified',
  UNVERIFIED = 'unverified',
  BLOCKED = 'blocked',
}

/**
 * Template Category Types
 * Original variable: $$ej67
 */
export enum FTemplateCategoryType {
  CANVAS = 'canvas',
  PROTOTYPE = 'prototype',
  WHITEBOARD = 'whiteboard',
  LIBRARY = 'library',
  SLIDE_TEMPLATE = 'slide_template',
  SITE_TEMPLATE = 'site_template',
  COOPER_TEMPLATE_FILE = 'cooper_template_file',
  FIGMAKE_TEMPLATE = 'figmake_template',
}

/**
 * Organization Role Types
 * Original variable: $$eU43
 */
export enum FOrganizationRoleType {
  ADMIN = 'admin',
  MEMBER = 'member',
}

/**
 * Team Assignment Method Types
 * Original variable: $$eB51
 */
export enum FTeamAssignmentMethodType {
  SELF_SELECTED = 'self',
  MOVED_BY_ADMIN = 'moved',
  AUTO_ASSIGNED = 'auto',
  SCIM_GROUP = 'scim_group',
}

// Export all export enums with original variable names
export const $n = FSeatAssignmentReasonType
export const Ag = FPlanNameType
export const D = FAnimationTriggerType
export const E9 = FColorSpaceType
export const El = FPlanFeatureType
export const Ex = FBillingEntityType
export const FE = FLicenseType
export const GC = FTeamType
export const GP = FTrialType
export const G_ = FProductAccessType
export const Go = FFolderType
export const Il = FOrganizationType
export const K = FContainerKindType
export const KB = FPublicationStatusType
export const Lb = FBillingModelType
export const Lc = FPlanTierType
export const Mr = FFileActivityType
export const NW = FBillingPeriodType
export const OL = FOrganizationLevelType
export const P4 = FPlanLimitationType
export const P5 = FFeatureAdoptionStatusType
export const PQ = FPermissionLevelType
export const PW = FComponentType
export const Pn = FAuthProviderType
export const Pu = FViewPermissionType
export const QK = FPermissionDenialReason
export const Qh = FPaymentHealthStatusType
export const RR = FAccessType
export const Rc = FOverrideType
export const Sm = FVisibilityType
export const U0 = FCostCenterType
export const UX = FTeamStatusType
export const Uu = FUpgradeReasonType
export const XI = FApprovalMethodType
export const Xn = FMemberRoleType
export const ZP = FNodeType
export const Zf = FPlanRestrictionType
export const _5 = FResourceTargetType
export const _D = FUserRoleType
export const _Y = FFileType
export const bQ = FRequestStatusType
export const bU = FAccessLevelType
export const bk = FEntityType
export const bp = FOrganizationRoleType
export const bq = FDeviceType
export const dQ = FPlanAccessType
export const eD = FTeamAccessPermissionType
export const h4 = FUserTypeClassification
export const h9 = FPluginType
export const hM = FPinStatusType
export const hW = FEventSourceType
export const hh = FTeamAssignmentMethodType
export const iS = FUserVerificationStatusType
export const iX = FOrganizationEntityType
export const kI = FDomainVerificationStatusType
export const kU = FStudentTeamStatusType
export const o6 = FEventType
export const pk = FContainerType
export const sA = FAnimationEffectType
export const sC = FBasicPermissionType
export const sm = FAccessRequestStatusType
export const tK = FUnitType
export const ud = FProductType
export const un = FPublisherType
export const vt = FResourceCategoryType
export const wl = FProviderConfigType
export const xw = FInheritanceType
export const y4 = FTemplateCategoryType
export const zI = FBuildStatusType
