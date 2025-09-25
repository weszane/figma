import { z } from 'zod'
import { UNASSIGNED } from '../905/247093'
import { FAccessLevelType } from '../figma_app/191312'
import { TeamSchema } from '../figma_app/630077'

/**
 * Extended TeamSchema with additional optional properties.
 * Original export: $$o1
 */
export const TeamExtendedSchema = TeamSchema.extend({
  orphaned: z.boolean().optional(),
  member_count: z.number().optional(),
})

/**
 * Enum for team property keys.
 * Original variable: $$l0
 */
export enum TeamPropertyKey {
  NAME = 'name',
  OWNER = 'owner_name',
  PROJECTS = 'projects',
  MEMBERS = 'member_count',
  WORKSPACE = 'workspace_name',
  ORG_ACCESS = 'org_access',
}

/**
 * Enum for team membership status.
 * Original variable: $$d2
 */
export enum TeamMembershipStatus {
  JOINED = 'JOINED',
  NOT_JOINED = 'NOT_JOINED',
}

/**
 * Returns initial team statistics object.
 * Original function: $$c3
 * @returns {object} Initial statistics for workspaces, org access, and team membership.
 */
export function getInitialTeamStats() {
  return {
    workspaces: {
      [UNASSIGNED]: 0,
    },
    org_access: {
      [FAccessLevelType.PUBLIC]: 0,
      [FAccessLevelType.PRIVATE]: 0,
      [FAccessLevelType.SECRET]: 0,
    },
    team_membership: {
      [TeamMembershipStatus.JOINED]: 0,
      [TeamMembershipStatus.NOT_JOINED]: 0,
    },
  }
}

// Refactored exports for clarity and traceability
export const Kq = TeamPropertyKey
export const hJ = TeamExtendedSchema
export const ig = TeamMembershipStatus
export const xZ = getInitialTeamStats
