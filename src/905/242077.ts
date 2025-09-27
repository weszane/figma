import { CollaboratorTypeSchema } from '../905/513035'
import { TeamUserSchema } from '../905/814802'
import { UserOrgSchema } from '../figma_app/175992'
import { TeamSchema } from '../figma_app/630077'

// Original variable: $$o1
/**
 * Schema for basic team information, including id, name, and image URL.
 */
export const TeamBasicSchema = TeamSchema.pick({
  id: true,
  name: true,
  img_url: true,
})

// Original variable: $$l0
/**
 * Schema for team user with details, including user information and recommended seat type.
 */
export const TeamUserWithDetailsSchema = TeamUserSchema.pick({
  id: true,
  team_id: true,
}).extend({
  user: UserOrgSchema.pick({
    id: true,
    img_url: true,
    handle: true,
    email: true,
  }),
  recommended_seat_type: CollaboratorTypeSchema.nullable(),
})

export const P = TeamUserWithDetailsSchema
export const _ = TeamBasicSchema
