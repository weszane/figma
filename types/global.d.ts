export type Fn = (...args: any[]) => any


export interface EarlyArgs {
  api_user_state_path: null
  api_session_state_path: null
  file_minimal_user_state: boolean
  multiplayer_preconnect_options: MultiplayerPreconnectOptions
  should_connect_to_multiplayer: boolean
}

export interface MultiplayerPreconnectOptions {
  fileKey: string
  role: string
  nodeIds: string
  targetFileVersion: null
  tagForLogging: null
  multiplayerPreload: boolean
}

export interface Fig {
  importShimURL: string
  importWorkerURL: string
  figMigratorURL: string
  jsvmCppURLs: JsvmCppURLs
  fullscreenURLs: UrLs
  fullscreenScriptHash: string
  prototypeLibURLs: UrLs
  prototypeLibHash: string
  renderBundleURLs: UrLs
  imageIOWorkerURL: string
  librarySearchWorkerURL: string
  spellCheckWorkerURL: string
  firebaseMessagingServiceWorkerURL: string
  previewIframeURL: string
  devtoolsWorkerURL: string
  codeComponentsPreviewIFrameURL: string
  tsViewerScriptURL: string
  tsViewerWorkerURL: string
}

export interface UrLs {
  'compiled_wasm.js': string
  'compiled_wasm.wasm': string
}

export interface JsvmCppURLs {
  'jsvm-cpp.js': string
  'jsvm-cpp.wasm': string
}

export interface InitialOptions {
  [key: string]: any
  statsig_figma_app_client_api_key: string
  sts_assets_version: string
  launchdarkly_client_side_id: string
  preset_library_keys: string[]
  preset_library_keys_v2: string[]
  mvp_va_icon_ids: string[]
  mvp_va_illustration_ids: string[]
  mvp_va_overrides: { [key: string]: MVPVaOverride }
  sites_template_picker_urls: { [key: string]: string }
  tracking_session_id: string
  cluster_name: string
  error_dashboard_url: string
  frontend_sentry_dsn: string
  sites_preview_sentry_dsn: string
  figma_email_suffix: string
  csp_nonce: string
  figma_url: string
  api_url: string
  embed_url: string
  api_cdn_url: string
  workflow_interop_template_id: string
  dictionary_url_by_locale: DictionaryURLByLocale
  flash: Flash
  user_currency_from_ip: string
  fxr_for_currency: null
  google_drive_client_id: string
  google_drive_api_key: string
  cursor_bot: CursorBot
  starting_points: StartingPoints
  prototyping_for_gen0: PrototypingForGen0
  playground_file_hub_file_ids: PlaygroundFileHubFileIDS
  google_client_id: string
  consent_region: string
  page_load_token: string
  resource_type: null
  email: null
  user_ip: string
  redirect_url: null
  email_token: null
  existing_session: boolean
  should_use_redirect_instead: boolean
  mailing_list_checkbox_default: boolean
  from_chrome_extension: boolean
  viewer_region: string
  viewer_city: string
  iso_code: string
  tos_agreement_required: boolean
  editing_file: EditingFile
  editor_type: string
  statsig_plan_key: string
  is_limited_team_plan: boolean
  campfire_model_enabled: boolean
  page_load_team_id: string
  is_cloudfront: boolean
  firebase_cloud_messaging_browser_notifications: FirebaseCloudMessagingBrowserNotifications
  segment_web_key: string
  segment_fullscreen_key: string
  stripe_api_public: string
  google_tag_manager_iframe_url: string
  sprig_iframe_url: string
  recaptcha_v3_ent_site_key: string
  arkose_challenge_public_key: string
  arkose_frame_url: string
  arkose_origin: string
  sheerid_frame_url: string
  sheerid_origin: string
  sheerid_student_program_id: string
  sheerid_educator_program_id: string
  release_manifest_git_commit: string
  release_server_git_commit: string
  release_git_tag: string
  release_manifest_hash: string
  feature_flags: FeatureFlags
  feature_flags_hash_function: string
  feature_flag_rules: FeatureFlagRules
  i18n_desktop_version_support: I18NDesktopVersionSupport
  dynamic_configs: DynamicConfigs
  livegraph_preload_views: FeatureFlagRules
  plan_key: string
  statsig_bootstrap_values: StatsigBootstrapValues
  admin_self_upgrades_enabled: boolean
  analyze_data_flow_v2_until: Date
  statsig_project_id: string
  dev_mode_demo_file_key: string
  datadog_rum_application_id: string
  datadog_rum_client_token: string
  datadog_rum_site: string
  datadog_rum_session_sample_rate: number
  admin_cognito_logout_url: string
  slides_default_blank_template: string
  stripe_payment_method_configurations: StripePaymentMethodConfigurations
}

export interface FeatureFlags {
  [key: string]: boolean
  qa_v2: boolean
  figment_rate_limiting: boolean
  sc_team_experience_teams_10: boolean
  show_account_balance_banner: boolean
  ce_al_show_msal_onboarding: boolean
  ps_leave_team_translation: boolean
  branching_rename_to_source: boolean
  ext_s3_url_use_figma_domains: boolean
  user_settings_tab: boolean
  ds_pubfile_main_symbol: boolean
  livegraph_shim_font_file_full_read: boolean
  ce_resize_fix_min_max_constraints: boolean
  fpl_split_button: boolean
  enable_smart_animate_for_prog_blurs: boolean
  sites_publish_upgrade_entry_point: boolean
  selection_actions_overflow_fpl_menu: boolean
  editor_file_picker_recent_files_standalone_view: boolean
  cookie_banners_file_viewer: boolean
  cmty_footer: boolean
  passkey_enable_metrics: boolean
  dt_url_improvements: boolean
  figjam_text_to_visual_timeline: boolean
  billing_dev_mode_customer_ui: boolean
  figjam_inline_menu_try_ai_2: boolean
  first_draft_prompt_history: boolean
  use_student_application_domains: boolean
  ds_materialize_all_states: boolean
  slides_paywall_string: boolean
  lab_clip_content_ui: boolean
  embedkit_v2_embed_api: boolean
  use_compressed_textures: boolean
  web_lbu_default_to_last_frame: boolean
  ds_variable_props_launch: boolean
  campfire_fields_updates_on_invoice_creation: boolean
  aip_magnolia_perf: boolean
  layout_grids_reactive: boolean
  kiwi_increase_chunk_size: boolean
  vat_save_ph: boolean
  ds_vector_fill_paint_selection_query_styles: boolean
  figjam_ui3_toolbelt_logged_out: boolean
  sc_team_experience_teams_55: boolean
  redep_can_create_file_in_project: boolean
  variables_paste_remap_popup_library_key: boolean
  eu_error_boundaries: boolean
  hub_file_fragments: boolean
  cmty_resource_like_endpoints_enabled: boolean
  ce_vector_ops_use_all_geometry: boolean
  statsig_aa_flag_plan_key_web: boolean
  one_click_exclude_billing_remodel_users: boolean
  skip_vector_compilation: boolean
  webgpu_prog_blur_windows_fix: boolean
  ce_gc_vn_unload: boolean
  ce_eu_deselect_remote_removals: boolean
  realtime_cleanup_viewer_role_access: boolean
  ext_msft_teams_app_auth: boolean
  cursor_bot: boolean
  dsa_restrict_actions_to_design: boolean
  ee_clipper_boolops: boolean
  ee_color_management_image: boolean
  comments_faster_saving_ux: boolean
  dt_code_connect_last_published_at_tooltip: boolean
  image_reduce_invalidation_time: boolean
  fb_redux_deleted_page_livestore: boolean
  fb_redux_shadow_reads_logging: boolean
  dsa_styles_variables_data_collection: boolean
  ds_populate_pub_for_type_libkey: boolean
  viewer_p3_fix: boolean
  managed_scene_graph_migrate: boolean
  livegraph_shim_widget_dark_read: boolean
  cmty_resource_likes_writes_enabled: boolean
  prototype_ai_magic_link_auto_select_tlfs: boolean
  ds_ssp_thumbnailing_render_text_style_directly: boolean
  ds_pubfile_bm_use_lib_key: boolean
  fullscreen_cache_shadow_rts: boolean
  ui3p_constraints_selection_fpl_migration: boolean
  sts_component_preview_frame: boolean
  preview_estimated_coterm_cost: boolean
  sts_passwords: boolean
  dsa_public_api: boolean
  figjam_sticky_clustering: boolean
  ui3_theme_cursors: boolean
  lab_inset_editor_default: boolean
  fullscreen_skip_overlay_grid_on_mobile: boolean
  viewer_cleanup_buffer_areas: boolean
  prototype_variable_eviction: boolean
  redirect_starter_team_loophole: boolean
  ce_sync_boolops_instances: boolean
  prototype_ai_magic_link_no_interactions_notif: boolean
  dse_lk_go_to_source: boolean
  ce_il_dynamic_strokes: boolean
  fullscreen_analytical_rendering_circular_shadows: boolean
  file_browser_ia_overhaul_m1_workspace_flag: boolean
  ds_qw_fix_style_field_truncation: boolean
  ce_tv_single_vecop_swt_hack: boolean
  viewer_smart_animate_underline: boolean
  account_switcher_menu_migration: boolean
  enable_make_code_view_for_dev_seat: boolean
  send_to_buzz_from_design: boolean
  edu_onboarding_grace_period: boolean
  ps_benchmark_upgrade_prevention: boolean
  ds_variable_props: boolean
  shared_fonts_use_freetype: boolean
  dt_code_connect_instance_pill_tooltip: boolean
  a11y_design_dom_mirror: boolean
  presets_on_cmty: boolean
  facet_search_empty_search_text: boolean
  branching_system_updates_copy: boolean
  font_index_240708: boolean
  redep_can_manage_file: boolean
  ce_move_selection_bypass_resize: boolean
  viewer_flicker_fix: boolean
  ce_offscreen_indicators_for_hovered_nodes: boolean
  ds_layout_text_no_dtd: boolean
  ds_fpl_updates_modal: boolean
  datadog_rum_allow_send: boolean
  all_workspaces_incremental_load_teams: boolean
  org_campfire_provisional_access_enabled: boolean
  sts_template_insert_fix: boolean
  figjam_fixjam_colors: boolean
  api_asset_search: boolean
  ce_font_metadata_mismatch: boolean
  ee_color_management_force_canvas: boolean
  ee_hb_separate_scripts: boolean
  figjam_navigation_mode: boolean
  prototype_set_mode_action: boolean
  undo_reserve_arrays: boolean
  gsod_fix: boolean
  image_track_invalid_images: boolean
  prototype_ai_magic_link_updated_gpt_output: boolean
  ds_node_copier_publish_variables: boolean
  lab_ui3_constraints_v2: boolean
  branching_variable_scope_in_review: boolean
  viewer_generate_compressed_textures: boolean
  campfire_developer_opt_in: boolean
  file_browser_ia_overhaul_m1_create_buttons: boolean
  eu_quality_week_collapse_layers_entrypoint: boolean
  load_images_from_load_document_rs_cmd: boolean
  ds_lk_moved_component_filename: boolean
  pencil_smooth_lines: boolean
  ce_il_grain: boolean
  fullscreen_send_client_rendered_message: boolean
  datadog_rum_track_long_task: boolean
  ds_remap_text_prop_style_change: boolean
  notif_revamp_flag: boolean
  ds_materialize_instance_when_resetting: boolean
  move_drafts_nudge_v2_recent_files_slim: boolean
  free_tier_refresh_launch: boolean
  cookie_banners_auth: boolean
  web_vitals_report: boolean
  ds_tmp_variable_props_round_trip: boolean
  comments_html_paste: boolean
  share_modal_loading_fixes: boolean
  dse_module_publish: boolean
  figmascope_server_side_redaction: boolean
  pro_templates_lg: boolean
  web_thumbnail_on_error_handling: boolean
  page_dividers_plugin_api: boolean
  org_file_export_setting: boolean
  ds_new_dev_mode_gradient_ux: boolean
  prototype_after_delay_bugfix: boolean
  figjam_ui3_color_palette_v2: boolean
  support_driven_org_ops: boolean
  ssp_stop_client_gen_thumb_generation: boolean
  fpl_button_alignment_inherit: boolean
  i18n_auth_nl_nl: boolean
  bake_auto_retry: boolean
  ds_extended_collections_resolution: boolean
  ce_node_name_better_increment: boolean
  edu_bootcamps_reverification: boolean
  requires_action_3ds_banner: boolean
  sunflower_swy_sort_options: boolean
  dev_mode_restricted_grace_period_string: boolean
  cmty_collections_v2_redirect: boolean
  fpl_variables_button_migration: boolean
  ui3_and_ai_welcome_modal: boolean
  redep_can_publish_to_hub: boolean
  redep_ds_shim_del_file_access: boolean
  mobile_reply_upsell: boolean
  prototype_ai_magic_link_v2_endpoint: boolean
  redep_file_import: boolean
  antiabuse_file_download_check: boolean
  org_merge_credit_workflow: boolean
  livegraph_computed_update: boolean
  show_unified_dynamic_preview_nux: boolean
  ce_il_vem_hop: boolean
  livegraph_change_optimistic_update_order: boolean
  fullscreen_actions_undo_redo_debug: boolean
  aip_content_fill_no_autolayout: boolean
  disable_free_trial_from_grace_period: boolean
  sites_beta: boolean
  viewer_ic_overlay_blurs: boolean
  ce_il_thumbnails: boolean
  ds_a11y_changes: boolean
  billing_page_updates_jul_2025_content_updates: boolean
  partnerstack_affiliate_figjam: boolean
  sprig_enabled: boolean
  first_draft_make_changes: boolean
  dt_figmadoc: boolean
  cmty_edit_hubfile_upload_media: boolean
  pro_team_business_names: boolean
  stripe_3ds_mandate: boolean
  ds_variables_skip_autodetach_symbolupdater: boolean
  generalize_consumption_paywall_modal_subtitle: boolean
  first_draft_make_changes_reopen: boolean
  first_draft_auto_select_kits: boolean
  ps_draft_migration_toasts: boolean
  redep_can_goto_source_asset: boolean
  prototype_sharing_broadening: boolean
  redep_has_pro_team_paid_status: boolean
  cmty_resource_use_writes_enabled: boolean
  lab_ui3_vector_ia: boolean
  derived_prop_containing_canvas: boolean
  branching_fix_apply: boolean
  ce_il_pattern: boolean
  cmty_footer_copyright_by_year: boolean
  cmty_resource_hub: boolean
  ext_clientstorage_increase: boolean
  cmty_redirect_empty_buzz_sites_editor_filter: boolean
  figjam_connector_snapping: boolean
  cmty_make_page_feed_shelf: boolean
  livegraph_shim_enabled: boolean
  vat_save_no: boolean
  viewer_render_corner_fix: boolean
  fuzzy_escape_regexp: boolean
  cmty_curated_tags_mapping: boolean
  variables_typography_family_style_mutator: boolean
  livegraph_shim_team_role_request_dark_read: boolean
  ce_il_var_width_points: boolean
  mindmap_cleanup: boolean
  figjam_quick_actions_v2: boolean
  folder_page_fix_tab_titles: boolean
  pro_block_unexpected_editors: boolean
  piper: boolean
  trackable: boolean
  org_checkout_min_seat_info_copy: boolean
  livegraph_check_incomplete_view: boolean
  ps_personal_draft_migration: boolean
  vat_save_au: boolean
  livegraph_client_reload_migration_dark_reads: boolean
  piper_grid_styles: boolean
  ds_lbu_create_variable_under_selection: boolean
  cmty_resource_save_endpoints_enabled: boolean
  cmty_file_publishing_rearch: boolean
  fullscreen_interrupt_render_groups: boolean
  cooper_template_picker_asset_search: boolean
  dt_eye_dropper: boolean
  ext_webhooks_endpoints_with_context: boolean
  implied_fake_fill_glass: boolean
  figjam_color_ramp_stroke: boolean
  widgets_in_figma_onboarding: boolean
  widgets_thumbnail_xr: boolean
  branching_disable_omit_dsd: boolean
  ds_variables_modal_skip_autocreate_collection: boolean
  statsig_aa_flag_plan_key_sinatra: boolean
  dse_lk_populate_other_used: boolean
  datadog_rum_track_resources: boolean
  cooper_template_discovery_via_cmty_hub: boolean
  bake_sb: boolean
  autofocus_edit_comment: boolean
  i18n_sample_string_sentry_errors: boolean
  livegraph_shim_user_full_read: boolean
  prototype_expr_float_compare: boolean
  in_product_help_and_learning: boolean
  ce_vector_no_stack_parent: boolean
  incr_clear_containing_page_queries: boolean
  ss_fpl_upgrade: boolean
  waf_timeout: boolean
  aip_text_tools_loading_shimmer: boolean
  coterm_modal_ui_improvements: boolean
  ai_ga: boolean
  cmty_collections_v2: boolean
  font_skip_inter: boolean
  unified_index_v3_figjam_dot_grid: boolean
  mobile_prompt_sidebar_modal: boolean
  share_options_fd: boolean
  font_index_use_kiwi: boolean
  pdr_trashed_section: boolean
  cmty_rdp_badge_update: boolean
  ds_granular_variable_dirtying: boolean
  incremental_loading_filter_queries_on_reconnect: boolean
  enable_mfv_wasm_preload: boolean
  ui3_dimensions_min_max: boolean
  ce_il_strokes: boolean
  locked_pro_team_revamp_ui_enabled: boolean
  new_invoices_ui_org_override: boolean
  viewer_load_images_from_figfile: boolean
  ce_pdf_export_transforms: boolean
  file_share_modal_virtualize: boolean
  cmty_release_plugin_row_v2: boolean
  team_page_folder_creation_live_updates: boolean
  piper_org_templates: boolean
  ds_gradient_variables: boolean
  ds_workspace_team_default_modes: boolean
  figjam_summarization: boolean
  datadog_rum_init: boolean
  redep_use_file_permission: boolean
  file_browser_url_id_validation_logging: boolean
  sts_auto_constraints_proximity: boolean
  cmty_profile_selection_cleanup: boolean
  ss_fpl_branching: boolean
  ds_log_instance_update_perf: boolean
  student_plan_no_hidden_teams: boolean
  figjam_ui3_color_palette: boolean
  ce_il_array: boolean
  ds_transfer_dropped_nivb_overrides: boolean
  ds_variable_props_migration_val: boolean
  file_browser_ia_overhaul_m1: boolean
  slides_pv_av_local: boolean
  bundle_seat_counts_for_billing_groups_table: boolean
  edu_plan_comparison: boolean
  ld_override_test_flag: boolean
  cooper_internal_publish_for_pro_teams: boolean
  livegraph_splay_realtime_views: boolean
  statsig_dependency_resolution: boolean
  ipad_combined_hand_select: boolean
  figjam_custom_opacity_stroke: boolean
  desktop_haptics_experimental: boolean
  figjam_3p_hardware_device: boolean
  integ_zoom_allow_extensions: boolean
  qa_ai_metering: boolean
  ds_vars_copy_properties_bindings: boolean
  variables_typography_cache_results: boolean
  cooper: boolean
  ce_pdf_srgb_color_profile: boolean
  image_discard_bitmap_after_upload: boolean
  qa_frecency_history_db_write: boolean
  cmty_i18n_publishing_errors: boolean
  force_client_reloads_fullscreen_banner: boolean
  branching_block_for_in_progress_merge: boolean
  use_webgpu_chromeos_jsl_override: boolean
  aip_content_fill_single: boolean
  ui3_selection_actions_improvements: boolean
  datadog_rum_fullscreen: boolean
  ce_il_noise_effect: boolean
  eu_fpl_search_result_chips: boolean
  widget_link_encode_uri_component: boolean
  ce_mixed_list_spacing: boolean
  allow_bad_kiwi_bool: boolean
  fullscreen_animations_z_index: boolean
  livestore_use_file_migration: boolean
  replica_api_roles: boolean
  vat_save_sg: boolean
  desktop_fonts_via_utility_process: boolean
  embedkit_v2: boolean
  ps_starter_only_onboarding_translation: boolean
  piper_style_libraries: boolean
  ps_move_modal_new_team_creation: boolean
  ce_svg_support_more_gradient_exports: boolean
  ce_tv_fpl_icon_button: boolean
  cmty_resource_save_writes_enabled: boolean
  waf_dont_await: boolean
  ce_il_prog_blur: boolean
  billing_org_invoice_uncollectible_status: boolean
  viewer_offscreen_bg_blurs: boolean
  ext_plugin_notify_run_on_dequeue: boolean
  ds_variable_prop_creation_fix: boolean
  slides_iframe_embedded_prototypes_improvements: boolean
  unsplash_service_enabled: boolean
  cookie_banners_community: boolean
  ce_mixed_text_spacing: boolean
  ds_zombie_styles_fixes: boolean
  cmty_rdp_creator_nudge_email: boolean
  skip_true_ups_by_license: boolean
  fb_redux_drafts_livestore: boolean
  dsa_styles_variables_ui: boolean
  ds_variable_props_unified_ui: boolean
  remove_access_row_in_folder_creation: boolean
  sts_auto_constraints: boolean
  billing_coterm_cancellation_aligned_enabled: boolean
  viewer_use_compressed_textures: boolean
  tiles_view_optimize_active_file_users: boolean
  livegraph_no_preload_on_reconnect: boolean
  new_invoices_ui_team_override: boolean
  ce_tv_nonzero_text: boolean
  gen_0_nux_team_cache: boolean
  file_browser_ia_overhaul_m1_omnicreate_flag: boolean
  gpu_system_cleanup_fix: boolean
  buzz_progressive_bulk_create: boolean
  figjam_summarization_ui2: boolean
  ce_match_hidden: boolean
  ds_instance_swap_use_ai_results: boolean
  livegraph_client_reload_migration_full_reads: boolean
  piper_present_summary: boolean
  embedkit_v2_waf: boolean
  cmty_category_page_migration: boolean
  enable_cookies_screen_rollout: boolean
  plugin_publish_document_access: boolean
  ce_tv_fpl_toggle_button: boolean
  sts_document_settings: boolean
  livefish: boolean
  file_view_history: boolean
  additional_rum_context_logging: boolean
  ce_tv_grid: boolean
  ds_write_ag_to_text_style: boolean
  stop_rendering_tiles_view_loading_spinner: boolean
  prototype_code_presets: boolean
  contract_start_banner_renewal_copy: boolean
  fpl_equate_disabled_and_aria_disabled: boolean
  ce_il_brush_tool: boolean
  aip_image_launch_april_2025: boolean
  contact_sales_form_uses_plan: boolean
  plan_switcher_menu_migration: boolean
  ui3p_has_labels_context: boolean
  antispam_arkose: boolean
  qa_search_frecency: boolean
  ds_dirty_all_states_in_group: boolean
  prototype_hide_matching_noodles: boolean
  variables_paste_remap: boolean
  admin_billing: boolean
  figjam_inline_menu_organize: boolean
  figment_rate_limit_events: boolean
  fullscreen_flanimations: boolean
  org_admin_lg_dark_read2: boolean
  password_file_show_thumbnail: boolean
  ds_variables_set_default_mode: boolean
  redep_open_file_thinning: boolean
  redep_autosave_can_edit: boolean
  ce_dont_clear_layout_data: boolean
  dse_instance_swapper_ui3: boolean
  livestore_gc_atom_family: boolean
  qa_frecency_recents_sync: boolean
  ds_variables_publish_preserve_guid: boolean
  qa_frecency_history_db_read: boolean
  ds_variable_props_binding_vars: boolean
  migration_no_module_in_design_validate: boolean
  google_tag_manager_in_more_auth_entries: boolean
  design_to_react: boolean
  ds_qw_copy_duplicate_styles: boolean
  dse_library_modal_perf: boolean
  cms_duplication: boolean
  ui3p_flyout_menu_fpl_migration: boolean
  native_toolbar_diagram_shapes: boolean
  ce_ban_nans_from_stacking: boolean
  ce_multiplayer_text_if_logging: boolean
  ds_component_props_mp_repair: boolean
  crash_on_bindings_exception: boolean
  emoji_15_upgrade: boolean
  variables_typography_scopes: boolean
  prototype_visual_bell_copy_change: boolean
  file_browser_workspace_items_view: boolean
  fullscreen_page_view_inversion: boolean
  smartanimate_autolayout_ordering_fix: boolean
  ds_variable_props_bug_fix: boolean
  ds_pubfile_go_to_symbol_sg: boolean
  optimize_file_metadata_ffs: boolean
  ds_fpl_publishing_modal: boolean
  cmty_remove_profile_reducer: boolean
  ds_pubfile_is_sub_symbol_sg: boolean
  fpl_accessible_areas_text: boolean
  vat_tax_collection_ph: boolean
  user_spaces_caching: boolean
  dt_litmus_comments: boolean
  dse_component_prop_text_style_transfer: boolean
  ce_textlinedata_styleid: boolean
  ee_smarter_eye_dropper: boolean
  account_type_requests_async: boolean
  api_contacts_v2_at_mentions: boolean
  omnicreate_slides_beta_tag: boolean
  redep_can_create_file: boolean
  tou_pv2_deny_edits_for_restricted_drafts_folder: boolean
  ds_lbu_variable_tooltips: boolean
  fc_general: boolean
  glcontext_error_improvements: boolean
  ui3_layers_panel_waitlist: boolean
  force_client_reloads_v2_logging: boolean
  ce_il_prog_blur_ui: boolean
  datadog_rum_selected_view: boolean
  geometry_cache_updater: boolean
  branching_update_status_lg: boolean
  fullscreen_page_reorder_perf_fix: boolean
  show_tooltips_in_seat_choice_step: boolean
  eu_fpl_migration_menu: boolean
  figjam_page_picker_a11y: boolean
  fullscreen_rt_diff_group_fix: boolean
  i18n_auth_it_it: boolean
  partnerstack_affiliate_upgrade: boolean
  edu_offboarding_experience: boolean
  ce_copy_font_name: boolean
  ce_max_lines_adjust: boolean
  ce_virtualized_color_styles: boolean
  ai_generate_specific_prompts: boolean
  desktop_font_reload_on_focus: boolean
  dt_code_connect_ui_update: boolean
  billing_org_currency: boolean
  edit_scope_field_list: boolean
  style_obs_unexpanded_sublayers: boolean
  branching_remove_system_updates: boolean
  cmty_category_page_migration_lo: boolean
  community_category_filter__by: boolean
  fullscreen_save_copy_zstd: boolean
  cmty_preset_modal_revised_copy: boolean
  billing_org_billable_events: boolean
  should_show_published_sites_warning: boolean
  ds_qw_variable_and_style_visibility: boolean
  ds_qw_fix_variable_details_tab_persist: boolean
  order_form_billing_terms_banner: boolean
  ce_tv_fpl_export_settings: boolean
  slides_mobile_web_hyperlink: boolean
  eai_auto_rename_layers: boolean
  unified_index_v3_exp_default: boolean
  file_browser_enable_mweb: boolean
  lg_perms_folder_list_card_can_edit_folder: boolean
  ps_draft_move_modal: boolean
  embedkit_v2_enforce_embed_origins: boolean
  lab_ui3_september_launch: boolean
  framebuffer_refactor_viewer: boolean
  vat_save_pe: boolean
  cmty_profile_resource_platform: boolean
  fc_plan_enabled: boolean
  fpl_share_modal_hover_fix: boolean
  allow_code_layer_paste: boolean
  open_plan_invoices_api_in_web: boolean
  preload_community_iframe_on_timer: boolean
  ds_variables_authoring_resize: boolean
  variables: boolean
  frontend_sentry_cpp_location: boolean
  jamgpt: boolean
  prototype_responsive_viewer: boolean
  sc_team_experience_orgs_10: boolean
  livestore_normalization_rearch: boolean
  dt_edit_info_allow_list: boolean
  vat_save_ke: boolean
  redep_tile_action_can_view: boolean
  redep_uurmopl: boolean
  ce_transformers_move_selection: boolean
  ce_tv_fpl_button: boolean
  ss_fpl_multiplayer: boolean
  prototype_forward_transient_state: boolean
  ui3_left_panel_selection_height: boolean
  ui3_mixin_changes: boolean
  eu_fpl_migration_dialog_trigger_button: boolean
  aip_content_fill_duplicate_trigger: boolean
  plan_level_file_export_controls: boolean
  exp_pro_vr_migrate_org: boolean
  cmty_deprecate_browse_as_admin: boolean
  ce_page_separators: boolean
  figjam_clustering_layout_v2: boolean
  navigation_mode_scroll_to_pref: boolean
  prototype_multi_path_paywall: boolean
  comments_faster_saving_ux_v2: boolean
  render_tree_diff_page_switch: boolean
  vbuffer_discard_after_upload: boolean
  frag_search_scale_image: boolean
  qa_v2_modality_management: boolean
  cmty_category_redirect_logged_out: boolean
  ds_prevent_nivb_oscillation: boolean
  livestore_redux_sub_immediate: boolean
  ce_skip_pingfangui_font: boolean
  ce_support_export_of_long_names: boolean
  ds_pubplat: boolean
  exp_locked_pro_team_revamp_ui_ja: boolean
  set_is_loading_variables: boolean
  slides_starter_team_design_toggle: boolean
  product_trial_create: boolean
  ce_il_edit_info: boolean
  aip_content_fill: boolean
  folder_preview_file_pagination: boolean
  file_move_show_all_resources: boolean
  ce_relative_xywh: boolean
  dirty_single_state_during_copy: boolean
  ds_create_override_invalid_prop_refs: boolean
  multiplayer_ds_style_type: boolean
  viewer_context_loss_fix: boolean
  lab_minimize_ui_default: boolean
  fullscreen_clamp_luminosity_blend: boolean
  ce_duplicate_rotation: boolean
  slides_tone_dial_undo: boolean
  ce_small_vem_improvements: boolean
  feature_flag_proxy: boolean
  one_click_approve_on_recents: boolean
  fullscreen_premoderngpu_mobile: boolean
  figma_basics_ja: boolean
  ds_variable_props_binding: boolean
  livegraph_file_can_access: boolean
  file_browser_ia_overhaul_m1_cards_flag: boolean
  billing_new_cancel_org_billing_period_tool: boolean
  ds_ssp_thumbnailing_client_prep_wait_extra_frames: boolean
  new_annual_seats_ctas: boolean
  filter_pro_plus_sites_make_web: boolean
  sts_code_authoring_by_plan: boolean
  eu_fpl_styles_header_menu: boolean
  ce_il_scatter_size_jitter: boolean
  add_latam_check_to_panel_subjects: boolean
  ui3p_community_prototype_ui3: boolean
  dependency_event_bus_modules: boolean
  shared_container_setting_perm_v2: boolean
  dse_min_max_plugin_behavior: boolean
  edu_offboarding_bootcamps: boolean
  ce_no_nan_size_overrides: boolean
  ds_variables_relax_modes: boolean
  dt_code_connect_inline_instances: boolean
  cmty_collections_v2_figjam_ai: boolean
  org_admin_livegraph: boolean
  sc_team_experience_teams_100: boolean
  ds_force_layout_instance_sublayers: boolean
  desktop_unified_index_v3_rollout: boolean
  ip_restrictions_livegraph_auth_failure: boolean
  figjam_ai_piper_markdown_parser: boolean
  ce_custom_text_decorations: boolean
  fullscreen_render_layers_al: boolean
  i18n_wrapper_element: boolean
  qa_allow_default_tab: boolean
  sts_cpp_asset_generation: boolean
  ds_gradient_stop_context_menu: boolean
  fpl_a11y_chip: boolean
  tv_unset_fill_copy: boolean
  prototype_entry_point_wrapper: boolean
  cmty_category_page_shelf_boost: boolean
  unified_index_v3_endpoint: boolean
  ds_remove_redux_library_status: boolean
  gradient_tool_improvements: boolean
  prototype_fix_sections_ifl: boolean
  cmty_disable_vat_for_india: boolean
  plugins_parallelize_load_sandbox: boolean
  use_webgl2: boolean
  vbuffer_discard_bytes_viewer: boolean
  livegraph_lock_clients_migration_dark_reads: boolean
  cmty_redirect_plugins_pathname: boolean
  edu_reject_page_copy_updates: boolean
  ds_lbu_inputs_improvements: boolean
  first_draft_relaunch: boolean
  ds_skip_override_for_variable_detach: boolean
  skip_lg_shim_in_bell_view: boolean
  max_connection_load_fallback: boolean
  livegraph_splay_loaded_views: boolean
  vat_save_th: boolean
  cmty_make_publishing: boolean
  billing_page_updates_jul_2025: boolean
  prototype_async_font_loading: boolean
  block_double_logging_upgrades: boolean
  block_select_view_file_creation: boolean
  figjam_ngima_stickers: boolean
  figjam_summarization_nudge: boolean
  fb_redux_file_move_helpers: boolean
  fullscreen_skip_shadows_bg_blur: boolean
  file_creation_thumbnails_on_recents: boolean
  prototype_api_improvements_2024: boolean
  piper_align_to_layout_grid: boolean
  aip_text_undo_midstream_fix: boolean
  new_invoices_ui: boolean
  ds_prop_ref_fix: boolean
  ds_write_dsd_different_td: boolean
  viewer_sticky_scrolling_background_blurs: boolean
  enable_plan_key_targeting_in_web_and_sinatra: boolean
  bake: boolean
  ui3p_no_hscroll_measurement_node: boolean
  ce_il_la_tool: boolean
  ds_lk_stop_writing_pubfile: boolean
  realtime_disable_websocket_connection: boolean
  bake_ds_import: boolean
  livegraph_user_profile_dark_read: boolean
  dependency_event_bus_cms: boolean
  ce_auto_content: boolean
  prototype_ai_magic_link: boolean
  figjam_text_to_visual: boolean
  branching_request_close: boolean
  ce_multi_edit_inproduct_tooltips: boolean
  library_subs_on_livegraph: boolean
  use_webgl2_viewer: boolean
  profile_page_lg_permissions: boolean
  multi_stack_auto_layout_sites: boolean
  prototype_remove_usi: boolean
  first_draft_new_prompt_pills: boolean
  notif_file_url_cleanup: boolean
  dse_fpl_wave_1: boolean
  ce_transformers_scale_selection: boolean
  ds_lk_return_to_instance: boolean
  cmty_remove_hubfiles_plugins_reducer: boolean
  code_presets_1p_from_dynamic_config: boolean
  fullscreen_non_clipping_shadow_bounds: boolean
  figjam_embeds_v1: boolean
  void_and_reissue_admin_button: boolean
  vbuffer_handle_upload_overlap: boolean
  ds_lbu_variable_modal_copy_paste: boolean
  ds_lbu_variable_picker_hover_groupname: boolean
  branching_variable_scope_in_conflicts: boolean
  ui3_action_button_prevent_default: boolean
  aip_make_images_one_request_only: boolean
  aip_red_orchids: boolean
  fullscreen_analytical_rendering: boolean
  i18n_auth_pl_pl: boolean
  ce_multiplayer_text_logging: boolean
  ce_paste_replace_styles: boolean
  post_from_file_modal_lg_perms: boolean
  integ_zoom_allow_file_switching: boolean
  fb_redux_fldr_ctx_menu_own_perms: boolean
  notif_async_refresh_bell: boolean
  ext_iframe_ui3: boolean
  ds_incompatible_modes_page_fix: boolean
  reset_renderers_page_switch: boolean
  ds_node_copier_publish_styles: boolean
  branch_create_remove_dsd_cleanup: boolean
  force_client_reloads_v2: boolean
  fpl_a11y_grid: boolean
  ext_docs_deprecate_file_enum_routes: boolean
  vat_tax_collection_th: boolean
  i18n_sample_string_datadog: boolean
  unified_index_v3_default: boolean
  variables_paste_remap_popup: boolean
  record_first_document_frame: boolean
  thea: boolean
  limited_plan_spaces: boolean
  ss_fpl_memory: boolean
  notif_settings_button: boolean
  billing_disable_coterm_updates_unpaid_invoices: boolean
  ext_plugindata_limit_shadow_test: boolean
  viewer_mobile_half_tile_size: boolean
  ce_cmd_f_padding: boolean
  ds_auto_repair_override_keys: boolean
  figjam_text_to_visual_mindmap: boolean
  fpl_dialog_trigger: boolean
  dev_mode_org_pinned_plugins_ent: boolean
  sc_team_project_in_new_tab: boolean
  document_colors_by_page: boolean
  ce_al_track_msal_duration: boolean
  fullscreen_disable_angle_dx9_bug_test: boolean
  cmty_publish_modal_ui3_redesign: boolean
  dt_code_connect_hide_beta_badge: boolean
  qa_universal_feedback_buttons: boolean
  tsmer_edit_frame_fix: boolean
  livestore_batch_normalized: boolean
  prototype_modal_resize: boolean
  hub_file_info_tooltip: boolean
  cmty_rdp_resource_platform: boolean
  plugins_presigned_post_img_urls: boolean
  cmty_feed_resource_platform: boolean
  tou_plan_user_paid_status_on_file: boolean
  billing_enable_no_tos_org_updates_on_renewal: boolean
  drafts_page_viewbar_slim_lg: boolean
  livegraph_shim_user_team_flag_full_read: boolean
  ds_qw_fix_variable_modal_drag: boolean
  fc_plan_connection_count_lr: boolean
  ce_tv_arl_dev_mode_fractions: boolean
  cmty_thumbnail_16x9_ar: boolean
  ce_microsoft_ime_fix: boolean
  ds_test_presigned_post: boolean
  tsmer_flanimations: boolean
  figjam_summary_nudge_too_many_tokens: boolean
  livegraph_client_reload_migration_disable_realtime: boolean
  mfa_for_guests: boolean
  fullscreen_animations_prime: boolean
  dsa_styles_variables_api: boolean
  prototype_transition_enforcer_loaded_page: boolean
  ce_il_rotation: boolean
  cmty_sites_template_discovery: boolean
  livegraph_client_side_optional_check: boolean
  autosave_dont_wait_for_sync: boolean
  can_stage_changes: boolean
  aip_content_fill_prompt_repeated: boolean
  ce_il_pen_palette: boolean
  dse_bubbled_props_descendant_reactive: boolean
  dse_missing_fonts_dtd_scaling: boolean
  ce_multi_edit_groups: boolean
  ee_text_styles_no_detach: boolean
  sites: boolean
  unified_index_v3_exp: boolean
  dse_cmty_user_subs: boolean
  ds_use_improved_materializer: boolean
  livegraph_lock_clients_migration_full_reads: boolean
  ui3_min_max_string: boolean
  cmty_home_page_redirect: boolean
  members_table_flyout_dev: boolean
  web_frame_preset_quick_add: boolean
  dt_vscode_ready_for_dev: boolean
  first_draft_surgical_edits: boolean
  plugins_zod_validation_rollout: boolean
  ds_variables_modal_fpl_migration: boolean
  ds_td_source_node_resolution: boolean
  ds_ssp_css_thumbnailing: boolean
  curator_use_experiment_check_ref: boolean
  xrv_api_arkose_is_on: boolean
  campfire_provisional_access_enabled: boolean
  fpl_menu_under_curator: boolean
  viewer_strict_null_magicmove: boolean
  ff_async_upgrade_request_approvals: boolean
  seat_billing_interval_people_tab: boolean
  figmascope_bookmarks: boolean
  exp_pro_vr_double_write_org: boolean
  dse_calc_counts_from_library: boolean
  variables_nested_variant_props: boolean
  google_federated_cm: boolean
  auto_auto_layout: boolean
  desktop_quickreply_filebrowser: boolean
  livegraph_shim_user_dark_read: boolean
  branching_dpl: boolean
  ps_trashed_drafts_enabled: boolean
  vat_save_my: boolean
  livegraph_lock_clients_migration_logging: boolean
  piper_text_style_design: boolean
  billing_emails_tab_in_admin: boolean
  datadog_rum_trace_header: boolean
  web_lbu_frame_presets: boolean
  qa_autofocus_toasts: boolean
  fpl_hide_missing_alert: boolean
  logged_out_pages_brand_color_banner: boolean
  product_trials_lg: boolean
  ssp_extract_img_thumbnail_hashes_only: boolean
  version_updaters_run_last: boolean
  ds_ssp_thumbnailing_auto_resize_text_style: boolean
  sts_code_bump_library_versions: boolean
  bake_plan_enabled: boolean
  cmty_make_discovery: boolean
  sts_a11y_bypass_link_setting: boolean
  show_team_account_credit_banner: boolean
  folder_shim_time_filter: boolean
  periodic_team_file_count_repair: boolean
  ip_allowlist_gate: boolean
  qa_text_features: boolean
  ds_materialize_in_subtree_match: boolean
  piper_org_templates_publish: boolean
  fb_redux_folder_page_view_hdr: boolean
  can_see_sds_in_cmty: boolean
  tsmer_edit_scopes: boolean
  redep_rm_uccforu: boolean
  lab_dev_mode_callout: boolean
  livegraph_shim_wl_plugin_dark_read: boolean
  recognize_pre_tax_amount_avalara: boolean
  fullscreen_log_astc_compatibility: boolean
  livegraph_shim_team_role_request_full_read: boolean
  livegraph_shim_font_file_dark_read: boolean
  dse_lk_realtime_lib_subs: boolean
  ce_resize_second_pass_positioning: boolean
  use_short_exposure_logging_delay: boolean
  billing_reset_org_billing_period: boolean
  viewer_retry_webgl_init: boolean
  ad_branded_shapes_m1: boolean
  ds_qw_misc_ui_bugfixes: boolean
  fpl_a11y_grid_part_2: boolean
  logged_out_dev_mode_demo_file: boolean
  woff_subset_v2: boolean
  notif_new_actionable_api: boolean
  alternate_payments: boolean
  livegraph_recent_files_full_read: boolean
  sc_open_team_deprecation: boolean
  ds_fix_cut_styles_dangling_vars: boolean
  cmty_collections_v2_category_redirect: boolean
  first_draft_regions_prompt: boolean
  chrome_third_party_cookie_origin_trial: boolean
  ui3_layers_panel: boolean
  redep_can_manage_repo: boolean
  framebuffer_refactor: boolean
  fullscreen_dont_export_blurred_background: boolean
  cmty_visual_assets: boolean
  cmty_visual_assets_nux: boolean
  aip_undo_fixes_rollout: boolean
  eu_fpl_migration_endpoint_swap_button: boolean
  disable_page_switch_spinner: boolean
  ce_il_root: boolean
  ext_plugindata_limit_enabled: boolean
  contentful_paint_performance_monitor: boolean
  eu_unescape_html_on_paste: boolean
  ce_il_vem_move: boolean
  dependency_event_bus_responsive_sets: boolean
  ui3p_enable_ui3_for_less_common_paths: boolean
  fix_overflow_menu_display: boolean
  last_upgraded_at_backfill: boolean
  ce_scale_tool_v2: boolean
  ds_block_unpublished_symbol_reqs: boolean
  defer_invisible_children: boolean
  sc_team_experience_orgs_100: boolean
  starter_team_upsell_ftr_lg_perms: boolean
  ce_al_experiments_on: boolean
  dt_code_connect_preset_libraries: boolean
  prototype_ai_magic_link_new_prompt: boolean
  index_v3_enabled: boolean
  ds_update_batching_ui: boolean
  ce_auto_fill_full_width_children_on_resize: boolean
  first_draft_make_changes_errors: boolean
  use_scene_selector_deep_equals: boolean
  eu_fpl_migration_modal: boolean
  eu_fpl_migration_button: boolean
  ds_improved_text_truncation: boolean
  livegraph_shim_user_team_flag_dark_read: boolean
  ext_enable_dev_mode_status_webhook: boolean
  bake_monetization_plan: boolean
  first_draft_native: boolean
  dt_code_connect_org_plus: boolean
  ce_preserve_rich_text_whitespace: boolean
  ds_reset_deleted_state_default: boolean
  ce_font_network_status_ui: boolean
  viewer_apply_sticky_position_to_vpbs: boolean
  desktop_new_tab_new_ui: boolean
  plugins_skip_install_status_filter: boolean
  fpl_a11y_accessible_areas_fullscreen_shortcuts: boolean
  node_type_in_url: boolean
  viewer_double_tile_composition_limit: boolean
  tou_pv2_deny_create_file: boolean
  livegraph_shim_wl_plugin_full_read: boolean
  redep_must_upgrade_to_share_draft: boolean
  dev_mode_starter_trial_disable_entry: boolean
  viewer_interactive_component_blurs: boolean
  cmty_tag_page_deprecation_redirect: boolean
  ce_tv_typing_shortcuts: boolean
  mirror_restarts: boolean
  replace_account_credit_banner: boolean
  upcoming_invoice_improvements: boolean
  scatter_brush_instanced_rendering: boolean
  rest_api_require_expiration_on_pat_creation: boolean
  kiwi_fix_mempool: boolean
  livegraph_user_profile_full_read: boolean
  viewer_ssaa_scissor_fix: boolean
  bake_ds_import_plan_enabled: boolean
  enable_code_chat_soft_limit_banner_for_plan: boolean
  figjam_ai_model_migration: boolean
  cmty_category_redirect_logged_in: boolean
  jubilee_enabled: boolean
  redep_request_edit_view: boolean
  warn_large_deletion: boolean
  livegraph_shim_widget_full_read: boolean
  livegraph_shim_user_edu_grace_period_dark_read: boolean
  livegraph_shim_user_edu_grace_period_full_read: boolean
  log_webgpu_compatibility: boolean
  ds_pubfile_comes_from_file: boolean
  viewer_sticky_scrolling_blend_ctg: boolean
  aip_flower_garden_visual_hash: boolean
  webgpu_webgl_url_param: boolean
  notif_new_read_api: boolean
  cmty_plugins_page: boolean
  fb_page_header_fpl_menu: boolean
  partnerstack_affiliate: boolean
  sc_team_experience_enabled: boolean
  ce_tv_fill_hug_suggest: boolean
  campfire_cart: boolean
  desktop_multi_updates: boolean
  branching_variable_alias_fix: boolean
  exp_proto_rename_conditional: boolean
  ce_il_m_vem: boolean
  billing_period_org_contract_quantity_ui: boolean
  enforce_max_texture_size: boolean
  cmty_remove_org_reducer: boolean
  sts_animate_rotation: boolean
  eu_fpl_migration_button_2: boolean
  eu_fpl_migration_select: boolean
  eu_fpl_variable_set_picker: boolean
  livegraph_unstick_on_refresh: boolean
  prototype_preload_offline: boolean
  autosave_fix_phase_remove: boolean
  desktop_live_updates_at_mention: boolean
  piper_cmty_discovery: boolean
  tsmer_flanimations_overlay_renderer_delay: boolean
  qa_user_additional_feedback: boolean
  fullscreen_transfer_overlay_grid_tiles: boolean
  cmty_expand_extension_m10n: boolean
  fullscreen_page_view_refactor: boolean
  allow_starter_ui_toggle: boolean
  ds_skip_text_layout_observer_for_instances: boolean
  redep_activation_get_target_folder_id: boolean
  billing_org_admin_void_invoice_credit: boolean
  ce_tv_fpl_segmented_control: boolean
  skip_dirty_changed_variable_instances: boolean
  slides_toggle_to_pv2: boolean
  cmty_remove_profile_reducers: boolean
  cmty_search_page_migration: boolean
  variables_overflow_fix: boolean
  billing_remove_sales_start_backdating: boolean
  ds_dont_multi_dirty_symbols: boolean
  file_browser_enable_ui3: boolean
  ce_flyout_pointer_up_enabled: boolean
  ce_scale_tool_skew: boolean
  ee_unsanitized_png: boolean
  jamgpt_recents_pin: boolean
  dt_code_connect_js_iframe: boolean
  figjam_inline_menu_organize_aria: boolean
  file_browser_thumbnails_16_by_9: boolean
  vat_save_eg: boolean
  write_to_node_status_table: boolean
  prototype_deferred_updates: boolean
  ps_benchmark_favorites_data_client_side_fix: boolean
  image_log_timing: boolean
  ds_lbu_variable_modal_tab_stops: boolean
  cmty_resource_use_endpoints_enabled: boolean
  ce_tv_fpl_checkbox: boolean
  fragment_search_tweaks: boolean
  cmty_visual_assets_cc: boolean
  branching_no_fine_grain: boolean
  ce_il_sb_tool: boolean
  dependency_event_bus_cc_render: boolean
  fullscreen_uniform_buffer_pool: boolean
  sts_code_authoring_endpoint_enabled: boolean
  ds_gp_dependency_event_bus_opts: boolean
  desktop_isolate_metadata: boolean
  vbuffer_free_unused: boolean
  fb_redux_file_actions_can_create: boolean
  embedkit_v2_auth: boolean
  asset_suggestions_require_completed_backfill: boolean
  prototype_fix_scrolling_hotspots: boolean
  ce_tv_fpl_dialog_trigger_button: boolean
  chrome_os_app_install_button: boolean
  desktop_font_reload_on_focus_ux: boolean
  vat_save_tz: boolean
  tou_pv2_deny_repo_edits_for_restricted_drafts: boolean
  ds_lk_devmode_asset_panel: boolean
  ds_lk_bindings_latest_published: boolean
  billing_remove_surplus_seats_for_ela: boolean
  sts_code_soft_delete_convert: boolean
  team_campfire_provisional_access_enabled: boolean
  ds_skip_inherit_overrides: boolean
  observability_client: boolean
  bake_declaude: boolean
  presets_baseline: boolean
  ds_variables_strokes: boolean
  editor_zero_width_input: boolean
  ee_color_management_circle_p3: boolean
  share_modal_async_autocomplete: boolean
  upgrade_section_lg_perms: boolean
  fullscreen_remove_empty_atlases: boolean
  use_updated_org_suspension_modal: boolean
  ce_view_only_undo: boolean
  ce_node_position_properties: boolean
  key_nav_faux_focus_sync: boolean
  lab_show_right_panel_default: boolean
  delay_status_change_enrollment: boolean
  sts_code: boolean
  dt_code_connect_lk_migration: boolean
  reset_action_state_on_ui3_toggle_killswitch: boolean
  piper_templates_new_publish_entry_points: boolean
  ce_skip_misnamed_font: boolean
  ds_log_dropped_nivb_overrides: boolean
  tou_web_limited_plan: boolean
  aip_flower_garden_rerank: boolean
  ds_pubfile_component_counts: boolean
  ad_curved_connectors: boolean
  use_registers_with_staged_value: boolean
  sts_runtime_error_reporting: boolean
  ds_scaled_override_cleanup: boolean
  ui3_selection_actions_refactor_in_design: boolean
  statsig_aa_flag_web_file_tile: boolean
  figjam_3p_hardware_integration: boolean
  ps_benchmark: boolean
  fb_redux_tiles_view_del_fbk: boolean
  ce_al_predict_use_msal: boolean
  fullscreen_rendertree_empty_groups_optimization: boolean
  omnicreate_button: boolean
  fpl_accessible_areas_for_design: boolean
  managed_scene_graph: boolean
  viewer_no_inf_uniforms: boolean
  qa_recently_used_db_read: boolean
  fragment_search_selection_suggest: boolean
  memoize_readpixels: boolean
  dse_lk_published_components: boolean
  dse_lk_filter_recents: boolean
  fullscreen_rt_group_child_equality: boolean
  dse_lk_figjam_default_libs: boolean
  fpl_select_autocomplete: boolean
  ce_il_effects_ui: boolean
  webgpu_free_memory: boolean
  ui3p_variable_pill_a11y: boolean
  strip_reserved_characters_from_file_slug: boolean
  ce_il_api_docs: boolean
  eu_fpl_migration_interactive_panel: boolean
  buzz_template_picker_cmty_shelves: boolean
  asset_suggestions: boolean
  ce_paste_stack_absolute_pos: boolean
  fullscreen_premoderngpu: boolean
  share_options_fj: boolean
  viewer_no_vbuffer_byte_copy: boolean
  viewer_max_transform_fix: boolean
  enable_document_titles_for_login_sign_up: boolean
  ce_tv_fpl_modal: boolean
  ui3_property_labels_discoverability_improvements: boolean
  prototype_ai_magic_link_remove_narrow_selection: boolean
  antiabuse_enable_magic_code: boolean
  datadog_rum_modal_shown_action: boolean
  ds_ssp_thumbnailing_for_text_styles_client_prep: boolean
  billing_update_default_pm_on_reactivation: boolean
  productionized_dev_mode_one_click_request: boolean
  collaborative_source_code_client_enabled: boolean
  dse_lk_subscribed_items: boolean
  livegraph_disable_ping_on_visibility: boolean
  ui3p_sunset_ui2_banner: boolean
}

export interface CursorBot {
  ginger_formatted_text_hub_file_id: string
  ginger_hub_file_id: string
  ginger_no_text_hub_file_id: string
  product_page_hub_file_id: string
}

export interface DictionaryURLByLocale {
  'ja': EsEsClass
  'es-es': EsEsClass
  'es-la': EsEsClass
  'ko-kr': EsEsClass
  'pt-br': EsEsClass
}

export interface EsEsClass {
  'figma-web': string
  'figma-db': string
}

export interface DynamicConfigs {
  redux_deprecation: ReduxDeprecation
  datadog_rum_sample_config: DatadogRumSampleConfig
  provisional_access_refresh_interval: ProvisionalAccessRefreshInterval
  tou_current_user_plan_migrator_config: TouMigratorConfig
  tou_current_plan_user_migrator_config: TouMigratorConfig
  migrate_team_data_to_livegraph: MigrateTeamDataToLivegraph
  webgpu_sync_readback_config: WebgpuSyncReadbackConfig
  webgpu_platform_device_config: WebgpuPlatformDeviceConfig
  plugins_inactive_config: PluginsInactiveConfig
  sts_max_single_video_bytes: StsMaxSingleVideoBytes
  peter_test: FeatureFlagRules
  ai_org_use_llama: { [key: string]: string }
  dse_slots_alpha_library_keys: FeatureFlagRules
  tou_lg_migrator_config: TouMigratorConfig
  tos_modal_nux_delay: TosModalNuxDelay
  make_edits_configuration: MakeEditsConfiguration
  tos_required_launch_ts: TosRequiredLaunchTs
  dt_mcp_eligible_for_new_ui_date: DtMCPEligibleForNewUIDate
  days_allowed_to_see_nux: DaysAllowedToSeeNux
  dt_ccv2_base_path: FeatureFlagRules
  livegraph_client_config: LivegraphClientConfig
  datadog_rum_trace_config: DatadogRumTraceConfig
  datadog_rum_plan_rollout_config: DatadogRumPlanRolloutConfig
  webgl_fallback_triggers: DynamicConfigsWebglFallbackTriggers
  make_large_paste_threshold: MakeLargePasteThreshold
  sts_max_total_video_bytes: StsMaxTotalVideoBytes
  make_edits_1p_description: MakeEdits1PDescription
  ai_metering_credits_per_feature: AIMeteringCreditsPerFeature
}

export interface AIMeteringCreditsPerFeature {
  'remove-background': FigmakeClass
  'magic-link': FigmakeClass
  'first-draft': FigmakeClass
  'first-draft-make-changes': FigmakeClass
  'figmake': FigmakeClass
  'living-designs': FigmakeClass
  'upscale-image': FigmakeClass
  'generate-image': GenerateImageClass
  'edit-image': EditImageClass
}

export interface EditImageClass {
  'gemini-2.0-flash-preview-image-generation': number
  'gpt-image-1': number
}

export interface FigmakeClass {
  default: number
}

export interface GenerateImageClass {
  'amazon.titan-image-generator-v1:0': number
  'amazon.titan-image-generator-v2:0': number
  'imagen-3.0-generate-001': number
  'gpt-image-1': number
}

export interface DatadogRumPlanRolloutConfig {
  enterprise: Employee
  org: Employee
  pro: Employee
  starter: Employee
  employee: Employee
  fallback: Employee
}

export interface Employee {
  rolloutPercent: number
  sessionSampleRate: number
  replaySampleRate?: number
  traceSampleRate?: number
  maxGlobalSendEventsPerSecond: number
}

export interface DatadogRumSampleConfig {
  sample_rate: number
}

export interface DatadogRumTraceConfig {
  allowed_urls: string[]
}

export interface DaysAllowedToSeeNux {
  days: number
}

export interface FeatureFlagRules {
}

export interface DtMCPEligibleForNewUIDate {
  date: Date
}

export interface LivegraphClientConfig {
  sync_timeout_ms: number
  retry_errored_view_subscriptions: boolean
  subscription_retry_backoff_config: SubscriptionRetryBackoffConfig
  session_reporting_config: SessionReportingConfig
  subscription_retry_backoff_config_by_priority: SubscriptionRetryBackoffConfigByPriority
}

export interface SessionReportingConfig {
  reporting_interval_ms: number
  reporting_threshold: number
  stuck_loading_threshold_ms: number
}

export interface SubscriptionRetryBackoffConfig {
  maxAttempt?: number
  backoffInitialMs: number
  backoffMaxMs: number
  backoffMultiplier: number
}

export interface SubscriptionRetryBackoffConfigByPriority {
  p0: SubscriptionRetryBackoffConfig
  p1: SubscriptionRetryBackoffConfig
  p2: SubscriptionRetryBackoffConfig
  p3: SubscriptionRetryBackoffConfig
  default: SubscriptionRetryBackoffConfig
}

export interface MakeEdits1PDescription {
  title: string
  description: string
}

export interface MakeEditsConfiguration {
  configurationKey: ConfigurationKey
}

export enum ConfigurationKey {
  Default = 'default',
  InlineTargetingRules = 'inlineTargetingRules',
  LaunchedGroup = 'launchedGroup',
  LayerAssignment = 'layerAssignment',
  Prestart = 'prestart',
  The5OwDMIbWbfRoacjCDVGNZc = '5owDMIbWbfRoacjCdVgNZc',
  The6KUkeE164WnJuUM2GOYHft = '6KUkeE164WnJuUM2GOYHft',
}

export interface MakeLargePasteThreshold {
  sizeBytes: number
}

export interface MigrateTeamDataToLivegraph {
  GROUP_1: string
  GROUP_2: string
  GROUP_3: string
}

export interface PluginsInactiveConfig {
  allowedPluginIds: string[]
  blockedPluginIds: any[]
}

export interface ProvisionalAccessRefreshInterval {
  refreshIntervalInMs: number
}

export interface ReduxDeprecation {
  GROUP_0: string
  GROUP_1: string
  GROUP_2: string
  GROUP_3: string
  GROUP_4: string
  GROUP_5: string
  GROUP_6: string
  GROUP_7: string
}

export interface StsMaxSingleVideoBytes {
  max_single_video_size_bytes: number
  limit_for_error_message: string
}

export interface StsMaxTotalVideoBytes {
  max_total_video_size_bytes: number
  limit_for_error_message: string
}

export interface TosModalNuxDelay {
  delay_ms: number
}

export interface TosRequiredLaunchTs {
  ts: Date
}

export interface TouMigratorConfig {
  group_1: string
  group_2: string
  group_3: string
  group_4: string
  group_5: string
  group_6: string
  group_7: string
  group_8: string
  group_9: string
  group_10: string
  group_11: string
  group_12: string
  group_default: string
}

export interface DynamicConfigsWebglFallbackTriggers {
  webgl_fallback_triggers: WebglFallbackTriggersWebglFallbackTriggers
}

export interface WebglFallbackTriggersWebglFallbackTriggers {
  request_device_failure: boolean
  webgpu_error: boolean
  webgpu_oom: boolean
  js_error: boolean
  compatibility_test: boolean
}

export interface WebgpuPlatformDeviceConfig {
  graphics_card_blocklist: string[]
  vendor_architecture_blocklist: VendorArchitecture[]
  minimum_chromium_version: number
  block_missing_graphics_card_name: boolean
}

export interface VendorArchitecture {
  vendor: string
  architecture: string
}

export interface WebgpuSyncReadbackConfig {
  vendor_architecture_context2d: VendorArchitecture[]
}

export interface EditingFile {
  creator_id: string
  updated_at: Date
  key: string
  name: string
  description: null
  folder_id: string
  scheme: null
  team_id: string
  link_access: string
  trashed_user_id: null
  client_meta: string
  license: null
  parent_org_id: null
  org_browsable: boolean
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
  track_tags: TrackTags
  viewer_export_restricted: boolean
  thumbnail_url: string
  is_try_file: boolean
  library_key: string
  created_at: Date
  deleted_at: null
  trashed_at: null
  folder: null
  team: null
  team_user: null
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

export interface TrackTags {
  source: string
}

export interface FirebaseCloudMessagingBrowserNotifications {
  api_key: string
  app_id: string
  auth_domain: string
  messaging_sender_id: string
  project_id: string
  storage_bucket: string
  vapid_id: string
}

export interface Flash {
  error: null
  warn: null
  success: null
}

export interface I18NDesktopVersionSupport {
  'de': number
  'es-es': number
  'es-la': number
  'fr': number
  'ja': number
  'ko-kr': number
  'pt-br': number
}

export interface MVPVaOverride {
  asset_panel_component_ids?: string[]
  author_img_url: string
  author_name: string
  redirect_hub_file_id: string
}

export interface PlaygroundFileHubFileIDS {
  auto_layout: string
  dev_mode: string
}

export interface PrototypingForGen0 {
  asset_hub_file_id: string
}

export interface StartingPoints {
  desktop_templates_hub_file_id: string
  figma_basics_hub_file_id: string
  mobile_templates_hub_file_id: string
  website_templates_hub_file_id: string
}

export interface StatsigBootstrapValues {
  feature_gates: { [key: string]: FeatureGate }
  dynamic_configs: { [key: string]: DynamicConfig }
  layer_configs: { [key: string]: LayerConfig }
  sdkParams: FeatureFlagRules
  has_updates: boolean
  generator: string
  evaluated_keys: EvaluatedKeys
  time: number
  hash_used: string
  user: User
  sdkInfo: SDKInfo
}

export interface DynamicConfig {
  id_type?: IDType
  group_name?: string
  value: DynamicConfigValue
  group: string
  is_device_based: boolean
  passed: boolean
  is_user_in_experiment?: boolean
  is_experiment_active?: boolean
  name: string
  rule_id: string
  secondary_exposures: SecondaryExposure[]
  explicit_parameters?: string[]
  undelegated_secondary_exposures?: any[]
  is_in_layer?: boolean
  allocated_experiment_name?: string
}

export enum IDType {
  OrgID = 'orgID',
  PlanKey = 'planKey',
  StableID = 'stableID',
  TeamID = 'teamID',
  UserID = 'userID',
}

export interface SecondaryExposure {
  gate: string
  gateValue: string
  ruleID: string
}

export interface DynamicConfigValue {
  'enabled'?: boolean
  'should_see_community_one_tap'?: string
  'debounce_ms'?: number
  'max_debounce_wait_ms'?: number
  'has_editor_bell'?: boolean
  'treatment'?: boolean | VariantName
  'localized'?: boolean
  'async_limit'?: number
  'charTriggerCount'?: number
  'triggerOnType'?: boolean
  'is_sinatra'?: boolean
  'show_updated_paywall'?: boolean
  'default_to_dev_mode'?: boolean
  'show_one_tap'?: boolean
  'has_standardized_pro_entrypoints'?: boolean
  'hide_checkbox'?: boolean
  'has_updated_sales_contact_form'?: boolean
  'entrypoint'?: string
  'use_pv2'?: boolean
  'should_see_google_sso'?: boolean
  'allow_ai_results'?: boolean
  'isVariant'?: boolean
  'is_redesigned'?: boolean
  'has_drafts_copy_link_experience'?: boolean
  'use_edit_scopes'?: boolean
  'max_count'?: number
  'show_locked_state_redesign'?: boolean
  'show_locale_toggle'?: boolean
  'is_enabled'?: boolean
  'free_badge_visible'?: boolean
  'ctaCopy'?: string
  'showTryCta'?: boolean
  'showTryCta2'?: boolean
  'variantName'?: VariantName
  'trustPlacement'?: boolean
  'designWith'?: boolean
  'swapTrustBannerPlacement'?: boolean
  'useDesignWithCTA'?: boolean
  'topNavModal'?: boolean
  'useDesignWithCtaRedo'?: boolean
  'colorsTwoColumn'?: boolean
  'makeHomepage'?: boolean
  'makeHomepageVariant'?: number
  'showMakeHomepageVariant'?: boolean
  'in_treatment'?: boolean
  'has_user_initiated_request_nudges_enabled'?: boolean
  'can_downgrade_via_email'?: boolean
  'show_categories'?: boolean
  'topNavModalInternational'?: boolean
  'contactSalesEmbedded'?: boolean
  'show_toggle_for_only_likely_users'?: boolean
  'has_high_priority_filter'?: boolean
  'has_pro_user_move_draft_nudge'?: boolean
  'show_viewer_editor_nudge'?: boolean
  'should_see_shelf'?: boolean
  'announcement_banner_enabled'?: boolean
  'defaults_to_locale_on_signup'?: boolean
  'toggle_language_enabled'?: boolean
  'showAnchorLink'?: boolean
  'showCta'?: boolean
  'switch_button_hierarchy'?: boolean
  'inset_editor_enabled'?: boolean
  'use_search_query_framework'?: boolean
  'variant'?: string
  'has_browser_notifications'?: boolean
  'hide_toolbar_request_cta'?: boolean
  'showSecondaryCta'?: boolean
  'sitewideBanner'?: number
  'continueWithGoogle'?: boolean
  'test_param'?: string
  'max_candidates_to_log'?: number
  'is_variant'?: boolean
  'showUpsell'?: boolean
  'new_ordering'?: boolean
  'in_exp'?: boolean
  'showExp'?: boolean
  'index_v3'?: boolean
  'jubilee'?: boolean
  'model'?: string
  'has_admin_request_email_improvements'?: boolean
  'is_slide_count_write'?: boolean
  'is_slide_restriction_on'?: boolean
  'is_slide_count_read'?: boolean
  'is_repair_count_on'?: boolean
  'is_frontend_on'?: boolean
  'isLivegraphRestrictionOn'?: boolean
  'sequence'?: string
  'display_upgrade_pathway_on_user_settings'?: boolean
  'hasVerifymail'?: boolean
  'hasWhitelist'?: boolean
  'hasAppeal'?: boolean
  'show_variant_ui'?: boolean
  'has_updated_omnicreate'?: boolean
  'localized_starting_points_enabled'?: boolean
  'has_edu_offboarding_bootcamps'?: boolean
  'show_onboarding'?: boolean
  'show_library_upsell'?: boolean
  'show_redesign'?: boolean
  'show_upsell'?: boolean
  'showLink'?: boolean
  'linkUrl'?: string
  'explore_resource_ids'?: string[]
  'GROUP_0'?: string
  'GROUP_1'?: string
  'GROUP_2'?: string
  'GROUP_3'?: string
  'GROUP_4'?: string
  'GROUP_5'?: string
  'GROUP_6'?: string
  'GROUP_7'?: string
  'MAX_COLOR_VARIABLE_SUGGESTIONS'?: number
  'MAX_NUMBER_VARIABLE_SUGGESTIONS'?: number
  'MAX_TEXT_STYLES_SUGGESTIONS'?: number
  'MAX_COMPONENT_SUGGESTIONS'?: number
  'hamburger'?: boolean
  'hotdog'?: boolean
  'ja'?: boolean | En
  'es-es'?: boolean | En
  'es-la'?: boolean | En
  'de'?: boolean
  'fr'?: boolean
  'pt-br'?: boolean | En
  'ko-kr'?: boolean | En
  'localizedRoutes'?: LocalizedRoutes
  'projectSetupView'?: ProjectSetupView
  'contactUsAction'?: string
  'categories'?: CategoryElement[]
  'batchSize'?: number
  'topKCandidates'?: number
  'maxGeneralCandidates'?: number
  'shadowComputationDelayMs'?: number
  'pro'?: Starter | number
  'org'?: Starter | number
  'enterprise'?: Starter | number
  'percent'?: number
  'max_profile_level'?: number
  'max_tree_depth'?: number
  'refreshIntervalInMs'?: number
  'asset_type_map'?: AssetTypeMap
  'category_definitions'?: CategoryDefinition[]
  'tag_definitions'?: TagDefinition[]
  'date'?: Date
  'libraryContextTimeoutMs'?: number
  'starter'?: Starter
  'student'?: Starter
  'banlist'?: string[]
  'use_case_map'?: UseCaseMap
  'constraint'?: number
  'messageType'?: string
  'num_apps_allowed_for_starter'?: number
  'num_apps_allowed_for_pro'?: number
  'num_apps_allowed_for_org'?: number
  'num_apps_allowed_for_ent'?: number
  'vendor_architecture_context2d'?: VendorArchitecture[]
  'graphics_card_blocklist'?: string[]
  'vendor_architecture_blocklist'?: VendorArchitecture[]
  'minimum_chromium_version'?: number
  'block_missing_graphics_card_name'?: boolean
  'allowedPluginIds'?: string[]
  'blockedPluginIds'?: any[]
  'assetUpdateTimeoutMs'?: number
  'max_single_video_size_bytes'?: number
  'limit_for_error_message'?: string
  'libraryKeys'?: string[]
  'staging'?: { [key: string]: string }
  'prod'?: { [key: string]: string }
  'draw_template_id'?: string
  'grid_template_id'?: string
  '1461860615095461460'?: string
  '732752601638635881'?: string
  '1482185498651851470'?: string
  '1209878118157112863'?: number
  '1248234047942466966'?: number
  'codeOption'?: string
  'batch_size'?: number
  'support-share@figma.com'?: boolean
  'index_all_plans'?: boolean
  'org_ids'?: string[]
  'apple'?: string
  'google'?: string
  'figma'?: string
  'delayForComparisonMs'?: number
  'proportionLogged'?: number
  'experiments'?: any[]
  'configurationKey'?: ConfigurationKey
  'fileLimit'?: number
  'supported_editor_types'?: string[]
  'en'?: En
  'count'?: number
  'draw_asset_id'?: string
  'grid_asset_id'?: string
  'buzz_asset_id'?: string
  'sites_asset_id'?: string
  'make_asset_id'?: string
  'add-prop-def'?: number
  'add-prop-ref'?: number
  'add-variable-set-mode'?: number
  'change-variant-prop'?: number
  'component-prop-assignment'?: number
  'create-style'?: number
  'create-symbol toolbar'?: number
  'create-variable'?: number
  'delete-variable-set-mode'?: number
  'delete-variables'?: number
  'duplicate-selection-on-alt-drag'?: number
  'duplicate-variable-set-mode'?: number
  'duplicate-variables'?: number
  'insert-component'?: number
  'insert-state-group'?: number
  'keyboard-shortcut create-symbol'?: number
  'paste'?: number
  'regenerate-all-instances-quick-actions'?: number
  'reset-symbol-toolbar'?: number
  'set-color-variable-value'?: number
  'set-explicit-variable-mode'?: number
  'set-instance-prop-assignment'?: number
  'set-text-field-assignment'?: number
  'set-text-prop-assignment'?: number
  'set-variable-value-for-mode'?: number
  'swap-instance'?: number
  'toggle-bool-prop-assignment'?: number
  'update-selected-styles-for-font-fields'?: number
  'update-selected-styles-parameter-consumption-map'?: number
  'update-shared-variable-set'?: number
  'upsert-shared-symbol'?: number
  'libraryKey'?: string
  'siteFile'?: boolean
  'order'?: string[]
  'pluginIds'?: string[]
  'fontToLibraries'?: FontToLibraries
  'libraries'?: Library[]
  'sync_timeout_ms'?: number
  'retry_errored_view_subscriptions'?: boolean
  'subscription_retry_backoff_config'?: SubscriptionRetryBackoffConfig
  'session_reporting_config'?: SessionReportingConfig
  'subscription_retry_backoff_config_by_priority'?: SubscriptionRetryBackoffConfigByPriority
  'nodeLimit'?: number
  'edit-image'?: EditImageClass | number
  'figmake'?: FigmakeClass | number
  'generate-image'?: GenerateImageClass | number
  'living-designs'?: FigmakeClass | number
  'mappings'?: Mapping[]
  'color'?: string
  'dimensions'?: Dimensions
  'recommendations'?: Recommendation[]
  'tms_pull_lambda_for_locale_enabled'?: boolean
  'allowlisted_plan_ids'?: { [key: string]: boolean }
  'webgl_fallback_triggers'?: WebglFallbackTriggersWebglFallbackTriggers
  'max_total_video_size_bytes'?: number
  'timeoutInMs'?: number
  'title'?: string
  'description'?: string
  'remove-background'?: FigmakeClass
  'magic-link'?: FigmakeClass
  'first-draft'?: FigmakeClass
  'first-draft-make-changes'?: FigmakeClass
  'upscale-image'?: FigmakeClass
  'client_ids'?: string[]
  'denylistOrgIds'?: number[]
  'modelConfigs'?: string
  'llmMaxCandidates'?: number
  'llmMaxColorDistance'?: number
  'rerankerMaxSimilarCandidates'?: number
  'rerankerMaxPopularCandidates'?: number
  'rerankerMaxColorDistance'?: number
}

export interface AssetTypeMap {
  CUSTOM: FeatureFlagRules
  TWITTER_POST: BannerStandard
  LINKEDIN_POST: BannerStandard
  INSTA_POST_SQUARE: BannerStandard
  INSTA_POST_PORTRAIT: BannerStandard
  INSTA_STORY: BannerStandard
  INSTA_AD: BannerStandard
  FACEBOOK_POST: BannerStandard
  FACEBOOK_COVER_PHOTO: BannerStandard
  FACEBOOK_EVENT_COVER: BannerStandard
  FACEBOOK_AD_PORTRAIT: BannerStandard
  FACEBOOK_AD_SQUARE: BannerStandard
  PINTEREST_AD_PIN: BannerStandard
  TWITTER_BANNER: BannerStandard
  LINKEDIN_POST_SQUARE: BannerStandard
  LINKEDIN_POST_PORTRAIT: BannerStandard
  LINKEDIN_POST_LANDSCAPE: BannerStandard
  LINKEDIN_PROFILE_BANNER: BannerStandard
  LINKEDIN_ARTICLE_BANNER: BannerStandard
  LINKEDIN_AD_LANDSCAPE: BannerStandard
  LINKEDIN_AD_SQUARE: BannerStandard
  LINKEDIN_AD_VERTICAL: BannerStandard
  YOUTUBE_THUMBNAIL: BannerStandard
  YOUTUBE_BANNER: BannerStandard
  YOUTUBE_AD: BannerStandard
  TWITCH_BANNER: FeatureFlagRules
  GOOGLE_LEADERBOARD_AD: BannerStandard
  GOOGLE_LARGE_AD: BannerStandard
  GOOGLE_MED_AD: BannerStandard
  GOOGLE_MOBILE_BANNER_AD: BannerStandard
  GOOGLE_SKYSCRAPER_AD: BannerStandard
  CARD_HORIZONTAL: BannerStandard
  CARD_VERTICAL: BannerStandard
  PRINT_US_LETTER: BannerStandard
  POSTER: BannerStandard
  BANNER_STANDARD: BannerStandard
  BANNER_WIDE: BannerStandard
  BANNER_ULTRAWIDE: BannerStandard
  NAME_TAG_PORTRAIT: BannerStandard
  NAME_TAG_LANDSCAPE: BannerStandard
  INSTA_REEL_COVER: BannerStandard
  ZOOM_BACKGROUND: BannerStandard
}

export interface BannerStandard {
  category_slug: string
  tags_text: string[]
  tags_slug: string[]
}

export interface CategoryElement {
  id: string
  text: string
  category: CategoryEnum
  tags: string[]
}

export enum CategoryEnum {
  WebsiteTemplates = 'website-templates',
}

export interface CategoryDefinition {
  url_slug: string
  parent_slug?: ParentSlug
}

export enum ParentSlug {
  Empty = '',
  PrintableTemplates = 'printable-templates',
  SocialMediaTemplates = 'social-media-templates',
}

export interface Dimensions {
  job_title: string[]
  paid_status: any[]
}

export interface En {
  website: Basics
  mobile: Basics
  desktop: Basics
  basics: Basics
}

export interface Basics {
  file_id: string
  preview_img_id: string
}

export interface Starter {
  collaborator: Collaborator
  developer: Collaborator
  expert: Collaborator
  view: Collaborator
}

export interface Collaborator {
  code_chat: number
  image_tools: number
  ai_credits?: number
  text_tools?: number
}

export interface FontToLibraries {
  SFPro: string[]
  SFCompact: any[]
}

export interface Library {
  libraryKey: string
  assets: Asset[]
}

export interface Asset {
  name: string
  assetKey: string
  icon: string
  nodeTypes?: string[]
}

export interface LocalizedRoutes {
  'es-es': boolean
  'es-la': boolean
  'pt-br': boolean
  'ko-kr': boolean
  'ja': boolean
}

export interface Mapping {
  prefix: string
  client_id: string
}

export interface ProjectSetupView {
  figmaConfigJsonLearnMoreUrl: string
  generateTokenLinkUrl: string
  installCliLearnMoreUrl: string
  configureCILearnMoreUrl: string
}

export interface Recommendation {
  properties: Properties
  resources: string[]
}

export interface Properties {
  job_title: string
}

export interface TagDefinition {
  text: string
  url_slug: string
  category_slugs: string[]
}

export enum VariantName {
  BottomBanner = 'bottom_banner',
  Control = 'control',
  Variant = 'variant',
}

export interface UseCaseMap {
  SOCIAL: Ads
  ADS: Ads
  PRINT: Ads
  BUSINESS: Ads
  PROMOTIONS: Ads
  EVENTS: Ads
  CELEBRATIONS: Ads
}

export interface Ads {
  category_slugs: string[]
  resource_ids?: string[]
  shelf_ids?: string[]
}

export interface EvaluatedKeys {
  customIDs: CustomIDs
}

export interface CustomIDs {
  teamID: string
  stableID: string
  planKey: string
}

export interface FeatureGate {
  id_type: IDType
  value: boolean
  name: string
  rule_id: string
  secondary_exposures: SecondaryExposure[]
}

export interface LayerConfig {
  value: LayerConfigValue
  group: ConfigurationKey
  is_device_based: boolean
  passed: boolean
  explicit_parameters?: string[]
  undelegated_secondary_exposures?: SecondaryExposure[]
  name: string
  rule_id: ConfigurationKey
  secondary_exposures: SecondaryExposure[]
  id_type?: IDType
  is_user_in_experiment?: boolean
  is_experiment_active?: boolean
  group_name?: string
  is_in_layer?: boolean
  allocated_experiment_name?: string
}

export interface LayerConfigValue {
  index_v3?: boolean
  jubilee?: boolean
  showSecondaryCta?: boolean
  sitewideBanner?: number
  useDesignWithCtaRedo?: boolean
  colorsTwoColumn?: boolean
  makeHomepage?: boolean
  makeHomepageVariant?: number
  showMakeHomepageVariant?: boolean
  ctaCopy?: string
  showTryCta?: boolean
  showTryCta2?: boolean
  variantName?: VariantName
  trustPlacement?: boolean
  designWith?: boolean
  swapTrustBannerPlacement?: boolean
  useDesignWithCTA?: boolean
  topNavModal?: boolean
  topNavModalInternational?: boolean
  contactSalesEmbedded?: boolean
}

export interface SDKInfo {
  sdkType: string
  sdkVersion: string
}

export interface User {
  ip: string
  userAgent: string
  custom: Custom
  statsigEnvironment: StatsigEnvironment
  customIDs: CustomIDs
}

export interface Custom {
  ar_version: string
  cluster_name: string
  developerID: string
  figma_service: string
  release_git_commit: string
  release_git_tag: string
  source_caller: string
  user_created_at: string
  user_email_domain: string
  user_is_figma_employee: boolean
  user_is_student: boolean
  user_in_sites_access_list: boolean
  page_app_version: string
  page_app_type: string
  user_job_title: string
  integration_host: string
}

export interface StatsigEnvironment {
  tier: string
}

export interface StripePaymentMethodConfigurations {
  org: string
  pro: string
}
