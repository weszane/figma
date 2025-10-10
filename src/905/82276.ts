import { z } from 'zod'
import { UserOrgSchema } from '../figma_app/175992'
// Refactored Zod schema and constant for better readability and type safety
// - Renamed variables to be more descriptive
// - Preserved all fields and their types from the original schema
// - Kept the original export names as requested

export const UNASSIGNED_LABEL = 'Unassigned'

const WorkspaceSchema = z.object({
  id: z.string(),
  name: z.string(),
  created_at: z.string(),
  updated_at: z.string(),
  last_reviewed_at: z.string().optional(),
  last_reviewed_by_id: z.string().optional(),
  admin_users_metadata: z.array(UserOrgSchema),
  is_orphaned: z.boolean(),
  member_count: z.number().optional(),
  team_count: z.number().optional(),
  mirrored_workspace_id: z.string().optional(),
  org_id: z.string(),
})

export const W = WorkspaceSchema
export const s = UNASSIGNED_LABEL
