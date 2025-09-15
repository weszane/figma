import { z } from 'zod'

/**
 * Enum representing various process states.
 * Original name: $$s4
 */
export enum ProcessState {
  START = 0,
  TIMEOUT = 1,
  COMPLETE = 2,
  RESET = 3,
  ERROR = 4,
}

/**
 * Enum for provider types.
 * Original name: $$i0
 */
export enum ProviderType {
  PROVIDER = 0,
  SINGLETON = 1,
}

/**
 * Enum for bootstrap types.
 * Original name: $$n8
 */
export enum BootstrapType {
  BOOTSTRAP = 0,
  NETWORK = 1,
}

/**
 * Enum for operation status.
 * Original name: $$o3
 */
export enum OperationStatus {
  NOT_STARTED = 0,
  IN_PROGRESS = 1,
  TIMED_OUT = 2,
  COMPLETED = 3,
  ERRORED = 4,
}

/**
 * Enum for error types.
 * Original name: $$_6
 */
export enum ErrorType {
  TIMEOUT = 0,
  REQUEST_FAILED = 1,
  SDK_METHOD_FAILED = 2,
  UNKNOWN = 3,
}

/**
 * Enum for action types.
 * Original name: $$l2
 */
export enum ActionType {
  INITIALIZE = 0,
  PREFETCH = 1,
  CONTEXT_SWITCH = 2,
}

/**
 * Zod schema for unknown record.
 * Original name: u
 */
export const UnknownRecordSchema = z.record(z.string(), z.unknown())

/**
 * Zod schema for evaluated keys.
 * Original name: c
 */
export const EvaluatedKeysSchema = z.object({
  stableID: z.string().optional(),
  userID: z.string().optional(),
  customIDs: z.record(z.string(), z.string()).optional(),
}).passthrough()

/**
 * Zod schema for dynamic config object.
 * Original name: $$d5
 */
export const DynamicConfigSchema = z.optional(z.object({
  dynamic_configs: z.record(z.string(), UnknownRecordSchema).optional(),
  evaluated_keys: EvaluatedKeysSchema.optional(),
  feature_gates: z.record(z.string(), UnknownRecordSchema).optional(),
  layer_configs: z.record(z.string(), UnknownRecordSchema).optional(),
  hash_used: z.string().optional(),
}).passthrough())

/**
 * Zod schema for team bootstrap values.
 * Original name: $$g7
 */
export const TeamBootstrapSchema = z.array(z.object({
  team_id: z.string().nullable(),
  bootstrap_values: DynamicConfigSchema.nullable(),
}))

/**
 * Timeout error class.
 * Original name: $$p1
 */
export class TimeoutError extends Error {
  constructor(message?: string) {
    super(message || 'timeout')
  }
}

// Refactored exports to match new names
export const DK = ProviderType
export const MU = TimeoutError
export const PG = ActionType
export const Uv = OperationStatus
export const Uw = ProcessState
export const bT = ErrorType
export const aH = DynamicConfigSchema
export const sq = TeamBootstrapSchema
export const ss = BootstrapType
