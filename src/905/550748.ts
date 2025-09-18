import { clamp, nearlyEqual } from '../figma_app/492908'

/**
 * ColorManipulator - Refactored from $$r0
 * Provides utilities for manipulating RGBA color objects.
 */
export abstract class ColorManipulator {
  /**
   * Returns the default selection for color manipulation.
   * @param color - The color object.
   * @returns The selected color channels.
   * (defaultSelection)
   */
  defaultSelection(color: any) {
    return this.getSelection(color, {
      r: true,
      g: true,
      b: true,
    })
  }

  /**
   * Returns the nudge amount based on the modifier.
   * @param isLarge - Whether to nudge by a large amount.
   * @returns The nudge amount.
   * (getNudgeAmount)
   */
  getNudgeAmount(isLarge: boolean): number {
    return isLarge ? 10 : 1
  }

  /**
   * Increments color channels by a specified amount.
   * @param color - The original color object.
   * @param amount - The amount to increment.
   * @param selection - The channels to increment.
   * @returns The incremented color object.
   * (incrementBy)
   */
  incrementBy(
    color: { r: number, g: number, b: number, a?: number },
    amount: number,
    selection?: { r?: boolean, g?: boolean, b?: boolean, a?: boolean },
  ) {
    const updated = { ...color }
    const normalized = this.normalize(amount)
    const alphaIncrement = amount / 100
    if (selection) {
      if (selection.r)
        updated.r += normalized
      if (selection.g)
        updated.g += normalized
      if (selection.b)
        updated.b += normalized
      if (selection.a && updated.a !== undefined)
        updated.a += alphaIncrement
    }
    return updated
  }

  /**
   * Clamps color channel values between 0 and 1.
   * @param color - The color object.
   * @returns The clamped color object.
   * (clamp)
   */
  clamp(color: { [key: string]: number }): { [key: string]: number } {
    const clamped = { ...color }
    for (const channel in color) {
      clamped[channel] = clamp(color[channel], 0, 1)
    }
    return clamped
  }

  /**
   * Checks if two color objects are nearly equal.
   * @param a - First color object.
   * @param b - Second color object.
   * @returns True if colors are nearly equal.
   * (isEqual)
   */
  isEqual(
    a: { r: number, g: number, b: number, a?: number },
    b: { r: number, g: number, b: number, a?: number },
  ): boolean {
    return (
      nearlyEqual(a.r, b.r)
      && nearlyEqual(a.g, b.g)
      && nearlyEqual(a.b, b.b)
      && nearlyEqual(a.a ?? 1, b.a ?? 1)
    )
  }

  /**
   * Normalizes a value from 0-255 to 0-1.
   * @param value - The value to normalize.
   * @returns The normalized value.
   * (normalize)
   */
  normalize(value: number): number {
    return value / 255
  }

  /**
   * Converts a normalized value (0-1) to 0-255.
   * @param value - The normalized value.
   * @returns The value in 0-255 range.
   * (normalize255)
   */
  normalize255(value: number): number {
    return Math.round(255 * value)
  }

  /**
   * Returns the selected color channels.
   * @param color - The color object.
   * @param selection - The selection object.
   * @returns The selected color channels.
   * (getSelection)
   */
  abstract getSelection(
    color: any,
    selection: { r?: boolean, g?: boolean, b?: boolean, a?: boolean },
  ): any
}

// Refactored export name
export const A = ColorManipulator
