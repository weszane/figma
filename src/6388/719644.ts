import { jsx } from "react/jsx-runtime";
import { bL } from "../905/867927";
import { q } from "../905/932270";
import { cssBuilderInstance } from "../cssbuilder/589278";
export function $$i0({
  legend: e,
  value: t,
  onChange: l,
  recordingKey: i,
  children: a
}) {
  return jsx("div", {
    className: cssBuilderInstance.py4.pr8.pl16.$,
    children: jsx(bL, {
      legend: jsx(q, {
        children: e
      }),
      value: t,
      onChange: l,
      recordingKey: i,
      children: a
    })
  });
}
export const M = $$i0;