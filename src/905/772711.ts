import { useEffect } from "react";
import { getIsIOS } from "../figma_app/778880";
let a = "use_prevent_scroll_mobile--disableBodyScroll--W-dt5";
export function $$s0() {
  useEffect(() => {
    let e = document.getElementById("react-page");
    if (e && getIsIOS()) {
      e?.classList.add(a);
      return () => {
        let e = document.getElementById("react-page");
        e?.classList.remove(a);
      };
    }
  }, []);
}
export const h = $$s0;