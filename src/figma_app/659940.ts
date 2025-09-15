import { useDispatch, useSelector } from "react-redux";
import { dR } from "../905/508367";
import { customHistory } from "../905/612521";
import { AUTH_INIT } from "../905/194276";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { x } from "../905/749159";
import { ao } from "../figma_app/598952";
export function $$u0() {
  let e = useDispatch();
  return ({
    origin: t,
    formState: r
  }) => {
    e(AUTH_INIT({
      origin: t,
      formState: r,
      redirectUrl: dR(customHistory.location.pathname, {
        [ao.key]: ao.value
      }),
      signedUpFromOpenSession: !0
    }));
    e(showModalHandler({
      type: x,
      data: {
        headerText: getI18nString("fullscreen.toolbar.to_save_this_board_create_an_account")
      }
    }));
  };
}
export let $$p1 = () => useSelector(e => !!e.openFile?.isTryFile);
export const B = $$u0;
export const N = $$p1;