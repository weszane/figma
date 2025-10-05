/**
 * Class representing a collection of suggested variables.
 * (Original class: $$n0)
 */
export class SuggestedVariablesCollection {
  private suggestedVars: Map<string, any>

  /**
   * Create a SuggestedVariablesCollection.
   */
  constructor() {
    this.suggestedVars = new Map<string, any>()
  }

  /**
   * Set a suggested variable.
   * @param key - The key of the variable.
   * @param value - The value of the variable.
   */
  set(key: string, value: any): void {
    this.suggestedVars.set(key, value)
  }

  /**
   * Get a suggested variable.
   * @param key - The key of the variable.
   * @returns The value of the variable.
   */
  get(key: string): any {
    return this.suggestedVars.get(key)
  }

  /**
   * Check if a suggested variable exists.
   * @param key - The key of the variable.
   * @returns True if the variable exists, false otherwise.
   */
  has(key: string): boolean {
    return this.suggestedVars.has(key)
  }

  /**
   * Get all keys of suggested variables.
   * @returns An iterable of keys.
   */
  keys(): IterableIterator<string> {
    return this.suggestedVars.keys()
  }

  /**
   * Merge another SuggestedVariablesCollection into this one.
   * @param other - The other collection to merge.
   * @returns This collection.
   */
  merge(other: SuggestedVariablesCollection): SuggestedVariablesCollection {
    for (const key of other.keys()) {
      this.set(key, other.get(key))
    }
    return this
  }
}

/**
 * Class representing a suggested variable reference.
 * (Original class: $$r1)
 */
export class SuggestedVariableReference {
   raw: { value: any }
   matchingVarId: string

  /**
   * Create a SuggestedVariableReference.
   * @param raw - The raw object containing the value.
   * @param matchingVarId - The ID of the matching variable.
   */
  constructor(raw: { value: any }, matchingVarId: string) {
    this.raw = raw
    this.matchingVarId = matchingVarId
  }

  /**
   * Get the formatted value of the suggested variable.
   * @returns The formatted value.
   */
  get value(): string {
    return `/*SUGGESTED_VAR_START_${this.matchingVarId}*/${this.raw.value}/*SUGGESTED_VAR_END*/`
  }

  /**
   * Check if this reference equals another.
   * @param other - The other reference to compare.
   * @returns True if equal, false otherwise.
   */
  equals(other: SuggestedVariableReference): boolean {
    return other instanceof SuggestedVariableReference && this.raw.value === other.raw.value
  }
}

// Export aliases for backward compatibility
export const E = SuggestedVariablesCollection
export const u = SuggestedVariableReference
