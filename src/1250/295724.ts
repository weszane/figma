import { useDispatch } from "react-redux";
import { V } from "../905/223767";
import { showModalHandler } from "../905/156213";
if (443 == require.j) { }
export function $$o0(e, t) {
  let n = useDispatch();
  return () => n(showModalHandler({
    type: V,
    data: {
      upsellSource: t,
      teamId: e,
      openCheckoutInNewTab: !0
    }
  }));
}
export const y = $$o0;
