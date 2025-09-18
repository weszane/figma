import { xk } from '@stylexjs/stylex';
import { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { ModalRootComponent } from '../905/38914';
import { Ln } from '../905/84777';
import { registerModal } from '../905/102752';
import { KindEnum } from '../905/129884';
import { showModalHandler } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { V as _$$V } from '../905/223084';
import { B as _$$B } from '../905/261906';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { collaboratorSet } from '../905/332483';
import { UpgradeAction } from '../905/370443';
import { useModalManager } from '../905/437088';
import { N as _$$N } from '../905/438674';
import { trackEventAnalytics } from '../905/449184';
import { l as _$$l } from '../905/479687';
import { ProductAccessTypeEnum } from '../905/513035';
import { Button } from '../905/521428';
import { VisualBellIcon } from '../905/576487';
import { getResourceDataOrFallback } from '../905/663269';
import { g as _$$g } from '../905/687265';
import { e0 } from '../905/696396';
import { IX } from '../905/712921';
import { H4, tH } from '../905/751457';
import { N as _$$N2 } from '../905/809096';
import { AutoLayout } from '../905/470281';
import { sx as _$$sx } from '../905/941192';
import { s as _$$s } from '../cssbuilder/589278';
import { isNullish, isNotNullish } from '../figma_app/95419';
import { i as _$$i } from '../figma_app/127401';
import { FPlanNameType, FOrganizationLevelType } from '../figma_app/191312';
import { c$, Ve, wv } from '../figma_app/236327';
import { b as _$$b } from '../figma_app/246400';
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter } from '../figma_app/272243';
import { useTeamPlanFeatures } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { _ as _$$_, S as _$$S } from '../figma_app/490799';
import { CurrencyFormatter } from '../figma_app/514043';
import { i6 } from '../figma_app/543529';
import { handleSuspenseRetainRelease } from '../figma_app/566371';
import { CM, kj, NU, SI } from '../figma_app/599327';
import { d as _$$d } from '../figma_app/603561';
import { $z } from '../figma_app/617427';
import { isProrationBillingEnabledForCurrentPlan } from '../figma_app/618031';
import { Ro } from '../figma_app/805373';
import { zRx } from '../figma_app/822011';
import { TrackingProvider } from '../figma_app/831799';
import { useDispatch } from 'react-redux';
FPlanNameType.STUDENT;
FPlanNameType.STARTER;
let M = collaboratorSet.dict(() => '-');
function ee({
  billableProductKey: e,
  upgradeApprovalSetting: t,
  isSelected: a,
  setUpgradeApprovalSetting: n,
  isLastOption: r,
  isELA: i,
  isProrationBillingEnabled: l,
  isProvisionalAccessEnabled: o
}) {
  let d = SI(t);
  let c = kj(t, i, l, o);
  let u = NU(t, i);
  return jsxs(Fragment, {
    children: [jsx('div', {
      'data-testid': 'upgrade-approval-settings-dropdown-option',
      'data-tooltip': u,
      'data-tooltip-hide-immediately': !0,
      'data-tooltip-max-width': '200px',
      'data-tooltip-show-immediately': !0,
      'data-tooltip-show-left': !0,
      'data-tooltip-text-left': !0,
      'data-tooltip-type': KindEnum.TEXT,
      'children': jsx(c$, {
        id: `${e}_${t}`,
        onClick: () => n(e, t),
        disabled: !!u,
        children: jsxs(AutoLayout, {
          direction: 'horizontal',
          horizontalAlignItems: 'start',
          verticalAlignItems: 'center',
          padding: {
            top: 8,
            bottom: 8,
            left: 0,
            right: 4
          },
          children: [jsx(_$$l, {
            style: _$$sx.add({
              '--color-icon': 'var(--color-icon-onbrand)'
            }).$$if(a, _$$sx.visible, _$$sx.invisible).$
          }), jsxs(AutoLayout, {
            direction: 'vertical',
            spacing: 0,
            children: [jsx('div', {
              className: _$$s.textBodyMedium.$,
              children: d
            }), jsx('div', {
              className: _$$s.textBodyMedium.preWrap.$$if(!u, _$$s.colorTextMenuSecondary).$,
              children: c
            })]
          })]
        })
      }, `${e}_${t}`)
    }), !r && jsx(wv, {})]
  });
}
let et = [zRx.MANUAL_APPROVAL, zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS, zRx.INSTANT_APPROVAL];
function ea({
  priceString: e,
  billableProductKey: t,
  selectedUpgradeApprovalSetting: a,
  setUpgradeApprovalSetting: r,
  isELA: i,
  shouldHidePrice: l,
  isProrationBillingEnabled: o,
  isProvisionalAccessEnabled: d
}) {
  let c = CM(t);
  let u = useMemo(() => et.map((e, n, l) => jsx(ee, {
    billableProductKey: t,
    upgradeApprovalSetting: e,
    isSelected: a === e,
    setUpgradeApprovalSetting: r,
    isLastOption: n === l.length - 1,
    isELA: i,
    isProrationBillingEnabled: o,
    isProvisionalAccessEnabled: d
  }, `${t}_${e}`)), [t, i, a, r, o, d]);
  return jsxs(AutoLayout, {
    direction: 'vertical',
    spacing: 8,
    dataTestId: `auto-approval-settings-selector-${t}`,
    children: [jsx(AutoLayout, {
      direction: 'horizontal',
      horizontalAlignItems: 'space-between',
      verticalAlignItems: 'start',
      children: jsxs(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'space-between',
        children: [jsxs(AutoLayout, {
          direction: 'horizontal',
          children: [jsx(_$$B, {
            type: t,
            size: '24'
          }), jsx('div', {
            className: _$$s.textBodyMediumStrong.$,
            children: c
          })]
        }), jsx(es, {
          shouldHidePrice: l,
          priceString: e,
          seatType: t
        })]
      })
    }), jsx(Ve, {
      label: SI(a),
      options: u,
      className: _$$s.wFull.radiusMedium.$,
      dropdownOptionsClassName: _$$s.wFull.$
    })]
  });
}
function es({
  shouldHidePrice: e,
  seatType: t,
  priceString: a
}) {
  let n = jsx('div', {
    'data-testid': `${t}-price`,
    'style': _$$sx.noWrap.colorTextSecondary.$,
    'children': e ? renderI18nText('general.whats_included') : renderI18nText('general.price_per_month', {
      priceString: a
    })
  });
  return jsx(_$$b, {
    type: 'listbox',
    text: n,
    popoverContent: jsx('div', {
      style: _$$sx.flex.flexColumn.gap8.$,
      children: jsx(_$$i, {
        seatType: t,
        spacing: 8,
        forceDarkThemeForFigmakeIcon: !0
      })
    })
  });
}
let en = zRx.INSTANT_APPROVAL_IF_AVAILABLE_SEATS;
function er(e) {
  let t = useDispatch();
  let {
    currency,
    renewalTerm
  } = e;
  let p = useModalManager(e);
  let g = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let x = isProrationBillingEnabledForCurrentPlan();
  let b = useTeamPlanFeatures();
  let [y] = handleSuspenseRetainRelease(b);
  let A = !!y.data?.campfireProvisionalAccessEnabled;
  let V = i6();
  let W = V.data;
  if (useEffect(() => {
    V.status === 'errors' && console.error('orgManagesSeatsViaScimQueryResult error', V.errors);
  }, [V]), y.status !== 'loaded') {
    let e = new Error(y.status === 'disabled' ? 'Plan fetching disabled' : 'Error fetching plan');
    reportError(_$$e.MONETIZATION_EXPANSION, e);
    return e;
  }
  let z = y.data;
  if (!z) {
    let e = new Error('No Plan found');
    reportError(_$$e.MONETIZATION_EXPANSION, e);
    return e;
  }
  let {
    billableProductKeyContractPrices,
    status
  } = function (e, t, a) {
    let s = Ln(e.key, collaboratorSet, {
      renewalTerm: a,
      unit: IX.MONTH
    });
    let [n] = handleSuspenseRetainRelease(s);
    let r = isProrationBillingEnabledForCurrentPlan();
    let i = n.status === 'disabled' ? new Error('Missing contract rate args.') : n.status === 'errors' ? new Error('Error while fetching pricing.') : void 0;
    if (i && reportError(_$$e.MONETIZATION_EXPANSION, i), i || !t) {
      return {
        billableProductKeyContractPrices: M,
        status: n.status
      };
    }
    let {
      data
    } = n;
    if (data === null || !r) {
      return {
        billableProductKeyContractPrices: M,
        status: n.status
      };
    }
    let c = new CurrencyFormatter(t);
    return {
      billableProductKeyContractPrices: collaboratorSet.dict(e => {
        if (!isNullish(data[e])) {
          return c.formatMoney(data[e].amount, {
            showCents: !1
          });
        }
      }),
      status: n.status
    };
  }(z, currency, renewalTerm);
  let [Y, K] = useState(collaboratorSet.dict(e => {
    switch (e) {
      case ProductAccessTypeEnum.EXPERT:
        return z.upgradeApprovalSettingsExpert ?? en;
      case ProductAccessTypeEnum.DEVELOPER:
        return z.upgradeApprovalSettingsDeveloper ?? en;
      case ProductAccessTypeEnum.COLLABORATOR:
        return z.upgradeApprovalSettingsCollaborator ?? en;
      case ProductAccessTypeEnum.CONTENT:
        let t = getResourceDataOrFallback(z.upgradeApprovalSettingsContent);
        if (isNotNullish(t)) return t;
        return en;
      default:
        throwTypeError(e);
    }
  }));
  let X = useCallback(async () => {
    if (!z.key.type || !z.key.parentId) throw new Error('Missing plan key type or parentId.');
    await _$$V.updateUpgradeApprovalSettings(z.key.type, z.key.parentId, Y);
    p.props?.close({
      source: 'button'
    });
    t(VisualBellActions.enqueue({
      message: getI18nString('plan_settings.auto_approval_settings.approval_settings_applied'),
      icon: VisualBellIcon.CHECK_WITH_CIRCLE
    }));
  }, [Y, t, p.props, z.key.parentId, z.key.type]);
  let J = useCallback((e, t) => {
    K(a => ({
      ...a,
      [e]: t
    }));
  }, []);
  let Z = g || !currency || status === 'errors' || !x;
  return jsx(TrackingProvider, {
    name: e0.AUTO_APPROVAL_SETTINGS_MODAL,
    properties: {
      planType: z.key.type,
      orgId: z.key.type === FOrganizationLevelType.ORG ? z.key.parentId : void 0,
      teamId: z.key.type === FOrganizationLevelType.TEAM ? z.key.parentId : void 0
    },
    children: jsx(ModalRootComponent, {
      manager: p,
      width: 480,
      children: jsxs(DialogContents, {
        allowOverflow: !0,
        children: [jsx(DialogBody, {
          children: jsxs('div', {
            'className': _$$s.pt32.pb8.px8.flex.flexColumn.$,
            'data-testid': 'auto-approval-settings-modal-header',
            'children': [jsx(Ro, {
              entity: {
                ...z,
                id: z?.id ?? void 0
              },
              shape: 'CIRCLE',
              size: 48,
              className: _$$s.mb16.$
            }), jsx('div', {
              className: _$$s.textHeadingMedium.mb8.$,
              children: e.isCurfEnabledForMembers ? renderI18nText('plan_settings.auto_approval_settings.title.curf_enabled_for_members') : renderI18nText('plan_settings.auto_approval_settings.title')
            }), jsxs('span', {
              children: [jsx('span', {
                className: _$$s.textBodyMedium.colorTextSecondary.preWrap.$,
                children: g ? e.isCurfEnabledForMembers ? renderI18nText('plan_settings.auto_approval_settings_subtitle_ela_and_curf_enabled_for_members') : renderI18nText('plan_settings.auto_approval_settings_subtitle_ela') : e.isCurfEnabledForMembers ? renderI18nText('plan_settings.auto_approval_settings.subtitle_curf_members') : renderI18nText('plan_settings.auto_approval_settings.subtitle')
              }), jsx(_$$N, {
                href: 'https://help.figma.com/hc/articles/4414038570007',
                newTab: !0,
                children: renderI18nText('plan_settings.auto_approval_settings.learn_about_seat_management_options')
              })]
            }), jsxs('div', {
              className: _$$s.mt24.flex.flexColumn.gap24.mb8.$,
              children: [Object.keys(Y).map(e => {
                let t = billableProductKeyContractPrices[e];
                if (isNullish(t)) return null;
                let a = Y[e];
                return isNullish(a) ? null : jsx(ea, {
                  billableProductKey: e,
                  isELA: g,
                  isProrationBillingEnabled: x,
                  isProvisionalAccessEnabled: A,
                  planName: z.name,
                  priceString: t,
                  selectedUpgradeApprovalSetting: a,
                  setUpgradeApprovalSetting: J,
                  shouldHidePrice: Z
                }, e);
              }), !!e.isCurfEnabledForMembers && jsx(eo, {}), W && !e.isCurfEnabledForMembers && jsx(el, {}), jsx(ei, {
                failedToLoadPrices: status === 'errors'
              })]
            })]
          })
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx($z, {
              variant: 'secondary',
              onClick: () => p.props?.close({
                source: 'button'
              }),
              trackingProperties: {
                trackingDescriptor: UpgradeAction.CANCEL
              },
              children: renderI18nText('plan_settings.auto_approval_settings.cancel')
            }), jsx($z, {
              variant: 'primary',
              onClick: X,
              trackingProperties: {
                trackingDescriptor: z.key.type ? z.key.type === FOrganizationLevelType.ORG ? UpgradeAction.SAVE_FOR_ORGANIZATION : UpgradeAction.SAVE_FOR_TEAM : UpgradeAction.SAVE
              },
              children: z.key.type ? z.key.type === FOrganizationLevelType.ORG ? renderI18nText('plan_settings.auto_approval_settings.save_for_plan.organization') : renderI18nText('plan_settings.auto_approval_settings.save_for_plan.team') : renderI18nText('plan_settings.auto_approval_settings.save_for_plan.no_plan')
            })]
          })
        })]
      })
    })
  });
}
function ei({
  failedToLoadPrices: e
}) {
  return (useEffect(() => {
    e && trackEventAnalytics('seat_purchasing.non_blocking_fetch_error', {
      price_fetch_error: e,
      view: 'seat_approval_settings_modal'
    }, {
      forwardToDatadog: !0
    });
  }, [e]), e) ? jsx(_$$_, {
    dataTestId: 'pricing-error-badge',
    color: _$$S.WARNING,
    padding: 8,
    text: renderI18nText('plan_settings.auto_approval_settings.pricing_error')
  }) : null;
}
function el() {
  return jsx(TrackingProvider, {
    name: e0.SCIM_INFO_BADGE,
    children: jsx(_$$_, {
      dataTestId: 'scim-info-badge',
      color: _$$S.INFORMATION,
      padding: 8,
      text: jsxs(AutoLayout, {
        direction: 'vertical',
        spacing: 4,
        children: [jsx('p', {
          ...xk(_$$g.textBodyMediumStrong),
          children: renderI18nText('plan_settings.auto_approval_settings.scim_badge.title')
        }), jsx('p', {
          children: renderI18nText('plan_settings.auto_approval_settings.scim_badge.subtitle')
        })]
      })
    })
  });
}
function eo() {
  return jsx(TrackingProvider, {
    name: e0.CURF_MEMBER_INFO_BADGE,
    children: jsx(_$$_, {
      dataTestId: 'curf-member-only-info-badge',
      color: _$$S.INFORMATION,
      padding: 8,
      text: jsxs(AutoLayout, {
        direction: 'vertical',
        spacing: 4,
        children: [jsx('p', {
          className: _$$s.textBodyMediumStrong.$,
          children: renderI18nText('plan_settings.auto_approval_settings.curf_badge.title')
        }), jsxs('p', {
          children: [' ', renderI18nText('plan_settings.auto_approval_settings.curf_badge.subtitle')]
        })]
      })
    })
  });
}
let ed = registerModal(e => {
  return jsx(tH, {
    boundaryKey: 'AutoApprovalSettingsModal',
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    children: jsx(Suspense, {
      fallback: jsx(_$$N2, {
        hiddenTitle: 'Auto Approval Settings',
        estimatedWidth: 480,
        estimatedHeight: 577
      }),
      children: jsx(er, {
        ...e
      })
    })
  });
});
let eu = registerModal(e => {
  let t = useTeamPlanFeatures().unwrapOr(null);
  let a = useModalManager(e);
  return jsx(TrackingProvider, {
    name: 'Auto Approval Settings Modal (CURF All Users)',
    children: jsx(ModalRootComponent, {
      manager: a,
      width: 480,
      children: jsxs(DialogContents, {
        children: [jsx(DialogBody, {
          children: jsxs('div', {
            'className': _$$s.pt32.px8.pb8.flex.flexColumn.$,
            'data-testid': 'auto-approval-settings-modal-header',
            'children': [jsx(Ro, {
              entity: {
                ...t,
                id: t?.id ?? void 0
              },
              shape: 'CIRCLE',
              size: 48,
              className: _$$s.mb16.$
            }), jsx('div', {
              className: _$$s.textHeadingMedium.mb8.$,
              children: renderI18nText('plan_settings.curf_auto_approval_settings_modal.title')
            }), jsx('span', {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: renderI18nText('plan_settings.curf_auto_approval_settings_modal.description')
            })]
          })
        }), jsx(DialogFooter, {
          children: jsx(DialogActionStrip, {
            children: jsx(Button, {
              variant: 'primary',
              onClick: () => a.props?.close({
                source: 'button'
              }),
              children: renderI18nText('plan_settings.curf_auto_approval_settings_modal.got_it')
            })
          })
        })]
      })
    })
  });
}, 'CurfAllUsersAutoApprovalSettingsModal');
export function $$e_0({
  dispatch: e,
  currency: t,
  renewalTerm: a,
  isCurfEnabledForMembers: s
}) {
  return () => {
    e(showModalHandler({
      type: ed,
      data: {
        currency: t,
        renewalTerm: a,
        isCurfEnabledForMembers: s
      }
    }));
  };
}
export function $$ep1({
  dispatch: e
}) {
  return () => {
    e(showModalHandler({
      type: eu,
      data: {}
    }));
  };
}
export const S = $$e_0;
export const d = $$ep1;