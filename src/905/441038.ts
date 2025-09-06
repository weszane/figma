/**
 * UserRole enum (original: $$n0)
 */
export enum UserRole {
  ADMIN = "admin"
}

/**
 * GroupType enum (original: $$r1)
 */
export enum GroupType {
  MEMBERS = "members"
}

/**
 * DefaultGroups array (original: $$a2)
 */
export const DefaultGroups: GroupType[] = [GroupType.MEMBERS];

// Refactored exports to match new names
export const GN = UserRole;
export const RM = GroupType;
export const Uu = DefaultGroups;
