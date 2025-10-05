import { Suspense, useRef, useState } from "react"
import { Fragment, jsx } from "react/jsx-runtime"
import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { getFeatureFlags } from "../905/601108"
import { getErrorStackHistory } from "../905/607410"
import { useSingleEffect } from "../905/791079"
import { isInteractionOrEvalMode } from "../figma_app/897289"

interface SuspenseWithGuardrailProps {
  children: React.ReactNode
  fallback: React.ReactNode
  source: string
}

interface WrapperComponentProps {
  onMount: () => void
  children?: React.ReactNode
  fallback?: React.ReactNode
}

/**
 * Wrapper component that triggers onMount callback when mounted
 * (Original name: u)
 */
function MountTriggerWrapper({ onMount, fallback }: WrapperComponentProps): React.ReactNode {
  useSingleEffect(() => {
    onMount()
  })
  return fallback
}

/**
 * Fragment wrapper component that triggers onMount callback when mounted
 * (Original name: p)
 */
function MountTriggerFragment({ onMount, children }: WrapperComponentProps): React.ReactElement {
  useSingleEffect(() => {
    onMount()
  })
  return jsx(Fragment, {
    children,
  })
}

/**
 * Suspense component with guardrail functionality to detect and report
 * excessive fallback rendering which may indicate UI thrashing
 * (Original name: $$m0)
 */
export function SuspenseWithGuardrail({
  children,
  fallback,
  source,
}: SuspenseWithGuardrailProps): React.ReactElement {
  const [hasRenderedFallback, setHasRenderedFallback] = useState<boolean>(false)
  const hasReportedError = useRef<boolean>(false)

  const shouldSkipSuspense = hasRenderedFallback && getFeatureFlags().suspense_catchall_aggressive

  if (shouldSkipSuspense) {
    return jsx(Fragment, {
      children,
    })
  }

  return jsx(Suspense, {
    fallback: jsx(MountTriggerWrapper, {
      fallback,
      onMount: () => {
        // Skip if in interaction/eval mode or fallback hasn't rendered yet
        if (isInteractionOrEvalMode() || !hasRenderedFallback) {
          return
        }

        console.warn("[SuspenseWithGuardrail] Suspense fallback rendered more than once. This likely means the UI is undergoing severe visual thrash. The following stack-traces are from the most-recently thrown promises:")

        const errorStackHistory = getErrorStackHistory()

        if (errorStackHistory.length > 0) {
          console.warn("[SuspenseWithGuardrail] Recently tracked breadcrumbs:")
          for (const stack of errorStackHistory) {
            console.warn(stack)
          }
        }
        else {
          console.warn("No breadcrumbs? This means some callsite isn't yet using `throwTrackedPromise` or `trackSuspenseBreadcrumb`.")
        }

        // Report error only once
        if (!hasReportedError.current) {
          const errorMessage = errorStackHistory.length > 0
            ? `Suspense fallback (${source}) rendered more than once. The following breadcrumbs are from the most-recently thrown promises:
==============================================
${errorStackHistory.join("\n")}\n==============================================\n`
            : `Suspense fallback (${source}) rendered more than once -- no recent breadcrumbs were found?`

          const error = new Error(errorMessage)
          reportError(ServiceCategories.FRONTEND_PLATFORM, error)
          hasReportedError.current = true
        }
      },
    }),
    children: jsx(MountTriggerFragment, {
      onMount: () => {
        setHasRenderedFallback(true)
      },
      children,
    }),
  })
}

export const g = SuspenseWithGuardrail
