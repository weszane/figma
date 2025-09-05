import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { $n } from "../905/521428";
import { t } from "../905/303541";
import { to } from "../905/156213";
import { n5, zE, HF } from "../figma_app/646357";
import { Sh } from "../figma_app/889655";
import { PW } from "../figma_app/633080";
import { dD } from "../905/519113";
import { RR } from "../905/514666";
import { z } from "../905/454433";
function g() {
  let e = useSelector(e => e.library.local);
  let t = useSelector(Sh);
  let s = useMemo(() => {
    let s = new Set();
    for (let r of t) {
      let t = n5(r, e);
      t && (t.type === PW.COMPONENT || t.type === PW.STATE_GROUP) && !zE(t) ? s.add(t.node_id) : t && t.type === PW.MODULE && s.add(t.node_id);
    }
    return s;
  }, [e, t]);
  let r = useDispatch();
  let l = useCallback(() => {
    r(to({
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
  let n = useSelector(Sh).some(e => {
    let t = n5(e, s);
    return t && !HF(t.status);
  });
  return validNodeIds.size ? jsx($n, {
    variant: "secondary",
    onClick,
    children: n ? t("design_systems.updates.publish") : t("design_systems.component_panel.publish_new_changes")
  }) : null;
}
export function $$$$x1() {
  let {
    validNodeIds,
    onClick
  } = g();
  return validNodeIds.size ? jsx(z, {
    onClick,
    children: t("design_systems.component_panel.publish_new_changes")
  }) : null;
}
export const U = $$f0;
export const x = $$$$x1;