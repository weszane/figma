import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { dayjs } from "../905/920142";
import { customHistory } from "../905/612521";
import { AUTH_INIT } from "../905/194276";
import { getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { selectCurrentFile } from "../figma_app/516028";
import { getSelectedView } from "../figma_app/386952";
import { AuthModal } from "../905/749159";
export function $$_1(e) {
  let t = selectCurrentFile()?.name;
  let r = getSelectedView();
  let n = useDispatch();
  return ({
    origin: i,
    formState: a
  }) => {
    let c = e || ("DUPLICATE" === r.landingState && t ? getI18nString("footer_banner.log_in_or_create_an_account_to_get_a_copy_of_file_name", {
      fileName: t
    }) : "");
    n(AUTH_INIT({
      origin: i,
      formState: a,
      redirectUrl: customHistory.location.pathname
    }));
    n(showModalHandler({
      type: AuthModal,
      data: {
        headerText: c
      }
    }));
  };
}
function h(e) {
  let t = dayjs();
  let r = Math.max(0, Math.ceil(dayjs(e).diff(t, "minutes", !0)));
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