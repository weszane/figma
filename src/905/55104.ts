import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { nt } from "../figma_app/858013";
import { B as _$$B } from "../905/295520";
export function $$o0(e) {
  let {
    onShouldFetchNextPage,
    children
  } = e;
  let o = function (e, t) {
    let [i] = useState([Symbol()]);
    return _$$B(i, e, void 0).get(i[0]);
  }(useCallback(({
    isIntersecting: i
  }) => {
    i && !e.isFetchingNextPage && onShouldFetchNextPage();
  }, [onShouldFetchNextPage, e.isFetchingNextPage]));
  return jsxs(Fragment, {
    children: [children, e.isFetchingNextPage && jsx("span", {
      className: "x1yidqsj",
      children: jsx(nt, {})
    }), jsx("div", {
      ref: o,
      style: {
        paddingBottom: e.paddingBottom,
        height: "1px"
      }
    })]
  });
}
export const B = $$o0;