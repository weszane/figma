import { debugState } from "../905/407919"
import { handlePluginError } from "../905/753206"
import { hasStoredValue } from "../905/851937"
import { hasLocalFileId } from "../figma_app/155287"
import { canRunPlugin } from "../figma_app/300692"
import { hasPluginPageLoadedCallback, hasSpellCheckCallback, runPluginPageLoadedCallback, runSpellCheckCallback } from "../figma_app/603466"
import { PluginManager } from "../figma_app/612938"
import { getSelectedViewPluginVersions } from "../figma_app/740025"
import { updateActiveTextReviewPlugin } from "../figma_app/741237"
import { LayoutTabType } from "../figma_app/763686"
import { SH } from "../figma_app/790714"

// Renamed variables, added types, simplified logic, improved readability
interface SpellCheckResult {
  start: number
  end: number
  color: string
  suggestions: string[]
}

interface Plugin {
  localFileId?: string
  plugin_id?: string
  name?: string
  manifest?: {
    capabilities?: string[]
  }
}

export class TextReviewPluginManager {
  name: string = "plugin"
  runningPlugin: Promise<void> | null = null
  onExitTextEditModeCallbackCalled: boolean = false

  constructor() {
    this.reviewText = this.reviewText.bind(this)
  }

  reviewText = async (text: string): Promise<SpellCheckResult[]> => {
    if (hasStoredValue() && SH()?.command !== "textreview") {
      return []
    }

    this.startTextReviewPlugin()

    const spellCheckPromise = runSpellCheckCallback(text)

    const timeoutPromise = new Promise<"timeout">((resolve) => {
      setTimeout(() => resolve("timeout"), 3000)
    })

    let spellCheckResult = await Promise.race([spellCheckPromise, timeoutPromise])

    const currentPlugin = SH()?.plugin
    const isLocalPlugin = currentPlugin && hasLocalFileId(currentPlugin)

    if (spellCheckResult === "timeout") {
      if (!hasSpellCheckCallback()) {
        handlePluginError(
          isLocalPlugin
            ? "Text review plugins must call on('textreview') upon running"
            : undefined,
        )
        return []
      }
      spellCheckResult = await spellCheckPromise
    }

    return spellCheckResult.map((item: any) => ({
      start: item.start,
      end: item.end,
      color: item.color,
      suggestions: item.suggestions,
    }))
  }

  async onExitTextEditMode(): Promise<void> {
    if (!this.onExitTextEditModeCallbackCalled) {
      this.onExitTextEditModeCallbackCalled = true

      if (hasPluginPageLoadedCallback()) {
        const pageLoaded = await runPluginPageLoadedCallback()
        if (!pageLoaded) {
          updateActiveTextReviewPlugin(null)
        }
      }

      handlePluginError()
    }
  }

  startTextReviewPlugin(): void {
    if (this.runningPlugin) {
      return
    }

    const state = debugState.getState()
    const plugin = getTextReviewPlugin(state)

    if (!hasStoredValue() && plugin) {
      const unsubscribe = debugState.subscribe(() => {
        const currentState = debugState.getState()
        if (currentState.mirror.appModel.activeCanvasEditModeType !== LayoutTabType.TEXT) {
          this.onExitTextEditMode()
        }
      })

      const cleanup = () => {
        this.runningPlugin = null
        unsubscribe()
        if (hasLocalFileId(plugin)) {
          console.log(`Closing local text review plugin: ${plugin.name}`)
        }
      }

      if (hasLocalFileId(plugin)) {
        console.log(`Starting local text review plugin: ${plugin.name}`)
      }

      this.onExitTextEditModeCallbackCalled = false

      this.runningPlugin = PluginManager.instance.enqueue({
        mode: "run-forever",
        runPluginArgs: {
          plugin,
          command: "textreview",
          queryMode: true,
          openFileKey: state.openFile.key,
          isWidget: false,
          runMode: "textreview",
          triggeredFrom: "textreview",
        } as any,
      }).then(cleanup, cleanup)
    }
  }

  static shouldUsePluginForSpellChecking(): boolean {
    return !!getTextReviewPlugin(debugState.getState())
  }

  static instance: TextReviewPluginManager | undefined = new TextReviewPluginManager()
}

function getTextReviewPlugin(state: AppState): Plugin | null {
  const { localPlugins, installedPluginVersions } = state
  const { activeTextReviewPlugin } = state.mirror.appModel

  const viewPluginVersions = getSelectedViewPluginVersions(state)

  if (!activeTextReviewPlugin) {
    return null
  }

  let plugin: Plugin | null = null

  if (activeTextReviewPlugin.type === "local") {
    plugin = Object.values(localPlugins).find(
      p => p.localFileId === activeTextReviewPlugin.localFileId,
    ) ?? null
  }
  else if (activeTextReviewPlugin.type === "published") {
    plugin = [
      ...Object.values(installedPluginVersions.plugins),
      ...Object.values(viewPluginVersions),
    ].find(
      p => !hasLocalFileId(p) && p.plugin_id === activeTextReviewPlugin.pluginId,
    ) ?? null
  }

  if (!plugin || !plugin.manifest?.capabilities?.some(cap => cap === "textreview")) {
    return null
  }

  const { canRun } = canRunPlugin({ plugin })
  return canRun ? plugin : null
}

export const X = TextReviewPluginManager
