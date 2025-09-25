/**
 * Enum for extension feature keys.
 * Original variable: $$n2
 */
export enum ExtensionFeatureKey {
  EXTENSION_DETAILS = 'extension-details',
  REGENERATE_TEXT_TOAST = 'regenerate-text-toast',
  ASSETS_TAB_DETAIL_VIEW = 'assets-tab-detail-view',
  MAGIC_LINK_DONE_TOAST = 'magic-link-done-toast',
  BACKGROUND_REMOVE_TOAST = 'background-remove-toast',
  UPSCALE_IMAGE_TOAST = 'upscale-image-toast',
  VISUAL_SEARCH = 'visual-search',
  RENAME_LAYERS_TOAST = 'rename-layers-toast',
  GENERATE_IMAGE = 'generate-image',
  EDIT_IMAGE = 'edit-image',
  MAGIC_LINK = 'magic-link',
  PLUGIN_PARAMETER_ENTRY = 'plugin-parameter-entry',
  PLUGIN_SUBMENU_ENTRY = 'plugin-submenu-entry',
  TRANSLATE = 'translate',
  REWRITE = 'rewrite',
  SHORTEN = 'shorten',
  FIRST_DRAFT = 'first-draft',
  FIRST_DRAFT_KIT_PICKER = 'first-draft-kit-picker',
  FIRST_DRAFT_MAKE_CHANGES = 'first-draft-make-changes',
  FIRST_DRAFT_MAKE_KIT = 'first-draft-make-kit',
  FIRST_DRAFT_LINT = 'first-draft-lint',
  FIRST_DRAFT_DEBUG = 'first-draft-debug',
  FIRST_DRAFT_FINE_TUNE = 'first-draft-fine-tune',
  MAKE_EDITS = 'make-edits',
  MAKE_EDITS_DEBUG = 'make-edits-debug',
  MAKE_EDITS_DEBUG_REVIEW = 'make-edits-debug-review',
  FIRST_DRAFT_MAKE_KIT_DEBUG = 'first-draft-make-kit-debug',
  IMAGE_TO_DESIGN = 'image-to-design',
  IMAGE_TO_DESIGN_ORACLE = 'image-to-design-oracle',
  ASSISTANT_CHAT = 'assistant-chat',
  LINK_TO_COMPONENT = 'link-to-component',
  FIGJAM_AI_CONTEXTUAL_FEATURES = 'figjam-ai-contextual-features',
  LIBRARY_CSS_EXTRACTION = 'library-css-extraction',
  MERMAID_TO_DIAGRAM = 'mermaid-to-diagram',
  MAKE_VIDEO = 'make-video',
  FOR_TESTING = 'for-testing',
}

/**
 * Enum for plugin source types.
 * Original variable: $$r0
 */
export enum PluginSourceType {
  ALL = 'all',
  PLUGINS = 'plugins',
  WIDGETS = 'widgets',
  FROM_ORG = 'from-org',
  DEVELOPMENT = 'development',
}

/**
 * Enum for asset tab types.
 * Original variable: $$a1
 */
export enum AssetTabType {
  ALL = 'all',
  EXTENSIONS = 'extensions',
  ASSETS = 'assets',
}

// Refactored exports with original names for traceability
export const BY = PluginSourceType
export const Jc = AssetTabType
export const Sn = ExtensionFeatureKey
