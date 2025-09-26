import { ServiceCategories } from "../905/165054";
import { z as _$$z, Ip } from "../905/239603";
import { reportError } from "../905/11";
import { createMetaValidator, createPaginatedValidator, APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
import { getAllTimeSortOption } from "../figma_app/324237";
import { ResourceTypeMap } from "../figma_app/701107";
import { ResourceWithContentSchema, ResourceWithOptionalContentListSchema, RecommendationDimensionsSchema, RecommendedResourcesSchema } from "../figma_app/306946";
import { liveStoreInstance } from "../905/713695";
import { PluginDetailsSchema } from "../figma_app/155287";
var $$_1 = (e => (e.HOMEPAGE = "homepage", e.CATEGORY = "category", e.PROFILE = "profile", e.PLUGINS = "plugins", e.RESOURCE_LANDING_PAGE = "resource_landing_page", e.SUGGESTED_EXTENSIONS = "suggested_extensions", e.RESOURCE_HUB = "resource_hub", e.COOPER_TEMPLATE_PICKER = "cooper_template_picker", e.SITES_TEMPLATE_PICKER = "sites_template_picker", e.EDITOR_COMMUNITY_VIEW = "editor_community_view", e))($$_1 || {});
let h = _$$z.object({
  resource: ResourceWithContentSchema.optional(),
  private_plugin: Ip.ignore(PluginDetailsSchema).optional()
});
let $$m0 = new class {
  constructor() {
    this.ResourceWithContentIDSchemaValidator = createMetaValidator("ResourceWithContentIDSchemaValidator", h, null, !0);
    this.CommunityResourcesSchemaValidator = createPaginatedValidator("CommunityResourcesSchemaValidator", ResourceWithOptionalContentListSchema, null, !0);
    this.ResourcesPaginatedQuery = liveStoreInstance.PaginatedQuery({
      fetch: async (e, {
        pageParam: t
      }) => {
        try {
          let r = await this.CommunityResourcesSchemaValidator.validate(async ({
            xr: r
          }) => {
            let n = APIParameterUtils.toAPIParameters({
              sort_by: getAllTimeSortOption(),
              ...e,
              resourceType: e.resourceType && e.resourceType.join(","),
              tags: e.tags && e.tags.join(","),
              cursor: t,
              resourceIds: e.resourceIds && e.resourceIds.join(","),
              locale: e.locale
            });
            return await r.getPaginated("/api/resources", n);
          });
          return {
            data: r.data.meta,
            nextPage: r.data.pagination.nextPage,
            prevPage: r.data.pagination.prevPage
          };
        } catch (e) {
          reportError(ServiceCategories.COMMUNITY, e);
          return e;
        }
      }
    });
    this.AdminResourceRecommendationsSchemaValidator = createMetaValidator("CommunityAdminResourceRecommendationsSchema", RecommendationDimensionsSchema, null);
    this.CommunityHomeShelfContentSchemaValidator = createMetaValidator("CommunityHomeShelfContentSchema", RecommendedResourcesSchema, null);
    this.getHomeShelfContent = liveStoreInstance.Query({
      fetch: ({
        seenResourceIds: e
      }) => this.CommunityHomeShelfContentSchemaValidator.validate(async ({
        xr: t
      }) => {
        try {
          return await t.get("/api/resources/home_shelf", APIParameterUtils.toAPIParameters({
            seenResourceIds: e?.join(",")
          }), {
            timeout: 1e4
          });
        } catch (e) {
          reportError(ServiceCategories.COMMUNITY, e);
          return e;
        }
      })
    });
  }
  getResourceWithContentID(e) {
    return this.ResourceWithContentIDSchemaValidator.validate(async ({
      xr: t
    }) => {
      let {
        resourceType,
        contentId,
        skipRelatedContent,
        includeFullCategory
      } = e;
      return await t.get(`/api/resources/${ResourceTypeMap[resourceType]}/${contentId}`, APIParameterUtils.toAPIParameters({
        skipRelatedContent,
        includeFullCategory
      }));
    });
  }
  likeResource(e) {
    return sendWithRetry.post(`/api/resource/${e.resourceId}/like`);
  }
  unlikeResource(e) {
    return sendWithRetry.del(`/api/resource/${e.resourceId}/like`);
  }
  saveResource(e) {
    return sendWithRetry.post(`/api/resource/${e.resource.id}/save`, {
      profile_id: e.profileId,
      org_id: e.orgId
    });
  }
  unsaveResource(e) {
    return sendWithRetry.del(`/api/resource/${e.resource.id}/save`, {
      profile_id: e.profileId,
      org_id: e.orgId
    });
  }
  getAdminResourceRecommendations() {
    return this.AdminResourceRecommendationsSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/admin/resource/recommendations"));
  }
}();
export const a = $$m0;
export const z = $$_1;
