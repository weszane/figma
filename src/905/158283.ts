import { z } from "../905/239603";
let r = z.object({
  id: z.string(),
  created_at: z.string(),
  org_id: z.string(),
  domain: z.string(),
  google_sso_only_at: z.string().nullable(),
  saml_sso_only_at: z.string().nullable(),
  verified_at: z.date().nullable(),
  verification_method: z.string().nullable(),
  org_saml_config_id: z.string().nullable().optional()
});
let $$a0 = z.object({
  domains: z.array(r),
  isFetching: z.boolean(),
  fetchedAt: z.number().nullable()
});
let $$s1 = {
  domains: [],
  isFetching: !1,
  fetchedAt: null
};
export const N4 = $$a0;
export const ls = $$s1; 
