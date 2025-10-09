// Refactored to improve readability, add type safety, simplify logic, and follow TypeScript best practices.
// Original code name preserved in comments where applicable.

import { useEffect, useState } from "react"
import { D } from "../905/33172"
import { getFeatureFlags } from "../905/601108"
import { atom, useAtomWithSubscription } from "../figma_app/27355"
import { getInitialOptions } from "../figma_app/169182"

// Type definitions for better type safety
type MessageEventTypes = "IFRAME_READY" | "EVAL" | "EVAL_RESPONSE"
interface IframeMessageEvent extends MessageEvent {
  data: {
    type: MessageEventTypes
    data?: any
  }
}

// Atom for controlling debug mode
export const debugModeAtom = atom<boolean>(false)

/**
 * Creates a sandboxed iframe for evaluating JavaScript securely.
 * @param jsCode - The JavaScript code to evaluate.
 * @param enableLogging - Whether to log the code being evaluated.
 * @returns The created iframe element or undefined if feature flag is disabled.
 */
function createSandboxedIframe(jsCode: string, enableLogging: boolean = false): HTMLIFrameElement | undefined {
  const featureFlags = getFeatureFlags()
  if (!featureFlags.dt_code_connect_js_iframe || !jsCode) {
    return undefined
  }

  // Log the code if debugging is enabled
  if (enableLogging) {
    console.log("Code Connect Debug: iframe JS to be evaluated:", {
      js: jsCode,
    })
  }

  // Create and configure the iframe
  const iframe = document.createElement("iframe")
  iframe.style.cssText = "display: none"
  iframe.setAttribute("sandbox", "allow-scripts")

  // Set the iframe content using a helper function D
  iframe.srcdoc = D(
    getInitialOptions().csp_nonce,
    window.location.origin,
    !featureFlags.dt_code_connect_without_eval,
  )

  document.body.appendChild(iframe)
  return iframe
}

/**
 * Handles messages from the iframe and processes EVAL/EVAL_RESPONSE events.
 * @param event - The message event from the iframe.
 * @param iframe - The iframe element.
 * @param jsCode - The JavaScript code being evaluated.
 * @param onResponse - Callback when evaluation response is received.
 */
function handleIframeMessage(
  event: IframeMessageEvent,
  iframe: HTMLIFrameElement,
  jsCode: string,
  onResponse: (data: any) => void,
): void {
  // Validate message source and origin
  if (
    iframe
    && event.origin === "null"
    && event.source === iframe.contentWindow
  ) {
    switch (event.data.type) {
      case "IFRAME_READY":
        // Send the code to evaluate when iframe is ready
        iframe.contentWindow?.postMessage(
          {
            type: "EVAL",
            data: jsCode,
          },
          "*",
        )
        break

      case "EVAL_RESPONSE":
        // Clean up and handle the response
        try {
          document.body.removeChild(iframe)
        }
        catch  {
          // Silently ignore removal errors
        }
        onResponse(event.data.data)
        break
    }
  }
}

/**
 * Evaluates JavaScript code in a sandboxed iframe and returns a Promise with the result.
 * @param jsCode - The JavaScript code to evaluate.
 * @param enableDebugLogging - Whether to log debug information.
 * @returns A Promise resolving with the evaluation result.
 */
export function evaluateJsInIframe(jsCode: string, enableDebugLogging: boolean = false): Promise<any> {
  const iframe = createSandboxedIframe(jsCode, enableDebugLogging)

  return new Promise((resolve) => {
    // Handle messages from the iframe
    function handleMessage(event: IframeMessageEvent) {
      handleIframeMessage(event, iframe!, jsCode, (responseData) => {
        window.removeEventListener("message", handleMessage)
        resolve(responseData)
      })
    }

    window.addEventListener("message", handleMessage, false)
  })
}

/**
 * React hook for evaluating JavaScript code in a sandboxed iframe.
 * @param jsCode - The JavaScript code to evaluate.
 * @returns The evaluation result or undefined.
 */
export function useIframeJsEvaluator(jsCode: string): any {
  const [result, setResult] = useState<any>(undefined)
  const isDebugEnabled = useAtomWithSubscription(debugModeAtom)

  useEffect(() => {
    // Create the iframe for evaluation
    const iframe = createSandboxedIframe(jsCode, isDebugEnabled)

    // Handle case where iframe creation failed
    if (!iframe) {
      setResult(undefined)
      return
    }

    // Handle messages from the iframe
    function handleMessage(event: IframeMessageEvent) {
      handleIframeMessage(event, iframe, jsCode, (responseData) => {
        window.removeEventListener("message", handleMessage)
        setResult(responseData)
      })
    }

    window.addEventListener("message", handleMessage, false)

    // Cleanup function to remove iframe and event listener
    return () => {
      try {
        document.body.removeChild(iframe)
      }
      catch  {
        // Silently ignore removal errors
      }
      window.removeEventListener("message", handleMessage)
    }
  }, [jsCode, isDebugEnabled])

  return result
}

// Export aliases maintaining original names
export const Nv = evaluateJsInIframe
export const Oq = debugModeAtom
export const yT = useIframeJsEvaluator
