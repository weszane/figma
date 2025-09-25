import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useState, createContext, useContext, Fragment as _$$Fragment, useCallback, useMemo, useId, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError, assertNotNullish } from "../figma_app/465776";
import { deepEqual } from "../905/382883";
import { ServiceCategories } from "../905/165054";
import { t as _$$t } from "../905/150656";
import { Button } from "../905/521428";
import { k as _$$k } from "../905/443820";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { UI3ConditionalWrapper } from "../905/341359";
import { useDebouncedCallback } from "use-debounce";
import { customHistory } from "../905/612521";
import { H as _$$H } from "../905/620380";
import { h as _$$h } from "../905/207101";
import { ErrorBoundaryCrash } from "../905/751457";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { b as _$$b } from "../905/403202";
import { I as _$$I } from "../905/293573";
import { r as _$$r } from "../905/334940";
import { o as _$$o } from "../905/785255";
import { r as _$$r2 } from "../905/290294";
import { D as _$$D } from "../905/572843";
import { unsetSymbol, withSubmissionError } from "../905/17894";
import { canSetFieldValue, getFieldValueOrDefault, isFieldValidated, assertFieldReady } from "../905/497882";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { __, tZ as _$$tZ, Mm } from "../905/271611";
import { FieldContainer } from "../905/567946";
import L from "classnames";
import { getAnnualPriceString } from "../figma_app/808294";
import { findFirstResult } from "../905/331038";
import { getValidationErrors } from "../905/113805";
import { l4 } from "../figma_app/975811";
import { FormattedInputVariant1 } from "../905/203369";
import { pK, _Z, z3, PW, vz, Dq } from "../905/235660";
import { A as _$$A4 } from "../905/601732";
import { t as _$$t3 } from "../905/104116";
import { CategorySelectDropdown } from "../905/19648";
import { A as _$$A5 } from "../905/554063";
import { A as _$$A6 } from "../905/425801";
import { $ as _$$$ } from "../905/410306";
import { A as _$$A7 } from "../905/813387";
import { BannerInset } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { N as _$$N } from "../905/572042";
import { BannerButton } from "../905/692618";
import { Link } from "../905/438674";
import { _ as _$$_ } from "../905/574895";
import { Vq, EX, Wh, Rc, nT, J9, Fh, Kc, bo, Gl } from "../905/448740";
import { Qi, uT, n1, se, fd } from "../figma_app/559491";
import { showModalHandler, hideModal } from "../905/156213";
import { generatePluginId, getCurrentPluginVersion, getLocalFileId, getOrgRole, validatePluginCodeSize, validateExtensionIconImage, hasRoleOrOrgChanged, mapToFileType, loadPluginManifest, loadLocalPluginSource, validateAndResizeIconImage, getPublishedResourceOrNull } from "../figma_app/300692";
import { HubTypeEnum, FileInputType, PaymentType, ResourceTypeNoComment } from "../figma_app/45218";
import { A as _$$A8 } from "../905/552947";
import { gG, ic as _$$ic } from "../905/702716";
import { u as _$$u } from "../905/952696";
import { K as _$$K } from "../figma_app/364226";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getPluginWidgetLabel, mapFileTypeToEnum } from "../figma_app/471982";
import { LG, WN, wC, bx } from "../905/448440";
import { A as _$$A9 } from "../905/562488";
import { EventShield } from "../905/821217";
import { b as _$$b2, c as _$$c2 } from "../905/308099";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { TextWithTruncation } from "../905/984674";
import { FRequestStatusType } from "../figma_app/191312";
import { G6, ir as _$$ir } from "../905/671449";
import { g as _$$g } from "../905/356410";
import { ButtonPrimitive } from "../905/632989";
import { A as _$$A0 } from "../905/251970";
import { WAFImage } from "../905/675859";
import { getValueOrFallback } from "../905/872825";
import { CW, M0, Rd, Gf, f7, Dd, MO, Z7, Q4, Kg, jr, l8, UU, of } from "../figma_app/599979";
import { IMAGE_TYPES } from "../905/966582";
import { L as _$$L } from "../905/597048";
import { RadioPrimitiveRoot } from "../905/22449";
import { RadioPrimitiveOption } from "../905/34525";
import { iy as _$$iy, BA, lR, Ee, uK, O0, I1 } from "../905/916525";
import { H as _$$H2 } from "../905/367945";
import { A as _$$A1 } from "../905/144978";
import { isResourceApprovedPublic, isResourcePendingPublishing } from "../figma_app/777551";
import { r as _$$r3 } from "../905/783627";
import { isNotNullish } from "../figma_app/95419";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp } from "../figma_app/860955";
import { J as _$$J4 } from "../905/125993";
import { NU } from "../figma_app/204891";
import { J as _$$J5 } from "../905/896954";
import { trackGenericEvent } from "../figma_app/314264";
import { getUserId, selectUser } from "../905/372672";
import { setupResourceAtomHandler, liveStoreInstance } from "../905/713695";
import { versionHandlerInstance } from "../905/985740";
import { $ as _$$$3 } from "../905/668315";
import { dn } from "../figma_app/994403";
import { O as _$$O } from "../905/483217";
import { T as _$$T } from "../905/943304";
import { K as _$$K2 } from "../905/198422";
import { S as _$$S3 } from "../905/60183";
import { noop } from 'lodash-es';
import { $ as _$$$4 } from "../905/379902";
import { Y as _$$Y } from "../905/185567";
import { isAnyPublisher, isAcceptedPublisher } from "../figma_app/564095";
import { PublisherType } from "../figma_app/155287";
import { v as _$$v } from "../905/318279";
import { Q as _$$Q2 } from "../905/978641";
import { X as _$$X, S as _$$S4 } from "../905/109653";
import { gx, A_, Dg } from "../905/870778";
import { a as _$$a } from "../905/482941";
import { y as _$$y } from "../905/616507";
import { ScreenReaderOnly } from "../905/172252";
import { trimOrEmpty } from "../figma_app/740025";
import { Yv } from "../905/488777";
import { vj as _$$vj } from "../905/652712";
import { l as _$$l } from "../905/493845";
import { B as _$$B } from "../905/536646";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { setupFormValidationHandler, setupAtomFormHandler } from "../905/15569";
import { q as _$$q } from "../905/840070";
import { v as _$$v2 } from "../905/513628";
import { Z9 } from "../905/104173";
import { S as _$$S5 } from "../905/622482";
import { T as _$$T3 } from "../905/191864";
import { z as _$$z } from "../905/348343";
import { om } from "../905/175462";
import { i2 } from "../905/57749";
import { aS } from "../905/772769";
import { f as _$$f } from "../905/265642";
import { m as _$$m } from "../905/924751";
import { Y as _$$Y2 } from "../905/192715";
import { PluginUploadApi } from "../905/771986";
import { trackEventAnalytics } from "../905/449184";
import { i as _$$i } from "../905/970229";
import { createProfileThunk } from "../figma_app/530167";
import { is as _$$is } from "../905/744076";
import { n as _$$n } from "../905/341791";
import { t as _$$t4 } from "../905/431558";
import { w as _$$w3 } from "../905/893785";
import { deepClone } from "../905/284190";
import { J as _$$J6 } from "../905/931050";
import { APILoadingStatus } from "../905/520829";
import { useTracking, TrackingProvider } from "../figma_app/831799";
import { i as _$$i2 } from "../905/810360";
import { VisualBellActions } from "../905/302958";
import { $$in, PublishModalState } from "../figma_app/350203";
import { readImageBytes } from "../905/289751";
import { J as _$$J7 } from "../905/296347";
import { _e, gI } from "../905/277373";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { A as _$$A11 } from "../905/72153";
import { useCurrentUserOrg } from "../905/845253";
import { getCurrentUserOrgUser } from "../figma_app/951233";
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser } from "../figma_app/465071";
import { PageTypeEnum } from "../figma_app/10554";
import { e0 as _$$e3 } from "../905/696396";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { r as _$$r5 } from "../905/490676";
import { KT, Cd, ME, jc, DK, $o } from "../905/54042";
function D({
  annualDiscountField: e
}) {
  if (!canSetFieldValue(e)) return null;
  let {
    currentValue
  } = e;
  return jsx(FieldContainer, {
    label: getI18nString("community.seller.discount"),
    children: jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("community.seller.give_a_discount_for_yearly")
      }),
      checked: currentValue.isActive,
      onChange: () => {
        let i = !currentValue.isActive;
        e.setValue({
          ...currentValue,
          isActive: i
        });
        i && __(_$$tZ.ANNUAL_DISCOUNT_INPUT);
      }
    })
  });
}
var F = L;
let z = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "DISCOUNT_EMPTY":
        return getI18nString("community.seller.discount_must_not_be_empty");
      case "DISCOUNT_TOO_LOW":
        return getI18nString("community.seller.discount_minimum_err");
      case "DISCOUNT_TOO_HIGH":
        return getI18nString("community.seller.discount_maximum_err");
      case "DISCOUNT_NOT_WHOLE_NUMBER":
        return getI18nString("community.seller.discount_must_follow_format");
      default:
        return throwTypeError(t);
    }
  }
};
let H = forwardRef(function ({
  annualDiscountField: e,
  touched: t,
  onTouched: i
}, a) {
  let s = getValidationErrors(e, !t);
  let o = findFirstResult(s, z);
  let l = getFieldValueOrDefault(e.deps.priceField, void 0);
  let d = useRef(null);
  if (useImperativeHandle(a, () => ({
    focus: e => {
      d.current?.focus(e);
    }
  }), []), !canSetFieldValue(e)) return null;
  let {
    currentValue
  } = e;
  return currentValue.isActive ? jsx(FieldContainer, {
    label: getI18nString("community.seller.yearly_discount_percentage"),
    error: o,
    children: jsxs("div", {
      className: pK,
      children: [jsx(FormattedInputVariant1, {
        ref: d,
        className: F()(_Z, {
          [z3]: !!o
        }),
        property: currentValue.discountPercentage,
        formatter: new l4(),
        onChange: t => {
          i?.();
          e.setValue?.({
            ...currentValue,
            discountPercentage: t
          });
        }
      }), isFieldValidated(e) && jsx("div", {
        className: PW,
        children: getAnnualPriceString(l, currentValue.discountPercentage)
      })]
    })
  }) : null;
});
let em = forwardRef(function ({
  localExtension: e,
  existingExtension: t,
  user: i,
  isWidget: a
}, s) {
  let o = useRef(null);
  useImperativeHandle(s, () => ({
    focus: e => {
      o.current?.focus(e);
    }
  }), []);
  let [l, d] = useState("");
  let c = a ? getI18nString("community.publishing.resource_id.widget") : getI18nString("community.publishing.resource_id.plugin");
  let u = Vq(e, t);
  if (e) switch (EX(e, t, i)) {
    case Wh.PAYMENTS_API:
      return jsx("div", {
        ref: o,
        children: jsx(eg, {})
      });
    case Wh.INSPECT_EDITOR_TYPE:
      return jsx("div", {
        ref: o,
        children: jsx(ef, {})
      });
    case Wh.PROPOSED_API:
      return jsx("div", {
        ref: o,
        children: jsx(e_, {
          isWidget: a
        })
      });
    case Wh.INVALID_MANIFEST:
      return jsx("div", {
        ref: o,
        children: jsx(eA, {
          localExtension: e
        })
      });
    case Wh.INVALID_ID:
    case Wh.DOCUMENT_ACCESS:
    case Wh.MISSING_EDITOR_TYPE:
    case Wh.MISSING_NETWORK_REASONING:
  }
  return jsxs("div", {
    ref: o,
    children: [jsx(FieldContainer, {
      label: c,
      children: jsx(ey, {
        pendingId: l,
        existingExtensionId: t?.id,
        setPendingId: d,
        isWidget: a,
        localExtension: e
      })
    }), jsx(FieldContainer, {
      label: getI18nString("community.publishing.compatibility"),
      children: jsx(ev, {
        existingExtension: t,
        localExtension: e
      })
    }), u && jsx(FieldContainer, {
      label: getI18nString("community.publishing.network"),
      children: jsx(eb, {
        isWidget: a,
        manifest: u
      })
    }), e && Rc(e) && jsx(FieldContainer, {
      label: getI18nString("community.publishing.documentAccess"),
      children: jsx(gG, {})
    })]
  });
});
function eh({
  message: e,
  dataTestId: t,
  children: i
}) {
  return jsx(FieldContainer, {
    label: getI18nString("universal_insert.manifest_error_title"),
    children: jsxs(BannerInset, {
      variant: "danger",
      "data-testid": t,
      children: [jsx(BannerMessage, {
        children: e
      }), i]
    })
  });
}
function eg() {
  return jsx(eh, {
    message: getI18nString("community.publishing.cannot_use_payments_api_if_non_approved"),
    dataTestId: "notApprovedPaymentsApiSellerBanner",
    children: jsx(_$$N, {
      trusted: !0,
      newTab: !0,
      href: "https://help.figma.com/hc/articles/12067637274519",
      children: getI18nString("general.learn_more")
    })
  });
}
function ef() {
  return jsx(eh, {
    message: getI18nString("community.publishing.cannot_publish_with_inspect_editor_type"),
    dataTestId: "inspectEditorTypeErrorBanner"
  });
}
function e_({
  isWidget: e
}) {
  let t = e ? getI18nString("community.publishing.cannot_publish_using_enableProposedApi.widget") : getI18nString("community.publishing.cannot_publish_using_enableProposedApi.plugin");
  return jsx(eh, {
    message: t,
    dataTestId: "proposedApiErrorBanner"
  });
}
function eA({
  localExtension: e
}) {
  let t = useDispatch();
  let i = renderI18nText("community.publishing.failed_to_read_file", {
    filename: "manifest.json"
  });
  return jsx(eh, {
    message: i,
    children: jsx(BannerButton, {
      onClick: () => {
        t(showModalHandler({
          type: _$$K,
          data: {
            localPlugin: e
          }
        }));
      },
      children: getI18nString("universal_insert.see_details")
    })
  });
}
function ey({
  pendingId: e,
  setPendingId: t,
  existingExtensionId: i,
  isWidget: r,
  localExtension: s
}) {
  let o = useDispatch();
  let l = async () => {
    if (!s) return;
    let e = r ? HubTypeEnum.WIDGET : HubTypeEnum.PLUGIN;
    let i = await generatePluginId(e);
    o(Qi({
      publishedPlugins: [i],
      src: "generatePluginId"
    }));
    t(i.id);
  };
  return i ? jsx(Fragment, {
    children: i
  }) : e ? jsx(_$$A8, {
    suggestion: getI18nString("community.publishing.id_with_number", {
      pendingId: e
    }),
    instruction: jsx("span", {
      className: "x172n1ly",
      children: renderI18nText("community.publishing.add_this_id_to_your_file", {
        filename: "manifest.json"
      })
    }),
    dataTestId: "idCodeSuggestion"
  }) : jsxs(BannerInset, {
    variant: "danger",
    children: [jsx(BannerMessage, {
      children: renderI18nText("community.publishing.invalid_id_in_manifest", {
        filename: "manifest.json"
      })
    }), jsx(BannerButton, {
      onClick: l,
      children: getI18nString("community.publishing.generate_id")
    })]
  });
}
function eb({
  isWidget: e,
  manifest: t
}) {
  let i = t.networkAccess;
  return i ? jsxs(Fragment, {
    children: [jsx(_$$u, {
      networkAccess: i,
      isWidget: e
    }), i.allowedDomains.includes("*") && null == i.reasoning && jsx("div", {
      className: "x1xmf6yo",
      children: jsx(BannerInset, {
        variant: "danger",
        children: jsx(BannerMessage, {
          children: getI18nString("community.publishing.allowed_domains_reasoning_not_specified")
        })
      })
    })]
  }) : jsx(_$$A8, {
    suggestion: '"networkAccess": { "allowedDomains": [...] }',
    dataTestId: "networkAccessSuggestion",
    instruction: jsxs("div", {
      children: [jsx("span", {
        className: "x172n1ly",
        children: renderI18nText(e ? "community.publishing.widget_missing_network_access" : "community.publishing.plugin_missing_network_access", {
          filename: "manifest.json"
        })
      }), jsx(Link, {
        href: "/plugin-docs/manifest/",
        trusted: !0,
        children: getI18nString("general.learn_more")
      })]
    })
  });
}
function ev({
  localExtension: e,
  existingExtension: t
}) {
  let i = nT(e, t);
  return e?.error && _$$ic(e.error) || null == i ? jsx(_$$A8, {
    suggestion: getI18nString("community.publishing.editor_type_figma"),
    instruction: getI18nString("community.publishing.please_add_this_to_your_manifest", {
      filename: "manifest.json"
    }),
    dataTestId: "editorTypeCodeSuggestion"
  }) : jsx("div", {
    className: "x78zum5 xdt5ytf x167g77z",
    children: i.map(e => jsx("div", {
      className: "x78zum5",
      children: jsx(_$$_, {
        pluginEditorType: e
      })
    }, e))
  });
}
function ew({
  isWidget: e,
  isSubscriptionField: t
}) {
  let i = getFieldValueOrDefault(t, !1);
  let r = LG(t.deps.existingExtension);
  return jsx("div", {
    className: cssBuilderInstance.pt8.pb8.$,
    children: jsx(_$$A9, {
      resourceType: getPluginWidgetLabel(e),
      isSubscription: i,
      hasBeenPublishedAsPaid: r
    })
  });
}
let eD = createContext({
  dataSecurityFieldManager: void 0,
  shouldShowErrors: !1
});
function eL({
  dataSecurityFieldManager: e,
  isWidget: t,
  touched: i
}) {
  let {
    currentValue,
    existingStatus
  } = e;
  if (void 0 === currentValue || currentValue === unsetSymbol) return null;
  let s = null === currentValue;
  return jsxs(FieldContainer, {
    label: t ? getI18nString("community.publishing.security_form.share_how_your_widget_handles_data") : getI18nString("community.publishing.security_form.share_how_your_plugin_handles_data"),
    subLabel: t ? getI18nString("community.publishing.security_form.widget_description") : getI18nString("community.publishing.security_form.plugin_description"),
    children: [jsx(Checkbox, {
      label: jsxs(Label, {
        children: [getI18nString("community.publishing.security_form.i_agree_to_share_this_information"), " ", jsx(Link, {
          href: t ? "https://help.figma.com/hc/articles/4410337103639" : "https://help.figma.com/hc/articles/360042293394",
          trusted: !0,
          newTab: !0,
          children: getI18nString("community.publishing.security_form.learn_more")
        })]
      }),
      checked: !s,
      onChange: t => {
        t ? e.restoreDefault?.() : e.optOutAndMaybeWarn?.();
      }
    }), !s && jsxs(EventShield, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: [jsx(eF, {
        currentFormStatus: existingStatus ?? null
      }), jsx(eD.Provider, {
        value: {
          dataSecurityFieldManager: e,
          shouldShowErrors: i
        },
        children: jsx("div", {
          className: "x78zum5 xdt5ytf x1rzw5jd x1n2onr6",
          "data-testid": "extension-security-form",
          children: currentValue.questions.map((e, t) => jsx(ej, {
            question: e,
            path: [t]
          }, `question-${t}`))
        })
      })]
    })]
  });
}
function eF({
  currentFormStatus: e
}) {
  let t;
  let i;
  let r;
  if (!e) return null;
  switch (e) {
    case FRequestStatusType.APPROVED:
      t = getI18nString("community.publishing.security_banner.approved.title");
      i = getI18nString("community.publishing.security_banner.approved.description");
      r = "success";
      break;
    case FRequestStatusType.PENDING:
      t = getI18nString("community.publishing.security_banner.pending.title");
      i = getI18nString("community.publishing.security_banner.pending.description");
      r = "brand";
      break;
    case FRequestStatusType.REJECTED:
      t = getI18nString("community.publishing.security_banner.rejected.title");
      i = jsxs(Fragment, {
        children: [jsx("div", {
          children: jsx(TextWithTruncation, {
            children: getI18nString("community.publishing.security_banner.rejected.description")
          })
        }), jsx("div", {}), jsx("div", {
          children: jsx(TextWithTruncation, {
            children: getI18nString("community.publishing.security_banner.rejected.description.check_email")
          })
        })]
      });
      r = "brand";
      break;
    default:
      throwTypeError(e);
  }
  return jsx(BannerInset, {
    variant: r,
    "data-testid": "extension-security-form-banner",
    children: jsx(BannerMessage, {
      title: t,
      children: i
    })
  });
}
function eM({
  text: e
}) {
  return jsx(TextWithTruncation, {
    "data-testid": "extension-security-form-error",
    color: "danger",
    children: e
  });
}
function ej({
  question: e,
  path: t
}) {
  let i;
  switch (e.inputType) {
    case "single_select":
      i = jsx(eU, {
        question: e,
        path: t
      });
      break;
    case "multi_select":
      i = jsx(eB, {
        question: e,
        path: t
      });
      break;
    case "text":
      i = jsx(eV, {
        question: e,
        path: t
      });
      break;
    default:
      return null;
  }
  let r = _$$tZ.DATA_SECURITY_QUESTION(t.join(","));
  return jsx(Mm, {
    id: r,
    children: i
  });
}
function eU({
  question: e,
  path: t
}) {
  let {
    dataSecurityFieldManager,
    shouldShowErrors
  } = useContext(eD);
  let {
    prompt,
    options
  } = e;
  let l = shouldShowErrors && G6(e);
  let d = options.findIndex(e => e.isSelected);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z",
    children: [jsx(_$$b2, {
      legend: jsx(TextWithTruncation, {
        fontWeight: "semi-bold",
        children: prompt
      }),
      value: d > -1 ? String(d) : void 0,
      onChange: e => {
        dataSecurityFieldManager?.updateSingleSelectQuestion(t[0], Number(e));
      },
      children: options.map((e, i) => jsxs(_$$Fragment, {
        children: [jsx(_$$c2, {
          value: String(i),
          label: jsx(Label, {
            children: e.label
          })
        }), jsx(eG, {
          option: e,
          optionIndex: i,
          path: t
        })]
      }, `option-${t.concat(i).join("-")}`))
    }), l && jsx(eM, {
      text: getI18nString("community.publishing.data_security.incomplete_single_select")
    })]
  });
}
function eB({
  question: e,
  path: t
}) {
  let {
    dataSecurityFieldManager,
    shouldShowErrors
  } = useContext(eD);
  let {
    prompt,
    options
  } = e;
  let l = shouldShowErrors && G6(e);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z",
    children: [jsx(TextWithTruncation, {
      fontWeight: "semi-bold",
      children: prompt
    }), options.map((e, a) => jsxs(_$$Fragment, {
      children: [jsx(Checkbox, {
        checked: e.isSelected ?? !1,
        onChange: () => {
          dataSecurityFieldManager?.updateMultiSelectQuestion(t[0], a);
        },
        label: jsx(Label, {
          children: e.label
        })
      }), jsx(eG, {
        option: e,
        optionIndex: a,
        path: t
      })]
    }, `option-${t.concat(a).join("-")}`)), l && jsx(eM, {
      text: getI18nString("community.publishing.data_security.incomplete_multi_select")
    })]
  });
}
function eV({
  question: e,
  path: t
}) {
  let {
    dataSecurityFieldManager,
    shouldShowErrors
  } = useContext(eD);
  let {
    prompt,
    value,
    placeholder
  } = e;
  let d = shouldShowErrors && G6(e);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x167g77z",
    children: [prompt && jsx("div", {
      children: _$$g(prompt)
    }), jsx(BigTextInputForwardRef, {
      className: F()(_Z, {
        [z3]: d
      }),
      value: value ?? "",
      onChange: e => {
        1 === t.length ? dataSecurityFieldManager?.updateTextQuestion(t[0], e.currentTarget.value) : 3 === t.length && dataSecurityFieldManager?.updateTextSubquestion(t, e.currentTarget.value);
      },
      placeholder
    }), d && jsx(eM, {
      text: getI18nString("community.publishing.data_security.incomplete_text")
    })]
  });
}
function eG({
  option: e,
  optionIndex: t,
  path: i
}) {
  return e.isSelected && e.subQuestions ? jsx("div", {
    className: "x400o59 x78zum5 xdt5ytf x167g77z x1y1aw1k",
    children: e.subQuestions.map((e, r) => jsx(ej, {
      question: e,
      path: i.concat(t, r)
    }, `sub-question-${r}`))
  }) : null;
}
function eZ(e) {
  if (e && "exception" !== e.type) return "ICON_MISSING" === e.key ? getI18nString("community.publishing.you_must_set_an_icon_for_your_resource") : throwTypeError(e.key);
}
let eX = forwardRef(function ({
  iconFieldManager: e,
  touched: t,
  onTouched: i
}, a) {
  let {
    setIconFromFile,
    setIconFromInput,
    deleteIcon
  } = e;
  let d = getValidationErrors(e, !t);
  let u = findFirstResult(d, eZ);
  let p = getFieldValueOrDefault(e, void 0);
  let m = useRef(null);
  let [h, g] = useState(!1);
  let f = useCallback(e => {
    m.current?.click();
    e.stopPropagation();
  }, []);
  let _ = useRef(null);
  let A = useRef(null);
  useImperativeHandle(a, () => ({
    focus: e => {
      _.current ? _.current.focus(e) : A.current?.focus(e);
    }
  }), []);
  let y = jsxs("div", {
    className: "icon_uploader--container---wkQt",
    onDragOver: e => {
      let t = getValueOrFallback(e.dataTransfer.items[0]?.type, IMAGE_TYPES);
      1 === e.dataTransfer.items.length && t && CW.includes(t) ? (e.dataTransfer.dropEffect = "copy", e.currentTarget.setAttribute("data-droppable", "true")) : (e.dataTransfer.dropEffect = "none", e.currentTarget.setAttribute("data-droppable", "false"));
      e.preventDefault();
    },
    onDragLeave: e => {
      e.currentTarget.removeAttribute("data-droppable");
      e.preventDefault();
    },
    onDrop: e => {
      if (e.currentTarget.removeAttribute("data-droppable"), !setIconFromFile) return;
      let t = e.dataTransfer.items[0]?.getAsFile();
      t && (i?.(), setIconFromFile(t, FileInputType.DROP), e.preventDefault());
    },
    onPaste: e => {
      if (!setIconFromFile) return;
      let t = e.clipboardData?.files[0];
      t && (i?.(), setIconFromFile(t, FileInputType.PASTE), e.preventDefault());
    },
    onKeyDown: e => {
      "Backspace" === e.key && (i?.(), deleteIcon?.(), e.preventDefault());
    },
    children: [jsx("input", {
      className: cssBuilderInstance.hidden.$,
      type: "file",
      ref: m,
      accept: CW.join(", "),
      onChange: async e => {
        !h && setIconFromInput && (i?.(), g(!0), await setIconFromInput(e.target), g(!1));
      },
      disabled: h || !setIconFromInput,
      "data-testid": "resource-publishing-icon-uploader-input"
    }), p ? jsxs("div", {
      className: "icon_uploader--iconContainer--pRhNQ",
      onClick: f,
      children: [jsx("div", {
        className: "icon_uploader--icon--YQ31-",
        children: jsx(WAFImage, {
          src: p.url,
          loading: "lazy",
          alt: getI18nString("community.publishing.extension_icon_image"),
          draggable: !1
        })
      }), jsx(ButtonPrimitive, {
        ref: _,
        className: "icon_uploader--deleteIconButton--EhbEQ",
        onClick: e => {
          i?.();
          deleteIcon?.();
          e.stopPropagation();
        },
        disabled: !deleteIcon,
        children: jsx(_$$A0, {})
      })]
    }) : jsxs("div", {
      className: "icon_uploader--emptyStateContainer--uVY6F",
      children: [jsx(_$$L, {}), jsx("div", {
        className: "icon_uploader--emptyStateControlsContainer--6aAvE",
        children: jsx(Button, {
          ref: A,
          onClick: f,
          disabled: h || !setIconFromInput,
          children: getI18nString("community.publishing.add_image")
        })
      })]
    })]
  });
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.set_an_icon"),
    subLabel: getI18nString("community.publishing.recommended_size_in_pixels", {
      mediaWidth: 128,
      mediaHeight: 128
    }),
    afterLabelContent: y,
    error: u,
    required: !0,
    children: jsx("div", {})
  });
});
let e1 = forwardRef(function ({
  isSubscriptionField: e,
  onTouched: t
}, i) {
  let a = useRef(null);
  if (useImperativeHandle(i, () => ({
    focus: e => {
      a.current?.focus(e);
    }
  }), []), e.deps.isWidget) return null;
  let s = !canSetFieldValue(e);
  return jsx(FieldContainer, {
    label: getI18nString("community.seller.payment_type"),
    required: !0,
    disabled: s,
    children: jsxs(RadioPrimitiveRoot, {
      className: _$$iy,
      readonly: s,
      value: getFieldValueOrDefault(e, !1) ? PaymentType.SUBSCRIPTION : PaymentType.ONE_TIME,
      onChange: i => {
        t?.();
        let n = i === PaymentType.SUBSCRIPTION;
        e.setValue?.(n);
      },
      children: [jsx(e2, {
        value: PaymentType.ONE_TIME,
        title: getI18nString("community.seller.one_time_payment")
      }), jsx(e2, {
        value: PaymentType.SUBSCRIPTION,
        title: getI18nString("community.seller.monthly_subscription")
      })]
    })
  });
});
function e2({
  value: e,
  title: t
}) {
  return jsxs("label", {
    className: BA,
    children: [jsx(RadioPrimitiveOption, {
      value: e,
      id: e,
      className: lR
    }), jsx("div", {
      className: Ee,
      children: t
    })]
  });
}
function e6({
  newVersionField: e,
  publishRoleField: t
}) {
  var i;
  if (!canSetFieldValue(e)) return null;
  let {
    existingExtension
  } = e.deps;
  let a = getFieldValueOrDefault(e, !1);
  let s = 0;
  existingExtension && (s = parseInt(getCurrentPluginVersion(existingExtension)?.version || "0"));
  a && s++;
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.version"),
    afterLabelContent: `${getI18nString("community.publishing.version")} ${s}`,
    children: jsx(Checkbox, {
      label: jsx(Label, {
        children: (i = getFieldValueOrDefault(t, void 0), i?.is_public ? existingExtension && isResourceApprovedPublic(existingExtension) ? getI18nString("community.publishing.publish_a_new_version") : existingExtension && isResourcePendingPublishing(existingExtension) ? getI18nString("community.publishing.resubmit_a_new_version") : getI18nString("community.publishing.submit_a_new_version") : getI18nString("community.publishing.publish_a_new_version"))
      }),
      checked: a,
      onChange: () => {
        e.setValue(!a);
      }
    })
  });
}
let tc = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    return "EDITOR_TYPE_MISMATCH" === t ? getI18nString("community.publishing.extension_playground_file_editor_type_error") : throwTypeError(t);
  }
};
let tu = forwardRef(function ({
  playgroundFileField: e,
  onTouched: t
}, i) {
  let s = getUserId() ?? void 0;
  let o = getFieldValueOrDefault(e, void 0)?.playgroundFile;
  let [l] = setupResourceAtomHandler(tm(o?.key || ""));
  let d = l.data;
  let c = o?.editor_type ? mapFileTypeToEnum(o.editor_type) : null;
  let u = useRef(null);
  let p = useRef(null);
  useImperativeHandle(i, () => ({
    focus: e => {
      u.current ? u.current.focus(e) : p.current?.focus(e);
    }
  }), []);
  let m = useDispatch();
  let h = getValidationErrors(e, !1);
  let g = findFirstResult(h, tc);
  if (!canSetFieldValue(e)) return null;
  let {
    existingExtension,
    localExtension,
    isWidget
  } = e.deps;
  let y = getFieldValueOrDefault(e, void 0)?.playgroundFilePublishType;
  let v = getLocalFileId(existingExtension, localExtension);
  let I = i => {
    t?.();
    e.setValue?.({
      playgroundFile: i,
      playgroundFilePublishType: _$$J5.Actions.SET
    });
  };
  let E = existingExtension ? getCurrentPluginVersion(existingExtension) : null;
  let x = E && y === _$$J5.Actions.NOOP && d && d.id !== E.playground_file_version_id;
  let S = E && existingExtension && y === _$$J5.Actions.SET && o?.key === E.playground_fig_file?.key;
  let w = jsxs("div", {
    children: [jsx("div", {
      onClick: () => {
        m(showModalHandler({
          type: _$$$3,
          data: {
            pluginId: v,
            onAddCallback: I,
            isWidget,
            pluginManifestEditorType: nT(localExtension, existingExtension) || []
          },
          showModalsBeneath: !0
        }));
      },
      className: "playground_file_select--playgroundFileSelect--2Z7uR",
      children: o ? jsxs(Fragment, {
        children: [jsxs("div", {
          className: "playground_file_select--playgroundFileThumbnail--5kV7k",
          children: [jsx(NU, {
            file: o,
            noBorder: !0
          }), c && jsx("div", {
            className: "playground_file_select--playgroundFileEditorBadge--sllih",
            children: jsx(dn, {
              editorType: c,
              isPlaygroundFileInsertBadge: !0
            })
          })]
        }), isNotNullish(o) && isNotNullish(d) && jsx(tp, {
          onPlaygroundFileRemoveFile: () => {
            t?.();
            e.setValue?.({
              playgroundFile: null,
              playgroundFilePublishType: _$$J5.Actions.REMOVE
            });
          },
          onPlaygroundFileRevertVersion: S ? () => {
            t?.();
            e.setValue?.({
              playgroundFile: o,
              playgroundFilePublishType: _$$J5.Actions.NOOP
            });
          } : void 0,
          onPlaygroundFileUpdateVersion: x ? () => {
            t?.();
            e.setValue?.({
              playgroundFile: o,
              playgroundFilePublishType: _$$J5.Actions.SET
            });
          } : void 0,
          playgroundFile: o,
          menuButtonRef: u
        })]
      }) : jsx(_$$O, {
        error: !!g
      })
    }), jsx("div", {
      style: {
        maxWidth: "128px"
      },
      children: isNotNullish(o) && jsx("p", {
        className: "x1xmf6yo xlyipyv xuxw1ft xb3r6kr x1n0bwc9",
        children: o?.name
      })
    })]
  });
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.include_a_playground_file"),
    subLabel: jsx("div", {
      children: renderI18nText("community.publishing.plugin_playground_file_help_text_new", {
        useTemplateLink: jsx(Link, {
          href: "https://www.figma.com/community/file/1174497187775558195",
          onClick: () => {
            trackGenericEvent("playground_template_link_click", {
              isWidget,
              userId: s,
              pluginId: v
            });
          },
          trusted: !0,
          children: getI18nString("community.publishing.use_our_template")
        })
      })
    }),
    afterLabelContent: w,
    error: g,
    children: jsx("div", {})
  });
});
function tp({
  onPlaygroundFileRemoveFile: e,
  onPlaygroundFileRevertVersion: t,
  onPlaygroundFileUpdateVersion: i,
  playgroundFile: r,
  menuButtonRef: a
}) {
  let {
    getTriggerProps,
    manager
  } = setupMenu();
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(ButtonPrimitive, {
      className: "playground_file_select--playgroundFileOverflowMenuButton--IQqZM",
      ref: a,
      ...getTriggerProps(),
      children: jsx(_$$J4, {})
    }), jsxs(MenuContainerComp, {
      children: [jsx(MenuItemComp, {
        onClick: () => {
          let e = r?.url;
          e && customHistory.redirect(e, "_blank");
        },
        children: getI18nString("community.publishing.playground_file.dropdown.open_file")
      }), t ? jsx(MenuItemComp, {
        onClick: t,
        children: getI18nString("community.publishing.playground_file.dropdown.revert_to_previous_version")
      }) : void 0, i ? jsx(MenuItemComp, {
        onClick: i,
        children: getI18nString("community.publishing.playground_file.dropdown.update_to_latest_version")
      }) : void 0, jsx(MenuItemComp, {
        onClick: e,
        children: getI18nString("community.publishing.playground_file.dropdown.remove")
      })]
    })]
  });
}
let tm = liveStoreInstance.Query({
  fetch: async e => (await versionHandlerInstance.getVersions({
    fileKey: e
  })).data.meta.versions[0],
  enabled: e => "" !== e
});
function tv(e, t) {
  let {
    existingExtension,
    user
  } = e;
  return tI(e) ? J9(existingExtension) && t.is_public ? {
    key: "EXTENSION_IS_PAID_RESOURCE",
    data: {}
  } : existingExtension && isAnyPublisher(existingExtension, user?.id) ? {
    key: "USER_IS_NOT_EXTENSION_OWNER",
    data: {}
  } : void 0 : {
    key: "NO_ORG_TO_PUBLISH_AS",
    data: {}
  };
}
function tI(e) {
  let {
    existingExtension,
    org,
    isOrgMember
  } = e;
  return getOrgRole(existingExtension, org ?? null, isOrgMember);
}
let tx = e => {
  if (e) switch (e.key) {
    case "NO_ORG_TO_PUBLISH_AS":
      return;
    case "EXTENSION_IS_PAID_RESOURCE":
      return getI18nString("community.publishing.paid_extensions_cannot_be_published_privately");
    case "USER_IS_NOT_EXTENSION_OWNER":
      return getI18nString("community.publishing.you_must_be_the_owner_to_update_where_this_is_published");
    default:
      return throwTypeError(e.key);
  }
};
function tS({
  publishRoleField: e,
  isDraftPaidResource: t
}) {
  let i = !canSetFieldValue(e) || t;
  let a = getFieldValueOrDefault(e, void 0);
  let s = getI18nString("community.publishing.paid_extensions_cannot_be_published_privately");
  let o = a?.is_public ? PublisherType.PUBLIC : PublisherType.ORG;
  let l = tI(e.deps);
  let d = useMemo(() => {
    if (!i) return function (t) {
      t === PublisherType.PUBLIC ? e.setValue({
        is_public: !0
      }) : null !== l && e.setValue({
        org: l
      });
    };
  }, [e, l, i]);
  return jsx(FieldContainer, {
    label: getI18nString("community.publishing.publish_to"),
    afterErrorContent: a && tx(tv(e.deps, a)) || (t ? s : void 0),
    children: jsxs(RadioPrimitiveRoot, {
      className: _$$iy,
      value: o,
      readonly: i,
      onChange: d ?? noop,
      children: [l && jsx(tw, {
        icon: jsx(_$$$4, {}),
        roleToPublishAs: PublisherType.ORG,
        title: l.name,
        subtitle: getI18nString("community.cards.private")
      }), jsx(tw, {
        icon: jsx(_$$Y, {}),
        roleToPublishAs: PublisherType.PUBLIC,
        title: getI18nString("community.community"),
        subtitle: getI18nString("community.publishing.public")
      })]
    })
  });
}
function tw({
  icon: e,
  roleToPublishAs: t,
  title: i,
  subtitle: r
}) {
  return jsxs("label", {
    className: uK,
    children: [e, jsx(RadioPrimitiveOption, {
      value: t,
      id: t,
      className: O0
    }), jsx("div", {
      className: Ee,
      children: i
    }), jsx("div", {
      className: I1,
      children: r
    })]
  });
}
let tT = e => {
  if (e && "validation" === e.type) return "RELEASE_NOTES_TOO_LONG" === e.key ? getI18nString("community.publishing.release_notes_must_be_at_most_10000_characters_long") : throwTypeError(e.key);
};
let tk = forwardRef(function ({
  releaseNotesField: e,
  touched: t,
  onTouched: i
}, a) {
  let s = useRef(null);
  let o = getValidationErrors(e, !t);
  let l = findFirstResult(o, tT);
  useImperativeHandle(a, () => ({
    focus: () => {
      s.current?.focus();
    }
  }), []);
  let {
    newVersionField
  } = e.deps;
  let c = getFieldValueOrDefault(newVersionField, !1);
  let u = getFieldValueOrDefault(e, {
    newVersion: "",
    oldVersion: ""
  });
  let p = useCallback(t => {
    i?.();
    let n = t.currentTarget.value;
    c ? e.setValue?.({
      newVersion: n,
      oldVersion: u.oldVersion
    }) : e.setValue?.({
      newVersion: u.newVersion,
      oldVersion: n
    });
  }, [c, u, e, i]);
  return canSetFieldValue(e) ? jsx(FieldContainer, {
    label: getI18nString("community.publishing.version_release_notes"),
    error: l,
    children: jsx(EventShield, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: jsx(_$$v, {
        className: F()(vz, {
          [z3]: !!l
        }),
        ref: s,
        onChange: p,
        delay: 0,
        value: c ? u.newVersion : u.oldVersion,
        placeholder: c ? getI18nString("community.publishing.whats_changed_in_this_new_version") : getI18nString("community.publishing.what_can_users_expect_in_this_current_version")
      })
    })
  }) : null;
});
let tN = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    return "WIDGET_SNAPSHOT_MISSING" === t ? getI18nString("community.publishing.you_must_set_a_snapshot_for_your_widget") : throwTypeError(t);
  }
};
let tP = forwardRef(function ({
  snapshotFieldManager: e,
  touched: t,
  onTouched: i
}, a) {
  let s = getValidationErrors(e, !t);
  let o = findFirstResult(s, tN);
  let l = getFieldValueOrDefault(e, void 0);
  let d = useRef(null);
  let u = useRef(null);
  useImperativeHandle(a, () => ({
    focus: e => {
      d.current ? d.current.focus(e) : u.current?.focus(e);
    }
  }), []);
  let p = useRef(null);
  let m = useCallback(e => {
    p.current?.click();
    e.stopPropagation();
  }, []);
  let [h, g] = useState(!1);
  let {
    setSnapshotFromFile,
    deleteSnapshot,
    restoreDefaultSnapshot,
    setSnapshotFromInput
  } = e;
  let v = !l;
  return canSetFieldValue(e) ? jsx(FieldContainer, {
    label: getI18nString("community.publishing.set_a_widget_snapshot"),
    error: o,
    afterErrorContent: v && jsx(BannerInset, {
      children: jsx(BannerMessage, {
        children: getI18nString("community.publishing.you_can_right_click_a_widget_and_select_set_as_widget_thumbnail")
      })
    }),
    required: !0,
    children: jsx(EventShield, {
      display: "block",
      eventListeners: ["onKeyDown"],
      children: jsxs("div", {
        className: "snapshot_uploader--container--lZqVB",
        onClick: m,
        onDragOver: e => {
          let t = getValueOrFallback(e.dataTransfer.items[0]?.type, IMAGE_TYPES);
          1 === e.dataTransfer.items.length && t === IMAGE_TYPES.PNG ? (e.dataTransfer.dropEffect = "copy", e.currentTarget.setAttribute("data-droppable", "true")) : (e.dataTransfer.dropEffect = "none", e.currentTarget.setAttribute("data-droppable", "false"));
          e.preventDefault();
        },
        onDragLeave: e => {
          e.currentTarget.removeAttribute("data-droppable");
          e.preventDefault();
        },
        onDrop: e => {
          if (e.currentTarget.removeAttribute("data-droppable"), !setSnapshotFromFile) return;
          let t = e.dataTransfer.items[0]?.getAsFile();
          t && (i?.(), setSnapshotFromFile(t), e.preventDefault());
        },
        onPaste: e => {
          if (!setSnapshotFromFile) return;
          let t = e.clipboardData?.files[0];
          t && (i?.(), setSnapshotFromFile(t), e.preventDefault());
        },
        children: [jsx("input", {
          className: cssBuilderInstance.hidden.$,
          type: "file",
          ref: p,
          accept: IMAGE_TYPES.PNG,
          onChange: async e => {
            !h && setSnapshotFromInput && (i?.(), g(!0), await setSnapshotFromInput(e.target), g(!1));
          },
          disabled: h || !setSnapshotFromInput,
          "data-testid": "resource-publishing-snapshot-uploader-input"
        }), l ? jsxs("div", {
          className: "snapshot_uploader--snapshotContainer--0W4v7",
          children: [jsx("div", {
            className: "snapshot_uploader--snapshot--aT5nB",
            children: jsx(_$$Q2, {
              src: l.url,
              loading: "lazy",
              alt: getI18nString("community.publishing.snapshot_image"),
              draggable: !1,
              crossOrigin: "use-credentials"
            })
          }), jsx(ButtonPrimitive, {
            ref: d,
            className: "snapshot_uploader--deleteSnapshotButton--0wAYZ",
            onClick: e => {
              i?.();
              deleteSnapshot?.();
              e.stopPropagation();
            },
            disabled: !deleteSnapshot,
            children: jsx(_$$A0, {})
          })]
        }) : jsxs("div", {
          className: "snapshot_uploader--emptyStateContainer--Wbbto",
          children: [jsx(_$$L, {}), jsxs("div", {
            className: "snapshot_uploader--emptyStateControlsContainer--VkPcp",
            children: [restoreDefaultSnapshot && jsx(Button, {
              disabled: h,
              onClick: e => {
                i?.();
                restoreDefaultSnapshot();
                e.stopPropagation();
              },
              children: getI18nString("community.publishing.use_default_snapshot")
            }), jsx(Button, {
              ref: u,
              variant: restoreDefaultSnapshot ? "link" : void 0,
              onClick: m,
              disabled: h || !setSnapshotFromInput,
              children: l ? getI18nString("community.publishing.change_image") : getI18nString("community.publishing.upload_image")
            })]
          })]
        })]
      })
    })
  }) : null;
});
let tU = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "TAGLINE_EMPTY":
        return getI18nString("community.publishing.add_a_tagline");
      case "TAGLINE_TOO_LONG":
        return getI18nString("community.publishing.tagline_must_be_at_most_100_characters_long");
      default:
        return throwTypeError(t);
    }
  }
};
let tB = forwardRef(function ({
  taglineField: e,
  isWidget: t,
  touched: i,
  onTouched: a
}, s) {
  let o = useRef(null);
  let l = getValidationErrors(e, !i);
  let d = findFirstResult(l, tU);
  let c = trimOrEmpty(getFieldValueOrDefault(e, "")).length;
  let u = useId();
  let p = `${u}-input`;
  let m = `${u}-character-count`;
  let h = `${u}-error`;
  useImperativeHandle(s, () => ({
    focus: e => {
      o.current?.focus(e);
    }
  }), []);
  return jsx(FieldContainer, {
    label: getI18nString("community.general.tagline"),
    labelHtmlFor: p,
    afterLabelContent: jsxs("div", {
      id: m,
      className: Dq,
      "aria-live": "polite",
      "aria-atomic": !0,
      children: [jsx("span", {
        "aria-hidden": !0,
        children: `${c}/100`
      }), jsx(ScreenReaderOnly, {
        children: getI18nString("community.publishing.character_count_status", {
          currentCount: c,
          maxCount: 100
        })
      })]
    }),
    error: d,
    errorId: h,
    required: !0,
    children: jsx(EventShield, {
      display: "contents",
      eventListeners: ["onKeyDown"],
      children: jsx(BigTextInputForwardRef, {
        ref: o,
        "aria-describedby": m,
        "aria-errormessage": d ? h : void 0,
        "aria-invalid": !!d,
        autoFocus: !0,
        className: F()(_Z, {
          [z3]: !!d
        }),
        dataTestId: "publish-modal-tagline",
        disabled: !canSetFieldValue(e),
        id: p,
        onChange: t => {
          a?.();
          e.setValue?.(t.currentTarget.value);
        },
        placeholder: t ? getI18nString("community.publishing.widget_tagline_input_placeholder") : getI18nString("community.publishing.plugin_tagline_input_placeholder"),
        value: getFieldValueOrDefault(e, "")
      })
    })
  });
});
async function it(e) {
  let {
    releaseNotes,
    name,
    description,
    tagline,
    category,
    manifest,
    uploadImages,
    validExtensionId,
    isWidget
  } = e;
  let c = {
    manifest,
    release_notes: assertFieldReady(releaseNotes).currentValue.newVersion,
    name: assertFieldReady(name).currentValue,
    description: assertFieldReady(description).currentValue,
    tagline: assertFieldReady(tagline).currentValue,
    category_id: assertFieldReady(category).currentValue?.id ?? null,
    images_sha1: uploadImages
  };
  return await PluginUploadApi.postPluginUpload(c, validExtensionId, isWidget);
}
async function ii(e) {
  let t;
  let i;
  let n;
  let {
    icon,
    snapshot,
    carouselMedia,
    imagePaths,
    code
  } = e;
  code && "codeUploadUrl" in imagePaths && (t = uT(imagePaths.codeUploadUrl, code), validatePluginCodeSize(code));
  let d = assertFieldReady(icon).currentValue?.buffer;
  if (null != d) {
    i = M0(imagePaths.iconUploadUrl, d);
    let e = _$$i(d) ?? "image/png";
    validateExtensionIconImage(new File([d], "icon.png", {
      type: e
    }));
  }
  let c = assertFieldReady(snapshot).currentValue?.buffer;
  null != c && imagePaths.snapshotUploadUrl && (n = M0(imagePaths.snapshotUploadUrl, c));
  let {
    allMedia
  } = assertFieldReady(carouselMedia).currentValue;
  let p = Rd(imagePaths.carouselImages, allMedia);
  return await Promise.all([t, i, n, ...p]);
}
async function ir({
  uploadVideos: e,
  validExtensionId: t,
  isWidget: i,
  allMedia: n
}) {
  let r = e.map(async e => {
    let r = await Gf(i ? "widgets" : "plugins", t, {
      sha1: e.sha1,
      bytes: e.bytes
    }, e.video_thumbnail_buffer, e.video_thumbnail_sha1);
    n.push({
      carousel_position: e.carousel_position,
      sha1: r.sha1,
      video_file_uuid: r.videoFileUuid,
      video_thumbnail_sha1: r.videoThumbnailSha1
    });
    return !0;
  });
  return await Promise.all(r);
}
async function ia({
  dataSecurity: e,
  validExtensionId: t,
  isWidget: i,
  dataSecurityPromise: n
}) {
  let r = assertFieldReady(e).currentValue;
  let a = i ? "widget" : "plugin";
  let s = (await n).formVersion;
  null === r ? s && (await _$$is.deleteSecurityFormResponse(t, a, s)) : await _$$is.submitSecurityFormResponse(t, a, r);
}
async function is(e) {
  let {
    price,
    author,
    publishRole,
    tagsV1,
    tagsV2,
    category,
    tosAccepted,
    supportContact,
    cocreators,
    isSubscription,
    annualDiscount,
    validExtensionId,
    isWidget,
    existingExtension,
    existingAuthor,
    user,
    localExtension
  } = e;
  let y = assertFieldReady(category).currentValue?.id;
  assertNotNullish(y);
  let b = !!assertFieldReady(price).currentValue;
  let v = function (e, t, i, n) {
    if (t && isAcceptedPublisher(t, n.id)) return;
    let r = assertFieldReady(e).currentValue;
    if (r) {
      if (i && f7(i, r) && !Fh(t)) return;
      return r;
    }
  }(author, existingExtension, existingAuthor, user);
  let I = !!assertFieldReady(publishRole).currentValue?.is_public;
  let E = assertFieldReady(isSubscription).currentValue;
  let x = {
    tags: [...assertFieldReady(tagsV1).currentValue],
    tags_v2: (tagsV2 && assertFieldReady(tagsV2).currentValue.map(e => e.text)) ?? [],
    support_contact: assertFieldReady(supportContact).currentValue ?? "",
    ...(v && {
      author_org_id: "org_id" in v ? v.org_id : "",
      author_team_id: "team_id" in v ? v.team_id : ""
    }),
    publisher_ids: I ? assertFieldReady(cocreators).currentValue.map(({
      id: e
    }) => e) : [],
    agreed_to_tos: assertFieldReady(tosAccepted).currentValue || !0,
    is_paid: b,
    is_subscription: E,
    price: b ? assertFieldReady(price).currentValue : void 0,
    has_freemium_code: Kc(localExtension, existingExtension),
    category_id: y,
    is_public: I,
    annual_discount_percentage: E ? assertFieldReady(annualDiscount).currentValue?.discountPercentage : void 0,
    is_annual_discount_active: E ? assertFieldReady(annualDiscount).currentValue?.isActive : void 0
  };
  return await PluginUploadApi.updateExtension(x, validExtensionId, isWidget);
}
async function io(e) {
  let {
    validExtensionId,
    isWidget,
    publishRole,
    tosAccepted,
    publishedExtension,
    user,
    isExistingExtensionUnpublished
  } = e;
  let l = assertFieldReady(publishRole).currentValue;
  let d = hasRoleOrOrgChanged(publishedExtension, l);
  let c = Dd(publishedExtension, user.id) || isExistingExtensionUnpublished;
  if (!d || !c) return;
  let u = {
    org_id: l?.org?.id,
    is_public: !!l?.is_public,
    agreed_to_tos: assertFieldReady(tosAccepted).currentValue || !0
  };
  let {
    data
  } = await PluginUploadApi.updateExtensionRoles(u, validExtensionId, isWidget);
  let m = data.meta;
  trackEventAnalytics("Hub Plugin Publish Role", {
    pluginId: validExtensionId,
    toPublic: m.roles.is_public,
    toOrg: !!m.roles.org,
    needApproval: isResourcePendingPublishing(m),
    isWidget
  });
  return {
    data
  };
}
async function il(e) {
  let t;
  let {
    icon,
    snapshot,
    author,
    publishRole,
    category,
    releaseNotes,
    name,
    description,
    tagline,
    commentsSetting,
    tosAccepted,
    playgroundFile,
    validExtensionId,
    versionId,
    isWidget,
    allMedia,
    imageUploadNonce,
    isCreatingNewVersion,
    signature,
    code
  } = e;
  let E = assertFieldReady(icon).currentValue?.buffer;
  let x = assertFieldReady(snapshot).currentValue?.buffer;
  let S = assertFieldReady(author).currentValue;
  let w = assertFieldReady(publishRole).currentValue;
  S && (MO(S) ? t = S.org_id : Z7(S) ? t = debugState.getState().teams[S.team_id]?.org_id || void 0 : "org" in w && (t = w.org?.id));
  let C = assertFieldReady(category).currentValue?.id;
  assertNotNullish(C);
  let T = assertFieldReady(releaseNotes).currentValue;
  let R = {
    icon_uploaded: !!E,
    snapshot_uploaded: !!x,
    carousel_media: allMedia,
    code_uploaded: !!code,
    comments_setting: assertFieldReady(commentsSetting).currentValue,
    category_id: C,
    signature,
    image_upload_nonce: imageUploadNonce,
    agreed_to_tos: assertFieldReady(tosAccepted).currentValue ?? !0,
    org_id: t,
    playground_fig_file_key: assertFieldReady(playgroundFile).currentValue?.playgroundFile?.key,
    playground_file_publish_type: assertFieldReady(playgroundFile).currentValue.playgroundFilePublishType,
    name: assertFieldReady(name).currentValue,
    description: assertFieldReady(description).currentValue,
    tagline: assertFieldReady(tagline).currentValue,
    release_notes: isCreatingNewVersion ? T.newVersion : T.oldVersion
  };
  return await PluginUploadApi.updateExtensionVersion(R, validExtensionId, versionId, isWidget);
}
let id = {
  name: om,
  tagline: {
    displayName: "TaglineField",
    fetchInitialValue: ({
      existingResourceContent: e
    }) => e && getCurrentPluginVersion(e)?.tagline || "",
    validate: ({}, e) => {
      let t = trimOrEmpty(e);
      return 0 === t.length ? [{
        key: "TAGLINE_EMPTY",
        data: {}
      }] : t.length > 100 ? [{
        key: "TAGLINE_TOO_LONG",
        data: {
          sanitizedTagline: t,
          maxLength: 100
        }
      }] : void 0;
    },
    canSet: () => !0
  },
  description: _$$z,
  category: Z9,
  tagsV1: _$$f,
  tagsV2: _$$m,
  icon: {
    displayName: "IconField",
    fetchInitialValue: ({
      existingResourceContent: e
    }) => {
      if (e) {
        let t = getCurrentPluginVersion(e)?.redirect_icon_url;
        if (t) return {
          url: t,
          buffer: void 0
        };
      }
    },
    canSet: () => !0,
    validate: ({}, e) => {
      if (!e) return [{
        key: "ICON_MISSING",
        data: {}
      }];
    },
    isEqual: (e, t) => e?.url === t?.url
  },
  playgroundFile: {
    displayName: "PlaygroundFileField",
    fetchInitialValue: ({
      existingExtension: e
    }) => {
      let t = e ? getCurrentPluginVersion(e) : void 0;
      return {
        playgroundFile: t?.playground_fig_file,
        playgroundFilePublishType: _$$J5.Actions.NOOP
      };
    },
    validate: ({
      localExtension: e,
      existingExtension: t
    }, i) => {
      let n = nT(e, t);
      let r = i.playgroundFile?.editor_type;
      if (n && r && !n.map(mapToFileType).includes(r)) return [{
        key: "EDITOR_TYPE_MISMATCH",
        data: {}
      }];
    },
    canSet: ({
      isWidget: e,
      existingExtension: t
    }) => !(e && Fh(t))
  },
  snapshot: {
    displayName: "SnapshotField",
    fetchInitialValue: async ({
      widgetSnapshotPromise: e,
      existingExtension: t
    }) => {
      let i = await e;
      if (i) return i;
      if (t) {
        let e = getCurrentPluginVersion(t)?.redirect_snapshot_url;
        if (e) return {
          url: e,
          buffer: void 0
        };
      }
    },
    validate: ({
      isWidget: e
    }, t) => {
      if (e && !t) return [{
        key: "WIDGET_SNAPSHOT_MISSING",
        data: {}
      }];
    },
    canSet: ({
      isWidget: e
    }) => e
  },
  carouselMedia: _$$v2,
  dataSecurity: {
    displayName: "DataSecurityField",
    fetchInitialValue: async ({
      dataSecurityPromise: e
    }) => {
      let {
        securityForm,
        existingStatus
      } = await e;
      return existingStatus ? securityForm : null;
    },
    validate: ({}, e) => {
      if (!e) return;
      let t = _$$ir(e.questions);
      if (t) return [{
        key: "SECURITY_FORM_CONTAINS_MISSING_DATA",
        data: {
          firstPathWithErrors: t
        }
      }];
    },
    canSet: () => !0
  },
  newVersion: {
    displayName: "NewVersionField",
    fetchInitialValue: ({
      localExtension: e
    }) => !!e,
    validate: () => {},
    canSet: ({
      localExtension: e,
      existingExtension: t
    }) => !(!e || Fh(t))
  },
  releaseNotes: {
    displayName: "ReleaseNotesField",
    fetchInitialValue: ({
      existingExtension: e
    }) => ({
      oldVersion: e ? getCurrentPluginVersion(e)?.release_notes ?? "" : "",
      newVersion: ""
    }),
    validate: ({
      newVersionField: e
    }, {
      oldVersion: t,
      newVersion: i
    }) => {
      let n = getFieldValueOrDefault(e, void 0) ? i : t;
      if (n.length > 1e4) return [{
        key: "RELEASE_NOTES_TOO_LONG",
        data: {
          releaseNotes: n,
          maxLength: 1e4
        }
      }];
    },
    canSet: ({
      newVersionField: e
    }) => canSetFieldValue(e)
  },
  price: WN,
  isSubscription: {
    displayName: "IsSubscriptionField",
    fetchInitialValue: ({
      existingExtension: e
    }) => !!e?.monetized_resource_metadata?.is_subscription,
    validate: () => {},
    canSet: ({
      existingExtension: e,
      isWidget: t
    }) => !t && !J9(e)
  },
  annualDiscount: {
    displayName: "AnnualDiscountField",
    fetchInitialValue: ({
      existingExtension: e
    }) => {
      let t = e?.monetized_resource_metadata;
      return {
        isActive: !!t?.annual_discount_active_at,
        discountPercentage: t?.annual_discount_percentage
      };
    },
    validate: ({}, {
      isActive: e,
      discountPercentage: t
    }) => {
      if (!e) return;
      if (void 0 === t) return [{
        key: "DISCOUNT_EMPTY",
        data: {}
      }];
      let i = [];
      t < 1 && i.push({
        key: "DISCOUNT_TOO_LOW",
        data: {
          currentValue: t,
          minValue: 1
        }
      });
      t > 95 && i.push({
        key: "DISCOUNT_TOO_HIGH",
        data: {
          currentValue: t,
          maxValue: 95
        }
      });
      Number.isInteger(t) || i.push({
        key: "DISCOUNT_NOT_WHOLE_NUMBER",
        data: {
          currentValue: t
        }
      });
      return i;
    },
    canSet: ({
      isSubscriptionField: e
    }) => !!getFieldValueOrDefault(e, void 0)
  },
  publishRole: {
    displayName: "PublishRoleField",
    fetchInitialValue: ({
      existingExtension: e,
      localExtension: t,
      org: i,
      isOrgMember: n
    }) => {
      let r = t?.manifest?.permissions?.includes("payments");
      return J9(e) || r ? {
        is_public: !0
      } : e && Q4(e.roles) ? isResourcePendingPublishing(e) ? {
        is_public: !0
      } : e.roles : e && isResourcePendingPublishing(e) ? {
        is_public: !0
      } : null != i && n ? {
        org: {
          id: i.id,
          name: i.name
        }
      } : {
        is_public: !0
      };
    },
    validate: ({}, e) => {
      if (!Q4(e)) return [{
        key: "INVALID_PUBLISH_ROLE",
        data: {
          publishRole: e
        }
      }];
    },
    canSet: (e, t) => !tv(e, t),
    isEqual: (e, t) => e.is_public === t.is_public || e.org?.id === t.org?.id
  },
  author: _$$q,
  cocreators: _$$S5,
  profileHandle: i2,
  commentsSetting: _$$T3,
  tosAccepted: _$$Y2,
  supportContact: aS
};
let ic = setupFormValidationHandler({
  displayName: "ExtensionForm",
  fields: id,
  fieldToDeps: {
    name: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      }
    },
    tagline: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      }
    },
    description: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    category: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      }
    },
    tagsV1: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      }
    },
    tagsV2: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      categoryField: {
        type: "otherField",
        source: "category"
      }
    },
    icon: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      }
    },
    snapshot: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      isWidget: {
        type: "form",
        source: "isWidget"
      },
      widgetSnapshotPromise: {
        type: "form",
        source: "widgetSnapshotPromise"
      }
    },
    playgroundFile: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      },
      isWidget: {
        type: "form",
        source: "isWidget"
      }
    },
    carouselMedia: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      allowVideos: {
        type: "constant",
        value: !0
      }
    },
    dataSecurity: {
      dataSecurityPromise: {
        type: "form",
        source: "dataSecurityPromise"
      }
    },
    publishRole: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      },
      user: {
        type: "form",
        source: "user"
      },
      org: {
        type: "form",
        source: "org"
      },
      isOrgMember: {
        type: "form",
        source: "isOrgMember"
      }
    },
    newVersion: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      }
    },
    releaseNotes: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      newVersionField: {
        type: "otherField",
        source: "newVersion"
      }
    },
    price: {
      authorField: {
        type: "otherField",
        source: "author"
      },
      user: {
        type: "form",
        source: "user"
      },
      org: {
        type: "form",
        source: "org"
      },
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      localExtension: {
        type: "form",
        source: "localExtension"
      },
      publishRoleField: {
        type: "otherField",
        source: "publishRole"
      },
      isSubscriptionField: {
        type: "otherField",
        source: "isSubscription"
      }
    },
    isSubscription: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      isWidget: {
        type: "form",
        source: "isWidget"
      }
    },
    annualDiscount: {
      existingExtension: {
        type: "form",
        source: "existingExtension"
      },
      priceField: {
        type: "otherField",
        source: "price"
      },
      isSubscriptionField: {
        type: "otherField",
        source: "isSubscription"
      }
    },
    author: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      user: {
        type: "form",
        source: "user"
      },
      existingAuthor: {
        type: "form",
        source: "existingAuthor"
      },
      allowedAuthors: {
        type: "form",
        source: "allowedAuthors"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      authedActiveCommunityProfile: {
        type: "form",
        source: "authedActiveCommunityProfile"
      }
    },
    profileHandle: {
      authorField: {
        type: "otherField",
        source: "author"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    },
    cocreators: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      authedProfilesById: {
        type: "form",
        source: "authedProfilesById"
      },
      allowedCocreatorsPromise: {
        type: "form",
        source: "allowedCocreatorsPromise"
      },
      authorField: {
        type: "otherField",
        source: "author"
      },
      priceField: {
        type: "otherField",
        source: "price"
      },
      publishRoleField: {
        type: "otherField",
        source: "publishRole"
      }
    },
    commentsSetting: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      }
    },
    tosAccepted: {
      orgUser: {
        type: "form",
        source: "orgUser"
      }
    },
    supportContact: {
      existingResourceContent: {
        type: "form",
        source: "existingExtension"
      },
      priceField: {
        type: "otherField",
        source: "price"
      },
      valueRequired: {
        type: "constant",
        value: !0
      }
    }
  },
  validate: ({
    user: e,
    localExtension: t
  }) => {
    if (!e.email_validated_at) return [{
      key: "EMAIL_NOT_VALIDATED",
      data: {}
    }];
    if (t) {
      if (!e.saml_sso_only && !e.google_sso_only && !e.two_factor_app_enabled && !e.phone_number) return [{
        key: "TWO_FACTOR_AUTH_DISABLED",
        data: {}
      }];
      if (e.plugin_publishing_blocked_at || e.community_blocked_at) return [{
        key: "ACCOUNT_DETAILS_CHANGED",
        data: {}
      }];
    }
  },
  canSubmit: ({
    localExtension: e,
    existingExtension: t,
    user: i
  }, n) => !EX(e, t, i) && Object.keys(n).every(e => isFieldValidated(n[e])),
  submit: async ({
    localExtension: e,
    existingExtension: t,
    validExtensionId: i,
    isWidget: n,
    dataSecurityPromise: r,
    user: a,
    existingAuthor: s,
    isExistingExtensionUnpublished: o
  }, d) => {
    let c;
    let u;
    let p;
    let m;
    let h = e?.manifest?.id ?? i;
    if (!h) return new withSubmissionError.SubmissionError({
      key: "ERROR_INVALID_EXTENSION_ID",
      data: {
        rawError: Error("No valid extension ID found")
      }
    });
    let g = assertFieldReady(d.newVersion).currentValue;
    let f = assertFieldReady(d.carouselMedia).currentValue.allMedia;
    let {
      uploadImages,
      uploadVideos,
      allMedia
    } = Kg(f);
    if (g) {
      if (!e?.localFileId) return new withSubmissionError.SubmissionError({
        key: "ERROR_INVALID_EXTENSION_ID",
        data: {
          rawError: Error("No valid extension ID found")
        }
      });
      try {
        [u, c] = await Promise.all([loadPluginManifest(e?.localFileId, {
          resourceType: getPluginWidgetLabel(n),
          isPublishing: !0
        }), loadLocalPluginSource(e?.localFileId)]);
      } catch (e) {
        reportError(ServiceCategories.COMMUNITY, e);
        return new withSubmissionError.SubmissionError({
          key: "ERROR_GETTING_EXTENSION_MANIFEST",
          data: {
            rawError: e
          }
        });
      }
      try {
        p = await it({
          ...d,
          manifest: u,
          uploadImages,
          validExtensionId: h,
          isWidget: n
        });
      } catch (e) {
        reportError(ServiceCategories.COMMUNITY, e);
        return new withSubmissionError.SubmissionError({
          key: "ERROR_CREATING_EXTENSION_VERSION",
          data: {
            rawError: e
          }
        });
      }
    } else try {
      p = await PluginUploadApi.postPluginImagesUpload(h, n, uploadImages);
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_POST_EXTENSION_IMAGES",
        data: {
          rawError: e
        }
      });
    }
    try {
      await ii({
        ...d,
        imagePaths: p,
        code: c
      });
    } catch (e) {
      if (reportError(ServiceCategories.COMMUNITY, e), n1(e)) return new withSubmissionError.SubmissionError({
        key: "ERROR_FILE_TOO_LARGE",
        data: {
          rawError: e
        }
      });
      return new withSubmissionError.SubmissionError({
        key: "ERROR_CODE_AND_IMAGE_UPLOAD",
        data: {
          rawError: e
        }
      });
    }
    try {
      await ir({
        validExtensionId: h,
        isWidget: n,
        uploadVideos,
        allMedia
      });
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_VIDEO_UPLOAD",
        data: {
          rawError: e
        }
      });
    }
    try {
      await ia({
        ...d,
        validExtensionId: h,
        isWidget: n,
        dataSecurityPromise: r
      });
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATE_SECURITY_FORM",
        data: {
          rawError: e
        }
      });
    }
    try {
      let e = "versionId" in p ? p.versionId : t?.current_plugin_version_id;
      if (!e) return new withSubmissionError.SubmissionError({
        key: "ERROR_INVALID_EXTENSION_ID",
        data: {
          rawError: Error("No valid version ID found")
        }
      });
      let i = g && "signature" in p ? p.signature : void 0;
      let {
        data
      } = await il({
        ...d,
        validExtensionId: h,
        versionId: e,
        isWidget: n,
        code: c,
        allMedia,
        imageUploadNonce: p.imageUploadNonce,
        isCreatingNewVersion: g,
        signature: i,
        existingExtension: t
      });
      m = data.meta.plugin;
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_FINALIZING_VERSION",
        data: {
          rawError: e
        }
      });
    }
    try {
      await io({
        ...d,
        validExtensionId: h,
        isWidget: n,
        publishedExtension: m,
        user: a,
        isExistingExtensionUnpublished: o
      });
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_UPDATE_ROLES",
        data: {
          rawError: e
        }
      });
    }
    try {
      let {
        data
      } = await is({
        ...d,
        validExtensionId: h,
        isWidget: n,
        existingExtension: t,
        existingAuthor: s,
        user: a,
        localExtension: e
      });
      m = data.meta;
    } catch (e) {
      reportError(ServiceCategories.COMMUNITY, e);
      return new withSubmissionError.SubmissionError({
        key: "ERROR_FINALIZING_EXTENSION",
        data: {
          rawError: e
        }
      });
    }
    !function (e) {
      let {
        icon,
        validExtensionId,
        isWidget,
        isCreatingNewVersion,
        manifest,
        code
      } = e;
      let o = assertFieldReady(icon).currentValue?.buffer;
      let l = o?.byteLength || 0;
      isCreatingNewVersion ? trackEventAnalytics("Hub Plugin Publish Version", {
        pluginId: validExtensionId,
        hasUI: !!manifest?.ui,
        apiVersion: manifest?.api,
        codeLength: code ? validatePluginCodeSize(code) : 0,
        iconFileSize: l,
        isWidget,
        editorType: manifest?.editorType?.sort().join(", ")
      }) : trackEventAnalytics("Hub Plugin Update Version", {
        pluginId: validExtensionId,
        isWidget,
        iconFileSize: l
      });
    }({
      ...d,
      validExtensionId: h,
      isWidget: n,
      isCreatingNewVersion: g,
      manifest: u,
      code: c
    });
    debugState.dispatch(Qi({
      publishedPlugins: [m],
      src: "updatePublishedPlugin"
    }));
    !function (e) {
      let t = assertFieldReady(e.profileHandle).currentValue;
      if (t) {
        let i = assertFieldReady(e.author).currentValue;
        let n = {
          profileHandle: t,
          userId: i && jr(i) ? i.user_id : void 0,
          teamId: i && Z7(i) ? i.team_id : void 0,
          orgId: i && MO(i) ? i.org_id : void 0
        };
        debugState.dispatch(createProfileThunk(n));
      }
    }({
      ...d
    });
    return {
      publishedExtension: m
    };
  }
});
let iu = setupAtomFormHandler(ic, bo);
let iF = {
  details: !0,
  media: !0,
  security: !0,
  advanced: !0
};
function iM({
  draft: e,
  entryPoint: t
}) {
  var i;
  let s;
  let o;
  let l = useDispatch();
  let {
    trackEvent
  } = useTracking();
  let A = _$$H(trackEvent);
  let y = _$$t4(e.fieldStates.category);
  let R = _$$J7({
    tagsV1Field: e.fieldStates.tagsV1,
    tagsV2Field: e.fieldStates.tagsV2
  });
  let N = function (e) {
    let {
      trackEvent: _trackEvent
    } = useTracking();
    let i = _$$H(_trackEvent);
    let n = useRef(void 0);
    useEffect(() => {
      let {
        currentValue
      } = e;
      if (currentValue !== unsetSymbol) {
        !currentValue && n?.current?.url && URL.revokeObjectURL(n.current.url);
        return () => {
          n.current = currentValue;
        };
      }
    }, [e]);
    let a = useMemo(() => {
      if (canSetFieldValue(e)) return function (t) {
        e.setValue(t);
      };
    }, [e]);
    let s = useMemo(() => {
      if (canSetFieldValue(e)) return function () {
        e.setValue(void 0);
      };
    }, [e]);
    let o = useMemo(() => async function (e, t) {
      if (a) try {
        let n = t === FileInputType.PASTE;
        let r = await validateAndResizeIconImage(e, n, !0);
        let [s, o] = await Promise.all([l8(URL.createObjectURL(r)), readImageBytes(r)]);
        let l = new Uint8Array(o);
        i.current($$in, {
          step: PublishModalState.UPLOAD_ICON,
          src: t
        });
        a({
          url: s.src,
          buffer: l
        });
      } catch (e) {
        e instanceof Error && debugState.dispatch(VisualBellActions.enqueue({
          message: e.message,
          error: !0
        }));
        return;
      }
    }, [a, i]);
    let l = useMemo(() => {
      if (o) return async function (e) {
        e.files && e.files[0] && (await o(e.files[0], FileInputType.FILE_INPUT), e.value = "");
      };
    }, [o]);
    return {
      ...e,
      setIcon: a,
      deleteIcon: s,
      setIconFromFile: o,
      setIconFromInput: l
    };
  }(e.fieldStates.icon);
  let O = _$$n(e.fieldStates.carouselMedia);
  let L = function (e, t) {
    let i = _$$J6(async () => t ? await t : Promise.resolve(void 0), [t]);
    let n = useRef(void 0);
    useEffect(() => {
      let {
        currentValue
      } = e;
      if (currentValue === unsetSymbol) return;
      let r = n?.current?.url;
      let a = i.status !== APILoadingStatus.SUCCESS || r !== i.value?.url;
      let s = r && r !== currentValue?.url;
      a && s && URL.revokeObjectURL(r);
      return () => {
        n.current = currentValue;
      };
    }, [i, e]);
    let a = useMemo(() => {
      if (canSetFieldValue(e)) return function (t) {
        e.setValue(t);
      };
    }, [e]);
    let s = useMemo(() => {
      if (!a) return;
      let e = i.status === APILoadingStatus.SUCCESS ? i.value : void 0;
      if (e) return function () {
        a(e);
      };
    }, [i, a]);
    let o = useMemo(() => {
      if (canSetFieldValue(e)) return function () {
        e.setValue(void 0);
      };
    }, [e]);
    let l = useMemo(() => async function (e) {
      if (a) try {
        let [t, i] = await Promise.all([l8(URL.createObjectURL(e)), readImageBytes(e)]);
        let n = new Uint8Array(i);
        a({
          url: t.src,
          buffer: n
        });
      } catch (e) {
        e instanceof Error && debugState.dispatch(VisualBellActions.enqueue({
          message: e.message,
          error: !0
        }));
        return;
      }
    }, [a]);
    let d = useMemo(() => {
      if (l) return async function (e) {
        e.files && e.files[0] && (await l(e.files[0]), e.value = "");
      };
    }, [l]);
    return {
      ...e,
      setSnapshot: a,
      deleteSnapshot: o,
      setSnapshotFromFile: l,
      setSnapshotFromInput: d,
      restoreDefaultSnapshot: s,
      hasDefaultSnapshot: i.status === APILoadingStatus.SUCCESS && !!i.value
    };
  }(e.fieldStates.snapshot, e.deps.widgetSnapshotPromise);
  let F = function (e, t, i) {
    let n = useDispatch();
    let {
      trackEvent: _trackEvent2
    } = useTracking();
    let o = _$$H(_trackEvent2);
    let l = _$$J6(async () => await e.deps.dataSecurityPromise, [e.deps.dataSecurityPromise]);
    let d = l.status === APILoadingStatus.SUCCESS ? l.value.existingStatus : null;
    let c = l.status === APILoadingStatus.SUCCESS ? l.value.securityForm : void 0;
    let u = useCallback(() => {
      e.setValue?.(null);
    }, [e]);
    let p = useMemo(() => {
      if (c) return () => {
        e.setValue?.(c);
      };
    }, [e, c]);
    let m = useMemo(() => {
      if (null !== d) return () => {
        let e = t ? "widget" : "plugin";
        if (!d) {
          u();
          o.current("Data Security Plugin Form", {
            action: "Discard changes",
            extensionType: e,
            extensionId: i
          });
          return;
        }
        n(showModalHandler({
          type: _$$i2,
          data: {
            onConfirm: u,
            status: d,
            extensionType: e
          },
          showModalsBeneath: !0
        }));
        o.current("Data Security Plugin Form", {
          action: "Remove security details",
          extensionType: e,
          extensionId: i
        });
      };
    }, [n, i, d, t, u, o]);
    let h = useMemo(() => function (t, i) {
      let n = getFieldValueOrDefault(e, void 0);
      if (!n) return;
      let r = n.questions[t];
      if (r?.inputType !== "single_select") return;
      let {
        options
      } = r;
      let s = options.map((e, t) => ({
        ...e,
        isSelected: i === t && !e.isSelected
      }));
      let o = [...n.questions];
      o[t] = {
        ...r,
        options: s
      };
      e.setValue?.({
        ...n,
        questions: o
      });
    }, [e]);
    let g = useMemo(() => function (t, i) {
      let n = getFieldValueOrDefault(e, void 0);
      if (!n) return;
      let r = n.questions[t];
      if (r?.inputType !== "multi_select") return;
      let {
        options
      } = r;
      let s = options.map((e, t) => {
        let n = i === t ? !e.isSelected : !!e.isSelected;
        return {
          ...e,
          isSelected: n
        };
      });
      let o = [...n.questions];
      o[t] = {
        ...r,
        options: s
      };
      e.setValue?.({
        ...n,
        questions: o
      });
    }, [e]);
    let _ = useMemo(() => function (t, i) {
      let n = getFieldValueOrDefault(e, void 0);
      if (!n) return;
      let r = function (e, t, i) {
        let [n, r, a] = t;
        let s = deepClone(e);
        let o = s[n];
        if (!o || "text" === o.inputType) return e;
        let l = o.options[r];
        if (!l.subQuestions) return e;
        let d = l.subQuestions[a];
        l.subQuestions[a] = {
          ...d,
          ...i
        };
        s[n] = o;
        return s;
      }(n.questions, t, {
        value: i
      });
      e.setValue?.({
        ...n,
        questions: r
      });
    }, [e]);
    let A = useMemo(() => {
      let {
        currentValue,
        setValue
      } = e;
      return function (e, n) {
        if (!currentValue || currentValue === unsetSymbol) return;
        let r = currentValue.questions[e];
        if (r?.inputType !== "text") return;
        let a = [...currentValue.questions];
        a[e] = {
          ...r,
          value: n
        };
        setValue?.({
          ...currentValue,
          questions: a
        });
      };
    }, [e]);
    return {
      ...e,
      optOutAndMaybeWarn: m,
      restoreDefault: p,
      existingStatus: d,
      updateSingleSelectQuestion: h,
      updateMultiSelectQuestion: g,
      updateTextSubquestion: _,
      updateTextQuestion: A
    };
  }(e.fieldStates.dataSecurity, e.deps.isWidget, e.deps.existingExtension?.id);
  let M = function (e) {
    let t = getValidationErrors(e, !1).find(e => "validation" === e.type);
    if (!t) return;
    let i = t?.data?.firstPathWithErrors;
    if (i) return _$$tZ.DATA_SECURITY_QUESTION(i?.join(","));
  }(F);
  i = e.fieldStates.price;
  let {
    isDraftPaidResource
  } = {
    isDraftPaidResource: wC(i)
  };
  let B = _$$w3(e.fieldStates.cocreators);
  let V = _$$D(e.fieldStates);
  let [G, z, Q] = _$$t.useTabs(iF, {
    orientation: "vertical"
  });
  let J = _$$b(Q);
  let {
    stepWithErrors,
    clearStepWithErrors,
    checkProgress
  } = _$$o([{
    id: "details",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.name),
      onFail: () => __(_$$tZ.NAME_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tagline),
      onFail: () => __(_$$tZ.TAGLINE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.description),
      onFail: () => __(_$$tZ.DESCRIPTION_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.category),
      onFail: () => __(_$$tZ.CATEGORY_SELECT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tagsV2) && isFieldValidated(e.fieldStates.tagsV1),
      onFail: () => __(_$$tZ.TAGS_SECTION)
    }],
    onFail: () => {
      V.name.onTouched?.();
      V.tagline.onTouched?.();
      V.description.onTouched?.();
      V.category.onTouched?.();
      V.tagsV1.onTouched?.();
      V.tagsV2.onTouched?.();
    }
  }, {
    id: "media",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.icon),
      onFail: () => __(_$$tZ.ICON_UPLOADER)
    }, {
      check: () => isFieldValidated(e.fieldStates.snapshot),
      onFail: () => __(_$$tZ.SNAPSHOT_UPLOADER)
    }, {
      check: () => isFieldValidated(e.fieldStates.playgroundFile),
      onFail: () => __(_$$tZ.PLAYGROUND_FILE_SELECT)
    }, {
      check: () => isFieldValidated(e.fieldStates.carouselMedia),
      onFail: () => {
        let t = e.fieldStates.carouselMedia;
        let i = "error" === t.status ? t.errors[0] : void 0;
        if (i && "key" in i) {
          let {
            key
          } = i;
          switch (key) {
            case "THUMBNAIL_MEDIUM_MISSING":
              __(_$$tZ.THUMBNAIL_UPLOADER);
              break;
            case "CAROUSEL_MEDIA_EMPTY":
            case "HAS_TOO_MANY_CAROUSEL_MEDIA":
            case "HAS_TOO_MANY_VIDEOS":
              __(_$$tZ.CAROUSEL_MEDIA_UPLOADER);
          }
        }
      }
    }],
    onFail: () => {
      V.icon.onTouched?.();
      V.snapshot.onTouched?.();
      V.playgroundFile.onTouched?.();
      V.carouselMedia.onTouched?.();
    }
  }, {
    id: "security",
    checkpoints: [{
      check: () => (V.dataSecurity.onTouched?.(), isFieldValidated(e.fieldStates.dataSecurity)),
      onFail: () => {
        M && __(M);
      }
    }],
    onFail: () => {
      V.dataSecurity.onTouched?.();
    }
  }, {
    id: "advanced",
    checkpoints: [{
      check: () => isFieldValidated(e.fieldStates.profileHandle),
      onFail: () => __(_$$tZ.PROFILE_HANDLE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.cocreators),
      onFail: () => __(_$$tZ.COCREATORS_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.tosAccepted),
      onFail: () => __(_$$tZ.TOS_AGREED_CHECKBOX)
    }, {
      check: () => isFieldValidated(e.fieldStates.releaseNotes),
      onFail: () => __(_$$tZ.RELEASE_NOTES_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.price),
      onFail: () => __(_$$tZ.PRICE_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.annualDiscount),
      onFail: () => __(_$$tZ.ANNUAL_DISCOUNT_INPUT)
    }, {
      check: () => isFieldValidated(e.fieldStates.supportContact),
      onFail: () => __(_$$tZ.SUPPORT_CONTACT_INPUT)
    }, {
      check: () => !EX(e.deps.localExtension, e.deps.existingExtension, e.deps.user),
      onFail: () => __(_$$tZ.MANIFEST_INFO)
    }],
    onFail: () => {
      V.profileHandle.onTouched?.();
      V.cocreators.onTouched?.();
      V.tosAccepted.onTouched?.();
      V.releaseNotes.onTouched?.();
      V.price.onTouched?.();
      V.annualDiscount.onTouched?.();
      V.supportContact.onTouched?.();
    }
  }], J.activeTab);
  useEffect(() => {
    clearStepWithErrors();
  }, [e.fieldStates, clearStepWithErrors]);
  let {
    draftSubmissionResult,
    clearDraftSubmissionResult,
    submit
  } = _$$r2(e, useCallback(() => {
    A.current($$in, {
      step: PublishModalState.PUBLISH
    });
  }, [A]));
  let ec = useCallback(() => {
    l(hideModal());
    A.current($$in, {
      step: PublishModalState.CLOSED
    });
    t === PageTypeEnum.RESOURCE_PAGE && draftSubmissionResult?.result === "success" && customHistory.reload("Resource updated on community hub");
  }, [l, t, draftSubmissionResult, A]);
  let {
    isWidget,
    localExtension,
    existingExtension,
    user
  } = e.deps;
  let [ef, e_] = useState(_$$X.STOPPED);
  let eA = ef === _$$X.PLAYING;
  s = draftSubmissionResult ? jsx(_$$S4, {
    publishedResourceContent: "data" in draftSubmissionResult ? draftSubmissionResult.data.publishedExtension : void 0,
    draftSubmissionStatus: draftSubmissionResult.result,
    carouselMediaField: e.fieldStates.carouselMedia,
    iconField: e.fieldStates.icon,
    nameField: e.fieldStates.name,
    authorField: e.fieldStates.author,
    onAnimationStateChange: e_,
    publishRoleField: e.fieldStates.publishRole
  }) : jsxs("div", {
    className: KT,
    children: [jsxs("div", {
      className: Cd,
      children: [jsx(_$$t.TabStrip, {
        manager: J,
        children: [{
          key: "details",
          label: getI18nString("community.publishing.describe_your_resource")
        }, {
          key: "media",
          label: getI18nString("community.publishing.choose_some_images")
        }, {
          key: "security",
          label: getI18nString("community.publishing.data_security")
        }, {
          key: "advanced",
          label: getI18nString("community.publishing.add_the_final_details")
        }].map(({
          key: e,
          label: t
        }, i) => jsx(_$$y, {
          ...G[e],
          index: i + 1,
          text: t,
          selected: J.activeTab === e,
          hasErrors: stepWithErrors === e
        }, e))
      }), jsxs("div", {
        className: ME,
        children: [jsx("div", {
          className: jc,
          children: getI18nString("community.publishing.resource_preview")
        }), jsx(_$$T, {
          iconField: e.fieldStates.icon,
          nameField: e.fieldStates.name,
          authorField: e.fieldStates.author
        })]
      })]
    }), jsxs("div", {
      className: DK,
      children: [jsxs(_$$t.TabPanel, {
        ...z.details,
        children: [jsx(Mm, {
          id: _$$tZ.NAME_INPUT,
          children: t => jsx(_$$A1, {
            ref: t,
            nameField: e.fieldStates.name,
            ...V.name
          })
        }), jsx(Mm, {
          id: _$$tZ.TAGLINE_INPUT,
          children: t => jsx(tB, {
            ref: t,
            taglineField: e.fieldStates.tagline,
            isWidget,
            ...V.tagline
          })
        }), jsx(Mm, {
          id: _$$tZ.DESCRIPTION_INPUT,
          children: t => jsx(_$$A7, {
            ref: t,
            descriptionField: e.fieldStates.description,
            ...V.description
          })
        }), jsx(Mm, {
          id: _$$tZ.CATEGORY_SELECT,
          children: e => jsx(CategorySelectDropdown, {
            ref: e,
            categoryFieldManager: y,
            ...V.category
          })
        }), isFieldValidated(e.fieldStates.category) && jsx(Mm, {
          id: _$$tZ.TAGS_SECTION,
          children: e => R.validV2Tags.length > 0 ? jsx(_$$vj, {
            ref: e,
            tagsFieldsManager: R,
            touchedFieldsTracker: V,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          }) : jsx(Yv, {
            ref: e,
            tagsV1Field: R.tagsV1Field,
            ...V.tagsV1,
            autoScrollAutocompleteResultsIntoView: {
              behavior: "smooth",
              block: "end"
            }
          })
        })]
      }), jsxs(_$$t.TabPanel, {
        ...z.media,
        children: [jsx(Mm, {
          id: _$$tZ.ICON_UPLOADER,
          children: e => jsx(eX, {
            ref: e,
            iconFieldManager: N,
            ...V.icon
          })
        }), jsx(Mm, {
          id: _$$tZ.PLAYGROUND_FILE_SELECT,
          children: jsx(tu, {
            playgroundFileField: e.fieldStates.playgroundFile,
            ...V.playgroundFile
          })
        }), jsx(Mm, {
          id: _$$tZ.SNAPSHOT_UPLOADER,
          children: e => jsx(tP, {
            ref: e,
            snapshotFieldManager: L,
            ...V.snapshot
          })
        }), jsx(Mm, {
          id: _$$tZ.THUMBNAIL_UPLOADER,
          children: e => jsx(_$$l, {
            ref: e,
            carouselMediaFieldManager: O,
            trackingEventName: $$in,
            ...V.carouselMedia
          })
        }), jsx(Mm, {
          id: _$$tZ.CAROUSEL_MEDIA_UPLOADER,
          children: e => jsx(_$$t3, {
            ref: e,
            carouselMediaFieldManager: O,
            ...V.carouselMedia
          })
        })]
      }), jsx(_$$t.TabPanel, {
        ...z.security,
        children: jsx(eL, {
          dataSecurityFieldManager: F,
          isWidget,
          ...V.dataSecurity
        })
      }), jsxs(_$$t.TabPanel, {
        ...z.advanced,
        children: [jsx(tS, {
          publishRoleField: e.fieldStates.publishRole,
          isDraftPaidResource
        }), jsx(_$$A4, {
          authorField: e.fieldStates.author
        }), jsx(Mm, {
          id: _$$tZ.PROFILE_HANDLE_INPUT,
          children: t => jsx(_$$S3, {
            ref: t,
            profileHandleField: e.fieldStates.profileHandle,
            ...V.profileHandle
          })
        }), jsx(Mm, {
          id: _$$tZ.COCREATORS_INPUT,
          children: jsx(_$$A5, {
            cocreatorsFieldManager: B,
            ...V.cocreators
          })
        }), jsx(Mm, {
          id: _$$tZ.TOS_AGREED_CHECKBOX,
          children: t => jsx(_$$B, {
            ref: t,
            tosAcceptedField: e.fieldStates.tosAccepted
          })
        }), jsx(e6, {
          newVersionField: e.fieldStates.newVersion,
          publishRoleField: e.fieldStates.publishRole
        }), jsx(Mm, {
          id: _$$tZ.RELEASE_NOTES_INPUT,
          children: t => jsx(tk, {
            ref: t,
            releaseNotesField: e.fieldStates.releaseNotes,
            ...V.releaseNotes
          })
        }), jsx(_$$A6, {
          commentsSettingField: e.fieldStates.commentsSetting
        }), (!LG(existingExtension) || bx(localExtension, existingExtension)) && jsx(_$$H2, {
          priceField: e.fieldStates.price
        }), (wC(e.fieldStates.price) || LG(existingExtension)) && jsxs(Fragment, {
          children: [jsx(Mm, {
            id: _$$tZ.PRICE_INPUT,
            children: t => jsx(_$$K2, {
              ref: t,
              priceField: e.fieldStates.price,
              ...V.price
            })
          }), jsx(Mm, {
            id: _$$tZ.IS_SUBSCRIPTION_CHECKBOX,
            children: t => jsx(e1, {
              ref: t,
              isSubscriptionField: e.fieldStates.isSubscription,
              ...V.isSubscription
            })
          }), jsx(D, {
            annualDiscountField: e.fieldStates.annualDiscount,
            ...V.annualDiscount
          }), jsx(Mm, {
            id: _$$tZ.ANNUAL_DISCOUNT_INPUT,
            children: t => jsx(H, {
              ref: t,
              annualDiscountField: e.fieldStates.annualDiscount,
              ...V.annualDiscount
            })
          }), jsx(_$$r3, {
            authorField: e.fieldStates.author,
            existingResourceContent: existingExtension
          }), jsx(ew, {
            isWidget,
            isSubscriptionField: e.fieldStates.isSubscription
          }), jsx(_$$$, {})]
        }), jsx(Mm, {
          id: _$$tZ.SUPPORT_CONTACT_INPUT,
          children: t => jsx(_$$a, {
            ref: t,
            priceField: e.fieldStates.price,
            supportContactField: e.fieldStates.supportContact,
            ...V.supportContact
          })
        }), jsx(Mm, {
          id: _$$tZ.MANIFEST_INFO,
          children: e => jsx(em, {
            ref: e,
            localExtension,
            existingExtension,
            user,
            isWidget
          })
        })]
      })]
    })]
  });
  o = eA || draftSubmissionResult?.result !== "success" ? eA || draftSubmissionResult?.result !== "failure" ? jsxs(Fragment, {
    children: [J.isOnFirstTab ? jsx(Button, {
      variant: "secondary",
      onClick: ec,
      children: getI18nString("general.cancel")
    }) : !eA && jsx(Button, {
      variant: "secondary",
      onClick: J.selectPreviousTab,
      children: getI18nString("general.back")
    }), J.isOnLastTab ? jsx(Button, {
      disabled: draftSubmissionResult?.result === "pending" || eA,
      onClick: () => {
        checkProgress() && submit?.();
      },
      children: draftSubmissionResult?.result === "pending" || eA ? jsx(_$$k, {
        size: "sm"
      }) : getI18nString("community.publishing.publish")
    }) : jsx(Button, {
      onClick: () => {
        checkProgress() && J.selectNextTab();
      },
      children: getI18nString("general.next")
    })]
  }) : jsx(Button, {
    variant: "secondary",
    onClick: clearDraftSubmissionResult,
    children: getI18nString("general.go_back")
  }) : jsxs(Fragment, {
    children: [jsx(gx, {
      publishedResourceContent: draftSubmissionResult.data.publishedExtension
    }), t === PageTypeEnum.RESOURCE_PAGE ? jsx(A_, {}) : jsx(Dg, {
      publishedResourceContent: draftSubmissionResult.data.publishedExtension
    })]
  });
  let ey = useMemo(() => {
    if (!eA && draftSubmissionResult?.result !== "success") {
      if (stepWithErrors) return stepWithErrors === J.activeTab ? getI18nString("community.publishing.please_fill_out_required_fields_and_correct_any_errors") : getI18nString("community.publishing.updates_are_needed_in_another_step");
      if ("error" === e.status) {
        let t;
        let i = e.errors.find(e => "validation" === e.type);
        if (i) return iB(i);
        let n = e.errors.find(e => "submission" === e.type);
        let r = n?.data.rawError;
        return n?.key === "ERROR_FILE_TOO_LARGE" ? getI18nString("community.actions.file_too_large") : (r && (t = resolveMessage(r)), t ?? getI18nString("community.publishing.an_error_occurred_please_try_again"));
      }
    }
  }, [e, draftSubmissionResult?.result, eA, stepWithErrors, J.activeTab]);
  useEffect(() => {
    A.current($$in, {
      step: PublishModalState.OPENED
    });
  }, [A]);
  let eb = getFieldValueOrDefault(e.fieldStates.name, "");
  let ev = useDebouncedCallback(() => {
    A.current($$in, {
      step: PublishModalState.EDIT_NAME
    });
  }, 2e3);
  useEffect(() => {
    eb && V.name.touched && ev();
  }, [eb, ev, V.name.touched]);
  let eI = getFieldValueOrDefault(e.fieldStates.description, "");
  let eE = useDebouncedCallback(() => {
    A.current($$in, {
      step: PublishModalState.EDIT_DESCRIPTION
    });
  }, 1e4);
  useEffect(() => {
    eI && V.description.touched && eE();
  }, [eI, eE, V.description.touched]);
  return jsx(UI3ConditionalWrapper, {
    children: jsxs(_$$I, {
      onClose: ec,
      width: "fit-content",
      height: "dynamic",
      children: [jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: isWidget ? getI18nString("community.publishing.publish_widget") : getI18nString("community.publishing.publish_plugin")
          })
        }), jsx(DialogBody, {
          padding: 0,
          scrolling: "none",
          children: s
        }), jsxs(DialogFooter, {
          children: [jsx("span", {
            className: $o,
            "aria-live": "assertive",
            "aria-atomic": !0,
            children: ey
          }), jsx(DialogActionStrip, {
            children: o
          })]
        })]
      }), jsx(_$$r, {
        draft: e,
        customRetryAction: {
          draftFailedToSubmit: submit
        }
      })]
    })
  });
}
function ij(e) {
  let {
    entryPoint,
    isWidget,
    widgetNodeId,
    localExtension,
    existingExtension,
    existingSecurityFormResponse
  } = e;
  let u = function (e, t, i) {
    let n = useDeepEqualSceneValue((e, t) => {
      let i = e.get(t ?? null);
      return i?.size;
    }, t);
    let a = useMemo(async () => {
      if (!e || !t && !i) return;
      let r = null;
      if (t && n && (r = _e(t, n?.x, n?.y)), !r && i && (r = await gI(i)), !r) return;
      let [a, s] = await Promise.all([l8(URL.createObjectURL(r)), readImageBytes(r)]);
      return {
        url: a.src,
        buffer: new Uint8Array(s)
      };
    }, [e, i, t, n]);
    useEffect(() => function () {
      (async () => {
        let e = (await a)?.url;
        e && URL.revokeObjectURL(e);
      })();
    }, [a]);
    return a;
  }(isWidget, widgetNodeId, localExtension);
  let p = useMemo(async () => existingSecurityFormResponse ? {
    securityForm: {
      version: String(existingSecurityFormResponse.formVersion),
      questions: existingSecurityFormResponse.responses
    },
    existingStatus: existingSecurityFormResponse.status,
    formVersion: existingSecurityFormResponse.formVersion
  } : {
    securityForm: await _$$is.getBlankSecurityForm()
  }, [existingSecurityFormResponse]);
  let m = selectUser();
  let h = useSelector(e => getCurrentUserOrgUser(e) ?? void 0, deepEqual);
  let g = useCurrentUserOrg();
  let f = useCurrentPlanUser("ExtensionPublishingModal");
  let A = useIsOrgMemberOrAdminUser(f).unwrapOr(!1);
  let y = useSelector(e => UU(e, existingExtension), deepEqual);
  let b = useSelector(e => e.authedProfilesById);
  let v = useSelector(e => e.authedActiveCommunityProfile ?? void 0);
  let I = useMemo(() => Promise.resolve([]), []);
  let E = useSelector(e => existingExtension ? of(e, existingExtension) : void 0, deepEqual);
  let x = iu({
    ...e,
    localExtension,
    existingExtension,
    user: m,
    org: g,
    orgUser: h,
    isOrgMember: A,
    existingAuthor: E,
    allowedAuthors: y,
    allowedCocreatorsPromise: I,
    authedProfilesById: b,
    authedActiveCommunityProfile: v,
    widgetSnapshotPromise: u,
    dataSecurityPromise: p
  });
  _$$h(() => {
    x.fieldStates.snapshot.currentValue !== unsetSymbol && x.fieldStates.snapshot.resetValue();
  });
  let S = !!localExtension && Rc(localExtension);
  useEffect(() => {
    (localExtension?.error || S) && __(_$$tZ.MANIFEST_INFO);
  }, [localExtension?.error, S]);
  return jsx(TrackingProvider, {
    name: _$$e3.COMMUNITY_HUB_PLUGIN_PUBLISH_MODAL_V2,
    properties: {
      entryPoint,
      userId: m.id,
      orgId: g?.id,
      localExtensionId: localExtension?.localFileId,
      resourceType: isWidget ? ResourceTypeNoComment.WIDGET : ResourceTypeNoComment.PLUGIN,
      resourceId: existingExtension?.id,
      isPaid: wC(x.fieldStates.price)
    },
    children: jsx(iM, {
      draft: x,
      entryPoint
    })
  });
}
let $$iU0 = registerModal(function (e) {
  let {
    localFileId,
    validExtensionId
  } = e;
  let r = useSelector(e => localFileId ? e.localPlugins[localFileId] : void 0);
  let s = useSelector(e => Gl(e.publishedPlugins, e.publishedWidgets, r, r?.manifest?.id || validExtensionId));
  let o = !!validExtensionId;
  let d = _$$A11(validExtensionId ?? "", o);
  let c = !!r?.manifest?.id && !s;
  let [{
    status: p,
    data: m
  }] = setupResourceAtomHandler(se(), {
    enabled: c
  });
  let [{
    status: h,
    data: g
  }] = setupResourceAtomHandler(fd(), {
    enabled: c
  });
  let f = getPublishedResourceOrNull(m ?? void 0, g ?? void 0, r) ?? void 0;
  let _ = s ?? f ?? void 0;
  let v = !s?.id && !!f;
  if ("loading" === p || "loading" === h || !d.loaded) return jsx(_$$k, {});
  let I = {
    localExtension: r,
    existingExtension: _,
    isExistingExtensionUnpublished: v,
    existingSecurityFormResponse: d.data
  };
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "ExtensionFormView",
    fallback: jsx(_$$r5, {
      title: e.isWidget ? getI18nString("community.publishing.publish_widget") : getI18nString("community.publishing.publish_plugin")
    }),
    team: ServiceCategories.EXTENSIBILITY_ECOSYSTEM,
    children: jsx(ij, {
      ...e,
      ...I
    })
  });
}, "ExtensionFormView", ModalSupportsBackground.YES);
let iB = e => {
  if (e && "validation" === e.type) {
    let t = e.key;
    switch (t) {
      case "EMAIL_NOT_VALIDATED":
        return getI18nString("community.publishing.please_verify_your_email_address_to_publish");
      case "TWO_FACTOR_AUTH_DISABLED":
        return getI18nString("community.publishing.you_must_enable_two_factor_authentication_to_publish");
      case "ACCOUNT_DETAILS_CHANGED":
        return getI18nString("community.publishing.we_detected_a_change_to_your_account_details_please_contact_support_figma_com_to_publish_this_plugin");
      default:
        throwTypeError(t);
    }
  }
};
export const T = $$iU0;