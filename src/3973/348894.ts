import { communityPagePaths } from '../905/528121'


let knownPathSegments = new Set(["file", "board", "design", "slides", "site", "rev", "make", "files", "file_metadata", "recent_files", "proto", "presenter", "deck", "plugin", "plugins", "widget", "widgets", "checkpoint", "api", "contacts", "state", "session", "template", "templates", "browse", "search", "components", "recommend", "image", "images", "videos", "upload", "uploads", "v2", "internal", "buzz", "login", "logout", "signup", "login_iframe", "invites", "team_invite", "accept", "redeem", "auth", "available_auth_methods", "email_login", "password", "recover", "app_auth", "grant", "saml", "google_auth", "role", "roles", "view", "can_request_edit", "periodic_refresh", "account_type_requests", "approve", "deny", "nudge", "dismiss_badge", "request_upgrade", "editor_type", "send", "request_magic_link", "employee", "consent", "confirm", "viewer_restricted_draft", "notify", "update_message", "mfa_auth", "two_factor", "create-team", "deletion_file_count", "add-collaborators", "recent", "recents", "recent_prototypes", "recent_search", "team", "teams", "team_users", "team-admin-console", "directory", "libraries", "workspace", "workspaces", "workspace_approved_library", "recents-and-sharing", "shared-projects", "recently-viewed", "shared-with-you", "settings", "project", "projects", "font", "fonts", "font-files", "your%20teams", "team-feed", "studio", "feed-posts", "feed_posts", "drafts", "drafts-to-move", "admin", "license_groups", "orgs", "org", "org_users", "resources", "billing", "billing-group", "billing_emails", "activity", "members", "send_restore_email", "folders", "self_assign_workspace", "admin_request_dashboard", "admin_request_dashboard_row_count", "workspace_member_count", "experiment_cohort", "dev_mode_suggested_upgrades", "dismiss_dev_mode_suggested_upgrades", "pinned_files", "increment_open_count", "pin", "ai_data_sharing", "toggle_slides_disabled", "export_members", "billing_group", "new_file_location", "trashed_folders", "restore", "file_repos", "toggle_sites_publishing_disabled", "toggle_supabase_disabled", "team_user_descended_roles", "upgrade-team", "choose_plan", "payment_and_address", "confirm_pay", "upgrade_new_team", "purchase-organization", "details", "payment", "review", "edu-review", "eligible_upgrade_data", "first_draft", "assets", "match_group", "match_preset_modes", "all_kits", "kit_contents", "detach_info", "publish_local_kit", "update_metadata", "asset_thumbnail", "upload_thumbnails", "all_eval_sets", "run_evals", "eval_status", "auto_suggest", "auto_suggest_props", "fragment_search", "top_k_library_styles_variables", "user", "plans", "org_invites", "claim", "claim_device_file", "try-figjam", "report-abuse", "online-whiteboard", "users", "salesforce_contact_ids", "google_drive", "access_token", "plan_properties", "validate_trial", "create_product_trial", "suspend_product_trial", "status", "flags", "flag", "oembed", "spelling", "get-languages", "img", "realtime_token", "realtime_v2", "new", "duplicate", "dev_mode_terms_accepted", "resource_lifecycle", "response_sampler", "file_download_log", "num_backfilled_team_user", "invoices", "has_connected_plan_user_in_org", "open", "show_dangling_team_user_backfill_banner", "dev-mode-demo", "scim_recovery", "mfa", "abuse", "async_jobs", "enqueue", "arkose", "on_for_user", "cms_internal", "collection", "community", "figma", "figjam", "paid", "free", "partners", "prototype", "fig_files", "category", "tag", "collections", "remixes", "hub_files", "hub_profiles", "community_categories_v2", "community_libraries", "community_mentions", "community_resources", "community_shelves", "profile", "design_systems", "library", "asset", "send_third_party_m10n_review_email", "styles", "version", "hub_file_metadata", "default_librarires", "library_file_subscriptions", "library_user_subscriptions", "library_org_subscriptions", "library_team_subscriptions", "all_library_user_subscriptions", "all_library_org_subscriptions", "all_library_team_subscriptions", "hub_file_duplicates", "block_seo_indexing", "unblock_seo_indexing", "resource", "tags", "resource_use", "third_party_m10n_url", "thumbnail", "icon", "recommendations", "home_shelf", "port", "organization", "orgs", "experiment", "create_trial", "extend_trial", "upgrade_trial", "add_user", "asset_suggestions", "groups", "documents", "library_json", "populate_usages_for_org", "populate_usages_for_file", "pregenerate_org_api_data", "preset_libraries", "convert_to_billable_products", "mock_idp_users", "mock_idp_user", "dev_mode_opt_in", "migrate_feature_flags_to_statsig", "org_migrations", "order", "tickets", "org_merge_credit", "generate_approval_link", "allowlist_team", "run_validate_fullscreen_side_effects_job", "abandoned_drafts", "set_billing_remodel_ga_override", "toggle_bundles_model", "republish_assets_by_key", "batch", "unredact", "source_file", "translations", "fig_file_video_usages", "fig_file_image_usages", "file_seen_states", "desktop", "livegraph_client", "page_load_token", "figmascope", "figmascope_multiplayer_journal", "figmascope_file", "figmascope_checkpoint_diffs", "figmascope_checkpoints", "figmascope_file_validation", "start_redact_figmascope_file_validation", "figmascope_file_validation_unredacted", "start_redact_figmascope_file", "check_redact_figmascope_file", "start_redact_figmascope_journal", "check_redact_figmascope_journal", "file-validations", "file-validations-details", "figfactory", "i18n", "strings", "statsig", "bootstrap", "email", "email_tool", "send_email", "send_email_to_litmus", "user_team_flags", "update_overrides", "flag_status_for_user", "flag_descriptions", "user_notifications", "user_notifications_bell", "user_notifications_bells", "catfile_optin", "catfic_optin", "server_driven", "mark_read", "clear", "plan", "recent_activity", "web_token_registration", "read", "accept", "reject", "dev_handoff", "index", "figmadocs", "snippet", "dev_mode_asset_preferences", "ml", "figjam_dots", "jam", "template_canvas", "prepare_insert", "meet_device", "device_try_files", "device_try_file_claim_emails", "save", "cleanup", "upnode", "link_metadata", "mobile", "clipboard_data_upload", "mobile_init_flags", "mobile_client_fallback_exp_variant", "native_preload", "mobile-preload", "site", "custom_domain", "get_custom_domain_dns_records", "check_custom_domain_limit", "remove_custom_domain", "update_bundle", "update_subdomain", "validate_subdomain", "configure_redirect", "remove_custom_domain_redirect", "set_password", "unset_password", "metadata", "user", "org", "discovery", "bizsys", "set_up_org_billing", "stripe_details", "credit_notes", "validate_currency", "billing_metadata", "org_operation", "add_domain_users", "pricing", "contract_rates", "prices_at_contract_renewal", "team_prices_at_next_invoice", "terms_of_service", "hex", "org_admin", "create_presigned_url", "provision_org", "org_saml_config", "org_saml_configs", "configure_org_renewal", "domains", "member_counts", "plugin_preferences", "lg_update_slo_data", "livegraph", "pagination_resolver", "sinatra_resolver", "waf-validation", "models", "update-backfill-state", "explain", "generate", "offline_eval", "query_set", "query_sets", "run", "search_clause", "search_indexes", "template", "request_logs", "slide", "thumbnail", "backfills", "workers", "start", "pause", "rerun", "move_to_phase", "phases", "history", "diff", "permissions", "team_ghost", "sites", "m1", "async", "publish", "unpublish", "action", "details", "dsa", "library", "overview", "record", "snowflake", "style", "style_usages", "styles", "variable", "variables", "missing_styles_by_library_key", "enable_slots", "google-classroom", "integrations", "submissions", "attachments", "attachment", "tagged_file", "log_dev_mode_nudges_exp_entry", "fetch_dev_mode_nudges_exp_entry", "team_user_event", "items", "field_schemas", "fields", "import", "resource_sync", "smartling_translation_callback", "translations_status_s3_keys", "request_translations", "upload_visual_context", "delete_smartling_files", "string_management", "litmus", "comparison_artifact", "comparisons", "configure", "design_connection", "github-app", "comments", "bypass_github_check", "github-installations", "reactions", "resolve", "named_scenarios", "generate_test_materials", "external_qa", "code_suggestions", "code_connect", "mapping", "published_components", "libraries", "repositories", "source_files", "file_details", "bulk_map", "directories", "contents", "eval", "view", "checkpoint_upload", "checkpoint_diff_upload", "checkpoint_diff", "code_snapshot", "code", "snapshot", "create_ds_import", "ds_import_libraries", "create_ds_code_gen", "fetch_ds_code_gen_status", "oauth", "apps", "setup", "submit", "manage", "withdraw", "version", "options", "scheduled_cancellation", "unsplash", "tracking", "editorial", "ai_chats", "message_content_blobs", "commit_upload", "init_upload", "ai_chat", "threads", "messages", "html-to-design", "thumbnails"]);


// Add segments from communityPagePathsRef to knownPathSegments
Object.values(communityPagePaths).forEach((path) => {
  path.split('/').forEach((segment) => {
    if (segment)
      knownPathSegments.add(segment)
  })
})

/**
 * Normalizes a pathname by replacing unknown segments with a placeholder.
 * @param pathname The input pathname string.
 * @param placeholder The placeholder to use for unknown segments.
 * @param allowSpecialPaths Whether to allow special paths to pass through.
 * @returns The normalized pathname.
 * (original function: $$i3)
 */
export function normalizePathname(pathname: string, placeholder: string = '__', allowSpecialPaths: boolean = true): string {
  if (pathname.startsWith('/@'))
    return `/@${placeholder}`
  if (
    allowSpecialPaths
    && (pathname.startsWith('/esbuild-artifacts/')
      || pathname.startsWith('/fullscreen/')
      || pathname.startsWith('/webpack-artifacts/'))
  ) {
    return pathname
  }
  return pathname
    .split('/')
    .map(segment => segment === '' || knownPathSegments.has(segment) ? segment : placeholder)
    .join('/')
}

/**
 * Normalizes a URL string, replacing unknown path segments and handling special hosts/protocols.
 * @param urlStr The input URL string.
 * @param throwOnError Whether to throw on invalid URLs.
 * @param placeholder The placeholder for unknown segments.
 * @param allowSpecialPaths Whether to allow special paths to pass through.
 * @returns The normalized URL string.
 * (original function: $$n0)
 */
export function normalizeUrl(
  urlStr: string,
  throwOnError: boolean = false,
  placeholder: string = '__',
  allowSpecialPaths: boolean = true,
): string {
  let urlObj: URL
  try {
    urlObj = new URL(urlStr)
  }
  catch (err) {
    if (throwOnError)
      throw err
    return urlStr
  }
  if (
    allowSpecialPaths
    && (urlObj.host === 'static.figma.com'
      || urlObj.host === 'static.figma-gov.com'
      || urlObj.protocol === 'data:')
  ) {
    return urlStr
  }
  if (urlObj.protocol === 'data:') {
    return `data:${urlObj.pathname.split(',')[0]},${placeholder}`
  }
  urlObj.pathname = normalizePathname(urlObj.pathname, placeholder, allowSpecialPaths)
  urlObj.search = ''
  return urlObj.toString()
}

/**
 * Normalizes a pathname using '--' as the placeholder and disables special path allowance.
 * @param pathname The input pathname string.
 * @returns The normalized pathname.
 * (original function: $$o2)
 */
export function normalizePathnameStrict(pathname: string): string {
  return normalizePathname(pathname, '--', false)
}

/**
 * Normalizes a URL string using '--' as the placeholder and disables special path allowance.
 * @param urlStr The input URL string.
 * @param throwOnError Whether to throw on invalid URLs.
 * @returns The normalized URL string.
 * (original function: $$_1)
 */
export function normalizeUrlStrict(urlStr: string, throwOnError: boolean = false): string {
  return normalizeUrl(urlStr, throwOnError, '--', false)
}

// Export aliases for refactored functions
export const Br = normalizeUrl
export const kx = normalizeUrlStrict
export const qR = normalizePathnameStrict
export const vn = normalizePathname
