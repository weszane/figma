import type { JSX } from 'react'
import { memo } from 'react'
import { jsx } from 'react/jsx-runtime'
import { trackEventAnalytics } from '../905/449184'
import { useSingleEffect } from '../905/791079'
import { NONE_SYMBOL } from '../905/992467'

/**
 * Modal configuration object type.
 */
export interface ModalConfig {
  loading: () => null
  error: typeof NONE_SYMBOL[keyof typeof NONE_SYMBOL]
  componentName: string
}

/**
 * Modal registry entry type.
 */
export interface ModalRegistryEntry {
  render: (props: any) => JSX.Element
  isLegacy: boolean
  supportsBackgroundVisible: boolean
  preload?: (force?: boolean) => any
}

/**
 * Modal supports background enum.
 */
export enum ModalSupportsBackgroundEnum {
  NO = 0,
  YES = 1,
}

/**
 * Creates a modal configuration object.
 * @param componentName - The name of the modal component.
 * @returns ModalConfig
 * @see createModalConfig
 */
export function createModalConfig(componentName: string): ModalConfig {
  return {
    loading: () => null,
    error: NONE_SYMBOL.NONE,
    componentName,
  }
}

/**
 * Registry for modal components.
 * @see modalRegistry
 */
const modalRegistry = new Map<string, ModalRegistryEntry>()

/**
 * Modal supports background constant.
 * @see ModalSupportsBackground
 */
export const ModalSupportsBackground = ModalSupportsBackgroundEnum

/**
 * Registers a modal component.
 * @param Component - React component to render.
 * @param type - Modal type identifier.
 * @param supportsBackgroundVisible - Whether modal supports background visibility.
 * @returns Object with modal type.
 * @see registerModalComponent
 */
function registerModalComponent(
  Component: React.ComponentType<any>,
  type: string,
  supportsBackgroundVisible: ModalSupportsBackgroundEnum,
): { type: string } {
  if (!type) {
    throw new Error('registerModal called for a component without a valid type')
  }
  if (modalRegistry.has(type)) {
    throw new Error(`a modal with type ${type} has already been registered`)
  }
  modalRegistry.set(type, {
    render: (props: any) => jsx(Component, { ...props }),
    isLegacy: false,
    supportsBackgroundVisible: supportsBackgroundVisible === ModalSupportsBackground.YES,
    preload: (Component as any)?.preload,
  })
  return { type }
}

/**
 * Preloads a modal by type.
 * @param type - Modal type identifier.
 * @returns Result of preload function if available.
 * @see preloadModal
 */
export function preloadModal(type: string): any {
  const modal = modalRegistry.get(type)
  return modal?.preload?.(true)
}

let modalIdCounter = 0

/**
 * Registers a modal, supporting legacy and new modal types.
 * @param Component - React component to render.
 * @param typeOrOptions - Modal type string or options object.
 * @param supportsBackgroundVisible - Whether modal supports background visibility.
 * @returns Object with modal type.
 * @see registerModal
 */
export function registerModal(
  Component: React.ComponentType<any>,
  typeOrOptions?: string | { supportsBackgroundVisible?: ModalSupportsBackgroundEnum },
  supportsBackgroundVisible?: ModalSupportsBackgroundEnum,
): { type: string } {
  if (typeof typeOrOptions === 'string') {
    return registerModalComponent(
      memo((props) => {
        useSingleEffect(() => {
          trackEventAnalytics('modal_shown', { modal_id: typeOrOptions })
        })
        return jsx(Component, { ...props })
      }),
      typeOrOptions,
      supportsBackgroundVisible!,
    )
  }

  const modalId = `id:${Component.displayName || modalIdCounter++}`
  const MemoizedComponent = memo((props) => {
    useSingleEffect(() => {
      trackEventAnalytics('modal_shown', { modal_id: modalId })
    })
    return jsx(Component, {
      ...props,
      _modalId: { type: modalId },
    })
  });
  (MemoizedComponent as any).preload = (Component as any).preload
  return registerModalComponent(
    MemoizedComponent,
    modalId,
    typeOrOptions.supportsBackgroundVisible!,
  )
}

/**
 * Registers a legacy modal.
 * @param type - Modal type identifier.
 * @param renderFunction - Function to render the modal.
 * @returns Modal type.
 * @see registerLegacyModal
 */
export function registerLegacyModal(
  type: string,
  renderFunction: (props: any) => JSX.Element,
): string {
  const modalConfig: ModalRegistryEntry = {
    render: renderFunction,
    isLegacy: true,
    supportsBackgroundVisible: false,
    preload: (renderFunction as any).preload,
  }
  modalRegistry.set(type, modalConfig)
  return type
}

/**
 * Gets a modal registry entry by type.
 * @param type - Modal type identifier.
 * @returns ModalRegistryEntry or undefined.
 * @see getModal
 */
export function getModal(type: string): ModalRegistryEntry | undefined {
  return modalRegistry.get(type)
}

// Exported aliases for refactored functions and constants
export const Ij = createModalConfig
export const Ju = registerModal
export const ZU = ModalSupportsBackground
export const np = getModal
export const qK = registerLegacyModal
export const xv = preloadModal
