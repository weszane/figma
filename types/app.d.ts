export interface AppState {
  optimist: any[]
  autocomplete: Autocomplete
  contacts: Contacts
  dropdownShown: null
  flashes: ActiveFileUsers
  modalShown: null
  progress: ActiveFileUsers
  visualBell: any[]
  savedPublishDescription: string
  notifications: any[]
  downtime: Downtime
  blockedUILoadingIndicator: null
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
  currentUserOrgId: null
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
  hubFiles: ActiveFileUsers
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
  openFileMerge: null
  templateFiles: TemplateFiles
  teamJoinLinks: null
  theme: Theme
  desktopNewTab: DesktopNewTab
  sharingAttributionContextKey: string
  screenreader: Screenreader
  search: Search
  lastVisitedPlanId: null
  lastVisitedPlan: null
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
  creatingNewFolder: null
  tileSelect: TileSelect
  teamCreation: ActiveFileUsers
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
  pickerShown: null
  instanceSwapPickerShown: Shown
  stylePickerShown: Shown
  voting: Voting
  shouldShowStackAlignmentPicker: boolean
  stylePreviewShown: Shown
  versionHistory: VersionHistory
  multiplayer: Multiplayer
  fonts: { [key: string]: Font }
  localFontAgentVersion: null
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
  eyedropper: null
  hyperlinkPopup: null
  canvasMentionPopup: null
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
  selectedComponentPropDefId: null
  showingFileFooter: boolean
  canvasSearch: CanvasSearch
  variablePickerShown: Shown
  quickStart: QuickStart
  recentCustomTemplates: ActiveFileUsers
  pickerInStyleCreationShown: null
  prototype: Prototype
}

export interface ActiveFileUsers {
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
  start: null
  end: null
}

export interface AppWindow {
  inFullScreenMode: boolean
}

export interface Auth {
  accountPicker: null
  email: string
  name: string
  jobTitle: string
  usagePurpose: string
  optInEmail: boolean
  redirectUrl: string
  loading: boolean
  error: null
  appAuthId: null
  appAuthAppType: null
  appAuthGSecret: null
  appAuthDesktopProtocol: null
  appAuthUsers: null
  googleIdToken: null
  googleTokenType: string
  postVerificationAction: null
  arkoseAction: null
  ssoMethod: null
  orgName: null
  existingSession: boolean
  clickedSAMLSignIn: boolean
  shouldUseRedirectInstead: boolean
  fromMsTeams: boolean
}

export interface AuthedActiveCommunityProfile {
  id: string
  location: null
  profile_handle: string
  public_at: null
  follower_count: number
  following_count: number
  primary_user_id: string
  name: string
  img_url: string
  img_urls: ImgUrls
  current_user_is_following: null
  current_user_is_followed: null
  is_restricted_by_current_user: null
  realtime_token: string
  entity_type: string
  associated_users: AssociatedUser[]
  badges: any[]
  has_published: boolean
  org_id: null
  team_id: null
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
  synced_at: null
  providers: null
  stripe_customer_id: null
  subscription: null
  editors: number
  projects: number
  student_team_at: null
  student_autoverifying_team_at: null
  grace_period_end: null
  org_id: null
  img_urls: null
  org_access: null
  deleted_at: null
  blocked_at: null
  trial_period_end: null
  description: null | string
  deleted_by: null
  experiment_seed: number
  license_group_id: null
  migrated_stripe_customer_id: null
  community_blocked_at: null
  default_permission: null
  grace_period_type: null
  workspace_id: null
  default_color_palette_uuid: null
  tax_id_verified_at: null
  legal_name: null
  student_team_state: string
  ai_features_disabled_at: null
  editors_whiteboard: number
  editors_total_unique: number
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  figma_provided_libraries_disabled_at: null
  upgrade_approval_settings: UpgradeApprovalSettings
  sanctioned_at: null
  stripe_billing_address_country: null
  restrictions_list: string[]
  student_team: boolean
  starter_team: boolean
  pro_team: boolean
  DEPRECATED_pro_team: boolean
  org_team: boolean
  subscription_raw: null
  community_profile_id: null
  community_profile_handle: null
  is_paid: boolean
  ai_features_disabled: boolean
  ai_data_sharing_enabled: boolean
  org_browsable: boolean
  hidden: boolean
  last_upgraded_at: null
  figma_provided_libraries_disabled: boolean
  experiment_assignments: any[]
  updated_at: Date
  design_default_paid_status: string
  whiteboard_default_paid_status: string
  img_url?: null
  vat_gst_id?: string
  tax_id_verification_status?: null
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
  utc_offset: null
  profile: Profile
  phone_number: null
  student_validated_at: null
  description: null
  plugin_publishing_blocked_at: null
  community_commenting_blocked_at: null
  community_blocked_at: null
  external_restricted_org_id: null
  external_restricted_at: null
  dev_tokens: any[]
  oauth_tokens: any[]
  realtime_token: string
  realtime_token_inactive: string
  two_factor_enabled: boolean
  two_factor_app_enabled: boolean
  google_sso_only: boolean
  saml_sso_only: boolean
  experiment_seed: number
  community_profile_id: null
  community_profile_handle: null
  community_beta_at: null
  locale: string
  signup_locale: null
  keyboard_layout: string
  mouse_scroll_to_zoom: boolean
  right_click_drag_to_pan: boolean
  auto_open_in_desktop: null
  color_profile: string
  sharing_restricted: boolean
  cmty_buyer_tos_accepted_at: null
  stripe_account_status: string
  cmty_seller_capabilities: string[]
  is_community_seller: boolean
  has_passed_visual_compliance: boolean
  stripe_connected_account_id: null
  screenreader_enabled: boolean
  community_purchasing_blocked_at: null
  experiment_assignments: any[]
  plans: The1352471826795235809_Plan[]
  has_content_from_other_plans: boolean
  can_sell_on_community: null
}

export interface The1352471826795235809_Plan {
  plan_id: string
  is_guest: boolean
  is_org: boolean
  name: string
  img_url: null
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
  lastSnoozeTime: null
  nextGarbageCollectionTimestamp: number
}

export interface AvatarEditorState {
  status: number
  entity: null
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
  activeThread: null
  threads: ActiveFileUsers
  newComment: NewComment
  editingComment: null
  showOnlyParticipating: boolean
  showResolved: boolean
  emojiPicker: null
  typeahead: null
  typeaheadPositionOffset: TypeaheadPositionOffset
  emphasizedPinIds: any[]
  hoveredPinIds: any[]
  activeDragTarget: null
  savingCommentUuids: ActiveFileUsers
  lgPendingUuidToServerIdMap: ActiveFileUsers
}

export interface NewComment {
  messageMeta: any[]
  attachments: ActiveFileUsers
  state: number
  anchorPosition: null
  selectionBoxAnchor: null
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
  currentProfile: null
  pageState: null
  comments: CommunityHubComments
  shelves: ActiveFileUsers
  showingCommunityAdminBanner: boolean
}

export interface CommunityHubComments {
  activeFeedType: string
  authorsById: ActiveFileUsers
  commentsById: ActiveFileUsers
  feeds: Feeds
  id: null
  replyInfoByParentId: ActiveFileUsers
  selectedCommentId: null
  type: null
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
  loadingBackgroundColor: null
}

export interface Downtime {
  hidingDowntimeNotif: string
  notifMinutesRemaining: null
  payload: null
  status: string
}

export interface DragState {
  type: number
  data: null
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
  description: null
  folder_id: string
  scheme: null
  team_id: TeamID
  link_access: LinkAccess
  trashed_user_id: null
  client_meta: string
  license: null
  parent_org_id: null
  org_browsable: boolean | null
  thumbnail_url_override: null
  thumbnail_guid: null
  proto_link_access: null
  org_audience: boolean
  file_repo_id: null
  source_file_key: null
  source_checkpoint_id: null
  editor_type: LandProduct
  branch_checkpoint_id: null
  has_file_link_password: boolean
  has_proto_link_password: boolean
  folder_access_enabled: boolean
  _internal_only_written_by_backfill: number
  is_trashed_with_project: boolean
  trashed_with_parent: null
  url: string
  edit_url: string
  prototype_url: string
  handoff_url: string
  slides_url: string
  track_tags: TrackTags | null
  viewer_export_restricted: boolean
  thumbnail_url: string
  is_try_file: boolean
  library_key: string
  created_at: Date
  deleted_at: null
  trashed_at: null
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
  description: null
  folder_id: string
  scheme: null
  team_id: string
  link_access: LinkAccess
  trashed_user_id: null
  client_meta: string
  license: null
  parent_org_id: null
  org_browsable: null
  thumbnail_url_override: null
  thumbnail_guid: null
  proto_link_access: null
  org_audience: boolean
  file_repo_id: null
  source_file_key: null
  source_checkpoint_id: null
  editor_type: string
  branch_checkpoint_id: null
  has_file_link_password: boolean
  has_proto_link_password: boolean
  folder_access_enabled: boolean
  _internal_only_written_by_backfill: number
  is_trashed_with_project: boolean
  trashed_with_parent: null
  url: string
  edit_url: string
  prototype_url: string
  handoff_url: string
  slides_url: string
  track_tags: null
  viewer_export_restricted: boolean
  thumbnail_url: string
  is_try_file: boolean
  library_key: string
  created_at: Date
  deleted_at: null
  trashed_at: null
  folder: Folder
  team: The9SAh5ErOA2TGF2IvXRIYGNTeam
  team_user: TeamUser
  org: null
  org_user: null
  edu_grace_period: null
  file_repo: null
  source_file: null
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
  scheme: null
  path: string
  settings: null
  team_id: string
  view_only_at: null
  org_id: null
  deleted_at: null
  description: null
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  is_abandoned_drafts: boolean
  trashed_at: null
  trashed_by: null
  abandoned_draft_user_name: null
  abandoned_draft_user_email: null
  abandoned_draft_user_removed_at: null
  trashed_user_id: null
  name: string
  is_invite_only: boolean
  is_view_only: boolean
  team_access: string
}

export interface The9SAh5ErOA2TGF2IvXRIYGNTeam {
  id: string
  name: string
  created_at: Date
  img_url: null
  synced_at: null
  providers: null
  subscription: null
  editors: number
  student_team_at: null
  student_autoverifying_team_at: null
  org_id: null
  org_access: null
  deleted_at: null
  blocked_at: null
  trial_period_end: null
  description: null
  deleted_by: null
  experiment_seed: number
  license_group_id: null
  migrated_stripe_customer_id: null
  community_blocked_at: null
  default_permission: null
  vat_gst_id: string
  workspace_id: null
  default_color_palette_uuid: null
  tax_id_verification_status: null
  tax_id_verified_at: null
  legal_name: null
  ai_features_disabled_at: null
  editors_whiteboard: number
  editors_total_unique: number
  sharing_audience_control: string
  _internal_only_written_by_backfill: number
  figma_provided_libraries_disabled_at: null
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
  show_figjam_user_onboarding: null
  has_shown_figjam_admin_onboarding: null
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
  folderRenaming: null
  focusedIndex: number
  indexCount: null
  indexOffsets: ActiveFileUsers
  folderRows: any[]
  teamOrder: any[]
  foldersByTeamId: ActiveFileUsers
  isSearchResult: boolean
  isSearchFocused: boolean
  upDownKeyPressed: boolean
  canMouseFocus: boolean
  userTeamCount: null
}

export interface WelcomeFolders {
  216605957: The216605957
}

export interface The216605957 {
  id: string
  name: string
  description: null
  path: string
  team_id: string
  org_id: null
  is_subscribed: boolean
  is_favorited: boolean
  updated_at: Date
  created_at: Date
  is_invite_only: boolean
  is_view_only: boolean
  settings: null
  deleted_at: null
  trashed_at: null
  trashed_user_id: null
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
  tab: null
}

export interface LeftPanel {
  activeTab: number
  shouldFocusSearchBar: boolean
}

export interface Library {
  publishedByLibraryKey: PublishedByLibraryKey
  used__LIVEGRAPH: UsedLIVEGRAPH
  openFilePublished__LIVEGRAPH: OpenFilePublishedLivegraph
  openHubFilePublished__LIVEGRAPH: OpenFilePublishedLivegraph
  local: Local
  assetsPanelSearch: AssetsPanelSearch
  publishProgress: PublishProgress
  isRenamingSelectedStyle: boolean
  localStyleSelection: null
  defaultPublished: DefaultPublished
  libraryUpdatesBannerDismissed: boolean
  movedLibraryItems: MovedLibraryItems
  libraryPublishingMode: number
  localVariablesById: ActiveFileUsers
  localVariableSetsById: ActiveFileUsers
  subscribedVariablesByIdFromLoadedPages: ActiveFileUsers
  subscribedVariableSetsByIdFromLoadedPages: ActiveFileUsers
  knownUsedLibraryVariablesByKey: ActiveFileUsers
  knownUsedLibraryVariableSetsByKey: ActiveFileUsers
  publishableStateGroups: any[]
  publishableStyles: any[]
  publishableSymbols: any[]
  publishableModules: any[]
  subscribedSymbolsFromLoadedPages: any[]
  subscribedStateGroupsFromLoadedPages: any[]
  directlySubscribedStylesFromLoadedPages: any[]
  indirectlySubscribedStylesFromLoadedPages: any[]
  localSymbolsThatHaveUsagesOnLoadedPages: any[]
  localStylesThatHaveUsagesOnLoadedPages: any[]
  subscribedSymbolsOnCurrentPage: any[]
  subscribedStateGroupsOnCurrentPage: any[]
  directlySubscribedStylesOnCurrentPage: any[]
  localSymbolsThatHaveUsagesOnCurrentPage: any[]
  localStylesThatHaveUsagesOnCurrentPage: any[]
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
  description_rt: null | string
  node_id: string
  containing_frame: FContainingFrame
  is_unflattened?: boolean
  updated_at: Date
  min_node_width: number
  min_node_height: number
  sort_position?: null
  has_video?: null
  is_template: null
  library_key: string
  key?: string
  version?: string
  fill_color?: BackgroundColorEnum | null
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
  description_rt: DescriptionRt | null
  node_id: string
  containing_frame: FContainingFrame
  is_unflattened: boolean
  updated_at: Date
  min_node_width: number
  min_node_height: number
  sort_position: null
  has_video: null
  is_template: null
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
  sort_position?: null
  has_video?: null
  is_template: null
  library_key: string
  key?: string
  version?: string
  fill_color?: null
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
  [key: string]: string
}

export interface Mirror {
  appModel: { [key: string]: AppModelValue }
  selectionProperties: SelectionProperties
  selectedStyleProperties: SelectedStyleProperties
  sceneGraph: SceneGraph
  sceneGraphSelection: SceneGraphSelection
  objectsPanelRowRebuildCounter: number
  selectionPaints: SelectionPaints
}

export type AppModelValue = AppModelElement[] | boolean | PurpleAppModel | number | null | string

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

export interface SceneGraphSelection {
  '2002:27': boolean
}

export interface SelectedStyleProperties {
  intrinsicLineHeight: number
  leadingTrimEnabled: boolean
}

export interface SelectionPaints {
  paints: any[]
  styles: any[]
  paintsDirectlyOnSingleNode: PaintsDirectlyOnSingleNode[]
  stylesDirectlyOnSingleNode: any[]
  emptyDueToLimitExceeded: boolean
  forceUpdateForUndo: boolean
}

export interface PaintsDirectlyOnSingleNode {
  encodedPaint: string
  paint: Paint
  variableScopes: ActiveFileUsers
}

export interface Paint {
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
  imageOverlayPaint: Paint
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
  variableSetKeyToModeData: null
  variableNotMatchingSetValue: ActiveFileUsers
  variableSetKeyToPageLevelPresetMode: null
  bubbledVariableConsumptionMaps: ActiveFileUsers
}

export interface Multiplayer {
  sessionID: number
  deviceNameFilter: string
  observingSessionID: number
  followerCount: number
  presenterSessionID: null
  sessionNominatedByCurrentUser: null
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
  type: string
  wheelType: string
}

export interface WelcomeMusic {
  music: MusicMusic
  modalState: string
  volume: number
  isMuted: boolean
  activeSongs: any[]
  allSongs: any[]
  playerInstance: null
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
  id: ID
  key: ID
  _name: string
  teamId: string
  clientMeta: null
  folderId: string
  license: null
  orgBrowsable: null
  parentOrgId: null
  fileRepoId: null
  sourceFileKey: null
  linkAccess: LinkAccess
  hasFileLinkPassword: boolean
  hasProtoLinkPassword: boolean
  updatedAt: Date
  trashedAt: null
  deletedAt: null
  creatorId: string
  createdAt: Date
  sourceCheckpointId: null
  thumbnailGuid: null
  org: null
  currentOrgUser: null
  currentPartialOrgUser: null
  currentTeamUser: CurrentTeamUser
  ownerRole: OwnerRole
  teamLimitedInfo: TeamLimitedInfo
  team: OpenFileTeam
  project: Project
  repo: null
  sourceFile: null
  publishedHubFile: null
  trackTags: null
  votingSessions: any[]
  template: null
  siteMount: null
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
  hasEditRole: boolean
  isFavorited: boolean
  sharedContainerSetting: SharedContainerSetting
}

export interface CurrentPlanUser {
  draftsFolderId: string
  designPaidStatus: string
  whiteboardPaidStatus: string
  seatTypeLicenseTypes: string[]
  designAccountTypeRequest: null
  whiteboardAccountTypeRequest: null
  devModeAccountTypeRequest: null
}

export interface CurrentTeamUser {
  designPaidStatus: string
  whiteboardPaidStatus: string
  designAccountTypeRequest: null
  whiteboardAccountTypeRequest: null
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
  orgId: null
  teamId: string
  path: string
  viewOnlyAt: null
  inviteOnlyAt: null
  trashedAt: null
  subscription: null
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
  orgId: null
  deletedAt: null
  gracePeriodEnd: null
  trialPeriodEnd: null
  createdAt: Date
  studentTeamAt: null
  licenseGroupId: null
  workspaceId: null
  orgAccess: null
  studentTeamState: string
  licenseGroup: null
  eduGracePeriod: null
  subscription: null
  restrictionsList: string[]
  canEdit: boolean
  canView: boolean
}

export interface TeamLimitedInfo {
  name: string
  imgUrl: null
}

export interface OrgDomains {
  domains: any[]
  isFetching: boolean
  fetchedAt: null
}

export interface OrgSamlConfig {
  config: null
  isFetching: boolean
}

export interface OrgTeams {
  teams: any[]
  status: null
}

export interface Payment {
  error: null
  errorCode: null
  currencyToSwitch: null
  billingPeriod: number
  numDesignEditors: number
  submitPending: boolean
  upgradingNewTeam: boolean
  promo: null
  token: null
  taxes: null
  editorStatusChanges: EditorStatusChanges
  numWhiteboardEditors: number
  figmaEmailTeamUsers: any[]
  currency: null
  vatGstId: null
  regionalVatGstId: null
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
  currentPageId: null
  backgroundColor: Color
  isReconnecting: boolean
  isFooterVisible: boolean
}

export interface PublicUsers {
  byId: ByID
}

export interface QuickStart {
  insertedTextNodeId: null
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
  pending_email: null
  is_shared?: boolean | null
  _internal_only_written_by_backfill?: number
  source?: null
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
  startTime: null
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
  errorType: null
  serverStoredPreference: boolean
}

export interface Search {
  parameters: Parameters
  responseSortState: null
  responses: CompletedQueries
  responseCounts: CompletedQueries
  completedQueries: CompletedQueries
  lastLoadedQuery: LastLoadedQuery
  sessionId: null
  queryCount: number
  queryId: null
  isFocused: boolean
  searchScrollTop: number
  searchTypeBehavior: string
  lastAckedQueryId: null
  searchPreviewOrder: any[]
}

export interface CompletedQueries {
  public_plugins: null | string
  private_plugins: null | string
  files: null | string
  projects: null | string
  teams: null | string
  users: null | string
  public_profiles: null | string
  hub_files: null | string
  public_widgets: null | string
  private_widgets: null | string
}

export interface LastLoadedQuery {
  sessionId: null
  query: string
  queryId: null
}

export interface Parameters {
  query: string
  searchModelType: string
  searchScope: string
  workspaceFilter: null
  idpGroupFilter: null
  planFilter: null
  fileTypeFilter: number
  facetFilters: null
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
  view: string
  editorType: number
  fileKey: ID
  nodeId: string
  workshopModeInfoLoaded: boolean
  workshopUserNames: ActiveFileUsers
  starterKitHasBeenHidden: boolean
  figjamEditorOnboardingStarted: boolean
  figjamEditorOnboardingFinishedOrDismissed: boolean
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
  annual_subscription: null
  monthly_subscription: null
  last_monthly_invoice: null
  last_annual_invoice: null
  billing_contact: null
  whiteboard_quantity: null
  show_vat_gst: boolean
  shipping_address: null
  legal_name: null
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
  time: null
  notification: null
  setBy: string
  selectedSongID: string
  activeSongs: any[]
  volume: number
  musicStartTimeMs: number
  isMuted: boolean
  musicPlayer: null
  startChimePlayed: null
}

export interface Tooltip {
  target: null
  state: number
  position: number
  timeoutID: null
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
  id: string
  name: string
  email: string
  handle: string
  img_url: string
  created_at: Date
  email_validated_at: Date
  utc_offset: null
  profile: Profile
  phone_number: null
  student_validated_at: null
  description: null
  plugin_publishing_blocked_at: null
  community_commenting_blocked_at: null
  community_blocked_at: null
  external_restricted_org_id: null
  external_restricted_at: null
  dev_tokens: any[]
  oauth_tokens: any[]
  realtime_token: string
  realtime_token_inactive: string
  two_factor_enabled: boolean
  two_factor_app_enabled: boolean
  google_sso_only: boolean
  saml_sso_only: boolean
  experiment_seed: string
  community_profile_id: null
  community_profile_handle: null
  community_beta_at: null
  locale: string
  signup_locale: null
  keyboard_layout: string
  mouse_scroll_to_zoom: boolean
  right_click_drag_to_pan: boolean
  auto_open_in_desktop: null
  color_profile: string
  sharing_restricted: boolean
  cmty_buyer_tos_accepted_at: null
  stripe_account_status: string
  cmty_seller_capabilities: string[]
  is_community_seller: boolean
  has_passed_visual_compliance: boolean
  stripe_connected_account_id: null
  screenreader_enabled: boolean
  community_purchasing_blocked_at: null
  experiment_assignments: any[]
  drafts_folder_id: string
  personal_drafts_folder_id: string
  can_sell_on_community: null
}

export interface UserAnalyticsData {
  admin_user_metrics: null
  design_activation_date: Date
  design_max_paid_role: string
  domain_editors: null
  edited_figma_design: boolean
  education_user: boolean
  eligible_for_dev_mode_toolbelt_banner: boolean
  email_type: string
  first_collab_on: Date
  first_component_created_date: null
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
  last_comment_created_at: null
  last_figjam_at: Date
  max_plan_tier: string
  max_plan_tier_seat_type: null
  num_admin_orgs: null
  num_admin_pro_teams: null
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
  pro_team_at_least_one_billing_cycle: null
  rollout_jubilee: null
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
  '1306492106181799161': The1306492106181799161
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
  lastEdited: null
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
  lastInitiatedVotingSessionId: null
  hasDismissedJoinConfirmation: boolean
  selectedVotePinId: null
  hoveredInModalVotePinId: null
}

export interface VotingParams {
  title: string
  userVoteLimit: number
}
