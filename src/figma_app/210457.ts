// Interface for cursor position
interface CursorPosition {
  x: number;
  y: number;
}

// Refactored class for managing cursor locations and hands on right
export class CursorKinematics {
  private lastCursorLocations: Record<string, CursorPosition> = {};
  private readonly CANVAS_SPACE_SPEED_THRESHOLD = 2;
  private cursorHandsOnRight = new Set<string>();

  /**
   * Gets the set of session IDs where cursors are on the right.
   * @returns Set of session IDs.
   */
  getHandsOnRight(): Set<string> {
    return this.cursorHandsOnRight;
  }

  /**
   * Updates a single cursor's position and checks for hand on right.
   * @param cursors - Object to store updated cursor locations.
   * @param position - New cursor position.
   * @param sessionId - Session ID of the cursor.
   */
  updateSingleCursor(cursors: Record<string, CursorPosition>, position: CursorPosition, sessionId: string): void {
    const lastPos = this.lastCursorLocations[sessionId];
    if (lastPos) {
      if (position.x > lastPos.x + this.CANVAS_SPACE_SPEED_THRESHOLD) {
        this.cursorHandsOnRight.add(sessionId);
      } else if (position.x < lastPos.x - this.CANVAS_SPACE_SPEED_THRESHOLD) {
        this.cursorHandsOnRight.delete(sessionId);
      }
    }
    cursors[sessionId] = position;
  }

  /**
   * Updates all cursors based on the provided data.
   * @param cursors - Array of cursor objects.
   * @param currentSessionId - Current session ID.
   * @param isLocal - Whether the update is for local cursor.
   * @param localPosition - Local cursor position.
   */
  updateCursors(cursors: any[], currentSessionId: any, isLocal: boolean, localPosition: CursorPosition): void {
    const newLocations: Record<string, CursorPosition> = {};
    for (const cursor of cursors) {
      if (currentSessionId.toString() !== cursor.sessionId) {
        this.updateSingleCursor(newLocations, cursor.mouse.canvasSpacePosition, cursor.sessionId);
      }
    }
    if (isLocal) {
      this.updateSingleCursor(newLocations, { x: localPosition.x, y: localPosition.y }, currentSessionId.toString());
    }
    this.lastCursorLocations = newLocations;
    for (const sessionId of this.cursorHandsOnRight.keys()) {
      if (!newLocations[sessionId]) {
        this.cursorHandsOnRight.delete(sessionId);
      }
    }
  }
}

// Refactored function to check if a set has an item (originally $$i0)
export function hasItem(set: Set<any>, item: any): boolean {
  return set.has(item);
}

// Export the refactored class as p (original export name)
export const p = CursorKinematics;

// Export the refactored function as I (original export name)
export const I = hasItem;
