import { captureMessage } from '@sentry/core'
import { getFeatureFlags } from '../905/601108'
import { getInitialOptions } from '../figma_app/169182'

/**
 * Supported currency codes.
 * (original: o)
 */
const SUPPORTED_CURRENCIES = ['jpy', 'usd', 'gbp', 'cad', 'eur']

/**
 * Returns the user's preferred locale from the browser.
 * (original: $$l1)
 */
export function getUserLocale(): string {
  if (navigator) {
    const { languages, language } = navigator
    if (languages && languages[0])
      return languages[0]
    if (language)
      return language
  }
  return 'en-US'
}

/**
 * Currency formatter and metadata.
 * (original: $$d7)
 */
export class CurrencyFormatter {
  fullFormat: Record<string, string>
  currency: string
  hasCents: boolean
  locale: string

  /**
   * @param currency - The currency code to use for formatting.
   */
  constructor(currency: string | null) {
    this.fullFormat = {
      jpy: 'JPY',
      usd: 'USD',
      eur: 'EUR',
      gbp: 'GBP',
      cad: 'CAD',
    }
    if (currency === null) {
      captureMessage('Currency should not be null. Defaulted to usd.')
    }
    this.currency = currency ?? 'usd'
    this.hasCents = this.currency !== 'jpy'
    this.locale = getUserLocale()
  }

  /**
   * Formats a monetary value according to the currency and locale.
   * @param amount - The amount to format.
   * @param options - Formatting options.
   * @returns The formatted currency string.
   * (original: formatMoney)
   */
  formatMoney(
    amount: number,
    options?: { currencySign?: 'standard' | 'accounting', showCents?: boolean, showFullFormat?: boolean },
  ): string {
    const formatOptions: Intl.NumberFormatOptions = {
      currency: this.currency,
      currencySign: options?.currencySign,
      style: 'currency',
    }

    if (!this.hasCents || !options?.showCents) {
      formatOptions.maximumFractionDigits = 0
      formatOptions.minimumFractionDigits = 0
    }

    if (this.hasCents) {
      amount *= 0.01
    }

    let formatted = amount.toLocaleString(this.locale, formatOptions)

    // Remove prefix for CA$ and US$
    if (formatted.startsWith('CA$') || formatted.startsWith('US$')) {
      formatted = formatted.slice(2)
    }

    return options?.showFullFormat
      ? `${formatted} ${this.fullFormat[this.currency]}`
      : formatted
  }
}

/**
 * Gets the user's currency from IP, or defaults to USD.
 * (original: $$c2)
 */
export function getUserCurrency(): string {
  const currency = getInitialOptions().user_currency_from_ip
  return isNonUsdUserCurrency() ? currency : 'usd'
}

/**
 * Instantiates a CurrencyFormatter with the user's currency.
 * (original: $$u8)
 */
export function createUserCurrencyFormatter(): CurrencyFormatter {
  return new CurrencyFormatter(getUserCurrency())
}

/**
 * Gets the user's ISO country code if using a non-USD currency, otherwise "US".
 * (original: $$p6)
 */
export function getUserIsoCodeIfNonUsd(): string {
  return isNonUsdUserCurrency() && getUserCurrency() !== 'usd'
    ? getInitialOptions().iso_code
    : 'US'
}

/**
 * Gets the user's ISO country code, defaulting to "US".
 * (original: $$_4)
 */
export function getUserIsoCode(): string {
  return getInitialOptions().iso_code || 'US'
}

/**
 * Returns the set of allowed currencies for the cart.
 * (original: $$h0)
 */
export function getAllowedCartCurrencies(): string[] {
  const allowed = new Set<string>()
  allowed.add('usd')
  allowed.add(getUserCurrency())
  return Array.from(allowed)
}

/**
 * Determines if the user currency is valid and non-USD.
 * (original: $$m3)
 */
export function isNonUsdUserCurrency(): boolean {
  const currency = getInitialOptions().user_currency_from_ip
  if (!currency || !SUPPORTED_CURRENCIES.includes(currency) || currency === 'usd') {
    return false
  }
  const userData = getInitialOptions().user_data
  return !!userData && !!userData.id
}

/**
 * Mapping of currency codes to ISO country codes.
 * (original: g)
 */
const CURRENCY_COUNTRY_MAP: Record<string, string[]> = {
  usd: [],
  eur: [
    'AD',
    'AT',
    'BE',
    'CZ',
    'DK',
    'EE',
    'FI',
    'FR',
    'DE',
    'GR',
    'HU',
    'IS',
    'IT',
    'LV',
    'LI',
    'LT',
    'LU',
    'MT',
    'NL',
    'NO',
    'PL',
    'PT',
    'SK',
    'SI',
    'SM',
    'ES',
    'SE',
    'CH',
    'BG',
    'HR',
    'CY',
    'IE',
    'RO',
    'XK',
  ],
  jpy: ['JP'],
  cad: ['CA'],
  gbp: ['GB', 'IM', 'GG', 'JE', 'GI', 'GS'],
}

/**
 * Checks if a currency is valid for a given country code.
 * (original: $$f5)
 * @param currency - Currency code.
 * @param countryCode - ISO country code.
 */
export function isCurrencyAllowedForCountry(currency: string, countryCode: string): boolean {
  return currency === 'usd' || CURRENCY_COUNTRY_MAP[currency]?.includes(countryCode)
}

// Export aliases for backward compatibility
export const B9 = getAllowedCartCurrencies
export const JK = getUserLocale
export const LN = getUserCurrency
export const _Z = isNonUsdUserCurrency
export const aE = getUserIsoCode
export const bu = isCurrencyAllowedForCountry
export const ub = getUserIsoCodeIfNonUsd
export const vr = CurrencyFormatter
export const wU = createUserCurrencyFormatter
