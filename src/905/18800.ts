import { getCookieManager } from '../905/423575';
import { atom, atomStoreManager, createAtomWithEquality, atomWithDefault, RESET } from '../figma_app/27355';
import { getConsentRegion } from '../figma_app/169182';
// ConsentStatus Enum (original: $$o4)
/**
 * Enum representing consent status.
 */
export enum ConsentStatus {
  UNLOADED = 'unloaded',
  NO = 'no',
  YES = 'yes',
}

// Cookie key constant (original: s)
const COOKIE_PREF_KEY = 'pref';

// getConsentCookie (original: l)
/**
 * Retrieves the consent cookie value.
 */
function getConsentCookie(): any {
  const cookieManager = getCookieManager();
  return cookieManager ? cookieManager.get(COOKIE_PREF_KEY) : undefined;
}

// getConsentCookieAsync (original: d)
/**
 * Asynchronously retrieves the consent cookie value with optional priority.
 * @param priority - Task priority.
 */
async function getConsentCookieAsync(priority: string = 'background'): Promise<any> {
  try {
    return await scheduler.postTask(() => getConsentCookie(), {
      priority
    });
  } catch {
    return undefined;
  }
}

// setConsentCookie (original: c)
/**
 * Asynchronously sets the consent cookie value.
 * @param value - Value to set.
 * @param priority - Task priority.
 */
async function setConsentCookie(value: any, priority: string = 'background'): Promise<void> {
  try {
    await scheduler.postTask(() => {
      const cookieManager = getCookieManager();
      if (cookieManager) {
        cookieManager.set(COOKIE_PREF_KEY, value, {
          maxAge: 31536e3
        });
      }
    }, {
      priority
    });
  } catch {}
}

// consentAtom (original: u)
const consentAtom = createAtomWithEquality(atomWithDefault(() => getConsentCookie()));

// updateConsentAtom (original: p)
/**
 * Updates the consent atom with the current cookie value.
 */
async function updateConsentAtom(): Promise<void> {
  atomStoreManager.set(consentAtom, await getConsentCookieAsync());
}

// setConsent (original: m)
/**
 * Sets the consent atom and updates the cookie.
 * @param value - Consent value.
 */
async function setConsent(value: any): Promise<void> {
  atomStoreManager.set(consentAtom, value);
  await setConsentCookie(value);
}

// setConsentFromRegion (original: $$h2)
/**
 * Sets consent based on region and cookies enabled.
 * @param params - Object containing consentRegion and cookiesEnabled.
 */
export async function setConsentFromRegion({
  consentRegion,
  cookiesEnabled
}: {
  consentRegion: string;
  cookiesEnabled: boolean;
}): Promise<void> {
  await setConsent({
    t: consentRegion,
    f: cookiesEnabled,
    a: cookiesEnabled,
    m: cookiesEnabled
  });
}

// Update consent atom on window focus
window.addEventListener('focus', () => updateConsentAtom());

// consentStatusAtom (original: $$g0)
/**
 * Atom representing the consent status.
 */
export const consentStatusAtom = atom(getStatus => {
  switch (getStatus(consentAtom)) {
    case RESET:
    case undefined:
      return ConsentStatus.UNLOADED;
    case null:
      return ConsentStatus.NO;
    default:
      return ConsentStatus.YES;
  }
});

// consentAllowedAtom (original: $$f1)
/**
 * Atom representing if consent is allowed.
 */
export const consentAllowedAtom = atom(getStatus => {
  const consent = getStatus(consentAtom);
  switch (consent) {
    case RESET:
    case undefined:
      return false;
    case null:
      return getConsentRegion() !== 'explicit';
    default:
      return consent.a;
  }
});

// consentMarketingAtom (original: $$_6)
/**
 * Atom representing if marketing consent is allowed.
 */
export const consentMarketingAtom = atom(getStatus => {
  const consent = getStatus(consentAtom);
  switch (consent) {
    case RESET:
    case undefined:
      return false;
    case null:
      return !getConsentRegion();
    default:
      return consent.m;
  }
});

// consentFunctionalAtom (original: $$A5)
/**
 * Atom representing if functional consent is allowed.
 */
export const consentFunctionalAtom = atom(getStatus => {
  const consent = getStatus(consentAtom);
  switch (consent) {
    case RESET:
    case undefined:
      return false;
    case null:
      return getConsentRegion() !== 'explicit';
    default:
      return consent.f;
  }
});

// consentCounterAtom (original: $$y3)
/**
 * Atom representing a consent counter.
 */
export const consentCounterAtom = atom(0);

// Exported names for refactored atoms and functions
export const Dr = consentStatusAtom;
export const EA = consentAllowedAtom;
export const L3 = setConsentFromRegion;
export const P4 = consentCounterAtom;
export const S6 = ConsentStatus;
export const Zu = consentFunctionalAtom;
export const cQ = consentMarketingAtom;