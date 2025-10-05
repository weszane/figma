import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { LoadingSpinner } from "../905/443820";
export function $$s0({
  containerClassName: e
}) {
  let [t, i] = useState(!1);
  return (useEffect(() => {
    let e = setTimeout(() => i(!0), 250);
    return () => clearTimeout(e);
  }, []), t) ? jsx("div", {
    className: e,
    children: jsx(LoadingSpinner, {
      size: "sm"
    })
  }) : null;
}
export const e = $$s0;