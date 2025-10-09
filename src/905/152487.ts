import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { jsx } from 'react/jsx-runtime'
import { RCSMessageType } from '../905/135526'
import { setupThemeContext } from '../905/614223'
import { CuratorPortal } from '../905/717951'
import { EventShield } from '../905/821217'
import { postUserFlag } from '../905/985254'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { useAtomWithSubscription } from '../figma_app/27355'
import { openFileKeyAtom, openFileTeamIdAtom } from '../figma_app/516028'
import { TrackingProvider } from '../figma_app/831799'

export interface OnboardingSequenceProps {
  isShowing: boolean
  testId?: string
  userFlagOnShow?: string
  dataFullscreenIntercept?: string
  forceEditorTheme?: string
  children?: React.ReactNode
}

/**
 * OnboardingSequence - Component that manages the display and tracking of onboarding sequences
 * (original function: $$g0)
 */
export function OnboardingSequence(props: OnboardingSequenceProps): JSX.Element | null {
  const {
    isShowing,
    testId,
    userFlagOnShow,
    dataFullscreenIntercept,
    forceEditorTheme,
    children,
  } = props

  const dispatch = useDispatch<AppDispatch>()
  const isFullscreenWithoutUI = useSelector(
    (state: any) => state?.selectedView?.view === 'fullscreen' && !state.mirror.appModel.showUi,
  )

  const fileKey = useAtomWithSubscription(openFileKeyAtom)
  const fileTeamId = useAtomWithSubscription(openFileTeamIdAtom)

  const trackingProperties = useMemo(() => {
    return fileKey
      ? {
          fileTeamId,
          fileKey,
        }
      : undefined
  }, [fileKey, fileTeamId])

  useEffect(() => {
    if (isShowing && userFlagOnShow) {
      dispatch(postUserFlag({
        [userFlagOnShow]: true,
      }))
    }
  }, [dispatch, userFlagOnShow, isShowing])

  if (!isShowing) {
    return null
  }

  return jsx(CuratorPortal, {
    dataFullscreenIntercept,
    children: jsx(TrackingProvider, {
      name: 'Onboarding Sequence',
      properties: trackingProperties,
      trackingTargets: RCSMessageType.NONE,
      ignoreParent: true,
      children: jsx(EventShield, {
        eventListeners: ['onClick'],
        children: jsx(setupThemeContext, {
          brand: forceEditorTheme,
          children: jsx('div', {
            'data-testid': testId,
            'className': cssBuilderInstance.if(isFullscreenWithoutUI, cssBuilderInstance.invisible).$,
            'children': children,
          }),
        }),
      }),
    }),
  })
}

export const M = OnboardingSequence
