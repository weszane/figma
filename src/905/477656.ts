import { jsx, jsxs } from "react/jsx-runtime";
import { lQ } from "../905/934246";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { t as _$$t, tx } from "../905/303541";
import { Ce } from "../905/156213";
import { qK } from "../905/102752";
export let $$p0 = "no-shared-instance-in-master-file-if-deleted";
function m(e) {
  let t = hS({
    onClose: lQ,
    open: !0,
    preventUserClose: !0
  });
  return jsx(bL, {
    manager: t,
    width: "md",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: _$$t("design_systems.instance_panel.oops")
        })
      }), jsx(nB, {
        children: tx("design_systems.instance_panel.deleted_source_component_message")
      }), jsx(wi, {
        children: jsx(jk, {
          children: jsx($n, {
            onClick: () => {
              e.dispatch(Ce());
            },
            variant: "primary",
            children: tx("design_systems.instance_panel.ok")
          })
        })
      })]
    })
  });
}
qK($$p0, e => jsx(m, {
  ...e
}));
export const Q = $$p0;