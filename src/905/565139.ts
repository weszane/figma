import { jsxs, jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { C } from "../905/520159";
import { getI18nString } from "../905/303541";
export function $$o0({
  children: e,
  assetOrFileName: t,
  onBack: i
}) {
  return jsxs("div", {
    className: "asset_file_view_header--header--vxOMP",
    children: [jsx("div", {
      className: "asset_file_view_header--backCaret--4RyfR",
      children: jsx(K, {
        onClick: i,
        "aria-label": getI18nString("design_systems.libraries_modal.back"),
        children: jsx(C, {})
      })
    }), jsx("div", {
      className: "asset_file_view_header--name--gCscf ellipsis--ellipsis--Tjyfa text--fontPos14--OL9Hp text--_fontBase--QdLsd",
      children: t
    }), e]
  });
}
export const i = $$o0;