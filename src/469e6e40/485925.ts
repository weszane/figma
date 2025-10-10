import _require from "@stylexjs/stylex";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useId } from "react";
import { Button } from "../905/521428";
import { InputComponent } from "../905/185998";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset } from "../905/493196";
import { HiddenLabel, Label } from "../905/270045";
import { Checkbox } from "../905/274480";
import { v } from "../905/442517";
import { useDebouncedCallback } from "use-debounce";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { normalizePublicLinkControlsSetting } from "../figma_app/246699";
import { PublicLinkControlsSetting } from "../figma_app/482728";
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (443 == require.j) {}
if (_require, 443 == require.j) {}
export function $$h7(e) {
  return e ? e > 24 ? {
    initialMaxDuration: Math.trunc(e / 24),
    initialIsTimeMeasuredInDays: !0
  } : {
    initialMaxDuration: e,
    initialIsTimeMeasuredInDays: !1
  } : {
    initialMaxDuration: 7,
    initialIsTimeMeasuredInDays: !0
  };
}
export function $$x2(e) {
  return e ? getI18nString("setting_tab.public_sharing.modal.days") : getI18nString("setting_tab.public_sharing.modal.hours");
}
export function $$b0(e, t, a) {
  let n = normalizePublicLinkControlsSetting(t);
  let i = n === PublicLinkControlsSetting.PASSWORD_REQUIRED || n === PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED;
  let r = n === PublicLinkControlsSetting.EXPIRATION_REQUIRED || n === PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED;
  let {
    initialMaxDuration,
    initialIsTimeMeasuredInDays
  } = $$h7(a);
  let [d, c] = useState(n === PublicLinkControlsSetting.BANNED);
  let [_, u] = useState(i);
  let [x, b] = useState(r);
  let [f, j] = useState(initialIsTimeMeasuredInDays);
  let [y, w] = useState(initialMaxDuration.toString());
  let k = useCallback(e => {
    j("days" === e);
  }, []);
  let E = useMemo(() => [{
    value: "hours",
    label: getI18nString("setting_tab.public_sharing.modal.hours")
  }, {
    value: "days",
    label: getI18nString("setting_tab.public_sharing.modal.days")
  }], []);
  let C = $$v5(y, f);
  let S = C || "" === y ? void 0 : f ? getI18nString("setting_tab.public_sharing.modal.days_error") : getI18nString("setting_tab.public_sharing.modal.hours_error");
  return {
    formActions: {
      togglePublicLinksBanned: e => {
        c(!e);
      },
      togglePublicLinksRequirePassword: e => {
        u(e);
      },
      togglePublicLinksRequireExpiration: e => {
        b(e);
      },
      changeMaxDuration: e => {
        w(e);
      },
      onChangeTimeScale: k,
      dropdownOptions: E
    },
    formState: {
      initialPublicLinkControlsSetting: n,
      isPublicLinksBanned: d,
      doPublicLinksRequirePassword: _,
      doPublicLinksRequireExpiration: x,
      isTimeMeasuredInDays: f,
      maxDuration: y,
      durationErrorMessage: S,
      canSave: C
    }
  };
}
export function $$v5(e, t) {
  let a = parseInt(e);
  if (isNaN(a) || a.toString() !== e) return !1;
  if (t) {
    if (a > 31 || a < 1) return !1;
  } else if (a > 24 || a < 1) return !1;
  return !0;
}
export function $$f4(e) {
  return e.isPublicLinksBanned ? PublicLinkControlsSetting.BANNED : e.doPublicLinksRequireExpiration && e.doPublicLinksRequirePassword ? PublicLinkControlsSetting.EXP_AND_PWD_REQUIRED : e.doPublicLinksRequireExpiration ? PublicLinkControlsSetting.EXPIRATION_REQUIRED : e.doPublicLinksRequirePassword ? PublicLinkControlsSetting.PASSWORD_REQUIRED : PublicLinkControlsSetting.ALLOWED;
}
export function $$j9(e, t) {
  return e.doPublicLinksRequireExpiration ? $$v5(e.maxDuration, e.isTimeMeasuredInDays) ? e.isTimeMeasuredInDays ? 24 * parseInt(e.maxDuration) : parseInt(e.maxDuration) : (t(FlashActions.error(getI18nString("org_actions.an_error_occurred"))), null) : null;
}
export function $$y1(e) {
  let t = useDebouncedCallback(e.save, 500, {
    leading: !0
  });
  return jsxs(Fragment, {
    children: [jsx(Button, {
      variant: "secondary",
      onClick: e.cancel,
      children: renderI18nText("setting_tab.public_sharing.modal.cancel")
    }), jsx(Button, {
      onClick: t,
      disabled: !e.canSave,
      children: renderI18nText("setting_tab.public_sharing.modal.save")
    })]
  });
}
function w(e) {
  let {
    errorMessage,
    inputLabel,
    inputValue,
    onChange,
    onChangeTimeScale,
    currentTimeScale,
    options
  } = e;
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: "xazcve0",
      children: jsxs(InputComponent.Root, {
        children: [jsx(InputComponent, {
          "aria-label": inputLabel,
          value: inputValue,
          onChange
        }), jsx("div", {
          className: "x7hzu26"
        }), jsxs(SelectGroupLabel, {
          value: currentTimeScale,
          onChange: onChangeTimeScale,
          children: [jsx(SelectSeparator, {
            label: jsx(HiddenLabel, {
              children: getI18nString("org_settings.time_scale_label")
            })
          }), jsx(SelectContainer, {
            children: options.map(e => jsx(SelectOptionReset, {
              value: e.value,
              children: e.label
            }, e.value))
          })]
        })]
      })
    }), !!errorMessage && jsx("div", {
      className: "x172n1ly x1d3mw78 x1nz7w5u",
      children: errorMessage
    })]
  });
}
export function $$k3(e) {
  return jsxs("div", {
    className: "x1nz7w5u",
    children: [jsx("div", {
      className: "x1n0bwc9",
      id: "max-expiration-description",
      children: renderI18nText("setting_tab.public_sharing.modal.expiration_description")
    }), jsx(w, {
      options: e.options,
      inputValue: e.inputValue,
      onChange: e.onChange,
      onChangeTimeScale: e.onChangeTimeScale,
      currentTimeScale: e.currentTimeScale,
      errorMessage: e.errorMessage,
      inputLabel: getI18nString("setting_tab.public_sharing.modal.expiration_description")
    })]
  });
}
export function $$E8(e) {
  return jsxs("div", {
    className: "x1w4f5ud",
    children: [jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("setting_tab.public_sharing.modal.password_required")
      }),
      checked: e.doPublicLinksRequirePassword,
      onChange: e.togglePublicLinksRequirePassword
    }), e.displayExpiration && jsx(Checkbox, {
      label: jsx(Label, {
        children: getI18nString("setting_tab.public_sharing.modal.expiration_required")
      }),
      checked: e.doPublicLinksRequireExpiration,
      onChange: e.togglePublicLinksRequireExpiration
    })]
  });
}
export function $$C6(e) {
  let t = useId();
  let a = useId();
  return jsxs("div", {
    className: "x78zum5 x1q0g3np x1qughib x6s0dn4",
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf",
      children: [jsx(Label, {
        "aria-describedby": a,
        className: "x1s688f",
        htmlFor: t,
        children: e.labelText
      }), jsx("p", {
        id: a,
        className: "x1n0bwc9",
        children: e.subText
      })]
    }), jsx(v, {
      id: t,
      checked: !e.isPublicLinksBanned,
      onChange: e.togglePublicLinksBanned
    })]
  });
}
export const Cf = $$b0;
export const Ym = $$y1;
export const ZA = $$x2;
export const Zm = $$k3;
export const eZ = $$f4;
export const fJ = $$v5;
export const kJ = $$C6;
export const sJ = $$h7;
export const t2 = $$E8;
export const zz = $$j9;