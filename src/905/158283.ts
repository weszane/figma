import { z } from 'zod'

/**
 * Domain schema definition (r)
 */
export const domainSchema = z.object({
  id: z.string(),
  created_at: z.string(),
  org_id: z.string(),
  domain: z.string(),
  google_sso_only_at: z.string().nullable(),
  saml_sso_only_at: z.string().nullable(),
  verified_at: z.date().nullable(),
  verification_method: z.string().nullable(),
  org_saml_config_id: z.string().nullable().optional(),
})

/**
 * Domains state schema (original: $$a0)
 */
export const domainsStateSchema = z.object({
  domains: z.array(domainSchema),
  isFetching: z.boolean(),
  fetchedAt: z.number().nullable(),
})

/**
 * Initial domains state (original: $$s1)
 */
export const initialDomainsState = {
  domains: [],
  isFetching: false,
  fetchedAt: null,
}

/**
 * Exported schemas and state with original variable names for traceability.
 */
export const N4 = domainsStateSchema // $$a0
export const ls = initialDomainsState // $$s1
