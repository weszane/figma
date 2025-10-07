/**
 * Collision detection system for cursor interactions
 */

import type { CursorCollisionPair, CursorState, CollisionDetector as ICollisionDetector, Position } from './types'
import { CURSOR_COLLISION_RADIUS } from './constants'

/**
 * Manages cursor collision detection and proximity tracking
 */
export class CollisionDetector implements ICollisionDetector {
  static CURSOR_COLLISION_RADIUS = 80
  private previouslyCollidingCursors = new Set<string>()

  /**
   * Update collision detection and return new collision pairs
   */
  updateAndCheckCollisions(cursors: CursorState[]): CursorCollisionPair[] {
    const currentlyCollidingKeys = new Set<string>()
    const newCollisions: CursorCollisionPair[] = []

    // Check all cursor pairs for collisions
    for (let i = 0; i < cursors.length; i++) {
      const cursor1 = cursors[i]
      const closestCursor = this.findClosestNonSelfCursor(cursor1, cursors.slice(i + 1))

      if (closestCursor && this.areCursorsColliding(cursor1, closestCursor)) {
        const proximityKey = this.makeCursorProximityKey(cursor1, closestCursor)

        // If this is a new collision, add it to the results
        if (!this.previouslyCollidingCursors.has(proximityKey)) {
          newCollisions.push([cursor1, closestCursor])
        }

        currentlyCollidingKeys.add(proximityKey)
      }
    }

    // Update the set of currently colliding cursors
    this.previouslyCollidingCursors = currentlyCollidingKeys

    return newCollisions
  }

  /**
   * Create a unique key for a cursor proximity pair
   */
  private makeCursorProximityKey(cursor1: CursorState, cursor2: CursorState): string {
    return [cursor1.sessionId, cursor2.sessionId].sort().join('+')
  }

  /**
   * Calculate distance between two positions
   */
  private distanceBetween(pos1: Position | null, pos2: Position | null): number {
    if (!pos1 || !pos2) {
      return Infinity
    }

    const deltaX = pos1.x - pos2.x
    const deltaY = pos1.y - pos2.y
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
  }

  /**
   * Calculate the midpoint between two positions
   */
  static computeMidpoint(pos1: Position, pos2: Position): Position {
    return {
      x: (pos1.x + pos2.x) / 2,
      y: (pos1.y + pos2.y) / 2,
    }
  }

  /**
   * Find the closest cursor to the given cursor (excluding itself)
   */
  private findClosestNonSelfCursor(targetCursor: CursorState, otherCursors: CursorState[]): CursorState | null {
    let minDistance = Infinity
    let closestCursor: CursorState | null = null

    otherCursors.forEach((cursor) => {
      if (cursor.sessionID !== targetCursor.sessionID) {
        const distance = this.distanceBetween(
          targetCursor.mouse?.canvasSpacePosition,
          cursor.mouse?.canvasSpacePosition,
        )

        if (distance < minDistance) {
          minDistance = distance
          closestCursor = cursor
        }
      }
    })

    return closestCursor
  }

  /**
   * Check if two cursors are within collision distance
   */
  private areCursorsColliding(cursor1: CursorState, cursor2: CursorState): boolean {
    const distance = this.distanceBetween(
      cursor1.mouse?.canvasSpacePosition,
      cursor2.mouse?.canvasSpacePosition,
    )

    return distance < CURSOR_COLLISION_RADIUS
  }

  /**
   * Get all currently colliding cursor pairs
   */
  getCurrentCollisions(): Set<string> {
    return new Set(this.previouslyCollidingCursors)
  }

  /**
   * Clear collision history
   */
  clearCollisionHistory(): void {
    this.previouslyCollidingCursors.clear()
  }

  /**
   * Check if two specific cursors are currently colliding
   */
  areCursorsCurrentlyColliding(cursor1: CursorState, cursor2: CursorState): boolean {
    const proximityKey = this.makeCursorProximityKey(cursor1, cursor2)
    return this.previouslyCollidingCursors.has(proximityKey)
  }
}
