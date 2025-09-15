/**
 * AuthFlowStep - Original: $$n4
 * Represents the different steps in the authentication flow.
 */
export enum AuthFlowStep {
  SIGN_UP = 'sign_up',
  SIGN_IN = 'sign_in',
  SAML_START = 'saml_start',
  CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD = 'check_email_magic_link_sign_in_after_password',
  FORGOT_PASSWORD = 'forgot_password',
  RESET_PASSWORD = 'reset_password',
  SENT_PASSWORD_RESET = 'sent_password_reset',
  VALIDATE_EMAIL = 'validate_email',
  VALIDATE_CODE = 'validate_code',
  APP_AUTH_GRANT = 'app_auth_grant',
  APP_AUTH_REDEEM = 'app_auth_redeem',
  SSO_GATE = 'sso_gate',
  EMAIL_ONLY = 'email_only',
  ACCOUNT_PICKER = 'account_picker',
  JOIN_ORG = 'join_org',
  VERIFY_HUMAN = 'verify_human',
  GOOGLE_SSO_SIGNUP_ACTION_REDIRECT = 'google_sso_signup_action_redirect',
  TWO_FACTOR = 'two_factor',
}

/**
 * AuthErrorCode - Original: $$r0
 * Represents error codes for authentication.
 */
export enum AuthErrorCode {
  UNAUTHORIZED = 0,
  BAD_REQUEST = 1,
  NO_SAML = 2,
  SAML_REQUIRED = 3,
  MAGIC_LINK_LOGIN_NO_ACCOUNT = 4,
}

/**
 * AuthField - Original: $$a2
 * Represents fields used in authentication forms.
 */
export enum AuthField {
  EMAIL = 'email',
  PASSWORD = 'password',
  VERIFICATION_CODE = 'verification_code',
  TOTP_KEY = 'totp_key',
  JOB_TITLE = 'job_title',
  USAGE_PURPOSE = 'usage_purpose',
}

/**
 * UsagePurpose - Original: s
 * Represents the purpose for which the app is used.
 */
export enum UsagePurpose {
  WORK = 'For work',
  PERSONAL = 'For personal use',
  EDU = 'For teaching or taking a class',
}

/**
 * AuthProvider - Original: $$o5
 * Represents authentication providers.
 */
export enum AuthProvider {
  GOOGLE = 'google',
  SAML = 'saml',
}

/**
 * ClientPlatform - Original: $$l1
 * Represents client platforms.
 */
export enum ClientPlatform {
  DESKTOP = 'desktop',
  MIRROR = 'mirror',
  MOBILE = 'mobile',
  VSCODE = 'vscode',
  VSCODE_INSIDERS = 'vscode-insiders',
  VSCODE_CURSOR = 'vscode-cursor',
  FIGJAM_MOBILE = 'figjam_mobile',
  MSFT_TEAMS = 'msft-teams',
}

/**
 * SIGNED_UP_FROM_OPEN_SESSIONS - Original: $$d6
 * Used to indicate sign up from open sessions.
 */
export const SIGNED_UP_FROM_OPEN_SESSIONS = 'signed_up_from_open_sessions'

/**
 * AuthAction - Original: $$c3
 * Represents authentication actions.
 */
export enum AuthAction {
  SIGN_UP = 'sign_up',
  SIGN_UP_GOOGLE_ONE_TAP = 'sign_up_google_one_tap',
  FORGOT_PASSWORD = 'forgot_password',
}

// Refactored exports for original variable names
export const qB = AuthFlowStep // $$n4
export const By = AuthErrorCode // $$r0
export const RE = AuthField // $$a2
export const DP = ClientPlatform // $$l1
export const vR = AuthProvider // $$o5
export const zl = SIGNED_UP_FROM_OPEN_SESSIONS // $$d6
export const cc = AuthAction // $$c3
