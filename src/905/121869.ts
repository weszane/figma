import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { ModalRootComponent } from '../905/38914'
import { renderI18nText } from '../905/303541'
import { UpgradeAction } from '../905/370443'
import { h as _$$h } from '../905/388624'
import { U } from '../905/405962'
import { useModalManager } from '../905/437088'
import { Q } from '../905/467310'
import { AutoLayout } from '../905/470281'
import { e0 } from '../905/696396'
import { useCurrentUserOrg } from '../905/845253'
import { A as _$$A } from '../905/920142'
import { TextWithTruncation } from '../905/984674'
import { Xf } from '../figma_app/153916'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'
import { useCurrentPlanUser, useIsOrgAdminUser } from '../figma_app/465071'
import { ButtonLinkTracked, ButtonSecondaryLinkTracked } from '../figma_app/637027'
import { BillingStatusEnum } from '../figma_app/736948'
import { TrackingProvider } from '../figma_app/831799'
import { LoadingSpinner } from '../figma_app/858013'
import { useAtomValue } from '../vendor/525001'

export function $$x0(e) {
  let t = useCurrentPlanUser('OrgSuspensionModal')
  let i = useIsOrgAdminUser(t).unwrapOr(!1)
  let h = useCurrentUserOrg()
  let E = Xf(e.currentOrgId, i)
  let x = (E?.data?.invoices ?? []).find(e => e.status === 'open' && _$$A(e.past_due_at) < _$$A().subtract(21, 'day') && _$$A(e.past_due_at) > _$$A().subtract(90, 'day'))
  let T = useModalManager({
    open: !0,
    onClose: () => {},
    preventUserClose: !0,
  })
  let k = useAtomValue(U(e.currentOrgId))
  if (k.data?.status === Q.EXPIRED)
    return jsx(Fragment, {})
  if (E.status === 'loading') {
    return jsx(ModalRootComponent, {
      manager: T,
      width: 320,
      children: jsx(DialogContents, {
        children: jsx(AutoLayout, {
          direction: 'vertical',
          width: '100%',
          horizontalAlignItems: 'center',
          padding: 16,
          children: jsx(LoadingSpinner, {}),
        }),
      }),
    })
  }
  h?.standing === BillingStatusEnum.DEACTIVATED && (x = void 0)
  let R = []
  i && (R = x
    ? [jsx(ButtonSecondaryLinkTracked, {
        href: 'https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215',
        target: '_blank',
        trackingProperties: {
          trackingDescriptor: UpgradeAction.CONTACT_SUPPORT,
        },
        children: renderI18nText('payments_modal.contact_support'),
      }, 'contact_support'), jsx(ButtonLinkTracked, {
        href: x.invoice_url,
        target: '_blank',
        trackingProperties: {
          trackingDescriptor: UpgradeAction.PAY_INVOICE,
        },
        children: renderI18nText('payments_modal.pay_invoice'),
      }, 'pay_invoice')]
    : [jsx(ButtonLinkTracked, {
        href: 'https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215',
        target: '_blank',
        trackingProperties: {
          trackingDescriptor: UpgradeAction.CONTACT_SUPPORT,
        },
        children: renderI18nText('payments_modal.contact_support'),
      }, 'contact_support')])
  return jsx(TrackingProvider, {
    name: e0.ORG_SUSPENSION_MODAL,
    properties: {
      orgId: h?.id,
      isOrgAdmin: i,
    },
    children: jsx(ModalRootComponent, {
      manager: T,
      width: 320,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: jsx(S, {
              overdueInvoice: x,
            }),
          }),
        }), jsx(DialogBody, {
          children: jsx(AutoLayout, {
            direction: 'vertical',
            spacing: 16,
            width: '100%',
            children: i
              ? jsx(w, {
                  overdueInvoice: x,
                })
              : jsx(C, {}),
          }),
        }), R.length > 0
          ? jsx(DialogFooter, {
              children: jsx(DialogActionStrip, {
                children: R,
              }),
            })
          : null],
      }),
    }),
  })
}
function S(e) {
  let t = useCurrentPlanUser('OrgSuspensionModalHeader')
  return useIsOrgAdminUser(t).unwrapOr(!1) && e.overdueInvoice
    ? jsx(TextWithTruncation, {
        fontWeight: 'bold',
        fontSize: 11,
        children: renderI18nText('payments_modal.pay_overdue_invoice_to_regain_access'),
      })
    : jsx(TextWithTruncation, {
        fontWeight: 'bold',
        fontSize: 11,
        children: renderI18nText('payments_modal.you_no_longer_have_access_to_this_organization'),
      })
}
function w(e) {
  let t = useCurrentUserOrg()
  return e.overdueInvoice
    ? jsxs(Fragment, {
        children: [jsx(TextWithTruncation, {
          fontWeight: 'regular',
          fontSize: 11,
          children: renderI18nText('payments_modal.your_files_are_safe_but_youll_need_to_pay', {
            dueDate: _$$A(e.overdueInvoice.due_at).format('MMM D'),
            orgName: jsx(TextWithTruncation, {
              fontWeight: 'bold',
              fontSize: 11,
              children: t?.name,
            }),
          }),
        }), jsx(TextWithTruncation, {
          fontWeight: 'regular',
          fontSize: 11,
          children: renderI18nText('payments_modal.account_switcher_and_support_cta', {
            switchAccountLink: jsx(_$$h, {
              text: renderI18nText('payments_modal.switch_organization_or_account'),
            }),
          }),
        })],
      })
    : jsx(TextWithTruncation, {
        fontWeight: 'regular',
        fontSize: 11,
        children: renderI18nText('payments_modal.account_switcher_and_support_cta', {
          switchAccountLink: jsx(_$$h, {
            text: renderI18nText('payments_modal.switch_organization_or_account'),
          }),
        }),
      })
}
function C() {
  return jsxs(Fragment, {
    children: [jsx(TextWithTruncation, {
      fontWeight: 'regular',
      fontSize: 11,
      children: renderI18nText('payments_modal.please_reach_out_to_your_organization_admin_s_to_resolve_this_billing_issue'),
    }), jsx(TextWithTruncation, {
      fontWeight: 'regular',
      fontSize: 11,
      children: renderI18nText('payments_modal.account_switcher_cta', {
        switchAccountLink: jsx(_$$h, {
          text: renderI18nText('payments_modal.switch_organization_or_account'),
        }),
      }),
    })],
  })
}
export const n = $$x0
