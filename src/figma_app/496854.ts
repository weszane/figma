import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { hr } from "../905/352022";
import { FPlanNameType } from "../figma_app/191312";
export function $$o1() {
  let e = useSelector(e => e.plans);
  let t = useDispatch();
  useEffect(() => {
    t(hr({
      loadedPlans: e
    }));
  }, [t, e]);
  return e.filter(e => e.tier !== FPlanNameType.STUDENT && e.tier !== FPlanNameType.STARTER);
}
export function $$l0() {
  return $$o1().length > 0;
}
export const h = $$l0;
export const j = $$o1;
