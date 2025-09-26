import { useDispatch } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { useMemoShallow } from '../905/19536'
import { OnboardingSequence } from '../905/152487'
import { getI18nString } from '../905/303541'
import { RcsFrame } from '../905/559280'
import { OverlayType } from '../figma_app/450829'

// Original: $$c0
/**
 * Renders an onboarding modal component with sequence and RCS frame.
 * @param props - The component props.
 */
interface OnboardingModalProps {
  isShowing: boolean
  onClickPrimaryCta: () => void
  onClose: () => void
  onManualDismiss: () => void
  testId?: string
  additionalOnExplicitDismiss?: () => void
  userFlagOnShow?: any
  [key: string]: any // For additional props passed to step processing
}

interface StepProps {
  modalType?: OverlayType
  currentStepIndex?: number
  totalNumSteps?: number
  ctaText?: string
  [key: string]: any
}

/**
 * Processes the step props based on modal type.
 * Original: anonymous function in useMemoShallow
 * @param step - The raw step props.
 * @returns The processed step props.
 */
function processStep(step: StepProps): StepProps {
  if (step.modalType === OverlayType.DRAGGABLE) {
    const { currentStepIndex, totalNumSteps } = step
    const isLastStep = currentStepIndex === totalNumSteps - 1
    return {
      ...step,
      ctaText: step.ctaText || (isLastStep ? getI18nString('rcs.rcs_shared.done') : getI18nString('rcs.rcs_shared.next')),
      stepCounter: step.totalNumSteps > 1
        ? getI18nString('rcs.rcs_shared.step_counter', {
          currentStepNum: currentStepIndex + 1,
          totalNumSteps,
        })
        : undefined,
    }
  }
  return step
}

export const OnboardingRenderFrame: React.FC<OnboardingModalProps> = ({
  isShowing,
  onClickPrimaryCta,
  onClose,
  onManualDismiss,
  testId,
  additionalOnExplicitDismiss,
  userFlagOnShow,
  ...otherProps
}) => {
  const processedStep = useMemoShallow(() => processStep(otherProps), [otherProps])
  const dispatch = useDispatch()
  return jsx(OnboardingSequence, {
    userFlagOnShow,
    isShowing,
    testId,
    children: jsx(RcsFrame, {
      step: processedStep,
      onClickPrimaryCta,
      onClose,
      dismissModal: onManualDismiss,
      dispatch,
      additionalOnExplicitDismiss,
    }),
  })
}

export const h = OnboardingRenderFrame
