// AI Action Event Constants
export const AI_ACTION_STARTED = 'AI Action Started'
export const AI_ACTION_ENDED = 'AI Action Ended'

// AI Action Status Enum
export const AIActionStatus = Object.freeze({
  COMPLETED: 'completed',
  FAILED: 'failed',
})

// AI Action Result Enum
export const AIActionResult = Object.freeze({
  ERROR: 'error',
  EMPTY_GENERATION: 'empty_generation',
  STOPPED: 'stopped',
  SUCCESS: 'success',
})

// AI Action Prompt Interaction
export const AI_ACTION_PROMPT_INTERACTION = 'AI Action Prompt Interaction'

// AI Action Mode Enum
export const AIActionMode = Object.freeze({
  GENERATE: 'generate',
  SELECT_KIT: 'select_kit',
})

// AI Action Prompt Trigger Enum
export const AIActionPromptTrigger = Object.freeze({
  BUTTON_CLICK: 'button_click',
  KEYBOARD_SHORTCUT: 'keyboard_shortcut',
})

// AI Action Instruction Interaction
export const AI_ACTION_INSTRUCTION_INTERACTION = 'AI Action Instruction Interaction'

// AI Action Instruction Type Enum
export const AIActionInstructionType = Object.freeze({
  DISMISS: 'dismiss',
  EXECUTE: 'execute',
  VIEW: 'view',
})

// AI Action Instruction Trigger Enum
export const AIActionInstructionTrigger = Object.freeze({
  BUTTON_CLICK: 'button_click',
  KEYBOARD_SHORTCUT: 'keyboard_shortcut',
  VIEW: 'view',
})

// AI Action Progress Interaction
export const AI_ACTION_PROGRESS_INTERACTION = 'AI Action Progress Interaction'

// AI Action Progress Type Enum
export const AIActionProgressType = Object.freeze({
  STOP: 'stop',
})

// AI Action Progress Trigger Enum
export const AIActionProgressTrigger = Object.freeze({
  BUTTON_CLICK: 'button_click',
  KEYBOARD_SHORTCUT: 'keyboard_shortcut',
})

// AI Action Iteration Interaction
export const AI_ACTION_ITERATION_INTERACTION = 'AI Action Iteration Interaction'

// AI Action Iteration Result Enum
export const AIActionIterationResult = Object.freeze({
  DEFAULT_SUCCESS: 'default_success',
  SUCCESS_WITH_REVIEW: 'success_with_review',
  SUCCESS_WITH_ITERATION: 'success_with_iteration',
  NO_CHANGES_MADE: 'no_changes_made',
  ERROR: 'error',
})

// AI Action Iteration Status Enum
export const AIActionIterationStatus = Object.freeze({
  COMPLETED: 'completed',
  FAILED: 'failed',
})

// AI Action Iteration Action Enum
export const AIActionIterationAction = Object.freeze({
  DISMISS: 'dismiss',
  UNDO: 'undo',
  REVIEW: 'review',
  MAKE_CHANGES: 'make_changes',
  LEARN_MORE: 'learn_more',
  RETRY: 'retry',
  GO_BACK: 'go_back',
  SAVE_AND_RELOAD: 'save_and_reload',
  ACCEPT: 'accept',
  GALLERY_SELECT: 'gallery_select',
  GALLERY_ACCEPT: 'gallery_accept',
  UNDO_MAKE_CHANGES: 'undo_make_changes',
  BOOST_ANYWAY: 'boost_anyway',
  POST_ACTION_EDIT: 'post_action_edit',
  SELECT: 'select',
})

// AI Action Iteration Trigger Enum
export const AIActionIterationTrigger = Object.freeze({
  BUTTON_CLICK: 'button_click',
  KEYBOARD_SHORTCUT: 'keyboard_shortcut',
  NODE_EDITED: 'node_edited',
  AUTO: 'auto',
  FULLSCREEN_UNDO: 'fullscreen_undo',
})

// AI Action Sentiment Feedback
export const AI_ACTION_SENTIMENT_FEEDBACK = 'AI Action Sentiment Feedback'

// AI Action Sentiment Type Enum
export const AIActionSentimentType = Object.freeze({
  THUMB_RATING: 'thumb-rating',
})

// AI Action Sentiment Value Enum
export const AIActionSentimentValue = Object.freeze({
  NEGATIVE: 0,
  POSITIVE: 1,
})

// AI Action Additional Feedback
export const AI_ACTION_ADDITIONAL_FEEDBACK = 'AI Action Additional Feedback'

// AI Action Feedback Type Enum
export const AIActionFeedbackType = Object.freeze({
  FREE_TEXT: 'free-text',
})

// Exported Constants (keeping original export names)
export const $J = AIActionIterationResult
export const Bq = AI_ACTION_PROMPT_INTERACTION
export const Cb = AIActionSentimentValue
export const Cq = AIActionIterationTrigger
export const EM = AIActionFeedbackType
export const Ec = AI_ACTION_ITERATION_INTERACTION
export const Ek = AIActionProgressType
export const F9 = AIActionResult
export const G5 = AI_ACTION_ENDED
export const Lv = AI_ACTION_INSTRUCTION_INTERACTION
export const NI = AIActionMode
export const bp = AIActionPromptTrigger
export const dM = AIActionStatus
export const dk = AIActionInstructionTrigger
export const eb = AIActionProgressTrigger
export const f0 = AI_ACTION_ADDITIONAL_FEEDBACK
export const hA = AI_ACTION_SENTIMENT_FEEDBACK
export const j4 = AI_ACTION_STARTED
export const lc = AIActionInstructionType
export const m0 = AI_ACTION_PROGRESS_INTERACTION
export const o2 = AIActionIterationStatus
export const s7 = AIActionSentimentType
export const sd = AIActionIterationAction
