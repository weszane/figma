import { getInitialOptions } from '../figma_app/169182'

/**
 * Checks if the current frame context is an integration.
 * Original: $$i2
 */
export function isIntegrationContext(): boolean {
  return getInitialOptions().frame_context?.type === 'integration'
}

/**
 * Checks if the integration host is Google Meet.
 * Original: $$a3
 */
export function isGoogleMeetIntegration(): boolean {
  return isIntegrationContext() && getInitialOptions().integration_host === 'google-meet'
}

/**
 * Checks if the integration is Google Meet hardware.
 * Original: $$s1
 */
export function isGoogleMeetHardwareIntegration(): boolean {
  return isGoogleMeetIntegration() && !!getInitialOptions().is_meet_hardware
}

/**
 * Checks if the integration host is Zoom.
 * Original: $$o0
 */
export function isZoomIntegration(): boolean {
  return isIntegrationContext() && getInitialOptions().integration_host === 'zoom'
}

/**
 * Utility class for integration checks.
 * Original: $$l4
 */
export class IntegrationUtils {
  /**
   * Checks if the integration host is Google Classroom.
   * Original: isGoogleClassroomIntegration
   */
  static isGoogleClassroomIntegration(): boolean {
    return isIntegrationContext() && getInitialOptions().integration_host === 'google-classroom'
  }
}

// Refactored exports to match new names
export const MP = isZoomIntegration
export const U1 = isGoogleMeetHardwareIntegration
export const ck = isIntegrationContext
export const eM = isGoogleMeetIntegration
export const pb = IntegrationUtils
