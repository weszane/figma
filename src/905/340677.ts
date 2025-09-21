import { z } from 'zod'
import { positionRangeSchema } from '../905/321541'

/**
 * Schema for context object containing a guid.
 * Original variable: s
 */
const contextSchema = z.object({
  guid: z.string(),
})

/**
 * Schema for error message and context.
 * Original variable: $$o4
 */
export const errorMessageSchema = z.object({
  message: z.string(),
  context: contextSchema,
})

/**
 * Error class for serialization errors.
 * Original class: $$l1
 */
export class SerializeError extends Error {
  context: unknown
  errorMessage: string

  /**
   * @param errorMessage - The error message.
   * @param context - The context for the error.
   */
  constructor(errorMessage: string, context: unknown) {
    super(errorMessage)
    this.name = 'SerializeError'
    this.context = context
    this.errorMessage = errorMessage
  }
}

/**
 * Schema for deserialization error details.
 * Original variable: $$d2
 */
export const deserializeErrorSchema = z.object({
  message: z.string(),
  context: z.any(),
  location: positionRangeSchema.optional(),
}).extend({
  formatted: z.string().optional(),
})

/**
 * Error class for deserialization errors.
 * Original class: $$c3
 */
export class DeserializeError extends Error {
  context: unknown
  errorMessage: string

  /**
   * @param errorMessage - The error message.
   * @param context - The context for the error.
   */
  constructor(errorMessage: string, context: unknown) {
    super(errorMessage)
    this.name = 'DeserializeError'
    this.context = context
    this.errorMessage = errorMessage
  }
}

/**
 * Returns a frame node for unhandled node types.
 * Original function: $$u0
 * @param node - The node with an unhandled type.
 * @returns A frame node with error message.
 */
export function createUnhandledNodeFrame(node: { type: string }) {
  return {
    type: 'Frame',
    props: {
      className: 'flex items-center justify-center bg-red-100',
    },
    children: [{
      type: 'Text',
      props: {},
      children: [`Unhandled node type: ${node.type}`],
    }],
  }
}

// Refactored exports for clarity and traceability
export const Aw = createUnhandledNodeFrame
export const LV = SerializeError
export const Mn = deserializeErrorSchema
export const Ug = DeserializeError
export const w5 = errorMessageSchema
