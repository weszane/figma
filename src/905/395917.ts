import { createActionCreator } from '../905/73481'
import { patchOrgs, putOrgs } from '../905/890368'
/**
 * Action creators for organization-related actions.
 * Original variable names: $$a5, $$s3, $$o1, $$l4, $$d2
 */
export const orgsBatchPut = createActionCreator('ORGS_BATCH_PUT') // $$a5
export const orgsLockAccount = createActionCreator('ORGS_LOCK_ACCOUNT') // $$s3
export const orgsUnlockOrgs = createActionCreator('ORGS_UNLOCK_ORGS') // $$o1
export const orgsLockOrgs = createActionCreator('ORGS_LOCK_ORGS') // $$l4
export const orgsSetOrgId = createActionCreator('ORGS_SET_ORG_ID') // $$d2

/**
 * Organization patch and put handlers.
 * Original variable names: $$c0, $$u6
 */
export const patchOrgsHandler = patchOrgs // $$c0
export const putOrgsHandler = putOrgs // $$u6

// Exported aliases for backward compatibility or external usage.
// Original export names: F6, K5, _P, dH, tJ, uo, yJ
export const F6 = patchOrgs
export const K5 = orgsUnlockOrgs
export const _P = orgsSetOrgId
export const dH = orgsLockAccount
export const tJ = orgsLockOrgs
export const uo = orgsBatchPut
export const yJ = putOrgs
