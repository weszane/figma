import { registerModal } from "../905/102752";
import { jsxs, jsx } from "react/jsx-runtime";
import { s_ } from "../905/17223";
import { renderI18nText } from "../905/303541";
import { d_ } from "../figma_app/918700";
export let $$o0 = registerModal(function (e) {
  return jsxs(d_, {
    className: "mobile_community_not_supported_modal--modalContainer--w3MfK",
    children: [jsx(s_, {
      dispatch: e.dispatch
    }), jsx("div", {
      className: "mobile_community_not_supported_modal--modalBody--b01dg text--fontPos16--oMC-G text--_fontBase--QdLsd",
      children: renderI18nText("community.plugins.try_it_out_mobile_not_supported")
    })]
  });
}, " MobileCommunityActionNotSupportedModal");
export const x = $$o0;