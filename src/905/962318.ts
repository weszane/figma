import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultLanguage, languageCodes, subsetLanguages, allLanguages } from "../905/816253";
import { getLanguageDisplayName, getI18nResourceKey } from "../905/528121";
import { throwError } from "../figma_app/465776";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { b as _$$b, c as _$$c } from "../905/308099";
import { s as _$$s } from "../905/932270";
import { Label } from "../905/270045";
import { $n } from "../905/521428";
import { captureException } from "../vendor/288996";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { customHistory } from "../905/612521";
import { isDevEnvironment } from "../figma_app/169182";
import { I7 } from "../figma_app/594947";
import { FlashActions } from "../905/573154";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { getI18nState } from "../figma_app/363242";
import { fu } from "../figma_app/831799";
import { aq } from "../figma_app/412189";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { T as _$$T, e as _$$e } from "../905/949616";
import { getUserId } from "../905/372672";
import { k as _$$k2 } from "../905/93362";
export let $$P0 = registerModal(function ({
  open: e,
  onClose: t,
  source: i
}) {
  let l = useDispatch();
  let T = getI18nState()?.getPrimaryLocale(!0) ?? defaultLanguage;
  let P = hS({
    open: e,
    onClose: t
  });
  let O = function () {
    let {
      getConfig
    } = I7("exp_i18n_es_es_existing_users");
    let {
      getConfig: _getConfig
    } = I7("exp_i18n_es_es_new_users");
    let {
      getConfig: _getConfig2
    } = I7("exp_i18n_es_es_existing_users_comms_holdout");
    let {
      getConfig: _getConfig3
    } = I7("exp_i18n_es_es_new_users_comms_holdout");
    return !!getConfig().getValue("toggle_language_enabled", !1) || !!_getConfig().getValue("toggle_language_enabled", !1) || !!_getConfig2().getValue("toggle_language_enabled", !1) || !!_getConfig3().getValue("toggle_language_enabled", !1);
  }();
  let D = function () {
    let {
      getConfig
    } = I7("exp_i18n_ko_kr_existing_users");
    let {
      getConfig: _getConfig4
    } = I7("exp_i18n_ko_kr_new_users");
    let {
      getConfig: _getConfig5
    } = I7("exp_i18n_ko_kr_existing_users_comms_holdout");
    let {
      getConfig: _getConfig6
    } = I7("exp_i18n_ko_kr_new_users_comms_holdout");
    return !!getConfig().getValue("toggle_language_enabled", !1) || !!_getConfig4().getValue("toggle_language_enabled", !1) || !!_getConfig5().getValue("toggle_language_enabled", !1) || !!_getConfig6().getValue("toggle_language_enabled", !1);
  }();
  let F = function () {
    let {
      getConfig
    } = I7("exp_i18n_pt_br_existing_users");
    let {
      getConfig: _getConfig7
    } = I7("exp_i18n_pt_br_new_users");
    let {
      getConfig: _getConfig8
    } = I7("exp_i18n_pt_br_existing_users_comms_holdout");
    let {
      getConfig: _getConfig9
    } = I7("exp_i18n_pt_br_new_users_comms_holdout");
    return !!getConfig().getValue("toggle_language_enabled", !1) || !!_getConfig7().getValue("toggle_language_enabled", !1) || !!_getConfig8().getValue("toggle_language_enabled", !1) || !!_getConfig9().getValue("toggle_language_enabled", !1);
  }();
  let M = useCallback(e => {
    if (e === languageCodes.ES_ES && O || e === languageCodes.KO_KR && D || e === languageCodes.PT_BR && F) return !0;
    let t = getLanguageDisplayName(e);
    return !!(!t || getFeatureFlags()[t]);
  }, [O, D, F]);
  let j = useMemo(() => {
    let e = subsetLanguages.filter(M).map(e => ({
      value: e,
      name: L(e)
    }));
    (isDevEnvironment() || getFeatureFlags().i18n_pseudolocales) && e.push({
      value: languageCodes.AAL,
      name: L(languageCodes.AAL)
    }, {
      value: languageCodes.AAA,
      name: L(languageCodes.AAA)
    });
    return e;
  }, [M]);
  let U = j.some(e => e.value === T) ? T : defaultLanguage;
  let [B, V] = useState(U);
  let [G, z] = useState(!1);
  let H = aq();
  let W = function ({
    onError: e,
    onSuccess: t
  }) {
    let i = getUserId();
    return n => {
      if (_$$T("product_locale", n, {
        maxAge: _$$e
      }), !(null != i)) {
        t();
        return;
      }
      _$$k2.putUser({
        user: {
          id: i,
          locale: n
        }
      }).then(t, e);
    };
  }({
    onError: e => {
      let t = resolveMessage(e, getI18nString("help_widget.language_selector.an_error_occurred"));
      l(FlashActions.error(t));
      H() && z(!1);
      let i = Error("Failed to change user locale.");
      captureException(i, {
        originalException: e
      });
    },
    onSuccess: () => {
      customHistory.reload("User changed locale preference");
    }
  });
  return jsx(fu, {
    name: "Language Selector",
    children: jsx(bL, {
      manager: P,
      width: "lg",
      children: jsxs(Rq, {
        onSubmit: e => {
          if (e.preventDefault(), !B || B === U) {
            t();
            return;
          }
          trackEventAnalytics("language_changed", {
            previous_language: U,
            new_language: B,
            source: i
          }, {
            forwardToDatadog: !0
          });
          z(!0);
          W(B);
        },
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("settings.account_settings.change_languages")
          })
        }), jsx(nB, {
          children: jsx(_$$b, {
            autofocus: !0,
            legend: jsx(_$$s, {
              children: renderI18nText("settings.language_selector.modal.description")
            }),
            value: B,
            onChange: e => {
              var t;
              if (!(t = allLanguages, e => t.includes(e))(e)) {
                let t = Error(`${e} is not a locale.`);
                captureException(t);
                return;
              }
              V(e);
            },
            children: j.map(e => jsx(_$$c, {
              label: jsx(Label, {
                children: e.name
              }),
              value: e.value
            }, e.value))
          })
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              disabled: G,
              onClick: t,
              children: renderI18nText("settings.language_selector.cancel")
            }), jsx($n, {
              disabled: G,
              type: "submit",
              children: renderI18nText("settings.language_selector.save")
            })]
          })
        })]
      })
    })
  });
}, "LanguageSelectorModal", ModalSupportsBackground.YES);
export function $$O2() {
  let e = useSelector(e => e.user.locale);
  return jsx(Fragment, {
    children: L(e)
  });
}
export var $$D1 = (e => (e.USER_SETTINGS = "User Settings", e.HELP = "Help", e.ANNOUNCEMENT_MODAL = "Announcement Modal", e))($$D1 || {});
function L(e) {
  void 0 === e && throwError(`Unsupported locale in language selector: ${e}`);
  return getI18nResourceKey(e);
}
export const kA = $$P0;
export const IO = $$D1;
export const rP = $$O2;