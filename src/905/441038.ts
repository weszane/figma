/**
 * UserRole enum (original: $$n0)
 */
export enum UserGroupRole {
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
export const GN = UserGroupRole;
export const RM = GroupType;
export const Uu = DefaultGroups;
