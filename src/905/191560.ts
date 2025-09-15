import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRef, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAtomWithSubscription, atomStoreManager, useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { isFigmaMirrorAndroid, isInFigmaMobile, isAndroidOrIphoneNotFigmaMobile } from "../figma_app/778880";
import { changeAuthFormState, AUTH_SHOW_ERROR, AUTH_SET_REDIRECT_URL, AUTH_COMPLETE, AUTH_SIGN_IN, AUTH_RESET_PASSWORD, AUTH_SEND_PASSWORD_RESET, AUTH_REDEEM_RESET, redeemTeamJoinLink, AUTH_SIGN_UP, AUTH_CLICKED_SAML_SIGN_IN, AUTH_SET_GOOGLE_ID_TOKEN, AUTH_SET_AUTH_LOADING, AUTH_CLEAR_AUTH_LOADING, AUTH_SEND_EMAIL_SAML_START, AUTH_SAML_START_FROM_SESSION, AUTH_CLEAR_ERROR, AUTH_EMAIL_ONLY } from "../905/194276";
import { nb, _G, Kf } from "../905/164233";
import { AuthAction, AuthField, AuthFlowStep, AuthProvider, ClientPlatform, AuthErrorCode } from "../905/862321";
import { DT, W8, _B, Bs, Rm, xI } from "../figma_app/320164";
import { I8, TA } from "../905/667970";
import { Hc, p8, sT } from "../905/694658";
import { T as _$$T } from "../905/745591";
import A from "classnames";
import { LoadingOverlay, LargeLoadingSpinner } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { c as _$$c } from "../905/370443";
import { withTrackedClick, TrackingProvider } from "../figma_app/831799";
import { A as _$$A } from "../6828/71291";
import { A as _$$A2 } from "../5724/643251";
import { A as _$$A3 } from "../5724/332367";
import { linkWithTracking } from "../figma_app/637027";
import { getI18nString, renderI18nText, getLocalizedPath, getI18nStringAlias } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { ZD } from "../905/519092";
import { N as _$$N } from "../905/438674";
import { q_, f1, Ng, Iu } from "../905/997533";
import { gK, ZH, Wv } from "../905/178707";
import { k as _$$k } from "../905/585996";
import { k as _$$k2 } from "../905/644504";
import { XHR } from "../905/910117";
import { Q9 } from "../905/773401";
import { VisualBellActions } from "../905/302958";
import { popModalStack } from "../905/156213";
import { selectOpenFileKey } from "../figma_app/516028";
import { FResourceCategoryType } from "../figma_app/191312";
import { xf } from "../figma_app/416935";
import { Button } from "../905/521428";
import { k as _$$k3 } from "../905/443820";
import { trackEventAnalytics } from "../905/449184";
import { a as _$$a } from "../905/10468";
import { sx as _$$sx } from "../905/941192";
import { getInitialOptions } from "../figma_app/169182";
import { VP, GH } from "../905/18797";
import { lQ } from "../905/934246";
import { ServiceCategories as _$$e } from "../905/165054";
import { reportError } from "../905/11";
import { LinkPrimitive } from "../figma_app/496441";
import { t as _$$t2 } from "../905/897919";
import { trackAuthEvent } from "../905/248178";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { _ as _$$_2, S as _$$S } from "../figma_app/490799";
import { s as _$$s } from "../cssbuilder/589278";
import { A as _$$A4 } from "../5724/600086";
import { FlashActions } from "../905/573154";
import { A as _$$A5 } from "../1617/720259";
import { NQ } from "../905/508367";
import { H as _$$H } from "../905/202181";
import { k as _$$k4 } from "../905/93362";
var y = A;
function v(e) {
  let t = useRef(!1);
  let i = useRef(null);
  let a = useCallback(() => {
    if (i.current && !e.noAutofocus) for (let e = 0; e < i.current.elements.length; e++) {
      let t = i.current.elements[e];
      if (!t.getAttribute("data-no-auto-focus")) {
        t.focus();
        break;
      }
    }
  }, [e.noAutofocus]);
  let s = useCallback(() => {
    if (i.current) for (let t = 0; t < i.current.elements.length; t++) {
      let n = i.current.elements[t];
      if (n.name === e.auth.invalidInput) {
        n.focus();
        ["text", "search", "url", "tel", "password"].includes(n.type) && (n.selectionStart = n.selectionEnd);
        break;
      }
    }
  }, [e.auth.invalidInput]);
  useEffect(() => {
    t.current && e.auth.invalidInput && s();
    t.current = !1;
  }, [e.auth, s]);
  useEffect(() => {
    a();
    t.current = !1;
  }, [e.auth.formState, a]);
  _$$h(a);
  let o = "auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
  let l = y()(e.className, {
    "auth_form--modal--1HV7- auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw": e.modal,
    "auth_form--form--ydwSW auth_form--modal--1HV7- auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw": !e.modal
  }, o);
  let c = e.header && e.header.length > 45 ? "auth_form--longHeader--QNlU8 auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw" : "auth_form--header--5WRrG auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
  return jsx("form", {
    id: e.id,
    className: l,
    onSubmit: i => {
      i.preventDefault();
      t.current = !0;
      e.onSubmit?.(i);
    },
    ref: i,
    "data-testid": "auth-form",
    children: e.isLoading ? jsx(LoadingOverlay, {}) : jsxs(Fragment, {
      children: [e.header || e.subtitle || e.auth.hint || !e.hideError && e.auth.error ? jsx(Fragment, {
        children: jsxs("div", {
          className: "auth_form--topMatter--M-mkE",
          children: [e.header && jsx("h1", {
            className: c,
            children: e.header
          }), e.subtitle && jsx("p", {
            className: "auth_form--subtitle--XKJND auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
            children: e.subtitle
          }), e.auth.hint && jsx("p", {
            className: y()("auth_form--hint--nmNHu auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw", o),
            children: e.auth.hint
          }), !e.hideError && !!e.auth.error && jsx(_$$T, {
            role: "alert",
            children: jsx("p", {
              className: "auth_form--error--EtrjX auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
              children: e.auth.error
            })
          })]
        })
      }) : null, e.children]
    })
  });
}
let S = "brand_buttons--iconContainer--ZIThZ";
function k(e) {
  let {
    loading,
    fullWidth = !0,
    autoHeight,
    ...a
  } = e;
  let s = y()("brand_buttons--brandButton--eCsuS auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw", {
    "brand_buttons--fullWidth--SGA23": fullWidth,
    "brand_buttons--autoHeight--1oLns": autoHeight,
    "brand_buttons--brandButtonHoverIconEffects--N6V8n": "hollow" !== e.use && !loading && !e.disabled,
    "brand_buttons--brandButtonLoadingIconEffects--BxiQD": "hollow" !== e.use && loading,
    "brand_buttons--hollowButton--tvLh4 auth_view--brandButton--Le4wb auth_view--brandButtonBase--RAO-j auth_brand--figmaSans--aXdNw": "hollow" === e.use
  }, "brand_buttons--figmaSans---HVEE", e.className);
  let o = {
    ...a,
    className: s
  };
  return jsx("button", {
    ...o,
    disabled: e.disabled || loading,
    children: jsxs("span", {
      className: y()("brand_buttons--brandButtonContent--HPB3u", "hollow" !== e.use && "brand_buttons--standardButtonContent--5k3-s"),
      children: ["hollow" === e.use || !loading && e.disabled ? null : loading ? jsx(SvgComponent, {
        svg: _$$A3,
        width: "24px",
        height: "24px",
        className: S
      }) : jsx(SvgComponent, {
        svg: _$$A,
        width: "24px",
        height: "24px",
        className: S
      }), e.children]
    })
  });
}
let R = withTrackedClick(k, !0);
let N = withTrackedClick(function ({
  svg: e,
  onClick: t,
  text: i
}) {
  return jsx(k, {
    type: "button",
    use: "hollow",
    onClick: t,
    "data-no-auto-focus": !0,
    children: jsxs("div", {
      className: "brand_buttons--googleButtonInner--rIDqs",
      children: [jsx(SvgComponent, {
        className: "brand_buttons--googleIcon--IEI1u",
        autosize: !0,
        width: "18px",
        height: "18px",
        svg: e,
        useOriginalSrcFills_DEPRECATED: !0
      }), jsx("span", {
        className: "brand_buttons--googleText--Gj2MC",
        children: i
      })]
    })
  });
});
function P({
  text: e,
  onClick: t
}) {
  return jsx(N, {
    onClick: t,
    text: e,
    svg: _$$A2,
    trackingProperties: {
      trackingDescriptor: _$$c.CONTINUE_WITH_GOOGLE
    }
  });
}
function M() {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function j(e) {
  let t = useDispatch();
  let [i, o] = useState(!1);
  let [l, c] = useState(!1);
  let [_, A] = useState(M());
  let y = useRef(null);
  let I = useAtomWithSubscription(nb);
  let E = async () => {
    null === e.auth.postVerificationAction ? await x() : t(e.auth.postVerificationAction);
    o(!1);
    w();
  };
  let x = async () => {
    let e = "";
    try {
      e = await Hc(AuthAction.SIGN_UP);
    } finally {
      window.self.origin === window.parent.origin && window.parent.postMessage({
        type: "arkose_completed",
        arkose_token: e
      });
    }
  };
  let S = () => {
    y.current = setTimeout(() => {
      c(!0);
      w();
    }, 1e4);
  };
  let w = () => {
    null !== y.current && (clearTimeout(y.current), y.current = null);
  };
  _$$h(() => {
    o(!0);
    S();
  });
  let C = I8();
  return jsxs(v, {
    onSubmit: e => (e.preventDefault(), !1),
    ...e,
    children: [jsx("input", {
      type: "hidden",
      name: "email",
      value: e.auth.email || ""
    }), jsx("input", {
      type: "hidden",
      name: "password",
      value: I || ""
    }), jsx("input", {
      type: "hidden",
      name: "opt_in_email",
      value: `${e.auth.optInEmail}` || ""
    }), C && jsx("input", {
      type: "hidden",
      name: "email_token",
      value: C
    }), i ? jsxs(ZD, {
      headerSize: "hidden",
      className: "verify_human_form--modalContainer--7IjzI",
      title: " ",
      isCloseHidden: !0,
      children: [jsx(LargeLoadingSpinner, {}), jsx("h1", {
        className: "verify_human_form--title--iErts",
        children: getI18nString("auth.captcha.captcha_is_loading")
      }), l && jsxs(Fragment, {
        children: [jsx("div", {
          className: "verify_human_form--timeoutText---iomJ",
          "data-testid": "help-text",
          children: renderI18nText("auth.captcha.timed_out_while_loading", {
            helpCenterLink: jsx(linkWithTracking, {
              href: "https://help.figma.com/hc/articles/30659048904983",
              target: "_blank",
              trusted: !0,
              children: renderI18nText("auth.captcha.timed_out_while_loading.help_center_link_text")
            })
          })
        }), jsx(k, {
          fullWidth: !0,
          onClick: function () {
            c(!1);
            A(M());
            S();
          },
          type: "button",
          "data-testid": "reload-captcha-button",
          children: getI18nString("auth.captcha.reload_captcha")
        })]
      })]
    }) : null, jsx(p8, {
      prevFormState: e.auth.prevForm,
      arkoseAction: e.auth.arkoseAction,
      onLoaded: () => {
        e.auth.origin === DT.COMMUNITY && window.self.origin === window.parent.origin && window.parent.postMessage({
          type: "auth_iframe_show"
        }, location.origin);
      },
      onChallenge: () => {
        o(!1);
        w();
      },
      onCompleted: E,
      onFailed: (i, n) => {
        o(!1);
        w();
        t(changeAuthFormState({
          formState: e.auth.prevForm
        }));
        t(AUTH_SHOW_ERROR({
          message: resolveMessage(i, n)
        }));
      }
    }, _)]
  });
}
function H(e) {
  let t = useDispatch();
  let [i, o] = useState(!1);
  let [d, c] = useState(null);
  let f = useAtomWithSubscription(nb);
  let _ = useSelector(e => e.auth.twoFactorPromptedBy);
  let A = I8();
  let y = TA();
  return jsxs(v, {
    ...e,
    header: e.header || getI18nString("auth.two-factor.header"),
    onSubmit: () => {
      let i = e.id;
      let n = atomStoreManager.get(_G);
      if (n) W8(n, {
        dispatch: t,
        apiUrl: _B,
        origin: e.auth.origin,
        formId: i
      }).then(i => {
        "login" === i.type && (t(AUTH_SET_REDIRECT_URL({
          redirectUrl: e.auth.redirectUrl
        })), t(AUTH_COMPLETE({
          userId: i.user.id
        })));
      }).catch(e => {
        t(AUTH_SHOW_ERROR({
          message: e.message
        }));
      });else if (TA()) _$$k2.twoFactor(d || "").then(e => {
        customHistory.redirect(e.data.meta.redirect);
      }).catch(e => {
        let i = e.data;
        let n = resolveMessage(e, i?.message || getI18nString("auth.default-error"));
        "invalid_session" === i.reason ? customHistory.redirect("/") : t(AUTH_SHOW_ERROR({
          message: n,
          invalidInput: AuthField.TOTP_KEY
        }));
      });else switch (_) {
        case AuthFlowStep.SIGN_IN:
          t(AUTH_SIGN_IN({
            formId: i
          }));
          break;
        case AuthFlowStep.RESET_PASSWORD:
          t(AUTH_RESET_PASSWORD({
            formId: i
          }));
      }
    },
    children: [jsx(gK, {
      onChange: e => {
        c(e.currentTarget.value);
      },
      value: d || "",
      name: AuthField.TOTP_KEY,
      inputMode: "numeric",
      autoComplete: "one-time-code",
      placeholder: getI18nString("auth.two-factor.authentication-code"),
      isInvalid: e.auth.invalidInput === AuthField.TOTP_KEY,
      showUpdatedInputDesign: !0
    }), jsx("input", {
      type: "hidden",
      name: "email",
      value: e.auth.email
    }), jsx("input", {
      type: "hidden",
      name: "password",
      value: f || ""
    }), jsx("input", {
      type: "hidden",
      name: "password_retype",
      value: f || ""
    }), A && jsx("input", {
      type: "hidden",
      name: "email_token",
      value: A
    }), y && jsx("input", {
      type: "hidden",
      name: "saml_session_id",
      value: y
    }), jsx(_$$k, {
      multiple: 2
    }), jsx(k, {
      type: "submit",
      loading: e.auth.loading,
      className: "two_factor--wideButton--4uVoN auth_view--wideButton--Db9su auth_view--fullWidth--ffDfw",
      children: getI18nString("auth.two-factor.log-in")
    }), jsx(_$$k, {
      multiple: 2
    }), jsxs("div", {
      className: "two_factor--center--c14hu",
      children: [e.auth.smsOkay && !i && jsxs(Fragment, {
        children: [jsx(_$$N, {
          href: "#",
          onClick: () => {
            t(q_({
              formId: e.id
            }));
            o(!0);
          },
          children: e.auth.hint ? renderI18nText("auth.two-factor.resend-sms-code") : renderI18nText("auth.two-factor.send-sms-code")
        }), jsx(_$$k, {
          multiple: 2
        })]
      }), jsx(_$$N, {
        href: "#",
        onClick: () => {
          atomStoreManager.set(_G, null);
          e.auth.ssoMethod === AuthProvider.SAML ? t(changeAuthFormState({
            formState: AuthFlowStep.SAML_START
          })) : t(changeAuthFormState({
            formState: e.auth.twoFactorPromptedBy
          }));
        },
        children: getI18nString("auth.two-factor.back")
      })]
    })]
  });
}
let X = "join_org--modalText--t6wL6";
function Q(e) {
  let t = useDispatch();
  let i = customHistory.location.pathname + customHistory.location.search;
  let [s, o] = useState(!1);
  let d = useSelector(e => e.user);
  let c = useSelector(selectOpenFileKey);
  let u = useSelector(({
    openFile: e
  }) => e?.parentOrgId);
  let p = useSelector(({
    openFile: e
  }) => e?.org?.name);
  if (!c || !d || !u) return null;
  let m = e?.auth.origin === "start_using_plugins_button_click" ? jsx("div", {
    className: X,
    children: renderI18nText("permissions.join_org.cannot_run_plugins", {
      orgName: jsx("span", {
        style: {
          fontWeight: 600
        },
        children: p
      })
    })
  }) : jsx("div", {
    className: X,
    children: renderI18nText("permissions.join_org.cannot_edit_file", {
      orgName: jsx("span", {
        style: {
          fontWeight: 600
        },
        children: p
      })
    })
  });
  return jsx(TrackingProvider, {
    name: "Request org access modal",
    properties: {
      orgId: u,
      userId: d.id,
      resourceType: FResourceCategoryType.FILE,
      resourceIdOrKey: c
    },
    children: jsxs(v, {
      ...e,
      header: getI18nString("permissions.join_org.access_needed"),
      onSubmit: e.onFormSubmit,
      isLoading: void 0 === p,
      children: [m, jsx(_$$k, {
        multiple: 2
      }), jsx("div", {
        className: X,
        children: renderI18nText("permissions.join_org.ask_an_org_admin", {
          orgName: p
        })
      }), jsx(_$$k, {
        multiple: 4
      }), jsx(Q9, {
        name: "request_org_access_modal_cta",
        onClick: () => {
          o(!0);
          XHR.post("/api/org_join_request", {
            resource_type: FResourceCategoryType.FILE,
            resource_id_or_key: c
          }).then(() => {
            o(!1);
            t(VisualBellActions.enqueue({
              message: getI18nString("permissions.join_org.request_sent")
            }));
            t(popModalStack());
          }, e => {
            o(!1);
            t(popModalStack());
            t(VisualBellActions.enqueue({
              message: e.message || e.data.message,
              error: !0
            }));
          });
        },
        fullWidth: !1,
        loading: s,
        children: renderI18nText("permissions.join_org.ask_to_be_added")
      }), jsx(_$$k, {
        multiple: 4
      }), jsx("div", {
        className: "join_org--modalFooter--1qtlt",
        children: renderI18nText("permissions.join_org.you_are_requesting_to_be_added_as_email", {
          email: d.email
        })
      }), jsx(_$$k, {
        multiple: 1
      }), jsx("div", {
        className: "join_org--link--cdSS1",
        children: jsx(_$$N, {
          href: `/switch_user?cont=${encodeURIComponent(i)}`,
          children: renderI18nText("permissions.join_org.switch_accounts")
        })
      })]
    })
  });
}
let ee = "password_reset--centeredLink--MYK7h auth_view--footerButtonRow--X82kF auth_brand--innerLink---m7Kv";
function et(e) {
  let t = useDispatch();
  return jsxs(v, {
    ...e,
    header: getI18nString("auth.password-reset.enter-email-header"),
    onSubmit: () => {
      t(changeAuthFormState({
        formState: AuthFlowStep.VERIFY_HUMAN,
        prevState: AuthFlowStep.FORGOT_PASSWORD,
        arkoseAction: AuthAction.FORGOT_PASSWORD,
        postVerificationAction: AUTH_SEND_PASSWORD_RESET({
          formId: e.id
        })
      }));
    },
    children: [jsx(ZH, {
      ...e,
      showUpdatedInputDesign: !0
    }), jsx(_$$k, {
      multiple: 2
    }), jsx(k, {
      loading: e.auth.loading,
      disabled: !xf(e.auth.email),
      children: getI18nString("auth.password-reset.reset-password-button")
    }), jsx(_$$k, {
      multiple: 2
    }), jsx("div", {
      className: ee,
      children: jsx(_$$N, {
        onClick: () => t(changeAuthFormState({
          formState: AuthFlowStep.SIGN_IN
        })),
        trusted: !0,
        href: "#",
        children: getI18nString("auth.password-reset.cancel")
      })
    })]
  });
}
function ei(e) {
  let t = useDispatch();
  let i = y()({
    "password_reset--modal--fz1tm": e.modal,
    "password_reset--form--CoL54 password_reset--modal--fz1tm": !e.modal
  }, "password_reset--figmaSans--LeZjc auth_brand--figmaSans--aXdNw");
  return jsxs("div", {
    className: i,
    children: [jsx("h1", {
      className: "password_reset--header--GtyGw",
      children: renderI18nText("auth.password-reset.confirmation-text", {
        email: jsx("span", {
          className: "password_reset--email--IXWPN",
          children: e.auth.email
        })
      })
    }), jsx("div", {
      className: ee,
      children: jsx(_$$N, {
        onClick: () => t(changeAuthFormState({
          formState: AuthFlowStep.SIGN_IN
        })),
        trusted: !0,
        href: "#",
        children: getI18nString("auth.password-reset.back-to-log-in")
      })
    })]
  });
}
function en(e) {
  let t = useDispatch();
  let i = I8();
  return jsxs(v, {
    auth: e.auth,
    header: getI18nString("auth.password-reset.choose-a-new-password"),
    id: e.id,
    modal: e.modal,
    noAutofocus: e.noAutofocus,
    subtitle: e.subtitle,
    onSubmit: e.onFormSubmit,
    children: [i && jsx("input", {
      type: "hidden",
      name: "email_token",
      value: i
    }), jsx(gK, {
      name: AuthField.PASSWORD,
      type: "password",
      placeholder: getI18nString("auth.password-reset.placeholder.password"),
      autoCapitalize: "off",
      autoCorrect: "off",
      isInvalid: AuthField.PASSWORD === e.auth.invalidInput,
      showUpdatedInputDesign: !0
    }), jsx(_$$k, {
      multiple: 3
    }), jsx(gK, {
      name: "password_retype",
      type: "password",
      placeholder: getI18nString("auth.password-reset.placeholder.confirm-password"),
      autoCapitalize: "off",
      autoCorrect: "off",
      isInvalid: AuthField.PASSWORD === e.auth.invalidInput,
      showUpdatedInputDesign: !0
    }), jsx(_$$k, {
      multiple: 4
    }), jsx(k, {
      loading: e.auth.loading,
      children: getI18nString("auth.password-reset.submit")
    }), jsx(_$$k, {
      multiple: 4
    }), jsx("div", {
      className: "password_reset--center--Z4tPu",
      children: jsx(_$$N, {
        onClick: () => t(changeAuthFormState({
          formState: AuthFlowStep.SIGN_IN
        })),
        trusted: !0,
        href: "#",
        children: getI18nString("auth.password-reset.back-to-log-in")
      })
    })]
  });
}
let ed = "app_auth--modal--8OYIY auth_form--modal--1HV7- auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
let ec = "app_auth--header--JRxV9 auth_form--header--5WRrG auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
let eu = "app_auth--formWide--f-Ha2 app_auth--form--5bLUc app_auth--modal--8OYIY auth_form--modal--1HV7- auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
let ep = "app_auth--innerContainer--xZzJw auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
let em = "app_auth--footerText--TYLg3 auth_view--footerText--M9q2W";
let eh = "app_auth--inlineLinkWithText--KCxa2";
let eg = "app_auth--signupLink--vCQo3 blue_link--blueLink--9rlnd";
let ef = (e, t) => {
  let i = `/app_auth/${t.id}/grant`;
  let n = new URLSearchParams();
  e && n.append("signup", "true");
  console.log("Opening: " + i);
  desktopAPIInstance?.startAppAuth(i);
};
let e_ = (e, t, i, n) => {
  XHR.post("/api/session/app_auth", {
    app_type: t
  }).then(t => {
    let n = t.data.meta;
    n && (ef(e, n), i?.());
  }).catch(e => {
    console.error(e);
    n?.();
  });
};
function eA(e) {
  let [t, i] = e.email.split("@");
  return jsxs("div", {
    style: _$$sx.inlineFlex.maxWFull.$,
    children: [jsx("span", {
      style: _$$sx.noWrap.overflowHidden.ellipsis.pl16.$,
      children: t
    }), jsxs("span", {
      style: _$$sx.pr16.$,
      children: ["@", i]
    })]
  });
}
function ey(e) {
  let t = useRef(void 0);
  let [i, s] = useState(!1);
  let o = useDispatch();
  useEffect(() => () => {
    clearTimeout(t.current);
  }, []);
  let l = useCallback(() => {
    o(AUTH_SHOW_ERROR({
      message: getI18nString("auth.generic-app-auth-error")
    }));
    s(!1);
  }, [o]);
  let d = () => {
    t.current = setTimeout(l, 3e5);
    s(!0);
  };
  return i ? jsx("div", {
    className: eu,
    children: jsxs("div", {
      className: ep,
      children: [jsx("h1", {
        className: ec,
        children: getI18nString("auth.go-to-browser-to-complete-login")
      }), jsx(_$$k, {
        multiple: 3
      }), jsxs("div", {
        className: y()(em, eh),
        children: [getI18nString("auth.not-seeing-the-browser-tab"), " ", jsx("div", {
          tabIndex: -1,
          className: eg,
          children: jsx(Button.Link, {
            onClick: () => {
              clearTimeout(t.current);
              s(!1);
            },
            children: getI18nString("auth.generic-go-back-and-try-again")
          })
        })]
      })]
    })
  }) : jsx("div", {
    className: "app_auth--form--5bLUc app_auth--modal--8OYIY auth_form--modal--1HV7- auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
    children: jsxs("div", {
      className: ep,
      children: [jsx("h1", {
        className: ec,
        children: e.header ?? getI18nString("auth.welcome-to-figma")
      }), jsx(_$$k, {
        multiple: 3
      }), e.auth.error && jsxs(Fragment, {
        children: [jsx(_$$T, {
          role: "alert",
          children: jsx("div", {
            className: "app_auth--error--EpXOP",
            children: e.auth.error
          })
        }), jsx(_$$k, {
          multiple: 1
        })]
      }), e.subtitle && jsxs("div", {
        className: "app_auth--subtitle--Z5k4f auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
        children: [e.subtitle, jsx(_$$k, {
          multiple: 1
        })]
      }), jsx(k, {
        type: "submit",
        loading: e.auth.loading,
        onClick: () => {
          e_(!1, e.appType, d, l);
        },
        children: getI18nString("auth.log-in-with-browser")
      }), jsx(_$$k, {
        multiple: 4
      }), jsxs("div", {
        className: y()(em, eh),
        children: [getI18nString("auth.no-account"), " ", jsx("div", {
          tabIndex: -1,
          className: eg,
          children: jsx(Button.Link, {
            onClick: () => {
              e_(!0, e.appType, d, l);
            },
            children: getI18nString("auth.create-one")
          })
        })]
      })]
    })
  });
}
function eb(e) {
  let t;
  let i;
  let s;
  let o;
  let d = useDispatch();
  let [c, p] = useState(!1);
  let h = e.auth.appAuthAppType === ClientPlatform.MSFT_TEAMS;
  let g = t => {
    let i;
    let {
      appAuthDesktopProtocol
    } = e.auth;
    i = "vscode" === appAuthDesktopProtocol ? "vscode://figma.figma-vscode-extension/app_auth_redeem" : "vscode-insiders" === appAuthDesktopProtocol ? "vscode-insiders://figma.figma-vscode-extension/app_auth_redeem" : "vscode-cursor" === appAuthDesktopProtocol ? "cursor://figma.figma-vscode-extension/app_auth_redeem" : h && e.auth.appAuthMsftTeamsUrl ? e.auth.appAuthMsftTeamsUrl : `${e.auth.appAuthDesktopProtocol || "figma"}://app_auth/redeem`;
    let r = new URLSearchParams();
    r.append("g_secret", t);
    r.toString() && (i += "?" + r.toString());
    return i;
  };
  let f = e => {
    let t = g(e);
    customHistory.unsafeRedirect(t);
    XHR.post("/api/session/clear_cont");
    setTimeout(() => {
      window.close();
    }, 1e4);
  };
  let A = t => {
    if (!e.auth.appAuthId) return;
    let i = `/api/session/app_auth/${e.auth.appAuthId}/grant`;
    let n = new URLSearchParams();
    e.auth.revokeGrantor && n.append("revoke_grantor", e.auth.revokeGrantor.toString());
    n.toString() && (i += "?" + n.toString());
    XHR.post(i, null, {
      headers: {
        "X-Figma-User-ID": t
      }
    }).then(e => {
      b(e.data.meta.g_secret);
    }).catch(t => {
      console.error(t);
      trackEventAnalytics("AppAuth", {
        app_auth_id: e.auth.appAuthId,
        app_auth_status: "grant_failed",
        error_message: t.data?.message || `Failed with status ${t.status}`
      }, {
        batchRequest: !1,
        forwardToDatadog: !0
      });
      p(!0);
    });
  };
  let b = t => {
    trackEventAnalytics("AppAuth", {
      app_auth_id: e.auth.appAuthId,
      app_auth_status: "click_to_redeem"
    }, {
      batchRequest: !1
    });
    f(t);
  };
  let v = () => {
    customHistory.unsafeRedirect("figma://login");
  };
  let I = () => {
    trackEventAnalytics("AppAuth", {
      app_auth_id: e.auth.appAuthId,
      app_auth_status: "signout_try_again"
    }, {
      batchRequest: !1
    });
  };
  let {
    appAuthAppType
  } = e.auth;
  let S = e.modal ? ed : eu;
  t = appAuthAppType === ClientPlatform.MOBILE || appAuthAppType === ClientPlatform.FIGJAM_MOBILE ? getI18nString("auth.mobile-app") : appAuthAppType === ClientPlatform.MIRROR ? getI18nString("auth.mirror-app") : appAuthAppType === ClientPlatform.MSFT_TEAMS ? getI18nString("auth.microsoft-teams") : getI18nString("auth.desktop-app");
  i = appAuthAppType === ClientPlatform.MOBILE || appAuthAppType === ClientPlatform.FIGJAM_MOBILE ? getI18nString("auth.continue-with-the-specific-app", {
    appDescriptor: t
  }) : appAuthAppType === ClientPlatform.VSCODE || appAuthAppType === ClientPlatform.VSCODE_INSIDERS || appAuthAppType === ClientPlatform.VSCODE_CURSOR ? getI18nString("auth.open-figma-for-vs-code") : getI18nString("auth.open-specific-app", {
    appDescriptor: t
  });
  s = appAuthAppType === ClientPlatform.VSCODE || appAuthAppType === ClientPlatform.VSCODE_INSIDERS || appAuthAppType === ClientPlatform.VSCODE_CURSOR ? getI18nString("auth.choose-account-to-add-to-figma-for-vs-code") : getI18nString("auth.choose-account-to-add-to-specific-app", {
    appDescriptor: t
  });
  let w = e.auth.appAuthUsers?.length === 1 ? e.auth.appAuthUsers[0] : null;
  let C = w ? jsx(eA, {
    email: w.email
  }) : null;
  if (!c && e.auth.appAuthId && e.auth.appAuthUsers) o = w ? jsxs(Fragment, {
    children: [jsx("h1", {
      className: ec,
      children: renderI18nText("auth.log-in-with-account", {
        email: C
      })
    }), jsx(_$$k, {
      multiple: 3
    }), jsx(R, {
      className: "app_auth--redeemButton--Uh-Db",
      onClick: () => A(w.id),
      children: i
    }), jsx(_$$k, {
      multiple: 4
    }), jsx("div", {
      className: y()(em, eh),
      children: renderI18nText("auth.log-in-with-other-account", {
        email: w.email,
        logInLink: jsx("div", {
          tabIndex: -1,
          className: eg,
          children: jsx(Button.Link, {
            onClick: () => {
              I();
              d(changeAuthFormState({
                formState: AuthFlowStep.SIGN_IN
              }));
            },
            children: getI18nString("auth.log-in-with-other-account-link")
          })
        })
      })
    })]
  }) : jsx(_$$a, {
    dispatch: d,
    header: s,
    users: e.auth.appAuthUsers,
    onUserSelect: A,
    trackOnChangeAccount: I
  });else {
    let e;
    let i;
    e = appAuthAppType === ClientPlatform.MOBILE || appAuthAppType === ClientPlatform.FIGJAM_MOBILE ? getI18nString("auth.generic-go-back-and-try-again") : appAuthAppType === ClientPlatform.VSCODE || appAuthAppType === ClientPlatform.VSCODE_INSIDERS || appAuthAppType === ClientPlatform.VSCODE_CURSOR ? getI18nString("auth.open-figma-for-vs-code") : getI18nString("auth.open-specific-app", {
      appDescriptor: t
    });
    i = appAuthAppType === ClientPlatform.VSCODE || appAuthAppType === ClientPlatform.VSCODE_INSIDERS || appAuthAppType === ClientPlatform.VSCODE_CURSOR ? getI18nString("auth.try-again-in-figma-for-vs-code") : getI18nString("auth.try-again-on-specific-app", {
      appDescriptor: t
    });
    o = jsxs(Fragment, {
      children: [jsx(_$$T, {
        role: "alert",
        children: jsxs("h1", {
          className: ec,
          children: [getI18nString("auth.your-login-session-has-expired"), jsx("br", {}), i]
        })
      }), jsx(_$$k, {
        multiple: 3
      }), jsx(R, {
        onClick: () => {
          v();
        },
        children: e
      })]
    });
  }
  return jsx("div", {
    className: S,
    children: jsx("div", {
      className: ep,
      children: jsx(TrackingProvider, {
        name: "App Auth Grant Form",
        children: o
      })
    })
  });
}
function ev(e) {
  let t = useDispatch();
  _$$h(() => {
    r();
    customHistory.replace("/login", null);
  });
  let i = () => {
    let e = getI18nString("auth.generic-app-auth-error");
    if (isFigmaMirrorAndroid() || isInFigmaMobile()) {
      let t = new URLSearchParams();
      t.append("error", e);
      customHistory.redirect("/mobile-app?" + t.toString());
    } else {
      t(AUTH_SHOW_ERROR({
        message: e
      }));
      t(AUTH_REDEEM_RESET());
    }
  };
  let r = () => {
    if (!e.auth.appAuthGSecret) {
      i();
      return;
    }
    XHR.post("/api/session/app_auth/redeem", {
      g_secret: e.auth.appAuthGSecret
    }).then(() => {
      desktopAPIInstance ? desktopAPIInstance.finishAppAuth(e.auth.redirectUrl) : setTimeout(() => {
        let t = e.auth.redirectUrl || (isFigmaMirrorAndroid() || isInFigmaMobile() ? "/mobile-app" : null);
        null != t ? (console.log("Opening: " + t), customHistory.redirect(t)) : customHistory.reload("AppAuthRedeemForm");
      }, 500);
    }).catch(e => {
      console.error(e);
      i();
    });
  };
  let s = e.modal ? ed : eu;
  return jsx("div", {
    className: s,
    children: jsx("div", {
      className: ep,
      children: jsxs(Fragment, {
        children: [jsx("div", {
          className: "app_auth--message--WN7nZ auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
          children: getI18nString("auth.generic-loading")
        }), jsx(_$$k3, {})]
      })
    })
  });
}
function ex({
  authOrigin: e
}) {
  let t = useDispatch();
  let i = useSelector(e => e.loadingState);
  let s = useSelector(e => e.auth.accountPicker);
  let o = getInitialOptions().team_join_link?.token;
  let l = useRef(!1);
  let d = (e, n) => {
    let r = redeemTeamJoinLink.loadingKeyForPayload({
      token: e,
      userId: n
    });
    VP(i, r) || GH(i, r) || t(redeemTeamJoinLink({
      token: e,
      userId: n
    }));
  };
  let c = s.destination_name;
  let p = c ? o ? renderI18nText("auth.account-picker-join-text", {
    destination: jsx("strong", {
      children: c
    })
  }) : renderI18nText("auth.account-picker-open-text", {
    destination: jsx("strong", {
      children: c
    })
  }) : renderI18nText("auth.account-picker");
  return jsx(_$$a, {
    dispatch: t,
    users: s.authed_users,
    hints: s.authed_user_access_reason,
    onUserSelect: e => {
      l.current || (l.current = !0, o ? d(o, e) : t(AUTH_COMPLETE({
        userId: e
      })));
    },
    authOrigin: o ? "team_invite_link" : e,
    header: p
  });
}
let eS = "sign_in_and_up--primaryWideButton--ajva0 auth_view--primaryWideButton--ES6JN auth_view--wideButton--Db9su auth_view--fullWidth--ffDfw";
let ew = "sign_in_and_up--footer--ZRvf2 auth_view--footer--E0jsP";
let eC = "sign_in_and_up--centerText--BFgLW auth_view--centerText--7489g";
let eT = "sign_in_and_up--figmaSans--VcBIh auth_brand--figmaSans--aXdNw";
let ek = "sign_in_and_up--footerRow--AiTIY auth_view--footerButtonRow--X82kF auth_brand--text--yNin9 auth_brand--innerLink---m7Kv";
let eR = "sign_in_and_up--brandError--cu-wz auth_brand--brandError--WHwzW auth_brand--figmaSans--aXdNw";
let eN = "sign_in_and_up--orBlock--w7-l4";
function eP(e) {
  return jsxs(v, {
    ...e,
    className: eC,
    header: getI18nString("auth.email-only.header"),
    onSubmit: e.onFormSubmit,
    children: [jsx(ZH, {
      ...e,
      showUpdatedInputDesign: !0
    }), jsx(_$$k, {
      multiple: 4
    }), jsx(k, {
      type: "submit",
      loading: e.auth.loading,
      children: getI18nString("auth.email-only.log-in")
    })]
  });
}
function eD() {
  let e = useSelector(e => e.auth);
  return jsx(TrackingProvider, {
    name: "Enable Cookies",
    children: jsx(v, {
      auth: e,
      header: getI18nString("auth.cookies_are_disabled"),
      subtitle: getI18nString("auth.cookies_are_required_to_use_figma"),
      id: "enable-cookies-form",
      onSubmit: lQ,
      children: jsx(R, {
        trackingProperties: {
          trackingDescriptor: _$$c.TRY_AGAIN
        },
        onClick: () => customHistory.reload("User clicked try again from enable cookies auth page"),
        children: renderI18nText("auth.try_again")
      })
    })
  });
}
function eM({
  formId: e
}) {
  let t = useDispatch();
  let i = useSelector(e => e.auth.googleIdToken);
  let s = useSelector(e => e.auth.googleTokenType);
  useEffect(() => {
    sT({
      googleUserInfo: {
        name: "",
        token: i,
        tokenType: s
      }
    }).then(() => {
      t(changeAuthFormState({
        formState: AuthFlowStep.VERIFY_HUMAN,
        prevState: AuthFlowStep.SIGN_UP,
        arkoseAction: AuthAction.SIGN_UP,
        postVerificationAction: AUTH_SIGN_UP({
          formId: e
        })
      }));
    }).catch(e => {
      reportError(_$$e.ACTIVATION, e);
    });
  }, [t, e, i, s]);
  return jsx("div", {
    className: "google_sso_redirect--redirectOverlay--w8Of5",
    children: jsx(LoadingOverlay, {})
  });
}
function ej(e) {
  let t = useDispatch();
  let i = "gov" === window.INITIAL_OPTIONS.cluster_name;
  let r = i ? getI18nString("auth.email-only.header") : getI18nString("auth.saml-start.header");
  return jsxs(v, {
    ...e,
    header: r,
    onSubmit: e.onFormSubmit,
    children: [jsx(ZH, {
      ...e,
      showDomainSuggestions: !0,
      showUpdatedInputDesign: !0
    }), jsx(_$$k, {
      multiple: 2
    }), jsx(k, {
      type: "submit",
      className: eS,
      loading: e.auth.loading,
      disabled: !xf(e.auth.email),
      children: getI18nString("auth.saml-start.log-in-plain")
    }), jsx(_$$k, {
      multiple: 2
    }), jsx("div", {
      className: ew,
      children: jsx("div", {
        className: y()(ek, "sign_in_and_up--signInWithPassword--WpKvE"),
        children: !i && jsx(_$$N, {
          onClick: () => {
            t(changeAuthFormState({
              formState: AuthFlowStep.SIGN_IN
            }));
            t(AUTH_CLICKED_SAML_SIGN_IN({
              value: !1
            }));
          },
          trusted: !0,
          href: "#",
          children: getI18nString("auth.saml-start.log-in-google-or-password")
        })
      })
    })]
  });
}
function eB(e) {
  let t = e.isSignUp ? getI18nString("auth.footer-sign-up-switch-form-text") : getI18nString("auth.footer-sign-in-switch-form-text");
  let i = e.isSignUp ? getI18nString("auth.footer-sign-up-switch-form-link") : getI18nString("auth.footer-sign-in-switch-form-link");
  let r = getI18nString("auth.footer-saml-link");
  return e.onForgotPassword || e.onSwitchToSaml || e.onChangeFormClick ? jsxs("div", {
    className: ew,
    children: [e.onSwitchToSaml && jsx("div", {
      className: ek,
      children: jsx(_$$N, {
        onClick: e.onSwitchToSaml,
        href: "#",
        children: r
      })
    }), e.onForgotPassword && jsxs(Fragment, {
      children: [jsx(_$$k, {
        multiple: 2
      }), jsx("div", {
        className: ek,
        children: jsx(_$$N, {
          onClick: e.onForgotPassword,
          href: "#",
          children: getI18nString("auth.footer-forgot-password")
        })
      })]
    }), e.onChangeFormClick && jsxs(Fragment, {
      children: [jsx(_$$k, {
        multiple: 2
      }), jsx("div", {
        className: ek,
        children: jsx("div", {
          className: "sign_in_and_up--switchFormText--mE2oB auth_brand--text--yNin9",
          children: jsxs("p", {
            children: [t, " ", jsx(_$$N, {
              onClick: e.onChangeFormClick,
              href: "#",
              children: i
            })]
          })
        })
      })]
    })]
  }) : null;
}
function eV(e) {
  return !!(e && [ClientPlatform.MOBILE, ClientPlatform.MIRROR, ClientPlatform.FIGJAM_MOBILE].includes(e));
}
function eG({
  ctaText: e,
  googleText: t,
  includeCta: i = !0
}) {
  let r = {
    callToActionText: e,
    googleText: t,
    termsOfService: jsx(LinkPrimitive, {
      href: getLocalizedPath("/legal/tos/"),
      className: "x1bvjpef x8p8a2l x1ypdohk",
      children: renderI18nText("auth.sign-in.tos-long")
    }),
    privacyPolicy: jsx(LinkPrimitive, {
      href: getLocalizedPath("/legal/privacy/"),
      className: "x1bvjpef x8p8a2l x1ypdohk",
      children: renderI18nText("auth.sign-in.privacy-policy")
    })
  };
  let a = i ? renderI18nText("auth.terms-and-conditions-2nd-person-google-first", r) : renderI18nText("auth.terms-and-conditions-2nd-person-google-only", r);
  return jsx("p", {
    className: "xfifm61 xawzx9p",
    children: a
  });
}
function ez(e) {
  let t = useDispatch();
  let {
    auth
  } = e;
  useEffect(() => {
    auth.loading || auth.errorType !== AuthErrorCode.UNAUTHORIZED || null == auth.googleIdToken || t(AUTH_SET_GOOGLE_ID_TOKEN({
      googleIdToken: null
    }));
  }, [auth.loading, auth.errorType, auth.googleIdToken, t]);
  let o = () => {
    t(changeAuthFormState({
      formState: AuthFlowStep.FORGOT_PASSWORD
    }));
  };
  let l = () => {
    t(AUTH_CLICKED_SAML_SIGN_IN({
      value: !0
    }));
    t(changeAuthFormState({
      formState: AuthFlowStep.SAML_START
    }));
  };
  let d = auth.invalidInput === AuthField.EMAIL || auth.invalidInput === AuthField.PASSWORD;
  let c = useAtomWithSubscription(Kf);
  let h = I8();
  let f = y()(eR, eT);
  return jsxs(v, {
    className: eC,
    hideError: d,
    onSubmit: e.onFormSubmit,
    ...e,
    children: [e.showLegalSection && jsx(eG, {
      googleText: e.googleText,
      ctaText: e.submitText,
      includeCta: e.isSignUp
    }), !e.hideGoogleSignup && jsxs(Fragment, {
      children: [jsx(P, {
        text: e.googleText,
        onClick: e.onGoogleAuth
      }), jsx("p", {
        className: eN,
        children: getI18nString("auth.generic-or")
      })]
    }), jsx(ZH, {
      showDomainSuggestions: !0,
      showUpdatedInputDesign: !0,
      ariaDescribedBy: "email-error-text"
    }), auth.invalidInput === AuthField.EMAIL && auth.error && jsx("p", {
      className: f,
      id: "email-error-text",
      children: auth.error
    }), jsx(_$$k, {
      multiple: 2
    }), jsx(Wv, {
      showUpdatedInputDesign: !0,
      ariaDescribedBy: "password-error-text",
      isSignUp: e.isSignUp
    }), auth.invalidInput === AuthField.PASSWORD && auth.error && jsx("p", {
      className: f,
      id: "password-error-text",
      children: auth.error
    }), h && jsx("input", {
      type: "hidden",
      name: "email_token",
      value: h
    }), jsx(_$$k, {
      multiple: 3
    }), jsx(R, {
      type: "submit",
      loading: auth.loading,
      trackingProperties: {
        trackingDescriptor: e.isSignUp ? _$$c.SIGN_UP : _$$c.LOGIN
      },
      children: e.submitText
    }), jsx(_$$k, {
      multiple: 2
    }), e.isSignUp && jsxs(Fragment, {
      children: [jsx(_$$k, {
        multiple: 2
      }), jsx("div", {
        className: "x78zum5 x6s0dn4 xl56j7k xfifm61",
        children: jsxs("p", {
          children: [jsx("span", {
            children: getI18nString("auth.footer-sign-up-switch-form-text")
          }), " ", jsx(LinkPrimitive, {
            href: "#",
            onClick: () => {
              t(changeAuthFormState({
                formState: AuthFlowStep.SIGN_IN
              }));
            },
            className: "x1bvjpef x8p8a2l x1ypdohk",
            children: getI18nString("auth.footer-sign-up-switch-form-link")
          })]
        })
      }), jsx(_$$k, {
        multiple: 4
      })]
    }), c ? jsx(eB, {
      isSignUp: e.isSignUp,
      onChangeFormClick: void 0,
      onForgotPassword: e.isSignUp ? void 0 : o,
      onSwitchToSaml: e.isSignUp ? void 0 : l
    }) : jsx(eB, {
      isSignUp: e.isSignUp,
      onChangeFormClick: e.isSignUp ? void 0 : () => {
        t(changeAuthFormState({
          formState: AuthFlowStep.SIGN_UP
        }));
      },
      onForgotPassword: o,
      onSwitchToSaml: l
    })]
  });
}
function eH(e) {
  let t = useDispatch();
  let [i, r] = useAtomValueAndSetter(Kf);
  let o = Xr(nb);
  _$$h(() => () => {
    i && r(!1);
  });
  let l = eV(e.auth.appAuthAppType);
  let c = (e, i) => {
    t(AUTH_SHOW_ERROR({
      message: e,
      errorType: i
    }));
  };
  return jsx(ez, {
    isSignUp: !1,
    showLegalSection: l,
    hideGoogleSignup: !1,
    onGoogleAuth: () => {
      o(null);
      e.auth.shouldUseRedirectInstead ? Bs(e.auth.redirectUrl, e.auth.fromMsTeams, e.auth.origin) : Rm({
        dispatch: t,
        origin: e.auth.origin,
        tosAccepted: l
      }).then(e => {
        "login" === e.type && t(AUTH_COMPLETE({
          userId: e.user.id
        }));
      }, e => {
        c(e.message, e.errorType);
      });
    },
    googleText: getI18nString("auth.sign-in-google-text"),
    submitText: getI18nString("auth.sign-in-submit-text"),
    ...e,
    header: e.fromLoggedOutDesignFile ? getI18nString("auth.sign_in_to_figma") : e.header
  });
}
function eX(e) {
  let {
    auth
  } = e;
  let i = auth.invalidInput === AuthField.EMAIL;
  let r = y()(eR, eT);
  return jsxs(v, {
    className: eC,
    hideError: i,
    onSubmit: e.onFormSubmit,
    ...e,
    children: [e.showLegalSection && jsx(eG, {
      googleText: e.googleText,
      ctaText: e.submitText,
      includeCta: !1
    }), !e.hideGoogleSignup && jsxs(Fragment, {
      children: [jsx(P, {
        text: e.googleText,
        onClick: e.onGoogleAuth
      }), jsx("p", {
        className: eN,
        children: getI18nString("auth.generic-or")
      })]
    }), jsx(ZH, {
      showDomainSuggestions: !0,
      showUpdatedInputDesign: !0,
      ariaDescribedBy: "email-error-text"
    }), auth.invalidInput === AuthField.EMAIL && auth.error && jsx("p", {
      className: r,
      id: "email-error-text",
      children: auth.error
    }), jsx(_$$k, {
      multiple: 3
    }), jsx(R, {
      type: "submit",
      className: eS,
      loading: auth.loading,
      trackingProperties: {
        trackingDescriptor: _$$c.CONTINUE
      },
      children: e.submitText
    }), e.requiresGoogle && jsxs(Fragment, {
      children: [jsx(_$$k, {
        multiple: 3
      }), jsx("div", {
        className: _$$s.flex.$,
        children: jsx(_$$_2, {
          fullWidth: !0,
          color: _$$S.INFORMATION,
          text: getI18nStringAlias("auth.error.login_google_sso_required"),
          icon: _$$A4
        })
      })]
    })]
  });
}
function eQ(e) {
  let t = useDispatch();
  let i = Xr(nb);
  let [o, l] = useAtomValueAndSetter(Kf);
  let c = function () {
    let {
      getConfig
    } = selectExperimentConfigHook("exp_signup_optimization_deferred_password");
    return useCallback(() => !!getConfig().getValue("enabled", !1), [getConfig]);
  }();
  let g = useState(() => c())[0];
  let [f, _] = useState(g && !o);
  let A = e.auth.email;
  let [y, b] = useState(!1);
  let v = e.auth.appAuthAppType === ClientPlatform.FIGJAM_MOBILE;
  let I = !f || !v && eV(e.auth.appAuthAppType);
  useEffect(() => {
    b(!1);
  }, [A]);
  _$$h(() => () => {
    o && l(!1);
  });
  let E = () => {
    i(null);
    e.auth.shouldUseRedirectInstead ? Bs(e.auth.redirectUrl, e.auth.fromMsTeams, e.auth.origin) : Rm({
      dispatch: t,
      origin: e.auth.origin,
      tosAccepted: I
    }).then(e => {
      "login" === e.type && t(AUTH_COMPLETE({
        userId: e.user.id
      }));
    }, e => {
      x(e.message);
    });
  };
  let x = e => {
    t(AUTH_SHOW_ERROR({
      message: e
    }));
  };
  function S() {
    let i = e.id;
    let n = document.getElementById(i);
    let r = _$$t2(n);
    let a = f ? f1(r) : Ng(r);
    return !a.message || (trackAuthEvent("signup_attempt_form_error", e.auth.origin, {
      error: a.message,
      googleIdToken: r.googleIdToken,
      invalidInput: a.invalidInput
    }), t(AUTH_SHOW_ERROR({
      message: a.message,
      invalidInput: a.invalidInput
    })), !1);
  }
  async function w(i) {
    let n = i.currentTarget;
    let r = _$$t2(n);
    if (S()) {
      trackAuthEvent("email_start_submit", e.auth.origin);
      t(AUTH_SET_AUTH_LOADING());
      try {
        let i = await Iu(r.email, AuthFlowStep.SIGN_UP);
        t(AUTH_CLEAR_AUTH_LOADING());
        "google" === i ? (b(!0), E()) : "saml" === i ? t(AUTH_SEND_EMAIL_SAML_START({
          formId: e.id
        })) : "sign_in" === i ? (l(!0), t(changeAuthFormState({
          formState: AuthFlowStep.SIGN_IN
        }))) : (l(!0), _(!1));
      } catch (e) {
        t(AUTH_SHOW_ERROR({
          message: e.message
        }));
      }
    }
  }
  let C = e.header;
  e.header && (e.header !== getI18nString("auth.sign_up_for_figma") || e.fromLoggedOutDesignFile || !g) || (C = getI18nString("auth.welcome-to-figma"));
  return f ? jsx(eX, {
    hideGoogleSignup: v,
    showLegalSection: I,
    onGoogleAuth: E,
    googleText: getI18nString("auth.sign-up-google-text"),
    submitText: getI18nString("auth.sign-up-email-continue-text"),
    ...e,
    header: C,
    onFormSubmit: w,
    requiresGoogle: y
  }) : jsx(ez, {
    isSignUp: !0,
    showLegalSection: !0,
    hideGoogleSignup: v,
    onGoogleAuth: E,
    googleText: getI18nString("auth.sign-up-google-text"),
    submitText: getI18nString("auth.sign-up-submit-text"),
    ...e,
    header: C,
    onFormSubmit: t => {
      S() && e.onFormSubmit(t);
    }
  });
}
function eJ(e) {
  let t = useDispatch();
  let i = () => {
    t(AUTH_COMPLETE());
  };
  let r = e => {
    t(AUTH_SHOW_ERROR({
      message: e
    }));
  };
  let s = e.auth.ssoMethod === AuthProvider.GOOGLE ? getI18nString("auth.sso-gate.google") : getI18nString("auth.sso-gate.saml-sso");
  let o = getI18nString("auth.sso-gate.header", {
    orgName: e.auth.orgName,
    ssoName: s
  });
  let d = e.auth.existingSession ? getI18nString("auth.sso-gate.back-with-session", {
    orgName: e.auth.orgName
  }) : getI18nString("auth.sso-gate.back-without-session");
  return jsxs(v, {
    ...e,
    className: eC,
    header: o,
    onSubmit: null,
    children: [e.auth.ssoMethod === AuthProvider.GOOGLE && jsx(P, {
      text: getI18nString("auth.sso-gate.log-in-google"),
      onClick: () => {
        xI(t, e.auth.origin).then(e => "login" === e.type && i(), e => {
          r(e.message);
        });
      }
    }), e.auth.ssoMethod === AuthProvider.SAML && jsx(k, {
      type: "submit",
      onClick: () => {
        t(AUTH_SAML_START_FROM_SESSION());
      },
      loading: e.auth.loading,
      children: getI18nString("auth.sso-gate.log-in-saml")
    }), jsx(_$$k, {
      multiple: 4
    }), jsx("div", {
      className: ew,
      children: jsx("div", {
        className: ek,
        children: jsx(_$$N, {
          onClick: () => {
            e.auth.existingSession ? customHistory.redirect("/") : t(changeAuthFormState({
              formState: AuthFlowStep.EMAIL_ONLY
            }));
          },
          trusted: !0,
          href: "#",
          children: d
        })
      })
    })]
  });
}
let e1 = "validate_code--description--w-PBc";
function e2(e) {
  let t = useDispatch();
  let [i, s] = useState("");
  return jsxs(v, {
    onSubmit: () => {
      trackAuthEvent("validate_code_attempt", e.auth.origin);
      t(AUTH_SET_AUTH_LOADING());
      i ? _$$k2.validateCode(i).then(e => {
        customHistory.redirect(e.data.meta.redirect);
      }).catch(e => {
        let i = e.data;
        let n = resolveMessage(e, i?.message || getI18nString("auth.default-error"));
        "invalid_session" === i.reason ? customHistory.redirect("/") : t(AUTH_SHOW_ERROR({
          message: n,
          invalidInput: AuthField.VERIFICATION_CODE
        }));
      }) : t(AUTH_SHOW_ERROR({
        message: getI18nString("auth.validate-code.enter-code-message"),
        invalidInput: AuthField.VERIFICATION_CODE
      }));
    },
    hideError: e.auth.invalidInput === AuthField.VERIFICATION_CODE,
    ...e,
    children: [jsx("div", {
      className: y()("validate_code--header--6nZt- auth_form--header--5WRrG auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw", "validate_code--figmaSansHeader--e8MKV auth_brand--figmaSans--aXdNw"),
      children: getI18nString("auth.validate-code.header")
    }), jsx("div", {
      className: e1,
      children: getI18nString("auth.validate-code.primary-description", {
        email: e.auth.email
      })
    }), jsx("div", {
      className: e1,
      children: getI18nString("auth.validate-code.secondary-description")
    }), jsx(_$$k, {
      multiple: 3
    }), jsx(gK, {
      autoComplete: "off",
      autoCorrect: "off",
      "data-1p-ignore": !0,
      isInvalid: e.auth.invalidInput === AuthField.VERIFICATION_CODE,
      maxLength: 6,
      name: AuthField.VERIFICATION_CODE,
      onChange: e => {
        s(e.target.value);
      },
      placeholder: getI18nString("auth.two-factor.authentication-code"),
      showUpdatedInputDesign: !0,
      value: i
    }), e.auth.invalidInput === AuthField.VERIFICATION_CODE && e.auth.error && jsx("div", {
      className: "validate_code--error--gBEWv auth_form--error--EtrjX auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw",
      children: e.auth.error
    }), jsx(_$$k, {
      multiple: 2
    }), jsx(k, {
      loading: e.auth.loading,
      disabled: 6 !== i.length,
      children: getI18nString("auth.validate-code.submit-button")
    }), jsx(_$$k, {
      multiple: 2
    }), jsx("div", {
      className: "validate_code--footerRow--CJ4m0",
      children: renderI18nText("auth.validate-code.resend-helper-text", {
        cta: jsx(LinkPrimitive, {
          href: "#",
          className: "validate_code--link--aOlPI modal--blueLink--9GcJu blue_link--blueLink--9rlnd",
          onClick: () => {
            trackAuthEvent("resend_code", e.auth.origin);
            _$$k2.resendCode().then(() => {
              t(FlashActions.flash(getI18nString("auth.validate-code.code-resent-check-email")));
            }).catch(e => {
              let i = e.data;
              let n = resolveMessage(e, i?.message || getI18nString("auth.validate-code.code-resend-error"));
              "invalid_session" === i.reason && customHistory.redirect("/");
              t(FlashActions.error(n));
            });
          },
          children: getI18nString("auth.validate-code.resend-button")
        })
      })
    })]
  });
}
let e5 = "validate_email--figmaSans--M7519 auth_brand--figmaSans--aXdNw";
let e4 = "validate_email--header--USmEZ auth_form--header--5WRrG auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw";
let e3 = "validate_email--secondaryDescription--Rm2K2";
let e6 = "validate_email--emailAddress--ikknC";
let e7 = "validate_email--validateEmailTextWithInnerLink--lU6fE auth_brand--text--yNin9 auth_brand--innerLink---m7Kv";
function e9() {
  return jsxs("svg", {
    width: "184",
    height: "143",
    viewBox: "0 0 184 143",
    fill: "none",
    children: [jsx("rect", {
      x: "37.4302",
      y: "37.5863",
      width: "109.106",
      height: "68.1912",
      fill: "#0FA958",
      stroke: "black",
      strokeWidth: "1.33504",
      strokeLinejoin: "round"
    }), jsx("path", {
      d: "M37.4302 37.5863H146.536L92.3799 72.0716L37.4302 37.5863Z",
      fill: "#5551FF",
      stroke: "black",
      strokeWidth: "1.33504",
      strokeLinejoin: "round"
    }), jsx("path", {
      d: "M89.7656 57.9216C90.438 56.5699 92.3638 56.5623 93.0472 57.9088L94.9671 61.6915C95.4372 62.6177 96.331 63.2551 97.3597 63.3978L101.546 63.9785C103.063 64.189 103.671 66.0552 102.569 67.1188L99.6111 69.973C98.8503 70.7071 98.5055 71.7722 98.6916 72.813L99.4168 76.8689C99.6841 78.3635 98.1252 79.5181 96.7733 78.8268L92.9382 76.8656C92.0235 76.3979 90.939 76.4021 90.0282 76.877L86.2091 78.8681C84.8629 79.5699 83.2947 78.4276 83.5498 76.9309L84.2421 72.8694C84.4198 71.8272 84.0664 70.7649 83.2997 70.0367L80.319 67.2058C79.2082 66.1508 79.8011 64.2799 81.3167 64.0575L85.4977 63.4441C86.5253 63.2934 87.4138 62.649 87.8764 61.7192L89.7656 57.9216Z",
      fill: "#FFC700",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M174.368 77.9369L118.522 133.783",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("circle", {
      cx: "146.577",
      cy: "105.624",
      r: "5.00639",
      transform: "rotate(-180 146.577 105.624)",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M110.24 142.06L110.24 132.048L120.253 132.048L120.253 142.06L110.24 142.06Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M172.823 79.4774L172.823 69.4646L182.836 69.4646L182.836 79.4774L172.823 79.4774Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M65.2287 9.84994L9.38235 65.6964",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("circle", {
      cx: "37.437",
      cy: "37.5366",
      r: "5.00639",
      transform: "rotate(-180 37.437 37.5366)",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M1.10059 73.9734L1.10059 63.9606L11.1134 63.9606L11.1134 73.9734L1.10059 73.9734Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsx("path", {
      d: "M63.6836 11.3905L63.6836 1.37767L73.6964 1.37767L73.6964 11.3905L63.6836 11.3905Z",
      fill: "white",
      stroke: "black",
      strokeWidth: "1.33504"
    }), jsxs("mask", {
      id: "path-12-outside-1_1311_15626",
      maskUnits: "userSpaceOnUse",
      x: "10.8818",
      y: "11.201",
      width: "26.6182",
      height: "30.0063",
      fill: "black",
      children: [jsx("rect", {
        fill: "white",
        x: "10.8818",
        y: "11.201",
        width: "26.6182",
        height: "30.0063"
      }), jsx("path", {
        d: "M28.4431 15.9668L35.0923 35.2407L16.983 27.7358L24.9933 24.2461L28.4431 15.9668Z"
      })]
    }), jsx("path", {
      d: "M28.4431 15.9668L35.0923 35.2407L16.983 27.7358L24.9933 24.2461L28.4431 15.9668Z",
      fill: "#0FA958"
    }), jsx("path", {
      d: "M35.0923 35.2407L34.5812 36.474L37.3218 37.6098L36.3543 34.8053L35.0923 35.2407ZM28.4431 15.9668L29.7052 15.5314L28.5606 12.2138L27.2108 15.4533L28.4431 15.9668ZM24.9933 24.2461L25.5265 25.4701L26.019 25.2555L26.2256 24.7596L24.9933 24.2461ZM16.983 27.7358L16.4498 26.5119L13.5699 27.7665L16.4719 28.9691L16.983 27.7358ZM36.3543 34.8053L29.7052 15.5314L27.1811 16.4022L33.8302 35.6761L36.3543 34.8053ZM27.2108 15.4533L23.761 23.7326L26.2256 24.7596L29.6755 16.4803L27.2108 15.4533ZM24.4601 23.0222L16.4498 26.5119L17.5162 28.9597L25.5265 25.4701L24.4601 23.0222ZM16.4719 28.9691L34.5812 36.474L35.6034 34.0074L17.4941 26.5025L16.4719 28.9691Z",
      fill: "black",
      mask: "url(#path-12-outside-1_1311_15626)"
    }), jsxs("mask", {
      id: "path-14-outside-2_1311_15626",
      maskUnits: "userSpaceOnUse",
      x: "145.808",
      y: "105.082",
      width: "23.6572",
      height: "27.5576",
      fill: "black",
      children: [jsx("rect", {
        fill: "white",
        x: "145.808",
        y: "105.082",
        width: "23.6572",
        height: "27.5576"
      }), jsx("path", {
        d: "M151.734 128.244L148.397 108.13L164.999 118.555L156.518 120.657L151.734 128.244Z"
      })]
    }), jsx("path", {
      d: "M151.734 128.244L148.397 108.13L164.999 118.555L156.518 120.657L151.734 128.244Z",
      fill: "#5551FF"
    }), jsx("path", {
      d: "M148.397 108.13L149.107 107L146.595 105.422L147.08 108.349L148.397 108.13ZM151.734 128.244L150.417 128.463L150.991 131.925L152.863 128.956L151.734 128.244ZM156.518 120.657L156.197 119.362L155.675 119.491L155.389 119.945L156.518 120.657ZM164.999 118.555L165.32 119.851L168.369 119.095L165.709 117.424L164.999 118.555ZM147.08 108.349L150.417 128.463L153.051 128.026L149.715 107.912L147.08 108.349ZM152.863 128.956L157.647 121.37L155.389 119.945L150.605 127.532L152.863 128.956ZM156.839 121.953L165.32 119.851L164.678 117.259L156.197 119.362L156.839 121.953ZM165.709 117.424L149.107 107L147.688 109.261L164.289 119.685L165.709 117.424Z",
      fill: "black",
      mask: "url(#path-14-outside-2_1311_15626)"
    })]
  });
}
function te() {
  let e = useDispatch();
  let t = useSelector(e => e.auth.email);
  let i = useSelector(e => e.auth.formState);
  let s = useSelector(e => e.auth.redirectUrl || "/");
  let o = useSelector(e => e.user?.email === t);
  let d = i === AuthFlowStep.CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD;
  let c = _$$s.alignCenter.font16.lh24.$;
  let [p, h] = useState("");
  let [g, f] = useState(!1);
  let _ = jsx(LinkPrimitive, {
    className: "validate_email--link--w8oJH modal--blueLink--9GcJu blue_link--blueLink--9rlnd",
    href: "#",
    onClick: () => {
      e(changeAuthFormState({
        formState: AuthFlowStep.SIGN_IN
      }));
    },
    children: renderI18nText("auth.magic_link_check_email.go_back")
  });
  useEffect(() => {
    o && customHistory.redirect(s);
  }, [o, s]);
  let A = jsx("strong", {
    className: e6,
    children: t
  });
  let b = e => 7 === e.length && /^\d+$/.test(e);
  let v = async i => {
    if (i.preventDefault(), !b(p)) {
      e(FlashActions.error(getI18nString("auth.error.wrong_code")));
      return;
    }
    f(!0);
    try {
      await XHR.post("/api/session/redeem_magic_code", {
        email: t,
        code: p
      });
    } catch (t) {
      if (t?.data?.i18n?.id) {
        let i = getI18nStringAlias(t.data.i18n.id, t.data.i18n.params || {});
        e(FlashActions.error(i));
      } else e(FlashActions.error(getI18nString("auth.default-error")));
      f(!1);
      return;
    }
    customHistory.redirect(s || "/");
  };
  return jsxs("div", {
    className: y()(_$$s.flex.flexColumn.px36.pt8.pb12.$, e5),
    style: {
      maxWidth: "400px",
      minHeight: "120px"
    },
    children: [jsx("div", {
      className: _$$s.mxAuto.mb12.$,
      children: jsx(e9, {})
    }), jsx("h1", {
      className: y()(e4, e5),
      children: renderI18nText("auth.magic_link_check_email.check_your_inbox")
    }), jsx("p", {
      className: c,
      children: d ? renderI18nText("auth.magic_link_check_email.body_login_v2", {
        emailAddress: A
      }) : renderI18nText("auth.magic_link_check_email.body_signup_v2", {
        emailAddress: A
      })
    }), d ? jsxs("p", {
      className: c,
      children: [jsx(_$$k, {
        multiple: 2
      }), renderI18nText("auth.magic_link_check_email.body_login_with_code")]
    }) : null, d ? jsxs("form", {
      onSubmit: v,
      children: [jsx(_$$k, {
        multiple: 2
      }), jsx(gK, {
        onChange: e => {
          h(e.target.value);
        },
        value: p,
        name: AuthField.TOTP_KEY,
        inputMode: "numeric",
        autoComplete: "one-time-code",
        placeholder: getI18nString("auth.two-factor.authentication-code"),
        isInvalid: !b(p),
        showUpdatedInputDesign: !0
      }), jsx(_$$k, {
        multiple: 2
      }), jsx(k, {
        type: "submit",
        loading: g,
        disabled: !b(p),
        children: getI18nString("auth.two-factor.log-in")
      })]
    }) : null, jsx(LinkPrimitive, {
      className: _$$s.block.mt24.$,
      href: "https://mail.google.com/mail/u/0/",
      newTab: !0,
      children: jsx(N, {
        trackingProperties: {
          trackingDescriptor: _$$c.OPEN_GMAIL
        },
        svg: _$$A2,
        text: getI18nString("auth.magic_link_check_email.open_gmail")
      })
    }), !t.endsWith("@gmail.com") && jsx(LinkPrimitive, {
      className: _$$s.block.mt16.$,
      href: "https://outlook.live.com/mail/0/inbox",
      newTab: !0,
      children: jsx(N, {
        trackingProperties: {
          trackingDescriptor: _$$c.OPEN_OUTLOOK
        },
        svg: _$$A5,
        text: getI18nString("auth.magic_link_check_email.open_outlook")
      })
    }), jsx("p", {
      className: y()(c, _$$s.mt16.$),
      children: renderI18nText("auth.magic_link_check_email.wrong_address_go_back", {
        goBackLink: _
      })
    })]
  });
}
function tr() {
  return jsxs("svg", {
    width: "327",
    height: "171",
    viewBox: "0 0 327 171",
    fill: "none",
    className: "validate_email--emailSvgIllustration--e5eCg",
    children: [jsx("path", {
      d: "M150.307 98.3306C150.307 56.8246 116.66 23.1774 75.1535 23.1774C33.6474 23.1774 3.62858e-06 56.8246 0 98.3306L0.000178201 170.564H69.3726L69.3726 101.191L80.9345 101.191V124.315C80.9345 149.857 101.641 170.563 127.183 170.563L327 170.563V101.191L150.307 101.191V98.3306Z",
      fill: "#95B9AC"
    }), jsx("rect", {
      width: "114",
      height: "114",
      transform: "translate(112.863 20.1541)",
      fill: "#0A5C35"
    }), jsx("rect", {
      x: "113",
      y: "20",
      width: "114",
      height: "114",
      rx: "55",
      fill: "#FF7237"
    }), jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M142.54 77.3348L142.54 82.7634L196.825 82.7634V77.3348L142.54 77.3348ZM142.54 82.7634C142.54 97.737 154.709 109.906 169.682 109.906C184.656 109.906 196.825 97.737 196.825 82.7634L142.54 82.7634Z",
      fill: "#FFC9C1"
    }), jsx("rect", {
      x: "142.54",
      y: "55.6204",
      width: "10.8571",
      height: "10.8571",
      fill: "#FFC9C1"
    }), jsx("rect", {
      x: "185.968",
      y: "55.6204",
      width: "10.8571",
      height: "10.8571",
      fill: "#FFC9C1"
    }), jsx("rect", {
      x: "93",
      y: "134",
      width: "20.1541",
      height: "20.154",
      fill: "#874FFF"
    }), jsx("rect", {
      x: "227",
      y: "134",
      width: "20.1541",
      height: "20.154",
      fill: "#874FFF"
    }), jsx("rect", {
      x: "93",
      width: "20",
      height: "19.9999",
      fill: "#874FFF"
    }), jsx("rect", {
      x: "227",
      width: "20",
      height: "19.9999",
      fill: "#874FFF"
    })]
  });
}
function ta({
  checkInIframe: e
}) {
  return jsx(_$$N, {
    href: e() ? "/logout?cont=/login_iframe" : "/logout",
    trusted: !0,
    children: getI18nString("auth.validate-email.log-out-link")
  });
}
function ts() {
  let e = useDispatch();
  let t = useSelector(e => e.auth.email);
  let i = useSelector(e => e.auth.redirectUrl);
  let s = useSelector(e => e.auth.origin);
  let o = _$$s.alignCenter.font16.lh24.$;
  let d = jsx("strong", {
    className: e6,
    children: t
  });
  let p = useCallback(() => {
    trackAuthEvent("send_validation_email_attempt", s);
    _$$H.sendValidationEmail().then(t => {
      trackAuthEvent("send_validation_email_success", s);
      let i = resolveMessage(t);
      if (i) return e(FlashActions.flash(i));
    }).catch(t => {
      let i = resolveMessage(t, getI18nString("auth.sign-up.confirmation-email-error"));
      return e(FlashActions.error(i));
    });
    e(AUTH_SET_AUTH_LOADING());
  }, [e, s]);
  useEffect(() => {
    let e = null;
    let t = () => {
      _$$k4.getUnverified().then(n => {
        if (n?.data?.meta?.email_validated_at) {
          let e = NQ(i, "fuid", n?.data?.meta?.id);
          setTimeout(() => {
            customHistory.redirect(e);
          }, 2e3);
        } else e = setTimeout(t, 7e3 + 3e3 * Math.random());
      });
    };
    t();
    let n = () => {
      "hidden" === document.visibilityState && e && (clearTimeout(e), e = null);
      "visible" === document.visibilityState && null === e && t();
    };
    document.addEventListener("visibilitychange", n);
    return () => {
      e && (clearTimeout(e), e = null);
      document.removeEventListener("visibilitychange", n);
    };
  }, [i]);
  return jsxs("div", {
    className: y()(_$$s.flex.flexColumn.$$if(isAndroidOrIphoneNotFigmaMobile, _$$s.p28, _$$s.p36).$, e5),
    style: {
      maxWidth: "400px",
      minHeight: "120px"
    },
    children: [jsx("div", {
      className: _$$s.mxAuto.mb12.$,
      children: jsx(tr, {})
    }), jsx("h1", {
      className: y()({
        "validate_email--mobileHeader--WExIW auth_form--header--5WRrG auth_form--headerBase--jhLAT auth_form--figmaSans--XXAeN auth_brand--figmaSans--aXdNw": isAndroidOrIphoneNotFigmaMobile,
        [e4]: !isAndroidOrIphoneNotFigmaMobile
      }),
      children: renderI18nText("auth.magic_link_check_email.check_your_inbox")
    }), jsx("p", {
      className: y()(o, "validate_email--clickTheLink--UXJtg"),
      children: renderI18nText("auth.validate-email.click_the_link", {
        emailAddress: d
      })
    }), isAndroidOrIphoneNotFigmaMobile && jsx("p", {
      className: y()(o, _$$s.mt16.$, "validate_email--mobileValidateEmailTextWithInnerLink--H4HMt validate_email--validateEmailTextWithInnerLink--lU6fE auth_brand--text--yNin9 auth_brand--innerLink---m7Kv"),
      children: renderI18nText("auth.validate-email.log-out-only", {
        logOutLink: jsx(ta, {
          checkInIframe: () => window.self !== window.top
        })
      })
    }), jsx(LinkPrimitive, {
      className: _$$s.block.mt32.$,
      href: "https://mail.google.com/mail/u/0/",
      newTab: !0,
      children: jsx(N, {
        trackingProperties: {
          trackingDescriptor: _$$c.OPEN_GMAIL
        },
        svg: _$$A2,
        text: getI18nString("auth.magic_link_check_email.open_gmail")
      })
    }), !t.endsWith("@gmail.com") && jsx(LinkPrimitive, {
      className: _$$s.block.mt16.$,
      href: "https://outlook.live.com/mail/0/inbox",
      newTab: !0,
      children: jsx(N, {
        trackingProperties: {
          trackingDescriptor: _$$c.OPEN_OUTLOOK
        },
        svg: _$$A5,
        text: getI18nString("auth.magic_link_check_email.open_outlook")
      })
    }), isAndroidOrIphoneNotFigmaMobile ? jsx("button", {
      className: y()(o, e3, _$$s.mt24.$, "validate_email--resendEmailText--iRAOS"),
      onClick: p,
      children: renderI18nText("auth.validate-email.resend-email-text")
    }) : jsxs(Fragment, {
      children: [jsx("p", {
        className: y()(o, e3, _$$s.mt16.$, e7),
        children: renderI18nText("auth.validate-email.resend-email", {
          resendEmailLink: jsx(_$$N, {
            onClick: p,
            trusted: !0,
            href: "#",
            children: getI18nString("auth.validate-email.resend-email-link")
          })
        })
      }), jsx("p", {
        className: y()(o, e3, _$$s.mt16.$, e7),
        children: renderI18nText("auth.validate-email.log-out-only", {
          logOutLink: jsx(ta, {
            checkInIframe: () => window.self !== window.top
          })
        })
      })]
    })]
  });
}
export function $$to0(e) {
  let t = useDispatch();
  useEffect(() => () => {
    t(AUTH_CLEAR_ERROR());
    t(changeAuthFormState({
      formState: AuthFlowStep.SIGN_UP
    }));
  }, [t]);
  return jsx("div", {
    "data-component-name": "auth-view",
    style: {
      display: "contents"
    },
    children: jsx(TrackingProvider, {
      name: "AuthView",
      properties: {
        formState: e.auth.formState
      },
      children: (() => {
        if (!navigator.cookieEnabled) return jsx(eD, {});
        switch (e.auth.formState) {
          case AuthFlowStep.SIGN_IN:
          case AuthFlowStep.SIGN_UP:
          case AuthFlowStep.RESET_PASSWORD:
          case AuthFlowStep.VALIDATE_CODE:
          case AuthFlowStep.SAML_START:
          case AuthFlowStep.EMAIL_ONLY:
          case AuthFlowStep.JOIN_ORG:
          case AuthFlowStep.ACCOUNT_PICKER:
          case AuthFlowStep.VERIFY_HUMAN:
          case AuthFlowStep.GOOGLE_SSO_SIGNUP_ACTION_REDIRECT:
          case AuthFlowStep.TWO_FACTOR:
            return jsx(tl, {
              ...e
            });
          case AuthFlowStep.FORGOT_PASSWORD:
            return jsx(et, {
              ...e
            });
          case AuthFlowStep.SENT_PASSWORD_RESET:
            return jsx(ei, {
              ...e
            });
          case AuthFlowStep.VALIDATE_EMAIL:
            return jsx(ts, {});
          case AuthFlowStep.APP_AUTH_GRANT:
            return jsx(eb, {
              ...e
            });
          case AuthFlowStep.APP_AUTH_REDEEM:
            return jsx(ev, {
              ...e
            });
          case AuthFlowStep.SSO_GATE:
            return jsx(eJ, {
              ...e
            });
          case AuthFlowStep.CHECK_EMAIL_MAGIC_LINK_SIGN_IN_AFTER_PASSWORD:
            return jsx(te, {});
        }
        return null;
      })()
    })
  });
}
function tl(e) {
  let t = useDispatch();
  let i = Xr(nb);
  _$$h(() => {
    e.auth.formState !== AuthFlowStep.GOOGLE_SSO_SIGNUP_ACTION_REDIRECT && e.auth.formState !== AuthFlowStep.VERIFY_HUMAN && (t(AUTH_SET_GOOGLE_ID_TOKEN({
      googleIdToken: null
    })), i(null));
  });
  let r = () => {
    let n = e.auth.origin?.startsWith("google_one_tap");
    let r = e.id;
    let a = document.getElementById(r).elements;
    a.password && !n && (i(a.password.value), t(AUTH_SET_GOOGLE_ID_TOKEN({
      googleIdToken: null
    })));
    let s = e.auth.formState;
    switch ("gov" !== window.INITIAL_OPTIONS.cluster_name || s === AuthFlowStep.VALIDATE_CODE || window.origin.startsWith("https://admin.") || (s = AuthFlowStep.SAML_START), s) {
      case AuthFlowStep.SIGN_IN:
        t(AUTH_SIGN_IN({
          formId: r
        }));
        break;
      case AuthFlowStep.RESET_PASSWORD:
        t(AUTH_RESET_PASSWORD({
          formId: r
        }));
        break;
      case AuthFlowStep.SAML_START:
        t(AUTH_SEND_EMAIL_SAML_START({
          formId: r
        }));
        break;
      case AuthFlowStep.SIGN_UP:
        t(changeAuthFormState({
          formState: AuthFlowStep.VERIFY_HUMAN,
          prevState: AuthFlowStep.SIGN_UP,
          arkoseAction: AuthAction.SIGN_UP,
          postVerificationAction: AUTH_SIGN_UP({
            formId: r
          })
        }));
        break;
      case AuthFlowStep.EMAIL_ONLY:
        t(AUTH_EMAIL_ONLY({
          formId: r
        }));
    }
  };
  if (e.auth.formState === AuthFlowStep.ACCOUNT_PICKER && e.auth.accountPicker) return jsx(ex, {
    authOrigin: e.auth.origin
  });
  if (desktopAPIInstance) return jsx(ey, {
    appType: ClientPlatform.DESKTOP,
    ...e
  });
  if ("gov" === window.INITIAL_OPTIONS.cluster_name && e.auth.formState !== AuthFlowStep.VALIDATE_CODE && !window.origin.startsWith("https://admin.")) return jsx(ej, {
    onFormSubmit: r,
    ...e
  });
  if (e.auth.formState === AuthFlowStep.SIGN_IN) return jsx(TrackingProvider, {
    name: "Sign In",
    children: jsx(eH, {
      onFormSubmit: r,
      ...e
    })
  });
  if (e.auth.formState === AuthFlowStep.SIGN_UP) {
    let t = "true" === new URLSearchParams(customHistory.location.search).get("with_community_header");
    return jsx(TrackingProvider, {
      name: "Sign Up",
      children: jsx(eQ, {
        onFormSubmit: r,
        header: t ? getI18nString("community.auth_modal.header") : e.header,
        ...e
      })
    });
  }
  if (e.auth.formState === AuthFlowStep.GOOGLE_SSO_SIGNUP_ACTION_REDIRECT) return jsx(TrackingProvider, {
    name: "Google SSO Redirect",
    children: jsx(eM, {
      formId: e.id
    })
  });
  if (e.auth.formState === AuthFlowStep.RESET_PASSWORD) return jsx(en, {
    onFormSubmit: r,
    ...e
  });else if (e.auth.formState === AuthFlowStep.VALIDATE_CODE) return jsx(e2, {
    onFormSubmit: r,
    ...e
  });else if (e.auth.formState === AuthFlowStep.SAML_START) return jsx(ej, {
    onFormSubmit: r,
    ...e
  });else if (e.auth.formState === AuthFlowStep.EMAIL_ONLY) return jsx(eP, {
    onFormSubmit: r,
    ...e
  });else if (e.auth.formState === AuthFlowStep.JOIN_ORG) return jsx(Q, {
    onFormSubmit: r,
    ...e
  });else if (e.auth.formState === AuthFlowStep.VERIFY_HUMAN) return jsx(j, {
    ...e
  });else if (e.auth.formState === AuthFlowStep.TWO_FACTOR) return jsx(H, {
    onFormSubmit: r,
    ...e
  });
  return null;
}
export const Ob = $$to0;