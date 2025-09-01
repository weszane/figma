/**
 * API Integration and Service Management Module
 * 
 * This module handles external API integration, service management, network operations,
 * and file operations extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - HTTP request management and network operations
 * - API service integration and external service calls
 * - File upload/download operations
 * - Service binding and registration management
 * - Request/response validation and transformation
 * - Schema validation and error handling
 * - Plugin manifest and capability management
 * - Network access control and domain validation
 */

/**
 * HTTP Request and Response Types
 */
export interface APIRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  url: string
  headers?: Record<string, string>
  data?: any
  params?: Record<string, any>
}

export interface APIResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
}

export interface UploadConfig {
  url: string
  fields: Record<string, string>
  signedCloudfrontUrl?: string | null
}

export interface FileUploadRequest {
  file: File | Blob
  uploadConfig: UploadConfig
  onProgress?: (progress: number) => void
}

/**
 * Service Configuration Types
 */
export interface ServiceManifest {
  name: string
  allowedDomains: string[]
  apiVersion: string
  capabilities: string[]
  networkAccess?: {
    allowedDomains: string[]
    devAllowedDomains?: string[]
  }
  enableProposedApi?: boolean
}

export interface ServiceBindings {
  [key: string]: any
}

/**
 * HTTP Client Manager
 */
export class HTTPClientManager {
  private baseURL: string
  private defaultHeaders: Record<string, string>
  private validators: Map<string, any> = new Map()

  constructor(baseURL = '', defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      ...defaultHeaders
    }
  }

  /**
   * Register schema validator for endpoint
   * Original pattern: this.SchemaValidator = vh()
   */
  registerValidator(endpoint: string, validator: any): void {
    this.validators.set(endpoint, validator)
  }

  /**
   * Execute validated request
   * Original pattern: this.SchemaValidator.validate(async ({ xr: t }) => ...)
   */
  async validateAndRequest<T>(
    endpoint: string,
    request: APIRequest
  ): Promise<APIResponse<T>> {
    const validator = this.validators.get(endpoint)
    
    if (validator) {
      return validator.validate(async ({ xr: httpClient }: any) => {
        return await this.executeRequest(httpClient, request)
      })
    }
    
    return this.executeRequest(null, request)
  }

  /**
   * Execute HTTP request
   * Original pattern: await t.get/post/put("/api/endpoint", data)
   */
  async executeRequest<T>(
    httpClient: any,
    request: APIRequest
  ): Promise<APIResponse<T>> {
    try {
      const _client = httpClient || this
      const url = this.resolveURL(request.url)
      
      const config = {
        method: request.method,
        headers: { ...this.defaultHeaders, ...request.headers },
        ...(request.data && { body: JSON.stringify(request.data) })
      }

      // Mock implementation - would use actual HTTP client
      const response = await this.mockRequest(url, config)
      
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers || {}
      }
    } catch (error) {
      console.warn('HTTP request failed:', error)
      throw error
    }
  }

  /**
   * GET request
   */
  async get<T>(url: string, params?: Record<string, any>): Promise<APIResponse<T>> {
    return this.executeRequest(null, {
      method: 'GET',
      url: this.buildURLWithParams(url, params)
    })
  }

  /**
   * POST request
   */
  async post<T>(url: string, data?: any): Promise<APIResponse<T>> {
    return this.executeRequest(null, {
      method: 'POST',
      url,
      data
    })
  }

  /**
   * PUT request
   */
  async put<T>(url: string, data?: any): Promise<APIResponse<T>> {
    return this.executeRequest(null, {
      method: 'PUT',
      url,
      data
    })
  }

  /**
   * DELETE request
   */
  async delete<T>(url: string): Promise<APIResponse<T>> {
    return this.executeRequest(null, {
      method: 'DELETE',
      url
    })
  }

  // Private helper methods

  private resolveURL(url: string): string {
    if (url.startsWith('http')) return url
    return `${this.baseURL}${url.startsWith('/') ? url : `/${url}`}`
  }

  private buildURLWithParams(url: string, params?: Record<string, any>): string {
    if (!params) return url
    
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value))
      }
    })
    
    const paramString = searchParams.toString()
    return paramString ? `${url}?${paramString}` : url
  }

  private async mockRequest(url: string, config: any): Promise<any> {
    // Mock implementation - would be replaced with actual HTTP client
    return {
      data: { success: true, url, config },
      status: 200,
      statusText: 'OK',
      headers: { 'content-type': 'application/json' }
    }
  }
}

/**
 * File Operations Manager
 */
export class FileOperationsManager {
  private httpClient: HTTPClientManager

  constructor(httpClient?: HTTPClientManager) {
    this.httpClient = httpClient || new HTTPClientManager()
  }

  /**
   * Upload file with progress tracking
   * Original pattern: file upload operations
   */
  async uploadFile(request: FileUploadRequest): Promise<APIResponse<any>> {
    try {
      const { file, uploadConfig, onProgress } = request
      const formData = new FormData()
      
      // Add upload fields
      Object.entries(uploadConfig.fields).forEach(([key, value]) => {
        formData.append(key, value)
      })
      
      // Add file
      formData.append('file', file)

      // Mock progress tracking
      if (onProgress) {
        const progressInterval = setInterval(() => {
          const progress = Math.random() * 100
          onProgress(Math.min(progress, 100))
          
          if (progress >= 100) {
            clearInterval(progressInterval)
          }
        }, 100)
      }

      // Execute upload request
      const response = await fetch(uploadConfig.url, {
        method: 'POST',
        body: formData
      })

      return {
        data: await response.json(),
        status: response.status,
        statusText: response.statusText,
        headers: Object.fromEntries(response.headers.entries())
      }
    } catch (error) {
      console.error('File upload failed:', error)
      throw error
    }
  }

  /**
   * Download file from URL
   */
  async downloadFile(url: string, filename?: string): Promise<Blob> {
    try {
      const response = await fetch(url)
      
      if (!response.ok) {
        throw new Error(`Download failed: ${response.statusText}`)
      }

      const blob = await response.blob()
      
      // If filename provided, trigger download
      if (filename) {
        const downloadURL = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = downloadURL
        link.download = filename
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(downloadURL)
      }

      return blob
    } catch (error) {
      console.error('File download failed:', error)
      throw error
    }
  }

  /**
   * Get upload configuration
   * Original pattern: upload URL and field generation
   */
  async getUploadConfig(type: 'icon' | 'cover' | 'code' | 'snapshot'): Promise<UploadConfig> {
    const response = await this.httpClient.get(`/api/upload/config/${type}`)
    
    // Type assertion for response data structure
    const data = response.data as {
      upload_url: string
      fields: Record<string, string>
      signed_cloudfront_url?: string
    }
    
    return {
      url: data.upload_url,
      fields: data.fields,
      signedCloudfrontUrl: data.signed_cloudfront_url
    }
  }
}

/**
 * Service Registry and Binding Manager
 */
export class ServiceRegistryManager {
  private services: Map<string, ServiceBindings> = new Map()
  private globalBindings: ServiceBindings = {}

  /**
   * Initialize global service bindings
   * Original: initializeGlobalBindings(e)
   */
  initializeGlobalBindings(bindings: ServiceBindings): void {
    this.globalBindings = { ...this.globalBindings, ...bindings }
    
    // Register all facet APIs
    this.registerFacetAPIs(bindings)
  }

  /**
   * Register Figma service APIs
   * Original: registerFigmaServices()
   */
  registerFigmaServices(): ServiceBindings {
    const services = {
      // Core services
      editScopeBindings: this.globalBindings.EditScopeBindings,
      nodeTsApi: this.globalBindings.NodeTsApi,
      sceneGraphTsApi: this.globalBindings.SceneGraphTsApi,
      
      // Helper services
      assistantTools: this.globalBindings.AssistantTools,
      fonts: this.globalBindings.Fonts,
      cmsAnalytics: this.globalBindings.CmsAnalytics,
      imageCppBindings: this.globalBindings.ImageCppBindings,
      
      // Facet APIs
      ...this.getFacetAPIs()
    }

    this.services.set('figma', services)
    return services
  }

  /**
   * Get service by name
   */
  getService(serviceName: string): ServiceBindings | null {
    return this.services.get(serviceName) || null
  }

  /**
   * Register custom service
   */
  registerService(serviceName: string, bindings: ServiceBindings): void {
    this.services.set(serviceName, bindings)
  }

  /**
   * Get all available APIs
   * Original: getApis()
   */
  getAvailableAPIs(): ServiceBindings {
    const requiredAPIs = [
      'NodeTsApi',
      'NodeTsApiGenerated', 
      'SceneGraphTsApi',
      'StackFacetTsApiGenerated',
      'PrototypingFacetTsApiGenerated',
      'RenderableBaseFacetTsApiGenerated',
      'ConstraintsFacetTsApiGenerated'
    ]

    const apis: ServiceBindings = {}
    
    requiredAPIs.forEach(apiName => {
      const api = this.globalBindings[apiName]
      if (!api) {
        throw new Error(`Required API ${apiName} is not available`)
      }
      apis[apiName] = api
    })

    return apis
  }

  /**
   * Validate service availability
   */
  validateServiceAvailability(serviceName: string): boolean {
    return this.services.has(serviceName)
  }

  // Private helper methods

  private registerFacetAPIs(bindings: ServiceBindings): void {
    const facetAPIs = [
      'AccessibilityFacetTsApiGenerated',
      'AnnotationFacetTsApiGenerated',
      'AssetFacetTsApiGenerated',
      'BrushFacetTsApiGenerated',
      'BuzzFacetTsApiGenerated',
      'CanvasFacetTsApiGenerated',
      'CodeFacetTsApiGenerated',
      'ComponentishFacetTsApiGenerated',
      'ConstraintsFacetTsApiGenerated',
      'DocumentFacetTsApiGenerated',
      'FrameFacetTsApiGenerated',
      'GeometryFacetTsApiGenerated',
      'InstanceFacetTsApiGenerated',
      'LayerFacetTsApiGenerated',
      'PrototypingFacetTsApiGenerated',
      'StyleFacetTsApiGenerated',
      'TextFacetTsApiGenerated',
      'VectorFacetTsApiGenerated',
      'WidgetFacetTsApiGenerated'
    ]

    facetAPIs.forEach(apiName => {
      if (bindings[apiName]) {
        this.globalBindings[apiName] = bindings[apiName]
      }
    })
  }

  private getFacetAPIs(): ServiceBindings {
    const facetAPIs: ServiceBindings = {}
    
    Object.keys(this.globalBindings).forEach(key => {
      if (key.includes('FacetTsApiGenerated')) {
        facetAPIs[this.camelCase(key)] = this.globalBindings[key]
      }
    })

    return facetAPIs
  }

  private camelCase(str: string): string {
    return str.charAt(0).toLowerCase() + str.slice(1)
  }
}

/**
 * Network Access and Domain Manager
 */
export class NetworkAccessManager {
  private allowedDomains: string[] = []
  private devAllowedDomains: string[] = []
  private isLocalDevelopment = false

  /**
   * Configure network access from manifest
   * Original: networkAccess configuration logic
   */
  configureFromManifest(manifest: ServiceManifest, isLocal = false): void {
    this.isLocalDevelopment = isLocal
    
    if (manifest.networkAccess) {
      this.allowedDomains = manifest.networkAccess.allowedDomains || []
      this.devAllowedDomains = manifest.networkAccess.devAllowedDomains || []
    }
  }

  /**
   * Get effective allowed domains
   * Original: allowedDomains calculation logic
   */
  getAllowedDomains(): string[] {
    if (!this.allowedDomains.length) {
      return [] // Default to no network access
    }

    if (this.isLocalDevelopment && this.devAllowedDomains.length) {
      // For local development, merge dev and production domains
      if (this.devAllowedDomains.includes('*')) {
        return ['*'] // Wildcard access
      }
      
      if (this.allowedDomains.includes('none')) {
        return this.devAllowedDomains
      }
      
      // Merge and deduplicate
      return Array.from(new Set([...this.devAllowedDomains, ...this.allowedDomains]))
    }

    return this.allowedDomains
  }

  /**
   * Check if domain is allowed
   */
  isDomainAllowed(domain: string): boolean {
    const allowed = this.getAllowedDomains()
    
    if (allowed.includes('*')) return true
    if (allowed.includes('none')) return false
    
    return allowed.some(allowedDomain => {
      if (allowedDomain === domain) return true
      if (allowedDomain.startsWith('*.')) {
        const pattern = allowedDomain.slice(2)
        return domain.endsWith(pattern)
      }
      return false
    })
  }

  /**
   * Validate URL against allowed domains
   */
  validateURL(url: string): boolean {
    try {
      const urlObj = new URL(url)
      return this.isDomainAllowed(urlObj.hostname)
    } catch {
      return false
    }
  }
}

/**
 * Plugin Capability Manager
 */
export class PluginCapabilityManager {
  private capabilities: string[] = []
  private apiVersion = '1.0.0'
  private vmType: 'cppvm' | 'jsvm' = 'cppvm'

  /**
   * Configure from plugin manifest
   * Original: capability and configuration logic from em() function
   */
  configureFromManifest(manifest: ServiceManifest, isLocal = false): void {
    this.capabilities = manifest.capabilities || []
    this.apiVersion = manifest.apiVersion
    this.vmType = isLocal ? 'jsvm' : 'cppvm'
  }

  /**
   * Check if capability is enabled
   */
  hasCapability(capability: string): boolean {
    return this.capabilities.includes(capability)
  }

  /**
   * Get runtime configuration
   * Original: runtime config object creation
   */
  getRuntimeConfig(customOverrides: any = {}): any {
    return {
      apiVersion: this.apiVersion,
      capabilities: this.capabilities,
      vmType: this.vmType,
      checkSyntax: this.vmType === 'jsvm',
      isLocal: this.vmType === 'jsvm',
      enableProposedApi: this.vmType === 'jsvm',
      showLaunchErrors: this.vmType === 'cppvm',
      showRuntimeErrors: this.vmType === 'jsvm',
      disableSilenceConsole: this.vmType === 'jsvm',
      ...customOverrides
    }
  }

  /**
   * Validate required capabilities
   */
  validateRequiredCapabilities(required: string[]): boolean {
    return required.every(cap => this.hasCapability(cap))
  }
}

/**
 * API Request Management Services
 */
export class RequestManagementService {
  private httpClient: HTTPClientManager

  constructor() {
    this.httpClient = new HTTPClientManager('/api')
  }

  /**
   * Approve requests
   * Original: approveRequests(e)
   */
  async approveRequests(requestData: any): Promise<APIResponse<any>> {
    return this.httpClient.post('/account_type_requests/approve', requestData)
  }

  /**
   * Deny requests  
   * Original: denyRequests(e)
   */
  async denyRequests(requestData: any): Promise<APIResponse<any>> {
    return this.httpClient.post('/account_type_requests/deny', requestData)
  }

  /**
   * Nudge request
   * Original: nudgeRequest(e)
   */
  async nudgeRequest(requestData: { request_id: string }): Promise<APIResponse<any>> {
    const { request_id } = requestData
    return this.httpClient.post(`/account_type_requests/${request_id}/nudge`, requestData)
  }

  /**
   * Dismiss nudge badge
   * Original: dismissNudgeRequestBadge(e)
   */
  async dismissNudgeRequestBadge(requestData: { request_id: string }): Promise<APIResponse<any>> {
    const { request_id } = requestData
    return this.httpClient.post(`/account_type_requests/${request_id}/nudge/dismiss_badge`, requestData)
  }

  /**
   * Update request message
   * Original: updateRequestMessage(e)
   */
  async updateRequestMessage(requestData: { request_id: string }): Promise<APIResponse<any>> {
    const { request_id } = requestData
    return this.httpClient.post(`/account_type_requests/${request_id}/update_message`, requestData)
  }
}

/**
 * Communication Preference Service
 */
export class CommunicationPreferenceService {
  private httpClient: HTTPClientManager

  constructor() {
    this.httpClient = new HTTPClientManager('/api')
  }

  /**
   * Get user communication preference
   * Original: getUserCommunicationPreference(e)
   */
  async getUserCommunicationPreference(params: {
    channelType: string
    policyTypesCsv: string
  }): Promise<APIResponse<any>> {
    return this.httpClient.get('/user_communication_preference', {
      channel_type: params.channelType,
      policy_types_csv: params.policyTypesCsv
    })
  }

  /**
   * Update user communication preference
   * Original: updateUserCommunicationPreference(e)
   */
  async updateUserCommunicationPreference(data: {
    channelType: string
    policyType: string
    policySetting: string
  }): Promise<APIResponse<any>> {
    return this.httpClient.put('/user_communication_preference/single_policy', {
      channel_type: data.channelType,
      policy_type: data.policyType,
      policy_setting: data.policySetting
    })
  }

  /**
   * Update user communication channel setting
   * Original: updateUserCommunicationChannelSetting(e)
   */
  async updateUserCommunicationChannelSetting(data: {
    channelType: string
    channelSetting: string
  }): Promise<APIResponse<any>> {
    return this.httpClient.post('/user_communication_preference/channel_policy', {
      channel_type: data.channelType,
      channel_setting: data.channelSetting
    })
  }
}

/**
 * Factory Functions
 */

/**
 * Create HTTP client manager
 */
export function createHTTPClientManager(
  baseURL?: string,
  defaultHeaders?: Record<string, string>
): HTTPClientManager {
  return new HTTPClientManager(baseURL, defaultHeaders)
}

/**
 * Create file operations manager
 */
export function createFileOperationsManager(httpClient?: HTTPClientManager): FileOperationsManager {
  return new FileOperationsManager(httpClient)
}

/**
 * Create service registry manager
 */
export function createServiceRegistryManager(): ServiceRegistryManager {
  return new ServiceRegistryManager()
}

/**
 * Create network access manager
 */
export function createNetworkAccessManager(): NetworkAccessManager {
  return new NetworkAccessManager()
}

/**
 * Create plugin capability manager
 */
export function createPluginCapabilityManager(): PluginCapabilityManager {
  return new PluginCapabilityManager()
}

/**
 * Create request management service
 */
export function createRequestManagementService(): RequestManagementService {
  return new RequestManagementService()
}

/**
 * Create communication preference service
 */
export function createCommunicationPreferenceService(): CommunicationPreferenceService {
  return new CommunicationPreferenceService()
}

/**
 * Convenience Exports
 */
export {
  PluginCapabilityManager as Capabilities,
  CommunicationPreferenceService as CommPrefs,
  FileOperationsManager as FileOps,
  HTTPClientManager as HTTP,
  NetworkAccessManager as Network,
  RequestManagementService as Requests,
  ServiceRegistryManager as Services
}

/**
 * Default Export - Comprehensive API Integration System
 */
export default {
  HTTPClientManager,
  FileOperationsManager,
  ServiceRegistryManager,
  NetworkAccessManager,
  PluginCapabilityManager,
  RequestManagementService,
  CommunicationPreferenceService,
  createHTTPClientManager,
  createFileOperationsManager,
  createServiceRegistryManager,
  createNetworkAccessManager,
  createPluginCapabilityManager,
  createRequestManagementService,
  createCommunicationPreferenceService
}
