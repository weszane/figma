import { KeyCodes, ModifierKeyCodes } from "../905/63728";
/**
 * Enum representing the source of an extension.
 * Original variable: $$r0
 */
export enum ExtensionSource {
  RECENT = "RECENT",
  USER_SAVED = "USER_SAVED",
  ORG_SAVED = "ORG_SAVED",
  LOCAL = "LOCAL",
  COMMUNITY = "COMMUNITY",
  ALLOWLIST = "ALLOWLIST",
  ORG_PRIVATE = "ORG_PRIVATE",
}

/**
 * Key binding for the Enter key.
 * Original variable: $$a2
 */
export const enterKey = {
  key: KeyCodes.ENTER,
};

/**
 * Key binding for Meta + Enter.
 * Original variable: $$s3
 */
export const metaEnterKey = {
  key: KeyCodes.ENTER,
  modifier: [ModifierKeyCodes.META],
};

/**
 * Enum representing the type of extension view.
 * Original variable: $$o1
 */
export enum ExtensionViewType {
  LOCAL = "local_extension_item",
  PUBLISHED = "published_extension_item",
  PUBLISHED_WITH_DETAILS = "published_extension_item_with_details",
  ACTION = "extension_action_item",
  DETAILS = "extension_details_view",
}

// Exports with refactored names
export const Ag = ExtensionSource;
export const H5 = ExtensionViewType;
export const Hz = enterKey;
export const r7 = metaEnterKey;
