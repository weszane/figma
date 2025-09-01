import { jsx } from "react/jsx-runtime";
import { r as _$$r } from "../905/520829";
import { kt } from "../figma_app/858013";
function s(e) {
  return e.isLoading ? jsx("div", {
    className: e.className,
    children: jsx(kt, {})
  }) : e.children();
}
function o(e) {
  switch (e.state.status) {
    case _$$r.FAILURE:
      if (e.failure) return jsx(e.failure, {});
      return jsx("div", {
        className: e.className,
        children: jsx(kt, {})
      });
    case _$$r.LOADING:
      return jsx("div", {
        className: e.className,
        children: jsx(kt, {})
      });
    case _$$r.SUCCESS:
      return e.children(e.state.value);
  }
}
export function $$l0(e) {
  return "isLoading" in e ? jsx(s, {
    ...e
  }) : jsx(o, {
    ...e
  });
}
export const x = $$l0;