/**
 * Represents a vector path builder for SVG-like commands.
 * Original class name: $$r0
 */
export class VectorPathBuilder {
  /** The winding rule for the path */
  windingRule: string
  /** Array of path commands */
  commands: (string | number)[]
  /** The last position used in the path */
  lastPosition: { x: number, y: number } | null

  /**
   * Creates a new VectorPathBuilder.
   * @param windingRule - The winding rule for the path.
   */
  constructor(windingRule: string) {
    this.windingRule = windingRule
    this.commands = []
    this.lastPosition = null
  }

  /**
   * Moves the path to a new position.
   * Original method name: moveTo
   * @param position - The position to move to.
   */
  moveTo(position: { x: number, y: number }): void {
    this.commands.push('M', position.x, position.y)
    this.lastPosition = position
  }

  /**
   * Draws a line to a new position.
   * Original method name: lineTo
   * @param position - The position to draw a line to.
   */
  lineTo(position: { x: number, y: number }): void {
    this.commands.push('L', position.x, position.y)
    this.lastPosition = position
  }

  /**
   * Draws a cubic Bezier curve.
   * Original method name: curveTo
   * @param control1 - First control point.
   * @param control2 - Second control point.
   * @param endPoint - End point of the curve.
   */
  curveTo(
    control1: { x: number, y: number },
    control2: { x: number, y: number },
    endPoint: { x: number, y: number },
  ): void {
    this.commands.push(
      'C',
      control1.x,
      control1.y,
      control2.x,
      control2.y,
      endPoint.x,
      endPoint.y,
    )
    this.lastPosition = endPoint
  }

  /**
   * Closes the current path.
   * Original method name: closePath
   */
  closePath(): void {
    this.commands.push('Z')
    this.lastPosition = null
  }

  /**
   * Converts the path to a vector path object.
   * Original method name: toVectorPath
   * @returns The vector path object.
   */
  toVectorPath(): { windingRule: string, data: string } {
    return {
      windingRule: this.windingRule,
      data: this.commands.join(' '),
    }
  }
}

/**
 * Mapping of path command to number of arguments.
 * Original variable name: a
 */
const pathCommandArgCount: Record<string, number> = {
  Z: 0,
  M: 2,
  L: 2,
  Q: 4,
  C: 6,
}

/**
 * Gets the argument count for a path command.
 * Original function name: $$s1
 * @param command - The path command.
 * @returns The number of arguments for the command.
 */
export function getPathCommandArgCount(command: string): number {
  return pathCommandArgCount[command]
}

/**
 * Converts a vector path object to an array of commands and arguments.
 * Original function name: $$o2
 * @param vectorPath - The vector path object.
 * @returns Array of commands and arguments.
 * @throws Error if the path is invalid.
 */
export function parseVectorPathData(vectorPath: { data: string }): (string | number)[] {
  if (!vectorPath.data || !vectorPath.data.length)
    return []
  const tokens = vectorPath.data.split(' ')
  const result: (string | number)[] = []
  for (const token of tokens) {
    if (
      token === 'Z'
      || token === 'M'
      || token === 'L'
      || token === 'Q'
      || token === 'C'
    ) {
      result.push(token)
      continue
    }
    const num = Number(token)
    if (!isNaN(num)) {
      result.push(num)
      continue
    }
    throw new Error(`Failed to convert path. Invalid command at ${token}`)
  }
  if (result.length > 0 && result[0] !== 'M') {
    throw new Error(
      `Failed to convert path. ${result[0]} is not a valid first command`,
    )
  }
  return result
}

// Export refactored names for external usage
export const TF = VectorPathBuilder
export const kz = getPathCommandArgCount
export const vf = parseVectorPathData
