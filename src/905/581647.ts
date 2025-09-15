import { BuyerAPIHandler } from '../905/180'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { setupLoadingStateHandler } from '../905/696711'
import { logError } from '../905/714362'
import { RK } from '../figma_app/815170'

export let $$c0 = createOptimistThunk((e, t, {
  loadingKey: i,
}) => {
  let s = BuyerAPIHandler.getBuyerPortal({
    returnUrl: window.location.href,
  })
  setupLoadingStateHandler(s, e, i)
  s.then(({
    data: i,
  }) => {
    e.dispatch(RK({
      rawInput: i.meta,
    }))
    t.onSuccess?.()
  }).catch((t) => {
    logError('community', 'Failed to get buyer portal', {
      reason: t,
    })
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.actions.an_error_occured_while_trying_to_purchase_please_contact_support'),
      error: !0,
    }))
  })
}, () => 'M10N_STRIPE_MANAGE_SUBSCRIPTION')
export const v = $$c0
