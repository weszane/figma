import { clampWithBounds, roundToNearestMultiple } from '../905/875826'

let unicodeDigitConverter = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  '-': '-',
  '.': '.',
  ',': '.',
  '\u06F0': '0',
  '\u06F1': '1',
  '\u06F2': '2',
  '\u06F3': '3',
  '\u06F4': '4',
  '\u06F5': '5',
  '\u06F6': '6',
  '\u06F7': '7',
  '\u06F8': '8',
  '\u06F9': '9',
  '\u060C': '.',
  '\u066B': '.',
  '\u066C': '.',
  '\u0660': '0',
  '\u0661': '1',
  '\u0662': '2',
  '\u0663': '3',
  '\u0664': '4',
  '\u0665': '5',
  '\u0666': '6',
  '\u0667': '7',
  '\u0668': '8',
  '\u0669': '9',
}
/**
 * Converts unicode digits and symbols to standard ASCII equivalents
 * @param input - The input string to convert
 * @returns The converted string with standard digits and decimal separators
 */
export function convertUnicodeDigits(input: string): string {
  // Early return for empty strings or already valid numeric strings
  if (input === '' || /^-?\d*(?:\.\d*)?$/.test(input))
    return input

  let hasDecimalPoint = false
  let result = ''

  for (let index = 0; index < input.length; index++) {
    const char = input[index]

    if (char in unicodeDigitConverter) {
      const convertedChar = unicodeDigitConverter[char]

      // Handle decimal point - only allow one
      if (convertedChar === '.') {
        if (hasDecimalPoint)
          continue
        result += convertedChar
        hasDecimalPoint = true
        continue
      }

      result += convertedChar
      continue
    }

    // If we encounter a non-convertible character, return original input
    return input
  }

  return result
}

/**
 * Checks if an object has incrementBy method
 * @param obj - The object to check
 * @returns True if object has incrementBy property
 */
export function hasIncrementBy(obj: any): boolean {
  return 'incrementBy' in obj
}

// Define proper function types to replace the generic Function type
interface ControllerWithIncrementTargets {
  getIncrementTargets?: (value: string, selection: { start: number, end: number }) => any
}

interface ControllerWithNudgeAmount {
  getNudgeAmount?: (isBigStep: boolean, currentValue: any) => number
}

/**
 * Gets increment targets from an element's selection
 * @param controller - The controller object
 * @param element - The HTML input element
 * @returns The increment targets or null
 */
export function getIncrementTargets(
  controller: ControllerWithIncrementTargets,
  element: HTMLInputElement,
): any {
  if (!controller.getIncrementTargets)
    return null

  const selectionStart = element.selectionStart || 0
  const selectionEnd = element.selectionEnd || 0

  return controller.getIncrementTargets(element.value, {
    start: selectionStart,
    end: selectionEnd,
  })
}

/**
 * Gets the nudge amount for incrementing values
 * @param controller - The controller object
 * @param isBigStep - Whether this is a big step increment
 * @param currentValue - The current value
 * @returns The nudge amount
 */
export function getNudgeAmount(
  controller: ControllerWithNudgeAmount,
  isBigStep: boolean,
  currentValue: any,
): number {
  return controller.getNudgeAmount
    ? controller.getNudgeAmount(isBigStep, currentValue)
    : isBigStep ? 10 : 1
}

/**
 * Increments a value by a specified amount
 * @param controller - The controller object
 * @param currentValue - The current value
 * @param incrementAmount - The amount to increment by
 * @param options - Additional options
 * @returns Object containing the incremented value and pre-clamped value
 */
export function incrementValue(
  controller: any,
  currentValue: any,
  incrementAmount: number,
  {
    big: isBigStep = false,
    incrementTargets = null,
    snap,
  }: {
    big?: boolean
    incrementTargets?: any
    snap?: boolean
  } = {},
): { value: any, preClamped: any } {
  let newValue = controller.incrementBy(currentValue, incrementAmount, incrementTargets)

  if (snap) {
    const nudgeAmount = getNudgeAmount(controller, isBigStep, currentValue)

    if (controller.snap) {
      newValue = controller.snap(newValue, nudgeAmount)
    }
    else if (typeof newValue === 'number') {
      newValue = roundToNearestMultiple(newValue, nudgeAmount)
    }
  }

  return {
    value: clampValue(controller, newValue),
    preClamped: newValue,
  }
}

/**
 * Performs a nudge operation (increment/decrement)
 * @param controller - The controller object
 * @param currentValue - The current value
 * @param direction - The direction to nudge (1 for increment, -1 for decrement)
 * @param options - Additional options
 * @returns Object containing the new value and pre-clamped value
 */
export function performNudge(
  controller: any,
  currentValue: any,
  direction: number,
  options: any = {},
): { value: any, preClamped: any } {
  const isBigStep = options.big ?? false
  const nudgeAmount = getNudgeAmount(controller, isBigStep, currentValue)

  return incrementValue(controller, currentValue, nudgeAmount * direction, options)
}

/**
 * Parses a value using the controller's parse method
 * @param controller - The controller object
 * @param input - The input to parse
 * @param context - Additional context for parsing
 * @returns Object containing the parsed value and formatted value
 */
export function parseValue(
  controller: any,
  input: any,
  context?: any,
): { value: any, parsedValue: any } {
  const parsedValue = controller.parse(input, context)

  return {
    value: hasIncrementBy(controller) ? clampValue(controller, parsedValue) : parsedValue,
    parsedValue,
  }
}

/**
 * Handles parsing with error handling
 * @param controller - The controller object
 * @param input - The input to parse
 * @param fallbackValue - The fallback value if parsing fails
 * @param source - The source of the input
 * @param event - The event that triggered the parsing
 * @returns Object containing the parsed value and optional callback
 */
export function handleParseWithError(
  controller: any,
  input: any,
  fallbackValue: any,
  source: any,
  event: any = null,
): { value: any, parsedValue: any, callback: ((...args: any[]) => any) | null } | null {
  try {
    return {
      ...parseValue(controller, input),
      callback: null,
    }
  }
  catch (error) {
    const errorHandlerResult = controller.onParseThrow?.(input, {
      error,
      value: fallbackValue,
      source,
      event,
    })

    if (typeof errorHandlerResult === 'function') {
      return {
        value: null,
        parsedValue: null,
        callback: errorHandlerResult,
      }
    }

    return errorHandlerResult == null
      ? null
      : {
        value: errorHandlerResult,
        parsedValue: errorHandlerResult,
        callback: null,
      }
  }
}

/**
 * Clamps a value within the controller's min/max bounds
 * @param controller - The controller object
 * @param value - The value to clamp
 * @returns The clamped value
 */
export function clampValue(controller: any, value: any): any {
  const { min, max } = controller

  if (controller.clamp) {
    return controller.clamp(value, min, max)
  }

  return typeof value === 'number' ? clampWithBounds(value, min, max) : value
}

/**
 * Checks if two values are equal using controller's isEqual method or format comparison
 * @param controller - The controller object
 * @param value1 - First value to compare
 * @param value2 - Second value to compare
 * @returns True if values are equal
 */
export function areValuesEqual(controller: any, value1: any, value2: any): boolean {
  return value1 === value2
    || (controller.isEqual
      ? controller.isEqual(value1, value2)
      : controller.format(value1) === controller.format(value2))
}

export const Fi = areValuesEqual
export const Hl = performNudge
export const Jq = clampValue
export const QT = hasIncrementBy
export const R2 = parseValue
export const S8 = convertUnicodeDigits
export const _L = getIncrementTargets
export const iL = handleParseWithError
export const mb = getNudgeAmount
export const ql = incrementValue
