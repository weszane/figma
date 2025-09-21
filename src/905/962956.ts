import { z } from 'zod'
/**
 * CurrencyEnum - Original $$r1
 * Defines supported currency codes.
 */
export const CurrencyEnum = {
  USD: 'usd',
  CAD: 'cad',
  EUR: 'eur',
  GBP: 'gbp',
  JPY: 'jpy',
}

/**
 * CurrencySchema - Original $$a0
 * Zod schema for validating currency enum values.
 */
export const CurrencySchema = z.nativeEnum(CurrencyEnum)

// Export original names for compatibility
export const S = CurrencyEnum // Original $$r1
export const D = CurrencySchema // Original $$a0
