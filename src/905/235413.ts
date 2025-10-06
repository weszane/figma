import { round } from "lodash-es"

/**
 * Rounds a number to a specified number of decimal places.
 * @param value - The number to round.
 * @param decimals - The number of decimal places to round to. Defaults to 3.
 * @returns The rounded number.
 */
export function roundToDecimal(value: number, decimals: number = 3): number {
  if (value !== undefined)
    return round(value, decimals)
}

/**
 * Represents a pixel value that can be converted to a string with 'px' suffix.
 */
export class PixelValue {
  readonly _value: number | string

  constructor(value: number | string) {
    this._value = value
  }

  /**
   * Gets the string representation of the pixel value.
   * @returns The pixel value as a string with 'px' suffix, or '0' if the value is zero.
   */
  get value(): string {
    if (typeof this._value === "number") {
      const roundedValue = roundToDecimal(this._value)
      return `${roundedValue}${roundedValue !== 0 ? "px" : ""}`
    }
    return String(this._value)
  }

  /**
   * Checks if this pixel value is equal to another pixel value.
   * @param other - The other pixel value to compare with.
   * @returns True if the values are equal, false otherwise.
   */
  equals(other: PixelValue): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a percentage value that can be converted to a string with '%' suffix.
 */
export class PercentageValue {
  readonly _value: number

  constructor(value: number) {
    this._value = value
  }

  /**
   * Gets the string representation of the percentage value.
   * @returns The percentage value as a string with '%' suffix.
   */
  get value(): string {
    return `${roundToDecimal(this._value)}%`
  }

  /**
   * Checks if this percentage value is equal to another percentage value.
   * @param other - The other percentage value to compare with.
   * @returns True if the values are equal, false otherwise.
   */
  equals(other: PercentageValue): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a string value.
 */
export class StringValue {
  readonly _value: string | number

  constructor(value: string | number) {
    this._value = value
  }

  /**
   * Gets the string representation of the value.
   * @returns The string value.
   */
  get value(): string {
    return `${this._value}`
  }

  /**
   * Checks if this string value is equal to another string value.
   * @param other - The other string value to compare with.
   * @returns True if the values are equal, false otherwise.
   */
  equals(other: StringValue): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a raw value.
 */
export class RawValue {
  readonly _value: string | number

  constructor(value: string | number) {
    this._value = value
  }

  /**
   * Gets the raw value.
   * @returns The raw value.
   */
  get value() {
    return this._value
  }

  /**
   * Checks if this raw value is equal to another raw value.
   * @param other - The other raw value to compare with.
   * @returns True if the values are equal, false otherwise.
   */
  equals(other: RawValue): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a normal value.
 */
export class NormalValue {
  /**
   * Gets the string representation of the normal value.
   * @returns The string "normal".
   */
  get value(): string {
    return "normal"
  }

  /**
   * Checks if this normal value is equal to another normal value.
   * @param other - The other normal value to compare with.
   * @returns True if the values are equal, false otherwise.
   */
  equals(other: NormalValue): boolean {
    return this.value === other.value
  }
}

// Export aliases for backward compatibility
export const LI = roundToDecimal
export const O$ = RawValue
export const QE = PercentageValue
export const Qf = NormalValue
export const RU = PixelValue
export const lS = StringValue
