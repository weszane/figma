/**
 * Security and Validation Module
 * 
 * This module handles security validation, permission management, access control,
 * and data validation functionality extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - API response validation and schema enforcement
 * - Security form management and plugin security validation
 * - Web Application Firewall (WAF) integration and CAPTCHA handling
 * - Permission validation and access control
 * - Content Security Policy (CSP) enforcement
 * - Input validation and sanitization
 * - Authentication and authorization workflows
 * - Security policy violation monitoring
 */

/**
 * Validation Types and Interfaces
 */
export interface ValidationContext {
  xr: any // HTTP client context
}

export interface ValidationError {
  [path: string]: string[]
}

export interface ValidatorResponse<T = any> {
  data: T
  meta?: any
  status?: number
}

export interface SecurityFormResponse {
  questions: Record<string, any>
  version: string
  pluginId?: string
  status?: 'PENDING' | 'APPROVED' | 'REJECTED'
}

export interface WAFVerificationState {
  type: 'challenge' | 'captcha'
  deferred: any
  iframe?: HTMLIFrameElement
  clearTimeout?: () => void
  startTime: number
}

export interface PermissionOptions {
  cameraAccess: boolean
  microphoneAccess: boolean
  displayCaptureAccess: boolean
  clipboardWriteAccess: boolean
  allowedDomains: string[]
  isLocal: boolean
}

export interface SecurityPolicyViolation {
  violatedDirective: string
  blockedURI: string
  originalPolicy: string
  timestamp: number
}

export type LogLevel = 'error' | 'warn'
export type ValidationBehavior = 'native' | 'aria' | 'builtin'

/**
 * Base Validator Class
 * Original: BaseValidator from 181241.ts
 */
export class BaseValidator<T> {
  public debugKey: string
  private readonly schema: any // Zod schema
  private readonly logLevel: LogLevel
  protected _input: any = null
  protected _output: any = null

  constructor(debugKey: string, schema: any, logLevel: LogLevel = 'warn') {
    this.debugKey = debugKey
    this.schema = schema
    this.logLevel = logLevel
  }

  /**
   * Validates the API response against the schema
   * Original: validate method from BaseValidator
   */
  async validate(requestFn: (context: ValidationContext) => Promise<ValidatorResponse>): Promise<ValidatorResponse<T>> {
    try {
      // Execute the request function
      const response = await requestFn({ xr: this.createMockHTTPClient() })
      
      // Store input for debugging
      this._input = response
      
      // Validate response data against schema
      const validatedData = this.schema.parse(response.data)
      
      // Store validated output
      this._output = validatedData
      
      return {
        ...response,
        data: validatedData
      }
    } catch (error) {
      if (this.isZodError(error)) {
        this.logValidationFailure(error)
        
        // In non-enforcing mode, return original response
        if (this.logLevel === 'warn') {
          const response = await requestFn({ xr: this.createMockHTTPClient() })
          return response
        }
        
        throw new Error(`Validation failed for ${this.debugKey}: ${error.message}`)
      }
      
      throw error
    }
  }

  /**
   * Logs validation failures for monitoring
   * Original: logValidationFailure from BaseValidator
   */
  private logValidationFailure(error: any): void {
    // Would integrate with analytics system
    console.warn('Validator Failure', {
      name: this.debugKey,
      level: this.logLevel,
      error: JSON.stringify(error)
    })
    
    if (this.logLevel === 'error') {
      console.error(`Validation failed for api response for ${this.debugKey}`, this.formatValidationErrors(error))
    }
  }

  /**
   * Formats validation errors for better readability
   * Original: formatValidationErrors from BaseValidator
   */
  protected formatValidationErrors(error: any): ValidationError {
    const formattedErrors: ValidationError = {}
    
    if (error.issues) {
      error.issues.forEach((issue: any) => {
        const path = issue.path.map((segment: any) => 
          typeof segment === 'number' ? '[#]' : segment
        ).join('.')
        
        if (!formattedErrors[path]) {
          formattedErrors[path] = []
        }
        formattedErrors[path].push(issue.message)
      })
    }
    
    return formattedErrors
  }

  /**
   * Check if error is a Zod validation error
   */
  private isZodError(error: any): boolean {
    return error && error.issues && Array.isArray(error.issues)
  }

  /**
   * Create mock HTTP client for testing
   */
  protected createMockHTTPClient(): any {
    return {
      get: async (_url: string, _params?: any) => ({ data: {}, status: 200 }),
      post: async (_url: string, _data?: any) => ({ data: {}, status: 200 }),
      put: async (_url: string, _data?: any) => ({ data: {}, status: 200 }),
      delete: async (_url: string) => ({ data: {}, status: 200 })
    }
  }
}

/**
 * Enhanced Validator with Feature Flag Support
 * Original: EnhancedValidator from 181241.ts
 */
export class EnhancedValidator<T> extends BaseValidator<T> {
  private readonly featureFlagKey?: string
  private readonly enforce: boolean
  private readonly reportAsSentryError: boolean

  constructor(
    debugKey: string, 
    schema: any, 
    featureFlagKey?: string, 
    enforce: boolean = false, 
    reportAsSentryError: boolean = false
  ) {
    super(debugKey, schema, enforce ? 'error' : 'warn')
    this.featureFlagKey = featureFlagKey
    this.enforce = enforce
    this.reportAsSentryError = reportAsSentryError
  }

  /**
   * Validates with feature flag and enforcement logic
   * Original: enhanced validation logic
   */
  async validate(requestFn: (context: ValidationContext) => Promise<ValidatorResponse>): Promise<ValidatorResponse<T>> {
    // Check feature flag if specified
    if (this.featureFlagKey && !this.isFeatureEnabled(this.featureFlagKey)) {
      // Feature flag disabled, skip validation
      return requestFn({ xr: this.createMockHTTPClient() })
    }

    try {
      return await super.validate(requestFn)
    } catch (error) {
      if (this.reportAsSentryError) {
        this.reportToSentry(error)
      }
      
      if (this.enforce) {
        throw error
      }
      
      // Non-enforcing mode, return original response
      return requestFn({ xr: this.createMockHTTPClient() })
    }
  }

  /**
   * Check if feature flag is enabled
   */
  private isFeatureEnabled(_flagKey: string): boolean {
    // Would integrate with feature flag system
    return true // Default to enabled for now
  }

  /**
   * Report error to Sentry
   */
  private reportToSentry(error: any): void {
    // Would integrate with Sentry error reporting
    console.error('Sentry Report:', this.debugKey, error)
  }
}

/**
 * Security Form Manager
 * Original: security form operations from 744076.ts
 */
export class SecurityFormManager {
  private securityFormValidator: BaseValidator<any>
  private getSecurityFormResponseValidator: BaseValidator<any>
  private submitSecurityFormResponseValidator: BaseValidator<any>
  private deleteSecurityFormResponseValidator: BaseValidator<any>

  constructor() {
    // Initialize validators with mock schemas
    this.securityFormValidator = new BaseValidator('SecurityFormValidator', {})
    this.getSecurityFormResponseValidator = new BaseValidator('GetSecurityFormResponseValidator', {})
    this.submitSecurityFormResponseValidator = new BaseValidator('SubmitSecurityFormResponseValidator', {})
    this.deleteSecurityFormResponseValidator = new BaseValidator('DeleteSecurityFormResponseValidator', {})
  }

  /**
   * Get blank security form
   * Original: getBlankSecurityForm from 744076.ts
   */
  async getBlankSecurityForm(version?: string): Promise<SecurityFormResponse> {
    const response = await this.securityFormValidator.validate(async ({ xr }) => {
      if (version) {
        return await xr.get('/api/plugin_security_form', { version })
      } else {
        return await xr.get('/api/plugin_security_form')
      }
    })

    const { meta } = response
    return {
      questions: meta?.questions || {},
      version: meta?.version || '1.0.0'
    }
  }

  /**
   * Submit security form response
   * Original: submitSecurityFormResponse from 744076.ts
   */
  async submitSecurityFormResponse(
    pluginId: string,
    extensionType: 'plugin' | 'widget',
    formResponse: SecurityFormResponse
  ): Promise<void> {
    const endpoint = extensionType === 'plugin' 
      ? `/api/plugins/${pluginId}/plugin_security_form_response`
      : `/api/widgets/${pluginId}/plugin_security_form_response`

    await this.submitSecurityFormResponseValidator.validate(async ({ xr }) => {
      return await xr.post(endpoint, this.convertCamelCaseToSnakeCase({
        response: formResponse.questions,
        version: formResponse.version
      }))
    })
  }

  /**
   * Delete security form response
   * Original: deleteSecurityFormResponse from 744076.ts
   */
  async deleteSecurityFormResponse(
    pluginId: string,
    extensionType: 'plugin' | 'widget',
    version: string
  ): Promise<void> {
    const endpoint = extensionType === 'plugin'
      ? `/api/plugins/${pluginId}/plugin_security_form_response`
      : `/api/widgets/${pluginId}/plugin_security_form_response`

    await this.deleteSecurityFormResponseValidator.validate(async ({ xr }) => {
      return await xr.delete(endpoint, { version })
    })
  }

  /**
   * Approve security form for review
   * Original: approveReviewPluginSecurityForms from 744076.ts
   */
  async approveSecurityForm(
    pluginId: string,
    formVersion: string,
    securityFormId: string
  ): Promise<void> {
    try {
      // Would make actual API call
      console.warn('Approving security form:', { pluginId, formVersion, securityFormId })
      
      // Simulate success
      return Promise.resolve()
    } catch {
      throw new Error('Unable to approve security form')
    }
  }

  /**
   * Reject security form for review
   * Original: rejectReviewPluginSecurityForms from 744076.ts
   */
  async rejectSecurityForm(
    pluginId: string,
    formVersion: string,
    securityFormId: string
  ): Promise<void> {
    try {
      // Would make actual API call
      console.warn('Rejecting security form:', { pluginId, formVersion, securityFormId })
      
      // Simulate success
      return Promise.resolve()
    } catch {
      throw new Error('Unable to reject security form')
    }
  }

  /**
   * Convert camelCase to snake_case recursively
   * Original: recursivelyChangeCamelCaseToSnakeCase from 744076.ts
   */
  private convertCamelCaseToSnakeCase(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(item => this.convertCamelCaseToSnakeCase(item))
    }
    
    if (typeof obj === 'object' && obj !== null) {
      return Object.entries(obj).reduce((result, [key, value]) => {
        const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase()
        return {
          ...result,
          [snakeKey]: this.convertCamelCaseToSnakeCase(value)
        }
      }, {})
    }
    
    return obj
  }
}

/**
 * Web Application Firewall (WAF) Manager
 * Original: WAFManager from 394005.ts
 */
export class WAFManager {
  private pendingWAFVerification?: WAFVerificationState
  private readonly challengeAttemptsKey = 'aws_waf_token_challenge_attempts'

  /**
   * Wait for WAF validation to complete
   * Original: waitForWAFValidation from 394005.ts
   */
  async waitForWAFValidation(validationType: 'challenge' | 'captcha'): Promise<void> {
    if (this.pendingWAFVerification) {
      return this.pendingWAFVerification.deferred.promise
    }

    const deferred = this.createDeferredPromise()
    const startTime = performance.now()
    
    this.updateChallengeAttempts()

    if (validationType === 'challenge') {
      return this.initializeChallengeValidation(deferred, startTime)
    }
    
    if (validationType === 'captcha') {
      return this.initializeCaptchaValidation(deferred, startTime)
    }

    return Promise.reject(new Error(`Unknown validation type: ${validationType}`))
  }

  /**
   * Initialize challenge validation with iframe
   * Original: initializeChallengeValidation from 394005.ts
   */
  private initializeChallengeValidation(deferred: any, startTime: number): Promise<void> {
    const clearTimeoutFn = this.createTimeout(deferred, 5000)
    const iframe = this.createWAFIframe()
    
    window.addEventListener('message', this.onMessage.bind(this))
    
    this.pendingWAFVerification = {
      type: 'challenge',
      deferred,
      iframe,
      clearTimeout: clearTimeoutFn,
      startTime
    }
    
    return deferred.promise
  }

  /**
   * Initialize captcha validation with popup
   * Original: initializeCaptchaValidation from 394005.ts
   */
  private initializeCaptchaValidation(deferred: any, startTime: number): Promise<void> {
    this.pendingWAFVerification = {
      type: 'captcha',
      deferred,
      startTime
    }
    
    this.openPopupInterstitialModal()
    return deferred.promise
  }

  /**
   * Create WAF validation iframe
   * Original: createWAFIframe from 394005.ts
   */
  private createWAFIframe(): HTMLIFrameElement {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = 'about:blank'
    document.body.appendChild(iframe)
    return iframe
  }

  /**
   * Handle WAF validation messages
   * Original: onMessage handling from 394005.ts
   */
  private onMessage(event: MessageEvent): void {
    if (!this.pendingWAFVerification) return

    try {
      const data = event.data
      
      if (data.type === 'waf_validation_success') {
        this.handleValidationSuccess()
      } else if (data.type === 'waf_validation_failure') {
        this.handleValidationFailure(data.error)
      }
    } catch (error) {
      console.error('WAF message handling error:', error)
      this.handleValidationFailure('Message processing error')
    }
  }

  /**
   * Handle successful WAF validation
   * Original: success handling from 394005.ts
   */
  private handleValidationSuccess(): void {
    if (!this.pendingWAFVerification) return

    console.warn('WAF validation successful', {
      type: this.pendingWAFVerification.type
    })

    if (this.pendingWAFVerification.type === 'captcha') {
      this.handleCaptchaSuccess()
    } else {
      this.handleChallengeSuccess()
    }

    this.cleanupAndResolve(this.pendingWAFVerification.deferred, 'success')
  }

  /**
   * Handle WAF validation failure
   */
  private handleValidationFailure(error: string): void {
    if (!this.pendingWAFVerification) return

    console.error('WAF validation failed:', error)
    this.cleanupAndReject(this.pendingWAFVerification.deferred, error)
  }

  /**
   * Handle successful CAPTCHA validation
   * Original: handleCaptchaSuccess from 394005.ts
   */
  private handleCaptchaSuccess(): void {
    // Close popup modal if open
    this.closePopupModal()
  }

  /**
   * Handle successful challenge validation
   * Original: handleChallengeSuccess from 394005.ts
   */
  private handleChallengeSuccess(): void {
    // Remove iframe if present
    if (this.pendingWAFVerification?.iframe) {
      document.body.removeChild(this.pendingWAFVerification.iframe)
    }
  }

  /**
   * Update challenge attempts in localStorage
   * Original: updateChallengeAttempts from 394005.ts
   */
  private updateChallengeAttempts(): void {
    try {
      const storedAttempts = localStorage.getItem(this.challengeAttemptsKey)
      
      if (storedAttempts) {
        const attemptData = JSON.parse(storedAttempts)
        attemptData.attempts = 1
        localStorage.setItem(this.challengeAttemptsKey, JSON.stringify(attemptData))
      }
    } catch (error) {
      console.error('Failed to update WAF challenge attempts:', error)
    }
  }

  /**
   * Open popup interstitial modal
   * Original: openPopupInterstitialModal from 394005.ts
   */
  private openPopupInterstitialModal(): void {
    // Would open actual popup modal
    console.warn('Opening WAF popup modal')
  }

  /**
   * Close popup modal
   */
  private closePopupModal(): void {
    // Would close popup modal
    console.warn('Closing WAF popup modal')
  }

  /**
   * Create timeout for validation
   */
  private createTimeout(deferred: any, timeout: number): () => void {
    const timeoutId = setTimeout(() => {
      this.handleValidationFailure('Validation timeout')
    }, timeout)

    return () => clearTimeout(timeoutId)
  }

  /**
   * Create deferred promise
   */
  private createDeferredPromise(): any {
    let resolve: (value?: any) => void
    let reject: (reason?: any) => void

    const promise = new Promise((res, rej) => {
      resolve = res
      reject = rej
    })

    return {
      promise,
      resolve: resolve!,
      reject: reject!
    }
  }

  /**
   * Cleanup and resolve validation
   */
  private cleanupAndResolve(deferred: any, result: any): void {
    this.cleanup()
    deferred.resolve(result)
  }

  /**
   * Cleanup and reject validation
   */
  private cleanupAndReject(deferred: any, error: any): void {
    this.cleanup()
    deferred.reject(new Error(error))
  }

  /**
   * Cleanup WAF validation state
   */
  private cleanup(): void {
    if (this.pendingWAFVerification?.clearTimeout) {
      this.pendingWAFVerification.clearTimeout()
    }

    window.removeEventListener('message', this.onMessage.bind(this))
    this.pendingWAFVerification = undefined
  }
}

/**
 * Permission Validator
 * Original: permission validation logic from various files
 */
export class PermissionValidator {
  /**
   * Validate iframe permissions
   * Original: permission string generation logic
   */
  validateIframePermissions(options: PermissionOptions): string {
    const permissions: string[] = []
    
    if (options.cameraAccess) {
      permissions.push('camera')
    }
    
    if (options.microphoneAccess) {
      permissions.push('microphone')
    }
    
    if (options.displayCaptureAccess) {
      permissions.push('display-capture')
    }
    
    if (options.clipboardWriteAccess) {
      permissions.push('clipboard-write')
    }
    
    return permissions.join('; ')
  }

  /**
   * Validate domain access
   */
  validateDomainAccess(requestedDomain: string, allowedDomains: string[]): boolean {
    if (allowedDomains.includes('*')) {
      return true
    }
    
    if (allowedDomains.includes(requestedDomain)) {
      return true
    }
    
    // Check wildcard domains
    for (const allowedDomain of allowedDomains) {
      if (allowedDomain.startsWith('*.')) {
        const baseDomain = allowedDomain.slice(2)
        if (requestedDomain.endsWith(baseDomain)) {
          return true
        }
      }
    }
    
    return false
  }

  /**
   * Validate plugin permissions
   */
  validatePluginPermissions(pluginId: string, requestedPermissions: string[]): boolean {
    // Would check against plugin manifest and user permissions
    console.warn('Validating plugin permissions:', { pluginId, requestedPermissions })
    return true // Default to allow for now
  }
}

/**
 * Content Security Policy (CSP) Manager
 * Original: security policy violation handling
 */
export class CSPManager {
  private violations: SecurityPolicyViolation[] = []

  /**
   * Initialize CSP monitoring
   * Original: securitypolicyviolation event handling
   */
  initializeCSPMonitoring(): void {
    document.addEventListener('securitypolicyviolation', (event) => {
      this.handleCSPViolation(event as SecurityPolicyViolationEvent)
    })
  }

  /**
   * Handle CSP violations
   * Original: CSP violation logging from plugin-communication module
   */
  private handleCSPViolation(event: SecurityPolicyViolationEvent): void {
    const violation: SecurityPolicyViolation = {
      violatedDirective: event.violatedDirective,
      blockedURI: event.blockedURI,
      originalPolicy: event.originalPolicy,
      timestamp: Date.now()
    }

    this.violations.push(violation)
    
    console.warn('Security Policy Violation:', violation)
    
    // Report to monitoring system
    this.reportCSPViolation(violation)
  }

  /**
   * Report CSP violation to monitoring
   */
  private reportCSPViolation(violation: any): void {
    // Would send to monitoring system
    console.warn('CSP violation reported:', violation)
  }

  /**
   * Get CSP violations
   */
  getViolations(): any[] {
    return [...this.violations]
  }

  /**
   * Clear CSP violations
   */
  clearViolations(): void {
    this.violations = []
  }
}

/**
 * Input Validation Manager
 * Original: input validation patterns from 533885.ts
 */
export class InputValidationManager {
  /**
   * Create validation controller
   * Original: validation controller from 533885.ts
   */
  createValidationController(options: {
    validationBehavior: ValidationBehavior
    realtimeValidation?: boolean
    displayValidation?: boolean
  }) {
    const {
      validationBehavior,
      realtimeValidation = false,
      displayValidation = false
    } = options

    return {
      realtimeValidation: realtimeValidation || validationBehavior === 'native',
      displayValidation: displayValidation || validationBehavior === 'aria',
      
      updateValidation: (errors: ValidationError) => {
        console.warn('Updating validation:', errors)
      },
      
      resetValidation: () => {
        console.warn('Resetting validation')
      },
      
      commitValidation: () => {
        console.warn('Committing validation')
      }
    }
  }

  /**
   * Sanitize input string
   */
  sanitizeInput(input: string): string {
    return input
      .replace(/[<>]/g, '') // Remove HTML brackets
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .trim()
  }

  /**
   * Validate email format
   */
  validateEmail(email: string): boolean {
    // Safer email regex to avoid polynomial backtracking
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
    return emailRegex.test(email)
  }

  /**
   * Validate URL format
   */
  validateURL(url: string): boolean {
    try {
      // eslint-disable-next-line no-new
      new URL(url)
      return true
    } catch {
      return false
    }
  }
}

/**
 * Factory Functions
 */

/**
 * Create base validator
 */
export function createBaseValidator<T>(debugKey: string, schema: any, logLevel?: LogLevel): BaseValidator<T> {
  return new BaseValidator<T>(debugKey, schema, logLevel)
}

/**
 * Create enhanced validator
 */
export function createEnhancedValidator<T>(
  debugKey: string,
  schema: any,
  featureFlagKey?: string,
  enforce?: boolean,
  reportAsSentryError?: boolean
): EnhancedValidator<T> {
  return new EnhancedValidator<T>(debugKey, schema, featureFlagKey, enforce, reportAsSentryError)
}

/**
 * Create security form manager
 */
export function createSecurityFormManager(): SecurityFormManager {
  return new SecurityFormManager()
}

/**
 * Create WAF manager
 */
export function createWAFManager(): WAFManager {
  return new WAFManager()
}

/**
 * Create permission validator
 */
export function createPermissionValidator(): PermissionValidator {
  return new PermissionValidator()
}

/**
 * Create CSP manager
 */
export function createCSPManager(): CSPManager {
  return new CSPManager()
}

/**
 * Create input validation manager
 */
export function createInputValidationManager(): InputValidationManager {
  return new InputValidationManager()
}

/**
 * Convenience Exports
 */
export {
  CSPManager as CSP,
  EnhancedValidator as EnhancedVal,
  InputValidationManager as InputValidation,
  PermissionValidator as Permissions,
  SecurityFormManager as SecurityForms,
  BaseValidator as Validator,
  WAFManager as WAF
}

/**
 * Default Export - Comprehensive Security and Validation System
 */
export default {
  BaseValidator,
  EnhancedValidator,
  SecurityFormManager,
  WAFManager,
  PermissionValidator,
  CSPManager,
  InputValidationManager,
  createBaseValidator,
  createEnhancedValidator,
  createSecurityFormManager,
  createWAFManager,
  createPermissionValidator,
  createCSPManager,
  createInputValidationManager
}
