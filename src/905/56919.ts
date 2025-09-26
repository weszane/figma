import { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { getObjectKeys } from '../905/36803'
import { focusTabElement, generateTabPanelId, generateTabTriggerId, getTruthyKeys } from '../905/336566'
import { positiveModulo } from '../905/875826'
import { preventAndStopEvent } from '../905/955878'


interface TabManager {
  activeTab: string
  tabs: string[]
  tabGroupId: string
  setActiveTab: (tabId: string, skipFocus?: boolean) => void
  orientation: 'horizontal' | 'vertical'
}

const TAB_NAVIGATION_MAP = {
  ArrowUp: (currentIndex: number, orientation: string) =>
    orientation === 'vertical' ? currentIndex - 1 : currentIndex,
  ArrowRight: (currentIndex: number, orientation: string) =>
    orientation === 'horizontal' ? currentIndex + 1 : currentIndex,
  ArrowDown: (currentIndex: number, orientation: string) =>
    orientation === 'vertical' ? currentIndex + 1 : currentIndex,
  ArrowLeft: (currentIndex: number, orientation: string) =>
    orientation === 'horizontal' ? currentIndex - 1 : currentIndex,
  Home: () => 0,
  End: () => -1,
}

/**
 * Hook for managing tab state with default active tab logic
 * Original name: $$d1
 */
export function useTabState(
  tabsConfig: Record<string, any>,
  options?: {
    defaultActive?: string | (() => string)
  },
) {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (typeof options?.defaultActive === 'function') {
      return options.defaultActive()
    }
    return options?.defaultActive ?? getTruthyKeys(tabsConfig)[0]
  })

  return useTabManager(tabsConfig, activeTab, setActiveTab, options)
}

/**
 * Core hook for tab management logic
 * Original name: $$c0
 */
export function useTabManager(
  tabsConfig: Record<string, any>,
  activeTab: string,
  setActiveTabState: (tabId: string) => void,
  options?: {
    orientation?: 'horizontal' | 'vertical'
    actionOnPointerDown?: boolean
    recordingKey?: string
    [key: string]: any
  },
) {
  const orientation = options?.orientation ?? 'horizontal'
  const tabGroupId = useId()
  const validTabs = useMemo(() => getTruthyKeys(tabsConfig), [tabsConfig])

  const setActiveTab = useCallback((tabId: string, skipFocus?: boolean) => {
    setActiveTabState(tabId)
    if (!skipFocus) {
      focusTabElement(tabGroupId, tabId)
    }
  }, [setActiveTabState, tabGroupId])

  const tabManager: TabManager = useMemo(() => ({
    activeTab,
    tabs: validTabs,
    tabGroupId,
    setActiveTab,
    orientation,
  }), [activeTab, validTabs, tabGroupId, setActiveTab, orientation])

  // Ensure active tab is valid
  useEffect(() => {
    if (!tabsConfig[activeTab]) {
      setActiveTab(validTabs[0])
    }
  }, [tabsConfig, activeTab, validTabs, setActiveTab])

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    // Ignore if not a navigation key or has modifier keys
    if (
      !TAB_NAVIGATION_MAP[event.key as keyof typeof TAB_NAVIGATION_MAP]
      || event.getModifierState('Alt')
      || event.getModifierState('Control')
      || event.getModifierState('CapsLock')
    ) {
      return
    }

    preventAndStopEvent(event as any)

    const currentIndex = validTabs.indexOf(activeTab)
    const nextIndex = TAB_NAVIGATION_MAP[event.key as keyof typeof TAB_NAVIGATION_MAP]?.(currentIndex, orientation) ?? currentIndex
    const tabCount = validTabs.length

    // For repeated events, prevent navigation if out of bounds
    if (event.repeat && (nextIndex > tabCount - 1 || nextIndex < 0)) {
      return
    }

    setActiveTab(validTabs[positiveModulo(nextIndex, tabCount)])
  }, [activeTab, validTabs, orientation, setActiveTab])

  const tabTriggers = useMemo(() =>
    getObjectKeys(tabsConfig).reduce((acc, tabId) => {
      acc[tabId] = {
        id: tabId,
        display: tabsConfig[tabId],
        manager: tabManager,
        triggerId: generateTabTriggerId(tabGroupId, tabId),
        panelId: generateTabPanelId(tabGroupId, tabId),
        onKeyDown: handleKeyDown,
        actionOnPointerDown: options?.actionOnPointerDown ?? true,
        recordingKey: options?.recordingKey ? `${options.recordingKey}.${tabId}` : undefined,
      }
      return acc
    }, {} as Record<string, any>), [tabManager, tabGroupId, handleKeyDown, tabsConfig, options?.actionOnPointerDown, options?.recordingKey])

  const tabPanels = useMemo(() =>
    getObjectKeys(tabsConfig).reduce((acc, tabId) => {
      acc[tabId] = {
        id: tabId,
        display: tabsConfig[tabId],
        manager: tabManager,
        triggerId: generateTabTriggerId(tabGroupId, tabId),
        panelId: generateTabPanelId(tabGroupId, tabId),
      }
      return acc
    }, {} as Record<string, any>), [tabGroupId, tabsConfig, tabManager])

  return [tabTriggers, tabPanels, tabManager] as const
}

export const H = useTabManager
export const u = useTabState
