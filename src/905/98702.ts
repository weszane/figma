import { createActionCreator } from '../905/73481'
/**
 * Action creators for role management.
 * Original variable names: $$r2, $$a1, $$s3, $$o0
 */
export const roleDeleteAction = createActionCreator('ROLE_DELETE')
export const roleBatchPutAction = createActionCreator('ROLE_BATCH_PUT')
export const rolePutAction = createActionCreator('ROLE_PUT')
export const rolePostAction = createActionCreator('ROLE_POST')

/**
 * Exported action creators with refactored names.
 * Original export names: bE, uo, yH, yJ
 */
export const bE = rolePostAction
export const uo = roleBatchPutAction
export const yH = roleDeleteAction
export const yJ = rolePutAction
