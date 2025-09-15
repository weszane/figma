import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { dm } from "../905/535224";
import { ButtonSecondary, ButtonBasePrimary } from "../figma_app/637027";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
import { sx } from "../figma_app/957070";
import { yl, DD, jE, v0, Lu, pL } from "../figma_app/639088";
import { A } from "../4711/667326";
export let $$_0 = registerModal(function () {
  let e = useDispatch();
  useEffect(() => {
    e(postUserFlag({
      completed_font_installer_modal: !0
    }));
  }, [e]);
  return jsxs(ModalContainer, {
    className: yl,
    tintedModalBackground: !0,
    children: [jsxs("div", {
      className: DD,
      children: [jsx(SvgComponent, {
        svg: A,
        useOriginalSrcFills_DEPRECATED: !0,
        className: sx
      }), renderI18nText("fullscreen.font_settings.byof_bring_your_own_fonts")]
    }), jsxs("div", {
      className: jE,
      children: [jsx("p", {
        children: renderI18nText("fullscreen.font_settings.figma_comes_preloaded")
      }), jsx("br", {}), jsx("p", {
        children: renderI18nText("fullscreen.font_settings.you_can_always_download_the_font_installer_later_from_the_settings_page")
      })]
    }), jsxs("div", {
      className: v0,
      children: [jsx(ButtonSecondary, {
        className: Lu,
        onClick: () => {
          e(hideModal());
        },
        children: renderI18nText("fullscreen.font_settings.do_this_later_in_account_settings")
      }), jsx(ButtonBasePrimary, {
        onClick: dm,
        className: pL,
        children: renderI18nText("fullscreen.font_settings.enable_local_fonts")
      })]
    })]
  });
}, "fullscreen-font-installer-modal");
export const x = $$_0;