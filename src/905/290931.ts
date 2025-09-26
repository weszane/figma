import { useCallback } from 'react'
import { useAtomValueAndSetter } from '../figma_app/27355'
/**
 * Manages prompt history with deduplication and a maximum length.
 * Original function name: $$$$a0
 *
 * @param atom - The atom to use for state management.
 * @param getPrompt - Function to extract and trim the prompt string.
 * @returns An object containing the prompt history and a function to add a prompt.
 */
export function setupPromptHistory(atom: any, getPrompt: (item: any) => string) {
  const [promptHistory, setPromptHistory] = useAtomValueAndSetter(atom)

  /**
   * Adds a prompt to history, ensuring uniqueness and limiting to 5 items.
   * Original function name: s
   */
  const addPromptToHistory = useCallback(
    (item: any) => {
      const uniquePrompts = new Set([getPrompt(item).trim()])
      const updatedHistory = [item]

      for (const historyItem of promptHistory) {
        const prompt = getPrompt(historyItem).trim()
        if (!uniquePrompts.has(prompt)) {
          uniquePrompts.add(prompt)
          updatedHistory.push(historyItem)
        }
      }

      setPromptHistory(updatedHistory.slice(0, 5))
    },
    [promptHistory, setPromptHistory, getPrompt],
  )

  return {
    promptHistory,
    addPromptToHistory,
  }
}

// Refactored export for consistency
export const a = setupPromptHistory
