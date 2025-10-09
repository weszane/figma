import { createFigmaPluginScope } from "../905/629114"
// Refactored to use clearer naming, added type safety, and improved readability
// Original function name: $$a0
let figmaPluginScope: ReturnType<typeof createFigmaPluginScope> | null = null

export function getFigmaPluginScope() {
  if (!figmaPluginScope) {
    figmaPluginScope = createFigmaPluginScope()
    figmaPluginScope.skipInvisibleInstanceChildren = true
  }
  return figmaPluginScope
}

export const F = getFigmaPluginScope
