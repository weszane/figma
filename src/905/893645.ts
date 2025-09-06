import { jsx } from "react/jsx-runtime";
import { useCallback, useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { renderI18nText } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { A as _$$A } from "../905/956262";
import { M } from "../905/152487";
import { on } from "../905/425180";
export function $$u0(e) {
  let {
    steps,
    onComplete
  } = e;
  let {
    currentStep,
    next,
    reset
  } = _$$A({
    numSteps: steps.length,
    onComplete: () => h("done_button_clicked")
  });
  let h = useCallback(e => {
    onComplete(e);
    reset();
  }, [onComplete, reset]);
  let g = e.steps[currentStep];
  let f = currentStep === e.steps.length - 1;
  let _ = g?.onStepShow;
  useEffect(() => {
    _?.();
  }, [_]);
  let A = g?.whenTargetLost ?? "next";
  let y = g?.fixedPosition;
  let b = useCallback(() => {
    if (!y) switch (A) {
      case "complete":
        return h("target_lost");
      case "move_to_center":
        return;
      case "next":
        if (f) return h("target_lost");
        return next();
      default:
        throwTypeError(A);
    }
  }, [y, A, f, next, h]);
  if (!g) {
    h("no_step_error");
    return null;
  }
  let v = f ? {
    label: g.primaryCtaLabel ?? renderI18nText("rcs.rcs_shared.done"),
    type: "button",
    onClick: next,
    ctaTrackingDescriptor: _$$c.DONE
  } : {
    label: g.primaryCtaLabel ?? renderI18nText("rcs.rcs_shared.next"),
    type: "button",
    onClick: next,
    ctaTrackingDescriptor: _$$c.NEXT
  };
  return jsx(M, {
    isShowing: e.isShowing,
    testId: e.testId,
    userFlagOnShow: e.userFlagOnShow,
    children: jsx(on, {
      ...g,
      onClose: () => h("close_button_clicked"),
      primaryCta: v,
      stepCounter: {
        stepNum: currentStep + 1,
        totalNumSteps: e.steps.length
      },
      ...(g.fixedPosition ? {} : {
        onTargetLost: b
      })
    })
  });
}
export const WZ = $$u0;