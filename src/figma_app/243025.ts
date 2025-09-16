import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { lQ } from "../905/934246";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, jk, nB } from "../figma_app/272243";
import { Checkbox } from "../905/274480";
import { Label } from "../905/270045";
import { A as _$$A } from "../vendor/21595";
import { getI18nString, renderI18nText } from "../905/303541";
import { v4 } from "../figma_app/655139";
import { IOS as _$$p, IOS_UIKIT, ANDROID, ANDROID_XML, WEB, CSSBUILDER } from "../905/359509";
import { V0, ls } from "../figma_app/755395";
import { resolveLanguageUnit, getPluginInfo, getCodeExtensionPreferences, useUpdateCodeExtensionPreferences } from "../figma_app/120227";
import { KD } from "../figma_app/975811";
import { Um } from "../905/848862";
import { registerModal } from "../905/102752";
import { Q7 } from "../905/203369";
import { l6, c$ } from "../905/794875";
import { DT, iF, j8, rc, hq, IC, A3, D0 } from "../905/89739";
let v = new KD({
  min: .1
});
let A = [3, 2, 1, .5, 1 / 3];
let x = new class {
  parse(e) {
    return "1/3" === e ? 3 : "1/2" === e ? 2 : "2" === e || "3" === e ? 1 / Number.parseInt(e) : 1;
  }
  format(e = 1) {
    return "0.3" === e.toFixed(1) ? "3" : "0.5" === e.toFixed(1) ? "2" : 2 === e || 3 === e ? `1/${e}` : getI18nString("dev_handoff.alternative_units.no_scale");
  }
}();
export function $$N1({
  scaleFactor: e,
  onChange: t,
  onDropdownHidden: r,
  className: i,
  inputClassName: s,
  autoFocus: o
}) {
  let l = useDispatch();
  let d = Um();
  return jsx(l6, {
    ariaLabel: getI18nString("dev_handoff.alternative_units.scale_factor.select_label"),
    autoFocus: o,
    className: i,
    dispatch: l,
    dropdownShown: d,
    dropdownWidth: "120px",
    formatter: x,
    id: "SCALE_FACTOR",
    inputClassName: s,
    onChange: t,
    onDropdownHidden: r,
    property: e,
    children: A.map(t => jsx(c$, {
      value: t,
      selected: t === e,
      fullWidth: !0
    }, t))
  });
}
export function $$C0({
  codeLanguage: e
}) {
  let t = resolveLanguageUnit(e);
  switch (e.id) {
    case _$$p:
    case IOS_UIKIT:
      return renderI18nText("dev_handoff.alternative_units.description_scale_factor_ios");
    case ANDROID:
    case ANDROID_XML:
      return renderI18nText("dev_handoff.alternative_units.description_scale_factor_android");
    case WEB:
      return renderI18nText("dev_handoff.alternative_units.description_scale_factor_web");
  }
  return renderI18nText("dev_handoff.alternative_units.description_scale_factor_third_party", {
    unitName: t
  });
}
export let $$w2 = registerModal(function (e) {
  let t = v4();
  let [r, a] = useState(t);
  let E = getPluginInfo(r);
  let y = getCodeExtensionPreferences(r.id);
  let b = useUpdateCodeExtensionPreferences();
  let I = useModalManager(e);
  let A = useCallback(e => {
    e && b(r, E, {
      scaleFactor: e
    });
  }, [r, b, E]);
  let x = "first-party" === r.type && (r.id === ANDROID || r.id === ANDROID_XML || r.id === _$$p || r.id === IOS_UIKIT);
  let w = "first-party" === r.type && (r.id === WEB || r.id === CSSBUILDER);
  let O = _$$A(() => {
    w && b(r, E, {
      customSettings: {
        onlyText: "true" === (y.customSettings?.onlyText || "false") ? "false" : "true"
      }
    });
  }, 250);
  let R = y?.scaleFactor ?? 1;
  let L = V0({
    onChange: a,
    codeLanguage: r,
    shouldHideLanguagesWithNoAltUnitSupport: !0,
    skipBrowsePlugins: !0
  });
  return jsx(ModalRootComponent, {
    manager: I,
    width: "md",
    children: jsxs(vo, {
      children: [jsxs(Y9, {
        children: [jsx(hE, {
          children: getI18nString("dev_handoff.alternative_units.unit_settings_modal_title")
        }), jsx(jk, {
          children: jsx("div", {
            className: DT,
            children: jsx(ls, {
              dropdownId: "DEV_HANDOFF_MODAL_CODE_LANGUAGE_DROPDOWN",
              codeLanguageApi: L
            })
          })
        })]
      }), jsxs(nB, {
        children: [x ? jsxs("div", {
          className: iF,
          children: [jsx($$N1, {
            scaleFactor: R,
            onChange: A,
            onDropdownHidden: lQ,
            className: j8,
            autoFocus: !0
          }), jsx("div", {
            className: rc
          })]
        }) : jsx("div", {
          className: hq,
          children: jsx(Q7, {
            className: IC,
            property: R,
            formatter: v,
            onChange: A,
            autoFocus: !0
          })
        }), jsx("div", {
          className: A3,
          children: jsx($$C0, {
            codeLanguage: r
          })
        }), w && jsx(Checkbox, {
          checked: y.customSettings?.onlyText === "true",
          label: jsx(Label, {
            children: renderI18nText("dev_handoff.alternative_units.only_apply_rem_on_text", {
              rem: jsx("span", {
                className: D0,
                children: renderI18nText("dev_handoff.alternative_units.rem_unit")
              })
            })
          }),
          onChange: O
        })]
      })]
    })
  });
}, "SCALE_FACTOR_MODAL");
export const LO = $$C0;
export const Rg = $$N1;
export const j6 = $$w2;