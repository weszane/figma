/**
 * Interface for selector objects used by ViewSelectorGroup.
 */
export interface IViewSelector {
  pathToSelectedView: (
    e: any,
    t: any,
    i: any,
    n: any
  ) => any | null
  requireHistoryChange: (
    e: any,
    t: any
  ) => boolean
  selectedViewToPath: (
    e: any,
    t: any
  ) => any | null
  selectedViewName: (
    e: any,
    t: any
  ) => string | null
  selectedViewHasMissingResources?: (
    e: any,
    t: any
  ) => boolean
}

/**
 * Groups multiple view selectors and delegates selection logic.
 * Original class name: $$n0
 */
export class ViewSelectorGroup {
  private selectors: IViewSelector[]

  /**
   * @param selectors Array of selector objects implementing IViewSelector.
   */
  constructor(selectors: IViewSelector[]) {
    this.selectors = selectors
  }

  /**
   * Finds the path to the selected view using the first selector that returns a non-null result.
   * Original method: pathToSelectedView
   */
  pathToSelectedView(
    e: any,
    t: any,
    i: any,
    n: any,
  ): any | null {
    for (const selector of this.selectors) {
      const result = selector.pathToSelectedView(e, t, i, n)
      if (result != null)
        return result
    }
    return null
  }

  /**
   * Determines if a history change is required by any selector.
   * Original method: requireHistoryChange
   */
  requireHistoryChange(
    e: any,
    t: any,
  ): boolean {
    for (const selector of this.selectors) {
      if (selector.requireHistoryChange(e, t))
        return true
    }
    return false
  }

  /**
   * Converts the selected view to a path using the first selector that returns a non-null result.
   * Original method: selectedViewToPath
   */
  selectedViewToPath(
    e: any,
    t: any,
  ): any | null {
    for (const selector of this.selectors) {
      const result = selector.selectedViewToPath(e, t)
      if (result != null)
        return result
    }
    return null
  }

  /**
   * Gets the name of the selected view using the first selector that returns a non-null result.
   * Original method: selectedViewName
   */
  selectedViewName(
    e: any,
    t: any,
  ): string | null {
    for (const selector of this.selectors) {
      const result = selector.selectedViewName(e, t)
      if (result != null)
        return result
    }
    return null
  }

  /**
   * Checks if the selected view has missing resources using any selector that implements the method.
   * Original method: selectedViewHasMissingResources
   */
  selectedViewHasMissingResources(
    e: any,
    t: any,
  ): boolean {
    for (const selector of this.selectors) {
      if (
        selector.selectedViewHasMissingResources
        && selector.selectedViewHasMissingResources(e, t)
      ) {
        return true
      }
    }
    return false
  }
}

/**
 * Exported alias for ViewSelectorGroup.
 * Original export: k = $$n0
 */
export const k = ViewSelectorGroup
