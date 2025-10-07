import type { TSSceneGraph } from '../src/figma_app/518682'


export interface AppState {
  optimist: any[]
  autocomplete: Autocomplete
  contacts: Contacts
  dropdownShown: any
  flashes: ActiveFileUsers
  modalShown: any | { type: string, props: any }
  progress: ActiveFileUsers
  visualBell: any[]
  savedPublishDescription: string
  notifications: any[]
  downtime: Downtime
  blockedUILoadingIndicator: any
  teams: AuthedTeamsByID
  authedUsers: AuthedUsers
  publicUsers: PublicUsers
  authedProfilesById: AuthedProfilesByID
  authedTeamsById: AuthedTeamsByID
  authedActiveCommunityProfile: AuthedActiveCommunityProfile
  teamAdminRolesForAuthedUsers: TeamAdminRolesForAuthedUsers
  user: WelcomeUser
  userFlags: { [key: string]: UserFlag }
  userAnalyticsData: UserAnalyticsData
  userTeamFlags: ActiveFileUsers
  userEduGracePeriods: UserEduGracePeriods
  isFreeUser: boolean
  isStarterUser: boolean
  fileMove: FileMove
  fileByKey: FileByKey
  deletedFilesByKey: ActiveFileUsers
  deletedReposById: ActiveFileUsers
  folders: WelcomeFolders
  loadedFolders: ActiveFileUsers
  realtime: Realtime
  selectedView: SelectedView
  roles: Roles
  twoFactorAuth: TwoFactorAuth
  tooltip: Tooltip
  comments: WelcomeComments
  appWindow: AppWindow
  orgById: ActiveFileUsers
  currentUserOrgId: any
  lockedOrgIds: ActiveFileUsers
  isAccountLockedDuringOrgOperation: boolean
  hasPersonalSpace: boolean
  dragState: DragState
  userFavoriteFonts: any[]
  sharedFonts: SharedFonts
  orgUsersByOrgId: ActiveFileUsers
  orgDomains: OrgDomains
  licenseGroups: ActiveFileUsers
  teamUserByTeamId: TeamUserByTeamID
  universalInsertModal: UniversalInsertModal
  loadingState: LoadingState
  loadingStateFailureReasons: ActiveFileUsers
  userStateLoaded: boolean
  autosave: Autosave
  recentlyUsed: RecentlyUsed
  figjamDefaultInserts: FigjamDefaultInserts
  localPlugins: ActiveFileUsers
  publishedPlugins: ActiveFileUsers
  installedPluginVersions: InstalledPluginVersions
  publishedCanvasWidgetVersions: ActiveFileUsers
  fetchedCanvasWidgetVersions: ActiveFileUsers
  publishingPlugins: ActiveFileUsers
  featuredPlugins: ActiveFileUsers
  whitelistedPlugins: ActiveFileUsers
  hubFiles: HubFiles
  figFilePublishedAsHubFile: ActiveFileUsers
  figFileDuplicatedFromHubFile: ActiveFileUsers
  publishingHubFiles: ActiveFileUsers
  publishedWidgets: ActiveFileUsers
  whitelistedWidgets: ActiveFileUsers
  communityHub: CommunityHub
  communityPayments: ActiveFileUsers
  repos: ActiveFileUsers
  fileKeysByRepoId: ActiveFileUsers
  mergingStatus: number
  openFileMerge: any
  templateFiles: TemplateFiles
  teamJoinLinks: any
  theme: Theme
  desktopNewTab: DesktopNewTab
  sharingAttributionContextKey: string
  screenreader: Screenreader
  search: Search
  lastVisitedPlanId: any
  lastVisitedPlan: any
  plans: WelcomePlan[]
  currentTeamId: string
  favorites: Favorites
  userNotifications: UserNotifications
  recentPrototypes: any[]
  recentRepos: any[]
  fileKeysByFolderId: { [key: string]: ID[] }
  pinnedFileKeys: ActiveFileUsers
  fileImport: FileImport
  avatarEditorState: AvatarEditorState
  mobileNavShown: boolean
  creatingNewFolder: any
  tileSelect: TileSelect
  teamCreation: TeamCreation
  activeFileUsers: ActiveFileUsers
  teamView: TeamView
  teamRoleRequests: ActiveFileUsers
  payment: Payment
  tileSortFilterStateByView: TileSortFilterStateByView
  activityLogs: ActivityLogs
  orgSamlConfig: OrgSamlConfig
  orgTeams: OrgTeams
  idpUserById: IdpUserByID
  hubFileRemixes: ActiveFileUsers
  viewBarSortOptionsByView: ActiveFileUsers
  viewBarViewModeOptionByView: ActiveFileUsers
  library: Library
  teamBilling: TeamBilling
  teamMembersByTeamId: ActiveFileUsers
  repoIdsByFolderId: ActiveFileUsers
  selectedBranchKeyByRepoId: ActiveFileUsers
  teamFeedBellStates: ActiveFileUsers
  teamFeedRefreshNonce: number
  auth: Auth
  openFile: OpenFile
  isOpenFileLoadedFromLiveGraph: boolean
  isFullscreenDocumentLoaded: boolean
  fileVersion: number
  needsUpgrade: boolean
  progressBarState: ProgressBarState
  showingReconnectingModal: boolean
  showingOpenDesktopAppModal: number
  saveStatus: SaveStatus
  isRenaming: boolean
  pickerShown: any
  instanceSwapPickerShown: Shown
  stylePickerShown: Shown
  voting: Voting
  shouldShowStackAlignmentPicker: boolean
  stylePreviewShown: Shown
  versionHistory: VersionHistory
  multiplayer: Multiplayer
  fonts: { [key: string]: Font }
  localFontAgentVersion: any
  mirror: Mirror
  styleSets: ActiveFileUsers
  colorPicker: ColorPicker
  exportableItems: ActiveFileUsers
  showingUpgradeBanner: boolean
  showingFileCreationFailureBanner: boolean
  showingDowntimeBanner: boolean
  interactionTestDialogShown: boolean
  leftPanel: LeftPanel
  quickAccessTool: string
  imageDialogOpen: boolean
  delightfulToolbarOverflowMenuOpen: boolean
  isMakeSomethingV2Active: boolean
  usedKeyboardShortcuts: UsedKeyboardShortcuts
  keyboardShortcutPanel: KeyboardShortcutPanel
  multiplayerEmoji: MultiplayerEmoji
  eyedropper: any
  hyperlinkPopup: any
  canvasMentionPopup: any
  recentlyUsedQuickCommands: any[]
  saveAsState: SaveAsState
  timer: Timer
  music: WelcomeMusic
  faceStamps: any[]
  currentSelectionPaintInPicker: ActiveFileUsers
  stylePickerListLayout: boolean
  instanceSwapPickerListLayout: boolean
  preferredValuesPickerListLayout: boolean
  voice: Voice
  selectedComponentPropDefId: any
  showingFileFooter: boolean
  canvasSearch: CanvasSearch
  variablePickerShown: Shown
  quickStart: QuickStart
  recentCustomTemplates: ActiveFileUsers
  pickerInStyleCreationShown: any
  prototype: Prototype
}

export interface ActiveFileUsers {
  // [key: string]: HubFile
}
export interface HubFiles {
  [key: string]: HubFile
}

interface HubFile {
  id: string
  creator: Creator
  thumbnail_url: string
  viewer_mode: string
  library_key: string
  created_at: string
  resized_thumbnail_urls: Resizedthumbnailurls
  community_publishers: Communitypublishers
  current_hub_file_version_id: string
  unpublished_at: any
  duplicate_count: number
  like_count: number
  comments_setting: string
  comment_count: number
  publishing_status: string
  category_id: any
  is_chat_history_removed: boolean
  publisher: Publisher
  versions: Versions
  client_meta: string
  thumbnail_is_set: boolean
  current_user_liked: any
  is_pinned: boolean
  redirect_canvas_url: string
  monetization_status: any
  support_contact: any
  badges: any[]
  third_party_m10n_status: any
}

interface Versions {
  [key: string]: HubFileVersion
}

interface HubFileVersion {
  id: string
  hub_file_id: string
  name: string
  description: string
  version: string
  release_notes: any
  created_at: string
  valid_prototype: boolean
  client_meta: string
  thumbnail_guid: any
  creator_policy: any
}

interface Publisher {
  id: string
  location: string
  profile_handle: string
  public_at: string
  follower_count: number
  following_count: number
  primary_user_id: string
  name: string
  img_url: string
  img_urls: Imgurls
  current_user_is_following: any
  current_user_is_followed: any
  is_restricted_by_current_user: any
  realtime_token: string
  entity_type: string
  badges: any[]
}

interface Communitypublishers {
  accepted: Accepted[]
}

interface Accepted {
  id: string
  location: string
  profile_handle: string
  public_at: string
  follower_count: number
  following_count: number
  primary_user_id: string
  name: string
  img_url: string
  img_urls: Imgurls
  current_user_is_following: any
  current_user_is_followed: any
  is_restricted_by_current_user: any
  realtime_token: string
  entity_type: string
  associated_users: Associateduser[]
  badges: any[]
}

interface Associateduser {
  user_id: string
  is_primary_user: boolean
}

interface Imgurls {
  '120_120': string
  '500_500': string
}

interface Resizedthumbnailurls {
  160: string
  800: string
  1200: string
}

interface Creator {
  id: string
  handle: string
  img_url: string
}
export interface ActivityLogs {
  logs: any[]
  cursor: ActiveFileUsers
  isLoading: boolean
  isNewQuery: boolean
  lastQuery: LastQuery
}

export interface LastQuery {
  date: DateClass
}

export interface DateClass {
  start: any
  end: any
}

export interface AppWindow {
  inFullScreenMode: boolean
}

export interface Auth {
  accountPicker: any
  email: string
  name: string
  jobTitle: string
  usagePurpose: string
  optInEmail: boolean
  redirectUrl: string
  loading: boolean
  error: any
  appAuthId: any
  appAuthAppType: any
  appAuthGSecret: any
  appAuthDesktopProtocol: any
  appAuthUsers: any
  googleIdToken: any
  googleTokenType: string
  postVerificationAction: any
  arkoseAction: any
  ssoMethod: any
  orgName: any
  existingSession: boolean
  clickedSAMLSignIn: boolean
  shouldUseRedirectInstead: boolean
  fromMsTeams: boolean
}

export interface AuthedActiveCommunityProfile {
  id: string
  location: any
  profile_handle: string
  public_at: any
  follower_count: number
  following_count: number
  primary_user_id: string
  name: string
  img_url: string
  img_urls: ImgUrls
  current_user_is_following: any
  current_user_is_followed: any
  is_restricted_by_current_user: any
  realtime_token: string
  entity_type: string
  associated_users: AssociatedUser[]
  badges: any[]
  has_published: boolean
  org_id: any
  team_id: any
}

export interface AssociatedUser {
  user_id: string
  is_primary_user: boolean
  email: string
  can_sell_on_community: boolean
}

export interface ImgUrls {
  [key: string]: string
}

export interface AuthedProfilesByID {
  [key: string]: AuthedActiveCommunityProfile
}

export interface AuthedTeamsByID {
  [key: string]: AuthedTeamsByID1352471829114242693
}

export interface AuthedTeamsByID1352471829114242693 {
  id: string
  name: string
  created_at: Date
  synced_at: any
  providers: any
  stripe_customer_id: any
  subscription: any
  editors: number
  projects: number
  student_team_at: any
  student_autoverifying_team_at: any
  grace_period_end: any
  org_id: any
  img_urls: any
  org_access: any
  deleted_at: any
  blocked_at: any
  trial_period_end: any
  description: any | string
  deleted_by: any
  experiment_seed: number
  license_group_id: any
  migrated_stripe_customer_id: any
  community_blocked_at: any
  default_permission: any
  grace_period_type: any
  workspace_id: any
  default_color_palette_uuid: any
  tax_id_verified_at: any
  legal_name: any
  student_team_state: string
  ai_features_disabled_at: any
  editors_whiteboard: number
  editors_total_unique: number
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  figma_provided_libraries_disabled_at: any
  upgrade_approval_settings: UpgradeApprovalSettings
  sanctioned_at: any
  stripe_billing_address_country: any
  restrictions_list: string[]
  student_team: boolean
  starter_team: boolean
  pro_team: boolean
  DEPRECATED_pro_team: boolean
  org_team: boolean
  subscription_raw: any
  community_profile_id: any
  community_profile_handle: any
  is_paid: boolean
  ai_features_disabled: boolean
  ai_data_sharing_enabled: boolean
  org_browsable: boolean
  hidden: boolean
  last_upgraded_at: any
  figma_provided_libraries_disabled: boolean
  experiment_assignments: any[]
  updated_at: Date
  design_default_paid_status: string
  whiteboard_default_paid_status: string
  img_url?: any
  vat_gst_id?: string
  tax_id_verification_status?: any
  is_favorited?: boolean
  realtime_token?: string
}

export interface UpgradeApprovalSettings {
  expert: string
  developer: string
  collaborator: string
}

export interface AuthedUsers {
  byId: ByID
  orderedIds: string[]
}

export interface ByID {
  [key: string]: ByID1352471826795235809
}

export interface ByID1352471826795235809 {
  id: string
  name: string
  email: string
  handle: string
  img_url: string
  created_at: Date
  email_validated_at: Date
  utc_offset: any
  profile: Profile
  phone_number: any
  student_validated_at: any
  description: any
  plugin_publishing_blocked_at: any
  community_commenting_blocked_at: any
  community_blocked_at: any
  external_restricted_org_id: any
  external_restricted_at: any
  dev_tokens: any[]
  oauth_tokens: any[]
  realtime_token: string
  realtime_token_inactive: string
  two_factor_enabled: boolean
  two_factor_app_enabled: boolean
  google_sso_only: boolean
  saml_sso_only: boolean
  experiment_seed: number
  community_profile_id: any
  community_profile_handle: any
  community_beta_at: any
  locale: string
  signup_locale: any
  keyboard_layout: string
  mouse_scroll_to_zoom: boolean
  right_click_drag_to_pan: boolean
  auto_open_in_desktop: any
  color_profile: string
  sharing_restricted: boolean
  cmty_buyer_tos_accepted_at: any
  stripe_account_status: string
  cmty_seller_capabilities: string[]
  is_community_seller: boolean
  has_passed_visual_compliance: boolean
  stripe_connected_account_id: any
  screenreader_enabled: boolean
  community_purchasing_blocked_at: any
  experiment_assignments: any[]
  plans: WelcomePlan[]
  has_content_from_other_plans: boolean
  can_sell_on_community: any
}

export interface The1352471826795235809_Plan {
  plan_id: string
  is_guest: boolean
  is_org: boolean
  name: string
  img_url: any
}

export interface Profile {
  job_title: string
  images: Images
}

export interface Images {
  '500_500': string
}

export interface Autocomplete {
  inputValue: string
  tokens: any[]
  errorMessage: string
}

export interface Autosave {
  unclaimedFilesWithChangesInIDB: any[]
  unclaimedFilesCreatedOffline: any[]
  lastSnoozeTime: any
  nextGarbageCollectionTimestamp: number
}

export interface AvatarEditorState {
  status: number
  entity: any
}

export interface CanvasSearch {
  query: string
  filters: ActiveFileUsers
  scope: number
  mode: number
}

export interface ColorPicker {
  stylesExpanded: boolean
  viewMode: number
  selectedSwatchSetId: string
}

export interface WelcomeComments {
  activeThread: any
  threads: ActiveFileUsers
  newComment: NewComment
  editingComment: any
  showOnlyParticipating: boolean
  showResolved: boolean
  emojiPicker: any
  typeahead: any
  typeaheadPositionOffset: TypeaheadPositionOffset
  emphasizedPinIds: any[]
  hoveredPinIds: any[]
  activeDragTarget: any
  savingCommentUuids: ActiveFileUsers
  lgPendingUuidToServerIdMap: ActiveFileUsers
}

export interface NewComment {
  messageMeta: any[]
  attachments: ActiveFileUsers
  state: number
  anchorPosition: any
  selectionBoxAnchor: any
  discardAttempt: number
}

export interface TypeaheadPositionOffset {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
}

export interface CommunityHub {
  currentProfile: any
  pageState: any
  comments: CommunityHubComments
  shelves: ActiveFileUsers
  showingCommunityAdminBanner: boolean
}

export interface CommunityHubComments {
  activeFeedType: string
  authorsById: ActiveFileUsers
  commentsById: ActiveFileUsers
  feeds: Feeds
  id: any
  replyInfoByParentId: ActiveFileUsers
  selectedCommentId: any
  type: any
  showResolved: boolean
  mentionedProfiles: ActiveFileUsers
}

export interface Feeds {
  ALL: All
}

export interface All {
  feed: any[]
}

export interface Contacts {
  appData: AppData
  usersByEmail: ActiveFileUsers
  users: any[]
}

export interface AppData {
  contactsFetched: boolean
}

export interface DesktopNewTab {
  isCreatingFile: boolean
  searchQuery: string
  isSearchBarFocused: boolean
  loadingBackgroundColor: any
}

export interface Downtime {
  hidingDowntimeNotif: string
  notifMinutesRemaining: any
  payload: any
  status: string
}

export interface DragState {
  type: number
  data: any
}

export interface Favorites {
  collapsedCustomSections: ActiveFileUsers
  favoritesCount: number
}

export interface FigjamDefaultInserts {
  plugins: any[]
  widgets: any[]
  templates: any[]
  components: any[]
  useCases: any[]
}

export interface FileByKey {
  [key: string]: The9SAh5ErOA2TGF2IvXRIYGN | The6_YUoSy9FJxvOixYBkcsdGu
}

export interface The6_YUoSy9FJxvOixYBkcsdGu {
  creator_id: string
  updated_at: Date
  key: ID
  name: string
  description: any
  folder_id: string
  scheme: any
  team_id: TeamID
  link_access: LinkAccess
  trashed_user_id: any
  client_meta: string
  license: any
  parent_org_id: any
  org_browsable: boolean | any
  thumbnail_url_override: any
  thumbnail_guid: any
  proto_link_access: any
  org_audience: boolean
  file_repo_id: any
  source_file_key: any
  source_checkpoint_id: any
  editor_type: LandProduct
  branch_checkpoint_id: any
  has_file_link_password: boolean
  has_proto_link_password: boolean
  folder_access_enabled: boolean
  _internal_only_written_by_backfill: number
  is_trashed_with_project: boolean
  trashed_with_parent: any
  url: string
  edit_url: string
  prototype_url: string
  handoff_url: string
  slides_url: string
  track_tags: TrackTags | any
  viewer_export_restricted: boolean
  thumbnail_url: string
  is_try_file: boolean
  library_key: string
  created_at: Date
  deleted_at: any
  trashed_at: any
}

export enum LandProduct {
  Design = 'design',
}

export interface ID {
  [key: string]: string
}

export enum LinkAccess {
  View = 'view',
}

export enum TeamID {
  NoTeam = 'NO_TEAM',
}

export interface TrackTags {
  source: string
}

export interface The9SAh5ErOA2TGF2IvXRIYGN {
  creator_id: string
  updated_at: Date
  key: ID
  name: string
  description: any
  folder_id: string
  scheme: any
  team_id: string
  link_access: LinkAccess
  trashed_user_id: any
  client_meta: string
  license: any
  parent_org_id: any
  org_browsable: any
  thumbnail_url_override: any
  thumbnail_guid: any
  proto_link_access: any
  org_audience: boolean
  file_repo_id: any
  source_file_key: any
  source_checkpoint_id: any
  editor_type: string
  branch_checkpoint_id: any
  has_file_link_password: boolean
  has_proto_link_password: boolean
  folder_access_enabled: boolean
  _internal_only_written_by_backfill: number
  is_trashed_with_project: boolean
  trashed_with_parent: any
  url: string
  edit_url: string
  prototype_url: string
  handoff_url: string
  slides_url: string
  track_tags: any
  viewer_export_restricted: boolean
  thumbnail_url: string
  is_try_file: boolean
  library_key: string
  created_at: Date
  deleted_at: any
  trashed_at: any
  folder: Folder
  team: The9SAh5ErOA2TGF2IvXRIYGNTeam
  team_user: TeamUser
  org: any
  org_user: any
  edu_grace_period: any
  file_repo: any
  source_file: any
  can_edit: boolean
  can_export: boolean
  can_edit_canvas: boolean
  can_access_full_dev_mode: boolean
  can_access_dev_mode_entry_point: boolean
  can_use_jubilee: boolean
  can_manage: boolean
  touched_at: Date
  is_favorited: boolean
}

export interface Folder {
  id: string
  created_at: Date
  updated_at: Date
  scheme: any
  path: string
  settings: any
  team_id: string
  view_only_at: any
  org_id: any
  deleted_at: any
  description: any
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  is_abandoned_drafts: boolean
  trashed_at: any
  trashed_by: any
  abandoned_draft_user_name: any
  abandoned_draft_user_email: any
  abandoned_draft_user_removed_at: any
  trashed_user_id: any
  name: string
  is_invite_only: boolean
  is_view_only: boolean
  team_access: string
}

export interface The9SAh5ErOA2TGF2IvXRIYGNTeam {
  id: string
  name: string
  created_at: Date
  img_url: any
  synced_at: any
  providers: any
  subscription: any
  editors: number
  student_team_at: any
  student_autoverifying_team_at: any
  org_id: any
  org_access: any
  deleted_at: any
  blocked_at: any
  trial_period_end: any
  description: any
  deleted_by: any
  experiment_seed: number
  license_group_id: any
  migrated_stripe_customer_id: any
  community_blocked_at: any
  default_permission: any
  vat_gst_id: string
  workspace_id: any
  default_color_palette_uuid: any
  tax_id_verification_status: any
  tax_id_verified_at: any
  legal_name: any
  ai_features_disabled_at: any
  editors_whiteboard: number
  editors_total_unique: number
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  figma_provided_libraries_disabled_at: any
  upgrade_approval_settings: UpgradeApprovalSettings
  student_team: boolean
  restrictions_list: string[]
  ai_features_disabled: boolean
  org_browsable: boolean
  hidden: boolean
  figma_provided_libraries_disabled: boolean
  design_default_paid_status: string
  whiteboard_default_paid_status: string
  experiment_assignments: any[]
}

export interface TeamUser {
  id: string
  team_id: string
  user_id: string
  design_paid_status: string
  whiteboard_paid_status: string
  created_at: Date
  updated_at: Date
  show_figjam_user_onboarding: any
  has_shown_figjam_admin_onboarding: any
  drafts_folder_id: string
  _internal_only_written_by_backfill: number
  active_seat_type: ActiveSeatType
  user?: TeamUserUser
}

export interface ActiveSeatType {
  key: string
  license_types: string[]
}

export interface TeamUserUser {
  id: string
  handle: string
  img_url: string
  email?: string
}

export interface FileImport {
  step: string
  isDraggingImport: boolean
  queue: any[]
  files: ActiveFileUsers
  isProcessingFile: boolean
  failedOnFileLimit: boolean
  selectedPdfType: number
}

export interface FileMove {
  folderSearchQuery: string
  folderRenaming: any
  focusedIndex: number
  indexCount: any
  indexOffsets: ActiveFileUsers
  folderRows: any[]
  teamOrder: any[]
  foldersByTeamId: ActiveFileUsers
  isSearchResult: boolean
  isSearchFocused: boolean
  upDownKeyPressed: boolean
  canMouseFocus: boolean
  userTeamCount: any
}

export interface WelcomeFolders {
  216605957: The216605957
}

export interface The216605957 {
  id: string
  name: string
  description: any
  path: string
  team_id: string
  org_id: any
  is_subscribed: boolean
  is_favorited: boolean
  updated_at: Date
  created_at: Date
  is_invite_only: boolean
  is_view_only: boolean
  settings: any
  deleted_at: any
  trashed_at: any
  trashed_user_id: any
  is_abandoned_drafts: boolean
  sharing_audience_control: string
  team_access: string
}

export interface Font {
  '': Empty
}

export interface Empty {
  source: number
  styles: { [key: string]: Style }
}

export interface Style {
  weight: number
  stretch: number
  italic: boolean
  postscript: string
  id: string
  variationAxes?: VariationAx[]
}

export interface VariationAx {
  tag: TagEnum
  name: TagEnum
  min: number
  max: number
  default: number
  value: number
}

export enum TagEnum {
  Algn = 'algn',
  Arrr = 'ARRR',
  Bled = 'BLED',
  Bnce = 'BNCE',
  Casl = 'CASL',
  Cont = 'CONT',
  Crsv = 'CRSV',
  Ctgr = 'CTGR',
  Edpt = 'EDPT',
  Ehlt = 'EHLT',
  Elgr = 'ELGR',
  Elsh = 'ELSH',
  Flar = 'FLAR',
  Grad = 'GRAD',
  Hexp = 'HEXP',
  Infm = 'INFM',
  Ital = 'ital',
  Kshd = 'kshd',
  Midl = 'MIDL',
  Mono = 'MONO',
  Morf = 'MORF',
  Nega = 'NEGA',
  Opsz = 'opsz',
  OpticalSize = 'OpticalSize',
  Radi = 'radi',
  Scan = 'SCAN',
  Shln = 'SHLN',
  Shrp = 'SHRP',
  Slant = 'Slant',
  Slnt = 'slnt',
  Soft = 'SOFT',
  Spac = 'SPAC',
  Volm = 'VOLM',
  Wdth = 'wdth',
  Weight = 'Weight',
  Wght = 'wght',
  Width = 'Width',
  Wonk = 'WONK',
  Xopq = 'XOPQ',
  Xrot = 'XROT',
  Xtra = 'XTRA',
  Yaxs = 'YAXS',
  Year = 'YEAR',
  Yopq = 'YOPQ',
  Yrot = 'YROT',
  Ytas = 'YTAS',
  Ytde = 'YTDE',
  Ytfi = 'YTFI',
  Ytlc = 'YTLC',
  Ytuc = 'YTUC',
}

export interface IdpUserByID {
  isCreatingOrgInvite: boolean
  idpUsers: ActiveFileUsers
}

export interface InstalledPluginVersions {
  loaded: boolean
  plugins: ActiveFileUsers
}

export interface Shown {
  isShown: boolean
}

export interface KeyboardShortcutPanel {
  tab: any
}

export interface LeftPanel {
  activeTab: number
  shouldFocusSearchBar: boolean
}

export interface Library {
  publishedByLibraryKey: PublishedByLibraryKey
  used__LIVEGRAPH: UsedLIVEGRAPH
  openFilePublished__LIVEGRAPH: OpenFilePublishedLIVEGRAPH
  openHubFilePublished__LIVEGRAPH: OpenFilePublishedLIVEGRAPH
  local: Local
  assetsPanelSearch: AssetsPanelSearch
  publishProgress: PublishProgress
  isRenamingSelectedStyle: boolean
  localStyleSelection: any
  defaultPublished: DefaultPublished
  libraryUpdatesBannerDismissed: boolean
  movedLibraryItems: MovedLibraryItems
  libraryPublishingMode: number
  localVariablesById: SourceAssetKeyToDestinationKey
  localVariableSetsById: SourceAssetKeyToDestinationKey
  subscribedVariablesByIdFromLoadedPages: SubscribedVariablesByIdFromLoadedPages
  subscribedVariableSetsByIdFromLoadedPages: SubscribedVariableSetsByIdFromLoadedPages
  knownUsedLibraryVariablesByKey: KnownUsedLibraryVariablesByKey
  knownUsedLibraryVariableSetsByKey: SourceAssetKeyToDestinationKey
  publishableStateGroups: any[]
  publishableStyles: any[]
  publishableSymbols: any[]
  publishableModules: any[]
  subscribedSymbolsFromLoadedPages: SubscribedSymbolsFromLoadedPage[]
  subscribedStateGroupsFromLoadedPages: SubscribedSymbolsFromLoadedPage[]
  directlySubscribedStylesFromLoadedPages: SubscribedSymbolsFromLoadedPage[]
  indirectlySubscribedStylesFromLoadedPages: SubscribedSymbolsFromLoadedPage[]
  localSymbolsThatHaveUsagesOnLoadedPages: any[]
  localStylesThatHaveUsagesOnLoadedPages: any[]
  subscribedSymbolsOnCurrentPage: SubscribedSymbolsFromLoadedPage[]
  subscribedStateGroupsOnCurrentPage: SubscribedSymbolsFromLoadedPage[]
  directlySubscribedStylesOnCurrentPage: SubscribedSymbolsFromLoadedPage[]
  localSymbolsThatHaveUsagesOnCurrentPage: any[]
  localStylesThatHaveUsagesOnCurrentPage: any[]
}

interface SubscribedSymbolsFromLoadedPage {
  nodeId: string
  key: string
  version: string
  userFacingVersion: string
}

interface KnownUsedLibraryVariablesByKey {
  [key: string]: Nown0
}

interface Nown0 {
  data: Data
  errors: any[]
  status: string
}

interface Data {
  variable: any
}

interface SubscribedVariableSetsByIdFromLoadedPages {
  [key: string]: VariableExample
}

interface VariableExample {
  type: string
  subscriptionStatus: string
  node_id: string
  version: string
  userFacingVersion: string
  modes: Mode[]
  name: string
  defaultModeID: string
  key: string
  library_key: string
  pageIds: any[]
  isExtendable: boolean
  sortPosition: any
  publishID: string
  isExtension: boolean
}

interface Mode {
  id: string
  name: string
  sortPosition: string
  parentModeId: any
  parentVariableSetId: any
}

interface SubscribedVariablesByIdFromLoadedPages {
  [key: string]: VariableExample1
}

interface VariableExample1 {
  type: string
  subscriptionStatus: string
  variableSetId: string
  node_id: string
  sortPosition: string
  resolvedType: number
  version: string
  userFacingVersion: string
  modeValues: ModeValues
  description: string
  name: string
  key: string
  library_key: string
  scopes: number[]
  codeSyntax: SourceAssetKeyToDestinationKey
  isSoftDeleted: boolean
  pageIds: string[]
  publishID: string
}

interface ModeValues {
  [key: string]: _2090
}

interface _2090 {
  type: number
  resolvedType: number
  value: number
}

interface MovedLibraryItems {
  subscribed: SourceAssetKeyToDestinationKey
  local: SourceAssetKeyToDestinationKey
}

interface DefaultPublished {
  componentsByLibraryKey: ComponentsByLibraryKey
  stateGroupsByLibraryKey: StateGroupsByLibraryKey
  libraryKeys: string[]
}

interface StateGroupsByLibraryKey {
  [key: string]: LK
}

interface LK {
  [key: string]: _7427
}

interface _7427 {
  name: string
  file_key: string
  type: string
  key: string
  thumbnail_url: string
  canvas_url: string
  version: string
  userFacingVersion: string
  description: string
  description_rt: string
  id: string
  node_id: string
  containing_frame: Containingframe3
  updated_at: string
  fill_color: any
  default_state_key: string
  min_node_width: number
  min_node_height: number
  is_template: any
  library_key: string
}

interface Containingframe3 {
  pageId: string
  pageName: string
}

interface ComponentsByLibraryKey {
  [key: string]: LibraryComponent2
}

interface LibraryComponent2 {
  [key: string]: NoTeamItemValueDetail
}

interface PublishProgress {
  state: number
}

interface AssetsPanelSearch {
  query: string
  isLoading: boolean
  normalizedSearchResults: any[]
  unsubscribedSearchResults: any[]
  shouldSearchDefaultLibraries: boolean
  versionForTracking: number
  entryPoint: string
}

interface Local {
  components: SourceAssetKeyToDestinationKey
  styles: SourceAssetKeyToDestinationKey
  stateGroups: SourceAssetKeyToDestinationKey
  modules: SourceAssetKeyToDestinationKey
  thumbnails: SourceAssetKeyToDestinationKey
}

interface OpenFilePublishedLIVEGRAPH {
  components: SourceAssetKeyToDestinationKey
  styles: SourceAssetKeyToDestinationKey
  stateGroups: SourceAssetKeyToDestinationKey
  variableSets: SourceAssetKeyToDestinationKey
  variables: SourceAssetKeyToDestinationKey
  modules: SourceAssetKeyToDestinationKey
}

interface UsedLIVEGRAPH {
  styles: Styles
  sourceAssetKeyToDestinationKey: SourceAssetKeyToDestinationKey
  sourceAssetKeyToFileName: SourceAssetKeyToDestinationKey
  localNodeIdToDestinationKey: SourceAssetKeyToDestinationKey
  localNodeIdToDestinationFileName: SourceAssetKeyToDestinationKey
  unnaturalKeyToNaturalKey: SourceAssetKeyToDestinationKey
  destinationStyleKeyToLegacySourceStyle: SourceAssetKeyToDestinationKey
}

interface SourceAssetKeyToDestinationKey {
}

interface Styles {
  [key: string]: StyleItemValue
}

interface StyleItemValue {
  status: string
  data: any
  errors: any[]
}

interface PublishedByLibraryKey {
  components: Components
  stateGroups: StateGroups
}

interface StateGroups {
  NO_TEAM: NOTEAM2
}

interface NOTEAM2 {
  [key: string]: DynamicKeyValueStore
}

interface DynamicKeyValueStore {
  [key: string]: StateGroupItemValueInner
}

interface StateGroupItemValueInner {
  name: string
  file_key: string
  type: string
  key: string
  thumbnail_url: string
  canvas_url: string
  version: string
  userFacingVersion: string
  description: string
  description_rt: string
  id: string
  node_id: string
  containing_frame: Containingframe2
  updated_at: string
  fill_color: any
  default_state_key: string
  min_node_width: number
  min_node_height: number
  is_template: any
  library_key: string
}

export interface Containingframe2 {
  name: string
  nodeId: string
  pageId: string
  pageName: string
  backgroundColor: string
}

export interface Components {
  NO_TEAM: NOTEAM
}

export interface NOTEAM {
  [key: string]: NoTeamItemValue
}

export interface NoTeamItemValue {
  [key: string]: NoTeamItemValueDetail
}

export interface NoTeamItemValueDetail {
  name: string
  file_key: string
  type: string
  component_key: string
  thumbnail_url: string
  canvas_url: string
  content_hash: string
  userFacingVersion: string
  id: string
  description: string
  description_rt: string
  node_id: string
  containing_frame: Containingframe
  is_unflattened: boolean
  updated_at: string
  min_node_width: number
  min_node_height: number
  sort_position: any
  has_video: any
  is_template: any
  library_key: string
}

interface Containingframe {
  name: string
  nodeId: string
  pageId: string
  pageName: string
  backgroundColor: string
  containingStateGroup: ContainingStateGroup
}

interface ContainingStateGroup {
  name: string
  nodeId: string
}

export interface AssetsPanelSearch {
  query: string
  isLoading: boolean
  normalizedSearchResults: any[]
  unsubscribedSearchResults: any[]
  shouldSearchDefaultLibraries: boolean
  versionForTracking: number
}

export interface DefaultPublished {
  componentsByLibraryKey: ComponentsByLibraryKey
  stateGroupsByLibraryKey: StateGroupsByLibraryKey
  libraryKeys: string[]
}

export interface ComponentsByLibraryKey {
  [key: string]: { [key: string]: DesignComponentInnerLibraryKey }

}

export interface DesignComponentInnerLibraryKey {
  name: string
  file_key: ID
  type: TypeEnum
  component_key?: string
  thumbnail_url: string
  canvas_url: string
  content_hash?: string
  userFacingVersion: string
  id: string
  description: string
  description_rt: any | string
  node_id: string
  containing_frame: FContainingFrame
  is_unflattened?: boolean
  updated_at: Date
  min_node_width: number
  min_node_height: number
  sort_position?: any
  has_video?: any
  is_template: any
  library_key: string
  key?: string
  version?: string
  fill_color?: BackgroundColorEnum | any
  default_state_key?: string
}

export interface FContainingFrame {
  name: PurpleName
  nodeId: NodeID
  pageId: EID
  pageName: PageNameEnum
  backgroundColor: BackgroundColorEnum
  containingStateGroup?: ContainingStateGroup
}

export enum BackgroundColorEnum {
  F5F5F5 = '#F5F5F5',
  Ffffff = '#FFFFFF',
  RGBA0000 = 'rgba(0, 0, 0, 0)',
}

export interface ContainingStateGroup {
  name: string
  nodeId: string
}

export enum PurpleName {
  AllTheFlags = 'All the flags',
  CandyBytes = 'Candy bytes',
  CheckBox = 'Check box',
  DogHat = 'Dog hat',
  DoodlesHandwrittenPencilSketchDraft = 'Doodles, handwritten, pencil, sketch, draft',
  Frame1 = 'Frame 1',
  Sound = 'Sound',
  SquishySquashies = 'Squishy squashies',
  TotesEmotes = 'Totes emotes',
}

export interface NodeID {
  [key: string]: string
}

export interface EID {
  [key: string]: string
}

export enum PageNameEnum {
  IllustrationsIcons = 'Illustrations & Icons',
  Page1 = 'Page 1',
  Resized = 'Resized',
  Stickers = 'stickers',
  Textures = 'Textures \uD83D\uDE80',
}

export enum TypeEnum {
  Component = 'component',
  StateGroup = 'state_group',
}

export interface FLINK123 {
  name: string
  file_key: ID
  type: TypeEnum
  component_key: string
  thumbnail_url: string
  canvas_url: string
  content_hash: string
  userFacingVersion: string
  id: string
  description: Description
  description_rt: DescriptionRt | any
  node_id: string
  containing_frame: FContainingFrame
  is_unflattened: boolean
  updated_at: Date
  min_node_width: number
  min_node_height: number
  sort_position: any
  has_video: any
  is_template: any
  library_key: string
}

export enum Description {
  Empty = '',
  Morning = 'morning',
}

export enum DescriptionRt {
  Empty = '',
  PMorningP = '<p>morning</p>',
}

export interface LINKContainer {
  [key: string]: FLINK123 | The116139
}

export interface The116139 {
  name: string
  file_key: ID
  type: TypeEnum
  component_key?: string
  thumbnail_url: string
  canvas_url: string
  content_hash?: string
  userFacingVersion: string
  id: string
  description: string
  description_rt: string
  node_id: string
  containing_frame: The116139_ContainingFrame
  is_unflattened?: boolean
  updated_at: Date
  min_node_width: number
  min_node_height: number
  sort_position?: any
  has_video?: any
  is_template: any
  library_key: string
  key?: string
  version?: string
  fill_color?: any
  default_state_key?: string
}

export interface The116139_ContainingFrame {
  pageId: EID
  pageName: PageNameEnum
}

export interface StateGroupsByLibraryKey {
  [key: string]: { [key: string]: DesignComponentInnerLibraryKey }
}

export interface Local {
  components: ActiveFileUsers
  styles: ActiveFileUsers
  stateGroups: ActiveFileUsers
  modules: ActiveFileUsers
  thumbnails: ActiveFileUsers
}

export interface MovedLibraryItems {
  subscribed: ActiveFileUsers
  local: ActiveFileUsers
}

export interface OpenFilePublishedLivegraph {
  components: ActiveFileUsers
  styles: ActiveFileUsers
  stateGroups: ActiveFileUsers
  variableSets: ActiveFileUsers
  variables: ActiveFileUsers
  modules: ActiveFileUsers
}

export interface PublishProgress {
  state: number
}

export interface PublishedByLibraryKey {
  components: ActiveFileUsers
  stateGroups: ActiveFileUsers
}

export interface UsedLIVEGRAPH {
  styles: ActiveFileUsers
  sourceAssetKeyToDestinationKey: ActiveFileUsers
  sourceAssetKeyToFileName: ActiveFileUsers
  localNodeIdToDestinationKey: ActiveFileUsers
  localNodeIdToDestinationFileName: ActiveFileUsers
  unnaturalKeyToNaturalKey: ActiveFileUsers
  destinationStyleKeyToLegacySourceStyle: ActiveFileUsers
}

export interface LoadingState {
  [key: string]: APILoadingStatus
}

export enum APILoadingStatus {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export interface Mirror {
  appModel: AppModel
  selectionProperties: SelectionProperties
  selectedStyleProperties: SelectedStyleProperties
  sceneGraph: TSSceneGraph
  sceneGraphSelection: SceneGraphSelection
  objectsPanelRowRebuildCounter: number
  selectionPaints: SelectionPaints
}

export type AppModelValue = AppModelElement[] | boolean | PurpleAppModel | number | any | string

export interface AppModelElement {
  nodeId: EID
  name: PageNameEnum
  pageType: number
  isDivider: boolean
  status: number
  loadedForPlugins: boolean
}

export interface PurpleAppModel {
  'index'?: number
  'type'?: TypeUnion
  'indices'?: any[]
  'mode'?: number
  'x'?: number
  'y'?: number
  'angle'?: number
  'padding'?: CenterRelativeToParent
  'margin'?: CenterRelativeToParent
  'cornerRadius'?: number
  'fontSize'?: number
  'measurementId'?: string
  'initMeasurementText'?: string
  'isCentered'?: boolean
  'invertTextPosition'?: boolean
  'axis'?: number
  'isTLF'?: boolean
  'initialText'?: string
  'isShownOnLeft'?: boolean
  'shouldOpenDropdown'?: boolean
  'varWidthNodeId'?: string
  'varWidthIndex'?: number
  'varWidthTextDirection'?: CenterRelativeToParent
  'sessionId'?: string
  'votingStage'?: number
  'userVoteLimit'?: number
  'votedNodes'?: any[]
  'userIdToVoteStampIds'?: ActiveFileUsers
  'live-boolean-xor'?: AlignBottom[]
  'live-boolean-intersect'?: AlignBottom[]
  'live-boolean-subtract'?: AlignBottom[]
  'live-boolean-union'?: AlignBottom[]
  'select-matching'?: AlignBottom[]
  'set-tool-measure'?: AlignBottom[]
  'set-tool-comments'?: AlignBottom[]
  'set-tool-default'?: AlignBottom[]
  'set-tool-type'?: AlignBottom[]
  'set-tool-ellipse'?: AlignBottom[]
  'set-tool-pen'?: AlignBottom[]
  'toggle-buzz-tool-mode'?: AlignBottom[]
  'show-prototype-panel'?: AlignBottom[]
  'distribute-vertical-spacing'?: AlignBottom[]
  'tidy-up'?: AlignBottom[]
  'align-vertical-center'?: AlignBottom[]
  'debug-selection'?: AlignBottom[]
  'align-bottom'?: AlignBottom[]
  'text-bold-increase'?: AlignBottom[]
  'text-line-height-increase'?: AlignBottom[]
  'set-tool-arrow'?: AlignBottom[]
  'text-line-height-decrease'?: AlignBottom[]
  'align-top'?: AlignBottom[]
  'text-letter-spacing-increase'?: AlignBottom[]
  'text-letter-spacing-decrease'?: AlignBottom[]
  'text-toggle-ordered-list'?: AlignBottom[]
  'text-font-size-increase'?: AlignBottom[]
  'text-align-center'?: AlignBottom[]
  'page-next'?: AlignBottom[]
  'next-artboard-same-zoom'?: AlignBottom[]
  'previous-artboard-same-zoom'?: AlignBottom[]
  'next-artboard'?: AlignBottom[]
  'previous-artboard'?: AlignBottom[]
  'toggle-recording-interactions'?: AlignBottom[]
  'start-chat'?: AlignBottom[]
  'toggle-dropper'?: AlignBottom[]
  'toggle-edit-mode'?: AlignBottom[]
  'text-font-size-decrease'?: AlignBottom[]
  'escape'?: AlignBottom[]
  'find-symbol'?: AlignBottom[]
  'detach-instance'?: AlignBottom[]
  'text-align-left'?: AlignBottom[]
  'toggle-pixel-preview'?: AlignBottom[]
  'move-text-selection-end'?: AlignBottom[]
  'toggle-library'?: AlignBottom[]
  'toggle-grid'?: AlignBottom[]
  'set-tool-annotate'?: AlignBottom[]
  'text-toggle-italic'?: AlignBottom[]
  'show-rotation-origin'?: AlignBottom[]
  'select-previous-sibling'?: AlignBottom[]
  'toggle-rulers'?: AlignBottom[]
  'text-toggle-unordered-list'?: AlignBottom[]
  'toggle-locked-for-selected-nodes'?: AlignBottom[]
  'align-right'?: AlignBottom[]
  'toggle-grid-focus-view'?: AlignBottom[]
  'toggle-publish'?: AlignBottom[]
  'set-tool-paint-bucket'?: AlignBottom[]
  'page-previous'?: AlignBottom[]
  'set-opacity-3'?: AlignBottom[]
  'canvas-search-prev'?: AlignBottom[]
  'canvas-search-next'?: AlignBottom[]
  'redo'?: AlignBottom[]
  'text-indent-list'?: AlignBottom[]
  'resize-to-fit'?: AlignBottom[]
  'text-delete-selection-or-next-character'?: AlignBottom[]
  'toggle-layers'?: AlignBottom[]
  'text-delete-selection-or-end'?: AlignBottom[]
  'distribute-horizontal-spacing'?: AlignBottom[]
  'mask-selection'?: AlignBottom[]
  'toggle-prototyping-info'?: AlignBottom[]
  'text-dedent-list'?: AlignBottom[]
  'toggle-shown-for-selected-nodes'?: AlignBottom[]
  'bring-forward'?: AlignBottom[]
  'flatten-selection'?: AlignBottom[]
  'join-selection'?: AlignBottom[]
  'copy-properties'?: AlignBottom[]
  'select-child'?: AlignBottom[]
  'toggle-ui'?: AlignBottom[]
  'select-all'?: AlignBottom[]
  'toggle-show-annotations'?: AlignBottom[]
  'plugins-run-last'?: AlignBottom[]
  'select-parent'?: AlignBottom[]
  'focus-previous-area'?: AlignBottom[]
  'toggle-show-comments'?: AlignBottom[]
  'unlock-all'?: AlignBottom[]
  'extend-text-selection-backward'?: AlignBottom[]
  'set-tool-scale'?: AlignBottom[]
  'toggle-menu'?: AlignBottom[]
  'toggle-snapping-to-pixels'?: AlignBottom[]
  'group-selection'?: AlignBottom[]
  'set-tool-frame'?: AlignBottom[]
  'flip-horizontal'?: AlignBottom[]
  'move-text-selection-forward'?: AlignBottom[]
  'unstack-selection'?: AlignBottom[]
  'extend-text-selection-start'?: AlignBottom[]
  'set-tool-rectangle'?: AlignBottom[]
  'extend-text-selection-end'?: AlignBottom[]
  'toggle-bold'?: AlignBottom[]
  'move-text-selection-backward'?: AlignBottom[]
  'smooth-join-selection'?: AlignBottom[]
  'stack-selection'?: AlignBottom[]
  'undo'?: AlignBottom[]
  'text-align-right'?: AlignBottom[]
  'toggle-outlines'?: AlignBottom[]
  'collapse-layers'?: AlignBottom[]
  'canvas-search'?: AlignBottom[]
  'set-tool-section'?: AlignBottom[]
  'toggle-fake-mp-activity'?: AlignBottom[]
  'component-insert'?: AlignBottom[]
  'send-to-back'?: AlignBottom[]
  'place'?: AlignBottom[]
  'move-text-selection-start'?: AlignBottom[]
  'swap-fill-and-stroke'?: AlignBottom[]
  'ungroup-selection'?: AlignBottom[]
  'set-opacity-7'?: AlignBottom[]
  'remove-stroke'?: AlignBottom[]
  'set-tool-shape-builder'?: AlignBottom[]
  'remove-fill'?: AlignBottom[]
  'paste-properties'?: AlignBottom[]
  'rename-selection'?: AlignBottom[]
  'zoom-out'?: AlignBottom[]
  'flip-vertical'?: AlignBottom[]
  'present-as-prototype'?: AlignBottom[]
  'toggle-shown-layout-grids'?: AlignBottom[]
  'bring-to-front'?: AlignBottom[]
  'select-inverse'?: AlignBottom[]
  'text-bold-decrease'?: AlignBottom[]
  'duplicate-in-place'?: AlignBottom[]
  'toggle-perf-hud'?: AlignBottom[]
  'focus-next-area'?: AlignBottom[]
  'text-edit-hyperlink'?: AlignBottom[]
  'send-backward'?: AlignBottom[]
  'paste-over-selection'?: AlignBottom[]
  'extend-text-selection-forward'?: AlignBottom[]
  'zoom-in'?: AlignBottom[]
  'align-left'?: AlignBottom[]
  'text-align-justified'?: AlignBottom[]
  'set-opacity-2'?: AlignBottom[]
  'set-tool-hand'?: AlignBottom[]
  'open-shortcuts'?: AlignBottom[]
  'set-opacity-4'?: AlignBottom[]
  'set-tool-slice'?: AlignBottom[]
  'create-symbol'?: AlignBottom[]
  'export-buzz-assets'?: AlignBottom[]
  'select-next-sibling'?: AlignBottom[]
  'set-opacity-8'?: AlignBottom[]
  'toggle-preferences'?: AlignBottom[]
  'paste-to-replace'?: AlignBottom[]
  'create-section-from-selection'?: AlignBottom[]
  'outline-stroke'?: AlignBottom[]
  'zoom-to-selection'?: AlignBottom[]
  'create-savepoint'?: AlignBottom[]
  'align-horizontal-center'?: AlignBottom[]
  'toggle-sidebar'?: AlignBottom[]
  'set-opacity-1'?: AlignBottom[]
  'text-toggle-strikethrough'?: AlignBottom[]
  'show-design-panel'?: AlignBottom[]
  'frame-selection'?: AlignBottom[]
  'set-opacity-0'?: AlignBottom[]
  'run-multi-stack-auto-layout'?: AlignBottom[]
  'zoom-to-fit'?: AlignBottom[]
  'text-toggle-underline'?: AlignBottom[]
  'set-tool-line'?: AlignBottom[]
  'set-opacity-5'?: AlignBottom[]
  'set-tool-pencil'?: AlignBottom[]
  'set-opacity-6'?: AlignBottom[]
  'copy-as-png'?: AlignBottom[]
  'toggle-multiplayer-cursors'?: AlignBottom[]
  'zoom-reset'?: AlignBottom[]
  'delete-and-heal-selection'?: AlignBottom[]
  'set-opacity-9'?: AlignBottom[]
  'delete-selection'?: AlignBottom[]
  'id'?: string
  'codeExtensionPreferences'?: CodeExtensionPreferences
}

export interface AlignBottom {
  text: string
  originalText: string
}

export interface CodeExtensionPreferences {
  WEB: Android
  IOS: Android
  IOS_UIKIT: Android
  ANDROID: Android
  FIGMA_PROPERTIES: Android
  ANDROID_XML: Android
}

export interface Android {
  scaleFactor: number
  unit: number
  customSettings: ActiveFileUsers
}

export interface CenterRelativeToParent {
  x: number
  y: number
}

export type TypeUnion = number | string

export interface SceneGraph {
  _nodeContext: number
  changeListeners: ChangeListeners
  deleteListeners: ActiveFileUsers
}

export interface ChangeListeners {
  config: ActiveFileUsers
  synchronousListeners: any[]
  deferrableListeners: any[]
  deferredListeners: any[]
}
enum Actions {
  rollbackStagedChanges = 'rollback-staged-changes',
  commitStagedChanges = 'commit-staged-changes',
  toggleSmartTextSubstitution = 'toggle-smart-text-substitution',
  setConstraintsAutomaticallyToggle = 'set-constraints-automatically-toggle',
  setConstraintsManually = 'set-constraints-manually',
  setConstraintsAutomatically = 'set-constraints-automatically',
  imageToDesignOracle = 'image-to-design-oracle',
  imageToDesign = 'image-to-design',
  mermaidToDiagram = 'mermaid-to-diagram',
  createIdeas = 'create-ideas',
  mindMapGenerateIdeas = 'mind-map-generate-ideas',
  sortStickiesByStampType = 'sort-stickies-by-stamp-type',
  sortStickiesByStampCount = 'sort-stickies-by-stamp-count',
  sortStickiesByAuthor = 'sort-stickies-by-author',
  sortStickiesByColor = 'sort-stickies-by-color',
  sortStickiesByTopic = 'sort-stickies-by-topic',
  summarizeStickies = 'summarize-stickies',
  whiteboardGenerateContent = 'whiteboard-generate-content',
  removePlatformShapeDefinition = 'remove-platform-shape-definition',
  addPlatformShapeDefinition = 'add-platform-shape-definition',
  pasteSelectionIntoBuzzFromDesign = 'paste-selection-into-buzz-from-design',
  sendToBuzzFromDesign = 'send-to-buzz-from-design',
  focusNextAsset = 'focus-next-asset',
  insertSlideNumbersAllSlides = 'insert-slide-numbers-all-slides',
  addSlideObjectAnimation = 'add-slide-object-animation',
  skipSlides = 'skip-slides',
  skipSlide = 'skip-slide',
  focusSlideDown = 'focus-slide-down',
  focusSlideUp = 'focus-slide-up',
  focusPreviousSlide = 'focus-previous-slide',
  focusNextSlide = 'focus-next-slide',
  detachCmsRichText = 'detach-cms-rich-text',
  createCmsRichTextInInstance = 'create-cms-rich-text-in-instance',
  unskipSlides = 'unskip-slides',
  createCmsRichText = 'create-cms-rich-text',
  setSitesInsertsOverlay = 'set-sites-inserts-overlay',
  setSitesViewCms = 'set-sites-view-cms',
  setSitesViewCode = 'set-sites-view-code',
  setSitesViewFile = 'set-sites-view-file',
  copyOutDesignFromCode = 'copy-out-design-from-code',
  bulkExportDesignToReact = 'bulk-export-design-to-react',
  editCode = 'edit-code',
  sitesCopyLink = 'sites-copy-link',
  setAsSiteHomepage = 'set-as-site-homepage',
  copyMakeForDesign = 'copy-make-for-design',
  createMakeFromDesign = 'create-make-from-design',
  focusPreviousArea = 'focus-previous-area',
  togglePluginApiDebug = 'toggle-plugin-api-debug',
  toggleCollaborativeTextDebug = 'toggle-collaborative-text-debug',
  debugToggleWhiteboardPdfImportNodeReplacement = 'debug-toggle-whiteboard-pdf-import-node-replacement',
  debugToggleShowMousePosition = 'debug-toggle-show-mouse-position',
  slidesRewriteText = 'slides-rewrite-text',
  slidesGenerateSpeakerNotes = 'slides-generate-speaker-notes',
  contentFill = 'content-fill',
  shortenText = 'shorten-text',
  rewriteText = 'rewrite-text',
  detectViolations = 'detect-violations',
  makeEditsDebugReview = 'make-edits-debug-review',
  firstDraftDebug = 'first-draft-debug',
  firstDraftLinting = 'first-draft-linting',
  firstDraftSuggestProps = 'first-draft-suggest-props',
  firstDraftComponentize = 'first-draft-componentize',
  firstDraftMakeChanges = 'first-draft-make-changes',
  firstDraft = 'first-draft',
  magicLink = 'magic-link',
  autoRenameLayers = 'auto-rename-layers',
  expandImage = 'expand-image',
  removeBackground = 'remove-background',
  startMindMap = 'start-mind-map',
  setSlidesAudienceView = 'set-slides-audience-view',
  setSitesInlinePreview = 'set-sites-inline-preview',
  toggleDisplayGpuMetrics = 'toggle-display-gpu-metrics',
  setToolBend = 'set-tool-bend',
  toggleDisplayDirtyTiles = 'toggle-display-dirty-tiles',
  showPrototypeInteractionEditModal = 'show-prototype-interaction-edit-modal',
  addTableRowAbove = 'add-table-row-above',
  lockSelectedSectionOnly = 'lock-selected-section-only',
  toggleNoodlesWithoutDragging = 'toggle-noodles-without-dragging',
  toggleSyncCursorRendering = 'toggle-sync-cursor-rendering',
  flipHorizontal = 'flip-horizontal',
  toggleAllowTimeSlicedEditRenderingOptimization = 'toggle-allow-time-sliced-edit-rendering-optimization',
  changeDocumentColorProfileToSrgb = 'change-document-color-profile-to-srgb',
  focusNextArea = 'focus-next-area',
  assignDocumentColorProfileLegacy = 'assign-document-color-profile-legacy',
  enterBuzzDesignMode = 'enter-buzz-design-mode',
  setToolOldSelect = 'set-tool-old-select',
  toggleBuzzToolMode = 'toggle-buzz-tool-mode',
  presentSlidesPresenterView = 'present-slides-presenter-view',
  presentSlidesAudienceView = 'present-slides-audience-view',
  removeBreakpoint = 'remove-breakpoint',
  presentAsPrototype = 'present-as-prototype',
  sitesFixIssue = 'sites-fix-issue',
  textSmallCaps = 'text-small-caps',
  toggleStraightPencil = 'toggle-straight-pencil',
  setImageAsProfilePicture = 'set-image-as-profile-picture',
  focusModeResponsiveSet = 'focus-mode-responsive-set',
  debugLogCanvasSearchIndex = 'debug-log-canvas-search-index',
  setOpacity0 = 'set-opacity-0',
  setOpacity4 = 'set-opacity-4',
  debugToggleFigmakeMode = 'debug-toggle-figmake-mode',
  debugToggleSitesMode = 'debug-toggle-sites-mode',
  addSelectionReadyStatus = 'add-selection-ready-status',
  toggleUi = 'toggle-ui',
  debugSetSlidesGridMode = 'debug-set-slides-grid-mode',
  toggleShowDotGrid = 'toggle-show-dot-grid',
  duplicateInPlace = 'duplicate-in-place',
  debugToggleWhiteboardMode = 'debug-toggle-whiteboard-mode',
  setToolShapeWhiteboardManualInput = 'set-tool-shape-whiteboard-manual-input',
  repairVariableConnections = 'repair-variable-connections',
  testMultiplayerUpgrade = 'test-multiplayer-upgrade',
  testAction = 'test-action',
  keyboardLayoutDanish = 'keyboard-layout-danish',
  resizeTableColumnDecreaseLarge = 'resize-table-column-decrease-large',
  replaceSelectedSectionWithFrame = 'replace-selected-section-with-frame',
  panelsMenu = 'panels-menu',
  resizeTableColumnIncrease = 'resize-table-column-increase',
  copyLink = 'copy-link',
  exportAllFramesToPdf = 'export-all-frames-to-pdf',
  resizeTableRowIncreaseLarge = 'resize-table-row-increase-large',
  resizeTableRowDecrease = 'resize-table-row-decrease',
  copyAsCss = 'copy-as-css',
  setPrototypeViewPresent = 'set-prototype-view-present',
  resizeTableRowIncrease = 'resize-table-row-increase',
  extendTableCellSelectionDown = 'extend-table-cell-selection-down',
  setPrototypeViewPreview = 'set-prototype-view-preview',
  extendTableCellSelectionUp = 'extend-table-cell-selection-up',
  linkToComponent = 'link-to-component',
  findComponentInFile = 'find-component-in-file',
  inlinePreviewResetSize = 'inline-preview-reset-size',
  moveTableCellSelectionUp = 'move-table-cell-selection-up',
  moveTableCellSelectionRight = 'move-table-cell-selection-right',
  addDefaultCellStylesToTables = 'add-default-cell-styles-to-tables',
  deleteCurrentTableRow = 'delete-current-table-row',
  deleteTableContents = 'delete-table-contents',
  removeSelectionStatus = 'remove-selection-status',
  moveTableColumnRight = 'move-table-column-right',
  addTableColumnAfter = 'add-table-column-after',
  textLetterSpacingIncrease = 'text-letter-spacing-increase',
  addTableColumnBefore = 'add-table-column-before',
  alignBottom = 'align-bottom',
  moveTableRowDown = 'move-table-row-down',
  moveTableRowUp = 'move-table-row-up',
  printRenderTree = 'print-render-tree',
  setToolKeyboardSelect = 'set-tool-keyboard-select',
  printImageDiagnostics = 'print-image-diagnostics',
  removeVerticalGuides = 'remove-vertical-guides',
  downloadWebglTrace = 'download-webgl-trace',
  unhideAll = 'unhide-all',
  showInspectPanel = 'show-inspect-panel',
  toggleGridFocusView = 'toggle-grid-focus-view',
  textAlignRight = 'text-align-right',
  showDevModePluginsPanel = 'show-dev-mode-plugins-panel',
  toggleRulerUnitCentimeters = 'toggle-ruler-unit-centimeters',
  showDevModeInspectPanel = 'show-dev-mode-inspect-panel',
  showPrototypePanel = 'show-prototype-panel',
  toggleIncludeEverythingInTabOrder = 'toggle-include-everything-in-tab-order',
  swapToRelatedState = 'swap-to-related-state',
  showDesignPanel = 'show-design-panel',
  enterDesignMode = 'enter-design-mode',
  browseAllResourcesModal = 'browse-all-resources-modal',
  openHelp = 'open-help',
  testMultiplayerRejectNotLoggedIn = 'test-multiplayer-reject-not-logged-in',
  testMultiplayerRejectTooOld = 'test-multiplayer-reject-too-old',
  previousArtboardSameZoom = 'previous-artboard-same-zoom',
  nextArtboardSameZoom = 'next-artboard-same-zoom',
  hideSiblingLayers = 'hide-sibling-layers',
  addFillToStyleSelection = 'add-fill-to-style-selection',
  publishChangesToLibrary = 'publish-changes-to-library',
  addStrokeToSelection = 'add-stroke-to-selection',
  dumpUndoHistory = 'dump-undo-history',
  toggleDisplayDirtyRects = 'toggle-display-dirty-rects',
  openPreferencesModal = 'open-preferences-modal',
  setToolWashiTape = 'set-tool-washi-tape',
  pageRename = 'page-rename',
  openReleaseNotes = 'open-release-notes',
  openSupportForum = 'open-support-forum',
  inlinePreviewIframeFocusStateChanged = 'inline-preview-iframe-focus-state-changed',
  gotoLayer = 'goto-layer',
  assignDocumentColorProfileSrgb = 'assign-document-color-profile-srgb',
  regenerateAllInstances = 'regenerate-all-instances',
  inlinePreviewPresentedNodeChanged = 'inline-preview-presented-node-changed',
  inlinePreviewLoaded = 'inline-preview-loaded',
  repairSelectedInstances = 'repair-selected-instances',
  toggleInlineHtmlPreview = 'toggle-inline-html-preview',
  deletePrototypeStartingPoint = 'delete-prototype-starting-point',
  updateInteractionsStateManagementOnPage = 'update-interactions-state-management-on-page',
  setSlidesPresenterView = 'set-slides-presenter-view',
  removeInteractionsOnSelection = 'remove-interactions-on-selection',
  setScrollWheelZoomEnabled = 'set-scroll-wheel-zoom-enabled',
  pagePrevious = 'page-previous',
  toggleRightClickPan = 'toggle-right-click-pan',
  testMultiplayerRejectTooManyConnections = 'test-multiplayer-reject-too-many-connections',
  toggleScrollWheelZoom = 'toggle-scroll-wheel-zoom',
  toggleSnappingToDots = 'toggle-snapping-to-dots',
  placeAllImages = 'place-all-images',
  toggleUseRealmsForPluginDev = 'toggle-use-realms-for-plugin-dev',
  toggleShowMasks = 'toggle-show-masks',
  toggleOutlineModeHiddenLayers = 'toggle-outline-mode-hidden-layers',
  toggleOutlines = 'toggle-outlines',
  toggleDebugMaterializerLogs = 'toggle-debug-materializer-logs',
  toggleDebugLayoutLogs = 'toggle-debug-layout-logs',
  debugIncrementalLoadingAllPages = 'debug-incremental-loading-all-pages',
  toggleDebugPageSyncLogs = 'toggle-debug-page-sync-logs',
  toggleDebugUserSyncLogs = 'toggle-debug-user-sync-logs',
  toggleTsmerConfig = 'toggle-tsmer-config',
  toggleLockedForSelectedNodes = 'toggle-locked-for-selected-nodes',
  togglePerfHud = 'toggle-perf-hud',
  enterLayoutMode = 'enter-layout-mode',
  toggleShowSemanticTagsOnLayerRows = 'toggle-show-semantic-tags-on-layer-rows',
  toggleGrid = 'toggle-grid',
  destroyAllAutoLayout = 'destroy-all-auto-layout',
  toggleRulerUnitInches = 'toggle-ruler-unit-inches',
  setToolShapeWhiteboardSummingJunction = 'set-tool-shape-whiteboard-summing-junction',
  toggleLibrary = 'toggle-library',
  togglePrintMarks = 'toggle-print-marks',
  alignLeft = 'align-left',
  toggleMemoryUsageIndicator = 'toggle-memory-usage-indicator',
  toggleShowImmutableFrameSublayers = 'toggle-show-immutable-frame-sublayers',
  debugInspectLayerFigmaScope = 'debug-inspect-layer-figma-scope',
  textLineHeightDecrease = 'text-line-height-decrease',
  testIndependentLayerAnimation = 'test-independent-layer-animation',
  setToolScale = 'set-tool-scale',
  toggleShowGuids = 'toggle-show-guids',
  toggleIconDetection = 'toggle-icon-detection',
  setToolCodeBlock = 'set-tool-code-block',
  textStyleH2 = 'text-style-h2',
  openTimer = 'open-timer',
  toggleSectionVisibility = 'toggle-section-visibility',
  setToolJsx = 'set-tool-jsx',
  setToolPatternSourceSelector = 'set-tool-pattern-source-selector',
  changeDocumentColorProfileToDisplayP3 = 'change-document-color-profile-to-display-p3',
  setToolSitesEmbed = 'set-tool-sites-embed',
  roundToPixels = 'round-to-pixels',
  setToolSitesLink = 'set-tool-sites-link',
  setToolSitesResponsiveNodeSet = 'set-tool-sites-responsive-node-set',
  setToolSitesWebpage = 'set-tool-sites-webpage',
  setToolSlidesYoutube = 'set-tool-slides-youtube',
  setToolSlidesAlignmentScale = 'set-tool-slides-alignment-scale',
  setToolSlidesPoll = 'set-tool-slides-poll',
  setToolBrush = 'set-tool-brush',
  setToolMeasure = 'set-tool-measure',
  openMakePrototypeModal = 'open-make-prototype-modal',
  setToolAnnotate = 'set-tool-annotate',
  createTriangle = 'create-triangle',
  toggleViewportOverlayHiding = 'toggle-viewport-overlay-hiding',
  resizeTableColumnDecrease = 'resize-table-column-decrease',
  setScrollWheelZoomDisabled = 'set-scroll-wheel-zoom-disabled',
  setToolSection = 'set-tool-section',
  linkToExistingComponent = 'link-to-existing-component',
  setToolShapeWhiteboardPlatform = 'set-tool-shape-whiteboard-platform',
  convertDocumentColorProfileSrgb = 'convert-document-color-profile-srgb',
  moveTableCellSelectionLeft = 'move-table-cell-selection-left',
  detachInstance = 'detach-instance',
  addTableRowBelow = 'add-table-row-below',
  setRightClickPanEnabled = 'set-right-click-pan-enabled',
  toggleShowComments = 'toggle-show-comments',
  toggleRulerUnitPixels = 'toggle-ruler-unit-pixels',
  setToolShapeWhiteboardParallelogramLeft = 'set-tool-shape-whiteboard-parallelogram-left',
  setToolMindmapTreeNucleus = 'set-tool-mindmap-tree-nucleus',
  afterFirstRender = 'after-first-render',
  setToolShapeWhiteboardArrowRight = 'set-tool-shape-whiteboard-arrow-right',
  setToolShapeWhiteboardArrowLeft = 'set-tool-shape-whiteboard-arrow-left',
  setToolShapeWhiteboardDocumentMultiple = 'set-tool-shape-whiteboard-document-multiple',
  setToolShapeWhiteboardDocumentSingle = 'set-tool-shape-whiteboard-document-single',
  setToolShapeWhiteboardPentagon = 'set-tool-shape-whiteboard-pentagon',
  setToolShapeWhiteboardHexagon = 'set-tool-shape-whiteboard-hexagon',
  setToolShapeWhiteboardShield = 'set-tool-shape-whiteboard-shield',
  stackSelectedNodes = 'stack-selected-nodes',
  setToolShapeWhiteboardEngQueue = 'set-tool-shape-whiteboard-eng-queue',
  enterStagingMode = 'enter-staging-mode',
  openTutorials = 'open-tutorials',
  moveTableColumnLeft = 'move-table-column-left',
  setToolShapeWhiteboardRoundedRectangle = 'set-tool-shape-whiteboard-rounded-rectangle',
  addPrototypeStartingPoint = 'add-prototype-starting-point',
  testNonIndependentLayerAnimation = 'test-non-independent-layer-animation',
  setToolShapeWhiteboardTriangleDown = 'set-tool-shape-whiteboard-triangle-down',
  setToolShapeWhiteboardDiamond = 'set-tool-shape-whiteboard-diamond',
  setToolShapeWhiteboardEllipse = 'set-tool-shape-whiteboard-ellipse',
  setToolShapeWhiteboardSquare = 'set-tool-shape-whiteboard-square',
  setToolStamp = 'set-tool-stamp',
  setToolConnectorStraightNoEndpoints = 'set-tool-connector-straight-no-endpoints',
  setToolConnectorElbowed = 'set-tool-connector-elbowed',
  toggleCanvasSearchDebug = 'toggle-canvas-search-debug',
  setAsPrimaryBreakpoint = 'set-as-primary-breakpoint',
  openLegalSummary = 'open-legal-summary',
  toggleShowAnnotations = 'toggle-show-annotations',
  spotlightMe = 'spotlight-me',
  updateInstanceLayoutVersion = 'update-instance-layout-version',
  setToolComments = 'set-tool-comments',
  selectSameFont = 'select-same-font',
  setToolMultiselect = 'set-tool-multiselect',
  setToolRectangle = 'set-tool-rectangle',
  setToolSlidesEmbed = 'set-tool-slides-embed',
  setToolVectorLasso = 'set-tool-vector-lasso',
  setToolSimplifyVector = 'set-tool-simplify-vector',
  setToolCut = 'set-tool-cut',
  clearTool = 'clear-tool',
  setToolPencil = 'set-tool-pencil',
  gotoRepeaterComponent = 'goto-repeater-component',
  setToolPen = 'set-tool-pen',
  focusLinkPanel = 'focus-link-panel',
  setToolType = 'set-tool-type',
  setToolSlice = 'set-tool-slice',
  alignLeftAsGroup = 'align-left-as-group',
  setToolShapeWhiteboardOctagon = 'set-tool-shape-whiteboard-octagon',
  setToolFrame = 'set-tool-frame',
  setDefaultEmojiSkinTone = 'set-default-emoji-skin-tone',
  moveTableCellSelectionDown = 'move-table-cell-selection-down',
  setToolShapeWhiteboardStar = 'set-tool-shape-whiteboard-star',
  toggleEnableCodegenMcpServer = 'toggle-enable-codegen-mcp-server',
  resetEffects = 'reset-effects',
  toggleSpellCheck = 'toggle-spell-check',
  toggleHangingPunctuationPreference = 'toggle-hanging-punctuation-preference',
  applyTransformModifiers = 'apply-transform-modifiers',
  toggleLeadingTrimPreference = 'toggle-leading-trim-preference',
  keyboardLayoutSpanish = 'keyboard-layout-spanish',
  keyboardLayoutItalian = 'keyboard-layout-italian',
  selectCurrentTableRow = 'select-current-table-row',
  testMultiplayerRejectInvalidPermissions = 'test-multiplayer-reject-invalid-permissions',
  keyboardLayoutSwedish = 'keyboard-layout-swedish',
  keyboardLayoutUkPc = 'keyboard-layout-uk-pc',
  quit = 'quit',
  convertDocumentColorProfileDisplayP3 = 'convert-document-color-profile-display-p3',
  groupSelection = 'group-selection',
  toggleOutlineModeObjectBounds = 'toggle-outline-mode-object-bounds',
  keyboardLayoutHiraganaKana = 'keyboard-layout-hiragana-kana',
  focusModeComponentSetToggle = 'focus-mode-component-set-toggle',
  keyboardLayoutGerman = 'keyboard-layout-german',
  setOpacity9 = 'set-opacity-9',
  adjustRulerGuides = 'adjust-ruler-guides',
  setOpacity7 = 'set-opacity-7',
  renameSelection = 'rename-selection',
  setOpacity2 = 'set-opacity-2',
  setOpacity1 = 'set-opacity-1',
  setToolDefault = 'set-tool-default',
  escape = 'escape',
  setToolOffsetPath = 'set-tool-offset-path',
  showNudgeAmountPicker = 'show-nudge-amount-picker',
  textEditHyperlink = 'text-edit-hyperlink',
  toggleTextSuggestionsPreference = 'toggle-text-suggestions-preference',
  toggleUseNumbersForOpacity = 'toggle-use-numbers-for-opacity',
  copyAsCssRecursive = 'copy-as-css-recursive',
  toggleDropper = 'toggle-dropper',
  toggleAlwaysExpandAnnotations = 'toggle-always-expand-annotations',
  setToolShapeWhiteboardPlus = 'set-tool-shape-whiteboard-plus',
  debugPrintAsTestCode = 'debug-print-as-test-code',
  togglePixelPreview = 'toggle-pixel-preview',
  canvasSearchReplace = 'canvas-search-replace',
  toggleRetinaMode = 'toggle-retina-mode',
  canvasSearchNext = 'canvas-search-next',
  discardAllImages = 'discard-all-images',
  focusModeExit = 'focus-mode-exit',
  focusMode = 'focus-mode',
  toggleTextInputShortcutBlocking = 'toggle-text-input-shortcut-blocking',
  multiEditText = 'multi-edit-text',
  enter = 'enter',
  toggleInlinePreview = 'toggle-inline-preview',
  togglePreferences = 'toggle-preferences',
  save = 'save',
  toggleMenu = 'toggle-menu',
  deselectAll = 'deselect-all',
  backupAllOverrides = 'backup-all-overrides',
  breakVectorNetworkIntoPaths = 'break-vector-network-into-paths',
  setToolShapeWhiteboardPredefinedProcess = 'set-tool-shape-whiteboard-predefined-process',
  smoothJoinSelection = 'smooth-join-selection',
  keyboardLayoutSpanishLatam = 'keyboard-layout-spanish-latam',
  joinSelection = 'join-selection',
  setToolShapeWhiteboardEngFile = 'set-tool-shape-whiteboard-eng-file',
  unlockSelectedNodes = 'unlock-selected-nodes',
  lockSelectedNodes = 'lock-selected-nodes',
  showRotationOrigin = 'show-rotation-origin',
  hideSelectedNodes = 'hide-selected-nodes',
  zoomToFit = 'zoom-to-fit',
  zoomReset = 'zoom-reset',
  toggleEditMode = 'toggle-edit-mode',
  setToolVarWidthPoint = 'set-tool-var-width-point',
  toggleShowPropertyLabels = 'toggle-show-property-labels',
  keyboardLayoutUkMac = 'keyboard-layout-uk-mac',
  toggleMultiplayerCursors = 'toggle-multiplayer-cursors',
  republishSelectedComponents = 'republish-selected-components',
  keyboardLayoutPortuguese = 'keyboard-layout-portuguese',
  toggleCopyRenaming = 'toggle-copy-renaming',
  toggleLayerHover = 'toggle-layer-hover',
  disablePinchZoomFix = 'disable-pinch-zoom-fix',
  setToolHighlighter = 'set-tool-highlighter',
  resizeTableRowDecreaseLarge = 'resize-table-row-decrease-large',
  toggleSnappingToObjects = 'toggle-snapping-to-objects',
  keyboardLayoutFinnish = 'keyboard-layout-finnish',
  toggleSnappingToPixels = 'toggle-snapping-to-pixels',
  setToolHand = 'set-tool-hand',
  toggleSidebar = 'toggle-sidebar',
  componentInsert = 'component-insert',
  togglePublish = 'toggle-publish',
  toggleLayers = 'toggle-layers',
  addConnectorText = 'add-connector-text',
  zoomToSelection = 'zoom-to-selection',
  devHandoffFocusNext = 'dev-handoff-focus-next',
  createComment = 'create-comment',
  packVertical = 'pack-vertical',
  enterPreviewMode = 'enter-preview-mode',
  copyAsPng = 'copy-as-png',
  removeImageOverlay = 'remove-image-overlay',
  addImageOverlay = 'add-image-overlay',
  assignDocumentColorProfileDisplayP3 = 'assign-document-color-profile-display-p3',
  distributeBottom = 'distribute-bottom',
  unlockAll = 'unlock-all',
  cropImage = 'crop-image',
  regenerateSelectedInstances = 'regenerate-selected-instances',
  distributeLeft = 'distribute-left',
  textDirectionalityMenu = 'text-directionality-menu',
  toggleProgressiveBlurEditMode = 'toggle-progressive-blur-edit-mode',
  toggleGradientEditMode = 'toggle-gradient-edit-mode',
  focusPreviousAsset = 'focus-previous-asset',
  zoomIn = 'zoom-in',
  deleteCurrentTableColumn = 'delete-current-table-column',
  requestEditModeViaToolbar = 'request-edit-mode-via-toolbar',
  requestEditMode = 'request-edit-mode',
  keyboardLayoutFrenchAzerty = 'keyboard-layout-french-azerty',
  enterInspectMode = 'enter-inspect-mode',
  createDiamond = 'create-diamond',
  textFontSizeIncrease = 'text-font-size-increase',
  enterBranchingMode = 'enter-branching-mode',
  textFontSizeDecrease = 'text-font-size-decrease',
  selectSimilar = 'select-similar',
  replaceSelectedText = 'replace-selected-text',
  toggleUndoRedoDebug = 'toggle-undo-redo-debug',
  textLineHeightIncrease = 'text-line-height-increase',
  enterLibraryMode = 'enter-library-mode',
  setOpacity6 = 'set-opacity-6',
  alignTop = 'align-top',
  textStyleNormal = 'text-style-normal',
  textAlignCenter = 'text-align-center',
  dumpPendingRegisters = 'dump-pending-registers',
  textRelayout = 'text-relayout',
  extendTableCellSelectionRight = 'extend-table-cell-selection-right',
  resetVisible = 'reset-visible',
  textTitleCase = 'text-title-case',
  textLowerCase = 'text-lower-case',
  textUpperCase = 'text-upper-case',
  debugToggleShowVectorNetworkLabels = 'debug-toggle-show-vector-network-labels',
  textCaseMenu = 'text-case-menu',
  setToolShapeWhiteboardEngDatabase = 'set-tool-shape-whiteboard-eng-database',
  keyboardLayoutReset = 'keyboard-layout-reset',
  textSetDirectionalityRtlQa = 'text-set-directionality-rtl-qa',
  textSetDirectionalityLtrQa = 'text-set-directionality-ltr-qa',
  enterHistoryMode = 'enter-history-mode',
  textSetDirectionalityLtr = 'text-set-directionality-ltr',
  backToFiles = 'back-to-files',
  textUpgradeExplicitLayoutVersion = 'text-upgrade-explicit-layout-version',
  exportSelectionOrCurrentPage = 'export-selection-or-current-page',
  copyLayerName = 'copy-layer-name',
  textDeleteSelectionOrNextCharacter = 'text-delete-selection-or-next-character',
  followPresenter = 'follow-presenter',
  textDeleteSelectionOrEnd = 'text-delete-selection-or-end',
  toggleAccessibilityDomDebug = 'toggle-accessibility-dom-debug',
  reportNoVideoUploadPermissions = 'report-no-video-upload-permissions',
  createSection = 'create-section',
  toggleAnimateInfo = 'toggle-animate-info',
  textToggleStrikethrough = 'text-toggle-strikethrough',
  textToggleUnderline = 'text-toggle-underline',
  togglePrototypingInfo = 'toggle-prototyping-info',
  simplifySelectedInstancePanels = 'simplify-selected-instance-panels',
  textToggleItalic = 'text-toggle-italic',
  distributeHorizontalCenter = 'distribute-horizontal-center',
  setToolShapeWhiteboardInternalStorage = 'set-tool-shape-whiteboard-internal-storage',
  deleteSelection = 'delete-selection',
  moveTextSelectionEnd = 'move-text-selection-end',
  toggleStickyTools = 'toggle-sticky-tools',
  distributeVerticalCenter = 'distribute-vertical-center',
  collapseLayers = 'collapse-layers',
  selectAllText = 'select-all-text',
  distributeTop = 'distribute-top',
  setToolLasso = 'set-tool-lasso',
  pluginsRunLast = 'plugins-run-last',
  startChat = 'start-chat',
  swapToRelatedSymbol = 'swap-to-related-symbol',
  restoreDesignInPlaceFromCode = 'restore-design-in-place-from-code',
  packHorizontal = 'pack-horizontal',
  resetText = 'reset-text',
  textOriginalCase = 'text-original-case',
  detachAllInstances = 'detach-all-instances',
  arrangeAsList = 'arrange-as-list',
  enterDrawMode = 'enter-draw-mode',
  arrangeAsGrid = 'arrange-as-grid',
  replaceSelectedFrameWithSection = 'replace-selected-frame-with-section',
  pasteHere = 'paste-here',
  devHandoffFocusPrevious = 'dev-handoff-focus-previous',
  debugToggleSlidesMode = 'debug-toggle-slides-mode',
  selectCurrentTableCell = 'select-current-table-cell',
  resetSymbol = 'reset-symbol',
  findCodebaseSuggestions = 'find-codebase-suggestions',
  setToolStar = 'set-tool-star',
  alignHorizontalCenterAsGroup = 'align-horizontal-center-as-group',
  removeHorizontalGuides = 'remove-horizontal-guides',
  markIncomplete = 'mark-incomplete',
  alignVerticalCenterAsGroup = 'align-vertical-center-as-group',
  exportNodeDirectCooper = 'export-node-direct-cooper',
  selectPreviousNode = 'select-previous-node',
  textStyleTitle = 'text-style-title',
  copyToFigmaSlides = 'copy-to-figma-slides',
  alignTopAsGroup = 'align-top-as-group',
  copyProperties = 'copy-properties',
  alignVerticalCenter = 'align-vertical-center',
  createRoundedRectangle = 'create-rounded-rectangle',
  addSkewModifierToSelection = 'add-skew-modifier-to-selection',
  testIndependentLayerAnimationOpacity = 'test-independent-layer-animation-opacity',
  addLinearRepeatToSelection = 'add-linear-repeat-to-selection',
  toggleUseOldOutlineShortcuts = 'toggle-use-old-outline-shortcuts',
  tidyUp = 'tidy-up',
  canvasSearchPrev = 'canvas-search-prev',
  makeVideo = 'make-video',
  liveBooleanXor = 'live-boolean-xor',
  textToggleOrderedList = 'text-toggle-ordered-list',
  enterSlidesMode = 'enter-slides-mode',
  textAdjustMenu = 'text-adjust-menu',
  liveBooleanIntersect = 'live-boolean-intersect',
  toggleOverlayUiRendering = 'toggle-overlay-ui-rendering',
  copyText = 'copy-text',
  createArc = 'create-arc',
  setSelectionHugVertical = 'set-selection-hug-vertical',
  setSelectionHugHorizontal = 'set-selection-hug-horizontal',
  setSelectionFillHorizontal = 'set-selection-fill-horizontal',
  createCodeLayerFromDesign = 'create-code-layer-from-design',
  unstackSelection = 'unstack-selection',
  resetName = 'reset-name',
  migratePatternSpacing = 'migrate-pattern-spacing',
  createStretchBrush = 'create-stretch-brush',
  maskSelection = 'mask-selection',
  sendBackward = 'send-backward',
  inspectFragment = 'inspect-fragment',
  liveBooleanUnion = 'live-boolean-union',
  findInspiration = 'find-inspiration',
  regenerateComponentProps = 'regenerate-component-props',
  textSetDirectionalityRtl = 'text-set-directionality-rtl',
  textClearListFormatting = 'text-clear-list-formatting',
  setToolEraser = 'set-tool-eraser',
  keyboardLayoutKorean = 'keyboard-layout-korean',
  findSymbol = 'find-symbol',
  createBreakpoint = 'create-breakpoint',
  setToolConnectorStraight = 'set-tool-connector-straight',
  setToolPaintBucket = 'set-tool-paint-bucket',
  setToolArrow = 'set-tool-arrow',
  createScatterBrush = 'create-scatter-brush',
  createSectionFromSelection = 'create-section-from-selection',
  copyAsSvg = 'copy-as-svg',
  createSlide = 'create-slide',
  gridSelection = 'grid-selection',
  forcePublishStateGroup = 'force-publish-state-group',
  upscaleImage = 'upscale-image',
  createEllipse = 'create-ellipse',
  resizeToFit = 'resize-to-fit',
  debugSelection = 'debug-selection',
  toggleCursorHighFiveWiggle = 'toggle-cursor-high-five-wiggle',
  debugToggleDontMergeStrokeOutlines = 'debug-toggle-dont-merge-stroke-outlines',
  setToolCodeComponent = 'set-tool-code-component',
  ungroupSelection = 'ungroup-selection',
  frameSelection = 'frame-selection',
  aspectRatioLock = 'aspect-ratio-lock',
  setAsDefaultResponsiveSet = 'set-as-default-responsive-set',
  afterUndoRedoCommit = 'after-undo-redo-commit',
  distributeVerticalSpacing = 'distribute-vertical-spacing',
  makeEditsDebug = 'make-edits-debug',
  presentSitesFullPreview = 'present-sites-full-preview',
  setToolSlidesFacepile = 'set-tool-slides-facepile',
  selectSameStyle = 'select-same-style',
  selectSameEffect = 'select-same-effect',
  selectSameText = 'select-same-text',
  toggleBold = 'toggle-bold',
  selectSameStroke = 'select-same-stroke',
  resetTextStyle = 'reset-text-style',
  toggleAnnotations = 'toggle-annotations',
  toggleDisplayCpuTimerTree = 'toggle-display-cpu-timer-tree',
  setToolShapeWhiteboardChevron = 'set-tool-shape-whiteboard-chevron',
  paste = 'paste',
  swapFillAndStroke = 'swap-fill-and-stroke',
  setToolEllipse = 'set-tool-ellipse',
  setOpacity3 = 'set-opacity-3',
  setToolLine = 'set-tool-line',
  sendToBack = 'send-to-back',
  removeStroke = 'remove-stroke',
  toggleShowFeatureFlagBisector = 'toggle-show-feature-flag-bisector',
  selectAll = 'select-all',
  removeFill = 'remove-fill',
  addAnnotation = 'add-annotation',
  debugToggleShowCanvasAxis = 'debug-toggle-show-canvas-axis',
  setToolShapeWhiteboardTriangleUp = 'set-tool-shape-whiteboard-triangle-up',
  flattenSelection = 'flatten-selection',
  convertToRaster = 'convert-to-raster',
  keyboardLayoutUsQwerty = 'keyboard-layout-us-qwerty',
  repairBreakpointMultiedit = 'repair-breakpoint-multiedit',
  addVariant = 'add-variant',
  bringForward = 'bring-forward',
  place = 'place',
  textUpgradeToBidi = 'text-upgrade-to-bidi',
  regenerateFileGeometry = 'regenerate-file-geometry',
  bringToFront = 'bring-to-front',
  leaveEditMode = 'leave-edit-mode',
  textStyleH3 = 'text-style-h3',
  flipVertical = 'flip-vertical',
  toggleGoogleFonts = 'toggle-google-fonts',
  pushChangesToMain = 'push-changes-to-main',
  simulateBackToFiles = 'simulate-back-to-files',
  setToolDefaultDevHandoff = 'set-tool-default-dev-handoff',
  enterSlidesDesignMode = 'enter-slides-design-mode',
  textToggleUnorderedList = 'text-toggle-unordered-list',
  setSelectionCompletedStatus = 'set-selection-completed-status',
  quickCreate = 'quick-create',
  duplicate = 'duplicate',
  removeOrphanedVariables = 'remove-orphaned-variables',
  alignRightAsGroup = 'align-right-as-group',
  removeDetachedSymbolId = 'remove-detached-symbol-id',
  toggleFrameClipping = 'toggle-frame-clipping',
  textAlignTop = 'text-align-top',
  repairCorruptOverrideKeysForSelected = 'repair-corrupt-override-keys-for-selected',
  cut = 'cut',
  toggleFrameOrientation = 'toggle-frame-orientation',
  togglePressureSensitivity = 'toggle-pressure-sensitivity',
  createState = 'create-state',
  openAccountSettings = 'open-account-settings',
  pruneDerivedData = 'prune-derived-data',
  toggleShownForSelectedNodes = 'toggle-shown-for-selected-nodes',
  reflowImmutableFrames = 'reflow-immutable-frames',
  openFplDebug = 'open-fpl-debug',
  moveTextSelectionForward = 'move-text-selection-forward',
  toggleShowSlices = 'toggle-show-slices',
  saveAs = 'save-as',
  restoreSoftDeletedSelection = 'restore-soft-deleted-selection',
  toggleDisplayPixelHeatMap = 'toggle-display-pixel-heat-map',
  resetPrototypeInteractions = 'reset-prototype-interactions',
  pruneInvalidComponentPropRefs = 'prune-invalid-component-prop-refs',
  selectBrokenFixedScrollingNodes = 'select-broken-fixed-scrolling-nodes',
  rulerUnitMenu = 'ruler-unit-menu',
  selectNextNode = 'select-next-node',
  republishAutoLayoutComponents = 'republish-auto-layout-components',
  assistantChat = 'assistant-chat',
  calculateDeletedComponentsPublishedVersion = 'calculate-deleted-components-published-version',
  setToolSitesResponsiveSet = 'set-tool-sites-responsive-set',
  alignHorizontalCenter = 'align-horizontal-center',
  relinkInstancesToLocalComponent = 'relink-instances-to-local-component',
  testIndependentLayerAnimationEased = 'test-independent-layer-animation-eased',
  removeAnnotations = 'remove-annotations',
  selectPreviousSibling = 'select-previous-sibling',
  addFillToSelection = 'add-fill-to-selection',
  findSharedInstancesNeedRelinking = 'find-shared-instances-need-relinking',
  resetOverlay = 'reset-overlay',
  resetVariableModes = 'reset-variable-modes',
  selectSameInstance = 'select-same-instance',
  moveTextSelectionStart = 'move-text-selection-start',
  reresolveVariableReferences = 'reresolve-variable-references',
  toggleKeyboardZoomToSelection = 'toggle-keyboard-zoom-to-selection',
  repairVariableModeValues = 'repair-variable-mode-values',
  pruneOrphanedSlotContent = 'prune-orphaned-slot-content',
  keyboardLayoutNorwegian = 'keyboard-layout-norwegian',
  debugToggleFigmaScope = 'debug-toggle-figma-scope',
  toggleInvertZoom = 'toggle-invert-zoom',
  repairStateGroupVersions = 'repair-state-group-versions',
  detachDeletedStyles = 'detach-deleted-styles',
  copyPasteMenu = 'copy-paste-menu',
  textIndentList = 'text-indent-list',
  pageMoveToMenu = 'page-move-to-menu',
  undo = 'undo',
  selectNode = 'select-node',
  toggleVariables = 'toggle-variables',
  regenerateMissingThumbnails = 'regenerate-missing-thumbnails',
  runSetResponsiveSettings = 'run-set-responsive-settings',
  liveBooleanSubtract = 'live-boolean-subtract',
  toggleFlipDuringResize = 'toggle-flip-during-resize',
  swapNodes = 'swap-nodes',
  generateImage = 'generate-image',
  quickCreateDiagramSibling = 'quick-create-diagram-sibling',
  emptySlotContents = 'empty-slot-contents',
  cooperMakeBrandTemplates = 'cooper-make-brand-templates',
  copy = 'copy',
  keyboardLayoutDvorak = 'keyboard-layout-dvorak',
  convertToSlot = 'convert-to-slot',
  toggleHelpWidget = 'toggle-help-widget',
  setRightClickPanDisabled = 'set-right-click-pan-disabled',
  canvasSearchExit = 'canvas-search-exit',
  detachDeletedVariables = 'detach-deleted-variables',
  similarIncludesMatching = 'similar-includes-matching',
  toggleSimilarHighlights = 'toggle-similar-highlights',
  viewWidgetDetails = 'view-widget-details',
  insertInteractiveElementIntoActiveSlide = 'insert-interactive-element-into-active-slide',
  createTemplate = 'create-template',
  exportSelectedExportablesDirect = 'export-selected-exportables-direct',
  detachLockedTemplate = 'detach-locked-template',
  createTemplatesFromRow = 'create-templates-from-row',
  setToolShapeBuilder = 'set-tool-shape-builder',
  textBoldDecrease = 'text-bold-decrease',
  createStateGroup = 'create-state-group',
  toggleDebugDocSyncLogs = 'toggle-debug-doc-sync-logs',
  setDefaultStyle = 'set-default-style',
  setToolConnectorCurved = 'set-tool-connector-curved',
  selectAllWidgets = 'select-all-widgets',
  moveTextSelectionBackward = 'move-text-selection-backward',
  aspectRatioUnlock = 'aspect-ratio-unlock',
  textAlignBottom = 'text-align-bottom',
  setToolShapeWhiteboardTrapezoid = 'set-tool-shape-whiteboard-trapezoid',
  keyboardLayoutChinese = 'keyboard-layout-chinese',
  setSitesFullPreview = 'set-sites-full-preview',
  copyAsAndroid = 'copy-as-android',
  toggleRulers = 'toggle-rulers',
  repairMissingOverrideKeys = 'repair-missing-override-keys',
  setToolSlideNumber = 'set-tool-slide-number',
  restoreSymbolOrStateGroup = 'restore-symbol-or-state-group',
  alignBottomAsGroup = 'align-bottom-as-group',
  setToolShapeWhiteboardParallelogramRight = 'set-tool-shape-whiteboard-parallelogram-right',
  createSymbol = 'create-symbol',
  toggleRecordingInteractions = 'toggle-recording-interactions',
  createMultipleSymbols = 'create-multiple-symbols',
  setOpacity8 = 'set-opacity-8',
  extendTextSelectionStart = 'extend-text-selection-start',
  insertLotsOfText = 'insert-lots-of-text',
  copyAsCode = 'copy-as-code',
  selectChild = 'select-child',
  setToolRegularPolygon = 'set-tool-regular-polygon',
  setToolShapeWhiteboardOr = 'set-tool-shape-whiteboard-or',
  translateText = 'translate-text',
  toggleSmartQuotes = 'toggle-smart-quotes',
  editImage = 'edit-image',
  toggleDisplayExpensiveTiles = 'toggle-display-expensive-tiles',
  resetTransform = 'reset-transform',
  resetExports = 'reset-exports',
  endMagicLink = 'end-magic-link',
  resetSize = 'reset-size',
  rotateImage90Clockwise = 'rotate-image-90-clockwise',
  toggleKeyboardShortcuts = 'toggle-keyboard-shortcuts',
  commit = 'commit',
  resetFill = 'reset-fill',
  convertSlotToFrame = 'convert-slot-to-frame',
  redrawCanvas = 'redraw-canvas',
  textForcedSmallCaps = 'text-forced-small-caps',
  createStateGroupRow = 'create-state-group-row',
  setToolSticky = 'set-tool-sticky',
  publishSelection = 'publish-selection',
  createMultipleSymbolsAndStateGroup = 'create-multiple-symbols-and-state-group',
  purgeAllMemory = 'purge-all-memory',
  toggleShowArtboardOutlines = 'toggle-show-artboard-outlines',
  setToolTable = 'set-tool-table',
  toggleSnappingToGeometry = 'toggle-snapping-to-geometry',
  toggleShowQuickCommandRankDebug = 'toggle-show-quick-command-rank-debug',
  clearComponentPropsDataForSelection = 'clear-component-props-data-for-selection',
  selectInverse = 'select-inverse',
  pageNext = 'page-next',
  selectMatching = 'select-matching',
  showSelectedNodes = 'show-selected-nodes',
  extendTextSelectionBackward = 'extend-text-selection-backward',
  repairDuplicateSubscribedAssets = 'repair-duplicate-subscribed-assets',
  pageCopyLink = 'page-copy-link',
  extendTextSelectionEnd = 'extend-text-selection-end',
  debugMagicLinkAiModel = 'debug-magic-link-ai-model',
  combineSelectedVideoStack = 'combine-selected-video-stack',
  resetLayer = 'reset-layer',
  resizeTableColumnIncreaseLarge = 'resize-table-column-increase-large',
  enterFocusView = 'enter-focus-view',
  debugToggleDiagramLayoutPaused = 'debug-toggle-diagram-layout-paused',
  textRemoveDecoration = 'text-remove-decoration',
  toggleVersionHistory = 'toggle-version-history',
  outlineStroke = 'outline-stroke',
  selectAllSlides = 'select-all-slides',
  createSticky = 'create-sticky',
  setToolDefaultFigjam = 'set-tool-default-figjam',
  resetStroke = 'reset-stroke',
  deleteAndHealSelection = 'delete-and-heal-selection',
  disableAllUnframedMasks = 'disable-all-unframed-masks',
  openShapesSidebar = 'open-shapes-sidebar',
  pasteToReplace = 'paste-to-replace',
  toggleResourceUse = 'toggle-resource-use',
  removeGuide = 'remove-guide',
  toggleHangingListPreference = 'toggle-hanging-list-preference',
  setOpacity5 = 'set-opacity-5',
  copyAsIos = 'copy-as-ios',
  canvasSearch = 'canvas-search',
  togglePenToolAvoidSingleHandles = 'toggle-pen-tool-avoid-single-handles',
  pageDelete = 'page-delete',
  restoreAutolayoutPosition = 'restore-autolayout-position',
  selectNextSibling = 'select-next-sibling',
  debugPrintVectorNetworkAsTestCode = 'debug-print-vector-network-as-test-code',
  zoomOut = 'zoom-out',
  removeStatusInFocusView = 'remove-status-in-focus-view',
  selectSameFill = 'select-same-fill',
  editMakeFromDesign = 'edit-make-from-design',
  textLetterSpacingDecrease = 'text-letter-spacing-decrease',
  pasteOverSelection = 'paste-over-selection',
  pageMoveTo = 'page-move-to',
  toggleRasterEditMode = 'toggle-raster-edit-mode',
  redoSpellChecking = 'redo-spell-checking',
  sendSelectionToBuzzFromDesign = 'send-selection-to-buzz-from-design',
  createSavepoint = 'create-savepoint',
  batchPageRename = 'batch-page-rename',
  textAlignLeft = 'text-align-left',
  firstDraftMakeKitDebug = 'first-draft-make-kit-debug',
  startMagicLink = 'start-magic-link',
  trackPageRename = 'track-page-rename',
  selectSameVariant = 'select-same-variant',
  pageDuplicate = 'page-duplicate',
  addTransformModifierToSelection = 'add-transform-modifier-to-selection',
  restoreSoftDeletedVariableSets = 'restore-soft-deleted-variable-sets',
  toggleCtrlClickContextMenu = 'toggle-ctrl-click-context-menu',
  convertTableToStickyGrid = 'convert-table-to-sticky-grid',
  textAlignMiddle = 'text-align-middle',
  stackSelection = 'stack-selection',
  exportSlidesToPdf = 'export-slides-to-pdf',
  createTextNode = 'create-text-node',
  import = 'import',
  textDedentList = 'text-dedent-list',
  nextArtboard = 'next-artboard',
  distributeRight = 'distribute-right',
  sendToMakeFromDesign = 'send-to-make-from-design',
  exportAllExportables = 'export-all-exportables',
  exportAssetsHandoff = 'export-assets-handoff',
  setToolShapeWhiteboardSpeechBubble = 'set-tool-shape-whiteboard-speech-bubble',
  textAlignJustified = 'text-align-justified',
  exportSelectedExportables = 'export-selected-exportables',
  textBoldIncrease = 'text-bold-increase',
  setToolShapeWhiteboardEngFolder = 'set-tool-shape-whiteboard-eng-folder',
  firstDraftFineTune = 'first-draft-fine-tune',
  removeResponsiveTextStyleVariants = 'remove-responsive-text-style-variants',
  pageNew = 'page-new',
  openFontSettings = 'open-font-settings',
  distributeHorizontalSpacing = 'distribute-horizontal-spacing',
  debugIncrementalLoadingCurrentOnly = 'debug-incremental-loading-current-only',
  redo = 'redo',
  importFromCsv = 'import-from-csv',
  mainComponent = 'main-component',
  previousArtboard = 'previous-artboard',
  addVariantToTemplateSet = 'add-variant-to-template-set',
  pageMoveToNewFile = 'page-move-to-new-file',
  createBrushMenu = 'create-brush-menu',
  unskipSlide = 'unskip-slide',
  textStyleH1 = 'text-style-h1',
  extendTableCellSelectionLeft = 'extend-table-cell-selection-left',
  togglePerfModeMedium = 'toggle-perf-mode-medium',
  exitFocusView = 'exit-focus-view',
  rotate180 = 'rotate-180',
  resetFauxverride = 'reset-fauxverride',
  copyAsMenu = 'copy-as-menu',
  selectCurrentTableColumn = 'select-current-table-column',
  removeInteractionsOnPage = 'remove-interactions-on-page',
  exportSlidesTo = 'export-slides-to',
  toggleShownLayoutGrids = 'toggle-shown-layout-grids',
  unbindCmsSelection = 'unbind-cms-selection',
  rotate90Clockwise = 'rotate-90-clockwise',
  toggleFakeMpActivity = 'toggle-fake-mp-activity',
  openShortcuts = 'open-shortcuts',
  selectNodeMenu = 'select-node-menu',
  migrateEffectRepeatsToTransforms = 'migrate-effect-repeats-to-transforms',
  firstDraftMakeKit = 'first-draft-make-kit',
  publishTemplate = 'publish-template',
  textAlignMenu = 'text-align-menu',
  rotate90Counterclockwise = 'rotate-90-counterclockwise',
  alignRight = 'align-right',
  pasteProperties = 'paste-properties',
  createWebpage = 'create-webpage',
  none = 'none',
  setSelectionFillVertical = 'set-selection-fill-vertical',
  exportBuzzAssets = 'export-buzz-assets',
  exportSelectedVideo = 'export-selected-video',
  createRow = 'create-row',
  selectParent = 'select-parent',
  runMultiStackAutoLayout = 'run-multi-stack-auto-layout',
  pasteWidgetsAsSublayers = 'paste-widgets-as-sublayers',
  makeEdits = 'make-edits',
  extendTextSelectionForward = 'extend-text-selection-forward',
}

export type ActionEnabledProperties = {
  [key in `actionEnabled__${Actions}`]: boolean;
}

export interface AppModel extends ActionEnabledProperties {
  isInitialized: boolean
  hasMissingFonts: boolean
  activeUserAction: number
  currentTool: number
  currentStampToolName: string
  activeCanvasEditModeType: number
  showUi: boolean
  showKeyboardShortcuts: boolean
  topLevelMode: number
  urlNodeId: string
  showArtboardOutline: boolean
  useRealmsForPluginDev: boolean
  showComments: boolean
  currentSelectedGradientStop: CurrentSelectedGradientStop
  currentSelectedProperty: CurrentSelectedProperty
  isUserPresent: boolean
  showTogglePrototypeModeButton: boolean
  forcePublishFlattened: boolean
  prototypeCanvasUiVisible: boolean
  showTooltips: boolean
  prototypeBackgroundPickerOpen: boolean
  pastableStyleCount: number
  statePropertyToFocus: string
  hoveredNode: string
  multiplayerSessionState: number
  isReadOnly: boolean
  isSceneReadOnly: boolean
  hyperlinkLocation: any
  onCanvasNameEditorInfo: OnCanvasNameEditorInfo
  votingSessionInfo: VotingSessionInfo
  loadingEmbeds: any[]
  temporarilyExpandedInstanceLayers: any[]
  keyboardShortcuts: KeyboardShortcuts
  selectedInteractions: any[]
  hoveredInteractions: any[]
  currentPage: string
  pagesList: PagesList[]
  devHandoffCodeLanguage: DevHandoffCodeLanguage
  devHandoffPreferences: DevHandoffPreferences
  branchingSceneState: number
  lastBranchingStagingAction: number
  themePreference: string
  sceneGeneration: number
  spellCheckSuggestions: any
  onCanvasPillInfo: any[]
  activeTextReviewPlugin: any
  hotReloadPluginDev: boolean
  useLocalRelatedLinkPlugin: boolean
}

interface CurrentSelectedProperty {
  type: number
  indices: any[]
}

interface CurrentSelectedGradientStop {
  index: number
  type: number
}
interface DevHandoffPreferences {
  codeExtensionPreferences: CodeExtensionPreferences
}

interface DevHandoffCodeLanguage {
  pluginLanguage: string
  id: string
  type: string
}
interface Livebooleanxor {
  text: string
  originalText: string
}

interface VotingSessionInfo {
  sessionId: string
  votingStage: number
  userVoteLimit: number
  votedNodes: any[]
  userIdToVoteStampIds: UserIdToVoteStampIds
}

export interface KeyboardShortcuts {
  'live-boolean-xor': Livebooleanxor[]
  'live-boolean-intersect': Livebooleanxor[]
  'live-boolean-subtract': Livebooleanxor[]
  'live-boolean-union': Livebooleanxor[]
  'select-matching': Livebooleanxor[]
  'set-tool-measure': Livebooleanxor[]
  'set-tool-comments': Livebooleanxor[]
  'set-tool-default': Livebooleanxor[]
  'set-tool-type': Livebooleanxor[]
  'set-tool-ellipse': Livebooleanxor[]
  'set-tool-pen': Livebooleanxor[]
  'toggle-buzz-tool-mode': Livebooleanxor[]
  'show-prototype-panel': Livebooleanxor[]
  'distribute-vertical-spacing': Livebooleanxor[]
  'tidy-up': Livebooleanxor[]
  'align-vertical-center': Livebooleanxor[]
  'debug-selection': Livebooleanxor[]
  'align-bottom': Livebooleanxor[]
  'text-bold-increase': Livebooleanxor[]
  'text-line-height-increase': Livebooleanxor[]
  'set-tool-arrow': Livebooleanxor[]
  'text-line-height-decrease': Livebooleanxor[]
  'align-top': Livebooleanxor[]
  'text-letter-spacing-increase': Livebooleanxor[]
  'text-letter-spacing-decrease': Livebooleanxor[]
  'text-toggle-ordered-list': Livebooleanxor[]
  'text-font-size-increase': Livebooleanxor[]
  'text-align-center': Livebooleanxor[]
  'page-next': Livebooleanxor[]
  'next-artboard-same-zoom': Livebooleanxor[]
  'previous-artboard-same-zoom': Livebooleanxor[]
  'next-artboard': Livebooleanxor[]
  'previous-artboard': Livebooleanxor[]
  'toggle-recording-interactions': Livebooleanxor[]
  'start-chat': Livebooleanxor[]
  'toggle-dropper': Livebooleanxor[]
  'toggle-edit-mode': Livebooleanxor[]
  'text-font-size-decrease': Livebooleanxor[]
  'escape': Livebooleanxor[]
  'find-symbol': Livebooleanxor[]
  'detach-instance': Livebooleanxor[]
  'text-align-left': Livebooleanxor[]
  'toggle-pixel-preview': Livebooleanxor[]
  'move-text-selection-end': Livebooleanxor[]
  'toggle-library': Livebooleanxor[]
  'toggle-grid': Livebooleanxor[]
  'set-tool-annotate': Livebooleanxor[]
  'text-toggle-italic': Livebooleanxor[]
  'show-rotation-origin': Livebooleanxor[]
  'select-previous-sibling': Livebooleanxor[]
  'toggle-rulers': Livebooleanxor[]
  'text-toggle-unordered-list': Livebooleanxor[]
  'toggle-locked-for-selected-nodes': Livebooleanxor[]
  'align-right': Livebooleanxor[]
  'toggle-grid-focus-view': Livebooleanxor[]
  'toggle-publish': Livebooleanxor[]
  'set-tool-paint-bucket': Livebooleanxor[]
  'page-previous': Livebooleanxor[]
  'set-opacity-3': Livebooleanxor[]
  'canvas-search-prev': Livebooleanxor[]
  'canvas-search-next': Livebooleanxor[]
  'redo': Livebooleanxor[]
  'text-indent-list': Livebooleanxor[]
  'resize-to-fit': Livebooleanxor[]
  'text-delete-selection-or-next-character': Livebooleanxor[]
  'toggle-layers': Livebooleanxor[]
  'text-delete-selection-or-end': Livebooleanxor[]
  'distribute-horizontal-spacing': Livebooleanxor[]
  'mask-selection': Livebooleanxor[]
  'toggle-prototyping-info': Livebooleanxor[]
  'text-dedent-list': Livebooleanxor[]
  'toggle-shown-for-selected-nodes': Livebooleanxor[]
  'bring-forward': Livebooleanxor[]
  'flatten-selection': Livebooleanxor[]
  'join-selection': Livebooleanxor[]
  'copy-properties': Livebooleanxor[]
  'select-child': Livebooleanxor[]
  'toggle-ui': Livebooleanxor[]
  'select-all': Livebooleanxor[]
  'toggle-show-annotations': Livebooleanxor[]
  'plugins-run-last': Livebooleanxor[]
  'select-parent': Livebooleanxor[]
  'focus-previous-area': Livebooleanxor[]
  'toggle-show-comments': Livebooleanxor[]
  'unlock-all': Livebooleanxor[]
  'extend-text-selection-backward': Livebooleanxor[]
  'set-tool-scale': Livebooleanxor[]
  'toggle-menu': Livebooleanxor[]
  'toggle-snapping-to-pixels': Livebooleanxor[]
  'group-selection': Livebooleanxor[]
  'set-tool-frame': Livebooleanxor[]
  'flip-horizontal': Livebooleanxor[]
  'move-text-selection-forward': Livebooleanxor[]
  'unstack-selection': Livebooleanxor[]
  'extend-text-selection-start': Livebooleanxor[]
  'set-tool-rectangle': Livebooleanxor[]
  'extend-text-selection-end': Livebooleanxor[]
  'toggle-bold': Livebooleanxor[]
  'move-text-selection-backward': Livebooleanxor[]
  'smooth-join-selection': Livebooleanxor[]
  'stack-selection': Livebooleanxor[]
  'undo': Livebooleanxor[]
  'text-align-right': Livebooleanxor[]
  'toggle-outlines': Livebooleanxor[]
  'collapse-layers': Livebooleanxor[]
  'canvas-search': Livebooleanxor[]
  'set-tool-section': Livebooleanxor[]
  'toggle-fake-mp-activity': Livebooleanxor[]
  'component-insert': Livebooleanxor[]
  'send-to-back': Livebooleanxor[]
  'place': Livebooleanxor[]
  'move-text-selection-start': Livebooleanxor[]
  'swap-fill-and-stroke': Livebooleanxor[]
  'ungroup-selection': Livebooleanxor[]
  'set-opacity-7': Livebooleanxor[]
  'remove-stroke': Livebooleanxor[]
  'set-tool-shape-builder': Livebooleanxor[]
  'remove-fill': Livebooleanxor[]
  'paste-properties': Livebooleanxor[]
  'rename-selection': Livebooleanxor[]
  'zoom-out': Livebooleanxor[]
  'flip-vertical': Livebooleanxor[]
  'present-as-prototype': Livebooleanxor[]
  'toggle-shown-layout-grids': Livebooleanxor[]
  'bring-to-front': Livebooleanxor[]
  'select-inverse': Livebooleanxor[]
  'text-bold-decrease': Livebooleanxor[]
  'duplicate-in-place': Livebooleanxor[]
  'toggle-perf-hud': Livebooleanxor[]
  'focus-next-area': Livebooleanxor[]
  'text-edit-hyperlink': Livebooleanxor[]
  'send-backward': Livebooleanxor[]
  'paste-over-selection': Livebooleanxor[]
  'extend-text-selection-forward': Livebooleanxor[]
  'zoom-in': Livebooleanxor[]
  'align-left': Livebooleanxor[]
  'text-align-justified': Livebooleanxor[]
  'set-opacity-2': Livebooleanxor[]
  'set-tool-hand': Livebooleanxor[]
  'open-shortcuts': Livebooleanxor[]
  'set-opacity-4': Livebooleanxor[]
  'set-tool-slice': Livebooleanxor[]
  'create-symbol': Livebooleanxor[]
  'export-buzz-assets': Livebooleanxor[]
  'select-next-sibling': Livebooleanxor[]
  'set-opacity-8': Livebooleanxor[]
  'toggle-preferences': Livebooleanxor[]
  'paste-to-replace': Livebooleanxor[]
  'create-section-from-selection': Livebooleanxor[]
  'outline-stroke': Livebooleanxor[]
  'zoom-to-selection': Livebooleanxor[]
  'create-savepoint': Livebooleanxor[]
  'align-horizontal-center': Livebooleanxor[]
  'toggle-sidebar': Livebooleanxor[]
  'set-opacity-1': Livebooleanxor[]
  'text-toggle-strikethrough': Livebooleanxor[]
  'show-design-panel': Livebooleanxor[]
  'frame-selection': Livebooleanxor[]
  'set-opacity-0': Livebooleanxor[]
  'run-multi-stack-auto-layout': Livebooleanxor[]
  'zoom-to-fit': Livebooleanxor[]
  'text-toggle-underline': Livebooleanxor[]
  'set-tool-line': Livebooleanxor[]
  'set-opacity-5': Livebooleanxor[]
  'set-tool-pencil': Livebooleanxor[]
  'set-opacity-6': Livebooleanxor[]
  'copy-as-png': Livebooleanxor[]
  'toggle-multiplayer-cursors': Livebooleanxor[]
  'zoom-reset': Livebooleanxor[]
  'delete-and-heal-selection': Livebooleanxor[]
  'set-opacity-9': Livebooleanxor[]
  'delete-selection': Livebooleanxor[]
}
export interface SceneGraphSelection {
  [key: string]: boolean
}

export interface SelectedStyleProperties {
  guid: any
  intrinsicLineHeight: number
  leadingTrimEnabled: boolean
}

export interface SelectionPaints {
  paints: SelectionPaint[]
  styles: any[]
  paintsDirectlyOnSingleNode: PaintsDirectlyOnSingleNode[]
  stylesDirectlyOnSingleNode: any[]
  emptyDueToLimitExceeded: boolean
  forceUpdateForUndo: boolean
}
export interface OnCanvasNameEditorInfo {
  mode: number
  x: number
  y: number
  angle: number
  padding: Padding
  margin: Padding
  cornerRadius: number
  fontSize: number
  measurementId: string
  initMeasurementText: string
  isCentered: boolean
  invertTextPosition: boolean
  axis: number
  isTLF: boolean
  initialText: string
  isShownOnLeft: boolean
  shouldOpenDropdown: boolean
  varWidthNodeId: string
  varWidthIndex: number
  varWidthTextDirection: Padding
}
export interface PaintsDirectlyOnSingleNode {
  encodedPaint: string
  paint: FillPaint
  variableScopes: ActiveFileUsers
}
interface UserIdToVoteStampIds { }
interface SelectionPaint {
  encodedPaint: string
  paint: FillPaint
  count: number
  uniqueNodesCount: number
  uniqueNodeIds: string[]
  conflictNodesCount: number
  variableScopes: UserIdToVoteStampIds
  isOnlyDirectlySelected?: boolean
}

export interface FillPaint {
  type: string
  color: Color
  opacity: number
  visible: boolean
  blendMode: string
}

export interface Color {
  r: number
  g: number
  b: number
  a: number
}

export interface SelectionProperties {
  cooperTemplateData: any
  textAutoResize: any
  styleIdForStrokeFill: StyleIDFor
  styleIdForFill: StyleIDFor
  styleIdForEffect: StyleIDFor
  strokeWeight: number
  strokeJoin: string
  strokeCapSize: StrokeCapSize
  strokeBrushGuid: MultiEditGlueID
  strokeAlign: string
  stretchStrokeSettings: StretchStrokeSettings
  dynamicStrokeSettings: DynamicStrokeSettings
  scrollBehavior: string
  cornerRadius: number
  rectangleTopRightCornerRadius: number
  rectangleBottomLeftCornerRadius: number
  proportionsConstrained: boolean
  pluginRelaunchData: any[]
  parameterConsumptionMap: AriaAttributes
  borderTopWeight: number
  opacity: number
  mask: boolean
  dashPattern: any[]
  strokeCap: string
  horizontalConstraint: string
  handleMirroring: string
  maskType: string
  behaviors: ActiveFileUsers
  leadingTrim: string
  fillPaints: FillPaint[]
  exportSettings: any[]
  effects: Effect[]
  stackPositioning: string
  scatterStrokeSettings: ScatterStrokeSettings
  lockMode: string
  isDecorativeImage: boolean
  variableWidthPoints: any[]
  rectangleBottomRightCornerRadius: number
  borderLeftWeight: number
  stackChildPrimaryGrow: number
  borderStrokeWeightsIndependent: boolean
  rectangleTopLeftCornerRadius: number
  stackChildAlignSelf: string
  verticalConstraint: string
  borderBottomWeight: number
  multiEditGlueId: MultiEditGlueID
  blendMode: string
  cornerSmoothing: number
  visible: boolean
  borderRightWeight: number
  rectangleCornerRadiiIndependent: boolean
  variableConsumptionMap: AriaAttributes
  ariaAttributes: AriaAttributes
  locked: boolean
  numSelected: number
  name: string
  isSingleDiagramNodeSelected: boolean
  singleDiagramNodeDirection: number
  isDiagramRootNode: boolean
  isInstanceSublayerSelected: boolean
  isNonEditableInstanceSublayerSelected: boolean
  isInstanceSelected: boolean
  isSlotSelected: boolean
  isSlotDefinitionSelected: boolean
  isCodeInstanceSelected: boolean
  isSectionSelected: boolean
  isWidgetSelected: boolean
  productComponentGUIDBackingInstances: string
  isTopLevelFrameAndValidPrototypeSourceSelected: boolean
  isTableSublayerSelected: boolean
  isBreakpointFrameSelected: boolean
  areOnlySiteWebpagesSelected: boolean
  areOnlyResponsiveNodeSetsSelected: boolean
  containsOnlySpreadEligibleNodes: boolean
  framelikeWithoutFills: boolean
  framelikeWithoutClipping: boolean
  anyNonFrameLikesSelected: boolean
  containsAnyKnockoutShadowEligibleNodes: boolean
  hasVariableWidthStroke: boolean
  isDynamicStrokeSelected: boolean
  isComplexVectorNetworkSelected: boolean
  selectionIncludesCooperFrame: boolean
  isCanvasGridRow: boolean
  stackLayoutSizeOptions: StackLayoutSizeOption[]
  stackHorizontalSize: number
  stackVerticalSize: number
  stackDistributionMode: number
  selectionBounds: Bounds
  selectionRegions: SelectionRegion[]
  selectionResizable: boolean
  numSelectedByType: NumSelectedByType
  canBecomeFrame: boolean
  canBecomeGroup: boolean
  canBecomeSection: boolean
  isSection: boolean
  horizontalConstraintsAreAllFixedSize: boolean
  verticalConstraintsAreAllFixedSize: boolean
  someNodesAreConstraintItems: boolean
  nodesAreAllInsideStacks: boolean
  nodesAreAllStacksOrInStacks: boolean
  nodesAreAllStacksOrText: boolean
  nodesAllAcceptLayoutChanges: boolean
  nodesAreAllNotInStacksOrAbsolutePositioned: boolean
  containsHorizontalStacks: boolean
  containsVerticalStacks: boolean
  containsStacksNeedingAlignmentMigration: boolean
  propertiesPanelShouldShowAddAutoLayout: boolean
  propertiesPanelShouldShowRemoveAutoLayout: boolean
  topRelativeToParent: number
  rightRelativeToParent: number
  bottomRelativeToParent: number
  leftRelativeToParent: number
  centerRelativeToParent: CenterRelativeToParent
  containsSiteWebpages: boolean
  containsSiteBreakpoints: boolean
  primaryBreakpointFrameGuid: string
  containsNodesInWebpages: boolean
  canCopyLinkToSelection: boolean
  symbolGUIDsBackingSelection: ActiveFileUsers
  symbolGUIDsBackingSelectionContainer: ActiveFileUsers
  resettableInstanceOverrides: ResettableInstanceOverrides
  resettableComponentPropAssignments: ActiveFileUsers
  stateGroupSelectionInfo: ProgressBarState
  stateGroupInfoForFocusedNode: ProgressBarState
  prototypeDestinationStateGroupSelectionInfo: ProgressBarState
  componentProps: ActiveFileUsers
  componentPropsForFocusedNode: ActiveFileUsers
  x: number
  y: number
  width: number
  height: number
  aspectRatioLockToggled: boolean
  angle: number
  hasReflection: boolean
  missingFont: boolean
  hasHadRTLText: boolean
  leadingTrimEnabled: boolean
  selectedTextContainsUnderline: boolean
  isHangingPunctuationApplicableToSelection: boolean
  numTextStyleOverrides: number
  textStyleOverrideType: string
  leftEndCap: string
  rightEndCap: string
  miterLimitAngle: number
  dashCap: string
  terminalCap: string
  maxStrokeWeight: number
  borderSharedWeight: number
  borderTopVisible: boolean
  borderRightVisible: boolean
  borderBottomVisible: boolean
  borderLeftVisible: boolean
  dynamicStrokeFrequency: number
  dynamicStrokeWiggle: number
  dynamicStrokeSmoothen: number
  scatterBrushGap: number
  scatterBrushWiggle: number
  scatterBrushAngularJitter: number
  scatterBrushRotation: number
  scatterBrushSizeJitter: number
  numTransitionsOnCurrentPage: number
  showWontScrollWarning: boolean
  hasHorizontallyScrollingParent: boolean
  hasVerticallyScrollingParent: boolean
  allHaveScrollableFrameAsParent: boolean
  isInFixedScrollingTree: boolean
  isInStickyScrollingTree: boolean
  areFontStylesUniformOrOnlyMixedDueToTextStyleOverrides: boolean
  validMixedPropertiesForResponsiveTextStyle: boolean
  selectionIsHyperlink: boolean
  imageHasNoStroke: boolean
  imageAspectRatio: number
  imageOverlayPaint: FillPaint
  directlySubscribedAssetKeys: any[]
  variableConsumptionInfo: VariableConsumptionInfo
  focusNodeVariableConsumptionInfo: ActiveFileUsers
  numVideosSelected: number
  shadow: Shadow[]
  blur: number
  fillsType: string
  textPathStartForward: TextDirectionality
  textLineType: TextDirectionality
  textDirectionality: TextDirectionality
  wholeNodeTextLineType: TextDirectionality
  textContent: string
  textTracking: number
  intrinsicLineHeight: number
  fontFamily: string
  fontStyle: string
  arcStart: any
  arcSweep: any
  arcRadius: any
  gridTrackSizingType: any
  gridTrackSize: number
  gridRowCount: number
  gridColumnCount: number
}

export interface AriaAttributes {
  entries: any[]
}

export interface DynamicStrokeSettings {
  frequency: number
  wiggle: number
  smoothen: number
}

export interface Effect {
  type: string
  offset: CenterRelativeToParent
  radius: number
  visible: boolean
  blendMode: string
  spread: number
  showShadowBehindNode: boolean
  color: Color
}

export interface FillPaint {
  type: string
  opacity: number
  visible: boolean
  blendMode: string
  transform?: { [key: string]: number }
  image?: Image
  imageThumbnail?: Image
  animationFrame?: number
  imageScaleMode?: string
  imageShouldColorManage?: boolean
  rotation?: number
  scale?: number
  originalImageWidth?: number
  originalImageHeight?: number
  thumbHash?: ActiveFileUsers
  altText?: string
  color?: Color
}

export interface Image {
  hash: { [key: string]: number }
  name: string
}

export interface MultiEditGlueID {
  sessionID: number
  localID: number
}

export interface NumSelectedByType {
  ROUNDED_RECTANGLE: number
}

export interface ProgressBarState {
  mode: number
}

export interface ResettableInstanceOverrides {
  selectionOverrides: boolean[]
}

export interface ScatterStrokeSettings {
  gap: number
  wiggle: number
  angularJitter: number
  rotation: number
  sizeJitter: number
}

export interface Bounds {
  x: number
  y: number
  width: number
  height: number
}

export interface SelectionRegion {
  bounds: Bounds
  regionType: number
}

export interface Shadow {
  offset: CenterRelativeToParent
  radius: number
  spread: number
  opacity: number
}

export interface StackLayoutSizeOption {
  size: number
  disabled: boolean
}

export interface StretchStrokeSettings {
  orientation: string
}

export interface StrokeCapSize {
  value: number
  units: string
}

export interface StyleIDFor {
  guid: MultiEditGlueID
}

export interface TextDirectionality {
  __mixed__: boolean
}

export interface VariableConsumptionInfo {
  variableSetToExplicitMode: ActiveFileUsers
  variableSetKeyToMode: ActiveFileUsers
  variableSetKeyToModeIncludingSubtree: ActiveFileUsers
  variableSetToInheritMode: ActiveFileUsers
  variableConsumptionMap: ActiveFileUsers
  variableSetKeyToModeData: any
  variableNotMatchingSetValue: ActiveFileUsers
  variableSetKeyToPageLevelPresetMode: any
  bubbledVariableConsumptionMaps: ActiveFileUsers
}

export interface Multiplayer {
  sessionID: number
  deviceNameFilter: string
  observingSessionID: number
  followerCount: number
  presenterSessionID: any
  sessionNominatedByCurrentUser: any
  sessionsNominatingCurrentUser: any[]
  allUsers: AllUser[]
}

export interface AllUser {
  color: string
  deviceName: string
  userID: string
  imageURL: string
  name: string
  sessionID: number
  sawMouse: boolean
  joinedAtS: number
  activeCodeComponentId: string
  sitesViewState: number
  nodeChatExchanges: any[]
}

export interface MultiplayerEmoji {
  viewportX: number
  viewportY: number
  openedViaHover: boolean
  isChatting: boolean
  imageUrl: any
  type: string
  wheelType: string
}

export interface Song {
  active: boolean
  active_order: number
  album_art: string
  artist: string
  id: string
  title: string
  cuesheet: {
    tracks: any[]
  }
  duration_ms: number
  locatization_key: string
  playback_url: string
  song_id: string
  start_at_ms: number
  updated_at: string
  created_at: string
}
export interface WelcomeMusic {
  music: MusicMusic
  modalState: string
  volume: number
  isMuted: boolean
  activeSongs: Meta[]
  allSongs: Meta[]
  playerInstance: HTMLAudioElement | any
}

export interface SongData {
  error: boolean
  status: number
  meta: Meta[]
  i18n: any
}

export interface Meta {
  id: string
  song_id: string
  title: string
  artist: string
  duration_ms: number
  album_art: string
  playback_url: string
  created_at: Date
  updated_at: Date
  cuesheet: Cuesheet
  active: boolean
  chime_url: string
  active_order: number
  localization_key: string
}

export interface Cuesheet {
  tracks: Track[]
}

export interface Track {
  title: string
  artist: string
  start_time: number
}

export interface MusicMusic {
  musicMessageID: number
  selectedSongID: string
  isPaused: boolean
  timeOrigin: number
  lastReceivedSongTimestampMs: number
  isStopped: boolean
}

export interface OpenFile {
  id: string
  key: string
  _name: string
  teamId: string
  clientMeta: any
  folderId: string
  license: any
  orgBrowsable: any
  parentOrgId: any
  fileRepoId: any
  sourceFileKey: any
  linkAccess: LinkAccess
  hasFileLinkPassword: boolean
  hasProtoLinkPassword: boolean
  updatedAt: Date
  trashedAt: any
  deletedAt: any
  creatorId: string
  createdAt: Date
  sourceCheckpointId: any
  thumbnailGuid: any
  org: any
  currentOrgUser: any
  currentPartialOrgUser: any
  currentTeamUser: CurrentTeamUser
  ownerRole: OwnerRole
  teamLimitedInfo: TeamLimitedInfo
  team: OpenFileTeam
  project: Project
  repo: any
  sourceFile: any
  publishedHubFile: any
  trackTags: any
  votingSessions: any[]
  template: any
  siteMount: any
  name: string
  isAbandonedDraftFile: boolean
  plan: OpenFilePlan
  planPublicInfo: PlanPublicInfo
  currentPlanUser: CurrentPlanUser
  isTeamTemplate: boolean
  isPublishedSite: boolean
  editorType: string
  canDelete: boolean
  canMove: boolean
  canExport: boolean
  canEdit: boolean
  canEditCanvas: boolean
  canEditIgnoreEduGracePeriod: boolean
  canManage: boolean
  canView: boolean
  canAccessDevModeEntryPoint: boolean
  canAccessFullDevMode: boolean
  canRunExtensions: boolean
  isTryFile: boolean
  canPublishTemplate: boolean
  viewerExportRestricted: boolean
  libraryKey: string
  hasEditRole: any
  isFavorited: boolean
  sharedContainerSetting: SharedContainerSetting
}

export interface CurrentPlanUser {
  draftsFolderId: string
  designPaidStatus: string
  whiteboardPaidStatus: string
  seatTypeLicenseTypes: string[]
  designAccountTypeRequest: any
  whiteboardAccountTypeRequest: any
  devModeAccountTypeRequest: any
}

export interface CurrentTeamUser {
  designPaidStatus: string
  whiteboardPaidStatus: string
  designAccountTypeRequest: any
  whiteboardAccountTypeRequest: any
}

export interface OwnerRole {
  userId: string
}

export interface OpenFilePlan {
  id: string
  tier: string
  campfireModelEnabledAt: Date
}

export interface PlanPublicInfo {
  key: Key
  tier: string
}

export interface Key {
  type: string
  parentId: string
}

export interface Project {
  id: string
  orgId: any
  teamId: string
  path: string
  viewOnlyAt: any
  inviteOnlyAt: any
  trashedAt: any
  subscription: any
  team: ProjectTeam
  activeProjectResourceConnections: any[]
  canEdit: boolean
  name: string
  isEditingLockedForUser: boolean
  canCreateCooperFileWithReasons: CanCreateFileWithReasons
  canCreateDesignFileWithReasons: CanCreateFileWithReasons
  canCreateFigjamFileWithReasons: CanCreateFileWithReasons
  canCreateSlidesFileWithReasons: CanCreateFileWithReasons
  canCreateSitesFileWithReasons: CanCreateFileWithReasons
  canCreateFigmakeFileWithReasons: CanCreateFileWithReasons
}

export interface CanCreateFileWithReasons {
  result: boolean
  publicDenyReasons: any[]
}

export interface ProjectTeam {
  canView: boolean
  canEdit: boolean
}

export interface SharedContainerSetting {
  status: string
  data: Data
}

export interface Data {
  autogenPasswordControls: boolean
  webPublishingRequiresPassword: boolean
  aiSetting: string
}

export interface OpenFileTeam {
  id: string
  orgId: any
  deletedAt: any
  gracePeriodEnd: any
  trialPeriodEnd: any
  createdAt: Date
  studentTeamAt: any
  licenseGroupId: any
  workspaceId: any
  orgAccess: any
  studentTeamState: string
  licenseGroup: any
  eduGracePeriod: any | Record<string, any>
  subscription: any
  restrictionsList: string[]
  canEdit: boolean
  canView: boolean
}

export interface TeamLimitedInfo {
  name: string
  imgUrl: any
}

export interface OrgDomains {
  domains: any[]
  isFetching: boolean
  fetchedAt: any
}

export interface OrgSamlConfig {
  config: any
  isFetching: boolean
}

export interface OrgTeams {
  teams: any[]
  status: any
}

export interface Payment {
  error: any
  errorCode: any
  currencyToSwitch: any
  billingPeriod: number
  numDesignEditors: number
  submitPending: boolean
  upgradingNewTeam: boolean
  promo: any
  token: any
  taxes: any
  editorStatusChanges: EditorStatusChanges
  numWhiteboardEditors: number
  figmaEmailTeamUsers: any[]
  currency: any
  vatGstId: any
  regionalVatGstId: any
  legalName: string
  displayName: string
}

export interface EditorStatusChanges {
  downgrade: Grade
  upgrade: Grade
}

export interface Grade {
  design: any[]
  whiteboard: any[]
  slides: any[]
  sites: any[]
  cooper: any[]
  figmake: any[]
}

export interface WelcomePlan {
  plan_id: string
  plan_type: string
  plan_name: string
  is_guest: boolean
  created_at: Date
  has_drafts: boolean
  is_figjam_disabled: boolean
  is_slides_disabled: boolean
  is_sites_disabled: boolean
  is_cooper_disabled: boolean
  is_dev_mode_mcp_disabled: boolean
  is_dev_mode_remote_mcp_disabled: boolean
  is_dev_mode_component_browser_disabled: boolean
  tier: string
  is_figmake_disabled: boolean
  draft_folder_id: string
  is_plan_locked: boolean
}

export interface Prototype {
  showProgressBar: boolean
  showComments: boolean
  showOnlyParticipatingComments: boolean
  showResolvedComments: boolean
  pages: any[]
  currentPageId: any
  backgroundColor: Color
  isReconnecting: boolean
  isFooterVisible: boolean
}

export interface PublicUsers {
  byId: ByID
}

export interface QuickStart {
  insertedTextNodeId: any
}

export interface Realtime {
  subscriptions: { [key: string]: boolean }
}

export interface RecentlyUsed {
  libraryItems: FaceStamps
  widgets: FaceStamps
  plugins: FaceStamps
  templates: FaceStamps
  faceStamps: FaceStamps
  whiteboardTools: FaceStamps
}

export interface FaceStamps {
  design: any[]
  figjam: Figjam[]
  handoff: any[]
  slides: any[]
  cooper: any[]
  fetchedResources?: ActiveFileUsers
}

export interface Figjam {
  id: string
  type: string
  last_added_at_by_user_id: LastAddedAtByUserID
}

export interface LastAddedAtByUserID {
  '1352471826795235809': number
}

export interface Roles {
  byFileKey: ByFileKey
  byRepoId: ActiveFileUsers
  byFolderId: ByFolderID
  byTeamId: ByTeamID
}

export interface ByFileKey {
  '9sAh5erOA2TGF2IvXRIYGN': The9_SAh5ErOa2Tgf2IvXriygn
}

export interface The9_SAh5ErOa2Tgf2IvXriygn {
  '1352471826795235809': The1352471826795235809_Element
}

export interface The1352471826795235809_Element {
  id: string
  created_at: Date
  updated_at: Date
  level: number
  resource_type: string
  resource_id_or_key: string
  user_id: string
  team_id: string
  pending_email: any
  is_shared?: boolean | any
  _internal_only_written_by_backfill?: number
  source?: any
  user?: TeamUserUser
  pending: boolean
  folder_id?: string
  realtime_token?: string
}

export interface ByFolderID {
  216605957: The9_SAh5ErOa2Tgf2IvXriygn
}

export interface ByTeamID {
  '1352471829114242693': The9_SAh5ErOa2Tgf2IvXriygn
}

export interface SaveAsState {
  count: number
  startTime: any
  waitTime: number
  totalImagesToDownload: number
  remainingImagesToDownload: number
  downloadSkipped: boolean
  attemptId: string
}

export interface SaveStatus {
  tabCloseText: number
  unsaved: Unsaved
  error: number
  hasUnsavedChanges: boolean
  hasAutosaveChanges: boolean
  hasMultiplayerChanges: boolean
}

export interface Unsaved {
  hasAutosaveChanges: boolean
  hasMultiplayerChanges: boolean
}

export interface Screenreader {
  enabled: boolean
  errorType: any
  serverStoredPreference: boolean
}

export interface Search {
  parameters: Parameters
  responseSortState: any
  responses: CompletedQueries
  responseCounts: CompletedQueries
  completedQueries: CompletedQueries
  lastLoadedQuery: LastLoadedQuery
  sessionId: any
  queryCount: number
  queryId: any
  isFocused: boolean
  searchScrollTop: number
  searchTypeBehavior: string
  lastAckedQueryId: any
  searchPreviewOrder: any[]
}

export interface CompletedQueries {
  public_plugins: any | string
  private_plugins: any | string
  files: any | string
  projects: any | string
  teams: any | string
  users: any | string
  public_profiles: any | string
  hub_files: any | string
  public_widgets: any | string
  private_widgets: any | string
}

export interface LastLoadedQuery {
  sessionId: any
  query: string
  queryId: any
}

export interface Parameters {
  query: string
  searchModelType: string
  searchScope: string
  workspaceFilter: any
  idpGroupFilter: any
  planFilter: any
  fileTypeFilter: number
  facetFilters: any
  sortState: SortState
}

export interface SortState {
  public_profiles: ActiveFileUsers
  public_plugins: Files
  private_plugins: Files
  hub_files: Files
  files: Files
  projects: Files
  teams: Files
  users: Files
  public_widgets: Files
  private_widgets: Files
}

export interface Files {
  sortKey: string
  sortDesc: boolean
}

export interface SelectedView {
  showDevModeVariablesTable: any
  showOverview: boolean
  view: string
  editorType: number
  fileKey: ID
  nodeId: string
  workshopModeInfoLoaded: boolean
  workshopUserNames: ActiveFileUsers
  starterKitHasBeenHidden: boolean
  figjamEditorOnboardingStarted: boolean
  figjamEditorOnboardingFinishedOrDismissed: boolean
  workshopModeInfo: any
}

export interface SharedFonts {
  uploadsRemaining: ActiveFileUsers
  uploadsLaunched: number
  unsuccessfulUploads: any[]
  successfulUploads: any[]
  collisions: any[]
  warnings: any[]
  fontsToDelete: ActiveFileUsers
  unsuccessfulDeletes: any[]
  successfulDeletes: any[]
  fontsByResourceId: ActiveFileUsers
}

export interface TeamAdminRolesForAuthedUsers {
  '1352471826795235809': The1352471826795235809_Element[]
}

export interface TeamBilling {
  summary: Summary
}

export interface Summary {
  currency: string
  annual_subscription: any
  monthly_subscription: any
  last_monthly_invoice: any
  last_annual_invoice: any
  billing_contact: any
  whiteboard_quantity: any
  show_vat_gst: boolean
  shipping_address: any
  legal_name: any
  has_billing_address: boolean
}

export interface TeamUserByTeamID {
  '1352471829114242693': TeamUserByTeamID1352471829114242693
}

export interface TeamUserByTeamID1352471829114242693 {
  '1352471826795235809': TeamUser
}

export interface TeamView {
  renamingTeam: boolean
}

export interface TemplateFiles {
  templatesPicker: TemplatesPicker
  onboarding: ActiveFileUsers
}

export interface TemplatesPicker {
  design: ActiveFileUsers
  whiteboard: ActiveFileUsers
  slides: ActiveFileUsers
  sites: ActiveFileUsers
  cooper: ActiveFileUsers
  figmake: ActiveFileUsers
}

export interface Theme {
  visibleTheme: string
  themePreference: string
  enhancedContrast: boolean
}

export interface TileSelect {
  FILES: ActiveFileUsers
  PINNED_FILES: ActiveFileUsers
  PROTOTYPES: ActiveFileUsers
  REPOS: ActiveFileUsers
  PROJECTS: ActiveFileUsers
  OFFLINE_FILES: ActiveFileUsers
}

export interface TileSortFilterStateByView {
  deletedFiles: DeletedFiles
  trashedFolders: DeletedFiles
  folders: TileSortFilterStateByViewFolders
  search: DeletedFiles
  user: DeletedFiles
  sharedWithYou: DeletedFiles
  recentsAndSharing: RecentsAndSharing
  team: DeletedFiles
}

export interface DeletedFiles {
  viewMode: number
  sort: Sort
  filters: Filters
}

export interface Filters {
  creator: number
  fileType: number
  orgDeletedDrafts: string
  sharedBy?: string
  role?: number
}

export interface Sort {
  key: number
  dir: number
}

export interface TileSortFilterStateByViewFolders {
  default: DeletedFiles
  byId: ActiveFileUsers
}

export interface RecentsAndSharing {
  recents: DeletedFiles
  sharedFiles: DeletedFiles
  sharedProjects: DeletedFiles
}

export interface Timer {
  modalState: string
  audioEnabled: boolean
  time: any | {
    isPaused: boolean
    timeRemainingMs: number
    timeOrigin: number
    totalTimeMs: number
  }
  notification: any
  setBy: string
  selectedSongID: string
  activeSongs: any[]
  volume: number
  musicStartTimeMs: number
  isMuted: boolean
  musicPlayer: any
  startChimePlayed: any
}

export interface Tooltip {
  target: any
  state: number
  position: number
  timeoutID: any
  interactive: boolean
  tipAlign: number
  maxWidth: number
  maxLines: number
  lightMode: boolean
  textAlign: string
  hideImmediately: boolean
}

export interface TwoFactorAuth {
  loading: boolean
}

export interface UniversalInsertModal {
  initialFdView: any
  showing: boolean
  pinned: string
  initialX: number
  initialY: number
  scrollDevelopmentSectionIntoView: boolean
}

export interface UsedKeyboardShortcuts {
  'toggle-bold': number
  'measure-to-selection': number
}

export interface WelcomeUser {
  org_id: any
  byId: Record<string, { id: string, created_at: string }>
  id: string
  name: string
  email: string
  handle: string
  img_url: string
  created_at: Date
  email_validated_at: Date
  utc_offset: any
  profile: Profile
  phone_number: any
  student_validated_at: any
  description: any
  plugin_publishing_blocked_at: any
  community_commenting_blocked_at: any
  community_blocked_at: any
  external_restricted_org_id: any
  external_restricted_at: any
  dev_tokens: any[]
  oauth_tokens: any[]
  realtime_token: string
  realtime_token_inactive: string
  two_factor_enabled: boolean
  two_factor_app_enabled: boolean
  google_sso_only: boolean
  saml_sso_only: boolean
  experiment_seed: string
  community_profile_id: any
  community_profile_handle: any
  community_beta_at: any
  locale: string
  signup_locale: any
  keyboard_layout: string
  mouse_scroll_to_zoom: boolean
  right_click_drag_to_pan: boolean
  auto_open_in_desktop: any
  color_profile: string
  sharing_restricted: boolean
  cmty_buyer_tos_accepted_at: any
  stripe_account_status: string
  cmty_seller_capabilities: string[]
  is_community_seller: boolean
  has_passed_visual_compliance: boolean
  stripe_connected_account_id: any
  screenreader_enabled: boolean
  community_purchasing_blocked_at: any
  experiment_assignments: any[]
  drafts_folder_id: string
  personal_drafts_folder_id: string
  can_sell_on_community: any
}

export interface UserAnalyticsData {
  admin_user_metrics: any
  design_activation_date: Date
  design_max_paid_role: string
  domain_editors: any
  edited_figma_design: boolean
  education_user: boolean
  eligible_for_dev_mode_toolbelt_banner: boolean
  email_type: string
  first_collab_on: Date
  first_component_created_date: any
  first_design_at: Date
  first_figjam_at: Date
  generation: number
  granted_jubilee: boolean
  how_plan_use_figma_no_answer: boolean
  is_activated_design: boolean
  is_active_mobile_user: boolean
  is_agency: boolean
  is_company: boolean
  is_design_power_user: boolean
  is_freelancer: boolean
  is_ipad_user: boolean
  is_learning_design: boolean
  is_org_size_101_to_500: boolean
  is_org_size_2_to_100: boolean
  is_org_size_501_to_5000: boolean
  is_org_size_just_me: boolean
  is_org_size_no_answer: boolean
  is_org_size_over_5000: boolean
  is_other: boolean
  is_other_work_location: boolean
  is_personal_project: boolean
  is_school: boolean
  is_using_it_for_school: boolean
  is_work: boolean
  job_title: string
  land_product: LandProduct
  last_active_on: Date
  last_comment_created_at: any
  last_figjam_at: Date
  max_plan_tier: string
  max_plan_tier_seat_type: any
  num_admin_orgs: any
  num_admin_pro_teams: any
  num_edits_30_day: number
  num_edits_60_day: number
  num_edits_90_day: number
  num_edit_days_30_day: number
  num_edit_days_60_day: number
  num_edit_days_90_day: number
  num_files_created: number
  org_admin_notification_email_enabled: boolean
  paid_status: string
  pro_admin_notification_email_enabled: boolean
  pro_team_at_least_one_billing_cycle: any
  rollout_jubilee: any
  shared_design: boolean
  shared_figjam: boolean
  show_styles_deprecate_banner: boolean
  signup_date: Date
  used_desktop_app: boolean
  used_figjam_wheel_or_chat: boolean
  used_high_five: boolean
  used_timer: boolean
  user_age_bucket_name: string
  user_id: string
  work_location_no_answer: boolean
}

export interface UserEduGracePeriods {
  [key: string]: The1306492106181799161
}

export interface The1306492106181799161 {
  createdAt: Date
  updatedAt: Date
}

export interface UserFlag {
  id: string
  createdAt: Date
  updatedAt: Date
}

export interface UserNotifications {
  communityProfileBellStates: ActiveFileUsers
}

export interface VersionHistory {
  activeId: string
  versions: any[]
  docHasChanged: boolean
  loading: boolean
  isLoadingPage: boolean
  lastEdited: any
  lastViewed: Date
}

export interface Voice {
  activeCall: ActiveFileUsers
  showWidget: boolean
  showWidgetParticipantList: boolean
  userIdsInCallFromProvider: any[]
  voiceUsersById: ActiveFileUsers
  snapWidget: boolean
  showCaptions: boolean
  captionsInstallProgress: number
}

export interface Voting {
  votingParams: VotingParams
  lastInitiatedVotingSessionId: any
  hasDismissedJoinConfirmation: boolean
  selectedVotePinId: any
  hoveredInModalVotePinId: any
}

export interface VotingParams {
  title: string
  userVoteLimit: number
}
