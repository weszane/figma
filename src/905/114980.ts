import { jsx } from "react/jsx-runtime";
import { tx, t } from "../905/303541";
import { ud } from "../905/513035";
import { VG } from "../905/389382";
export function $$o0(e) {
  return e.licenseType ? jsx("span", {
    className: "x13faqbe",
    children: tx("social_proof.message.with_license_type", {
      userName: e.firstUserName,
      totalActiveUsers: e.totalActiveUsers - 1,
      licenseType: VG(e.licenseType)
    })
  }) : jsx("span", {
    className: "x13faqbe",
    children: tx("social_proof.message.with_seat_type", {
      userName: e.firstUserName,
      totalActiveUsers: e.totalActiveUsers - 1,
      seatType: function (e) {
        switch (e) {
          case ud.EXPERT:
            return t("social_proof.message.seat_type.expert");
          case ud.DEVELOPER:
            return t("social_proof.message.seat_type.developer");
          case ud.COLLABORATOR:
            return t("social_proof.message.seat_type.collaborator");
          case ud.DESIGN:
          case ud.FIGJAM:
          case ud.DEV_MODE:
          case ud.SLIDES:
          case ud.CONTENT:
            return "";
        }
      }(e.seatType)
    })
  });
}
export const z = $$o0;