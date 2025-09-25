import { useSetAtom } from 'jotai/react';
import { useEffect, useMemo, useRef } from 'react';
import { normalizeValue } from '../905/216495';
import { useSelectionPropertyValue } from '../905/275640';
import { selectCurrentUser } from '../905/372672';
import { getObservableValue } from '../figma_app/84367';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { b } from '../figma_app/203891';
import { GR } from '../figma_app/229710';
import { useAppModelProperty } from '../figma_app/722362';
import { getPropertiesPanelTab } from '../figma_app/741237';
import { AppStateTsApi } from '../figma_app/763686';
export function $$m0() {
  let e = useAppModelProperty('showUi');
  let t = useAppModelProperty('isReadOnly');
  return !!selectCurrentUser() && e && t;
}
export function $$g1() {
  return getObservableValue(AppStateTsApi?.propertiesPanelState().shownPropertiesPanels, []);
}
export function $$f3() {
  let e = useSetAtom(b);
  let t = useRef(null);
  let r = useSelectionPropertyValue('productComponentGUIDBackingInstances');
  let i = normalizeValue(r);
  let s = useDeepEqualSceneValue((e, t) => {
    if (t) {
      let r = e.get(t);
      return r?.simplifyInstancePanels ?? !1;
    }
    return !1;
  }, i);
  useEffect(() => {
    if (t.current !== i) {
      t.current = i;
      let r = GR.DEFAULT_EXPANDED;
      i !== null && s && (r = GR.DEFAULT_SIMPLIFIED);
      e(r);
    }
  }, [i, s, e]);
}
export function $$E2({
  defaultTab: e,
  getActiveTab: t
}) {
  let r = getObservableValue(getPropertiesPanelTab(), e);
  let i = useMemo(() => t(r), [t, r]);
  useEffect(() => {
    i !== r && getPropertiesPanelTab()?.set(i);
  }, [i, r]);
  return i;
}
export const G$ = $$m0;
export const GV = $$g1;
export const P5 = $$E2;
export const S2 = $$f3;