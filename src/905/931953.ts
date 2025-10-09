import { z as _$$z } from "zod"
import { createMetaValidator, createNoOpValidator } from "../figma_app/181241"

export let siteAPIService = new class {
  // Schema validators for different API responses
  SitesBundleSchemaValidator = createNoOpValidator()
  SitesCustomDomainDnsRecordsValidator = createMetaValidator("SitesCustomDomainDnsRecordsValidator", _$$z.array(_$$z.object({
    type: _$$z.string(),
    host: _$$z.string(),
    value: _$$z.string(),
  })), null)

  SitesActivateCustomDomainValidator = createMetaValidator("SitesActivateCustomDomainValidator", _$$z.void(), null)
  SitesRemoveCustomDomainValidator = createMetaValidator("SitesRemoveCustomDomainValidator", _$$z.void(), null)
  SitesCustomDomainLimitReachedValidator = createMetaValidator("SitesCustomDomainLimitReachedValidator", _$$z.object({
    limit_reached: _$$z.boolean(),
    num_domains_allowed: _$$z.number(),
    num_domains: _$$z.number(),
  }), null)

  SitesUpdateBundleValidator = createMetaValidator("SitesUpdateBundleValidator", _$$z.void(), null)
  SitesUpdateSubdomainValidator = createMetaValidator("SitesUpdateSubdomainValidator", _$$z.object({
    domain: _$$z.string(),
  }), null)

  SitesValidateSubdomainValidator = createMetaValidator("SitesValidateSubdomainValidator", _$$z.void(), null)
  SitesFileKeyVideos = createMetaValidator("SitesFileKeyVideosValidator", _$$z.object({
    videos: _$$z.record(_$$z.string(), _$$z.string()),
  }), null)

  SitesFileKeyVideosSha1Metadata = createMetaValidator("SitesFileKeyVideosSha1MetadataValidator", _$$z.object({
    metadata: _$$z.object({
      bytes: _$$z.string().optional(),
      mime: _$$z.string(),
    }),
  }), null)

  SitesSetPasswordValidator = createMetaValidator("SitesSetPasswordValidator", _$$z.object({
    success: _$$z.boolean(),
    password_version: _$$z.number(),
  }), null)

  SitesUnsetPasswordValidator = createMetaValidator("SitesUnsetPasswordValidator", _$$z.object({
    success: _$$z.boolean(),
  }), null)

  constructor() {
  }

  /**
   * Uploads a sites bundle asynchronously
   * @param e - The upload parameters
   * @returns Promise with upload response
   */
  postSitesBundleAsync(e: { responsiveSetGuids: string[], fontIndexHash: string, fileVersionId: string, fileKey: string }) {
    return this.SitesBundleSchemaValidator.validate(async ({
      xr: t,
    }) => {
      let requestPayload = {
        responsive_set_guids: e.responsiveSetGuids,
        font_index_hash: e.fontIndexHash,
        file_version_id: e.fileVersionId,
      }
      return await t.post(`/api/sites/${e.fileKey}/async/upload`, requestPayload)
    })
  }

  /**
   * Unpublishes a site
   * @param e - The unpublish parameters
   * @returns Promise with unpublish response
   */
  unpublishSite(e: { fileKey: string }) {
    return this.SitesBundleSchemaValidator.validate(async ({
      xr: t,
    }) => await t.put(`/api/sites/${e.fileKey}/unpublish`))
  }

  /**
   * Adds a custom domain to a site
   * @param e - The domain parameters
   * @returns Promise with DNS records
   */
  addCustomDomain(e: { fileKey: string, domain: string, createPairedDomain: boolean }) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t,
    }) => await t.post(`/api/sites/${e.fileKey}/custom_domain`, {
      domain: e.domain,
      create_paired_domain: e.createPairedDomain,
    }))
  }

  /**
   * Configures a redirect for a site
   * @param e - The redirect parameters
   * @returns Promise with DNS records
   */
  configureRedirect(e: { fileKey: string }) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t,
    }) => await t.post(`/api/sites/${e.fileKey}/configure_redirect`))
  }

  /**
   * Activates a custom domain for a site
   * @param e - The activation parameters
   * @returns Promise with activation response
   */
  activateCustomDomain(e: { fileKey: string }) {
    return this.SitesActivateCustomDomainValidator.validate(async ({
      xr: t,
    }) => await t.post(`/api/sites/${e.fileKey}/verify_custom_domain`))
  }

  /**
   * Gets DNS records for a domain
   * @param e - The domain parameters
   * @returns Promise with DNS records
   */
  getDomainDNSRecords(e: { fileKey: string }) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t,
    }) => await t.get(`/api/sites/${e.fileKey}/get_custom_domain_dns_records`))
  }

  /**
   * Removes a custom domain from a site
   * @param e - The removal parameters
   * @returns Promise with removal response
   */
  removeCustomDomain(e: { fileKey: string }) {
    return this.SitesRemoveCustomDomainValidator.validate(async ({
      xr: t,
    }) => await t.del(`/api/sites/${e.fileKey}/remove_custom_domain`))
  }

  /**
   * Removes a custom domain redirect
   * @param e - The removal parameters
   * @returns Promise with removal response
   */
  removeCustomDomainRedirect(e: { fileKey: string }) {
    return this.SitesRemoveCustomDomainValidator.validate(async ({
      xr: t,
    }) => await t.del(`/api/sites/${e.fileKey}/remove_custom_domain_redirect`))
  }

  /**
   * Checks if custom domain limit is reached
   * @param e - The limit check parameters
   * @returns Promise with limit information
   */
  customDomainLimitReached(e: { fileKey: string }) {
    return this.SitesCustomDomainLimitReachedValidator.validate(async ({
      xr: t,
    }) => await t.get(`/api/sites/${e.fileKey}/check_custom_domain_limit`))
  }

  /**
   * Updates a site bundle
   * @param e - The update parameters
   * @returns Promise with update response
   */
  updateBundle(e: { fileKey: string, bundleId: string }) {
    return this.SitesUpdateBundleValidator.validate(async ({
      xr: t,
    }) => await t.put(`/api/sites/${e.fileKey}/update_bundle`, {
      bundle_id: e.bundleId,
    }))
  }

  /**
   * Updates a site subdomain
   * @param e - The update parameters
   * @returns Promise with domain information
   */
  updateSubdomain(e: { fileKey: string, new_base_domain: string }) {
    return this.SitesUpdateSubdomainValidator.validate(async ({
      xr: t,
    }) => await t.put(`/api/sites/${e.fileKey}/update_subdomain`, {
      new_base_domain: e.new_base_domain,
    }))
  }

  /**
   * Validates a subdomain
   * @param e - The validation parameters
   * @returns Promise with validation response
   */
  validateSubdomain(e: { fileKey: string, new_base_domain: string }) {
    return this.SitesValidateSubdomainValidator.validate(async ({
      xr: t,
    }) => await t.get(`/api/sites/${e.fileKey}/validate_subdomain`, {
      new_base_domain: e.new_base_domain,
    }))
  }

  /**
   * Gets videos for a file
   * @param e - The file parameters
   * @returns Promise with video information
   */
  getFileVideos(e: { fileKey: string }) {
    return this.SitesFileKeyVideos.validate(async ({
      xr: t,
    }) => await t.get(`/api/sites/${e.fileKey}/videos`))
  }

  /**
   * Gets metadata for a file video
   * @param e - The video parameters
   * @returns Promise with metadata information
   */
  getFileVideoMetadata(e: { fileKey: string, sha1: string }) {
    return this.SitesFileKeyVideosSha1Metadata.validate(async ({
      xr: t,
    }) => await t.get(`/api/sites/${e.fileKey}/videos/${e.sha1}/metadata`))
  }

  /**
   * Sets a password for a site
   * @param e - The password parameters
   * @returns Promise with password response
   */
  setPassword(e: { fileKey: string, password: string }) {
    return this.SitesSetPasswordValidator.validate(async ({
      xr: t,
    }) => await t.put(`/api/sites/${e.fileKey}/set_password`, {
      password: e.password,
    }))
  }

  /**
   * Unsets a password for a site
   * @param e - The unset parameters
   * @returns Promise with unset response
   */
  unsetPassword(e: { fileKey: string }) {
    return this.SitesUnsetPasswordValidator.validate(async ({
      xr: t,
    }) => await t.del(`/api/sites/${e.fileKey}/unset_password`))
  }
}()
export const z = siteAPIService
