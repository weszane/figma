import { useDispatch, useSelector } from "../vendor/514228";
import { dR } from "../905/508367";
import { Ay } from "../905/612521";
import { Ts } from "../905/194276";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { x } from "../905/749159";
import { ao } from "../figma_app/598952";
export function $$u0() {
  let e = useDispatch();
  return ({
    origin: t,
    formState: r
  }) => {
    e(Ts({
      origin: t,
      formState: r,
      redirectUrl: dR(Ay.location.pathname, {
        [ao.key]: ao.value
      }),
      signedUpFromOpenSession: !0
    }));
    e(to({
      type: x,
      data: {
        headerText: _$$t("fullscreen.toolbar.to_save_this_board_create_an_account")
      }
    }));
  };
}
export let $$p1 = () => useSelector(e => !!e.openFile?.isTryFile);
export const B = $$u0;
export const N = $$p1;