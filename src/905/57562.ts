import { getI18nString } from '../905/303541'
import { sendWithRetry } from '../905/910117'
/**
 * Validates VAT/GST ID for a given country and region.
 * Original function name: $$a0
 *
 * @param vatId - VAT/GST ID to validate
 * @param countryCode - Country code
 * @param onValid - Callback when validation succeeds
 * @param onError - Callback when validation fails
 * @param region - Region code
 * @returns Promise resolving to boolean indicating validity
 */
export async function validateVatGstId(
  vatId: string,
  countryCode: string,
  onValid: () => void,
  onError: (msg: string) => void,
  region?: string,
): Promise<boolean> {
  // Early return if vatId or countryCode is missing
  if (!vatId || !countryCode) {
    onValid()
    return Promise.resolve(true)
  }

  // Determine API endpoint based on hostname
  const endpoint = window.location.hostname.match(/admin\./)
    ? '/api/admin/tax/validate_vat'
    : '/api/tax/validate_vat'

  try {
    const response = await sendWithRetry.post(endpoint, {
      vat_gst_id: vatId,
      country_code: countryCode,
      region,
    })

    if (response.data.meta.valid) {
      onValid()
      return true
    }
    else {
      onError(getI18nString(response.data.i18n.id))
      return false
    }
  }
  catch (error: any) {
    onError(
      (error.data && error.data.message)
      || getI18nString('tax.vat.vat_gst_validation_failed'),
    )
    return false
  }
}

/** Exported alias for validateVatGstId (original: V) */
export const V = validateVatGstId
