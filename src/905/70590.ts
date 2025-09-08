import { jsx } from "react/jsx-runtime";
import { VariableDataType } from "../figma_app/763686";
import { h } from "../905/65944";
export function $$s0({
  disabledVariableIds: e,
  boundVariable: t,
  variableValue: i,
  initialPosition: s,
  initialView: o,
  recordingKey: l,
  onColorChange: d,
  onVariableSelected: c,
  onClose: u
}) {
  let p = i.type === VariableDataType.COLOR ? i.value : {
    r: 1,
    g: 1,
    b: 1,
    a: 1
  };
  return jsx(h, {
    color: p,
    disabledVariableIds: e,
    initialPosition: s,
    initialView: o,
    boundVariable: t,
    recordingKey: l,
    onChange: d,
    onVariableChange: c,
    onClose: u
  });
}
export const I = $$s0;