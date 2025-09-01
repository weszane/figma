import { jsx } from "react/jsx-runtime";
import { wA } from "../vendor/514228";
import { md } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { tx } from "../905/303541";
import { to } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { mp } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { TA } from "../905/372672";
import { N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { kA, IO } from "../905/962318";
import { hxO } from "../figma_app/6204";
let x = 443 == require.j ? 864e5 : null;
let y = () => Date.now() - x;
let v = "seen_japanese_launch_announcement";
let w = r1(v);
export function $$T0() {
  let e = wA();
  let t = TA();
  let n = md(mp);
  let m = md(w);
  let x = _$$e({
    overlay: hxO,
    priority: N.DEFAULT_MODAL
  }, [n, m]);
  _$$h(() => {
    let e = getInitialOptions()?.iso_code === "JP";
    let t = getInitialOptions()?.user_data?.locale === "ja";
    e && !t && x.show({
      canShow: (e, t) => !t && null != e && e.getTime() < y()
    });
  });
  return jsx(_l, {
    isShowing: x.isShowing,
    title: tx("rcs.japanese_launch_modal.title"),
    description: tx("rcs.japanese_launch_modal.body"),
    media: jsx("img", {
      width: 408,
      src: buildUploadUrl("aa243114f8307af99f0c1728ada3182f8568a919"),
      alt: ""
    }),
    primaryCta: {
      type: "button",
      label: tx("rcs.japanese_launch_modal.button"),
      onClick: () => {
        e(to({
          type: kA,
          data: {
            source: IO.ANNOUNCEMENT_MODAL
          }
        }));
      },
      ctaTrackingDescriptor: _$$c.UPDATE_LANGUAGE_SETTINGS,
      trackingProperties: {
        userId: t
      }
    },
    trackingContextName: "Japanese Launch Announcement Modal",
    userFlagOnShow: v,
    onClose: x.complete
  });
}
export const P = $$T0;