import { jsx } from "react/jsx-runtime";
import { APILoadingStatus } from "../905/520829";
import { LoadingSpinner } from "../figma_app/858013";
function s(e) {
  return e.isLoading ? jsx("div", {
    className: e.className,
    children: jsx(LoadingSpinner, {})
  }) : e.children();
}
function o(e) {
  switch (e.state.status) {
    case APILoadingStatus.FAILURE:
      if (e.failure) return jsx(e.failure, {});
      return jsx("div", {
        className: e.className,
        children: jsx(LoadingSpinner, {})
      });
    case APILoadingStatus.LOADING:
      return jsx("div", {
        className: e.className,
        children: jsx(LoadingSpinner, {})
      });
    case APILoadingStatus.SUCCESS:
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