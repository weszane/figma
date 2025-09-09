import { z } from 'zod'

// var r = (e => (e.USER = 'user', e.TEAM = 'team', e.ORG = 'org', e))(r || {})
/**
 * Schema for individual experiment assignment.
 * Original variable name: a
 */
export const ExperimentAssignmentSchema = z.object({
  experiment_id: z.string(),
  treatment_id: z.string(),
})

/**
 * Schema for experiment assignments array.
 * Original variable name: $$s0
 */
export const ExperimentAssignmentsSchema = z.object({
  experiment_assignments: z.array(ExperimentAssignmentSchema),
})

/**
 * Exported schema for experiment assignments.
 * Original export name: bV
 */
export const bV = ExperimentAssignmentsSchema
