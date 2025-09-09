import { jsx, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { d as _$$d } from "../905/976845";
import { A } from "../905/891805";
import { generateRecordingKey } from "../figma_app/878298";
import { E } from "../905/277716";
import { k } from "../905/582200";
import { renderI18nText, getI18nString } from "../905/303541";
import { Rb } from "../figma_app/852050";
import { n as _$$n } from "../905/971006";
import { Ib } from "../905/129884";
import { x as _$$x } from "../905/346809";
import { Zk, fI } from "../figma_app/626177";
import { y } from "../905/855374";
function b(e) {
  return e.modalShown?.type === y.type || e.modalShown?.prevModal?.type === y.type;
}
export function $$_0() {
  let e = _$$n({
    type: y
  });
  let t = useCallback(() => {
    e();
  }, [e]);
  let n = useSelector(b);
  let _ = 0 === Rb().length && !n;
  return jsx(k, {
    name: "local_variables_panel",
    children: jsx(Zk, {
      children: jsxs(fI, {
        className: _ ? "local_variables_panel--localVariablesPanelRowFaded--atToe local_variables_panel--localVariablesPanelRow--zR8nJ draggable_list--panelHeaderRowFaded--kETRR" : "local_variables_panel--localVariablesPanelRow--zR8nJ",
        children: [jsx(_$$x, {
          className: "local_variables_panel--titleText--7rdD7 draggable_list--panelTitleText--SwKez",
          onClick: t,
          "data-onboarding-key": "local-variables-panel-title",
          children: renderI18nText("variables.local_variables_panel.local_variables_title")
        }), jsx(E, {
          name: "variables_modal_button",
          children: jsx(_$$d, {
            onClick: t,
            recordingKey: generateRecordingKey("localVariablesPanel", "variablesModalButton"),
            "aria-expanded": n,
            "aria-label": getI18nString("variables.local_variables_panel.open_variables_button_tooltip"),
            htmlAttributes: {
              "data-tooltip": getI18nString("variables.local_variables_panel.open_variables_button_tooltip"),
              "data-tooltip-type": Ib.TEXT
            },
            children: jsx(A, {})
          })
        })]
      })
    })
  });
}
export const B = $$_0;
