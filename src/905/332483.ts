import { CollaboratorTypes, DesignTypes, ProductAccessTypeEnum, ViewAccessTypeEnum } from '../905/513035'
import { AdvancedSet } from '../905/596651'

/**
 * Creates an AdvancedSet of CollaboratorTypes with conditional exclusion based on billing_enable_content_seat flag.
 * Original variable: $$a0
 */
export const collaboratorSet = new AdvancedSet([...CollaboratorTypes])
  .excludeUnlessFlag([ProductAccessTypeEnum.CONTENT], 'billing_enable_content_seat')

/**
 * Creates an AdvancedSet of ViewAccessTypeEnum and CollaboratorTypes with conditional exclusion.
 * Original variable: $$s2
 */
export const viewCollaboratorSet = new AdvancedSet([
  ...Object.values(ViewAccessTypeEnum),
  ...CollaboratorTypes,
]).excludeUnlessFlag([ProductAccessTypeEnum.CONTENT], 'billing_enable_content_seat')

/**
 * Creates an AdvancedSet of DesignTypes.
 * Original variable: $$o1
 */
export const designSet = new AdvancedSet([...DesignTypes])

export const N_ = collaboratorSet
export const Ye = viewCollaboratorSet
export const Oq = designSet
