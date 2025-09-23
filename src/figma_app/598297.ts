import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { zK } from "../figma_app/913823";
import { selectCurrentFile } from "../figma_app/516028";
import { isNullOrFailure, useIsLoaded } from "../905/18797";
import { generateRetrievingSubscribedComponentsKey } from "../905/92359";
export function $$d1({
  disabled: e = !1
} = {}) {
  let t = useDispatch();
  let r = selectCurrentFile();
  let c = useSelector(e => e.fileVersion);
  let u = useSelector(e => e.loadingState);
  let p = useRef(0);
  let _ = null != r && null != c ? generateRetrievingSubscribedComponentsKey(r.key) : void 0;
  useEffect(() => {
    !e && null != _ && isNullOrFailure(u, _) && p.current < 3 && (p.current += 1, t(zK()));
  }, [t, _, u, e]);
  return {
    isLoaded: useIsLoaded(_ ?? "") && !!_
  };
}
export let $$c0 = $$d1;
export const b = $$c0;
export const y = $$d1;