import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLatestRef } from "../figma_app/922077";
import { FlashActions } from "../905/573154";
export function $$o0(e, t, i = 5e3) {
  let l = useDispatch();
  let d = useLatestRef(e.status);
  let {
    status,
    errors
  } = e;
  useEffect(() => {
    let e;
    "errors" === status && "errors" !== d && ("object" == typeof errors && errors && "data" in errors && errors.data && "object" == typeof errors.data && "message" in errors.data && "string" == typeof errors.data.message && (e = errors.data?.message ?? void 0), l(FlashActions.error(e || t, i)), console.error(errors));
  }, [status, d, errors, l, t, i]);
}
export const i = $$o0;