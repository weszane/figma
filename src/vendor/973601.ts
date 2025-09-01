import { Bi, X1 } from "../vendor/832351";
import { b } from "../vendor/761747";
import { v } from "../vendor/272995";
export function $$i0(e) {
  let {
    description,
    errorMessage,
    isInvalid,
    validationState
  } = e;
  let {
    labelProps,
    fieldProps
  } = function (e) {
    let {
      id,
      label,
      "aria-labelledby": r,
      "aria-label": i,
      labelElementType = "label"
    } = e;
    t = Bi(id);
    let l = Bi();
    let s = {};
    label && (r = r ? `${l} ${r}` : l, s = {
      id: l,
      htmlFor: "label" === labelElementType ? id : void 0
    });
    return {
      labelProps: s,
      fieldProps: b({
        id,
        "aria-label": i,
        "aria-labelledby": r
      })
    };
  }(e);
  let d = X1([!!description, !!errorMessage, isInvalid, validationState]);
  let c = X1([!!description, !!errorMessage, isInvalid, validationState]);
  return {
    labelProps,
    fieldProps: s = v(fieldProps, {
      "aria-describedby": [d, c, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
    }),
    descriptionProps: {
      id: d
    },
    errorMessageProps: {
      id: c
    }
  };
}
export const M = $$i0;