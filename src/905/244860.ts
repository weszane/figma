import { useContext, useMemo } from 'react';
import { jsx } from 'react/jsx-runtime';
import { selectWithShallowEqual } from '../905/103090';
import { l as _$$l } from '../905/331642';
import { i as _$$i, U } from '../905/649519';
import { mapToSlotSymbolType } from '../figma_app/164212';
import { Kq } from '../figma_app/462397';
import { selectContainingInstance, selectContainingStateGroupId, selectContainingSymbolId } from '../figma_app/505098';
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
  let g = selectWithShallowEqual(e => selectContainingStateGroupId(e) ?? selectContainingSymbolId(e));
  let f = useMemo(() => Kq(!!VariableAndComponentPropCreateModalRoot, !!g, m), [VariableAndComponentPropCreateModalRoot, g, m]);
  let _ = !!selectWithShallowEqual(e => selectContainingInstance(e));
  if (!f || !VariableAndComponentPropCreateModalRoot || _) {
    return jsx(U, {
      initialPosition: t,
      initialValue: i,
      initialWidth: _$$i,
      resolvedType: e,
      onCreateVariable: p,
      onClose: u
    });
  }
  {
    let r = mapToSlotSymbolType(m);
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