import { useDispatch } from "react-redux";
import { K } from "../905/498709";
import { j7, oB } from "../905/929976";
import { q } from "../1556/198651";
let $$a0 = "FILE_BROWSER_ACCOUNT_SWITCHER_DROPDOWN";
let {
  open,
  close,
  useRegisterMenu
} = K();
export function $$u1() {
  let e = useDispatch();
  return {
    open: () => {
      q() ? open() : e(j7({
        type: $$a0
      }));
    },
    close: () => {
      q() ? close() : e(oB());
    }
  };
}
export let $$h2 = 443 == require.j ? useRegisterMenu : null;
export const B$ = $$a0;
export const SO = $$u1;
export const T$ = $$h2;
