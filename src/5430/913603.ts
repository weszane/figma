import { jsxs, jsx } from "react/jsx-runtime";
import { buildUploadUrl } from "../figma_app/169182";
import { s_ } from "../905/17223";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { LE } from "../905/71785";
import { registerModal } from "../905/102752";
import { ModalContainer } from "../figma_app/918700";
export let $$u0 = registerModal(function (e) {
  let t = getI18nString("rcs.redirect_from_mobile_to_desktop.head_to_figjam_on_desktop");
  let r = getI18nString("community.collections.head_to_desktop");
  let c = buildUploadUrl("f95cfc857cdc5c164958966add0665b69673667c");
  e.editorType === LE.SLIDES && (t = getI18nString("rcs.redirect_from_mobile_to_desktop.head_to_slides_on_desktop"), r = getI18nString("community.collections.head_to_desktop_slides"), c = buildUploadUrl("d5fbdadc97f3d94063357e9819c314ade9055df3"));
  return jsxs(ModalContainer, {
    className: "head_to_desktop_modal--modalContainer--BRiSA",
    children: [jsx(s_, {
      dispatch: e.dispatch
    }), jsx("img", {
      width: "100%",
      alt: r,
      src: c
    }), jsxs("div", {
      className: "head_to_desktop_modal--modalBody--n9Et8 text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: [jsx("h1", {
        className: "head_to_desktop_modal--title--kJAKG text--fontPos18--rYXJb text--_fontBase--QdLsd",
        children: t
      }), jsx("p", {
        children: r
      }), jsx("button", {
        className: "head_to_desktop_modal--gotIt--StOau",
        onClick: () => {
          e.dispatch(hideModal());
        },
        children: renderI18nText("general.got_it")
      })]
    })]
  });
}, " HeadToDesktopModal");
export const s = $$u0;