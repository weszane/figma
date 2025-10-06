import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { createRegisterMenuEvent } from "../905/498709";
import { showDropdownThunk, hideDropdownAction } from "../905/929976";
import { A } from "../1250/278368";
let $$l0 = "FILE_BROWSER_PLAN_SWITCHER";
let {
  close,
  open,
  useRegisterMenu
} = createRegisterMenuEvent();
export function $$u1() {
  let e = useDispatch();
  return {
    open: useCallback(() => {
      A() ? open() : e(showDropdownThunk({
        type: $$l0
      }));
    }, [e]),
    close: useCallback(() => {
      A() ? close() : e(hideDropdownAction());
    }, [e])
  };
}
export let $$m2 = 443 == require.j ? useRegisterMenu : null;
export const Fw = $$l0;
export const OC = $$u1;
export const Tb = $$m2;