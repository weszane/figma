import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, Suspense } from "react";
import { ServiceCategories as _$$e } from "../905/165054";
import { useModalManager } from "../905/437088";
import { bL } from "../905/38914";
import { vo, r1, nB } from "../figma_app/272243";
import { tH } from "../905/751457";
import { reportError } from "../905/11";
import { N } from "../905/809096";
import { getI18nString } from "../905/303541";
import { delay } from "../905/236856";
import { handleSuspenseRetainRelease } from "../figma_app/566371";
import { M4, IT } from "../905/713695";
function f() {
  return getI18nString("billing.purchase_ai_credits.modal_hidden_title");
}
function E() {
  return jsx(N, {
    hiddenTitle: f(),
    estimatedWidth: 480,
    estimatedHeight: 480
  });
}
function _(e) {
  useEffect(() => {
    reportError(_$$e.BILLING_EXPERIENCE, Error("failed to load PurchaseAiCreditsModal"), {
      extra: {
        reason: e.reason
      }
    });
  }, [e.reason]);
  return jsx(E, {});
}
let I = M4.Query({
  fetch: () => delay(1e3).then(() => ({}))
});
function C(e) {
  let r = useModalManager(e);
  return "loaded" !== function () {
    let [e] = IT(I({}));
    let [r] = handleSuspenseRetainRelease(e);
    useEffect(() => {
      "loaded" !== r.status && reportError(_$$e.BILLING_EXPERIENCE, Error("usePurchaseAiCreditsData failed to load"));
    }, [r.status]);
    return r;
  }().status ? jsx(_, {
    reason: "data_load_error"
  }) : jsx(bL, {
    manager: r,
    width: 480,
    children: jsxs(vo, {
      children: [jsx(r1, {
        children: f()
      }), jsx(nB, {
        children: jsx("div", {
          style: {
            height: 480
          }
        })
      })]
    })
  });
}
export function $$m0(e) {
  return jsx(tH, {
    boundaryKey: "PurchaseAiCreditsModal",
    team: _$$e.BILLING_EXPERIENCE,
    fallback: jsx(_, {
      reason: "error_boundary"
    }),
    children: jsx(Suspense, {
      fallback: jsx(E, {}),
      children: jsx(C, {
        ...e
      })
    })
  });
}
export const PurchaseAiCreditsModal = $$m0;