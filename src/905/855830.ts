import c from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { reportError, SeverityLevel } from '../905/11';
import { DeepLinkType, DevModeUI, PluginAction, UISection } from '../905/15667';
import { getRumLoggingConfig } from '../905/16237';
import { registerModal } from '../905/102752';
import { popModalStack } from '../905/156213';
import { ServiceCategories } from '../905/165054';
import { getMPVisibleTheme } from '../905/187165';
import { W as _$$W } from '../905/200727';
import { useSingleEffect } from '../905/791079';
import { GW, iS, Jo, sp } from '../905/223565';
import { R as _$$R } from '../905/263821';
import { accountTypeRequestHandler } from '../905/281010';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { $ as _$$$ } from '../905/355181';
import { UpgradeAction } from '../905/370443';
import { getDefaultRequestModalTitle, getEditorTheme, getMinimumBundle, getProductBackgroundImgUrl, getProductName } from '../905/389382';
import { T as _$$T } from '../905/434246';
import { Link } from '../905/438674';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { AutoLayout } from '../905/470281';
import { ProductAccessTypeEnum } from '../905/513035';
import { HeaderModal } from '../905/519092';
import { e as _$$e2 } from '../905/579755';
import { requestUpgrade } from '../905/584989';
import { getFeatureFlags } from '../905/601108';
import { setupThemeContext } from '../905/614223';
import { getVisibleTheme } from '../905/640017';
import { WAFImage } from '../905/675859';
import { e0 } from '../905/696396';
import { SvgComponent } from '../905/714743';
import { c as _$$c2, t as _$$t2 } from '../905/722657';
import { ErrorBoundaryCrash } from '../905/751457';
import { a as _$$a } from '../905/948337';
import { TextWithTruncation } from '../905/984674';
import { A as _$$A2 } from '../2854/660288';
import { A as _$$A3 } from '../5724/628206';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { ConfiguredUpgradeRequestModalView } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { Wi } from '../figma_app/162641';
import { w as _$$w2 } from '../figma_app/171404';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';
import { FFileType, FMemberRoleType, FOrganizationLevelType, FPlanNameType, FProductAccessType } from '../figma_app/191312';
import { useSubscription } from '../figma_app/288654';
import { logAndTrackCTA } from '../figma_app/314264';
import { getSelectedView } from '../figma_app/386952';
import { throwTypeError } from '../figma_app/465776';
import { UpgradeRequestSetting } from '../figma_app/482728';
import { selectCurrentFile, useCurrentFileKey } from '../figma_app/516028';
import { BigTextInputForwardRef, ButtonBasePrimaryTracked, ButtonSecondary } from '../figma_app/637027';
import { v0 } from '../figma_app/639088';
import { wH } from '../figma_app/680166';
import { TrackingProvider } from '../figma_app/831799';
import { LoadingSpinner } from '../figma_app/858013';
import { isStarterUserAtom } from '../figma_app/864723';
import { isFullscreenView } from '../figma_app/976749';
import { requestOrgAccountTypeAction } from '../figma_app/990058';
import { A as _$$A } from '../vendor/737188';
let u = c;
function L(e, t, i, n) {
  switch (i) {
    case DeepLinkType.CODE_CHAT_LIMIT:
      if (getFeatureFlags().ai_ga && t === ProductAccessTypeEnum.EXPERT) return getI18nString('request_upgrade.header.figmake.more_prompts');
      break;
    case DeepLinkType.SHARE_DRAFTS:
    case DeepLinkType.IN_EDITOR_RESTRICTED_DRAFT:
    case DeepLinkType.RESTRICTED_DRAFT_SHARED_EMAIL:
      return getI18nString('request_upgrade.header.license_type.share_drafts', {
        licenseType: getProductName(e)
      });
    case UISection.FileMoveUpsell:
      return getI18nString('request_upgrade.header.license_type.move_drafts', {
        licenseType: getProductName(e)
      });
    case PluginAction.RUN_PLUGIN:
      return getI18nString('request_upgrade.header.license_type.run_plugins', {
        licenseType: getProductName(e)
      });
    case PluginAction.RUN_WIDGET:
      return getI18nString('request_upgrade.header.license_type.run_widgets', {
        licenseType: getProductName(e)
      });
    case PluginAction.MANAGE_EXTENSIONS:
      return getI18nString('request_upgrade.header.license_type.manage_extensions', {
        licenseType: getProductName(e)
      });
    case DeepLinkType.USER_SETTINGS:
    case DeepLinkType.DOWNGRADE_EMAIL:
    case DeepLinkType.LIFECYCLE_REUPGRADE_EMAIL:
      if (void 0 === t) {
        reportError(ServiceCategories.MONETIZATION_EXPANSION, new Error('Undefined seatTypeKey passed in for User Settings entrypoint'));
        break;
      }
      switch (t) {
        case ProductAccessTypeEnum.COLLABORATOR:
          return getI18nString('request_upgrade_modal.header.collab');
        case ProductAccessTypeEnum.DEVELOPER:
          return getI18nString('request_upgrade_modal.header.dev');
        case ProductAccessTypeEnum.EXPERT:
          return getI18nString('request_upgrade_modal.header.full');
        case ProductAccessTypeEnum.CONTENT:
          return getI18nString('request_upgrade_modal.header.content');
        default:
          throwTypeError(t);
      }
    case DeepLinkType.PUBLISH_SITES:
      if (e === FProductAccessType.FIGMAKE) return getI18nString('request_upgrade.header.figmake.publish');
      if (e === FProductAccessType.SITES) return getI18nString('request_upgrade.header.sites.publish');
      break;
    case DeepLinkType.SITE_SETTINGS:
      if (e === FProductAccessType.FIGMAKE) return getI18nString('request_upgrade.header.figmake.publish');
  }
  return n && (e === FProductAccessType.DESIGN || e === FProductAccessType.DEV_MODE) ? getI18nString('1_click_expansion.request_sent_add_details_to') : getDefaultRequestModalTitle(e);
}
let el = new class {
  constructor() {
    this.CreateProvisionalAccessSchemaValidator = createNoOpValidator();
  }
  create(e, t, i, n) {
    return this.CreateProvisionalAccessSchemaValidator.validate(async ({
      xr: r
    }) => await r.post(`/api/provisional_access/${e}/${t}`, APIParameterUtils.toAPIParameters({
      billable_product_key: i,
      file_key: n
    })));
  }
}();
let eu = 'request_upgrade_modal--contentContainer--Hqp0B';
function eh(e) {
  let t = {
    [FProductAccessType.DESIGN]: getI18nString('request_upgrade.title_figma'),
    [FProductAccessType.WHITEBOARD]: getI18nString('request_upgrade.title_figjam'),
    [FProductAccessType.DEV_MODE]: getI18nString('request_upgrade.title_request_access_to_dev'),
    [FProductAccessType.SLIDES]: getI18nString('request_upgrade.title_request_access_to_slides'),
    [FProductAccessType.SITES]: getI18nString('request_upgrade.title_request_access_to_sites'),
    [FProductAccessType.FIGMAKE]: getI18nString('request_upgrade.title_request_access_to_figmake'),
    [FProductAccessType.COOPER]: getI18nString('request_upgrade.title_figma')
  };
  let {
    orgName,
    orgId,
    imgUrl,
    licenseType,
    customMessage,
    permission,
    setting,
    onClose,
    isEligibleForProvisionalAccess,
    entryPoint
  } = e;
  let f = useDispatch();
  let _ = licenseType === FProductAccessType.DEV_MODE;
  let A = iS(licenseType);
  let y = useCurrentFileKey();
  let v = getMinimumBundle(licenseType);
  let I = isFullscreenView();
  let x = getVisibleTheme();
  let w = licenseType === FProductAccessType.WHITEBOARD && I ? 'light' : getMPVisibleTheme(x);
  let C = _$$R({
    licenseType,
    entryPoint,
    planDataForSocialProof: {
      planType: FOrganizationLevelType.ORG,
      planParentId: orgId,
      planTier: FPlanNameType.ENTERPRISE,
      isOrgGuest: permission === FMemberRoleType.GUEST
    }
  });
  let T = () => {
    f(popModalStack());
    onClose?.();
  };
  let R = v && jsxs('div', {
    className: cssBuilderInstance.flex.itemsCenter.gap4.pl4.pr8.bRadius5.colorBgHover.$,
    children: [jsx(_$$a, {}), A, jsx(Link, {
      href: '#',
      onClick: () => {
        el.create(FOrganizationLevelType.ORG, orgId, v, y).then(() => {
          T();
          e.actionOnProvisionalAccessGranted?.();
        });
      },
      children: renderI18nText('request_upgrade.provisional_access.curf.try_it_now')
    })]
  });
  return jsxs(HeaderModal, {
    title: entryPoint === DeepLinkType.USER_SETTINGS ? L(licenseType, v ?? void 0, entryPoint) : t[licenseType],
    maxWidth: 360,
    minWidth: 360,
    onClose: T,
    closeOnEsc: !0,
    transparentBackground: _,
    bottomSection: getFeatureFlags().is_extended_social_proof_enabled && C.seatType ? jsx(_$$w2, {
      seatType: C.seatType,
      licenseType: C.licenseType,
      entryPoint: C.entryPoint,
      planData: C.planData
    }) : null,
    children: [jsxs('div', {
      className: 'request_upgrade_modal--curfHeader--xqBWN',
      children: [jsx(WAFImage, {
        src: getProductBackgroundImgUrl(licenseType, w),
        className: 'request_upgrade_modal--imgPositioning---Y2Z-'
      }), jsx('div', {
        className: 'request_upgrade_modal--avatarPositioning--aK7ex',
        children: jsxs(AutoLayout, {
          horizontalAlignItems: 'center',
          verticalAlignItems: 'center',
          width: 'hug-contents',
          spacing: 0,
          children: [jsx(SvgComponent, {
            svg: _$$A3,
            className: 'request_upgrade_modal--figmaLogo--JQUp4 request_upgrade_modal--logo--CjTol'
          }), jsx(SvgComponent, {
            svg: _$$A2,
            className: 'request_upgrade_modal--arrowLogo--F3-Ch request_upgrade_modal--logo--CjTol'
          }), jsx(_$$e2, {
            entity: {
              id: orgId,
              img_url: imgUrl,
              name: orgName
            },
            size: 40
          })]
        })
      })]
    }), jsxs('div', {
      className: eu,
      children: [_ ? renderI18nText('org_upgrade.action_text.dev_mode', {
        requestUpgradeInstructions: getI18nString('org_upgrade.action_text.configurable_request_upgrade_instructions')
      }) : getI18nString('org_upgrade.action_text.configurable_request_upgrade_instructions'), jsx('div', {
        className: cssBuilderInstance.mt16.mb8.$,
        children: jsx(TextWithTruncation, {
          fontWeight: 'semi-bold',
          children: renderI18nText('configured_upgrade_request_modal.from_the_admins', {
            orgName
          })
        })
      }), jsx('div', {
        className: 'request_upgrade_modal--curfBlockQuote--bPJkx',
        children: jsx(_$$A, {
          options: {
            target: '_blank',
            attributes: {
              onClick: e => {
                trackEventAnalytics('Configurable Upgrade Request Modal external link clicked', {
                  orgId,
                  permission,
                  configuredUpgradeRequestSetting: setting,
                  url: e?.target?.href
                });
              }
            }
          },
          children: jsx('div', {
            className: cssBuilderInstance.preWrap.ml8.$,
            children: customMessage
          })
        })
      }), isEligibleForProvisionalAccess ? R : jsx('div', {
        className: cssBuilderInstance.flex.justifyEnd.$,
        children: jsx(_$$$, {
          variant: 'secondary',
          onClick: T,
          children: jsx(TextWithTruncation, {
            children: renderI18nText('general.got_it')
          })
        })
      })]
    })]
  });
}
let eA = atom('');
function ey({
  message: e,
  onMessageChange: t,
  licenseType: i,
  entryPoint: r
}) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: u()('request_upgrade_modal--stepTitle--HEFYi', 'request_upgrade_modal--optionalSecondaryText--pv0lf'),
      children: r !== DeepLinkType.ASK_TO_EDIT_ONE_CLICK && renderI18nText('request_upgrade.instruction_text_header_optional', {
        boldedInstructions: jsx('span', {
          className: 'request_upgrade_modal--importantInstructions--6ke2E',
          children: renderI18nText('request_upgrade.instructions')
        })
      })
    }), jsx(BigTextInputForwardRef, {
      placeholder: r === DeepLinkType.USER_SETTINGS ? getI18nString('request_upgrade.placeholder.seat') : Jo(i, r),
      type: 'textarea',
      value: e,
      onChange: t,
      className: 'request_upgrade_modal--messageInBillingRemodel--3LSNu request_upgrade_modal--message--igR-K',
      maxLength: 1e3
    })]
  });
}
export function $$eb0(e) {
  let t = useDispatch();
  let {
    planType,
    planParentId,
    planUserPermission
  } = e;
  let P = planType === FOrganizationLevelType.ORG;
  let [O, W] = useState('');
  let q = getSelectedView();
  let $ = e.licenseType === FProductAccessType.DEV_MODE || e.entryPoint.startsWith('dev_mode');
  let Z = $ ? FProductAccessType.DEV_MODE : e.licenseType;
  let X = q.editorType === FEditorType.DevHandoff;
  let [Q, J] = useState(0);
  let [ee, et] = useAtomValueAndSetter(eA);
  let ei = !!e.getIsEligibleForProvisionalAccess && e.getIsEligibleForProvisionalAccess(Z);
  let en = function (e) {
    let t = useAtomWithSubscription(isStarterUserAtom);
    let i = selectCurrentFile();
    return !t && !!i && i.editorType === FFileType.DESIGN && (e === DevModeUI.BlockingModal || e === DevModeUI.Upsell);
  }(e.entryPoint);
  let er = e.entryPoint === DeepLinkType.ASK_TO_EDIT_ONE_CLICK || en;
  let ea = useRef();
  let es = L(Z, e.seatTypeKey, e.entryPoint, er);
  let eo = function (e, t, i, r, a, s) {
    let o = sp(t, e, a, i, s);
    if (i === DeepLinkType.USER_SETTINGS) {
      return jsx(Fragment, {
        children: o
      });
    }
    let l = GW(t, e, a, i, s);
    return jsx(Fragment, {
      children: r ? l : o
    });
  }(e.planName || null, Z, e.entryPoint, ei ?? !1, er, e.seatTypeKey);
  let {
    onError,
    onClose,
    onSuccess,
    trackingProperties
  } = function (e) {
    let [t, i] = useAtomValueAndSetter(_$$t2);
    let n = _$$W();
    let a = useCallback(() => {
      i(_$$c2.DEFAULT);
    }, [i]);
    let s = useCallback(() => {
      i(_$$c2.REQUESTED);
    }, [i]);
    let o = useCallback(() => {
      i(_$$c2.DEFAULT);
    }, [i]);
    return e ? {
      onClose: a,
      onSuccess: s,
      onError: o,
      trackingProperties: n
    } : {};
  }($);
  let ev = e.onRequestAccess;
  let eI = i => {
    en || (onSuccess?.(), ev?.());
    t(P ? requestOrgAccountTypeAction({
      orgId: planParentId,
      entryPoint: e.entryPoint,
      adminIds: void 0,
      message: i,
      licenseType: e.licenseType,
      seatTypeKey: e.seatTypeKey,
      fileKey: e.fileKey,
      onError,
      onSuccess: t => {
        et(t);
        ei && e.actionOnProvisionalAccessGranted?.();
      },
      suppressVisualBell: ei ?? void 0,
      folderId: e.folderId
    }) : requestUpgrade({
      message: i,
      teamId: planParentId,
      licenseType: Z,
      seatTypeKey: e.seatTypeKey,
      fileKey: e.fileKey,
      entryPoint: e.entryPoint,
      onError,
      onSuccess: t => {
        et(t);
        ei && e.actionOnProvisionalAccessGranted?.();
      },
      hideSuccessMessage: ei,
      folderId: e.folderId
    }));
  };
  let {
    hasPendingRequest
  } = wH({
    plan: {
      id: planParentId,
      type: planType
    },
    entryPoint: e.entryPoint
  });
  let ex = useCallback(() => {
    en ? (onSuccess?.(), ev?.()) : onClose?.();
  }, [ev, onClose, onSuccess, en]);
  let eS = _$$R({
    seatType: e.seatTypeKey,
    licenseType: Z,
    entryPoint: e.entryPoint,
    planDataForSocialProof: {
      planType,
      planParentId,
      planTier: e.planTier,
      isOrgGuest: P && planUserPermission === FMemberRoleType.GUEST
    }
  });
  let ew = useCallback(i => {
    i && analyticsEventManager.trackDefinedEvent('activation.request_upgrade_modal_one_click_timeout_triggered', {});
    clearTimeout(Q);
    ex?.();
    t(popModalStack());
    ei && e.actionOnProvisionalAccessGranted?.();
  }, [Q, e, t, ex, ei]);
  useEffect(() => {
    ea.current = ew;
  }, [ew]);
  let eC = useCallback(e => ew(), [ew]);
  let eT = () => {
    document.visibilityState === 'hidden' && analyticsEventManager.trackDefinedEvent('activation.request_upgrade_modal_tab_hidden', {});
  };
  useEffect(() => {
    if (er) {
      window.addEventListener('beforeunload', eC);
      document.addEventListener('visibilitychange', eT);
      return () => {
        window.removeEventListener('beforeunload', eC);
        document.removeEventListener('visibilitychange', eT);
      };
    }
  }, [er, eC]);
  useSingleEffect(() => {
    if (er && Q === 0) {
      let e = setTimeout(() => {
        ea.current?.(!0);
      }, 3e5);
      J(e);
      return () => {
        clearTimeout(e);
      };
    }
  });
  useSingleEffect(() => {
    er && eI('');
  });
  let ek = () => {
    logAndTrackCTA({
      ...eM,
      trackingContext: eF,
      trackingDescriptor: UpgradeAction.CANCEL
    });
    er ? ew() : (t(popModalStack()), ex?.());
  };
  let eR = getRumLoggingConfig();
  let eN = useSubscription(ConfiguredUpgradeRequestModalView, {
    orgId: planParentId,
    permission: planUserPermission
  }, {
    enabled: P
  });
  let eP = eN.data?.currentUser?.baseOrgUser?.org;
  let eO = eP?.orgSharedSetting?.configuredUpgradeRequestSetting;
  let eD = planUserPermission === FMemberRoleType.GUEST;
  let eL = P && eP && (eO === UpgradeRequestSetting.ALL_USERS || eO === UpgradeRequestSetting.MEMBERS && !eD);
  if (eN.status === 'loading' && !eP) {
    return jsx(HeaderModal, {
      title: jsx(Wi, {}),
      maxWidth: 360,
      minWidth: 360,
      onClose: () => t(popModalStack()),
      transparentBackground: $,
      children: jsx('div', {
        className: 'request_upgrade_modal--loadingContainer--tG4tR',
        children: jsx(LoadingSpinner, {
          testId: 'curf-modal-loading-spinner'
        })
      })
    });
  }
  let eF = er ? e0.ONE_CLICK_REQUEST_NOTE_MODAL : eL ? e0.CONFIGURED_REQUEST_UPGRADE_MODAL : e0.REQUEST_UPGRADE_MODAL;
  let eM = {
    ...trackingProperties,
    billableProductKey: e.seatTypeKey,
    entryPoint: e.entryPoint,
    permission: planUserPermission,
    ...(P ? {
      orgId: e.planParentId,
      licenseType: e.licenseType,
      configuredUpgradeRequestSetting: eL ? eO : void 0
    } : {
      teamId: e.planParentId,
      editorType: e.licenseType
    })
  };
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: 'RequestUpgradeModal',
    fallback: jsx('div', {}),
    sentryTags: {
      area: ServiceCategories.MONETIZATION_EXPANSION
    },
    severity: SeverityLevel.Critical,
    onError: () => {
      t(VisualBellActions.enqueue({
        message: getI18nString('request_upgrade.modal.error'),
        error: !0
      }));
    },
    children: jsx(TrackingProvider, {
      name: eF,
      properties: eM,
      trackingOptions: eR,
      children: jsx(setupThemeContext, {
        brand: getEditorTheme(Z),
        children: eL ? jsx(eh, {
          actionOnProvisionalAccessGranted: e.actionOnProvisionalAccessGranted,
          customMessage: eP?.orgSharedSetting?.permittedConfiguredUpgradeRequestMessage,
          entryPoint: e.entryPoint,
          imgUrl: eP.imgUrl ?? '',
          isEligibleForProvisionalAccess: ei,
          licenseType: e.licenseType,
          onClose,
          orgId: planParentId,
          orgName: eP.name,
          permission: planUserPermission,
          setting: eO
        }) : jsxs(HeaderModal, {
          title: es,
          maxWidth: 360,
          minWidth: 360,
          onClose: ek,
          closeOnEsc: !0,
          truncateTitleText: !0,
          transparentBackground: X,
          headerClassName: 'request_upgrade_modal--titleText--a21HW',
          bottomSection: getFeatureFlags().is_extended_social_proof_enabled && eS.seatType ? jsx(_$$w2, {
            seatType: eS.seatType,
            licenseType: eS.licenseType,
            entryPoint: eS.entryPoint,
            planData: eS.planData
          }) : null,
          children: [jsx(_$$T, {
            licenseType: Z
          }), jsxs('div', {
            className: eu,
            children: [eo, jsx(ey, {
              message: O,
              onMessageChange: e => {
                W(e.currentTarget.value);
              },
              licenseType: Z,
              entryPoint: e.entryPoint
            }), jsxs('div', {
              className: `${v0} request_upgrade_modal--lgModalButtonRow--TwgPl`,
              children: [!er && jsx(ButtonSecondary, {
                onClick: ek,
                children: renderI18nText('request_upgrade.cancel_button')
              }), jsx(ButtonBasePrimaryTracked, {
                autoFocus: !0,
                className: 'request_upgrade_modal--confirmButton--IP-Y6',
                onClick: e => {
                  er ? (O && accountTypeRequestHandler.updateRequestMessage({
                    request_id: ee,
                    message: O
                  }).catch(() => {
                    t(VisualBellActions.enqueue({
                      message: 'Error updating request message.',
                      error: !0
                    }));
                  }), ew()) : (eI(O), t(popModalStack()));
                },
                disabled: !er && hasPendingRequest(Z),
                trackingOptions: eR,
                trackingProperties: {
                  ...eM,
                  trackingDescriptor: UpgradeAction.UPGRADE
                },
                children: er ? renderI18nText('request_upgrade.continue_button') : hasPendingRequest(Z) ? renderI18nText('request_upgrade.send_request_button_already_requested') : renderI18nText('request_upgrade.send_request_button')
              })]
            })]
          })]
        })
      })
    })
  });
}
registerModal($$eb0, 'RequestUpgradeModal');
export const R9 = $$eb0;