import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { addRecentlyUsedAction } from '../905/73603'
import { createDeferredPromise } from '../905/263346'
import { ch } from '../905/443517'
import { PluginImage } from '../905/480825'
import { SvgComponent } from '../905/714743'
import { handlePluginError } from '../905/753206'
import { waitForAllPagesForPlugin } from '../905/916933'
import { A as SVG } from '../1617/610488'
import { updateRecentlyUsedQuickCommand } from '../figma_app/91703'
import { canRunPlugin, getPluginVersion } from '../figma_app/300692'
import { selectCurrentFile } from '../figma_app/516028'
import { PluginManager } from '../figma_app/612938'
import { nW, zF } from '../figma_app/627977'
import { C3 } from '../figma_app/790714'
import { getLocalPlugins, usePublishedPlugins } from '../figma_app/844435'
import { getSelectedEditorType } from '../figma_app/976749'
import { useSingleEffect } from './791079'

/**
 * Handles plugin command execution and UI rendering.
 * Original function name: $$E0
 */
export function setupPluginCommandHandler({
  pluginId,
  pluginLocalFileId,
  command,
  parameterOnly,
  parameters,
  displayName,
  triggeredFrom,
  initialParameterValues,
  recentlyUsedCommandName,
}: {
  pluginId?: string
  pluginLocalFileId?: string
  command?: string
  parameterOnly?: boolean
  parameters?: any
  displayName?: string
  triggeredFrom?: string
  initialParameterValues?: any
  recentlyUsedCommandName?: string
}) {
  const publishedPlugins = usePublishedPlugins()
  const installedPlugins = useSelector<AppState>(state => state.installedPluginVersions.plugins)
  const localPlugins = getLocalPlugins()
  const editorType = getSelectedEditorType()
  const currentFile = selectCurrentFile()
  const dispatch = useDispatch<AppDispatch>()

  /**
   * Prepares and runs the plugin command.
   * Original variable name: O
   */
  const prepareAndRunPlugin = useCallback(async () => {
    let pluginVersion = null

    // Determine plugin version from installed, published, or local plugins
    if (pluginId) {
      pluginVersion = installedPlugins[pluginId] ?? (publishedPlugins[pluginId] && getPluginVersion(publishedPlugins[pluginId]))
    }
    else if (pluginLocalFileId) {
      pluginVersion = localPlugins[pluginLocalFileId]
    }

    if (!pluginVersion)
      throw new Error('Plugin not runnable')

    const { canRun } = canRunPlugin({
      plugin: pluginVersion,
      editorType,
    })
    if (!canRun)
      throw new Error('Plugin not runnable')

    const runPluginArgs = {
      plugin: pluginVersion,
      command: command || '',
      queryMode: true,
      runMode: 'default',
      triggeredFrom: 'parameter-entry',
      openFileKey: currentFile?.key || '',
      deferRunEvent: true,
      isWidget: false,
      parameterValues: undefined
    }

    const deferred = createDeferredPromise<{ triggerParameterInputEvent: () => void; triggerRunEvent: (input: any) => void }>()
    PluginManager.instance.enqueue({
      mode: 'run-forever',
      runPluginArgs,
    })

    const { triggerParameterInputEvent, triggerRunEvent } = await deferred

    /**
     * Triggers the plugin run event with parameters.
     * Original function name: triggerRunEvent
     */
    const handleRunEvent = async (input: any) => {
      const args = { ...runPluginArgs }
      const { isCancelled } = await waitForAllPagesForPlugin(args)
      if (!isCancelled) {
        args.queryMode = false
        args.deferRunEvent = false
        args.parameterValues = input.parameters
        if (recentlyUsedCommandName) {
          dispatch(updateRecentlyUsedQuickCommand({
            currentDisplayName: recentlyUsedCommandName,
            newCommand: {
              displayName: recentlyUsedCommandName,
              runPluginArgs: args,
            },
          }))
          addRecentlyUsedAction({
            displayText: recentlyUsedCommandName,
            runPluginArgs: args,
            localFileIdOrPluginId: pluginLocalFileId ?? pluginId,
          })
        }
        C3(args)
        triggerRunEvent(input)
      }
    }

    return {
      triggerParameterInputEvent,
      triggerRunEvent: handleRunEvent,
    }
  }, [
    command,
    dispatch,
    editorType,
    localPlugins,
    currentFile?.key,
    pluginId,
    pluginLocalFileId,
    publishedPlugins,
    recentlyUsedCommandName,
    installedPlugins,
  ])

  const [handler, setHandler] = useState<null | any>(null)

  useSingleEffect(() => {
    prepareAndRunPlugin().then(setHandler)
  })

  return jsx(ch, {
    actionIcon: getPluginActionIcon(installedPlugins, publishedPlugins, pluginId),
    actionLabel: getPluginActionIcon(installedPlugins, publishedPlugins, pluginId, zF),
    command,
    displayName,
    handler,
    initialParameterValues,
    parameterOnly,
    parameters,
    pluginId,
    pluginLocalFileId,
    terminate: handlePluginError,
    triggeredFrom,
  })
}

/**
 * Returns the plugin action icon or default SVG.
 * Original function name: x
 */
export function getPluginActionIcon(installedPlugins: Record<string, any>, publishedPlugins: Record<string, any>, pluginId?: string, className: string = nW) {
  if (!pluginId) {
    return jsx(SvgComponent, {
      className,
      svg: SVG,
      ariaLabel: 'plugin icon',
    })
  }
  let plugin = installedPlugins[pluginId]
  if (!plugin) {
    plugin = publishedPlugins[pluginId] && getPluginVersion(publishedPlugins[pluginId])
  }
  return jsx(PluginImage, {
    className,
    plugin,
    alt: 'plugin icon',
  })
}

// Refactored export for compatibility
export const r = setupPluginCommandHandler
