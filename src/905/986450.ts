import type { Root } from 'react-dom/client'
import { addBreadcrumb } from '@sentry/browser'
import { createRoot } from 'react-dom/client'

/**
 * Refactored from original minified code in src/905/986450.ts.
 * - Renamed variables for clarity.
 * - Added TypeScript types and interfaces.
 * - Simplified logic and added comments.
 * - Noted assumed dependencies: @sentry/browser, react-dom/client.
 */

/**
 * Information about the document state for error reporting.
 */
interface DocumentState {
  bodyChildElements: string[]
  readyState: DocumentReadyState
}

/**
 * Breadcrumb data for Sentry error logging.
 */
interface BreadcrumbData {
  documentState: DocumentState
  nodeId: string
  url: string
}

/**
 * Attempts to create a React root at the given DOM node ID.
 * If the node is not found, logs a Sentry error and returns an Error object.
 * @param rootElementId - The ID of the root DOM node (default: 'react-page').
 * @returns React Root if found, otherwise Error.
 */
export function createReactRoot(rootElementId: string = 'react-page'): Root | Error {
  const rootElement = document.getElementById(rootElementId)
  if (!rootElement) {
    // Gather information about the document's body children for debugging
    const bodyChildElements: string[] = Array.from(document.body?.children ?? []).map((child) => {
      // Format: tagName#id.class1.class2
      const tagName = child.localName
      const idPart = child.id ? `#${child.id}` : ''
      const classPart = child.className
        ? `.${child.className.split(' ').filter(Boolean).join('.')}`
        : ''
      return `${tagName}${idPart}${classPart}`
    })

    // Log error to Sentry
    addBreadcrumb({
      category: 'react-root',
      message: 'Failed to find root node',
      data: {
        documentState: {
          bodyChildElements,
          readyState: document.readyState,
        },
        nodeId: rootElementId,
        url: window.location.href,
      } as BreadcrumbData,
      level: 'error',
    })

    // Return an Error object for caller handling
    return new Error(`Could not find root node with id ${rootElementId}`)
  }

  // Create and return the React root
  return createRoot(rootElement)
}

// Alias for backward compatibility with original code
export const Q = createReactRoot
