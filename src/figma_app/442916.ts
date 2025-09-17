import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogBody } from "../figma_app/272243";
import { TabLoop } from "../905/718764";
import { getStorage } from "../905/657224";
import u from "classnames";
import { debugState } from "../905/407919";
import { customHistory } from "../905/612521";
import { buildUploadUrl } from "../figma_app/169182";
import { BrowserInfo } from "../figma_app/778880";
import { AUTH_INIT } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { F0 } from "../905/178707";
import { k as _$$k } from "../905/585996";
import { BigTextInput } from "../figma_app/637027";
import { Ak } from "../905/773401";
import { lR, $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { S as _$$S } from "../5132/668270";
import { showModalHandler, hideModal } from "../905/156213";
import { updateWorkshopUserName } from "../figma_app/107215";
import { TrackingProvider } from "../figma_app/831799";
import { useCurrentFileWorkshopModeStatus } from "../figma_app/789";
import { logAndTrackCTA } from "../figma_app/314264";
import { BI } from "../figma_app/546509";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { generateAnnomousPrefill } from "../905/301652";
import { AuthModal } from "../905/749159";
import { A as _$$A, Uw, bO, JD } from "../905/219868";
import { V as _$$V } from "../905/670859";
import { D as _$$D2 } from "../905/347702";
var p = u;
let U = "workshop_modals--textContainer--Fn3Oc";
let B = "workshop_modals--disclaimer--wFoqk text--fontPos14Whyte--pEiDq text--_fontBaseWhyte--efAjI";
let G = "workshop_modals--figjamTryDisclaimer--g4iHA text--fontPos12--YsUAh text--_fontBase--QdLsd";
function V({
  user: e,
  file: t
}) {
  let r = useDispatch();
  let n = useMemo(() => BrowserInfo.isMeetDevice ? getI18nString("figjam_try.google_meet_user_name") : localStorage.getItem(generateAnnomousPrefill()) || "", []);
  let [s, o] = useState(n);
  let [l, d] = useState(!1);
  let c = useCurrentFileWorkshopModeStatus();
  let u = c.enabled ? c.id : null;
  let p = !e;
  let _ = !!t?.isTryFile;
  return {
    openLoginModal: () => {
      r(AUTH_INIT({
        origin: "logged_out_footer",
        formState: AuthFlowStep.SIGN_IN,
        redirectUrl: customHistory.location.pathname
      }));
      r(showModalHandler({
        type: AuthModal,
        data: {
          headerText: "Log In"
        }
      }));
    },
    name: s,
    onNameChanged: e => {
      o(e.target.value);
    },
    isNameError: l,
    onSubmit: n => {
      if (n.preventDefault(), n.stopPropagation(), p && (null == s || 0 === s.trim().length)) {
        d(!0);
        return;
      }
      p ? (r(updateWorkshopUserName({
        name: s
      })), _ && t?.name === getI18nString("fullscreen.fullscreen_view_selector.untitled") && r(_$$S({
        userName: s,
        file_key: t.key
      }))) : $$K2(u, e.email);
      logAndTrackCTA({
        name: "Jam Session access file button",
        isAnonymous: p,
        isFigjamTry: _,
        userID: e?.id ?? null,
        userName: p ? s : null,
        fileKey: t?.key
      });
      r(hideModal());
    },
    onClose: e => {
      e.preventDefault();
      e.stopPropagation();
      r(updateWorkshopUserName({
        name: getI18nString("figjam_try.google_meet_user_name")
      }));
      _ && t?.name === getI18nString("fullscreen.fullscreen_view_selector.untitled") && r(_$$S({
        userName: s,
        file_key: t.key
      }));
      r(hideModal());
    }
  };
}
function H({
  file: e
}) {
  let {
    openLoginModal,
    name,
    onNameChanged,
    isNameError,
    onSubmit,
    onClose
  } = V({
    file: e
  });
  let l = BI();
  let d = !l?.shouldOptimizeForIpadApp;
  return jsxs(Fragment, {
    children: [jsx("img", {
      src: buildUploadUrl("ff519560b46a66403ec0c45887a8f336270b7033"),
      alt: "",
      className: "workshop_modals--figjamTryImage--pnbwF"
    }), jsx("div", {
      className: U,
      children: jsx("h1", {
        className: "workshop_modals--figjamTryHeader--5gdQ2 text--fontPos20--Bcz97 text--_fontBase--QdLsd",
        children: renderI18nText("figjam_try.onboarding_title")
      })
    }), jsx(_$$k, {
      multiple: 1
    }), jsx("div", {
      className: U,
      children: jsx("div", {
        className: "workshop_modals--figjamTrySubtitle--XIYgl text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: renderI18nText("figjam_try.onboarding_subtext")
      })
    }), jsx(_$$k, {
      multiple: 3
    }), BrowserInfo.isMeetDevice ? jsx(lR, {
      onClick: onClose,
      type: "submit",
      children: renderI18nText("figjam_try.onboarding_submit")
    }) : jsxs("form", {
      onSubmit,
      children: [jsx(BigTextInput, {
        autoFocus: !0,
        className: p()("workshop_modals--figjamTryInput--vCslR", isNameError && "workshop_modals--figjamTryInputError--wUBqP"),
        placeholder: getI18nString("figjam_try.name_input_placeholder"),
        onChange: onNameChanged,
        value: name
      }), isNameError && jsx("div", {
        className: "workshop_modals--figjamTryError--tCLy- text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: renderI18nText("figjam_try.onboarding_name_validation_error")
      }), jsx(_$$k, {
        multiple: 2
      }), jsx(lR, {
        type: "submit",
        children: renderI18nText("figjam_try.onboarding_submit")
      })]
    }), jsx(_$$k, {
      multiple: 3
    }), jsx("div", {
      className: G,
      children: renderI18nText("figjam_try.onboarding_disclaimer", {
        tos: jsx(_$$V, {
          url: BrowserInfo.isMeetDevice ? _$$A : Uw,
          title: getI18nString("figjam_try.onboarding_disclaimer_tos")
        }),
        privacy_policy: jsx(_$$V, {
          url: BrowserInfo.isMeetDevice ? bO : JD,
          title: getI18nString("figjam_try.onboarding_disclaimer_privacy_policy")
        })
      })
    }), jsx(_$$k, {
      multiple: 1
    }), d && !BrowserInfo.isMeetDevice && jsx("div", {
      className: G,
      children: renderI18nText("figjam_try.already_have_an_account", {
        log_in: jsx($z, {
          onClick: openLoginModal,
          variant: "link",
          children: renderI18nText("figjam_try.already_have_an_account_log_in")
        })
      })
    })]
  });
}
function z({
  user: e,
  file: t
}) {
  let {
    openLoginModal,
    name,
    onNameChanged,
    isNameError,
    onSubmit
  } = V({
    user: e,
    file: t
  });
  let l = !e;
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: U,
      children: [jsx("h1", {
        className: "workshop_modals--header--1TwZ- text--fontPos24Whyte--gYiFz text--_fontBaseWhyte--efAjI",
        children: renderI18nText("whiteboard.open_sessions.onboarding_title")
      }), jsx("h1", {
        className: "workshop_modals--headerFilename--Z60l0 workshop_modals--header--1TwZ- text--fontPos24Whyte--gYiFz text--_fontBaseWhyte--efAjI",
        children: t?.name
      })]
    }), jsx(_$$k, {
      multiple: 2
    }), jsx("div", {
      className: U,
      children: jsx("div", {
        className: "workshop_modals--subtitle---dQsr text--fontPos16Whyte--OfwSP text--_fontBaseWhyte--efAjI",
        children: renderI18nText("whiteboard.open_sessions.onboarding_subtext")
      })
    }), jsx(_$$k, {
      multiple: 2
    }), jsxs("form", {
      onSubmit,
      children: [l && !BrowserInfo.isMeetDevice && jsxs(Fragment, {
        children: [jsx(F0, {
          autoFocus: !0,
          placeholder: getI18nString("whiteboard.open_sessions.onboarding_name_input_placeholder"),
          onChange: onNameChanged,
          value: name
        }), isNameError && jsx("div", {
          className: "workshop_modals--brandError--wMV-m text--fontPos16Whyte--OfwSP text--_fontBaseWhyte--efAjI",
          children: renderI18nText("whiteboard.open_sessions.onboarding_name_validation_error")
        }), jsx(_$$k, {
          multiple: 2
        })]
      }), jsx(Ak, {
        type: "submit",
        children: l ? getI18nString("whiteboard.open_sessions.onboarding_anonymous_submit") : getI18nString("whiteboard.open_sessions.onboarding_viewer_submit", {
          email: e.email
        })
      })]
    }), l && jsxs(Fragment, {
      children: [jsx(_$$k, {
        multiple: 2
      }), jsxs("div", {
        className: U,
        children: [jsx("div", {
          className: B,
          children: renderI18nText("whiteboard.open_sessions.onboarding_disclaimer", {
            button_text: l ? getI18nString("whiteboard.open_sessions.onboarding_disclaimer_access_file") : getI18nString("whiteboard.open_sessions.onboarding_disclaimer_continue"),
            tos: jsx(_$$V, {
              url: Uw,
              title: getI18nString("whiteboard.open_sessions.onboarding_disclaimer_tos")
            }),
            privacy_policy: jsx(_$$V, {
              url: JD,
              title: getI18nString("whiteboard.open_sessions.onboarding_disclaimer_privacy_policy")
            })
          })
        }), !BrowserInfo.isMeetDevice && jsxs(Fragment, {
          children: [jsx(_$$k, {
            multiple: 1
          }), jsx("div", {
            className: B,
            children: renderI18nText("whiteboard.open_sessions.already_have_an_account", {
              log_in: jsx($z, {
                onClick: openLoginModal,
                variant: "link",
                children: renderI18nText("whiteboard.open_sessions.already_have_an_account_log_in")
              })
            })
          })]
        })]
      })]
    })]
  });
}
export function $$W0(e) {
  let t = selectCurrentUser();
  let r = selectCurrentFile();
  let i = !!r?.isTryFile;
  let a = debugState.getState().selectedView;
  let c = a?.view === "fullscreen" ? a.claim : null;
  let u = useModalManager({
    ...e,
    preventUserClose: !0
  });
  return c ? null : jsx(TrackingProvider, {
    name: "Jam Session Onboarding Modal",
    properties: {
      isAnonymous: !t,
      isFigjamTry: i,
      userID: t?.id ?? null,
      fileKey: r?.key
    },
    children: jsx(ModalRootComponent, {
      manager: u,
      width: 400,
      height: "fixed",
      children: jsx(DialogContents, {
        children: jsx(DialogBody, {
          padding: 40,
          children: jsx(TabLoop, {
            children: i ? jsx(H, {
              file: r
            }) : jsx(z, {
              user: t,
              file: r
            })
          })
        })
      })
    })
  });
}
export let $$K2 = _$$D2((e, t) => {
  let r = getStorage();
  try {
    let n = r.get($$Y1(e));
    if (!n) {
      r.set($$Y1(e), [t]);
      return;
    }
    let i = JSON.parse(n);
    i.includes(t) || (i.push(t), r.set($$Y1(e), i));
  } catch (n) {
    r.set($$Y1(e), [t]);
  }
});
export function $$Y1(e) {
  return `workshop_logged_in_accpeted_${e}`;
}
export const mG = $$W0;
export const v6 = $$Y1;
export const kO = $$K2;