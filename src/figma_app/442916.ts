import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, nB } from "../figma_app/272243";
import { i as _$$i } from "../905/718764";
import { getStorage } from "../905/657224";
import u from "classnames";
import { debugState } from "../905/407919";
import { Ay } from "../905/612521";
import { buildUploadUrl } from "../figma_app/169182";
import { Ay as _$$Ay } from "../figma_app/778880";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { F0 } from "../905/178707";
import { k as _$$k } from "../905/585996";
import { il } from "../figma_app/637027";
import { Ak } from "../905/773401";
import { lR, $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { S as _$$S } from "../5132/668270";
import { to, Ce } from "../905/156213";
import { cq } from "../figma_app/107215";
import { fu } from "../figma_app/831799";
import { nF } from "../figma_app/789";
import { Cu } from "../figma_app/314264";
import { BI } from "../figma_app/546509";
import { q5 } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { H as _$$H } from "../905/301652";
import { x as _$$x } from "../905/749159";
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
  let n = useMemo(() => _$$Ay.isMeetDevice ? _$$t("figjam_try.google_meet_user_name") : localStorage.getItem(_$$H()) || "", []);
  let [s, o] = useState(n);
  let [l, d] = useState(!1);
  let c = nF();
  let u = c.enabled ? c.id : null;
  let p = !e;
  let _ = !!t?.isTryFile;
  return {
    openLoginModal: () => {
      r(Ts({
        origin: "logged_out_footer",
        formState: qB.SIGN_IN,
        redirectUrl: Ay.location.pathname
      }));
      r(to({
        type: _$$x,
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
      p ? (r(cq({
        name: s
      })), _ && t?.name === _$$t("fullscreen.fullscreen_view_selector.untitled") && r(_$$S({
        userName: s,
        file_key: t.key
      }))) : $$K2(u, e.email);
      Cu({
        name: "Jam Session access file button",
        isAnonymous: p,
        isFigjamTry: _,
        userID: e?.id ?? null,
        userName: p ? s : null,
        fileKey: t?.key
      });
      r(Ce());
    },
    onClose: e => {
      e.preventDefault();
      e.stopPropagation();
      r(cq({
        name: _$$t("figjam_try.google_meet_user_name")
      }));
      _ && t?.name === _$$t("fullscreen.fullscreen_view_selector.untitled") && r(_$$S({
        userName: s,
        file_key: t.key
      }));
      r(Ce());
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
        children: tx("figjam_try.onboarding_title")
      })
    }), jsx(_$$k, {
      multiple: 1
    }), jsx("div", {
      className: U,
      children: jsx("div", {
        className: "workshop_modals--figjamTrySubtitle--XIYgl text--fontPos13--xW8hS text--_fontBase--QdLsd",
        children: tx("figjam_try.onboarding_subtext")
      })
    }), jsx(_$$k, {
      multiple: 3
    }), _$$Ay.isMeetDevice ? jsx(lR, {
      onClick: onClose,
      type: "submit",
      children: tx("figjam_try.onboarding_submit")
    }) : jsxs("form", {
      onSubmit,
      children: [jsx(il, {
        autoFocus: !0,
        className: p()("workshop_modals--figjamTryInput--vCslR", isNameError && "workshop_modals--figjamTryInputError--wUBqP"),
        placeholder: _$$t("figjam_try.name_input_placeholder"),
        onChange: onNameChanged,
        value: name
      }), isNameError && jsx("div", {
        className: "workshop_modals--figjamTryError--tCLy- text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: tx("figjam_try.onboarding_name_validation_error")
      }), jsx(_$$k, {
        multiple: 2
      }), jsx(lR, {
        type: "submit",
        children: tx("figjam_try.onboarding_submit")
      })]
    }), jsx(_$$k, {
      multiple: 3
    }), jsx("div", {
      className: G,
      children: tx("figjam_try.onboarding_disclaimer", {
        tos: jsx(_$$V, {
          url: _$$Ay.isMeetDevice ? _$$A : Uw,
          title: _$$t("figjam_try.onboarding_disclaimer_tos")
        }),
        privacy_policy: jsx(_$$V, {
          url: _$$Ay.isMeetDevice ? bO : JD,
          title: _$$t("figjam_try.onboarding_disclaimer_privacy_policy")
        })
      })
    }), jsx(_$$k, {
      multiple: 1
    }), d && !_$$Ay.isMeetDevice && jsx("div", {
      className: G,
      children: tx("figjam_try.already_have_an_account", {
        log_in: jsx($z, {
          onClick: openLoginModal,
          variant: "link",
          children: tx("figjam_try.already_have_an_account_log_in")
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
        children: tx("whiteboard.open_sessions.onboarding_title")
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
        children: tx("whiteboard.open_sessions.onboarding_subtext")
      })
    }), jsx(_$$k, {
      multiple: 2
    }), jsxs("form", {
      onSubmit,
      children: [l && !_$$Ay.isMeetDevice && jsxs(Fragment, {
        children: [jsx(F0, {
          autoFocus: !0,
          placeholder: _$$t("whiteboard.open_sessions.onboarding_name_input_placeholder"),
          onChange: onNameChanged,
          value: name
        }), isNameError && jsx("div", {
          className: "workshop_modals--brandError--wMV-m text--fontPos16Whyte--OfwSP text--_fontBaseWhyte--efAjI",
          children: tx("whiteboard.open_sessions.onboarding_name_validation_error")
        }), jsx(_$$k, {
          multiple: 2
        })]
      }), jsx(Ak, {
        type: "submit",
        children: l ? _$$t("whiteboard.open_sessions.onboarding_anonymous_submit") : _$$t("whiteboard.open_sessions.onboarding_viewer_submit", {
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
          children: tx("whiteboard.open_sessions.onboarding_disclaimer", {
            button_text: l ? _$$t("whiteboard.open_sessions.onboarding_disclaimer_access_file") : _$$t("whiteboard.open_sessions.onboarding_disclaimer_continue"),
            tos: jsx(_$$V, {
              url: Uw,
              title: _$$t("whiteboard.open_sessions.onboarding_disclaimer_tos")
            }),
            privacy_policy: jsx(_$$V, {
              url: JD,
              title: _$$t("whiteboard.open_sessions.onboarding_disclaimer_privacy_policy")
            })
          })
        }), !_$$Ay.isMeetDevice && jsxs(Fragment, {
          children: [jsx(_$$k, {
            multiple: 1
          }), jsx("div", {
            className: B,
            children: tx("whiteboard.open_sessions.already_have_an_account", {
              log_in: jsx($z, {
                onClick: openLoginModal,
                variant: "link",
                children: tx("whiteboard.open_sessions.already_have_an_account_log_in")
              })
            })
          })]
        })]
      })]
    })]
  });
}
export function $$W0(e) {
  let t = iZ();
  let r = q5();
  let i = !!r?.isTryFile;
  let a = debugState.getState().selectedView;
  let c = a?.view === "fullscreen" ? a.claim : null;
  let u = hS({
    ...e,
    preventUserClose: !0
  });
  return c ? null : jsx(fu, {
    name: "Jam Session Onboarding Modal",
    properties: {
      isAnonymous: !t,
      isFigjamTry: i,
      userID: t?.id ?? null,
      fileKey: r?.key
    },
    children: jsx(bL, {
      manager: u,
      width: 400,
      height: "fixed",
      children: jsx(vo, {
        children: jsx(nB, {
          padding: 40,
          children: jsx(_$$i, {
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