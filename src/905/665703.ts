import { ServiceCategories as _$$e } from "src/905/165054";
import { reportError } from "src/905/11";
import { createNoOpValidator, createPaginatedValidator, APIParameterUtils } from "src/figma_app/181241";
import { z } from "src/905/239603";
import { M4 } from "src/905/713695";
import { nn } from "src/figma_app/45218";
export let $$d0 = new class {
  constructor() {
    this.CommunityShelvesSchemaValidator = createNoOpValidator();
    this.getCommunityShelfById = e => this.CommunityShelvesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/community_shelves/id/${e.categoryId}`));
    this.CommunityShelfV2SchemaValidator = createPaginatedValidator("CommunityShelfV2SchemaValidator", z.array(nn), null, !0);
    this.ShelfContentPaginatedQuery = M4.PaginatedQuery({
      fetch: async (e, {
        pageParam: t
      }) => {
        try {
          let i = await this.CommunityShelfV2SchemaValidator.validate(async ({
            xr: i
          }) => {
            let {
              shelfId,
              includeContent,
              pageSize
            } = e;
            let o = APIParameterUtils.toAPIParameters({
              include_content: includeContent,
              page_size: pageSize,
              cursor: t
            });
            return await i.getPaginated(`/api/v2/community_shelves/${shelfId}`, o);
          });
          let n = i.data.meta[0];
          if (!n) throw Error("Shelf not found");
          return {
            data: n.shelf_content,
            nextPage: i.data.pagination.nextPage,
            prevPage: i.data.pagination.prevPage
          };
        } catch (e) {
          reportError(_$$e.COMMUNITY, e);
          return e;
        }
      }
    });
  }
  getCommunityShelves(e) {
    let t = e?.urlSlug ? `/${e.urlSlug}` : "";
    return this.CommunityShelvesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/community_shelves${t}`, APIParameterUtils.toAPIParameters(e || {})));
  }
}();
export const A = $$d0;
