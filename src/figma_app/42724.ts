import { useState, useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { A } from "../905/920142";
import { Ay } from "../905/612521";
import { Ts } from "../905/194276";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { q5 } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { x } from "../905/749159";
export function $$_1(e) {
  let t = q5()?.name;
  let r = _6();
  let n = useDispatch();
  return ({
    origin: i,
    formState: a
  }) => {
    let c = e || ("DUPLICATE" === r.landingState && t ? getI18nString("footer_banner.log_in_or_create_an_account_to_get_a_copy_of_file_name", {
      fileName: t
    }) : "");
    n(Ts({
      origin: i,
      formState: a,
      redirectUrl: Ay.location.pathname
    }));
    n(showModalHandler({
      type: x,
      data: {
        headerText: c
      }
    }));
  };
}
function h(e) {
  let t = A();
  let r = Math.max(0, Math.ceil(A(e).diff(t, "minutes", !0)));
  if (r >= 60) {
    let e = Math.ceil(r / 60);
    return getI18nString("figjam_try_v2.timer_hours_left", {
      hoursLeft: e
    });
  }
  return getI18nString("figjam_try_v2.timer_minutes_left", {
    minutesLeft: r
  });
}
export function $$m0(e, t) {
  let [r, i] = useState(h((() => {
    let e = new Date();
    e.setDate(e.getDate() + 1);
    return e;
  })()));
  useEffect(() => {
    if (!e || !t.enabled) return;
    let r = () => i(h(t.until));
    r();
    let n = setInterval(r, 6e4);
    return () => clearInterval(n);
  }, [e, t]);
  return r;
}
export const I4 = $$m0;
export const Y9 = $$_1;