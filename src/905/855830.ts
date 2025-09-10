import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ServiceCategories as _$$e } from "../905/165054";
import { J as _$$J } from "../905/614223";
import { getFeatureFlags } from "../905/601108";
import { atom, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import c from "classnames";
import { trackEventAnalytics, analyticsEventManager } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { useSubscription } from "../figma_app/288654";
import { reportError, SeverityLevel } from "../905/11";
import { tH } from "../905/751457";
import { ks, nR, vd } from "../figma_app/637027";
import { Wi } from "../figma_app/162641";
import { kt } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { getRumLoggingConfig } from "../905/16237";
import { popModalStack } from "../905/156213";
import { $V } from "../figma_app/990058";
import { tc, PE, Q7, i$ } from "../905/15667";
import { Nu } from "../905/584989";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { R as _$$R } from "../905/263821";
import { Cu } from "../figma_app/314264";
import { VG, A7, F2, E2, ju } from "../905/389382";
import { throwTypeError } from "../figma_app/465776";
import { ProductAccessTypeEnum } from "../905/513035";
import { FProductAccessType, FOrganizationLevelType, FPlanNameType, FMemberRoleType, FFileType } from "../figma_app/191312";
import { _6 } from "../figma_app/386952";
import { ConfiguredUpgradeRequestModalView } from "../figma_app/43951";
import { wH } from "../figma_app/680166";
import { UQ } from "../figma_app/864723";
import { useCurrentFileKey, selectCurrentFile } from "../figma_app/516028";
import { FEditorType } from "../figma_app/53721";
import { Sm } from "../figma_app/482728";
import { e0 } from "../905/696396";
import { w as _$$w } from "../905/281010";
import { registerModal } from "../905/102752";
import { w as _$$w2 } from "../figma_app/171404";
import { T as _$$T } from "../905/434246";
import { N as _$$N } from "../905/438674";
import { a as _$$a } from "../905/948337";
import { A as _$$A } from "../vendor/737188";
import { oW } from "../905/675859";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { Y as _$$Y } from "../905/830372";
import { $ as _$$$ } from "../905/355181";
import { E as _$$E } from "../905/984674";
import { e as _$$e2 } from "../905/579755";
import { iq } from "../figma_app/976749";
import { DP } from "../905/640017";
import { i_ } from "../905/187165";
import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { OJ } from "../905/519092";
import { iS, Jo, sp, GW } from "../905/223565";
import { A as _$$A2 } from "../2854/660288";
import { A as _$$A3 } from "../5724/628206";
import { W as _$$W } from "../905/200727";
import { t as _$$t2, c as _$$c2 } from "../905/722657";
import { v0 } from "../figma_app/639088";
var u = c;
function L(e, t, i, n) {
  switch (i) {
    case tc.CODE_CHAT_LIMIT:
      if (getFeatureFlags().ai_ga && t === ProductAccessTypeEnum.EXPERT) return getI18nString("request_upgrade.header.figmake.more_prompts");
      break;
    case tc.SHARE_DRAFTS:
    case tc.IN_EDITOR_RESTRICTED_DRAFT:
    case tc.RESTRICTED_DRAFT_SHARED_EMAIL:
      return getI18nString("request_upgrade.header.license_type.share_drafts", {
        licenseType: VG(e)
      });
    case PE.FileMoveUpsell:
      return getI18nString("request_upgrade.header.license_type.move_drafts", {
        licenseType: VG(e)
      });
    case Q7.RUN_PLUGIN:
      return getI18nString("request_upgrade.header.license_type.run_plugins", {
        licenseType: VG(e)
      });
    case Q7.RUN_WIDGET:
      return getI18nString("request_upgrade.header.license_type.run_widgets", {
        licenseType: VG(e)
      });
    case Q7.MANAGE_EXTENSIONS:
      return getI18nString("request_upgrade.header.license_type.manage_extensions", {
        licenseType: VG(e)
      });
    case tc.USER_SETTINGS:
    case tc.DOWNGRADE_EMAIL:
    case tc.LIFECYCLE_REUPGRADE_EMAIL:
      if (void 0 === t) {
        reportError(_$$e.MONETIZATION_EXPANSION, Error("Undefined seatTypeKey passed in for User Settings entrypoint"));
        break;
      }
      switch (t) {
        case ProductAccessTypeEnum.COLLABORATOR:
          return getI18nString("request_upgrade_modal.header.collab");
        case ProductAccessTypeEnum.DEVELOPER:
          return getI18nString("request_upgrade_modal.header.dev");
        case ProductAccessTypeEnum.EXPERT:
          return getI18nString("request_upgrade_modal.header.full");
        case ProductAccessTypeEnum.CONTENT:
          return getI18nString("request_upgrade_modal.header.content");
        default:
          throwTypeError(t);
      }
    case tc.PUBLISH_SITES:
      if (e === FProductAccessType.FIGMAKE) return getI18nString("request_upgrade.header.figmake.publish");
      if (e === FProductAccessType.SITES) return getI18nString("request_upgrade.header.sites.publish");
      break;
    case tc.SITE_SETTINGS:
      if (e === FProductAccessType.FIGMAKE) return getI18nString("request_upgrade.header.figmake.publish");
  }
  return n && (e === FProductAccessType.DESIGN || e === FProductAccessType.DEV_MODE) ? getI18nString("1_click_expansion.request_sent_add_details_to") : A7(e);
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
let eu = "request_upgrade_modal--contentContainer--Hqp0B";
function eh(e) {
  let t = {
    [FProductAccessType.DESIGN]: getI18nString("request_upgrade.title_figma"),
    [FProductAccessType.WHITEBOARD]: getI18nString("request_upgrade.title_figjam"),
    [FProductAccessType.DEV_MODE]: getI18nString("request_upgrade.title_request_access_to_dev"),
    [FProductAccessType.SLIDES]: getI18nString("request_upgrade.title_request_access_to_slides"),
    [FProductAccessType.SITES]: getI18nString("request_upgrade.title_request_access_to_sites"),
    [FProductAccessType.FIGMAKE]: getI18nString("request_upgrade.title_request_access_to_figmake"),
    [FProductAccessType.COOPER]: getI18nString("request_upgrade.title_figma")
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
  let v = F2(licenseType);
  let I = iq();
  let x = DP();
  let w = licenseType === FProductAccessType.WHITEBOARD && I ? "light" : i_(x);
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
  let R = v && jsxs("div", {
    className: _$$s.flex.itemsCenter.gap4.pl4.pr8.bRadius5.colorBgHover.$,
    children: [jsx(_$$a, {}), A, jsx(_$$N, {
      href: "#",
      onClick: () => {
        el.create(FOrganizationLevelType.ORG, orgId, v, y).then(() => {
          T();
          e.actionOnProvisionalAccessGranted?.();
        });
      },
      children: renderI18nText("request_upgrade.provisional_access.curf.try_it_now")
    })]
  });
  return jsxs(OJ, {
    title: entryPoint === tc.USER_SETTINGS ? L(licenseType, v ?? void 0, entryPoint) : t[licenseType],
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
    children: [jsxs("div", {
      className: "request_upgrade_modal--curfHeader--xqBWN",
      children: [jsx(oW, {
        src: E2(licenseType, w),
        className: "request_upgrade_modal--imgPositioning---Y2Z-"
      }), jsx("div", {
        className: "request_upgrade_modal--avatarPositioning--aK7ex",
        children: jsxs(_$$Y, {
          horizontalAlignItems: "center",
          verticalAlignItems: "center",
          width: "hug-contents",
          spacing: 0,
          children: [jsx(_$$B, {
            svg: _$$A3,
            className: "request_upgrade_modal--figmaLogo--JQUp4 request_upgrade_modal--logo--CjTol"
          }), jsx(_$$B, {
            svg: _$$A2,
            className: "request_upgrade_modal--arrowLogo--F3-Ch request_upgrade_modal--logo--CjTol"
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
    }), jsxs("div", {
      className: eu,
      children: [_ ? renderI18nText("org_upgrade.action_text.dev_mode", {
        requestUpgradeInstructions: getI18nString("org_upgrade.action_text.configurable_request_upgrade_instructions")
      }) : getI18nString("org_upgrade.action_text.configurable_request_upgrade_instructions"), jsx("div", {
        className: _$$s.mt16.mb8.$,
        children: jsx(_$$E, {
          fontWeight: "semi-bold",
          children: renderI18nText("configured_upgrade_request_modal.from_the_admins", {
            orgName
          })
        })
      }), jsx("div", {
        className: "request_upgrade_modal--curfBlockQuote--bPJkx",
        children: jsx(_$$A, {
          options: {
            target: "_blank",
            attributes: {
              onClick: e => {
                trackEventAnalytics("Configurable Upgrade Request Modal external link clicked", {
                  orgId,
                  permission,
                  configuredUpgradeRequestSetting: setting,
                  url: e?.target?.href
                });
              }
            }
          },
          children: jsx("div", {
            className: _$$s.preWrap.ml8.$,
            children: customMessage
          })
        })
      }), isEligibleForProvisionalAccess ? R : jsx("div", {
        className: _$$s.flex.justifyEnd.$,
        children: jsx(_$$$, {
          variant: "secondary",
          onClick: T,
          children: jsx(_$$E, {
            children: renderI18nText("general.got_it")
          })
        })
      })]
    })]
  });
}
let eA = atom("");
function ey({
  message: e,
  onMessageChange: t,
  licenseType: i,
  entryPoint: r
}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: u()("request_upgrade_modal--stepTitle--HEFYi", "request_upgrade_modal--optionalSecondaryText--pv0lf"),
      children: r !== tc.ASK_TO_EDIT_ONE_CLICK && renderI18nText("request_upgrade.instruction_text_header_optional", {
        boldedInstructions: jsx("span", {
          className: "request_upgrade_modal--importantInstructions--6ke2E",
          children: renderI18nText("request_upgrade.instructions")
        })
      })
    }), jsx(ks, {
      placeholder: r === tc.USER_SETTINGS ? getI18nString("request_upgrade.placeholder.seat") : Jo(i, r),
      type: "textarea",
      value: e,
      onChange: t,
      className: "request_upgrade_modal--messageInBillingRemodel--3LSNu request_upgrade_modal--message--igR-K",
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
  let [O, W] = useState("");
  let q = _6();
  let $ = e.licenseType === FProductAccessType.DEV_MODE || e.entryPoint.startsWith("dev_mode");
  let Z = $ ? FProductAccessType.DEV_MODE : e.licenseType;
  let X = q.editorType === FEditorType.DevHandoff;
  let [Q, J] = useState(0);
  let [ee, et] = useAtomValueAndSetter(eA);
  let ei = !!e.getIsEligibleForProvisionalAccess && e.getIsEligibleForProvisionalAccess(Z);
  let en = function (e) {
    let t = useAtomWithSubscription(UQ);
    let i = selectCurrentFile();
    return !t && !!i && i.editorType === FFileType.DESIGN && (e === i$.BlockingModal || e === i$.Upsell);
  }(e.entryPoint);
  let er = e.entryPoint === tc.ASK_TO_EDIT_ONE_CLICK || en;
  let ea = useRef();
  let es = L(Z, e.seatTypeKey, e.entryPoint, er);
  let eo = function (e, t, i, r, a, s) {
    let o = sp(t, e, a, i, s);
    if (i === tc.USER_SETTINGS) return jsx(Fragment, {
      children: o
    });
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
    t(P ? $V({
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
    }) : Nu({
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
    i && analyticsEventManager.trackDefinedEvent("activation.request_upgrade_modal_one_click_timeout_triggered", {});
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
    "hidden" === document.visibilityState && analyticsEventManager.trackDefinedEvent("activation.request_upgrade_modal_tab_hidden", {});
  };
  useEffect(() => {
    if (er) {
      window.addEventListener("beforeunload", eC);
      document.addEventListener("visibilitychange", eT);
      return () => {
        window.removeEventListener("beforeunload", eC);
        document.removeEventListener("visibilitychange", eT);
      };
    }
  }, [er, eC]);
  _$$h(() => {
    if (er && 0 === Q) {
      let e = setTimeout(() => {
        ea.current?.(!0);
      }, 3e5);
      J(e);
      return () => {
        clearTimeout(e);
      };
    }
  });
  _$$h(() => {
    er && eI("");
  });
  let ek = () => {
    Cu({
      ...eM,
      trackingContext: eF,
      trackingDescriptor: _$$c.CANCEL
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
  let eL = P && eP && (eO === Sm.ALL_USERS || eO === Sm.MEMBERS && !eD);
  if ("loading" === eN.status && !eP) return jsx(OJ, {
    title: jsx(Wi, {}),
    maxWidth: 360,
    minWidth: 360,
    onClose: () => t(popModalStack()),
    transparentBackground: $,
    children: jsx("div", {
      className: "request_upgrade_modal--loadingContainer--tG4tR",
      children: jsx(kt, {
        testId: "curf-modal-loading-spinner"
      })
    })
  });
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
  return jsx(tH, {
    boundaryKey: "RequestUpgradeModal",
    fallback: jsx("div", {}),
    sentryTags: {
      area: _$$e.MONETIZATION_EXPANSION
    },
    severity: SeverityLevel.Critical,
    onError: () => {
      t(VisualBellActions.enqueue({
        message: getI18nString("request_upgrade.modal.error"),
        error: !0
      }));
    },
    children: jsx(fu, {
      name: eF,
      properties: eM,
      trackingOptions: eR,
      children: jsx(_$$J, {
        brand: ju(Z),
        children: eL ? jsx(eh, {
          actionOnProvisionalAccessGranted: e.actionOnProvisionalAccessGranted,
          customMessage: eP?.orgSharedSetting?.permittedConfiguredUpgradeRequestMessage,
          entryPoint: e.entryPoint,
          imgUrl: eP.imgUrl ?? "",
          isEligibleForProvisionalAccess: ei,
          licenseType: e.licenseType,
          onClose,
          orgId: planParentId,
          orgName: eP.name,
          permission: planUserPermission,
          setting: eO
        }) : jsxs(OJ, {
          title: es,
          maxWidth: 360,
          minWidth: 360,
          onClose: ek,
          closeOnEsc: !0,
          truncateTitleText: !0,
          transparentBackground: X,
          headerClassName: "request_upgrade_modal--titleText--a21HW",
          bottomSection: getFeatureFlags().is_extended_social_proof_enabled && eS.seatType ? jsx(_$$w2, {
            seatType: eS.seatType,
            licenseType: eS.licenseType,
            entryPoint: eS.entryPoint,
            planData: eS.planData
          }) : null,
          children: [jsx(_$$T, {
            licenseType: Z
          }), jsxs("div", {
            className: eu,
            children: [eo, jsx(ey, {
              message: O,
              onMessageChange: e => {
                W(e.currentTarget.value);
              },
              licenseType: Z,
              entryPoint: e.entryPoint
            }), jsxs("div", {
              className: `${v0} request_upgrade_modal--lgModalButtonRow--TwgPl`,
              children: [!er && jsx(nR, {
                onClick: ek,
                children: renderI18nText("request_upgrade.cancel_button")
              }), jsx(vd, {
                autoFocus: !0,
                className: "request_upgrade_modal--confirmButton--IP-Y6",
                onClick: e => {
                  er ? (O && _$$w.updateRequestMessage({
                    request_id: ee,
                    message: O
                  }).catch(() => {
                    t(VisualBellActions.enqueue({
                      message: "Error updating request message.",
                      error: !0
                    }));
                  }), ew()) : (eI(O), t(popModalStack()));
                },
                disabled: !er && hasPendingRequest(Z),
                trackingOptions: eR,
                trackingProperties: {
                  ...eM,
                  trackingDescriptor: _$$c.UPGRADE
                },
                children: er ? renderI18nText("request_upgrade.continue_button") : hasPendingRequest(Z) ? renderI18nText("request_upgrade.send_request_button_already_requested") : renderI18nText("request_upgrade.send_request_button")
              })]
            })]
          })]
        })
      })
    })
  });
}
registerModal($$eb0, "RequestUpgradeModal");
export const R9 = $$eb0;