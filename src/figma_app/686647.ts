import { z } from 'zod'
import { chatSchema } from '../905/374090'

import { createToolCallSchema, UnifiedSchema } from '../905/712373'

export let design_editor = ({
  name: 'design_editor',
  trackingName: 'make-edits',
  parameters: z.object({
    instructions: z.string().describe('The instructions for the design assistant to follow.'),
  }),
})
let d = createToolCallSchema(design_editor)
export let aiAssistantChatSchema = z.union([d, UnifiedSchema])
export const Kv = aiAssistantChatSchema
export const Ns = design_editor
export const n0 = chatSchema
export { chatSchema }
