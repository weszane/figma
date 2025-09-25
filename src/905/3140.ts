import { jsx } from 'react/jsx-runtime'
import { getI18nString, renderI18nText } from '../905/303541'
import { CustomModalComponent } from '../905/684425'
import { A } from '../6041/578888'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { vd } from '../figma_app/60079'

/**
 * Renders a modal component for displaying a request error interstitial.
 * Original function name: $$d0
 * Original export name: K
 */
export function renderRequestErrorInterstitial() {
  return jsx(CustomModalComponent, {
    useOriginalSrcFills: true, // Original: !0
    imageClassName: 'request_error_interstitial--warningIcon--9ayvs',
    imageSrc: A,
    headerText: getI18nString('request_error_interstitial.there_was_an_error'),
    children: jsx(vd, {
      className: cssBuilderInstance.mt24.$,
      type: 'submit',
      onClick: () => {
        // eslint-disable-next-line no-self-assign
        window.location.href = window.location.href
      },
      children: renderI18nText('request_error_interstitial.refresh_and_try_again'),
    }),
  })
}

export const K = renderRequestErrorInterstitial
