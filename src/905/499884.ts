import { z } from "zod";
/**
 * Schema for organization SAML configuration.
 * Original export: $$r0
 */
export const orgSamlConfigSchema = z.object({
  id: z.string(),
  org_saml_config_id: z.string().optional(),
  name: z.string(),
  created_at: z.string().optional(),
  updated_at: z.string().optional(),
  deleted_at: z.string().optional(),
  external_id: z.string().optional()
});

/**
 * Alias for orgSamlConfigSchema.
 * Original export: m
 */
export const m = orgSamlConfigSchema;
