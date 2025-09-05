import { jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { gw5, T4N } from "../figma_app/763686";
import { md, Rq } from "../figma_app/27355";
import { buildUploadUrl } from "../figma_app/169182";
import { tx } from "../905/303541";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { Sb } from "../figma_app/101956";
import { mp } from "../figma_app/579169";
import { Fu } from "../figma_app/545877";
import { q } from "../905/924253";
import { zC, re } from "../figma_app/186343";
import { Fk } from "../figma_app/167249";
import { N as _$$N } from "../figma_app/268271";
import { w as _$$w } from "../905/129046";
import { rq } from "../905/425180";
import { Td } from "../905/595131";
import { F_ } from "../905/858282";
import { pjo } from "../figma_app/6204";
import { rM, dO } from "../figma_app/318123";
import { c as _$$c2 } from "../905/850166";
import { w as _$$w2 } from "../figma_app/106955";
import { _ as _$$_ } from "../figma_app/91620";
import { P as _$$P } from "../905/184837";
import { iH } from "../figma_app/449975";
import { H as _$$H } from "../9410/25542";
let $$A1 = "section_presets_announcement_key";
let O = "seen_figjam_section_presets_announcement";
let $$L0 = Fu(O);
export function $$R2() {
  let e = md(_$$P) === iH.TRUE;
  let t = useSelector(e => e.mirror.appModel.currentPage);
  let i = Fk((t, i) => zC(t, i) || e && re(t, i), t);
  let m = q();
  let R = md(Rq(Sb));
  let D = md($$L0);
  let M = md(_$$w2);
  let P = _$$_();
  let F = Td();
  let B = function () {
    let [e, t] = useState(!1);
    let i = useSelector(e => e.isMakeSomethingV2Active);
    let r = md(rM);
    useEffect(() => {
      (i || r) && t(!0);
    }, [r, i]);
    return e;
  }();
  let U = md(dO);
  let G = md(mp);
  let K = U.status !== _$$c2.NONE;
  let [H, z] = useState(!1);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: pjo,
    priority: _$$N.SECONDARY_MODAL
  }, [D, R, G]);
  let J = 1e3 * parseFloat(_$$H) + 1e3;
  useEffect(() => {
    let e = setTimeout(() => {
      z(!0);
    }, J);
    return () => {
      clearTimeout(e);
    };
  }, [J]);
  useEffect(() => {
    M && !B && !K && i && m && P && H && !F && show({
      canShow: (e, t, i) => {
        let r = function (e) {
          let t = Date.now();
          return e.getTime() <= t - 12096e5;
        }(i);
        return !e && !t && r;
      }
    });
  }, [show, i, m, M, P, H, K, B, F]);
  return jsx(rq, {
    arrowPosition: F_.BOTTOM,
    description: tx("whiteboard.section_presets_onboarding.feature_announcement.description"),
    isShowing,
    media: jsx(_$$w, {
      src: buildUploadUrl("0ccb9b0b677f719939bd9bacd937201dfea4e8c9"),
      aspectRatio: 4 / 3
    }),
    onClose: complete,
    primaryCta: {
      label: tx("rcs.got_it"),
      type: "button",
      onClick: complete,
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    secondaryCta: {
      label: tx("whiteboard.section_presets_onboarding.feature_announcement.secondary"),
      type: "button",
      onClick: () => {
        e && gw5.setFigjamStarterKitEnabled(!1);
        T4N.createSectionForOnboarding();
        complete();
      },
      ctaTrackingDescriptor: _$$c.SECTION_PRESET_PICKER_SHOW_ME
    },
    targetKey: $$A1,
    title: tx("whiteboard.section_presets_onboarding.feature_announcement.title"),
    trackingContextName: "section_preset_picker_dlt_announcement",
    userFlagOnShow: O
  });
}
export const m5 = $$L0;
export const pN = $$A1;
export const rj = $$R2;