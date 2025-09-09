import { jsx } from "react/jsx-runtime";
import { GZ } from "../905/508367";
import { customHistory } from "../905/612521";
import { getInitialOptions } from "../figma_app/169182";
import { vd } from "../figma_app/637027";
import { u as _$$u } from "../905/684425";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { sZ } from "../905/845253";
import { registerModal } from "../905/102752";
import { K } from "../905/12775";
import { H } from "../905/444904";
import { A } from "../5724/965092";
let g = _$$s.colorIcon.h32.w28.pb32.$;
let f = _$$s.w300.maxWFull.font13.h40.cursorPointer.$;
let $$E1 = "LINK_EXPIRED_MODAL";
let $$y0 = registerModal(function () {
  let {
    frame_context
  } = getInitialOptions();
  let t = GZ() && frame_context?.type === "embed";
  let r = sZ();
  return K() && r ? jsx(H, {
    org: r
  }) : jsx(_$$u, {
    imageSrc: A,
    imageClassName: g,
    headerText: getI18nString("link_expired.header"),
    secondaryText: getI18nString("link_expired.description"),
    children: !t && jsx(vd, {
      className: f,
      type: "submit",
      onClick: () => {
        customHistory.redirect("/");
      },
      children: renderI18nText("link_expired.go_back_to_figma")
    })
  });
}, $$E1);
export const J = $$y0;
export const M = $$E1;