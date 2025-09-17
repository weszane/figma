import { jsx } from "react/jsx-runtime";
import { renderI18nText, getI18nString } from "../905/303541";
import { ProductAccessTypeEnum } from "../905/513035";
import { getProductName } from "../905/389382";
export function $$o0(e) {
  return e.licenseType ? jsx("span", {
    className: "x13faqbe",
    children: renderI18nText("social_proof.message.with_license_type", {
      userName: e.firstUserName,
      totalActiveUsers: e.totalActiveUsers - 1,
      licenseType: getProductName(e.licenseType)
    })
  }) : jsx("span", {
    className: "x13faqbe",
    children: renderI18nText("social_proof.message.with_seat_type", {
      userName: e.firstUserName,
      totalActiveUsers: e.totalActiveUsers - 1,
      seatType: function (e) {
        switch (e) {
          case ProductAccessTypeEnum.EXPERT:
            return getI18nString("social_proof.message.seat_type.expert");
          case ProductAccessTypeEnum.DEVELOPER:
            return getI18nString("social_proof.message.seat_type.developer");
          case ProductAccessTypeEnum.COLLABORATOR:
            return getI18nString("social_proof.message.seat_type.collaborator");
          case ProductAccessTypeEnum.DESIGN:
          case ProductAccessTypeEnum.FIGJAM:
          case ProductAccessTypeEnum.DEV_MODE:
          case ProductAccessTypeEnum.SLIDES:
          case ProductAccessTypeEnum.CONTENT:
            return "";
        }
      }(e.seatType)
    })
  });
}
export const z = $$o0;