import { z } from 'zod'
import { getI18nStringAlias } from '../905/303541'

/**
 * Schema for messages with direct string content
 */
const messageSchema = z.object({
  data: z.object({
    message: z.string(),
  }),
}).passthrough()

/**
 * Schema for messages with i18n content that needs translation
 */
const i18nSchema = z.object({
  data: z.object({
    i18n: z.object({
      id: z.string(),
      params: z.object({}).passthrough(),
    }),
  }),
}).passthrough()
/**
 * Resolves a message from either direct string content or i18n translation
 * @param message - The message object to resolve
 * @param defaultValue - Optional default value if message cannot be resolved
 * @returns The resolved message string
 */
export function resolveMessage(message: unknown, defaultValue?: string): string {
  // Start with the default value
  let result = defaultValue
  
  // Try to parse as direct message
  const messageResult = messageSchema.safeParse(message)
  if (messageResult.success) {
    result = messageResult.data.data.message
  }
  
  // Try to parse as i18n message
  const i18nResult = i18nSchema.safeParse(message)
  if (!i18nResult.success) {
    return result ?? ''
  }
  
  // Get translated string
  const translatedString = getI18nStringAlias(
    i18nResult.data.data.i18n.id, 
    i18nResult.data.data.i18n.params
  )
  
  // Return translated string if available, otherwise fallback to result
  return translatedString === '' ? (result ?? '') : translatedString
}

// Legacy export alias
export const $$a0 = resolveMessage
export const J = resolveMessage
