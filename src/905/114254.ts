import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { _YF } from "../figma_app/822011";
import { AppStateTsApi, ThemeMode } from "../figma_app/763686";
import { getI18nString, renderI18nText } from "../905/303541";
import { showModalHandler, hideSpecificModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { useCurrentUserOrgId } from "../905/845253";
import { getCurrentTeamId } from "../figma_app/598018";
import { registerModal } from "../905/102752";
import { Dd } from "../905/519092";
import { n as _$$n } from "../905/316557";
import { s1 } from "../figma_app/226737";
export function $$f1(e) {
  return e === _YF.SLIDES && !AppStateTsApi?.slideThemeLibBindings().doesSlideDeckUseSameTheme();
}
export function $$_0({
  source: e,
  onSubmit: t,
  onCancel: i,
  dispatch: n
}) {
  n(showModalHandler({
    type: A,
    data: {
      source: e,
      onSubmit: () => {
        n(hideSpecificModal(A));
        t();
      },
      onCancel: () => {
        n(hideSpecificModal(A));
        i();
      }
    }
  }));
}
let A = registerModal(function ({
  source: e,
  onSubmit: t,
  onCancel: i
}) {
  let a = s1();
  let l = getCurrentTeamId();
  let p = useCurrentUserOrgId();
  let [f, _] = useState(a);
  let A = useCallback(() => {
    let e = AppStateTsApi?.slideThemeLibBindings().insertDefaultLocalTheme(ThemeMode.LIGHT, "Template style");
    e && _(e);
  }, []);
  return jsx(TrackingProvider, {
    name: "Slides Template Theme Picker Modal",
    properties: {
      source: e,
      teamId: l,
      orgId: p
    },
    children: jsx(Dd, {
      title: getI18nString("slides.templates.modal.theme_picker.header"),
      minWidth: 320,
      maxWidth: 320,
      confirmText: getI18nString("slides.templates.modal.theme_picker.choose_theme_button"),
      onSubmit: () => {
        AppStateTsApi?.slideThemeLibBindings().detachThemesForTemplatePublish(f);
        t();
      },
      onCancel: i,
      children: jsxs("div", {
        children: [renderI18nText("slides.templates.modal.theme_picker.body"), jsx(_$$n, {
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