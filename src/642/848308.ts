import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../905/521428";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { n5, zE, HF } from "../figma_app/646357";
import { selectSceneGraphSelectionKeys } from "../figma_app/889655";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { dD } from "../905/519113";
import { RR } from "../905/514666";
import { z } from "../905/454433";
function g() {
  let e = useSelector(e => e.library.local);
  let t = useSelector(selectSceneGraphSelectionKeys);
  let s = useMemo(() => {
    let s = new Set();
    for (let r of t) {
      let t = n5(r, e);
      t && (t.type === PrimaryWorkflowEnum.COMPONENT || t.type === PrimaryWorkflowEnum.STATE_GROUP) && !zE(t) ? s.add(t.node_id) : t && t.type === PrimaryWorkflowEnum.MODULE && s.add(t.node_id);
    }
    return s;
  }, [e, t]);
  let r = useDispatch();
  let l = useCallback(() => {
    r(showModalHandler({
      type: dD,
      data: {
        initiallyCheckedItemIDs: s,
        entrypoint: RR.PROPERTIES_PANEL
      }
    }));
  }, [r, s]);
  return {
    validNodeIds: s,
    onClick: l
  };
}
export function $$f0() {
  let {
    validNodeIds,
    onClick
  } = g();
  let s = useSelector(e => e.library.local);
  let n = useSelector(selectSceneGraphSelectionKeys).some(e => {
    let t = n5(e, s);
    return t && !HF(t.status);
  });
  return validNodeIds.size ? jsx(Button, {
    variant: "secondary",
    onClick,
    children: n ? getI18nString("design_systems.updates.publish") : getI18nString("design_systems.component_panel.publish_new_changes")
  }) : null;
}
export function $$$$x1() {
  let {
    validNodeIds,
    onClick
  } = g();
  return validNodeIds.size ? jsx(z, {
    onClick,
    children: getI18nString("design_systems.component_panel.publish_new_changes")
  }) : null;
}
export const U = $$f0;
export const x = $$$$x1;