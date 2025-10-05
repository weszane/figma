import { LANGUAGE_DICTIONARIES, SpellCheckEngine } from "../905/461516"
import { localStorageRef } from "../905/657224"
import { IpcStorageHandler } from "../905/724705"

export enum SpellCheckStorageKey {
  DESKTOP = "spellCheckDesktopLanguage",
  HUNSPELL = "spellCheckHunspellLanguage",
}

const LEGACY_SPELL_CHECK_LANGUAGE_KEY = "spellCheckLanguage"

/**
 * Migrates legacy spell check language settings to the new storage format.
 *
 * This function checks for the existence of a legacy language setting and migrates it
 * to either the Hunspell or Desktop spell check engine based on the available dictionaries.
 * The legacy setting is removed after migration.
 *
 * Original function name: $$l2
 */
export function migrateLegacySpellCheckLanguage(): void {
  if (!localStorageRef)
    return

  const legacyLanguage = localStorageRef.getItem(LEGACY_SPELL_CHECK_LANGUAGE_KEY)
  if (legacyLanguage === null)
    return

  const hasDesktopLanguage = typeof localStorageRef.getItem(SpellCheckStorageKey.DESKTOP) === "string"
  const hasHunspellLanguage = typeof localStorageRef.getItem(SpellCheckStorageKey.HUNSPELL) === "string"

  // Only migrate if neither new storage keys exist
  if (!hasDesktopLanguage && !hasHunspellLanguage) {
    if (Object.keys(LANGUAGE_DICTIONARIES).includes(legacyLanguage)) {
      setSpellCheckLanguage(SpellCheckStorageKey.HUNSPELL, legacyLanguage)
    }
    else {
      setSpellCheckLanguage(SpellCheckStorageKey.DESKTOP, legacyLanguage)
    }
    localStorageRef.removeItem(LEGACY_SPELL_CHECK_LANGUAGE_KEY)
  }
}

/**
 * Gets the appropriate storage key for a given spell check engine.
 *
 * @param engine - The spell check engine to get the storage key for
 * @returns The corresponding storage key string
 *
 * Original function name: $$d4
 */
export function getSpellCheckStorageKey(engine: SpellCheckEngine): string {
  switch (engine) {
    case SpellCheckEngine.DESKTOP:
    case SpellCheckEngine.AGENT:
      return SpellCheckStorageKey.DESKTOP
    case SpellCheckEngine.HUNSPELL:
      return SpellCheckStorageKey.HUNSPELL
    default:
      throw new Error(`Unknown spell check engine: ${engine}`)
  }
}

/**
 * Sets a spell check language in local storage and notifies other tabs.
 *
 * @param key - The storage key to set
 * @param value - The language value to store
 *
 * Original function name: $$c1
 */
export function setSpellCheckLanguage(key: string, value: string): void {
  if (localStorageRef) {
    localStorageRef.setItem(key, value)
    new IpcStorageHandler().sendToOtherTabs(key)
  }
}

/**
 * Gets a spell check language from local storage.
 *
 * @param key - The storage key to retrieve
 * @returns The stored language value or null if not found
 *
 * Original function name: $$u3
 */
export function getSpellCheckLanguage(key: string): string | null {
  return localStorageRef?.getItem(key) ?? null
}

// Exported constants with meaningful names
export const Kz = SpellCheckStorageKey
export const Up = setSpellCheckLanguage
export const hO = migrateLegacySpellCheckLanguage
export const l9 = getSpellCheckLanguage
export const up = getSpellCheckStorageKey
