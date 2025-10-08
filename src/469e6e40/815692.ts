import { stylex, props } from '@stylexjs/stylex';
import Y from 'classnames';
import { createElement, Suspense, useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { r as _$$r2 } from '../469e6e40/51498';
import { g as _$$g } from '../469e6e40/136803';
import { l as _$$l } from '../469e6e40/229084';
import { a as _$$a, h as _$$h } from '../469e6e40/313497';
import { Ke, Kz, T_, x8 } from '../469e6e40/336248';
import { gn, jp } from '../469e6e40/370592';
import { qr as _$$qr, tp as _$$tp, Ds, Fm, jE, jT, Rm, Tg, wz, Yy } from '../469e6e40/442006';
import { eZ as _$$eZ, t2 as _$$t4, Cf, fJ, kJ, Ym, ZA, Zm, zz } from '../469e6e40/485925';
import { E as _$$E2 } from '../469e6e40/510393';
import { u as _$$u } from '../469e6e40/510414';
import { pG } from '../469e6e40/556776';
import { M as _$$M2 } from '../469e6e40/601528';
import { nf as _$$nf, Be, bv, CB, i0, jP, PC, xd, Xu, yV } from '../469e6e40/615314';
import { p as _$$p } from '../469e6e40/619494';
import { S as _$$S2, V as _$$V } from '../469e6e40/678381';
import { S as _$$S } from '../469e6e40/679996';
import { h as _$$h2 } from '../469e6e40/689859';
import { l as _$$l2 } from '../469e6e40/774192';
import { CW } from '../469e6e40/800566';
import { P as _$$P2 } from '../469e6e40/816817';
import r from '../469e6e40/850004';
import { q as _$$q2 } from '../469e6e40/977739';
import { s as _$$s6 } from '../469e6e40/993242';
import { consumptionPaywallUtils } from '../905/224';
import { renderRequestErrorInterstitial } from '../905/3140';
import { CloseButton } from '../905/17223';
import { ModalRootComponent } from '../905/38914';
import { BillingPriceSource, setupCurrentContractRatesTransform, getContractCurrency } from '../905/84777';
import { registerModal } from '../905/102752';
import { t as _$$t3 } from '../905/117577';
import { KindEnum } from '../905/129884';
import { M as _$$M } from '../905/130634';
import { ScrollContainer } from '../905/143421';
import { Ey, To } from '../905/148137';
import { showModalHandler, hideModal, popModalStack } from '../905/156213';
import { InputComponent } from '../905/185998';
import { resolveMessage } from '../905/231762';
import { Label } from '../905/270045';
import { Checkbox } from '../905/274480';
import { z as _$$z2 } from '../905/284530';
import { orgSubscriptionAtom } from '../905/296690';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R } from '../905/304671';
import { RadioGroup, RadioOption } from '../905/306088';
import { RadioInputRoot, RadioInputOption } from '../905/308099';
import { v as _$$v2 } from '../905/318279';
import { collaboratorSet, designSet } from '../905/332483';
import { createOptimistThunk } from '../905/350402';
import { $ as _$$$ } from '../905/355181';
import { BannerMessage } from '../905/363675';
import { UpgradeAction } from '../905/370443';
import { selectUser } from '../905/372672';
import { useModalManager } from '../905/437088';
import { Link } from '../905/438674';
import { v as _$$v } from '../905/442517';
// import { LoadingSpinner } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { PluginImage } from '../905/480825';
import { openWindow } from '../905/508367';
import { ProductAccessTypeEnum } from '../905/513035';
import { getCodegenLanguagePreference } from '../905/515076';
import { ConfirmationModal, HeaderModal } from '../905/519092';
import { Button } from '../905/521428';
import { subscribeAndAwaitData } from '../905/553831';
import { mL, UC } from '../905/563637';
import { r as _$$r3 } from '../905/571562';
import { FlashActions } from '../905/573154';
import { VisualBellIcon } from '../905/576487';
import { getFeatureFlags } from '../905/601108';
import { K as _$$K } from '../905/628118';
import { ButtonPrimitive } from '../905/632989';
import { ComboboxPrimitive } from '../905/634016';
import { FeatureFlag } from '../905/652992';
import { ResourceStatus } from '../905/663269';
import { In } from '../905/672640';
import { textDisplayConfig } from '../905/687265';
import { X as _$$X } from '../905/698965';
import { S3 } from '../905/708054';
import { ProductTierEnum, RenewalTermEnum } from '../905/712921';
import { SvgComponent } from '../905/714743';
import { getResourceDataOrFallback } from '../905/723791';
import { ConsumptionPaywallModalPlansPricing } from '../905/739964';
import { q as _$$q } from '../905/749058';
import { ErrorBoundaryCrash } from '../905/751457';
import { s as _$$s4 } from '../905/761565';
import { workspaceApiService } from '../905/774364';
import { N as _$$N2 } from '../905/809096';
import { AutoLayout } from '../905/470281';
import { useCurrentUserOrg } from '../905/845253';
import { useDropdownState } from '../905/848862';
import { n as _$$n } from '../905/861286';
import { FDocumentType } from '../905/862883';
import { sendWithRetry } from '../905/910117';
import { dayjs } from '../905/920142';
import { selectViewAction } from '../905/929976';
import { Legend } from '../905/932270';
import { styleBuilderInstance } from '../905/941192';
import { B as _$$B } from '../905/950875';
import { a as _$$a2 } from '../905/964520';
import { TextWithTruncation } from '../905/984674';
import { RelativeTimeDisplay } from '../905/986103';
import { A as _$$A7 } from '../1617/40021';
import { A as _$$A4 } from '../1617/230645';
import { d as _$$d, S as _$$S4 } from '../4452/304860';
import { p as _$$p3 } from '../4452/321313';
import { b as _$$b2, v0 as _$$v3, _f, dv, gr, jy, ut } from '../4452/559083';
import { A as _$$A6 } from '../5724/663128';
import { A as _$$A5 } from '../6828/865061';
import { d as _$$d2 } from '../7021/966231';
import { fm } from '../c5e2cae0/453906';
import { WQ } from '../c5e2cae0/705272';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { atom, useAtomValueAndSetter, useAtomWithSubscription, Xr } from '../figma_app/27355';
import { useLatestRef } from '../figma_app/922077';
import { IpAllowlistRangesView, OrgAdminSettingsPage, OrgMfaGuestInfoView, Plugin, OrgWorkspacesWithControlSettingsView, OrgMfaMemberInfoView, OrgSharedSettingView, ToggledDevModeSettingsView } from '../figma_app/43951';
import { BannerInsetModal } from '../figma_app/59509';
import { $$ as _$$$$, nR as _$$nR2 } from '../figma_app/60079';
import { aY as _$$aY, JA } from '../figma_app/78725';
import { getCodegenPreferencesSettings, isCodegenSupportedForLanguage } from '../figma_app/120227';
import { orgUserService } from '../figma_app/124713';
import { addPluginToRecentsThunk, syncRecentPluginsThunk } from '../figma_app/147952';
import { I2, Xf } from '../figma_app/153916';
import { isGovCluster } from '../figma_app/169182';
import { J as _$$J3 } from '../figma_app/179602';
import { FPlanNameType, FOrganizationLevelType, FCostCenterType } from '../figma_app/191312';
import { getProductAccessTypeByKey } from '../figma_app/217457';
import { Bg } from '../figma_app/246699';
import { ListFormatter } from '../figma_app/257703';
import { DialogBody, DialogTitle, DialogActionStrip, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { isResourceHubEnabled } from '../figma_app/275462';
import { useSubscription } from '../figma_app/288654';
import { useScimGroupExperiment } from '../figma_app/297957';
import { isSingleDevWithCodegen, isDevModePlugin, isDevModeWithCodegen } from '../figma_app/300692';
import { V as _$$V3 } from '../figma_app/312987';
import { isBigmaAndSecurityEnabled, getMfaGuestControlSetting, isBigmaSecurityAddOnEnabled, getAuthType, hasScimToken, getCostCenterTypeString, isBigmaEnabledSimple, isDomainCaptureAndBigmaEnabled, areAllDomainsVerified, isBigmaAndSecurityAddOnEnabled, getGuestControlApprovalStatus, isBigmaEnabled } from '../figma_app/336853';
import { handleErrorWithToast } from '../figma_app/345997';
import { getParentOrgIdIfOrgLevel, useTeamPlanFeatures } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { Jt } from '../figma_app/481749';
import { TeamCreationControls, UpgradeRequestSetting, PublicLinkControlsSetting } from '../figma_app/482728';
import { _ as _$$_2, S as _$$S5 } from '../figma_app/490799';
import { range } from '../figma_app/492908';
import { $w, hi, Hq, KA, Kc, NL, OT, q4, Sl, Tf, vs, xP, Xw, Y4, ye, yo } from '../figma_app/494261';
import { getUserIsoCode } from '../figma_app/514043';
import { c4 } from '../figma_app/518077';
import { setupOrgPluginPreferences } from '../figma_app/545541';
import { isFigmakeSitesEnabled } from '../figma_app/552876';
import { handleSuspenseRetainRelease } from '../figma_app/566371';
import { p3 } from '../figma_app/588582';
import { selectExperimentConfigHook } from '../figma_app/594947';
import { getCurrentTeam } from '../figma_app/598018';
import { WithTrackedButton } from '../figma_app/617427';
import { organizationAPIService } from '../figma_app/617654';
import { ButtonBasePrimary, BaseLinkComponent, ButtonSecondary, ButtonWhite, SecureLink, BigTextInputForwardRef, ButtonNegative, ButtonBasePrimaryTracked } from '../figma_app/637027';
import { pL, v0 } from '../figma_app/639088';
import { DashboardSection } from '../figma_app/650409';
import { QN, v4 } from '../figma_app/655139';
import { sortByPropertyWithOptions } from '../figma_app/656233';
import { AuthTypeEnum, UserTypeEnum, ApprovalStatusEnum, USEURegionEnum } from '../figma_app/736948';
import { stopPropagation } from '../figma_app/753501';
import { ls, V0 } from '../figma_app/755395';
import { Rs as _$$Rs } from '../figma_app/761870';
import { MeasurementUnit } from '../figma_app/763686';
import { z6 } from '../figma_app/805373';
import { getOrgAdminTabMessage } from '../figma_app/809387';
// var r = require('../figma_app/822011');
import { r as _$$r, hM, N_, qr, Rc, vS } from '../figma_app/827447';
import { createEmptyAddress } from '../figma_app/831101';
import { TrackingProvider } from '../figma_app/831799';
import { createPluginManifestData } from '../figma_app/844435';
import { LoadingSpinner, LoadingOverlay } from '../figma_app/858013';
import { generateDefaultCommunityPluginUrl, extractPluginIdFromUrl } from '../figma_app/870683';
import { desktopAPIInstance } from '../figma_app/876459';
import { trackOrgEventWithStore } from '../figma_app/901889';
import { ModalView, ConfirmationModal2 } from '../figma_app/918700';
import { Badge, BadgeColor } from '../figma_app/919079';
import { V3 as _$$V4 } from '../figma_app/926061';
import { s as _$$s5 } from '../figma_app/961559';
import { openUrlInContext } from '../figma_app/976345';
import { A as _$$A8 } from '../svg/619883';
import { A as _$$A3 } from '../svg/678521';
import { A as _$$A2 } from '../svg/783138';
import t4 from '../vendor/128080';
import { useSelector, useDispatch } from 'react-redux';
import nJ from '../vendor/523035';
import { _ as _$$_ } from '../vendor/853977';
function B(e) {
  let t = e.dispatch;
  let a = useScimGroupExperiment();
  let i = useCallback(() => {
    t(_$$V({
      orgSamlConfigId: e.orgSamlConfig.id
    }));
  }, [t, e.orgSamlConfig.id]);
  let r = useCallback(() => {
    t(showModalHandler({
      type: _$$l(),
      data: {
        dispatch: t,
        onConfirm: () => {
          t(hideModal());
          i();
        },
        onCancel: () => {
          t(hideModal());
        }
      }
    }));
  }, [i, t]);
  let l = !!e.orgSamlConfig.idp_name;
  let d = e.orgSamlConfig.sp_scim_bearer_token_at;
  let c = e.orgSamlConfig.has_scim_token;
  return jsxs(Fragment, {
    children: [jsx('p', {
      className: wz,
      children: renderI18nText(a() ? 'org_settings.scim.scim_group_description' : 'org_settings.scim.scim_description', {
        helpArticle: jsx(Link, {
          href: 'https://help.figma.com/hc/articles/360040532333-Getting-Started-with-SAML-SSO#h_d0220c93-18fa-4c1f-b965-69a5c8113f05',
          newTab: !0,
          children: renderI18nText('org_settings.sso.help_article')
        })
      })
    }), jsx('table', {
      className: _$$tp,
      children: jsxs('tbody', {
        children: [e.org.k12_google_org && jsxs('tr', {
          children: [jsx('th', {
            children: renderI18nText('org_settings.sso.tenant_id')
          }), jsx('td', {
            children: e.orgSamlConfig.id
          })]
        }), jsxs('tr', {
          children: [jsx('th', {
            children: renderI18nText('org_settings.scim.api_token')
          }), d && jsx('td', {
            children: renderI18nText('org_settings.scim.api_token_generated_at', {
              timestamp: jsx(RelativeTimeDisplay, {
                date: d
              })
            })
          }), jsxs('td', {
            children: [!l && !e.org.k12_google_org && getI18nString('org_settings.scim.saml_sso_must_be_configured'), (l || e.org.k12_google_org) && c && jsx(Link, {
              onClick: r,
              href: '#',
              trusted: !0,
              children: renderI18nText('org_settings.scim.revoke_token_access')
            }), (l || e.org.k12_google_org) && !c && jsx(Link, {
              onClick: () => {
                t(_$$S2({
                  orgSamlConfigId: e.orgSamlConfig.id
                }));
              },
              href: '#',
              trusted: !0,
              children: renderI18nText('org_settings.scim.generate_api_token')
            })]
          })]
        })]
      })
    })]
  });
}
let G = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = useSelector(e => e.orgSamlConfig);
  let s = !a.config;
  let r = () => e(popModalStack());
  return jsx(HeaderModal, {
    title: getI18nString('org_settings.scim.scim_provisioning'),
    onClose: r,
    maxWidth: 492,
    minWidth: 492,
    children: jsxs('div', {
      className: jE,
      children: [s && jsx(LoadingSpinner, {}), !s && jsxs(Fragment, {
        children: [jsx(B, {
          dispatch: e,
          org: t,
          orgSamlConfig: a.config
        }), jsx('div', {
          className: Yy,
          children: jsx(Button, {
            onClick: r,
            variant: 'secondary',
            children: renderI18nText('org_settings.sign_in_method.done')
          })
        })]
      })]
    })
  });
}, 'EDIT_SCIM_MODAL');
let J = Y;
function ed(e) {
  let t = !!e.orgSamlConfig.idp_name;
  let a = e.isMfaForMembersEnabled;
  return jsxs(Fragment, {
    children: [desktopAPIInstance && jsx('div', {
      className: wz,
      children: renderI18nText('org_settings.sso.you_must_use_a_web_browser')
    }), jsxs(RadioGroup, {
      value: e.signInMethod,
      onChange: t => {
        e.setSignInMethod(t);
      },
      className: cssBuilderInstance.pl10.pt16.$,
      children: [jsx(RadioOption, {
        value: AuthTypeEnum.ANY,
        disabled: !!desktopAPIInstance,
        children: renderI18nText('org_settings.sign_in_method.any', {
          default: jsx('span', {
            className: Rm,
            children: renderI18nText('org_settings.sign_in_method.default')
          })
        })
      }), jsx(RadioOption, {
        value: AuthTypeEnum.GOOGLE,
        disabled: !!desktopAPIInstance || a,
        tooltipText: a ? getI18nString('org_settings.sign_in_method.unavailable_when_2fa_for_members_is_enabled') : void 0,
        children: renderI18nText('org_settings.sign_in_method.members_must_log_in_with_a_google_account')
      }), jsx(RadioOption, {
        tooltipText: a ? getI18nString('org_settings.sign_in_method.unavailable_when_2fa_for_members_is_enabled') : t ? void 0 : getI18nString('org_settings.sign_in_method.you_need_to_configure_saml_sso_first'),
        value: AuthTypeEnum.SAML,
        disabled: !!desktopAPIInstance || !t || a,
        children: renderI18nText('org_settings.sign_in_method.members_must_log_in_with_saml_sso')
      })]
    })]
  });
}
function ec() {
  return jsx(Link, {
    newTab: !0,
    href: 'https://help.figma.com/hc/articles/360052497994-Set-login-and-authentication-method',
    trusted: !0,
    children: renderI18nText('org_settings.mfa_for_members.learn_more_link')
  });
}
function e_(e) {
  let t = useDispatch();
  let [a, r] = useState(!1);
  let l = useLatestRef(e.mfaRequiredSetting);
  let o = l === UserTypeEnum.GUESTS || l === UserTypeEnum.ALL_USERS;
  let d = l === UserTypeEnum.MEMBERS || l === UserTypeEnum.ALL_USERS;
  let c = e.mfaRequiredSetting === UserTypeEnum.MEMBERS || e.mfaRequiredSetting === UserTypeEnum.ALL_USERS;
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: cssBuilderInstance.flex.alignLeft.mt16.pt10.$,
      style: styleBuilderInstance.add({
        borderTop: '1px solid var(--color-border)'
      }).$,
      children: jsx(Checkbox, {
        label: jsx(Label, {
          children: renderI18nText('org_settings.mfa_for_members.checkbox_title')
        }),
        checked: c,
        onChange: t => {
          t ? e.setMfaRequiredSetting(o ? UserTypeEnum.ALL_USERS : UserTypeEnum.MEMBERS) : e.setMfaRequiredSetting(o ? UserTypeEnum.GUESTS : null);
        },
        disabled: !!desktopAPIInstance,
        children: renderI18nText('org_settings.mfa_for_members.checkbox_description', {
          learnMoreLink: jsx(ec, {})
        })
      })
    }), !d && c && jsx('div', {
      className: cssBuilderInstance.mt16.$,
      children: e.isLoading ? jsx(LoadingOverlay, {}) : jsx(BannerInsetModal, {
        variant: 'warn',
        children: jsxs(BannerMessage, {
          title: renderI18nText('org_settings.mfa_for_members.warning_title', {
            numMembers: e.nonMfaMemberCount
          }),
          children: [renderI18nText('org_settings.mfa_for_members.warning_description', {
            numMembers: e.mfaMemberCount
          }), jsx('button', {
            className: Ds,
            onClick: () => {
              a || (r(!0), t(VisualBellActions.enqueue({
                message: getI18nString('members_table.csv_export.preparing_request'),
                type: 'orgRoster.exportCSV',
                icon: VisualBellIcon.SPINNER
              })), orgUserService.getMemberCSVExport({
                orgId: e.org.id
              }).then(() => {
                t(VisualBellActions.enqueue({
                  message: getI18nString('members_table.csv_export.generating'),
                  type: 'orgRoster.exportCSV',
                  icon: VisualBellIcon.CHECK
                }));
              }, () => {
                t(VisualBellActions.enqueue({
                  message: getI18nString('members_table.csv_export.error'),
                  type: 'orgRoster.exportCSV',
                  icon: VisualBellIcon.EXCLAMATION,
                  error: !0
                }));
              }), r(!1));
            },
            children: renderI18nText('org_settings.mfa_for_members.download_csv')
          }, 'download-csv')]
        })
      })
    })]
  });
}
let eu = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = useSelector(e => e.orgSamlConfig);
  let r = getAuthType(t);
  let [l, o] = useState(r);
  let d = function (e) {
    let t = selectExperimentConfigHook('ff_mfa_for_members');
    return !!(e && isBigmaEnabledSimple(e) && e.security_add_on_enabled_at && t.getConfig().getValue('enabled', !1));
  }(t);
  let c = useSubscription(OrgMfaMemberInfoView, {
    orgId: t.id
  });
  let _ = c.status === 'loading' || c.data?.orgMfaMemberInfo?.status !== ResourceStatus.Loaded;
  let u = t.mfa_required ? t.mfa_required : null;
  let [m, p] = useState(u);
  let g = c.status === 'loaded' && c.data?.orgMfaMemberInfo?.status === ResourceStatus.Loaded && c.data?.orgMfaMemberInfo?.data || {
    totalMemberCount: 0,
    mfaMemberCount: 0,
    nonMfaMemberCount: 0
  };
  let h = Number(g.totalMemberCount);
  let b = Number(g.nonMfaMemberCount);
  let v = d && l === AuthTypeEnum.ANY;
  let f = () => e(popModalStack());
  return jsxs(HeaderModal, {
    containerClassName: jT,
    title: getI18nString('org_settings.sign_in_method.authentication'),
    onClose: f,
    maxWidth: 560,
    minWidth: 560,
    children: [jsxs('div', {
      className: jE,
      children: [!a.config && jsx(LoadingSpinner, {}), a.config && jsxs(Fragment, {
        children: [jsx('p', {
          className: Fm,
          children: renderI18nText('org_settings.sign_in_method.authentication_instruction')
        }), jsx(ed, {
          dispatch: e,
          org: t,
          orgSamlConfig: a.config,
          signInMethod: l,
          setSignInMethod: o,
          isMfaForMembersEnabled: m === UserTypeEnum.MEMBERS || m === UserTypeEnum.ALL_USERS
        }), v && jsx(e_, {
          mfaRequiredSetting: m,
          setMfaRequiredSetting: p,
          isLoading: _,
          mfaMemberCount: h - b,
          nonMfaMemberCount: b,
          org: t
        })]
      })]
    }), jsxs('div', {
      className: J()(_$$qr, v ? void 0 : cssBuilderInstance.mt2.$),
      children: [jsx(Button, {
        variant: 'secondary',
        onClick: f,
        children: renderI18nText('general.cancel')
      }), jsx('div', {
        className: Tg,
        children: jsx(Button, {
          variant: 'primary',
          onClick: () => {
            l === AuthTypeEnum.GOOGLE ? e(Xw({
              orgId: t.id,
              googleSsoOnly: !0,
              mfaRequired: m
            })) : l === AuthTypeEnum.SAML ? e(hi({
              orgId: t.id,
              samlSsoOnly: !0,
              mfaRequired: m
            })) : r === AuthTypeEnum.GOOGLE ? e(Xw({
              orgId: t.id,
              googleSsoOnly: !1,
              mfaRequired: m
            })) : e(hi({
              orgId: t.id,
              samlSsoOnly: !1,
              mfaRequired: m
            }));
            f();
          },
          children: renderI18nText('org_settings.guest_control.save_button')
        })
      })]
    })]
  });
}, 'SIGN_IN_METHOD_MODAL');
let ev = 'billing_emails_modal--secondary--4yHBt';
let ef = 'billing_emails_modal--full_width--lstMy';
let ej = 'billing_emails_modal--icon--KUryt';
let ey = 'billing_emails_modal--description_section--3-x5B';
let ew = 'billing_emails_modal--subtitle--AtE9I';
let eC = registerModal(e => {
  let t = useDispatch();
  let s = () => t(popModalStack());
  dayjs.extend(r);
  dayjs(e.subscriptionStart).format('Do');
  return jsx(HeaderModal, {
    onClose: s,
    title: getI18nString('billing_emails_modal.billing_emails_info.what_billing_emails'),
    minWidth: 341,
    maxWidth: 341,
    children: jsxs('div', {
      className: 'billing_emails_modal--container--GTxxo',
      children: [jsx('div', {
        className: ev,
        children: renderI18nText('billing_emails_modal.billing_emails_info.about_billing_emails')
      }), jsxs('div', {
        className: ef,
        children: [jsx('div', {
          className: ej,
          children: jsx(SvgComponent, {
            svg: _$$A2
          })
        }), jsxs('div', {
          className: ey,
          children: [jsx('div', {
            className: ew,
            children: renderI18nText('billing_emails_modal.billing_emails_info.annual_subscriptions_and_renewals')
          }), jsx('div', {
            className: ev,
            children: renderI18nText('billing_emails_modal.billing_emails_info.annual_subscription_renews_on_description', {
              date: jsx('strong', {
                children: renderI18nText('billing_emails_modal.billing_emails_info.subscription_date', {
                  subscriptionStart: e.subscriptionStart
                })
              })
            })
          })]
        })]
      }), jsxs('div', {
        className: ef,
        children: [jsx('div', {
          className: ej,
          children: jsx(SvgComponent, {
            svg: _$$A3
          })
        }), jsxs('div', {
          className: ey,
          children: [jsx('div', {
            className: ew,
            children: renderI18nText('billing_emails_modal.billing_emails_info.quarterly_true_ups')
          }), jsxs('div', {
            className: ev,
            children: [jsx('div', {
              className: 'billing_emails_modal--padding_below--44QyG',
              children: renderI18nText('billing_emails_modal.billing_emails_info.quarterly_true_ups_description_1.seat_rename')
            }), renderI18nText('billing_emails_modal.billing_emails_info.quarterly_true_ups_description_2', {
              more: jsx('a', {
                className: 'billing_emails_modal--link--sJ8RF blue_link--blueLink--9rlnd',
                href: 'https://help.figma.com/hc/articles/360040328293-Manage-billing-on-the-Organization-and-Enterprise-plans',
                children: renderI18nText('billing_emails_modal.billing_emails_info.more')
              })
            })]
          })]
        })]
      }), jsx('div', {
        className: 'billing_emails_modal--buttons--ibKgB',
        children: jsx(ButtonBasePrimaryTracked, {
          onClick: s,
          children: renderI18nText('billing_emails_modal.billing_emails_info.close')
        })
      })]
    })
  });
}, 'BillingEmailsInfo');
let eT = atom(e => {
  let t = e(orgSubscriptionAtom);
  if (t) {
    return e(OrgWorkspacesWithControlSettingsView.Query({
      orgId: t.id
    }));
  }
});
function eA() {
  return useAtomWithSubscription(eT);
}
let te = registerModal(e => {
  let t = useDispatch();
  let a = useSelector(e => e.orgById[e.currentUserOrgId]);
  let s = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: s,
    width: 364,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('settings_tab.delete_org_modal.are_you_sure_you_d_like_to_delete_figma')
        })
      }), jsx(DialogBody, {
        children: renderI18nText('settings_tab.delete_org_modal.please_confirm_that_you_wish_to_permanently_delete_the_org', {
          orgName: a.name
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: () => {
              t(popModalStack());
            },
            variant: 'secondary',
            children: renderI18nText('modal.cancel')
          }), jsx(Button, {
            onClick: () => {
              t(popModalStack());
              t(q4({
                orgId: a.id
              }));
            },
            variant: 'destructive',
            children: renderI18nText('settings_tab.delete_org_modal.request_to_delete_organization')
          })]
        })
      })]
    })
  });
}, 'DELETE_ORG_MODAL');
let tt = registerModal(e => {
  let t = useDispatch();
  let a = useCurrentUserOrg();
  let r = useModalManager(e);
  let [l, o] = useState(_$$Rs());
  let d = useCallback(e => {
    trackEventAnalytics('Delete user search performed', {
      orgId: a?.id,
      queryLength: e.inputValue.length
    });
    o(e);
  }, [a?.id]);
  let c = l.tokens.length === 0;
  return jsx(ModalRootComponent, {
    manager: r,
    width: 364,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('settings_tab.delete_org_modal.delete_users_from_this_organization')
        })
      }), jsxs(DialogBody, {
        children: [renderI18nText('settings_tab.delete_org_modal.enter_names_or_emails_of_users_that_you_d_like_to_delete'), jsx('div', {
          className: 'delete_org_modal_autocomplete--autocompleteDiv--XcvHs',
          children: jsx(_$$g, {
            placeholder: getI18nString('settings_tab.delete_org_modal.email_or_names_of_org_members'),
            autocomplete: l,
            onAutocompleteChange: d
          })
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: () => {
              t(popModalStack());
            },
            variant: 'secondary',
            children: renderI18nText('modal.cancel')
          }), jsx(Button, {
            disabled: c,
            onClick: () => {
              t(popModalStack());
              t(showModalHandler({
                type: ta,
                data: {
                  orgUsers: l.tokens.map(e => e.content)
                }
              }));
            },
            variant: 'destructive',
            children: renderI18nText('settings_tab.delete_org_modal.delete')
          })]
        })
      })]
    })
  });
}, 'DELETE_ORG_USER_MODAL');
let ta = registerModal(e => {
  let t = useDispatch();
  let a = useSelector(e => e.orgById[e.currentUserOrgId]);
  let s = useModalManager(e);
  return jsx(ModalRootComponent, {
    manager: s,
    width: 364,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('settings_tab.delete_org_modal.delete_users_and_their_data')
        })
      }), jsxs(DialogBody, {
        children: [jsx('p', {
          children: renderI18nText('settings_tab.delete_org_modal.you_re_deleting_figma_data_and_access_for_the_following_user')
        }), jsx('ul', {
          className: 'delete_org_modal_autocomplete--orgUserList--PhNTi',
          children: e.orgUsers.map(e => jsxs('li', {
            children: [e.user.handle, ' (', e.user.email, ')']
          }, e.user.email))
        }), jsx('br', {}), jsx('p', {
          children: renderI18nText('settings_tab.delete_org_modal.this_action_can_t_be_undone')
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: () => {
              t(popModalStack());
            },
            variant: 'secondary',
            children: renderI18nText('modal.cancel')
          }), jsx(Button, {
            onClick: () => {
              t(popModalStack());
              t(ye({
                orgId: a.id,
                orgUserIds: e.orgUsers.map(e => e.id)
              }));
            },
            variant: 'destructive',
            children: renderI18nText('modal.confirm')
          })]
        })
      })]
    })
  });
}, 'CONFIRM_DELETE_ORG_USER_MODAL');
let tg = {
  removeCustomSettingsButton: {
    'color': 'x1n0bwc9',
    'padding': 'xf7z5ut',
    'paddingInline': null,
    'paddingStart': null,
    'paddingLeft': null,
    'paddingEnd': null,
    'paddingRight': null,
    'paddingBlock': null,
    'paddingTop': null,
    'paddingBottom': null,
    ':hover_color': 'x1c5oinq',
    ':hover_textDecoration': 'xt0b8zv',
    ':hover_textDecorationColor': null,
    ':hover_textDecorationLine': null,
    ':hover_textDecorationStyle': null,
    ':hover_textDecorationThickness': null,
    '$$css': !0
  },
  goBackButton: {
    'height': 'xxk0z11',
    'paddingRight': 'xctkrei',
    'paddingInlineStart': null,
    'paddingInlineEnd': null,
    'margin': 'x1e1th6i',
    'marginInline': null,
    'marginInlineStart': null,
    'marginLeft': null,
    'marginInlineEnd': null,
    'marginRight': null,
    'marginBlock': null,
    'marginTop': null,
    'marginBottom': null,
    'display': 'x78zum5',
    'flexDirection': 'x1q0g3np',
    'justifyContent': 'xl56j7k',
    'alignItems': 'x6s0dn4',
    'cursor': 'x1ypdohk',
    'maxWidth': 'x12csvog',
    'overflowWrap': 'x1mzt3pk',
    'whiteSpace': 'xeaf4i8',
    'wordBreak': 'x13faqbe',
    'wordWrap': 'x1vvkbs',
    'backgroundColor': 'xjbqb8w xv2f06h',
    'borderRadius': 'x1axg66t xjc16lc',
    'borderStartStartRadius': null,
    'borderStartEndRadius': null,
    'borderEndStartRadius': null,
    'borderEndEndRadius': null,
    'borderTopLeftRadius': null,
    'borderTopRightRadius': null,
    'borderBottomLeftRadius': null,
    'borderBottomRightRadius': null,
    'border': 'xfj9a5l',
    'borderWidth': null,
    'borderInlineWidth': null,
    'borderInlineStartWidth': null,
    'borderLeftWidth': null,
    'borderInlineEndWidth': null,
    'borderRightWidth': null,
    'borderBlockWidth': null,
    'borderTopWidth': null,
    'borderBottomWidth': null,
    'borderStyle': null,
    'borderInlineStyle': null,
    'borderInlineStartStyle': null,
    'borderLeftStyle': null,
    'borderInlineEndStyle': null,
    'borderRightStyle': null,
    'borderBlockStyle': null,
    'borderTopStyle': null,
    'borderBottomStyle': null,
    'borderColor': null,
    'borderInlineColor': null,
    'borderInlineStartColor': null,
    'borderLeftColor': null,
    'borderInlineEndColor': null,
    'borderRightColor': null,
    'borderBlockColor': null,
    'borderTopColor': null,
    'borderBottomColor': null,
    ':focus-visible_border': 'x1drnl1r',
    ':focus-visible_borderWidth': null,
    ':focus-visible_borderInlineWidth': null,
    ':focus-visible_borderInlineStartWidth': null,
    ':focus-visible_borderLeftWidth': null,
    ':focus-visible_borderInlineEndWidth': null,
    ':focus-visible_borderRightWidth': null,
    ':focus-visible_borderBlockWidth': null,
    ':focus-visible_borderTopWidth': null,
    ':focus-visible_borderBottomWidth': null,
    ':focus-visible_borderStyle': null,
    ':focus-visible_borderInlineStyle': null,
    ':focus-visible_borderInlineStartStyle': null,
    ':focus-visible_borderLeftStyle': null,
    ':focus-visible_borderInlineEndStyle': null,
    ':focus-visible_borderRightStyle': null,
    ':focus-visible_borderBlockStyle': null,
    ':focus-visible_borderTopStyle': null,
    ':focus-visible_borderBottomStyle': null,
    ':focus-visible_borderColor': 'x1g3hczy',
    ':focus-visible_borderInlineColor': null,
    ':focus-visible_borderInlineStartColor': null,
    ':focus-visible_borderLeftColor': null,
    ':focus-visible_borderInlineEndColor': null,
    ':focus-visible_borderRightColor': null,
    ':focus-visible_borderBlockColor': null,
    ':focus-visible_borderTopColor': null,
    ':focus-visible_borderBottomColor': null,
    '$$css': !0
  }
};
function ty({
  org: e,
  loadingStatus: t,
  allWorkspaces: a,
  displaySettings: s,
  subHeader: i,
  workspaceSubText: r,
  hasCustomSettings: l
}) {
  let o = a.filter(l);
  return jsxs('div', {
    className: 'x1w4f5ud xdyg6lv',
    children: [jsxs('div', {
      className: 'x7hzu26 x12sbs06',
      children: [jsx('p', {
        className: 'x1s688f x1j6dyjg x1d3mw78 x1akne3o',
        children: renderI18nText('org_settings.workspace_controls.header_text')
      }), jsx('p', {
        className: 'x1j6dyjg x1d3mw78 x1n0bwc9',
        children: i
      })]
    }), jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 8,
      children: [jsx(tk, {
        org: e,
        workspaces: a,
        displaySettings: s,
        hasCustomSettings: l
      }), jsx('div', {
        ...props(tE.customWorkspaceContainer, t === 'loaded' && tE.loaded),
        children: o.map(e => jsx('div', {
          children: jsx(AutoLayout, {
            direction: 'horizontal',
            spacing: 8,
            children: jsx(tw, {
              onClick: () => s(e),
              avatar: jsx(z6, {
                size: 24,
                entity: e
              }),
              mainText: e.name,
              subText: r(e)
            }, e.name)
          })
        }, e.name))
      })]
    })]
  });
}
function tw(e) {
  let t = useId();
  return jsxs(ButtonPrimitive, {
    'onClick': e.onClick,
    'className': 'x1gskr33 x1ihwiht x78zum5 x1q0g3np xh8yej3 x6s0dn4 x1nfngrj x1qhtx96 x13iak60 x1ypdohk xv2f06h',
    'aria-label': getI18nString('org_settings.view_workspace_settings', {
      workspaceName: e.mainText
    }),
    'aria-describedby': t,
    'children': [jsx('div', {
      'aria-hidden': 'true',
      'className': 'xrybvsa x2lah0s',
      'children': e.avatar
    }), jsx('div', {
      className: 'x1mzt3pk xeaf4i8 x13faqbe x98rzlu xeuugli',
      children: jsxs(AutoLayout, {
        direction: 'vertical',
        verticalAlignItems: 'center',
        spacing: 0,
        children: [jsx(TextWithTruncation, {
          children: e.mainText
        }), jsx('span', {
          id: t,
          className: 'x1j6dyjg x1d3mw78 x1n0bwc9',
          children: e.subText
        })]
      })
    }), jsx('div', {
      'aria-hidden': 'true',
      'className': 'x8x9d4c x2lah0s',
      'children': jsx(_$$a2, {})
    })]
  });
}
function tk(e) {
  let [t, a] = useState('');
  let [i, r] = useState(void 0);
  let l = useRef(null);
  let o = useId();
  let d = ComboboxPrimitive.useCombobox({
    onActiveValueChange: r,
    onSelect: t => {
      let n = e.workspaces.find(e => e.id === t);
      n && !e.hasCustomSettings(n) && (a(''), r(void 0), e.displaySettings(n));
    }
  });
  let c = e.workspaces.filter(e => e.name.toLowerCase().includes(t.toLowerCase()));
  return jsxs('div', {
    ref: l,
    className: 'xh8yej3',
    children: [jsxs(InputComponent.Root, {
      children: [jsx(InputComponent, {
        placeholder: getI18nString('settings_tab.add_workspace_label'),
        id: o,
        ...d.getInputProps({
          onChange: a,
          value: t
        })
      }), jsx(ComboboxPrimitive.Trigger, {
        ...d.getTriggerProps(),
        children: jsx(_$$r3, {})
      })]
    }), c.length > 0 && jsx(ComboboxPrimitive.PopupList, {
      style: {
        width: l.current?.getBoundingClientRect().width
      },
      className: 'xh8yej3 x1yjdb4r xmkeg23 x1y0btm7 x7z60cl x19y5rnk x16fy0r8 x7wgvq7',
      anchorEl: l,
      ...d.getListProps(),
      children: jsx(ScrollContainer, {
        children: jsx('div', {
          style: {
            maxHeight: 400
          },
          children: c.map(t => {
            let a = e.hasCustomSettings(t);
            return createElement(ComboboxPrimitive.Option, {
              ...props(i === t.id && !a && tE.activeComboboxOption),
              disabled: a,
              key: t.id,
              value: t.id
            }, jsxs('div', {
              className: 'x78zum5 x1q0g3np x6s0dn4 x1nfngrj xf7z5ut xjwf9q1',
              children: [jsx(z6, {
                size: 24,
                entity: t
              }), jsx('span', {
                ...props(tE.workspaceNameContainer, a && tE.disabled),
                children: t.name
              }), a && jsx('span', {
                className: 'xge78cn x8x9d4c x2lah0s',
                children: getI18nString('org_settings.workspace_controls.has_custom_settings')
              })]
            }));
          })
        })
      })
    })]
  });
}
let tE = {
  workspaceNameContainer: {
    overflowWrap: 'x1mzt3pk',
    whiteSpace: 'xeaf4i8',
    wordBreak: 'x13faqbe',
    flex: 'x98rzlu',
    flexGrow: null,
    flexShrink: null,
    flexBasis: null,
    minWidth: 'xeuugli',
    $$css: !0
  },
  customWorkspaceContainer: {
    display: 'x78zum5',
    flexDirection: 'xdt5ytf',
    gap: 'x1nfngrj',
    rowGap: null,
    columnGap: null,
    width: 'xh8yej3',
    marginLeft: 'xgsvwom',
    marginInlineStart: null,
    marginInlineEnd: null,
    maxHeight: 'xnjgh8c',
    $$css: !0
  },
  loaded: {
    maxHeight: 'x1hkcv85',
    transitionProperty: 'xrok2fi',
    transitionDuration: 'x6b05lp',
    transitionTimingFunction: 'xz4gly6',
    $$css: !0
  },
  disabled: {
    color: 'xge78cn',
    $$css: !0
  },
  activeComboboxOption: {
    backgroundColor: 'x30nh5c',
    $$css: !0
  }
};
let tC = {
  labelText: {
    ...textDisplayConfig.textBodyMediumStrong,
    $$css: !0
  },
  noteText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  successText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'xq6u9c4',
    $$css: !0
  },
  secondaryText: {
    ...textDisplayConfig.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
let tS = registerModal(e => {
  let {
    org,
    onClose
  } = e;
  let r = useModalManager(e);
  let l = useDispatch();
  let [o, d] = useState(!org.ai_features_disabled);
  let c = eA();
  let _ = [...(c?.data?.org?.workspaces ?? [])];
  let u = o ? getI18nString('admin_settings.ai.enable_success') : getI18nString('admin_settings.ai.disable_success');
  let m = useCallback(e => {
    l(showModalHandler({
      type: tN,
      data: {
        workspace: e
      }
    }));
  }, [l]);
  let p = useCallback(e => {
    let t = e.workspaceSharedSetting?.aiSetting;
    if (!t) return null;
    let a = t.status === 'loaded' && t.data === 'enabled';
    return jsx('div', {
      children: jsx('p', {
        ...stylex.props(a ? tC.successText : tC.secondaryText),
        children: a ? renderI18nText('org_settings.general.on') : renderI18nText('org_settings.general.off')
      })
    });
  }, []);
  return jsx(ModalRootComponent, {
    manager: r,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('org_settings.ai_controls.ai_features')
        })
      }), jsxs(DialogBody, {
        children: [jsx(tA, {
          resource: 'org',
          aiControlsSetting: o,
          setAiControlsSetting: d
        }), org.tier === FPlanNameType.ENTERPRISE && jsx(ty, {
          org,
          loadingStatus: c?.status ?? 'loading',
          allWorkspaces: _,
          displaySettings: m,
          subHeader: renderI18nText('org_settings.ai_controls.update_ai_features_settings_for'),
          workspaceSubText: p,
          hasCustomSettings: tR
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: onClose,
            children: renderI18nText('org_settings.general.cancel')
          }), jsx(Button, {
            onClick: () => {
              l(yo({
                payload: {
                  ai_features_disabled: !o
                },
                successMessage: u
              }));
              onClose();
            },
            children: renderI18nText('org_settings.general.save')
          })]
        })
      })]
    })
  });
}, 'AiControlsModal');
let tN = registerModal(({
  open: e,
  onClose: t,
  workspace: a
}) => {
  let r = useDispatch();
  let l = getI18nString('org_settings.ai_controls.workspace_success');
  let [o, d] = useState(tR(a));
  let c = useCallback(() => {
    r(showModalHandler({
      type: tI,
      data: {
        workspace: a,
        goBack: t
      }
    }));
  }, [r, a, t]);
  let _ = useModalManager({
    open: e,
    onClose: t
  });
  return jsx(ModalRootComponent, {
    manager: _,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsxs(ButtonPrimitive, {
            onClick: t,
            ...stylex.props(tg.goBackButton),
            children: [jsx(_$$t3, {}), a.name]
          })
        })
      }), jsx(DialogBody, {
        children: jsx(tA, {
          resource: 'workspace',
          aiControlsSetting: o,
          setAiControlsSetting: d
        })
      }), jsxs(DialogFooter, {
        children: [tR(a) && jsx(ButtonPrimitive, {
          onClick: c,
          ...stylex.props(tg.removeCustomSettingsButton),
          children: renderI18nText('org_settings.workspace_controls.remove_custom_settings')
        }), jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: t,
            children: renderI18nText('org_settings.general.cancel')
          }), jsx(Button, {
            variant: 'primary',
            onClick: () => {
              workspaceApiService.updateAiControls({
                workspaceId: a.id,
                aiControlsSetting: o
              }).then(() => {
                r(FlashActions.flash(l));
                t();
              }).catch(e => {
                r(FlashActions.error(e.message));
              });
            },
            children: renderI18nText('org_settings.general.save')
          })]
        })]
      })]
    })
  });
}, 'WorkspaceAiControlsModal');
let tI = registerModal(({
  goBack: e,
  workspace: t
}) => {
  let a = useDispatch();
  let s = getI18nString('org_settings.ai_controls.workspace_success');
  let r = useModalManager({
    open: !0,
    onClose: e
  });
  return jsx(ModalRootComponent, {
    manager: r,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('org_settings.export_controls.remove_workspace_export_controls_title')
        })
      }), jsx(DialogBody, {
        children: renderI18nText('org_settings.ai_controls.remove_workspace_ai_controls_body', {
          workspaceName: t.name
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: e,
            children: renderI18nText('org_settings.general.cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: () => {
              workspaceApiService.updateAiControls({
                workspaceId: t.id,
                aiControlsSetting: null
              }).then(() => {
                e();
                e();
                a(FlashActions.flash(s));
              }).catch(e => {
                a(FlashActions.error(e.message));
              });
            },
            children: renderI18nText('org_settings.general.remove')
          })]
        })
      })]
    })
  });
}, 'ResetAIControlSettingsConfirmationModal');
function tT() {
  return jsx(Link, {
    'aria-label': getI18nString('settings_tab.learn_more_about_ai_features'),
    'href': _$$d2.aiFeatures,
    'trusted': !0,
    'newTab': !0,
    'children': getI18nString('general.learn_more')
  });
}
function tA({
  aiControlsSetting: e,
  setAiControlsSetting: t,
  resource: a
}) {
  let i = useId();
  let r = a === 'org' ? renderI18nText('org_settings.ai_controls.let_people_in_your_organization', {
    learnMore: jsx(tT, {})
  }) : renderI18nText('org_settings.ai_controls.let_people_in_your_workspace', {
    learnMore: jsx(tT, {})
  });
  return jsxs('div', {
    className: 'x78zum5 x1q0g3np x1qughib x6s0dn4 x1vamu9a',
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf',
      children: [jsx(Label, {
        'htmlFor': i,
        'aria-describedby': 'ai-features-note',
        'children': jsx('span', {
          ...stylex.props(tC.labelText),
          children: renderI18nText('org_settings.ai_controls.allow_ai_features')
        })
      }), jsx('span', {
        ...stylex.props(tC.noteText),
        id: 'ai-features-note',
        children: r
      })]
    }), jsx(_$$v, {
      id: i,
      checked: e,
      onChange: t
    })]
  });
}
function tR(e) {
  let t = e.workspaceSharedSetting?.aiSetting;
  return t?.status === 'loaded' && !!t.data && typeof t.data == 'string';
}
let tD = 'autogen_password_controls_modal--radioLabel--tmcmf';
let tP = e => e ? 'autogen' : 'custom';
let tU = registerModal(() => {
  let e = useDispatch();
  let t = getI18nString('org_settings.autogen_password_controls.success');
  let a = useSelector(e => e.orgById[e.currentUserOrgId]);
  let r = useSubscription(OrgSharedSettingView, {
    orgId: a.id
  });
  let l = () => e(popModalStack());
  let [o, d] = useState(r.status === 'loaded' ? tP(r.data?.org?.orgSharedSetting?.autogenPasswordControls) : null);
  useEffect(() => {
    r.status === 'loaded' && d(tP(r.data?.org?.orgSharedSetting?.autogenPasswordControls));
  }, [r]);
  return jsx(HeaderModal, {
    title: getI18nString('org_settings.autogen_password_controls.title'),
    onClose: l,
    maxWidth: 380,
    minWidth: 380,
    fixedTop: !0,
    children: jsxs('div', {
      className: 'autogen_password_controls_modal--modalContent--qogS8',
      children: [renderI18nText('org_settings.autogen_password_controls.description'), jsxs(RadioGroup, {
        value: o,
        onChange: e => {
          d(e);
        },
        className: 'autogen_password_controls_modal--radioGroup---6hFh',
        children: [jsxs(RadioOption, {
          value: 'custom',
          labelClassName: tD,
          disabled: r.status === 'loading',
          children: [jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.autogen_password_controls.custom_passwords_button')
          }), jsx('span', {
            children: jsx(TextWithTruncation, {
              color: 'secondary',
              children: renderI18nText('org_settings.autogen_password_controls.default')
            })
          }), jsx('br', {}), jsx(TextWithTruncation, {
            color: 'secondary',
            children: renderI18nText('org_settings.autogen_password_controls.custom_passwords_description')
          })]
        }), jsxs(RadioOption, {
          value: 'autogen',
          labelClassName: tD,
          disabled: r.status === 'loading',
          children: [jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.autogen_password_controls.autogen_passwords_button')
          }), jsx('br', {}), jsx(TextWithTruncation, {
            color: 'secondary',
            children: renderI18nText('org_settings.autogen_password_controls.autogen_passwords_description')
          })]
        })]
      }), jsx(_$$z2, {
        orientation: 'vertical',
        variant: 'brand',
        iconSrc: _$$A4,
        dataTestId: 'password-info-banner',
        children: jsx(TextWithTruncation, {
          children: renderI18nText('org_settings.autogen_password_controls.banner')
        })
      }), jsxs('div', {
        className: 'autogen_password_controls_modal--modalButtons--3GOXX',
        children: [jsx(_$$nR2, {
          onClick: l,
          children: jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.autogen_password_controls.cancel')
          })
        }), jsx(_$$$$, {
          onClick: () => {
            o && (e(Tf({
              orgId: a.id,
              autogenPasswordControl: o === 'autogen',
              settingsId: r.data?.org?.orgSharedSetting?.id,
              successMessage: t
            })), l());
          },
          children: jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.autogen_password_controls.save')
          })
        })]
      })]
    })
  });
}, 'AutogenPasswordControlsModal');
let tF = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = () => e(popModalStack());
  return jsx(HeaderModal, {
    title: getI18nString('settings_tab.scim_metadata_modal.member_metadata'),
    onClose: a,
    maxWidth: 340,
    minWidth: 340,
    children: jsxs('div', {
      className: jE,
      children: [jsx('p', {
        className: wz,
        children: renderI18nText('settings_tab.scim_metadata_modal.change_which_scim_metadata_shows_on_the_members_tab')
      }), jsx(RadioGroup, {
        value: t.featured_scim_metadata,
        onChange: a => e(Kc({
          orgId: t.id,
          attribute: a
        })),
        children: Object.values(FCostCenterType).map(e => jsx(RadioOption, {
          value: e,
          children: getCostCenterTypeString(e)
        }, e))
      }), jsx(ButtonWhite, {
        onClick: a,
        className: Yy,
        children: renderI18nText('settings_tab.scim_metadata_modal.done')
      })]
    })
  });
}, 'ChooseScimMetadata');
let t$ = {
  'current_user:read': {
    id: 'current_user:read',
    category: 'Users',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.current_user_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_your_name_email_and_profile_image')]
  },
  'file_comments:read': {
    id: 'file_comments:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_comments_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_comments_for_files_you_have_access_to')]
  },
  'file_comments:write': {
    id: 'file_comments:write',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_comments_write.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.modify_comments_for_files_you_have_access_to')]
  },
  'file_content:read': {
    id: 'file_content:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.file_content_description_v2'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.file_content_read_description')]
  },
  'file_dev_resources:read': {
    id: 'file_dev_resources:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_dev_resources_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_dev_resources')]
  },
  'file_dev_resources:write': {
    id: 'file_dev_resources:write',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_dev_resources_write.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.create_and_modify_dev_resources')]
  },
  'file_metadata:read': {
    id: 'file_metadata:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.file_metadata_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.file_metadata_read_description')]
  },
  'file_variables:read': {
    id: 'file_variables:read',
    category: 'Files',
    isEnterpriseOnly: !0,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_variables_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_variables_from_files_you_have_access_to')]
  },
  'file_variables:write': {
    id: 'file_variables:write',
    category: 'Files',
    isEnterpriseOnly: !0,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.file_variables_write.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.create_and_modify_variables_for_files_you_have_access_to')]
  },
  'file_versions:read': {
    id: 'file_versions:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.file_versions_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.file_versions_read_description')]
  },
  'files:read': {
    id: 'files:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isDeprecated: !0,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.deprecated_scope.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.file_content_read_description'), getI18nString('tokens.oauth.read_comments_for_files_you_have_access_to'), getI18nString('tokens.oauth.scope.projects_read_description'), getI18nString('tokens.oauth.read_components_and_styles_you_have_access_to'), getI18nString('tokens.oauth.read_your_name_email_and_profile_image')]
  },
  'library_analytics:read': {
    id: 'library_analytics:read',
    category: 'Libraries',
    isEnterpriseOnly: !0,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.library_analytics_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_library_analytics_data')]
  },
  'library_assets:read': {
    id: 'library_assets:read',
    category: 'Libraries',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.library_assets_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.library_asset_read_description')]
  },
  'library_content:read': {
    id: 'library_content:read',
    category: 'Libraries',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.library_content_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.library_content_read_description')]
  },
  'org:activity_log_read': {
    id: 'org:activity_log_read',
    category: 'Orgs',
    isEnterpriseOnly: !0,
    isPlanPrivateOnly: !0,
    getImpersonalDescription: () => getI18nString('tokens.scope.org_activity_log_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.view_user_activity_in_figma_like_opening_files_creating_projects_and_sharing_resources')]
  },
  'projects:read': {
    id: 'projects:read',
    category: 'Projects',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !0,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.projects_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.projects_read_description')]
  },
  'team_library_content:read': {
    id: 'team_library_content:read',
    category: 'Libraries',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.team_library_content_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.team_library_content_read_description')]
  },
  'webhooks:read': {
    id: 'webhooks:read',
    category: 'Webhooks',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.webhooks_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.webhooks_read_description')]
  },
  'webhooks:write': {
    id: 'webhooks:write',
    category: 'Webhooks',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.webhooks_write.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.create_and_modify_webhooks')]
  },
  'org:discovery_read': {
    id: 'org:discovery_read',
    category: 'Orgs',
    isEnterpriseOnly: !0,
    isPlanPrivateOnly: !0,
    getImpersonalDescription: () => getI18nString('tokens.scope.org_discovery_read.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.discovery_scope_description')]
  },
  'selections:read': {
    id: 'selections:read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    ldFlag: 'pixie_get_selections_allowlist',
    getImpersonalDescription: () => getI18nString('tokens.scope.selections_read.impersonal_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.selections_read_description')]
  },
  'file_code_connect:write': {
    id: 'file_code_connect:write',
    category: 'Libraries',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !0,
    getImpersonalDescription: () => getI18nString('tokens.settings.dev_token_modal.scope.code_connect_description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.code_connect_description')]
  },
  'file_create': {
    id: 'file_create',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    isDeprecated: !0,
    getImpersonalDescription: () => getI18nString('tokens.scope.deprecated_scope.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.create_files')]
  },
  'file_enumerate': {
    id: 'file_enumerate',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    isDeprecated: !0,
    getImpersonalDescription: () => getI18nString('tokens.scope.deprecated_scope.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.enumerate_files')]
  },
  'file_read': {
    id: 'file_read',
    category: 'Files',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    isDeprecated: !0,
    getImpersonalDescription: () => getI18nString('tokens.scope.deprecated_scope.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.read_files_you_have_access_to'), getI18nString('tokens.oauth.read_and_modify_comments_for_files_you_have_access_to'), getI18nString('tokens.oauth.read_projects_you_have_access_to'), getI18nString('tokens.oauth.read_components_and_styles_you_have_access_to')]
  },
  'mcp:connect': {
    id: 'mcp:connect',
    category: 'MCP',
    isEnterpriseOnly: !1,
    isPlanPrivateOnly: !1,
    getImpersonalDescription: () => getI18nString('tokens.scope.mcp_connect.description'),
    getPersonalDescription: () => [getI18nString('tokens.oauth.scope.mcp_connect_description')]
  }
};
var tB = (e => (e.ORG_ACTIVITY_LOG_READ = 'org:activity_log_read', e.ORG_DISCOVERY_READ = 'org:discovery_read', e.USER_FILE_READ_DEPRECATED = 'file_read', e.USER_FILE_CREATE = 'file_create', e.USER_FILE_ENUMERATE = 'file_enumerate', e.USER_FILES_READ_DEPRECATING = 'files:read', e.USER_CURRENT_USER_READ = 'current_user:read', e.USER_FILE_CONTENT_READ = 'file_content:read', e.USER_FILE_COMMENTS_READ = 'file_comments:read', e.USER_FILE_COMMENTS_WRITE = 'file_comments:write', e.USER_FILE_DEV_RESOURCES_READ = 'file_dev_resources:read', e.USER_FILE_DEV_RESOURCES_WRITE = 'file_dev_resources:write', e.USER_FILE_METADATA_READ = 'file_metadata:read', e.USER_FILE_VARIABLES_READ = 'file_variables:read', e.USER_FILE_VARIABLES_WRITE = 'file_variables:write', e.USER_FILE_VERSIONS_READ = 'file_versions:read', e.USER_LIBRARY_ANALYTICS_READ = 'library_analytics:read', e.USER_LIBRARY_ASSETS_READ = 'library_assets:read', e.USER_LIBRARY_CONTENT_READ = 'library_content:read', e.USER_PROJECTS_READ = 'projects:read', e.USER_TEAM_LIBRARY_CONTENT_READ = 'team_library_content:read', e.USER_WEBHOOKS_READ = 'webhooks:read', e.USER_WEBHOOKS_WRITE = 'webhooks:write', e.MCP_CONNECT = 'mcp:connect', e.PRIVATE_SELECTIONS_READ = 'selections:read', e))(tB || {});
let tG = {
  'org:activity_log_read': () => [getI18nString('tokens.oauth.view_user_activity_in_figma_like_opening_files_creating_projects_and_sharing_resources')],
  'org:discovery_read': () => [getI18nString('tokens.oauth.discovery_scope_description')],
  'selections:read': () => [getI18nString('tokens.oauth.scope.selections_read_description')],
  'file_read': () => [getI18nString('tokens.oauth.read_files_you_have_access_to'), getI18nString('tokens.oauth.read_and_modify_comments_for_files_you_have_access_to'), getI18nString('tokens.oauth.read_projects_you_have_access_to'), getI18nString('tokens.oauth.read_components_and_styles_you_have_access_to')],
  'file_create': () => [getI18nString('tokens.oauth.create_files')],
  'file_enumerate': () => [getI18nString('tokens.oauth.enumerate_files')],
  'files:read': () => [getI18nString('tokens.oauth.scope.file_content_read_description'), getI18nString('tokens.oauth.read_comments_for_files_you_have_access_to'), getI18nString('tokens.oauth.scope.projects_read_description'), getI18nString('tokens.oauth.read_components_and_styles_you_have_access_to'), getI18nString('tokens.oauth.read_your_name_email_and_profile_image')],
  'file_content:read': () => [getI18nString('tokens.oauth.scope.file_content_read_description')],
  'file_comments:read': () => [getI18nString('tokens.oauth.read_comments_for_files_you_have_access_to')],
  'file_comments:write': () => [getI18nString('tokens.oauth.modify_comments_for_files_you_have_access_to')],
  'file_dev_resources:read': () => [getI18nString('tokens.oauth.read_dev_resources')],
  'file_dev_resources:write': () => [getI18nString('tokens.oauth.create_and_modify_dev_resources')],
  'file_metadata:read': () => [getI18nString('tokens.oauth.scope.file_metadata_read_description')],
  'file_variables:read': () => [getI18nString('tokens.oauth.read_variables_from_files_you_have_access_to')],
  'file_variables:write': () => [getI18nString('tokens.oauth.create_and_modify_variables_for_files_you_have_access_to')],
  'file_versions:read': () => [getI18nString('tokens.oauth.scope.file_versions_read_description')],
  'library_analytics:read': () => [getI18nString('tokens.oauth.read_library_analytics_data')],
  'library_assets:read': () => [getI18nString('tokens.oauth.scope.library_asset_read_description')],
  'library_content:read': () => [getI18nString('tokens.oauth.scope.library_content_read_description')],
  'current_user:read': () => [getI18nString('tokens.oauth.read_your_name_email_and_profile_image')],
  'projects:read': () => [getI18nString('tokens.oauth.scope.projects_read_description')],
  'team_library_content:read': () => [getI18nString('tokens.oauth.scope.team_library_content_read_description')],
  'webhooks:read': () => [getI18nString('tokens.oauth.scope.webhooks_read_description')],
  'webhooks:write': () => [getI18nString('tokens.oauth.create_and_modify_webhooks')],
  'mcp:connect': () => [getI18nString('tokens.oauth.scope.mcp_connect_description')]
};
let tz = 'connected_apps--modalContent--WhP9e';
let tV = 'connected_apps--tokenMeta--i-YbR';
let tW = 'connected_apps--buttonBox--kFfUo';
let tH = 'connected_apps--button--xL-AQ';
let tY = 'connected_apps--columnScope--4ZV2h table--column--974RA';
let tJ = 'connected_apps--columnDescription--Dz0ts table--column--974RA';
function tX(e) {
  return jsxs('div', {
    role: 'button',
    tabIndex: 0,
    className: 'connected_apps--tokenRow--5aooy',
    onClick: e.onClick,
    children: [jsx('div', {
      children: jsx('img', {
        src: e.token.logo,
        alt: '',
        className: 'connected_apps--logoImage--lmidS'
      })
    }), jsxs('div', {
      className: 'connected_apps--tokenInfo--pGVC6',
      children: [jsx('div', {
        className: 'connected_apps--tokenName--NTQJi',
        children: e.token.name
      }), jsx('div', {
        className: tV,
        children: renderI18nText('settings_tab.connected_apps.connected_since', {
          date: dayjs(e.token.granted_at).format('LL')
        })
      }), jsx('div', {
        className: tV,
        children: renderI18nText('settings_tab.connected_apps.scopes_granted', {
          numScopes: e.token.scopes?.length ?? 1
        })
      })]
    }), e.onClick && jsx(SvgComponent, {
      svg: _$$A5,
      className: 'connected_apps--caret--94bA6'
    })]
  }, e.token.name);
}
let tQ = registerModal(e => {
  let t = useDispatch();
  let a = () => t(popModalStack());
  return jsx(HeaderModal, {
    title: getI18nString('settings_tab.connected_apps.revoke_app', {
      appName: e.token.name
    }),
    onClose: a,
    maxWidth: 462,
    minWidth: 462,
    children: jsxs('div', {
      className: tz,
      children: [jsx('p', {
        className: 'connected_apps--confirmText--thJul',
        children: renderI18nText('settings_tab.connected_apps.are_you_sure', {
          appName: jsx('span', {
            style: {
              fontWeight: 600
            },
            children: e.token.name
          }),
          orgName: e.org.name
        })
      }), jsxs('div', {
        className: tW,
        children: [jsx(ButtonSecondary, {
          className: tH,
          onClick: a,
          children: renderI18nText('general.back')
        }), jsx(ButtonNegative, {
          className: tH,
          onClick: () => {
            t(popModalStack());
            sendWithRetry.del(`/api/oauth/token/${e.org.id}/${e.token.client_id}`).then(a => {
              t(FlashActions.flash(getI18nString('settings_tab.connected_apps.oauth_token_deleted')));
              t(popModalStack());
              e.onRevoke();
            }).catch(e => {
              t(FlashActions.error(e.data?.message || getI18nString('settings_tab.connected_apps.an_error_occurred_while_deleting_the_token'), 5e3));
              console.error(e);
            });
          },
          children: renderI18nText('settings_tab.connected_apps.revoke')
        })]
      })]
    })
  });
}, 'REVOKE_APP_MODAL');
let tZ = registerModal(e => {
  let t = useDispatch();
  let [a, r] = useState([]);
  let [l, o] = useState(!0);
  useEffect(() => {
    organizationAPIService.getOauthConnections({
      orgId: e.org.id
    }).then(({
      data: e
    }) => {
      r(e.meta);
      o(!1);
    }).catch(e => {
      t(FlashActions.error(getI18nString('settings_tab.connected_apps.error_loading_tokens')));
      o(!1);
    });
  }, [t, e.org.id]);
  let d = null;
  d = l ? jsx('div', {
    className: 'connected_apps--loading--335P4',
    children: jsx(LoadingSpinner, {})
  }) : a.length === 0 ? jsx('p', {
    className: 'connected_apps--noToken--giQ0J',
    children: renderI18nText('settings_tab.connected_apps.this_org_does_not_have_any_connected_apps', {
      orgName: e.org.name
    })
  }) : jsx('div', {
    children: a.map(s => jsx(tX, {
      token: s,
      onClick: () => {
        t(showModalHandler({
          type: t0,
          data: {
            org: e.org,
            token: s,
            onRevoke: () => {
              r(a.filter(e => e.client_id !== s.client_id));
            }
          }
        }));
      }
    }, s.client_id))
  });
  return jsx(HeaderModal, {
    title: getI18nString('settings_tab.connected_apps'),
    onClose: () => t(popModalStack()),
    maxWidth: 462,
    minWidth: 462,
    children: jsxs('div', {
      className: tz,
      children: [jsx('p', {
        className: 'connected_apps--sectionInstruction--ROaAC',
        children: renderI18nText('settings_tab.connected_apps.instruction')
      }), d]
    })
  });
}, 'ConnectedAppsModal');
let t0 = registerModal(e => {
  let t = useDispatch();
  return jsx(HeaderModal, {
    title: e.token.name,
    onClose: () => t(popModalStack()),
    maxWidth: 462,
    minWidth: 462,
    children: jsxs('div', {
      className: tz,
      children: [jsx(tX, {
        token: e.token
      }), jsx('p', {
        children: renderI18nText('settings_tab.connected_apps.scope_description')
      }), jsxs('div', {
        className: 'connected_apps--scopeTable--QHd25',
        children: [jsxs('div', {
          className: 'connected_apps--headerRow--4oKHB',
          children: [jsx('div', {
            className: tY,
            children: renderI18nText('settings_tab.connected_apps.o_auth_scope')
          }), jsx('div', {
            className: tJ,
            children: renderI18nText('settings_tab.connected_apps.description')
          })]
        }), e.token.scopes?.map(e => {
          let t = getFeatureFlags().ext_use_scope_registry_for_oauth_descs ? t$[e]?.getPersonalDescription() ?? [] : tG[e]() ?? [];
          return jsxs('div', {
            className: 'connected_apps--tableRow--NkX0O',
            children: [jsx('div', {
              className: tY,
              children: jsx('span', {
                children: e
              })
            }), jsx('div', {
              className: tJ,
              children: t.map(e => jsx('div', {
                children: e
              }, e))
            })]
          }, e);
        })]
      }), jsxs('div', {
        className: tW,
        children: [jsx(ButtonSecondary, {
          className: tH,
          onClick: () => {
            t(popModalStack());
          },
          children: renderI18nText('general.back')
        }), jsx(ButtonNegative, {
          className: tH,
          onClick: () => {
            t(showModalHandler({
              type: tQ,
              data: {
                org: e.org,
                token: e.token,
                onRevoke: e.onRevoke
              }
            }));
          },
          children: renderI18nText('settings_tab.connected_apps.revoke')
        })]
      })]
    })
  });
}, 'ConnectedAppModal');
let t5 = t4;
function aj({
  onClick: e,
  onChange: t,
  value: a,
  error: s,
  buttonText: r
}) {
  let l = useTeamPlanFeatures().unwrapOr(null);
  let o = getParentOrgIdIfOrgLevel(l);
  let d = l?.name;
  let c = useDispatch();
  let _ = jsx(SecureLink, {
    onClick: () => {
      if (desktopAPIInstance) {
        c(selectViewAction({
          view: 'org',
          orgId: o ?? '',
          orgViewTab: _$$X.PLUGINS
        }));
        c(hideModal());
      } else {
        let e = `/files/${o}/plugins`;
        c(openUrlInContext({
          url: e
        }));
      }
    },
    trusted: !0,
    children: d
  });
  let u = jsx(SecureLink, {
    onClick: () => {
      c(openUrlInContext({
        url: '/community/plugins/devmode'
      }));
    },
    trusted: !0,
    children: getI18nString('community.community')
  });
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.gap8.py8.$,
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('settings_tab.paste_plugin_link', {
          orgLink: _,
          communityLink: u
        })
      }), jsxs('div', {
        className: cssBuilderInstance.flex.$,
        children: [jsx(BigTextInputForwardRef, {
          className: cssBuilderInstance.flexGrow1.mr8.$,
          onChange: t,
          value: a,
          placeholder: generateDefaultCommunityPluginUrl(),
          recordingKey: 'devRelatedLinkUrlInput'
        }), jsx(_$$$, {
          onClick: e,
          children: r
        })]
      })]
    }), s && jsx('div', {
      className: cssBuilderInstance.colorTextDanger.$,
      children: s
    })]
  });
}
function ay() {
  return jsx('div', {
    className: cssBuilderInstance.colorBorder.bSolid.bt1.$
  });
}
let aE = atom(!1);
let aC = atom(!1);
let aS = atom(!1);
let aN = atom('');
let aI = atom(null);
let aT = atom(null);
let aA = atom('');
let aR = atom(null);
var aO = (e => (e.AUTO_RUN = 'auto-run', e.PINNED_PLUGINS = 'pinned-plugins', e.CODEGEN = 'codegen', e))(aO || {});
async function aL(e, t, a) {
  let n;
  let s = extractPluginIdFromUrl(e);
  let i = {
    errorMessage: getI18nString('settings_tab.pinned_plugins_invalid_url')
  };
  if (s == null) return i;
  try {
    n = await subscribeAndAwaitData(Plugin, {
      pluginId: s,
      orgId: t.id
    });
  } catch (e) {
    return i;
  }
  if (!n.plugin) return i;
  let r = createPluginManifestData(n.plugin, t.id, null, null);
  return r ? t.plugins_whitelist_enforced && !a[r.plugin_id] && r.org_id !== t.id ? {
    errorMessage: getI18nString('settings_tab.invalid_url_allowlist')
  } : r && !isDevModePlugin(r) ? i : {
    pluginId: s,
    plugin: r
  } : i;
}
function aD({
  text: e
}) {
  return jsx('div', {
    className: cssBuilderInstance.mx8.$,
    children: jsx(TextWithTruncation, {
      color: 'default',
      children: e
    })
  });
}
function aM({
  preferences: e
}) {
  return jsx(_$$_.Group, {
    axis: 'y',
    onReorder: t => {
      e.updatePrefs(t);
    },
    values: e.pinnedPlugins,
    role: 'button',
    tabIndex: 0,
    translate: 'no',
    children: e.pinnedPlugins.map(t => jsx(_$$_.Item, {
      value: t,
      id: t.plugin_id,
      translate: 'no',
      children: jsxs('div', {
        className: cssBuilderInstance.justifyBetween.flex.h32.alignCenter.$,
        children: [jsxs('div', {
          className: cssBuilderInstance.flex.itemsCenter.$,
          children: [jsx(PluginImage, {
            className: cssBuilderInstance.w16.h16.br2.$,
            plugin: t
          }), jsx('div', {
            className: cssBuilderInstance.h32.flex.itemsCenter.mx4.alignLeft.$,
            children: t.name
          })]
        }), jsx('div', {
          className: cssBuilderInstance.justifyEnd.$,
          children: jsx(_$$$, {
            'icon': 'minus-32',
            'onClick': () => {
              e.unpinPlugin(t.plugin_id);
            },
            'onMouseDown': stopPropagation,
            'recordingKey': 'overflow_pins',
            'data-tooltip-type': KindEnum.TEXT,
            'data-tooltip': getI18nString('settings_tab.pinned_plugins_remove'),
            'variant': 'text',
            'dataTestId': 'remove-pinned-plugin-button'
          })
        })]
      })
    }, t.plugin_id))
  });
}
function aP(e) {
  let t = useCurrentUserOrg() || null;
  return jsxs('div', {
    className: cssBuilderInstance.flex.justifyBetween.py8.$,
    children: [jsxs('div', {
      children: [jsx('div', {
        className: cssBuilderInstance.mb4.$,
        children: jsx(TextWithTruncation, {
          fontWeight: 'bold',
          children: e.label
        })
      }), jsx(TextWithTruncation, {
        children: e.description
      })]
    }), jsx(_$$l2, {
      on: e.isActive,
      onChange: a => {
        e.onToggle(a);
        trackEventAnalytics('Dev Mode Setting Toggled', {
          orgId: t?.id ?? '',
          setting: e.sectionName,
          value: a ? 'on' : 'off'
        });
      },
      disabled: !isBigmaEnabledSimple(t) && !e.isActive,
      dataTestId: `dev-mode-setting-toggle-${e.label.split(' ').map(e => e.toLowerCase()).join('-')}`
    })]
  });
}
function aU({
  preferences: e
}) {
  let t = useCurrentUserOrg() || null;
  let a = useSelector(e => e.whitelistedPlugins);
  let [r, l] = useState(!1);
  let [o, d] = useAtomValueAndSetter(aE);
  let [_, u] = useAtomValueAndSetter(aA);
  let [m, p] = useAtomValueAndSetter(aR);
  let g = getFeatureFlags().dev_mode_org_pinned_plugins_ent && isBigmaEnabledSimple(t) || !getFeatureFlags().dev_mode_org_pinned_plugins_ent;
  let h = () => {
    l(!r);
  };
  let x = e => {
    u(e.target.value);
  };
  let b = async () => {
    if (!t) return;
    let n = await aL(_, t, a);
    'plugin' in n ? n.plugin ? isSingleDevWithCodegen(n.plugin) ? p(getI18nString('settings_tab.pinned_plugins_invalid_url_codegen')) : 'pluginId' in n && (e.pinPlugin(n.pluginId), p(null), u(''), h()) : p(getI18nString('settings_tab.pinned_plugins_invalid_url')) : 'errorMessage' in n && p(n.errorMessage);
  };
  return jsxs('div', {
    'className': cssBuilderInstance.m16.$,
    'data-testid': 'dev-mode-settings-modal-pinned-plugins',
    'children': [getFeatureFlags().dev_mode_org_pinned_plugins_ent ? jsxs('div', {
      className: cssBuilderInstance.mb8.$,
      children: [jsx('div', {
        className: cssBuilderInstance.if(!isBigmaEnabledSimple(t) && !o, cssBuilderInstance.opacity0_5).$,
        children: jsx(aP, {
          label: getI18nString('settings_tab.pinned_plugins_label'),
          description: getI18nString('settings_tab.pinned_plugins_description'),
          isActive: o,
          sectionName: 'pinned-plugins',
          onToggle: () => {
            d(!o);
          }
        })
      }), !isBigmaEnabledSimple(t) && e && e.pinnedPlugins.length > 0 && jsx(aF, {})]
    }) : jsxs(Fragment, {
      children: [jsx('div', {
        className: cssBuilderInstance.mb4.$,
        children: jsx(TextWithTruncation, {
          fontWeight: 'bold',
          children: renderI18nText('settings_tab.pinned_plugins_label')
        })
      }), jsx('div', {
        children: jsx(TextWithTruncation, {
          children: renderI18nText('settings_tab.pinned_plugins_description')
        })
      })]
    }), o && !e.loaded ? jsx(LoadingSpinner, {
      className: cssBuilderInstance.pt8.flex.alignCenter.justifyCenter.$
    }) : getFeatureFlags().dev_mode_org_pinned_plugins_ent ? o && jsxs(Fragment, {
      children: [jsx(aM, {
        preferences: e
      }), jsx('div', {
        className: cssBuilderInstance.flex.bSolid.b1.bRadius3.colorBorder.h40.my16.$,
        children: jsxs('div', {
          className: cssBuilderInstance.flex.itemsCenter.justifyBetween.wFull.px8.$,
          children: [jsxs('div', {
            className: cssBuilderInstance.flex.$,
            children: [jsx('div', {
              className: cssBuilderInstance.flex.mx8.$,
              children: jsx(TextWithTruncation, {
                color: 'secondary',
                fontWeight: 'medium',
                children: renderI18nText('settings_tab.pinned_plugins_inspect')
              })
            }), jsx('div', {
              className: cssBuilderInstance.flex.mx8.$,
              children: jsx(TextWithTruncation, {
                color: 'secondary',
                fontWeight: 'medium',
                children: renderI18nText('settings_tab.pinned_plugins_plugins')
              })
            })]
          }), jsxs('div', {
            className: cssBuilderInstance.flex.itemsCenter.$,
            children: [g && jsx('div', {
              className: cssBuilderInstance.mr1.$,
              children: jsx(_$$$, {
                icon: 'plus-32',
                variant: r ? 'primary' : 'text',
                onClick: h,
                ariaLabel: getI18nString('settings_tab.pinned_plugins_add_label')
              })
            }), e.pinnedPlugins.length > 0 && jsx(pG, {
              ...e
            })]
          })]
        })
      }), r && jsx(aj, {
        value: _,
        onClick: b,
        onChange: x,
        error: m,
        buttonText: getI18nString('settings_tab.pinned_plugins_add')
      })]
    }) : jsxs(Fragment, {
      children: [g && jsxs('div', {
        className: cssBuilderInstance.flex.py12.$,
        children: [jsx(BigTextInputForwardRef, {
          className: cssBuilderInstance.flexGrow1.mr8.$,
          onChange: x,
          value: _,
          placeholder: generateDefaultCommunityPluginUrl(),
          recordingKey: 'devRelatedLinkUrlInput'
        }), jsx(_$$$, {
          onClick: b,
          children: renderI18nText('settings_tab.pinned_plugins_add')
        })]
      }), m && jsx('div', {
        className: cssBuilderInstance.colorTextDanger.$,
        children: m
      }), jsx(aM, {
        preferences: e
      }), jsx('div', {
        className: cssBuilderInstance.flex.bSolid.b1.bRadius3.colorBorder.h32.my12.$,
        children: jsxs('div', {
          className: cssBuilderInstance.flex.itemsCenter.justifyBetween.wFull.px8.$,
          children: [jsx('div', {
            className: cssBuilderInstance.flex.mx8.$,
            children: jsx(TextWithTruncation, {
              fontWeight: 'bold',
              children: renderI18nText('settings_tab.pinned_plugins_inspect')
            })
          }), jsx('div', {
            className: cssBuilderInstance.flex.mx8.$,
            children: jsx(TextWithTruncation, {
              fontWeight: 'regular',
              children: renderI18nText('settings_tab.pinned_plugins_plugins')
            })
          }), jsx('div', {
            className: cssBuilderInstance.flexGrow1.$,
            children: e.pinnedPlugins.length > 0 && jsx(pG, {
              ...e
            })
          })]
        })
      })]
    })]
  });
}
function aF() {
  return jsx(_$$z2, {
    variant: 'warning',
    orientation: 'vertical',
    iconSrc: _$$A7,
    children: renderI18nText('settings_tab.pinned_plugins_downgrade_warning', {
      noteLabel: jsx(TextWithTruncation, {
        fontWeight: 'semi-bold',
        children: renderI18nText('settings_tab.pinned_plugins_dowgrade_warning.note')
      })
    })
  });
}
function aq({
  onCodeLanguageChange: e,
  addCodegenPluginCallback: t,
  currentSavedCodeLanguage: a
}) {
  let s = v4();
  let i = V0({
    codeLanguage: s,
    onChange: e,
    showAddInsteadOfBrowse: !0,
    addCodegenPluginCallback: t,
    currentSavedCodeLanguage: a
  });
  return jsxs('div', {
    'className': cssBuilderInstance.flex.justifyBetween.itemsCenter.wFull.$,
    'data-testid': 'org-admin-codegen-language-row',
    'children': [jsx(TextWithTruncation, {
      fontWeight: 'medium',
      children: renderI18nText('settings_tab.codegen_language_dropdown_label')
    }), jsx('div', {
      className: cssBuilderInstance.flex.justifyEnd.$,
      children: jsx(ls, {
        dropdownId: 'ORG_ADMIN_SETTINGS_CODE_LANGUAGE_DROPDOWN',
        codeLanguageApi: i
      })
    })]
  });
}
function a$({
  currentUnit: e,
  onCodeLanguageUnitChange: t
}) {
  return isCodegenSupportedForLanguage() ? jsxs('div', {
    'className': cssBuilderInstance.flex.justifyBetween.itemsCenter.wFull.$,
    'data-testid': 'org-admin-codegen-unit-row',
    'children': [jsx(TextWithTruncation, {
      fontWeight: 'medium',
      children: renderI18nText('settings_tab.codegen_language_unit_dropdown_label')
    }), jsx('div', {
      className: cssBuilderInstance.flex.justifyEnd.mr4.$,
      children: jsx(gn, {
        currentUnit: e || MeasurementUnit.PIXEL,
        onChangeUnit: t
      })
    })]
  }) : null;
}
function aB({
  codeExtensionPreferences: e,
  onCustomSettingsChange: t
}) {
  let a = v4();
  let s = QN();
  let i = getCodegenPreferencesSettings({
    codeLanguage: a,
    plugin: s,
    codeExtensionPreferences: e,
    onChangePreferences: t
  });
  return i.length === 0 ? null : jsx(Fragment, {
    children: i.map(e => jsx(aG, {
      item: e
    }, e.name))
  });
}
function aG({
  item: e
}) {
  return jsxs('div', {
    'className': cssBuilderInstance.flex.justifyBetween.itemsCenter.wFull.$,
    'data-testid': 'org-admin-codegen-plugin-settings-row',
    'children': [jsx(TextWithTruncation, {
      fontWeight: 'medium',
      children: e.displayText
    }), jsx('div', {
      className: cssBuilderInstance.flex.justifyEnd.$,
      children: jsx(jp, {
        item: e
      })
    })]
  });
}
function az({
  preferences: e
}) {
  let t = useCurrentUserOrg() || null;
  let a = useDispatch();
  let [r, l] = useAtomValueAndSetter(aS);
  let [o, d] = useState(null);
  let [c, _] = useState(!1);
  let [u, m] = useState(!1);
  let [p, g] = useState('');
  let [h, x] = useState(void 0);
  useEffect(() => {
    e?.loaded && e?.localCodegenSettings && !c && _(() => (e.localCodegenSettings?.language.type === 'published-plugin' && (x(e.localCodegenSettings.language), a(addPluginToRecentsThunk({
      storeInRecentsKey: FDocumentType.Handoff,
      id: e.localCodegenSettings.language.id,
      version: void 0,
      currentUserId: void 0,
      skipPluginRun: !0
    }))), !0));
  }, [e?.loaded, e?.localCodegenSettings, c, a]);
  useEffect(() => {
    a(syncRecentPluginsThunk({
      storeInRecentsKey: FDocumentType.Handoff
    }));
  }, [a]);
  let b = useSelector(e => e.whitelistedPlugins);
  return jsxs('div', {
    'className': cssBuilderInstance.m16.if(!isBigmaEnabledSimple(t), cssBuilderInstance.opacity0_5).$,
    'id': 'org-admin-codegen-settings',
    'data-testid': 'org-admin-codegen-settings',
    'children': [jsx(aP, {
      label: getI18nString('settings_tab.codegen_language_label'),
      description: getI18nString('settings_tab.codegen_language_description'),
      isActive: r,
      sectionName: 'codegen',
      onToggle: () => {
        l(!r);
      }
    }), r && isBigmaEnabledSimple(t) && (e?.loaded ? jsxs('div', {
      className: cssBuilderInstance.flexColumn.py8.$,
      children: [jsx(aq, {
        onCodeLanguageChange: t => {
          e?.setCodegenSettingsLanguage(t);
          m(!1);
        },
        addCodegenPluginCallback: () => {
          m(!0);
        },
        currentSavedCodeLanguage: h
      }), u && jsx(aj, {
        value: p,
        onClick: () => {
          if (!t || !isBigmaEnabledSimple(t)) {
            d(getI18nString('settings_tab.plugin_not_enterprise_err'));
            return;
          }
          aL(p, t, b).then(t => {
            if ('pluginId' in t && t.plugin) {
              let n = t.plugin;
              if (isDevModeWithCodegen(n)) {
                d(null);
                let t = getCodegenLanguagePreference(n);
                e?.setCodegenSettingsLanguage(t);
                a(addPluginToRecentsThunk({
                  storeInRecentsKey: FDocumentType.Handoff,
                  id: n.plugin_id,
                  version: n.version,
                  currentUserId: void 0,
                  skipPluginRun: !0
                }));
                m(!1);
                g('');
                return;
              }
              d(getI18nString('settings_tab.plugin_not_codegen_err'));
            }
            if ('errorMessage' in t) {
              d(t.errorMessage);
              return;
            }
            d(getI18nString('settings_tab.plugin_invalid_err'));
          }).catch(e => {
            console.error('Error:', e);
          });
        },
        onChange: e => {
          g(e.target.value);
        },
        error: o,
        buttonText: getI18nString('settings_tab.dev_mode_setting_set')
      }), !u && jsxs('div', {
        children: [jsx(a$, {
          currentUnit: e?.localCodegenSettings?.preferences.unit,
          onCodeLanguageUnitChange: t => {
            e?.setCodegenSettingsUnit(t);
          }
        }), jsx(aB, {
          codeExtensionPreferences: e?.localCodegenSettings?.preferences ?? {},
          onCustomSettingsChange: (t, a, n) => {
            e?.setCodegenSettingsCustomSettings(t, n);
          }
        })]
      })]
    }) : jsx(LoadingSpinner, {
      className: cssBuilderInstance.m16.pt8.flex.alignCenter.justifyCenter.$
    }))]
  });
}
function aV({
  plugin: e
}) {
  return e ? jsxs('div', {
    className: cssBuilderInstance.flex.py8.itemsCenter.$,
    children: [jsx(PluginImage, {
      className: cssBuilderInstance.w24.h24.br2.$,
      plugin: e
    }), jsx('div', {
      className: cssBuilderInstance.mx8.$,
      children: jsx(TextWithTruncation, {
        fontWeight: 'semi-bold',
        children: e.name
      })
    })]
  }) : null;
}
function aW() {
  let e = useCurrentUserOrg() || null;
  let t = JA();
  let a = useSelector(e => e.whitelistedPlugins);
  let [r, l] = useAtomValueAndSetter(aC);
  let [o, d] = useAtomValueAndSetter(aN);
  let [c, u] = useAtomValueAndSetter(aI);
  let [m, p] = useAtomValueAndSetter(aT);
  let [g, h] = useState(!1);
  useEffect(() => {
    t.loaded && !g && (u(t.plugin), h(!0));
  }, [t.loaded, t.plugin, u, g, h]);
  return jsxs('div', {
    'className': cssBuilderInstance.m16.if(!isBigmaEnabledSimple(e), cssBuilderInstance.opacity0_5).$,
    'data-testid': 'dev-mode-settings-modal-auto-run',
    'children': [jsx(aP, {
      label: getI18nString('settings_tab.auto_run_label'),
      description: getI18nString('settings_tab.auto_run_description'),
      isActive: r,
      sectionName: 'auto-run',
      onToggle: () => {
        l(!r);
      }
    }), r && isBigmaEnabledSimple(e) && jsx('div', {
      children: g ? jsx(Fragment, {
        children: c ? jsxs(Fragment, {
          children: [jsx(aV, {
            plugin: c
          }), jsx('div', {
            className: cssBuilderInstance.py8.$,
            children: jsx(SecureLink, {
              trusted: !0,
              onClick: () => u(null),
              children: renderI18nText('settings_tab.auto_run_remove_plugin')
            })
          })]
        }) : jsx(aj, {
          value: o,
          onClick: () => {
            if (!e || !isBigmaEnabledSimple(e)) {
              p(getI18nString('settings_tab.plugin_not_enterprise_err'));
              return;
            }
            aL(o, e, a).then(t => {
              if ('pluginId' in t && t.plugin) {
                if (_$$aY(t.plugin)) {
                  p(null);
                  u(t.plugin);
                  d('');
                  trackEventAnalytics('Dev Mode Auto Run Plugin Set', {
                    orgId: e.id,
                    pluginId: t.plugin.plugin_id
                  });
                  return;
                }
                p(getI18nString('settings_tab.plugin_not_autorun_err'));
                return;
              }
              if ('errorMessage' in t) {
                p(t.errorMessage);
                return;
              }
              p(getI18nString('settings_tab.plugin_invalid_err'));
            }).catch(e => {
              console.error('Error:', e);
            });
          },
          onChange: e => {
            d(e.target.value);
          },
          error: m,
          buttonText: getI18nString('settings_tab.dev_mode_setting_set')
        })
      }) : jsx(LoadingSpinner, {
        className: cssBuilderInstance.pt8.flex.alignCenter.justifyCenter.$
      })
    })]
  });
}
let aH = registerModal(() => {
  let e = useCurrentUserOrg() || null;
  let t = useDispatch();
  let a = setupOrgPluginPreferences();
  let [r, l] = useAtomValueAndSetter(aC);
  let [o, d] = useAtomValueAndSetter(aE);
  let [_, u] = useAtomValueAndSetter(aS);
  let m = Xr(aT);
  let p = Xr(aR);
  let g = Xr(aN);
  let h = Xr(aI);
  let b = Xr(aA);
  useEffect(() => () => {
    m(null);
    p(null);
    g('');
    h(null);
    b('');
  }, [g, m, h, b, p]);
  let v = useAtomWithSubscription(aI);
  let f = useSubscription(ToggledDevModeSettingsView, {
    targetOrgId: e?.id ?? '',
    targetUserId: null
  });
  useEffect(() => {
    f.status === 'loaded' && (d(f.data?.pluginPreferences?.pinnedPluginsEnabled || !1), l(f.data?.pluginPreferences?.autoRunEnabled || !1), u(f.data?.pluginPreferences?.codegenEnabled || !1));
  }, [f.status, f.data, d, l, u]);
  let y = setupOrgPluginPreferences().serialize();
  let k = JA();
  let C = useMemo(() => ({
    preferences: y,
    autoRunPlugin: k.plugin,
    autoRunEnabled: f.data?.pluginPreferences?.autoRunEnabled,
    codegenEnabled: f.data?.pluginPreferences?.codegenEnabled,
    pinnedPluginsEnabled: f.data?.pluginPreferences?.pinnedPluginsEnabled
  }), [f.data, k, y]);
  let N = getCurrentTeam();
  let I = trackOrgEventWithStore();
  let A = () => {
    a?.setCodegenSettings(null);
    t(popModalStack());
  };
  let R = async () => {
    if (e) {
      I('Dev Handoff Org Commit Plugin Changes', {});
      let n = a?.serialize();
      !isBigmaEnabledSimple(e) && n && (n.codegenSettings = null, n.removedInheritedPins = []);
      try {
        await _$$s5.updateOrgPreferences(e, {
          preferences: n,
          auto_run_plugin_id: v ? v.plugin_id : null,
          auto_run_enabled: !!v && r,
          codegen_enabled: _,
          pinned_plugins_enabled: a.pinnedPlugins.length > 0 && o
        });
      } catch (e) {
        t(VisualBellActions.enqueue({
          message: 'Failed to save dev mode preferences',
          error: !0
        }));
      }
    }
    t(popModalStack());
  };
  return jsxs(HeaderModal, {
    title: jsx(aD, {
      text: getI18nString('settings_tab.dev_mode_label')
    }),
    onClose: A,
    fixedTop: !0,
    children: [jsx(aU, {
      preferences: a
    }), jsx(ay, {}), jsx(az, {
      preferences: a
    }), jsx(ay, {}), jsx(aW, {}), !isBigmaEnabledSimple(e) && getFeatureFlags().dev_mode_org_pinned_plugins_ent && jsx('div', {
      className: cssBuilderInstance.m16.$,
      children: jsxs(_$$z2, {
        orientation: 'vertical',
        iconSrc: _$$A6,
        variant: 'gray',
        children: [jsx(TextWithTruncation, {
          fontWeight: 'bold',
          children: renderI18nText('settings_tab.customize_dev_mode')
        }), jsx(TextWithTruncation, {
          children: renderI18nText('settings_tab.upgrade_to_enterprise_plan_text')
        }), jsx(SecureLink, {
          onClick: () => {
            t(showModalHandler({
              type: ConsumptionPaywallModalPlansPricing,
              data: {
                team: N,
                resource: FeatureFlag.DEV_MODE_ADMIN_SETTINGS,
                currentPlan: consumptionPaywallUtils.Plan.ORG,
                upsellPlan: consumptionPaywallUtils.Plan.ENTERPRISE,
                editorType: null
              }
            }));
          },
          trusted: !0,
          children: jsx(TextWithTruncation, {
            children: renderI18nText('settings_tab.upgrade_to_enterprise_learn_more_link')
          })
        })]
      })
    }), jsxs('div', {
      className: cssBuilderInstance.flex.flexRow.gap8.justifyEnd.m16.$,
      children: [jsx(_$$$, {
        onClick: A,
        children: renderI18nText('general.cancel')
      }), jsx(_$$$, {
        variant: 'primary',
        onClick: R,
        disabled: !(!(t5()(C.preferences, a.serialize()) && t5()(C.autoRunPlugin, v)) || C.autoRunEnabled !== r || C.codegenEnabled !== _ || C.pinnedPluginsEnabled !== o),
        children: renderI18nText('general.save')
      })]
    })]
  });
}, 'DevModeModal');
let aK = registerModal(e => {
  let [t, a, s] = e.platform === 'win' ? [getI18nString('org_admin_settings.enterprise_installer_label'), 'https://help.figma.com/hc/articles/14172933259287', `https://desktop.figma.com/win/Figma-${e.version}.msi`] : [getI18nString('org_admin_settings.enterprise_installer_label_mac'), 'https://help.figma.com/hc/articles/17686512113175', `https://desktop.figma.com/mac-universal/Figma-${e.version}.pkg`];
  return jsxs(ConfirmationModal2, {
    confirmationTitle: t,
    confirmText: getI18nString('org_admin_settings.enterprise_installer_confirmation'),
    onConfirm: () => window.location.href = s,
    tintedModalBackground: !0,
    children: [renderI18nText(e.platform === 'win' ? 'org_admin_settings.enterprise_installer_modal_copy' : 'org_admin_settings.enterprise_installer_modal_copy_mac'), jsx(BaseLinkComponent, {
      href: a,
      target: '_blank',
      trusted: !0,
      children: renderI18nText('org_admin_settings.enterprise_installer_modal_link')
    }), renderI18nText('org_admin_settings.enterprise_installer_modal_release_version', {
      version: e.version
    }), jsx('br', {}), renderI18nText('org_admin_settings.enterprise_installer_modal_release_date', {
      releaseDate: new Date(e.releaseDate || Date.now()).toLocaleDateString()
    })]
  });
}, 'EnterpriseInstallerModal');
function a1(e) {
  return !!e.workspaceSharedSetting?.fileExportSetting;
}
function a2(e) {
  return a1(e) && jsx(_$$P2, {
    exportControlsSetting: e.workspaceSharedSetting.fileExportSetting
  });
}
function a4({
  org: e
}) {
  let t = useDispatch();
  let a = eA();
  let r = [...(a?.data?.org?.workspaces ?? [])];
  sortByPropertyWithOptions(r, 'name');
  let l = useCallback(e => {
    t(showModalHandler({
      type: a8,
      data: {
        workspace: e
      }
    }));
  }, [t]);
  return jsx(ty, {
    org: e,
    loadingStatus: a?.status ?? 'loading',
    allWorkspaces: r,
    displaySettings: l,
    subHeader: renderI18nText('org_settings.workspace_controls.sub_header_text_file_export_controls'),
    workspaceSubText: a2,
    hasCustomSettings: a1
  });
}
function a5({
  exportControlSetting: e,
  setExportControlSetting: t
}) {
  return jsx(Fragment, {
    children: jsxs(RadioInputRoot, {
      value: e,
      onChange: t,
      legend: jsx(Legend, {
        children: renderI18nText('org_settings.export_controls.title')
      }),
      children: [jsx('div', {
        className: 'xfawy5m'
      }), jsx(RadioInputOption, {
        value: 'allowed',
        label: jsx(Label, {
          children: jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.export_controls.by_all_viewers')
          })
        }),
        children: jsx(TextWithTruncation, {
          color: 'secondary',
          children: renderI18nText('org_settings.export_controls.all_viewers_description')
        })
      }), jsx('div', {
        className: 'xfawy5m'
      }), jsx(RadioInputOption, {
        value: 'members_only',
        label: jsx(Label, {
          children: jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.export_controls.prevent_by_guest_viewers')
          })
        }),
        children: jsx(TextWithTruncation, {
          color: 'secondary',
          children: renderI18nText('org_settings.export_controls.prevent_guest_viewers_description')
        })
      }), jsx('div', {
        className: 'xfawy5m'
      }), jsx(RadioInputOption, {
        value: 'banned',
        label: jsx(Label, {
          children: jsx(TextWithTruncation, {
            children: renderI18nText('org_settings.export_controls.prevent_by_all_viewers')
          })
        }),
        children: jsx(TextWithTruncation, {
          color: 'secondary',
          children: renderI18nText('org_settings.export_controls.prevent_all_viewers_description')
        })
      }), jsx('div', {
        className: 'xfawy5m'
      })]
    })
  });
}
let a3 = registerModal(e => {
  let t = useDispatch();
  let a = getI18nString('org_settings.export_controls.success');
  let r = useSelector(e => e.orgById[e.currentUserOrgId]);
  let [l, o] = useState(r.shared_container_setting?.file_export_setting ?? 'allowed');
  let d = useModalManager(e);
  let c = r.tier === FPlanNameType.ENTERPRISE;
  return jsx(ModalRootComponent, {
    manager: d,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('org_settings.export_controls.title')
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          style: {
            padding: '4px'
          }
        }), jsx(TextWithTruncation, {
          children: renderI18nText('org_settings.export_controls.org_description', {
            learnMoreLink: jsx(SecureLink, {
              'href': 'https://help.figma.com/hc/articles/31825370509591#restrict-file-exports',
              'target': '_blank',
              'trusted': !0,
              'aria-label': getI18nString('org_settings.export_controls.learn_more'),
              'children': getI18nString('general.learn_more')
            })
          })
        }), jsx(a5, {
          exportControlSetting: l,
          setExportControlSetting: o
        }), c && jsxs(Fragment, {
          children: [jsx('div', {
            className: 'xfawy5m'
          }), jsx(a4, {
            org: r
          })]
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: e.onClose,
            children: jsx(TextWithTruncation, {
              children: renderI18nText('org_settings.export_controls.cancel')
            })
          }), jsx(Button, {
            variant: 'primary',
            onClick: () => {
              t($w({
                orgId: r.id,
                exportControlSetting: l,
                successMessage: a
              }));
              e.onClose();
            },
            children: jsx(TextWithTruncation, {
              children: renderI18nText('org_settings.export_controls.save')
            })
          })]
        })
      })]
    })
  });
}, 'ExportControlsModal');
let a8 = registerModal(({
  open: e,
  onClose: t,
  workspace: a
}) => {
  let r = useDispatch();
  let l = getI18nString('org_settings.export_controls.workspace_success');
  let o = useSelector(e => e.orgById[e.currentUserOrgId]);
  let [d, c] = useState(a.workspaceSharedSetting?.fileExportSetting ?? o.shared_container_setting?.file_export_setting ?? 'allowed');
  let _ = useCallback(() => {
    r(showModalHandler({
      type: a6,
      data: {
        workspace: a
      }
    }));
  }, [r, a]);
  let u = useModalManager({
    open: e,
    onClose: t
  });
  return jsx(ModalRootComponent, {
    manager: u,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsxs(ButtonPrimitive, {
            onClick: t,
            ...stylex.props(tg.goBackButton),
            children: [jsx(_$$t3, {}), jsx(TextWithTruncation, {
              truncate: !0,
              color: 'default',
              children: a.name
            })]
          })
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          style: {
            padding: '4px'
          }
        }), jsx(TextWithTruncation, {
          children: renderI18nText('org_settings.export_controls.workspace_modal_description')
        }), jsx(a5, {
          exportControlSetting: d,
          setExportControlSetting: c
        })]
      }), jsx(DialogFooter, {
        children: jsxs('div', {
          className: 'x78zum5 x6s0dn4 x1qughib xh8yej3',
          children: [jsx('div', {
            children: a.workspaceSharedSetting?.fileExportSetting && jsx(ButtonPrimitive, {
              onClick: _,
              ...stylex.props(tg.removeCustomSettingsButton),
              children: renderI18nText('org_settings.export_controls_modal.remove_custom_settings')
            })
          }), jsxs('div', {
            className: 'x78zum5 x167g77z',
            children: [jsx(Button, {
              variant: 'secondary',
              onClick: t,
              children: jsx(TextWithTruncation, {
                children: renderI18nText('org_settings.export_controls.cancel')
              })
            }), jsx(Button, {
              variant: 'primary',
              onClick: () => {
                r(KA({
                  orgId: o.id,
                  workspaceId: a.id,
                  exportControlSetting: d,
                  successMessage: l,
                  onClose: t
                }));
              },
              children: jsx(TextWithTruncation, {
                children: renderI18nText('org_settings.export_controls.save')
              })
            })]
          })]
        })
      })]
    })
  });
}, 'WorkspaceExportControlsModal');
let a6 = registerModal(({
  open: e,
  onClose: t,
  workspace: a
}) => {
  let s = useDispatch();
  let r = getI18nString('org_settings.export_controls.workspace_success');
  let l = useSelector(e => e.orgById[e.currentUserOrgId]);
  let o = useModalManager({
    open: e,
    onClose: t
  });
  return jsx(ModalRootComponent, {
    manager: o,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('org_settings.export_controls.remove_workspace_export_controls_title')
        })
      }), jsxs(DialogBody, {
        children: [jsx('div', {
          style: {
            padding: '4px'
          }
        }), jsx(TextWithTruncation, {
          children: renderI18nText('org_settings.export_controls.remove_workspace_export_controls_body', {
            workspaceName: a.name
          })
        }), jsx('div', {
          style: {
            padding: '4px'
          }
        })]
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: t,
            children: jsx(TextWithTruncation, {
              children: renderI18nText('org_settings.export_controls.cancel')
            })
          }), jsx(Button, {
            variant: 'destructive',
            onClick: () => {
              s(vs({
                orgId: l.id,
                workspaceId: a.id,
                exportControlSetting: l.shared_container_setting?.file_export_setting ?? 'allowed',
                successMessage: r,
                onClose: () => {
                  t();
                  s(popModalStack());
                }
              }));
            },
            children: jsx(TextWithTruncation, {
              children: renderI18nText('org_settings.export_controls.remove')
            })
          })]
        })
      })]
    })
  });
}, 'ResetExportControlSettingsConfirmationModal');
let ne = 'external_collaboration_controls_modal--sectionInstruction--X-iN-';
let nt = 'external_collaboration_controls_modal--radioLabel--dMvnM';
let na = 'external_collaboration_controls_modal--listItem--g50IJ';
let nn = 'external_collaboration_controls_modal--confirmButton---8ryZ';
let ns = 'external_collaboration_controls_modal--bold--WoY4e';
let nr = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = () => e(popModalStack());
  let [r, l] = useState(t.shared_container_setting?.external_collaboration_controls);
  let o = !!t.shared_container_setting?.external_collaboration_controls;
  return jsx(TrackingProvider, {
    name: 'External Content Controls Setting Modal',
    properties: {
      orgId: t.id
    },
    children: jsx(HeaderModal, {
      title: getI18nString('org_settings.external_collaboration_controls.header'),
      onClose: a,
      maxWidth: 376,
      minWidth: 376,
      fixedTop: !0,
      children: jsxs('div', {
        className: 'external_collaboration_controls_modal--modalContent--A4isS',
        children: [jsxs('div', {
          className: 'external_collaboration_controls_modal--warningBanner--LnUtG',
          children: [jsx(SvgComponent, {
            className: 'external_collaboration_controls_modal--icon--8UTH3',
            svg: _$$A8
          }), jsx('p', {
            children: renderI18nText('org_settings.external_collaboration_controls.banner', {
              let_org_know: jsx(SecureLink, {
                href: 'https://help.figma.com/hc/articles/12080587805719',
                className: cssBuilderInstance.font11.$,
                trusted: !0,
                children: renderI18nText('org_settings.external_collaboration_controls.let_org_know')
              })
            })
          })]
        }), jsxs('div', {
          className: ne,
          children: [r ? renderI18nText('org_settings.external_collaboration_controls.list_header_setting_on', {
            orgName: t.name,
            cannot: jsx('span', {
              className: ns,
              children: renderI18nText('org_settings.external_collaboration_controls.cannot')
            })
          }) : renderI18nText('org_settings.external_collaboration_controls.list_header_setting_off', {
            orgName: t.name
          }), jsxs('ul', {
            children: [jsx('li', {
              className: na,
              children: renderI18nText('org_settings.external_collaboration_controls.accept_invites')
            }), jsx('li', {
              className: na,
              children: r ? renderI18nText('org_settings.external_collaboration_controls.view_only', {
                note: jsx('span', {
                  className: ns,
                  children: renderI18nText('org_settings.external_collaboration_controls.note')
                })
              }) : renderI18nText('org_settings.external_collaboration_controls.view_or_edit_files')
            }), jsx('li', {
              className: na,
              children: renderI18nText('org_settings.external_collaboration_controls.create')
            }), jsx('li', {
              className: na,
              children: renderI18nText('org_settings.external_collaboration_controls.open_sessions')
            })]
          })]
        }), jsx('p', {
          className: `${ne} ${ns}`,
          children: renderI18nText('org_settings.external_collaboration_controls.setting_header', {
            orgName: t.name
          })
        }), jsxs(RadioGroup, {
          value: r ? 'true' : 'false',
          onChange: e => e === 'true' ? l(!0) : l(!1),
          children: [jsx(RadioOption, {
            value: 'false',
            labelClassName: nt,
            children: renderI18nText('org_settings.external_collaboration_controls.enable')
          }), jsx(RadioOption, {
            value: 'true',
            labelClassName: nt,
            children: renderI18nText('org_settings.external_collaboration_controls.disable')
          })]
        }), jsxs('div', {
          className: v0,
          children: [jsx(ButtonSecondary, {
            onClick: a,
            className: `${pL} ${nn}`,
            children: renderI18nText('org_settings.external_collaboration_controls.cancel')
          }), jsx(ButtonNegative, {
            onClick: () => {
              if (r === o || void 0 === r) {
                a();
                return;
              }
              let t = getI18nString('org_settings.external_collaboration_controls.success');
              e(yo({
                payload: {
                  external_collaboration_controls: r
                },
                successMessage: t
              }));
              a();
            },
            disabled: r === o || void 0 === r,
            className: `${pL} ${nn}`,
            children: renderI18nText('org_settings.external_collaboration_controls.save')
          })]
        })]
      })
    })
  });
}, 'ExternalCollaborationControlsModal');
let nd = 'guest_invite_settings_modal--sectionInstruction---T3SG';
let nc = 'guest_invite_settings_modal--radioLabel--Yuqzr';
function n_(e) {
  let t = useDispatch();
  let [a, r] = useState(!1);
  let l = useLatestRef(e.mfaRequiredSetting);
  let o = l === UserTypeEnum.MEMBERS || l === UserTypeEnum.ALL_USERS;
  let d = l === UserTypeEnum.GUESTS || l === UserTypeEnum.ALL_USERS;
  let c = e.mfaRequiredSetting === UserTypeEnum.GUESTS || e.mfaRequiredSetting === UserTypeEnum.ALL_USERS;
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: cssBuilderInstance.flex.alignLeft.mt16.pt10.pb16.$,
      style: styleBuilderInstance.add({
        borderTop: '1px solid var(--color-border)'
      }).$,
      children: jsx(Checkbox, {
        label: jsx(Label, {
          children: renderI18nText('org_settings.guest_control_revamp.require_two_factor_auth_for_guests')
        }),
        checked: c,
        onChange: t => {
          t ? e.setMfaRequiredSetting(o ? UserTypeEnum.ALL_USERS : UserTypeEnum.GUESTS) : e.setMfaRequiredSetting(o ? UserTypeEnum.MEMBERS : null);
        },
        children: renderI18nText('org_settings.guest_control_revamp.mfa_for_guests_description', {
          orgName: e.org.name
        })
      })
    }), !d && c && jsx('div', {
      className: cssBuilderInstance.mb10.$,
      children: e.isLoading ? jsx(LoadingOverlay, {}) : jsx(BannerInsetModal, {
        variant: 'warn',
        children: jsxs(BannerMessage, {
          title: renderI18nText('org_settings.guest_control_revamp.mfa_for_guests_warning.title', {
            numGuests: e.nonMfaGuestCount
          }),
          children: [renderI18nText('org_settings.guest_control_revamp.mfa_for_guests_warning.description', {
            numGuests: e.mfaGuestCount,
            orgName: e.org.name
          }), jsx('button', {
            className: 'guest_invite_settings_modal--brownLink--6LKm9',
            onClick: () => {
              a || (r(!0), t(VisualBellActions.enqueue({
                message: getI18nString('members_table.csv_export.preparing_request'),
                type: 'orgRoster.exportCSV',
                icon: VisualBellIcon.SPINNER
              })), orgUserService.getMemberCSVExport({
                orgId: e.org.id
              }).then(() => {
                t(VisualBellActions.enqueue({
                  message: getI18nString('members_table.csv_export.generating'),
                  type: 'orgRoster.exportCSV',
                  icon: VisualBellIcon.CHECK
                }));
              }, () => {
                t(VisualBellActions.enqueue({
                  message: getI18nString('members_table.csv_export.error'),
                  type: 'orgRoster.exportCSV',
                  icon: VisualBellIcon.EXCLAMATION,
                  error: !0
                }));
              }), r(!1));
            },
            children: renderI18nText('org_settings.guest_control_revamp.mfa_for_guests_warning.download_csv')
          }, 'download-csv')]
        })
      })
    })]
  });
}
let nu = registerModal(e => {
  let t = useDispatch();
  return jsx(ConfirmationModal2, {
    confirmationTitle: getI18nString('org_settings.guest_control.confirm_title'),
    confirmText: getI18nString('org_settings.guest_control.confirm_button'),
    onConfirm: () => {
      t(yo({
        payload: {
          invite_whitelist_guest_invite_setting: e.guestInviteSetting,
          mfa_required: e.mfaRequiredSetting
        },
        successMessage: e.settingString
      }));
    },
    tintedModalBackground: !0,
    children: renderI18nText('org_settings.guest_control.no_guest_confirmation')
  });
}, 'CONFIRM_BAN_GUEST_INVITE_MODAL');
let nm = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = _$$M2(t);
  let r = useSubscription(OrgMfaGuestInfoView, {
    orgId: t.id
  });
  let l = r.status === 'loading' || r.data?.orgMfaGuestInfo?.status !== ResourceStatus.Loaded;
  let [o, d] = useState(t.mfa_required ? t.mfa_required : null);
  let c = r.status === 'loaded' && r.data?.orgMfaGuestInfo?.status === ResourceStatus.Loaded && r.data?.orgMfaGuestInfo?.data || {
    totalGuestCount: 0,
    nonMfaGuestCount: 0
  };
  let _ = Number(c.totalGuestCount);
  let u = Number(c.nonMfaGuestCount);
  let m = useSelector(e => e.orgDomains.domains);
  let p = () => e(popModalStack());
  let [g, h] = useState(t.invite_whitelist_guest_invite_setting);
  return jsxs(HeaderModal, {
    containerClassName: 'guest_invite_settings_modal--modalContainer--yxLS6',
    title: getI18nString('org_settings.guest_control.guest_membership'),
    onClose: p,
    maxWidth: 440,
    minWidth: 440,
    fixedTop: !0,
    children: [jsxs('div', {
      className: 'guest_invite_settings_modal--modalContent--LiE8H',
      children: [jsx('p', {
        className: nd,
        children: renderI18nText('org_settings.guest_control.guest_definition', {
          domains: jsx(ListFormatter, {
            formatType: 'disjunction',
            children: m.map(e => jsxs('span', {
              children: ['@', e.domain]
            }, e.domain))
          })
        })
      }), jsx('p', {
        className: nd,
        style: {
          fontWeight: 500
        },
        children: renderI18nText('org_settings.guest_control.guest_question')
      }), jsxs(RadioGroup, {
        className: cssBuilderInstance.pl10.$,
        value: g ?? 'none',
        onChange: e => {
          let t = e === 'none' ? null : e;
          g !== t && h(t);
        },
        children: [jsxs(RadioOption, {
          value: 'none',
          labelClassName: nc,
          children: [getGuestControlApprovalStatus(null), jsx('span', {
            className: 'guest_invite_settings_modal--secondary--qBSkc',
            children: renderI18nText('org_settings.guest_control.default')
          })]
        }), jsx(RadioOption, {
          value: ApprovalStatusEnum.REQUIRE_APPROVAL,
          labelClassName: nc,
          children: getGuestControlApprovalStatus(ApprovalStatusEnum.REQUIRE_APPROVAL)
        }), jsx(RadioOption, {
          value: ApprovalStatusEnum.BANNED,
          labelClassName: nc,
          children: getGuestControlApprovalStatus(ApprovalStatusEnum.BANNED)
        })]
      }), !Bg(t.shared_container_setting) && g != null && jsx('div', {
        className: J()('guest_invite_settings_modal--publicLinksBanner--5qmdP', a ? cssBuilderInstance.mt16.$ : cssBuilderInstance.my16.$),
        children: renderI18nText('org_settings.guest_control.link_sharing_on', {
          enabled: jsx('span', {
            style: {
              fontWeight: 600
            },
            children: renderI18nText('org_settings.guest_control.enabled')
          }),
          publicLinkSharingSettings: jsx('button', {
            onClick: p,
            className: 'guest_invite_settings_modal--blueLink--2HEzc blue_link--blueLink--9rlnd',
            children: renderI18nText('org_settings.guest_control.public_link_sharing_settings')
          })
        })
      }), a && jsx(n_, {
        mfaRequiredSetting: o,
        setMfaRequiredSetting: d,
        isLoading: l,
        mfaGuestCount: _ - u,
        nonMfaGuestCount: u,
        org: t
      })]
    }), jsxs('div', {
      className: 'guest_invite_settings_modal--footer--44yVi',
      children: [jsx(ButtonSecondary, {
        onClick: p,
        children: renderI18nText('general.cancel')
      }), jsx(ButtonBasePrimary, {
        onClick: () => {
          let a = g !== t.invite_whitelist_guest_invite_setting;
          let n = o !== t.mfa_required;
          if (!a && !n) {
            p();
            return;
          }
          let s = a ? getGuestControlApprovalStatus(g) : n ? getMfaGuestControlSetting(o) : '';
          if (Bg(t.shared_container_setting) || g !== ApprovalStatusEnum.BANNED) {
            let t = {};
            n && (t.mfa_required = o);
            a && (t.invite_whitelist_guest_invite_setting = g);
            e(yo({
              payload: t,
              successMessage: s
            }));
            p();
          } else {
            let t = {
              guestInviteSetting: g,
              settingString: s
            };
            n && (t.mfaRequiredSetting = o);
            e(showModalHandler({
              type: nu,
              data: t
            }));
          }
        },
        className: 'guest_invite_settings_modal--modalSave--PVmaJ modal--confirmButton--SNUDv',
        children: renderI18nText('org_settings.guest_control.save_button')
      })]
    })]
  });
}, 'GuestInviteSettingsModal');
var ng = (e => (e.CONFIGURED = 'configured', e.DEFAULT = 'default', e))(ng || {});
function nh(e) {
  let t = nv(e);
  return {
    ...(t ? {
      [vS.MINUTES]: range(15, 60, 5).map(e => ({
        type: 'option',
        text: e.toString(),
        key: e
      }))
    } : null),
    [vS.HOURS]: range(t ? 1 : 12, 24, 1).map(e => ({
      type: 'option',
      text: e.toString(),
      key: e
    })),
    [vS.DAYS]: range(1, 15, 1).map(e => ({
      type: 'option',
      text: e.toString(),
      key: e
    }))
  };
}
function nx() {
  return {
    timeAmount: {
      key: 14,
      text: '14'
    },
    timeUnit: {
      key: vS.DAYS,
      text: getI18nString('settings_tab.idle_session_timeout_settings_modal.days', {
        timeAmount: 14
      })
    }
  };
}
function nb(e) {
  let {
    timeUnit: {
      key
    },
    timeAmount: {
      key: _key
    }
  } = e;
  switch (key) {
    case vS.MINUTES:
      return _key * Rc;
    case vS.HOURS:
      return _key * _$$r;
    case vS.DAYS:
      return _key * N_;
  }
}
function nv(e) {
  return isGovCluster() || e;
}
function nw(e) {
  let t = useDispatch();
  let a = useDropdownState();
  let s = a?.type === e.id;
  return jsxs(_$$V3, {
    chevronClassName: cssBuilderInstance.mlAuto.$,
    className: cssBuilderInstance.bRadius3.b1.bSolid.colorBorder.wFull.$,
    dispatch: t,
    type: e.id,
    showingDropdown: s,
    children: [e.currentText, s && jsx(_$$V4, {
      dispatch: t,
      dropdownShown: a,
      options: e.options,
      value: e.currentKey,
      onChange: e.onChange
    })]
  });
}
function nk(e) {
  return jsx('div', {
    style: styleBuilderInstance.add({
      marginTop: '-8px'
    }).$,
    className: cssBuilderInstance.colorTextSecondary.ml20.mb8.$,
    children: e.children
  });
}
function nE(e) {
  let {
    key,
    time: {
      unit,
      duration
    }
  } = e.configuredTimeHelperTextOptions;
  let i = getI18nString(`settings_tab.idle_session_timeout.time.${unit}`, {
    duration
  });
  return jsx('div', {
    className: cssBuilderInstance.mt8.font11.fontNormal.colorTextSecondary.$,
    children: renderI18nText(`settings_tab.idle_session_timeout.configured_time_description.${key}`, {
      duration: i
    })
  });
}
let nC = registerModal(e => {
  let t = useDispatch();
  let a = useCurrentUserOrg();
  let r = !!a?.security_add_on_enabled_at;
  let l = nh(r);
  let [o, d] = useState(e.idleTimeoutDurationInSecs ? ng.CONFIGURED : ng.DEFAULT);
  let [c, _] = useState(function (e, t) {
    if (!e) return nx();
    let [a, n] = qr(e);
    return n in nh(t) ? {
      timeAmount: {
        key: a,
        text: a.toString()
      },
      timeUnit: {
        key: n,
        text: getI18nString(`settings_tab.idle_session_timeout_settings_modal.${n}`, {
          timeAmount: a
        })
      }
    } : nx();
  }(e.idleTimeoutDurationInSecs, r));
  let [u, m] = useState(!1);
  let [p, h] = useState(null);
  let x = o === ng.CONFIGURED && e.idleTimeoutDurationInSecs !== nb(c) || e.idleTimeoutDurationInSecs !== null && o === ng.DEFAULT;
  let b = useCallback(e => {
    h(null);
    _(t => ({
      timeUnit: {
        key: t.timeUnit.key,
        text: getI18nString(`settings_tab.idle_session_timeout_settings_modal.${t.timeUnit.key}`, {
          timeAmount: e
        })
      },
      timeAmount: {
        key: e,
        text: e.toString()
      }
    }));
  }, []);
  let v = useCallback(e => {
    _(t => {
      let a = l[e];
      let n = t.timeAmount.key;
      let s = nx().timeAmount;
      if (a) {
        let t = a.find(({
          key: e
        }) => e === n);
        if (t) {
          s = t;
          h(null);
        } else {
          let t = n < a[0].key;
          let i = t ? a[0] : a[a.length - 1];
          s = i;
          h({
            key: t ? 'minimum' : 'maximum',
            time: {
              duration: i.key,
              unit: e
            }
          });
        }
      }
      return {
        timeAmount: {
          key: s.key,
          text: s.text
        },
        timeUnit: {
          key: e,
          text: getI18nString(`settings_tab.idle_session_timeout_settings_modal.${e}`, {
            timeAmount: s.key
          })
        }
      };
    });
  }, [l]);
  let f = useCallback(() => t(popModalStack()), [t]);
  let y = useCallback(() => {
    m(!0);
    let a = o === ng.DEFAULT ? null : nb(c);
    t(Y4({
      orgId: e.orgId,
      onFailure: () => m(!1),
      onSuccess: f,
      timeoutDurationInSecs: a
    }));
  }, [o, c, e.orgId, t, f]);
  let k = useCallback(e => {
    e !== o && (d(e), _(nx()));
  }, [o]);
  return jsx(HeaderModal, {
    title: getI18nString('settings_tab.idle_session_timeout_settings_modal.header'),
    onClose: f,
    maxWidth: 288,
    minWidth: 288,
    fixedTop: !0,
    children: jsxs(AutoLayout, {
      direction: 'vertical',
      horizontalAlignItems: 'center',
      padding: 16,
      spacing: 16,
      children: [renderI18nText('settings_tab.idle_session_timeout_settings_modal.description'), jsxs(RadioGroup, {
        className: cssBuilderInstance.wFull.mt16.$,
        value: o,
        onChange: k,
        children: [jsx(RadioOption, {
          value: ng.DEFAULT,
          children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.default_choice_description')
        }), jsx(nk, {
          children: jsxs(Fragment, {
            children: [renderI18nText('settings_tab.idle_session_timeout_settings_modal.default_choice_timeframe'), jsx('div', {
              className: cssBuilderInstance.inline.$,
              children: jsx(BaseLinkComponent, {
                trusted: !0,
                target: '_blank',
                href: 'https://help.figma.com/hc/articles/14376092335127',
                className: cssBuilderInstance.inline.ml4.$,
                children: renderI18nText('workspace.create_confirmation_modal.description.outro.learn_more')
              })
            })]
          })
        }), jsx(RadioOption, {
          value: ng.CONFIGURED,
          children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.configured_choice_description')
        }), jsx(nk, {
          children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.configured_choice_subtitle')
        }), o === ng.CONFIGURED && jsxs('div', {
          'data-testid': 'dropdown-group',
          'className': cssBuilderInstance.mlAuto.$,
          'children': [jsxs(AutoLayout, {
            direction: 'horizontal',
            horizontalAlignItems: 'end',
            spacing: 8,
            width: 236,
            children: [jsx(nw, {
              id: 'TIME_VALUE_DROPDOWN',
              options: l[c.timeUnit.key] ?? l[nx().timeUnit.key],
              currentText: c.timeAmount.text,
              currentKey: c.timeAmount.key,
              onChange: b
            }), jsx(nw, {
              id: 'TIME_UNIT_DROPDOWN',
              options: function (e, t) {
                let a = [{
                  type: 'option',
                  key: vS.HOURS,
                  text: getI18nString('settings_tab.idle_session_timeout_settings_modal.hours', {
                    timeAmount: e
                  })
                }, {
                  type: 'option',
                  key: vS.DAYS,
                  text: getI18nString('settings_tab.idle_session_timeout_settings_modal.days', {
                    timeAmount: e
                  })
                }];
                nv(t) && a.unshift({
                  type: 'option',
                  key: vS.MINUTES,
                  text: getI18nString('settings_tab.idle_session_timeout_settings_modal.minutes', {
                    timeAmount: e
                  })
                });
                return a;
              }(c.timeAmount.key, r),
              currentText: c.timeUnit.text,
              currentKey: c.timeUnit.key,
              onChange: v
            })]
          }), p && jsx(nE, {
            configuredTimeHelperTextOptions: p
          })]
        })]
      }), o === ng.CONFIGURED && x && jsx('div', {
        className: cssBuilderInstance.bRadius4.px12.py8.colorBgInfo.$,
        children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.warning_description')
      }), jsxs(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'end',
        spacing: 8,
        children: [jsx(ButtonWhite, {
          onClick: f,
          children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.cancel')
        }), jsx(ButtonBasePrimary, {
          disabled: u || !x,
          onClick: y,
          children: renderI18nText('settings_tab.idle_session_timeout_settings_modal.save')
        })]
      })]
    })
  });
}, 'IdleSessionTimeoutSettingsModal');
function nI(e) {
  return e.split(',').map(e => e.trim()).filter(e => e.length > 0);
}
let nT = registerModal(e => {
  let t = useDispatch();
  let a = useCallback(() => t(popModalStack()), [t]);
  let [r, l] = useState(e.ipAllowlistEnabled);
  let o = e.ipAllowlistRanges.map(e => e.ipRange);
  let d = o.join(',\n');
  let [c, _] = useState(d);
  let u = useCallback(e => _(e.currentTarget.value), []);
  let m = nI(c);
  let p = e.ipAllowlistEnabled !== r;
  let g = r && function (e, t) {
    let a = new Set(t);
    let n = new Set(e);
    return !t5()(a, n);
  }(o, m);
  let h = p || g;
  let x = m.length === 0 && r;
  let b = useCallback(() => {
    if (x || !h) {
      a();
      return;
    }
    t(OT({
      orgId: e.orgId,
      onSuccess: a,
      ipAllowlistEnabled: r,
      ipAllowlistRanges: nI(c)
    }));
  }, [x, r, c, e.orgId, t, a, h]);
  return jsxs(ConfirmationModal, {
    maxWidth: 500,
    title: getI18nString('settings_tab.ip_allowlist_label'),
    onClose: a,
    onSubmit: b,
    confirmText: getI18nString('settings_tab.ip_allowlist_modal.save'),
    disabled: x,
    children: [jsxs('div', {
      className: cssBuilderInstance.flex.itemsCenter.justifyBetween.mb16.$,
      children: [jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.$,
        children: [jsx(TextWithTruncation, {
          fontWeight: 'bold',
          children: renderI18nText('settings_tab.ip_allowlist_modal.enable')
        }), jsx(TextWithTruncation, {
          children: renderI18nText('settings_tab.ip_allowlist_modal.enable_description')
        })]
      }), jsx(_$$l2, {
        on: r,
        onChange: l,
        dataTestId: 'ipAllowlistToggle'
      })]
    }), r && jsxs('div', {
      children: [jsx('p', {
        children: jsx(TextWithTruncation, {
          fontWeight: 'bold',
          children: renderI18nText('settings_tab.ip_allowlist_modal.allowed_ranges')
        })
      }), jsx('p', {
        className: cssBuilderInstance.mb8.$,
        children: jsx(TextWithTruncation, {
          color: 'secondary',
          children: renderI18nText('settings_tab.ip_allowlist_modal.input_instructions')
        })
      }), jsx('div', {
        className: cssBuilderInstance.mb12.$,
        children: jsx(_$$v2, {
          value: c,
          placeholder: '0.0.0.0',
          onChange: u,
          minHeight: 128,
          maxHeight: 354,
          focusOnMount: !0
        })
      })]
    }), jsx('div', {
      className: Xu,
      children: jsx(_$$z2, {
        orientation: 'vertical',
        variant: 'brand',
        iconSrc: _$$A4,
        children: jsx(TextWithTruncation, {
          children: renderI18nText('settings_tab.ip_allowlist_modal.not_applied_to_guests')
        })
      })
    })]
  });
}, 'IpAllowlistModal');
function nO(e) {
  return jsxs(ButtonPrimitive, {
    onClick: e.goBack,
    ...props(tg.goBackButton),
    children: [jsx(_$$t3, {}), jsx(TextWithTruncation, {
      truncate: !0,
      color: 'default',
      children: e.workspace.name
    })]
  });
}
let nL = registerModal(({
  goBack: e,
  org: t,
  workspace: a
}) => {
  let l = useDispatch();
  let {
    formState,
    formActions
  } = Cf(t, a.workspaceSharedSetting?.publicLinkControlsSetting || null, a.workspaceSharedSetting?.publicLinkControlsMaxExpiration ? a.workspaceSharedSetting.publicLinkControlsMaxExpiration : null);
  let c = (e, t) => e === formState.initialPublicLinkControlsSetting && a.workspaceSharedSetting?.publicLinkControlsMaxExpiration && t === a.workspaceSharedSetting.publicLinkControlsMaxExpiration;
  let _ = useCallback(() => {
    l(showModalHandler({
      type: nD,
      data: {
        workspace: a,
        goBack: e
      }
    }));
  }, [l, a, e]);
  let u = useModalManager({
    open: !0,
    onClose: e
  });
  return jsx(ModalRootComponent, {
    manager: u,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: jsx(nO, {
            workspace: a,
            goBack: e
          })
        })
      }), jsx(DialogBody, {
        children: jsxs('div', {
          className: 'xipvkqc',
          children: [jsx(kJ, {
            isPublicLinksBanned: formState.isPublicLinksBanned,
            togglePublicLinksBanned: formActions.togglePublicLinksBanned,
            labelText: getI18nString('settings_tab.public_sharing.workspace_public_sharing_label'),
            subText: getI18nString('settings_tab.public_sharing.workspace_public_sharing_subtext')
          }), !formState.isPublicLinksBanned && jsx(_$$t4, {
            displayExpiration: t.tier === r.Agb.ENTERPRISE,
            doPublicLinksRequireExpiration: formState.doPublicLinksRequireExpiration,
            doPublicLinksRequirePassword: formState.doPublicLinksRequirePassword,
            togglePublicLinksRequirePassword: formActions.togglePublicLinksRequirePassword,
            togglePublicLinksRequireExpiration: formActions.togglePublicLinksRequireExpiration
          }), !formState.isPublicLinksBanned && formState.doPublicLinksRequireExpiration && jsx(Zm, {
            inputValue: formState.maxDuration,
            onChange: formActions.changeMaxDuration,
            errorMessage: formState.durationErrorMessage,
            dropdownKey: 'workspace-public-sharing-modal-expiration-dropdown',
            dropdownText: ZA(formState.isTimeMeasuredInDays),
            options: formActions.dropdownOptions,
            onChangeTimeScale: formActions.onChangeTimeScale,
            currentTimeScale: formState.isTimeMeasuredInDays ? 'days' : 'hours'
          })]
        })
      }), jsxs(DialogFooter, {
        children: [a.workspaceSharedSetting !== null && a.workspaceSharedSetting?.publicLinkControlsSetting !== null && jsx(ButtonPrimitive, {
          onClick: _,
          ...props(tg.removeCustomSettingsButton),
          children: renderI18nText('org_settings.workspace_controls.remove_custom_settings')
        }), jsx(DialogActionStrip, {
          children: jsx(Ym, {
            cancel: e,
            canSave: formState.canSave,
            save: () => {
              let t = _$$eZ(formState);
              let n = zz(formState, l);
              if (fJ(formState.maxDuration, formState.isTimeMeasuredInDays)) {
                if (c(t, n) && a.workspaceSharedSetting !== null && a.workspaceSharedSetting?.publicLinkControlsSetting !== null) return e();
                workspaceApiService.updatePublicLinkControlsSetting({
                  workspaceId: a.id,
                  publicLinkControlsSetting: t,
                  publicLinkControlsMaxExpiration: n
                }).then(() => {
                  l(FlashActions.flash(getI18nString('setting_tab.successfully_updated_workspace_public_link_controls')));
                  e();
                }).catch(() => {
                  l(FlashActions.error(getI18nString('org_actions.an_error_occurred')));
                });
              }
            }
          })
        })]
      })]
    })
  });
}, 'WorkspacePublicSharingModal');
let nD = registerModal(({
  workspace: e,
  goBack: t
}) => {
  let a = useDispatch();
  let s = useModalManager({
    open: !0,
    onClose: t
  });
  return jsx(ModalRootComponent, {
    manager: s,
    height: 'dynamic',
    width: 'lg',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('settings_tab.public_sharing.remove_custom_workspace_settings')
        })
      }), jsx(DialogBody, {
        children: jsx('div', {
          className: 'x1mzt3pk xeaf4i8 x13faqbe',
          children: renderI18nText('setting_tab.remove_custom_workspace_setting_warning', {
            workspaceName: e.name
          })
        })
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            onClick: t,
            variant: 'secondary',
            children: renderI18nText('setting_tab.public_sharing.modal.cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: () => {
              workspaceApiService.updatePublicLinkControlsSetting({
                workspaceId: e.id,
                publicLinkControlsSetting: null,
                publicLinkControlsMaxExpiration: null
              }).then(() => {
                a(FlashActions.flash(getI18nString('setting_tab.successfully_updated_workspace_public_link_controls')));
                t();
                t();
              }).catch(() => {
                a(FlashActions.error(getI18nString('org_actions.an_error_occurred')));
              });
            },
            children: renderI18nText('setting_tab.public_sharing.modal.remove')
          })]
        })
      })]
    })
  });
}, 'ResetWorkspaceCustomSettingsWarningModal');
function nM({
  org: e
}) {
  let t = eA();
  let a = useDispatch();
  let r = [...(t?.data?.org?.workspaces ?? [])];
  sortByPropertyWithOptions(r, 'name');
  let l = useCallback(t => {
    a(showModalHandler({
      type: nL,
      data: {
        org: e,
        workspace: t,
        goBack: () => a(popModalStack())
      }
    }));
  }, [a, e]);
  return jsx(ty, {
    org: e,
    loadingStatus: t?.status ?? 'loading',
    allWorkspaces: r,
    displaySettings: l,
    subHeader: renderI18nText('org_settings.workspace_controls.sub_header_text'),
    workspaceSubText: e => nP(e) && jsx(_$$s6, {
      publicLinkControlsSetting: e.workspaceSharedSetting.publicLinkControlsSetting
    }),
    hasCustomSettings: nP
  });
}
function nP(e) {
  return !!e.workspaceSharedSetting?.publicLinkControlsSetting;
}
let nU = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let {
    formState,
    formActions
  } = Cf(t, t.shared_container_setting?.public_link_controls_setting, t.shared_container_setting?.public_link_controls_max_expiration);
  let o = () => e(popModalStack());
  let [d, c] = useState(!!t.workshop_enabled);
  let _ = (e, n) => e === formState.initialPublicLinkControlsSetting && !!t.workshop_enabled === d && n === t.shared_container_setting?.public_link_controls_max_expiration;
  let u = t.tier === r.Agb.ENTERPRISE;
  let m = useModalManager({
    onClose: o,
    open: !0
  });
  return jsx(ModalRootComponent, {
    manager: m,
    width: 'lg',
    height: 'dynamic',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: getI18nString('settings_tab.public_sharing_title')
        })
      }), jsx(DialogBody, {
        children: jsxs('div', {
          className: 'x78zum5 xdt5ytf',
          children: [jsx('div', {
            className: 'xipvkqc',
            children: renderI18nText('setting_tab.public_sharing.modal.description')
          }), jsxs('div', {
            className: 'xipvkqc',
            children: [jsx(kJ, {
              isPublicLinksBanned: formState.isPublicLinksBanned,
              togglePublicLinksBanned: formActions.togglePublicLinksBanned,
              labelText: getI18nString('setting_tab.public_sharing.modal.public_link_sharing_header'),
              subText: getI18nString('setting_tab.public_sharing.modal.public_link_sharing_toggle')
            }), !formState.isPublicLinksBanned && u && jsx(_$$t4, {
              displayExpiration: u,
              doPublicLinksRequireExpiration: formState.doPublicLinksRequireExpiration,
              doPublicLinksRequirePassword: formState.doPublicLinksRequirePassword,
              togglePublicLinksRequirePassword: formActions.togglePublicLinksRequirePassword,
              togglePublicLinksRequireExpiration: formActions.togglePublicLinksRequireExpiration
            }), !formState.isPublicLinksBanned && formState.doPublicLinksRequireExpiration && u && jsx(Zm, {
              inputValue: formState.maxDuration,
              onChange: formActions.changeMaxDuration,
              errorMessage: formState.durationErrorMessage,
              dropdownKey: 'org-public-sharing-modal-expiration-dropdown',
              dropdownText: ZA(formState.isTimeMeasuredInDays),
              options: formActions.dropdownOptions,
              onChangeTimeScale: formActions.onChangeTimeScale,
              currentTimeScale: formState.isTimeMeasuredInDays ? 'days' : 'hours'
            })]
          }), jsx('div', {
            className: 'xipvkqc',
            children: jsxs('div', {
              className: 'x78zum5 x1q0g3np x1qughib x6s0dn4',
              children: [jsxs('div', {
                className: 'x78zum5 xdt5ytf',
                children: [jsx(Label, {
                  'aria-describedby': 'open-sessions-note',
                  'htmlFor': 'open-sessions',
                  'className': 'x1s688f',
                  'children': renderI18nText('setting_tab.public_sharing.modal.open_sessions_header')
                }), jsx('span', {
                  id: 'open-sessions-note',
                  className: 'x1n0bwc9',
                  children: renderI18nText('setting_tab.public_sharing.modal.open_sessions_toggle')
                })]
              }), jsx(_$$v, {
                id: 'open-sessions',
                checked: d,
                onChange: e => c(e)
              })]
            })
          }), d && (formState.doPublicLinksRequirePassword || formState.doPublicLinksRequireExpiration) && jsx('div', {
            'data-testid': 'open-sessions-note',
            'className': 'x12oqio5 x1ghs5zp x1nn34kk x12sbs06',
            'children': renderI18nText('settings_tab.public_sharing.modal.open_sessions_note')
          }), u && jsx(nM, {
            org: t
          })]
        })
      }), jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx(Ym, {
            cancel: o,
            canSave: formState.canSave,
            save: () => {
              let t = _$$eZ(formState);
              let n = zz(formState, e);
              if (!fJ(formState.maxDuration, formState.isTimeMeasuredInDays)) return;
              if (_(t, n)) {
                o();
                return;
              }
              let s = getI18nString('org_settings.public_link_sharing.success');
              let i = () => {
                e(yo({
                  payload: {
                    public_link_controls_setting: t,
                    workshop_enabled: d,
                    public_link_controls_max_expiration: n
                  },
                  successMessage: s
                }));
              };
              t === PublicLinkControlsSetting.BANNED ? e(showModalHandler({
                type: nF,
                data: {
                  onConfirm: i,
                  isOpenSessionsEnabled: d
                }
              })) : (o(), i());
            }
          })
        })
      })]
    })
  });
}, 'PublicSharingModal');
let nF = registerModal(e => {
  let t;
  let a;
  let s;
  let r = useDispatch();
  let l = () => r(popModalStack());
  e.isOpenSessionsEnabled ? (t = getI18nString('settings_tab.public_sharing.confirmation_modal.disable_public_links_title'), a = getI18nString('settings_tab.public_sharing.confirmation_modal.disable_public_links_submit'), s = renderI18nText('settings_tab.public_sharing.confirmation_modal.disable_public_links_description')) : (t = getI18nString('settings_tab.public_sharing.confirmation_modal.disable_public_sharing_title'), a = getI18nString('settings_tab.public_sharing.confirmation_modal.disable_public_sharing_submit'), s = jsxs(Fragment, {
    children: [renderI18nText('settings_tab.public_sharing.confirmation_modal.disable_public_sharing_description.main'), jsxs('ul', {
      className: 'xtaz4m5 xv2w18j',
      children: [jsx('li', {
        className: 'x7hzu26',
        children: renderI18nText('settings_tab.public_sharing.confirmation_modal.disable_public_sharing_description.figma_design')
      }), jsx('li', {
        className: 'x7hzu26',
        children: renderI18nText('settings_tab.public_sharing.confirmation_modal.disable_public_sharing_description.figjam')
      })]
    })]
  }));
  let o = useModalManager({
    open: !0,
    onClose: l
  });
  return jsx(ModalRootComponent, {
    manager: o,
    width: 'lg',
    height: 'dynamic',
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: t
        })
      }), jsx(DialogBody, {
        children: s
      }), jsx(DialogFooter, {
        children: jsxs(DialogActionStrip, {
          children: [jsx(Button, {
            variant: 'secondary',
            onClick: l,
            children: getI18nString('modal.cancel')
          }), jsx(Button, {
            variant: 'destructive',
            onClick: () => {
              e.onConfirm();
              l();
            },
            children: a
          })]
        })
      })]
    })
  });
}, 'ConfirmPublicSharingOffModal');
let nY = {
  pro: ProductTierEnum.PRO,
  org: ProductTierEnum.ORG,
  enterprise: ProductTierEnum.ENTERPRISE
};
let nK = nJ;
function n5(e) {
  return renderI18nText(e ? 'change_payment.update_payment_details' : 'change_payment.enter_credit_or_debit_card');
}
function n3(e) {
  let t;
  let a;
  let r = getContractCurrency({
    planParentId: e.orgId,
    planType: FOrganizationLevelType.ORG
  });
  let [l] = handleSuspenseRetainRelease(r);
  a = l.data !== null ? l.data : 'usd';
  let o = function ({
    billableSeats: e,
    currency: t,
    orgId: a,
    tier: n
  }) {
    let s = designSet.dict(e => ({
      currency: t,
      billableProductKey: e,
      billableProductVariantKey: null,
      tier: n,
      renewalTerm: RenewalTermEnum.YEAR,
      unit: RenewalTermEnum.MONTH
    }));
    let i = setupCurrentContractRatesTransform(s, {
      planType: FOrganizationLevelType.ORG,
      planParentId: a
    }, BillingPriceSource.ADMIN_SETTINGS);
    let [r] = handleSuspenseRetainRelease(i);
    if (r.data === null) throw new Error('Price data is null');
    let l = r.data;
    let o = nK()(Object.values(e));
    let d = Math.max(WQ - o, 0);
    let c = Object.entries(e).reduce((e, t) => {
      let [a, n] = t;
      return e + n * l[getProductAccessTypeByKey(a)].amount;
    }, 0);
    d && (c += d * l[ProductAccessTypeEnum.DESIGN].amount);
    return 12 * c;
  }({
    billableSeats: e.billableSeats,
    currency: a,
    orgId: e.orgId,
    tier: nY[t = e.planTier] ?? t
  });
  let d = useDispatch();
  let [c, _] = useState(createEmptyAddress(e.defaultCountry));
  let [u, m] = useState(null);
  let [p, g] = useState(!1);
  let [h, x] = useState(null);
  let [b, v] = useState('');
  let f = () => {
    d(hideModal());
    e.onHide && e.onHide();
  };
  let y = (t, a) => {
    e.onSubmit(t, a, e => x(e)).then(e => {
      e && f();
      g(!1);
    });
  };
  return jsx(TrackingProvider, {
    name: 'ChangePaymentModal',
    children: jsxs(ModalView, {
      hide: f,
      size: 464,
      className: ut,
      children: [jsxs('div', {
        className: dv,
        children: [jsx('div', {
          className: gr,
          children: n5(e.canSeeBillingAddressExp)
        }), jsx(CloseButton, {
          className: _$$b2,
          onClick: f,
          innerText: 'close'
        })]
      }), e.canSeeBillingAddressExp && jsx('div', {
        className: cssBuilderInstance.mb16.$,
        children: jsx('label', {
          htmlFor: 'updatePaymentDetails',
          className: cssBuilderInstance.colorTextSecondary.$,
          children: renderI18nText('change_payment.update_payment_details_description')
        })
      }), h != null ? jsx('div', {
        className: jy,
        children: jsx(_$$_2, {
          color: _$$S5.ERROR,
          text: h
        })
      }) : null, jsxs('form', {
        onSubmit: t => {
          if (x(null), t && t.preventDefault(), !u) return;
          g(!0);
          let n = 'An error occurred while reading your card.';
          if (e.canSeeBillingAddressExp && !b) {
            x(getI18nString('change_payment.name_required_on_card_error'));
            g(!1);
            return;
          }
          let s = e.canSeeBillingAddressExp ? {
            name: b,
            address_line1: c.line1,
            address_line2: c.line2,
            address_country: c.country,
            address_city: c.city,
            address_state: c.region,
            address_zip: c.postal_code
          } : void 0;
          Ey(u, s).then(e => {
            if (e.error) {
              d(FlashActions.error(e.error.message || n));
              g(!1);
            } else {
              if (e && e.token) {
                return To(e.token.id, o, a).then(e => {
                  y({
                    setup_intent: e
                  }, c);
                });
              }
              d(FlashActions.error('Sorry, we\'re unable to change your payment source. Refresh and try again.'));
            }
          }).catch(e => {
            d(FlashActions.error(e.data?.message || e.message || n));
            g(!1);
          });
        },
        children: [jsx(_$$n, {
          billingAddress: c,
          canSeeBillingAddressExp: e.canSeeBillingAddressExp,
          cardId: 'change-payment-modal-card',
          id: 'change-payment-modal-form',
          isCheckoutFlow: !1,
          isCommunityCheckout: !1,
          nameOnPaymentMethod: b,
          onBillingAddressChange: _,
          onCardReady: m,
          setNameOnPaymentMethod: e => v(e.trim())
        }), jsxs('div', {
          className: _$$v3,
          children: [jsx('div', {
            className: _f
          }), jsx(ButtonBasePrimaryTracked, {
            tabIndex: 0,
            type: 'submit',
            disabled: p,
            children: renderI18nText('change_payment.use_this_card')
          })]
        })]
      })]
    })
  });
}
let n8 = registerModal(e => {
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'OrgChangePaymentModal',
    fallback: jsx(renderRequestErrorInterstitial, {}),
    children: jsx(Suspense, {
      fallback: jsx(_$$N2, {
        hiddenTitle: n5(e.canSeeBillingAddressExp),
        estimatedWidth: 464,
        estimatedHeight: 464
      }),
      children: jsx(n3, {
        ...e
      })
    })
  });
}, 'OrgChangePaymentModal');
function n6({
  org: e,
  billableSeats: t,
  canSeeBillingAddressExp: a
}) {
  let s = useDispatch();
  let r = async (t, n) => {
    let i = {
      source_token: t.token?.id,
      payment_method: t.setup_intent?.payment_method,
      address: n,
      billing_address: a ? n : void 0
    };
    try {
      await organizationAPIService.updateOrgPaymentMethod({
        orgId: e.id,
        paymentMethod: i
      });
    } catch (e) {
      handleErrorWithToast(e, s);
      return !1;
    }
    s(VisualBellActions.enqueue({
      message: getI18nString('org_admin_settings.billing_details.successfully_updated_your_payment_source')
    }));
    return !0;
  };
  return jsx(x8, {
    label: a ? getI18nString('org_admin_settings.settings_tab.billing.payment_details.label') : getI18nString('org_admin_settings.settings_tab.billing.change_payment_method.label'),
    description: a ? getI18nString('org_admin_settings.settings_tab.billing.payment_details.description') : getI18nString('org_admin_settings.settings_tab.billing.change_payment_method.description'),
    onClick: () => {
      s(showModalHandler({
        type: n8,
        data: {
          billableSeats: t,
          defaultCountry: getUserIsoCode(),
          onSubmit: r,
          canSeeBillingAddressExp: a,
          orgId: e.id,
          planTier: e.billing_tier
        }
      }));
    }
  }, 'change-payment-method');
}
let n9 = registerModal(e => {
  let t = useDispatch();
  let a = useCurrentUserOrg();
  let r = useSubscription(OrgAdminSettingsPage, {
    orgId: a.id
  });
  let l = getResourceDataOrFallback(r.data?.org) ?? null;
  let o = () => t(popModalStack());
  let d = !!l?.sitesPublishingDisabled;
  let [c, _] = useState(d);
  useEffect(() => {
    _(d);
  }, [d]);
  let u = useModalManager(e);
  return jsx(TrackingProvider, {
    name: 'Sites Publishing Toggle Modal',
    properties: {
      orgId: a.id,
      prevValue: d,
      value: c
    },
    children: jsx(ModalRootComponent, {
      width: 'lg',
      manager: u,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText('settings_tab.sites_publishing_toggle_label')
          })
        }), jsxs(DialogBody, {
          children: [c && c !== d && jsx(BannerInsetModal, {
            variant: 'danger',
            children: jsx(BannerMessage, {
              children: renderI18nText('org_settings.sites_publishing_toggle.banner')
            })
          }), jsxs(RadioInputRoot, {
            legend: jsx(Legend, {
              children: renderI18nText('settings_tab.sites_publishing_toggle_label')
            }),
            value: c ? 'true' : 'false',
            onChange: e => _(e === 'true'),
            readonly: r.status === 'loading',
            children: [jsx(RadioInputOption, {
              value: 'false',
              label: jsx(Label, {
                children: renderI18nText('org_settings.sites_publishing_toggle.enable')
              })
            }), jsx(RadioInputOption, {
              value: 'true',
              label: jsx(Label, {
                children: renderI18nText('org_settings.sites_publishing_toggle.disable')
              })
            })]
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(WithTrackedButton, {
              variant: 'secondary',
              onClick: o,
              children: renderI18nText('org_settings.sites_publishing_toggle.cancel')
            }), jsx(WithTrackedButton, {
              variant: 'destructive',
              onClick: () => {
                if (c === d) {
                  o();
                  return;
                }
                let e = getI18nString('org_settings.sites_publishing_toggle.success');
                t(Sl({
                  orgId: a.id,
                  sitesPublishingDisabled: c,
                  successMessage: e
                }));
                o();
              },
              disabled: c === d || r.status === 'loading',
              children: renderI18nText('org_settings.sites_publishing_toggle.save')
            })]
          })
        })]
      })
    })
  });
}, 'SitesPublishingToggleModal');
let se = registerModal(e => {
  let t = useDispatch();
  let a = useCurrentUserOrg();
  let r = useSubscription(OrgAdminSettingsPage, {
    orgId: a.id
  });
  let l = getResourceDataOrFallback(r.data?.org) ?? null;
  let o = () => t(popModalStack());
  let d = !!l?.supabaseDisabled;
  let [c, _] = useState(d);
  useEffect(() => {
    _(d);
  }, [d]);
  let u = useModalManager(e);
  return jsx(TrackingProvider, {
    name: 'Supabase Toggle Modal',
    properties: {
      orgId: a.id,
      prevValue: d,
      value: c
    },
    children: jsx(ModalRootComponent, {
      width: 'lg',
      manager: u,
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText('settings_tab.supabase_toggle_label')
          })
        }), jsxs(DialogBody, {
          children: [c && c !== d && jsx(BannerInsetModal, {
            variant: 'danger',
            children: jsx(BannerMessage, {
              children: renderI18nText('org_settings.supabase_toggle.banner_link', {
                learnMoreLink: jsx(SecureLink, {
                  target: '_blank',
                  href: 'https://help.figma.com/hc/articles/32640822050199',
                  trusted: !0,
                  children: getI18nString('general.learn_more')
                })
              })
            })
          }), jsxs(RadioInputRoot, {
            legend: jsx(Legend, {
              children: renderI18nText('settings_tab.supabase_toggle_label')
            }),
            value: c ? 'true' : 'false',
            onChange: e => _(e === 'true'),
            readonly: r.status === 'loading',
            children: [jsx(RadioInputOption, {
              value: 'false',
              label: jsx(Label, {
                children: renderI18nText('org_settings.supabase_toggle.enable')
              })
            }), jsx(RadioInputOption, {
              value: 'true',
              label: jsx(Label, {
                children: renderI18nText('org_settings.supabase_toggle.disable')
              })
            })]
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(WithTrackedButton, {
              variant: 'secondary',
              onClick: o,
              children: renderI18nText('org_settings.supabase_toggle.cancel')
            }), jsx(WithTrackedButton, {
              variant: 'destructive',
              onClick: () => {
                if (c === d) {
                  o();
                  return;
                }
                let e = getI18nString('org_settings.supabase_toggle.success');
                t(NL({
                  orgId: a.id,
                  supabaseDisabled: c,
                  successMessage: e
                }));
                o();
              },
              disabled: c === d || r.status === 'loading',
              children: renderI18nText('org_settings.supabase_toggle.save')
            })]
          })
        })]
      })
    })
  });
}, 'SupabaseToggleModal');
let st = 'team_creation_controls_modal--settingLabel--KGHr-';
let sa = 'team_creation_controls_modal--description--tsaEB';
let sn = 'team_creation_controls_modal--radioLabel--7XJIQ';
let ss = registerModal(() => {
  let e = useDispatch();
  let t = useSelector(e => e.orgById[e.currentUserOrgId]);
  let a = c4(t.id).data;
  let r = () => e(hideModal());
  let [l, o] = useState(t.shared_container_setting?.team_creation_controls ? t.shared_container_setting.team_creation_controls : null);
  return jsx(TrackingProvider, {
    name: 'Team Creation Control Setting Modal',
    properties: {
      orgId: t.id
    },
    children: jsx(ConfirmationModal, {
      title: getI18nString('org_settings.team_creation.modal', {
        organization: t.name
      }),
      maxWidth: 440,
      minWidth: 440,
      fixedTop: !1,
      onConfirm: () => {
        if (t.shared_container_setting && l === t.shared_container_setting.team_creation_controls || l === t.shared_container_setting) {
          r();
          return;
        }
        e(yo({
          payload: {
            team_creation_controls: l
          },
          successMessage: getI18nString('org_settings.team_creation.success')
        }));
        r();
      },
      confirmText: getI18nString('org_settings.team_creation.save_button'),
      children: jsx('div', {
        children: jsxs(RadioGroup, {
          value: l ?? TeamCreationControls.TEAM_CREATION_CONTROLS_ANYONE,
          onChange: e => {
            let t = null;
            e !== 'none' && (t = e);
            o(t);
          },
          children: [jsx(RadioOption, {
            value: TeamCreationControls.TEAM_CREATION_CONTROLS_ANYONE,
            labelClassName: sn,
            className: 'team_creation_controls_modal--option--gaACu',
            children: jsxs('div', {
              className: st,
              children: [jsx('div', {
                children: getI18nString('org_settings.team_creation.any.title')
              }), jsx('div', {
                className: sa,
                children: getI18nString('org_settings.team_creation.any.description')
              })]
            })
          }, TeamCreationControls.TEAM_CREATION_CONTROLS_ANYONE), jsx(RadioOption, {
            value: TeamCreationControls.TEAM_CREATION_CONTROLS_ADMIN_ONLY,
            labelClassName: sn,
            children: jsxs('div', {
              className: st,
              children: [jsx('div', {
                children: getI18nString('org_settings.team_creation.admin_only.title')
              }), jsx('div', {
                className: sa,
                children: a ? getI18nString('org_settings.team_creation.admin_only.description.workspaces') : getI18nString('org_settings.team_creation.admin_only.description.no_workspaces')
              })]
            })
          }, TeamCreationControls.TEAM_CREATION_CONTROLS_ADMIN_ONLY)]
        })
      })
    })
  });
}, 'TeamCreationControlsModal');
function si(e) {
  if (e == null) return getI18nString('settings_tab.idle_session_timeout_default_duration');
  let [t, a] = qr(e);
  return getI18nString(`settings_tab.idle_session_timeout.time.${a}`, {
    duration: t
  });
}
export function $$sr0(e) {
  let t;
  let a;
  let k;
  let C;
  let {
    org,
    currency,
    orgSamlConfig,
    orgDomains,
    shippingAddress,
    canSeeBillingAddressExp
  } = e;
  eA();
  let F = _$$s4();
  let q = _$$r2();
  let $ = useDispatch();
  let B = selectUser();
  t = useTeamPlanFeatures();
  let z = collaboratorSet.reduce((e, a) => {
    switch (a) {
      case ProductAccessTypeEnum.EXPERT:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsExpert === r.zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.DEVELOPER:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsDeveloper === r.zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.CONTENT:
        return e || getResourceDataOrFallback(t.unwrapOr(null)?.upgradeApprovalSettingsContent) === r.zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.COLLABORATOR:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsCollaborator === r.zRx.INSTANT_APPROVAL;
      default:
        throwTypeError(a);
    }
  }, !1);
  let V = useScimGroupExperiment();
  let W = _$$q(Jt, !0);
  let [H, Y] = useState(!1);
  let [J, K] = useState(!1);
  let X = c4(org.id ?? null).data;
  let Q = _$$R();
  let Z = isResourceHubEnabled();
  let ee = Xf(org.id);
  let et = ee.data?.scheduled_cancellation;
  let ea = useMemo(() => et ? _$$h({
    isEligibleForCancellation: et.is_eligible_for_cancellation,
    scheduledCancellationDate: et.scheduled_cancellation_date,
    cancelAtPeriodEnd: et.cancel_at_period_end
  }) : null, [et]);
  let en = !!ee.data;
  let eo = org.tier === r.Agb.ENTERPRISE;
  _$$S(UC, () => {
    $(showModalHandler({
      type: _$$q2,
      data: {
        planType: fm.ORGANIZATION,
        planId: org.id
      }
    }));
  });
  let ed = useSubscription(IpAllowlistRangesView({
    orgId: org.id
  }));
  let ec = ed.status === 'loaded' && ed.data?.org?.ipAllowlistRanges.status === 'loaded' && ed.data.org.ipAllowlistRanges.data || [];
  let e_ = useSubscription(OrgAdminSettingsPage({
    orgId: org.id
  }), {
    enabled: !0
  });
  let eb = getResourceDataOrFallback(e_.data?.org) ?? null;
  let ev = getFeatureFlags().ai_ga;
  useEffect(() => {
    organizationAPIService.getShowVatGst({
      orgId: org.id
    }).then(({
      data: e
    }) => {
      K(e.meta.show_vat_gst_id);
    });
  }, [org.id]);
  useEffect(() => {
    J && _$$S(mL, () => {
      Hq({
        org,
        dispatch: $
      });
    });
  }, [J, $, org]);
  let ef = useCallback(() => {
    $(selectViewAction({
      view: 'orgDomainManagement'
    }));
  }, [$]);
  let ej = !!getFeatureFlags().plan_level_file_export_controls && !!org.security_add_on_enabled_at;
  let ey = [jsx(x8, {
    label: getI18nString('settings_tab.modify_community_handle_label'),
    description: getI18nString('settings_tab.modify_community_handle_description'),
    currentValue: org.community_profile_handle ? `@${org.community_profile_handle}` : '',
    onClick: () => {
      $(showModalHandler({
        type: S3,
        data: {
          orgId: org.id,
          profileId: org.community_profile_id,
          profileHandle: org.community_profile_handle
        }
      }));
    }
  }, 'org-handle')];
  org.community_profile_id && (ey.push(jsx(x8, {
    label: getI18nString('settings_tab.delete_community_label'),
    description: getI18nString('settings_tab.delete_community_description'),
    onClick: () => {
      org.community_profile_id && org.community_profile_handle && $(showModalHandler({
        type: _$$M,
        data: {
          dispatch: $,
          profileId: org.community_profile_id,
          handle: org.community_profile_handle
        }
      }));
    }
  }, 'delete-profile')), ey.push(jsx(x8, {
    label: getI18nString('settings_tab.community_commenters_label'),
    description: getI18nString('settings_tab.community_commenters_description'),
    onClick: () => {
      org.community_profile_id && $(showModalHandler({
        type: _$$J3,
        data: {
          profileId: org.community_profile_id,
          profileHandle: org.community_profile_handle,
          emptyStateText: getI18nString('settings_tab.community_commenters_restricted_dont_exist', {
            orgHandle: `@${org.community_profile_handle}`
          })
        }
      }));
    }
  }, 'restrict-comments')));
  let ew = {
    title: getI18nString('settings_tab.section_header.profile'),
    settings: ey
  };
  let ek = {
    title: getI18nString('settings_tab.section_header.team_management'),
    settings: [jsx(x8, {
      label: getI18nString('settings_tab.team_creation_label'),
      description: getI18nString('settings_tab.team_creation_description'),
      onClick: () => {
        $(showModalHandler({
          type: ss
        }));
      }
    }, 'team-creation-controls')]
  };
  let eE = {
    title: '',
    settings: []
  };
  let eN = org.target_locality === USEURegionEnum.EU ? getI18nString('settings_tab.data_storage_eu') : getI18nString('settings_tab.data_storage_us');
  eE.title = getI18nString('settings_tab.section_header.data');
  isBigmaAndSecurityAddOnEnabled(org) && eE.settings.push(jsx(Ke, {
    user: B,
    tag: 'a_something_else',
    label: getI18nString('settings_tab.discovery.label'),
    contactSupportCopy: org.discovery_enabled ? getI18nString('settings_tab.contact_support_to_disable') : getI18nString('settings_tab.contact_support_to_enable'),
    description: jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 8,
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('settings_tab.discovery.description', {
          learnMoreLink: jsx('a', {
            'target': '_blank',
            'rel': 'noopener',
            'className': Be,
            'href': 'https://www.figma.com/developers/api#discovery',
            'aria-label': getI18nString('settings_tab.learn_more_about_discovery_api'),
            'children': renderI18nText('file_browser.team_settings.learn_more')
          })
        })
      }), jsx(TextWithTruncation, {
        children: renderI18nText('resources_tab.libraries.current', {
          setting: org.discovery_enabled ? getI18nString('settings_tab.enabled') : getI18nString('settings_tab.disabled')
        })
      })]
    })
  }, 'discovery'));
  isGovCluster() || eE.settings.push(jsx(Ke, {
    user: B,
    label: getI18nString('settings_tab.data_storage'),
    description: jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 8,
      children: [jsx(TextWithTruncation, {
        children: renderI18nText('settings_tab.data_storage.description')
      }), jsx(TextWithTruncation, {
        children: renderI18nText('settings_tab.data_storage.current_location', {
          currentLocation: eN
        })
      })]
    })
  }, 'data-locality-control'));
  let eI = [];
  eo && eI.push(jsx(x8, {
    label: getI18nString('settings_tab.guest_membership_label'),
    description: getI18nString('settings_tab.guest_membership_description'),
    onClick: () => {
      $(showModalHandler({
        type: nm
      }));
    }
  }, 'guest-controls'));
  isDomainCaptureAndBigmaEnabled(org) ? eI.push(jsx(x8, {
    label: getI18nString('settings_tab.external_collaboration_controls_label'),
    description: getI18nString('settings_tab.external_collaboration_controls_description', {
      orgName: org.name
    }),
    currentValue: org.shared_container_setting?.external_collaboration_controls ? getI18nString('settings_tab.disabled') : getI18nString('settings_tab.enabled'),
    onClick: () => {
      $(showModalHandler({
        type: nr
      }));
    }
  }, 'external-collab-controls')) : isBigmaEnabled(org) && eI.push(jsx(Ke, {
    user: B,
    tag: 'a_permissions',
    label: getI18nString('settings_tab.external_collaboration_controls_label'),
    description: getI18nString('settings_tab.external_collaboration_controls_description', {
      orgName: org.name
    }),
    contactSupportCopy: getI18nString('settings_tab.contact_support_to_disable'),
    contactSupportTooltipCopy: getI18nString('settings_tab.domain_capture_contact_support_tooltip_copy')
  }, 'external-collab-controls'));
  (F && (getFeatureFlags().sts_k12_google_org_enabled || !org.k12_google_org) || isFigmakeSitesEnabled()) && eI.push(jsx(x8, {
    label: getI18nString('settings_tab.sites_publishing_toggle_label'),
    description: getI18nString('settings_tab.sites_publishing_toggle_description'),
    currentValue: eb?.sitesPublishingDisabled ? getI18nString('settings_tab.disabled') : getI18nString('settings_tab.enabled'),
    onClick: () => {
      $(showModalHandler({
        type: n9
      }));
    }
  }, 'sites-publishing-toggle'));
  p3() && eI.push(jsx(x8, {
    label: getI18nString('settings_tab.supabase_toggle_label'),
    description: getI18nString('settings_tab.supabase_toggle_description'),
    currentValue: eb?.supabaseDisabled ? getI18nString('settings_tab.disabled') : getI18nString('settings_tab.enabled'),
    onClick: () => {
      $(showModalHandler({
        type: se
      }));
    }
  }, 'supabase-toggle'));
  eI.push(jsx(x8, {
    label: getI18nString('settings_tab.public_sharing_title'),
    description: getI18nString('settings_tab.public_sharing_description'),
    onClick: () => {
      $(showModalHandler({
        type: nU
      }));
    }
  }, 'public-sharing'));
  ej && eI.push(jsx(x8, {
    label: getI18nString('settings_tab.section_header.export_controls'),
    description: renderI18nText('settings_tab.export_controls_description'),
    onClick: () => {
      $(showModalHandler({
        type: a3
      }));
    }
  }, 'export-controls'));
  eo && eI.push(jsx(x8, {
    label: getI18nString('settings_tab.password_controls_settings_label'),
    description: getI18nString('settings_tab.password_controls_settings_description'),
    onClick: () => {
      $(showModalHandler({
        type: tU
      }));
    }
  }, 'autogen-password-controls'));
  isBigmaAndSecurityEnabled(org) && eI.push(jsx(Ke, {
    user: B,
    tag: 'a_something_else',
    label: getI18nString('settings_tab.network_access_restriction_label'),
    description: jsxs(Fragment, {
      children: [jsx('span', {
        children: renderI18nText('settings_tab.ip_restriction_description', {
          orgName: org.name
        })
      }), jsx('span', {
        className: cssBuilderInstance.mt8.$,
        children: org.ip_ranges.length !== 0 ? renderI18nText('settings_tab.ip_restriction_range', {
          ipRanges: jsx(ListFormatter, {
            formatType: 'unit',
            children: org.ip_ranges.map(e => jsx('span', {
              children: e
            }, e))
          })
        }) : jsx(Fragment, {})
      })]
    })
  }, 'ip_restriction'));
  let eT = {
    title: getI18nString('settings_tab.section_header.external_access'),
    settings: eI
  };
  let eM = orgSamlConfig?.config?.idp_name ? getI18nString('settings_tab.enabled') : getI18nString('settings_tab.disabled');
  let e5 = [];
  let e3 = [];
  let e8 = [];
  e5.push(jsx(x8, {
    label: getI18nString('settings_tab.domain_management_label'),
    description: getI18nString('settings_tab.domain_management_description'),
    onClick: ef
  }, 'domain-management'));
  isGovCluster() || e5.push(jsx(x8, {
    label: getI18nString('settings_tab.authentication_label'),
    description: getI18nString('settings_tab.authentication_description'),
    currentValue: function (e) {
      let t = getAuthType(e);
      switch (t) {
        case AuthTypeEnum.SAML:
          return getI18nString('settings_tab.sso_method.saml_only');
        case AuthTypeEnum.GOOGLE:
          return getI18nString('settings_tab.sso_method.google_only');
        case AuthTypeEnum.ANY:
          return getI18nString('settings_tab.sso_method.any_method');
        default:
          throwTypeError(t);
      }
    }(org),
    onClick: () => {
      $(showModalHandler({
        type: eu
      }));
    }
  }, 'authentication'));
  k = org.can_use_multi_idp ? jsx(x8, {
    label: getI18nString('settings_tab.idp_label'),
    description: getI18nString('settings_tab.idp_description'),
    onClick: () => {
      $(selectViewAction({
        view: 'orgIdpManagement'
      }));
    }
  }, 'idp') : jsx(x8, {
    label: getI18nString('settings_tab.saml_label'),
    description: getI18nString('settings_tab.saml_description'),
    currentValue: eM,
    onClick: () => {
      $(showModalHandler({
        type: _$$p,
        data: {
          org,
          orgSamlConfig: orgSamlConfig.config,
          orgDomains
        }
      }));
    }
  }, 'saml');
  let e6 = [];
  if (q || e6.push(jsx(x8, {
    label: getI18nString('settings_tab.scim_label'),
    description: V() ? getI18nString('settings_tab.scim_group_description') : getI18nString('settings_tab.scim_description'),
    currentValue: hasScimToken(orgSamlConfig) ? getI18nString('settings_tab.enabled') : getI18nString('settings_tab.disabled'),
    onClick: () => {
      $(showModalHandler({
        type: G
      }));
    }
  }, 'scim')), e5.push(k, ...e6), e3.push(...e6), e8.push(k, ...e6), isBigmaSecurityAddOnEnabled(org)) {
    let e = areAllDomainsVerified(org);
    let t = org.shared_container_setting?.ip_allowlist ?? !1;
    e5.push(jsx(x8, {
      label: getI18nString('settings_tab.ip_allowlist_label'),
      disabled: !e && !t,
      description: jsxs(Fragment, {
        children: [jsx('span', {
          children: jsx(TextWithTruncation, {
            children: renderI18nText('settings_tab.ip_allowlist_description')
          })
        }), ec.length !== 0 && t && jsx('span', {
          className: i0,
          children: jsx(TextWithTruncation, {
            truncate: 'end',
            children: renderI18nText('settings_tab.ip_allowlist_ranges_list', {
              ranges: jsx(ListFormatter, {
                formatType: 'unit',
                children: ec.map(e => jsx('span', {
                  children: e.ipRange
                }, e.id))
              })
            })
          })
        })]
      }),
      currentValue: jsx(sd, {
        setting: t,
        canEnable: e
      }),
      onClick: () => {
        $(showModalHandler({
          type: nT,
          data: {
            ipAllowlistEnabled: t,
            orgId: org.id,
            ipAllowlistRanges: ec
          }
        }));
      }
    }, 'ip_allowlist'));
  }
  if (eo && (hM(org.shared_container_setting?.idle_timeout_duration_in_secs) && !nv(!!org.security_add_on_enabled_at) ? e5.push(jsx(Ke, {
    user: B,
    label: getI18nString('settings_tab.idle_session_timeout_label'),
    description: getI18nString('settings_tab.idle_session_timeout_description'),
    contactSupportTooltipCopy: getI18nString('settings_tab.contact_support_to_change'),
    contactSupportCopy: jsx(TextWithTruncation, {
      color: 'tertiary',
      children: si(org.shared_container_setting?.idle_timeout_duration_in_secs)
    })
  }, 'disabled-idle-session-timeout')) : e5.push(jsx(x8, {
    label: getI18nString('settings_tab.idle_session_timeout_label'),
    description: getI18nString('settings_tab.idle_session_timeout_description'),
    currentValue: si(org.shared_container_setting?.idle_timeout_duration_in_secs),
    onClick: () => {
      $(showModalHandler({
        data: {
          idleTimeoutDurationInSecs: org.shared_container_setting?.idle_timeout_duration_in_secs,
          orgId: org.id
        },
        type: nC
      }));
    }
  }, 'idle-sesstion-timeout-setting'))), eo && X) {
    let e = !!org.workspaces_nux_active_at;
    let t = !e;
    e5.push(jsx(T_, {
      label: getI18nString('settings_tab.workspace_selector_label'),
      description: jsxs(Fragment, {
        children: [renderI18nText('settings_tab.workspace_selector_description_with_link'), jsxs(Link, {
          'trusted': !0,
          'newTab': !0,
          'href': 'https://help.figma.com/hc/articles/7249713835799',
          'aria-label': getI18nString('settings_tab.learn_more_about_workspace_selector'),
          'children': [jsx('br', {}), jsx(TextWithTruncation, {
            children: renderI18nText('general.learn_more')
          })]
        })]
      }),
      isActive: e,
      onToggle: () => {
        $(yo({
          payload: {
            workspaces_nux_enabled: t
          },
          successMessage: t ? getI18nString('license_group.workspace_selector_is_visible') : getI18nString('license_group.workspace_selector_is_hidden')
        }));
      }
    }, 'workspace-selector'));
  }
  let e7 = {
    title: getI18nString('settings_tab.section_header.login_and_provisioning'),
    settings: e5
  };
  let e9 = {
    title: getI18nString('settings_tab.section_header.login_and_provisioning'),
    settings: e3
  };
  let ta = {
    title: getI18nString('settings_tab.section_header.login_and_provisioning'),
    settings: e8
  };
  let ts = {
    title: getI18nString('plan_settings.billing_section_header'),
    description: jsx(Fragment, {}),
    settings: []
  };
  if (ee.status === 'loaded') {
    let t = e.renewalDate && ((a = e.renewalDate) ? dayjs(a).format('MMMM D, YYYY') : '');
    let s = !!ee.data?.scheduled_cancellation?.cancel_at_period_end;
    let i = ee.data?.scheduled_cancellation?.scheduled_cancellation_date;
    let r = e => jsx('span', {
      className: bv,
      children: renderI18nText('settings_table.billing_date', {
        billing_date: e
      })
    });
    let l = e => jsx('button', {
      className: _$$nf,
      onClick: () => {
        $(showModalHandler({
          type: eC,
          data: {
            subscriptionStart: e
          }
        }));
      },
      children: renderI18nText('settings_table.learn_more')
    });
    let o = e => {
      ts.description = jsx('div', {
        className: yV,
        children: jsx('span', {
          children: e
        })
      });
    };
    getFeatureFlags().scheduled_cancellation_enabled ? s && i ? o(getI18nString('org_admin_settings.settings_tab.billing.subscription_cancelled', {
      scheduledCancellationDate: dayjs(i).toDate()
    })) : !s && t && o(renderI18nText('org_admin_settings.settings_tab.billing.subscription_renewing', {
      billing_date: r(t),
      more: l(t)
    })) : t && o(renderI18nText('settings_table.subscription_renewal', {
      frequency: 'annual',
      billing_date: r(t),
      more: l(t)
    }));
  }
  en && ts.settings.push(jsx(n6, {
    org,
    billableSeats: e.billableSeats,
    canSeeBillingAddressExp
  }));
  canSeeBillingAddressExp && ts.settings.push(jsx(x8, {
    label: getI18nString('org_admin_settings.settings_tab.billing.update_invoice_details.label'),
    description: getI18nString('org_admin_settings.settings_tab.billing.update_invoice_details.description'),
    onClick: () => $(showModalHandler({
      type: _$$u,
      data: {
        orgId: org.id,
        shippingAddress,
        canSeeBillingAddressExp
      }
    }))
  }));
  J && canSeeBillingAddressExp && ts.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.vat_gst'),
    description: getI18nString('settings_tab.change_vat_gst_id'),
    onClick: () => Hq({
      org,
      dispatch: $
    })
  }));
  let td = null;
  if (Q) {
    let e = org.shared_container_setting?.configured_upgrade_request_setting;
    if (e === UpgradeRequestSetting.ALL_USERS) {
      td = jsx(x8, {
        label: getI18nString('plan_settings.auto_approval_settings'),
        description: getI18nString('plan_settings.auto_approval_settings_curf_all_users_description'),
        onClick: _$$d({
          dispatch: $
        })
      }, 'auto-approval-settings');
    } else {
      let t = e === UpgradeRequestSetting.MEMBERS;
      td = jsx(x8, {
        label: getI18nString('plan_settings.auto_approval_settings'),
        description: getI18nString('plan_settings.auto_approval_settings_description'),
        onClick: _$$S4({
          dispatch: $,
          isCurfEnabledForMembers: t,
          currency,
          renewalTerm: RenewalTermEnum.YEAR
        })
      }, 'auto-approval-settings');
    }
  } else {
    td = jsx(x8, {
      label: getI18nString('plan_settings.default_role'),
      description: renderI18nText('plan_settings.default_role_description', {
        plan_type: getI18nString('settings_table.organization')
      }),
      onClick: () => {
        $(showModalHandler({
          type: _$$h2,
          data: {
            planType: fm.ORGANIZATION,
            planId: org.id
          }
        }));
      }
    }, 'default-role');
  }
  ts.settings.push(td);
  org.shared_container_setting?.configured_upgrade_request_setting && ts.settings.push(jsx(Ke, {
    user: B,
    label: getI18nString('settings_tab.configured_upgrade_request_flow.label'),
    description: org.shared_container_setting?.configured_upgrade_request_setting === UpgradeRequestSetting.MEMBERS ? getI18nString('settings_tab.configured_upgrade_request_flow.description_members') : getI18nString('settings_tab.configured_upgrade_request_flow.description_all_users')
  }));
  ts.settings.push(jsx(x8, {
    label: getI18nString('plan_settings.seat_upgrade_digests'),
    disabled: !z,
    currentValue: z ? null : jsx($$so1, {}),
    description: getI18nString('plan_settings.seat_upgrade_digests_description'),
    onClick: () => {
      $(showModalHandler({
        type: _$$q2,
        data: {
          planType: fm.ORGANIZATION,
          planId: org.id
        }
      }));
    }
  }, 'upgrade-notifications'));
  ts.settings.push(jsx(x8, {
    label: getI18nString('settings_table.billing_contacts'),
    description: getI18nString('settings_table.billing_contacts_description'),
    onClick: () => {
      $(sl({
        orgId: org.id,
        currentContact: e.adminEmail || ''
      }));
    }
  }, 'billing-contacts'));
  ea?.id === _$$a.SCHEDULE ? ts.settings.push(jsx(x8, {
    label: getI18nString('settings_table.cancel_plan'),
    description: getI18nString('settings_table.cancel_plan_description_org'),
    trackingProperties: {
      trackingDescriptor: UpgradeAction.CANCEL_PLAN
    },
    onClick: () => {
      ea.perform({
        dispatch: $,
        orgName: org.name,
        orgId: org.id
      });
    }
  }, 'schedule-cancellation')) : ea?.id === _$$a.UNSCHEDULE && ts.settings.push(jsx(x8, {
    label: getI18nString('settings_table.reactivate_plan'),
    description: getI18nString('settings_table.reactivate_plan_description_org'),
    trackingProperties: {
      trackingDescriptor: UpgradeAction.REACTIVATE_PLAN
    },
    onClick: () => {
      ea.perform({
        dispatch: $,
        orgName: org.name,
        orgId: org.id
      });
    }
  }, 'unschedule-cancellation'));
  let tc = {
    title: getI18nString('settings_tab.section_header.resources'),
    settings: []
  };
  tc.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.plugin_approval_label'),
    description: getI18nString('settings_tab.plugin_approval_description'),
    testId: 'plugin-approval-setting-action',
    onClick: () => {
      $(showModalHandler({
        type: CW,
        data: {
          orgId: org.id,
          extensionType: 'plugin'
        }
      }));
    }
  }, 'plugin-admin-approval'), jsx(x8, {
    label: getI18nString('settings_tab.widget_admin_approval_label'),
    description: getI18nString('settings_tab.widget_admin_approval_description'),
    testId: 'widget-approval-setting-action',
    onClick: () => {
      $(showModalHandler({
        type: CW,
        data: {
          orgId: org.id,
          extensionType: 'widget'
        }
      }));
    }
  }, 'widget-admin-approval'));
  tc.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.dev_mode_label'),
    description: getI18nString('settings_tab.dev_mode_description'),
    onClick: () => {
      $(showModalHandler({
        type: aH
      }));
    }
  }, 'dev-mode-plugins'));
  tc.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.ui_kits_toggle_label'),
    description: getI18nString('settings_tab.ui_kits_toggle_description'),
    isActive: !org.figma_provided_libraries_disabled,
    testId: 'figma-provided-libraries-setting-toggle',
    sprigOverride: W,
    onToggle: e => {
      let t = e ? getI18nString('settings_tab.ui_kits_enabled') : getI18nString('settings_tab.ui_kits_disabled');
      $(yo({
        payload: {
          figma_provided_libraries_disabled: !e
        },
        successMessage: t
      }));
      analyticsEventManager.trackDefinedEvent('preset_libraries.org_status_changed', {
        userId: B?.id,
        orgId: org.id,
        isEnabled: e
      });
    }
  }, 'figma_libraries'));
  Z && tc.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.resource_hub_community_tab_label'),
    description: getI18nString('settings_tab.resource_hub_community_tab_description'),
    isActive: !eb?.isResourceHubCmtyTabDisabled,
    testId: 'resource-hub-community-tab-setting-toggle',
    onToggle: e => {
      let t = e ? getI18nString('settings_tab.resource_hub_community_tab_enabled') : getI18nString('settings_tab.resource_hub_community_tab_disabled');
      $(yo({
        payload: {
          resource_hub_cmty_tab_disabled: !e
        },
        successMessage: t
      }));
    }
  }, 'resource_hub_community_tab'));
  let t_ = {
    title: getI18nString('admin_settings.ai.section_title'),
    badge: ev ? void 0 : jsxs(Fragment, {
      children: [jsx(Badge, {
        color: BadgeColor.BRAND,
        text: getI18nString('general.beta')
      }), jsx(_$$B, {
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': getI18nString('admin_settings.ai.section_title.free_in_beta'),
        'data-tooltip-timeout-delay': 50
      })]
    }),
    settings: []
  };
  let tu = async e => {
    try {
      await organizationAPIService.updateAiDataSharing({
        orgId: org.id,
        enabled: e
      });
      trackEventAnalytics('ai_data_sharing_toggled', {
        org_id: org.id,
        enabled: e
      });
      $(VisualBellActions.enqueue({
        message: getI18nString('admin_settings.ai.data_sharing.update_success'),
        type: 'ai-data-sharing-settings-update-success'
      }));
    } catch (e) {
      $(VisualBellActions.enqueue({
        message: getI18nString('admin_settings.ai.data_sharing.update_error'),
        type: 'ai-data-sharing-settings-update-error',
        error: !0
      }));
    }
  };
  isGovCluster() || (!ev || eo ? getFeatureFlags().ff_wsai_toggle ? t_.settings.push(jsx(x8, {
    label: getI18nString('org_settings.ai_controls.ai_features'),
    description: getI18nString('org_settings.ai_controls.setting_description'),
    onClick: () => {
      $(showModalHandler({
        type: tS,
        data: {
          org
        }
      }));
    }
  }, 'ai_controls')) : t_.settings.push(jsx(T_, {
    label: getI18nString('admin_settings.ai.features_toggle.label'),
    description: jsx('p', {
      children: renderI18nText('admin_settings.ai.features_toggle.description.org', {
        learnMoreLink: jsx(SecureLink, {
          'aria-label': getI18nString('settings_tab.learn_more_about_ai_features'),
          'href': _$$d2.aiFeatures,
          'target': '_blank',
          'trusted': !0,
          'children': renderI18nText('general.learn_more')
        })
      })
    }),
    isActive: !org.ai_features_disabled,
    onToggle: e => {
      let t = e ? getI18nString('admin_settings.ai.enable_success') : getI18nString('admin_settings.ai.disable_success');
      $(yo({
        payload: {
          ai_features_disabled: !e
        },
        successMessage: t
      }));
    }
  }, 'ai_opt_out')) : org.ai_features_disabled && t_.settings.push(jsx(AutoLayout, {
    padding: {
      top: 8
    },
    children: jsx(_$$p3, {
      onEnable: () => {
        $(yo({
          payload: {
            ai_features_disabled: !1
          },
          successMessage: getI18nString('admin_settings.ai.enable_success')
        }));
      },
      planId: org.id,
      planType: FOrganizationLevelType.ORG
    })
  })), t_.settings.push(jsx(T_, {
    label: getI18nString('admin_settings.ai.data_sharing.label'),
    description: jsx('p', {
      children: renderI18nText('admin_settings.ai.data_sharing.description.org', {
        learnMoreLink: jsx(SecureLink, {
          'aria-label': getI18nString('settings_tab.learn_more_about_content_training'),
          'href': _$$d2.aiDataSharing,
          'target': '_blank',
          'trusted': !0,
          'children': renderI18nText('general.learn_more')
        })
      })
    }),
    isActive: !!eb?.isAiDataSharingEnabled,
    disabled: !eb?.isAiDataSharingEnabled,
    tooltipText: eb?.isAiDataSharingEnabled ? void 0 : getI18nString('admin_settings.ai.data_sharing.disabled_for_orgs'),
    testId: 'ai-data-sharing-toggle',
    onToggle: tu
  }, getI18nString('admin_settings.ai.data_sharing.label'))));
  let tm = {
    title: getI18nString('settings_tab.section_header.slides'),
    badge: jsx(Badge, {
      color: BadgeColor.BRAND,
      text: getI18nString('general.beta')
    }),
    settings: []
  };
  tm.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.slides.access_to_slides'),
    description: renderI18nText('settings_tab.slides.let_users_create_slides', {
      learnMoreLink: jsx('a', {
        'target': '_blank',
        'rel': 'noopener',
        'className': Be,
        'href': 'https://help.figma.com/hc/articles/23844348977303',
        'aria-label': getI18nString('settings_tab.learn_more_about_slides'),
        'children': renderI18nText('file_browser.team_settings.learn_more')
      })
    }),
    descriptionClassName: CB,
    isActive: !org.is_slides_disabled,
    onToggle: e => {
      let t = e ? getI18nString('settings_tab.slides.enable_success') : getI18nString('settings_tab.slides.disable_success');
      $(xP({
        orgId: org.id,
        slidesDisabled: !e,
        successMessage: t
      }));
    }
  }, 'slides_opt_out'));
  let tp = {
    title: getI18nString('settings_tab.section_header.other'),
    settings: []
  };
  if (isGovCluster() || tp.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.audio_label'),
    description: getI18nString('settings_tab.audio_description'),
    isActive: !!org.voice_enabled,
    onToggle: e => {
      let t = e ? getI18nString('settings_tab.audio_enabled') : getI18nString('settings_tab.audio_disabled');
      $(yo({
        payload: {
          voice_enabled: e
        },
        successMessage: t
      }));
    }
  }, 'audio')), C = getFeatureFlags().cooper ? getI18nString('settings_tab.custom_templates_description.include_cooper') : getI18nString('settings_tab.custom_templates_description.v2'), tp.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.custom_templates_label'),
    description: C,
    isActive: !!org.are_custom_templates_allowed,
    onToggle: e => {
      let t = e ? getI18nString('settings_tab.custom_templates_enabled') : getI18nString('settings_tab.custom_templates_disabled');
      $(yo({
        payload: {
          custom_templates_allowed: e
        },
        successMessage: t
      }));
    }
  }, 'custom-templates')), eo && tp.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.cursor_chat_label'),
    description: getI18nString('settings_tab.cursor_chat_description'),
    isActive: !org.cursor_chat_disabled,
    onToggle: e => {
      $(yo({
        payload: {
          cursor_chat_disabled: !e
        },
        successMessage: e ? getI18nString('settings_tab.enable_cursor_chat_success') : getI18nString('settings_tab.disable_cursor_chat_success')
      }));
    }
  }, 'cursor-chat')), !isGovCluster() && org.community_profile_handle && tp.settings.push(jsx(T_, {
    label: getI18nString('settings_tab.community_file_publishing_label'),
    description: getI18nString('settings_tab.community_file_publishing_description'),
    isActive: !!org.cmty_publish_as_user_enabled,
    onToggle: e => {
      $(yo({
        payload: {
          cmty_publish_as_user_enabled: e
        },
        successMessage: e ? getI18nString('settings_tab.enable_community_file_publishing_success') : getI18nString('settings_tab.disable_community_file_publishing_success')
      }));
    }
  }, 'community-file-publishing')), hasScimToken(orgSamlConfig) && tp.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.member_metadata_label'),
    description: getI18nString('settings_tab.member_metadata_description'),
    currentValue: org.featured_scim_metadata ? getCostCenterTypeString(org.featured_scim_metadata) : '',
    onClick: () => $(showModalHandler({
      type: tF
    }))
  }, 'member-metadata')), tp.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.connected_apps'),
    description: getI18nString('settings_tab.connected_apps_description'),
    onClick: () => {
      $(showModalHandler({
        type: tZ,
        data: {
          org
        }
      }));
    }
  }, 'authentication')), tp.settings.push(jsx(x8, {
    label: getI18nString('org_admin_settings.compliance_center_label'),
    description: getI18nString('org_admin_settings.compliance_center_description'),
    onClick: () => {
      let e = '/conveyor/sso';
      isGovCluster() && (e = 'https://compliance.figma.com');
      openWindow(e, '_blank');
    }
  }, 'compliance-hub')), eo && !isGovCluster()) {
    let e = async e => {
      let t = await fetch(e === 'win' ? 'https://desktop.figma.com/win/releases.xml' : 'https://desktop.figma.com/mac-universal/releases.xml');
      let a = await t.text();
      let [n, s] = [a.match(/<title>Figma (\d+\.\d+\.\d+)<\/title>/)?.[1], a.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]];
      n && s && $(showModalHandler({
        type: aK,
        data: {
          version: n,
          releaseDate: s,
          platform: e
        }
      }));
    };
    tp.settings.push(jsx(x8, {
      label: getI18nString('org_admin_settings.enterprise_installer_label'),
      description: getI18nString('org_admin_settings.enterprise_installer_description'),
      onClick: () => e('win')
    }, 'enterprise-installer'));
    tp.settings.push(jsx(x8, {
      label: getI18nString('org_admin_settings.enterprise_installer_label_mac'),
      description: getI18nString('org_admin_settings.enterprise_installer_description_mac'),
      onClick: () => e('mac')
    }, 'enterprise-installer'));
  }
  J && !canSeeBillingAddressExp && tp.settings.push(jsx(x8, {
    label: getI18nString('settings_tab.vat_gst'),
    description: getI18nString('settings_tab.change_vat_gst_id'),
    onClick: () => Hq({
      org,
      dispatch: $
    })
  }));
  let tg = [jsx(x8, {
    label: getI18nString('settings_tab.delete_org_label'),
    description: getI18nString('settings_tab.delete_org_description'),
    onClick: () => $(showModalHandler({
      type: te
    }))
  }, 'delete-org')];
  org.domain_capture && tg.push(jsx(x8, {
    label: getI18nString('settings_tab.delete_user_label'),
    description: getI18nString('settings_tab.delete_user_description'),
    onClick: () => $(showModalHandler({
      type: tt
    }))
  }, 'delete-user'));
  let th = [isGovCluster() ? null : ew];
  eo && th.push(ek);
  org.k12_google_org ? th.push(eT, org.google_sso_only ? e9 : ta, tc, tp) : th.push(eT, e7, isGovCluster() ? {
    title: getI18nString('plan_settings.billing_section_header'),
    description: jsx(Fragment, {}),
    settings: [td]
  } : ts, tc, t_, isGovCluster() || Q ? null : tm, eE.settings.length ? eE : null, tp);
  return jsxs('div', {
    children: [jsx(_$$K, {
      title: getOrgAdminTabMessage(DashboardSection.SETTINGS)
    }), jsxs('div', {
      className: xd,
      children: [th.filter(e => !!e).filter(e => !!e?.settings.length).map(e => jsx(Kz, {
        ...e
      }, e.title)), !H && jsx('button', {
        className: jP,
        onClick: () => Y(!0),
        children: renderI18nText('settings_tab.show_more')
      }), H && jsx(Kz, {
        title: getI18nString('settings_tab.section_header.user_data'),
        settings: tg
      })]
    }), jsx('div', {
      className: PC
    })]
  });
}
let sl = createOptimistThunk((e, t, {
  liveStore: a
}) => {
  let n = e.dispatch;
  let {
    orgId,
    currentContact
  } = t;
  let r = a.getMutation(I2);
  let l = e => {
    n(FlashActions.error(resolveMessage(e, getI18nString('payments.change_billing_contact_error')), 5e3));
  };
  let o = async t => {
    await r({
      orgId,
      billingContacts: t,
      onRejected: l
    });
    e.dispatch(FlashActions.flash(getI18nString('org_admin_settings.billing_details.billing_contact_updated')));
  };
  n(showModalHandler({
    type: _$$E2,
    data: {
      currentContacts: currentContact,
      onSubmit: o,
      isOrg: !0
    }
  }));
});
export function $$so1() {
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexRow.itemsCenter.$,
    children: [jsx('span', {
      'aria-label': getI18nString('plan_settings.seat_upgrade_digests_tooltip'),
      'data-tooltip': getI18nString('plan_settings.seat_upgrade_digests_tooltip'),
      'data-tooltip-type': 'text',
      'className': cssBuilderInstance.mr4.$,
      'children': jsx(In, {
        icon: 'info-16',
        fill: 'secondary'
      })
    }), jsx(TextWithTruncation, {
      color: 'secondary',
      children: renderI18nText('settings_tab.disabled')
    })]
  });
}
function sd(e) {
  let t = !e.canEnable && !e.setting;
  let a = t ? 'secondary' : void 0;
  let s = null;
  t && (s = getI18nString('settings_tab.ip_allowlist_domain_verification_tooltip'));
  return jsxs('div', {
    className: cssBuilderInstance.flex.flexRow.itemsCenter.$,
    children: [t && jsx('span', {
      'aria-label': s,
      'data-tooltip': s,
      'data-tooltip-type': 'text',
      'className': cssBuilderInstance.mr4.$,
      'children': jsx(In, {
        icon: 'info-16',
        fill: 'secondary'
      })
    }), e.setting ? jsx(TextWithTruncation, {
      color: a,
      children: renderI18nText('settings_tab.enabled')
    }) : jsx(TextWithTruncation, {
      color: a,
      children: renderI18nText('settings_tab.disabled')
    })]
  });
}
export const Q = $$sr0;
export const I = $$so1;
//