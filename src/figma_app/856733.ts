import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { bL } from '../905/38914'
import { N as _$$N } from '../905/73189'
import { ModalSupportsBackground, registerModal } from '../905/102752'
import { renderI18nText } from '../905/303541'
import { selectCurrentUser } from '../905/372672'
import { hS } from '../905/437088'
import { analyticsEventManager } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { useSingleEffect } from '../905/791079'
import { b as _$$b } from '../905/985254'
import { hE, jk, nB, vo, wi, Y9 } from '../figma_app/272243'
import { selectCurrentFile } from '../figma_app/516028'
import { $z } from '../figma_app/617427'

export function $$b1({
  onAgree: e,
  onDecline: t,
  onClose: r,
  eulasToShow: f,
  eulaShown: b,
  ...T
}) {
  let I = useDispatch()
  let S = selectCurrentUser()
  let v = selectCurrentFile()
  !(function () {
    let e = selectCurrentUser()
    let t = selectCurrentFile()
    useSingleEffect(() => {
      analyticsEventManager.trackDefinedEvent('preset_libraries.apple_eula_displayed', {
        userId: e?.id ?? void 0,
        fileTeamId: t?.teamId ?? void 0,
        fileParentOrgId: t?.parentOrgId ?? void 0,
        fileKey: t?.key,
        asyncModal: !1,
      })
    })
  }())
  let A = useCallback((e) => {
    analyticsEventManager.trackDefinedEvent('preset_libraries.apple_eula_clicked', {
      actionType: e,
      userId: S?.id ?? void 0,
      fileTeamId: v?.teamId ?? void 0,
      fileParentOrgId: v?.parentOrgId ?? void 0,
      fileKey: v?.key,
      asyncModal: !1,
    })
  }, [v, S])
  let x = useCallback(() => {
    A('x')
    t?.()
    r()
  }, [t, r, A])
  let N = hS({
    ...T,
    onClose: x,
    preventUserClose: !1,
  })
  let C = getFeatureFlags()
  return jsx(bL, {
    manager: N,
    width: 600,
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: C.dse_sf_pro_font ? renderI18nText('community.eula.component_license_agreement') : renderI18nText('community.eula.license_agreement_v2'),
        }),
      }), jsx(nB, {
        children: jsxs('div', {
          style: {
            maxHeight: '360px',
          },
          children: [C.dse_sf_pro_font
            ? jsx('div', {
                style: {
                  color: 'var(--color-text-secondary)',
                  padding: '8px 0px',
                },
                children: renderI18nText('community.eula.subtext.component_license_agreement'),
              })
            : jsx('div', {
                className: 'apple_eula_modals--preamble--POXQG',
                children: renderI18nText('community.eula.license_agreement_preamble'),
              }), jsx(_$$N, {})],
        }),
      }), jsxs(wi, {
        children: [void 0 !== f && void 0 !== b && f > 1 && jsx('div', {
          children: renderI18nText('community.eula.i_of_count', {
            i: b,
            count: f,
          }),
        }), jsxs(jk, {
          children: [jsx($z, {
            onClick: () => {
              A('decline')
              t?.()
              r()
            },
            variant: 'secondary',
            children: renderI18nText('community.eula.disagree'),
          }), jsx($z, {
            onClick: () => {
              A('accept')
              I(_$$b({
                apple_eula_accepted: !0,
              }))
              e()
              r()
            },
            variant: 'primary',
            children: renderI18nText('community.eula.agree'),
          })],
        })],
      })],
    }),
  })
}
export let $$$$T0 = registerModal($$b1, 'APPLE_EULA_MODAL_TYPE', ModalSupportsBackground.YES)
export const T = $$$$T0
export const x = $$b1
