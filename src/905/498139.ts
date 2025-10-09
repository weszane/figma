import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useId, useState, useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { VariableDataType, VariableResolvedDataType, ComponentPropType, VariablesBindings } from "../figma_app/763686";
import { resolveVariableValue } from "../905/929949";
import { parsePxNumber } from "../figma_app/783094";
import { selectWithShallowEqual } from "../905/103090";
import { generateRecordingKey, useHandleFocusEvent } from "../figma_app/878298";
import { renderI18nText, getI18nString } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { useSelectionPropertyValue } from "../905/275640";
import { useDropdownState } from "../905/848862";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { KindEnum } from "../905/129884";
import { DD } from "../905/211095";
import { vS } from "../figma_app/323320";
import { l6, c$ } from "../905/794875";
import { useHandleVariableSelected, useDetachedVariableValue, VariableFormRow, useVariableCreateModalActions, useHideContextMenu, CreateVariableFormInput } from "../figma_app/380814";
import { NF, oz } from "../figma_app/406976";
import { DraggableModalManager } from "../905/748636";
import { i as _$$i } from "../905/649519";
import { resolvedTypeToComponentPropType } from "../figma_app/394327";
import { IconButton } from "../905/443068";
import { U as _$$U } from "../905/708285";
import { useSingleEffect } from "../905/791079";
import { LazyInputForwardRef } from "../905/408237";
import { $ } from "../905/483620";
import { VariableBindingsDropdown } from "../figma_app/260445";
import { I3, gJ } from "../905/923433";
import { _Z, hF, h$, mL, NI } from "../905/306456";
import { dGl } from "../figma_app/27776";
function D({
  recordingKey: e,
  setComponentPropSubmitData: t,
  componentPropSubmitData: i,
  resolvedType: a
}) {
  let s = useRef(null);
  useSingleEffect(() => {
    s.current?.select();
  });
  let l = e => {
    e.type === VariableDataType.ALIAS && e.resolvedType === VariableResolvedDataType.STRING && (e.resolvedType = VariableResolvedDataType.TEXT_DATA);
    t({
      propName: i.propName,
      varValue: e
    });
  };
  let d = useHandleVariableSelected(i.varValue, a, l);
  let c = useDetachedVariableValue(i.varValue);
  return jsxs(Fragment, {
    children: [jsx(VariableFormRow, {
      label: renderI18nText("variables.create_modal.name_label"),
      labelFor: "create-component-prop-name-input",
      input: jsx(LazyInputForwardRef, {
        ref: s,
        autoFocus: !0,
        className: _Z,
        "data-1p-ignore": !0,
        delay: 50,
        id: "create-component-prop-name-input",
        name: "propName",
        onChange: e => {
          t({
            propName: e.target.value,
            varValue: i.varValue
          });
        },
        recordingKey: generateRecordingKey(e, "componentPropNameInput"),
        value: i.propName
      })
    }), jsx(VariableFormRow, {
      label: renderI18nText("variables.create_modal.value_label"),
      labelFor: I3,
      input: jsx("div", {
        className: hF,
        children: jsxs(VariableBindingsDropdown, {
          resolvedType: a,
          variableValue: i.varValue,
          onVariableValueChange: l,
          onVariableSelected: d,
          pickerType: "prop-assignment",
          children: [jsx(gJ, {
            variableValue: i.varValue,
            contextType: $.FORM,
            onChange: l,
            recordingKey: generateRecordingKey(e, "variableValueInput")
          }), c && jsx(IconButton, {
            type: "button",
            "aria-label": getI18nString("variables.authoring_modal.table.detach_alias"),
            onClick: () => l(c),
            recordingKey: generateRecordingKey(e, "detachVariableButton"),
            htmlAttributes: {
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("variables.authoring_modal.table.detach_alias")
            },
            children: jsx(_$$U, {})
          })]
        })
      })
    })]
  });
}
let F = 2 * parsePxNumber(dGl);
var M = (e => (e.COMPONENT_PROP = "Property", e.VARIABLE = "Variable", e))(M || {});
export function $$j0({
  initialPosition: e,
  initialVariableValue: t,
  refField: i,
  resolvedType: r,
  onCreateVariable: a,
  onClose: s,
  componentPropOnly: o
}) {
  NF({
    resolvedType: r
  });
  let {
    onCreateVariableSubmit,
    onCreateComponentPropSubmit
  } = function ({
    onCreateVariable: e,
    onClose: t,
    resolvedType: i,
    refField: n
  }) {
    let {
      onCreateVariableSubmit: _onCreateVariableSubmit
    } = useVariableCreateModalActions({
      onCreateVariable: e,
      onClose: t
    });
    let {
      onCreateComponentPropSubmit: _onCreateComponentPropSubmit
    } = function (e, t, i) {
      let n = resolvedTypeToComponentPropType(t);
      let r = DD({
        propType: n,
        refField: i
      });
      return {
        onCreateComponentPropSubmit: t => {
          r({
            propName: t.propName,
            defaultValue: t.varValue.value,
            varValue: t.varValue
          });
          e();
        }
      };
    }(t, i, n);
    return {
      onCreateVariableSubmit: _onCreateVariableSubmit,
      onCreateComponentPropSubmit: _onCreateComponentPropSubmit
    };
  }({
    onCreateVariable: a,
    onClose: s,
    resolvedType: r,
    refField: i
  });
  return jsx(U, {
    initialPosition: e,
    initialVariableValue: t,
    resolvedType: r,
    refField: i,
    onCreateVariableSubmit,
    onCreateComponentPropSubmit,
    onClose: s,
    componentPropOnly: o,
    recordingKey: "createVariableAndComponentPropModal"
  });
}
function U({
  initialPosition: e,
  initialVariableValue: t,
  resolvedType: i,
  refField: g,
  recordingKey: A,
  onCreateComponentPropSubmit: b,
  onCreateVariableSubmit: w,
  onClose: C,
  componentPropOnly: T
}) {
  let k = useRef(null);
  useHideContextMenu(k);
  let R = useId();
  let [N, P] = useState("Property");
  let M = useCallback(() => "Property" === N, [N]);
  let j = resolvedTypeToComponentPropType(i);
  let U = selectWithShallowEqual(e => vS(e, j, g));
  let V = function (e) {
    let t = useSelector(selectSceneGraphSelectionKeys);
    let i = useSelector(e => {
      let i = t.length ? t[0] : null;
      let n = i ? e.mirror.sceneGraph.get(i) : null;
      return n?.textContent ?? "";
    });
    let n = useSelectionPropertyValue("visible");
    let r = resolvedTypeToComponentPropType(e) === ComponentPropType.BOOL;
    return resolveVariableValue(e, r ? n : i);
  }(i);
  let [G, z] = useState({
    propName: U,
    varValue: V
  });
  let H = t ?? V;
  let [W, K] = useState({
    varName: M() ? U : "",
    varValue: H,
    varSetID: null
  });
  let Y = useMemo(() => M() && G ? G.propName.length > 0 : !!W.varName && VariablesBindings.isValidVariableName(W.varName, W.varSetID ?? null), [G, M, W.varName, W.varSetID]);
  let q = useHandleFocusEvent(A, "submit", e => {
    e?.preventDefault();
    M() && G ? (b(G), G.varValue.type === VariableDataType.ALIAS && oz("component_prop_def", {
      type: VariableDataType.ALIAS,
      resolvedType: G.varValue.resolvedType,
      value: G.varValue.value
    })) : W && w({
      varName: W.varName,
      varValue: W.varValue,
      varSetID: W.varSetID ?? null
    });
  });
  return jsx(DraggableModalManager, {
    title: jsx("h1", {
      className: h$,
      children: T ? renderI18nText("design_systems.component_properties.create_property") : renderI18nText("variables.create_modal.component_property_or_variable_title")
    }),
    initialPosition: e,
    initialWidth: _$$i,
    onClose: C,
    children: jsxs("form", {
      onSubmit: q,
      autoComplete: "no",
      children: [jsx(AutoLayout, {
        direction: "vertical",
        spacing: 0,
        height: "hug-contents",
        ref: k,
        children: jsxs(AutoLayout, {
          direction: "vertical",
          spacing: `${parsePxNumber(dGl)}px`,
          padding: {
            top: F
          },
          height: "hug-contents",
          children: [!T && jsx(VariableFormRow, {
            label: renderI18nText("variables.create.title"),
            labelId: R,
            input: jsx("div", {
              className: hF,
              children: jsx(B, {
                selectedType: N,
                onChange: P,
                ariaLabelledBy: R
              })
            })
          }), M() ? jsx(D, {
            recordingKey: "createComponentPropForm",
            setComponentPropSubmitData: z,
            componentPropSubmitData: G,
            resolvedType: i
          }) : jsx(CreateVariableFormInput, {
            recordingKey: A ?? "",
            initialVarValue: H,
            resolvedType: i,
            setVariableFormSubmitData: K,
            variableFormSubmitData: W
          })]
        })
      }), jsx(AutoLayout, {
        horizontalAlignItems: "end",
        verticalAlignItems: "center",
        padding: 16,
        children: jsx(Button, {
          type: "submit",
          disabled: !Y,
          recordingKey: generateRecordingKey(A, "createButton"),
          htmlAttributes: {
            "data-tooltip": getI18nString("variables.create_modal.invalid_variable_name"),
            "data-tooltip-type": Y ? void 0 : KindEnum.TEXT
          },
          children: M() ? renderI18nText("variables.create_modal.create_component_property") : renderI18nText("variables.create_modal.create_file_variable")
        })
      })]
    })
  });
}
function B({
  selectedType: e,
  onChange: t,
  ariaLabelledBy: i
}) {
  let r = useDispatch<AppDispatch>();
  let s = useDropdownState();
  return jsxs(l6, {
    ariaLabelledBy: i,
    id: "variable-and-component-prop-create-modal-select",
    property: e,
    formatter: {
      format: e => e
    },
    dispatch: r,
    chevronClassName: mL,
    inputClassName: NI,
    dropdownShown: s,
    onChange: e => t(e),
    children: [jsx(c$, {
      value: "Property"
    }), jsx(c$, {
      value: "Variable"
    })]
  });
}
export const NO = $$j0;
