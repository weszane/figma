import { M4 } from "../905/713695";
import { cS } from "../figma_app/45218";
import { A } from "../905/665703";
let $$n1 = M4.Query({
  fetch: async e => await A.getCommunityShelves({
    shelfType: cS.SLIDES_TEMPLATE_MODAL
  }).then(e => e.data.meta)
});
let $$c0 = M4.Query({
  fetch: async e => await A.getCommunityShelfById({
    categoryId: e
  }).then(e => {
    if (e.data.meta.length > 0) return e.data.meta[0];
  })
});
export const Q = $$c0;
export const _ = $$n1;