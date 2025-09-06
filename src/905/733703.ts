import { jsxs, jsx } from "react/jsx-runtime";
import { C } from "../905/520159";
import { getI18nString } from "../905/303541";
export function $$s0(e) {
  return jsxs("div", {
    className: "secondary_header--secondaryHeaderContainer--lavvX",
    children: [jsx("button", {
      className: "secondary_header--icon--RcArC",
      onClick: e.onClick,
      "aria-label": getI18nString("file_permissions_modal.secondary_header.go_back"),
      autoFocus: !0,
      children: jsx(C, {})
    }), jsx("div", {
      className: "secondary_header--secondaryHeaderTitle--6xejS",
      children: e.title
    }), e.rightSideButton]
  });
}
export const w = $$s0;