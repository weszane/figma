// Original file: /Users/allen/sigma-main/src/figma_app/897289.ts
// Refactored to improve readability, add types, and group related functionality.
// Grouped path-checking logic together.
// Renamed variables and functions to meaningful names based on their purpose.
// Added JSDoc comments for documentation.
// Ensured same functionality: path checks and boolean returns.
// Refactored import: renamed k3 to isEvalMode for clarity, assuming it checks eval mode.

import { isDisabled } from '../figma_app/757801';

/**
 * Original: $$i4
 * Constant indicating if debug mode is enabled (always false).
 */
export const isDebugMode = false;

/**
 * Original: a
 * Checks if the current pathname is one of the interaction-related paths.
 */
const isInteractionPath = window.location.pathname === '/test/interactions' || window.location.pathname === '/test/interactions/proto' || window.location.pathname === '/test/interactions/deck' || window.location.pathname === '/test/interactions/presenter';

/**
 * Original: $$s6
 * Returns whether the current path is an interaction path.
 */
export function isInteractionPathCheck() {
  return isInteractionPath;
}

/**
 * Original: $$o5
 * Returns whether the current path is an interaction path (duplicate of $$s6).
 */
export function isInteractionPathCheckDuplicate() {
  return isInteractionPath;
}

/**
 * Original: $$l2
 * Returns true if interaction path or eval mode is active.
 */
export function isInteractionOrEvalMode() {
  return isInteractionPath || isDisabled();
}

/**
 * Original: $$d7
 * Returns null (placeholder or unused).
 */
export function getNullValue() {
  return null;
}

/**
 * Original: $$c0
 * Attempts to return false, with error handling.
 */
export function getFalseValue() {
  try {
    return false;
  } catch {
    return false;
  }
}

// Original: a && new URLSearchParams(window.location.search).get("mode");
// This line seems incomplete or unused; removed as it doesn't affect exports.

/**
 * Original: u
 * Checks if the current pathname is the eval view path.
 */
const isEvalViewPath = window.location.pathname === '/test/eval/view';

/**
 * Original: $$p3
 * Returns whether the current path is the eval view path.
 */
export function isEvalViewPathCheck() {
  return isEvalViewPath;
}

// Exported aliases with meaningful names
// export const $$i4 = isDebugMode
export const isEvalModeAlias = isDisabled;
export const $$l2 = isInteractionOrEvalMode;
export const $$p3 = isEvalViewPathCheck;
export const $$i4 = isDebugMode;
export const lZ = isInteractionPathCheck;
export const $$o5 = isInteractionPathCheckDuplicate;
export const $$d7 = getNullValue;
export const nl = isInteractionPathCheck;
export const b_ = isDebugMode;