import { ServiceCategories as _$$e } from "../905/165054";
import { z as _$$z, Ip } from "../905/239603";
import { reportError } from "../905/11";
import { YV, Rq, td } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { H } from "../figma_app/324237";
import { S } from "../figma_app/701107";
import { Q3, Y9, _s, Bn } from "../figma_app/306946";
import { M4 } from "../905/713695";
import { Lz } from "../figma_app/155287";
var $$_1 = (e => (e.HOMEPAGE = "homepage", e.CATEGORY = "category", e.PROFILE = "profile", e.PLUGINS = "plugins", e.RESOURCE_LANDING_PAGE = "resource_landing_page", e.SUGGESTED_EXTENSIONS = "suggested_extensions", e.RESOURCE_HUB = "resource_hub", e.COOPER_TEMPLATE_PICKER = "cooper_template_picker", e.SITES_TEMPLATE_PICKER = "sites_template_picker", e.EDITOR_COMMUNITY_VIEW = "editor_community_view", e))($$_1 || {});
let h = _$$z.object({
  resource: Q3.optional(),
  private_plugin: Ip.ignore(Lz).optional()
});
let $$m0 = new class {
  constructor() {
    this.ResourceWithContentIDSchemaValidator = YV("ResourceWithContentIDSchemaValidator", h, null, !0);
    this.CommunityResourcesSchemaValidator = Rq("CommunityResourcesSchemaValidator", Y9, null, !0);
    this.ResourcesPaginatedQuery = M4.PaginatedQuery({
      fetch: async (e, {
        pageParam: t
      }) => {
        try {
          let r = await this.CommunityResourcesSchemaValidator.validate(async ({
            xr: r
          }) => {
            let n = td.toAPIParameters({
              sort_by: H(),
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
          reportError(_$$e.COMMUNITY, e);
          return e;
        }
      }
    });
    this.AdminResourceRecommendationsSchemaValidator = YV("CommunityAdminResourceRecommendationsSchema", _s, null);
    this.CommunityHomeShelfContentSchemaValidator = YV("CommunityHomeShelfContentSchema", Bn, null);
    this.getHomeShelfContent = M4.Query({
      fetch: ({
        seenResourceIds: e
      }) => this.CommunityHomeShelfContentSchemaValidator.validate(async ({
        xr: t
      }) => {
        try {
          return await t.get("/api/resources/home_shelf", td.toAPIParameters({
            seenResourceIds: e?.join(",")
          }), {
            timeout: 1e4
          });
        } catch (e) {
          reportError(_$$e.COMMUNITY, e);
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
      return await t.get(`/api/resources/${S[resourceType]}/${contentId}`, td.toAPIParameters({
        skipRelatedContent,
        includeFullCategory
      }));
    });
  }
  likeResource(e) {
    return XHR.post(`/api/resource/${e.resourceId}/like`);
  }
  unlikeResource(e) {
    return XHR.del(`/api/resource/${e.resourceId}/like`);
  }
  saveResource(e) {
    return XHR.post(`/api/resource/${e.resource.id}/save`, {
      profile_id: e.profileId,
      org_id: e.orgId
    });
  }
  unsaveResource(e) {
    return XHR.del(`/api/resource/${e.resource.id}/save`, {
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