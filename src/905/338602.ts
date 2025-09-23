import { sendMetric } from '../905/485103'

// Original: $$r0
/**
 * Sends a metric for asset by key permissions error.
 * @param e - The error parameter to append to the metric string.
 */
export function sendAssetByKeyPermissionsErrorMetric(e: any) {
  sendMetric(`asset_by_key_permissions_error${e}`)
}

// Original: t
export const t = sendAssetByKeyPermissionsErrorMetric
