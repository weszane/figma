import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useMemoShallow } from "../905/19536";
import { getI18nString } from "../905/303541";
import { q3 } from "../figma_app/450829";
import { i } from "../905/559280";
import { M } from "../905/152487";
export function $$c0(e) {
  let {
    isShowing,
    onClickPrimaryCta,
    onClose,
    onManualDismiss,
    testId,
    additionalOnExplicitDismiss,
    userFlagOnShow,
    ...g
  } = e;
  let f = useMemoShallow(() => function (e) {
    if (e.modalType === q3.DRAGGABLE) {
      let {
        currentStepIndex,
        totalNumSteps
      } = e;
      let n = currentStepIndex === totalNumSteps - 1;
      return {
        ...e,
        ctaText: e.ctaText || (n ? getI18nString("rcs.rcs_shared.done") : getI18nString("rcs.rcs_shared.next")),
        stepCounter: e.totalNumSteps > 1 ? getI18nString("rcs.rcs_shared.step_counter", {
          currentStepNum: currentStepIndex + 1,
          totalNumSteps
        }) : void 0
      };
    }
    return e;
  }(g), [g]);
  let _ = useDispatch();
  return jsx(M, {
    userFlagOnShow,
    isShowing,
    testId,
    children: jsx(i, {
      step: f,
      onClickPrimaryCta,
      onClose,
      dismissModal: onManualDismiss,
      dispatch: _,
      additionalOnExplicitDismiss
    })
  });
}
export const h = $$c0;