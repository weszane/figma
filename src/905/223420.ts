import { jsx } from "react/jsx-runtime";
import { K } from "../905/443068";
import { C } from "../905/520159";
import { t as _$$t } from "../905/303541";
import { cq } from "../905/794154";
export function $$l0({
  beforeBack: e,
  recordingKey: t
}) {
  let {
    pop
  } = cq();
  return jsx(K, {
    onClick: function () {
      e?.();
      pop();
    },
    "aria-label": _$$t("qa.go_back"),
    recordingKey: t,
    children: jsx(C, {})
  });
}
export const o = $$l0;