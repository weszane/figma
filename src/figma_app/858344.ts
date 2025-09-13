/**
 * Enum for user roles.
 * Original: $$n1
 */
export enum DUserRole {
  ADMIN = "admin",
  DIRECTORY = "directory",
}

/**
 * Enum for group types.
 * Original: $$i3
 */
export enum TGroupType {
  TEAMS = "teams",
}

/**
 * Array of group types.
 * Original: $$a0
 */
export const TeamGroupTypes: string[] = [TGroupType.TEAMS];

/**
 * Enum for section types.
 * Original: $$s4
 */
export enum SectionType {
  TEAMS = "teams",
  MEMBERS = "members",
  LIBRARIES = "libraries",
  SETTINGS = "settings",
}

/**
 * Array of section keys.
 * Original: $$o5
 */
export const sectionKeys: string[] = [
  SectionType.MEMBERS,
  SectionType.TEAMS,
  SectionType.LIBRARIES,
  SectionType.SETTINGS,
];

/**
 * Default section key.
 * Original: $$l2
 */
export const defaultSectionKey: string = sectionKeys[0];

// Export with original left names, refactored right names
export const Fi = TeamGroupTypes;
export const V0 = DUserRole;
export const _C = defaultSectionKey;
export const dN = TGroupType;
export const m2 = SectionType;
export const rj = sectionKeys;
