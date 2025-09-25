import { dayjs } from "../905/920142";
import { isValidEmail } from "../figma_app/416935";
export function $$a0(e) {
  let t = new Date();
  return {
    today: dayjs(t).format("YYYY-MM-DD"),
    minDate: dayjs(t).subtract(e || 366, "days").format("YYYY-MM-DD")
  };
}
export function $$s1(e) {
  return e ? dayjs(e).add(1, "day").subtract(1, "second").format() : null;
}
export function $$o2(e, t, r) {
  if (t) for (let e of t) {
    let t = function (e) {
      let t = (e || "").trim();
      return t && !isValidEmail(t) ? {
        message: "An email is invalid",
        field: "email"
      } : null;
    }(e);
    if (t) return t;
  }
  return function (e, t) {
    let r = dayjs(e.start);
    let i = dayjs(e.end);
    if (!r.isValid()) return {
      message: "The start date is invalid",
      field: "startDate"
    };
    if (!i.isValid()) return {
      message: "The end date is invalid",
      field: "endDate"
    };
    if (r.diff(i, "days") > 0) return {
      message: "The start date cannot be greater than the end date",
      field: "startDate"
    };
    let {
      today,
      minDate
    } = $$a0(t);
    return r.diff(today, "days") > 0 || 0 > r.diff(minDate, "days") ? {
      message: "The start date is out of range",
      field: "startDate"
    } : i.diff(today, "days") > 0 ? {
      message: "The end date is out of range",
      field: "endDate"
    } : null;
  }(e, r);
}
export const Bd = $$a0;
export const H3 = $$s1;
export const KJ = $$o2;