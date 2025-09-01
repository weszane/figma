import { M4 } from "../905/713695";
import { cS } from "../figma_app/45218";
import { c } from "../905/734351";
import { A } from "../905/665703";
let $$o2 = M4.Query({
  fetch: async e => (await c.getAll({
    editorType: e
  })).data.meta
});
let $$l1 = M4.Query({
  fetch: async ({
    categorySlug: e,
    tagSlug: t,
    locale: r
  }) => (await c.getCategoryBySlug(e, {
    tagSlug: t,
    locale: r
  })).data.meta
});
let $$d0 = M4.Query({
  fetch: async e => (await A.getCommunityShelves({
    categorySlug: e,
    shelfType: cS.CATEGORY_PAGE
  })).data.meta[0]
});
export const R5 = $$d0;
export const Zp = $$l1;
export const iB = $$o2;