import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { E as _$$E } from "../905/632989";
import { getSessionStorage } from "../905/657224";
import l from "classnames";
import { xf, bs } from "../figma_app/416935";
import { h as _$$h } from "../905/207101";
import { d as _$$d } from "../905/884707";
import { E as _$$E2, BZ, OZ } from "../905/194276";
import { qB, RE } from "../905/862321";
import { sT } from "../905/694658";
import { L } from "../905/408237";
import { getI18nString, renderI18nText } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { j6 } from "../figma_app/831799";
import { Ws } from "../figma_app/314264";
import { vh } from "../figma_app/181241";
var d = l;
let _ = forwardRef(function ({
  className: e,
  ...t
}, i) {
  return jsxs("div", {
    className: "x1n2onr6 xdpxx8g x9dczf4 xh8yej3",
    children: [jsx("label", {
      className: "x10l6tqk x1lliihq xuzi1b7 xtvhhri x1j6dyjg xo1l8bm xjbqb8w x14qv3re xgwajed x11vz743 x563n8i",
      htmlFor: t.id,
      children: t.placeholder
    }), jsx(L, {
      className: d()(e),
      ..._$$d(t),
      className: "xjyslct x14qv3re x1lliihq xh8yej3 x9dczf4 x9f619 x1kxipp6 xosj86m xc8nv1x x1kogg8i x101yacv x1pga9m1 xqhu3d4 xbwv0bw x1gs6z28 xm3xvbb x1gnnqk1 xugdvvj xpdc0an xcwqlvo xxqzaim x1robv96 x1cluluk xnv9m77 x17410jd",
      ref: i
    })]
  });
});
let E = new class {
  constructor() {
    this.OrgSamlConfigRequiredSchemaValidator = vh();
  }
  getOrgSamlConfigRequired(e) {
    return this.OrgSamlConfigRequiredSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/org_saml_config_required", {
      email: e.email
    }));
  }
}();
let $$x1 = forwardRef(function ({
  className: e,
  showUpdatedInputDesign: t,
  ...i
}, r) {
  return t ? jsx(_, {
    className: e,
    delay: 50,
    ..._$$d(i),
    ref: r
  }) : jsx(L, {
    className: d()("form_inputs--input--wfn0T", e),
    ..._$$d(i),
    ref: r
  });
});
export function $$S2(e) {
  let t = `${e.isInvalid ? "form_inputs--invalidInput--cpEoE" : ""}`;
  let i = {
    ...e,
    className: t
  };
  delete i.isInvalid;
  return jsx($$x1, {
    ..._$$d(i)
  });
}
export function $$w0(e) {
  let [t, i] = useState(null);
  let l = useDispatch();
  let d = useSelector(e => e.auth.formState);
  let p = useSelector(e => e.auth.clickedSAMLSignIn);
  let f = useSelector(e => e.auth.email);
  let _ = useSelector(e => e.auth.invalidInput);
  let {
    trackEvent
  } = j6();
  _$$h(() => {
    f && xf(f) && sT({
      email: f
    });
  });
  let x = e => {
    e && d === qB.SIGN_IN && l(_$$E2({
      formState: qB.SAML_START
    }));
  };
  let w = async e => {
    if (l(BZ({
      value: e.trim()
    })), !p && xf(e)) {
      await sT({
        email: e
      });
      try {
        let t = getSessionStorage()?.getItem(`SIGN-IN ${e}`);
        if (t) {
          x("true" === t);
          return;
        }
        let {
          data
        } = await E.getOrgSamlConfigRequired({
          email: e
        });
        getSessionStorage()?.setItem(`SIGN-IN ${e}`, data.meta.saml_sso_only);
        x(!!data.meta.saml_sso_only);
      } catch (e) {
        d === qB.SAML_START && l(_$$E2({
          formState: qB.SIGN_IN
        }));
      }
    }
  };
  let C = () => {
    let e = f.split("@")[0];
    w(`${e}@${t}`);
    i(null);
    trackEvent(Ws, {
      trackingDescriptor: _$$c.USE_SUGGESTED_EMAIL,
      previousDomain: e,
      newDomain: t
    });
  };
  let T = e.placeholder ?? getI18nString("auth.email-input-placeholder");
  return jsxs(Fragment, {
    children: [jsx($$S2, {
      "aria-describedby": e.ariaDescribedBy,
      "aria-invalid": RE.EMAIL === _,
      autoCapitalize: "off",
      autoComplete: "username",
      autoCorrect: "off",
      id: "email",
      isInvalid: RE.EMAIL === _,
      name: RE.EMAIL,
      onBlur: t => {
        if (e.onBlur?.(t, !0), e.showDomainSuggestions) {
          let e = f.split("@")[1];
          i(bs(e));
        }
      },
      onChange: e => w(e.currentTarget.value),
      placeholder: T,
      showUpdatedInputDesign: e.showUpdatedInputDesign,
      type: "email",
      value: f
    }), t && jsx("div", {
      "data-testid": "domain-suggestion",
      className: "form_inputs--domainSuggestion--sBuUE",
      children: renderI18nText("auth.email-domain-suggestion-prompt", {
        domainSuggestion: jsx(_$$E, {
          className: "form_inputs--link--KfGcM",
          onClick: () => C(),
          children: t
        })
      })
    })]
  });
}
export function $$C3(e) {
  let [t, i] = useState("");
  let s = useDispatch();
  let o = useSelector(e => e.auth.invalidInput);
  let l = e.placeholder ?? getI18nString("auth.password-input-placeholder");
  let d = e.isSignUp ? "new-password" : "current-password";
  return jsx($$S2, {
    "aria-describedby": e.ariaDescribedBy,
    "aria-invalid": o === RE.PASSWORD,
    autoCapitalize: "off",
    autoComplete: d,
    autoCorrect: "off",
    id: "current-password",
    isInvalid: o === RE.PASSWORD,
    name: RE.PASSWORD,
    onBlur: e.onBlur,
    onChange: function (e) {
      i(e.currentTarget.value);
      s(OZ({
        googleIdToken: null
      }));
    },
    placeholder: l,
    showUpdatedInputDesign: e.showUpdatedInputDesign,
    type: "password",
    value: t
  });
}
export const ZH = $$w0;
export const F0 = $$x1;
export const gK = $$S2;
export const Wv = $$C3;