import { keyBy } from 'lodash-es'
import { z } from 'zod'
import { FProductAccessType } from '../figma_app/191312'
import { ProductAccessTypeSchema } from '../figma_app/765689'
/**
 * ProductAccessTypeEnum - Original: $$l12
 */
export enum ProductAccessTypeEnum {
  DESIGN = 'design',
  FIGJAM = 'figjam',
  DEV_MODE = 'dev_mode',
  SLIDES = 'slides',
  COLLABORATOR = 'collaborator',
  DEVELOPER = 'developer',
  EXPERT = 'expert',
  CONTENT = 'content',
  AI_CREDITS = 'ai_credits',
}

/**
 * Zod schema for ProductAccessTypeEnum - Original: $$d9
 */
export const ProductAccessTypeEnumSchema = z.nativeEnum(ProductAccessTypeEnum)

/**
 * AICreditsTypeEnum - Original: c
 */
export enum AICreditsTypeEnum {
  AI_CREDITS_1K = 'ai_credits_1k',
  AI_CREDITS_10K = 'ai_credits_10k',
}

/**
 * Zod schema for AICreditsTypeEnum - Original: $$u3
 */
export const AICreditsTypeEnumSchema = z.nativeEnum(AICreditsTypeEnum)

/**
 * ProductAccessTypeMap - Original: $$p4
 */
export const ProductAccessTypeMap: Record<string, FProductAccessType> = {
  collaborator: FProductAccessType.WHITEBOARD,
  developer: FProductAccessType.DEV_MODE,
  expert: FProductAccessType.DESIGN,
  content: FProductAccessType.COOPER,
}

/**
 * ViewAccessTypeEnum - Original: $$m2
 */
export enum ViewAccessTypeEnum {
  VIEW = 'view',
}

/**
 * CollaboratorTypes - Original: $$h1
 */
export const CollaboratorTypes = ['collaborator', 'developer', 'expert', 'content'] as const

/**
 * Zod schema for CollaboratorTypes - Original: $$g6
 */
export const CollaboratorTypesSchema = z.nativeEnum(
  keyBy(CollaboratorTypes),
)

/**
 * AllAccessTypes - Original: f
 */
export const AllAccessTypes = [...CollaboratorTypes, 'view']

/**
 * Checks if a value is in AllAccessTypes - Original: $$_8
 * @param value
 */
export function isValidAccessType(value: string): boolean {
  return AllAccessTypes.includes(value)
}

/**
 * Checks if a value is in CollaboratorTypes - Original: $$A5
 * @param value
 * @returns {boolean} True if value is a valid CollaboratorType
 */
export function isCollaboratorType(value: string): boolean {
  return CollaboratorTypes.includes(value as typeof CollaboratorTypes[number])
}

/**
 * DesignTypes - Original: $$y11
 */
export const DesignTypes = ['design', 'figjam', 'dev_mode'] as const

/**
 * CollaboratorTypeSchema - Original: $$b7
 */
export const CollaboratorTypeSchema = z.object({
  key: CollaboratorTypesSchema,
  license_types: ProductAccessTypeSchema.array(),
})

/**
 * Generates a Zod object schema for product access types - Original: $$v10
 * @param fieldSchema
 */
export function createProductAccessSchema(fieldSchema: z.ZodTypeAny) {
  return z.object({
    design: fieldSchema.optional(),
    figjam: fieldSchema.optional(),
    dev_mode: fieldSchema.optional(),
    collaborator: fieldSchema.optional(),
    developer: fieldSchema.optional(),
    expert: fieldSchema.optional(),
    content: fieldSchema.optional(),
  })
}

/**
 * CollaboratorHierarchy - Original: I
 */
const CollaboratorHierarchy: Record<string, string[]> = {
  collaborator: ['content', 'developer', 'expert'],
  content: ['developer', 'expert'],
  developer: ['expert'],
  expert: [],
}

/**
 * Checks if a type is in the hierarchy of another type - Original: $$E0
 * @param type
 * @param parentType
 */
export function isInCollaboratorHierarchy(type: string, parentType: string): boolean {
  return (CollaboratorHierarchy[parentType] ?? []).includes(type)
}

// Exported aliases for backward compatibility
export const B6 = isInCollaboratorHierarchy // $$E0
export const DM = CollaboratorTypes // $$h1
export const Gu = ViewAccessTypeEnum // $$m2
export const OQ = AICreditsTypeEnumSchema // $$u3
export const TI = ProductAccessTypeMap // $$p4
export const a_ = isCollaboratorType // $$A5
export const bO = CollaboratorTypesSchema // $$g6
export const cD = CollaboratorTypeSchema // $$b7
export const dA = isValidAccessType // $$_8
export const dw = ProductAccessTypeEnumSchema // $$d9
export const g7 = createProductAccessSchema // $$v10
export const qD = DesignTypes // $$y11
export const ud = ProductAccessTypeEnum // $$l12
