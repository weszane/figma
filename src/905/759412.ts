import { xb } from "../figma_app/465776";
import { A } from "../905/920142";
import { t as _$$t } from "../905/303541";
var $$s0 = (e => (e.DAY = "24_hours", e.WEEK = "7_days", e.CUSTOM = "custom", e))($$s0 || {});
var $$o1 = (e => (e.TWENTY_SEC = "20_seconds", e.CURRENT = "current", e.DAY = "24_hours", e.WEEK = "7_days", e.CUSTOM = "custom", e))($$o1 || {});
export function $$l2(e, t) {
  switch (t) {
    case "24_hours":
    case "24_hours":
      return p(e.clone().add(24, "h"));
    case "7_days":
    case "7_days":
      return p(e.clone().add(7, "d"));
    default:
      return A();
  }
}
export function $$d9(e, t) {
  let i = t.diff(e, "hours");
  if (i < 1) {
    let i = t.diff(e, "minutes");
    return {
      num: i < 1 ? 1 : i,
      unit: "minute"
    };
  }
  if (i < 24) return {
    num: i,
    unit: "hour"
  };
  let n = Math.ceil(i / 24);
  return n % 30 == 0 ? {
    num: Math.floor(n / 30),
    unit: "month"
  } : n % 7 == 0 ? {
    num: Math.floor(n / 7),
    unit: "week"
  } : {
    num: n,
    unit: "day"
  };
}
export function $$c12(e, t) {
  let {
    num,
    unit
  } = $$d9(e, t);
  switch (unit) {
    case "minute":
      return _$$t("permissions_modal.file_share_settings.minute_text", {
        num
      });
    case "hour":
      return _$$t("permissions_modal.file_share_settings.hour_text", {
        num
      });
    case "day":
      return _$$t("permissions_modal.file_share_settings.day_text", {
        num
      });
    case "week":
      return _$$t("permissions_modal.file_share_settings.week_text", {
        num
      });
    case "month":
      return _$$t("permissions_modal.file_share_settings.month_text", {
        num
      });
    default:
      xb(unit);
  }
}
export function $$u6(e, t = !1) {
  return t ? e.startOf("hour") : e.clone().add(30, "minutes").startOf("hour");
}
function p(e, t = !1) {
  return e.clone().add(30, "seconds").startOf("minute");
}
export function $$m10(e) {
  return e.format("LT");
}
export function $$h5(e) {
  return e.format("YYYY-MM-DD");
}
export function $$g8(e) {
  return e.format("HH:mm");
}
export function $$f4(e, t) {
  return A(e + " " + t, "YYYY-MM-DD HH:mm");
}
export function $$_3(e, t) {
  let i = e.isSame(A().add(1, "day"), "day");
  let n = $$m10(e);
  if (i && !t) return _$$t("file_access_row.expiration.24_hours.timestamp", {
    time: n
  });
  let s = e.toDate().toLocaleDateString(e.locale(), {
    weekday: t ? "long" : "short",
    month: "short",
    day: "numeric"
  });
  return A().isSame(e, "year") ? _$$t("file_access_row.expiration.date.timestamp", {
    date: s,
    time: n
  }) : e.format("L LT");
}
export function $$A7(e) {
  return e && !e.accessReverted && e.expiresAt ? e.expiresAt : null;
}
export function $$y11(e) {
  return e < 24 || e % 24 != 0 ? _$$t("file_access_row.expiration.past_org_limit_hours", {
    count: e
  }) : _$$t("file_access_row.expiration.past_org_limit_days", {
    count: e / 24
  });
}
export const $j = $$s0;
export const Dp = $$o1;
export const Fn = $$l2;
export const M3 = $$_3;
export const U = $$f4;
export const W7 = $$h5;
export const cH = $$u6;
export const d4 = $$A7;
export const hP = $$g8;
export const lX = $$d9;
export const ml = $$m10;
export const nM = $$y11;
export const yJ = $$c12;