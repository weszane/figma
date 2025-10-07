/**
 * Enum representing different hidden states for UI elements
 * Original: $$n1
 */
export enum HiddenState {
  /** Warning state is hidden */
  warningHidden = "WARNING_HIDDEN",
  /** Ongoing state is hidden */
  ongoingHidden = "ONGOING_HIDDEN", 
  /** No state is hidden */
  noneHidden = "NONE_HIDDEN"
}

/**
 * Enum representing different alert or event states
 * Original: $$r0
 */
export enum AlertState {
  /** Warning alert state */
  Warning = "WARNING",
  /** Imminent alert state */
  Imminent = "IMMINENT",
  /** Ongoing alert state */
  Ongoing = "ONGOING",
  /** Finished alert state */
  Finished = "FINISHED"
}

// Export with original variable names for backward compatibility
export const A = AlertState;
export const y = HiddenState;
