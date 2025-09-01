import { z as _$$z } from "../905/239603";
import { vh, YV } from "../figma_app/181241";
export let $$a0 = new class {
  constructor() {
    this.SitesBundleSchemaValidator = vh();
    this.SitesCustomDomainDnsRecordsValidator = YV("SitesCustomDomainDnsRecordsValidator", _$$z.array(_$$z.object({
      type: _$$z.string(),
      host: _$$z.string(),
      value: _$$z.string()
    })), null);
    this.SitesActivateCustomDomainValidator = YV("SitesActivateCustomDomainValidator", _$$z.$$void(), null);
    this.SitesRemoveCustomDomainValidator = YV("SitesRemoveCustomDomainValidator", _$$z.$$void(), null);
    this.SitesCustomDomainLimitReachedValidator = YV("SitesCustomDomainLimitReachedValidator", _$$z.object({
      limit_reached: _$$z.boolean(),
      num_domains_allowed: _$$z.number(),
      num_domains: _$$z.number()
    }), null);
    this.SitesUpdateBundleValidator = YV("SitesUpdateBundleValidator", _$$z.$$void(), null);
    this.SitesUpdateSubdomainValidator = YV("SitesUpdateSubdomainValidator", _$$z.object({
      domain: _$$z.string()
    }), null);
    this.SitesValidateSubdomainValidator = YV("SitesValidateSubdomainValidator", _$$z.$$void(), null);
    this.SitesFileKeyVideos = YV("SitesFileKeyVideosValidator", _$$z.object({
      videos: _$$z.record(_$$z.string(), _$$z.string())
    }), null);
    this.SitesFileKeyVideosSha1Metadata = YV("SitesFileKeyVideosSha1MetadataValidator", _$$z.object({
      metadata: _$$z.object({
        bytes: _$$z.string().optional(),
        mime: _$$z.string()
      })
    }), null);
    this.SitesSetPasswordValidator = YV("SitesSetPasswordValidator", _$$z.object({
      success: _$$z.boolean(),
      password_version: _$$z.number()
    }), null);
    this.SitesUnsetPasswordValidator = YV("SitesUnsetPasswordValidator", _$$z.object({
      success: _$$z.boolean()
    }), null);
  }
  postSitesBundleAsync(e) {
    return this.SitesBundleSchemaValidator.validate(async ({
      xr: t
    }) => {
      let i = {
        responsive_set_guids: e.responsiveSetGuids,
        font_index_hash: e.fontIndexHash
      };
      i.file_version_id = e.fileVersionId;
      return await t.post(`/api/sites/${e.fileKey}/async/upload`, i);
    });
  }
  unpublishSite(e) {
    return this.SitesBundleSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/sites/${e.fileKey}/unpublish`));
  }
  addCustomDomain(e) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/sites/${e.fileKey}/custom_domain`, {
      domain: e.domain,
      create_paired_domain: e.createPairedDomain
    }));
  }
  configureRedirect(e) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/sites/${e.fileKey}/configure_redirect`));
  }
  activateCustomDomain(e) {
    return this.SitesActivateCustomDomainValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/sites/${e.fileKey}/verify_custom_domain`));
  }
  getDomainDNSRecords(e) {
    return this.SitesCustomDomainDnsRecordsValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/sites/${e.fileKey}/get_custom_domain_dns_records`));
  }
  removeCustomDomain(e) {
    return this.SitesRemoveCustomDomainValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/sites/${e.fileKey}/remove_custom_domain`));
  }
  removeCustomDomainRedirect(e) {
    return this.SitesRemoveCustomDomainValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/sites/${e.fileKey}/remove_custom_domain_redirect`));
  }
  customDomainLimitReached(e) {
    return this.SitesCustomDomainLimitReachedValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/sites/${e.fileKey}/check_custom_domain_limit`));
  }
  updateBundle(e) {
    return this.SitesUpdateBundleValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/sites/${e.fileKey}/update_bundle`, {
      bundle_id: e.bundleId
    }));
  }
  updateSubdomain(e) {
    return this.SitesUpdateSubdomainValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/sites/${e.fileKey}/update_subdomain`, {
      new_base_domain: e.new_base_domain
    }));
  }
  validateSubdomain(e) {
    return this.SitesValidateSubdomainValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/sites/${e.fileKey}/validate_subdomain`, {
      new_base_domain: e.new_base_domain
    }));
  }
  getFileVideos(e) {
    return this.SitesFileKeyVideos.validate(async ({
      xr: t
    }) => await t.get(`/api/sites/${e.fileKey}/videos`));
  }
  getFileVideoMetadata(e) {
    return this.SitesFileKeyVideosSha1Metadata.validate(async ({
      xr: t
    }) => await t.get(`/api/sites/${e.fileKey}/videos/${e.sha1}/metadata`));
  }
  setPassword(e) {
    return this.SitesSetPasswordValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/sites/${e.fileKey}/set_password`, {
      password: e.password
    }));
  }
  unsetPassword(e) {
    return this.SitesUnsetPasswordValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/sites/${e.fileKey}/unset_password`));
  }
}();
export const z = $$a0; 
