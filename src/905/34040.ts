/**
 * Represents a string-based value object that can be compared for equality.
 * Original class name: $$n0
 */
export class StringValueObject {
  readonly strValue: string

  /**
   * Creates a new StringValueObject instance.
   * @param value - The string value to store
   */
  constructor(value: string) {
    this.strValue = value
  }

  /**
   * Gets the stored string value.
   * @returns The stored string value
   */
  get value(): string {
    return this.strValue
  }

  /**
   * Compares this StringValueObject with another for equality.
   * @param other - The other StringValueObject to compare with
   * @returns True if the values are equal, false otherwise
   */
  equals(other: StringValueObject): boolean {
    return this.value === other.value
  }
}

/**
 * Alias for StringValueObject.
 * Original name: h
 */
export const h = StringValueObject
