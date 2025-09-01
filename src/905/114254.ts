import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { _YF } from "../figma_app/822011";
import { Ez5, zMY } from "../figma_app/763686";
import { t as _$$t, tx } from "../905/303541";
import { to, ES } from "../905/156213";
import { fu } from "../figma_app/831799";
import { dq } from "../905/845253";
import { cD } from "../figma_app/598018";
import { Ju } from "../905/102752";
import { Dd } from "../905/519092";
import { n as _$$n } from "../905/316557";
import { s1 } from "../figma_app/226737";
export function $$f1(e) {
  return e === _YF.SLIDES && !Ez5?.slideThemeLibBindings().doesSlideDeckUseSameTheme();
}
export function $$_0({
  source: e,
  onSubmit: t,
  onCancel: i,
  dispatch: n
}) {
  n(to({
    type: A,
    data: {
      source: e,
      onSubmit: () => {
        n(ES(A));
        t();
      },
      onCancel: () => {
        n(ES(A));
        i();
      }
    }
  }));
}
let A = Ju(function ({
  source: e,
  onSubmit: t,
  onCancel: i
}) {
  let a = s1();
  let l = cD();
  let p = dq();
  let [f, _] = useState(a);
  let A = useCallback(() => {
    let e = Ez5?.slideThemeLibBindings().insertDefaultLocalTheme(zMY.LIGHT, "Template style");
    e && _(e);
  }, []);
  return jsx(fu, {
    name: "Slides Template Theme Picker Modal",
    properties: {
      source: e,
      teamId: l,
      orgId: p
    },
    children: jsx(Dd, {
      title: _$$t("slides.templates.modal.theme_picker.header"),
      minWidth: 320,
      maxWidth: 320,
      confirmText: _$$t("slides.templates.modal.theme_picker.choose_theme_button"),
      onSubmit: () => {
        Ez5?.slideThemeLibBindings().detachThemesForTemplatePublish(f);
        t();
      },
      onCancel: i,
      children: jsxs("div", {
        children: [tx("slides.templates.modal.theme_picker.body"), jsx(_$$n, {
          selectedThemeId: f,
          onChange: _,
          onCreateNewTheme: A,
          allowShuffle: !1,
          allowEditTheme: !1
        })]
      })
    })
  });
}, "SlidesTemplateThemePickerModal");
export const a = $$_0;
export const n = $$f1;