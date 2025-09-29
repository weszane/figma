import { createScopedState } from '../905/457575'
import { useAtomValueAndSetter } from '../figma_app/27355'

/**
 * Enum representing possible chat error types
 * Original name: $$a1
 */
export enum ChatErrorType {
  ATTACHMENTS_TOO_LARGE = 'attachments_too_large',
  MAX_CONTENT_LENGTH_EXCEEDED = 'max_content_length_exceeded',
  MAX_CONTEXT_LENGTH_EXCEEDED_IMAGE_FALLBACK = 'max_content_length_exceeded_image_fallback',
  PROMPT_ENHANCEMENT_FAILED = 'prompt_enhancement_failed',
}

/**
 * Scoped state for managing chat errors
 * Original name: $$s0
 */
export const chatErrorState = createScopedState()

/**
 * Hook for accessing and managing chat error state
 * Original name: $$o2
 * @param scopeId - The scope identifier for the chat error state
 * @returns Object containing chat error value, setter, and clear function
 */
export function useChatError(scopeId?: string): {
  chatError: string | undefined
  setChatError: (error: string | undefined) => void
  clearChatError: () => void
} {
  const [chatError, setChatError] = useAtomValueAndSetter(chatErrorState(scopeId || ''))

  return {
    chatError,
    setChatError,
    clearChatError: () => {
      setChatError(undefined)
    },
  }
}

// Export aliases for backward compatibility
export const QK = chatErrorState
export const T_ = ChatErrorType
export const tk = useChatError
