import { jsx } from "react/jsx-runtime";
import { useContext, useMemo } from "react";
import { selectWithShallowEqual } from "../905/103090";
import { mv } from "../figma_app/164212";
import { Nw, y7, UR } from "../figma_app/505098";
import { l as _$$l } from "../905/331642";
import { U, i as _$$i } from "../905/649519";
import { Kq } from "../figma_app/462397";
export function $$u0({
  resolvedType: e,
  creationModalInitialPosition: t,
  newVariableInitialValue: i,
  onClose: u,
  onVariableSelected: p,
  fields: m
}) {
  let {
    VariableAndComponentPropCreateModalRoot
  } = useContext(_$$l) ?? {};
  let g = selectWithShallowEqual(e => Nw(e) ?? y7(e));
  let f = useMemo(() => Kq(!!VariableAndComponentPropCreateModalRoot, !!g, m), [VariableAndComponentPropCreateModalRoot, g, m]);
  let _ = !!selectWithShallowEqual(e => UR(e));
  if (!f || !VariableAndComponentPropCreateModalRoot || _) return jsx(U, {
    initialPosition: t,
    initialValue: i,
    initialWidth: _$$i,
    resolvedType: e,
    onCreateVariable: p,
    onClose: u
  });
  {
    let r = mv(m);
    return jsx(VariableAndComponentPropCreateModalRoot, {
      initialPosition: t,
      initialVariableValue: i,
      resolvedType: e,
      onCreateVariable: p,
      onClose: u,
      refField: r
    });
  }
}
export const x = $$u0;