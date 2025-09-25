import { AccessLevelEnum } from '../905/557142';
import { dayjs } from '../905/920142';

/**
 * Checks if the student has been validated.
 * Original: $$a4
 */
export function isStudentValidated(student: {
  student_validated_at?: Date | string | null;
}): boolean {
  return !!(student && student.student_validated_at);
}

/**
 * Calculates the number of days until expiration.
 * Returns Infinity if no date is provided or if more than 12 days remain.
 * Original: $$s9
 */
export function getDaysUntilExpiration(date: Date | string | null, fallback?: boolean): number {
  if (!date) return Infinity;
  const daysDiff = Math.ceil(dayjs(date).diff(dayjs(), 'days', true));
  if (daysDiff > 12) return Infinity;
  if (daysDiff <= 0) return fallback ? 1 : 0;
  return daysDiff;
}

/**
 * Checks grace period status for a specific key.
 * Original: $$o3
 */
export function getGracePeriodStatus(obj: Record<string, any>, key: string): {
  hasGracePeriod: boolean;
  isInValidGracePeriod: boolean;
} {
  return {
    hasGracePeriod: !!(obj && key in obj),
    isInValidGracePeriod: getGracePeriodDays(obj, key) > 0
  };
}

/**
 * Calculates days left in grace period for a specific key.
 * Original: l
 */
function getGracePeriodDays(obj: Record<string, any>, key: string): number {
  return Math.ceil(dayjs(obj[key].createdAt).add(7, 'days').diff(dayjs(), 'days', true));
}

/**
 * Returns the expiration date for a grace period.
 * Original: $$d10
 */
export function getGracePeriodExpirationDate(obj: Record<string, any>, key: string): Date {
  if (!obj || !obj[key]?.createdAt) return new Date();
  const expiration = new Date(obj[key].createdAt);
  expiration.setDate(expiration.getDate() + 7);
  return expiration;
}

/**
 * Returns days left in grace period for a specific key, or 0 if not applicable.
 * Original: $$c8
 */
export function getGracePeriodDaysOrZero(obj: Record<string, any>, key: string): number {
  return obj && obj[key] ? getGracePeriodDays(obj, key) : 0;
}

/**
 * Finds the minimum valid grace period days across all keys.
 * Original: $$u1
 */
export function getMinGracePeriodDays(obj: Record<string, any>): number {
  if (!obj) return 0;
  let minDays = Infinity;
  for (const key in obj) {
    const days = getGracePeriodDays(obj, key);
    if (days > 0 && days < minDays) minDays = days;
  }
  return minDays === Infinity ? 0 : minDays;
}

/**
 * Determines reminder and access restriction status based on grace period.
 * Original: $$p5
 */
export function getGracePeriodAccessStatus(obj: Record<string, any>, fallback?: boolean): {
  showReminder: boolean;
  showAccessRestricted: boolean;
} {
  const status = (() => {
    const hasKeys = obj && Object.keys(obj).length > 0;
    let expired = false;
    for (const key in obj) {
      if (getGracePeriodDays(obj, key) <= 0) expired = true;
    }
    return {
      hasGracePeriod: !!hasKeys,
      isInValidGracePeriod: getMinGracePeriodDays(obj) > 0,
      isInExpiredGracePeriod: expired
    };
  })();
  if (fallback || !status.hasGracePeriod) {
    return {
      showReminder: false,
      showAccessRestricted: false
    };
  }
  const expired = !!status.isInExpiredGracePeriod;
  return {
    showReminder: status.isInValidGracePeriod && !expired,
    showAccessRestricted: expired
  };
}

/**
 * Determines reminder and access restriction for a specific grace period key.
 * Original: $$_0
 */
export function getGracePeriodAccessForKey(obj: Record<string, any>, fallback: boolean, key: string, hasAccess: boolean): {
  showReminder: boolean;
  showAccessRestricted: boolean;
} {
  const status = getGracePeriodStatus(obj, key);
  if (fallback || !hasAccess || !status.hasGracePeriod) {
    return {
      showReminder: false,
      showAccessRestricted: false
    };
  }
  return {
    showReminder: status.isInValidGracePeriod,
    showAccessRestricted: !status.isInValidGracePeriod
  };
}

/**
 * Checks if the user is the owner of a team for a specific key.
 * Original: $$h6
 */
export function isTeamOwner(key: string, teams: Record<string, Record<string, {
  level: AccessLevelEnum;
}>>, user: {
  id: string;
  student_team?: boolean;
}): boolean {
  return !!user?.student_team && teams[user.id]?.[key]?.level === AccessLevelEnum.OWNER;
}

/**
 * Checks if any team member has at least editor access for a specific key.
 * Original: $$m2
 */
export function hasEditorAccessForAnyTeamMember(key: string, teams: Record<string, Record<string, {
  level: AccessLevelEnum;
}>>, user: {
  student_team?: boolean;
}): boolean {
  for (const memberId in teams) {
    const access = teams[memberId][key];
    if (user?.student_team && access?.level >= AccessLevelEnum.EDITOR) return true;
  }
  return false;
}

/**
 * Checks if the user has at least editor access for a specific key.
 * Original: $$g7
 */
export function hasEditorAccess(key: string, teams: Record<string, Record<string, {
  level: AccessLevelEnum;
}>>, user: {
  id: string;
  student_team?: boolean;
}): boolean {
  return !!user?.student_team && teams[user.id]?.[key]?.level >= AccessLevelEnum.EDITOR;
}

// Refactored exports
export const GU = getGracePeriodAccessForKey;
export const Me = getMinGracePeriodDays;
export const QS = hasEditorAccessForAnyTeamMember;
export const SH = getGracePeriodStatus;
export const cn = isStudentValidated;
export const df = getGracePeriodAccessStatus;
export const eB = isTeamOwner;
export const hP = hasEditorAccess;
export const qS = getGracePeriodDaysOrZero;
export const x$ = getDaysUntilExpiration;
export const zR = getGracePeriodExpirationDate;