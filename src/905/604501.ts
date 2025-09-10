import { z } from "src/905/239603";
import { k } from "src/905/22009";
import { L } from "src/905/178090";
let s = z.object({
  id: z.string(),
  text: z.string(),
  i18n_meta: z.object({
    text: z.string().optional()
  }).nullable(),
  url_slug: z.string().nullable(),
  localized_url_slug: z.string().nullable().optional()
});
let o = z.object({
  id: z.string(),
  parent_category_id: z.string().nullable(),
  title: z.string(),
  url_slug: z.string(),
  meta_description: z.string().nullable(),
  meta_title: z.string().nullable(),
  i18n_meta: z.object({
    description: z.string().optional(),
    extended_description: z.string().optional(),
    h1_title: z.string().optional(),
    title: z.string().optional()
  }).nullable(),
  client_meta: z.record(z.unknown()).nullable(),
  plugins_count: z.number(),
  hub_files_count: z.number(),
  description: z.string(),
  extended_description: z.string(),
  is_enabled: z.boolean(),
  editor_types: z.array(z.nativeEnum(k.Editors)),
  resource_types: z.array(z.nativeEnum(L.BrowseResourceTypes)),
  h1_title: z.string().nullable(),
  localized_url_slug: z.string().nullable().optional()
});
let l = z.object({
  id: z.string(),
  tags_v2_id: z.string().nullable(),
  community_categories_v2_id: z.string().nullable(),
  h1_title: z.string().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
  extended_description: z.string().nullable(),
  meta_description: z.string().nullable(),
  meta_title: z.string().nullable(),
  i18n_meta: z.object({
    h1_title: z.string().optional(),
    description: z.string().optional(),
    extended_description: z.string().optional()
  }).nullable(),
  client_meta: z.record(z.unknown()).nullable(),
  is_enabled: z.boolean()
});
let d = s.pick({
  text: !0
}).merge(l.pick({
  h1_title: !0,
  description: !0,
  extended_description: !0,
  meta_description: !0,
  meta_title: !0
})).extend({
  i18n_meta: s.shape.i18n_meta.unwrap().merge(l.shape.i18n_meta.unwrap())
});
let c = {
  id: !0,
  parent_category_id: !0,
  url_slug: !0,
  title: !0,
  i18n_meta: !0,
  client_meta: !0,
  meta_description: !0,
  meta_title: !0,
  editor_types: !0,
  resource_types: !0,
  h1_title: !0
};
let u = s.pick({
  text: !0,
  url_slug: !0,
  i18n_meta: !0,
  localized_url_slug: !0
});
let p = o.pick(c).extend({
  tags: z.array(u).optional()
});
let m = s.pick({
  id: !0,
  text: !0,
  i18n_meta: !0
}).extend({
  is_enabled: z.boolean(),
  resources_count: z.number()
});
o.pick({
  ...c,
  plugins_count: !0,
  hub_files_count: !0,
  description: !0,
  extended_description: !0,
  is_enabled: !0
}).extend({
  tags: z.array(m).optional()
});
let $$h0 = z.array(p);
let g = o.pick({
  title: !0,
  url_slug: !0,
  i18n_meta: !0
}).nullable();
let $$f1 = o.pick({
  title: !0,
  meta_title: !0,
  description: !0,
  meta_description: !0,
  i18n_meta: !0,
  url_slug: !0,
  extended_description: !0,
  editor_types: !0,
  h1_title: !0,
  localized_url_slug: !0
}).extend({
  parent_category: g
});
let $$_2 = $$f1.extend({
  tags: z.array(s.pick({
    text: !0,
    url_slug: !0,
    i18n_meta: !0,
    localized_url_slug: !0
  })),
  selected_tag: d.nullable(),
  child_categories: z.array(o.pick({
    title: !0,
    url_slug: !0,
    i18n_meta: !0,
    localized_url_slug: !0
  })).nullable()
});
export const Hg = $$h0;
export const cK = $$f1;
export const oF = $$_2; 
