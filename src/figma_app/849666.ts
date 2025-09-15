import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UIVisibilitySetting } from "../figma_app/763686";
import { ty, Rm, Y2, DT } from "../figma_app/320164";
import { BrowserInfo } from "../figma_app/778880";
import { B as _$$B, N as _$$N } from "../figma_app/659940";
import { useCurrentFileWorkshopModeStatus } from "../figma_app/789";
import { v as _$$v } from "../figma_app/354567";
import { F as _$$F } from "../figma_app/564183";
import { getRepoByIdAlt, isBranchAlt } from "../905/760074";
import { ck } from "../905/87821";
import { Kx } from "../figma_app/546509";
import { selectOpenFile, useCurrentFileKey, selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { Button } from "../905/521428";
import { J as _$$J } from "../905/614223";
import { l as _$$l } from "../905/728491";
import { useSubscription } from "../figma_app/288654";
import { SvgComponent } from "../905/714743";
import { renderI18nText, getI18nString } from "../905/303541";
import { sf } from "../905/929976";
import { Rh } from "../905/844322";
import { BranchOpenMergeRequest, FileCanView, FileCanManage } from "../figma_app/43951";
import { M4 } from "../905/713695";
import { getPermissionsState } from "../figma_app/642025";
import { FEditorType } from "../figma_app/53721";
import { R as _$$R } from "../905/309400";
import { AM, pT } from "../905/467351";
import { kL, qr, PU, hz, Qw, Lo, wV } from "../905/478905";
import { A as _$$A } from "../3850/566892";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { P as _$$P } from "../figma_app/650304";
import { lQ } from "../905/934246";
import { c as _$$c } from "../figma_app/769913";
import { getFeatureFlags } from "../905/601108";
import { dR, jM } from "../905/508367";
import { customHistory } from "../905/612521";
import { AUTH_COMPLETE } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { trackAuthEvent } from "../905/248178";
import { lR, $z } from "../figma_app/617427";
import { f as _$$f } from "../figma_app/908415";
import { hideModalHandler, hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { E3 } from "../figma_app/976749";
import { H as _$$H } from "../figma_app/423008";
import { _6 } from "../figma_app/386952";
import { C as _$$C } from "../figma_app/198698";
import { om, x1, MA } from "../figma_app/465413";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import ei from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { xf } from "../figma_app/416935";
import { r as _$$r } from "../905/520829";
import { k as _$$k2 } from "../905/585996";
import { BigTextInput } from "../figma_app/637027";
import { x as _$$x } from "../905/211326";
import { s as _$$s } from "../cssbuilder/589278";
import { FlashActions } from "../905/573154";
import { registerModal } from "../905/102752";
import { A as _$$A2, Uw, bO, JD } from "../905/219868";
import { V as _$$V } from "../905/670859";
import { FS, DX, Kc, _2, cC, mV, NJ, ZQ, Fx } from "../905/989426";
import { buildUploadUrl, isGovCluster } from "../figma_app/169182";
import { ao } from "../figma_app/598952";
import { ButtonPrimitive } from "../905/632989";
import { I4, Y9 } from "../figma_app/42724";
import { yp, c6, J$, jw, GD, Yg, _C, G_, FS as _$$FS, _o, vk, cI } from "../figma_app/624600";
import { N as _$$N2 } from "../905/438674";
import { yl } from "../figma_app/639088";
import { A as _$$A3 } from "../5724/721563";
import { A as _$$A4 } from "../svg/359514";
import { A as _$$A5 } from "../svg/93962";
function D(e) {
  let {
    buttonText,
    buttonOnClick,
    message
  } = e;
  let a = jsx(_$$J, {
    mode: "dark",
    children: jsx(Button, {
      variant: "secondary",
      onClick: buttonOnClick,
      children: e.buttonText
    })
  });
  return jsx(_$$R, {
    className: kL,
    children: jsxs("div", {
      className: qr,
      children: [jsxs("div", {
        className: PU,
        children: [jsx(SvgComponent, {
          svg: _$$A,
          className: hz
        }), jsxs("span", {
          className: Qw,
          children: [renderI18nText("collaboration.branching_archived_footer.locked"), "\xa0\xa0\xa0"]
        }), jsx("span", {
          className: Lo,
          children: message
        })]
      }), jsx("div", {
        className: wV,
        children: buttonText && buttonOnClick && a
      })]
    })
  });
}
function k() {
  let e = useDispatch();
  let t = useSelector(selectOpenFile);
  let r = M4.useFile(t?.key || "").data;
  let i = useSelector(e => getPermissionsState(e));
  let s = useSubscription(BranchOpenMergeRequest, {
    branchFileKey: t && t?.key || ""
  }, {
    enabled: !!(t && t?.key)
  });
  let o = getRepoByIdAlt(t ?? {
    fileRepoId: null
  }, i.repos);
  let l = _$$l(FileCanView, o?.default_file_key ?? "").unwrapOr(!1);
  let d = _$$l(FileCanManage, t?.key ?? "").unwrapOr(!1);
  if (!t || !r || !o) return null;
  let c = o.default_file_key;
  let u = "loaded" === s.status && (null === s.data.file || s.data.file && AM(s.data.file) === pT.MERGED);
  let p = "loaded" !== s.status || u;
  let h = c && l;
  return p ? jsx(D, {
    message: renderI18nText("collaboration.branching_archived_footer.merged")
  }) : d ? jsx(D, {
    message: renderI18nText("collaboration.branching_archived_footer.restore_branch"),
    buttonText: renderI18nText("collaboration.branching_archived_footer.restore_branch_button"),
    buttonOnClick: () => {
      e(Rh({
        fileKeys: {
          [r.key]: r
        },
        userInitiated: !0
      }));
    }
  }) : jsx(D, {
    message: renderI18nText("collaboration.branching_archived_footer.can_restore_branch"),
    buttonText: h ? renderI18nText("collaboration.branching_archived_footer.back_to_main_file") : void 0,
    buttonOnClick: h ? () => {
      e(sf({
        view: "fullscreen",
        fileKey: c,
        editorType: FEditorType.Design
      }));
    } : void 0
  });
}
k.displayName = "ArchivedBranchFooter";
var ea = ei;
let eE = registerModal(function (e) {
  let t = useDispatch();
  let [r, s] = useState("");
  let [o, d] = useState(!1);
  let c = useCurrentFileKey();
  let u = useSelector(e => c ? e.loadingState[_$$f.loadingKeyForPayload({
    fileKey: c,
    emailAddress: r
  })] === _$$r.LOADING : null);
  let p = useModalManager({
    ...e,
    onClose: () => {
      trackEventAnalytics("google_meet_claim_email_modal_closed", {
        fileKey: c
      });
      t(hideModalHandler());
    }
  });
  return jsx(TrackingProvider, {
    name: "google_device_try_file_claim_modal",
    children: jsx(ModalRootComponent, {
      manager: p,
      width: 420,
      children: jsx(vo, {
        children: jsxs(nB, {
          padding: 32,
          children: [jsx("div", {
            className: FS,
            children: jsx("h1", {
              className: DX,
              children: renderI18nText("google_device_try_file_modal.enter_email")
            })
          }), jsx(_$$k2, {
            multiple: 1
          }), jsx("div", {
            className: FS,
            children: jsx("div", {
              className: Kc,
              children: renderI18nText("google_device_try_file_modal.enter_email.description")
            })
          }), jsx(_$$k2, {
            multiple: 3
          }), jsx(BigTextInput, {
            autoFocus: !0,
            type: "email",
            className: ea()(_2, o && cC),
            placeholder: getI18nString("google_device_try_file_modal.enter_email.placeholder_email"),
            onChange: e => {
              s(e.target.value);
            },
            value: r
          }), o && jsx("div", {
            className: mV,
            children: renderI18nText("google_device_try_file_modal.enter_email.error_message")
          }), jsx(_$$k2, {
            multiple: 2
          }), jsx(lR, {
            type: "submit",
            onClick: n => {
              if (n.preventDefault(), n.stopPropagation(), null == r || !1 === xf(r) || !c) {
                d(!0);
                return;
              }
              if (!c) {
                t(FlashActions.error(getI18nString("google_device_try_file_modal.error_saving_board")));
                return;
              }
              e.onSubmitEmail({
                fileKey: c,
                emailAddress: r
              });
            },
            children: jsx(_$$x, {
              isLoading: !!u,
              className: _$$s.flex.justifyCenter.$,
              children: () => renderI18nText("google_device_try_file_modal.enter_email.button")
            })
          }), jsx(_$$k2, {
            multiple: 3
          }), jsx("div", {
            className: NJ,
            children: renderI18nText("google_device_try_file_modal.disclaimer", {
              tos: jsx(_$$V, {
                url: BrowserInfo.isMeetDevice ? _$$A2 : Uw,
                title: getI18nString("google_device_try_file_modal.onboarding_disclaimer_tos")
              }),
              privacy_policy: jsx(_$$V, {
                url: BrowserInfo.isMeetDevice ? bO : JD,
                title: getI18nString("google_device_try_file_modal.onboarding_disclaimer_privacy_policy")
              })
            })
          }), jsx(_$$k2, {
            multiple: 1
          })]
        })
      })
    })
  });
}, "GOOGLE_DEVICE_TRY_FILE_CLAIM_MODAL");
let eb = registerModal(function (e) {
  let {
    email,
    onChangeEmail
  } = e;
  let i = useDispatch();
  let s = useCurrentFileKey();
  let o = useModalManager({
    ...e,
    preventUserClose: !0
  });
  return jsx(TrackingProvider, {
    name: "google_device_try_file_received_email_modal",
    children: jsx(ModalRootComponent, {
      manager: o,
      width: 420,
      children: jsx(vo, {
        children: jsxs(nB, {
          padding: 32,
          children: [jsx("img", {
            src: buildUploadUrl("b0feff5e4abc5e66f99064463f2ad5d0a7f6c072.png"),
            alt: "",
            className: ZQ
          }), jsx(_$$k2, {
            multiple: 2
          }), jsx("div", {
            className: FS,
            children: jsx("h1", {
              className: DX,
              children: renderI18nText("google_device_try_file_modal.got_mail")
            })
          }), jsx(_$$k2, {
            multiple: 1
          }), jsx("div", {
            className: FS,
            children: jsx("div", {
              className: Kc,
              children: renderI18nText("google_device_try_file_modal.got_mail.description", {
                email: jsx("p", {
                  className: Fx,
                  children: email
                })
              })
            })
          }), jsx(_$$k2, {
            multiple: 3
          }), jsx(lR, {
            onClick: e => {
              e.preventDefault();
              e.stopPropagation();
              i(hideModal());
            },
            children: renderI18nText("google_device_try_file_modal.got_mail.close")
          }), jsx(_$$k2, {
            multiple: 3
          }), jsx("div", {
            className: NJ,
            children: renderI18nText("google_device_try_file_modal.got_mail.email_not_received", {
              send_again_link: jsx($z, {
                variant: "link",
                onClick: r => {
                  if (r.preventDefault(), r.stopPropagation(), !s) {
                    i(FlashActions.error(getI18nString("google_device_try_file_modal.error_saving_board")));
                    return;
                  }
                  e.onResendEmail({
                    fileKey: s,
                    emailAddress: email,
                    isResentEmail: !0
                  });
                },
                children: renderI18nText("google_device_try_file_modal.got_mail.email_not_received.send_again")
              })
            })
          }), jsx(_$$k2, {
            multiple: 2
          }), jsx("div", {
            className: NJ,
            children: renderI18nText("google_device_try_file_modal.got_mail.wrong_address", {
              use_different_email_link: jsx($z, {
                variant: "link",
                onClick: e => {
                  e.preventDefault();
                  e.stopPropagation();
                  onChangeEmail();
                },
                children: renderI18nText("google_device_try_file_modal.got_mail.wrong_address.use_different_email")
              })
            })
          })]
        })
      })
    })
  });
}, "GOOGLE_DEVICE_TRY_FILE_RECEIVED_EMAIL_MODAL");
function eS({
  children: e,
  large: t,
  ...r
}) {
  return jsx(ButtonPrimitive, {
    className: ea()("brand_strong_button--button--dCE92", "brand_strong_button--secondary--M8N-5 brand_strong_button--outlineStyle--3lqJk", t ? "brand_strong_button--large--aPhUI" : "brand_strong_button--regular--hpSQD"),
    ...r,
    children: e
  });
}
function ex({
  isFigJamTry: e
}) {
  let t = useCurrentFileWorkshopModeStatus();
  let r = _6();
  let i = I4(e, t);
  let a = E3();
  let s = BrowserInfo.isMeetDevice;
  let o = getI18nString("footer_banner.welcome_to_figma");
  let d = "DUPLICATE" === r.landingState ? getI18nString("footer_banner.create_an_account_to_get_your_own_copy_of_this_file") : getI18nString("footer_banner.create_an_account_to_edit_and_collaborate_on_this_file");
  s ? (o = i, d = getI18nString("figjam_try.meet_hardware.board_deletion_disclaimer")) : e && (o = i, d = getI18nString("figjam_try_v2.after_that_this_board_will_be_deleted"));
  let u = e ? {
    icon: jsx(_$$c, {
      style: {
        "--color-icon": "var(--color-text-onbrand)"
      }
    }),
    iconSize: "medium"
  } : {};
  return jsx(TrackingProvider, {
    name: "Google Logged-out File Banner",
    properties: {
      isFigJamTry: e
    },
    children: jsx(_$$C, {
      content: {
        id: om.LoggedOutCta,
        bannerType: x1.BRAND_STRONG,
        mainText: o,
        description: d,
        hideIcon: !0,
        button: {
          type: MA.CUSTOM,
          element: s ? jsx(eN, {}) : jsx(eC, {
            isFigJamTry: e
          })
        },
        dismissible: !1,
        ...{
          ...u
        }
      },
      onDismiss: lQ,
      editorType: a
    })
  });
}
function eN() {
  let e = useDispatch();
  let t = t => {
    e(showModalHandler({
      type: eb,
      data: {
        email: t,
        onChangeEmail: r,
        onResendEmail: i
      }
    }));
  };
  let r = () => {
    e(showModalHandler({
      type: eE,
      data: {
        onSubmitEmail: ({
          fileKey: r,
          emailAddress: n
        }) => {
          e(_$$f({
            fileKey: r,
            emailAddress: n,
            onSuccess: t
          }));
        }
      }
    }));
  };
  let i = ({
    fileKey: t,
    emailAddress: r,
    isResentEmail: n
  }) => {
    e(_$$f({
      fileKey: t,
      emailAddress: r,
      isResentEmail: n
    }));
  };
  let s = getI18nString("figjam_try.save_board");
  return jsx($z, {
    htmlAttributes: {
      "data-test-id": "meet-btn"
    },
    onClick: () => {
      e(showModalHandler({
        type: eE,
        data: {
          onSubmitEmail: ({
            fileKey: r,
            emailAddress: n
          }) => {
            e(_$$f({
              fileKey: r,
              emailAddress: n,
              onSuccess: t
            }));
          }
        }
      }));
    },
    trackingProperties: {
      buttonContext: s
    },
    children: s
  });
}
function eC({
  isFigJamTry: e
}) {
  let t = t => e && t ? ty.FIGJAM_TRY_FOOTER_BANNER_CONTINUE_WITH_GOOGLE : e ? ty.FIGJAM_TRY_FOOTER_BANNER : t ? ty.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE : ty.LOGGED_OUT_FOOTER;
  let r = _$$B();
  let i = Y9();
  let s = e ? r : i;
  let l = useDispatch();
  let c = {
    [ao.key]: ao.value
  };
  let u = dR(customHistory.location.pathname, c);
  let p = e ? u : jM();
  return jsxs("div", {
    className: yp,
    children: [jsx(eS, {
      large: !0,
      htmlAttributes: {
        "data-test-id": "email-btn"
      },
      onClick: () => {
        s({
          origin: t(!1),
          formState: AuthFlowStep.SIGN_UP
        });
      },
      children: renderI18nText("footer_banner.sign_up_with_email")
    }), jsx(_$$H, {
      onClick: () => {
        let e = t(!0);
        Rm({
          dispatch: l,
          origin: e,
          redirectUrl: p
        }).then(e => {
          "login" === e.type && l(AUTH_COMPLETE({
            userId: e.user.id
          }));
        }, t => {
          trackAuthEvent("google_signup_error", e, {
            error: t.message
          });
          getFeatureFlags().ff_show_auth_modal_on_google_sso_error && Y2({
            dispatch: l,
            origin: e,
            redirectUrl: p,
            message: t.message
          });
        });
      },
      large: !0,
      brandTextColor: !0,
      children: renderI18nText("footer_banner.continue_with_google")
    })]
  });
}
function eD({
  isFigJamTry: e
}) {
  let t = t => e && t ? ty.FIGJAM_TRY_FOOTER_BANNER_CONTINUE_WITH_GOOGLE : e ? ty.FIGJAM_TRY_FOOTER_BANNER : t ? ty.LOGGED_OUT_FOOTER_CONTINUE_WITH_GOOGLE : ty.LOGGED_OUT_FOOTER;
  let r = _$$B();
  let i = Y9();
  let s = e ? r : i;
  let l = useDispatch();
  let u = {
    [ao.key]: ao.value
  };
  let p = dR(customHistory.location.pathname, u);
  let _ = e ? p : jM();
  let h = useCurrentFileWorkshopModeStatus(!0);
  let m = _6();
  let g = I4(e, h);
  let f = getI18nString("footer_banner.welcome_to_figma");
  let E = "DUPLICATE" === m.landingState ? getI18nString("footer_banner.create_an_account_to_get_your_own_copy_of_this_file") : getI18nString("footer_banner.create_an_account_to_edit_and_collaborate_on_this_file");
  let y = {
    src: _$$A4,
    style: c6
  };
  let b = !1;
  e && (f = g, E = getI18nString("figjam_try_v2.after_that_this_board_will_be_deleted"), y = {
    src: _$$A5,
    style: J$
  }, b = !h.enabled || "fallback" === h.id);
  let T = b ? jsx("div", {
    className: jw
  }) : jsx("span", {
    className: GD,
    children: f
  });
  let v = b ? E : jsx("span", {
    className: Yg,
    children: E
  });
  return jsx(TrackingProvider, {
    name: "Google Logged-out File Banner",
    properties: {
      isFigJamTry: e
    },
    children: jsxs("div", {
      className: `${_C} ${yl}`,
      children: [jsxs("div", {
        className: G_,
        children: [jsx("div", {
          className: y.style,
          children: jsx(_$$N2, {
            href: "/",
            newTab: !0,
            trusted: !0,
            children: jsx(SvgComponent, {
              svg: y.src,
              useOriginalSrcFills_DEPRECATED: !0
            })
          })
        }), jsxs("div", {
          className: _$$FS,
          children: [T, v]
        })]
      }), jsxs("div", {
        className: _o,
        children: [!isGovCluster() && jsx($z, {
          variant: "secondary",
          onClick: () => {
            Rm({
              dispatch: l,
              origin: t(!0),
              redirectUrl: _
            }).then(e => "login" === e.type && l(AUTH_COMPLETE({
              userId: e.user.id
            })), e => {
              trackAuthEvent("google_signup_error", t(!0), {
                error: e.message
              });
            });
          },
          innerText: "Continue with Google",
          htmlAttributes: {
            "data-test-id": "google-btn"
          },
          iconPrefix: jsx(SvgComponent, {
            style: {
              marginLeft: "5px"
            },
            svg: _$$A3,
            useOriginalSrcFills_DEPRECATED: !0
          }),
          children: jsx("span", {
            style: {
              marginLeft: "5px"
            },
            children: renderI18nText("footer_banner.continue_with_google")
          })
        }), jsx("div", {
          style: {
            width: 12
          }
        }, "spacer-div"), jsx("div", {
          className: vk,
          children: jsx($z, {
            variant: "signup",
            onClick: () => {
              s({
                origin: t(!1),
                formState: AuthFlowStep.SIGN_UP
              });
            },
            htmlAttributes: {
              "data-test-id": "email-btn"
            },
            children: renderI18nText("footer_banner.sign_up_with_email")
          })
        })]
      })]
    })
  });
}
export function $$ek0() {
  let e = selectCurrentFile();
  let t = selectCurrentUser();
  let r = useCurrentFileWorkshopModeStatus(!0);
  let E = useSelector(e => e.progressBarState.mode);
  let y = ck();
  let b = _$$N();
  let T = !e;
  let I = !b && r.enabled;
  let S = Kx();
  let v = _$$v();
  let A = _$$F();
  let x = useIsSelectedFigmakeFullscreen();
  return (useEffect(() => {
    v();
  }, [v]), T) ? null : y && BrowserInfo.isMeetDevice && !I ? jsx(ex, {
    isFigJamTry: b
  }) : t ? isBranchAlt(e) && e.trashedAt && E === UIVisibilitySetting.OFF ? jsx(k, {}) : null : y || I || BrowserInfo.isMeetDevice || A || x ? null : S ? jsxs("div", {
    className: cI,
    children: [jsx(eD, {
      isFigJamTry: b
    }), !b && jsx(_$$P, {
      origin: DT.LOGGED_OUT_FILE
    })]
  }) : jsxs(Fragment, {
    children: [jsx(ex, {
      isFigJamTry: b
    }), !b && jsx(_$$P, {
      origin: DT.LOGGED_OUT_FILE
    })]
  });
}
export let $$eM1 = 120;
export const y = $$ek0;
export const A = $$eM1;