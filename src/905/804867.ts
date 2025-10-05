import type { IPoint } from "../905/736624"
import { toMatrix2x3 } from "../905/117560"
import { getRadialGradientPoints } from "../905/409381"
import { Vector2D } from "../905/512402"
import { AffineTransform } from "../905/583953"
import { formatPercentage } from "../905/721592"
import { Point } from "../905/736624"

/**
 * Helper function to join color stop values with commas
 * Original name: d
 */
function joinColorStops(colorStops: ColorStop[]): string {
  return colorStops.map(stop => stop.value).join(", ")
}

/**
 * Represents a color stop in a gradient
 * Original name: $$c1
 */
export class ColorStop {
  color: any
  position: number

  constructor(color: any, position: number) {
    this.color = color
    this.position = position
  }

  get value(): string {
    return `${this.color.value} ${formatPercentage(this.position, 2)}`
  }

  equals(other: ColorStop): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a color stop with degree-based positioning for conic gradients
 * Original name: u
 */
class DegreeBasedColorStop {
  color: any
  position: number

  constructor(color: any, position: number) {
    this.color = color
    this.position = position
  }

  get value(): string {
    return `${this.color.value} ${360 * this.position}deg`
  }

  equals(other: DegreeBasedColorStop): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a color stop with halved positioning for diamond gradients
 * Original name: p
 */
class DiamondColorStop {
  color: any
  position: number

  constructor(color: any, position: number) {
    this.color = color
    this.position = position
  }

  get value(): string {
    return `${this.color.value} ${formatPercentage(this.position / 2)}`
  }

  equals(other: DiamondColorStop): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a linear gradient
 * Original name: $$m2
 */
export class LinearGradient {
  angle: number
  colorStops: ColorStop[]
  isFromSolid: boolean

  /**
   * Creates a linear gradient from a single color
   */
  static fromColor(color: any, isFromSolid: boolean = false): LinearGradient {
    return new LinearGradient([new ColorStop(color, 0), new ColorStop(color, 1)], 0, isFromSolid)
  }

  /**
   * Creates a linear gradient from gradient paint data
   */
  static fromGradientPaint(
    {
      gradientTransform,
      gradientStops,
    }: {
      gradientTransform: number[][]
      gradientStops: any[]
    },
    parser: any,
  ): LinearGradient {
    if (gradientStops.length === 1) {
      return LinearGradient.fromColor(parser.parseSingleStop(gradientStops[0]))
    }

    const corners = {
      topLeft: { x: 0, y: 0 },
      topRight: { x: 1, y: 0 },
      bottomLeft: { x: 0, y: 1 },
      bottomRight: { x: 1, y: 1 },
    }

    const transform = AffineTransform.fromNumbers(
      gradientTransform[0][0],
      gradientTransform[0][1],
      gradientTransform[0][2],
      gradientTransform[1][0],
      gradientTransform[1][1],
      gradientTransform[1][2],
    )
    transform.invert()

    const interpolatePosition = (position: number) => {
      const point = Point.interpolate(
        { x: 0, y: 0.5 },
        { x: 1, y: 0.5 },
        position,
      )
      const transformedPoint = transform.transformPoint(new Vector2D(point.x, point.y))
      return {
        x: transformedPoint.x,
        y: transformedPoint.y,
      }
    }

    const stops = gradientStops.map(stop => ({
      color: stop.color,
      location: interpolatePosition(stop.position),
      boundVariables: stop.boundVariables,
    }))

    if (transform.determinant() < 0) {
      transform.scale(1, -1)
    }

    const yAxis = new Point(transform.axisY().x, transform.axisY().y)
    const perpendicular = yAxis.scale(-1).rotate90().unit()
    const halfPi = Math.PI / 2

    let startPoint = { x: 0, y: 0 }
    let endPoint = { x: 0, y: 0 }

    const angle = yAxis.scale(-1).toAngle()

    if (angle > 0 && angle < halfPi) {
      startPoint = corners.topRight
      endPoint = corners.bottomLeft
    }
    else if (angle >= halfPi) {
      startPoint = corners.bottomRight
      endPoint = corners.topLeft
    }
    else if (angle <= 0 && angle > -halfPi) {
      startPoint = corners.topLeft
      endPoint = corners.bottomRight
    }
    else if (angle <= -halfPi) {
      startPoint = corners.bottomLeft
      endPoint = corners.topRight
    }

    const calculateProjection = (a: Point, b: Point, point: IPoint): number => {
      const vector = Point.subtract(b, a)
      return Point.dot(Point.subtract(point, a), vector) / Point.dot(vector, vector)
    }

    const interpolateAlongLine = (a: Point, b: Point, point: IPoint): Point => {
      return Point.interpolate(a, b, calculateProjection(a, b, point))
    }

    const projectedStart = interpolateAlongLine(new Point(0, 0), perpendicular, startPoint)
    const projectedEnd = interpolateAlongLine(new Point(0, 0), perpendicular, endPoint)
    const distance = Point.size(Point.subtract(projectedEnd, projectedStart))

    return new LinearGradient(
      stops.map((stop) => {
        const projectedDistance = Point.dot(Point.subtract(stop.location, projectedStart), perpendicular) / distance
        return new ColorStop(parser.parseSingleStop(stop), projectedDistance)
      }),
      180 / Math.PI * (angle + Math.PI),
    )
  }

  constructor(colorStops: ColorStop[], angle: number, isFromSolid: boolean = false) {
    this.angle = angle
    this.colorStops = colorStops
    this.isFromSolid = isFromSolid
  }

  get value(): string {
    let normalizedAngle = Math.round(this.angle)
    if (normalizedAngle === 360) {
      normalizedAngle = 0
    }
    return `linear-gradient(${normalizedAngle}deg, ${joinColorStops(this.colorStops)})`
  }

  equals(other: LinearGradient): boolean {
    return this.value === other.value
  }

  toNewWithColorStops(colorStops: ColorStop[]): LinearGradient {
    return new LinearGradient(colorStops, this.angle, this.isFromSolid)
  }
}

/**
 * Represents a radial gradient
 * Original name: $$h0
 */
export class RadialGradient {
  centerX: number
  centerY: number
  width: number
  height: number
  colorStops: ColorStop[]

  constructor(gradientData: any, parser: any) {
    const [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }] = getRadialGradientPoints(toMatrix2x3(gradientData.gradientTransform))

    this.centerX = x1
    this.centerY = y1
    this.width = Math.sqrt((x3 - x1) * (x3 - x1) + (y3 - y1) * (y3 - y1))
    this.height = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
    this.colorStops = gradientData.gradientStops.map(
      (stop: any) => new ColorStop(parser.parseSingleStop(stop), stop.position),
    )
  }

  get value(): string {
    return `radial-gradient(${formatPercentage(this.width, 2)} ${formatPercentage(this.height, 2)} at ${formatPercentage(this.centerX, 2)} ${formatPercentage(this.centerY, 2)}, ${joinColorStops(this.colorStops)})`
  }

  equals(other: RadialGradient): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a conic gradient
 * Original name: $$g3
 */
export class ConicGradient {
  centerX: number
  centerY: number
  angle: number
  colorStops: DegreeBasedColorStop[]

  constructor(gradientData: any, parser: any) {
    const [{x: x1, y: y1}, {x: x2, y: y2}] = getRadialGradientPoints(toMatrix2x3(gradientData.gradientTransform))

    this.centerX = x1
    this.centerY = y1
    this.angle = 180 * Math.atan2(y2 - y1, x2 - x1) / Math.PI + 90
    this.colorStops = gradientData.gradientStops.map(
      (stop: any) => new DegreeBasedColorStop(parser.parseSingleStop(stop), stop.position),
    )
  }

  get value(): string {
    return `conic-gradient(from ${Math.round(this.angle)}deg at ${formatPercentage(this.centerX, 2)} ${formatPercentage(this.centerY, 2)}, ${joinColorStops(this.colorStops)})`
  }

  equals(other: ConicGradient): boolean {
    return this.value === other.value
  }
}

/**
 * Represents a diamond gradient
 * Original name: $$f4
 */
export class DiamondGradient {
  colorStops: DiamondColorStop[]

  constructor(gradientData: any, parser: any) {
    this.colorStops = gradientData.gradientStops.map(
      (stop: any) => new DiamondColorStop(parser.parseSingleStop(stop), stop.position),
    )
  }

  get value(): string {
    return ["bottom right", "bottom left", "top left", "top right"]
      .map(position => `linear-gradient(to ${position}, ${joinColorStops(this.colorStops)}) ${position} / 50% 50% no-repeat`)
      .join(", ")
  }

  equals(other: DiamondGradient): boolean {
    return this.value === other.value
  }
}

// Export aliases for backward compatibility
export const Ey = RadialGradient
export const P2 = ColorStop
export const W4 = LinearGradient
export const jN = ConicGradient
export const n_ = DiamondGradient
